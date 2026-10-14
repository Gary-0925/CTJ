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
      class _Z10$24class_3 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z10$24class_3(...$a);
        }
        __init__Z10$24class_3(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z10$24class_3)) {
            this.__count = (($a[0]).a[($a[0]).i]).__count;
            this.__value = (($a[0]).a[($a[0]).i]).__value;
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this.__count = 0;
            this.__value = 0;
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt14__sfinae_types {
        __init__ZSt14__sfinae_types(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt14__sfinae_types11$24class_51E {
        __arr;
        constructor(...$a) {
          this.__init__ZNSt14__sfinae_types11$24class_51E(...$a);
        }
        __init__ZNSt14__sfinae_types11$24class_51E(...$a) {
          this.__arr = (($a[0]).a[($a[0]).i]).__arr;
        }
        __dtor() {
        }
      }
      class _ZSt31__do_is_nary_constructible_impl {
        __init__ZSt31__do_is_nary_constructible_impl(...$a) { }
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
      class _ZSt9nothrow_t {
        constructor(...$a) {
          this.__init__ZSt9nothrow_t(...$a);
        }
        __init__ZSt9nothrow_t(...$a) {
        }
        __dtor() {
        }
      }
      class _ZNSt8__detail15_List_node_baseE {
        _M_next;
        _M_prev;
        constructor(...$a) {
          this.__init__ZNSt8__detail15_List_node_baseE(...$a);
        }
        __init__ZNSt8__detail15_List_node_baseE(...$a) {
          this._M_next = null;
          this._M_prev = null;
        }
        __dtor() {
        }
        _ZNSt8__detail15_List_node_base10_M_reverseEv() {
          let $t0;
          let __tmp = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
          do {
             {
              _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_({a: __tmp.a[__tmp.i], i: "_M_next"}, {a: __tmp.a[__tmp.i], i: "_M_prev"});
              __tmp = (((__tmp.a[__tmp.i])._M_prev) ? {a: ((__tmp.a[__tmp.i])._M_prev).a, i: ((__tmp.a[__tmp.i])._M_prev).i} : null);
            }
          } while (($t0 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!(__tmp === $t0 || (__tmp && $t0 && __tmp.a === $t0.a && __tmp.i === $t0.i)))));
        }
        _ZNSt8__detail15_List_node_base7_M_hookEPS0_(__position) {
          this._M_next = (__position ? {a: __position.a, i: __position.i} : null);
          this._M_prev = (((__position.a[__position.i])._M_prev) ? {a: ((__position.a[__position.i])._M_prev).a, i: ((__position.a[__position.i])._M_prev).i} : null);
          (((__position.a[__position.i])._M_prev).a[((__position.a[__position.i])._M_prev).i])._M_next = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
          (__position.a[__position.i])._M_prev = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
        }
      }
      class _ZSt18_Rb_tree_node_base {
        _M_color;
        _M_parent;
        _M_left;
        _M_right;
        constructor(...$a) {
          this.__init__ZSt18_Rb_tree_node_base(...$a);
        }
        __init__ZSt18_Rb_tree_node_base(...$a) {
          this._M_color = 0;
          this._M_parent = null;
          this._M_left = null;
          this._M_right = null;
        }
        __dtor() {
        }
        static _ZNSt18_Rb_tree_node_base10_S_minimumEPS_(__x) {
          while (((__x.a[__x.i])._M_left !== null)) {
            __x = (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
          }
          return (__x ? {a: __x.a, i: __x.i} : null);
        }
        static _ZNSt18_Rb_tree_node_base10_S_maximumEPS_(__x) {
          while (((__x.a[__x.i])._M_right !== null)) {
            __x = (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
          }
          return (__x ? {a: __x.a, i: __x.i} : null);
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
      class _ZN9__gnu_cxx13new_allocatorIiEE {
        __init__ZN9__gnu_cxx13new_allocatorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIiE extends _ZN9__gnu_cxx13new_allocatorIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIiE(...$a);
        }
        __init__ZSt9allocatorIiE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10_List_nodeIiE extends _ZNSt8__detail15_List_node_baseE {
        _M_data$_ZSt10_List_nodeIiE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt10_List_nodeIiE(...$a);
        }
        __init__ZSt10_List_nodeIiE(...$a) {
          let $t1;
          this._M_data$_ZSt10_List_nodeIiE = ($t1 = _ZSt7forwardIiEOiS_($a[0]), $t1.a[$t1.i]);
        }
        __dtor() {
          _ZNSt8__detail15_List_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt9allocatorIiE6rebindISt10_List_nodeIiEEE {
        __init__ZNSt9allocatorIiE6rebindISt10_List_nodeIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t2;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t2 = _Znwm(((Math.imul(__n, 12)) >>> 0)), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (12))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi(__p, __args_0) {
          (__p.a[__p.i] = new _ZSt10_List_nodeIiE(_ZSt7forwardIiEOiS_(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
      }
      class _ZSt9allocatorISt10_List_nodeIiEE extends _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt10_List_nodeIiEE(...$a);
        }
        __init__ZSt9allocatorISt10_List_nodeIiEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE extends _ZSt9allocatorISt10_List_nodeIiEE {
        _M_node;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE(...$a);
        }
        __init__ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE(...$a) {
          this._M_node = new _ZNSt8__detail15_List_node_baseE();
          this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
        }
        __dtor() {
          _ZSt9allocatorISt10_List_nodeIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10_List_baseIiSt9allocatorIiEE {
        _M_impl$_ZSt10_List_baseIiSt9allocatorIiEE;
        constructor(...$a) {
          this.__init__ZSt10_List_baseIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt10_List_baseIiSt9allocatorIiEE(...$a) {
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE = new _ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE();
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE";
          this._ZNSt10_List_baseIiSt9allocatorIiEE7_M_initEv();
        }
        __dtor() {
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv() {
          let $t3;
          return ($t3 = _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, ((1) >>> 0), {a: [0], i: 0}), $t3 ? {a: $t3.a, i: $t3.i} : null);
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE(__p) {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE"};
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE7_M_initEv() {
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next = (({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null);
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_prev = (({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null);
        }
      }
      class _ZSt4listIiSt9allocatorIiEE extends _ZSt10_List_baseIiSt9allocatorIiEE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt4listIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt4listIiSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt10_List_baseIiSt9allocatorIiEE.prototype.__dtor.call(this);
        }
        _ZNSt4listIiSt9allocatorIiEE5beginEv() {
          return new _ZSt14_List_iteratorIiE((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next ? {a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a, i: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE3endEv() {
          return new _ZSt14_List_iteratorIiE((({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE5frontEv() {
          let $t4;
          return (($t4 = this._ZNSt4listIiSt9allocatorIiEE5beginEv(), $t4))._ZNKSt14_List_iteratorIiEdeEv();
        }
        _ZNSt4listIiSt9allocatorIiEE10push_frontERKi(__x) {
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi.call(this, this._ZNSt4listIiSt9allocatorIiEE5beginEv(), __x);
        }
        _ZNSt4listIiSt9allocatorIiEE9push_backERKi(__x) {
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi.call(this, this._ZNSt4listIiSt9allocatorIiEE3endEv(), __x);
        }
        _ZNSt4listIiSt9allocatorIiEE7reverseEv() {
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base10_M_reverseEv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node);
        }
        _ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi(__position, __args_0) {
          let $t5;
          let __tmp = ($t5 = this._ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(_ZSt7forwardIiEOiS_(__args_0)), $t5 ? {a: $t5.a, i: $t5.i} : null);
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base7_M_hookEPS0_.call(__tmp.a[__tmp.i], (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(__args_0) {
          let $t6, $t7;
          let __p = ($t6 = _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv.call(this), $t6 ? {a: $t6.a, i: $t6.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi.call(($t7 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t7.a[$t7.i]), (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
            }
          }
          if (false) {
             {
              this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__p ? {a: __p.a, i: __p.i} : null));
            }
          }
          return (__p ? {a: __p.a, i: __p.i} : null);
        }
      }
      class _ZSt16initializer_listIiE {
        _M_array$_ZSt16initializer_listIiE;
        _M_len$_ZSt16initializer_listIiE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listIiE(...$a);
        }
        __init__ZSt16initializer_listIiE(...$a) {
          this._M_array$_ZSt16initializer_listIiE = null;
          this._M_len$_ZSt16initializer_listIiE = 0;
        }
        __dtor() {
        }
      }
      class _ZSt15binary_functionIiibE {
        constructor(...$a) {
          this.__init__ZSt15binary_functionIiibE(...$a);
        }
        __init__ZSt15binary_functionIiibE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt15binary_functionIiibE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt4lessIiE extends _ZSt15binary_functionIiibE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4lessIiE) ? [$a[0]] : []));
          this.__init__ZSt4lessIiE(...$a);
        }
        __init__ZSt4lessIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4lessIiE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt15binary_functionIiibE.prototype.__dtor.call(this);
        }
        _ZNKSt4lessIiEclERKiS1_(__x, __y) {
          return (__x.a[__x.i] < __y.a[__y.i]);
        }
      }
      class _ZSt4pairIKiiE {
        first$_ZSt4pairIKiiE;
        second$_ZSt4pairIKiiE;
        constructor(...$a) {
          this.__init__ZSt4pairIKiiE(...$a);
        }
        __init__ZSt4pairIKiiE(...$a) {
          let $t8;
          if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof _ZSt21piecewise_construct_t && $a[1] instanceof _ZSt5tupleIRKiE && $a[2] instanceof _ZSt5tuple) {
            this.__init__ZSt4pairIKiiE({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new _ZSt12_Index_tupleILi0EE(), new _ZSt12_Index_tuple());
          }
          else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt5tupleIRKiE) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof _ZSt21piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt5tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof _ZSt5tupleIRKiE) && $a[2] instanceof _ZSt12_Index_tupleILi0EE && $a[3] instanceof _ZSt12_Index_tuple) {
            this.first$_ZSt4pairIKiiE = ($t8 = _ZSt7forwardIRiES_S_(_ZSt3getILi0ERKiERiRSt5tupleIS_E($a[0])), $t8.a[$t8.i]);
            this.second$_ZSt4pairIKiiE = 0;
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this.first$_ZSt4pairIKiiE = 0;
            this.second$_ZSt4pairIKiiE = 0;
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt4pairIKiiEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorISt4pairIKiiEE extends _ZN9__gnu_cxx13new_allocatorISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt4pairIKiiEE(...$a);
        }
        __init__ZSt9allocatorISt4pairIKiiEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt15binary_functionISt4pairIKiiES2_bE {
        __init__ZSt15binary_functionISt4pairIKiiES2_bE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listISt4pairIKiiEE {
        _M_array$_ZSt16initializer_listISt4pairIKiiEE;
        _M_len$_ZSt16initializer_listISt4pairIKiiEE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listISt4pairIKiiEE(...$a);
        }
        __init__ZSt16initializer_listISt4pairIKiiEE(...$a) {
          this._M_array$_ZSt16initializer_listISt4pairIKiiEE = null;
          this._M_len$_ZSt16initializer_listISt4pairIKiiEE = 0;
        }
        __dtor() {
        }
      }
      class _ZSt14unary_functionISt4pairIKiiEiE {
        constructor(...$a) {
          this.__init__ZSt14unary_functionISt4pairIKiiEiE(...$a);
        }
        __init__ZSt14unary_functionISt4pairIKiiEiE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt10_Select1stISt4pairIKiiEE extends _ZSt14unary_functionISt4pairIKiiEiE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt10_Select1stISt4pairIKiiEE(...$a);
        }
        __init__ZSt10_Select1stISt4pairIKiiEE(...$a) {
        }
        __dtor() {
          _ZSt14unary_functionISt4pairIKiiEiE.prototype.__dtor.call(this);
        }
        _ZNKSt10_Select1stISt4pairIKiiEEclERS2_(__x) {
          return {a: __x.a[__x.i], i: "first$_ZSt4pairIKiiE"};
        }
      }
      class _ZNSt9allocatorISt4pairIKiiEE6rebindIS2_EE {
        __init__ZNSt9allocatorISt4pairIKiiEE6rebindIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13_Rb_tree_nodeISt4pairIKiiEE extends _ZSt18_Rb_tree_node_base {
        _M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13_Rb_tree_nodeISt4pairIKiiEE(...$a);
        }
        __init__ZSt13_Rb_tree_nodeISt4pairIKiiEE(...$a) {
          let $t9, $t10, $t11;
          this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE = new _ZSt4pairIKiiE(($t9 = _ZSt7forwardISt21piecewise_construct_tEOS_S0_($a[0]), $t9.a[$t9.i]), ($t10 = _ZSt7forwardISt5tupleIRKiEEOS2_S3_($a[1]), $t10.a[$t10.i]), ($t11 = _ZSt7forwardISt5tupleEOS_S0_($a[2]), $t11.a[$t11.i]));
          this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE.ctj_a = this; this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE.ctj_i = "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE";
        }
        __dtor() {
          _ZSt18_Rb_tree_node_base.prototype.__dtor.call(this);
        }
      }
      class _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE {
        _M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE;
        constructor(...$a) {
          this.__init__ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE(...$a);
        }
        __init__ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE)) {
            this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE)) {
            this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEE13_M_const_castEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE ? {a: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a, i: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i} : null));
        }
        _ZNSt23_Rb_tree_const_iteratorISt4pairIKiiEEppEv() {
          let $t12;
          this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE = ($t12 = _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base((this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE ? {a: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a, i: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i} : null)), $t12 ? {a: $t12.a, i: $t12.i} : null);
          return {a: [this], i: 0};
        }
        _ZNSt23_Rb_tree_const_iteratorISt4pairIKiiEEppEi($p0) {
          let $t13;
          let __tmp = new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [this], i: 0});
          this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE = ($t13 = _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base((this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE ? {a: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a, i: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i} : null)), $t13 ? {a: $t13.a, i: $t13.i} : null);
          return __tmp;
        }
        _ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEEeqERKS3_(__x) {
          return (this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE) || (this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE && ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE) && this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).a && this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).i));
        }
        _ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEEneERKS3_(__x) {
          return (!(this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE) || (this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE && ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE) && this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).a && this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i === ((__x.a[__x.i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE).i)));
        }
      }
      class _ZSt17_Rb_tree_iteratorISt4pairIKiiEE {
        _M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE;
        constructor(...$a) {
          this.__init__ZSt17_Rb_tree_iteratorISt4pairIKiiEE(...$a);
        }
        __init__ZSt17_Rb_tree_iteratorISt4pairIKiiEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE)) {
            this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).i} : null);
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = null;
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv() {
          return {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a[this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE"};
        }
        _ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEptEv() {
          let $t14;
          return ($t14 = _ZSt11__addressofISt4pairIKiiEEPS1_RS1_({a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a[this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE"}), $t14 ? {a: $t14.a, i: $t14.i} : null);
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKiiEEppEv() {
          let $t15;
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = ($t15 = _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base((this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)), $t15 ? {a: $t15.a, i: $t15.i} : null);
          return {a: [this], i: 0};
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKiiEEmmEv() {
          let $t16;
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = ($t16 = _ZSt18_Rb_tree_decrementPSt18_Rb_tree_node_base((this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)), $t16 ? {a: $t16.a, i: $t16.i} : null);
          return {a: [this], i: 0};
        }
        _ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEeqERKS3_(__x) {
          return (this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE) || (this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE && ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE) && this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).a && this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).i));
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKiiEEaSERS3_(o) {
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE = (((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE) ? {a: ((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).a, i: ((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZNSt9allocatorIiE6rebindIiEE {
        __init__ZNSt9allocatorIiE6rebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9remove_cvISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt9remove_cvISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt15remove_volatileISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt12remove_constISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt30__has_iterator_category_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt30__has_iterator_category_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt30__has_iterator_category_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZNSt30__has_iterator_category_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE10_Wrap_typeISt26bidirectional_iterator_tagEE {
        __init__ZNSt30__has_iterator_category_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE10_Wrap_typeISt26bidirectional_iterator_tagEE(...$a) { }
        __dtor() {
        }
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
      class _ZSt23__has_iterator_categoryISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__has_iterator_categoryISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt23__has_iterator_categoryISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17__iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE {
        __init__ZSt17__iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17__iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt15iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17__iterator_traitsISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8iteratorISt26bidirectional_iterator_tagSt4pairIKiiElPS3_RS3_E {
        __init__ZSt8iteratorISt26bidirectional_iterator_tagSt4pairIKiiElPS3_RS3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt8iteratorISt26bidirectional_iterator_tagSt4pairIKiiElPS3_RS3_E {
        current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE;
        constructor(...$a) {
          super(...($a.length >= 1 && $a.length <= 1 && $a[0] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE) ? [] : []));
          this.__init__ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && $a[0] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE) {
            this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE({a: [$a[0]], i: 0});
            this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE.ctj_a = this; this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE.ctj_i = "current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE";
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE)) {
            this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE({a: ($a[0]).a[($a[0]).i], i: "current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE"});
            this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE.ctj_a = this; this.current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE.ctj_i = "current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE";
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt8iteratorISt26bidirectional_iterator_tagSt4pairIKiiElPS3_RS3_E.prototype.__dtor.call(this);
        }
        _ZNKSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEEdeEv() {
          let $t17;
          let __tmp = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE({a: this, i: "current$_ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE"});
          return (($t17 = __tmp._ZNSt17_Rb_tree_iteratorISt4pairIKiiEEmmEv(), $t17.a[$t17.i]))._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv();
        }
        _ZNKSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEEptEv() {
          let $t18;
          return ($t18 = this._ZNKSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEEdeEv(), $t18 ? {a: $t18.a, i: $t18.i} : null);
        }
      }
      class _ZSt14_List_iteratorIiE {
        _M_node$_ZSt14_List_iteratorIiE;
        constructor(...$a) {
          this.__init__ZSt14_List_iteratorIiE(...$a);
        }
        __init__ZSt14_List_iteratorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt14_List_iteratorIiE)) {
            this._M_node$_ZSt14_List_iteratorIiE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt14_List_iteratorIiE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt14_List_iteratorIiEdeEv() {
          return {a: this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i], i: "_M_data$_ZSt10_List_nodeIiE"};
        }
      }
      class _ZSt11_Tuple_implILi1EE {
        constructor(...$a) {
          this.__init__ZSt11_Tuple_implILi1EE(...$a);
        }
        __init__ZSt11_Tuple_implILi1EE(...$a) {
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
      class _ZSt8is_emptyIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_emptyIRiE(...$a);
        }
        __init__ZSt8is_emptyIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_empty_non_tupleIRiE extends _ZSt8is_emptyIRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_empty_non_tupleIRiE(...$a);
        }
        __init__ZSt20__is_empty_non_tupleIRiE(...$a) {
        }
        __dtor() {
          _ZSt8is_emptyIRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIRiEE {
        __init__ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIRiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Head_baseILi0ERiLi0EE {
        _M_head_impl$_ZSt10_Head_baseILi0ERiLi0EE;
        constructor(...$a) {
          this.__init__ZSt10_Head_baseILi0ERiLi0EE(...$a);
        }
        __init__ZSt10_Head_baseILi0ERiLi0EE(...$a) {
          this._M_head_impl$_ZSt10_Head_baseILi0ERiLi0EE = $a[0];
        }
        __dtor() {
        }
        static _ZNSt10_Head_baseILi0ERiLi0EE7_M_headERS1_(__b) {
          return (__b.a[__b.i])._M_head_impl$_ZSt10_Head_baseILi0ERiLi0EE;
        }
      }
      class _ZSt11_Tuple_implILi0ERKiE extends _ZSt11_Tuple_implILi1EE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt11_Tuple_implILi0ERKiE(...$a);
        }
        __init__ZSt11_Tuple_implILi0ERKiE(...$a) {
          _ZSt10_Head_baseILi0ERiLi0EE.prototype.__init__ZSt10_Head_baseILi0ERiLi0EE.call(this, $a[0]);
        }
        __dtor() {
          _ZSt11_Tuple_implILi1EE.prototype.__dtor.call(this);
          _ZSt10_Head_baseILi0ERiLi0EE.prototype.__dtor.call(this);
        }
        static _ZNSt11_Tuple_implILi0ERKiE7_M_headERS2_(__t) {
          return _ZSt10_Head_baseILi0ERiLi0EE._ZNSt10_Head_baseILi0ERiLi0EE7_M_headERS1_(__t);
        }
      }
      for (let $b = _ZSt10_Head_baseILi0ERiLi0EE; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt11_Tuple_implILi0ERKiE.prototype)) _ZSt11_Tuple_implILi0ERKiE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt11_Tuple_implILi0ERKiE)) _ZSt11_Tuple_implILi0ERKiE[$k] = $b[$k];
        }
      }
      class _ZSt5tupleIRKiE extends _ZSt11_Tuple_implILi0ERKiE {
        constructor(...$a) {
          super(...[$a[0]]);
          this.__init__ZSt5tupleIRKiE(...$a);
        }
        __init__ZSt5tupleIRKiE(...$a) {
        }
        __dtor() {
          _ZSt11_Tuple_implILi0ERKiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5tuple {
        constructor(...$a) {
          this.__init__ZSt5tuple(...$a);
        }
        __init__ZSt5tuple(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt21piecewise_construct_tE {
        __init__ZSt16remove_referenceISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt5tupleIRKiEE {
        __init__ZSt16remove_referenceISt5tupleIRKiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt5tupleE {
        __init__ZSt16remove_referenceISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4pairIPSt18_Rb_tree_node_baseS0_E {
        first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
        second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
        constructor(...$a) {
          this.__init__ZSt4pairIPSt18_Rb_tree_node_baseS0_E(...$a);
        }
        __init__ZSt4pairIPSt18_Rb_tree_node_baseS0_E(...$a) {
          let $t19, $t20, $t21, $t22;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIPSt18_Rb_tree_node_baseS0_E)) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($t19 = _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKiiEEEOS_S5_($a[0]), $t20 = ($t19 ? $t19.a[$t19.i] : null), $t20 && $t20.a !== undefined ? {a: $t20.a, i: $t20.i} : $t20);
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($t21 = _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKiiEEEOS_S5_($a[1]), $t22 = ($t21 ? $t21.a[$t21.i] : null), $t22 && $t22.a !== undefined ? {a: $t22.a, i: $t22.i} : $t22);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E(...$a);
        }
        __init__ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt7is_voidIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRPSt18_Rb_tree_node_baseE {
        __init__ZSt9remove_cvIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRPSt18_Rb_tree_node_baseE {
        __init__ZSt15remove_volatileIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRPSt18_Rb_tree_node_baseE {
        __init__ZSt12remove_constIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt11is_functionIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt8is_arrayIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE extends _ZSt8is_arrayIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt12is_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E extends _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E(...$a);
        }
        __init__ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt7is_voidIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt18_Rb_tree_node_baseE {
        __init__ZSt9remove_cvIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt18_Rb_tree_node_baseE {
        __init__ZSt15remove_volatileIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt18_Rb_tree_node_baseE {
        __init__ZSt12remove_constIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt12is_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E extends _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E {
        first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E;
        second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E;
        constructor(...$a) {
          this.__init__ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E(...$a);
        }
        __init__ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E(...$a) {
          if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKiiEE)) {
            this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE($a[0]);
            this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_a = this; this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_i = "first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E";
            this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE($a[1]);
            this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_a = this; this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_i = "second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E";
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E)) {
            this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E;
            this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_a = this; this.first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_i = "first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E";
            this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E;
            this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_a = this; this.second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E.ctj_i = "second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E";
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES6_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES6_E(...$a);
        }
        __init__ZSt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES6_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRSt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt9remove_cvIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRSt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt15remove_volatileIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRSt17_Rb_tree_iteratorISt4pairIKiiEEE {
        __init__ZSt12remove_constIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt16__is_void_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt8is_arrayISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE extends _ZSt8is_arrayISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt17_Rb_tree_iteratorISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS6_ESt8is_arrayIS6_EE extends _ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS6_ESt8is_arrayIS6_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS6_ESt8is_arrayIS6_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt5__or_ISt11is_functionIS6_ESt8is_arrayIS6_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt5__or_ISt11is_functionIS6_ESt8is_arrayIS6_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEES5_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEES5_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEES5_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRSt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEELi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEELi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt29__add_rvalue_reference_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRSt17_Rb_tree_iteratorISt4pairIKiiEELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES7_ES8_E extends _ZSt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES6_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES7_ES8_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES7_ES8_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES6_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES7_ES8_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRKSt17_Rb_tree_iteratorISt4pairIKiiEES7_ES8_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES4_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES4_E(...$a);
        }
        __init__ZSt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES4_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16__is_void_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt16__is_void_helperISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS5_ESt8is_arrayIS5_EE extends _ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS5_ESt8is_arrayIS5_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEESt11is_functionIS5_ESt8is_arrayIS5_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt17_Rb_tree_iteratorISt4pairIKiiEEESt8is_arrayIS5_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEESt5__or_ISt11is_functionIS5_ESt8is_arrayIS5_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEESt5__or_ISt11is_functionIS5_ESt8is_arrayIS5_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt17_Rb_tree_iteratorISt4pairIKiiEES4_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt17_Rb_tree_iteratorISt4pairIKiiEES4_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt17_Rb_tree_iteratorISt4pairIKiiEES4_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS5_EE extends _ZSt19is_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS5_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS5_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS5_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEESt19is_rvalue_referenceIS5_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS6_EEE extends _ZSt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS6_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt7is_voidIS6_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt12is_referenceIS6_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt17_Rb_tree_iteratorISt4pairIKiiEEEEStS0_ISt12is_referenceIS6_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE extends _ZSt29__add_rvalue_reference_helperISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt17_Rb_tree_iteratorISt4pairIKiiEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES5_ES6_E extends _ZSt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES4_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES5_ES6_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES5_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES4_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES5_ES6_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleISt17_Rb_tree_iteratorISt4pairIKiiEES5_ES6_E(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorISt4pairIKiiEE6rebindISt13_Rb_tree_nodeIS2_EEE {
        __init__ZNSt9allocatorISt4pairIKiiEE6rebindISt13_Rb_tree_nodeIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t23;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t23 = _Znwm(((Math.imul(__n, 24)) >>> 0)), $t23 ? {a: $t23.a, i: $t23.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE10deallocateEPS5_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (24))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES8_EEvPS5_OS7_OSA_OS8_(__p, __args_0, __args_1, __args_2) {
          (__p.a[__p.i] = new _ZSt13_Rb_tree_nodeISt4pairIKiiEE(_ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE7destroyIS5_EEvPS5_(__p) {
          _ZSt13_Rb_tree_nodeISt4pairIKiiEE.prototype.__dtor.call(__p.a[__p.i]);
        }
      }
      class _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE extends _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE {
        _M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        _M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        _M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE(...$a);
        }
        __init__ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE(...$a) {
          this._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = new _ZSt4lessIiE();
          this._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_a = this; this._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_i = "_M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE";
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = new _ZSt18_Rb_tree_node_base();
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_a = this; this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_i = "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE";
          this._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((0) >>> 0);
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EE13_M_initializeEv();
        }
        __dtor() {
          _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EE13_M_initializeEv() {
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_color = 0;
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent = null;
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left = (({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
          this._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_right = (({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
        }
      }
      class _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE {
        _M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE;
        constructor(...$a) {
          this.__init__ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE(...$a);
        }
        __init__ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE(...$a) {
          this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE = new _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE();
          this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.ctj_a = this; this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.ctj_i = "_M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE";
        }
        __dtor() {
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE"};
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_get_nodeEv() {
          let $t24;
          return ($t24 = _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE8allocateEmPKv.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, ((1) >>> 0), {a: [0], i: 0}), $t24 ? {a: $t24.a, i: $t24.i} : null);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E(__p) {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE10deallocateEPS5_m.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E(__p) {
          let $t25;
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE7destroyIS5_EEvPS5_.call(($t25 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE21_M_get_Node_allocatorEv(), $t25.a[$t25.i]), (__p ? {a: __p.a, i: __p.i} : null));
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_M_rootEv() {
          return {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, i: "_M_parent"};
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv() {
          return {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, i: "_M_left"};
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv() {
          return {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, i: "_M_right"};
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_beginEv() {
          return (this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent ? {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent.a, i: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent.i} : null);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv() {
          return (({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_valueEPKSt13_Rb_tree_nodeIS2_E(__x) {
          return {a: __x.a[__x.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE"};
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_valueEPKSt18_Rb_tree_node_base(__x) {
          return {a: __x.a[__x.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKiiEE"};
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E(__x) {
          let $t26;
          return (($t26 = new _ZSt10_Select1stISt4pairIKiiEE(), $t26))._ZNKSt10_Select1stISt4pairIKiiEEclERS2_(_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_valueEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)));
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(__x) {
          let $t27;
          return (($t27 = new _ZSt10_Select1stISt4pairIKiiEE(), $t27))._ZNKSt10_Select1stISt4pairIKiiEEclERS2_(_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_valueEPKSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)));
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base(__x) {
          return (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
        }
        static _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base(__x) {
          return (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k) {
          let $t28, $t29, $t30;
          let __x = ($t28 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_beginEv(), $t28 ? {a: $t28.a, i: $t28.i} : null);
          let __y = ($t29 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t29 ? {a: $t29.a, i: $t29.i} : null);
          let __comp = true;
          while ((__x !== null)) {
             {
              __y = (__x ? {a: __x.a, i: __x.i} : null);
              __comp = _ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)));
              __x = ($t30 = (__comp ? _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)) : _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null))), $t30 ? {a: $t30.a, i: $t30.i} : null);
            }
          }
          let __j = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__y ? {a: __y.a, i: __y.i} : null));
          if (__comp) {
             {
              if (__j._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEeqERKS3_({a: [this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5beginEv()], i: 0})) {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [__x], i: 0}, {a: [__y], i: 0});
              }
              else {
                __j._ZNSt17_Rb_tree_iteratorISt4pairIKiiEEmmEv();
              }
            }
          }
          if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: __j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: __j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)), __k)) {
            return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [__x], i: 0}, {a: [__y], i: 0});
          }
          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __j, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"}, {a: [null], i: 0});
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE29_M_get_insert_hint_unique_posESt23_Rb_tree_const_iteratorIS2_ERS1_(__position, __k) {
          let $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38, $t39, $t40, $t41, $t42;
          let __pos = _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.prototype._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEE13_M_const_castEv.call(__position);
          if (($t32 = ($t31 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t31), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE === $t32 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE && $t32 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a === $t32.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i === $t32.i)))) {
             {
              if (((this._ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE4sizeEv() > ((0) >>> 0)) && _ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t33 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv(), $t34 = ($t33 ? $t33.a[$t33.i] : null), $t34 && $t34.a !== undefined ? {a: $t34.a, i: $t34.i} : $t34)), __k))) {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv());
              }
              else {
                return this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
              }
            }
          }
          else {
            if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)))) {
               {
                let __before = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE({a: [__pos], i: 0});
                if (($t36 = (($t35 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv(), $t35) ? (($t35 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv(), $t35)).a[(($t35 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv(), $t35)).i] : null), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE === $t36 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE && $t36 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a === $t36.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i === $t36.i)))) {
                  return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E(this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv(), this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv());
                }
                else {
                  if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t38 = (($t37 = __before._ZNSt17_Rb_tree_iteratorISt4pairIKiiEEmmEv(), $t37.a[$t37.i]))._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE, $t38 ? {a: $t38.a, i: $t38.i} : null)), __k)) {
                     {
                      if ((_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: __before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: __before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)) === null)) {
                        return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, {a: __before, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"});
                      }
                      else {
                        return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"}, {a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"});
                      }
                    }
                  }
                  else {
                    return this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
                  }
                }
              }
            }
            else {
              if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)), __k)) {
                 {
                  let __after = new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE({a: [__pos], i: 0});
                  if (($t40 = (($t39 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv(), $t39) ? (($t39 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv(), $t39)).a[(($t39 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv(), $t39)).i] : null), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE === $t40 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE && $t40 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a === $t40.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i === $t40.i)))) {
                    return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv());
                  }
                  else {
                    if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t42 = (($t41 = __after._ZNSt17_Rb_tree_iteratorISt4pairIKiiEEppEv(), $t41.a[$t41.i]))._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE, $t42 ? {a: $t42.a, i: $t42.i} : null)))) {
                       {
                        if ((_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE.i} : null)) === null)) {
                          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, {a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"});
                        }
                        else {
                          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __after, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"}, {a: __after, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"});
                        }
                      }
                    }
                    else {
                      return this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
                    }
                  }
                }
              }
              else {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKiiEE"}, {a: [null], i: 0});
              }
            }
          }
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_insert_nodeEPSt18_Rb_tree_node_baseSA_PSt13_Rb_tree_nodeIS2_E(__x, __p, __z) {
          let $t43, $t44;
          let __insert_left = (((__x !== null) || ($t44 = ($t43 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t43), (__p === $t44 || (__p && $t44 && __p.a === $t44.a && __p.i === $t44.i)))) || _ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null)), _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__p ? {a: __p.a, i: __p.i} : null))));
          _ZSt29_Rb_tree_insert_and_rebalanceKbPSt18_Rb_tree_node_baseS0_RS1_(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"});
          (this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE + 1) >>> 0));
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__z ? {a: __z.a, i: __z.i} : null));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_eraseEPSt13_Rb_tree_nodeIS2_E(__x) {
          let $t45, $t46;
          while ((__x !== null)) {
             {
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_eraseEPSt13_Rb_tree_nodeIS2_E(($t45 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t45 ? {a: $t45.a, i: $t45.i} : null));
              let __y = ($t46 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t46 ? {a: $t46.a, i: $t46.i} : null);
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null));
              __x = (__y ? {a: __y.a, i: __y.i} : null);
            }
          }
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_lower_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_(__x, __y, __k) {
          let $t47, $t48;
          while ((__x !== null)) {
            if ((!(_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
              (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t47 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t47 ? {a: $t47.a, i: $t47.i} : null));
            }
            else {
              __x = ($t48 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t48 ? {a: $t48.a, i: $t48.i} : null);
            }
          }
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__y ? {a: __y.a, i: __y.i} : null));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_upper_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_(__x, __y, __k) {
          let $t49, $t50;
          while ((__x !== null)) {
            if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)))) {
              (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t49 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t49 ? {a: $t49.a, i: $t49.i} : null));
            }
            else {
              __x = ($t50 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t50 ? {a: $t50.a, i: $t50.i} : null);
            }
          }
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__y ? {a: __y.a, i: __y.i} : null));
        }
        _ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8key_compEv() {
          return new _ZSt4lessIiE({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"});
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5beginEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left ? {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left.a, i: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left.i} : null));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE3endEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6rbeginEv() {
          return new _ZSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEE(this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE3endEv());
        }
        _ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE4sizeEv() {
          return this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_erase_auxESt23_Rb_tree_const_iteratorIS2_E(__position) {
          let $t51;
          let __y = ($t51 = _ZSt28_Rb_tree_rebalance_for_erasePSt18_Rb_tree_node_baseRS0_((__position._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE ? {a: __position._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.a, i: __position._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.i} : null), {a: this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}), $t51 ? {a: $t51.a, i: $t51.i} : null);
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__y ? {a: __y.a, i: __y.i} : null));
          (this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE - 1) >>> 0));
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_erase_auxESt23_Rb_tree_const_iteratorIS2_ESB_(__first, __last) {
          if ((__first._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEEeqERKS3_({a: [new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5beginEv()], i: 0})], i: 0}) && __last._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEEeqERKS3_({a: [new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE3endEv()], i: 0})], i: 0}))) {
            this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5clearEv();
          }
          else {
            while (__first._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEEneERKS3_({a: [__last], i: 0})) {
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseESt23_Rb_tree_const_iteratorIS2_E(new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__first._ZNSt23_Rb_tree_const_iteratorISt4pairIKiiEEppEi(0)], i: 0}));
            }
          }
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseESt23_Rb_tree_const_iteratorIS2_E(__position) {
          let __result = new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__position], i: 0});
          __result._ZNSt23_Rb_tree_const_iteratorISt4pairIKiiEEppEv();
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_erase_auxESt23_Rb_tree_const_iteratorIS2_E(new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__position], i: 0}));
          return _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.prototype._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEE13_M_const_castEv.call(__result);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseERS1_(__x) {
          let __p = {v: this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11equal_rangeERS1_(__x)};
          let __old_size = this._ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE4sizeEv();
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseESt23_Rb_tree_const_iteratorIS2_ESB_(new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: __p.v, i: "first$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E"}), new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: __p.v, i: "second$_ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E"}));
          return (((__old_size) - (this._ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE4sizeEv())) >>> 0);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseESt23_Rb_tree_const_iteratorIS2_ESB_(__first, __last) {
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_erase_auxESt23_Rb_tree_const_iteratorIS2_ESB_(new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__first], i: 0}), new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__last], i: 0}));
          return _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE.prototype._ZNKSt23_Rb_tree_const_iteratorISt4pairIKiiEE13_M_const_castEv.call(__last);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5clearEv() {
          let $t52, $t53, $t54, $t55, $t56, $t57;
          this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_eraseEPSt13_Rb_tree_nodeIS2_E(($t52 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_beginEv(), $t52 ? {a: $t52.a, i: $t52.i} : null));
          ($t53 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_leftmostEv(), $t53.a[$t53.i] = ($t54 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t54 ? {a: $t54.a, i: $t54.i} : null));
          ($t55 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_M_rootEv(), $t55.a[$t55.i] = null);
          ($t56 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE12_M_rightmostEv(), $t56.a[$t56.i] = ($t57 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t57 ? {a: $t57.a, i: $t57.i} : null));
          this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((0) >>> 0);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11lower_boundERS1_(__k) {
          let $t58, $t59;
          return this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_lower_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_(($t58 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_beginEv(), $t58 ? {a: $t58.a, i: $t58.i} : null), ($t59 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t59 ? {a: $t59.a, i: $t59.i} : null), __k);
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11equal_rangeERS1_(__k) {
          let $t60, $t61, $t62, $t63, $t64, $t65;
          let __x = ($t60 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_M_beginEv(), $t60 ? {a: $t60.a, i: $t60.i} : null);
          let __y = ($t61 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_M_endEv(), $t61 ? {a: $t61.a, i: $t61.i} : null);
          while ((__x !== null)) {
             {
              if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)), __k)) {
                __x = ($t62 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t62 ? {a: $t62.a, i: $t62.i} : null);
              }
              else {
                if (_ZSt4lessIiE.prototype._ZNKSt4lessIiEclERKiS1_.call(this._M_impl$_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)))) {
                  (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t63 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t63 ? {a: $t63.a, i: $t63.i} : null));
                }
                else {
                   {
                    let __xu = (__x ? {a: __x.a, i: __x.i} : null);
                    let __yu = (__y ? {a: __y.a, i: __y.i} : null);
                    (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t64 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t64 ? {a: $t64.a, i: $t64.i} : null));
                    __xu = ($t65 = _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__xu ? {a: __xu.a, i: __xu.i} : null)), $t65 ? {a: $t65.a, i: $t65.i} : null);
                    return new _ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E({a: [this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_lower_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_((__x ? {a: __x.a, i: __x.i} : null), (__y ? {a: __y.a, i: __y.i} : null), __k)], i: 0}, {a: [this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_upper_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_((__xu ? {a: __xu.a, i: __xu.i} : null), (__yu ? {a: __yu.a, i: __yu.i} : null), __k)], i: 0});
                  }
                }
              }
            }
          }
          return new _ZSt4pairISt17_Rb_tree_iteratorIStS_IKiiEES3_E({a: [new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__y ? {a: __y.a, i: __y.i} : null))], i: 0}, {a: [new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__y ? {a: __y.a, i: __y.i} : null))], i: 0});
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE22_M_emplace_hint_uniqueISt21piecewise_construct_tSt5tupleIRS1_ESB_EESt17_Rb_tree_iteratorIS2_ESt23_Rb_tree_const_iteratorIS2_EOSA_OSD_OSB_(__pos, __args_0, __args_1, __args_2) {
          let $t66;
          let __z = ($t66 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_create_nodeISt21piecewise_construct_tSt5tupleIRS1_ESB_EEPSt13_Rb_tree_nodeIS2_EOSA_OSD_OSB_(_ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2)), $t66 ? {a: $t66.a, i: $t66.i} : null);
          if (true) {
             {
              let __res = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE29_M_get_insert_hint_unique_posESt23_Rb_tree_const_iteratorIS2_ERS1_(new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: [__pos], i: 0}), _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null)));
              if (__res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E) {
                return this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_insert_nodeEPSt18_Rb_tree_node_baseSA_PSt13_Rb_tree_nodeIS2_E((__res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null), (__res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null), (__z ? {a: __z.a, i: __z.i} : null));
              }
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null));
              return new _ZSt17_Rb_tree_iteratorISt4pairIKiiEE((__res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null));
            }
          }
          if (false) {
             {
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null));
            }
          }
        }
        _ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE14_M_create_nodeISt21piecewise_construct_tSt5tupleIRS1_ESB_EEPSt13_Rb_tree_nodeIS2_EOSA_OSD_OSB_(__args_0, __args_1, __args_2) {
          let $t67;
          let __tmp = ($t67 = this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_get_nodeEv(), $t67 ? {a: $t67.a, i: $t67.i} : null);
          if (true) {
             {
              _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE._ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE21_M_get_Node_allocatorEv(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
            }
          }
          if (false) {
             {
              this._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
            }
          }
          return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
        }
      }
      class _ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE {
        _M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE;
        constructor(...$a) {
          this.__init__ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE(...$a) {
          this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE = new _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE();
          this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.ctj_a = this; this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.ctj_i = "_M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE";
        }
        __dtor() {
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE5beginEv() {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5beginEv.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE);
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE3endEv() {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE3endEv.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE);
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE6rbeginEv() {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE6rbeginEv.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE);
        }
        _ZNKSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE4sizeEv() {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE4sizeEv.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE);
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEEixERS4_(__k) {
          let $t68;
          let __i = {v: this._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE11lower_boundERS4_(__k)};
          if ((__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEeqERKS3_({a: [this._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE3endEv()], i: 0}) || (($t68 = this._ZNKSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE8key_compEv(), $t68))._ZNKSt4lessIiEclERKiS1_(__k, {a: (__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv()).a[(__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv()).i], i: "first$_ZSt4pairIKiiE"}))) {
            __i.v._ZNSt17_Rb_tree_iteratorISt4pairIKiiEEaSERS3_({a: [_ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE22_M_emplace_hint_uniqueISt21piecewise_construct_tSt5tupleIRS1_ESB_EESt17_Rb_tree_iteratorIS2_ESt23_Rb_tree_const_iteratorIS2_EOSA_OSD_OSB_.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE, new _ZSt23_Rb_tree_const_iteratorISt4pairIKiiEE({a: __i, i: "v"}), {a: _ZSt19piecewise_construct, i: "v"}, {a: [new _ZSt5tupleIRKiE(__k)], i: 0}, {a: [new _ZSt5tuple()], i: 0})], i: 0});
          }
          return {a: (__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv()).a[(__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEdeEv()).i], i: "second$_ZSt4pairIKiiE"};
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE5eraseERS4_(__x) {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE5eraseERS1_.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE, __x);
        }
        _ZNKSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE8key_compEv() {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNKSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE8key_compEv.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE);
        }
        _ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE11lower_boundERS4_(__x) {
          return _ZSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIiSt4pairIKiiESt10_Select1stIS2_ESt4lessIiESt9allocatorIS2_EE11lower_boundERS1_.call(this._M_t$_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE, __x);
        }
      }
      class _ZSt16remove_referenceIPNSt8__detail15_List_node_baseEE {
        __init__ZSt16remove_referenceIPNSt8__detail15_List_node_baseEE(...$a) { }
        __dtor() {
        }
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
      class _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        __init__ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) { }
        __dtor() {
        }
        static _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, __p, __args_0, __args_1, __args_2) {
          _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE._ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE12_S_constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
        }
        static _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE12_S_constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, __p, __args_0, __args_1, __args_2) {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKiiEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES8_EEvPS5_OS7_OSA_OS8_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
        }
      }
      class _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE {
        constructor(...$a) {
          this.__init__ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE(...$a);
        }
        __init__ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
      }
      class _ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        __init__ZSt9remove_cvIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        __init__ZSt15remove_volatileIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        __init__ZSt12remove_constIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKiiEELi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKiiEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKiiEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKiiEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt12is_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceISt21piecewise_construct_tE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt21piecewise_construct_tE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt7is_voidISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt21piecewise_construct_tE {
        __init__ZSt9remove_cvISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt21piecewise_construct_tE {
        __init__ZSt15remove_volatileISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt21piecewise_construct_tE {
        __init__ZSt12remove_constISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt16__is_void_helperISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt21piecewise_construct_tEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt21piecewise_construct_tEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt21piecewise_construct_tE extends _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt5tupleIRKiEE(...$a);
        }
        __init__ZSt12is_referenceISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt5tupleIRKiEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt5tupleIRKiEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKiEESt19is_rvalue_referenceIS4_EE extends _ZSt19is_rvalue_referenceISt5tupleIRKiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKiEESt19is_rvalue_referenceIS4_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKiEESt19is_rvalue_referenceIS4_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt5tupleIRKiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleIRKiEESt19is_rvalue_referenceIS4_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleIRKiEESt19is_rvalue_referenceIS4_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt5tupleIRKiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt5tupleIRKiEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt5tupleIRKiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt5tupleIRKiEE(...$a);
        }
        __init__ZSt7is_voidISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt5tupleIRKiEE {
        __init__ZSt9remove_cvISt5tupleIRKiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt5tupleIRKiEE {
        __init__ZSt15remove_volatileISt5tupleIRKiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt5tupleIRKiEE {
        __init__ZSt12remove_constISt5tupleIRKiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt5tupleIRKiEE(...$a);
        }
        __init__ZSt16__is_void_helperISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt5tupleIRKiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt5tupleIRKiEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt5tupleIRKiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKiEEEStS0_ISt7is_voidIS5_EEE extends _ZSt6__not_ISt7is_voidISt5tupleIRKiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKiEEEStS0_ISt7is_voidIS5_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKiEEEStS0_ISt7is_voidIS5_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt5tupleIRKiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleIRKiEEEStS0_ISt12is_referenceIS5_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleIRKiEEEStS0_ISt12is_referenceIS5_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt5tupleIRKiELi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt5tupleIRKiELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt5tupleIRKiEE extends _ZSt29__add_rvalue_reference_helperISt5tupleIRKiELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt5tupleIRKiEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt5tupleIRKiELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt5tupleE(...$a);
        }
        __init__ZSt12is_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceISt5tupleE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt5tupleE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt5tupleEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt5tupleEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt5tupleEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt5tupleE(...$a);
        }
        __init__ZSt7is_voidISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt5tupleE {
        __init__ZSt9remove_cvISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt5tupleE {
        __init__ZSt15remove_volatileISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt5tupleE {
        __init__ZSt12remove_constISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt5tupleE(...$a);
        }
        __init__ZSt16__is_void_helperISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt5tupleEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt5tupleEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt5tupleEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidISt5tupleEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt5tupleEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt5tupleLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt5tupleE extends _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        __init__ZSt9remove_cvIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        __init__ZSt15remove_volatileIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        __init__ZSt12remove_constIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEELi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE extends _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE(...$a);
        }
        __init__ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt31__do_is_nary_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt31__do_is_nary_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE extends _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt16is_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS3_ES7_ESt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperIS5_S6_S9_S7_EEEE {
        __init__ZSt11conditionalILi0ESt16is_constructibleISt13_Rb_tree_nodeISt4pairIKiiEESt21piecewise_construct_tSt5tupleIRS3_ES7_ESt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd28pair$3cint$2cint$3e$3e$3e$3e18__construct_helperIS5_S6_S9_S7_EEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi0EvE {
        __init__ZSt9enable_ifILi0EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS4_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS4_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE(...$a);
        }
        __init__ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPiE(...$a);
        }
        __init__ZSt11is_functionIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPiE(...$a);
        }
        __init__ZSt8is_arrayIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE extends _ZSt8is_arrayIPiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE extends _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPiESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPiESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIPiESt8is_arrayIS6_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIPiESt8is_arrayIS6_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE extends _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE {
        __init__ZSt11conditionalILi0ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE extends _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE {
        __init__ZSt11conditionalILi1ESt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIRSt17_Rb_tree_iteratorISt4pairIKiiEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19__declval_protectorIRSt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt17_Rb_tree_iteratorISt4pairIKiiEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19__declval_protectorISt17_Rb_tree_iteratorISt4pairIKiiEEE(...$a) {
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
      class _ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt21piecewise_construct_tE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19__declval_protectorISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt5tupleIRKiEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt5tupleIRKiEE(...$a);
        }
        __init__ZSt19__declval_protectorISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt5tupleE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt5tupleE(...$a);
        }
        __init__ZSt19__declval_protectorISt5tupleE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEES0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEES0_E(...$a);
        }
        __init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEES0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a);
        }
        __init__ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE extends _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPSt13_Rb_tree_nodeISt4pairIKiiEEESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEES0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEES0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEES0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayISA_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKiiEEESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayISA_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseES9_E extends _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseES9_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseES9_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseES9_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKiiEEPSt18_Rb_tree_node_baseES9_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleISt21piecewise_construct_tSt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt21piecewise_construct_tSt5tupleIRKiEE(...$a);
        }
        __init__ZSt14is_convertibleISt21piecewise_construct_tSt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt5tupleIRKiEE(...$a);
        }
        __init__ZSt11is_functionISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt5tupleIRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt5tupleIRKiEE(...$a);
        }
        __init__ZSt8is_arrayISt5tupleIRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE extends _ZSt8is_arrayISt5tupleIRKiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt5tupleIRKiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionISt5tupleIRKiEESt8is_arrayIS7_EE extends _ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionISt5tupleIRKiEESt8is_arrayIS7_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionISt5tupleIRKiEESt8is_arrayIS7_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS8_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS8_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt21piecewise_construct_tSt5tupleIRKiELi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt21piecewise_construct_tSt5tupleIRKiELi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt21piecewise_construct_tSt5tupleIRKiELi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleIRKiESt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleIRKiESt21piecewise_construct_tE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleIRKiESt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt11is_functionISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt8is_arrayISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE extends _ZSt8is_arrayISt21piecewise_construct_tE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt21piecewise_construct_tE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionISt21piecewise_construct_tESt8is_arrayIS7_EE extends _ZSt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionISt21piecewise_construct_tESt8is_arrayIS7_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionISt21piecewise_construct_tESt8is_arrayIS7_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt21piecewise_construct_tESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS8_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionISt21piecewise_construct_tESt8is_arrayIS8_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleIRKiESt21piecewise_construct_tLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleIRKiESt21piecewise_construct_tLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleIRKiESt21piecewise_construct_tLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt21piecewise_construct_tiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt21piecewise_construct_tiE(...$a);
        }
        __init__ZSt14is_convertibleISt21piecewise_construct_tiE(...$a) {
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
      class _ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIiESt8is_arrayIiEE(...$a) {
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
      class _ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt21piecewise_construct_tiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt21piecewise_construct_tiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt21piecewise_construct_tiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleIRKiEiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleIRKiEiE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleIRKiEiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleIRKiEiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleIRKiEiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleIRKiEiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleISt21piecewise_construct_tiEStS0_ISt5tupleIRKiEiEE extends _ZSt14is_convertibleISt21piecewise_construct_tiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleISt21piecewise_construct_tiEStS0_ISt5tupleIRKiEiEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleISt21piecewise_construct_tiEStS0_ISt5tupleIRKiEiEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleISt21piecewise_construct_tiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleISt5tupleIRKiEiEStS0_ISt21piecewise_construct_tiEE {
        __init__ZSt11conditionalILi0ESt14is_convertibleISt5tupleIRKiEiEStS0_ISt21piecewise_construct_tiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE {
        __init__ZSt16remove_referenceIPSt13_Rb_tree_nodeISt4pairIKiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18_Build_index_tupleILi1EE {
        __init__ZSt18_Build_index_tupleILi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18_Build_index_tupleILi0EE {
        __init__ZSt18_Build_index_tupleILi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12_Index_tuple {
        constructor(...$a) {
          this.__init__ZSt12_Index_tuple(...$a);
        }
        __init__ZSt12_Index_tuple(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_Index_tupleILi0EE {
        constructor(...$a) {
          this.__init__ZSt12_Index_tupleILi0EE(...$a);
        }
        __init__ZSt12_Index_tupleILi0EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleISt5tupleIRKiES0_E extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleIRKiES0_E(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleIRKiES0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt5tupleE(...$a);
        }
        __init__ZSt11is_functionISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt5tupleE(...$a);
        }
        __init__ZSt8is_arrayISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt5tupleESt8is_arrayIS1_EE extends _ZSt8is_arrayISt5tupleE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt5tupleESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt5tupleESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt5tupleE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionISt5tupleESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleIRKiEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt5tupleESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt5tupleESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt5tupleESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleIRKiEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleIRKiES0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleIRKiES0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleIRKiES0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleStS0_IRKiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleStS0_IRKiEE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleStS0_IRKiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIStS1_IRKiEESt8is_arrayIS6_EE extends _ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIStS1_IRKiEESt8is_arrayIS6_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIStS1_IRKiEESt8is_arrayIS6_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt5tupleIRKiEESt8is_arrayIS4_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIStS1_IRKiEESt8is_arrayIS7_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIStS1_IRKiEESt8is_arrayIS7_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleStS0_IRKiELi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleStS0_IRKiELi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleStS0_IRKiELi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleiE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleISt5tupleIRKiEiEStS0_IS1_iEE extends _ZSt14is_convertibleISt5tupleIRKiEiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleISt5tupleIRKiEiEStS0_IS1_iEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleISt5tupleIRKiEiEStS0_IS1_iEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleISt5tupleIRKiEiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleISt5tupleiEStS0_IStS1_IRKiEiEE {
        __init__ZSt11conditionalILi0ESt14is_convertibleISt5tupleiEStS0_IStS1_IRKiEiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13tuple_elementILi0ESt5tupleIRKiEE {
        __init__ZSt13tuple_elementILi0ESt5tupleIRKiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9__add_refIRiE {
        __init__ZSt9__add_refIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_c_refIRiE {
        __init__ZSt11__add_c_refIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_r_refIRiE {
        __init__ZSt11__add_r_refIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIRiE {
        __init__ZSt16remove_referenceIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt14_Rb_tree_colorE {
        __init__ZSt16remove_referenceISt14_Rb_tree_colorE(...$a) { }
        __dtor() {
        }
      }
      function _Z6printfPKcvz(...$a) { return ((a) => $L.vfmt(1, null, 0, a[0], {a: a.slice(1), i: 0}))($a); }
      function _Z8mbrtoc16PDsPKcmP10$24class_3(...$a) { return ((a) => {
        if (a[1] === null)
            return 0;
        if (a[2] === 0)
            return 4294967294;
        const b = $L.get(a[1], 0) & 255;
        if (b >= 0x80) {
            $L.errbox.a[$L.errbox.i] = 84;
            return 4294967295;
        }
        if (a[0] !== null)
            $L.put(a[0], 0, b);
        return b === 0 ? 0 : 1;
    })($a); }
      function _Z8c16rtombPcDsP10$24class_3(...$a) { return ((a) => {
        if (a[0] === null)
            return 1;
        const c = a[1];
        if (c < 0 || c >= 0x80) {
            $L.errbox.a[$L.errbox.i] = 84;
            return 4294967295;
        }
        $L.put(a[0], 0, c);
        return 1;
    })($a); }
      function _Z8mbrtoc32PDiPKcmP10$24class_3(...$a) { return ((a) => {
        if (a[1] === null)
            return 0;
        if (a[2] === 0)
            return 4294967294;
        const b = $L.get(a[1], 0) & 255;
        if (b >= 0x80) {
            $L.errbox.a[$L.errbox.i] = 84;
            return 4294967295;
        }
        if (a[0] !== null)
            $L.put(a[0], 0, b);
        return b === 0 ? 0 : 1;
    })($a); }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base(__x) {
        let $t69;
        return ($t69 = _ZSt23local_Rb_tree_incrementPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t69 ? {a: $t69.a, i: $t69.i} : null);
      }
      function _ZSt18_Rb_tree_decrementPSt18_Rb_tree_node_base(__x) {
        let $t70;
        return ($t70 = _ZSt23local_Rb_tree_decrementPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t70 ? {a: $t70.a, i: $t70.i} : null);
      }
      function _ZSt29_Rb_tree_insert_and_rebalanceKbPSt18_Rb_tree_node_baseS0_RS1_(__insert_left, __x, __p, __header) {
        let __root = {a: __header.a[__header.i], i: "_M_parent"};
        (__x.a[__x.i])._M_parent = (__p ? {a: __p.a, i: __p.i} : null);
        (__x.a[__x.i])._M_left = null;
        (__x.a[__x.i])._M_right = null;
        (__x.a[__x.i])._M_color = 0;
        if (__insert_left) {
           {
            (__p.a[__p.i])._M_left = (__x ? {a: __x.a, i: __x.i} : null);
            if ((__p === __header || (__p && __header && __p.a === __header.a && __p.i === __header.i))) {
               {
                (__header.a[__header.i])._M_parent = (__x ? {a: __x.a, i: __x.i} : null);
                (__header.a[__header.i])._M_right = (__x ? {a: __x.a, i: __x.i} : null);
              }
            }
            else {
              if ((__p === ((__header.a[__header.i])._M_left) || (__p && ((__header.a[__header.i])._M_left) && __p.a === ((__header.a[__header.i])._M_left).a && __p.i === ((__header.a[__header.i])._M_left).i))) {
                (__header.a[__header.i])._M_left = (__x ? {a: __x.a, i: __x.i} : null);
              }
            }
          }
        }
        else {
           {
            (__p.a[__p.i])._M_right = (__x ? {a: __x.a, i: __x.i} : null);
            if ((__p === ((__header.a[__header.i])._M_right) || (__p && ((__header.a[__header.i])._M_right) && __p.a === ((__header.a[__header.i])._M_right).a && __p.i === ((__header.a[__header.i])._M_right).i))) {
              (__header.a[__header.i])._M_right = (__x ? {a: __x.a, i: __x.i} : null);
            }
          }
        }
        while (((!(__x === (__root.a[__root.i]) || (__x && (__root.a[__root.i]) && __x.a === (__root.a[__root.i]).a && __x.i === (__root.a[__root.i]).i))) && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_color === 0))) {
           {
            let __xpp = (((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent) ? {a: ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent).a, i: ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent).i} : null);
            if ((((__x.a[__x.i])._M_parent) === ((__xpp.a[__xpp.i])._M_left) || (((__x.a[__x.i])._M_parent) && ((__xpp.a[__xpp.i])._M_left) && ((__x.a[__x.i])._M_parent).a === ((__xpp.a[__xpp.i])._M_left).a && ((__x.a[__x.i])._M_parent).i === ((__xpp.a[__xpp.i])._M_left).i))) {
               {
                let __y = (((__xpp.a[__xpp.i])._M_right) ? {a: ((__xpp.a[__xpp.i])._M_right).a, i: ((__xpp.a[__xpp.i])._M_right).i} : null);
                if ((__y && ((__y.a[__y.i])._M_color === 0))) {
                   {
                    (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_color = 1;
                    (__y.a[__y.i])._M_color = 1;
                    (__xpp.a[__xpp.i])._M_color = 0;
                    __x = (__xpp ? {a: __xpp.a, i: __xpp.i} : null);
                  }
                }
                else {
                   {
                    if ((__x === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right) || (__x && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right) && __x.a === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right).a && __x.i === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right).i))) {
                       {
                        __x = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
                        _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_((__x ? {a: __x.a, i: __x.i} : null), __root);
                      }
                    }
                    (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_color = 1;
                    (__xpp.a[__xpp.i])._M_color = 0;
                    _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_((__xpp ? {a: __xpp.a, i: __xpp.i} : null), __root);
                  }
                }
              }
            }
            else {
               {
                let __y = (((__xpp.a[__xpp.i])._M_left) ? {a: ((__xpp.a[__xpp.i])._M_left).a, i: ((__xpp.a[__xpp.i])._M_left).i} : null);
                if ((__y && ((__y.a[__y.i])._M_color === 0))) {
                   {
                    (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_color = 1;
                    (__y.a[__y.i])._M_color = 1;
                    (__xpp.a[__xpp.i])._M_color = 0;
                    __x = (__xpp ? {a: __xpp.a, i: __xpp.i} : null);
                  }
                }
                else {
                   {
                    if ((__x === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left) || (__x && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left) && __x.a === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left).a && __x.i === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left).i))) {
                       {
                        __x = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
                        _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_((__x ? {a: __x.a, i: __x.i} : null), __root);
                      }
                    }
                    (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_color = 1;
                    (__xpp.a[__xpp.i])._M_color = 0;
                    _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_((__xpp ? {a: __xpp.a, i: __xpp.i} : null), __root);
                  }
                }
              }
            }
          }
        }
        ((__root.a[__root.i]).a[(__root.a[__root.i]).i])._M_color = 1;
      }
      function _ZSt28_Rb_tree_rebalance_for_erasePSt18_Rb_tree_node_baseRS0_(__z, __header) {
        let $t71, $t72;
        let __root = {a: __header.a[__header.i], i: "_M_parent"};
        let __leftmost = {a: __header.a[__header.i], i: "_M_left"};
        let __rightmost = {a: __header.a[__header.i], i: "_M_right"};
        let __y = (__z ? {a: __z.a, i: __z.i} : null);
        let __x = null;
        let __x_parent = null;
        if (((__y.a[__y.i])._M_left === null)) {
          __x = (((__y.a[__y.i])._M_right) ? {a: ((__y.a[__y.i])._M_right).a, i: ((__y.a[__y.i])._M_right).i} : null);
        }
        else {
          if (((__y.a[__y.i])._M_right === null)) {
            __x = (((__y.a[__y.i])._M_left) ? {a: ((__y.a[__y.i])._M_left).a, i: ((__y.a[__y.i])._M_left).i} : null);
          }
          else {
             {
              __y = (((__y.a[__y.i])._M_right) ? {a: ((__y.a[__y.i])._M_right).a, i: ((__y.a[__y.i])._M_right).i} : null);
              while (((__y.a[__y.i])._M_left !== null)) {
                __y = (((__y.a[__y.i])._M_left) ? {a: ((__y.a[__y.i])._M_left).a, i: ((__y.a[__y.i])._M_left).i} : null);
              }
              __x = (((__y.a[__y.i])._M_right) ? {a: ((__y.a[__y.i])._M_right).a, i: ((__y.a[__y.i])._M_right).i} : null);
            }
          }
        }
        if ((!(__y === __z || (__y && __z && __y.a === __z.a && __y.i === __z.i)))) {
           {
            (((__z.a[__z.i])._M_left).a[((__z.a[__z.i])._M_left).i])._M_parent = (__y ? {a: __y.a, i: __y.i} : null);
            (__y.a[__y.i])._M_left = (((__z.a[__z.i])._M_left) ? {a: ((__z.a[__z.i])._M_left).a, i: ((__z.a[__z.i])._M_left).i} : null);
            if ((!(__y === ((__z.a[__z.i])._M_right) || (__y && ((__z.a[__z.i])._M_right) && __y.a === ((__z.a[__z.i])._M_right).a && __y.i === ((__z.a[__z.i])._M_right).i)))) {
               {
                __x_parent = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
                if (__x) {
                  (__x.a[__x.i])._M_parent = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
                }
                (((__y.a[__y.i])._M_parent).a[((__y.a[__y.i])._M_parent).i])._M_left = (__x ? {a: __x.a, i: __x.i} : null);
                (__y.a[__y.i])._M_right = (((__z.a[__z.i])._M_right) ? {a: ((__z.a[__z.i])._M_right).a, i: ((__z.a[__z.i])._M_right).i} : null);
                (((__z.a[__z.i])._M_right).a[((__z.a[__z.i])._M_right).i])._M_parent = (__y ? {a: __y.a, i: __y.i} : null);
              }
            }
            else {
              __x_parent = (__y ? {a: __y.a, i: __y.i} : null);
            }
            if (((__root.a[__root.i]) === __z || ((__root.a[__root.i]) && __z && (__root.a[__root.i]).a === __z.a && (__root.a[__root.i]).i === __z.i))) {
              __root.a[__root.i] = (__y ? {a: __y.a, i: __y.i} : null);
            }
            else {
              if ((((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left) === __z || (((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left) && __z && ((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left).a === __z.a && ((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left).i === __z.i))) {
                (((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left = (__y ? {a: __y.a, i: __y.i} : null);
              }
              else {
                (((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_right = (__y ? {a: __y.a, i: __y.i} : null);
              }
            }
            (__y.a[__y.i])._M_parent = (((__z.a[__z.i])._M_parent) ? {a: ((__z.a[__z.i])._M_parent).a, i: ((__z.a[__z.i])._M_parent).i} : null);
            _ZSt4swapISt14_Rb_tree_colorEvRS_S0_({a: __y.a[__y.i], i: "_M_color"}, {a: __z.a[__z.i], i: "_M_color"});
            __y = (__z ? {a: __z.a, i: __z.i} : null);
          }
        }
        else {
           {
            __x_parent = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
            if (__x) {
              (__x.a[__x.i])._M_parent = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
            }
            if (((__root.a[__root.i]) === __z || ((__root.a[__root.i]) && __z && (__root.a[__root.i]).a === __z.a && (__root.a[__root.i]).i === __z.i))) {
              __root.a[__root.i] = (__x ? {a: __x.a, i: __x.i} : null);
            }
            else {
              if ((((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left) === __z || (((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left) && __z && ((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left).a === __z.a && ((((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left).i === __z.i))) {
                (((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_left = (__x ? {a: __x.a, i: __x.i} : null);
              }
              else {
                (((__z.a[__z.i])._M_parent).a[((__z.a[__z.i])._M_parent).i])._M_right = (__x ? {a: __x.a, i: __x.i} : null);
              }
            }
            if (((__leftmost.a[__leftmost.i]) === __z || ((__leftmost.a[__leftmost.i]) && __z && (__leftmost.a[__leftmost.i]).a === __z.a && (__leftmost.a[__leftmost.i]).i === __z.i))) {
               {
                if (((__z.a[__z.i])._M_right === null)) {
                  __leftmost.a[__leftmost.i] = (((__z.a[__z.i])._M_parent) ? {a: ((__z.a[__z.i])._M_parent).a, i: ((__z.a[__z.i])._M_parent).i} : null);
                }
                else {
                  __leftmost.a[__leftmost.i] = ($t71 = _ZSt18_Rb_tree_node_base._ZNSt18_Rb_tree_node_base10_S_minimumEPS_((__x ? {a: __x.a, i: __x.i} : null)), $t71 ? {a: $t71.a, i: $t71.i} : null);
                }
              }
            }
            if (((__rightmost.a[__rightmost.i]) === __z || ((__rightmost.a[__rightmost.i]) && __z && (__rightmost.a[__rightmost.i]).a === __z.a && (__rightmost.a[__rightmost.i]).i === __z.i))) {
               {
                if (((__z.a[__z.i])._M_left === null)) {
                  __rightmost.a[__rightmost.i] = (((__z.a[__z.i])._M_parent) ? {a: ((__z.a[__z.i])._M_parent).a, i: ((__z.a[__z.i])._M_parent).i} : null);
                }
                else {
                  __rightmost.a[__rightmost.i] = ($t72 = _ZSt18_Rb_tree_node_base._ZNSt18_Rb_tree_node_base10_S_maximumEPS_((__x ? {a: __x.a, i: __x.i} : null)), $t72 ? {a: $t72.a, i: $t72.i} : null);
                }
              }
            }
          }
        }
        if (((__y.a[__y.i])._M_color !== 0)) {
           {
            while (((!(__x === (__root.a[__root.i]) || (__x && (__root.a[__root.i]) && __x.a === (__root.a[__root.i]).a && __x.i === (__root.a[__root.i]).i))) && ((__x === null) || ((__x.a[__x.i])._M_color === 1)))) {
              if ((__x === ((__x_parent.a[__x_parent.i])._M_left) || (__x && ((__x_parent.a[__x_parent.i])._M_left) && __x.a === ((__x_parent.a[__x_parent.i])._M_left).a && __x.i === ((__x_parent.a[__x_parent.i])._M_left).i))) {
                 {
                  let __w = (((__x_parent.a[__x_parent.i])._M_right) ? {a: ((__x_parent.a[__x_parent.i])._M_right).a, i: ((__x_parent.a[__x_parent.i])._M_right).i} : null);
                  if (((__w.a[__w.i])._M_color === 0)) {
                     {
                      (__w.a[__w.i])._M_color = 1;
                      (__x_parent.a[__x_parent.i])._M_color = 0;
                      _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_((__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null), __root);
                      __w = (((__x_parent.a[__x_parent.i])._M_right) ? {a: ((__x_parent.a[__x_parent.i])._M_right).a, i: ((__x_parent.a[__x_parent.i])._M_right).i} : null);
                    }
                  }
                  if (((((__w.a[__w.i])._M_left === null) || ((((__w.a[__w.i])._M_left).a[((__w.a[__w.i])._M_left).i])._M_color === 1)) && (((__w.a[__w.i])._M_right === null) || ((((__w.a[__w.i])._M_right).a[((__w.a[__w.i])._M_right).i])._M_color === 1)))) {
                     {
                      (__w.a[__w.i])._M_color = 0;
                      __x = (__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null);
                      __x_parent = (((__x_parent.a[__x_parent.i])._M_parent) ? {a: ((__x_parent.a[__x_parent.i])._M_parent).a, i: ((__x_parent.a[__x_parent.i])._M_parent).i} : null);
                    }
                  }
                  else {
                     {
                      if ((((__w.a[__w.i])._M_right === null) || ((((__w.a[__w.i])._M_right).a[((__w.a[__w.i])._M_right).i])._M_color === 1))) {
                         {
                          (((__w.a[__w.i])._M_left).a[((__w.a[__w.i])._M_left).i])._M_color = 1;
                          (__w.a[__w.i])._M_color = 0;
                          _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_((__w ? {a: __w.a, i: __w.i} : null), __root);
                          __w = (((__x_parent.a[__x_parent.i])._M_right) ? {a: ((__x_parent.a[__x_parent.i])._M_right).a, i: ((__x_parent.a[__x_parent.i])._M_right).i} : null);
                        }
                      }
                      (__w.a[__w.i])._M_color = (__x_parent.a[__x_parent.i])._M_color;
                      (__x_parent.a[__x_parent.i])._M_color = 1;
                      if ((__w.a[__w.i])._M_right) {
                        (((__w.a[__w.i])._M_right).a[((__w.a[__w.i])._M_right).i])._M_color = 1;
                      }
                      _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_((__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null), __root);
                      break;
                    }
                  }
                }
              }
              else {
                 {
                  let __w = (((__x_parent.a[__x_parent.i])._M_left) ? {a: ((__x_parent.a[__x_parent.i])._M_left).a, i: ((__x_parent.a[__x_parent.i])._M_left).i} : null);
                  if (((__w.a[__w.i])._M_color === 0)) {
                     {
                      (__w.a[__w.i])._M_color = 1;
                      (__x_parent.a[__x_parent.i])._M_color = 0;
                      _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_((__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null), __root);
                      __w = (((__x_parent.a[__x_parent.i])._M_left) ? {a: ((__x_parent.a[__x_parent.i])._M_left).a, i: ((__x_parent.a[__x_parent.i])._M_left).i} : null);
                    }
                  }
                  if (((((__w.a[__w.i])._M_right === null) || ((((__w.a[__w.i])._M_right).a[((__w.a[__w.i])._M_right).i])._M_color === 1)) && (((__w.a[__w.i])._M_left === null) || ((((__w.a[__w.i])._M_left).a[((__w.a[__w.i])._M_left).i])._M_color === 1)))) {
                     {
                      (__w.a[__w.i])._M_color = 0;
                      __x = (__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null);
                      __x_parent = (((__x_parent.a[__x_parent.i])._M_parent) ? {a: ((__x_parent.a[__x_parent.i])._M_parent).a, i: ((__x_parent.a[__x_parent.i])._M_parent).i} : null);
                    }
                  }
                  else {
                     {
                      if ((((__w.a[__w.i])._M_left === null) || ((((__w.a[__w.i])._M_left).a[((__w.a[__w.i])._M_left).i])._M_color === 1))) {
                         {
                          (((__w.a[__w.i])._M_right).a[((__w.a[__w.i])._M_right).i])._M_color = 1;
                          (__w.a[__w.i])._M_color = 0;
                          _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_((__w ? {a: __w.a, i: __w.i} : null), __root);
                          __w = (((__x_parent.a[__x_parent.i])._M_left) ? {a: ((__x_parent.a[__x_parent.i])._M_left).a, i: ((__x_parent.a[__x_parent.i])._M_left).i} : null);
                        }
                      }
                      (__w.a[__w.i])._M_color = (__x_parent.a[__x_parent.i])._M_color;
                      (__x_parent.a[__x_parent.i])._M_color = 1;
                      if ((__w.a[__w.i])._M_left) {
                        (((__w.a[__w.i])._M_left).a[((__w.a[__w.i])._M_left).i])._M_color = 1;
                      }
                      _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_((__x_parent ? {a: __x_parent.a, i: __x_parent.i} : null), __root);
                      break;
                    }
                  }
                }
              }
            }
            if (__x) {
              (__x.a[__x.i])._M_color = 1;
            }
          }
        }
        return (__y ? {a: __y.a, i: __y.i} : null);
      }
      function main() {
        let $t73, $t74, $t75, $t76, $t77, $t78, $t79;
        let a = true;
        let b = false;
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 32, 37, 100, 10, 0], i: 0}, (((a && (!b))) | 0), (((a || b)) | 0), (((a !== b)) | 0));
        let st = {v: new _Z10$24class_3()};
        let c16 = {v: ((0) & 65535)};
        let c32 = {v: ((0) >>> 0)};
        let n = ((_Z8mbrtoc16PDsPKcmP10$24class_3((({a: c16, i: "v"}) ? {a: ({a: c16, i: "v"}).a, i: ({a: c16, i: "v"}).i} : null), {a: [65, 0], i: 0}, ((1) >>> 0), (({a: st, i: "v"}) ? {a: ({a: st, i: "v"}).a, i: ({a: st, i: "v"}).i} : null))) | 0);
        let m = ((_Z8mbrtoc32PDiPKcmP10$24class_3((({a: c32, i: "v"}) ? {a: ({a: c32, i: "v"}).a, i: ({a: c32, i: "v"}).i} : null), {a: [66, 0], i: 0}, ((1) >>> 0), (({a: st, i: "v"}) ? {a: ({a: st, i: "v"}).a, i: ({a: st, i: "v"}).i} : null))) | 0);
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 32, 37, 100, 32, 37, 100, 10, 0], i: 0}, n, ((c16.v) | 0), m, ((c32.v) | 0));
        let bad = ((_Z8mbrtoc16PDsPKcmP10$24class_3((({a: c16, i: "v"}) ? {a: ({a: c16, i: "v"}).a, i: ({a: c16, i: "v"}).i} : null), {a: [195, 0], i: 0}, ((1) >>> 0), (({a: st, i: "v"}) ? {a: ({a: st, i: "v"}).a, i: ({a: st, i: "v"}).i} : null))) | 0);
        _Z6printfPKcvz({a: [37, 100, 10, 0], i: 0}, bad);
        let out = [(((0) << 24) >> 24), (((0) << 24) >> 24), (((0) << 24) >> 24), (((0) << 24) >> 24)];
        let w = ((_Z8c16rtombPcDsP10$24class_3({a: out, i: 0}, ((122) & 65535), (({a: st, i: "v"}) ? {a: ({a: st, i: "v"}).a, i: ({a: st, i: "v"}).i} : null))) | 0);
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 10, 0], i: 0}, w, ((out[0]) | 0));
        let l = new _ZSt4listIiSt9allocatorIiEE();
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(l, {a: [1], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE10push_frontERKi.call(l, {a: [null], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE7reverseEv.call(l);
        let mp = new _ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE();
        for (let i = 0; (i < 20); ($t73 = i, i = (($t73 + 1) | 0), $t73)) {
          ($t74 = mp._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEEixERS4_({a: [(((((Math.imul(i, 7)) | 0)) % (11)) | 0)], i: 0}), $t74.a[$t74.i] = i);
        }
        _ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.prototype._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE5eraseERS4_.call(mp, {a: [3], i: 0});
        _Z6printfPKcvz({a: [37, 100, 32, 37, 100, 32, 37, 100, 32, 37, 100, 10, 0], i: 0}, ($t75 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5frontEv.call(l), $t75.a[$t75.i]), ((_ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.prototype._ZNKSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE4sizeEv.call(mp)) | 0), (($t77 = (($t76 = _ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.prototype._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE5beginEv.call(mp), $t76))._ZNKSt17_Rb_tree_iteratorISt4pairIKiiEEptEv(), $t77.a[$t77.i])).first$_ZSt4pairIKiiE, (($t79 = (($t78 = _ZSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE.prototype._ZNSt3mapIiiSt4lessIiESt9allocatorISt4pairIKiiEEE6rbeginEv.call(mp), $t78))._ZNKSt16reverse_iteratorISt17_Rb_tree_iteratorISt4pairIKiiEEEptEv(), $t79.a[$t79.i])).first$_ZSt4pairIKiiE);
        return 0;
      }
      function _ZSt23local_Rb_tree_incrementPSt18_Rb_tree_node_base(__x) {
        if (((__x.a[__x.i])._M_right !== null)) {
           {
            __x = (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
            while (((__x.a[__x.i])._M_left !== null)) {
              __x = (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
            }
          }
        }
        else {
           {
            let __y = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
            while ((__x === ((__y.a[__y.i])._M_right) || (__x && ((__y.a[__y.i])._M_right) && __x.a === ((__y.a[__y.i])._M_right).a && __x.i === ((__y.a[__y.i])._M_right).i))) {
               {
                __x = (__y ? {a: __y.a, i: __y.i} : null);
                __y = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
              }
            }
            if ((!(((__x.a[__x.i])._M_right) === __y || (((__x.a[__x.i])._M_right) && __y && ((__x.a[__x.i])._M_right).a === __y.a && ((__x.a[__x.i])._M_right).i === __y.i)))) {
              __x = (__y ? {a: __y.a, i: __y.i} : null);
            }
          }
        }
        return (__x ? {a: __x.a, i: __x.i} : null);
      }
      function _ZSt23local_Rb_tree_decrementPSt18_Rb_tree_node_base(__x) {
        if ((((__x.a[__x.i])._M_color === 0) && (((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent) === __x || (((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent) && __x && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent).a === __x.a && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_parent).i === __x.i)))) {
          __x = (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
        }
        else {
          if (((__x.a[__x.i])._M_left !== null)) {
             {
              let __y = (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
              while (((__y.a[__y.i])._M_right !== null)) {
                __y = (((__y.a[__y.i])._M_right) ? {a: ((__y.a[__y.i])._M_right).a, i: ((__y.a[__y.i])._M_right).i} : null);
              }
              __x = (__y ? {a: __y.a, i: __y.i} : null);
            }
          }
          else {
             {
              let __y = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
              while ((__x === ((__y.a[__y.i])._M_left) || (__x && ((__y.a[__y.i])._M_left) && __x.a === ((__y.a[__y.i])._M_left).a && __x.i === ((__y.a[__y.i])._M_left).i))) {
                 {
                  __x = (__y ? {a: __y.a, i: __y.i} : null);
                  __y = (((__y.a[__y.i])._M_parent) ? {a: ((__y.a[__y.i])._M_parent).a, i: ((__y.a[__y.i])._M_parent).i} : null);
                }
              }
              __x = (__y ? {a: __y.a, i: __y.i} : null);
            }
          }
        }
        return (__x ? {a: __x.a, i: __x.i} : null);
      }
      function _ZSt25local_Rb_tree_rotate_leftPSt18_Rb_tree_node_baseRS_(__x, __root) {
        let __y = (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
        (__x.a[__x.i])._M_right = (((__y.a[__y.i])._M_left) ? {a: ((__y.a[__y.i])._M_left).a, i: ((__y.a[__y.i])._M_left).i} : null);
        if (((__y.a[__y.i])._M_left !== null)) {
          (((__y.a[__y.i])._M_left).a[((__y.a[__y.i])._M_left).i])._M_parent = (__x ? {a: __x.a, i: __x.i} : null);
        }
        (__y.a[__y.i])._M_parent = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
        if ((__x === (__root.a[__root.i]) || (__x && (__root.a[__root.i]) && __x.a === (__root.a[__root.i]).a && __x.i === (__root.a[__root.i]).i))) {
          __root.a[__root.i] = (__y ? {a: __y.a, i: __y.i} : null);
        }
        else {
          if ((__x === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left) || (__x && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left) && __x.a === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left).a && __x.i === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left).i))) {
            (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left = (__y ? {a: __y.a, i: __y.i} : null);
          }
          else {
            (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right = (__y ? {a: __y.a, i: __y.i} : null);
          }
        }
        (__y.a[__y.i])._M_left = (__x ? {a: __x.a, i: __x.i} : null);
        (__x.a[__x.i])._M_parent = (__y ? {a: __y.a, i: __y.i} : null);
      }
      function _ZSt26local_Rb_tree_rotate_rightPSt18_Rb_tree_node_baseRS_(__x, __root) {
        let __y = (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
        (__x.a[__x.i])._M_left = (((__y.a[__y.i])._M_right) ? {a: ((__y.a[__y.i])._M_right).a, i: ((__y.a[__y.i])._M_right).i} : null);
        if (((__y.a[__y.i])._M_right !== null)) {
          (((__y.a[__y.i])._M_right).a[((__y.a[__y.i])._M_right).i])._M_parent = (__x ? {a: __x.a, i: __x.i} : null);
        }
        (__y.a[__y.i])._M_parent = (((__x.a[__x.i])._M_parent) ? {a: ((__x.a[__x.i])._M_parent).a, i: ((__x.a[__x.i])._M_parent).i} : null);
        if ((__x === (__root.a[__root.i]) || (__x && (__root.a[__root.i]) && __x.a === (__root.a[__root.i]).a && __x.i === (__root.a[__root.i]).i))) {
          __root.a[__root.i] = (__y ? {a: __y.a, i: __y.i} : null);
        }
        else {
          if ((__x === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right) || (__x && ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right) && __x.a === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right).a && __x.i === ((((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right).i))) {
            (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_right = (__y ? {a: __y.a, i: __y.i} : null);
          }
          else {
            (((__x.a[__x.i])._M_parent).a[((__x.a[__x.i])._M_parent).i])._M_left = (__y ? {a: __y.a, i: __y.i} : null);
          }
        }
        (__y.a[__y.i])._M_right = (__x ? {a: __x.a, i: __x.i} : null);
        (__x.a[__x.i])._M_parent = (__y ? {a: __y.a, i: __y.i} : null);
      }
      function _ZSt11__addressofISt4pairIKiiEEPS1_RS1_(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__t) {
        return __t;
      }
      function _ZSt7forwardISt5tupleIRKiEEOS2_S3_(__t) {
        return __t;
      }
      function _ZSt7forwardISt5tupleEOS_S0_(__t) {
        return __t;
      }
      function _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKiiEEEOS_S5_(__t) {
        return __t;
      }
      function _ZSt7forwardIRiES_S_(__t) {
        return __t;
      }
      function _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_(__a, __b) {
        let $t80, $t81, $t82, $t83, $t84, $t85;
        let __tmp = {v: ($t80 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__a), $t81 = ($t80 ? $t80.a[$t80.i] : null), $t81 && $t81.a !== undefined ? {a: $t81.a, i: $t81.i} : $t81)};
        __a.a[__a.i] = ($t82 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__b), $t83 = ($t82 ? $t82.a[$t82.i] : null), $t83 && $t83.a !== undefined ? {a: $t83.a, i: $t83.i} : $t83);
        __b.a[__b.i] = ($t84 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_({a: __tmp, i: "v"}), $t85 = ($t84 ? $t84.a[$t84.i] : null), $t85 && $t85.a !== undefined ? {a: $t85.a, i: $t85.i} : $t85);
      }
      function _ZSt4swapISt14_Rb_tree_colorEvRS_S0_(__a, __b) {
        let $t86, $t87, $t88;
        let __tmp = {v: ($t86 = _ZSt4moveISt14_Rb_tree_colorEOS_S0_(__a), $t86.a[$t86.i])};
        __a.a[__a.i] = ($t87 = _ZSt4moveISt14_Rb_tree_colorEOS_S0_(__b), $t87.a[$t87.i]);
        __b.a[__b.i] = ($t88 = _ZSt4moveISt14_Rb_tree_colorEOS_S0_({a: __tmp, i: "v"}), $t88.a[$t88.i]);
      }
      function _ZSt7declvalIRPSt18_Rb_tree_node_baseES_v() {
        return _ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE._ZNSt19__declval_protectorIRPSt18_Rb_tree_node_baseE10__delegateEv();
      }
      function _ZSt7declvalIPSt18_Rb_tree_node_baseEOS_v() {
        return _ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE._ZNSt19__declval_protectorIPSt18_Rb_tree_node_baseE10__delegateEv();
      }
      function _ZSt7declvalIRSt17_Rb_tree_iteratorISt4pairIKiiEEES_v() {
        return _ZSt19__declval_protectorIRSt17_Rb_tree_iteratorISt4pairIKiiEEE._ZNSt19__declval_protectorIRSt17_Rb_tree_iteratorISt4pairIKiiEEE10__delegateEv();
      }
      function _ZSt7declvalISt17_Rb_tree_iteratorISt4pairIKiiEEEOS3_v() {
        return _ZSt19__declval_protectorISt17_Rb_tree_iteratorISt4pairIKiiEEE._ZNSt19__declval_protectorISt17_Rb_tree_iteratorISt4pairIKiiEEE10__delegateEv();
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt7declvalIPSt13_Rb_tree_nodeISt4pairIKiiEEEOS_v() {
        return _ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKiiEEE._ZNSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKiiEEE10__delegateEv();
      }
      function _ZSt7declvalISt21piecewise_construct_tEOS_v() {
        return _ZSt19__declval_protectorISt21piecewise_construct_tE._ZNSt19__declval_protectorISt21piecewise_construct_tE10__delegateEv();
      }
      function _ZSt7declvalISt5tupleIRKiEEOS2_v() {
        return _ZSt19__declval_protectorISt5tupleIRKiEE._ZNSt19__declval_protectorISt5tupleIRKiEE10__delegateEv();
      }
      function _ZSt7declvalISt5tupleEOS_v() {
        return _ZSt19__declval_protectorISt5tupleE._ZNSt19__declval_protectorISt5tupleE10__delegateEv();
      }
      function _ZSt7declvalIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEEOS_v() {
        return _ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE._ZNSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKiiEEEE10__delegateEv();
      }
      function _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__t) {
        return __t;
      }
      function _ZSt4moveISt14_Rb_tree_colorEOS_S0_(__t) {
        return __t;
      }
      function _ZSt3getILi0ERKiERiRSt5tupleIS_E(__t) {
        return _ZSt12__get_helperILi0ERKiERiRSt11_Tuple_implILi0ES_E(__t);
      }
      function _ZSt12__get_helperILi0ERKiERiRSt11_Tuple_implILi0ES_E(__t) {
        return _ZSt11_Tuple_implILi0ERKiE._ZNSt11_Tuple_implILi0ERKiE7_M_headERS2_(__t);
      }
      let _ZSt19piecewise_construct = {v: new _ZSt21piecewise_construct_t()};
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
