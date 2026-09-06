"use strict";
function scale(v, k) {
  v.a[v.i] = (v.a[v.i] * k);
}
function geti(x) {
  return x.a[x.i];
}
function main() {
  let x = {v: 1};
  let y = {v: 2};
  swapv_int({a: x, i: "v"}, {a: y, i: "v"});
  (console.log((x.v), (y.v)));
  scale({a: x, i: "v"}, 10);
  (console.log((x.v)));
  (console.log((geti({a: y, i: "v"}))));
  return 0;
}
function swapv_int(a, b) {
  let t = a.a[a.i];
  a.a[a.i] = b.a[b.i];
  b.a[b.i] = t;
}
main();
