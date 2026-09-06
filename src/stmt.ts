namespace CTJ {

const DECL_START = new Set([
  "static", "extern", "inline", "virtual", "explicit", "friend", "constexpr",
  "mutable", "register", "thread_local", "const", "volatile", "signed",
  "unsigned", "short", "long", "void", "bool", "char", "char16_t", "char32_t",
  "wchar_t", "int", "float", "double", "auto", "typename", "class", "struct",
  "union", "enum", "typedef", "template", "using", "namespace", "static_assert",
  "__extension__", "__typeof__", "__typeof", "decltype",
]);

export function parseStmt(p: Parser): Stmt {
  p.skipGnu();
  const t = p.peek();
  if (t.t === "{") return parseCompound(p);
  if (t.t === ";") {
    p.pos++;
    return { kind: "null", ...at(t) };
  }
  if (t.t !== "ident") {
    const e = parseExpr(p, 0);
    p.expect(";");
    return { kind: "expr", expr: e, ...at(t) };
  }
  switch (t.v) {
    case "if": return parseIf(p);
    case "switch": return parseSwitch(p);
    case "while": return parseWhile(p);
    case "do": return parseDo(p);
    case "for": return parseFor(p);
    case "try": {
      p.pos++;
      const body = parseStmt(p);
      const handlers = p.parseCatchList();
      return { kind: "try", body, handlers, ...at(t) };
    }
    case "return": {
      p.pos++;
      let expr: Expr | null = null;
      if (p.peek().t !== ";") expr = parseExpr(p, 0);
      p.expect(";");
      return { kind: "return", expr, ...at(t) };
    }
    case "break": p.pos++; p.expect(";"); return { kind: "break", ...at(t) };
    case "continue": p.pos++; p.expect(";"); return { kind: "continue", ...at(t) };
    case "goto": {
      p.pos++;
      const label = p.expect("ident").v;
      p.expect(";");
      return { kind: "goto", label, ...at(t) };
    }
    case "case": {
      p.pos++;
      const value = parseExpr(p, 3);
      p.expect(":");
      const stmt = parseStmt(p);
      return { kind: "case", value, stmt, ...at(t) };
    }
    case "default": {
      p.pos++;
      p.expect(":");
      const stmt = parseStmt(p);
      return { kind: "case", value: null, stmt, ...at(t) };
    }
    case "throw": {
      p.pos++;
      let expr: Expr | null = null;
      if (p.peek().t !== ";") expr = parseExpr(p, 2);
      p.expect(";");
      return { kind: "throw", expr, ...at(t) };
    }
    case "asm":
      p.pos++;
      if (p.isIdent("volatile") || p.isIdent("__volatile__")) p.pos++;
      if (p.peek().t === "(") p.skipBalanced("(", ")");
      p.expect(";");
      return { kind: "null", ...at(t) };
    default: break;
  }
  if (t.t === "ident" && p.peek(1).t === ":" && t.v !== "operator") {
    p.pos += 2;
    const stmt = parseStmt(p);
    return { kind: "label", label: t.v, stmt, ...at(t) };
  }
  if (isDeclStart(p)) {
    const ds = p.parseDecls(false);
    const d = ds[0];
    if (!d || d.kind === "empty") return { kind: "null", ...at(t) };
    if (ds.length > 1) {
      return { kind: "compound", stmts: ds.map(x => ({ kind: "decl", decl: x, ...at(t) }) as Stmt), ...at(t) };
    }
    return { kind: "decl", decl: d, ...at(t) };
  }
  const e = parseExpr(p, 0);
  p.expect(";");
  return { kind: "expr", expr: e, ...at(t) };
}

// Index just past a balanced <...> starting at j, or -1 when it is not one.
function endOfTArgs(p: Parser, j: number): number {
  const from = j;
  let depth = 0;
  let q = j;
  for (;;) {
    const u = p.peek(q);
    if (u.t === "eof") return -1;
    if (u.t === "<") depth++;
    if (u.t === ">") depth--;
    if (u.t === ">>") depth -= 2;
    if (depth <= 0) return q + 1;
    if (u.t === ";" || u.t === "{") return -1;
    q++;
    if (q - from > 200) return -1;
  }
}

function isDeclStart(p: Parser): boolean {
  const t = p.peek();
  if (t.t !== "ident") return false;
  if (DECL_START.has(t.v)) return true;
  if (t.v === "::") return true;
  let k = 0;
  if (p.peek(k).t === "::") k++;
  if (p.peek(k).t !== "ident") return false;
  // A qualified name may start with a namespace, which is not a type name.
  if (!p.isTypeName(p.peek(k).v) && p.peek(k + 1).t !== "::") return false;
  let j = k;
  while (p.peek(j).t === "ident" && p.peek(j + 1).t === "::") j += 2;
  if (p.peek(j).t !== "ident") return false;
  j++;
  if (p.peek(j).t === "<") {
    const e = endOfTArgs(p, j);
    if (e < 0) return false;
    j = e;
  }
  while (p.peek(j).t === "::") {
    j++;
    if (p.peek(j).t !== "ident") return false;
    j++;
  }
  if (p.peek(j).t === "ident" && p.peek(j).v === "operator") return true;
  const term = p.peek(j).t;
  if (term === "(") return false;
  if (term === "::") return true;
  return term === "*" || term === "&" || term === "&&" ||
    term === "ident" || term === "[" || term === "...";
}

export function parseCompound(p: Parser): Compound {
  const t = p.expect("{");
  p.pushScope();
  const stmts: Stmt[] = [];
  try {
    while (!p.eat("}")) {
      if (p.atEnd()) fail("unterminated block", t.file, t.line, t.col);
      try {
        stmts.push(parseStmt(p));
      } catch (e) {
        if (e instanceof CtxError) {
          p.warn(`parse error: ${e.message}, skipping statement`, p.peek());
          recoverStmt(p);
        } else throw e;
      }
    }
  } finally {
    p.popScope();
  }
  return { kind: "compound", stmts, ...at(t) };
}

function recoverStmt(p: Parser): void {
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

function parseCondDecl(p: Parser): Expr | VarDecl {
  const m = p.mark();
  try {
    p.skipGnu();
    const t = p.peek();
    if (t.t === "::" || isDeclStart(p)) {
      const spec = p.parseDeclSpec();
      if (spec.type) {
        const d = p.parseDeclarator();
        if (d.name.length && !d.isFunc) {
          const v: VarDecl = {
            kind: "var", name: d.name, type: p.applyDeclarator(spec.type, d, t),
            init: null, directInit: null, flags: [], bitfield: null, isParam: false, ...at(t),
          };
          if (p.eat("=")) v.init = parseExpr(p, 2);
          else if (p.peek().t === "(") { p.pos++; v.directInit = p.parseExprList(")"); }
          else if (p.peek().t === "{") v.init = p.parseInitList();
          return v;
        }
      }
    }
  } catch { /* fall through */ }
  p.reset(m);
  return parseExpr(p, 0);
}

function parseIf(p: Parser): IfStmt {
  const t = p.expect("ident");
  p.expect("(");
  const cond = parseCondDecl(p);
  p.expect(")");
  const then = parseStmt(p);
  let els: Stmt | null = null;
  if (p.isIdent("else")) {
    p.pos++;
    els = parseStmt(p);
  }
  return { kind: "if", cond, then, els, ...at(t) };
}

function parseSwitch(p: Parser): SwitchStmt {
  const t = p.expect("ident");
  p.expect("(");
  const cond = parseCondDecl(p);
  p.expect(")");
  const body = parseStmt(p);
  return { kind: "switch", cond, body, ...at(t) };
}

function parseWhile(p: Parser): WhileStmt {
  const t = p.expect("ident");
  p.expect("(");
  const cond = parseCondDecl(p);
  p.expect(")");
  const body = parseStmt(p);
  return { kind: "while", cond, body, ...at(t) };
}

function parseDo(p: Parser): DoStmt {
  const t = p.expect("ident");
  const body = parseStmt(p);
  p.expect("ident");
  p.expect("(");
  const cond = parseExpr(p, 0);
  p.expect(")");
  p.expect(";");
  return { kind: "do", cond, body, ...at(t) };
}

function parseFor(p: Parser): ForStmt | RangeFor {
  const t = p.expect("ident");
  p.expect("(");
  if (isRangeFor(p)) {
    const spec = p.parseDeclSpec();
    const d = p.parseDeclarator();
    if (!spec.type || !d.name.length || d.isFunc) fail("bad range-for declaration", t.file, t.line, t.col);
    const vdecl: VarDecl = {
      kind: "var", name: d.name, type: p.applyDeclarator(spec.type, d, t),
      init: null, directInit: null, flags: [], bitfield: null, isParam: true, ...at(t),
    };
    p.expect(":");
    const range = parseExpr(p, 0);
    p.expect(")");
    const body = parseStmt(p);
    return { kind: "rangefor", vdecl, range, body, ...at(t) };
  }
  let init: Stmt | null = null;
  p.skipGnu();
  if (p.peek().t === ";") p.pos++;
  else if (isDeclStart(p)) init = parseStmt(p);
  else {
    const e = parseExpr(p, 0);
    p.expect(";");
    init = { kind: "expr", expr: e, ...at(t) };
  }
  let cond: Expr | null = null;
  if (p.peek().t !== ";") cond = parseExpr(p, 0);
  p.expect(";");
  let step: Expr | null = null;
  if (p.peek().t !== ")") step = parseExpr(p, 0);
  p.expect(")");
  const body = parseStmt(p);
  return { kind: "for", init, cond, step, body, ...at(t) };
}

function isRangeFor(p: Parser): boolean {
  let depth = 0;
  let q = 0;
  for (;;) {
    const u = p.peek(q);
    if (u.t === "eof") return false;
    if (u.t === "(" || u.t === "[" || u.t === "{") depth++;
    if (u.t === ")" || u.t === "]" || u.t === "}") {
      if (depth === 0) return false;
      depth--;
    }
    if (depth === 0 && u.t === ";") return false;
    if (depth === 0 && u.t === ":") return true;
    if (depth === 0 && u.t === "::") { q += 2; continue; }
    q++;
    if (q > 400) return false;
  }
}

}
