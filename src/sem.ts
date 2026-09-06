namespace CTJ {

export class CppType {
  name: string;
  segs: { n: string; a: CppType[] }[] = [];
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
      s += "(" + (this.ret ? this.ret.key() : "void") + (this.funcParams.length ? "," : "") +
        this.funcParams.map(x => x.key()).join(",") + (this.funcVariadic ? "..." : "") + ")";
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
  if (s === "void" || s === "bool" || s === "char" || s === "wchar_t" ||
    s === "char16_t" || s === "char32_t" || s === "float" || s === "double" ||
    s === "int" || s === "signed int" || s === "signed" || s === "auto") {
    if (s === "signed" || s === "signed int") return "int";
    return s;
  }
  if (s === "unsigned" || s === "unsigned int") return "unsigned int";
  if (s === "short" || s === "short int" || s === "signed short" || s === "signed short int") return "short";
  if (s === "unsigned short" || s === "unsigned short int") return "unsigned short";
  if (s === "long" || s === "long int" || s === "signed long" || s === "signed long int") return "long";
  if (s === "unsigned long" || s === "unsigned long int") return "unsigned long";
  if (has("long", "long") && words.includes("unsigned")) return "unsigned long long";
  if (has("long", "long")) return "long long";
  if (s === "long double") return "long double";
  if (s === "signed char") return "signed char";
  if (s === "unsigned char") return "unsigned char";
  return null;
}

export function isNumericName(n: string): boolean {
  return n !== "void" && ["bool", "char", "signed char", "unsigned char", "wchar_t",
    "char16_t", "char32_t", "short", "unsigned short", "int", "unsigned int",
    "long", "unsigned long", "long long", "unsigned long long",
    "float", "double", "long double"].includes(n);
}

export function isUnsignedName(n: string): boolean {
  return n === "unsigned char" || n === "unsigned short" || n === "unsigned int" ||
    n === "unsigned long" || n === "unsigned long long";
}

export function isIntegerName(n: string): boolean {
  return ["bool", "char", "signed char", "unsigned char", "wchar_t", "char16_t",
    "char32_t", "short", "unsigned short", "int", "unsigned int", "long",
    "unsigned long", "long long", "unsigned long long"].includes(n);
}

export interface Scope {
  ns: string[];
  cls: ClsInfo | null;
  locals: Map<string, VarInfo>[];
  fn: FuncInfo | null;
  returns: CppType[];
}

// A type spelled well enough to tell two resolutions of the same name apart,
// including the ones whose argument is an expression rather than a type.
function exKey(e: Expr): string {
  switch (e.kind) {
    case "id": return e.parts.map(s => s.n + (s.a.length ? "<" + s.a.map(tnKey).join(",") + ">" : "")).join("::");
    case "call": return exKey(e.fn) + "(" + e.args.map(exKey).join(",") + ")";
    case "member": return exKey(e.obj) + "." + e.field;
    case "unary": return e.op + exKey(e.arg);
    case "binary": return exKey(e.l) + e.op + exKey(e.r);
    case "cast": return "(" + (e.type ? tnKey(e.type) : "?") + ")" + exKey(e.arg);
    case "lit": return e.value;
    default: return e.kind;
  }
}

function tnKey(tn: TypeNode): string {
  if (tn.valueArg) return "=" + exKey(tn.valueArg);
  if (tn.decltypeOf) return "decltype(" + exKey(tn.decltypeOf) + ")";
  return tn.parts.map(s => s.n + (s.a.length ? "<" + s.a.map(tnKey).join(",") + ">" : "")).join("::")
    + "*".repeat(tn.ptr) + tn.ref + (tn.cnst ? " const" : "");
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
  // Position among the overloads of the same name, so that instances of two
  // different templates do not share a cache entry or an emitted name.
  ovl?: number;
}

export type Sym =
  | { k: "class"; cls: ClsInfo }
  | { k: "func"; fns: FuncInfo[] }
  | { k: "var"; v: VarInfo }
  | { k: "enum"; e: EnumInfo }
  | { k: "enumval"; e: EnumInfo; item: string }
  | { k: "ns"; fq: string }
  | { k: "typedef"; fq: string }
  | { k: "tmpl"; t: TmplInfo }
  | { k: "builtin"; name: string };

export interface Ann {
  t: CppType | null;
  sym: Sym | null;
  call: FuncInfo | { builtin: string } | null;
  conv: { kind: string; fn: FuncInfo } | null;
  convs: ({ kind: string; fn: FuncInfo } | null)[];
  caps: { name: string; mode: string; v: VarInfo }[];
  var: VarInfo | null;
  arrowCall: FuncInfo | null;
  initCall: FuncInfo | null;
  copyCtor: FuncInfo | null;
  range: { beginFn: FuncInfo; endFn: FuncInfo; neFn: FuncInfo; incFn: FuncInfo; starFn: FuncInfo } | null;
  needsThis: boolean;
  isType: boolean;
}

export function blankAnn(): Ann {
  return { t: null, sym: null, call: null, conv: null, convs: [], caps: [], var: null, arrowCall: null, initCall: null, copyCtor: null, range: null, needsThis: false, isType: false };
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
  pendingOOL: { tmpl: TmplInfo; key: string; cls: ClsInfo; args: CppType[] }[] = [];
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
    return { ns: s.ns.slice(), cls: s.cls, locals: [], fn: null, returns: [] };
  }

  memberFq(scope: Scope, name: string): string {
    if (scope.cls) return scope.cls.fq + "::" + name;
    return [...scope.ns, name].join("::");
  }

  collectClass(d: ClassDecl, scope: Scope): void {
    if (d.name.startsWith("$") && d.isDeclOnly) return;
    let fq: string;
    if (d.name.includes("::")) {
      fq = d.name;
    } else if (scope.cls) {
      fq = scope.cls.fq + "::" + d.name;
    } else {
      fq = [...scope.ns, d.name].join("::");
    }
    let cls = this.classes.get(fq);
    if (d.isDeclOnly && !d.specArgs.length) {
      if (!cls) {
        cls = this.blankCls(fq, d.name, d, scope);
        cls.complete = false;
        this.classes.set(fq, cls);
      }
      if (scope.cls) scope.cls.nested.set(d.name, fq);
      return;
    }
    if (!cls) {
      cls = this.blankCls(fq, d.name, d, scope);
      this.classes.set(fq, cls);
    }
    cls.decl = d;
    cls.complete = true;
    cls.isUnion = d.cls === "union";
    if (scope.cls) scope.cls.nested.set(d.name, fq);
    const sub: Scope = { ns: scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
    cls.bases = [];
    for (const b of d.bases) {
      // A base of a nested class can name a member of the enclosing one.
      const bfq = this.resolveClassName(b.name, sub);
      cls.bases.push({ fq: bfq, access: b.access, isVirtual: b.isVirtual });
    }
    this.collect(d.members, sub);
  }

  // The name a class declares itself with: an instance of a template is called
  // by the template's short name, the arguments belong to its key.
  declaredName(c: ClsInfo): string {
    return c.fromTmpl ? last(c.fromTmpl.split("::")) : c.short;
  }

  blankCls(fq: string, short: string, decl: ClassDecl, scope: Scope): ClsInfo {
    return {
      fq, short, mangled: mangleType(fq), decl, scope: this.snapScope(scope),
      bases: [], fields: new Map(), fieldTypes: new Map(), fieldStatic: new Set(),
      methods: new Map(), nested: new Map(), usingBase: new Map(),
      isUnion: false, complete: false, fromTmpl: "", instArgs: [],
      referenced: false, synthDone: false, isLambda: false,
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

  methodKey(d: FuncDecl, short: string): string {
    if (d.isCtor) return "#ctor";
    if (d.isDtor) return "#dtor";
    if (d.isConv) return "#conv";
    if (d.op) return "operator" + d.op;
    return short;
  }

  addMethod(cls: ClsInfo, short: string, d: FuncDecl, scope: Scope): FuncInfo {
    const key = this.methodKey(d, short);
    const sc = this.snapScope(scope);
    sc.cls = cls;
    const list = cls.methods.get(key) || [];
    for (const f of list) {
      if (!f.decl.body && d.body) {
        f.decl = d;
        f.scope = sc;
        return f;
      }
    }
    const fn: FuncInfo = {
      fq: cls.fq + "::" + key, short: key, mangled: "",
      decl: d, scope: sc, paramCache: null, retCache: null,
      isMethod: true, cls: cls.fq,
      isCtor: d.isCtor, isDtor: d.isDtor, isConv: d.isConv,
      isVirtual: d.flags.includes("virtual"), isPure: d.flags.includes("pure"),
      isStatic: d.flags.includes("static"), isConst: d.flags.includes("const"),
      isDefault: d.isDefault, isDelete: d.isDelete, op: d.op,
      analyzed: false, referenced: false, fromTmpl: "", baseAssigns: [],
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
          f.decl = d;
          f.scope = this.snapScope(declScope);
          return f;
        }
      }
    }
    const key = scope.cls ? this.methodKey(d, short) : (d.op ? "operator" + d.op : short);
    const fn: FuncInfo = {
      fq: scope.cls ? scope.cls.fq + "::" + key : fq, short: key, mangled: "",
      decl: d, scope: this.snapScope(declScope), paramCache: null, retCache: null,
      isMethod: !!scope.cls, cls: scope.cls ? scope.cls.fq : "",
      isCtor: d.isCtor, isDtor: d.isDtor, isConv: d.isConv,
      isVirtual: d.flags.includes("virtual"), isPure: d.flags.includes("pure"),
      isStatic: d.flags.includes("static"), isConst: d.flags.includes("const"),
      isDefault: d.isDefault, isDelete: d.isDelete, op: d.op,
      analyzed: false, referenced: false, fromTmpl: "", baseAssigns: [],
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
        fq, short, mangled: mangleType(fq), decl: d, scope: this.snapScope(scope),
        typeCache: null, storage: "plain",
        isGlobal: true, isStatic: d.flags.includes("static"),
        isParam: false, isField: false, lifted: false, referenced: false,
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
      const ownerParts = (inner.op ? inner.name : inner.name.slice(0, -1))
        .filter(s => s.n !== "operator");
      fq = ownerParts.length
        ? this.ownerFq(ownerParts, scope) + "::" + short
        : this.memberFq(scope, short);
    } else if (inner.kind === "var") {

      // The definition of a static data member, written outside the class.
      kind = "data";
      const short = last(inner.name.map(s => s.n));
      const ownerParts = inner.name.slice(0, -1);
      fq = ownerParts.length
        ? this.ownerFq(ownerParts, scope) + "::" + short
        : this.memberFq(scope, short);
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
          fq, kind, tparams: [], decl: inner, scope: this.snapScope(scope),
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
    this.registerTmpl({ fq, kind, tparams, decl: inner, scope: this.snapScope(scope), specs: prev ? prev.specs : [], partials: prev ? prev.partials : [] });
  }

  registerTmpl(t: TmplInfo): void {
    this.tmpls.set(t.fq, t);
    if (t.kind !== "func") return;
    const list = this.tmplOverloads.get(t.fq) || [];
    const sig = this.tmplSig(t);
    const i = list.findIndex(x => this.tmplSig(x) === sig);
    // A definition following a declaration is the same template, not an overload.
    if (i >= 0) { t.ovl = list[i].ovl; list[i] = t; }
    else { t.ovl = list.length; list.push(t); }
    this.tmplOverloads.set(t.fq, list);
  }

  tmplSig(t: TmplInfo): string {
    const d = t.decl as FuncDecl;
    const ps = (d.params || []).map(p => JSON.stringify(p.type.parts.map(s => s.n + s.a.length))
      + p.type.ptr + p.type.ref + (p.isPack ? "..." : "")).join(",");
    const tps = t.tparams.map(x => x.kind + (x.isPack ? "..." : "")).join(",");
    return [tps, ps, d.op || "", d.flags.includes("const") ? "c" : ""].join("|");
  }

  // Every template declared under this name, for overload resolution.
  // Every template, overloads included: "tmpls" keeps one entry per name, so
  // scanning it alone would see only the last "operator!=" of a namespace.
  allTmpls(): TmplInfo[] {
    const out: TmplInfo[] = [];
    const seen = new Set<TmplInfo>();
    for (const list of this.tmplOverloads.values()) {
      for (const t of list) if (!seen.has(t)) { seen.add(t); out.push(t); }
    }
    for (const t of this.tmpls.values()) if (!seen.has(t)) { seen.add(t); out.push(t); }
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
      else if (ch === ":" && fq[i + 1] === ":" && depth === 0) { cut = i; i++; }
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
    }
    for (let i = scope.ns.length; i >= 0; i--) {
      const pre = scope.ns.slice(0, i).join("::");
      const s = this.lookupInNs(pre, name, new Set());
      if (s) return s;
    }
    return this.lookupBuiltin(name);
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
    if (name === "__ctj_js" || name === "__ctj_php") return { k: "builtin", name };
    return null;
  }

  fieldVar(cls: ClsInfo, name: string, fd: VarDecl): VarInfo {
    return {
      fq: cls.fq + "::" + name, short: name, mangled: name,
      decl: fd, scope: this.memberScope(cls), typeCache: null, storage: "plain",
      isGlobal: false, isStatic: cls.fieldStatic.has(name),
      isParam: false, isField: true, lifted: false, referenced: false,
    };
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
    // The injected class name: inside a class its own name, written without
    // arguments, stands for the class itself rather than for its template.
    if (!global && !parts[0].a.length) {
      for (let c = scope.cls; c; c = c.scope.cls) {
        if (this.declaredName(c) === parts[0].n) return { k: "class", cls: c };
      }
    }
    let sym: Sym | null;
    let idx = 0;
    if (global) {
      sym = this.lookupGlobalFirst(parts[0].n);
    } else {
      sym = this.lookupFirst(parts[0].n, scope);
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
      return this.resolveSym(parts, global, { ns: scope.ns.slice(), cls: null, locals: [], fn: null, returns: [] });
    }
    return sym;
  }

  lookupGlobalFirst(name: string): Sym | null {
    const s = this.lookupInNs("", name, new Set());
    if (s) return s;
    return this.lookupBuiltin(name);
  }

  applySegArgs(sym: Sym, seg: QSeg, scope: Scope): Sym | null {
    if (!seg.a.length) return sym;
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
        def: p.def, variadic: p.variadic, isPack: p.isPack,
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
        fq: fn.fq + "::" + p.name, short: p.name, mangled: p.name, lifted: false,
        decl: {
          kind: "var", name: [qseg(p.name)], type: typeNode([]), init: null, directInit: null,
          flags: [], bitfield: null, isParam: true, file: fn.decl.file, line: fn.decl.line,
        },
        scope: s, typeCache: p.type, storage: "plain",
        isGlobal: false, isStatic: false, isParam: true, isField: false, referenced: false,
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
  // instead of exhausting the stack.
  resolving: string[] = [];

  resolveTypeNode(tn: TypeNode, scope: Scope): CppType {
    const key = tnKey(tn);
    const at = this.resolving.indexOf(key);
    this.resolving.push(key);
    if (at >= 0) {
      const loop = this.resolving.slice(at).join(" -> ");
      this.resolving.length = 0;
      this.fail("cyclic type resolution: " + loop, tn);
    }
    try {
      return this.resolveTypeNodeInner(tn, scope);
    } finally {
      this.resolving.pop();
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
        const t = CppType.basic(canon);
        this.applyTypeSuffix(t, tn, scope);
        return t;
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
      base.segs = [{ n: s.cls.fromTmpl || s.cls.fq, a: s.cls.instArgs.slice() }];
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
      base.isFunc = true;
      base.ret = new CppType(base.name);
      base.ret.segs = base.segs;
      base.funcParams = tn.func.params.map(p => this.resolveTypeNode(p, scope));
      base.funcVariadic = tn.func.variadic;
      base.name = "__func";
      base.segs = [{ n: "__func", a: [] }];
    }
  }

  expandTypedef(fq: string, seen: Set<string>): CppType {
    if (seen.has(fq)) this.fail(`cyclic typedef '${fq}'`);
    if (seen.size > 100) this.fail(`typedef expansion too deep '${fq}'`);
    seen.add(fq);
    const td = this.typedefs.get(fq);
    if (!td) this.fail(`unknown typedef '${fq}'`);
    const target = (td as { target: TypeNode }).target;
    if (target.parts.length === 1 && !target.parts[0].a.length && !target.ptr && !target.ref &&
      !target.func && !target.dims.length && !target.decltypeOf && !target.valueArg) {
      const s = this.resolveSym(target.parts, target.global, (td as { scope: Scope }).scope);
      if (s && s.k === "typedef") {
        const t = this.expandTypedef(s.fq, seen);
        seen.delete(fq);
        return t;
      }
    }
    const t = this.resolveTypeNode(target, (td as { scope: Scope }).scope);
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
      for (const p of (tmpl as TmplInfo).partials || []) {
        const env = this.matchPartial(p, full, tmpl as TmplInfo);
        if (env) return this.instantiateClassDecl(key, tmpl as TmplInfo, substDecl(p.decl, env) as ClassDecl, full, env, t);
      }
      const env = this.buildEnv((tmpl as TmplInfo).tparams, full);
      const decl = substDecl((tmpl as TmplInfo).decl, env) as ClassDecl;
      return this.instantiateClassDecl(key, tmpl as TmplInfo, decl, full, env, t);
    } finally {
      this.instStack.pop();
    }
  }

  // Match the argument list of a partial specialization against the arguments
  // of an instantiation; the result substitutes into the specialization.
  matchPartial(p: { tparams: TParam[]; specArgs: TypeNode[]; decl: Decl }, args: CppType[], tmpl: TmplInfo): SubstEnv | null {
    // Every argument has to be accounted for, so the arities must agree - a
    // trailing pack being the one exception, it takes whatever is left over.
    const last = p.specArgs.length ? p.specArgs[p.specArgs.length - 1] : null;
    const packTn = last && last.packExpand ? last : null;
    const fixed = p.specArgs.length - (packTn ? 1 : 0);
    if (packTn ? fixed > args.length : p.specArgs.length !== args.length) return null;
    const env = blankSubstEnv();
    const names = new Set(p.tparams.map(x => x.name));
    for (let i = 0; i < fixed; i++) {
      if (!this.matchTypeArg(p.specArgs[i], args[i], names, env, tmpl.scope)) return null;
    }
    if (packTn && packTn.parts.length) env.packs.set(packTn.parts[0].n, args.slice(fixed));
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
    const pack = lp && lp.packExpand && lp.parts.length === 1 && !lp.parts[0].a.length && names.has(lp.parts[0].n)
      ? lp.parts[0].n : null;
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
      // The argument may be an expression over parameters matched earlier, as
      // in "conditional<_B1::value, ...>", so it is substituted first.
      const v = constEval(this, substExpr(tn.valueArg, env), scope);
      return typeof v === "number" && t.name === "__value" + Math.trunc(v);
    }
    if (!tn.parts.length) return false;
    const first = tn.parts[0].n;
    if (tn.parts.length === 1 && !tn.parts[0].a.length && names.has(first)) {
      // "_Res(_Args...)" is a function type: only a function argument matches,
      // and its parameter list has to line up with the pattern.
      if (tn.func) return this.matchFuncArg(tn, t, names, env, scope, first);
      if (t.ptr < tn.ptr || (tn.ref && tn.ref !== t.ref)) return false;
      // "_Tp[]" and "_Tp[_Size]" only match arrays; without this the array
      // specialization of remove_all_extents is picked for a plain int.
      if (tn.dims.length !== t.dims.length) return false;
      if (env.types.has(first)) return (env.types.get(first) as CppType).key() === t.key();
      const c = new CppType(t.name);
      c.segs = t.segs;
      c.ptr = t.ptr - tn.ptr;
      c.dims = t.dims.slice();
      c.isFunc = t.isFunc;
      c.ret = t.ret;
      c.funcParams = t.funcParams;
      c.funcVariadic = t.funcVariadic;
      env.types.set(first, c);
      return true;
    }
    if (tn.parts[0].a.length && t.segs.length) {
      const ta = t.segs[0].a;
      if (ta.length !== tn.parts[0].a.length) return false;
      for (let i = 0; i < ta.length; i++) {
        if (!this.matchTypeArg(tn.parts[0].a[i], ta[i], names, env, scope)) return false;
      }
      return true;
    }
    return this.resolveTypeNode(tn, scope).key() === t.key();
  }

  instantiateClassDecl(key: string, tmpl: TmplInfo, decl: ClassDecl, args: CppType[], env: SubstEnv, t: At | null): ClsInfo {
    void env;
    void t;
    const cls = this.blankCls(key, last(key.split("::")), decl, tmpl.scope);
    cls.complete = true;
    cls.fromTmpl = tmpl.fq;
    cls.instArgs = args;
    cls.isUnion = decl.cls === "union";
    cls.mangled = mangleType(key);
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
    if (this.collecting) this.pendingOOL.push({ tmpl, key, cls, args });
    else this.instantiateOutOfLineMembers(tmpl, key, cls, args);
    this.markCls(key);
    return cls;
  }

  flushOutOfLine(): void {
    this.collecting = false;
    const list = this.pendingOOL;
    this.pendingOOL = [];
    for (const p of list) this.instantiateOutOfLineMembers(p.tmpl, p.key, p.cls, p.args);
  }

  instantiateOutOfLineMembers(tmpl: TmplInfo, key: string, cls: ClsInfo, args: CppType[]): void {
    const prefix = tmpl.fq + "::";
    const outer = tmpl.tparams.length;
    for (const t of this.allTmpls()) {
      if (!t.fq.startsWith(prefix)) continue;
      const env = this.buildEnv(tmpl.tparams, args);
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
            /* the emitter reports a value it cannot evaluate */
          }
        }
      } else if (t.kind === "func" && !rest.length) {
        const decl = substDecl(t.decl, env) as FuncDecl;
        this.annDefaults(decl, this.memberScope(owner));
        const exist = this.findMethod(owner, decl);
        if (exist && !exist.decl.body && decl.body) {
          exist.decl = decl;
          exist.scope = this.memberScope(owner);
        } else if (!exist) {
          this.addMethod(owner, this.methodShort(decl), decl, this.memberScope(owner));
        }
      } else {
        const decl = substDecl(t.decl, env);
        // registerTmpl, not tmpls.set: the declaration of this member that the
        // class body carries is the same template, and the definition replaces it.
        // The member's own scope: the class's typedefs are visible in an
        // out-of-line definition.
        this.registerTmpl({ fq: newFq, kind: t.kind, tparams: rest, decl, scope: this.memberScope(owner), specs: [] });
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
    return parts.length > 1 ? head + "::" + parts.slice(1).map(s => s.n).join("::") : head;
  }

  resolveOwnerPath(parts: QSeg[], scope: Scope): string | null {
    let owner: Sym | null = null;
    try {
      owner = this.resolveSym(parts.map(s => qseg(s.n)), false, scope);
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

  findMethod(cls: ClsInfo, d: FuncDecl): FuncInfo | null {
    const key = this.methodKey(d, this.methodShort(d));
    const list = cls.methods.get(key);
    if (!list) return null;
    for (const f of list) {
      if (f.decl.params.length === d.params.length) return f;
    }
    return list[0] || null;
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
      try { typeOf(this, pd.def, scope); } catch { /* the annotator retries */ }
    }
  }

  instantiateFunc(tmpl: TmplInfo, args: CppType[], given: Map<string, CppType>): FuncInfo {
    // Overloads of one name are different functions: without the position of
    // this one among them, "operator!=" for reverse_iterator would stand in
    // for the one for move_iterator.
    const tag = tmpl.ovl ? "#" + tmpl.ovl : "";
    const key = tmpl.fq + tag + "<" + args.map(a => a.key()).join(",") + ">";
    const exist = this.funcInsts.get(key);
    if (exist) return exist;
    const env = this.buildEnv(tmpl.tparams, args);
    for (const [k, v] of given) {
      if (!env.types.has(k)) env.types.set(k, v);
    }
    const decl = substDecl(tmpl.decl, env) as FuncDecl;
    this.annDefaults(decl, this.snapScope(tmpl.scope));
    const fn: FuncInfo = {
      fq: key, short: last(tmpl.fq.split("::")), mangled: mangleType(key),
      decl, scope: this.snapScope(tmpl.scope), paramCache: null, retCache: null,
      isMethod: tmpl.scope.cls !== null, cls: tmpl.scope.cls ? tmpl.scope.cls.fq : "",
      isCtor: decl.isCtor, isDtor: decl.isDtor, isConv: decl.isConv,
      isVirtual: false, isPure: false,
      isStatic: decl.flags.includes("static"), isConst: decl.flags.includes("const"),
      isDefault: false, isDelete: decl.isDelete, op: decl.op,
      analyzed: false, referenced: false, fromTmpl: tmpl.fq, baseAssigns: [],
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

  fillDefaultArgs(tmpl: TmplInfo, args: CppType[], scope: Scope, t: At | null): CppType[] {
    const full = args.slice();
    const env = this.buildEnvPartial(tmpl.tparams, full);
    for (let i = full.length; i < tmpl.tparams.length; i++) {
      const tp = tmpl.tparams[i];
      if (tp.isPack) break;
      if (!tp.def) this.fail(`too few template arguments for '${tmpl.fq}'`, t || undefined);
      if (tp.kind === "type" || tp.kind === "template") {
        const tn = substTypeNode(tp.def as TypeNode, env);
        const ty = this.resolveTypeNode(tn, scope);
        full.push(ty);
        env.types.set(tp.name, ty);
      } else {
        const ex = substExpr(tp.def as Expr, env);
        const v = constEval(this, ex, scope);
        if (typeof v !== "number") this.fail(`non-constant template argument for '${tp.name}'`, t || undefined);
        full.push(CppType.basic("__value" + Math.trunc(v)));
        env.values.set(tp.name, Math.trunc(v));
      }
    }
    return full;
  }

  buildEnv(tparams: TParam[], args: CppType[]): SubstEnv {
    const env: SubstEnv = { types: new Map(), packs: new Map(), values: new Map(), valuePacks: new Map(), packNames: new Map(), packOf: new Map() };
    let ai = 0;
    for (const tp of tparams) {
      if (tp.isPack) {
        if (tp.kind === "nontype") env.valuePacks.set(tp.name, args.slice(ai).map(a => parseInt(a.name.replace("__value", "") || "0", 10)));
        else env.packs.set(tp.name, args.slice(ai));
        ai = args.length;
      } else {
        const a = args[ai++];
        if (!a) continue;
        if (tp.kind === "nontype") env.values.set(tp.name, parseInt(a.name.replace("__value", "") || "0", 10));
        else env.types.set(tp.name, a);
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
    const hasCopyAssign = cls.methods.has("operator=") &&
      (cls.methods.get("operator=") as FuncInfo[]).some(f => this.isCopyAssign(f, cls));
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
        kind: "func", name: [qseg(cls.short)], ret: null, params: [],
        body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
        flags: [], op: "~", ctorInit: [], isCtor: false, isDtor: true,
        isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
      };
      this.addMethod(cls, "#dtor", d, cls.scope);
    }
  }

  isCopyCtor(f: FuncInfo): boolean {
    const ps = this.funcParams(f);
    return ps.length === 1 && !ps[0].variadic && ps[0].type.ref !== "" &&
      ps[0].type.ptr === 0 && this.stripAll(ps[0].type) === f.cls;
  }

  isCopyAssign(f: FuncInfo, cls: ClsInfo): boolean {
    const ps = this.funcParams(f);
    return ps.length === 1 && !ps[0].variadic && this.stripAll(ps[0].type) === cls.fq;
  }

  // The class name a type denotes, template arguments included, in the same
  // spelling instantiateClass uses for its key.
  stripAll(t: CppType): string {
    return t.segs.map(g => g.a.length ? g.n + "<" + g.a.map(a => a.key()).join(",") + ">" : g.n).join("::");
  }

  synthCtor(cls: ClsInfo, copy: boolean, o: null): FuncDecl {
    void o;
    const inits: CtorInit[] = [];
    for (const b of cls.bases) {
      inits.push({
        name: b.fq.split("::").map(n => qseg(n)), file: "", line: 0,
        args: copy ? [{ kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 }] : [],
      });
    }
    if (copy) {
      for (const [name] of cls.fields) {
        if (cls.fieldStatic.has(name)) continue;
        inits.push({
          name: [qseg(name)], file: "", line: 0,
          args: [{
            kind: "member", obj: { kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 },
            field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
          }],
        });
      }
    }
    const otype = typeNode(cls.fq.split("::").map(n => qseg(n)));
    otype.ref = "&";
    return {
      kind: "func", name: [qseg(cls.short)], ret: null,
      params: copy ? [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }] : [],
      body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
      flags: [], op: "", ctorInit: inits, isCtor: true, isDtor: false,
      isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
    };
  }

  synthAssign(cls: ClsInfo): FuncDecl {
    const stmts: Stmt[] = [];
    for (const [name] of cls.fields) {
      if (cls.fieldStatic.has(name)) continue;
      const m: Expr = {
        kind: "member", obj: { kind: "this", file: "", line: 0 },
        field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
      };
      const om: Expr = {
        kind: "member", obj: { kind: "id", parts: [qseg("o")], global: false, file: "", line: 0 },
        field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
      };
      stmts.push({ kind: "expr", expr: { kind: "assign", op: "=", l: m, r: om, file: "", line: 0 }, file: "", line: 0 });
    }
    stmts.push({
      kind: "return",
      expr: { kind: "unary", op: "*", arg: { kind: "this", file: "", line: 0 }, postfix: false, file: "", line: 0 },
      file: "", line: 0,
    });
    const otype = typeNode(cls.fq.split("::").map(n => qseg(n)));
    otype.ref = "&";
    const ret = typeNode(cls.fq.split("::").map(n => qseg(n)));
    ret.ref = "&";
    return {
      kind: "func", name: [qseg("operator")], ret, op: "=",
      params: [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }],
      body: [{ kind: "compound", stmts, file: "", line: 0 }],
      flags: [], ctorInit: [], isCtor: false, isDtor: false,
      isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
    };
  }
}

export function isBoxedVar(t: CppType): boolean {
  return t.isBox() && !t.isFunc;
}

// Pointers and references keep a token of their own: folding every
// punctuation into "_" made "T<int&>" and "T<int>" come out as one identifier,
// which the target language rejects as a duplicate declaration.
export function mangleType(fq: string): string {
  return fq
    .replace(/&&/g, "_RR_")
    .replace(/&/g, "_R_")
    .replace(/\*/g, "_P_")
    .replace(/[^A-Za-z0-9]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

}
