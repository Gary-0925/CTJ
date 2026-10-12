<?php
function __ctj_fmt($v) { for ($n = 0; $n < 4 && is_array($v) && array_key_exists("a", $v) && array_key_exists("i", $v) && !is_array($v["a"]); $n++) $v = $v["a"][$v["i"]]; if ($v === null) return "0"; if (is_bool($v)) return $v ? "1" : "0"; if (is_int($v) || is_float($v)) return (string)$v; if (is_string($v)) return $v; $a = is_array($v) && array_key_exists("a", $v) ? $v["a"] : (is_array($v) && array_values($v) === $v ? $v : null); $i = is_array($v) && array_key_exists("i", $v) ? $v["i"] : 0; if (is_array($a)) { $s = ""; for ($k = (int)$i; $k < count($a) && $a[$k]; $k++) $s .= chr($a[$k]); return $s; } return (string)$v; }
function __ctj_write($s) { echo $s; }
function _ctj_cstr($p, $n = null) {
  if ($p === null) return "";
  $a = (is_array($p) && array_key_exists("a", $p)) ? $p["a"] : $p;
  $i = (is_array($p) && array_key_exists("i", $p)) ? intval($p["i"]) : 0;
  $lim = ($n === null) ? 1000000000 : intval($n);
  $s = "";
  for ($k = 0; $k < $lim; $k++) {
    if (!isset($a[$i + $k])) break;
    $c = $a[$i + $k];
    if ($c === 0 || $c === null) break;
    $s .= is_int($c) ? chr($c & 255) : strval($c);
  }
  return $s;
}
function _ctj_fmt($v) {
  for ($n = 0; $n < 4 && is_array($v) && array_key_exists("a", $v) && array_key_exists("i", $v) && !is_array($v["a"]); $n++) $v = $v["a"][$v["i"]];
  if ($v === null) return "0";
  if (is_bool($v)) return $v ? "1" : "0";
  if (is_int($v) || is_float($v)) return (string)$v;
  if (is_string($v)) return $v;
  if (is_array($v) && array_key_exists("a", $v)) return _ctj_cstr($v);
  return strval($v);
}
class std_sfinae_types {
  function __dtor() {
  }
}
class std_sfinae_types_class_5 {
  public $__arr;
  function __construct(...$a) {
    $this->__init_std_sfinae_types_class_5(...$a);
  }
  function __init_std_sfinae_types_class_5(...$a) {
    $this->__arr = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->__arr;
  }
  function __dtor() {
  }
}
class std_do_is_destructible_impl {
  function __dtor() {
  }
}
class std_do_is_default_constructible_impl {
  function __dtor() {
  }
}
class std_do_is_static_castable_impl {
  function __dtor() {
  }
}
class std_do_is_direct_constructible_impl {
  function __dtor() {
  }
}
class std_piecewise_construct_t {
  function __construct(...$a) {
    $this->__init_std_piecewise_construct_t(...$a);
  }
  function __init_std_piecewise_construct_t(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_true_type {
  function __dtor() {
  }
}
class std_false_type {
  function __construct(...$a) {
    $this->__init_std_false_type(...$a);
  }
  function __init_std_false_type(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_input_iterator_tag {
  function __construct(...$a) {
    $this->__init_std_input_iterator_tag(...$a);
  }
  function __init_std_input_iterator_tag(...$a) {
  }
  function __dtor() {
  }
}
class std_output_iterator_tag {
  function __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_forward_iterator_tag(...$a);
  }
  function __init_std_forward_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_input_iterator_tag();
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_bidirectional_iterator_tag(...$a);
  }
  function __init_std_bidirectional_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_forward_iterator_tag();
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_random_access_iterator_tag(...$a);
  }
  function __init_std_random_access_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_bidirectional_iterator_tag();
  }
}
class IO_FILE {
  public $__flags;
  public $__dummy;
  function __construct(...$a) {
    $this->__init_IO_FILE(...$a);
  }
  function __init_IO_FILE(...$a) {
    $this->__flags = 0;
    $this->__dummy = 0;
  }
  function __dtor() {
  }
}
class class_152 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_152(...$a);
  }
  function __init_class_152(...$a) {
    $this->__count = 0;
    $this->__value = 0;
  }
  function __dtor() {
  }
}
class std_nothrow_t {
  function __construct(...$a) {
    $this->__init_std_nothrow_t(...$a);
  }
  function __init_std_nothrow_t(...$a) {
  }
  function __dtor() {
  }
}
class lconv {
  public $decimal_point;
  public $thousands_sep;
  public $grouping;
  public $int_curr_symbol;
  public $currency_symbol;
  public $mon_decimal_point;
  public $mon_thousands_sep;
  public $mon_grouping;
  public $positive_sign;
  public $negative_sign;
  public $int_frac_digits;
  public $frac_digits;
  public $p_cs_precedes;
  public $p_sep_by_space;
  public $n_cs_precedes;
  public $n_sep_by_space;
  public $p_sign_posn;
  public $n_sign_posn;
  public $int_p_cs_precedes;
  public $int_n_cs_precedes;
  public $int_p_sep_by_space;
  public $int_n_sep_by_space;
  public $int_p_sign_posn;
  public $int_n_sign_posn;
  function __construct(...$a) {
    $this->__init_lconv(...$a);
  }
  function __init_lconv(...$a) {
    $this->decimal_point = null;
    $this->thousands_sep = null;
    $this->grouping = null;
    $this->int_curr_symbol = null;
    $this->currency_symbol = null;
    $this->mon_decimal_point = null;
    $this->mon_thousands_sep = null;
    $this->mon_grouping = null;
    $this->positive_sign = null;
    $this->negative_sign = null;
    $this->int_frac_digits = 0;
    $this->frac_digits = 0;
    $this->p_cs_precedes = 0;
    $this->p_sep_by_space = 0;
    $this->n_cs_precedes = 0;
    $this->n_sep_by_space = 0;
    $this->p_sign_posn = 0;
    $this->n_sign_posn = 0;
    $this->int_p_cs_precedes = 0;
    $this->int_n_cs_precedes = 0;
    $this->int_p_sep_by_space = 0;
    $this->int_n_sep_by_space = 0;
    $this->int_p_sign_posn = 0;
    $this->int_n_sign_posn = 0;
  }
  function __dtor() {
  }
}
class std_ios_base {
  public $_M_precision;
  public $_M_width;
  public $_M_flags;
  public $_M_exception;
  public $_M_streambuf_state;
  public $_M_callbacks;
  public $_M_word_zero;
  public $_M_local_word;
  public $_M_word_size;
  public $_M_word;
  public $_M_ios_locale;
  function __construct(...$a) {
    $this->__init_std_ios_base(...$a);
  }
  function __init_std_ios_base(...$a) {
    $this->_M_precision = 0;
    $this->_M_width = 0;
    $this->_M_flags = 0;
    $this->_M_exception = 0;
    $this->_M_streambuf_state = 0;
    $this->_M_callbacks = null;
    $this->_M_word_zero = new std_ios_base_Words();
    $this->_M_local_word = [new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words(), new std_ios_base_Words()];
    $this->_M_word_size = 0;
    $this->_M_word = null;
    $this->_M_ios_locale = new std_locale();
  }
  function __dtor() {
  }
  function flags__c() {
    return $this->_M_flags;
  }
  function flags($__fmtfl) {
    $__old = $this->_M_flags;
    $this->_M_flags = $__fmtfl;
    return $__old;
  }
  public static $boolalpha;
  public static $dec;
  public static $fixed;
  public static $hex;
  public static $internal;
  public static $left;
  public static $oct;
  public static $right;
  public static $scientific;
  public static $showbase;
  public static $showpoint;
  public static $showpos;
  public static $skipws;
  public static $unitbuf;
  public static $uppercase;
  public static $adjustfield;
  public static $basefield;
  public static $floatfield;
  public static $badbit;
  public static $eofbit;
  public static $failbit;
  public static $goodbit;
  public static $app;
  public static $ate;
  public static $binary;
  public static $in_;
  public static $out;
  public static $trunc;
  public static $beg;
  public static $cur;
  public static $end;
}
class std_locale {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_locale(...$a);
  }
  function __init_std_locale(...$a) {
    $this->_M_impl = null;
  }
  function __dtor() {
  }
  public static $none;
  public static $ctype;
  public static $numeric;
  public static $collate;
  public static $time;
  public static $monetary;
  public static $messages;
  public static $all;
  public static $_S_classic;
  public static $_S_global;
  public static $_S_categories;
  public static $_S_once;
}
class std_ctype_base {
  function __construct(...$a) {
    $this->__init_std_ctype_base(...$a);
  }
  function __init_std_ctype_base(...$a) {
  }
  function __dtor() {
  }
  public static $upper;
  public static $lower;
  public static $alpha;
  public static $digit;
  public static $xdigit;
  public static $space;
  public static $print;
  public static $graph;
  public static $cntrl;
  public static $punct;
  public static $alnum;
}
class class_156 {
  public $done;
  public $started;
  function __construct(...$a) {
    $this->__init_class_156(...$a);
  }
  function __init_class_156(...$a) {
    $this->done = 0;
    $this->started = 0;
  }
  function __dtor() {
  }
}
class std_Hash_impl {
  function __dtor() {
  }
  static function hash($__ptr, $__clength, $__seed = null) {
    if (func_num_args() < 3) $__seed = ((3339675911) & 0xFFFFFFFF);
    return std_Hash_bytes(($__ptr ? ["a" => $__ptr["a"], "i" => $__ptr["i"]] : null), $__clength, $__seed);
  }
}
class std_hash_base_unsigned_long_long_long_long {
  function __dtor() {
  }
}
class std_hash_long_long extends std_hash_base_unsigned_long_long_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_long_long(...$a);
  }
  function __init_std_hash_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_long_long();
  }
}
class std_char_traits_char {
  function __dtor() {
  }
  static function assign(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      ($a[0] ?? null)["a"][($a[0] ?? null)["i"]] = ($a[1] ?? null)["a"][($a[1] ?? null)["i"]];
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1])) && (is_int($a[2]) || is_bool($a[2]))) {
      return ($t0 = (function ($d, $c, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $c & 255; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($a[0] ?? null), $a[2] ?? null, $a[1] ?? null), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  static function compare($__s1, $__s2, $__n) {
    return (function ($x, $y, $n) { for ($k = 0; $k < $n; $k++) { $d = ($x["a"][$x["i"] + $k] ?? 0) - ($y["a"][$y["i"] + $k] ?? 0); if ($d) return $d; } return 0; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s1), (function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s2), $__n);
  }
  static function length($__s) {
    return (function ($s) { $i = $s["i"]; while (($s["a"][$i] ?? 0)) $i++; return $i - $s["i"]; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s));
  }
  static function copy($__s1, $__s2, $__n) {
    return ($t1 = (function ($d, $s, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $s["a"][$s["i"] + $k]; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s1), (function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s2), $__n), $t1 ? ["a" => $t1["a"], "i" => $t1["i"]] : null);
  }
  static function to_char_type($__c) {
    return $__c["a"][$__c["i"]];
  }
  static function to_int_type($__c) {
    return (($__c["a"][$__c["i"]]) & 0xFFFFFFFF);
  }
  static function eq_int_type($__c1, $__c2) {
    return ($__c1["a"][$__c1["i"]] === $__c2["a"][$__c2["i"]]);
  }
  static function eof() {
    return (-(1));
  }
}
class gnu_cxx_new_allocator_char {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_char(...$a);
  }
  function __init_gnu_cxx_new_allocator_char(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t2 = operatornew__unsigned_long_long(($__n * 1)), $t2 ? ["a" => $t2["a"], "i" => $t2["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 1);
  }
}
class std_allocator_char extends gnu_cxx_new_allocator_char {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_allocator_char(...$a);
  }
  function __init_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char();
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t3 = std_basic_string_char_std_char_traits_char_std_allocator_char::_S_construct(0, 0, ["a" => [new std_allocator_char([])], "i" => 0]), $t3 ? ["a" => $t3["a"], "i" => $t3["i"]] : null), ["a" => [new std_allocator_char([])], "i" => 0]);
    }
    else if (count($a) >= 1 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t5 = std_basic_string_char_std_char_traits_char_std_allocator_char::_S_construct((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), ($t4 = ($a[0] ?? null ? (["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"] + (std_char_traits_char::length((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)))]) : (["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"] + (std_basic_string_char_std_char_traits_char_std_allocator_char::$npos)])), $t4 ? ["a" => $t4["a"], "i" => $t4["i"]] : null), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_allocator_char([])], "i" => 0]))), $t5 ? ["a" => $t5["a"], "i" => $t5["i"]] : null), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_allocator_char([])], "i" => 0])));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_dataplus"]);
      (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_data(($t6 = std_basic_string_char_std_char_traits_char_std_allocator_char::_S_construct(0, 0, ["a" => [new std_allocator_char($this->get_allocator__c())], "i" => 0]), $t6 ? ["a" => $t6["a"], "i" => $t6["i"]] : null));
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_data__c() {
    return ($this->_M_dataplus->_M_p ? ["a" => $this->_M_dataplus->_M_p["a"], "i" => $this->_M_dataplus->_M_p["i"]] : null);
  }
  function _M_data($__p) {
    return ($t7 = $this->_M_dataplus->_M_p = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $t7 ? ["a" => $t7["a"], "i" => $t7["i"]] : null);
  }
  function _M_rep__c() {
    return ($t9 = ["a" => (($t8 = $this->_M_data__c(), $t8))["a"], "i" => (($t8 = $this->_M_data__c(), $t8))["i"] + ((-(1)))], $t9 ? ["a" => $t9["a"], "i" => $t9["i"]] : null);
  }
  static function _M_copy($__d, $__s, $__n) {
    if (($__n === 1)) {
      std_char_traits_char::assign($__d, $__s);
    }
    else {
      std_char_traits_char::copy(($__d ? ["a" => $__d["a"], "i" => $__d["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__n);
    }
  }
  static function _M_assign($__d, $__n, $__c) {
    $__c = ["v" => $__c];
    if (($__n === 1)) {
      std_char_traits_char::assign($__d, ["a" => $__c, "i" => "v"]);
    }
    else {
      std_char_traits_char::assign(($__d ? ["a" => $__d["a"], "i" => $__d["i"]] : null), $__n, $__c["v"]);
    }
  }
  static function _S_compare($__n1, $__n2) {
    $__d = ($__n1 - $__n2);
    if (($__d > gnu_cxx_numeric_traits_integer_int::$__max)) {
      return gnu_cxx_numeric_traits_integer_int::$__max;
    }
    else {
      if (($__d < gnu_cxx_numeric_traits_integer_int::$__min)) {
        return gnu_cxx_numeric_traits_integer_int::$__min;
      }
      else {
        return $__d;
      }
    }
  }
  function size__c() {
    return (($t10 = $this->_M_rep__c(), $t10["a"][$t10["i"]]))->_M_length;
  }
  function length__c() {
    return (($t11 = $this->_M_rep__c(), $t11["a"][$t11["i"]]))->_M_length;
  }
  static function _S_construct(...$a) {
    if (count($a) >= 3 && count($a) <= 3 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1])) && ($a[2] === null || is_array($a[2]))) {
      $__r = ($t12 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::_S_create($a[0] ?? null, ((0) & 0xFFFFFFFF), $a[2] ?? null), $t12 ? ["a" => $t12["a"], "i" => $t12["i"]] : null);
      if ($a[0] ?? null) {
        std_basic_string_char_std_char_traits_char_std_allocator_char::_M_assign(($t13 = ($__r["a"][$__r["i"]])->_M_refdata(), $t13 ? ["a" => $t13["a"], "i" => $t13["i"]] : null), $a[0] ?? null, $a[1] ?? null);
      }
      ($__r["a"][$__r["i"]])->_M_set_length_and_sharable($a[0] ?? null);
      return ($t14 = ($__r["a"][$__r["i"]])->_M_refdata(), $t14 ? ["a" => $t14["a"], "i" => $t14["i"]] : null);
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      return ($t15 = std_basic_string_char_std_char_traits_char_std_allocator_char::_S_construct_aux((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), $a[2] ?? null, new std_false_type([])), $t15 ? ["a" => $t15["a"], "i" => $t15["i"]] : null);
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && $a[3] instanceof std_input_iterator_tag) {
      $__buf = array_fill(0, 128, 0);
      $__len = 0;
      while (((!(($a[0] ?? null) === ($a[1] ?? null) || (($a[0] ?? null) && ($a[1] ?? null) && ($a[0] ?? null)["a"] === ($a[1] ?? null)["a"] && ($a[0] ?? null)["i"] === ($a[1] ?? null)["i"]))) && ($__len < intdiv(128, 1)))) {
         {
          $__buf[$__len++] = ($a[0] ?? null)["a"][($a[0] ?? null)["i"]];
          ++($a[0] ?? null)["i"];
        }
      }
      $__r = ($t16 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::_S_create($__len, ((0) & 0xFFFFFFFF), $a[2] ?? null), $t16 ? ["a" => $t16["a"], "i" => $t16["i"]] : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char::_M_copy(($t17 = ($__r["a"][$__r["i"]])->_M_refdata(), $t17 ? ["a" => $t17["a"], "i" => $t17["i"]] : null), ["a" => $__buf, "i" => 0], $__len);
      if (true) {
         {
          while ((!(($a[0] ?? null) === ($a[1] ?? null) || (($a[0] ?? null) && ($a[1] ?? null) && ($a[0] ?? null)["a"] === ($a[1] ?? null)["a"] && ($a[0] ?? null)["i"] === ($a[1] ?? null)["i"])))) {
             {
              if (($__len === ($__r["a"][$__r["i"]])->_M_capacity)) {
                 {
                  $__another = ($t18 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::_S_create(($__len + 1), $__len, $a[2] ?? null), $t18 ? ["a" => $t18["a"], "i" => $t18["i"]] : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char::_M_copy(($t19 = ($__another["a"][$__another["i"]])->_M_refdata(), $t19 ? ["a" => $t19["a"], "i" => $t19["i"]] : null), ($t20 = ($__r["a"][$__r["i"]])->_M_refdata(), $t20 ? ["a" => $t20["a"], "i" => $t20["i"]] : null), $__len);
                  ($__r["a"][$__r["i"]])->_M_destroy($a[2] ?? null);
                  $__r = ($__another ? ["a" => $__another["a"], "i" => $__another["i"]] : null);
                }
              }
              (($t21 = ($__r["a"][$__r["i"]])->_M_refdata(), $t21))["a"][(($t21 = ($__r["a"][$__r["i"]])->_M_refdata(), $t21))["i"] + ($__len++)] = ($a[0] ?? null)["a"][($a[0] ?? null)["i"]];
              ++($a[0] ?? null)["i"];
            }
          }
        }
      }
      if (false) {
         {
          ($__r["a"][$__r["i"]])->_M_destroy($a[2] ?? null);
        }
      }
      ($__r["a"][$__r["i"]])->_M_set_length_and_sharable($__len);
      return ($t22 = ($__r["a"][$__r["i"]])->_M_refdata(), $t22 ? ["a" => $t22["a"], "i" => $t22["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function data__c() {
    return ($t23 = $this->_M_data__c(), $t23 ? ["a" => $t23["a"], "i" => $t23["i"]] : null);
  }
  function get_allocator__c() {
    return new std_allocator_char(["a" => $this, "i" => "_M_dataplus"]);
  }
  function compare__c($__str) {
    $__size = ["v" => $this->size__c()];
    $__osize = ["v" => ($__str["a"][$__str["i"]])->size__c()];
    $__len = (($t25 = ($t24 = std_min_unsigned_long_long(["a" => $__size, "i" => "v"], ["a" => $__osize, "i" => "v"]), $t24["a"][$t24["i"]]), $t25))["a"][(($t25 = ($t24 = std_min_unsigned_long_long(["a" => $__size, "i" => "v"], ["a" => $__osize, "i" => "v"]), $t24["a"][$t24["i"]]), $t25))["i"]];
    $__r = std_char_traits_char::compare(($t26 = $this->_M_data__c(), $t26 ? ["a" => $t26["a"], "i" => $t26["i"]] : null), ($t27 = ($__str["a"][$__str["i"]])->data__c(), $t27 ? ["a" => $t27["a"], "i" => $t27["i"]] : null), $__len);
    if ((!$__r)) {
      $__r = std_basic_string_char_std_char_traits_char_std_allocator_char::_S_compare($__size["v"], $__osize["v"]);
    }
    return $__r;
  }
  static function _S_construct_aux($__beg, $__end, $__a, $p3) {
    return ($t28 = $this->_S_construct(($__beg ? ["a" => $__beg["a"], "i" => $__beg["i"]] : null), ($__end ? ["a" => $__end["a"], "i" => $__end["i"]] : null), $__a, new std_random_access_iterator_tag([])), $t28 ? ["a" => $t28["a"], "i" => $t28["i"]] : null);
  }
  public static $npos;
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Rep extends std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base();
  }
  function _M_set_sharable() {
    $this->_M_refcount = 0;
  }
  function _M_set_length_and_sharable($__n) {
     {
      $this->_M_set_sharable();
      $this->_M_length = $__n;
      std_char_traits_char::assign(["a" => (($t29 = $this->_M_refdata(), $t29))["a"], "i" => (($t29 = $this->_M_refdata(), $t29))["i"] + ($__n)], ["a" => std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, "i" => "_S_terminal"]);
    }
  }
  function _M_refdata() {
    return ($t30 = (["a" => (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["a"], "i" => (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["i"] + (1)]), $t30 ? ["a" => $t30["a"], "i" => $t30["i"]] : null);
  }
  static function _S_create($__capacity, $__old_capacity, $__alloc) {
    if (($__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_max_size)) {
      std_throw_length_error(["a" => [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], "i" => 0]);
    }
    $__pagesize = 4096;
    $__malloc_header_size = (4 * 8);
    if ((($__capacity > $__old_capacity) && ($__capacity < (2 * $__old_capacity)))) {
      $__capacity = (2 * $__old_capacity);
    }
    $__size = ((($__capacity + 1) * 1) + 20);
    $__adj_size = ($__size + $__malloc_header_size);
    if ((($__adj_size > $__pagesize) && ($__capacity > $__old_capacity))) {
       {
        $__extra = ($__pagesize - ($__adj_size % $__pagesize));
        $__capacity += intdiv($__extra, 1);
        if (($__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_max_size)) {
          $__capacity = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_max_size;
        }
        $__size = ((($__capacity + 1) * 1) + 20);
      }
    }
    $__place = ($t31 = ($__alloc["a"][$__alloc["i"]])->allocate($__size, ["a" => [0], "i" => 0]), $t31 ? ["a" => $t31["a"], "i" => $t31["i"]] : null);
    $__p = ($t32 = (($__place["a"][$__place["i"]] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep()) && (($__place["a"][$__place["i"]]->ctj_a = $__place["a"]) || true) && (($__place["a"][$__place["i"]]->ctj_i = $__place["i"]) || true) ? ["a" => $__place["a"], "i" => $__place["i"]] : null), $t32 ? ["a" => $t32["a"], "i" => $t32["i"]] : null);
    ($__p["a"][$__p["i"]])->_M_capacity = $__capacity;
    ($__p["a"][$__p["i"]])->_M_set_sharable();
    return ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function _M_destroy($__a) {
    $__size = (20 + (($this->_M_capacity + 1) * 1));
    ($__a["a"][$__a["i"]])->deallocate(($this ? ["a" => $this["a"], "i" => $this["i"]] : null), $__size);
  }
  public static $_S_max_size;
  public static $_S_terminal;
  public static $_S_empty_rep_storage;
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  public $_M_p;
  function __construct(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__a);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_p = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_p = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_p) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_p)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_p)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_char();
  }
}
class std_allocator_char_rebind_char {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    $this->__init_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_assign($o) {
    return ["a" => [$this], "i" => 0];
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
  function op_call__c($__s) {
    return std_Hash_impl::hash(($t33 = ($__s["a"][$__s["i"]])->data__c(), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null), ($__s["a"][$__s["i"]])->length__c(), ((3339675911) & 0xFFFFFFFF));
  }
  function op_assign($o) {
    return ["a" => [$this], "i" => 0];
  }
}
class std_char_traits_wchar_t {
  function __dtor() {
  }
  static function assign($__c1, $__c2) {
    $__c1["a"][$__c1["i"]] = $__c2["a"][$__c2["i"]];
  }
  static function copy($__s1, $__s2, $__n) {
    return ($t34 = wmemcpy(($__s1 ? ["a" => $__s1["a"], "i" => $__s1["i"]] : null), ($__s2 ? ["a" => $__s2["a"], "i" => $__s2["i"]] : null), intdiv($__n, 4)), $t34 ? ["a" => $t34["a"], "i" => $t34["i"]] : null);
  }
  static function to_char_type($__c) {
    return $__c["a"][$__c["i"]];
  }
  static function to_int_type($__c) {
    return $__c["a"][$__c["i"]];
  }
  static function eq_int_type($__c1, $__c2) {
    return ($__c1["a"][$__c1["i"]] === $__c2["a"][$__c2["i"]]);
  }
  static function eof() {
    return (-(1));
  }
}
class gnu_cxx_new_allocator_wchar_t {
  function __dtor() {
  }
}
class std_allocator_wchar_t extends gnu_cxx_new_allocator_wchar_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_wchar_t(...$a);
  }
  function __init_std_allocator_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_wchar_t();
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    $this->_M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider extends std_allocator_wchar_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_wchar_t();
  }
}
class std_allocator_wchar_t_rebind_wchar_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  function __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t();
  }
}
class std_char_traits_char16_t {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_char16_t {
  function __dtor() {
  }
}
class std_allocator_char16_t extends gnu_cxx_new_allocator_char16_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char16_t(...$a);
  }
  function __init_std_allocator_char16_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char16_t();
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    $this->_M_dataplus = new std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider extends std_allocator_char16_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_char16_t();
  }
}
class std_allocator_char16_t_rebind_char16_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  function __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t();
  }
}
class std_char_traits_char32_t {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_char32_t {
  function __dtor() {
  }
}
class std_allocator_char32_t extends gnu_cxx_new_allocator_char32_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char32_t(...$a);
  }
  function __init_std_allocator_char32_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char32_t();
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    $this->_M_dataplus = new std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider extends std_allocator_char32_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_char32_t();
  }
}
class std_allocator_char32_t_rebind_char32_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  function __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t();
  }
}
class std_allocator_arg_t {
  function __construct(...$a) {
    $this->__init_std_allocator_arg_t(...$a);
  }
  function __init_std_allocator_arg_t(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_uses_alloc_base {
  function __dtor() {
  }
}
class std_uses_alloc0 extends std_uses_alloc_base {
  public $_M_a;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_uses_alloc0(...$a);
  }
  function __init_std_uses_alloc0(...$a) {
    $this->_M_a = new std_uses_alloc0_Anything();
  }
  function __dtor() {
    $this->__dtor_std_uses_alloc_base();
  }
}
class std_uses_alloc0_Anything {
  function __construct(...$a) {
    $this->__init_std_uses_alloc0_Anything(...$a);
  }
  function __init_std_uses_alloc0_Anything(...$a) {
  }
  function __dtor() {
  }
}
class std_Swallow_assign {
  function __construct(...$a) {
    $this->__init_std_Swallow_assign(...$a);
  }
  function __init_std_Swallow_assign(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_Identity {
  function __construct(...$a) {
    $this->__init_std_detail_Identity(...$a);
  }
  function __init_std_detail_Identity(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_call__c__rv($__x) {
    return std_forward_1_int($__x);
  }
}
class std_detail_Select1st {
  function __construct(...$a) {
    $this->__init_std_detail_Select1st(...$a);
  }
  function __init_std_detail_Select1st(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_call__c__rv($__x) {
    return std_get_1_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__x));
  }
}
class std_detail_Hash_node_base {
  public $_M_nxt;
  function __construct(...$a) {
    $this->__init_std_detail_Hash_node_base(...$a);
  }
  function __init_std_detail_Hash_node_base(...$a) {
    $this->_M_nxt = null;
  }
  function __dtor() {
  }
}
class std_detail_Mod_range_hashing {
  function __construct(...$a) {
    $this->__init_std_detail_Mod_range_hashing(...$a);
  }
  function __init_std_detail_Mod_range_hashing(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_call__c($__num, $__den) {
    return ($__num % $__den);
  }
}
class std_detail_Default_ranged_hash {
  function __construct(...$a) {
    $this->__init_std_detail_Default_ranged_hash(...$a);
  }
  function __init_std_detail_Default_ranged_hash(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_Prime_rehash_policy {
  public $_M_max_load_factor;
  public $_M_next_resize;
  function __construct(...$a) {
    $this->__init_std_detail_Prime_rehash_policy(...$a);
  }
  function __init_std_detail_Prime_rehash_policy(...$a) {
    $this->_M_max_load_factor = (array_key_exists(0, $a) ? $a[0] : (1));
    $this->_M_next_resize = 0;
  }
  function __dtor() {
  }
  function _M_state__c() {
    return $this->_M_next_resize;
  }
  function _M_reset($__state) {
    $this->_M_next_resize = $__state;
  }
  public static $_S_growth_factor;
}
class std_locale_facet {
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_locale_facet(...$a);
  }
  function __init_std_locale_facet(...$a) {
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
  public static $_S_c_locale;
  public static $_S_c_name;
  public static $_S_once;
}
class std_locale_id {
  public $_M_index;
  function __construct(...$a) {
    $this->__init_std_locale_id(...$a);
  }
  function __init_std_locale_id(...$a) {
    $this->_M_index = 0;
  }
  function __dtor() {
  }
  public static $_S_refcount;
}
class std_locale_Impl {
  public $_M_refcount;
  public $_M_facets;
  public $_M_facets_size;
  public $_M_caches;
  public $_M_names;
  function __construct(...$a) {
    $this->__init_std_locale_Impl(...$a);
  }
  function __init_std_locale_Impl(...$a) {
    $this->_M_refcount = 0;
    $this->_M_facets = null;
    $this->_M_facets_size = 0;
    $this->_M_caches = null;
    $this->_M_names = null;
  }
  function __dtor() {
  }
  public static $_S_id_ctype;
  public static $_S_id_numeric;
  public static $_S_id_collate;
  public static $_S_id_time;
  public static $_S_id_monetary;
  public static $_S_id_messages;
  public static $_S_facet_categories;
}
class std_ios_base_Callback_list {
  public $_M_next;
  public $_M_fn;
  public $_M_index;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_ios_base_Callback_list(...$a);
  }
  function __init_std_ios_base_Callback_list(...$a) {
    $this->_M_next = null;
    $this->_M_fn = null;
    $this->_M_index = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_ios_base_Words {
  public $_M_pword;
  public $_M_iword;
  function __construct(...$a) {
    $this->__init_std_ios_base_Words(...$a);
  }
  function __init_std_ios_base_Words(...$a) {
    $this->_M_pword = null;
    $this->_M_iword = 0;
  }
  function __dtor() {
  }
}
class std_ios_base_Init {
  function __construct(...$a) {
    $this->__init_std_ios_base_Init(...$a);
  }
  function __init_std_ios_base_Init(...$a) {
  }
  function __dtor() {
  }
  public static $_S_refcount;
  public static $_S_synced_with_stdio;
}
class std_ctype_char extends std_locale_facet {
  public $_M_c_locale_ctype;
  public $_M_del;
  public $_M_toupper;
  public $_M_tolower;
  public $_M_table;
  public $_M_widen_ok;
  public $_M_widen;
  public $_M_narrow;
  public $_M_narrow_ok;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_ctype_char(...$a);
  }
  function __init_std_ctype_char(...$a) {
    $this->_M_c_locale_ctype = null;
    $this->_M_del = false;
    $this->_M_toupper = null;
    $this->_M_tolower = null;
    $this->_M_table = null;
    $this->_M_widen_ok = 0;
    $this->_M_widen = array_fill(0, 256, 0);
    $this->_M_narrow = array_fill(0, 256, 0);
    $this->_M_narrow_ok = 0;
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
    $this->__dtor_std_ctype_base();
  }
  function do_widen__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && (is_int($a[0]) || is_bool($a[0]))) {
      return $a[0] ?? null;
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      (function ($d, $s, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $s["a"][$s["i"] + $k]; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($a[2] ?? null), (function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($a[0] ?? null), (($a[1] ?? null ? ($a[1] ?? null)["i"] : 0) - ($a[0] ?? null ? ($a[0] ?? null)["i"] : 0)));
      return (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_narrow__c(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return $a[0] ?? null;
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && ($a[3] === null || is_array($a[3]))) {
      (function ($d, $s, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $s["a"][$s["i"] + $k]; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($a[3] ?? null), (function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($a[0] ?? null), (($a[1] ?? null ? ($a[1] ?? null)["i"] : 0) - ($a[0] ?? null ? ($a[0] ?? null)["i"] : 0)));
      return (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
  public static $table_size;
}
class std_basic_ios_char_std_char_traits_char extends std_ios_base {
  public $_M_tie;
  public $_M_fill;
  public $_M_fill_init;
  public $_M_streambuf;
  public $_M_ctype;
  public $_M_num_put;
  public $_M_num_get;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_ios_char_std_char_traits_char(...$a);
  }
  function __init_std_basic_ios_char_std_char_traits_char(...$a) {
    $this->_M_tie = null;
    $this->_M_fill = 0;
    $this->_M_fill_init = false;
    $this->_M_streambuf = null;
    $this->_M_ctype = null;
    $this->_M_num_put = null;
    $this->_M_num_get = null;
  }
  function __dtor() {
    $this->__dtor_std_ios_base();
  }
  function init(...$a) {  }
}
class std_basic_istream_char_std_char_traits_char extends std_basic_ios_char_std_char_traits_char {
  public $_M_gcount;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  function __init_std_basic_istream_char_std_char_traits_char(...$a) {
    $this->_M_gcount = 0;
    $this->init(null);
  }
  function __dtor() {
    $this->_M_gcount = 0;
    $this->__dtor_std_basic_ios_char_std_char_traits_char();
  }
}
class std_basic_streambuf_char_std_char_traits_char {
  public $_M_in_beg;
  public $_M_in_cur;
  public $_M_in_end;
  public $_M_out_beg;
  public $_M_out_cur;
  public $_M_out_end;
  public $_M_buf_locale;
  function __construct(...$a) {
    $this->__init_std_basic_streambuf_char_std_char_traits_char(...$a);
  }
  function __init_std_basic_streambuf_char_std_char_traits_char(...$a) {
    $this->_M_in_beg = null;
    $this->_M_in_cur = null;
    $this->_M_in_end = null;
    $this->_M_out_beg = null;
    $this->_M_out_cur = null;
    $this->_M_out_end = null;
    $this->_M_buf_locale = new std_locale();
  }
  function __dtor() {
  }
  function gptr__c() {
    return ($this->_M_in_cur ? ["a" => $this->_M_in_cur["a"], "i" => $this->_M_in_cur["i"]] : null);
  }
  function egptr__c() {
    return ($this->_M_in_end ? ["a" => $this->_M_in_end["a"], "i" => $this->_M_in_end["i"]] : null);
  }
  function gbump($__n) {
    $this->_M_in_cur["i"] += ($__n);
  }
  function pptr__c() {
    return ($this->_M_out_cur ? ["a" => $this->_M_out_cur["a"], "i" => $this->_M_out_cur["i"]] : null);
  }
  function epptr__c() {
    return ($this->_M_out_end ? ["a" => $this->_M_out_end["a"], "i" => $this->_M_out_end["i"]] : null);
  }
  function imbue($__loc) {
  }
  function setbuf($p0, $p1) {
    return ($this ? ["a" => $this["a"], "i" => $this["i"]] : null);
  }
  function seekoff($p0, $p1, $p2 = null) {
    if (func_num_args() < 3) $p2 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_152((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_152((-(1)));
  }
  function sync() {
    return 0;
  }
  function showmanyc() {
    return 0;
  }
  function xsgetn($__s, $__n) {
    $__ret = 0;
    while (($__ret < $__n)) {
       {
        $__buf_len = ["v" => ((($t35 = $this->egptr__c(), $t35) ? (($t35 = $this->egptr__c(), $t35))["i"] : 0) - (($t36 = $this->gptr__c(), $t36) ? (($t36 = $this->gptr__c(), $t36))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t38 = ($t37 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t37["a"][$t37["i"]]), $t38))["a"][(($t38 = ($t37 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t37["a"][$t37["i"]]), $t38))["i"]];
            std_char_traits_char::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t39 = $this->gptr__c(), $t39 ? ["a" => $t39["a"], "i" => $t39["i"]] : null), $__len);
            $__ret += $__len;
            $__s["i"] += ($__len);
            $this->__safe_gbump($__len);
          }
        }
        if (($__ret < $__n)) {
           {
            $__c = ["v" => $this->uflow()];
            if ((!(std_char_traits_char::eq_int_type(["a" => $__c, "i" => "v"], ["a" => [std_char_traits_char::eof()], "i" => 0])))) {
               {
                std_char_traits_char::assign($__s["i"]++, ["a" => [std_char_traits_char::to_char_type(["a" => $__c, "i" => "v"])], "i" => 0]);
                ++$__ret;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return $__ret;
  }
  function underflow() {
    return std_char_traits_char::eof();
  }
  function uflow() {
    $__ret = ["v" => std_char_traits_char::eof()];
    $__testeof = std_char_traits_char::eq_int_type(["a" => [$this->underflow()], "i" => 0], ["a" => $__ret, "i" => "v"]);
    if ((!$__testeof)) {
       {
        $__ret["v"] = std_char_traits_char::to_int_type($this->gptr__c());
        $this->gbump(1);
      }
    }
    return $__ret["v"];
  }
  function pbackfail($__c = null) {
    if (func_num_args() < 1) $__c = std_char_traits_char::eof();
    return std_char_traits_char::eof();
  }
  function xsputn($__s, $__n) {
    $__ret = 0;
    while (($__ret < $__n)) {
       {
        $__buf_len = ["v" => ((($t40 = $this->epptr__c(), $t40) ? (($t40 = $this->epptr__c(), $t40))["i"] : 0) - (($t41 = $this->pptr__c(), $t41) ? (($t41 = $this->pptr__c(), $t41))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t43 = ($t42 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t42["a"][$t42["i"]]), $t43))["a"][(($t43 = ($t42 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t42["a"][$t42["i"]]), $t43))["i"]];
            std_char_traits_char::copy(($t44 = $this->pptr__c(), $t44 ? ["a" => $t44["a"], "i" => $t44["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
            $__ret += $__len;
            $__s["i"] += ($__len);
            $this->__safe_pbump($__len);
          }
        }
        if (($__ret < $__n)) {
           {
            $__c = ["v" => $this->overflow(std_char_traits_char::to_int_type($__s))];
            if ((!(std_char_traits_char::eq_int_type(["a" => $__c, "i" => "v"], ["a" => [std_char_traits_char::eof()], "i" => 0])))) {
               {
                ++$__ret;
                ++$__s["i"];
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return $__ret;
  }
  function overflow($__c = null) {
    if (func_num_args() < 1) $__c = std_char_traits_char::eof();
    return std_char_traits_char::eof();
  }
  function __safe_gbump($__n) {
    $this->_M_in_cur["i"] += ($__n);
  }
  function __safe_pbump($__n) {
    $this->_M_out_cur["i"] += ($__n);
  }
}
class std_basic_ostream_char_std_char_traits_char extends std_basic_ios_char_std_char_traits_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  function __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    $this->init(null);
  }
  function __dtor() {
    $this->__dtor_std_basic_ios_char_std_char_traits_char();
  }
}
class std_basic_ios_wchar_t_std_char_traits_wchar_t extends std_ios_base {
  public $_M_tie;
  public $_M_fill;
  public $_M_fill_init;
  public $_M_streambuf;
  public $_M_ctype;
  public $_M_num_put;
  public $_M_num_get;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_ios_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_basic_ios_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->_M_tie = null;
    $this->_M_fill = 0;
    $this->_M_fill_init = false;
    $this->_M_streambuf = null;
    $this->_M_ctype = null;
    $this->_M_num_put = null;
    $this->_M_num_get = null;
  }
  function __dtor() {
    $this->__dtor_std_ios_base();
  }
  function init(...$a) {  }
}
class std_basic_istream_wchar_t_std_char_traits_wchar_t extends std_basic_ios_wchar_t_std_char_traits_wchar_t {
  public $_M_gcount;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_istream_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_basic_istream_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->_M_gcount = 0;
    $this->init(null);
  }
  function __dtor() {
    $this->_M_gcount = 0;
    $this->__dtor_std_basic_ios_wchar_t_std_char_traits_wchar_t();
  }
}
class std_basic_streambuf_wchar_t_std_char_traits_wchar_t {
  public $_M_in_beg;
  public $_M_in_cur;
  public $_M_in_end;
  public $_M_out_beg;
  public $_M_out_cur;
  public $_M_out_end;
  public $_M_buf_locale;
  function __construct(...$a) {
    $this->__init_std_basic_streambuf_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_basic_streambuf_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->_M_in_beg = null;
    $this->_M_in_cur = null;
    $this->_M_in_end = null;
    $this->_M_out_beg = null;
    $this->_M_out_cur = null;
    $this->_M_out_end = null;
    $this->_M_buf_locale = new std_locale();
  }
  function __dtor() {
  }
  function gptr__c() {
    return ($this->_M_in_cur ? ["a" => $this->_M_in_cur["a"], "i" => $this->_M_in_cur["i"]] : null);
  }
  function egptr__c() {
    return ($this->_M_in_end ? ["a" => $this->_M_in_end["a"], "i" => $this->_M_in_end["i"]] : null);
  }
  function gbump($__n) {
    $this->_M_in_cur["i"] += ($__n);
  }
  function pptr__c() {
    return ($this->_M_out_cur ? ["a" => $this->_M_out_cur["a"], "i" => $this->_M_out_cur["i"]] : null);
  }
  function epptr__c() {
    return ($this->_M_out_end ? ["a" => $this->_M_out_end["a"], "i" => $this->_M_out_end["i"]] : null);
  }
  function imbue($__loc) {
  }
  function setbuf($p0, $p1) {
    return ($this ? ["a" => $this["a"], "i" => $this["i"]] : null);
  }
  function seekoff($p0, $p1, $p2 = null) {
    if (func_num_args() < 3) $p2 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_152((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_152((-(1)));
  }
  function sync() {
    return 0;
  }
  function showmanyc() {
    return 0;
  }
  function xsgetn($__s, $__n) {
    $__ret = 0;
    while (($__ret < $__n)) {
       {
        $__buf_len = ["v" => ((($t45 = $this->egptr__c(), $t45) ? (($t45 = $this->egptr__c(), $t45))["i"] : 0) - (($t46 = $this->gptr__c(), $t46) ? (($t46 = $this->gptr__c(), $t46))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t48 = ($t47 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t47["a"][$t47["i"]]), $t48))["a"][(($t48 = ($t47 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t47["a"][$t47["i"]]), $t48))["i"]];
            std_char_traits_wchar_t::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t49 = $this->gptr__c(), $t49 ? ["a" => $t49["a"], "i" => $t49["i"]] : null), $__len);
            $__ret += $__len;
            $__s["i"] += ($__len);
            $this->__safe_gbump($__len);
          }
        }
        if (($__ret < $__n)) {
           {
            $__c = ["v" => $this->uflow()];
            if ((!(std_char_traits_wchar_t::eq_int_type(["a" => $__c, "i" => "v"], ["a" => [std_char_traits_wchar_t::eof()], "i" => 0])))) {
               {
                std_char_traits_wchar_t::assign($__s["i"]++, ["a" => [std_char_traits_wchar_t::to_char_type(["a" => $__c, "i" => "v"])], "i" => 0]);
                ++$__ret;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return $__ret;
  }
  function underflow() {
    return std_char_traits_wchar_t::eof();
  }
  function uflow() {
    $__ret = ["v" => std_char_traits_wchar_t::eof()];
    $__testeof = std_char_traits_wchar_t::eq_int_type(["a" => [$this->underflow()], "i" => 0], ["a" => $__ret, "i" => "v"]);
    if ((!$__testeof)) {
       {
        $__ret["v"] = std_char_traits_wchar_t::to_int_type($this->gptr__c());
        $this->gbump(1);
      }
    }
    return $__ret["v"];
  }
  function pbackfail($__c = null) {
    if (func_num_args() < 1) $__c = std_char_traits_wchar_t::eof();
    return std_char_traits_wchar_t::eof();
  }
  function xsputn($__s, $__n) {
    $__ret = 0;
    while (($__ret < $__n)) {
       {
        $__buf_len = ["v" => ((($t50 = $this->epptr__c(), $t50) ? (($t50 = $this->epptr__c(), $t50))["i"] : 0) - (($t51 = $this->pptr__c(), $t51) ? (($t51 = $this->pptr__c(), $t51))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t53 = ($t52 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t52["a"][$t52["i"]]), $t53))["a"][(($t53 = ($t52 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t52["a"][$t52["i"]]), $t53))["i"]];
            std_char_traits_wchar_t::copy(($t54 = $this->pptr__c(), $t54 ? ["a" => $t54["a"], "i" => $t54["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
            $__ret += $__len;
            $__s["i"] += ($__len);
            $this->__safe_pbump($__len);
          }
        }
        if (($__ret < $__n)) {
           {
            $__c = ["v" => $this->overflow(std_char_traits_wchar_t::to_int_type($__s))];
            if ((!(std_char_traits_wchar_t::eq_int_type(["a" => $__c, "i" => "v"], ["a" => [std_char_traits_wchar_t::eof()], "i" => 0])))) {
               {
                ++$__ret;
                ++$__s["i"];
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return $__ret;
  }
  function overflow($__c = null) {
    if (func_num_args() < 1) $__c = std_char_traits_wchar_t::eof();
    return std_char_traits_wchar_t::eof();
  }
  function __safe_gbump($__n) {
    $this->_M_in_cur["i"] += ($__n);
  }
  function __safe_pbump($__n) {
    $this->_M_out_cur["i"] += ($__n);
  }
}
class std_basic_ostream_wchar_t_std_char_traits_wchar_t extends std_basic_ios_wchar_t_std_char_traits_wchar_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_ostream_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_basic_ostream_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->init(null);
  }
  function __dtor() {
    $this->__dtor_std_basic_ios_wchar_t_std_char_traits_wchar_t();
  }
}
class std_fpos_class_152 {
  public $_M_off;
  public $_M_state;
  function __construct(...$a) {
    $this->__init_std_fpos_class_152(...$a);
  }
  function __init_std_fpos_class_152(...$a) {
    $this->_M_off = $a[0] ?? null;
    $this->_M_state = new class_152();
  }
  function __dtor() {
  }
}
class std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  function __construct(...$a) {
    $this->__init_std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool(...$a);
  }
  function __init_std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool();
  }
  function op_call__c($__x, $__y) {
    return std_operator_8_char_std_char_traits_char_std_allocator_char($__x, $__y);
  }
}
class std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->first = new std_basic_string_char_std_char_traits_char_std_allocator_char();
      $this->second = 0;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = new std_basic_string_char_std_char_traits_char_std_allocator_char();
      $this->second = 0;
    }
    else if (count($a) >= 3 && count($a) <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R && $a[2] instanceof std_tuple) {
      $this->__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [$a[1] ?? null], "i" => 0], ["a" => [$a[2] ?? null], "i" => 0], new std_Index_tuple_value0([]), new std_Index_tuple([]));
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      $this->first = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R(std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[0] ?? null)));
      $this->second = 0;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_integral_constant_bool_value0 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_bool_value0(...$a);
  }
  function __init_std_integral_constant_bool_value0(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_integral_constant_bool_value1 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_bool_value1(...$a);
  }
  function __init_std_integral_constant_bool_value1(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0();
  }
}
class std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0();
  }
}
class std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0();
  }
}
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_unsigned_long_long_value0(...$a);
  }
  function __init_std_integral_constant_unsigned_long_long_value0(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0();
  }
}
class std_is_convertible_int_R_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_R_int(...$a);
  }
  function __init_std_is_convertible_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int_R(...$a);
  }
  function __init_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_int_R {
  function __dtor() {
  }
}
class std_remove_const_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int_R(...$a);
  }
  function __init_std_is_void_helper_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int(...$a);
  }
  function __init_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_int(...$a);
  }
  function __init_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_int_std_is_array_int extends std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int();
  }
}
class std_or_std_is_void_int_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_R_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_int_R_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_R_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_R_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_R_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int_R(...$a);
  }
  function __init_std_is_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R extends std_is_lvalue_reference_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int_R(...$a);
  }
  function __init_std_not_std_is_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int_R(...$a);
  }
  function __init_std_not_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R extends std_not_std_is_reference_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_int_R_std_not_std_is_reference_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int_R extends std_add_rvalue_reference_helper_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_R_value0();
  }
}
class std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int extends std_is_convertible_int_R_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_R_int();
  }
}
class std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_enable_if_value1_void {
  function __dtor() {
  }
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value1_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
  }
}
class std_is_convertible_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_int(...$a);
  }
  function __init_std_is_convertible_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int(...$a);
  }
  function __init_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int {
  function __dtor() {
  }
}
class std_remove_volatile_int {
  function __dtor() {
  }
}
class std_remove_const_int {
  function __dtor() {
  }
}
class std_is_void_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int(...$a);
  }
  function __init_std_is_void_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int(...$a);
  }
  function __init_std_is_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int(...$a);
  }
  function __init_std_is_lvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_std_is_rvalue_reference_int {
  function __dtor() {
  }
}
class std_not_std_is_reference_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int(...$a);
  }
  function __init_std_not_std_is_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int(...$a);
  }
  function __init_std_not_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_std_not_std_is_void_int extends std_not_std_is_void_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_int();
  }
}
class std_conditional_value1_std_not_std_is_void_int_std_not_std_is_reference_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int extends std_add_rvalue_reference_helper_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int(...$a);
  }
  function __init_std_add_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_value1();
  }
}
class std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int extends std_is_convertible_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_int();
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_allow_copy_cons_value1 {
  function __dtor() {
  }
}
class std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_allow_copy_cons_value1 {
  public $_M_h;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    $this->_M_h = new std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1((array_key_exists(0, $a) ? $a[0] : (10)), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0])), (array_key_exists(2, $a) ? $a[2] : (["a" => [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0])), (array_key_exists(3, $a) ? $a[3] : (["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0])));
  }
  function __dtor() {
    $this->__dtor_std_allow_copy_cons_value1();
  }
  function size__c() {
    return $this->_M_h->size__c();
  }
  function begin() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1($this->_M_h->begin());
  }
  function end() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1($this->_M_h->end());
  }
  function count__c($__x) {
    return $this->_M_h->count__c($__x);
  }
  function op_index($__k) {
    return $this->_M_h->op_index($__k);
  }
}
class std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_default_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_default_constructible_impl();
  }
}
class std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value1_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0();
  }
}
class std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value1_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_detail_Hashtable_traits_value1_value0_value1 {
  function __dtor() {
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1 extends std_detail_Select1st {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Select1st();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1 extends std_detail_Mod_range_hashing {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Mod_range_hashing();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1 extends std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1 {
  function __construct(...$a) {
    parent::__construct($__ex);
    $this->__init_std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1(...$a);
  }
  function __init_std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1();
  }
  function _M_hash_code__c($__k) {
    return (($t55 = $this->_M_h1(), $t55["a"][$t55["i"]]))->op_call__c($__k);
  }
  function _M_bucket_index__c(...$a) {
    if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1])) && (is_int($a[2]) || is_bool($a[2]))) {
      return (($t56 = $this->_M_h2(), $t56["a"][$t56["i"]]))->op_call__c($a[1] ?? null, $a[2] ?? null);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return (($t57 = $this->_M_h2(), $t57["a"][$t57["i"]]))->op_call__c((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_hash_code, $a[1] ?? null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function _M_store_code__c($__n, $__c) {
    ($__n["a"][$__n["i"]])->_M_hash_code = $__c;
  }
  function _M_extract() {
    return std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  function _M_h1() {
    return std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  function _M_h2() {
    return std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1 extends std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1 {
  function __construct(...$a) {
    parent::__construct($__ex, $__h1, $__h2, $__hash);
    $this->__init_std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  function __init_std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
  }
  function _M_equals__c($__k, $__c, $__n) {
    return std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_long_long_value1::_S_equals($this->_M_eq(), $this->_M_extract(), $__k, $__c, ($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
  }
  function _M_eq() {
    return std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1 {
  function __construct(...$a) {
    $this->__init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1(...$a);
  }
  function __init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1(...$a) {
  }
  function __dtor() {
  }
  function op_index($__k) {
    global $std_piecewise_construct;
    $__h = ($this ? ["a" => $this["a"], "i" => $this["i"]] : null);
    $__code = ($__h["a"][$__h["i"]])->_M_hash_code__c($__k);
    $__n = ($__h["a"][$__h["i"]])->_M_bucket_index__c($__k, $__code);
    $__p = ($t58 = ($__h["a"][$__h["i"]])->_M_find_node__c($__n, $__k, $__code), $t58 ? ["a" => $t58["a"], "i" => $t58["i"]] : null);
    if ((!$__p)) {
       {
        $__p = ($t59 = ($__h["a"][$__h["i"]])->_M_allocate_node__rv(["a" => $std_piecewise_construct, "i" => "v"], ["a" => [new std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__k)], "i" => 0], ["a" => [new std_tuple([])], "i" => 0]), $t59 ? ["a" => $t59["a"], "i" => $t59["i"]] : null);
        return ["a" => ($t60 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($__h["a"][$__h["i"]])->_M_insert_unique_node($__n, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))), $t60), "i" => "second"];
      }
    }
    return ["a" => ($__p["a"][$__p["i"]])->_M_v, "i" => "second"];
  }
}
class std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  function __dtor() {
  }
}
class std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1 extends std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1(...$a);
  }
  function __init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1();
  }
}
class std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  function __construct(...$a) {
    $this->__init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  function __init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1 {
  function __dtor() {
  }
}
class std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 extends std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1 {
  public $_M_buckets;
  public $_M_bucket_count;
  public $_M_bbegin;
  public $_M_element_count;
  public $_M_rehash_policy;
  function __construct(...$a) {
    if (count($a) >= 7 && count($a) <= 7 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4])) && ($a[5] === null || is_array($a[5])) && ($a[6] === null || is_array($a[6]))) {
      parent::__construct($__exk, $__h1, $__h2, $__h, $__eq);
    }
    else if (count($a) >= 0 && count($a) <= 4 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3]))) {
      parent::__construct();
    }
    $this->__init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  function __init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
    if (count($a) >= 7 && count($a) <= 7 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4])) && ($a[5] === null || is_array($a[5])) && ($a[6] === null || is_array($a[6]))) {
      $this->_M_buckets = null;
      $this->_M_bucket_count = 0;
      $this->_M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1($a[6] ?? null);
      $this->_M_element_count = 0;
      $this->_M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      $this->_M_bucket_count = $this->_M_rehash_policy->_M_next_bkt__c($a[0] ?? null);
      $this->_M_buckets = ($t61 = $this->_M_allocate_buckets($this->_M_bucket_count), $t61 ? ["a" => $t61["a"], "i" => $t61["i"]] : null);
    }
    else if (count($a) >= 0 && count($a) <= 4 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3]))) {
      $this->__init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1((array_key_exists(0, $a) ? $a[0] : (10)), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0])), ["a" => [new std_detail_Mod_range_hashing([])], "i" => 0], ["a" => [new std_detail_Default_ranged_hash([])], "i" => 0], (array_key_exists(2, $a) ? $a[2] : (["a" => [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0])), ["a" => [new std_detail_Select1st([])], "i" => 0], (array_key_exists(3, $a) ? $a[3] : (["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0])));
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1();
    $this->__dtor_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1();
    $this->__dtor_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1();
    $this->__dtor_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1();
    $this->__dtor_std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1();
  }
  function _M_node_allocator() {
    return ["a" => $this, "i" => "_M_bbegin"];
  }
  function _M_before_begin() {
    return ["a" => $this->_M_bbegin, "i" => "_M_node"];
  }
  function _M_deallocate_node($__n) {
    (($t62 = $this->_M_node_allocator(), $t62["a"][$t62["i"]]))->destroy(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
    (($t63 = $this->_M_node_allocator(), $t63["a"][$t63["i"]]))->deallocate(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), 1);
  }
  function _M_allocate_buckets($__n) {
    $__alloc = new std_allocator_std_detail_Hash_node_base_P($this->_M_node_allocator());
    $__p = ($t64 = $__alloc->allocate($__n, ["a" => [0], "i" => 0]), $t64 ? ["a" => $t64["a"], "i" => $t64["i"]] : null);
    (function ($d, $c, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $c & 255; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__p), 0, intdiv(($__n * 8), 8));
    return ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function _M_deallocate_buckets($__p, $__n) {
    $__alloc = new std_allocator_std_detail_Hash_node_base_P($this->_M_node_allocator());
    $__alloc->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
  }
  function _M_bucket_begin__c($__bkt) {
    $__n = (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)]) ? ["a" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"], "i" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]] : null);
    return ($t65 = ($__n ? ($__n["a"][$__n["i"]])->_M_nxt : null), $t65 ? ["a" => $t65["a"], "i" => $t65["i"]] : null);
  }
  function _M_begin__c() {
    return ($t67 = (($t66 = $this->_M_before_begin(), $t66["a"][$t66["i"]]))->_M_nxt, $t67 ? ["a" => $t67["a"], "i" => $t67["i"]] : null);
  }
  function begin() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($t68 = $this->_M_begin__c(), $t68 ? ["a" => $t68["a"], "i" => $t68["i"]] : null));
  }
  function end() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(null);
  }
  function size__c() {
    return $this->_M_element_count;
  }
  function count__c($__k) {
    $__code = $this->_M_hash_code__c($__k);
    $__n = $this->_M_bucket_index__c($__k, $__code);
    $__p = ($t69 = $this->_M_bucket_begin__c($__n), $t69 ? ["a" => $t69["a"], "i" => $t69["i"]] : null);
    if ((!$__p)) {
      return 0;
    }
    $__result = 0;
    for (; ; $__p = ($t70 = ($__p["a"][$__p["i"]])->_M_next__c(), $t70 ? ["a" => $t70["a"], "i" => $t70["i"]] : null)) {
       {
        if ($this->_M_equals__c($__k, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))) {
          ++$__result;
        }
        else {
          if ($__result) {
            break;
          }
        }
        if (((!(($__p["a"][$__p["i"]])->_M_nxt)) || ($this->_M_bucket_index__c(($t71 = ($__p["a"][$__p["i"]])->_M_next__c(), $t71 ? ["a" => $t71["a"], "i" => $t71["i"]] : null)) !== $__n))) {
          break;
        }
      }
    }
    return $__result;
  }
  function _M_bucket_index__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return $this->_M_bucket_index__c((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), $this->_M_bucket_count);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return $this->_M_bucket_index__c($a[0] ?? null, $a[1] ?? null, $this->_M_bucket_count);
    }
    else { throw new Exception("no matching overload"); }
  }
  function _M_find_before_node__c($__n, $__k, $__code) {
    $__prev_p = (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)]) ? ["a" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)])["a"], "i" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)])["i"]] : null);
    if ((!$__prev_p)) {
      return null;
    }
    $__p = ((($__prev_p["a"][$__prev_p["i"]])->_M_nxt) ? ["a" => (($__prev_p["a"][$__prev_p["i"]])->_M_nxt)["a"], "i" => (($__prev_p["a"][$__prev_p["i"]])->_M_nxt)["i"]] : null);
    for (; ; $__p = ($t72 = ($__p["a"][$__p["i"]])->_M_next__c(), $t72 ? ["a" => $t72["a"], "i" => $t72["i"]] : null)) {
       {
        if ($this->_M_equals__c($__k, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))) {
          return ($__prev_p ? ["a" => $__prev_p["a"], "i" => $__prev_p["i"]] : null);
        }
        if (((!(($__p["a"][$__p["i"]])->_M_nxt)) || ($this->_M_bucket_index__c(($t73 = ($__p["a"][$__p["i"]])->_M_next__c(), $t73 ? ["a" => $t73["a"], "i" => $t73["i"]] : null)) !== $__n))) {
          break;
        }
        $__prev_p = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
      }
    }
    return null;
  }
  function _M_find_node__c($__bkt, $__key, $__c) {
    $__before_n = ($t74 = $this->_M_find_before_node__c($__bkt, $__key, $__c), $t74 ? ["a" => $t74["a"], "i" => $t74["i"]] : null);
    if ($__before_n) {
      return ((($__before_n["a"][$__before_n["i"]])->_M_nxt) ? ["a" => (($__before_n["a"][$__before_n["i"]])->_M_nxt)["a"], "i" => (($__before_n["a"][$__before_n["i"]])->_M_nxt)["i"]] : null);
    }
    return null;
  }
  function _M_insert_bucket_begin($__bkt, $__node) {
    if ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)]) {
       {
        ($__node["a"][$__node["i"]])->_M_nxt = (((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt) ? ["a" => ((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["a"], "i" => ((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["i"]] : null);
        (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
      }
    }
    else {
       {
        ($__node["a"][$__node["i"]])->_M_nxt = ($t76 = (($t75 = $this->_M_before_begin(), $t75["a"][$t75["i"]]))->_M_nxt, $t76 ? ["a" => $t76["a"], "i" => $t76["i"]] : null);
        (($t77 = $this->_M_before_begin(), $t77["a"][$t77["i"]]))->_M_nxt = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
        if (($__node["a"][$__node["i"]])->_M_nxt) {
          $this->_M_buckets["a"][$this->_M_buckets["i"] + ($this->_M_bucket_index__c(($t78 = ($__node["a"][$__node["i"]])->_M_next__c(), $t78 ? ["a" => $t78["a"], "i" => $t78["i"]] : null)))] = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
        }
        $this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)] = ($t79 = $this->_M_before_begin(), $t79 ? ["a" => $t79["a"], "i" => $t79["i"]] : null);
      }
    }
  }
  function _M_insert_unique_node($__bkt, $__code, $__node) {
    $__saved_state = ["a" => [$this->_M_rehash_policy->_M_state__c()], "i" => 0];
    $__do_rehash = new std_pair_bool_unsigned_long_long(["a" => [new std_pair_bool_unsigned_long_long($this->_M_rehash_policy->_M_need_rehash__c($this->_M_bucket_count, $this->_M_element_count, 1))], "i" => 0]);
    if (true) {
       {
        if ($__do_rehash->first) {
           {
            $this->_M_rehash($__do_rehash->second, $__saved_state);
            $__bkt = $this->_M_bucket_index__c((($t80 = $this->_M_extract(), $t80["a"][$t80["i"]]))->op_call__c__rv(["a" => $__node["a"][$__node["i"]], "i" => "_M_v"]), $__code);
          }
        }
        $this->_M_store_code__c(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null), $__code);
        $this->_M_insert_bucket_begin($__bkt, ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
        ++$this->_M_element_count;
        return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
      }
    }
    if (false) {
       {
        $this->_M_deallocate_node(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
      }
    }
  }
  function _M_rehash_aux($__n, $p1) {
    $__new_buckets = ($t81 = $this->_M_allocate_buckets($__n), $t81 ? ["a" => $t81["a"], "i" => $t81["i"]] : null);
    $__p = ($t82 = $this->_M_begin__c(), $t82 ? ["a" => $t82["a"], "i" => $t82["i"]] : null);
    (($t83 = $this->_M_before_begin(), $t83["a"][$t83["i"]]))->_M_nxt = null;
    $__bbegin_bkt = 0;
    while ($__p) {
       {
        $__next = ($t84 = ($__p["a"][$__p["i"]])->_M_next__c(), $t84 ? ["a" => $t84["a"], "i" => $t84["i"]] : null);
        $__bkt = $this->_M_bucket_index__c(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
        if ((!($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)]))) {
           {
            ($__p["a"][$__p["i"]])->_M_nxt = ($t86 = (($t85 = $this->_M_before_begin(), $t85["a"][$t85["i"]]))->_M_nxt, $t86 ? ["a" => $t86["a"], "i" => $t86["i"]] : null);
            (($t87 = $this->_M_before_begin(), $t87["a"][$t87["i"]]))->_M_nxt = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
            $__new_buckets["a"][$__new_buckets["i"] + ($__bkt)] = ($t88 = $this->_M_before_begin(), $t88 ? ["a" => $t88["a"], "i" => $t88["i"]] : null);
            if (($__p["a"][$__p["i"]])->_M_nxt) {
              $__new_buckets["a"][$__new_buckets["i"] + ($__bbegin_bkt)] = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
            }
            $__bbegin_bkt = $__bkt;
          }
        }
        else {
           {
            ($__p["a"][$__p["i"]])->_M_nxt = (((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt) ? ["a" => ((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["a"], "i" => ((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["i"]] : null);
            (($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
          }
        }
        $__p = ($__next ? ["a" => $__next["a"], "i" => $__next["i"]] : null);
      }
    }
    $this->_M_deallocate_buckets(($this->_M_buckets ? ["a" => $this->_M_buckets["a"], "i" => $this->_M_buckets["i"]] : null), $this->_M_bucket_count);
    $this->_M_bucket_count = $__n;
    $this->_M_buckets = ($__new_buckets ? ["a" => $__new_buckets["a"], "i" => $__new_buckets["i"]] : null);
  }
  function _M_rehash($__n, $__state) {
    if (true) {
       {
        $this->_M_rehash_aux($__n, new std_integral_constant_bool_value1([]));
      }
    }
    if (false) {
       {
        $this->_M_rehash_policy->_M_reset($__state["a"][$__state["i"]]);
      }
    }
  }
  function _M_allocate_node__rv($__args_0, $__args_1, $__args_2) {
    $__n = ($t90 = (($t89 = $this->_M_node_allocator(), $t89["a"][$t89["i"]]))->allocate(1, ["a" => [0], "i" => 0]), $t90 ? ["a" => $t90["a"], "i" => $t90["i"]] : null);
    if (true) {
       {
        (($t91 = $this->_M_node_allocator(), $t91["a"][$t91["i"]]))->construct__rv(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__args_1), std_forward_1_std_tuple($__args_2));
        return ($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null);
      }
    }
    if (false) {
       {
        (($t92 = $this->_M_node_allocator(), $t92["a"][$t92["i"]]))->deallocate(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), 1);
      }
    }
  }
  function op_index($__k) {
    global $std_piecewise_construct;
    $__h = ($this ? ["a" => $this["a"], "i" => $this["i"]] : null);
    $__code = ($__h["a"][$__h["i"]])->_M_hash_code__c($__k);
    $__n = ($__h["a"][$__h["i"]])->_M_bucket_index__c($__k, $__code);
    $__p = ($t93 = ($__h["a"][$__h["i"]])->_M_find_node__c($__n, $__k, $__code), $t93 ? ["a" => $t93["a"], "i" => $t93["i"]] : null);
    if ((!$__p)) {
       {
        $__p = ($t94 = ($__h["a"][$__h["i"]])->_M_allocate_node__rv(["a" => $std_piecewise_construct, "i" => "v"], ["a" => [new std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__k)], "i" => 0], ["a" => [new std_tuple([])], "i" => 0]), $t94 ? ["a" => $t94["a"], "i" => $t94["i"]] : null);
        return ["a" => ($t95 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($__h["a"][$__h["i"]])->_M_insert_unique_node($__n, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))), $t95), "i" => "second"];
      }
    }
    return ["a" => ($__p["a"][$__p["i"]])->_M_v, "i" => "second"];
  }
}
class std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_tuple_element_value1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  public $_M_cur;
  function __construct(...$a) {
    $this->__init_std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_cur = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_cur = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_incr() {
    $this->_M_cur = ($t96 = ($this->_M_cur["a"][$this->_M_cur["i"]])->_M_next__c(), $t96 ? ["a" => $t96["a"], "i" => $t96["i"]] : null);
  }
}
class std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1 extends std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __construct(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a);
  }
  function __init_std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1();
  }
  function op_mul__c() {
    return ["a" => $this->_M_cur["a"][$this->_M_cur["i"]], "i" => "_M_v"];
  }
  function op_arrow__c() {
    return ($t97 = std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => $this->_M_cur["a"][$this->_M_cur["i"]], "i" => "_M_v"]), $t97 ? ["a" => $t97["a"], "i" => $t97["i"]] : null);
  }
  function op_inc() {
    $this->_M_incr();
    return ["a" => [$this], "i" => 0];
  }
}
class std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends std_detail_Hash_node_base {
  public $_M_v;
  public $_M_hash_code;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    $this->_M_v = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((($t98 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t98))["a"][(($t98 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t98))["i"]], (($t99 = std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[1] ?? null), $t99))["a"][(($t99 = std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[1] ?? null), $t99))["i"]], (($t100 = std_forward_1_std_tuple($a[2] ?? null), $t100))["a"][(($t100 = std_forward_1_std_tuple($a[2] ?? null), $t100))["i"]]);
    $this->_M_hash_code = 0;
  }
  function __dtor() {
    $this->__dtor_std_detail_Hash_node_base();
  }
  function _M_next__c() {
    return ($this->_M_nxt ? ["a" => $this->_M_nxt["a"], "i" => $this->_M_nxt["i"]] : null);
  }
}
class std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_int {
  function __construct(...$a) {
    $this->__init_std_hash_base_unsigned_long_long_int(...$a);
  }
  function __init_std_hash_base_unsigned_long_long_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_assign($o) {
    return ["a" => [$this], "i" => 0];
  }
}
class std_hash_int extends std_hash_base_unsigned_long_long_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_hash_int(...$a);
  }
  function __init_std_hash_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_int();
  }
  function op_call__c($__val) {
    return (($__val) & 0xFFFFFFFF);
  }
  function op_assign($o) {
    return ["a" => [$this], "i" => 0];
  }
}
class std_binary_function_int_int_bool {
  function __construct(...$a) {
    $this->__init_std_binary_function_int_int_bool(...$a);
  }
  function __init_std_binary_function_int_int_bool(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_equal_to_int extends std_binary_function_int_int_bool {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_equal_to_int(...$a);
  }
  function __init_std_equal_to_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_binary_function_int_int_bool();
  }
  function op_call__c($__x, $__y) {
    return ($__x["a"][$__x["i"]] === $__y["a"][$__y["i"]]);
  }
}
class gnu_cxx_new_allocator_int {
  function __dtor() {
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_int(...$a);
  }
  function __init_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_int();
  }
}
class std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int extends std_allow_copy_cons_value1 {
  public $_M_h;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(...$a);
  }
  function __init_std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(...$a) {
    $this->_M_h = new std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1((array_key_exists(0, $a) ? $a[0] : (10)), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_hash_int([])], "i" => 0])), (array_key_exists(2, $a) ? $a[2] : (["a" => [new std_equal_to_int([])], "i" => 0])), (array_key_exists(3, $a) ? $a[3] : (["a" => [new std_allocator_int([])], "i" => 0])));
  }
  function __dtor() {
    $this->__dtor_std_allow_copy_cons_value1();
  }
  function size__c() {
    return $this->_M_h->size__c();
  }
  function begin() {
    return new std_detail_Node_iterator_int_value1_value0($this->_M_h->begin());
  }
  function end() {
    return new std_detail_Node_iterator_int_value1_value0($this->_M_h->end());
  }
  function insert($__x) {
    return new std_pair_std_detail_Node_iterator_int_value1_value0_bool($this->_M_h->insert($__x));
  }
  function count__c($__x) {
    return $this->_M_h->count__c($__x);
  }
}
class std_is_constructible_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_int_int_R(...$a);
  }
  function __init_std_is_constructible_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_constructible_impl_int_value0 extends std_is_constructible_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_impl_int_value0(...$a);
  }
  function __init_std_is_copy_constructible_impl_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_constructible_int_int_R();
  }
}
class std_is_copy_constructible_int extends std_is_copy_constructible_impl_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_int(...$a);
  }
  function __init_std_is_copy_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_impl_int_value0();
  }
}
class std_is_copy_insertable_std_allocator_int extends std_is_copy_constructible_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_insertable_std_allocator_int(...$a);
  }
  function __init_std_is_copy_insertable_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_int();
  }
}
class std_is_direct_constructible_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_int_int_R extends std_is_direct_constructible_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_int_int_R(...$a);
  }
  function __init_std_is_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_int_int_R();
  }
}
class std_is_direct_constructible_ref_cast_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_R_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_R_int(...$a);
  }
  function __init_std_is_static_castable_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_R_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_R_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_R_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_R_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_function_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_R(...$a);
  }
  function __init_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_R_std_is_function_int_R extends std_is_function_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  function __init_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int_R();
  }
}
class std_conditional_value0_std_is_void_int_R_std_is_function_int_R {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_R_std_is_function_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_R_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_R_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_R_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int();
  }
}
class std_conditional_value1_std_is_rvalue_reference_int_std_is_lvalue_reference_int_R {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_R_int_value0();
  }
}
class std_remove_reference_int_R {
  function __dtor() {
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_is_same_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_int_int(...$a);
  }
  function __init_std_is_same_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_int_int(...$a);
  }
  function __init_std_not_std_is_same_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_int_int(...$a);
  }
  function __init_std_is_base_of_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_int_int_std_is_base_of_int_int extends std_not_std_is_same_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_int_int();
  }
}
class std_conditional_value0_std_is_base_of_int_int_std_not_std_is_same_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0_std_is_static_castable_int_R_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_int_int_R extends std_is_direct_constructible_new_safe_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_int_int_R();
  }
}
class std_is_destructible_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_int(...$a);
  }
  function __init_std_is_destructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_unknown_bounds_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_extent_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_int_value0(...$a);
  }
  function __init_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_int_value0(...$a);
  }
  function __init_std_not_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_int_std_not_std_extent_int_value0 extends std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a);
  }
  function __init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int();
  }
}
class std_conditional_value0_std_not_std_extent_int_value0_std_is_array_int {
  function __dtor() {
  }
}
class std_or_std_is_array_unknown_bounds_int_std_is_function_int extends std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int();
  }
}
class std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int extends std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_int_std_is_function_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_int_std_is_function_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  function __dtor() {
  }
}
class std_is_scalar_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_int(...$a);
  }
  function __init_std_is_scalar_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_arithmetic_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_int(...$a);
  }
  function __init_std_is_arithmetic_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_integral_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_int(...$a);
  }
  function __init_std_is_integral_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_integral_helper_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_int(...$a);
  }
  function __init_std_is_integral_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_floating_point_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_int(...$a);
  }
  function __init_std_is_floating_point_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_int(...$a);
  }
  function __init_std_is_floating_point_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_int_std_is_floating_point_int extends std_is_integral_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_int_std_is_floating_point_int(...$a);
  }
  function __init_std_or_std_is_integral_int_std_is_floating_point_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_integral_int();
  }
}
class std_conditional_value1_std_is_integral_int_std_is_floating_point_int {
  function __dtor() {
  }
}
class std_is_enum_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_int(...$a);
  }
  function __init_std_is_enum_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_int(...$a);
  }
  function __init_std_is_pointer_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_int(...$a);
  }
  function __init_std_is_pointer_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_int(...$a);
  }
  function __init_std_is_member_pointer_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_int(...$a);
  }
  function __init_std_is_member_pointer_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_int(...$a);
  }
  function __init_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_arithmetic_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_arithmetic_int();
  }
}
class std_or_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_int();
  }
}
class std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_int_std_is_nullptr_t_int();
  }
}
class std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int();
  }
}
class std_conditional_value0_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_int_std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_int_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value1_std_is_arithmetic_int_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_int_std_is_scalar_int extends std_is_scalar_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_int_std_is_scalar_int(...$a);
  }
  function __init_std_or_std_is_reference_int_std_is_scalar_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_int();
  }
}
class std_conditional_value0_std_is_reference_int_std_is_scalar_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_int_value0_value1 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_int_value0_value1(...$a);
  }
  function __init_std_is_destructible_safe_int_value0_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_impl_int_int_R extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R extends std_is_direct_constructible_impl_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  function __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_int_int_R();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_R_std_is_destructible_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_R_std_is_direct_constructible_new_safe_int_int_R {
  function __dtor() {
  }
}
class std_is_fast_hash_std_hash_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_fast_hash_std_hash_int(...$a);
  }
  function __init_std_is_fast_hash_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_default_constructible_std_hash_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_std_hash_int(...$a);
  }
  function __init_std_is_default_constructible_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_std_hash_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_hash_int(...$a);
  }
  function __init_std_is_array_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_default_constructible_safe_std_hash_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_safe_std_hash_int_value0(...$a);
  }
  function __init_std_is_default_constructible_safe_std_hash_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_default_constructible_atom_std_hash_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_atom_std_hash_int(...$a);
  }
  function __init_std_is_default_constructible_atom_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_hash_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_hash_int(...$a);
  }
  function __init_std_is_void_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_hash_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_hash_int {
  function __dtor() {
  }
}
class std_remove_const_std_hash_int {
  function __dtor() {
  }
}
class std_is_void_helper_std_hash_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_hash_int(...$a);
  }
  function __init_std_is_void_helper_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_hash_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_hash_int(...$a);
  }
  function __init_std_not_std_is_void_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_default_constructible_impl_std_hash_int extends std_do_is_default_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_default_constructible_impl_std_hash_int(...$a);
  }
  function __init_std_is_default_constructible_impl_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_default_constructible_impl();
  }
}
class std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int extends std_is_default_constructible_impl_std_hash_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int(...$a);
  }
  function __init_std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_default_constructible_impl_std_hash_int();
  }
}
class std_conditional_value1_std_is_default_constructible_impl_std_hash_int_std_not_std_is_void_std_hash_int {
  function __dtor() {
  }
}
class std_is_assignable_std_hash_int_R_std_hash_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_assignable_std_hash_int_R_std_hash_int_R(...$a);
  }
  function __init_std_is_assignable_std_hash_int_R_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_assignable_impl_std_hash_int_value0 extends std_is_assignable_std_hash_int_R_std_hash_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_assignable_impl_std_hash_int_value0(...$a);
  }
  function __init_std_is_copy_assignable_impl_std_hash_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_assignable_std_hash_int_R_std_hash_int_R();
  }
}
class std_is_copy_assignable_std_hash_int extends std_is_copy_assignable_impl_std_hash_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_assignable_std_hash_int(...$a);
  }
  function __init_std_is_copy_assignable_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_assignable_impl_std_hash_int_value0();
  }
}
class std_is_assignable_helper_std_hash_int_R_std_hash_int_R extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_assignable_helper_std_hash_int_R_std_hash_int_R(...$a);
  }
  function __init_std_is_assignable_helper_std_hash_int_R_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_hash_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_hash_int_R(...$a);
  }
  function __init_std_is_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_hash_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_hash_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_hash_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_hash_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R extends std_is_lvalue_reference_std_hash_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_hash_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_hash_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_hash_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_hash_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_hash_int_R(...$a);
  }
  function __init_std_is_void_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_hash_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_hash_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_hash_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_hash_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_hash_int_R(...$a);
  }
  function __init_std_is_void_helper_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_hash_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_hash_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R extends std_not_std_is_reference_std_hash_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_hash_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_hash_int_R_std_not_std_is_reference_std_hash_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_hash_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_hash_int_R extends std_add_rvalue_reference_helper_std_hash_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_hash_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_hash_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_hash_int_R_value0();
  }
}
class std_detail_is_noexcept_hash_int_std_hash_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  function __init_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_detail_is_noexcept_hash_int_std_hash_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  function __init_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_is_noexcept_hash_int_std_hash_int();
  }
}
class std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  function __init_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int();
  }
}
class std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  function __init_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int();
  }
}
class std_conditional_value1_std_detail_is_noexcept_hash_int_std_hash_int_std_is_copy_assignable_std_hash_int {
  function __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_default_constructible_std_hash_int {
  function __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_fast_hash_std_hash_int {
  function __dtor() {
  }
}
class std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  function __init_std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_detail_Hashtable_traits_value0_value1_value1 {
  function __dtor() {
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1 extends std_detail_Identity {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Identity();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1 extends std_hash_int {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_int();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0 extends std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1 {
  function __construct(...$a) {
    parent::__construct($__ex);
    $this->__init_std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0(...$a);
  }
  function __init_std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1();
  }
  function _M_hash_code__c($__k) {
    return (($t101 = $this->_M_h1(), $t101["a"][$t101["i"]]))->op_call__c($__k["a"][$__k["i"]]);
  }
  function _M_bucket_index__c(...$a) {
    if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1])) && (is_int($a[2]) || is_bool($a[2]))) {
      return (($t102 = $this->_M_h2(), $t102["a"][$t102["i"]]))->op_call__c($a[1] ?? null, $a[2] ?? null);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return (($t107 = $this->_M_h2(), $t107["a"][$t107["i"]]))->op_call__c((($t106 = $this->_M_h1(), $t106["a"][$t106["i"]]))->op_call__c((($t105 = ($t103 = (($t104 = $this->_M_extract(), $t104["a"][$t104["i"]]))->op_call__c__rv(["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_v"]), $t103["a"][$t103["i"]]), $t105))["a"][(($t105 = ($t103 = (($t104 = $this->_M_extract(), $t104["a"][$t104["i"]]))->op_call__c__rv(["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_v"]), $t103["a"][$t103["i"]]), $t105))["i"]]), $a[1] ?? null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function _M_store_code__c($p0, $p1) {
  }
  function _M_extract() {
    return std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  function _M_h1() {
    return std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  function _M_h2() {
    return std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1 extends std_equal_to_int {
  function __construct(...$a) {
    parent::__construct($__tp);
    $this->__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1(...$a);
  }
  function __init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_equal_to_int();
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1 extends std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0 {
  function __construct(...$a) {
    parent::__construct($__ex, $__h1, $__h2, $__hash);
    $this->__init_std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  function __init_std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0();
    $this->__dtor_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1();
  }
  function _M_equals__c($__k, $__c, $__n) {
    return std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_long_long_value0::_S_equals($this->_M_eq(), $this->_M_extract(), $__k, $__c, ($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
  }
  function _M_eq() {
    return std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1::_S_get(["a" => [$this], "i" => 0]);
  }
  static function _S_get($__eboh) {
    return $__eboh["a"][$__eboh["i"]];
  }
}
class std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1 {
  function __construct(...$a) {
    $this->__init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1(...$a);
  }
  function __init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  function __dtor() {
  }
  function _M_conjure_hashtable() {
    return $this;
  }
  function insert($__v) {
    $__h = $this->_M_conjure_hashtable();
    return new std_pair_std_detail_Node_iterator_int_value1_value0_bool(($__h["a"][$__h["i"]])->_M_insert__rv($__v, new std_integral_constant_bool_value1([])));
  }
}
class std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1 extends std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1(...$a);
  }
  function __init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1();
  }
}
class std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  function __construct(...$a) {
    $this->__init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  function __init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1 {
  function __dtor() {
  }
}
class std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 extends std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1 {
  public $_M_buckets;
  public $_M_bucket_count;
  public $_M_bbegin;
  public $_M_element_count;
  public $_M_rehash_policy;
  function __construct(...$a) {
    if (count($a) >= 7 && count($a) <= 7 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4])) && ($a[5] === null || is_array($a[5])) && ($a[6] === null || is_array($a[6]))) {
      parent::__construct($__exk, $__h1, $__h2, $__h, $__eq);
    }
    else if (count($a) >= 0 && count($a) <= 4 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3]))) {
      parent::__construct();
    }
    $this->__init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  function __init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
    if (count($a) >= 7 && count($a) <= 7 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4])) && ($a[5] === null || is_array($a[5])) && ($a[6] === null || is_array($a[6]))) {
      $this->_M_buckets = null;
      $this->_M_bucket_count = 0;
      $this->_M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0($a[6] ?? null);
      $this->_M_element_count = 0;
      $this->_M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      $this->_M_bucket_count = $this->_M_rehash_policy->_M_next_bkt__c($a[0] ?? null);
      $this->_M_buckets = ($t108 = $this->_M_allocate_buckets($this->_M_bucket_count), $t108 ? ["a" => $t108["a"], "i" => $t108["i"]] : null);
    }
    else if (count($a) >= 0 && count($a) <= 4 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3]))) {
      $this->__init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1((array_key_exists(0, $a) ? $a[0] : (10)), (array_key_exists(1, $a) ? $a[1] : (["a" => [new std_hash_int([])], "i" => 0])), ["a" => [new std_detail_Mod_range_hashing([])], "i" => 0], ["a" => [new std_detail_Default_ranged_hash([])], "i" => 0], (array_key_exists(2, $a) ? $a[2] : (["a" => [new std_equal_to_int([])], "i" => 0])), ["a" => [new std_detail_Identity([])], "i" => 0], (array_key_exists(3, $a) ? $a[3] : (["a" => [new std_allocator_int([])], "i" => 0])));
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1();
    $this->__dtor_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1();
    $this->__dtor_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1();
    $this->__dtor_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1();
    $this->__dtor_std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1();
  }
  function _M_node_allocator() {
    return ["a" => $this, "i" => "_M_bbegin"];
  }
  function _M_before_begin() {
    return ["a" => $this->_M_bbegin, "i" => "_M_node"];
  }
  function _M_deallocate_node($__n) {
    (($t109 = $this->_M_node_allocator(), $t109["a"][$t109["i"]]))->destroy(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
    (($t110 = $this->_M_node_allocator(), $t110["a"][$t110["i"]]))->deallocate(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), 1);
  }
  function _M_allocate_buckets($__n) {
    $__alloc = new std_allocator_std_detail_Hash_node_base_P($this->_M_node_allocator());
    $__p = ($t111 = $__alloc->allocate($__n, ["a" => [0], "i" => 0]), $t111 ? ["a" => $t111["a"], "i" => $t111["i"]] : null);
    (function ($d, $c, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $c & 255; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__p), 0, intdiv(($__n * 8), 8));
    return ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function _M_deallocate_buckets($__p, $__n) {
    $__alloc = new std_allocator_std_detail_Hash_node_base_P($this->_M_node_allocator());
    $__alloc->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
  }
  function _M_bucket_begin__c($__bkt) {
    $__n = (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)]) ? ["a" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"], "i" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]] : null);
    return ($t112 = ($__n ? ($__n["a"][$__n["i"]])->_M_nxt : null), $t112 ? ["a" => $t112["a"], "i" => $t112["i"]] : null);
  }
  function _M_begin__c() {
    return ($t114 = (($t113 = $this->_M_before_begin(), $t113["a"][$t113["i"]]))->_M_nxt, $t114 ? ["a" => $t114["a"], "i" => $t114["i"]] : null);
  }
  function begin() {
    return new std_detail_Node_iterator_int_value1_value0(($t115 = $this->_M_begin__c(), $t115 ? ["a" => $t115["a"], "i" => $t115["i"]] : null));
  }
  function end() {
    return new std_detail_Node_iterator_int_value1_value0(null);
  }
  function size__c() {
    return $this->_M_element_count;
  }
  function count__c($__k) {
    $__code = $this->_M_hash_code__c($__k);
    $__n = $this->_M_bucket_index__c($__k, $__code);
    $__p = ($t116 = $this->_M_bucket_begin__c($__n), $t116 ? ["a" => $t116["a"], "i" => $t116["i"]] : null);
    if ((!$__p)) {
      return 0;
    }
    $__result = 0;
    for (; ; $__p = ($t117 = ($__p["a"][$__p["i"]])->_M_next__c(), $t117 ? ["a" => $t117["a"], "i" => $t117["i"]] : null)) {
       {
        if ($this->_M_equals__c($__k, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))) {
          ++$__result;
        }
        else {
          if ($__result) {
            break;
          }
        }
        if (((!(($__p["a"][$__p["i"]])->_M_nxt)) || ($this->_M_bucket_index__c(($t118 = ($__p["a"][$__p["i"]])->_M_next__c(), $t118 ? ["a" => $t118["a"], "i" => $t118["i"]] : null)) !== $__n))) {
          break;
        }
      }
    }
    return $__result;
  }
  function _M_bucket_index__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return $this->_M_bucket_index__c((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), $this->_M_bucket_count);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return $this->_M_bucket_index__c($a[0] ?? null, $a[1] ?? null, $this->_M_bucket_count);
    }
    else { throw new Exception("no matching overload"); }
  }
  function _M_find_before_node__c($__n, $__k, $__code) {
    $__prev_p = (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)]) ? ["a" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)])["a"], "i" => ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__n)])["i"]] : null);
    if ((!$__prev_p)) {
      return null;
    }
    $__p = ((($__prev_p["a"][$__prev_p["i"]])->_M_nxt) ? ["a" => (($__prev_p["a"][$__prev_p["i"]])->_M_nxt)["a"], "i" => (($__prev_p["a"][$__prev_p["i"]])->_M_nxt)["i"]] : null);
    for (; ; $__p = ($t119 = ($__p["a"][$__p["i"]])->_M_next__c(), $t119 ? ["a" => $t119["a"], "i" => $t119["i"]] : null)) {
       {
        if ($this->_M_equals__c($__k, $__code, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))) {
          return ($__prev_p ? ["a" => $__prev_p["a"], "i" => $__prev_p["i"]] : null);
        }
        if (((!(($__p["a"][$__p["i"]])->_M_nxt)) || ($this->_M_bucket_index__c(($t120 = ($__p["a"][$__p["i"]])->_M_next__c(), $t120 ? ["a" => $t120["a"], "i" => $t120["i"]] : null)) !== $__n))) {
          break;
        }
        $__prev_p = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
      }
    }
    return null;
  }
  function _M_find_node__c($__bkt, $__key, $__c) {
    $__before_n = ($t121 = $this->_M_find_before_node__c($__bkt, $__key, $__c), $t121 ? ["a" => $t121["a"], "i" => $t121["i"]] : null);
    if ($__before_n) {
      return ((($__before_n["a"][$__before_n["i"]])->_M_nxt) ? ["a" => (($__before_n["a"][$__before_n["i"]])->_M_nxt)["a"], "i" => (($__before_n["a"][$__before_n["i"]])->_M_nxt)["i"]] : null);
    }
    return null;
  }
  function _M_insert_bucket_begin($__bkt, $__node) {
    if ($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)]) {
       {
        ($__node["a"][$__node["i"]])->_M_nxt = (((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt) ? ["a" => ((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["a"], "i" => ((($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["i"]] : null);
        (($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["a"][($this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)])["i"]])->_M_nxt = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
      }
    }
    else {
       {
        ($__node["a"][$__node["i"]])->_M_nxt = ($t123 = (($t122 = $this->_M_before_begin(), $t122["a"][$t122["i"]]))->_M_nxt, $t123 ? ["a" => $t123["a"], "i" => $t123["i"]] : null);
        (($t124 = $this->_M_before_begin(), $t124["a"][$t124["i"]]))->_M_nxt = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
        if (($__node["a"][$__node["i"]])->_M_nxt) {
          $this->_M_buckets["a"][$this->_M_buckets["i"] + ($this->_M_bucket_index__c(($t125 = ($__node["a"][$__node["i"]])->_M_next__c(), $t125 ? ["a" => $t125["a"], "i" => $t125["i"]] : null)))] = ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null);
        }
        $this->_M_buckets["a"][$this->_M_buckets["i"] + ($__bkt)] = ($t126 = $this->_M_before_begin(), $t126 ? ["a" => $t126["a"], "i" => $t126["i"]] : null);
      }
    }
  }
  function _M_insert_unique_node($__bkt, $__code, $__node) {
    $__saved_state = ["a" => [$this->_M_rehash_policy->_M_state__c()], "i" => 0];
    $__do_rehash = new std_pair_bool_unsigned_long_long(["a" => [new std_pair_bool_unsigned_long_long($this->_M_rehash_policy->_M_need_rehash__c($this->_M_bucket_count, $this->_M_element_count, 1))], "i" => 0]);
    if (true) {
       {
        if ($__do_rehash->first) {
           {
            $this->_M_rehash($__do_rehash->second, $__saved_state);
            $__bkt = $this->_M_bucket_index__c((($t127 = $this->_M_extract(), $t127["a"][$t127["i"]]))->op_call__c__rv(["a" => $__node["a"][$__node["i"]], "i" => "_M_v"]), $__code);
          }
        }
        $this->_M_store_code__c(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null), $__code);
        $this->_M_insert_bucket_begin($__bkt, ($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
        ++$this->_M_element_count;
        return new std_detail_Node_iterator_int_value1_value0(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
      }
    }
    if (false) {
       {
        $this->_M_deallocate_node(($__node ? ["a" => $__node["a"], "i" => $__node["i"]] : null));
      }
    }
  }
  function _M_rehash_aux($__n, $p1) {
    $__new_buckets = ($t128 = $this->_M_allocate_buckets($__n), $t128 ? ["a" => $t128["a"], "i" => $t128["i"]] : null);
    $__p = ($t129 = $this->_M_begin__c(), $t129 ? ["a" => $t129["a"], "i" => $t129["i"]] : null);
    (($t130 = $this->_M_before_begin(), $t130["a"][$t130["i"]]))->_M_nxt = null;
    $__bbegin_bkt = 0;
    while ($__p) {
       {
        $__next = ($t131 = ($__p["a"][$__p["i"]])->_M_next__c(), $t131 ? ["a" => $t131["a"], "i" => $t131["i"]] : null);
        $__bkt = $this->_M_bucket_index__c(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
        if ((!($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)]))) {
           {
            ($__p["a"][$__p["i"]])->_M_nxt = ($t133 = (($t132 = $this->_M_before_begin(), $t132["a"][$t132["i"]]))->_M_nxt, $t133 ? ["a" => $t133["a"], "i" => $t133["i"]] : null);
            (($t134 = $this->_M_before_begin(), $t134["a"][$t134["i"]]))->_M_nxt = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
            $__new_buckets["a"][$__new_buckets["i"] + ($__bkt)] = ($t135 = $this->_M_before_begin(), $t135 ? ["a" => $t135["a"], "i" => $t135["i"]] : null);
            if (($__p["a"][$__p["i"]])->_M_nxt) {
              $__new_buckets["a"][$__new_buckets["i"] + ($__bbegin_bkt)] = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
            }
            $__bbegin_bkt = $__bkt;
          }
        }
        else {
           {
            ($__p["a"][$__p["i"]])->_M_nxt = (((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt) ? ["a" => ((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["a"], "i" => ((($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt)["i"]] : null);
            (($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["a"][($__new_buckets["a"][$__new_buckets["i"] + ($__bkt)])["i"]])->_M_nxt = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
          }
        }
        $__p = ($__next ? ["a" => $__next["a"], "i" => $__next["i"]] : null);
      }
    }
    $this->_M_deallocate_buckets(($this->_M_buckets ? ["a" => $this->_M_buckets["a"], "i" => $this->_M_buckets["i"]] : null), $this->_M_bucket_count);
    $this->_M_bucket_count = $__n;
    $this->_M_buckets = ($__new_buckets ? ["a" => $__new_buckets["a"], "i" => $__new_buckets["i"]] : null);
  }
  function _M_rehash($__n, $__state) {
    if (true) {
       {
        $this->_M_rehash_aux($__n, new std_integral_constant_bool_value1([]));
      }
    }
    if (false) {
       {
        $this->_M_rehash_policy->_M_reset($__state["a"][$__state["i"]]);
      }
    }
  }
  function _M_insert__rv($__v, $p1) {
    $__k = (($t136 = $this->_M_extract(), $t136["a"][$t136["i"]]))->op_call__c__rv($__v);
    $__code = $this->_M_hash_code__c($__k);
    $__bkt = $this->_M_bucket_index__c($__k, $__code);
    $__n = ["v" => ($t137 = $this->_M_find_node__c($__bkt, $__k, $__code), $t137 ? ["a" => $t137["a"], "i" => $t137["i"]] : null)];
    if ($__n["v"]) {
      return new std_pair_std_detail_Node_iterator_int_value1_value0_bool(std_make_pair_std_detail_Node_iterator_int_value1_value0_bool(["a" => [new std_detail_Node_iterator_int_value1_value0((($__n["v"]) ? ["a" => ($__n["v"])["a"], "i" => ($__n["v"])["i"]] : null))], "i" => 0], ["a" => [false], "i" => 0]));
    }
    $__n["v"] = ($t138 = $this->_M_allocate_node__rv(std_forward_1_int($__v)), $t138 ? ["a" => $t138["a"], "i" => $t138["i"]] : null);
    return new std_pair_std_detail_Node_iterator_int_value1_value0_bool(std_make_pair_std_detail_Node_iterator_int_value1_value0_bool(["a" => [new std_detail_Node_iterator_int_value1_value0($this->_M_insert_unique_node($__bkt, $__code, (($__n["v"]) ? ["a" => ($__n["v"])["a"], "i" => ($__n["v"])["i"]] : null)))], "i" => 0], ["a" => [true], "i" => 0]));
  }
  function _M_allocate_node__rv($__args_0) {
    $__n = ($t140 = (($t139 = $this->_M_node_allocator(), $t139["a"][$t139["i"]]))->allocate(1, ["a" => [0], "i" => 0]), $t140 ? ["a" => $t140["a"], "i" => $t140["i"]] : null);
    if (true) {
       {
        (($t141 = $this->_M_node_allocator(), $t141["a"][$t141["i"]]))->construct__rv(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), std_forward_1_int($__args_0));
        return ($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null);
      }
    }
    if (false) {
       {
        (($t142 = $this->_M_node_allocator(), $t142["a"][$t142["i"]]))->deallocate(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null), 1);
      }
    }
  }
}
class std_initializer_list_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_int(...$a);
  }
  function __init_std_initializer_list_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_detail_Node_iterator_base_int_value0 {
  public $_M_cur;
  function __construct(...$a) {
    $this->__init_std_detail_Node_iterator_base_int_value0(...$a);
  }
  function __init_std_detail_Node_iterator_base_int_value0(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_cur = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_cur = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_cur)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_incr() {
    $this->_M_cur = ($t143 = ($this->_M_cur["a"][$this->_M_cur["i"]])->_M_next__c(), $t143 ? ["a" => $t143["a"], "i" => $t143["i"]] : null);
  }
}
class std_detail_Node_const_iterator_int_value1_value0 extends std_detail_Node_iterator_base_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_Node_const_iterator_int_value1_value0(...$a);
  }
  function __init_std_detail_Node_const_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_detail_Node_iterator_base_int_value0();
  }
}
class std_detail_Hash_node_int_value0 extends std_detail_Hash_node_base {
  public $_M_v;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_detail_Hash_node_int_value0(...$a);
  }
  function __init_std_detail_Hash_node_int_value0(...$a) {
    $this->_M_v = (($t145 = ($t144 = std_forward_1_int($a[0] ?? null), $t144["a"][$t144["i"]]), $t145))["a"][(($t145 = ($t144 = std_forward_1_int($a[0] ?? null), $t144["a"][$t144["i"]]), $t145))["i"]];
  }
  function __dtor() {
    $this->__dtor_std_detail_Hash_node_base();
  }
  function _M_next__c() {
    return ($this->_M_nxt ? ["a" => $this->_M_nxt["a"], "i" => $this->_M_nxt["i"]] : null);
  }
}
class std_detail_Node_iterator_int_value1_value0 extends std_detail_Node_iterator_base_int_value0 {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct(null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_detail_Node_iterator_int_value1_value0(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_detail_Node_iterator_base_int_value0();
  }
  function op_mul__c() {
    return ["a" => $this->_M_cur["a"][$this->_M_cur["i"]], "i" => "_M_v"];
  }
  function op_inc() {
    $this->_M_incr();
    return ["a" => [$this], "i" => 0];
  }
}
class std_pair_std_detail_Node_iterator_int_value1_value0_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_detail_Node_iterator_int_value1_value0_bool(...$a);
  }
  function __init_std_pair_std_detail_Node_iterator_int_value1_value0_bool(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = new std_detail_Node_iterator_int_value1_value0();
      $this->second = false;
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = new std_detail_Node_iterator_int_value1_value0(std_forward_1_std_detail_Node_iterator_int_value1_value0($a[0] ?? null));
      $this->second = (($t147 = ($t146 = std_forward_1_bool($a[1] ?? null), $t146["a"][$t146["i"]]), $t147))["a"][(($t147 = ($t146 = std_forward_1_bool($a[1] ?? null), $t146["a"][$t146["i"]]), $t147))["i"]];
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_detail_Node_iterator_int_value1_value0_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_detail_Node_iterator_int_value1_value0_R {
  function __dtor() {
  }
}
class std_remove_const_std_detail_Node_iterator_int_value1_value0_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_function_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_detail_Node_iterator_int_value1_value0();
  }
}
class std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0();
  }
}
class std_conditional_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0();
  }
}
class std_is_convertible_bool_R_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_bool_R(...$a);
  }
  function __init_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_bool_R {
  function __dtor() {
  }
}
class std_remove_volatile_bool_R {
  function __dtor() {
  }
}
class std_remove_const_bool_R {
  function __dtor() {
  }
}
class std_is_void_helper_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_bool_R(...$a);
  }
  function __init_std_is_void_helper_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_bool(...$a);
  }
  function __init_std_is_function_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_bool(...$a);
  }
  function __init_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_bool_std_is_array_bool extends std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_bool();
  }
}
class std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_bool_std_is_array_bool();
  }
}
class std_conditional_value0_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_bool_R_std_or_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_is_convertible_helper_bool_R_bool_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_bool_R_bool_value0(...$a);
  }
  function __init_std_is_convertible_helper_bool_R_bool_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_bool_R(...$a);
  }
  function __init_std_is_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_bool_R(...$a);
  }
  function __init_std_is_lvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_bool_R(...$a);
  }
  function __init_std_is_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R extends std_is_lvalue_reference_bool_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_bool_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_bool_R(...$a);
  }
  function __init_std_not_std_is_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_bool_R(...$a);
  }
  function __init_std_not_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R extends std_not_std_is_reference_bool_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_bool_R();
  }
}
class std_conditional_value0_std_not_std_is_void_bool_R_std_not_std_is_reference_bool_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_bool_R extends std_add_rvalue_reference_helper_bool_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_bool_R(...$a);
  }
  function __init_std_add_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_bool_R_value0();
  }
}
class std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_R_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_remove_volatile_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_remove_const_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_is_void_helper_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0();
  }
}
class std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0();
  }
}
class std_conditional_value1_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1();
  }
}
class std_is_convertible_bool_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_bool(...$a);
  }
  function __init_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_bool {
  function __dtor() {
  }
}
class std_remove_volatile_bool {
  function __dtor() {
  }
}
class std_remove_const_bool {
  function __dtor() {
  }
}
class std_is_void_helper_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_bool(...$a);
  }
  function __init_std_is_void_helper_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_bool_std_is_array_bool();
  }
}
class std_conditional_value0_std_is_void_bool_std_or_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_is_convertible_helper_bool_bool_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_bool_bool_value0(...$a);
  }
  function __init_std_is_convertible_helper_bool_bool_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_bool(...$a);
  }
  function __init_std_is_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_bool(...$a);
  }
  function __init_std_is_lvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_bool(...$a);
  }
  function __init_std_is_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool extends std_is_rvalue_reference_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_bool();
  }
}
class std_conditional_value0_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool {
  function __dtor() {
  }
}
class std_not_std_is_reference_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_bool(...$a);
  }
  function __init_std_not_std_is_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_bool(...$a);
  }
  function __init_std_not_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool extends std_not_std_is_void_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a);
  }
  function __init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_bool();
  }
}
class std_conditional_value1_std_not_std_is_void_bool_std_not_std_is_reference_bool {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_bool extends std_add_rvalue_reference_helper_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_bool(...$a);
  }
  function __init_std_add_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_bool_value1();
  }
}
class std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_conditional_value1_int_R_int_R {
  function __dtor() {
  }
}
class std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int_R(...$a);
  }
  function __init_std_declval_protector_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int(...$a);
  }
  function __init_std_declval_protector_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_hash_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_hash_int_R(...$a);
  }
  function __init_std_declval_protector_std_hash_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_conditional_value1_std_pair_std_detail_Node_iterator_int_value1_value0_bool_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_declval_protector_std_detail_Node_iterator_int_value1_value0_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  function __init_std_declval_protector_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_bool_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_bool_R(...$a);
  }
  function __init_std_declval_protector_bool_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_detail_Node_iterator_int_value1_value0 {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  function __init_std_declval_protector_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_bool {
  function __construct(...$a) {
    $this->__init_std_declval_protector_bool(...$a);
  }
  function __init_std_declval_protector_bool(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_conditional_value0_std_detail_Identity_std_detail_Select1st {
  function __dtor() {
  }
}
class std_Tuple_impl_value1 {
  function __construct(...$a) {
    $this->__init_std_Tuple_impl_value1(...$a);
  }
  function __init_std_Tuple_impl_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  public $_M_head_impl;
  function __construct(...$a) {
    $this->__init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a);
  }
  function __init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a) {
    $this->_M_head_impl = $a[0] ?? null;
  }
  function __dtor() {
  }
  static function _M_head($__b) {
    return ($__b["a"][$__b["i"]])->_M_head_impl;
  }
}
class std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_Tuple_impl_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
    $this->_M_head_impl = null;
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value1();
    $this->__dtor_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0();
  }
  static function _M_head($__t) {
    return std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0::_M_head($__t);
  }
}
class std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct($__elements_0);
    $this->__init_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_tuple {
  function __construct(...$a) {
    $this->__init_std_tuple(...$a);
  }
  function __init_std_tuple(...$a) {
  }
  function __dtor() {
  }
}
class std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_is_integer_char_P {
  function __dtor() {
  }
}
class std_conditional_value1_std_detail_Identity_std_detail_Select1st {
  function __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t148 = operatornew__unsigned_long_long(($__n * 29)), $t148 ? ["a" => $t148["a"], "i" => $t148["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 29);
  }
  function construct__rv($__p, $__args_0, $__args_1, $__args_2) {
    (($__p["a"][$__p["i"]] = new std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__args_1), std_forward_1_std_tuple($__args_2))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1();
  }
}
class std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  public $_M_node;
  function __construct(...$a) {
    parent::__construct(std_forward_1_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__a));
    $this->__init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    $this->_M_node = new std_detail_Hash_node_base();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1();
  }
}
class std_remove_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple {
  function __dtor() {
  }
}
class std_pair_bool_unsigned_long_long {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_bool_unsigned_long_long(...$a);
  }
  function __init_std_pair_bool_unsigned_long_long(...$a) {
    $this->first = false;
    $this->second = 0;
  }
  function __dtor() {
  }
}
class std_is_convertible_unsigned_long_long_R_unsigned_long_long extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a);
  }
  function __init_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_unsigned_long_long_R(...$a);
  }
  function __init_std_is_void_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_unsigned_long_long_R {
  function __dtor() {
  }
}
class std_remove_volatile_unsigned_long_long_R {
  function __dtor() {
  }
}
class std_remove_const_unsigned_long_long_R {
  function __dtor() {
  }
}
class std_is_void_helper_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_unsigned_long_long_R(...$a);
  }
  function __init_std_is_void_helper_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_unsigned_long_long(...$a);
  }
  function __init_std_is_function_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unsigned_long_long(...$a);
  }
  function __init_std_is_array_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_is_array_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  function __init_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_unsigned_long_long();
  }
}
class std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  function __init_std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long();
  }
}
class std_conditional_value0_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_unsigned_long_long_R_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  function __dtor() {
  }
}
class std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0(...$a);
  }
  function __init_std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_is_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_is_lvalue_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_is_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R extends std_is_lvalue_reference_unsigned_long_long_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_unsigned_long_long_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_not_std_is_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_unsigned_long_long_R(...$a);
  }
  function __init_std_not_std_is_void_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R extends std_not_std_is_reference_unsigned_long_long_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_unsigned_long_long_R();
  }
}
class std_conditional_value0_std_not_std_is_void_unsigned_long_long_R_std_not_std_is_reference_unsigned_long_long_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_long_long_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_long_long_R extends std_add_rvalue_reference_helper_unsigned_long_long_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_unsigned_long_long_R(...$a);
  }
  function __init_std_add_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_unsigned_long_long_R_value0();
  }
}
class std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long extends std_is_convertible_unsigned_long_long_R_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a);
  }
  function __init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_unsigned_long_long_R_unsigned_long_long();
  }
}
class std_conditional_value1_std_is_convertible_unsigned_long_long_R_unsigned_long_long_std_is_convertible_bool_R_bool {
  function __dtor() {
  }
}
class std_is_convertible_unsigned_long_long_unsigned_long_long extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a);
  }
  function __init_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_unsigned_long_long(...$a);
  }
  function __init_std_is_void_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_unsigned_long_long {
  function __dtor() {
  }
}
class std_remove_volatile_unsigned_long_long {
  function __dtor() {
  }
}
class std_remove_const_unsigned_long_long {
  function __dtor() {
  }
}
class std_is_void_helper_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_unsigned_long_long(...$a);
  }
  function __init_std_is_void_helper_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  function __init_std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long();
  }
}
class std_conditional_value0_std_is_void_unsigned_long_long_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  function __dtor() {
  }
}
class std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0(...$a);
  }
  function __init_std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_unsigned_long_long(...$a);
  }
  function __init_std_is_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_unsigned_long_long(...$a);
  }
  function __init_std_is_lvalue_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_unsigned_long_long(...$a);
  }
  function __init_std_is_rvalue_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long extends std_is_rvalue_reference_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_unsigned_long_long();
  }
}
class std_conditional_value0_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long {
  function __dtor() {
  }
}
class std_not_std_is_reference_unsigned_long_long extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_unsigned_long_long(...$a);
  }
  function __init_std_not_std_is_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_unsigned_long_long extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_unsigned_long_long(...$a);
  }
  function __init_std_not_std_is_void_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long extends std_not_std_is_void_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long(...$a);
  }
  function __init_std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_unsigned_long_long();
  }
}
class std_conditional_value1_std_not_std_is_void_unsigned_long_long_std_not_std_is_reference_unsigned_long_long {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_long_long_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_long_long extends std_add_rvalue_reference_helper_unsigned_long_long_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_unsigned_long_long(...$a);
  }
  function __init_std_add_rvalue_reference_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_unsigned_long_long_value1();
  }
}
class std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long extends std_is_convertible_unsigned_long_long_unsigned_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a);
  }
  function __init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_unsigned_long_long_unsigned_long_long();
  }
}
class std_conditional_value1_std_is_convertible_unsigned_long_long_unsigned_long_long_std_is_convertible_bool_bool {
  function __dtor() {
  }
}
class std_tuple_element_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_iterator_traits_char_P {
  function __dtor() {
  }
}
class std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_long_long_value1 {
  function __dtor() {
  }
  static function _S_equals($__eq, $__extract, $__k, $__c, $__n) {
    return (($__c === ($__n["a"][$__n["i"]])->_M_hash_code) && $this->op_call__c($__k, $this->op_call__c__rv(["a" => $__n["a"][$__n["i"]], "i" => "_M_v"])));
  }
}
class std_allocator_int_rebind_std_detail_Hash_node_int_value0 {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_int_value0 {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t149 = operatornew__unsigned_long_long(($__n * 12)), $t149 ? ["a" => $t149["a"], "i" => $t149["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 12);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_detail_Hash_node_int_value0(std_forward_1_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_detail_Hash_node_int_value0 extends gnu_cxx_new_allocator_std_detail_Hash_node_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_detail_Hash_node_int_value0(...$a);
  }
  function __init_std_allocator_std_detail_Hash_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_detail_Hash_node_int_value0();
  }
}
class std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0 extends std_allocator_std_detail_Hash_node_int_value0 {
  public $_M_node;
  function __construct(...$a) {
    parent::__construct(std_forward_1_std_allocator_int($__a));
    $this->__init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0(...$a);
  }
  function __init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0(...$a) {
    $this->_M_node = new std_detail_Hash_node_base();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_detail_Hash_node_int_value0();
  }
}
class std_decay_and_strip_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_decay_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_remove_reference_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_decay_selector_std_detail_Node_iterator_int_value1_value0_value0_value0 {
  function __dtor() {
  }
}
class std_strip_reference_wrapper_std_detail_Node_iterator_int_value1_value0 {
  function __dtor() {
  }
}
class std_decay_and_strip_bool {
  function __dtor() {
  }
}
class std_decay_bool {
  function __dtor() {
  }
}
class std_remove_reference_bool {
  function __dtor() {
  }
}
class std_decay_selector_bool_value0_value0 {
  function __dtor() {
  }
}
class std_strip_reference_wrapper_bool {
  function __dtor() {
  }
}
class std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_long_long_value0 {
  function __dtor() {
  }
  static function _S_equals($__eq, $__extract, $__k, $p3, $__n) {
    return $this->op_call__c($__k, $this->op_call__c__rv(["a" => $__n["a"][$__n["i"]], "i" => "_M_v"]));
  }
}
class std_remove_reference_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_base_P {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_base_P {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t150 = operatornew__unsigned_long_long(($__n * 8)), $t150 ? ["a" => $t150["a"], "i" => $t150["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 8);
  }
}
class std_allocator_std_detail_Hash_node_base_P extends gnu_cxx_new_allocator_std_detail_Hash_node_base_P {
  function __construct(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct();
    }
    $this->__init_std_allocator_std_detail_Hash_node_base_P(...$a);
  }
  function __init_std_allocator_std_detail_Hash_node_base_P(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_detail_Hash_node_base_P();
  }
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base(...$a);
  }
  function __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_uses_alloc_base(...$a);
  }
  function __init_std_is_function_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_is_array_std_uses_alloc_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_uses_alloc_base();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base();
  }
}
class std_conditional_value0_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_declval_protector_unsigned_long_long_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_unsigned_long_long_R(...$a);
  }
  function __init_std_declval_protector_unsigned_long_long_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_unsigned_long_long {
  function __construct(...$a) {
    $this->__init_std_declval_protector_unsigned_long_long(...$a);
  }
  function __init_std_declval_protector_unsigned_long_long(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_pair_get_value0 {
  function __dtor() {
  }
  static function __move_get__rv($__pair) {
    return std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => $__pair["a"][$__pair["i"]], "i" => "first"]);
  }
}
class std_remove_reference_std_allocator_int {
  function __dtor() {
  }
}
class std_allocator_int_rebind_std_detail_Hash_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_volatile_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_const_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_is_void_helper_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_void_helper_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_lvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t extends std_is_rvalue_reference_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_piecewise_construct_t();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_not_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t extends std_not_std_is_void_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_piecewise_construct_t();
  }
}
class std_conditional_value1_std_not_std_is_void_std_piecewise_construct_t_std_not_std_is_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_piecewise_construct_t extends std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_add_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_piecewise_construct_t_value1();
  }
}
class std_initializer_list_char {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_char(...$a);
  }
  function __init_std_initializer_list_char(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_enable_if_value0_void {
  function __dtor() {
  }
}
class std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a);
  }
  function __init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_const_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1();
  }
}
class std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int extends std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_declval_protector_std_piecewise_construct_t {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_piecewise_construct_t(...$a);
  }
  function __init_std_declval_protector_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_Build_index_tuple_value1 {
  function __dtor() {
  }
}
class std_Build_index_tuple_value0 {
  function __dtor() {
  }
}
class std_Index_tuple {
  function __construct(...$a) {
    $this->__init_std_Index_tuple(...$a);
  }
  function __init_std_Index_tuple(...$a) {
  }
  function __dtor() {
  }
}
class std_Index_tuple_value0 {
  function __construct(...$a) {
    $this->__init_std_Index_tuple_value0(...$a);
  }
  function __init_std_Index_tuple_value0(...$a) {
  }
  function __dtor() {
  }
}
class std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int(...$a);
  }
  function __init_std_is_convertible_std_tuple_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_tuple(...$a);
  }
  function __init_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_tuple {
  function __dtor() {
  }
}
class std_remove_volatile_std_tuple {
  function __dtor() {
  }
}
class std_remove_const_std_tuple {
  function __dtor() {
  }
}
class std_is_void_helper_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_tuple(...$a);
  }
  function __init_std_is_void_helper_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_tuple(...$a);
  }
  function __init_std_is_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_tuple(...$a);
  }
  function __init_std_is_lvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_is_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple extends std_is_rvalue_reference_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_tuple();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_tuple(...$a);
  }
  function __init_std_not_std_is_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_tuple(...$a);
  }
  function __init_std_not_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple extends std_not_std_is_void_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_tuple();
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_std_not_std_is_reference_std_tuple {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple extends std_add_rvalue_reference_helper_std_tuple_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_add_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_tuple_value1();
  }
}
class std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int extends std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_declval_protector_std_tuple {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_tuple(...$a);
  }
  function __init_std_declval_protector_std_tuple(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_tuple_element_value0_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_c_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_add_r_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class gnu_cxx_numeric_traits_integer_int {
  function __construct(...$a) {
    $this->__init_gnu_cxx_numeric_traits_integer_int(...$a);
  }
  function __init_gnu_cxx_numeric_traits_integer_int(...$a) {
  }
  function __dtor() {
  }
  public static $__min;
  public static $__max;
  public static $__is_signed;
  public static $__digits;
}
class gnu_cxx_numeric_traits_int extends gnu_cxx_numeric_traits_integer_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_gnu_cxx_numeric_traits_int(...$a);
  }
  function __init_gnu_cxx_numeric_traits_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_numeric_traits_integer_int();
  }
}
class std_iterator_std_output_iterator_tag_void_void_void_void {
  function __construct(...$a) {
    $this->__init_std_iterator_std_output_iterator_tag_void_void_void_void(...$a);
  }
  function __init_std_iterator_std_output_iterator_tag_void_void_void_void(...$a) {
  }
  function __dtor() {
  }
}
class std_ostreambuf_iterator_char_std_char_traits_char extends std_iterator_std_output_iterator_tag_void_void_void_void {
  public $_M_sbuf;
  public $_M_failed;
  function __construct(...$a) {
    parent::__construct($o);
    $this->__init_std_ostreambuf_iterator_char_std_char_traits_char(...$a);
  }
  function __init_std_ostreambuf_iterator_char_std_char_traits_char(...$a) {
    $this->_M_sbuf = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_failed = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_failed;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_output_iterator_tag_void_void_void_void();
  }
  function op_assign($o) {
    $this->_M_sbuf = ((($o["a"][$o["i"]])->_M_sbuf) ? ["a" => (($o["a"][$o["i"]])->_M_sbuf)["a"], "i" => (($o["a"][$o["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_failed = ($o["a"][$o["i"]])->_M_failed;
    return ["a" => [$this], "i" => 0];
  }
}
class std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char extends std_locale_facet {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char(...$a);
  }
  function __init_std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
  }
  function do_put__c(...$a) {
    if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_char_std_char_traits_char($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_char_std_char_traits_char($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_char_std_char_traits_char($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_char_std_char_traits_char($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && ($a[3] === null || is_array($a[3]))) {
      $__flags = (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags__c();
      $__fmt = (~((std_ios_base::$basefield | std_ios_base::$uppercase)));
      (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags((($__flags & $__fmt) | (std_ios_base::$hex | std_ios_base::$showbase)));
      ($a[0] ?? null)->op_assign(["a" => [new std_ostreambuf_iterator_char_std_char_traits_char($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, (($a[3] ?? null) & 0xFFFFFFFF)))], "i" => 0]);
      (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags($__flags);
      return $a[0] ?? null;
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
}
class std_iterator_std_input_iterator_tag_char_long_long_char_P_char {
  function __construct(...$a) {
    $this->__init_std_iterator_std_input_iterator_tag_char_long_long_char_P_char(...$a);
  }
  function __init_std_iterator_std_input_iterator_tag_char_long_long_char_P_char(...$a) {
  }
  function __dtor() {
  }
}
class std_istreambuf_iterator_char_std_char_traits_char extends std_iterator_std_input_iterator_tag_char_long_long_char_P_char {
  public $_M_sbuf;
  public $_M_c;
  function __construct(...$a) {
    parent::__construct($o);
    $this->__init_std_istreambuf_iterator_char_std_char_traits_char(...$a);
  }
  function __init_std_istreambuf_iterator_char_std_char_traits_char(...$a) {
    $this->_M_sbuf = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_c = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_c;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_input_iterator_tag_char_long_long_char_P_char();
  }
  function op_assign($o) {
    $this->_M_sbuf = ((($o["a"][$o["i"]])->_M_sbuf) ? ["a" => (($o["a"][$o["i"]])->_M_sbuf)["a"], "i" => (($o["a"][$o["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_c = ($o["a"][$o["i"]])->_M_c;
    return ["a" => [$this], "i" => 0];
  }
}
class std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char extends std_locale_facet {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char(...$a);
  }
  function __init_std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
  }
  function do_get__c(...$a) {
    if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      $__fmt = (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags__c();
      (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags((($__fmt & (~(std_ios_base::$basefield))) | std_ios_base::$hex));
      $__ul = ["v" => 0];
      ($a[0] ?? null)->op_assign(["a" => [new std_istreambuf_iterator_char_std_char_traits_char($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, ["a" => $__ul, "i" => "v"]))], "i" => 0]);
      (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags($__fmt);
      ($a[4] ?? null)["a"][($a[4] ?? null)["i"]] = (($__ul["v"]) ? ["a" => ($__ul["v"])["a"], "i" => ($__ul["v"])["i"]] : null);
      return $a[0] ?? null;
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
}
class std_ctype_abstract_base_wchar_t extends std_locale_facet {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_ctype_abstract_base_wchar_t(...$a);
  }
  function __init_std_ctype_abstract_base_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
    $this->__dtor_std_ctype_base();
  }
  function do_is__c(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_scan_is__c($__m, $__lo, $__hi) {
    throw new Exception("pure virtual called");
  }
  function do_scan_not__c($__m, $__lo, $__hi) {
    throw new Exception("pure virtual called");
  }
  function do_toupper__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && (is_int($a[0]) || is_bool($a[0]))) {
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_tolower__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && (is_int($a[0]) || is_bool($a[0]))) {
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_widen__c(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && (is_int($a[0]) || is_bool($a[0]))) {
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_narrow__c(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && ($a[3] === null || is_array($a[3]))) {
    }
    else { throw new Exception("no matching overload"); }
  }
}
class std_ctype_wchar_t extends std_ctype_abstract_base_wchar_t {
  public $_M_c_locale_ctype;
  public $_M_narrow_ok;
  public $_M_narrow;
  public $_M_widen;
  public $_M_bit;
  public $_M_wmask;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_ctype_wchar_t(...$a);
  }
  function __init_std_ctype_wchar_t(...$a) {
    $this->_M_c_locale_ctype = null;
    $this->_M_narrow_ok = false;
    $this->_M_narrow = array_fill(0, 128, 0);
    $this->_M_widen = array_fill(0, 256, 0);
    $this->_M_bit = array_fill(0, 16, 0);
    $this->_M_wmask = array_fill(0, 16, 0);
  }
  function __dtor() {
    $this->__dtor_std_ctype_abstract_base_wchar_t();
  }
  public static $id;
}
class std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_iterator_std_output_iterator_tag_void_void_void_void {
  public $_M_sbuf;
  public $_M_failed;
  function __construct(...$a) {
    parent::__construct($o);
    $this->__init_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->_M_sbuf = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_failed = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_failed;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_output_iterator_tag_void_void_void_void();
  }
  function op_assign($o) {
    $this->_M_sbuf = ((($o["a"][$o["i"]])->_M_sbuf) ? ["a" => (($o["a"][$o["i"]])->_M_sbuf)["a"], "i" => (($o["a"][$o["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_failed = ($o["a"][$o["i"]])->_M_failed;
    return ["a" => [$this], "i" => 0];
  }
}
class std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_locale_facet {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
  }
  function do_put__c(...$a) {
    if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && (is_int($a[3]) || is_bool($a[3]))) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null));
    }
    else if (count($a) >= 4 && count($a) <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && ($a[3] === null || is_array($a[3]))) {
      $__flags = (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags__c();
      $__fmt = (~((std_ios_base::$basefield | std_ios_base::$uppercase)));
      (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags((($__flags & $__fmt) | (std_ios_base::$hex | std_ios_base::$showbase)));
      ($a[0] ?? null)->op_assign(["a" => [new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_insert_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, (($a[3] ?? null) & 0xFFFFFFFF)))], "i" => 0]);
      (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->flags($__flags);
      return $a[0] ?? null;
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
}
class std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t {
  function __construct(...$a) {
    $this->__init_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t(...$a);
  }
  function __init_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t(...$a) {
  }
  function __dtor() {
  }
}
class std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t {
  public $_M_sbuf;
  public $_M_c;
  function __construct(...$a) {
    parent::__construct($o);
    $this->__init_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
    $this->_M_sbuf = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_c = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_c;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t();
  }
  function op_assign($o) {
    $this->_M_sbuf = ((($o["a"][$o["i"]])->_M_sbuf) ? ["a" => (($o["a"][$o["i"]])->_M_sbuf)["a"], "i" => (($o["a"][$o["i"]])->_M_sbuf)["i"]] : null);
    $this->_M_c = ($o["a"][$o["i"]])->_M_c;
    return ["a" => [$this], "i" => 0];
  }
}
class std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_locale_facet {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  function __init_std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_locale_facet();
  }
  function do_get__c(...$a) {
    if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, $a[4] ?? null));
    }
    else if (count($a) >= 5 && count($a) <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      $__fmt = (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags__c();
      (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags((($__fmt & (~(std_ios_base::$basefield))) | std_ios_base::$hex));
      $__ul = ["v" => 0];
      ($a[0] ?? null)->op_assign(["a" => [new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t($this->_M_extract_int__c($a[0] ?? null, $a[1] ?? null, $a[2] ?? null, $a[3] ?? null, ["a" => $__ul, "i" => "v"]))], "i" => 0]);
      (($a[2] ?? null)["a"][($a[2] ?? null)["i"]])->flags($__fmt);
      ($a[4] ?? null)["a"][($a[4] ?? null)["i"]] = (($__ul["v"]) ? ["a" => ($__ul["v"])["a"], "i" => ($__ul["v"])["i"]] : null);
      return $a[0] ?? null;
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
}
class gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long {
  function __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Exception("unresolved external: std::__throw_length_error"); }
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function std_Hash_bytes(...$a) { throw new Exception("unresolved external: std::_Hash_bytes"); }
function main() {
  global $std_cout;
  $m = new std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(10, ["a" => [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0], ["a" => [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0], ["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0]);
  ($t151 = $m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [97, 97, 0], "i" => 0])), $t151["a"][$t151["i"]] = 1);
  ($t152 = $m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [98, 98, 0], "i" => 0])), $t152["a"][$t152["i"]] = 2);
  ($t157 = ($t156 = ($t155 = ($t154 = ($t153 = (__ctj_write(__ctj_fmt($m->size__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t153), __ctj_write(__ctj_fmt((($m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [97, 97, 0], "i" => 0])))["a"][($m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [97, 97, 0], "i" => 0])))["i"]] + ($m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [98, 98, 0], "i" => 0])))["a"][($m->op_index(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [98, 98, 0], "i" => 0])))["i"]]))), $t154), __ctj_write(__ctj_fmt([32, 0])), $t155), __ctj_write(__ctj_fmt($m->count__c(new std_basic_string_char_std_char_traits_char_std_allocator_char(["a" => [99, 99, 0], "i" => 0])))), $t156), __ctj_write("\n"), $t157);
  for ($b0 = $m->begin(), $e0 = $m->end(); std_detail_operator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(["a" => [$b0], "i" => 0], ["a" => [$e0], "i" => 0]); $b0->op_inc()) {
    $kv = $b0->op_mul__c();
    ($t160 = ($t159 = ($t158 = (__ctj_write(__ctj_fmt(($kv["a"][$kv["i"]])->first)), $std_cout), __ctj_write(__ctj_fmt([61, 0])), $t158), __ctj_write(__ctj_fmt(($kv["a"][$kv["i"]])->second)), $t159), __ctj_write(__ctj_fmt([32, 0])), $t160);
  }
  (__ctj_write("\n"), $std_cout);
  $s = new std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(10, ["a" => [new std_hash_int([])], "i" => 0], ["a" => [new std_equal_to_int([])], "i" => 0], ["a" => [new std_allocator_int([])], "i" => 0]);
  new std_pair_std_detail_Node_iterator_int_value1_value0_bool($s->insert(["a" => [5], "i" => 0]));
  new std_pair_std_detail_Node_iterator_int_value1_value0_bool($s->insert(["a" => [6], "i" => 0]));
  new std_pair_std_detail_Node_iterator_int_value1_value0_bool($s->insert(["a" => [5], "i" => 0]));
  ($t163 = ($t162 = ($t161 = (__ctj_write(__ctj_fmt($s->size__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t161), __ctj_write(__ctj_fmt($s->count__c(["a" => [6], "i" => 0]))), $t162), __ctj_write("\n"), $t163);
  for ($b1 = $s->begin(), $e1 = $s->end(); std_detail_operator_int_value0(["a" => [$b1], "i" => 0], ["a" => [$e1], "i" => 0]); $b1->op_inc()) {
    $x = ($b1->op_mul__c())["a"][($b1->op_mul__c())["i"]];
    (__ctj_write(__ctj_fmt($x)), $std_cout);
  }
  (__ctj_write("\n"), $std_cout);
}
function std_min_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_min_unsigned_long_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_declval_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R() {
  return std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R::__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R::__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char::__delegate();
}
function std_declval_int() {
  return std_declval_protector_int::__delegate();
}
function std_declval_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R::__delegate();
}
function std_declval_std_hash_int_R() {
  return std_declval_protector_std_hash_int_R::__delegate();
}
function std_declval_std_detail_Node_iterator_int_value1_value0_R() {
  return std_declval_protector_std_detail_Node_iterator_int_value1_value0_R::__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R::__delegate();
}
function std_declval_std_detail_Node_iterator_int_value1_value0() {
  return std_declval_protector_std_detail_Node_iterator_int_value1_value0::__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool::__delegate();
}
function std_declval_unsigned_long_long_R() {
  return std_declval_protector_unsigned_long_long_R::__delegate();
}
function std_declval_unsigned_long_long() {
  return std_declval_protector_unsigned_long_long::__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t::__delegate();
}
function std_declval_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R::__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple::__delegate();
}
function std_detail_operator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1($__x, $__y) {
  return (!((($__x["a"][$__x["i"]])->_M_cur) === (($__y["a"][$__y["i"]])->_M_cur) || ((($__x["a"][$__x["i"]])->_M_cur) && (($__y["a"][$__y["i"]])->_M_cur) && (($__x["a"][$__x["i"]])->_M_cur)["a"] === (($__y["a"][$__y["i"]])->_M_cur)["a"] && (($__x["a"][$__x["i"]])->_M_cur)["i"] === (($__y["a"][$__y["i"]])->_M_cur)["i"])));
}
function std_detail_operator_int_value0($__x, $__y) {
  return (!((($__x["a"][$__x["i"]])->_M_cur) === (($__y["a"][$__y["i"]])->_M_cur) || ((($__x["a"][$__x["i"]])->_M_cur) && (($__y["a"][$__y["i"]])->_M_cur) && (($__x["a"][$__x["i"]])->_M_cur)["a"] === (($__y["a"][$__y["i"]])->_M_cur)["a"] && (($__x["a"][$__x["i"]])->_M_cur)["i"] === (($__y["a"][$__y["i"]])->_M_cur)["i"])));
}
function std_forward_1_std_piecewise_construct_t($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_detail_Node_iterator_int_value1_value0($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_bool($__t) {
  return ($__t["a"][$__t["i"]] !== null);
}
function std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_get_1_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__in) {
  return std_pair_get_value0::__move_get__rv(std_move_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__in));
}
function std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__t) {
  return std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__t);
}
function std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_make_pair_std_detail_Node_iterator_int_value1_value0_bool($__x, $__y) {
  return new std_pair_std_detail_Node_iterator_int_value1_value0_bool(["a" => [[std_forward_1_std_detail_Node_iterator_int_value1_value0($__x), ($t164 = std_forward_1_bool($__y), $t164["a"][$t164["i"]])]], "i" => 0]);
}
function std_move_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_operator_8_char_std_char_traits_char_std_allocator_char($__lhs, $__rhs) {
  return (($__lhs["a"][$__lhs["i"]])->compare__c($__rhs) === 0);
}
function std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($__t) {
  return std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R::_M_head($__t);
}
$std_piecewise_construct = ["v" => new std_piecewise_construct_t([])];
$std_allocator_arg = new std_allocator_arg_t([]);
$std_ignore = [];
$std_cout = new stdClass();
std_ios_base::$boolalpha = 1;
std_ios_base::$dec = 2;
std_ios_base::$fixed = 4;
std_ios_base::$hex = 8;
std_ios_base::$internal = 16;
std_ios_base::$left = 32;
std_ios_base::$oct = 64;
std_ios_base::$right = 128;
std_ios_base::$scientific = 256;
std_ios_base::$showbase = 512;
std_ios_base::$showpoint = 1024;
std_ios_base::$showpos = 2048;
std_ios_base::$skipws = 4096;
std_ios_base::$unitbuf = 8192;
std_ios_base::$uppercase = 16384;
std_ios_base::$adjustfield = 176;
std_ios_base::$basefield = 74;
std_ios_base::$floatfield = 260;
std_ios_base::$badbit = 1;
std_ios_base::$eofbit = 2;
std_ios_base::$failbit = 4;
std_ios_base::$goodbit = 0;
std_ios_base::$app = 1;
std_ios_base::$ate = 2;
std_ios_base::$binary = 4;
std_ios_base::$in_ = 8;
std_ios_base::$out = 16;
std_ios_base::$trunc = 32;
std_ios_base::$beg = 0;
std_ios_base::$cur = 1;
std_ios_base::$end = 2;
std_locale::$none = 0;
std_locale::$ctype = (1 << 0);
std_locale::$numeric = (1 << 1);
std_locale::$collate = (1 << 2);
std_locale::$time = (1 << 3);
std_locale::$monetary = (1 << 4);
std_locale::$messages = (1 << 5);
std_locale::$all = (((((std_locale::$ctype | std_locale::$numeric) | std_locale::$collate) | std_locale::$time) | std_locale::$monetary) | std_locale::$messages);
std_locale::$_S_classic = null;
std_locale::$_S_global = null;
std_locale::$_S_categories = null;
std_locale::$_S_once = new class_156();
std_ctype_base::$upper = (1 << 0);
std_ctype_base::$lower = (1 << 1);
std_ctype_base::$alpha = (1 << 2);
std_ctype_base::$digit = (1 << 3);
std_ctype_base::$xdigit = (1 << 4);
std_ctype_base::$space = (1 << 5);
std_ctype_base::$print = (1 << 6);
std_ctype_base::$graph = (((1 << 2) | (1 << 3)) | (1 << 9));
std_ctype_base::$cntrl = (1 << 8);
std_ctype_base::$punct = (1 << 9);
std_ctype_base::$alnum = ((1 << 2) | (1 << 3));
std_basic_string_char_std_char_traits_char_std_allocator_char::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_max_size = intdiv((intdiv((std_basic_string_char_std_char_traits_char_std_allocator_char::$npos - 20), 1) - 1), 4);
std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_terminal = 0;
std_basic_string_char_std_char_traits_char_std_allocator_char_Rep::$_S_empty_rep_storage = null;
std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_detail_Prime_rehash_policy::$_S_growth_factor = 2;
std_locale_facet::$_S_c_locale = null;
std_locale_facet::$_S_c_name = null;
std_locale_facet::$_S_once = new class_156();
std_locale_id::$_S_refcount = 0;
std_locale_Impl::$_S_id_ctype = null;
std_locale_Impl::$_S_id_numeric = null;
std_locale_Impl::$_S_id_collate = null;
std_locale_Impl::$_S_id_time = null;
std_locale_Impl::$_S_id_monetary = null;
std_locale_Impl::$_S_id_messages = null;
std_locale_Impl::$_S_facet_categories = null;
std_ios_base_Init::$_S_refcount = 0;
std_ios_base_Init::$_S_synced_with_stdio = false;
std_ctype_char::$id = new std_locale_id();
std_ctype_char::$table_size = (1 + (((-(1))) & 0xFFFFFFFF));
std_integral_constant_bool_value0::$value = 0;
std_integral_constant_bool_value1::$value = 1;
std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (1 === 1);
std_is_convertible_helper_int_R_int_value0::$value = (1 === 1);
std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (1 === 1);
std_is_convertible_helper_int_int_value0::$value = (1 === 1);
std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R::$value = (1 === 1);
std_is_base_to_derived_ref_int_R_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_assignable_helper_std_hash_int_R_std_hash_int_R::$value = (1 === 1);
std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0::$value = (1 === 1);
std_is_convertible_helper_bool_R_bool_value0::$value = (1 === 1);
std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0::$value = (1 === 1);
std_is_convertible_helper_bool_bool_value0::$value = (1 === 1);
std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R::$__stop = false;
std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R::$__stop = false;
std_declval_protector_int_R::$__stop = false;
std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char::$__stop = false;
std_declval_protector_int::$__stop = false;
std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R::$__stop = false;
std_declval_protector_std_hash_int_R::$__stop = false;
std_declval_protector_std_detail_Node_iterator_int_value1_value0_R::$__stop = false;
std_declval_protector_bool_R::$__stop = false;
std_declval_protector_std_detail_Node_iterator_int_value1_value0::$__stop = false;
std_declval_protector_bool::$__stop = false;
std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0::$value = (1 === 1);
std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0::$value = (1 === 1);
std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0::$value = (2 === 1);
std_declval_protector_unsigned_long_long_R::$__stop = false;
std_declval_protector_unsigned_long_long::$__stop = false;
std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0::$value = (2 === 1);
std_declval_protector_std_piecewise_construct_t::$__stop = false;
std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R::$__stop = false;
std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_value0::$value = (2 === 1);
std_declval_protector_std_tuple::$__stop = false;
gnu_cxx_numeric_traits_integer_int::$__min = (((-(1)) < 0) ? ((-((((-(1)) < 0) ? ((((1 << (((4 * 8) - ((-(1)) < 0)) - 1)) - 1) << 1) + 1) : (~(0))))) - 1) : 0);
gnu_cxx_numeric_traits_integer_int::$__max = (((-(1)) < 0) ? ((((1 << (((4 * 8) - ((-(1)) < 0)) - 1)) - 1) << 1) + 1) : (~(0)));
gnu_cxx_numeric_traits_integer_int::$__is_signed = ((-(1)) < 0);
gnu_cxx_numeric_traits_integer_int::$__digits = ((4 * 8) - ((-(1)) < 0));
std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_ctype_wchar_t::$id = new std_locale_id();
std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
main();
