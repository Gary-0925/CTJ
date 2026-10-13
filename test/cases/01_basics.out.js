"use strict";
function add(a, b) {
  return (((a) + (b)) | 0);
}
function main() {
  let x = 40;
  let y = add(x, 2);
  (console.log((y)));
  (console.log((((Math.trunc((7) / (2))) | 0))));
  (console.log(((((7) % (3)) | 0))));
  (console.log(((7 / 2))));
  (console.log(((((3 < 4) && (5 > 6)) ? ((1) | 0) : ((0) | 0)))));
  let t = ((1 > 2) ? ((10) | 0) : ((20) | 0));
  (console.log((t)));
  let c = ((1, 2), 3);
  (console.log((c)));
  let u = 4000000000;
  (console.log((((u) >>> (1)))));
  (console.log(((!(0)))));
  (console.log((((~(0)) | 0))));
  let p = 7;
  let q = 8;
  (console.log(((((p) + (q)) | 0))));
  let r = 0;
  let s = 0;
  r = 1;
  s = 2;
  (console.log(((((r) + (s)) | 0))));
  return 0;
}
main();
