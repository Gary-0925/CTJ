// JavaScript code generator: emits the collected program as JavaScript (class JsGen).
namespace CTJ {
  // The JavaScript property a method is called by: its symbol, so that each overload
  // has a name of its own. A constructor and a destructor keep the names JavaScript
  // gives them.
  export function methodJsName(cx: Cx, fn: FuncInfo): string {
    if (fn.short === "#ctor") return "constructor";
    if (fn.short === "#dtor") return "__dtor";
    return cx.methodSym(fn);
  }

  export function isBoxLike(t: CppType): boolean {
    return (t.isBox() || t.dims.length > 0) && !t.isFunc;
  }

  // The integer types.  The types of up to 32 bits are JS numbers that hold
  // their exact value: a result is reduced to the width of its type by wrapInt,
  // so overflow and unsigned wrap-around behave as in C++.  "long" is 32 bits on
  // this target.  "long long" and "unsigned long long" are BigInts, reduced by
  // BigInt.asIntN and BigInt.asUintN; a number reaches them only through castInt.
  export interface IntKind {
    bits: number;
    signed: boolean;
    big?: boolean;
  }
  const INT_KINDS: Record<string, IntKind> = {
    char: { bits: 8, signed: true },
    "signed char": { bits: 8, signed: true },
    "unsigned char": { bits: 8, signed: false },
    short: { bits: 16, signed: true },
    "unsigned short": { bits: 16, signed: false },
    int: { bits: 32, signed: true },
    "unsigned int": { bits: 32, signed: false },
    long: { bits: 32, signed: true },
    "unsigned long": { bits: 32, signed: false },
    wchar_t: { bits: 32, signed: true },
    char16_t: { bits: 16, signed: false },
    char32_t: { bits: 32, signed: false },
    "long long": { bits: 64, signed: true, big: true },
    "unsigned long long": { bits: 64, signed: false, big: true },
  };
  const LONG_LONG: IntKind = { bits: 64, signed: true, big: true };

  export function intKindOf(t: CppType | null | undefined): IntKind | null {
    if (!t || t.isFunc || t.ptr > 0 || t.dims.length) return null;
    return INT_KINDS[coreName(t)] || null;
  }

  // Integer promotion: a type narrower than int becomes int.
  export function promoteKind(k: IntKind): IntKind {
    return k.bits < 32 ? { bits: 32, signed: true } : k;
  }

  // The usual arithmetic conversions of two integer operands.
  export function commonKind(a: IntKind, b: IntKind): IntKind {
    const pa = promoteKind(a);
    const pb = promoteKind(b);
    if ((pa.big && !pa.signed) || (pb.big && !pb.signed)) return { bits: 64, signed: false, big: true };
    if (pa.big || pb.big) return LONG_LONG;
    if ((pa.bits === 32 && !pa.signed) || (pb.bits === 32 && !pb.signed)) return { bits: 32, signed: false };
    return { bits: 32, signed: true };
  }

  // The type of the result of op on operands of kinds lk and rk.
  export function intResultKind(op: string, lk: IntKind, rk: IntKind): IntKind {
    return op === "<<" || op === ">>" ? promoteKind(lk) : commonKind(lk, rk);
  }

  function wrapBig(x: string, k: IntKind): string {
    return k.signed ? `BigInt.asIntN(64, ${x})` : `BigInt.asUintN(64, ${x})`;
  }

  // The value x reduced to the width and signedness of k.  Every form starts
  // with a ToInt32-style conversion, so a fractional number is truncated too.
  export function wrapInt(x: string, k: IntKind): string {
    if (k.big) return wrapBig(x, k);
    if (k.bits === 32) return k.signed ? `((${x}) | 0)` : `((${x}) >>> 0)`;
    if (k.bits === 16) return k.signed ? `(((${x}) << 16) >> 16)` : `((${x}) & 65535)`;
    return k.signed ? `(((${x}) << 24) >> 24)` : `((${x}) & 255)`;
  }

  // The value x, of integer type from, converted to the integer type to.  A null
  // from stands for a number that is not an integer type, such as a double.
  export function castInt(x: string, from: IntKind | null, to: IntKind): string {
    if (to.big) {
      if (from && from.big) return from.signed === to.signed ? x : wrapBig(x, to);
      if (/^\d+$/.test(x)) {
        const v = BigInt(x);
        return `${to.signed ? BigInt.asIntN(64, v) : BigInt.asUintN(64, v)}n`;
      }
      const b = from ? `BigInt(${x})` : `BigInt(Math.trunc(${x}))`;
      const needsWrap = !from || (!to.signed && from.signed);
      return needsWrap ? wrapBig(b, to) : b;
    }
    if (from && from.big) return `Number(BigInt.${to.signed ? "asIntN" : "asUintN"}(${to.bits}, ${x}))`;
    return wrapInt(x, to);
  }

  // The number that x, of kind k, stands for when a number is expected.
  export function toNumber(x: string, k: IntKind | null): string {
    return k && k.big ? `Number(${x})` : x;
  }

  // The JS BigInt literal of an integer literal, exact at any width.
  export function bigLiteral(raw: string): string {
    const s = raw.replace(/'/g, "").replace(/[uUlL]+$/, "");
    if (/^0[0-7]+$/.test(s)) return `0o${s.slice(1)}n`;
    return `${s}n`;
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
    // Integer kind of each enclosing switch's condition: a 64-bit one needs BigInt case labels.
    switchKind: (IntKind | null)[] = [];
    exStack: string[] = [];
    rangeN = 0;
    fnStack: FuncInfo[] = [];
    // Set when a library body is emitted: the program then declares the $L helpers.
    usesLibc = false;

    constructor(cx: Cx) {
      this.cx = cx;
    }

    // The output is one object, { run($input) }.  Each call of run declares the
    // classes, globals and functions afresh inside its own scope, so separate
    // runs share no state, and it collects the three streams in $io: fd 1
    // (cout, printf) is stdout, fd 2 (cerr) is stderr, fd 3 (clog) is stdlog.
    // exit() throws { $exit: code }; an uncaught C++ error ends the run with
    // exit code 1 and its message on stderr.
    run(): string {
      const body: string[] = [];
      this.out = body;
      // Integer division and remainder by zero: g++ programs die of SIGFPE there, which a
      // C++ catch cannot take; the marker below is not a C++ exception for the same reason.
      this.line("const $fpe = () => { throw {$fpe: true}; };");
      this.line('const $div = (a, b) => { if (b == 0) $fpe(); return typeof a === "bigint" ? a / b : Math.trunc(a / b); };');
      this.line("const $mod = (a, b) => { if (b == 0) $fpe(); return a % b; };");
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
      // Static locals are declared before any global is initialized, since a
      // global's constructor may call a function that uses them. The tables of
      // a library file come next: the library is set up before main, as in C++.
      const rank = (v: VarInfo): number => (v.lifted ? 0 : isLibraryFile(v.decl.file) ? 1 : 2);
      const vars = [...this.cx.vars.values()].sort((a, b) => rank(a) - rank(b));
      for (const v of vars) this.emitGlobal(v);
      this.out = save;
      if (this.tmpN > gbase) this.line(this.tmpDecl(gbase, this.tmpN));
      for (const l of glines) this.out.push(l);
      const mains = this.cx.funcs.get("main") || [];
      const main = mains.find(f => !f.isMethod && f.referenced);
      if (main) {
        const ps = this.cx.funcParams(main);
        const args = ps.length >= 3 ? ["0", `{a: [], i: 0}`, "null"] : ps.length === 2 ? ["0", `{a: [], i: 0}`] : ps.length === 1 ? ["0"] : [];
        this.line(`$rc = main(${args.join(", ")}) | 0;`);
      }
      const head = ['"use strict";', "return {", '  run($input = "") {', "    const $io = {", '      inp: { s: $input == null ? "" : String($input), p: 0 },', '      out: "", err: "", log: "", vf: null, addr: 0,', "      write(fd, t) {", "        if (fd === 2) this.err += t;", "        else if (fd === 3) this.log += t;", "        else this.out += t;", "      },", "    };", "    let $rc = 0;", "    try {"];
      const tail = ["    } catch (e) {", '      if (typeof e === "object" && e !== null && "$exit" in e) $rc = e.$exit;', '      else if (typeof e === "object" && e !== null && "$fpe" in e) { $io.err += "Floating point exception\\n"; $rc = 136; }', "      else {", '        $io.err += String(e && e.message !== undefined ? e.message : e) + "\\n";', "        $rc = 1;", "      }", "    }", "    return { stdout: $io.out, stderr: $io.err, stdlog: $io.log, exitCode: $rc };", "  },", "};"];
      if (this.usesLibc) body.unshift(...libcPrelude());
      return [...head, ...body.map(l => "      " + l), ...tail].join("\n") + "\n";
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
          const ft = this.cx.fieldType(c, name);
          // Pointer and reference fields don't require the pointee class to be
          // emitted first — only value (non-pointer, non-reference) fields do.
          if (ft.ptr > 0 || ft.ref) continue;
          const fq = this.cx.stripAll(ft);
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
          for (const x of d)
            if (!done.has(x)) {
              ok = false;
              break;
            }
          if (ok) {
            next = c;
            break;
          }
        }
        if (!next) {
          for (const c of cs)
            if (!done.has(c.fq)) {
              next = c;
              break;
            }
        }
        done.add((next as ClsInfo).fq);
        res.push(next as ClsInfo);
      }
      return res;
    }

    line(s: string): void {
      this.out.push(this.ind + s);
    }

    // The braces of a switch are its own: the statements it was given go
    // straight inside them, so that the labels stay in the switch itself.
    switchBody(head: string, kind: IntKind | null, body: Stmt): void {
      this.switchKind.push(kind);
      this.block(head, () => this.switchStmts(body));
      this.switchKind.pop();
    }

    // Labels compare with ===, so a BigInt discriminant takes BigInt labels.
    caseLabel(value: Expr): string {
      const k = this.switchKind[this.switchKind.length - 1];
      return k && k.big ? castInt(this.constStr(value), null, k) : this.constStr(value);
    }

    switchStmts(body: Stmt): void {
      if (body.kind === "compound") {
        for (const x of body.stmts) this.stmt(x);
        return;
      }
      this.stmt(body);
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

    // The temporaries a body needs are only known once it has been emitted, so
    // the body goes into a buffer and the declarations follow the signature.
    withTmpDecl(signature: string, body: () => void): void {
      const base = this.tmpN;
      const save = this.out;
      const lines: string[] = [];
      this.out = lines;
      this.ind += "  ";
      body();
      this.ind = this.ind.slice(0, -2);
      this.out = save;
      this.line(signature);
      this.ind += "  ";
      if (this.tmpN > base) this.line(this.tmpDecl(base, this.tmpN));
      for (const l of lines) this.out.push(l);
      this.ind = this.ind.slice(0, -2);
      this.line(`}`);
    }

    tmpDecl(a: number, b: number): string {
      const ns: string[] = [];
      for (let i = a; i < b; i++) ns.push(`$t${i}`);
      return `let ${ns.join(", ")};`;
    }

    emitClass(c: ClsInfo): void {
      const cn = c.mangled as string;
      const base = c.bases.length ? ((this.cx.classes.get(c.bases[0].fq) as ClsInfo).mangled as string) : "";
      this.block(base ? `class ${cn} extends ${base}` : `class ${cn}`, () => {
        for (const [name] of c.fields) {
          if (!c.fieldStatic.has(name)) this.line(`${this.cx.fieldJsName(c, name)};`);
        }
        const ctors = (c.methods.get("#ctor") || []).filter(f => f.referenced);
        const inherited = this.inheritedCtors(c);
        if (ctors.length || inherited.length || c.fields.size || c.bases.length) this.emitCtor(c, ctors, inherited);
        // A class with nothing to initialize is still a base of others, and a
        // base constructor runs "Base.prototype.__init_Base.call(this)": the
        // entry point has to exist even when the class itself needs no fields.
        else this.line(`__init_${cn}(...$a) { }`);
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
            const folded = this.foldStaticConst(c, ft, fd, init as Expr);
            this.line(`static ${safeJsName(name)} = ${folded !== null ? folded : this.argFor(ft, init as Expr, null)};`);
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
        // A base brings its own bases along: the methods of "std::hash<int>",
        // reached through an empty-base helper, answer "op_call" on the object
        // just as its own would.
        this.line(`for (let $b = ${b}; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {`);
        this.line(`  for (const $k of Object.getOwnPropertyNames($b.prototype)) {`);
        this.line(`    if ($k !== "constructor" && !($k in ${cn}.prototype)) ${cn}.prototype[$k] = $b.prototype[$k];`);
        this.line(`  }`);
        this.line(`  for (const $k of Object.getOwnPropertyNames($b)) {`);
        this.line(`    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in ${cn})) ${cn}[$k] = $b[$k];`);
        this.line(`  }`);
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
        let hit = !inh ? list.find(x => last(x.name).n === bc.short || last(x.name).n === b.fq) : null;
        // When the base is written through a typedef or template alias (e.g.
        // "_Tp_alloc_type(__a)"), the init name won't match the resolved class
        // short name.  Fall back to ctorBase which resolves the alias.
        if (!hit && !inh) {
          hit = list.find(x => this.cx.ctorBase(c, x.name) === b.fq) || null;
        }
        // A delegating constructor ("_Hashtable(...) : _Hashtable(args)")
        // initializes the base through the constructor it delegates to, so that
        // constructor's own base initializer says what the base receives.
        if (!hit && !inh) {
          const deleg = list.find(x => this.cx.isDelegatingCtorInit(c, x));
          if (deleg) {
            const target = this.cx.getAnn(deleg).call as FuncInfo | undefined;
            const tinit = target ? target.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === b.fq) : undefined;
            if (target && tinit) {
              const ta = this.cx.getAnn(tinit);
              const bfn = ta.call as FuncInfo | undefined;
              const bps = bfn ? this.cx.funcParams(bfn) : [];
              const tps = this.cx.funcParams(target);
              const aa = tinit.args.map((x, i) => {
                // A base argument that names one of the delegated-to
                // constructor's parameters is what the delegating call passes
                // there; anything else (a default-constructed functor, say) is
                // emitted as written.
                let src: Expr = x;
                if (x.kind === "id" && (x as IdExpr).parts.length === 1) {
                  const j = tps.findIndex(q => q.name === (x as IdExpr).parts[0].n);
                  if (j >= 0 && j < deleg.args.length) src = deleg.args[j];
                }
                const p = bps[i] ? bps[i].type : null;
                return p ? this.argFor(p, src, null) : this.ex(src);
              });
              return `...[${aa.join(", ")}]`;
            }
          }
        }
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
            const raw = baseArgs(0, x.fn, x.inh);
            // baseArgs returns a spread expression: "...[expr1, expr2]" or
            // "...(function(){...})()"  or "".  We need the raw arg expressions
            // inside a plain [...] for the ternary branches.
            let inner: string;
            if (raw.startsWith("...[")) {
              // Strip outer ...[...] to get the raw comma-separated expressions.
              inner = raw.slice(4, -1);
            } else if (raw.startsWith("...")) {
              // Inherited ctor: ...(function () { return [args]; })()
              // Keep the spread inside the array literal: [...(function(){...})()]
              return `${cond} ? [${raw}] : `;
            } else {
              inner = raw;
            }
            return `${cond} ? [${inner}] : `;
          });
          this.line(`super(...(${parts.join("")}[]));`);
        }
      }
      this.line(`this.__init_${cn}(...$a);`);
      this.ind = this.ind.slice(0, -2);
      this.line(`}`);
      this.withTmpDecl(`__init_${cn}(...$a) {`, () => {
        if (all.length <= 1) {
          if (all.length) this.ctorBranch(c, all[0].fn, all[0].inh);
          else this.ctorDefault(c);
          return;
        }
        // An "instanceof" guard is exact while the one for a pointer or reference
        // only tells an object from a number, so a branch that names a class has
        // to be tried before one that takes a box.
        const exact = (fn: FuncInfo): boolean => this.cx.funcParams(fn).some(p => this.typeCheck("$", p.type).indexOf("instanceof") >= 0);
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
      });
    }

    // An argument that is a reference arrives as an {a, i} box around the object,
    // so a guard that names a class has to look through it: otherwise
    // "basic_string(const _CharT*)" matches the box of a string and copies the
    // object itself as if it were a character array.
    peel(v: string): string {
      return `((${v} && ${v}.a !== undefined && ${v}.i !== undefined && !Array.isArray(${v}.a)) ? ${v}.a[${v}.i] : ${v})`;
    }

    matchCond(fn: FuncInfo, _i: number, sib?: Map<string, string[]>): string {
      const ps = this.cx.funcParams(fn);
      const named = ps.filter(p => !p.variadic);
      const min = named.filter(p => !p.def).length;
      const parts = [`$a.length >= ${min}`, `$a.length <= ${named.length}`];
      named.forEach((p, i) => {
        const v = `$a[${i}]`;
        // A parameter with a default argument is absent from the call, so the
        // guard has to let "std::string(__s)" reach the two-parameter
        // constructor "basic_string(const _CharT*, const _Alloc& = _Alloc())".
        const wrap = (x: string): string => (p.def ? `($a.length <= ${i} || ${x})` : x);
        const chk = this.typeCheck(v, p.type);
        if (chk) parts.push(wrap(chk));
        // A pointer or reference arrives as an {a, i} pair, which "typeof" cannot
        // tell apart from the object of a sibling overload.
        if (sib && (p.type.ptr > 0 || p.type.ref) && !p.type.isFunc) {
          for (const c of sib.get(v) || []) parts.push(wrap(`!(${this.peel(v)} instanceof ${c})`));
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
          this.cx
            .funcParams(other)
            .filter(p => !p.variadic)
            .forEach((p, i) => {
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
          // The box is pierced only when it really is one: an initializer list
          // reaches a reference parameter as the plain array of its elements.
          if (c) return `(${v} !== null && typeof ${v} === "object" && !Array.isArray(${v}) && ${v}.a !== undefined && ${v}.i !== undefined && ${v}.a[${v}.i] instanceof ${c.mangled})`;
        }
        // A string parameter is spelled either as a pointer to a character
        // ("const _CharT*") or as a reference to a string; a box that holds a
        // class object is the second one, and taking it for the first makes the
        // constructor copy the object as if it were an array of characters.
        const n0 = coreName(t);
        if (t.ptr > 0 && !t.ref && (n0 === "char" || n0 === "signed char" || n0 === "unsigned char" || n0 === "wchar_t" || n0 === "char16_t" || n0 === "char32_t")) {
          return `(${v} === null || (typeof ${v} === "object" && (${v}.a === undefined || typeof ${v}.a[${v}.i] !== "object")))`;
        }
        if (t.ptr > 0 || t.ref) return `(${v} === null || typeof ${v} === "object")`;
        return "";
      }
      if (t.dims.length) return `Array.isArray(${v})`;
      const n = coreName(t);
      if (n === "bool") return `typeof ${v} === "boolean"`;
      if (isNumericName(n) && intKindOf(t)?.big) return `(typeof ${v} === "bigint" || typeof ${v} === "number" || typeof ${v} === "boolean")`;
      if (isNumericName(n) || this.cx.enums.has(this.cx.stripAll(t))) return `(typeof ${v} === "number" || typeof ${v} === "boolean")`;
      const fq = this.cx.stripAll(t);
      if (this.cx.classes.has(fq)) {
        const c = this.cx.classes.get(fq) as ClsInfo;
        // "std::initializer_list<T>" is the array its elements are made of, and
        // that array is what is passed, so the guard has to accept it.
        if ((c.fromTmpl || "").split("::").pop() === "initializer_list") return `Array.isArray(${v})`;
        return `${v} instanceof ${c.mangled}`;
      }
      return "";
    }

    // A default argument is a value; a reference or pointer parameter takes a
    // box, so the default has to be wrapped like any other temporary.
    // A branch of ?: converts to the result type, so 5 : a with a long long gives a BigInt.
    condBranch(b: Expr, whole: Expr): string {
      const et = this.cx.getAnn(whole).t as CppType | null;
      const bt = this.cx.getAnn(b).t as CppType | null;
      const tk = et && et.ptr === 0 && !et.dims.length && !et.isFunc ? intKindOf(et) : null;
      if (tk && bt && bt.ptr === 0 && !bt.dims.length && !bt.isFunc && isNumericName(coreName(bt))) return castInt(this.ex(b), intKindOf(bt), tk);
      return this.ex(b);
    }

    defArg(p: { type: CppType; def: Expr | null }): string {
      let d = this.ex(p.def as Expr);
      const at = this.cx.getAnn(p.def as Expr).t as CppType | null;
      const tk = p.type.ptr === 0 && !p.type.dims.length ? intKindOf(p.type) : null;
      if (tk && at && at.ptr === 0 && !at.dims.length && !at.isFunc && isNumericName(coreName(at))) d = castInt(d, intKindOf(at), tk);
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
      if (!inh) {
        const del = fn.decl.ctorInit.find(x => this.cx.isDelegatingCtorInit(c, x));
        if (del) {
          const a = this.cx.getAnn(del);
          if (a.call) {
            const tps = this.cx.funcParams(a.call as FuncInfo);
            const aa = del.args.map((x, i) => this.argFor(tps[i].type, x, (a.convs || [])[i] || null));
            this.line(`this.__init_${c.mangled}(${aa.join(", ")});`);
            this.fnStack.push(fn);
            this.bodyStmts(fn.decl.body || []);
            this.fnStack.pop();
            this.alias.pop();
            return;
          }
        }
      }
      for (let bi = 1; bi < c.bases.length; bi++) {
        const b = c.bases[bi];
        const bc = this.cx.classes.get(b.fq) as ClsInfo;
        const bn = bc.mangled as string;
        const hit = !inh ? fn.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === b.fq) : null;
        if (inh && b.fq === inh) {
          const aa: string[] = [];
          ps.forEach((p, i) => {
            if (!p.variadic) aa.push(this.ctorArg(p, i));
          });
          this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
        } else if (hit && hit.args.length) {
          const a = this.cx.getAnn(hit);
          const aa = hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call as FuncInfo)[i].type, x, a.convs[i]));
          this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
        } else {
          this.line(`${bn}.prototype.__init_${bn}.call(this);`);
        }
      }
      const copySrc = this.cx.isCopyCtor(fn) && ps.length ? (ps[0].type.ref || ps[0].type.ptr > 0 ? `($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0])` : `$a[0]`) : null;
      const copyDefault = !!(copySrc && (fn.isDefault || !fn.decl.body || !fn.decl.body.length));
      for (const [name, fd] of c.fields) {
        if (c.fieldStatic.has(name)) continue;
        const ft = this.cx.fieldType(c, name);
        const hit = !inh ? fn.decl.ctorInit.find(x => last(x.name).n === name) : null;
        const fname = this.cx.fieldJsName(c, name);
        if (!hit && copyDefault) {
          this.fieldAssign(fname, ft, `${copySrc}.${fname}`);
        } else {
          this.fieldAssign(fname, ft, this.fieldInit(c, ft, fd, hit || null));
        }
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
        this.fieldAssign(this.cx.fieldJsName(c, name), this.cx.fieldType(c, name), this.fieldInit(c, this.cx.fieldType(c, name), fd, null));
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
      const ilParam = ps.length && !ps[0].variadic && this.isInitListParam(ps[0].type) ? ps[0].type : null;
      if (ilParam && args.length === 1 && args[0].kind === "initlist") {
        const et = ilParam.segs[0].a[0];
        const items = (args[0] as InitListExpr).items.map(x => this.initListItem(et, x));
        return `new ${cn}([${items.join(", ")}])`;
      }
      // "vector<int> v{a, b, c}" gives the constructor one initializer_list made
      // of the elements, not one argument per element.
      if (ilParam && args.length) {
        const et = ilParam.segs[0].a[0];
        const aa = [`[${args.map(x => this.initListItem(et, x)).join(", ")}]`];
        for (let i = 1; i < ps.length && !ps[i].variadic; i++) aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
        return `new ${cn}(${aa.join(", ")})`;
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

    // One element of an initializer_list argument: a braced sub-list builds the
    // element itself, with the constructor the annotator recorded on it.
    initListItem(et: CppType, x: Expr): string {
      const ann = this.cx.getAnn(x);
      const fq = !et.isBox() && !et.dims.length && !et.isFunc ? this.cx.stripAll(et) : "";
      const cls = fq ? this.cx.classes.get(fq) : null;
      if (x.kind !== "initlist") {
        // An element of another type builds the element here, so that the array
        // the list is holds elements of the element type.
        if (cls && ann.conv) return this.argFor(et, x, ann.conv as { kind: string; fn: FuncInfo });
        return this.ex(x);
      }
      if (!cls || !ann.call) return this.ex(x);
      return this.ctorExpr(cls.mangled, ann.call as FuncInfo, (x as InitListExpr).items, ann.convs, et);
    }

    emitDtor(c: ClsInfo): void {
      const fns = c.methods.get("#dtor") || [];
      const fn = fns.find(f => f.referenced);
      // A destructor body that reaches a member through a reference needs a
      // temporary of its own, which the declarations have to follow.
      this.withTmpDecl(`__dtor() {`, () => {
        if (fn) {
          this.fnStack.push(fn);
          this.bodyStmts(fn.decl.body || []);
          this.fnStack.pop();
        }
        for (const b of c.bases) {
          const bc = this.cx.classes.get(b.fq);
          if (bc && bc.referenced) this.line(`${bc.mangled}.prototype.__dtor.call(this);`);
        }
      });
    }

    emitMethod(c: ClsInfo, fns: FuncInfo[]): void {
      const use = fns.filter(f => f.referenced && ((f.decl.body || []).length || f.decl.flags.includes("pure")));
      if (!use.length) return;
      const groups = new Map<string, FuncInfo[]>();
      for (const f of use) {
        const k = methodJsName(this.cx, f);
        if (!groups.has(k)) groups.set(k, []);
        (groups.get(k) as FuncInfo[]).push(f);
      }
      for (const g of groups.values()) this.emitMethodGroup(c, g);
    }

    emitMethodGroup(c: ClsInfo, use: FuncInfo[]): void {
      void c;
      const m = methodJsName(this.cx, use[0]);
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
      this.withTmpDecl(`${pre}${m}(...$a) {`, () => {
        const sib = this.siblingClasses(use);
        use.forEach((fn, i) => {
          this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(fn, i, sib[i])}) {`);
          this.ind += "  ";
          const ps = this.cx.funcParams(fn);
          this.alias.push(new Map());
          ps.forEach((p, j) => {
            if (!p.variadic && p.name) this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, j));
          });
          // Wrap after the overload is chosen so later branches still see $a.
          this.boxRestParams(fn, ps);
          this.fnStack.push(fn);
          this.bodyStmts(fn.decl.body || []);
          this.fnStack.pop();
          this.alias.pop();
          this.ind = this.ind.slice(0, -2);
          this.line(`}`);
        });
        this.line(`else { throw new Error("no matching overload"); }`);
      });
    }

    // The rehash policy's stub reads the prime list at run time; it is written
    // into the program instead of being carried over from the generator.
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
        const stub = this.allocStub(f);
        const lib = stub === null ? libcBodySource(f.fq) : null;
        if (stub !== null) this.line(`function ${this.cx.symOf(f)}(...$a) { ${stub} }`);
        else if (lib !== null) {
          this.usesLibc = true;
          this.line(`function ${this.cx.symOf(f)}(...$a) { return (${lib})($a); }`);
        } else this.line(`function ${this.cx.symOf(f)}(...$a) { throw new Error("unresolved external: ${f.fq}"); }`);
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
      this.line(`function ${this.cx.symOf(f)}(${decl.join(", ")}) {`);
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

    // Overload groups pass arguments as $a[j]. Wrap the chosen branch's
    // address-taken parameters without mutating $a for later else-if arms.
    boxRestParams(f: FuncInfo, ps: FuncParam[]): void {
      ps.forEach((p, i) => {
        if (p.variadic) return;
        const v = this.paramVar(f, i);
        if (v && (v.storage === "boxed" || v.storage === "bbox")) {
          this.line(`$a[${i}] = {v: $a[${i}]};`);
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
      const wrap = (s: string) => (v.storage === "boxed" || v.storage === "bbox" ? `{v: ${s}}` : s);
      const init = v.decl.init;
      // A global that a library header only declares (stdout) takes the value the library gives it.
      const libVar = init || v.decl.directInit ? null : libcVarSource(v.fq);
      if (libVar !== null) {
        this.line(`let ${v.mangled} = ${wrap(libVar)};`);
        return;
      }
      if (init) {
        // A brace-enclosed initializer of a class is its constructor's arguments,
        // or its members for an aggregate: the same as for a local variable.
        const ilCls = init.kind === "initlist" && !t.isBox() && !t.dims.length && this.cx.classes.has(this.cx.stripAll(t));
        this.line(`let ${v.mangled} = ${wrap(ilCls ? this.varInitEx(v.decl, v, t) : this.argFor(t, init, null))};`);
        return;
      }
      if (v.decl.directInit && v.decl.directInit.length) {
        const a = this.cx.getAnn(v.decl);
        const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
        if (a.call && fcls && this.cx.classes.has(fcls)) {
          const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
          this.line(`let ${v.mangled} = ${wrap(this.ctorExpr(cn, a.call as FuncInfo, v.decl.directInit, a.convs, t))};`);
        } else {
          this.line(`let ${v.mangled} = ${wrap(this.ex(v.decl.directInit[0]))};`);
        }
        return;
      }
      const a = this.cx.getAnn(v.decl);
      const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
      if (fcls && this.cx.classes.has(fcls)) {
        const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
        this.line(`let ${v.mangled} = ${wrap(a.call ? this.ctorExpr(cn, a.call as FuncInfo, [], [], t) : `new ${cn}()`)};`);
      } else if (t.dims.length) {
        // An array whose element is referenced is boxed like any other variable.
        this.line(`let ${v.mangled} = ${wrap(this.arrayNew(t, []))};`);
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
          this.block("", () => {
            for (const x of s.stmts) this.stmt(x);
          });
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
          this.block(`if (${this.exVal(s.cond)})`, () => this.stmt(s.then));
          if (s.els) this.block(`else`, () => this.stmt(s.els as Stmt));
          return;
        }
        case "switch":
          if (s.cond.kind === "var") {
            const vd = s.cond;
            const v = this.cx.getAnn(vd).var as VarInfo;
            this.block("", () => {
              this.varDeclFor(vd, v, v.typeCache as CppType);
              this.switchBody(`switch (${this.localName(v)})`, intKindOf(v.typeCache as CppType), s.body);
            });
            return;
          }
          this.switchBody(`switch (${this.exVal(s.cond)})`, intKindOf(this.cx.getAnn(s.cond).t as CppType | null), s.body);
          return;
        case "case":
          this.line(s.value ? `case ${this.caseLabel(s.value)}:` : `default:`);
          this.ind += "  ";
          this.stmt(s.stmt);
          this.ind = this.ind.slice(0, -2);
          return;
        case "while":
          if (s.cond.kind === "var") {
            const vd = s.cond;
            const v = this.cx.getAnn(vd).var as VarInfo;
            // The condition declares a variable ("while (_Node* __tmp = ...)"):
            // every turn of the loop declares it again, so the initializer belongs
            // inside the condition.  Declared once before the loop it would never
            // be read again and the loop would run off the end of the list.
            if (!v.lifted) {
              const nm = this.localName(v);
              const init = this.varInitEx(vd, v, v.typeCache as CppType);
              const val = v.storage === "boxed" || v.storage === "bbox" ? `{v: ${init}}` : init;
              this.block("", () => {
                this.line(`let ${nm};`);
                this.block(`while (${nm} = ${val})`, () => this.stmt(s.body));
              });
              return;
            }
            this.block("", () => {
              this.varDeclFor(vd, v, v.typeCache as CppType);
              this.block(`while (${this.localName(v)})`, () => this.stmt(s.body));
            });
            return;
          }
          this.block(`while (${this.exVal(s.cond)})`, () => this.stmt(s.body));
          return;
        case "do":
          this.line(`do {`);
          this.ind += "  ";
          this.stmt(s.body);
          this.ind = this.ind.slice(0, -2);
          this.line(`} while (${this.exVal(s.cond)});`);
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
              this.block(`for (${head}; ${s.cond ? this.exVal(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
              return;
            }
          }
          if (s.init) this.stmt(s.init);
          this.block(`for (; ${s.cond ? this.exVal(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
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
          this.line(`if (${en} && ${en}.$fpe) throw ${en};`);
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
        // "std::initializer_list<T>" is the array its elements are made of, so the
        // variable holds that array and no constructor runs.
        if (initListElemOf(this.cx, t)) return this.argFor(t, vd.init, null);
        if (fcls && this.cx.classes.has(fcls)) {
          const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
          // "vector<int> v{1, 2, 3}" resolves the initializer-list constructor
          // while annotating the list itself, not the declaration.
          const ca = vd.init.kind === "initlist" ? this.cx.getAnn(vd.init) : a;
          // The object a temporary of the same class is becomes the variable, as
          // it does in the original: no copy is made of it.
          if (vd.init.kind !== "initlist" && this.cx.stripAll(this.cx.getAnn(vd.init).t as CppType) === fcls && this.prvalue(vd.init)) {
            return this.ex(vd.init);
          }
          if (ca.call) {
            const items = vd.init.kind === "initlist" ? (vd.init as InitListExpr).items : [vd.init];
            return this.ctorExpr(cn, ca.call as FuncInfo, items, ca.convs, t);
          }
        }
        if (t.dims.length && vd.init.kind === "initlist") {
          return this.arrayInit(t, (vd.init as InitListExpr).items, vd);
        }
        return this.argFor(t, vd.init, null);
      }
      if (vd.directInit && vd.directInit.length) {
        if (initListElemOf(this.cx, t)) return this.argFor(t, vd.directInit[vd.directInit.length - 1], null);
        if (fcls && this.cx.classes.has(fcls) && a.call) {
          const cn = (this.cx.classes.get(fcls) as ClsInfo).mangled as string;
          return this.ctorExpr(cn, a.call as FuncInfo, vd.directInit, a.convs, t);
        }
        // The initializer is converted as a value of the variable's type: a
        // pointer given zero is a null pointer, not the number zero.
        return this.argFor(t, vd.directInit[0], null);
      }
      if (initListElemOf(this.cx, t)) return "[]";
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
      const vals = items.map(x => this.argFor(et, x, this.cx.getAnn(x).conv || null));
      // Elements the list leaves out take their default value, as in C++.
      const n = t.dims[0];
      if (typeof n === "number" && n > vals.length) {
        const rest = new CppType(t.name);
        rest.segs = t.segs;
        rest.ptr = t.ptr;
        rest.ref = t.ref;
        rest.dims = [n - vals.length, ...et.dims];
        vals.push(`...${this.arrayNew(rest, [])}`);
      }
      return `[${vals.join(", ")}]`;
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
      // An array, or the array an "std::initializer_list<T>" value is, is walked
      // by index: both are one array in the target language.
      if (rt.dims.length || initListElemOf(this.cx, rt)) {
        const arr = this.complex(this.ex(s.range), s.range);
        const idx = `$i${ri}`;
        const elem = `${arr}[${idx}]`;
        this.block(`for (let ${idx} = 0; ${idx} < ${arr}.length; ${idx}++)`, () => {
          this.rangeVar(v, t, elem, arr, idx);
          this.stmt(s.body);
        });
        return;
      }
      const info = this.cx.getAnn(s).range as RangeInfo;
      const obj = this.complex(this.ex(s.range), s.range);
      const b = `$b${ri}`;
      const e = `$e${ri}`;
      const bm = methodJsName(this.cx, info.beginFn);
      const em = methodJsName(this.cx, info.endFn);
      const itRet = this.cx.funcRet(info.beginFn);
      const itT = itRet.core();
      const cond = this.rangeOp(info.ne, itT, b, e);
      const step = this.rangeOp(info.inc, itT, b, "");
      const deref = this.rangeOp(info.star, itT, b, "");
      // "begin()" returns the iterator by value, so the loop variable is a copy:
      // without it "++" would walk the container's own "_M_start".
      const copyNew = (x: string): string => {
        if (!info.copyCtor) return x;
        const fq = !itRet.isBox() && !itRet.dims.length && !itRet.isFunc ? this.cx.stripAll(itRet) : "";
        const c = fq ? this.cx.classes.get(fq) : null;
        if (!c) return x;
        return `new ${c.mangled}(${this.copyArg(x, itRet)})`;
      };
      this.block(`for (let ${b} = ${copyNew(`${obj}.${bm}()`)}, ${e} = ${copyNew(`${obj}.${em}()`)}; ${cond}; ${step})`, () => {
        this.rangeVar(v, t, deref, "", "");
        this.stmt(s.body);
      });
    }

    // The body of an iterator operation, which may live in the class itself or
    // be a free function ("operator!=" of __normal_iterator, for instance).
    rangeOp(op: RangeOp, itT: CppType, a: string, b: string): string {
      if (op.builtin === "ptr") {
        if (op.op === "!=") return `!(${a} === ${b} || (${a} && ${b} && ${a}.a === ${b}.a && ${a}.i === ${b}.i))`;
        if (op.op === "++") return `(${a} = {a: ${a}.a, i: ${a}.i + 1})`;
        return a;
      }
      const fn = op.fn as FuncInfo;
      const ps = this.cx.funcParams(fn);
      if (op.isMember) {
        return `${a}.${methodJsName(this.cx, fn)}(${b ? this.boxFor(ps[0].type, itT, b) : ""})`;
      }
      const aa = (b ? [a, b] : [a]).map((x, i) => this.boxFor(ps[i] ? ps[i].type : null, itT, x));
      return `${this.cx.symOf(fn)}(${aa.join(", ")})`;
    }

    // An argument a parameter reads through a box has to be put in one, the way
    // argFor does for an ordinary call.
    boxFor(p: CppType | null, a: CppType, s: string): string {
      if (p && isBoxLike(p) && !isBoxLike(a)) return `{a: [${s}], i: 0}`;
      return s;
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
          return `${cls.mangled}.${v.mangled}`;
        }
        return needsThis ? `this.${v.mangled}` : v.mangled;
      }
      return this.localName(v);
    }

    ex(e: Expr): string {
      switch (e.kind) {
        case "lit":
          return this.lit(e);
        case "id":
          return this.exId(e);
        case "this":
          return "this";
        case "call":
          return this.exCallValue(e);
        case "index":
          return this.exIndex(e);
        case "member":
          return this.exMember(e);
        case "unary":
          return this.exUnary(e);
        case "binary":
          return this.exBinary(e);
        case "assign":
          return this.exAssign(e);
        case "cond":
          return `(${this.exVal(e.c)} ? ${this.condBranch(e.a, e)} : ${this.condBranch(e.b, e)})`;
        case "new":
          return this.exNew(e);
        case "delete":
          return "void 0";
        case "cast":
          return this.exCast(e);
        case "sizeof": {
          const t = this.sizeofType(e);
          return String(constSizeof(this.cx, t, new Set()));
        }
        case "typeid":
          return this.exTypeid(e);
        case "lambda":
          return this.exLambda(e);
        case "initlist":
          return `[${e.items.map(x => this.ex(x)).join(", ")}]`;
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
        case "noexcept":
          return "true";
      }
    }

    lit(e: LitExpr): string {
      switch (e.lkind) {
        case "int": {
          const k = intKindOf(this.cx.getAnn(e).t as CppType | null);
          if (k && k.big) return bigLiteral(e.value);
          return String(parseNumber(e.value));
        }
        case "float":
          return String(parseNumber(e.value));
        case "char":
          return String(parseChar(e.value));
        case "bool":
          return e.value;
        case "null":
          return "null";
        case "string":
          return this.strLit(e.value);
        default:
          return "0";
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

    // The memory builtins copy elements rather than bytes, but the C++ count is a
    // byte count ("sizeof(_Tp) * _Num" in the __copy_move specializations), so it
    // is divided by the size of the element the destination points at. Character
    // buffers and pointers to void keep the count they were given.
    memCount(e: CallExpr, pi: number, ci: number): string {
      const s = this.ex(e.args[ci]);
      const pt = this.cx.getAnn(e.args[pi]).t as CppType | null;
      if (!pt || pt.ptr === 0) return s;
      const el = new CppType(pt.name);
      el.segs = pt.segs;
      el.ptr = pt.ptr - 1;
      let sz = 0;
      try {
        sz = constSizeof(this.cx, el, new Set());
      } catch {
        sz = 0;
      }
      if (sz <= 1) return s;
      return `Math.trunc((${s}) / ${sz})`;
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
          return `(($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })(${p(0)}, ${a[1]}, ${this.memCount(e, 0, 2)})`;
        case "__builtin_memcpy":
          return `(($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })(${p(0)}, ${p(1)}, ${this.memCount(e, 0, 2)})`;
        case "__builtin_memmove":
          return `(($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })(${p(0)}, ${p(1)}, ${this.memCount(e, 0, 2)})`;
        case "__builtin_memchr":
          return `(($s, $c, $n) => { for (let $k = 0; $k < $n; $k++) if ($s.a[$s.i + $k] === ($c & 255)) return { a: $s.a, i: $s.i + $k }; return null; })(${p(0)}, ${a[1]}, ${this.memCount(e, 0, 2)})`;
        case "__builtin_memcmp":
          return `(($x, $y, $n) => { for (let $k = 0; $k < $n; $k++) { const $d = ($x.a[$x.i + $k] || 0) - ($y.a[$y.i + $k] || 0); if ($d) return $d; } return 0; })(${p(0)}, ${p(1)}, ${this.memCount(e, 0, 2)})`;
        default:
          return null;
      }
    }
    exId(e: IdExpr): string {
      const a = this.cx.getAnn(e);
      const s = a.sym;
      if (!s) this.cx.fail("unresolved name " + e.parts.map(q => q.n).join("::"), e);
      if (s.k === "enumval") {
        const vals = this.cx.enumValues(s.e);
        return String(vals.get(s.item) ?? 0);
      }
      if (s.k === "func") {
        const f = s.fns[0];
        if (f.isMethod && !f.isStatic) this.cx.fail("member function value is not supported", e);
        if (f.isMethod) {
          const cls = this.cx.classes.get(f.cls as string) as ClsInfo;
          return `${cls.mangled}.${methodJsName(this.cx, f)}`;
        }
        return this.cx.symOf(f);
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
        case "lit":
        case "id":
        case "this":
          return true;
        case "member":
          return this.isSimple(e.obj);
        // An index that resolves to a call runs code, so it is not simple.
        case "index":
          return !this.cx.getAnn(e).call && this.isSimple(e.arr) && this.isSimple(e.idx);
        case "unary":
          return (e.op === "*" || e.op === "&") && this.isSimple(e.arg);
        // va_arg advances its list each time it runs, so it is never simple.
        case "cast":
          return e.ckind !== "va_arg" && !this.cx.getAnn(e).call && !this.cx.getAnn(e).conv && this.isSimple(e.arg);
        default:
          return false;
      }
    }

    // "++p" or "p--" on a pointer whose value is read (the operand of "*" in "*--last"):
    // the expression itself gives an index, so its value is built as a box here.
    isPtrStep(e: Expr): boolean {
      if (e.kind !== "unary" || !incKind(e) || !this.isSimple((e as UnaryExpr).arg)) return false;
      const at = this.cx.getAnn((e as UnaryExpr).arg).t as CppType | null;
      return !!at && at.ptr > 0 && !at.isFunc && !at.dims.length;
    }

    ptrStepBox(e: UnaryExpr): string {
      const p = this.paren(this.lvalue(e.arg));
      const inc = incKind(e);
      if (isPostfix(e)) {
        const t = this.tmp();
        return `(${t} = {a: ${p}.a, i: ${p}.i}, ${p}.i${inc}, ${t})`;
      }
      return `(${inc}${p}.i, {a: ${p}.a, i: ${p}.i})`;
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
          const t = (v.isField && v.scope.cls ? this.cx.fieldType(v.scope.cls, v.short) : v.typeCache) as CppType;
          if (!t || t.isFunc) return this.ex(e);
          if (v.isField) {
            const fname = v.mangled;
            return v.isStatic ? `{a: ${v.scope.cls!.mangled}, i: "${fname}"}` : `{a: this, i: "${fname}"}`;
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
          const fname = v.mangled;
          const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
          if (v.isStatic) return `{a: ${cls.mangled}, i: "${fname}"}`;
          let o = this.objOf(e.obj);
          // "it->second" reaches the field through operator-> when the object is
          // a class, exactly as reading the field does.
          if (m.arrowCall) o = this.arrowObj(m.arrowCall as FuncInfo, o);
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
          if (e.op === "*") {
            if (this.cx.getAnn(e).call) return this.ex(e);
            // "this" is the object, not a fat pointer; *this passed by reference
            // is a box around it (endl, manipulator operator<<).
            if (e.arg.kind === "this") return `{a: [this], i: 0}`;
            if (this.isPtrStep(e.arg)) return this.ptrStepBox(e.arg as UnaryExpr);
            return this.ex(e.arg);
          }
          if (e.op === "&") return this.exBox(e.arg);
          // "++it" on a class calls an operator that returns a reference, and a
          // reference to a class is already a box: wrapping it again would point
          // at the box instead of the object ("++__first != __last" in
          // std::max_element).
          if ((e.op === "++" || e.op === "--") && this.cx.getAnn(e).call) {
            const ct = et && et.ref ? this.cx.stripAll(et) : "";
            if (ct && this.cx.classes.has(ct)) return this.ex(e);
          }
          return `{a: [${this.ex(e)}], i: 0}`;
        case "call":
        case "this":
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
          if (et && et.ref) return this.ex(e);
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
          const fname = v.mangled;
          const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
          if (v.isStatic) return `${cls.mangled}.${fname}`;
          let o = this.objOf(e.obj);
          if (m.arrowCall) o = this.arrowObj(m.arrowCall as FuncInfo, o);
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
            return `${pp}.a[${pp}.i + (${toNumber(this.ex(e.idx), intKindOf(this.cx.getAnn(e.idx).t as CppType | null))})]`;
          }
          const arr = this.complex(this.ex(e.arr), e.arr);
          return `${this.paren(arr)}[${this.ex(e.idx)}]`;
        }
        case "unary": {
          if (e.op !== "*") this.cx.fail("not assignable", e);
          if (this.classDeref(e)) {
            const t = this.tmp();
            return `(${t} = ${this.ex(e)}, ${t}.a[${t}.i])`;
          }
          if (e.arg.kind === "unary" && incKind(e.arg)) return this.ptrIncElem(e.arg);
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

    // "it->field": operator-> yields a pointer, so the object the field lives in
    // is what that pointer points at, not the pointer itself.
    arrowObj(fn: FuncInfo, o: string): string {
      const t = this.tmp();
      return `(${t} = ${this.paren(o)}.${methodJsName(this.cx, fn)}(), ${t}.a[${t}.i])`;
    }

    // A copy of a class value calls the class's copy constructor, and a
    // constructor is emitted only for the classes something calls it on.
    markCopyCtor(fq: string): void {
      const cls = this.cx.classes.get(fq);
      if (!cls) return;
      for (const f of cls.methods.get("#ctor") || []) {
        if (this.cx.isCopyCtor(f as FuncInfo)) this.cx.markFunc(f as FuncInfo);
      }
    }

    // What a copy of an expression is made from: an object is boxed for it,
    // while a reference is already a box and is handed over as it is.
    copySource(x: Expr): string {
      const at = this.cx.getAnn(x).t as CppType | null;
      if (at && !at.isFunc && (at.ref !== "" || at.ptr > 0)) return this.ex(x);
      return this.exBox(x);
    }

    objOf(e: Expr): string {
      const t = this.cx.getAnn(e).t as CppType;
      const needDeref = e.kind !== "this" && !!t && (t.ptr > 0 || !!(t.ref && (e.kind === "call" || e.kind === "binary" || e.kind === "assign" || e.kind === "unary" || e.kind === "index")));
      if (!needDeref) {
        if (e.kind === "this") return this.ex(e);
        return this.complex(this.ex(e), e);
      }
      if (this.isSimple(e)) {
        const p = this.paren(this.ex(e));
        return `${p}.a[${p}.i]`;
      }
      const tmp = this.tmp();
      return `(${tmp} = ${this.ex(e)}, ${tmp}.a[${tmp}.i])`;
    }

    // "*p++" and "*++p" for a pointer p, as the element it designates. The pointer is
    // evaluated once, into a temporary that refers to the same pointer object, so the
    // step is made on p itself.
    ptrIncElem(e: UnaryExpr): string {
      const inc = incKind(e) as string;
      const t = this.tmp();
      const src = this.ex(e.arg);
      return isPostfix(e) ? `(${t} = ${src}).a[${t}.i${inc}]` : `(${t} = ${src}).a[${inc}${t}.i]`;
    }

    deref(e: Expr): string {
      if (e.kind === "this") return "this";
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
      return this.classDeref(e);
    }

    // "*it" for a class iterator calls an operator* that yields a reference: the
    // reference has to be bound to a temporary before anything can be assigned
    // through it, so an assignment to "*it" is a split target like a call.
    classDeref(e: Expr): boolean {
      if (e.kind !== "unary" || e.op !== "*") return false;
      const at = this.cx.getAnn(e.arg).t as CppType | null;
      return !!at && at.ptr === 0 && !at.dims.length && !at.isFunc && this.cx.classes.has(this.cx.stripAll(at));
    }

    // Binds complex pointer operands to temporaries: a fat pointer is read in two
    // places, and evaluating the expression twice would repeat its side effects.
    pbind(items: { s: string; e: Expr }[]): { pre: string; v: string[] } {
      const pre: string[] = [];
      const v: string[] = [];
      for (const it of items) {
        // The box an addressed "this" yields is built in place, so it earns a
        // name of its own even though "this" itself would not need one.
        if (this.isSimple(it.e) && it.e.kind !== "this") {
          v.push(this.paren(it.s));
          continue;
        }
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

    // A class-typed field holds a sub-object: the storage it was built in is
    // remembered on it, as a placement new records it, so that a pointer built
    // from the sub-object itself ("this" in one of its methods) is the same
    // pointer as the one "&this->_M_impl._M_node" writes.
    fieldAssign(name: string, ft: CppType, value: string): void {
      const fname = safeJsName(name);
      this.line(`this.${fname} = ${value};`);
      if (!ft.isBox() && !ft.dims.length && !ft.isFunc && this.cx.classes.has(this.cx.stripAll(ft))) {
        this.line(`this.${fname}.ctj_a = this; this.${fname}.ctj_i = "${fname}";`);
      }
    }

    // The operand pbox is given. A call returning a reference to a scalar
    // pointer ("base()" hands back "const int*&") is read through by ex, and
    // pbox takes exactly that step, so the box the reference is goes in instead.
    pboxArg(e: Expr, t: CppType | null, v: string): string {
      if (t && t.ref && t.ptr > 0 && e.kind === "call" && this.returnsScalarRef(e as CallExpr)) {
        return this.exCall(e as CallExpr);
      }
      return v;
    }

    pbox(s: string, e: Expr, t: CppType): string {
      const x = this.complex(s, e);
      // "this + 1" addresses the storage that follows the object, as
      // "reinterpret_cast<_CharT*>(this + 1)" does in a header that keeps its
      // data behind the object: the instance gets an array to be addressed in.
      if (e.kind === "this") return `{a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}`;
      // A reference to an array is the array itself, so it is boxed like one.
      if (t.dims.length && (!t.isBox() || (t.ref && t.ptr === 0))) return `{a: ${x}, i: 0}`;
      // _M_leftmost()/_M_rightmost() are T*&: compare the pointer they refer to.
      if (t.ref && t.ptr > 0 && e.kind === "call") {
        const p = this.paren(x);
        return `(${x} ? ${p}.a[${p}.i] : null)`;
      }
      return x;
    }

    isZeroLit(e: Expr): boolean {
      return e.kind === "lit" && (e.lkind === "null" || ((e.lkind === "int" || e.lkind === "char") && parseNumber(e.value) === 0));
    }

    // The storage a reference to this expression names: a (container, key) pair
    // that writes into the object itself, so that a write through the reference
    // is seen by the variable it was made from.  Only an expression with storage
    // of its own has one; anything else is a value and needs a temporary box.
    refBox(e: Expr): string | null {
      let x = e;
      while (x.kind === "cast") x = (x as CastExpr).arg;
      if (x.kind === "id") {
        const ann = this.cx.getAnn(x);
        const s = ann.sym;
        if (!s || s.k !== "var") return null;
        const v = s.v;
        const nm = this.varName(v, ann.needsThis);
        if (v.isStatic) {
          const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
          return `{a: ${cls.mangled}, i: "${v.mangled}"}`;
        }
        // A field written without an object ("x" inside a method) is a field of
        // "this", and its storage is the property it lives in.
        if (v.isField) return ann.needsThis ? `{a: this, i: "${v.mangled}"}` : null;
        const t = v.typeCache as CppType | null;
        if (t && t.ref !== "") return t.dims.length && !t.ptr ? `{a: ${nm}, i: 0}` : nm;
        if (v.storage === "boxed" || v.storage === "bbox") return `{a: ${nm}, i: "v"}`;
        return null;
      }
      if (x.kind === "member") {
        const m = this.cx.getAnn(x);
        const f = m.sym;
        if (!f || f.k !== "var" || !f.v.isField) return null;
        const v = f.v;
        const fname = v.mangled;
        if (v.isStatic) {
          const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
          return `{a: ${cls.mangled}, i: "${fname}"}`;
        }
        let o = this.objOf((x as MemberExpr).obj);
        // "it->second" reaches the field through operator-> when the object is
        // a class, exactly as reading the field does.
        if (m.arrowCall) o = this.arrowObj(m.arrowCall as FuncInfo, o);
        return `{a: ${o}, i: "${fname}"}`;
      }
      if (x.kind === "unary" && (x as UnaryExpr).op === "*" && !this.cx.getAnn(x).call) {
        // "*__x" is the object __x points at, and a pointer is the storage of
        // what it points at: the pointer itself is the box of it.
        return this.ex((x as UnaryExpr).arg);
      }
      if (x.kind === "index") {
        const m = this.cx.getAnn(x);
        if (m.call) {
          // An "operator[]" that returns a reference hands back the box already.
          const ct = this.cx.getAnn(x).t as CppType | null;
          if (ct && ct.ref !== "" && ct.ptr > 0 && !ct.isFunc) return this.ex(x);
          return null;
        }
        const at = this.cx.getAnn((x as IndexExpr).arr).t as CppType | null;
        if (!at) return null;
        if (at.ptr > 0) {
          const p = this.complex(this.ex((x as IndexExpr).arr), (x as IndexExpr).arr);
          const pp = this.paren(p);
          const idx = this.isZeroLit((x as IndexExpr).idx) ? `${pp}.i` : `${pp}.i + (${this.ex((x as IndexExpr).idx)})`;
          return `{a: ${pp}.a, i: ${idx}}`;
        }
        if (at.dims.length && !at.isBox()) {
          const arr = this.complex(this.ex((x as IndexExpr).arr), (x as IndexExpr).arr);
          return `{a: ${arr}, i: (${this.ex((x as IndexExpr).idx)})}`;
        }
        return null;
      }
      if (x.kind === "call") {
        // A call returning a reference hands back the box the reference is.
        const ct = this.cx.getAnn(x).t as CppType | null;
        if (ct && ct.ref !== "" && ct.ptr > 0 && !ct.isFunc) return this.exCall(x as CallExpr);
        return null;
      }
      return null;
    }

    // The value of x for a parameter, variable or assignment target of type p.
    argFor(p: CppType, x: Expr, conv: { kind: string; fn: FuncInfo } | null): string {
      const at = this.cx.getAnn(x).t as CppType | null;
      const numeric = !!at && at.ptr === 0 && !at.dims.length && !at.isFunc && isNumericName(coreName(at));
      // A reference to an integer of another type (const long long& from 21) binds a temporary
      // of the reference's type, so the value in its box is converted here.
      const rk = intKindOf(p);
      if (rk && p.ref !== "" && p.ptr === 0 && !p.dims.length && numeric) {
        const sk0 = intKindOf(at);
        if (!(sk0 && sk0.bits === rk.bits && sk0.signed === rk.signed)) return `{a: [${castInt(this.ex(x), sk0, rk)}], i: 0}`;
      }
      const raw = this.argForRaw(p, x, conv);
      if (!numeric) return raw;
      const sk = intKindOf(at);
      const tk = p.ref === "" ? intKindOf(p) : null;
      if (tk) {
        if (sk && sk.bits === tk.bits && sk.signed === tk.signed) return raw;
        return castInt(raw, sk, tk);
      }
      if (sk && sk.big && p.ref === "" && p.ptr === 0 && !p.dims.length && !p.isFunc) {
        const pn = coreName(p);
        if (pn === "bool") return `(${raw} !== 0n)`;
        if (pn === "float" || pn === "double" || pn === "long double") return `Number(${raw})`;
      }
      return raw;
    }

    argForRaw(p: CppType, x: Expr, conv: { kind: string; fn: FuncInfo } | null): string {
      // A braced list for a class parameter: the object is built from the items
      // with the constructor the annotator resolved for the list.
      const lc = conv && conv.kind === "ctor" && x.kind === "initlist" ? this.cx.getAnn(x).listCtors : null;
      if (lc && conv && lc.has(conv.fn)) {
        const cn = (this.cx.classes.get(this.cx.stripAll(p)) as ClsInfo).mangled as string;
        const obj = this.ctorExpr(cn, conv.fn, (x as InitListExpr).items, lc.get(conv.fn) as ({ kind: string; fn: FuncInfo } | null)[], p);
        return p.ref !== "" && p.ptr === 0 && !p.dims.length ? `{a: [${obj}], i: 0}` : obj;
      }
      if (conv && conv.kind === "ctor") {
        const fq = this.cx.stripAll(p);
        const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
        const cps = this.cx.funcParams(conv.fn);
        const inner = cps.length ? this.argFor(cps[0].type, x, null) : this.ex(x);
        const obj = `new ${cn}(${inner})`;
        // The converted-to object is a temporary; a reference parameter holds a
        // box pointing at it ("f(\"ab\")" for "f(const std::string&)").
        return p.ref !== "" && p.ptr === 0 && !p.dims.length ? `{a: [${obj}], i: 0}` : obj;
      }
      if (conv && conv.kind === "conv") {
        return `${this.paren(this.objOf(x))}.${methodJsName(this.cx, conv.fn)}()`;
      }
      const at = this.cx.getAnn(x).t as CppType;
      const pB = isBoxLike(p);
      const aB = at ? isBoxLike(at) : false;
      // A pointer is a value: the copy must not share its fat pointer with the
      // original, or moving one of them would move the other.  A reference to a
      // pointer (_M_rightmost() is _Base_ptr&) decays first.
      if (p.ptr > 0 && !p.ref && !p.dims.length && !p.isFunc && at && at.ptr > 0 && !at.dims.length && !at.isFunc) {
        // A call that returns a reference to a *scalar* pointer ("base()" hands
        // back "const int*&") is read through by ex; the branch below wants the
        // box the reference is, so the raw call is taken instead.
        // "static_cast<__hashtable*>(this)" points at the object itself, whose
        // address is the fat pointer it records for itself ("pbox"), not a pair
        // of fields named "a" and "i".
        let src0: Expr = x;
        while (src0.kind === "cast") src0 = (src0 as CastExpr).arg;
        if (src0.kind === "this") return `{a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}`;
        const raw = at.ref && x.kind === "call" && this.returnsScalarRef(x as CallExpr) ? this.exCall(x as CallExpr) : this.ex(x);
        const src = this.isSimple(x) ? this.paren(raw) : this.tmp();
        const pre = this.isSimple(x) ? "" : `${src} = ${raw}, `;
        // T*& from a call (_M_rightmost) is a fat pointer to the pointer: the
        // lvalue reference the call hands back is read through once more.  An
        // rvalue reference ("std::forward<char*>(...)") is a plain value
        // already, and reading through it would yield the character it points
        // at instead of the pointer.
        // A T*& id is already unboxed by ex, so copying it is enough.
        // A call handing back a reference to a *character* pointer is the
        // exception: "std::forward<char*>(__x)" gives the fat pointer itself,
        // and reading through it would yield the character it points at
        // instead of the pointer.
        if (at.ref && x.kind === "call") {
          const t = this.tmp();
          return `(${pre}${t} = (${src} ? ${src}.a[${src}.i] : null), ${t} && ${t}.a !== undefined ? {a: ${t}.a, i: ${t}.i} : ${t})`;
        }
        return `(${pre}${src} ? {a: ${src}.a, i: ${src}.i} : null)`;
      }
      if (p.dims.length && x.kind === "initlist") {
        return this.arrayInit(p, (x as InitListExpr).items, null as unknown as VarDecl);
      }
      if (x.kind === "initlist") {
        const ilElem = initListElemOf(this.cx, p);
        if (ilElem) return `[${(x as InitListExpr).items.map(y => this.initListItem(ilElem, y)).join(", ")}]`;
      }
      if (pB && !aB) {
        // A literal 0 is a null pointer only for a pointer parameter; for a reference it is a value.
        if (!at || at.name === "__null" || (this.isZeroLit(x) && !p.ref)) {
          // A reference still needs a box; a pointer parameter is null itself.
          return p.ref ? "{a: [null], i: 0}" : "null";
        }
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
        // exCallValue already reads through a scalar reference return.
        if (x.kind === "call" && this.returnsScalarRef(x as CallExpr)) return this.ex(x);
        return this.deref(x);
      }
      // A reference to a bool holds the bool, so the argument is passed as its
      // storage; only a plain bool parameter takes the converted value.
      if (coreName(p) === "bool" && !p.ref && at && at.isBox() && !at.isFunc) return `(${this.ex(x)} != null)`;
      if (coreName(p) === "bool" && !p.ref && at && !isNumericName(coreName(at)) && !this.cx.enums.has(this.cx.stripAll(at)) && at.name !== "__null") {
        return `(${this.ex(x)} != null)`;
      }
      if (p.ptr > 0 && !p.ref && at && at.dims.length && !at.isBox()) return `{a: ${this.ex(x)}, i: 0}`;
      if (pB && aB) {
        // An array, or a reference to one, is the array object itself (see isBoxedVar):
        // a reference parameter takes that object, a pointer parameter the address
        // of its first element.
        const arrArg = !!at && at.dims.length > 0 && at.ptr === 0 && !at.isFunc;
        if (arrArg && p.ptr === 0 && p.ref !== "") return this.ex(x);
        if (arrArg && p.ptr > 0 && !p.isFunc) {
          // The array decays to the address of its first element; ex() yields the
          // array object for every array expression, boxed or not.
          const ptr = `{a: ${this.ex(x)}, i: 0}`;
          return p.ref !== "" ? `{a: [${ptr}], i: 0}` : ptr;
        }
        if (at && at.ref) {
          // A by-value pointer parameter takes the pointer a reference call result
          // refers to, so its box is read (an identifier already reads through).
          if (p.ptr > 0 && !p.ref && !p.isFunc && x.kind !== "id") {
            const v = this.tmp();
            return `(${v} = ${this.ex(x)}, ${v}.a[${v}.i])`;
          }
          if (p.ptr > 0 && !p.isFunc) {
            const r = this.refBox(x);
            if (r !== null) return r;
          }
          return this.exBox(x);
        }
        // A reference parameter reads through an address, so a value has to be
        // given one: a class object, and a pointer too, since a pointer is
        // already a box and "const _Iterator&" is a box around it.
        if (p.ref && at && !at.ref && !at.isFunc && !at.dims.length) {
          if (at.ptr > 0) {
            const r = this.refBox(x);
            if (r !== null) return r;
            return `{a: [${this.ex(x)}], i: 0}`;
          }
          if (this.cx.classes.has(this.cx.stripAll(at))) return this.exBox(x);
        }
        return this.ex(x);
      }
      if (at && at.name === "__null" && isNumericName(coreName(p))) return "0";
      if (isIntegerName(coreName(p)) && at && (coreName(at) === "float" || coreName(at) === "double")) {
        return `Math.trunc(${this.ex(x)})`;
      }
      // A class parameter passed by value is a copy of the argument: the callee
      // writes through its own object, and the caller's stays as it was.
      if (!pB && !p.isFunc && at && !at.isBox() && !at.isFunc && !at.dims.length) {
        const pfq = this.cx.stripAll(p);
        const pcls = this.cx.classes.get(pfq);
        if (pcls && pfq === this.cx.stripAll(at) && !initListElemOf(this.cx, p) && !this.prvalue(x) && !pcls.isLambda) {
          this.markCopyCtor(pfq);
          return `new ${pcls.mangled}(${this.copySource(x)})`;
        }
      }
      return this.ex(x);
    }

    // Whether an expression is a temporary rather than an object in some named
    // storage: passing a temporary by value gives the callee its own object
    // already, while a name has to be copied for it.
    prvalue(x: Expr): boolean {
      const t = this.cx.getAnn(x).t as CppType | null;
      if (t && (t.ref !== "" || t.ptr > 0 || t.dims.length || t.isFunc)) return false;
      switch (x.kind) {
        case "lit":
        case "call":
        case "cast":
        case "binary":
        case "cond":
        case "lambda":
        case "new":
        case "stmtexpr":
        case "sizeof":
        case "typeid":
          return true;
        case "unary": {
          const u = x as UnaryExpr;
          return u.op !== "*" && u.op !== "&" && !u.postfix;
        }
        default:
          return false;
      }
    }

    // Whether an expression is an object of its own: a temporary, or an object
    // only this function can name.  A member, what a pointer points at, or an
    // object the caller shares lives in someone else's storage.
    freshValue(x: Expr): boolean {
      const t = this.cx.getAnn(x).t as CppType | null;
      if (t && (t.ref !== "" || t.ptr > 0 || t.dims.length || t.isFunc)) return false;
      switch (x.kind) {
        case "call":
        case "cast":
        case "binary":
        case "cond":
        case "lambda":
        case "new":
        case "stmtexpr":
          return true;
        case "id": {
          const s = this.cx.getAnn(x).sym;
          if (!s || s.k !== "var") return false;
          const v = s.v;
          return !v.isParam && !v.isField && !v.isStatic && !v.isGlobal;
        }
        default:
          return false;
      }
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
      // The value a function hands back is an object of its own, as the return
      // of the original is: what the function does not own is copied out.
      const rfq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? this.cx.stripAll(ret) : "";
      if (rfq && this.cx.classes.has(rfq) && this.cx.getAnn(x).t) {
        const afq = this.cx.stripAll(this.cx.getAnn(x).t as CppType);
        // The object a local or a temporary is becomes the value handed back;
        // anything else is copied into one.
        if (afq === rfq) {
          if (this.freshValue(x)) return this.ex(x);
          this.markCopyCtor(rfq);
          return `new ${(this.cx.classes.get(rfq) as ClsInfo).mangled}(${this.copySource(x)})`;
        }
      }
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
      return !!t && t.ref !== "" && !t.dims.length && !t.isFunc && !this.cx.classes.has(this.cx.stripAll(t));
    }

    exCallValue(e: CallExpr): string {
      if (this.returnsScalarRef(e)) {
        const v = this.tmp();
        return `(${v} = ${this.exCall(e)}, ${v}.a[${v}.i])`;
      }
      return this.exCall(e);
    }

    // The value an expression stands for. A call, an index or a "*" through an
    // operator that returns a reference to a scalar hands back the box; where a
    // value is wanted, the element the box points at is read.
    exVal(e: Expr): string {
      // A class object in a condition: its conversion to bool is called here.
      const bc = this.cx.getAnn(e).boolConv;
      if (bc) {
        const bt = this.cx.getAnn(e).t as CppType | null;
        // A reference (operator>> returns istream&) is a box: the object is inside it.
        const bo = bt && bt.ref ? this.deref(e) : this.ex(e);
        return `${this.paren(bo)}.${methodJsName(this.cx, bc)}()`;
      }
      const t = this.cx.getAnn(e).t as CppType | null;
      if (!t || !t.ref || t.ptr > 0 || t.dims.length || t.isFunc) return this.ex(e);
      if (this.cx.classes.has(this.cx.stripAll(t))) return this.ex(e);
      if (e.kind === "id" || e.kind === "call") return this.ex(e);
      return this.deref(e);
    }

    // The C library's memory functions take a byte count, but an array holds
    // elements: the count is divided by the size of one element, exactly as the
    // "__builtin_mem*" forms of the same functions do. Only the C headers and the
    // library bodies are treated this way, so a program may still define its own "memcpy".
    memFuncCount(fn: FuncInfo, e: CallExpr, aa: string[]): void {
      if (fn.isMethod || e.args.length < 3) return;
      const file = (fn.decl.file || "").replace(/^.*[\/\\]/, "");
      const header = ["string.h", "cstring", "wchar.h", "cwchar", "strings.h"].indexOf(file) >= 0;
      // A library body counts bytes only for the memory functions: qsort and bsearch count elements.
      const libBody = !(fn.decl.body || []).length && libcBodySource(fn.fq) !== null && ["memcpy", "memmove", "memset", "memcmp", "bcmp", "memchr", "memrchr", "mempcpy", "bcopy"].indexOf(fn.fq) >= 0;
      if (!header && !libBody) return;
      const pt = this.cx.getAnn(e.args[0]).t as CppType | null;
      if (!pt || (pt.ptr === 0 && !pt.dims.length)) return;
      // The element of an array is what its first dimension holds; a pointer's is what it points to.
      const el = new CppType(pt.name);
      el.segs = pt.segs;
      if (pt.ptr === 0) el.dims = pt.dims.slice(1);
      else el.ptr = pt.ptr - 1;
      let sz = 0;
      try {
        sz = constSizeof(this.cx, el, new Set());
      } catch {
        sz = 0;
      }
      if (sz <= 1) return;
      aa[2] = `Math.trunc((${aa[2]}) / ${sz})`;
    }

    // "std::initializer_list<T>" is the array its elements are made of: the
    // header's own begin/end/size are answered from that array, so
    // "vector<int> v{1, 2, 3}" can run the standard range-construction.
    initListCall(e: CallExpr): string | null {
      if (e.fn.kind !== "member") return null;
      const m = e.fn as MemberExpr;
      const ot = this.cx.getAnn(m.obj).t as CppType | null;
      if (!ot || ot.isBox() || ot.dims.length || ot.isFunc) return null;
      const cls = this.cx.classes.get(this.cx.stripAll(ot));
      if (!cls) return null;
      const tmpl = (cls.fromTmpl || "").split("::").pop();
      if (tmpl !== "initializer_list") return null;
      const o = this.objOf(m.obj);
      if (m.field === "begin") return `({a: ${o}, i: 0})`;
      if (m.field === "end") return `({a: ${o}, i: ${this.paren(o)}.length})`;
      if (m.field === "size") return `${this.paren(o)}.length`;
      return null;
    }

    exCall(e: CallExpr): string {
      const a = this.cx.getAnn(e);
      const il = this.initListCall(e);
      if (il !== null) return il;
      // A destructor call that resolved to no destructor has nothing to do; the
      // target language reclaims the storage itself.
      if (!a.call && e.fn.kind === "member" && (e.fn as MemberExpr).field.charAt(0) === "~") return "void 0";
      if (typeof a.call === "object" && a.call !== null && "builtin" in (a.call as object)) {
        return this.exBuiltin((a.call as { builtin: string }).builtin, e);
      }
      const fn = a.call as FuncInfo | null;
      if (!fn) {
        const ft = this.cx.getAnn(e.fn).t as CppType;
        const aa = e.args.map((x, i) => {
          const pt = ft && ft.isFunc && i < (ft.funcParams || []).length ? ft.funcParams[i] : null;
          return pt ? this.argFor(pt, x, null) : this.ex(x);
        });
        if (e.fn.kind === "member") {
          const m = e.fn as MemberExpr;
          const o = this.objOf(m.obj);
          const ma = this.cx.getAnn(m);
          const f = ma.sym;
          if (f && f.k === "var" && f.v.isField) {
            return `${this.paren(o)}.${f.v.mangled}(${aa.join(", ")})`;
          }
        }
        return `${this.paren(this.ex(e.fn))}(${aa.join(", ")})`;
      }
      const ps = this.cx.funcParams(fn);
      const aa: string[] = [];
      const cvar = ps.length > 0 && last(ps).variadic && !last(ps).isPack ? ps.length - 1 : -1;
      e.args.forEach((x, i) => {
        if (cvar >= 0 && i >= cvar) {
          aa.push(this.vargFor(x));
          return;
        }
        // A parameter pack keeps the type it was deduced to for this call.
        const pt = i < ps.length ? ps[i].type : null;
        if (pt && this.isInitListParam(pt) && x.kind === "initlist") {
          aa.push(`[${(x as InitListExpr).items.map(y => this.ex(y)).join(", ")}]`);
        } else {
          aa.push(pt ? this.argFor(pt, x, a.convs[i] || null) : this.ex(x));
        }
      });
      this.memFuncCount(fn, e, aa);
      for (let i = e.args.length; i < ps.length && !ps[i].variadic; i++) {
        aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
      }
      let s: string;
      if (fn.isCtor) {
        const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
        s = `new ${cls.mangled}(${aa.join(", ")})`;
      } else if (!fn.isMethod) {
        s = `${this.cx.symOf(fn)}(${aa.join(", ")})`;
      } else if (fn.isStatic) {
        const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
        s = `${cls.mangled}.${methodJsName(this.cx, fn)}(${aa.join(", ")})`;
      } else if (e.fn.kind === "id" && (e.fn as IdExpr).parts.length > 1) {
        const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
        s = `${cls.mangled}.prototype.${methodJsName(this.cx, fn)}.call(this${aa.length ? ", " + aa.join(", ") : ""})`;
      } else if (e.fn.kind === "member") {
        let o = this.objOf((e.fn as MemberExpr).obj);
        const ma = this.cx.getAnn(e.fn);
        if (ma.arrowCall) o = this.arrowObj(ma.arrowCall as FuncInfo, o);
        // obj.field(args) on a functor field calls operator() on the field.
        if (ma.sym && ma.sym.k === "var" && ma.sym.v.isField) o = this.ex(e.fn);
        if ((e.fn as MemberExpr).qual.length && !(ma.sym && ma.sym.k === "var" && ma.sym.v.isField)) {
          const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
          s = `${cls.mangled}.prototype.${methodJsName(this.cx, fn)}.call(${o}${aa.length ? ", " + aa.join(", ") : ""})`;
        } else if (!fn.isVirtual && fn.cls) {
          // A non-virtual method is bound by the static type: a derived class that
          // declares the same name (head() in both TI<0,...> and TI<1,...>) must not
          // replace it on the JS prototype chain.
          const cls = this.cx.classes.get(fn.cls as string) as ClsInfo;
          s = `${cls.mangled}.prototype.${methodJsName(this.cx, fn)}.call(${o}${aa.length ? ", " + aa.join(", ") : ""})`;
        } else {
          s = `${this.paren(o)}.${methodJsName(this.cx, fn)}(${aa.join(", ")})`;
        }
      } else if (e.fn.kind === "id") {
        // A name can denote an object whose operator() is called, not a member of
        // the enclosing class.
        const callee = this.cx.getAnn(e.fn).sym;
        s = callee && callee.k === "var" ? `${this.paren(this.objOf(e.fn))}.${methodJsName(this.cx, fn)}(${aa.join(", ")})` : `this.${methodJsName(this.cx, fn)}(${aa.join(", ")})`;
      } else {
        s = `${this.paren(this.objOf(e.fn))}.${methodJsName(this.cx, fn)}(${aa.join(", ")})`;
      }
      // The object a call returns is the call's own temporary: the callee hands
      // a value of its own back (a local, or a copy it made of what it does not
      // own), so no copy is made here.
      return s;
    }

    exBuiltin(name: string, e: CallExpr): string {
      if (name === "__ctj_js") {
        if (!e.args.length || e.args[0].kind !== "lit" || (e.args[0] as LitExpr).lkind !== "string") {
          this.cx.fail("__ctj_js needs a string literal", e);
        }
        let tpl = (e.args[0] as LitExpr).value.slice(1, -1);
        for (let i = 1; i < e.args.length; i++) {
          tpl = tpl.split(`$${i}`).join(`(${this.exVal(e.args[i])})`);
        }
        return `(${tpl})`;
      }
      if (name.startsWith("__is_") || name.startsWith("__has_")) {
        const a = this.cx.getAnn(e).call as { builtin: string; value?: number } | null;
        return String(a && typeof a.value === "number" ? a.value : 0);
      }
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
      // "__builtin_popcountl" and friends differ only in the width of their
      // argument, which the target language's number does not distinguish.
      const bit = bitBuiltin(name) || name;
      const bk = intKindOf(this.cx.getAnn(e.args[0]).t as CppType | null);
      if (bitBuiltin(name) && bk && bk.big) return this.bitBig(bit, this.ex(e.args[0]));
      if (bit === "__builtin_clz") return `Math.clz32(${this.ex(e.args[0])})`;
      if (bit === "__builtin_ctz") {
        const x = this.ex(e.args[0]);
        return `(${x} === 0 ? 32 : 31 - Math.clz32((${x}) & -(${x})))`;
      }
      if (bit === "__builtin_popcount") {
        const x = this.ex(e.args[0]);
        return `(((${x}) >>> 0).toString(2).split("1").length - 1)`;
      }
      if (bit === "__builtin_ffs") {
        const x = this.ex(e.args[0]);
        return `(((${x}) & 0xffffffff) === 0 ? 0 : 32 - Math.clz32((${x}) & -(${x})))`;
      }
      if (bit === "__builtin_parity") {
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
        return `((v) => { let w = BigInt.asUintN(64, v), r = 0n; for (let k = 0; k < 8; k++) { r = (r << 8n) | (w & 255n); w >>= 8n; } return r; })(${x})`;
      }
      if (name === "__builtin_abs" || name === "__builtin_labs") return `Math.abs(${this.ex(e.args[0])})`;
      if (name === "__builtin_llabs") {
        const x = castInt(this.ex(e.args[0]), intKindOf(this.cx.getAnn(e.args[0]).t as CppType | null), LONG_LONG);
        return `((v) => BigInt.asIntN(64, v < 0n ? -v : v))(${x})`;
      }
      if (name === "__builtin_va_start") return `(${this.lvalue(e.args[0])} = {a: ${this.varRest(e)}, i: 0}, undefined)`;
      if (name === "__builtin_va_end") return `(${this.ex(e.args[0])}, undefined)`;
      if (name === "__builtin_va_copy") return `(${this.lvalue(e.args[0])} = ((s) => ({a: s.a, i: s.i}))(${this.ex(e.args[1])}), undefined)`;
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

    foldStaticConst(c: ClsInfo, ft: CppType, fd: VarDecl, init: Expr): string | null {
      const cnst = ft.cnst || fd.flags.includes("const") || fd.flags.includes("constexpr");
      if (!cnst || ft.ptr || ft.ref || ft.dims.length || ft.isBox()) return null;
      const cn = coreName(ft);
      const isInt = isIntegerName(cn) || this.cx.enums.has(this.cx.stripAll(ft)) || this.cx.enums.has(cn);
      // A 64-bit constant is built from its BigInt literals, not from a folded number.
      if (!isInt || intKindOf(ft)?.big) return null;
      try {
        const v = constEval(this.cx, init, this.cx.memberScope(c));
        return typeof v === "number" ? String(v) : null;
      } catch {
        return null;
      }
    }

    blankScope(): Scope {
      return rootScope();
    }

    // The scope a type name written in an expression is resolved in: that of the
    // function being emitted, so "sizeof(_Rep)" sees the members of _Rep.
    curScope(): Scope {
      const fn = this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
      return fn ? fn.scope : rootScope();
    }

    exIndex(e: IndexExpr): string {
      const a = this.cx.getAnn(e);
      if (a.call) {
        const fn = a.call as FuncInfo;
        const ps = this.cx.funcParams(fn);
        const o = this.objOf(e.arr);
        const aa = this.argFor(ps[0].type, e.idx, a.convs[0] || null);
        return `${this.paren(o)}.${methodJsName(this.cx, fn)}(${aa})`;
      }
      const at = this.cx.getAnn(e.arr).t as CppType;
      if (at.ptr > 0) {
        const p = this.complex(this.ex(e.arr), e.arr);
        const pp = this.paren(p);
        if (this.isZeroLit(e.idx)) return `${pp}.a[${pp}.i]`;
        return `${pp}.a[${pp}.i + (${toNumber(this.ex(e.idx), intKindOf(this.cx.getAnn(e.idx).t as CppType | null))})]`;
      }
      const arr = this.complex(this.ex(e.arr), e.arr);
      return `${this.paren(arr)}[${this.ex(e.idx)}]`;
    }

    exMember(e: MemberExpr): string {
      const a = this.cx.getAnn(e);
      const f = a.sym;
      if (!f || f.k !== "var" || !f.v.isField) this.cx.fail("bad member", e);
      const v = f.v;
      const fname = v.mangled;
      const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::")) as ClsInfo;
      if (v.isStatic) return `${cls.mangled}.${fname}`;
      let o = this.objOf(e.obj);
      if (a.arrowCall) o = this.arrowObj(a.arrowCall as FuncInfo, o);
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
          return `${this.paren(o)}.${methodJsName(this.cx, fn)}${post}`;
        }
        return `${this.paren(o)}.${methodJsName(this.cx, fn)}()`;
      }
      if (e.op === "*") {
        const at = this.cx.getAnn(e.arg).t as CppType;
        if (at.isFunc) return this.ex(e.arg);
        if (e.arg.kind === "unary" && incKind(e.arg)) return this.ptrIncElem(e.arg);
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
          // The value is a pointer: a copy of the pointer before (postfix) or after (prefix) the step.
          const t = this.tmp();
          const p = this.paren(this.lvalue(e.arg));
          if (post) {
            const old = this.tmp();
            return `(${t} = ${p}, ${old} = {a: ${t}.a, i: ${t}.i}, ${t}.i${inc}, ${old})`;
          }
          return `(${t} = ${p}, ${t}.i${inc}, {a: ${t}.a, i: ${t}.i})`;
        }
        const l = this.lvalue(e.arg);
        const ik = intKindOf(at);
        if (ik && this.isSimple(e.arg)) {
          // The new value is the old one plus or minus 1, reduced to the type.
          const step = (cur: string) => wrapInt(`${cur} ${inc === "++" ? "+" : "-"} ${ik.big ? "1n" : "1"}`, ik);
          if (!post) return `(${l} = ${step(l)})`;
          const t = this.tmp();
          return `(${t} = ${l}, ${l} = ${step(t)}, ${t})`;
        }
        return post ? `${l}${inc}` : `${inc}${l}`;
      }
      if (e.op === "!") return `(!${this.paren(this.exVal(e.arg))})`;
      const ak = intKindOf(this.cx.getAnn(e.arg).t as CppType | null);
      if (e.op === "+") return ak && ak.big ? this.ex(e.arg) : `(+${this.paren(this.ex(e.arg))})`;
      if ((e.op === "-" || e.op === "~") && ak) {
        return wrapInt(`${e.op}(${this.ex(e.arg)})`, promoteKind(ak));
      }
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
          return `${this.paren(o)}.${methodJsName(this.cx, fn)}(${aa})`;
        }
        const aa = [this.argFor(ps[0].type, e.l, a.convs[0] || null), this.argFor(ps[1].type, e.r, a.convs[1] || null)];
        return `${this.cx.symOf(fn)}(${aa.join(", ")})`;
      }
      const lt = this.cx.getAnn(e.l).t as CppType;
      const rt = this.cx.getAnn(e.r).t as CppType;
      let l = this.exVal(e.l);
      let r = this.exVal(e.r);
      const lb = this.pboxArg(e.l, lt, l);
      const rb = this.pboxArg(e.r, rt, r);
      if (e.op === "&&" || e.op === "||") return `(${l} ${e.op} ${r})`;
      if (e.op === ",") return `(${l}, ${r})`;
      const lp = lt && !lt.isFunc && (lt.ptr > 0 || (lt.dims.length > 0 && !lt.isBox()));
      const rp = rt && !rt.isFunc && (rt.ptr > 0 || (rt.dims.length > 0 && !rt.isBox()));
      const lk = intKindOf(lt);
      const rk = intKindOf(rt);
      if (lk && rk && !lp && !rp) {
        const v = this.intOp(e.op, l, r, lk, rk);
        if (v !== null) return v;
      }
      // A 64-bit integer that meets a non-integer operand is taken as a number.
      if (lk && lk.big && !rk) l = toNumber(l, lk);
      if (rk && rk.big && !lk) r = toNumber(r, rk);
      if (e.op === "==" || e.op === "!=") {
        const op = e.op === "==" ? "===" : "!==";
        if (lp && rp) {
          const b = this.pbind([
            { s: this.pbox(lb, e.l, lt as CppType), e: e.l },
            { s: this.pbox(rb, e.r, rt as CppType), e: e.r },
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
            { s: this.pbox(lb, e.l, lt as CppType), e: e.l },
            { s: this.pbox(rb, e.r, rt as CppType), e: e.r },
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
            { s: this.pbox(lb, e.l, lt as CppType), e: e.l },
            { s: this.pbox(rb, e.r, rt as CppType), e: e.r },
          ]);
          const body = `(${this.pidx(b.v[0])} - ${this.pidx(b.v[1])})`;
          return b.pre ? `(${b.pre}, ${body})` : body;
        }
        if (lp) {
          const b = this.pbind([{ s: this.pbox(lb, e.l, lt as CppType), e: e.l }]);
          const sign = e.op === "+" ? "+" : "-";
          const body = `({a: ${this.parr(b.v[0])}, i: ${this.pidx(b.v[0])} ${sign} (${r})})`;
          return b.pre ? `(${b.pre}, ${body})` : body;
        }
        const b = this.pbind([{ s: this.pbox(rb, e.r, rt as CppType), e: e.r }]);
        const body = `({a: ${this.parr(b.v[0])}, i: (${l}) + ${this.pidx(b.v[0])}})`;
        return b.pre ? `(${b.pre}, ${body})` : body;
      }
      // The result of the operation is an "unsigned int", and such a value wraps
      // at 32 bits: the target language's arithmetic would go on past it.
      const uwrap = !!a.t && !(a.t as CppType).isBox() && !(a.t as CppType).dims.length && !(a.t as CppType).isFunc && (a.t as CppType).ptr === 0 && coreName(a.t as CppType) === "unsigned int";
      if (e.op === "<<" || e.op === ">>") {
        if (e.op === ">>" && lt && coreName(lt).startsWith("unsigned")) return `(${l} >>> ${r})`;
        if (e.op === "<<" && uwrap) return `((${l} << ${r}) >>> 0)`;
        return `(${l} ${e.op} ${r})`;
      }
      if (e.op === "/" && lt && rt && isIntegerName(coreName(lt)) && isIntegerName(coreName(rt))) {
        const q = `$div(${l}, ${r})`;
        return uwrap ? `((${q}) >>> 0)` : `(${q})`;
      }
      if (uwrap) {
        if (e.op === "+" || e.op === "-") return `((${l} ${e.op} ${r}) >>> 0)`;
        if (e.op === "*") return `((Math.imul(${l}, ${r})) >>> 0)`;
      }
      return `(${l} ${e.op} ${r})`;
    }

    // A binary operator on two integers of up to 32 bits, with the conversions
    // of C++: operands are converted to the common type, and the result is
    // reduced to the type it has.  Returns null for an operator not handled here.
    intOp(op: string, l: string, r: string, lk: IntKind, rk: IntKind): string | null {
      if (op === "<<" || op === ">>") {
        // The shift has the promoted type of its left operand; a 64-bit value takes a BigInt count.
        const k = promoteKind(lk);
        const cnt = k.big ? castInt(r, rk, LONG_LONG) : toNumber(r, rk);
        if (op === "<<") return wrapInt(`(${l}) << (${cnt})`, k);
        return k.big || k.signed ? `((${l}) >> (${cnt}))` : `((${l}) >>> (${cnt}))`;
      }
      const A = commonKind(lk, rk);
      // An operand changes value only when it becomes a different type of the common type.
      const conv = (x: string, from: IntKind) => {
        if (A.big) return from.big && from.signed === A.signed ? x : castInt(x, from, A);
        return !A.signed && promoteKind(from).signed ? wrapInt(x, A) : x;
      };
      const cmp: Record<string, string> = { "==": "===", "!=": "!==", "<": "<", ">": ">", "<=": "<=", ">=": ">=" };
      if (cmp[op]) return `(${conv(l, lk)} ${cmp[op]} ${conv(r, rk)})`;
      const lx = conv(l, lk);
      const rx = conv(r, rk);
      switch (op) {
        case "+":
        case "-":
        case "&":
        case "|":
        case "^":
          return wrapInt(`(${lx}) ${op} (${rx})`, A);
        case "*":
          return wrapInt(A.big ? `(${lx}) * (${rx})` : `Math.imul(${lx}, ${rx})`, A);
        case "/":
          return wrapInt(`$div(${lx}, ${rx})`, A);
        case "%":
          return wrapInt(`$mod(${lx}, ${rx})`, A);
        default:
          return null;
      }
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
          // The value of the type is the array its elements are made of, so the
          // assignment stores that array.
          if (initListElemOf(this.cx, t)) return `${this.lvalue(e.l)} = ${this.argFor(t, e.r, null)}`;
          const cn = (this.cx.classes.get(this.cx.stripAll(t)) as ClsInfo).mangled as string;
          rhs = this.ctorExpr(cn, a.initCall, items, a.convs, t);
          // The temporary a braced list builds is passed as the reference it is
          // (a box around it), as argFor passes any other class value.
          const rp = ps[ps.length - 1].type;
          if (rp.ref !== "" && rp.ptr === 0 && !rp.dims.length) rhs = `{a: [${rhs}], i: 0}`;
        } else {
          rhs = this.argFor(ps[ps.length - 1].type, e.r, a.convs[a.convs.length - 1] || null);
        }
        if (fn.isMethod) {
          const o = this.objOf(e.l);
          return `${this.paren(o)}.${methodJsName(this.cx, fn)}(${rhs})`;
        }
        return `${this.cx.symOf(fn)}(${this.ex(e.l)}, ${rhs})`;
      }
      const lt = this.cx.getAnn(e.l).t as CppType;
      if (this.splitLhs(e.l)) {
        const t = this.tmp();
        const target = new CppType(lt.name);
        target.segs = lt.segs;
        target.ptr = lt.ptr;
        target.dims = lt.dims;
        const tk = intKindOf(lt);
        const sk = e.op === "=" ? null : intKindOf(this.cx.getAnn(e.r).t as CppType | null);
        if (tk && sk) {
          const op = e.op.slice(0, -1);
          const ref = `${t}.a[${t}.i]`;
          const v = this.intOp(op, ref, this.exVal(e.r), tk, sk);
          if (v !== null) return `(${t} = ${this.lhsBox(e.l)}, ${ref} = ${castInt(v, intResultKind(op, tk, sk), tk)})`;
        }
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
      const lk = intKindOf(lt);
      const rk = e.op === "=" ? null : intKindOf(this.cx.getAnn(e.r).t as CppType | null);
      if (lk && rk && this.isSimple(e.l)) {
        const op = e.op.slice(0, -1);
        const v = this.intOp(op, l, this.exVal(e.r), lk, rk);
        if (v !== null) return `${l} = ${castInt(v, intResultKind(op, lk, rk), lk)}`;
      }
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
        const obj = a.call ? this.ctorExpr(cn, a.call as FuncInfo, e.args, a.convs, t) : `new ${cn}()`;
        // The object goes into the storage it was given and keeps its address, so
        // that "this + 1" can find the storage again; what the expression yields
        // is the pointer to that storage.
        return `(${slot} = ${obj}, ${slot}.ctj_a = ${pp}.a, ${slot}.ctj_i = ${pp}.i, {a: ${pp}.a, i: ${pp}.i})`;
      }
      const v = e.args.length ? this.ex(e.args[0]) : this.zero(t);
      return `(${slot} = ${v})`;
    }

    exNew(e: NewExpr): string {
      const a = this.cx.getAnn(e);
      const t = this.cx.resolveTypeNode(e.type, this.curScope());
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

    // Whether a class holds data of its own -- what a view of it would have to
    // carry along -- looking through its bases for the answer.
    isEmptyClass(fq: string, seen?: Set<string>): boolean {
      const c = this.cx.classes.get(fq) as ClsInfo | undefined;
      if (!c) return false;
      const s = seen || new Set<string>();
      if (s.has(fq)) return true;
      s.add(fq);
      if (c.fields.size) return false;
      return c.bases.every(b => this.isEmptyClass(b.fq, s));
    }

    derivesFrom(fq: string, baseFq: string, seen?: Set<string>): boolean {
      if (fq === baseFq) return true;
      const c = this.cx.classes.get(fq) as ClsInfo | undefined;
      if (!c) return false;
      const s = seen || new Set<string>();
      if (s.has(fq)) return false;
      s.add(fq);
      return c.bases.some(b => this.derivesFrom(b.fq, baseFq, s));
    }

    // "static_cast<_Tp&>(__eboh)" names the base subobject _Tp of the helper it
    // stands in. The object at run time is the complete one, and that object's
    // prototype may already answer a name with something else: a hashtable
    // answers "op_call" with its hash where the equality predicate is asked for.
    // A view whose prototype is the base's gives the reference the base's own
    // methods; an empty base holds no data for the view to leave behind.
    baseRefView(e: CastExpr, t: CppType): string | null {
      if (t.ptr > 0 || t.isFunc || t.dims.length) return null;
      const tf = this.cx.stripAll(t);
      const tc = this.cx.classes.get(tf) as ClsInfo | undefined;
      if (!tc || !tc.mangled || !this.isEmptyClass(tf)) return null;
      const at = this.cx.getAnn(e.arg).t as CppType | null;
      if (!at) return null;
      const af = this.cx.stripAll(at);
      if (!af || af === tf || !this.cx.classes.has(af) || !this.derivesFrom(af, tf)) return null;
      return `{a: [Object.create(${tc.mangled}.prototype)], i: 0}`;
    }

    // va_arg(ap, T): the argument at ap's position, converted to T, and ap moves past it.
    exVaArg(e: CastExpr): string {
      const t = this.cx.getAnn(e).t as CppType;
      return `((p) => { const v = p.a[p.i++]; return ${this.vaConv(t, "v")}; })(${this.ex(e.arg)})`;
    }

    // An argument read by va_arg has the type its caller passed, which the
    // default promotions of C leave as a number, a BigInt or a boolean.
    vaConv(t: CppType, x: string): string {
      if (t.isBox() || t.dims.length || t.isFunc) return x;
      const k = intKindOf(t);
      if (k) {
        if (k.big) return `BigInt.${k.signed ? "asIntN" : "asUintN"}(64, typeof ${x} === "bigint" ? ${x} : BigInt(Math.trunc(Number(${x}))))`;
        return wrapInt(`Number(typeof ${x} === "bigint" ? BigInt.asIntN(32, ${x}) : ${x})`, k);
      }
      if (coreName(t) === "bool") return `!!${x}`;
      if (isNumericName(coreName(t))) return `Number(${x})`;
      return x;
    }

    // An argument in the variadic part of a call is passed as its value; an
    // array in it decays to a pointer, as it does for any parameter.
    vargFor(x: Expr): string {
      const at = this.cx.getAnn(x).t as CppType | null;
      if (at && at.dims.length && !at.isFunc) return this.argFor(decayed(at), x, null);
      return this.exVal(x);
    }

    // The JS parameter holding the variadic arguments of the function being emitted.
    varRest(e: Expr): string {
      const f = this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
      const ps = f ? this.cx.funcParams(f) : [];
      const i = ps.findIndex(p => p.variadic);
      if (i < 0) this.cx.fail("va_start in a function without a variadic parameter", e);
      const p = ps[i];
      return `${p.name ? safeJsName(p.name) : `$p${i}`}_rest`;
    }

    exCast(e: CastExpr): string {
      if (e.ckind === "va_arg") return this.exVaArg(e);
      const a = this.cx.getAnn(e);
      const t = a.t as CppType;
      if (a.call) {
        const fq = this.cx.stripAll(t);
        const cn = (this.cx.classes.get(fq) as ClsInfo).mangled as string;
        const cps = this.cx.funcParams(a.call as FuncInfo);
        // "T()" and "T{}" value initialise: the empty list is not an argument of
        // the constructor the cast resolved to.
        if (!cps.length || (e.arg.kind === "initlist" && !(e.arg as InitListExpr).items.length)) return `new ${cn}()`;
        // "T(a, b)" is a functional cast whose argument list is an initlist of
        // the constructor arguments (e.g. pair<_Base_ptr,_Base_ptr>(__x, __y)).
        if (e.arg.kind === "initlist") {
          return this.ctorExpr(cn, a.call as FuncInfo, (e.arg as InitListExpr).items, a.convs, t);
        }
        return `new ${cn}(${this.argFor(cps[0].type, e.arg, a.conv)})`;
      }
      // "size_type()" value-initialises: there is no argument to convert.
      if (e.arg.kind === "initlist" && !(e.arg as InitListExpr).items.length) return this.zero(t);
      if (a.conv) {
        return `${this.paren(this.objOf(e.arg))}.${methodJsName(this.cx, (a.conv as { kind: string; fn: FuncInfo }).fn)}()`;
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
      if (t.ptr > 0 && (at.name === "__null" || this.isZeroLit(e.arg))) return "null";
      // "static_cast<T*>(this)" points at the object itself: its address is the
      // one the object records for itself, the same box "pbox" builds.
      if (t.ptr > 0 && !t.ref && e.arg.kind === "this") return this.pbox(this.ex(e.arg), e.arg, t);
      // Casting to a reference yields the address of the value, as any other
      // reference does ("static_cast<_Tp&&>(__t)" in std::forward). A reference
      // to a base class names the base subobject instead.  This comes before the
      // conversions below: a reference to a bool is the bool's own storage, not
      // the boolean value a cast to the plain type gives.
      // A reference to an array is the array itself (see isBoxedVar).
      if (t.ref && t.dims.length && !t.ptr) return this.ex(e.arg);
      if (t.ref) return this.baseRefView(e, t) || this.exBox(e.arg);
      if (coreName(t) === "bool" && at.isBox() && !at.isFunc) return `(${this.ex(e.arg)} != null)`;
      const ak = intKindOf(at);
      // A bool source is already a truth value (a comparison yields a JS boolean),
      // and "false !== 0" is true in JS, so it must not go through the numeric test.
      if (coreName(t) === "bool" && coreName(at) === "bool") return `!!(${this.ex(e.arg)})`;
      if (coreName(t) === "bool" && isNumericName(coreName(at))) return `(${this.ex(e.arg)} !== ${ak && ak.big ? "0n" : "0"})`;
      const tk = intKindOf(t);
      if (tk && (coreName(at) === "float" || coreName(at) === "double")) return castInt(this.ex(e.arg), null, tk);
      if (ak && ak.big && t.ptr === 0 && !t.dims.length && ["float", "double", "long double"].includes(coreName(t))) {
        return `Number(${this.ex(e.arg)})`;
      }
      // A cast between integers of up to 32 bits reduces the value to the target type.
      if (tk && (!at || (at.ptr === 0 && !at.dims.length && !at.isFunc))) {
        if (ak && ak.bits === tk.bits && ak.signed === tk.signed) return this.ex(e.arg);
        return castInt(this.ex(e.arg), ak, tk);
      }
      // An unsigned value wraps, so "size_t(-1)" is the largest size rather than
      // a negative one.
      if (t.ptr === 0 && !t.dims.length && isUnsignedName(coreName(t))) return `(${this.ex(e.arg)} >>> 0)`;
      return this.ex(e.arg);
    }

    // A bit builtin of a 64-bit argument, which is a BigInt.
    bitBig(bit: string, x: string): string {
      const pop = `((v) => { let c = 0; for (let w = BigInt.asUintN(64, v); w; w &= w - 1n) c++; return c; })(${x})`;
      switch (bit) {
        case "__builtin_popcount":
          return pop;
        case "__builtin_parity":
          return `(${pop} & 1)`;
        case "__builtin_clz":
          return `((v) => { const w = BigInt.asUintN(64, v); return w === 0n ? 64 : 64 - w.toString(2).length; })(${x})`;
        case "__builtin_ctz":
          return `((v) => { let w = BigInt.asUintN(64, v); if (w === 0n) return 64; let c = 0; while ((w & 1n) === 0n) { w >>= 1n; c++; } return c; })(${x})`;
        default:
          return `((v) => { let w = BigInt.asUintN(64, v); if (w === 0n) return 0; let c = 1; while ((w & 1n) === 0n) { w >>= 1n; c++; } return c; })(${x})`;
      }
    }

    exTypeid(e: TypeidExpr): string {
      let key: string;
      if (e.isType && e.type) {
        key = this.cx.resolveTypeNode(e.type, this.curScope()).key();
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
      // The name is the one the call sites look for: a lambda's "operator()" is
      // const, so the plain "op_call" would not be found on it.
      const mname = lfn ? methodJsName(this.cx, lfn) : "op_call";
      return `{${mname}: (${all.join(", ")}) => {\n${lines.join("\n")}\n${this.ind}}}`;
    }

    sizeofType(e: SizeofExpr): CppType {
      if (e.isType && e.type) return this.cx.getAnn(e).typeArg || this.cx.resolveTypeNode(e.type, this.curScope());
      if (e.expr) return this.cx.getAnn(e.expr).t as CppType;
      this.cx.fail("bad sizeof", e);
      return CppType.basic("int");
    }

    constStr(e: Expr): string {
      const known = this.cx.getAnn(e).constVal;
      if (known !== null) return String(known);
      const v = constEval(this.cx, e, this.blankScope());
      if (typeof v === "number") return String(v);
      return this.ex(e);
    }

    zero(t: CppType): string {
      const n = coreName(t);
      if (n === "bool") return "false";
      if (t.isFunc || t.name === "__null") return "null";
      if (n === "void") return "undefined";
      const k = intKindOf(t);
      return k && k.big ? "0n" : "0";
    }
  }
}
