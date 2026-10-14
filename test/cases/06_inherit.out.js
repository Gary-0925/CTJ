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
      class _Z4Base {
        v;
        constructor(...$a) {
          this.__init__Z4Base(...$a);
        }
        __init__Z4Base(...$a) {
          if ($a.length >= 0 && $a.length <= 0) {
            this.v = 1;
          }
          else if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
            this.v = $a[0];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZN4Base3getEv() {
          return this.v;
        }
      }
      class _Z7Derived extends _Z4Base {
        w;
        constructor(...$a) {
          super(...[10]);
          this.__init__Z7Derived(...$a);
        }
        __init__Z7Derived(...$a) {
          this.w = 20;
        }
        __dtor() {
          _Z4Base.prototype.__dtor.call(this);
        }
        _ZN4Base3getEv() {
          return (((this.v) + (this.w)) | 0);
        }
      }
      function _Z3useR4Base(b) {
        return (b.a[b.i])._ZN4Base3getEv();
      }
      function main() {
        let $t0;
        let d = {v: new _Z7Derived()};
        (console.log((d.v._ZN4Base3getEv())));
        let p = ($t0 = {a: [new _Z7Derived()], i: 0}, $t0 ? {a: $t0.a, i: $t0.i} : null);
        (console.log(((p.a[p.i])._ZN4Base3getEv())));
        (console.log((_Z3useR4Base({a: d, i: "v"}))));
        let b = {v: new _Z4Base()};
        (console.log((_Z3useR4Base({a: b, i: "v"}))));
        _Z4Base.prototype._ZN4Base3getEv.call(d.v);
        (console.log((_Z4Base.prototype._ZN4Base3getEv.call(d.v))));
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
