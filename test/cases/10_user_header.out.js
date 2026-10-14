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
      class _Z7Counter {
        n;
        constructor(...$a) {
          this.__init__Z7Counter(...$a);
        }
        __init__Z7Counter(...$a) {
          this.n = 0;
        }
        __dtor() {
        }
        _ZN7Counter4bumpEv() {
          let $t0;
          ($t0 = this.n, this.n = (($t0 + 1) | 0), $t0);
        }
        _ZNK7Counter5valueEv() {
          return this.n;
        }
      }
      function _Z5twicei(x) {
        return ((Math.imul(x, 2)) | 0);
      }
      function main() {
        (console.log((_Z5twicei(21))));
        let c = new _Z7Counter();
        _Z7Counter.prototype._ZN7Counter4bumpEv.call(c);
        _Z7Counter.prototype._ZN7Counter4bumpEv.call(c);
        (console.log((_Z7Counter.prototype._ZNK7Counter5valueEv.call(c))));
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
