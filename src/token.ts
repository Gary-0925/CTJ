namespace CTJ {

export type Tok =
  | "ident" | "number" | "string" | "char" | "directive" | "eof"
  | "(" | ")" | "[" | "]" | "{" | "}" | ";" | "," | "." | "?" | ":"
  | "+" | "-" | "*" | "/" | "%" | "^" | "&" | "|" | "~" | "!" | "="
  | "<" | ">" | "+=" | "-=" | "*=" | "/=" | "%=" | "^=" | "&=" | "|="
  | "<<" | ">>" | "<<=" | ">>=" | "==" | "!=" | "<=" | ">=" | "&&" | "||"
  | "++" | "--" | "->" | "->*" | ".*" | "::" | "..." | "#" | "##" | "<=>";

export interface Token {
  t: Tok;
  v: string;
  file: string;
  line: number;
  col: number;
}

export function tok(t: Tok, v: string, file = "", line = 0, col = 0): Token {
  return { t, v, file, line, col };
}

export const KEYWORDS = new Set([
  "alignas", "alignof", "asm", "auto", "bool", "break", "case", "catch",
  "char", "char16_t", "char32_t", "class", "const", "constexpr", "const_cast",
  "continue", "decltype", "default", "delete", "do", "double", "dynamic_cast",
  "else", "enum", "explicit", "export", "extern", "false", "float", "for",
  "friend", "goto", "if", "inline", "int", "long", "mutable", "namespace",
  "new", "noexcept", "nullptr", "operator", "private", "protected", "public",
  "register", "reinterpret_cast", "return", "short", "signed", "sizeof",
  "static", "static_assert", "static_cast", "struct", "switch", "template",
  "this", "thread_local", "throw", "true", "try", "typedef", "typeid",
  "typename", "union", "unsigned", "using", "virtual", "void", "volatile",
  "wchar_t", "while",
  "__asm__", "__asm", "__attribute__", "__attribute", "__extension__",
  "__restrict__", "__restrict", "__volatile__", "__const__", "__inline__",
  "__typeof__", "__typeof", "__builtin_va_list", "__thread", "__label__",
  "__null", "__FUNCTION__", "__PRETTY_FUNCTION__", "__func__",
  "_GLIBCXX_VISIBILITY", "_GLIBCXX_BEGIN_NAMESPACE_VERSION",
  "_GLIBCXX_END_NAMESPACE_VERSION", "__GNUC__", "__GNUC_MINOR__",
]);

export const BASIC_TYPES = new Set([
  "void", "bool", "char", "char16_t", "char32_t", "wchar_t", "short", "int",
  "long", "float", "double", "signed", "unsigned",
]);

export const ACCESS = new Set(["public", "private", "protected"]);

}
