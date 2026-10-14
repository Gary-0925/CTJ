// <stdio.h>: the printf family, and the character input and output of the
// streams.  A FILE is an object with its descriptor, and a FILE* points at it
// the way a pointer to a variable does: {a: {v: file}, i: "v"}.  Standard input
// is read from the run's input, and output goes to the run's streams.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;
  // $io collects the streams of the run; the bodies that write to them use it.
  declare const $io: any;

  // The formatting shared by the printf family, a JavaScript function of
  // (mode, dst, n, fmt, ap).  Mode 1 writes to stdout, mode 2 to stderr, and
  // mode 0 into the buffer dst of size n.  The result is the number of
  // characters.  ap is a variable argument list: {a: arguments, i: next index}.
  const VFMT = `function (mode, dst, n, fmt, ap) { function toStr(q) { if (q === null || q === undefined) return '(null)'; var a = q.a, i = q.i | 0, r = '', x; if (typeof a === 'string') return a.slice(i); for (; ; i++) { x = a[i]; if (x === undefined || x === null || x === 0) break; r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); } return r; } function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } function toBig(x) { if (typeof x === 'bigint') return x; if (typeof x === 'boolean') return x ? 1n : 0n; x = Number(x); return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; } function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } function numPad(sign, body, w, fl, zeroOK) { var len = sign.length + body.length; if (w <= len) return sign + body; if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; return spaces(w - len) + sign + body; } function fixedStr(a, p) { var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { d = String(fl0); while (d.length <= p) d = '0' + d; s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; } return s; } function fixExp(s) { var k = s.indexOf('e'), e = s.slice(k + 2); if (e.length < 2) e = '0' + e; return s.slice(0, k + 2) + e; } function stripZeros(t) { var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); if (m.indexOf('.') >= 0) { while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); } return m + ex; } function write(t, fd) { if (t) $io.write(fd, t); } function next() { return ap.a[ap.i++]; } var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; while (i < f.length) { c = f.charAt(i++); if (c !== '%') { out += c; continue; } fl = ''; while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); w = 0; if (f.charAt(i) === '*') { w = Number(toBig(next())); i++; if (w < 0) { fl += '-'; w = -w; } } else { while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; } pr = -1; if (f.charAt(i) === '.') { i++; pr = 0; if (f.charAt(i) === '*') { pr = Number(toBig(next())); i++; } else { while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; } } L = ''; while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); conv = f.charAt(i++); if (conv === '') { out += '%'; break; } if (conv === '%') { out += '%'; continue; } if ('diuoxX'.indexOf(conv) >= 0) { var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; var signed = conv === 'd' || conv === 'i'; var v = toBig(next()); v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); var neg = signed && v < 0n; var mag = neg ? -v : v; var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); if (pr >= 0) { if (pr === 0 && mag === 0n) ds = ''; while (ds.length < pr) ds = '0' + ds; } var pre = ''; if (neg) pre = '-'; else if (signed && fl.indexOf('+') >= 0) pre = '+'; else if (signed && fl.indexOf(' ') >= 0) pre = ' '; if (fl.indexOf('#') >= 0 && mag !== 0n) { if (conv === 'x') pre += '0x'; else if (conv === 'X') pre += '0X'; else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; } out += numPad(pre, ds, w, fl, pr < 0); } else if (conv === 'c') { out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); } else if (conv === 's') { var sv = toStr(next()); if (pr >= 0) sv = sv.slice(0, pr); out += numPad('', sv, w, fl, false); } else if (conv === 'p') { var pv = next(), ps; if (pv === null || pv === undefined) ps = '(nil)'; else { if (typeof pv === 'object' && pv.ctjAddr === undefined) { $io.addr = ($io.addr || 0) + 1; pv.ctjAddr = 4096 + 16 * $io.addr; } ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); } out += numPad('', ps, w, fl, false); } else if ('fFeEgGaA'.indexOf(conv) >= 0) { var x = Number(next()); var p = pr < 0 ? 6 : pr; var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; var ax = Math.abs(x), t; if (x !== x) t = 'nan'; else if (ax === Infinity) t = 'inf'; else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); else { var P = p === 0 ? 1 : p; var es = ax.toExponential(P - 1); var X = parseInt(es.slice(es.indexOf('e') + 1), 10); t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); if (fl.indexOf('#') < 0) t = stripZeros(t); } if (conv === conv.toUpperCase()) t = t.toUpperCase(); out += numPad(sg, t, w, fl, isFinite(x)); } else if (conv === 'n') { var tg = next(); if (tg) tg.a[tg.i] = out.length; } else { out += '%' + conv; } } if (mode !== 0) { write(out, mode === 2 ? 2 : 1); return out.length; } if (dst && n > 0) { var m = Math.min(out.length, n - 1), k; for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; dst.a[dst.i + m] = 0; } return out.length; }`;

  Object.assign(LIBC_DATA, { vfmt: VFMT });

  Object.assign(LIBC_HELPERS, {
    // The descriptor of the FILE that the pointer p points at.
    fd: (p: any) => p.a[p.i].fd,
  });

  // The printf family.  The arguments of a variadic function come as a list
  // after the fixed ones; a va_list is the same list, passed on.
  libcDefSource(["printf"], "(a) => $L.vfmt(1, null, 0, a[0], {a: a.slice(1), i: 0})");
  libcDefSource(["fprintf"], "(a) => $L.vfmt($L.fd(a[0]) === 2 ? 2 : 1, null, 0, a[1], {a: a.slice(2), i: 0})");
  libcDefSource(["sprintf"], "(a) => $L.vfmt(0, a[0], 4294967295, a[1], {a: a.slice(2), i: 0})");
  libcDefSource(["snprintf"], "(a) => $L.vfmt(0, a[0], Number(a[1]), a[2], {a: a.slice(3), i: 0})");
  libcDefSource(["vprintf"], "(a) => $L.vfmt(1, null, 0, a[0], a[1])");
  libcDefSource(["vfprintf"], "(a) => $L.vfmt($L.fd(a[0]) === 2 ? 2 : 1, null, 0, a[1], a[2])");
  libcDefSource(["vsprintf"], "(a) => $L.vfmt(0, a[0], 4294967295, a[1], a[2])");
  libcDefSource(["vsnprintf"], "(a) => $L.vfmt(0, a[0], Number(a[1]), a[2], a[3])");

  // Character and string output.  Each returns what the C function returns.
  libcDefSource(["putchar"], "(a) => { $io.write(1, String.fromCharCode(a[0] & 255)); return a[0] & 255; }");
  libcDefSource(["puts"], '(a) => { $io.write(1, $L.str(a[0]) + "\\n"); return 1; }');
  libcDefSource(["fputs"], "(a) => { $io.write($L.fd(a[1]), $L.str(a[0])); return 0; }");
  libcDefSource(["fputc", "putc"], "(a) => { $io.write($L.fd(a[1]), String.fromCharCode(a[0] & 255)); return a[0] & 255; }");
  libcDefSource(["fwrite"], '(a) => { const n = Number(a[1]) * Number(a[2]); let s = ""; for (let k = 0; k < n; k++) s += String.fromCharCode($L.get(a[0], k) & 255); if (n > 0) $io.write($L.fd(a[3]), s); return Number(a[2]); }');
  libcDefSource(["fflush"], "(a) => 0");

  // Character and line input from the run's input.  The stream is not told
  // apart: standard input is the only one there is.
  libcDefSource(["getchar", "getc", "fgetc"], "(a) => { const q = $io.inp; return q.p < q.s.length ? q.s.charCodeAt(q.p++) & 255 : -1; }");
  libcDefSource(["fgets"], "(a) => { const q = $io.inp, max = Number(a[1]) - 1; if (q.p >= q.s.length || max < 0) return null; let k = 0; while (k < max && q.p < q.s.length) { const c = q.s.charCodeAt(q.p++) & 255; $L.put(a[0], k++, c); if (c === 10) break; } $L.put(a[0], k, 0); return a[0]; }");

  // The streams.  Each is a FILE* to the descriptor of its stream.
  libcDefVar("stdin", '{a: {v: {fd: 0}}, i: "v"}');
  libcDefVar("stdout", '{a: {v: {fd: 1}}, i: "v"}');
  libcDefVar("stderr", '{a: {v: {fd: 2}}, i: "v"}');
}
