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
  (console.log((((sqrt(16)) | 0))));
  (console.log((((floor(3.7)) | 0))));
  (console.log((((fmod(7.5, 2)) | 0))));
  return 0;
}
main();
