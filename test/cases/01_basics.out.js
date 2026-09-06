"use strict";
function add(a, b) {
  return (a + b);
}
function main() {
  let x = 40;
  let y = add(x, 2);
  (console.log((y)));
  (console.log(((Math.trunc(7 / 2)))));
  (console.log(((7 % 3))));
  (console.log(((7 / 2))));
  (console.log(((((3 < 4) && (5 > 6)) ? 1 : 0))));
  let t = ((1 > 2) ? 10 : 20);
  (console.log((t)));
  let c = ((1, 2), 3);
  (console.log((c)));
  let u = 4000000000;
  (console.log(((u >>> 1))));
  (console.log(((!(0)))));
  (console.log(((~(0)))));
  return 0;
}
main();
