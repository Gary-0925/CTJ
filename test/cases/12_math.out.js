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
      function _Z4fabsd(x) {
        return Math.abs(x);
      }
      function _Z5floord(x) {
        return Math.floor(x);
      }
      function _Z4fmoddd(x, y) {
        return ((x) % (y));
      }
      function _Z4sqrtd(x) {
        return Math.sqrt(x);
      }
      function main() {
        let a = (-(2.5));
        (console.log((_Z4fabsd(a))));
        (console.log((((_Z4sqrtd(16)) | 0))));
        (console.log((((_Z5floord(3.7)) | 0))));
        (console.log((((_Z4fmoddd(7.5, 2)) | 0))));
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
