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
      function _Z3incRi(r) {
        let $t0;
        ($t0 = r.a[r.i], r.a[r.i] = (($t0 + 1) | 0), $t0);
      }
      function _Z4pickbRiS_(b, a, c) {
        return (b ? a : c);
      }
      function main() {
        let $t1, $t2;
        let x = {v: 5};
        let r = {a: x, i: "v"};
        r.a[r.i] = 6;
        (console.log((x.v)));
        _Z3incRi({a: x, i: "v"});
        (console.log((x.v)));
        let y = {v: 100};
        ($t1 = _Z4pickbRiS_(true, {a: x, i: "v"}, {a: y, i: "v"}), $t1.a[$t1.i] = 50);
        (console.log((x.v)));
        ($t2 = _Z4pickbRiS_(false, {a: x, i: "v"}, {a: y, i: "v"}), $t2.a[$t2.i] = 60);
        (console.log((y.v)));
        let cr = {a: x, i: "v"};
        (console.log((cr.a[cr.i])));
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
