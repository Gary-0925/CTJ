// Constructor resolution, including braced-list construction through
// initializer_list constructors.
namespace CTJ {

export function resolveInitCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope, t: At): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
  if (args.length === 1 && args[0].e.kind === "initlist") {
    const items = (args[0].e as InitListExpr).items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
    if (!items.length) return resolveCtor(cx, clsFq, [], scope, t, true);
    const asList = [{ t: listType(items), e: args[0].e }];
    const lr = tryInitListCtor(cx, clsFq, asList, scope);
    if (lr) {
      annotateListElems(cx, lr.fn, args[0].e, scope);
      return lr;
    }
    const er = tryResolveCtor(cx, clsFq, items, scope);
    if (er) return er;
    // A braced initializer of an aggregate is not a call of a constructor,
    // but one of the class's members at a time.
    const cls = cx.classes.get(clsFq);
    if (cls && cx.aggCtor(cls, items.length)) return resolveCtor(cx, clsFq, items, scope, t, true);
    return resolveCtor(cx, clsFq, items, scope, t, true);
  }
  return resolveCtor(cx, clsFq, args, scope, t, true);
}

export function listType(items: { t: CppType }[]): CppType {
  const ty = CppType.basic("__initlist");
  if (items.length) ty.ret = items[0].t;
  return ty;
}

// The elements of an initializer_list argument have the element type, and a
// braced sub-list builds one of them: "map<int,int> m{{1,10},{2,20}}" makes
// pairs, "vector<vector<int>> vv{{1}}" makes vectors.  Their constructors are
// resolved here, where the constructor that takes the list is known.
export function annotateListElems(cx: Cx, fn: FuncInfo, il: Expr, scope: Scope): void {
  if (il.kind !== "initlist") return;
  const ps = cx.funcParams(fn);
  const pt = ps.length ? ps[0].type : null;
  if (!pt || pt.isBox() || pt.dims.length || pt.segs.length !== 1 || pt.segs[0].a.length !== 1) return;
  const et = pt.segs[0].a[0];
  const fq = !et.isBox() && !et.dims.length && !et.isFunc ? cx.stripAll(et) : "";
  const cls = fq && cx.classes.has(fq) ? cx.classes.get(fq) as ClsInfo : null;
  if (!cls) return;
  for (const item of (il as InitListExpr).items) {
    if (item.kind === "initlist") {
      const sub = (item as InitListExpr).items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
      try {
        const r = tryInitListCtor(cx, cls.fq, sub.length ? [{ t: listType(sub), e: item }] : [], scope)
          || tryResolveCtor(cx, cls.fq, sub, scope);
        if (r) {
          cx.getAnn(item).call = r.fn;
          cx.getAnn(item).convs = r.convs;
        }
      } catch {
        // the emitter reports a value it cannot build
      }
      continue;
    }
    // An element of another type is converted here ("vector<string> v{\"a\"}"
    // makes a string of the literal), so that the array the list is holds
    // elements of the element type.
    const it = typeOf(cx, item, scope);
    if (it.isFunc || it.ref !== "" || cx.stripAll(it) === cls.fq) continue;
    try {
      const r = tryResolveCtor(cx, cls.fq, [{ t: it, e: item }], scope);
      if (r) {
        cx.getAnn(item).conv = { kind: "ctor", fn: r.fn };
        cx.getAnn(item).convs = r.convs;
        cx.markFunc(r.fn);
        for (const c of r.convs) if (c && c.fn) cx.markFunc(c.fn);
      }
    } catch {
      // the emitter reports a value it cannot build
    }
  }
}

export function resolveCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope, t: At, allowExplicit = true): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
  const cls = cx.classes.get(clsFq);
  if (!cls) cx.fail(`unknown class '${clsFq}'`, t);
  cx.markCls(clsFq);
  let cands = ((cls as ClsInfo).methods.get("#ctor") || []).slice();
  if (!allowExplicit) cands = cands.filter(f => !f.decl.flags.includes("explicit") || args.length !== 1);
  const tmpls: TmplInfo[] = [];
  const tfq = clsFq + "::" + (cls as ClsInfo).decl.name;
  for (const tm of cx.tmplsOf(tfq)) if (!tmpls.includes(tm)) tmpls.push(tm);
  if (!cands.length && !tmpls.length) cx.fail(`no constructor of '${clsFq}'`, t);
  try {
    return resolveOverload(cx, cands, tmpls, args, scope, t);
  } catch (e) {
    if (e instanceof Error && e.message.indexOf("no matching function") >= 0) {
      cx.fail(`no matching constructor of '${clsFq}' for (${args.map(a => a.t.key()).join(", ")})`, t);
    }
    throw e;
  }
}

export function tryResolveCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
  try {
    return resolveCtor(cx, clsFq, args, scope, { file: "", line: 0 }, true);
  } catch {
    return null;
  }
}

export function setCopyCtor(cx: Cx, e: CallExpr, ret: CppType, scope: Scope): void {
  const fq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? cx.stripAll(ret) : "";
  if (fq && cx.classes.has(fq)) {
    const r = tryResolveCtor(cx, fq, [{ t: ret, e }], scope);
    if (r) {
      cx.getAnn(e).copyCtor = r.fn;
      // The constructor is called here, so it has to be emitted even though
      // the expression calling it never writes its name.
      cx.markFunc(r.fn);
      for (const c of r.convs) if (c && c.fn) cx.markFunc(c.fn);
    }
  }
}

// Depth of the resolutions that take a braced list as the one argument of a
// constructor.  Those consider the initializer_list constructors only, as the
// first step of list-initialization does: a braced list is not turned into a
// class parameter there (the copy constructor of a pair is not the one that
// takes "{\"x\", 1}").
export let initListPhase = 0;

// The constructor of the class p that a braced list of items builds: an
// initializer_list constructor first, as in C++, otherwise one taking the items.
// Recorded on the list so that the code generator can build the object.
export function tryInitListCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
  initListPhase++;
  try {
    return tryResolveCtor(cx, clsFq, args, scope);
  } finally {
    initListPhase--;
  }
}

// The lists being resolved: while a list is resolved against a constructor,
// that constructor's own parameters (a copy constructor, say) see the same list.
export const listBusy = new Set<InitListExpr>();

export function listCtorFor(cx: Cx, p: CppType, il: InitListExpr, scope: Scope): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
  const target = p.ref !== "" ? noRef(p) : p;
  if (target.isBox() || target.dims.length || target.isFunc || target.name === "__initlist") return null;
  const fq = cx.stripAll(target);
  if (!cx.classes.has(fq) || listBusy.has(il)) return null;
  const items = il.items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
  listBusy.add(il);
  let r: { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null;
  try {
    r = (items.length ? tryInitListCtor(cx, fq, [{ t: listType(items), e: il }], scope) : null)
      || tryResolveCtor(cx, fq, items, scope);
  } finally {
    listBusy.delete(il);
  }
  if (!r) return null;
  const ann = cx.getAnn(il);
  if (!ann.listCtors) ann.listCtors = new Map();
  ann.listCtors.set(r.fn, r.convs);
  cx.markFunc(r.fn);
  return r;
}
}
