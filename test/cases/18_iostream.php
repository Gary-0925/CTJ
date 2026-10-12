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
class class_3 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_3(...$a);
  }
  function __init_class_3(...$a) {
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
class class_153 {
  public $done;
  public $started;
  function __construct(...$a) {
    $this->__init_class_153(...$a);
  }
  function __init_class_153(...$a) {
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
    return ($t0 = (function ($d, $s, $n) { for ($k = 0; $k < $n; $k++) $d["a"][$d["i"] + $k] = $s["a"][$s["i"] + $k]; return $d; })((function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s1), (function ($q) { return isset($q["i"]) ? $q : ["a" => $q, "i" => 0]; })($__s2), $__n), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
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
    return new std_fpos_class_3((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_3((-(1)));
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
    return new std_fpos_class_3((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_3((-(1)));
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
class std_fpos_class_3 {
  public $_M_off;
  public $_M_state;
  function __construct(...$a) {
    $this->__init_std_fpos_class_3(...$a);
  }
  function __init_std_fpos_class_3(...$a) {
    $this->_M_off = $a[0] ?? null;
    $this->_M_state = new class_3();
  }
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
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function main() {
  global $std_cout;
  (__ctj_write(__ctj_fmt(42)), $std_cout);
  (__ctj_write("\n"), $std_cout);
  ($t22 = (__ctj_write(__ctj_fmt([104, 105, 0])), $std_cout), __ctj_write("\n"), $t22);
  ($t24 = ($t23 = (__ctj_write(__ctj_fmt(1)), $std_cout), __ctj_write(__ctj_fmt(2)), $t23), __ctj_write("\n"), $t24);
  ($t25 = (__ctj_write(chr(65)), $std_cout), __ctj_write("\n"), $t25);
  return 0;
}
function std_min_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
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
std_locale::$_S_once = new class_153();
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
std_locale_facet::$_S_once = new class_153();
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
std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_ctype_wchar_t::$id = new std_locale_id();
std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
main();
