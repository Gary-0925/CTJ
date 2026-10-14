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
      class _Z5Point {
        x;
        y;
        constructor(...$a) {
          this.__init__Z5Point(...$a);
        }
        __init__Z5Point(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z5Point)) {
            this.x = ((Math.imul((($a[0]).a[($a[0]).i]).x, 10)) | 0);
            this.y = ((Math.imul((($a[0]).a[($a[0]).i]).y, 10)) | 0);
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this.x = 0;
            this.y = 0;
          }
          else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
            this.x = $a[0];
            this.y = $a[1];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZN5Point3sumEv() {
          return (((this.x) + (this.y)) | 0);
        }
        _ZNK5Point3sumEv() {
          return ((((((this.x) + (this.y)) | 0)) + (100)) | 0);
        }
        static _ZN5Point8getCountEv() {
          return _Z5Point.count;
        }
        _ZN5Point4addxEi(d) {
          this.x = (((((this.x) + (d)) | 0)) | 0);
          return {a: [this], i: 0};
        }
        static count = 5;
      }
      function _Z6getSumRK5Point(p) {
        return _Z5Point.prototype._ZNK5Point3sumEv.call(p.a[p.i]);
      }
      function main() {
        let $t0;
        let p = new _Z5Point();
        (console.log((_Z5Point.prototype._ZN5Point3sumEv.call(p))));
        let q = {v: new _Z5Point(3, 4)};
        (console.log((_Z5Point.prototype._ZN5Point3sumEv.call(q.v))));
        let r = new _Z5Point({a: q, i: "v"});
        (console.log((_Z5Point.prototype._ZN5Point3sumEv.call(r))));
        (console.log((_Z6getSumRK5Point({a: q, i: "v"}))));
        (console.log((_Z5Point._ZN5Point8getCountEv())));
        _Z5Point.prototype._ZN5Point4addxEi.call(q.v, 10);
        (console.log((_Z5Point.prototype._ZN5Point3sumEv.call(q.v))));
        let pp = ($t0 = {a: [new _Z5Point(1, 2)], i: 0}, $t0 ? {a: $t0.a, i: $t0.i} : null);
        (console.log((_Z5Point.prototype._ZN5Point3sumEv.call(pp.a[pp.i]))));
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
