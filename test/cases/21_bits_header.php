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
class tm {
  public $tm_sec;
  public $tm_min;
  public $tm_hour;
  public $tm_mday;
  public $tm_mon;
  public $tm_year;
  public $tm_wday;
  public $tm_yday;
  public $tm_isdst;
  function __construct(...$a) {
    $this->__init_tm(...$a);
  }
  function __init_tm(...$a) {
    $this->tm_sec = 0;
    $this->tm_min = 0;
    $this->tm_hour = 0;
    $this->tm_mday = 0;
    $this->tm_mon = 0;
    $this->tm_year = 0;
    $this->tm_wday = 0;
    $this->tm_yday = 0;
    $this->tm_isdst = 0;
  }
  function __dtor() {
  }
}
class class_48 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_48(...$a);
  }
  function __init_class_48(...$a) {
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
class std_sfinae_types {
  function __dtor() {
  }
}
class std_sfinae_types_class_54 {
  public $__arr;
  function __construct(...$a) {
    $this->__init_std_sfinae_types_class_54(...$a);
  }
  function __init_std_sfinae_types_class_54(...$a) {
    $this->__arr = array_fill(0, 2, 0);
  }
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
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
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
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_forward_iterator_tag(...$a);
  }
  function __init_std_forward_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_input_iterator_tag();
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_bidirectional_iterator_tag(...$a);
  }
  function __init_std_bidirectional_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_forward_iterator_tag();
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_random_access_iterator_tag(...$a);
  }
  function __init_std_random_access_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_bidirectional_iterator_tag();
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
class std_nothrow_t {
  function __construct(...$a) {
    $this->__init_std_nothrow_t(...$a);
  }
  function __init_std_nothrow_t(...$a) {
  }
  function __dtor() {
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
  static function assign($__c1, $__c2) {
    $__c1["a"][$__c1["i"]] = $__c2["a"][$__c2["i"]];
  }
  static function copy($__s1, $__s2, $__n) {
    return ($t0 = memcpy(($__s1 ? ["a" => $__s1["a"], "i" => $__s1["i"]] : null), ($__s2 ? ["a" => $__s2["a"], "i" => $__s2["i"]] : null), $__n), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
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
  function __dtor() {
  }
}
class std_allocator_char extends gnu_cxx_new_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char(...$a);
  }
  function __init_std_allocator_char(...$a) {
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
    $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider();
  }
  function __dtor() {
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
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    $this->_M_p = null;
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
    return ($t1 = wmemcpy(($__s1 ? ["a" => $__s1["a"], "i" => $__s1["i"]] : null), ($__s2 ? ["a" => $__s2["a"], "i" => $__s2["i"]] : null), intdiv($__n, 4)), $t1 ? ["a" => $t1["a"], "i" => $t1["i"]] : null);
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
      memcpy((($a[2] ?? null) ? ["a" => ($a[2] ?? null)["a"], "i" => ($a[2] ?? null)["i"]] : null), (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), (($a[1] ?? null ? ($a[1] ?? null)["i"] : 0) - ($a[0] ?? null ? ($a[0] ?? null)["i"] : 0)));
      return (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function do_narrow__c(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      return $a[0] ?? null;
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && (is_int($a[2]) || is_bool($a[2])) && ($a[3] === null || is_array($a[3]))) {
      memcpy((($a[3] ?? null) ? ["a" => ($a[3] ?? null)["a"], "i" => ($a[3] ?? null)["i"]] : null), (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null), (($a[1] ?? null ? ($a[1] ?? null)["i"] : 0) - ($a[0] ?? null ? ($a[0] ?? null)["i"] : 0)));
      return (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  public static $id;
  public static $table_size;
}
class std_complex_float {
  function __dtor() {
  }
}
class std_complex_double {
  function __dtor() {
  }
}
class std_type_info {
  public $__name;
  function __construct(...$a) {
    $this->__init_std_type_info(...$a);
  }
  function __init_std_type_info(...$a) {
    $this->__name = null;
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
class std_Swallow_assign {
  function __construct(...$a) {
    $this->__init_std_Swallow_assign(...$a);
  }
  function __init_std_Swallow_assign(...$a) {
  }
  function __dtor() {
  }
}
class std_Nocopy_types {
  public $_M_object;
  public $_M_const_object;
  function __construct(...$a) {
    $this->__init_std_Nocopy_types(...$a);
  }
  function __init_std_Nocopy_types(...$a) {
    $this->_M_object = null;
    $this->_M_const_object = null;
  }
  function __dtor() {
  }
}
class std_Any_data {
  public $_M_unused;
  public $_M_pod_data;
  function __construct(...$a) {
    $this->__init_std_Any_data(...$a);
  }
  function __init_std_Any_data(...$a) {
    $this->_M_unused = new std_Nocopy_types();
    $this->_M_pod_data = array_fill(0, 8, 0);
  }
  function __dtor() {
  }
}
class std_Function_base {
  public $_M_functor;
  public $_M_manager;
  function __construct(...$a) {
    $this->__init_std_Function_base(...$a);
  }
  function __init_std_Function_base(...$a) {
    $this->_M_functor = new std_Any_data();
    $this->_M_manager = 0;
  }
  function __dtor() {
  }
  public static $_M_max_size;
  public static $_M_max_align;
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
class std_bernoulli_distribution {
  public $_M_param;
  function __construct(...$a) {
    $this->__init_std_bernoulli_distribution(...$a);
  }
  function __init_std_bernoulli_distribution(...$a) {
    $this->_M_param = new std_bernoulli_distribution_param_type(0.5);
  }
  function __dtor() {
  }
}
class std_bernoulli_distribution_param_type {
  public $_M_p;
  function __construct(...$a) {
    $this->__init_std_bernoulli_distribution_param_type(...$a);
  }
  function __init_std_bernoulli_distribution_param_type(...$a) {
    $this->_M_p = (array_key_exists(0, $a) ? $a[0] : (0.5));
  }
  function __dtor() {
  }
}
class std_Base_bitset_value0 {
  function __dtor() {
  }
}
class std_bitset_value0 extends std_Base_bitset_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_bitset_value0(...$a);
  }
  function __init_std_bitset_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Base_bitset_value0();
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
class std_atomic_flag_base {
  public $_M_i;
  function __construct(...$a) {
    $this->__init_std_atomic_flag_base(...$a);
  }
  function __init_std_atomic_flag_base(...$a) {
    $this->_M_i = 0;
  }
  function __dtor() {
  }
}
class std_atomic_flag extends std_atomic_flag_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_atomic_flag(...$a);
  }
  function __init_std_atomic_flag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_atomic_flag_base();
  }
}
class std_error_code {
  public $_M_value;
  public $_M_cat;
  function __construct(...$a) {
    $this->__init_std_error_code(...$a);
  }
  function __init_std_error_code(...$a) {
    $this->_M_value = 0;
    $this->_M_cat = null;
  }
  function __dtor() {
  }
}
class std_error_condition {
  public $_M_value;
  public $_M_cat;
  function __construct(...$a) {
    $this->__init_std_error_condition(...$a);
  }
  function __init_std_error_condition(...$a) {
    $this->_M_value = 0;
    $this->_M_cat = null;
  }
  function __dtor() {
  }
}
class std_error_category {
  function __dtor() {
  }
  function name__c() {
    throw new Exception("pure virtual called");
  }
  function message__c($p0) {
    throw new Exception("pure virtual called");
  }
}
class std_defer_lock_t {
  function __construct(...$a) {
    $this->__init_std_defer_lock_t(...$a);
  }
  function __init_std_defer_lock_t(...$a) {
  }
  function __dtor() {
  }
}
class std_try_to_lock_t {
  function __construct(...$a) {
    $this->__init_std_try_to_lock_t(...$a);
  }
  function __init_std_try_to_lock_t(...$a) {
  }
  function __dtor() {
  }
}
class std_adopt_lock_t {
  function __construct(...$a) {
    $this->__init_std_adopt_lock_t(...$a);
  }
  function __init_std_adopt_lock_t(...$a) {
  }
  function __dtor() {
  }
}
class std_detail_PatternCursor {
  function __dtor() {
  }
  function _M_next() {
    throw new Exception("pure virtual called");
  }
  function _M_at_end__c() {
    throw new Exception("pure virtual called");
  }
}
class std_detail_Results {
  function __dtor() {
  }
  function _M_set_pos($__i, $__j, $__p) {
    throw new Exception("pure virtual called");
  }
  function _M_set_matched($__i, $__is_matched) {
    throw new Exception("pure virtual called");
  }
}
class std_detail_State {
  public $_M_opcode;
  public $_M_next;
  public $_M_alt;
  public $_M_subexpr;
  public $_M_tagger;
  public $_M_matches;
  function __construct(...$a) {
    $this->__init_std_detail_State(...$a);
  }
  function __init_std_detail_State(...$a) {
    $this->_M_opcode = 0;
    $this->_M_next = 0;
    $this->_M_alt = 0;
    $this->_M_subexpr = 0;
    $this->_M_tagger = new std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R();
    $this->_M_matches = new std_function_func_bool_std_detail_PatternCursor_R();
  }
  function __dtor() {
  }
}
class std_unary_function_std_detail_PatternCursor_R_bool {
  function __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R extends std_unary_function_std_detail_PatternCursor_R_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a);
  }
  function __init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_std_detail_PatternCursor_R_bool();
  }
}
class std_function_func_bool_std_detail_PatternCursor_R extends std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R {
  public $_M_invoker;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_function_func_bool_std_detail_PatternCursor_R(...$a);
  }
  function __init_std_function_func_bool_std_detail_PatternCursor_R(...$a) {
    $this->_M_functor = new std_Any_data();
    $this->_M_manager = null;
    $this->_M_invoker = null;
  }
  function __dtor() {
    $this->__dtor_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R();
    $this->__dtor_std_Function_base();
  }
}
class std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  function __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  function __init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void();
  }
}
class std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R {
  public $_M_invoker;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  function __init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
    $this->_M_functor = new std_Any_data();
    $this->_M_manager = null;
    $this->_M_invoker = null;
  }
  function __dtor() {
    $this->__dtor_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R();
    $this->__dtor_std_Function_base();
  }
}
class gnu_cxx_new_allocator_std_detail_State {
  function __dtor() {
  }
}
class std_allocator_std_detail_State extends gnu_cxx_new_allocator_std_detail_State {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_detail_State(...$a);
  }
  function __init_std_allocator_std_detail_State(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_detail_State();
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  function __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a) {
    $this->_M_impl = new std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl();
  }
  function __dtor() {
  }
}
class std_vector_std_detail_State_std_allocator_std_detail_State extends std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  function __init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_std_detail_State_std_allocator_std_detail_State();
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl extends std_allocator_std_detail_State {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a);
  }
  function __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a) {
    $this->_M_start = null;
    $this->_M_finish = null;
    $this->_M_end_of_storage = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_detail_State();
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State {
  function __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State_rebind_std_detail_State {
  function __dtor() {
  }
}
class std_allocator_std_detail_State_rebind_std_detail_State {
  function __dtor() {
  }
}
class std_type_index {
  public $_M_target;
  function __construct(...$a) {
    $this->__init_std_type_index(...$a);
  }
  function __init_std_type_index(...$a) {
    $this->_M_target = null;
  }
  function __dtor() {
  }
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
    return new std_fpos_class_48((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_48((-(1)));
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
        $__buf_len = ["v" => ((($t2 = $this->egptr__c(), $t2) ? (($t2 = $this->egptr__c(), $t2))["i"] : 0) - (($t3 = $this->gptr__c(), $t3) ? (($t3 = $this->gptr__c(), $t3))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t5 = ($t4 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t4["a"][$t4["i"]]), $t5))["a"][(($t5 = ($t4 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t4["a"][$t4["i"]]), $t5))["i"]];
            std_char_traits_char::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t6 = $this->gptr__c(), $t6 ? ["a" => $t6["a"], "i" => $t6["i"]] : null), $__len);
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
        $__buf_len = ["v" => ((($t7 = $this->epptr__c(), $t7) ? (($t7 = $this->epptr__c(), $t7))["i"] : 0) - (($t8 = $this->pptr__c(), $t8) ? (($t8 = $this->pptr__c(), $t8))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t10 = ($t9 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t9["a"][$t9["i"]]), $t10))["a"][(($t10 = ($t9 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t9["a"][$t9["i"]]), $t10))["i"]];
            std_char_traits_char::copy(($t11 = $this->pptr__c(), $t11 ? ["a" => $t11["a"], "i" => $t11["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
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
    return new std_fpos_class_48((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_48((-(1)));
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
        $__buf_len = ["v" => ((($t12 = $this->egptr__c(), $t12) ? (($t12 = $this->egptr__c(), $t12))["i"] : 0) - (($t13 = $this->gptr__c(), $t13) ? (($t13 = $this->gptr__c(), $t13))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t15 = ($t14 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t14["a"][$t14["i"]]), $t15))["a"][(($t15 = ($t14 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t14["a"][$t14["i"]]), $t15))["i"]];
            std_char_traits_wchar_t::copy(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), ($t16 = $this->gptr__c(), $t16 ? ["a" => $t16["a"], "i" => $t16["i"]] : null), $__len);
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
        $__buf_len = ["v" => ((($t17 = $this->epptr__c(), $t17) ? (($t17 = $this->epptr__c(), $t17))["i"] : 0) - (($t18 = $this->pptr__c(), $t18) ? (($t18 = $this->pptr__c(), $t18))["i"] : 0))];
        if ($__buf_len["v"]) {
           {
            $__remaining = ["v" => ($__n - $__ret)];
            $__len = (($t20 = ($t19 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t19["a"][$t19["i"]]), $t20))["a"][(($t20 = ($t19 = std_min_long(["a" => $__buf_len, "i" => "v"], ["a" => $__remaining, "i" => "v"]), $t19["a"][$t19["i"]]), $t20))["i"]];
            std_char_traits_wchar_t::copy(($t21 = $this->pptr__c(), $t21 ? ["a" => $t21["a"], "i" => $t21["i"]] : null), ($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null), $__len);
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
class std_Base_bitset_value1 {
  public $_M_w;
  function __construct(...$a) {
    $this->__init_std_Base_bitset_value1(...$a);
  }
  function __init_std_Base_bitset_value1(...$a) {
    $this->_M_w = $a[0] ?? null;
  }
  function __dtor() {
  }
}
class std_bitset_value11 extends std_Base_bitset_value1 {
  function __construct(...$a) {
    parent::__construct(std_Sanitize_val_value11_value1::_S_do_sanitize_val($__val));
    $this->__init_std_bitset_value11(...$a);
  }
  function __init_std_bitset_value11(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Base_bitset_value1();
  }
}
class gnu_cxx_char_traits_int {
  function __dtor() {
  }
}
class std_char_traits_int extends gnu_cxx_char_traits_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_char_traits_int(...$a);
  }
  function __init_std_char_traits_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_char_traits_int();
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
    return ($t22 = operatornew__unsigned_long_long(($__n * 4)), $t22 ? ["a" => $t22["a"], "i" => $t22["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 4);
  }
  function construct__rv($__p, $__args_0) {
    ($__p["a"][$__p["i"]] = ($t23 = std_forward_1_int($__args_0), $t23["a"][$t23["i"]]));
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
class std_basic_string_int_std_char_traits_int_std_allocator_int {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  function __init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    $this->_M_dataplus = new std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a);
  }
  function __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider extends std_allocator_int {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a);
  }
  function __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_int();
  }
}
class std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class std_fpos_class_48 {
  public $_M_off;
  public $_M_state;
  function __construct(...$a) {
    $this->__init_std_fpos_class_48(...$a);
  }
  function __init_std_fpos_class_48(...$a) {
    $this->_M_off = $a[0] ?? null;
    $this->_M_state = new class_48();
  }
  function __dtor() {
  }
}
class std_Sanitize_val_value11_value1 {
  function __dtor() {
  }
  static function _S_do_sanitize_val($__val) {
    return ($__val & (~(((~(((0) & 0xFFFFFFFF))) << 11))));
  }
}
class std_Vector_base_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0] ?? null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function _M_get_Tp_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_allocate($__n) {
    return ($t24 = (($__n !== 0) ? $this->_M_impl->allocate($__n, ["a" => [0], "i" => 0]) : 0), $t24 ? ["a" => $t24["a"], "i" => $t24["i"]] : null);
  }
  function _M_deallocate($__p, $__n) {
    if ($__p) {
      $this->_M_impl->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 2 && $a[0] instanceof std_initializer_list_int && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__a);
    }
    $this->__init_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 2 && $a[0] instanceof std_initializer_list_int && ($a[1] === null || is_array($a[1]))) {
      $this->_M_range_initialize(($t25 = ["a" => $a[0] ?? null, "i" => 0], $t25 ? ["a" => $t25["a"], "i" => $t25["i"]] : null), ($t26 = ["a" => $a[0] ?? null, "i" => count($a[0] ?? null)], $t26 ? ["a" => $t26["a"], "i" => $t26["i"]] : null), new std_random_access_iterator_tag([]));
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_int_std_allocator_int();
  }
  function begin() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_start], "i" => 0]);
  }
  function end() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_finish], "i" => 0]);
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int::max_size($this->_M_get_Tp_allocator());
  }
  function push_back($__x) {
    if ((!($this->_M_impl->_M_finish === $this->_M_impl->_M_end_of_storage || ($this->_M_impl->_M_finish && $this->_M_impl->_M_end_of_storage && $this->_M_impl->_M_finish["a"] === $this->_M_impl->_M_end_of_storage["a"] && $this->_M_impl->_M_finish["i"] === $this->_M_impl->_M_end_of_storage["i"])))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $__x);
        ++$this->_M_impl->_M_finish["i"];
      }
    }
    else {
      $this->_M_emplace_back_aux__rv($__x);
    }
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t27 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t27["a"][$t27["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($t28 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t28 ? ["a" => $t28["a"], "i" => $t28["i"]] : null), std_forward_1_int($__args_0));
        $__new_finish = null;
        $__new_finish = ($t29 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t29 ? ["a" => $t29["a"], "i" => $t29["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int::destroy(["a" => $this, "i" => "_M_impl"], ($t30 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t30 ? ["a" => $t30["a"], "i" => $t30["i"]] : null));
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
    $this->_M_impl->_M_end_of_storage = ($t31 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t31 ? ["a" => $t31["a"], "i" => $t31["i"]] : null);
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
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_int();
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
  static function destroy($__a, $__p) {
    ($__a["a"][$__a["i"]])->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  function __dtor() {
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
    return ($t33 = (["a" => (($t32 = $this->begin__c(), $t32))["a"], "i" => (($t32 = $this->begin__c(), $t32))["i"] + ($this->size__c())]), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null);
  }
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_current = ($t34 = 0, $t34 ? ["a" => $t34["a"], "i" => $t34["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]) ? ["a" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["a"], "i" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_current) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_current)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_current)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t35 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t36 = ($t35 ? $t35["a"][$t35["i"]] : null), $t36 && is_array($t36) && array_key_exists("a", $t36) ? ["a" => $t36["a"], "i" => $t36["i"]] : $t36);
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
  function op_dec() {
    --$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
  function op_add_assign($__n) {
    $this->_M_current["i"] += ($__n["a"][$__n["i"]]);
    return ["a" => [$this], "i" => 0];
  }
  function op_add__c($__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [(["a" => $this->_M_current["a"], "i" => $this->_M_current["i"] + ($__n["a"][$__n["i"]])])], "i" => 0]);
  }
  function op_sub__c($__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [(["a" => $this->_M_current["a"], "i" => $this->_M_current["i"] - ($__n["a"][$__n["i"]])])], "i" => 0]);
  }
  function base__c() {
    return ["a" => [$this->_M_current], "i" => 0];
  }
  function op_assign($o) {
    $this->_M_current = ((($o["a"][$o["i"]])->_M_current) ? ["a" => (($o["a"][$o["i"]])->_M_current)["a"], "i" => (($o["a"][$o["i"]])->_M_current)["i"]] : null);
    return ["a" => [$this], "i" => 0];
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
class std_iterator_traits_int_P {
  function __dtor() {
  }
}
class std_remove_cv_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_volatile_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_const_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Wrap_type_std_random_access_iterator_tag {
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
class std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  function __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1();
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  public $_M_real;
  public $_M_imag;
  function __construct(...$a) {
    $this->__init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    $this->_M_real = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
    $this->_M_imag = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
  }
  function __dtor() {
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
      $this->_M_current = ($t37 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t37 ? ["a" => $t37["a"], "i" => $t37["i"]] : null);
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
class std_tuple {
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
class std_is_move_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  function __dtor() {
  }
  static function _S_base($__it) {
    return $__it;
  }
}
class std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0();
  }
}
class std_is_move_iterator_int_P {
  function __dtor() {
  }
}
class std_Iter_base_int_P_value0 {
  function __dtor() {
  }
  static function _S_base($__it) {
    return ($__it ? ["a" => $__it["a"], "i" => $__it["i"]] : null);
  }
}
class std_Miter_base_int_P extends std_Iter_base_int_P_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Miter_base_int_P(...$a);
  }
  function __init_std_Miter_base_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Iter_base_int_P_value0();
  }
}
class std_is_normal_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  function __dtor() {
  }
  static function _S_base($__it) {
    return ($t38 = $__it->base__c(), $t39 = ($t38 ? $t38["a"][$t38["i"]] : null), $t39 && is_array($t39) && array_key_exists("a", $t39) ? ["a" => $t39["a"], "i" => $t39["i"]] : $t39);
  }
}
class std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1();
  }
}
class std_Niter_base_int_P extends std_Iter_base_int_P_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Niter_base_int_P(...$a);
  }
  function __init_std_Niter_base_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Iter_base_int_P_value0();
  }
}
class std_is_normal_iterator_int_P {
  function __dtor() {
  }
}
class std_is_pointer_int_P {
  function __dtor() {
  }
}
class std_are_same_int_int {
  function __dtor() {
  }
}
class std_copy_move_backward_value1_value1_std_random_access_iterator_tag {
  function __dtor() {
  }
  static function __copy_move_b($__first, $__last, $__result) {
    $_Num = (($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0));
    if ($_Num) {
      memmove(($t40 = (["a" => $__result["a"], "i" => $__result["i"] - ($_Num)]), $t40 ? ["a" => $t40["a"], "i" => $t40["i"]] : null), ($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), intdiv((4 * $_Num), 4));
    }
    return ($t41 = (["a" => $__result["a"], "i" => $__result["i"] - ($_Num)]), $t41 ? ["a" => $t41["a"], "i" => $t41["i"]] : null);
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
function memcpy($dst, $src, $n) {
  $d = ($dst ? ["a" => $dst["a"], "i" => $dst["i"]] : null);
  $s = ($src ? ["a" => $src["a"], "i" => $src["i"]] : null);
  for ($i = 0; ($i < $n); $i++) {
    $d["a"][$d["i"] + ($i)] = $s["a"][$s["i"] + ($i)];
  }
  return $dst;
}
function memmove($dst, $src, $n) {
  $d = ($dst ? ["a" => $dst["a"], "i" => $dst["i"]] : null);
  $s = ($src ? ["a" => $src["a"], "i" => $src["i"]] : null);
  if ((($d ? $d["i"] : 0) < ($s ? $s["i"] : 0))) {
     {
      for ($i = 0; ($i < $n); $i++) {
        $d["a"][$d["i"] + ($i)] = $s["a"][$s["i"] + ($i)];
      }
    }
  }
  else {
     {
      while (($n > 0)) {
         {
          $n--;
          $d["a"][$d["i"] + ($n)] = $s["a"][$s["i"] + ($n)];
        }
      }
    }
  }
  return $dst;
}
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Exception("unresolved external: std::__throw_length_error"); }
function std_lg__long($__n) {
  return (((8 * 8) - 1) - (($__n) === 0 ? 32 : 32 - strlen(decbin(($__n) & 0xffffffff))));
}
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function std_swap_int($__a, $__b) {
  $__tmp = ["v" => (($t43 = ($t42 = std_move_int($__a), $t42["a"][$t42["i"]]), $t43))["a"][(($t43 = ($t42 = std_move_int($__a), $t42["a"][$t42["i"]]), $t43))["i"]]];
  $__a["a"][$__a["i"]] = (($t45 = ($t44 = std_move_int($__b), $t44["a"][$t44["i"]]), $t45))["a"][(($t45 = ($t44 = std_move_int($__b), $t44["a"][$t44["i"]]), $t45))["i"]];
  $__b["a"][$__b["i"]] = (($t47 = ($t46 = std_move_int(["a" => $__tmp, "i" => "v"]), $t46["a"][$t46["i"]]), $t47))["a"][(($t47 = ($t46 = std_move_int(["a" => $__tmp, "i" => "v"]), $t46["a"][$t46["i"]]), $t47))["i"]];
}
function std_operator_4_int_P_int_P($__x, $__y) {
  return (!(std_operator_4_int_P_int_P_1030($__x, $__y)));
}
function std_operator_4_int_P_int_P_1030($__x, $__y) {
  return ((($t48 = ($__x["a"][$__x["i"]])->base__c(), $t48)) === (($t49 = ($__y["a"][$__y["i"]])->base__c(), $t49)) || ((($t48 = ($__x["a"][$__x["i"]])->base__c(), $t48)) && (($t49 = ($__y["a"][$__y["i"]])->base__c(), $t49)) && (($t48 = ($__x["a"][$__x["i"]])->base__c(), $t48))["a"] === (($t49 = ($__y["a"][$__y["i"]])->base__c(), $t49))["a"] && (($t48 = ($__x["a"][$__x["i"]])->base__c(), $t48))["i"] === (($t49 = ($__y["a"][$__y["i"]])->base__c(), $t49))["i"]));
}
function main() {
  global $std_cout;
  $v = new std_vector_int_std_allocator_int();
  $v->push_back(["a" => [3], "i" => 0]);
  $v->push_back(["a" => [1], "i" => 0]);
  $v->push_back(["a" => [4], "i" => 0]);
  $v->push_back(["a" => [1], "i" => 0]);
  $v->push_back(["a" => [5], "i" => 0]);
  std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()));
  $s = 0;
  for ($b0 = $v->begin(), $e0 = $v->end(); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$b0], "i" => 0], ["a" => [$e0], "i" => 0]); $b0->op_inc()) {
    $x = ($b0->op_mul__c())["a"][($b0->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  ($t50 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write("\n"), $t50);
  ($t55 = ($t54 = ($t53 = (__ctj_write(__ctj_fmt((($t52 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()))), $t52))->op_mul__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t53), __ctj_write(__ctj_fmt((($t51 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()))), $t51))->op_mul__c())), $t54), __ctj_write("\n"), $t55);
  ($t56 = (__ctj_write(__ctj_fmt(std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()), 0))), $std_cout), __ctj_write("\n"), $t56);
  ($t60 = ($t59 = ($t58 = (__ctj_write(__ctj_fmt(std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()), ["a" => [1], "i" => 0]))), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t58), __ctj_write(__ctj_fmt((($t57 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()), ["a" => [4], "i" => 0])), $t57))->op_mul__c())), $t59), __ctj_write("\n"), $t60);
  ($t61 = (__ctj_write(__ctj_fmt((std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()), ["a" => [3], "i" => 0]) ? 1 : 0))), $std_cout), __ctj_write("\n"), $t61);
  std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->begin()), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($v->end()));
  $t = 0;
  for ($b1 = $v->begin(), $e1 = $v->end(); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$b1], "i" => 0], ["a" => [$e1], "i" => 0]); $b1->op_inc()) {
    $y = $b1->op_mul__c();
    $t = (($t * 10) + $y["a"][$y["i"]]);
  }
  ($t62 = (__ctj_write(__ctj_fmt($t)), $std_cout), __ctj_write("\n"), $t62);
  $w = [9, 8, 7];
  $u = 0;
  for ($b2 = $w->begin(), $e2 = $w->end(); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$b2], "i" => 0], ["a" => [$e2], "i" => 0]); $b2->op_inc()) {
    $x = ($b2->op_mul__c())["a"][($b2->op_mul__c())["i"]];
    $u += $x;
  }
  ($t65 = ($t64 = ($t63 = (__ctj_write(__ctj_fmt($u)), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t63), __ctj_write(__ctj_fmt($w->size__c())), $t64), __ctj_write("\n"), $t65);
  $a = [7, 5, 9];
  std_sort_int_P(["a" => $a, "i" => 0], ($t66 = (["a" => (["a" => $a, "i" => 0])["a"], "i" => (["a" => $a, "i" => 0])["i"] + (3)]), $t66 ? ["a" => $t66["a"], "i" => $t66["i"]] : null));
  ($t69 = ($t68 = ($t67 = (__ctj_write(__ctj_fmt($a[0])), $std_cout), __ctj_write(__ctj_fmt($a[1])), $t67), __ctj_write(__ctj_fmt($a[2])), $t68), __ctj_write("\n"), $t69);
  return 0;
}
function std_min_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
     {
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__first, $__last, (std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0])) * 2));
      std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last);
    }
  }
}
function std_sort_int_P($__first, $__last) {
  if ((!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"])))) {
     {
      std_introsort_loop_int_P_long(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), (std_lg__long((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0))) * 2));
      std_final_insertion_sort_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int($__lhs, $__rhs) {
  return (!(((($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72) ? (($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["i"]] : null)) === ((($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73) ? (($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["a"][(($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["i"]] : null)) || (((($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72) ? (($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["i"]] : null)) && ((($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73) ? (($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["a"][(($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["i"]] : null)) && ((($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72) ? (($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["i"]] : null))["a"] === ((($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73) ? (($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["a"][(($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["i"]] : null))["a"] && ((($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72) ? (($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t72))["i"]] : null))["i"] === ((($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73) ? (($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["a"][(($t73 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t73))["i"]] : null))["i"])));
}
function std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
    return $__first;
  }
  $__result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0]);
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int($__first->op_inc(), ["a" => [$__last], "i" => 0])) {
    if ((($__result->op_mul__c())["a"][($__result->op_mul__c())["i"]] < ($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]])) {
      $__result->op_assign(["a" => [$__first], "i" => 0]);
    }
  }
  return $__result;
}
function std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
    return $__first;
  }
  $__result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0]);
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int($__first->op_inc(), ["a" => [$__last], "i" => 0])) {
    if ((($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]] < ($__result->op_mul__c())["a"][($__result->op_mul__c())["i"]])) {
      $__result->op_assign(["a" => [$__first], "i" => 0]);
    }
  }
  return $__result;
}
function std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__init) {
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); $__first->op_inc()) {
    $__init = ($__init + ($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]]);
  }
  return $__init;
}
function std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__value) {
  $__n = 0;
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); $__first->op_inc()) {
    if ((($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]] === $__value["a"][$__value["i"]])) {
      ++$__n;
    }
  }
  return $__n;
}
function std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__val) {
  $__len = std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last);
  while (($__len > 0)) {
     {
      $__half = ($__len >> 1);
      $__middle = ["v" => new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0])];
      std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(["a" => $__middle, "i" => "v"], $__half);
      if (((($__middle["v"])->op_mul__c())["a"][(($__middle["v"])->op_mul__c())["i"]] < $__val["a"][$__val["i"]])) {
         {
          $__first->op_assign(["a" => $__middle, "i" => "v"]);
          $__first->op_inc();
          $__len = (($__len - $__half) - 1);
        }
      }
      else {
        $__len = $__half;
      }
    }
  }
  return $__first;
}
function std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__val) {
  $__i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__val))], "i" => 0]);
  return (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__i], "i" => 0], ["a" => [$__last], "i" => 0]) && (!(($__val["a"][$__val["i"]] < ($__i->op_mul__c())["a"][($__i->op_mul__c())["i"]]))));
}
function std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  $__first = ["v" => $__first];
  std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first["v"], $__last, new std_random_access_iterator_tag(std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => $__first, "i" => "v"])));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883($__lhs, $__rhs) {
  return (((($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76) ? (($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76))["a"][(($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76))["i"]] : null) ? ((($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76) ? (($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76))["a"][(($t76 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t76))["i"]] : null))["i"] : 0) - ((($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77) ? (($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77))["a"][(($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77))["i"]] : null) ? ((($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77) ? (($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77))["a"][(($t77 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t77))["i"]] : null))["i"] : 0));
}
function std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__first, $__last, $__depth_limit) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]) > 16)) {
     {
      if (($__depth_limit === 0)) {
         {
          std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $__last);
          return;
        }
      }
      --$__depth_limit;
      $__cut = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last))], "i" => 0]);
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__cut, $__last, $__depth_limit);
      $__last->op_assign(["a" => [$__cut], "i" => 0]);
    }
  }
}
function std_introsort_loop_int_P_long($__first, $__last, $__depth_limit) {
  while (((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)) > 16)) {
     {
      if (($__depth_limit === 0)) {
         {
          std_partial_sort_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
          return;
        }
      }
      --$__depth_limit;
      $__cut = ($t78 = std_unguarded_partition_pivot_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null)), $t78 ? ["a" => $t78["a"], "i" => $t78["i"]] : null);
      std_introsort_loop_int_P_long(($__cut ? ["a" => $__cut["a"], "i" => $__cut["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), $__depth_limit);
      $__last = ($__cut ? ["a" => $__cut["a"], "i" => $__cut["i"]] : null);
    }
  }
}
function std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]) > 16)) {
     {
      std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__first->op_add__c(["a" => [16], "i" => 0]));
      std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first->op_add__c(["a" => [16], "i" => 0]), $__last);
    }
  }
  else {
    std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last);
  }
}
function std_final_insertion_sort_int_P($__first, $__last) {
  if (((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)) > 16)) {
     {
      std_insertion_sort_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($t79 = (["a" => $__first["a"], "i" => $__first["i"] + (16)]), $t79 ? ["a" => $t79["a"], "i" => $t79["i"]] : null));
      std_unguarded_insertion_sort_int_P(($t80 = (["a" => $__first["a"], "i" => $__first["i"] + (16)]), $t80 ? ["a" => $t80["a"], "i" => $t80["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
    }
  }
  else {
    std_insertion_sort_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804($__lhs, $__rhs) {
  return (((($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83) ? (($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["a"][(($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["i"]] : null)) === ((($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84) ? (($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["a"][(($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["i"]] : null)) || (((($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83) ? (($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["a"][(($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["i"]] : null)) && ((($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84) ? (($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["a"][(($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["i"]] : null)) && ((($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83) ? (($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["a"][(($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["i"]] : null))["a"] === ((($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84) ? (($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["a"][(($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["i"]] : null))["a"] && ((($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83) ? (($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["a"][(($t83 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t83))["i"]] : null))["i"] === ((($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84) ? (($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["a"][(($t84 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t84))["i"]] : null))["i"]));
}
function std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  $__first = ["v" => $__first];
  return std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first["v"], $__last, new std_random_access_iterator_tag(std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => $__first, "i" => "v"])));
}
function std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__i, $__n) {
  $__d = $__n;
  std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__i, $__d, new std_random_access_iterator_tag(std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__i)));
}
function std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($p0) {
  return new std_random_access_iterator_tag([]);
}
function std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $p2) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
    return;
  }
  $__last->op_dec();
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
     {
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last);
      $__first->op_inc();
      $__last->op_dec();
    }
  }
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  return ($t85 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t85 ? ["a" => $t85["a"], "i" => $t85["i"]] : null);
}
function std_Destroy_2_int_P_std_allocator_int($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_int::destroy($__alloc, ($t86 = std_addressof_int($__first), $t86 ? ["a" => $t86["a"], "i" => $t86["i"]] : null));
  }
}
function std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle, $__last) {
  std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle, $__last);
  std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle);
}
function std_partial_sort_int_P($__first, $__middle, $__last) {
  std_heap_select_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__middle ? ["a" => $__middle["a"], "i" => $__middle["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
  std_sort_heap_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__middle ? ["a" => $__middle["a"], "i" => $__middle["i"]] : null));
}
function std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  $__mid = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first->op_add__c(["a" => [intdiv(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]), 2)], "i" => 0])], "i" => 0]);
  std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__mid, $__last->op_sub__c(["a" => [1], "i" => 0]));
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first->op_add__c(["a" => [1], "i" => 0]), $__last, $__first));
}
function std_unguarded_partition_pivot_int_P($__first, $__last) {
  $__mid = ($t87 = (["a" => $__first["a"], "i" => $__first["i"] + (intdiv((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)), 2))]), $t87 ? ["a" => $t87["a"], "i" => $t87["i"]] : null);
  std_move_median_first_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__mid ? ["a" => $__mid["a"], "i" => $__mid["i"]] : null), ($t88 = (["a" => $__last["a"], "i" => $__last["i"] - (1)]), $t88 ? ["a" => $t88["a"], "i" => $t88["i"]] : null));
  return ($t90 = std_unguarded_partition_int_P_int(($t89 = (["a" => $__first["a"], "i" => $__first["i"] + (1)]), $t89 ? ["a" => $t89["a"], "i" => $t89["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), $__first), $t90 ? ["a" => $t90["a"], "i" => $t90["i"]] : null);
}
function std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])) {
    return;
  }
  for ($__i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first->op_add__c(["a" => [1], "i" => 0])], "i" => 0]); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__i], "i" => 0], ["a" => [$__last], "i" => 0]); $__i->op_inc()) {
     {
      if ((($__i->op_mul__c())["a"][($__i->op_mul__c())["i"]] < ($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]])) {
         {
          $__val = ["v" => (($t92 = ($t91 = std_move_int($__i), $t91["a"][$t91["i"]]), $t92))["a"][(($t92 = ($t91 = std_move_int($__i), $t91["a"][$t91["i"]]), $t92))["i"]]];
          new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__i, $__i->op_add__c(["a" => [1], "i" => 0])));
          ($t93 = $__first->op_mul__c(), $t93["a"][$t93["i"]] = (($t95 = ($t94 = std_move_int(["a" => $__val, "i" => "v"]), $t94["a"][$t94["i"]]), $t95))["a"][(($t95 = ($t94 = std_move_int(["a" => $__val, "i" => "v"]), $t94["a"][$t94["i"]]), $t95))["i"]]);
        }
      }
      else {
        std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__i);
      }
    }
  }
}
function std_insertion_sort_int_P($__first, $__last) {
  if (($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))) {
    return;
  }
  for ($__i = ($t96 = (["a" => $__first["a"], "i" => $__first["i"] + (1)]), $t96 ? ["a" => $t96["a"], "i" => $t96["i"]] : null); (!($__i === $__last || ($__i && $__last && $__i["a"] === $__last["a"] && $__i["i"] === $__last["i"]))); ++$__i["i"]) {
     {
      if (($__i["a"][$__i["i"]] < $__first["a"][$__first["i"]])) {
         {
          $__val = ["v" => (($t98 = ($t97 = std_move_int($__i), $t97["a"][$t97["i"]]), $t98))["a"][(($t98 = ($t97 = std_move_int($__i), $t97["a"][$t97["i"]]), $t98))["i"]]];
          std_move_backward_int_P_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null), ($t99 = (["a" => $__i["a"], "i" => $__i["i"] + (1)]), $t99 ? ["a" => $t99["a"], "i" => $t99["i"]] : null));
          $__first["a"][$__first["i"]] = (($t101 = ($t100 = std_move_int(["a" => $__val, "i" => "v"]), $t100["a"][$t100["i"]]), $t101))["a"][(($t101 = ($t100 = std_move_int(["a" => $__val, "i" => "v"]), $t100["a"][$t100["i"]]), $t101))["i"]];
        }
      }
      else {
        std_unguarded_linear_insert_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
      }
    }
  }
}
function std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  for ($__i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__first], "i" => 0]); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$__i], "i" => 0], ["a" => [$__last], "i" => 0]); $__i->op_inc()) {
    std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__i);
  }
}
function std_unguarded_insertion_sort_int_P($__first, $__last) {
  for ($__i = ($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null); (!($__i === $__last || ($__i && $__last && $__i["a"] === $__last["a"] && $__i["i"] === $__last["i"]))); ++$__i["i"]) {
    std_unguarded_linear_insert_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
  }
}
function std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $p2) {
  return gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]);
}
function std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long($__i, $__n, $p2) {
  ($__i["a"][$__i["i"]])->op_add_assign(["a" => [$__n], "i" => 0]);
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829($__lhs, $__rhs) {
  return (((($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104) ? (($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104))["a"][(($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104))["i"]] : null) ? ((($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104) ? (($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104))["a"][(($t104 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t104))["i"]] : null))["i"] : 0) < ((($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105) ? (($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105))["a"][(($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105))["i"]] : null) ? ((($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105) ? (($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105))["a"][(($t105 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t105))["i"]] : null))["i"] : 0));
}
function std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__b) {
  std_swap_int($__a, $__b);
}
function std_iter_swap_int_P_int_P($__a, $__b) {
  std_swap_int($__a, $__b);
}
function std_max_unsigned_long_long($__a, $__b) {
  if (($__a["a"][$__a["i"]] < $__b["a"][$__b["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR::__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P($__i) {
  return new std_move_iterator_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_4_int_P_int_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t106 = std_addressof_int($__cur), $t106 ? ["a" => $t106["a"], "i" => $t106["i"]] : null), $__first);
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
function std_addressof_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle, $__last) {
  std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle);
  for ($__i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__middle], "i" => 0]); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829(["a" => [$__i], "i" => 0], ["a" => [$__last], "i" => 0]); $__i->op_inc()) {
    if ((($__i->op_mul__c())["a"][($__i->op_mul__c())["i"]] < ($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]])) {
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__middle, $__i);
    }
  }
}
function std_heap_select_int_P($__first, $__middle, $__last) {
  std_make_heap_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__middle ? ["a" => $__middle["a"], "i" => $__middle["i"]] : null));
  for ($__i = ($__middle ? ["a" => $__middle["a"], "i" => $__middle["i"]] : null); (($__i ? $__i["i"] : 0) < ($__last ? $__last["i"] : 0)); ++$__i["i"]) {
    if (($__i["a"][$__i["i"]] < $__first["a"][$__first["i"]])) {
      std_pop_heap_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__middle ? ["a" => $__middle["a"], "i" => $__middle["i"]] : null), ($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
    }
  }
}
function std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]) > 1)) {
     {
      $__last->op_dec();
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $__last);
    }
  }
}
function std_sort_heap_int_P($__first, $__last) {
  while (((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)) > 1)) {
     {
      --$__last["i"];
      std_pop_heap_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
    }
  }
}
function std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__b, $__c) {
  if ((($__a->op_mul__c())["a"][($__a->op_mul__c())["i"]] < ($__b->op_mul__c())["a"][($__b->op_mul__c())["i"]])) {
     {
      if ((($__b->op_mul__c())["a"][($__b->op_mul__c())["i"]] < ($__c->op_mul__c())["a"][($__c->op_mul__c())["i"]])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__b);
      }
      else {
        if ((($__a->op_mul__c())["a"][($__a->op_mul__c())["i"]] < ($__c->op_mul__c())["a"][($__c->op_mul__c())["i"]])) {
          std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__c);
        }
      }
    }
  }
  else {
    if ((($__a->op_mul__c())["a"][($__a->op_mul__c())["i"]] < ($__c->op_mul__c())["a"][($__c->op_mul__c())["i"]])) {
      return;
    }
    else {
      if ((($__b->op_mul__c())["a"][($__b->op_mul__c())["i"]] < ($__c->op_mul__c())["a"][($__c->op_mul__c())["i"]])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__c);
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__a, $__b);
      }
    }
  }
}
function std_move_median_first_int_P($__a, $__b, $__c) {
  if (($__a["a"][$__a["i"]] < $__b["a"][$__b["i"]])) {
     {
      if (($__b["a"][$__b["i"]] < $__c["a"][$__c["i"]])) {
        std_iter_swap_int_P_int_P(($__a ? ["a" => $__a["a"], "i" => $__a["i"]] : null), ($__b ? ["a" => $__b["a"], "i" => $__b["i"]] : null));
      }
      else {
        if (($__a["a"][$__a["i"]] < $__c["a"][$__c["i"]])) {
          std_iter_swap_int_P_int_P(($__a ? ["a" => $__a["a"], "i" => $__a["i"]] : null), ($__c ? ["a" => $__c["a"], "i" => $__c["i"]] : null));
        }
      }
    }
  }
  else {
    if (($__a["a"][$__a["i"]] < $__c["a"][$__c["i"]])) {
      return;
    }
    else {
      if (($__b["a"][$__b["i"]] < $__c["a"][$__c["i"]])) {
        std_iter_swap_int_P_int_P(($__a ? ["a" => $__a["a"], "i" => $__a["i"]] : null), ($__c ? ["a" => $__c["a"], "i" => $__c["i"]] : null));
      }
      else {
        std_iter_swap_int_P_int_P(($__a ? ["a" => $__a["a"], "i" => $__a["i"]] : null), ($__b ? ["a" => $__b["a"], "i" => $__b["i"]] : null));
      }
    }
  }
}
function std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int($__first, $__last, $__pivot) {
  while (true) {
     {
      while ((($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]] < $__pivot["a"][$__pivot["i"]])) {
        $__first->op_inc();
      }
      $__last->op_dec();
      while (($__pivot["a"][$__pivot["i"]] < ($__last->op_mul__c())["a"][($__last->op_mul__c())["i"]])) {
        $__last->op_dec();
      }
      if ((!(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0])))) {
        return $__first;
      }
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last);
      $__first->op_inc();
    }
  }
}
function std_unguarded_partition_int_P_int($__first, $__last, $__pivot) {
  while (true) {
     {
      while (($__first["a"][$__first["i"]] < $__pivot["a"][$__pivot["i"]])) {
        ++$__first["i"];
      }
      --$__last["i"];
      while (($__pivot["a"][$__pivot["i"]] < $__last["a"][$__last["i"]])) {
        --$__last["i"];
      }
      if ((!((($__first ? $__first["i"] : 0) < ($__last ? $__last["i"] : 0))))) {
        return ($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null);
      }
      std_iter_swap_int_P_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null));
      ++$__first["i"];
    }
  }
}
function std_move_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $__result) {
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first)), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__last)), $__result));
}
function std_move_backward_int_P_int_P($__first, $__last, $__result) {
  return ($t109 = std_copy_move_backward_a2_value1_int_P_int_P(($t107 = std_miter_base_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null)), $t107 ? ["a" => $t107["a"], "i" => $t107["i"]] : null), ($t108 = std_miter_base_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null)), $t108 ? ["a" => $t108["a"], "i" => $t108["i"]] : null), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null)), $t109 ? ["a" => $t109["a"], "i" => $t109["i"]] : null);
}
function std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__last) {
  $__val = ["v" => (($t111 = ($t110 = std_move_int($__last), $t110["a"][$t110["i"]]), $t111))["a"][(($t111 = ($t110 = std_move_int($__last), $t110["a"][$t110["i"]]), $t111))["i"]]];
  $__next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$__last], "i" => 0]);
  $__next->op_dec();
  while (($__val["v"] < ($__next->op_mul__c())["a"][($__next->op_mul__c())["i"]])) {
     {
      ($t112 = $__last->op_mul__c(), $t112["a"][$t112["i"]] = (($t114 = ($t113 = std_move_int($__next), $t113["a"][$t113["i"]]), $t114))["a"][(($t114 = ($t113 = std_move_int($__next), $t113["a"][$t113["i"]]), $t114))["i"]]);
      $__last->op_assign(["a" => [$__next], "i" => 0]);
      $__next->op_dec();
    }
  }
  ($t115 = $__last->op_mul__c(), $t115["a"][$t115["i"]] = (($t117 = ($t116 = std_move_int(["a" => $__val, "i" => "v"]), $t116["a"][$t116["i"]]), $t117))["a"][(($t117 = ($t116 = std_move_int(["a" => $__val, "i" => "v"]), $t116["a"][$t116["i"]]), $t117))["i"]]);
}
function std_unguarded_linear_insert_int_P($__last) {
  $__val = ["v" => (($t119 = ($t118 = std_move_int($__last), $t118["a"][$t118["i"]]), $t119))["a"][(($t119 = ($t118 = std_move_int($__last), $t118["a"][$t118["i"]]), $t119))["i"]]];
  $__next = ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null);
  --$__next["i"];
  while (($__val["v"] < $__next["a"][$__next["i"]])) {
     {
      $__last["a"][$__last["i"]] = (($t121 = ($t120 = std_move_int($__next), $t120["a"][$t120["i"]]), $t121))["a"][(($t121 = ($t120 = std_move_int($__next), $t120["a"][$t120["i"]]), $t121))["i"]];
      $__last = ($__next ? ["a" => $__next["a"], "i" => $__next["i"]] : null);
      --$__next["i"];
    }
  }
  $__last["a"][$__last["i"]] = (($t123 = ($t122 = std_move_int(["a" => $__val, "i" => "v"]), $t122["a"][$t122["i"]]), $t123))["a"][(($t123 = ($t122 = std_move_int(["a" => $__val, "i" => "v"]), $t122["a"][$t122["i"]]), $t123))["i"]];
}
function std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]) < 2)) {
    return;
  }
  $__len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]);
  $__parent = intdiv(($__len - 2), 2);
  while (true) {
     {
      $__value = ["v" => (($t125 = ($t124 = std_move_int($__first->op_add__c(["a" => [$__parent], "i" => 0])), $t124["a"][$t124["i"]]), $t125))["a"][(($t125 = ($t124 = std_move_int($__first->op_add__c(["a" => [$__parent], "i" => 0])), $t124["a"][$t124["i"]]), $t125))["i"]]];
      std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int($__first, $__parent, $__len, (($t127 = ($t126 = std_move_int(["a" => $__value, "i" => "v"]), $t126["a"][$t126["i"]]), $t127))["a"][(($t127 = ($t126 = std_move_int(["a" => $__value, "i" => "v"]), $t126["a"][$t126["i"]]), $t127))["i"]]);
      if (($__parent === 0)) {
        return;
      }
      $__parent--;
    }
  }
}
function std_make_heap_int_P($__first, $__last) {
  if (((($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)) < 2)) {
    return;
  }
  $__len = (($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0));
  $__parent = intdiv(($__len - 2), 2);
  while (true) {
     {
      $__value = ["v" => (($t129 = ($t128 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__parent)])), $t128["a"][$t128["i"]]), $t129))["a"][(($t129 = ($t128 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__parent)])), $t128["a"][$t128["i"]]), $t129))["i"]]];
      std_adjust_heap_int_P_long_int(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), $__parent, $__len, (($t131 = ($t130 = std_move_int(["a" => $__value, "i" => "v"]), $t130["a"][$t130["i"]]), $t131))["a"][(($t131 = ($t130 = std_move_int(["a" => $__value, "i" => "v"]), $t130["a"][$t130["i"]]), $t131))["i"]]);
      if (($__parent === 0)) {
        return;
      }
      $__parent--;
    }
  }
}
function std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $__result) {
  $__value = ["v" => (($t133 = ($t132 = std_move_int($__result), $t132["a"][$t132["i"]]), $t133))["a"][(($t133 = ($t132 = std_move_int($__result), $t132["a"][$t132["i"]]), $t133))["i"]]];
  ($t134 = $__result->op_mul__c(), $t134["a"][$t134["i"]] = (($t136 = ($t135 = std_move_int($__first), $t135["a"][$t135["i"]]), $t136))["a"][(($t136 = ($t135 = std_move_int($__first), $t135["a"][$t135["i"]]), $t136))["i"]]);
  std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int($__first, 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(["a" => [$__last], "i" => 0], ["a" => [$__first], "i" => 0]), (($t138 = ($t137 = std_move_int(["a" => $__value, "i" => "v"]), $t137["a"][$t137["i"]]), $t138))["a"][(($t138 = ($t137 = std_move_int(["a" => $__value, "i" => "v"]), $t137["a"][$t137["i"]]), $t138))["i"]]);
}
function std_pop_heap_int_P($__first, $__last, $__result) {
  $__value = ["v" => (($t140 = ($t139 = std_move_int($__result), $t139["a"][$t139["i"]]), $t140))["a"][(($t140 = ($t139 = std_move_int($__result), $t139["a"][$t139["i"]]), $t140))["i"]]];
  $__result["a"][$__result["i"]] = (($t142 = ($t141 = std_move_int($__first), $t141["a"][$t141["i"]]), $t142))["a"][(($t142 = ($t141 = std_move_int($__first), $t141["a"][$t141["i"]]), $t142))["i"]];
  std_adjust_heap_int_P_long_int(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), 0, (($__last ? $__last["i"] : 0) - ($__first ? $__first["i"] : 0)), (($t144 = ($t143 = std_move_int(["a" => $__value, "i" => "v"]), $t143["a"][$t143["i"]]), $t144))["a"][(($t144 = ($t143 = std_move_int(["a" => $__value, "i" => "v"]), $t143["a"][$t143["i"]]), $t144))["i"]]);
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__it) {
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0::_S_base($__it));
}
function std_miter_base_int_P($__it) {
  return ($t145 = std_Iter_base_int_P_value0::_S_base(($__it ? ["a" => $__it["a"], "i" => $__it["i"]] : null)), $t145 ? ["a" => $t145["a"], "i" => $t145["i"]] : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first, $__last, $__result) {
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [std_copy_move_backward_a_value1_int_P_int_P(($t146 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__first), $t146 ? ["a" => $t146["a"], "i" => $t146["i"]] : null), ($t147 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__last), $t147 ? ["a" => $t147["a"], "i" => $t147["i"]] : null), ($t148 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__result), $t148 ? ["a" => $t148["a"], "i" => $t148["i"]] : null))], "i" => 0]);
}
function std_copy_move_backward_a2_value1_int_P_int_P($__first, $__last, $__result) {
  return ($t152 = std_copy_move_backward_a_value1_int_P_int_P(($t149 = std_niter_base_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null)), $t149 ? ["a" => $t149["a"], "i" => $t149["i"]] : null), ($t150 = std_niter_base_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null)), $t150 ? ["a" => $t150["a"], "i" => $t150["i"]] : null), ($t151 = std_niter_base_int_P(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null)), $t151 ? ["a" => $t151["a"], "i" => $t151["i"]] : null)), $t152 ? ["a" => $t152["a"], "i" => $t152["i"]] : null);
}
function std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int($__first, $__holeIndex, $__len, $__value) {
  $__value = ["v" => $__value];
  $__topIndex = $__holeIndex;
  $__secondChild = $__holeIndex;
  while (($__secondChild < intdiv(($__len - 1), 2))) {
     {
      $__secondChild = (2 * ($__secondChild + 1));
      if (((($t154 = (($t153 = $__first->op_add__c(["a" => [$__secondChild], "i" => 0]), $t153))->op_mul__c(), $t154))["a"][(($t154 = (($t153 = $__first->op_add__c(["a" => [$__secondChild], "i" => 0]), $t153))->op_mul__c(), $t154))["i"]] < (($t156 = (($t155 = $__first->op_add__c(["a" => [($__secondChild - 1)], "i" => 0]), $t155))->op_mul__c(), $t156))["a"][(($t156 = (($t155 = $__first->op_add__c(["a" => [($__secondChild - 1)], "i" => 0]), $t155))->op_mul__c(), $t156))["i"]])) {
        $__secondChild--;
      }
      ($t157 = (($t160 = $__first->op_add__c(["a" => [$__holeIndex], "i" => 0]), $t160))->op_mul__c(), $t157["a"][$t157["i"]] = (($t159 = ($t158 = std_move_int($__first->op_add__c(["a" => [$__secondChild], "i" => 0])), $t158["a"][$t158["i"]]), $t159))["a"][(($t159 = ($t158 = std_move_int($__first->op_add__c(["a" => [$__secondChild], "i" => 0])), $t158["a"][$t158["i"]]), $t159))["i"]]);
      $__holeIndex = $__secondChild;
    }
  }
  if (((($__len & 1) === 0) && ($__secondChild === intdiv(($__len - 2), 2)))) {
     {
      $__secondChild = (2 * ($__secondChild + 1));
      ($t161 = (($t164 = $__first->op_add__c(["a" => [$__holeIndex], "i" => 0]), $t164))->op_mul__c(), $t161["a"][$t161["i"]] = (($t163 = ($t162 = std_move_int($__first->op_add__c(["a" => [($__secondChild - 1)], "i" => 0])), $t162["a"][$t162["i"]]), $t163))["a"][(($t163 = ($t162 = std_move_int($__first->op_add__c(["a" => [($__secondChild - 1)], "i" => 0])), $t162["a"][$t162["i"]]), $t163))["i"]]);
      $__holeIndex = ($__secondChild - 1);
    }
  }
  std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int($__first, $__holeIndex, $__topIndex, (($t166 = ($t165 = std_move_int(["a" => $__value, "i" => "v"]), $t165["a"][$t165["i"]]), $t166))["a"][(($t166 = ($t165 = std_move_int(["a" => $__value, "i" => "v"]), $t165["a"][$t165["i"]]), $t166))["i"]]);
}
function std_adjust_heap_int_P_long_int($__first, $__holeIndex, $__len, $__value) {
  $__value = ["v" => $__value];
  $__topIndex = $__holeIndex;
  $__secondChild = $__holeIndex;
  while (($__secondChild < intdiv(($__len - 1), 2))) {
     {
      $__secondChild = (2 * ($__secondChild + 1));
      if (((($t167 = (["a" => $__first["a"], "i" => $__first["i"] + ($__secondChild)]), $t167))["a"][(($t167 = (["a" => $__first["a"], "i" => $__first["i"] + ($__secondChild)]), $t167))["i"]] < (($t168 = (["a" => $__first["a"], "i" => $__first["i"] + (($__secondChild - 1))]), $t168))["a"][(($t168 = (["a" => $__first["a"], "i" => $__first["i"] + (($__secondChild - 1))]), $t168))["i"]])) {
        $__secondChild--;
      }
      (($t169 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t169))["a"][(($t169 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t169))["i"]] = (($t171 = ($t170 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__secondChild)])), $t170["a"][$t170["i"]]), $t171))["a"][(($t171 = ($t170 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__secondChild)])), $t170["a"][$t170["i"]]), $t171))["i"]];
      $__holeIndex = $__secondChild;
    }
  }
  if (((($__len & 1) === 0) && ($__secondChild === intdiv(($__len - 2), 2)))) {
     {
      $__secondChild = (2 * ($__secondChild + 1));
      (($t172 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t172))["a"][(($t172 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t172))["i"]] = (($t174 = ($t173 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + (($__secondChild - 1))])), $t173["a"][$t173["i"]]), $t174))["a"][(($t174 = ($t173 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + (($__secondChild - 1))])), $t173["a"][$t173["i"]]), $t174))["i"]];
      $__holeIndex = ($__secondChild - 1);
    }
  }
  std_push_heap_int_P_long_int(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), $__holeIndex, $__topIndex, (($t176 = ($t175 = std_move_int(["a" => $__value, "i" => "v"]), $t175["a"][$t175["i"]]), $t176))["a"][(($t176 = ($t175 = std_move_int(["a" => $__value, "i" => "v"]), $t175["a"][$t175["i"]]), $t176))["i"]]);
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($__it) {
  return ($t177 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1::_S_base($__it), $t177 ? ["a" => $t177["a"], "i" => $t177["i"]] : null);
}
function std_niter_base_int_P($__it) {
  return ($t178 = std_Iter_base_int_P_value0::_S_base(($__it ? ["a" => $__it["a"], "i" => $__it["i"]] : null)), $t178 ? ["a" => $t178["a"], "i" => $t178["i"]] : null);
}
function std_copy_move_backward_a_value1_int_P_int_P($__first, $__last, $__result) {
  $__simple = (((1 && 1) && 1) && 1);
  return ($t179 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag::__copy_move_b(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null)), $t179 ? ["a" => $t179["a"], "i" => $t179["i"]] : null);
}
function std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int($__first, $__holeIndex, $__topIndex, $__value) {
  $__value = ["v" => $__value];
  $__parent = intdiv(($__holeIndex - 1), 2);
  while ((($__holeIndex > $__topIndex) && ((($t181 = (($t180 = $__first->op_add__c(["a" => [$__parent], "i" => 0]), $t180))->op_mul__c(), $t181))["a"][(($t181 = (($t180 = $__first->op_add__c(["a" => [$__parent], "i" => 0]), $t180))->op_mul__c(), $t181))["i"]] < $__value["v"]))) {
     {
      ($t182 = (($t185 = $__first->op_add__c(["a" => [$__holeIndex], "i" => 0]), $t185))->op_mul__c(), $t182["a"][$t182["i"]] = (($t184 = ($t183 = std_move_int($__first->op_add__c(["a" => [$__parent], "i" => 0])), $t183["a"][$t183["i"]]), $t184))["a"][(($t184 = ($t183 = std_move_int($__first->op_add__c(["a" => [$__parent], "i" => 0])), $t183["a"][$t183["i"]]), $t184))["i"]]);
      $__holeIndex = $__parent;
      $__parent = intdiv(($__holeIndex - 1), 2);
    }
  }
  ($t186 = (($t189 = $__first->op_add__c(["a" => [$__holeIndex], "i" => 0]), $t189))->op_mul__c(), $t186["a"][$t186["i"]] = (($t188 = ($t187 = std_move_int(["a" => $__value, "i" => "v"]), $t187["a"][$t187["i"]]), $t188))["a"][(($t188 = ($t187 = std_move_int(["a" => $__value, "i" => "v"]), $t187["a"][$t187["i"]]), $t188))["i"]]);
}
function std_push_heap_int_P_long_int($__first, $__holeIndex, $__topIndex, $__value) {
  $__value = ["v" => $__value];
  $__parent = intdiv(($__holeIndex - 1), 2);
  while ((($__holeIndex > $__topIndex) && ((($t190 = (["a" => $__first["a"], "i" => $__first["i"] + ($__parent)]), $t190))["a"][(($t190 = (["a" => $__first["a"], "i" => $__first["i"] + ($__parent)]), $t190))["i"]] < $__value["v"]))) {
     {
      (($t191 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t191))["a"][(($t191 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t191))["i"]] = (($t193 = ($t192 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__parent)])), $t192["a"][$t192["i"]]), $t193))["a"][(($t193 = ($t192 = std_move_int((["a" => $__first["a"], "i" => $__first["i"] + ($__parent)])), $t192["a"][$t192["i"]]), $t193))["i"]];
      $__holeIndex = $__parent;
      $__parent = intdiv(($__holeIndex - 1), 2);
    }
  }
  (($t194 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t194))["a"][(($t194 = (["a" => $__first["a"], "i" => $__first["i"] + ($__holeIndex)]), $t194))["i"]] = (($t196 = ($t195 = std_move_int(["a" => $__value, "i" => "v"]), $t195["a"][$t195["i"]]), $t196))["a"][(($t196 = ($t195 = std_move_int(["a" => $__value, "i" => "v"]), $t195["a"][$t195["i"]]), $t196))["i"]];
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
$std_allocator_arg = new std_allocator_arg_t([]);
$std_ignore = [];
$gnu_cxx_default_lock_policy = 0;
$std_cout = new stdClass();
$std_defer_lock = [];
$std_try_to_lock = [];
$std_adopt_lock = [];
$std_regex_constants_icase = (1 << 0);
$std_regex_constants_nosubs = (1 << 1);
$std_regex_constants_optimize = (1 << 2);
$std_regex_constants_collate = (1 << 3);
$std_regex_constants_ECMAScript = (1 << 4);
$std_regex_constants_basic = (1 << 5);
$std_regex_constants_extended = (1 << 6);
$std_regex_constants_awk = (1 << 7);
$std_regex_constants_grep = (1 << 8);
$std_regex_constants_egrep = (1 << 9);
$std_regex_constants_match_default = 0;
$std_regex_constants_match_not_bol = (1 << 0);
$std_regex_constants_match_not_eol = (1 << 1);
$std_regex_constants_match_not_bow = (1 << 2);
$std_regex_constants_match_not_eow = (1 << 3);
$std_regex_constants_match_any = (1 << 4);
$std_regex_constants_match_not_null = (1 << 5);
$std_regex_constants_match_continuous = (1 << 6);
$std_regex_constants_match_prev_avail = (1 << 7);
$std_regex_constants_format_default = 0;
$std_regex_constants_format_sed = (1 << 8);
$std_regex_constants_format_no_copy = (1 << 9);
$std_regex_constants_format_first_only = (1 << 10);
$std_regex_constants_error_collate = 0;
$std_regex_constants_error_ctype = 1;
$std_regex_constants_error_escape = 2;
$std_regex_constants_error_backref = 3;
$std_regex_constants_error_brack = 4;
$std_regex_constants_error_paren = 5;
$std_regex_constants_error_brace = 6;
$std_regex_constants_error_badbrace = 7;
$std_regex_constants_error_range = 8;
$std_regex_constants_error_space = 9;
$std_regex_constants_error_badrepeat = 10;
$std_regex_constants_error_complexity = 11;
$std_regex_constants_error_stack = 12;
$std_detail_S_invalid_state_id = (-(1));
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
std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t::$npos = (((-(1))) & 0xFFFFFFFF);
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
std_Function_base::$_M_max_size = 8;
std_Function_base::$_M_max_align = 8;
std_basic_string_int_std_char_traits_int_std_allocator_int::$npos = (((-(1))) & 0xFFFFFFFF);
std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
std_integral_constant_bool_value0::$value = 0;
std_is_base_to_derived_ref_int_RR_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_base_to_derived_ref_int_R_int_value1::$value = std_integral_constant_bool_value0::$value;
std_declval_protector_int_RR::$__stop = false;
std_declval_protector_int_R::$__stop = false;
std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_ctype_wchar_t::$id = new std_locale_id();
std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
main();
