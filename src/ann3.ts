namespace CTJ {

const MATH_BUILTINS = new Set([
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

export function builtinCall(cx: Cx, e: CallExpr, name: string, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
  cx.getAnn(e).call = { builtin: name };
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
    cx.warn(`${name} has no definition, stubbed`, e);
    return voidPtr();
  }
  if (name === "__builtin_strlen" || name === "__builtin_strcmp" || name === "__builtin_strncmp") {
    cx.warn(`${name} has no definition, stubbed`, e);
    return CppType.basic(name === "__builtin_strlen" ? "unsigned long" : "int");
  }
  if (name === "__builtin_strcpy" || name === "__builtin_strncpy" || name === "__builtin_strcat" || name === "__builtin_strchr") {
    cx.warn(`${name} has no definition, stubbed`, e);
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
  if (name === "__builtin_clz" || name === "__builtin_ctz" || name === "__builtin_popcount" ||
    name === "__builtin_ffs" || name === "__builtin_parity" || name === "__builtin_bswap16" ||
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

let lambdaCount = 0;

export function analyzeLambda(cx: Cx, e: LambdaExpr, scope: Scope): CppType {
  const fq = "$lambda_" + (lambdaCount++);
  const emptyCls: ClassDecl = {
    kind: "class", name: fq, cls: "struct", bases: [], members: [],
    isDeclOnly: false, specArgs: [], isPartialSpec: false, file: e.file, line: e.line,
  };
  const cls = cx.blankCls(fq, fq, emptyCls, scope);
  cls.complete = true;
  cls.isLambda = true;
  cls.mangled = fq;
  cx.classes.set(fq, cls);
  const decl: FuncDecl = {
    kind: "func", name: [qseg("operator")], ret: e.ret, params: e.params,
    body: [{ kind: "compound", stmts: e.body, file: e.file, line: e.line }],
    flags: e.mutable ? [] : ["const"], op: "()", ctorInit: [],
    isCtor: false, isDtor: false, isConv: false, isDefault: false,
    isDelete: false, trailing: null, file: e.file, line: e.line,
  };
  const fn = cx.addMethod(cls, "operator()", decl, scope);
  fn.analyzed = true;
  const sub = cx.snapScope(scope);
  sub.fn = fn;
  sub.locals.push(new Map());
  const outer = new Set<VarInfo>();
  for (const layer of scope.locals) {
    for (const [k, v] of layer) {
      if (!sub.locals[0].has(k)) sub.locals[0].set(k, v);
      outer.add(v);
    }
  }
  const params = cx.funcParams(fn);
  params.forEach((p, i) => {
    const node = decl.params[i];
    const nm = p.name || "$p" + i;
    const v: VarInfo = {
      fq: fq + "::" + nm, short: nm, mangled: safeJsName(nm),
      decl: {
        kind: "var", name: [qseg(nm)], type: node ? node.type : typeNode([]),
        init: null, directInit: null, flags: [], bitfield: null, isParam: true, file: e.file, line: e.line,
      },
      scope: sub, typeCache: p.type, storage: isBoxedVar(p.type) ? "box" : "plain",
      isGlobal: false, isStatic: false, isParam: true, isField: false, lifted: false, referenced: true,
    };
    if (node) cx.getAnn(node).var = v;
    sub.locals[0].set(nm, v);
  });
  for (const s of e.body) annotateStmt(cx, s, sub);
  const used = new Set<VarInfo>();
  for (const s of e.body) collectOuterIds(cx, s, outer, used);
  const caps: { name: string; mode: string; v: VarInfo }[] = [];
  for (const v of used) {
    if (v.isGlobal) continue;
    let mode = "";
    const ex = e.captures.find(c => c.name === v.short);
    if (ex) mode = ex.mode;
    else if (e.defCapture === "=" || e.defCapture === "&") mode = e.defCapture;
    else cx.fail(`'${v.short}' is not captured`, e);
    caps.push({ name: v.short, mode, v });
  }
  if (usesThis(e)) caps.push({ name: "this", mode: "this", v: null as unknown as VarInfo });
  cx.getAnn(e).caps = caps;
  if (!e.ret) {
    fn.retCache = sub.returns.length ? sub.returns[0] : CppType.basic("void");
  } else {
    fn.retCache = cx.resolveTypeNode(e.ret, scope);
  }
  return classType(cls);
}

function usesThis(e: LambdaExpr): boolean {
  let found = false;
  const walk = (x: unknown): void => {
    if (found || !x || typeof x !== "object") return;
    if ((x as Expr).kind === "this") {
      found = true;
      return;
    }
    for (const k of Object.keys(x)) {
      const v = (x as Record<string, unknown>)[k];
      if (Array.isArray(v)) {
        for (const u of v) walk(u);
      } else if (v && typeof v === "object") walk(v);
    }
  };
  for (const s of e.body) walk(s);
  return found;
}

function collectOuterIds(cx: Cx, s: Stmt, outer: Set<VarInfo>, used: Set<VarInfo>): void {
  const walk = (x: unknown): void => {
    if (!x || typeof x !== "object") return;
    const a = cx.ann.get(x as object);
    if (a && a.sym && a.sym.k === "var" && outer.has(a.sym.v)) used.add(a.sym.v);
    for (const k of Object.keys(x)) {
      if (k === "type" || k === "ret" || k === "trailing") continue;
      const v = (x as Record<string, unknown>)[k];
      if (Array.isArray(v)) {
        for (const u of v) walk(u);
      } else if (v && typeof v === "object") walk(v);
    }
  };
  walk(s);
}

export function constEval(cx: Cx, e: Expr, scope: Scope): number | string | null {
  return constEvalInner(cx, e, scope, new Set());
}

function constEvalInner(cx: Cx, e: Expr, scope: Scope, seen: Set<string>): number | string | null {
  switch (e.kind) {
    case "lit": {
      if (e.lkind === "int") return parseNumber(e.value);
      if (e.lkind === "char") return parseChar(e.value);
      if (e.lkind === "bool") return e.value === "true" ? 1 : 0;
      if (e.lkind === "null") return 0;
      return null;
    }
    case "id": {
      const s = cx.resolveSym(e.parts, e.global, scope);
      if (!s) return null;
      if (s.k === "enumval") {
        const vals = cx.enumValues(s.e);
        return vals.get(s.item) ?? null;
      }
      if (s.k === "var") {
        const v = s.v;
        if (v.fq && seen.has(v.fq)) return null;
        if (v.decl.flags.includes("const") || v.decl.flags.includes("constexpr")) {
          const init = v.decl.init || (v.decl.directInit && v.decl.directInit[0]);
          if (!init || (init as Expr).kind === "initlist") return null;
          if (v.fq) seen.add(v.fq);
          return constEvalInner(cx, init as Expr, v.scope, seen);
        }
        return null;
      }
      return null;
    }
    case "unary": {
      const a = constEvalInner(cx, e.arg, scope, seen);
      if (typeof a !== "number") return null;
      switch (e.op) {
        case "+": return a;
        case "-": return -a;
        case "!": return a ? 0 : 1;
        case "~": return ~a;
        default: return null;
      }
    }
    case "binary": {
      const a = constEvalInner(cx, e.l, scope, seen);
      const b = constEvalInner(cx, e.r, scope, seen);
      if (typeof a !== "number" || typeof b !== "number") return null;
      switch (e.op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? null : Math.trunc(a / b);
        case "%": return b === 0 ? null : a % b;
        case "<<": return a << b;
        case ">>": return a >> b;
        case "&": return a & b;
        case "|": return a | b;
        case "^": return a ^ b;
        case "&&": return a && b ? 1 : 0;
        case "||": return a || b ? 1 : 0;
        case "==": return a === b ? 1 : 0;
        case "!=": return a !== b ? 1 : 0;
        case "<": return a < b ? 1 : 0;
        case ">": return a > b ? 1 : 0;
        case "<=": return a <= b ? 1 : 0;
        case ">=": return a >= b ? 1 : 0;
        case ",": return b;
        default: return null;
      }
    }
    case "cond": {
      const c = constEvalInner(cx, e.c, scope, seen);
      if (typeof c !== "number") return null;
      return constEvalInner(cx, c ? e.a : e.b, scope, seen);
    }
    case "cast": {
      if (!e.type) return null;
      const t = cx.resolveTypeNode(e.type, scope);
      if (t.ptr > 0 || t.isFunc) return null;
      return constEvalInner(cx, e.arg, scope, seen);
    }
    case "sizeof": {
      if (e.packName) return null;
      let t: CppType | null = null;
      if (e.isType && e.type) t = cx.resolveTypeNode(e.type, scope);
      else if (e.expr) {
        try { t = typeOf(cx, e.expr, scope); } catch { return null; }
      }
      if (!t) return null;
      try { return constSizeof(cx, t, new Set()); } catch { return null; }
    }
    default:
      return null;
  }
}

export function constSizeof(cx: Cx, t: CppType, seen: Set<string>): number {
  if (t.ptr > 0 || t.ref !== "" || t.isFunc) return 8;
  if (t.dims.length) {
    const n = t.dims[0];
    if (n < 0) cx.fail("sizeof incomplete array");
    const e = new CppType(t.name);
    e.segs = t.segs;
    e.dims = t.dims.slice(1);
    return n * constSizeof(cx, e, seen);
  }
  const n = coreName(t);
  if (t.name === "__null") return 8;
  switch (n) {
    case "void": cx.fail("sizeof void"); break;
    case "bool": return 1;
    case "char": case "signed char": case "unsigned char": return 1;
    case "wchar_t": return 4;
    case "char16_t": return 2;
    case "char32_t": return 4;
    case "short": case "unsigned short": return 2;
    case "int": case "unsigned int": return 4;
    case "long": case "unsigned long": return 8;
    case "long long": case "unsigned long long": return 8;
    case "float": return 4;
    case "double": case "long double": return 8;
    default: break;
  }
  const fq = cx.stripAll(t);
  if (cx.enums.has(fq)) return 4;
  const cls = cx.classes.get(fq);
  if (!cls || !cls.complete) cx.fail(`sizeof incomplete type '${fq}'`);
  if (seen.has(fq)) cx.fail(`sizeof recursive type '${fq}'`);
  seen.add(fq);
  let size = 0;
  let virt = false;
  const c = cls as ClsInfo;
  for (const b of c.bases) {
    if (b.isVirtual) size += 8;
    else size += constSizeof(cx, classType(cx.classes.get(b.fq) as ClsInfo), seen);
  }
  for (const fns of c.methods.values()) {
    for (const f of fns) {
      if (f.isVirtual) virt = true;
    }
  }
  if (virt) size += 8;
  if (c.isUnion) {
    let mx = 0;
    for (const [name] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      mx = Math.max(mx, constSizeof(cx, cx.fieldType(c, name), seen));
    }
    size += mx;
  } else {
    for (const [name] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      size += constSizeof(cx, cx.fieldType(c, name), seen);
    }
  }
  seen.delete(fq);
  return size || 1;
}

}
