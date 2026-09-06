namespace CTJ {

export function analyzeAll(cx: Cx, tu: TranslationUnit): void {
  cx.collect(tu.decls, rootScope());
  for (const e of cx.explicitInst) doExplicitInst(cx, e.decl, e.scope);
  for (const a of cx.asserts) {
    const v = constEval(cx, a.cond, a.scope);
    if (v === 0) cx.fail(`static_assert failed ${a.msg}`, a.cond);
    if (typeof v !== "number" && typeof v !== "string") cx.warn("static_assert cannot be evaluated, ignored", a.cond);
  }
  for (const v of cx.vars.values()) analyzeGlobalVar(cx, v);
  if (cx.main) cx.markFunc(cx.main);
  else cx.warn("no main function found");
  while (cx.worklist.length) {
    const fn = cx.worklist.shift() as FuncInfo;
    if (fn.analyzed) continue;
    analyzeFunc(cx, fn);
  }
  finalizeFields(cx);
  finalizeMangling(cx);
}

function finalizeFields(cx: Cx): void {
  for (const cls of cx.classes.values()) {
    if (!cls.complete || !cls.referenced) continue;
    for (const [name, fd] of cls.fields) {
      const ft = cx.fieldType(cls, name);
      const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? cx.stripAll(ft) : "";
      if (fd.init || fd.directInit) {
        const v: VarInfo = {
          fq: cls.fq + "::" + name, short: name, mangled: name,
          decl: fd, scope: cx.memberScope(cls), typeCache: ft,
          storage: isBoxedVar(ft) ? "box" : "plain",
          isGlobal: false, isStatic: cls.fieldStatic.has(name),
          isParam: false, isField: true, lifted: false, referenced: true,
        };
        const sub = cx.memberScope(cls);
        annotateVarInit(cx, v, sub);
      } else if (fcls && cx.classes.has(fcls)) {
        const r = tryResolveCtor(cx, fcls, [], cx.memberScope(cls));
        if (r) cx.getAnn(fd).call = r.fn;
      }
    }
    const assigns = cls.methods.get("operator=") || [];
    for (const f of assigns) {
      if (!f.referenced) continue;
      for (const b of f.baseAssigns) {
        const bc = cx.classes.get(b);
        if (!bc) continue;
        for (const bf of bc.methods.get("operator=") || []) {
          const ps = cx.funcParams(bf);
          if (ps.length === 1 && cx.stripAll(ps[0].type) === b) cx.markFunc(bf);
        }
      }
    }
  }
}

function doExplicitInst(cx: Cx, d: Decl, scope: Scope): void {
  if (!d) return;
  if (d.kind === "class") {
    const args = d.specArgs.map(a => cx.resolveTypeNode(a, scope));
    const t = cx.tmpls.get(cx.memberFq(scope, d.name));
    if (t && t.kind === "class") cx.instantiateClass(t.fq, args, scope, d);
    return;
  }
  if (d.kind === "func") {
    const nm = d.name.map(s => s.n);
    const lastSeg = last(d.name);
    const args = lastSeg.a.map(a => cx.resolveTypeNode(a, scope));
    const fq = nm.length > 1 ? nm.slice(0, -1).join("::") + "::" + last(nm) : cx.memberFq(scope, last(nm));
    const t = cx.tmpls.get(fq);
    if (t && t.kind === "func") {
      const full = cx.fillDefaultArgs(t, args, scope, d);
      cx.markFunc(cx.instantiateFunc(t, full, new Map()));
    }
    return;
  }
}

function analyzeGlobalVar(cx: Cx, v: VarInfo): void {
  if (v.typeCache) return;
  let t = cx.resolveTypeNode(v.decl.type, v.scope);
  if (t.name === "auto") {
    const init = v.decl.init || (v.decl.directInit && v.decl.directInit[0]);
    if (!init) cx.fail(`cannot deduce 'auto' for '${v.short}'`, v.decl);
    t = deduceAuto(cx, t, typeOf(cx, init as Expr, v.scope), v.decl);
  }
  if (t.name.startsWith("__value")) cx.fail(`'${v.short}' declared with non-type`, v.decl);
  v.typeCache = t;
  v.storage = isBoxedVar(t) ? "box" : "plain";
  cx.getAnn(v.decl).var = v;
  cx.getAnn(v.decl).t = t;
  annotateVarInit(cx, v, v.scope);
}

function deduceAuto(cx: Cx, declT: CppType, initT: CppType, t: At): CppType {
  void cx;
  const core = new CppType(initT.name);
  core.segs = initT.segs;
  core.ptr = initT.ptr;
  core.dims = initT.dims.slice();
  core.isFunc = initT.isFunc;
  core.ret = initT.ret;
  core.funcParams = initT.funcParams;
  core.funcVariadic = initT.funcVariadic;
  const out = new CppType(core.name);
  out.segs = core.segs;
  out.ptr = core.ptr + declT.ptr;
  out.ref = declT.ref || (declT.ptr === 0 && declT.ref === "" ? "" : core.ref);
  if (declT.ref) out.ref = declT.ref;
  out.dims = declT.dims.length ? declT.dims.slice() : core.dims;
  out.isFunc = core.isFunc;
  out.ret = core.ret;
  out.funcParams = core.funcParams;
  out.funcVariadic = core.funcVariadic;
  if (!declT.ptr && !declT.ref) out.ref = "";
  void t;
  return out;
}

function analyzeFunc(cx: Cx, fn: FuncInfo): void {
  fn.analyzed = true;
  if (!fn.decl.body || fn.isDelete) return;
  const scope = cx.snapScope(fn.scope);
  scope.fn = fn;
  scope.locals.push(new Map());
  const params = cx.funcParams(fn);
  params.forEach((p, i) => {
    const node = fn.decl.params[i];
    const name = p.name || "$p" + i;
    const vd: VarDecl = {
      kind: "var", name: [qseg(name)], type: node ? node.type : typeNode([]),
      init: null, directInit: null, flags: [], bitfield: null, isParam: true,
      file: fn.decl.file, line: fn.decl.line,
    };
    const v: VarInfo = {
      fq: fn.fq + "::" + name, short: name, mangled: safeName(name),
      decl: vd, scope, typeCache: p.type, storage: isBoxedVar(p.type) ? "box" : "plain",
      isGlobal: false, isStatic: false, isParam: true, isField: false, lifted: false, referenced: true,
    };
    if (node) cx.getAnn(node).var = v;
    scope.locals[0].set(name, v);
    if (p.def) typeOf(cx, p.def, scope);
  });
  for (const c of fn.decl.ctorInit) annotateCtorInit(cx, fn, c, scope);
  for (const b of fn.decl.body) annotateStmt(cx, b, scope);
  scope.locals.pop();
  if (fn.retCache && fn.retCache.name === "auto") {
    fn.retCache = scope.returns.length ? scope.returns[0] : CppType.basic("void");
  }
}

function annotateCtorInit(cx: Cx, fn: FuncInfo, c: CtorInit, scope: Scope): void {
  const cls = cx.classes.get(fn.cls);
  if (!cls) cx.fail("constructor initializer outside class", c);
  const name = c.name.map(s => s.n).join("::");
  const base = cx.ctorBase(cls as ClsInfo, c.name);
  const argTs = c.args.map(e => ({ t: typeOf(cx, e, scope), e }));
  if (base) {
    const r = resolveCtor(cx, base, argTs, scope, c);
    cx.getAnn(c).call = r.fn;
    cx.getAnn(c).convs = r.convs;
    return;
  }
  const short = last(c.name).n;
  if ((cls as ClsInfo).fields.has(short)) {
    const ft = cx.fieldType(cls as ClsInfo, short);
    annotateFieldInit(cx, cls as ClsInfo, short, ft, c.args, argTs, c, scope);
    return;
  }
  cx.fail(`'${name}' is neither base nor member of '${fn.cls}'`, c);
}

function annotateFieldInit(cx: Cx, cls: ClsInfo, short: string, ft: CppType, args: Expr[], argTs: { t: CppType; e: Expr }[], t: At, scope: Scope): void {
  void cls;
  void short;
  if (cx.classes.has(cx.stripAll(ft)) && !ft.isBox() && !ft.dims.length) {
    const r = resolveCtor(cx, cx.stripAll(ft), argTs, scope, t);
    cx.getAnn(t as object).call = r.fn;
    cx.getAnn(t as object).convs = r.convs;
    return;
  }
  if (ft.isBox() && args.length === 1) {
    boxArg(cx, ft, argTs[0], scope, t);
    return;
  }
  if (args.length > 1) cx.fail("too many initializers", t);
}

export function annotateStmt(cx: Cx, s: Stmt, scope: Scope): void {
  switch (s.kind) {
    case "compound": {
      if (s.sameScope) {
        for (const x of s.stmts) annotateStmt(cx, x, scope);
        return;
      }
      scope.locals.push(new Map());
      try {
        for (const x of s.stmts) annotateStmt(cx, x, scope);
      } finally {
        scope.locals.pop();
      }
      return;
    }
    case "expr": {
      const t = typeOf(cx, s.expr, scope);
      if (t.name === "__type") cx.fail("expected expression", s.expr);
      return;
    }
    case "decl": {
      annotateDecl(cx, s.decl, scope);
      return;
    }
    case "if":
    case "switch": {
      scope.locals.push(new Map());
      try {
        annotateCond(cx, s.cond, scope);
        if (s.kind === "if") {
          annotateStmt(cx, (s as IfStmt).then, scope);
          if ((s as IfStmt).els) annotateStmt(cx, (s as IfStmt).els as Stmt, scope);
        } else annotateStmt(cx, (s as SwitchStmt).body, scope);
      } finally {
        scope.locals.pop();
      }
      return;
    }
    case "case": {
      if (s.value) {
        const v = constEval(cx, s.value, scope);
        if (typeof v !== "number") cx.fail("case label is not constant", s.value);
      }
      annotateStmt(cx, s.stmt, scope);
      return;
    }
    case "while": {
      scope.locals.push(new Map());
      try {
        annotateCond(cx, s.cond, scope);
        annotateStmt(cx, s.body, scope);
      } finally {
        scope.locals.pop();
      }
      return;
    }
    case "do": {
      typeOf(cx, s.cond, scope);
      annotateStmt(cx, s.body, scope);
      return;
    }
    case "for": {
      scope.locals.push(new Map());
      try {
        if (s.init) annotateStmt(cx, s.init, scope);
        if (s.cond) typeOf(cx, s.cond, scope);
        if (s.step) typeOf(cx, s.step, scope);
        annotateStmt(cx, s.body, scope);
      } finally {
        scope.locals.pop();
      }
      return;
    }
    case "rangefor": {
      scope.locals.push(new Map());
      try {
        const rt = typeOf(cx, s.range, scope);
        annotateRangeVar(cx, s, rt, scope);
        annotateStmt(cx, s.body, scope);
      } finally {
        scope.locals.pop();
      }
      return;
    }
    case "break":
    case "continue":
    case "null":
      return;
    case "goto":
      cx.fail(`'goto' is not supported`, s);
      return;
    case "label":
      annotateStmt(cx, s.stmt, scope);
      return;
    case "return": {
      if (!s.expr) {
        scope.returns.push(CppType.basic("void"));
        return;
      }
      const t = typeOf(cx, s.expr, scope);
      scope.returns.push(t);
      const fn = scope.fn;
      if (fn) {
        const ret = cx.funcRet(fn);
        if (ret.name === "auto" || ret.name === "__any") return;
        const retFq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? cx.stripAll(ret) : "";
        if (retFq && cx.classes.has(retFq) && t.name !== "__initlist" && cx.stripAll(t) !== retFq) {
          const r = resolveCtor(cx, retFq, [{ t, e: s.expr }], scope, s, true);
          cx.getAnn(s).call = r.fn;
          cx.getAnn(s).convs = r.convs;
          return;
        }
        if (retFq && cx.classes.has(retFq) && t.name === "__initlist") {
          const items = (s.expr as InitListExpr).items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
          const r = resolveInitCtor(cx, retFq, items.length ? [{ t, e: s.expr }] : [], scope, s);
          cx.getAnn(s).call = r.fn;
          cx.getAnn(s).convs = r.convs;
          return;
        }
        boxArg(cx, ret, { t, e: s.expr }, scope, s);
      }
      return;
    }
    case "try": {
      annotateStmt(cx, s.body, scope);
      for (const h of s.handlers) {
        scope.locals.push(new Map());
        try {
          if (h.vdecl) annotateCatchVar(cx, h.vdecl, scope);
          annotateStmt(cx, h.body, scope);
        } finally {
          scope.locals.pop();
        }
      }
      return;
    }
    case "throw": {
      if (s.expr) typeOf(cx, s.expr, scope);
      return;
    }
  }
}

function annotateCond(cx: Cx, c: Expr | VarDecl, scope: Scope): void {
  if ((c as VarDecl).kind === "var") annotateLocalVar(cx, c as VarDecl, scope);
  else typeOf(cx, c as Expr, scope);
}

function annotateDecl(cx: Cx, d: Decl, scope: Scope): void {
  switch (d.kind) {
    case "var": annotateLocalVar(cx, d, scope); return;
    case "func":
      if (d.body) cx.fail("local function definition is not allowed", d);
      cx.collectOne(d, scope);
      return;
    default:
      cx.collectOne(d, scope);
      return;
  }
}

function annotateRangeVar(cx: Cx, rf: RangeFor, rt: CppType, scope: Scope): void {
  const vd = rf.vdecl;
  let elem: CppType;
  if (rt.dims.length) {
    elem = new CppType(rt.name);
    elem.segs = rt.segs;
    elem.ptr = rt.ptr;
  } else {
    const clsFq = cx.stripAll(rt);
    const cls = cx.classes.get(clsFq);
    if (!cls || rt.isBox()) cx.fail("range-for requires array or container with begin/end", vd);
    const bm = cx.lookupMember(clsFq, "begin", new Set());
    if (!bm.methods) cx.fail(`'${clsFq}' has no begin() for range-for`, vd);
    const r = resolveOverload(cx, bm.methods, [], [], scope, vd);
    const em = cx.lookupMember(clsFq, "end", new Set());
    if (!em.methods) cx.fail(`'${clsFq}' has no end() for range-for`, vd);
    const er = resolveOverload(cx, em.methods, [], [], scope, vd);
    const bt = cx.funcRet(r.fn);
    const itFq = cx.stripAll(bt);
    const ne = cx.lookupMember(itFq, "operator!=", new Set());
    const inc = cx.lookupMember(itFq, "operator++", new Set());
    const star = cx.lookupMember(itFq, "operator*", new Set());
    if (!ne.methods || !inc.methods || !star.methods) cx.fail("bad iterator for range-for", vd);
    const btArg = { t: bt, e: vd as unknown as Expr };
    const neR = resolveOverload(cx, ne.methods, [], [btArg], scope, vd);
    const incR = resolveOverload(cx, inc.methods, [], [], scope, vd);
    const starR = resolveOverload(cx, star.methods, [], [], scope, vd);
    cx.getAnn(rf).range = { beginFn: r.fn, endFn: er.fn, neFn: neR.fn, incFn: incR.fn, starFn: starR.fn };
    elem = cx.funcRet(starR.fn);
  }
  let t = cx.resolveTypeNode(vd.type, scope);
  if (t.name === "auto") t = deduceAuto(cx, t, elem, vd);
  const name = vd.name.length ? last(vd.name).n : "";
  const v: VarInfo = {
    fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
    decl: vd, scope: cx.snapScope(scope), typeCache: t,
    storage: isBoxedVar(t) ? "box" : "plain",
    isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
  };
  cx.getAnn(vd).var = v;
  cx.getAnn(vd).t = t;
  last(scope.locals).set(name, v);
}

function annotateCatchVar(cx: Cx, vd: VarDecl, scope: Scope): void {
  const t = cx.resolveTypeNode(vd.type, scope);
  const name = vd.name.length ? last(vd.name).n : "$ex";
  const v: VarInfo = {
    fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
    decl: vd, scope: cx.snapScope(scope), typeCache: t,
    storage: isBoxedVar(t) ? "box" : "plain",
    isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
  };
  cx.getAnn(vd).var = v;
  cx.getAnn(vd).t = t;
  if (name) last(scope.locals).set(name, v);
}

function annotateLocalVar(cx: Cx, vd: VarDecl, scope: Scope): void {
  if (vd.type.func && vd.name.length) {
    cx.fail(`function type variable '${last(vd.name).n}' needs initializer`, vd);
  }
  let t = cx.resolveTypeNode(vd.type, scope);
  const name = vd.name.length ? last(vd.name).n : "";
  if (!name) cx.fail("abstract declarator in declaration", vd);
  const init = vd.init || (vd.directInit && vd.directInit.length === 1 ? vd.directInit[0] : null);
  const isDirectMulti = vd.directInit && vd.directInit.length !== 1;
  if (t.name === "auto") {
    if (!vd.init && !vd.directInit) cx.fail(`cannot deduce 'auto' for '${name}'`, vd);
    const ie = vd.init || (vd.directInit as Expr[])[0];
    const it = typeOf(cx, ie, scope);
    if (it.name === "__initlist") cx.fail(`cannot deduce 'auto' from initializer list`, vd);
    t = deduceAuto(cx, t, it, vd);
  }
  if (t.name.startsWith("__value")) cx.fail(`'${name}' declared with non-type`, vd);
  if (t.name === "void") cx.fail(`variable '${name}' has void type`, vd);
  const isStatic = vd.flags.includes("static") || vd.flags.includes("extern");
  let v: VarInfo;
  if (isStatic && scope.fn) {
    const fq = scope.fn.fq + "::" + name;
    let g = cx.vars.get(fq);
    if (!g) {
      g = {
        fq, short: name, mangled: mangleType(fq), decl: vd, scope: cx.snapScope(scope),
        typeCache: t, storage: isBoxedVar(t) ? "box" : "plain",
        isGlobal: true, isStatic: true, isParam: false, isField: false, lifted: true, referenced: true,
      };
      cx.vars.set(fq, g);
    }
    v = g;
  } else {
    v = {
      fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
      decl: vd, scope: cx.snapScope(scope), typeCache: t,
      storage: isBoxedVar(t) ? "box" : "plain",
      isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
    };
  }
  cx.getAnn(vd).var = v;
  cx.getAnn(vd).t = t;
  last(scope.locals).set(name, v);
  if (t.ref !== "" && !vd.init && !vd.directInit) cx.fail(`reference '${name}' needs initializer`, vd);
  annotateVarInit(cx, v, scope);
  void init;
  void isDirectMulti;
}

function annotateVarInit(cx: Cx, v: VarInfo, scope: Scope): void {
  const vd = v.decl;
  const t = v.typeCache as CppType;
  const clsFq = !t.isBox() && !t.dims.length && !t.isFunc ? cx.stripAll(t) : "";
  const cls = clsFq && cx.classes.has(clsFq) ? cx.classes.get(clsFq) as ClsInfo : null;
  if (vd.init) {
    const it = typeOf(cx, vd.init, scope);
    if (vd.init.kind === "initlist") {
      const items = (vd.init as InitListExpr).items.map(e => ({ t: typeOf(cx, e, scope), e }));
      if (t.dims.length || t.name === "char" && t.dims.length) {
        return;
      }
      if (cls) {
        if (!items.length) {
          const r = resolveCtor(cx, cls.fq, [], scope, vd);
          cx.getAnn(vd.init).call = r.fn;
          return;
        }
        const asList = [{ t: initListType(cx, items, vd), e: vd.init }];
        const lr = tryResolveCtor(cx, cls.fq, asList, scope);
        if (lr) {
          cx.getAnn(vd.init).call = lr.fn;
          cx.getAnn(vd.init).convs = lr.convs;
          return;
        }
        const r = resolveCtor(cx, cls.fq, items, scope, vd);
        cx.getAnn(vd.init).call = r.fn;
        cx.getAnn(vd.init).convs = r.convs;
        return;
      }
      if (t.isBox()) cx.fail("cannot initialize pointer from list", vd);
      if (items.length === 1) boxArg(cx, t, items[0], scope, vd);
      else if (items.length > 1) cx.fail("too many initializers", vd);
      return;
    }
    if (cls && it.name !== "__initlist") {
      if (sameCore(it, t) && !it.isBox()) {
        const r = resolveCtor(cx, cls.fq, [{ t: it, e: vd.init }], scope, vd);
        cx.getAnn(vd).call = r.fn;
        cx.getAnn(vd).convs = r.convs;
      } else {
        const r = resolveCtor(cx, cls.fq, [{ t: it, e: vd.init }], scope, vd);
        cx.getAnn(vd).call = r.fn;
        cx.getAnn(vd).convs = r.convs;
      }
      return;
    }
    boxArg(cx, t, { t: it, e: vd.init }, scope, vd);
    return;
  }
  if (vd.directInit) {
    const items = vd.directInit.map(e => ({ t: typeOf(cx, e, scope), e }));
    if (cls) {
      if (items.length === 1 && items[0].e.kind === "initlist") {
        const sub = (items[0].e as InitListExpr).items.map(e => ({ t: typeOf(cx, e, scope), e }));
        const r = resolveCtor(cx, cls.fq, sub, scope, vd);
        cx.getAnn(vd).call = r.fn;
        cx.getAnn(vd).convs = r.convs;
        return;
      }
      const r = resolveCtor(cx, cls.fq, items, scope, vd);
      cx.getAnn(vd).call = r.fn;
      cx.getAnn(vd).convs = r.convs;
      return;
    }
    if (t.dims.length) {
      if (items.length > 1) cx.fail("too many initializers", vd);
      return;
    }
    if (t.isBox()) {
      if (items.length !== 1) cx.fail("bad reference initializer", vd);
      boxArg(cx, t, items[0], scope, vd);
      return;
    }
    if (items.length !== 1) cx.fail("bad scalar initializer", vd);
    boxArg(cx, t, items[0], scope, vd);
    return;
  }
  if (cls) {
    const r = resolveCtor(cx, cls.fq, [], scope, vd);
    cx.getAnn(vd).call = r.fn;
    return;
  }
}

function initListType(cx: Cx, items: { t: CppType }[], t: At): CppType {
  void cx;
  void t;
  const ty = CppType.basic("__initlist");
  if (items.length) {
    ty.ret = items[0].t;
  }
  return ty;
}

function sameCore(a: CppType, b: CppType): boolean {
  return a.key() === b.key() || (a.core().key() === b.core().key());
}

export function boxArg(cx: Cx, param: CppType, arg: { t: CppType; e: Expr }, scope: Scope, t: At): void {
  void scope;
  void t;
  const a = arg.t;
  if (param.isBox() && !a.isBox() && !a.dims.length && a.name !== "__null" && a.name !== "__initlist") {
    markBoxed(cx, arg.e);
  }
  if (!param.isBox() && a.isBox() && param.name !== "__any") {
    return;
  }
  if (param.dims.length || param.isBox()) {
    if (a.dims.length && !a.isBox()) return;
  }
}

function markBoxed(cx: Cx, e: Expr): void {
  let cur = e;
  while (cur.kind === "cast") cur = cur.arg;
  if (cur.kind === "id") {
    const s = cx.getAnn(cur).sym;
    // A field is stored in its object, so it has no boxing convention of its own.
    if (s && s.k === "var" && !s.v.isField) {
      if (s.v.storage === "plain") s.v.storage = "boxed";
      else if (s.v.storage === "box" && !(s.v.typeCache && s.v.typeCache.ref)) s.v.storage = "bbox";
    }
    return;
  }
  if (cur.kind === "member") {
    markBoxed(cx, cur.obj);
    return;
  }
  if (cur.kind === "index") {
    markBoxed(cx, cur.arr);
    return;
  }
}

function safeName(n: string): string {
  if (!n) return "$v";
  return safeJsName(n);
}

function finalizeMangling(cx: Cx): void {
  for (const [fq, list] of cx.funcs) {
    if (list.length <= 1 && !list[0].fromTmpl) {
      if (!list[0].mangled) list[0].mangled = mangleType(fq);
      continue;
    }
    for (const f of list) {
      if (f.mangled) continue;
      const ps = cx.funcParams(f);
      f.mangled = mangleType(fq) + "__" + ps.map(p => mangleSig(p.type)).join("_");
    }
  }
  const seen = new Set<string>();
  for (const list of cx.funcs.values()) {
    for (const f of list) {
      if (seen.has(f.mangled)) f.mangled = f.mangled + "_" + f.decl.line;
      seen.add(f.mangled);
    }
  }
}

function mangleSig(t: CppType): string {
  let s = t.key();
  s = s.replace(/\*/g, "P").replace(/&/g, "R").replace(/\[/g, "A").replace(/\]/g, "");
  s = s.replace(/[^A-Za-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
  return s || "v";
}

}
