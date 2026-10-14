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
      function _Z5scaleRii(v, k) {
        v.a[v.i] = ((Math.imul(v.a[v.i], k)) | 0);
      }
      function _Z4getiRi(x) {
        return x.a[x.i];
      }
      function main() {
        let x = {v: 1};
        let y = {v: 2};
        _Z5swapvIiEvRiS_({a: x, i: "v"}, {a: y, i: "v"});
        (console.log((x.v), (y.v)));
        _Z5scaleRii({a: x, i: "v"}, 10);
        (console.log((x.v)));
        (console.log((_Z4getiRi({a: y, i: "v"}))));
        return 0;
      }
      function _Z5swapvIiEvRiS_(a, b) {
        let t = a.a[a.i];
        a.a[a.i] = b.a[b.i];
        b.a[b.i] = t;
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
