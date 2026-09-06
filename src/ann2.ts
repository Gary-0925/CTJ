namespace CTJ {

export function typeOf(cx: Cx, e: Expr, scope: Scope): CppType {
  const cached = cx.ann.get(e);
  if (cached && cached.t) return cached.t;
  const t = typeOfInner(cx, e, scope);
  cx.getAnn(e).t = t;
  return t;
}

function typeOfInner(cx: Cx, e: Expr, scope: Scope): CppType {
  switch (e.kind) {
    case "lit": return litTypeOf(cx, e);
    case "id": return typeOfId(cx, e, scope);
    case "this": {
      if (!scope.cls) cx.fail("'this' outside class", e);
      const t = classType(cx.classes.get(scope.cls.fq) as ClsInfo);
      t.ptr = 1;
      return t;
    }
    case "call": return resolveCallExpr(cx, e, scope);
    case "index": return typeOfIndex(cx, e, scope);
    case "member": return typeOfMember(cx, e, scope);
    case "unary": return typeOfUnary(cx, e, scope);
    case "binary": return typeOfBinary(cx, e, scope);
    case "assign": return typeOfAssign(cx, e, scope);
    case "cond": {
      typeOf(cx, e.c, scope);
      const a = typeOf(cx, e.a, scope);
      const b = typeOf(cx, e.b, scope);
      if (a.key() === b.key()) return a;
      const p = promote(cx, a, b);
      if (p) return p;
      return a;
    }
    case "new": return typeOfNew(cx, e, scope);
    case "delete": {
      typeOf(cx, e.arg, scope);
      return CppType.basic("void");
    }
    case "cast": return typeOfCast(cx, e, scope);
    case "sizeof": {
      if (e.packName) cx.fail("sizeof... outside template", e);
      if (e.isType && e.type) cx.resolveTypeNode(e.type, scope);
      if (e.expr) typeOf(cx, e.expr, scope);
      return CppType.basic("unsigned long");
    }
    case "typeid": {
      if (e.isType && e.type) cx.resolveTypeNode(e.type, scope);
      if (e.expr) typeOf(cx, e.expr, scope);
      return CppType.basic("__typeinfo");
    }
    case "lambda": return analyzeLambda(cx, e, scope);
    case "initlist": {
      const items = e.items.map(x => ({ t: typeOf(cx, x, scope) }));
      const ty = CppType.basic("__initlist");
      if (items.length) ty.ret = items[0].t;
      return ty;
    }
    case "stmtexpr": {
      scope.locals.push(new Map());
      try {
        let t = CppType.basic("void");
        for (const s of e.stmts) {
          if (s.kind === "expr") t = typeOf(cx, (s as ExprStmt).expr, scope);
          else annotateStmt(cx, s, scope);
        }
        return t;
      } finally {
        scope.locals.pop();
      }
    }
    case "noexcept": return CppType.basic("bool");
  }
}

export function classType(cls: ClsInfo): CppType {
  const t = new CppType(cls.fq);
  t.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
  return t;
}

function litTypeOf(cx: Cx, e: LitExpr): CppType {
  void cx;
  if (e.lkind === "bool") return CppType.basic("bool");
  if (e.lkind === "null") return CppType.basic("__null");
  if (e.lkind === "char") return CppType.basic("char");
  if (e.lkind === "string") {
    const t = CppType.basic("char");
    t.dims = [parseCString(e.value).length + 1];
    return t;
  }
  const v = e.value.replace(/'/g, "");
  const m = v.match(/^(.+?)([uUlLfF]+)$/);
  const suf = (m ? m[2] : "").toLowerCase();
  const num = m ? m[1] : v;
  const isHex = /^0[xX]/.test(num);
  const isFloat = !isHex && /[.eEpP]/.test(num);
  if (isFloat) {
    if (suf.includes("f")) return CppType.basic("float");
    if (suf.includes("l")) return CppType.basic("long double");
    return CppType.basic("double");
  }
  const un = suf.includes("u");
  const longs = (suf.match(/l/g) || []).length;
  if (longs >= 2) return CppType.basic(un ? "unsigned long long" : "long long");
  if (longs === 1) return CppType.basic(un ? "unsigned long" : "long");
  return CppType.basic(un ? "unsigned int" : "int");
}

function typeOfId(cx: Cx, e: IdExpr, scope: Scope): CppType {
  const sym = cx.resolveSym(e.parts, e.global, scope);
  const ann = cx.getAnn(e);
  ann.sym = sym;
  if (!sym) cx.fail(`unknown name '${e.parts.map(s => s.n).join("::")}'`, e);
  const s = sym as Sym;
  if (s.k === "var") {
    cx.markVar(s.v);
    ann.needsThis = s.v.isField && !s.v.isStatic && e.parts.length === 1;
    if (s.v.isField) {
      const owner = s.v.fq.slice(0, s.v.fq.lastIndexOf("::"));
      const cls = cx.classes.get(owner);
      if (cls) return cx.fieldType(cls, s.v.short);
    }
    return cx.varType(s.v);
  }
  if (s.k === "func") {
    for (const f of s.fns) cx.markFunc(f);
    return funcSig(cx, s.fns[0]);
  }
  if (s.k === "class") {
    ann.isType = true;
    cx.markCls(s.cls.fq);
    return classType(s.cls);
  }
  if (s.k === "enum") {
    ann.isType = true;
    s.e.referenced = true;
    const t = new CppType(s.e.fq);
    t.segs = [{ n: s.e.fq, a: [] }];
    return t;
  }
  if (s.k === "typedef") {
    ann.isType = true;
    return cx.expandTypedef(s.fq, new Set());
  }
  if (s.k === "tmpl") {
    ann.isType = true;
    return CppType.basic("__template");
  }
  if (s.k === "enumval") {
    s.e.referenced = true;
    const t = new CppType(s.e.fq);
    t.segs = [{ n: s.e.fq, a: [] }];
    return t;
  }
  cx.fail(`'${e.parts.map(x => x.n).join("::")}' is not a value`, e);
}

function funcSig(cx: Cx, f: FuncInfo): CppType {
  const t = new CppType("__func");
  t.isFunc = true;
  t.ret = cx.funcRet(f);
  const ps = cx.funcParams(f);
  t.funcParams = ps.filter(p => !p.variadic).map(p => p.type);
  t.funcVariadic = ps.some(p => p.variadic);
  t.ptr = 1;
  return t;
}

function typeOfIndex(cx: Cx, e: IndexExpr, scope: Scope): CppType {
  const at = noRef(typeOf(cx, e.arr, scope));
  const it = typeOf(cx, e.idx, scope);
  void it;
  if (isClassVal(cx, at)) {
    const m = cx.lookupMember(cx.stripAll(at), "operator[]", new Set());
    if (!m.methods) cx.fail("no operator[] ", e);
    const r = resolveOverload(cx, m.methods, [], [{ t: typeOf(cx, e.idx, scope), e: e.idx }], scope, e, undefined, at.cnst);
    cx.getAnn(e).call = r.fn;
    cx.getAnn(e).convs = r.convs;
    return cx.funcRet(r.fn);
  }
  if (at.dims.length) {
    const t = new CppType(at.name);
    t.segs = at.segs;
    t.ptr = at.ptr;
    t.dims = at.dims.slice(1);
    return t;
  }
  if (at.ptr > 0) {
    const t = new CppType(at.name);
    t.segs = at.segs;
    t.ptr = at.ptr - 1;
    t.dims = at.dims.slice();
    return t;
  }
  cx.fail("subscript on non-array", e);
}

function typeOfMember(cx: Cx, e: MemberExpr, scope: Scope): CppType {
  const ot = typeOf(cx, e.obj, scope);
  const ann = cx.getAnn(e);
  let objT = ot;
  if (e.arrow && objT.ptr === 0 && !objT.isFunc && isClassVal(cx, objT)) {
    objT = applyArrow(cx, e, objT, scope);
  }
  const clsFq = classOf(cx, objT);
  if (!clsFq) cx.fail(`no member '${e.field}'`, e);
  let lookupFq = clsFq;
  if (e.qual.length) {
    const qs = cx.resolveSym(e.qual, false, scope);
    if (!qs || qs.k !== "class") cx.fail(`unknown class '${e.qual.map(s => s.n).join("::")}'`, e);
    lookupFq = (qs as Sym & { k: "class" }).cls.fq;
  }
  const m = cx.lookupMember(lookupFq, e.field, new Set());
  if (m.field) {
    const cls = cx.classes.get(m.owner) as ClsInfo;
    ann.sym = { k: "var", v: cx.fieldVar(cls, e.field, cls.fields.get(e.field) as VarDecl) };
    return cx.fieldType(cls, e.field);
  }
  if (m.methods) cx.fail(`method '${e.field}' without call`, e);
  cx.fail(`'${clsFq}' has no member '${e.field}'`, e);
}

function applyArrow(cx: Cx, e: MemberExpr, objT: CppType, scope: Scope): CppType {
  const ann = cx.getAnn(e);
  let cur = objT;
  for (let i = 0; i < 8; i++) {
    if (!isClassVal(cx, cur)) break;
    const m = cx.lookupMember(cx.stripAll(cur), "operator->", new Set());
    if (!m.methods) break;
    const r = resolveOverload(cx, m.methods, [], [], scope, e, undefined, cur.cnst);
    if (!ann.arrowCall) ann.arrowCall = r.fn;
    cur = cx.funcRet(r.fn);
  }
  return cur;
}

function typeOfUnary(cx: Cx, e: UnaryExpr, scope: Scope): CppType {
  if (e.op === "...") cx.fail("pack expansion outside template", e);
  const at = typeOf(cx, e.arg, scope);
  const ann = cx.getAnn(e);
  if (e.op === "*") {
    if (isClassVal(cx, at)) {
      const r = findOperator(cx, "*", { t: at, e: e.arg }, null, scope, e);
      if (!r) cx.fail("no operator* ", e);
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
    if (at.isFunc) return at;
    if (at.ref !== "") {
      const t = new CppType(at.name);
      t.segs = at.segs;
      t.ptr = at.ptr;
      t.dims = at.dims.slice();
      return t;
    }
    if (at.ptr > 0) {
      const t = new CppType(at.name);
      t.segs = at.segs;
      t.ptr = at.ptr - 1;
      t.dims = at.dims.slice();
      return t;
    }
    if (at.dims.length) {
      const t = new CppType(at.name);
      t.segs = at.segs;
      t.dims = at.dims.slice(1);
      return t;
    }
    cx.fail("indirection on non-pointer", e);
  }
  if (e.op === "&") {
    const t = new CppType(at.name);
    t.segs = at.segs;
    t.ptr = at.ptr + 1;
    t.dims = at.dims.slice();
    markBoxedOf(cx, e.arg);
    return t;
  }
  if (e.op === "!" ) return CppType.basic("bool");
  if (e.op === "++" || e.op === "--") {
    if (isClassVal(cx, at)) {
      const r = findOperator(cx, e.op, { t: at, e: e.arg }, null, scope, e, e.postfix);
      if (!r) cx.fail(`no ${e.op}`, e);
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
    return at;
  }
  if (e.op === "+" || e.op === "-") {
    if (isClassVal(cx, at)) {
      const r = findOperator(cx, e.op, { t: at, e: e.arg }, null, scope, e);
      if (!r) cx.fail(`no ${e.op}`, e);
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
    return promoteUnary(cx, at);
  }
  if (e.op === "~") {
    if (isClassVal(cx, at)) {
      const r = findOperator(cx, "~", { t: at, e: e.arg }, null, scope, e);
      if (!r) cx.fail("no operator~", e);
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
    return promoteUnary(cx, at);
  }
  cx.fail(`bad unary '${e.op}'`, e);
}

function typeOfBinary(cx: Cx, e: BinaryExpr, scope: Scope): CppType {
  const rawL = typeOf(cx, e.l, scope);
  const rawR = typeOf(cx, e.r, scope);
  const ann = cx.getAnn(e);
  if (e.op === ",") return rawR;
  // Outside a plain assignment an lvalue of reference type behaves as the type
  // it refers to; only the assignment needs to know it writes through one.
  const lt = e.op === "=" ? rawL : rawL.core();
  const rt = e.op === "=" ? rawR : rawR.core();
  const lop = isClassVal(cx, lt) || isClassBox(cx, lt);
  const rop = isClassVal(cx, rt) || isClassBox(cx, rt);
  if ((lop || rop) && e.op !== "&&" && e.op !== "||") {
    const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
    if (r) {
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
  }
  if ((lop || rop) && (e.op === "&&" || e.op === "||")) {
    const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
    if (r) {
      ann.call = r.fn;
      ann.convs = r.convs;
      return cx.funcRet(r.fn);
    }
    return CppType.basic("bool");
  }
  if (e.op === "&&" || e.op === "||") return CppType.basic("bool");
  if (e.op === "==" || e.op === "!=" || e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=" || e.op === "<=>") {
    return CppType.basic("bool");
  }
  if (e.op === "<<" || e.op === ">>") {
    const p = promote(cx, lt, rt);
    if (p) return p;
    cx.fail(`bad operands to '${e.op}'`, e);
  }
  const lDec = lt.dims.length && !lt.isBox() ? decayed(lt) : lt;
  const rDec = rt.dims.length && !rt.isBox() ? decayed(rt) : rt;
  if (lDec.ptr > 0 && isIntegerish(cx, rt) && (e.op === "+" || e.op === "-")) return lDec;
  if (rDec.ptr > 0 && isIntegerish(cx, lt) && e.op === "+") return rDec;
  if (lDec.ptr > 0 && rDec.ptr > 0 && e.op === "-") return CppType.basic("long");
  const p = promote(cx, lt, rt);
  if (p) return p;
  cx.fail(`bad operands to '${e.op}'`, e);
}

function decayed(t: CppType): CppType {
  const r = new CppType(t.name);
  r.segs = t.segs;
  r.ptr = t.ptr + 1;
  return r;
}

function typeOfAssign(cx: Cx, e: AssignExpr, scope: Scope): CppType {
  const lt = typeOf(cx, e.l, scope);
  const rt = typeOf(cx, e.r, scope);
  const ann = cx.getAnn(e);
  if (isClassVal(cx, lt)) {
    const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
    if (!r && e.op === "=" && rt.name === "__initlist") {
      const items = (e.r as InitListExpr).items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
      const cr = resolveInitCtor(cx, cx.stripAll(lt), items.length ? [{ t: rt, e: e.r }] : [], scope, e);
      ann.initCall = cr.fn;
      ann.convs = cr.convs;
      const ar = findOperator(cx, "=", { t: lt, e: e.l }, { t: lt, e: e.r }, scope, e);
      if (!ar) cx.fail("no operator=", e);
      ann.call = ar.fn;
      return cx.funcRet(ar.fn);
    }
    if (!r) cx.fail(`no ${e.op}`, e);
    ann.call = (r as { fn: FuncInfo }).fn;
    ann.convs = (r as { convs: ({ kind: string; fn: FuncInfo } | null)[] }).convs;
    return cx.funcRet((r as { fn: FuncInfo }).fn);
  }
  if (e.op !== "=") {
    const p = promote(cx, lt, rt);
    if (!p && !(lt.ptr > 0 && isIntegerish(cx, rt))) cx.fail(`bad operands to '${e.op}'`, e);
    return lt;
  }
  // Storing through a reference is a plain write; only a pointer target needs
  // the value on the right to live in a box.
  if (lt.ptr > 0 && !rt.isBox() && !rt.dims.length && rt.name !== "__null") markBoxedOf(cx, e.r);
  const m = matchScore(cx, lt, rt, e.r, scope, true);
  if (m.s < 0) cx.fail("cannot convert in assignment", e);
  ann.conv = m.conv;
  return lt;
}

function typeOfNew(cx: Cx, e: NewExpr, scope: Scope): CppType {
  for (const p of e.placement) typeOf(cx, p, scope);
  const t = cx.resolveTypeNode(e.type, scope);
  const ann = cx.getAnn(e);
  const clsFq = !t.isBox() && !t.dims.length && !t.isFunc ? cx.stripAll(t) : "";
  if (t.name === "void" && !t.ptr) cx.fail("new void", e);
  if (clsFq && cx.classes.has(clsFq)) {
    const cls = cx.classes.get(clsFq) as ClsInfo;
    for (const fns of cls.methods.values()) {
      for (const f of fns) {
        if (f.isPure) cx.fail(`new abstract class '${clsFq}'`, e);
      }
    }
  }
  if (e.isArray) {
    if (e.args.length) cx.fail("new array with initializer", e);
    // The element count is an ordinary expression, so "new _Tp[__n]" needs the
    // names in it annotated like any other argument.
    for (const d of e.type.dims) typeOf(cx, d, scope);
    if (clsFq && cx.classes.has(clsFq)) {
      const r = resolveCtor(cx, clsFq, [], scope, e, true);
      ann.call = r.fn;
    }
  } else if (clsFq && cx.classes.has(clsFq)) {
    const argTs = e.args.map(x => ({ t: typeOf(cx, x, scope), e: x }));
    const r = resolveInitCtor(cx, clsFq, argTs, scope, e);
    ann.call = r.fn;
    ann.convs = r.convs;
  } else {
    if (e.args.length > 1) cx.fail("too many initializers", e);
    if (e.args.length) {
      const it = typeOf(cx, e.args[0], scope);
      boxArg(cx, t, { t: it, e: e.args[0] }, scope, e);
    }
  }
  const bt = new CppType(t.name);
  bt.segs = t.segs;
  bt.ptr = t.ptr + 1;
  bt.dims = [];
  return bt;
}

function typeOfCast(cx: Cx, e: CastExpr, scope: Scope): CppType {
  if (!e.type) cx.fail("bad cast", e);
  const target = cx.resolveTypeNode(e.type as TypeNode, scope);
  const st = typeOf(cx, e.arg, scope);
  const ann = cx.getAnn(e);
  const kind = e.ckind;
  if (target.name === "void" && !target.ptr) return target;
  const tn = coreName(target);
  const sn = coreName(st);
  const tCls = !target.isBox() && !target.dims.length && cx.classes.has(cx.stripAll(target));
  const sCls = !st.isBox() && !st.dims.length && cx.classes.has(cx.stripAll(st));
  if (kind === "dynamic_cast") {
    if (tCls || (target.ptr > 0 && coreName(target) === "void")) return target;
    cx.fail("bad dynamic_cast", e);
  }
  if (kind === "const_cast") {
    if (tn === sn || (tCls && sCls && cx.stripAll(target) === cx.stripAll(st))) return target;
    cx.fail("bad const_cast", e);
  }
  if (tCls && sCls) {
    const tf = cx.stripAll(target);
    const sf = cx.stripAll(st);
    if (tf === sf || isDerived(cx, sf, tf) || isDerived(cx, tf, sf)) return target;
    const r = resolveCtor(cx, tf, [{ t: st, e: e.arg }], scope, e, kind !== "static_cast");
    ann.call = r.fn;
    ann.convs = r.convs;
    return target;
  }
  if (tCls && !sCls) {
    // A functional cast with no argument, such as "P()", is default construction.
    const r = resolveInitCtor(cx, cx.stripAll(target), [{ t: st, e: e.arg }], scope, e);
    ann.call = r.fn;
    ann.convs = r.convs;
    return target;
  }
  if (sCls && !tCls) {
    if (target.ptr > 0 || target.isFunc) cx.fail("cannot cast class to pointer", e);
    const c = findConversion(cx, st, target, scope);
    if (!c) cx.fail("no conversion", e);
    ann.conv = c;
    return target;
  }
  if (target.ptr > 0 && st.ptr > 0) return target;
  if (target.isFunc && st.isFunc) return target;
  if (target.ptr > 0 && st.ptr === 0 && (kind === "cstyle" || kind === "reinterpret_cast")) {
    cx.warn("integer to pointer cast is unchecked", e);
    return target;
  }
  if (target.ptr === 0 && st.ptr > 0 && (kind === "cstyle" || kind === "reinterpret_cast")) {
    cx.warn("pointer to integer cast is unchecked", e);
    return target;
  }
  if (isNumericish(cx, target) && isNumericish(cx, st)) return target;
  if (tn === "__null" || sn === "__null") return target;
  // Only the reference qualification differs, as in "static_cast<_Tp&&>(__t)":
  // the value denoted is the same one, so there is nothing to convert.
  if (st.ptr === target.ptr && noRef(st).key() === noRef(target).key()) return target;
  cx.fail(`cannot cast`, e);
}

export function resolveInitCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope, t: At): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
  if (args.length === 1 && args[0].e.kind === "initlist") {
    const items = (args[0].e as InitListExpr).items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
    if (!items.length) return resolveCtor(cx, clsFq, [], scope, t, true);
    const asList = [{ t: listType(items), e: args[0].e }];
    const lr = tryResolveCtor(cx, clsFq, asList, scope);
    if (lr) return lr;
    return resolveCtor(cx, clsFq, items, scope, t, true);
  }
  return resolveCtor(cx, clsFq, args, scope, t, true);
}

function listType(items: { t: CppType }[]): CppType {
  const ty = CppType.basic("__initlist");
  if (items.length) ty.ret = items[0].t;
  return ty;
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
  return resolveOverload(cx, cands, tmpls, args, scope, t);
}

export function tryResolveCtor(cx: Cx, clsFq: string, args: { t: CppType; e: Expr }[], scope: Scope): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
  try {
    return resolveCtor(cx, clsFq, args, scope, { file: "", line: 0 }, true);
  } catch {
    return null;
  }
}

function resolveCallExpr(cx: Cx, e: CallExpr, scope: Scope): CppType {
  const fn = e.fn;
  const argTs = e.args.map(x => ({ t: typeOf(cx, x, scope), e: x }));
  const ann = cx.getAnn(e);
  if (fn.kind === "id") {
    const sym = cx.resolveSym((fn as IdExpr).parts, (fn as IdExpr).global, scope);
    cx.getAnn(fn).sym = sym;
    if (!sym) {
      const nm = (fn as IdExpr).parts.map(s => s.n).join("::");
      if ((fn as IdExpr).parts.length === 1 && (fn as IdExpr).parts[0].n.startsWith("__builtin_")) {
        return builtinCall(cx, e, (fn as IdExpr).parts[0].n, argTs, scope);
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
      return CppType.basic(fq);
    }
    if (s.k === "func" || s.k === "tmpl") {
      let cands: FuncInfo[] = [];
      const tmpls: TmplInfo[] = [];
      // An instantiation is filed under the name of its template, and so is the
      // template itself, so both have to be looked up under that name.
      const fq = s.k === "func" ? (s.fns[0].fromTmpl || s.fns[0].fq) : s.t.fq;
      if (cx.funcs.has(fq)) cands = cands.concat(cx.funcs.get(fq) as FuncInfo[]);
      if (s.k === "func") {
        for (const f of s.fns) {
          if (!cands.includes(f)) cands.push(f);
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
      const vt = s.v.isField
        ? cx.fieldType(cx.classes.get(s.v.fq.slice(0, s.v.fq.lastIndexOf("::"))) as ClsInfo, s.v.short)
        : cx.varType(s.v);
      if (vt.isFunc) return vt.ret as CppType;
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

function setCopyCtor(cx: Cx, e: CallExpr, ret: CppType, scope: Scope): void {
  const fq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? cx.stripAll(ret) : "";
  if (fq && cx.classes.has(fq)) {
    const r = tryResolveCtor(cx, fq, [{ t: ret, e }], scope);
    if (r) cx.getAnn(e).copyCtor = r.fn;
  }
}

function callOperator(cx: Cx, e: CallExpr, vt: CppType, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
  const clsFq = classOf(cx, vt);
  if (!clsFq) cx.fail("not callable", e);
  const m = cx.lookupMember(clsFq, "operator()", new Set());
  if (!m.methods) cx.fail(`'${clsFq}' is not callable`, e);
  const r = resolveOverload(cx, m.methods, [], argTs, scope, e);
  cx.getAnn(e).call = r.fn;
  cx.getAnn(e).convs = r.convs;
  applyArgBoxing(cx, e, r.fn, argTs, scope);
  const fret = cx.funcRet(r.fn);
  setCopyCtor(cx, e, fret, scope);
  return fret;
}

function memberCall(cx: Cx, e: CallExpr, fn: MemberExpr, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
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
  const clsFq = classOf(cx, objT);
  if (!clsFq) cx.fail(`no method '${fn.field}'`, fn);
  let lookupFq = clsFq;
  if (fn.qual.length) {
    const qs = cx.resolveSym(fn.qual, false, scope);
    if (!qs || qs.k !== "class") cx.fail(`unknown class '${fn.qual.map(s => s.n).join("::")}'`, fn);
    lookupFq = (qs as Sym & { k: "class" }).cls.fq;
  }
  // "p->~T()" names the destructor of the class the object belongs to.
  const mname = fn.field.charAt(0) === "~" ? "#dtor" : fn.field;
  const m = cx.lookupMember(lookupFq, mname, new Set());
  if (m.field) {
    const cls = cx.classes.get(m.owner) as ClsInfo;
    const ft = cx.fieldType(cls, fn.field);
    if (ft.isFunc) return ft.ret as CppType;
    cx.fail(`'${fn.field}' is not callable`, fn);
  }
  const cands = m.methods ? m.methods.slice() : [];
  const tmpls: TmplInfo[] = [];
  const tfq = m.owner + "::" + fn.field;
  for (const tm of cx.tmplsOf(tfq)) if (!tmpls.includes(tm)) tmpls.push(tm);
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

function ctjInline(cx: Cx, e: CallExpr, name: string, argTs: { t: CppType; e: Expr }[], scope: Scope): CppType {
  void scope;
  if (!argTs.length || argTs[0].e.kind !== "lit" || (argTs[0].e as LitExpr).lkind !== "string") {
    cx.fail(`${name} first argument must be a string literal`, e);
  }
  cx.getAnn(e).call = { builtin: name };
  return CppType.basic("__any");
}

function applyArgBoxing(cx: Cx, e: CallExpr, fn: FuncInfo, argTs: { t: CppType; e: Expr }[], scope: Scope): void {
  const ps = cx.funcParams(fn);
  const convs = cx.getAnn(e).convs;
  argTs.forEach((a, i) => {
    const c = convs[i];
    if (c && c.kind === "ctor") {
      const cps = cx.funcParams(c.fn);
      if (cps.length) boxArg(cx, cps[0].type, a, scope, e);
    } else if (i < ps.length && !ps[i].variadic) {
      boxArg(cx, ps[i].type, a, scope, e);
    }
  });
}

export function resolveOverload(cx: Cx, cands: FuncInfo[], tmpls: TmplInfo[], args: { t: CppType; e: Expr }[], scope: Scope, t: At, explicit?: CppType[], objConst = false): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
  const all = cands.slice();
  for (const tm of tmpls) {
    const inst = tryInstantiateCall(cx, tm, args, scope, explicit, t);
    if (inst) all.push(inst);
  }
  if (!all.length) cx.fail("no matching function", t);
  let best: FuncInfo | null = null;
  let bestScore = -1e18;
  let bestConvs: ({ kind: string; fn: FuncInfo } | null)[] = [];
  for (const f of all) {
    const r = scoreFunc(cx, f, args, scope, objConst);
    if (!r.viable) continue;
    if (r.score > bestScore) {
      best = f;
      bestScore = r.score;
      bestConvs = r.convs;
    }
  }
  if (!best) cx.fail("no matching function for call", t);
  if ((best as FuncInfo).isDelete) cx.fail("call to deleted function", t);
  cx.markFunc(best as FuncInfo);
  // A static member is emitted as part of its class, so the class is needed too.
  if ((best as FuncInfo).isStatic && (best as FuncInfo).cls) cx.markCls((best as FuncInfo).cls);
  return { fn: best as FuncInfo, convs: bestConvs };
}

// Viability and preference are separate: penalties only rank the candidates
// that could be called at all, they never rule one out on their own.
function scoreFunc(cx: Cx, f: FuncInfo, args: { t: CppType; e: Expr }[], scope: Scope, objConst = false): { viable: boolean; score: number; convs: ({ kind: string; fn: FuncInfo } | null)[] } {
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

function tryInstantiateCall(cx: Cx, tm: TmplInfo, args: { t: CppType; e: Expr }[], scope: Scope, explicit: CppType[] | undefined, t: At): FuncInfo | null {
  try {
    const full = deduce(cx, tm, args, scope, explicit || [], t);
    if (!full) return null;
    return cx.instantiateFunc(tm, full, new Map());
  } catch {
    return null;
  }
}

function packNameOf(tn: TypeNode): string {
  if (tn.parts.length === 1 && !tn.parts[0].a.length) return tn.parts[0].n;
  return "";
}

function deduce(cx: Cx, tm: TmplInfo, args: { t: CppType; e: Expr }[], scope: Scope, explicit: CppType[], t: At): CppType[] | null {
  void t;
  const env = new Map<string, CppType>();
  const venv = new Map<string, number>();
  const packs = new Map<string, CppType[]>();
  tm.tparams.forEach((tp, i) => {
    if (i < explicit.length && !tp.isPack) {
      if (tp.kind === "nontype") venv.set(tp.name, parseInt(explicit[i].name.replace("__value", "") || "0", 10));
      else env.set(tp.name, explicit[i]);
    }
  });
  const dp = (tm.decl as FuncDecl).params;
  let ai = 0;
  for (const p of dp) {
    if (p.variadic) break;
    if (p.isPack) {
      const nm = packNameOf(p.type);
      if (!nm) return null;
      packs.set(nm, args.slice(ai).map(a => noRef(a.t)));
      ai = args.length;
      break;
    }
    if (ai >= args.length) {
      if (!p.def) return null;
      continue;
    }
    if (!deduceOne(cx, p.type, args[ai].t, env, venv)) return null;
    ai++;
  }
  const senv = blankSubstEnv();
  for (const [k, v] of env) senv.types.set(k, v);
  for (const [k, v] of venv) senv.values.set(k, v);
  for (const [k, v] of packs) senv.packs.set(k, v);
  const full: CppType[] = [];
  for (const tp of tm.tparams) {
    if (env.has(tp.name)) {
      full.push(env.get(tp.name) as CppType);
      continue;
    }
    if (tp.isPack) {
      full.push(...(packs.get(tp.name) || []));
      continue;
    }
    if (venv.has(tp.name)) {
      full.push(CppType.basic("__value" + venv.get(tp.name)));
      continue;
    }
    if (!tp.def) return null;
    if (tp.kind === "nontype") {
      const ex = substExpr(tp.def as Expr, senv);
      const v = constEval(cx, ex, scope);
      if (typeof v !== "number") return null;
      full.push(CppType.basic("__value" + Math.trunc(v)));
    } else {
      const tn = substTypeNode(tp.def as TypeNode, senv);
      full.push(cx.resolveTypeNode(tn, tm.scope));
    }
  }
  return full;
}

function noRef(t: CppType): CppType {
  const c = new CppType(t.name);
  c.segs = t.segs;
  c.ptr = t.ptr;
  c.dims = t.dims.slice();
  c.isFunc = t.isFunc;
  c.ret = t.ret;
  c.funcParams = t.funcParams;
  c.funcVariadic = t.funcVariadic;
  return c;
}

function deduceOne(cx: Cx, tn: TypeNode, t: CppType, env: Map<string, CppType>, venv: Map<string, number>): boolean {
  void cx;
  if (tn.valueArg && tn.valueArg.kind === "id") {
    const id = tn.valueArg as IdExpr;
    if (id.parts.length === 1 && t.name.startsWith("__value")) {
      venv.set(id.parts[0].n, parseInt(t.name.replace("__value", "") || "0", 10));
      return true;
    }
    return true;
  }
  if (!tn.parts.length) return true;
  const first = tn.parts[0].n;
  if (tn.parts.length === 1 && !tn.parts[0].a.length) {
    if (!env.has(first)) {
      const c = noRef(t);
      if (tn.ptr > 0) c.ptr = Math.max(0, t.ptr - tn.ptr);
      env.set(first, c);
    }
    tn.dims.forEach((d, i) => {
      if (d.kind === "id") {
        const id = d as IdExpr;
        if (id.parts.length === 1 && i < t.dims.length) venv.set(id.parts[0].n, t.dims[i]);
      }
    });
    return true;
  }
  if (tn.parts[0].a.length && t.segs.length) {
    const ta = t.segs[0].a;
    if (ta.length !== tn.parts[0].a.length) return true;
    for (let i = 0; i < ta.length; i++) {
      if (!deduceOne(cx, tn.parts[0].a[i], ta[i], env, venv)) return false;
    }
  }
  return true;
}

export interface MatchResult {
  s: number;
  conv: { kind: string; fn: FuncInfo } | null;
}

const NOMATCH: MatchResult = { s: -1e17, conv: null };

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
  if (p.core().key() === a.core().key()) return { s: 90, conv: null };
  const pn = coreName(p);
  const an = coreName(a);
  if (a.dims.length && !a.isBox() && p.ptr > 0 && pn === an && p.ptr === a.ptr + 1) {
    return { s: 90, conv: null };
  }
  if (a.dims.length && !a.isBox() && p.ptr > 0 && pn === "void") return { s: 70, conv: null };
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
  if (cx.enums.has(pFq || pn) && isIntegerName(an)) return { s: 40, conv: null };
  if (cx.enums.has(aFq || an) && isIntegerName(pn)) return { s: 60, conv: null };
  if (cx.enums.has(pFq || pn) && cx.enums.has(aFq || an) && pn === an) return { s: 90, conv: null };
  if (isNumericName(pn) && isNumericName(an)) {
    if (pn === an) return { s: 90, conv: null };
    if (isIntegerName(pn) && isIntegerName(an)) return { s: 60, conv: null };
    if (!isIntegerName(pn) && !isIntegerName(an)) return { s: 60, conv: null };
    return { s: 50, conv: null };
  }
  if (pn === "bool" && isNumericName(an)) return { s: 40, conv: null };
  if (isNumericName(pn) && an === "bool") return { s: 40, conv: null };
  if (pn === "bool" && a.ptr > 0) return { s: 40, conv: null };
  if (a.name === "__initlist" && p.ptr === 0 && !p.isFunc) {
    const cls = cx.classes.get(cx.stripAll(p));
    if (cls && cls.fromTmpl && last(cls.fromTmpl.split("::")) === "initializer_list") {
      return { s: 85, conv: null };
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

function funcSigMatch(cx: Cx, p: CppType, a: CppType): boolean {
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
  const toFq = !to.isBox() && !to.dims.length && !to.isFunc ? cx.stripAll(to) : "";
  if (toFq && cx.classes.has(toFq) && !(cx.stripAll(from) === toFq && !from.isBox())) {
    const cls = cx.classes.get(toFq) as ClsInfo;
    const ctors = cls.methods.get("#ctor") || [];
    for (const f of ctors) {
      if (f.decl.flags.includes("explicit")) continue;
      const ps = cx.funcParams(f);
      if (ps.length !== 1 || ps[0].variadic) continue;
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

export function findOperator(cx: Cx, op: string, l: { t: CppType; e: Expr } | null, r: { t: CppType; e: Expr } | null, scope: Scope, t: At, postfix = false): { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] } | null {
  const key = "operator" + op;
  const argsLR: { t: CppType; e: Expr }[] = [];
  if (l) argsLR.push(l);
  if (r) argsLR.push(r);
  if (postfix) {
    argsLR.push({ t: CppType.basic("int"), e: { kind: "lit", lkind: "int", value: "0", file: t.file, line: t.line } });
  }
  let best: { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[]; score: number } | null = null;
  const consider = (cands: FuncInfo[], tmpls: TmplInfo[], args: { t: CppType; e: Expr }[]) => {
    if (!cands.length && !tmpls.length) return;
    try {
      const rr = resolveOverload(cx, cands, tmpls, args, scope, t);
      let sc = 0;
      const ps = cx.funcParams(rr.fn);
      args.forEach((a, i) => {
        if (i < ps.length) sc += matchScore(cx, ps[i].type, a.t, a.e, scope, true).s;
      });
      if (!best || sc > best.score) best = { fn: rr.fn, convs: rr.convs, score: sc };
    } catch { /* no match */ }
  };
  if (l && isClassVal(cx, l.t)) {
    const fq = cx.stripAll(l.t);
    const m = cx.lookupMember(fq, key, new Set());
    const tmpls: TmplInfo[] = [];
    for (const tm of cx.tmplsOf(fq + "::" + key)) if (!tmpls.includes(tm)) tmpls.push(tm);
    consider(m.methods ? m.methods.slice() : [], tmpls, r ? [r] : (postfix ? [{ t: CppType.basic("int"), e: argsLR[1].e }] : []));
  }
  const cands: FuncInfo[] = [];
  const tmpls: TmplInfo[] = [];
  for (const ns of assocNs(cx, l ? l.t : null, r ? r.t : null, scope)) {
    const idx = cx.nsFuncIndex.get(ns) || [];
    for (const f of idx) {
      if (f.short === key) cands.push(f);
    }
    for (const tm of cx.tmpls.values()) {
      if (tm.kind === "func" && tm.fq === (ns ? ns + "::" + key : key)) tmpls.push(tm);
    }
  }
  consider(cands, tmpls, argsLR);
  if (!best) return null;
  const b = best as { fn: FuncInfo; convs: ({ kind: string; fn: FuncInfo } | null)[] };
  cx.markFunc(b.fn);
  return { fn: b.fn, convs: b.convs };
}

function assocNs(cx: Cx, l: CppType | null, r: CppType | null, scope: Scope): string[] {
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
      const idx = fq.lastIndexOf("::");
      push(idx >= 0 ? fq.slice(0, idx) : "");
    }
  }
  for (let i = scope.ns.length; i >= 0; i--) push(scope.ns.slice(0, i).join("::"));
  return out;
}

export function isDerived(cx: Cx, from: string, to: string): boolean {
  if (from === to) return true;
  const seen = new Set<string>();
  const queue = [from];
  while (queue.length) {
    const cur = queue.shift() as string;
    if (cur === to) return true;
    if (seen.has(cur)) continue;
    seen.add(cur);
    const cls = cx.classes.get(cur);
    if (!cls) continue;
    for (const b of cls.bases) queue.push(b.fq);
  }
  return false;
}

export function coreName(t: CppType): string {
  if (!t.segs.length) return t.name;
  return last(t.segs).n;
}

export function isClassVal(cx: Cx, t: CppType): boolean {
  if (t.isBox() || t.dims.length > 0 || t.isFunc) return false;
  return cx.classes.has(cx.stripAll(t));
}

export function isClassBox(cx: Cx, t: CppType): boolean {
  if (!t.isBox() || t.dims.length > 0 || t.isFunc) return false;
  return cx.classes.has(cx.stripAll(t));
}

export function classOf(cx: Cx, t: CppType): string {
  if (t.isFunc) return "";
  const fq = cx.stripAll(t);
  if (cx.classes.has(fq)) return fq;
  return "";
}

function isIntegerish(cx: Cx, t: CppType): boolean {
  void cx;
  return !t.isBox() && !t.dims.length && !t.isFunc && isIntegerName(coreName(t));
}

function isNumericish(cx: Cx, t: CppType): boolean {
  if (t.isBox() || t.dims.length || t.isFunc) return false;
  return isNumericName(coreName(t)) || cx.enums.has(cx.stripAll(t));
}

function promoteUnary(cx: Cx, t: CppType): CppType {
  void cx;
  const n = coreName(t);
  if (["bool", "char", "signed char", "unsigned char", "short", "unsigned short"].includes(n)) {
    return CppType.basic("int");
  }
  if (isNumericName(n)) return CppType.basic(n);
  if (cx.enums.has(cx.stripAll(t))) return CppType.basic("int");
  return CppType.basic(n);
}

export function promote(cx: Cx, a: CppType, b: CppType): CppType | null {
  a = noRef(a);
  b = noRef(b);
  const an = coreName(a);
  const bn = coreName(b);
  const ae = cx.enums.has(cx.stripAll(a));
  const be = cx.enums.has(cx.stripAll(b));
  if ((!isNumericName(an) && !ae) || (!isNumericName(bn) && !be)) return null;
  if (a.ptr > 0 || b.ptr > 0 || a.isBox() || b.isBox()) return null;
  if (a.dims.length || b.dims.length) return null;
  const rank = (n: string, isEnum: boolean): number => {
    if (isEnum) return 5;
    switch (n) {
      case "long double": return 14;
      case "double": return 13;
      case "float": return 12;
      case "unsigned long long": return 11;
      case "long long": return 10;
      case "unsigned long": return 9;
      case "long": return 8;
      case "unsigned int": return 7;
      case "int": return 6;
      default: return 5;
    }
  };
  const r = Math.max(rank(an, ae), rank(bn, be));
  const names = ["", "", "", "", "", "int", "int", "unsigned int", "long", "unsigned long", "long long", "unsigned long long", "float", "double", "long double"];
  return CppType.basic(names[r]);
}

function markBoxedOf(cx: Cx, e: Expr): void {
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
    markBoxedOf(cx, cur.obj);
    return;
  }
  if (cur.kind === "index") {
    markBoxedOf(cx, cur.arr);
    return;
  }
}

}
