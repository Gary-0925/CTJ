"use strict";
function inc(r) {
  let $t0;
  ($t0 = r.a[r.i], r.a[r.i] = (($t0 + 1) | 0), $t0);
}
function pick(b, a, c) {
  return (b ? a : c);
}
function main() {
  let $t1, $t2;
  let x = {v: 5};
  let r = {a: x, i: "v"};
  r.a[r.i] = 6;
  (console.log((x.v)));
  inc({a: x, i: "v"});
  (console.log((x.v)));
  let y = {v: 100};
  ($t1 = pick(true, {a: x, i: "v"}, {a: y, i: "v"}), $t1.a[$t1.i] = 50);
  (console.log((x.v)));
  ($t2 = pick(false, {a: x, i: "v"}, {a: y, i: "v"}), $t2.a[$t2.i] = 60);
  (console.log((y.v)));
  let cr = {a: x, i: "v"};
  (console.log((cr.a[cr.i])));
  return 0;
}
main();
