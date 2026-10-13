// Expression parsing by operator precedence, with casts, new/delete, sizeof and
// function-style casts.
namespace CTJ {
  function precOf(t: Tok): number {
    switch (t) {
      case ",":
        return 1;
      case "=":
      case "+=":
      case "-=":
      case "*=":
      case "/=":
      case "%=":
      case "^=":
      case "&=":
      case "|=":
      case "<<=":
      case ">>=":
        return 2;
      case "||":
        return 4;
      case "&&":
        return 5;
      case "|":
        return 6;
      case "^":
        return 7;
      case "&":
        return 8;
      case "==":
      case "!=":
        return 9;
      case "<":
      case ">":
      case "<=":
      case ">=":
      case "<=>":
        return 10;
      case "<<":
      case ">>":
        return 11;
      case "+":
      case "-":
        return 12;
      case "*":
      case "/":
      case "%":
        return 13;
      default:
        return 0;
    }
  }

  function isRightAssoc(t: Tok): boolean {
    return precOf(t) === 2;
  }

  export function parseExpr(p: Parser, minPrec: number): Expr {
    let e = parsePostfix(p, parseUnary(p));
    for (;;) {
      const t = p.peek();
      if (t.t === "?" && 3 > minPrec) {
        p.pos++;
        const a = parseExpr(p, 0);
        p.expect(":");
        const b = parseExpr(p, 2);
        e = { kind: "cond", c: e, a, b, ...at(t) };
        continue;
      }
      const pr = precOf(t.t);
      if (pr === 0 || pr <= minPrec) break;
      p.pos++;
      const rhs = parseExpr(p, isRightAssoc(t.t) ? pr - 1 : pr);
      if (pr === 2) e = { kind: "assign", op: t.t, l: e, r: rhs, ...at(t) };
      else e = { kind: "binary", op: t.t, l: e, r: rhs, ...at(t) };
    }
    return e;
  }

  export function parsePostfix(p: Parser, e: Expr): Expr {
    for (;;) {
      const t = p.peek();
      if (t.t === "(") {
        p.pos++;
        // "va_arg(ap, T)" names a type as its second argument, so it is read here
        // rather than as a list of expressions.
        if (e.kind === "id" && last(e.parts).n === "__builtin_va_arg") {
          const ap = parseExpr(p, 2);
          p.expect(",");
          const type = p.parseAbstractType();
          p.expect(")");
          e = { kind: "cast", ckind: "va_arg", type, fn: null, arg: ap, ...at(t) };
          continue;
        }
        const args = p.parseExprList(")");
        e = maybeFunctional(p, e, args, t);
        continue;
      }
      if (t.t === "[") {
        p.pos++;
        const idx = parseExpr(p, 0);
        p.expect("]");
        e = { kind: "index", arr: e, idx, ...at(t) };
        continue;
      }
      if (t.t === "." || t.t === "->") {
        p.pos++;
        if (p.isIdent("template")) p.pos++;
        // "p->~T()" is a pseudo-destructor call on a dependent type.
        if (p.peek().t === "~") {
          p.pos++;
          const f = p.expect("ident");
          e = { kind: "member", obj: e, field: "~" + f.v, arrow: t.t === "->", targs: [], qual: [], ...at(t) };
          continue;
        }
        let f = p.expect("ident");
        const qual: QSeg[] = [];
        while (p.peek().t === "::") {
          p.pos++;
          if (p.isIdent("template")) p.pos++;
          qual.push(qseg(f.v));
          f = p.expect("ident");
        }
        let targs: TypeNode[] = [];
        if (p.peek().t === "<") {
          const m = p.mark();
          try {
            targs = p.parseTArgList();
            if (p.peek().t !== "(") p.reset(m);
          } catch {
            p.reset(m);
            targs = [];
          }
        }
        e = { kind: "member", obj: e, field: f.v, arrow: t.t === "->", targs, qual, ...at(t) };
        continue;
      }
      if (t.t === "++" || t.t === "--") {
        p.pos++;
        e = { kind: "unary", op: t.t, arg: e, postfix: true, ...at(t) };
        continue;
      }
      if (t.t === "...") {
        p.pos++;
        e = { kind: "unary", op: "...", arg: e, postfix: true, ...at(t) };
        continue;
      }
      if (t.t === "{" && e.kind === "id") {
        const init = p.parseInitList();
        e = {
          kind: "cast",
          ckind: "functional",
          type: { kind: "type", parts: e.parts, global: e.global, ptr: 0, ref: "", cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null, ...at(t) },
          fn: null,
          arg: init,
          ...at(t),
        };
        continue;
      }
      break;
    }
    return e;
  }

  // Joins two string literal tokens, each spelled as an optional prefix, a quote,
  // the body and a closing quote. The prefix of either one is kept.
  function joinStrLit(a: string, b: string): string {
    const pa = a.indexOf('"');
    const pb = b.indexOf('"');
    const prefix = a.slice(0, pa) || b.slice(0, pb);
    return prefix + '"' + a.slice(pa + 1, -1) + b.slice(pb + 1, -1) + '"';
  }

  function maybeFunctional(p: Parser, e: Expr, args: Expr[], t: Token): Expr {
    // "Cls::name(...)": when Cls is a class this parser saw, only what that
    // class declares decides the name ("std::_Hash_impl::hash", a static
    // function, is not a type just because the class being parsed is called
    // "hash").  Otherwise the type names in scope are all there is to go on
    // ("std::size_t(...)" of a typedef, "hash<int>(...)" of a class).
    const isType = e.kind === "id" && e.parts.length > 0 && (e.parts.length > 1 && p.ownerIsClass(e.parts) ? p.isQualifiedTypeName(e.parts) : p.isTypeName(last(e.parts).n));
    if (e.kind === "id" && isType) {
      const arg: Expr = args.length === 1 ? args[0] : { kind: "initlist", items: args, parens: true, ...at(t) };
      return {
        kind: "cast",
        ckind: "functional",
        type: { kind: "type", parts: e.parts, global: e.global, ptr: 0, ref: "", cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null, ...at(t) },
        fn: null,
        arg,
        ...at(t),
      };
    }
    return { kind: "call", fn: e, args, ...at(t) };
  }

  export function parseUnary(p: Parser): Expr {
    const t = p.peek();
    // "typename" only qualifies a dependent type, it carries no meaning here.
    if (t.t === "ident" && t.v === "typename") {
      p.pos++;
      return parseUnary(p);
    }
    if (t.t === "++" || t.t === "--" || t.t === "+" || t.t === "-" || t.t === "!" || t.t === "~" || t.t === "*" || t.t === "&") {
      p.pos++;
      // Postfix binds tighter than a prefix operator: *p++ is *(p++).
      const arg = parsePostfix(p, parseUnary(p));
      return { kind: "unary", op: t.t, arg, postfix: false, ...at(t) };
    }
    if (t.t === "(") {
      if (p.peek(1).t === "{") {
        p.pos++;
        p.expect("{");
        const stmts: Stmt[] = [];
        while (!p.eat("}")) {
          if (p.atEnd()) fail("unterminated statement expression", t.file, t.line, t.col);
          stmts.push(parseStmt(p));
        }
        p.expect(")");
        return { kind: "stmtexpr", stmts, ...at(t) };
      }
      if (looksLikeCast(p)) {
        p.pos++;
        const type = p.parseAbstractType();
        p.expect(")");
        const arg = parsePostfix(p, parseUnary(p));
        return { kind: "cast", ckind: "cstyle", type, fn: null, arg, ...at(t) };
      }
      p.pos++;
      const e = parseExpr(p, 0);
      p.expect(")");
      return e;
    }
    if (t.t === "{") return p.parseInitList();
    if (t.t === "[") return parseLambda(p);
    if (t.t === "string") {
      // Adjacent string literals are one literal: "ab" "cd" is "abcd".
      let v = t.v;
      p.pos++;
      while (p.peek().t === "string") ((v = joinStrLit(v, p.peek().v)), p.pos++);
      return { kind: "lit", lkind: "string", value: v, ...at(t) };
    }
    if (t.t === "number" || t.t === "char") {
      p.pos++;
      const lkind = t.t === "number" ? "int" : "char";
      return { kind: "lit", lkind, value: t.v, ...at(t) };
    }
    if (t.t === "ident") {
      if (t.v === "true" || t.v === "false") {
        p.pos++;
        return { kind: "lit", lkind: "bool", value: t.v, ...at(t) };
      }
      if (t.v === "nullptr" || t.v === "__null") {
        p.pos++;
        return { kind: "lit", lkind: "null", value: t.v, ...at(t) };
      }
      if (t.v === "this") {
        p.pos++;
        return { kind: "this", ...at(t) };
      }
      if (t.v === "new" || t.v === "delete") return parseNewDelete(p);
      if (t.v === "sizeof") return parseSizeof(p, false);
      if (t.v === "alignof" || t.v === "__alignof__") return parseSizeof(p, true);
      if (t.v === "static_cast" || t.v === "dynamic_cast" || t.v === "const_cast" || t.v === "reinterpret_cast") {
        return parseCastOp(p);
      }
      if (t.v === "typeid") return parseTypeid(p);
      if (t.v === "noexcept") return parseNoexcept(p);
      if (t.v === "throw") fail("throw is only supported as a statement", t.file, t.line, t.col);
      if (t.v === "operator") {
        // "operator[](0)" calls the member operator of the current object.
        p.pos++;
        const r = p.parseOperator();
        return { kind: "id", parts: [qseg(r.convType ? "#conv" : "operator" + r.op)], global: false, ...at(t) };
      }
      if (t.v === "decltype") fail("unexpected 'decltype' in expression", t.file, t.line, t.col);
      return parseIdExpr(p);
    }
    if (t.t === "::") {
      if (p.peek(1).t === "ident" && (p.peek(1).v === "new" || p.peek(1).v === "delete")) {
        p.pos++;
        return parseNewDelete(p);
      }
      return parseIdExpr(p);
    }
    fail(`unexpected token '${t.v}' in expression`, t.file, t.line, t.col);
  }

  export function parseIdExpr(p: Parser): IdExpr {
    const t = p.peek();
    let global = false;
    if (p.eat("::")) global = true;
    const parts = p.parseQualifiedName(true, false);
    // "::operator new(16)" calls a function whose name is the operator itself,
    // spelled the same way a declaration spells it.
    if (parts.length && last(parts).n === "operator") {
      parts[parts.length - 1] = qseg("operator" + p.parseOperator().op);
    }
    if (p.peek().t === "<") {
      const m = p.mark();
      try {
        const args = p.parseTArgList();
        const nx = p.peek().t;
        // "tcmp<int>;" or "sort(a, b, tcmp<int>)": nothing that can start an operand
        // follows, so the angle brackets were arguments and not a comparison.
        if (nx === "(" || nx === "::" || NOT_OPERAND_START.has(nx)) last(parts).a = args;
        else p.reset(m);
      } catch {
        p.reset(m);
      }
    }
    return { kind: "id", parts, global, ...at(t) };
  }

  // Tokens that cannot start the operand of a cast, so "(T)" before one of them
  // is a parenthesized expression rather than a cast.
  const NOT_OPERAND_START = new Set(["eof", ")", ",", ";", "}", "]", ">", ">>", "==", "!=", "<=", ">=", "&&", "||", "=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "<<", "?", ":", ".", "->", "->*", ".*"]);

  function parensHoldType(p: Parser): boolean {
    const m = p.mark();
    try {
      p.pos++;
      p.skipGnu();
      const t = p.peek();
      if (t.t !== "ident" && t.t !== "::") {
        p.reset(m);
        return false;
      }
      if (t.t === "ident" && !p.isTypeName(t.v) && t.v !== "typename") {
        if (!["class", "struct", "union", "enum", "const", "volatile", "auto", "decltype", "__typeof__", "__typeof"].includes(t.v)) {
          p.reset(m);
          return false;
        }
      }
      p.parseAbstractType();
      const ok = p.peek().t === ")";
      p.reset(m);
      return ok;
    } catch {
      p.reset(m);
      return false;
    }
  }

  function looksLikeCast(p: Parser): boolean {
    if (!parensHoldType(p)) return false;
    const m = p.mark();
    p.pos++;
    p.skipGnu();
    p.parseAbstractType();
    const ok = !NOT_OPERAND_START.has(p.peek(1).t);
    p.reset(m);
    return ok;
  }

  function parseNewDelete(p: Parser): Expr {
    const t = p.expect("ident");
    if (t.v === "delete") {
      let isArray = false;
      if (p.eat("[")) {
        p.expect("]");
        isArray = true;
      }
      const arg = parseUnary(p);
      return { kind: "delete", arg, isArray, ...at(t) };
    }
    let placement: Expr[] = [];
    if (p.peek().t === "(") {
      const m = p.mark();
      p.pos++;
      p.skipGnu();
      const u = p.peek();
      const isTypeParen = (u.t === "ident" && (p.isTypeName(u.v) || u.v === "const" || u.v === "volatile")) || u.t === "::";
      p.reset(m);
      if (!isTypeParen) {
        p.pos++;
        placement = p.parseExprList(")");
      }
    }
    let type: TypeNode;
    if (p.peek().t === "(") {
      p.pos++;
      type = p.parseAbstractType();
      p.expect(")");
    } else {
      type = p.parseAbstractType();
    }
    let args: Expr[] = [];
    if (p.peek().t === "(") {
      p.pos++;
      args = p.parseExprList(")");
    } else if (p.peek().t === "{") {
      args = [p.parseInitList()];
    }
    return { kind: "new", placement, type, args, isArray: type.dims.length > 0, ...at(t) };
  }

  function parseSizeof(p: Parser, isAlign: boolean): SizeofExpr {
    const t = p.expect("ident");
    const base = { kind: "sizeof" as const, isType: false, type: null as TypeNode | null, expr: null as Expr | null, packName: "", isAlignof: isAlign, ...at(t) };
    // "sizeof...(_Pack)" counts the elements of a parameter pack.
    if (p.peek().t === "...") {
      p.pos++;
      p.expect("(");
      const nm = p.expect("ident").v;
      p.expect(")");
      base.packName = nm;
      return base;
    }
    if (p.peek().t === "(" && !isAlign) {
      if (parensHoldType(p)) {
        p.pos++;
        base.type = p.parseAbstractType();
        p.expect(")");
        base.isType = true;
        return base;
      }
      p.pos++;
      base.expr = parseExpr(p, 0);
      p.expect(")");
      return base;
    }
    if (p.peek().t === "(" && isAlign) {
      p.pos++;
      base.type = p.parseAbstractType();
      p.expect(")");
      base.isType = true;
      return base;
    }
    base.expr = parseUnary(p);
    return base;
  }

  function parseCastOp(p: Parser): CastExpr {
    const t = p.expect("ident");
    p.expect("<");
    const type = p.parseAbstractType();
    if (!p.eatGt()) fail("expected '>' in cast", t.file, t.line, t.col);
    p.expect("(");
    const arg = parseExpr(p, 0);
    p.expect(")");
    return { kind: "cast", ckind: t.v, type, fn: null, arg, ...at(t) };
  }

  function parseTypeid(p: Parser): TypeidExpr {
    const t = p.expect("ident");
    p.expect("(");
    const m = p.mark();
    let isType = false;
    let type: TypeNode | null = null;
    let expr: Expr | null = null;
    try {
      p.skipGnu();
      const u = p.peek();
      if ((u.t === "ident" && p.isTypeName(u.v)) || u.t === "::") {
        type = p.parseAbstractType();
        if (p.peek().t === ")") isType = true;
        else p.reset(m);
      }
    } catch {
      p.reset(m);
    }
    if (!isType) expr = parseExpr(p, 0);
    p.expect(")");
    return { kind: "typeid", isType, type, expr, ...at(t) };
  }

  function parseNoexcept(p: Parser): NoexceptExpr {
    const t = p.expect("ident");
    let expr: Expr | null = null;
    if (p.peek().t === "(") {
      p.pos++;
      expr = parseExpr(p, 0);
      p.expect(")");
    }
    return { kind: "noexcept", expr, ...at(t) };
  }

  function parseLambda(p: Parser): LambdaExpr {
    const t = p.expect("[");
    const captures: LambdaCapture[] = [];
    let defCapture = "";
    p.skipGnu();
    if (!p.eat("]")) {
      if (p.peek().t === "=" || p.peek().t === "&") {
        const nx1 = p.peek(1).t;
        if (p.peek().t === "=" && (nx1 === "," || nx1 === "]")) {
          defCapture = "=";
          p.pos++;
        } else if (p.peek().t === "&" && (nx1 === "," || nx1 === "]")) {
          defCapture = "&";
          p.pos++;
        }
      }
      for (;;) {
        p.skipGnu();
        if (p.eat("]")) break;
        if (captures.length || defCapture) {
          if (!p.eat(",")) {
            p.expect("]");
            break;
          }
          p.skipGnu();
          if (p.peek().t === "]") {
            p.pos++;
            break;
          }
        }
        const ct = p.peek();
        if (p.isIdent("this")) {
          p.pos++;
          captures.push({ mode: "this", name: "this", ...at(ct) });
          continue;
        }
        let mode = "=";
        if (p.eat("&")) mode = "&";
        const nm = p.expect("ident").v;
        captures.push({ mode, name: nm, ...at(ct) });
      }
    }
    let params: Param[] = [];
    if (p.peek().t === "(") params = p.parseParamList();
    let mutable = false;
    for (;;) {
      if (p.isIdent("mutable")) {
        mutable = true;
        p.pos++;
        continue;
      }
      if (p.isIdent("noexcept")) {
        p.pos++;
        if (p.peek().t === "(") p.skipBalanced("(", ")");
        continue;
      }
      if (p.isIdent("throw")) {
        p.pos++;
        if (p.peek().t === "(") p.skipBalanced("(", ")");
        continue;
      }
      break;
    }
    let ret: TypeNode | null = null;
    if (p.eat("->")) ret = p.parseAbstractType();
    const body = parseCompound(p);
    return { kind: "lambda", captures, defCapture, params, ret, body: body.stmts, mutable, ...at(t) };
  }
}
