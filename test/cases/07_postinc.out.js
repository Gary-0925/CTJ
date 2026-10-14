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
        let $t0, $t1, $t2;
        let a = [10, 20, 30, 40];
        let i = 0;
        (console.log((a[($t0 = i, i = (($t0 + 1) | 0), $t0)])));
        (console.log((a[i])));
        (console.log((a[(i = ((i + 1) | 0))])));
        let x = 5;
        (console.log((($t1 = x, x = (($t1 + 1) | 0), $t1))));
        (console.log((x)));
        (console.log((($t2 = x, x = (($t2 - 1) | 0), $t2))));
        (console.log((x)));
        let p = {a: a, i: 0};
        (console.log((p.a[p.i++])));
        (console.log((p.a[p.i])));
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
