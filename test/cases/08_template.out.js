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
      class _Z5StackIiLi8EE {
        data$_Z5StackIiLi8EE;
        top$_Z5StackIiLi8EE;
        constructor(...$a) {
          this.__init__Z5StackIiLi8EE(...$a);
        }
        __init__Z5StackIiLi8EE(...$a) {
          this.data$_Z5StackIiLi8EE = new Array(8).fill(0);
          this.top$_Z5StackIiLi8EE = 0;
        }
        __dtor() {
        }
        _ZN5StackIiLi8EE4pushEi(v) {
          let $t0;
          this.data$_Z5StackIiLi8EE[($t0 = this.top$_Z5StackIiLi8EE, this.top$_Z5StackIiLi8EE = (($t0 + 1) | 0), $t0)] = v;
        }
        _ZN5StackIiLi8EE3popEv() {
          return this.data$_Z5StackIiLi8EE[(this.top$_Z5StackIiLi8EE = ((this.top$_Z5StackIiLi8EE - 1) | 0))];
        }
        _ZNK5StackIiLi8EE4sizeEv() {
          return this.top$_Z5StackIiLi8EE;
        }
      }
      class _Z4PairIiE {
        a$_Z4PairIiE;
        b$_Z4PairIiE;
        constructor(...$a) {
          this.__init__Z4PairIiE(...$a);
        }
        __init__Z4PairIiE(...$a) {
          this.a$_Z4PairIiE = $a[0];
          this.b$_Z4PairIiE = $a[1];
        }
        __dtor() {
        }
        _ZN4PairIiE3sumEv() {
          return (((this.a$_Z4PairIiE) + (this.b$_Z4PairIiE)) | 0);
        }
      }
      function main() {
        (console.log((_Z5maxOfIiEiii(3, 7))));
        (console.log((_Z5maxOfIdEddd(2.5, 1.5))));
        let s = new _Z5StackIiLi8EE();
        _Z5StackIiLi8EE.prototype._ZN5StackIiLi8EE4pushEi.call(s, 1);
        _Z5StackIiLi8EE.prototype._ZN5StackIiLi8EE4pushEi.call(s, 2);
        _Z5StackIiLi8EE.prototype._ZN5StackIiLi8EE4pushEi.call(s, 3);
        (console.log((_Z5StackIiLi8EE.prototype._ZN5StackIiLi8EE3popEv.call(s))));
        (console.log((_Z5StackIiLi8EE.prototype._ZNK5StackIiLi8EE4sizeEv.call(s))));
        let p = new _Z4PairIiE(4, 5);
        (console.log((_Z4PairIiE.prototype._ZN4PairIiE3sumEv.call(p))));
        return 0;
      }
      function _Z5maxOfIiEiii(a, b) {
        return ((a > b) ? ((a) | 0) : ((b) | 0));
      }
      function _Z5maxOfIdEddd(a, b) {
        return ((a > b) ? a : b);
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
