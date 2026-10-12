// Compiler builtins: the __builtin_ math and bit functions.
namespace CTJ {

export const MATH_BUILTINS = new Set([
  "__builtin_sqrt", "__builtin_sqrtf", "__builtin_sqrtl", "__builtin_cbrt",
  "__builtin_sin", "__builtin_cos", "__builtin_tan", "__builtin_asin",
  "__builtin_acos", "__builtin_atan", "__builtin_atan2", "__builtin_exp",
  "__builtin_exp2", "__builtin_log", "__builtin_log10", "__builtin_log2",
  "__builtin_pow", "__builtin_floor", "__builtin_floorf", "__builtin_ceil",
  "__builtin_ceilf", "__builtin_round", "__builtin_trunc", "__builtin_fabs",
  "__builtin_fabsf", "__builtin_fabsl", "__builtin_fmod", "__builtin_copysign",
  "__builtin_fmin", "__builtin_fmax", "__builtin_hypot", "__builtin_sinh",
  "__builtin_cosh", "__builtin_tanh", "__builtin_nan", "__builtin_nanf",
  "__builtin_nans", "__builtin_inf", "__builtin_inff", "__builtin_huge_val",
]);

export function isMathBuiltin(name: string): boolean {
  return MATH_BUILTINS.has(name);
}

// The "unsigned long"/"unsigned long long" variants of the bit builtins
// ("__builtin_popcountl", "__builtin_ctzll"): the width of the argument does
// not change the value, so they are spelled like the plain form.
export function bitBuiltin(name: string): string {
  for (const b of ["__builtin_popcount", "__builtin_parity", "__builtin_clz", "__builtin_ctz", "__builtin_ffs"]) {
    if (name === b || name === b + "l" || name === b + "ll") return b;
  }
  return "";
}

export function builtinCall(cx: Cx, e: CallExpr, name: string, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
  cx.getAnn(e).call = { builtin: name };
  if (name.startsWith("__is_")) {
    // GCC answers these type traits itself. The classes collected from the
    // headers are enough to work them out, and the answer is a constant, so one
    // value serves both the constant-expression path and the emitted code.
    const v = typeTrait(cx, name, e.args, scope);
    if (v === null) cx.warn(`${name} could not be evaluated, using 0`, e);
    cx.getAnn(e).call = { builtin: name, value: v === null ? 0 : v };
    return CppType.basic("bool");
  }
  const voidPtr = () => {
    const t = CppType.basic("void");
    t.ptr = 1;
    return t;
  };
  if (name === "__builtin_expect" || name === "__builtin_expect_with_probability") {
    if (!argTs.length) cx.fail(`${name} needs arguments`, e);
    return argTs[0].t;
  }
  if (name === "__builtin_choose_expr") {
    if (argTs.length !== 3) cx.fail("__builtin_choose_expr needs 3 arguments", e);
    const c = constEval(cx, e.args[0], scope);
    return argTs[c ? 1 : 2].t;
  }
  if (name === "__builtin_constant_p") return CppType.basic("int");
  if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
    return CppType.basic("void");
  }
  if (name === "__builtin_memcpy" || name === "__builtin_memmove" || name === "__builtin_memset") {
    return voidPtr();
  }
  if (name === "__builtin_memcmp") return CppType.basic("int");
  if (name === "__builtin_strlen" || name === "__builtin_strcmp" || name === "__builtin_strncmp") {
    return CppType.basic(name === "__builtin_strlen" ? "unsigned long" : "int");
  }
  if (name === "__builtin_strcpy" || name === "__builtin_strncpy" || name === "__builtin_strcat" || name === "__builtin_strchr") {
    const t = CppType.basic("char");
    t.ptr = 1;
    return t;
  }
  if (name === "__builtin_offsetof") {
    cx.warn("__builtin_offsetof approximated as 0", e);
    return CppType.basic("unsigned int");
  }
  if (name === "__builtin_va_start" || name === "__builtin_va_end" || name === "__builtin_va_copy" || name === "va_arg") {
    cx.fail("C varargs are not supported", e);
  }
  if (name === "__builtin_types_compatible_p") return CppType.basic("int");
  if (name === "__builtin_alloca") return voidPtr();
  if (name === "__builtin_frame_address" || name === "__builtin_return_address" || name === "__builtin_extract_return_addr") {
    cx.warn(`${name} is not supported, stubbed as null`, e);
    return voidPtr();
  }
  if (bitBuiltin(name) || name === "__builtin_bswap16" ||
    name === "__builtin_bswap32" || name === "__builtin_bswap64") {
    return CppType.basic("int");
  }
  if (name === "__builtin_add_overflow" || name === "__builtin_sub_overflow" || name === "__builtin_mul_overflow") {
    cx.warn(`${name} approximated as false`, e);
    return CppType.basic("bool");
  }
  if (MATH_BUILTINS.has(name)) return CppType.basic("double");
  if (name === "__builtin_FILE") {
    const t = CppType.basic("char");
    t.ptr = 1;
    return t;
  }
  if (name === "__builtin_LINE") return CppType.basic("int");
  if (name === "__builtin_FUNCTION") {
    const t = CppType.basic("char");
    t.ptr = 1;
    return t;
  }
  cx.warn(`unknown ${name}, stubbed`, e);
  return CppType.basic("__any");
}
}
