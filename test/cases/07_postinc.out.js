"use strict";
function main() {
  let $t0, $t1, $t2;
  let a = [10, 20, 30, 40];
  let i = 0;
  (console.log((a[($t0 = i, i = (($t0 + 1) | 0), $t0)])));
  (console.log((a[i])));
  (console.log((a[(i = ((i + 1) | 0))])));
  let x = 5;
  (console.log((($t1 = x, x = (($t1 + 1) | 0), $t1))));
  (console.log((x)));
  (console.log((($t2 = x, x = (($t2 - 1) | 0), $t2))));
  (console.log((x)));
  let p = {a: a, i: 0};
  (console.log((p.a[p.i++])));
  (console.log((p.a[p.i])));
  return 0;
}
main();
