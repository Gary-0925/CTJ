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
      function main() {
        let $t0;
        let a = [1, 2, 3];
        let sum = 0;
        for (let i = 0; (i < 3); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
          sum = (((((sum) + (a[i])) | 0)) | 0);
        }
        (console.log((sum)));
        let b = [[1, 2, 3], [4, 5, 6]];
        (console.log(((b[1])[2])));
        let s = {a: [104, 101, 108, 108, 111, 0], i: 0};
        (console.log((s.a[s.i])));
        (console.log((s.a[s.i + (4)])));
        (console.log((s.a[s.i + (5)])));
        let buf = [97, 98, 99, 0];
        buf[1] = 88;
        (console.log((buf[1])));
        (console.log((4)));
        (console.log((12)));
        (console.log((4)));
        (console.log((8)));
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
