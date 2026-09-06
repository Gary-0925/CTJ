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
  static is_specialized = 1;
  static digits = 31;
  static digits10 = 9;
  static max_digits10 = 0;
  static is_signed = 1;
  static is_integer = 1;
  static is_exact = 1;
  static radix = 2;
  static min_exponent = 0;
  static min_exponent10 = 0;
  static max_exponent = 0;
  static max_exponent10 = 0;
  static has_infinity = 0;
  static has_quiet_NaN = 0;
  static has_signaling_NaN = 0;
  static has_denorm = 0;
  static has_denorm_loss = 0;
  static is_iec559 = 0;
  static is_bounded = 1;
  static is_modulo = 0;
  static traps = 1;
  static tinyness_before = 0;
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
  return (((a.a[a.i + (i)] >>> 0) < (b.a[b.i + (i)] >>> 0)) ? (-(1)) : 1);
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
  return (dst ? {a: dst.a, i: dst.i} : null);
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
