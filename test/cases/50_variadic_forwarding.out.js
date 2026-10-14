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
      class _ZSt14__sfinae_types {
        __init__ZSt14__sfinae_types(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt14__sfinae_types10$24class_8E {
        __arr;
        constructor(...$a) {
          this.__init__ZNSt14__sfinae_types10$24class_8E(...$a);
        }
        __init__ZNSt14__sfinae_types10$24class_8E(...$a) {
          this.__arr = (($a[0]).a[($a[0]).i]).__arr;
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
        __init__ZSt18input_iterator_tag(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20forward_iterator_tag extends _ZSt18input_iterator_tag {
        constructor(...$a) {
          super();
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
          super();
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
          super();
          this.__init__ZSt26random_access_iterator_tag(...$a);
        }
        __init__ZSt26random_access_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt26bidirectional_iterator_tag.prototype.__dtor.call(this);
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
      }
      class _ZN9__gnu_cxx13new_allocatorIcEE {
        __init__ZN9__gnu_cxx13new_allocatorIcEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIcE extends _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIcE(...$a);
        }
        __init__ZSt9allocatorIcE(...$a) {
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
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE extends _ZSt9allocatorIcE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
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
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
        }
        __dtor() {
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
      class _ZSt15allocator_arg_t {
        constructor(...$a) {
          this.__init__ZSt15allocator_arg_t(...$a);
        }
        __init__ZSt15allocator_arg_t(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt15allocator_arg_t)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt17__uses_alloc_base {
        __init__ZSt17__uses_alloc_base(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt13__uses_alloc09_AnythingE {
        constructor(...$a) {
          this.__init__ZNSt13__uses_alloc09_AnythingE(...$a);
        }
        __init__ZNSt13__uses_alloc09_AnythingE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt13__uses_alloc0 extends _ZSt17__uses_alloc_base {
        _M_a;
        constructor(...$a) {
          super();
          this.__init__ZSt13__uses_alloc0(...$a);
        }
        __init__ZSt13__uses_alloc0(...$a) {
          this._M_a = new _ZNSt13__uses_alloc09_AnythingE();
          this._M_a.ctj_a = this; this._M_a.ctj_i = "_M_a";
        }
        __dtor() {
          _ZSt17__uses_alloc_base.prototype.__dtor.call(this);
        }
      }
      class _ZSt15_Swallow_assign {
        constructor(...$a) {
          this.__init__ZSt15_Swallow_assign(...$a);
        }
        __init__ZSt15_Swallow_assign(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt11_Tuple_implILi2EE {
        constructor(...$a) {
          this.__init__ZSt11_Tuple_implILi2EE(...$a);
        }
        __init__ZSt11_Tuple_implILi2EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantIbLi0EE(...$a);
        }
        __init__ZSt17integral_constantIbLi0EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt8is_emptyIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_emptyIdE(...$a);
        }
        __init__ZSt8is_emptyIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_empty_non_tupleIdE extends _ZSt8is_emptyIdE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_empty_non_tupleIdE(...$a);
        }
        __init__ZSt20__is_empty_non_tupleIdE(...$a) {
        }
        __dtor() {
          _ZSt8is_emptyIdE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIdEE {
        __init__ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIdEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Head_baseILi1EdLi0EE {
        _M_head_impl$_ZSt10_Head_baseILi1EdLi0EE;
        constructor(...$a) {
          this.__init__ZSt10_Head_baseILi1EdLi0EE(...$a);
        }
        __init__ZSt10_Head_baseILi1EdLi0EE(...$a) {
          this._M_head_impl$_ZSt10_Head_baseILi1EdLi0EE = ($a[0]).a[($a[0]).i];
        }
        __dtor() {
        }
        static _ZNSt10_Head_baseILi1EdLi0EE7_M_headERS0_(__b) {
          return {a: __b.a[__b.i], i: "_M_head_impl$_ZSt10_Head_baseILi1EdLi0EE"};
        }
      }
      class _ZSt11_Tuple_implILi1EdE extends _ZSt11_Tuple_implILi2EE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt11_Tuple_implILi1EdE(...$a);
        }
        __init__ZSt11_Tuple_implILi1EdE(...$a) {
          _ZSt10_Head_baseILi1EdLi0EE.prototype.__init__ZSt10_Head_baseILi1EdLi0EE.call(this, $a[0]);
        }
        __dtor() {
          _ZSt11_Tuple_implILi2EE.prototype.__dtor.call(this);
          _ZSt10_Head_baseILi1EdLi0EE.prototype.__dtor.call(this);
        }
        static _ZNSt11_Tuple_implILi1EdE7_M_headERS0_(__t) {
          return _ZSt10_Head_baseILi1EdLi0EE._ZNSt10_Head_baseILi1EdLi0EE7_M_headERS0_(__t);
        }
      }
      for (let $b = _ZSt10_Head_baseILi1EdLi0EE; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt11_Tuple_implILi1EdE.prototype)) _ZSt11_Tuple_implILi1EdE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt11_Tuple_implILi1EdE)) _ZSt11_Tuple_implILi1EdE[$k] = $b[$k];
        }
      }
      class _ZSt8is_emptyIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_emptyIiE(...$a);
        }
        __init__ZSt8is_emptyIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_empty_non_tupleIiE extends _ZSt8is_emptyIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_empty_non_tupleIiE(...$a);
        }
        __init__ZSt20__is_empty_non_tupleIiE(...$a) {
        }
        __dtor() {
          _ZSt8is_emptyIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIiEE {
        __init__ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Head_baseILi0EiLi0EE {
        _M_head_impl$_ZSt10_Head_baseILi0EiLi0EE;
        constructor(...$a) {
          this.__init__ZSt10_Head_baseILi0EiLi0EE(...$a);
        }
        __init__ZSt10_Head_baseILi0EiLi0EE(...$a) {
          this._M_head_impl$_ZSt10_Head_baseILi0EiLi0EE = ($a[0]).a[($a[0]).i];
        }
        __dtor() {
        }
        static _ZNSt10_Head_baseILi0EiLi0EE7_M_headERS0_(__b) {
          return {a: __b.a[__b.i], i: "_M_head_impl$_ZSt10_Head_baseILi0EiLi0EE"};
        }
      }
      class _ZSt11_Tuple_implILi0EidE extends _ZSt11_Tuple_implILi1EdE {
        constructor(...$a) {
          super(...[$a[1]]);
          this.__init__ZSt11_Tuple_implILi0EidE(...$a);
        }
        __init__ZSt11_Tuple_implILi0EidE(...$a) {
          _ZSt10_Head_baseILi0EiLi0EE.prototype.__init__ZSt10_Head_baseILi0EiLi0EE.call(this, $a[0]);
        }
        __dtor() {
          _ZSt11_Tuple_implILi1EdE.prototype.__dtor.call(this);
          _ZSt10_Head_baseILi0EiLi0EE.prototype.__dtor.call(this);
        }
        static _ZNSt11_Tuple_implILi0EidE7_M_headERS0_(__t) {
          return _ZSt10_Head_baseILi0EiLi0EE._ZNSt10_Head_baseILi0EiLi0EE7_M_headERS0_(__t);
        }
      }
      for (let $b = _ZSt10_Head_baseILi0EiLi0EE; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt11_Tuple_implILi0EidE.prototype)) _ZSt11_Tuple_implILi0EidE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt11_Tuple_implILi0EidE)) _ZSt11_Tuple_implILi0EidE[$k] = $b[$k];
        }
      }
      class _ZSt5tupleIidE extends _ZSt11_Tuple_implILi0EidE {
        constructor(...$a) {
          super(...($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") ? [$a[0], $a[1]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt5tupleIidE) ? [] : []));
          this.__init__ZSt5tupleIidE(...$a);
        }
        __init__ZSt5tupleIidE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt5tupleIidE)) {
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt11_Tuple_implILi0EidE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRiE(...$a);
        }
        __init__ZSt7is_voidIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRiE {
        __init__ZSt9remove_cvIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRiE {
        __init__ZSt15remove_volatileIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRiE {
        __init__ZSt12remove_constIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRiE(...$a);
        }
        __init__ZSt16__is_void_helperIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIiE(...$a);
        }
        __init__ZSt11is_functionIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIiE(...$a);
        }
        __init__ZSt8is_arrayIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE extends _ZSt8is_arrayIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIiESt8is_arrayIiEE {
        __init__ZSt11conditionalILi0ESt11is_functionIiESt8is_arrayIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRiiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRiiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantIbLi1EE(...$a);
        }
        __init__ZSt17integral_constantIbLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
      }
      class _ZSt14is_convertibleIRKiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRKiiE(...$a);
        }
        __init__ZSt14is_convertibleIRKiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRiE(...$a);
        }
        __init__ZSt12is_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRiEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRiEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRiLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRiLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRiE extends _ZSt29__add_rvalue_reference_helperIRiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14is_convertibleIRKddE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRKddE(...$a);
        }
        __init__ZSt14is_convertibleIRKddE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRdE(...$a);
        }
        __init__ZSt7is_voidIRdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRdE {
        __init__ZSt9remove_cvIRdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRdE {
        __init__ZSt15remove_volatileIRdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRdE {
        __init__ZSt12remove_constIRdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRdE(...$a);
        }
        __init__ZSt16__is_void_helperIRdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIdE(...$a);
        }
        __init__ZSt11is_functionIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIdE(...$a);
        }
        __init__ZSt8is_arrayIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE extends _ZSt8is_arrayIdE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIdE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRdESt11is_functionIdESt8is_arrayIdEE extends _ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRdESt11is_functionIdESt8is_arrayIdEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRdESt11is_functionIdESt8is_arrayIdEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIdESt8is_arrayIdEE {
        __init__ZSt11conditionalILi0ESt11is_functionIdESt8is_arrayIdEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRdESt5__or_ISt11is_functionIdESt8is_arrayIdEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRdESt5__or_ISt11is_functionIdESt8is_arrayIdEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRddLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRddLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRddLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIRdE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRdE(...$a);
        }
        __init__ZSt12is_referenceIRdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRdE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRdE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRdE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRdESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRdE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRdESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRdESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRdE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRdESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRdESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRdEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRdEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRdEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRdEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRdEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRdEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRdEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRdEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRdEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRdEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRdEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRdEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRdEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRdLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRdLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRdE extends _ZSt29__add_rvalue_reference_helperIRdLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRdE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRdE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRdLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRKiiEStS0_IRKddEE extends _ZSt14is_convertibleIRKddE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRKiiEStS0_IRKddEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRKiiEStS0_IRKddEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRKddE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRKddEStS0_IRKiiEE {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRKddEStS0_IRKiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIiiE(...$a);
        }
        __init__ZSt14is_convertibleIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIiE(...$a);
        }
        __init__ZSt7is_voidIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIiE {
        __init__ZSt9remove_cvIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIiE {
        __init__ZSt15remove_volatileIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIiE {
        __init__ZSt12remove_constIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIiE(...$a);
        }
        __init__ZSt16__is_void_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIiiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIiiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIiE(...$a);
        }
        __init__ZSt12is_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE extends _ZSt19is_rvalue_referenceIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE extends _ZSt6__not_ISt7is_voidIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIiEEStS0_ISt12is_referenceIiEEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIiEEStS0_ISt12is_referenceIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIiLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIiLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIiE extends _ZSt29__add_rvalue_reference_helperIiLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIiLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14is_convertibleIddE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIddE(...$a);
        }
        __init__ZSt14is_convertibleIddE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIdE(...$a);
        }
        __init__ZSt7is_voidIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIdE {
        __init__ZSt9remove_cvIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIdE {
        __init__ZSt15remove_volatileIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIdE {
        __init__ZSt12remove_constIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIdE(...$a);
        }
        __init__ZSt16__is_void_helperIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIdESt11is_functionIdESt8is_arrayIdEE extends _ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIdESt11is_functionIdESt8is_arrayIdEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIdESt11is_functionIdESt8is_arrayIdEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIdESt8is_arrayIdEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIdESt5__or_ISt11is_functionIdESt8is_arrayIdEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIdESt5__or_ISt11is_functionIdESt8is_arrayIdEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIddLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIddLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIddLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIdE(...$a);
        }
        __init__ZSt12is_referenceIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIdE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIdE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIdE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIdE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIdESt19is_rvalue_referenceIdEE extends _ZSt19is_rvalue_referenceIdE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIdESt19is_rvalue_referenceIdEE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIdESt19is_rvalue_referenceIdEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIdE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIdESt19is_rvalue_referenceIdEE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIdESt19is_rvalue_referenceIdEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIdEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIdEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIdEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIdEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIdEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIdEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIdEEStS0_ISt7is_voidIdEEE extends _ZSt6__not_ISt7is_voidIdEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIdEEStS0_ISt7is_voidIdEEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIdEEStS0_ISt7is_voidIdEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIdEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIdEEStS0_ISt12is_referenceIdEEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIdEEStS0_ISt12is_referenceIdEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIdLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIdLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIdE extends _ZSt29__add_rvalue_reference_helperIdLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIdE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIdE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIdLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIiiEStS0_IddEE extends _ZSt14is_convertibleIddE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIiiEStS0_IddEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIiiEStS0_IddEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIddE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIddEStS0_IiiEE {
        __init__ZSt11conditionalILi1ESt14is_convertibleIddEStS0_IiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13tuple_elementILi0ESt5tupleIidEE {
        __init__ZSt13tuple_elementILi0ESt5tupleIidEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9__add_refIiE {
        __init__ZSt9__add_refIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_c_refIiE {
        __init__ZSt11__add_c_refIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_r_refIiE {
        __init__ZSt11__add_r_refIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11_Tuple_implILi1EE {
        __init__ZSt11_Tuple_implILi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Head_baseILi0EdLi0EE {
        _M_head_impl$_ZSt10_Head_baseILi0EdLi0EE;
        constructor(...$a) {
          this.__init__ZSt10_Head_baseILi0EdLi0EE(...$a);
        }
        __init__ZSt10_Head_baseILi0EdLi0EE(...$a) {
          this._M_head_impl$_ZSt10_Head_baseILi0EdLi0EE = 0;
        }
        __dtor() {
        }
      }
      class _ZSt11_Tuple_implILi0EdE extends _ZSt11_Tuple_implILi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Tuple_implILi0EdE(...$a);
        }
        __init__ZSt11_Tuple_implILi0EdE(...$a) {
          _ZSt10_Head_baseILi0EdLi0EE.prototype.__init__ZSt10_Head_baseILi0EdLi0EE.call(this);
        }
        __dtor() {
          _ZSt11_Tuple_implILi1EE.prototype.__dtor.call(this);
          _ZSt10_Head_baseILi0EdLi0EE.prototype.__dtor.call(this);
        }
      }
      for (let $b = _ZSt10_Head_baseILi0EdLi0EE; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt11_Tuple_implILi0EdE.prototype)) _ZSt11_Tuple_implILi0EdE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt11_Tuple_implILi0EdE)) _ZSt11_Tuple_implILi0EdE[$k] = $b[$k];
        }
      }
      class _ZSt5tupleIdE extends _ZSt11_Tuple_implILi0EdE {
        constructor(...$a) {
          super();
          this.__init__ZSt5tupleIdE(...$a);
        }
        __init__ZSt5tupleIdE(...$a) {
        }
        __dtor() {
          _ZSt11_Tuple_implILi0EdE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13tuple_elementILi0ESt5tupleIdEE {
        __init__ZSt13tuple_elementILi0ESt5tupleIdEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13tuple_elementILi1ESt5tupleIidEE extends _ZSt13tuple_elementILi0ESt5tupleIdEE {
        constructor(...$a) {
          super();
          this.__init__ZSt13tuple_elementILi1ESt5tupleIidEE(...$a);
        }
        __init__ZSt13tuple_elementILi1ESt5tupleIidEE(...$a) {
        }
        __dtor() {
          _ZSt13tuple_elementILi0ESt5tupleIdEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9__add_refIdE {
        __init__ZSt9__add_refIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_c_refIdE {
        __init__ZSt11__add_c_refIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_r_refIdE {
        __init__ZSt11__add_r_refIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIRiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRiE(...$a);
        }
        __init__ZSt19__declval_protectorIRiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIRdE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRdE(...$a);
        }
        __init__ZSt19__declval_protectorIRdE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIiE(...$a);
        }
        __init__ZSt19__declval_protectorIiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIdE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIdE(...$a);
        }
        __init__ZSt19__declval_protectorIdE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt14is_convertibleIiSt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIiSt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt14is_convertibleIiSt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionISt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt11is_functionISt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt8is_arrayISt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE extends _ZSt8is_arrayISt17__uses_alloc_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt17__uses_alloc_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIiESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE extends _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIiSt17__uses_alloc_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIiSt17__uses_alloc_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIiSt17__uses_alloc_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleIdSt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIdSt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt14is_convertibleIdSt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIdESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE extends _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIdESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIdESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIdESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIdESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIdSt17__uses_alloc_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIdSt17__uses_alloc_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIdSt17__uses_alloc_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      function _Z6printfPKcvz(...$a) { return ((a) => $L.vfmt(1, null, 0, a[0], {a: a.slice(1), i: 0}))($a); }
      function _Z7vprintfPKcPv(...$a) { return ((a) => $L.vfmt(1, null, 0, a[0], a[1]))($a); }
      function _Z4vsumiPv(n, ap) {
        let $t0;
        let s = 0;
        for (let i = 0; (i < n); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
          s = (((((s) + (((p) => { const v = p.a[p.i++]; return ((Number(typeof v === "bigint" ? BigInt.asIntN(32, v) : v)) | 0); })(ap))) | 0)) | 0);
        }
        return s;
      }
      function _Z7sumcopyivz(n, ...$p1_rest) {
        let a = null;
        let b = null;
        (a = {a: $p1_rest, i: 0}, undefined);
        (b = ((s) => ({a: s.a, i: s.i}))(a), undefined);
        let s1 = _Z4vsumiPv(n, (a ? {a: a.a, i: a.i} : null));
        let s2 = _Z4vsumiPv(n, (b ? {a: b.a, i: b.i} : null));
        (a, undefined);
        (b, undefined);
        return (((((Math.imul(s1, 100)) | 0)) + (s2)) | 0);
      }
      function _Z4logfPKcvz(fmt, ...$p1_rest) {
        let ap = null;
        (ap = {a: $p1_rest, i: 0}, undefined);
        _Z7vprintfPKcPv((fmt ? {a: fmt.a, i: fmt.i} : null), (ap ? {a: ap.a, i: ap.i} : null));
        (ap, undefined);
      }
      function _Z4add3iii(a, b, c) {
        return ((((((a) + (b)) | 0)) + (c)) | 0);
      }
      function main() {
        let $t1, $t2;
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z7sumcopyivz(3, 1, 2, 3));
        _Z4logfPKcvz({a: [37, 115, 45, 37, 100, 10, 0], i: 0}, {a: [97, 98, 0], i: 0}, 42);
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z2twIiiiEiiii(1, 2, 3));
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z5outerIiiEiii(1, 2));
        _Z9fwd_printIiiiEvOiS_S_({a: [1], i: 0}, {a: [2], i: 0}, {a: [3], i: 0});
        let t = {v: _Z2mkIidESt5tupleIidEid(3, 2.5)};
        _Z6printfPKcvz({a: [37, 100, 32, 37, 103, 10, 0], i: 0}, ($t1 = _ZSt3getILi0EidERiRSt5tupleIidE({a: t, i: "v"}), $t1.a[$t1.i]), ($t2 = _ZSt3getILi1EidERdRSt5tupleIidE({a: t, i: "v"}), $t2.a[$t2.i]));
        _Z4logfPKcvz({a: [91, 118, 61, 37, 100, 93, 10, 0], i: 0}, 7);
        _Z4logfPKcvz({a: [91, 112, 108, 97, 105, 110, 93, 10, 0], i: 0});
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, _Z4add3iii(1, 2, 3));
        return 0;
      }
      function _Z2twIiiiEiiii(xs_0, xs_1, xs_2) {
        let a = [_Z5twiceIiEii(xs_0), _Z5twiceIiEii(xs_1), _Z5twiceIiEii(xs_2)];
        return (((a[0]) + (3)) | 0);
      }
      function _Z5outerIiiEiii(xs_0, xs_1) {
        return (((((Math.imul(_Z6nestedIiiEiii(_Z5twiceIiEii(xs_0), _Z5twiceIiEii(xs_1)), 10)) | 0)) + (_Z6nestedIiiiEiiii(xs_0, xs_1, 1))) | 0);
      }
      function _Z9fwd_printIiiiEvOiS_S_(xs_0, xs_1, xs_2) {
        let $t3, $t4, $t5;
        let a = [(_Z6printfPKcvz({a: [60, 37, 100, 62, 0], i: 0}, ($t3 = _ZSt7forwardIiEOiS_(xs_0), $t3.a[$t3.i])), 0), (_Z6printfPKcvz({a: [60, 37, 100, 62, 0], i: 0}, ($t4 = _ZSt7forwardIiEOiS_(xs_1), $t4.a[$t4.i])), 0), (_Z6printfPKcvz({a: [60, 37, 100, 62, 0], i: 0}, ($t5 = _ZSt7forwardIiEOiS_(xs_2), $t5.a[$t5.i])), 0)];
        (void (a));
        _Z6printfPKcvz({a: [10, 0], i: 0});
      }
      function _Z2mkIidESt5tupleIidEid(xs_0, xs_1) {
        return new _ZSt5tupleIidE({a: [xs_0], i: 0}, {a: [xs_1], i: 0});
      }
      function _ZSt7declvalIRiES_v() {
        return _ZSt19__declval_protectorIRiE._ZNSt19__declval_protectorIRiE10__delegateEv();
      }
      function _ZSt7declvalIRdES_v() {
        return _ZSt19__declval_protectorIRdE._ZNSt19__declval_protectorIRdE10__delegateEv();
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt7declvalIdEOdv() {
        return _ZSt19__declval_protectorIdE._ZNSt19__declval_protectorIdE10__delegateEv();
      }
      function _ZSt3getILi0EidERiRSt5tupleIidE(__t) {
        return _ZSt12__get_helperILi0EidERiRSt11_Tuple_implILi0EidE(__t);
      }
      function _ZSt3getILi1EidERdRSt5tupleIidE(__t) {
        return _ZSt12__get_helperILi1EdERdRSt11_Tuple_implILi1EdE(__t);
      }
      function _Z5twiceIiEii(x) {
        return ((Math.imul(x, 2)) | 0);
      }
      function _Z6nestedIiiEiii(xs_0, xs_1) {
        return 2;
      }
      function _Z6nestedIiiiEiiii(xs_0, xs_1, xs_2) {
        return 3;
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt12__get_helperILi0EidERiRSt11_Tuple_implILi0EidE(__t) {
        return _ZSt11_Tuple_implILi0EidE._ZNSt11_Tuple_implILi0EidE7_M_headERS0_(__t);
      }
      function _ZSt12__get_helperILi1EdERdRSt11_Tuple_implILi1EdE(__t) {
        return _ZSt11_Tuple_implILi1EdE._ZNSt11_Tuple_implILi1EdE7_M_headERS0_(__t);
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
      let _ZSt13allocator_arg = new _ZSt15allocator_arg_t();
      let _ZSt6ignore = new _ZSt15_Swallow_assign();
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
