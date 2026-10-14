// Call expressions, operator calls and member calls: overload choice, argument boxing,
// and copies of class values.
namespace CTJ {
  export function resolveCallExpr(cx: Cx, e: CallExpr, scope: Scope): CppType {
    const fn = e.fn;
    const argTs = e.args.map(x => ({ t: typeOf(cx, x, scope), e: x }));
    const ann = cx.getAnn(e);
    if (fn.kind === "id") {
      const sym = cx.resolveSym((fn as IdExpr).parts, (fn as IdExpr).global, scope);
      cx.getAnn(fn).sym = sym;
      // A function pointer member called by its name ("_M_invoker(...)") is read from this.
      if (sym && sym.k === "var" && sym.v.isField && !sym.v.isStatic && (fn as IdExpr).parts.length === 1) cx.getAnn(fn).needsThis = true;
      if (!sym) {
        const nm = (fn as IdExpr).parts.map(s => s.n).join("::");
        const bname = (fn as IdExpr).parts.length === 1 ? (fn as IdExpr).parts[0].n : "";
        // The compiler's own builtins are declared nowhere: the numeric ones
        // (__builtin_popcount, ...) and the type traits (__is_trivial, ...).
        if (bname.startsWith("__builtin_") || bname.startsWith("__is_") || bname.startsWith("__has_")) {
          return builtinCall(cx, e, bname, argTs, scope);
        }
        cx.fail(`unknown function '${nm}'`, fn);
      }
      const s = sym as Sym;
      if (s.k === "class" || (s.k === "tmpl" && s.t.decl.kind === "class")) {
        // A call that names a class builds a temporary of that class.
        const ct = cx.resolveTypeNode(typeNode((fn as IdExpr).parts, e), scope);
        const fq = cx.stripAll(ct);
        const r = resolveInitCtor(cx, fq, argTs, scope, e);
        ann.call = r.fn;
        ann.convs = r.convs;
        applyArgBoxing(cx, e, r.fn, argTs, scope);
        return classType(cx.classes.get(fq) as ClsInfo);
      }
      if (s.k === "typedef") {
        // _Build_index_tuple<N>::__type() value-initializes the typedef's class.
        const ct = cx.expandTypedef(s.fq, new Set());
        const fq = cx.stripAll(ct);
        if (cx.classes.has(fq)) {
          const r = resolveInitCtor(cx, fq, argTs, scope, e);
          ann.call = r.fn;
          ann.convs = r.convs;
          applyArgBoxing(cx, e, r.fn, argTs, scope);
          return classType(cx.classes.get(fq) as ClsInfo);
        }
      }
      if (s.k === "func" || s.k === "tmpl") {
        let cands: FuncInfo[] = [];
        const tmpls: TmplInfo[] = [];
        // An instantiation is filed under the name of its template, and so is the
        // template itself, so both have to be looked up under that name.
        const fq = s.k === "func" ? s.fns[0].fromTmpl || s.fns[0].fq : s.t.fq;
        if (cx.funcs.has(fq)) cands = cands.concat(cx.funcs.get(fq) as FuncInfo[]);
        if (s.k === "func") {
          for (const f of s.fns) {
            if (!cands.includes(f)) cands.push(f);
          }
        }
        // A member template is stored under tmpls; instantiations live on the
        // class as methods and are not in cx.funcs.
        const owner = s.k === "tmpl" ? s.t.scope.cls : s.k === "func" && s.fns[0].cls ? cx.classes.get(s.fns[0].cls) : null;
        if (owner) {
          const short = last(fq.split("::"));
          for (const f of owner.methods.get(short) || []) {
            if (!cands.includes(f)) cands.push(f);
          }
        }
        if (s.k === "func" && !owner && (fn as IdExpr).parts.length === 1) {
          for (const ufq of cx.usingTargets(fq)) {
            for (const f of cx.funcs.get(ufq) || []) if (!cands.includes(f)) cands.push(f);
            for (const tm of cx.tmplsOf(ufq)) if (!tmpls.includes(tm)) tmpls.push(tm);
          }
        }
        for (const tm of cx.tmplsOf(fq)) if (!tmpls.includes(tm)) tmpls.push(tm);
        if (s.k === "tmpl" && !tmpls.includes(s.t)) tmpls.push(s.t);
        const xt = last((fn as IdExpr).parts).a.map(a => cx.resolveTypeNode(a, scope));
        const r = resolveOverload(cx, cands, tmpls, argTs, scope, e, xt.length ? xt : undefined);
        ann.call = r.fn;
        ann.convs = r.convs;
        applyArgBoxing(cx, e, r.fn, argTs, scope);
        const fret = cx.funcRet(r.fn);
        setCopyCtor(cx, e, fret, scope);
        return fret;
      }
      if (s.k === "var") {
        cx.markVar(s.v);
        const vt = s.v.isField ? cx.fieldType(cx.classes.get(s.v.fq.slice(0, s.v.fq.lastIndexOf("::"))) as ClsInfo, s.v.short) : cx.varType(s.v);
        if (vt.isFunc) {
          cx.getAnn(fn).t = vt;
          cx.getAnn(fn).sym = s;
          return vt.ret as CppType;
        }
        return callOperator(cx, e, vt, argTs, scope);
      }
      if (s.k === "builtin") return ctjInline(cx, e, s.name, argTs, scope);
      cx.fail("not callable", e);
    }
    if (fn.kind === "member") return memberCall(cx, e, fn as MemberExpr, argTs, scope);
    const ft = typeOf(cx, fn, scope);
    if (ft.isFunc) return ft.ret as CppType;
    return callOperator(cx, e, ft, argTs, scope);
  }

  export function callOperator(cx: Cx, e: CallExpr, vt: CppType, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
    const clsFq = classOf(cx, vt);
    if (!clsFq) cx.fail("not callable", e);
    const m = cx.lookupMember(clsFq, "operator()", new Set());
    // "f(x)" where the functor's operator() is a member template: the funnel of
    // std::__detail::_Select1st and _Identity alike.
    const tms = cx.lookupTmplMembers(clsFq, "operator()", new Set());
    if (!m.methods && !tms.length) cx.fail(`'${clsFq}' is not callable`, e);
    const r = resolveOverload(cx, m.methods || [], tms, argTs, scope, e);
    cx.getAnn(e).call = r.fn;
    cx.getAnn(e).convs = r.convs;
    applyArgBoxing(cx, e, r.fn, argTs, scope);
    const fret = cx.funcRet(r.fn);
    setCopyCtor(cx, e, fret, scope);
    return fret;
  }

  export function memberCall(cx: Cx, e: CallExpr, fn: MemberExpr, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
    const ann = cx.getAnn(e);
    let objT = typeOf(cx, fn.obj, scope);
    if (objT.name === "__typeinfo" && fn.field === "name" && !argTs.length) {
      const s = cx.resolveSym([qseg("std"), qseg("string")], false, scope);
      if (s && s.k === "class") {
        cx.markCls(s.cls.fq);
        return classType(s.cls);
      }
      return CppType.basic("__any");
    }
    if (fn.arrow && objT.ptr === 0 && !objT.isFunc && isClassVal(cx, objT)) {
      objT = applyArrow(cx, fn, objT, scope);
    }
    // "p->~T()" on a scalar is a pseudo-destructor call, and a class with no
    // destructor of its own has nothing to destroy either.
    if (fn.field.charAt(0) === "~") {
      const dcls = classOf(cx, objT);
      if (!dcls || !(cx.lookupMember(dcls, "#dtor", new Set()).methods || []).length) {
        return CppType.basic("void");
      }
    }
    const clsFq = classOf(cx, objT);
    if (!clsFq) cx.fail(`no method '${fn.field}'`, fn);
    let lookupFq = clsFq;
    if (fn.qual.length) lookupFq = resolveQualClass(cx, fn.qual, clsFq, scope, fn);
    // "p->~T()" names the destructor of the class the object belongs to.
    const mname = fn.field.charAt(0) === "~" ? "#dtor" : fn.field;
    const m = cx.lookupMember(lookupFq, mname, new Set());
    if (m.field) {
      const cls = cx.classes.get(m.owner) as ClsInfo;
      const fd = cls.fields.get(fn.field) as VarDecl;
      cx.getAnn(fn).sym = { k: "var", v: cx.fieldVar(cls, fn.field, fd) };
      const ft = cx.fieldType(cls, fn.field);
      if (ft.isFunc) return ft.ret as CppType;
      // A class instance with operator() is callable (e.g. std::less<int>).
      const fieldClsFq = cx.stripAll(ft);
      const fieldCls = cx.classes.get(fieldClsFq);
      if (fieldCls) {
        const ops = fieldCls.methods.get("operator()") || [];
        if (ops.length) {
          const r = resolveOverload(cx, ops, [], argTs, scope, e);
          ann.call = r.fn;
          ann.convs = r.convs;
          cx.getAnn(fn).sym = { k: "var", v: cx.fieldVar(cls, fn.field, cls.fields.get(fn.field) as VarDecl) };
          cx.getAnn(fn).t = ft;
          applyArgBoxing(cx, e, r.fn, argTs, scope);
          return cx.funcRet(r.fn);
        }
      }
      cx.fail(`'${fn.field}' is not callable`, fn);
    }
    const cands = m.methods ? m.methods.slice() : [];
    const tmpls: TmplInfo[] = [];
    const tfq = m.owner + "::" + fn.field;
    for (const tm of cx.tmplsOf(tfq)) if (!tmpls.includes(tm)) tmpls.push(tm);
    // When the owner is an instantiated class template, member function
    // templates are stored under the base (uninstantiated) name.  Fall back
    // to that if the instantiated lookup yields nothing.
    if (!tmpls.length) {
      const ownerCls = cx.classes.get(m.owner);
      if (ownerCls && ownerCls.fromTmpl) {
        for (const tm of cx.tmplsOf(ownerCls.fromTmpl + "::" + fn.field)) {
          if (!tmpls.includes(tm)) tmpls.push(tm);
        }
      }
    }
    if (!cands.length && !tmpls.length) cx.fail(`'${clsFq}' has no method '${fn.field}'`, fn);
    const xt = fn.targs.map(a => cx.resolveTypeNode(a, scope));
    const r = resolveOverload(cx, cands, tmpls, argTs, scope, e, xt.length ? xt : undefined, objT.cnst);
    ann.call = r.fn;
    ann.convs = r.convs;
    applyArgBoxing(cx, e, r.fn, argTs, scope);
    const fret = cx.funcRet(r.fn);
    setCopyCtor(cx, e, fret, scope);
    return fret;
  }

  export function ctjInline(cx: Cx, e: CallExpr, name: string, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
    void scope;
    if (!argTs.length || argTs[0].e.kind !== "lit" || (argTs[0].e as LitExpr).lkind !== "string") {
      cx.fail(`${name} first argument must be a string literal`, e);
    }
    if (name === "__ctj_show") {
      // __ctj_show("label", expr): the descriptor table is built for the type of expr.
      if (argTs.length !== 2) cx.fail("__ctj_show takes a label and one expression", e);
      cx.getAnn(e).call = { builtin: name, shape: shapeTableFor(cx, argTs[1].t) };
      return CppType.basic("void");
    }
    cx.getAnn(e).call = { builtin: name };
    return CppType.basic("__any");
  }

  // A class object a parameter takes by value is copied in the callee, so the
  // class's copy constructor is called there even though the argument never
  // names it: it has to be emitted like any other call.
  export function markValueCopy(cx: Cx, p: CppType | null, a: { t: CppType; e: Expr }, scope: Scope): void {
    if (!p || p.isBox() || p.isFunc || p.dims.length) return;
    if (a.t.isBox() || a.t.isFunc || a.t.dims.length) return;
    const fq = cx.stripAll(p);
    if (!fq || fq !== cx.stripAll(a.t)) return;
    const cls = cx.classes.get(fq);
    if (!cls || !cls.complete) return;
    tryResolveCtor(cx, fq, [{ t: a.t, e: a.e }], scope);
  }

  export function applyArgBoxing(cx: Cx, e: CallExpr, fn: FuncInfo, argTs: { t: CppType; e: Expr }[], scope: Scope): void {
    const ps = cx.funcParams(fn);
    const convs = cx.getAnn(e).convs;
    argTs.forEach((a, i) => {
      const c = convs[i];
      if (c && c.kind === "ctor") {
        const cps = cx.funcParams(c.fn);
        if (cps.length) boxArg(cx, cps[0].type, a, scope, e);
      } else if (i < ps.length && !ps[i].variadic) {
        boxArg(cx, ps[i].type, a, scope, e);
        markValueCopy(cx, ps[i].type, a, scope);
      }
    });
  }

  export function resolveOverload(cx: Cx, cands: FuncInfo[], tmpls: TmplInfo[], args: { t: CppType; e: Expr }[], scope: Scope, t: At, explicit?: CppType[], objConst = false): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
    let useCands = cands;
    if (explicit && explicit.length) {
      // Explicit template arguments name one instantiation.  A previous
      // use_facet<ctype> must not be chosen for use_facet<num_put>, even though
      // both take the same locale argument.
      const expKey = explicit.map(a => a.key()).join(",");
      useCands = cands.filter(f => {
        if (!f.fromTmpl) return true;
        const prefix = f.fromTmpl + "<";
        if (!f.fq.startsWith(prefix) || !f.fq.endsWith(">")) return false;
        return f.fq.slice(prefix.length, -1) === expKey;
      });
    }
    const all = useCands.slice();
    for (const tm of tmpls) {
      const inst = tryInstantiateCall(cx, tm, args, scope, explicit, t);
      if (inst) all.push(inst);
    }
    if (!all.length) {
      cx.fail(`no matching function(${args.map(a => a.t.key()).join(", ")})`, t);
    }
    let best: FuncInfo | null = null;
    let bestScore = -1e18;
    let bestConvs: ({ kind: string; fn: FuncInfo } | null)[] = [];
    for (const f of all) {
      // A candidate whose parameters cannot even be resolved is not callable;
      // one such template must not rule out the others.
      let r: { viable: boolean; score: number; convs: ({ kind: string; fn: FuncInfo } | null)[] };
      try {
        r = scoreFunc(cx, f, args, scope, objConst);
      } catch {
        continue;
      }
      if (!r.viable) continue;
      if (r.score > bestScore) {
        best = f;
        bestScore = r.score;
        bestConvs = r.convs;
      }
    }
    if (!best) {
      cx.fail(`no matching function for call(${args.map(a => a.t.key()).join(", ")})`, t);
    }
    if ((best as FuncInfo).isDelete) cx.fail("call to deleted function", t);
    cx.markFunc(best as FuncInfo);
    // A static member is emitted as part of its class, so the class is needed too.
    if ((best as FuncInfo).isStatic && (best as FuncInfo).cls) cx.markCls((best as FuncInfo).cls);
    for (const c of bestConvs) if (c && c.fn) cx.markFunc(c.fn);
    return { fn: best as FuncInfo, convs: bestConvs };
  }

  // Viability and preference are separate: penalties only rank the candidates
  // that could be called at all, they never rule one out on their own.
  export function scoreFunc(cx: Cx, f: FuncInfo, args: { t: CppType; e: Expr }[], scope: Scope, objConst = false): { viable: boolean; score: number; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
    const fail = { viable: false, score: 0, convs: [] as ({ kind: string; fn: FuncInfo } | null)[] };
    if (f.isMethod && !f.isStatic && !f.isCtor && !f.isDtor) {
      if (objConst && !f.isConst) return fail;
    }
    const ps = cx.funcParams(f);
    const hasVar = ps.length > 0 && last(ps).variadic;
    const fixed = hasVar ? ps.length - 1 : ps.length;
    if (args.length < fixed) {
      for (let i = args.length; i < fixed; i++) {
        if (!ps[i].def) return fail;
      }
    }
    if (!hasVar && args.length > ps.length) return fail;
    let score = f.isMethod && f.isConst && !objConst ? -1 : 0;
    const convs: ({ kind: string; fn: FuncInfo } | null)[] = [];
    for (let i = 0; i < args.length; i++) {
      if (hasVar && i >= fixed) {
        score += 5;
        convs.push(null);
        continue;
      }
      const m = matchScore(cx, ps[i].type, args[i].t, args[i].e, scope, true);
      if (m.s < 0) return fail;
      score += m.s;
      convs.push(m.conv);
    }
    score -= Math.max(0, fixed - args.length) * 5;
    if (f.fromTmpl) score -= 1;
    return { viable: true, score, convs };
  }

  // An overloaded operator that takes a non-const reference to a scalar, as
  // cin >> n does, writes through it: the operand needs a cell of its own, as it
  // does when it is passed to a function.  Class operands are already references.
  export function markOperatorRefs(cx: Cx, fn: FuncInfo, operands: Expr[]): void {
    const ps = cx.funcParams(fn);
    operands.forEach((x, i) => {
      if (i >= ps.length) return;
      const p = ps[i].type;
      if (p.ref === "" || p.cnst || p.ptr > 0 || p.isFunc || p.dims.length) return;
      if (isClassVal(cx, p)) return;
      markBoxedOf(cx, x);
    });
  }

  export function findOperator(cx: Cx, op: string, l: { t: CppType; e: Expr } | null, r: { t: CppType; e: Expr } | null, scope: Scope, t: At, postfix = false): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
    const key = "operator" + op;
    const argsLR: { t: CppType; e: Expr }[] = [];
    if (l) argsLR.push(l);
    if (r) argsLR.push(r);
    if (postfix) {
      argsLR.push({ t: CppType.basic("int"), e: { kind: "lit", lkind: "int", value: "0", file: t.file, line: t.line } });
    }
    let best: { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[]; score: number } | null = null;
    const consider = (cands: FuncInfo[], tmpls: TmplInfo[], args: { t: CppType; e: Expr }[], thisBonus = 0) => {
      if (!cands.length && !tmpls.length) return;
      try {
        const rr = resolveOverload(cx, cands, tmpls, args, scope, t);
        let sc = thisBonus;
        const ps = cx.funcParams(rr.fn);
        args.forEach((a, i) => {
          if (i < ps.length) sc += matchScore(cx, ps[i].type, a.t, a.e, scope, true).s;
        });
        if (!best || sc > best.score) best = { fn: rr.fn, convs: rr.convs, score: sc };
      } catch (er) {}
    };
    const fq = l ? classValFq(cx, l.t) : "";
    if (l && fq) {
      const m = cx.lookupMember(fq, key, new Set());
      const tmpls: TmplInfo[] = [];
      for (const tm of cx.tmplsOf(fq + "::" + key)) if (!tmpls.includes(tm)) tmpls.push(tm);
      // Members are scored on the right-hand argument only; give the implicit
      // object the identity match a free function would get for the left side.
      consider(m.methods ? m.methods.slice() : [], tmpls, r ? [r] : postfix ? [{ t: CppType.basic("int"), e: argsLR[1].e }] : [], 100);
    }
    const cands: FuncInfo[] = [];
    const tmpls: TmplInfo[] = [];
    for (const ns of assocNs(cx, l ? l.t : null, r ? r.t : null, scope)) {
      const idx = cx.nsFuncIndex.get(ns) || [];
      for (const f of idx) {
        if (f.short === key) cands.push(f);
      }
      for (const tm of cx.tmplsOf(ns ? ns + "::" + key : key)) {
        if (tm.kind === "func" && !tmpls.includes(tm)) tmpls.push(tm);
      }
    }
    consider(cands, tmpls, argsLR);
    if (!best) return null;
    const b = best as { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] };
    cx.markFunc(b.fn);
    return { fn: b.fn, convs: b.convs };
  }

  export function assocNs(cx: Cx, l: CppType | null, r: CppType | null, scope: Scope): string[] {
    const out: string[] = [];
    const push = (ns: string) => {
      ns = cx.resolveNsAlias(ns);
      if (!out.includes(ns)) out.push(ns);
      const ni = cx.nss.get(ns);
      if (ni) {
        for (const u of ni.usingNs) push(u);
        for (const u of ni.inlineNs) push(u);
      }
    };
    for (const t of [l, r]) {
      if (!t) continue;
      const fq = cx.stripAll(t);
      if (cx.classes.has(fq) || cx.enums.has(fq)) {
        push(cx.nsOfFq(fq));
      }
    }
    for (let i = scope.ns.length; i >= 0; i--) push(scope.ns.slice(0, i).join("::"));
    return out;
  }
}
