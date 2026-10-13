// Preprocessor: #include, #define and conditional compilation, plus the table of
// built-in headers that the bundled include directory does not carry.
namespace CTJ {
  export interface Macro {
    params: string[] | null;
    variadic: boolean;
    // The name the variadic arguments are called by: "__VA_ARGS__", or the
    // parameter name of a GNU "args..." declaration.
    vaName?: string;
    body: Token[];
  }

  export interface PreResult {
    tokens: Token[];
    warnings: string[];
    missing: string[];
  }

  const MAX_DEPTH = 64;

  // libstdc++ writes its pedantic asserts and its thread-sanitizer annotations as
  // function-like macros that its configuration header defines away unless a
  // program asks for them. They carry no behaviour, so the defaults come from
  // here; "defines" can still override.
  export const DEFAULT_EMPTY_FN_MACROS = ["_GLIBCXX_DEBUG_ASSERT", "_GLIBCXX_DEBUG_PEDASSERT", "_GLIBCXX_SYNCHRONIZATION_HAPPENS_BEFORE", "_GLIBCXX_SYNCHRONIZATION_HAPPENS_AFTER"];

  export const DEFAULT_PREDEFINED: Record<string, string> = {
    __cplusplus: "201103L",
    __STRICT_ANSI__: "1",
    __STDC__: "1",
    __STDC_HOSTED__: "1",
    __STDC_VERSION__: "199901L",
    __GNUC__: "4",
    __GNUC_MINOR__: "8",
    __GNUC_PATCHLEVEL__: "1",
    __GNUG__: "4",
    __SIZE_TYPE__: "unsigned long",
    __DBL_MIN_EXP__: "(-1021)",
    __FLT_MIN__: "1.17549435082228750796873653722224568e-38F",
    __DBL_MIN_10_EXP__: "(-307)",
    __LDBL_MAX__: "1.18973149535723176502126385303097021e+4932L",
    __DBL_DENORM_MIN__: "double(4.94065645841246544176568792868221372e-324L)",
    __DBL_DIG__: "15",
    __FLT_EPSILON__: "1.19209289550781250000000000000000000e-7F",
    __LDBL_MIN__: "3.36210314311209350626267781732175260e-4932L",
    __LDBL_HAS_QUIET_NAN__: "1",
    __FLT_HAS_DENORM__: "1",
    __DBL_MAX__: "double(1.79769313486231570814527423731704357e+308L)",
    __DBL_HAS_INFINITY__: "1",
    __LDBL_HAS_DENORM__: "1",
    __DBL_MAX_EXP__: "1024",
    __FLT_MIN_EXP__: "(-125)",
    __DBL_MIN__: "double(2.22507385850720138309023271733240406e-308L)",
    __DBL_HAS_QUIET_NAN__: "1",
    __LDBL_HAS_INFINITY__: "1",
    __FLT_DIG__: "6",
    __FLT_MANT_DIG__: "24",
    __DBL_HAS_DENORM__: "1",
    __FLT_RADIX__: "2",
    __LDBL_EPSILON__: "1.08420217248550443400745280086994171e-19L",
    __LDBL_DIG__: "18",
    __FLT_HAS_QUIET_NAN__: "1",
    __FLT_MAX_10_EXP__: "38",
    __FLT_HAS_INFINITY__: "1",
    __LDBL_MANT_DIG__: "64",
    __FLT_MAX_EXP__: "128",
    __DBL_MANT_DIG__: "53",
    __LDBL_MIN_EXP__: "(-16381)",
    __LDBL_MAX_EXP__: "16384",
    __LDBL_MAX_10_EXP__: "4932",
    __DBL_EPSILON__: "double(2.22044604925031308084726333618164062e-16L)",
    __FLT_DENORM_MIN__: "1.40129846432481707092372958328991613e-45F",
    __FLT_MAX__: "3.40282346638528859811704183484516925e+38F",
    __FLT_MIN_10_EXP__: "(-37)",
    __DBL_MAX_10_EXP__: "308",
    __LDBL_DENORM_MIN__: "3.64519953188247460252840593361941982e-4951L",
    __LDBL_MIN_10_EXP__: "(-4931)",
    __PTRDIFF_TYPE__: "long",
    __WCHAR_TYPE__: "int",
    __CHAR16_TYPE__: "short unsigned int",
    __CHAR32_TYPE__: "unsigned int",
    __INTMAX_TYPE__: "long long int",
    __UINTMAX_TYPE__: "long long unsigned int",
    __CHAR_BIT__: "8",
    __SCHAR_MAX__: "127",
    __SHRT_MAX__: "32767",
    __INT_MAX__: "2147483647",
    __LONG_MAX__: "2147483647L",
    __LONG_LONG_MAX__: "9223372036854775807LL",
    __INTMAX_MAX__: "9223372036854775807LL",
    __UINTMAX_MAX__: "18446744073709551615ULL",
    __SIZE_MAX__: "4294967295U",
    __PTRDIFF_MAX__: "2147483647",
    __WCHAR_MAX__: "2147483647",
    __WINT_MAX__: "4294967295U",
    __POINTER_WIDTH__: "32",
    __ILP32__: "1",
    __x86_64__: "1",
    __amd64__: "1",
    __linux__: "1",
    linux: "1",
    __gnu_linux__: "1",
    __unix__: "1",
    unix: "1",
    __ELF__: "1",
    __BYTE_ORDER__: "__ORDER_LITTLE_ENDIAN__",
    __ORDER_LITTLE_ENDIAN__: "1234",
    __ORDER_BIG_ENDIAN__: "4321",
    __ORDER_PDP_ENDIAN__: "3412",
    __FLOAT_WORD_ORDER__: "__ORDER_LITTLE_ENDIAN__",
    __GNUC_STDC_INLINE__: "1",
    __NO_INLINE__: "1",
    __FINITE_MATH_ONLY__: "0",
    __USER_LABEL_PREFIX__: "",
    __REGISTER_PREFIX__: "",
    __VERSION__: '"4.8.1"',
    __SIZEOF_INT__: "4",
    __SIZEOF_LONG__: "4",
    __SIZEOF_POINTER__: "4",
    __SIZEOF_SHORT__: "2",
    __SIZEOF_FLOAT__: "4",
    __SIZEOF_DOUBLE__: "8",
    __SIZEOF_LONG_LONG__: "8",
  };

  // Headers the target environment provides but that the bundled "include"
  // directory does not carry.  They only declare their names, which is what the
  // standard headers include them for; calling into them is an unresolved
  // external at run time.
  export const BUILTIN_HEADERS: Record<string, string> = {
    "fenv.h":
      '/* <fenv.h> for CTJ.  The floating point environment is not modelled, so this\n   header only provides the names the standard headers look for. */\n#ifndef _CTJ_FENV_H\n#define _CTJ_FENV_H\n\n#define FE_INVALID 1\n#define FE_DIVBYZERO 4\n#define FE_OVERFLOW 8\n#define FE_UNDERFLOW 16\n#define FE_INEXACT 32\n#define FE_ALL_EXCEPT 61\n\n#define FE_TONEAREST 0\n#define FE_DOWNWARD 0x400\n#define FE_UPWARD 0x800\n#define FE_TOWARDZERO 0xc00\n\ntypedef unsigned short fexcept_t;\ntypedef struct { unsigned short __control; unsigned int __status; } fenv_t;\n\n#define FE_DFL_ENV ((const fenv_t *) -1l)\n\n#ifdef __cplusplus\nextern "C" {\n#endif\n\nint feclearexcept(int __excepts);\nint fegetexceptflag(fexcept_t *__flagp, int __excepts);\nint feraiseexcept(int __excepts);\nint fesetexceptflag(const fexcept_t *__flagp, int __excepts);\nint fetestexcept(int __excepts);\nint fegetround(void);\nint fesetround(int __round);\nint fegetenv(fenv_t *__envp);\nint feholdexcept(fenv_t *__envp);\nint fesetenv(const fenv_t *__envp);\nint feupdateenv(const fenv_t *__envp);\n\n#ifdef __cplusplus\n}\n#endif\n\n#endif\n',
  };

  // The bundled headers carry only the internals a program needs, so an edge of
  // the real include graph may be missing.  "<memory>" here names six internals
  // and not "<bits/alloc_traits.h>", which is where "std::allocator_traits" is
  // declared, so a program that reaches "<memory>" through "<forward_list>", say,
  // would never see that name.  The dropped edges are restored here.
  const IMPLIED_INCLUDES: Record<string, string[]> = {
    memory: ["bits/alloc_traits.h"],
  };

  export class Preprocessor {
    loadFile: (path: string) => string | null;
    includeDirs: string[];
    warnings: string[] = [];
    missing: string[] = [];
    macros = new Map<string, Macro>();
    // Definitions of macros that were undefined again by a header but that a
    // later header still uses: kept for the expansion, not for "#ifdef".
    undefKept = new Map<string, Macro>();
    onceFiles = new Set<string>();
    // A built-in stub is reported once however often its header is included.
    stubWarned = new Set<string>();
    fileStack: string[] = [];
    fileDirIndex = new Map<string, number>();

    constructor(loadFile: (path: string) => string | null, includeDirs: string[]) {
      this.loadFile = loadFile;
      this.includeDirs = includeDirs;
      for (const k of Object.keys(DEFAULT_PREDEFINED)) {
        const toks = lexFile(DEFAULT_PREDEFINED[k], "<predefined>", false);
        toks.pop();
        this.macros.set(k, { params: null, variadic: false, body: toks });
      }
      for (const name of DEFAULT_EMPTY_FN_MACROS) {
        this.macros.set(name, { params: [], variadic: true, body: [] });
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
          if (cands[i].idx > fromIdx) {
            start = i;
            break;
          }
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
      interface Frame {
        parent: boolean;
        taken: boolean;
        active: boolean;
      }
      const cond: Frame[] = [];
      const active = () => cond.every(f => f.active);
      let lineBuf: Token[] = [];
      // A function-like macro call can run over several lines, and its arguments
      // have to be complete before it can be expanded, so an open parenthesis
      // keeps the line in the buffer.
      const flushLine = (force = false) => {
        if (lineBuf.length) {
          let depth = 0;
          for (const t of lineBuf) {
            if (t.t === "(") depth++;
            else if (t.t === ")") depth--;
          }
          if (!force && depth > 0) return;
          const exp = this.expandTokens(lineBuf, new Set(), file, lineBuf[0].line);
          for (const s of exp) {
            if (s.t !== "directive") out.push(s);
          }
        }
        lineBuf = [];
      };
      for (const t of lexed) {
        if (t.t !== "directive") {
          if (t.t === "eof") {
            flushLine(true);
            continue;
          }
          if (lineBuf.length && lineBuf[0].line !== t.line) flushLine();
          if (!active()) continue;
          lineBuf.push(t);
          continue;
        }
        flushLine(true);
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
          const nm = rest.split(/\s/)[0];
          // "<limits>" cleans up the "__glibcxx_*" helpers it defines, but the
          // collected headers still use them later on ("ext/numeric_traits.h"
          // builds "__min" out of "__glibcxx_min"), and losing the definition
          // leaves a call to a macro that no longer exists.
          // The definition is kept aside so that a call to the macro still
          // expands, but the macro itself is undefined: "#ifdef" has to give
          // the answer the original headers give.
          const def = this.macros.get(nm);
          if (def && nm.startsWith("__glibcxx_")) this.undefKept.set(nm, def);
          this.macros.delete(nm);
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
      if (rawA) {
        name = rawA[1].trim();
        kind = "angle";
      } else if (rawQ) {
        name = rawQ[1].trim();
        kind = "quote";
      } else {
        const expanded = this.expandText(rest, file, line);
        if (expanded.length === 1 && expanded[0].t === "string") {
          name = expanded[0].v.slice(1, -1);
          kind = "quote";
        } else if (expanded.length >= 2 && expanded[0].t === "<" && last(expanded).t === ">") {
          name = expanded
            .slice(1, -1)
            .map(t => t.v)
            .join("")
            .trim();
          kind = "angle";
        } else {
          this.warn(`bad include line: ${rest}`, file, line);
          return;
        }
      }
      let full = this.resolveInclude(name, kind, file, next);
      let content: string | null = null;
      if (full === null && BUILTIN_HEADERS[name] !== undefined) {
        // "<cfenv>" includes "<fenv.h>", which the bundled includes do not carry.
        // The stub keeps it, and everything that goes through "<bits/stdc++.h>",
        // working; the names it declares stay unresolved externals.
        full = name;
        content = BUILTIN_HEADERS[name];
        if (!this.stubWarned.has(name)) {
          this.stubWarned.add(name);
          this.warn(`header ${name} is not bundled, using the CTJ stub`, file, line);
        }
      }
      if (full === null) {
        if (!this.missing.includes(name)) this.missing.push(name);
        this.warn(`header not found: ${name}`, file, line);
        return;
      }
      if (this.onceFiles.has(full)) return;
      if (content === null) content = this.loadFile(full);
      if (content === null) return;
      const sub = this.processFile(content, full);
      for (const t of sub) out.push(t);
      for (const extra of IMPLIED_INCLUDES[name] || []) {
        this.doInclude(`<${extra}>`, full, line, col, false, out);
      }
    }

    doDefine(rest: string, file: string, line: number): void {
      const m = rest.match(/^([A-Za-z_]\w*)(\((.*?)\)|)([\s\S]*)$/);
      if (!m) return;
      const name = m[1];
      let isFunc = rest.startsWith(name + "(");
      if (isFunc && rest.indexOf(")") < 0) isFunc = false;
      if (!isFunc) {
        const body = m[4] || "";
        const toks = lexFile(body, file, false).filter(t => t.t !== "eof");
        this.macros.set(name, { params: null, variadic: false, body: toks });
        return;
      }
      const argText = m[3] || "";
      const params: string[] = [];
      let variadic = false;
      let vaName = "__VA_ARGS__";
      if (argText.trim()) {
        for (const p of argText.split(",")) {
          const t = p.trim();
          if (t === "...") variadic = true;
          else if (t.endsWith("...")) {
            variadic = true;
            vaName = t.slice(0, -3).trim();
          } else if (t) params.push(t);
        }
      }
      const body = rest.slice(rest.indexOf(")") + 1);
      const toks = lexFile(body, file, false).filter(t => t.t !== "eof");
      this.macros.set(name, { params, variadic, vaName, body: toks });
    }

    expandText(text: string, file: string, line: number): Token[] {
      const toks = lexFile(text, file, false).filter(t => t.t !== "eof");
      return this.expandTokens(toks, new Set(), file, line);
    }

    expandTokens(tokens: Token[], disabled: Set<string>, file: string, line: number): Token[] {
      const out: Token[] = [];
      for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t.t === "ident" && !disabled.has(t.v)) {
          if (t.v === "__FILE__") {
            out.push(tok("string", JSON.stringify(file), t.file, t.line, t.col));
            continue;
          }
          if (t.v === "__LINE__") {
            out.push(tok("number", String(t.line), t.file, t.line, t.col));
            continue;
          }
          if (t.v === "__DATE__") {
            out.push(tok("string", JSON.stringify("Jan  1 2026"), t.file, t.line, t.col));
            continue;
          }
          if (t.v === "__TIME__") {
            out.push(tok("string", JSON.stringify("00:00:00"), t.file, t.line, t.col));
            continue;
          }
          if (t.v === "__COUNTER__") {
            out.push(tok("number", "0", t.file, t.line, t.col));
            continue;
          }
          const macro = this.macros.get(t.v) || this.undefKept.get(t.v);
          if (!macro) {
            out.push(t);
            continue;
          }
          if (macro.params === null) {
            const sub = this.expandTokens(macro.body, new Set([...disabled, t.v]), file, line);
            for (const s of sub) out.push(s);
            continue;
          }
          const nx = tokens[i + 1];
          if (!nx || nx.t !== "(") {
            out.push(t);
            continue;
          }
          let j = i + 1;
          let depth = 0;
          const args: Token[][] = [[]];
          for (j = i + 1; j < tokens.length; j++) {
            const u = tokens[j];
            if (u.t === "(") {
              depth++;
              if (depth > 1) args[args.length - 1].push(u);
            } else if (u.t === ")") {
              depth--;
              if (depth === 0) break;
              args[args.length - 1].push(u);
            } else if (u.t === "," && depth === 1) args.push([]);
            else args[args.length - 1].push(u);
          }
          if (j >= tokens.length) {
            out.push(t);
            continue;
          }
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

    // Replaces the parameters of a macro body by their arguments. "#" stringizes
    // an argument, "##" pastes its neighbours (with the GNU comma rule for an
    // empty variadic list), and __VA_OPT__(...) is kept only when there are
    // variadic arguments.
    substMacro(macro: Macro, args: Token[][]): Token[] {
      const params = macro.params || [];
      const vaName = macro.variadic ? macro.vaName || "__VA_ARGS__" : "";
      const vastart = macro.variadic ? args.slice(params.length) : [];
      const vaTokens: Token[] = [];
      vastart.forEach((a, k) => {
        if (k) vaTokens.push(tok(",", ",", "", 0, 0));
        for (const x of a) vaTokens.push(x);
      });
      const vaEmpty = vaTokens.length === 0;
      // The tokens an identifier stands for: an argument, the variadic list, or
      // null when it is not a parameter.
      const paramTokens = (name: string): Token[] | null => {
        const idx = params.indexOf(name);
        if (idx >= 0) return args[idx] || [];
        if (vaName && name === vaName) return vaTokens;
        return null;
      };
      const stringize = (a: Token[]): Token => {
        let text = "";
        a.forEach((x, k) => {
          if (k && x.sp) text += " ";
          text += x.t === "string" || x.t === "char" ? x.v.replace(/[\\"]/g, c => "\\" + c) : x.v;
        });
        return tok("string", '"' + text + '"', a[0] ? a[0].file : "", a[0] ? a[0].line : 0, a[0] ? a[0].col : 0);
      };
      const paste = (a: Token, b: Token): Token[] => lexFile(a.v + b.v, a.file, false).filter(x => x.t !== "eof");
      const body = macro.body;
      const out: Token[] = [];
      // Where the most recent operand begins in out: the left side of a "##".
      let lastOp = -1;
      for (let i = 0; i < body.length; i++) {
        const t = body[i];
        if (t.t === "##" && i + 1 < body.length) {
          const rb = body[++i];
          const rTokens = rb.t === "ident" && paramTokens(rb.v) !== null ? (paramTokens(rb.v) as Token[]) : [rb];
          const left = lastOp >= 0 ? out.slice(lastOp) : [];
          if (left.length === 1 && left[0].t === "," && rb.t === "ident" && vaName && rb.v === vaName) {
            if (vaEmpty) out.length = lastOp;
            else out.push(...rTokens);
            continue;
          }
          if (!left.length) {
            lastOp = out.length;
            out.push(...rTokens);
            continue;
          }
          if (!rTokens.length) continue;
          const pasted = paste(out.pop() as Token, rTokens[0]);
          out.push(...(pasted.length ? pasted : []), ...rTokens.slice(1));
          continue;
        }
        lastOp = out.length;
        if (t.t === "#" && i + 1 < body.length && body[i + 1].t === "ident" && paramTokens(body[i + 1].v) !== null) {
          out.push(stringize(paramTokens(body[++i].v) as Token[]));
          continue;
        }
        if (macro.variadic && t.t === "ident" && t.v === "__VA_OPT__" && body[i + 1] && body[i + 1].t === "(") {
          let depth = 0;
          let j = i + 1;
          const inner: Token[] = [];
          for (; j < body.length; j++) {
            if (body[j].t === "(") {
              depth++;
              if (depth === 1) continue;
            } else if (body[j].t === ")") {
              depth--;
              if (depth === 0) break;
            }
            inner.push(body[j]);
          }
          if (!vaEmpty) out.push(...this.substMacro({ ...macro, body: inner }, args));
          i = j;
          continue;
        }
        const pt = t.t === "ident" ? paramTokens(t.v) : null;
        if (pt) {
          out.push(...pt);
          continue;
        }
        out.push(t);
      }
      return out;
    }

    evalCond(text: string, file: string, line: number): number {
      let toks = lexFile(text, file, false).filter(t => t.t !== "eof");
      const pre: Token[] = [];
      for (let i = 0; i < toks.length; i++) {
        const t = toks[i];
        if (t.t === "ident" && t.v === "defined") {
          const n1 = toks[i + 1];
          if (n1 && n1.t === "ident") {
            pre.push(tok("number", this.macros.has(n1.v) ? "1" : "0", file, line, 0));
            i++;
          } else if (n1 && n1.t === "(" && toks[i + 2] && toks[i + 2].t === "ident") {
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
    peek(): Token {
      return this.toks[this.pos] || tok("eof", "", this.file, this.line, 0);
    }
    next(): Token {
      return this.toks[this.pos++] || tok("eof", "", this.file, this.line, 0);
    }
    eat(t: Tok): boolean {
      if (this.peek().t === t) {
        this.pos++;
        return true;
      }
      return false;
    }
    parse(): number {
      return this.cond();
    }
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
      while (this.eat("||")) {
        const r = this.and();
        v = v || r ? 1 : 0;
      }
      return v;
    }
    and(): number {
      let v = this.bor();
      while (this.eat("&&")) {
        const r = this.bor();
        v = v && r ? 1 : 0;
      }
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
        else if (this.eat("/")) {
          const d = this.un();
          v = d === 0 ? 0 : Math.trunc(v / d);
        } else if (this.eat("%")) {
          const d = this.un();
          v = d === 0 ? 0 : v % d;
        } else return v;
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

  export async function collectHeaders(mainSrc: string, mainFile: string, includeDirs: string[], loadAsync: (path: string) => Promise<string | null>): Promise<Map<string, string>> {
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
      try {
        lexed = lexFile(src, f);
      } catch {
        continue;
      }
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
          } catch {
            /* ignore */
          }
        }
      }
    }
    return files;
  }
}
