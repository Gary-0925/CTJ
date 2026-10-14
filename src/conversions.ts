// Match scores between arguments and parameters, and the implicit conversions
// that a match implies.
namespace CTJ {
  export interface MatchResult {
    s: number;
    conv: { kind: string; fn: FuncInfo } | null;
  }

  export const NOMATCH: MatchResult = { s: -1e17, conv: null };

  export function matchScore(cx: Cx, p: CppType, a: CppType, e: Expr | null, scope: Scope, allowConv: boolean): MatchResult {
    if (p.name === "__any" || a.name === "__any") return { s: 80, conv: null };
    if (p.key() === a.key()) return { s: 100, conv: null };
    if (a.name === "__null") {
      if (p.ptr > 0 || p.isFunc) return { s: 70, conv: null };
      if (coreName(p) === "bool") return { s: 50, conv: null };
      if (isIntegerName(coreName(p))) return { s: 40, conv: null };
      return NOMATCH;
    }
    if (e && e.kind === "lit" && (e as LitExpr).lkind === "int" && parseNumber((e as LitExpr).value) === 0 && p.ptr > 0) {
      return { s: 70, conv: null };
    }
    if (p.core().key() === a.core().key()) {
      // A reference of one kind does not bind to a reference of the other: an
      // rvalue cannot be a "T&", so "merge(list&)" delegating with
      // "merge(std::move(__x))" reaches "merge(list&&)" and "set(int&)"
      // delegating with "set(1)" reaches "set(int&&)"; and an lvalue cannot be
      // a "T&&", so "a.set(z)" reaches "set(int&)". Both still convert, at a
      // lower rank, so the headers that pass a move or an lvalue where only one
      // of the two exists keep working.
      if (e && ((p.ref === "&" && !p.cnst && !isLvalueExpr(cx, e)) || (p.ref === "&&" && !p.cnst && isLvalueExpr(cx, e)))) {
        return { s: 85, conv: null };
      }
      return { s: 90, conv: null };
    }
    const pn = coreName(p);
    const an = coreName(a);
    // An array decays to a pointer to its first element, whether it is passed by
    // value or by reference ("std::declval<char(&)[5]>()" converts to "const char*").
    const decays = a.dims.length > 0 && (!a.isBox() || (a.ref !== "" && a.ptr === 0));
    if (decays && p.ptr > 0 && pn === an && p.ptr === a.ptr + 1) {
      return { s: 90, conv: null };
    }
    if (decays && p.ptr > 0 && pn === "void") return { s: 70, conv: null };
    if (p.isFunc && e) {
      const fn = instantiateAddrOf(cx, e, p, scope);
      if (fn) {
        let cur: Expr = e;
        if (cur.kind === "unary" && (cur as UnaryExpr).op === "&") cur = (cur as UnaryExpr).arg;
        cx.getAnn(cur).sym = { k: "func", fns: [fn] };
        cx.getAnn(cur).t = funcSig(cx, fn);
        cx.markFunc(fn);
        return { s: 90, conv: null };
      }
    }
    if (p.isFunc && a.isFunc) {
      if (funcSigMatch(cx, p, a)) return { s: 90, conv: null };
      return NOMATCH;
    }
    if (p.isFunc && cx.classes.has(cx.stripAll(a))) {
      const m = cx.lookupMember(cx.stripAll(a), "operator()", new Set());
      if (m.methods) {
        for (const f of m.methods) {
          const ps = cx.funcParams(f);
          if (ps.length === p.funcParams.length) return { s: 60, conv: null };
        }
      }
    }
    const pFq = !p.dims.length && !p.isFunc ? cx.stripAll(p) : "";
    const aFq = !a.dims.length && !a.isFunc ? cx.stripAll(a) : "";
    if (pFq && aFq && cx.classes.has(pFq) && cx.classes.has(aFq) && isDerived(cx, aFq, pFq)) {
      if (p.ptr === a.ptr || (p.ref !== "" && a.ptr === 0) || (p.ptr === 0 && p.ref === "" && a.ptr === 0 && a.ref === "")) {
        return { s: 80, conv: null };
      }
    }
    if (p.ptr > 0 && a.ptr > 0 && (pn === "void" || an === "void") && p.ptr === a.ptr) {
      return { s: 70, conv: null };
    }
    // Any object pointer converts to "void*", whatever it points at: the deque
    // hands the array of node pointers to "::operator delete(void*)", and a
    // "_Tp**" has to reach it.
    if (p.ptr === 1 && pn === "void" && a.ptr > 0 && !p.dims.length && !a.dims.length) {
      return { s: 70, conv: null };
    }
    if (cx.enums.has(pFq || pn) && isIntegerName(an)) return { s: 40, conv: null };
    // An unscoped enumeration promotes to int (a promotion); to bool it is a
    // boolean conversion, which ranks below the others.
    if (cx.enums.has(aFq || an) && isIntegerName(pn)) return { s: pn === "int" ? 70 : pn === "bool" ? 40 : 60, conv: null };
    if (cx.enums.has(pFq || pn) && cx.enums.has(aFq || an) && pn === an) return { s: 90, conv: null };
    if (isNumericName(pn) && isNumericName(an) && p.ptr === a.ptr && !p.dims.length && !a.dims.length && !p.isFunc && !a.isFunc) {
      if (pn === an) return { s: 90, conv: null };
      if (isIntegerName(pn) && isIntegerName(an)) return { s: 60, conv: null };
      if (!isIntegerName(pn) && !isIntegerName(an)) return { s: 60, conv: null };
      return { s: 50, conv: null };
    }
    if (pn === "bool" && isNumericName(an) && !a.dims.length && a.ptr === 0) return { s: 40, conv: null };
    if (isNumericName(pn) && an === "bool" && !p.dims.length && p.ptr === 0) return { s: 40, conv: null };
    if (pn === "bool" && a.ptr > 0) return { s: 40, conv: null };
    if (a.name === "__initlist" && p.ptr === 0 && !p.isFunc) {
      const cls = cx.classes.get(cx.stripAll(p));
      if (cls && cls.fromTmpl && last(cls.fromTmpl.split("::")) === "initializer_list") {
        // A braced list reaches this constructor only when its elements can
        // be the element type: "basic_string(__p, __n, __a)" writes three
        // constructor arguments, not a list of a pointer, a count and an
        // allocator.  An element that is a list of its own, as "map m{{1, 2}}"
        // has, is left to the constructor of the element type.
        const et = p.segs.length === 1 && p.segs[0].a.length === 1 ? p.segs[0].a[0] : null;
        const el = a.ret;
        if (et && el && el.name !== "__initlist" && matchScore(cx, et, el, null, scope, true).s < 0) return NOMATCH;
        return { s: 85, conv: null };
      }
      // "{1, 2}" also reaches a parameter of a class with an initializer_list
      // constructor, as "vv.push_back({1, 2})" does where "vv" holds vectors.
      if (allowConv) {
        const c0 = findConversion(cx, a, p, scope);
        if (c0) return { s: 25, conv: c0 };
        // "f({x, 1})" for "f(std::pair<int,int>)" or a class whose constructor
        // takes the items: the constructor is resolved from the items.
        if (initListPhase === 0 && e && e.kind === "initlist" && !(e as InitListExpr).parens) {
          const r = listCtorFor(cx, p, e as InitListExpr, scope);
          if (r) return { s: 25, conv: { kind: "ctor", fn: r.fn } };
        }
      }
      return NOMATCH;
    }
    if (p.name === "__initlist" || a.name === "__initlist") return NOMATCH;
    if (allowConv) {
      const c = findConversion(cx, a, p, scope);
      if (c) return { s: 30, conv: c };
    }
    return NOMATCH;
  }

  export function funcSigMatch(cx: Cx, p: CppType, a: CppType): boolean {
    void cx;
    if (p.funcVariadic !== a.funcVariadic) return false;
    if (p.funcParams.length !== a.funcParams.length) return false;
    if ((p.ret as CppType).key() !== (a.ret as CppType).key()) return false;
    for (let i = 0; i < p.funcParams.length; i++) {
      if (p.funcParams[i].key() !== a.funcParams[i].key()) return false;
    }
    return true;
  }

  export function findConversion(cx: Cx, from: CppType, to: CppType, scope: Scope): { kind: string; fn: FuncInfo } | null {
    // Binding to a reference converts to the referenced type and keeps the
    // object in a temporary: "f(\"ab\")" for "f(const std::string&)" builds a
    // string, so the reference is not what the constructor has to match.
    const target = to.ref !== "" ? noRef(to) : to;
    const toFq = !target.isBox() && !target.dims.length && !target.isFunc ? cx.stripAll(target) : "";
    if (toFq && cx.classes.has(toFq) && !(cx.stripAll(from) === toFq && !from.isBox())) {
      const cls = cx.classes.get(toFq) as ClsInfo;
      const ctors = cls.methods.get("#ctor") || [];
      for (const f of ctors) {
        if (f.decl.flags.includes("explicit")) continue;
        const ps = cx.funcParams(f);
        if (!ps.length || ps[0].variadic || ps[0].isPack) continue;
        // A converting constructor may take further arguments that are
        // defaulted, as "basic_string(const _CharT*, const _Alloc& = _Alloc())"
        // does: the one argument reaches it.
        let simple = true;
        for (let i = 1; i < ps.length; i++) {
          if (!ps[i].def || ps[i].variadic) {
            simple = false;
            break;
          }
        }
        if (!simple) continue;
        const m = matchScore(cx, ps[0].type, from, null, scope, false);
        if (m.s > 0) return { kind: "ctor", fn: f };
      }
    }
    const fromFq = !from.isBox() && !from.dims.length && !from.isFunc ? cx.stripAll(from) : "";
    if (fromFq && cx.classes.has(fromFq)) {
      const cls = cx.classes.get(fromFq) as ClsInfo;
      const wrap: FuncInfo[] = [];
      for (const fns of cls.methods.values()) {
        for (const f of fns) {
          if (f.isConv) wrap.push(f);
        }
      }
      for (const f of wrap) {
        if (f.decl.flags.includes("explicit")) continue;
        const rt = cx.funcRet(f);
        const m = matchScore(cx, to, rt, null, scope, false);
        if (m.s > 0) return { kind: "conv", fn: f };
      }
    }
    return null;
  }

  // A class-valued condition is converted to bool by its operator bool, which may
  // be explicit: a condition is a contextual conversion (if (cin), while (cin >> x)).
  // The conversion is recorded on the expression, so the emitter calls it there.
  export function markBoolConv(cx: Cx, e: Expr): void {
    const t = cx.getAnn(e).t as CppType | null;
    if (!t || t.ptr > 0 || t.dims.length || t.isFunc) return;
    const fq = cx.stripAll(t.core());
    const cls = cx.classes.get(fq);
    if (!cls) return;
    for (const fns of cls.methods.values()) {
      for (const f of fns) {
        if (!f.isConv) continue;
        const rt = cx.funcRet(f);
        if (rt && coreName(rt) === "bool") {
          cx.markFunc(f);
          cx.getAnn(e).boolConv = f;
          return;
        }
      }
    }
  }
}
