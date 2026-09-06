"use strict";
function main() {
  let a = [10, 20, 30, 40];
  let i = 0;
  (console.log((a[i++])));
  (console.log((a[i])));
  (console.log((a[++i])));
  let x = 5;
  (console.log((x++)));
  (console.log((x)));
  (console.log((x--)));
  (console.log((x)));
  let p = {a: a, i: 0};
  (console.log((p.a[p.i++])));
  (console.log((p.a[p.i])));
  return 0;
}
main();
