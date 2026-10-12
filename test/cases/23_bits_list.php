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
    parent::__construct();
    $this->__init_std_random_access_iterator_tag(...$a);
  }
  function __init_std_random_access_iterator_tag(...$a) {
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
class std_detail_List_node_base {
  public $_M_next;
  public $_M_prev;
  function __construct(...$a) {
    $this->__init_std_detail_List_node_base(...$a);
  }
  function __init_std_detail_List_node_base(...$a) {
    $this->_M_next = null;
    $this->_M_prev = null;
  }
  function __dtor() {
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
class std_List_base_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_List_base_int_std_allocator_int(...$a);
  }
  function __init_std_List_base_int_std_allocator_int(...$a) {
    $this->_M_impl = new std_List_base_int_std_allocator_int_List_impl();
    $this->_M_init();
  }
  function __dtor() {
  }
  function _M_get_node() {
    return ($t22 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_List_node_int::class))(1, ["a" => [0], "i" => 0]), $t22 ? ["a" => $t22["a"], "i" => $t22["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_List_node_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_clear() {
    $__cur = ($this->_M_impl->_M_node->_M_next ? ["a" => $this->_M_impl->_M_node->_M_next["a"], "i" => $this->_M_impl->_M_node->_M_next["i"]] : null);
    while ((!($__cur === (["a" => $this->_M_impl, "i" => "_M_node"]) || ($__cur && (["a" => $this->_M_impl, "i" => "_M_node"]) && $__cur["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && $__cur["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"])))) {
       {
        $__tmp = ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
        $__cur = ((($__cur["a"][$__cur["i"]])->_M_next) ? ["a" => (($__cur["a"][$__cur["i"]])->_M_next)["a"], "i" => (($__cur["a"][$__cur["i"]])->_M_next)["i"]] : null);
        (($t23 = $this->_M_get_Node_allocator(), $t23["a"][$t23["i"]]))->destroy(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
        $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
      }
    }
  }
  function _M_init() {
    $this->_M_impl->_M_node->_M_next = ((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null);
    $this->_M_impl->_M_node->_M_prev = ((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null);
  }
}
class std_list_int_std_allocator_int extends std_List_base_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_list_int_std_allocator_int(...$a);
  }
  function __init_std_list_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_List_base_int_std_allocator_int();
  }
  function begin() {
    return new std_List_iterator_int(($this->_M_impl->_M_node->_M_next ? ["a" => $this->_M_impl->_M_node->_M_next["a"], "i" => $this->_M_impl->_M_node->_M_next["i"]] : null));
  }
  function end() {
    return new std_List_iterator_int(((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null));
  }
  function empty__c() {
    return ($this->_M_impl->_M_node->_M_next === (["a" => $this->_M_impl, "i" => "_M_node"]) || ($this->_M_impl->_M_node->_M_next && (["a" => $this->_M_impl, "i" => "_M_node"]) && $this->_M_impl->_M_node->_M_next["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && $this->_M_impl->_M_node->_M_next["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"]));
  }
  function size__c() {
    return std_distance_std_List_iterator_int(new std_List_iterator_int($this->begin()), new std_List_iterator_int($this->end()));
  }
  function front() {
    return new std_List_iterator_int($this->begin());
  }
  function back() {
    $__tmp = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->end())], "i" => 0]);
    $__tmp->op_dec();
    return $__tmp;
  }
  function push_front($__x) {
    $this->_M_insert__rv(new std_List_iterator_int($this->begin()), $__x);
  }
  function pop_front() {
    $this->_M_erase(new std_List_iterator_int($this->begin()));
  }
  function push_back($__x) {
    $this->_M_insert__rv(new std_List_iterator_int($this->end()), $__x);
  }
  function swap($__x) {
    std_detail_List_node_base::swap(["a" => $this->_M_impl, "i" => "_M_node"], ["a" => ($__x["a"][$__x["i"]])->_M_impl, "i" => "_M_node"]);
    std_alloc_swap_std_allocator_std_List_node_int_value1::_S_do_it($this->_M_get_Node_allocator(), ($__x["a"][$__x["i"]])->_M_get_Node_allocator());
  }
  function clear() {
    $this->_M_clear();
    $this->_M_init();
  }
  function splice__rv(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && $a[0] instanceof std_List_iterator_int && ($a[1] === null || is_array($a[1]))) {
      if ((!((($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->empty__c()))) {
         {
          $this->_M_check_equal_allocators($a[1] ?? null);
          $this->_M_transfer($a[0] ?? null, new std_List_iterator_int((($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->begin()), new std_List_iterator_int((($a[1] ?? null)["a"][($a[1] ?? null)["i"]])->end()));
        }
      }
    }
    else if (count($a) >= 3 && count($a) <= 3 && $a[0] instanceof std_List_iterator_int && ($a[1] === null || is_array($a[1])) && $a[2] instanceof std_List_iterator_int) {
      $__j = new std_List_iterator_int(["a" => [$a[2] ?? null], "i" => 0]);
      $__j->op_inc();
      if ((($a[0] ?? null)->op_eq__c(["a" => [$a[2] ?? null], "i" => 0]) || ($a[0] ?? null)->op_eq__c(["a" => [$__j], "i" => 0]))) {
        return;
      }
      if ((!((["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)]) === ($a[1] ?? null) || ((["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)]) && ($a[1] ?? null) && (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["a"] === ($a[1] ?? null)["a"] && (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["i"] === ($a[1] ?? null)["i"])))) {
        $this->_M_check_equal_allocators($a[1] ?? null);
      }
      $this->_M_transfer($a[0] ?? null, $a[2] ?? null, $__j);
    }
    else { throw new Exception("no matching overload"); }
  }
  function splice(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && $a[0] instanceof std_List_iterator_int && ($a[1] === null || is_array($a[1]))) {
      $this->splice__rv($a[0] ?? null, std_move_std_list_int_std_allocator_int($a[1] ?? null));
    }
    else if (count($a) >= 3 && count($a) <= 3 && $a[0] instanceof std_List_iterator_int && ($a[1] === null || is_array($a[1])) && $a[2] instanceof std_List_iterator_int) {
      $this->splice__rv($a[0] ?? null, std_move_std_list_int_std_allocator_int($a[1] ?? null), $a[2] ?? null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function remove($__value) {
    $__first = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->begin())], "i" => 0]);
    $__last = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->end())], "i" => 0]);
    $__extra = new std_List_iterator_int(["a" => [$__last], "i" => 0]);
    while ($__first->op_ne__c(["a" => [$__last], "i" => 0])) {
       {
        $__next = new std_List_iterator_int(["a" => [$__first], "i" => 0]);
        $__next->op_inc();
        if ((($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]] === $__value["a"][$__value["i"]])) {
           {
            if ((!((($t24 = std_addressof_int($__first), $t24)) === (($t25 = std_addressof_int($__value), $t25)) || ((($t24 = std_addressof_int($__first), $t24)) && (($t25 = std_addressof_int($__value), $t25)) && (($t24 = std_addressof_int($__first), $t24))["a"] === (($t25 = std_addressof_int($__value), $t25))["a"] && (($t24 = std_addressof_int($__first), $t24))["i"] === (($t25 = std_addressof_int($__value), $t25))["i"])))) {
              $this->_M_erase($__first);
            }
            else {
              $__extra->op_assign(["a" => [$__first], "i" => 0]);
            }
          }
        }
        $__first->op_assign(["a" => [$__next], "i" => 0]);
      }
    }
    if ($__extra->op_ne__c(["a" => [$__last], "i" => 0])) {
      $this->_M_erase($__extra);
    }
  }
  function merge__rv($__x) {
    if ((!((["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)]) === $__x || ((["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)]) && $__x && (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["a"] === $__x["a"] && (["a" => (isset($this->ctj_a) ? $this->ctj_a : ($this->ctj_a = [])), "i" => (isset($this->ctj_i) ? $this->ctj_i : 0)])["i"] === $__x["i"])))) {
       {
        $this->_M_check_equal_allocators($__x);
        $__first1 = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->begin())], "i" => 0]);
        $__last1 = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->end())], "i" => 0]);
        $__first2 = new std_List_iterator_int(["a" => [new std_List_iterator_int(($__x["a"][$__x["i"]])->begin())], "i" => 0]);
        $__last2 = new std_List_iterator_int(["a" => [new std_List_iterator_int(($__x["a"][$__x["i"]])->end())], "i" => 0]);
        while (($__first1->op_ne__c(["a" => [$__last1], "i" => 0]) && $__first2->op_ne__c(["a" => [$__last2], "i" => 0]))) {
          if ((($__first2->op_mul__c())["a"][($__first2->op_mul__c())["i"]] < ($__first1->op_mul__c())["a"][($__first1->op_mul__c())["i"]])) {
             {
              $__next = new std_List_iterator_int(["a" => [$__first2], "i" => 0]);
              $this->_M_transfer($__first1, $__first2, (($t26 = $__next->op_inc(), $t26))["a"][(($t26 = $__next->op_inc(), $t26))["i"]]);
              $__first2->op_assign(["a" => [$__next], "i" => 0]);
            }
          }
          else {
            $__first1->op_inc();
          }
        }
        if ($__first2->op_ne__c(["a" => [$__last2], "i" => 0])) {
          $this->_M_transfer($__last1, $__first2, $__last2);
        }
      }
    }
  }
  function merge($__x) {
    $this->merge__rv(std_move_std_list_int_std_allocator_int($__x));
  }
  function reverse() {
    $this->_M_impl->_M_node->_M_reverse();
  }
  function sort() {
    if (((!($this->_M_impl->_M_node->_M_next === (["a" => $this->_M_impl, "i" => "_M_node"]) || ($this->_M_impl->_M_node->_M_next && (["a" => $this->_M_impl, "i" => "_M_node"]) && $this->_M_impl->_M_node->_M_next["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && $this->_M_impl->_M_node->_M_next["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"]))) && (!((($this->_M_impl->_M_node->_M_next["a"][$this->_M_impl->_M_node->_M_next["i"]])->_M_next) === (["a" => $this->_M_impl, "i" => "_M_node"]) || ((($this->_M_impl->_M_node->_M_next["a"][$this->_M_impl->_M_node->_M_next["i"]])->_M_next) && (["a" => $this->_M_impl, "i" => "_M_node"]) && (($this->_M_impl->_M_node->_M_next["a"][$this->_M_impl->_M_node->_M_next["i"]])->_M_next)["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && (($this->_M_impl->_M_node->_M_next["a"][$this->_M_impl->_M_node->_M_next["i"]])->_M_next)["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"]))))) {
       {
        $__carry = ["v" => new std_list_int_std_allocator_int()];
        $__tmp = ["v" => [new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int(), new std_list_int_std_allocator_int()]];
        $__fill = ((["a" => $__tmp["v"], "i" => (0)]) ? ["a" => (["a" => $__tmp["v"], "i" => (0)])["a"], "i" => (["a" => $__tmp["v"], "i" => (0)])["i"]] : null);
        $__counter = null;
        do {
           {
            ($__carry["v"])->splice(new std_List_iterator_int(($__carry["v"])->begin()), ["a" => [$this], "i" => 0], new std_List_iterator_int($this->begin()));
            $__counter = ((["a" => $__tmp["v"], "i" => (0)]) ? ["a" => (["a" => $__tmp["v"], "i" => (0)])["a"], "i" => (["a" => $__tmp["v"], "i" => (0)])["i"]] : null);
            for (; ((!($__counter === $__fill || ($__counter && $__fill && $__counter["a"] === $__fill["a"] && $__counter["i"] === $__fill["i"]))) && (!(($__counter["a"][$__counter["i"]])->empty__c()))); ++$__counter["i"]) {
               {
                ($__counter["a"][$__counter["i"]])->merge(["a" => $__carry, "i" => "v"]);
                ($__carry["v"])->swap($__counter);
              }
            }
            ($__carry["v"])->swap($__counter);
            if (($__counter === $__fill || ($__counter && $__fill && $__counter["a"] === $__fill["a"] && $__counter["i"] === $__fill["i"]))) {
              ++$__fill["i"];
            }
          }
        } while ((!($this->empty__c())));
        $__counter = ((["a" => $__tmp["v"], "i" => (1)]) ? ["a" => (["a" => $__tmp["v"], "i" => (1)])["a"], "i" => (["a" => $__tmp["v"], "i" => (1)])["i"]] : null);
        for (; (!($__counter === $__fill || ($__counter && $__fill && $__counter["a"] === $__fill["a"] && $__counter["i"] === $__fill["i"]))); ++$__counter["i"]) {
          ($__counter["a"][$__counter["i"]])->merge((["a" => $__counter["a"], "i" => $__counter["i"] - (1)]));
        }
        $this->swap((["a" => $__fill["a"], "i" => $__fill["i"] - (1)]));
      }
    }
  }
  function _M_transfer($__position, $__first, $__last) {
    ($__position->_M_node["a"][$__position->_M_node["i"]])->_M_transfer(($__first->_M_node ? ["a" => $__first->_M_node["a"], "i" => $__first->_M_node["i"]] : null), ($__last->_M_node ? ["a" => $__last->_M_node["a"], "i" => $__last->_M_node["i"]] : null));
  }
  function _M_erase($__position) {
    ($__position->_M_node["a"][$__position->_M_node["i"]])->_M_unhook();
    $__n = ($__position->_M_node ? ["a" => $__position->_M_node["a"], "i" => $__position->_M_node["i"]] : null);
    (($t27 = $this->_M_get_Node_allocator(), $t27["a"][$t27["i"]]))->destroy(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
    $this->_M_put_node(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
  }
  function _M_check_equal_allocators($__x) {
    if (std_alloc_neq_std_allocator_std_List_node_int_value1::_S_do_it($this->_M_get_Node_allocator(), ($__x["a"][$__x["i"]])->_M_get_Node_allocator())) {
      std_throw_runtime_error(["a" => [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], "i" => 0]);
    }
  }
  function _M_insert__rv($__position, $__args_0) {
    $__tmp = ($t28 = $this->_M_create_node__rv(std_forward_1_int($__args_0)), $t28 ? ["a" => $t28["a"], "i" => $t28["i"]] : null);
    ($__tmp["a"][$__tmp["i"]])->_M_hook(($__position->_M_node ? ["a" => $__position->_M_node["a"], "i" => $__position->_M_node["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__p = ($t29 = $this->_M_get_node(), $t29 ? ["a" => $t29["a"], "i" => $t29["i"]] : null);
    if (true) {
       {
        (($t30 = $this->_M_get_Node_allocator(), $t30["a"][$t30["i"]]))->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
      }
    }
    if (false) {
       {
        $this->_M_put_node(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
      }
    }
    return ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_List_node_int extends std_detail_List_node_base {
  public $_M_data;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_List_node_int(...$a);
  }
  function __init_std_List_node_int(...$a) {
    $this->_M_data = (($t32 = ($t31 = std_forward_1_int($a[0] ?? null), $t31["a"][$t31["i"]]), $t32))["a"][(($t32 = ($t31 = std_forward_1_int($a[0] ?? null), $t31["a"][$t31["i"]]), $t32))["i"]];
  }
  function __dtor() {
    $this->__dtor_std_detail_List_node_base();
  }
}
class std_allocator_int_rebind_std_List_node_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_List_node_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t33 = operatornew__unsigned_long_long(($__n * 20)), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 20);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_List_node_int(std_forward_1_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_allocator_std_List_node_int extends gnu_cxx_new_allocator_std_List_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_List_node_int(...$a);
  }
  function __init_std_allocator_std_List_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_List_node_int();
  }
}
class std_List_base_int_std_allocator_int_List_impl extends std_allocator_std_List_node_int {
  public $_M_node;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_List_base_int_std_allocator_int_List_impl(...$a);
  }
  function __init_std_List_base_int_std_allocator_int_List_impl(...$a) {
    $this->_M_node = new std_detail_List_node_base();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_List_node_int();
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
class std_List_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_List_iterator_int(...$a);
  }
  function __init_std_List_iterator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
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
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_data"];
  }
  function op_inc() {
    $this->_M_node = ((($this->_M_node["a"][$this->_M_node["i"]])->_M_next) ? ["a" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_next)["a"], "i" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_next)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ((($this->_M_node["a"][$this->_M_node["i"]])->_M_prev) ? ["a" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_prev)["a"], "i" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_prev)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
  function op_assign($o) {
    $this->_M_node = ((($o["a"][$o["i"]])->_M_node) ? ["a" => (($o["a"][$o["i"]])->_M_node)["a"], "i" => (($o["a"][$o["i"]])->_M_node)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
}
class std_remove_cv_std_List_iterator_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_List_iterator_int {
  function __dtor() {
  }
}
class std_remove_const_std_List_iterator_int {
  function __dtor() {
  }
}
class std_has_iterator_category_helper_std_List_iterator_int extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_helper_std_List_iterator_int(...$a);
  }
  function __init_std_has_iterator_category_helper_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag {
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
class std_has_iterator_category_std_List_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_std_List_iterator_int(...$a);
  }
  function __init_std_has_iterator_category_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_iterator_traits_std_List_iterator_int_value1 {
  function __dtor() {
  }
}
class std_iterator_traits_std_List_iterator_int extends std_iterator_traits_std_List_iterator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_iterator_traits_std_List_iterator_int(...$a);
  }
  function __init_std_iterator_traits_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_iterator_traits_std_List_iterator_int_value1();
  }
}
class std_complex_std_list_int_std_allocator_int_P {
  public $_M_real;
  public $_M_imag;
  function __construct(...$a) {
    $this->__init_std_complex_std_list_int_std_allocator_int_P(...$a);
  }
  function __init_std_complex_std_list_int_std_allocator_int_P(...$a) {
    $this->_M_real = null;
    $this->_M_imag = null;
  }
  function __dtor() {
  }
}
class std_remove_reference_std_list_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_alloc_swap_std_allocator_std_List_node_int_value1 {
  function __dtor() {
  }
  static function _S_do_it($p0, $p1) {
  }
}
class std_alloc_neq_std_allocator_std_List_node_int_value1 {
  function __dtor() {
  }
  static function _S_do_it($p0, $p1) {
    return false;
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
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_runtime_error(...$a) { throw new Exception("unresolved external: std::__throw_runtime_error"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function main() {
  global $std_cout;
  $a = ["v" => new std_list_int_std_allocator_int()];
  ($a["v"])->push_back(["a" => [3], "i" => 0]);
  ($a["v"])->push_back(["a" => [1], "i" => 0]);
  ($a["v"])->push_back(["a" => [4], "i" => 0]);
  ($a["v"])->push_front(["a" => [9], "i" => 0]);
  $s = 0;
  for ($b0 = $a["v"]->begin(), $e0 = $a["v"]->end(); $b0->op_ne__c(["a" => [$e0], "i" => 0]); $b0->op_inc()) {
    $x = ($b0->op_mul__c())["a"][($b0->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  ($t36 = ($t35 = ($t34 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t34), __ctj_write(__ctj_fmt(($a["v"])->size__c())), $t35), __ctj_write("\n"), $t36);
  ($a["v"])->sort();
  $s = 0;
  for ($b1 = $a["v"]->begin(), $e1 = $a["v"]->end(); $b1->op_ne__c(["a" => [$e1], "i" => 0]); $b1->op_inc()) {
    $x = ($b1->op_mul__c())["a"][($b1->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  ($t37 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write("\n"), $t37);
  ($a["v"])->reverse();
  $s = 0;
  for ($b2 = $a["v"]->begin(), $e2 = $a["v"]->end(); $b2->op_ne__c(["a" => [$e2], "i" => 0]); $b2->op_inc()) {
    $x = ($b2->op_mul__c())["a"][($b2->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  ($t38 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write("\n"), $t38);
  ($a["v"])->remove(["a" => [4], "i" => 0]);
  ($a["v"])->pop_front();
  ($t45 = ($t44 = ($t43 = ($t42 = ($t41 = (__ctj_write(__ctj_fmt(($t40 = ($a["v"])->front(), $t40["a"][$t40["i"]]))), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t41), __ctj_write(__ctj_fmt(($t39 = ($a["v"])->back(), $t39["a"][$t39["i"]]))), $t42), __ctj_write(__ctj_fmt([32, 0])), $t43), __ctj_write(__ctj_fmt(($a["v"])->size__c())), $t44), __ctj_write("\n"), $t45);
  $b = new std_list_int_std_allocator_int();
  $b->push_back(["a" => [7], "i" => 0]);
  $b->push_back(["a" => [8], "i" => 0]);
  $b->splice(new std_List_iterator_int($b->end()), ["a" => $a, "i" => "v"]);
  $s = 0;
  for ($b3 = $b->begin(), $e3 = $b->end(); $b3->op_ne__c(["a" => [$e3], "i" => 0]); $b3->op_inc()) {
    $y = $b3->op_mul__c();
    $s = (($s * 10) + $y["a"][$y["i"]]);
  }
  ($t48 = ($t47 = ($t46 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t46), __ctj_write(__ctj_fmt(($a["v"])->size__c())), $t47), __ctj_write("\n"), $t48);
  $c = ["v" => new std_list_int_std_allocator_int()];
  ($c["v"])->push_back(["a" => [5], "i" => 0]);
  ($c["v"])->push_back(["a" => [6], "i" => 0]);
  $b->merge(["a" => $c, "i" => "v"]);
  $s = 0;
  for ($b4 = $b->begin(), $e4 = $b->end(); $b4->op_ne__c(["a" => [$e4], "i" => 0]); $b4->op_inc()) {
    $y = $b4->op_mul__c();
    $s = (($s * 10) + $y["a"][$y["i"]]);
  }
  ($t49 = (__ctj_write(__ctj_fmt($s)), $std_cout), __ctj_write("\n"), $t49);
  $b->clear();
  ($t52 = ($t51 = ($t50 = (__ctj_write(__ctj_fmt($b->size__c())), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t50), __ctj_write(__ctj_fmt($b->empty__c())), $t51), __ctj_write("\n"), $t52);
  return 0;
}
function std_min_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_distance_std_List_iterator_int($__first, $__last) {
  $__first = ["v" => $__first];
  return std_distance_std_List_iterator_int_72($__first["v"], $__last, new std_bidirectional_iterator_tag(std_iterator_category_std_List_iterator_int(["a" => $__first, "i" => "v"])));
}
function std_addressof_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_move_std_list_int_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_iterator_category_std_List_iterator_int($p0) {
  return new std_bidirectional_iterator_tag([]);
}
function std_distance_std_List_iterator_int_72($__first, $__last, $p2) {
  $__n = 0;
  while ($__first->op_ne__c(["a" => [$__last], "i" => 0])) {
     {
      $__first->op_inc();
      ++$__n;
    }
  }
  return $__n;
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
std_has_iterator_category_helper_std_List_iterator_int::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_ctype_wchar_t::$id = new std_locale_id();
std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
main();
