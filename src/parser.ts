namespace CTJ {

export interface PendingBody {
  func: FuncDecl;
  toks: Token[];
}

export interface DeclSpec {
  flags: string[];
  type: TypeNode | null;
  isTypedef: boolean;
  isFriend: boolean;
  defined: ClassDecl | EnumDecl | null;
}

export interface Declarator {
  name: QSeg[];
  global: boolean;
  op: string;
  convType: TypeNode | null;
  ptr: number;
  ref: "" | "&" | "&&";
  dims: Expr[];
  isFunc: boolean;
  params: Param[];
  funcCnst: boolean;
  trailing: TypeNode | null;
  isMemPtr: boolean;
  special: string;
  isPack: boolean;
}

export function blankDeclarator(): Declarator {
  return {
    name: [], global: false, op: "", convType: null, ptr: 0, ref: "",
    dims: [], isFunc: false, params: [], funcCnst: false,
    trailing: null, isMemPtr: false, special: "", isPack: false,
  };
}

const SPEC_FLAGS = new Set([
  "static", "extern", "inline", "virtual", "explicit", "friend",
  "constexpr", "mutable", "register", "thread_local",
]);

const SIGN_FLAGS = new Set(["signed", "unsigned", "short", "long"]);

const BASE_TYPES = new Set([
  "void", "bool", "char", "char16_t", "char32_t", "wchar_t",
  "int", "float", "double",
]);

const CV_FLAGS = new Set(["const", "volatile"]);

const GNU_SKIP = new Set([
  "__extension__", "__restrict__", "__restrict", "__volatile__", "__const__",
  "__inline__", "__inline", "__thread", "__cdecl", "__stdcall", "__fastcall",
]);

const GNU_CALL = new Set(["__attribute__", "__attribute", "__asm__", "__asm", "asm", "__declspec"]);

export class Parser {
  toks: Token[];
  pos = 0;
  warnings: string[] = [];
  inClass: ClassDecl[] = [];
  typeScopes: Set<string>[] = [new Set()];
  nsNames: Set<string> = new Set();
  classTypes: Map<string, Set<string>> = new Map();
  pending: PendingBody[] = [];
  anon: { n: number } = { n: 0 };

  constructor(toks: Token[]) {
    this.toks = toks;
  }

  peek(k = 0): Token {
    return this.toks[this.pos + k] || tok("eof", "", "", 0, 0);
  }

  next(): Token {
    const t = this.peek();
    if (t.t !== "eof") this.pos++;
    return t;
  }

  atEnd(): boolean {
    return this.peek().t === "eof";
  }

  eat(t: Tok): boolean {
    if (this.peek().t === t) { this.pos++; return true; }
    return false;
  }

  expect(t: Tok): Token {
    const p = this.peek();
    if (p.t !== t) fail(`expected '${t}', got '${p.v}'`, p.file, p.line, p.col);
    this.pos++;
    return p;
  }

  isIdent(v?: string, k = 0): boolean {
    const p = this.peek(k);
    return p.t === "ident" && (v === undefined || p.v === v);
  }

  mark(): number {
    return this.pos;
  }

  reset(m: number): void {
    this.pos = m;
  }

  warn(msg: string, t?: Token): void {
    const p = t || this.peek();
    this.warnings.push(`${p.file}:${p.line}: ${msg}`);
  }

  eatGt(): boolean {
    const t = this.peek();
    if (t.t === ">") { this.pos++; return true; }
    if (t.t === ">>") {
      t.t = ">";
      t.v = ">";
      this.toks.splice(this.pos + 1, 0, tok(">", ">", t.file, t.line, t.col));
      this.pos++;
      return true;
    }
    return false;
  }

  skipGnu(): void {
    for (;;) {
      const t = this.peek();
      if (t.t !== "ident") return;
      if (GNU_SKIP.has(t.v)) { this.pos++; continue; }
      if (GNU_CALL.has(t.v)) {
        this.pos++;
        if (this.peek().t === "(") this.skipBalanced("(", ")");
        continue;
      }
      return;
    }
  }

  skipBalanced(open: Tok, close: Tok): void {
    this.expect(open);
    let depth = 1;
    while (depth > 0) {
      const t = this.next();
      if (t.t === "eof") fail("unterminated bracket", t.file, t.line, t.col);
      if (t.t === open) depth++;
      if (t.t === close) depth--;
    }
  }

  collectBalanced(): Token[] {
    const start = this.pos;
    const o = this.peek();
    const pairs: Record<string, Tok> = { "(": ")", "[": "]", "{": "}" };
    const close = pairs[o.t];
    if (!close) fail(`expected bracket, got '${o.v}'`, o.file, o.line, o.col);
    this.skipBalanced(o.t, close as Tok);
    return this.toks.slice(start, this.pos);
  }

  pushScope(): void {
    this.typeScopes.push(new Set());
  }

  popScope(): void {
    if (this.typeScopes.length > 1) this.typeScopes.pop();
  }

  registerType(name: string): void {
    last(this.typeScopes).add(name);
  }

  registerNamespace(name: string): void {
    this.nsNames.add(name);
  }

  // The type names declared inside a class, kept so that they can be made
  // visible again when a member of that class is defined outside of it.
  recordClassTypes(name: string): void {
    this.classTypes.set(name, new Set(last(this.typeScopes)));
  }

  pushTypeScope(names: Set<string>): void {
    this.typeScopes.push(names);
  }

  isTypeName(name: string): boolean {
    if (BASIC_TYPES.has(name) || name === "auto") return true;
    for (let i = this.typeScopes.length - 1; i >= 0; i--) {
      if (this.typeScopes[i].has(name)) return true;
    }
    return false;
  }

  spawn(toks: Token[]): Parser {
    const p = new Parser(toks);
    p.warnings = this.warnings;
    p.typeScopes = this.typeScopes;
    p.nsNames = this.nsNames;
    p.classTypes = this.classTypes;
    p.anon = this.anon;
    return p;
  }

  anonName(hint: string): string {
    return `$${hint}_${this.anon.n++}`;
  }

  parseTU(): TranslationUnit {
    const decls: Decl[] = [];
    while (!this.atEnd()) {
      try {
        for (const d of this.parseDecls(false)) decls.push(d);
      } catch (e) {
        if (e instanceof CtxError) {
          this.warn(`parse error: ${e.message} at ${e.where()}, skipping`, this.peek());
          this.recover();
        } else throw e;
      }
    }
    return { decls, file: "", line: 0 };
  }

  recover(): void {
    let depth = 0;
    for (;;) {
      const t = this.peek();
      if (t.t === "eof") return;
      if (t.t === "{") { depth++; this.pos++; continue; }
      if (t.t === "}") {
        this.pos++;
        if (depth === 0) return;
        depth--;
        continue;
      }
      if (t.t === ";" && depth === 0) { this.pos++; return; }
      this.pos++;
    }
  }

  parseDecls(inClass: boolean): Decl[] {
    this.skipGnu();
    const t = this.peek();
    if (inClass && t.t === "ident" && ACCESS.has(t.v) && this.peek(1).t === ":") {
      this.pos += 2;
      return [{ kind: "access", access: t.v, ...at(t) }];
    }
    if (t.t === ";") {
      this.pos++;
      return [{ kind: "empty", ...at(t) }];
    }
    // "~Cls()" starts a destructor, which has no return type of its own.
    if (t.t !== "ident" && t.t !== "~") fail(`expected declaration, got '${t.v}'`, t.file, t.line, t.col);
    if (t.v === "inline" && this.peek(1).t === "ident" && this.peek(1).v === "namespace") {
      this.pos++;
      return [parseNamespace(this, true)];
    }
    switch (t.v) {
      case "template": return [parseTemplate(this, inClass)];
      case "namespace": return [parseNamespace(this, false)];
      case "using": return parseUsing(this);
      case "typedef": return parseTypedef(this);
      case "static_assert": return [parseStaticAssert(this)];
      case "extern":
        if (this.peek(1).t === "string") return parseExtern(this);
        return this.parseSimpleDecls(inClass);
      case "class":
      case "struct":
      case "union":
      case "enum": return parseClassOrEnumDecl(this, inClass);
      case "asm":
        this.pos++;
        if (this.peek().t === "(") this.skipBalanced("(", ")");
        this.eat(";");
        return [{ kind: "empty", ...at(t) }];
      default: return this.parseSimpleDecls(inClass);
    }
  }

  parseSimpleDecls(inClass: boolean): Decl[] {
    const start = this.peek();
    const spec = this.parseDeclSpec();
    if (this.isIdent("template")) {
      const td = parseTemplate(this, inClass);
      if (spec.flags.includes("extern")) return [];
      if (spec.flags.length || spec.type) this.warn("specifiers before template ignored", start);
      return [td];
    }
    const out: Decl[] = [];
    if (spec.defined) out.push(spec.defined);
    if (this.peek().t === ";") {
      this.pos++;
      return out;
    }
    for (;;) {
      this.skipGnu();
      if (this.peek().t === ";") { this.pos++; break; }
      const d = this.parseDeclarator();
      if (!spec.type && !d.name.length && !d.op && !d.convType) {
        fail("expected declarator", this.peek().file, this.peek().line, this.peek().col);
      }
      const type = this.applyDeclarator(spec.type, d, start);
      if (d.isFunc) {
        const fn = this.finishFunc(spec, d, type, inClass, start);
        out.push(spec.isFriend ? this.wrapFriend(fn, start) : fn);
        break;
      }
      const v: VarDecl = {
        kind: "var", name: d.name, type, init: null, directInit: null,
        flags: spec.flags.slice(), bitfield: null, isParam: false, ...at(start),
      };
      parseVarSuffix(this, v, inClass);
      if (spec.isTypedef) {
        const td: TypedefDecl = {
          kind: "typedef", name: d.name.length ? last(d.name).n : "",
          type, ...at(start),
        };
        if (td.name) this.registerType(td.name);
        out.push(td);
      } else {
        out.push(spec.isFriend ? this.wrapFriend(v, start) : v);
      }
      if (this.eat(",")) continue;
      this.expect(";");
      break;
    }
    return out;
  }

  wrapFriend(d: Decl, t: Token): FriendDecl {
    return { kind: "friend", decl: d, ...at(t) };
  }

  applyDeclarator(base: TypeNode | null, d: Declarator, t: Token): TypeNode {
    const tn = base ? this.cloneType(base) : typeNode([], at(t));
    tn.ptr += d.ptr;
    if (d.ref) tn.ref = d.ref;
    for (const dim of d.dims) tn.dims.push(dim);
    if (d.isFunc) {
      tn.func = { params: d.params.map(p => p.type), variadic: d.params.some(p => p.variadic) };
    }
    return tn;
  }

  cloneType(t: TypeNode): TypeNode {
    return {
      kind: "type", parts: t.parts.map(s => ({ n: s.n, a: s.a.map(x => this.cloneType(x)) })),
      global: t.global, ptr: t.ptr, ref: t.ref, cnst: t.cnst,
      dims: t.dims.slice(), func: t.func ? { params: t.func.params.slice(), variadic: t.func.variadic } : null,
      decltypeOf: t.decltypeOf, packExpand: t.packExpand, valueArg: t.valueArg, file: t.file, line: t.line,
    };
  }

  finishFunc(spec: DeclSpec, d: Declarator, type: TypeNode, inClass: boolean, start: Token): FuncDecl {
    let ret: TypeNode | null = null;
    if (type) {
      ret = this.cloneType(type);
      ret.func = null;
      ret.dims = [];
    }
    let isCtor = false;
    let isDtor = false;
    let isConv = false;
    if (d.convType) { ret = d.convType; isConv = true; }
    else if (d.op === "~") { ret = null; isDtor = true; }
    else if (!spec.type && !d.op) {
      ret = null;
      isCtor = true;
    }
    const fn: FuncDecl = {
      kind: "func", name: d.name, ret, params: d.params, body: null,
      flags: spec.flags.slice(), op: d.op, ctorInit: [], isCtor, isDtor,
      isConv, isDefault: false, isDelete: false, trailing: d.trailing, ...at(start),
    };
    if (d.funcCnst) fn.flags.push("const");
    if (d.special === "default") fn.isDefault = true;
    if (d.special === "delete") fn.isDelete = true;
    if (d.special === "pure") fn.flags.push("pure");
    if (this.eat(":")) {
      do {
        const nm = this.parseQualifiedName(true);
        let args: Expr[] = [];
        if (this.peek().t === "(") { this.pos++; args = this.parseExprList(")"); }
        else if (this.peek().t === "{") {
          const il = this.parseInitList();
          args = [il];
        }
        fn.ctorInit.push({ name: nm, args, ...at(start) });
      } while (this.eat(","));
    }
    if (this.peek().t === "{" || this.isIdent("try")) {
      if (inClass) {
        const toks = this.collectBalancedTry();
        this.pending.push({ func: fn, toks });
      } else {
        // The members of the class are in scope in the body of an out-of-line
        // member definition, so its type names stay visible while parsing it.
        const owner = d.name.length >= 2 ? this.classTypes.get(d.name[0].n) : undefined;
        if (owner) this.pushTypeScope(owner);
        try {
          fn.body = this.parseFuncBody();
        } finally {
          if (owner) this.popScope();
        }
      }
    } else {
      this.expect(";");
    }
    return fn;
  }

  collectBalancedTry(): Token[] {
    const start = this.pos;
    if (this.isIdent("try")) this.pos++;
    this.skipBalanced("{", "}");
    while (this.isIdent("catch")) {
      this.pos++;
      this.skipBalanced("(", ")");
      this.skipBalanced("{", "}");
    }
    return this.toks.slice(start, this.pos);
  }

  parseFuncBody(): Stmt[] {
    if (this.isIdent("try")) {
      const t = this.next();
      const body = parseCompound(this);
      const handlers = this.parseCatchList();
      return [{ kind: "try", body, handlers, ...at(t) }];
    }
    return [parseCompound(this)];
  }

  parseCatchList(): CatchBlock[] {
    const out: CatchBlock[] = [];
    while (this.isIdent("catch")) {
      const t = this.next();
      this.expect("(");
      let vdecl: VarDecl | null = null;
      let ellipsis = false;
      if (this.eat("...")) ellipsis = true;
      else {
        const spec = this.parseDeclSpec();
        const d = this.parseDeclarator();
        const type = this.applyDeclarator(spec.type, d, t);
        vdecl = {
          kind: "var", name: d.name.length ? d.name : [qseg("")], type,
          init: null, directInit: null, flags: [], bitfield: null,
          isParam: true, ...at(t),
        };
      }
      this.expect(")");
      const body = parseCompound(this);
      out.push({ vdecl, ellipsis, body, ...at(t) });
    }
    if (!out.length) {
      const t = this.peek();
      fail("expected catch handler", t.file, t.line, t.col);
    }
    return out;
  }

  flushPending(): void {
    const list = this.pending;
    this.pending = [];
    for (const p of list) {
      const sub = this.spawn(p.toks);
      p.func.body = sub.parseFuncBody();
      if (!sub.atEnd()) sub.warn("trailing tokens in function body");
    }
  }

  typeTailIsType(q: TypeNode): boolean {
    if (!q.parts.length) return true;
    const b = q.parts[q.parts.length - 1].n;
    if (b.startsWith("~")) return false;
    if (this.isTypeName(b)) return true;
    if (q.parts.length < 2) return false;
    // "Outer::Inner x" / "std::streampos x": the head of a qualified name is a
    // class or a namespace, and only the whole name denotes the type.  When a
    // "(" follows, the name is the function being defined instead.
    if (!this.isTypeName(q.parts[0].n) && !this.nsNames.has(q.parts[0].n)) return false;
    return this.peek().t !== "(";
  }

  isCtorDefName(q: TypeNode): boolean {
    if (this.peek().t !== "(") return false;
    if (q.parts.length < 2) return false;
    const a = q.parts[q.parts.length - 2].n;
    const b = q.parts[q.parts.length - 1].n;
    if (b.startsWith("~")) return true;
    return a === b || !this.isTypeName(b);
  }

  parseDeclSpec(): DeclSpec {
    const flags: string[] = [];
    let type: TypeNode | null = null;
    let isTypedef = false;
    let isFriend = false;
    let defined: ClassDecl | EnumDecl | null = null;
    const prefix: string[] = [];
    let sawConst = false;
    for (;;) {
      this.skipGnu();
      const t = this.peek();
      if (t.t === "::") {
        const m = this.mark();
        try {
          const q = this.parseQualifiedType();
          if (this.isCtorDefName(q)) { this.reset(m); break; }
          if (!this.typeTailIsType(q)) { this.reset(m); break; }
          type = this.mergeBase(type, q, prefix, t);
        } catch {
          this.reset(m);
          break;
        }
        continue;
      }
      if (t.t !== "ident") break;
      const v = t.v;
      if (v === "typedef") { isTypedef = true; this.pos++; continue; }
      if (v === "alignas") {
        this.pos++;
        if (this.peek().t === "(") this.skipBalanced("(", ")");
        continue;
      }
      if (SPEC_FLAGS.has(v)) {
        flags.push(v);
        if (v === "friend") isFriend = true;
        this.pos++;
        continue;
      }
      if (CV_FLAGS.has(v)) { if (v === "const") sawConst = true; this.pos++; continue; }
      if (SIGN_FLAGS.has(v) || BASE_TYPES.has(v)) { prefix.push(v); this.pos++; continue; }
      if (v === "auto") { prefix.push("auto"); this.pos++; continue; }
      if (v === "decltype" || v === "__typeof__" || v === "__typeof") {
        this.pos++;
        this.expect("(");
        const e = parseExpr(this, 0);
        this.expect(")");
        const tn = typeNode([], at(t));
        tn.decltypeOf = e;
        type = this.mergeBase(type, tn, prefix, t);
        continue;
      }
      if (v === "typename") {
        this.pos++;
        const q = this.parseQualifiedType();
        type = this.mergeBase(type, q, prefix, t);
        continue;
      }
      if (v === "class" || v === "struct" || v === "union" || v === "enum") {
        const r = parseClassOrEnumSpec(this);
        if (r.decl) defined = r.decl;
        type = this.mergeBase(type, r.type, prefix, t);
        continue;
      }
      if (v === "operator" || v === "template" || v === "~") break;
      if (!this.isTypeName(v) && this.peek(1).t !== "::" && this.peek(1).t !== "<") break;
      if (this.peek(1).t === "(" && !type && !prefix.length) break;
      // "unsigned long size_t": with base keywords already seen, the type name
      // that follows is the declarator being declared, not part of the type.
      if (prefix.length && !type) break;
      const m = this.mark();
      try {
        const q = this.parseQualifiedType();
        if (this.isCtorDefName(q)) { this.reset(m); break; }
        if (!this.typeTailIsType(q)) { this.reset(m); break; }
        type = this.mergeBase(type, q, prefix, t);
      } catch {
        this.reset(m);
        break;
      }
    }
    if (prefix.length && !type) {
      if (prefix.length === 1 && prefix[0] === "auto") type = typeNode([qseg("auto")]);
      else {
        const parts = prefix.slice();
        if (!parts.some(p => BASE_TYPES.has(p))) parts.push("int");
        type = typeNode([qseg(parts.join(" "))]);
      }
    } else if (prefix.length && type) {
      const extra = prefix.join(" ");
      if (type.parts.length) type.parts[0] = qseg(extra + " " + type.parts[0].n, type.parts[0].a);
      else type.parts.push(qseg(extra));
    }
    if (type && sawConst) type.cnst = true;
    return { flags, type, isTypedef, isFriend, defined };
  }

  mergeBase(cur: TypeNode | null, q: TypeNode, prefix: string[], t: Token): TypeNode {
    if (!cur) {
      if (prefix.length) {
        const extra = prefix.join(" ");
        prefix.length = 0;
        if (q.parts.length) q.parts[0] = qseg(extra + " " + q.parts[0].n, q.parts[0].a);
        else q.parts.push(qseg(extra));
      }
      return q;
    }
    if (q.parts.length) {
      for (const s of q.parts) cur.parts.push(s);
    }
    if (q.decltypeOf) cur.decltypeOf = q.decltypeOf;
    return cur;
  }

  parseQualifiedName(allowOp: boolean, inType = true): QSeg[] {
    const parts: QSeg[] = [];
    if (this.peek().t === "::") this.pos++;
    for (;;) {
      this.skipGnu();
      if (this.isIdent("template")) this.pos++;
      const t = this.peek();
      if (allowOp && t.t === "ident" && t.v === "operator") {
        parts.push(qseg("operator"));
        break;
      }
      if (allowOp && t.t === "~") {
        this.pos++;
        const n = this.expect("ident");
        parts.push(qseg("~" + n.v));
        break;
      }
      if (t.t !== "ident") fail(`expected name, got '${t.v}'`, t.file, t.line, t.col);
      this.pos++;
      let args: TypeNode[] = [];
      if (this.peek().t === "<") {
        const m = this.mark();
        let ok = true;
        try {
          args = this.parseTArgList();
          if (!inType && this.peek().t !== "::") { this.reset(m); ok = false; }
        } catch { this.reset(m); ok = false; }
        if (!ok) args = [];
      }
      parts.push(qseg(t.v, args));
      this.skipGnu();
      if (this.peek().t === "::") { this.pos++; continue; }
      break;
    }
    return parts;
  }

  parseQualifiedType(): TypeNode {
    const t = this.peek();
    const tn = typeNode([], at(t));
    if (this.eat("::")) tn.global = true;
    if (this.peek().t !== "ident") fail(`expected type name, got '${this.peek().v}'`, t.file, t.line, t.col);
    tn.parts = this.parseQualifiedName(false);
    return tn;
  }

  skipBalancedAngles(): void {
    const t = this.expect("<");
    let depth = 1;
    while (depth > 0) {
      const u = this.next();
      if (u.t === "eof") fail("unterminated '<'", t.file, t.line, t.col);
      if (u.t === "<") depth++;
      else if (u.t === ">>") depth -= 2;
      else if (u.t === ">") depth--;
    }
  }

  parseTArgList(): TypeNode[] {
    this.expect("<");
    const out: TypeNode[] = [];
    if (this.eatGt()) return out;
    for (;;) {
      this.skipGnu();
      const am = this.mark();
      // "!is_convertible<_A, _B>::value" negates a member of a template-id;
      // read as an expression the '<' after the type name is a comparison, so
      // the negation is rebuilt around the type instead.
      let neg = 0;
      while (this.peek().t === "!") { this.pos++; neg++; }
      let ta = this.parseAbstractType();
      if (neg && ta.parts.length) {
        let ex: Expr = { kind: "id", parts: ta.parts, global: ta.global, file: ta.file, line: ta.line };
        for (let i = 0; i < neg; i++) ex = { kind: "unary", op: "!", arg: ex, postfix: false, file: ta.file, line: ta.line };
        ta = typeNode([], ta);
        ta.valueArg = ex;
      } else if (!ta.parts.length && !ta.decltypeOf && !ta.ptr && !ta.ref && !ta.func && !ta.dims.length) {
        if (neg) this.reset(am);
        const ex = this.parseTArgValue(am);
        ta = typeNode([], ex);
        ta.valueArg = ex;
      }
      if (this.eat("...")) ta.packExpand = true;
      out.push(ta);
      this.skipGnu();
      if (this.eat(",")) continue;
      if (!this.eatGt()) {
        const t = this.peek();
        fail(`expected '>' in template argument list, got '${t.v}'`, t.file, t.line, t.col);
      }
      break;
    }
    return out;
  }

  parseTArgValue(am: number): Expr {
    let depth = 0;
    let adepth = 0;
    let q = am;
    for (;;) {
      const u = this.toks[q];
      if (!u || u.t === "eof") break;
      if (u.t === "(" || u.t === "[" || u.t === "{") depth++;
      else if (u.t === ")" || u.t === "]" || u.t === "}") {
        if (depth === 0) break;
        depth--;
      } else if (depth === 0) {
        if (u.t === "<") adepth++;
        else if (u.t === ">" || u.t === ">>" || u.t === ">>=") {
          if (adepth === 0) break;
          adepth--;
        }
        else if (u.t === ",") break;
      }
      q++;
    }
    const slice = this.toks.slice(am, q);
    slice.push(tok("eof", "", "", 0, 0));
    const ex = parseExpr(this.spawn(slice), 0);
    this.pos = q;
    return ex;
  }

  parseAbstractType(): TypeNode {
    const t = this.peek();
    const spec = this.parseDeclSpec();
    let tn = spec.type ? spec.type : typeNode([], at(t));
    if (!spec.type && this.peek().t === "ident" && this.isTypeName(this.peek().v)) {
      tn = this.parseQualifiedType();
    }
    this.parseAbstractDeclarator(tn);
    return tn;
  }

  parseAbstractDeclarator(tn: TypeNode): void {
    for (;;) {
      this.skipGnu();
      const t = this.peek();
      if (t.t === "*") {
        this.pos++;
        this.skipGnu();
        if (this.peek().t === "ident" && CV_FLAGS.has(this.peek().v)) this.pos++;
        tn.ptr++;
        continue;
      }
      if (t.t === "&" || t.t === "&&") {
        tn.ref = t.t as "&" | "&&";
        this.pos++;
        continue;
      }
      if (t.t === "(") {
        const m = this.mark();
        this.pos++;
        this.skipGnu();
        const n = this.peek();
        // Only a parenthesized declarator such as (*) continues the type;
        // a bare () is the parameter list of the surrounding declaration.
        if (n.t === "*" || n.t === "&" || n.t === "&&") {
          this.parseAbstractDeclarator(tn);
          this.expect(")");
        } else {
          this.reset(m);
          break;
        }
        continue;
      }
      break;
    }
    for (;;) {
      if (this.eat("[")) {
        if (this.eat("]")) tn.dims.push({ kind: "lit", lkind: "int", value: "", ...at(this.peek()) });
        else {
          const e = parseExpr(this, 3);
          this.expect("]");
          tn.dims.push(e);
        }
        continue;
      }
      break;
    }
  }

  parseDeclarator(): Declarator {
    const d = blankDeclarator();
    for (;;) {
      this.skipGnu();
      const t = this.peek();
      if (t.t === "*") {
        this.pos++;
        this.skipGnu();
        if (this.peek().t === "ident" && CV_FLAGS.has(this.peek().v)) this.pos++;
        d.ptr++;
        continue;
      }
      if (t.t === "&" || t.t === "&&") {
        d.ref = t.t as "&" | "&&";
        this.pos++;
        continue;
      }
      if (t.t === "ident" && this.peek(1).t === "::" && this.peek(2).t === "*") {
        this.pos += 3;
        d.ptr++;
        d.isMemPtr = true;
        continue;
      }
      break;
    }
    this.parseDeclaratorCore(d);
    // In "Cls::method(const value_type& v)" the members of Cls are in scope in
    // the parameter list, so its type names have to be visible while parsing it.
    const owner = d.name.length >= 2 ? this.classTypes.get(d.name[0].n) : undefined;
    if (owner) this.pushTypeScope(owner);
    try {
      this.parseDeclaratorSuffix(d);
    } finally {
      if (owner) this.popScope();
    }
    return d;
  }

  parseDeclaratorCore(d: Declarator): void {
    this.skipGnu();
    const t = this.peek();
    if (t.t === "(") {
      this.pos++;
      const inner = this.parseDeclarator();
      this.expect(")");
      d.name = inner.name;
      d.global = inner.global;
      d.op = inner.op;
      d.convType = inner.convType;
      d.ptr += inner.ptr;
      if (inner.ref) d.ref = inner.ref;
      for (const x of inner.dims) d.dims.push(x);
      if (inner.isFunc) {
        d.isFunc = true;
        d.params = inner.params;
        d.funcCnst = inner.funcCnst;
        d.trailing = inner.trailing;
        d.special = inner.special;
      }
      return;
    }
    if (t.t === "~") {
      this.pos++;
      const n = this.expect("ident");
      d.name = [qseg(n.v)];
      d.op = "~";
      return;
    }
    if (t.t === "ident" && t.v === "operator") {
      this.pos++;
      const r = this.parseOperator();
      d.op = r.op;
      d.convType = r.convType;
      d.name = [qseg("operator")];
      return;
    }
    if (t.t === "::") {
      d.global = true;
      this.pos++;
    }
    // "U&&... u": the ellipsis of a parameter pack stands before the name.
    if (this.peek().t === "...") {
      this.pos++;
      d.isPack = true;
    }
    if (this.peek().t === "ident") {
      d.name = this.parseQualifiedName(true);
      if (last(d.name).n === "operator") {
        d.name.pop();
        const r = this.parseOperator();
        d.op = r.op;
        d.convType = r.convType;
      } else if (last(d.name).n.startsWith("~")) {
        const nm = last(d.name).n.slice(1);
        d.name[d.name.length - 1] = qseg(nm);
        d.op = "~";
      }
      return;
    }
  }

  parseDeclaratorSuffix(d: Declarator): void {
    for (;;) {
      this.skipGnu();
      const t = this.peek();
      if (t.t === "[") {
        this.pos++;
        if (this.eat("]")) {
          d.dims.push({ kind: "lit", lkind: "int", value: "", ...at(t) });
        } else {
          const e = parseExpr(this, 3);
          this.expect("]");
          d.dims.push(e);
        }
        continue;
      }
      if (t.t === "(") {
        const m = this.mark();
        try {
          const params = this.parseParamList();
          for (const p of params) {
            const pt = p.type;
            if (!pt.parts.length && !pt.decltypeOf && !pt.ptr && !pt.ref && !pt.func && !pt.dims.length && !p.variadic && !p.isPack) {
              throw new Error("not params");
            }
          }
          d.isFunc = true;
          d.params = params;
        } catch {
          this.reset(m);
          break;
        }
        for (;;) {
          this.skipGnu();
          const u = this.peek();
          if (u.t === "ident" && (u.v === "const" || u.v === "volatile")) {
            if (u.v === "const") d.funcCnst = true;
            this.pos++;
            continue;
          }
          if (u.t === "&" || u.t === "&&") { this.pos++; continue; }
          if (u.t === "ident" && (u.v === "override" || u.v === "final")) { this.pos++; continue; }
          if (u.t === "ident" && u.v === "noexcept") {
            this.pos++;
            if (this.peek().t === "(") this.skipBalanced("(", ")");
            continue;
          }
          if (u.t === "ident" && u.v === "throw") {
            this.pos++;
            if (this.peek().t === "(") this.skipBalanced("(", ")");
            continue;
          }
          break;
        }
        if (this.eat("->")) d.trailing = this.parseAbstractType();
        if (this.peek().t === "=" && this.peek(1).t === "ident" &&
          (this.peek(1).v === "default" || this.peek(1).v === "delete")) {
          d.special = this.peek(1).v;
          this.pos += 2;
        } else if (this.peek().t === "=" && this.peek(1).t === "number") {
          this.pos += 2;
          d.special = "pure";
        }
        continue;
      }
      break;
    }
  }

  parseOperator(): { op: string; convType: TypeNode | null } {
    const t = this.peek();
    if (t.t === "string") {
      this.pos++;
      let suffix = "";
      if (this.peek().t === "ident") suffix = this.next().v;
      return { op: '""' + suffix, convType: null };
    }
    if (t.t === "(") {
      this.pos++;
      this.expect(")");
      return { op: "()", convType: null };
    }
    if (t.t === "[") {
      this.pos++;
      this.expect("]");
      return { op: "[]", convType: null };
    }
    const two = t.t;
    if (["+", "-", "*", "/", "%", "^", "&", "|", "~", "!", "=", "<", ">",
      "+=", "-=", "*=", "/=", "%=", "^=", "&=", "|=", "<<", ">>", "<<=",
      ">>=", "==", "!=", "<=", ">=", "&&", "||", "++", "--", "->",
      "->*", ".*", ",", "<=>"].includes(two)) {
      this.pos++;
      return { op: two, convType: null };
    }
    if (t.t === "ident" && (t.v === "new" || t.v === "delete")) {
      this.pos++;
      let op = t.v;
      if (this.peek().t === "[") {
        this.pos++;
        this.expect("]");
        op += "[]";
      }
      return { op, convType: null };
    }
    const ct = this.parseAbstractType();
    return { op: "conv", convType: ct };
  }

  parseParamList(): Param[] {
    this.expect("(");
    const out: Param[] = [];
    this.skipGnu();
    if (this.eat(")")) return out;
    if (this.isIdent("void") && this.peek(1).t === ")") {
      this.pos += 2;
      return out;
    }
    for (;;) {
      this.skipGnu();
      const t = this.peek();
      if (this.eat("...")) {
        out.push({ name: "", type: typeNode([qseg("")], at(t)), def: null, variadic: true, isPack: false, ...at(t) });
        this.expect(")");
        return out;
      }
      const spec = this.parseDeclSpec();
      let isPack = false;
      if (this.peek().t === "...") { isPack = true; this.pos++; }
      const d = this.parseDeclarator();
      if (d.isPack) isPack = true;
      const type = this.applyDeclarator(spec.type, d, t);
      let name = d.name.length ? last(d.name).n : "";
      if (d.op) name = "";
      const p: Param = { name, type, def: null, variadic: false, isPack, ...at(t) };
      if (this.eat("=")) {
        p.def = this.peek().t === "{" ? this.parseInitList() : parseExpr(this, 2);
      }
      out.push(p);
      this.skipGnu();
      if (this.eat(",")) {
        if (this.peek().t === ")") { this.pos++; break; }
        continue;
      }
      this.expect(")");
      break;
    }
    return out;
  }

  parseInitList(): InitListExpr {
    const t = this.expect("{");
    const items: Expr[] = [];
    if (!this.eat("}")) {
      for (;;) {
        this.skipGnu();
        if (this.eat(".")) {
          this.expect("ident");
          this.skipGnu();
          this.eat("=");
        } else if (this.peek().t === "[") {
          this.pos++;
          parseExpr(this, 0);
          this.expect("]");
          this.skipGnu();
          this.eat("=");
        }
        items.push(parseExpr(this, 2));
        this.skipGnu();
        if (this.eat(",")) {
          if (this.peek().t === "}") { this.pos++; break; }
          continue;
        }
        this.expect("}");
        break;
      }
    }
    return { kind: "initlist", items, ...at(t) };
  }

  parseExprList(close: Tok): Expr[] {
    const out: Expr[] = [];
    this.skipGnu();
    if (this.eat(close)) return out;
    for (;;) {
      out.push(parseExpr(this, 2));
      this.skipGnu();
      if (this.eat(",")) continue;
      this.expect(close);
      break;
    }
    return out;
  }
}
}
