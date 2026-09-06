namespace CTJ {

export interface Macro {
  params: string[] | null;
  variadic: boolean;
  body: Token[];
}

export interface PreResult {
  tokens: Token[];
  warnings: string[];
  missing: string[];
}

const MAX_DEPTH = 64;

export const DEFAULT_PREDEFINED: Record<string, string> = {
  "__cplusplus": "201103L",
  "__STRICT_ANSI__": "1",
  "__STDC__": "1",
  "__STDC_HOSTED__": "1",
  "__STDC_VERSION__": "199901L",
  "__GNUC__": "4",
  "__GNUC_MINOR__": "8",
  "__GNUC_PATCHLEVEL__": "1",
  "__GNUG__": "4",
  "__SIZE_TYPE__": "long unsigned int",
  "__PTRDIFF_TYPE__": "long int",
  "__WCHAR_TYPE__": "int",
  "__CHAR16_TYPE__": "short unsigned int",
  "__CHAR32_TYPE__": "unsigned int",
  "__INTMAX_TYPE__": "long int",
  "__UINTMAX_TYPE__": "unsigned long int",
  "__CHAR_BIT__": "8",
  "__SCHAR_MAX__": "127",
  "__SHRT_MAX__": "32767",
  "__INT_MAX__": "2147483647",
  "__LONG_MAX__": "9223372036854775807L",
  "__LONG_LONG_MAX__": "9223372036854775807LL",
  "__INTMAX_MAX__": "9223372036854775807L",
  "__UINTMAX_MAX__": "18446744073709551615UL",
  "__SIZE_MAX__": "18446744073709551615UL",
  "__PTRDIFF_MAX__": "9223372036854775807L",
  "__WCHAR_MAX__": "2147483647",
  "__WINT_MAX__": "4294967295U",
  "__POINTER_WIDTH__": "64",
  "__LP64__": "1",
  "_LP64": "1",
  "__x86_64__": "1",
  "__amd64__": "1",
  "__linux__": "1",
  "linux": "1",
  "__gnu_linux__": "1",
  "__unix__": "1",
  "unix": "1",
  "__ELF__": "1",
  "__BYTE_ORDER__": "__ORDER_LITTLE_ENDIAN__",
  "__ORDER_LITTLE_ENDIAN__": "1234",
  "__ORDER_BIG_ENDIAN__": "4321",
  "__ORDER_PDP_ENDIAN__": "3412",
  "__FLOAT_WORD_ORDER__": "__ORDER_LITTLE_ENDIAN__",
  "__GNUC_STDC_INLINE__": "1",
  "__NO_INLINE__": "1",
  "__FINITE_MATH_ONLY__": "0",
  "__USER_LABEL_PREFIX__": "",
  "__REGISTER_PREFIX__": "",
  "__VERSION__": "\"4.8.1\"",
  "__SIZEOF_INT__": "4",
  "__SIZEOF_LONG__": "8",
  "__SIZEOF_POINTER__": "8",
  "__SIZEOF_SHORT__": "2",
  "__SIZEOF_FLOAT__": "4",
  "__SIZEOF_DOUBLE__": "8",
};

export class Preprocessor {
  loadFile: (path: string) => string | null;
  includeDirs: string[];
  warnings: string[] = [];
  missing: string[] = [];
  macros = new Map<string, Macro>();
  onceFiles = new Set<string>();
  fileStack: string[] = [];
  fileDirIndex = new Map<string, number>();

  constructor(loadFile: (path: string) => string | null, includeDirs: string[]) {
    this.loadFile = loadFile;
    this.includeDirs = includeDirs;
    for (const k of Object.keys(DEFAULT_PREDEFINED)) {
      const toks = lexFile(DEFAULT_PREDEFINED[k], "<predefined>");
      toks.pop();
      this.macros.set(k, { params: null, variadic: false, body: toks });
    }
  }

  run(mainSrc: string, mainFile: string): PreResult {
    this.fileDirIndex.set(mainFile, -1);
    const out = this.processFile(mainSrc, mainFile);
    out.push(tok("eof", "", mainFile, 0, 0));
    return { tokens: out, warnings: this.warnings, missing: this.missing };
  }

  warn(msg: string, file: string, line: number): void {
    this.warnings.push(`${file}:${line}: ${msg}`);
  }

  normalize(path: string): string {
    const parts: string[] = [];
    for (const p of path.split("/")) {
      if (p === "" || p === ".") continue;
      if (p === "..") parts.pop();
      else parts.push(p);
    }
    return parts.join("/");
  }

  dirname(path: string): string {
    const i = path.lastIndexOf("/");
    return i < 0 ? "" : path.slice(0, i);
  }

  resolveInclude(name: string, kind: "quote" | "angle", fromFile: string, next: boolean): string | null {
    const fromIdx = this.fileDirIndex.get(fromFile) ?? -1;
    const cands: { dir: string; idx: number }[] = [];
    if (kind === "quote" && !next) cands.push({ dir: this.dirname(fromFile), idx: -1 });
    this.includeDirs.forEach((d, k) => cands.push({ dir: d, idx: k }));
    if (!cands.length) cands.push({ dir: "", idx: -1 });
    let start = 0;
    if (next) {
      start = cands.length;
      for (let i = 0; i < cands.length; i++) {
        if (cands[i].idx > fromIdx) { start = i; break; }
      }
    }
    for (let i = start; i < cands.length; i++) {
      const full = this.normalize((cands[i].dir ? cands[i].dir + "/" : "") + name);
      if (this.loadFile(full) !== null) {
        this.fileDirIndex.set(full, cands[i].idx);
        return full;
      }
    }
    return null;
  }

  processFile(src: string, file: string): Token[] {
    if (this.fileStack.length >= MAX_DEPTH) fail("include depth exceeded", file, 0, 0);
    if (this.fileStack.includes(file)) {
      this.warn("circular include skipped", file, 0);
      return [];
    }
    this.fileStack.push(file);
    const lexed = lexFile(src, file);
    const out: Token[] = [];
    interface Frame { parent: boolean; taken: boolean; active: boolean; }
    const cond: Frame[] = [];
    const active = () => cond.every(f => f.active);
    let lineBuf: Token[] = [];
    const flushLine = () => {
      if (lineBuf.length) {
        const exp = this.expandTokens(lineBuf, new Set(), file, lineBuf[0].line);
        for (const s of exp) {
          if (s.t !== "directive") out.push(s);
        }
      }
      lineBuf = [];
    };
    for (const t of lexed) {
      if (t.t !== "directive") {
        if (t.t === "eof") { flushLine(); continue; }
        if (lineBuf.length && lineBuf[0].line !== t.line) flushLine();
        if (!active()) continue;
        lineBuf.push(t);
        continue;
      }
      flushLine();
      const m = t.v.match(/^#\s*([A-Za-z_]\w*)([\s\S]*)$/);
      if (!m) continue;
      const dir = m[1];
      const rest = m[2].trim();
      if (dir === "if" || dir === "ifdef" || dir === "ifndef") {
        const parent = active();
        let take = false;
        if (parent) {
          if (dir === "ifdef") take = this.macros.has(rest.split(/\s/)[0]);
          else if (dir === "ifndef") take = !this.macros.has(rest.split(/\s/)[0]);
          else take = this.evalCond(rest, file, t.line) !== 0;
        }
        cond.push({ parent, taken: take, active: parent && take });
        continue;
      }
      if (dir === "elif") {
        const f = cond.pop();
        if (!f) fail("#elif without #if", file, t.line, t.col);
        let take = false;
        if (f.parent && !f.taken) take = this.evalCond(rest, file, t.line) !== 0;
        cond.push({ parent: f.parent, taken: f.taken || take, active: f.parent && !f.taken && take });
        continue;
      }
      if (dir === "else") {
        const f = cond.pop();
        if (!f) fail("#else without #if", file, t.line, t.col);
        cond.push({ parent: f.parent, taken: true, active: f.parent && !f.taken });
        continue;
      }
      if (dir === "endif") {
        if (!cond.pop()) fail("#endif without #if", file, t.line, t.col);
        continue;
      }
      if (!active()) continue;
      if (dir === "include" || dir === "include_next") {
        this.doInclude(rest, file, t.line, t.col, dir === "include_next", out);
      } else if (dir === "define") {
        this.doDefine(rest, file, t.line);
      } else if (dir === "undef") {
        this.macros.delete(rest.split(/\s/)[0]);
      } else if (dir === "error") {
        fail(`#error ${rest}`, file, t.line, t.col);
      } else if (dir === "warning") {
        this.warn(`#warning ${rest}`, file, t.line);
      } else if (dir === "pragma") {
        if (rest === "once") this.onceFiles.add(file);
      } else if (dir === "line" || dir === "ident" || dir === "sccs" || dir === "assert" || dir === "unassert") {
        continue;
      } else {
        this.warn(`unknown directive #${dir}`, file, t.line);
      }
    }
    if (cond.length) fail("unterminated #if", file, 0, 0);
    this.fileStack.pop();
    return out;
  }

  doInclude(rest: string, file: string, line: number, col: number, next: boolean, out: Token[]): void {
    let name = "";
    let kind: "quote" | "angle" = "angle";
    const rawA = rest.match(/^<(.*)>$/s);
    const rawQ = rest.match(/^"(.*)"$/s);
    if (rawA) { name = rawA[1].trim(); kind = "angle"; }
    else if (rawQ) { name = rawQ[1].trim(); kind = "quote"; }
    else {
      const expanded = this.expandText(rest, file, line);
      if (expanded.length === 1 && expanded[0].t === "string") {
        name = expanded[0].v.slice(1, -1);
        kind = "quote";
      } else if (expanded.length >= 2 && expanded[0].t === "<" && last(expanded).t === ">") {
        name = expanded.slice(1, -1).map(t => t.v).join("").trim();
        kind = "angle";
      } else {
        this.warn(`bad include line: ${rest}`, file, line);
        return;
      }
    }
    const full = this.resolveInclude(name, kind, file, next);
    if (full === null) {
      if (!this.missing.includes(name)) this.missing.push(name);
      this.warn(`header not found: ${name}`, file, line);
      return;
    }
    if (this.onceFiles.has(full)) return;
    const content = this.loadFile(full);
    if (content === null) return;
    const sub = this.processFile(content, full);
    for (const t of sub) out.push(t);
  }

  doDefine(rest: string, file: string, line: number): void {
    const m = rest.match(/^([A-Za-z_]\w*)(\((.*?)\)|)([\s\S]*)$/);
    if (!m) return;
    const name = m[1];
    let isFunc = rest.startsWith(name + "(");
    if (isFunc && rest.indexOf(")") < 0) isFunc = false;
    if (!isFunc) {
      const body = m[4] || "";
      const toks = lexFile(body, file).filter(t => t.t !== "eof");
      this.macros.set(name, { params: null, variadic: false, body: toks });
      return;
    }
    const argText = m[3] || "";
    const params: string[] = [];
    let variadic = false;
    if (argText.trim()) {
      for (const p of argText.split(",")) {
        const t = p.trim();
        if (t === "...") variadic = true;
        else if (t) params.push(t);
      }
    }
    const body = rest.slice(rest.indexOf(")") + 1);
    const toks = lexFile(body, file).filter(t => t.t !== "eof");
    this.macros.set(name, { params, variadic, body: toks });
  }

  expandText(text: string, file: string, line: number): Token[] {
    const toks = lexFile(text, file).filter(t => t.t !== "eof");
    return this.expandTokens(toks, new Set(), file, line);
  }

  expandTokens(tokens: Token[], disabled: Set<string>, file: string, line: number): Token[] {
    const out: Token[] = [];
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (t.t === "ident" && !disabled.has(t.v)) {
        if (t.v === "__FILE__") { out.push(tok("string", JSON.stringify(file), t.file, t.line, t.col)); continue; }
        if (t.v === "__LINE__") { out.push(tok("number", String(t.line), t.file, t.line, t.col)); continue; }
        if (t.v === "__DATE__") { out.push(tok("string", JSON.stringify("Jan  1 2026"), t.file, t.line, t.col)); continue; }
        if (t.v === "__TIME__") { out.push(tok("string", JSON.stringify("00:00:00"), t.file, t.line, t.col)); continue; }
        if (t.v === "__COUNTER__") { out.push(tok("number", "0", t.file, t.line, t.col)); continue; }
        const macro = this.macros.get(t.v);
        if (!macro) { out.push(t); continue; }
        if (macro.params === null) {
          const sub = this.expandTokens(macro.body, new Set([...disabled, t.v]), file, line);
          for (const s of sub) out.push(s);
          continue;
        }
        const nx = tokens[i + 1];
        if (!nx || nx.t !== "(") { out.push(t); continue; }
        let j = i + 1;
        let depth = 0;
        const args: Token[][] = [[]];
        for (j = i + 1; j < tokens.length; j++) {
          const u = tokens[j];
          if (u.t === "(") { depth++; if (depth > 1) args[args.length - 1].push(u); }
          else if (u.t === ")") {
            depth--;
            if (depth === 0) break;
            args[args.length - 1].push(u);
          }
          else if (u.t === "," && depth === 1) args.push([]);
          else args[args.length - 1].push(u);
        }
        if (j >= tokens.length) { out.push(t); continue; }
        i = j;
        const subbed = this.substMacro(macro, args);
        const sub = this.expandTokens(subbed, new Set([...disabled, t.v]), file, line);
        for (const s of sub) out.push(s);
        continue;
      }
      out.push(t);
    }
    return out;
  }

  substMacro(macro: Macro, args: Token[][]): Token[] {
    const params = macro.params || [];
    const fixed = macro.variadic ? args.slice(0, params.length) : args;
    while (fixed.length < params.length) fixed.push([]);
    const vastart = macro.variadic ? args.slice(params.length) : [];
    const getArg = (name: string): Token[] | null => {
      const idx = params.indexOf(name);
      if (idx >= 0) return fixed[idx];
      if (macro.variadic && name === "__VA_ARGS__") {
        const r: Token[] = [];
        vastart.forEach((a, k) => {
          if (k) r.push(tok(",", ",", "", 0, 0));
          for (const t of a) r.push(t);
        });
        return r;
      }
      return null;
    };
    const body = macro.body;
    const out: Token[] = [];
    for (let i = 0; i < body.length; i++) {
      const t = body[i];
      if (t.t === "#" && body[i + 1] && body[i + 1].t === "ident") {
        const a = getArg(body[i + 1].v);
        i++;
        if (!a) { out.push(t); continue; }
        out.push(tok("string", JSON.stringify(a.map(x => x.v).join(" ")), t.file, t.line, t.col));
        continue;
      }
      if (t.t === "##") {
        const prev = out.pop();
        const next = body[++i];
        if (!prev || !next) continue;
        const pv = prev.t === "ident" && params.includes(prev.v) ? getArg(prev.v) : null;
        const nv = next.t === "ident" && params.includes(next.v) ? getArg(next.v) : null;
        const ps = pv ? pv.map(x => x.v).join("") : prev.v;
        const ns = nv ? nv.map(x => x.v).join("") : next.v;
        const joined = ps + ns;
        if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(joined)) out.push(tok("ident", joined, prev.file, prev.line, prev.col));
        else if (/^[0-9]/.test(joined)) out.push(tok("number", joined, prev.file, prev.line, prev.col));
        else {
          for (const x of lexFile(joined, prev.file)) {
            if (x.t !== "eof") out.push(x);
          }
        }
        continue;
      }
      if (t.t === "ident") {
        const a = getArg(t.v);
        if (a) {
          for (const x of a) out.push(x);
          continue;
        }
      }
      out.push(t);
    }
    return out;
  }

  evalCond(text: string, file: string, line: number): number {
    let toks = lexFile(text, file).filter(t => t.t !== "eof");
    const pre: Token[] = [];
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i];
      if (t.t === "ident" && t.v === "defined") {
        const n1 = toks[i + 1];
        if (n1 && n1.t === "ident") { pre.push(tok("number", this.macros.has(n1.v) ? "1" : "0", file, line, 0)); i++; }
        else if (n1 && n1.t === "(" && toks[i + 2] && toks[i + 2].t === "ident") {
          pre.push(tok("number", this.macros.has(toks[i + 2].v) ? "1" : "0", file, line, 0));
          i += 3;
        } else pre.push(t);
        continue;
      }
      if (t.t === "ident" && t.v === "__has_include") {
        let j = i + 1;
        let name = "";
        if (toks[j] && toks[j].t === "(") {
          j++;
          const parts: string[] = [];
          while (toks[j] && toks[j].t !== ")") parts.push(toks[j++].v);
          name = parts.join("").trim();
        }
        const mm = name.match(/^<(.*)>$/) || name.match(/^"(.*)"$/);
        const hname = mm ? mm[1] : name;
        const found = this.resolveInclude(hname, "angle", file, false) !== null;
        pre.push(tok("number", found ? "1" : "0", file, line, 0));
        i = j;
        continue;
      }
      pre.push(t);
    }
    toks = this.expandTokens(pre, new Set(), file, line);
    const vals: Token[] = toks.map(t => {
      if (t.t === "ident") return tok("number", "0", t.file, t.line, t.col);
      if (t.t === "char") return tok("number", String(parseChar(t.v)), t.file, t.line, t.col);
      return t;
    });
    return new CondEval(vals, file, line).parse();
  }
}

class CondEval {
  toks: Token[];
  pos = 0;
  file: string;
  line: number;
  constructor(toks: Token[], file: string, line: number) {
    this.toks = toks;
    this.file = file;
    this.line = line;
  }
  peek(): Token { return this.toks[this.pos] || tok("eof", "", this.file, this.line, 0); }
  next(): Token { return this.toks[this.pos++] || tok("eof", "", this.file, this.line, 0); }
  eat(t: Tok): boolean {
    if (this.peek().t === t) { this.pos++; return true; }
    return false;
  }
  parse(): number { return this.cond(); }
  cond(): number {
    const c = this.or();
    if (this.eat("?")) {
      const a = this.cond();
      this.eat(":");
      const b = this.cond();
      return c ? a : b;
    }
    return c;
  }
  or(): number {
    let v = this.and();
    while (this.eat("||")) { const r = this.and(); v = (v || r) ? 1 : 0; }
    return v;
  }
  and(): number {
    let v = this.bor();
    while (this.eat("&&")) { const r = this.bor(); v = (v && r) ? 1 : 0; }
    return v;
  }
  bor(): number {
    let v = this.bxor();
    while (this.eat("|")) v |= this.bxor();
    return v;
  }
  bxor(): number {
    let v = this.band();
    while (this.eat("^")) v ^= this.band();
    return v;
  }
  band(): number {
    let v = this.eq();
    while (this.eat("&")) v &= this.eq();
    return v;
  }
  eq(): number {
    let v = this.rel();
    for (;;) {
      if (this.eat("==")) v = v === this.rel() ? 1 : 0;
      else if (this.eat("!=")) v = v !== this.rel() ? 1 : 0;
      else return v;
    }
  }
  rel(): number {
    let v = this.shift();
    for (;;) {
      if (this.eat("<")) v = v < this.shift() ? 1 : 0;
      else if (this.eat(">")) v = v > this.shift() ? 1 : 0;
      else if (this.eat("<=")) v = v <= this.shift() ? 1 : 0;
      else if (this.eat(">=")) v = v >= this.shift() ? 1 : 0;
      else return v;
    }
  }
  shift(): number {
    let v = this.add();
    for (;;) {
      if (this.eat("<<")) v = v << this.add();
      else if (this.eat(">>")) v = v >> this.add();
      else return v;
    }
  }
  add(): number {
    let v = this.mul();
    for (;;) {
      if (this.eat("+")) v += this.mul();
      else if (this.eat("-")) v -= this.mul();
      else return v;
    }
  }
  mul(): number {
    let v = this.un();
    for (;;) {
      if (this.eat("*")) v *= this.un();
      else if (this.eat("/")) { const d = this.un(); v = d === 0 ? 0 : Math.trunc(v / d); }
      else if (this.eat("%")) { const d = this.un(); v = d === 0 ? 0 : v % d; }
      else return v;
    }
  }
  un(): number {
    if (this.eat("!")) return this.un() ? 0 : 1;
    if (this.eat("~")) return ~this.un();
    if (this.eat("-")) return -this.un();
    if (this.eat("+")) return this.un();
    return this.prim();
  }
  prim(): number {
    const t = this.next();
    if (t.t === "number") return parseNumber(t.v);
    if (t.t === "(") {
      const v = this.cond();
      this.eat(")");
      return v;
    }
    return 0;
  }
}

export async function collectHeaders(
  mainSrc: string,
  mainFile: string,
  includeDirs: string[],
  loadAsync: (path: string) => Promise<string | null>,
): Promise<Map<string, string>> {
  const files = new Map<string, string>();
  files.set(mainFile, mainSrc);
  const norm = (p: string) => {
    const parts: string[] = [];
    for (const s of p.split("/")) {
      if (s === "" || s === ".") continue;
      if (s === "..") parts.pop();
      else parts.push(s);
    }
    return parts.join("/");
  };
  const dirOf = (p: string) => {
    const i = p.lastIndexOf("/");
    return i < 0 ? "" : p.slice(0, i);
  };
  const queue: string[] = [mainFile];
  const tried = new Set<string>();
  while (queue.length) {
    const f = queue.pop() as string;
    const src = files.get(f);
    if (src === undefined) continue;
    let lexed: Token[];
    try { lexed = lexFile(src, f); } catch { continue; }
    for (const t of lexed) {
      if (t.t !== "directive") continue;
      const m = t.v.match(/^#\s*(include|include_next)\s*(<[^>]*>|"[^"]*")/);
      if (!m) continue;
      const spec = m[2];
      const isQuote = spec.startsWith('"');
      const name = spec.slice(1, -1);
      const dirs: string[] = [];
      if (isQuote) dirs.push(dirOf(f));
      for (const d of includeDirs) dirs.push(d);
      for (const d of dirs) {
        const full = norm((d ? d + "/" : "") + name);
        if (tried.has(full)) {
          if (files.has(full)) break;
          continue;
        }
        tried.add(full);
        try {
          const content = await loadAsync(full);
          if (content !== null) {
            files.set(full, content);
            queue.push(full);
            break;
          }
        } catch { /* ignore */ }
      }
    }
  }
  return files;
}

}
