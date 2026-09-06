namespace CTJ {

export interface At {
  file: string;
  line: number;
}

export function at(t: Token): At {
  return { file: t.file, line: t.line };
}

export interface QSeg {
  n: string;
  a: TypeNode[];
}

export function qseg(n: string, a: TypeNode[] = []): QSeg {
  return { n, a };
}

export interface TypeNode extends At {
  kind: "type";
  parts: QSeg[];
  global: boolean;
  ptr: number;
  ref: "" | "&" | "&&";
  cnst: boolean;
  dims: Expr[];
  func: { params: TypeNode[]; variadic: boolean } | null;
  decltypeOf: Expr | null;
  packExpand: boolean;
  valueArg: Expr | null;
}

export function typeNode(parts: QSeg[], a?: At): TypeNode {
  return {
    kind: "type", parts, global: false, ptr: 0, ref: "",
    cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null,
    file: a ? a.file : "", line: a ? a.line : 0,
  };
}

export interface Param extends At {
  name: string;
  type: TypeNode;
  def: Expr | null;
  variadic: boolean;
  isPack: boolean;
}

export interface CtorInit extends At {
  name: QSeg[];
  args: Expr[];
}

export interface VarDecl extends At {
  kind: "var";
  name: QSeg[];
  type: TypeNode;
  init: Expr | null;
  directInit: Expr[] | null;
  flags: string[];
  bitfield: Expr | null;
  isParam: boolean;
}

export interface FuncDecl extends At {
  kind: "func";
  name: QSeg[];
  ret: TypeNode | null;
  params: Param[];
  body: Stmt[] | null;
  flags: string[];
  op: string;
  ctorInit: CtorInit[];
  isCtor: boolean;
  isDtor: boolean;
  isConv: boolean;
  isDefault: boolean;
  isDelete: boolean;
  trailing: TypeNode | null;
}

export interface BaseSpec extends At {
  name: QSeg[];
  access: string;
  isVirtual: boolean;
}

export interface ClassDecl extends At {
  kind: "class";
  name: string;
  cls: string;
  bases: BaseSpec[];
  members: Decl[];
  isDeclOnly: boolean;
  specArgs: TypeNode[];
  isPartialSpec: boolean;
}

export interface EnumItem extends At {
  name: string;
  value: Expr | null;
}

export interface EnumDecl extends At {
  kind: "enum";
  name: string;
  scoped: boolean;
  base: TypeNode | null;
  items: EnumItem[];
  isDeclOnly: boolean;
}

export interface NamespaceDecl extends At {
  kind: "ns";
  name: string;
  aliasOf: QSeg[];
  decls: Decl[] | null;
  isInline: boolean;
}

export interface UsingDecl extends At {
  kind: "using";
  name: QSeg[];
  isNs: boolean;
}

export interface TypedefDecl extends At {
  kind: "typedef";
  name: string;
  type: TypeNode;
}

export interface LinkageDecl extends At {
  kind: "linkage";
  lang: string;
  decls: Decl[];
}

export interface StaticAssertDecl extends At {
  kind: "static_assert";
  cond: Expr;
  msg: string;
}

export interface AccessDecl extends At {
  kind: "access";
  access: string;
}

export interface FriendDecl extends At {
  kind: "friend";
  decl: Decl | null;
}

export interface EmptyDecl extends At {
  kind: "empty";
}

export interface TParam extends At {
  kind: string;
  name: string;
  type: TypeNode | null;
  def: TypeNode | Expr | null;
  isPack: boolean;
}

export interface TemplateDecl extends At {
  kind: "template";
  tparams: TParam[];
  decl: Decl | null;
  isSpec: boolean;
  specArgs: TypeNode[];
  isExplicit: boolean;
}

export type Decl =
  | VarDecl | FuncDecl | ClassDecl | EnumDecl | NamespaceDecl | UsingDecl
  | TypedefDecl | LinkageDecl | StaticAssertDecl | AccessDecl | FriendDecl
  | TemplateDecl | EmptyDecl;

export interface Compound extends At {
  kind: "compound";
  stmts: Stmt[];
}

export interface ExprStmt extends At {
  kind: "expr";
  expr: Expr;
}

export interface DeclStmt extends At {
  kind: "decl";
  decl: Decl;
}

export interface IfStmt extends At {
  kind: "if";
  cond: Expr | VarDecl;
  then: Stmt;
  els: Stmt | null;
}

export interface SwitchStmt extends At {
  kind: "switch";
  cond: Expr | VarDecl;
  body: Stmt;
}

export interface CaseStmt extends At {
  kind: "case";
  value: Expr | null;
  stmt: Stmt;
}

export interface WhileStmt extends At {
  kind: "while";
  cond: Expr | VarDecl;
  body: Stmt;
}

export interface DoStmt extends At {
  kind: "do";
  cond: Expr;
  body: Stmt;
}

export interface ForStmt extends At {
  kind: "for";
  init: Stmt | null;
  cond: Expr | null;
  step: Expr | null;
  body: Stmt;
}

export interface RangeFor extends At {
  kind: "rangefor";
  vdecl: VarDecl;
  range: Expr;
  body: Stmt;
}

export interface BreakStmt extends At {
  kind: "break";
}

export interface ContinueStmt extends At {
  kind: "continue";
}

export interface GotoStmt extends At {
  kind: "goto";
  label: string;
}

export interface LabelStmt extends At {
  kind: "label";
  label: string;
  stmt: Stmt;
}

export interface ReturnStmt extends At {
  kind: "return";
  expr: Expr | null;
}

export interface CatchBlock extends At {
  vdecl: VarDecl | null;
  ellipsis: boolean;
  body: Stmt;
}

export interface TryStmt extends At {
  kind: "try";
  body: Stmt;
  handlers: CatchBlock[];
}

export interface ThrowStmt extends At {
  kind: "throw";
  expr: Expr | null;
}

export interface NullStmt extends At {
  kind: "null";
}

export type Stmt =
  | Compound | ExprStmt | DeclStmt | IfStmt | SwitchStmt | CaseStmt
  | WhileStmt | DoStmt | ForStmt | RangeFor | BreakStmt | ContinueStmt
  | GotoStmt | LabelStmt | ReturnStmt | TryStmt | ThrowStmt | NullStmt;

export interface IdExpr extends At {
  kind: "id";
  parts: QSeg[];
  global: boolean;
}

export interface LitExpr extends At {
  kind: "lit";
  lkind: string;
  value: string;
}

export interface ThisExpr extends At {
  kind: "this";
}

export interface CallExpr extends At {
  kind: "call";
  fn: Expr;
  args: Expr[];
}

export interface IndexExpr extends At {
  kind: "index";
  arr: Expr;
  idx: Expr;
}

export interface MemberExpr extends At {
  kind: "member";
  obj: Expr;
  field: string;
  arrow: boolean;
  targs: TypeNode[];
  qual: QSeg[];
}

export interface UnaryExpr extends At {
  kind: "unary";
  op: string;
  arg: Expr;
  postfix: boolean;
}

export function incKind(u: UnaryExpr): "++" | "--" | null {
  if (u.op === "++" || u.op === "++post") return "++";
  if (u.op === "--" || u.op === "--post") return "--";
  return null;
}

// The parser spells both forms "++"/"--" and tells them apart with `postfix`.
export function isPostfix(u: UnaryExpr): boolean {
  return u.postfix || u.op === "++post" || u.op === "--post";
}

export interface BinaryExpr extends At {
  kind: "binary";
  op: string;
  l: Expr;
  r: Expr;
}

export interface AssignExpr extends At {
  kind: "assign";
  op: string;
  l: Expr;
  r: Expr;
}

export interface CondExpr extends At {
  kind: "cond";
  c: Expr;
  a: Expr;
  b: Expr;
}

export interface NewExpr extends At {
  kind: "new";
  placement: Expr[];
  type: TypeNode;
  args: Expr[];
  isArray: boolean;
}

export interface DeleteExpr extends At {
  kind: "delete";
  arg: Expr;
  isArray: boolean;
}

export interface CastExpr extends At {
  kind: "cast";
  ckind: string;
  type: TypeNode | null;
  fn: Expr | null;
  arg: Expr;
}

export interface SizeofExpr extends At {
  kind: "sizeof";
  isType: boolean;
  type: TypeNode | null;
  expr: Expr | null;
  packName: string;
  isAlignof: boolean;
}

export interface TypeidExpr extends At {
  kind: "typeid";
  isType: boolean;
  type: TypeNode | null;
  expr: Expr | null;
}

export interface LambdaCapture extends At {
  mode: string;
  name: string;
}

export interface LambdaExpr extends At {
  kind: "lambda";
  captures: LambdaCapture[];
  defCapture: string;
  params: Param[];
  ret: TypeNode | null;
  body: Stmt[];
  mutable: boolean;
}

export interface InitListExpr extends At {
  kind: "initlist";
  items: Expr[];
}

export interface StmtExpr extends At {
  kind: "stmtexpr";
  stmts: Stmt[];
}

export interface NoexceptExpr extends At {
  kind: "noexcept";
  expr: Expr | null;
}

export type Expr =
  | IdExpr | LitExpr | ThisExpr | CallExpr | IndexExpr | MemberExpr
  | UnaryExpr | BinaryExpr | AssignExpr | CondExpr | NewExpr | DeleteExpr
  | CastExpr | SizeofExpr | TypeidExpr | LambdaExpr | InitListExpr
  | StmtExpr | NoexceptExpr;

export interface TranslationUnit extends At {
  decls: Decl[];
}

}
