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
      class _Z5CountIidcE {
        constructor(...$a) {
          this.__init__Z5CountIidcE(...$a);
        }
        __init__Z5CountIidcE(...$a) {
        }
        __dtor() {
        }
        static n = 3;
      }
      class _Z5Head1IlE {
        constructor(...$a) {
          this.__init__Z5Head1IlE(...$a);
        }
        __init__Z5Head1IlE(...$a) {
        }
        __dtor() {
        }
        static n = 1;
      }
      function main() {
        (console.log((_Z5CountIidcE.n), (_Z5Head1IlE.n)));
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
