"use strict";
return {
  run($input = "") {
    const $io = {
      inp: { s: $input == null ? "" : String($input), p: 0 },
      out: "", err: "", log: "", vf: null, addr: 0,
      write(fd, t) {
        if (fd === 2) this.err += t;
        else if (fd === 3) this.log += t;
        else this.out += t;
      },
    };
    const console = {
      log: (...a) => $io.write(1, a.map(String).join(" ") + "\n"),
      error: (...a) => $io.write(2, a.map(String).join(" ") + "\n"),
    };
    let $rc = 0;
    try {
      class _Z8_IO_FILE {
        __fd;
        __dummy;
        constructor(...$a) {
          this.__init__Z8_IO_FILE(...$a);
        }
        __init__Z8_IO_FILE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z8_IO_FILE)) {
            this.__fd = (($a[0]).a[($a[0]).i]).__fd;
            this.__dummy = (($a[0]).a[($a[0]).i]).__dummy;
          }
          else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
            this.__fd = $a[0];
            this.__dummy = $a[1];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _Z7IntListILi1ELi2ELi3EE {
        constructor(...$a) {
          this.__init__Z7IntListILi1ELi2ELi3EE(...$a);
        }
        __init__Z7IntListILi1ELi2ELi3EE(...$a) {
        }
        __dtor() {
        }
        static n = 3;
      }
      class _Z3SumILi1ELi2ELi3ELi4EE {
        constructor(...$a) {
          this.__init__Z3SumILi1ELi2ELi3ELi4EE(...$a);
        }
        __init__Z3SumILi1ELi2ELi3ELi4EE(...$a) {
        }
        __dtor() {
        }
        static value = 10;
      }
      class _Z4HeadIcilE {
        __init__Z4HeadIcilE(...$a) { }
        __dtor() {
        }
      }
      class _Z3Tup {
        constructor(...$a) {
          this.__init__Z3Tup(...$a);
        }
        __init__Z3Tup(...$a) {
        }
        __dtor() {
        }
        _ZN3Tup3tagEv() {
          return 0;
        }
      }
      class _Z3TupIcE extends _Z3Tup {
        h$_Z3TupIcE;
        constructor(...$a) {
          super(...[]);
          this.__init__Z3TupIcE(...$a);
        }
        __init__Z3TupIcE(...$a) {
          this.h$_Z3TupIcE = $a[0];
        }
        __dtor() {
          _Z3Tup.prototype.__dtor.call(this);
        }
        _ZN3TupIcE3tagEv() {
          return (((1) + (_Z3Tup.prototype._ZN3Tup3tagEv.call(this))) | 0);
        }
      }
      class _Z3TupIdcE extends _Z3TupIcE {
        h$_Z3TupIdcE;
        constructor(...$a) {
          super(...[$a[1]]);
          this.__init__Z3TupIdcE(...$a);
        }
        __init__Z3TupIdcE(...$a) {
          this.h$_Z3TupIdcE = $a[0];
        }
        __dtor() {
          _Z3TupIcE.prototype.__dtor.call(this);
        }
        _ZN3TupIdcE3tagEv() {
          return (((1) + (_Z3TupIcE.prototype._ZN3TupIcE3tagEv.call(this))) | 0);
        }
      }
      class _Z3TupIidcE extends _Z3TupIdcE {
        h$_Z3TupIidcE;
        constructor(...$a) {
          super(...[$a[1], $a[2]]);
          this.__init__Z3TupIidcE(...$a);
        }
        __init__Z3TupIidcE(...$a) {
          this.h$_Z3TupIidcE = $a[0];
        }
        __dtor() {
          _Z3TupIdcE.prototype.__dtor.call(this);
        }
        _ZN3TupIidcE3tagEv() {
          return (((1) + (_Z3TupIdcE.prototype._ZN3TupIdcE3tagEv.call(this))) | 0);
        }
      }
      class _Z4PackIiiiE {
        constructor(...$a) {
          this.__init__Z4PackIiiiE(...$a);
        }
        __init__Z4PackIiiiE(...$a) {
        }
        __dtor() {
        }
        static n = 3;
      }
      class _Z3SumILi2ELi3ELi4EE {
        constructor(...$a) {
          this.__init__Z3SumILi2ELi3ELi4EE(...$a);
        }
        __init__Z3SumILi2ELi3ELi4EE(...$a) {
        }
        __dtor() {
        }
        static value = 9;
      }
      class _Z3SumILi3ELi4EE {
        constructor(...$a) {
          this.__init__Z3SumILi3ELi4EE(...$a);
        }
        __init__Z3SumILi3ELi4EE(...$a) {
        }
        __dtor() {
        }
        static value = 7;
      }
      class _Z3SumILi4EE {
        constructor(...$a) {
          this.__init__Z3SumILi4EE(...$a);
        }
        __init__Z3SumILi4EE(...$a) {
        }
        __dtor() {
        }
        static value = 4;
      }
      class _Z3Sum {
        constructor(...$a) {
          this.__init__Z3Sum(...$a);
        }
        __init__Z3Sum(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      function _Z7vprintfPKcPv(fmt, ap) {
        return (($io.vf || ($io.vf = function (mode, dst, n, fmt, ap) { function toStr(q) { if (q === null || q === undefined) return '(null)'; var a = q.a, i = q.i | 0, r = '', x; if (typeof a === 'string') return a.slice(i); for (; ; i++) { x = a[i]; if (x === undefined || x === null || x === 0) break; r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); } return r; } function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } function toBig(x) { if (typeof x === 'bigint') return x; if (typeof x === 'boolean') return x ? 1n : 0n; x = Number(x); return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; } function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } function numPad(sign, body, w, fl, zeroOK) { var len = sign.length + body.length; if (w <= len) return sign + body; if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; return spaces(w - len) + sign + body; } function fixedStr(a, p) { var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { d = String(fl0); while (d.length <= p) d = '0' + d; s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; } return s; } function fixExp(s) { var k = s.indexOf('e'), e = s.slice(k + 2); if (e.length < 2) e = '0' + e; return s.slice(0, k + 2) + e; } function stripZeros(t) { var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); if (m.indexOf('.') >= 0) { while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); } return m + ex; } function write(t, fd) { if (t) $io.write(fd, t); } function next() { return ap.a[ap.i++]; } var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; while (i < f.length) { c = f.charAt(i++); if (c !== '%') { out += c; continue; } fl = ''; while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); w = 0; if (f.charAt(i) === '*') { w = Number(toBig(next())); i++; if (w < 0) { fl += '-'; w = -w; } } else { while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; } pr = -1; if (f.charAt(i) === '.') { i++; pr = 0; if (f.charAt(i) === '*') { pr = Number(toBig(next())); i++; } else { while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; } } L = ''; while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); conv = f.charAt(i++); if (conv === '') { out += '%'; break; } if (conv === '%') { out += '%'; continue; } if ('diuoxX'.indexOf(conv) >= 0) { var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; var signed = conv === 'd' || conv === 'i'; var v = toBig(next()); v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); var neg = signed && v < 0n; var mag = neg ? -v : v; var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); if (pr >= 0) { if (pr === 0 && mag === 0n) ds = ''; while (ds.length < pr) ds = '0' + ds; } var pre = ''; if (neg) pre = '-'; else if (signed && fl.indexOf('+') >= 0) pre = '+'; else if (signed && fl.indexOf(' ') >= 0) pre = ' '; if (fl.indexOf('#') >= 0 && mag !== 0n) { if (conv === 'x') pre += '0x'; else if (conv === 'X') pre += '0X'; else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; } out += numPad(pre, ds, w, fl, pr < 0); } else if (conv === 'c') { out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); } else if (conv === 's') { var sv = toStr(next()); if (pr >= 0) sv = sv.slice(0, pr); out += numPad('', sv, w, fl, false); } else if (conv === 'p') { var pv = next(), ps; if (pv === null || pv === undefined) ps = '(nil)'; else { if (typeof pv === 'object' && pv.ctjAddr === undefined) { $io.addr = ($io.addr || 0) + 1; pv.ctjAddr = 4096 + 16 * $io.addr; } ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); } out += numPad('', ps, w, fl, false); } else if ('fFeEgGaA'.indexOf(conv) >= 0) { var x = Number(next()); var p = pr < 0 ? 6 : pr; var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; var ax = Math.abs(x), t; if (x !== x) t = 'nan'; else if (ax === Infinity) t = 'inf'; else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); else { var P = p === 0 ? 1 : p; var es = ax.toExponential(P - 1); var X = parseInt(es.slice(es.indexOf('e') + 1), 10); t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); if (fl.indexOf('#') < 0) t = stripZeros(t); } if (conv === conv.toUpperCase()) t = t.toUpperCase(); out += numPad(sg, t, w, fl, isFinite(x)); } else if (conv === 'n') { var tg = next(); if (tg) tg.a[tg.i] = out.length; } else { out += '%' + conv; } } if (mode !== 0) { write(out, mode === 2 ? 2 : 1); return out.length; } if (dst && n > 0) { var m = Math.min(out.length, n - 1), k; for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; dst.a[dst.i + m] = 0; } return out.length; } ))((1), (0), (0), (fmt), (ap)));
      }
      function _Z6printfPKcvz(fmt, ...$p1_rest) {
        let ap = null;
        (ap = {a: $p1_rest, i: 0}, undefined);
        let r = _Z7vprintfPKcPv((fmt ? {a: fmt.a, i: fmt.i} : null), (ap ? {a: ap.a, i: ap.i} : null));
        (ap, undefined);
        return r;
      }
      function _Z2pridc(a, b, c) {
        _Z6printfPKcvz({a: [37, 100, 32, 37, 103, 32, 37, 99, 10, 0], i: 0}, a, b, c);
      }
      function main() {
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, _Z7IntListILi1ELi2ELi3EE.n, _Z3SumILi1ELi2ELi3ELi4EE.value);
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, ((1) | 0));
        _Z4showIiiiEviii(1, 2, 3);
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, _Z9countArgsv(), _Z9countArgsIicdEiicd(1, 97, 2));
        _Z6incAllIiiiEviii(1, 2, 3);
        _Z7incAll2IiiEvii(4, 5);
        _Z5applyIPFvidcEidcEvS_idc(_Z2pridc, 7, 2.5, 122);
        let t = new _Z3TupIidcE(1, 2, 99);
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, _Z3TupIidcE.prototype._ZN3TupIidcE3tagEv.call(t), t.h$_Z3TupIidcE);
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z4PackIiiiE.n);
        return 0;
      }
      function _Z4showIiiiEviii(xs_0, xs_1, xs_2) {
        let $t0;
        let a = [xs_0, xs_1, xs_2];
        for (let i = 0; (i < 3); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
          _Z6printfPKcvz({a: [37, 100, 32, 0], i: 0}, a[i]);
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
      }
      function _Z4showIiiEvii(xs_0, xs_1) {
        let $t1;
        let a = [xs_0, xs_1];
        for (let i = 0; (i < 2); ($t1 = i, i = (($t1 + 1) | 0), $t1)) {
          _Z6printfPKcvz({a: [37, 100, 32, 0], i: 0}, a[i]);
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
      }
      function _Z9countArgsv() {
        return 0;
      }
      function _Z9countArgsIicdEiicd(xs_0, xs_1, xs_2) {
        return 3;
      }
      function _Z6incAllIiiiEviii(xs_0, xs_1, xs_2) {
        let $t2;
        let a = [(((xs_0) + (1)) | 0), (((xs_1) + (1)) | 0), (((xs_2) + (1)) | 0)];
        for (let i = 0; (i < 3); ($t2 = i, i = (($t2 + 1) | 0), $t2)) {
          _Z6printfPKcvz({a: [91, 37, 100, 93, 0], i: 0}, a[i]);
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
      }
      function _Z7incAll2IiiEvii(xs_0, xs_1) {
        _Z4showIiiEvii(_Z3incIiEii(xs_0), _Z3incIiEii(xs_1));
      }
      function _Z5applyIPFvidcEidcEvS_idc(f, xs_0, xs_1, xs_2) {
        f(xs_0, xs_1, xs_2);
      }
      function _Z3incIiEii(x) {
        return (((x) + (1)) | 0);
      }
      let _Z16__ctj_stdin_file = {v: new _Z8_IO_FILE(0, 0)};
      let _Z17__ctj_stdout_file = {v: new _Z8_IO_FILE(1, 0)};
      let _Z17__ctj_stderr_file = {v: new _Z8_IO_FILE(2, 0)};
      let _Z5stdin = (({a: _Z16__ctj_stdin_file, i: "v"}) ? {a: ({a: _Z16__ctj_stdin_file, i: "v"}).a, i: ({a: _Z16__ctj_stdin_file, i: "v"}).i} : null);
      let _Z6stdout = (({a: _Z17__ctj_stdout_file, i: "v"}) ? {a: ({a: _Z17__ctj_stdout_file, i: "v"}).a, i: ({a: _Z17__ctj_stdout_file, i: "v"}).i} : null);
      let _Z6stderr = (({a: _Z17__ctj_stderr_file, i: "v"}) ? {a: ({a: _Z17__ctj_stderr_file, i: "v"}).a, i: ({a: _Z17__ctj_stderr_file, i: "v"}).i} : null);
      $rc = main() | 0;
    } catch (e) {
      if (typeof e === "object" && e !== null && "$exit" in e) $rc = e.$exit;
      else {
        $io.err += String(e && e.message !== undefined ? e.message : e) + "\n";
        $rc = 1;
      }
    }
    return { stdout: $io.out, stderr: $io.err, stdlog: $io.log, exitCode: $rc };
  },
};
