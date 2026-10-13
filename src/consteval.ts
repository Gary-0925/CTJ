// Compile-time evaluation: constant expressions, type traits and sizeof.
namespace CTJ {
  // <type_traits> is written with the compiler's __is_* builtins. The transpiler
  // collected every class it read, so it can answer them itself.
  export function typeTrait(cx: Cx, nm: string, args: Expr[], scope: Scope): number | null {
    const ts: CppType[] = [];
    for (const a of args) {
      if (a.kind !== "id") return null;
      const tn: TypeNode = {
        kind: "type",
        parts: a.parts,
        global: a.global,
        ptr: 0,
        ref: "",
        cnst: false,
        dims: [],
        func: null,
        decltypeOf: null,
        packExpand: false,
        valueArg: null,
        file: a.file,
        line: a.line,
      };
      try {
        ts.push(cx.resolveTypeNode(tn, scope));
      } catch {
        return null;
      }
    }
    if (!ts.length) return null;
    const cls = cx.classes.get(ts[0].name) || null;
    switch (nm) {
      case "__is_final":
        return 0;
      case "__is_enum":
        return cx.enums.has(ts[0].name) ? 1 : 0;
      case "__is_union":
        return cls && cls.isUnion ? 1 : 0;
      case "__is_class":
        return cls && !cls.isUnion ? 1 : 0;
      case "__is_polymorphic":
        return cls && hasVirtualMethod(cx, cls.fq, false) ? 1 : 0;
      case "__is_abstract":
        return cls && hasVirtualMethod(cx, cls.fq, true) ? 1 : 0;
      case "__is_empty": {
        if (!cls || cls.isUnion || hasVirtualMethod(cx, cls.fq, false)) return 0;
        let empty = true;
        eachCls(cx, cls.fq, new Set(), c => {
          for (const n of c.fields.keys()) {
            if (!c.fieldStatic.has(n)) {
              empty = false;
              return false;
            }
          }
          return true;
        });
        return empty ? 1 : 0;
      }
      case "__is_pod":
      case "__is_trivial":
      case "__is_standard_layout":
      case "__is_literal_type":
      // The compiler's own "__has_trivial_*" traits stand for the same idea: a
      // builtin type constructs, copies and destroys trivially, a class does
      // not, so the branches they guard in the headers ("if
      // (!__has_trivial_destructor(value_type)) _M_destroy_data_aux(...)") are
      // the ones a class needs.
      case "__has_trivial_destructor":
      case "__has_trivial_constructor":
      case "__has_trivial_copy":
      case "__has_trivial_assign":
        return ts[0].ptr === 0 && ts[0].dims.length === 0 && isPlainType(cx, ts[0], new Set()) ? 1 : 0;
      case "__has_virtual_destructor":
        return cls && hasVirtualMethod(cx, cls.fq, false) ? 1 : 0;
      case "__is_base_of": {
        if (ts.length < 2) return null;
        const base = cx.classes.get(ts[0].name);
        const d = cx.classes.get(ts[1].name);
        if (!base || !d) return 0;
        if (base.fq === d.fq) return base.isUnion ? 0 : 1;
        let hit = false;
        eachCls(cx, d.fq, new Set(), c => {
          if (c.fq !== d.fq && c.fq === base.fq) {
            hit = true;
            return false;
          }
          return true;
        });
        return hit ? 1 : 0;
      }
      default:
        return null;
    }
  }

  // "static const size_type npos" carries its constness in the type rather than
  // among the flags of the declaration.
  export function isConstVar(cx: Cx, v: VarInfo): boolean {
    if (v.decl.flags.includes("const") || v.decl.flags.includes("constexpr")) return true;
    try {
      const t = v.typeCache || cx.resolveTypeNode(v.decl.type, v.scope);
      return !!t && t.cnst;
    } catch {
      return false;
    }
  }

  export function constEval(cx: Cx, e: Expr, scope: Scope): number | string | null {
    return constEvalInner(cx, e, scope, new Set());
  }

  export function constEvalInner(cx: Cx, e: Expr, scope: Scope, seen: Set<string>): number | string | null {
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
          if (isConstVar(cx, v)) {
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
          case "+":
            return a;
          case "-":
            return -a;
          case "!":
            return a ? 0 : 1;
          case "~":
            return ~a;
          default:
            return null;
        }
      }
      case "binary": {
        const a = constEvalInner(cx, e.l, scope, seen);
        const b = constEvalInner(cx, e.r, scope, seen);
        if (typeof a !== "number" || typeof b !== "number") return null;
        switch (e.op) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
          case "/":
            return b === 0 ? null : Math.trunc(a / b);
          case "%":
            return b === 0 ? null : a % b;
          case "<<":
            return a << b;
          case ">>":
            return a >> b;
          case "&":
            return a & b;
          case "|":
            return a | b;
          case "^":
            return a ^ b;
          case "&&":
            return a && b ? 1 : 0;
          case "||":
            return a || b ? 1 : 0;
          case "==":
            return a === b ? 1 : 0;
          case "!=":
            return a !== b ? 1 : 0;
          case "<":
            return a < b ? 1 : 0;
          case ">":
            return a > b ? 1 : 0;
          case "<=":
            return a <= b ? 1 : 0;
          case ">=":
            return a >= b ? 1 : 0;
          case ",":
            return b;
          default:
            return null;
        }
      }
      case "noexcept":
        // The generated languages have no exception specification to violate and
        // no destructive move, so no expression here can throw. The traits use
        // this only to choose between moving and copying, which the output does
        // not distinguish.
        return 1;
      case "cond": {
        const c = constEvalInner(cx, e.c, scope, seen);
        if (typeof c !== "number") return null;
        return constEvalInner(cx, c ? e.a : e.b, scope, seen);
      }
      case "cast": {
        if (!e.type) return null;
        const t = cx.resolveTypeNode(e.type, scope);
        if (t.ptr > 0 || t.isFunc) return null;
        // "_CharT()" value-initialises: the empty list stands for zero.
        if (e.arg.kind === "initlist" && !(e.arg as InitListExpr).items.length) return 0;
        const a = constEvalInner(cx, e.arg, scope, seen);
        if (typeof a !== "number") return a;
        // An unsigned value wraps; the mask width depends on the type.
        if (!isUnsignedName(coreName(t))) return a;
        const cn = coreName(t);
        if (cn === "unsigned char" || cn === "signed char" || cn === "char" || cn === "char16_t") return a & 0xff;
        if (cn === "unsigned short" || cn === "short" || cn === "wchar_t") return a & 0xffff;
        // The 64-bit value is only approximated by a number here; the exact value is
        // built from BigInt literals by the code generator.
        if (cn === "unsigned long long") return Number(BigInt.asUintN(64, BigInt(Math.trunc(a))));
        return a >>> 0;
      }
      case "call": {
        const nm = e.fn.kind === "id" && e.fn.parts.length === 1 ? e.fn.parts[0].n : "";
        if (!nm.startsWith("__is_") && !nm.startsWith("__has_")) return null;
        return typeTrait(cx, nm, e.args, scope);
      }
      case "sizeof": {
        if (e.packName) return null;
        let t: CppType | null = null;
        if (e.isType && e.type) t = cx.resolveTypeNode(e.type, scope);
        else if (e.expr) {
          try {
            t = typeOf(cx, e.expr, scope);
          } catch {
            return null;
          }
        }
        if (!t) return null;
        try {
          return constSizeof(cx, t, new Set());
        } catch {
          return null;
        }
      }
      default:
        return null;
    }
  }

  // The target is ILP32: long, size_t and pointers are 4 bytes.
  const POINTER_SIZE = 4;

  export function constSizeof(cx: Cx, t: CppType, seen: Set<string>): number {
    if (t.ptr > 0 || t.ref !== "" || t.isFunc) return POINTER_SIZE;
    if (t.dims.length) {
      const n = t.dims[0];
      if (n < 0) cx.fail("sizeof incomplete array");
      const e = new CppType(t.name);
      e.segs = t.segs;
      e.dims = t.dims.slice(1);
      return n * constSizeof(cx, e, seen);
    }
    const n = coreName(t);
    if (t.name === "__null") return POINTER_SIZE;
    switch (n) {
      case "void":
        cx.fail("sizeof void");
        break;
      case "bool":
        return 1;
      case "char":
      case "signed char":
      case "unsigned char":
        return 1;
      case "wchar_t":
        return 4;
      case "char16_t":
        return 2;
      case "char32_t":
        return 4;
      case "short":
      case "unsigned short":
        return 2;
      case "int":
      case "unsigned int":
        return 4;
      case "long":
      case "unsigned long":
        return 4;
      case "long long":
      case "unsigned long long":
        return 8;
      case "float":
        return 4;
      case "double":
      case "long double":
        return 8;
      default:
        break;
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
