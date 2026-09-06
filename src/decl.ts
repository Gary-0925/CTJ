namespace CTJ {

export interface ClassHead {
  kind: string;
  name: string;
  bases: BaseSpec[];
  specArgs: TypeNode[];
  scoped: boolean;
  enumBase: TypeNode | null;
  isPartialSpec: boolean;
}

export function refType(name: string, a: At): TypeNode {
  return typeNode([qseg(name)], a);
}

export function parseVarSuffix(p: Parser, v: VarDecl, inClass: boolean): void {
  if (p.eat("=")) {
    v.init = p.peek().t === "{" ? p.parseInitList() : parseExpr(p, 2);
  } else if (p.peek().t === "{") {
    v.init = p.parseInitList();
  } else if (p.peek().t === "(") {
    p.pos++;
    v.directInit = p.parseExprList(")");
  }
  if (inClass && p.eat(":")) v.bitfield = parseExpr(p, 3);
}

export function parseClassHead(p: Parser): { head: ClassHead; t: Token } {
  const t = p.next();
  p.skipGnu();
  const isEnum = t.v === "enum";
  let scoped = false;
  if (isEnum && (p.isIdent("class") || p.isIdent("struct"))) {
    scoped = true;
    p.pos++;
    p.skipGnu();
  }
  let name = "";
  if (p.peek().t === "ident") {
    name = p.next().v;
    p.skipGnu();
  }
  if (!isEnum && p.isIdent("final") && (p.peek(1).t === ":" || p.peek(1).t === "{")) p.pos++;
  let specArgs: TypeNode[] = [];
  let isPartialSpec = false;
  if (name && p.peek().t === "<") {
    const m = p.mark();
    try {
      specArgs = p.parseTArgList();
    } catch {
      // Only a partial specialization can put a pattern here instead of
      // arguments; skip it so that the rest of the declaration still parses.
      p.reset(m);
      p.skipBalancedAngles();
      isPartialSpec = true;
    }
    p.skipGnu();
  }
  const bases: BaseSpec[] = [];
  let enumBase: TypeNode | null = null;
  if (p.peek().t === ":") {
    p.pos++;
    if (isEnum) {
      enumBase = p.parseAbstractType();
    } else {
      do {
        p.skipGnu();
        let access = t.v === "class" ? "private" : "public";
        let isVirtual = false;
        for (;;) {
          if (p.isIdent("virtual")) { isVirtual = true; p.pos++; continue; }
          if (p.peek().t === "ident" && ACCESS.has(p.peek().v)) { access = p.next().v; continue; }
          break;
        }
        const nm = p.parseQualifiedName(false);
        bases.push({ name: nm, access, isVirtual, ...at(t) });
      } while (p.eat(","));
    }
  }
  return { head: { kind: t.v, name, bases, specArgs, scoped, enumBase, isPartialSpec }, t };
}

export function parseClassOrEnumSpec(p: Parser): { decl: ClassDecl | EnumDecl | null; type: TypeNode } {
  const { head, t } = parseClassHead(p);
  if (p.peek().t !== "{") {
    if (head.name) p.registerType(head.name);
    const type = head.name ? refType(head.name, at(t)) : typeNode([], at(t));
    return { decl: null, type };
  }
  if (head.kind === "enum") {
    const ed = parseEnumBody(p, head, at(t));
    if (ed.name) p.registerType(last(ed.name.split("::")));
    return { decl: ed, type: refType(ed.name, at(t)) };
  }
  const cls = parseClassBody(p, head, at(t));
  if (cls.name) p.registerType(last(cls.name.split("::")));
  return { decl: cls, type: refType(cls.name, at(t)) };
}

export function parseClassOrEnumDecl(p: Parser, inClass: boolean): Decl[] {
  const a = at(p.peek());
  const { head } = parseClassHead(p);
  const out: Decl[] = [];
  let vtype: TypeNode;
  if (p.peek().t === "{") {
    if (head.kind === "enum") {
      const ed = parseEnumBody(p, head, a);
      out.push(ed);
      vtype = refType(ed.name, a);
      if (ed.name) p.registerType(last(ed.name.split("::")));
    } else {
      const cls = parseClassBody(p, head, a);
      out.push(cls);
      vtype = refType(cls.name, a);
      if (cls.name) p.registerType(last(cls.name.split("::")));
    }
  } else {
    if (head.name) p.registerType(head.name);
    vtype = head.name ? refType(head.name, a) : typeNode([], a);
    if (head.name) {
      if (head.kind === "enum") {
        out.push({
          kind: "enum", name: head.name, scoped: head.scoped,
          base: head.enumBase, items: [], isDeclOnly: true, ...a,
        });
      } else {
        out.push({
          kind: "class", name: head.name, cls: head.kind, bases: head.bases,
          members: [], isDeclOnly: true, specArgs: head.specArgs,
          isPartialSpec: head.isPartialSpec, ...a,
        });
      }
    }
  }
  p.skipGnu();
  if (p.peek().t === ";") {
    p.pos++;
    return out;
  }
  for (;;) {
    const d = p.parseDeclarator();
    const v: VarDecl = {
      kind: "var", name: d.name, type: p.applyDeclarator(vtype, d, p.peek()),
      init: null, directInit: null, flags: [], bitfield: null, isParam: false, ...a,
    };
    parseVarSuffix(p, v, inClass);
    out.push(v);
    if (p.eat(",")) continue;
    p.expect(";");
    break;
  }
  return out;
}

export function parseClassBody(p: Parser, head: ClassHead, a: At): ClassDecl {
  const name = head.name || p.anonName("class");
  const cls: ClassDecl = {
    kind: "class", name, cls: head.kind, bases: head.bases,
    members: [], isDeclOnly: false, specArgs: head.specArgs,
    isPartialSpec: head.isPartialSpec, ...a,
  };
  if (head.name) p.registerType(head.name);
  p.inClass.push(cls);
  p.pushScope();
  p.expect("{");
  while (!p.eat("}")) {
    if (p.atEnd()) {
      // Keep the members collected so far: losing the rest of the translation
      // unit over one unbalanced brace hides every error that follows.
      p.warn("unterminated class body, keeping the members parsed so far", p.peek());
      break;
    }
    try {
      for (const d of p.parseDecls(true)) {
        cls.members.push(d);
        // A typedef is visible to the members that follow it.
        if (d.kind === "typedef" && d.name) p.registerType(d.name);
      }
    } catch (e) {
      if (e instanceof CtxError) {
        p.warn(`parse error in class ${name}: ${e.message}, skipping member`, p.peek());
        recoverMember(p);
      } else throw e;
    }
  }
  p.flushPending();
  if (head.name) p.recordClassTypes(head.name);
  p.popScope();
  p.inClass.pop();
  return cls;
}

function recoverMember(p: Parser): void {
  let depth = 0;
  for (;;) {
    const t = p.peek();
    if (t.t === "eof") return;
    if (t.t === "{") { depth++; p.pos++; continue; }
    if (t.t === "}") {
      if (depth === 0) return;
      depth--;
      p.pos++;
      continue;
    }
    if (t.t === ";" && depth === 0) { p.pos++; return; }
    p.pos++;
  }
}

export function parseEnumBody(p: Parser, head: ClassHead, a: At): EnumDecl {
  const name = head.name || p.anonName("enum");
  const ed: EnumDecl = {
    kind: "enum", name, scoped: head.scoped, base: head.enumBase,
    items: [], isDeclOnly: false, ...a,
  };
  if (head.name) p.registerType(head.name);
  p.expect("{");
  while (!p.eat("}")) {
    if (p.atEnd()) {
      const t = p.peek();
      fail("unterminated enum body", t.file, t.line, t.col);
    }
    p.skipGnu();
    if (p.peek().t === "}") { p.pos++; break; }
    const it = p.expect("ident");
    let value: Expr | null = null;
    if (p.eat("=")) value = parseExpr(p, 2);
    ed.items.push({ name: it.v, value, ...at(it) });
    if (p.eat(",")) continue;
  }
  return ed;
}

export function parseNamespace(p: Parser, isInline: boolean): NamespaceDecl {
  const t = p.expect("ident");
  p.skipGnu();
  if (p.peek().t === "{") {
    const nm = p.anonName("ns");
    p.pos++;
    const decls = parseNsBody(p);
    return { kind: "ns", name: nm, aliasOf: [], decls, isInline, ...at(t) };
  }
  const first = p.expect("ident").v;
  p.registerNamespace(first);
  p.skipGnu();
  if (p.eat("=")) {
    const target = p.parseQualifiedName(false);
    p.expect(";");
    return { kind: "ns", name: first, aliasOf: target, decls: null, isInline, ...at(t) };
  }
  const parts = [first];
  while (p.eat("::")) {
    const nm = p.expect("ident").v;
    p.registerNamespace(nm);
    parts.push(nm);
  }
  p.expect("{");
  let inner: Decl = {
    kind: "ns", name: last(parts), aliasOf: [], decls: parseNsBody(p), isInline, ...at(t),
  };
  for (let i = parts.length - 2; i >= 0; i--) {
    inner = { kind: "ns", name: parts[i], aliasOf: [], decls: [inner], isInline, ...at(t) };
  }
  return inner as NamespaceDecl;
}

function parseNsBody(p: Parser): Decl[] {
  const out: Decl[] = [];
  while (!p.eat("}")) {
    if (p.atEnd()) {
      p.warn("unterminated namespace body, keeping the declarations parsed so far", p.peek());
      return out;
    }
    try {
      for (const d of p.parseDecls(false)) out.push(d);
    } catch (e) {
      if (e instanceof CtxError) {
        p.warn(`parse error: ${e.message}, skipping`, p.peek());
        p.recover();
      } else throw e;
    }
  }
  return out;
}

export function parseUsing(p: Parser): Decl[] {
  const t = p.expect("ident");
  if (p.isIdent("namespace")) {
    p.pos++;
    const nm = p.parseQualifiedName(false);
    p.expect(";");
    return [{ kind: "using", name: nm, isNs: true, ...at(t) }];
  }
  if (p.isIdent("typename")) p.pos++;
  const m = p.mark();
  if (p.peek().t === "ident" && p.peek(1).t === "=") {
    const nm = p.next().v;
    p.pos++;
    const type = p.parseAbstractType();
    p.expect(";");
    p.registerType(nm);
    return [{ kind: "typedef", name: nm, type, ...at(t) }];
  }
  p.reset(m);
  const nm = p.parseQualifiedName(false);
  p.expect(";");
  return [{ kind: "using", name: nm, isNs: false, ...at(t) }];
}

export function parseTypedef(p: Parser): Decl[] {
  const t = p.expect("ident");
  const spec = p.parseDeclSpec();
  const out: Decl[] = [];
  if (spec.defined) out.push(spec.defined);
  if (p.peek().t === ";") {
    p.pos++;
    return out;
  }
  for (;;) {
    const d = p.parseDeclarator();
    const nm = d.name.length ? last(d.name).n : "";
    const td: TypedefDecl = { kind: "typedef", name: nm, type: p.applyDeclarator(spec.type, d, t), ...at(t) };
    if (nm) p.registerType(nm);
    out.push(td);
    if (p.eat(",")) continue;
    p.expect(";");
    break;
  }
  return out;
}

export function parseExtern(p: Parser): Decl[] {
  const t = p.expect("ident");
  const langTok = p.expect("string");
  const lang = langTok.v.slice(1, -1);
  p.skipGnu();
  if (p.eat("{")) {
    const decls: Decl[] = [];
    while (!p.eat("}")) {
      if (p.atEnd()) fail("unterminated extern block", t.file, t.line, t.col);
      for (const d of p.parseDecls(false)) decls.push(d);
    }
    return [{ kind: "linkage", lang, decls, ...at(t) }];
  }
  const decls = p.parseDecls(false);
  return [{ kind: "linkage", lang, decls, ...at(t) }];
}

export function parseStaticAssert(p: Parser): StaticAssertDecl {
  const t = p.expect("ident");
  p.expect("(");
  const cond = parseExpr(p, 2);
  let msg = "";
  if (p.eat(",")) {
    const s = p.expect("string");
    msg = s.v;
  }
  p.expect(")");
  p.expect(";");
  return { kind: "static_assert", cond, msg, ...at(t) };
}

export function parseTemplate(p: Parser, inClass: boolean): TemplateDecl {
  const t = p.expect("ident");
  p.skipGnu();
  if (p.peek().t !== "<") {
    const ds = p.parseDecls(inClass);
    return { kind: "template", tparams: [], decl: ds[0] || null, isSpec: false, specArgs: [], isExplicit: true, ...at(t) };
  }
  p.pos++;
  p.pushScope();
  let tparams: TParam[];
  let ds: Decl[];
  try {
    tparams = parseTParams(p);
    ds = p.parseDecls(inClass);
  } finally {
    p.popScope();
  }
  const d = ds[0] || null;
  let specArgs: TypeNode[] = [];
  if (d && d.kind === "func" && d.name.length && last(d.name).a.length) specArgs = last(d.name).a;
  if (d && d.kind === "class") specArgs = d.specArgs;
  const isPartial = !!d && d.kind === "class" && d.isPartialSpec;
  let td: TemplateDecl;
  if (tparams.length && (specArgs.length || isPartial)) {
    p.warn("partial template specialization is not supported, skipped", t);
    td = { kind: "template", tparams: [], decl: null, isSpec: false, specArgs: [], isExplicit: false, ...at(t) };
  } else if (!tparams.length && specArgs.length) {
    td = { kind: "template", tparams: [], decl: d, isSpec: true, specArgs, isExplicit: false, ...at(t) };
  } else {
    td = { kind: "template", tparams, decl: d, isSpec: false, specArgs: [], isExplicit: false, ...at(t) };
  }
  // The name introduced by the template belongs to the enclosing scope.
  if (d && (d.kind === "class" || d.kind === "enum") && d.name) {
    p.registerType(last(d.name.split("::")));
  } else if (d && d.kind === "typedef" && d.name) {
    p.registerType(d.name);
  }
  return td;
}

export function parseTParams(p: Parser): TParam[] {
  const out: TParam[] = [];
  p.skipGnu();
  if (p.eatGt()) return out;
  for (;;) {
    p.skipGnu();
    const t = p.peek();
    if (p.isIdent("template")) {
      p.pos++;
      p.skipGnu();
      p.expect("<");
      let depth = 1;
      while (depth > 0) {
        const u = p.next();
        if (u.t === "eof") fail("unterminated template parameter", t.file, t.line, t.col);
        if (u.t === "<") depth++;
        if (u.t === ">") depth--;
        if (u.t === ">>") depth -= 2;
      }
      p.skipGnu();
      if (p.isIdent("class") || p.isIdent("typename")) p.pos++;
      let nm = "";
      if (p.peek().t === "ident") nm = p.next().v;
      out.push({ kind: "template", name: nm || p.anonName("tt"), type: null, def: null, isPack: false, ...at(t) });
    } else if (p.isIdent("class") || p.isIdent("typename")) {
      p.pos++;
      let isPack = false;
      if (p.eat("...")) isPack = true;
      let nm = "";
      if (p.peek().t === "ident") {
        nm = p.next().v;
        p.registerType(nm);
      }
      if (p.eat("...")) isPack = true;
      let def: TypeNode | Expr | null = null;
      if (p.eat("=")) def = p.parseAbstractType();
      out.push({ kind: "type", name: nm || p.anonName("tp"), type: null, def, isPack, ...at(t) });
    } else {
      const spec = p.parseDeclSpec();
      // The ellipsis may stand before or after the name: "bool... B", "int N...".
      let isPack = false;
      if (p.eat("...")) isPack = true;
      let nm = "";
      if (p.peek().t === "ident") nm = p.next().v;
      if (p.eat("...")) isPack = true;
      let def: TypeNode | Expr | null = null;
      // Stop below the relational precedence so the closing '>' of the
      // parameter list is not taken for a comparison operator.
      if (p.eat("=")) def = parseExpr(p, 10);
      out.push({ kind: "nontype", name: nm || p.anonName("np"), type: spec.type, def, isPack, ...at(t) });
    }
    p.skipGnu();
    if (p.eat(",")) continue;
    if (!p.eatGt()) fail("expected '>' in template parameter list", t.file, t.line, t.col);
    break;
  }
  return out;
}

}
