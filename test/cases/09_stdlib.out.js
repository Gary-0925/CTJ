"use strict";
class std_numeric_limits_int {
  constructor(...$a) {
    this.__init_std_numeric_limits_int(...$a);
  }
  __init_std_numeric_limits_int(...$a) {
  }
  __dtor() {
  }
  static max() {
    return 2147483647;
  }
  static is_specialized = true;
  static digits = ((4 * 8) - ((-(1)) < 0));
  static digits10 = (Math.trunc((((4 * 8) - ((-(1)) < 0)) * 643) / 2136));
  static max_digits10 = 0;
  static is_signed = true;
  static is_integer = true;
  static is_exact = true;
  static radix = 2;
  static min_exponent = 0;
  static min_exponent10 = 0;
  static max_exponent = 0;
  static max_exponent10 = 0;
  static has_infinity = false;
  static has_quiet_NaN = false;
  static has_signaling_NaN = false;
  static has_denorm = 0;
  static has_denorm_loss = false;
  static is_iec559 = false;
  static is_bounded = true;
  static is_modulo = false;
  static traps = true;
  static tinyness_before = false;
  static round_style = 0;
}
function strlen(s) {
  let n = 0;
  while ((s.a[s.i + (n)] !== 0)) {
    n++;
  }
  return n;
}
function strcmp(a, b) {
  let i = 0;
  while (((a.a[a.i + (i)] !== 0) && (a.a[a.i + (i)] === b.a[b.i + (i)]))) {
    i++;
  }
  if ((a.a[a.i + (i)] === b.a[b.i + (i)])) {
    return 0;
  }
  return ((a.a[a.i + (i)] < b.a[b.i + (i)]) ? (-(1)) : 1);
}
function strcpy(dst, src) {
  let i = 0;
  while ((src.a[src.i + (i)] !== 0)) {
     {
      dst.a[dst.i + (i)] = src.a[src.i + (i)];
      i++;
    }
  }
  dst.a[dst.i + (i)] = 0;
  return dst;
}
function main() {
  let buf = new Array(16).fill(0);
  strcpy({a: buf, i: 0}, {a: [104, 101, 108, 108, 111, 0], i: 0});
  (console.log((strlen({a: buf, i: 0}))));
  (console.log((strcmp({a: buf, i: 0}, {a: [104, 101, 108, 108, 111, 0], i: 0}))));
  (console.log((2147483647)));
  (console.log((std_numeric_limits_int.max())));
  return 0;
}
main();
