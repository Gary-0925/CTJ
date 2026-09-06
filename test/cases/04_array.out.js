"use strict";
function main() {
  let a = [1, 2, 3];
  let sum = 0;
  for (let i = 0; (i < 3); i++) {
    sum += a[i];
  }
  (console.log((sum)));
  let b = [[1, 2, 3], [4, 5, 6]];
  (console.log(((b[1])[2])));
  let s = {a: [104, 101, 108, 108, 111, 0], i: 0};
  (console.log((s.a[s.i])));
  (console.log((s.a[s.i + (4)])));
  (console.log((s.a[s.i + (5)])));
  let buf = [97, 98, 99, 0];
  buf[1] = 88;
  (console.log((buf[1])));
  (console.log((4)));
  (console.log((12)));
  (console.log((8)));
  (console.log((8)));
  return 0;
}
main();
