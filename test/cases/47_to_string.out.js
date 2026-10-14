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
      const $L = {
        get: (p, k) => {
            const a = p.a;
            const j = typeof p.i === "number" ? p.i + k : p.i;
            if (typeof a === "string") {
                const c = a.charCodeAt(j);
                return c === c ? c : 0;
            }
            const v = a[j];
            return v === undefined ? 0 : v;
        },
        put: (p, k, v) => {
            p.a[typeof p.i === "number" ? p.i + k : p.i] = v;
        },
        str: (p) => {
            let s = "";
            for (let k = 0;; k++) {
                const c = $L.get(p, k) & 255;
                if (c === 0)
                    return s;
                s += String.fromCharCode(c);
            }
        },
        box: (s) => {
            const a = [];
            for (let k = 0; k < s.length; k++)
                a.push(s.charCodeAt(k) & 255);
            a.push(0);
            return { a: a, i: 0 };
        },
        digitv: (c) => {
            if (c >= 48 && c <= 57)
                return c - 48;
            if (c >= 97 && c <= 122)
                return c - 87;
            if (c >= 65 && c <= 90)
                return c - 55;
            return -1;
        },
        inSet: (c, set) => {
            for (let k = 0;; k++) {
                const d = $L.get(set, k);
                if (d === 0)
                    return false;
                if (d === c)
                    return true;
            }
        },
        isc: (c, m) => (c >= -128 && c <= 255 && ($L.ctb[c + 128] & m) !== 0 ? 1 : 0),
        init: () => {
            const B = new Array(384).fill(0);
            const L = new Array(384).fill(0);
            const U = new Array(384).fill(0);
            for (let c = -128; c < 256; c++) {
                const k = c + 128;
                L[k] = c;
                U[k] = c;
                if (c < 0 || c > 127)
                    continue;
                const upper = c >= 65 && c <= 90;
                const lower = c >= 97 && c <= 122;
                const alpha = upper || lower;
                const digit = c >= 48 && c <= 57;
                const xdigit = digit || (c >= 65 && c <= 70) || (c >= 97 && c <= 102);
                const space = c === 32 || (c >= 9 && c <= 13);
                const print = c >= 32 && c <= 126;
                const graph = c >= 33 && c <= 126;
                const blank = c === 32 || c === 9;
                const cntrl = c < 32 || c === 127;
                const alnum = alpha || digit;
                const punct = graph && !alnum;
                // The bit values of glibc's <ctype.h> on a little-endian machine.
                B[k] = (upper ? 0x100 : 0) | (lower ? 0x200 : 0) | (alpha ? 0x400 : 0) | (digit ? 0x800 : 0) | (xdigit ? 0x1000 : 0) | (space ? 0x2000 : 0) | (print ? 0x4000 : 0) | (graph ? 0x8000 : 0) | (blank ? 1 : 0) | (cntrl ? 2 : 0) | (punct ? 4 : 0) | (alnum ? 8 : 0);
                if (upper)
                    L[k] = c + 32;
                if (lower)
                    U[k] = c - 32;
            }
            $L.ctb = B;
            $L.ctl = L;
            $L.ctu = U;
            $L.errbox = { a: [0], i: 0 };
            $L.tokbox = { a: [null], i: 0 };
            $L.srand(1);
        },
        srand: (seed) => {
            // glibc keeps the seed in an int32_t, so a large seed is negative here.
            let word = seed | 0;
            if (word === 0)
                word = 1;
            const r = new Array(31);
            r[0] = word;
            for (let i = 1; i < 31; i++) {
                const hi = Math.trunc(word / 127773);
                const lo = word % 127773;
                word = 16807 * lo - 2836 * hi;
                if (word < 0)
                    word += 2147483647;
                r[i] = word >>> 0;
            }
            $L.rnd = r;
            $L.ri = 3;
            $L.rj = 0;
            for (let i = 0; i < 310; i++)
                $L.rand();
        },
        rand: () => {
            const r = $L.rnd;
            r[$L.ri] = (r[$L.ri] + r[$L.rj]) >>> 0;
            const v = r[$L.ri] >>> 1;
            $L.ri = ($L.ri + 1) % 31;
            $L.rj = ($L.rj + 1) % 31;
            return v;
        },
        rint: (x) => {
            if (!isFinite(x))
                return x;
            const f = Math.floor(x);
            const d = x - f;
            const r = d < 0.5 ? f : d > 0.5 ? f + 1 : f % 2 === 0 ? f : f + 1;
            return r === 0 && (x < 0 || Object.is(x, -0)) ? -0 : r;
        },
        round: (x) => {
            if (!isFinite(x))
                return x;
            const t = Math.trunc(x);
            const r = Math.abs(x - t) >= 0.5 ? t + Math.sign(x) : t;
            return r === 0 && (x < 0 || Object.is(x, -0)) ? -0 : r;
        },
        pow: (x, y) => {
            if (x === 1 || y === 0)
                return 1;
            if (x === -1 && (y === Infinity || y === -Infinity))
                return 1;
            return Math.pow(x, y);
        },
        fmax: (x, y) => (x !== x ? y : y !== y ? x : Math.max(x, y)),
        fmin: (x, y) => (x !== x ? y : y !== y ? x : Math.min(x, y)),
        copysign: (x, y) => {
            const neg = y < 0 || (y === 0 && 1 / y < 0);
            const ax = Math.abs(x);
            return neg ? -ax : ax;
        },
        nextafter: (x, y) => {
            if (x !== x || y !== y)
                return NaN;
            if (x === y)
                return y;
            if (x === 0)
                return y > 0 ? 5e-324 : -5e-324;
            const dv = new DataView(new ArrayBuffer(8));
            dv.setFloat64(0, x);
            const bits = dv.getBigUint64(0);
            const away = y > x === x > 0;
            dv.setBigUint64(0, away ? bits + BigInt(1) : bits - BigInt(1));
            return dv.getFloat64(0);
        },
        scalbn: (x, n) => {
            if (!isFinite(x) || x === 0)
                return x;
            n = Math.trunc(n);
            while (n > 1000) {
                x *= Math.pow(2, 1000);
                n -= 1000;
                if (!isFinite(x))
                    return x;
            }
            while (n < -1000) {
                x *= Math.pow(2, -1000);
                n += 1000;
                if (x === 0)
                    return x;
            }
            return x * Math.pow(2, n);
        },
        ilogb: (x) => {
            if (x !== x || x === 0)
                return -2147483648;
            if (!isFinite(x))
                return 2147483647;
            let ax = Math.abs(x);
            let k = 0;
            while (ax < 2.2250738585072014e-308) {
                ax *= 4503599627370496;
                k -= 52;
            }
            let r = Math.floor(Math.log2(ax));
            if (Math.pow(2, r) > ax)
                r--;
            else if (Math.pow(2, r + 1) <= ax)
                r++;
            return r + k;
        },
        logb: (x) => {
            if (x !== x)
                return x;
            if (x === 0)
                return -Infinity;
            if (!isFinite(x))
                return Infinity;
            return $L.ilogb(x);
        },
        frexp: (x, p) => {
            if (x === 0 || !isFinite(x)) {
                $L.put(p, 0, 0);
                return x;
            }
            const e = $L.ilogb(x) + 1;
            $L.put(p, 0, e);
            return $L.scalbn(x, -e);
        },
        modf: (x, ip) => {
            if (x !== x) {
                $L.put(ip, 0, x);
                return x;
            }
            if (!isFinite(x)) {
                $L.put(ip, 0, x);
                return x < 0 ? -0 : 0;
            }
            const t = Math.trunc(x);
            $L.put(ip, 0, t);
            const f = x - t;
            return f === 0 ? (x < 0 || Object.is(x, -0) ? -0 : 0) : f;
        },
        decompose: (x) => {
            const dv = new DataView(new ArrayBuffer(8));
            dv.setFloat64(0, x);
            const hi = dv.getUint32(0);
            const lo = dv.getUint32(4);
            const biased = (hi >>> 20) & 0x7ff;
            let m = (BigInt(hi & 0xfffff) << BigInt(32)) | BigInt(lo);
            let e = biased - 1075;
            if (biased === 0)
                e = -1074;
            else
                m = m | (BigInt(1) << BigInt(52));
            if (hi >>> 31)
                m = -m;
            return { m: m, e: e };
        },
        roundBig: (m, e) => {
            const neg = m < BigInt(0);
            let a = neg ? -m : m;
            let bits = a.toString(2).length;
            if (bits > 53) {
                const shift = bits - 53;
                const sb = BigInt(shift);
                let q = a >> sb;
                const rem = a - (q << sb);
                const half = BigInt(1) << (sb - BigInt(1));
                if (rem > half || (rem === half && (q & BigInt(1)) === BigInt(1)))
                    q = q + BigInt(1);
                a = q;
                e += shift;
            }
            const r = $L.scalbn(Number(a), e);
            return neg ? -r : r;
        },
        fma: (x, y, z) => {
            if (!isFinite(x) || !isFinite(y) || !isFinite(z) || x === 0 || y === 0)
                return x * y + z;
            const p = $L.decompose(x);
            const q = $L.decompose(y);
            const w = $L.decompose(z);
            if (z === 0)
                return $L.roundBig(p.m * q.m, p.e + q.e);
            const ep = p.e + q.e;
            const e = Math.min(ep, w.e);
            const sum = ((p.m * q.m) << BigInt(ep - e)) + (w.m << BigInt(w.e - e));
            if (sum === BigInt(0))
                return x * y + z;
            return $L.roundBig(sum, e);
        },
        remainder: (x, y) => {
            if (x !== x || y !== y || !isFinite(x) || y === 0)
                return NaN;
            if (!isFinite(y))
                return x;
            const ay = Math.abs(y);
            let r = x % ay;
            if (r === 0)
                return x < 0 || Object.is(x, -0) ? -0 : 0;
            const ar = Math.abs(r);
            if (ar * 2 > ay || (ar * 2 === ay && ((x - r) / ay) % 2 !== 0))
                r -= r < 0 ? -ay : ay;
            return r;
        },
        msg: (n) => ($L.msgs[n] !== undefined && n >= 0 ? $L.msgs[n] : "Unknown error " + n),
        strtokr: (s, delim, save) => {
            let p = s !== null ? s : save.a[save.i];
            if (p === null)
                return null;
            let k = 0;
            while ($L.get(p, k) !== 0 && $L.inSet($L.get(p, k), delim))
                k++;
            if ($L.get(p, k) === 0) {
                save.a[save.i] = null;
                return null;
            }
            const start = { a: p.a, i: p.i + k };
            let e = k;
            while ($L.get(p, e) !== 0 && !$L.inSet($L.get(p, e), delim))
                e++;
            if ($L.get(p, e) === 0)
                save.a[save.i] = { a: p.a, i: p.i + e };
            else {
                $L.put(p, e, 0);
                save.a[save.i] = { a: p.a, i: p.i + e + 1 };
            }
            return start;
        },
        scanInt: (s, base) => {
            let k = 0;
            while ([32, 9, 10, 11, 12, 13].indexOf($L.get(s, k)) >= 0)
                k++;
            let neg = false;
            const sign = $L.get(s, k);
            if (sign === 43 || sign === 45) {
                neg = sign === 45;
                k++;
            }
            const hex = $L.digitv($L.get(s, k + 2));
            if ((base === 0 || base === 16) && $L.get(s, k) === 48 && ($L.get(s, k + 1) | 32) === 120 && hex >= 0 && hex < 16) {
                base = 16;
                k += 2;
            }
            else if (base === 0)
                base = $L.get(s, k) === 48 ? 8 : 10;
            const B = BigInt(base);
            let m = BigInt(0);
            let n = 0;
            for (;;) {
                const d = $L.digitv($L.get(s, k));
                if (d < 0 || d >= base)
                    break;
                m = m * B + BigInt(d);
                k++;
                n++;
            }
            return { m: m, neg: neg, end: n > 0 ? k : 0 };
        },
        strtoint: (s, endp, base, bits, signed) => {
            const r = $L.scanInt(s, base);
            const one = BigInt(1);
            let v;
            let over = false;
            if (signed) {
                const top = one << BigInt(bits - 1);
                if (r.neg) {
                    over = r.m > top;
                    v = over ? -top : -r.m;
                }
                else {
                    over = r.m > top - one;
                    v = over ? top - one : r.m;
                }
            }
            else {
                const top = (one << BigInt(bits)) - one;
                over = r.m > top;
                if (over)
                    v = top;
                else
                    v = r.neg ? BigInt.asUintN(bits, -r.m) : r.m;
            }
            if (over)
                $L.errbox.a[$L.errbox.i] = 34;
            if (endp !== null)
                $L.put(endp, 0, { a: s.a, i: s.i + r.end });
            return v;
        },
        scanFloat: (s, endp) => {
            const text = $L.str(s);
            const m = /^[ \t\n\v\f\r]*([+-]?)(?:(inf(?:inity)?)|(nan)|((?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?))/i.exec(text);
            if (m === null) {
                if (endp !== null)
                    $L.put(endp, 0, s);
                return 0;
            }
            let v;
            if (m[2] !== undefined)
                v = m[1] === "-" ? -Infinity : Infinity;
            else if (m[3] !== undefined)
                v = NaN;
            else
                v = Number(m[1] + m[4]);
            if (endp !== null)
                $L.put(endp, 0, { a: s.a, i: s.i + m[0].length });
            return v;
        },
        fd: (p) => p.a[p.i].fd,
        msgs: ["Success","Operation not permitted","No such file or directory","No such process","Interrupted system call","Input/output error","No such device or address","Argument list too long","Exec format error","Bad file descriptor","No child processes","Resource temporarily unavailable","Cannot allocate memory","Permission denied","Bad address","Block device required","Device or resource busy","File exists","Invalid cross-device link","No such device","Not a directory","Is a directory","Invalid argument","Too many open files in system","Too many open files","Inappropriate ioctl for device","Text file busy","File too large","No space left on device","Illegal seek","Read-only file system","Too many links","Broken pipe","Numerical argument out of domain","Numerical result out of range","Resource deadlock avoided","File name too long","No locks available","Function not implemented","Directory not empty","Too many levels of symbolic links","Unknown error 41","No message of desired type","Identifier removed","Channel number out of range","Level 2 not synchronized","Level 3 halted","Level 3 reset","Link number out of range","Protocol driver not attached","No CSI structure available","Level 2 halted","Invalid exchange","Invalid request descriptor","Exchange full","No anode","Invalid request code","Invalid slot","Unknown error 58","Bad font file format","Device not a stream","No data available","Timer expired","Out of streams resources","Machine is not on the network","Package not installed","Object is remote","Link has been severed","Advertise error","Srmount error","Communication error on send","Protocol error","Multihop attempted","RFS specific error","Bad message","Value too large for defined data type","Name not unique on network","File descriptor in bad state","Remote address changed","Can not access a needed shared library","Accessing a corrupted shared library",".lib section in a.out corrupted","Attempting to link in too many shared libraries","Cannot exec a shared library directly","Invalid or incomplete multibyte or wide character","Interrupted system call should be restarted","Streams pipe error","Too many users","Socket operation on non-socket","Destination address required","Message too long","Protocol wrong type for socket","Protocol not available","Protocol not supported","Socket type not supported","Operation not supported","Protocol family not supported","Address family not supported by protocol","Address already in use","Cannot assign requested address","Network is down","Network is unreachable","Network dropped connection on reset","Software caused connection abort","Connection reset by peer","No buffer space available","Transport endpoint is already connected","Transport endpoint is not connected","Cannot send after transport endpoint shutdown","Too many references: cannot splice","Connection timed out","Connection refused","Host is down","No route to host","Operation already in progress","Operation now in progress","Stale file handle","Structure needs cleaning","Not a XENIX named type file","No XENIX semaphores available","Is a named type file","Remote I/O error","Disk quota exceeded","No medium found","Wrong medium type","Operation canceled","Required key not available","Key has expired","Key has been revoked","Key was rejected by service","Owner died","State not recoverable","Operation not possible due to RF-kill","Memory page has hardware error"],
        vfmt: function (mode, dst, n, fmt, ap) { function toStr(q) { if (q === null || q === undefined) return '(null)'; var a = q.a, i = q.i | 0, r = '', x; if (typeof a === 'string') return a.slice(i); for (; ; i++) { x = a[i]; if (x === undefined || x === null || x === 0) break; r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); } return r; } function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } function toBig(x) { if (typeof x === 'bigint') return x; if (typeof x === 'boolean') return x ? 1n : 0n; x = Number(x); return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; } function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } function numPad(sign, body, w, fl, zeroOK) { var len = sign.length + body.length; if (w <= len) return sign + body; if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; return spaces(w - len) + sign + body; } function fixedStr(a, p) { var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { d = String(fl0); while (d.length <= p) d = '0' + d; s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; } return s; } function fixExp(s) { var k = s.indexOf('e'), e = s.slice(k + 2); if (e.length < 2) e = '0' + e; return s.slice(0, k + 2) + e; } function stripZeros(t) { var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); if (m.indexOf('.') >= 0) { while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); } return m + ex; } function write(t, fd) { if (t) $io.write(fd, t); } function next() { return ap.a[ap.i++]; } var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; while (i < f.length) { c = f.charAt(i++); if (c !== '%') { out += c; continue; } fl = ''; while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); w = 0; if (f.charAt(i) === '*') { w = Number(toBig(next())); i++; if (w < 0) { fl += '-'; w = -w; } } else { while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; } pr = -1; if (f.charAt(i) === '.') { i++; pr = 0; if (f.charAt(i) === '*') { pr = Number(toBig(next())); i++; } else { while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; } } L = ''; while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); conv = f.charAt(i++); if (conv === '') { out += '%'; break; } if (conv === '%') { out += '%'; continue; } if ('diuoxX'.indexOf(conv) >= 0) { var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; var signed = conv === 'd' || conv === 'i'; var v = toBig(next()); v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); var neg = signed && v < 0n; var mag = neg ? -v : v; var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); if (pr >= 0) { if (pr === 0 && mag === 0n) ds = ''; while (ds.length < pr) ds = '0' + ds; } var pre = ''; if (neg) pre = '-'; else if (signed && fl.indexOf('+') >= 0) pre = '+'; else if (signed && fl.indexOf(' ') >= 0) pre = ' '; if (fl.indexOf('#') >= 0 && mag !== 0n) { if (conv === 'x') pre += '0x'; else if (conv === 'X') pre += '0X'; else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; } out += numPad(pre, ds, w, fl, pr < 0); } else if (conv === 'c') { out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); } else if (conv === 's') { var sv = toStr(next()); if (pr >= 0) sv = sv.slice(0, pr); out += numPad('', sv, w, fl, false); } else if (conv === 'p') { var pv = next(), ps; if (pv === null || pv === undefined) ps = '(nil)'; else { if (typeof pv === 'object' && pv.ctjAddr === undefined) { $io.addr = ($io.addr || 0) + 1; pv.ctjAddr = 4096 + 16 * $io.addr; } ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); } out += numPad('', ps, w, fl, false); } else if ('fFeEgGaA'.indexOf(conv) >= 0) { var x = Number(next()); var p = pr < 0 ? 6 : pr; var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; var ax = Math.abs(x), t; if (x !== x) t = 'nan'; else if (ax === Infinity) t = 'inf'; else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); else { var P = p === 0 ? 1 : p; var es = ax.toExponential(P - 1); var X = parseInt(es.slice(es.indexOf('e') + 1), 10); t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); if (fl.indexOf('#') < 0) t = stripZeros(t); } if (conv === conv.toUpperCase()) t = t.toUpperCase(); out += numPad(sg, t, w, fl, isFinite(x)); } else if (conv === 'n') { var tg = next(); if (tg) tg.a[tg.i] = out.length; } else { out += '%' + conv; } } if (mode !== 0) { write(out, mode === 2 ? 2 : 1); return out.length; } if (dst && n > 0) { var m = Math.min(out.length, n - 1), k; for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; dst.a[dst.i + m] = 0; } return out.length; },
      };
      $L.init();
      class _ZSt11__true_type {
        __init__ZSt11__true_type(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12__false_type {
        constructor(...$a) {
          this.__init__ZSt12__false_type(...$a);
        }
        __init__ZSt12__false_type(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt12__false_type)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt21piecewise_construct_t {
        constructor(...$a) {
          this.__init__ZSt21piecewise_construct_t(...$a);
        }
        __init__ZSt21piecewise_construct_t(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt21piecewise_construct_t)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt18input_iterator_tag {
        constructor(...$a) {
          this.__init__ZSt18input_iterator_tag(...$a);
        }
        __init__ZSt18input_iterator_tag(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt20forward_iterator_tag extends _ZSt18input_iterator_tag {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt20forward_iterator_tag(...$a);
        }
        __init__ZSt20forward_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt18input_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26bidirectional_iterator_tag extends _ZSt20forward_iterator_tag {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt26bidirectional_iterator_tag(...$a);
        }
        __init__ZSt26bidirectional_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt20forward_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26random_access_iterator_tag extends _ZSt26bidirectional_iterator_tag {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt26random_access_iterator_tag(...$a);
        }
        __init__ZSt26random_access_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt26bidirectional_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _Z8_IO_FILE {
        _flags;
        _IO_read_ptr;
        _IO_read_end;
        _IO_read_base;
        _IO_write_base;
        _IO_write_ptr;
        _IO_write_end;
        _IO_buf_base;
        _IO_buf_end;
        _IO_save_base;
        _IO_backup_base;
        _IO_save_end;
        _markers;
        _chain;
        _fileno;
        _flags2;
        _old_offset;
        _cur_column;
        _vtable_offset;
        _shortbuf;
        _lock;
        _offset;
        _codecvt;
        _wide_data;
        _freeres_list;
        _freeres_buf;
        __pad5;
        _mode;
        _unused2;
        constructor(...$a) {
          this.__init__Z8_IO_FILE(...$a);
        }
        __init__Z8_IO_FILE(...$a) {
          this._flags = 0;
          this._IO_read_ptr = null;
          this._IO_read_end = null;
          this._IO_read_base = null;
          this._IO_write_base = null;
          this._IO_write_ptr = null;
          this._IO_write_end = null;
          this._IO_buf_base = null;
          this._IO_buf_end = null;
          this._IO_save_base = null;
          this._IO_backup_base = null;
          this._IO_save_end = null;
          this._markers = null;
          this._chain = null;
          this._fileno = 0;
          this._flags2 = 0;
          this._old_offset = 0n;
          this._cur_column = 0;
          this._vtable_offset = 0;
          this._shortbuf = new Array(1).fill(0);
          this._lock = null;
          this._offset = 0n;
          this._codecvt = null;
          this._wide_data = null;
          this._freeres_list = null;
          this._freeres_buf = null;
          this.__pad5 = 0;
          this._mode = 0;
          this._unused2 = new Array(40).fill(0);
        }
        __dtor() {
        }
      }
      class _Z12$24class_155 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_155(...$a);
        }
        __init__Z12$24class_155(...$a) {
          this.__count = 0;
          this.__value = 0;
        }
        __dtor() {
        }
      }
      class _ZSt9nothrow_t {
        constructor(...$a) {
          this.__init__ZSt9nothrow_t(...$a);
        }
        __init__ZSt9nothrow_t(...$a) {
        }
        __dtor() {
        }
      }
      class _Z5lconv {
        decimal_point;
        thousands_sep;
        grouping;
        int_curr_symbol;
        currency_symbol;
        mon_decimal_point;
        mon_thousands_sep;
        mon_grouping;
        positive_sign;
        negative_sign;
        int_frac_digits;
        frac_digits;
        p_cs_precedes;
        p_sep_by_space;
        n_cs_precedes;
        n_sep_by_space;
        p_sign_posn;
        n_sign_posn;
        int_p_cs_precedes;
        int_n_cs_precedes;
        int_p_sep_by_space;
        int_n_sep_by_space;
        int_p_sign_posn;
        int_n_sign_posn;
        constructor(...$a) {
          this.__init__Z5lconv(...$a);
        }
        __init__Z5lconv(...$a) {
          this.decimal_point = null;
          this.thousands_sep = null;
          this.grouping = null;
          this.int_curr_symbol = null;
          this.currency_symbol = null;
          this.mon_decimal_point = null;
          this.mon_thousands_sep = null;
          this.mon_grouping = null;
          this.positive_sign = null;
          this.negative_sign = null;
          this.int_frac_digits = 0;
          this.frac_digits = 0;
          this.p_cs_precedes = 0;
          this.p_sep_by_space = 0;
          this.n_cs_precedes = 0;
          this.n_sep_by_space = 0;
          this.p_sign_posn = 0;
          this.n_sign_posn = 0;
          this.int_p_cs_precedes = 0;
          this.int_n_cs_precedes = 0;
          this.int_p_sep_by_space = 0;
          this.int_n_sep_by_space = 0;
          this.int_p_sign_posn = 0;
          this.int_n_sign_posn = 0;
        }
        __dtor() {
        }
      }
      class _ZSt8ios_base {
        _M_flags;
        _M_width;
        _M_precision;
        _M_fill;
        constructor(...$a) {
          this.__init__ZSt8ios_base(...$a);
        }
        __init__ZSt8ios_base(...$a) {
          this._M_flags = 2;
          this._M_width = 0;
          this._M_precision = 6;
          this._M_fill = 32;
        }
        __dtor() {
        }
        static boolalpha = 1;
        static dec = 2;
        static hex = 8;
        static oct = 64;
        static basefield = 74;
        static internal = 16;
        static left = 32;
        static right = 128;
        static adjustfield = 176;
        static goodbit = 0;
        static badbit = 1;
        static eofbit = 2;
        static failbit = 4;
      }
      class _ZSt8_Ios_fmt {
        _M_mask;
        _M_value;
        constructor(...$a) {
          this.__init__ZSt8_Ios_fmt(...$a);
        }
        __init__ZSt8_Ios_fmt(...$a) {
          this._M_mask = $a[0];
          this._M_value = $a[1];
        }
        __dtor() {
        }
      }
      class _ZSt8_Ios_arg {
        _M_kind;
        _M_value;
        constructor(...$a) {
          this.__init__ZSt8_Ios_arg(...$a);
        }
        __init__ZSt8_Ios_arg(...$a) {
          this._M_kind = 0;
          this._M_value = 0;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImeE {
        __init__ZSt11__hash_baseImeE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashIeE extends _ZSt11__hash_baseImeE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashIeE(...$a);
        }
        __init__ZSt4hashIeE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImeE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIcE {
        __init__ZSt11char_traitsIcE(...$a) { }
        __dtor() {
        }
        static _ZNSt11char_traitsIcE6assignERcRKc(__c1, __c2) {
          __c1.a[__c1.i] = __c2.a[__c2.i];
        }
        static _ZNSt11char_traitsIcE4copyEPcPKcm(__s1, __s2, __n) {
          let $t0;
          return ($t0 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13new_allocatorIcEE(...$a);
        }
        __init__ZN9__gnu_cxx13new_allocatorIcEE(...$a) {
        }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIcE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t1;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZNK9__gnu_cxx13new_allocatorIcE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t1 = _Znwm(((Math.imul(__n, 1)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorIcE10deallocateEPcm(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorIcE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (1))) >>> 0);
        }
      }
      class _ZSt9allocatorIcE extends _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIcE) ? [$a[0]] : []));
          this.__init__ZSt9allocatorIcE(...$a);
        }
        __init__ZSt9allocatorIcE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIcE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIcEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE extends _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(...$a) {
        }
        __dtor() {
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE.prototype.__dtor.call(this);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_leakedEv() {
          return (this._M_refcount < 0);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv() {
          this._M_refcount = 0;
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm(__n) {
          let $t2;
           {
            _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(this);
            this._M_length = __n;
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc({a: (($t2 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t2)).a, i: (($t2 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t2)).i + (__n)}, {a: _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE, i: "_S_terminal"});
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv() {
          let $t3, $t4;
          return ($t4 = ($t3 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t3 ? $t3.a : null), i: ($t3 ? $t3.i : 0) + (1)})), $t4 ? {a: $t4.a, i: $t4.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep7_M_grabERKS3_S6_(__alloc1, __alloc2) {
          let $t5;
          return ($t5 = (((!(this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_leakedEv())) && _ZSteqIccEbRKSt9allocatorIcES_(__alloc1, __alloc2)) ? this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refcopyEv() : this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep8_M_cloneERKS3_m(__alloc1, ((0) >>> 0))), $t5 ? {a: $t5.a, i: $t5.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__capacity, __old_capacity, __alloc) {
          let $t6, $t7;
          if ((__capacity > _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size)) {
            _ZSt20__throw_length_errorPKc({a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], i: 0});
          }
          let __pagesize = ((4096) >>> 0);
          let __malloc_header_size = ((Math.imul(((4) >>> 0), 4)) >>> 0);
          if (((__capacity > __old_capacity) && (__capacity < ((Math.imul(((2) >>> 0), __old_capacity)) >>> 0)))) {
            __capacity = ((Math.imul(((2) >>> 0), __old_capacity)) >>> 0);
          }
          let __size = (((((Math.imul((((__capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0)) + (12)) >>> 0);
          let __adj_size = (((__size) + (__malloc_header_size)) >>> 0);
          if (((__adj_size > __pagesize) && (__capacity > __old_capacity))) {
             {
              let __extra = (((__pagesize) - ((((__adj_size) % (__pagesize)) >>> 0))) >>> 0);
              __capacity = (((((__capacity) + (((Math.trunc((__extra) / (1))) >>> 0))) >>> 0)) >>> 0);
              if ((__capacity > _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size)) {
                __capacity = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size;
              }
              __size = (((((Math.imul((((__capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0)) + (12)) >>> 0);
            }
          }
          let __place = ($t6 = _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE8allocateEmPKv.call(__alloc.a[__alloc.i], __size, {a: [0], i: 0}), $t6 ? {a: $t6.a, i: $t6.i} : null);
          let __p = ($t7 = (__place.a[__place.i] = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t7 ? {a: $t7.a, i: $t7.i} : null);
          (__p.a[__p.i])._M_capacity = __capacity;
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(__p.a[__p.i]);
          return (__p ? {a: __p.a, i: __p.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_(__a) {
          let __size = (((12) + (((Math.imul((((this._M_capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0))) >>> 0);
          _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE10deallocateEPcm.call(__a.a[__a.i], {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refcopyEv() {
          let $t8;
          _ZN9__gnu_cxx21__atomic_add_dispatchEPii((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
          return ($t8 = this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv(), $t8 ? {a: $t8.a, i: $t8.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep8_M_cloneERKS3_m(__alloc, __res = ((0) >>> 0)) {
          let $t9, $t10, $t11, $t12;
          let __requested_cap = (((this._M_length) + (__res)) >>> 0);
          let __r = ($t9 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__requested_cap, this._M_capacity, __alloc), $t9 ? {a: $t9.a, i: $t9.i} : null);
          if (this._M_length) {
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t10 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t10 ? {a: $t10.a, i: $t10.i} : null), ($t11 = this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv(), $t11 ? {a: $t11.a, i: $t11.i} : null), this._M_length);
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(__r.a[__r.i], this._M_length);
          return ($t12 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t12 ? {a: $t12.a, i: $t12.i} : null);
        }
        static _S_max_size = 1073741820;
        static _S_terminal = 0;
        static _S_empty_rep_storage = null;
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE extends _ZSt9allocatorIcE {
        _M_p;
        constructor(...$a) {
          super(...[$a[1]]);
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a) {
          this._M_p = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
        }
        __dtor() {
          _ZSt9allocatorIcE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE {
        _M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE(...$a);
        }
        __init__ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE(...$a) {
          let $t13, $t14, $t15;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE)) {
            this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(($t14 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep7_M_grabERKS3_S6_.call(($t13 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv.call(($a[0]).a[($a[0]).i]), $t13.a[$t13.i]), {a: [_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv.call(($a[0]).a[($a[0]).i])], i: 0}, {a: [_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv.call(($a[0]).a[($a[0]).i])], i: 0}), $t14 ? {a: $t14.a, i: $t14.i} : null), {a: [_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv.call(($a[0]).a[($a[0]).i])], i: 0});
            this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
          }
          else if ($a.length >= 2 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof _ZSt9allocatorIcE))) {
            this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(($t15 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), ($a[2] === undefined ? ({a: [new _ZSt9allocatorIcE()], i: 0}) : $a[2])), $t15 ? {a: $t15.a, i: $t15.i} : null), ($a[2] === undefined ? ({a: [new _ZSt9allocatorIcE()], i: 0}) : $a[2]));
            this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv() {
          return (this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p ? {a: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.a, i: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv() {
          let $t16, $t17;
          return ($t17 = {a: (($t16 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t16)).a, i: (($t16 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t16)).i + (((-(1)) | 0))}, $t17 ? {a: $t17.a, i: $t17.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(__d, __s, __n) {
          if ((__n === ((1) >>> 0))) {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc(__d, __s);
          }
          else {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE4copyEPcPKcm((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
          }
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv() {
          let $t18;
          return (($t18 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t18.a[$t18.i]))._M_length;
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_(__beg, __end, __a) {
          let $t19;
          return ($t19 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE16_S_construct_auxIPcEES5_S5_S5_RKS3_St12__false_type((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new _ZSt12__false_type()), $t19 ? {a: $t19.a, i: $t19.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_St18input_iterator_tag(__beg, __end, __a, $p3) {
          let $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27, $t28;
          let __buf = new Array(128).fill(0);
          let __len = ((0) >>> 0);
          while (((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
             {
              __buf[($t20 = __len, __len = (($t20 + 1) >>> 0), $t20)] = __beg.a[__beg.i];
              ++__beg.i;
            }
          }
          let __r = ($t21 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__len, ((0) >>> 0), __a), $t21 ? {a: $t21.a, i: $t21.i} : null);
          _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t22 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t22 ? {a: $t22.a, i: $t22.i} : null), {a: __buf, i: 0}, __len);
          if (true) {
             {
              while ((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i)))) {
                 {
                  if ((__len === (__r.a[__r.i])._M_capacity)) {
                     {
                      let __another = ($t23 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_((((__len) + (((1) >>> 0))) >>> 0), __len, __a), $t23 ? {a: $t23.a, i: $t23.i} : null);
                      _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t24 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__another.a[__another.i]), $t24 ? {a: $t24.a, i: $t24.i} : null), ($t25 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t25 ? {a: $t25.a, i: $t25.i} : null), __len);
                      _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_.call(__r.a[__r.i], __a);
                      __r = (__another ? {a: __another.a, i: __another.i} : null);
                    }
                  }
                  (($t26 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t26)).a[(($t26 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t26)).i + (($t27 = __len, __len = (($t27 + 1) >>> 0), $t27))] = __beg.a[__beg.i];
                  ++__beg.i;
                }
              }
            }
          }
          if (false) {
             {
              _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_.call(__r.a[__r.i], __a);
            }
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(__r.a[__r.i], __len);
          return ($t28 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t28 ? {a: $t28.a, i: $t28.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv() {
          let $t29;
          return ($t29 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t29 ? {a: $t29.a, i: $t29.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv() {
          return new _ZSt9allocatorIcE({a: this, i: "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE"});
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE16_S_construct_auxIPcEES5_S5_S5_RKS3_St12__false_type(__beg, __end, __a, $p3) {
          let $t30;
          return ($t30 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_St18input_iterator_tag((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new _ZSt26random_access_iterator_tag()), $t30 ? {a: $t30.a, i: $t30.i} : null);
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIcE6rebindIcEE {
        __init__ZNSt9allocatorIcE6rebindIcEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE extends _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIwE {
        __init__ZSt11char_traitsIwE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIwEE {
        __init__ZN9__gnu_cxx13new_allocatorIwEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIwE extends _ZN9__gnu_cxx13new_allocatorIwEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIwE(...$a);
        }
        __init__ZSt9allocatorIwE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIwEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE extends _ZSt9allocatorIwE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIwE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE {
        _M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE(...$a);
        }
        __init__ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE = new _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIwE6rebindIwEE {
        __init__ZNSt9allocatorIwE6rebindIwEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE extends _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIDsE {
        __init__ZSt11char_traitsIDsE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIDsEE {
        __init__ZN9__gnu_cxx13new_allocatorIDsEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIDsE extends _ZN9__gnu_cxx13new_allocatorIDsEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIDsE(...$a);
        }
        __init__ZSt9allocatorIDsE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIDsEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE extends _ZSt9allocatorIDsE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIDsE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE {
        _M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE(...$a);
        }
        __init__ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE = new _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIDsE6rebindIDsEE {
        __init__ZNSt9allocatorIDsE6rebindIDsEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE extends _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIDiE {
        __init__ZSt11char_traitsIDiE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIDiEE {
        __init__ZN9__gnu_cxx13new_allocatorIDiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIDiE extends _ZN9__gnu_cxx13new_allocatorIDiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIDiE(...$a);
        }
        __init__ZSt9allocatorIDiE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIDiEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE extends _ZSt9allocatorIDiE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIDiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE {
        _M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE(...$a);
        }
        __init__ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE = new _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIDiE6rebindIDiEE {
        __init__ZNSt9allocatorIDiE6rebindIDiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE extends _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7_Ios_op {
        _M_kind;
        constructor(...$a) {
          this.__init__ZSt7_Ios_op(...$a);
        }
        __init__ZSt7_Ios_op(...$a) {
          this._M_kind = $a[0];
        }
        __dtor() {
        }
      }
      class _ZSt13basic_ostreamIcSt11char_traitsIcEE extends _ZSt8ios_base {
        _M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE;
        _M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13basic_ostreamIcSt11char_traitsIcEE(...$a);
        }
        __init__ZSt13basic_ostreamIcSt11char_traitsIcEE(...$a) {
          this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE = ($a[0] === undefined ? (((1) | 0)) : $a[0]);
          this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE = null;
        }
        __dtor() {
          _ZSt8ios_base.prototype.__dtor.call(this);
        }
        _ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl(__k, __v, __s, __n) {
          ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(t)$io.write(fd,t);})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE)));
          this._M_width = 0;
        }
      }
      class _ZSt13basic_istreamIcSt11char_traitsIcEE extends _ZSt8ios_base {
        _M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE;
        _M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13basic_istreamIcSt11char_traitsIcEE(...$a);
        }
        __init__ZSt13basic_istreamIcSt11char_traitsIcEE(...$a) {
          this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE = null;
          this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE = 0;
        }
        __dtor() {
          _ZSt8ios_base.prototype.__dtor.call(this);
        }
      }
      class _ZSt16initializer_listIcE {
        _M_array$_ZSt16initializer_listIcE;
        _M_len$_ZSt16initializer_listIcE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listIcE(...$a);
        }
        __init__ZSt16initializer_listIcE(...$a) {
          this._M_array$_ZSt16initializer_listIcE = null;
          this._M_len$_ZSt16initializer_listIcE = 0;
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx25__numeric_traits_floatingIdEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx25__numeric_traits_floatingIdEE(...$a);
        }
        __init__ZN9__gnu_cxx25__numeric_traits_floatingIdEE(...$a) {
        }
        __dtor() {
        }
        static __max_digits10 = 17;
        static __is_signed = 1;
        static __digits10 = 15;
        static __is_integer = 0;
        static __digits = 53;
        static __max_exponent10 = 308;
      }
      class _ZN9__gnu_cxx16__numeric_traitsIdEE extends _ZN9__gnu_cxx25__numeric_traits_floatingIdEE {
        constructor(...$a) {
          super();
          this.__init__ZN9__gnu_cxx16__numeric_traitsIdEE(...$a);
        }
        __init__ZN9__gnu_cxx16__numeric_traitsIdEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx25__numeric_traits_floatingIdEE.prototype.__dtor.call(this);
        }
      }
      class _ZN9__gnu_cxx25__numeric_traits_floatingIfEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx25__numeric_traits_floatingIfEE(...$a);
        }
        __init__ZN9__gnu_cxx25__numeric_traits_floatingIfEE(...$a) {
        }
        __dtor() {
        }
        static __max_digits10 = 9;
        static __is_signed = 1;
        static __digits10 = 6;
        static __is_integer = 0;
        static __digits = 24;
        static __max_exponent10 = 38;
      }
      class _ZN9__gnu_cxx16__numeric_traitsIfEE extends _ZN9__gnu_cxx25__numeric_traits_floatingIfEE {
        constructor(...$a) {
          super();
          this.__init__ZN9__gnu_cxx16__numeric_traitsIfEE(...$a);
        }
        __init__ZN9__gnu_cxx16__numeric_traitsIfEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx25__numeric_traits_floatingIfEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12__is_integerIPcE {
        __init__ZSt12__is_integerIPcE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPcE {
        __init__ZSt15iterator_traitsIPcE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14numeric_limitsIdE {
        constructor(...$a) {
          this.__init__ZSt14numeric_limitsIdE(...$a);
        }
        __init__ZSt14numeric_limitsIdE(...$a) {
        }
        __dtor() {
        }
        static is_specialized = 1;
        static digits = 53;
        static digits10 = 15;
        static max_digits10 = 17;
        static is_signed = 1;
        static is_integer = 0;
        static is_exact = 0;
        static radix = 2;
        static min_exponent = -1021;
        static min_exponent10 = -307;
        static max_exponent = 1024;
        static max_exponent10 = 308;
        static has_infinity = 1;
        static has_quiet_NaN = 1;
        static has_signaling_NaN = 1;
        static has_denorm = 1;
        static has_denorm_loss = 0;
        static is_iec559 = 1;
        static is_bounded = 1;
        static is_modulo = 0;
        static traps = 0;
        static tinyness_before = 0;
        static round_style = 1;
      }
      class _ZSt14numeric_limitsIfE {
        constructor(...$a) {
          this.__init__ZSt14numeric_limitsIfE(...$a);
        }
        __init__ZSt14numeric_limitsIfE(...$a) {
        }
        __dtor() {
        }
        static is_specialized = 1;
        static digits = 24;
        static digits10 = 6;
        static max_digits10 = 9;
        static is_signed = 1;
        static is_integer = 0;
        static is_exact = 0;
        static radix = 2;
        static min_exponent = -125;
        static min_exponent10 = -37;
        static max_exponent = 128;
        static max_exponent10 = 38;
        static has_infinity = 1;
        static has_quiet_NaN = 1;
        static has_signaling_NaN = 1;
        static has_denorm = 1;
        static has_denorm_loss = 0;
        static is_iec559 = 1;
        static is_bounded = 1;
        static is_modulo = 0;
        static traps = 0;
        static tinyness_before = 0;
        static round_style = 1;
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _Z9vsnprintfPcmPKcPv(...$a) { return ((a) => $L.vfmt(0, a[0], Number(a[1]), a[2], a[3]))($a); }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZN9__gnu_cxx19__atomic_add_singleEPii(__mem, __val) {
        __mem.a[__mem.i] = (((((__mem.a[__mem.i]) + (__val)) | 0)) | 0);
      }
      function _ZN9__gnu_cxx21__atomic_add_dispatchEPii(__mem, __val) {
        _ZN9__gnu_cxx19__atomic_add_singleEPii((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
      }
      function _ZSt9to_stringi(__val) {
        return _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(_Z9vsnprintfPcmPKcPv, ((Math.imul(((4) >>> 0), 4)) >>> 0), {a: [37, 100, 0], i: 0}, __val);
      }
      function _ZSt9to_stringj(__val) {
        return _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(_Z9vsnprintfPcmPKcPv, ((Math.imul(((4) >>> 0), 4)) >>> 0), {a: [37, 117, 0], i: 0}, __val);
      }
      function _ZSt9to_stringx(__val) {
        return _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(_Z9vsnprintfPcmPKcPv, ((Math.imul(((4) >>> 0), 8)) >>> 0), {a: [37, 108, 108, 100, 0], i: 0}, __val);
      }
      function _ZSt9to_stringf(__val) {
        let __n = (((_ZN9__gnu_cxx25__numeric_traits_floatingIfEE.__max_exponent10) + (20)) | 0);
        return _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(_Z9vsnprintfPcmPKcPv, ((__n) >>> 0), {a: [37, 102, 0], i: 0}, __val);
      }
      function _ZSt9to_stringd(__val) {
        let __n = (((_ZN9__gnu_cxx25__numeric_traits_floatingIdEE.__max_exponent10) + (20)) | 0);
        return _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(_Z9vsnprintfPcmPKcPv, ((__n) >>> 0), {a: [37, 102, 0], i: 0}, __val);
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(__os, __s) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(__os, __m) {
        if (((__m.a[__m.i])._M_kind === 0)) {
          _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 8, 10, null, 0);
        }
        else {
          if (((__m.a[__m.i])._M_kind === 1)) {
            _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 8, 0, null, 0);
          }
          else {
            _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 9, 0, null, 0);
          }
        }
        return __os;
      }
      function _ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(__os, __str) {
        let $t31;
        return _ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIcS0_ES1_PKcl(__os, ($t31 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv.call(__str.a[__str.i]), $t31 ? {a: $t31.a, i: $t31.i} : null), ((_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(__str.a[__str.i])) | 0));
      }
      function main() {
        let a = _ZSt9to_stringi(42);
        let b = _ZSt9to_stringx(BigInt.asIntN(64, -(7n)));
        let c = _ZSt9to_stringd(3.5);
        let d = _ZSt9to_stringx(1234567890123n);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E({a: _ZSt4cout, i: "v"}, {a: [a], i: 0}), {a: [32, 0], i: 0}), {a: [b], i: 0}), {a: [32, 0], i: 0}), {a: [c], i: 0}), {a: [32, 0], i: 0}), {a: [d], i: 0}), {a: [32, 0], i: 0}), {a: [_ZSt9to_stringj(0)], i: 0}), {a: [_ZSt4endl], i: 0});
        let e = _ZSt9to_stringf(2.5);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E({a: _ZSt4cout, i: "v"}, {a: [e], i: 0}), {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function _ZN9__gnu_cxx12__to_xstringISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEcEES5_PFiPcmPKcPvEmS9_vz(__convf, __n, __fmt, ...$p3_rest) {
        let $t32, $t33;
        let __s = ($t32 = {a: new Array(((Math.imul(1, __n)) >>> 0)).fill(0), i: 0}, $t32 ? {a: $t32.a, i: $t32.i} : null);
        let __args = null;
        (__args = {a: $p3_rest, i: 0}, undefined);
        let __len = __convf((__s ? {a: __s.a, i: __s.i} : null), __n, (__fmt ? {a: __fmt.a, i: __fmt.i} : null), (__args ? {a: __args.a, i: __args.i} : null));
        (__args, undefined);
        return new _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE((__s ? {a: __s.a, i: __s.i} : null), ($t33 = ({a: (__s ? __s.a : null), i: (__s ? __s.i : 0) + (__len)}), $t33 ? {a: $t33.a, i: $t33.i} : null), {a: [new _ZSt9allocatorIcE()], i: 0});
      }
      function _ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIcS0_ES1_PKcl(__out, __s, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__out.a[__out.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
        return __out;
      }
      function _ZSteqIccEbRKSt9allocatorIcES_($p0, $p1) {
        return true;
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
      let _ZSt9boolalpha = new _ZSt8_Ios_fmt(1, 1);
      let _ZSt11noboolalpha = new _ZSt8_Ios_fmt(1, 0);
      let _ZSt3dec = new _ZSt8_Ios_fmt(74, 2);
      let _ZSt3hex = new _ZSt8_Ios_fmt(74, 8);
      let _ZSt3oct = new _ZSt8_Ios_fmt(74, 64);
      let _ZSt4left = new _ZSt8_Ios_fmt(176, 32);
      let _ZSt5right = new _ZSt8_Ios_fmt(176, 128);
      let _ZSt4endl = new _ZSt7_Ios_op(0);
      let _ZSt4ends = new _ZSt7_Ios_op(1);
      let _ZSt5flush = new _ZSt7_Ios_op(2);
      let _ZSt4cout = {v: new _ZSt13basic_ostreamIcSt11char_traitsIcEE(1)};
      let _ZSt4cerr = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(2);
      let _ZSt4clog = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(3);
      let _ZSt3cin = new _ZSt13basic_istreamIcSt11char_traitsIcEE(0);
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
