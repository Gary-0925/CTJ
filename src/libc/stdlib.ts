// <stdlib.h>: conversions, memory, sorting, searching and the random numbers.
// Memory is not sized: malloc gives an empty block, which grows as it is written.
namespace CTJ {
  // $L is the object of helpers that the generated program declares once.
  declare const $L: any;
  // $io collects the streams of the run; the bodies that write to them use it.
  declare const $io: any;

  // Reads an integer at the pointer s: skips white space, takes the sign and
  // the base prefix, and collects the digits.  The result is the magnitude,
  // the sign, and the offset just past the digits (0 when there are none).
  Object.assign(LIBC_HELPERS, {
    scanInt: (s: any, base: number) => {
      let k = 0;
      while ([32, 9, 10, 11, 12, 13].indexOf($L.get(s, k)) >= 0) k++;
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
      } else if (base === 0) base = $L.get(s, k) === 48 ? 8 : 10;
      const B = BigInt(base);
      let m = BigInt(0);
      let n = 0;
      for (;;) {
        const d = $L.digitv($L.get(s, k));
        if (d < 0 || d >= base) break;
        m = m * B + BigInt(d);
        k++;
        n++;
      }
      return { m: m, neg: neg, end: n > 0 ? k : 0 };
    },

    // An integer conversion with bits bits, saturating at the range and setting errno to ERANGE when it does.
    strtoint: (s: any, endp: any, base: number, bits: number, signed: boolean) => {
      const r: { m: bigint; neg: boolean; end: number } = $L.scanInt(s, base);
      const one = BigInt(1);
      let v: any;
      let over = false;
      if (signed) {
        const top = one << BigInt(bits - 1);
        if (r.neg) {
          over = r.m > top;
          v = over ? -top : -r.m;
        } else {
          over = r.m > top - one;
          v = over ? top - one : r.m;
        }
      } else {
        const top = (one << BigInt(bits)) - one;
        over = r.m > top;
        if (over) v = top;
        else v = r.neg ? BigInt.asUintN(bits, -r.m) : r.m;
      }
      if (over) $L.errbox.a[$L.errbox.i] = 34;
      if (endp !== null) $L.put(endp, 0, { a: s.a, i: s.i + r.end });
      return v;
    },

    // A floating conversion; sets *endp when endp is not NULL.
    scanFloat: (s: any, endp: any) => {
      const text = $L.str(s);
      const m = /^[ \t\n\v\f\r]*([+-]?)(?:(inf(?:inity)?)|(nan)|((?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?))/i.exec(text);
      if (m === null) {
        if (endp !== null) $L.put(endp, 0, s);
        return 0;
      }
      let v: number;
      if (m[2] !== undefined) v = m[1] === "-" ? -Infinity : Infinity;
      else if (m[3] !== undefined) v = NaN;
      else v = Number(m[1] + m[4]);
      if (endp !== null) $L.put(endp, 0, { a: s.a, i: s.i + m[0].length });
      return v;
    },
  });

  libcDef(["atoi"], (a: any[]) => Number($L.strtoint(a[0], null, 10, 32, true)));
  libcDef(["atol"], (a: any[]) => Number($L.strtoint(a[0], null, 10, 32, true)));
  libcDef(["atoll"], (a: any[]) => $L.strtoint(a[0], null, 10, 64, true));
  libcDef(["atof"], (a: any[]) => $L.scanFloat(a[0], null));
  libcDef(["strtol", "__isoc23_strtol"], (a: any[]) => Number($L.strtoint(a[0], a[1], a[2], 32, true)));
  libcDef(["strtoul", "__isoc23_strtoul"], (a: any[]) => Number($L.strtoint(a[0], a[1], a[2], 32, false)));
  libcDef(["strtoll", "__isoc23_strtoll", "strtoimax"], (a: any[]) => $L.strtoint(a[0], a[1], a[2], 64, true));
  libcDef(["strtoull", "__isoc23_strtoull", "strtoumax"], (a: any[]) => $L.strtoint(a[0], a[1], a[2], 64, false));
  libcDef(["strtod"], (a: any[]) => $L.scanFloat(a[0], a[1]));
  libcDef(["strtof"], (a: any[]) => Math.fround($L.scanFloat(a[0], a[1])));
  libcDef(["strtold"], (a: any[]) => $L.scanFloat(a[0], a[1]));

  libcDef(["abs"], (a: any[]) => (a[0] < 0 ? -a[0] : a[0]) | 0);
  libcDef(["labs"], (a: any[]) => (a[0] < 0 ? -a[0] : a[0]) | 0);
  libcDef(["llabs"], (a: any[]) => BigInt.asIntN(64, a[0] < 0 ? -a[0] : a[0]));

  // Memory: a block is an array, and the blocks never need to be freed.
  libcDef(["malloc"], () => ({ a: [], i: 0 }));
  libcDef(["calloc"], () => ({ a: [], i: 0 }));
  libcDef(["realloc"], (a: any[]) => (a[0] !== null ? a[0] : { a: [], i: 0 }));
  libcDef(["free"], () => undefined);

  // Ending the run: the exit code is thrown, as the header's exit does.
  libcDef(["exit", "_Exit", "_exit"], (a: any[]) => {
    throw { $exit: a[0] | 0 };
  });
  libcDef(["abort"], () => {
    throw { $exit: 134 };
  });

  // Time: the wall clock in seconds, and the processor time in CLOCKS_PER_SEC units of microseconds.
  libcDef(["time"], (a: any[]) => {
    const t = Math.floor(Date.now() / 1000);
    if (a[0] !== null) $L.put(a[0], 0, t);
    return t;
  });
  libcDef(["clock"], () => Math.floor(Date.now() * 1000) % 2147483647);
  libcDef(["difftime"], (a: any[]) => a[0] - a[1]);

  // The C locale is the only one: setlocale names it, and refuses any other.
  libcDef(["setlocale"], (a: any[]) => {
    const name = a[1] === null ? "C" : $L.str(a[1]);
    return name === "" || name === "C" || name === "POSIX" ? $L.box("C") : null;
  });

  // A failed assert: the message goes to stderr, and the run ends as abort does.
  libcDef(["__assert_fail"], (a: any[]) => {
    $io.write(2, "ctj: " + $L.str(a[1]) + ":" + a[2] + ": " + $L.str(a[3]) + ": Assertion `" + $L.str(a[0]) + "' failed.\n");
    throw { $exit: 134 };
  });

  libcDef(["getenv"], () => null);
  libcDef(["__errno_location"], () => $L.errbox);

  // The random numbers of glibc's random().
  libcDef(["rand"], () => $L.rand());
  libcDef(["random"], () => $L.rand());
  libcDef(["srand"], (a: any[]) => $L.srand(a[0]));
  libcDef(["srandom"], (a: any[]) => $L.srand(a[0]));

  // The sorting is glibc's merge sort, so the comparisons are made in the same order.
  // The comparator gets pointers into the array, which keeps its values until the end.
  libcDef(["qsort"], (a: any[]) => {
    const base = a[0];
    const cmp = a[3];
    const at = (k: number) => ({ a: base.a, i: base.i + k });
    const sort = (idx: number[]): number[] => {
      if (idx.length <= 1) return idx;
      const n1 = idx.length >> 1;
      const left = sort(idx.slice(0, n1));
      const right = sort(idx.slice(n1));
      const out: number[] = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (cmp(at(left[i]), at(right[j])) <= 0) out.push(left[i++]);
        else out.push(right[j++]);
      }
      while (i < left.length) out.push(left[i++]);
      while (j < right.length) out.push(right[j++]);
      return out;
    };
    const idx: number[] = [];
    for (let k = 0; k < a[1]; k++) idx.push(k);
    const order = sort(idx);
    const vals = order.map(k => $L.get(base, k));
    for (let k = 0; k < vals.length; k++) base.a[base.i + k] = vals[k];
  });

  // The binary search of glibc, which keeps the half-open range [l, u).
  libcDef(["bsearch"], (a: any[]) => {
    const key = a[0];
    const base = a[1];
    const cmp = a[4];
    let l = 0;
    let u = a[2];
    while (l < u) {
      const idx = (l + u) >> 1;
      const c = cmp(key, { a: base.a, i: base.i + idx });
      if (c < 0) u = idx;
      else if (c > 0) l = idx + 1;
      else return { a: base.a, i: base.i + idx };
    }
    return null;
  });
}
