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
      class _Z3Buf {
        d;
        constructor(...$a) {
          this.__init__Z3Buf(...$a);
        }
        __init__Z3Buf(...$a) {
          this.d = new Array(4).fill(0);
          this.d[0] = 5;
        }
        __dtor() {
        }
        _ZN3BufixEi(i) {
          return this.d[i];
        }
        _ZN3Buf5frontEv() {
          return this._ZN3BufixEi(0);
        }
      }
      class _Z6TraitsIcE {
        __init__Z6TraitsIcE(...$a) { }
        __dtor() {
        }
      }
      class _ZN3StrIc6TraitsIcEE3RepE extends _Z6TraitsIcE {
        len;
        constructor(...$a) {
          super();
          this.__init__ZN3StrIc6TraitsIcEE3RepE(...$a);
        }
        __init__ZN3StrIc6TraitsIcEE3RepE(...$a) {
          this.len = 0;
        }
        __dtor() {
          _Z6TraitsIcE.prototype.__dtor.call(this);
        }
      }
      class _Z3StrIc6TraitsIcEE {
        buf$_Z3StrIc6TraitsIcEE;
        rep$_Z3StrIc6TraitsIcEE;
        constructor(...$a) {
          this.__init__Z3StrIc6TraitsIcEE(...$a);
        }
        __init__Z3StrIc6TraitsIcEE(...$a) {
          this.buf$_Z3StrIc6TraitsIcEE = new Array(32).fill(0);
          this.rep$_Z3StrIc6TraitsIcEE = new _ZN3StrIc6TraitsIcEE3RepE();
          this.rep$_Z3StrIc6TraitsIcEE.ctj_a = this; this.rep$_Z3StrIc6TraitsIcEE.ctj_i = "rep$_Z3StrIc6TraitsIcEE";
        }
        __dtor() {
        }
        _ZN3StrIc6TraitsIcEE3setEPKc(s) {
          let $t0;
          this.rep$_Z3StrIc6TraitsIcEE.len = ((_Z6strlenPKc((s ? {a: s.a, i: s.i} : null))) | 0);
          for (let i = 0; (i < this.rep$_Z3StrIc6TraitsIcEE.len); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
            this.buf$_Z3StrIc6TraitsIcEE[i] = s.a[s.i + (i)];
          }
        }
        _ZNK3StrIc6TraitsIcEE4sizeEv() {
          return this.rep$_Z3StrIc6TraitsIcEE.len;
        }
        _ZNK3StrIc6TraitsIcEE2atEl(i) {
          return this.buf$_Z3StrIc6TraitsIcEE[i];
        }
        static _ZN3StrIc6TraitsIcEE7compareEPKcS3_(a, b) {
          while ((a.a[a.i] && (a.a[a.i] === b.a[b.i]))) {
             {
              a.i++;
              b.i++;
            }
          }
          return (((a.a[a.i]) - (b.a[b.i])) | 0);
        }
        static npos = -1;
      }
      class _Z4NodeIdE {
        next$_Z4NodeIdE;
        constructor(...$a) {
          this.__init__Z4NodeIdE(...$a);
        }
        __init__Z4NodeIdE(...$a) {
          this.next$_Z4NodeIdE = null;
        }
        __dtor() {
        }
      }
      class _ZN4NodeIdE6RebindIiEE {
        __init__ZN4NodeIdE6RebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _Z4NodeIiE {
        next$_Z4NodeIiE;
        constructor(...$a) {
          this.__init__Z4NodeIiE(...$a);
        }
        __init__Z4NodeIiE(...$a) {
          this.next$_Z4NodeIiE = null;
        }
        __dtor() {
        }
      }
      class _ZN4NodeIiE6RebindIiEE {
        __init__ZN4NodeIiE6RebindIiEE(...$a) { }
        __dtor() {
        }
      }
      function _Z6strlenPKc(s) {
        let $t1;
        let n = ((0) >>> 0);
        while ((s.a[s.i + (n)] !== 0)) {
          ($t1 = n, n = (($t1 + 1) >>> 0), $t1);
        }
        return n;
      }
      function main() {
        let s = new _Z3StrIc6TraitsIcEE();
        _Z3StrIc6TraitsIcEE.prototype._ZN3StrIc6TraitsIcEE3setEPKc.call(s, {a: [104, 101, 108, 108, 111, 0], i: 0});
        (console.log((_Z3StrIc6TraitsIcEE.prototype._ZNK3StrIc6TraitsIcEE4sizeEv.call(s))));
        let c = _Z3StrIc6TraitsIcEE._ZN3StrIc6TraitsIcEE7compareEPKcS3_({a: [97, 98, 99, 0], i: 0}, {a: [97, 98, 100, 0], i: 0});
        (console.log(((c < 0))));
        (console.log(((_Z3StrIc6TraitsIcEE.npos === ((-(1)) | 0)))));
        (console.log((_Z3StrIc6TraitsIcEE.prototype._ZNK3StrIc6TraitsIcEE2atEl.call(s, 1))));
        let n = new _Z4NodeIdE();
        (console.log(((n.next$_Z4NodeIdE === null))));
        let b = new _Z3Buf();
        (console.log((_Z3Buf.prototype._ZN3Buf5frontEv.call(b))));
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
