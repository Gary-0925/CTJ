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
      class _ZSt14numeric_limitsIiE {
        constructor(...$a) {
          this.__init__ZSt14numeric_limitsIiE(...$a);
        }
        __init__ZSt14numeric_limitsIiE(...$a) {
        }
        __dtor() {
        }
        static _ZNSt14numeric_limitsIiE3maxEv() {
          return 2147483647;
        }
        static is_specialized = 1;
        static digits = 31;
        static digits10 = 9;
        static max_digits10 = 0;
        static is_signed = 1;
        static is_integer = 1;
        static is_exact = 1;
        static radix = 2;
        static min_exponent = 0;
        static min_exponent10 = 0;
        static max_exponent = 0;
        static max_exponent10 = 0;
        static has_infinity = 0;
        static has_quiet_NaN = 0;
        static has_signaling_NaN = 0;
        static has_denorm = 0;
        static has_denorm_loss = 0;
        static is_iec559 = 0;
        static is_bounded = 1;
        static is_modulo = 0;
        static traps = 1;
        static tinyness_before = 0;
        static round_style = 0;
      }
      function _Z6strlenPKc(s) {
        let $t0;
        let n = ((0) >>> 0);
        while ((s.a[s.i + (n)] !== 0)) {
          ($t0 = n, n = (($t0 + 1) >>> 0), $t0);
        }
        return n;
      }
      function _Z6strcmpPKcS_(a, b) {
        let $t1;
        let i = ((0) >>> 0);
        while (((a.a[a.i + (i)] !== 0) && (a.a[a.i + (i)] === b.a[b.i + (i)]))) {
          ($t1 = i, i = (($t1 + 1) >>> 0), $t1);
        }
        if ((a.a[a.i + (i)] === b.a[b.i + (i)])) {
          return 0;
        }
        return ((((a.a[a.i + (i)]) & 255) < ((b.a[b.i + (i)]) & 255)) ? ((((-(1)) | 0)) | 0) : ((1) | 0));
      }
      function _Z6strcpyPcPKc(dst, src) {
        let $t2;
        let i = ((0) >>> 0);
        while ((src.a[src.i + (i)] !== 0)) {
           {
            dst.a[dst.i + (i)] = src.a[src.i + (i)];
            ($t2 = i, i = (($t2 + 1) >>> 0), $t2);
          }
        }
        dst.a[dst.i + (i)] = 0;
        return (dst ? {a: dst.a, i: dst.i} : null);
      }
      function main() {
        let buf = new Array(16).fill(0);
        _Z6strcpyPcPKc({a: buf, i: 0}, {a: [104, 101, 108, 108, 111, 0], i: 0});
        (console.log((((_Z6strlenPKc({a: buf, i: 0})) | 0))));
        (console.log((_Z6strcmpPKcS_({a: buf, i: 0}, {a: [104, 101, 108, 108, 111, 0], i: 0}))));
        (console.log((2147483647)));
        (console.log((_ZSt14numeric_limitsIiE._ZNSt14numeric_limitsIiE3maxEv())));
        return 0;
      }
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
