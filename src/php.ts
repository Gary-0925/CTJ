namespace CTJ {

const PHP_RESERVED = new Set([
  "stdclass", "exception", "error", "closure", "generator", "throwable",
  "arrayobject", "arrayaccess", "countable", "iterator", "traversable",
  "serializable", "libxmlnode", "pdo", "mysqli", "reflection", "stdClass",
]);

const PHP_FUNC_RESERVED = new Set([
  "echo", "print", "list", "exit", "die", "isset", "unset", "empty", "eval",
  "include", "require", "clone", "new", "function", "class", "interface",
  "trait", "extends", "implements", "namespace", "use", "global", "static",
  "var", "const", "return", "if", "else", "elseif", "endif", "while",
  "endwhile", "do", "for", "endfor", "foreach", "endforeach", "switch",
  "endswitch", "case", "default", "break", "continue", "goto", "declare",
  "enddeclare", "try", "catch", "finally", "throw", "abstract", "final",
  "private", "protected", "public", "instanceof", "insteadof", "callable",
  "array", "fn", "match", "readonly", "enum",
]);

export function phpClsName(c: ClsInfo): string {
  const n = c.mangled as string;
  if (PHP_RESERVED.has(n.toLowerCase())) return n + "_";
  return n;
}

export function phpFuncName(f: FuncInfo): string {
  const n = f.mangled;
  if (PHP_FUNC_RESERVED.has(n.toLowerCase())) return n + "_";
  return n;
}

export function phpMethodName(fn: FuncInfo): string {
  if (fn.short === "#ctor") return "__construct";
  return methodJsName(fn);
}

export function emitPhp(cx: Cx): string {
  const g = new PhpGen(cx);
  return g.run();
}

class PhpGen {
  cx: Cx;
  out: string[] = [];
  ind = "";
  tmpN = 0;
  alias: Map<string, string>[] = [];
  fieldAlias: Map<string, string> = new Map();
  exStack: string[] = [];
  rangeN = 0;
  fnStack: FuncInfo[] = [];
  usedGlobals: Set<string> = new Set();
  needThrow = false;

  constructor(cx: Cx) {
    this.cx = cx;
  }

  run(): string {
    this.line(`<?php`);
    for (const c of this.sortClasses()) {
      if (!c.referenced || c.isLambda) continue;
      this.emitClass(c);
    }
    for (const list of this.cx.funcs.values()) {
      for (const f of list) {
        if (f.isMethod || !f.referenced) continue;
        this.emitFunc(f);
      }
    }
    const gbase = this.tmpN;
    const glines: string[] = [];
    const save = this.out;
    this.out = glines;
    for (const v of this.cx.vars.values()) this.emitGlobal(v);
    for (const c of this.sortClasses()) {
      if (!c.referenced || c.isLambda) continue;
      this.emitStaticInit(c);
    }
    this.out = save;
    if (this.tmpN > gbase) this.line(this.tmpDecl(gbase, this.tmpN));
    for (const l of glines) this.out.push(l);
    if (this.needThrow) this.line(`class CtjThrow extends Exception { public $v; function __construct($v) { $this->v = $v; } }`);
    const mains = this.cx.funcs.get("main") || [];
    const main = mains.find(f => !f.isMethod && f.referenced);
    if (main) {
      const ps = this.cx.funcParams(main);
      const args = ps.length >= 3 ? ["0", `["a" => [], "i" => 0]`, "null"] : ps.length === 2 ? ["0", `["a" => [], "i" => 0]`] : ps.length === 1 ? ["0"] : [];
      this.line(`${phpFuncName(main)}(${args.join(", ")});`);
    }
    return this.out.join("\n") + "\n";
  }

  sortClasses(): ClsInfo[] {
    const cs = [...this.cx.classes.values()].filter(c => c.complete && c.referenced && !c.isLambda);
    const idx = new Map<string, ClsInfo>();
    for (const c of cs) idx.set(c.fq, c);
    const deps = new Map<string, Set<string>>();
    for (const c of cs) {
      const d = new Set<string>();
      for (const b of c.bases) if (idx.has(b.fq)) d.add(b.fq);
      deps.set(c.fq, d);
    }
    const done = new Set<string>();
    const res: ClsInfo[] = [];
    while (res.length < cs.length) {
      let next: ClsInfo | null = null;
      for (const c of cs) {
        if (done.has(c.fq)) continue;
        const d = deps.get(c.fq) as Set<string>;
        let ok = true;
        for (const x of d) if (!done.has(x)) { ok = false; break; }
        if (ok) { next = c; break; }
      }
      if (!next) {
        for (const c of cs) if (!done.has(c.fq)) { next = c; break; }
      }
      done.add((next as ClsInfo).fq);
      res.push(next as ClsInfo);
    }
    return res;
  }

  line(s: string): void {
    this.out.push(this.ind + s);
  }

  block(head: string, fn: () => void): void {
    this.line(head + " {");
    this.ind += "  ";
    fn();
    this.ind = this.ind.slice(0, -2);
    this.line("}");
  }

  tmp(): string {
    return `$t${this.tmpN++}`;
  }

  tmpDecl(a: number, b: number): string {
    const ns: string[] = [];
    for (let i = a; i < b; i++) ns.push(`$t${i}`);
    return `${ns.join(" = ")} = null;`;
  }

  localName(v: VarInfo): string {
    for (let i = this.alias.length - 1; i >= 0; i--) {
      const hit = this.alias[i].get(v.short);
      if (hit !== undefined) return hit;
    }
    return `$${v.mangled}`;
  }

  varName(v: VarInfo, needsThis: boolean): string {
    if (v.isGlobal) {
      this.usedGlobals.add(`$${v.mangled}`);
      if (v.lifted) this.usedGlobals.add(`$${v.mangled}_init`);
      return `$${v.mangled}`;
    }
    if (v.isField) {
      if (v.isStatic) {
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        return `${phpClsName(cls)}::$${safeJsName(v.short)}`;
      }
      const fname = this.fieldAlias.get(v.fq) || safeJsName(v.short);
      return needsThis ? `$this->${fname}` : `$${fname}`;
    }
    return this.localName(v);
  }

  fieldName(cls: ClsInfo, name: string): string {
    return this.fieldAlias.get(cls.fq + "::" + name) || safeJsName(name);
  }

  globalLine(): string {
    if (!this.usedGlobals.size) return "";
    return `global ${[...this.usedGlobals].join(", ")};`;
  }

  withBody(fn: () => void): string[] {
    const save = this.out;
    const lines: string[] = [];
    this.out = lines;
    const saveG = this.usedGlobals;
    this.usedGlobals = new Set();
    this.ind += "  ";
    fn();
    this.ind = this.ind.slice(0, -2);
    const g = this.globalLine();
    this.usedGlobals = saveG;
    this.out = save;
    if (g) lines.unshift(this.ind + "  " + g);
    return lines;
  }

  curFn(): FuncInfo | null {
    return this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
  }

  bodyStmts(list: Stmt[]): void {
    if (list.length === 1 && list[0].kind === "compound") {
      for (const x of (list[0] as Compound).stmts) this.stmt(x);
    } else {
      for (const x of list) this.stmt(x);
    }
  }
  mixinMethods(c: ClsInfo): { cls: ClsInfo; key: string; fns: FuncInfo[] }[] {
    const res: { cls: ClsInfo; key: string; fns: FuncInfo[] }[] = [];
    const seen = new Set<string>(c.methods.keys());
    const visit = (x: ClsInfo): void => {
      for (let i = 1; i < x.bases.length; i++) {
        const b = this.cx.classes.get(x.bases[i].fq);
        if (!b || !b.referenced) continue;
        for (const [key, fns] of b.methods) {
          if (seen.has(key)) continue;
          seen.add(key);
          const use = fns.filter(f => f.referenced && (f.decl.body || []).length);
          if (use.length) res.push({ cls: b, key, fns: use });
        }
        const bf = new Map<string, string>();
        for (const [name] of b.fields) {
          if (b.fieldStatic.has(name)) continue;
          if (x.fields.has(name) || c.fields.has(name)) this.cx.fail(`mixin field collision '${name}'`, x.decl);
          bf.set(b.fq + "::" + name, safeJsName(name));
        }
        for (const [k, v] of bf) this.fieldAlias.set(k, v);
        visit(b);
      }
    };
    visit(c);
    return res;
  }

  emitClass(c: ClsInfo): void {
    const cn = phpClsName(c);
    const base = c.bases.length ? phpClsName(this.cx.classes.get(c.bases[0].fq) as ClsInfo) : "";
    const mixins = this.mixinMethods(c);
    this.block(base ? `class ${cn} extends ${base}` : `class ${cn}`, () => {
      for (const [name] of c.fields) {
        if (!c.fieldStatic.has(name)) this.line(`public $${safeJsName(name)};`);
      }
      for (const mx of mixins) {
        for (const [name] of mx.cls.fields) {
          if (!mx.cls.fieldStatic.has(name)) this.line(`public $${safeJsName(name)};`);
        }
      }
      const ctors = (c.methods.get("#ctor") || []).filter(f => f.referenced);
      const inherited = this.inheritedCtors(c);
      if (ctors.length || inherited.length || c.fields.size || c.bases.length || mixins.length) {
        this.emitCtor(c, ctors, inherited);
      }
      this.emitDtor(c);
      for (const [key, fns] of c.methods) {
        if (key === "#ctor" || key === "#dtor") continue;
        this.emitMethod(c, fns);
      }
      for (const mx of mixins) this.emitMethod(mx.cls, mx.fns);
      for (const [name, fd] of c.fields) {
        if (!c.fieldStatic.has(name)) continue;
        this.line(`public static $${safeJsName(name)};`);
      }
    });
  }

  emitStaticInit(c: ClsInfo): void {
    const cn = phpClsName(c);
    for (const [name, fd] of c.fields) {
      if (!c.fieldStatic.has(name)) continue;
      const ft = this.cx.fieldType(c, name);
      const init = fd.init;
      if (init) {
        this.line(`${cn}::$${safeJsName(name)} = ${this.argFor(ft, init, null)};`);
      } else if (fd.directInit && fd.directInit.length) {
        const a = this.cx.getAnn(fd);
        if (a.call) {
          this.line(`${cn}::$${safeJsName(name)} = ${this.ctorExpr(cn, a.call as FuncInfo, fd.directInit, a.convs)};`);
        } else {
          this.line(`${cn}::$${safeJsName(name)} = ${this.ex(fd.directInit[0])};`);
        }
      } else if (isBoxLike(ft) || ft.isFunc) {
        this.line(`${cn}::$${safeJsName(name)} = null;`);
      } else {
        const fcls = !ft.isBox() && !ft.isFunc && !ft.dims.length ? this.cx.stripAll(ft) : "";
        if (fcls && this.cx.classes.has(fcls)) {
          const a = this.cx.getAnn(fd);
          const cc = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
          this.line(`${cn}::$${safeJsName(name)} = ${a.call ? this.ctorExpr(cc, a.call as FuncInfo, [], []) : `new ${cc}()`};`);
        } else if (ft.dims.length) {
          this.line(`${cn}::$${safeJsName(name)} = ${this.arrayNew(ft)};`);
        } else {
          this.line(`${cn}::$${safeJsName(name)} = ${this.zero(ft)};`);
        }
      }
    }
  }

  inheritedCtors(c: ClsInfo): { fn: FuncInfo; base: string }[] {
    const res: { fn: FuncInfo; base: string }[] = [];
    const seen = new Set<string>();
    for (const b of c.usingBase.values()) {
      if (seen.has(b)) continue;
      seen.add(b);
      const bc = this.cx.classes.get(b);
      if (!bc) continue;
      for (const f of bc.methods.get("#ctor") || []) {
        if (f.referenced) res.push({ fn: f, base: b });
      }
    }
    return res;
  }

  emitCtor(c: ClsInfo, ctors: FuncInfo[], inherited: { fn: FuncInfo; base: string }[]): void {
    const cn = phpClsName(c);
    const all: { fn: FuncInfo; inh: string }[] = [];
    for (const f of ctors) all.push({ fn: f, inh: "" });
    for (const h of inherited) all.push({ fn: h.fn, inh: h.base });
    const baseArgs = (fn: FuncInfo, inh: string): string => {
      const bc = this.cx.classes.get(c.bases[0].fq) as ClsInfo;
      const hit = !inh ? fn.decl.ctorInit.find(x => last(x.name).n === bc.short || last(x.name).n === c.bases[0].fq) : null;
      if (inh && c.bases[0].fq === inh) {
        const ps = this.cx.funcParams(fn);
        const aa: string[] = [];
        for (let i = 0; i < ps.length && !ps[i].variadic; i++) aa.push(this.ctorArg(ps[i], i));
        return aa.join(", ");
      }
      if (hit && hit.args.length) {
        const a = this.cx.getAnn(hit);
        if (a.call) {
          return hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call as FuncInfo)[i].type, x, a.convs[i])).join(", ");
        }
        return this.ex(hit.args[0]);
      }
      return "";
    };
    const lines = this.withBody(() => {
      if (c.bases.length) {
        if (all.length <= 1) {
          this.line(`parent::__construct(${all.length ? baseArgs(all[0].fn, all[0].inh) : ""});`);
        } else {
          all.forEach((x, i) => {
            this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(x.fn, i)}) {`);
            this.ind += "  ";
            this.line(`parent::__construct(${baseArgs(x.fn, x.inh)});`);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
          });
        }
      }
      this.line(`$this->__init_${cn}(...$a);`);
    });
    this.line(`function __construct(...$a) {`);
    this.ind += "  ";
    for (const l of lines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
    const ilines = this.withBody(() => {
      if (all.length <= 1) {
        if (all.length) this.ctorBranch(c, all[0].fn, all[0].inh);
        else this.ctorDefault(c);
      } else {
        all.forEach((x, i) => {
          this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(x.fn, i)}) {`);
          this.ind += "  ";
          this.ctorBranch(c, x.fn, x.inh);
          this.ind = this.ind.slice(0, -2);
          this.line(`}`);
        });
        this.line(`else { throw new Exception("no matching constructor"); }`);
      }
    });
    this.line(`function __init_${cn}(...$a) {`);
    this.ind += "  ";
    for (const l of ilines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  matchCond(fn: FuncInfo, _i: number): string {
    const ps = this.cx.funcParams(fn);
    const named = ps.filter(p => !p.variadic);
    const min = named.filter(p => !p.def).length;
    const parts = [`count($a) >= ${min}`, `count($a) <= ${named.length}`];
    named.forEach((p, i) => {
      const chk = this.typeCheck(`$a[${i}]`, p.type);
      if (chk) parts.push(chk);
    });
    return parts.join(" && ");
  }

  typeCheck(v: string, t: CppType): string {
    if (t.name === "__any") return "";
    if (t.isFunc) return `is_callable(${v})`;
    if (t.isBox()) {
      if (t.ptr > 0 || t.ref) return `(${v} === null || is_array(${v}))`;
      return "";
    }
    if (t.dims.length) return `is_array(${v})`;
    const n = coreName(t);
    if (n === "bool") return `is_bool(${v})`;
    if (n === "float" || n === "double") return `(is_float(${v}) || is_int(${v}))`;
    if (isNumericName(n) || this.cx.enums.has(this.cx.stripAll(t))) return `(is_int(${v}) || is_bool(${v}))`;
    const fq = this.cx.stripAll(t);
    if (this.cx.classes.has(fq)) return `${v} instanceof ${phpClsName(this.cx.classes.get(fq) as ClsInfo)}`;
    return "";
  }

  ctorArg(p: { type: CppType; def: Expr | null }, i: number): string {
    const v = `$a[${i}] ?? null`;
    if (p.def) return `(array_key_exists(${i}, $a) ? $a[${i}] : (${this.ex(p.def)}))`;
    return v;
  }

  ctorBranch(c: ClsInfo, fn: FuncInfo, inh: string, noAlias = false): void {
    const ps = this.cx.funcParams(fn);
    if (!noAlias) {
      this.alias.push(new Map());
      ps.forEach((p, i) => {
        if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
      });
    }
    for (let bi = 1; bi < c.bases.length; bi++) {
      const b = c.bases[bi];
      const bc = this.cx.classes.get(b.fq) as ClsInfo;
      const hit = !inh ? fn.decl.ctorInit.find(x => last(x.name).n === bc.short || last(x.name).n === b.fq) : null;
      if (inh && b.fq === inh) {
        const bps = this.cx.funcParams(fn);
        this.alias.push(new Map());
        bps.forEach((p, i) => {
          if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
        });
        this.ctorBranch(bc, fn, "mixin", true);
        this.alias.pop();
      } else if (hit && hit.args.length) {
        const a = this.cx.getAnn(hit);
        const bfn = a.call as FuncInfo;
        const bps = this.cx.funcParams(bfn);
        this.alias.push(new Map());
        hit.args.forEach((x, i) => {
          if (i < bps.length && !bps[i].variadic && bps[i].name) {
            this.alias[this.alias.length - 1].set(bps[i].name as string, `(${this.ex(x)})`);
          }
        });
        this.ctorBranch(bc, bfn, "mixin", true);
        this.alias.pop();
      } else {
        const def = (bc.methods.get("#ctor") || []).find(f => {
          const q = this.cx.funcParams(f);
          return f.referenced && q.filter(x => !x.variadic).every(x => x.def);
        });
        if (def) {
          const bps = this.cx.funcParams(def);
          this.alias.push(new Map());
          bps.forEach((p) => {
            if (!p.variadic && p.name && p.def) this.alias[this.alias.length - 1].set(p.name, `(${this.ex(p.def)})`);
          });
          this.ctorBranch(bc, def, "mixin", true);
          this.alias.pop();
        } else this.ctorDefault(bc);
      }
    }
    for (const [name, fd] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      const ft = this.cx.fieldType(c, name);
      const hit = !inh ? fn.decl.ctorInit.find(x => last(x.name).n === name) : null;
      this.line(`$this->${safeJsName(name)} = ${this.fieldInit(ft, fd, hit || null)};`);
    }
    if (!inh || inh === "mixin") {
      this.fnStack.push(fn);
      this.bodyStmts(fn.decl.body || []);
      this.fnStack.pop();
    }
    if (!noAlias) this.alias.pop();
  }

  ctorDefault(c: ClsInfo): void {
    for (let bi = 1; bi < c.bases.length; bi++) {
      this.ctorDefault(this.cx.classes.get(c.bases[bi].fq) as ClsInfo);
    }
    for (const [name, fd] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      this.line(`$this->${safeJsName(name)} = ${this.fieldInit(this.cx.fieldType(c, name), fd, null)};`);
    }
  }

  fieldInit(ft: CppType, fd: VarDecl, hit: CtorInit | null): string {
    if (hit) {
      const a = this.cx.getAnn(hit);
      if (a.call) {
        const fcls = this.cx.stripAll(ft);
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        const init = hit.args.length === 1 && hit.args[0].kind === "initlist" ? (hit.args[0] as InitListExpr).items : hit.args;
        return this.ctorExpr(cn, a.call as FuncInfo, init, a.convs);
      }
      if (hit.args.length) return this.argFor(ft, hit.args[0], null);
    }
    if (fd.init) return this.argFor(ft, fd.init, null);
    if (fd.directInit && fd.directInit.length) {
      const a = this.cx.getAnn(fd);
      if (a.call) {
        const fcls = this.cx.stripAll(ft);
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        return this.ctorExpr(cn, a.call as FuncInfo, fd.directInit, a.convs);
      }
      return this.ex(fd.directInit[0]);
    }
    const a = this.cx.getAnn(fd);
    const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? this.cx.stripAll(ft) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      if (a.call) return this.ctorExpr(cn, a.call as FuncInfo, [], []);
      return `new ${cn}()`;
    }
    if (ft.dims.length) return this.arrayNew(ft);
    if (isBoxLike(ft) || ft.isFunc) return "null";
    return this.zero(ft);
  }

  ctorExpr(cn: string, fn: FuncInfo, args: Expr[], convs: ({ kind: string; fn: FuncInfo } | null)[]): string {
    const ps = this.cx.funcParams(fn);
    if (ps.length === 1 && args.length === 1 && args[0].kind === "initlist") {
      const items = (args[0] as InitListExpr).items.map(x => this.ex(x));
      return `new ${cn}([${items.join(", ")}])`;
    }
    const aa = args.map((x, i) => {
      const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
      if (pt && x.kind === "initlist") {
        return `[${(x as InitListExpr).items.map(y => this.ex(y)).join(", ")}]`;
      }
      return pt ? this.argFor(pt, x, convs[i] || null) : this.ex(x);
    });
    for (let i = args.length; i < ps.length && !ps[i].variadic; i++) {
      aa.push(ps[i].def ? this.ex(ps[i].def as Expr) : "null");
    }
    return `new ${cn}(${aa.join(", ")})`;
  }

  emitDtor(c: ClsInfo): void {
    const fns = c.methods.get("#dtor") || [];
    const fn = fns.find(f => f.referenced);
    const lines = this.withBody(() => {
      if (fn) {
        this.fnStack.push(fn);
        this.bodyStmts(fn.decl.body || []);
        this.fnStack.pop();
      }
      for (const b of c.bases) {
        const bc = this.cx.classes.get(b.fq);
        if (bc && bc.referenced) this.line(`$this->__dtor_${phpClsName(bc)}();`);
      }
    });
    this.line(`function __dtor() {`);
    this.ind += "  ";
    for (const l of lines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  emitMethod(c: ClsInfo, fns: FuncInfo[]): void {
    const use = fns.filter(f => f.referenced && ((f.decl.body || []).length || f.decl.flags.includes("pure")));
    if (!use.length) return;
    const groups = new Map<string, FuncInfo[]>();
    for (const f of use) {
      const k = phpMethodName(f);
      if (!groups.has(k)) groups.set(k, []);
      (groups.get(k) as FuncInfo[]).push(f);
    }
    for (const g of groups.values()) this.emitMethodGroup(c, g);
  }

  emitMethodGroup(c: ClsInfo, use: FuncInfo[]): void {
    const m = phpMethodName(use[0]);
    const pre = use[0].isStatic ? "static " : "";
    void c;
    if (use.length === 1) {
      const fn = use[0];
      const ps = this.cx.funcParams(fn);
      const decl: string[] = [];
      const defs: { nm: string; i: number; def: Expr }[] = [];
      ps.forEach((p, i) => {
        const nm = p.name ? `$${safeJsName(p.name)}` : `$p${i}`;
        if (p.variadic) decl.push(`...${nm}_rest`);
        else if (p.def) { decl.push(`${nm} = null`); defs.push({ nm, i, def: p.def }); }
        else decl.push(nm);
      });
      const lines = this.withBody(() => {
        for (const d of defs) this.line(`if (func_num_args() < ${d.i + 1}) ${d.nm} = ${this.ex(d.def)};`);
        if (fn.decl.flags.includes("pure") && !(fn.decl.body || []).length) {
          this.line(`throw new Exception("pure virtual called");`);
        } else {
          this.fnStack.push(fn);
          this.bodyStmts(fn.decl.body || []);
          this.fnStack.pop();
        }
      });
      this.line(`${pre}function ${m}(${decl.join(", ")}) {`);
      this.ind += "  ";
      for (const l of lines) this.out.push(l);
      this.ind = this.ind.slice(0, -2);
      this.line(`}`);
      return;
    }
    const lines = this.withBody(() => {
      use.forEach((fn, i) => {
        this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(fn, i)}) {`);
        this.ind += "  ";
        const ps = this.cx.funcParams(fn);
        this.alias.push(new Map());
        ps.forEach((p, j) => {
          if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, j));
        });
        this.fnStack.push(fn);
        this.bodyStmts(fn.decl.body || []);
        this.fnStack.pop();
        this.alias.pop();
        this.ind = this.ind.slice(0, -2);
        this.line(`}`);
      });
      this.line(`else { throw new Exception("no matching overload"); }`);
    });
    this.line(`${pre}function ${m}(...$a) {`);
    this.ind += "  ";
    for (const l of lines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  emitFunc(f: FuncInfo): void {
    if (!(f.decl.body || []).length) {
      this.line(`function ${phpFuncName(f)}(...$a) { throw new Exception("unresolved external: ${f.fq}"); }`);
      return;
    }
    const ps = this.cx.funcParams(f);
    const decl: string[] = [];
    const defs: { nm: string; i: number; def: Expr }[] = [];
    ps.forEach((p, i) => {
      const nm = p.name ? `$${safeJsName(p.name)}` : `$p${i}`;
      if (p.variadic) decl.push(`...${nm}_rest`);
      else if (p.def) { decl.push(`${nm} = null`); defs.push({ nm, i, def: p.def }); }
      else decl.push(nm);
    });
    const lines = this.withBody(() => {
      for (const d of defs) this.line(`if (func_num_args() < ${d.i + 1}) ${d.nm} = ${this.ex(d.def)};`);
      this.fnStack.push(f);
      this.bodyStmts(f.decl.body || []);
      this.fnStack.pop();
    });
    this.line(`function ${phpFuncName(f)}(${decl.join(", ")}) {`);
    this.ind += "  ";
    for (const l of lines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  emitGlobal(v: VarInfo): void {
    if (!v.referenced && !v.decl.init && !v.decl.directInit) return;
    const t = v.typeCache as CppType;
    if (v.lifted) {
      this.line(`$${v.mangled} = null;`);
      this.line(`$${v.mangled}_init = false;`);
      return;
    }
    const init = v.decl.init;
    if (init) {
      this.line(`$${v.mangled} = ${this.argFor(t, init, null)};`);
      return;
    }
    if (v.decl.directInit && v.decl.directInit.length) {
      const a = this.cx.getAnn(v.decl);
      const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
      if (a.call && fcls && this.cx.classes.has(fcls)) {
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        this.line(`$${v.mangled} = ${this.ctorExpr(cn, a.call as FuncInfo, v.decl.directInit, a.convs)};`);
      } else {
        this.line(`$${v.mangled} = ${this.ex(v.decl.directInit[0])};`);
      }
      return;
    }
    const a = this.cx.getAnn(v.decl);
    const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      this.line(`$${v.mangled} = ${a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], []) : `new ${cn}()`};`);
    } else if (t.dims.length) {
      this.line(`$${v.mangled} = ${this.arrayNew(t)};`);
    } else if (t.isFunc || isBoxLike(t)) {
      this.line(`$${v.mangled} = null;`);
    } else if (v.storage === "bbox" || v.storage === "boxed") {
      this.line(`$${v.mangled} = ["v" => ${this.zero(t)}];`);
    } else {
      this.line(`$${v.mangled} = ${this.zero(t)};`);
    }
  }

  stmt(s: Stmt): void {
    switch (s.kind) {
      case "compound":
        if (s.sameScope) {
          for (const x of s.stmts) this.stmt(x);
          return;
        }
        this.block("", () => { for (const x of s.stmts) this.stmt(x); });
        return;
      case "expr": {
        if (s.expr.kind === "delete") return;
        this.line(`${this.ex(s.expr)};`);
        return;
      }
      case "decl":
        this.declStmt(s.decl);
        return;
      case "if": {
        if (s.cond.kind === "var") {
          const vd = s.cond;
          const v = this.cx.getAnn(vd).var as VarInfo;
          this.block("", () => {
            this.varDeclFor(vd, v, v.typeCache as CppType);
            this.block(`if (${this.localName(v)})`, () => this.stmt(s.then));
            if (s.els) this.block(`else`, () => this.stmt(s.els as Stmt));
          });
          return;
        }
        this.block(`if (${this.ex(s.cond)})`, () => this.stmt(s.then));
        if (s.els) this.block(`else`, () => this.stmt(s.els as Stmt));
        return;
      }
      case "switch":
        if (s.cond.kind === "var") {
          const vd = s.cond;
          const v = this.cx.getAnn(vd).var as VarInfo;
          this.block("", () => {
            this.varDeclFor(vd, v, v.typeCache as CppType);
            this.block(`switch (${this.localName(v)})`, () => this.stmt(s.body));
          });
          return;
        }
        this.block(`switch (${this.ex(s.cond)})`, () => this.stmt(s.body));
        return;
      case "case":
        this.line(s.value ? `case ${this.constStr(s.value)}:` : `default:`);
        this.ind += "  ";
        this.stmt(s.stmt);
        this.ind = this.ind.slice(0, -2);
        return;
      case "while":
        if (s.cond.kind === "var") {
          const vd = s.cond;
          const v = this.cx.getAnn(vd).var as VarInfo;
          this.block("", () => {
            this.varDeclFor(vd, v, v.typeCache as CppType);
            this.block(`while (${this.localName(v)})`, () => this.stmt(s.body));
          });
          return;
        }
        this.block(`while (${this.ex(s.cond)})`, () => this.stmt(s.body));
        return;
      case "do":
        this.line(`do {`);
        this.ind += "  ";
        this.stmt(s.body);
        this.ind = this.ind.slice(0, -2);
        this.line(`} while (${this.ex(s.cond)});`);
        return;
      case "for": {
        if (s.init && s.init.kind === "decl") {
          const d = (s.init as DeclStmt).decl;
          if (d.kind === "var") {
            const v = this.cx.getAnn(d).var as VarInfo;
            const save = this.out;
            const lines: string[] = [];
            this.out = lines;
            this.varDeclFor(d, v, v.typeCache as CppType);
            this.out = save;
            const head = lines.length === 1 ? lines[0].trim().replace(/;$/, "") : `$${v.mangled} = null`;
            this.block(`for (${head}; ${s.cond ? this.ex(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
            return;
          }
        }
        if (s.init) this.stmt(s.init);
        this.block(`for (; ${s.cond ? this.ex(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
        return;
      }
      case "rangefor":
        this.rangeFor(s);
        return;
      case "break":
        this.line(`break;`);
        return;
      case "continue":
        this.line(`continue;`);
        return;
      case "label":
        this.line(`${s.label}:`);
        this.ind += "  ";
        this.stmt(s.stmt);
        this.ind = this.ind.slice(0, -2);
        return;
      case "return": {
        if (!s.expr) {
          this.line(`return;`);
          return;
        }
        this.line(`return ${this.returnEx(s, s.expr)};`);
        return;
      }
      case "try": {
        this.needThrow = true;
        const en = `$e${this.exStack.length}`;
        this.exStack.push(en);
        this.line(`try {`);
        this.ind += "  ";
        this.stmt(s.body);
        this.ind = this.ind.slice(0, -2);
        this.line(`} catch (CtjThrow ${en}) {`);
        this.ind += "  ";
        this.line(`$v = ${en}->v;`);
        s.handlers.forEach((h, i) => {
          const pre = i === 0 ? "if" : "else if";
          if (h.ellipsis) {
            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
          } else if (h.vdecl) {
            const v = this.cx.getAnn(h.vdecl).var as VarInfo;
            const t = v.typeCache as CppType;
            const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fq && this.cx.classes.has(fq)) {
              const cn = phpClsName(this.cx.classes.get(fq) as ClsInfo);
              this.block(`${pre} ($v instanceof ${cn})`, () => {
                this.line(`$${v.mangled} = $v;`);
                this.stmt(h.body);
              });
            } else {
              this.block(pre === "if" ? "if (true)" : "else", () => {
                this.line(`$${v.mangled} = $v;`);
                this.stmt(h.body);
              });
            }
          } else {
            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
          }
        });
        if (!s.handlers.some(h => h.ellipsis)) this.line(`else { throw ${en}; }`);
        this.ind = this.ind.slice(0, -2);
        this.line(`}`);
        this.exStack.pop();
        return;
      }
      case "throw":
        this.needThrow = true;
        if (!s.expr) {
          const en = this.exStack[this.exStack.length - 1] || "$e0";
          this.line(`throw ${en};`);
        } else {
          this.line(`throw new CtjThrow(${this.ex(s.expr)});`);
        }
        return;
      case "goto":
        this.cx.fail("goto is not supported", s);
        return;
      case "null":
        return;
    }
  }

  declStmt(d: Decl): void {
    switch (d.kind) {
      case "var": {
        const v = this.cx.getAnn(d).var as VarInfo;
        if (!v) return;
        this.varDeclFor(d, v, v.typeCache as CppType);
        return;
      }
      case "func":
        return;
      case "class": {
        const c = [...this.cx.classes.values()].find(x => x.decl === d);
        if (c && c.referenced && !c.isLambda) this.emitClass(c);
        return;
      }
      case "linkage":
        for (const x of d.decls) this.declStmt(x);
        return;
      default:
        return;
    }
  }

  varDeclFor(vd: VarDecl, v: VarInfo, t: CppType): void {
    if (vd.flags.includes("extern")) return;
    if (v.lifted) {
      this.usedGlobals.add(`$${v.mangled}`);
      this.usedGlobals.add(`$${v.mangled}_init`);
      const init = this.varInitEx(vd, v, t);
      this.line(`if (!$${v.mangled}_init) { $${v.mangled} = ${init}; $${v.mangled}_init = true; }`);
      const top = this.alias.length ? this.alias[this.alias.length - 1] : null;
      if (top) top.set(v.short, `$${v.mangled}`);
      return;
    }
    const nm = v.isGlobal ? `$${v.mangled}` : this.localName(v);
    const init = this.varInitEx(vd, v, t);
    if (v.storage === "bbox" || v.storage === "boxed") this.line(`${nm} = ["v" => ${init}];`);
    else this.line(`${nm} = ${init};`);
  }

  varInitEx(vd: VarDecl, v: VarInfo, t: CppType): string {
    const a = this.cx.getAnn(vd);
    const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (vd.init) {
      if (fcls && this.cx.classes.has(fcls) && a.call) {
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        const items = vd.init.kind === "initlist" ? (vd.init as InitListExpr).items : [vd.init];
        return this.ctorExpr(cn, a.call as FuncInfo, items, a.convs);
      }
      if (t.dims.length && vd.init.kind === "initlist") {
        return this.arrayInit(t, (vd.init as InitListExpr).items);
      }
      return this.argFor(t, vd.init, null);
    }
    if (vd.directInit && vd.directInit.length) {
      if (fcls && this.cx.classes.has(fcls) && a.call) {
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        return this.ctorExpr(cn, a.call as FuncInfo, vd.directInit, a.convs);
      }
      return this.ex(vd.directInit[0]);
    }
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      return a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], []) : `new ${cn}()`;
    }
    if (t.dims.length) return this.arrayNew(t);
    if (t.isFunc || isBoxLike(t)) return "null";
    return this.zero(t);
  }

  arrayInit(t: CppType, items: Expr[]): string {
    const et = new CppType(t.name);
    et.segs = t.segs;
    et.ptr = t.ptr;
    et.ref = t.ref;
    et.dims = t.dims.slice(1);
    return `[${items.map(x => this.argFor(et, x, null)).join(", ")}]`;
  }

  arrayNew(t: CppType): string {
    if (t.dims[0] < 0 || typeof t.dims[0] !== "number") return "[]";
    const n = t.dims[0];
    const et = new CppType(t.name);
    et.segs = t.segs;
    et.ptr = t.ptr;
    et.ref = t.ref;
    et.dims = t.dims.slice(1);
    if (et.dims.length) {
      const inner = this.arrayNew(et).replace(/\b0\b/, "0");
      void inner;
      return `array_fill(0, ${n}, ${this.arrayNew(et)})`;
    }
    const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      void cn;
      const parts: string[] = [];
      for (let i = 0; i < Math.min(n, 64); i++) parts.push(`new ${cn}()`);
      if (n <= 64) return `[${parts.join(", ")}]`;
      return `array_map(function () { return new ${cn}(); }, range(1, ${n}))`;
    }
    if (isBoxLike(et) || et.isFunc) return `array_fill(0, ${n}, null)`;
    return `array_fill(0, ${n}, ${this.zero(et)})`;
  }

  rangeFor(s: RangeFor): void {
    const v = this.cx.getAnn(s.vdecl).var as VarInfo;
    const t = v.typeCache as CppType;
    const rt = this.cx.getAnn(s.range).t as CppType;
    const ri = this.rangeN++;
    if (rt.dims.length) {
      const arr = this.complex(this.ex(s.range), s.range);
      const idx = `$i${ri}`;
      const elem = `${arr}[${idx}]`;
      this.block(`for (${idx} = 0; ${idx} < count(${arr}); ${idx}++)`, () => {
        this.rangeVar(v, t, elem, arr, idx);
        this.stmt(s.body);
      });
      return;
    }
    const info = this.cx.getAnn(s).range as { beginFn: FuncInfo; endFn: FuncInfo; neFn: FuncInfo; incFn: FuncInfo; starFn: FuncInfo };
    const obj = this.complex(this.ex(s.range), s.range);
    const b = `$b${ri}`;
    const e = `$e${ri}`;
    const bm = phpMethodName(info.beginFn);
    const em = phpMethodName(info.endFn);
    const nm = phpMethodName(info.neFn);
    const im = phpMethodName(info.incFn);
    const sm = phpMethodName(info.starFn);
    this.block(`for (${b} = ${obj}->${bm}(), ${e} = ${obj}->${em}(); ${b}->${nm}(${e}); ${b}->${im}())`, () => {
      this.rangeVar(v, t, `${b}->${sm}()`, "", "");
      this.stmt(s.body);
    });
  }

  rangeVar(v: VarInfo, t: CppType, elem: string, arr: string, idx: string): void {
    const nm = this.localName(v);
    if (v.storage === "box") {
      if (arr) this.line(`${nm} = ["a" => ${arr}, "i" => ${idx}];`);
      else this.line(`${nm} = ${elem};`);
      return;
    }
    const fqs = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fqs && this.cx.classes.has(fqs)) {
      const cn = phpClsName(this.cx.classes.get(fqs) as ClsInfo);
      this.line(`${nm} = new ${cn}(${elem});`);
      return;
    }
    if (arr) this.line(`${nm} = ${elem};`);
    else this.line(`${nm} = (${elem})["a"][(${elem})["i"]];`);
  }

  ex(e: Expr): string {
    switch (e.kind) {
      case "lit": return this.lit(e);
      case "id": return this.exId(e);
      case "this": return "$this";
      case "call": return this.exCall(e);
      case "index": return this.exIndex(e);
      case "member": return this.exMember(e);
      case "unary": return this.exUnary(e);
      case "binary": return this.exBinary(e);
      case "assign": return this.exAssign(e);
      case "cond": return `(${this.ex(e.c)} ? ${this.ex(e.a)} : ${this.ex(e.b)})`;
      case "new": return this.exNew(e);
      case "delete": return "null";
      case "cast": return this.exCast(e);
      case "sizeof": {
        const t = this.sizeofType(e);
        return String(constSizeof(this.cx, t, new Set()));
      }
      case "typeid": return this.exTypeid(e);
      case "lambda": return this.exLambda(e);
      case "initlist": return `[${e.items.map(x => this.ex(x)).join(", ")}]`;
      case "stmtexpr": {
        const save = this.out;
        const lines: string[] = [];
        this.out = lines;
        this.ind += "  ";
        for (const s of e.stmts) this.stmt(s);
        this.ind = this.ind.slice(0, -2);
        this.out = save;
        return `(function () {\n${lines.join("\n")}\n${this.ind}})()`;
      }
      case "noexcept": return "true";
    }
  }

  lit(e: LitExpr): string {
    switch (e.lkind) {
      case "int": case "float": return String(parseNumber(e.value));
      case "char": return String(parseChar(e.value));
      case "bool": return e.value;
      case "null": return "null";
      case "string": return this.strLit(e.value);
      default: return "0";
    }
  }

  strLit(raw: string): string {
    const codes: number[] = [];
    const inner = raw.slice(1, -1);
    for (let i = 0; i < inner.length; i++) {
      const ch = inner[i];
      if (ch === "\\" && i + 1 < inner.length) {
        const n = inner[++i];
        if (n === "n") codes.push(10);
        else if (n === "t") codes.push(9);
        else if (n === "r") codes.push(13);
        else if (n === "0") codes.push(0);
        else if (n === "a") codes.push(7);
        else if (n === "b") codes.push(8);
        else if (n === "f") codes.push(12);
        else if (n === "v") codes.push(11);
        else if (n === "\\") codes.push(92);
        else if (n === "'") codes.push(39);
        else if (n === '"') codes.push(34);
        else if (n === "x") {
          codes.push(parseInt(inner.substr(i + 1, 2), 16) || 0);
          i += 2;
        } else if (n >= "0" && n <= "7") {
          let o = n;
          for (let k = 0; k < 2 && i + 1 < inner.length && inner[i + 1] >= "0" && inner[i + 1] <= "7"; k++) o += inner[++i];
          codes.push(parseInt(o, 8) & 255);
        } else codes.push(n.charCodeAt(0));
      } else if (ch === '"') {
        continue;
      } else if (ch.charCodeAt(0) >= 128) {
        const bytes = unescape(encodeURIComponent(ch));
        for (let k = 0; k < bytes.length; k++) codes.push(bytes.charCodeAt(k));
      } else codes.push(ch.charCodeAt(0));
    }
    codes.push(0);
    return `[${codes.join(", ")}]`;
  }

  exId(e: IdExpr): string {
    const a = this.cx.getAnn(e);
    const s = a.sym;
    if (!s) this.cx.fail("unresolved name", e);
    if (s.k === "enumval") {
      const vals = this.cx.enumValues(s.e);
      return String(vals.get(s.item) ?? 0);
    }
    if (s.k === "func") {
      const f = s.fns[0];
      if (f.isMethod && !f.isStatic) this.cx.fail("member function value is not supported", e);
      if (f.isMethod) {
        const cls = this.cx.classes.get(f.cls as string) as ClsInfo;
        return `["${phpClsName(cls)}", "${phpMethodName(f)}"]`;
      }
      return `"${phpFuncName(f)}"`;
    }
    if (s.k !== "var") this.cx.fail("type used as value", e);
    const v = s.v;
    const nm = this.varName(v, a.needsThis);
    const t = v.typeCache as CppType;
    if (v.storage === "box") {
      if (t.isFunc) return nm;
      if (t.ref) return `${this.paren(nm)}["a"][${this.paren(nm)}["i"]]`;
      return nm;
    }
    if (v.storage === "bbox" || v.storage === "boxed") return `${this.paren(nm)}["v"]`;
    return nm;
  }

  paren(s: string): string {
    return /^\$[A-Za-z_][\w$]*(->[A-Za-z_][\w$]*|::\$[A-Za-z_][\w$]*)*$/.test(s) ? s : `(${s})`;
  }

  complex(s: string, e: Expr): string {
    if (this.isSimple(e)) return s;
    const t = this.tmp();
    return `(${t} = ${s}, ${t})`;
  }

  isSimple(e: Expr): boolean {
    switch (e.kind) {
      case "lit": case "id": case "this": return true;
      case "member": return this.isSimple(e.obj);
      case "index": return this.isSimple(e.arr) && this.isSimple(e.idx);
      case "unary": return (e.op === "*" || e.op === "&") && this.isSimple(e.arg);
      case "cast": return !this.cx.getAnn(e).call && !this.cx.getAnn(e).conv && this.isSimple(e.arg);
      default: return false;
    }
  }

  exBox(e: Expr): string {
    const et = this.cx.getAnn(e).t as CppType;
    if (et && et.ptr > 0 && !et.isFunc) return this.ex(e);
    switch (e.kind) {
      case "id": {
        const s = this.cx.getAnn(e).sym;
        if (!s || s.k !== "var") return this.ex(e);
        const v = s.v;
        const t = v.typeCache as CppType;
        if (t.isFunc) return this.ex(e);
        const nm = this.varName(v, this.cx.getAnn(e).needsThis);
        if (v.storage === "box") return nm;
        if (v.storage === "bbox") return `${this.paren(nm)}["v"]`;
        if (v.storage === "boxed") return `["a" => ${nm}, "i" => "v"]`;
        if (t.dims.length) return `["a" => ${nm}, "i" => 0]`;
        return `["a" => [${nm}], "i" => 0]`;
      }
      case "member": {
        const m = this.cx.getAnn(e);
        const f = m.sym;
        if (!f || f.k !== "var" || !f.v.isField) return `["a" => [${this.ex(e)}], "i" => 0]`;
        const v = f.v;
        const fname = safeJsName(v.short);
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        if (v.isStatic) return `["a" => ${phpClsName(cls)}, "i" => "${fname}"]`;
        const o = this.objOf(e.obj);
        if (this.cx.fieldType(cls, v.short).ref) return `${this.paren(o)}->${fname}`;
        return `["a" => ${o}, "i" => "${fname}"]`;
      }
      case "index": {
        const m = this.cx.getAnn(e);
        if (m.call) return this.ex(e);
        const at = this.cx.getAnn(e.arr).t as CppType;
        if (at.ptr > 0) {
          const p = this.complex(this.ex(e.arr), e.arr);
          const pp = this.paren(p);
          if (this.isZeroLit(e.idx)) return p;
          return `["a" => ${pp}["a"], "i" => ${pp}["i"] + (${this.ex(e.idx)})]`;
        }
        const arr = this.complex(this.ex(e.arr), e.arr);
        return `["a" => ${arr}, "i" => (${this.ex(e.idx)})]`;
      }
      case "unary":
        if (e.op === "*") return this.ex(e.arg);
        if (e.op === "&") return this.exBox(e.arg);
        return `["a" => [${this.ex(e)}], "i" => 0]`;
      case "call": case "this":
        if (e.kind === "this") return `["a" => [$this], "i" => 0]`;
        return this.ex(e);
      case "lit":
        if (e.lkind === "string") return `["a" => ${this.lit(e)}, "i" => 0]`;
        return `["a" => [${this.ex(e)}], "i" => 0]`;
      case "cond":
        return `(${this.ex(e.c)} ? ${this.exBox(e.a)} : ${this.exBox(e.b)})`;
      case "binary":
        if (e.op === ",") return `(${this.ex(e.l)}, ${this.exBox(e.r)})`;
        return `["a" => [${this.ex(e)}], "i" => 0]`;
      default:
        return `["a" => [${this.ex(e)}], "i" => 0]`;
    }
  }

  lvalue(e: Expr): string {
    switch (e.kind) {
      case "id": {
        const s = this.cx.getAnn(e).sym;
        if (!s || s.k !== "var") this.cx.fail("not assignable", e);
        const v = s.v;
        const t = v.typeCache as CppType;
        const nm = this.varName(v, this.cx.getAnn(e).needsThis);
        if (v.storage === "box" && t.ref) return `${this.paren(nm)}["a"][${this.paren(nm)}["i"]]`;
        if (v.storage === "bbox" || v.storage === "boxed") return `${this.paren(nm)}["v"]`;
        return nm;
      }
      case "member": {
        const m = this.cx.getAnn(e);
        const f = m.sym;
        if (!f || f.k !== "var" || !f.v.isField) this.cx.fail("not assignable", e);
        const v = f.v;
        const fname = safeJsName(v.short);
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        if (v.isStatic) return `${phpClsName(cls)}::$${fname}`;
        let o = this.objOf(e.obj);
        if (m.arrowCall) o = `(${this.paren(o)}->${phpMethodName(m.arrowCall as FuncInfo)}())`;
        if (this.cx.fieldType(cls, v.short).ref) {
          const t = this.tmp();
          return `(${t} = ${this.paren(o)}->${fname}, ${t}["a"][${t}["i"]])`;
        }
        return `${this.paren(o)}->${fname}`;
      }
      case "index": {
        const m = this.cx.getAnn(e);
        if (m.call) {
          const t = this.tmp();
          return `(${t} = ${this.ex(e)}, ${t}["a"][${t}["i"]])`;
        }
        const at = this.cx.getAnn(e.arr).t as CppType;
        if (at.ptr > 0) {
          const p = this.complex(this.ex(e.arr), e.arr);
          const pp = this.paren(p);
          if (this.isZeroLit(e.idx)) return `${pp}["a"][${pp}["i"]]`;
          return `${pp}["a"][${pp}["i"] + (${this.ex(e.idx)})]`;
        }
        const arr = this.complex(this.ex(e.arr), e.arr);
        return `${this.paren(arr)}[${this.ex(e.idx)}]`;
      }
      case "unary": {
        if (e.op !== "*") this.cx.fail("not assignable", e);
        const p = this.complex(this.ex(e.arg), e.arg);
        const pp = this.paren(p);
        return `${pp}["a"][${pp}["i"]]`;
      }
      case "call": {
        const t = this.tmp();
        return `(${t} = ${this.ex(e)}, ${t}["a"][${t}["i"]])`;
      }
      default:
        this.cx.fail("not assignable", e);
        return "";
    }
  }

  objOf(e: Expr): string {
    const t = this.cx.getAnn(e).t as CppType;
    const s = this.complex(this.ex(e), e);
    if (e.kind === "this") return s;
    if (t && t.ptr > 0) {
      const p = this.paren(s);
      return `(${p}["a"][${p}["i"]])`;
    }
    return s;
  }

  deref(e: Expr): string {
    const s = this.complex(this.ex(e), e);
    const p = this.paren(s);
    return `${p}["a"][${p}["i"]]`;
  }

  exAddr(e: Expr): string {
    if (e.kind === "id") {
      const s = this.cx.getAnn(e).sym;
      if (s && s.k === "var" && s.v.storage === "bbox") {
        const nm = this.varName(s.v, this.cx.getAnn(e).needsThis);
        return `["a" => ${nm}, "i" => "v"]`;
      }
    }
    return this.exBox(e);
  }

  splitLhs(e: Expr): boolean {
    if (e.kind === "call") return true;
    if (e.kind === "index" && this.cx.getAnn(e).call) return true;
    return false;
  }

  pbox(s: string, e: Expr, t: CppType): string {
    const x = this.complex(s, e);
    if (t.dims.length && !t.isBox()) return `["a" => ${x}, "i" => 0]`;
    return x;
  }

  isZeroLit(e: Expr): boolean {
    return e.kind === "lit" && (e.lkind === "null" || ((e.lkind === "int" || e.lkind === "char") && parseNumber(e.value) === 0));
  }

  argFor(p: CppType, x: Expr, conv: { kind: string; fn: FuncInfo } | null): string {
    if (conv && conv.kind === "ctor") {
      const fq = this.cx.stripAll(p);
      const cn = phpClsName(this.cx.classes.get(fq) as ClsInfo);
      const cps = this.cx.funcParams(conv.fn);
      const inner = cps.length ? this.argFor(cps[0].type, x, null) : this.ex(x);
      return `new ${cn}(${inner})`;
    }
    if (conv && conv.kind === "conv") {
      return `${this.paren(this.objOf(x))}->${phpMethodName(conv.fn)}()`;
    }
    const at = this.cx.getAnn(x).t as CppType;
    const pB = isBoxLike(p);
    const aB = at ? isBoxLike(at) : false;
    if (p.dims.length && x.kind === "initlist") {
      return this.arrayInit(p, (x as InitListExpr).items);
    }
    if (pB && !aB) {
      if (!at || at.name === "__null") return "null";
      if (this.isZeroLit(x)) return "null";
      if (at.isFunc) return this.ex(x);
      return this.exBox(x);
    }
    if (!pB && aB) {
      if (at && at.name === "__null" && coreName(p) === "bool") return "false";
      // Reading a reference variable already yields the value it refers to;
      // only an expression that produces a fat pointer needs one more step.
      if (x.kind === "id") {
        const sym = this.cx.getAnn(x).sym;
        if (sym && sym.k === "var" && sym.v.typeCache && sym.v.typeCache.ref) return this.ex(x);
      }
      return this.deref(x);
    }
    if (coreName(p) === "bool" && at && !isNumericName(coreName(at)) && !this.cx.enums.has(this.cx.stripAll(at)) && at.name !== "__null" && !at.isBox()) {
      return `(${this.ex(x)} !== null)`;
    }
    if (p.ptr > 0 && at && at.dims.length && !at.isBox()) return this.exBox(x);
    if (pB && aB) {
      if (at && at.ref) return this.exBox(x);
      return this.ex(x);
    }
    if (at && at.name === "__null" && isNumericName(coreName(p))) return "0";
    if (isIntegerName(coreName(p)) && at && (coreName(at) === "float" || coreName(at) === "double")) {
      return `(int)(${this.ex(x)})`;
    }
    if (coreName(p) === "bool" && at && at.isBox() && !at.isFunc) return `(${this.ex(x)} !== null)`;
    return this.ex(x);
  }

  returnEx(s: ReturnStmt, x: Expr): string {
    const a = this.cx.getAnn(s);
    if (a.call) {
      const scopeFn = this.curFn();
      const ret = scopeFn ? this.cx.funcRet(scopeFn) : CppType.basic("void");
      const fq = this.cx.stripAll(ret);
      const cn = phpClsName(this.cx.classes.get(fq) as ClsInfo);
      const items = x.kind === "initlist" ? (x as InitListExpr).items : [x];
      return this.ctorExpr(cn, a.call as FuncInfo, items, a.convs);
    }
    const scopeFn = this.curFn();
    if (!scopeFn) return this.ex(x);
    const ret = this.cx.funcRet(scopeFn);
    if (ret.name === "void") return this.ex(x);
    return this.argFor(ret, x, null);
  }

  exCall(e: CallExpr): string {
    const a = this.cx.getAnn(e);
    if (typeof a.call === "object" && a.call !== null && "builtin" in (a.call as object)) {
      return this.exBuiltin((a.call as { builtin: string }).builtin, e);
    }
    const fn = a.call as FuncInfo | null;
    if (!fn) {
      if (e.fn.kind === "member") {
        const m = e.fn as MemberExpr;
        const o = this.objOf(m.obj);
        const ma = this.cx.getAnn(m);
        const f = ma.sym;
        if (f && f.k === "var" && f.v.isField) {
          return `${this.paren(o)}->${safeJsName(f.v.short)}(${e.args.map(x => this.ex(x)).join(", ")})`;
        }
      }
      if (e.fn.kind === "id") return `${this.ex(e.fn)}(${e.args.map(x => this.ex(x)).join(", ")})`;
      return `(${this.ex(e.fn)})(${e.args.map(x => this.ex(x)).join(", ")})`;
    }
    const ps = this.cx.funcParams(fn);
    const aa: string[] = [];
    e.args.forEach((x, i) => {
      const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
      if (pt && x.kind === "initlist") {
        aa.push(`[${(x as InitListExpr).items.map(y => this.ex(y)).join(", ")}]`);
      } else {
        aa.push(pt ? this.argFor(pt, x, a.convs[i] || null) : this.ex(x));
      }
    });
    for (let i = e.args.length; i < ps.length && !ps[i].variadic; i++) {
      aa.push(ps[i].def ? this.ex(ps[i].def as Expr) : "null");
    }
    let s: string;
    if (!fn.isMethod) {
      s = `${phpFuncName(fn)}(${aa.join(", ")})`;
    } else if (fn.isStatic) {
      const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
      s = `${phpClsName(cls)}::${phpMethodName(fn)}(${aa.join(", ")})`;
    } else if (e.fn.kind === "member") {
      let o = this.objOf((e.fn as MemberExpr).obj);
      const ma = this.cx.getAnn(e.fn);
      if (ma.arrowCall) o = `(${this.paren(o)}->${phpMethodName(ma.arrowCall as FuncInfo)}())`;
      if ((e.fn as MemberExpr).qual.length) {
        const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
        const qn = phpClsName(cls);
        s = `(Closure::bind(function (...$a) { return $this->${phpMethodName(fn)}(...$a); }, ${o}, ${qn}::class))(${aa.join(", ")})`;
      } else {
        s = `${this.paren(o)}->${phpMethodName(fn)}(${aa.join(", ")})`;
      }
    } else if (e.fn.kind === "id") {
      if ((e.fn as IdExpr).parts.length > 1) this.cx.warn("explicit qualification is approximated", e.fn);
      s = `$this->${phpMethodName(fn)}(${aa.join(", ")})`;
    } else {
      s = `${this.paren(this.objOf(e.fn))}->${phpMethodName(fn)}(${aa.join(", ")})`;
    }
    if (a.copyCtor) {
      const ret = this.cx.funcRet(fn);
      const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo);
      s = `new ${cn}(${s})`;
    }
    return s;
  }

  exBuiltin(name: string, e: CallExpr): string {
    if (name === "__ctj_php") {
      if (!e.args.length || e.args[0].kind !== "lit" || (e.args[0] as LitExpr).lkind !== "string") {
        this.cx.fail("__ctj_php needs a string literal", e);
      }
      let tpl = ((e.args[0] as LitExpr).value).slice(1, -1);
      for (let i = 1; i < e.args.length; i++) {
        tpl = tpl.split(`$${i}`).join(`(${this.ex(e.args[i])})`);
      }
      return `(${tpl})`;
    }
    if (name === "__ctj_js") return "null";
    if (name === "__builtin_expect" || name === "__builtin_expect_with_probability") return this.ex(e.args[0]);
    if (name === "__builtin_choose_expr") {
      const c = constEval(this.cx, e.args[0], rootScope());
      return this.ex(e.args[c ? 1 : 2]);
    }
    if (name === "__builtin_constant_p") {
      const c = constEval(this.cx, e.args[0], rootScope());
      return c === null ? "0" : "1";
    }
    if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
      return `(function () { throw new Exception("${name}"); })()`;
    }
    if (isMathBuiltin(name)) {
      let m = name.slice("__builtin_".length);
      if (m === "nan" || m === "nanf" || m === "nans") return "NAN";
      if (m === "inf" || m === "inff" || m === "huge_val") return "INF";
      if (m === "cbrt") return `pow(${this.ex(e.args[0])}, 1/3)`;
      if (m === "fmin") return `min(${e.args.map(x => this.ex(x)).join(", ")})`;
      if (m === "fmax") return `max(${e.args.map(x => this.ex(x)).join(", ")})`;
      if (m === "copysign") {
        const x = this.ex(e.args[0]);
        const y = this.ex(e.args[1]);
        return `(((${y}) < 0 ? -1 : 1) * abs(${x}))`;
      }
      if (m === "trunc") return `(int)(${this.ex(e.args[0])})`;
      if (m.endsWith("f")) m = m.slice(0, -1);
      if (m === "fabs") m = "abs";
      return `${m}(${e.args.map(x => this.ex(x)).join(", ")})`;
    }
    if (name === "__builtin_clz") {
      const x = this.ex(e.args[0]);
      return `((${x}) === 0 ? 32 : 32 - strlen(decbin((${x}) & 0xffffffff)))`;
    }
    if (name === "__builtin_ctz") {
      const x = this.ex(e.args[0]);
      return `(function ($v) { if ($v === 0) return 32; $b = decbin($v & 0xffffffff); return strlen($b) - 1 - strrpos($b, "1"); })(${x})`;
    }
    if (name === "__builtin_popcount") {
      const x = this.ex(e.args[0]);
      return `substr_count(decbin((${x}) & 0xffffffff), "1")`;
    }
    if (name === "__builtin_ffs") {
      const x = this.ex(e.args[0]);
      return `(function ($v) { $v = $v & 0xffffffff; if ($v === 0) return 0; return 32 - (32 - strlen(decbin($v & -$v))); })(${x})`;
    }
    if (name === "__builtin_parity") {
      const x = this.ex(e.args[0]);
      return `(substr_count(decbin((${x}) & 0xffffffff), "1") & 1)`;
    }
    if (name === "__builtin_bswap16") {
      const x = this.ex(e.args[0]);
      return `((((${x}) & 255) << 8) | (((${x}) >> 8) & 255))`;
    }
    if (name === "__builtin_bswap32") {
      const x = this.ex(e.args[0]);
      return `((((${x}) & 255) << 24) | (((${x}) & 0xff00) << 8) | (((${x}) >> 8) & 0xff00) | (((${x}) >> 24) & 255))`;
    }
    if (name === "__builtin_bswap64") {
      const x = this.ex(e.args[0]);
      return `((((${x}) & 255) << 56) | (((${x}) & 0xff00) << 40) | (((${x}) & 0xff0000) << 24) | (((${x}) & 0xff000000) << 8) | (((${x}) >> 8) & 0xff000000) | (((${x}) >> 24) & 0xff0000) | (((${x}) >> 40) & 0xff00) | (((${x}) >> 56) & 255))`;
    }
    if (name === "__builtin_alloca") return `["a" => array_fill(0, ${this.ex(e.args[0])}, 0), "i" => 0]`;
    if (name === "__builtin_offsetof") return "0";
    if (name === "__builtin_types_compatible_p") {
      const x = this.cx.getAnn(e.args[0]).t as CppType;
      const y = this.cx.getAnn(e.args[1]).t as CppType;
      return x.key() === y.key() ? "1" : "0";
    }
    if (name === "__builtin_add_overflow" || name === "__builtin_sub_overflow" || name === "__builtin_mul_overflow") return "false";
    if (name === "__builtin_frame_address" || name === "__builtin_return_address" || name === "__builtin_extract_return_addr") return "null";
    if (name === "__builtin_FILE" || name === "__builtin_FUNCTION") return this.strLit(`"${e.file}"`);
    if (name === "__builtin_LINE") return String(e.line);
    return `(function () { throw new Exception("unresolved ${name}"); })()`;
  }

  exIndex(e: IndexExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const ps = this.cx.funcParams(fn);
      const o = this.objOf(e.arr);
      const aa = this.argFor(ps[0].type, e.idx, a.convs[0] || null);
      let s = `${this.paren(o)}->${phpMethodName(fn)}(${aa})`;
      if (a.copyCtor) {
        const ret = this.cx.funcRet(fn);
        const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo);
        s = `new ${cn}(${s})`;
      }
      return s;
    }
    const at = this.cx.getAnn(e.arr).t as CppType;
    if (at.ptr > 0) {
      const p = this.complex(this.ex(e.arr), e.arr);
      const pp = this.paren(p);
      if (this.isZeroLit(e.idx)) return `${pp}["a"][${pp}["i"]]`;
      return `${pp}["a"][${pp}["i"] + (${this.ex(e.idx)})]`;
    }
    const arr = this.complex(this.ex(e.arr), e.arr);
    return `${this.paren(arr)}[${this.ex(e.idx)}]`;
  }

  exMember(e: MemberExpr): string {
    const a = this.cx.getAnn(e);
    const f = a.sym;
    if (!f || f.k !== "var" || !f.v.isField) this.cx.fail("bad member", e);
    const v = f.v;
    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
    if (v.isStatic) return `${phpClsName(cls)}::$${safeJsName(v.short)}`;
    let o = this.objOf(e.obj);
    if (a.arrowCall) o = `(${this.paren(o)}->${phpMethodName(a.arrowCall as FuncInfo)}())`;
    const fname = this.fieldName(cls, v.short);
    if (this.cx.fieldType(cls, v.short).ref) {
      const t = this.tmp();
      return `(${t} = ${this.paren(o)}->${fname}, ${t}["a"][${t}["i"]])`;
    }
    return `${this.paren(o)}->${fname}`;
  }

  exUnary(e: UnaryExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const o = this.objOf(e.arg);
      if (e.op === "++" || e.op === "--") {
        const ps = this.cx.funcParams(fn);
        const post = ps.length === 1 ? "(0)" : "()";
        return `${this.paren(o)}->${phpMethodName(fn)}${post}`;
      }
      return `${this.paren(o)}->${phpMethodName(fn)}()`;
    }
    if (e.op === "*") {
      const at = this.cx.getAnn(e.arg).t as CppType;
      if (at.isFunc) return this.ex(e.arg);
      if (e.arg.kind === "unary" && incKind(e.arg) && isPostfix(e.arg)) {
        const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
        const pp = this.paren(p);
        return `${pp}["a"][${pp}["i"]${incKind(e.arg)}]`;
      }
      if (e.arg.kind === "unary" && (e.arg.op === "++" || e.arg.op === "--")) {
        const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
        const pp = this.paren(p);
        const op = e.arg.op === "++" ? "++" : "--";
        return `${pp}["a"][${op}${pp}["i"]]`;
      }
      return this.deref(e.arg);
    }
    if (e.op === "&") return this.exAddr(e.arg);
    const inc = incKind(e);
    if (inc) {
      const post = isPostfix(e);
      const at = this.cx.getAnn(e.arg).t as CppType;
      if (this.splitLhs(e.arg)) {
        const t = this.tmp();
        const inner = at.ptr > 0 && !at.isFunc ? `${t}["i"]` : `${t}["a"][${t}["i"]]`;
        return `(${t} = ${this.ex(e.arg)}, ${post ? inner + inc : inc + inner})`;
      }
      if (at.ptr > 0 && !at.isFunc) {
        const p = this.paren(this.lvalue(e.arg));
        return post ? `${p}["i"]${inc}` : `${inc}${p}["i"]`;
      }
      const l = this.lvalue(e.arg);
      return post ? `${l}${inc}` : `${inc}${l}`;
    }
    if (e.op === "!") return `(!${this.paren(this.ex(e.arg))})`;
    if (e.op === "+") return `(+${this.paren(this.ex(e.arg))})`;
    if (e.op === "-") return `(-${this.paren(this.ex(e.arg))})`;
    if (e.op === "~") return `(~${this.paren(this.ex(e.arg))})`;
    return this.ex(e.arg);
  }

  exBinary(e: BinaryExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const ps = this.cx.funcParams(fn);
      if (fn.isMethod) {
        const o = this.objOf(e.l);
        const aa = this.argFor(ps[0].type, e.r, a.convs[0] || null);
        let s = `${this.paren(o)}->${phpMethodName(fn)}(${aa})`;
        if (a.copyCtor) {
          const ret = this.cx.funcRet(fn);
          const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo);
          s = `new ${cn}(${s})`;
        }
        return s;
      }
      const aa = [this.argFor(ps[0].type, e.l, a.convs[0] || null), this.argFor(ps[1].type, e.r, a.convs[1] || null)];
      let s = `${phpFuncName(fn)}(${aa.join(", ")})`;
      if (a.copyCtor) {
        const ret = this.cx.funcRet(fn);
        const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo);
        s = `new ${cn}(${s})`;
      }
      return s;
    }
    const lt = this.cx.getAnn(e.l).t as CppType;
    const rt = this.cx.getAnn(e.r).t as CppType;
    const l = this.ex(e.l);
    const r = this.ex(e.r);
    if (e.op === "&&" || e.op === "||") return `(${l} ${e.op} ${r})`;
    if (e.op === ",") return `(${l}, ${r})`;
    const lp = lt && !lt.isFunc && (lt.ptr > 0 || (lt.dims.length > 0 && !lt.isBox()));
    const rp = rt && !rt.isFunc && (rt.ptr > 0 || (rt.dims.length > 0 && !rt.isBox()));
    if (e.op === "==" || e.op === "!=") {
      const op = e.op === "==" ? "===" : "!==";
      if (lp && rp) {
        const x = this.pbox(l, e.l, lt as CppType);
        const y = this.pbox(r, e.r, rt as CppType);
        const xp = this.paren(x);
        const yp = this.paren(y);
        const eq = `${xp}["a"] === ${yp}["a"] && ${xp}["i"] === ${yp}["i"]`;
        return e.op === "==" ? `(${eq})` : `(!(${eq}))`;
      }
      if (lp && (rt.name === "__null" || this.isZeroLit(e.r))) return `(${l} ${op} null)`;
      if (rp && (lt.name === "__null" || this.isZeroLit(e.l))) return `(null ${op} ${r})`;
      return `(${l} ${op} ${r})`;
    }
    if (e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=") {
      if (lp && rp) {
        const x = this.pbox(l, e.l, lt as CppType);
        const y = this.pbox(r, e.r, rt as CppType);
        return `(${this.paren(x)}["i"] ${e.op} ${this.paren(y)}["i"])`;
      }
      return `(${l} ${e.op} ${r})`;
    }
    if ((e.op === "+" || e.op === "-") && (lp || rp)) {
      if (lp && rp) {
        if (e.op !== "-") this.cx.fail("bad pointer arithmetic", e);
        const x = this.pbox(l, e.l, lt as CppType);
        const y = this.pbox(r, e.r, rt as CppType);
        return `(${this.paren(x)}["i"] - ${this.paren(y)}["i"])`;
      }
      if (lp) {
        const x = this.pbox(l, e.l, lt as CppType);
        const xp = this.paren(x);
        const sign = e.op === "+" ? "+" : "-";
        return `(["a" => ${xp}["a"], "i" => ${xp}["i"] ${sign} (${r})])`;
      }
      const y = this.pbox(r, e.r, rt as CppType);
      const yp = this.paren(y);
      return `(["a" => ${yp}["a"], "i" => (${l}) + ${yp}["i"]])`;
    }
    if (e.op === "/" && lt && rt && isIntegerName(coreName(lt)) && isIntegerName(coreName(rt))) {
      return `intdiv(${l}, ${r})`;
    }
    return `(${l} ${e.op} ${r})`;
  }

  exAssign(e: AssignExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const ps = this.cx.funcParams(fn);
      let rhs: string;
      if (a.initCall) {
        const items = (e.r as InitListExpr).items;
        const t = this.cx.getAnn(e.l).t as CppType;
        const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(t)) as ClsInfo);
        rhs = this.ctorExpr(cn, a.initCall, items, a.convs);
      } else {
        rhs = this.argFor(ps[ps.length - 1].type, e.r, a.convs[a.convs.length - 1] || null);
      }
      if (fn.isMethod) {
        const o = this.objOf(e.l);
        return `${this.paren(o)}->${phpMethodName(fn)}(${rhs})`;
      }
      return `${phpFuncName(fn)}(${this.ex(e.l)}, ${rhs})`;
    }
    const lt = this.cx.getAnn(e.l).t as CppType;
    if (this.splitLhs(e.l)) {
      const t = this.tmp();
      const target = new CppType(lt.name);
      target.segs = lt.segs;
      target.ptr = lt.ptr;
      target.dims = lt.dims;
      const rhs = e.op === "=" ? this.argFor(target, e.r, null) : this.ex(e.r);
      return `(${t} = ${this.ex(e.l)}, ${t}["a"][${t}["i"]] ${e.op} ${rhs})`;
    }
    const l = this.lvalue(e.l);
    if ((e.op === "+=" || e.op === "-=") && lt.ptr > 0 && !lt.isFunc) {
      const op = e.op === "+=" ? "+=" : "-=";
      return `${this.paren(l)}["i"] ${op} (${this.ex(e.r)})`;
    }
    let rhs: string;
    if (e.op === "=") {
      const target = new CppType(lt.name);
      target.segs = lt.segs;
      target.ptr = lt.ptr;
      target.dims = lt.dims;
      rhs = this.argFor(target, e.r, null);
    } else {
      rhs = this.ex(e.r);
    }
    return `${l} ${e.op} ${rhs}`;
  }

  exNew(e: NewExpr): string {
    const a = this.cx.getAnn(e);
    if (e.placement) this.cx.warn("placement new is approximated", e);
    const t = this.cx.resolveTypeNode(e.type, rootScope());
    if (e.isArray) {
      const n = e.type.dims.length ? this.ex(e.type.dims[0]) : "0";
      const et = new CppType(t.name);
      et.segs = t.segs;
      et.ptr = t.ptr;
      et.ref = t.ref;
      const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
      if (fcls && this.cx.classes.has(fcls)) {
        const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
        return `["a" => ((${n}) <= 0 ? [] : array_map(function () { return new ${cn}(); }, range(1, (${n})))), "i" => 0]`;
      }
      if (isBoxLike(et) || et.isFunc) return `["a" => array_fill(0, (${n}), null), "i" => 0]`;
      return `["a" => array_fill(0, (${n}), ${this.zero(et)}), "i" => 0]`;
    }
    const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fcls && this.cx.classes.has(fcls) && a.call) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      return `["a" => [${this.ctorExpr(cn, a.call as FuncInfo, e.args, a.convs)}], "i" => 0]`;
    }
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = phpClsName(this.cx.classes.get(fcls) as ClsInfo);
      return `["a" => [new ${cn}()], "i" => 0]`;
    }
    if (e.args.length) return `["a" => [${this.ex(e.args[0])}], "i" => 0]`;
    return `["a" => [${this.zero(t)}], "i" => 0]`;
  }

  exCast(e: CastExpr): string {
    const a = this.cx.getAnn(e);
    const t = a.t as CppType;
    if (a.call) {
      const fq = this.cx.stripAll(t);
      const cn = phpClsName(this.cx.classes.get(fq) as ClsInfo);
      const cps = this.cx.funcParams(a.call as FuncInfo);
      const inner = cps.length ? this.argFor(cps[0].type, e.arg, a.conv) : this.ex(e.arg);
      return `new ${cn}(${inner})`;
    }
    if (a.conv) {
      return `${this.paren(this.objOf(e.arg))}->${phpMethodName((a.conv as { kind: string; fn: FuncInfo }).fn)}()`;
    }
    if (e.ckind === "dynamic") {
      const fq = this.cx.stripAll(t);
      const cn = phpClsName(this.cx.classes.get(fq) as ClsInfo);
      const x = this.complex(this.ex(e.arg), e.arg);
      if (t.ptr > 0) return `(${x} instanceof ${cn} ? ${x} : null)`;
      return `(${x} instanceof ${cn} ? ${x} : (function () { throw new Exception("bad cast"); })())`;
    }
    if (coreName(t) === "void") return `(${this.ex(e.arg)})`;
    const at = this.cx.getAnn(e.arg).t as CppType;
    if (coreName(t) === "bool" && at.isBox() && !at.isFunc) return `(${this.ex(e.arg)} !== null)`;
    if (coreName(t) === "bool" && isNumericName(coreName(at))) return `(${this.ex(e.arg)} !== 0)`;
    if (isIntegerName(coreName(t)) && (coreName(at) === "float" || coreName(at) === "double")) {
      return `(int)(${this.ex(e.arg)})`;
    }
    if (t.ptr > 0 && (at.name === "__null" || this.isZeroLit(e.arg))) return "null";
    return this.ex(e.arg);
  }

  exTypeid(e: TypeidExpr): string {
    let key: string;
    if (e.isType && e.type) {
      key = this.cx.resolveTypeNode(e.type, rootScope()).key();
    } else if (e.expr) {
      key = (this.cx.getAnn(e.expr).t as CppType).key();
    } else {
      key = "void";
    }
    return `["__typeName" => "${key}"]`;
  }

  exLambda(e: LambdaExpr): string {
    const caps = this.cx.getAnn(e).caps;
    const uses: string[] = [];
    const clones: string[] = [];
    const alias = new Map<string, string>();
    for (const c of caps) {
      if (c.mode === "=" && c.v) {
        const t = c.v.typeCache as CppType;
        const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
        uses.push(`$${c.name}`);
        if (fq && this.cx.classes.has(fq)) clones.push(`$${c.name} = clone $${c.name};`);
      } else if (c.mode === "&" && c.v) {
        uses.push(`&$${c.name}`);
      }
    }
    this.alias.push(alias);
    const save = this.out;
    const lines: string[] = [];
    this.out = lines;
    this.ind += "  ";
    const decl: string[] = [];
    for (let i = 0; i < e.params.length; i++) {
      const p = e.params[i];
      decl.push(p.name ? `$${safeJsName(p.name)}` : `$p${i}`);
    }
    for (const c of clones) this.line(c);
    const lt = this.cx.getAnn(e).t as CppType;
    const lcls = this.cx.classes.get(this.cx.stripAll(lt)) as ClsInfo;
    const lfn = (lcls.methods.get("operator()") || [])[0];
    if (lfn) this.fnStack.push(lfn);
    for (const s of e.body) this.stmt(s);
    if (lfn) this.fnStack.pop();
    this.ind = this.ind.slice(0, -2);
    this.out = save;
    this.alias.pop();
    const use = uses.length ? ` use (${uses.join(", ")})` : "";
    return `(function (${decl.join(", ")})${use} {\n${lines.join("\n")}\n${this.ind}})`;
  }

  sizeofType(e: SizeofExpr): CppType {
    if (e.isType && e.type) return this.cx.resolveTypeNode(e.type, rootScope());
    if (e.expr) return this.cx.getAnn(e.expr).t as CppType;
    this.cx.fail("bad sizeof", e);
    return CppType.basic("int");
  }

  constStr(e: Expr): string {
    const v = constEval(this.cx, e, rootScope());
    if (typeof v === "number") return String(v);
    return this.ex(e);
  }

  zero(t: CppType): string {
    const n = coreName(t);
    if (n === "bool") return "false";
    if (t.isFunc || t.name === "__null") return "null";
    if (n === "void") return "null";
    return "0";
  }
}

}
