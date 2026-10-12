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
class std_true_type {
  function __dtor() {
  }
}
class std_false_type {
  function __construct(...$a) {
    $this->__init_std_false_type(...$a);
  }
  function __init_std_false_type(...$a) {
  }
  function __dtor() {
  }
}
class std_sfinae_types {
  function __dtor() {
  }
}
class std_sfinae_types_class_47 {
  public $__arr;
  function __construct(...$a) {
    $this->__init_std_sfinae_types_class_47(...$a);
  }
  function __init_std_sfinae_types_class_47(...$a) {
    $this->__arr = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->__arr;
  }
  function __dtor() {
  }
}
class std_do_is_destructible_impl {
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
class std_nothrow_t {
  function __construct(...$a) {
    $this->__init_std_nothrow_t(...$a);
  }
  function __init_std_nothrow_t(...$a) {
  }
  function __dtor() {
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
class class_156 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_156(...$a);
  }
  function __init_class_156(...$a) {
    $this->__count = 0;
    $this->__value = 0;
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
class class_157 {
  public $done;
  public $started;
  function __construct(...$a) {
    $this->__init_class_157(...$a);
  }
  function __init_class_157(...$a) {
    $this->done = 0;
    $this->started = 0;
  }
  function __dtor() {
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
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider();
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
    (($t7 = $this->_M_rep__c(), $t7["a"][$t7["i"]]))->_M_dispose(["a" => [new std_allocator_char($this->get_allocator__c())], "i" => 0]);
  }
  function _M_data__c() {
    return ($this->_M_dataplus->_M_p ? ["a" => $this->_M_dataplus->_M_p["a"], "i" => $this->_M_dataplus->_M_p["i"]] : null);
  }
  function _M_data($__p) {
    return ($t8 = $this->_M_dataplus->_M_p = ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $t8 ? ["a" => $t8["a"], "i" => $t8["i"]] : null);
  }
  function _M_rep__c() {
    return ($t10 = ["a" => (($t9 = $this->_M_data__c(), $t9))["a"], "i" => (($t9 = $this->_M_data__c(), $t9))["i"] + ((-(1)))], $t10 ? ["a" => $t10["a"], "i" => $t10["i"]] : null);
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
  function _M_dispose($__a) {
     {
      if ((gnu_cxx_exchange_and_add_dispatch(((["a" => $this, "i" => "_M_refcount"]) ? ["a" => (["a" => $this, "i" => "_M_refcount"])["a"], "i" => (["a" => $this, "i" => "_M_refcount"])["i"]] : null), (-(1))) <= 0)) {
         {
          $this->_M_destroy($__a);
        }
      }
    }
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
  function __dtor() {
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_char_traits_wchar_t {
  function __dtor() {
  }
  static function assign($__c1, $__c2) {
    $__c1["a"][$__c1["i"]] = $__c2["a"][$__c2["i"]];
  }
  static function copy($__s1, $__s2, $__n) {
    return ($t33 = wmemcpy(($__s1 ? ["a" => $__s1["a"], "i" => $__s1["i"]] : null), ($__s2 ? ["a" => $__s2["a"], "i" => $__s2["i"]] : null), intdiv($__n, 4)), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null);
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
class std_Swallow_assign {
  function __construct(...$a) {
    $this->__init_std_Swallow_assign(...$a);
  }
  function __init_std_Swallow_assign(...$a) {
  }
  function __dtor() {
  }
}
class std_Bit_reference {
  public $_M_p;
  public $_M_mask;
  function __construct(...$a) {
    $this->__init_std_Bit_reference(...$a);
  }
  function __init_std_Bit_reference(...$a) {
    $this->_M_p = null;
    $this->_M_mask = 0;
  }
  function __dtor() {
  }
}
class std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  function __dtor() {
  }
}
class std_Bit_iterator_base extends std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  public $_M_p;
  public $_M_offset;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_iterator_base(...$a);
  }
  function __init_std_Bit_iterator_base(...$a) {
    $this->_M_p = null;
    $this->_M_offset = 0;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R();
  }
}
class std_Bit_iterator extends std_Bit_iterator_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_iterator(...$a);
  }
  function __init_std_Bit_iterator(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Bit_iterator_base();
  }
}
class std_Bit_const_iterator extends std_Bit_iterator_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_const_iterator(...$a);
  }
  function __init_std_Bit_const_iterator(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Bit_iterator_base();
  }
}
class std_Rb_tree_node_base {
  public $_M_color;
  public $_M_parent;
  public $_M_left;
  public $_M_right;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_node_base(...$a);
  }
  function __init_std_Rb_tree_node_base(...$a) {
    $this->_M_color = 0;
    $this->_M_parent = null;
    $this->_M_left = null;
    $this->_M_right = null;
  }
  function __dtor() {
  }
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
class std_Placeholder_value1 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value1(...$a);
  }
  function __init_std_Placeholder_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value2 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value2(...$a);
  }
  function __init_std_Placeholder_value2(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value3 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value3(...$a);
  }
  function __init_std_Placeholder_value3(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value4 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value4(...$a);
  }
  function __init_std_Placeholder_value4(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value5 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value5(...$a);
  }
  function __init_std_Placeholder_value5(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value6 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value6(...$a);
  }
  function __init_std_Placeholder_value6(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value7 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value7(...$a);
  }
  function __init_std_Placeholder_value7(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value8 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value8(...$a);
  }
  function __init_std_Placeholder_value8(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value9 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value9(...$a);
  }
  function __init_std_Placeholder_value9(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value10 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value10(...$a);
  }
  function __init_std_Placeholder_value10(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value11 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value11(...$a);
  }
  function __init_std_Placeholder_value11(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value12 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value12(...$a);
  }
  function __init_std_Placeholder_value12(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value13 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value13(...$a);
  }
  function __init_std_Placeholder_value13(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value14 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value14(...$a);
  }
  function __init_std_Placeholder_value14(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value15 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value15(...$a);
  }
  function __init_std_Placeholder_value15(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value16 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value16(...$a);
  }
  function __init_std_Placeholder_value16(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value17 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value17(...$a);
  }
  function __init_std_Placeholder_value17(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value18 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value18(...$a);
  }
  function __init_std_Placeholder_value18(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value19 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value19(...$a);
  }
  function __init_std_Placeholder_value19(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value20 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value20(...$a);
  }
  function __init_std_Placeholder_value20(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value21 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value21(...$a);
  }
  function __init_std_Placeholder_value21(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value22 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value22(...$a);
  }
  function __init_std_Placeholder_value22(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value23 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value23(...$a);
  }
  function __init_std_Placeholder_value23(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value24 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value24(...$a);
  }
  function __init_std_Placeholder_value24(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value25 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value25(...$a);
  }
  function __init_std_Placeholder_value25(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value26 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value26(...$a);
  }
  function __init_std_Placeholder_value26(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value27 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value27(...$a);
  }
  function __init_std_Placeholder_value27(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value28 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value28(...$a);
  }
  function __init_std_Placeholder_value28(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value29 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value29(...$a);
  }
  function __init_std_Placeholder_value29(...$a) {
  }
  function __dtor() {
  }
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
    return new std_fpos_class_156((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_156((-(1)));
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
        $__buf_len = ["v" => ((($t34 = $this->egptr__c(), $t34) ? (($t34 = $this->egptr__c(), $t34))["i"] : 0) - (($t35 = $this->gptr__c(), $t35) ? (($t35 = $this->gptr__c(), $t35))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t37 = ($t36 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t36["a"][$t36["i"]]), $t37))["a"][(($t37 = ($t36 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t36["a"][$t36["i"]]), $t37))["i"]];
            std_char_traits_char::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t38 = $this->gptr__c(), $t38 ? ["a" => $t38["a"], "i" => $t38["i"]] : null), $__len);
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
        $__buf_len = ["v" => ((($t39 = $this->epptr__c(), $t39) ? (($t39 = $this->epptr__c(), $t39))["i"] : 0) - (($t40 = $this->pptr__c(), $t40) ? (($t40 = $this->pptr__c(), $t40))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t42 = ($t41 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t41["a"][$t41["i"]]), $t42))["a"][(($t42 = ($t41 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t41["a"][$t41["i"]]), $t42))["i"]];
            std_char_traits_char::copy(($t43 = $this->pptr__c(), $t43 ? ["a" => $t43["a"], "i" => $t43["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
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
    return new std_fpos_class_156((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_156((-(1)));
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
        $__buf_len = ["v" => ((($t44 = $this->egptr__c(), $t44) ? (($t44 = $this->egptr__c(), $t44))["i"] : 0) - (($t45 = $this->gptr__c(), $t45) ? (($t45 = $this->gptr__c(), $t45))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t47 = ($t46 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t46["a"][$t46["i"]]), $t47))["a"][(($t47 = ($t46 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t46["a"][$t46["i"]]), $t47))["i"]];
            std_char_traits_wchar_t::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t48 = $this->gptr__c(), $t48 ? ["a" => $t48["a"], "i" => $t48["i"]] : null), $__len);
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
        $__buf_len = ["v" => ((($t49 = $this->epptr__c(), $t49) ? (($t49 = $this->epptr__c(), $t49))["i"] : 0) - (($t50 = $this->pptr__c(), $t50) ? (($t50 = $this->pptr__c(), $t50))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t52 = ($t51 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t51["a"][$t51["i"]]), $t52))["a"][(($t52 = ($t51 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t51["a"][$t51["i"]]), $t52))["i"]];
            std_char_traits_wchar_t::copy(($t53 = $this->pptr__c(), $t53 ? ["a" => $t53["a"], "i" => $t53["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
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
class std_fpos_class_156 {
  public $_M_off;
  public $_M_state;
  function __construct(...$a) {
    $this->__init_std_fpos_class_156(...$a);
  }
  function __init_std_fpos_class_156(...$a) {
    $this->_M_off = $a[0] ?? null;
    $this->_M_state = new class_156();
  }
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t54 = operatornew__unsigned_long_long(($__n * 9)), $t54 ? ["a" => $t54["a"], "i" => $t54["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 9);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char extends gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    $this->_M_impl = new std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl($a[0] ?? null);
  }
  function __dtor() {
  }
  function _M_get_Tp_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_allocate($__n) {
    return ($t55 = (($__n !== 0) ? $this->_M_impl->allocate($__n, ["a" => [0], "i" => 0]) : 0), $t55 ? ["a" => $t55["a"], "i" => $t55["i"]] : null);
  }
  function _M_deallocate($__p, $__n) {
    if ($__p) {
      $this->_M_impl->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
    }
  }
}
class std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct($__a);
    $this->__init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    $this->_M_range_initialize(($t56 = ["a" => $a[0] ?? null, "i" => 0], $t56 ? ["a" => $t56["a"], "i" => $t56["i"]] : null), ($t57 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t57 ? ["a" => $t57["a"], "i" => $t57["i"]] : null), new std_random_access_iterator_tag([]));
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::max_size($this->_M_get_Tp_allocator());
  }
  function op_index($__n) {
    return (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]);
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t58 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t58["a"][$t58["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_range_initialize($__first, $__last, $p2) {
    for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
      $this->emplace_back__rv($__first);
    }
  }
  function emplace_back__rv($__args_0) {
    if ((!($this->_M_impl->_M_finish === $this->_M_impl->_M_end_of_storage || ($this->_M_impl->_M_finish && $this->_M_impl->_M_end_of_storage && $this->_M_impl->_M_finish["a"] === $this->_M_impl->_M_end_of_storage["a"] && $this->_M_impl->_M_finish["i"] === $this->_M_impl->_M_end_of_storage["i"])))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::construct(["a" => $this, "i" => "_M_impl"], ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char($__args_0));
        ++$this->_M_impl->_M_finish["i"];
      }
    }
    else {
      $this->_M_emplace_back_aux__rv(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char($__args_0));
    }
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::construct(["a" => $this, "i" => "_M_impl"], ($t59 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t59 ? ["a" => $t59["a"], "i" => $t59["i"]] : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char($__args_0));
        $__new_finish = null;
        $__new_finish = ($t60 = std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t60 ? ["a" => $t60["a"], "i" => $t60["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::destroy(["a" => $this, "i" => "_M_impl"], ($t61 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t61 ? ["a" => $t61["a"], "i" => $t61["i"]] : null));
        }
        else {
          std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null), $this->_M_get_Tp_allocator());
        }
        $this->_M_deallocate(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $__len);
      }
    }
    std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->_M_deallocate(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), (($this->_M_impl->_M_end_of_storage ? $this->_M_impl->_M_end_of_storage["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0)));
    $this->_M_impl->_M_start = ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null);
    $this->_M_impl->_M_finish = ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t62 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t62 ? ["a" => $t62["a"], "i" => $t62["i"]] : null);
  }
}
class std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl extends std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl(...$a);
  }
  function __init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
  static function construct($__a, $__p, $__arg) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__arg);
  }
  static function max_size($__a) {
    return ($__a["a"][$__a["i"]])->max_size__c();
  }
  static function destroy($__a, $__p) {
    ($__a["a"][$__a["i"]])->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
  function size__c() {
    return $this->_M_len;
  }
  function begin__c() {
    return ($this->_M_array ? ["a" => $this->_M_array["a"], "i" => $this->_M_array["i"]] : null);
  }
  function end__c() {
    return ($t64 = (["a" => (($t63 = $this->begin__c(), $t63))["a"], "i" => (($t63 = $this->begin__c(), $t63))["i"] + ($this->size__c())]), $t64 ? ["a" => $t64["a"], "i" => $t64["i"]] : null);
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
class std_less_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
    return std_operator_5_char_std_char_traits_char_std_allocator_char($__x, $__y);
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
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = new std_basic_string_char_std_char_traits_char_std_allocator_char(($t65 = std_forward_1_char_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t66 = ($t65 ? $t65["a"][$t65["i"]] : null), $t66 && is_array($t66) && array_key_exists("a", $t66) ? ["a" => $t66["a"], "i" => $t66["i"]] : $t66), ["a" => [new std_allocator_char([])], "i" => 0]);
      $this->second = ($a[1] ?? null)["a"][($a[1] ?? null)["i"]];
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
class std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_t;
  function __construct(...$a) {
    $this->__init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    $this->_M_t = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((array_key_exists(1, $a) ? $a[1] : (["a" => [new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char([])], "i" => 0])), ["a" => [((array_key_exists(2, $a) ? $a[2] : (["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0])))["a"][((array_key_exists(2, $a) ? $a[2] : (["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0])))["i"]]], "i" => 0]);
    $this->_M_t->_M_insert_unique(($t67 = ["a" => $a[0] ?? null, "i" => 0], $t67 ? ["a" => $t67["a"], "i" => $t67["i"]] : null), ($t68 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t68 ? ["a" => $t68["a"], "i" => $t68["i"]] : null));
  }
  function __dtor() {
  }
  function begin() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->_M_t->begin());
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->_M_t->end());
  }
}
class std_binary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool {
  function __dtor() {
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
  function size__c() {
    return $this->_M_len;
  }
  function begin__c() {
    return ($this->_M_array ? ["a" => $this->_M_array["a"], "i" => $this->_M_array["i"]] : null);
  }
  function end__c() {
    return ($t70 = (["a" => (($t69 = $this->begin__c(), $t69))["a"], "i" => (($t69 = $this->begin__c(), $t69))["i"] + ($this->size__c())]), $t70 ? ["a" => $t70["a"], "i" => $t70["i"]] : null);
  }
}
class std_remove_cv_char_P {
  function __dtor() {
  }
}
class std_remove_volatile_char_P {
  function __dtor() {
  }
}
class std_remove_const_char_P {
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
class std_is_void_char_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_char_P(...$a);
  }
  function __init_std_is_void_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_char_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_char_P(...$a);
  }
  function __init_std_is_void_helper_char_P(...$a) {
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
class std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_char_P_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_char_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_char_P(...$a);
  }
  function __init_std_is_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_char_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_char_P(...$a);
  }
  function __init_std_is_lvalue_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_char_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_char_P(...$a);
  }
  function __init_std_is_rvalue_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P extends std_is_rvalue_reference_char_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_char_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P {
  function __dtor() {
  }
}
class std_integral_constant_bool_value1 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_bool_value1(...$a);
  }
  function __init_std_integral_constant_bool_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_reference_char_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_char_P(...$a);
  }
  function __init_std_not_std_is_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_char_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_char_P(...$a);
  }
  function __init_std_not_std_is_void_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P extends std_not_std_is_void_char_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_char_P();
  }
}
class std_conditional_value1_std_not_std_is_void_char_P_std_not_std_is_reference_char_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_char_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_char_P extends std_add_rvalue_reference_helper_char_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_char_P(...$a);
  }
  function __init_std_add_rvalue_reference_char_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_char_P_value1();
  }
}
class std_enable_if_value1_void {
  function __dtor() {
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
class std_conditional_value0_std_is_function_int_std_is_array_int {
  function __dtor() {
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
class std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int extends std_is_convertible_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a);
  }
  function __init_std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_int();
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    $this->__init_std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
  }
}
class std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
  function op_call__c($__x) {
    return ["a" => $__x["a"][$__x["i"]], "i" => "first"];
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_impl = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
    }
    else if (count($a) >= 1 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_impl = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1($a[0] ?? null, ["a" => [new std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((array_key_exists(1, $a) ? $a[1] : (["a" => [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([])], "i" => 0])))], "i" => 0]);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_node() {
    return ($t71 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::class))(1, ["a" => [0], "i" => 0]), $t71 ? ["a" => $t71["a"], "i" => $t71["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_leftmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_left], "i" => 0];
  }
  function _M_rightmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_right], "i" => 0];
  }
  function _M_begin() {
    return ($this->_M_impl->_M_header->_M_parent ? ["a" => $this->_M_impl->_M_header->_M_parent["a"], "i" => $this->_M_impl->_M_header->_M_parent["i"]] : null);
  }
  function _M_end() {
    return ((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null);
  }
  static function _S_value(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_key(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t72 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([]), $t72))->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t73 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([]), $t73))->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_left($__x) {
    return ((($__x["a"][$__x["i"]])->_M_left) ? ["a" => (($__x["a"][$__x["i"]])->_M_left)["a"], "i" => (($__x["a"][$__x["i"]])->_M_left)["i"]] : null);
  }
  static function _S_right($__x) {
    return ((($__x["a"][$__x["i"]])->_M_right) ? ["a" => (($__x["a"][$__x["i"]])->_M_right)["a"], "i" => (($__x["a"][$__x["i"]])->_M_right)["i"]] : null);
  }
  function _M_get_insert_unique_pos($__k) {
    $__x = ($t74 = $this->_M_begin(), $t74 ? ["a" => $t74["a"], "i" => $t74["i"]] : null);
    $__y = ($t75 = $this->_M_end(), $t75 ? ["a" => $t75["a"], "i" => $t75["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t76 = ($__comp ? std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t76 ? ["a" => $t76["a"], "i" => $t76["i"]] : null);
      }
    }
    $__j = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null))], "i" => 0]);
    if ($__comp) {
       {
        if ($__j->op_eq__c(["a" => [new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->begin())], "i" => 0])) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
        }
        else {
          $__j->op_dec();
        }
      }
    }
    if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($__j->_M_node ? ["a" => $__j->_M_node["a"], "i" => $__j->_M_node["i"]] : null)), $__k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__j->_M_node, 0]], "i" => 0]);
  }
  function _M_get_insert_hint_unique_pos($__position, $__k) {
    $__pos = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__position->_M_const_cast__c())], "i" => 0]);
    if (($__pos->_M_node === (($t77 = $this->_M_end(), $t77)) || ($__pos->_M_node && (($t77 = $this->_M_end(), $t77)) && $__pos->_M_node["a"] === (($t77 = $this->_M_end(), $t77))["a"] && $__pos->_M_node["i"] === (($t77 = $this->_M_end(), $t77))["i"]))) {
       {
        if ((($this->size__c() > 0) && $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($t78 = $this->_M_rightmost(), $t79 = ($t78 ? $t78["a"][$t78["i"]] : null), $t79 && is_array($t79) && array_key_exists("a", $t79) ? ["a" => $t79["a"], "i" => $t79["i"]] : $t79)), $__k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
        }
      }
    }
    else {
      if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)))) {
         {
          $__before = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [$__pos], "i" => 0]);
          if (($__pos->_M_node === ((($t80 = $this->_M_leftmost(), $t80) ? (($t80 = $this->_M_leftmost(), $t80))["a"][(($t80 = $this->_M_leftmost(), $t80))["i"]] : null)) || ($__pos->_M_node && ((($t80 = $this->_M_leftmost(), $t80) ? (($t80 = $this->_M_leftmost(), $t80))["a"][(($t80 = $this->_M_leftmost(), $t80))["i"]] : null)) && $__pos->_M_node["a"] === ((($t80 = $this->_M_leftmost(), $t80) ? (($t80 = $this->_M_leftmost(), $t80))["a"][(($t80 = $this->_M_leftmost(), $t80))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t80 = $this->_M_leftmost(), $t80) ? (($t80 = $this->_M_leftmost(), $t80))["a"][(($t80 = $this->_M_leftmost(), $t80))["i"]] : null))["i"]))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$this->_M_leftmost(), $this->_M_leftmost()]], "i" => 0]);
          }
          else {
            if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($t82 = (($t81 = $__before->op_dec(), $t81["a"][$t81["i"]]))->_M_node, $t82 ? ["a" => $t82["a"], "i" => $t82["i"]] : null)), $__k)) {
               {
                if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_right(($__before->_M_node ? ["a" => $__before->_M_node["a"], "i" => $__before->_M_node["i"]] : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__before->_M_node]], "i" => 0]);
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, $__pos->_M_node]], "i" => 0]);
                }
              }
            }
            else {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
            }
          }
        }
      }
      else {
        if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)), $__k)) {
           {
            $__after = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [$__pos], "i" => 0]);
            if (($__pos->_M_node === ((($t83 = $this->_M_rightmost(), $t83) ? (($t83 = $this->_M_rightmost(), $t83))["a"][(($t83 = $this->_M_rightmost(), $t83))["i"]] : null)) || ($__pos->_M_node && ((($t83 = $this->_M_rightmost(), $t83) ? (($t83 = $this->_M_rightmost(), $t83))["a"][(($t83 = $this->_M_rightmost(), $t83))["i"]] : null)) && $__pos->_M_node["a"] === ((($t83 = $this->_M_rightmost(), $t83) ? (($t83 = $this->_M_rightmost(), $t83))["a"][(($t83 = $this->_M_rightmost(), $t83))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t83 = $this->_M_rightmost(), $t83) ? (($t83 = $this->_M_rightmost(), $t83))["a"][(($t83 = $this->_M_rightmost(), $t83))["i"]] : null))["i"]))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
            }
            else {
              if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($t85 = (($t84 = $__after->op_inc(), $t84["a"][$t84["i"]]))->_M_node, $t85 ? ["a" => $t85["a"], "i" => $t85["i"]] : null)))) {
                 {
                  if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_right(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__pos->_M_node]], "i" => 0]);
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__after->_M_node, $__after->_M_node]], "i" => 0]);
                  }
                }
              }
              else {
                return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
              }
            }
          }
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, 0]], "i" => 0]);
        }
      }
    }
  }
  function begin() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($this->_M_impl->_M_header->_M_left ? ["a" => $this->_M_impl->_M_header->_M_left["a"], "i" => $this->_M_impl->_M_header->_M_left["i"]] : null));
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null));
  }
  function size__c() {
    return $this->_M_impl->_M_node_count;
  }
  function _M_insert_unique($__first, $__last) {
    for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
      new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->_M_insert_unique___rv(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(["a" => [new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->end())], "i" => 0]), $__first));
    }
  }
  function _M_insert_unique___rv($__position, $__v) {
    $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_hint_unique_pos($__position, (($t86 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([]), $t86))->op_call__c($__v)))], "i" => 0]);
    if ($__res->second) {
      return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($this->_M_insert___rv(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__v)));
    }
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null));
  }
  function _M_insert___rv($__x, $__p, $__v) {
    $__insert_left = ((($__x !== null) || ($__p === (($t87 = $this->_M_end(), $t87)) || ($__p && (($t87 = $this->_M_end(), $t87)) && $__p["a"] === (($t87 = $this->_M_end(), $t87))["a"] && $__p["i"] === (($t87 = $this->_M_end(), $t87))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c((($t88 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([]), $t88))->op_call__c($__v), std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    $__z = ($t89 = $this->_M_create_node__rv(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__v)), $t89 ? ["a" => $t89["a"], "i" => $t89["i"]] : null);
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__tmp = ($t90 = $this->_M_get_node(), $t90 ? ["a" => $t90["a"], "i" => $t90["i"]] : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__args_0));
      }
    }
    if (false) {
       {
        $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
      }
    }
    return ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null);
  }
}
class std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_node = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_mul__c() {
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_value_field"];
  }
  function op_inc() {
    $this->_M_node = ($t91 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t91 ? ["a" => $t91["a"], "i" => $t91["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ($t92 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t92 ? ["a" => $t92["a"], "i" => $t92["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
}
class std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    $this->_M_value_field = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($a[0] ?? null));
  }
  function __dtor() {
    $this->__dtor_std_Rb_tree_node_base();
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
class std_less_int extends std_binary_function_int_int_bool {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_less_int(...$a);
  }
  function __init_std_less_int(...$a) {
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
    return ($__x["a"][$__x["i"]] < $__y["a"][$__y["i"]]);
  }
}
class gnu_cxx_new_allocator_int {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_int(...$a);
  }
  function __init_gnu_cxx_new_allocator_int(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t93 = operatornew__unsigned_long_long(($__n * 4)), $t93 ? ["a" => $t93["a"], "i" => $t93["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 4);
  }
  function construct__rv($__p, $__args_0) {
    ($__p["a"][$__p["i"]] = ($t94 = std_forward_1_int($__args_0), $t94["a"][$t94["i"]]));
  }
  function destroy($__p) {
    null;
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_allocator_int(...$a);
  }
  function __init_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_int();
  }
}
class std_set_int_std_less_int_std_allocator_int {
  public $_M_t;
  function __construct(...$a) {
    $this->__init_std_set_int_std_less_int_std_allocator_int(...$a);
  }
  function __init_std_set_int_std_less_int_std_allocator_int(...$a) {
    $this->_M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int((array_key_exists(1, $a) ? $a[1] : (["a" => [new std_less_int([])], "i" => 0])), ["a" => [((array_key_exists(2, $a) ? $a[2] : (["a" => [new std_allocator_int([])], "i" => 0])))["a"][((array_key_exists(2, $a) ? $a[2] : (["a" => [new std_allocator_int([])], "i" => 0])))["i"]]], "i" => 0]);
    $this->_M_t->_M_insert_unique(($t95 = ["a" => $a[0] ?? null, "i" => 0], $t95 ? ["a" => $t95["a"], "i" => $t95["i"]] : null), ($t96 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t96 ? ["a" => $t96["a"], "i" => $t96["i"]] : null));
  }
  function __dtor() {
  }
  function begin__c() {
    return new std_Rb_tree_const_iterator_int(["a" => [new std_Rb_tree_iterator_int($this->_M_t->begin())], "i" => 0]);
  }
  function end__c() {
    return new std_Rb_tree_const_iterator_int(["a" => [new std_Rb_tree_iterator_int($this->_M_t->end())], "i" => 0]);
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
  function size__c() {
    return $this->_M_len;
  }
  function begin__c() {
    return ($this->_M_array ? ["a" => $this->_M_array["a"], "i" => $this->_M_array["i"]] : null);
  }
  function end__c() {
    return ($t98 = (["a" => (($t97 = $this->begin__c(), $t97))["a"], "i" => (($t97 = $this->begin__c(), $t97))["i"] + ($this->size__c())]), $t98 ? ["a" => $t98["a"], "i" => $t98["i"]] : null);
  }
}
class std_unary_function_int_int {
  function __construct(...$a) {
    $this->__init_std_unary_function_int_int(...$a);
  }
  function __init_std_unary_function_int_int(...$a) {
  }
  function __dtor() {
  }
}
class std_Identity_int extends std_unary_function_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Identity_int(...$a);
  }
  function __init_std_Identity_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_int_int();
  }
  function op_call__c($__x) {
    return $__x;
  }
}
class std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a);
  }
  function __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
    }
    else if (count($a) >= 1 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1($a[0] ?? null, ["a" => [new std_allocator_std_Rb_tree_node_int((array_key_exists(1, $a) ? $a[1] : (["a" => [new std_allocator_int([])], "i" => 0])))], "i" => 0]);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_node() {
    return ($t99 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_int::class))(1, ["a" => [0], "i" => 0]), $t99 ? ["a" => $t99["a"], "i" => $t99["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_leftmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_left], "i" => 0];
  }
  function _M_rightmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_right], "i" => 0];
  }
  function _M_begin() {
    return ($this->_M_impl->_M_header->_M_parent ? ["a" => $this->_M_impl->_M_header->_M_parent["a"], "i" => $this->_M_impl->_M_header->_M_parent["i"]] : null);
  }
  function _M_end() {
    return ((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null);
  }
  static function _S_value(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_key(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t100 = new std_Identity_int([]), $t100))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t101 = new std_Identity_int([]), $t101))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_left($__x) {
    return ((($__x["a"][$__x["i"]])->_M_left) ? ["a" => (($__x["a"][$__x["i"]])->_M_left)["a"], "i" => (($__x["a"][$__x["i"]])->_M_left)["i"]] : null);
  }
  static function _S_right($__x) {
    return ((($__x["a"][$__x["i"]])->_M_right) ? ["a" => (($__x["a"][$__x["i"]])->_M_right)["a"], "i" => (($__x["a"][$__x["i"]])->_M_right)["i"]] : null);
  }
  function _M_get_insert_unique_pos($__k) {
    $__x = ($t102 = $this->_M_begin(), $t102 ? ["a" => $t102["a"], "i" => $t102["i"]] : null);
    $__y = ($t103 = $this->_M_end(), $t103 ? ["a" => $t103["a"], "i" => $t103["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t104 = ($__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t104 ? ["a" => $t104["a"], "i" => $t104["i"]] : null);
      }
    }
    $__j = new std_Rb_tree_iterator_int(["a" => [new std_Rb_tree_iterator_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null))], "i" => 0]);
    if ($__comp) {
       {
        if ($__j->op_eq__c(["a" => [new std_Rb_tree_iterator_int($this->begin())], "i" => 0])) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
        }
        else {
          $__j->op_dec();
        }
      }
    }
    if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__j->_M_node ? ["a" => $__j->_M_node["a"], "i" => $__j->_M_node["i"]] : null)), $__k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__j->_M_node, 0]], "i" => 0]);
  }
  function _M_get_insert_hint_unique_pos($__position, $__k) {
    $__pos = new std_Rb_tree_iterator_int(["a" => [new std_Rb_tree_iterator_int($__position->_M_const_cast__c())], "i" => 0]);
    if (($__pos->_M_node === (($t105 = $this->_M_end(), $t105)) || ($__pos->_M_node && (($t105 = $this->_M_end(), $t105)) && $__pos->_M_node["a"] === (($t105 = $this->_M_end(), $t105))["a"] && $__pos->_M_node["i"] === (($t105 = $this->_M_end(), $t105))["i"]))) {
       {
        if ((($this->size__c() > 0) && $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($t106 = $this->_M_rightmost(), $t107 = ($t106 ? $t106["a"][$t106["i"]] : null), $t107 && is_array($t107) && array_key_exists("a", $t107) ? ["a" => $t107["a"], "i" => $t107["i"]] : $t107)), $__k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
        }
      }
    }
    else {
      if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)))) {
         {
          $__before = new std_Rb_tree_iterator_int(["a" => [$__pos], "i" => 0]);
          if (($__pos->_M_node === ((($t108 = $this->_M_leftmost(), $t108) ? (($t108 = $this->_M_leftmost(), $t108))["a"][(($t108 = $this->_M_leftmost(), $t108))["i"]] : null)) || ($__pos->_M_node && ((($t108 = $this->_M_leftmost(), $t108) ? (($t108 = $this->_M_leftmost(), $t108))["a"][(($t108 = $this->_M_leftmost(), $t108))["i"]] : null)) && $__pos->_M_node["a"] === ((($t108 = $this->_M_leftmost(), $t108) ? (($t108 = $this->_M_leftmost(), $t108))["a"][(($t108 = $this->_M_leftmost(), $t108))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t108 = $this->_M_leftmost(), $t108) ? (($t108 = $this->_M_leftmost(), $t108))["a"][(($t108 = $this->_M_leftmost(), $t108))["i"]] : null))["i"]))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$this->_M_leftmost(), $this->_M_leftmost()]], "i" => 0]);
          }
          else {
            if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($t110 = (($t109 = $__before->op_dec(), $t109["a"][$t109["i"]]))->_M_node, $t110 ? ["a" => $t110["a"], "i" => $t110["i"]] : null)), $__k)) {
               {
                if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_right(($__before->_M_node ? ["a" => $__before->_M_node["a"], "i" => $__before->_M_node["i"]] : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__before->_M_node]], "i" => 0]);
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, $__pos->_M_node]], "i" => 0]);
                }
              }
            }
            else {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
            }
          }
        }
      }
      else {
        if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)), $__k)) {
           {
            $__after = new std_Rb_tree_iterator_int(["a" => [$__pos], "i" => 0]);
            if (($__pos->_M_node === ((($t111 = $this->_M_rightmost(), $t111) ? (($t111 = $this->_M_rightmost(), $t111))["a"][(($t111 = $this->_M_rightmost(), $t111))["i"]] : null)) || ($__pos->_M_node && ((($t111 = $this->_M_rightmost(), $t111) ? (($t111 = $this->_M_rightmost(), $t111))["a"][(($t111 = $this->_M_rightmost(), $t111))["i"]] : null)) && $__pos->_M_node["a"] === ((($t111 = $this->_M_rightmost(), $t111) ? (($t111 = $this->_M_rightmost(), $t111))["a"][(($t111 = $this->_M_rightmost(), $t111))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t111 = $this->_M_rightmost(), $t111) ? (($t111 = $this->_M_rightmost(), $t111))["a"][(($t111 = $this->_M_rightmost(), $t111))["i"]] : null))["i"]))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
            }
            else {
              if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($t113 = (($t112 = $__after->op_inc(), $t112["a"][$t112["i"]]))->_M_node, $t113 ? ["a" => $t113["a"], "i" => $t113["i"]] : null)))) {
                 {
                  if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_right(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__pos->_M_node]], "i" => 0]);
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__after->_M_node, $__after->_M_node]], "i" => 0]);
                  }
                }
              }
              else {
                return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
              }
            }
          }
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, 0]], "i" => 0]);
        }
      }
    }
  }
  function begin() {
    return new std_Rb_tree_iterator_int(($this->_M_impl->_M_header->_M_left ? ["a" => $this->_M_impl->_M_header->_M_left["a"], "i" => $this->_M_impl->_M_header->_M_left["i"]] : null));
  }
  function end() {
    return new std_Rb_tree_iterator_int(((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null));
  }
  function size__c() {
    return $this->_M_impl->_M_node_count;
  }
  function _M_insert_unique($__first, $__last) {
    for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
      new std_Rb_tree_iterator_int($this->_M_insert_unique___rv(new std_Rb_tree_const_iterator_int(["a" => [new std_Rb_tree_iterator_int($this->end())], "i" => 0]), $__first));
    }
  }
  function _M_insert_unique___rv($__position, $__v) {
    $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_hint_unique_pos($__position, (($t114 = new std_Identity_int([]), $t114))->op_call__c($__v)))], "i" => 0]);
    if ($__res->second) {
      return new std_Rb_tree_iterator_int($this->_M_insert___rv(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), std_forward_1_int($__v)));
    }
    return new std_Rb_tree_iterator_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null));
  }
  function _M_insert___rv($__x, $__p, $__v) {
    $__insert_left = ((($__x !== null) || ($__p === (($t115 = $this->_M_end(), $t115)) || ($__p && (($t115 = $this->_M_end(), $t115)) && $__p["a"] === (($t115 = $this->_M_end(), $t115))["a"] && $__p["i"] === (($t115 = $this->_M_end(), $t115))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c((($t116 = new std_Identity_int([]), $t116))->op_call__c($__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    $__z = ($t117 = $this->_M_create_node__rv(std_forward_1_int($__v)), $t117 ? ["a" => $t117["a"], "i" => $t117["i"]] : null);
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__tmp = ($t118 = $this->_M_get_node(), $t118 ? ["a" => $t118["a"], "i" => $t118["i"]] : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_int($__args_0));
      }
    }
    if (false) {
       {
        $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
      }
    }
    return ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null);
  }
}
class std_Rb_tree_const_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_Rb_tree_const_iterator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_const_cast__c() {
    return new std_Rb_tree_iterator_int(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null));
  }
  function op_mul__c() {
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_value_field"];
  }
  function op_inc() {
    $this->_M_node = ($t119 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t119 ? ["a" => $t119["a"], "i" => $t119["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_node_int(...$a);
  }
  function __init_std_Rb_tree_node_int(...$a) {
    $this->_M_value_field = (($t121 = ($t120 = std_forward_1_int($a[0] ?? null), $t120["a"][$t120["i"]]), $t121))["a"][(($t121 = ($t120 = std_forward_1_int($a[0] ?? null), $t120["a"][$t120["i"]]), $t121))["i"]];
  }
  function __dtor() {
    $this->__dtor_std_Rb_tree_node_base();
  }
}
class std_Rb_tree_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_Rb_tree_iterator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_node = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_inc() {
    $this->_M_node = ($t122 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t122 ? ["a" => $t122["a"], "i" => $t122["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ($t123 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t123 ? ["a" => $t123["a"], "i" => $t123["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
}
class std_Vector_base_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0] ?? null);
    }
    else if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[1] ?? null);
      $this->_M_create_storage($a[0] ?? null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl(std_move_std_allocator_int((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_get_Tp_allocator()));
      $this->_M_impl->_M_swap_data(["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_impl"]);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_get_Tp_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_Tp_allocator__c() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_allocate($__n) {
    return ($t124 = (($__n !== 0) ? $this->_M_impl->allocate($__n, ["a" => [0], "i" => 0]) : 0), $t124 ? ["a" => $t124["a"], "i" => $t124["i"]] : null);
  }
  function _M_deallocate($__p, $__n) {
    if ($__p) {
      $this->_M_impl->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
    }
  }
  function _M_create_storage($__n) {
    $this->_M_impl->_M_start = ($t125 = $this->_M_allocate($__n), $t125 ? ["a" => $t125["a"], "i" => $t125["i"]] : null);
    $this->_M_impl->_M_finish = ($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t126 = (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]), $t126 ? ["a" => $t126["a"], "i" => $t126["i"]] : null);
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct(($__x["a"][$__x["i"]])->size__c(), ["a" => [new std_allocator_int(gnu_cxx_alloc_traits_std_allocator_int::_S_select_on_copy(($__x["a"][$__x["i"]])->_M_get_Tp_allocator__c()))], "i" => 0]);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct(std_move_std_vector_int_std_allocator_int($__x));
    }
    else if (count($a) >= 1 && count($a) <= 2 && $a[0] instanceof std_initializer_list_int && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__a);
    }
    $this->__init_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_impl->_M_finish = ($t127 = std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->begin__c()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->end__c()), ($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), $this->_M_get_Tp_allocator()), $t127 ? ["a" => $t127["a"], "i" => $t127["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 2 && $a[0] instanceof std_initializer_list_int && ($a[1] === null || is_array($a[1]))) {
      $this->_M_range_initialize(($t128 = ["a" => $a[0] ?? null, "i" => 0], $t128 ? ["a" => $t128["a"], "i" => $t128["i"]] : null), ($t129 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t129 ? ["a" => $t129["a"], "i" => $t129["i"]] : null), new std_random_access_iterator_tag([]));
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    std_Destroy_2_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->__dtor_std_Vector_base_int_std_allocator_int();
  }
  function begin__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_start], "i" => 0]);
  }
  function end__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_finish], "i" => 0]);
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int::max_size($this->_M_get_Tp_allocator());
  }
  function op_index($__n) {
    return (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]);
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t130 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t130["a"][$t130["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_range_initialize($__first, $__last, $p2) {
    for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
      $this->emplace_back__rv($__first);
    }
  }
  function emplace_back__rv($__args_0) {
    if ((!($this->_M_impl->_M_finish === $this->_M_impl->_M_end_of_storage || ($this->_M_impl->_M_finish && $this->_M_impl->_M_end_of_storage && $this->_M_impl->_M_finish["a"] === $this->_M_impl->_M_end_of_storage["a"] && $this->_M_impl->_M_finish["i"] === $this->_M_impl->_M_end_of_storage["i"])))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), std_forward_1_int($__args_0));
        ++$this->_M_impl->_M_finish["i"];
      }
    }
    else {
      $this->_M_emplace_back_aux__rv(std_forward_1_int($__args_0));
    }
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($t131 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t131 ? ["a" => $t131["a"], "i" => $t131["i"]] : null), std_forward_1_int($__args_0));
        $__new_finish = null;
        $__new_finish = ($t132 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t132 ? ["a" => $t132["a"], "i" => $t132["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int::destroy(["a" => $this, "i" => "_M_impl"], ($t133 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t133 ? ["a" => $t133["a"], "i" => $t133["i"]] : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null), $this->_M_get_Tp_allocator());
        }
        $this->_M_deallocate(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $__len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->_M_deallocate(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), (($this->_M_impl->_M_end_of_storage ? $this->_M_impl->_M_end_of_storage["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0)));
    $this->_M_impl->_M_start = ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null);
    $this->_M_impl->_M_finish = ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t134 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t134 ? ["a" => $t134["a"], "i" => $t134["i"]] : null);
  }
}
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct(std_move_std_allocator_int($__a));
    }
    $this->__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_int();
  }
  function _M_swap_data($__x) {
    std_swap_int_P(["a" => [$this->_M_start], "i" => 0], ["a" => [($__x["a"][$__x["i"]])->_M_start], "i" => 0]);
    std_swap_int_P(["a" => [$this->_M_finish], "i" => 0], ["a" => [($__x["a"][$__x["i"]])->_M_finish], "i" => 0]);
    std_swap_int_P(["a" => [$this->_M_end_of_storage], "i" => 0], ["a" => [($__x["a"][$__x["i"]])->_M_end_of_storage], "i" => 0]);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  function __dtor() {
  }
  static function construct($__a, $__p, $__arg) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__arg);
  }
  static function max_size($__a) {
    return ($__a["a"][$__a["i"]])->max_size__c();
  }
  static function _S_select_on_copy($__a) {
    return $__a["a"][$__a["i"]];
  }
  static function destroy($__a, $__p) {
    ($__a["a"][$__a["i"]])->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a);
  }
  function __init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t135 = operatornew__unsigned_long_long(($__n * 25)), $t135 ? ["a" => $t135["a"], "i" => $t135["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 25);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_vector_int_std_allocator_int(std_forward_1_std_vector_int_std_allocator_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_vector_int_std_allocator_int extends gnu_cxx_new_allocator_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_allocator_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_vector_int_std_allocator_int();
  }
}
class std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    $this->_M_impl = new std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl($a[0] ?? null);
  }
  function __dtor() {
  }
  function _M_get_Tp_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_allocate($__n) {
    return ($t136 = (($__n !== 0) ? $this->_M_impl->allocate($__n, ["a" => [0], "i" => 0]) : 0), $t136 ? ["a" => $t136["a"], "i" => $t136["i"]] : null);
  }
  function _M_deallocate($__p, $__n) {
    if ($__p) {
      $this->_M_impl->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
    }
  }
}
class std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int extends std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct($__a);
    $this->__init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    $this->_M_range_initialize(($t137 = ["a" => $a[0] ?? null, "i" => 0], $t137 ? ["a" => $t137["a"], "i" => $t137["i"]] : null), ($t138 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t138 ? ["a" => $t138["a"], "i" => $t138["i"]] : null), new std_random_access_iterator_tag([]));
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int();
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::max_size($this->_M_get_Tp_allocator());
  }
  function op_index($__n) {
    return (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]);
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t139 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t139["a"][$t139["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_range_initialize($__first, $__last, $p2) {
    for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
      $this->emplace_back__rv($__first);
    }
  }
  function emplace_back__rv($__args_0) {
    if ((!($this->_M_impl->_M_finish === $this->_M_impl->_M_end_of_storage || ($this->_M_impl->_M_finish && $this->_M_impl->_M_end_of_storage && $this->_M_impl->_M_finish["a"] === $this->_M_impl->_M_end_of_storage["a"] && $this->_M_impl->_M_finish["i"] === $this->_M_impl->_M_end_of_storage["i"])))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), std_forward_1_std_vector_int_std_allocator_int($__args_0));
        ++$this->_M_impl->_M_finish["i"];
      }
    }
    else {
      $this->_M_emplace_back_aux__rv(std_forward_1_std_vector_int_std_allocator_int($__args_0));
    }
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($t140 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t140 ? ["a" => $t140["a"], "i" => $t140["i"]] : null), std_forward_1_std_vector_int_std_allocator_int($__args_0));
        $__new_finish = null;
        $__new_finish = ($t141 = std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t141 ? ["a" => $t141["a"], "i" => $t141["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::destroy(["a" => $this, "i" => "_M_impl"], ($t142 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t142 ? ["a" => $t142["a"], "i" => $t142["i"]] : null));
        }
        else {
          std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null), $this->_M_get_Tp_allocator());
        }
        $this->_M_deallocate(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $__len);
      }
    }
    std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->_M_deallocate(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), (($this->_M_impl->_M_end_of_storage ? $this->_M_impl->_M_end_of_storage["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0)));
    $this->_M_impl->_M_start = ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null);
    $this->_M_impl->_M_finish = ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t143 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t143 ? ["a" => $t143["a"], "i" => $t143["i"]] : null);
  }
}
class std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl extends std_allocator_std_vector_int_std_allocator_int {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a);
  }
  function __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_vector_int_std_allocator_int();
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int {
  function __dtor() {
  }
  static function construct($__a, $__p, $__arg) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__arg);
  }
  static function max_size($__a) {
    return ($__a["a"][$__a["i"]])->max_size__c();
  }
  static function destroy($__a, $__p) {
    ($__a["a"][$__a["i"]])->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_initializer_list_std_vector_int_std_allocator_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_initializer_list_std_vector_int_std_allocator_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
  function size__c() {
    return $this->_M_len;
  }
  function begin__c() {
    return ($this->_M_array ? ["a" => $this->_M_array["a"], "i" => $this->_M_array["i"]] : null);
  }
  function end__c() {
    return ($t145 = (["a" => (($t144 = $this->begin__c(), $t144))["a"], "i" => (($t144 = $this->begin__c(), $t144))["i"] + ($this->size__c())]), $t145 ? ["a" => $t145["a"], "i" => $t145["i"]] : null);
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a);
  }
  function __init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a) {
    $this->first = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
    $this->second = false;
  }
  function __dtor() {
  }
}
class std_declval_protector_char_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_char_P(...$a);
  }
  function __init_std_declval_protector_char_P(...$a) {
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
class std_remove_reference_char_P {
  function __dtor() {
  }
}
class std_pair_std_Rb_tree_iterator_int_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  function __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    $this->first = new std_Rb_tree_iterator_int();
    $this->second = false;
  }
  function __dtor() {
  }
}
class std_is_integer_char_P {
  function __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t146 = operatornew__unsigned_long_long(($__n * 41)), $t146 ? ["a" => $t146["a"], "i" => $t146["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 41);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct();
    }
    $this->__init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_key_compare;
  public $_M_header;
  public $_M_node_count;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__a);
    }
    $this->__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  function __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_key_compare = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char();
      $this->_M_header = new std_Rb_tree_node_base();
      $this->_M_node_count = 0;
      $this->_M_initialize();
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_key_compare = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char($a[0] ?? null);
      $this->_M_header = new std_Rb_tree_node_base();
      $this->_M_node_count = 0;
      $this->_M_initialize();
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
  function _M_initialize() {
    $this->_M_header->_M_color = 0;
    $this->_M_header->_M_parent = null;
    $this->_M_header->_M_left = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
    $this->_M_header->_M_right = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
  }
}
class std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
  }
  function __dtor() {
  }
  function _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null));
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_int {
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_std_Rb_tree_node_int(...$a);
  }
  function __init_gnu_cxx_new_allocator_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t147 = operatornew__unsigned_long_long(($__n * 32)), $t147 ? ["a" => $t147["a"], "i" => $t147["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 32);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_Rb_tree_node_int(std_forward_1_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_allocator_std_Rb_tree_node_int extends gnu_cxx_new_allocator_std_Rb_tree_node_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct();
    }
    $this->__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  function __init_std_allocator_std_Rb_tree_node_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_Rb_tree_node_int();
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_int {
  public $_M_key_compare;
  public $_M_header;
  public $_M_node_count;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__a);
    }
    $this->__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  function __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_key_compare = new std_less_int();
      $this->_M_header = new std_Rb_tree_node_base();
      $this->_M_node_count = 0;
      $this->_M_initialize();
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_key_compare = new std_less_int($a[0] ?? null);
      $this->_M_header = new std_Rb_tree_node_base();
      $this->_M_node_count = 0;
      $this->_M_initialize();
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_Rb_tree_node_int();
  }
  function _M_initialize() {
    $this->_M_header->_M_color = 0;
    $this->_M_header->_M_parent = null;
    $this->_M_header->_M_left = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
    $this->_M_header->_M_right = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_iterator_traits_char_P {
  function __dtor() {
  }
}
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]) ? ["a" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["a"], "i" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["i"]] : null);
      $this->second = ((($a[1] ?? null)["a"][($a[1] ?? null)["i"]]) ? ["a" => (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])["a"], "i" => (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = null;
      $this->second = null;
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ($t148 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t149 = ($t148 ? $t148["a"][$t148["i"]] : null), $t149 && is_array($t149) && array_key_exists("a", $t149) ? ["a" => $t149["a"], "i" => $t149["i"]] : $t149);
      $this->second = ($t150 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t151 = ($t150 ? $t150["a"][$t150["i"]] : null), $t151 && is_array($t151) && array_key_exists("a", $t151) ? ["a" => $t151["a"], "i" => $t151["i"]] : $t151);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ($t152 = std_forward_1_std_Rb_tree_node_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t153 = ($t152 ? $t152["a"][$t152["i"]] : null), $t153 && is_array($t153) && array_key_exists("a", $t153) ? ["a" => $t153["a"], "i" => $t153["i"]] : $t153);
      $this->second = ($t154 = std_forward_1_std_Rb_tree_node_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t155 = ($t154 ? $t154["a"][$t154["i"]] : null), $t155 && is_array($t155) && array_key_exists("a", $t155) ? ["a" => $t155["a"], "i" => $t155["i"]] : $t155);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_is_lvalue_reference_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_base_P_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_base_P_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_base_P_R_std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0();
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_is_rvalue_reference_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P extends std_not_std_is_void_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_base_P_std_not_std_is_reference_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1();
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_remove_reference_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_convertible_int_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_enable_if_value0_void {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_P(...$a);
  }
  function __init_std_is_function_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_int_P(...$a);
  }
  function __init_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_int_P_std_is_array_int_P extends std_is_array_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  function __init_std_or_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P extends std_or_std_is_function_int_P_std_is_array_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_P_std_is_array_int_P();
  }
}
class std_conditional_value0_std_is_function_int_P_std_is_array_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_iterator_traits_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  function __dtor() {
  }
}
class std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
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
class std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
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
class std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0();
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
class std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
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
class std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR();
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  function __init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  function __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_conditional_value0_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a);
  }
  function __init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t156 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t156 ? ["a" => $t156["a"], "i" => $t156["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function base__c() {
    return ($this->_M_current ? ["a" => $this->_M_current["a"], "i" => $this->_M_current["i"]] : null);
  }
  function op_mul__c() {
    return std_move_std_basic_string_char_std_char_traits_char_std_allocator_char($this->_M_current);
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
}
class std_conditional_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1();
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
  static function construct__rv($__a, $__p, $__args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::_S_construct__rv($__a, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__args_0));
  }
  static function _S_construct__rv($__a, $__p, $__args_0) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
  }
  public static $value;
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
class std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
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
class std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value1_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1();
  }
}
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
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
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0();
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value1_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_is_array_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P extends std_not_std_is_void_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_int_P_std_not_std_is_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1();
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int {
  function __dtor() {
  }
  static function construct__rv($__a, $__p, $__args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_int::_S_construct__rv($__a, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
  }
  static function _S_construct__rv($__a, $__p, $__args_0) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_Rb_tree_node_int_int();
  }
}
class std_is_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_rvalue_reference_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_std_Rb_tree_node_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_or_std_is_void_int_std_is_function_int extends std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int();
  }
}
class std_conditional_value0_std_is_void_int_std_is_function_int {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_std_is_function_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_lvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_int_std_is_lvalue_reference_int {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0();
  }
}
class std_remove_reference_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_of_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int extends std_is_base_of_int_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_base_of_int_std_Rb_tree_node_int();
  }
}
class std_conditional_value1_std_is_base_of_int_std_Rb_tree_node_int_std_not_std_is_same_int_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0_std_is_static_castable_int_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int();
  }
}
class std_is_destructible_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_destructible_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0 extends std_is_array_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_int_value0_std_is_array_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_is_function_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_Rb_tree_node_int();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_arithmetic_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_integral_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_integral_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int extends std_is_floating_point_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_enum_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_pointer_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_member_pointer_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int extends std_is_scalar_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_destructible_impl_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_is_lvalue_reference_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R extends std_not_std_is_reference_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_int_R_std_not_std_is_reference_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_Rb_tree_node_int_int();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_int_int_std_is_destructible_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  function __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __dtor() {
  }
}
class std_iterator_traits_std_vector_int_std_allocator_int_P {
  function __dtor() {
  }
}
class std_move_if_noexcept_cond_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_move_if_noexcept_cond_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_move_if_noexcept_cond_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_void_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_void_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0 extends std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR();
  }
}
class std_is_nothrow_move_constructible_std_vector_int_std_allocator_int extends std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0();
  }
}
class std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR();
  }
}
class std_is_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_rvalue_reference_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_is_rvalue_reference_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_not_std_is_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_void_helper_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR extends std_not_std_is_reference_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_RR_std_not_std_is_reference_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_add_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0();
  }
}
class std_is_function_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR extends std_is_function_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_lvalue_reference_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0();
  }
}
class std_remove_reference_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR();
  }
}
class std_is_destructible_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_destructible_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_unknown_bounds_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_array_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_extent_std_vector_int_std_allocator_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0 extends std_is_array_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_vector_int_std_allocator_int_value0_std_is_array_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_function_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_is_function_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_vector_int_std_allocator_int();
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_scalar_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_scalar_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_arithmetic_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_integral_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_integral_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_floating_point_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int extends std_is_floating_point_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_enum_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_enum_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_pointer_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_pointer_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_member_pointer_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_vector_int_std_allocator_int();
  }
}
class std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int();
  }
}
class std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int();
  }
}
class std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_vector_int_std_allocator_int_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_vector_int_std_allocator_int_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_vector_int_std_allocator_int_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int extends std_is_scalar_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_vector_int_std_allocator_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_destructible_impl_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R extends std_is_lvalue_reference_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_vector_int_std_allocator_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_void_helper_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R extends std_not_std_is_reference_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_vector_int_std_allocator_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_R_std_not_std_is_reference_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_vector_int_std_allocator_int_R extends std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_destructible_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR();
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0 extends std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R();
  }
}
class std_is_copy_constructible_std_vector_int_std_allocator_int extends std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0();
  }
}
class std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R();
  }
}
class std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_function_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R extends std_is_function_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_vector_int_std_allocator_int_R();
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_rvalue_reference_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0();
  }
}
class std_remove_reference_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R();
  }
}
class std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_destructible_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  function __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int extends std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int();
  }
}
class std_conditional_value0_std_is_copy_constructible_std_vector_int_std_allocator_int_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_move_iterator_std_vector_int_std_allocator_int_P {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  function __init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t157 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t157 ? ["a" => $t157["a"], "i" => $t157["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function base__c() {
    return ($this->_M_current ? ["a" => $this->_M_current["a"], "i" => $this->_M_current["i"]] : null);
  }
  function op_mul__c() {
    return std_move_std_vector_int_std_allocator_int($this->_M_current);
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
}
class std_conditional_value0_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P {
  function __dtor() {
  }
}
class std_iterator_traits_int_P {
  function __dtor() {
  }
}
class std_move_if_noexcept_cond_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_move_if_noexcept_cond_int(...$a);
  }
  function __init_std_move_if_noexcept_cond_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nothrow_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_constructible_int_int_RR(...$a);
  }
  function __init_std_is_nothrow_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nothrow_move_constructible_impl_int_value0 extends std_is_nothrow_constructible_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_impl_int_value0(...$a);
  }
  function __init_std_is_nothrow_move_constructible_impl_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_constructible_int_int_RR();
  }
}
class std_is_nothrow_move_constructible_int extends std_is_nothrow_move_constructible_impl_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_int(...$a);
  }
  function __init_std_is_nothrow_move_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_move_constructible_impl_int_value0();
  }
}
class std_is_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_int_int_RR(...$a);
  }
  function __init_std_is_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_int_int_RR extends std_is_direct_constructible_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_int_int_RR();
  }
}
class std_is_direct_constructible_ref_cast_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_RR_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_RR_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_RR_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int_RR(...$a);
  }
  function __init_std_is_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int_RR(...$a);
  }
  function __init_std_is_lvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int_RR(...$a);
  }
  function __init_std_is_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR extends std_is_rvalue_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int_RR();
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_reference_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int_RR(...$a);
  }
  function __init_std_not_std_is_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int_RR(...$a);
  }
  function __init_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int_RR {
  function __dtor() {
  }
}
class std_remove_volatile_int_RR {
  function __dtor() {
  }
}
class std_remove_const_int_RR {
  function __dtor() {
  }
}
class std_is_void_helper_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int_RR(...$a);
  }
  function __init_std_is_void_helper_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int_RR(...$a);
  }
  function __init_std_not_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR extends std_not_std_is_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_int_RR();
  }
}
class std_conditional_value0_std_not_std_is_void_int_RR_std_not_std_is_reference_int_RR {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_RR_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int_RR extends std_add_rvalue_reference_helper_int_RR_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int_RR(...$a);
  }
  function __init_std_add_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_RR_value0();
  }
}
class std_is_function_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_RR(...$a);
  }
  function __init_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_RR_std_is_function_int_RR extends std_is_function_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  function __init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int_RR();
  }
}
class std_conditional_value0_std_is_void_int_RR_std_is_function_int_RR {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_RR_std_is_function_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_RR_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_RR_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_RR_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int extends std_is_lvalue_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int_RR();
  }
}
class std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int_RR {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_RR_int_value0();
  }
}
class std_remove_reference_int_RR {
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
class std_conditional_value0_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0_std_is_static_castable_int_RR_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_int_int_RR extends std_is_direct_constructible_new_safe_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_int_int_RR();
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
class std_is_direct_constructible_impl_int_int_RR extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR extends std_is_direct_constructible_impl_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_int_int_RR();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_RR_std_is_destructible_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_RR_std_is_direct_constructible_new_safe_int_int_RR {
  function __dtor() {
  }
}
class std_is_nt_constructible_impl_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR extends std_is_nt_constructible_impl_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nt_constructible_impl_int_int_RR();
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_int_int_RR_std_is_constructible_int_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_nothrow_move_constructible_int(...$a);
  }
  function __init_std_not_std_is_nothrow_move_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
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
class std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int extends std_not_std_is_nothrow_move_constructible_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a);
  }
  function __init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_nothrow_move_constructible_int();
  }
}
class std_conditional_value0_std_is_copy_constructible_int_std_not_std_is_nothrow_move_constructible_int {
  function __dtor() {
  }
}
class std_move_iterator_int_P {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_std_move_iterator_int_P(...$a);
  }
  function __init_std_move_iterator_int_P(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t158 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t158 ? ["a" => $t158["a"], "i" => $t158["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function base__c() {
    return ($this->_M_current ? ["a" => $this->_M_current["a"], "i" => $this->_M_current["i"]] : null);
  }
  function op_mul__c() {
    return std_move_int($this->_M_current);
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
}
class std_conditional_value0_int_P_std_move_iterator_int_P {
  function __dtor() {
  }
}
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  function __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
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
class std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __dtor() {
  }
}
class std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  function __init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  function __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
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
class std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_remove_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_declval_protector_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_vector_int_std_allocator_int_RR {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_vector_int_std_allocator_int_RR(...$a);
  }
  function __init_std_declval_protector_std_vector_int_std_allocator_int_RR(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_vector_int_std_allocator_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_vector_int_std_allocator_int_R(...$a);
  }
  function __init_std_declval_protector_std_vector_int_std_allocator_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]) ? ["a" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["a"], "i" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t159 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t160 = ($t159 ? $t159["a"][$t159["i"]] : null), $t160 && is_array($t160) && array_key_exists("a", $t160) ? ["a" => $t160["a"], "i" => $t160["i"]] : $t160);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_mul__c() {
    return $this->_M_current;
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
  function base__c() {
    return ["a" => [$this->_M_current], "i" => 0];
  }
}
class std_are_same_int_P_int_P {
  function __dtor() {
  }
}
class gnu_cxx_enable_if_value1_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_declval_protector_int_RR {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int_RR(...$a);
  }
  function __init_std_declval_protector_int_RR(...$a) {
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
class std_remove_reference_std_allocator_int {
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
class std_tuple {
  function __dtor() {
  }
}
class std_remove_reference_int_P {
  function __dtor() {
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
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function gnu_cxx_exchange_and_add_single($__mem, $__val) {
  $__result = $__mem["a"][$__mem["i"]];
  $__mem["a"][$__mem["i"]] += $__val;
  return $__result;
}
function gnu_cxx_exchange_and_add_dispatch($__mem, $__val) {
  return gnu_cxx_exchange_and_add_single(($__mem ? ["a" => $__mem["a"], "i" => $__mem["i"]] : null), $__val);
}
function std_swap_int_P($__a, $__b) {
  $__tmp = ["v" => ($t161 = std_move_int_P($__a["a"][$__a["i"]]), $t162 = ($t161 ? $t161["a"][$t161["i"]] : null), $t162 && is_array($t162) && array_key_exists("a", $t162) ? ["a" => $t162["a"], "i" => $t162["i"]] : $t162)];
  $__a["a"][$__a["i"]] = ($t163 = std_move_int_P($__b["a"][$__b["i"]]), $t164 = ($t163 ? $t163["a"][$t163["i"]] : null), $t164 && is_array($t164) && array_key_exists("a", $t164) ? ["a" => $t164["a"], "i" => $t164["i"]] : $t164);
  $__b["a"][$__b["i"]] = ($t165 = std_move_int_P(["a" => [$__tmp["v"]], "i" => 0]), $t166 = ($t165 ? $t165["a"][$t165["i"]] : null), $t166 && is_array($t166) && array_key_exists("a", $t166) ? ["a" => $t166["a"], "i" => $t166["i"]] : $t166);
}
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_increment"); }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_decrement"); }
function std_Rb_tree_insert_and_rebalance(...$a) { throw new Exception("unresolved external: std::_Rb_tree_insert_and_rebalance"); }
function main() {
  global $std_cout;
  $v = [[97, 0], [98, 98, 0]];
  ($t169 = ($t168 = ($t167 = (__ctj_write(__ctj_fmt($v->size__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t167), __ctj_write(__ctj_fmt($v->op_index(1))), $t168), __ctj_write("\n"), $t169);
  $m = [[[120, 0], 1], [[121, 0], 2]];
  for ($b0 = $m->begin(), $e0 = $m->end(); $b0->op_ne__c(["a" => [$e0], "i" => 0]); $b0->op_inc()) {
    $kv = $b0->op_mul__c();
    ($t172 = ($t171 = ($t170 = (__ctj_write(__ctj_fmt(($kv["a"][$kv["i"]])->first)), $std_cout), __ctj_write(__ctj_fmt([58, 0])), $t170), __ctj_write(__ctj_fmt(($kv["a"][$kv["i"]])->second)), $t171), __ctj_write(__ctj_fmt([32, 0])), $t172);
  }
  (__ctj_write("\n"), $std_cout);
  $s = [5, 6, 5];
  for ($b1 = $s->begin__c(), $e1 = $s->end__c(); $b1->op_ne__c(["a" => [$e1], "i" => 0]); $b1->op_inc()) {
    $x = ($b1->op_mul__c())["a"][($b1->op_mul__c())["i"]];
    (__ctj_write(__ctj_fmt($x)), $std_cout);
  }
  (__ctj_write("\n"), $std_cout);
  $vv = [[1, 2], [3]];
  ($t177 = ($t176 = ($t175 = ($t174 = ($t173 = (__ctj_write(__ctj_fmt($vv->size__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t173), __ctj_write(__ctj_fmt((($vv->op_index(0))["a"][($vv->op_index(0))["i"]])->size__c())), $t174), __ctj_write(__ctj_fmt([32, 0])), $t175), __ctj_write(__ctj_fmt((($vv->op_index(1))["a"][($vv->op_index(1))["i"]])->op_index(0))), $t176), __ctj_write("\n"), $t177);
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
function std_declval_char_P() {
  return ($t178 = std_declval_protector_char_P::__delegate(), $t178["a"][$t178["i"]]);
}
function std_declval_int() {
  return std_declval_protector_int::__delegate();
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R::__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P::__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_RR() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR::__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R::__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P::__delegate();
}
function std_declval_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int() {
  return std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P::__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R() {
  return std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R::__delegate();
}
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P::__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P::__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R::__delegate();
}
function std_declval_std_vector_int_std_allocator_int_RR() {
  return std_declval_protector_std_vector_int_std_allocator_int_RR::__delegate();
}
function std_declval_std_vector_int_std_allocator_int_R() {
  return std_declval_protector_std_vector_int_std_allocator_int_R::__delegate();
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR::__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char::__delegate();
}
function std_forward_1_char_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_vector_int_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P($__x, $__y) {
  return (!(std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_1030($__x, $__y)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P($__x, $__y) {
  return (!(std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030($__x, $__y)));
}
function std_operator_3_int_P_int_P($__x, $__y) {
  return (!(std_operator_3_int_P_int_P_1030($__x, $__y)));
}
function std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char($__first, $__last, $__result, $__alloc) {
  return ($t179 = std_uninitialized_copy_a_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(new std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t179 ? ["a" => $t179["a"], "i" => $t179["i"]] : null);
}
function std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int($__first, $__last, $__result, $__alloc) {
  return ($t180 = std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(new std_move_iterator_std_vector_int_std_allocator_int_P(std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_std_vector_int_std_allocator_int_P(std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t180 ? ["a" => $t180["a"], "i" => $t180["i"]] : null);
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  return ($t181 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t181 ? ["a" => $t181["a"], "i" => $t181["i"]] : null);
}
function std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::destroy($__alloc, ($t182 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char($__first), $t182 ? ["a" => $t182["a"], "i" => $t182["i"]] : null));
  }
}
function std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::destroy($__alloc, ($t183 = std_addressof_std_vector_int_std_allocator_int($__first), $t183 ? ["a" => $t183["a"], "i" => $t183["i"]] : null));
  }
}
function std_Destroy_2_int_P_std_allocator_int($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_int::destroy($__alloc, ($t184 = std_addressof_int($__first), $t184 ? ["a" => $t184["a"], "i" => $t184["i"]] : null));
  }
}
function std_max_unsigned_long_long($__a, $__b) {
  if (($__a["a"][$__a["i"]] < $__b["a"][$__b["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P($__i) {
  return new std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P($__i) {
  return new std_move_iterator_std_vector_int_std_allocator_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P($__i) {
  return new std_move_iterator_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_uninitialized_copy_a_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char::construct($__alloc, ($t185 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char($__cur), $t185 ? ["a" => $t185["a"], "i" => $t185["i"]] : null), $__first);
      }
      return ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int::construct($__alloc, ($t186 = std_addressof_std_vector_int_std_allocator_int($__cur), $t186 ? ["a" => $t186["a"], "i" => $t186["i"]] : null), $__first);
      }
      return ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t187 = std_addressof_int($__cur), $t187 ? ["a" => $t187["a"], "i" => $t187["i"]] : null), $__first);
      }
      return ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_int_P_std_allocator_int(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t188 = std_addressof_int($__cur), $t188 ? ["a" => $t188["a"], "i" => $t188["i"]] : null), $__first);
      }
      return ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_int_P_std_allocator_int(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_addressof_std_vector_int_std_allocator_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_addressof_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_operator_5_char_std_char_traits_char_std_allocator_char($__lhs, $__rhs) {
  return (($__lhs["a"][$__lhs["i"]])->compare__c($__rhs) < 0);
}
function std_move_std_vector_int_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_move_std_basic_string_char_std_char_traits_char_std_allocator_char($__t) {
  return $__t["a"][$__t["i"]];
}
function std_move_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_move_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_move_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_1030($__x, $__y) {
  return ((($t189 = ($__x["a"][$__x["i"]])->base__c(), $t189)) === (($t190 = ($__y["a"][$__y["i"]])->base__c(), $t190)) || ((($t189 = ($__x["a"][$__x["i"]])->base__c(), $t189)) && (($t190 = ($__y["a"][$__y["i"]])->base__c(), $t190)) && (($t189 = ($__x["a"][$__x["i"]])->base__c(), $t189))["a"] === (($t190 = ($__y["a"][$__y["i"]])->base__c(), $t190))["a"] && (($t189 = ($__x["a"][$__x["i"]])->base__c(), $t189))["i"] === (($t190 = ($__y["a"][$__y["i"]])->base__c(), $t190))["i"]));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030($__x, $__y) {
  return ((($t191 = ($__x["a"][$__x["i"]])->base__c(), $t191)) === (($t192 = ($__y["a"][$__y["i"]])->base__c(), $t192)) || ((($t191 = ($__x["a"][$__x["i"]])->base__c(), $t191)) && (($t192 = ($__y["a"][$__y["i"]])->base__c(), $t192)) && (($t191 = ($__x["a"][$__x["i"]])->base__c(), $t191))["a"] === (($t192 = ($__y["a"][$__y["i"]])->base__c(), $t192))["a"] && (($t191 = ($__x["a"][$__x["i"]])->base__c(), $t191))["i"] === (($t192 = ($__y["a"][$__y["i"]])->base__c(), $t192))["i"]));
}
function std_operator_3_int_P_int_P_1030($__x, $__y) {
  return ((($t193 = ($__x["a"][$__x["i"]])->base__c(), $t193)) === (($t194 = ($__y["a"][$__y["i"]])->base__c(), $t194)) || ((($t193 = ($__x["a"][$__x["i"]])->base__c(), $t193)) && (($t194 = ($__y["a"][$__y["i"]])->base__c(), $t194)) && (($t193 = ($__x["a"][$__x["i"]])->base__c(), $t193))["a"] === (($t194 = ($__y["a"][$__y["i"]])->base__c(), $t194))["a"] && (($t193 = ($__x["a"][$__x["i"]])->base__c(), $t193))["i"] === (($t194 = ($__y["a"][$__y["i"]])->base__c(), $t194))["i"]));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int($__lhs, $__rhs) {
  return (!(((($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197) ? (($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["a"][(($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["i"]] : null)) === ((($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198) ? (($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["a"][(($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["i"]] : null)) || (((($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197) ? (($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["a"][(($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["i"]] : null)) && ((($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198) ? (($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["a"][(($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["i"]] : null)) && ((($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197) ? (($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["a"][(($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["i"]] : null))["a"] === ((($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198) ? (($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["a"][(($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["i"]] : null))["a"] && ((($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197) ? (($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["a"][(($t197 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t197))["i"]] : null))["i"] === ((($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198) ? (($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["a"][(($t198 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t198))["i"]] : null))["i"])));
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
$std_allocator_arg = new std_allocator_arg_t([]);
$std_ignore = [];
$gnu_cxx_default_lock_policy = 0;
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
std_locale::$_S_once = new class_157();
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
std_locale_facet::$_S_c_locale = null;
std_locale_facet::$_S_c_name = null;
std_locale_facet::$_S_once = new class_157();
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
std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
std_is_convertible_helper_int_int_value0::$value = (1 === 1);
std_declval_protector_char_P::$__stop = false;
std_declval_protector_int::$__stop = false;
std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0::$value = (2 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0::$value = (2 === 1);
std_declval_protector_std_Rb_tree_node_base_P_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_base_P::$__stop = false;
std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1::$value = std_integral_constant_bool_value0::$value;
std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::$value = std_integral_constant_bool_value1::$value;
std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int::$value = std_integral_constant_bool_value1::$value;
std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_base_to_derived_ref_int_RR_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_base_to_derived_ref_int_R_int_value1::$value = std_integral_constant_bool_value0::$value;
std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR::$__stop = false;
std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P::$__stop = false;
std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int::$__stop = false;
std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P::$__stop = false;
std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (1 === 1);
std_is_convertible_helper_int_R_int_value0::$value = (1 === 1);
std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0::$value = (1 === 1);
std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_std_allocator_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_R::$__stop = false;
std_declval_protector_std_vector_int_std_allocator_int_RR::$__stop = false;
std_declval_protector_std_vector_int_std_allocator_int_R::$__stop = false;
std_declval_protector_int_RR::$__stop = false;
std_declval_protector_int_R::$__stop = false;
std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char::$__stop = false;
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
