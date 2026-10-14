// Semantic model: the C++ type representation (CppType), scopes and symbols, and Cx,
// the program state that collects classes, functions and template instantiations.
namespace CTJ {
  export class CppType {
    name: string;
    segs: { n: string; a: CppType[]; tid?: boolean }[] = [];
    ptr = 0;
    ref: "" | "&" | "&&" = "";
    dims: number[] = [];
    isFunc = false;
    ret: CppType | null = null;
    funcParams: CppType[] = [];
    funcVariadic = false;
    cnst = false;

    constructor(name: string) {
      this.name = name;
    }

    static basic(name: string): CppType {
      const t = new CppType(name);
      t.segs = [{ n: name, a: [] }];
      return t;
    }

    key(): string {
      let s = this.segs.map(g => g.n + (g.a.length ? "<" + g.a.map(x => x.key()).join(",") + ">" : "")).join("::");
      if (!s) s = this.name;
      if (this.isFunc) {
        s += "(" + (this.ret ? this.ret.key() : "void") + (this.funcParams.length ? "," : "") + this.funcParams.map(x => x.key()).join(",") + (this.funcVariadic ? "..." : "") + ")";
      }
      for (const d of this.dims) s += d < 0 ? "[]" : "[" + d + "]";
      s += "*".repeat(this.ptr) + this.ref;
      return s;
    }

    isBox(): boolean {
      return this.ptr > 0 || this.ref !== "";
    }

    core(): CppType {
      const t = new CppType(this.name);
      t.segs = this.segs;
      t.ptr = this.ptr;
      t.dims = this.dims.slice();
      t.isFunc = this.isFunc;
      t.ret = this.ret;
      t.funcParams = this.funcParams;
      t.funcVariadic = this.funcVariadic;
      return t;
    }
  }

  export function canonBasic(words: string[]): string | null {
    const s = words.join(" ").replace(/\s+/g, " ").trim();
    const has = (...ws: string[]) => ws.every(w => words.includes(w));
    if (s === "void" || s === "bool" || s === "char" || s === "wchar_t" || s === "char16_t" || s === "char32_t" || s === "float" || s === "double" || s === "int" || s === "signed int" || s === "signed" || s === "auto") {
      if (s === "signed" || s === "signed int") return "int";
      return s;
    }
    if (s === "unsigned" || s === "unsigned int") return "unsigned int";
    if (s === "short" || s === "short int" || s === "signed short" || s === "signed short int") return "short";
    if (s === "unsigned short" || s === "unsigned short int") return "unsigned short";
    if (s === "long" || s === "long int" || s === "signed long" || s === "signed long int") return "long";
    if (s === "unsigned long" || s === "unsigned long int") return "unsigned long";
    // "long double" has one "long", so it is counted rather than matched by name.
    const longs = words.filter(w => w === "long").length;
    if (longs >= 2 && words.includes("unsigned")) return "unsigned long long";
    if (longs >= 2) return "long long";
    if (s === "long double") return "long double";
    if (s === "signed char") return "signed char";
    if (s === "unsigned char") return "unsigned char";
    if (s === "__builtin_va_list" || s === "__gnuc_va_list" || s === "va_list") return "__builtin_va_list";
    return null;
  }

  export function isNumericName(n: string): boolean {
    return n !== "void" && ["bool", "char", "signed char", "unsigned char", "wchar_t", "char16_t", "char32_t", "short", "unsigned short", "int", "unsigned int", "long", "unsigned long", "long long", "unsigned long long", "float", "double", "long double"].includes(n);
  }

  export function isUnsignedName(n: string): boolean {
    return n === "unsigned char" || n === "unsigned short" || n === "unsigned int" || n === "unsigned long" || n === "unsigned long long";
  }

  // "std::initializer_list<T>" is the array its elements are made of: a value of
  // the type is that array, and the header's own "begin", "end" and "size" are
  // answered from it.  The element type comes back for a type naming one of those
  // classes.
  export function initListElemOf(cx: Cx, t: CppType): CppType | null {
    if (t.isBox() || t.dims.length || t.isFunc) return null;
    const cls = cx.classes.get(cx.stripAll(t));
    if (!cls || (cls.fromTmpl || "").split("::").pop() !== "initializer_list") return null;
    const seg = t.segs.length ? t.segs[t.segs.length - 1] : null;
    return seg && seg.a.length ? seg.a[0] : null;
  }
  export function isIntegerName(n: string): boolean {
    return ["bool", "char", "signed char", "unsigned char", "wchar_t", "char16_t", "char32_t", "short", "unsigned short", "int", "unsigned int", "long", "unsigned long", "long long", "unsigned long long"].includes(n);
  }

  export interface Scope {
    ns: string[];
    cls: ClsInfo | null;
    locals: Map<string, VarInfo>[];
    fn: FuncInfo | null;
    returns: CppType[];
    // The typedefs declared in the body of the function being read, which are
    // visible from there on and nowhere else.
    localTypedefs?: Map<string, string>;
    // The class whose member typedef is being read: its other member typedefs
    // are visible by bare name ("typedef typename Sel<RT>::type type").
    owner?: string;
  }

  // A type spelled well enough to tell two resolutions of the same name apart,
  // including the ones whose argument is an expression rather than a type.
  function exKey(e: Expr): string {
    switch (e.kind) {
      case "id":
        return e.parts.map(s => s.n + (s.a.length ? "<" + s.a.map(tnKey).join(",") + ">" : "")).join("::");
      case "call":
        return exKey(e.fn) + "(" + e.args.map(exKey).join(",") + ")";
      case "member":
        return exKey(e.obj) + "." + e.field;
      case "unary":
        return e.op + exKey(e.arg);
      case "binary":
        return exKey(e.l) + e.op + exKey(e.r);
      case "cast":
        return "(" + (e.type ? tnKey(e.type) : "?") + ")" + exKey(e.arg);
      case "lit":
        return e.value;
      default:
        return e.kind;
    }
  }

  function tnKey(tn: TypeNode): string {
    if (tn.valueArg) return "=" + exKey(tn.valueArg);
    if (tn.decltypeOf) return "decltype(" + exKey(tn.decltypeOf) + ")";
    let s = tn.parts.map(s => s.n + (s.a.length ? "<" + s.a.map(tnKey).join(",") + ">" : "")).join("::") + "*".repeat(tn.ptr) + tn.ref + (tn.cnst ? " const" : "");
    if (tn.func) s += "(" + tn.func.params.map(tnKey).join(",") + (tn.func.variadic ? "..." : "") + ")";
    if (tn.dims.length) s += tn.dims.map(d => "[" + exKey(d) + "]").join("");
    return s;
  }

  export function rootScope(): Scope {
    return { ns: [], cls: null, locals: [], fn: null, returns: [] };
  }

  export function scopeName(s: Scope): string {
    return s.ns.join("::");
  }

  export interface NsInfo {
    fq: string;
    usingNs: string[];
    usingDecl: Map<string, string>;
    inlineNs: string[];
  }

  export interface ClsInfo {
    fq: string;
    short: string;
    mangled: string;
    decl: ClassDecl;
    scope: Scope;
    bases: { fq: string; access: string; isVirtual: boolean }[];
    fields: Map<string, VarDecl>;
    fieldTypes: Map<string, CppType>;
    fieldStatic: Set<string>;
    methods: Map<string, FuncInfo[]>;
    nested: Map<string, string>;
    consts?: Map<string, { e: EnumInfo; item: string }> | null;
    usingBase: Map<string, string>;
    isUnion: boolean;
    complete: boolean;
    fromTmpl: string;
    instArgs: CppType[];
    referenced: boolean;
    synthDone: boolean;
    isLambda: boolean;
    // The constructors a braced initializer of an aggregate needed, by count.
    aggCtors?: Map<number, FuncInfo>;
  }

  export interface FuncParam {
    name: string;
    type: CppType;
    def: Expr | null;
    variadic: boolean;
    isPack: boolean;
  }

  export interface FuncInfo {
    fq: string;
    short: string;
    mangled: string;
    decl: FuncDecl;
    scope: Scope;
    paramCache: FuncParam[] | null;
    retCache: CppType | null;
    isMethod: boolean;
    cls: string;
    isCtor: boolean;
    isDtor: boolean;
    isConv: boolean;
    isVirtual: boolean;
    isPure: boolean;
    isStatic: boolean;
    isConst: boolean;
    isDefault: boolean;
    isDelete: boolean;
    op: string;
    analyzed: boolean;
    referenced: boolean;
    fromTmpl: string;
    // An instance of a member function template, with parameters of its own:
    // its JavaScript name carries the instance, as the template's arguments
    // (not the class) tell the instances of one name apart.
    ownTmpl?: boolean;
    // The arguments of a function template's own parameters, which its symbol encodes.
    tmplArgs?: CppType[];
    baseAssigns: string[];
  }

  export interface VarInfo {
    fq: string;
    short: string;
    mangled: string;
    lifted: boolean;
    decl: VarDecl;
    scope: Scope;
    typeCache: CppType | null;
    storage: "plain" | "boxed" | "box" | "bbox";
    isGlobal: boolean;
    isStatic: boolean;
    isParam: boolean;
    isField: boolean;
    referenced: boolean;
  }

  export interface EnumInfo {
    fq: string;
    short: string;
    decl: EnumDecl;
    scope: Scope;
    values: Map<string, number> | null;
    scoped: boolean;
    referenced: boolean;
  }

  export interface TmplInfo {
    fq: string;
    kind: string;
    tparams: TParam[];
    decl: Decl;
    scope: Scope;
    specs: { key: string; decl: Decl }[];
    partials?: { tparams: TParam[]; specArgs: TypeNode[]; decl: Decl }[];
    // An out-of-line member definition carries the class parameters first and its
    // own after them; the split tells the two apart when their owner is an
    // instance of a specialization with fewer parameters than the primary.
    outer?: number;
    // Position among the overloads of the same name, so that instances of two
    // different templates do not share a cache entry or an emitted name.
    ovl?: number;
  }

  export type Sym = { k: "class"; cls: ClsInfo } | { k: "func"; fns: FuncInfo[] } | { k: "var"; v: VarInfo } | { k: "enum"; e: EnumInfo } | { k: "enumval"; e: EnumInfo; item: string } | { k: "ns"; fq: string } | { k: "typedef"; fq: string } | { k: "tmpl"; t: TmplInfo } | { k: "builtin"; name: string };

  // One operation of a range-for: either a member/non-member operator function
  // ("fn"), or, when the iterator is a plain pointer, a builtin one.
  export interface RangeOp {
    fn: FuncInfo | null;
    isMember: boolean;
    op: string;
    builtin: "ptr" | "";
  }

  export interface RangeInfo {
    beginFn: FuncInfo;
    endFn: FuncInfo;
    ne: RangeOp;
    inc: RangeOp;
    star: RangeOp;
    // "begin()" hands the iterator out by value, so the loop variable needs a
    // copy of it: incrementing the iterator would otherwise walk the container's
    // own "_M_start" along and leave "size()" as zero.
    copyCtor: FuncInfo | null;
  }

  export interface Ann {
    t: CppType | null;
    sym: Sym | null;
    call: FuncInfo | { builtin: string; value?: number } | null;
    conv: { kind: string; fn: FuncInfo } | null;
    convs: ({ kind: string; fn: FuncInfo } | null)[];
    caps: { name: string; mode: string; v: VarInfo }[];
    var: VarInfo | null;
    arrowCall: FuncInfo | null;
    initCall: FuncInfo | null;
    copyCtor: FuncInfo | null;
    range: RangeInfo | null;
    needsThis: boolean;
    isType: boolean;
    // The operator bool a class-valued condition converts with (see markBoolConv).
    boolConv: FuncInfo | null;
    // A braced list passed to a class parameter: the constructor it builds the
    // object with, and the conversions of its items (see matchScore).
    listCtors: Map<FuncInfo, ({ kind: string; fn: FuncInfo } | null)[]> | null;
    // The type a sizeof names, resolved where its scope (local typedefs included)
    // is known, so code generation does not need to resolve it again.
    typeArg: CppType | null;
    // The value of a case label, evaluated where its scope is known.
    constVal: number | null;
  }

  export function blankAnn(): Ann {
    return { t: null, sym: null, call: null, conv: null, convs: [], caps: [], var: null, arrowCall: null, initCall: null, copyCtor: null, range: null, needsThis: false, isType: false, boolConv: null, listCtors: null, typeArg: null, constVal: null };
  }

  export class Cx {
    classes = new Map<string, ClsInfo>();
    funcs = new Map<string, FuncInfo[]>();
    vars = new Map<string, VarInfo>();
    enums = new Map<string, EnumInfo>();
    typedefs = new Map<string, { target: TypeNode; scope: Scope }>();
    tmpls = new Map<string, TmplInfo>();
    // Templates that share a name are overloads of each other, which the map
    // above cannot hold: it keeps one template per name for type resolution.
    tmplOverloads = new Map<string, TmplInfo[]>();
    funcInsts = new Map<string, FuncInfo>();
    // JavaScript names of the functions emitted so far: an instance and a plain
    // overload can spell the same type ("abs<long long>" and "abs(long long)").
    fnMangles = new Set<string>();
    nsFuncIndex = new Map<string, FuncInfo[]>();
    nss = new Map<string, NsInfo>();
    nsAlias = new Map<string, string>();
    asserts: { cond: Expr; msg: string; scope: Scope }[] = [];
    explicitInst: { decl: Decl; scope: Scope }[] = [];
    // A class can be instantiated before the file holding its out-of-line member
    // definitions is read ("hash<string>" instantiates basic_string<char> while
    // basic_string.h is still being collected, basic_string.tcc comes later), so
    // attaching those definitions waits until the whole unit is collected.
    collecting = true;
    pendingOOL: { tmpl: TmplInfo; key: string; cls: ClsInfo; args: CppType[]; env: SubstEnv }[] = [];
    warnings: string[] = [];
    worklist: FuncInfo[] = [];
    instStack: string[] = [];
    retStack = new Set<FuncInfo>();
    main: FuncInfo | null = null;
    ann = new Map<object, Ann>();

    getAnn(n: object): Ann {
      let a = this.ann.get(n);
      if (!a) {
        a = blankAnn();
        this.ann.set(n, a);
      }
      return a;
    }

    warn(msg: string, t?: At): void {
      this.warnings.push(t && t.file ? `${t.file}:${t.line}: ${msg}` : msg);
    }

    fail(msg: string, t?: At): never {
      if (t && t.file) fail(msg, t.file, t.line, 0);
      fail(msg);
    }

    ensureNs(fq: string): NsInfo {
      let n = this.nss.get(fq);
      if (!n) {
        n = { fq, usingNs: [], usingDecl: new Map(), inlineNs: [] };
        this.nss.set(fq, n);
      }
      return n;
    }

    resolveNsAlias(fq: string): string {
      const seen = new Set<string>();
      let cur = fq;
      while (this.nsAlias.has(cur) && !seen.has(cur)) {
        seen.add(cur);
        cur = this.nsAlias.get(cur) as string;
      }
      return cur;
    }

    pushWork(fn: FuncInfo): void {
      if (!fn.analyzed && !this.worklist.includes(fn)) this.worklist.push(fn);
    }

    markFunc(fn: FuncInfo): void {
      fn.referenced = true;
      if (fn.decl.body || fn.isDefault) this.pushWork(fn);
    }

    // A member that overrides a virtual member of a base is virtual itself, even
    // without the keyword, so it has to be emitted for dispatch through the base.
    inheritVirtual(c: ClsInfo): void {
      const virt = new Set<string>();
      const walk = (fq: string, seen: Set<string>) => {
        if (seen.has(fq)) return;
        seen.add(fq);
        const b = this.classes.get(fq);
        if (!b) return;
        for (const [name, fns] of b.methods) {
          for (const f of fns) if (f.isVirtual) virt.add(name);
        }
        for (const bb of b.bases) walk(bb.fq, seen);
      };
      for (const b of c.bases) walk(b.fq, new Set());
      if (!virt.size) return;
      for (const [name, fns] of c.methods) {
        if (!virt.has(name)) continue;
        for (const f of fns) {
          if (!f.isCtor && !f.isDtor && !f.isStatic) f.isVirtual = true;
        }
      }
    }

    markVar(v: VarInfo): void {
      v.referenced = true;
      if (!v.isGlobal) return;
    }

    markCls(fq: string): ClsInfo | null {
      const c = this.classes.get(fq);
      if (!c || !c.complete) return c || null;
      if (!c.referenced) {
        c.referenced = true;
        this.synthMembers(c);
        this.inheritVirtual(c);
        for (const b of c.bases) this.markCls(b.fq);
        for (const fns of c.methods.values()) {
          for (const f of fns) {
            if (f.isVirtual) this.markFunc(f);
          }
        }
      }
      return c;
    }

    collect(decls: Decl[], scope: Scope): void {
      for (const d of decls) this.collectOne(d, scope);
    }

    collectOne(d: Decl, scope: Scope): void {
      switch (d.kind) {
        case "ns": {
          const fq = [...scope.ns, d.name].join("::");
          if (d.aliasOf.length) {
            const target = this.resolveNsName(d.aliasOf, scope);
            this.nsAlias.set(fq, target);
            return;
          }
          this.ensureNs(fq);
          // An unnamed namespace is reached from its enclosing one by an implicit
          // using-directive, so its names are found by unqualified lookup there.
          if (d.name.startsWith("$ns_")) this.ensureNs(scope.ns.join("::")).usingNs.push(fq);
          if (d.isInline && scope.ns.length) {
            this.ensureNs(scope.ns.join("::")).inlineNs.push(fq);
          } else if (d.isInline) {
            this.ensureNs("").inlineNs.push(fq);
          }
          if (d.decls) {
            const sub: Scope = { ns: [...scope.ns, d.name], cls: null, locals: [], fn: null, returns: [] };
            this.collect(d.decls, sub);
          }
          return;
        }
        case "class": {
          this.collectClass(d, scope);
          return;
        }
        case "enum": {
          // The parser names an unnamed enum "$enum_N"; inside a class its
          // enumerators are members of that class, e.g. __are_same<_Tp,_Tp>::__value.
          const anon = !!scope.cls && d.name.startsWith("$enum_");
          const fq = anon ? this.memberFq(scope, "") + "@anon" + d.line : this.memberFq(scope, d.name);
          if (!this.enums.has(fq)) {
            this.enums.set(fq, { fq, short: d.name, decl: d, scope: this.snapScope(scope), values: null, scoped: d.scoped, referenced: false });
          } else if (!d.isDeclOnly) {
            (this.enums.get(fq) as EnumInfo).decl = d;
          }
          if (anon) {
            // "enum { __value = 1 };" inside a class: the enumerators are read as
            // members of that class, e.g. __are_same<_Tp, _Tp>::__value.
            const ei = this.enums.get(fq) as EnumInfo;
            const cs = scope.cls!.consts || (scope.cls!.consts = new Map());
            for (const item of this.enumValues(ei).keys()) if (!cs.has(item)) cs.set(item, { e: ei, item });
          }
          if (scope.cls && !anon) scope.cls.nested.set(d.name, fq);
          return;
        }
        case "func": {
          this.collectFunc(d, scope);
          return;
        }
        case "var": {
          this.collectVar(d, scope);
          return;
        }
        case "typedef": {
          // A typedef declared in a function body belongs to that function: it
          // must not take the place of a member typedef that carries the same
          // name and that the rest of the class still reads ("_Alloc_traits",
          // declared both by _Fwd_list_base and inside _M_create_node).
          if (scope.fn) {
            const lfq = scope.fn.fq + "::" + d.name;
            this.typedefs.set(lfq, { target: d.type, scope: this.snapScope(scope) });
            (scope.localTypedefs || (scope.localTypedefs = new Map())).set(d.name, lfq);
            return;
          }
          const fq = this.memberFq(scope, d.name);
          this.typedefs.set(fq, { target: d.type, scope: this.snapScope(scope) });
          if (scope.cls) scope.cls.nested.set(d.name, fq);
          return;
        }
        case "using": {
          this.collectUsing(d, scope);
          return;
        }
        case "template": {
          this.collectTemplate(d, scope);
          return;
        }
        case "linkage": {
          this.collect(d.decls, scope);
          return;
        }
        case "static_assert": {
          this.asserts.push({ cond: d.cond, msg: d.msg, scope: this.snapScope(scope) });
          return;
        }
        default:
          return;
      }
    }

    snapScope(s: Scope): Scope {
      // The snapshot keeps the local typedefs that are visible where it is taken:
      // a typedef written later in the same body reads them ("pair<__ds_type1,
      // __ds_type2>" in "make_pair").
      return {
        ns: s.ns.slice(),
        cls: s.cls,
        locals: [],
        fn: null,
        returns: [],
        localTypedefs: s.localTypedefs ? new Map(s.localTypedefs) : undefined,
      };
    }

    memberFq(scope: Scope, name: string): string {
      if (scope.cls) return scope.cls.fq + "::" + name;
      return [...scope.ns, name].join("::");
    }

    collectClass(d: ClassDecl, scope: Scope): void {
      if (d.name.startsWith("$") && d.isDeclOnly) return;
      const fq = this.memberFq(scope, d.name);
      let cls = this.classes.get(fq);
      if (d.isDeclOnly && !d.specArgs.length) {
        if (!cls) {
          cls = this.blankCls(fq, d.name, d, scope);
          cls.complete = false;
          this.classes.set(fq, cls);
        }
        this.registerNested(scope, d.name, fq);
        return;
      }
      if (!cls) {
        cls = this.blankCls(fq, d.name, d, scope);
        this.classes.set(fq, cls);
      }
      cls.decl = d;
      cls.complete = true;
      cls.isUnion = d.cls === "union";
      this.registerNested(scope, d.name, fq);
      const sub: Scope = { ns: scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
      cls.bases = [];
      for (const b of d.bases) {
        const bfq = this.resolveClassName(b.name, sub);
        cls.bases.push({ fq: bfq, access: b.access, isVirtual: b.isVirtual });
      }
      this.collect(d.members, sub);
    }

    registerNested(scope: Scope, name: string, fq: string): void {
      const short = last(name.split("::"));
      if (scope.cls) {
        scope.cls.nested.set(short, fq);
        if (name.includes("::")) scope.cls.nested.set(name, fq);
      }
      if (name.includes("::")) {
        const parts = name.split("::");
        const ownerName = parts.slice(0, -1).join("::");
        const ownerFq = this.memberFq(scope, ownerName);
        const owner = this.classes.get(ownerFq);
        if (owner) owner.nested.set(short, fq);
      }
    }

    // The name a class declares itself with: an instance of a template is called
    // by the template's short name, the arguments belong to its key.
    declaredName(c: ClsInfo): string {
      return c.fromTmpl ? last(c.fromTmpl.split("::")) : c.short;
    }

    // C++11 delegating constructor: pair(...) : pair(other_args) { }.
    isDelegatingCtorInit(cls: ClsInfo, c: CtorInit): boolean {
      const name = c.name.map(s => s.n).join("::");
      const short = last(c.name).n;
      if (!(short === this.declaredName(cls) || short === cls.short || name === cls.fq)) return false;
      // "B<T...>(r...)" in B<H, T...> names the base B<T...>, which shares the short name.
      return !(cls.bases.length && this.ctorBase(cls, c.name));
    }

    blankCls(fq: string, short: string, decl: ClassDecl, scope: Scope): ClsInfo {
      return {
        fq,
        short,
        mangled: mangleClassSym([...scopeComps(scope), { n: short.split("<")[0] }]),
        decl,
        scope: this.snapScope(scope),
        bases: [],
        fields: new Map(),
        fieldTypes: new Map(),
        fieldStatic: new Set(),
        methods: new Map(),
        nested: new Map(),
        usingBase: new Map(),
        isUnion: false,
        complete: false,
        fromTmpl: "",
        instArgs: [],
        referenced: false,
        synthDone: false,
        isLambda: false,
      };
    }

    collectFunc(d: FuncDecl, scope: Scope): void {
      const names = d.name.map(s => s.n);
      if (!names.length) return;
      if (names.length > 1) {
        const pre = d.name.slice(0, -1);
        const short = last(names);
        const owner = this.resolvePrefix(pre, scope, d);
        if (owner && owner.k === "class") {
          this.addMethod(owner.cls, short, d, scope);
          return;
        }
        const nsFq = owner && owner.k === "ns" ? owner.fq : pre.map(s => s.n).join("::");
        const sub: Scope = { ns: nsFq ? nsFq.split("::") : [], cls: null, locals: [], fn: null, returns: [] };
        this.addFunc(sub, short, d, scope);
        return;
      }
      // "int G::operator()()": the qualified name keeps only the class and the
      // operator itself is carried in d.op.
      if (d.op && names.length === 1 && names[0] !== "operator") {
        const owner = this.resolvePrefix(d.name, scope, d);
        if (owner && owner.k === "class") {
          this.addMethod(owner.cls, "operator" + d.op, d, scope);
          return;
        }
      }
      const short = names[0] === "operator" ? "operator" : names[0];
      if (scope.cls) {
        this.addMethod(scope.cls, d.op ? "operator" + d.op : short, d, scope);
        return;
      }
      this.addFunc(scope, d.op ? "operator" + d.op : short, d, scope);
    }

    // The kinds of arguments a declaration takes, so that a definition is merged
    // into the declaration of its own overload rather than into a sibling that
    // happens to take the same number of them ("merge(list&&)" against
    // "merge(list&)", which delegates to it).
    methodKey(d: FuncDecl, short: string): string {
      if (d.isCtor) return "#ctor";
      if (d.isDtor) return "#dtor";
      if (d.isConv) return "#conv";
      if (d.op) return "operator" + d.op;
      return short;
    }

    // What tells an out-of-line definition from another overload: the parameters,
    // by type when asked strictly (the name of each is its last segment, so a
    // definition may write "std::size_t" where the declaration wrote "size_t").
    paramShape(d: FuncDecl, strict = false): string {
      return d.params.map(p => [strict && p.type.parts.length ? p.type.parts[p.type.parts.length - 1].n : "", p.type.ptr, p.type.ref, p.type.dims.length, p.type.func ? "f" : "", p.variadic || p.isPack ? "..." : ""].join(",")).join(";");
    }

    // The parameter types of a declaration, read in the class they are declared
    // in: a definition writes them with the template's arguments substituted,
    // the class body with the names it chose ("char*" against "_CharT*").
    paramKey(cls: ClsInfo, d: FuncDecl): string | null {
      try {
        const scope = this.memberScope(cls);
        return d.params.map(p => this.resolveTypeNode(p.type, scope).key()).join(";");
      } catch {
        return null;
      }
    }

    // Whether a declaration and a definition name the same parameters.  The
    // spelling decides it when it can; where two overloads differ only in the
    // names they give their types, the types themselves are compared.
    sameParams(cls: ClsInfo, a: FuncDecl, b: FuncDecl): boolean {
      if (this.paramShape(a, true) === this.paramShape(b, true)) return true;
      if (this.paramShape(a) !== this.paramShape(b)) return false;
      const ka = this.paramKey(cls, a);
      const kb = this.paramKey(cls, b);
      return ka !== null && ka === kb;
    }
    // An out-of-line definition repeats the parameter list but not the default
    // arguments, which are written on the declaration alone: without them a call
    // that relies on one stops matching ("basic_string(const _CharT*, ...)").
    mergeDefDefaults(decl: FuncDecl, def: FuncDecl): void {
      const ps = decl.params || [];
      const dp = def.params || [];
      for (let i = 0; i < dp.length && i < ps.length; i++) {
        if (!dp[i].def && ps[i].def) dp[i].def = ps[i].def;
      }
    }

    addMethod(cls: ClsInfo, short: string, d: FuncDecl, scope: Scope): FuncInfo {
      const key = this.methodKey(d, short);
      const sc = this.snapScope(scope);
      sc.cls = cls;
      const list = cls.methods.get(key) || [];
      // The declaration a definition belongs to is the one whose parameters it
      // repeats.  Two overloads may agree on pointers and references alone
      // ("replace(size_type, size_type, const _CharT*, size_type)" against
      // "replace(iterator, iterator, const _CharT*, size_type)"), so only a
      // declaration that names the same types is the one being defined.
      for (const f of list) {
        if (!f.decl.body && d.body && this.sameParams(cls, f.decl, d)) {
          this.mergeDefDefaults(f.decl, d);
          f.decl = d;
          f.scope = sc;
          return f;
        }
      }
      const fn: FuncInfo = {
        fq: cls.fq + "::" + key,
        short: key,
        mangled: "",
        decl: d,
        scope: sc,
        paramCache: null,
        retCache: null,
        isMethod: true,
        cls: cls.fq,
        isCtor: d.isCtor,
        isDtor: d.isDtor,
        isConv: d.isConv,
        isVirtual: d.flags.includes("virtual"),
        isPure: d.flags.includes("pure"),
        isStatic: d.flags.includes("static"),
        isConst: d.flags.includes("const"),
        isDefault: d.isDefault,
        isDelete: d.isDelete,
        op: d.op,
        analyzed: false,
        referenced: false,
        fromTmpl: "",
        baseAssigns: [],
      };
      list.push(fn);
      cls.methods.set(key, list);
      return fn;
    }

    addFunc(scope: Scope, short: string, d: FuncDecl, declScope: Scope): FuncInfo {
      const fq = scope.cls ? scope.cls.fq + "::" + short : [...scope.ns, short].join("::");
      const list = this.funcs.get(fq) || [];
      for (const f of list) {
        if (!f.decl.body && d.body && !d.op) {
          let same = f.decl.params.length === d.params.length;
          if (same) {
            this.mergeDefDefaults(f.decl, d);
            f.decl = d;
            f.scope = this.snapScope(declScope);
            return f;
          }
        }
      }
      const key = scope.cls ? this.methodKey(d, short) : d.op ? "operator" + d.op : short;
      const fn: FuncInfo = {
        fq: scope.cls ? scope.cls.fq + "::" + key : fq,
        short: key,
        mangled: "",
        decl: d,
        scope: this.snapScope(declScope),
        paramCache: null,
        retCache: null,
        isMethod: !!scope.cls,
        cls: scope.cls ? scope.cls.fq : "",
        isCtor: d.isCtor,
        isDtor: d.isDtor,
        isConv: d.isConv,
        isVirtual: d.flags.includes("virtual"),
        isPure: d.flags.includes("pure"),
        isStatic: d.flags.includes("static"),
        isConst: d.flags.includes("const"),
        isDefault: d.isDefault,
        isDelete: d.isDelete,
        op: d.op,
        analyzed: false,
        referenced: false,
        fromTmpl: "",
        baseAssigns: [],
      };
      if (scope.cls) {
        const ml = scope.cls.methods.get(key) || [];
        ml.push(fn);
        scope.cls.methods.set(key, ml);
      } else {
        list.push(fn);
        this.funcs.set(fq, list);
        const nsFq = scope.ns.join("::");
        const idx = this.nsFuncIndex.get(nsFq) || [];
        idx.push(fn);
        this.nsFuncIndex.set(nsFq, idx);
        if (!scope.ns.length && short === "main" && !d.op) this.main = fn;
      }
      return fn;
    }

    collectVar(d: VarDecl, scope: Scope): void {
      const names = d.name.map(s => s.n);
      if (!names.length) return;
      if (names.length > 1) {
        const pre = d.name.slice(0, -1);
        const short = last(names);
        const owner = this.resolvePrefix(pre, scope, d);
        if (owner && owner.k === "class") {
          const f = owner.cls.fields.get(short);
          if (f && (d.init || d.directInit)) {
            f.init = d.init || f.init;
            f.directInit = d.directInit || f.directInit;
          } else if (!f) {
            owner.cls.fields.set(short, d);
            owner.cls.fieldStatic.add(short);
          }
          return;
        }
        const nsFq = owner && owner.k === "ns" ? owner.fq : pre.map(s => s.n).join("::");
        this.addGlobalVar(nsFq, short, d, scope);
        return;
      }
      const short = names[0];
      if (scope.cls) {
        scope.cls.fields.set(short, d);
        if (d.flags.includes("static")) scope.cls.fieldStatic.add(short);
        return;
      }
      this.addGlobalVar(scope.ns.join("::"), short, d, scope);
    }

    addGlobalVar(nsFq: string, short: string, d: VarDecl, scope: Scope): VarInfo {
      const fq = nsFq ? nsFq + "::" + short : short;
      let v = this.vars.get(fq);
      if (!v) {
        v = {
          fq,
          short,
          mangled: mangleVarSym([...scopeComps(scope), { n: short }]),
          decl: d,
          scope: this.snapScope(scope),
          typeCache: null,
          storage: "plain",
          isGlobal: true,
          isStatic: d.flags.includes("static"),
          isParam: false,
          isField: false,
          lifted: false,
          referenced: false,
        };
        this.vars.set(fq, v);
      } else if ((d.init || d.directInit) && !v.decl.init && !v.decl.directInit) {
        v.decl = d;
      }
      return v;
    }

    collectUsing(d: UsingDecl, scope: Scope): void {
      if (d.isNs) {
        const fq = this.resolveNsName(d.name, scope);
        this.ensureNs(scope.ns.join("::")).usingNs.push(fq);
        return;
      }
      const names = d.name.map(s => s.n);
      const short = last(names);
      if (scope.cls && names.length >= 2) {
        scope.cls.usingBase.set(short, names.slice(0, -1).join("::"));
        return;
      }
      const target = this.resolveValueName(d.name, scope);
      this.ensureNs(scope.ns.join("::")).usingDecl.set(short, target);
    }

    collectTemplate(d: TemplateDecl, scope: Scope): void {
      if (!d.decl) return;
      if (d.isExplicit) {
        this.explicitInst.push({ decl: d.decl, scope: this.snapScope(scope) });
        return;
      }
      let inner: Decl | null = d.decl.kind === "friend" ? (d.decl as FriendDecl).decl : d.decl;
      let tparams = d.tparams.slice();
      while (inner && inner.kind === "template") {
        tparams = tparams.concat(inner.tparams);
        inner = inner.decl;
        if (inner && inner.kind === "friend") inner = (inner as FriendDecl).decl;
      }
      if (!inner) return;
      let kind = "";
      let fq = "";
      // Only a definition written "Cls<...>::name" has the class's parameters
      // spelled first, so that its own start after them.
      let outer = -1;
      if (inner.kind === "class") {
        kind = "class";
        fq = this.memberFq(scope, inner.name);
      } else if (inner.kind === "func") {
        kind = "func";
        const nm = inner.name.map(s => s.n);
        // An out-of-line definition spells its class without the namespace around
        // it, so the prefix has to be resolved to the class's own fq for the
        // member to be attached to the instances of that class.
        const short = inner.op ? "operator" + inner.op : last(nm);
        // An out-of-line operator spells only its owner in the qualified name,
        // and a free one spells no owner at all: the "operator" keyword belongs
        // to the name rather than to a scope.
        const ownerParts = (inner.op ? inner.name : inner.name.slice(0, -1)).filter(s => s.n !== "operator");
        fq = ownerParts.length ? this.ownerFq(ownerParts, scope) + "::" + short : this.memberFq(scope, short);
        if (ownerParts.length) outer = d.tparams.length;
      } else if (inner.kind === "var") {
        // The definition of a static data member, written outside the class.
        kind = "data";
        const short = last(inner.name.map(s => s.n));
        const ownerParts = inner.name.slice(0, -1);
        fq = ownerParts.length ? this.ownerFq(ownerParts, scope) + "::" + short : this.memberFq(scope, short);
      } else if (inner.kind === "typedef") {
        kind = "alias";
        fq = this.memberFq(scope, inner.name);
      } else return;
      if (d.isSpec) {
        const t = this.tmpls.get(fq);
        // A partial specialization keeps its own parameters; only a full one can
        // have its arguments resolved at this point.
        if (d.tparams.length) {
          const part = { tparams: d.tparams, specArgs: d.specArgs, decl: inner };
          if (t) (t.partials || (t.partials = [])).push(part);
          else this.tmpls.set(fq, { fq, kind, tparams: [], decl: inner, scope: this.snapScope(scope), specs: [], partials: [part] });
          return;
        }
        const args = d.specArgs.map(a => this.resolveTypeNode(a, scope));
        const key = args.map(a => a.key()).join(",");
        if (t) {
          t.specs.push({ key, decl: inner });
        } else {
          this.tmpls.set(fq, {
            fq,
            kind,
            tparams: [],
            decl: inner,
            scope: this.snapScope(scope),
            specs: [{ key, decl: inner }],
          });
        }
        return;
      }
      if (scope.cls) {
        const short = inner.kind === "func" ? last(inner.name.map(s => s.n)) : (inner as ClassDecl).name;
        if (short) scope.cls.nested.set(short, fq);
      }
      // A template may be declared first with its default arguments and defined
      // later without them, so the defaults of an earlier declaration are kept.
      const prev = this.tmpls.get(fq);
      if (prev) {
        tparams.forEach((tp, i) => {
          const old = prev.tparams[i];
          if (!tp.def && old && old.def) tp.def = old.def;
        });
      }
      // A friend "template<class...> class tuple;" must not replace the real
      // definition, and a later forward declaration must not erase members.
      const newMembers = inner.kind === "class" ? (inner as ClassDecl).members.length : 1;
      const prevMembers = prev && prev.decl.kind === "class" ? (prev.decl as ClassDecl).members.length : prev ? 1 : 0;
      if (prev && prevMembers && !newMembers) return;
      this.registerTmpl({
        fq,
        kind,
        tparams,
        decl: inner,
        scope: this.snapScope(scope),
        specs: prev ? prev.specs : [],
        partials: prev ? prev.partials : [],
        outer: outer >= 0 ? outer : prev && prev.outer,
      });
    }

    registerTmpl(t: TmplInfo): void {
      this.tmpls.set(t.fq, t);
      if (t.kind !== "func") return;
      const list = this.tmplOverloads.get(t.fq) || [];
      const sig = this.tmplSig(t);
      let i = list.findIndex(x => this.tmplSig(x) === sig);
      if (i < 0) {
        const d = t.decl as FuncDecl;
        // Out-of-line definitions spell the return type as Class::iterator
        // while the in-class declaration uses the nested typedef; they are
        // the same template when only one of them has a body.
        i = list.findIndex(x => {
          if (this.tmplParamSig(x) !== this.tmplParamSig(t)) return false;
          const xd = x.decl as FuncDecl;
          return !(xd.body && d.body);
        });
      }
      if (i >= 0) {
        t.ovl = list[i].ovl;
        const old = list[i].decl as FuncDecl;
        const neu = t.decl as FuncDecl;
        if (old.body && !neu.body) {
          this.tmpls.set(t.fq, list[i]);
          this.tmplOverloads.set(t.fq, list);
          return;
        }
        // A default argument written in the declaration stays in force for the out-of-line definition that replaces it ("basic_string(..., _Alloc = _Alloc())").
        neu.params.forEach((p, j) => {
          const o = old.params[j];
          if (!p.def && o && o.def) p.def = o.def;
        });
        // "static" is written on the in-class declaration only ("static T f(...)"
        // in the class, "T C::f(...)" out of line).
        if (old.flags.includes("static") && !neu.flags.includes("static")) neu.flags.push("static");
        list[i] = t;
      } else {
        t.ovl = list.length;
        list.push(t);
      }
      this.tmplOverloads.set(t.fq, list);
    }

    tmplParamSig(t: TmplInfo): string {
      const d = t.decl as FuncDecl;
      // A template parameter stands for itself whatever it is called: the
      // declaration "sort(_RAIter, _RAIter)" and the definition
      // "sort(_RandomAccessIterator, _RandomAccessIterator)" are one template, and
      // the declaration must not shadow the definition that carries the body.
      const idx = new Map(t.tparams.map((x, i) => [x.name, i]));
      const ps = (d.params || [])
        .map(p => {
          const tn = p.type;
          const name = tn.parts.length === 1 && !tn.parts[0].a.length && idx.has(tn.parts[0].n) ? "$" + idx.get(tn.parts[0].n) : JSON.stringify(tn.parts.map(s => s.n + s.a.length));
          return name + tn.ptr + tn.ref + (p.isPack ? "..." : "");
        })
        .join(",");
      const tps = t.tparams.map(x => x.kind + (x.isPack ? "..." : "")).join(",");
      return [tps, ps, d.op || "", d.flags.includes("const") ? "c" : ""].join("|");
    }

    tmplSig(t: TmplInfo): string {
      const d = t.decl as FuncDecl;
      // enable_if in the return type is what distinguishes SFINAE overloads of
      // the same parameters (allocator_traits::_S_construct).
      const ret = d.trailing || d.ret;
      const rs = ret ? ret.parts.map(s => s.n + s.a.map(a => a.parts.map(p => p.n).join("::")).join(",")).join("::") : "";
      return this.tmplParamSig(t) + "|" + rs;
    }

    // Every template, overloads included: "tmpls" keeps one entry per name, so
    // scanning it alone would see only the last "operator!=" of a namespace.
    allTmpls(): TmplInfo[] {
      const out: TmplInfo[] = [];
      const seen = new Set<TmplInfo>();
      for (const list of this.tmplOverloads.values()) {
        for (const t of list)
          if (!seen.has(t)) {
            seen.add(t);
            out.push(t);
          }
      }
      for (const t of this.tmpls.values())
        if (!seen.has(t)) {
          seen.add(t);
          out.push(t);
        }
      return out;
    }

    // The namespace a class belongs to: the last "::" that is not inside a
    // template argument list, since "a::b<c::d>" is a name of namespace "a".
    nsOfFq(fq: string): string {
      let depth = 0;
      let cut = -1;
      for (let i = 0; i < fq.length - 1; i++) {
        const ch = fq[i];
        if (ch === "<") depth++;
        else if (ch === ">") depth--;
        else if (ch === ":" && fq[i + 1] === ":" && depth === 0) {
          cut = i;
          i++;
        }
      }
      return cut < 0 ? "" : fq.slice(0, cut);
    }

    tmplsOf(fq: string): TmplInfo[] {
      const list = this.tmplOverloads.get(fq);
      if (list && list.length) return list;
      const one = this.tmpls.get(fq);
      return one ? [one] : [];
    }

    resolveNsName(parts: QSeg[], scope: Scope): string {
      const names = parts.map(s => s.n);
      for (let i = scope.ns.length; i >= 0; i--) {
        const cand = [...scope.ns.slice(0, i), ...names].join("::");
        if (this.nss.has(cand) || this.nsAlias.has(cand)) return this.resolveNsAlias(cand);
      }
      return this.resolveNsAlias(names.join("::"));
    }

    resolveValueName(parts: QSeg[], scope: Scope): string {
      const s = this.resolveSym(parts, false, scope);
      if (!s) return parts.map(x => x.n).join("::");
      if (s.k === "func") return s.fns.length ? s.fns[0].fq : "";
      if (s.k === "var") return s.v.fq;
      if (s.k === "class") return s.cls.fq;
      if (s.k === "enum") return s.e.fq;
      if (s.k === "typedef") return s.fq;
      if (s.k === "ns") return s.fq;
      if (s.k === "tmpl") return s.t.fq;
      if (s.k === "enumval") return this.enumValFq(s.e, s.item);
      return "";
    }

    // An enumerator has no entry of its own: it lives in the namespace that
    // holds its enum, so that namespace plus the item name is its fq.
    enumValFq(e: EnumInfo, item: string): string {
      const i = e.fq.lastIndexOf("::");
      return (i < 0 ? "" : e.fq.slice(0, i + 2)) + item;
    }

    enumValOfFq(fq: string): Sym | null {
      const i = fq.lastIndexOf("::");
      return this.findEnumVal(i < 0 ? "" : fq.slice(0, i), i < 0 ? fq : fq.slice(i + 2));
    }

    // The base a constructor initializer names, either directly or through a
    // typedef of the class as in "vector() : _Base() { }".
    ctorBase(cls: ClsInfo, name: QSeg[]): string | null {
      const spelled = name.map(s => s.n).join("::");
      const direct = cls.bases.find(x => x.fq === spelled || last(x.fq.split("::")) === spelled);
      if (direct) return direct.fq;
      let s: Sym | null = null;
      try {
        s = this.resolveSym(name, false, this.memberScope(cls));
        if (s && s.k === "typedef") s = this.symOfType(this.expandTypedef(s.fq, new Set()));
      } catch {
        return null;
      }
      if (!s || s.k !== "class") return null;
      const hit = cls.bases.find(x => x.fq === s!.cls!.fq);
      return hit ? hit.fq : null;
    }

    resolveClassName(parts: QSeg[], scope: Scope): string {
      let s = this.resolveSym(parts, false, scope);
      // A base may be named through a typedef, as in
      // "struct _Vector_impl : public _Tp_alloc_type".
      if (s && s.k === "typedef") s = this.symOfType(this.expandTypedef(s.fq, new Set()));
      if (s && s.k === "class") return s.cls.fq;
      this.fail(`unknown base class '${parts.map(x => x.n).join("::")}'`);
    }

    resolvePrefix(parts: QSeg[], scope: Scope, t: At): Sym | null {
      try {
        return this.resolveSym(parts, false, scope);
      } catch {
        this.warn(`cannot resolve '${parts.map(x => x.n).join("::")}'`, t);
        return null;
      }
    }

    lookupFirst(name: string, scope: Scope): Sym | null {
      for (let i = scope.locals.length - 1; i >= 0; i--) {
        const v = scope.locals[i].get(name);
        if (v) return { k: "var", v };
      }
      // A typedef declared earlier in the body of the enclosing function.
      if (scope.localTypedefs) {
        const lfq = scope.localTypedefs.get(name);
        if (lfq) return { k: "typedef", fq: lfq };
      }
      // The names of the enclosing classes are visible inside a nested class.
      for (let c = scope.cls; c; c = c.scope.cls) {
        const m = this.lookupMember(c.fq, name, new Set());
        if (m.field) {
          const cls = this.classes.get(m.owner) as ClsInfo;
          const fd = cls.fields.get(name) as VarDecl;
          return { k: "var", v: this.fieldVar(cls, name, fd) };
        }
        if (m.methods) return { k: "func", fns: m.methods };
        if (m.nested) return this.symOfNested(m.nested);
        if (m.typedef) return { k: "typedef", fq: m.typedef };
        // "enum { _S_initial_map_size = 8 }" in a class: an unqualified use of
        // the enumerator inside a member names that member.
        if (m.constItem) return { k: "enumval", e: m.constItem.e, item: m.constItem.item };
        // Template member functions (e.g. SFINAE __test<_Tp>) are stored as
        // templates, not as plain methods, until they are instantiated.
        const tm = this.lookupTmplMember(c.fq, name, new Set());
        if (tm) return { k: "tmpl", t: tm };
      }
      for (let i = scope.ns.length; i >= 0; i--) {
        const pre = scope.ns.slice(0, i).join("::");
        const s = this.lookupInNs(pre, name, new Set());
        if (s) return s;
      }
      return this.lookupBuiltin(name);
    }

    // Fully qualified names of fq's short name in the namespaces that its own namespace
    // reaches through using-directives. An unqualified call adds these to the candidates
    // it found, since "using namespace std;" brings std::abs next to a global abs.
    usingTargets(fq: string): string[] {
      const i = fq.lastIndexOf("::");
      const ns = i < 0 ? "" : fq.slice(0, i);
      const short = i < 0 ? fq : fq.slice(i + 2);
      const out: string[] = [];
      const seen = new Set<string>();
      const walk = (n: string): void => {
        for (const u of this.nss.get(n)?.usingNs || []) {
          const r = this.resolveNsAlias(u);
          if (seen.has(r)) continue;
          seen.add(r);
          out.push(r ? r + "::" + short : short);
          walk(r);
        }
      };
      walk(ns);
      return out;
    }

    lookupInNs(nsFq: string, name: string, seen: Set<string>): Sym | null {
      const fq = nsFq ? nsFq + "::" + name : name;
      if (this.classes.has(fq)) return { k: "class", cls: this.classes.get(fq) as ClsInfo };
      if (this.funcs.has(fq)) return { k: "func", fns: this.funcs.get(fq) as FuncInfo[] };
      if (this.vars.has(fq)) return { k: "var", v: this.vars.get(fq) as VarInfo };
      if (this.enums.has(fq)) return { k: "enum", e: this.enums.get(fq) as EnumInfo };
      if (this.typedefs.has(fq)) return { k: "typedef", fq };
      if (this.tmpls.has(fq)) return { k: "tmpl", t: this.tmpls.get(fq) as TmplInfo };
      if (this.nss.has(fq) || this.nsAlias.has(fq)) return { k: "ns", fq: this.resolveNsAlias(fq) };
      const e = this.findEnumVal(nsFq, name);
      if (e) return e;
      const ns = this.nss.get(nsFq);
      if (ns) {
        if (ns.usingDecl.has(name)) {
          const t = ns.usingDecl.get(name) as string;
          const s = this.symOfFq(t);
          if (s) return s;
        }
        if (!seen.has(nsFq)) {
          seen.add(nsFq);
          for (const u of ns.usingNs) {
            const s = this.lookupInNs(this.resolveNsAlias(u), name, seen);
            if (s) return s;
          }
          for (const inl of ns.inlineNs) {
            const s = this.lookupInNs(inl, name, seen);
            if (s) return s;
          }
        }
      }
      if (!nsFq) {
        for (const inl of this.ensureNs("").inlineNs) {
          const s = this.lookupInNs(inl, name, seen);
          if (s) return s;
        }
      }
      return null;
    }

    findEnumVal(nsFq: string, name: string): Sym | null {
      for (const e of this.enums.values()) {
        if (e.scoped || e.decl.isDeclOnly) continue;
        const efq = e.fq;
        const ens = efq.includes("::") ? efq.slice(0, efq.lastIndexOf("::")) : "";
        if (ens !== nsFq) continue;
        this.enumValues(e);
        if ((e.values as Map<string, number>).has(name)) return { k: "enumval", e, item: name };
      }
      return null;
    }

    symOfFq(fq: string): Sym | null {
      if (this.classes.has(fq)) return { k: "class", cls: this.classes.get(fq) as ClsInfo };
      if (this.funcs.has(fq)) return { k: "func", fns: this.funcs.get(fq) as FuncInfo[] };
      if (this.vars.has(fq)) return { k: "var", v: this.vars.get(fq) as VarInfo };
      if (this.enums.has(fq)) return { k: "enum", e: this.enums.get(fq) as EnumInfo };
      if (this.typedefs.has(fq)) return { k: "typedef", fq };
      if (this.tmpls.has(fq)) return { k: "tmpl", t: this.tmpls.get(fq) as TmplInfo };
      if (this.nss.has(fq)) return { k: "ns", fq };
      const ev = this.enumValOfFq(fq);
      if (ev) return ev;
      return null;
    }

    symOfNested(fq: string): Sym | null {
      return this.symOfFq(fq);
    }

    lookupBuiltin(name: string): Sym | null {
      if (name === "__ctj_js") return { k: "builtin", name };
      return null;
    }

    // The property a field has in JS.  A field that hides a field of a base
    // class gets the class in its name: both would otherwise be "this.name".
    fieldJsName(cls: ClsInfo, name: string): string {
      if (cls.fieldStatic.has(name)) return safeJsName(name);
      // A JS object holds the fields of every base subobject in one namespace, so
      // two bases of one class can clash: _Head_base<0, int> and _Head_base<1, double>
      // both declare "h" inside tuple<int, double>.  Fields of a template instance
      // are therefore qualified by their class, which is unique to it.
      const shared = !!cls.fromTmpl || this.baseHasField(cls, name, new Set());
      return shared ? safeJsName(name) + "$" + cls.mangled : safeJsName(name);
    }

    baseHasField(cls: ClsInfo, name: string, seen: Set<string>): boolean {
      for (const b of cls.bases) {
        if (seen.has(b.fq)) continue;
        seen.add(b.fq);
        const bc = this.classes.get(b.fq);
        if (!bc) continue;
        if (bc.fields.has(name) && !bc.fieldStatic.has(name)) return true;
        if (this.baseHasField(bc, name, seen)) return true;
      }
      return false;
    }

    fieldVar(cls: ClsInfo, name: string, fd: VarDecl): VarInfo {
      return {
        fq: cls.fq + "::" + name,
        short: name,
        mangled: this.fieldJsName(cls, name),
        decl: fd,
        scope: this.memberScope(cls),
        typeCache: null,
        storage: "plain",
        isGlobal: false,
        isStatic: cls.fieldStatic.has(name),
        isParam: false,
        isField: true,
        lifted: false,
        referenced: false,
      };
    }

    lookupTmplMember(clsFq: string, name: string, seen: Set<string>): TmplInfo | null {
      if (seen.has(clsFq)) return null;
      seen.add(clsFq);
      const tlist = this.tmplsOf(clsFq + "::" + name);
      if (tlist.length) return tlist[0];
      const cls = this.classes.get(clsFq);
      if (!cls) return null;
      // Member templates of an instantiated class template are stored under the
      // uninstantiated name.
      if (cls.fromTmpl) {
        const base = this.tmplsOf(cls.fromTmpl + "::" + name);
        if (base.length) return base[0];
      }
      for (const b of cls.bases) {
        const t = this.lookupTmplMember(b.fq, name, seen);
        if (t) return t;
      }
      return null;
    }

    // Every member template of that name in the first class that has one, as the
    // overloads of one name: "f(x)" on a functor with two operator() templates
    // must see both, not just the first.
    lookupTmplMembers(clsFq: string, name: string, seen: Set<string>): TmplInfo[] {
      if (seen.has(clsFq)) return [];
      seen.add(clsFq);
      const out = this.tmplsOf(clsFq + "::" + name).slice();
      const cls = this.classes.get(clsFq);
      if (!cls) return out;
      if (cls.fromTmpl) {
        for (const t of this.tmplsOf(cls.fromTmpl + "::" + name)) if (!out.includes(t)) out.push(t);
      }
      if (out.length) return out;
      for (const b of cls.bases) {
        const r = this.lookupTmplMembers(b.fq, name, seen);
        if (r.length) return r;
      }
      return out;
    }

    lookupMember(clsFq: string, name: string, seen: Set<string>): { field: boolean; methods: FuncInfo[] | null; nested: string | null; typedef: string | null; constItem: { e: EnumInfo; item: string } | null; owner: string } {
      const r = { field: false, methods: null as FuncInfo[] | null, nested: null as string | null, typedef: null as string | null, constItem: null as { e: EnumInfo; item: string } | null, owner: clsFq };
      const cls = this.classes.get(clsFq);
      if (!cls || seen.has(clsFq)) return r;
      seen.add(clsFq);
      if (cls.fields.has(name)) {
        r.field = true;
        r.owner = clsFq;
        return r;
      }
      if (cls.methods.has(name)) {
        r.methods = cls.methods.get(name) as FuncInfo[];
        r.owner = clsFq;
        if (!cls.usingBase.has(name) && name !== "#ctor") return r;
      }
      if (name === "#ctor" && cls.usingBase.size) {
        const inh: FuncInfo[] = r.methods ? r.methods.slice() : [];
        const seenBase = new Set<string>();
        for (const b of cls.usingBase.values()) {
          const bfq = cls.bases.map(x => x.fq).find(f => f === b || f.endsWith("::" + b) || last(f.split("::")) === b);
          if (bfq && !seenBase.has(bfq)) {
            seenBase.add(bfq);
            const bc = this.classes.get(bfq);
            if (bc && bc.methods.has("#ctor")) {
              for (const f of bc.methods.get("#ctor") as FuncInfo[]) inh.push(f);
            }
          }
        }
        if (inh.length) {
          r.methods = inh;
          return r;
        }
      }
      if (cls.nested.has(name)) {
        r.nested = cls.nested.get(name) as string;
        r.owner = clsFq;
        return r;
      }
      if (cls.consts && cls.consts.has(name)) {
        r.constItem = cls.consts.get(name) as { e: EnumInfo; item: string };
        r.owner = clsFq;
        return r;
      }
      // "_Vector_impl : public _Tp_alloc_type": a typedef of the enclosing class
      // names a base class of a nested one.
      const tfq = clsFq + "::" + name;
      if (this.typedefs.has(tfq)) {
        r.typedef = tfq;
        r.owner = clsFq;
        return r;
      }
      let methods = r.methods ? r.methods.slice() : null;
      for (const b of cls.bases) {
        const sub = this.lookupMember(b.fq, name, seen);
        if (sub.field && !r.methods) return sub;
        if (sub.methods && (cls.usingBase.has(name) || !methods)) {
          methods = methods ? methods.concat(sub.methods) : sub.methods.slice();
          if (!cls.usingBase.has(name)) {
            r.methods = methods;
            r.owner = sub.owner;
            return r;
          }
        }
        if (sub.nested && !methods && !r.field) return sub;
        if (sub.typedef && !methods && !r.field) return sub;
      }
      if (methods) {
        r.methods = methods;
        return r;
      }
      return r;
    }

    resolveSym(parts: QSeg[], global: boolean, scope: Scope): Sym | null {
      if (!parts.length) return null;
      if (!global && scope.owner && parts.length === 1 && !parts[0].a.length && !parts[0].tid) {
        const sibling = scope.owner + "::" + parts[0].n;
        if (this.typedefs.has(sibling)) return { k: "typedef", fq: sibling };
      }
      // The injected class name: inside a class its own name, written without
      // arguments, stands for the class itself rather than for its template.
      if (!global && !parts[0].a.length && !parts[0].tid) {
        for (let c = scope.cls; c; c = c.scope.cls) {
          if (this.declaredName(c) !== parts[0].n) continue;
          if (parts.length === 1) return { k: "class", cls: c };
          // The injected class name may carry a qualifier of its own: inside
          // "_Rep", the qualified name "_Rep::_S_create" names that static.
          let inner: Sym | null = { k: "class", cls: c };
          for (let i = 1; i < parts.length && inner; i++) inner = this.lookupNext(inner, parts[i], scope);
          if (inner) return inner;
          break;
        }
      }
      // allocator<U> written inside allocator<T> must name the class template,
      // not a converting constructor template of the current instantiation
      // (which would collapse allocator<_Rb_tree_node<int>> to allocator<int>).
      if (!global && (parts[0].a.length || parts[0].tid)) {
        for (let c = scope.cls; c; c = c.scope.cls) {
          if (this.declaredName(c) === parts[0].n && c.fromTmpl) {
            const t = this.tmpls.get(c.fromTmpl);
            if (t && t.kind === "class") {
              const args = parts[0].a.map(a => this.resolveTypeNode(a, scope));
              const cls = this.instantiateClass(t.fq, args, scope, null);
              let sym: Sym = { k: "class", cls };
              let idx = 1;
              for (; idx < parts.length; idx++) {
                const next = this.lookupNext(sym, parts[idx], scope);
                if (!next) break;
                sym = next;
              }
              if (idx === parts.length) return sym;
            }
          }
        }
      }
      let sym: Sym | null;
      let idx = 0;
      if (global) {
        sym = this.lookupGlobalFirst(parts[0].n);
      } else {
        sym = this.lookupFirst(parts[0].n, scope);
        // A template-id names a template. What the lookup found through the base
        // chain may be the injected-class-name's constructors instead ("_Head_base
        // <...>" inside a class deriving from "_Head_base<_Idx, _Head, ...>"), so
        // the name is looked up again among the namespaces only.
        if (sym && parts[0].a.length && ((sym.k === "tmpl" && (sym.t.decl as FuncDecl).isCtor) || (sym.k === "func" && sym.fns.length > 0 && sym.fns.every(f => f.isCtor)))) {
          for (let i = scope.ns.length; i >= 0; i--) {
            const s2 = this.lookupInNs(scope.ns.slice(0, i).join("::"), parts[0].n, new Set());
            if (s2) {
              sym = s2;
              break;
            }
          }
        }
      }
      if (!sym) return null;
      sym = this.applySegArgs(sym, parts[0], scope);
      if (!sym) return null;
      idx = 1;
      for (; idx < parts.length; idx++) {
        sym = this.lookupNext(sym, parts[idx], scope);
        if (!sym) break;
      }
      if (!sym && parts.length > 1 && scope.cls) {
        // "basic_string<_CharT, ...>::_Rep" written inside the class: the plain
        // head finds the constructor before the class template, so the whole path
        // is looked up again where only the namespaces are in scope.
        return this.resolveSym(parts, global, { ns: scope.ns.slice(), cls: null, locals: [], fn: null, returns: [], owner: scope.owner });
      }
      return sym;
    }

    lookupGlobalFirst(name: string): Sym | null {
      const s = this.lookupInNs("", name, new Set());
      if (s) return s;
      return this.lookupBuiltin(name);
    }

    applySegArgs(sym: Sym, seg: QSeg, scope: Scope): Sym | null {
      if (!seg.a.length && !seg.tid) return sym;
      // Instantiating a member function template also registers it as a plain
      // method, so a later "f<A, B>(x)" finds the function before the template.
      // A template-id always names the template.
      if (sym.k === "func" && sym.fns.length) {
        const t = this.tmpls.get(sym.fns[0].fromTmpl || sym.fns[0].fq);
        if (t) sym = { k: "tmpl", t };
      }
      if (sym.k !== "tmpl") return null;
      const args = seg.a.map(a => this.resolveTypeNode(a, scope));
      return this.instantiateTmplSeg(sym.t, args, scope);
    }

    instantiateTmplSeg(t: TmplInfo, args: CppType[], scope: Scope): Sym | null {
      if (t.kind === "class") {
        const cls = this.instantiateClass(t.fq, args, scope, null);
        return { k: "class", cls };
      }
      if (t.kind === "alias") {
        const ty = this.instantiateAlias(t.fq, args, scope);
        return this.symOfType(ty);
      }
      return { k: "tmpl", t };
    }

    symOfType(t: CppType): Sym | null {
      if (t.ptr || t.ref || t.dims.length || t.isFunc) return null;
      const key = t.segs.map(g => g.n).join("::");
      void key;
      const fq = t.name;
      if (this.classes.has(fq)) return { k: "class", cls: this.classes.get(fq) as ClsInfo };
      if (this.enums.has(fq)) return { k: "enum", e: this.enums.get(fq) as EnumInfo };
      if (this.typedefs.has(fq)) return { k: "typedef", fq };
      return null;
    }

    lookupNext(sym: Sym, seg: QSeg, scope: Scope): Sym | null {
      const name = seg.n;
      let next: Sym | null = null;
      if (sym.k === "ns") {
        next = this.lookupInNs(sym.fq, name, new Set());
      } else if (sym.k === "class") {
        const m = this.lookupMember(sym.cls.fq, name, new Set());
        if (m.field) {
          const cls = this.classes.get(m.owner) as ClsInfo;
          next = { k: "var", v: this.fieldVar(cls, name, cls.fields.get(name) as VarDecl) };
        } else if (m.methods) next = { k: "func", fns: m.methods };
        else if (m.nested) next = this.symOfNested(m.nested);
        else if (m.constItem) next = { k: "enumval", e: m.constItem.e, item: m.constItem.item };
        // A member template ("Cls<A>::f<B>(x)") is stored as a template until instantiated.
        if (!next) {
          const tm = this.lookupTmplMember(sym.cls.fq, name, new Set());
          if (tm) next = { k: "tmpl", t: tm };
        }
      } else if (sym.k === "enum") {
        this.enumValues(sym.e);
        if ((sym.e.values as Map<string, number>).has(name)) next = { k: "enumval", e: sym.e, item: name };
      } else if (sym.k === "typedef") {
        const td = this.typedefs.get(sym.fq);
        if (td) {
          const ty = this.resolveTypeNode(td.target, td.scope);
          const s = this.symOfType(ty);
          if (s) return this.lookupNext(s, seg, scope);
        }
        return null;
      } else if (sym.k === "tmpl" && sym.t.kind === "alias") {
        return null;
      } else return null;
      if (!next) return null;
      return this.applySegArgs(next, seg, scope);
    }

    enumValues(e: EnumInfo): Map<string, number> {
      if (e.values) return e.values;
      e.values = new Map();
      let cur = 0;
      for (const it of e.decl.items) {
        if (it.value) {
          const v = constEval(this, it.value, e.scope);
          cur = typeof v === "number" ? Math.trunc(v) : 0;
        }
        e.values.set(it.name, cur);
        cur++;
      }
      return e.values;
    }

    varType(v: VarInfo): CppType {
      if (!v.typeCache) {
        v.typeCache = this.resolveTypeNode(v.decl.type, v.scope);
        if (v.typeCache.name === "auto") {
          this.fail(`cannot deduce 'auto' for '${v.short}' here`);
        }
      }
      return v.typeCache;
    }

    funcParams(fn: FuncInfo): FuncParam[] {
      if (!fn.paramCache) {
        fn.paramCache = fn.decl.params.map(p => ({
          name: p.name,
          // The trailing "..." of a variadic function has no type of its own.
          type: p.variadic && !p.name ? CppType.basic("void") : this.resolveTypeNode(p.type, fn.scope),
          def: p.def,
          variadic: p.variadic,
          isPack: p.isPack,
        }));
      }
      return fn.paramCache;
    }

    // A trailing return type is written in the scope of the parameters, so that
    // "-> decltype(__lhs.base() - __rhs.base())" can name them.
    paramScope(fn: FuncInfo): Scope {
      const s = this.snapScope(fn.scope);
      s.fn = fn;
      const m = new Map<string, VarInfo>();
      s.locals.push(m);
      for (const p of this.funcParams(fn)) {
        if (!p.name) continue;
        m.set(p.name, {
          fq: fn.fq + "::" + p.name,
          short: p.name,
          mangled: p.name,
          lifted: false,
          decl: {
            kind: "var",
            name: [qseg(p.name)],
            type: typeNode([]),
            init: null,
            directInit: null,
            flags: [],
            bitfield: null,
            isParam: true,
            file: fn.decl.file,
            line: fn.decl.line,
          },
          scope: s,
          typeCache: p.type,
          storage: "plain",
          isGlobal: false,
          isStatic: false,
          isParam: true,
          isField: false,
          referenced: false,
        });
      }
      return s;
    }

    funcRet(fn: FuncInfo): CppType {
      if (!fn.retCache) {
        if (this.retStack.has(fn)) {
          this.warn(`recursive return type of '${fn.fq}', assuming int`);
          fn.retCache = CppType.basic("int");
          return fn.retCache;
        }
        this.retStack.add(fn);
        try {
          if (fn.decl.trailing) fn.retCache = this.resolveTypeNode(fn.decl.trailing, this.paramScope(fn));
          else if (fn.decl.ret) fn.retCache = this.resolveTypeNode(fn.decl.ret, fn.scope);
          else fn.retCache = CppType.basic("void");
        } finally {
          this.retStack.delete(fn);
        }
      }
      return fn.retCache;
    }

    // A member declaration is resolved in the scope of its own class, so that
    // typedefs and nested names declared next to it are visible.
    memberScope(cls: ClsInfo): Scope {
      return { ns: cls.scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
    }

    fieldType(cls: ClsInfo, name: string): CppType {
      let t = cls.fieldTypes.get(name);
      if (!t) {
        const fd = cls.fields.get(name) as VarDecl;
        t = this.resolveTypeNode(fd.type, this.memberScope(cls));
        cls.fieldTypes.set(name, t);
      }
      return t;
    }

    // Types currently being resolved, so a loop says which names are in it
    // instead of exhausting the stack.  The scope each one is resolved in is
    // kept beside it: the same spelling means different types in different
    // classes, and only a name that comes back in its own scope is a loop.
    resolving: string[] = [];
    resolvingScopes: string[] = [];

    // What a type node is read against.  The class it is read in comes first:
    // a member typedef of one instance of a class template has nothing to do
    // with the same member of another.
    scopeKey(scope: Scope): string {
      const cls = scope.cls ? (scope.cls as unknown as { fq?: string }).fq || "" : "";
      return cls + "|" + scope.ns.join("::") + "|" + (scope.fn ? scope.fn.fq : "");
    }

    // The place in the list where this name is already being resolved in the
    // same scope, or -1.  "indexOf" would find the name under another class.
    resolvingAt(key: string, sk: string): number {
      for (let i = 0; i < this.resolving.length; i++) {
        if (this.resolving[i] === key && this.resolvingScopes[i] === sk) return i;
      }
      return -1;
    }

    resolveTypeNode(tn: TypeNode, scope: Scope): CppType {
      const key = tnKey(tn);
      const sk = this.scopeKey(scope);
      const anyAt = this.resolving.indexOf(key);
      if (anyAt >= 0) {
        // A class being instantiated can name itself before its own instantiation
        // has returned ("typedef _Deque_iterator<_Tp, _Tp&, _Tp*> iterator" in a
        // constructor's "const iterator&" parameter). Those classes are
        // registered before their members are read, so the type is that class.
        for (let i = scope.ns.length; i >= 0; i--) {
          const cand = [...scope.ns.slice(0, i), key].join("::");
          const self = this.classes.get(cand);
          if (!self) continue;
          const t = new CppType(self.fq);
          t.segs = [{ n: self.fromTmpl || self.fq, a: self.instArgs.slice() }];
          this.markCls(self.fq);
          return t;
        }
      }
      if (anyAt >= 0 && (tn.ptr > 0 || tn.ref !== "" || tn.dims.length > 0 || !!tn.func)) {
        const baseName = tn.parts.map(s => s.n).join("::") || "void";
        const t = CppType.basic(baseName);
        if (tn.parts.length) t.segs = tn.parts.map(s => ({ n: s.n, a: [] }));
        this.applyTypeSuffix(t, tn, scope);
        return t;
      }
      const at = this.resolvingAt(key, sk);
      this.resolving.push(key);
      this.resolvingScopes.push(sk);
      if (at >= 0) {
        const loop = this.resolving.slice(at).join(" -> ");
        this.resolving.length = 0;
        this.resolvingScopes.length = 0;
        this.fail("cyclic type resolution: " + loop, tn);
      }
      try {
        return this.resolveTypeNodeInner(tn, scope);
      } finally {
        this.resolving.pop();
        this.resolvingScopes.pop();
      }
    }

    resolveTypeNodeInner(tn: TypeNode, scope: Scope): CppType {
      if (tn.decltypeOf) return typeOf(this, tn.decltypeOf, scope);
      if (tn.valueArg) {
        const v = constEval(this, tn.valueArg, scope);
        if (typeof v !== "number") this.fail("non-constant template value argument", tn);
        return CppType.basic("__value" + Math.trunc(v));
      }
      if (!tn.parts.length) this.fail("missing type");
      const first = tn.parts[0].n;
      if (tn.parts.length === 1 && !tn.parts[0].a.length) {
        if (first.startsWith("__value")) {
          const t = CppType.basic(first);
          this.applyTypeSuffix(t, tn, scope);
          return t;
        }
        const canon = canonBasic(first.split(" "));
        if (canon) {
          // va_list is a pointer to the variadic arguments, so it is a box that
          // va_arg advances in place.
          const t = CppType.basic(canon === "__builtin_va_list" ? "void" : canon);
          if (canon === "__builtin_va_list") t.ptr = 1;
          this.applyTypeSuffix(t, tn, scope);
          return t;
        }
      }
      // An alias template whose target is not a class ("Req<It>" for "typename
      // enable_if<...>::type" or "int") has no symbol to return, so its arguments
      // are applied here.
      const lastSeg = tn.parts[tn.parts.length - 1];
      if (lastSeg && lastSeg.a.length) {
        const bare = this.resolveSym(tn.parts.slice(0, -1).concat([qseg(lastSeg.n)]), tn.global, scope);
        if (bare && bare.k === "tmpl" && bare.t.kind === "alias") {
          const aliased = this.instantiateAlias(
            bare.t.fq,
            lastSeg.a.map(x => this.resolveTypeNode(x, scope)),
            scope
          );
          this.applyTypeSuffix(aliased, tn, scope);
          return aliased;
        }
      }
      let sym = this.resolveSym(tn.parts, tn.global, scope);
      // A synthesized declaration spells an instantiated class by its key, which
      // reads as several names but denotes the one class the key names.
      if (!sym && tn.parts.every(x => !x.a.length)) sym = this.symOfFq(tn.parts.map(x => x.n).join("::"));
      if (!sym) this.fail(`unknown type '${tn.parts.map(s => s.n).join("::")}'`, tn);
      const s = sym as Sym;
      let base: CppType;
      if (s.k === "class") {
        base = new CppType(s.cls.fq);
        base.segs = [{ n: s.cls.fromTmpl || s.cls.fq, a: s.cls.instArgs.slice(), tid: !!s.cls.fromTmpl }];
        this.markCls(s.cls.fq);
      } else if (s.k === "enum") {
        base = new CppType(s.e.fq);
        base.segs = [{ n: s.e.fq, a: [] }];
        s.e.referenced = true;
      } else if (s.k === "typedef") {
        base = this.expandTypedef(s.fq, new Set());
      } else if (s.k === "tmpl") {
        if (s.t.kind === "class") {
          const cls = this.instantiateClass(s.t.fq, [], scope, tn);
          base = new CppType(cls.fq);
          base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
          this.markCls(cls.fq);
        } else if (s.t.kind === "alias") {
          base = this.instantiateAlias(s.t.fq, [], scope);
        } else if (s.t.kind === "func" && (s.t.decl as FuncDecl).isCtor && s.t.scope.cls) {
          // A constructor template named in a type position stands for its class.
          const cls = s.t.scope.cls;
          base = new CppType(cls.fq);
          base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
          this.markCls(cls.fq);
        } else this.fail(`'${s.t.fq}' is not a type`, tn);
      } else if (s.k === "enumval") {
        const vals = this.enumValues(s.e);
        base = CppType.basic("__value" + (vals.get(s.item) || 0));
      } else if (s.k === "var") {
        const v = constEval(this, { kind: "id", parts: tn.parts, global: tn.global, file: tn.file, line: tn.line }, scope);
        if (typeof v !== "number") this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
        base = CppType.basic("__value" + Math.trunc(v));
      } else if (s.k === "func" && (s as Sym & { k: "func" }).fns.some(f => f.isCtor)) {
        // "new_allocator<_Tp1>" names a constructor, which in a type position
        // stands for the class it constructs.
        const cls = this.classes.get((s as Sym & { k: "func" }).fns[0].cls);
        if (!cls) this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
        base = new CppType(cls.fq);
        base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
        this.markCls(cls.fq);
      } else this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
      this.applyTypeSuffix(base, tn, scope);
      return base;
    }

    applyTypeSuffix(base: CppType, tn: TypeNode, scope: Scope): void {
      base.ptr += tn.ptr;
      if (tn.ref) base.ref = tn.ref;
      if (tn.cnst) base.cnst = true;
      for (const d of tn.dims) {
        if (d.kind === "lit" && !d.value) base.dims.push(-1);
        else {
          const v = constEval(this, d, scope);
          base.dims.push(typeof v === "number" ? Math.trunc(v) : -1);
        }
      }
      if (tn.func) {
        // "R& (*)(A)" : the reference belongs to the return type, the pointer
        // to the function itself.
        const ret = new CppType(base.name);
        ret.segs = base.segs;
        ret.ref = base.ref;
        ret.cnst = base.cnst;
        ret.dims = base.dims.slice();
        base.isFunc = true;
        base.ret = ret;
        base.funcParams = tn.func.params.map(p => this.resolveTypeNode(p, scope));
        base.funcVariadic = tn.func.variadic;
        base.name = "__func";
        base.segs = [{ n: "__func", a: [] }];
        base.ref = (tn.func.ptrRef || "") as "" | "&" | "&&";
        base.cnst = false;
        base.dims = [];
      }
    }

    expandTypedef(fq: string, seen: Set<string>): CppType {
      if (seen.has(fq)) this.fail(`cyclic typedef '${fq}'`);
      if (seen.size > 100) this.fail(`typedef expansion too deep '${fq}'`);
      seen.add(fq);
      const td = this.typedefs.get(fq);
      if (!td) this.fail(`unknown typedef '${fq}'`);
      const target = (td as { target: TypeNode }).target;
      const cut = fq.lastIndexOf("::");
      const base = (td as { scope: Scope }).scope;
      const scope: Scope = cut > 0 ? { ...base, owner: fq.slice(0, cut) } : base;
      if (target.parts.length === 1 && !target.parts[0].a.length && !target.ptr && !target.ref && !target.func && !target.dims.length && !target.decltypeOf && !target.valueArg) {
        const s = this.resolveSym(target.parts, target.global, scope);
        if (s && s.k === "typedef") {
          const t = this.expandTypedef(s.fq, seen);
          seen.delete(fq);
          return t;
        }
      }
      const t = this.resolveTypeNode(target, scope);
      seen.delete(fq);
      return t;
    }

    instantiateClass(tmplFq: string, args: CppType[], scope: Scope, t: At | null): ClsInfo {
      const tmpl = this.tmpls.get(tmplFq);
      if (!tmpl || tmpl.kind !== "class") this.fail(`'${tmplFq}' is not a class template`, t || undefined);
      const full = this.fillDefaultArgs(tmpl as TmplInfo, args, scope, t);
      const key = (tmpl as TmplInfo).fq + "<" + full.map(a => a.key()).join(",") + ">";
      const exist = this.classes.get(key);
      if (exist) {
        this.markCls(key);
        return exist;
      }
      // The specialization can be declared in one header and defined in another
      // ("charfwd.h" declares char_traits<char>, "char_traits.h" defines it);
      // a declaration that carries members is the one to instantiate.
      const want = full.map(a => a.key()).join(",");
      let spec: TmplInfo["specs"][number] | null = null;
      for (const s of (tmpl as TmplInfo).specs) {
        if (s.key !== want) continue;
        spec = s;
        if ((s.decl as ClassDecl).members.length) break;
      }
      if (spec) return this.instantiateClassDecl(key, tmpl as TmplInfo, spec.decl as ClassDecl, full, blankSubstEnv(), t);
      if (this.instStack.includes(key)) this.fail(`recursive instantiation of '${key}'`, t || undefined);
      this.instStack.push(key);
      try {
        let best: { p: { tparams: TParam[]; specArgs: TypeNode[]; decl: Decl }; env: SubstEnv; score: number } | null = null;
        for (const p of (tmpl as TmplInfo).partials || []) {
          const env = this.matchPartial(p, full, tmpl as TmplInfo);
          if (!env) continue;
          const score = this.partialScore(p);
          if (!best || score > best.score) best = { p, env, score };
        }
        if (best) return this.instantiateClassDecl(key, tmpl as TmplInfo, substDecl(best.p.decl, best.env) as ClassDecl, full, best.env, t);
        const env = this.buildEnv((tmpl as TmplInfo).tparams, full);
        const decl = substDecl((tmpl as TmplInfo).decl, env) as ClassDecl;
        return this.instantiateClassDecl(key, tmpl as TmplInfo, decl, full, env, t);
      } catch (e) {
        throw e;
      } finally {
        this.instStack.pop();
      }
    }

    // Prefer a more specialized partial: a literal `0` beats a parameter `__i`,
    // so tuple_element<0, tuple<_Head, _Tail...>> wins over
    // tuple_element<__i, tuple<_Head, _Tail...>> when __i is 0.
    partialScore(p: { tparams: TParam[]; specArgs: TypeNode[] }): number {
      const names = new Set(p.tparams.map(x => x.name));
      let n = 0;
      const walk = (tn: TypeNode): void => {
        if (tn.valueArg) {
          if (tn.valueArg.kind === "lit") n += 10;
          else if (tn.valueArg.kind === "id") {
            const id = tn.valueArg as IdExpr;
            if (!(id.parts.length === 1 && names.has(id.parts[0].n))) n += 5;
          } else n += 3;
          return;
        }
        if (tn.parts.length === 1 && !tn.parts[0].a.length && names.has(tn.parts[0].n)) return;
        n += 1;
        for (const s of tn.parts) for (const a of s.a) walk(a);
      };
      for (const a of p.specArgs) walk(a);
      return n;
    }

    // Match the argument list of a partial specialization against the arguments
    // of an instantiation; the result substitutes into the specialization.
    matchPartial(p: { tparams: TParam[]; specArgs: TypeNode[]; decl: Decl }, args: CppType[], tmpl: TmplInfo): SubstEnv | null {
      // Every argument has to be accounted for, so the arities must agree - a
      // trailing pack being the one exception, it takes whatever is left over.
      const last = p.specArgs.length ? p.specArgs[p.specArgs.length - 1] : null;
      // A pack is "_Tp..." written as a type, or "_Is..." written as a nontype
      // argument (an expression), which is what a nontype pack parses to.
      const lastVal = last && !last.parts.length && last.valueArg && last.valueArg.kind === "unary" && last.valueArg.op === "..." ? last.valueArg.arg : null;
      const packName = last && last.packExpand && last.parts.length ? last.parts[0].n : lastVal && lastVal.kind === "id" ? (lastVal as IdExpr).parts[0].n : null;
      const packTn = packName !== null ? last : null;
      const fixed = p.specArgs.length - (packTn ? 1 : 0);
      if (packTn ? fixed > args.length : p.specArgs.length !== args.length) return null;
      const env = blankSubstEnv();
      const names = new Set(p.tparams.map(x => x.name));
      for (let i = 0; i < fixed; i++) {
        if (!this.matchTypeArg(p.specArgs[i], args[i], names, env, tmpl.scope)) return null;
      }
      if (packName !== null) {
        const rest = args.slice(fixed);
        if (p.tparams.some(x => x.name === packName && x.kind === "nontype")) {
          env.valuePacks.set(
            packName,
            rest.map(a => parseInt(a.name.replace("__value", "") || "0", 10))
          );
        } else env.packs.set(packName, rest);
      }
      for (const tp of p.tparams) {
        // A pack binds in env.packs, so it is never in env.types; unlike a plain
        // parameter it needs no default of its own.
        if (tp.isPack || env.types.has(tp.name) || env.values.has(tp.name)) continue;
        if (!tp.def) return null;
        if (tp.kind === "nontype") {
          const v = constEval(this, substExpr(tp.def as Expr, env), tmpl.scope);
          if (typeof v !== "number") return null;
          env.values.set(tp.name, Math.trunc(v));
        } else {
          env.types.set(tp.name, this.resolveTypeNode(substTypeNode(tp.def as TypeNode, env), tmpl.scope));
        }
      }
      return env;
    }

    // Match a function-type pattern such as "_Res(_ArgTypes...)": the return
    // type binds to _Res, the parameters to the leading patterns and whatever is
    // left over to a trailing pack.
    matchFuncArg(tn: TypeNode, t: CppType, names: Set<string>, env: SubstEnv, scope: Scope, ret: string): boolean {
      if (!t.isFunc || !t.ret) return false;
      const have = env.types.get(ret);
      if (have) {
        if (have.key() !== t.ret.key()) return false;
      } else {
        env.types.set(ret, t.ret);
      }
      const pat = tn.func ? tn.func.params : [];
      const act = t.funcParams || [];
      const lp = pat.length ? pat[pat.length - 1] : null;
      const pack = lp && lp.packExpand && lp.parts.length === 1 && !lp.parts[0].a.length && names.has(lp.parts[0].n) ? lp.parts[0].n : null;
      const n = pat.length - (pack ? 1 : 0);
      if (pack ? act.length < n : act.length !== n) return false;
      if (pack) env.packs.set(pack, act.slice(n));
      for (let i = 0; i < n; i++) {
        if (!this.matchTypeArg(pat[i], act[i], names, env, scope)) return false;
      }
      return true;
    }

    matchTypeArg(tn: TypeNode, t: CppType, names: Set<string>, env: SubstEnv, scope: Scope): boolean {
      if (tn.valueArg) {
        // A nontype parameter in the pattern binds to a value argument, as in
        // _Tuple_impl<_Idx, _Head, _Tail...> matching _Tuple_impl<0, int>.
        if (tn.valueArg.kind === "id") {
          const id = tn.valueArg as IdExpr;
          if (id.parts.length === 1 && !id.global && names.has(id.parts[0].n) && t.name.startsWith("__value")) {
            const v = parseInt(t.name.replace("__value", "") || "0", 10);
            const have = env.values.get(id.parts[0].n);
            if (have !== undefined) return have === v;
            env.values.set(id.parts[0].n, v);
            return true;
          }
        }
        // The argument may be an expression over parameters matched earlier, as
        // in "conditional<_B1::value, ...>", so it is substituted first.
        const v = constEval(this, substExpr(tn.valueArg, env), scope);
        return typeof v === "number" && t.name === "__value" + Math.trunc(v);
      }
      if (!tn.parts.length) return false;
      const first = tn.parts[0].n;
      if (tn.parts.length === 1 && !tn.parts[0].a.length && names.has(first) && t.name.startsWith("__value") && !tn.ptr && !tn.ref) {
        // A nontype parameter spelled as a type name ("I" in "Sum<I, Is...>")
        // binds to a value argument; a type can never be named __value...
        const v = parseInt(t.name.replace("__value", "") || "0", 10);
        const have = env.values.get(first);
        if (have !== undefined) return have === v;
        env.values.set(first, v);
        return true;
      }
      if (tn.parts.length === 1 && !tn.parts[0].a.length && names.has(first)) {
        // "_Res(_Args...)" is a function type: only a function argument matches,
        // and its parameter list has to line up with the pattern.
        if (tn.func) return this.matchFuncArg(tn, t, names, env, scope, first);
        if (tn.cnst && !t.cnst) return false;
        if (t.ptr < tn.ptr || (tn.ref && tn.ref !== t.ref)) return false;
        // "_Tp[]" and "_Tp[_Size]" only match arrays; without this the array
        // specialization of remove_all_extents is picked for a plain int.
        // A parameter binds a reference to an array whole (is_same<_Tp, _Tp> with
        // char(&)[6]), while an array pattern has to agree with the argument.
        const refBinds = t.ref !== "" && !tn.dims.length && t.dims.length > 0;
        if (tn.dims.length !== t.dims.length && !refBinds) return false;
        // An array pattern does not match a reference to an array: is_array<_Tp(&)[N]> is false.
        if (tn.dims.length && t.ref !== "") return false;
        if (env.types.has(first)) return (env.types.get(first) as CppType).key() === t.key();
        const c = new CppType(t.name);
        c.segs = t.segs;
        c.ptr = t.ptr - tn.ptr;
        c.dims = t.dims.slice();
        // A reference in the pattern is the pattern's own; without one the
        // argument keeps its reference, as in "conditional<false, _Iftrue,
        // _Iffalse>" where "_Iffalse" is bound to a "_Value&" argument.
        c.ref = tn.ref ? "" : t.ref;
        c.isFunc = t.isFunc;
        c.ret = t.ret;
        c.funcParams = t.funcParams;
        c.funcVariadic = t.funcVariadic;
        env.types.set(first, c);
        return true;
      }
      if (tn.cnst && !t.cnst) return false;
      const seg = tn.parts[tn.parts.length - 1];
      if (seg && (seg.a.length || tn.parts.length > 1) && t.segs.length) {
        const act = t.segs[t.segs.length - 1];
        const patName = seg.n;
        const actName = act.n;
        const short = (n: string) => last(n.split("::"));
        if (short(actName) !== short(patName) && actName !== patName && !actName.endsWith("::" + patName)) {
          // Different template-ids do not match; fall through to the older
          // parts[0] comparison and resolveTypeNode rather than rejecting here,
          // so existing partials (vector, iterators) keep working.
        } else {
          const pat = seg.a;
          const ta = act.a;
          if (!pat.length && !ta.length) return true;
          const lp = pat.length ? pat[pat.length - 1] : null;
          const pack = lp && lp.packExpand && lp.parts.length === 1 && !lp.parts[0].a.length && names.has(lp.parts[0].n) ? lp.parts[0].n : "";
          if (pack) {
            const fixed = pat.length - 1;
            if (ta.length < fixed) return false;
            for (let i = 0; i < fixed; i++) {
              if (!this.matchTypeArg(pat[i], ta[i], names, env, scope)) return false;
            }
            env.packs.set(pack, ta.slice(fixed));
            return true;
          }
          if (ta.length !== pat.length) return false;
          for (let i = 0; i < ta.length; i++) {
            if (!this.matchTypeArg(pat[i], ta[i], names, env, scope)) return false;
          }
          return true;
        }
      }
      if (tn.parts[0].a.length && t.segs.length) {
        const ta = t.segs[0].a;
        if (ta.length !== tn.parts[0].a.length) return false;
        for (let i = 0; i < ta.length; i++) {
          if (!this.matchTypeArg(tn.parts[0].a[i], ta[i], names, env, scope)) return false;
        }
        return true;
      }
      try {
        return this.resolveTypeNode(tn, scope).key() === t.key();
      } catch {
        return false;
      }
    }

    instantiateClassDecl(key: string, tmpl: TmplInfo, decl: ClassDecl, args: CppType[], env: SubstEnv, t: At | null): ClsInfo {
      void env;
      void t;
      const cls = this.blankCls(key, shortName(key), decl, tmpl.scope);
      cls.complete = true;
      cls.fromTmpl = tmpl.fq;
      cls.instArgs = args;
      cls.isUnion = decl.cls === "union";
      cls.mangled = mangleClassSym(clsComps(cls));
      this.classes.set(key, cls);
      const sub: Scope = { ns: tmpl.scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
      for (const b of decl.bases) {
        cls.bases.push({ fq: this.resolveClassName(b.name, sub), access: b.access, isVirtual: b.isVirtual });
      }
      this.collect(decl.members, sub);
      // A constructor declaration keeps its default arguments; a call can need
      // one of them before the function itself is ever analyzed.
      for (const list of cls.methods.values()) {
        for (const fn of list) this.annDefaults(fn.decl, this.memberScope(cls));
      }
      if (this.collecting) this.pendingOOL.push({ tmpl, key, cls, args, env });
      else this.instantiateOutOfLineMembers(tmpl, key, cls, args, env);
      this.markCls(key);
      return cls;
    }

    flushOutOfLine(): void {
      this.collecting = false;
      const list = this.pendingOOL;
      this.pendingOOL = [];
      for (const p of list) this.instantiateOutOfLineMembers(p.tmpl, p.key, p.cls, p.args, p.env);
    }

    instantiateOutOfLineMembers(tmpl: TmplInfo, key: string, cls: ClsInfo, args: CppType[], envOverride?: SubstEnv): void {
      const prefix = tmpl.fq + "::";
      for (const t of this.allTmpls()) {
        if (!t.fq.startsWith(prefix)) continue;
        // The parameters of the specialization the instance was read from, not
        // those of the primary: "Cls<_A, _B>" and "Cls<_X, _Y>" are the same
        // template with different names for its parameters.
        const env = envOverride || this.buildEnv(tmpl.tparams, args);
        const outer = t.outer || tmpl.tparams.length;
        const rest = t.tparams.slice(outer);
        const newFq = key + "::" + t.fq.slice(prefix.length);
        // The member can belong to a nested class of the instantiated one:
        // "W2<int>::N::get" is a method of W2<int>::N, not of W2<int>.
        const owner = this.classes.get(this.nsOfFq(newFq)) || cls;
        if (t.kind === "data" && !rest.length) {
          const decl = substDecl(t.decl, env) as VarDecl;
          const short = last(decl.name).n;
          const fd = owner.fields.get(short);
          // The declaration inside the class carries no value; the definition
          // does, and it is what the emitted static field is initialized from.
          if (fd && !fd.init && !fd.directInit && decl.init) {
            owner.fields.set(short, decl);
            try {
              typeOf(this, decl.init, this.memberScope(owner));
            } catch {
              // the emitter reports a value it cannot evaluate
            }
          }
        } else if (t.kind === "func" && !rest.length) {
          const decl = substDecl(t.decl, env) as FuncDecl;
          this.annDefaults(decl, this.memberScope(owner));
          const exist = this.findMethod(owner, decl);
          if (exist && !exist.decl.body && decl.body) {
            this.mergeDefDefaults(exist.decl, decl);
            exist.decl = decl;
            exist.scope = this.memberScope(owner);
          } else if (!exist) {
            this.addMethod(owner, this.methodShort(decl), decl, this.memberScope(owner));
          }
        } else {
          // Default template arguments of a member template can mention the
          // enclosing class parameters (e.g. enable_if<is_convertible<_U1, _T1>>
          // on pair's converting constructors).  Substitute those too.  Inner
          // packs must not be expanded: sizeof...(_Args1) would become 0.
          const e2 = copySubstEnv(env);
          for (const tp of rest) {
            e2.types.delete(tp.name);
            e2.packs.delete(tp.name);
            e2.values.delete(tp.name);
            e2.valuePacks.delete(tp.name);
            e2.packNames.delete(tp.name);
          }
          const decl = substDecl(t.decl, e2);
          const rest2 = rest.map(tp => substTParam(tp, e2));
          // registerTmpl, not tmpls.set: the declaration of this member that the
          // class body carries is the same template, and the definition replaces it.
          // The member's own scope: the class's typedefs are visible in an
          // out-of-line definition.
          // As for namespace templates, the defaults of the in-class declaration
          // are kept: "template<typename _Functor, typename = _Requires<...>>
          // function(_Functor)" is defined out of line without them.
          const prevT = this.tmpls.get(newFq);
          rest2.forEach((tp, i) => {
            const old = prevT && prevT.tparams[i];
            if (!tp.def && old && old.def) tp.def = old.def;
          });
          this.registerTmpl({ fq: newFq, kind: t.kind, tparams: rest2, decl, scope: this.memberScope(owner), specs: [] });
        }
      }
    }

    // The fq of the class or namespace a qualified name is written against.  The
    // template arguments are dropped: reading them would instantiate the class.
    ownerFq(parts: QSeg[], scope: Scope): string {
      const whole = this.resolveOwnerPath(parts, scope);
      if (whole) return whole;
      // What is left names members of a class that is still a template, which
      // cannot be resolved from here: they are kept as written behind whatever
      // the first name turns out to be.
      const head = this.resolveOwnerPath([parts[0]], scope) || parts[0].n;
      return parts.length > 1
        ? head +
            "::" +
            parts
              .slice(1)
              .map(s => s.n)
              .join("::")
        : head;
    }

    resolveOwnerPath(parts: QSeg[], scope: Scope): string | null {
      let owner: Sym | null = null;
      try {
        owner = this.resolveSym(
          parts.map(s => qseg(s.n)),
          false,
          scope
        );
      } catch {
        owner = null;
      }
      if (owner && owner.k === "class") return owner.cls.fq;
      if (owner && owner.k === "tmpl") return owner.t.fq;
      if (owner && owner.k === "ns") return owner.fq;
      return null;
    }

    methodShort(d: FuncDecl): string {
      if (!d.name.length) return "";
      return last(d.name).n;
    }

    // The declaration an out-of-line definition belongs to, by its parameters:
    // the types first, since "size_type, size_type, const _CharT*, size_type"
    // and "iterator, iterator, const _CharT*, size_type" are the same shapes as
    // references and pointers, and only the names tell them apart.
    findMethod(cls: ClsInfo, d: FuncDecl): FuncInfo | null {
      const key = this.methodKey(d, this.methodShort(d));
      const list = cls.methods.get(key);
      if (!list) return null;
      for (const f of list) {
        if (this.sameParams(cls, f.decl, d)) return f;
      }
      // Nothing of that shape is declared: the definition is an overload the
      // class does not carry yet, and the caller adds it.
      return null;
    }

    instantiateAlias(tmplFq: string, args: CppType[], scope: Scope): CppType {
      const tmpl = this.tmpls.get(tmplFq);
      if (!tmpl || tmpl.kind !== "alias") this.fail(`'${tmplFq}' is not an alias template`);
      const full = this.fillDefaultArgs(tmpl as TmplInfo, args, scope, null);
      const env = this.buildEnv((tmpl as TmplInfo).tparams, full);
      const inner = (tmpl as TmplInfo).decl as TypedefDecl;
      const tn = substTypeNode(inner.type, env);
      return this.resolveTypeNode(tn, (tmpl as TmplInfo).scope);
    }

    // Substitution produces fresh expression nodes. A default argument can be
    // needed before the function that owns it is analyzed, so it is typed here.
    annDefaults(decl: FuncDecl, scope: Scope): void {
      for (const pd of decl.params) {
        if (!pd.def) continue;
        try {
          typeOf(this, pd.def, scope);
        } catch {
          /* the annotator retries */
        }
      }
    }

    funcInstKey(tmpl: TmplInfo, args: CppType[], env: SubstEnv): string {
      const tag = tmpl.ovl ? "#" + tmpl.ovl : "";
      const nPacks = tmpl.tparams.filter(p => p.isPack).length;
      if (nPacks > 1) {
        const bits = tmpl.tparams.map(tp => {
          if (tp.isPack) {
            if (tp.kind === "nontype") return (env.valuePacks.get(tp.name) || []).join(",");
            return (env.packs.get(tp.name) || []).map(a => a.key()).join(",");
          }
          if (tp.kind === "nontype") return env.values.has(tp.name) ? String(env.values.get(tp.name)) : "";
          const ty = env.types.get(tp.name);
          return ty ? ty.key() : "";
        });
        return tmpl.fq + tag + "<" + bits.join(";") + ">";
      }
      return tmpl.fq + tag + "<" + args.map(a => a.key()).join(",") + ">";
    }

    instantiateFunc(tmpl: TmplInfo, args: CppType[], given: Map<string, CppType>, envOverride?: SubstEnv): FuncInfo {
      // Overloads of one name are different functions: without the position of
      // this one among them, "operator!=" for reverse_iterator would stand in
      // for the one for move_iterator.
      const env = envOverride ? copySubstEnv(envOverride) : this.buildEnv(tmpl.tparams, args);
      const key = this.funcInstKey(tmpl, args, env);
      const exist = this.funcInsts.get(key);
      if (exist) return exist;
      for (const [k, v] of given) {
        if (!env.types.has(k)) env.types.set(k, v);
      }
      const decl = substDecl(tmpl.decl, env) as FuncDecl;
      this.annDefaults(decl, this.snapScope(tmpl.scope));
      const fn: FuncInfo = {
        fq: key,
        short: last(tmpl.fq.split("::")),
        mangled: "",
        decl,
        scope: this.snapScope(tmpl.scope),
        paramCache: null,
        retCache: null,
        isMethod: tmpl.scope.cls !== null,
        cls: tmpl.scope.cls ? tmpl.scope.cls.fq : "",
        isCtor: decl.isCtor,
        isDtor: decl.isDtor,
        isConv: decl.isConv,
        isVirtual: false,
        isPure: false,
        isStatic: decl.flags.includes("static"),
        isConst: decl.flags.includes("const"),
        isDefault: false,
        isDelete: decl.isDelete,
        op: decl.op,
        analyzed: false,
        referenced: false,
        fromTmpl: tmpl.fq,
        ownTmpl: tmpl.tparams.length > 0,
        tmplArgs: this.tmplArgsOf(tmpl, env),
        baseAssigns: [],
      };
      this.funcInsts.set(key, fn);
      if (fn.isMethod) {
        const cls = this.classes.get(fn.cls);
        if (cls) {
          const mk = this.methodKey(decl, fn.short);
          const list = cls.methods.get(mk) || [];
          list.push(fn);
          cls.methods.set(mk, list);
        }
      } else {
        const list = this.funcs.get(tmpl.fq) || [];
        list.push(fn);
        this.funcs.set(tmpl.fq, list);
      }
      return fn;
    }

    // The JavaScript name of a free function, given on first use. A signature is read
    // only when the function is emitted: reading one while types are being resolved
    // would see the types as they are then, not as the program declares them.
    symOf(f: FuncInfo): string {
      if (!f.mangled) this.assignSym(f, funcSym(this, f));
      return f.mangled;
    }

    // Records the name of a function, with a suffix when another has the same name.
    assignSym(f: FuncInfo, sym: string): void {
      let name = sym;
      for (let k = 2; this.fnMangles.has(name); k++) name = this.funcInsts.has(f.fq) ? sym + "_" + k : sym + "_" + f.decl.line;
      this.fnMangles.add(name);
      f.mangled = name;
    }

    // The JavaScript name of a method. A method that overrides a virtual method of a
    // base class takes that method's name, so that a call through the base reaches it.
    methodSym(f: FuncInfo): string {
      if (f.mangled) return f.mangled;
      const cls = f.isStatic ? undefined : this.classes.get(f.cls);
      const base = cls ? this.baseVirtual(cls, f, paramsSig(this.funcParams(f).map(p => p.type)), new Set()) : null;
      if (base) f.mangled = this.methodSym(base);
      else this.assignSym(f, funcSym(this, f));
      return f.mangled;
    }

    private baseVirtual(cls: ClsInfo, f: FuncInfo, sig: string, seen: Set<string>): FuncInfo | null {
      for (const b of cls.bases) {
        if (seen.has(b.fq)) continue;
        seen.add(b.fq);
        const bc = this.classes.get(b.fq);
        if (!bc) continue;
        for (const g of bc.methods.get(f.short) || []) {
          if (g.isVirtual && !g.isStatic && g.isConst === f.isConst && paramsSig(this.funcParams(g).map(p => p.type)) === sig) return g;
        }
        const up = this.baseVirtual(bc, f, sig, seen);
        if (up) return up;
      }
      return null;
    }

    // The arguments of a function template's own parameters, in declaration order.
    tmplArgsOf(tmpl: TmplInfo, env: SubstEnv): CppType[] {
      const out: CppType[] = [];
      for (const tp of tmpl.tparams) {
        if (tp.kind === "nontype") {
          if (tp.isPack) for (const v of env.valuePacks.get(tp.name) || []) out.push(CppType.basic("__value" + v));
          else if (env.values.has(tp.name)) out.push(CppType.basic("__value" + env.values.get(tp.name)));
        } else if (tp.isPack) {
          for (const a of env.packs.get(tp.name) || []) out.push(a);
        } else if (env.types.has(tp.name)) {
          out.push(env.types.get(tp.name) as CppType);
        }
      }
      return out;
    }

    fillDefaultArgs(tmpl: TmplInfo, args: CppType[], scope: Scope, t: At | null): CppType[] {
      const full = args.slice();
      const env = this.buildEnvPartial(tmpl.tparams, full);
      for (let i = full.length; i < tmpl.tparams.length; i++) {
        const tp = tmpl.tparams[i];
        if (tp.isPack) break;
        if (!tp.def) this.fail(`too few template arguments for '${tmpl.fq}'`, t || undefined);
        if (tp.kind === "type" || tp.kind === "template") {
          const tn = substTypeNode(tp.def as TypeNode, env);
          // A default argument is read where the template was declared:
          // "'class _Hash = hash<_Key>'" is written inside "std" and means
          // "std::hash" there, whatever names the use site has in scope.  The
          // scope naming the template is the fallback, for the synthesized
          // declarations whose own scope is not the one they are read in.
          const dscope = tmpl.scope && tmpl.scope !== scope ? tmpl.scope : scope;
          let ty: CppType;
          try {
            ty = this.resolveTypeNode(tn, dscope);
          } catch (e) {
            if (dscope === scope) throw e;
            ty = this.resolveTypeNode(tn, scope);
          }
          full.push(ty);
          env.types.set(tp.name, ty);
        } else {
          const ex = substExpr(tp.def as Expr, env);
          const v = constEval(this, ex, scope);
          if (typeof v !== "number") this.fail(`non-constant template argument for '${tp.name}' in '${tmpl.fq}'`, t || undefined);
          full.push(CppType.basic("__value" + Math.trunc(v)));
          env.values.set(tp.name, Math.trunc(v));
        }
      }
      return full;
    }

    buildEnv(tparams: TParam[], args: CppType[]): SubstEnv {
      const env: SubstEnv = { types: new Map(), packs: new Map(), values: new Map(), valuePacks: new Map(), packNames: new Map(), packOf: new Map(), valueTypes: new Map() };
      let ai = 0;
      for (const tp of tparams) {
        if (tp.isPack) {
          if (tp.kind === "nontype")
            env.valuePacks.set(
              tp.name,
              args.slice(ai).map(a => parseInt(a.name.replace("__value", "") || "0", 10))
            );
          else env.packs.set(tp.name, args.slice(ai));
          ai = args.length;
        } else {
          const a = args[ai++];
          if (!a) continue;
          if (tp.kind === "nontype") {
            env.values.set(tp.name, parseInt(a.name.replace("__value", "") || "0", 10));
            if (tp.type && env.valueTypes) env.valueTypes.set(tp.name, tp.type);
          } else env.types.set(tp.name, a);
        }
      }
      return env;
    }

    buildEnvPartial(tparams: TParam[], args: CppType[]): SubstEnv {
      return this.buildEnv(tparams, args);
    }

    synthMembers(cls: ClsInfo): void {
      if (cls.synthDone || !cls.complete) return;
      cls.synthDone = true;
      const hasCtor = cls.methods.has("#ctor");
      const hasCopyCtor = hasCtor && (cls.methods.get("#ctor") as FuncInfo[]).some(f => this.isCopyCtor(f));
      const hasCopyAssign = cls.methods.has("operator=") && (cls.methods.get("operator=") as FuncInfo[]).some(f => this.isCopyAssign(f, cls));
      const hasDtor = cls.methods.has("#dtor");
      if (!hasCtor) {
        const d = this.synthCtor(cls, false, null);
        this.addMethod(cls, "#ctor", d, cls.scope);
      }
      if (!hasCopyCtor) {
        const d = this.synthCtor(cls, true, null);
        this.addMethod(cls, "#ctor", d, cls.scope);
      }
      if (!hasCopyAssign) {
        const d = this.synthAssign(cls);
        const fn = this.addMethod(cls, "operator=", d, cls.scope);
        fn.baseAssigns = cls.bases.map(b => b.fq);
      }
      if (!hasDtor) {
        const d: FuncDecl = {
          kind: "func",
          name: [qseg(cls.short)],
          ret: null,
          params: [],
          body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
          flags: [],
          op: "~",
          ctorInit: [],
          isCtor: false,
          isDtor: true,
          isConv: false,
          isDefault: false,
          isDelete: false,
          trailing: null,
          file: "",
          line: 0,
        };
        this.addMethod(cls, "#dtor", d, cls.scope);
      }
    }

    isCopyCtor(f: FuncInfo): boolean {
      const ps = this.funcParams(f);
      return ps.length === 1 && !ps[0].variadic && ps[0].type.ref !== "" && ps[0].type.ptr === 0 && this.stripAll(ps[0].type) === f.cls;
    }

    isCopyAssign(f: FuncInfo, cls: ClsInfo): boolean {
      const ps = this.funcParams(f);
      return ps.length === 1 && !ps[0].variadic && this.stripAll(ps[0].type) === cls.fq;
    }

    // The class name a type denotes, template arguments included, in the same
    // spelling instantiateClass uses for its key.
    stripAll(t: CppType): string {
      const spelled = t.segs.map(g => (g.a.length ? g.n + "<" + g.a.map(a => a.key()).join(",") + ">" : g.n)).join("::");
      if (this.classes.has(spelled)) return spelled;
      // An empty argument list is dropped from segs (tuple<> keys as "tuple");
      // the class itself is stored as "tuple<>".
      if (t.segs.length && t.segs.every(g => !g.a.length)) {
        const empty = t.segs.map(g => g.n + "<>").join("::");
        if (this.classes.has(empty)) return empty;
      }
      if (t.name && this.classes.has(t.name)) return t.name;
      return spelled;
    }

    synthCtor(cls: ClsInfo, copy: boolean, o: null): FuncDecl {
      void o;
      const inits: CtorInit[] = [];
      for (const b of cls.bases) {
        inits.push({
          name: b.fq.split("::").map(n => qseg(n)),
          file: "",
          line: 0,
          args: copy ? [{ kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 }] : [],
        });
      }
      if (copy) {
        for (const [name] of cls.fields) {
          if (cls.fieldStatic.has(name)) continue;
          inits.push({
            name: [qseg(name)],
            file: "",
            line: 0,
            args: [
              {
                kind: "member",
                obj: { kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 },
                field: name,
                arrow: false,
                targs: [],
                qual: [],
                file: "",
                line: 0,
              },
            ],
          });
        }
      }
      const otype = typeNode(cls.fq.split("::").map(n => qseg(n)));
      otype.ref = "&";
      return {
        kind: "func",
        name: [qseg(cls.short)],
        ret: null,
        params: copy ? [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }] : [],
        body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
        flags: [],
        op: "",
        ctorInit: inits,
        isCtor: true,
        isDtor: false,
        isConv: false,
        isDefault: false,
        isDelete: false,
        trailing: null,
        file: "",
        line: 0,
      };
    }

    // An aggregate is a class that declares no constructor of its own: a braced
    // initializer then gives its members in the order they were declared.
    isAggregate(cls: ClsInfo): boolean {
      if (!cls.complete || cls.isLambda || cls.bases.length || !cls.fields.size) return false;
      for (const m of cls.decl.members) {
        if (m.kind === "func" && (m.isCtor || m.op === "()")) return false;
      }
      return true;
    }

    // The members a braced initializer fills, in declaration order.
    aggMembers(cls: ClsInfo): { name: string; type: CppType }[] {
      const out: { name: string; type: CppType }[] = [];
      for (const name of cls.fields.keys()) {
        if (cls.fieldStatic.has(name)) continue;
        out.push({ name, type: this.fieldType(cls, name) });
      }
      return out;
    }

    // The constructor a braced initializer of an aggregate needs: the first "n"
    // members, taken one by one.  It is made the first time it is asked for, so
    // that a class never carries constructors nothing calls.
    aggCtor(cls: ClsInfo, n: number): FuncInfo | null {
      const members = this.aggMembers(cls);
      if (!this.isAggregate(cls) || n < 1 || n > members.length) return null;
      if (!cls.aggCtors) cls.aggCtors = new Map();
      const hit = cls.aggCtors.get(n);
      if (hit) return hit;
      const used = members.slice(0, n);
      const params: Param[] = used.map((m, i) => ({
        name: "m" + i,
        type: typeToNode(m.type),
        def: null,
        variadic: false,
        isPack: false,
        file: "",
        line: 0,
      }));
      const inits: CtorInit[] = used.map((m, i) => ({
        name: [qseg(m.name)],
        file: "",
        line: 0,
        args: [{ kind: "id" as const, parts: [qseg("m" + i)], global: false, file: "", line: 0 }],
      }));
      const decl: FuncDecl = {
        kind: "func",
        name: [qseg(cls.short)],
        ret: null,
        params,
        body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
        flags: [],
        op: "",
        ctorInit: inits,
        isCtor: true,
        isDtor: false,
        isConv: false,
        isDefault: false,
        isDelete: false,
        trailing: null,
        file: "",
        line: 0,
      };
      const fn = this.addMethod(cls, "#ctor", decl, cls.scope);
      cls.aggCtors.set(n, fn);
      return fn;
    }

    synthAssign(cls: ClsInfo): FuncDecl {
      const stmts: Stmt[] = [];
      for (const [name] of cls.fields) {
        if (cls.fieldStatic.has(name)) continue;
        const m: Expr = {
          kind: "member",
          obj: { kind: "this", file: "", line: 0 },
          field: name,
          arrow: false,
          targs: [],
          qual: [],
          file: "",
          line: 0,
        };
        const om: Expr = {
          kind: "member",
          obj: { kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 },
          field: name,
          arrow: false,
          targs: [],
          qual: [],
          file: "",
          line: 0,
        };
        stmts.push({ kind: "expr", expr: { kind: "assign", op: "=", l: m, r: om, file: "", line: 0 }, file: "", line: 0 });
      }
      stmts.push({
        kind: "return",
        expr: { kind: "unary", op: "*", arg: { kind: "this", file: "", line: 0 }, postfix: false, file: "", line: 0 },
        file: "",
        line: 0,
      });
      const otype = typeNode(cls.fq.split("::").map(n => qseg(n)));
      otype.ref = "&";
      const ret = typeNode(cls.fq.split("::").map(n => qseg(n)));
      ret.ref = "&";
      return {
        kind: "func",
        name: [qseg("operator")],
        ret,
        op: "=",
        params: [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }],
        body: [{ kind: "compound", stmts, file: "", line: 0 }],
        flags: [],
        ctorInit: [],
        isCtor: false,
        isDtor: false,
        isConv: false,
        isDefault: false,
        isDelete: false,
        trailing: null,
        file: "",
        line: 0,
      };
    }
  }

  // A reference to an array holds the array itself: arrays are objects already,
  // so the reference is that object and needs no box of its own.
  export function isBoxedVar(t: CppType): boolean {
    if (t.ref !== "" && t.ptr === 0 && t.dims.length > 0) return false;
    return t.isBox() && !t.isFunc;
  }
}
