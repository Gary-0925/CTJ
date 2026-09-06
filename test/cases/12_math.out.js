"use strict";
function fabs(x) {
  return Math.abs(x);
}
function floor(x) {
  return Math.floor(x);
}
function fmod(x, y) {
  return ((x) % (y));
}
function sqrt(x) {
  return Math.sqrt(x);
}
function main() {
  let a = (-(2.5));
  (console.log((fabs(a))));
  (console.log((Math.trunc(sqrt(16)))));
  (console.log((Math.trunc(floor(3.7)))));
  (console.log((Math.trunc(fmod(7.5, 2)))));
  return 0;
}
main();
