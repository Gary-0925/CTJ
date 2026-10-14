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
      function _Z3addii(a, b) {
        return (((a) + (b)) | 0);
      }
      function main() {
        let x = 40;
        let y = _Z3addii(x, 2);
        (console.log((y)));
        (console.log((((Math.trunc((7) / (2))) | 0))));
        (console.log(((((7) % (3)) | 0))));
        (console.log(((7 / 2))));
        (console.log(((((3 < 4) && (5 > 6)) ? ((1) | 0) : ((0) | 0)))));
        let t = ((1 > 2) ? ((10) | 0) : ((20) | 0));
        (console.log((t)));
        let c = ((1, 2), 3);
        (console.log((c)));
        let u = 4000000000;
        (console.log((((u) >>> (1)))));
        (console.log(((!(0)))));
        (console.log((((~(0)) | 0))));
        let p = 7;
        let q = 8;
        (console.log(((((p) + (q)) | 0))));
        let r = 0;
        let s = 0;
        r = 1;
        s = 2;
        (console.log(((((r) + (s)) | 0))));
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
