// Shared helpers: the compile error type, identifier classification, JavaScript-safe names,
// string escaping and small collection utilities.
namespace CTJ {
  export class CtxError extends Error {
    file = "";
    line = 0;
    col = 0;
    constructor(msg: string, file = "", line = 0, col = 0) {
      super(msg);
      this.name = "CtxError";
      this.file = file;
      this.line = line;
      this.col = col;
    }
    where(): string {
      return this.file ? `${this.file}:${this.line}:${this.col}` : "";
    }
  }

  export function fail(msg: string, file = "", line = 0, col = 0): never {
    throw new CtxError(msg, file, line, col);
  }

  export function isIdentStart(ch: string): boolean {
    return ch === "_" || ch === "$" || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
  }

  export function isIdentChar(ch: string): boolean {
    return isIdentStart(ch) || (ch >= "0" && ch <= "9");
  }

  export function isDigit(ch: string): boolean {
    return ch >= "0" && ch <= "9";
  }

  const JS_RESERVED = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "let", "static", "await", "implements", "interface", "package", "private", "protected", "public", "arguments", "eval", "undefined", "NaN", "Infinity"]);

  export function safeJsName(name: string): string {
    if (JS_RESERVED.has(name)) return name + "_";
    return name.replace(/[^A-Za-z0-9_$]/g, "_");
  }

  export function joinScope(parts: string[]): string {
    return parts.join("__");
  }

  export function escapeJsString(s: string): string {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
  }

  export function mapGet<K, V>(m: Map<K, V>, k: K): V | undefined {
    return m.get(k);
  }

  export function last<T>(a: T[]): T {
    return a[a.length - 1];
  }

  // The last "A::B" part of a name, looking past the template arguments: the
  // short name of "std::hash<std::basic_string<char> >" is the "hash<...>" it
  // spells, not the class named inside the arguments.
  export function shortName(name: string): string {
    let depth = 0;
    for (let i = name.length - 1; i >= 0; i--) {
      const ch = name[i];
      if (ch === ">") depth++;
      else if (ch === "<") depth--;
      else if (depth === 0 && ch === ":" && i > 0 && name[i - 1] === ":") return name.slice(i + 1);
    }
    return name;
  }
}
