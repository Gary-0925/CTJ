<?php
class std_numeric_limits_int {
  function __construct(...$a) {
    $this->__init_std_numeric_limits_int(...$a);
  }
  function __init_std_numeric_limits_int(...$a) {
  }
  function __dtor() {
  }
  static function max() {
    return 2147483647;
  }
  public static $is_specialized;
  public static $digits;
  public static $digits10;
  public static $max_digits10;
  public static $is_signed;
  public static $is_integer;
  public static $is_exact;
  public static $radix;
  public static $min_exponent;
  public static $min_exponent10;
  public static $max_exponent;
  public static $max_exponent10;
  public static $has_infinity;
  public static $has_quiet_NaN;
  public static $has_signaling_NaN;
  public static $has_denorm;
  public static $has_denorm_loss;
  public static $is_iec559;
  public static $is_bounded;
  public static $is_modulo;
  public static $traps;
  public static $tinyness_before;
  public static $round_style;
}
function strlen($s) {
  $n = 0;
  while (($s["a"][$s["i"] + ($n)] !== 0)) {
    $n++;
  }
  return $n;
}
function strcmp($a, $b) {
  $i = 0;
  while ((($a["a"][$a["i"] + ($i)] !== 0) && ($a["a"][$a["i"] + ($i)] === $b["a"][$b["i"] + ($i)]))) {
    $i++;
  }
  if (($a["a"][$a["i"] + ($i)] === $b["a"][$b["i"] + ($i)])) {
    return 0;
  }
  return (((($a["a"][$a["i"] + ($i)]) & 0xFFFFFFFF) < (($b["a"][$b["i"] + ($i)]) & 0xFFFFFFFF)) ? (-(1)) : 1);
}
function strcpy($dst, $src) {
  $i = 0;
  while (($src["a"][$src["i"] + ($i)] !== 0)) {
     {
      $dst["a"][$dst["i"] + ($i)] = $src["a"][$src["i"] + ($i)];
      $i++;
    }
  }
  $dst["a"][$dst["i"] + ($i)] = 0;
  return ($dst ? ["a" => $dst["a"], "i" => $dst["i"]] : null);
}
function main() {
  $buf = array_fill(0, 16, 0);
  strcpy(["a" => $buf, "i" => 0], ["a" => [104, 101, 108, 108, 111, 0], "i" => 0]);
  null;
  null;
  null;
  null;
  return 0;
}
std_numeric_limits_int::$is_specialized = true;
std_numeric_limits_int::$digits = ((4 * 8) - ((-(1)) < 0));
std_numeric_limits_int::$digits10 = intdiv((((4 * 8) - ((-(1)) < 0)) * 643), 2136);
std_numeric_limits_int::$max_digits10 = 0;
std_numeric_limits_int::$is_signed = true;
std_numeric_limits_int::$is_integer = true;
std_numeric_limits_int::$is_exact = true;
std_numeric_limits_int::$radix = 2;
std_numeric_limits_int::$min_exponent = 0;
std_numeric_limits_int::$min_exponent10 = 0;
std_numeric_limits_int::$max_exponent = 0;
std_numeric_limits_int::$max_exponent10 = 0;
std_numeric_limits_int::$has_infinity = false;
std_numeric_limits_int::$has_quiet_NaN = false;
std_numeric_limits_int::$has_signaling_NaN = false;
std_numeric_limits_int::$has_denorm = 0;
std_numeric_limits_int::$has_denorm_loss = false;
std_numeric_limits_int::$is_iec559 = false;
std_numeric_limits_int::$is_bounded = true;
std_numeric_limits_int::$is_modulo = false;
std_numeric_limits_int::$traps = true;
std_numeric_limits_int::$tinyness_before = false;
std_numeric_limits_int::$round_style = 0;
main();
