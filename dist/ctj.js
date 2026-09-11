"use strict";
var CTJ;
(function (CTJ) {
    class CtxError extends Error {
        constructor(msg, file = "", line = 0, col = 0) {
            super(msg);
            this.file = "";
            this.line = 0;
            this.col = 0;
            this.name = "CtxError";
            this.file = file;
            this.line = line;
            this.col = col;
        }
        where() {
            return this.file ? `${this.file}:${this.line}:${this.col}` : "";
        }
    }
    CTJ.CtxError = CtxError;
    function fail(msg, file = "", line = 0, col = 0) {
        throw new CtxError(msg, file, line, col);
    }
    CTJ.fail = fail;
    function isIdentStart(ch) {
        return ch === "_" || ch === "$" ||
            (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
    }
    CTJ.isIdentStart = isIdentStart;
    function isIdentChar(ch) {
        return isIdentStart(ch) || (ch >= "0" && ch <= "9");
    }
    CTJ.isIdentChar = isIdentChar;
    function isDigit(ch) {
        return ch >= "0" && ch <= "9";
    }
    CTJ.isDigit = isDigit;
    const JS_RESERVED = new Set([
        "break", "case", "catch", "class", "const", "continue", "debugger", "default",
        "delete", "do", "else", "enum", "export", "extends", "false", "finally",
        "for", "function", "if", "import", "in", "instanceof", "new", "null",
        "return", "super", "switch", "this", "throw", "true", "try", "typeof",
        "var", "void", "while", "with", "yield", "let", "static", "await",
        "implements", "interface", "package", "private", "protected", "public",
        "arguments", "eval", "undefined", "NaN", "Infinity",
    ]);
    const PHP_RESERVED = new Set([
        "int", "float", "string", "bool", "true", "false", "null", "void", "iterable",
        "object", "mixed", "numeric", "resource", "array", "callable", "self",
        "parent", "static", "parent", "class", "function", "echo", "print",
    ]);
    function safeJsName(name) {
        if (JS_RESERVED.has(name))
            return name + "_";
        return name.replace(/[^A-Za-z0-9_$]/g, "_");
    }
    CTJ.safeJsName = safeJsName;
    function safePhpName(name) {
        if (PHP_RESERVED.has(name))
            return name + "_";
        return name.replace(/[^A-Za-z0-9_]/g, "_");
    }
    CTJ.safePhpName = safePhpName;
    function joinScope(parts) {
        return parts.join("__");
    }
    CTJ.joinScope = joinScope;
    function escapeJsString(s) {
        return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r").replace(/\t/g, "\\t");
    }
    CTJ.escapeJsString = escapeJsString;
    function escapePhpString(s) {
        return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    }
    CTJ.escapePhpString = escapePhpString;
    function mapGet(m, k) {
        return m.get(k);
    }
    CTJ.mapGet = mapGet;
    function last(a) {
        return a[a.length - 1];
    }
    CTJ.last = last;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function tok(t, v, file = "", line = 0, col = 0) {
        return { t, v, file, line, col };
    }
    CTJ.tok = tok;
    CTJ.KEYWORDS = new Set([
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
    CTJ.BASIC_TYPES = new Set([
        "void", "bool", "char", "char16_t", "char32_t", "wchar_t", "short", "int",
        "long", "float", "double", "signed", "unsigned",
    ]);
    CTJ.ACCESS = new Set(["public", "private", "protected"]);
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const OPS3 = {
        "<<=": "<<=", ">>=": ">>=", "->*": "->*", "...": "...", "<=>": "<=>",
    };
    const OPS2 = {
        "+=": "+=", "-=": "-=", "*=": "*=", "/=": "/=", "%=": "%=", "^=": "^=",
        "&=": "&=", "|=": "|=", "<<": "<<", ">>": ">>", "==": "==", "!=": "!=",
        "<=": "<=", ">=": ">=", "&&": "&&", "||": "||", "++": "++", "--": "--",
        "->": "->", ".*": ".*", "::": "::", "##": "##",
    };
    const OPS1 = {
        "(": "(", ")": ")", "[": "[", "]": "]", "{": "{", "}": "}", ";": ";", ",": ",", ".": ".",
        "?": "?", ":": ":", "+": "+", "-": "-", "*": "*", "/": "/", "%": "%",
        "^": "^", "&": "&", "|": "|", "~": "~", "!": "!", "=": "=", "<": "<",
        ">": ">", "#": "#",
    };
    function lexFile(src, file) {
        const out = [];
        const n = src.length;
        let i = 0;
        let line = 1;
        let col = 1;
        let atLineStart = true;
        const adv = (k) => {
            for (let j = 0; j < k; j++) {
                if (src[i] === "\n") {
                    line++;
                    col = 1;
                }
                else
                    col++;
                i++;
            }
        };
        const skipSplice = () => {
            while (src[i] === "\\" && (src[i + 1] === "\n" || (src[i + 1] === "\r" && src[i + 2] === "\n"))) {
                if (src[i + 1] === "\r")
                    adv(3);
                else
                    adv(2);
            }
        };
        while (i < n) {
            skipSplice();
            if (i >= n)
                break;
            const c = src[i];
            if (c === "\n") {
                adv(1);
                atLineStart = true;
                continue;
            }
            if (c === " " || c === "\t" || c === "\r" || c === "\v" || c === "\f") {
                adv(1);
                continue;
            }
            if (atLineStart && c === "#") {
                const sc = col;
                let j = i;
                let text = "";
                while (j < n) {
                    if (src[j] === "\\" && src[j + 1] === "\n") {
                        text += "\n";
                        j += 2;
                        continue;
                    }
                    if (src[j] === "\n")
                        break;
                    text += src[j];
                    j++;
                }
                out.push(CTJ.tok("directive", text, file, line, sc));
                adv(j - i);
                continue;
            }
            atLineStart = false;
            if (c === "/" && src[i + 1] === "/") {
                while (i < n && src[i] !== "\n") {
                    i++;
                    col++;
                }
                continue;
            }
            if (c === "/" && src[i + 1] === "*") {
                const sl = line, so = col;
                adv(2);
                let closed = false;
                while (i < n) {
                    if (src[i] === "*" && src[i + 1] === "/") {
                        adv(2);
                        closed = true;
                        break;
                    }
                    adv(1);
                }
                if (!closed)
                    CTJ.fail("unterminated comment", file, sl, so);
                continue;
            }
            if (c === "R" && src[i + 1] === '"') {
                const sl = line, so = col;
                let j = i + 2;
                let delim = "";
                while (j < n && src[j] !== "(" && src[j] !== "\n") {
                    delim += src[j];
                    j++;
                }
                if (src[j] !== "(")
                    CTJ.fail("bad raw string", file, sl, so);
                j++;
                const end = ")" + delim + '"';
                const k = src.indexOf(end, j);
                if (k < 0)
                    CTJ.fail("unterminated raw string", file, sl, so);
                const body = src.slice(j, k);
                for (let q = i; q < k + end.length; q++) {
                    if (src[q] === "\n") {
                        line++;
                        col = 1;
                    }
                    else
                        col++;
                }
                i = k + end.length;
                out.push(CTJ.tok("string", JSON.stringify(body), file, sl, so));
                continue;
            }
            const strPrefix = (c === "u" && src[i + 1] === "8" && src[i + 2] === '"') ? 3
                : ((c === "u" || c === "U" || c === "L") && src[i + 1] === '"') ? 2
                    : c === '"' ? 1 : 0;
            if (strPrefix > 0) {
                const sl = line, so = col;
                const quote = strPrefix === 3 ? "u8\"" : src.slice(i, i + strPrefix);
                adv(strPrefix);
                let v = "";
                let closed = false;
                while (i < n) {
                    skipSplice();
                    const d = src[i];
                    if (d === "\n")
                        CTJ.fail("unterminated string", file, sl, so);
                    if (d === "\\") {
                        v += d + (src[i + 1] || "");
                        adv(2);
                        continue;
                    }
                    if (d === '"') {
                        adv(1);
                        closed = true;
                        break;
                    }
                    v += d;
                    adv(1);
                }
                if (!closed)
                    CTJ.fail("unterminated string", file, sl, so);
                out.push(CTJ.tok("string", quote + v + '"', file, sl, so));
                continue;
            }
            const chPrefix = (c === "u" || c === "U" || c === "L") && src[i + 1] === "'" ? 2
                : c === "'" ? 1 : 0;
            if (chPrefix > 0) {
                const sl = line, so = col;
                adv(chPrefix);
                let v = "";
                let closed = false;
                while (i < n) {
                    const d = src[i];
                    if (d === "\n")
                        CTJ.fail("unterminated character", file, sl, so);
                    if (d === "\\") {
                        v += d + (src[i + 1] || "");
                        adv(2);
                        continue;
                    }
                    if (d === "'") {
                        adv(1);
                        closed = true;
                        break;
                    }
                    v += d;
                    adv(1);
                }
                if (!closed)
                    CTJ.fail("unterminated character", file, sl, so);
                out.push(CTJ.tok("char", "'" + v + "'", file, sl, so));
                continue;
            }
            if (CTJ.isDigit(c) || (c === "." && CTJ.isDigit(src[i + 1] || ""))) {
                const sl = line, so = col;
                let v = "";
                while (i < n && (CTJ.isIdentChar(src[i]) || src[i] === "'" || src[i] === ".")) {
                    v += src[i];
                    adv(1);
                    if ((src[i - 1] === "e" || src[i - 1] === "E" || src[i - 1] === "p" || src[i - 1] === "P") &&
                        (src[i] === "+" || src[i] === "-")) {
                        v += src[i];
                        adv(1);
                    }
                }
                out.push(CTJ.tok("number", v, file, sl, so));
                continue;
            }
            if (CTJ.isIdentStart(c)) {
                const sl = line, so = col;
                let v = "";
                while (i < n && CTJ.isIdentChar(src[i])) {
                    v += src[i];
                    adv(1);
                }
                out.push(CTJ.tok("ident", v, file, sl, so));
                continue;
            }
            const three = src.slice(i, i + 3);
            if (OPS3[three]) {
                out.push(CTJ.tok(OPS3[three], three, file, line, col));
                adv(3);
                continue;
            }
            const two = src.slice(i, i + 2);
            if (OPS2[two]) {
                out.push(CTJ.tok(OPS2[two], two, file, line, col));
                adv(2);
                continue;
            }
            if (OPS1[c]) {
                out.push(CTJ.tok(OPS1[c], c, file, line, col));
                adv(1);
                continue;
            }
            CTJ.fail(`unexpected character '${c}'`, file, line, col);
        }
        out.push(CTJ.tok("eof", "", file, line, col));
        return out;
    }
    CTJ.lexFile = lexFile;
    function parseCString(raw) {
        let s = raw;
        const m = s.match(/^(u8|u|U|L)?"(.*)"$/s);
        if (m)
            s = m[2];
        else if (s.startsWith('"') && s.endsWith('"'))
            s = s.slice(1, -1);
        const out = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== "\\") {
                out.push(s.charCodeAt(i));
                continue;
            }
            const e = s[++i];
            if (e === "n")
                out.push(10);
            else if (e === "t")
                out.push(9);
            else if (e === "r")
                out.push(13);
            else if (e === "0")
                out.push(0);
            else if (e === "a")
                out.push(7);
            else if (e === "b")
                out.push(8);
            else if (e === "f")
                out.push(12);
            else if (e === "v")
                out.push(11);
            else if (e === "\\")
                out.push(92);
            else if (e === "'")
                out.push(39);
            else if (e === '"')
                out.push(34);
            else if (e === "?")
                out.push(63);
            else if (e === "x") {
                let h = "";
                while (h.length < 4 && /[0-9a-fA-F]/.test(s[i + 1] || ""))
                    h += s[++i];
                out.push(parseInt(h || "0", 16));
            }
            else if (e === "u" || e === "U") {
                const len = e === "u" ? 4 : 8;
                out.push(parseInt(s.slice(i + 1, i + 1 + len) || "0", 16));
                i += len;
            }
            else if (e >= "0" && e <= "7") {
                let o = e;
                while (o.length < 3 && /[0-7]/.test(s[i + 1] || ""))
                    o += s[++i];
                out.push(parseInt(o, 8));
            }
            else
                out.push(e.charCodeAt(0));
        }
        return out;
    }
    CTJ.parseCString = parseCString;
    function parseChar(raw) {
        const m = raw.match(/^(u|U|L)?'(.*)'$/s);
        const body = m ? m[2] : raw;
        const codes = parseCString('"' + body + '"');
        return codes.length ? codes[0] : 0;
    }
    CTJ.parseChar = parseChar;
    function parseNumber(raw) {
        const s = raw.replace(/'/g, "").replace(/[uUlLfF]+$/, "");
        if (/^0[xX]/.test(s))
            return parseInt(s, 16);
        if (/^0[bB]/.test(s))
            return parseInt(s.slice(2), 2);
        if (/^0[0-7]+$/.test(s))
            return parseInt(s, 8);
        return parseFloat(s);
    }
    CTJ.parseNumber = parseNumber;
    function splitArgs(tokens) {
        const out = [[]];
        let depth = 0;
        for (const t of tokens) {
            if (t.t === "(" || t.t === "[" || t.t === "{")
                depth++;
            if (t.t === ")" || t.t === "]" || t.t === "}")
                depth--;
            if (t.t === "," && depth === 0) {
                out.push([]);
                continue;
            }
            out[depth < 0 ? 0 : out.length - 1].push(t);
        }
        return out;
    }
    CTJ.splitArgs = splitArgs;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const MAX_DEPTH = 64;
    // libstdc++ writes its pedantic asserts as function-like macros that its
    // configuration header defines away unless a program asks for them. They carry
    // no behaviour, so the defaults come from here; "defines" can still override.
    CTJ.DEFAULT_EMPTY_FN_MACROS = ["_GLIBCXX_DEBUG_PEDASSERT"];
    CTJ.DEFAULT_PREDEFINED = {
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
    class Preprocessor {
        constructor(loadFile, includeDirs) {
            this.warnings = [];
            this.missing = [];
            this.macros = new Map();
            this.onceFiles = new Set();
            this.fileStack = [];
            this.fileDirIndex = new Map();
            this.loadFile = loadFile;
            this.includeDirs = includeDirs;
            for (const k of Object.keys(CTJ.DEFAULT_PREDEFINED)) {
                const toks = CTJ.lexFile(CTJ.DEFAULT_PREDEFINED[k], "<predefined>");
                toks.pop();
                this.macros.set(k, { params: null, variadic: false, body: toks });
            }
            for (const name of CTJ.DEFAULT_EMPTY_FN_MACROS) {
                this.macros.set(name, { params: [], variadic: true, body: [] });
            }
        }
        run(mainSrc, mainFile) {
            this.fileDirIndex.set(mainFile, -1);
            const out = this.processFile(mainSrc, mainFile);
            out.push(CTJ.tok("eof", "", mainFile, 0, 0));
            return { tokens: out, warnings: this.warnings, missing: this.missing };
        }
        warn(msg, file, line) {
            this.warnings.push(`${file}:${line}: ${msg}`);
        }
        normalize(path) {
            const parts = [];
            for (const p of path.split("/")) {
                if (p === "" || p === ".")
                    continue;
                if (p === "..")
                    parts.pop();
                else
                    parts.push(p);
            }
            return parts.join("/");
        }
        dirname(path) {
            const i = path.lastIndexOf("/");
            return i < 0 ? "" : path.slice(0, i);
        }
        resolveInclude(name, kind, fromFile, next) {
            var _a;
            const fromIdx = (_a = this.fileDirIndex.get(fromFile)) !== null && _a !== void 0 ? _a : -1;
            const cands = [];
            if (kind === "quote" && !next)
                cands.push({ dir: this.dirname(fromFile), idx: -1 });
            this.includeDirs.forEach((d, k) => cands.push({ dir: d, idx: k }));
            if (!cands.length)
                cands.push({ dir: "", idx: -1 });
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
        processFile(src, file) {
            if (this.fileStack.length >= MAX_DEPTH)
                CTJ.fail("include depth exceeded", file, 0, 0);
            if (this.fileStack.includes(file)) {
                this.warn("circular include skipped", file, 0);
                return [];
            }
            this.fileStack.push(file);
            const lexed = CTJ.lexFile(src, file);
            const out = [];
            const cond = [];
            const active = () => cond.every(f => f.active);
            let lineBuf = [];
            // A function-like macro call can run over several lines, and its arguments
            // have to be complete before it can be expanded, so an open parenthesis
            // keeps the line in the buffer.
            const flushLine = (force = false) => {
                if (lineBuf.length) {
                    let depth = 0;
                    for (const t of lineBuf) {
                        if (t.t === "(")
                            depth++;
                        else if (t.t === ")")
                            depth--;
                    }
                    if (!force && depth > 0)
                        return;
                    const exp = this.expandTokens(lineBuf, new Set(), file, lineBuf[0].line);
                    for (const s of exp) {
                        if (s.t !== "directive")
                            out.push(s);
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
                    if (lineBuf.length && lineBuf[0].line !== t.line)
                        flushLine();
                    if (!active())
                        continue;
                    lineBuf.push(t);
                    continue;
                }
                flushLine(true);
                const m = t.v.match(/^#\s*([A-Za-z_]\w*)([\s\S]*)$/);
                if (!m)
                    continue;
                const dir = m[1];
                const rest = m[2].trim();
                if (dir === "if" || dir === "ifdef" || dir === "ifndef") {
                    const parent = active();
                    let take = false;
                    if (parent) {
                        if (dir === "ifdef")
                            take = this.macros.has(rest.split(/\s/)[0]);
                        else if (dir === "ifndef")
                            take = !this.macros.has(rest.split(/\s/)[0]);
                        else
                            take = this.evalCond(rest, file, t.line) !== 0;
                    }
                    cond.push({ parent, taken: take, active: parent && take });
                    continue;
                }
                if (dir === "elif") {
                    const f = cond.pop();
                    if (!f)
                        CTJ.fail("#elif without #if", file, t.line, t.col);
                    let take = false;
                    if (f.parent && !f.taken)
                        take = this.evalCond(rest, file, t.line) !== 0;
                    cond.push({ parent: f.parent, taken: f.taken || take, active: f.parent && !f.taken && take });
                    continue;
                }
                if (dir === "else") {
                    const f = cond.pop();
                    if (!f)
                        CTJ.fail("#else without #if", file, t.line, t.col);
                    cond.push({ parent: f.parent, taken: true, active: f.parent && !f.taken });
                    continue;
                }
                if (dir === "endif") {
                    if (!cond.pop())
                        CTJ.fail("#endif without #if", file, t.line, t.col);
                    continue;
                }
                if (!active())
                    continue;
                if (dir === "include" || dir === "include_next") {
                    this.doInclude(rest, file, t.line, t.col, dir === "include_next", out);
                }
                else if (dir === "define") {
                    this.doDefine(rest, file, t.line);
                }
                else if (dir === "undef") {
                    this.macros.delete(rest.split(/\s/)[0]);
                }
                else if (dir === "error") {
                    CTJ.fail(`#error ${rest}`, file, t.line, t.col);
                }
                else if (dir === "warning") {
                    this.warn(`#warning ${rest}`, file, t.line);
                }
                else if (dir === "pragma") {
                    if (rest === "once")
                        this.onceFiles.add(file);
                }
                else if (dir === "line" || dir === "ident" || dir === "sccs" || dir === "assert" || dir === "unassert") {
                    continue;
                }
                else {
                    this.warn(`unknown directive #${dir}`, file, t.line);
                }
            }
            if (cond.length)
                CTJ.fail("unterminated #if", file, 0, 0);
            this.fileStack.pop();
            return out;
        }
        doInclude(rest, file, line, col, next, out) {
            let name = "";
            let kind = "angle";
            const rawA = rest.match(/^<(.*)>$/s);
            const rawQ = rest.match(/^"(.*)"$/s);
            if (rawA) {
                name = rawA[1].trim();
                kind = "angle";
            }
            else if (rawQ) {
                name = rawQ[1].trim();
                kind = "quote";
            }
            else {
                const expanded = this.expandText(rest, file, line);
                if (expanded.length === 1 && expanded[0].t === "string") {
                    name = expanded[0].v.slice(1, -1);
                    kind = "quote";
                }
                else if (expanded.length >= 2 && expanded[0].t === "<" && CTJ.last(expanded).t === ">") {
                    name = expanded.slice(1, -1).map(t => t.v).join("").trim();
                    kind = "angle";
                }
                else {
                    this.warn(`bad include line: ${rest}`, file, line);
                    return;
                }
            }
            const full = this.resolveInclude(name, kind, file, next);
            if (full === null) {
                if (!this.missing.includes(name))
                    this.missing.push(name);
                this.warn(`header not found: ${name}`, file, line);
                return;
            }
            if (this.onceFiles.has(full))
                return;
            const content = this.loadFile(full);
            if (content === null)
                return;
            const sub = this.processFile(content, full);
            for (const t of sub)
                out.push(t);
        }
        doDefine(rest, file, line) {
            const m = rest.match(/^([A-Za-z_]\w*)(\((.*?)\)|)([\s\S]*)$/);
            if (!m)
                return;
            const name = m[1];
            let isFunc = rest.startsWith(name + "(");
            if (isFunc && rest.indexOf(")") < 0)
                isFunc = false;
            if (!isFunc) {
                const body = m[4] || "";
                const toks = CTJ.lexFile(body, file).filter(t => t.t !== "eof");
                this.macros.set(name, { params: null, variadic: false, body: toks });
                return;
            }
            const argText = m[3] || "";
            const params = [];
            let variadic = false;
            if (argText.trim()) {
                for (const p of argText.split(",")) {
                    const t = p.trim();
                    if (t === "...")
                        variadic = true;
                    else if (t)
                        params.push(t);
                }
            }
            const body = rest.slice(rest.indexOf(")") + 1);
            const toks = CTJ.lexFile(body, file).filter(t => t.t !== "eof");
            this.macros.set(name, { params, variadic, body: toks });
        }
        expandText(text, file, line) {
            const toks = CTJ.lexFile(text, file).filter(t => t.t !== "eof");
            return this.expandTokens(toks, new Set(), file, line);
        }
        expandTokens(tokens, disabled, file, line) {
            const out = [];
            for (let i = 0; i < tokens.length; i++) {
                const t = tokens[i];
                if (t.t === "ident" && !disabled.has(t.v)) {
                    if (t.v === "__FILE__") {
                        out.push(CTJ.tok("string", JSON.stringify(file), t.file, t.line, t.col));
                        continue;
                    }
                    if (t.v === "__LINE__") {
                        out.push(CTJ.tok("number", String(t.line), t.file, t.line, t.col));
                        continue;
                    }
                    if (t.v === "__DATE__") {
                        out.push(CTJ.tok("string", JSON.stringify("Jan  1 2026"), t.file, t.line, t.col));
                        continue;
                    }
                    if (t.v === "__TIME__") {
                        out.push(CTJ.tok("string", JSON.stringify("00:00:00"), t.file, t.line, t.col));
                        continue;
                    }
                    if (t.v === "__COUNTER__") {
                        out.push(CTJ.tok("number", "0", t.file, t.line, t.col));
                        continue;
                    }
                    const macro = this.macros.get(t.v);
                    if (!macro) {
                        out.push(t);
                        continue;
                    }
                    if (macro.params === null) {
                        const sub = this.expandTokens(macro.body, new Set([...disabled, t.v]), file, line);
                        for (const s of sub)
                            out.push(s);
                        continue;
                    }
                    const nx = tokens[i + 1];
                    if (!nx || nx.t !== "(") {
                        out.push(t);
                        continue;
                    }
                    let j = i + 1;
                    let depth = 0;
                    const args = [[]];
                    for (j = i + 1; j < tokens.length; j++) {
                        const u = tokens[j];
                        if (u.t === "(") {
                            depth++;
                            if (depth > 1)
                                args[args.length - 1].push(u);
                        }
                        else if (u.t === ")") {
                            depth--;
                            if (depth === 0)
                                break;
                            args[args.length - 1].push(u);
                        }
                        else if (u.t === "," && depth === 1)
                            args.push([]);
                        else
                            args[args.length - 1].push(u);
                    }
                    if (j >= tokens.length) {
                        out.push(t);
                        continue;
                    }
                    i = j;
                    const subbed = this.substMacro(macro, args);
                    const sub = this.expandTokens(subbed, new Set([...disabled, t.v]), file, line);
                    for (const s of sub)
                        out.push(s);
                    continue;
                }
                out.push(t);
            }
            return out;
        }
        substMacro(macro, args) {
            const params = macro.params || [];
            const fixed = macro.variadic ? args.slice(0, params.length) : args;
            while (fixed.length < params.length)
                fixed.push([]);
            const vastart = macro.variadic ? args.slice(params.length) : [];
            const getArg = (name) => {
                const idx = params.indexOf(name);
                if (idx >= 0)
                    return fixed[idx];
                if (macro.variadic && name === "__VA_ARGS__") {
                    const r = [];
                    vastart.forEach((a, k) => {
                        if (k)
                            r.push(CTJ.tok(",", ",", "", 0, 0));
                        for (const t of a)
                            r.push(t);
                    });
                    return r;
                }
                return null;
            };
            const body = macro.body;
            const out = [];
            for (let i = 0; i < body.length; i++) {
                const t = body[i];
                if (t.t === "#" && body[i + 1] && body[i + 1].t === "ident") {
                    const a = getArg(body[i + 1].v);
                    i++;
                    if (!a) {
                        out.push(t);
                        continue;
                    }
                    out.push(CTJ.tok("string", JSON.stringify(a.map(x => x.v).join(" ")), t.file, t.line, t.col));
                    continue;
                }
                if (t.t === "##") {
                    const prev = out.pop();
                    const next = body[++i];
                    if (!prev || !next)
                        continue;
                    const pv = prev.t === "ident" && params.includes(prev.v) ? getArg(prev.v) : null;
                    const nv = next.t === "ident" && params.includes(next.v) ? getArg(next.v) : null;
                    const ps = pv ? pv.map(x => x.v).join("") : prev.v;
                    const ns = nv ? nv.map(x => x.v).join("") : next.v;
                    const joined = ps + ns;
                    if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(joined))
                        out.push(CTJ.tok("ident", joined, prev.file, prev.line, prev.col));
                    else if (/^[0-9]/.test(joined))
                        out.push(CTJ.tok("number", joined, prev.file, prev.line, prev.col));
                    else {
                        for (const x of CTJ.lexFile(joined, prev.file)) {
                            if (x.t !== "eof")
                                out.push(x);
                        }
                    }
                    continue;
                }
                if (t.t === "ident") {
                    const a = getArg(t.v);
                    if (a) {
                        for (const x of a)
                            out.push(x);
                        continue;
                    }
                }
                out.push(t);
            }
            return out;
        }
        evalCond(text, file, line) {
            let toks = CTJ.lexFile(text, file).filter(t => t.t !== "eof");
            const pre = [];
            for (let i = 0; i < toks.length; i++) {
                const t = toks[i];
                if (t.t === "ident" && t.v === "defined") {
                    const n1 = toks[i + 1];
                    if (n1 && n1.t === "ident") {
                        pre.push(CTJ.tok("number", this.macros.has(n1.v) ? "1" : "0", file, line, 0));
                        i++;
                    }
                    else if (n1 && n1.t === "(" && toks[i + 2] && toks[i + 2].t === "ident") {
                        pre.push(CTJ.tok("number", this.macros.has(toks[i + 2].v) ? "1" : "0", file, line, 0));
                        i += 3;
                    }
                    else
                        pre.push(t);
                    continue;
                }
                if (t.t === "ident" && t.v === "__has_include") {
                    let j = i + 1;
                    let name = "";
                    if (toks[j] && toks[j].t === "(") {
                        j++;
                        const parts = [];
                        while (toks[j] && toks[j].t !== ")")
                            parts.push(toks[j++].v);
                        name = parts.join("").trim();
                    }
                    const mm = name.match(/^<(.*)>$/) || name.match(/^"(.*)"$/);
                    const hname = mm ? mm[1] : name;
                    const found = this.resolveInclude(hname, "angle", file, false) !== null;
                    pre.push(CTJ.tok("number", found ? "1" : "0", file, line, 0));
                    i = j;
                    continue;
                }
                pre.push(t);
            }
            toks = this.expandTokens(pre, new Set(), file, line);
            const vals = toks.map(t => {
                if (t.t === "ident")
                    return CTJ.tok("number", "0", t.file, t.line, t.col);
                if (t.t === "char")
                    return CTJ.tok("number", String(CTJ.parseChar(t.v)), t.file, t.line, t.col);
                return t;
            });
            return new CondEval(vals, file, line).parse();
        }
    }
    CTJ.Preprocessor = Preprocessor;
    class CondEval {
        constructor(toks, file, line) {
            this.pos = 0;
            this.toks = toks;
            this.file = file;
            this.line = line;
        }
        peek() { return this.toks[this.pos] || CTJ.tok("eof", "", this.file, this.line, 0); }
        next() { return this.toks[this.pos++] || CTJ.tok("eof", "", this.file, this.line, 0); }
        eat(t) {
            if (this.peek().t === t) {
                this.pos++;
                return true;
            }
            return false;
        }
        parse() { return this.cond(); }
        cond() {
            const c = this.or();
            if (this.eat("?")) {
                const a = this.cond();
                this.eat(":");
                const b = this.cond();
                return c ? a : b;
            }
            return c;
        }
        or() {
            let v = this.and();
            while (this.eat("||")) {
                const r = this.and();
                v = (v || r) ? 1 : 0;
            }
            return v;
        }
        and() {
            let v = this.bor();
            while (this.eat("&&")) {
                const r = this.bor();
                v = (v && r) ? 1 : 0;
            }
            return v;
        }
        bor() {
            let v = this.bxor();
            while (this.eat("|"))
                v |= this.bxor();
            return v;
        }
        bxor() {
            let v = this.band();
            while (this.eat("^"))
                v ^= this.band();
            return v;
        }
        band() {
            let v = this.eq();
            while (this.eat("&"))
                v &= this.eq();
            return v;
        }
        eq() {
            let v = this.rel();
            for (;;) {
                if (this.eat("=="))
                    v = v === this.rel() ? 1 : 0;
                else if (this.eat("!="))
                    v = v !== this.rel() ? 1 : 0;
                else
                    return v;
            }
        }
        rel() {
            let v = this.shift();
            for (;;) {
                if (this.eat("<"))
                    v = v < this.shift() ? 1 : 0;
                else if (this.eat(">"))
                    v = v > this.shift() ? 1 : 0;
                else if (this.eat("<="))
                    v = v <= this.shift() ? 1 : 0;
                else if (this.eat(">="))
                    v = v >= this.shift() ? 1 : 0;
                else
                    return v;
            }
        }
        shift() {
            let v = this.add();
            for (;;) {
                if (this.eat("<<"))
                    v = v << this.add();
                else if (this.eat(">>"))
                    v = v >> this.add();
                else
                    return v;
            }
        }
        add() {
            let v = this.mul();
            for (;;) {
                if (this.eat("+"))
                    v += this.mul();
                else if (this.eat("-"))
                    v -= this.mul();
                else
                    return v;
            }
        }
        mul() {
            let v = this.un();
            for (;;) {
                if (this.eat("*"))
                    v *= this.un();
                else if (this.eat("/")) {
                    const d = this.un();
                    v = d === 0 ? 0 : Math.trunc(v / d);
                }
                else if (this.eat("%")) {
                    const d = this.un();
                    v = d === 0 ? 0 : v % d;
                }
                else
                    return v;
            }
        }
        un() {
            if (this.eat("!"))
                return this.un() ? 0 : 1;
            if (this.eat("~"))
                return ~this.un();
            if (this.eat("-"))
                return -this.un();
            if (this.eat("+"))
                return this.un();
            return this.prim();
        }
        prim() {
            const t = this.next();
            if (t.t === "number")
                return CTJ.parseNumber(t.v);
            if (t.t === "(") {
                const v = this.cond();
                this.eat(")");
                return v;
            }
            return 0;
        }
    }
    async function collectHeaders(mainSrc, mainFile, includeDirs, loadAsync) {
        const files = new Map();
        files.set(mainFile, mainSrc);
        const norm = (p) => {
            const parts = [];
            for (const s of p.split("/")) {
                if (s === "" || s === ".")
                    continue;
                if (s === "..")
                    parts.pop();
                else
                    parts.push(s);
            }
            return parts.join("/");
        };
        const dirOf = (p) => {
            const i = p.lastIndexOf("/");
            return i < 0 ? "" : p.slice(0, i);
        };
        const queue = [mainFile];
        const tried = new Set();
        while (queue.length) {
            const f = queue.pop();
            const src = files.get(f);
            if (src === undefined)
                continue;
            let lexed;
            try {
                lexed = CTJ.lexFile(src, f);
            }
            catch {
                continue;
            }
            for (const t of lexed) {
                if (t.t !== "directive")
                    continue;
                const m = t.v.match(/^#\s*(include|include_next)\s*(<[^>]*>|"[^"]*")/);
                if (!m)
                    continue;
                const spec = m[2];
                const isQuote = spec.startsWith('"');
                const name = spec.slice(1, -1);
                const dirs = [];
                if (isQuote)
                    dirs.push(dirOf(f));
                for (const d of includeDirs)
                    dirs.push(d);
                for (const d of dirs) {
                    const full = norm((d ? d + "/" : "") + name);
                    if (tried.has(full)) {
                        if (files.has(full))
                            break;
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
                    }
                    catch { /* ignore */ }
                }
            }
        }
        return files;
    }
    CTJ.collectHeaders = collectHeaders;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function at(t) {
        return { file: t.file, line: t.line };
    }
    CTJ.at = at;
    function qseg(n, a = []) {
        return { n, a };
    }
    CTJ.qseg = qseg;
    function typeNode(parts, a) {
        return {
            kind: "type", parts, global: false, ptr: 0, ref: "",
            cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null,
            file: a ? a.file : "", line: a ? a.line : 0,
        };
    }
    CTJ.typeNode = typeNode;
    function incKind(u) {
        if (u.op === "++" || u.op === "++post")
            return "++";
        if (u.op === "--" || u.op === "--post")
            return "--";
        return null;
    }
    CTJ.incKind = incKind;
    // The parser spells both forms "++"/"--" and tells them apart with `postfix`.
    function isPostfix(u) {
        return u.postfix || u.op === "++post" || u.op === "--post";
    }
    CTJ.isPostfix = isPostfix;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function blankDeclarator() {
        return {
            name: [], global: false, op: "", convType: null, ptr: 0, ref: "",
            dims: [], isFunc: false, params: [], funcCnst: false,
            trailing: null, isMemPtr: false, special: "", isPack: false,
        };
    }
    CTJ.blankDeclarator = blankDeclarator;
    const SPEC_FLAGS = new Set([
        "static", "extern", "inline", "virtual", "explicit", "friend",
        "constexpr", "mutable", "register", "thread_local",
    ]);
    const SIGN_FLAGS = new Set(["signed", "unsigned", "short", "long"]);
    const BASE_TYPES = new Set([
        "void", "bool", "char", "char16_t", "char32_t", "wchar_t",
        "int", "float", "double",
    ]);
    const CV_FLAGS = new Set(["const", "volatile"]);
    const GNU_SKIP = new Set([
        "__extension__", "__restrict__", "__restrict", "__volatile__", "__const__",
        "__inline__", "__inline", "__thread", "__cdecl", "__stdcall", "__fastcall",
    ]);
    const GNU_CALL = new Set(["__attribute__", "__attribute", "__asm__", "__asm", "asm", "__declspec"]);
    class Parser {
        constructor(toks) {
            this.pos = 0;
            this.warnings = [];
            this.inClass = [];
            this.typeScopes = [new Set()];
            this.nsNames = new Set();
            this.classTypes = new Map();
            this.pending = [];
            this.anon = { n: 0 };
            this.toks = toks;
        }
        peek(k = 0) {
            return this.toks[this.pos + k] || CTJ.tok("eof", "", "", 0, 0);
        }
        next() {
            const t = this.peek();
            if (t.t !== "eof")
                this.pos++;
            return t;
        }
        atEnd() {
            return this.peek().t === "eof";
        }
        eat(t) {
            if (this.peek().t === t) {
                this.pos++;
                return true;
            }
            return false;
        }
        expect(t) {
            const p = this.peek();
            if (p.t !== t)
                CTJ.fail(`expected '${t}', got '${p.v}'`, p.file, p.line, p.col);
            this.pos++;
            return p;
        }
        isIdent(v, k = 0) {
            const p = this.peek(k);
            return p.t === "ident" && (v === undefined || p.v === v);
        }
        mark() {
            return this.pos;
        }
        reset(m) {
            this.pos = m;
        }
        warn(msg, t) {
            const p = t || this.peek();
            this.warnings.push(`${p.file}:${p.line}: ${msg}`);
        }
        eatGt() {
            const t = this.peek();
            if (t.t === ">") {
                this.pos++;
                return true;
            }
            if (t.t === ">>") {
                t.t = ">";
                t.v = ">";
                this.toks.splice(this.pos + 1, 0, CTJ.tok(">", ">", t.file, t.line, t.col));
                this.pos++;
                return true;
            }
            return false;
        }
        skipGnu() {
            for (;;) {
                const t = this.peek();
                if (t.t !== "ident")
                    return;
                if (GNU_SKIP.has(t.v)) {
                    this.pos++;
                    continue;
                }
                if (GNU_CALL.has(t.v)) {
                    this.pos++;
                    if (this.peek().t === "(")
                        this.skipBalanced("(", ")");
                    continue;
                }
                return;
            }
        }
        skipBalanced(open, close) {
            this.expect(open);
            let depth = 1;
            while (depth > 0) {
                const t = this.next();
                if (t.t === "eof")
                    CTJ.fail("unterminated bracket", t.file, t.line, t.col);
                if (t.t === open)
                    depth++;
                if (t.t === close)
                    depth--;
            }
        }
        collectBalanced() {
            const start = this.pos;
            const o = this.peek();
            const pairs = { "(": ")", "[": "]", "{": "}" };
            const close = pairs[o.t];
            if (!close)
                CTJ.fail(`expected bracket, got '${o.v}'`, o.file, o.line, o.col);
            this.skipBalanced(o.t, close);
            return this.toks.slice(start, this.pos);
        }
        pushScope() {
            this.typeScopes.push(new Set());
        }
        popScope() {
            if (this.typeScopes.length > 1)
                this.typeScopes.pop();
        }
        registerType(name) {
            CTJ.last(this.typeScopes).add(name);
        }
        registerNamespace(name) {
            this.nsNames.add(name);
        }
        // The type names declared inside a class, kept so that they can be made
        // visible again when a member of that class is defined outside of it.
        recordClassTypes(name) {
            this.classTypes.set(name, new Set(CTJ.last(this.typeScopes)));
        }
        // The type names declared by the classes a qualified name is written against:
        // "Cls::N::method" sees the typedefs of Cls and of N alike.
        ownerTypeScope(name) {
            let all;
            for (let i = 0; i + 1 < name.length; i++) {
                const s = this.classTypes.get(name[i].n);
                if (!s)
                    continue;
                if (!all)
                    all = new Set();
                for (const n of s)
                    all.add(n);
            }
            return all;
        }
        pushTypeScope(names) {
            this.typeScopes.push(names);
        }
        isTypeName(name) {
            if (CTJ.BASIC_TYPES.has(name) || name === "auto")
                return true;
            for (let i = this.typeScopes.length - 1; i >= 0; i--) {
                if (this.typeScopes[i].has(name))
                    return true;
            }
            return false;
        }
        spawn(toks) {
            const p = new Parser(toks);
            p.warnings = this.warnings;
            p.typeScopes = this.typeScopes;
            p.nsNames = this.nsNames;
            p.classTypes = this.classTypes;
            p.anon = this.anon;
            return p;
        }
        anonName(hint) {
            return `$${hint}_${this.anon.n++}`;
        }
        parseTU() {
            const decls = [];
            while (!this.atEnd()) {
                try {
                    for (const d of this.parseDecls(false))
                        decls.push(d);
                }
                catch (e) {
                    if (e instanceof CTJ.CtxError) {
                        this.warn(`parse error: ${e.message} at ${e.where()}, skipping`, this.peek());
                        this.recover();
                    }
                    else
                        throw e;
                }
            }
            return { decls, file: "", line: 0 };
        }
        recover() {
            let depth = 0;
            for (;;) {
                const t = this.peek();
                if (t.t === "eof")
                    return;
                if (t.t === "{") {
                    depth++;
                    this.pos++;
                    continue;
                }
                if (t.t === "}") {
                    this.pos++;
                    if (depth === 0)
                        return;
                    depth--;
                    continue;
                }
                if (t.t === ";" && depth === 0) {
                    this.pos++;
                    return;
                }
                this.pos++;
            }
        }
        parseDecls(inClass) {
            this.skipGnu();
            const t = this.peek();
            if (inClass && t.t === "ident" && CTJ.ACCESS.has(t.v) && this.peek(1).t === ":") {
                this.pos += 2;
                return [{ kind: "access", access: t.v, ...CTJ.at(t) }];
            }
            if (t.t === ";") {
                this.pos++;
                return [{ kind: "empty", ...CTJ.at(t) }];
            }
            // "~Cls()" starts a destructor, which has no return type of its own.
            if (t.t !== "ident" && t.t !== "~")
                CTJ.fail(`expected declaration, got '${t.v}'`, t.file, t.line, t.col);
            if (t.v === "inline" && this.peek(1).t === "ident" && this.peek(1).v === "namespace") {
                this.pos++;
                return [CTJ.parseNamespace(this, true)];
            }
            switch (t.v) {
                case "template": return [CTJ.parseTemplate(this, inClass)];
                case "namespace": return [CTJ.parseNamespace(this, false)];
                case "using": return CTJ.parseUsing(this);
                case "typedef": return CTJ.parseTypedef(this);
                case "static_assert": return [CTJ.parseStaticAssert(this)];
                case "extern":
                    if (this.peek(1).t === "string")
                        return CTJ.parseExtern(this);
                    return this.parseSimpleDecls(inClass);
                case "class":
                case "struct":
                case "union":
                case "enum": return CTJ.parseClassOrEnumDecl(this, inClass);
                case "asm":
                    this.pos++;
                    if (this.peek().t === "(")
                        this.skipBalanced("(", ")");
                    this.eat(";");
                    return [{ kind: "empty", ...CTJ.at(t) }];
                default: return this.parseSimpleDecls(inClass);
            }
        }
        parseSimpleDecls(inClass) {
            const start = this.peek();
            const spec = this.parseDeclSpec();
            if (this.isIdent("template")) {
                const td = CTJ.parseTemplate(this, inClass);
                if (spec.flags.includes("extern"))
                    return [];
                if (spec.flags.length || spec.type)
                    this.warn("specifiers before template ignored", start);
                return [td];
            }
            const out = [];
            if (spec.defined)
                out.push(spec.defined);
            if (this.peek().t === ";") {
                this.pos++;
                return out;
            }
            for (;;) {
                this.skipGnu();
                if (this.peek().t === ";") {
                    this.pos++;
                    break;
                }
                const d = this.parseDeclarator();
                if (!spec.type && !d.name.length && !d.op && !d.convType) {
                    CTJ.fail("expected declarator", this.peek().file, this.peek().line, this.peek().col);
                }
                const type = this.applyDeclarator(spec.type, d, start);
                if (d.isFunc) {
                    const fn = this.finishFunc(spec, d, type, inClass, start);
                    out.push(spec.isFriend ? this.wrapFriend(fn, start) : fn);
                    break;
                }
                const v = {
                    kind: "var", name: d.name, type, init: null, directInit: null,
                    flags: spec.flags.slice(), bitfield: null, isParam: false, ...CTJ.at(start),
                };
                CTJ.parseVarSuffix(this, v, inClass);
                if (spec.isTypedef) {
                    const td = {
                        kind: "typedef", name: d.name.length ? CTJ.last(d.name).n : "",
                        type, ...CTJ.at(start),
                    };
                    if (td.name)
                        this.registerType(td.name);
                    out.push(td);
                }
                else {
                    out.push(spec.isFriend ? this.wrapFriend(v, start) : v);
                }
                if (this.eat(","))
                    continue;
                this.expect(";");
                break;
            }
            return out;
        }
        wrapFriend(d, t) {
            return { kind: "friend", decl: d, ...CTJ.at(t) };
        }
        applyDeclarator(base, d, t) {
            const tn = base ? this.cloneType(base) : CTJ.typeNode([], CTJ.at(t));
            tn.ptr += d.ptr;
            if (d.ref)
                tn.ref = d.ref;
            for (const dim of d.dims)
                tn.dims.push(dim);
            if (d.isFunc) {
                tn.func = { params: d.params.map(p => p.type), variadic: d.params.some(p => p.variadic) };
            }
            return tn;
        }
        cloneType(t) {
            return {
                kind: "type", parts: t.parts.map(s => ({ n: s.n, a: s.a.map(x => this.cloneType(x)) })),
                global: t.global, ptr: t.ptr, ref: t.ref, cnst: t.cnst,
                dims: t.dims.slice(), func: t.func ? { params: t.func.params.slice(), variadic: t.func.variadic } : null,
                decltypeOf: t.decltypeOf, packExpand: t.packExpand, valueArg: t.valueArg, file: t.file, line: t.line,
            };
        }
        finishFunc(spec, d, type, inClass, start) {
            let ret = null;
            if (type) {
                ret = this.cloneType(type);
                ret.func = null;
                ret.dims = [];
            }
            let isCtor = false;
            let isDtor = false;
            let isConv = false;
            if (d.convType) {
                ret = d.convType;
                isConv = true;
            }
            else if (d.op === "~") {
                ret = null;
                isDtor = true;
            }
            else if (!spec.type && !d.op) {
                ret = null;
                isCtor = true;
            }
            const fn = {
                kind: "func", name: d.name, ret, params: d.params, body: null,
                flags: spec.flags.slice(), op: d.op, ctorInit: [], isCtor, isDtor,
                isConv, isDefault: false, isDelete: false, trailing: d.trailing, ...CTJ.at(start),
            };
            if (d.funcCnst)
                fn.flags.push("const");
            if (d.special === "default")
                fn.isDefault = true;
            if (d.special === "delete")
                fn.isDelete = true;
            if (d.special === "pure")
                fn.flags.push("pure");
            if (this.eat(":")) {
                do {
                    const nm = this.parseQualifiedName(true);
                    let args = [];
                    if (this.peek().t === "(") {
                        this.pos++;
                        args = this.parseExprList(")");
                    }
                    else if (this.peek().t === "{") {
                        const il = this.parseInitList();
                        args = [il];
                    }
                    fn.ctorInit.push({ name: nm, args, ...CTJ.at(start) });
                } while (this.eat(","));
            }
            if (this.peek().t === "{" || this.isIdent("try")) {
                if (inClass) {
                    const toks = this.collectBalancedTry();
                    this.pending.push({ func: fn, toks, types: this.typeScopes.map(s => new Set(s)) });
                }
                else {
                    // The members of the class are in scope in the body of an out-of-line
                    // member definition, so its type names stay visible while parsing it.
                    const owner = this.ownerTypeScope(d.name);
                    if (owner)
                        this.pushTypeScope(owner);
                    try {
                        fn.body = this.parseFuncBody();
                    }
                    finally {
                        if (owner)
                            this.popScope();
                    }
                }
            }
            else {
                this.expect(";");
            }
            return fn;
        }
        collectBalancedTry() {
            const start = this.pos;
            if (this.isIdent("try"))
                this.pos++;
            this.skipBalanced("{", "}");
            while (this.isIdent("catch")) {
                this.pos++;
                this.skipBalanced("(", ")");
                this.skipBalanced("{", "}");
            }
            return this.toks.slice(start, this.pos);
        }
        parseFuncBody() {
            if (this.isIdent("try")) {
                const t = this.next();
                const body = CTJ.parseCompound(this);
                const handlers = this.parseCatchList();
                return [{ kind: "try", body, handlers, ...CTJ.at(t) }];
            }
            return [CTJ.parseCompound(this)];
        }
        parseCatchList() {
            const out = [];
            while (this.isIdent("catch")) {
                const t = this.next();
                this.expect("(");
                let vdecl = null;
                let ellipsis = false;
                if (this.eat("..."))
                    ellipsis = true;
                else {
                    const spec = this.parseDeclSpec();
                    const d = this.parseDeclarator();
                    const type = this.applyDeclarator(spec.type, d, t);
                    vdecl = {
                        kind: "var", name: d.name.length ? d.name : [CTJ.qseg("")], type,
                        init: null, directInit: null, flags: [], bitfield: null,
                        isParam: true, ...CTJ.at(t),
                    };
                }
                this.expect(")");
                const body = CTJ.parseCompound(this);
                out.push({ vdecl, ellipsis, body, ...CTJ.at(t) });
            }
            if (!out.length) {
                const t = this.peek();
                CTJ.fail("expected catch handler", t.file, t.line, t.col);
            }
            return out;
        }
        flushPending() {
            const list = this.pending;
            this.pending = [];
            for (const p of list) {
                const sub = this.spawn(p.toks);
                sub.typeScopes = p.types;
                p.func.body = sub.parseFuncBody();
                if (!sub.atEnd())
                    sub.warn("trailing tokens in function body");
            }
        }
        typeTailIsType(q) {
            if (!q.parts.length)
                return true;
            const b = q.parts[q.parts.length - 1].n;
            if (b.startsWith("~"))
                return false;
            if (this.isTypeName(b))
                return true;
            if (q.parts.length < 2)
                return false;
            // "Outer::Inner x" / "std::streampos x": the head of a qualified name is a
            // class or a namespace, and only the whole name denotes the type.  When a
            // "(" follows, the name is the function being defined instead.
            if (!this.isTypeName(q.parts[0].n) && !this.nsNames.has(q.parts[0].n))
                return false;
            return this.peek().t !== "(";
        }
        isCtorDefName(q) {
            if (this.peek().t !== "(")
                return false;
            if (q.parts.length < 2)
                return false;
            const a = q.parts[q.parts.length - 2].n;
            const b = q.parts[q.parts.length - 1].n;
            if (b.startsWith("~"))
                return true;
            return a === b || !this.isTypeName(b);
        }
        parseDeclSpec() {
            const flags = [];
            let type = null;
            let isTypedef = false;
            let isFriend = false;
            let defined = null;
            const prefix = [];
            let sawConst = false;
            for (;;) {
                this.skipGnu();
                const t = this.peek();
                if (t.t === "::") {
                    const m = this.mark();
                    try {
                        const q = this.parseQualifiedType();
                        if (this.isCtorDefName(q)) {
                            this.reset(m);
                            break;
                        }
                        if (!this.typeTailIsType(q)) {
                            this.reset(m);
                            break;
                        }
                        type = this.mergeBase(type, q, prefix, t);
                    }
                    catch {
                        this.reset(m);
                        break;
                    }
                    continue;
                }
                if (t.t !== "ident")
                    break;
                const v = t.v;
                if (v === "typedef") {
                    isTypedef = true;
                    this.pos++;
                    continue;
                }
                if (v === "alignas") {
                    this.pos++;
                    if (this.peek().t === "(")
                        this.skipBalanced("(", ")");
                    continue;
                }
                if (SPEC_FLAGS.has(v)) {
                    flags.push(v);
                    if (v === "friend")
                        isFriend = true;
                    this.pos++;
                    continue;
                }
                if (CV_FLAGS.has(v)) {
                    if (v === "const")
                        sawConst = true;
                    this.pos++;
                    continue;
                }
                if (SIGN_FLAGS.has(v) || BASE_TYPES.has(v)) {
                    prefix.push(v);
                    this.pos++;
                    continue;
                }
                if (v === "auto") {
                    prefix.push("auto");
                    this.pos++;
                    continue;
                }
                if (v === "decltype" || v === "__typeof__" || v === "__typeof") {
                    this.pos++;
                    this.expect("(");
                    const e = CTJ.parseExpr(this, 0);
                    this.expect(")");
                    const tn = CTJ.typeNode([], CTJ.at(t));
                    tn.decltypeOf = e;
                    type = this.mergeBase(type, tn, prefix, t);
                    continue;
                }
                if (v === "typename") {
                    this.pos++;
                    const q = this.parseQualifiedType();
                    type = this.mergeBase(type, q, prefix, t);
                    continue;
                }
                if (v === "class" || v === "struct" || v === "union" || v === "enum") {
                    const r = CTJ.parseClassOrEnumSpec(this);
                    if (r.decl)
                        defined = r.decl;
                    type = this.mergeBase(type, r.type, prefix, t);
                    continue;
                }
                if (v === "operator" || v === "template" || v === "~")
                    break;
                if (!this.isTypeName(v) && this.peek(1).t !== "::" && this.peek(1).t !== "<")
                    break;
                if (this.peek(1).t === "(" && !type && !prefix.length)
                    break;
                // "typedef typename R::iterator iterator;": once a type is complete, an
                // identifier that is itself a type name is the declarator being declared
                // rather than another piece of the type.
                if (type && this.isTypeName(v) && this.peek(1).t !== "::" && this.peek(1).t !== "<"
                    && (this.peek(1).t === ";" || this.peek(1).t === "," || this.peek(1).t === "="
                        || this.peek(1).t === "(" || this.peek(1).t === "["))
                    break;
                // "unsigned long size_t": with base keywords already seen, the type name
                // that follows is the declarator being declared, not part of the type.
                if (prefix.length && !type)
                    break;
                const m = this.mark();
                try {
                    const q = this.parseQualifiedType();
                    if (this.isCtorDefName(q)) {
                        this.reset(m);
                        break;
                    }
                    // With a type already in hand, a qualified name that an "=" or a ";"
                    // follows is the declarator being declared rather than more of the type:
                    // "typename W<T>::size_type W<T>::npos = 100;".
                    if (type && (this.peek().t === "=" || this.peek().t === ";" || this.peek().t === ",")) {
                        this.reset(m);
                        break;
                    }
                    if (!this.typeTailIsType(q)) {
                        this.reset(m);
                        break;
                    }
                    type = this.mergeBase(type, q, prefix, t);
                }
                catch {
                    this.reset(m);
                    break;
                }
            }
            if (prefix.length && !type) {
                if (prefix.length === 1 && prefix[0] === "auto")
                    type = CTJ.typeNode([CTJ.qseg("auto")]);
                else {
                    const parts = prefix.slice();
                    if (!parts.some(p => BASE_TYPES.has(p)))
                        parts.push("int");
                    type = CTJ.typeNode([CTJ.qseg(parts.join(" "))]);
                }
            }
            else if (prefix.length && type) {
                const extra = prefix.join(" ");
                if (type.parts.length)
                    type.parts[0] = CTJ.qseg(extra + " " + type.parts[0].n, type.parts[0].a);
                else
                    type.parts.push(CTJ.qseg(extra));
            }
            if (type && sawConst)
                type.cnst = true;
            return { flags, type, isTypedef, isFriend, defined };
        }
        mergeBase(cur, q, prefix, t) {
            if (!cur) {
                if (prefix.length) {
                    const extra = prefix.join(" ");
                    prefix.length = 0;
                    if (q.parts.length)
                        q.parts[0] = CTJ.qseg(extra + " " + q.parts[0].n, q.parts[0].a);
                    else
                        q.parts.push(CTJ.qseg(extra));
                }
                return q;
            }
            if (q.parts.length) {
                for (const s of q.parts)
                    cur.parts.push(s);
            }
            if (q.decltypeOf)
                cur.decltypeOf = q.decltypeOf;
            return cur;
        }
        parseQualifiedName(allowOp, inType = true) {
            const parts = [];
            if (this.peek().t === "::")
                this.pos++;
            for (;;) {
                this.skipGnu();
                if (this.isIdent("template"))
                    this.pos++;
                const t = this.peek();
                // The caller reads the operator itself, but the keyword belongs to the
                // name: leaving it behind makes "Cls::operator+" look like a conversion.
                if (allowOp && t.t === "ident" && t.v === "operator") {
                    this.pos++;
                    parts.push(CTJ.qseg("operator"));
                    break;
                }
                if (allowOp && t.t === "~") {
                    this.pos++;
                    const n = this.expect("ident");
                    parts.push(CTJ.qseg("~" + n.v));
                    break;
                }
                if (t.t !== "ident")
                    CTJ.fail(`expected name, got '${t.v}'`, t.file, t.line, t.col);
                this.pos++;
                let args = [];
                if (this.peek().t === "<") {
                    const m = this.mark();
                    let ok = true;
                    try {
                        args = this.parseTArgList();
                        if (!inType && this.peek().t !== "::") {
                            this.reset(m);
                            ok = false;
                        }
                    }
                    catch {
                        this.reset(m);
                        ok = false;
                    }
                    if (!ok)
                        args = [];
                }
                parts.push(CTJ.qseg(t.v, args));
                this.skipGnu();
                if (this.peek().t === "::") {
                    this.pos++;
                    continue;
                }
                break;
            }
            return parts;
        }
        parseQualifiedType() {
            const t = this.peek();
            const tn = CTJ.typeNode([], CTJ.at(t));
            if (this.eat("::"))
                tn.global = true;
            if (this.peek().t !== "ident")
                CTJ.fail(`expected type name, got '${this.peek().v}'`, t.file, t.line, t.col);
            tn.parts = this.parseQualifiedName(false);
            return tn;
        }
        skipBalancedAngles() {
            const t = this.expect("<");
            let depth = 1;
            while (depth > 0) {
                const u = this.next();
                if (u.t === "eof")
                    CTJ.fail("unterminated '<'", t.file, t.line, t.col);
                if (u.t === "<")
                    depth++;
                else if (u.t === ">>")
                    depth -= 2;
                else if (u.t === ">")
                    depth--;
            }
        }
        parseTArgList() {
            this.expect("<");
            const out = [];
            if (this.eatGt())
                return out;
            for (;;) {
                this.skipGnu();
                const am = this.mark();
                // "!is_convertible<_A, _B>::value" negates a member of a template-id;
                // read as an expression the '<' after the type name is a comparison, so
                // the negation is rebuilt around the type instead.
                let neg = 0;
                while (this.peek().t === "!") {
                    this.pos++;
                    neg++;
                }
                let ta = this.parseAbstractType();
                // "function<_Res(_ArgTypes...)>": inside an argument list a "(" after a
                // type starts a function type instead of ending the type.  With no type
                // read yet the "(" opens a parenthesised non-type argument.
                if (this.peek().t === "(" && ta.parts.length) {
                    const fm = this.mark();
                    let fn = null;
                    try {
                        const ps = this.parseParamList();
                        const nx = this.peek().t;
                        if (nx === "," || nx === ">" || nx === ">>" || nx === "...") {
                            fn = { params: ps.map(x => x.type), variadic: ps.some(x => x.variadic) };
                        }
                    }
                    catch {
                        fn = null;
                    }
                    if (fn)
                        ta.func = fn;
                    else
                        this.reset(fm);
                }
                if (neg && ta.parts.length) {
                    let ex = { kind: "id", parts: ta.parts, global: ta.global, file: ta.file, line: ta.line };
                    for (let i = 0; i < neg; i++)
                        ex = { kind: "unary", op: "!", arg: ex, postfix: false, file: ta.file, line: ta.line };
                    ta = CTJ.typeNode([], ta);
                    ta.valueArg = ex;
                }
                else if (!ta.parts.length && !ta.decltypeOf && !ta.ptr && !ta.ref && !ta.func && !ta.dims.length) {
                    if (neg)
                        this.reset(am);
                    const ex = this.parseTArgValue(am);
                    ta = CTJ.typeNode([], ex);
                    ta.valueArg = ex;
                }
                if (this.eat("..."))
                    ta.packExpand = true;
                out.push(ta);
                this.skipGnu();
                if (this.eat(","))
                    continue;
                if (!this.eatGt()) {
                    const t = this.peek();
                    CTJ.fail(`expected '>' in template argument list, got '${t.v}'`, t.file, t.line, t.col);
                }
                break;
            }
            return out;
        }
        parseTArgValue(am) {
            let depth = 0;
            let adepth = 0;
            let q = am;
            for (;;) {
                const u = this.toks[q];
                if (!u || u.t === "eof")
                    break;
                if (u.t === "(" || u.t === "[" || u.t === "{")
                    depth++;
                else if (u.t === ")" || u.t === "]" || u.t === "}") {
                    if (depth === 0)
                        break;
                    depth--;
                }
                else if (depth === 0) {
                    if (u.t === "<")
                        adepth++;
                    else if (u.t === ">" || u.t === ">>" || u.t === ">>=") {
                        if (adepth === 0)
                            break;
                        adepth--;
                    }
                    else if (u.t === ",")
                        break;
                }
                q++;
            }
            const slice = this.toks.slice(am, q);
            slice.push(CTJ.tok("eof", "", "", 0, 0));
            const ex = CTJ.parseExpr(this.spawn(slice), 0);
            this.pos = q;
            return ex;
        }
        parseAbstractType() {
            const t = this.peek();
            const spec = this.parseDeclSpec();
            let tn = spec.type ? spec.type : CTJ.typeNode([], CTJ.at(t));
            if (!spec.type && this.peek().t === "ident" && this.isTypeName(this.peek().v)) {
                tn = this.parseQualifiedType();
            }
            this.parseAbstractDeclarator(tn);
            return tn;
        }
        parseAbstractDeclarator(tn) {
            for (;;) {
                this.skipGnu();
                const t = this.peek();
                if (t.t === "*") {
                    this.pos++;
                    this.skipGnu();
                    if (this.peek().t === "ident" && CV_FLAGS.has(this.peek().v))
                        this.pos++;
                    tn.ptr++;
                    continue;
                }
                if (t.t === "&" || t.t === "&&") {
                    tn.ref = t.t;
                    this.pos++;
                    continue;
                }
                if (t.t === "(") {
                    const m = this.mark();
                    this.pos++;
                    this.skipGnu();
                    const n = this.peek();
                    // Only a parenthesized declarator such as (*) continues the type;
                    // a bare () is the parameter list of the surrounding declaration.
                    if (n.t === "*" || n.t === "&" || n.t === "&&") {
                        this.parseAbstractDeclarator(tn);
                        this.expect(")");
                    }
                    else {
                        this.reset(m);
                        break;
                    }
                    continue;
                }
                break;
            }
            for (;;) {
                if (this.eat("[")) {
                    if (this.eat("]"))
                        tn.dims.push({ kind: "lit", lkind: "int", value: "", ...CTJ.at(this.peek()) });
                    else {
                        const e = CTJ.parseExpr(this, 3);
                        this.expect("]");
                        tn.dims.push(e);
                    }
                    continue;
                }
                break;
            }
        }
        parseDeclarator() {
            const d = blankDeclarator();
            for (;;) {
                this.skipGnu();
                const t = this.peek();
                if (t.t === "*") {
                    this.pos++;
                    this.skipGnu();
                    if (this.peek().t === "ident" && CV_FLAGS.has(this.peek().v))
                        this.pos++;
                    d.ptr++;
                    continue;
                }
                if (t.t === "&" || t.t === "&&") {
                    d.ref = t.t;
                    this.pos++;
                    continue;
                }
                if (t.t === "ident" && this.peek(1).t === "::" && this.peek(2).t === "*") {
                    this.pos += 3;
                    d.ptr++;
                    d.isMemPtr = true;
                    continue;
                }
                break;
            }
            this.parseDeclaratorCore(d);
            // In "Cls::method(const value_type& v)" the members of Cls are in scope in
            // the parameter list, so its type names have to be visible while parsing it.
            const owner = this.ownerTypeScope(d.name);
            if (owner)
                this.pushTypeScope(owner);
            try {
                this.parseDeclaratorSuffix(d);
            }
            finally {
                if (owner)
                    this.popScope();
            }
            return d;
        }
        parseDeclaratorCore(d) {
            this.skipGnu();
            const t = this.peek();
            if (t.t === "(") {
                this.pos++;
                const inner = this.parseDeclarator();
                this.expect(")");
                d.name = inner.name;
                d.global = inner.global;
                d.op = inner.op;
                d.convType = inner.convType;
                d.ptr += inner.ptr;
                if (inner.ref)
                    d.ref = inner.ref;
                for (const x of inner.dims)
                    d.dims.push(x);
                if (inner.isFunc) {
                    d.isFunc = true;
                    d.params = inner.params;
                    d.funcCnst = inner.funcCnst;
                    d.trailing = inner.trailing;
                    d.special = inner.special;
                }
                return;
            }
            if (t.t === "~") {
                this.pos++;
                const n = this.expect("ident");
                d.name = [CTJ.qseg(n.v)];
                d.op = "~";
                return;
            }
            if (t.t === "ident" && t.v === "operator") {
                this.pos++;
                const r = this.parseOperator();
                d.op = r.op;
                d.convType = r.convType;
                d.name = [CTJ.qseg("operator")];
                return;
            }
            if (t.t === "::") {
                d.global = true;
                this.pos++;
            }
            // "U&&... u": the ellipsis of a parameter pack stands before the name.
            if (this.peek().t === "...") {
                this.pos++;
                d.isPack = true;
            }
            if (this.peek().t === "ident") {
                d.name = this.parseQualifiedName(true);
                if (CTJ.last(d.name).n === "operator") {
                    d.name.pop();
                    const r = this.parseOperator();
                    d.op = r.op;
                    d.convType = r.convType;
                }
                else if (CTJ.last(d.name).n.startsWith("~")) {
                    const nm = CTJ.last(d.name).n.slice(1);
                    d.name[d.name.length - 1] = CTJ.qseg(nm);
                    d.op = "~";
                }
                return;
            }
        }
        parseDeclaratorSuffix(d) {
            for (;;) {
                this.skipGnu();
                const t = this.peek();
                if (t.t === "[") {
                    this.pos++;
                    if (this.eat("]")) {
                        d.dims.push({ kind: "lit", lkind: "int", value: "", ...CTJ.at(t) });
                    }
                    else {
                        const e = CTJ.parseExpr(this, 3);
                        this.expect("]");
                        d.dims.push(e);
                    }
                    continue;
                }
                if (t.t === "(") {
                    const m = this.mark();
                    try {
                        const params = this.parseParamList();
                        for (const p of params) {
                            const pt = p.type;
                            if (!pt.parts.length && !pt.decltypeOf && !pt.ptr && !pt.ref && !pt.func && !pt.dims.length && !p.variadic && !p.isPack) {
                                throw new Error("not params");
                            }
                        }
                        d.isFunc = true;
                        d.params = params;
                    }
                    catch {
                        this.reset(m);
                        break;
                    }
                    for (;;) {
                        this.skipGnu();
                        const u = this.peek();
                        if (u.t === "ident" && (u.v === "const" || u.v === "volatile")) {
                            if (u.v === "const")
                                d.funcCnst = true;
                            this.pos++;
                            continue;
                        }
                        if (u.t === "&" || u.t === "&&") {
                            this.pos++;
                            continue;
                        }
                        if (u.t === "ident" && (u.v === "override" || u.v === "final")) {
                            this.pos++;
                            continue;
                        }
                        if (u.t === "ident" && u.v === "noexcept") {
                            this.pos++;
                            if (this.peek().t === "(")
                                this.skipBalanced("(", ")");
                            continue;
                        }
                        if (u.t === "ident" && u.v === "throw") {
                            this.pos++;
                            if (this.peek().t === "(")
                                this.skipBalanced("(", ")");
                            continue;
                        }
                        break;
                    }
                    if (this.eat("->"))
                        d.trailing = this.parseAbstractType();
                    if (this.peek().t === "=" && this.peek(1).t === "ident" &&
                        (this.peek(1).v === "default" || this.peek(1).v === "delete")) {
                        d.special = this.peek(1).v;
                        this.pos += 2;
                    }
                    else if (this.peek().t === "=" && this.peek(1).t === "number") {
                        this.pos += 2;
                        d.special = "pure";
                    }
                    continue;
                }
                break;
            }
        }
        parseOperator() {
            const t = this.peek();
            if (t.t === "string") {
                this.pos++;
                let suffix = "";
                if (this.peek().t === "ident")
                    suffix = this.next().v;
                return { op: '""' + suffix, convType: null };
            }
            if (t.t === "(") {
                this.pos++;
                this.expect(")");
                return { op: "()", convType: null };
            }
            if (t.t === "[") {
                this.pos++;
                this.expect("]");
                return { op: "[]", convType: null };
            }
            const two = t.t;
            if (["+", "-", "*", "/", "%", "^", "&", "|", "~", "!", "=", "<", ">",
                "+=", "-=", "*=", "/=", "%=", "^=", "&=", "|=", "<<", ">>", "<<=",
                ">>=", "==", "!=", "<=", ">=", "&&", "||", "++", "--", "->",
                "->*", ".*", ",", "<=>"].includes(two)) {
                this.pos++;
                return { op: two, convType: null };
            }
            if (t.t === "ident" && (t.v === "new" || t.v === "delete")) {
                this.pos++;
                let op = t.v;
                if (this.peek().t === "[") {
                    this.pos++;
                    this.expect("]");
                    op += "[]";
                }
                return { op, convType: null };
            }
            const ct = this.parseAbstractType();
            return { op: "conv", convType: ct };
        }
        parseParamList() {
            this.expect("(");
            const out = [];
            this.skipGnu();
            if (this.eat(")"))
                return out;
            if (this.isIdent("void") && this.peek(1).t === ")") {
                this.pos += 2;
                return out;
            }
            for (;;) {
                this.skipGnu();
                const t = this.peek();
                if (this.eat("...")) {
                    out.push({ name: "", type: CTJ.typeNode([CTJ.qseg("")], CTJ.at(t)), def: null, variadic: true, isPack: false, ...CTJ.at(t) });
                    this.expect(")");
                    return out;
                }
                const spec = this.parseDeclSpec();
                let isPack = false;
                if (this.peek().t === "...") {
                    isPack = true;
                    this.pos++;
                }
                const d = this.parseDeclarator();
                if (d.isPack)
                    isPack = true;
                const type = this.applyDeclarator(spec.type, d, t);
                let name = d.name.length ? CTJ.last(d.name).n : "";
                if (d.op)
                    name = "";
                const p = { name, type, def: null, variadic: false, isPack, ...CTJ.at(t) };
                if (this.eat("=")) {
                    p.def = this.peek().t === "{" ? this.parseInitList() : CTJ.parseExpr(this, 2);
                }
                out.push(p);
                this.skipGnu();
                if (this.eat(",")) {
                    if (this.peek().t === ")") {
                        this.pos++;
                        break;
                    }
                    continue;
                }
                this.expect(")");
                break;
            }
            return out;
        }
        parseInitList() {
            const t = this.expect("{");
            const items = [];
            if (!this.eat("}")) {
                for (;;) {
                    this.skipGnu();
                    if (this.eat(".")) {
                        this.expect("ident");
                        this.skipGnu();
                        this.eat("=");
                    }
                    else if (this.peek().t === "[") {
                        this.pos++;
                        CTJ.parseExpr(this, 0);
                        this.expect("]");
                        this.skipGnu();
                        this.eat("=");
                    }
                    items.push(CTJ.parseExpr(this, 2));
                    this.skipGnu();
                    if (this.eat(",")) {
                        if (this.peek().t === "}") {
                            this.pos++;
                            break;
                        }
                        continue;
                    }
                    this.expect("}");
                    break;
                }
            }
            return { kind: "initlist", items, ...CTJ.at(t) };
        }
        parseExprList(close) {
            const out = [];
            this.skipGnu();
            if (this.eat(close))
                return out;
            for (;;) {
                out.push(CTJ.parseExpr(this, 2));
                this.skipGnu();
                if (this.eat(","))
                    continue;
                this.expect(close);
                break;
            }
            return out;
        }
    }
    CTJ.Parser = Parser;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function refType(name, a) {
        return CTJ.typeNode([CTJ.qseg(name)], a);
    }
    CTJ.refType = refType;
    function parseVarSuffix(p, v, inClass) {
        if (p.eat("=")) {
            v.init = p.peek().t === "{" ? p.parseInitList() : CTJ.parseExpr(p, 2);
        }
        else if (p.peek().t === "{") {
            v.init = p.parseInitList();
        }
        else if (p.peek().t === "(") {
            p.pos++;
            v.directInit = p.parseExprList(")");
        }
        if (inClass && p.eat(":"))
            v.bitfield = CTJ.parseExpr(p, 3);
    }
    CTJ.parseVarSuffix = parseVarSuffix;
    function parseClassHead(p) {
        const t = p.next();
        p.skipGnu();
        const isEnum = t.v === "enum";
        let scoped = false;
        if (isEnum && (p.isIdent("class") || p.isIdent("struct"))) {
            scoped = true;
            p.pos++;
            p.skipGnu();
        }
        let name = "";
        let qname = [];
        if (p.peek().t === "ident") {
            qname = p.parseQualifiedName(false);
            name = qname.map(s => s.n).join("::");
            p.skipGnu();
        }
        if (!isEnum && p.isIdent("final") && (p.peek(1).t === ":" || p.peek(1).t === "{"))
            p.pos++;
        let specArgs = [];
        let isPartialSpec = false;
        if (qname.length && qname[qname.length - 1].a.length) {
            specArgs = qname[qname.length - 1].a;
            qname[qname.length - 1] = CTJ.qseg(qname[qname.length - 1].n);
            name = qname.map(s => s.n).join("::");
        }
        if (name && p.peek().t === "<") {
            const m = p.mark();
            try {
                const extra = p.parseTArgList();
                if (specArgs.length)
                    specArgs = specArgs.concat(extra);
                else
                    specArgs = extra;
            }
            catch {
                p.reset(m);
                p.skipBalancedAngles();
                isPartialSpec = true;
            }
            p.skipGnu();
        }
        const bases = [];
        let enumBase = null;
        if (p.peek().t === ":") {
            p.pos++;
            if (isEnum) {
                enumBase = p.parseAbstractType();
            }
            else {
                do {
                    p.skipGnu();
                    let access = t.v === "class" ? "private" : "public";
                    let isVirtual = false;
                    for (;;) {
                        if (p.isIdent("virtual")) {
                            isVirtual = true;
                            p.pos++;
                            continue;
                        }
                        if (p.peek().t === "ident" && CTJ.ACCESS.has(p.peek().v)) {
                            access = p.next().v;
                            continue;
                        }
                        break;
                    }
                    const nm = p.parseQualifiedName(false);
                    bases.push({ name: nm, access, isVirtual, ...CTJ.at(t) });
                } while (p.eat(","));
            }
        }
        return { head: { kind: t.v, name, bases, specArgs, scoped, enumBase, isPartialSpec }, t };
    }
    CTJ.parseClassHead = parseClassHead;
    function parseClassOrEnumSpec(p) {
        const { head, t } = parseClassHead(p);
        if (p.peek().t !== "{") {
            if (head.name)
                p.registerType(head.name);
            const type = head.name ? refType(head.name, CTJ.at(t)) : CTJ.typeNode([], CTJ.at(t));
            return { decl: null, type };
        }
        if (head.kind === "enum") {
            const ed = parseEnumBody(p, head, CTJ.at(t));
            if (ed.name)
                p.registerType(CTJ.last(ed.name.split("::")));
            return { decl: ed, type: refType(ed.name, CTJ.at(t)) };
        }
        const cls = parseClassBody(p, head, CTJ.at(t));
        if (cls.name)
            p.registerType(CTJ.last(cls.name.split("::")));
        return { decl: cls, type: refType(cls.name, CTJ.at(t)) };
    }
    CTJ.parseClassOrEnumSpec = parseClassOrEnumSpec;
    function parseClassOrEnumDecl(p, inClass) {
        const a = CTJ.at(p.peek());
        const { head } = parseClassHead(p);
        const out = [];
        let vtype;
        if (p.peek().t === "{") {
            if (head.kind === "enum") {
                const ed = parseEnumBody(p, head, a);
                out.push(ed);
                vtype = refType(ed.name, a);
                if (ed.name)
                    p.registerType(CTJ.last(ed.name.split("::")));
            }
            else {
                const cls = parseClassBody(p, head, a);
                out.push(cls);
                vtype = refType(cls.name, a);
                if (cls.name)
                    p.registerType(CTJ.last(cls.name.split("::")));
            }
        }
        else {
            if (head.name)
                p.registerType(head.name);
            vtype = head.name ? refType(head.name, a) : CTJ.typeNode([], a);
            if (head.name) {
                if (head.kind === "enum") {
                    out.push({
                        kind: "enum", name: head.name, scoped: head.scoped,
                        base: head.enumBase, items: [], isDeclOnly: true, ...a,
                    });
                }
                else {
                    out.push({
                        kind: "class", name: head.name, cls: head.kind, bases: head.bases,
                        members: [], isDeclOnly: true, specArgs: head.specArgs,
                        isPartialSpec: head.isPartialSpec, ...a,
                    });
                }
            }
        }
        p.skipGnu();
        if (p.peek().t === ";") {
            p.pos++;
            return out;
        }
        for (;;) {
            const d = p.parseDeclarator();
            const v = {
                kind: "var", name: d.name, type: p.applyDeclarator(vtype, d, p.peek()),
                init: null, directInit: null, flags: [], bitfield: null, isParam: false, ...a,
            };
            parseVarSuffix(p, v, inClass);
            out.push(v);
            if (p.eat(","))
                continue;
            p.expect(";");
            break;
        }
        return out;
    }
    CTJ.parseClassOrEnumDecl = parseClassOrEnumDecl;
    function parseClassBody(p, head, a) {
        const name = head.name || p.anonName("class");
        const cls = {
            kind: "class", name, cls: head.kind, bases: head.bases,
            members: [], isDeclOnly: false, specArgs: head.specArgs,
            isPartialSpec: head.isPartialSpec, ...a,
        };
        if (head.name)
            p.registerType(head.name);
        p.inClass.push(cls);
        p.pushScope();
        p.expect("{");
        while (!p.eat("}")) {
            if (p.atEnd()) {
                // Keep the members collected so far: losing the rest of the translation
                // unit over one unbalanced brace hides every error that follows.
                p.warn(`unterminated body of ${head.kind} ${name} opened at ${a.file}:${a.line}, `
                    + "keeping the members parsed so far", p.peek());
                break;
            }
            try {
                for (const d of p.parseDecls(true)) {
                    cls.members.push(d);
                    // A typedef is visible to the members that follow it.
                    if (d.kind === "typedef" && d.name)
                        p.registerType(d.name);
                }
            }
            catch (e) {
                if (e instanceof CTJ.CtxError) {
                    p.warn(`parse error in class ${name}: ${e.message}, skipping member`, p.peek());
                    recoverMember(p);
                }
                else
                    throw e;
            }
        }
        p.flushPending();
        if (head.name)
            p.recordClassTypes(head.name);
        p.popScope();
        p.inClass.pop();
        return cls;
    }
    CTJ.parseClassBody = parseClassBody;
    function recoverMember(p) {
        let depth = 0;
        for (;;) {
            const t = p.peek();
            if (t.t === "eof")
                return;
            if (t.t === "{") {
                depth++;
                p.pos++;
                continue;
            }
            if (t.t === "}") {
                if (depth === 0)
                    return;
                depth--;
                p.pos++;
                continue;
            }
            if (t.t === ";" && depth === 0) {
                p.pos++;
                return;
            }
            p.pos++;
        }
    }
    function parseEnumBody(p, head, a) {
        const name = head.name || p.anonName("enum");
        const ed = {
            kind: "enum", name, scoped: head.scoped, base: head.enumBase,
            items: [], isDeclOnly: false, ...a,
        };
        if (head.name)
            p.registerType(head.name);
        p.expect("{");
        while (!p.eat("}")) {
            if (p.atEnd()) {
                const t = p.peek();
                CTJ.fail("unterminated enum body", t.file, t.line, t.col);
            }
            p.skipGnu();
            if (p.peek().t === "}") {
                p.pos++;
                break;
            }
            const it = p.expect("ident");
            let value = null;
            if (p.eat("="))
                value = CTJ.parseExpr(p, 2);
            ed.items.push({ name: it.v, value, ...CTJ.at(it) });
            if (p.eat(","))
                continue;
        }
        return ed;
    }
    CTJ.parseEnumBody = parseEnumBody;
    function parseNamespace(p, isInline) {
        const t = p.expect("ident");
        p.skipGnu();
        if (p.peek().t === "{") {
            const nm = p.anonName("ns");
            p.pos++;
            const decls = parseNsBody(p, CTJ.at(t));
            return { kind: "ns", name: nm, aliasOf: [], decls, isInline, ...CTJ.at(t) };
        }
        const first = p.expect("ident").v;
        p.registerNamespace(first);
        p.skipGnu();
        if (p.eat("=")) {
            const target = p.parseQualifiedName(false);
            p.expect(";");
            return { kind: "ns", name: first, aliasOf: target, decls: null, isInline, ...CTJ.at(t) };
        }
        const parts = [first];
        while (p.eat("::")) {
            const nm = p.expect("ident").v;
            p.registerNamespace(nm);
            parts.push(nm);
        }
        p.expect("{");
        let inner = {
            kind: "ns", name: CTJ.last(parts), aliasOf: [], decls: parseNsBody(p, CTJ.at(t)), isInline, ...CTJ.at(t),
        };
        for (let i = parts.length - 2; i >= 0; i--) {
            inner = { kind: "ns", name: parts[i], aliasOf: [], decls: [inner], isInline, ...CTJ.at(t) };
        }
        return inner;
    }
    CTJ.parseNamespace = parseNamespace;
    function parseNsBody(p, opened) {
        const out = [];
        while (!p.eat("}")) {
            if (p.atEnd()) {
                p.warn(`unterminated namespace body opened at ${opened.file}:${opened.line}, `
                    + "keeping the declarations parsed so far", p.peek());
                return out;
            }
            try {
                for (const d of p.parseDecls(false))
                    out.push(d);
            }
            catch (e) {
                if (e instanceof CTJ.CtxError) {
                    p.warn(`parse error: ${e.message}, skipping`, p.peek());
                    p.recover();
                }
                else
                    throw e;
            }
        }
        return out;
    }
    function parseUsing(p) {
        const t = p.expect("ident");
        if (p.isIdent("namespace")) {
            p.pos++;
            const nm = p.parseQualifiedName(false);
            p.expect(";");
            return [{ kind: "using", name: nm, isNs: true, ...CTJ.at(t) }];
        }
        if (p.isIdent("typename"))
            p.pos++;
        const m = p.mark();
        if (p.peek().t === "ident" && p.peek(1).t === "=") {
            const nm = p.next().v;
            p.pos++;
            const type = p.parseAbstractType();
            p.expect(";");
            p.registerType(nm);
            return [{ kind: "typedef", name: nm, type, ...CTJ.at(t) }];
        }
        p.reset(m);
        const nm = p.parseQualifiedName(false);
        p.expect(";");
        return [{ kind: "using", name: nm, isNs: false, ...CTJ.at(t) }];
    }
    CTJ.parseUsing = parseUsing;
    function parseTypedef(p) {
        const t = p.expect("ident");
        const spec = p.parseDeclSpec();
        const out = [];
        if (spec.defined)
            out.push(spec.defined);
        if (p.peek().t === ";") {
            p.pos++;
            return out;
        }
        for (;;) {
            const d = p.parseDeclarator();
            const nm = d.name.length ? CTJ.last(d.name).n : "";
            const td = { kind: "typedef", name: nm, type: p.applyDeclarator(spec.type, d, t), ...CTJ.at(t) };
            if (nm)
                p.registerType(nm);
            out.push(td);
            if (p.eat(","))
                continue;
            p.expect(";");
            break;
        }
        return out;
    }
    CTJ.parseTypedef = parseTypedef;
    function parseExtern(p) {
        const t = p.expect("ident");
        const langTok = p.expect("string");
        const lang = langTok.v.slice(1, -1);
        p.skipGnu();
        if (p.eat("{")) {
            const decls = [];
            while (!p.eat("}")) {
                if (p.atEnd())
                    CTJ.fail("unterminated extern block", t.file, t.line, t.col);
                for (const d of p.parseDecls(false))
                    decls.push(d);
            }
            return [{ kind: "linkage", lang, decls, ...CTJ.at(t) }];
        }
        const decls = p.parseDecls(false);
        return [{ kind: "linkage", lang, decls, ...CTJ.at(t) }];
    }
    CTJ.parseExtern = parseExtern;
    function parseStaticAssert(p) {
        const t = p.expect("ident");
        p.expect("(");
        const cond = CTJ.parseExpr(p, 2);
        let msg = "";
        if (p.eat(",")) {
            const s = p.expect("string");
            msg = s.v;
        }
        p.expect(")");
        p.expect(";");
        return { kind: "static_assert", cond, msg, ...CTJ.at(t) };
    }
    CTJ.parseStaticAssert = parseStaticAssert;
    function parseTemplate(p, inClass) {
        const t = p.expect("ident");
        p.skipGnu();
        if (p.peek().t !== "<") {
            const ds = p.parseDecls(inClass);
            return { kind: "template", tparams: [], decl: ds[0] || null, isSpec: false, specArgs: [], isExplicit: true, ...CTJ.at(t) };
        }
        p.pos++;
        p.pushScope();
        let tparams;
        let ds;
        try {
            tparams = parseTParams(p);
            ds = p.parseDecls(inClass);
        }
        finally {
            p.popScope();
        }
        const d = ds[0] || null;
        let specArgs = [];
        if (d && d.kind === "func" && d.name.length && CTJ.last(d.name).a.length)
            specArgs = CTJ.last(d.name).a;
        if (d && d.kind === "class")
            specArgs = d.specArgs;
        const isPartial = !!d && d.kind === "class" && d.isPartialSpec;
        let td;
        if (tparams.length && (specArgs.length || isPartial)) {
            td = { kind: "template", tparams, decl: d, isSpec: true, specArgs, isExplicit: false, ...CTJ.at(t) };
        }
        else if (!tparams.length && specArgs.length) {
            td = { kind: "template", tparams: [], decl: d, isSpec: true, specArgs, isExplicit: false, ...CTJ.at(t) };
        }
        else {
            td = { kind: "template", tparams, decl: d, isSpec: false, specArgs: [], isExplicit: false, ...CTJ.at(t) };
        }
        // The name introduced by the template belongs to the enclosing scope.
        if (d && (d.kind === "class" || d.kind === "enum") && d.name) {
            p.registerType(CTJ.last(d.name.split("::")));
        }
        else if (d && d.kind === "typedef" && d.name) {
            p.registerType(d.name);
        }
        return td;
    }
    CTJ.parseTemplate = parseTemplate;
    function parseTParams(p) {
        const out = [];
        p.skipGnu();
        if (p.eatGt())
            return out;
        for (;;) {
            p.skipGnu();
            const t = p.peek();
            if (p.isIdent("template")) {
                p.pos++;
                p.skipGnu();
                p.expect("<");
                let depth = 1;
                while (depth > 0) {
                    const u = p.next();
                    if (u.t === "eof")
                        CTJ.fail("unterminated template parameter", t.file, t.line, t.col);
                    if (u.t === "<")
                        depth++;
                    if (u.t === ">")
                        depth--;
                    if (u.t === ">>")
                        depth -= 2;
                }
                p.skipGnu();
                if (p.isIdent("class") || p.isIdent("typename"))
                    p.pos++;
                let nm = "";
                if (p.peek().t === "ident")
                    nm = p.next().v;
                out.push({ kind: "template", name: nm || p.anonName("tt"), type: null, def: null, isPack: false, ...CTJ.at(t) });
            }
            else if (p.isIdent("class") || p.isIdent("typename")) {
                p.pos++;
                let isPack = false;
                if (p.eat("..."))
                    isPack = true;
                let nm = "";
                if (p.peek().t === "ident") {
                    nm = p.next().v;
                    p.registerType(nm);
                }
                if (p.eat("..."))
                    isPack = true;
                let def = null;
                if (p.eat("="))
                    def = p.parseAbstractType();
                out.push({ kind: "type", name: nm || p.anonName("tp"), type: null, def, isPack, ...CTJ.at(t) });
            }
            else {
                const spec = p.parseDeclSpec();
                // The ellipsis may stand before or after the name: "bool... B", "int N...".
                let isPack = false;
                if (p.eat("..."))
                    isPack = true;
                let nm = "";
                if (p.peek().t === "ident")
                    nm = p.next().v;
                if (p.eat("..."))
                    isPack = true;
                let def = null;
                // Stop below the relational precedence so the closing '>' of the
                // parameter list is not taken for a comparison operator.
                if (p.eat("="))
                    def = CTJ.parseExpr(p, 10);
                out.push({ kind: "nontype", name: nm || p.anonName("np"), type: spec.type, def, isPack, ...CTJ.at(t) });
            }
            p.skipGnu();
            if (p.eat(","))
                continue;
            if (!p.eatGt())
                CTJ.fail("expected '>' in template parameter list", t.file, t.line, t.col);
            break;
        }
        return out;
    }
    CTJ.parseTParams = parseTParams;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function precOf(t) {
        switch (t) {
            case ",": return 1;
            case "=":
            case "+=":
            case "-=":
            case "*=":
            case "/=":
            case "%=":
            case "^=":
            case "&=":
            case "|=":
            case "<<=":
            case ">>=": return 2;
            case "||": return 4;
            case "&&": return 5;
            case "|": return 6;
            case "^": return 7;
            case "&": return 8;
            case "==":
            case "!=": return 9;
            case "<":
            case ">":
            case "<=":
            case ">=":
            case "<=>": return 10;
            case "<<":
            case ">>": return 11;
            case "+":
            case "-": return 12;
            case "*":
            case "/":
            case "%": return 13;
            default: return 0;
        }
    }
    function isRightAssoc(t) {
        return precOf(t) === 2;
    }
    function parseExpr(p, minPrec) {
        let e = parsePostfix(p, parseUnary(p));
        for (;;) {
            const t = p.peek();
            if (t.t === "?" && 3 > minPrec) {
                p.pos++;
                const a = parseExpr(p, 0);
                p.expect(":");
                const b = parseExpr(p, 2);
                e = { kind: "cond", c: e, a, b, ...CTJ.at(t) };
                continue;
            }
            const pr = precOf(t.t);
            if (pr === 0 || pr <= minPrec)
                break;
            p.pos++;
            const rhs = parseExpr(p, isRightAssoc(t.t) ? pr - 1 : pr);
            if (pr === 2)
                e = { kind: "assign", op: t.t, l: e, r: rhs, ...CTJ.at(t) };
            else
                e = { kind: "binary", op: t.t, l: e, r: rhs, ...CTJ.at(t) };
        }
        return e;
    }
    CTJ.parseExpr = parseExpr;
    function parsePostfix(p, e) {
        for (;;) {
            const t = p.peek();
            if (t.t === "(") {
                p.pos++;
                const args = p.parseExprList(")");
                e = maybeFunctional(p, e, args, t);
                continue;
            }
            if (t.t === "[") {
                p.pos++;
                const idx = parseExpr(p, 0);
                p.expect("]");
                e = { kind: "index", arr: e, idx, ...CTJ.at(t) };
                continue;
            }
            if (t.t === "." || t.t === "->") {
                p.pos++;
                if (p.isIdent("template"))
                    p.pos++;
                // "p->~T()" is a pseudo-destructor call on a dependent type.
                if (p.peek().t === "~") {
                    p.pos++;
                    const f = p.expect("ident");
                    e = { kind: "member", obj: e, field: "~" + f.v, arrow: t.t === "->", targs: [], qual: [], ...CTJ.at(t) };
                    continue;
                }
                let f = p.expect("ident");
                const qual = [];
                while (p.peek().t === "::") {
                    p.pos++;
                    if (p.isIdent("template"))
                        p.pos++;
                    qual.push(CTJ.qseg(f.v));
                    f = p.expect("ident");
                }
                let targs = [];
                if (p.peek().t === "<") {
                    const m = p.mark();
                    try {
                        targs = p.parseTArgList();
                        if (p.peek().t !== "(")
                            p.reset(m);
                    }
                    catch {
                        p.reset(m);
                        targs = [];
                    }
                }
                e = { kind: "member", obj: e, field: f.v, arrow: t.t === "->", targs, qual, ...CTJ.at(t) };
                continue;
            }
            if (t.t === "++" || t.t === "--") {
                p.pos++;
                e = { kind: "unary", op: t.t, arg: e, postfix: true, ...CTJ.at(t) };
                continue;
            }
            if (t.t === "...") {
                p.pos++;
                e = { kind: "unary", op: "...", arg: e, postfix: true, ...CTJ.at(t) };
                continue;
            }
            if (t.t === "{" && e.kind === "id") {
                const init = p.parseInitList();
                e = {
                    kind: "cast", ckind: "functional",
                    type: { kind: "type", parts: e.parts, global: e.global, ptr: 0, ref: "", cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null, ...CTJ.at(t) },
                    fn: null, arg: init, ...CTJ.at(t),
                };
                continue;
            }
            break;
        }
        return e;
    }
    CTJ.parsePostfix = parsePostfix;
    function maybeFunctional(p, e, args, t) {
        if (e.kind === "id" && e.parts.length && p.isTypeName(CTJ.last(e.parts).n)) {
            const arg = args.length === 1 ? args[0]
                : { kind: "initlist", items: args, ...CTJ.at(t) };
            return {
                kind: "cast", ckind: "functional",
                type: { kind: "type", parts: e.parts, global: e.global, ptr: 0, ref: "", cnst: false, dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null, ...CTJ.at(t) },
                fn: null, arg, ...CTJ.at(t),
            };
        }
        return { kind: "call", fn: e, args, ...CTJ.at(t) };
    }
    function parseUnary(p) {
        const t = p.peek();
        // "typename" only qualifies a dependent type, it carries no meaning here.
        if (t.t === "ident" && t.v === "typename") {
            p.pos++;
            return parseUnary(p);
        }
        if (t.t === "++" || t.t === "--" || t.t === "+" || t.t === "-" ||
            t.t === "!" || t.t === "~" || t.t === "*" || t.t === "&") {
            p.pos++;
            // Postfix binds tighter than a prefix operator: *p++ is *(p++).
            const arg = parsePostfix(p, parseUnary(p));
            return { kind: "unary", op: t.t, arg, postfix: false, ...CTJ.at(t) };
        }
        if (t.t === "(") {
            if (p.peek(1).t === "{") {
                p.pos++;
                p.expect("{");
                const stmts = [];
                while (!p.eat("}")) {
                    if (p.atEnd())
                        CTJ.fail("unterminated statement expression", t.file, t.line, t.col);
                    stmts.push(CTJ.parseStmt(p));
                }
                p.expect(")");
                return { kind: "stmtexpr", stmts, ...CTJ.at(t) };
            }
            if (looksLikeCast(p)) {
                p.pos++;
                const type = p.parseAbstractType();
                p.expect(")");
                const arg = parsePostfix(p, parseUnary(p));
                return { kind: "cast", ckind: "cstyle", type, fn: null, arg, ...CTJ.at(t) };
            }
            p.pos++;
            const e = parseExpr(p, 0);
            p.expect(")");
            return e;
        }
        if (t.t === "{")
            return p.parseInitList();
        if (t.t === "[")
            return parseLambda(p);
        if (t.t === "number" || t.t === "string" || t.t === "char") {
            p.pos++;
            const lkind = t.t === "number" ? "int" : t.t === "string" ? "string" : "char";
            return { kind: "lit", lkind, value: t.v, ...CTJ.at(t) };
        }
        if (t.t === "ident") {
            if (t.v === "true" || t.v === "false") {
                p.pos++;
                return { kind: "lit", lkind: "bool", value: t.v, ...CTJ.at(t) };
            }
            if (t.v === "nullptr" || t.v === "__null") {
                p.pos++;
                return { kind: "lit", lkind: "null", value: t.v, ...CTJ.at(t) };
            }
            if (t.v === "this") {
                p.pos++;
                return { kind: "this", ...CTJ.at(t) };
            }
            if (t.v === "new" || (t.v === "delete"))
                return parseNewDelete(p);
            if (t.v === "sizeof")
                return parseSizeof(p, false);
            if (t.v === "alignof" || t.v === "__alignof__")
                return parseSizeof(p, true);
            if (t.v === "static_cast" || t.v === "dynamic_cast" || t.v === "const_cast" || t.v === "reinterpret_cast") {
                return parseCastOp(p);
            }
            if (t.v === "typeid")
                return parseTypeid(p);
            if (t.v === "noexcept")
                return parseNoexcept(p);
            if (t.v === "throw")
                CTJ.fail("throw is only supported as a statement", t.file, t.line, t.col);
            if (t.v === "operator") {
                // "operator[](0)" calls the member operator of the current object.
                p.pos++;
                const r = p.parseOperator();
                return { kind: "id", parts: [CTJ.qseg(r.convType ? "#conv" : "operator" + r.op)], global: false, ...CTJ.at(t) };
            }
            if (t.v === "decltype")
                CTJ.fail("unexpected 'decltype' in expression", t.file, t.line, t.col);
            return parseIdExpr(p);
        }
        if (t.t === "::") {
            if (p.peek(1).t === "ident" && (p.peek(1).v === "new" || p.peek(1).v === "delete")) {
                p.pos++;
                return parseNewDelete(p);
            }
            return parseIdExpr(p);
        }
        CTJ.fail(`unexpected token '${t.v}' in expression`, t.file, t.line, t.col);
    }
    CTJ.parseUnary = parseUnary;
    function parseIdExpr(p) {
        const t = p.peek();
        let global = false;
        if (p.eat("::"))
            global = true;
        const parts = p.parseQualifiedName(true, false);
        // "::operator new(16)" calls a function whose name is the operator itself,
        // spelled the same way a declaration spells it.
        if (parts.length && CTJ.last(parts).n === "operator") {
            parts[parts.length - 1] = CTJ.qseg("operator" + p.parseOperator().op);
        }
        if (p.peek().t === "<") {
            const m = p.mark();
            try {
                const args = p.parseTArgList();
                const nx = p.peek().t;
                if (nx === "(" || nx === "::")
                    CTJ.last(parts).a = args;
                else
                    p.reset(m);
            }
            catch {
                p.reset(m);
            }
        }
        return { kind: "id", parts, global, ...CTJ.at(t) };
    }
    CTJ.parseIdExpr = parseIdExpr;
    // Tokens that cannot start the operand of a cast, so "(T)" before one of them
    // is a parenthesized expression rather than a cast.
    const NOT_OPERAND_START = new Set([
        "eof", ")", ",", ";", "}", "]", ">", ">>", "==", "!=", "<=", ">=", "&&", "||",
        "=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "<<",
        "?", ":", ".", "->", "->*", ".*",
    ]);
    function parensHoldType(p) {
        const m = p.mark();
        try {
            p.pos++;
            p.skipGnu();
            const t = p.peek();
            if (t.t !== "ident" && t.t !== "::") {
                p.reset(m);
                return false;
            }
            if (t.t === "ident" && !p.isTypeName(t.v) && t.v !== "typename") {
                if (!["class", "struct", "union", "enum", "const", "volatile", "auto", "decltype",
                    "__typeof__", "__typeof"].includes(t.v)) {
                    p.reset(m);
                    return false;
                }
            }
            p.parseAbstractType();
            const ok = p.peek().t === ")";
            p.reset(m);
            return ok;
        }
        catch {
            p.reset(m);
            return false;
        }
    }
    function looksLikeCast(p) {
        if (!parensHoldType(p))
            return false;
        const m = p.mark();
        p.pos++;
        p.skipGnu();
        p.parseAbstractType();
        const ok = !NOT_OPERAND_START.has(p.peek(1).t);
        p.reset(m);
        return ok;
    }
    function parseNewDelete(p) {
        const t = p.expect("ident");
        if (t.v === "delete") {
            let isArray = false;
            if (p.eat("[")) {
                p.expect("]");
                isArray = true;
            }
            const arg = parseUnary(p);
            return { kind: "delete", arg, isArray, ...CTJ.at(t) };
        }
        let placement = [];
        if (p.peek().t === "(") {
            const m = p.mark();
            p.pos++;
            p.skipGnu();
            const u = p.peek();
            const isTypeParen = (u.t === "ident" && (p.isTypeName(u.v) || u.v === "const" || u.v === "volatile")) || u.t === "::";
            p.reset(m);
            if (!isTypeParen) {
                p.pos++;
                placement = p.parseExprList(")");
            }
        }
        let type;
        if (p.peek().t === "(") {
            p.pos++;
            type = p.parseAbstractType();
            p.expect(")");
        }
        else {
            type = p.parseAbstractType();
        }
        let args = [];
        if (p.peek().t === "(") {
            p.pos++;
            args = p.parseExprList(")");
        }
        else if (p.peek().t === "{") {
            args = [p.parseInitList()];
        }
        return { kind: "new", placement, type, args, isArray: type.dims.length > 0, ...CTJ.at(t) };
    }
    function parseSizeof(p, isAlign) {
        const t = p.expect("ident");
        const base = { kind: "sizeof", isType: false, type: null, expr: null, packName: "", isAlignof: isAlign, ...CTJ.at(t) };
        // "sizeof...(_Pack)" counts the elements of a parameter pack.
        if (p.peek().t === "...") {
            p.pos++;
            p.expect("(");
            const nm = p.expect("ident").v;
            p.expect(")");
            base.packName = nm;
            return base;
        }
        if (p.peek().t === "(" && !isAlign) {
            if (parensHoldType(p)) {
                p.pos++;
                base.type = p.parseAbstractType();
                p.expect(")");
                base.isType = true;
                return base;
            }
            p.pos++;
            base.expr = parseExpr(p, 0);
            p.expect(")");
            return base;
        }
        if (p.peek().t === "(" && isAlign) {
            p.pos++;
            base.type = p.parseAbstractType();
            p.expect(")");
            base.isType = true;
            return base;
        }
        base.expr = parseUnary(p);
        return base;
    }
    function parseCastOp(p) {
        const t = p.expect("ident");
        p.expect("<");
        const type = p.parseAbstractType();
        if (!p.eatGt())
            CTJ.fail("expected '>' in cast", t.file, t.line, t.col);
        p.expect("(");
        const arg = parseExpr(p, 0);
        p.expect(")");
        return { kind: "cast", ckind: t.v, type, fn: null, arg, ...CTJ.at(t) };
    }
    function parseTypeid(p) {
        const t = p.expect("ident");
        p.expect("(");
        const m = p.mark();
        let isType = false;
        let type = null;
        let expr = null;
        try {
            p.skipGnu();
            const u = p.peek();
            if ((u.t === "ident" && p.isTypeName(u.v)) || u.t === "::") {
                type = p.parseAbstractType();
                if (p.peek().t === ")")
                    isType = true;
                else
                    p.reset(m);
            }
        }
        catch {
            p.reset(m);
        }
        if (!isType)
            expr = parseExpr(p, 0);
        p.expect(")");
        return { kind: "typeid", isType, type, expr, ...CTJ.at(t) };
    }
    function parseNoexcept(p) {
        const t = p.expect("ident");
        let expr = null;
        if (p.peek().t === "(") {
            p.pos++;
            expr = parseExpr(p, 0);
            p.expect(")");
        }
        return { kind: "noexcept", expr, ...CTJ.at(t) };
    }
    function parseLambda(p) {
        const t = p.expect("[");
        const captures = [];
        let defCapture = "";
        p.skipGnu();
        if (!p.eat("]")) {
            if (p.peek().t === "=" || p.peek().t === "&") {
                const nx1 = p.peek(1).t;
                if (p.peek().t === "=" && (nx1 === "," || nx1 === "]")) {
                    defCapture = "=";
                    p.pos++;
                }
                else if (p.peek().t === "&" && (nx1 === "," || nx1 === "]")) {
                    defCapture = "&";
                    p.pos++;
                }
            }
            for (;;) {
                p.skipGnu();
                if (p.eat("]"))
                    break;
                if (captures.length || defCapture) {
                    if (!p.eat(",")) {
                        p.expect("]");
                        break;
                    }
                    p.skipGnu();
                    if (p.peek().t === "]") {
                        p.pos++;
                        break;
                    }
                }
                const ct = p.peek();
                if (p.isIdent("this")) {
                    p.pos++;
                    captures.push({ mode: "this", name: "this", ...CTJ.at(ct) });
                    continue;
                }
                let mode = "=";
                if (p.eat("&"))
                    mode = "&";
                const nm = p.expect("ident").v;
                captures.push({ mode, name: nm, ...CTJ.at(ct) });
            }
        }
        let params = [];
        if (p.peek().t === "(")
            params = p.parseParamList();
        let mutable = false;
        for (;;) {
            if (p.isIdent("mutable")) {
                mutable = true;
                p.pos++;
                continue;
            }
            if (p.isIdent("noexcept")) {
                p.pos++;
                if (p.peek().t === "(")
                    p.skipBalanced("(", ")");
                continue;
            }
            if (p.isIdent("throw")) {
                p.pos++;
                if (p.peek().t === "(")
                    p.skipBalanced("(", ")");
                continue;
            }
            break;
        }
        let ret = null;
        if (p.eat("->"))
            ret = p.parseAbstractType();
        const body = CTJ.parseCompound(p);
        return { kind: "lambda", captures, defCapture, params, ret, body: body.stmts, mutable, ...CTJ.at(t) };
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const DECL_START = new Set([
        "static", "extern", "inline", "virtual", "explicit", "friend", "constexpr",
        "mutable", "register", "thread_local", "const", "volatile", "signed",
        "unsigned", "short", "long", "void", "bool", "char", "char16_t", "char32_t",
        "wchar_t", "int", "float", "double", "auto", "typename", "class", "struct",
        "union", "enum", "typedef", "template", "using", "namespace", "static_assert",
        "__extension__", "__typeof__", "__typeof", "decltype",
    ]);
    function parseStmt(p) {
        p.skipGnu();
        const t = p.peek();
        if (t.t === "{")
            return parseCompound(p);
        if (t.t === ";") {
            p.pos++;
            return { kind: "null", ...CTJ.at(t) };
        }
        if (t.t !== "ident") {
            const e = CTJ.parseExpr(p, 0);
            p.expect(";");
            return { kind: "expr", expr: e, ...CTJ.at(t) };
        }
        switch (t.v) {
            case "if": return parseIf(p);
            case "switch": return parseSwitch(p);
            case "while": return parseWhile(p);
            case "do": return parseDo(p);
            case "for": return parseFor(p);
            case "try": {
                p.pos++;
                const body = parseStmt(p);
                const handlers = p.parseCatchList();
                return { kind: "try", body, handlers, ...CTJ.at(t) };
            }
            case "return": {
                p.pos++;
                let expr = null;
                if (p.peek().t !== ";")
                    expr = CTJ.parseExpr(p, 0);
                p.expect(";");
                return { kind: "return", expr, ...CTJ.at(t) };
            }
            case "break":
                p.pos++;
                p.expect(";");
                return { kind: "break", ...CTJ.at(t) };
            case "continue":
                p.pos++;
                p.expect(";");
                return { kind: "continue", ...CTJ.at(t) };
            case "goto": {
                p.pos++;
                const label = p.expect("ident").v;
                p.expect(";");
                return { kind: "goto", label, ...CTJ.at(t) };
            }
            case "case": {
                p.pos++;
                const value = CTJ.parseExpr(p, 3);
                p.expect(":");
                const stmt = parseStmt(p);
                return { kind: "case", value, stmt, ...CTJ.at(t) };
            }
            case "default": {
                p.pos++;
                p.expect(":");
                const stmt = parseStmt(p);
                return { kind: "case", value: null, stmt, ...CTJ.at(t) };
            }
            case "throw": {
                p.pos++;
                let expr = null;
                if (p.peek().t !== ";")
                    expr = CTJ.parseExpr(p, 2);
                p.expect(";");
                return { kind: "throw", expr, ...CTJ.at(t) };
            }
            case "asm":
                p.pos++;
                if (p.isIdent("volatile") || p.isIdent("__volatile__"))
                    p.pos++;
                if (p.peek().t === "(")
                    p.skipBalanced("(", ")");
                p.expect(";");
                return { kind: "null", ...CTJ.at(t) };
            default: break;
        }
        if (t.t === "ident" && p.peek(1).t === ":" && t.v !== "operator") {
            p.pos += 2;
            const stmt = parseStmt(p);
            return { kind: "label", label: t.v, stmt, ...CTJ.at(t) };
        }
        if (isDeclStart(p)) {
            const ds = p.parseDecls(false);
            const d = ds[0];
            if (!d || d.kind === "empty")
                return { kind: "null", ...CTJ.at(t) };
            if (ds.length > 1) {
                return { kind: "compound", sameScope: true, stmts: ds.map(x => ({ kind: "decl", decl: x, ...CTJ.at(t) })), ...CTJ.at(t) };
            }
            return { kind: "decl", decl: d, ...CTJ.at(t) };
        }
        const e = CTJ.parseExpr(p, 0);
        p.expect(";");
        return { kind: "expr", expr: e, ...CTJ.at(t) };
    }
    CTJ.parseStmt = parseStmt;
    // Index just past a balanced <...> starting at j, or -1 when it is not one.
    function endOfTArgs(p, j) {
        const from = j;
        let depth = 0;
        let q = j;
        for (;;) {
            const u = p.peek(q);
            if (u.t === "eof")
                return -1;
            if (u.t === "<")
                depth++;
            if (u.t === ">")
                depth--;
            if (u.t === ">>")
                depth -= 2;
            if (depth <= 0)
                return q + 1;
            if (u.t === ";" || u.t === "{")
                return -1;
            q++;
            if (q - from > 200)
                return -1;
        }
    }
    function isDeclStart(p) {
        const t = p.peek();
        if (t.t !== "ident")
            return false;
        if (DECL_START.has(t.v))
            return true;
        if (t.v === "::")
            return true;
        let k = 0;
        if (p.peek(k).t === "::")
            k++;
        if (p.peek(k).t !== "ident")
            return false;
        // A qualified name may start with a namespace, which is not a type name.
        if (!p.isTypeName(p.peek(k).v) && p.peek(k + 1).t !== "::")
            return false;
        let j = k;
        while (p.peek(j).t === "ident" && p.peek(j + 1).t === "::")
            j += 2;
        if (p.peek(j).t !== "ident")
            return false;
        j++;
        if (p.peek(j).t === "<") {
            const e = endOfTArgs(p, j);
            if (e < 0)
                return false;
            j = e;
        }
        while (p.peek(j).t === "::") {
            j++;
            if (p.peek(j).t !== "ident")
                return false;
            j++;
        }
        if (p.peek(j).t === "ident" && p.peek(j).v === "operator")
            return true;
        const term = p.peek(j).t;
        if (term === "(")
            return false;
        if (term === "::")
            return true;
        return term === "*" || term === "&" || term === "&&" ||
            term === "ident" || term === "[" || term === "...";
    }
    function parseCompound(p) {
        const t = p.expect("{");
        p.pushScope();
        const stmts = [];
        try {
            while (!p.eat("}")) {
                if (p.atEnd())
                    CTJ.fail("unterminated block", t.file, t.line, t.col);
                try {
                    stmts.push(parseStmt(p));
                }
                catch (e) {
                    if (e instanceof CTJ.CtxError) {
                        p.warn(`parse error: ${e.message}, skipping statement`, p.peek());
                        recoverStmt(p);
                    }
                    else
                        throw e;
                }
            }
        }
        finally {
            p.popScope();
        }
        return { kind: "compound", stmts, ...CTJ.at(t) };
    }
    CTJ.parseCompound = parseCompound;
    function recoverStmt(p) {
        let depth = 0;
        for (;;) {
            const t = p.peek();
            if (t.t === "eof")
                return;
            if (t.t === "{") {
                depth++;
                p.pos++;
                continue;
            }
            if (t.t === "}") {
                if (depth === 0)
                    return;
                depth--;
                p.pos++;
                continue;
            }
            if (t.t === ";" && depth === 0) {
                p.pos++;
                return;
            }
            p.pos++;
        }
    }
    function parseCondDecl(p) {
        const m = p.mark();
        try {
            p.skipGnu();
            const t = p.peek();
            if (t.t === "::" || isDeclStart(p)) {
                const spec = p.parseDeclSpec();
                if (spec.type) {
                    const d = p.parseDeclarator();
                    if (d.name.length && !d.isFunc) {
                        const v = {
                            kind: "var", name: d.name, type: p.applyDeclarator(spec.type, d, t),
                            init: null, directInit: null, flags: [], bitfield: null, isParam: false, ...CTJ.at(t),
                        };
                        if (p.eat("="))
                            v.init = CTJ.parseExpr(p, 2);
                        else if (p.peek().t === "(") {
                            p.pos++;
                            v.directInit = p.parseExprList(")");
                        }
                        else if (p.peek().t === "{")
                            v.init = p.parseInitList();
                        return v;
                    }
                }
            }
        }
        catch { /* fall through */ }
        p.reset(m);
        return CTJ.parseExpr(p, 0);
    }
    function parseIf(p) {
        const t = p.expect("ident");
        p.expect("(");
        const cond = parseCondDecl(p);
        p.expect(")");
        const then = parseStmt(p);
        let els = null;
        if (p.isIdent("else")) {
            p.pos++;
            els = parseStmt(p);
        }
        return { kind: "if", cond, then, els, ...CTJ.at(t) };
    }
    function parseSwitch(p) {
        const t = p.expect("ident");
        p.expect("(");
        const cond = parseCondDecl(p);
        p.expect(")");
        const body = parseStmt(p);
        return { kind: "switch", cond, body, ...CTJ.at(t) };
    }
    function parseWhile(p) {
        const t = p.expect("ident");
        p.expect("(");
        const cond = parseCondDecl(p);
        p.expect(")");
        const body = parseStmt(p);
        return { kind: "while", cond, body, ...CTJ.at(t) };
    }
    function parseDo(p) {
        const t = p.expect("ident");
        const body = parseStmt(p);
        p.expect("ident");
        p.expect("(");
        const cond = CTJ.parseExpr(p, 0);
        p.expect(")");
        p.expect(";");
        return { kind: "do", cond, body, ...CTJ.at(t) };
    }
    function parseFor(p) {
        const t = p.expect("ident");
        p.expect("(");
        if (isRangeFor(p)) {
            const spec = p.parseDeclSpec();
            const d = p.parseDeclarator();
            if (!spec.type || !d.name.length || d.isFunc)
                CTJ.fail("bad range-for declaration", t.file, t.line, t.col);
            const vdecl = {
                kind: "var", name: d.name, type: p.applyDeclarator(spec.type, d, t),
                init: null, directInit: null, flags: [], bitfield: null, isParam: true, ...CTJ.at(t),
            };
            p.expect(":");
            const range = CTJ.parseExpr(p, 0);
            p.expect(")");
            const body = parseStmt(p);
            return { kind: "rangefor", vdecl, range, body, ...CTJ.at(t) };
        }
        let init = null;
        p.skipGnu();
        if (p.peek().t === ";")
            p.pos++;
        else if (isDeclStart(p))
            init = parseStmt(p);
        else {
            const e = CTJ.parseExpr(p, 0);
            p.expect(";");
            init = { kind: "expr", expr: e, ...CTJ.at(t) };
        }
        let cond = null;
        if (p.peek().t !== ";")
            cond = CTJ.parseExpr(p, 0);
        p.expect(";");
        let step = null;
        if (p.peek().t !== ")")
            step = CTJ.parseExpr(p, 0);
        p.expect(")");
        const body = parseStmt(p);
        return { kind: "for", init, cond, step, body, ...CTJ.at(t) };
    }
    function isRangeFor(p) {
        let depth = 0;
        let q = 0;
        for (;;) {
            const u = p.peek(q);
            if (u.t === "eof")
                return false;
            if (u.t === "(" || u.t === "[" || u.t === "{")
                depth++;
            if (u.t === ")" || u.t === "]" || u.t === "}") {
                if (depth === 0)
                    return false;
                depth--;
            }
            if (depth === 0 && u.t === ";")
                return false;
            if (depth === 0 && u.t === ":")
                return true;
            if (depth === 0 && u.t === "::") {
                q += 2;
                continue;
            }
            q++;
            if (q > 400)
                return false;
        }
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    class CppType {
        constructor(name) {
            this.segs = [];
            this.ptr = 0;
            this.ref = "";
            this.dims = [];
            this.isFunc = false;
            this.ret = null;
            this.funcParams = [];
            this.funcVariadic = false;
            this.cnst = false;
            this.name = name;
        }
        static basic(name) {
            const t = new CppType(name);
            t.segs = [{ n: name, a: [] }];
            return t;
        }
        key() {
            let s = this.segs.map(g => g.n + (g.a.length ? "<" + g.a.map(x => x.key()).join(",") + ">" : "")).join("::");
            if (!s)
                s = this.name;
            if (this.isFunc) {
                s += "(" + (this.ret ? this.ret.key() : "void") + (this.funcParams.length ? "," : "") +
                    this.funcParams.map(x => x.key()).join(",") + (this.funcVariadic ? "..." : "") + ")";
            }
            for (const d of this.dims)
                s += d < 0 ? "[]" : "[" + d + "]";
            s += "*".repeat(this.ptr) + this.ref;
            return s;
        }
        isBox() {
            return this.ptr > 0 || this.ref !== "";
        }
        core() {
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
    CTJ.CppType = CppType;
    function canonBasic(words) {
        const s = words.join(" ").replace(/\s+/g, " ").trim();
        const has = (...ws) => ws.every(w => words.includes(w));
        if (s === "void" || s === "bool" || s === "char" || s === "wchar_t" ||
            s === "char16_t" || s === "char32_t" || s === "float" || s === "double" ||
            s === "int" || s === "signed int" || s === "signed" || s === "auto") {
            if (s === "signed" || s === "signed int")
                return "int";
            return s;
        }
        if (s === "unsigned" || s === "unsigned int")
            return "unsigned int";
        if (s === "short" || s === "short int" || s === "signed short" || s === "signed short int")
            return "short";
        if (s === "unsigned short" || s === "unsigned short int")
            return "unsigned short";
        if (s === "long" || s === "long int" || s === "signed long" || s === "signed long int")
            return "long";
        if (s === "unsigned long" || s === "unsigned long int")
            return "unsigned long";
        if (has("long", "long") && words.includes("unsigned"))
            return "unsigned long long";
        if (has("long", "long"))
            return "long long";
        if (s === "long double")
            return "long double";
        if (s === "signed char")
            return "signed char";
        if (s === "unsigned char")
            return "unsigned char";
        if (s === "__builtin_va_list" || s === "__gnuc_va_list" || s === "va_list")
            return "__builtin_va_list";
        return null;
    }
    CTJ.canonBasic = canonBasic;
    function isNumericName(n) {
        return n !== "void" && ["bool", "char", "signed char", "unsigned char", "wchar_t",
            "char16_t", "char32_t", "short", "unsigned short", "int", "unsigned int",
            "long", "unsigned long", "long long", "unsigned long long",
            "float", "double", "long double"].includes(n);
    }
    CTJ.isNumericName = isNumericName;
    function isUnsignedName(n) {
        return n === "unsigned char" || n === "unsigned short" || n === "unsigned int" ||
            n === "unsigned long" || n === "unsigned long long";
    }
    CTJ.isUnsignedName = isUnsignedName;
    function isIntegerName(n) {
        return ["bool", "char", "signed char", "unsigned char", "wchar_t", "char16_t",
            "char32_t", "short", "unsigned short", "int", "unsigned int", "long",
            "unsigned long", "long long", "unsigned long long"].includes(n);
    }
    CTJ.isIntegerName = isIntegerName;
    // A type spelled well enough to tell two resolutions of the same name apart,
    // including the ones whose argument is an expression rather than a type.
    function exKey(e) {
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
    function tnKey(tn) {
        if (tn.valueArg)
            return "=" + exKey(tn.valueArg);
        if (tn.decltypeOf)
            return "decltype(" + exKey(tn.decltypeOf) + ")";
        let s = tn.parts.map(s => s.n + (s.a.length ? "<" + s.a.map(tnKey).join(",") + ">" : "")).join("::")
            + "*".repeat(tn.ptr) + tn.ref + (tn.cnst ? " const" : "");
        if (tn.func)
            s += "(" + tn.func.params.map(tnKey).join(",") + (tn.func.variadic ? "..." : "") + ")";
        if (tn.dims.length)
            s += tn.dims.map(d => "[" + exKey(d) + "]").join("");
        return s;
    }
    function rootScope() {
        return { ns: [], cls: null, locals: [], fn: null, returns: [] };
    }
    CTJ.rootScope = rootScope;
    function scopeName(s) {
        return s.ns.join("::");
    }
    CTJ.scopeName = scopeName;
    function blankAnn() {
        return { t: null, sym: null, call: null, conv: null, convs: [], caps: [], var: null, arrowCall: null, initCall: null, copyCtor: null, range: null, needsThis: false, isType: false };
    }
    CTJ.blankAnn = blankAnn;
    class Cx {
        constructor() {
            this.classes = new Map();
            this.funcs = new Map();
            this.vars = new Map();
            this.enums = new Map();
            this.typedefs = new Map();
            this.tmpls = new Map();
            // Templates that share a name are overloads of each other, which the map
            // above cannot hold: it keeps one template per name for type resolution.
            this.tmplOverloads = new Map();
            this.funcInsts = new Map();
            this.nsFuncIndex = new Map();
            this.nss = new Map();
            this.nsAlias = new Map();
            this.asserts = [];
            this.explicitInst = [];
            // A class can be instantiated before the file holding its out-of-line member
            // definitions is read ("hash<string>" instantiates basic_string<char> while
            // basic_string.h is still being collected, basic_string.tcc comes later), so
            // attaching those definitions waits until the whole unit is collected.
            this.collecting = true;
            this.pendingOOL = [];
            this.warnings = [];
            this.worklist = [];
            this.instStack = [];
            this.retStack = new Set();
            this.main = null;
            this.ann = new Map();
            // Types currently being resolved, so a loop says which names are in it
            // instead of exhausting the stack.
            this.resolving = [];
        }
        getAnn(n) {
            let a = this.ann.get(n);
            if (!a) {
                a = blankAnn();
                this.ann.set(n, a);
            }
            return a;
        }
        warn(msg, t) {
            this.warnings.push(t && t.file ? `${t.file}:${t.line}: ${msg}` : msg);
        }
        fail(msg, t) {
            if (t && t.file)
                CTJ.fail(msg, t.file, t.line, 0);
            CTJ.fail(msg);
        }
        ensureNs(fq) {
            let n = this.nss.get(fq);
            if (!n) {
                n = { fq, usingNs: [], usingDecl: new Map(), inlineNs: [] };
                this.nss.set(fq, n);
            }
            return n;
        }
        resolveNsAlias(fq) {
            const seen = new Set();
            let cur = fq;
            while (this.nsAlias.has(cur) && !seen.has(cur)) {
                seen.add(cur);
                cur = this.nsAlias.get(cur);
            }
            return cur;
        }
        pushWork(fn) {
            if (!fn.analyzed && !this.worklist.includes(fn))
                this.worklist.push(fn);
        }
        markFunc(fn) {
            fn.referenced = true;
            if (fn.decl.body || fn.isDefault)
                this.pushWork(fn);
        }
        // A member that overrides a virtual member of a base is virtual itself, even
        // without the keyword, so it has to be emitted for dispatch through the base.
        inheritVirtual(c) {
            const virt = new Set();
            const walk = (fq, seen) => {
                if (seen.has(fq))
                    return;
                seen.add(fq);
                const b = this.classes.get(fq);
                if (!b)
                    return;
                for (const [name, fns] of b.methods) {
                    for (const f of fns)
                        if (f.isVirtual)
                            virt.add(name);
                }
                for (const bb of b.bases)
                    walk(bb.fq, seen);
            };
            for (const b of c.bases)
                walk(b.fq, new Set());
            if (!virt.size)
                return;
            for (const [name, fns] of c.methods) {
                if (!virt.has(name))
                    continue;
                for (const f of fns) {
                    if (!f.isCtor && !f.isDtor && !f.isStatic)
                        f.isVirtual = true;
                }
            }
        }
        markVar(v) {
            v.referenced = true;
            if (!v.isGlobal)
                return;
        }
        markCls(fq) {
            const c = this.classes.get(fq);
            if (!c || !c.complete)
                return c || null;
            if (!c.referenced) {
                c.referenced = true;
                this.synthMembers(c);
                this.inheritVirtual(c);
                for (const b of c.bases)
                    this.markCls(b.fq);
                for (const fns of c.methods.values()) {
                    for (const f of fns) {
                        if (f.isVirtual)
                            this.markFunc(f);
                    }
                }
            }
            return c;
        }
        collect(decls, scope) {
            for (const d of decls)
                this.collectOne(d, scope);
        }
        collectOne(d, scope) {
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
                    }
                    else if (d.isInline) {
                        this.ensureNs("").inlineNs.push(fq);
                    }
                    if (d.decls) {
                        const sub = { ns: [...scope.ns, d.name], cls: null, locals: [], fn: null, returns: [] };
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
                    }
                    else if (!d.isDeclOnly) {
                        this.enums.get(fq).decl = d;
                    }
                    if (anon) {
                        // "enum { __value = 1 };" inside a class: the enumerators are read as
                        // members of that class, e.g. __are_same<_Tp, _Tp>::__value.
                        const ei = this.enums.get(fq);
                        const cs = scope.cls.consts || (scope.cls.consts = new Map());
                        for (const item of this.enumValues(ei).keys())
                            if (!cs.has(item))
                                cs.set(item, { e: ei, item });
                    }
                    if (scope.cls && !anon)
                        scope.cls.nested.set(d.name, fq);
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
                    if (scope.cls)
                        scope.cls.nested.set(d.name, fq);
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
        snapScope(s) {
            return { ns: s.ns.slice(), cls: s.cls, locals: [], fn: null, returns: [] };
        }
        memberFq(scope, name) {
            if (scope.cls)
                return scope.cls.fq + "::" + name;
            return [...scope.ns, name].join("::");
        }
        collectClass(d, scope) {
            if (d.name.startsWith("$") && d.isDeclOnly)
                return;
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
            const sub = { ns: scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
            cls.bases = [];
            for (const b of d.bases) {
                const bfq = this.resolveClassName(b.name, sub);
                cls.bases.push({ fq: bfq, access: b.access, isVirtual: b.isVirtual });
            }
            this.collect(d.members, sub);
        }
        registerNested(scope, name, fq) {
            const short = CTJ.last(name.split("::"));
            if (scope.cls) {
                scope.cls.nested.set(short, fq);
                if (name.includes("::"))
                    scope.cls.nested.set(name, fq);
            }
            if (name.includes("::")) {
                const parts = name.split("::");
                const ownerName = parts.slice(0, -1).join("::");
                const ownerFq = this.memberFq(scope, ownerName);
                const owner = this.classes.get(ownerFq);
                if (owner)
                    owner.nested.set(short, fq);
            }
        }
        // The name a class declares itself with: an instance of a template is called
        // by the template's short name, the arguments belong to its key.
        declaredName(c) {
            return c.fromTmpl ? CTJ.last(c.fromTmpl.split("::")) : c.short;
        }
        blankCls(fq, short, decl, scope) {
            return {
                fq, short, mangled: mangleType(fq), decl, scope: this.snapScope(scope),
                bases: [], fields: new Map(), fieldTypes: new Map(), fieldStatic: new Set(),
                methods: new Map(), nested: new Map(), usingBase: new Map(),
                isUnion: false, complete: false, fromTmpl: "", instArgs: [],
                referenced: false, synthDone: false, isLambda: false,
            };
        }
        collectFunc(d, scope) {
            const names = d.name.map(s => s.n);
            if (!names.length)
                return;
            if (names.length > 1) {
                const pre = d.name.slice(0, -1);
                const short = CTJ.last(names);
                const owner = this.resolvePrefix(pre, scope, d);
                if (owner && owner.k === "class") {
                    this.addMethod(owner.cls, short, d, scope);
                    return;
                }
                const nsFq = owner && owner.k === "ns" ? owner.fq : pre.map(s => s.n).join("::");
                const sub = { ns: nsFq ? nsFq.split("::") : [], cls: null, locals: [], fn: null, returns: [] };
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
        methodKey(d, short) {
            if (d.isCtor)
                return "#ctor";
            if (d.isDtor)
                return "#dtor";
            if (d.isConv)
                return "#conv";
            if (d.op)
                return "operator" + d.op;
            return short;
        }
        addMethod(cls, short, d, scope) {
            const key = this.methodKey(d, short);
            const sc = this.snapScope(scope);
            sc.cls = cls;
            const list = cls.methods.get(key) || [];
            for (const f of list) {
                if (!f.decl.body && d.body && f.decl.params.length === d.params.length) {
                    f.decl = d;
                    f.scope = sc;
                    return f;
                }
            }
            const fn = {
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
        addFunc(scope, short, d, declScope) {
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
            const fn = {
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
            }
            else {
                list.push(fn);
                this.funcs.set(fq, list);
                const nsFq = scope.ns.join("::");
                const idx = this.nsFuncIndex.get(nsFq) || [];
                idx.push(fn);
                this.nsFuncIndex.set(nsFq, idx);
                if (!scope.ns.length && short === "main" && !d.op)
                    this.main = fn;
            }
            return fn;
        }
        collectVar(d, scope) {
            const names = d.name.map(s => s.n);
            if (!names.length)
                return;
            if (names.length > 1) {
                const pre = d.name.slice(0, -1);
                const short = CTJ.last(names);
                const owner = this.resolvePrefix(pre, scope, d);
                if (owner && owner.k === "class") {
                    const f = owner.cls.fields.get(short);
                    if (f && (d.init || d.directInit)) {
                        f.init = d.init || f.init;
                        f.directInit = d.directInit || f.directInit;
                    }
                    else if (!f) {
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
                if (d.flags.includes("static"))
                    scope.cls.fieldStatic.add(short);
                return;
            }
            this.addGlobalVar(scope.ns.join("::"), short, d, scope);
        }
        addGlobalVar(nsFq, short, d, scope) {
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
            }
            else if ((d.init || d.directInit) && !v.decl.init && !v.decl.directInit) {
                v.decl = d;
            }
            return v;
        }
        collectUsing(d, scope) {
            if (d.isNs) {
                const fq = this.resolveNsName(d.name, scope);
                this.ensureNs(scope.ns.join("::")).usingNs.push(fq);
                return;
            }
            const names = d.name.map(s => s.n);
            const short = CTJ.last(names);
            if (scope.cls && names.length >= 2) {
                scope.cls.usingBase.set(short, names.slice(0, -1).join("::"));
                return;
            }
            const target = this.resolveValueName(d.name, scope);
            this.ensureNs(scope.ns.join("::")).usingDecl.set(short, target);
        }
        collectTemplate(d, scope) {
            if (!d.decl)
                return;
            if (d.isExplicit) {
                this.explicitInst.push({ decl: d.decl, scope: this.snapScope(scope) });
                return;
            }
            let inner = d.decl.kind === "friend" ? d.decl.decl : d.decl;
            let tparams = d.tparams.slice();
            while (inner && inner.kind === "template") {
                tparams = tparams.concat(inner.tparams);
                inner = inner.decl;
                if (inner && inner.kind === "friend")
                    inner = inner.decl;
            }
            if (!inner)
                return;
            let kind = "";
            let fq = "";
            if (inner.kind === "class") {
                kind = "class";
                fq = this.memberFq(scope, inner.name);
            }
            else if (inner.kind === "func") {
                kind = "func";
                const nm = inner.name.map(s => s.n);
                // An out-of-line definition spells its class without the namespace around
                // it, so the prefix has to be resolved to the class's own fq for the
                // member to be attached to the instances of that class.
                const short = inner.op ? "operator" + inner.op : CTJ.last(nm);
                // An out-of-line operator spells only its owner in the qualified name,
                // and a free one spells no owner at all: the "operator" keyword belongs
                // to the name rather than to a scope.
                const ownerParts = (inner.op ? inner.name : inner.name.slice(0, -1))
                    .filter(s => s.n !== "operator");
                fq = ownerParts.length
                    ? this.ownerFq(ownerParts, scope) + "::" + short
                    : this.memberFq(scope, short);
            }
            else if (inner.kind === "var") {
                // The definition of a static data member, written outside the class.
                kind = "data";
                const short = CTJ.last(inner.name.map(s => s.n));
                const ownerParts = inner.name.slice(0, -1);
                fq = ownerParts.length
                    ? this.ownerFq(ownerParts, scope) + "::" + short
                    : this.memberFq(scope, short);
            }
            else if (inner.kind === "typedef") {
                kind = "alias";
                fq = this.memberFq(scope, inner.name);
            }
            else
                return;
            if (d.isSpec) {
                const t = this.tmpls.get(fq);
                // A partial specialization keeps its own parameters; only a full one can
                // have its arguments resolved at this point.
                if (d.tparams.length) {
                    const part = { tparams: d.tparams, specArgs: d.specArgs, decl: inner };
                    if (t)
                        (t.partials || (t.partials = [])).push(part);
                    else
                        this.tmpls.set(fq, { fq, kind, tparams: [], decl: inner, scope: this.snapScope(scope), specs: [], partials: [part] });
                    return;
                }
                const args = d.specArgs.map(a => this.resolveTypeNode(a, scope));
                const key = args.map(a => a.key()).join(",");
                if (t) {
                    t.specs.push({ key, decl: inner });
                }
                else {
                    this.tmpls.set(fq, {
                        fq, kind, tparams: [], decl: inner, scope: this.snapScope(scope),
                        specs: [{ key, decl: inner }],
                    });
                }
                return;
            }
            if (scope.cls) {
                const short = inner.kind === "func" ? CTJ.last(inner.name.map(s => s.n)) : inner.name;
                if (short)
                    scope.cls.nested.set(short, fq);
            }
            // A template may be declared first with its default arguments and defined
            // later without them, so the defaults of an earlier declaration are kept.
            const prev = this.tmpls.get(fq);
            if (prev) {
                tparams.forEach((tp, i) => {
                    const old = prev.tparams[i];
                    if (!tp.def && old && old.def)
                        tp.def = old.def;
                });
            }
            this.registerTmpl({ fq, kind, tparams, decl: inner, scope: this.snapScope(scope), specs: prev ? prev.specs : [], partials: prev ? prev.partials : [] });
        }
        registerTmpl(t) {
            this.tmpls.set(t.fq, t);
            if (t.kind !== "func")
                return;
            const list = this.tmplOverloads.get(t.fq) || [];
            const sig = this.tmplSig(t);
            const i = list.findIndex(x => this.tmplSig(x) === sig);
            // A definition following a declaration is the same template, not an overload.
            if (i >= 0) {
                t.ovl = list[i].ovl;
                list[i] = t;
            }
            else {
                t.ovl = list.length;
                list.push(t);
            }
            this.tmplOverloads.set(t.fq, list);
        }
        tmplSig(t) {
            const d = t.decl;
            const ps = (d.params || []).map(p => JSON.stringify(p.type.parts.map(s => s.n + s.a.length))
                + p.type.ptr + p.type.ref + (p.isPack ? "..." : "")).join(",");
            const tps = t.tparams.map(x => x.kind + (x.isPack ? "..." : "")).join(",");
            return [tps, ps, d.op || "", d.flags.includes("const") ? "c" : ""].join("|");
        }
        // Every template declared under this name, for overload resolution.
        // Every template, overloads included: "tmpls" keeps one entry per name, so
        // scanning it alone would see only the last "operator!=" of a namespace.
        allTmpls() {
            const out = [];
            const seen = new Set();
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
        nsOfFq(fq) {
            let depth = 0;
            let cut = -1;
            for (let i = 0; i < fq.length - 1; i++) {
                const ch = fq[i];
                if (ch === "<")
                    depth++;
                else if (ch === ">")
                    depth--;
                else if (ch === ":" && fq[i + 1] === ":" && depth === 0) {
                    cut = i;
                    i++;
                }
            }
            return cut < 0 ? "" : fq.slice(0, cut);
        }
        tmplsOf(fq) {
            const list = this.tmplOverloads.get(fq);
            if (list && list.length)
                return list;
            const one = this.tmpls.get(fq);
            return one ? [one] : [];
        }
        resolveNsName(parts, scope) {
            const names = parts.map(s => s.n);
            for (let i = scope.ns.length; i >= 0; i--) {
                const cand = [...scope.ns.slice(0, i), ...names].join("::");
                if (this.nss.has(cand) || this.nsAlias.has(cand))
                    return this.resolveNsAlias(cand);
            }
            return this.resolveNsAlias(names.join("::"));
        }
        resolveValueName(parts, scope) {
            const s = this.resolveSym(parts, false, scope);
            if (!s)
                return parts.map(x => x.n).join("::");
            if (s.k === "func")
                return s.fns.length ? s.fns[0].fq : "";
            if (s.k === "var")
                return s.v.fq;
            if (s.k === "class")
                return s.cls.fq;
            if (s.k === "enum")
                return s.e.fq;
            if (s.k === "typedef")
                return s.fq;
            if (s.k === "ns")
                return s.fq;
            if (s.k === "tmpl")
                return s.t.fq;
            if (s.k === "enumval")
                return this.enumValFq(s.e, s.item);
            return "";
        }
        // An enumerator has no entry of its own: it lives in the namespace that
        // holds its enum, so that namespace plus the item name is its fq.
        enumValFq(e, item) {
            const i = e.fq.lastIndexOf("::");
            return (i < 0 ? "" : e.fq.slice(0, i + 2)) + item;
        }
        enumValOfFq(fq) {
            const i = fq.lastIndexOf("::");
            return this.findEnumVal(i < 0 ? "" : fq.slice(0, i), i < 0 ? fq : fq.slice(i + 2));
        }
        // The base a constructor initializer names, either directly or through a
        // typedef of the class as in "vector() : _Base() { }".
        ctorBase(cls, name) {
            const spelled = name.map(s => s.n).join("::");
            const direct = cls.bases.find(x => x.fq === spelled || CTJ.last(x.fq.split("::")) === spelled);
            if (direct)
                return direct.fq;
            let s = null;
            try {
                s = this.resolveSym(name, false, this.memberScope(cls));
                if (s && s.k === "typedef")
                    s = this.symOfType(this.expandTypedef(s.fq, new Set()));
            }
            catch {
                return null;
            }
            if (!s || s.k !== "class")
                return null;
            const hit = cls.bases.find(x => x.fq === s.cls.fq);
            return hit ? hit.fq : null;
        }
        resolveClassName(parts, scope) {
            let s = this.resolveSym(parts, false, scope);
            // A base may be named through a typedef, as in
            // "struct _Vector_impl : public _Tp_alloc_type".
            if (s && s.k === "typedef")
                s = this.symOfType(this.expandTypedef(s.fq, new Set()));
            if (s && s.k === "class")
                return s.cls.fq;
            this.fail(`unknown base class '${parts.map(x => x.n).join("::")}'`);
        }
        resolvePrefix(parts, scope, t) {
            try {
                return this.resolveSym(parts, false, scope);
            }
            catch {
                this.warn(`cannot resolve '${parts.map(x => x.n).join("::")}'`, t);
                return null;
            }
        }
        lookupFirst(name, scope) {
            for (let i = scope.locals.length - 1; i >= 0; i--) {
                const v = scope.locals[i].get(name);
                if (v)
                    return { k: "var", v };
            }
            // The names of the enclosing classes are visible inside a nested class.
            for (let c = scope.cls; c; c = c.scope.cls) {
                const m = this.lookupMember(c.fq, name, new Set());
                if (m.field) {
                    const cls = this.classes.get(m.owner);
                    const fd = cls.fields.get(name);
                    return { k: "var", v: this.fieldVar(cls, name, fd) };
                }
                if (m.methods)
                    return { k: "func", fns: m.methods };
                if (m.nested)
                    return this.symOfNested(m.nested);
                if (m.typedef)
                    return { k: "typedef", fq: m.typedef };
            }
            for (let i = scope.ns.length; i >= 0; i--) {
                const pre = scope.ns.slice(0, i).join("::");
                const s = this.lookupInNs(pre, name, new Set());
                if (s)
                    return s;
            }
            return this.lookupBuiltin(name);
        }
        lookupInNs(nsFq, name, seen) {
            const fq = nsFq ? nsFq + "::" + name : name;
            if (this.classes.has(fq))
                return { k: "class", cls: this.classes.get(fq) };
            if (this.funcs.has(fq))
                return { k: "func", fns: this.funcs.get(fq) };
            if (this.vars.has(fq))
                return { k: "var", v: this.vars.get(fq) };
            if (this.enums.has(fq))
                return { k: "enum", e: this.enums.get(fq) };
            if (this.typedefs.has(fq))
                return { k: "typedef", fq };
            if (this.tmpls.has(fq))
                return { k: "tmpl", t: this.tmpls.get(fq) };
            if (this.nss.has(fq) || this.nsAlias.has(fq))
                return { k: "ns", fq: this.resolveNsAlias(fq) };
            const e = this.findEnumVal(nsFq, name);
            if (e)
                return e;
            const ns = this.nss.get(nsFq);
            if (ns) {
                if (ns.usingDecl.has(name)) {
                    const t = ns.usingDecl.get(name);
                    const s = this.symOfFq(t);
                    if (s)
                        return s;
                }
                if (!seen.has(nsFq)) {
                    seen.add(nsFq);
                    for (const u of ns.usingNs) {
                        const s = this.lookupInNs(this.resolveNsAlias(u), name, seen);
                        if (s)
                            return s;
                    }
                    for (const inl of ns.inlineNs) {
                        const s = this.lookupInNs(inl, name, seen);
                        if (s)
                            return s;
                    }
                }
            }
            if (!nsFq) {
                for (const inl of this.ensureNs("").inlineNs) {
                    const s = this.lookupInNs(inl, name, seen);
                    if (s)
                        return s;
                }
            }
            return null;
        }
        findEnumVal(nsFq, name) {
            for (const e of this.enums.values()) {
                if (e.scoped || e.decl.isDeclOnly)
                    continue;
                const efq = e.fq;
                const ens = efq.includes("::") ? efq.slice(0, efq.lastIndexOf("::")) : "";
                if (ens !== nsFq)
                    continue;
                this.enumValues(e);
                if (e.values.has(name))
                    return { k: "enumval", e, item: name };
            }
            return null;
        }
        symOfFq(fq) {
            if (this.classes.has(fq))
                return { k: "class", cls: this.classes.get(fq) };
            if (this.funcs.has(fq))
                return { k: "func", fns: this.funcs.get(fq) };
            if (this.vars.has(fq))
                return { k: "var", v: this.vars.get(fq) };
            if (this.enums.has(fq))
                return { k: "enum", e: this.enums.get(fq) };
            if (this.typedefs.has(fq))
                return { k: "typedef", fq };
            if (this.tmpls.has(fq))
                return { k: "tmpl", t: this.tmpls.get(fq) };
            if (this.nss.has(fq))
                return { k: "ns", fq };
            const ev = this.enumValOfFq(fq);
            if (ev)
                return ev;
            return null;
        }
        symOfNested(fq) {
            return this.symOfFq(fq);
        }
        lookupBuiltin(name) {
            if (name === "__ctj_js" || name === "__ctj_php")
                return { k: "builtin", name };
            return null;
        }
        fieldVar(cls, name, fd) {
            return {
                fq: cls.fq + "::" + name, short: name, mangled: name,
                decl: fd, scope: this.memberScope(cls), typeCache: null, storage: "plain",
                isGlobal: false, isStatic: cls.fieldStatic.has(name),
                isParam: false, isField: true, lifted: false, referenced: false,
            };
        }
        lookupMember(clsFq, name, seen) {
            const r = { field: false, methods: null, nested: null, typedef: null, constItem: null, owner: clsFq };
            const cls = this.classes.get(clsFq);
            if (!cls || seen.has(clsFq))
                return r;
            seen.add(clsFq);
            if (cls.fields.has(name)) {
                r.field = true;
                r.owner = clsFq;
                return r;
            }
            if (cls.methods.has(name)) {
                r.methods = cls.methods.get(name);
                r.owner = clsFq;
                if (!cls.usingBase.has(name) && name !== "#ctor")
                    return r;
            }
            if (name === "#ctor" && cls.usingBase.size) {
                const inh = r.methods ? r.methods.slice() : [];
                const seenBase = new Set();
                for (const b of cls.usingBase.values()) {
                    const bfq = cls.bases.map(x => x.fq).find(f => f === b || f.endsWith("::" + b) || CTJ.last(f.split("::")) === b);
                    if (bfq && !seenBase.has(bfq)) {
                        seenBase.add(bfq);
                        const bc = this.classes.get(bfq);
                        if (bc && bc.methods.has("#ctor")) {
                            for (const f of bc.methods.get("#ctor"))
                                inh.push(f);
                        }
                    }
                }
                if (inh.length) {
                    r.methods = inh;
                    return r;
                }
            }
            if (cls.nested.has(name)) {
                r.nested = cls.nested.get(name);
                r.owner = clsFq;
                return r;
            }
            if (cls.consts && cls.consts.has(name)) {
                r.constItem = cls.consts.get(name);
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
                if (sub.field && !r.methods)
                    return sub;
                if (sub.methods && (cls.usingBase.has(name) || !methods)) {
                    methods = methods ? methods.concat(sub.methods) : sub.methods.slice();
                    if (!cls.usingBase.has(name)) {
                        r.methods = methods;
                        r.owner = sub.owner;
                        return r;
                    }
                }
                if (sub.nested && !methods && !r.field)
                    return sub;
                if (sub.typedef && !methods && !r.field)
                    return sub;
            }
            if (methods) {
                r.methods = methods;
                return r;
            }
            return r;
        }
        resolveSym(parts, global, scope) {
            if (!parts.length)
                return null;
            // The injected class name: inside a class its own name, written without
            // arguments, stands for the class itself rather than for its template.
            if (!global && !parts[0].a.length) {
                for (let c = scope.cls; c; c = c.scope.cls) {
                    if (this.declaredName(c) === parts[0].n)
                        return { k: "class", cls: c };
                }
            }
            let sym;
            let idx = 0;
            if (global) {
                sym = this.lookupGlobalFirst(parts[0].n);
            }
            else {
                sym = this.lookupFirst(parts[0].n, scope);
            }
            if (!sym)
                return null;
            sym = this.applySegArgs(sym, parts[0], scope);
            if (!sym)
                return null;
            idx = 1;
            for (; idx < parts.length; idx++) {
                sym = this.lookupNext(sym, parts[idx], scope);
                if (!sym)
                    break;
            }
            if (!sym && parts.length > 1 && scope.cls) {
                // "basic_string<_CharT, ...>::_Rep" written inside the class: the plain
                // head finds the constructor before the class template, so the whole path
                // is looked up again where only the namespaces are in scope.
                return this.resolveSym(parts, global, { ns: scope.ns.slice(), cls: null, locals: [], fn: null, returns: [] });
            }
            return sym;
        }
        lookupGlobalFirst(name) {
            const s = this.lookupInNs("", name, new Set());
            if (s)
                return s;
            return this.lookupBuiltin(name);
        }
        applySegArgs(sym, seg, scope) {
            if (!seg.a.length)
                return sym;
            // Instantiating a member function template also registers it as a plain
            // method, so a later "f<A, B>(x)" finds the function before the template.
            // A template-id always names the template.
            if (sym.k === "func" && sym.fns.length) {
                const t = this.tmpls.get(sym.fns[0].fromTmpl || sym.fns[0].fq);
                if (t)
                    sym = { k: "tmpl", t };
            }
            if (sym.k !== "tmpl")
                return null;
            const args = seg.a.map(a => this.resolveTypeNode(a, scope));
            return this.instantiateTmplSeg(sym.t, args, scope);
        }
        instantiateTmplSeg(t, args, scope) {
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
        symOfType(t) {
            if (t.ptr || t.ref || t.dims.length || t.isFunc)
                return null;
            const key = t.segs.map(g => g.n).join("::");
            void key;
            const fq = t.name;
            if (this.classes.has(fq))
                return { k: "class", cls: this.classes.get(fq) };
            if (this.enums.has(fq))
                return { k: "enum", e: this.enums.get(fq) };
            if (this.typedefs.has(fq))
                return { k: "typedef", fq };
            return null;
        }
        lookupNext(sym, seg, scope) {
            const name = seg.n;
            let next = null;
            if (sym.k === "ns") {
                next = this.lookupInNs(sym.fq, name, new Set());
            }
            else if (sym.k === "class") {
                const m = this.lookupMember(sym.cls.fq, name, new Set());
                if (m.field) {
                    const cls = this.classes.get(m.owner);
                    next = { k: "var", v: this.fieldVar(cls, name, cls.fields.get(name)) };
                }
                else if (m.methods)
                    next = { k: "func", fns: m.methods };
                else if (m.nested)
                    next = this.symOfNested(m.nested);
                else if (m.constItem)
                    next = { k: "enumval", e: m.constItem.e, item: m.constItem.item };
            }
            else if (sym.k === "enum") {
                this.enumValues(sym.e);
                if (sym.e.values.has(name))
                    next = { k: "enumval", e: sym.e, item: name };
            }
            else if (sym.k === "typedef") {
                const td = this.typedefs.get(sym.fq);
                if (td) {
                    const ty = this.resolveTypeNode(td.target, td.scope);
                    const s = this.symOfType(ty);
                    if (s)
                        return this.lookupNext(s, seg, scope);
                }
                return null;
            }
            else if (sym.k === "tmpl" && sym.t.kind === "alias") {
                return null;
            }
            else
                return null;
            if (!next)
                return null;
            return this.applySegArgs(next, seg, scope);
        }
        enumValues(e) {
            if (e.values)
                return e.values;
            e.values = new Map();
            let cur = 0;
            for (const it of e.decl.items) {
                if (it.value) {
                    const v = CTJ.constEval(this, it.value, e.scope);
                    cur = typeof v === "number" ? Math.trunc(v) : 0;
                }
                e.values.set(it.name, cur);
                cur++;
            }
            return e.values;
        }
        varType(v) {
            if (!v.typeCache) {
                v.typeCache = this.resolveTypeNode(v.decl.type, v.scope);
                if (v.typeCache.name === "auto") {
                    this.fail(`cannot deduce 'auto' for '${v.short}' here`);
                }
            }
            return v.typeCache;
        }
        funcParams(fn) {
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
        paramScope(fn) {
            const s = this.snapScope(fn.scope);
            s.fn = fn;
            const m = new Map();
            s.locals.push(m);
            for (const p of this.funcParams(fn)) {
                if (!p.name)
                    continue;
                m.set(p.name, {
                    fq: fn.fq + "::" + p.name, short: p.name, mangled: p.name, lifted: false,
                    decl: {
                        kind: "var", name: [CTJ.qseg(p.name)], type: CTJ.typeNode([]), init: null, directInit: null,
                        flags: [], bitfield: null, isParam: true, file: fn.decl.file, line: fn.decl.line,
                    },
                    scope: s, typeCache: p.type, storage: "plain",
                    isGlobal: false, isStatic: false, isParam: true, isField: false, referenced: false,
                });
            }
            return s;
        }
        funcRet(fn) {
            if (!fn.retCache) {
                if (this.retStack.has(fn)) {
                    this.warn(`recursive return type of '${fn.fq}', assuming int`);
                    fn.retCache = CppType.basic("int");
                    return fn.retCache;
                }
                this.retStack.add(fn);
                try {
                    if (fn.decl.trailing)
                        fn.retCache = this.resolveTypeNode(fn.decl.trailing, this.paramScope(fn));
                    else if (fn.decl.ret)
                        fn.retCache = this.resolveTypeNode(fn.decl.ret, fn.scope);
                    else
                        fn.retCache = CppType.basic("void");
                }
                finally {
                    this.retStack.delete(fn);
                }
            }
            return fn.retCache;
        }
        // A member declaration is resolved in the scope of its own class, so that
        // typedefs and nested names declared next to it are visible.
        memberScope(cls) {
            return { ns: cls.scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
        }
        fieldType(cls, name) {
            let t = cls.fieldTypes.get(name);
            if (!t) {
                const fd = cls.fields.get(name);
                t = this.resolveTypeNode(fd.type, this.memberScope(cls));
                cls.fieldTypes.set(name, t);
            }
            return t;
        }
        resolveTypeNode(tn, scope) {
            const key = tnKey(tn);
            const at = this.resolving.indexOf(key);
            if (at >= 0 && (tn.ptr > 0 || tn.ref !== "" || tn.dims.length > 0 || !!tn.func)) {
                const baseName = tn.parts.map(s => s.n).join("::") || "void";
                const t = CppType.basic(baseName);
                if (tn.parts.length)
                    t.segs = tn.parts.map(s => ({ n: s.n, a: [] }));
                this.applyTypeSuffix(t, tn, scope);
                return t;
            }
            this.resolving.push(key);
            if (at >= 0) {
                const loop = this.resolving.slice(at).join(" -> ");
                this.resolving.length = 0;
                this.fail("cyclic type resolution: " + loop, tn);
            }
            try {
                return this.resolveTypeNodeInner(tn, scope);
            }
            finally {
                this.resolving.pop();
            }
        }
        resolveTypeNodeInner(tn, scope) {
            if (tn.decltypeOf)
                return CTJ.typeOf(this, tn.decltypeOf, scope);
            if (tn.valueArg) {
                const v = CTJ.constEval(this, tn.valueArg, scope);
                if (typeof v !== "number")
                    this.fail("non-constant template value argument", tn);
                return CppType.basic("__value" + Math.trunc(v));
            }
            if (!tn.parts.length)
                this.fail("missing type");
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
            if (!sym && tn.parts.every(x => !x.a.length))
                sym = this.symOfFq(tn.parts.map(x => x.n).join("::"));
            if (!sym)
                this.fail(`unknown type '${tn.parts.map(s => s.n).join("::")}'`, tn);
            const s = sym;
            let base;
            if (s.k === "class") {
                base = new CppType(s.cls.fq);
                base.segs = [{ n: s.cls.fromTmpl || s.cls.fq, a: s.cls.instArgs.slice() }];
                this.markCls(s.cls.fq);
            }
            else if (s.k === "enum") {
                base = new CppType(s.e.fq);
                base.segs = [{ n: s.e.fq, a: [] }];
                s.e.referenced = true;
            }
            else if (s.k === "typedef") {
                base = this.expandTypedef(s.fq, new Set());
            }
            else if (s.k === "tmpl") {
                if (s.t.kind === "class") {
                    const cls = this.instantiateClass(s.t.fq, [], scope, tn);
                    base = new CppType(cls.fq);
                    base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
                    this.markCls(cls.fq);
                }
                else if (s.t.kind === "alias") {
                    base = this.instantiateAlias(s.t.fq, [], scope);
                }
                else if (s.t.kind === "func" && s.t.decl.isCtor && s.t.scope.cls) {
                    // A constructor template named in a type position stands for its class.
                    const cls = s.t.scope.cls;
                    base = new CppType(cls.fq);
                    base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
                    this.markCls(cls.fq);
                }
                else
                    this.fail(`'${s.t.fq}' is not a type`, tn);
            }
            else if (s.k === "enumval") {
                const vals = this.enumValues(s.e);
                base = CppType.basic("__value" + (vals.get(s.item) || 0));
            }
            else if (s.k === "var") {
                const v = CTJ.constEval(this, { kind: "id", parts: tn.parts, global: tn.global, file: tn.file, line: tn.line }, scope);
                if (typeof v !== "number")
                    this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
                base = CppType.basic("__value" + Math.trunc(v));
            }
            else if (s.k === "func" && s.fns.some(f => f.isCtor)) {
                // "new_allocator<_Tp1>" names a constructor, which in a type position
                // stands for the class it constructs.
                const cls = this.classes.get(s.fns[0].cls);
                if (!cls)
                    this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
                base = new CppType(cls.fq);
                base.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
                this.markCls(cls.fq);
            }
            else
                this.fail(`'${tn.parts.map(x => x.n).join("::")}' is not a type`, tn);
            this.applyTypeSuffix(base, tn, scope);
            return base;
        }
        applyTypeSuffix(base, tn, scope) {
            base.ptr += tn.ptr;
            if (tn.ref)
                base.ref = tn.ref;
            if (tn.cnst)
                base.cnst = true;
            for (const d of tn.dims) {
                if (d.kind === "lit" && !d.value)
                    base.dims.push(-1);
                else {
                    const v = CTJ.constEval(this, d, scope);
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
        expandTypedef(fq, seen) {
            if (seen.has(fq))
                this.fail(`cyclic typedef '${fq}'`);
            if (seen.size > 100)
                this.fail(`typedef expansion too deep '${fq}'`);
            seen.add(fq);
            const td = this.typedefs.get(fq);
            if (!td)
                this.fail(`unknown typedef '${fq}'`);
            const target = td.target;
            if (target.parts.length === 1 && !target.parts[0].a.length && !target.ptr && !target.ref &&
                !target.func && !target.dims.length && !target.decltypeOf && !target.valueArg) {
                const s = this.resolveSym(target.parts, target.global, td.scope);
                if (s && s.k === "typedef") {
                    const t = this.expandTypedef(s.fq, seen);
                    seen.delete(fq);
                    return t;
                }
            }
            const t = this.resolveTypeNode(target, td.scope);
            seen.delete(fq);
            return t;
        }
        instantiateClass(tmplFq, args, scope, t) {
            const tmpl = this.tmpls.get(tmplFq);
            if (!tmpl || tmpl.kind !== "class")
                this.fail(`'${tmplFq}' is not a class template`, t || undefined);
            const full = this.fillDefaultArgs(tmpl, args, scope, t);
            const key = tmpl.fq + "<" + full.map(a => a.key()).join(",") + ">";
            const exist = this.classes.get(key);
            if (exist) {
                this.markCls(key);
                return exist;
            }
            // The specialization can be declared in one header and defined in another
            // ("charfwd.h" declares char_traits<char>, "char_traits.h" defines it);
            // a declaration that carries members is the one to instantiate.
            const want = full.map(a => a.key()).join(",");
            let spec = null;
            for (const s of tmpl.specs) {
                if (s.key !== want)
                    continue;
                spec = s;
                if (s.decl.members.length)
                    break;
            }
            if (spec)
                return this.instantiateClassDecl(key, tmpl, spec.decl, full, CTJ.blankSubstEnv(), t);
            if (this.instStack.includes(key))
                this.fail(`recursive instantiation of '${key}'`, t || undefined);
            this.instStack.push(key);
            try {
                for (const p of tmpl.partials || []) {
                    const env = this.matchPartial(p, full, tmpl);
                    if (env)
                        return this.instantiateClassDecl(key, tmpl, CTJ.substDecl(p.decl, env), full, env, t);
                }
                const env = this.buildEnv(tmpl.tparams, full);
                const decl = CTJ.substDecl(tmpl.decl, env);
                return this.instantiateClassDecl(key, tmpl, decl, full, env, t);
            }
            finally {
                this.instStack.pop();
            }
        }
        // Match the argument list of a partial specialization against the arguments
        // of an instantiation; the result substitutes into the specialization.
        matchPartial(p, args, tmpl) {
            // Every argument has to be accounted for, so the arities must agree - a
            // trailing pack being the one exception, it takes whatever is left over.
            const last = p.specArgs.length ? p.specArgs[p.specArgs.length - 1] : null;
            const packTn = last && last.packExpand ? last : null;
            const fixed = p.specArgs.length - (packTn ? 1 : 0);
            if (packTn ? fixed > args.length : p.specArgs.length !== args.length)
                return null;
            const env = CTJ.blankSubstEnv();
            const names = new Set(p.tparams.map(x => x.name));
            for (let i = 0; i < fixed; i++) {
                if (!this.matchTypeArg(p.specArgs[i], args[i], names, env, tmpl.scope))
                    return null;
            }
            if (packTn && packTn.parts.length)
                env.packs.set(packTn.parts[0].n, args.slice(fixed));
            for (const tp of p.tparams) {
                // A pack binds in env.packs, so it is never in env.types; unlike a plain
                // parameter it needs no default of its own.
                if (tp.isPack || env.types.has(tp.name) || env.values.has(tp.name))
                    continue;
                if (!tp.def)
                    return null;
                if (tp.kind === "nontype") {
                    const v = CTJ.constEval(this, CTJ.substExpr(tp.def, env), tmpl.scope);
                    if (typeof v !== "number")
                        return null;
                    env.values.set(tp.name, Math.trunc(v));
                }
                else {
                    env.types.set(tp.name, this.resolveTypeNode(CTJ.substTypeNode(tp.def, env), tmpl.scope));
                }
            }
            return env;
        }
        // Match a function-type pattern such as "_Res(_ArgTypes...)": the return
        // type binds to _Res, the parameters to the leading patterns and whatever is
        // left over to a trailing pack.
        matchFuncArg(tn, t, names, env, scope, ret) {
            if (!t.isFunc || !t.ret)
                return false;
            const have = env.types.get(ret);
            if (have) {
                if (have.key() !== t.ret.key())
                    return false;
            }
            else {
                env.types.set(ret, t.ret);
            }
            const pat = tn.func ? tn.func.params : [];
            const act = t.funcParams || [];
            const lp = pat.length ? pat[pat.length - 1] : null;
            const pack = lp && lp.packExpand && lp.parts.length === 1 && !lp.parts[0].a.length && names.has(lp.parts[0].n)
                ? lp.parts[0].n : null;
            const n = pat.length - (pack ? 1 : 0);
            if (pack ? act.length < n : act.length !== n)
                return false;
            if (pack)
                env.packs.set(pack, act.slice(n));
            for (let i = 0; i < n; i++) {
                if (!this.matchTypeArg(pat[i], act[i], names, env, scope))
                    return false;
            }
            return true;
        }
        matchTypeArg(tn, t, names, env, scope) {
            if (tn.valueArg) {
                // The argument may be an expression over parameters matched earlier, as
                // in "conditional<_B1::value, ...>", so it is substituted first.
                const v = CTJ.constEval(this, CTJ.substExpr(tn.valueArg, env), scope);
                return typeof v === "number" && t.name === "__value" + Math.trunc(v);
            }
            if (!tn.parts.length)
                return false;
            const first = tn.parts[0].n;
            if (tn.parts.length === 1 && !tn.parts[0].a.length && names.has(first)) {
                // "_Res(_Args...)" is a function type: only a function argument matches,
                // and its parameter list has to line up with the pattern.
                if (tn.func)
                    return this.matchFuncArg(tn, t, names, env, scope, first);
                if (t.ptr < tn.ptr || (tn.ref && tn.ref !== t.ref))
                    return false;
                // "_Tp[]" and "_Tp[_Size]" only match arrays; without this the array
                // specialization of remove_all_extents is picked for a plain int.
                if (tn.dims.length !== t.dims.length)
                    return false;
                if (env.types.has(first))
                    return env.types.get(first).key() === t.key();
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
                if (ta.length !== tn.parts[0].a.length)
                    return false;
                for (let i = 0; i < ta.length; i++) {
                    if (!this.matchTypeArg(tn.parts[0].a[i], ta[i], names, env, scope))
                        return false;
                }
                return true;
            }
            return this.resolveTypeNode(tn, scope).key() === t.key();
        }
        instantiateClassDecl(key, tmpl, decl, args, env, t) {
            void env;
            void t;
            const cls = this.blankCls(key, CTJ.last(key.split("::")), decl, tmpl.scope);
            cls.complete = true;
            cls.fromTmpl = tmpl.fq;
            cls.instArgs = args;
            cls.isUnion = decl.cls === "union";
            cls.mangled = mangleType(key);
            this.classes.set(key, cls);
            const sub = { ns: tmpl.scope.ns.slice(), cls, locals: [], fn: null, returns: [] };
            for (const b of decl.bases) {
                cls.bases.push({ fq: this.resolveClassName(b.name, sub), access: b.access, isVirtual: b.isVirtual });
            }
            this.collect(decl.members, sub);
            // A constructor declaration keeps its default arguments; a call can need
            // one of them before the function itself is ever analyzed.
            for (const list of cls.methods.values()) {
                for (const fn of list)
                    this.annDefaults(fn.decl, this.memberScope(cls));
            }
            if (this.collecting)
                this.pendingOOL.push({ tmpl, key, cls, args });
            else
                this.instantiateOutOfLineMembers(tmpl, key, cls, args);
            this.markCls(key);
            return cls;
        }
        flushOutOfLine() {
            this.collecting = false;
            const list = this.pendingOOL;
            this.pendingOOL = [];
            for (const p of list)
                this.instantiateOutOfLineMembers(p.tmpl, p.key, p.cls, p.args);
        }
        instantiateOutOfLineMembers(tmpl, key, cls, args) {
            const prefix = tmpl.fq + "::";
            const outer = tmpl.tparams.length;
            for (const t of this.allTmpls()) {
                if (!t.fq.startsWith(prefix))
                    continue;
                const env = this.buildEnv(tmpl.tparams, args);
                const rest = t.tparams.slice(outer);
                const newFq = key + "::" + t.fq.slice(prefix.length);
                // The member can belong to a nested class of the instantiated one:
                // "W2<int>::N::get" is a method of W2<int>::N, not of W2<int>.
                const owner = this.classes.get(this.nsOfFq(newFq)) || cls;
                if (t.kind === "data" && !rest.length) {
                    const decl = CTJ.substDecl(t.decl, env);
                    const short = CTJ.last(decl.name).n;
                    const fd = owner.fields.get(short);
                    // The declaration inside the class carries no value; the definition
                    // does, and it is what the emitted static field is initialized from.
                    if (fd && !fd.init && !fd.directInit && decl.init) {
                        owner.fields.set(short, decl);
                        try {
                            CTJ.typeOf(this, decl.init, this.memberScope(owner));
                        }
                        catch {
                            /* the emitter reports a value it cannot evaluate */
                        }
                    }
                }
                else if (t.kind === "func" && !rest.length) {
                    const decl = CTJ.substDecl(t.decl, env);
                    this.annDefaults(decl, this.memberScope(owner));
                    const exist = this.findMethod(owner, decl);
                    if (exist && !exist.decl.body && decl.body) {
                        exist.decl = decl;
                        exist.scope = this.memberScope(owner);
                    }
                    else if (!exist) {
                        this.addMethod(owner, this.methodShort(decl), decl, this.memberScope(owner));
                    }
                }
                else {
                    const decl = CTJ.substDecl(t.decl, env);
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
        ownerFq(parts, scope) {
            const whole = this.resolveOwnerPath(parts, scope);
            if (whole)
                return whole;
            // What is left names members of a class that is still a template, which
            // cannot be resolved from here: they are kept as written behind whatever
            // the first name turns out to be.
            const head = this.resolveOwnerPath([parts[0]], scope) || parts[0].n;
            return parts.length > 1 ? head + "::" + parts.slice(1).map(s => s.n).join("::") : head;
        }
        resolveOwnerPath(parts, scope) {
            let owner = null;
            try {
                owner = this.resolveSym(parts.map(s => CTJ.qseg(s.n)), false, scope);
            }
            catch {
                owner = null;
            }
            if (owner && owner.k === "class")
                return owner.cls.fq;
            if (owner && owner.k === "tmpl")
                return owner.t.fq;
            if (owner && owner.k === "ns")
                return owner.fq;
            return null;
        }
        methodShort(d) {
            if (!d.name.length)
                return "";
            return CTJ.last(d.name).n;
        }
        findMethod(cls, d) {
            const key = this.methodKey(d, this.methodShort(d));
            const list = cls.methods.get(key);
            if (!list)
                return null;
            for (const f of list) {
                if (f.decl.params.length === d.params.length)
                    return f;
            }
            return list[0] || null;
        }
        instantiateAlias(tmplFq, args, scope) {
            const tmpl = this.tmpls.get(tmplFq);
            if (!tmpl || tmpl.kind !== "alias")
                this.fail(`'${tmplFq}' is not an alias template`);
            const full = this.fillDefaultArgs(tmpl, args, scope, null);
            const env = this.buildEnv(tmpl.tparams, full);
            const inner = tmpl.decl;
            const tn = CTJ.substTypeNode(inner.type, env);
            return this.resolveTypeNode(tn, tmpl.scope);
        }
        // Substitution produces fresh expression nodes. A default argument can be
        // needed before the function that owns it is analyzed, so it is typed here.
        annDefaults(decl, scope) {
            for (const pd of decl.params) {
                if (!pd.def)
                    continue;
                try {
                    CTJ.typeOf(this, pd.def, scope);
                }
                catch { /* the annotator retries */ }
            }
        }
        instantiateFunc(tmpl, args, given) {
            // Overloads of one name are different functions: without the position of
            // this one among them, "operator!=" for reverse_iterator would stand in
            // for the one for move_iterator.
            const tag = tmpl.ovl ? "#" + tmpl.ovl : "";
            const key = tmpl.fq + tag + "<" + args.map(a => a.key()).join(",") + ">";
            const exist = this.funcInsts.get(key);
            if (exist)
                return exist;
            const env = this.buildEnv(tmpl.tparams, args);
            for (const [k, v] of given) {
                if (!env.types.has(k))
                    env.types.set(k, v);
            }
            const decl = CTJ.substDecl(tmpl.decl, env);
            this.annDefaults(decl, this.snapScope(tmpl.scope));
            const fn = {
                fq: key, short: CTJ.last(tmpl.fq.split("::")), mangled: mangleType(key),
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
            }
            else {
                const list = this.funcs.get(tmpl.fq) || [];
                list.push(fn);
                this.funcs.set(tmpl.fq, list);
            }
            return fn;
        }
        fillDefaultArgs(tmpl, args, scope, t) {
            const full = args.slice();
            const env = this.buildEnvPartial(tmpl.tparams, full);
            for (let i = full.length; i < tmpl.tparams.length; i++) {
                const tp = tmpl.tparams[i];
                if (tp.isPack)
                    break;
                if (!tp.def)
                    this.fail(`too few template arguments for '${tmpl.fq}'`, t || undefined);
                if (tp.kind === "type" || tp.kind === "template") {
                    const tn = CTJ.substTypeNode(tp.def, env);
                    const ty = this.resolveTypeNode(tn, scope);
                    full.push(ty);
                    env.types.set(tp.name, ty);
                }
                else {
                    const ex = CTJ.substExpr(tp.def, env);
                    const v = CTJ.constEval(this, ex, scope);
                    if (typeof v !== "number")
                        this.fail(`non-constant template argument for '${tp.name}'`, t || undefined);
                    full.push(CppType.basic("__value" + Math.trunc(v)));
                    env.values.set(tp.name, Math.trunc(v));
                }
            }
            return full;
        }
        buildEnv(tparams, args) {
            const env = { types: new Map(), packs: new Map(), values: new Map(), valuePacks: new Map(), packNames: new Map(), packOf: new Map() };
            let ai = 0;
            for (const tp of tparams) {
                if (tp.isPack) {
                    if (tp.kind === "nontype")
                        env.valuePacks.set(tp.name, args.slice(ai).map(a => parseInt(a.name.replace("__value", "") || "0", 10)));
                    else
                        env.packs.set(tp.name, args.slice(ai));
                    ai = args.length;
                }
                else {
                    const a = args[ai++];
                    if (!a)
                        continue;
                    if (tp.kind === "nontype")
                        env.values.set(tp.name, parseInt(a.name.replace("__value", "") || "0", 10));
                    else
                        env.types.set(tp.name, a);
                }
            }
            return env;
        }
        buildEnvPartial(tparams, args) {
            return this.buildEnv(tparams, args);
        }
        synthMembers(cls) {
            if (cls.synthDone || !cls.complete)
                return;
            cls.synthDone = true;
            const hasCtor = cls.methods.has("#ctor");
            const hasCopyCtor = hasCtor && cls.methods.get("#ctor").some(f => this.isCopyCtor(f));
            const hasCopyAssign = cls.methods.has("operator=") &&
                cls.methods.get("operator=").some(f => this.isCopyAssign(f, cls));
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
                const d = {
                    kind: "func", name: [CTJ.qseg(cls.short)], ret: null, params: [],
                    body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
                    flags: [], op: "~", ctorInit: [], isCtor: false, isDtor: true,
                    isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
                };
                this.addMethod(cls, "#dtor", d, cls.scope);
            }
        }
        isCopyCtor(f) {
            const ps = this.funcParams(f);
            return ps.length === 1 && !ps[0].variadic && ps[0].type.ref !== "" &&
                ps[0].type.ptr === 0 && this.stripAll(ps[0].type) === f.cls;
        }
        isCopyAssign(f, cls) {
            const ps = this.funcParams(f);
            return ps.length === 1 && !ps[0].variadic && this.stripAll(ps[0].type) === cls.fq;
        }
        // The class name a type denotes, template arguments included, in the same
        // spelling instantiateClass uses for its key.
        stripAll(t) {
            return t.segs.map(g => g.a.length ? g.n + "<" + g.a.map(a => a.key()).join(",") + ">" : g.n).join("::");
        }
        synthCtor(cls, copy, o) {
            void o;
            const inits = [];
            for (const b of cls.bases) {
                inits.push({
                    name: b.fq.split("::").map(n => CTJ.qseg(n)), file: "", line: 0,
                    args: copy ? [{ kind: "id", parts: [CTJ.qseg("o")], global: false, file: "", line: 0 }] : [],
                });
            }
            if (copy) {
                for (const [name] of cls.fields) {
                    if (cls.fieldStatic.has(name))
                        continue;
                    inits.push({
                        name: [CTJ.qseg(name)], file: "", line: 0,
                        args: [{
                                kind: "member", obj: { kind: "id", parts: [CTJ.qseg("o")], global: false, file: "", line: 0 },
                                field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
                            }],
                    });
                }
            }
            const otype = CTJ.typeNode(cls.fq.split("::").map(n => CTJ.qseg(n)));
            otype.ref = "&";
            return {
                kind: "func", name: [CTJ.qseg(cls.short)], ret: null,
                params: copy ? [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }] : [],
                body: [{ kind: "compound", stmts: [], file: "", line: 0 }],
                flags: [], op: "", ctorInit: inits, isCtor: true, isDtor: false,
                isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
            };
        }
        synthAssign(cls) {
            const stmts = [];
            for (const [name] of cls.fields) {
                if (cls.fieldStatic.has(name))
                    continue;
                const m = {
                    kind: "member", obj: { kind: "this", file: "", line: 0 },
                    field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
                };
                const om = {
                    kind: "member", obj: { kind: "id", parts: [CTJ.qseg("o")], global: false, file: "", line: 0 },
                    field: name, arrow: false, targs: [], qual: [], file: "", line: 0,
                };
                stmts.push({ kind: "expr", expr: { kind: "assign", op: "=", l: m, r: om, file: "", line: 0 }, file: "", line: 0 });
            }
            stmts.push({
                kind: "return",
                expr: { kind: "unary", op: "*", arg: { kind: "this", file: "", line: 0 }, postfix: false, file: "", line: 0 },
                file: "", line: 0,
            });
            const otype = CTJ.typeNode(cls.fq.split("::").map(n => CTJ.qseg(n)));
            otype.ref = "&";
            const ret = CTJ.typeNode(cls.fq.split("::").map(n => CTJ.qseg(n)));
            ret.ref = "&";
            return {
                kind: "func", name: [CTJ.qseg("operator")], ret, op: "=",
                params: [{ name: "o", type: otype, def: null, variadic: false, isPack: false, file: "", line: 0 }],
                body: [{ kind: "compound", stmts, file: "", line: 0 }],
                flags: [], ctorInit: [], isCtor: false, isDtor: false,
                isConv: false, isDefault: false, isDelete: false, trailing: null, file: "", line: 0,
            };
        }
    }
    CTJ.Cx = Cx;
    function isBoxedVar(t) {
        return t.isBox() && !t.isFunc;
    }
    CTJ.isBoxedVar = isBoxedVar;
    // Pointers and references keep a token of their own: folding every
    // punctuation into "_" made "T<int&>" and "T<int>" come out as one identifier,
    // which the target language rejects as a duplicate declaration.
    function mangleType(fq) {
        return fq
            .replace(/&&/g, "_RR_")
            .replace(/&/g, "_R_")
            .replace(/\*/g, "_P_")
            .replace(/[^A-Za-z0-9]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_|_$/g, "");
    }
    CTJ.mangleType = mangleType;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function blankSubstEnv() {
        return { types: new Map(), packs: new Map(), values: new Map(), valuePacks: new Map(), packNames: new Map(), packOf: new Map() };
    }
    CTJ.blankSubstEnv = blankSubstEnv;
    function copySubstEnv(e) {
        return {
            types: new Map(e.types), packs: new Map(e.packs), values: new Map(e.values),
            valuePacks: new Map(e.valuePacks), packNames: new Map(e.packNames), packOf: new Map(e.packOf),
        };
    }
    CTJ.copySubstEnv = copySubstEnv;
    function litNum(n, a) {
        return { kind: "lit", lkind: "int", value: String(n), file: a.file, line: a.line };
    }
    function typeToNode(t) {
        if (t.isFunc && t.ret) {
            const tn = typeToNode(t.ret);
            tn.ptr = t.ptr;
            tn.ref = t.ref;
            tn.func = { params: t.funcParams.map(typeToNode), variadic: t.funcVariadic };
            return tn;
        }
        const tn = CTJ.typeNode(t.segs.map(g => CTJ.qseg(g.n, g.a.map(typeToNode))));
        tn.ptr = t.ptr;
        tn.ref = t.ref;
        tn.cnst = t.cnst;
        tn.dims = t.dims.map(d => litNum(d, { file: "", line: 0 }));
        return tn;
    }
    CTJ.typeToNode = typeToNode;
    function typeToSegs(t) {
        return t.segs.map(g => CTJ.qseg(g.n, g.a.map(typeToNode)));
    }
    CTJ.typeToSegs = typeToSegs;
    function substTypeNode(tn, env) {
        const out = CTJ.typeNode([], { file: tn.file, line: tn.line });
        out.global = tn.global;
        out.ptr = tn.ptr;
        out.ref = tn.ref;
        out.cnst = tn.cnst;
        out.packExpand = tn.packExpand;
        out.decltypeOf = tn.decltypeOf ? substExpr(tn.decltypeOf, env) : null;
        out.valueArg = tn.valueArg ? substExpr(tn.valueArg, env) : null;
        out.dims = tn.dims.map(d => substExpr(d, env));
        out.func = tn.func ? { params: tn.func.params.map(p => substTypeNode(p, env)), variadic: tn.func.variadic } : null;
        if (!tn.parts.length)
            return out;
        const first = tn.parts[0].n;
        const rep = env.types.get(first);
        if (rep && tn.parts[0].a.length === 0) {
            const segs = typeToSegs(rep);
            for (const s of segs)
                out.parts.push(s);
            for (let i = 1; i < tn.parts.length; i++)
                out.parts.push(substQSeg(tn.parts[i], env));
            out.ptr += rep.ptr;
            if (!out.ref)
                out.ref = rep.ref;
            if (rep.isFunc && !out.func && rep.ret) {
                out.func = { params: rep.funcParams.map(typeToNode), variadic: rep.funcVariadic };
            }
            for (const d of rep.dims)
                out.dims.unshift(litNum(d, out));
        }
        else {
            out.parts = tn.parts.map(s => substQSeg(s, env));
        }
        return out;
    }
    CTJ.substTypeNode = substTypeNode;
    function substQSeg(s, env) {
        return CTJ.qseg(s.n, substTArgs(s.a, env));
    }
    // A qualified name whose single part is a template parameter is replaced by the
    // whole name of the substituted type, which may have several parts.
    function substQName(parts, env) {
        if (parts.length === 1 && !parts[0].a.length) {
            const rep = env.types.get(parts[0].n);
            if (rep)
                return typeToSegs(rep);
        }
        return parts.map(s => substQSeg(s, env));
    }
    CTJ.substQName = substQName;
    function substTArgs(args, env) {
        const out = [];
        for (const a of args) {
            if (a.packExpand && a.parts.length === 1 && !a.parts[0].a.length) {
                const nm = a.parts[0].n;
                if (env.packs.has(nm)) {
                    for (const t of env.packs.get(nm))
                        out.push(typeToNode(t));
                    continue;
                }
                if (env.valuePacks.has(nm)) {
                    for (const v of env.valuePacks.get(nm)) {
                        const tn = CTJ.typeNode([]);
                        tn.valueArg = litNum(v, a);
                        out.push(tn);
                    }
                    continue;
                }
            }
            out.push(substTypeNode(a, env));
        }
        return out;
    }
    CTJ.substTArgs = substTArgs;
    function peelPack(e) {
        const wraps = [];
        let cur = e;
        if (cur.kind !== "unary" || cur.op !== "...")
            return null;
        cur = cur.arg;
        for (;;) {
            if (cur.kind === "id" && cur.parts.length === 1 && !cur.global) {
                return { core: cur.parts[0].n, wraps };
            }
            if (cur.kind === "unary" && (cur.op === "&" || cur.op === "*" || cur.op === "+" || cur.op === "-")) {
                wraps.push(cur);
                cur = cur.arg;
                continue;
            }
            if (cur.kind === "cast") {
                wraps.push(cur);
                cur = cur.arg;
                continue;
            }
            return null;
        }
    }
    function rebuildPack(core, wraps) {
        let cur = core;
        for (let i = wraps.length - 1; i >= 0; i--) {
            const w = wraps[i];
            if (w.kind === "unary") {
                cur = { kind: "unary", op: w.op, arg: cur, postfix: w.postfix, file: w.file, line: w.line };
            }
            else if (w.kind === "cast") {
                cur = { kind: "cast", ckind: w.ckind, type: w.type, fn: w.fn, arg: cur, file: w.file, line: w.line };
            }
        }
        return cur;
    }
    // The pack an expression mentions, if any: an expansion may hide it inside a
    // call, as in "std::forward<_Args>(__args)...".
    function packInExpr(e, env) {
        let found = null;
        const walk = (x) => {
            if (found || !x || typeof x !== "object")
                return;
            if (Array.isArray(x)) {
                x.forEach(walk);
                return;
            }
            const n = x;
            if (n.kind === "id") {
                const parts = n.parts;
                if (parts.length === 1 && !n.global && (env.packNames.has(parts[0].n) || env.valuePacks.has(parts[0].n))) {
                    found = parts[0].n;
                    return;
                }
            }
            for (const k of Object.keys(n))
                walk(n[k]);
        };
        walk(e);
        return found;
    }
    function replacePackId(e, pack, repl) {
        const walk = (x) => {
            if (!x || typeof x !== "object")
                return x;
            if (Array.isArray(x))
                return x.map(walk);
            const n = x;
            if (n.kind === "id") {
                const parts = n.parts;
                if (parts.length === 1 && !n.global && parts[0].n === pack)
                    return repl;
            }
            const out = {};
            for (const k of Object.keys(n))
                out[k] = walk(n[k]);
            return out;
        };
        return walk(e);
    }
    // One argument of a call: a pack expansion becomes one argument per element.
    function expandArg(a, env) {
        const pk = peelPack(a);
        if (pk && env.packNames.has(pk.core)) {
            return env.packNames.get(pk.core).map(nm => {
                const id = { kind: "id", parts: [CTJ.qseg(nm)], global: false, file: a.file, line: a.line };
                return rebuildPack(id, pk.wraps);
            });
        }
        if (pk && env.valuePacks.has(pk.core)) {
            return env.valuePacks.get(pk.core).map(v => rebuildPack(litNum(v, a), pk.wraps));
        }
        if (a.kind === "unary" && a.op === "...") {
            const nm = packInExpr(a.arg, env);
            if (nm && env.packNames.has(nm)) {
                const names = env.packNames.get(nm);
                const tp = env.packOf.get(nm) || "";
                const types = env.packs.get(tp) || [];
                // Inside the i-th copy the pack name also stands for the i-th type, which
                // is what "std::forward<_Args>(__args)..." spells.
                return names.map((n, i) => {
                    const e2 = copySubstEnv(env);
                    if (tp && types[i])
                        e2.types.set(tp, types[i]);
                    const id = { kind: "id", parts: [CTJ.qseg(n)], global: false, file: a.file, line: a.line };
                    return substExpr(replacePackId(a.arg, nm, id), e2);
                });
            }
            if (nm && env.valuePacks.has(nm)) {
                return env.valuePacks.get(nm).map(v => {
                    const e2 = copySubstEnv(env);
                    e2.values.set(nm, v);
                    return substExpr(replacePackId(a.arg, nm, litNum(v, a)), e2);
                });
            }
        }
        return [substExpr(a, env)];
    }
    function substCallArgs(args, env) {
        const out = [];
        for (const a of args)
            out.push(...expandArg(a, env));
        return out;
    }
    function substExpr(ex, env) {
        const f = ex.file;
        const l = ex.line;
        const a = { file: f, line: l };
        switch (ex.kind) {
            case "id": {
                if (ex.parts.length && env.values.has(ex.parts[0].n) && ex.parts.length === 1) {
                    return litNum(env.values.get(ex.parts[0].n), a);
                }
                if (ex.parts.length && env.types.has(ex.parts[0].n) && !ex.parts[0].a.length) {
                    const rep = env.types.get(ex.parts[0].n);
                    const parts = typeToSegs(rep);
                    for (let i = 1; i < ex.parts.length; i++)
                        parts.push(substQSeg(ex.parts[i], env));
                    return { kind: "id", parts, global: ex.global, file: f, line: l };
                }
                return { kind: "id", parts: ex.parts.map(s => substQSeg(s, env)), global: ex.global, file: f, line: l };
            }
            case "lit": return { kind: "lit", lkind: ex.lkind, value: ex.value, file: f, line: l };
            case "this": return { kind: "this", file: f, line: l };
            case "call":
                return { kind: "call", fn: substExpr(ex.fn, env), args: substCallArgs(ex.args, env), file: f, line: l };
            case "index":
                return { kind: "index", arr: substExpr(ex.arr, env), idx: substExpr(ex.idx, env), file: f, line: l };
            case "member":
                return {
                    kind: "member", obj: substExpr(ex.obj, env), field: ex.field,
                    arrow: ex.arrow, targs: substTArgs(ex.targs, env), qual: ex.qual, file: f, line: l,
                };
            case "unary":
                return { kind: "unary", op: ex.op, arg: substExpr(ex.arg, env), postfix: ex.postfix, file: f, line: l };
            case "binary":
                return { kind: "binary", op: ex.op, l: substExpr(ex.l, env), r: substExpr(ex.r, env), file: f, line: l };
            case "assign":
                return { kind: "assign", op: ex.op, l: substExpr(ex.l, env), r: substExpr(ex.r, env), file: f, line: l };
            case "cond":
                return {
                    kind: "cond", c: substExpr(ex.c, env), a: substExpr(ex.a, env),
                    b: substExpr(ex.b, env), file: f, line: l,
                };
            case "new":
                return {
                    kind: "new", placement: ex.placement.map(x => substExpr(x, env)),
                    type: substTypeNode(ex.type, env), args: substCallArgs(ex.args, env), isArray: ex.isArray, file: f, line: l,
                };
            case "delete":
                return { kind: "delete", arg: substExpr(ex.arg, env), isArray: ex.isArray, file: f, line: l };
            case "cast":
                return {
                    kind: "cast", ckind: ex.ckind, type: ex.type ? substTypeNode(ex.type, env) : null,
                    fn: ex.fn ? substExpr(ex.fn, env) : null, arg: substExpr(ex.arg, env), file: f, line: l,
                };
            case "sizeof": {
                if (ex.packName) {
                    const n = env.packs.has(ex.packName) ? env.packs.get(ex.packName).length
                        : env.valuePacks.has(ex.packName) ? env.valuePacks.get(ex.packName).length : 0;
                    return litNum(n, a);
                }
                return {
                    kind: "sizeof", isType: ex.isType, type: ex.type ? substTypeNode(ex.type, env) : null,
                    expr: ex.expr ? substExpr(ex.expr, env) : null, packName: "", isAlignof: ex.isAlignof, file: f, line: l,
                };
            }
            case "typeid":
                return {
                    kind: "typeid", isType: ex.isType, type: ex.type ? substTypeNode(ex.type, env) : null,
                    expr: ex.expr ? substExpr(ex.expr, env) : null, file: f, line: l,
                };
            case "lambda": {
                const e2 = copySubstEnv(env);
                const params = substParams(ex.params, e2);
                return {
                    kind: "lambda", captures: ex.captures.map(c => ({ mode: c.mode, name: c.name, file: c.file, line: c.line })),
                    defCapture: ex.defCapture, params, ret: ex.ret ? substTypeNode(ex.ret, e2) : null,
                    body: ex.body.map(s => substStmt(s, e2)), mutable: ex.mutable, file: f, line: l,
                };
            }
            case "initlist":
                return { kind: "initlist", items: substCallArgs(ex.items, env), file: f, line: l };
            case "stmtexpr":
                return { kind: "stmtexpr", stmts: ex.stmts.map(s => substStmt(s, env)), file: f, line: l };
            case "noexcept":
                return { kind: "noexcept", expr: ex.expr ? substExpr(ex.expr, env) : null, file: f, line: l };
        }
    }
    CTJ.substExpr = substExpr;
    function substParams(params, env) {
        const out = [];
        for (const p of params) {
            if (p.isPack && p.type.parts.length === 1 && !p.type.parts[0].a.length && env.packs.has(p.type.parts[0].n)) {
                const items = env.packs.get(p.type.parts[0].n);
                const names = [];
                items.forEach((t, i) => {
                    const nm = (p.name || "pack") + "_" + i;
                    names.push(nm);
                    const tn = typeToNode(t);
                    tn.ptr += p.type.ptr;
                    if (p.type.ref)
                        tn.ref = p.type.ref;
                    out.push({ name: nm, type: tn, def: null, variadic: false, isPack: false, file: p.file, line: p.line });
                });
                if (p.name) {
                    env.packNames.set(p.name, names);
                    env.packOf.set(p.name, p.type.parts[0].n);
                }
                continue;
            }
            // A pack that this environment does not carry belongs to an inner template:
            // substituting the class of a member template must not consume its own
            // parameters, or the pack could never be expanded at the call.
            out.push({
                name: p.name, type: substTypeNode(p.type, env),
                def: p.def ? substExpr(p.def, env) : null, variadic: p.variadic, isPack: p.isPack, file: p.file, line: p.line,
            });
        }
        return out;
    }
    CTJ.substParams = substParams;
    function substStmt(s, env) {
        const f = s.file;
        const l = s.line;
        switch (s.kind) {
            case "compound": return { kind: "compound", stmts: s.stmts.map(x => substStmt(x, env)), file: f, line: l };
            case "expr": return { kind: "expr", expr: substExpr(s.expr, env), file: f, line: l };
            case "decl": return { kind: "decl", decl: substDecl(s.decl, env), file: f, line: l };
            case "if":
                return {
                    kind: "if", cond: substCond(s.cond, env), then: substStmt(s.then, env),
                    els: s.els ? substStmt(s.els, env) : null, file: f, line: l,
                };
            case "switch":
                return { kind: "switch", cond: substCond(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
            case "case":
                return { kind: "case", value: s.value ? substExpr(s.value, env) : null, stmt: substStmt(s.stmt, env), file: f, line: l };
            case "while":
                return { kind: "while", cond: substCond(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
            case "do": return { kind: "do", cond: substExpr(s.cond, env), body: substStmt(s.body, env), file: f, line: l };
            case "for":
                return {
                    kind: "for", init: s.init ? substStmt(s.init, env) : null,
                    cond: s.cond ? substExpr(s.cond, env) : null,
                    step: s.step ? substExpr(s.step, env) : null, body: substStmt(s.body, env), file: f, line: l,
                };
            case "rangefor":
                return {
                    kind: "rangefor", vdecl: substDecl(s.vdecl, env),
                    range: substExpr(s.range, env), body: substStmt(s.body, env), file: f, line: l,
                };
            case "break": return { kind: "break", file: f, line: l };
            case "continue": return { kind: "continue", file: f, line: l };
            case "goto": return { kind: "goto", label: s.label, file: f, line: l };
            case "label": return { kind: "label", label: s.label, stmt: substStmt(s.stmt, env), file: f, line: l };
            case "return": return { kind: "return", expr: s.expr ? substExpr(s.expr, env) : null, file: f, line: l };
            case "try":
                return {
                    kind: "try", body: substStmt(s.body, env),
                    handlers: s.handlers.map(h => ({
                        vdecl: h.vdecl ? substDecl(h.vdecl, env) : null,
                        ellipsis: h.ellipsis, body: substStmt(h.body, env), file: h.file, line: h.line,
                    })), file: f, line: l,
                };
            case "throw": return { kind: "throw", expr: s.expr ? substExpr(s.expr, env) : null, file: f, line: l };
            case "null": return { kind: "null", file: f, line: l };
        }
    }
    CTJ.substStmt = substStmt;
    function substCond(c, env) {
        if (c.kind === "var")
            return substDecl(c, env);
        return substExpr(c, env);
    }
    function substCtorInit(c, env) {
        // ": _Alloc(__a)" names a base class, and that base can be a template
        // parameter, so the name is substituted like any other qualified name.
        return { name: substQName(c.name, env), args: substCallArgs(c.args, env), file: c.file, line: c.line };
    }
    function substDecl(d, env) {
        const f = d.file;
        const l = d.line;
        switch (d.kind) {
            case "var":
                return {
                    kind: "var", name: d.name.map(s => substQSeg(s, env)), type: substTypeNode(d.type, env),
                    init: d.init ? substExpr(d.init, env) : null,
                    directInit: d.directInit ? substCallArgs(d.directInit, env) : null,
                    flags: d.flags.slice(), bitfield: d.bitfield ? substExpr(d.bitfield, env) : null,
                    isParam: d.isParam, file: f, line: l,
                };
            case "func": {
                const e2 = copySubstEnv(env);
                return {
                    kind: "func", name: d.name.map(s => substQSeg(s, env)), ret: d.ret ? substTypeNode(d.ret, e2) : null,
                    params: substParams(d.params, e2),
                    body: d.body ? d.body.map(s => substStmt(s, e2)) : null,
                    flags: d.flags.slice(), op: d.op, ctorInit: d.ctorInit.map(c => substCtorInit(c, e2)),
                    isCtor: d.isCtor, isDtor: d.isDtor, isConv: d.isConv,
                    isDefault: d.isDefault, isDelete: d.isDelete,
                    trailing: d.trailing ? substTypeNode(d.trailing, e2) : null, file: f, line: l,
                };
            }
            case "class":
                return {
                    kind: "class", name: d.name, cls: d.cls,
                    bases: d.bases.map(b => ({ name: substQName(b.name, env), access: b.access, isVirtual: b.isVirtual, file: b.file, line: b.line })),
                    members: d.members.map(m => substDecl(m, env)),
                    isDeclOnly: d.isDeclOnly, specArgs: substTArgs(d.specArgs, env),
                    isPartialSpec: d.isPartialSpec, file: f, line: l,
                };
            case "enum":
                return {
                    kind: "enum", name: d.name, scoped: d.scoped,
                    base: d.base ? substTypeNode(d.base, env) : null,
                    items: d.items.map(it => ({ name: it.name, value: it.value ? substExpr(it.value, env) : null, file: it.file, line: it.line })),
                    isDeclOnly: d.isDeclOnly, file: f, line: l,
                };
            case "ns":
                return {
                    kind: "ns", name: d.name, aliasOf: d.aliasOf.map(s => substQSeg(s, env)),
                    decls: d.decls ? d.decls.map(x => substDecl(x, env)) : null, isInline: d.isInline, file: f, line: l,
                };
            case "using":
                return { kind: "using", name: d.name.map(s => substQSeg(s, env)), isNs: d.isNs, file: f, line: l };
            case "typedef":
                return { kind: "typedef", name: d.name, type: substTypeNode(d.type, env), file: f, line: l };
            case "linkage":
                return { kind: "linkage", lang: d.lang, decls: d.decls.map(x => substDecl(x, env)), file: f, line: l };
            case "static_assert":
                return { kind: "static_assert", cond: substExpr(d.cond, env), msg: d.msg, file: f, line: l };
            case "access": return { kind: "access", access: d.access, file: f, line: l };
            case "friend":
                return { kind: "friend", decl: d.decl ? substDecl(d.decl, env) : null, file: f, line: l };
            case "empty": return { kind: "empty", file: f, line: l };
            case "template": {
                const e2 = copySubstEnv(env);
                for (const tp of d.tparams) {
                    e2.types.delete(tp.name);
                    e2.packs.delete(tp.name);
                    e2.values.delete(tp.name);
                    e2.valuePacks.delete(tp.name);
                    e2.packNames.delete(tp.name);
                }
                return {
                    kind: "template", tparams: d.tparams,
                    decl: d.decl ? substDecl(d.decl, e2) : null,
                    isSpec: d.isSpec, specArgs: substTArgs(d.specArgs, e2), isExplicit: d.isExplicit, file: f, line: l,
                };
            }
        }
    }
    CTJ.substDecl = substDecl;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function analyzeAll(cx, tu) {
        cx.collect(tu.decls, CTJ.rootScope());
        cx.flushOutOfLine();
        for (const e of cx.explicitInst)
            doExplicitInst(cx, e.decl, e.scope);
        for (const a of cx.asserts) {
            const v = CTJ.constEval(cx, a.cond, a.scope);
            if (v === 0)
                cx.fail(`static_assert failed ${a.msg}`, a.cond);
            if (typeof v !== "number" && typeof v !== "string")
                cx.warn("static_assert cannot be evaluated, ignored", a.cond);
        }
        for (const v of cx.vars.values())
            analyzeGlobalVar(cx, v);
        if (cx.main)
            cx.markFunc(cx.main);
        else
            cx.warn("no main function found");
        while (cx.worklist.length) {
            const fn = cx.worklist.shift();
            if (fn.analyzed)
                continue;
            analyzeFunc(cx, fn);
        }
        finalizeFields(cx);
        finalizeMangling(cx);
    }
    CTJ.analyzeAll = analyzeAll;
    function finalizeFields(cx) {
        for (const cls of cx.classes.values()) {
            if (!cls.complete || !cls.referenced)
                continue;
            for (const [name, fd] of cls.fields) {
                const ft = cx.fieldType(cls, name);
                const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? cx.stripAll(ft) : "";
                if (fd.init || fd.directInit) {
                    const v = {
                        fq: cls.fq + "::" + name, short: name, mangled: name,
                        decl: fd, scope: cx.memberScope(cls), typeCache: ft,
                        storage: CTJ.isBoxedVar(ft) ? "box" : "plain",
                        isGlobal: false, isStatic: cls.fieldStatic.has(name),
                        isParam: false, isField: true, lifted: false, referenced: true,
                    };
                    const sub = cx.memberScope(cls);
                    annotateVarInit(cx, v, sub);
                }
                else if (fcls && cx.classes.has(fcls)) {
                    const r = CTJ.tryResolveCtor(cx, fcls, [], cx.memberScope(cls));
                    if (r)
                        cx.getAnn(fd).call = r.fn;
                }
            }
            const assigns = cls.methods.get("operator=") || [];
            for (const f of assigns) {
                if (!f.referenced)
                    continue;
                for (const b of f.baseAssigns) {
                    const bc = cx.classes.get(b);
                    if (!bc)
                        continue;
                    for (const bf of bc.methods.get("operator=") || []) {
                        const ps = cx.funcParams(bf);
                        if (ps.length === 1 && cx.stripAll(ps[0].type) === b)
                            cx.markFunc(bf);
                    }
                }
            }
        }
    }
    function doExplicitInst(cx, d, scope) {
        if (!d)
            return;
        if (d.kind === "class") {
            const args = d.specArgs.map(a => cx.resolveTypeNode(a, scope));
            const t = cx.tmpls.get(cx.memberFq(scope, d.name));
            if (t && t.kind === "class")
                cx.instantiateClass(t.fq, args, scope, d);
            return;
        }
        if (d.kind === "func") {
            const nm = d.name.map(s => s.n);
            const lastSeg = CTJ.last(d.name);
            const args = lastSeg.a.map(a => cx.resolveTypeNode(a, scope));
            const fq = nm.length > 1 ? nm.slice(0, -1).join("::") + "::" + CTJ.last(nm) : cx.memberFq(scope, CTJ.last(nm));
            const t = cx.tmpls.get(fq);
            if (t && t.kind === "func") {
                const full = cx.fillDefaultArgs(t, args, scope, d);
                cx.markFunc(cx.instantiateFunc(t, full, new Map()));
            }
            return;
        }
    }
    function analyzeGlobalVar(cx, v) {
        if (v.typeCache)
            return;
        let t = cx.resolveTypeNode(v.decl.type, v.scope);
        if (t.name === "auto") {
            const init = v.decl.init || (v.decl.directInit && v.decl.directInit[0]);
            if (!init)
                cx.fail(`cannot deduce 'auto' for '${v.short}'`, v.decl);
            t = deduceAuto(cx, t, CTJ.typeOf(cx, init, v.scope), v.decl);
        }
        if (t.name.startsWith("__value"))
            cx.fail(`'${v.short}' declared with non-type`, v.decl);
        v.typeCache = t;
        v.storage = CTJ.isBoxedVar(t) ? "box" : "plain";
        cx.getAnn(v.decl).var = v;
        cx.getAnn(v.decl).t = t;
        annotateVarInit(cx, v, v.scope);
    }
    function deduceAuto(cx, declT, initT, t) {
        void cx;
        const core = new CTJ.CppType(initT.name);
        core.segs = initT.segs;
        core.ptr = initT.ptr;
        core.dims = initT.dims.slice();
        core.isFunc = initT.isFunc;
        core.ret = initT.ret;
        core.funcParams = initT.funcParams;
        core.funcVariadic = initT.funcVariadic;
        const out = new CTJ.CppType(core.name);
        out.segs = core.segs;
        out.ptr = core.ptr + declT.ptr;
        out.ref = declT.ref || (declT.ptr === 0 && declT.ref === "" ? "" : core.ref);
        if (declT.ref)
            out.ref = declT.ref;
        out.dims = declT.dims.length ? declT.dims.slice() : core.dims;
        out.isFunc = core.isFunc;
        out.ret = core.ret;
        out.funcParams = core.funcParams;
        out.funcVariadic = core.funcVariadic;
        if (!declT.ptr && !declT.ref)
            out.ref = "";
        void t;
        return out;
    }
    function analyzeFunc(cx, fn) {
        fn.analyzed = true;
        if (!fn.decl.body || fn.isDelete)
            return;
        const scope = cx.snapScope(fn.scope);
        scope.fn = fn;
        scope.locals.push(new Map());
        const params = cx.funcParams(fn);
        params.forEach((p, i) => {
            const node = fn.decl.params[i];
            const name = p.name || "$p" + i;
            const vd = {
                kind: "var", name: [CTJ.qseg(name)], type: node ? node.type : CTJ.typeNode([]),
                init: null, directInit: null, flags: [], bitfield: null, isParam: true,
                file: fn.decl.file, line: fn.decl.line,
            };
            const v = {
                fq: fn.fq + "::" + name, short: name, mangled: safeName(name),
                decl: vd, scope, typeCache: p.type, storage: CTJ.isBoxedVar(p.type) ? "box" : "plain",
                isGlobal: false, isStatic: false, isParam: true, isField: false, lifted: false, referenced: true,
            };
            if (node)
                cx.getAnn(node).var = v;
            scope.locals[0].set(name, v);
            if (p.def)
                CTJ.typeOf(cx, p.def, scope);
        });
        for (const c of fn.decl.ctorInit)
            annotateCtorInit(cx, fn, c, scope);
        for (const b of fn.decl.body)
            annotateStmt(cx, b, scope);
        scope.locals.pop();
        if (fn.retCache && fn.retCache.name === "auto") {
            fn.retCache = scope.returns.length ? scope.returns[0] : CTJ.CppType.basic("void");
        }
    }
    function annotateCtorInit(cx, fn, c, scope) {
        const cls = cx.classes.get(fn.cls);
        if (!cls)
            cx.fail("constructor initializer outside class", c);
        const name = c.name.map(s => s.n).join("::");
        const base = cx.ctorBase(cls, c.name);
        const argTs = c.args.map(e => ({ t: CTJ.typeOf(cx, e, scope), e }));
        if (base) {
            const r = CTJ.resolveCtor(cx, base, argTs, scope, c);
            cx.getAnn(c).call = r.fn;
            cx.getAnn(c).convs = r.convs;
            return;
        }
        const short = CTJ.last(c.name).n;
        if (cls.fields.has(short)) {
            const ft = cx.fieldType(cls, short);
            annotateFieldInit(cx, cls, short, ft, c.args, argTs, c, scope);
            return;
        }
        cx.fail(`'${name}' is neither base nor member of '${fn.cls}'`, c);
    }
    function annotateFieldInit(cx, cls, short, ft, args, argTs, t, scope) {
        void cls;
        void short;
        if (cx.classes.has(cx.stripAll(ft)) && !ft.isBox() && !ft.dims.length) {
            const r = CTJ.resolveCtor(cx, cx.stripAll(ft), argTs, scope, t);
            cx.getAnn(t).call = r.fn;
            cx.getAnn(t).convs = r.convs;
            return;
        }
        if (ft.isBox() && args.length === 1) {
            boxArg(cx, ft, argTs[0], scope, t);
            return;
        }
        if (args.length > 1)
            cx.fail("too many initializers", t);
    }
    function annotateStmt(cx, s, scope) {
        switch (s.kind) {
            case "compound": {
                if (s.sameScope) {
                    for (const x of s.stmts)
                        annotateStmt(cx, x, scope);
                    return;
                }
                scope.locals.push(new Map());
                try {
                    for (const x of s.stmts)
                        annotateStmt(cx, x, scope);
                }
                finally {
                    scope.locals.pop();
                }
                return;
            }
            case "expr": {
                const t = CTJ.typeOf(cx, s.expr, scope);
                if (t.name === "__type")
                    cx.fail("expected expression", s.expr);
                return;
            }
            case "decl": {
                annotateDecl(cx, s.decl, scope);
                return;
            }
            case "if":
            case "switch": {
                scope.locals.push(new Map());
                try {
                    annotateCond(cx, s.cond, scope);
                    if (s.kind === "if") {
                        annotateStmt(cx, s.then, scope);
                        if (s.els)
                            annotateStmt(cx, s.els, scope);
                    }
                    else
                        annotateStmt(cx, s.body, scope);
                }
                finally {
                    scope.locals.pop();
                }
                return;
            }
            case "case": {
                if (s.value) {
                    const v = CTJ.constEval(cx, s.value, scope);
                    if (typeof v !== "number")
                        cx.fail("case label is not constant", s.value);
                }
                annotateStmt(cx, s.stmt, scope);
                return;
            }
            case "while": {
                scope.locals.push(new Map());
                try {
                    annotateCond(cx, s.cond, scope);
                    annotateStmt(cx, s.body, scope);
                }
                finally {
                    scope.locals.pop();
                }
                return;
            }
            case "do": {
                CTJ.typeOf(cx, s.cond, scope);
                annotateStmt(cx, s.body, scope);
                return;
            }
            case "for": {
                scope.locals.push(new Map());
                try {
                    if (s.init)
                        annotateStmt(cx, s.init, scope);
                    if (s.cond)
                        CTJ.typeOf(cx, s.cond, scope);
                    if (s.step)
                        CTJ.typeOf(cx, s.step, scope);
                    annotateStmt(cx, s.body, scope);
                }
                finally {
                    scope.locals.pop();
                }
                return;
            }
            case "rangefor": {
                scope.locals.push(new Map());
                try {
                    const rt = CTJ.typeOf(cx, s.range, scope);
                    annotateRangeVar(cx, s, rt, scope);
                    annotateStmt(cx, s.body, scope);
                }
                finally {
                    scope.locals.pop();
                }
                return;
            }
            case "break":
            case "continue":
            case "null":
                return;
            case "goto":
                cx.fail(`'goto' is not supported`, s);
                return;
            case "label":
                annotateStmt(cx, s.stmt, scope);
                return;
            case "return": {
                if (!s.expr) {
                    scope.returns.push(CTJ.CppType.basic("void"));
                    return;
                }
                const t = CTJ.typeOf(cx, s.expr, scope);
                scope.returns.push(t);
                const fn = scope.fn;
                if (fn) {
                    const ret = cx.funcRet(fn);
                    if (ret.name === "auto" || ret.name === "__any")
                        return;
                    const retFq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? cx.stripAll(ret) : "";
                    if (retFq && cx.classes.has(retFq) && t.name !== "__initlist" && cx.stripAll(t) !== retFq) {
                        const r = CTJ.resolveCtor(cx, retFq, [{ t, e: s.expr }], scope, s, true);
                        cx.getAnn(s).call = r.fn;
                        cx.getAnn(s).convs = r.convs;
                        return;
                    }
                    if (retFq && cx.classes.has(retFq) && t.name === "__initlist") {
                        const items = s.expr.items.map(x => ({ t: CTJ.typeOf(cx, x, scope), e: x }));
                        const r = CTJ.resolveInitCtor(cx, retFq, items.length ? [{ t, e: s.expr }] : [], scope, s);
                        cx.getAnn(s).call = r.fn;
                        cx.getAnn(s).convs = r.convs;
                        return;
                    }
                    boxArg(cx, ret, { t, e: s.expr }, scope, s);
                }
                return;
            }
            case "try": {
                annotateStmt(cx, s.body, scope);
                for (const h of s.handlers) {
                    scope.locals.push(new Map());
                    try {
                        if (h.vdecl)
                            annotateCatchVar(cx, h.vdecl, scope);
                        annotateStmt(cx, h.body, scope);
                    }
                    finally {
                        scope.locals.pop();
                    }
                }
                return;
            }
            case "throw": {
                if (s.expr)
                    CTJ.typeOf(cx, s.expr, scope);
                return;
            }
        }
    }
    CTJ.annotateStmt = annotateStmt;
    function annotateCond(cx, c, scope) {
        if (c.kind === "var")
            annotateLocalVar(cx, c, scope);
        else
            CTJ.typeOf(cx, c, scope);
    }
    function annotateDecl(cx, d, scope) {
        switch (d.kind) {
            case "var":
                annotateLocalVar(cx, d, scope);
                return;
            case "func":
                if (d.body)
                    cx.fail("local function definition is not allowed", d);
                cx.collectOne(d, scope);
                return;
            default:
                cx.collectOne(d, scope);
                return;
        }
    }
    function annotateRangeVar(cx, rf, rt, scope) {
        const vd = rf.vdecl;
        let elem;
        if (rt.dims.length) {
            elem = new CTJ.CppType(rt.name);
            elem.segs = rt.segs;
            elem.ptr = rt.ptr;
        }
        else {
            const clsFq = cx.stripAll(rt);
            const cls = cx.classes.get(clsFq);
            if (!cls || rt.isBox())
                cx.fail("range-for requires array or container with begin/end", vd);
            const bm = cx.lookupMember(clsFq, "begin", new Set());
            if (!bm.methods)
                cx.fail(`'${clsFq}' has no begin() for range-for`, vd);
            const r = CTJ.resolveOverload(cx, bm.methods, [], [], scope, vd);
            const em = cx.lookupMember(clsFq, "end", new Set());
            if (!em.methods)
                cx.fail(`'${clsFq}' has no end() for range-for`, vd);
            const er = CTJ.resolveOverload(cx, em.methods, [], [], scope, vd);
            const bt = cx.funcRet(r.fn);
            const itFq = cx.stripAll(bt);
            const ne = cx.lookupMember(itFq, "operator!=", new Set());
            const inc = cx.lookupMember(itFq, "operator++", new Set());
            const star = cx.lookupMember(itFq, "operator*", new Set());
            if (!ne.methods || !inc.methods || !star.methods)
                cx.fail("bad iterator for range-for", vd);
            const btArg = { t: bt, e: vd };
            const neR = CTJ.resolveOverload(cx, ne.methods, [], [btArg], scope, vd);
            const incR = CTJ.resolveOverload(cx, inc.methods, [], [], scope, vd);
            const starR = CTJ.resolveOverload(cx, star.methods, [], [], scope, vd);
            cx.getAnn(rf).range = { beginFn: r.fn, endFn: er.fn, neFn: neR.fn, incFn: incR.fn, starFn: starR.fn };
            elem = cx.funcRet(starR.fn);
        }
        let t = cx.resolveTypeNode(vd.type, scope);
        if (t.name === "auto")
            t = deduceAuto(cx, t, elem, vd);
        const name = vd.name.length ? CTJ.last(vd.name).n : "";
        const v = {
            fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
            decl: vd, scope: cx.snapScope(scope), typeCache: t,
            storage: CTJ.isBoxedVar(t) ? "box" : "plain",
            isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
        };
        cx.getAnn(vd).var = v;
        cx.getAnn(vd).t = t;
        CTJ.last(scope.locals).set(name, v);
    }
    function annotateCatchVar(cx, vd, scope) {
        const t = cx.resolveTypeNode(vd.type, scope);
        const name = vd.name.length ? CTJ.last(vd.name).n : "$ex";
        const v = {
            fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
            decl: vd, scope: cx.snapScope(scope), typeCache: t,
            storage: CTJ.isBoxedVar(t) ? "box" : "plain",
            isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
        };
        cx.getAnn(vd).var = v;
        cx.getAnn(vd).t = t;
        if (name)
            CTJ.last(scope.locals).set(name, v);
    }
    function annotateLocalVar(cx, vd, scope) {
        if (vd.type.func && vd.name.length) {
            cx.fail(`function type variable '${CTJ.last(vd.name).n}' needs initializer`, vd);
        }
        let t = cx.resolveTypeNode(vd.type, scope);
        const name = vd.name.length ? CTJ.last(vd.name).n : "";
        if (!name)
            cx.fail("abstract declarator in declaration", vd);
        const init = vd.init || (vd.directInit && vd.directInit.length === 1 ? vd.directInit[0] : null);
        const isDirectMulti = vd.directInit && vd.directInit.length !== 1;
        if (t.name === "auto") {
            if (!vd.init && !vd.directInit)
                cx.fail(`cannot deduce 'auto' for '${name}'`, vd);
            const ie = vd.init || vd.directInit[0];
            const it = CTJ.typeOf(cx, ie, scope);
            if (it.name === "__initlist")
                cx.fail(`cannot deduce 'auto' from initializer list`, vd);
            t = deduceAuto(cx, t, it, vd);
        }
        if (t.name.startsWith("__value"))
            cx.fail(`'${name}' declared with non-type`, vd);
        if (t.name === "void" && !t.ptr && !t.dims.length)
            cx.fail(`variable '${name}' has void type`, vd);
        const isStatic = vd.flags.includes("static") || vd.flags.includes("extern");
        let v;
        if (isStatic && scope.fn) {
            const fq = scope.fn.fq + "::" + name;
            let g = cx.vars.get(fq);
            if (!g) {
                g = {
                    fq, short: name, mangled: CTJ.mangleType(fq), decl: vd, scope: cx.snapScope(scope),
                    typeCache: t, storage: CTJ.isBoxedVar(t) ? "box" : "plain",
                    isGlobal: true, isStatic: true, isParam: false, isField: false, lifted: true, referenced: true,
                };
                cx.vars.set(fq, g);
            }
            v = g;
        }
        else {
            v = {
                fq: (scope.fn ? scope.fn.fq : "") + "::" + name, short: name, mangled: safeName(name),
                decl: vd, scope: cx.snapScope(scope), typeCache: t,
                storage: CTJ.isBoxedVar(t) ? "box" : "plain",
                isGlobal: false, isStatic: false, isParam: false, isField: false, lifted: false, referenced: true,
            };
        }
        cx.getAnn(vd).var = v;
        cx.getAnn(vd).t = t;
        CTJ.last(scope.locals).set(name, v);
        if (t.ref !== "" && !vd.init && !vd.directInit)
            cx.fail(`reference '${name}' needs initializer`, vd);
        annotateVarInit(cx, v, scope);
        void init;
        void isDirectMulti;
    }
    function annotateVarInit(cx, v, scope) {
        const vd = v.decl;
        const t = v.typeCache;
        const clsFq = !t.isBox() && !t.dims.length && !t.isFunc ? cx.stripAll(t) : "";
        const cls = clsFq && cx.classes.has(clsFq) ? cx.classes.get(clsFq) : null;
        if (vd.init) {
            const it = CTJ.typeOf(cx, vd.init, scope);
            if (vd.init.kind === "initlist") {
                const items = vd.init.items.map(e => ({ t: CTJ.typeOf(cx, e, scope), e }));
                if (t.dims.length || t.name === "char" && t.dims.length) {
                    return;
                }
                if (cls) {
                    if (!items.length) {
                        const r = CTJ.resolveCtor(cx, cls.fq, [], scope, vd);
                        cx.getAnn(vd.init).call = r.fn;
                        return;
                    }
                    const asList = [{ t: initListType(cx, items, vd), e: vd.init }];
                    const lr = CTJ.tryResolveCtor(cx, cls.fq, asList, scope);
                    if (lr) {
                        cx.getAnn(vd.init).call = lr.fn;
                        cx.getAnn(vd.init).convs = lr.convs;
                        return;
                    }
                    const r = CTJ.resolveCtor(cx, cls.fq, items, scope, vd);
                    cx.getAnn(vd.init).call = r.fn;
                    cx.getAnn(vd.init).convs = r.convs;
                    return;
                }
                if (t.isBox())
                    cx.fail("cannot initialize pointer from list", vd);
                if (items.length === 1)
                    boxArg(cx, t, items[0], scope, vd);
                else if (items.length > 1)
                    cx.fail("too many initializers", vd);
                return;
            }
            if (cls && it.name !== "__initlist") {
                if (sameCore(it, t) && !it.isBox()) {
                    const r = CTJ.resolveCtor(cx, cls.fq, [{ t: it, e: vd.init }], scope, vd);
                    cx.getAnn(vd).call = r.fn;
                    cx.getAnn(vd).convs = r.convs;
                }
                else {
                    const r = CTJ.resolveCtor(cx, cls.fq, [{ t: it, e: vd.init }], scope, vd);
                    cx.getAnn(vd).call = r.fn;
                    cx.getAnn(vd).convs = r.convs;
                }
                return;
            }
            boxArg(cx, t, { t: it, e: vd.init }, scope, vd);
            return;
        }
        if (vd.directInit) {
            const items = vd.directInit.map(e => ({ t: CTJ.typeOf(cx, e, scope), e }));
            if (cls) {
                if (items.length === 1 && items[0].e.kind === "initlist") {
                    const sub = items[0].e.items.map(e => ({ t: CTJ.typeOf(cx, e, scope), e }));
                    const r = CTJ.resolveCtor(cx, cls.fq, sub, scope, vd);
                    cx.getAnn(vd).call = r.fn;
                    cx.getAnn(vd).convs = r.convs;
                    return;
                }
                const r = CTJ.resolveCtor(cx, cls.fq, items, scope, vd);
                cx.getAnn(vd).call = r.fn;
                cx.getAnn(vd).convs = r.convs;
                return;
            }
            if (t.dims.length) {
                if (items.length > 1)
                    cx.fail("too many initializers", vd);
                return;
            }
            if (t.isBox()) {
                if (items.length !== 1)
                    cx.fail("bad reference initializer", vd);
                boxArg(cx, t, items[0], scope, vd);
                return;
            }
            if (items.length !== 1)
                cx.fail("bad scalar initializer", vd);
            boxArg(cx, t, items[0], scope, vd);
            return;
        }
        if (cls) {
            const r = CTJ.resolveCtor(cx, cls.fq, [], scope, vd);
            cx.getAnn(vd).call = r.fn;
            return;
        }
    }
    function initListType(cx, items, t) {
        void cx;
        void t;
        const ty = CTJ.CppType.basic("__initlist");
        if (items.length) {
            ty.ret = items[0].t;
        }
        return ty;
    }
    function sameCore(a, b) {
        return a.key() === b.key() || (a.core().key() === b.core().key());
    }
    function boxArg(cx, param, arg, scope, t) {
        void scope;
        void t;
        const a = arg.t;
        if (param.isBox() && !a.isBox() && !a.dims.length && a.name !== "__null" && a.name !== "__initlist") {
            markBoxed(cx, arg.e);
        }
        if (!param.isBox() && a.isBox() && param.name !== "__any") {
            return;
        }
        if (param.dims.length || param.isBox()) {
            if (a.dims.length && !a.isBox())
                return;
        }
    }
    CTJ.boxArg = boxArg;
    function markBoxed(cx, e) {
        let cur = e;
        while (cur.kind === "cast")
            cur = cur.arg;
        if (cur.kind === "id") {
            const s = cx.getAnn(cur).sym;
            // A field is stored in its object, so it has no boxing convention of its own.
            if (s && s.k === "var" && !s.v.isField) {
                if (s.v.storage === "plain")
                    s.v.storage = "boxed";
                else if (s.v.storage === "box" && !(s.v.typeCache && s.v.typeCache.ref))
                    s.v.storage = "bbox";
            }
            return;
        }
        if (cur.kind === "member") {
            markBoxed(cx, cur.obj);
            return;
        }
        if (cur.kind === "index") {
            markBoxed(cx, cur.arr);
            return;
        }
    }
    function safeName(n) {
        if (!n)
            return "$v";
        return CTJ.safeJsName(n);
    }
    function finalizeMangling(cx) {
        for (const [fq, list] of cx.funcs) {
            if (list.length <= 1 && !list[0].fromTmpl) {
                if (!list[0].mangled)
                    list[0].mangled = CTJ.mangleType(fq);
                continue;
            }
            for (const f of list) {
                if (f.mangled)
                    continue;
                const ps = cx.funcParams(f);
                f.mangled = CTJ.mangleType(fq) + "__" + ps.map(p => mangleSig(p.type)).join("_");
            }
        }
        const seen = new Set();
        for (const list of cx.funcs.values()) {
            for (const f of list) {
                if (seen.has(f.mangled))
                    f.mangled = f.mangled + "_" + f.decl.line;
                seen.add(f.mangled);
            }
        }
    }
    function mangleSig(t) {
        let s = t.key();
        s = s.replace(/\*/g, "P").replace(/&/g, "R").replace(/\[/g, "A").replace(/\]/g, "");
        s = s.replace(/[^A-Za-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
        return s || "v";
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function typeOf(cx, e, scope) {
        const cached = cx.ann.get(e);
        if (cached && cached.t)
            return cached.t;
        const t = typeOfInner(cx, e, scope);
        cx.getAnn(e).t = t;
        return t;
    }
    CTJ.typeOf = typeOf;
    function typeOfInner(cx, e, scope) {
        switch (e.kind) {
            case "lit": return litTypeOf(cx, e);
            case "id": return typeOfId(cx, e, scope);
            case "this": {
                if (!scope.cls)
                    cx.fail("'this' outside class", e);
                const t = classType(cx.classes.get(scope.cls.fq));
                t.ptr = 1;
                return t;
            }
            case "call": return resolveCallExpr(cx, e, scope);
            case "index": return typeOfIndex(cx, e, scope);
            case "member": return typeOfMember(cx, e, scope);
            case "unary": return typeOfUnary(cx, e, scope);
            case "binary": return typeOfBinary(cx, e, scope);
            case "assign": return typeOfAssign(cx, e, scope);
            case "cond": {
                typeOf(cx, e.c, scope);
                const a = typeOf(cx, e.a, scope);
                const b = typeOf(cx, e.b, scope);
                if (a.key() === b.key())
                    return a;
                const p = promote(cx, a, b);
                if (p)
                    return p;
                return a;
            }
            case "new": return typeOfNew(cx, e, scope);
            case "delete": {
                typeOf(cx, e.arg, scope);
                return CTJ.CppType.basic("void");
            }
            case "cast": return typeOfCast(cx, e, scope);
            case "sizeof": {
                if (e.packName)
                    cx.fail("sizeof... outside template", e);
                if (e.isType && e.type)
                    cx.resolveTypeNode(e.type, scope);
                if (e.expr)
                    typeOf(cx, e.expr, scope);
                return CTJ.CppType.basic("unsigned long");
            }
            case "typeid": {
                if (e.isType && e.type)
                    cx.resolveTypeNode(e.type, scope);
                if (e.expr)
                    typeOf(cx, e.expr, scope);
                return CTJ.CppType.basic("__typeinfo");
            }
            case "lambda": return CTJ.analyzeLambda(cx, e, scope);
            case "initlist": {
                const items = e.items.map(x => ({ t: typeOf(cx, x, scope) }));
                const ty = CTJ.CppType.basic("__initlist");
                if (items.length)
                    ty.ret = items[0].t;
                return ty;
            }
            case "stmtexpr": {
                scope.locals.push(new Map());
                try {
                    let t = CTJ.CppType.basic("void");
                    for (const s of e.stmts) {
                        if (s.kind === "expr")
                            t = typeOf(cx, s.expr, scope);
                        else
                            CTJ.annotateStmt(cx, s, scope);
                    }
                    return t;
                }
                finally {
                    scope.locals.pop();
                }
            }
            case "noexcept": return CTJ.CppType.basic("bool");
        }
    }
    function classType(cls) {
        const t = new CTJ.CppType(cls.fq);
        t.segs = [{ n: cls.fromTmpl || cls.fq, a: cls.instArgs.slice() }];
        return t;
    }
    CTJ.classType = classType;
    function litTypeOf(cx, e) {
        void cx;
        if (e.lkind === "bool")
            return CTJ.CppType.basic("bool");
        if (e.lkind === "null")
            return CTJ.CppType.basic("__null");
        if (e.lkind === "char")
            return CTJ.CppType.basic("char");
        if (e.lkind === "string") {
            const t = CTJ.CppType.basic("char");
            t.dims = [CTJ.parseCString(e.value).length + 1];
            return t;
        }
        const v = e.value.replace(/'/g, "");
        const m = v.match(/^(.+?)([uUlLfF]+)$/);
        const suf = (m ? m[2] : "").toLowerCase();
        const num = m ? m[1] : v;
        const isHex = /^0[xX]/.test(num);
        const isFloat = !isHex && /[.eEpP]/.test(num);
        if (isFloat) {
            if (suf.includes("f"))
                return CTJ.CppType.basic("float");
            if (suf.includes("l"))
                return CTJ.CppType.basic("long double");
            return CTJ.CppType.basic("double");
        }
        const un = suf.includes("u");
        const longs = (suf.match(/l/g) || []).length;
        if (longs >= 2)
            return CTJ.CppType.basic(un ? "unsigned long long" : "long long");
        if (longs === 1)
            return CTJ.CppType.basic(un ? "unsigned long" : "long");
        return CTJ.CppType.basic(un ? "unsigned int" : "int");
    }
    function typeOfId(cx, e, scope) {
        const sym = cx.resolveSym(e.parts, e.global, scope);
        const ann = cx.getAnn(e);
        ann.sym = sym;
        if (!sym)
            cx.fail(`unknown name '${e.parts.map(s => s.n).join("::")}'`, e);
        const s = sym;
        if (s.k === "var") {
            cx.markVar(s.v);
            ann.needsThis = s.v.isField && !s.v.isStatic && e.parts.length === 1;
            if (s.v.isField) {
                const owner = s.v.fq.slice(0, s.v.fq.lastIndexOf("::"));
                const cls = cx.classes.get(owner);
                if (cls)
                    return cx.fieldType(cls, s.v.short);
            }
            return cx.varType(s.v);
        }
        if (s.k === "func") {
            for (const f of s.fns)
                cx.markFunc(f);
            return funcSig(cx, s.fns[0]);
        }
        if (s.k === "class") {
            ann.isType = true;
            cx.markCls(s.cls.fq);
            return classType(s.cls);
        }
        if (s.k === "enum") {
            ann.isType = true;
            s.e.referenced = true;
            const t = new CTJ.CppType(s.e.fq);
            t.segs = [{ n: s.e.fq, a: [] }];
            return t;
        }
        if (s.k === "typedef") {
            ann.isType = true;
            return cx.expandTypedef(s.fq, new Set());
        }
        if (s.k === "tmpl") {
            ann.isType = true;
            return CTJ.CppType.basic("__template");
        }
        if (s.k === "enumval") {
            s.e.referenced = true;
            const t = new CTJ.CppType(s.e.fq);
            t.segs = [{ n: s.e.fq, a: [] }];
            return t;
        }
        cx.fail(`'${e.parts.map(x => x.n).join("::")}' is not a value`, e);
    }
    function funcSig(cx, f) {
        const t = new CTJ.CppType("__func");
        t.isFunc = true;
        t.ret = cx.funcRet(f);
        const ps = cx.funcParams(f);
        t.funcParams = ps.filter(p => !p.variadic).map(p => p.type);
        t.funcVariadic = ps.some(p => p.variadic);
        t.ptr = 1;
        return t;
    }
    function typeOfIndex(cx, e, scope) {
        const at = noRef(typeOf(cx, e.arr, scope));
        const it = typeOf(cx, e.idx, scope);
        void it;
        if (isClassVal(cx, at)) {
            const m = cx.lookupMember(cx.stripAll(at), "operator[]", new Set());
            if (!m.methods)
                cx.fail("no operator[] ", e);
            const r = resolveOverload(cx, m.methods, [], [{ t: typeOf(cx, e.idx, scope), e: e.idx }], scope, e, undefined, at.cnst);
            cx.getAnn(e).call = r.fn;
            cx.getAnn(e).convs = r.convs;
            return cx.funcRet(r.fn);
        }
        if (at.dims.length) {
            const t = new CTJ.CppType(at.name);
            t.segs = at.segs;
            t.ptr = at.ptr;
            t.dims = at.dims.slice(1);
            return t;
        }
        if (at.ptr > 0) {
            const t = new CTJ.CppType(at.name);
            t.segs = at.segs;
            t.ptr = at.ptr - 1;
            t.dims = at.dims.slice();
            return t;
        }
        cx.fail("subscript on non-array", e);
    }
    function typeOfMember(cx, e, scope) {
        const ot = typeOf(cx, e.obj, scope);
        const ann = cx.getAnn(e);
        let objT = ot;
        if (e.arrow && objT.ptr === 0 && !objT.isFunc && isClassVal(cx, objT)) {
            objT = applyArrow(cx, e, objT, scope);
        }
        const clsFq = classOf(cx, objT);
        if (!clsFq)
            cx.fail(`no member '${e.field}'`, e);
        let lookupFq = clsFq;
        if (e.qual.length) {
            const qs = cx.resolveSym(e.qual, false, scope);
            if (!qs || qs.k !== "class")
                cx.fail(`unknown class '${e.qual.map(s => s.n).join("::")}'`, e);
            lookupFq = qs.cls.fq;
        }
        const m = cx.lookupMember(lookupFq, e.field, new Set());
        if (m.field) {
            const cls = cx.classes.get(m.owner);
            ann.sym = { k: "var", v: cx.fieldVar(cls, e.field, cls.fields.get(e.field)) };
            return cx.fieldType(cls, e.field);
        }
        if (m.methods)
            cx.fail(`method '${e.field}' without call`, e);
        cx.fail(`'${clsFq}' has no member '${e.field}'`, e);
    }
    function applyArrow(cx, e, objT, scope) {
        const ann = cx.getAnn(e);
        let cur = objT;
        for (let i = 0; i < 8; i++) {
            if (!isClassVal(cx, cur))
                break;
            const m = cx.lookupMember(cx.stripAll(cur), "operator->", new Set());
            if (!m.methods)
                break;
            const r = resolveOverload(cx, m.methods, [], [], scope, e, undefined, cur.cnst);
            if (!ann.arrowCall)
                ann.arrowCall = r.fn;
            cur = cx.funcRet(r.fn);
        }
        return cur;
    }
    function typeOfUnary(cx, e, scope) {
        if (e.op === "...")
            cx.fail("pack expansion outside template", e);
        const at = typeOf(cx, e.arg, scope);
        const ann = cx.getAnn(e);
        if (e.op === "*") {
            if (isClassVal(cx, at)) {
                const r = findOperator(cx, "*", { t: at, e: e.arg }, null, scope, e);
                if (!r)
                    cx.fail("no operator* ", e);
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
            if (at.isFunc)
                return at;
            if (at.ref !== "") {
                const t = new CTJ.CppType(at.name);
                t.segs = at.segs;
                t.ptr = at.ptr;
                t.dims = at.dims.slice();
                return t;
            }
            if (at.ptr > 0) {
                const t = new CTJ.CppType(at.name);
                t.segs = at.segs;
                t.ptr = at.ptr - 1;
                t.dims = at.dims.slice();
                return t;
            }
            if (at.dims.length) {
                const t = new CTJ.CppType(at.name);
                t.segs = at.segs;
                t.dims = at.dims.slice(1);
                return t;
            }
            cx.fail("indirection on non-pointer", e);
        }
        if (e.op === "&") {
            const t = new CTJ.CppType(at.name);
            t.segs = at.segs;
            t.ptr = at.ptr + 1;
            t.dims = at.dims.slice();
            markBoxedOf(cx, e.arg);
            return t;
        }
        if (e.op === "!")
            return CTJ.CppType.basic("bool");
        if (e.op === "++" || e.op === "--") {
            if (isClassVal(cx, at)) {
                const r = findOperator(cx, e.op, { t: at, e: e.arg }, null, scope, e, e.postfix);
                if (!r)
                    cx.fail(`no ${e.op}`, e);
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
            return at;
        }
        if (e.op === "+" || e.op === "-") {
            if (isClassVal(cx, at)) {
                const r = findOperator(cx, e.op, { t: at, e: e.arg }, null, scope, e);
                if (!r)
                    cx.fail(`no ${e.op}`, e);
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
            return promoteUnary(cx, at);
        }
        if (e.op === "~") {
            if (isClassVal(cx, at)) {
                const r = findOperator(cx, "~", { t: at, e: e.arg }, null, scope, e);
                if (!r)
                    cx.fail("no operator~", e);
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
            return promoteUnary(cx, at);
        }
        cx.fail(`bad unary '${e.op}'`, e);
    }
    function typeOfBinary(cx, e, scope) {
        const rawL = typeOf(cx, e.l, scope);
        const rawR = typeOf(cx, e.r, scope);
        const ann = cx.getAnn(e);
        if (e.op === ",")
            return rawR;
        // Outside a plain assignment an lvalue of reference type behaves as the type
        // it refers to; only the assignment needs to know it writes through one.
        const lt = e.op === "=" ? rawL : rawL.core();
        const rt = e.op === "=" ? rawR : rawR.core();
        const lop = isClassVal(cx, lt) || isClassBox(cx, lt);
        const rop = isClassVal(cx, rt) || isClassBox(cx, rt);
        if ((lop || rop) && e.op !== "&&" && e.op !== "||") {
            const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
            if (r) {
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
        }
        if ((lop || rop) && (e.op === "&&" || e.op === "||")) {
            const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
            if (r) {
                ann.call = r.fn;
                ann.convs = r.convs;
                return cx.funcRet(r.fn);
            }
            return CTJ.CppType.basic("bool");
        }
        if (e.op === "&&" || e.op === "||")
            return CTJ.CppType.basic("bool");
        if (e.op === "==" || e.op === "!=" || e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=" || e.op === "<=>") {
            return CTJ.CppType.basic("bool");
        }
        if (e.op === "<<" || e.op === ">>") {
            const p = promote(cx, lt, rt);
            if (p)
                return p;
            cx.fail(`bad operands to '${e.op}'`, e);
        }
        const lDec = lt.dims.length && !lt.isBox() ? decayed(lt) : lt;
        const rDec = rt.dims.length && !rt.isBox() ? decayed(rt) : rt;
        if (lDec.ptr > 0 && isIntegerish(cx, rt) && (e.op === "+" || e.op === "-"))
            return lDec;
        if (rDec.ptr > 0 && isIntegerish(cx, lt) && e.op === "+")
            return rDec;
        // Two pointers into the same array differ by a number of elements.
        if (lDec.ptr > 0 && rDec.ptr > 0 && e.op === "-")
            return CTJ.CppType.basic("long");
        if (lDec.ptr > 0 && rDec.ptr > 0 && e.op === "-")
            return CTJ.CppType.basic("long");
        const p = promote(cx, lt, rt);
        if (p)
            return p;
        cx.fail(`bad operands to '${e.op}'`, e);
    }
    function decayed(t) {
        const r = new CTJ.CppType(t.name);
        r.segs = t.segs;
        r.ptr = t.ptr + 1;
        return r;
    }
    function typeOfAssign(cx, e, scope) {
        const lt = typeOf(cx, e.l, scope);
        const rt = typeOf(cx, e.r, scope);
        const ann = cx.getAnn(e);
        if (isClassVal(cx, lt)) {
            const r = findOperator(cx, e.op, { t: lt, e: e.l }, { t: rt, e: e.r }, scope, e);
            if (!r && e.op === "=" && rt.name === "__initlist") {
                const items = e.r.items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
                const cr = resolveInitCtor(cx, cx.stripAll(lt), items.length ? [{ t: rt, e: e.r }] : [], scope, e);
                ann.initCall = cr.fn;
                ann.convs = cr.convs;
                const ar = findOperator(cx, "=", { t: lt, e: e.l }, { t: lt, e: e.r }, scope, e);
                if (!ar)
                    cx.fail("no operator=", e);
                ann.call = ar.fn;
                return cx.funcRet(ar.fn);
            }
            if (!r)
                cx.fail(`no ${e.op}`, e);
            ann.call = r.fn;
            ann.convs = r.convs;
            return cx.funcRet(r.fn);
        }
        if (e.op !== "=") {
            const p = promote(cx, lt, rt);
            if (!p && !(lt.ptr > 0 && isIntegerish(cx, rt)))
                cx.fail(`bad operands to '${e.op}'`, e);
            return lt;
        }
        // Storing through a reference is a plain write; only a pointer target needs
        // the value on the right to live in a box.
        if (lt.ptr > 0 && !rt.isBox() && !rt.dims.length && rt.name !== "__null")
            markBoxedOf(cx, e.r);
        const m = matchScore(cx, lt, rt, e.r, scope, true);
        if (m.s < 0)
            cx.fail("cannot convert in assignment", e);
        ann.conv = m.conv;
        return lt;
    }
    function typeOfNew(cx, e, scope) {
        for (const p of e.placement)
            typeOf(cx, p, scope);
        const t = cx.resolveTypeNode(e.type, scope);
        const ann = cx.getAnn(e);
        const clsFq = !t.isBox() && !t.dims.length && !t.isFunc ? cx.stripAll(t) : "";
        if (t.name === "void" && !t.ptr)
            cx.fail("new void", e);
        if (clsFq && cx.classes.has(clsFq)) {
            const cls = cx.classes.get(clsFq);
            for (const fns of cls.methods.values()) {
                for (const f of fns) {
                    if (f.isPure)
                        cx.fail(`new abstract class '${clsFq}'`, e);
                }
            }
        }
        if (e.isArray) {
            if (e.args.length)
                cx.fail("new array with initializer", e);
            // The element count is an ordinary expression, so "new _Tp[__n]" needs the
            // names in it annotated like any other argument.
            for (const d of e.type.dims)
                typeOf(cx, d, scope);
            if (clsFq && cx.classes.has(clsFq)) {
                const r = resolveCtor(cx, clsFq, [], scope, e, true);
                ann.call = r.fn;
            }
        }
        else if (clsFq && cx.classes.has(clsFq)) {
            const argTs = e.args.map(x => ({ t: typeOf(cx, x, scope), e: x }));
            const r = resolveInitCtor(cx, clsFq, argTs, scope, e);
            ann.call = r.fn;
            ann.convs = r.convs;
        }
        else {
            if (e.args.length > 1)
                cx.fail("too many initializers", e);
            if (e.args.length) {
                const it = typeOf(cx, e.args[0], scope);
                CTJ.boxArg(cx, t, { t: it, e: e.args[0] }, scope, e);
            }
        }
        const bt = new CTJ.CppType(t.name);
        bt.segs = t.segs;
        bt.ptr = t.ptr + 1;
        bt.dims = [];
        return bt;
    }
    function typeOfCast(cx, e, scope) {
        if (!e.type)
            cx.fail("bad cast", e);
        const target = cx.resolveTypeNode(e.type, scope);
        const st = typeOf(cx, e.arg, scope);
        const ann = cx.getAnn(e);
        const kind = e.ckind;
        if (target.name === "void" && !target.ptr)
            return target;
        const tn = coreName(target);
        const sn = coreName(st);
        const tCls = !target.isBox() && !target.dims.length && cx.classes.has(cx.stripAll(target));
        const sCls = !st.isBox() && !st.dims.length && cx.classes.has(cx.stripAll(st));
        // "size_type()" and "P()" have no argument to convert: they value- or
        // default-construct the target.
        if (e.arg.kind === "initlist" && !e.arg.items.length
            && (kind === "cstyle" || kind === "static_cast" || kind === "functional")) {
            if (tCls) {
                const r = resolveInitCtor(cx, cx.stripAll(target), [], scope, e);
                ann.call = r.fn;
                ann.convs = r.convs;
            }
            return target;
        }
        if (kind === "dynamic_cast") {
            if (tCls || (target.ptr > 0 && coreName(target) === "void"))
                return target;
            cx.fail("bad dynamic_cast", e);
        }
        if (kind === "const_cast") {
            if (tn === sn || (tCls && sCls && cx.stripAll(target) === cx.stripAll(st)))
                return target;
            cx.fail("bad const_cast", e);
        }
        if (tCls && sCls) {
            const tf = cx.stripAll(target);
            const sf = cx.stripAll(st);
            if (tf === sf || isDerived(cx, sf, tf) || isDerived(cx, tf, sf))
                return target;
            const r = resolveCtor(cx, tf, [{ t: st, e: e.arg }], scope, e, kind !== "static_cast");
            ann.call = r.fn;
            ann.convs = r.convs;
            return target;
        }
        if (tCls && !sCls) {
            // A functional cast with no argument, such as "P()", is default construction.
            const r = resolveInitCtor(cx, cx.stripAll(target), [{ t: st, e: e.arg }], scope, e);
            ann.call = r.fn;
            ann.convs = r.convs;
            return target;
        }
        if (sCls && !tCls) {
            if (target.ptr > 0 || target.isFunc)
                cx.fail("cannot cast class to pointer", e);
            const c = findConversion(cx, st, target, scope);
            if (!c)
                cx.fail("no conversion", e);
            ann.conv = c;
            return target;
        }
        if (target.ptr > 0 && st.ptr > 0)
            return target;
        if (target.isFunc && st.isFunc)
            return target;
        if (target.ptr > 0 && st.ptr === 0 && (kind === "cstyle" || kind === "reinterpret_cast")) {
            cx.warn("integer to pointer cast is unchecked", e);
            return target;
        }
        if (target.ptr === 0 && st.ptr > 0 && (kind === "cstyle" || kind === "reinterpret_cast")) {
            cx.warn("pointer to integer cast is unchecked", e);
            return target;
        }
        if (isNumericish(cx, target) && isNumericish(cx, st))
            return target;
        if (tn === "__null" || sn === "__null")
            return target;
        // Only the reference qualification differs, as in "static_cast<_Tp&&>(__t)":
        // the value denoted is the same one, so there is nothing to convert.
        if (st.ptr === target.ptr && noRef(st).key() === noRef(target).key())
            return target;
        // "reinterpret_cast<const volatile char&>(__r)" gives the same storage a
        // different type. A reference is one box either way, so nothing is built.
        if (st.ref !== "" && target.ref !== "" && (kind === "reinterpret_cast" || kind === "cstyle"))
            return target;
        cx.fail(`cannot cast`, e);
    }
    function resolveInitCtor(cx, clsFq, args, scope, t) {
        if (args.length === 1 && args[0].e.kind === "initlist") {
            const items = args[0].e.items.map(x => ({ t: typeOf(cx, x, scope), e: x }));
            if (!items.length)
                return resolveCtor(cx, clsFq, [], scope, t, true);
            const asList = [{ t: listType(items), e: args[0].e }];
            const lr = tryResolveCtor(cx, clsFq, asList, scope);
            if (lr)
                return lr;
            return resolveCtor(cx, clsFq, items, scope, t, true);
        }
        return resolveCtor(cx, clsFq, args, scope, t, true);
    }
    CTJ.resolveInitCtor = resolveInitCtor;
    function listType(items) {
        const ty = CTJ.CppType.basic("__initlist");
        if (items.length)
            ty.ret = items[0].t;
        return ty;
    }
    function resolveCtor(cx, clsFq, args, scope, t, allowExplicit = true) {
        const cls = cx.classes.get(clsFq);
        if (!cls)
            cx.fail(`unknown class '${clsFq}'`, t);
        cx.markCls(clsFq);
        let cands = (cls.methods.get("#ctor") || []).slice();
        if (!allowExplicit)
            cands = cands.filter(f => !f.decl.flags.includes("explicit") || args.length !== 1);
        const tmpls = [];
        const tfq = clsFq + "::" + cls.decl.name;
        for (const tm of cx.tmplsOf(tfq))
            if (!tmpls.includes(tm))
                tmpls.push(tm);
        if (!cands.length && !tmpls.length)
            cx.fail(`no constructor of '${clsFq}'`, t);
        return resolveOverload(cx, cands, tmpls, args, scope, t);
    }
    CTJ.resolveCtor = resolveCtor;
    function tryResolveCtor(cx, clsFq, args, scope) {
        try {
            return resolveCtor(cx, clsFq, args, scope, { file: "", line: 0 }, true);
        }
        catch {
            return null;
        }
    }
    CTJ.tryResolveCtor = tryResolveCtor;
    function resolveCallExpr(cx, e, scope) {
        const fn = e.fn;
        const argTs = e.args.map(x => ({ t: typeOf(cx, x, scope), e: x }));
        const ann = cx.getAnn(e);
        if (fn.kind === "id") {
            const sym = cx.resolveSym(fn.parts, fn.global, scope);
            cx.getAnn(fn).sym = sym;
            if (!sym) {
                const nm = fn.parts.map(s => s.n).join("::");
                if (fn.parts.length === 1 && fn.parts[0].n.startsWith("__builtin_")) {
                    return CTJ.builtinCall(cx, e, fn.parts[0].n, argTs, scope);
                }
                cx.fail(`unknown function '${nm}'`, fn);
            }
            const s = sym;
            if (s.k === "class" || (s.k === "tmpl" && s.t.decl.kind === "class")) {
                // A call that names a class builds a temporary of that class.
                const ct = cx.resolveTypeNode(CTJ.typeNode(fn.parts, e), scope);
                const fq = cx.stripAll(ct);
                const r = resolveInitCtor(cx, fq, argTs, scope, e);
                ann.call = r.fn;
                ann.convs = r.convs;
                applyArgBoxing(cx, e, r.fn, argTs, scope);
                return CTJ.CppType.basic(fq);
            }
            if (s.k === "func" || s.k === "tmpl") {
                let cands = [];
                const tmpls = [];
                // An instantiation is filed under the name of its template, and so is the
                // template itself, so both have to be looked up under that name.
                const fq = s.k === "func" ? (s.fns[0].fromTmpl || s.fns[0].fq) : s.t.fq;
                if (cx.funcs.has(fq))
                    cands = cands.concat(cx.funcs.get(fq));
                if (s.k === "func") {
                    for (const f of s.fns) {
                        if (!cands.includes(f))
                            cands.push(f);
                    }
                }
                for (const tm of cx.tmplsOf(fq))
                    if (!tmpls.includes(tm))
                        tmpls.push(tm);
                if (s.k === "tmpl" && !tmpls.includes(s.t))
                    tmpls.push(s.t);
                const xt = CTJ.last(fn.parts).a.map(a => cx.resolveTypeNode(a, scope));
                const r = resolveOverload(cx, cands, tmpls, argTs, scope, e, xt.length ? xt : undefined);
                ann.call = r.fn;
                ann.convs = r.convs;
                applyArgBoxing(cx, e, r.fn, argTs, scope);
                const fret = cx.funcRet(r.fn);
                setCopyCtor(cx, e, fret, scope);
                return fret;
            }
            if (s.k === "var") {
                cx.markVar(s.v);
                const vt = s.v.isField
                    ? cx.fieldType(cx.classes.get(s.v.fq.slice(0, s.v.fq.lastIndexOf("::"))), s.v.short)
                    : cx.varType(s.v);
                if (vt.isFunc)
                    return vt.ret;
                return callOperator(cx, e, vt, argTs, scope);
            }
            if (s.k === "builtin")
                return ctjInline(cx, e, s.name, argTs, scope);
            cx.fail("not callable", e);
        }
        if (fn.kind === "member")
            return memberCall(cx, e, fn, argTs, scope);
        const ft = typeOf(cx, fn, scope);
        if (ft.isFunc)
            return ft.ret;
        return callOperator(cx, e, ft, argTs, scope);
    }
    function setCopyCtor(cx, e, ret, scope) {
        const fq = !ret.isBox() && !ret.dims.length && !ret.isFunc ? cx.stripAll(ret) : "";
        if (fq && cx.classes.has(fq)) {
            const r = tryResolveCtor(cx, fq, [{ t: ret, e }], scope);
            if (r)
                cx.getAnn(e).copyCtor = r.fn;
        }
    }
    function callOperator(cx, e, vt, argTs, scope) {
        const clsFq = classOf(cx, vt);
        if (!clsFq)
            cx.fail("not callable", e);
        const m = cx.lookupMember(clsFq, "operator()", new Set());
        if (!m.methods)
            cx.fail(`'${clsFq}' is not callable`, e);
        const r = resolveOverload(cx, m.methods, [], argTs, scope, e);
        cx.getAnn(e).call = r.fn;
        cx.getAnn(e).convs = r.convs;
        applyArgBoxing(cx, e, r.fn, argTs, scope);
        const fret = cx.funcRet(r.fn);
        setCopyCtor(cx, e, fret, scope);
        return fret;
    }
    function memberCall(cx, e, fn, argTs, scope) {
        const ann = cx.getAnn(e);
        let objT = typeOf(cx, fn.obj, scope);
        if (objT.name === "__typeinfo" && fn.field === "name" && !argTs.length) {
            const s = cx.resolveSym([CTJ.qseg("std"), CTJ.qseg("string")], false, scope);
            if (s && s.k === "class") {
                cx.markCls(s.cls.fq);
                return classType(s.cls);
            }
            return CTJ.CppType.basic("__any");
        }
        if (fn.arrow && objT.ptr === 0 && !objT.isFunc && isClassVal(cx, objT)) {
            objT = applyArrow(cx, fn, objT, scope);
        }
        // "p->~T()" on a scalar is a pseudo-destructor call, and a class with no
        // destructor of its own has nothing to destroy either.
        if (fn.field.charAt(0) === "~") {
            const dcls = classOf(cx, objT);
            if (!dcls || !(cx.lookupMember(dcls, "#dtor", new Set()).methods || []).length) {
                return CTJ.CppType.basic("void");
            }
        }
        const clsFq = classOf(cx, objT);
        if (!clsFq)
            cx.fail(`no method '${fn.field}'`, fn);
        let lookupFq = clsFq;
        if (fn.qual.length) {
            const qs = cx.resolveSym(fn.qual, false, scope);
            if (!qs || qs.k !== "class")
                cx.fail(`unknown class '${fn.qual.map(s => s.n).join("::")}'`, fn);
            lookupFq = qs.cls.fq;
        }
        // "p->~T()" names the destructor of the class the object belongs to.
        const mname = fn.field.charAt(0) === "~" ? "#dtor" : fn.field;
        const m = cx.lookupMember(lookupFq, mname, new Set());
        if (m.field) {
            const cls = cx.classes.get(m.owner);
            const ft = cx.fieldType(cls, fn.field);
            if (ft.isFunc)
                return ft.ret;
            cx.fail(`'${fn.field}' is not callable`, fn);
        }
        const cands = m.methods ? m.methods.slice() : [];
        const tmpls = [];
        const tfq = m.owner + "::" + fn.field;
        for (const tm of cx.tmplsOf(tfq))
            if (!tmpls.includes(tm))
                tmpls.push(tm);
        if (!cands.length && !tmpls.length)
            cx.fail(`'${clsFq}' has no method '${fn.field}'`, fn);
        const xt = fn.targs.map(a => cx.resolveTypeNode(a, scope));
        const r = resolveOverload(cx, cands, tmpls, argTs, scope, e, xt.length ? xt : undefined, objT.cnst);
        ann.call = r.fn;
        ann.convs = r.convs;
        applyArgBoxing(cx, e, r.fn, argTs, scope);
        const fret = cx.funcRet(r.fn);
        setCopyCtor(cx, e, fret, scope);
        return fret;
    }
    function ctjInline(cx, e, name, argTs, scope) {
        void scope;
        if (!argTs.length || argTs[0].e.kind !== "lit" || argTs[0].e.lkind !== "string") {
            cx.fail(`${name} first argument must be a string literal`, e);
        }
        cx.getAnn(e).call = { builtin: name };
        return CTJ.CppType.basic("__any");
    }
    function applyArgBoxing(cx, e, fn, argTs, scope) {
        const ps = cx.funcParams(fn);
        const convs = cx.getAnn(e).convs;
        argTs.forEach((a, i) => {
            const c = convs[i];
            if (c && c.kind === "ctor") {
                const cps = cx.funcParams(c.fn);
                if (cps.length)
                    CTJ.boxArg(cx, cps[0].type, a, scope, e);
            }
            else if (i < ps.length && !ps[i].variadic) {
                CTJ.boxArg(cx, ps[i].type, a, scope, e);
            }
        });
    }
    function resolveOverload(cx, cands, tmpls, args, scope, t, explicit, objConst = false) {
        let useCands = cands;
        if (explicit && explicit.length) {
            const expKey = explicit.map(a => a.key()).join(",");
            const filtered = cands.filter(f => {
                if (!f.fromTmpl)
                    return true;
                const i = f.fq.indexOf("<");
                const j = f.fq.lastIndexOf(">");
                if (i < 0 || j < 0)
                    return false;
                const inner = f.fq.slice(i + 1, j);
                return inner === expKey || inner.includes(expKey) || expKey.includes(inner);
            });
            if (filtered.length)
                useCands = filtered;
            else {
                const nonTmpl = cands.filter(f => !f.fromTmpl);
                if (nonTmpl.length)
                    useCands = nonTmpl;
            }
        }
        const all = useCands.slice();
        for (const tm of tmpls) {
            const inst = tryInstantiateCall(cx, tm, args, scope, explicit, t);
            if (inst)
                all.push(inst);
        }
        if (!all.length)
            cx.fail("no matching function", t);
        let best = null;
        let bestScore = -1e18;
        let bestConvs = [];
        for (const f of all) {
            // A candidate whose parameters cannot even be resolved is not callable;
            // one such template must not rule out the others.
            let r;
            try {
                r = scoreFunc(cx, f, args, scope, objConst);
            }
            catch {
                continue;
            }
            if (!r.viable)
                continue;
            if (r.score > bestScore) {
                best = f;
                bestScore = r.score;
                bestConvs = r.convs;
            }
        }
        if (!best)
            cx.fail("no matching function for call", t);
        if (best.isDelete)
            cx.fail("call to deleted function", t);
        cx.markFunc(best);
        // A static member is emitted as part of its class, so the class is needed too.
        if (best.isStatic && best.cls)
            cx.markCls(best.cls);
        return { fn: best, convs: bestConvs };
    }
    CTJ.resolveOverload = resolveOverload;
    // Viability and preference are separate: penalties only rank the candidates
    // that could be called at all, they never rule one out on their own.
    function scoreFunc(cx, f, args, scope, objConst = false) {
        const fail = { viable: false, score: 0, convs: [] };
        if (f.isMethod && !f.isStatic && !f.isCtor && !f.isDtor) {
            if (objConst && !f.isConst)
                return fail;
        }
        const ps = cx.funcParams(f);
        const hasVar = ps.length > 0 && CTJ.last(ps).variadic;
        const fixed = hasVar ? ps.length - 1 : ps.length;
        if (args.length < fixed) {
            for (let i = args.length; i < fixed; i++) {
                if (!ps[i].def)
                    return fail;
            }
        }
        if (!hasVar && args.length > ps.length)
            return fail;
        let score = f.isMethod && f.isConst && !objConst ? -1 : 0;
        const convs = [];
        for (let i = 0; i < args.length; i++) {
            if (hasVar && i >= fixed) {
                score += 5;
                convs.push(null);
                continue;
            }
            const m = matchScore(cx, ps[i].type, args[i].t, args[i].e, scope, true);
            if (m.s < 0)
                return fail;
            score += m.s;
            convs.push(m.conv);
        }
        score -= Math.max(0, fixed - args.length) * 5;
        if (f.fromTmpl)
            score -= 1;
        return { viable: true, score, convs };
    }
    function tryInstantiateCall(cx, tm, args, scope, explicit, t) {
        try {
            const full = deduce(cx, tm, args, scope, explicit || [], t);
            if (!full)
                return null;
            return cx.instantiateFunc(tm, full, new Map());
        }
        catch {
            return null;
        }
    }
    function packNameOf(tn) {
        if (tn.parts.length === 1 && !tn.parts[0].a.length)
            return tn.parts[0].n;
        return "";
    }
    function deduce(cx, tm, args, scope, explicit, t) {
        void t;
        const env = new Map();
        const venv = new Map();
        const packs = new Map();
        tm.tparams.forEach((tp, i) => {
            if (i < explicit.length && !tp.isPack) {
                if (tp.kind === "nontype")
                    venv.set(tp.name, parseInt(explicit[i].name.replace("__value", "") || "0", 10));
                else
                    env.set(tp.name, explicit[i]);
            }
        });
        const dp = tm.decl.params;
        let ai = 0;
        for (const p of dp) {
            if (p.variadic)
                break;
            if (p.isPack) {
                const nm = packNameOf(p.type);
                if (!nm)
                    return null;
                packs.set(nm, args.slice(ai).map(a => noRef(a.t)));
                ai = args.length;
                break;
            }
            if (ai >= args.length) {
                if (!p.def)
                    return null;
                continue;
            }
            if (!deduceOne(cx, p.type, args[ai].t, env, venv))
                return null;
            ai++;
        }
        const senv = CTJ.blankSubstEnv();
        for (const [k, v] of env)
            senv.types.set(k, v);
        for (const [k, v] of venv)
            senv.values.set(k, v);
        for (const [k, v] of packs)
            senv.packs.set(k, v);
        const full = [];
        for (const tp of tm.tparams) {
            if (env.has(tp.name)) {
                full.push(env.get(tp.name));
                continue;
            }
            if (tp.isPack) {
                full.push(...(packs.get(tp.name) || []));
                continue;
            }
            if (venv.has(tp.name)) {
                full.push(CTJ.CppType.basic("__value" + venv.get(tp.name)));
                continue;
            }
            if (!tp.def)
                return null;
            if (tp.kind === "nontype") {
                const ex = CTJ.substExpr(tp.def, senv);
                const v = CTJ.constEval(cx, ex, scope);
                if (typeof v !== "number")
                    return null;
                full.push(CTJ.CppType.basic("__value" + Math.trunc(v)));
            }
            else {
                const tn = CTJ.substTypeNode(tp.def, senv);
                full.push(cx.resolveTypeNode(tn, tm.scope));
            }
        }
        return full;
    }
    function noRef(t) {
        const c = new CTJ.CppType(t.name);
        c.segs = t.segs;
        c.ptr = t.ptr;
        c.dims = t.dims.slice();
        c.isFunc = t.isFunc;
        c.ret = t.ret;
        c.funcParams = t.funcParams;
        c.funcVariadic = t.funcVariadic;
        return c;
    }
    function deduceOne(cx, tn, t, env, venv) {
        void cx;
        if (tn.valueArg && tn.valueArg.kind === "id") {
            const id = tn.valueArg;
            if (id.parts.length === 1 && t.name.startsWith("__value")) {
                venv.set(id.parts[0].n, parseInt(t.name.replace("__value", "") || "0", 10));
                return true;
            }
            return true;
        }
        if (!tn.parts.length)
            return true;
        const first = tn.parts[0].n;
        if (tn.parts.length === 1 && !tn.parts[0].a.length) {
            if (!env.has(first)) {
                const c = noRef(t);
                if (tn.ptr > 0)
                    c.ptr = Math.max(0, t.ptr - tn.ptr);
                env.set(first, c);
            }
            tn.dims.forEach((d, i) => {
                if (d.kind === "id") {
                    const id = d;
                    if (id.parts.length === 1 && i < t.dims.length)
                        venv.set(id.parts[0].n, t.dims[i]);
                }
            });
            return true;
        }
        if (tn.parts[0].a.length && t.segs.length) {
            const ta = t.segs[0].a;
            if (ta.length !== tn.parts[0].a.length)
                return true;
            for (let i = 0; i < ta.length; i++) {
                if (!deduceOne(cx, tn.parts[0].a[i], ta[i], env, venv))
                    return false;
            }
        }
        return true;
    }
    const NOMATCH = { s: -1e17, conv: null };
    function matchScore(cx, p, a, e, scope, allowConv) {
        if (p.name === "__any" || a.name === "__any")
            return { s: 80, conv: null };
        if (p.key() === a.key())
            return { s: 100, conv: null };
        if (a.name === "__null") {
            if (p.ptr > 0 || p.isFunc)
                return { s: 70, conv: null };
            if (coreName(p) === "bool")
                return { s: 50, conv: null };
            if (CTJ.isIntegerName(coreName(p)))
                return { s: 40, conv: null };
            return NOMATCH;
        }
        if (e && e.kind === "lit" && e.lkind === "int" && CTJ.parseNumber(e.value) === 0 && p.ptr > 0) {
            return { s: 70, conv: null };
        }
        if (p.core().key() === a.core().key())
            return { s: 90, conv: null };
        const pn = coreName(p);
        const an = coreName(a);
        if (a.dims.length && !a.isBox() && p.ptr > 0 && pn === an && p.ptr === a.ptr + 1) {
            return { s: 90, conv: null };
        }
        if (a.dims.length && !a.isBox() && p.ptr > 0 && pn === "void")
            return { s: 70, conv: null };
        if (p.isFunc && a.isFunc) {
            if (funcSigMatch(cx, p, a))
                return { s: 90, conv: null };
            return NOMATCH;
        }
        if (p.isFunc && cx.classes.has(cx.stripAll(a))) {
            const m = cx.lookupMember(cx.stripAll(a), "operator()", new Set());
            if (m.methods) {
                for (const f of m.methods) {
                    const ps = cx.funcParams(f);
                    if (ps.length === p.funcParams.length)
                        return { s: 60, conv: null };
                }
            }
        }
        const pFq = !p.dims.length && !p.isFunc ? cx.stripAll(p) : "";
        const aFq = !a.dims.length && !a.isFunc ? cx.stripAll(a) : "";
        if (pFq && aFq && cx.classes.has(pFq) && cx.classes.has(aFq) && isDerived(cx, aFq, pFq)) {
            if (p.ptr === a.ptr || (p.ref !== "" && a.ptr === 0) || (p.ptr === 0 && p.ref === "" && a.ptr === 0 && a.ref === "")) {
                return { s: 80, conv: null };
            }
        }
        if (p.ptr > 0 && a.ptr > 0 && (pn === "void" || an === "void") && p.ptr === a.ptr) {
            return { s: 70, conv: null };
        }
        if (cx.enums.has(pFq || pn) && CTJ.isIntegerName(an))
            return { s: 40, conv: null };
        if (cx.enums.has(aFq || an) && CTJ.isIntegerName(pn))
            return { s: 60, conv: null };
        if (cx.enums.has(pFq || pn) && cx.enums.has(aFq || an) && pn === an)
            return { s: 90, conv: null };
        if (CTJ.isNumericName(pn) && CTJ.isNumericName(an)) {
            if (pn === an)
                return { s: 90, conv: null };
            if (CTJ.isIntegerName(pn) && CTJ.isIntegerName(an))
                return { s: 60, conv: null };
            if (!CTJ.isIntegerName(pn) && !CTJ.isIntegerName(an))
                return { s: 60, conv: null };
            return { s: 50, conv: null };
        }
        if (pn === "bool" && CTJ.isNumericName(an))
            return { s: 40, conv: null };
        if (CTJ.isNumericName(pn) && an === "bool")
            return { s: 40, conv: null };
        if (pn === "bool" && a.ptr > 0)
            return { s: 40, conv: null };
        if (a.name === "__initlist" && p.ptr === 0 && !p.isFunc) {
            const cls = cx.classes.get(cx.stripAll(p));
            if (cls && cls.fromTmpl && CTJ.last(cls.fromTmpl.split("::")) === "initializer_list") {
                return { s: 85, conv: null };
            }
            return NOMATCH;
        }
        if (p.name === "__initlist" || a.name === "__initlist")
            return NOMATCH;
        if (allowConv) {
            const c = findConversion(cx, a, p, scope);
            if (c)
                return { s: 30, conv: c };
        }
        return NOMATCH;
    }
    CTJ.matchScore = matchScore;
    function funcSigMatch(cx, p, a) {
        void cx;
        if (p.funcVariadic !== a.funcVariadic)
            return false;
        if (p.funcParams.length !== a.funcParams.length)
            return false;
        if (p.ret.key() !== a.ret.key())
            return false;
        for (let i = 0; i < p.funcParams.length; i++) {
            if (p.funcParams[i].key() !== a.funcParams[i].key())
                return false;
        }
        return true;
    }
    function findConversion(cx, from, to, scope) {
        const toFq = !to.isBox() && !to.dims.length && !to.isFunc ? cx.stripAll(to) : "";
        if (toFq && cx.classes.has(toFq) && !(cx.stripAll(from) === toFq && !from.isBox())) {
            const cls = cx.classes.get(toFq);
            const ctors = cls.methods.get("#ctor") || [];
            for (const f of ctors) {
                if (f.decl.flags.includes("explicit"))
                    continue;
                const ps = cx.funcParams(f);
                if (ps.length !== 1 || ps[0].variadic)
                    continue;
                const m = matchScore(cx, ps[0].type, from, null, scope, false);
                if (m.s > 0)
                    return { kind: "ctor", fn: f };
            }
        }
        const fromFq = !from.isBox() && !from.dims.length && !from.isFunc ? cx.stripAll(from) : "";
        if (fromFq && cx.classes.has(fromFq)) {
            const cls = cx.classes.get(fromFq);
            const wrap = [];
            for (const fns of cls.methods.values()) {
                for (const f of fns) {
                    if (f.isConv)
                        wrap.push(f);
                }
            }
            for (const f of wrap) {
                if (f.decl.flags.includes("explicit"))
                    continue;
                const rt = cx.funcRet(f);
                const m = matchScore(cx, to, rt, null, scope, false);
                if (m.s > 0)
                    return { kind: "conv", fn: f };
            }
        }
        return null;
    }
    CTJ.findConversion = findConversion;
    function findOperator(cx, op, l, r, scope, t, postfix = false) {
        const key = "operator" + op;
        const argsLR = [];
        if (l)
            argsLR.push(l);
        if (r)
            argsLR.push(r);
        if (postfix) {
            argsLR.push({ t: CTJ.CppType.basic("int"), e: { kind: "lit", lkind: "int", value: "0", file: t.file, line: t.line } });
        }
        let best = null;
        const consider = (cands, tmpls, args) => {
            if (!cands.length && !tmpls.length)
                return;
            try {
                const rr = resolveOverload(cx, cands, tmpls, args, scope, t);
                let sc = 0;
                const ps = cx.funcParams(rr.fn);
                args.forEach((a, i) => {
                    if (i < ps.length)
                        sc += matchScore(cx, ps[i].type, a.t, a.e, scope, true).s;
                });
                if (!best || sc > best.score)
                    best = { fn: rr.fn, convs: rr.convs, score: sc };
            }
            catch (er) {
            }
        };
        if (l && isClassVal(cx, l.t)) {
            const fq = cx.stripAll(l.t);
            const m = cx.lookupMember(fq, key, new Set());
            const tmpls = [];
            for (const tm of cx.tmplsOf(fq + "::" + key))
                if (!tmpls.includes(tm))
                    tmpls.push(tm);
            consider(m.methods ? m.methods.slice() : [], tmpls, r ? [r] : (postfix ? [{ t: CTJ.CppType.basic("int"), e: argsLR[1].e }] : []));
        }
        const cands = [];
        const tmpls = [];
        for (const ns of assocNs(cx, l ? l.t : null, r ? r.t : null, scope)) {
            const idx = cx.nsFuncIndex.get(ns) || [];
            for (const f of idx) {
                if (f.short === key)
                    cands.push(f);
            }
            for (const tm of cx.tmplsOf(ns ? ns + "::" + key : key)) {
                if (tm.kind === "func" && !tmpls.includes(tm))
                    tmpls.push(tm);
            }
        }
        consider(cands, tmpls, argsLR);
        if (!best)
            return null;
        const b = best;
        cx.markFunc(b.fn);
        return { fn: b.fn, convs: b.convs };
    }
    CTJ.findOperator = findOperator;
    function assocNs(cx, l, r, scope) {
        const out = [];
        const push = (ns) => {
            ns = cx.resolveNsAlias(ns);
            if (!out.includes(ns))
                out.push(ns);
            const ni = cx.nss.get(ns);
            if (ni) {
                for (const u of ni.usingNs)
                    push(u);
                for (const u of ni.inlineNs)
                    push(u);
            }
        };
        for (const t of [l, r]) {
            if (!t)
                continue;
            const fq = cx.stripAll(t);
            if (cx.classes.has(fq) || cx.enums.has(fq)) {
                push(cx.nsOfFq(fq));
            }
        }
        for (let i = scope.ns.length; i >= 0; i--)
            push(scope.ns.slice(0, i).join("::"));
        return out;
    }
    function isDerived(cx, from, to) {
        if (from === to)
            return true;
        const seen = new Set();
        const queue = [from];
        while (queue.length) {
            const cur = queue.shift();
            if (cur === to)
                return true;
            if (seen.has(cur))
                continue;
            seen.add(cur);
            const cls = cx.classes.get(cur);
            if (!cls)
                continue;
            for (const b of cls.bases)
                queue.push(b.fq);
        }
        return false;
    }
    CTJ.isDerived = isDerived;
    function coreName(t) {
        if (!t.segs.length)
            return t.name;
        return CTJ.last(t.segs).n;
    }
    CTJ.coreName = coreName;
    function isClassVal(cx, t) {
        if (t.isBox() || t.dims.length > 0 || t.isFunc)
            return false;
        return cx.classes.has(cx.stripAll(t));
    }
    CTJ.isClassVal = isClassVal;
    function isClassBox(cx, t) {
        if (!t.isBox() || t.dims.length > 0 || t.isFunc)
            return false;
        return cx.classes.has(cx.stripAll(t));
    }
    CTJ.isClassBox = isClassBox;
    function classOf(cx, t) {
        if (t.isFunc)
            return "";
        const fq = cx.stripAll(t);
        if (cx.classes.has(fq))
            return fq;
        return "";
    }
    CTJ.classOf = classOf;
    function isIntegerish(cx, t) {
        void cx;
        const c = t.ref ? noRef(t) : t;
        return !c.isBox() && !c.dims.length && !c.isFunc && CTJ.isIntegerName(coreName(c));
    }
    function isNumericish(cx, t) {
        const c = t.ref ? noRef(t) : t;
        if (c.isBox() || c.dims.length || c.isFunc)
            return false;
        return CTJ.isNumericName(coreName(c)) || cx.enums.has(cx.stripAll(c));
    }
    function promoteUnary(cx, t) {
        void cx;
        const n = coreName(t);
        if (["bool", "char", "signed char", "unsigned char", "short", "unsigned short"].includes(n)) {
            return CTJ.CppType.basic("int");
        }
        if (CTJ.isNumericName(n))
            return CTJ.CppType.basic(n);
        if (cx.enums.has(cx.stripAll(t)))
            return CTJ.CppType.basic("int");
        return CTJ.CppType.basic(n);
    }
    function promote(cx, a, b) {
        a = noRef(a);
        b = noRef(b);
        const an = coreName(a);
        const bn = coreName(b);
        const ae = cx.enums.has(cx.stripAll(a));
        const be = cx.enums.has(cx.stripAll(b));
        if ((!CTJ.isNumericName(an) && !ae) || (!CTJ.isNumericName(bn) && !be))
            return null;
        if (a.ptr > 0 || b.ptr > 0 || a.isBox() || b.isBox())
            return null;
        if (a.dims.length || b.dims.length)
            return null;
        const rank = (n, isEnum) => {
            if (isEnum)
                return 5;
            switch (n) {
                case "long double": return 14;
                case "double": return 13;
                case "float": return 12;
                case "unsigned long long": return 11;
                case "long long": return 10;
                case "unsigned long": return 9;
                case "long": return 8;
                case "unsigned int": return 7;
                case "int": return 6;
                default: return 5;
            }
        };
        const r = Math.max(rank(an, ae), rank(bn, be));
        const names = ["", "", "", "", "", "int", "int", "unsigned int", "long", "unsigned long", "long long", "unsigned long long", "float", "double", "long double"];
        return CTJ.CppType.basic(names[r]);
    }
    CTJ.promote = promote;
    function markBoxedOf(cx, e) {
        let cur = e;
        while (cur.kind === "cast")
            cur = cur.arg;
        if (cur.kind === "id") {
            const s = cx.getAnn(cur).sym;
            // A field is stored in its object, so it has no boxing convention of its own.
            if (s && s.k === "var" && !s.v.isField) {
                if (s.v.storage === "plain")
                    s.v.storage = "boxed";
                else if (s.v.storage === "box" && !(s.v.typeCache && s.v.typeCache.ref))
                    s.v.storage = "bbox";
            }
            return;
        }
        if (cur.kind === "member") {
            markBoxedOf(cx, cur.obj);
            return;
        }
        if (cur.kind === "index") {
            markBoxedOf(cx, cur.arr);
            return;
        }
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const MATH_BUILTINS = new Set([
        "__builtin_sqrt", "__builtin_sqrtf", "__builtin_sqrtl", "__builtin_cbrt",
        "__builtin_sin", "__builtin_cos", "__builtin_tan", "__builtin_asin",
        "__builtin_acos", "__builtin_atan", "__builtin_atan2", "__builtin_exp",
        "__builtin_exp2", "__builtin_log", "__builtin_log10", "__builtin_log2",
        "__builtin_pow", "__builtin_floor", "__builtin_floorf", "__builtin_ceil",
        "__builtin_ceilf", "__builtin_round", "__builtin_trunc", "__builtin_fabs",
        "__builtin_fabsf", "__builtin_fabsl", "__builtin_fmod", "__builtin_copysign",
        "__builtin_fmin", "__builtin_fmax", "__builtin_hypot", "__builtin_sinh",
        "__builtin_cosh", "__builtin_tanh", "__builtin_nan", "__builtin_nanf",
        "__builtin_nans", "__builtin_inf", "__builtin_inff", "__builtin_huge_val",
    ]);
    function isMathBuiltin(name) {
        return MATH_BUILTINS.has(name);
    }
    CTJ.isMathBuiltin = isMathBuiltin;
    function builtinCall(cx, e, name, argTs, scope) {
        cx.getAnn(e).call = { builtin: name };
        const voidPtr = () => {
            const t = CTJ.CppType.basic("void");
            t.ptr = 1;
            return t;
        };
        if (name === "__builtin_expect" || name === "__builtin_expect_with_probability") {
            if (!argTs.length)
                cx.fail(`${name} needs arguments`, e);
            return argTs[0].t;
        }
        if (name === "__builtin_choose_expr") {
            if (argTs.length !== 3)
                cx.fail("__builtin_choose_expr needs 3 arguments", e);
            const c = constEval(cx, e.args[0], scope);
            return argTs[c ? 1 : 2].t;
        }
        if (name === "__builtin_constant_p")
            return CTJ.CppType.basic("int");
        if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
            return CTJ.CppType.basic("void");
        }
        if (name === "__builtin_memcpy" || name === "__builtin_memmove" || name === "__builtin_memset") {
            return voidPtr();
        }
        if (name === "__builtin_memcmp")
            return CTJ.CppType.basic("int");
        if (name === "__builtin_strlen" || name === "__builtin_strcmp" || name === "__builtin_strncmp") {
            return CTJ.CppType.basic(name === "__builtin_strlen" ? "unsigned long" : "int");
        }
        if (name === "__builtin_strcpy" || name === "__builtin_strncpy" || name === "__builtin_strcat" || name === "__builtin_strchr") {
            const t = CTJ.CppType.basic("char");
            t.ptr = 1;
            return t;
        }
        if (name === "__builtin_offsetof") {
            cx.warn("__builtin_offsetof approximated as 0", e);
            return CTJ.CppType.basic("unsigned int");
        }
        if (name === "__builtin_va_start" || name === "__builtin_va_end" || name === "__builtin_va_copy" || name === "va_arg") {
            cx.fail("C varargs are not supported", e);
        }
        if (name === "__builtin_types_compatible_p")
            return CTJ.CppType.basic("int");
        if (name === "__builtin_alloca")
            return voidPtr();
        if (name === "__builtin_frame_address" || name === "__builtin_return_address" || name === "__builtin_extract_return_addr") {
            cx.warn(`${name} is not supported, stubbed as null`, e);
            return voidPtr();
        }
        if (name === "__builtin_clz" || name === "__builtin_ctz" || name === "__builtin_popcount" ||
            name === "__builtin_ffs" || name === "__builtin_parity" || name === "__builtin_bswap16" ||
            name === "__builtin_bswap32" || name === "__builtin_bswap64") {
            return CTJ.CppType.basic("int");
        }
        if (name === "__builtin_add_overflow" || name === "__builtin_sub_overflow" || name === "__builtin_mul_overflow") {
            cx.warn(`${name} approximated as false`, e);
            return CTJ.CppType.basic("bool");
        }
        if (MATH_BUILTINS.has(name))
            return CTJ.CppType.basic("double");
        if (name === "__builtin_FILE") {
            const t = CTJ.CppType.basic("char");
            t.ptr = 1;
            return t;
        }
        if (name === "__builtin_LINE")
            return CTJ.CppType.basic("int");
        if (name === "__builtin_FUNCTION") {
            const t = CTJ.CppType.basic("char");
            t.ptr = 1;
            return t;
        }
        cx.warn(`unknown ${name}, stubbed`, e);
        return CTJ.CppType.basic("__any");
    }
    CTJ.builtinCall = builtinCall;
    let lambdaCount = 0;
    function analyzeLambda(cx, e, scope) {
        const fq = "$lambda_" + (lambdaCount++);
        const emptyCls = {
            kind: "class", name: fq, cls: "struct", bases: [], members: [],
            isDeclOnly: false, specArgs: [], isPartialSpec: false, file: e.file, line: e.line,
        };
        const cls = cx.blankCls(fq, fq, emptyCls, scope);
        cls.complete = true;
        cls.isLambda = true;
        cls.mangled = fq;
        cx.classes.set(fq, cls);
        const decl = {
            kind: "func", name: [CTJ.qseg("operator")], ret: e.ret, params: e.params,
            body: [{ kind: "compound", stmts: e.body, file: e.file, line: e.line }],
            flags: e.mutable ? [] : ["const"], op: "()", ctorInit: [],
            isCtor: false, isDtor: false, isConv: false, isDefault: false,
            isDelete: false, trailing: null, file: e.file, line: e.line,
        };
        const fn = cx.addMethod(cls, "operator()", decl, scope);
        fn.analyzed = true;
        const sub = cx.snapScope(scope);
        sub.fn = fn;
        sub.locals.push(new Map());
        const outer = new Set();
        for (const layer of scope.locals) {
            for (const [k, v] of layer) {
                if (!sub.locals[0].has(k))
                    sub.locals[0].set(k, v);
                outer.add(v);
            }
        }
        const params = cx.funcParams(fn);
        params.forEach((p, i) => {
            const node = decl.params[i];
            const nm = p.name || "$p" + i;
            const v = {
                fq: fq + "::" + nm, short: nm, mangled: CTJ.safeJsName(nm),
                decl: {
                    kind: "var", name: [CTJ.qseg(nm)], type: node ? node.type : CTJ.typeNode([]),
                    init: null, directInit: null, flags: [], bitfield: null, isParam: true, file: e.file, line: e.line,
                },
                scope: sub, typeCache: p.type, storage: CTJ.isBoxedVar(p.type) ? "box" : "plain",
                isGlobal: false, isStatic: false, isParam: true, isField: false, lifted: false, referenced: true,
            };
            if (node)
                cx.getAnn(node).var = v;
            sub.locals[0].set(nm, v);
        });
        for (const s of e.body)
            CTJ.annotateStmt(cx, s, sub);
        const used = new Set();
        for (const s of e.body)
            collectOuterIds(cx, s, outer, used);
        const caps = [];
        for (const v of used) {
            if (v.isGlobal)
                continue;
            let mode = "";
            const ex = e.captures.find(c => c.name === v.short);
            if (ex)
                mode = ex.mode;
            else if (e.defCapture === "=" || e.defCapture === "&")
                mode = e.defCapture;
            else
                cx.fail(`'${v.short}' is not captured`, e);
            caps.push({ name: v.short, mode, v });
        }
        if (usesThis(e))
            caps.push({ name: "this", mode: "this", v: null });
        cx.getAnn(e).caps = caps;
        if (!e.ret) {
            fn.retCache = sub.returns.length ? sub.returns[0] : CTJ.CppType.basic("void");
        }
        else {
            fn.retCache = cx.resolveTypeNode(e.ret, scope);
        }
        return CTJ.classType(cls);
    }
    CTJ.analyzeLambda = analyzeLambda;
    function usesThis(e) {
        let found = false;
        const walk = (x) => {
            if (found || !x || typeof x !== "object")
                return;
            if (x.kind === "this") {
                found = true;
                return;
            }
            for (const k of Object.keys(x)) {
                const v = x[k];
                if (Array.isArray(v)) {
                    for (const u of v)
                        walk(u);
                }
                else if (v && typeof v === "object")
                    walk(v);
            }
        };
        for (const s of e.body)
            walk(s);
        return found;
    }
    function collectOuterIds(cx, s, outer, used) {
        const walk = (x) => {
            if (!x || typeof x !== "object")
                return;
            const a = cx.ann.get(x);
            if (a && a.sym && a.sym.k === "var" && outer.has(a.sym.v))
                used.add(a.sym.v);
            for (const k of Object.keys(x)) {
                if (k === "type" || k === "ret" || k === "trailing")
                    continue;
                const v = x[k];
                if (Array.isArray(v)) {
                    for (const u of v)
                        walk(u);
                }
                else if (v && typeof v === "object")
                    walk(v);
            }
        };
        walk(s);
    }
    // A class and everything it derives from.
    function eachCls(cx, fq, seen, fn) {
        if (seen.has(fq))
            return true;
        seen.add(fq);
        const c = cx.classes.get(fq);
        if (!c)
            return true;
        if (!fn(c))
            return false;
        for (const b of c.bases)
            if (!eachCls(cx, b.fq, seen, fn))
                return false;
        return true;
    }
    function hasVirtualMethod(cx, fq, pure) {
        let found = false;
        eachCls(cx, fq, new Set(), c => {
            for (const list of c.methods.values()) {
                for (const f of list) {
                    if (f.isVirtual && (!pure || f.isPure)) {
                        found = true;
                        return false;
                    }
                }
            }
            return true;
        });
        return found;
    }
    // Scalars, enums and the classes built only out of them: what the layout
    // traits ask about, judged from the shape that was collected.
    function isPlainType(cx, t, seen) {
        const c = cx.classes.get(t.name);
        if (!c)
            return true;
        if (seen.has(t.name))
            return true;
        seen.add(t.name);
        if (c.isUnion)
            return true;
        if (hasVirtualMethod(cx, c.fq, false))
            return false;
        for (const n of c.fields.keys()) {
            if (c.fieldStatic.has(n))
                continue;
            const ft = cx.fieldType(c, n);
            if (ft.ptr === 0 && ft.ref === "" && !isPlainType(cx, ft, seen))
                return false;
        }
        return true;
    }
    // <type_traits> is written with the compiler's __is_* builtins. The transpiler
    // collected every class it read, so it can answer them itself.
    function typeTrait(cx, nm, args, scope) {
        const ts = [];
        for (const a of args) {
            if (a.kind !== "id")
                return null;
            const tn = {
                kind: "type", parts: a.parts, global: a.global, ptr: 0, ref: "", cnst: false,
                dims: [], func: null, decltypeOf: null, packExpand: false, valueArg: null,
                file: a.file, line: a.line,
            };
            try {
                ts.push(cx.resolveTypeNode(tn, scope));
            }
            catch {
                return null;
            }
        }
        if (!ts.length)
            return null;
        const cls = cx.classes.get(ts[0].name) || null;
        switch (nm) {
            case "__is_enum": return cx.enums.has(ts[0].name) ? 1 : 0;
            case "__is_union": return cls && cls.isUnion ? 1 : 0;
            case "__is_class": return cls && !cls.isUnion ? 1 : 0;
            case "__is_polymorphic": return cls && hasVirtualMethod(cx, cls.fq, false) ? 1 : 0;
            case "__is_abstract": return cls && hasVirtualMethod(cx, cls.fq, true) ? 1 : 0;
            case "__is_empty": {
                if (!cls || cls.isUnion || hasVirtualMethod(cx, cls.fq, false))
                    return 0;
                let empty = true;
                eachCls(cx, cls.fq, new Set(), c => {
                    for (const n of c.fields.keys()) {
                        if (!c.fieldStatic.has(n)) {
                            empty = false;
                            return false;
                        }
                    }
                    return true;
                });
                return empty ? 1 : 0;
            }
            case "__is_pod":
            case "__is_trivial":
            case "__is_standard_layout":
            case "__is_literal_type":
                return ts[0].ptr === 0 && ts[0].dims.length === 0 && isPlainType(cx, ts[0], new Set()) ? 1 : 0;
            case "__is_base_of": {
                if (ts.length < 2)
                    return null;
                const base = cx.classes.get(ts[0].name);
                const d = cx.classes.get(ts[1].name);
                if (!base || !d)
                    return 0;
                if (base.fq === d.fq)
                    return base.isUnion ? 0 : 1;
                let hit = false;
                eachCls(cx, d.fq, new Set(), c => {
                    if (c.fq !== d.fq && c.fq === base.fq) {
                        hit = true;
                        return false;
                    }
                    return true;
                });
                return hit ? 1 : 0;
            }
            default: return null;
        }
    }
    // "static const size_type npos" carries its constness in the type rather than
    // among the flags of the declaration.
    function isConstVar(cx, v) {
        if (v.decl.flags.includes("const") || v.decl.flags.includes("constexpr"))
            return true;
        try {
            const t = v.typeCache || cx.resolveTypeNode(v.decl.type, v.scope);
            return !!t && t.cnst;
        }
        catch {
            return false;
        }
    }
    function constEval(cx, e, scope) {
        return constEvalInner(cx, e, scope, new Set());
    }
    CTJ.constEval = constEval;
    function constEvalInner(cx, e, scope, seen) {
        var _a;
        switch (e.kind) {
            case "lit": {
                if (e.lkind === "int")
                    return CTJ.parseNumber(e.value);
                if (e.lkind === "char")
                    return CTJ.parseChar(e.value);
                if (e.lkind === "bool")
                    return e.value === "true" ? 1 : 0;
                if (e.lkind === "null")
                    return 0;
                return null;
            }
            case "id": {
                const s = cx.resolveSym(e.parts, e.global, scope);
                if (!s)
                    return null;
                if (s.k === "enumval") {
                    const vals = cx.enumValues(s.e);
                    return (_a = vals.get(s.item)) !== null && _a !== void 0 ? _a : null;
                }
                if (s.k === "var") {
                    const v = s.v;
                    if (v.fq && seen.has(v.fq))
                        return null;
                    if (isConstVar(cx, v)) {
                        const init = v.decl.init || (v.decl.directInit && v.decl.directInit[0]);
                        if (!init || init.kind === "initlist")
                            return null;
                        if (v.fq)
                            seen.add(v.fq);
                        return constEvalInner(cx, init, v.scope, seen);
                    }
                    return null;
                }
                return null;
            }
            case "unary": {
                const a = constEvalInner(cx, e.arg, scope, seen);
                if (typeof a !== "number")
                    return null;
                switch (e.op) {
                    case "+": return a;
                    case "-": return -a;
                    case "!": return a ? 0 : 1;
                    case "~": return ~a;
                    default: return null;
                }
            }
            case "binary": {
                const a = constEvalInner(cx, e.l, scope, seen);
                const b = constEvalInner(cx, e.r, scope, seen);
                if (typeof a !== "number" || typeof b !== "number")
                    return null;
                switch (e.op) {
                    case "+": return a + b;
                    case "-": return a - b;
                    case "*": return a * b;
                    case "/": return b === 0 ? null : Math.trunc(a / b);
                    case "%": return b === 0 ? null : a % b;
                    case "<<": return a << b;
                    case ">>": return a >> b;
                    case "&": return a & b;
                    case "|": return a | b;
                    case "^": return a ^ b;
                    case "&&": return a && b ? 1 : 0;
                    case "||": return a || b ? 1 : 0;
                    case "==": return a === b ? 1 : 0;
                    case "!=": return a !== b ? 1 : 0;
                    case "<": return a < b ? 1 : 0;
                    case ">": return a > b ? 1 : 0;
                    case "<=": return a <= b ? 1 : 0;
                    case ">=": return a >= b ? 1 : 0;
                    case ",": return b;
                    default: return null;
                }
            }
            case "noexcept":
                // The generated languages have no exception specification to violate and
                // no destructive move, so no expression here can throw. The traits use
                // this only to choose between moving and copying, which the output does
                // not distinguish.
                return 1;
            case "cond": {
                const c = constEvalInner(cx, e.c, scope, seen);
                if (typeof c !== "number")
                    return null;
                return constEvalInner(cx, c ? e.a : e.b, scope, seen);
            }
            case "cast": {
                if (!e.type)
                    return null;
                const t = cx.resolveTypeNode(e.type, scope);
                if (t.ptr > 0 || t.isFunc)
                    return null;
                // "_CharT()" value-initialises: the empty list stands for zero.
                if (e.arg.kind === "initlist" && !e.arg.items.length)
                    return 0;
                const a = constEvalInner(cx, e.arg, scope, seen);
                if (typeof a !== "number")
                    return a;
                // An unsigned value wraps, and the width is the 32-bit one: a JS number
                // cannot hold a 64-bit unsigned range.
                return CTJ.isUnsignedName(CTJ.coreName(t)) ? a >>> 0 : a;
            }
            case "call": {
                const nm = e.fn.kind === "id" && e.fn.parts.length === 1 ? e.fn.parts[0].n : "";
                if (!nm.startsWith("__is_"))
                    return null;
                return typeTrait(cx, nm, e.args, scope);
            }
            case "sizeof": {
                if (e.packName)
                    return null;
                let t = null;
                if (e.isType && e.type)
                    t = cx.resolveTypeNode(e.type, scope);
                else if (e.expr) {
                    try {
                        t = CTJ.typeOf(cx, e.expr, scope);
                    }
                    catch {
                        return null;
                    }
                }
                if (!t)
                    return null;
                try {
                    return constSizeof(cx, t, new Set());
                }
                catch {
                    return null;
                }
            }
            default:
                return null;
        }
    }
    function constSizeof(cx, t, seen) {
        if (t.ptr > 0 || t.ref !== "" || t.isFunc)
            return 8;
        if (t.dims.length) {
            const n = t.dims[0];
            if (n < 0)
                cx.fail("sizeof incomplete array");
            const e = new CTJ.CppType(t.name);
            e.segs = t.segs;
            e.dims = t.dims.slice(1);
            return n * constSizeof(cx, e, seen);
        }
        const n = CTJ.coreName(t);
        if (t.name === "__null")
            return 8;
        switch (n) {
            case "void":
                cx.fail("sizeof void");
                break;
            case "bool": return 1;
            case "char":
            case "signed char":
            case "unsigned char": return 1;
            case "wchar_t": return 4;
            case "char16_t": return 2;
            case "char32_t": return 4;
            case "short":
            case "unsigned short": return 2;
            case "int":
            case "unsigned int": return 4;
            case "long":
            case "unsigned long": return 8;
            case "long long":
            case "unsigned long long": return 8;
            case "float": return 4;
            case "double":
            case "long double": return 8;
            default: break;
        }
        const fq = cx.stripAll(t);
        if (cx.enums.has(fq))
            return 4;
        const cls = cx.classes.get(fq);
        if (!cls || !cls.complete)
            cx.fail(`sizeof incomplete type '${fq}'`);
        if (seen.has(fq))
            cx.fail(`sizeof recursive type '${fq}'`);
        seen.add(fq);
        let size = 0;
        let virt = false;
        const c = cls;
        for (const b of c.bases) {
            if (b.isVirtual)
                size += 8;
            else
                size += constSizeof(cx, CTJ.classType(cx.classes.get(b.fq)), seen);
        }
        for (const fns of c.methods.values()) {
            for (const f of fns) {
                if (f.isVirtual)
                    virt = true;
            }
        }
        if (virt)
            size += 8;
        if (c.isUnion) {
            let mx = 0;
            for (const [name] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                mx = Math.max(mx, constSizeof(cx, cx.fieldType(c, name), seen));
            }
            size += mx;
        }
        else {
            for (const [name] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                size += constSizeof(cx, cx.fieldType(c, name), seen);
            }
        }
        seen.delete(fq);
        return size || 1;
    }
    CTJ.constSizeof = constSizeof;
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const OP_METHOD = {
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
    function methodJsName(fn) {
        if (fn.short === "#ctor")
            return "constructor";
        if (fn.short === "#dtor")
            return "__dtor";
        const suf = fn.isConst && !fn.isStatic ? "__c" : "";
        if (fn.short.startsWith("#conv:"))
            return "op_conv_" + CTJ.safeJsName(fn.short.slice(6)) + suf;
        if (fn.short.startsWith("operator")) {
            const op = fn.short.slice(8);
            if (OP_METHOD[op])
                return OP_METHOD[op] + suf;
        }
        if (fn.short === "operator()")
            return "op_call" + suf;
        return CTJ.safeJsName(fn.short) + suf;
    }
    CTJ.methodJsName = methodJsName;
    function isBoxLike(t) {
        return (t.isBox() || t.dims.length > 0) && !t.isFunc;
    }
    CTJ.isBoxLike = isBoxLike;
    function emitJs(cx) {
        const g = new JsGen(cx);
        return g.run();
    }
    CTJ.emitJs = emitJs;
    class JsGen {
        constructor(cx) {
            this.out = [];
            this.ind = "";
            this.tmpN = 0;
            this.tmpBase = 0;
            this.alias = [];
            this.exStack = [];
            this.rangeN = 0;
            this.fnStack = [];
            this.cx = cx;
        }
        run() {
            this.line(`"use strict";`);
            for (const c of this.sortClasses()) {
                if (!c.referenced || c.isLambda)
                    continue;
                this.emitClass(c);
            }
            for (const list of this.cx.funcs.values()) {
                for (const f of list) {
                    if (f.isMethod || !f.referenced)
                        continue;
                    this.emitFunc(f);
                }
            }
            const gbase = this.tmpN;
            const glines = [];
            const save = this.out;
            this.out = glines;
            for (const v of this.cx.vars.values())
                this.emitGlobal(v);
            this.out = save;
            if (this.tmpN > gbase)
                this.line(this.tmpDecl(gbase, this.tmpN));
            for (const l of glines)
                this.out.push(l);
            const mains = this.cx.funcs.get("main") || [];
            const main = mains.find(f => !f.isMethod && f.referenced);
            if (main) {
                const ps = this.cx.funcParams(main);
                const args = ps.length >= 3 ? ["0", `{a: [], i: 0}`, "null"] : ps.length === 2 ? ["0", `{a: [], i: 0}`] : ps.length === 1 ? ["0"] : [];
                this.line(`main(${args.join(", ")});`);
            }
            return this.out.join("\n") + "\n";
        }
        sortClasses() {
            const cs = [...this.cx.classes.values()].filter(c => c.complete && c.referenced && !c.isLambda);
            const idx = new Map();
            for (const c of cs)
                idx.set(c.fq, c);
            const deps = new Map();
            for (const c of cs) {
                const d = new Set();
                for (const b of c.bases)
                    if (idx.has(b.fq))
                        d.add(b.fq);
                for (const [name] of c.fields) {
                    const fq = this.cx.stripAll(this.cx.fieldType(c, name));
                    if (idx.has(fq) && fq !== c.fq)
                        d.add(fq);
                }
                deps.set(c.fq, d);
            }
            const done = new Set();
            const res = [];
            while (res.length < cs.length) {
                let next = null;
                for (const c of cs) {
                    if (done.has(c.fq))
                        continue;
                    const d = deps.get(c.fq);
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
                done.add(next.fq);
                res.push(next);
            }
            return res;
        }
        line(s) {
            this.out.push(this.ind + s);
        }
        block(head, fn) {
            this.line(head + " {");
            this.ind += "  ";
            fn();
            this.ind = this.ind.slice(0, -2);
            this.line("}");
        }
        tmp() {
            return `$t${this.tmpN++}`;
        }
        // The temporaries a body needs are only known once it has been emitted, so
        // the body goes into a buffer and the declarations follow the signature.
        withTmpDecl(signature, body) {
            const base = this.tmpN;
            const save = this.out;
            const lines = [];
            this.out = lines;
            this.ind += "  ";
            body();
            this.ind = this.ind.slice(0, -2);
            this.out = save;
            this.line(signature);
            this.ind += "  ";
            if (this.tmpN > base)
                this.line(this.tmpDecl(base, this.tmpN));
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        tmpDecl(a, b) {
            const ns = [];
            for (let i = a; i < b; i++)
                ns.push(`$t${i}`);
            return `let ${ns.join(", ")};`;
        }
        emitClass(c) {
            const cn = c.mangled;
            const base = c.bases.length ? this.cx.classes.get(c.bases[0].fq).mangled : "";
            this.block(base ? `class ${cn} extends ${base}` : `class ${cn}`, () => {
                for (const [name] of c.fields) {
                    if (!c.fieldStatic.has(name))
                        this.line(`${CTJ.safeJsName(name)};`);
                }
                const ctors = (c.methods.get("#ctor") || []).filter(f => f.referenced);
                const inherited = this.inheritedCtors(c);
                if (ctors.length || inherited.length || c.fields.size || c.bases.length)
                    this.emitCtor(c, ctors, inherited);
                this.emitDtor(c);
                for (const [key, fns] of c.methods) {
                    if (key === "#ctor")
                        continue;
                    if (key === "#dtor")
                        continue;
                    this.emitMethod(c, fns);
                }
                for (const [name, fd] of c.fields) {
                    if (!c.fieldStatic.has(name))
                        continue;
                    const ft = this.cx.fieldType(c, name);
                    const init = fd.init || (fd.directInit ? null : null);
                    if (init) {
                        const folded = this.foldStaticConst(c, ft, fd, init);
                        this.line(`static ${CTJ.safeJsName(name)} = ${folded !== null ? folded : this.argFor(ft, init, null)};`);
                    }
                    else if (fd.directInit && fd.directInit.length) {
                        const a = this.cx.getAnn(fd);
                        if (a.call) {
                            this.line(`static ${CTJ.safeJsName(name)} = ${this.ctorExpr(cn, a.call, fd.directInit, a.convs, ft)};`);
                        }
                        else {
                            this.line(`static ${CTJ.safeJsName(name)} = ${this.ex(fd.directInit[0])};`);
                        }
                    }
                    else if (isBoxLike(ft)) {
                        this.line(`static ${CTJ.safeJsName(name)} = null;`);
                    }
                    else if (!ft.dims.length && !ft.isBox() && !ft.isFunc && this.cx.classes.has(this.cx.stripAll(ft))) {
                        const a = this.cx.getAnn(fd);
                        this.line(`static ${CTJ.safeJsName(name)} = ${a.call ? this.ctorExpr(cn, a.call, [], [], ft) : `new ${cn}()`};`);
                    }
                    else if (ft.dims.length) {
                        this.line(`static ${CTJ.safeJsName(name)} = ${this.arrayNew(ft, [])};`);
                    }
                    else {
                        this.line(`static ${CTJ.safeJsName(name)} = ${this.zero(ft)};`);
                    }
                }
            });
            for (let i = 1; i < c.bases.length; i++) {
                const b = this.cx.classes.get(c.bases[i].fq).mangled;
                this.line(`for (const $k of Object.getOwnPropertyNames(${b}.prototype)) {`);
                this.line(`  if ($k !== "constructor" && !($k in ${cn}.prototype)) ${cn}.prototype[$k] = ${b}.prototype[$k];`);
                this.line(`}`);
                this.line(`for (const $k of Object.getOwnPropertyNames(${b})) {`);
                this.line(`  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in ${cn})) ${cn}[$k] = ${b}[$k];`);
                this.line(`}`);
            }
        }
        inheritedCtors(c) {
            const res = [];
            const seen = new Set();
            for (const b of c.usingBase.values()) {
                if (seen.has(b))
                    continue;
                seen.add(b);
                const bc = this.cx.classes.get(b);
                if (!bc)
                    continue;
                for (const f of bc.methods.get("#ctor") || []) {
                    if (f.referenced)
                        res.push({ fn: f, base: b });
                }
            }
            return res;
        }
        emitCtor(c, ctors, inherited) {
            const cn = c.mangled;
            const all = [];
            for (const f of ctors)
                all.push({ fn: f, inh: "" });
            for (const h of inherited)
                all.push({ fn: h.fn, inh: h.base });
            // The base arguments are expressions written in the constructor's own
            // scope, where its parameters are the incoming $a.
            const baseArgs = (bi, fn, inh) => {
                this.alias.push(new Map());
                this.cx.funcParams(fn).forEach((p, i) => {
                    if (!p.variadic && p.name)
                        this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
                });
                const r = baseArgsOf(bi, fn, inh);
                this.alias.pop();
                return r;
            };
            const baseArgsOf = (bi, fn, inh) => {
                const b = c.bases[bi];
                const bc = this.cx.classes.get(b.fq);
                const bn = bc.mangled;
                void bn;
                const list = fn.decl.ctorInit;
                const hit = !inh ? list.find(x => CTJ.last(x.name).n === bc.short || CTJ.last(x.name).n === b.fq) : null;
                if (inh && b.fq === inh) {
                    const ps = this.cx.funcParams(fn);
                    const aa = [];
                    for (let i = 0; i < ps.length && !ps[i].variadic; i++)
                        aa.push(this.ctorArg(ps[i], i));
                    return `...(function () { return [${aa.join(", ")}]; })()`;
                }
                if (hit) {
                    const a = this.cx.getAnn(hit);
                    if (a.call)
                        return `...[${hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call)[i].type, x, a.convs[i])).join(", ")}]`;
                    if (hit.args.length === 1)
                        return `...[${this.ex(hit.args[0])}]`;
                    return "";
                }
                return "";
            };
            this.line(`constructor(...$a) {`);
            this.ind += "  ";
            if (c.bases.length) {
                if (all.length <= 1) {
                    this.line(`super(${all.length ? baseArgs(0, all[0].fn, all[0].inh) : ""});`);
                }
                else {
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
            this.withTmpDecl(`__init_${cn}(...$a) {`, () => {
                if (all.length <= 1) {
                    if (all.length)
                        this.ctorBranch(c, all[0].fn, all[0].inh);
                    else
                        this.ctorDefault(c);
                    return;
                }
                // An "instanceof" guard is exact while the one for a pointer or reference
                // only tells an object from a number, so a branch that names a class has
                // to be tried before one that takes a box.
                const exact = (fn) => this.cx.funcParams(fn).some(p => this.typeCheck("$", p.type).indexOf("instanceof") >= 0);
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
        matchCond(fn, _i, sib) {
            const ps = this.cx.funcParams(fn);
            const named = ps.filter(p => !p.variadic);
            const min = named.filter(p => !p.def).length;
            const parts = [`$a.length >= ${min}`, `$a.length <= ${named.length}`];
            named.forEach((p, i) => {
                const v = `$a[${i}]`;
                const chk = this.typeCheck(v, p.type);
                if (chk)
                    parts.push(chk);
                // A pointer or reference arrives as an {a, i} pair, which "typeof" cannot
                // tell apart from the object of a sibling overload.
                if (sib && (p.type.ptr > 0 || p.type.ref) && !p.type.isFunc) {
                    for (const c of sib.get(v) || [])
                        parts.push(`!(${v} instanceof ${c})`);
                }
            });
            return parts.join(" && ");
        }
        // For every overload, the classes its siblings name at each argument index.
        siblingClasses(all) {
            return all.map((fn, k) => {
                const m = new Map();
                all.forEach((other, j) => {
                    if (j === k)
                        return;
                    this.cx.funcParams(other).filter(p => !p.variadic).forEach((p, i) => {
                        const t = p.type;
                        if (t.isBox() || t.dims.length || t.isFunc)
                            return;
                        const c = this.cx.classes.get(this.cx.stripAll(t));
                        if (!c)
                            return;
                        const v = `$a[${i}]`;
                        const list = m.get(v) || [];
                        if (!list.includes(c.mangled))
                            list.push(c.mangled);
                        m.set(v, list);
                    });
                });
                return m;
            });
        }
        typeCheck(v, t) {
            if (t.name === "__any")
                return "";
            if (t.isFunc)
                return `typeof ${v} === "function"`;
            if (t.isBox()) {
                if (t.ref && !t.ptr && !t.dims.length && !t.isFunc) {
                    const c = this.cx.classes.get(this.cx.stripAll(t));
                    if (c)
                        return `(${v} !== null && typeof ${v} === "object" && ${v}.a[${v}.i] instanceof ${c.mangled})`;
                }
                if (t.ptr > 0 || t.ref)
                    return `(${v} === null || typeof ${v} === "object")`;
                return "";
            }
            if (t.dims.length)
                return `Array.isArray(${v})`;
            const n = CTJ.coreName(t);
            if (n === "bool")
                return `typeof ${v} === "boolean"`;
            if (CTJ.isNumericName(n) || this.cx.enums.has(this.cx.stripAll(t)))
                return `(typeof ${v} === "number" || typeof ${v} === "boolean")`;
            const fq = this.cx.stripAll(t);
            if (this.cx.classes.has(fq))
                return `${v} instanceof ${this.cx.classes.get(fq).mangled}`;
            return "";
        }
        // A default argument is a value; a reference or pointer parameter takes a
        // box, so the default has to be wrapped like any other temporary.
        defArg(p) {
            const d = this.ex(p.def);
            return p.type.isBox() ? `{a: [${d}], i: 0}` : d;
        }
        ctorArg(p, i) {
            const v = `$a[${i}]`;
            if (p.def)
                return `(${v} === undefined ? (${this.defArg(p)}) : ${v})`;
            return v;
        }
        ctorBranch(c, fn, inh) {
            const ps = this.cx.funcParams(fn);
            this.alias.push(new Map());
            ps.forEach((p, i) => {
                if (!p.variadic && p.name)
                    this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
            });
            for (let bi = 1; bi < c.bases.length; bi++) {
                const b = c.bases[bi];
                const bc = this.cx.classes.get(b.fq);
                const bn = bc.mangled;
                const hit = !inh ? fn.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === b.fq) : null;
                if (inh && b.fq === inh) {
                    const aa = [];
                    ps.forEach((p, i) => { if (!p.variadic)
                        aa.push(this.ctorArg(p, i)); });
                    this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
                }
                else if (hit && hit.args.length) {
                    const a = this.cx.getAnn(hit);
                    const aa = hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call)[i].type, x, a.convs[i]));
                    this.line(`${bn}.prototype.__init_${bn}.call(this${aa.length ? ", " + aa.join(", ") : ""});`);
                }
                else {
                    this.line(`${bn}.prototype.__init_${bn}.call(this);`);
                }
            }
            for (const [name, fd] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                const ft = this.cx.fieldType(c, name);
                const hit = !inh ? fn.decl.ctorInit.find(x => CTJ.last(x.name).n === name) : null;
                this.line(`this.${CTJ.safeJsName(name)} = ${this.fieldInit(c, ft, fd, hit || null)};`);
            }
            if (!inh) {
                this.fnStack.push(fn);
                this.bodyStmts(fn.decl.body || []);
                this.fnStack.pop();
            }
            this.alias.pop();
        }
        ctorDefault(c) {
            for (let bi = 1; bi < c.bases.length; bi++) {
                const bn = this.cx.classes.get(c.bases[bi].fq).mangled;
                this.line(`${bn}.prototype.__init_${bn}.call(this);`);
            }
            for (const [name, fd] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                this.line(`this.${CTJ.safeJsName(name)} = ${this.fieldInit(c, this.cx.fieldType(c, name), fd, null)};`);
            }
        }
        fieldInit(c, ft, fd, hit) {
            if (hit) {
                const a = this.cx.getAnn(hit);
                if (a.call) {
                    const fcls = this.cx.stripAll(ft);
                    const cn = this.cx.classes.get(fcls).mangled;
                    const init = hit.args.length === 1 && hit.args[0].kind === "initlist" ? hit.args[0].items : hit.args;
                    return this.ctorExpr(cn, a.call, init, a.convs, ft);
                }
                if (hit.args.length)
                    return this.argFor(ft, hit.args[0], null);
            }
            if (fd.init)
                return this.argFor(ft, fd.init, null);
            if (fd.directInit && fd.directInit.length) {
                const a = this.cx.getAnn(fd);
                if (a.call) {
                    const fcls = this.cx.stripAll(ft);
                    const cn = this.cx.classes.get(fcls).mangled;
                    return this.ctorExpr(cn, a.call, fd.directInit, a.convs, ft);
                }
                return this.ex(fd.directInit[0]);
            }
            const a = this.cx.getAnn(fd);
            const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? this.cx.stripAll(ft) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                if (a.call)
                    return this.ctorExpr(cn, a.call, [], [], ft);
                return `new ${cn}()`;
            }
            if (ft.dims.length)
                return this.arrayNew(ft, []);
            if (isBoxLike(ft))
                return "null";
            return this.zero(ft);
        }
        ctorExpr(cn, fn, args, convs, _t) {
            const ps = this.cx.funcParams(fn);
            if (ps.length === 1 && this.isInitListParam(ps[0].type) && args.length === 1 && args[0].kind === "initlist") {
                const items = args[0].items.map(x => this.ex(x));
                return `new ${cn}([${items.join(", ")}])`;
            }
            const aa = args.map((x, i) => {
                const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
                if (pt && this.isInitListParam(pt) && x.kind === "initlist") {
                    return `[${x.items.map(y => this.ex(y)).join(", ")}]`;
                }
                return pt ? this.argFor(pt, x, convs[i] || null) : this.ex(x);
            });
            for (let i = args.length; i < ps.length && !ps[i].variadic; i++) {
                aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
            }
            return `new ${cn}(${aa.join(", ")})`;
        }
        isInitListParam(t) {
            return t.segs.length === 1 && t.segs[0].a.length === 1 && !t.isBox() && !t.dims.length;
        }
        emitDtor(c) {
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
                if (bc && bc.referenced)
                    this.line(`${bc.mangled}.prototype.__dtor.call(this);`);
            }
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        emitMethod(c, fns) {
            const use = fns.filter(f => f.referenced && ((f.decl.body || []).length || f.decl.flags.includes("pure")));
            if (!use.length)
                return;
            const groups = new Map();
            for (const f of use) {
                const k = methodJsName(f);
                if (!groups.has(k))
                    groups.set(k, []);
                groups.get(k).push(f);
            }
            for (const g of groups.values())
                this.emitMethodGroup(c, g);
        }
        emitMethodGroup(c, use) {
            void c;
            const m = methodJsName(use[0]);
            const pre = use[0].isStatic ? "static " : "";
            if (use.length === 1) {
                const fn = use[0];
                const ps = this.cx.funcParams(fn);
                const decl = [];
                ps.forEach((p, i) => {
                    const nm = p.name ? CTJ.safeJsName(p.name) : `$p${i}`;
                    if (p.variadic)
                        decl.push(`...${nm}_rest`);
                    else if (p.def)
                        decl.push(`${nm} = ${this.defArg(p)}`);
                    else
                        decl.push(nm);
                });
                const base = this.tmpN;
                const save = this.out;
                const lines = [];
                this.out = lines;
                this.ind += "  ";
                if (fn.decl.flags.includes("pure") && !(fn.decl.body || []).length) {
                    this.line(`throw new Error("pure virtual called");`);
                }
                else {
                    for (const b of fn.baseAssigns) {
                        this.line(`this.__assign_${this.cx.classes.get(b).mangled}.call(this, $p0);`);
                    }
                    this.fnStack.push(fn);
                    this.bodyStmts(fn.decl.body || []);
                    this.fnStack.pop();
                }
                this.ind = this.ind.slice(0, -2);
                this.out = save;
                this.line(`${pre}${m}(${decl.join(", ")}) {`);
                this.ind += "  ";
                if (this.tmpN > base)
                    this.line(this.tmpDecl(base, this.tmpN));
                this.boxParams(fn, ps);
                for (const l of lines)
                    this.out.push(l);
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
                        if (!p.variadic && p.name)
                            this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, j));
                    });
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
        // The allocation operators are declared by <new> with no body; storage comes
        // from the target language, and freeing is its business too. A placement
        // version hands back the pointer it was given.
        allocStub(f) {
            if (f.fq === "operatornew" || f.fq === "operatornew[]") {
                return this.cx.funcParams(f).length > 1 ? "return $a[1];" : "return {a: new Array($a[0]).fill(0), i: 0};";
            }
            if (f.fq === "operatordelete" || f.fq === "operatordelete[]")
                return "";
            return null;
        }
        emitFunc(f) {
            if (!(f.decl.body || []).length) {
                const alloc = this.allocStub(f);
                if (alloc !== null)
                    this.line(`function ${f.mangled}(...$a) { ${alloc} }`);
                else
                    this.line(`function ${f.mangled}(...$a) { throw new Error("unresolved external: ${f.fq}"); }`);
                return;
            }
            const ps = this.cx.funcParams(f);
            const decl = [];
            ps.forEach((p, i) => {
                const nm = p.name ? CTJ.safeJsName(p.name) : `$p${i}`;
                if (p.variadic)
                    decl.push(`...${nm}_rest`);
                else if (p.def)
                    decl.push(`${nm} = ${this.defArg(p)}`);
                else
                    decl.push(nm);
            });
            const base = this.tmpN;
            const save = this.out;
            const lines = [];
            this.out = lines;
            this.ind += "  ";
            this.fnStack.push(f);
            this.bodyStmts(f.decl.body || []);
            this.fnStack.pop();
            this.ind = this.ind.slice(0, -2);
            this.out = save;
            this.line(`function ${f.mangled}(${decl.join(", ")}) {`);
            this.ind += "  ";
            if (this.tmpN > base)
                this.line(this.tmpDecl(base, this.tmpN));
            // A parameter whose address is taken is read through a wrapper, so the
            // value the caller passed has to be put in one first.
            this.boxParams(f, ps);
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        // The copy constructor takes a reference to the value it copies. A call
        // returning one already produced a box; a temporary has to be put in one.
        copyArg(s, ret) {
            return ret.ref !== "" ? s : `{a: [${s}], i: 0}`;
        }
        // A parameter whose address is taken is read through a wrapper, so the value
        // the caller passed has to be put in one before the body runs.
        boxParams(f, ps) {
            ps.forEach((p, i) => {
                if (!p.name || p.variadic)
                    return;
                const node = f.decl.params[i];
                const v = (node ? this.cx.getAnn(node).var : null);
                if (v && (v.storage === "boxed" || v.storage === "bbox")) {
                    const nm = CTJ.safeJsName(p.name);
                    this.line(`${nm} = {v: ${nm}};`);
                }
            });
        }
        // The VarInfo of a parameter hangs off its declaration node; the scope the
        // analysis built it in is a copy that no longer exists.
        paramVar(f, i) {
            const node = f.decl.params[i];
            return (node ? this.cx.getAnn(node).var : null);
        }
        emitGlobal(v) {
            if (!v.referenced && !v.decl.init && !v.decl.directInit)
                return;
            const t = v.typeCache;
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
                    const cn = this.cx.classes.get(fcls).mangled;
                    this.line(`let ${v.mangled} = ${this.ctorExpr(cn, a.call, v.decl.directInit, a.convs, t)};`);
                }
                else {
                    this.line(`let ${v.mangled} = ${this.ex(v.decl.directInit[0])};`);
                }
                return;
            }
            const a = this.cx.getAnn(v.decl);
            const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                this.line(`let ${v.mangled} = ${a.call ? this.ctorExpr(cn, a.call, [], [], t) : `new ${cn}()`};`);
            }
            else if (t.dims.length) {
                this.line(`let ${v.mangled} = ${this.arrayNew(t, [])};`);
            }
            else if (t.isFunc) {
                this.line(`let ${v.mangled} = null;`);
            }
            else if (isBoxLike(t)) {
                this.line(`let ${v.mangled} = null;`);
            }
            else if (v.storage === "box") {
                this.line(`let ${v.mangled} = null;`);
            }
            else if (v.storage === "bbox") {
                this.line(`let ${v.mangled} = {v: null};`);
            }
            else if (v.storage === "boxed") {
                this.line(`let ${v.mangled} = {v: ${this.zero(t)}};`);
            }
            else {
                this.line(`let ${v.mangled} = ${this.zero(t)};`);
            }
        }
        stmt(s) {
            switch (s.kind) {
                case "compound":
                    if (s.sameScope) {
                        for (const x of s.stmts)
                            this.stmt(x);
                        return;
                    }
                    this.block("", () => { for (const x of s.stmts)
                        this.stmt(x); });
                    return;
                case "expr": {
                    if (s.expr.kind === "delete")
                        return;
                    this.line(`${this.ex(s.expr)};`);
                    return;
                }
                case "decl":
                    this.declStmt(s.decl);
                    return;
                case "if": {
                    if (s.cond.kind === "var") {
                        const vd = s.cond;
                        const v = this.cx.getAnn(vd).var;
                        const t = v.typeCache;
                        this.block("", () => {
                            this.varDeclFor(vd, v, t);
                            this.block(`if (${this.localName(v)})`, () => this.stmt(s.then));
                            if (s.els)
                                this.block(`else`, () => this.stmt(s.els));
                        });
                        return;
                    }
                    this.block(`if (${this.ex(s.cond)})`, () => this.stmt(s.then));
                    if (s.els)
                        this.block(`else`, () => this.stmt(s.els));
                    return;
                }
                case "switch":
                    if (s.cond.kind === "var") {
                        const vd = s.cond;
                        const v = this.cx.getAnn(vd).var;
                        this.block("", () => {
                            this.varDeclFor(vd, v, v.typeCache);
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
                        const v = this.cx.getAnn(vd).var;
                        this.block("", () => {
                            this.varDeclFor(vd, v, v.typeCache);
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
                        const d = s.init.decl;
                        if (d.kind === "var") {
                            const v = this.cx.getAnn(d).var;
                            const t = v.typeCache;
                            const save = this.out;
                            const lines = [];
                            this.out = lines;
                            this.varDeclFor(d, v, t);
                            this.out = save;
                            const head = lines.length === 1 ? lines[0].trim().replace(/;$/, "") : `let ${v.mangled}`;
                            this.block(`for (${head}; ${s.cond ? this.ex(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
                            return;
                        }
                    }
                    if (s.init)
                        this.stmt(s.init);
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
                        }
                        else if (h.vdecl) {
                            const v = this.cx.getAnn(h.vdecl).var;
                            const t = v.typeCache;
                            const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
                            if (fq && this.cx.classes.has(fq)) {
                                const cn = this.cx.classes.get(fq).mangled;
                                this.block(`${pre} (${en} instanceof ${cn})`, () => {
                                    this.line(`let ${v.mangled} = ${en};`);
                                    this.stmt(h.body);
                                });
                            }
                            else {
                                this.block(pre === "if" ? "if (true)" : "else", () => {
                                    this.line(`let ${v.mangled} = ${en};`);
                                    this.stmt(h.body);
                                });
                            }
                        }
                        else {
                            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
                        }
                    });
                    if (!s.handlers.some(h => h.ellipsis))
                        this.line(`else { throw ${en}; }`);
                    this.ind = this.ind.slice(0, -2);
                    this.line(`}`);
                    this.exStack.pop();
                    return;
                }
                case "throw":
                    if (!s.expr) {
                        const en = this.exStack[this.exStack.length - 1] || "$e0";
                        this.line(`throw ${en};`);
                    }
                    else {
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
        declStmt(d) {
            switch (d.kind) {
                case "var": {
                    const v = this.cx.getAnn(d).var;
                    if (!v)
                        return;
                    this.varDeclFor(d, v, v.typeCache);
                    return;
                }
                case "func":
                    return;
                case "class": {
                    const c = [...this.cx.classes.values()].find(x => x.decl === d);
                    if (c && c.referenced && !c.isLambda)
                        this.emitClass(c);
                    return;
                }
                case "linkage":
                    for (const x of d.decls)
                        this.declStmt(x);
                    return;
                default:
                    return;
            }
        }
        varDeclFor(vd, v, t) {
            const nm = v.isGlobal ? v.mangled : this.localName(v);
            if (vd.flags.includes("extern"))
                return;
            if (v.lifted) {
                const init = this.varInitEx(vd, v, t);
                this.line(`if (!${v.mangled}_init) { ${v.mangled} = ${init}; ${v.mangled}_init = true; }`);
                const top = this.alias.length ? this.alias[this.alias.length - 1] : null;
                if (top)
                    top.set(v.short, v.mangled);
                return;
            }
            const init = this.varInitEx(vd, v, t);
            if (v.storage === "bbox")
                this.line(`let ${nm} = {v: ${init}};`);
            else if (v.storage === "boxed")
                this.line(`let ${nm} = {v: ${init}};`);
            else
                this.line(`let ${nm} = ${init};`);
        }
        varInitEx(vd, v, t) {
            const a = this.cx.getAnn(vd);
            const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (vd.init) {
                if (fcls && this.cx.classes.has(fcls)) {
                    const cn = this.cx.classes.get(fcls).mangled;
                    if (a.call) {
                        const items = vd.init.kind === "initlist" ? vd.init.items : [vd.init];
                        return this.ctorExpr(cn, a.call, items, a.convs, t);
                    }
                }
                if (t.dims.length && vd.init.kind === "initlist") {
                    return this.arrayInit(t, vd.init.items, vd);
                }
                return this.argFor(t, vd.init, null);
            }
            if (vd.directInit && vd.directInit.length) {
                if (fcls && this.cx.classes.has(fcls) && a.call) {
                    const cn = this.cx.classes.get(fcls).mangled;
                    return this.ctorExpr(cn, a.call, vd.directInit, a.convs, t);
                }
                return this.ex(vd.directInit[0]);
            }
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                return a.call ? this.ctorExpr(cn, a.call, [], [], t) : `new ${cn}()`;
            }
            if (t.dims.length)
                return this.arrayNew(t, []);
            if (t.isFunc)
                return "null";
            if (isBoxLike(t))
                return "null";
            return this.zero(t);
        }
        arrayInit(t, items, _vd) {
            const et = new CTJ.CppType(t.name);
            et.segs = t.segs;
            et.ptr = t.ptr;
            et.ref = t.ref;
            et.dims = t.dims.slice(1);
            return `[${items.map(x => this.argFor(et, x, null)).join(", ")}]`;
        }
        arrayNew(t, inits) {
            if (t.dims[0] < 0 || typeof t.dims[0] !== "number")
                return inits.length ? this.arrayInit(t, inits, null) : "[]";
            const n = t.dims[0];
            const et = new CTJ.CppType(t.name);
            et.segs = t.segs;
            et.ptr = t.ptr;
            et.ref = t.ref;
            et.dims = t.dims.slice(1);
            if (et.dims.length)
                return `Array.from({length: ${n}}, () => ${this.arrayNew(et, [])})`;
            const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                return `Array.from({length: ${n}}, () => new ${cn}())`;
            }
            if (isBoxLike(et) || et.isFunc)
                return `new Array(${n}).fill(null)`;
            return `new Array(${n}).fill(${this.zero(et)})`;
        }
        rangeFor(s) {
            const v = this.cx.getAnn(s.vdecl).var;
            const t = v.typeCache;
            const rt = this.cx.getAnn(s.range).t;
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
            const info = this.cx.getAnn(s).range;
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
        rangeVar(v, t, elem, arr, idx) {
            const nm = this.localName(v);
            if (v.storage === "box") {
                if (arr)
                    this.line(`let ${nm} = {a: ${arr}, i: ${idx}};`);
                else
                    this.line(`let ${nm} = ${elem};`);
                return;
            }
            const fqs = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fqs && this.cx.classes.has(fqs)) {
                const cn = this.cx.classes.get(fqs).mangled;
                this.line(`let ${nm} = new ${cn}(${elem});`);
                return;
            }
            if (arr)
                this.line(`let ${nm} = ${elem};`);
            else
                this.line(`let ${nm} = (${elem}).a[(${elem}).i];`);
        }
        localName(v) {
            for (let i = this.alias.length - 1; i >= 0; i--) {
                const hit = this.alias[i].get(v.short);
                if (hit !== undefined)
                    return hit;
            }
            return v.mangled;
        }
        varName(v, needsThis) {
            if (v.isGlobal)
                return v.mangled;
            if (v.isField) {
                if (v.isStatic) {
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    return `${cls.mangled}.${CTJ.safeJsName(v.short)}`;
                }
                return needsThis ? `this.${CTJ.safeJsName(v.short)}` : CTJ.safeJsName(v.short);
            }
            return this.localName(v);
        }
        ex(e) {
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
                    return String(CTJ.constSizeof(this.cx, t, new Set()));
                }
                case "typeid": return this.exTypeid(e);
                case "lambda": return this.exLambda(e);
                case "initlist": return `[${e.items.map(x => this.ex(x)).join(", ")}]`;
                case "stmtexpr": {
                    const save = this.out;
                    const lines = [];
                    this.out = lines;
                    this.ind += "  ";
                    for (const s of e.stmts)
                        this.stmt(s);
                    this.ind = this.ind.slice(0, -2);
                    this.out = save;
                    return `(() => {\n${lines.join("\n")}\n${this.ind}})()`;
                }
                case "noexcept": return "true";
            }
        }
        lit(e) {
            switch (e.lkind) {
                case "int":
                case "float": return String(CTJ.parseNumber(e.value));
                case "char": return String(CTJ.parseChar(e.value));
                case "bool": return e.value;
                case "null": return "null";
                case "string": return this.strLit(e.value);
                default: return "0";
            }
        }
        strLit(raw) {
            const codes = [];
            const inner = raw.slice(1, -1);
            for (let i = 0; i < inner.length; i++) {
                const ch = inner[i];
                if (ch === "\\" && i + 1 < inner.length) {
                    const n = inner[++i];
                    if (n === "n")
                        codes.push(10);
                    else if (n === "t")
                        codes.push(9);
                    else if (n === "r")
                        codes.push(13);
                    else if (n === "0")
                        codes.push(0);
                    else if (n === "a")
                        codes.push(7);
                    else if (n === "b")
                        codes.push(8);
                    else if (n === "f")
                        codes.push(12);
                    else if (n === "v")
                        codes.push(11);
                    else if (n === "\\")
                        codes.push(92);
                    else if (n === "'")
                        codes.push(39);
                    else if (n === '"')
                        codes.push(34);
                    else if (n === "x") {
                        codes.push(parseInt(inner.substr(i + 1, 2), 16) || 0);
                        i += 2;
                    }
                    else if (n >= "0" && n <= "7") {
                        let o = n;
                        for (let k = 0; k < 2 && i + 1 < inner.length && inner[i + 1] >= "0" && inner[i + 1] <= "7"; k++)
                            o += inner[++i];
                        codes.push(parseInt(o, 8) & 255);
                    }
                    else
                        codes.push(n.charCodeAt(0));
                }
                else if (ch === '"') {
                    continue;
                }
                else if (ch.charCodeAt(0) >= 128) {
                    const bytes = unescape(encodeURIComponent(ch));
                    for (let k = 0; k < bytes.length; k++)
                        codes.push(bytes.charCodeAt(k));
                }
                else
                    codes.push(ch.charCodeAt(0));
            }
            codes.push(0);
            return `[${codes.join(", ")}]`;
        }
        // The string and memory builtins work on the same boxes every other pointer
        // uses: an array of bytes and an offset into it.
        exMemBuiltin(name, e) {
            const a = e.args.map(x => this.ex(x));
            // A string literal is a bare array of bytes; every other pointer is a box.
            const p = (i) => `(($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(${a[i]})`;
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
        exId(e) {
            var _a;
            const a = this.cx.getAnn(e);
            const s = a.sym;
            if (!s)
                this.cx.fail("unresolved name", e);
            if (s.k === "enumval") {
                const vals = this.cx.enumValues(s.e);
                return String((_a = vals.get(s.item)) !== null && _a !== void 0 ? _a : 0);
            }
            if (s.k === "func") {
                const f = s.fns[0];
                if (f.isMethod && !f.isStatic)
                    this.cx.fail("member function value is not supported", e);
                if (f.isMethod) {
                    const cls = this.cx.classes.get(f.cls);
                    return `${cls.mangled}.${methodJsName(f)}`;
                }
                return f.mangled;
            }
            if (s.k !== "var")
                this.cx.fail("type used as value", e);
            const v = s.v;
            const nm = this.varName(v, a.needsThis);
            const t = v.typeCache;
            if (v.storage === "box") {
                if (t.isFunc)
                    return nm;
                if (t.ref)
                    return `${this.paren(nm)}.a[${this.paren(nm)}.i]`;
                return nm;
            }
            if (v.storage === "bbox")
                return `${this.paren(nm)}.v`;
            if (v.storage === "boxed")
                return `${this.paren(nm)}.v`;
            return nm;
        }
        paren(s) {
            return /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(s) ? s : `(${s})`;
        }
        complex(s, e) {
            if (this.isSimple(e))
                return s;
            const t = this.tmp();
            return `(${t} = ${s}, ${t})`;
        }
        isSimple(e) {
            switch (e.kind) {
                case "lit":
                case "id":
                case "this": return true;
                case "member": return this.isSimple(e.obj);
                // An index that resolves to a call runs code, so it is not simple.
                case "index": return !this.cx.getAnn(e).call && this.isSimple(e.arr) && this.isSimple(e.idx);
                case "unary": return (e.op === "*" || e.op === "&") && this.isSimple(e.arg);
                case "cast": return !this.cx.getAnn(e).call && !this.cx.getAnn(e).conv && this.isSimple(e.arg);
                default: return false;
            }
        }
        exBox(e) {
            const et = this.cx.getAnn(e).t;
            if (et && et.ptr > 0 && !et.isFunc)
                return this.ex(e);
            switch (e.kind) {
                case "id": {
                    const s = this.cx.getAnn(e).sym;
                    if (!s || s.k !== "var")
                        return this.ex(e);
                    const v = s.v;
                    // A field's type lives on its class, not on this per-lookup record.
                    const t = (v.isField && v.scope.cls
                        ? this.cx.fieldType(v.scope.cls, v.short) : v.typeCache);
                    if (!t || t.isFunc)
                        return this.ex(e);
                    if (v.isField) {
                        const fname = CTJ.safeJsName(v.short);
                        return v.isStatic
                            ? `{a: ${v.scope.cls.mangled}, i: "${fname}"}`
                            : `{a: this, i: "${fname}"}`;
                    }
                    const nm = this.varName(v, this.cx.getAnn(e).needsThis);
                    if (v.storage === "box")
                        return nm;
                    if (v.storage === "bbox")
                        return `${this.paren(nm)}.v`;
                    if (v.storage === "boxed")
                        return `{a: ${nm}, i: "v"}`;
                    if (t.dims.length)
                        return `{a: ${nm}, i: 0}`;
                    return `{a: [${nm}], i: 0}`;
                }
                case "member": {
                    const m = this.cx.getAnn(e);
                    const f = m.sym;
                    if (!f || f.k !== "var" || !f.v.isField)
                        return `{a: [${this.ex(e)}], i: 0}`;
                    const v = f.v;
                    const fname = CTJ.safeJsName(v.short);
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    if (v.isStatic)
                        return `{a: ${cls.mangled}, i: "${fname}"}`;
                    const o = this.objOf(e.obj);
                    if (this.cx.fieldType(cls, v.short).ref)
                        return `${this.paren(o)}.${fname}`;
                    return `{a: ${o}, i: "${fname}"}`;
                }
                case "index": {
                    const m = this.cx.getAnn(e);
                    if (m.call)
                        return this.ex(e);
                    const at = this.cx.getAnn(e.arr).t;
                    if (at.ptr > 0) {
                        const p = this.complex(this.ex(e.arr), e.arr);
                        const pp = this.paren(p);
                        if (this.isZeroLit(e.idx))
                            return p;
                        return `{a: ${pp}.a, i: ${pp}.i + (${this.ex(e.idx)})}`;
                    }
                    const arr = this.complex(this.ex(e.arr), e.arr);
                    return `{a: ${arr}, i: (${this.ex(e.idx)})}`;
                }
                case "unary":
                    // "*it" on a class is a call to operator*, which already yields a box.
                    if (e.op === "*")
                        return this.cx.getAnn(e).call ? this.ex(e) : this.ex(e.arg);
                    if (e.op === "&")
                        return this.exBox(e.arg);
                    return `{a: [${this.ex(e)}], i: 0}`;
                case "call":
                case "this":
                    if (e.kind === "this")
                        return `{a: [this], i: 0}`;
                    // A call returning a reference already yields a box; any other rvalue
                    // needs a temporary one to be passed by reference.
                    if (et && et.ref)
                        return this.exCall(e);
                    return `{a: [${this.ex(e)}], i: 0}`;
                case "lit":
                    if (e.lkind === "string")
                        return `{a: ${this.lit(e)}, i: 0}`;
                    return `{a: [${this.ex(e)}], i: 0}`;
                case "cond":
                    return `(${this.ex(e.c)} ? ${this.exBox(e.a)} : ${this.exBox(e.b)})`;
                case "binary":
                    if (e.op === ",")
                        return `(${this.ex(e.l)}, ${this.exBox(e.r)})`;
                    return `{a: [${this.ex(e)}], i: 0}`;
                case "cast": {
                    // A cast to a pointer or a reference yields the box of its operand;
                    // wrapping it again would point at the box instead of the value.
                    const ct = this.cx.getAnn(e).t;
                    if (ct && ct.isBox())
                        return this.ex(e);
                    return `{a: [${this.ex(e)}], i: 0}`;
                }
                default:
                    return `{a: [${this.ex(e)}], i: 0}`;
            }
        }
        lvalue(e) {
            switch (e.kind) {
                case "id": {
                    const s = this.cx.getAnn(e).sym;
                    if (!s || s.k !== "var")
                        this.cx.fail("not assignable", e);
                    const v = s.v;
                    const t = v.typeCache;
                    const nm = this.varName(v, this.cx.getAnn(e).needsThis);
                    if (v.storage === "box" && t.ref)
                        return `${this.paren(nm)}.a[${this.paren(nm)}.i]`;
                    if (v.storage === "bbox")
                        return `${this.paren(nm)}.v`;
                    if (v.storage === "boxed")
                        return `${this.paren(nm)}.v`;
                    return nm;
                }
                case "member": {
                    const m = this.cx.getAnn(e);
                    const f = m.sym;
                    if (!f || f.k !== "var" || !f.v.isField)
                        this.cx.fail("not assignable", e);
                    const v = f.v;
                    const fname = CTJ.safeJsName(v.short);
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    if (v.isStatic)
                        return `${cls.mangled}.${fname}`;
                    let o = this.objOf(e.obj);
                    if (m.arrowCall)
                        o = `(${this.paren(o)}.${methodJsName(m.arrowCall)}())`;
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
                    const at = this.cx.getAnn(e.arr).t;
                    if (at.ptr > 0) {
                        const p = this.complex(this.ex(e.arr), e.arr);
                        const pp = this.paren(p);
                        if (this.isZeroLit(e.idx))
                            return `${pp}.a[${pp}.i]`;
                        return `${pp}.a[${pp}.i + (${this.ex(e.idx)})]`;
                    }
                    const arr = this.complex(this.ex(e.arr), e.arr);
                    return `${this.paren(arr)}[${this.ex(e.idx)}]`;
                }
                case "unary": {
                    if (e.op !== "*")
                        this.cx.fail("not assignable", e);
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
        objOf(e) {
            const t = this.cx.getAnn(e).t;
            const s = this.complex(this.ex(e), e);
            if (e.kind === "this")
                return s;
            if (t && t.ptr > 0) {
                const p = this.paren(s);
                return `(${p}.a[${p}.i])`;
            }
            return s;
        }
        deref(e) {
            if (this.isSimple(e)) {
                const p = this.paren(this.ex(e));
                return `${p}.a[${p}.i]`;
            }
            const t = this.tmp();
            return `(${t} = ${this.ex(e)}, ${t}.a[${t}.i])`;
        }
        exAddr(e) {
            if (e.kind === "id") {
                const s = this.cx.getAnn(e).sym;
                if (s && s.k === "var" && s.v.storage === "bbox") {
                    const nm = this.varName(s.v, this.cx.getAnn(e).needsThis);
                    return `{a: ${nm}, i: "v"}`;
                }
            }
            return this.exBox(e);
        }
        splitLhs(e) {
            if (e.kind === "call")
                return true;
            if (e.kind === "index" && this.cx.getAnn(e).call)
                return true;
            return false;
        }
        // Binds complex pointer operands to temporaries: a fat pointer is read in two
        // places, and evaluating the expression twice would repeat its side effects.
        pbind(items) {
            const pre = [];
            const v = [];
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
        pidx(x) {
            return `(${x} ? ${this.paren(x)}.i : 0)`;
        }
        parr(x) {
            return `(${x} ? ${this.paren(x)}.a : null)`;
        }
        pbox(s, e, t) {
            const x = this.complex(s, e);
            // "this + 1" addresses the storage that follows the object, as
            // "reinterpret_cast<_CharT*>(this + 1)" does in a header that keeps its
            // data behind the object: the instance gets an array to be addressed in.
            if (e.kind === "this")
                return `{a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}`;
            if (t.dims.length && !t.isBox())
                return `{a: ${x}, i: 0}`;
            return x;
        }
        isZeroLit(e) {
            return e.kind === "lit" && (e.lkind === "null" || ((e.lkind === "int" || e.lkind === "char") && CTJ.parseNumber(e.value) === 0));
        }
        argFor(p, x, conv) {
            if (conv && conv.kind === "ctor") {
                const fq = this.cx.stripAll(p);
                const cn = this.cx.classes.get(fq).mangled;
                const cps = this.cx.funcParams(conv.fn);
                const inner = cps.length ? this.argFor(cps[0].type, x, null) : this.ex(x);
                return `new ${cn}(${inner})`;
            }
            if (conv && conv.kind === "conv") {
                return `${this.paren(this.objOf(x))}.${methodJsName(conv.fn)}()`;
            }
            const at = this.cx.getAnn(x).t;
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
                return this.arrayInit(p, x.items, null);
            }
            if (pB && !aB) {
                if (!at || at.name === "__null")
                    return "null";
                if (this.isZeroLit(x))
                    return "null";
                if (at.isFunc)
                    return this.ex(x);
                return this.exBox(x);
            }
            if (!pB && aB) {
                if (at && at.name === "__null" && CTJ.coreName(p) === "bool")
                    return "false";
                // Reading a reference variable already yields the value it refers to;
                // only an expression that produces a fat pointer needs one more step.
                if (x.kind === "id") {
                    const sym = this.cx.getAnn(x).sym;
                    if (sym && sym.k === "var" && sym.v.typeCache && sym.v.typeCache.ref)
                        return this.ex(x);
                }
                return this.deref(x);
            }
            if (CTJ.coreName(p) === "bool" && at && at.isBox() && !at.isFunc)
                return `(${this.ex(x)} != null)`;
            if (CTJ.coreName(p) === "bool" && at && !CTJ.isNumericName(CTJ.coreName(at)) && !this.cx.enums.has(this.cx.stripAll(at)) && at.name !== "__null") {
                return `(${this.ex(x)} != null)`;
            }
            if (p.ptr > 0 && at && at.dims.length && !at.isBox())
                return this.exBox(x);
            if (pB && aB) {
                if (at && at.ref)
                    return this.exBox(x);
                // A reference parameter reads through an address, so a value has to be
                // given one: a class object, and a pointer too, since a pointer is
                // already a box and "const _Iterator&" is a box around it.
                if (p.ref && at && !at.ref && !at.isFunc && !at.dims.length) {
                    if (at.ptr > 0) {
                        return `{a: [${this.ex(x)}], i: 0}`;
                    }
                    if (this.cx.classes.has(this.cx.stripAll(at)))
                        return this.exBox(x);
                }
                return this.ex(x);
            }
            if (at && at.name === "__null" && CTJ.isNumericName(CTJ.coreName(p)))
                return "0";
            if (CTJ.isIntegerName(CTJ.coreName(p)) && at && (CTJ.coreName(at) === "float" || CTJ.coreName(at) === "double")) {
                return `Math.trunc(${this.ex(x)})`;
            }
            return this.ex(x);
        }
        returnEx(s, x) {
            const a = this.cx.getAnn(s);
            if (a.call) {
                const scopeFn = this.curFn();
                const ret = scopeFn ? this.cx.funcRet(scopeFn) : CTJ.CppType.basic("void");
                const fq = this.cx.stripAll(ret);
                const cn = this.cx.classes.get(fq).mangled;
                const items = x.kind === "initlist" ? x.items : [x];
                return this.ctorExpr(cn, a.call, items, a.convs, ret);
            }
            const scopeFn = this.curFn();
            if (!scopeFn)
                return this.ex(x);
            const ret = this.cx.funcRet(scopeFn);
            if (ret.name === "void")
                return this.ex(x);
            return this.argFor(ret, x, null);
        }
        curFn() {
            return this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
        }
        bodyStmts(list) {
            if (list.length === 1 && list[0].kind === "compound") {
                for (const x of list[0].stmts)
                    this.stmt(x);
            }
            else {
                for (const x of list)
                    this.stmt(x);
            }
        }
        // A call that returns a reference to a scalar hands back a box; where a
        // value is wanted it stands for the element the box points at, exactly as a
        // reference variable does.
        // The left side of an assignment reached through a box. A call returning a
        // scalar reference is one already, so it must not be read through twice.
        lhsBox(e) {
            return e.kind === "call" && this.returnsScalarRef(e) ? this.exCall(e) : this.ex(e);
        }
        returnsScalarRef(e) {
            const t = this.cx.getAnn(e).t;
            return !!t && t.ref !== "" && !t.dims.length && !t.isFunc &&
                !this.cx.classes.has(this.cx.stripAll(t));
        }
        exCallValue(e) {
            if (this.returnsScalarRef(e)) {
                const v = this.tmp();
                return `(${v} = ${this.exCall(e)}, ${v}.a[${v}.i])`;
            }
            return this.exCall(e);
        }
        exCall(e) {
            const a = this.cx.getAnn(e);
            // A destructor call that resolved to no destructor has nothing to do; the
            // target language reclaims the storage itself.
            if (!a.call && e.fn.kind === "member" && e.fn.field.charAt(0) === "~")
                return "void 0";
            if (typeof a.call === "object" && a.call !== null && "builtin" in a.call) {
                return this.exBuiltin(a.call.builtin, e);
            }
            const fn = a.call;
            if (!fn) {
                if (e.fn.kind === "member") {
                    const m = e.fn;
                    const o = this.objOf(m.obj);
                    const ma = this.cx.getAnn(m);
                    const f = ma.sym;
                    if (f && f.k === "var" && f.v.isField) {
                        return `${this.paren(o)}.${CTJ.safeJsName(f.v.short)}(${e.args.map(x => this.ex(x)).join(", ")})`;
                    }
                }
                return `${this.paren(this.ex(e.fn))}(${e.args.map(x => this.ex(x)).join(", ")})`;
            }
            const ps = this.cx.funcParams(fn);
            const aa = [];
            e.args.forEach((x, i) => {
                // A parameter pack keeps the type it was deduced to for this call.
                const pt = i < ps.length ? ps[i].type : null;
                if (pt && this.isInitListParam(pt) && x.kind === "initlist") {
                    aa.push(`[${x.items.map(y => this.ex(y)).join(", ")}]`);
                }
                else {
                    aa.push(pt ? this.argFor(pt, x, a.convs[i] || null) : this.ex(x));
                }
            });
            for (let i = e.args.length; i < ps.length && !ps[i].variadic; i++) {
                aa.push(ps[i].def ? this.defArg(ps[i]) : "undefined");
            }
            let s;
            if (!fn.isMethod) {
                s = `${fn.mangled}(${aa.join(", ")})`;
            }
            else if (fn.isStatic) {
                const cls = this.cx.classes.get(fn.cls);
                s = `${cls.mangled}.${methodJsName(fn)}(${aa.join(", ")})`;
            }
            else if (e.fn.kind === "id" && e.fn.parts.length > 1) {
                const cls = this.cx.classes.get(fn.cls);
                s = `${cls.mangled}.prototype.${methodJsName(fn)}.call(this${aa.length ? ", " + aa.join(", ") : ""})`;
            }
            else if (e.fn.kind === "member") {
                let o = this.objOf(e.fn.obj);
                const ma = this.cx.getAnn(e.fn);
                if (ma.arrowCall)
                    o = `(${this.paren(o)}.${methodJsName(ma.arrowCall)}())`;
                if (e.fn.qual.length) {
                    const cls = this.cx.classes.get(fn.cls);
                    s = `${cls.mangled}.prototype.${methodJsName(fn)}.call(${o}${aa.length ? ", " + aa.join(", ") : ""})`;
                }
                else {
                    s = `${this.paren(o)}.${methodJsName(fn)}(${aa.join(", ")})`;
                }
            }
            else if (e.fn.kind === "id") {
                // A name can denote an object whose operator() is called, not a member of
                // the enclosing class.
                const callee = this.cx.getAnn(e.fn).sym;
                s = callee && callee.k === "var"
                    ? `${this.paren(this.objOf(e.fn))}.${methodJsName(fn)}(${aa.join(", ")})`
                    : `this.${methodJsName(fn)}(${aa.join(", ")})`;
            }
            else {
                s = `${this.paren(this.objOf(e.fn))}.${methodJsName(fn)}(${aa.join(", ")})`;
            }
            if (a.copyCtor) {
                const ret = this.cx.funcRet(fn);
                const cn = this.cx.classes.get(this.cx.stripAll(ret)).mangled;
                s = `new ${cn}(${this.copyArg(s, ret)})`;
            }
            return s;
        }
        exBuiltin(name, e) {
            if (name === "__ctj_js") {
                if (!e.args.length || e.args[0].kind !== "lit" || e.args[0].lkind !== "string") {
                    this.cx.fail("__ctj_js needs a string literal", e);
                }
                let tpl = (e.args[0].value).slice(1, -1);
                for (let i = 1; i < e.args.length; i++) {
                    tpl = tpl.split(`$${i}`).join(`(${this.ex(e.args[i])})`);
                }
                return `(${tpl})`;
            }
            if (name === "__ctj_php")
                return "undefined";
            if (name === "__builtin_expect" || name === "__builtin_expect_with_probability")
                return this.ex(e.args[0]);
            if (name === "__builtin_choose_expr") {
                const c = CTJ.constEval(this.cx, e.args[0], this.blankScope());
                return this.ex(e.args[c ? 1 : 2]);
            }
            if (name === "__builtin_constant_p") {
                const c = CTJ.constEval(this.cx, e.args[0], this.blankScope());
                return c === null ? "0" : "1";
            }
            if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
                return `(() => { throw new Error("${name}"); })()`;
            }
            if (CTJ.isMathBuiltin(name)) {
                let m = name.slice("__builtin_".length);
                if (m === "nan" || m === "nanf" || m === "nans")
                    return "NaN";
                if (m === "inf" || m === "inff" || m === "huge_val")
                    return "Infinity";
                // JavaScript spells the absolute-value functions "abs".
                if (m === "fabs" || m === "fabsf" || m === "fabsl")
                    m = "abs";
                // JavaScript has no Math.fmod; the % operator computes the same value.
                if (m === "fmod" || m === "fmodf" || m === "fmodl") {
                    return `((${this.ex(e.args[0])}) % (${this.ex(e.args[1])}))`;
                }
                if (m.endsWith("f") && Math[m.slice(0, -1)] !== undefined)
                    m = m.slice(0, -1);
                return `Math.${m}(${e.args.map(x => this.ex(x)).join(", ")})`;
            }
            if (name === "__builtin_clz")
                return `Math.clz32(${this.ex(e.args[0])})`;
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
            if (name === "__builtin_alloca")
                return `{a: new Array(${this.ex(e.args[0])}).fill(0), i: 0}`;
            if (name === "__builtin_offsetof")
                return "0";
            if (name === "__builtin_types_compatible_p") {
                const x = this.cx.getAnn(e.args[0]).t;
                const y = this.cx.getAnn(e.args[1]).t;
                return x.key() === y.key() ? "1" : "0";
            }
            if (name === "__builtin_add_overflow" || name === "__builtin_sub_overflow" || name === "__builtin_mul_overflow")
                return "false";
            if (name === "__builtin_frame_address" || name === "__builtin_return_address" || name === "__builtin_extract_return_addr")
                return "null";
            if (name === "__builtin_FILE" || name === "__builtin_FUNCTION")
                return this.strLit(`"${e.file}"`);
            if (name === "__builtin_LINE")
                return String(e.line);
            const mem = this.exMemBuiltin(name, e);
            if (mem !== null)
                return mem;
            return `(() => { throw new Error("unresolved ${name}"); })()`;
        }
        foldStaticConst(c, ft, fd, init) {
            const cnst = ft.cnst || fd.flags.includes("const") || fd.flags.includes("constexpr");
            if (!cnst || ft.ptr || ft.ref || ft.dims.length || ft.isBox())
                return null;
            const cn = CTJ.coreName(ft);
            const isInt = CTJ.isIntegerName(cn) || this.cx.enums.has(this.cx.stripAll(ft)) || this.cx.enums.has(cn);
            if (!isInt)
                return null;
            try {
                const v = CTJ.constEval(this.cx, init, this.cx.memberScope(c));
                return typeof v === "number" ? String(v) : null;
            }
            catch {
                return null;
            }
        }
        blankScope() {
            return CTJ.rootScope();
        }
        // The scope a type name written in an expression is resolved in: that of the
        // function being emitted, so "sizeof(_Rep)" sees the members of _Rep.
        curScope() {
            const fn = this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
            return fn ? fn.scope : CTJ.rootScope();
        }
        exIndex(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                const o = this.objOf(e.arr);
                const aa = this.argFor(ps[0].type, e.idx, a.convs[0] || null);
                let s = `${this.paren(o)}.${methodJsName(fn)}(${aa})`;
                if (a.copyCtor) {
                    const ret = this.cx.funcRet(fn);
                    const cn = this.cx.classes.get(this.cx.stripAll(ret)).mangled;
                    s = `new ${cn}(${this.copyArg(s, ret)})`;
                }
                return s;
            }
            const at = this.cx.getAnn(e.arr).t;
            if (at.ptr > 0) {
                const p = this.complex(this.ex(e.arr), e.arr);
                const pp = this.paren(p);
                if (this.isZeroLit(e.idx))
                    return `${pp}.a[${pp}.i]`;
                return `${pp}.a[${pp}.i + (${this.ex(e.idx)})]`;
            }
            const arr = this.complex(this.ex(e.arr), e.arr);
            return `${this.paren(arr)}[${this.ex(e.idx)}]`;
        }
        exMember(e) {
            const a = this.cx.getAnn(e);
            const f = a.sym;
            if (!f || f.k !== "var" || !f.v.isField)
                this.cx.fail("bad member", e);
            const v = f.v;
            const fname = CTJ.safeJsName(v.short);
            const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
            if (v.isStatic)
                return `${cls.mangled}.${fname}`;
            let o = this.objOf(e.obj);
            if (a.arrowCall)
                o = `(${this.paren(o)}.${methodJsName(a.arrowCall)}())`;
            if (this.cx.fieldType(cls, v.short).ref) {
                const t = this.tmp();
                return `(${t} = ${this.paren(o)}.${fname}, ${t}.a[${t}.i])`;
            }
            return `${this.paren(o)}.${fname}`;
        }
        exUnary(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const o = this.objOf(e.arg);
                if (e.op === "++" || e.op === "--") {
                    const ps = this.cx.funcParams(fn);
                    const post = ps.length === 1 ? "(0)" : "()";
                    return `${this.paren(o)}.${methodJsName(fn)}${post}`;
                }
                return `${this.paren(o)}.${methodJsName(fn)}()`;
            }
            if (e.op === "*") {
                const at = this.cx.getAnn(e.arg).t;
                if (at.isFunc)
                    return this.ex(e.arg);
                if (e.arg.kind === "unary" && CTJ.incKind(e.arg) && CTJ.isPostfix(e.arg)) {
                    const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
                    const pp = this.paren(p);
                    return `${pp}.a[${pp}.i${CTJ.incKind(e.arg)}]`;
                }
                if (e.arg.kind === "unary" && CTJ.incKind(e.arg)) {
                    const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
                    const pp = this.paren(p);
                    return `${pp}.a[${CTJ.incKind(e.arg)}${pp}.i]`;
                }
                return this.deref(e.arg);
            }
            if (e.op === "&") {
                const at = this.cx.getAnn(e.arg).t;
                if (at.isFunc)
                    return this.ex(e.arg);
                return this.exAddr(e.arg);
            }
            const inc = CTJ.incKind(e);
            if (inc) {
                const post = CTJ.isPostfix(e);
                const at = this.cx.getAnn(e.arg).t;
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
            if (e.op === "!")
                return `(!${this.paren(this.ex(e.arg))})`;
            if (e.op === "+")
                return `(+${this.paren(this.ex(e.arg))})`;
            if (e.op === "-")
                return `(-${this.paren(this.ex(e.arg))})`;
            if (e.op === "~")
                return `(~${this.paren(this.ex(e.arg))})`;
            return this.ex(e.arg);
        }
        exBinary(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                if (fn.isMethod) {
                    const o = this.objOf(e.l);
                    const aa = this.argFor(ps[0].type, e.r, a.convs[0] || null);
                    let s = `${this.paren(o)}.${methodJsName(fn)}(${aa})`;
                    if (a.copyCtor) {
                        const ret = this.cx.funcRet(fn);
                        const cn = this.cx.classes.get(this.cx.stripAll(ret)).mangled;
                        s = `new ${cn}(${this.copyArg(s, ret)})`;
                    }
                    return s;
                }
                const aa = [this.argFor(ps[0].type, e.l, a.convs[0] || null), this.argFor(ps[1].type, e.r, a.convs[1] || null)];
                let s = `${fn.mangled}(${aa.join(", ")})`;
                if (a.copyCtor) {
                    const ret = this.cx.funcRet(fn);
                    const cn = this.cx.classes.get(this.cx.stripAll(ret)).mangled;
                    s = `new ${cn}(${this.copyArg(s, ret)})`;
                }
                return s;
            }
            const lt = this.cx.getAnn(e.l).t;
            const rt = this.cx.getAnn(e.r).t;
            const l = this.ex(e.l);
            const r = this.ex(e.r);
            if (e.op === "&&" || e.op === "||")
                return `(${l} ${e.op} ${r})`;
            if (e.op === ",")
                return `(${l}, ${r})`;
            const lp = lt && !lt.isFunc && (lt.ptr > 0 || (lt.dims.length > 0 && !lt.isBox()));
            const rp = rt && !rt.isFunc && (rt.ptr > 0 || (rt.dims.length > 0 && !rt.isBox()));
            if (e.op === "==" || e.op === "!=") {
                const op = e.op === "==" ? "===" : "!==";
                if (lp && rp) {
                    const b = this.pbind([
                        { s: this.pbox(l, e.l, lt), e: e.l },
                        { s: this.pbox(r, e.r, rt), e: e.r },
                    ]);
                    const xp = b.v[0];
                    const yp = b.v[1];
                    // A null pointer is null itself, so both sides are checked first.
                    const eq = `${xp} === ${yp} || (${xp} && ${yp} && ${xp}.a === ${yp}.a && ${xp}.i === ${yp}.i)`;
                    const body = e.op === "==" ? `(${eq})` : `(!(${eq}))`;
                    return b.pre ? `(${b.pre}, ${body})` : body;
                }
                if (lp && (rt.name === "__null" || this.isZeroLit(e.r)))
                    return `(${l} ${op} null)`;
                if (rp && (lt.name === "__null" || this.isZeroLit(e.l)))
                    return `(null ${op} ${r})`;
                return `(${l} ${op} ${r})`;
            }
            if (e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=") {
                if (lp && rp) {
                    const b = this.pbind([
                        { s: this.pbox(l, e.l, lt), e: e.l },
                        { s: this.pbox(r, e.r, rt), e: e.r },
                    ]);
                    const body = `(${this.pidx(b.v[0])} ${e.op} ${this.pidx(b.v[1])})`;
                    return b.pre ? `(${b.pre}, ${body})` : body;
                }
                return `(${l} ${e.op} ${r})`;
            }
            if ((e.op === "+" || e.op === "-") && (lp || rp)) {
                if (lp && rp) {
                    if (e.op !== "-")
                        this.cx.fail("bad pointer arithmetic", e);
                    const b = this.pbind([
                        { s: this.pbox(l, e.l, lt), e: e.l },
                        { s: this.pbox(r, e.r, rt), e: e.r },
                    ]);
                    const body = `(${this.pidx(b.v[0])} - ${this.pidx(b.v[1])})`;
                    return b.pre ? `(${b.pre}, ${body})` : body;
                }
                if (lp) {
                    const b = this.pbind([{ s: this.pbox(l, e.l, lt), e: e.l }]);
                    const sign = e.op === "+" ? "+" : "-";
                    const body = `({a: ${this.parr(b.v[0])}, i: ${this.pidx(b.v[0])} ${sign} (${r})})`;
                    return b.pre ? `(${b.pre}, ${body})` : body;
                }
                const b = this.pbind([{ s: this.pbox(r, e.r, rt), e: e.r }]);
                const body = `({a: ${this.parr(b.v[0])}, i: (${l}) + ${this.pidx(b.v[0])}})`;
                return b.pre ? `(${b.pre}, ${body})` : body;
            }
            if (e.op === "<<" || e.op === ">>") {
                if (e.op === ">>" && lt && CTJ.coreName(lt).startsWith("unsigned"))
                    return `(${l} >>> ${r})`;
                return `(${l} ${e.op} ${r})`;
            }
            if (e.op === "/" && lt && rt && CTJ.isIntegerName(CTJ.coreName(lt)) && CTJ.isIntegerName(CTJ.coreName(rt))) {
                return `(Math.trunc(${l} / ${r}))`;
            }
            return `(${l} ${e.op} ${r})`;
        }
        exAssign(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                let rhs;
                if (a.initCall) {
                    const items = e.r.items;
                    const t = this.cx.getAnn(e.l).t;
                    const cn = this.cx.classes.get(this.cx.stripAll(t)).mangled;
                    rhs = this.ctorExpr(cn, a.initCall, items, a.convs, t);
                }
                else {
                    rhs = this.argFor(ps[ps.length - 1].type, e.r, a.convs[a.convs.length - 1] || null);
                }
                if (fn.isMethod) {
                    const o = this.objOf(e.l);
                    return `${this.paren(o)}.${methodJsName(fn)}(${rhs})`;
                }
                return `${fn.mangled}(${this.ex(e.l)}, ${rhs})`;
            }
            const lt = this.cx.getAnn(e.l).t;
            if (this.splitLhs(e.l)) {
                const t = this.tmp();
                const target = new CTJ.CppType(lt.name);
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
            const target = new CTJ.CppType(lt.name);
            target.segs = lt.segs;
            target.ptr = lt.ptr;
            target.dims = lt.dims;
            let rhs;
            if (e.op === "=") {
                rhs = this.argFor(target, e.r, null);
            }
            else {
                const rt = this.cx.getAnn(e.r).t;
                rhs = rt && rt.isBox() && !target.isBox() ? this.argFor(target, e.r, null) : this.ex(e.r);
            }
            return `${l} ${e.op} ${rhs}`;
        }
        // "::new((void *)__p) _Up(args)" builds the object in the storage __p points
        // at, which is the slot of the fat pointer the target language holds.
        exPlacementNew(e, t) {
            const a = this.cx.getAnn(e);
            const pp = this.paren(this.ex(e.placement[0]));
            const slot = `${pp}.a[${pp}.i]`;
            const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                const obj = a.call
                    ? this.ctorExpr(cn, a.call, e.args, a.convs, t)
                    : `new ${cn}()`;
                // The object goes into the storage it was given and keeps its address, so
                // that "this + 1" can find the storage again; what the expression yields
                // is the pointer to that storage.
                return `(${slot} = ${obj}, ${slot}.ctj_a = ${pp}.a, ${slot}.ctj_i = ${pp}.i, {a: ${pp}.a, i: ${pp}.i})`;
            }
            const v = e.args.length ? this.ex(e.args[0]) : this.zero(t);
            return `(${slot} = ${v})`;
        }
        exNew(e) {
            const a = this.cx.getAnn(e);
            const t = this.cx.resolveTypeNode(e.type, this.curScope());
            if (e.placement.length)
                return this.exPlacementNew(e, t);
            if (e.isArray) {
                const n = e.type.dims.length ? this.ex(e.type.dims[0]) : "0";
                const et = new CTJ.CppType(t.name);
                et.segs = t.segs;
                et.ptr = t.ptr;
                et.ref = t.ref;
                const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
                if (fcls && this.cx.classes.has(fcls)) {
                    const cn = this.cx.classes.get(fcls).mangled;
                    return `{a: Array.from({length: ${n}}, () => new ${cn}()), i: 0}`;
                }
                if (isBoxLike(et) || et.isFunc)
                    return `{a: new Array(${n}).fill(null), i: 0}`;
                return `{a: new Array(${n}).fill(${this.zero(et)}), i: 0}`;
            }
            const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls) && a.call) {
                const cn = this.cx.classes.get(fcls).mangled;
                return `{a: [${this.ctorExpr(cn, a.call, e.args, a.convs, t)}], i: 0}`;
            }
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = this.cx.classes.get(fcls).mangled;
                return `{a: [new ${cn}()], i: 0}`;
            }
            if (e.args.length)
                return `{a: [${this.ex(e.args[0])}], i: 0}`;
            return `{a: [${this.zero(t)}], i: 0}`;
        }
        exCast(e) {
            const a = this.cx.getAnn(e);
            const t = a.t;
            if (a.call) {
                const fq = this.cx.stripAll(t);
                const cn = this.cx.classes.get(fq).mangled;
                const cps = this.cx.funcParams(a.call);
                // "T()" and "T{}" value initialise: the empty list is not an argument of
                // the constructor the cast resolved to.
                if (!cps.length || (e.arg.kind === "initlist" && !e.arg.items.length))
                    return `new ${cn}()`;
                return `new ${cn}(${this.argFor(cps[0].type, e.arg, a.conv)})`;
            }
            // "size_type()" value-initialises: there is no argument to convert.
            if (e.arg.kind === "initlist" && !e.arg.items.length)
                return this.zero(t);
            if (a.conv) {
                return `${this.paren(this.objOf(e.arg))}.${methodJsName(a.conv.fn)}()`;
            }
            if (e.ckind === "dynamic") {
                const fq = this.cx.stripAll(t);
                const cn = this.cx.classes.get(fq).mangled;
                const x = this.complex(this.ex(e.arg), e.arg);
                if (t.ptr > 0)
                    return `(${x} instanceof ${cn} ? ${x} : null)`;
                return `(${x} instanceof ${cn} ? ${x} : (() => { throw new Error("bad cast"); })())`;
            }
            if (CTJ.coreName(t) === "void" && !t.ptr)
                return `(void (${this.ex(e.arg)}))`;
            const at = this.cx.getAnn(e.arg).t;
            if (CTJ.coreName(t) === "bool" && at.isBox() && !at.isFunc)
                return `(${this.ex(e.arg)} != null)`;
            if (CTJ.coreName(t) === "bool" && CTJ.isNumericName(CTJ.coreName(at)))
                return `(${this.ex(e.arg)} !== 0)`;
            if (CTJ.isIntegerName(CTJ.coreName(t)) && (CTJ.coreName(at) === "float" || CTJ.coreName(at) === "double")) {
                return `Math.trunc(${this.ex(e.arg)})`;
            }
            if (t.ptr > 0 && (at.name === "__null" || this.isZeroLit(e.arg)))
                return "null";
            // Casting to a reference yields the address of the value, as any other
            // reference does ("static_cast<_Tp&&>(__t)" in std::forward).
            if (t.ref)
                return this.exBox(e.arg);
            // An unsigned value wraps, so "size_t(-1)" is the largest size rather than
            // a negative one. The width is the 32-bit one: a JS number cannot hold a
            // 64-bit unsigned range.
            if (CTJ.isUnsignedName(CTJ.coreName(t)))
                return `(${this.ex(e.arg)} >>> 0)`;
            return this.ex(e.arg);
        }
        exTypeid(e) {
            let key;
            if (e.isType && e.type) {
                key = this.cx.resolveTypeNode(e.type, this.curScope()).key();
            }
            else if (e.expr) {
                key = this.cx.getAnn(e.expr).t.key();
            }
            else {
                key = "void";
            }
            return `{__typeName: "${key}"}`;
        }
        exLambda(e) {
            const caps = this.cx.getAnn(e).caps;
            const alias = new Map();
            const defs = [];
            for (const c of caps) {
                if (c.mode === "=" && c.v) {
                    alias.set(c.name, `$cap_${c.name}`);
                    defs.push(`$cap_${c.name} = ${this.varName(c.v, false)}`);
                }
            }
            this.alias.push(alias);
            const save = this.out;
            const lines = [];
            this.out = lines;
            this.ind += "  ";
            const decl = [];
            for (let i = 0; i < e.params.length; i++) {
                const p = e.params[i];
                const nm = p.name ? CTJ.safeJsName(p.name) : `$p${i}`;
                decl.push(nm);
            }
            const lt = this.cx.getAnn(e).t;
            const lcls = this.cx.classes.get(this.cx.stripAll(lt));
            const lfn = (lcls.methods.get("operator()") || [])[0];
            if (lfn)
                this.fnStack.push(lfn);
            for (const s of e.body)
                this.stmt(s);
            if (lfn)
                this.fnStack.pop();
            this.ind = this.ind.slice(0, -2);
            this.out = save;
            this.alias.pop();
            const all = defs.concat(decl);
            return `{op_call: (${all.join(", ")}) => {\n${lines.join("\n")}\n${this.ind}}}`;
        }
        sizeofType(e) {
            if (e.isType && e.type)
                return this.cx.resolveTypeNode(e.type, this.curScope());
            if (e.expr)
                return this.cx.getAnn(e.expr).t;
            this.cx.fail("bad sizeof", e);
            return CTJ.CppType.basic("int");
        }
        constStr(e) {
            const v = CTJ.constEval(this.cx, e, this.blankScope());
            if (typeof v === "number")
                return String(v);
            return this.ex(e);
        }
        zero(t) {
            const n = CTJ.coreName(t);
            if (n === "bool")
                return "false";
            if (t.isFunc || t.name === "__null")
                return "null";
            if (n === "void")
                return "undefined";
            return "0";
        }
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    const PHP_RESERVED = new Set([
        "stdclass", "exception", "error", "closure", "generator", "throwable",
        "arrayobject", "arrayaccess", "countable", "iterator", "traversable",
        "serializable", "libxmlnode", "pdo", "mysqli", "reflection", "stdClass",
    ]);
    const PHP_FUNC_RESERVED = new Set([
        "echo", "print", "list", "exit", "die", "isset", "unset", "empty", "eval",
        "include", "require", "clone", "new", "function", "class", "interface",
        "trait", "extends", "implements", "namespace", "use", "global", "static",
        "var", "const", "return", "if", "else", "elseif", "endif", "while",
        "endwhile", "do", "for", "endfor", "foreach", "endforeach", "switch",
        "endswitch", "case", "default", "break", "continue", "goto", "declare",
        "enddeclare", "try", "catch", "finally", "throw", "abstract", "final",
        "private", "protected", "public", "instanceof", "insteadof", "callable",
        "array", "fn", "match", "readonly", "enum",
    ]);
    function phpClsName(c) {
        const n = c.mangled;
        if (PHP_RESERVED.has(n.toLowerCase()))
            return n + "_";
        return n;
    }
    CTJ.phpClsName = phpClsName;
    function phpFuncName(f) {
        const n = f.mangled;
        if (PHP_FUNC_RESERVED.has(n.toLowerCase()))
            return n + "_";
        return n;
    }
    CTJ.phpFuncName = phpFuncName;
    function phpMethodName(fn) {
        if (fn.short === "#ctor")
            return "__construct";
        return CTJ.methodJsName(fn);
    }
    CTJ.phpMethodName = phpMethodName;
    function emitPhp(cx) {
        const g = new PhpGen(cx);
        return g.run();
    }
    CTJ.emitPhp = emitPhp;
    class PhpGen {
        constructor(cx) {
            this.out = [];
            this.ind = "";
            this.tmpN = 0;
            this.alias = [];
            this.fieldAlias = new Map();
            this.exStack = [];
            this.rangeN = 0;
            this.fnStack = [];
            this.usedGlobals = new Set();
            this.needThrow = false;
            this.cx = cx;
        }
        run() {
            this.line(`<?php`);
            for (const c of this.sortClasses()) {
                if (!c.referenced || c.isLambda)
                    continue;
                this.emitClass(c);
            }
            for (const list of this.cx.funcs.values()) {
                for (const f of list) {
                    if (f.isMethod || !f.referenced)
                        continue;
                    this.emitFunc(f);
                }
            }
            const gbase = this.tmpN;
            const glines = [];
            const save = this.out;
            this.out = glines;
            for (const v of this.cx.vars.values())
                this.emitGlobal(v);
            for (const c of this.sortClasses()) {
                if (!c.referenced || c.isLambda)
                    continue;
                this.emitStaticInit(c);
            }
            this.out = save;
            if (this.tmpN > gbase)
                this.line(this.tmpDecl(gbase, this.tmpN));
            for (const l of glines)
                this.out.push(l);
            if (this.needThrow)
                this.line(`class CtjThrow extends Exception { public $v; function __construct($v) { $this->v = $v; } }`);
            const mains = this.cx.funcs.get("main") || [];
            const main = mains.find(f => !f.isMethod && f.referenced);
            if (main) {
                const ps = this.cx.funcParams(main);
                const args = ps.length >= 3 ? ["0", `["a" => [], "i" => 0]`, "null"] : ps.length === 2 ? ["0", `["a" => [], "i" => 0]`] : ps.length === 1 ? ["0"] : [];
                this.line(`${phpFuncName(main)}(${args.join(", ")});`);
            }
            return this.out.join("\n") + "\n";
        }
        sortClasses() {
            const cs = [...this.cx.classes.values()].filter(c => c.complete && c.referenced && !c.isLambda);
            const idx = new Map();
            for (const c of cs)
                idx.set(c.fq, c);
            const deps = new Map();
            for (const c of cs) {
                const d = new Set();
                for (const b of c.bases)
                    if (idx.has(b.fq))
                        d.add(b.fq);
                deps.set(c.fq, d);
            }
            const done = new Set();
            const res = [];
            while (res.length < cs.length) {
                let next = null;
                for (const c of cs) {
                    if (done.has(c.fq))
                        continue;
                    const d = deps.get(c.fq);
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
                done.add(next.fq);
                res.push(next);
            }
            return res;
        }
        line(s) {
            this.out.push(this.ind + s);
        }
        block(head, fn) {
            this.line(head + " {");
            this.ind += "  ";
            fn();
            this.ind = this.ind.slice(0, -2);
            this.line("}");
        }
        tmp() {
            return `$t${this.tmpN++}`;
        }
        tmpDecl(a, b) {
            const ns = [];
            for (let i = a; i < b; i++)
                ns.push(`$t${i}`);
            return `${ns.join(" = ")} = null;`;
        }
        localName(v) {
            for (let i = this.alias.length - 1; i >= 0; i--) {
                const hit = this.alias[i].get(v.short);
                if (hit !== undefined)
                    return hit;
            }
            return `$${v.mangled}`;
        }
        varName(v, needsThis) {
            if (v.isGlobal) {
                this.usedGlobals.add(`$${v.mangled}`);
                if (v.lifted)
                    this.usedGlobals.add(`$${v.mangled}_init`);
                return `$${v.mangled}`;
            }
            if (v.isField) {
                if (v.isStatic) {
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    return `${phpClsName(cls)}::$${CTJ.safeJsName(v.short)}`;
                }
                const fname = this.fieldAlias.get(v.fq) || CTJ.safeJsName(v.short);
                return needsThis ? `$this->${fname}` : `$${fname}`;
            }
            return this.localName(v);
        }
        fieldName(cls, name) {
            return this.fieldAlias.get(cls.fq + "::" + name) || CTJ.safeJsName(name);
        }
        globalLine() {
            if (!this.usedGlobals.size)
                return "";
            return `global ${[...this.usedGlobals].join(", ")};`;
        }
        withBody(fn) {
            const save = this.out;
            const lines = [];
            this.out = lines;
            const saveG = this.usedGlobals;
            this.usedGlobals = new Set();
            this.ind += "  ";
            fn();
            this.ind = this.ind.slice(0, -2);
            const g = this.globalLine();
            this.usedGlobals = saveG;
            this.out = save;
            if (g)
                lines.unshift(this.ind + "  " + g);
            return lines;
        }
        curFn() {
            return this.fnStack.length ? this.fnStack[this.fnStack.length - 1] : null;
        }
        // The scope a type name written in an expression is resolved in: that of the
        // function being emitted, so "sizeof(_Rep)" sees the members of _Rep.
        curScope() {
            const fn = this.curFn();
            return fn ? fn.scope : CTJ.rootScope();
        }
        bodyStmts(list) {
            if (list.length === 1 && list[0].kind === "compound") {
                for (const x of list[0].stmts)
                    this.stmt(x);
            }
            else {
                for (const x of list)
                    this.stmt(x);
            }
        }
        mixinMethods(c) {
            const res = [];
            const seen = new Set(c.methods.keys());
            const visit = (x) => {
                for (let i = 1; i < x.bases.length; i++) {
                    const b = this.cx.classes.get(x.bases[i].fq);
                    if (!b || !b.referenced)
                        continue;
                    for (const [key, fns] of b.methods) {
                        if (seen.has(key))
                            continue;
                        seen.add(key);
                        const use = fns.filter(f => f.referenced && (f.decl.body || []).length);
                        if (use.length)
                            res.push({ cls: b, key, fns: use });
                    }
                    const bf = new Map();
                    for (const [name] of b.fields) {
                        if (b.fieldStatic.has(name))
                            continue;
                        if (x.fields.has(name) || c.fields.has(name))
                            this.cx.fail(`mixin field collision '${name}'`, x.decl);
                        bf.set(b.fq + "::" + name, CTJ.safeJsName(name));
                    }
                    for (const [k, v] of bf)
                        this.fieldAlias.set(k, v);
                    visit(b);
                }
            };
            visit(c);
            return res;
        }
        emitClass(c) {
            const cn = phpClsName(c);
            const base = c.bases.length ? phpClsName(this.cx.classes.get(c.bases[0].fq)) : "";
            const mixins = this.mixinMethods(c);
            this.block(base ? `class ${cn} extends ${base}` : `class ${cn}`, () => {
                for (const [name] of c.fields) {
                    if (!c.fieldStatic.has(name))
                        this.line(`public $${CTJ.safeJsName(name)};`);
                }
                for (const mx of mixins) {
                    for (const [name] of mx.cls.fields) {
                        if (!mx.cls.fieldStatic.has(name))
                            this.line(`public $${CTJ.safeJsName(name)};`);
                    }
                }
                const ctors = (c.methods.get("#ctor") || []).filter(f => f.referenced);
                const inherited = this.inheritedCtors(c);
                if (ctors.length || inherited.length || c.fields.size || c.bases.length || mixins.length) {
                    this.emitCtor(c, ctors, inherited);
                }
                this.emitDtor(c);
                for (const [key, fns] of c.methods) {
                    if (key === "#ctor" || key === "#dtor")
                        continue;
                    this.emitMethod(c, fns);
                }
                for (const mx of mixins)
                    this.emitMethod(mx.cls, mx.fns);
                for (const [name, fd] of c.fields) {
                    if (!c.fieldStatic.has(name))
                        continue;
                    this.line(`public static $${CTJ.safeJsName(name)};`);
                }
            });
        }
        emitStaticInit(c) {
            const cn = phpClsName(c);
            for (const [name, fd] of c.fields) {
                if (!c.fieldStatic.has(name))
                    continue;
                const ft = this.cx.fieldType(c, name);
                const init = fd.init;
                if (init) {
                    this.line(`${cn}::$${CTJ.safeJsName(name)} = ${this.argFor(ft, init, null)};`);
                }
                else if (fd.directInit && fd.directInit.length) {
                    const a = this.cx.getAnn(fd);
                    if (a.call) {
                        this.line(`${cn}::$${CTJ.safeJsName(name)} = ${this.ctorExpr(cn, a.call, fd.directInit, a.convs)};`);
                    }
                    else {
                        this.line(`${cn}::$${CTJ.safeJsName(name)} = ${this.ex(fd.directInit[0])};`);
                    }
                }
                else if (CTJ.isBoxLike(ft) || ft.isFunc) {
                    this.line(`${cn}::$${CTJ.safeJsName(name)} = null;`);
                }
                else {
                    const fcls = !ft.isBox() && !ft.isFunc && !ft.dims.length ? this.cx.stripAll(ft) : "";
                    if (fcls && this.cx.classes.has(fcls)) {
                        const a = this.cx.getAnn(fd);
                        const cc = phpClsName(this.cx.classes.get(fcls));
                        this.line(`${cn}::$${CTJ.safeJsName(name)} = ${a.call ? this.ctorExpr(cc, a.call, [], []) : `new ${cc}()`};`);
                    }
                    else if (ft.dims.length) {
                        this.line(`${cn}::$${CTJ.safeJsName(name)} = ${this.arrayNew(ft)};`);
                    }
                    else {
                        this.line(`${cn}::$${CTJ.safeJsName(name)} = ${this.zero(ft)};`);
                    }
                }
            }
        }
        inheritedCtors(c) {
            const res = [];
            const seen = new Set();
            for (const b of c.usingBase.values()) {
                if (seen.has(b))
                    continue;
                seen.add(b);
                const bc = this.cx.classes.get(b);
                if (!bc)
                    continue;
                for (const f of bc.methods.get("#ctor") || []) {
                    if (f.referenced)
                        res.push({ fn: f, base: b });
                }
            }
            return res;
        }
        emitCtor(c, ctors, inherited) {
            const cn = phpClsName(c);
            const all = [];
            for (const f of ctors)
                all.push({ fn: f, inh: "" });
            for (const h of inherited)
                all.push({ fn: h.fn, inh: h.base });
            const baseArgs = (fn, inh) => {
                const bc = this.cx.classes.get(c.bases[0].fq);
                const hit = !inh ? fn.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === c.bases[0].fq) : null;
                if (inh && c.bases[0].fq === inh) {
                    const ps = this.cx.funcParams(fn);
                    const aa = [];
                    for (let i = 0; i < ps.length && !ps[i].variadic; i++)
                        aa.push(this.ctorArg(ps[i], i));
                    return aa.join(", ");
                }
                if (hit && hit.args.length) {
                    const a = this.cx.getAnn(hit);
                    if (a.call) {
                        return hit.args.map((x, i) => this.argFor(this.cx.funcParams(a.call)[i].type, x, a.convs[i])).join(", ");
                    }
                    return this.ex(hit.args[0]);
                }
                return "";
            };
            const lines = this.withBody(() => {
                if (c.bases.length) {
                    if (all.length <= 1) {
                        this.line(`parent::__construct(${all.length ? baseArgs(all[0].fn, all[0].inh) : ""});`);
                    }
                    else {
                        all.forEach((x, i) => {
                            this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(x.fn, i)}) {`);
                            this.ind += "  ";
                            this.line(`parent::__construct(${baseArgs(x.fn, x.inh)});`);
                            this.ind = this.ind.slice(0, -2);
                            this.line(`}`);
                        });
                    }
                }
                this.line(`$this->__init_${cn}(...$a);`);
            });
            this.line(`function __construct(...$a) {`);
            this.ind += "  ";
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
            const ilines = this.withBody(() => {
                if (all.length <= 1) {
                    if (all.length)
                        this.ctorBranch(c, all[0].fn, all[0].inh);
                    else
                        this.ctorDefault(c);
                }
                else {
                    all.forEach((x, i) => {
                        this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(x.fn, i)}) {`);
                        this.ind += "  ";
                        this.ctorBranch(c, x.fn, x.inh);
                        this.ind = this.ind.slice(0, -2);
                        this.line(`}`);
                    });
                    this.line(`else { throw new Exception("no matching constructor"); }`);
                }
            });
            this.line(`function __init_${cn}(...$a) {`);
            this.ind += "  ";
            for (const l of ilines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        matchCond(fn, _i) {
            const ps = this.cx.funcParams(fn);
            const named = ps.filter(p => !p.variadic);
            const min = named.filter(p => !p.def).length;
            const parts = [`count($a) >= ${min}`, `count($a) <= ${named.length}`];
            named.forEach((p, i) => {
                const chk = this.typeCheck(`$a[${i}]`, p.type);
                if (chk)
                    parts.push(chk);
            });
            return parts.join(" && ");
        }
        typeCheck(v, t) {
            if (t.name === "__any")
                return "";
            if (t.isFunc)
                return `is_callable(${v})`;
            if (t.isBox()) {
                if (t.ptr > 0 || t.ref)
                    return `(${v} === null || is_array(${v}))`;
                return "";
            }
            if (t.dims.length)
                return `is_array(${v})`;
            const n = CTJ.coreName(t);
            if (n === "bool")
                return `is_bool(${v})`;
            if (n === "float" || n === "double")
                return `(is_float(${v}) || is_int(${v}))`;
            if (CTJ.isNumericName(n) || this.cx.enums.has(this.cx.stripAll(t)))
                return `(is_int(${v}) || is_bool(${v}))`;
            const fq = this.cx.stripAll(t);
            if (this.cx.classes.has(fq))
                return `${v} instanceof ${phpClsName(this.cx.classes.get(fq))}`;
            return "";
        }
        // A default argument is a value; a reference or pointer parameter takes a
        // box, so the default has to be wrapped like any other temporary.
        defArg(p) {
            const d = this.ex(p.def);
            return p.type.isBox() ? `["a" => [${d}], "i" => 0]` : d;
        }
        ctorArg(p, i) {
            const v = `$a[${i}] ?? null`;
            if (p.def)
                return `(array_key_exists(${i}, $a) ? $a[${i}] : (${this.defArg(p)}))`;
            return v;
        }
        ctorBranch(c, fn, inh, noAlias = false) {
            const ps = this.cx.funcParams(fn);
            if (!noAlias) {
                this.alias.push(new Map());
                ps.forEach((p, i) => {
                    if (!p.variadic && p.name)
                        this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
                });
            }
            for (let bi = 1; bi < c.bases.length; bi++) {
                const b = c.bases[bi];
                const bc = this.cx.classes.get(b.fq);
                const hit = !inh ? fn.decl.ctorInit.find(x => this.cx.ctorBase(c, x.name) === b.fq) : null;
                if (inh && b.fq === inh) {
                    const bps = this.cx.funcParams(fn);
                    this.alias.push(new Map());
                    bps.forEach((p, i) => {
                        if (!p.variadic && p.name)
                            this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, i));
                    });
                    this.ctorBranch(bc, fn, "mixin", true);
                    this.alias.pop();
                }
                else if (hit && hit.args.length) {
                    const a = this.cx.getAnn(hit);
                    const bfn = a.call;
                    const bps = this.cx.funcParams(bfn);
                    this.alias.push(new Map());
                    hit.args.forEach((x, i) => {
                        if (i < bps.length && !bps[i].variadic && bps[i].name) {
                            this.alias[this.alias.length - 1].set(bps[i].name, `(${this.ex(x)})`);
                        }
                    });
                    this.ctorBranch(bc, bfn, "mixin", true);
                    this.alias.pop();
                }
                else {
                    const def = (bc.methods.get("#ctor") || []).find(f => {
                        const q = this.cx.funcParams(f);
                        return f.referenced && q.filter(x => !x.variadic).every(x => x.def);
                    });
                    if (def) {
                        const bps = this.cx.funcParams(def);
                        this.alias.push(new Map());
                        bps.forEach((p) => {
                            if (!p.variadic && p.name && p.def)
                                this.alias[this.alias.length - 1].set(p.name, `(${this.defArg(p)})`);
                        });
                        this.ctorBranch(bc, def, "mixin", true);
                        this.alias.pop();
                    }
                    else
                        this.ctorDefault(bc);
                }
            }
            for (const [name, fd] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                const ft = this.cx.fieldType(c, name);
                const hit = !inh ? fn.decl.ctorInit.find(x => CTJ.last(x.name).n === name) : null;
                this.line(`$this->${CTJ.safeJsName(name)} = ${this.fieldInit(ft, fd, hit || null)};`);
            }
            if (!inh || inh === "mixin") {
                this.fnStack.push(fn);
                this.bodyStmts(fn.decl.body || []);
                this.fnStack.pop();
            }
            if (!noAlias)
                this.alias.pop();
        }
        ctorDefault(c) {
            for (let bi = 1; bi < c.bases.length; bi++) {
                this.ctorDefault(this.cx.classes.get(c.bases[bi].fq));
            }
            for (const [name, fd] of c.fields) {
                if (c.fieldStatic.has(name))
                    continue;
                this.line(`$this->${CTJ.safeJsName(name)} = ${this.fieldInit(this.cx.fieldType(c, name), fd, null)};`);
            }
        }
        fieldInit(ft, fd, hit) {
            if (hit) {
                const a = this.cx.getAnn(hit);
                if (a.call) {
                    const fcls = this.cx.stripAll(ft);
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    const init = hit.args.length === 1 && hit.args[0].kind === "initlist" ? hit.args[0].items : hit.args;
                    return this.ctorExpr(cn, a.call, init, a.convs);
                }
                if (hit.args.length)
                    return this.argFor(ft, hit.args[0], null);
            }
            if (fd.init)
                return this.argFor(ft, fd.init, null);
            if (fd.directInit && fd.directInit.length) {
                const a = this.cx.getAnn(fd);
                if (a.call) {
                    const fcls = this.cx.stripAll(ft);
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    return this.ctorExpr(cn, a.call, fd.directInit, a.convs);
                }
                return this.ex(fd.directInit[0]);
            }
            const a = this.cx.getAnn(fd);
            const fcls = !ft.isBox() && !ft.dims.length && !ft.isFunc ? this.cx.stripAll(ft) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                if (a.call)
                    return this.ctorExpr(cn, a.call, [], []);
                return `new ${cn}()`;
            }
            if (ft.dims.length)
                return this.arrayNew(ft);
            if (CTJ.isBoxLike(ft) || ft.isFunc)
                return "null";
            return this.zero(ft);
        }
        ctorExpr(cn, fn, args, convs) {
            const ps = this.cx.funcParams(fn);
            if (ps.length === 1 && args.length === 1 && args[0].kind === "initlist") {
                const items = args[0].items.map(x => this.ex(x));
                return `new ${cn}([${items.join(", ")}])`;
            }
            const aa = args.map((x, i) => {
                const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
                if (pt && x.kind === "initlist") {
                    return `[${x.items.map(y => this.ex(y)).join(", ")}]`;
                }
                return pt ? this.argFor(pt, x, convs[i] || null) : this.ex(x);
            });
            for (let i = args.length; i < ps.length && !ps[i].variadic; i++) {
                aa.push(ps[i].def ? this.defArg(ps[i]) : "null");
            }
            return `new ${cn}(${aa.join(", ")})`;
        }
        emitDtor(c) {
            const fns = c.methods.get("#dtor") || [];
            const fn = fns.find(f => f.referenced);
            const lines = this.withBody(() => {
                if (fn) {
                    this.fnStack.push(fn);
                    this.bodyStmts(fn.decl.body || []);
                    this.fnStack.pop();
                }
                for (const b of c.bases) {
                    const bc = this.cx.classes.get(b.fq);
                    if (bc && bc.referenced)
                        this.line(`$this->__dtor_${phpClsName(bc)}();`);
                }
            });
            this.line(`function __dtor() {`);
            this.ind += "  ";
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        emitMethod(c, fns) {
            const use = fns.filter(f => f.referenced && ((f.decl.body || []).length || f.decl.flags.includes("pure")));
            if (!use.length)
                return;
            const groups = new Map();
            for (const f of use) {
                const k = phpMethodName(f);
                if (!groups.has(k))
                    groups.set(k, []);
                groups.get(k).push(f);
            }
            for (const g of groups.values())
                this.emitMethodGroup(c, g);
        }
        emitMethodGroup(c, use) {
            const m = phpMethodName(use[0]);
            const pre = use[0].isStatic ? "static " : "";
            void c;
            if (use.length === 1) {
                const fn = use[0];
                const ps = this.cx.funcParams(fn);
                const decl = [];
                const defs = [];
                ps.forEach((p, i) => {
                    const nm = p.name ? `$${CTJ.safeJsName(p.name)}` : `$p${i}`;
                    if (p.variadic)
                        decl.push(`...${nm}_rest`);
                    else if (p.def) {
                        decl.push(`${nm} = null`);
                        defs.push({ nm, i, def: this.defArg(p) });
                    }
                    else
                        decl.push(nm);
                });
                const lines = this.withBody(() => {
                    for (const d of defs)
                        this.line(`if (func_num_args() < ${d.i + 1}) ${d.nm} = ${d.def};`);
                    if (fn.decl.flags.includes("pure") && !(fn.decl.body || []).length) {
                        this.line(`throw new Exception("pure virtual called");`);
                    }
                    else {
                        this.fnStack.push(fn);
                        this.bodyStmts(fn.decl.body || []);
                        this.fnStack.pop();
                    }
                });
                this.line(`${pre}function ${m}(${decl.join(", ")}) {`);
                this.ind += "  ";
                for (const l of lines)
                    this.out.push(l);
                this.ind = this.ind.slice(0, -2);
                this.line(`}`);
                return;
            }
            const lines = this.withBody(() => {
                use.forEach((fn, i) => {
                    this.line(`${i === 0 ? "if" : "else if"} (${this.matchCond(fn, i)}) {`);
                    this.ind += "  ";
                    const ps = this.cx.funcParams(fn);
                    this.alias.push(new Map());
                    ps.forEach((p, j) => {
                        if (!p.variadic && p.name)
                            this.alias[this.alias.length - 1].set(p.name, this.ctorArg(p, j));
                    });
                    this.fnStack.push(fn);
                    this.bodyStmts(fn.decl.body || []);
                    this.fnStack.pop();
                    this.alias.pop();
                    this.ind = this.ind.slice(0, -2);
                    this.line(`}`);
                });
                this.line(`else { throw new Exception("no matching overload"); }`);
            });
            this.line(`${pre}function ${m}(...$a) {`);
            this.ind += "  ";
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        // The allocation operators are declared by <new> with no body; storage comes
        // from the target language, and freeing is its business too. A placement
        // version hands back the pointer it was given.
        allocStub(f) {
            if (f.fq === "operatornew" || f.fq === "operatornew[]") {
                return this.cx.funcParams(f).length > 1 ? "return $a[1];" : `return ["a" => array_fill(0, $a[0], 0), "i" => 0];`;
            }
            if (f.fq === "operatordelete" || f.fq === "operatordelete[]")
                return "";
            return null;
        }
        emitFunc(f) {
            if (!(f.decl.body || []).length) {
                const alloc = this.allocStub(f);
                if (alloc !== null)
                    this.line(`function ${phpFuncName(f)}(...$a) { ${alloc} }`);
                else
                    this.line(`function ${phpFuncName(f)}(...$a) { throw new Exception("unresolved external: ${f.fq}"); }`);
                return;
            }
            const ps = this.cx.funcParams(f);
            const decl = [];
            const defs = [];
            ps.forEach((p, i) => {
                const nm = p.name ? `$${CTJ.safeJsName(p.name)}` : `$p${i}`;
                if (p.variadic)
                    decl.push(`...${nm}_rest`);
                else if (p.def) {
                    decl.push(`${nm} = null`);
                    defs.push({ nm, i, def: this.defArg(p) });
                }
                else
                    decl.push(nm);
            });
            const lines = this.withBody(() => {
                for (const d of defs)
                    this.line(`if (func_num_args() < ${d.i + 1}) ${d.nm} = ${d.def};`);
                // A parameter whose address is taken is read through a wrapper, so the
                // value the caller passed has to be put in one first.
                ps.forEach((p, i) => {
                    if (!p.name || p.variadic)
                        return;
                    const node = f.decl.params[i];
                    const v = (node ? this.cx.getAnn(node).var : null);
                    if (v && (v.storage === "boxed" || v.storage === "bbox")) {
                        const nm = `$${CTJ.safeJsName(p.name)}`;
                        this.line(`${nm} = ["v" => ${nm}];`);
                    }
                });
                this.fnStack.push(f);
                this.bodyStmts(f.decl.body || []);
                this.fnStack.pop();
            });
            this.line(`function ${phpFuncName(f)}(${decl.join(", ")}) {`);
            this.ind += "  ";
            for (const l of lines)
                this.out.push(l);
            this.ind = this.ind.slice(0, -2);
            this.line(`}`);
        }
        emitGlobal(v) {
            if (!v.referenced && !v.decl.init && !v.decl.directInit)
                return;
            const t = v.typeCache;
            if (v.lifted) {
                this.line(`$${v.mangled} = null;`);
                this.line(`$${v.mangled}_init = false;`);
                return;
            }
            const init = v.decl.init;
            if (init) {
                this.line(`$${v.mangled} = ${this.argFor(t, init, null)};`);
                return;
            }
            if (v.decl.directInit && v.decl.directInit.length) {
                const a = this.cx.getAnn(v.decl);
                const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
                if (a.call && fcls && this.cx.classes.has(fcls)) {
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    this.line(`$${v.mangled} = ${this.ctorExpr(cn, a.call, v.decl.directInit, a.convs)};`);
                }
                else {
                    this.line(`$${v.mangled} = ${this.ex(v.decl.directInit[0])};`);
                }
                return;
            }
            const a = this.cx.getAnn(v.decl);
            const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                this.line(`$${v.mangled} = ${a.call ? this.ctorExpr(cn, a.call, [], []) : `new ${cn}()`};`);
            }
            else if (t.dims.length) {
                this.line(`$${v.mangled} = ${this.arrayNew(t)};`);
            }
            else if (t.isFunc || CTJ.isBoxLike(t)) {
                this.line(`$${v.mangled} = null;`);
            }
            else if (v.storage === "bbox" || v.storage === "boxed") {
                this.line(`$${v.mangled} = ["v" => ${this.zero(t)}];`);
            }
            else {
                this.line(`$${v.mangled} = ${this.zero(t)};`);
            }
        }
        stmt(s) {
            switch (s.kind) {
                case "compound":
                    if (s.sameScope) {
                        for (const x of s.stmts)
                            this.stmt(x);
                        return;
                    }
                    this.block("", () => { for (const x of s.stmts)
                        this.stmt(x); });
                    return;
                case "expr": {
                    if (s.expr.kind === "delete")
                        return;
                    this.line(`${this.ex(s.expr)};`);
                    return;
                }
                case "decl":
                    this.declStmt(s.decl);
                    return;
                case "if": {
                    if (s.cond.kind === "var") {
                        const vd = s.cond;
                        const v = this.cx.getAnn(vd).var;
                        this.block("", () => {
                            this.varDeclFor(vd, v, v.typeCache);
                            this.block(`if (${this.localName(v)})`, () => this.stmt(s.then));
                            if (s.els)
                                this.block(`else`, () => this.stmt(s.els));
                        });
                        return;
                    }
                    this.block(`if (${this.ex(s.cond)})`, () => this.stmt(s.then));
                    if (s.els)
                        this.block(`else`, () => this.stmt(s.els));
                    return;
                }
                case "switch":
                    if (s.cond.kind === "var") {
                        const vd = s.cond;
                        const v = this.cx.getAnn(vd).var;
                        this.block("", () => {
                            this.varDeclFor(vd, v, v.typeCache);
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
                        const v = this.cx.getAnn(vd).var;
                        this.block("", () => {
                            this.varDeclFor(vd, v, v.typeCache);
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
                        const d = s.init.decl;
                        if (d.kind === "var") {
                            const v = this.cx.getAnn(d).var;
                            const save = this.out;
                            const lines = [];
                            this.out = lines;
                            this.varDeclFor(d, v, v.typeCache);
                            this.out = save;
                            const head = lines.length === 1 ? lines[0].trim().replace(/;$/, "") : `$${v.mangled} = null`;
                            this.block(`for (${head}; ${s.cond ? this.ex(s.cond) : ""}; ${s.step ? this.ex(s.step) : ""})`, () => this.stmt(s.body));
                            return;
                        }
                    }
                    if (s.init)
                        this.stmt(s.init);
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
                    this.needThrow = true;
                    const en = `$e${this.exStack.length}`;
                    this.exStack.push(en);
                    this.line(`try {`);
                    this.ind += "  ";
                    this.stmt(s.body);
                    this.ind = this.ind.slice(0, -2);
                    this.line(`} catch (CtjThrow ${en}) {`);
                    this.ind += "  ";
                    this.line(`$v = ${en}->v;`);
                    s.handlers.forEach((h, i) => {
                        const pre = i === 0 ? "if" : "else if";
                        if (h.ellipsis) {
                            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
                        }
                        else if (h.vdecl) {
                            const v = this.cx.getAnn(h.vdecl).var;
                            const t = v.typeCache;
                            const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
                            if (fq && this.cx.classes.has(fq)) {
                                const cn = phpClsName(this.cx.classes.get(fq));
                                this.block(`${pre} ($v instanceof ${cn})`, () => {
                                    this.line(`$${v.mangled} = $v;`);
                                    this.stmt(h.body);
                                });
                            }
                            else {
                                this.block(pre === "if" ? "if (true)" : "else", () => {
                                    this.line(`$${v.mangled} = $v;`);
                                    this.stmt(h.body);
                                });
                            }
                        }
                        else {
                            this.block(pre === "if" ? "if (true)" : "else", () => this.stmt(h.body));
                        }
                    });
                    if (!s.handlers.some(h => h.ellipsis))
                        this.line(`else { throw ${en}; }`);
                    this.ind = this.ind.slice(0, -2);
                    this.line(`}`);
                    this.exStack.pop();
                    return;
                }
                case "throw":
                    this.needThrow = true;
                    if (!s.expr) {
                        const en = this.exStack[this.exStack.length - 1] || "$e0";
                        this.line(`throw ${en};`);
                    }
                    else {
                        this.line(`throw new CtjThrow(${this.ex(s.expr)});`);
                    }
                    return;
                case "goto":
                    this.cx.fail("goto is not supported", s);
                    return;
                case "null":
                    return;
            }
        }
        declStmt(d) {
            switch (d.kind) {
                case "var": {
                    const v = this.cx.getAnn(d).var;
                    if (!v)
                        return;
                    this.varDeclFor(d, v, v.typeCache);
                    return;
                }
                case "func":
                    return;
                case "class": {
                    const c = [...this.cx.classes.values()].find(x => x.decl === d);
                    if (c && c.referenced && !c.isLambda)
                        this.emitClass(c);
                    return;
                }
                case "linkage":
                    for (const x of d.decls)
                        this.declStmt(x);
                    return;
                default:
                    return;
            }
        }
        varDeclFor(vd, v, t) {
            if (vd.flags.includes("extern"))
                return;
            if (v.lifted) {
                this.usedGlobals.add(`$${v.mangled}`);
                this.usedGlobals.add(`$${v.mangled}_init`);
                const init = this.varInitEx(vd, v, t);
                this.line(`if (!$${v.mangled}_init) { $${v.mangled} = ${init}; $${v.mangled}_init = true; }`);
                const top = this.alias.length ? this.alias[this.alias.length - 1] : null;
                if (top)
                    top.set(v.short, `$${v.mangled}`);
                return;
            }
            const nm = v.isGlobal ? `$${v.mangled}` : this.localName(v);
            const init = this.varInitEx(vd, v, t);
            if (v.storage === "bbox" || v.storage === "boxed")
                this.line(`${nm} = ["v" => ${init}];`);
            else
                this.line(`${nm} = ${init};`);
        }
        varInitEx(vd, v, t) {
            const a = this.cx.getAnn(vd);
            const fcls = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (vd.init) {
                if (fcls && this.cx.classes.has(fcls) && a.call) {
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    const items = vd.init.kind === "initlist" ? vd.init.items : [vd.init];
                    return this.ctorExpr(cn, a.call, items, a.convs);
                }
                if (t.dims.length && vd.init.kind === "initlist") {
                    return this.arrayInit(t, vd.init.items);
                }
                return this.argFor(t, vd.init, null);
            }
            if (vd.directInit && vd.directInit.length) {
                if (fcls && this.cx.classes.has(fcls) && a.call) {
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    return this.ctorExpr(cn, a.call, vd.directInit, a.convs);
                }
                return this.ex(vd.directInit[0]);
            }
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                return a.call ? this.ctorExpr(cn, a.call, [], []) : `new ${cn}()`;
            }
            if (t.dims.length)
                return this.arrayNew(t);
            if (t.isFunc || CTJ.isBoxLike(t))
                return "null";
            return this.zero(t);
        }
        arrayInit(t, items) {
            const et = new CTJ.CppType(t.name);
            et.segs = t.segs;
            et.ptr = t.ptr;
            et.ref = t.ref;
            et.dims = t.dims.slice(1);
            return `[${items.map(x => this.argFor(et, x, null)).join(", ")}]`;
        }
        arrayNew(t) {
            if (t.dims[0] < 0 || typeof t.dims[0] !== "number")
                return "[]";
            const n = t.dims[0];
            const et = new CTJ.CppType(t.name);
            et.segs = t.segs;
            et.ptr = t.ptr;
            et.ref = t.ref;
            et.dims = t.dims.slice(1);
            if (et.dims.length) {
                const inner = this.arrayNew(et).replace(/\b0\b/, "0");
                void inner;
                return `array_fill(0, ${n}, ${this.arrayNew(et)})`;
            }
            const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                void cn;
                const parts = [];
                for (let i = 0; i < Math.min(n, 64); i++)
                    parts.push(`new ${cn}()`);
                if (n <= 64)
                    return `[${parts.join(", ")}]`;
                return `array_map(function () { return new ${cn}(); }, range(1, ${n}))`;
            }
            if (CTJ.isBoxLike(et) || et.isFunc)
                return `array_fill(0, ${n}, null)`;
            return `array_fill(0, ${n}, ${this.zero(et)})`;
        }
        rangeFor(s) {
            const v = this.cx.getAnn(s.vdecl).var;
            const t = v.typeCache;
            const rt = this.cx.getAnn(s.range).t;
            const ri = this.rangeN++;
            if (rt.dims.length) {
                const arr = this.complex(this.ex(s.range), s.range);
                const idx = `$i${ri}`;
                const elem = `${arr}[${idx}]`;
                this.block(`for (${idx} = 0; ${idx} < count(${arr}); ${idx}++)`, () => {
                    this.rangeVar(v, t, elem, arr, idx);
                    this.stmt(s.body);
                });
                return;
            }
            const info = this.cx.getAnn(s).range;
            const obj = this.complex(this.ex(s.range), s.range);
            const b = `$b${ri}`;
            const e = `$e${ri}`;
            const bm = phpMethodName(info.beginFn);
            const em = phpMethodName(info.endFn);
            const nm = phpMethodName(info.neFn);
            const im = phpMethodName(info.incFn);
            const sm = phpMethodName(info.starFn);
            this.block(`for (${b} = ${obj}->${bm}(), ${e} = ${obj}->${em}(); ${b}->${nm}(${e}); ${b}->${im}())`, () => {
                this.rangeVar(v, t, `${b}->${sm}()`, "", "");
                this.stmt(s.body);
            });
        }
        rangeVar(v, t, elem, arr, idx) {
            const nm = this.localName(v);
            if (v.storage === "box") {
                if (arr)
                    this.line(`${nm} = ["a" => ${arr}, "i" => ${idx}];`);
                else
                    this.line(`${nm} = ${elem};`);
                return;
            }
            const fqs = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fqs && this.cx.classes.has(fqs)) {
                const cn = phpClsName(this.cx.classes.get(fqs));
                this.line(`${nm} = new ${cn}(${elem});`);
                return;
            }
            if (arr)
                this.line(`${nm} = ${elem};`);
            else
                this.line(`${nm} = (${elem})["a"][(${elem})["i"]];`);
        }
        ex(e) {
            switch (e.kind) {
                case "lit": return this.lit(e);
                case "id": return this.exId(e);
                case "this": return "$this";
                case "call": return this.exCallValue(e);
                case "index": return this.exIndex(e);
                case "member": return this.exMember(e);
                case "unary": return this.exUnary(e);
                case "binary": return this.exBinary(e);
                case "assign": return this.exAssign(e);
                case "cond": return `(${this.ex(e.c)} ? ${this.ex(e.a)} : ${this.ex(e.b)})`;
                case "new": return this.exNew(e);
                case "delete": return "null";
                case "cast": return this.exCast(e);
                case "sizeof": {
                    const t = this.sizeofType(e);
                    return String(CTJ.constSizeof(this.cx, t, new Set()));
                }
                case "typeid": return this.exTypeid(e);
                case "lambda": return this.exLambda(e);
                case "initlist": return `[${e.items.map(x => this.ex(x)).join(", ")}]`;
                case "stmtexpr": {
                    const save = this.out;
                    const lines = [];
                    this.out = lines;
                    this.ind += "  ";
                    for (const s of e.stmts)
                        this.stmt(s);
                    this.ind = this.ind.slice(0, -2);
                    this.out = save;
                    return `(function () {\n${lines.join("\n")}\n${this.ind}})()`;
                }
                case "noexcept": return "true";
            }
        }
        lit(e) {
            switch (e.lkind) {
                case "int":
                case "float": return String(CTJ.parseNumber(e.value));
                case "char": return String(CTJ.parseChar(e.value));
                case "bool": return e.value;
                case "null": return "null";
                case "string": return this.strLit(e.value);
                default: return "0";
            }
        }
        strLit(raw) {
            const codes = [];
            const inner = raw.slice(1, -1);
            for (let i = 0; i < inner.length; i++) {
                const ch = inner[i];
                if (ch === "\\" && i + 1 < inner.length) {
                    const n = inner[++i];
                    if (n === "n")
                        codes.push(10);
                    else if (n === "t")
                        codes.push(9);
                    else if (n === "r")
                        codes.push(13);
                    else if (n === "0")
                        codes.push(0);
                    else if (n === "a")
                        codes.push(7);
                    else if (n === "b")
                        codes.push(8);
                    else if (n === "f")
                        codes.push(12);
                    else if (n === "v")
                        codes.push(11);
                    else if (n === "\\")
                        codes.push(92);
                    else if (n === "'")
                        codes.push(39);
                    else if (n === '"')
                        codes.push(34);
                    else if (n === "x") {
                        codes.push(parseInt(inner.substr(i + 1, 2), 16) || 0);
                        i += 2;
                    }
                    else if (n >= "0" && n <= "7") {
                        let o = n;
                        for (let k = 0; k < 2 && i + 1 < inner.length && inner[i + 1] >= "0" && inner[i + 1] <= "7"; k++)
                            o += inner[++i];
                        codes.push(parseInt(o, 8) & 255);
                    }
                    else
                        codes.push(n.charCodeAt(0));
                }
                else if (ch === '"') {
                    continue;
                }
                else if (ch.charCodeAt(0) >= 128) {
                    const bytes = unescape(encodeURIComponent(ch));
                    for (let k = 0; k < bytes.length; k++)
                        codes.push(bytes.charCodeAt(k));
                }
                else
                    codes.push(ch.charCodeAt(0));
            }
            codes.push(0);
            return `[${codes.join(", ")}]`;
        }
        // The string and memory builtins work on the same boxes every other pointer
        // uses: an array of bytes and an offset into it.
        exMemBuiltin(name, e) {
            const a = e.args.map(x => this.ex(x));
            // A string literal is a bare array of bytes; every other pointer is a box.
            const p = (i) => `(function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })(${a[i]})`;
            switch (name) {
                case "__builtin_strlen":
                    return `(function ($s) { $i = $s["i"]; while (($s["a"][$i] ?? 0)) $i++; return $i - $s["i"]; })(${p(0)})`;
                case "__builtin_strcmp":
                    return `(function ($x, $y) { $i = $x["i"]; $j = $y["i"]; while (($x["a"][$i] ?? 0) && ($x["a"][$i] ?? 0) === ($y["a"][$j] ?? 0)) { $i++; $j++; } return ($x["a"][$i] ?? 0) - ($y["a"][$j] ?? 0); })(${p(0)}, ${p(1)})`;
                case "__builtin_strncmp":
                    return `(function ($x, $y, $n) { $i = $x["i"]; $j = $y["i"]; $k = 0; while ($k < $n && ($x["a"][$i] ?? 0) && ($x["a"][$i] ?? 0) === ($y["a"][$j] ?? 0)) { $i++; $j++; $k++; } return $k >= $n ? 0 : ($x["a"][$i] ?? 0) - ($y["a"][$j] ?? 0); })(${p(0)}, ${p(1)}, ${a[2]})`;
                case "__builtin_strcpy":
                    return `(function ($d, $s) { $i = $d["i"]; $j = $s["i"]; while (($d["a"][$i] = ($s["a"][$j] ?? 0))) { $i++; $j++; } return $d; })(${p(0)}, ${p(1)})`;
                case "__builtin_strncpy":
                    return `(function ($d, $s, $n) { $i = $d["i"]; $j = $s["i"]; $k = 0; for (; $k < $n && ($s["a"][$j] ?? 0); $k++) { $d["a"][$i] = $s["a"][$j]; $i++; $j++; } for (; $k < $n; $k++) { $d["a"][$i] = 0; $i++; } return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
                case "__builtin_strcat":
                    return `(function ($d, $s) { $i = $d["i"]; while (($d["a"][$i] ?? 0)) $i++; $j = $s["i"]; while (($d["a"][$i] = ($s["a"][$j] ?? 0))) { $i++; $j++; } return $d; })(${p(0)}, ${p(1)})`;
                case "__builtin_strchr":
                    return `(function ($s, $c) { $i = $s["i"]; while (($s["a"][$i] ?? 0) && ($s["a"][$i] ?? 0) !== ($c & 255)) $i++; return ($s["a"][$i] ?? 0) === ($c & 255) ? ["a" => $s["a"], "i" => $i] : null; })(${p(0)}, ${a[1]})`;
                case "__builtin_memset":
                    return `(function ($d, $c, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $c & 255; return $d; })(${p(0)}, ${a[1]}, ${a[2]})`;
                case "__builtin_memcpy":
                    return `(function ($d, $s, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $s["a"][$s["i"] + $k]; return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
                case "__builtin_memmove":
                    return `(function ($d, $s, $n) { $t = array_slice($s["a"], $s["i"], $n); for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $t[$k]; return $d; })(${p(0)}, ${p(1)}, ${a[2]})`;
                case "__builtin_memcmp":
                    return `(function ($x, $y, $n) { for ($k = 0; $k < $n; $k++) { $d = ($x["a"][$x["i"] + $k] ?? 0) - ($y["a"][$y["i"] + $k] ?? 0); if ($d) return $d; } return 0; })(${p(0)}, ${p(1)}, ${a[2]})`;
                default:
                    return null;
            }
        }
        exId(e) {
            var _a;
            const a = this.cx.getAnn(e);
            const s = a.sym;
            if (!s)
                this.cx.fail("unresolved name", e);
            if (s.k === "enumval") {
                const vals = this.cx.enumValues(s.e);
                return String((_a = vals.get(s.item)) !== null && _a !== void 0 ? _a : 0);
            }
            if (s.k === "func") {
                const f = s.fns[0];
                if (f.isMethod && !f.isStatic)
                    this.cx.fail("member function value is not supported", e);
                if (f.isMethod) {
                    const cls = this.cx.classes.get(f.cls);
                    return `["${phpClsName(cls)}", "${phpMethodName(f)}"]`;
                }
                return `"${phpFuncName(f)}"`;
            }
            if (s.k !== "var")
                this.cx.fail("type used as value", e);
            const v = s.v;
            const nm = this.varName(v, a.needsThis);
            const t = v.typeCache;
            if (v.storage === "box") {
                if (t.isFunc)
                    return nm;
                if (t.ref)
                    return `${this.paren(nm)}["a"][${this.paren(nm)}["i"]]`;
                return nm;
            }
            if (v.storage === "bbox" || v.storage === "boxed")
                return `${this.paren(nm)}["v"]`;
            return nm;
        }
        paren(s) {
            return /^\$[A-Za-z_][\w$]*(->[A-Za-z_][\w$]*|::\$[A-Za-z_][\w$]*)*$/.test(s) ? s : `(${s})`;
        }
        complex(s, e) {
            if (this.isSimple(e))
                return s;
            const t = this.tmp();
            return `(${t} = ${s}, ${t})`;
        }
        isSimple(e) {
            switch (e.kind) {
                case "lit":
                case "id":
                case "this": return true;
                case "member": return this.isSimple(e.obj);
                case "index": return this.isSimple(e.arr) && this.isSimple(e.idx);
                case "unary": return (e.op === "*" || e.op === "&") && this.isSimple(e.arg);
                case "cast": return !this.cx.getAnn(e).call && !this.cx.getAnn(e).conv && this.isSimple(e.arg);
                default: return false;
            }
        }
        exBox(e) {
            const et = this.cx.getAnn(e).t;
            if (et && et.ptr > 0 && !et.isFunc)
                return this.ex(e);
            switch (e.kind) {
                case "id": {
                    const s = this.cx.getAnn(e).sym;
                    if (!s || s.k !== "var")
                        return this.ex(e);
                    const v = s.v;
                    const t = v.typeCache;
                    if (t.isFunc)
                        return this.ex(e);
                    const nm = this.varName(v, this.cx.getAnn(e).needsThis);
                    if (v.storage === "box")
                        return nm;
                    if (v.storage === "bbox")
                        return `${this.paren(nm)}["v"]`;
                    if (v.storage === "boxed")
                        return `["a" => ${nm}, "i" => "v"]`;
                    if (t.dims.length)
                        return `["a" => ${nm}, "i" => 0]`;
                    return `["a" => [${nm}], "i" => 0]`;
                }
                case "member": {
                    const m = this.cx.getAnn(e);
                    const f = m.sym;
                    if (!f || f.k !== "var" || !f.v.isField)
                        return `["a" => [${this.ex(e)}], "i" => 0]`;
                    const v = f.v;
                    const fname = CTJ.safeJsName(v.short);
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    if (v.isStatic)
                        return `["a" => ${phpClsName(cls)}, "i" => "${fname}"]`;
                    const o = this.objOf(e.obj);
                    if (this.cx.fieldType(cls, v.short).ref)
                        return `${this.paren(o)}->${fname}`;
                    return `["a" => ${o}, "i" => "${fname}"]`;
                }
                case "index": {
                    const m = this.cx.getAnn(e);
                    if (m.call)
                        return this.ex(e);
                    const at = this.cx.getAnn(e.arr).t;
                    if (at.ptr > 0) {
                        const p = this.complex(this.ex(e.arr), e.arr);
                        const pp = this.paren(p);
                        if (this.isZeroLit(e.idx))
                            return p;
                        return `["a" => ${pp}["a"], "i" => ${pp}["i"] + (${this.ex(e.idx)})]`;
                    }
                    const arr = this.complex(this.ex(e.arr), e.arr);
                    return `["a" => ${arr}, "i" => (${this.ex(e.idx)})]`;
                }
                case "unary":
                    if (e.op === "*")
                        return this.ex(e.arg);
                    if (e.op === "&")
                        return this.exBox(e.arg);
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
                case "call":
                case "this":
                    if (e.kind === "this")
                        return `["a" => [$this], "i" => 0]`;
                    // A call returning a reference already yields a box; any other rvalue
                    // needs a temporary one to be passed by reference.
                    if (et && et.ref)
                        return this.exCall(e);
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
                case "lit":
                    if (e.lkind === "string")
                        return `["a" => ${this.lit(e)}, "i" => 0]`;
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
                case "cond":
                    return `(${this.ex(e.c)} ? ${this.exBox(e.a)} : ${this.exBox(e.b)})`;
                case "binary":
                    if (e.op === ",")
                        return `(${this.ex(e.l)}, ${this.exBox(e.r)})`;
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
                case "cast": {
                    // A cast to a pointer or a reference yields the box of its operand;
                    // wrapping it again would point at the box instead of the value.
                    const ct = this.cx.getAnn(e).t;
                    if (ct && ct.isBox())
                        return this.ex(e);
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
                }
                default:
                    return `["a" => [${this.ex(e)}], "i" => 0]`;
            }
        }
        lvalue(e) {
            switch (e.kind) {
                case "id": {
                    const s = this.cx.getAnn(e).sym;
                    if (!s || s.k !== "var")
                        this.cx.fail("not assignable", e);
                    const v = s.v;
                    const t = v.typeCache;
                    const nm = this.varName(v, this.cx.getAnn(e).needsThis);
                    if (v.storage === "box" && t.ref)
                        return `${this.paren(nm)}["a"][${this.paren(nm)}["i"]]`;
                    if (v.storage === "bbox" || v.storage === "boxed")
                        return `${this.paren(nm)}["v"]`;
                    return nm;
                }
                case "member": {
                    const m = this.cx.getAnn(e);
                    const f = m.sym;
                    if (!f || f.k !== "var" || !f.v.isField)
                        this.cx.fail("not assignable", e);
                    const v = f.v;
                    const fname = CTJ.safeJsName(v.short);
                    const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
                    if (v.isStatic)
                        return `${phpClsName(cls)}::$${fname}`;
                    let o = this.objOf(e.obj);
                    if (m.arrowCall)
                        o = `(${this.paren(o)}->${phpMethodName(m.arrowCall)}())`;
                    if (this.cx.fieldType(cls, v.short).ref) {
                        const t = this.tmp();
                        return `(${t} = ${this.paren(o)}->${fname}, ${t}["a"][${t}["i"]])`;
                    }
                    return `${this.paren(o)}->${fname}`;
                }
                case "index": {
                    const m = this.cx.getAnn(e);
                    if (m.call) {
                        const t = this.tmp();
                        return `(${t} = ${this.ex(e)}, ${t}["a"][${t}["i"]])`;
                    }
                    const at = this.cx.getAnn(e.arr).t;
                    if (at.ptr > 0) {
                        const p = this.complex(this.ex(e.arr), e.arr);
                        const pp = this.paren(p);
                        if (this.isZeroLit(e.idx))
                            return `${pp}["a"][${pp}["i"]]`;
                        return `${pp}["a"][${pp}["i"] + (${this.ex(e.idx)})]`;
                    }
                    const arr = this.complex(this.ex(e.arr), e.arr);
                    return `${this.paren(arr)}[${this.ex(e.idx)}]`;
                }
                case "unary": {
                    if (e.op !== "*")
                        this.cx.fail("not assignable", e);
                    const p = this.complex(this.ex(e.arg), e.arg);
                    const pp = this.paren(p);
                    return `${pp}["a"][${pp}["i"]]`;
                }
                case "call": {
                    const t = this.tmp();
                    // A call returning a scalar reference already yields the box.
                    const c = this.returnsScalarRef(e) ? this.exCall(e) : this.ex(e);
                    return `(${t} = ${c}, ${t}["a"][${t}["i"]])`;
                }
                default:
                    this.cx.fail("not assignable", e);
                    return "";
            }
        }
        objOf(e) {
            const t = this.cx.getAnn(e).t;
            const s = this.complex(this.ex(e), e);
            if (e.kind === "this")
                return s;
            if (t && t.ptr > 0) {
                const p = this.paren(s);
                return `(${p}["a"][${p}["i"]])`;
            }
            return s;
        }
        deref(e) {
            const s = this.complex(this.ex(e), e);
            const p = this.paren(s);
            return `${p}["a"][${p}["i"]]`;
        }
        exAddr(e) {
            if (e.kind === "id") {
                const s = this.cx.getAnn(e).sym;
                if (s && s.k === "var" && s.v.storage === "bbox") {
                    const nm = this.varName(s.v, this.cx.getAnn(e).needsThis);
                    return `["a" => ${nm}, "i" => "v"]`;
                }
            }
            return this.exBox(e);
        }
        splitLhs(e) {
            if (e.kind === "call")
                return true;
            if (e.kind === "index" && this.cx.getAnn(e).call)
                return true;
            return false;
        }
        // A null pointer is null itself, so reading through one needs a guard.
        pidx(x) {
            return `(${x} ? ${this.paren(x)}["i"] : 0)`;
        }
        parr(x) {
            return `(${x} ? ${this.paren(x)}["a"] : null)`;
        }
        pbox(s, e, t) {
            const x = this.complex(s, e);
            // "this + 1" addresses the storage that follows the object, as
            // "reinterpret_cast<_CharT*>(this + 1)" does in a header that keeps its
            // data behind the object: the instance gets an array to be addressed in.
            if (e.kind === "this")
                return `["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)]`;
            if (t.dims.length && !t.isBox())
                return `["a" => ${x}, "i" => 0]`;
            return x;
        }
        isZeroLit(e) {
            return e.kind === "lit" && (e.lkind === "null" || ((e.lkind === "int" || e.lkind === "char") && CTJ.parseNumber(e.value) === 0));
        }
        argFor(p, x, conv) {
            if (conv && conv.kind === "ctor") {
                const fq = this.cx.stripAll(p);
                const cn = phpClsName(this.cx.classes.get(fq));
                const cps = this.cx.funcParams(conv.fn);
                const inner = cps.length ? this.argFor(cps[0].type, x, null) : this.ex(x);
                return `new ${cn}(${inner})`;
            }
            if (conv && conv.kind === "conv") {
                return `${this.paren(this.objOf(x))}->${phpMethodName(conv.fn)}()`;
            }
            const at = this.cx.getAnn(x).t;
            const pB = CTJ.isBoxLike(p);
            const aB = at ? CTJ.isBoxLike(at) : false;
            if (p.dims.length && x.kind === "initlist") {
                return this.arrayInit(p, x.items);
            }
            if (pB && !aB) {
                if (!at || at.name === "__null")
                    return "null";
                if (this.isZeroLit(x))
                    return "null";
                if (at.isFunc)
                    return this.ex(x);
                return this.exBox(x);
            }
            if (!pB && aB) {
                if (at && at.name === "__null" && CTJ.coreName(p) === "bool")
                    return "false";
                // Reading a reference variable already yields the value it refers to;
                // only an expression that produces a fat pointer needs one more step.
                if (x.kind === "id") {
                    const sym = this.cx.getAnn(x).sym;
                    if (sym && sym.k === "var" && sym.v.typeCache && sym.v.typeCache.ref)
                        return this.ex(x);
                }
                return this.deref(x);
            }
            if (CTJ.coreName(p) === "bool" && at && !CTJ.isNumericName(CTJ.coreName(at)) && !this.cx.enums.has(this.cx.stripAll(at)) && at.name !== "__null" && !at.isBox()) {
                return `(${this.ex(x)} !== null)`;
            }
            if (p.ptr > 0 && at && at.dims.length && !at.isBox())
                return this.exBox(x);
            if (pB && aB) {
                if (at && at.ref)
                    return this.exBox(x);
                // A reference parameter reads through an address, so a pointer value has
                // to be given one: a pointer is already a box.
                if (p.ref && at && !at.ref && !at.isFunc && !at.dims.length && at.ptr > 0) {
                    return `["a" => [${this.ex(x)}], "i" => 0]`;
                }
                return this.ex(x);
            }
            if (at && at.name === "__null" && CTJ.isNumericName(CTJ.coreName(p)))
                return "0";
            if (CTJ.isIntegerName(CTJ.coreName(p)) && at && (CTJ.coreName(at) === "float" || CTJ.coreName(at) === "double")) {
                return `(int)(${this.ex(x)})`;
            }
            if (CTJ.coreName(p) === "bool" && at && at.isBox() && !at.isFunc)
                return `(${this.ex(x)} !== null)`;
            return this.ex(x);
        }
        returnEx(s, x) {
            const a = this.cx.getAnn(s);
            if (a.call) {
                const scopeFn = this.curFn();
                const ret = scopeFn ? this.cx.funcRet(scopeFn) : CTJ.CppType.basic("void");
                const fq = this.cx.stripAll(ret);
                const cn = phpClsName(this.cx.classes.get(fq));
                const items = x.kind === "initlist" ? x.items : [x];
                return this.ctorExpr(cn, a.call, items, a.convs);
            }
            const scopeFn = this.curFn();
            if (!scopeFn)
                return this.ex(x);
            const ret = this.cx.funcRet(scopeFn);
            if (ret.name === "void")
                return this.ex(x);
            return this.argFor(ret, x, null);
        }
        // A call that returns a reference to a scalar hands back a box; where a
        // value is wanted it stands for the element the box points at, exactly as a
        // reference variable does.
        // The left side of an assignment reached through a box. A call returning a
        // scalar reference is one already, so it must not be read through twice.
        lhsBox(e) {
            return e.kind === "call" && this.returnsScalarRef(e) ? this.exCall(e) : this.ex(e);
        }
        returnsScalarRef(e) {
            const t = this.cx.getAnn(e).t;
            return !!t && t.ref !== "" && !t.dims.length && !t.isFunc &&
                !this.cx.classes.has(this.cx.stripAll(t));
        }
        exCallValue(e) {
            if (this.returnsScalarRef(e)) {
                const v = this.tmp();
                return `(${v} = ${this.exCall(e)}, ${v}["a"][${v}["i"]])`;
            }
            return this.exCall(e);
        }
        exCall(e) {
            const a = this.cx.getAnn(e);
            // A destructor call that resolved to no destructor has nothing to do; the
            // target language reclaims the storage itself.
            if (!a.call && e.fn.kind === "member" && e.fn.field.charAt(0) === "~")
                return "null";
            if (typeof a.call === "object" && a.call !== null && "builtin" in a.call) {
                return this.exBuiltin(a.call.builtin, e);
            }
            const fn = a.call;
            if (!fn) {
                if (e.fn.kind === "member") {
                    const m = e.fn;
                    const o = this.objOf(m.obj);
                    const ma = this.cx.getAnn(m);
                    const f = ma.sym;
                    if (f && f.k === "var" && f.v.isField) {
                        return `${this.paren(o)}->${CTJ.safeJsName(f.v.short)}(${e.args.map(x => this.ex(x)).join(", ")})`;
                    }
                }
                if (e.fn.kind === "id")
                    return `${this.ex(e.fn)}(${e.args.map(x => this.ex(x)).join(", ")})`;
                return `(${this.ex(e.fn)})(${e.args.map(x => this.ex(x)).join(", ")})`;
            }
            const ps = this.cx.funcParams(fn);
            const aa = [];
            e.args.forEach((x, i) => {
                const pt = i < ps.length && !ps[i].variadic ? ps[i].type : null;
                if (pt && x.kind === "initlist") {
                    aa.push(`[${x.items.map(y => this.ex(y)).join(", ")}]`);
                }
                else {
                    aa.push(pt ? this.argFor(pt, x, a.convs[i] || null) : this.ex(x));
                }
            });
            for (let i = e.args.length; i < ps.length && !ps[i].variadic; i++) {
                aa.push(ps[i].def ? this.defArg(ps[i]) : "null");
            }
            let s;
            if (!fn.isMethod) {
                s = `${phpFuncName(fn)}(${aa.join(", ")})`;
            }
            else if (fn.isStatic) {
                const cls = this.cx.classes.get(fn.cls);
                s = `${phpClsName(cls)}::${phpMethodName(fn)}(${aa.join(", ")})`;
            }
            else if (e.fn.kind === "member") {
                let o = this.objOf(e.fn.obj);
                const ma = this.cx.getAnn(e.fn);
                if (ma.arrowCall)
                    o = `(${this.paren(o)}->${phpMethodName(ma.arrowCall)}())`;
                if (e.fn.qual.length) {
                    const cls = this.cx.classes.get(fn.cls);
                    const qn = phpClsName(cls);
                    s = `(Closure::bind(function (...$a) { return $this->${phpMethodName(fn)}(...$a); }, ${o}, ${qn}::class))(${aa.join(", ")})`;
                }
                else {
                    s = `${this.paren(o)}->${phpMethodName(fn)}(${aa.join(", ")})`;
                }
            }
            else if (e.fn.kind === "id") {
                if (e.fn.parts.length > 1)
                    this.cx.warn("explicit qualification is approximated", e.fn);
                s = `$this->${phpMethodName(fn)}(${aa.join(", ")})`;
            }
            else {
                s = `${this.paren(this.objOf(e.fn))}->${phpMethodName(fn)}(${aa.join(", ")})`;
            }
            if (a.copyCtor) {
                const ret = this.cx.funcRet(fn);
                const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)));
                s = `new ${cn}(${s})`;
            }
            return s;
        }
        exBuiltin(name, e) {
            if (name === "__ctj_php") {
                if (!e.args.length || e.args[0].kind !== "lit" || e.args[0].lkind !== "string") {
                    this.cx.fail("__ctj_php needs a string literal", e);
                }
                let tpl = (e.args[0].value).slice(1, -1);
                for (let i = 1; i < e.args.length; i++) {
                    tpl = tpl.split(`$${i}`).join(`(${this.ex(e.args[i])})`);
                }
                return `(${tpl})`;
            }
            if (name === "__ctj_js")
                return "null";
            if (name === "__builtin_expect" || name === "__builtin_expect_with_probability")
                return this.ex(e.args[0]);
            if (name === "__builtin_choose_expr") {
                const c = CTJ.constEval(this.cx, e.args[0], CTJ.rootScope());
                return this.ex(e.args[c ? 1 : 2]);
            }
            if (name === "__builtin_constant_p") {
                const c = CTJ.constEval(this.cx, e.args[0], CTJ.rootScope());
                return c === null ? "0" : "1";
            }
            if (name === "__builtin_unreachable" || name === "__builtin_trap" || name === "__builtin_abort") {
                return `(function () { throw new Exception("${name}"); })()`;
            }
            if (CTJ.isMathBuiltin(name)) {
                let m = name.slice("__builtin_".length);
                if (m === "nan" || m === "nanf" || m === "nans")
                    return "NAN";
                if (m === "inf" || m === "inff" || m === "huge_val")
                    return "INF";
                if (m === "cbrt")
                    return `pow(${this.ex(e.args[0])}, 1/3)`;
                if (m === "fmin")
                    return `min(${e.args.map(x => this.ex(x)).join(", ")})`;
                if (m === "fmax")
                    return `max(${e.args.map(x => this.ex(x)).join(", ")})`;
                if (m === "copysign") {
                    const x = this.ex(e.args[0]);
                    const y = this.ex(e.args[1]);
                    return `(((${y}) < 0 ? -1 : 1) * abs(${x}))`;
                }
                if (m === "trunc")
                    return `(int)(${this.ex(e.args[0])})`;
                if (m.endsWith("f"))
                    m = m.slice(0, -1);
                if (m === "fabs")
                    m = "abs";
                return `${m}(${e.args.map(x => this.ex(x)).join(", ")})`;
            }
            if (name === "__builtin_clz") {
                const x = this.ex(e.args[0]);
                return `((${x}) === 0 ? 32 : 32 - strlen(decbin((${x}) & 0xffffffff)))`;
            }
            if (name === "__builtin_ctz") {
                const x = this.ex(e.args[0]);
                return `(function ($v) { if ($v === 0) return 32; $b = decbin($v & 0xffffffff); return strlen($b) - 1 - strrpos($b, "1"); })(${x})`;
            }
            if (name === "__builtin_popcount") {
                const x = this.ex(e.args[0]);
                return `substr_count(decbin((${x}) & 0xffffffff), "1")`;
            }
            if (name === "__builtin_ffs") {
                const x = this.ex(e.args[0]);
                return `(function ($v) { $v = $v & 0xffffffff; if ($v === 0) return 0; return 32 - (32 - strlen(decbin($v & -$v))); })(${x})`;
            }
            if (name === "__builtin_parity") {
                const x = this.ex(e.args[0]);
                return `(substr_count(decbin((${x}) & 0xffffffff), "1") & 1)`;
            }
            if (name === "__builtin_bswap16") {
                const x = this.ex(e.args[0]);
                return `((((${x}) & 255) << 8) | (((${x}) >> 8) & 255))`;
            }
            if (name === "__builtin_bswap32") {
                const x = this.ex(e.args[0]);
                return `((((${x}) & 255) << 24) | (((${x}) & 0xff00) << 8) | (((${x}) >> 8) & 0xff00) | (((${x}) >> 24) & 255))`;
            }
            if (name === "__builtin_bswap64") {
                const x = this.ex(e.args[0]);
                return `((((${x}) & 255) << 56) | (((${x}) & 0xff00) << 40) | (((${x}) & 0xff0000) << 24) | (((${x}) & 0xff000000) << 8) | (((${x}) >> 8) & 0xff000000) | (((${x}) >> 24) & 0xff0000) | (((${x}) >> 40) & 0xff00) | (((${x}) >> 56) & 255))`;
            }
            if (name === "__builtin_alloca")
                return `["a" => array_fill(0, ${this.ex(e.args[0])}, 0), "i" => 0]`;
            if (name === "__builtin_offsetof")
                return "0";
            if (name === "__builtin_types_compatible_p") {
                const x = this.cx.getAnn(e.args[0]).t;
                const y = this.cx.getAnn(e.args[1]).t;
                return x.key() === y.key() ? "1" : "0";
            }
            if (name === "__builtin_add_overflow" || name === "__builtin_sub_overflow" || name === "__builtin_mul_overflow")
                return "false";
            if (name === "__builtin_frame_address" || name === "__builtin_return_address" || name === "__builtin_extract_return_addr")
                return "null";
            if (name === "__builtin_FILE" || name === "__builtin_FUNCTION")
                return this.strLit(`"${e.file}"`);
            if (name === "__builtin_LINE")
                return String(e.line);
            const mem = this.exMemBuiltin(name, e);
            if (mem !== null)
                return mem;
            return `(function () { throw new Exception("unresolved ${name}"); })()`;
        }
        exIndex(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                const o = this.objOf(e.arr);
                const aa = this.argFor(ps[0].type, e.idx, a.convs[0] || null);
                let s = `${this.paren(o)}->${phpMethodName(fn)}(${aa})`;
                if (a.copyCtor) {
                    const ret = this.cx.funcRet(fn);
                    const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)));
                    s = `new ${cn}(${s})`;
                }
                return s;
            }
            const at = this.cx.getAnn(e.arr).t;
            if (at.ptr > 0) {
                const p = this.complex(this.ex(e.arr), e.arr);
                const pp = this.paren(p);
                if (this.isZeroLit(e.idx))
                    return `${pp}["a"][${pp}["i"]]`;
                return `${pp}["a"][${pp}["i"] + (${this.ex(e.idx)})]`;
            }
            const arr = this.complex(this.ex(e.arr), e.arr);
            return `${this.paren(arr)}[${this.ex(e.idx)}]`;
        }
        exMember(e) {
            const a = this.cx.getAnn(e);
            const f = a.sym;
            if (!f || f.k !== "var" || !f.v.isField)
                this.cx.fail("bad member", e);
            const v = f.v;
            const cls = this.cx.classes.get(v.fq.split("::").slice(0, -1).join("::"));
            if (v.isStatic)
                return `${phpClsName(cls)}::$${CTJ.safeJsName(v.short)}`;
            let o = this.objOf(e.obj);
            if (a.arrowCall)
                o = `(${this.paren(o)}->${phpMethodName(a.arrowCall)}())`;
            const fname = this.fieldName(cls, v.short);
            if (this.cx.fieldType(cls, v.short).ref) {
                const t = this.tmp();
                return `(${t} = ${this.paren(o)}->${fname}, ${t}["a"][${t}["i"]])`;
            }
            return `${this.paren(o)}->${fname}`;
        }
        exUnary(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const o = this.objOf(e.arg);
                if (e.op === "++" || e.op === "--") {
                    const ps = this.cx.funcParams(fn);
                    const post = ps.length === 1 ? "(0)" : "()";
                    return `${this.paren(o)}->${phpMethodName(fn)}${post}`;
                }
                return `${this.paren(o)}->${phpMethodName(fn)}()`;
            }
            if (e.op === "*") {
                const at = this.cx.getAnn(e.arg).t;
                if (at.isFunc)
                    return this.ex(e.arg);
                if (e.arg.kind === "unary" && CTJ.incKind(e.arg) && CTJ.isPostfix(e.arg)) {
                    const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
                    const pp = this.paren(p);
                    return `${pp}["a"][${pp}["i"]${CTJ.incKind(e.arg)}]`;
                }
                if (e.arg.kind === "unary" && (e.arg.op === "++" || e.arg.op === "--")) {
                    const p = this.complex(this.ex(e.arg.arg), e.arg.arg);
                    const pp = this.paren(p);
                    const op = e.arg.op === "++" ? "++" : "--";
                    return `${pp}["a"][${op}${pp}["i"]]`;
                }
                return this.deref(e.arg);
            }
            if (e.op === "&")
                return this.exAddr(e.arg);
            const inc = CTJ.incKind(e);
            if (inc) {
                const post = CTJ.isPostfix(e);
                const at = this.cx.getAnn(e.arg).t;
                if (this.splitLhs(e.arg)) {
                    const t = this.tmp();
                    const inner = at.ptr > 0 && !at.isFunc ? `${t}["i"]` : `${t}["a"][${t}["i"]]`;
                    return `(${t} = ${this.ex(e.arg)}, ${post ? inner + inc : inc + inner})`;
                }
                if (at.ptr > 0 && !at.isFunc) {
                    const p = this.paren(this.lvalue(e.arg));
                    return post ? `${p}["i"]${inc}` : `${inc}${p}["i"]`;
                }
                const l = this.lvalue(e.arg);
                return post ? `${l}${inc}` : `${inc}${l}`;
            }
            if (e.op === "!")
                return `(!${this.paren(this.ex(e.arg))})`;
            if (e.op === "+")
                return `(+${this.paren(this.ex(e.arg))})`;
            if (e.op === "-")
                return `(-${this.paren(this.ex(e.arg))})`;
            if (e.op === "~")
                return `(~${this.paren(this.ex(e.arg))})`;
            return this.ex(e.arg);
        }
        exBinary(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                if (fn.isMethod) {
                    const o = this.objOf(e.l);
                    const aa = this.argFor(ps[0].type, e.r, a.convs[0] || null);
                    let s = `${this.paren(o)}->${phpMethodName(fn)}(${aa})`;
                    if (a.copyCtor) {
                        const ret = this.cx.funcRet(fn);
                        const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)));
                        s = `new ${cn}(${s})`;
                    }
                    return s;
                }
                const aa = [this.argFor(ps[0].type, e.l, a.convs[0] || null), this.argFor(ps[1].type, e.r, a.convs[1] || null)];
                let s = `${phpFuncName(fn)}(${aa.join(", ")})`;
                if (a.copyCtor) {
                    const ret = this.cx.funcRet(fn);
                    const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(ret)));
                    s = `new ${cn}(${s})`;
                }
                return s;
            }
            const lt = this.cx.getAnn(e.l).t;
            const rt = this.cx.getAnn(e.r).t;
            const l = this.ex(e.l);
            const r = this.ex(e.r);
            if (e.op === "&&" || e.op === "||")
                return `(${l} ${e.op} ${r})`;
            if (e.op === ",")
                return `(${l}, ${r})`;
            const lp = lt && !lt.isFunc && (lt.ptr > 0 || (lt.dims.length > 0 && !lt.isBox()));
            const rp = rt && !rt.isFunc && (rt.ptr > 0 || (rt.dims.length > 0 && !rt.isBox()));
            if (e.op === "==" || e.op === "!=") {
                const op = e.op === "==" ? "===" : "!==";
                if (lp && rp) {
                    const x = this.pbox(l, e.l, lt);
                    const y = this.pbox(r, e.r, rt);
                    const xp = this.paren(x);
                    const yp = this.paren(y);
                    // A null pointer is null itself, so both sides are checked first.
                    const eq = `${xp} === ${yp} || (${xp} && ${yp} && ${xp}["a"] === ${yp}["a"] && ${xp}["i"] === ${yp}["i"])`;
                    return e.op === "==" ? `(${eq})` : `(!(${eq}))`;
                }
                if (lp && (rt.name === "__null" || this.isZeroLit(e.r)))
                    return `(${l} ${op} null)`;
                if (rp && (lt.name === "__null" || this.isZeroLit(e.l)))
                    return `(null ${op} ${r})`;
                return `(${l} ${op} ${r})`;
            }
            if (e.op === "<" || e.op === ">" || e.op === "<=" || e.op === ">=") {
                if (lp && rp) {
                    const x = this.pbox(l, e.l, lt);
                    const y = this.pbox(r, e.r, rt);
                    return `(${this.pidx(x)} ${e.op} ${this.pidx(y)})`;
                }
                return `(${l} ${e.op} ${r})`;
            }
            if ((e.op === "+" || e.op === "-") && (lp || rp)) {
                if (lp && rp) {
                    if (e.op !== "-")
                        this.cx.fail("bad pointer arithmetic", e);
                    const x = this.pbox(l, e.l, lt);
                    const y = this.pbox(r, e.r, rt);
                    return `(${this.pidx(x)} - ${this.pidx(y)})`;
                }
                if (lp) {
                    const x = this.pbox(l, e.l, lt);
                    const xp = this.paren(x);
                    const sign = e.op === "+" ? "+" : "-";
                    return `(["a" => ${xp}["a"], "i" => ${xp}["i"] ${sign} (${r})])`;
                }
                const y = this.pbox(r, e.r, rt);
                const yp = this.paren(y);
                return `(["a" => ${yp}["a"], "i" => (${l}) + ${yp}["i"]])`;
            }
            if (e.op === "/" && lt && rt && CTJ.isIntegerName(CTJ.coreName(lt)) && CTJ.isIntegerName(CTJ.coreName(rt))) {
                return `intdiv(${l}, ${r})`;
            }
            return `(${l} ${e.op} ${r})`;
        }
        exAssign(e) {
            const a = this.cx.getAnn(e);
            if (a.call) {
                const fn = a.call;
                const ps = this.cx.funcParams(fn);
                let rhs;
                if (a.initCall) {
                    const items = e.r.items;
                    const t = this.cx.getAnn(e.l).t;
                    const cn = phpClsName(this.cx.classes.get(this.cx.stripAll(t)));
                    rhs = this.ctorExpr(cn, a.initCall, items, a.convs);
                }
                else {
                    rhs = this.argFor(ps[ps.length - 1].type, e.r, a.convs[a.convs.length - 1] || null);
                }
                if (fn.isMethod) {
                    const o = this.objOf(e.l);
                    return `${this.paren(o)}->${phpMethodName(fn)}(${rhs})`;
                }
                return `${phpFuncName(fn)}(${this.ex(e.l)}, ${rhs})`;
            }
            const lt = this.cx.getAnn(e.l).t;
            if (this.splitLhs(e.l)) {
                const t = this.tmp();
                const target = new CTJ.CppType(lt.name);
                target.segs = lt.segs;
                target.ptr = lt.ptr;
                target.dims = lt.dims;
                const rhs = e.op === "=" ? this.argFor(target, e.r, null) : this.ex(e.r);
                return `(${t} = ${this.lhsBox(e.l)}, ${t}["a"][${t}["i"]] ${e.op} ${rhs})`;
            }
            const l = this.lvalue(e.l);
            if ((e.op === "+=" || e.op === "-=") && lt.ptr > 0 && !lt.isFunc) {
                const op = e.op === "+=" ? "+=" : "-=";
                return `${this.paren(l)}["i"] ${op} (${this.ex(e.r)})`;
            }
            let rhs;
            if (e.op === "=") {
                const target = new CTJ.CppType(lt.name);
                target.segs = lt.segs;
                target.ptr = lt.ptr;
                target.dims = lt.dims;
                rhs = this.argFor(target, e.r, null);
            }
            else {
                rhs = this.ex(e.r);
            }
            return `${l} ${e.op} ${rhs}`;
        }
        // "::new((void *)__p) _Up(args)" builds the object in the storage __p points
        // at, which is the slot of the fat pointer the target language holds.
        exPlacementNew(e, t) {
            const a = this.cx.getAnn(e);
            const pp = this.paren(this.ex(e.placement[0]));
            const slot = `${pp}["a"][${pp}["i"]]`;
            const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                const obj = a.call ? this.ctorExpr(cn, a.call, e.args, a.convs) : `new ${cn}()`;
                // The object goes into the storage it was given and keeps its address, so
                // that "this + 1" can find the storage again; what the expression yields
                // is the pointer to that storage.
                return `((${slot} = ${obj}) && ((${slot}->ctj_a = ${pp}["a"]) || true) && ((${slot}->ctj_i = ${pp}["i"]) || true) ? ["a" => ${pp}["a"], "i" => ${pp}["i"]] : null)`;
            }
            const v = e.args.length ? this.ex(e.args[0]) : this.zero(t);
            return `(${slot} = ${v})`;
        }
        exNew(e) {
            const a = this.cx.getAnn(e);
            const t = this.cx.resolveTypeNode(e.type, this.curScope());
            if (e.placement.length)
                return this.exPlacementNew(e, t);
            if (e.isArray) {
                const n = e.type.dims.length ? this.ex(e.type.dims[0]) : "0";
                const et = new CTJ.CppType(t.name);
                et.segs = t.segs;
                et.ptr = t.ptr;
                et.ref = t.ref;
                const fcls = !et.isBox() && !et.isFunc ? this.cx.stripAll(et) : "";
                if (fcls && this.cx.classes.has(fcls)) {
                    const cn = phpClsName(this.cx.classes.get(fcls));
                    return `["a" => ((${n}) <= 0 ? [] : array_map(function () { return new ${cn}(); }, range(1, (${n})))), "i" => 0]`;
                }
                if (CTJ.isBoxLike(et) || et.isFunc)
                    return `["a" => array_fill(0, (${n}), null), "i" => 0]`;
                return `["a" => array_fill(0, (${n}), ${this.zero(et)}), "i" => 0]`;
            }
            const fcls = !t.isBox() && !t.isFunc ? this.cx.stripAll(t) : "";
            if (fcls && this.cx.classes.has(fcls) && a.call) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                return `["a" => [${this.ctorExpr(cn, a.call, e.args, a.convs)}], "i" => 0]`;
            }
            if (fcls && this.cx.classes.has(fcls)) {
                const cn = phpClsName(this.cx.classes.get(fcls));
                return `["a" => [new ${cn}()], "i" => 0]`;
            }
            if (e.args.length)
                return `["a" => [${this.ex(e.args[0])}], "i" => 0]`;
            return `["a" => [${this.zero(t)}], "i" => 0]`;
        }
        exCast(e) {
            const a = this.cx.getAnn(e);
            const t = a.t;
            if (a.call) {
                const fq = this.cx.stripAll(t);
                const cn = phpClsName(this.cx.classes.get(fq));
                const cps = this.cx.funcParams(a.call);
                const inner = cps.length ? this.argFor(cps[0].type, e.arg, a.conv) : this.ex(e.arg);
                return `new ${cn}(${inner})`;
            }
            // "size_type()" value-initialises: there is no argument to convert.
            if (e.arg.kind === "initlist" && !e.arg.items.length)
                return this.zero(t);
            if (a.conv) {
                return `${this.paren(this.objOf(e.arg))}->${phpMethodName(a.conv.fn)}()`;
            }
            if (e.ckind === "dynamic") {
                const fq = this.cx.stripAll(t);
                const cn = phpClsName(this.cx.classes.get(fq));
                const x = this.complex(this.ex(e.arg), e.arg);
                if (t.ptr > 0)
                    return `(${x} instanceof ${cn} ? ${x} : null)`;
                return `(${x} instanceof ${cn} ? ${x} : (function () { throw new Exception("bad cast"); })())`;
            }
            if (CTJ.coreName(t) === "void" && !t.ptr)
                return `(${this.ex(e.arg)})`;
            const at = this.cx.getAnn(e.arg).t;
            if (CTJ.coreName(t) === "bool" && at.isBox() && !at.isFunc)
                return `(${this.ex(e.arg)} !== null)`;
            if (CTJ.coreName(t) === "bool" && CTJ.isNumericName(CTJ.coreName(at)))
                return `(${this.ex(e.arg)} !== 0)`;
            if (CTJ.isIntegerName(CTJ.coreName(t)) && (CTJ.coreName(at) === "float" || CTJ.coreName(at) === "double")) {
                return `(int)(${this.ex(e.arg)})`;
            }
            if (t.ptr > 0 && (at.name === "__null" || this.isZeroLit(e.arg)))
                return "null";
            // An unsigned value wraps, so "size_t(-1)" is the largest size rather than
            // a negative one. The width is the 32-bit one, matching the JS emitter.
            if (CTJ.isUnsignedName(CTJ.coreName(t)))
                return `((${this.ex(e.arg)}) & 0xFFFFFFFF)`;
            return this.ex(e.arg);
        }
        exTypeid(e) {
            let key;
            if (e.isType && e.type) {
                key = this.cx.resolveTypeNode(e.type, this.curScope()).key();
            }
            else if (e.expr) {
                key = this.cx.getAnn(e.expr).t.key();
            }
            else {
                key = "void";
            }
            return `["__typeName" => "${key}"]`;
        }
        exLambda(e) {
            const caps = this.cx.getAnn(e).caps;
            const uses = [];
            const clones = [];
            const alias = new Map();
            for (const c of caps) {
                if (c.mode === "=" && c.v) {
                    const t = c.v.typeCache;
                    const fq = !t.isBox() && !t.dims.length && !t.isFunc ? this.cx.stripAll(t) : "";
                    uses.push(`$${c.name}`);
                    if (fq && this.cx.classes.has(fq))
                        clones.push(`$${c.name} = clone $${c.name};`);
                }
                else if (c.mode === "&" && c.v) {
                    uses.push(`&$${c.name}`);
                }
            }
            this.alias.push(alias);
            const save = this.out;
            const lines = [];
            this.out = lines;
            this.ind += "  ";
            const decl = [];
            for (let i = 0; i < e.params.length; i++) {
                const p = e.params[i];
                decl.push(p.name ? `$${CTJ.safeJsName(p.name)}` : `$p${i}`);
            }
            for (const c of clones)
                this.line(c);
            const lt = this.cx.getAnn(e).t;
            const lcls = this.cx.classes.get(this.cx.stripAll(lt));
            const lfn = (lcls.methods.get("operator()") || [])[0];
            if (lfn)
                this.fnStack.push(lfn);
            for (const s of e.body)
                this.stmt(s);
            if (lfn)
                this.fnStack.pop();
            this.ind = this.ind.slice(0, -2);
            this.out = save;
            this.alias.pop();
            const use = uses.length ? ` use (${uses.join(", ")})` : "";
            return `(function (${decl.join(", ")})${use} {\n${lines.join("\n")}\n${this.ind}})`;
        }
        sizeofType(e) {
            if (e.isType && e.type)
                return this.cx.resolveTypeNode(e.type, this.curScope());
            if (e.expr)
                return this.cx.getAnn(e.expr).t;
            this.cx.fail("bad sizeof", e);
            return CTJ.CppType.basic("int");
        }
        constStr(e) {
            const v = CTJ.constEval(this.cx, e, CTJ.rootScope());
            if (typeof v === "number")
                return String(v);
            return this.ex(e);
        }
        zero(t) {
            const n = CTJ.coreName(t);
            if (n === "bool")
                return "false";
            if (t.isFunc || t.name === "__null")
                return "null";
            if (n === "void")
                return "null";
            return "0";
        }
    }
})(CTJ || (CTJ = {}));
var CTJ;
(function (CTJ) {
    function transpile(source, options) {
        const headers = options.headers || {};
        const pre = new CTJ.Preprocessor(path => (path in headers ? headers[path] : null), []);
        const defines = options.defines || {};
        for (const k of Object.keys(defines)) {
            const toks = CTJ.lexFile(defines[k], "<define>");
            toks.pop();
            pre.macros.set(k, { params: null, variadic: false, body: toks });
        }
        const pres = pre.run(source, "main.cpp");
        if (pres.missing.length)
            throw new Error(`missing headers: ${pres.missing.join(", ")}`);
        const parser = new CTJ.Parser(pres.tokens);
        const tu = parser.parseTU();
        const cx = new CTJ.Cx();
        CTJ.analyzeAll(cx, tu);
        const code = options.target === "php" ? CTJ.emitPhp(cx) : CTJ.emitJs(cx);
        return { code, warnings: [...pres.warnings, ...cx.warnings] };
    }
    CTJ.transpile = transpile;
})(CTJ || (CTJ = {}));
(function () {
    const g = globalThis;
    g["CTJ"] = CTJ;
})();

CTJ.version = "1f67845 2026-09-11 07:55:29Z";
