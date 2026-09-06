"use strict";
function inc(r) {
  r.a[r.i]++;
}
function pick(b, a, c) {
  return (b ? a : c);
}
function main() {
  let $t0, $t1;
  let x = {v: 5};
  let r = {a: x, i: "v"};
  r.a[r.i] = 6;
  (console.log((x.v)));
  inc({a: x, i: "v"});
  (console.log((x.v)));
  let y = {v: 100};
  ($t0 = pick(true, {a: x, i: "v"}, {a: y, i: "v"}), $t0.a[$t0.i] = 50);
  (console.log((x.v)));
  ($t1 = pick(false, {a: x, i: "v"}, {a: y, i: "v"}), $t1.a[$t1.i] = 60);
  (console.log((y.v)));
  let cr = {a: x, i: "v"};
  (console.log((cr.a[cr.i])));
  return 0;
}
main();
