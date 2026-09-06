namespace CTJ {

export interface SubstEnv {
  types: Map<string, CppType>;
  packs: Map<string, CppType[]>;
  values: Map<string, number>;
  valuePacks: Map<string, number[]>;
  packNames: Map<string, string[]>;
}

export function blankSubstEnv(): SubstEnv {
  return { types: new Map(), packs: new Map(), values: new Map(), valuePacks: new Map(), packNames: new Map() };
}

export function copySubstEnv(e: SubstEnv): SubstEnv {
  return {
    types: new Map(e.types), packs: new Map(e.packs), values: new Map(e.values),
    valuePacks: new Map(e.valuePacks), packNames: new Map(e.packNames),
  };
}

function litNum(n: number, a: At): LitExpr {
  return { kind: "lit", lkind: "int", value: String(n), file: a.file, line: a.line };
}

export function typeToNode(t: CppType): TypeNode {
  if (t.isFunc && t.ret) {
    const tn = typeToNode(t.ret);
    tn.ptr = t.ptr;
    tn.ref = t.ref;
    tn.func = { params: t.funcParams.map(typeToNode), variadic: t.funcVariadic };
    return tn;
  }
  const tn = typeNode(t.segs.map(g => qseg(g.n, g.a.map(typeToNode))));
  tn.ptr = t.ptr;
  tn.ref = t.ref;
  tn.cnst = t.cnst;
  tn.dims = t.dims.map(d => litNum(d, { file: "", line: 0 }) as Expr);
  return tn;
}

export function typeToSegs(t: CppType): QSeg[] {
  return t.segs.map(g => qseg(g.n, g.a.map(typeToNode)));
}

export function substTypeNode(tn: TypeNode, env: SubstEnv): TypeNode {
  const out = typeNode([], { file: tn.file, line: tn.line });
  out.global = tn.global;
  out.ptr = tn.ptr;
  out.ref = tn.ref;
  out.cnst = tn.cnst;
  out.packExpand = tn.packExpand;
  out.decltypeOf = tn.decltypeOf ? substExpr(tn.decltypeOf, env) : null;
  out.valueArg = tn.valueArg ? substExpr(tn.valueArg, env) : null;
  out.dims = tn.dims.map(d => substExpr(d, env));
  out.func = tn.func ? { params: tn.func.params.map(p => substTypeNode(p, env)), variadic: tn.func.variadic } : null;
  if (!tn.parts.length) return out;
  const first = tn.parts[0].n;
  const rep = env.types.get(first);
  if (rep && tn.parts[0].a.length === 0) {
    const segs = typeToSegs(rep);
    for (const s of segs) out.parts.push(s);
    for (let i = 1; i < tn.parts.length; i++) out.parts.push(substQSeg(tn.parts[i], env));
    out.ptr += rep.ptr;
    if (!out.ref) out.ref = rep.ref;
    if (rep.isFunc && !out.func && rep.ret) {
      out.func = { params: rep.funcParams.map(typeToNode), variadic: rep.funcVariadic };
    }
    for (const d of rep.dims) out.dims.unshift(litNum(d, out) as Expr);
  } else {
    out.parts = tn.parts.map(s => substQSeg(s, env));
  }
  return out;
}

function substQSeg(s: QSeg, env: SubstEnv): QSeg {
  return qseg(s.n, substTArgs(s.a, env));
}

export function substTArgs(args: TypeNode[], env: SubstEnv): TypeNode[] {
  const out: TypeNode[] = [];
  for (const a of args) {
    if (a.packExpand && a.parts.length === 1 && !a.parts[0].a.length) {
      const nm = a.parts[0].n;
      if (env.packs.has(nm)) {
        for (const t of env.packs.get(nm) as CppType[]) out.push(typeToNode(t));
        continue;
      }
      if (env.valuePacks.has(nm)) {
        for (const v of env.valuePacks.get(nm) as number[]) {
          const tn = typeNode([]);
          tn.valueArg = litNum(v, a) as Expr;
          out.push(tn);
        }
        continue;
      }
    }
    out.push(substTypeNode(a, env));
  }
  return out;
}

function peelPack(e: Expr): { core: string; wraps: Expr[] } | null {
  const wraps: Expr[] = [];
  let cur = e;
  if (cur.kind !== "unary" || cur.op !== "...") return null;
  cur = cur.arg;
  for (;;) {
    if (cur.kind === "id" && cur.parts.length === 1 && !cur.global) {
      return { core: cur.parts[0].n, wraps };
    }
    if (cur.kind === "unary" && (cur.op === "&" || cur.op === "*" || cur.op === "+" || cur.op === "-")) {
      wraps.push(cur);
      cur = cur.arg;
      continue;
    }
    if (cur.kind === "cast") {
      wraps.push(cur);
      cur = cur.arg;
      continue;
    }
    return null;
  }
}

function rebuildPack(core: Expr, wraps: Expr[]): Expr {
  let cur = core;
  for (let i = wraps.length - 1; i >= 0; i--) {
    const w = wraps[i];
    if (w.kind === "unary") {
      cur = { kind: "unary", op: w.op, arg: cur, postfix: w.postfix, file: w.file, line: w.line };
    } else if (w.kind === "cast") {
      cur = { kind: "cast", ckind: w.ckind, type: w.type, fn: w.fn, arg: cur, file: w.file, line: w.line };
    }
  }
  return cur;
}

function substCallArgs(args: Expr[], env: SubstEnv): Expr[] {
  const out: Expr[] = [];
  for (const a of args) {
    const pk = peelPack(a);
    if (pk && env.packNames.has(pk.core)) {
      for (const nm of env.packNames.get(pk.core) as string[]) {
        const id: Expr = { kind: "id", parts: [qseg(nm)], global: false, file: a.file, line: a.line };
        out.push(rebuildPack(id, pk.wraps));
      }
      continue;
    }
    if (pk && env.valuePacks.has(pk.core)) {
      for (const v of env.valuePacks.get(pk.core) as number[]) {
        out.push(rebuildPack(litNum(v, a) as Expr, pk.wraps));
      }
      continue;
    }
    out.push(substExpr(a, env));
  }
  return out;
}

export function substExpr(ex: Expr, env: SubstEnv): Expr {
  const f = ex.file;
  const l = ex.line;
  const a: At = { file: f, line: l };
  switch (ex.kind) {
    case "id": {
      if (ex.parts.length && env.values.has(ex.parts[0].n) && ex.parts.length === 1) {
        return litNum(env.values.get(ex.parts[0].n) as number, a);
      }
      if (ex.parts.length && env.types.has(ex.parts[0].n) && !ex.parts[0].a.length) {
        const rep = env.types.get(ex.parts[0].n) as CppType;
        const parts = typeToSegs(rep);
        for (let i = 1; i < ex.parts.length; i++) parts.push(substQSeg(ex.parts[i], env));
        return { kind: "id", parts, global: ex.global, file: f, line: l };
      }
      return { kind: "id", parts: ex.parts.map(s => substQSeg(s, env)), global: ex.global, file: f, line: l };
    }
    case "lit": return { kind: "lit", lkind: ex.lkind, value: ex.value, file: f, line: l };
    case "this": return { kind: "this", file: f, line: l };
    case "call":
      return { kind: "call", fn: substExpr(ex.fn, env), args: substCallArgs(ex.args, env), file: f, line: l };
    case "index":
      return { kind: "index", arr: substExpr(ex.arr, env), idx: substExpr(ex.idx, env), file: f, line: l };
    case "member":
      return {
        kind: "member", obj: substExpr(ex.obj, env), field: ex.field,
        arrow: ex.arrow, targs: substTArgs(ex.targs, env), qual: ex.qual, file: f, line: l,
      };
    case "unary":
      return { kind: "unary", op: ex.op, arg: substExpr(ex.arg, env), postfix: ex.postfix, file: f, line: l };
    case "binary":
      return { kind: "binary", op: ex.op, l: substExpr(ex.l, env), r: substExpr(ex.r, env), file: f, line: l };
    case "assign":
      return { kind: "assign", op: ex.op, l: substExpr(ex.l, env), r: substExpr(ex.r, env), file: f, line: l };
    case "cond":
      return {
        kind: "cond", c: substExpr(ex.c, env), a: substExpr(ex.a, env),
        b: substExpr(ex.b, env), file: f, line: l,
      };
    case "new":
      return {
        kind: "new", placement: ex.placement.map(x => substExpr(x, env)),
        type: substTypeNode(ex.type, env), args: substCallArgs(ex.args, env), isArray: ex.isArray, file: f, line: l,
      };
    case "delete":
      return { kind: "delete", arg: substExpr(ex.arg, env), isArray: ex.isArray, file: f, line: l };
    case "cast":
      return {
        kind: "cast", ckind: ex.ckind, type: ex.type ? substTypeNode(ex.type, env) : null,
        fn: ex.fn ? substExpr(ex.fn, env) : null, arg: substExpr(ex.arg, env), file: f, line: l,
      };
    case "sizeof": {
      if (ex.packName) {
        const n = env.packs.has(ex.packName) ? (env.packs.get(ex.packName) as CppType[]).length
          : env.valuePacks.has(ex.packName) ? (env.valuePacks.get(ex.packName) as number[]).length : 0;
        return litNum(n, a);
      }
      return {
        kind: "sizeof", isType: ex.isType, type: ex.type ? substTypeNode(ex.type, env) : null,
        expr: ex.expr ? substExpr(ex.expr, env) : null, packName: "", isAlignof: ex.isAlignof, file: f, line: l,
      };
    }
    case "typeid":
      return {
        kind: "typeid", isType: ex.isType, type: ex.type ? substTypeNode(ex.type, env) : null,
        expr: ex.expr ? substExpr(ex.expr, env) : null, file: f, line: l,
      };
    case "lambda": {
      const e2 = copySubstEnv(env);
      const params = substParams(ex.params, e2);
      return {
        kind: "lambda", captures: ex.captures.map(c => ({ mode: c.mode, name: c.name, file: c.file, line: c.line })),
        defCapture: ex.defCapture, params, ret: ex.ret ? substTypeNode(ex.ret, e2) : null,
        body: ex.body.map(s => substStmt(s, e2)), mutable: ex.mutable, file: f, line: l,
      };
    }
    case "initlist":
      return { kind: "initlist", items: substCallArgs(ex.items, env), file: f, line: l };
    case "stmtexpr":
      return { kind: "stmtexpr", stmts: ex.stmts.map(s => substStmt(s, env)), file: f, line: l };
    case "noexcept":
      return { kind: "noexcept", expr: ex.expr ? substExpr(ex.expr, env) : null, file: f, line: l };
  }
}

export function substParams(params: Param[], env: SubstEnv): Param[] {
  const out: Param[] = [];
  for (const p of params) {
    if (p.isPack && p.type.parts.length === 1 && !p.type.parts[0].a.length && env.packs.has(p.type.parts[0].n)) {
      const items = env.packs.get(p.type.parts[0].n) as CppType[];
      const names: string[] = [];
      items.forEach((t, i) => {
        const nm = (p.name || "pack") + "_" + i;
        names.push(nm);
        const tn = typeToNode(t);
        tn.ptr += p.type.ptr;
        if (p.type.ref) tn.ref = p.type.ref;
        out.push({ name: nm, type: tn, def: null, variadic: false, isPack: false, file: p.file, line: p.line });
      });
      if (p.name) env.packNames.set(p.name, names);
      continue;
    }
    out.push({
      name: p.name, type: substTypeNode(p.type, env),
      def: p.def ? substExpr(p.def, env) : null, variadic: p.variadic, isPack: false, file: p.file, line: p.line,
    });
  }
  return out;
}

export function substStmt(s: Stmt, env: SubstEnv): Stmt {
  const f = s.file;
  const l = s.line;
  switch (s.kind) {
    case "compound": return { kind: "compound", stmts: s.stmts.map(x => substStmt(x, env)), file: f, line: l };
    case "expr": return { kind: "expr", expr: substExpr(s.expr, env), file: f, line: l };
    case "decl": return { kind: "decl", decl: substDecl(s.decl, env), file: f, line: l };
    case "if":
      return {
        kind: "if", cond: substCond(s.cond, env), then: substStmt(s.then, env),
        els: s.els ? substStmt(s.els, env) : null, file: f, line: l,
      };
    case "switch":
      return { kind: "switch", cond: substCond(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
    case "case":
      return { kind: "case", value: s.value ? substExpr(s.value, env) : null, stmt: substStmt(s.stmt, env), file: f, line: l };
    case "while":
      return { kind: "while", cond: substCond(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
    case "do": return { kind: "do", cond: substExpr(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
    case "for":
      return {
        kind: "for", init: s.init ? substStmt(s.init, env) : null,
        cond: s.cond ? substExpr(s.cond, env) : null,
        step: s.step ? substExpr(s.step, env) : null, body: substStmt(s.body, env), file: f, line: l,
      };
    case "rangefor":
      return {
        kind: "rangefor", vdecl: substDecl(s.vdecl, env) as VarDecl,
        range: substExpr(s.range, env), body: substStmt(s.body, env), file: f, line: l,
      };
    case "break": return { kind: "break", file: f, line: l };
    case "continue": return { kind: "continue", file: f, line: l };
    case "goto": return { kind: "goto", label: s.label, file: f, line: l };
    case "label": return { kind: "label", label: s.label, stmt: substStmt(s.stmt, env), file: f, line: l };
    case "return": return { kind: "return", expr: s.expr ? substExpr(s.expr, env) : null, file: f, line: l };
    case "try":
      return {
        kind: "try", body: substStmt(s.body, env),
        handlers: s.handlers.map(h => ({
          vdecl: h.vdecl ? substDecl(h.vdecl, env) as VarDecl : null,
          ellipsis: h.ellipsis, body: substStmt(h.body, env), file: h.file, line: h.line,
        })), file: f, line: l,
      };
    case "throw": return { kind: "throw", expr: s.expr ? substExpr(s.expr, env) : null, file: f, line: l };
    case "null": return { kind: "null", file: f, line: l };
  }
}

function substCond(c: Expr | VarDecl, env: SubstEnv): Expr | VarDecl {
  if ((c as VarDecl).kind === "var") return substDecl(c as VarDecl, env) as VarDecl;
  return substExpr(c as Expr, env);
}

function substCtorInit(c: CtorInit, env: SubstEnv): CtorInit {
  return { name: c.name.map(s => substQSeg(s, env)), args: substCallArgs(c.args, env), file: c.file, line: c.line };
}

export function substDecl(d: Decl, env: SubstEnv): Decl {
  const f = d.file;
  const l = d.line;
  switch (d.kind) {
    case "var":
      return {
        kind: "var", name: d.name.map(s => substQSeg(s, env)), type: substTypeNode(d.type, env),
        init: d.init ? substExpr(d.init, env) : null,
        directInit: d.directInit ? substCallArgs(d.directInit, env) : null,
        flags: d.flags.slice(), bitfield: d.bitfield ? substExpr(d.bitfield, env) : null,
        isParam: d.isParam, file: f, line: l,
      };
    case "func": {
      const e2 = copySubstEnv(env);
      return {
        kind: "func", name: d.name.map(s => substQSeg(s, env)), ret: d.ret ? substTypeNode(d.ret, e2) : null,
        params: substParams(d.params, e2),
        body: d.body ? d.body.map(s => substStmt(s, e2)) : null,
        flags: d.flags.slice(), op: d.op, ctorInit: d.ctorInit.map(c => substCtorInit(c, e2)),
        isCtor: d.isCtor, isDtor: d.isDtor, isConv: d.isConv,
        isDefault: d.isDefault, isDelete: d.isDelete,
        trailing: d.trailing ? substTypeNode(d.trailing, e2) : null, file: f, line: l,
      };
    }
    case "class":
      return {
        kind: "class", name: d.name, cls: d.cls,
        bases: d.bases.map(b => ({ name: b.name.map(s => substQSeg(s, env)), access: b.access, isVirtual: b.isVirtual, file: b.file, line: b.line })),
        members: d.members.map(m => substDecl(m, env)),
        isDeclOnly: d.isDeclOnly, specArgs: substTArgs(d.specArgs, env),
        isPartialSpec: d.isPartialSpec, file: f, line: l,
      };
    case "enum":
      return {
        kind: "enum", name: d.name, scoped: d.scoped,
        base: d.base ? substTypeNode(d.base, env) : null,
        items: d.items.map(it => ({ name: it.name, value: it.value ? substExpr(it.value, env) : null, file: it.file, line: it.line })),
        isDeclOnly: d.isDeclOnly, file: f, line: l,
      };
    case "ns":
      return {
        kind: "ns", name: d.name, aliasOf: d.aliasOf.map(s => substQSeg(s, env)),
        decls: d.decls ? d.decls.map(x => substDecl(x, env)) : null, isInline: d.isInline, file: f, line: l,
      };
    case "using":
      return { kind: "using", name: d.name.map(s => substQSeg(s, env)), isNs: d.isNs, file: f, line: l };
    case "typedef":
      return { kind: "typedef", name: d.name, type: substTypeNode(d.type, env), file: f, line: l };
    case "linkage":
      return { kind: "linkage", lang: d.lang, decls: d.decls.map(x => substDecl(x, env)), file: f, line: l };
    case "static_assert":
      return { kind: "static_assert", cond: substExpr(d.cond, env), msg: d.msg, file: f, line: l };
    case "access": return { kind: "access", access: d.access, file: f, line: l };
    case "friend":
      return { kind: "friend", decl: d.decl ? substDecl(d.decl, env) : null, file: f, line: l };
    case "empty": return { kind: "empty", file: f, line: l };
    case "template": {
      const e2 = copySubstEnv(env);
      for (const tp of d.tparams) {
        e2.types.delete(tp.name);
        e2.packs.delete(tp.name);
        e2.values.delete(tp.name);
        e2.valuePacks.delete(tp.name);
        e2.packNames.delete(tp.name);
      }
      return {
        kind: "template", tparams: d.tparams,
        decl: d.decl ? substDecl(d.decl, e2) : null,
        isSpec: d.isSpec, specArgs: substTArgs(d.specArgs, e2), isExplicit: d.isExplicit, file: f, line: l,
      };
    }
  }
}

}
