// Itanium C++ ABI name mangling, the scheme g++ and clang use for their symbols.
// Every free function, class, and global that CTJ emits as a JavaScript identifier
// is named by this scheme: the encoding is reversible, so two different entities
// never share a name ("ns::B" and "ns_B" did, and were rejected as one class).
namespace CTJ {
  // One component of a qualified name. A constructor or destructor carries no name
  // of its own: the class it belongs to is the component before it.
  export interface MangleComp {
    n: string;
    a?: CppType[];
    ctor?: boolean;
    dtor?: boolean;
    conv?: CppType;
    unary?: boolean;
  }

  const BUILTIN_CODE: Record<string, string> = {
    void: "v",
    bool: "b",
    char: "c",
    "signed char": "a",
    "unsigned char": "h",
    short: "s",
    "unsigned short": "t",
    int: "i",
    "unsigned int": "j",
    long: "l",
    "unsigned long": "m",
    "long long": "x",
    "unsigned long long": "y",
    float: "f",
    double: "d",
    "long double": "e",
    wchar_t: "w",
    char16_t: "Ds",
    char32_t: "Di",
  };

  const OPERATOR_CODE: Record<string, string> = {
    new: "nw",
    "new[]": "na",
    delete: "dl",
    "delete[]": "da",
    "+": "pl",
    "-": "mi",
    "*": "ml",
    "/": "dv",
    "%": "rm",
    "&": "an",
    "|": "or",
    "^": "eo",
    "=": "aS",
    "+=": "pL",
    "-=": "mI",
    "*=": "mL",
    "/=": "dV",
    "%=": "rM",
    "&=": "aN",
    "|=": "oR",
    "^=": "eO",
    "<<": "ls",
    ">>": "rs",
    "<<=": "lS",
    ">>=": "rS",
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    ">": "gt",
    "<=": "le",
    ">=": "ge",
    "<=>": "ss",
    "!": "nt",
    "&&": "aa",
    "||": "oo",
    "++": "pp",
    "--": "mm",
    ",": "cm",
    "->*": "pm",
    "->": "pt",
    "()": "cl",
    "[]": "ix",
    "~": "co",
  };

  // The unary forms of the operators that have a binary form too.
  const UNARY_CODE: Record<string, string> = { "+": "ps", "-": "ng", "*": "de", "&": "ad" };

  // A JavaScript identifier for any text, one to one: each character outside
  // [A-Za-z0-9_] (the "$" included) is spelled "$" and two hex digits.
  export function identOf(n: string): string {
    return n.replace(/[^A-Za-z0-9_]/g, c => "$" + c.charCodeAt(0).toString(16).padStart(2, "0"));
  }

  // A source name: its length, then the name. A name that is not an identifier
  // (a template argument list that was kept in its text) is spelled by identOf.
  function srcName(n: string): string {
    // The anonymous namespaces of a translation unit are all one, as in g++.
    if (n.startsWith("$ns_")) return "12_GLOBAL__N_1";
    const esc = identOf(n);
    return esc.length + esc;
  }

  function base36(n: number): string {
    return n.toString(36).toUpperCase();
  }

  // The substitution "S_" names the first candidate, "S0_" the second, and so on.
  function seqRef(i: number): string {
    return i === 0 ? "S_" : "S" + base36(i - 1) + "_";
  }

  // The qualifiers and pointer levels of a type, outermost first: a reference, the
  // pointers, the array bounds, and the const of the pointee.
  function tokensOf(t: CppType): string[] {
    const toks: string[] = [];
    if (t.ref === "&") toks.push("R");
    else if (t.ref === "&&") toks.push("O");
    for (let i = 0; i < t.ptr; i++) toks.push("P");
    for (const d of t.dims) toks.push(d < 0 ? "A_" : `A${d}_`);
    if (t.cnst) toks.push("K");
    return toks;
  }

  function isBuiltin(t: CppType): boolean {
    if (t.isFunc || t.segs.length > 1) return false;
    if (t.segs.length === 1 && t.segs[0].a.length) return false;
    return BUILTIN_CODE[t.segs.length ? t.segs[0].n : t.name] !== undefined;
  }

  function isValueArg(t: CppType): boolean {
    return t.segs.length === 1 && t.segs[0].n.startsWith("__value") && !t.ptr && !t.ref && !t.dims.length && !t.isFunc;
  }

  // The qualified name of a type as components: "ns::B<int>" is ns, then B<int>.
  export function flattenSegs(t: CppType): MangleComp[] {
    const out: MangleComp[] = [];
    const segs = t.segs.length ? t.segs : [{ n: t.name, a: [] as CppType[] }];
    for (const seg of segs) {
      const parts = seg.n.split("::");
      parts.forEach((p, j) => {
        const last = j === parts.length - 1;
        out.push({ n: p, a: last && seg.a.length ? seg.a : undefined });
      });
    }
    return out;
  }

  // The key of a qualified name up to component upto: the same name always gives
  // the same key, which is what the substitution table is searched with.
  function compKey(comps: MangleComp[], upto: number, noArgsLast = false): string {
    return comps
      .slice(0, upto + 1)
      .map((c, i) => {
        const args = c.a && !(noArgsLast && i === upto) ? "<" + c.a.map(tk).join(",") + ">" : "";
        return c.n + args;
      })
      .join("::");
  }

  // The key of a type without its qualifiers and pointer levels.
  function bkey(t: CppType): string {
    if (t.isFunc) {
      const ps = t.funcParams.map(tk).join(",") + (t.funcVariadic ? ",..." : "");
      return "F(" + (t.ret ? tk(t.ret) : "void") + ";" + ps + ")";
    }
    const comps = flattenSegs(t);
    return compKey(comps, comps.length - 1);
  }

  // The key of a complete type, qualifiers included.
  function tk(t: CppType): string {
    const toks = tokensOf(t);
    const b = bkey(t);
    return toks.length ? toks.join("") + "@" + b : b;
  }

  class Mangler {
    // Substitution candidates, by key, in the order they were first seen.
    private subs = new Map<string, number>();

    private find(key: string): string | null {
      const i = this.subs.get(key);
      return i === undefined ? null : seqRef(i);
    }

    private add(key: string): void {
      if (!this.subs.has(key)) this.subs.set(key, this.subs.size);
    }

    // A type: its qualifier levels are candidates of their own, and a level whose
    // key is known is replaced by the substitution for it.
    typeCode(t: CppType): string {
      const toks = tokensOf(t);
      const b = bkey(t);
      let out = "";
      for (let i = 0; i < toks.length; i++) {
        const key = toks.slice(i).join("") + "@" + b;
        const r = this.find(key);
        if (r !== null) return out + r;
        this.add(key);
        out += toks[i];
      }
      return out + this.baseCode(t);
    }

    private baseCode(t: CppType): string {
      if (t.isFunc) {
        const key = bkey(t);
        const r = this.find(key);
        if (r !== null) return r;
        this.add(key);
        let s = "F" + (t.ret ? this.typeCode(t.ret) : "v");
        s += t.funcParams.length ? t.funcParams.map(p => this.typeCode(p)).join("") : "v";
        if (t.funcVariadic) s += "z";
        return s + "E";
      }
      if (isBuiltin(t)) return BUILTIN_CODE[t.segs.length ? t.segs[0].n : t.name];
      const key = bkey(t);
      const r = this.find(key);
      if (r !== null) return r;
      return this.nameCode(flattenSegs(t), true, false);
    }

    private argCode(a: CppType): string {
      if (isValueArg(a)) {
        const v = parseInt(a.segs[0].n.slice(7), 10) || 0;
        return "Li" + (v < 0 ? "n" + -v : String(v)) + "E";
      }
      return this.typeCode(a);
    }

    private nameOf(c: MangleComp): string {
      if (c.ctor) return "C1";
      if (c.dtor) return "D1";
      if (c.n.startsWith("operator")) {
        const op = c.n.slice(8).trim();
        if (c.conv) return "cv" + this.typeCode(c.conv);
        if (c.unary && UNARY_CODE[op]) return UNARY_CODE[op];
        if (OPERATOR_CODE[op]) return OPERATOR_CODE[op];
      }
      return srcName(c.n);
    }

    // A qualified name. asType says whether it names a type, whose full name is then
    // a candidate; a function name is not, nor are the names of its own arguments.
    nameCode(comps: MangleComp[], asType: boolean, isConst: boolean): string {
      const n = comps.length;
      const std = n >= 2 && comps[0].n === "std";
      let head = "";
      let start = 0;
      // The longest prefix already seen is replaced by its substitution. A bare
      // "std" is not a candidate: it is spelled "St".
      for (let k = n - 2; k >= 0; k--) {
        if (std && k === 0) break;
        const r = this.find(compKey(comps, k));
        if (r !== null) {
          head = r;
          start = k + 1;
          break;
        }
      }
      if (!head && std) {
        head = "St";
        start = 1;
      }
      let body = "";
      for (let i = start; i < n; i++) {
        const c = comps[i];
        const last = i === n - 1;
        let nm = this.nameOf(c);
        if (c.a) {
          // A template name is a candidate of its own, before its arguments.
          if (!last || asType) {
            const tkey = compKey(comps, i, true);
            const r = this.find(tkey);
            if (r !== null) nm = r;
            else this.add(tkey);
          }
          body += nm + "I" + c.a.map(a => this.argCode(a)).join("") + "E";
        } else {
          body += nm;
        }
        if (!last) this.add(compKey(comps, i));
      }
      if (asType) this.add(compKey(comps, n - 1));
      const nested = head === "St" ? n > 2 : head !== "" || n > 1;
      if (nested) return "N" + (isConst ? "K" : "") + head + body + "E";
      return head + body;
    }
  }

  // A parameter of array type is a pointer to its first element.
  function decayParam(p: CppType): CppType {
    if (!p.dims.length || p.ref !== "") return p;
    const c = new CppType(p.name);
    c.segs = p.segs;
    c.ptr = p.ptr + 1;
    c.dims = p.dims.slice(1);
    c.cnst = p.cnst;
    return c;
  }

  // The name of a class: the mangled type name, with the "_Z" of a symbol.
  export function mangleClassSym(comps: MangleComp[]): string {
    return "_Z" + new Mangler().nameCode(comps, true, false);
  }

  // The name of a function. ret is given only for an instance of a function template,
  // whose symbol encodes its return type after its name.
  export function mangleFuncSym(comps: MangleComp[], params: CppType[], variadic: boolean, isConst: boolean, ret: CppType | null): string {
    const m = new Mangler();
    let s = "_Z" + m.nameCode(comps, false, isConst);
    if (ret) s += m.typeCode(ret);
    const ps = params.map(decayParam);
    s += ps.length ? ps.map(p => m.typeCode(p)).join("") : "v";
    if (variadic) s += "z";
    return s;
  }

  // The encoding of a parameter list alone: two methods are overloads of one another
  // when these differ, and an override when they agree.
  export function paramsSig(params: CppType[]): string {
    const m = new Mangler();
    return params.map(p => m.typeCode(decayParam(p))).join("");
  }

  // The name of a global variable or a static member.
  export function mangleVarSym(comps: MangleComp[]): string {
    return "_Z" + new Mangler().nameCode(comps, false, false);
  }

  // The name of a static variable of a function, which is named by the function's key.
  export function mangleLocalSym(fnKey: string, name: string): string {
    return "_ZZ" + srcName(fnKey) + "E" + srcName(name);
  }

  export function nsComps(ns: string[]): MangleComp[] {
    return ns.map(n => ({ n }));
  }

  // The components that enclose a declaration in a scope: its namespaces, or the
  // class it is a member of.
  export function scopeComps(scope: Scope): MangleComp[] {
    return scope.cls ? clsComps(scope.cls) : nsComps(scope.ns);
  }

  export function clsComps(cls: ClsInfo): MangleComp[] {
    const tmpl = !!cls.fromTmpl;
    const name = tmpl ? last(cls.fromTmpl.split("::")) : cls.short;
    return [...scopeComps(cls.scope), { n: name, a: tmpl && cls.instArgs.length ? cls.instArgs : undefined }];
  }

  // The components of a function's name: its scope, then the function itself. A
  // constructor is named by the class before it; an operator by its symbol.
  export function funcComps(cx: Cx, f: FuncInfo, params: CppType[], conv: CppType | null): MangleComp[] {
    const cls = f.isMethod ? cx.classes.get(f.cls) : undefined;
    const prefix = cls ? clsComps(cls) : scopeComps(f.scope);
    let name: MangleComp;
    if (f.isCtor) name = { n: "", ctor: true };
    else if (f.isDtor) name = { n: "", dtor: true };
    else if (f.isConv) name = { n: "operator", conv: conv || undefined };
    else name = { n: f.short, unary: params.length === (f.isMethod && !f.isStatic ? 0 : 1) };
    if (f.tmplArgs && f.tmplArgs.length) name.a = f.tmplArgs;
    return [...prefix, name];
  }

  // The symbol of a function, as the JavaScript identifier it is emitted under.
  // The entry point stays "main", which the program is run from.
  export function funcSym(cx: Cx, f: FuncInfo): string {
    if (f.fq === "main") return "main";
    const params = cx.funcParams(f).map(p => p.type);
    const isTmpl = !!f.tmplArgs && f.tmplArgs.length > 0;
    const conv = f.isConv ? cx.funcRet(f) : null;
    const comps = funcComps(cx, f, params, conv);
    const ds = f.decl.params;
    const variadic = ds.length > 0 && !!ds[ds.length - 1].variadic;
    return mangleFuncSym(comps, params, variadic, f.isConst, isTmpl ? cx.funcRet(f) : null);
  }
}
