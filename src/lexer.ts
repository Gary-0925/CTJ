// Lexer: turns C++ source text into tokens (identifiers, literals, operators).
namespace CTJ {
  const OPS3: Record<string, Tok> = {
    "<<=": "<<=",
    ">>=": ">>=",
    "->*": "->*",
    "...": "...",
    "<=>": "<=>",
  };

  const OPS2: Record<string, Tok> = {
    "+=": "+=",
    "-=": "-=",
    "*=": "*=",
    "/=": "/=",
    "%=": "%=",
    "^=": "^=",
    "&=": "&=",
    "|=": "|=",
    "<<": "<<",
    ">>": ">>",
    "==": "==",
    "!=": "!=",
    "<=": "<=",
    ">=": ">=",
    "&&": "&&",
    "||": "||",
    "++": "++",
    "--": "--",
    "->": "->",
    ".*": ".*",
    "::": "::",
    "##": "##",
  };

  const OPS1: Record<string, Tok> = {
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "{": "{",
    "}": "}",
    ";": ";",
    ",": ",",
    ".": ".",
    "?": "?",
    ":": ":",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "%": "%",
    "^": "^",
    "&": "&",
    "|": "|",
    "~": "~",
    "!": "!",
    "=": "=",
    "<": "<",
    ">": ">",
    "#": "#",
  };

  // "lineStart" tells whether the text begins a line, where "#" starts a directive;
  // macro bodies and expression text never do.
  // The alternative spellings of the operators (C++ [lex.digraph]).
  const ALT_TOKENS: Record<string, Tok> = {
    and: "&&",
    and_eq: "&=",
    bitand: "&",
    bitor: "|",
    compl: "~",
    not: "!",
    not_eq: "!=",
    or: "||",
    or_eq: "|=",
    xor: "^",
    xor_eq: "^=",
  };

  export function lexFile(src: string, file: string, lineStart = true): Token[] {
    const out: Token[] = [];
    const n = src.length;
    let i = 0;
    let line = 1;
    let col = 1;
    let atLineStart = lineStart;
    // Whether whitespace or a comment came before the next token: stringizing
    // a macro argument keeps exactly the spaces the source had.
    let spaced = false;
    const emit = (t: Token) => {
      t.sp = spaced;
      spaced = false;
      out.push(t);
    };

    const adv = (k: number) => {
      for (let j = 0; j < k; j++) {
        if (src[i] === "\n") {
          line++;
          col = 1;
        } else col++;
        i++;
      }
    };
    const skipSplice = () => {
      while (src[i] === "\\" && (src[i + 1] === "\n" || (src[i + 1] === "\r" && src[i + 2] === "\n"))) {
        spaced = true;
        if (src[i + 1] === "\r") adv(3);
        else adv(2);
      }
    };

    while (i < n) {
      skipSplice();
      if (i >= n) break;
      const c = src[i];
      if (c === "\n") {
        adv(1);
        spaced = true;
        atLineStart = true;
        continue;
      }
      if (c === " " || c === "\t" || c === "\r" || c === "\v" || c === "\f") {
        adv(1);
        spaced = true;
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
          if (src[j] === "\\" && src[j + 1] === "\r" && src[j + 2] === "\n") {
            text += "\n";
            j += 3;
            continue;
          }
          if (src[j] === "\n") break;
          text += src[j];
          j++;
        }
        emit(tok("directive", text, file, line, sc));
        adv(j - i);
        continue;
      }
      atLineStart = false;

      if (c === "/" && src[i + 1] === "/") {
        spaced = true;
        while (i < n && src[i] !== "\n") {
          i++;
          col++;
        }
        continue;
      }
      if (c === "/" && src[i + 1] === "*") {
        spaced = true;
        const sl = line,
          so = col;
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
        if (!closed) fail("unterminated comment", file, sl, so);
        continue;
      }

      if (c === "R" && src[i + 1] === '"') {
        const sl = line,
          so = col;
        let j = i + 2;
        let delim = "";
        while (j < n && src[j] !== "(" && src[j] !== "\n") {
          delim += src[j];
          j++;
        }
        if (src[j] !== "(") fail("bad raw string", file, sl, so);
        j++;
        const end = ")" + delim + '"';
        const k = src.indexOf(end, j);
        if (k < 0) fail("unterminated raw string", file, sl, so);
        const body = src.slice(j, k);
        for (let q = i; q < k + end.length; q++) {
          if (src[q] === "\n") {
            line++;
            col = 1;
          } else col++;
        }
        i = k + end.length;
        emit(tok("string", JSON.stringify(body), file, sl, so));
        continue;
      }

      const strPrefix = c === "u" && src[i + 1] === "8" && src[i + 2] === '"' ? 3 : (c === "u" || c === "U" || c === "L") && src[i + 1] === '"' ? 2 : c === '"' ? 1 : 0;
      if (strPrefix > 0) {
        const sl = line,
          so = col;
        const quote = strPrefix === 3 ? 'u8"' : src.slice(i, i + strPrefix);
        adv(strPrefix);
        let v = "";
        let closed = false;
        while (i < n) {
          skipSplice();
          const d = src[i];
          if (d === "\n") fail("unterminated string", file, sl, so);
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
        if (!closed) fail("unterminated string", file, sl, so);
        emit(tok("string", quote + v + '"', file, sl, so));
        continue;
      }

      const chPrefix = (c === "u" || c === "U" || c === "L") && src[i + 1] === "'" ? 2 : c === "'" ? 1 : 0;
      if (chPrefix > 0) {
        const sl = line,
          so = col;
        adv(chPrefix);
        let v = "";
        let closed = false;
        while (i < n) {
          const d = src[i];
          if (d === "\n") fail("unterminated character", file, sl, so);
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
        if (!closed) fail("unterminated character", file, sl, so);
        emit(tok("char", "'" + v + "'", file, sl, so));
        continue;
      }

      if (isDigit(c) || (c === "." && isDigit(src[i + 1] || ""))) {
        const sl = line,
          so = col;
        let v = "";
        while (i < n && (isIdentChar(src[i]) || src[i] === "'" || src[i] === ".")) {
          v += src[i];
          adv(1);
          if ((src[i - 1] === "e" || src[i - 1] === "E" || src[i - 1] === "p" || src[i - 1] === "P") && (src[i] === "+" || src[i] === "-")) {
            v += src[i];
            adv(1);
          }
        }
        emit(tok("number", v, file, sl, so));
        continue;
      }

      if (isIdentStart(c)) {
        const sl = line,
          so = col;
        let v = "";
        while (i < n && isIdentChar(src[i])) {
          v += src[i];
          adv(1);
        }
        // The alternative tokens of C++ are keywords, not names, with or without <iso646.h>.
        if (ALT_TOKENS[v] !== undefined) {
          emit(tok(ALT_TOKENS[v], ALT_TOKENS[v], file, sl, so));
          continue;
        }
        emit(tok("ident", v, file, sl, so));
        continue;
      }

      const three = src.slice(i, i + 3);
      if (OPS3[three]) {
        emit(tok(OPS3[three], three, file, line, col));
        adv(3);
        continue;
      }
      const two = src.slice(i, i + 2);
      if (OPS2[two]) {
        emit(tok(OPS2[two], two, file, line, col));
        adv(2);
        continue;
      }
      if (OPS1[c]) {
        emit(tok(OPS1[c], c, file, line, col));
        adv(1);
        continue;
      }
      fail(`unexpected character '${c}'`, file, line, col);
    }
    emit(tok("eof", "", file, line, col));
    return out;
  }

  export function parseCString(raw: string): number[] {
    let s = raw;
    const m = s.match(/^(u8|u|U|L)?"(.*)"$/s);
    if (m) s = m[2];
    else if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
    const out: number[] = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "\\") {
        out.push(s.charCodeAt(i));
        continue;
      }
      const e = s[++i];
      if (e === "n") out.push(10);
      else if (e === "t") out.push(9);
      else if (e === "r") out.push(13);
      else if (e === "0") out.push(0);
      else if (e === "a") out.push(7);
      else if (e === "b") out.push(8);
      else if (e === "f") out.push(12);
      else if (e === "v") out.push(11);
      else if (e === "\\") out.push(92);
      else if (e === "'") out.push(39);
      else if (e === '"') out.push(34);
      else if (e === "?") out.push(63);
      else if (e === "x") {
        let h = "";
        while (h.length < 4 && /[0-9a-fA-F]/.test(s[i + 1] || "")) h += s[++i];
        out.push(parseInt(h || "0", 16));
      } else if (e === "u" || e === "U") {
        const len = e === "u" ? 4 : 8;
        out.push(parseInt(s.slice(i + 1, i + 1 + len) || "0", 16));
        i += len;
      } else if (e >= "0" && e <= "7") {
        let o = e;
        while (o.length < 3 && /[0-7]/.test(s[i + 1] || "")) o += s[++i];
        out.push(parseInt(o, 8));
      } else out.push(e.charCodeAt(0));
    }
    return out;
  }

  export function parseChar(raw: string): number {
    const m = raw.match(/^(u|U|L)?'(.*)'$/s);
    const body = m ? m[2] : raw;
    const codes = parseCString('"' + body + '"');
    return codes.length ? codes[0] : 0;
  }

  export function parseNumber(raw: string): number {
    const s = raw.replace(/'/g, "");
    // In a hex literal "f" is a digit, not a suffix, so only u and l are stripped there.
    if (/^0[xX]/.test(s)) return parseInt(s.replace(/[uUlL]+$/, ""), 16);
    const d = s.replace(/[uUlLfF]+$/, "");
    if (/^0[bB]/.test(d)) return parseInt(d.slice(2), 2);
    if (/^0[0-7]+$/.test(d)) return parseInt(d, 8);
    return parseFloat(d);
  }

  export function splitArgs(tokens: Token[]): Token[][] {
    const out: Token[][] = [[]];
    let depth = 0;
    for (const t of tokens) {
      if (t.t === "(" || t.t === "[" || t.t === "{") depth++;
      if (t.t === ")" || t.t === "]" || t.t === "}") depth--;
      if (t.t === "," && depth === 0) {
        out.push([]);
        continue;
      }
      out[depth < 0 ? 0 : out.length - 1].push(t);
    }
    return out;
  }
}
