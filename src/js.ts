namespace CTJ {

const OP_METHOD: Record<string, string> = {
  "+": "op_add", "-": "op_sub", "*": "op_mul", "/": "op_div", "%": "op_mod",
  "^": "op_xor", "&": "op_and", "|": "op_or", "~": "op_inv", "!": "op_not",
  "=": "op_assign", "<": "op_lt", ">": "op_gt", "+=": "op_add_assign",
  "-=": "op_sub_assign", "*=": "op_mul_assign", "/=": "op_div_assign",
  "%=": "op_mod_assign", "^=": "op_xor_assign", "&=": "op_and_assign",
  "|=": "op_or_assign", "<<": "op_shl", ">>": "op_shr",
  "<<=": "op_shl_assign", ">>=": "op_shr_assign", "==": "op_eq",
  "!=": "op_ne", "<=": "op_le", ">=": "op_ge", "&&": "op_land",
  "||": "op_lor", "++": "op_inc", "--": "op_dec", ",": "op_comma",
  "->*": "op_mem", "->": "op_arrow", "()": "op_call", "[]": "op_index",
};

export function methodJsName(fn: FuncInfo): string {
  if (fn.short === "#ctor") return "constructor";
  if (fn.short === "#dtor") return "__dtor";
  const suf = fn.isConst && !fn.isStatic ? "__c" : "";
  if (fn.short.startsWith("#conv:")) return "op_conv_" + safeJsName(fn.short.slice(6)) + suf;
  if (fn.short.startsWith("operator")) {
    const op = fn.short.slice(8);
    if (OP_METHOD[op]) return OP_METHOD[op] + suf;
  }
  if (fn.short === "operator()") return "op_call" + suf;
  return safeJsName(fn.short) + suf;
}

export function isBoxLike(t: CppType): boolean {
  return (t.isBox() || t.dims.length > 0) && !t.isFunc;
}

export function emitJs(cx: Cx): string {
  const g = new JsGen(cx);
  return g.run();
}

class JsGen {
  cx: Cx;
  out: string[] = [];
  ind = "";
  tmpN = 0;
  tmpBase = 0;
  alias: Map<string, string>[] = [];
  exStack: string[] = [];
  rangeN = 0;
  fnStack: FuncInfo[] = [];

  constructor(cx: Cx) {
    this.cx = cx;
  }

  run(): string {
    this.line(`"use strict";`);
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
    this.out = save;
    if (this.tmpN > gbase) this.line(this.tmpDecl(gbase, this.tmpN));
    for (const l of glines) this.out.push(l);
    const mains = this.cx.funcs.get("main") || [];
    const main = mains.find(f => !f.isMethod && f.referenced);
    if (main) {
      const ps = this.cx.funcParams(main);
      const args = ps.length >= 3 ? ["0", `{a: [], i: 0}`, "null"] : ps.length === 2 ? ["0", `{a: [], i: 0}`] : ps.length === 1 ? ["0"] : [];
      this.line(`main(${args.join(", ")});`);
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
      for (const [name] of c.fields) {
        const fq = this.cx.stripAll(this.cx.fieldType(c, name));
        if (idx.has(fq) && fq !== c.fq) d.add(fq);
      }
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
    return `let ${ns.join(", ")};`;
  }

  emitClass(c: ClsInfo): void {
    const cn = c.mangled as string;
    const base = c.bases.length ? (this.cx.classes.get(c.bases[0].fq) as ClsInfo).mangled as string : "";
    this.block(base ? `class ${cn} extends ${base}` : `class ${cn}`, () => {
      for (const [name] of c.fields) {
        if (!c.fieldStatic.has(name)) this.line(`${safeJsName(name)};`);
      }
      const ctors = (c.methods.get("#ctor") || []).filter(f => f.referenced);
      const inherited = this.inheritedCtors(c);
      if (ctors.length || inherited.length || c.fields.size || c.bases.length) this.emitCtor(c, ctors, inherited);
      this.emitDtor(c);
      for (const [key, fns] of c.methods) {
        if (key === "#ctor") continue;
        if (key === "#dtor") continue;
        this.emitMethod(c, fns);
      }
      for (const [name, fd] of c.fields) {
        if (!c.fieldStatic.has(name)) continue;
        const ft = this.cx.fieldType(c, name);
        const init = fd.init || (fd.directInit ? null : null);
        if (init) {
          this.line(`static ${safeJsName(name)} = ${this.argFor(ft, init as Expr, null)};`);
        } else if (fd.directInit && fd.directInit.length) {
          const a = this.cx.getAnn(fd);
          if (a.call) {
            this.line(`static ${safeJsName(name)} = ${this.ctorExpr(cn, a.call as FuncInfo, fd.directInit, a.convs, ft)};`);
          } else {
            this.line(`static ${safeJsName(name)} = ${this.ex(fd.directInit[0])};`);
          }
        } else if (isBoxLike(ft)) {
          this.line(`static ${safeJsName(name)} = null;`);
        } else if (!ft.dims.length && !ft.isBox() && !ft.isFunc && this.cx.classes.has(this.cx.stripAll(ft))) {
          const a = this.cx.getAnn(fd);
          this.line(`static ${safeJsName(name)} = ${a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], [], ft) : `new ${cn}()`};`);
        } else if (ft.dims.length) {
          this.line(`static ${safeJsName(name)} = ${this.arrayNew(ft, [])};`);
        } else {
          this.line(`static ${safeJsName(name)} = ${this.zero(ft)};`);
        }
      }
    });
    for (let i = 1; i < c.bases.length; i++) {
      const b = (this.cx.classes.get(c.bases[i].fq) as ClsInfo).mangled as string;
      this.line(`for (const $k of Object.getOwnPropertyNames(${b}.prototype)) {`);
      this.line(`  if ($k !== "constructor" && !($k in ${cn}.prototype)) ${cn}.prototype[$k] = ${b}.prototype[$k];`);
      this.line(`}`);
      this.line(`for (const $k of Object.getOwnPropertyNames(${b})) {`);
      this.line(`  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in ${cn})) ${cn}[$k] = ${b}[$k];`);
      this.line(`}`);
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
    const cn = c.mangled as string;
    const all: { fn: FuncInfo; inh: string }[] = [];
    for (const f of ctors) all.push({ fn: f, inh: "" });
    for (const h of inherited) all.push({ fn: h.fn, inh: h.base });
    // The base arguments are expressions written in the constructor's own
    // scope, where its parameters are the incoming $a.
    const baseArgs = (bi: number, fn: FuncInfo, inh: string): string => {
      this.alias.push(new Map());
      this.cx.funcParams(fn).forEach((p, i) => {
        if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
      });
      const r = baseArgsOf(bi, fn, inh);
      this.alias.pop();
      return r;
    };
    const baseArgsOf = (bi: number, fn: FuncInfo, inh: string): string => {
      const b = c.bases[bi];
      const bc = this.cx.classes.get(b.fq) as ClsInfo;
      const bn = bc.mangled as string;
      void bn;
      const list = fn.decl.ctorInit;
      const hit = !inh ? list.find(x => last(x.name).n === bc.short || last(x.name).n === b.fq) : null;
      if (inh && b.fq === inh) {
        const ps = this.cx.funcParams(fn);
        const aa: string[] = [];
        for (let i = 0; i < ps.length && !ps[i].variadic; i++) aa.push(this.ctorArg(ps[i], i));
        return `...(function () { return [${aa.join(", ")}]; })()`;
      }
      if (hit) {
        const a = this.cx.getAnn(hit);
        if (a.call) return `...[${hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call as FuncInfo)[i].type, x, a.convs[i])).join(", ")}]`;
        if (hit.args.length === 1) return `...[${this.ex(hit.args[0])}]`;
        return "";
      }
      return "";
    };
    this.line(`constructor(...$a) {`);
    this.ind += "  ";
    if (c.bases.length) {
      if (all.length <= 1) {
        this.line(`super(${all.length ? baseArgs(0, all[0].fn, all[0].inh) : ""});`);
      } else {
        const sib = this.siblingClasses(all.map(x => x.fn));
        const parts = all.map((x, i) => {
          const cond = this.matchCond(x.fn, i, sib[i]);
          return `${cond} ? [${baseArgs(0, x.fn, x.inh).replace(/^\.\.\./, "")}] : `;
        });
        this.line(`super(...(${parts.join("")}[]));`);
      }
    }
    this.line(`this.__init_${cn}(...$a);`);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
    this.line(`__init_${cn}(...$a) {`);
    this.ind += "  ";
    if (all.length <= 1) {
      if (all.length) this.ctorBranch(c, all[0].fn, all[0].inh);
      else this.ctorDefault(c);
    } else {
      // An "instanceof" guard is exact while the one for a pointer or reference
      // only tells an object from a number, so a branch that names a class has
      // to be tried before one that takes a box.
      const exact = (fn: FuncInfo): boolean =>
        this.cx.funcParams(fn).some(p => this.typeCheck("$", p.type).indexOf("instanceof") >= 0);
      const ordered = all.filter(x => exact(x.fn)).concat(all.filter(x => !exact(x.fn)));
      const sib = this.siblingClasses(all.map(x => x.fn));
      ordered.forEach((x, i) => {
        this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(x.fn, i, sib[all.indexOf(x)])}) {`);
        this.ind += "  ";
        this.ctorBranch(c, x.fn, x.inh);
        this.ind = this.ind.slice(0, -2);
        this.line(`}`);
      });
      this.line(`else { throw new Error("no matching constructor"); }`);
    }
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  matchCond(fn: FuncInfo, _i: number, sib?: Map<string, string[]>): string {
    const ps = this.cx.funcParams(fn);
    const named = ps.filter(p => !p.variadic);
    const min = named.filter(p => !p.def).length;
    const parts = [`$a.length >= ${min}`, `$a.length <= ${named.length}`];
    named.forEach((p, i) => {
      const v = `$a[${i}]`;
      const chk = this.typeCheck(v, p.type);
      if (chk) parts.push(chk);
      // A pointer or reference arrives as an {a, i} pair, which "typeof" cannot
      // tell apart from the object of a sibling overload.
      if (sib && (p.type.ptr > 0 || p.type.ref) && !p.type.isFunc) {
        for (const c of sib.get(v) || []) parts.push(`!(${v} instanceof ${c})`);
      }
    });
    return parts.join(" && ");
  }

  // For every overload, the classes its siblings name at each argument index.
  siblingClasses(all: FuncInfo[]): Map<string, string[]>[] {
    return all.map((fn, k) => {
      const m = new Map<string, string[]>();
      all.forEach((other, j) => {
        if (j === k) return;
        this.cx.funcParams(other).filter(p => !p.variadic).forEach((p, i) => {
          const t = p.type;
          if (t.isBox() || t.dims.length || t.isFunc) return;
          const c = this.cx.classes.get(this.cx.stripAll(t));
          if (!c) return;
          const v = `$a[${i}]`;
          const list = m.get(v) || [];
          if (!list.includes(c.mangled as string)) list.push(c.mangled as string);
          m.set(v, list);
        });
      });
      return m;
    });
  }

  typeCheck(v: string, t: CppType): string {
    if (t.name === "__any") return "";
    if (t.isFunc) return `typeof ${v} === "function"`;
    if (t.isBox()) {
      if (t.ref && !t.ptr && !t.dims.length && !t.isFunc) {
        const c = this.cx.classes.get(this.cx.stripAll(t));
        if (c) return `(${v} !== null && typeof ${v} === "object" && ${v}.a[${v}.i] instanceof ${c.mangled})`;
      }
      if (t.ptr > 0 || t.ref) return `(${v} === null || typeof ${v} === "object")`;
      return "";
    }
    if (t.dims.length) return `Array.isArray(${v})`;
    const n = coreName(t);
    if (n === "bool") return `typeof ${v} === "boolean"`;
    if (isNumericName(n) || this.cx.enums.has(this.cx.stripAll(t))) return `(typeof ${v} === "number" || typeof ${v} === "boolean")`;
    const fq = this.cx.stripAll(t);
    if (this.cx.classes.has(fq)) return `${v} instanceof ${(this.cx.classes.get(fq) as ClsInfo).mangled}`;
    return "";
  }

  // A default argument is a value; a reference or pointer parameter takes a
  // box, so the default has to be wrapped like any other temporary.
  defArg(p: { type: CppType; def: Expr | null }): string {
    const d = this.ex(p.def as Expr);
    return p.type.isBox() ? `{a: [${d}], i: 0}` : d;
  }

  ctorArg(p: { type: CppType; def: Expr | null }, i: number): string {
    const v = `$a[${i}]`;
    if (p.def) return `(${v} === undefined ? (${this.defArg(p)}) : ${v})`;
    return v;
  }

  ctorBranch(c: ClsInfo, fn: FuncInfo, inh: string): void {
    const ps = this.cx.funcParams(fn);
    this.alias.push(new Map());
    ps.forEach((p, i) => {
      if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
    });
    for (let bi = 1; bi < c.bases.length; bi++) {
      const b = c.bases[bi];
      const bc = this.cx.classes.get(b.fq) as ClsInfo;
      const bn = bc.mangled as string;
      const hit = !inh ? fn.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === b.fq) : null;
      if (inh && b.fq === inh) {
        const aa: string[] = [];
        ps.forEach((p, i) => { if (!p.variadic) aa.push(this.ctorArg(p, i)); });
        this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
      } else if (hit && hit.args.length) {
        const a = this.cx.getAnn(hit);
        const aa = hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call as FuncInfo)[i].type, x, a.convs[i]));
        this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
      } else {
        this.line(`${bn}.prototype.__init_${bn}.call(this);`);
      }
    }
    for (const [name, fd] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      const ft = this.cx.fieldType(c, name);
      const hit = !inh ? fn.decl.ctorInit.find(x => last(x.name).n === name) : null;
      this.line(`this.${safeJsName(name)} = ${this.fieldInit(c, ft, fd, hit || null)};`);
    }
    if (!inh) {
      this.fnStack.push(fn);
      this.bodyStmts(fn.decl.body || []);
      this.fnStack.pop();
    }
    this.alias.pop();
  }

  ctorDefault(c: ClsInfo): void {
    for (let bi = 1; bi < c.bases.length; bi++) {
      const bn = (this.cx.classes.get(c.bases[bi].fq) as ClsInfo).mangled as string;
      this.line(`${bn}.prototype.__init_${bn}.call(this);`);
    }
    for (const [name, fd] of c.fields) {
      if (c.fieldStatic.has(name)) continue;
      this.line(`this.${safeJsName(name)} = ${this.fieldInit(c, this.cx.fieldType(c, name), fd, null)};`);
    }
  }

  fieldInit(c: ClsInfo, ft: CppType, fd: VarDecl, hit: CtorInit | null): string {
    if (hit) {
      const a = this.cx.getAnn(hit);
      if (a.call) {
        const fcls = this.cx.stripAll(ft);
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        const init = hit.args.length === 1 && hit.args[0].kind === "initlist" ? (hit.args[0] as InitListExpr).items : hit.args;
        return this.ctorExpr(cn, a.call as FuncInfo, init, a.convs, ft);
      }
      if (hit.args.length) return this.argFor(ft, hit.args[0], null);
    }
    if (fd.init) return this.argFor(ft, fd.init, null);
    if (fd.directInit && fd.directInit.length) {
      const a = this.cx.getAnn(fd);
      if (a.call) {
        const fcls = this.cx.stripAll(ft);
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        return this.ctorExpr(cn, a.call as FuncInfo, fd.directInit, a.convs, ft);
      }
      return this.ex(fd.directInit[0]);
    }
    const a = this.cx.getAnn(fd);
    const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? this.cx.stripAll(ft) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      if (a.call) return this.ctorExpr(cn, a.call as FuncInfo, [], [], ft);
      return `new ${cn}()`;
    }
    if (ft.dims.length) return this.arrayNew(ft, []);
    if (isBoxLike(ft)) return "null";
    return this.zero(ft);
  }

  ctorExpr(cn: string, fn: FuncInfo, args: Expr[], convs: ({ kind: string; fn: FuncInfo } | null)[], _t: CppType): string {
    const ps = this.cx.funcParams(fn);
    if (ps.length === 1 && this.isInitListParam(ps[0].type) && args.length === 1 && args[0].kind === "initlist") {
      const items = (args[0] as InitListExpr).items.map(x => this.ex(x));
      return `new ${cn}([${items.join(", ")}])`;
    }
    const aa = args.map((x, i) => {
      const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
      if (pt && this.isInitListParam(pt) && x.kind === "initlist") {
        return `[${(x as InitListExpr).items.map(y => this.ex(y)).join(", ")}]`;
      }
      return pt ? this.argFor(pt, x, convs[i] || null) : this.ex(x);
    });
    for (let i = args.length; i < ps.length && !ps[i].variadic; i++) {
      aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
    }
    return `new ${cn}(${aa.join(", ")})`;
  }

  isInitListParam(t: CppType): boolean {
    return t.segs.length === 1 && t.segs[0].a.length === 1 && !t.isBox() && !t.dims.length;
  }

  emitDtor(c: ClsInfo): void {
    const fns = c.methods.get("#dtor") || [];
    const fn = fns.find(f => f.referenced);
    this.line(`__dtor() {`);
    this.ind += "  ";
    if (fn) {
      this.fnStack.push(fn);
      this.bodyStmts(fn.decl.body || []);
      this.fnStack.pop();
    }
    for (const b of c.bases) {
      const bc = this.cx.classes.get(b.fq);
      if (bc && bc.referenced) this.line(`${bc.mangled}.prototype.__dtor.call(this);`);
    }
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  emitMethod(c: ClsInfo, fns: FuncInfo[]): void {
    const use = fns.filter(f => f.referenced && ((f.decl.body || []).length || f.decl.flags.includes("pure")));
    if (!use.length) return;
    const groups = new Map<string, FuncInfo[]>();
    for (const f of use) {
      const k = methodJsName(f);
      if (!groups.has(k)) groups.set(k, []);
      (groups.get(k) as FuncInfo[]).push(f);
    }
    for (const g of groups.values()) this.emitMethodGroup(c, g);
  }

  emitMethodGroup(c: ClsInfo, use: FuncInfo[]): void {
    void c;
    const m = methodJsName(use[0]);
    const pre = use[0].isStatic ? "static " : "";
    if (use.length === 1) {
      const fn = use[0];
      const ps = this.cx.funcParams(fn);
      const decl: string[] = [];
      ps.forEach((p, i) => {
        const nm = p.name ? safeJsName(p.name) : `$p${i}`;
        if (p.variadic) decl.push(`...${nm}_rest`);
        else if (p.def) decl.push(`${nm} = ${this.defArg(p)}`);
        else decl.push(nm);
      });
      const base = this.tmpN;
      const save = this.out;
      const lines: string[] = [];
      this.out = lines;
      this.ind += "  ";
      if (fn.decl.flags.includes("pure") && !(fn.decl.body || []).length) {
        this.line(`throw new Error("pure virtual called");`);
      } else {
        for (const b of fn.baseAssigns) {
       
          this.line(`this.__assign_${(this.cx.classes.get(b) as ClsInfo).mangled}.call(this, $p0);`);
        }
        this.fnStack.push(fn);
        this.bodyStmts(fn.decl.body || []);
        this.fnStack.pop();
      }
      this.ind = this.ind.slice(0, -2);
      this.out = save;
      this.line(`${pre}${m}(${decl.join(", ")}) {`);
      this.ind += "  ";
      if (this.tmpN > base) this.line(this.tmpDecl(base, this.tmpN));
      this.boxParams(fn, ps);
      for (const l of lines) this.out.push(l);
      this.ind = this.ind.slice(0, -2);
      this.line(`}`);
      return;
    }
    this.line(`${pre}${m}(...$a) {`);
    this.ind += "  ";
    const sib = this.siblingClasses(use);
    use.forEach((fn, i) => {
      this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(fn, i, sib[i])}) {`);
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
    this.line(`else { throw new Error("no matching overload"); }`);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  // The allocation operators are declared by <new> with no body; storage comes
  // from the target language, and freeing is its business too. A placement
  // version hands back the pointer it was given.
  allocStub(f: FuncInfo): string | null {
    if (f.fq === "operatornew" || f.fq === "operatornew[]") {
      return this.cx.funcParams(f).length > 1 ? "return $a[1];" : "return {a: new Array($a[0]).fill(0), i: 0};";
    }
    if (f.fq === "operatordelete" || f.fq === "operatordelete[]") return "";
    return null;
  }

  emitFunc(f: FuncInfo): void {
    if (!(f.decl.body || []).length) {
      const alloc = this.allocStub(f);
      if (alloc !== null) this.line(`function ${f.mangled}(...$a) { ${alloc} }`);
      else this.line(`function ${f.mangled}(...$a) { throw new Error("unresolved external: ${f.fq}"); }`);
      return;
    }
    const ps = this.cx.funcParams(f);
    const decl: string[] = [];
    ps.forEach((p, i) => {
      const nm = p.name ? safeJsName(p.name) : `$p${i}`;
      if (p.variadic) decl.push(`...${nm}_rest`);
      else if (p.def) decl.push(`${nm} = ${this.defArg(p)}`);
      else decl.push(nm);
    });
    const base = this.tmpN;
    const save = this.out;
    const lines: string[] = [];
    this.out = lines;
    this.ind += "  ";
    this.fnStack.push(f);
    this.bodyStmts(f.decl.body || []);
    this.fnStack.pop();
    this.ind = this.ind.slice(0, -2);
    this.out = save;
    this.line(`function ${f.mangled}(${decl.join(", ")}) {`);
    this.ind += "  ";
    if (this.tmpN > base) this.line(this.tmpDecl(base, this.tmpN));
    // A parameter whose address is taken is read through a wrapper, so the
    // value the caller passed has to be put in one first.
    this.boxParams(f, ps);
    for (const l of lines) this.out.push(l);
    this.ind = this.ind.slice(0, -2);
    this.line(`}`);
  }

  // The copy constructor takes a reference to the value it copies. A call
  // returning one already produced a box; a temporary has to be put in one.
  copyArg(s: string, ret: CppType): string {
    return ret.ref !== "" ? s : `{a: [${s}], i: 0}`;
  }

  // A parameter whose address is taken is read through a wrapper, so the value
  // the caller passed has to be put in one before the body runs.
  boxParams(f: FuncInfo, ps: FuncParam[]): void {
    ps.forEach((p, i) => {
      if (!p.name || p.variadic) return;
      const node = f.decl.params[i];
      const v = (node ? this.cx.getAnn(node).var : null) as VarInfo | null;
      if (v && (v.storage === "boxed" || v.storage === "bbox")) {
        const nm = safeJsName(p.name);
        this.line(`${nm} = {v: ${nm}};`);
      }
    });
  }

  // The VarInfo of a parameter hangs off its declaration node; the scope the
  // analysis built it in is a copy that no longer exists.
  paramVar(f: FuncInfo, i: number): VarInfo | null {
    const node = f.decl.params[i];
    return (node ? this.cx.getAnn(node).var : null) as VarInfo | null;
  }

  emitGlobal(v: VarInfo): void {
    if (!v.referenced && !v.decl.init && !v.decl.directInit) return;
    const t = v.typeCache as CppType;
    if (v.lifted) {
      this.line(`let ${v.mangled};`);
      this.line(`let ${v.mangled}_init = false;`);
      return;
    }
    const init = v.decl.init;
    if (init) {
      this.line(`let ${v.mangled} = ${this.argFor(t, init, null)};`);
      return;
    }
    if (v.decl.directInit && v.decl.directInit.length) {
      const a = this.cx.getAnn(v.decl);
      const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
      if (a.call && fcls && this.cx.classes.has(fcls)) {
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        this.line(`let ${v.mangled} = ${this.ctorExpr(cn, a.call as FuncInfo, v.decl.directInit, a.convs, t)};`);
      } else {
        this.line(`let ${v.mangled} = ${this.ex(v.decl.directInit[0])};`);
      }
      return;
    }
    const a = this.cx.getAnn(v.decl);
    const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      this.line(`let ${v.mangled} = ${a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], [], t) : `new ${cn}()`};`);
    } else if (t.dims.length) {
      this.line(`let ${v.mangled} = ${this.arrayNew(t, [])};`);
    } else if (t.isFunc) {
      this.line(`let ${v.mangled} = null;`);
    } else if (isBoxLike(t)) {
      this.line(`let ${v.mangled} = null;`);
    } else if (v.storage === "box") {
      this.line(`let ${v.mangled} = null;`);
    } else if (v.storage === "bbox") {
      this.line(`let ${v.mangled} = {v: null};`);
    } else if (v.storage === "boxed") {
      this.line(`let ${v.mangled} = {v: ${this.zero(t)}};`);
    } else {
      this.line(`let ${v.mangled} = ${this.zero(t)};`);
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
          const t = v.typeCache as CppType;
          this.block("", () => {
            this.varDeclFor(vd, v, t);
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
            const t = v.typeCache as CppType;
            const save = this.out;
            const lines: string[] = [];
            this.out = lines;
            this.varDeclFor(d, v, t);
            this.out = save;
            const head = lines.length === 1 ? lines[0].trim().replace(/;$/, "") : `let ${v.mangled}`;
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
        const en = `$e${this.exStack.length}`;
        this.exStack.push(en);
        this.line(`try {`);
        this.ind += "  ";
        this.stmt(s.body);
        this.ind = this.ind.slice(0, -2);
        this.line(`} catch (${en}) {`);
        this.ind += "  ";
        s.handlers.forEach((h, i) => {
          const pre = i === 0 ? "if" : "else if";
          if (h.ellipsis) {
            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
          } else if (h.vdecl) {
            const v = this.cx.getAnn(h.vdecl).var as VarInfo;
            const t = v.typeCache as CppType;
            const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fq && this.cx.classes.has(fq)) {
              const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
              this.block(`${pre} (${en} instanceof ${cn})`, () => {
                this.line(`let ${v.mangled} = ${en};`);
                this.stmt(h.body);
              });
            } else {
              this.block(pre === "if" ? "if (true)" : "else", () => {
                this.line(`let ${v.mangled} = ${en};`);
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
        if (!s.expr) {
          const en = this.exStack[this.exStack.length - 1] || "$e0";
          this.line(`throw ${en};`);
        } else {
          this.line(`throw ${this.ex(s.expr)};`);
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
    const nm = v.isGlobal ? v.mangled : this.localName(v);
    if (vd.flags.includes("extern")) return;
    if (v.lifted) {
      const init = this.varInitEx(vd, v, t);
      this.line(`if (!${v.mangled}_init) { ${v.mangled} = ${init}; ${v.mangled}_init = true; }`);
      const top = this.alias.length ? this.alias[this.alias.length - 1] : null;
      if (top) top.set(v.short, v.mangled);
      return;
    }
    const init = this.varInitEx(vd, v, t);
    if (v.storage === "bbox") this.line(`let ${nm} = {v: ${init}};`);
    else if (v.storage === "boxed") this.line(`let ${nm} = {v: ${init}};`);
    else this.line(`let ${nm} = ${init};`);
  }

  varInitEx(vd: VarDecl, v: VarInfo, t: CppType): string {
    const a = this.cx.getAnn(vd);
    const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (vd.init) {
      if (fcls && this.cx.classes.has(fcls)) {
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        if (a.call) {
          const items = vd.init.kind === "initlist" ? (vd.init as InitListExpr).items : [vd.init];
          return this.ctorExpr(cn, a.call as FuncInfo, items, a.convs, t);
        }
      }
      if (t.dims.length && vd.init.kind === "initlist") {
        return this.arrayInit(t, (vd.init as InitListExpr).items, vd);
      }
      return this.argFor(t, vd.init, null);
    }
    if (vd.directInit && vd.directInit.length) {
      if (fcls && this.cx.classes.has(fcls) && a.call) {
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        return this.ctorExpr(cn, a.call as FuncInfo, vd.directInit, a.convs, t);
      }
      return this.ex(vd.directInit[0]);
    }
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      return a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], [], t) : `new ${cn}()`;
    }
    if (t.dims.length) return this.arrayNew(t, []);
    if (t.isFunc) return "null";
    if (isBoxLike(t)) return "null";
    return this.zero(t);
  }

  arrayInit(t: CppType, items: Expr[], _vd: VarDecl): string {
    const et = new CppType(t.name);
    et.segs = t.segs;
    et.ptr = t.ptr;
    et.ref = t.ref;
    et.dims = t.dims.slice(1);
    return `[${items.map(x => this.argFor(et, x, null)).join(", ")}]`;
  }

  arrayNew(t: CppType, inits: Expr[]): string {
    if (t.dims[0] < 0 || typeof t.dims[0] !== "number") return inits.length ? this.arrayInit(t, inits, null as unknown as VarDecl) : "[]";
    const n = t.dims[0];
    const et = new CppType(t.name);
    et.segs = t.segs;
    et.ptr = t.ptr;
    et.ref = t.ref;
    et.dims = t.dims.slice(1);
    if (et.dims.length) return `Array.from({length: ${n}}, () => ${this.arrayNew(et, [])})`;
    const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      return `Array.from({length: ${n}}, () => new ${cn}())`;
    }
    if (isBoxLike(et) || et.isFunc) return `new Array(${n}).fill(null)`;
    return `new Array(${n}).fill(${this.zero(et)})`;
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
      this.block(`for (let ${idx} = 0; ${idx} < ${arr}.length; ${idx}++)`, () => {
        this.rangeVar(v, t, elem, arr, idx);
        this.stmt(s.body);
      });
      return;
    }
    const info = this.cx.getAnn(s).range as { beginFn: FuncInfo; endFn: FuncInfo; neFn: FuncInfo; incFn: FuncInfo; starFn: FuncInfo };
    const obj = this.complex(this.ex(s.range), s.range);
    const b = `$b${ri}`;
    const e = `$e${ri}`;
    const bm = methodJsName(info.beginFn);
    const em = methodJsName(info.endFn);
    const nm = methodJsName(info.neFn);
    const im = methodJsName(info.incFn);
    const sm = methodJsName(info.starFn);
    this.block(`for (let ${b} = ${obj}.${bm}(), ${e} = ${obj}.${em}(); ${b}.${nm}(${e}); ${b}.${im}())`, () => {
      this.rangeVar(v, t, `${b}.${sm}()`, "", "");
      this.stmt(s.body);
    });
  }

  rangeVar(v: VarInfo, t: CppType, elem: string, arr: string, idx: string): void {
    const nm = this.localName(v);
    if (v.storage === "box") {
      if (arr) this.line(`let ${nm} = {a: ${arr}, i: ${idx}};`);
      else this.line(`let ${nm} = ${elem};`);
      return;
    }
    const fqs = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fqs && this.cx.classes.has(fqs)) {
      const cn = (this.cx.classes.get(fqs) as ClsInfo).mangled as string;
      this.line(`let ${nm} = new ${cn}(${elem});`);
      return;
    }
    if (arr) this.line(`let ${nm} = ${elem};`);
    else this.line(`let ${nm} = (${elem}).a[(${elem}).i];`);
  }

  localName(v: VarInfo): string {
    for (let i = this.alias.length - 1; i >= 0; i--) {
      const hit = this.alias[i].get(v.short);
      if (hit !== undefined) return hit;
    }
    return v.mangled;
  }

  varName(v: VarInfo, needsThis: boolean): string {
    if (v.isGlobal) return v.mangled;
    if (v.isField) {
      if (v.isStatic) {
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        return `${cls.mangled}.${safeJsName(v.short)}`;
      }
      return needsThis ? `this.${safeJsName(v.short)}` : safeJsName(v.short);
    }
    return this.localName(v);
  }

  ex(e: Expr): string {
    switch (e.kind) {
      case "lit": return this.lit(e);
      case "id": return this.exId(e);
      case "this": return "this";
      case "call": return this.exCallValue(e);
      case "index": return this.exIndex(e);
      case "member": return this.exMember(e);
      case "unary": return this.exUnary(e);
      case "binary": return this.exBinary(e);
      case "assign": return this.exAssign(e);
      case "cond": return `(${this.ex(e.c)} ? ${this.ex(e.a)} : ${this.ex(e.b)})`;
      case "new": return this.exNew(e);
      case "delete": return "void 0";
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
        return `(() => {\n${lines.join("\n")}\n${this.ind}})()`;
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


  // The string and memory builtins work on the same boxes every other pointer
  // uses: an array of bytes and an offset into it.
  exMemBuiltin(name: string, e: CallExpr): string | null {
    const a = e.args.map(x => this.ex(x));
    // A string literal is a bare array of bytes; every other pointer is a box.
    const p = (i: number) => `(($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(${a[i]})`;
    switch (name) {
      case "__builtin_strlen":
        return `(($s) => { let $i = $s.i; while ($s.a[$i]) $i++; return $i - $s.i; })(${p(0)})`;
      case "__builtin_strcmp":
        return `(($x, $y) => { let $i = $x.i, $j = $y.i; while ($x.a[$i] && $x.a[$i] === $y.a[$j]) { $i++; $j++; } return ($x.a[$i] || 0) - ($y.a[$j] || 0); })(${p(0)}, ${p(1)})`;
      case "__builtin_strncmp":
        return `(($x, $y, $n) => { let $i = $x.i, $j = $y.i, $k = 0; while ($k < $n && $x.a[$i] && $x.a[$i] === $y.a[$j]) { $i++; $j++; $k++; } return $k >= $n ? 0 : ($x.a[$i] || 0) - ($y.a[$j] || 0); })(${p(0)}, ${p(1)}, ${a[2]})`;
      case "__builtin_strcpy":
        return `(($d, $s) => { let $i = $d.i, $j = $s.i; while (($d.a[$i] = $s.a[$j])) { $i++; $j++; } return $d; })(${p(0)}, ${p(1)})`;
      case "__builtin_strncpy":
        return `(($d, $s, $n) => { let $i = $d.i, $j = $s.i, $k = 0; for (; $k < $n && $s.a[$j]; $k++) { $d.a[$i] = $s.a[$j]; $i++; $j++; } for (; $k < $n; $k++) { $d.a[$i] = 0; $i++; } return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
      case "__builtin_strcat":
        return `(($d, $s) => { let $i = $d.i; while ($d.a[$i]) $i++; let $j = $s.i; while (($d.a[$i] = $s.a[$j])) { $i++; $j++; } return $d; })(${p(0)}, ${p(1)})`;
      case "__builtin_strchr":
        return `(($s, $c) => { let $i = $s.i; while ($s.a[$i] && $s.a[$i] !== ($c & 255)) $i++; return ($s.a[$i] || 0) === ($c & 255) ? { a: $s.a, i: $i } : null; })(${p(0)}, ${a[1]})`;
      case "__builtin_memset":
        return `(($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })(${p(0)}, ${a[1]}, ${a[2]})`;
      case "__builtin_memcpy":
        return `(($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
      case "__builtin_memmove":
        return `(($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
      case "__builtin_memcmp":
        return `(($x, $y, $n) => { for (let $k = 0; $k < $n; $k++) { const $d = ($x.a[$x.i + $k] || 0) - ($y.a[$y.i + $k] || 0); if ($d) return $d; } return 0; })(${p(0)}, ${p(1)}, ${a[2]})`;
      default:
        return null;
    }
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
        return `${cls.mangled}.${methodJsName(f)}`;
      }
      return f.mangled;
    }
    if (s.k !== "var") this.cx.fail("type used as value", e);
    const v = s.v;
    const nm = this.varName(v, a.needsThis);
    const t = v.typeCache as CppType;
    if (v.storage === "box") {
      if (t.isFunc) return nm;
      if (t.ref) return `${this.paren(nm)}.a[${this.paren(nm)}.i]`;
      return nm;
    }
    if (v.storage === "bbox") return `${this.paren(nm)}.v`;
    if (v.storage === "boxed") return `${this.paren(nm)}.v`;
    return nm;
  }

  paren(s: string): string {
    return /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(s) ? s : `(${s})`;
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
      // An index that resolves to a call runs code, so it is not simple.
      case "index": return !this.cx.getAnn(e).call && this.isSimple(e.arr) && this.isSimple(e.idx);
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
        // A field's type lives on its class, not on this per-lookup record.
        const t = (v.isField && v.scope.cls
          ? this.cx.fieldType(v.scope.cls, v.short) : v.typeCache) as CppType;
        if (!t || t.isFunc) return this.ex(e);
        if (v.isField) {
          const fname = safeJsName(v.short);
          return v.isStatic
            ? `{a: ${v.scope.cls!.mangled}, i: "${fname}"}`
            : `{a: this, i: "${fname}"}`;
        }
        const nm = this.varName(v, this.cx.getAnn(e).needsThis);
        if (v.storage === "box") return nm;
        if (v.storage === "bbox") return `${this.paren(nm)}.v`;
        if (v.storage === "boxed") return `{a: ${nm}, i: "v"}`;
        if (t.dims.length) return `{a: ${nm}, i: 0}`;
        return `{a: [${nm}], i: 0}`;
      }
      case "member": {
        const m = this.cx.getAnn(e);
        const f = m.sym;
        if (!f || f.k !== "var" || !f.v.isField) return `{a: [${this.ex(e)}], i: 0}`;
        const v = f.v;
        const fname = safeJsName(v.short);
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        if (v.isStatic) return `{a: ${cls.mangled}, i: "${fname}"}`;
        const o = this.objOf(e.obj);
        if (this.cx.fieldType(cls, v.short).ref) return `${this.paren(o)}.${fname}`;
        return `{a: ${o}, i: "${fname}"}`;
      }
      case "index": {
        const m = this.cx.getAnn(e);
        if (m.call) return this.ex(e);
        const at = this.cx.getAnn(e.arr).t as CppType;
        if (at.ptr > 0) {
          const p = this.complex(this.ex(e.arr), e.arr);
          const pp = this.paren(p);
          if (this.isZeroLit(e.idx)) return p;
          return `{a: ${pp}.a, i: ${pp}.i + (${this.ex(e.idx)})}`;
        }
        const arr = this.complex(this.ex(e.arr), e.arr);
        return `{a: ${arr}, i: (${this.ex(e.idx)})}`;
      }
      case "unary":
        // "*it" on a class is a call to operator*, which already yields a box.
        if (e.op === "*") return this.cx.getAnn(e).call ? this.ex(e) : this.ex(e.arg);
        if (e.op === "&") return this.exBox(e.arg);
        return `{a: [${this.ex(e)}], i: 0}`;
      case "call": case "this":
        if (e.kind === "this") return `{a: [this], i: 0}`;
        // A call returning a reference already yields a box; any other rvalue
        // needs a temporary one to be passed by reference.
        if (et && et.ref) return this.exCall(e);
        return `{a: [${this.ex(e)}], i: 0}`;
      case "lit":
        if (e.lkind === "string") return `{a: ${this.lit(e)}, i: 0}`;
        return `{a: [${this.ex(e)}], i: 0}`;
      case "cond":
        return `(${this.ex(e.c)} ? ${this.exBox(e.a)} : ${this.exBox(e.b)})`;
      case "binary":
        if (e.op === ",") return `(${this.ex(e.l)}, ${this.exBox(e.r)})`;
        return `{a: [${this.ex(e)}], i: 0}`;
      case "cast": {
        // A cast to a pointer or a reference yields the box of its operand;
        // wrapping it again would point at the box instead of the value.
        const ct = this.cx.getAnn(e).t as CppType;
        if (ct && ct.isBox()) return this.ex(e);
        return `{a: [${this.ex(e)}], i: 0}`;
      }
      default:
        return `{a: [${this.ex(e)}], i: 0}`;
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
        if (v.storage === "box" && t.ref) return `${this.paren(nm)}.a[${this.paren(nm)}.i]`;
        if (v.storage === "bbox") return `${this.paren(nm)}.v`;
        if (v.storage === "boxed") return `${this.paren(nm)}.v`;
        return nm;
      }
      case "member": {
        const m = this.cx.getAnn(e);
        const f = m.sym;
        if (!f || f.k !== "var" || !f.v.isField) this.cx.fail("not assignable", e);
        const v = f.v;
        const fname = safeJsName(v.short);
        const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
        if (v.isStatic) return `${cls.mangled}.${fname}`;
        let o = this.objOf(e.obj);
        if (m.arrowCall) o = `(${this.paren(o)}.${methodJsName(m.arrowCall as FuncInfo)}())`;
        if (this.cx.fieldType(cls, v.short).ref) {
          const t = this.tmp();
          return `(${t} = ${this.paren(o)}.${fname}, ${t}.a[${t}.i])`;
        }
        return `${this.paren(o)}.${fname}`;
      }
      case "index": {
        const m = this.cx.getAnn(e);
        if (m.call) {
          const t = this.tmp();
          return `(${t} = ${this.ex(e)}, ${t}.a[${t}.i])`;
        }
        const at = this.cx.getAnn(e.arr).t as CppType;
        if (at.ptr > 0) {
          const p = this.complex(this.ex(e.arr), e.arr);
          const pp = this.paren(p);
          if (this.isZeroLit(e.idx)) return `${pp}.a[${pp}.i]`;
          return `${pp}.a[${pp}.i + (${this.ex(e.idx)})]`;
        }
        const arr = this.complex(this.ex(e.arr), e.arr);
        return `${this.paren(arr)}[${this.ex(e.idx)}]`;
      }
      case "unary": {
        if (e.op !== "*") this.cx.fail("not assignable", e);
        const p = this.complex(this.ex(e.arg), e.arg);
        const pp = this.paren(p);
        return `${pp}.a[${pp}.i]`;
      }
      case "call": {
        const t = this.tmp();
        // A call returning a scalar reference already yields the box.
        const c = this.returnsScalarRef(e) ? this.exCall(e) : this.ex(e);
        return `(${t} = ${c}, ${t}.a[${t}.i])`;
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
      return `(${p}.a[${p}.i])`;
    }
    return s;
  }

  deref(e: Expr): string {
    if (this.isSimple(e)) {
      const p = this.paren(this.ex(e));
      return `${p}.a[${p}.i]`;
    }
    const t = this.tmp();
    return `(${t} = ${this.ex(e)}, ${t}.a[${t}.i])`;
  }

  exAddr(e: Expr): string {
    if (e.kind === "id") {
      const s = this.cx.getAnn(e).sym;
      if (s && s.k === "var" && s.v.storage === "bbox") {
        const nm = this.varName(s.v, this.cx.getAnn(e).needsThis);
        return `{a: ${nm}, i: "v"}`;
      }
    }
    return this.exBox(e);
  }

  splitLhs(e: Expr): boolean {
    if (e.kind === "call") return true;
    if (e.kind === "index" && this.cx.getAnn(e).call) return true;
    return false;
  }

  // Binds complex pointer operands to temporaries: a fat pointer is read in two
  // places, and evaluating the expression twice would repeat its side effects.
  pbind(items: { s: string; e: Expr }[]): { pre: string; v: string[] } {
    const pre: string[] = [];
    const v: string[] = [];
    for (const it of items) {
      if (this.isSimple(it.e)) { v.push(this.paren(it.s)); continue; }
      const t = this.tmp();
      pre.push(`${t} = ${it.s}`);
      v.push(t);
    }
    return { pre: pre.join(", "), v };
  }

  // A null pointer is null itself, so reading through one needs a guard.
  pidx(x: string): string {
    return `(${x} ? ${this.paren(x)}.i : 0)`;
  }

  parr(x: string): string {
    return `(${x} ? ${this.paren(x)}.a : null)`;
  }

  pbox(s: string, e: Expr, t: CppType): string {
    const x = this.complex(s, e);
    if (t.dims.length && !t.isBox()) return `{a: ${x}, i: 0}`;
    return x;
  }

  isZeroLit(e: Expr): boolean {
    return e.kind === "lit" && (e.lkind === "null" || ((e.lkind === "int" || e.lkind === "char") && parseNumber(e.value) === 0));
  }

  argFor(p: CppType, x: Expr, conv: { kind: string; fn: FuncInfo } | null): string {
    if (conv && conv.kind === "ctor") {
      const fq = this.cx.stripAll(p);
      const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
      const cps = this.cx.funcParams(conv.fn);
      const inner = cps.length ? this.argFor(cps[0].type, x, null) : this.ex(x);
      return `new ${cn}(${inner})`;
    }
    if (conv && conv.kind === "conv") {
      return `${this.paren(this.objOf(x))}.${methodJsName(conv.fn)}()`;
    }
    const at = this.cx.getAnn(x).t as CppType;
    const pB = isBoxLike(p);
    const aB = at ? isBoxLike(at) : false;
    // A pointer is a value: the copy must not share its fat pointer with the
    // original, or moving one of them would move the other.
    if (p.ptr > 0 && !p.ref && !p.dims.length && !p.isFunc &&
      at && at.ptr > 0 && !at.ref && !at.dims.length && !at.isFunc) {
      const src = this.complex(this.ex(x), x);
      const sp = this.paren(src);
      return `(${src} ? {a: ${sp}.a, i: ${sp}.i} : null)`;
    }
    if (p.dims.length && x.kind === "initlist") {
      return this.arrayInit(p, (x as InitListExpr).items, null as unknown as VarDecl);
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
    if (coreName(p) === "bool" && at && at.isBox() && !at.isFunc) return `(${this.ex(x)} != null)`;
    if (coreName(p) === "bool" && at && !isNumericName(coreName(at)) && !this.cx.enums.has(this.cx.stripAll(at)) && at.name !== "__null") {
      return `(${this.ex(x)} != null)`;
    }
    if (p.ptr > 0 && at && at.dims.length && !at.isBox()) return this.exBox(x);
    if (pB && aB) {
      if (at && at.ref) return this.exBox(x);
      // A reference parameter reads through an address, so a class value has to
      // be given one.
      if (p.ref && at && !at.ref && !at.ptr && !at.dims.length && !at.isFunc &&
        this.cx.classes.has(this.cx.stripAll(at))) return this.exBox(x);
      return this.ex(x);
    }
    if (at && at.name === "__null" && isNumericName(coreName(p))) return "0";
    if (isIntegerName(coreName(p)) && at && (coreName(at) === "float" || coreName(at) === "double")) {
      return `Math.trunc(${this.ex(x)})`;
    }
    return this.ex(x);
  }

  returnEx(s: ReturnStmt, x: Expr): string {
    const a = this.cx.getAnn(s);
    if (a.call) {
      const scopeFn = this.curFn();
      const ret = scopeFn ? this.cx.funcRet(scopeFn) : CppType.basic("void");
      const fq = this.cx.stripAll(ret);
      const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
      const items = x.kind === "initlist" ? (x as InitListExpr).items : [x];
      return this.ctorExpr(cn, a.call as FuncInfo, items, a.convs, ret);
    }
    const scopeFn = this.curFn();
    if (!scopeFn) return this.ex(x);
    const ret = this.cx.funcRet(scopeFn);
    if (ret.name === "void") return this.ex(x);
    return this.argFor(ret, x, null);
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

  // A call that returns a reference to a scalar hands back a box; where a
  // value is wanted it stands for the element the box points at, exactly as a
  // reference variable does.
  // The left side of an assignment reached through a box. A call returning a
  // scalar reference is one already, so it must not be read through twice.
  lhsBox(e: Expr): string {
    return e.kind === "call" && this.returnsScalarRef(e) ? this.exCall(e) : this.ex(e);
  }

  returnsScalarRef(e: CallExpr): boolean {
    const t = this.cx.getAnn(e).t as CppType;
    return !!t && t.ref !== "" && !t.ptr && !t.dims.length && !t.isFunc &&
      !this.cx.classes.has(this.cx.stripAll(t));
  }

  exCallValue(e: CallExpr): string {
    if (this.returnsScalarRef(e)) {
      const v = this.tmp();
      return `(${v} = ${this.exCall(e)}, ${v}.a[${v}.i])`;
    }
    return this.exCall(e);
  }

  exCall(e: CallExpr): string {
    const a = this.cx.getAnn(e);
    // A destructor call that resolved to no destructor has nothing to do; the
    // target language reclaims the storage itself.
    if (!a.call && e.fn.kind === "member" && (e.fn as MemberExpr).field.charAt(0) === "~") return "void 0";
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
          return `${this.paren(o)}.${safeJsName(f.v.short)}(${e.args.map(x => this.ex(x)).join(", ")})`;
        }
      }
      return `${this.paren(this.ex(e.fn))}(${e.args.map(x => this.ex(x)).join(", ")})`;
    }
    const ps = this.cx.funcParams(fn);
    const aa: string[] = [];
    e.args.forEach((x, i) => {
      // A parameter pack keeps the type it was deduced to for this call.
      const pt = i < ps.length ? ps[i].type : null;
      if (pt && this.isInitListParam(pt) && x.kind === "initlist") {
        aa.push(`[${(x as InitListExpr).items.map(y => this.ex(y)).join(", ")}]`);
      } else {
        aa.push(pt ? this.argFor(pt, x, a.convs[i] || null) : this.ex(x));
      }
    });
    for (let i = e.args.length; i < ps.length && !ps[i].variadic; i++) {
      aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
    }
    let s: string;
    if (!fn.isMethod) {
      s = `${fn.mangled}(${aa.join(", ")})`;
    } else if (fn.isStatic) {
      const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
      s = `${cls.mangled}.${methodJsName(fn)}(${aa.join(", ")})`;
    } else if (e.fn.kind === "id" && (e.fn as IdExpr).parts.length > 1) {
      const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
      s = `${cls.mangled}.prototype.${methodJsName(fn)}.call(this${aa.length ? ", " + aa.join(", ") : ""})`;
    } else if (e.fn.kind === "member") {
      let o = this.objOf((e.fn as MemberExpr).obj);
      const ma = this.cx.getAnn(e.fn);
      if (ma.arrowCall) o = `(${this.paren(o)}.${methodJsName(ma.arrowCall as FuncInfo)}())`;
      if ((e.fn as MemberExpr).qual.length) {
        const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
        s = `${cls.mangled}.prototype.${methodJsName(fn)}.call(${o}${aa.length ? ", " + aa.join(", ") : ""})`;
      } else {
        s = `${this.paren(o)}.${methodJsName(fn)}(${aa.join(", ")})`;
      }
    } else if (e.fn.kind === "id") {
      // A name can denote an object whose operator() is called, not a member of
      // the enclosing class.
      const callee = this.cx.getAnn(e.fn).sym;
      s = callee && callee.k === "var"
        ? `${this.paren(this.objOf(e.fn))}.${methodJsName(fn)}(${aa.join(", ")})`
        : `this.${methodJsName(fn)}(${aa.join(", ")})`;
    } else {
      s = `${this.paren(this.objOf(e.fn))}.${methodJsName(fn)}(${aa.join(", ")})`;
    }
    if (a.copyCtor) {
      const ret = this.cx.funcRet(fn);
      const cn = (this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo).mangled as string;
      s = `new ${cn}(${this.copyArg(s, ret)})`;
    }
    return s;
  }

  exBuiltin(name: string, e: CallExpr): string {
    if (name === "__ctj_js") {
      if (!e.args.length || e.args[0].kind !== "lit" || (e.args[0] as LitExpr).lkind !== "string") {
        this.cx.fail("__ctj_js needs a string literal", e);
      }
      let tpl = ((e.args[0] as LitExpr).value).slice(1, -1);
      for (let i = 1; i < e.args.length; i++) {
        tpl = tpl.split(`$${i}`).join(`(${this.ex(e.args[i])})`);
      }
      return `(${tpl})`;
    }
    if (name === "__ctj_php") return "undefined";
    if (name === "__builtin_expect" || name === "__builtin_expect_with_probability") return this.ex(e.args[0]);
    if (name === "__builtin_choose_expr") {
      const c = constEval(this.cx, e.args[0], this.blankScope());
      return this.ex(e.args[c ? 1 : 2]);
    }
    if (name === "__builtin_constant_p") {
      const c = constEval(this.cx, e.args[0], this.blankScope());
      return c === null ? "0" : "1";
    }
    if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
      return `(() => { throw new Error("${name}"); })()`;
    }
    if (isMathBuiltin(name)) {
      let m = name.slice("__builtin_".length);
      if (m === "nan" || m === "nanf" || m === "nans") return "NaN";
      if (m === "inf" || m === "inff" || m === "huge_val") return "Infinity";
      // JavaScript spells the absolute-value functions "abs".
      if (m === "fabs" || m === "fabsf" || m === "fabsl") m = "abs";
      // JavaScript has no Math.fmod; the % operator computes the same value.
      if (m === "fmod" || m === "fmodf" || m === "fmodl") {
        return `((${this.ex(e.args[0])}) % (${this.ex(e.args[1])}))`;
      }
      if (m.endsWith("f") && (Math as unknown as Record<string, unknown>)[m.slice(0, -1)] !== undefined) m = m.slice(0, -1);
      return `Math.${m}(${e.args.map(x => this.ex(x)).join(", ")})`;
    }
    if (name === "__builtin_clz") return `Math.clz32(${this.ex(e.args[0])})`;
    if (name === "__builtin_ctz") {
      const x = this.ex(e.args[0]);
      return `(${x} === 0 ? 32 : 31 - Math.clz32((${x}) & -(${x})))`;
    }
    if (name === "__builtin_popcount") {
      const x = this.ex(e.args[0]);
      return `(((${x}) >>> 0).toString(2).split("1").length - 1)`;
    }
    if (name === "__builtin_ffs") {
      const x = this.ex(e.args[0]);
      return `(((${x}) & 0xffffffff) === 0 ? 0 : 32 - Math.clz32((${x}) & -(${x})))`;
    }
    if (name === "__builtin_parity") {
      const x = this.ex(e.args[0]);
      return `(((((${x}) >>> 0).toString(2).split("1").length - 1) & 1))`;
    }
    if (name === "__builtin_bswap16") {
      const x = this.ex(e.args[0]);
      return `((((${x}) & 255) << 8) | (((${x}) >> 8) & 255))`;
    }
    if (name === "__builtin_bswap32") {
      const x = this.ex(e.args[0]);
      return `(((((${x}) & 255) << 24) | ((((${x}) >> 8) & 255) << 16) | ((((${x}) >> 16) & 255) << 8) | ((((${x}) >> 24) & 255))) >>> 0)`;
    }
    if (name === "__builtin_bswap64") {
      const x = this.ex(e.args[0]);
      return `Number(BigInt(${x} === undefined ? 0 : 0) | BigInt(0))`;
    }
    if (name === "__builtin_alloca") return `{a: new Array(${this.ex(e.args[0])}).fill(0), i: 0}`;
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
    const mem = this.exMemBuiltin(name, e);
    if (mem !== null) return mem;
    return `(() => { throw new Error("unresolved ${name}"); })()`;
  }

  blankScope(): Scope {
    return rootScope();
  }

  exIndex(e: IndexExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const ps = this.cx.funcParams(fn);
      const o = this.objOf(e.arr);
      const aa = this.argFor(ps[0].type, e.idx, a.convs[0] || null);
      let s = `${this.paren(o)}.${methodJsName(fn)}(${aa})`;
      if (a.copyCtor) {
        const ret = this.cx.funcRet(fn);
        const cn = (this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo).mangled as string;
        s = `new ${cn}(${this.copyArg(s, ret)})`;
      }
      return s;
    }
    const at = this.cx.getAnn(e.arr).t as CppType;
    if (at.ptr > 0) {
      const p = this.complex(this.ex(e.arr), e.arr);
      const pp = this.paren(p);
      if (this.isZeroLit(e.idx)) return `${pp}.a[${pp}.i]`;
      return `${pp}.a[${pp}.i + (${this.ex(e.idx)})]`;
    }
    const arr = this.complex(this.ex(e.arr), e.arr);
    return `${this.paren(arr)}[${this.ex(e.idx)}]`;
  }

  exMember(e: MemberExpr): string {
    const a = this.cx.getAnn(e);
    const f = a.sym;
    if (!f || f.k !== "var" || !f.v.isField) this.cx.fail("bad member", e);
    const v = f.v;
    const fname = safeJsName(v.short);
    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
    if (v.isStatic) return `${cls.mangled}.${fname}`;
    let o = this.objOf(e.obj);
    if (a.arrowCall) o = `(${this.paren(o)}.${methodJsName(a.arrowCall as FuncInfo)}())`;
    if (this.cx.fieldType(cls, v.short).ref) {
      const t = this.tmp();
      return `(${t} = ${this.paren(o)}.${fname}, ${t}.a[${t}.i])`;
    }
    return `${this.paren(o)}.${fname}`;
  }

  exUnary(e: UnaryExpr): string {
    const a = this.cx.getAnn(e);
    if (a.call) {
      const fn = a.call as FuncInfo;
      const o = this.objOf(e.arg);
      if (e.op === "++" || e.op === "--") {
        const ps = this.cx.funcParams(fn);
        const post = ps.length === 1 ? "(0)" : "()";
        return `${this.paren(o)}.${methodJsName(fn)}${post}`;
      }
      return `${this.paren(o)}.${methodJsName(fn)}()`;
    }
    if (e.op === "*") {
      const at = this.cx.getAnn(e.arg).t as CppType;
      if (at.isFunc) return this.ex(e.arg);
      if (e.arg.kind === "unary" && incKind(e.arg) && isPostfix(e.arg)) {
        const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
        const pp = this.paren(p);
        return `${pp}.a[${pp}.i${incKind(e.arg)}]`;
      }
      if (e.arg.kind === "unary" && incKind(e.arg)) {
        const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
        const pp = this.paren(p);
        return `${pp}.a[${incKind(e.arg)}${pp}.i]`;
      }
      return this.deref(e.arg);
    }
    if (e.op === "&") {
      const at = this.cx.getAnn(e.arg).t as CppType;
      if (at.isFunc) return this.ex(e.arg);
      return this.exAddr(e.arg);
    }
    const inc = incKind(e);
    if (inc) {
      const post = isPostfix(e);
      const at = this.cx.getAnn(e.arg).t as CppType;
      if (this.splitLhs(e.arg)) {
        const t = this.tmp();
        const inner = at.ptr > 0 && !at.isFunc ? `${t}.i` : `${t}.a[${t}.i]`;
        return `(${t} = ${this.ex(e.arg)}, ${post ? inner + inc : inc + inner})`;
      }
      if (at.ptr > 0 && !at.isFunc) {
        const p = this.paren(this.lvalue(e.arg));
        return post ? `${p}.i${inc}` : `${inc}${p}.i`;
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
        let s = `${this.paren(o)}.${methodJsName(fn)}(${aa})`;
        if (a.copyCtor) {
          const ret = this.cx.funcRet(fn);
          const cn = (this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo).mangled as string;
          s = `new ${cn}(${this.copyArg(s, ret)})`;
        }
        return s;
      }
      const aa = [this.argFor(ps[0].type, e.l, a.convs[0] || null), this.argFor(ps[1].type, e.r, a.convs[1] || null)];
      let s = `${fn.mangled}(${aa.join(", ")})`;
      if (a.copyCtor) {
        const ret = this.cx.funcRet(fn);
        const cn = (this.cx.classes.get(this.cx.stripAll(ret)) as ClsInfo).mangled as string;
        s = `new ${cn}(${this.copyArg(s, ret)})`;
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
        const b = this.pbind([
          { s: this.pbox(l, e.l, lt as CppType), e: e.l },
          { s: this.pbox(r, e.r, rt as CppType), e: e.r },
        ]);
        const xp = b.v[0];
        const yp = b.v[1];
        // A null pointer is null itself, so both sides are checked first.
        const eq = `${xp} === ${yp} || (${xp} && ${yp} && ${xp}.a === ${yp}.a && ${xp}.i === ${yp}.i)`;
        const body = e.op === "==" ? `(${eq})` : `(!(${eq}))`;
        return b.pre ? `(${b.pre}, ${body})` : body;
      }
      if (lp && (rt.name === "__null" || this.isZeroLit(e.r))) return `(${l} ${op} null)`;
      if (rp && (lt.name === "__null" || this.isZeroLit(e.l))) return `(null ${op} ${r})`;
      return `(${l} ${op} ${r})`;
    }
    if (e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=") {
      if (lp && rp) {
        const b = this.pbind([
          { s: this.pbox(l, e.l, lt as CppType), e: e.l },
          { s: this.pbox(r, e.r, rt as CppType), e: e.r },
        ]);
        const body = `(${this.pidx(b.v[0])} ${e.op} ${this.pidx(b.v[1])})`;
        return b.pre ? `(${b.pre}, ${body})` : body;
      }
      return `(${l} ${e.op} ${r})`;
    }
    if ((e.op === "+" || e.op === "-") && (lp || rp)) {
      if (lp && rp) {
        if (e.op !== "-") this.cx.fail("bad pointer arithmetic", e);
        const b = this.pbind([
          { s: this.pbox(l, e.l, lt as CppType), e: e.l },
          { s: this.pbox(r, e.r, rt as CppType), e: e.r },
        ]);
        const body = `(${this.pidx(b.v[0])} - ${this.pidx(b.v[1])})`;
        return b.pre ? `(${b.pre}, ${body})` : body;
      }
      if (lp) {
        const b = this.pbind([{ s: this.pbox(l, e.l, lt as CppType), e: e.l }]);
        const sign = e.op === "+" ? "+" : "-";
        const body = `({a: ${this.parr(b.v[0])}, i: ${this.pidx(b.v[0])} ${sign} (${r})})`;
        return b.pre ? `(${b.pre}, ${body})` : body;
      }
      const b = this.pbind([{ s: this.pbox(r, e.r, rt as CppType), e: e.r }]);
      const body = `({a: ${this.parr(b.v[0])}, i: (${l}) + ${this.pidx(b.v[0])}})`;
      return b.pre ? `(${b.pre}, ${body})` : body;
    }
    if (e.op === "<<" || e.op === ">>") {
      if (e.op === ">>" && lt && coreName(lt).startsWith("unsigned")) return `(${l} >>> ${r})`;
      return `(${l} ${e.op} ${r})`;
    }
    if (e.op === "/" && lt && rt && isIntegerName(coreName(lt)) && isIntegerName(coreName(rt))) {
      return `(Math.trunc(${l} / ${r}))`;
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
        const cn = (this.cx.classes.get(this.cx.stripAll(t)) as ClsInfo).mangled as string;
        rhs = this.ctorExpr(cn, a.initCall, items, a.convs, t);
      } else {
        rhs = this.argFor(ps[ps.length - 1].type, e.r, a.convs[a.convs.length - 1] || null);
      }
      if (fn.isMethod) {
        const o = this.objOf(e.l);
        return `${this.paren(o)}.${methodJsName(fn)}(${rhs})`;
      }
      return `${fn.mangled}(${this.ex(e.l)}, ${rhs})`;
    }
    const lt = this.cx.getAnn(e.l).t as CppType;
    if (this.splitLhs(e.l)) {
      const t = this.tmp();
      const target = new CppType(lt.name);
      target.segs = lt.segs;
      target.ptr = lt.ptr;
      target.dims = lt.dims;
      const rhs = e.op === "=" ? this.argFor(target, e.r, null) : this.ex(e.r);
      return `(${t} = ${this.lhsBox(e.l)}, ${t}.a[${t}.i] ${e.op} ${rhs})`;
    }
    const l = this.lvalue(e.l);
    if ((e.op === "+=" || e.op === "-=") && lt.ptr > 0 && !lt.isFunc) {
      const op = e.op === "+=" ? "+=" : "-=";
      return `${this.paren(l)}.i ${op} (${this.ex(e.r)})`;
    }
    const target = new CppType(lt.name);
    target.segs = lt.segs;
    target.ptr = lt.ptr;
    target.dims = lt.dims;
    let rhs: string;
    if (e.op === "=") {
      rhs = this.argFor(target, e.r, null);
    } else {
      const rt = this.cx.getAnn(e.r).t as CppType | null;
      rhs = rt && rt.isBox() && !target.isBox() ? this.argFor(target, e.r, null) : this.ex(e.r);
    }
    return `${l} ${e.op} ${rhs}`;
  }

  // "::new((void *)__p) _Up(args)" builds the object in the storage __p points
  // at, which is the slot of the fat pointer the target language holds.
  exPlacementNew(e: NewExpr, t: CppType): string {
    const a = this.cx.getAnn(e);
    const pp = this.paren(this.ex(e.placement[0]));
    const slot = `${pp}.a[${pp}.i]`;
    const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      const obj = a.call
        ? this.ctorExpr(cn, a.call as FuncInfo, e.args, a.convs, t)
        : `new ${cn}()`;
      return `(${slot} = ${obj})`;
    }
    const v = e.args.length ? this.ex(e.args[0]) : this.zero(t);
    return `(${slot} = ${v})`;
  }

  exNew(e: NewExpr): string {
    const a = this.cx.getAnn(e);
    const t = this.cx.resolveTypeNode(e.type, this.blankScope());
    if (e.placement.length) return this.exPlacementNew(e, t);
    if (e.isArray) {
      const n = e.type.dims.length ? this.ex(e.type.dims[0]) : "0";
      const et = new CppType(t.name);
      et.segs = t.segs;
      et.ptr = t.ptr;
      et.ref = t.ref;
      const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
      if (fcls && this.cx.classes.has(fcls)) {
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        return `{a: Array.from({length: ${n}}, () => new ${cn}()), i: 0}`;
      }
      if (isBoxLike(et) || et.isFunc) return `{a: new Array(${n}).fill(null), i: 0}`;
      return `{a: new Array(${n}).fill(${this.zero(et)}), i: 0}`;
    }
    const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
    if (fcls && this.cx.classes.has(fcls) && a.call) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      return `{a: [${this.ctorExpr(cn, a.call as FuncInfo, e.args, a.convs, t)}], i: 0}`;
    }
    if (fcls && this.cx.classes.has(fcls)) {
      const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
      return `{a: [new ${cn}()], i: 0}`;
    }
    if (e.args.length) return `{a: [${this.ex(e.args[0])}], i: 0}`;
    return `{a: [${this.zero(t)}], i: 0}`;
  }

  exCast(e: CastExpr): string {
    const a = this.cx.getAnn(e);
    const t = a.t as CppType;
    if (a.call) {
      const fq = this.cx.stripAll(t);
      const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
      const cps = this.cx.funcParams(a.call as FuncInfo);
      // "T()" and "T{}" value initialise: the empty list is not an argument of
      // the constructor the cast resolved to.
      if (!cps.length || (e.arg.kind === "initlist" && !(e.arg as InitListExpr).items.length)) return `new ${cn}()`;
      return `new ${cn}(${this.argFor(cps[0].type, e.arg, a.conv)})`;
    }
    // "size_type()" value-initialises: there is no argument to convert.
    if (e.arg.kind === "initlist" && !(e.arg as InitListExpr).items.length) return this.zero(t);
    if (a.conv) {
      return `${this.paren(this.objOf(e.arg))}.${methodJsName((a.conv as { kind: string; fn: FuncInfo }).fn)}()`;
    }
    if (e.ckind === "dynamic") {
      const fq = this.cx.stripAll(t);
      const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
      const x = this.complex(this.ex(e.arg), e.arg);
      if (t.ptr > 0) return `(${x} instanceof ${cn} ? ${x} : null)`;
      return `(${x} instanceof ${cn} ? ${x} : (() => { throw new Error("bad cast"); })())`;
    }
    if (coreName(t) === "void" && !t.ptr) return `(void (${this.ex(e.arg)}))`;
    const at = this.cx.getAnn(e.arg).t as CppType;
    if (coreName(t) === "bool" && at.isBox() && !at.isFunc) return `(${this.ex(e.arg)} != null)`;
    if (coreName(t) === "bool" && isNumericName(coreName(at))) return `(${this.ex(e.arg)} !== 0)`;
    if (isIntegerName(coreName(t)) && (coreName(at) === "float" || coreName(at) === "double")) {
      return `Math.trunc(${this.ex(e.arg)})`;
    }
    if (t.ptr > 0 && (at.name === "__null" || this.isZeroLit(e.arg))) return "null";
    // Casting to a reference yields the address of the value, as any other
    // reference does ("static_cast<_Tp&&>(__t)" in std::forward).
    if (t.ref) return this.exBox(e.arg);
    // An unsigned value wraps, so "size_t(-1)" is the largest size rather than
    // a negative one. The width is the 32-bit one: a JS number cannot hold a
    // 64-bit unsigned range.
    if (isUnsignedName(coreName(t))) return `(${this.ex(e.arg)} >>> 0)`;
    return this.ex(e.arg);
  }

  exTypeid(e: TypeidExpr): string {
    let key: string;
    if (e.isType && e.type) {
      key = this.cx.resolveTypeNode(e.type, this.blankScope()).key();
    } else if (e.expr) {
      key = (this.cx.getAnn(e.expr).t as CppType).key();
    } else {
      key = "void";
    }
    return `{__typeName: "${key}"}`;
  }

  exLambda(e: LambdaExpr): string {
    const caps = this.cx.getAnn(e).caps;
    const alias = new Map<string, string>();
    const defs: string[] = [];
    for (const c of caps) {
      if (c.mode === "=" && c.v) {
        alias.set(c.name, `$cap_${c.name}`);
        defs.push(`$cap_${c.name} = ${this.varName(c.v, false)}`);
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
      const nm = p.name ? safeJsName(p.name) : `$p${i}`;
      decl.push(nm);
    }
    const lt = this.cx.getAnn(e).t as CppType;
    const lcls = this.cx.classes.get(this.cx.stripAll(lt)) as ClsInfo;
    const lfn = (lcls.methods.get("operator()") || [])[0];
    if (lfn) this.fnStack.push(lfn);
    for (const s of e.body) this.stmt(s);
    if (lfn) this.fnStack.pop();
    this.ind = this.ind.slice(0, -2);
    this.out = save;
    this.alias.pop();
    const all = defs.concat(decl);
    return `{op_call: (${all.join(", ")}) => {\n${lines.join("\n")}\n${this.ind}}}`;
  }

  sizeofType(e: SizeofExpr): CppType {
    if (e.isType && e.type) return this.cx.resolveTypeNode(e.type, this.blankScope());
    if (e.expr) return this.cx.getAnn(e.expr).t as CppType;
    this.cx.fail("bad sizeof", e);
    return CppType.basic("int");
  }

  constStr(e: Expr): string {
    const v = constEval(this.cx, e, this.blankScope());
    if (typeof v === "number") return String(v);
    return this.ex(e);
  }

  zero(t: CppType): string {
    const n = coreName(t);
    if (n === "bool") return "false";
    if (t.isFunc || t.name === "__null") return "null";
    if (n === "void") return "undefined";
    return "0";
  }
}

}
