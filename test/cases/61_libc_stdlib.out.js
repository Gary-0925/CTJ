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
        msgs: ["Success","Operation not permitted","No such file or directory","No such process","Interrupted system call","Input/output error","No such device or address","Argument list too long","Exec format error","Bad file descriptor","No child processes","Resource temporarily unavailable","Cannot allocate memory","Permission denied","Bad address","Block device required","Device or resource busy","File exists","Invalid cross-device link","No such device","Not a directory","Is a directory","Invalid argument","Too many open files in system","Too many open files","Inappropriate ioctl for device","Text file busy","File too large","No space left on device","Illegal seek","Read-only file system","Too many links","Broken pipe","Numerical argument out of domain","Numerical result out of range","Resource deadlock avoided","File name too long","No locks available","Function not implemented","Directory not empty","Too many levels of symbolic links","Unknown error 41","No message of desired type","Identifier removed","Channel number out of range","Level 2 not synchronized","Level 3 halted","Level 3 reset","Link number out of range","Protocol driver not attached","No CSI structure available","Level 2 halted","Invalid exchange","Invalid request descriptor","Exchange full","No anode","Invalid request code","Invalid slot","Unknown error 58","Bad font file format","Device not a stream","No data available","Timer expired","Out of streams resources","Machine is not on the network","Package not installed","Object is remote","Link has been severed","Advertise error","Srmount error","Communication error on send","Protocol error","Multihop attempted","RFS specific error","Bad message","Value too large for defined data type","Name not unique on network","File descriptor in bad state","Remote address changed","Can not access a needed shared library","Accessing a corrupted shared library",".lib section in a.out corrupted","Attempting to link in too many shared libraries","Cannot exec a shared library directly","Invalid or incomplete multibyte or wide character","Interrupted system call should be restarted","Streams pipe error","Too many users","Socket operation on non-socket","Destination address required","Message too long","Protocol wrong type for socket","Protocol not available","Protocol not supported","Socket type not supported","Operation not supported","Protocol family not supported","Address family not supported by protocol","Address already in use","Cannot assign requested address","Network is down","Network is unreachable","Network dropped connection on reset","Software caused connection abort","Connection reset by peer","No buffer space available","Transport endpoint is already connected","Transport endpoint is not connected","Cannot send after transport endpoint shutdown","Too many references: cannot splice","Connection timed out","Connection refused","Host is down","No route to host","Operation already in progress","Operation now in progress","Stale file handle","Structure needs cleaning","Not a XENIX named type file","No XENIX semaphores available","Is a named type file","Remote I/O error","Disk quota exceeded","No medium found","Wrong medium type","Operation canceled","Required key not available","Key has expired","Key has been revoked","Key was rejected by service","Owner died","State not recoverable","Operation not possible due to RF-kill","Memory page has hardware error"],
      };
      $L.init();
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
      class _Z1P {
        k;
        id;
        constructor(...$a) {
          this.__init__Z1P(...$a);
        }
        __init__Z1P(...$a) {
          this.k = 0;
          this.id = 0;
        }
        __dtor() {
        }
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
      function _Z4atoiPKc(...$a) { return ((a) => Number($L.strtoint(a[0], null, 10, 32, true)))($a); }
      function _Z4atolPKc(...$a) { return ((a) => Number($L.strtoint(a[0], null, 10, 32, true)))($a); }
      function _Z5atollPKc(...$a) { return ((a) => $L.strtoint(a[0], null, 10, 64, true))($a); }
      function _Z4atofPKc(...$a) { return ((a) => $L.scanFloat(a[0], null))($a); }
      function _Z6strtolPKcPPci(...$a) { return ((a) => Number($L.strtoint(a[0], a[1], a[2], 32, true)))($a); }
      function _Z7strtoulPKcPPci(...$a) { return ((a) => Number($L.strtoint(a[0], a[1], a[2], 32, false)))($a); }
      function _Z7strtollPKcPPci(...$a) { return ((a) => $L.strtoint(a[0], a[1], a[2], 64, true))($a); }
      function _Z8strtoullPKcPPci(...$a) { return ((a) => $L.strtoint(a[0], a[1], a[2], 64, false))($a); }
      function _Z6strtodPKcPPc(...$a) { return ((a) => $L.scanFloat(a[0], a[1]))($a); }
      function _Z6strtofPKcPPc(...$a) { return ((a) => Math.fround($L.scanFloat(a[0], a[1])))($a); }
      function _Z3absi(...$a) { return ((a) => (a[0] < 0 ? -a[0] : a[0]) | 0)($a); }
      function _Z4labsl(...$a) { return ((a) => (a[0] < 0 ? -a[0] : a[0]) | 0)($a); }
      function _Z5llabsx(...$a) { return ((a) => BigInt.asIntN(64, a[0] < 0 ? -a[0] : a[0]))($a); }
      function _Z6mallocm(...$a) { return (() => ({ a: [], i: 0 }))($a); }
      function _Z6callocmm(...$a) { return (() => ({ a: [], i: 0 }))($a); }
      function _Z4freePv(...$a) { return (() => undefined)($a); }
      function _Z4randv(...$a) { return (() => $L.rand())($a); }
      function _Z5srandj(...$a) { return ((a) => $L.srand(a[0]))($a); }
      function _Z5qsortPvmmPFiPKvS2_E(...$a) { return ((a) => {
        const base = a[0];
        const cmp = a[3];
        const at = (k) => ({ a: base.a, i: base.i + k });
        const sort = (idx) => {
            if (idx.length <= 1)
                return idx;
            const n1 = idx.length >> 1;
            const left = sort(idx.slice(0, n1));
            const right = sort(idx.slice(n1));
            const out = [];
            let i = 0;
            let j = 0;
            while (i < left.length && j < right.length) {
                if (cmp(at(left[i]), at(right[j])) <= 0)
                    out.push(left[i++]);
                else
                    out.push(right[j++]);
            }
            while (i < left.length)
                out.push(left[i++]);
            while (j < right.length)
                out.push(right[j++]);
            return out;
        };
        const idx = [];
        for (let k = 0; k < a[1]; k++)
            idx.push(k);
        const order = sort(idx);
        const vals = order.map(k => $L.get(base, k));
        for (let k = 0; k < vals.length; k++)
            base.a[base.i + k] = vals[k];
    })($a); }
      function _Z7bsearchPKvS_mmPFiS_S_E(...$a) { return ((a) => {
        const key = a[0];
        const base = a[1];
        const cmp = a[4];
        let l = 0;
        let u = a[2];
        while (l < u) {
            const idx = (l + u) >> 1;
            const c = cmp(key, { a: base.a, i: base.i + idx });
            if (c < 0)
                u = idx;
            else if (c > 0)
                l = idx + 1;
            else
                return { a: base.a, i: base.i + idx };
        }
        return null;
    })($a); }
      function _Z16__errno_locationv(...$a) { return (() => $L.errbox)($a); }
      function _Z4cmpPPKvS_(a, b) {
        let x = (a ? {a: a.a, i: a.i} : null);
        let y = (b ? {a: b.a, i: b.i} : null);
        return ((((x.a[x.i]).k) - ((y.a[y.i]).k)) | 0);
      }
      function _Z4cmpIPKvS_(a, b) {
        return (((a.a[a.i]) - (b.a[b.i])) | 0);
      }
      function main() {
        let $t0, $t1, $t2, $t3, $t4, $t5, $t6, $t7, $t8, $t9, $t10, $t11;
         {
          let ai = _Z4atoiPKc({a: [32, 32, 45, 49, 50, 51, 97, 98, 99, 0], i: 0});
          let al = _Z4atolPKc({a: [55, 55, 0], i: 0});
          let all = _Z5atollPKc({a: [45, 57, 48, 48, 48, 48, 48, 48, 48, 48, 48, 0], i: 0});
          let af = _Z4atofPKc({a: [51, 46, 50, 53, 101, 50, 120, 121, 122, 0], i: 0});
          let ag = _Z4atofPKc({a: [45, 46, 53, 0], i: 0});
          _Z6printfPKcvz({a: [37, 100, 32, 37, 108, 100, 32, 37, 108, 108, 100, 32, 37, 103, 32, 37, 103, 10, 0], i: 0}, ai, al, all, af, ag);
        }
        let end = {v: null};
        let v = _Z6strtolPKcPPci({a: [48, 120, 49, 102, 90, 0], i: 0}, (({a: end, i: "v"}) ? {a: ({a: end, i: "v"}).a, i: ({a: end, i: "v"}).i} : null), 0);
        _Z6printfPKcvz({a: [37, 108, 100, 32, 91, 37, 115, 93, 10, 0], i: 0}, v, end.v);
        _Z6printfPKcvz({a: [37, 108, 100, 32, 37, 108, 100, 32, 37, 108, 100, 10, 0], i: 0}, _Z6strtolPKcPPci({a: [48, 55, 55, 55, 0], i: 0}, null, 0), _Z6strtolPKcPPci({a: [49, 48, 49, 0], i: 0}, null, 2), _Z6strtolPKcPPci({a: [122, 122, 0], i: 0}, null, 36));
         {
          let nv = _Z6strtolPKcPPci({a: [110, 111, 112, 101, 0], i: 0}, (({a: end, i: "v"}) ? {a: ({a: end, i: "v"}).a, i: ({a: end, i: "v"}).i} : null), 10);
          _Z6printfPKcvz({a: [37, 108, 100, 32, 37, 100, 10, 0], i: 0}, nv, (end.v !== null));
        }
        (($t0 = _Z16__errno_locationv(), $t0)).a[(($t0 = _Z16__errno_locationv(), $t0)).i] = 0;
         {
          let v = _Z7strtollPKcPPci({a: [57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 0], i: 0}, null, 10);
          _Z6printfPKcvz({a: [37, 108, 108, 100, 32, 37, 100, 10, 0], i: 0}, v, (($t1 = _Z16__errno_locationv(), $t1.a[$t1.i]) === 34));
        }
        _Z6printfPKcvz({a: [37, 108, 108, 117, 32, 37, 108, 117, 10, 0], i: 0}, _Z8strtoullPKcPPci({a: [45, 49, 0], i: 0}, null, 10), _Z7strtoulPKcPPci({a: [52, 48, 48, 48, 48, 48, 48, 48, 48, 48, 0], i: 0}, null, 10));
        _Z6printfPKcvz({a: [37, 108, 108, 100, 32, 37, 108, 108, 117, 10, 0], i: 0}, _Z7strtollPKcPPci({a: [45, 57, 50, 50, 51, 51, 55, 50, 48, 51, 54, 56, 53, 52, 55, 55, 53, 56, 48, 56, 0], i: 0}, null, 10), _Z8strtoullPKcPPci({a: [49, 56, 52, 52, 54, 55, 52, 52, 48, 55, 51, 55, 48, 57, 53, 53, 49, 54, 49, 53, 0], i: 0}, null, 10));
        (($t2 = _Z16__errno_locationv(), $t2)).a[(($t2 = _Z16__errno_locationv(), $t2)).i] = 0;
         {
          let v = _Z7strtollPKcPPci({a: [57, 50, 50, 51, 51, 55, 50, 48, 51, 54, 56, 53, 52, 55, 55, 53, 56, 48, 56, 0], i: 0}, null, 10);
          _Z6printfPKcvz({a: [37, 108, 108, 100, 32, 37, 100, 10, 0], i: 0}, v, (($t3 = _Z16__errno_locationv(), $t3.a[$t3.i]) === 34));
        }
         {
          let p1 = _Z6strtodPKcPPc({a: [49, 101, 45, 51, 32, 114, 101, 115, 116, 0], i: 0}, (({a: end, i: "v"}) ? {a: ({a: end, i: "v"}).a, i: ({a: end, i: "v"}).i} : null));
          let p2 = _Z6strtodPKcPPc({a: [105, 110, 102, 0], i: 0}, null);
          let p3 = _Z6strtodPKcPPc({a: [32, 32, 50, 46, 53, 0], i: 0}, null);
          _Z6printfPKcvz({a: [37, 103, 32, 37, 103, 32, 37, 102, 10, 0], i: 0}, p1, p2, p3);
        }
         {
          let n1 = _Z6strtodPKcPPc({a: [110, 97, 110, 0], i: 0}, null);
          let n2 = _Z6strtodPKcPPc({a: [110, 97, 110, 0], i: 0}, null);
          let z = ((_Z6strtodPKcPPc({a: [120, 121, 122, 0], i: 0}, (({a: end, i: "v"}) ? {a: ({a: end, i: "v"}).a, i: ({a: end, i: "v"}).i} : null))) | 0);
          _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, (n1 !== n2), z);
        }
        _Z6printfPKcvz({a: [37, 46, 55, 103, 10, 0], i: 0}, _Z6strtofPKcPPc({a: [48, 46, 49, 0], i: 0}, null));
        _Z6printfPKcvz({a: [37, 100, 32, 37, 108, 100, 32, 37, 108, 108, 100, 10, 0], i: 0}, _Z3absi(((-(5)) | 0)), _Z4labsl(((-(70000)) | 0)), _Z5llabsx(BigInt.asIntN(64, -(5000000000n))));
        _Z5srandj(((42) >>> 0));
        for (let i = 0; (i < 5); ($t4 = i, i = (($t4 + 1) | 0), $t4)) {
          _Z6printfPKcvz({a: [37, 100, 32, 0], i: 0}, _Z4randv());
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
        _Z5srandj(((1) >>> 0));
         {
          let r1 = _Z4randv();
          let r2 = _Z4randv();
          _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, r1, r2);
        }
        _Z5srandj(((0) >>> 0));
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z4randv());
        _Z5srandj(4000000000);
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z4randv());
        let ps = Array.from({length: 6}, () => new _Z1P());
        let ks = [5, 1, 5, 3, 1, 5];
        for (let i = 0; (i < 6); ($t5 = i, i = (($t5 + 1) | 0), $t5)) {
           {
            (ps[i]).k = ks[i];
            (ps[i]).id = i;
          }
        }
        _Z5qsortPvmmPFiPKvS2_E({a: ps, i: 0}, ((6) >>> 0), 8, _Z4cmpPPKvS_);
        for (let i = 0; (i < 6); ($t6 = i, i = (($t6 + 1) | 0), $t6)) {
          _Z6printfPKcvz({a: [37, 100, 47, 37, 100, 32, 0], i: 0}, (ps[i]).k, (ps[i]).id);
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
        let arr = new Array(12).fill(0);
        for (let i = 0; (i < 12); ($t7 = i, i = (($t7 + 1) | 0), $t7)) {
          arr[i] = (((((Math.imul(i, 7919)) | 0)) % (13)) | 0);
        }
        _Z5qsortPvmmPFiPKvS2_E({a: arr, i: 0}, ((12) >>> 0), 4, _Z4cmpIPKvS_);
        for (let i = 0; (i < 12); ($t8 = i, i = (($t8 + 1) | 0), $t8)) {
          _Z6printfPKcvz({a: [37, 100, 32, 0], i: 0}, arr[i]);
        }
        _Z6printfPKcvz({a: [10, 0], i: 0});
        let key = {v: 9};
        let hit = ($t9 = _Z7bsearchPKvS_mmPFiS_S_E((({a: key, i: "v"}) ? {a: ({a: key, i: "v"}).a, i: ({a: key, i: "v"}).i} : null), {a: arr, i: 0}, ((12) >>> 0), 4, _Z4cmpIPKvS_), $t9 ? {a: $t9.a, i: $t9.i} : null);
        let key2 = {v: 100};
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, (hit ? ((((hit ? hit.i : 0) - (({a: arr, i: 0}) ? (({a: arr, i: 0})).i : 0))) | 0) : ((((-(1)) | 0)) | 0)), (_Z7bsearchPKvS_mmPFiS_S_E((({a: key2, i: "v"}) ? {a: ({a: key2, i: "v"}).a, i: ({a: key2, i: "v"}).i} : null), {a: arr, i: 0}, ((12) >>> 0), 4, _Z4cmpIPKvS_) === null));
        let heap = ($t10 = _Z6mallocm(((Math.imul(4, ((4) >>> 0))) >>> 0)), $t10 ? {a: $t10.a, i: $t10.i} : null);
        for (let i = 0; (i < 4); ($t11 = i, i = (($t11 + 1) | 0), $t11)) {
          heap.a[heap.i + (i)] = ((Math.imul(i, i)) | 0);
        }
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, heap.a[heap.i + (3)], (_Z6callocmm(((2) >>> 0), ((4) >>> 0)) !== null));
        _Z4freePv((heap ? {a: heap.a, i: heap.i} : null));
        return 0;
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
