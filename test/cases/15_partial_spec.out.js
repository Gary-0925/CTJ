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
      class _Z5Twice {
        constructor(...$a) {
          this.__init__Z5Twice(...$a);
        }
        __init__Z5Twice(...$a) {
        }
        __dtor() {
        }
        _ZN5TwiceclEi(x) {
          return ((Math.imul(x, 2)) | 0);
        }
      }
      class _Z3BoxIcE {
        v$_Z3BoxIcE;
        constructor(...$a) {
          this.__init__Z3BoxIcE(...$a);
        }
        __init__Z3BoxIcE(...$a) {
          this.v$_Z3BoxIcE = $a[0];
        }
        __dtor() {
        }
        _ZN3BoxIcE3getEv() {
          return this.v$_Z3BoxIcE;
        }
      }
      class _Z4SameIiiE {
        __init__Z4SameIiiE(...$a) { }
        __dtor() {
        }
      }
      class _Z4SameIicE {
        __init__Z4SameIicE(...$a) { }
        __dtor() {
        }
      }
      function main() {
        let t = new _Z5Twice();
        let c = new _Z3BoxIcE(65);
        (console.log((1), (0), (t._ZN5TwiceclEi(21)), (((_Z3BoxIcE.prototype._ZN3BoxIcE3getEv.call(c)) | 0))));
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
