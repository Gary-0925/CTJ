// Helpers shared by the library bodies.  Each one is serialized into the $L
// object of the generated program, so it may only refer to $L and to globals.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;

  Object.assign(LIBC_HELPERS, {
    // The element k places after the pointer p; past the end, 0.  A pointer to a
    // scalar variable has a name for its index, and then k is 0.
    get: (p: any, k: number) => {
      const a = p.a;
      const j = typeof p.i === "number" ? p.i + k : p.i;
      if (typeof a === "string") {
        const c = a.charCodeAt(j);
        return c === c ? c : 0;
      }
      const v = a[j];
      return v === undefined ? 0 : v;
    },

    // Stores v at the element k places after the pointer p.
    put: (p: any, k: number, v: any) => {
      p.a[typeof p.i === "number" ? p.i + k : p.i] = v;
    },

    // The bytes of the C string at p, up to its terminating 0.
    str: (p: any) => {
      let s = "";
      for (let k = 0; ; k++) {
        const c = $L.get(p, k) & 255;
        if (c === 0) return s;
        s += String.fromCharCode(c);
      }
    },

    // A new C string holding the characters of s, with its terminating 0.
    box: (s: string) => {
      const a: number[] = [];
      for (let k = 0; k < s.length; k++) a.push(s.charCodeAt(k) & 255);
      a.push(0);
      return { a: a, i: 0 };
    },

    // The value of a digit or letter in bases up to 36; -1 for anything else.
    digitv: (c: number) => {
      if (c >= 48 && c <= 57) return c - 48;
      if (c >= 97 && c <= 122) return c - 87;
      if (c >= 65 && c <= 90) return c - 55;
      return -1;
    },

    // Whether the character c is one of the characters of the C string set.
    inSet: (c: number, set: any) => {
      for (let k = 0; ; k++) {
        const d = $L.get(set, k);
        if (d === 0) return false;
        if (d === c) return true;
      }
    },

    // The character class test of the C locale: 1 when c has one of the bits m.
    isc: (c: number, m: number) => (c >= -128 && c <= 255 && ($L.ctb[c + 128] & m) !== 0 ? 1 : 0),

    // Sets up the state that a fresh run starts from: errno, the ctype tables
    // of the C locale, glibc's random() state for seed 1, and no strtok position.
    init: () => {
      const B: number[] = new Array(384).fill(0);
      const L: number[] = new Array(384).fill(0);
      const U: number[] = new Array(384).fill(0);
      for (let c = -128; c < 256; c++) {
        const k = c + 128;
        L[k] = c;
        U[k] = c;
        if (c < 0 || c > 127) continue;
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
        if (upper) L[k] = c + 32;
        if (lower) U[k] = c - 32;
      }
      $L.ctb = B;
      $L.ctl = L;
      $L.ctu = U;
      $L.errbox = { a: [0], i: 0 };
      $L.tokbox = { a: [null], i: 0 };
      $L.srand(1);
    },

    // glibc's random(): the additive feedback generator of degree 31, with the
    // state seeded by srandom.
    srand: (seed: number) => {
      // glibc keeps the seed in an int32_t, so a large seed is negative here.
      let word = seed | 0;
      if (word === 0) word = 1;
      const r: number[] = new Array(31);
      r[0] = word;
      for (let i = 1; i < 31; i++) {
        const hi = Math.trunc(word / 127773);
        const lo = word % 127773;
        word = 16807 * lo - 2836 * hi;
        if (word < 0) word += 2147483647;
        r[i] = word >>> 0;
      }
      $L.rnd = r;
      $L.ri = 3;
      $L.rj = 0;
      for (let i = 0; i < 310; i++) $L.rand();
    },

    rand: () => {
      const r = $L.rnd;
      r[$L.ri] = (r[$L.ri] + r[$L.rj]) >>> 0;
      const v = r[$L.ri] >>> 1;
      $L.ri = ($L.ri + 1) % 31;
      $L.rj = ($L.rj + 1) % 31;
      return v;
    },

    // Round to the nearest integer, ties to even (rint, nearbyint).
    rint: (x: number) => {
      if (!isFinite(x)) return x;
      const f = Math.floor(x);
      const d = x - f;
      const r = d < 0.5 ? f : d > 0.5 ? f + 1 : f % 2 === 0 ? f : f + 1;
      return r === 0 && (x < 0 || Object.is(x, -0)) ? -0 : r;
    },

    // Round half away from zero (round, lround).
    round: (x: number) => {
      if (!isFinite(x)) return x;
      const t = Math.trunc(x);
      const r = Math.abs(x - t) >= 0.5 ? t + Math.sign(x) : t;
      return r === 0 && (x < 0 || Object.is(x, -0)) ? -0 : r;
    },

    pow: (x: number, y: number) => {
      if (x === 1 || y === 0) return 1;
      if (x === -1 && (y === Infinity || y === -Infinity)) return 1;
      return Math.pow(x, y);
    },

    fmax: (x: number, y: number) => (x !== x ? y : y !== y ? x : Math.max(x, y)),

    fmin: (x: number, y: number) => (x !== x ? y : y !== y ? x : Math.min(x, y)),

    copysign: (x: number, y: number) => {
      const neg = y < 0 || (y === 0 && 1 / y < 0);
      const ax = Math.abs(x);
      return neg ? -ax : ax;
    },

    // The next representable value after x in the direction of y.
    nextafter: (x: number, y: number) => {
      if (x !== x || y !== y) return NaN;
      if (x === y) return y;
      if (x === 0) return y > 0 ? 5e-324 : -5e-324;
      const dv = new DataView(new ArrayBuffer(8));
      dv.setFloat64(0, x);
      const bits = dv.getBigUint64(0);
      const away = y > x === x > 0;
      dv.setBigUint64(0, away ? bits + BigInt(1) : bits - BigInt(1));
      return dv.getFloat64(0);
    },

    // x times 2 to the power n, for an integer n.
    scalbn: (x: number, n: number) => {
      if (!isFinite(x) || x === 0) return x;
      n = Math.trunc(n);
      while (n > 1000) {
        x *= Math.pow(2, 1000);
        n -= 1000;
        if (!isFinite(x)) return x;
      }
      while (n < -1000) {
        x *= Math.pow(2, -1000);
        n += 1000;
        if (x === 0) return x;
      }
      return x * Math.pow(2, n);
    },

    // The exponent of x: floor(log2(|x|)), exact also for subnormal numbers.
    ilogb: (x: number) => {
      if (x !== x || x === 0) return -2147483648;
      if (!isFinite(x)) return 2147483647;
      let ax = Math.abs(x);
      let k = 0;
      while (ax < 2.2250738585072014e-308) {
        ax *= 4503599627370496;
        k -= 52;
      }
      let r = Math.floor(Math.log2(ax));
      if (Math.pow(2, r) > ax) r--;
      else if (Math.pow(2, r + 1) <= ax) r++;
      return r + k;
    },

    logb: (x: number) => {
      if (x !== x) return x;
      if (x === 0) return -Infinity;
      if (!isFinite(x)) return Infinity;
      return $L.ilogb(x);
    },

    // The fraction in [0.5, 1) and the exponent, so that x = fraction * 2^exponent.
    frexp: (x: number, p: any) => {
      if (x === 0 || !isFinite(x)) {
        $L.put(p, 0, 0);
        return x;
      }
      const e = $L.ilogb(x) + 1;
      $L.put(p, 0, e);
      return $L.scalbn(x, -e);
    },

    // The integral part (stored through ip) and the fractional part of x.
    modf: (x: number, ip: any) => {
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

    // The exact value of a finite double, as an integer m and an exponent e with x = m * 2^e.
    decompose: (x: number) => {
      const dv = new DataView(new ArrayBuffer(8));
      dv.setFloat64(0, x);
      const hi = dv.getUint32(0);
      const lo = dv.getUint32(4);
      const biased = (hi >>> 20) & 0x7ff;
      let m = (BigInt(hi & 0xfffff) << BigInt(32)) | BigInt(lo);
      let e = biased - 1075;
      if (biased === 0) e = -1074;
      else m = m | (BigInt(1) << BigInt(52));
      if (hi >>> 31) m = -m;
      return { m: m, e: e };
    },

    // The double nearest to m * 2^e, for an integer m, with ties to even.
    roundBig: (m: any, e: number) => {
      const neg = m < BigInt(0);
      let a = neg ? -m : m;
      let bits = a.toString(2).length;
      if (bits > 53) {
        const shift = bits - 53;
        const sb = BigInt(shift);
        let q = a >> sb;
        const rem = a - (q << sb);
        const half = BigInt(1) << (sb - BigInt(1));
        if (rem > half || (rem === half && (q & BigInt(1)) === BigInt(1))) q = q + BigInt(1);
        a = q;
        e += shift;
      }
      const r = $L.scalbn(Number(a), e);
      return neg ? -r : r;
    },

    // x * y + z with a single rounding, as C's fma gives it.
    fma: (x: number, y: number, z: number) => {
      if (!isFinite(x) || !isFinite(y) || !isFinite(z) || x === 0 || y === 0) return x * y + z;
      const p: { m: bigint; e: number } = $L.decompose(x);
      const q: { m: bigint; e: number } = $L.decompose(y);
      const w: { m: bigint; e: number } = $L.decompose(z);
      if (z === 0) return $L.roundBig(p.m * q.m, p.e + q.e);
      const ep = p.e + q.e;
      const e = Math.min(ep, w.e);
      const sum = ((p.m * q.m) << BigInt(ep - e)) + (w.m << BigInt(w.e - e));
      if (sum === BigInt(0)) return x * y + z;
      return $L.roundBig(sum, e);
    },

    // The IEEE remainder: x - n * y with n the integer nearest to x / y.
    remainder: (x: number, y: number) => {
      if (x !== x || y !== y || !isFinite(x) || y === 0) return NaN;
      if (!isFinite(y)) return x;
      const ay = Math.abs(y);
      let r = x % ay;
      if (r === 0) return x < 0 || Object.is(x, -0) ? -0 : 0;
      const ar = Math.abs(r);
      if (ar * 2 > ay || (ar * 2 === ay && ((x - r) / ay) % 2 !== 0)) r -= r < 0 ? -ay : ay;
      return r;
    },
  });
}
