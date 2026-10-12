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
class std_do_is_nary_constructible_impl {
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
class class_176 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_176(...$a);
  }
  function __init_class_176(...$a) {
    $this->__count = 0;
    $this->__value = 0;
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
class class_177 {
  public $done;
  public $started;
  function __construct(...$a) {
    $this->__init_class_177(...$a);
  }
  function __init_class_177(...$a) {
    $this->done = 0;
    $this->started = 0;
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
    return new std_fpos_class_176((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_176((-(1)));
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
    return new std_fpos_class_176((-(1)));
  }
  function seekpos($p0, $p1 = null) {
    if (func_num_args() < 2) $p1 = (std_ios_base::$in_ | std_ios_base::$out);
    return new std_fpos_class_176((-(1)));
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
class std_fpos_class_176 {
  public $_M_off;
  public $_M_state;
  function __construct(...$a) {
    $this->__init_std_fpos_class_176(...$a);
  }
  function __init_std_fpos_class_176(...$a) {
    $this->_M_off = $a[0] ?? null;
    $this->_M_state = new class_176();
  }
  function __dtor() {
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
class std_pair_int_int {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_int_int(...$a);
  }
  function __init_std_pair_int_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->first = 0;
      $this->second = 0;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = 0;
      $this->second = 0;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = 0;
      $this->second = 0;
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = (($t23 = ($t22 = std_forward_1_int($a[0] ?? null), $t22["a"][$t22["i"]]), $t23))["a"][(($t23 = ($t22 = std_forward_1_int($a[0] ?? null), $t22["a"][$t22["i"]]), $t23))["i"]];
      $this->second = (($t25 = ($t24 = std_forward_1_int($a[1] ?? null), $t24["a"][$t24["i"]]), $t25))["a"][(($t25 = ($t24 = std_forward_1_int($a[1] ?? null), $t24["a"][$t24["i"]]), $t25))["i"]];
    }
    else if (count($a) >= 3 && count($a) <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_int_R && $a[2] instanceof std_tuple) {
      $this->__init_std_pair_int_int(["a" => [$a[1] ?? null], "i" => 0], ["a" => [$a[2] ?? null], "i" => 0], new std_Index_tuple_value0([]), new std_Index_tuple([]));
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      $this->first = (($t27 = ($t26 = std_forward_int_R(std_get_4_value0_int_R($a[0] ?? null)), $t26["a"][$t26["i"]]), $t27))["a"][(($t27 = ($t26 = std_forward_int_R(std_get_4_value0_int_R($a[0] ?? null)), $t26["a"][$t26["i"]]), $t27))["i"]];
      $this->second = 0;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_int_int {
  function __dtor() {
  }
}
class std_allocator_std_pair_int_int extends gnu_cxx_new_allocator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_allocator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_pair_int_int();
  }
}
class std_map_int_int_std_less_int_std_allocator_std_pair_int_int {
  public $_M_t;
  function __construct(...$a) {
    $this->__init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    $this->_M_t = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int();
  }
  function __dtor() {
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->end());
  }
  function size__c() {
    return $this->_M_t->size__c();
  }
  function op_index($__k) {
    global $std_piecewise_construct;
    $__i = ["v" => new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->lower_bound($__k))], "i" => 0])];
    if ((($__i["v"])->op_eq__c(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->end())], "i" => 0]) || (($t28 = new std_less_int($this->key_comp__c()), $t28))->op_call__c($__k, ["a" => (($__i["v"])->op_mul__c())["a"][(($__i["v"])->op_mul__c())["i"]], "i" => "first"]))) {
      ($__i["v"])->op_assign(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->_M_emplace_hint_unique__rv(new std_Rb_tree_const_iterator_std_pair_int_int(["a" => $__i, "i" => "v"]), ["a" => $std_piecewise_construct, "i" => "v"], ["a" => [new std_tuple_int_R($__k)], "i" => 0], ["a" => [new std_tuple([])], "i" => 0]))], "i" => 0]);
    }
    return ["a" => (($__i["v"])->op_mul__c())["a"][(($__i["v"])->op_mul__c())["i"]], "i" => "second"];
  }
  function insert($__x) {
    return new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool($this->_M_t->_M_insert_unique__rv($__x));
  }
  function key_comp__c() {
    return new std_less_int($this->_M_t->key_comp__c());
  }
  function lower_bound($__x) {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->lower_bound($__x));
  }
}
class std_binary_function_std_pair_int_int_std_pair_int_int_bool {
  function __dtor() {
  }
}
class std_initializer_list_std_pair_int_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_std_pair_int_int(...$a);
  }
  function __init_std_initializer_list_std_pair_int_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_decay_and_strip_int {
  function __dtor() {
  }
}
class std_decay_int {
  function __dtor() {
  }
}
class std_remove_reference_int {
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
class std_decay_selector_int_value0_value0 {
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
class std_strip_reference_wrapper_int {
  function __dtor() {
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
class std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int extends std_is_convertible_int_R_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int(...$a);
  }
  function __init_std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_R_int();
  }
}
class std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_int_R_int {
  function __dtor() {
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
class std_and_std_is_convertible_int_int_std_is_convertible_int_int extends std_is_convertible_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_int_int_std_is_convertible_int_int(...$a);
  }
  function __init_std_and_std_is_convertible_int_int_std_is_convertible_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_int();
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_int_int {
  function __dtor() {
  }
}
class std_is_constructible_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR();
  }
}
class std_is_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_pair_int_int(...$a);
  }
  function __init_std_is_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_pair_int_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int extends std_is_rvalue_reference_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_pair_int_int_RR_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_lvalue_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR extends std_is_rvalue_reference_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_pair_int_int_RR();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_not_std_is_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_void_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_remove_const_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_is_void_helper_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_void_helper_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_pair_int_int_RR(...$a);
  }
  function __init_std_not_std_is_void_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR extends std_not_std_is_reference_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_pair_int_int_RR();
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_int_int_RR_std_not_std_is_reference_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_RR_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int_RR extends std_add_rvalue_reference_helper_std_pair_int_int_RR_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  function __init_std_add_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_pair_int_int_RR_value0();
  }
}
class std_is_function_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_function_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR extends std_is_function_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a);
  }
  function __init_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_int_int_RR();
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int extends std_is_lvalue_reference_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_pair_int_int_RR();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0();
  }
}
class std_remove_reference_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_remove_cv_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_const_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_reference_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_same_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_same_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_same_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int extends std_not_std_is_same_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_std_pair_int_int_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_base_of_std_pair_int_int_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR();
  }
}
class std_is_destructible_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_pair_int_int(...$a);
  }
  function __init_std_is_destructible_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_pair_int_int(...$a);
  }
  function __init_std_is_void_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_void_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unknown_bounds_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_pair_int_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_pair_int_int(...$a);
  }
  function __init_std_is_array_std_pair_int_int(...$a) {
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
class std_extent_std_pair_int_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_pair_int_int_value0(...$a);
  }
  function __init_std_extent_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_pair_int_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0 extends std_is_array_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_pair_int_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_pair_int_int_value0_std_is_array_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_function_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_pair_int_int(...$a);
  }
  function __init_std_is_function_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int extends std_is_function_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_int_int();
  }
}
class std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int extends std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_scalar_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_pair_int_int(...$a);
  }
  function __init_std_is_scalar_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_pair_int_int(...$a);
  }
  function __init_std_is_arithmetic_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_pair_int_int(...$a);
  }
  function __init_std_is_integral_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_integral_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_pair_int_int(...$a);
  }
  function __init_std_is_floating_point_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int extends std_is_floating_point_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_enum_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_pair_int_int(...$a);
  }
  function __init_std_is_enum_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_pair_int_int(...$a);
  }
  function __init_std_is_pointer_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_pointer_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_pair_int_int(...$a);
  }
  function __init_std_is_member_pointer_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  function __init_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_pair_int_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_is_nullptr_t_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_pair_int_int();
  }
}
class std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int();
  }
}
class std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int();
  }
}
class std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_pair_int_int_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_pair_int_int_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_pair_int_int_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int extends std_is_scalar_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_pair_int_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_pair_int_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_pair_int_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_pair_int_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_pair_int_int(...$a);
  }
  function __init_std_is_destructible_impl_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_is_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R extends std_is_lvalue_reference_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_pair_int_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_helper_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R extends std_not_std_is_reference_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_pair_int_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_int_int_R_std_not_std_is_reference_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_pair_int_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_pair_int_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_pair_int_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  function __init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR_std_is_destructible_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR {
  function __dtor() {
  }
}
class std_unary_function_std_pair_int_int_int {
  function __construct(...$a) {
    $this->__init_std_unary_function_std_pair_int_int_int(...$a);
  }
  function __init_std_unary_function_std_pair_int_int_int(...$a) {
  }
  function __dtor() {
  }
}
class std_Select1st_std_pair_int_int extends std_unary_function_std_pair_int_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Select1st_std_pair_int_int(...$a);
  }
  function __init_std_Select1st_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_std_pair_int_int_int();
  }
  function op_call__c($__x) {
    return ["a" => $__x["a"][$__x["i"]], "i" => "first"];
  }
}
class std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  function __dtor() {
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    $this->_M_impl = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1();
  }
  function __dtor() {
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_node() {
    return ($t29 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int::class))(1, ["a" => [0], "i" => 0]), $t29 ? ["a" => $t29["a"], "i" => $t29["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_destroy_node($__p) {
    (($t30 = $this->_M_get_Node_allocator(), $t30["a"][$t30["i"]]))->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
    $this->_M_put_node(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
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
      return (($t31 = new std_Select1st_std_pair_int_int([]), $t31))->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t32 = new std_Select1st_std_pair_int_int([]), $t32))->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
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
    $__x = ($t33 = $this->_M_begin(), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null);
    $__y = ($t34 = $this->_M_end(), $t34 ? ["a" => $t34["a"], "i" => $t34["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t35 = ($__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t35 ? ["a" => $t35["a"], "i" => $t35["i"]] : null);
      }
    }
    $__j = new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null))], "i" => 0]);
    if ($__comp) {
       {
        if ($__j->op_eq__c(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->begin())], "i" => 0])) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
        }
        else {
          $__j->op_dec();
        }
      }
    }
    if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__j->_M_node ? ["a" => $__j->_M_node["a"], "i" => $__j->_M_node["i"]] : null)), $__k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__j->_M_node, 0]], "i" => 0]);
  }
  function _M_get_insert_hint_unique_pos($__position, $__k) {
    $__pos = new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int($__position->_M_const_cast__c())], "i" => 0]);
    if (($__pos->_M_node === (($t36 = $this->_M_end(), $t36)) || ($__pos->_M_node && (($t36 = $this->_M_end(), $t36)) && $__pos->_M_node["a"] === (($t36 = $this->_M_end(), $t36))["a"] && $__pos->_M_node["i"] === (($t36 = $this->_M_end(), $t36))["i"]))) {
       {
        if ((($this->size__c() > 0) && $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t37 = $this->_M_rightmost(), $t38 = ($t37 ? $t37["a"][$t37["i"]] : null), $t38 && is_array($t38) && array_key_exists("a", $t38) ? ["a" => $t38["a"], "i" => $t38["i"]] : $t38)), $__k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
        }
      }
    }
    else {
      if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)))) {
         {
          $__before = new std_Rb_tree_iterator_std_pair_int_int(["a" => [$__pos], "i" => 0]);
          if (($__pos->_M_node === ((($t39 = $this->_M_leftmost(), $t39) ? (($t39 = $this->_M_leftmost(), $t39))["a"][(($t39 = $this->_M_leftmost(), $t39))["i"]] : null)) || ($__pos->_M_node && ((($t39 = $this->_M_leftmost(), $t39) ? (($t39 = $this->_M_leftmost(), $t39))["a"][(($t39 = $this->_M_leftmost(), $t39))["i"]] : null)) && $__pos->_M_node["a"] === ((($t39 = $this->_M_leftmost(), $t39) ? (($t39 = $this->_M_leftmost(), $t39))["a"][(($t39 = $this->_M_leftmost(), $t39))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t39 = $this->_M_leftmost(), $t39) ? (($t39 = $this->_M_leftmost(), $t39))["a"][(($t39 = $this->_M_leftmost(), $t39))["i"]] : null))["i"]))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$this->_M_leftmost(), $this->_M_leftmost()]], "i" => 0]);
          }
          else {
            if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t41 = (($t40 = $__before->op_dec(), $t40["a"][$t40["i"]]))->_M_node, $t41 ? ["a" => $t41["a"], "i" => $t41["i"]] : null)), $__k)) {
               {
                if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__before->_M_node ? ["a" => $__before->_M_node["a"], "i" => $__before->_M_node["i"]] : null)) === null)) {
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
        if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)), $__k)) {
           {
            $__after = new std_Rb_tree_iterator_std_pair_int_int(["a" => [$__pos], "i" => 0]);
            if (($__pos->_M_node === ((($t42 = $this->_M_rightmost(), $t42) ? (($t42 = $this->_M_rightmost(), $t42))["a"][(($t42 = $this->_M_rightmost(), $t42))["i"]] : null)) || ($__pos->_M_node && ((($t42 = $this->_M_rightmost(), $t42) ? (($t42 = $this->_M_rightmost(), $t42))["a"][(($t42 = $this->_M_rightmost(), $t42))["i"]] : null)) && $__pos->_M_node["a"] === ((($t42 = $this->_M_rightmost(), $t42) ? (($t42 = $this->_M_rightmost(), $t42))["a"][(($t42 = $this->_M_rightmost(), $t42))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t42 = $this->_M_rightmost(), $t42) ? (($t42 = $this->_M_rightmost(), $t42))["a"][(($t42 = $this->_M_rightmost(), $t42))["i"]] : null))["i"]))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
            }
            else {
              if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t44 = (($t43 = $__after->op_inc(), $t43["a"][$t43["i"]]))->_M_node, $t44 ? ["a" => $t44["a"], "i" => $t44["i"]] : null)))) {
                 {
                  if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)) === null)) {
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
  function _M_insert_node($__x, $__p, $__z) {
    $__insert_left = ((($__x !== null) || ($__p === (($t45 = $this->_M_end(), $t45)) || ($__p && (($t45 = $this->_M_end(), $t45)) && $__p["a"] === (($t45 = $this->_M_end(), $t45))["a"] && $__p["i"] === (($t45 = $this->_M_end(), $t45))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null)), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_lower_bound($__x, $__y, $__k) {
    while (($__x !== null)) {
      if ((!($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $__k)))) {
        ($__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null), $__x = ($t46 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $t46 ? ["a" => $t46["a"], "i" => $t46["i"]] : null));
      }
      else {
        $__x = ($t47 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $t47 ? ["a" => $t47["a"], "i" => $t47["i"]] : null);
      }
    }
    return new std_Rb_tree_iterator_std_pair_int_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null));
  }
  function key_comp__c() {
    return $this->_M_impl->_M_key_compare;
  }
  function begin() {
    return new std_Rb_tree_iterator_std_pair_int_int(($this->_M_impl->_M_header->_M_left ? ["a" => $this->_M_impl->_M_header->_M_left["a"], "i" => $this->_M_impl->_M_header->_M_left["i"]] : null));
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_int_int(((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null));
  }
  function size__c() {
    return $this->_M_impl->_M_node_count;
  }
  function lower_bound($__k) {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_lower_bound(($t48 = $this->_M_begin(), $t48 ? ["a" => $t48["a"], "i" => $t48["i"]] : null), ($t49 = $this->_M_end(), $t49 ? ["a" => $t49["a"], "i" => $t49["i"]] : null), $__k));
  }
  function _M_insert_unique__rv($__v) {
    $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos((($t50 = new std_Select1st_std_pair_int_int([]), $t50))->op_call__c($__v)))], "i" => 0]);
    if ($__res->second) {
      return new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(["a" => [[new std_Rb_tree_iterator_std_pair_int_int($this->_M_insert___rv(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), std_forward_1_std_pair_int_int($__v))), true]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(["a" => [[new std_Rb_tree_iterator_std_pair_int_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null)), false]], "i" => 0]);
  }
  function _M_emplace_hint_unique__rv($__pos, $__args_0, $__args_1, $__args_2) {
    $__z = ($t51 = $this->_M_create_node__rv(std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2)), $t51 ? ["a" => $t51["a"], "i" => $t51["i"]] : null);
    if (true) {
       {
        $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_hint_unique_pos($__pos, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null))))], "i" => 0]);
        if ($__res->second) {
          return new std_Rb_tree_iterator_std_pair_int_int($this->_M_insert_node(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null)));
        }
        $this->_M_destroy_node(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
        return new std_Rb_tree_iterator_std_pair_int_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null));
      }
    }
    if (false) {
       {
        $this->_M_destroy_node(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
      }
    }
  }
  function _M_insert___rv($__x, $__p, $__v) {
    $__insert_left = ((($__x !== null) || ($__p === (($t52 = $this->_M_end(), $t52)) || ($__p && (($t52 = $this->_M_end(), $t52)) && $__p["a"] === (($t52 = $this->_M_end(), $t52))["a"] && $__p["i"] === (($t52 = $this->_M_end(), $t52))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c((($t53 = new std_Select1st_std_pair_int_int([]), $t53))->op_call__c($__v), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    $__z = ($t54 = $this->_M_create_node__rv(std_forward_1_std_pair_int_int($__v)), $t54 ? ["a" => $t54["a"], "i" => $t54["i"]] : null);
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_create_node__rv(...$a) {
    if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      $__tmp = ($t55 = $this->_M_get_node(), $t55 ? ["a" => $t55["a"], "i" => $t55["i"]] : null);
      if (true) {
         {
          std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_std_piecewise_construct_t($a[0] ?? null), std_forward_1_std_tuple_int_R($a[1] ?? null), std_forward_1_std_tuple($a[2] ?? null));
        }
      }
      if (false) {
         {
          $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
        }
      }
      return ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $__tmp = ($t56 = $this->_M_get_node(), $t56 ? ["a" => $t56["a"], "i" => $t56["i"]] : null);
      if (true) {
         {
          std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_std_pair_int_int($a[0] ?? null));
        }
      }
      if (false) {
         {
          $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
        }
      }
      return ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
}
class std_Rb_tree_iterator_std_pair_int_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_iterator_std_pair_int_int(...$a) {
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
    $this->_M_node = ($t57 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t57 ? ["a" => $t57["a"], "i" => $t57["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ($t58 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t58 ? ["a" => $t58["a"], "i" => $t58["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
  function op_assign($o) {
    $this->_M_node = ((($o["a"][$o["i"]])->_M_node) ? ["a" => (($o["a"][$o["i"]])->_M_node)["a"], "i" => (($o["a"][$o["i"]])->_M_node)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
}
class std_Rb_tree_node_std_pair_int_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct();
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      parent::__construct();
    }
    $this->__init_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_node_std_pair_int_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_value_field = new std_pair_int_int(std_forward_1_std_pair_int_int($a[0] ?? null));
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      $this->_M_value_field = new std_pair_int_int((($t59 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t59))["a"][(($t59 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t59))["i"]], (($t60 = std_forward_1_std_tuple_int_R($a[1] ?? null), $t60))["a"][(($t60 = std_forward_1_std_tuple_int_R($a[1] ?? null), $t60))["i"]], (($t61 = std_forward_1_std_tuple($a[2] ?? null), $t61))["a"][(($t61 = std_forward_1_std_tuple($a[2] ?? null), $t61))["i"]]);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_Rb_tree_node_base();
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_int_int_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a);
  }
  function __init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = new std_Rb_tree_iterator_std_pair_int_int($a[0] ?? null);
      $this->second = ($a[1] ?? null)["a"][($a[1] ?? null)["i"]];
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = new std_Rb_tree_iterator_std_pair_int_int();
      $this->second = false;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_Rb_tree_const_iterator_std_pair_int_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_const_iterator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_const_iterator_std_pair_int_int(...$a) {
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
    return new std_Rb_tree_iterator_std_pair_int_int(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null));
  }
}
class std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_iterator_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_iterator_std_pair_int_int();
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0();
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
class std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_R_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1();
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
class std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int {
  function __dtor() {
  }
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
class std_declval_protector_std_pair_int_int_RR {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_pair_int_int_RR(...$a);
  }
  function __init_std_declval_protector_std_pair_int_int_RR(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_pair_int_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_pair_int_int_R(...$a);
  }
  function __init_std_declval_protector_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
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
class std_declval_protector_std_Rb_tree_iterator_std_pair_int_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int(...$a) {
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
class std_Tuple_impl_value1 {
  function __construct(...$a) {
    $this->__init_std_Tuple_impl_value1(...$a);
  }
  function __init_std_Tuple_impl_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_is_empty_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_int_R(...$a);
  }
  function __init_std_is_empty_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_empty_non_tuple_int_R extends std_is_empty_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_non_tuple_int_R(...$a);
  }
  function __init_std_is_empty_non_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_empty_int_R();
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int_R {
  function __dtor() {
  }
}
class std_Head_base_value0_int_R_value0 {
  public $_M_head_impl;
  function __construct(...$a) {
    $this->__init_std_Head_base_value0_int_R_value0(...$a);
  }
  function __init_std_Head_base_value0_int_R_value0(...$a) {
    $this->_M_head_impl = $a[0] ?? null;
  }
  function __dtor() {
  }
  static function _M_head($__b) {
    return ($__b["a"][$__b["i"]])->_M_head_impl;
  }
}
class std_Tuple_impl_value0_int_R extends std_Tuple_impl_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Tuple_impl_value0_int_R(...$a);
  }
  function __init_std_Tuple_impl_value0_int_R(...$a) {
    $this->_M_head_impl = null;
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value1();
    $this->__dtor_std_Head_base_value0_int_R_value0();
  }
  static function _M_head($__t) {
    return std_Head_base_value0_int_R_value0::_M_head($__t);
  }
}
class std_tuple_int_R extends std_Tuple_impl_value0_int_R {
  function __construct(...$a) {
    parent::__construct($__elements_0);
    $this->__init_std_tuple_int_R(...$a);
  }
  function __init_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value0_int_R();
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
      $this->first = ($t62 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t63 = ($t62 ? $t62["a"][$t62["i"]] : null), $t63 && is_array($t63) && array_key_exists("a", $t63) ? ["a" => $t63["a"], "i" => $t63["i"]] : $t63);
      $this->second = ($t64 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t65 = ($t64 ? $t64["a"][$t64["i"]] : null), $t65 && is_array($t65) && array_key_exists("a", $t65) ? ["a" => $t65["a"], "i" => $t65["i"]] : $t65);
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
class std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t66 = operatornew__unsigned_long_long(($__n * 36)), $t66 ? ["a" => $t66["a"], "i" => $t66["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 36);
  }
  function construct__rv(...$a) {
    if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3]))) {
      ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_piecewise_construct_t($a[1] ?? null), std_forward_1_std_tuple_int_R($a[2] ?? null), std_forward_1_std_tuple($a[3] ?? null))) && ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]->ctj_a = ($a[0] ?? null)["a"]) || true) && ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]->ctj_i = ($a[0] ?? null)["i"]) || true) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_pair_int_int($a[1] ?? null))) && ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]->ctj_a = ($a[0] ?? null)["a"]) || true) && ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]->ctj_i = ($a[0] ?? null)["i"]) || true) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else { throw new Exception("no matching overload"); }
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_Rb_tree_node_std_pair_int_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_std_pair_int_int {
  public $_M_key_compare;
  public $_M_header;
  public $_M_node_count;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  function __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a) {
    $this->_M_key_compare = new std_less_int();
    $this->_M_header = new std_Rb_tree_node_base();
    $this->_M_node_count = 0;
    $this->_M_initialize();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_Rb_tree_node_std_pair_int_int();
  }
  function _M_initialize() {
    $this->_M_header->_M_color = 0;
    $this->_M_header->_M_parent = null;
    $this->_M_header->_M_left = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
    $this->_M_header->_M_right = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
  }
}
class std_remove_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1();
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
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
class std_enable_if_value0_void {
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
class std_is_convertible_int_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_std_uses_alloc_base(...$a);
  }
  function __init_std_is_convertible_int_std_uses_alloc_base(...$a) {
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
class std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base();
  }
}
class std_conditional_value0_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_std_uses_alloc_base_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
  static function construct__rv(...$a) {
    if (count($a) >= 5 && count($a) <= 5 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::_S_construct__rv($a[0] ?? null, (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), std_forward_1_std_piecewise_construct_t($a[2] ?? null), std_forward_1_std_tuple_int_R($a[3] ?? null), std_forward_1_std_tuple($a[4] ?? null));
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::_S_construct__rv($a[0] ?? null, (($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), std_forward_1_std_pair_int_int($a[2] ?? null));
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_construct__rv(...$a) {
    if (count($a) >= 5 && count($a) <= 5 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2])) && ($a[3] === null || is_array($a[3])) && ($a[4] === null || is_array($a[4]))) {
      (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->construct__rv((($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), std_forward_1_std_piecewise_construct_t($a[2] ?? null), std_forward_1_std_tuple_int_R($a[3] ?? null), std_forward_1_std_tuple($a[4] ?? null));
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->construct__rv((($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), std_forward_1_std_pair_int_int($a[2] ?? null));
    }
    else { throw new Exception("no matching overload"); }
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
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
class std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R extends std_is_rvalue_reference_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_tuple_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_tuple_int_R(...$a);
  }
  function __init_std_is_void_helper_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_tuple_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R extends std_not_std_is_void_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_tuple_int_R();
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_int_R_std_not_std_is_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_int_R extends std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_tuple_int_R_value1();
  }
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
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple();
  }
}
class std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_do_is_nary_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_nary_constructible_impl();
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __dtor() {
  }
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
class std_declval_protector_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_remove_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_not_std_is_reference_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_void_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int extends std_not_std_is_void_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_pair_int_int();
  }
}
class std_conditional_value1_std_not_std_is_void_std_pair_int_int_std_not_std_is_reference_std_pair_int_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int extends std_add_rvalue_reference_helper_std_pair_int_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_pair_int_int(...$a);
  }
  function __init_std_add_rvalue_reference_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_pair_int_int_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int();
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int extends std_is_function_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  function __init_std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_is_lvalue_reference_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0();
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value1_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int();
  }
}
class std_is_destructible_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_destructible_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_is_array_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0_std_is_array_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int extends std_is_function_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_integral_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_integral_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int extends std_is_floating_point_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_enum_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_pointer_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int extends std_is_scalar_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_destructible_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
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
class std_declval_protector_std_tuple_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_tuple_int_R(...$a);
  }
  function __init_std_declval_protector_std_tuple_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
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
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_pair_int_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_pair_int_int(...$a);
  }
  function __init_std_declval_protector_std_pair_int_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_std_pair_int_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_is_convertible_std_piecewise_construct_t_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a);
  }
  function __init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_tuple_int_R(...$a);
  }
  function __init_std_is_function_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_tuple_int_R();
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int_R_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_function_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_is_array_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_piecewise_construct_t();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t();
  }
}
class std_conditional_value0_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_piecewise_construct_t_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_piecewise_construct_t_int(...$a);
  }
  function __init_std_is_convertible_std_piecewise_construct_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int_R_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int extends std_is_convertible_std_piecewise_construct_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_piecewise_construct_t_int();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_piecewise_construct_t_int {
  function __dtor() {
  }
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
class std_is_convertible_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_tuple(...$a);
  }
  function __init_std_is_function_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_tuple(...$a);
  }
  function __init_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_tuple_std_is_array_std_tuple extends std_is_array_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  function __init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_tuple();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple extends std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_std_is_array_std_tuple();
  }
}
class std_conditional_value0_std_is_function_std_tuple_std_is_array_std_tuple {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_tuple_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_std_tuple_int_R(...$a);
  }
  function __init_std_is_convertible_std_tuple_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_tuple_int_R_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a) {
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
class std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int extends std_is_convertible_std_tuple_int_R_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_tuple_int_R_int();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_int_R_int {
  function __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_int_R {
  function __dtor() {
  }
}
class std_add_ref_int_R {
  function __dtor() {
  }
}
class std_add_c_ref_int_R {
  function __dtor() {
  }
}
class std_add_r_ref_int_R {
  function __dtor() {
  }
}
class std_remove_reference_int_R {
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
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_increment"); }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_decrement"); }
function std_Rb_tree_insert_and_rebalance(...$a) { throw new Exception("unresolved external: std::_Rb_tree_insert_and_rebalance"); }
function wmemcpy(...$a) { throw new Exception("unresolved external: wmemcpy"); }
function main() {
  global $std_cout;
  $m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool($m->insert(["a" => [new std_pair_int_int(std_make_pair_int_int(["a" => [1], "i" => 0], ["a" => [2], "i" => 0]))], "i" => 0]));
  new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool($m->insert(["a" => [new std_pair_int_int(std_make_pair_int_int(["a" => [3], "i" => 0], ["a" => [4], "i" => 0]))], "i" => 0]));
  new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool($m->insert(["a" => [new std_pair_int_int(std_make_pair_int_int(["a" => [1], "i" => 0], ["a" => [9], "i" => 0]))], "i" => 0]));
  null;
  $n = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  ($t67 = $n->op_index(["a" => [1], "i" => 0]), $t67["a"][$t67["i"]] = 2);
  ($t68 = $n->op_index(["a" => [2], "i" => 0]), $t68["a"][$t68["i"]] = 3);
  ($t69 = $n->op_index(["a" => [5], "i" => 0]), $t69["a"][$t69["i"]] = 50);
  ($t70 = $n->op_index(["a" => [3], "i" => 0]), $t70["a"][$t70["i"]] = 30);
  ($t71 = $n->op_index(["a" => [1], "i" => 0]), $t71["a"][$t71["i"]] = 11);
  ($t78 = ($t77 = ($t76 = ($t75 = ($t74 = ($t73 = ($t72 = (__ctj_write(__ctj_fmt($n->op_index(["a" => [1], "i" => 0]))), $std_cout), __ctj_write(__ctj_fmt([32, 0])), $t72), __ctj_write(__ctj_fmt($n->op_index(["a" => [2], "i" => 0]))), $t73), __ctj_write(__ctj_fmt([32, 0])), $t74), __ctj_write(__ctj_fmt($n->op_index(["a" => [3], "i" => 0]))), $t75), __ctj_write(__ctj_fmt([32, 0])), $t76), __ctj_write(__ctj_fmt($n->op_index(["a" => [5], "i" => 0]))), $t77), __ctj_write("\n"), $t78);
  ($t79 = (__ctj_write(__ctj_fmt($n->size__c())), $std_cout), __ctj_write("\n"), $t79);
  return 0;
}
function std_min_long($__a, $__b) {
  if (($__b["a"][$__b["i"]] < $__a["a"][$__a["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_make_pair_int_int($__x, $__y) {
  return new std_pair_int_int(["a" => [[($t80 = std_forward_1_int($__x), $t80["a"][$t80["i"]]), ($t81 = std_forward_1_int($__y), $t81["a"][$t81["i"]])]], "i" => 0]);
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_declval_int() {
  return std_declval_protector_int::__delegate();
}
function std_declval_std_pair_int_int_RR() {
  return std_declval_protector_std_pair_int_int_RR::__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R::__delegate();
}
function std_declval_std_Rb_tree_iterator_std_pair_int_int_R() {
  return std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R::__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R::__delegate();
}
function std_declval_std_Rb_tree_iterator_std_pair_int_int() {
  return std_declval_protector_std_Rb_tree_iterator_std_pair_int_int::__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool::__delegate();
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R::__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P::__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_P::__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t::__delegate();
}
function std_declval_std_tuple_int_R() {
  return std_declval_protector_std_tuple_int_R::__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple::__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P::__delegate();
}
function std_declval_std_pair_int_int() {
  return std_declval_protector_std_pair_int_int::__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_R() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_R::__delegate();
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_pair_int_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_piecewise_construct_t($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple_int_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_std_pair_int_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_int_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_get_4_value0_int_R($__t) {
  return std_get_helper_value0_int_R($__t);
}
function std_get_helper_value0_int_R($__t) {
  return std_Tuple_impl_value0_int_R::_M_head($__t);
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
std_locale::$_S_once = new class_177();
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
std_locale_facet::$_S_once = new class_177();
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
std_is_convertible_helper_int_R_int_value0::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
std_is_convertible_helper_int_int_value0::$value = (1 === 1);
std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0::$value = (1 === 1);
std_is_convertible_helper_bool_R_bool_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0::$value = (1 === 1);
std_is_convertible_helper_bool_bool_value0::$value = (1 === 1);
std_declval_protector_int_R::$__stop = false;
std_declval_protector_int::$__stop = false;
std_declval_protector_std_pair_int_int_RR::$__stop = false;
std_declval_protector_std_pair_int_int_R::$__stop = false;
std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R::$__stop = false;
std_declval_protector_bool_R::$__stop = false;
std_declval_protector_std_Rb_tree_iterator_std_pair_int_int::$__stop = false;
std_declval_protector_bool::$__stop = false;
std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0::$value = (2 === 1);
std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0::$value = (2 === 1);
std_declval_protector_std_Rb_tree_node_base_P_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_base_P::$__stop = false;
std_is_convertible_helper_int_std_uses_alloc_base_value0::$value = (2 === 1);
std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple::$value = std_integral_constant_bool_value1::$value;
std_declval_protector_std_Rb_tree_node_std_pair_int_int_P::$__stop = false;
std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int::$value = std_integral_constant_bool_value1::$value;
std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1::$value = std_integral_constant_bool_value0::$value;
std_declval_protector_std_piecewise_construct_t::$__stop = false;
std_declval_protector_std_tuple_int_R::$__stop = false;
std_declval_protector_std_tuple::$__stop = false;
std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P::$__stop = false;
std_declval_protector_std_pair_int_int::$__stop = false;
std_declval_protector_std_Rb_tree_node_std_pair_int_int_R::$__stop = false;
std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0::$value = (2 === 1);
std_is_convertible_helper_std_piecewise_construct_t_int_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_int_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_std_tuple_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_std_tuple_int_R_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_value0::$value = (2 === 1);
std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char::$id = new std_locale_id();
std_ctype_wchar_t::$id = new std_locale_id();
std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t::$id = new std_locale_id();
main();
