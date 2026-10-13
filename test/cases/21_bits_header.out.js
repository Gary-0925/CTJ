"use strict";
class lconv {
  decimal_point;
  thousands_sep;
  grouping;
  int_curr_symbol;
  currency_symbol;
  mon_decimal_point;
  mon_thousands_sep;
  mon_grouping;
  positive_sign;
  negative_sign;
  int_frac_digits;
  frac_digits;
  p_cs_precedes;
  p_sep_by_space;
  n_cs_precedes;
  n_sep_by_space;
  p_sign_posn;
  n_sign_posn;
  int_p_cs_precedes;
  int_n_cs_precedes;
  int_p_sep_by_space;
  int_n_sep_by_space;
  int_p_sign_posn;
  int_n_sign_posn;
  constructor(...$a) {
    this.__init_lconv(...$a);
  }
  __init_lconv(...$a) {
    this.decimal_point = null;
    this.thousands_sep = null;
    this.grouping = null;
    this.int_curr_symbol = null;
    this.currency_symbol = null;
    this.mon_decimal_point = null;
    this.mon_thousands_sep = null;
    this.mon_grouping = null;
    this.positive_sign = null;
    this.negative_sign = null;
    this.int_frac_digits = 0;
    this.frac_digits = 0;
    this.p_cs_precedes = 0;
    this.p_sep_by_space = 0;
    this.n_cs_precedes = 0;
    this.n_sep_by_space = 0;
    this.p_sign_posn = 0;
    this.n_sign_posn = 0;
    this.int_p_cs_precedes = 0;
    this.int_n_cs_precedes = 0;
    this.int_p_sep_by_space = 0;
    this.int_n_sep_by_space = 0;
    this.int_p_sign_posn = 0;
    this.int_n_sign_posn = 0;
  }
  __dtor() {
  }
}
class IO_FILE {
  __fd;
  __dummy;
  constructor(...$a) {
    this.__init_IO_FILE(...$a);
  }
  __init_IO_FILE(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof IO_FILE)) {
      this.__fd = (($a[0]).a[($a[0]).i]).__fd;
      this.__dummy = (($a[0]).a[($a[0]).i]).__dummy;
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      this.__fd = $a[0];
      this.__dummy = $a[1];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class tm {
  tm_sec;
  tm_min;
  tm_hour;
  tm_mday;
  tm_mon;
  tm_year;
  tm_wday;
  tm_yday;
  tm_isdst;
  constructor(...$a) {
    this.__init_tm(...$a);
  }
  __init_tm(...$a) {
    this.tm_sec = 0;
    this.tm_min = 0;
    this.tm_hour = 0;
    this.tm_mday = 0;
    this.tm_mon = 0;
    this.tm_year = 0;
    this.tm_wday = 0;
    this.tm_yday = 0;
    this.tm_isdst = 0;
  }
  __dtor() {
  }
}
class std_sfinae_types {
  __init_std_sfinae_types(...$a) { }
  __dtor() {
  }
}
class std_sfinae_types_class_50 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_50(...$a);
  }
  __init_std_sfinae_types_class_50(...$a) {
    this.__arr = new Array(2).fill(0);
  }
  __dtor() {
  }
}
class std_do_is_static_castable_impl {
  __init_std_do_is_static_castable_impl(...$a) { }
  __dtor() {
  }
}
class std_do_is_direct_constructible_impl {
  __init_std_do_is_direct_constructible_impl(...$a) { }
  __dtor() {
  }
}
class std_piecewise_construct_t {
  constructor(...$a) {
    this.__init_std_piecewise_construct_t(...$a);
  }
  __init_std_piecewise_construct_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_input_iterator_tag {
  constructor(...$a) {
    this.__init_std_input_iterator_tag(...$a);
  }
  __init_std_input_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_input_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag) ? [$a[0]] : []));
    this.__init_std_forward_iterator_tag(...$a);
  }
  __init_std_forward_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_input_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag) ? [$a[0]] : []));
    this.__init_std_bidirectional_iterator_tag(...$a);
  }
  __init_std_bidirectional_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_forward_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_random_access_iterator_tag) ? [$a[0]] : []));
    this.__init_std_random_access_iterator_tag(...$a);
  }
  __init_std_random_access_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_random_access_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_bidirectional_iterator_tag.prototype.__dtor.call(this);
  }
}
class class_152 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_152(...$a);
  }
  __init_class_152(...$a) {
    this.__count = 0;
    this.__value = 0;
  }
  __dtor() {
  }
}
class std_ios_base {
  _M_flags;
  _M_width;
  _M_precision;
  _M_fill;
  constructor(...$a) {
    this.__init_std_ios_base(...$a);
  }
  __init_std_ios_base(...$a) {
    this._M_flags = 2;
    this._M_width = 0;
    this._M_precision = 6;
    this._M_fill = 32;
  }
  __dtor() {
  }
  static boolalpha = 1;
  static dec = 2;
  static hex = 8;
  static oct = 64;
  static basefield = 74;
  static internal = 16;
  static left = 32;
  static right = 128;
  static adjustfield = 176;
  static goodbit = 0;
  static badbit = 1;
  static eofbit = 2;
  static failbit = 4;
}
class std_Ios_fmt {
  _M_mask;
  _M_value;
  constructor(...$a) {
    this.__init_std_Ios_fmt(...$a);
  }
  __init_std_Ios_fmt(...$a) {
    this._M_mask = $a[0];
    this._M_value = $a[1];
  }
  __dtor() {
  }
}
class std_Ios_arg {
  _M_kind;
  _M_value;
  constructor(...$a) {
    this.__init_std_Ios_arg(...$a);
  }
  __init_std_Ios_arg(...$a) {
    this._M_kind = 0;
    this._M_value = 0;
  }
  __dtor() {
  }
}
class std_Ios_op {
  _M_kind;
  constructor(...$a) {
    this.__init_std_Ios_op(...$a);
  }
  __init_std_Ios_op(...$a) {
    this._M_kind = $a[0];
  }
  __dtor() {
  }
}
class std_nothrow_t {
  constructor(...$a) {
    this.__init_std_nothrow_t(...$a);
  }
  __init_std_nothrow_t(...$a) {
  }
  __dtor() {
  }
}
class std_ctype_base {
  constructor(...$a) {
    this.__init_std_ctype_base(...$a);
  }
  __init_std_ctype_base(...$a) {
  }
  __dtor() {
  }
  static upper = 1;
  static lower = 2;
  static alpha = 4;
  static digit = 8;
  static xdigit = 16;
  static space = 32;
  static print = 64;
  static graph = 524;
  static cntrl = 256;
  static punct = 512;
  static alnum = 12;
}
class class_159 {
  done;
  started;
  constructor(...$a) {
    this.__init_class_159(...$a);
  }
  __init_class_159(...$a) {
    this.done = 0;
    this.started = 0;
  }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_double {
  __init_std_hash_base_unsigned_long_long_double(...$a) { }
  __dtor() {
  }
}
class std_hash_long_double extends std_hash_base_unsigned_long_long_double {
  constructor(...$a) {
    super();
    this.__init_std_hash_long_double(...$a);
  }
  __init_std_hash_long_double(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_double.prototype.__dtor.call(this);
  }
}
class std_char_traits_char {
  __init_std_char_traits_char(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_char {
  __init_gnu_cxx_new_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_allocator_char extends gnu_cxx_new_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_allocator_char(...$a);
  }
  __init_std_allocator_char(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_char.prototype.__dtor.call(this);
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char {
  _M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider();
    this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_char_rebind_char {
  __init_std_allocator_char_rebind_char(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char {
  _M_current$gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_current$gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char = null;
  }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_hash_base_unsigned_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_char_traits_wchar_t {
  __init_std_char_traits_wchar_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_wchar_t {
  __init_gnu_cxx_new_allocator_wchar_t(...$a) { }
  __dtor() {
  }
}
class std_allocator_wchar_t extends gnu_cxx_new_allocator_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_allocator_wchar_t(...$a);
  }
  __init_std_allocator_wchar_t(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_wchar_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider extends std_allocator_wchar_t {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_wchar_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  _M_dataplus$std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t;
  constructor(...$a) {
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    this._M_dataplus$std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider();
    this._M_dataplus$std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.ctj_a = this; this._M_dataplus$std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.ctj_i = "_M_dataplus$std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_wchar_t_rebind_wchar_t {
  __init_std_allocator_wchar_t_rebind_wchar_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  _M_current$gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    this._M_current$gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t = null;
  }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  __init_std_hash_base_unsigned_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.prototype.__dtor.call(this);
  }
}
class std_char_traits_char16_t {
  __init_std_char_traits_char16_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_char16_t {
  __init_gnu_cxx_new_allocator_char16_t(...$a) { }
  __dtor() {
  }
}
class std_allocator_char16_t extends gnu_cxx_new_allocator_char16_t {
  constructor(...$a) {
    super();
    this.__init_std_allocator_char16_t(...$a);
  }
  __init_std_allocator_char16_t(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_char16_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a);
  }
  __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider extends std_allocator_char16_t {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a);
  }
  __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_char16_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  _M_dataplus$std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t;
  constructor(...$a) {
    this.__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    this._M_dataplus$std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t = new std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider();
    this._M_dataplus$std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.ctj_a = this; this._M_dataplus$std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.ctj_i = "_M_dataplus$std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_char16_t_rebind_char16_t {
  __init_std_allocator_char16_t_rebind_char16_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  _M_current$gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    this._M_current$gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t = null;
  }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  __init_std_hash_base_unsigned_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.prototype.__dtor.call(this);
  }
}
class std_char_traits_char32_t {
  __init_std_char_traits_char32_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_char32_t {
  __init_gnu_cxx_new_allocator_char32_t(...$a) { }
  __dtor() {
  }
}
class std_allocator_char32_t extends gnu_cxx_new_allocator_char32_t {
  constructor(...$a) {
    super();
    this.__init_std_allocator_char32_t(...$a);
  }
  __init_std_allocator_char32_t(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_char32_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a);
  }
  __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider extends std_allocator_char32_t {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a);
  }
  __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_char32_t.prototype.__dtor.call(this);
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  _M_dataplus$std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t;
  constructor(...$a) {
    this.__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    this._M_dataplus$std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t = new std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider();
    this._M_dataplus$std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.ctj_a = this; this._M_dataplus$std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.ctj_i = "_M_dataplus$std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_char32_t_rebind_char32_t {
  __init_std_allocator_char32_t_rebind_char32_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  _M_current$gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    this._M_current$gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t = null;
  }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  __init_std_hash_base_unsigned_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.prototype.__dtor.call(this);
  }
}
class std_complex_float {
  __init_std_complex_float(...$a) { }
  __dtor() {
  }
}
class std_complex_double {
  __init_std_complex_double(...$a) { }
  __dtor() {
  }
}
class std_type_info {
  __name;
  constructor(...$a) {
    this.__init_std_type_info(...$a);
  }
  __init_std_type_info(...$a) {
    this.__name = null;
  }
  __dtor() {
  }
}
class gnu_cxx_mutex {
  __init_gnu_cxx_mutex(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_scoped_lock {
  __device;
  constructor(...$a) {
    this.__init_gnu_cxx_scoped_lock(...$a);
  }
  __init_gnu_cxx_scoped_lock(...$a) {
    this.__device = null;
  }
  __dtor() {
  }
}
class std_allocator_arg_t {
  constructor(...$a) {
    this.__init_std_allocator_arg_t(...$a);
  }
  __init_std_allocator_arg_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_arg_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_Swallow_assign {
  constructor(...$a) {
    this.__init_std_Swallow_assign(...$a);
  }
  __init_std_Swallow_assign(...$a) {
  }
  __dtor() {
  }
}
class std_Nocopy_types {
  _M_object;
  _M_const_object;
  _M_function_pointer;
  _M_member_pointer;
  constructor(...$a) {
    this.__init_std_Nocopy_types(...$a);
  }
  __init_std_Nocopy_types(...$a) {
    this._M_object = null;
    this._M_const_object = null;
    this._M_function_pointer = null;
    this._M_member_pointer = null;
  }
  __dtor() {
  }
}
class std_Any_data {
  _M_unused;
  _M_pod_data;
  constructor(...$a) {
    this.__init_std_Any_data(...$a);
  }
  __init_std_Any_data(...$a) {
    this._M_unused = new std_Nocopy_types();
    this._M_unused.ctj_a = this; this._M_unused.ctj_i = "_M_unused";
    this._M_pod_data = new Array(4).fill(0);
  }
  __dtor() {
  }
}
class std_Function_base {
  _M_functor;
  _M_manager;
  constructor(...$a) {
    this.__init_std_Function_base(...$a);
  }
  __init_std_Function_base(...$a) {
    this._M_functor = new std_Any_data();
    this._M_functor.ctj_a = this; this._M_functor.ctj_i = "_M_functor";
    this._M_manager = 0;
  }
  __dtor() {
  }
  static _M_max_size = 4;
  static _M_max_align = 4;
}
class std_Bit_reference {
  _M_p;
  _M_mask;
  constructor(...$a) {
    this.__init_std_Bit_reference(...$a);
  }
  __init_std_Bit_reference(...$a) {
    this._M_p = null;
    this._M_mask = 0;
  }
  __dtor() {
  }
}
class std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  __init_std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R(...$a) { }
  __dtor() {
  }
}
class std_Bit_iterator_base extends std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  _M_p;
  _M_offset;
  constructor(...$a) {
    super();
    this.__init_std_Bit_iterator_base(...$a);
  }
  __init_std_Bit_iterator_base(...$a) {
    this._M_p = null;
    this._M_offset = 0;
  }
  __dtor() {
    std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R.prototype.__dtor.call(this);
  }
}
class std_Bit_iterator extends std_Bit_iterator_base {
  constructor(...$a) {
    super();
    this.__init_std_Bit_iterator(...$a);
  }
  __init_std_Bit_iterator(...$a) {
  }
  __dtor() {
    std_Bit_iterator_base.prototype.__dtor.call(this);
  }
}
class std_Bit_const_iterator extends std_Bit_iterator_base {
  constructor(...$a) {
    super();
    this.__init_std_Bit_const_iterator(...$a);
  }
  __init_std_Bit_const_iterator(...$a) {
  }
  __dtor() {
    std_Bit_iterator_base.prototype.__dtor.call(this);
  }
}
class std_bernoulli_distribution_param_type {
  _M_p;
  constructor(...$a) {
    this.__init_std_bernoulli_distribution_param_type(...$a);
  }
  __init_std_bernoulli_distribution_param_type(...$a) {
    this._M_p = ($a[0] === undefined ? (0.5) : $a[0]);
  }
  __dtor() {
  }
}
class std_bernoulli_distribution {
  _M_param;
  constructor(...$a) {
    this.__init_std_bernoulli_distribution(...$a);
  }
  __init_std_bernoulli_distribution(...$a) {
    this._M_param = new std_bernoulli_distribution_param_type(0.5);
    this._M_param.ctj_a = this; this._M_param.ctj_i = "_M_param";
  }
  __dtor() {
  }
}
class std_Base_bitset_value0 {
  __init_std_Base_bitset_value0(...$a) { }
  __dtor() {
  }
}
class std_bitset_value0 extends std_Base_bitset_value0 {
  constructor(...$a) {
    super();
    this.__init_std_bitset_value0(...$a);
  }
  __init_std_bitset_value0(...$a) {
  }
  __dtor() {
    std_Base_bitset_value0.prototype.__dtor.call(this);
  }
}
class std_locale_facet {
  _M_refcount;
  constructor(...$a) {
    this.__init_std_locale_facet(...$a);
  }
  __init_std_locale_facet(...$a) {
    this._M_refcount = 0;
  }
  __dtor() {
  }
  static _S_c_locale = null;
  static _S_c_name = null;
  static _S_once = new std_locale_facet();
}
class std_locale_id {
  _M_index;
  constructor(...$a) {
    this.__init_std_locale_id(...$a);
  }
  __init_std_locale_id(...$a) {
    this._M_index = 0;
  }
  __dtor() {
  }
  static _S_refcount = 0;
}
class std_ctype_char extends std_locale_facet {
  _M_c_locale_ctype$std_ctype_char;
  _M_del$std_ctype_char;
  _M_toupper$std_ctype_char;
  _M_tolower$std_ctype_char;
  _M_table$std_ctype_char;
  _M_widen_ok$std_ctype_char;
  _M_widen$std_ctype_char;
  _M_narrow$std_ctype_char;
  _M_narrow_ok$std_ctype_char;
  constructor(...$a) {
    super();
    this.__init_std_ctype_char(...$a);
  }
  __init_std_ctype_char(...$a) {
    std_ctype_base.prototype.__init_std_ctype_base.call(this);
    this._M_c_locale_ctype$std_ctype_char = null;
    this._M_del$std_ctype_char = false;
    this._M_toupper$std_ctype_char = null;
    this._M_tolower$std_ctype_char = null;
    this._M_table$std_ctype_char = null;
    this._M_widen_ok$std_ctype_char = 0;
    this._M_widen$std_ctype_char = new Array(256).fill(0);
    this._M_narrow$std_ctype_char = new Array(256).fill(0);
    this._M_narrow_ok$std_ctype_char = 0;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
    std_ctype_base.prototype.__dtor.call(this);
  }
  do_widen__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] === null || (typeof $a[2] === "object" && ($a[2].a === undefined || typeof $a[2].a[$a[2].i] !== "object")))) {
      memcpy((($a[2]) ? {a: ($a[2]).a, i: ($a[2]).i} : null), (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ((((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0))) >>> 0));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || (typeof $a[3] === "object" && ($a[3].a === undefined || typeof $a[3].a[$a[3].i] !== "object")))) {
      memcpy((($a[3]) ? {a: ($a[3]).a, i: ($a[3]).i} : null), (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ((((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0))) >>> 0));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_ctype_char();
  static table_size = 256;
}
for (let $b = std_ctype_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_ctype_char.prototype)) std_ctype_char.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_ctype_char)) std_ctype_char[$k] = $b[$k];
  }
}
class std_Rb_tree_node_base {
  _M_color;
  _M_parent;
  _M_left;
  _M_right;
  constructor(...$a) {
    this.__init_std_Rb_tree_node_base(...$a);
  }
  __init_std_Rb_tree_node_base(...$a) {
    this._M_color = 0;
    this._M_parent = null;
    this._M_left = null;
    this._M_right = null;
  }
  __dtor() {
  }
}
class std_atomic_flag_base {
  _M_i;
  constructor(...$a) {
    this.__init_std_atomic_flag_base(...$a);
  }
  __init_std_atomic_flag_base(...$a) {
    this._M_i = 0;
  }
  __dtor() {
  }
}
class std_atomic_flag extends std_atomic_flag_base {
  constructor(...$a) {
    super();
    this.__init_std_atomic_flag(...$a);
  }
  __init_std_atomic_flag(...$a) {
  }
  __dtor() {
    std_atomic_flag_base.prototype.__dtor.call(this);
  }
}
class std_error_code {
  _M_value;
  _M_cat;
  constructor(...$a) {
    this.__init_std_error_code(...$a);
  }
  __init_std_error_code(...$a) {
    this._M_value = 0;
    this._M_cat = null;
  }
  __dtor() {
  }
}
class std_error_condition {
  _M_value;
  _M_cat;
  constructor(...$a) {
    this.__init_std_error_condition(...$a);
  }
  __init_std_error_condition(...$a) {
    this._M_value = 0;
    this._M_cat = null;
  }
  __dtor() {
  }
}
class std_error_category {
  __init_std_error_category(...$a) { }
  __dtor() {
  }
  name__c() {
    throw new Error("pure virtual called");
  }
  message__c($p0) {
    throw new Error("pure virtual called");
  }
}
class std_defer_lock_t {
  constructor(...$a) {
    this.__init_std_defer_lock_t(...$a);
  }
  __init_std_defer_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_try_to_lock_t {
  constructor(...$a) {
    this.__init_std_try_to_lock_t(...$a);
  }
  __init_std_try_to_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_adopt_lock_t {
  constructor(...$a) {
    this.__init_std_adopt_lock_t(...$a);
  }
  __init_std_adopt_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_detail_PatternCursor {
  __init_std_detail_PatternCursor(...$a) { }
  __dtor() {
  }
  _M_next() {
    throw new Error("pure virtual called");
  }
  _M_at_end__c() {
    throw new Error("pure virtual called");
  }
}
class std_detail_Results {
  __init_std_detail_Results(...$a) { }
  __dtor() {
  }
  _M_set_pos(__i, __j, __p) {
    throw new Error("pure virtual called");
  }
  _M_set_matched(__i, __is_matched) {
    throw new Error("pure virtual called");
  }
}
class std_unary_function_std_detail_PatternCursor_R_bool {
  __init_std_unary_function_std_detail_PatternCursor_R_bool(...$a) { }
  __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R extends std_unary_function_std_detail_PatternCursor_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a);
  }
  __init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a) {
  }
  __dtor() {
    std_unary_function_std_detail_PatternCursor_R_bool.prototype.__dtor.call(this);
  }
}
class std_function_func_bool_std_detail_PatternCursor_R extends std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R {
  _M_invoker$std_function_func_bool_std_detail_PatternCursor_R;
  constructor(...$a) {
    super();
    this.__init_std_function_func_bool_std_detail_PatternCursor_R(...$a);
  }
  __init_std_function_func_bool_std_detail_PatternCursor_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker$std_function_func_bool_std_detail_PatternCursor_R = null;
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (let $b = std_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_function_func_bool_std_detail_PatternCursor_R.prototype)) std_function_func_bool_std_detail_PatternCursor_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_bool_std_detail_PatternCursor_R)) std_function_func_bool_std_detail_PatternCursor_R[$k] = $b[$k];
  }
}
class std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  __init_std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void(...$a) { }
  __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  constructor(...$a) {
    super();
    this.__init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  __init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
  }
  __dtor() {
    std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void.prototype.__dtor.call(this);
  }
}
class std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R {
  _M_invoker$std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R;
  constructor(...$a) {
    super();
    this.__init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  __init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker$std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R = null;
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (let $b = std_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype)) std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R)) std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R[$k] = $b[$k];
  }
}
class std_detail_State {
  _M_opcode;
  _M_next;
  _M_alt;
  _M_subexpr;
  _M_tagger;
  _M_matches;
  constructor(...$a) {
    this.__init_std_detail_State(...$a);
  }
  __init_std_detail_State(...$a) {
    this._M_opcode = 0;
    this._M_next = 0;
    this._M_alt = 0;
    this._M_subexpr = 0;
    this._M_tagger = new std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R();
    this._M_tagger.ctj_a = this; this._M_tagger.ctj_i = "_M_tagger";
    this._M_matches = new std_function_func_bool_std_detail_PatternCursor_R();
    this._M_matches.ctj_a = this; this._M_matches.ctj_i = "_M_matches";
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_State {
  __init_gnu_cxx_new_allocator_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_detail_State extends gnu_cxx_new_allocator_std_detail_State {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_detail_State(...$a);
  }
  __init_std_allocator_std_detail_State(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl extends std_allocator_std_detail_State {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
  }
  __dtor() {
    std_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  _M_impl$std_Vector_base_std_detail_State_std_allocator_std_detail_State;
  constructor(...$a) {
    this.__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a) {
    this._M_impl$std_Vector_base_std_detail_State_std_allocator_std_detail_State = new std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl();
    this._M_impl$std_Vector_base_std_detail_State_std_allocator_std_detail_State.ctj_a = this; this._M_impl$std_Vector_base_std_detail_State_std_allocator_std_detail_State.ctj_i = "_M_impl$std_Vector_base_std_detail_State_std_allocator_std_detail_State";
  }
  __dtor() {
  }
}
class std_vector_std_detail_State_std_allocator_std_detail_State extends std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  constructor(...$a) {
    super();
    this.__init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  __init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a) {
  }
  __dtor() {
    std_Vector_base_std_detail_State_std_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State {
  __init_gnu_cxx_alloc_traits_std_allocator_std_detail_State(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State_rebind_std_detail_State {
  __init_gnu_cxx_alloc_traits_std_allocator_std_detail_State_rebind_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_detail_State_rebind_std_detail_State {
  __init_std_allocator_std_detail_State_rebind_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_type_index {
  _M_target;
  constructor(...$a) {
    this.__init_std_type_index(...$a);
  }
  __init_std_type_index(...$a) {
    this._M_target = null;
  }
  __dtor() {
  }
}
class std_Placeholder_value1 {
  constructor(...$a) {
    this.__init_std_Placeholder_value1(...$a);
  }
  __init_std_Placeholder_value1(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value2 {
  constructor(...$a) {
    this.__init_std_Placeholder_value2(...$a);
  }
  __init_std_Placeholder_value2(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value3 {
  constructor(...$a) {
    this.__init_std_Placeholder_value3(...$a);
  }
  __init_std_Placeholder_value3(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value4 {
  constructor(...$a) {
    this.__init_std_Placeholder_value4(...$a);
  }
  __init_std_Placeholder_value4(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value5 {
  constructor(...$a) {
    this.__init_std_Placeholder_value5(...$a);
  }
  __init_std_Placeholder_value5(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value6 {
  constructor(...$a) {
    this.__init_std_Placeholder_value6(...$a);
  }
  __init_std_Placeholder_value6(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value7 {
  constructor(...$a) {
    this.__init_std_Placeholder_value7(...$a);
  }
  __init_std_Placeholder_value7(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value8 {
  constructor(...$a) {
    this.__init_std_Placeholder_value8(...$a);
  }
  __init_std_Placeholder_value8(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value9 {
  constructor(...$a) {
    this.__init_std_Placeholder_value9(...$a);
  }
  __init_std_Placeholder_value9(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value10 {
  constructor(...$a) {
    this.__init_std_Placeholder_value10(...$a);
  }
  __init_std_Placeholder_value10(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value11 {
  constructor(...$a) {
    this.__init_std_Placeholder_value11(...$a);
  }
  __init_std_Placeholder_value11(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value12 {
  constructor(...$a) {
    this.__init_std_Placeholder_value12(...$a);
  }
  __init_std_Placeholder_value12(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value13 {
  constructor(...$a) {
    this.__init_std_Placeholder_value13(...$a);
  }
  __init_std_Placeholder_value13(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value14 {
  constructor(...$a) {
    this.__init_std_Placeholder_value14(...$a);
  }
  __init_std_Placeholder_value14(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value15 {
  constructor(...$a) {
    this.__init_std_Placeholder_value15(...$a);
  }
  __init_std_Placeholder_value15(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value16 {
  constructor(...$a) {
    this.__init_std_Placeholder_value16(...$a);
  }
  __init_std_Placeholder_value16(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value17 {
  constructor(...$a) {
    this.__init_std_Placeholder_value17(...$a);
  }
  __init_std_Placeholder_value17(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value18 {
  constructor(...$a) {
    this.__init_std_Placeholder_value18(...$a);
  }
  __init_std_Placeholder_value18(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value19 {
  constructor(...$a) {
    this.__init_std_Placeholder_value19(...$a);
  }
  __init_std_Placeholder_value19(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value20 {
  constructor(...$a) {
    this.__init_std_Placeholder_value20(...$a);
  }
  __init_std_Placeholder_value20(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value21 {
  constructor(...$a) {
    this.__init_std_Placeholder_value21(...$a);
  }
  __init_std_Placeholder_value21(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value22 {
  constructor(...$a) {
    this.__init_std_Placeholder_value22(...$a);
  }
  __init_std_Placeholder_value22(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value23 {
  constructor(...$a) {
    this.__init_std_Placeholder_value23(...$a);
  }
  __init_std_Placeholder_value23(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value24 {
  constructor(...$a) {
    this.__init_std_Placeholder_value24(...$a);
  }
  __init_std_Placeholder_value24(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value25 {
  constructor(...$a) {
    this.__init_std_Placeholder_value25(...$a);
  }
  __init_std_Placeholder_value25(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value26 {
  constructor(...$a) {
    this.__init_std_Placeholder_value26(...$a);
  }
  __init_std_Placeholder_value26(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value27 {
  constructor(...$a) {
    this.__init_std_Placeholder_value27(...$a);
  }
  __init_std_Placeholder_value27(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value28 {
  constructor(...$a) {
    this.__init_std_Placeholder_value28(...$a);
  }
  __init_std_Placeholder_value28(...$a) {
  }
  __dtor() {
  }
}
class std_Placeholder_value29 {
  constructor(...$a) {
    this.__init_std_Placeholder_value29(...$a);
  }
  __init_std_Placeholder_value29(...$a) {
  }
  __dtor() {
  }
}
class std_basic_ostream_char_std_char_traits_char extends std_ios_base {
  _M_fd$std_basic_ostream_char_std_char_traits_char;
  _M_tie$std_basic_ostream_char_std_char_traits_char;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    this._M_fd$std_basic_ostream_char_std_char_traits_char = ($a[0] === undefined ? (((1) | 0)) : $a[0]);
    this._M_tie$std_basic_ostream_char_std_char_traits_char = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  _M_put(__k, __v, __s, __n) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$std_basic_ostream_char_std_char_traits_char)));
    this._M_width = 0;
  }
}
class std_basic_istream_char_std_char_traits_char extends std_ios_base {
  _M_tie$std_basic_istream_char_std_char_traits_char;
  _M_state$std_basic_istream_char_std_char_traits_char;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_istream_char_std_char_traits_char(...$a) {
    this._M_tie$std_basic_istream_char_std_char_traits_char = null;
    this._M_state$std_basic_istream_char_std_char_traits_char = 0;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
}
class std_Base_bitset_value1 {
  _M_w$std_Base_bitset_value1;
  constructor(...$a) {
    this.__init_std_Base_bitset_value1(...$a);
  }
  __init_std_Base_bitset_value1(...$a) {
    this._M_w$std_Base_bitset_value1 = Number(BigInt.asUintN(32, $a[0]));
  }
  __dtor() {
  }
}
class std_bitset_value11 extends std_Base_bitset_value1 {
  constructor(...$a) {
    super(...[std_Sanitize_val_value11_value1._S_do_sanitize_val($a[0])]);
    this.__init_std_bitset_value11(...$a);
  }
  __init_std_bitset_value11(...$a) {
  }
  __dtor() {
    std_Base_bitset_value1.prototype.__dtor.call(this);
  }
}
class std_char_traits_int {
  __init_std_char_traits_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_int(...$a);
  }
  __init_gnu_cxx_new_allocator_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t0;
    if ((__n > gnu_cxx_new_allocator_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_long(((Math.imul(__n, 4)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (4))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_int_construct_int_int__rv(__p, __args_0) {
    let $t1;
    (__p.a[__p.i] = ($t1 = std_forward_1_int(__args_0), $t1.a[$t1.i]));
  }
  destroy__gnu_cxx_new_allocator_int_destroy_int(__p) {
    void 0;
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : []));
    this.__init_std_allocator_int(...$a);
  }
  __init_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider extends std_allocator_int {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int {
  _M_dataplus$std_basic_string_int_std_char_traits_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_dataplus$std_basic_string_int_std_char_traits_int_std_allocator_int = new std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider();
    this._M_dataplus$std_basic_string_int_std_char_traits_int_std_allocator_int.ctj_a = this; this._M_dataplus$std_basic_string_int_std_char_traits_int_std_allocator_int.ctj_i = "_M_dataplus$std_basic_string_int_std_char_traits_int_std_allocator_int";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_int_rebind_int {
  __init_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int {
  _M_current$gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_current$gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int = null;
  }
  __dtor() {
  }
}
class std_Sanitize_val_value11_value1 {
  __init_std_Sanitize_val_value11_value1(...$a) { }
  __dtor() {
  }
  static _S_do_sanitize_val(__val) {
    return BigInt.asUintN(64, (__val) & (BigInt.asUintN(64, ~(BigInt.asUintN(64, (BigInt.asUintN(64, ~(0n))) << (11n))))));
  }
}
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_start = null;
      this._M_finish = null;
      this._M_end_of_storage = null;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_start = null;
      this._M_finish = null;
      this._M_end_of_storage = null;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_int_std_allocator_int {
  _M_impl$std_Vector_base_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_impl$std_Vector_base_int_std_allocator_int = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0]);
      this._M_impl$std_Vector_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_int_std_allocator_int";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl$std_Vector_base_int_std_allocator_int = new std_Vector_base_int_std_allocator_int_Vector_impl();
      this._M_impl$std_Vector_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_int_std_allocator_int";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"};
  }
  _M_allocate(__n) {
    let $t2;
    return ($t2 = ((__n !== ((0) >>> 0)) ? gnu_cxx_new_allocator_int.prototype.allocate.call(this._M_impl$std_Vector_base_int_std_allocator_int, __n, {a: [0], i: 0}) : 0), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      gnu_cxx_new_allocator_int.prototype.deallocate.call(this._M_impl$std_Vector_base_int_std_allocator_int, (__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t3, $t4;
    if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(($t3 = ({a: $a[0], i: 0}), $t3 ? {a: $t3.a, i: $t3.i} : null), ($t4 = ({a: $a[0], i: ($a[0]).length}), $t4 ? {a: $t4.a, i: $t4.i} : null), new std_random_access_iterator_tag());
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl$std_Vector_base_int_std_allocator_int, i: "_M_start"});
  }
  end() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl$std_Vector_base_int_std_allocator_int, i: "_M_finish"});
  }
  size__c() {
    return ((((this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i : 0) - (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  push_back(__x) {
    if ((!(this._M_impl$std_Vector_base_int_std_allocator_int._M_finish === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage || (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish && this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.a && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), __x);
        ++this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(__x);
    }
  }
  _M_check_len__c(__n, __s) {
    let $t5;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t5 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t5.a[$t5.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(__args_0) {
    let $t6, $t7, $t8, $t9, $t10;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t6 = std_Vector_base_int_std_allocator_int.prototype._M_allocate.call(this, __len), $t6 ? {a: $t6.a, i: $t6.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t7 ? {a: $t7.a, i: $t7.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t8 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t8 ? {a: $t8.a, i: $t8.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, ($t9 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t9 ? {a: $t9.a, i: $t9.i} : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), ((((this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage ? this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.i : 0) - (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0))) >>> 0));
    this._M_impl$std_Vector_base_int_std_allocator_int._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage = ($t10 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t10 ? {a: $t10.a, i: $t10.i} : null);
  }
  _M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__first);
    }
  }
  emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__args_0) {
    if ((!(this._M_impl$std_Vector_base_int_std_allocator_int._M_finish === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage || (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish && this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.a && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), std_forward_1_int(__args_0));
        ++this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(std_forward_1_int(__args_0));
    }
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__a, __p, __arg) {
    gnu_cxx_new_allocator_int.prototype.construct__gnu_cxx_new_allocator_int_construct_int_int__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return gnu_cxx_new_allocator_int.prototype.max_size__c.call(__a.a[__a.i]);
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__a, __p) {
    gnu_cxx_new_allocator_int.prototype.destroy__gnu_cxx_new_allocator_int_destroy_int.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_int {
  _M_array$std_initializer_list_int;
  _M_len$std_initializer_list_int;
  constructor(...$a) {
    this.__init_std_initializer_list_int(...$a);
  }
  __init_std_initializer_list_int(...$a) {
    this._M_array$std_initializer_list_int = null;
    this._M_len$std_initializer_list_int = 0;
  }
  __dtor() {
  }
  size__c() {
    return this._M_len$std_initializer_list_int;
  }
  begin__c() {
    return (this._M_array$std_initializer_list_int ? {a: this._M_array$std_initializer_list_int.a, i: this._M_array$std_initializer_list_int.i} : null);
  }
  end__c() {
    let $t11, $t12, $t13;
    return ($t13 = ($t12 = ($t11 = this.begin__c(), $t11), ({a: ($t12 ? $t12.a : null), i: ($t12 ? $t12.i : 0) + (this.size__c())})), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t14, $t15, $t16;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = (((($a[0]).a[($a[0]).i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int) ? {a: ((($a[0]).a[($a[0]).i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int).a, i: ((($a[0]).a[($a[0]).i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = ($t14 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = ($t16 = 0, $t16 ? {a: $t16.a, i: $t16.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  }
  op_inc() {
    ++this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i;
    return {a: [this], i: 0};
  }
  op_dec() {
    --this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i;
    return {a: [this], i: 0};
  }
  op_add_assign(__n) {
    this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i += (__n.a[__n.i]);
    return {a: [this], i: 0};
  }
  op_add__c(__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int ? this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.a : null), i: (this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int ? this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i : 0) + (__n.a[__n.i])})], i: 0});
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int ? this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.a : null), i: (this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int ? this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int"};
  }
  op_assign(o) {
    this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = (((o.a[o.i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int) ? {a: ((o.a[o.i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int).a, i: ((o.a[o.i])._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int).i} : null);
    return {a: [this], i: 0};
  }
}
class std_are_same_int_P_int_P {
  __init_std_are_same_int_P_int_P(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value1_std_vector_int_std_allocator_int {
  __init_gnu_cxx_enable_if_value1_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_int_P {
  __init_std_iterator_traits_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_cv_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_volatile_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_const_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Wrap_type_std_random_access_iterator_tag {
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Wrap_type_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
}
class std_integral_constant_bool_value1 {
  constructor(...$a) {
    this.__init_std_integral_constant_bool_value1(...$a);
  }
  __init_std_integral_constant_bool_value1(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  __init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1.prototype.__dtor.call(this);
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_real$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  _M_imag$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    this._M_real$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
    this._M_real$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.ctj_a = this; this._M_real$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.ctj_i = "_M_real$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int";
    this._M_imag$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
    this._M_imag$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.ctj_a = this; this._M_imag$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.ctj_i = "_M_imag$std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int";
  }
  __dtor() {
  }
}
class std_remove_cv_int {
  __init_std_remove_cv_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_int {
  __init_std_remove_volatile_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_int {
  __init_std_remove_const_int(...$a) { }
  __dtor() {
  }
}
class std_integral_constant_bool_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_bool_value0(...$a);
  }
  __init_std_integral_constant_bool_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_move_if_noexcept_cond_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_int(...$a);
  }
  __init_std_move_if_noexcept_cond_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_int(...$a);
  }
  __init_std_is_void_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_int(...$a);
  }
  __init_std_is_void_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_int_int_RR(...$a);
  }
  __init_std_is_nothrow_constructible_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_int_value0 extends std_is_nothrow_constructible_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_int_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_int_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_int extends std_is_nothrow_move_constructible_impl_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_int(...$a);
  }
  __init_std_is_nothrow_move_constructible_int(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_int_int_RR(...$a);
  }
  __init_std_is_constructible_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_int_int_RR extends std_is_direct_constructible_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_int_int_RR(...$a);
  }
  __init_std_is_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_int(...$a);
  }
  __init_std_is_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_int(...$a);
  }
  __init_std_is_lvalue_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_int(...$a);
  }
  __init_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_std_is_rvalue_reference_int {
  __init_std_conditional_value0_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_int_RR_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_int_RR_int(...$a);
  }
  __init_std_is_static_castable_int_RR_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_int_RR_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_int_RR_int(...$a);
  }
  __init_std_is_static_castable_safe_int_RR_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_int_RR_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_int_RR_int(...$a);
  }
  __init_std_is_static_castable_impl_int_RR_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_int_RR(...$a);
  }
  __init_std_is_reference_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_int_RR(...$a);
  }
  __init_std_is_lvalue_reference_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_int_RR(...$a);
  }
  __init_std_is_rvalue_reference_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR extends std_is_rvalue_reference_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_int_RR(...$a);
  }
  __init_std_not_std_is_reference_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_int_RR(...$a);
  }
  __init_std_is_void_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_int_RR {
  __init_std_remove_cv_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_int_RR {
  __init_std_remove_volatile_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_int_RR {
  __init_std_remove_const_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_int_RR(...$a);
  }
  __init_std_is_void_helper_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_int_RR(...$a);
  }
  __init_std_not_std_is_void_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR extends std_not_std_is_reference_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_int_RR_std_not_std_is_reference_int_RR {
  __init_std_conditional_value0_std_not_std_is_void_int_RR_std_not_std_is_reference_int_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_RR_value0 {
  __init_std_add_rvalue_reference_helper_int_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_int_RR extends std_add_rvalue_reference_helper_int_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_int_RR(...$a);
  }
  __init_std_add_rvalue_reference_int_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_int_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int_RR(...$a);
  }
  __init_std_is_function_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_RR_std_is_function_int_RR extends std_is_function_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  __init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  __dtor() {
    std_is_function_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_RR_std_is_function_int_RR {
  __init_std_conditional_value0_std_is_void_int_RR_std_is_function_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_int_RR_std_is_function_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_int_RR_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_int_RR_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_int_RR_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int extends std_is_lvalue_reference_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_int_RR_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_int_RR {
  __init_std_remove_reference_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_int_int(...$a);
  }
  __init_std_is_same_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_int_int(...$a);
  }
  __init_std_not_std_is_same_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_int_int(...$a);
  }
  __init_std_is_base_of_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_int_int_std_is_base_of_int_int extends std_not_std_is_same_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a);
  }
  __init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a) {
  }
  __dtor() {
    std_not_std_is_same_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_int_int_std_not_std_is_same_int_int {
  __init_std_conditional_value0_std_is_base_of_int_int_std_not_std_is_same_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0_std_is_static_castable_int_RR_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0_std_is_static_castable_int_RR_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_int_int_RR extends std_is_direct_constructible_new_safe_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_int(...$a);
  }
  __init_std_is_destructible_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_int(...$a);
  }
  __init_std_is_array_unknown_bounds_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_int(...$a);
  }
  __init_std_is_array_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_long_value0(...$a);
  }
  __init_std_integral_constant_unsigned_long_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_extent_int_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_int_value0(...$a);
  }
  __init_std_extent_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_int_value0(...$a);
  }
  __init_std_not_std_extent_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_int_std_not_std_extent_int_value0 extends std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a);
  }
  __init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_int_value0_std_is_array_int {
  __init_std_conditional_value0_std_not_std_extent_int_value0_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int(...$a);
  }
  __init_std_is_function_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_int_std_is_function_int extends std_is_function_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_is_function_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int extends std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  __init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_int_std_is_function_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_int_std_is_function_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_int_std_is_function_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  __init_std_conditional_value0_std_is_void_int_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_int(...$a);
  }
  __init_std_is_scalar_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_int(...$a);
  }
  __init_std_is_arithmetic_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_integral_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_int(...$a);
  }
  __init_std_is_integral_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_int(...$a);
  }
  __init_std_is_integral_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_int(...$a);
  }
  __init_std_is_floating_point_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_int(...$a);
  }
  __init_std_is_floating_point_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_int_std_is_floating_point_int extends std_is_integral_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_int_std_is_floating_point_int(...$a);
  }
  __init_std_or_std_is_integral_int_std_is_floating_point_int(...$a) {
  }
  __dtor() {
    std_is_integral_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_integral_int_std_is_floating_point_int {
  __init_std_conditional_value1_std_is_integral_int_std_is_floating_point_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_int(...$a);
  }
  __init_std_is_enum_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_int(...$a);
  }
  __init_std_is_pointer_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_int(...$a);
  }
  __init_std_is_pointer_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_int(...$a);
  }
  __init_std_is_member_pointer_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_int(...$a);
  }
  __init_std_is_member_pointer_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_int(...$a);
  }
  __init_std_is_nullptr_t_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_int(...$a);
  }
  __init_std_is_nullptr_t_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_arithmetic_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  __init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  __dtor() {
    std_is_arithmetic_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_nullptr_t_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  __init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  __init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_int_std_is_nullptr_t_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  __init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_int_std_is_nullptr_t_int {
  __init_std_conditional_value0_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_int_std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  __init_std_conditional_value0_std_is_pointer_int_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_int_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  __init_std_conditional_value0_std_is_enum_int_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_is_arithmetic_int_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  __init_std_conditional_value1_std_is_arithmetic_int_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_int_std_is_scalar_int extends std_is_scalar_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_int_std_is_scalar_int(...$a);
  }
  __init_std_or_std_is_reference_int_std_is_scalar_int(...$a) {
  }
  __dtor() {
    std_is_scalar_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_int_std_is_scalar_int {
  __init_std_conditional_value0_std_is_reference_int_std_is_scalar_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_int_value0_value1 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_int_value0_value1(...$a);
  }
  __init_std_is_destructible_safe_int_value0_value1(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_int_int_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR extends std_is_direct_constructible_impl_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_RR_std_is_destructible_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_int_int_RR_std_is_destructible_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_RR_std_is_direct_constructible_new_safe_int_int_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_RR_std_is_direct_constructible_new_safe_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR extends std_is_nt_constructible_impl_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  __init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_int_int_RR_std_is_constructible_int_int_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_int_int_RR_std_is_constructible_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_int(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_int_int_R(...$a);
  }
  __init_std_is_constructible_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_int_value0 extends std_is_constructible_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_int_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_int_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_int extends std_is_copy_constructible_impl_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_int(...$a);
  }
  __init_std_is_copy_constructible_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_int_int_R extends std_is_direct_constructible_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_int_int_R(...$a);
  }
  __init_std_is_constructible_impl_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_int_R_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_int_R_int(...$a);
  }
  __init_std_is_static_castable_int_R_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_int_R_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_int_R_int(...$a);
  }
  __init_std_is_static_castable_safe_int_R_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_int_R_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_int_R_int(...$a);
  }
  __init_std_is_static_castable_impl_int_R_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_int_R(...$a);
  }
  __init_std_is_reference_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_int_R(...$a);
  }
  __init_std_is_lvalue_reference_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_int_R(...$a);
  }
  __init_std_is_rvalue_reference_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R extends std_is_lvalue_reference_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_int_R(...$a);
  }
  __init_std_not_std_is_reference_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_int_R(...$a);
  }
  __init_std_is_void_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_int_R {
  __init_std_remove_cv_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_int_R {
  __init_std_remove_volatile_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_int_R {
  __init_std_remove_const_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_int_R(...$a);
  }
  __init_std_is_void_helper_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_int_R(...$a);
  }
  __init_std_not_std_is_void_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R extends std_not_std_is_reference_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_int_R_std_not_std_is_reference_int_R {
  __init_std_conditional_value0_std_not_std_is_void_int_R_std_not_std_is_reference_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_R_value0 {
  __init_std_add_rvalue_reference_helper_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_int_R extends std_add_rvalue_reference_helper_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_int_R(...$a);
  }
  __init_std_add_rvalue_reference_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int_R(...$a);
  }
  __init_std_is_function_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_R_std_is_function_int_R extends std_is_function_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  __init_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  __dtor() {
    std_is_function_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_R_std_is_function_int_R {
  __init_std_conditional_value0_std_is_void_int_R_std_is_function_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_int_R_std_is_function_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  __init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_int_R_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_int_R_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_int_R_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_int_std_is_lvalue_reference_int_R {
  __init_std_conditional_value1_std_is_rvalue_reference_int_std_is_lvalue_reference_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_int_R_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_int_R {
  __init_std_remove_reference_int_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0_std_is_static_castable_int_R_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0_std_is_static_castable_int_R_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_int_int_R extends std_is_direct_constructible_new_safe_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_int_int_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R extends std_is_direct_constructible_impl_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_R_std_is_destructible_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_int_int_R_std_is_destructible_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_R_std_is_direct_constructible_new_safe_int_int_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_R_std_is_direct_constructible_new_safe_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int extends std_not_std_is_nothrow_move_constructible_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_int_std_not_std_is_nothrow_move_constructible_int {
  __init_std_conditional_value0_std_is_copy_constructible_int_std_not_std_is_nothrow_move_constructible_int(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_int_P {
  _M_current$std_move_iterator_int_P;
  constructor(...$a) {
    this.__init_std_move_iterator_int_P(...$a);
  }
  __init_std_move_iterator_int_P(...$a) {
    let $t17;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current$std_move_iterator_int_P = ($t17 = std_move_iterator_int_P.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t17 ? {a: $t17.a, i: $t17.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$std_move_iterator_int_P = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  base__c() {
    return (this._M_current$std_move_iterator_int_P ? {a: this._M_current$std_move_iterator_int_P.a, i: this._M_current$std_move_iterator_int_P.i} : null);
  }
  op_mul__c() {
    return std_move_int(this._M_current$std_move_iterator_int_P);
  }
  op_inc() {
    ++this._M_current$std_move_iterator_int_P.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_int_P_std_move_iterator_int_P {
  __init_std_conditional_value0_int_P_std_move_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_int_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_int_RR(...$a);
  }
  __init_std_declval_protector_int_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_int_R(...$a);
  }
  __init_std_declval_protector_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_is_move_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_is_move_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0});
  }
}
class std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_move_iterator_int_P {
  __init_std_is_move_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_int_P_value0 {
  __init_std_Iter_base_int_P_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return (__it ? {a: __it.a, i: __it.i} : null);
  }
}
class std_Miter_base_int_P extends std_Iter_base_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_int_P(...$a);
  }
  __init_std_Miter_base_int_P(...$a) {
  }
  __dtor() {
    std_Iter_base_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_is_normal_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    let $t18, $t19;
    return ($t18 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__it), $t19 = ($t18 ? $t18.a[$t18.i] : null), $t19 && $t19.a !== undefined ? {a: $t19.a, i: $t19.i} : $t19);
  }
}
class std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1.prototype.__dtor.call(this);
  }
}
class std_Niter_base_int_P extends std_Iter_base_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_int_P(...$a);
  }
  __init_std_Niter_base_int_P(...$a) {
  }
  __dtor() {
    std_Iter_base_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_int_P {
  __init_std_is_normal_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_pointer_int_P {
  __init_std_is_pointer_int_P(...$a) { }
  __dtor() {
  }
}
class std_are_same_int_int {
  __init_std_are_same_int_int(...$a) { }
  __dtor() {
  }
}
class std_copy_move_backward_value1_value1_std_random_access_iterator_tag {
  __init_std_copy_move_backward_value1_value1_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
  static __copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_int(__first, __last, __result) {
    let $t20, $t21;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      memmove(($t20 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t20 ? {a: $t20.a, i: $t20.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
    }
    return ($t21 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t21 ? {a: $t21.a, i: $t21.i} : null);
  }
}
function memcpy(dst, src, n) {
  let $t22;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  for (let i = ((0) >>> 0); (i < n); ($t22 = i, i = (($t22 + 1) >>> 0), $t22)) {
    d.a[d.i + (i)] = s.a[s.i + (i)];
  }
  return dst;
}
function memmove(dst, src, n) {
  let $t23, $t24;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  if (((d ? d.i : 0) < (s ? s.i : 0))) {
     {
      for (let i = ((0) >>> 0); (i < n); ($t23 = i, i = (($t23 + 1) >>> 0), $t23)) {
        d.a[d.i + (i)] = s.a[s.i + (i)];
      }
    }
  }
  else {
     {
      while ((n > ((0) >>> 0))) {
         {
          ($t24 = n, n = (($t24 - 1) >>> 0), $t24);
          d.a[d.i + (n)] = s.a[s.i + (n)];
        }
      }
    }
  }
  return dst;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_lg__long(__n) {
  return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(__os, __s) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(__os, __m) {
  if (((__m.a[__m.i])._M_kind === 0)) {
    std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 8, 10, null, 0);
  }
  else {
    if (((__m.a[__m.i])._M_kind === 1)) {
      std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 8, 0, null, 0);
    }
    else {
      std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 9, 0, null, 0);
    }
  }
  return __os;
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_swap_int(__a, __b) {
  let $t25, $t26, $t27;
  let __tmp = {v: ($t25 = std_move_int(__a), $t25.a[$t25.i])};
  __a.a[__a.i] = ($t26 = std_move_int(__b), $t26.a[$t26.i]);
  __b.a[__b.i] = ($t27 = std_move_int({a: __tmp, i: "v"}), $t27.a[$t27.i]);
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_2(__x, __y)));
}
function std_operator_3_int_P_int_P_2(__x, __y) {
  let $t28, $t29, $t30, $t31;
  return ($t30 = ($t28 = std_move_iterator_int_P.prototype.base__c.call(__x.a[__x.i]), $t28), $t31 = ($t29 = std_move_iterator_int_P.prototype.base__c.call(__y.a[__y.i]), $t29), ($t30 === $t31 || ($t30 && $t31 && $t30.a === $t31.a && $t30.i === $t31.i)));
}
function main() {
  let $t32, $t33, $t34, $t35, $t36, $t37, $t38;
  let v = new std_vector_int_std_allocator_int();
  std_vector_int_std_allocator_int.prototype.push_back.call(v, {a: [3], i: 0});
  std_vector_int_std_allocator_int.prototype.push_back.call(v, {a: [1], i: 0});
  std_vector_int_std_allocator_int.prototype.push_back.call(v, {a: [4], i: 0});
  std_vector_int_std_allocator_int.prototype.push_back.call(v, {a: [1], i: 0});
  std_vector_int_std_allocator_int.prototype.push_back.call(v, {a: [5], i: 0});
  std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v));
  let s = 0;
  for (let $b0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, ($t32 = (($t33 = std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v)), $t33)).op_mul__c(), $t32.a[$t32.i])), {a: [32, 0], i: 0}), ($t34 = (($t35 = std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v)), $t35)).op_mul__c(), $t34.a[$t34.i])), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v), 0)), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long({a: std_cout, i: "v"}, std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v), {a: [1], i: 0})), {a: [32, 0], i: 0}), ($t36 = (($t37 = std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v), {a: [4], i: 0}), $t37)).op_mul__c(), $t36.a[$t36.i])), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v), {a: [3], i: 0}) ? ((1) | 0) : ((0) | 0))), {a: [std_endl], i: 0});
  std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_vector_int_std_allocator_int.prototype.begin.call(v), std_vector_int_std_allocator_int.prototype.end.call(v));
  let t = 0;
  for (let $b1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let y = $b1.op_mul__c();
    t = (((((Math.imul(t, 10)) | 0)) + (y.a[y.i])) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, t), {a: [std_endl], i: 0});
  let w = new std_vector_int_std_allocator_int([9, 8, 7], {a: [new std_allocator_int()], i: 0});
  let u = 0;
  for (let $b2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.begin()], i: 0}), $e2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let x = ($b2.op_mul__c()).a[($b2.op_mul__c()).i];
    u = (((((u) + (x)) | 0)) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, u), {a: [32, 0], i: 0}), ((std_vector_int_std_allocator_int.prototype.size__c.call(w)) | 0)), {a: [std_endl], i: 0});
  let a = [7, 5, 9];
  std_sort_int_P({a: a, i: 0}, ($t38 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (3)}), $t38 ? {a: $t38.a, i: $t38.i} : null));
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, a[0]), a[1]), a[2]), {a: [std_endl], i: 0});
  return 0;
}
function std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0));
      std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
}
function std_sort_int_P(__first, __last) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_int_P_long((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0));
      std_final_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t39, $t40, $t41, $t42, $t43, $t44;
  return ($t43 = (($t41 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t41) ? (($t41 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t41)).a[(($t41 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t41)).i] : null), $t44 = (($t42 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t42) ? (($t42 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t42)).a[(($t42 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t42)).i] : null), (!($t43 === $t44 || ($t43 && $t44 && $t43.a === $t44.a && $t43.i === $t44.i))));
}
function std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  }
  let __result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__first.op_inc(), {a: [__last], i: 0})) {
    if (((__result.op_mul__c()).a[(__result.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      __result.op_assign({a: [__first], i: 0});
    }
  }
  return __result;
}
function std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  }
  let __result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__first.op_inc(), {a: [__last], i: 0})) {
    if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] < (__result.op_mul__c()).a[(__result.op_mul__c()).i])) {
      __result.op_assign({a: [__first], i: 0});
    }
  }
  return __result;
}
function std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __init) {
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); __first.op_inc()) {
    __init = (((__init) + ((__first.op_mul__c()).a[(__first.op_mul__c()).i])) | 0);
  }
  return __init;
}
function std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __value) {
  let __n = 0;
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); __first.op_inc()) {
    if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] === __value.a[__value.i])) {
      (__n = ((__n + 1) | 0));
    }
  }
  return __n;
}
function std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __val) {
  let __len = std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  while ((__len > 0)) {
     {
      let __half = ((__len) >> (1));
      let __middle = {v: new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})};
      std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long({a: __middle, i: "v"}, __half);
      if (((__middle.v.op_mul__c()).a[(__middle.v.op_mul__c()).i] < __val.a[__val.i])) {
         {
          __first.op_assign({a: __middle, i: "v"});
          __first.op_inc();
          __len = ((((((__len) - (__half)) | 0)) - (1)) | 0);
        }
      }
      else {
        __len = __half;
      }
    }
  }
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
}
function std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __val) {
  let __i = std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __val);
  return (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}) && (!((__val.a[__val.i] < (__i.op_mul__c()).a[(__i.op_mul__c()).i]))));
}
function std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  __first = {v: __first};
  std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2(__lhs, __rhs) {
  let $t45, $t46, $t47, $t48, $t49, $t50;
  return ($t49 = (($t47 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t47) ? (($t47 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t47)).a[(($t47 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t47)).i] : null), $t50 = (($t48 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t48) ? (($t48 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t48)).a[(($t48 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t48)).i] : null), (($t49 ? $t49.i : 0) - ($t50 ? $t50.i : 0)));
}
function std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__first, __last, __depth_limit) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_int_P_long(__first, __last, __depth_limit) {
  let $t51;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = ($t51 = std_unguarded_partition_pivot_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t51 ? {a: $t51.a, i: $t51.i} : null);
      std_introsort_loop_int_P_long((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
    }
  }
}
function std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}));
      std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
  else {
    std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  }
}
function std_final_insertion_sort_int_P(__first, __last) {
  let $t52, $t53;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), ($t52 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t52 ? {a: $t52.a, i: $t52.i} : null));
      std_unguarded_insertion_sort_int_P(($t53 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t53 ? {a: $t53.a, i: $t53.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
  else {
    std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3(__lhs, __rhs) {
  let $t54, $t55, $t56, $t57, $t58, $t59;
  return ($t58 = (($t56 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t56) ? (($t56 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t56)).a[(($t56 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t56)).i] : null), $t59 = (($t57 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t57) ? (($t57 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t57)).a[(($t57 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t57)).i] : null), ($t58 === $t59 || ($t58 && $t59 && $t58.a === $t59.a && $t58.i === $t59.i)));
}
function std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  __first = {v: __first};
  return std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}));
}
function std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __n) {
  let __d = __n;
  std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __d, std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__i));
}
function std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($p0) {
  return new std_random_access_iterator_tag();
}
function std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, $p2) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  __last.op_dec();
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      __first.op_inc();
      __last.op_dec();
    }
  }
}
function std_forward_1_int(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t60;
  return ($t60 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t60 ? {a: $t60.a, i: $t60.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t61;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__alloc, ($t61 = std_addressof_int(__first), $t61 ? {a: $t61.a, i: $t61.i} : null));
  }
}
function std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __middle, __last) {
  std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}));
}
function std_partial_sort_int_P(__first, __middle, __last) {
  std_heap_select_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  std_sort_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
}
function std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}));
  return std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c());
}
function std_unguarded_partition_pivot_int_P(__first, __last) {
  let $t62, $t63, $t64, $t65;
  let __mid = ($t62 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t62 ? {a: $t62.a, i: $t62.i} : null);
  std_move_median_first_int_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t63 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t63 ? {a: $t63.a, i: $t63.i} : null));
  return ($t65 = std_unguarded_partition_int_P_int(($t64 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t64 ? {a: $t64.a, i: $t64.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t65 ? {a: $t65.a, i: $t65.i} : null);
}
function std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t66, $t67, $t68;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (((__i.op_mul__c()).a[(__i.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t66 = std_move_int(__i.op_mul__c()), $t66.a[$t66.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t67 = __first.op_mul__c(), $t67.a[$t67.i] = ($t68 = std_move_int({a: __val, i: "v"}), $t68.a[$t68.i]));
        }
      }
      else {
        std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
      }
    }
  }
}
function std_insertion_sort_int_P(__first, __last) {
  let $t69, $t70, $t71, $t72;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t69 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t69 ? {a: $t69.a, i: $t69.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if ((__i.a[__i.i] < __first.a[__first.i])) {
         {
          let __val = {v: ($t70 = std_move_int(__i), $t70.a[$t70.i])};
          std_move_backward_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t71 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t71 ? {a: $t71.a, i: $t71.i} : null));
          __first.a[__first.i] = ($t72 = std_move_int({a: __val, i: "v"}), $t72.a[$t72.i]);
        }
      }
      else {
        std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
      }
    }
  }
}
function std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
  }
}
function std_unguarded_insertion_sort_int_P(__first, __last) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
  }
}
function std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, $p2) {
  return gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
}
function std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __n, $p2) {
  (__i.a[__i.i]).op_add_assign({a: [__n], i: 0});
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4(__lhs, __rhs) {
  let $t73, $t74, $t75, $t76, $t77, $t78;
  return ($t77 = (($t75 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t75) ? (($t75 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t75)).a[(($t75 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t75)).i] : null), $t78 = (($t76 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t76) ? (($t76 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t76)).a[(($t76 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t76)).i] : null), (($t77 ? $t77.i : 0) < ($t78 ? $t78.i : 0)));
}
function std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b) {
  std_swap_int(__a.op_mul__c(), __b.op_mul__c());
}
function std_iter_swap_int_P_int_P(__a, __b) {
  std_swap_int(__a, __b);
}
function std_max_unsigned_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(__i) {
  return new std_move_iterator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t79;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__alloc, ($t79 = std_addressof_int(__cur), $t79 ? {a: $t79.a, i: $t79.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_int_P_std_allocator_int((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __middle, __last) {
  std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}));
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (((__i.op_mul__c()).a[(__i.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
    }
  }
}
function std_heap_select_int_P(__first, __middle, __last) {
  std_make_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
  for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
    if ((__i.a[__i.i] < __first.a[__first.i])) {
      std_pop_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null));
    }
  }
}
function std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
}
function std_sort_heap_int_P(__first, __last) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
}
function std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b, __c) {
  if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__b.op_mul__c()).a[(__b.op_mul__c()).i])) {
     {
      if (((__b.op_mul__c()).a[(__b.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
      else {
        if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
          std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
        }
      }
    }
  }
  else {
    if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
      return;
    }
    else {
      if (((__b.op_mul__c()).a[(__b.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
    }
  }
}
function std_move_median_first_int_P(__a, __b, __c) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
     {
      if ((__b.a[__b.i] < __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
      else {
        if ((__a.a[__a.i] < __c.a[__c.i])) {
          std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
        }
      }
    }
  }
  else {
    if ((__a.a[__a.i] < __c.a[__c.i])) {
      return;
    }
    else {
      if ((__b.a[__b.i] < __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
      }
      else {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
    }
  }
}
function std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __pivot) {
  while (true) {
     {
      while (((__first.op_mul__c()).a[(__first.op_mul__c()).i] < __pivot.a[__pivot.i])) {
        __first.op_inc();
      }
      __last.op_dec();
      while ((__pivot.a[__pivot.i] < (__last.op_mul__c()).a[(__last.op_mul__c()).i])) {
        __last.op_dec();
      }
      if ((!(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__first], i: 0}, {a: [__last], i: 0})))) {
        return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
      }
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      __first.op_inc();
    }
  }
}
function std_unguarded_partition_int_P_int(__first, __last, __pivot) {
  while (true) {
     {
      while ((__first.a[__first.i] < __pivot.a[__pivot.i])) {
        ++__first.i;
      }
      --__last.i;
      while ((__pivot.a[__pivot.i] < __last.a[__last.i])) {
        --__last.i;
      }
      if ((!(((__first ? __first.i : 0) < (__last ? __last.i : 0))))) {
        return (__first ? {a: __first.a, i: __first.i} : null);
      }
      std_iter_swap_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
      ++__first.i;
    }
  }
}
function std_move_int(__t) {
  return __t;
}
function std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0}));
}
function std_move_backward_int_P_int_P(__first, __last, __result) {
  let $t80, $t81, $t82;
  return ($t82 = std_copy_move_backward_a2_value1_int_P_int_P(($t80 = std_miter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t80 ? {a: $t80.a, i: $t80.i} : null), ($t81 = std_miter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t81 ? {a: $t81.a, i: $t81.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
}
function std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__last) {
  let $t83, $t84, $t85, $t86, $t87;
  let __val = {v: ($t83 = std_move_int(__last.op_mul__c()), $t83.a[$t83.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while ((__val.v < (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t84 = __last.op_mul__c(), $t84.a[$t84.i] = ($t85 = std_move_int(__next.op_mul__c()), $t85.a[$t85.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t86 = __last.op_mul__c(), $t86.a[$t86.i] = ($t87 = std_move_int({a: __val, i: "v"}), $t87.a[$t87.i]));
}
function std_unguarded_linear_insert_int_P(__last) {
  let $t88, $t89, $t90;
  let __val = {v: ($t88 = std_move_int(__last), $t88.a[$t88.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while ((__val.v < __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t89 = std_move_int(__next), $t89.a[$t89.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t90 = std_move_int({a: __val, i: "v"}), $t90.a[$t90.i]);
}
function std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t91, $t92, $t93, $t94;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t91 = std_move_int((($t92 = __first.op_add__c({a: [__parent], i: 0}), $t92)).op_mul__c()), $t91.a[$t91.i])};
      std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t93 = std_move_int({a: __value, i: "v"}), $t93.a[$t93.i]));
      if ((__parent === 0)) {
        return;
      }
      ($t94 = __parent, __parent = (($t94 - 1) | 0), $t94);
    }
  }
}
function std_make_heap_int_P(__first, __last) {
  let $t95, $t96, $t97;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t95 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t95.a[$t95.i])};
      std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t96 = std_move_int({a: __value, i: "v"}), $t96.a[$t96.i]));
      if ((__parent === 0)) {
        return;
      }
      ($t97 = __parent, __parent = (($t97 - 1) | 0), $t97);
    }
  }
}
function std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t98, $t99, $t100, $t101;
  let __value = {v: ($t98 = std_move_int(__result.op_mul__c()), $t98.a[$t98.i])};
  ($t99 = __result.op_mul__c(), $t99.a[$t99.i] = ($t100 = std_move_int(__first.op_mul__c()), $t100.a[$t100.i]));
  std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t101 = std_move_int({a: __value, i: "v"}), $t101.a[$t101.i]));
}
function std_pop_heap_int_P(__first, __last, __result) {
  let $t102, $t103, $t104;
  let __value = {v: ($t102 = std_move_int(__result), $t102.a[$t102.i])};
  __result.a[__result.i] = ($t103 = std_move_int(__first), $t103.a[$t103.i]);
  std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t104 = std_move_int({a: __value, i: "v"}), $t104.a[$t104.i]));
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0}));
}
function std_miter_base_int_P(__it) {
  let $t105;
  return ($t105 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t105 ? {a: $t105.a, i: $t105.i} : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t106, $t107, $t108;
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [std_copy_move_backward_a_value1_int_P_int_P(($t106 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), $t106 ? {a: $t106.a, i: $t106.i} : null), ($t107 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), $t107 ? {a: $t107.a, i: $t107.i} : null), ($t108 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0})), $t108 ? {a: $t108.a, i: $t108.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_int_P_int_P(__first, __last, __result) {
  let $t109, $t110, $t111, $t112;
  return ($t112 = std_copy_move_backward_a_value1_int_P_int_P(($t109 = std_niter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t109 ? {a: $t109.a, i: $t109.i} : null), ($t110 = std_niter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t110 ? {a: $t110.a, i: $t110.i} : null), ($t111 = std_niter_base_int_P((__result ? {a: __result.a, i: __result.i} : null)), $t111 ? {a: $t111.a, i: $t111.i} : null)), $t112 ? {a: $t112.a, i: $t112.i} : null);
}
function std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __len, __value) {
  let $t113, $t114, $t115, $t116, $t117, $t118, $t119, $t120, $t121, $t122, $t123, $t124, $t125, $t126;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if ((($t113 = (($t114 = __first.op_add__c({a: [__secondChild], i: 0}), $t114)).op_mul__c(), $t113.a[$t113.i]) < ($t115 = (($t116 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t116)).op_mul__c(), $t115.a[$t115.i]))) {
        ($t117 = __secondChild, __secondChild = (($t117 - 1) | 0), $t117);
      }
      ($t118 = (($t121 = __first.op_add__c({a: [__holeIndex], i: 0}), $t121)).op_mul__c(), $t118.a[$t118.i] = ($t119 = std_move_int((($t120 = __first.op_add__c({a: [__secondChild], i: 0}), $t120)).op_mul__c()), $t119.a[$t119.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t122 = (($t125 = __first.op_add__c({a: [__holeIndex], i: 0}), $t125)).op_mul__c(), $t122.a[$t122.i] = ($t123 = std_move_int((($t124 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t124)).op_mul__c()), $t123.a[$t123.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t126 = std_move_int({a: __value, i: "v"}), $t126.a[$t126.i]));
}
function std_adjust_heap_int_P_long_int(__first, __holeIndex, __len, __value) {
  let $t127, $t128, $t129, $t130, $t131, $t132, $t133, $t134;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if ((($t127 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t127.a[$t127.i]) < ($t128 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t128.a[$t128.i]))) {
        ($t129 = __secondChild, __secondChild = (($t129 - 1) | 0), $t129);
      }
      (($t130 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t130)).a[(($t130 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t130)).i] = ($t131 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t131.a[$t131.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t132 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t132)).a[(($t132 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t132)).i] = ($t133 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t133.a[$t133.i]);
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t134 = std_move_int({a: __value, i: "v"}), $t134.a[$t134.i]));
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  let $t135;
  return ($t135 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0})), $t135 ? {a: $t135.a, i: $t135.i} : null);
}
function std_niter_base_int_P(__it) {
  let $t136;
  return ($t136 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t136 ? {a: $t136.a, i: $t136.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t137;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t137 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_int((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t137 ? {a: $t137.a, i: $t137.i} : null);
}
function std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t138, $t139, $t140, $t141, $t142, $t143, $t144, $t145, $t146;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && (($t138 = (($t139 = __first.op_add__c({a: [__parent], i: 0}), $t139)).op_mul__c(), $t138.a[$t138.i]) < __value.v))) {
     {
      ($t140 = (($t143 = __first.op_add__c({a: [__holeIndex], i: 0}), $t143)).op_mul__c(), $t140.a[$t140.i] = ($t141 = std_move_int((($t142 = __first.op_add__c({a: [__parent], i: 0}), $t142)).op_mul__c()), $t141.a[$t141.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t144 = (($t146 = __first.op_add__c({a: [__holeIndex], i: 0}), $t146)).op_mul__c(), $t144.a[$t144.i] = ($t145 = std_move_int({a: __value, i: "v"}), $t145.a[$t145.i]));
}
function std_push_heap_int_P_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t147, $t148, $t149, $t150, $t151;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && (($t147 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t147.a[$t147.i]) < __value.v))) {
     {
      (($t148 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t148)).a[(($t148 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t148)).i] = ($t149 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t149.a[$t149.i]);
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t150 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t150)).a[(($t150 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t150)).i] = ($t151 = std_move_int({a: __value, i: "v"}), $t151.a[$t151.i]);
}
let ctj_stdin_file = {v: new IO_FILE(0, 0)};
let ctj_stdout_file = {v: new IO_FILE(1, 0)};
let ctj_stderr_file = {v: new IO_FILE(2, 0)};
let stdin = (({a: ctj_stdin_file, i: "v"}) ? {a: ({a: ctj_stdin_file, i: "v"}).a, i: ({a: ctj_stdin_file, i: "v"}).i} : null);
let stdout = (({a: ctj_stdout_file, i: "v"}) ? {a: ({a: ctj_stdout_file, i: "v"}).a, i: ({a: ctj_stdout_file, i: "v"}).i} : null);
let stderr = (({a: ctj_stderr_file, i: "v"}) ? {a: ({a: ctj_stderr_file, i: "v"}).a, i: ({a: ctj_stderr_file, i: "v"}).i} : null);
let std_piecewise_construct = new std_piecewise_construct_t();
let std_boolalpha = new std_Ios_fmt(1, 1);
let std_noboolalpha = new std_Ios_fmt(1, 0);
let std_dec = new std_Ios_fmt(74, 2);
let std_hex = new std_Ios_fmt(74, 8);
let std_oct = new std_Ios_fmt(74, 64);
let std_left = new std_Ios_fmt(176, 32);
let std_right = new std_Ios_fmt(176, 128);
let std_endl = new std_Ios_op(0);
let std_ends = new std_Ios_op(1);
let std_flush = new std_Ios_op(2);
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = new std_Swallow_assign();
let gnu_cxx_default_lock_policy = 0;
let std_cout = {v: new std_basic_ostream_char_std_char_traits_char(1)};
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
let std_defer_lock = new std_defer_lock_t();
let std_try_to_lock = new std_try_to_lock_t();
let std_adopt_lock = new std_adopt_lock_t();
let std_regex_constants_icase = (((1 << 0)) >>> 0);
let std_regex_constants_nosubs = (((1 << 1)) >>> 0);
let std_regex_constants_optimize = (((1 << 2)) >>> 0);
let std_regex_constants_collate = (((1 << 3)) >>> 0);
let std_regex_constants_ECMAScript = (((1 << 4)) >>> 0);
let std_regex_constants_basic = (((1 << 5)) >>> 0);
let std_regex_constants_extended = (((1 << 6)) >>> 0);
let std_regex_constants_awk = (((1 << 7)) >>> 0);
let std_regex_constants_grep = (((1 << 8)) >>> 0);
let std_regex_constants_egrep = (((1 << 9)) >>> 0);
let std_regex_constants_match_default = 0;
let std_regex_constants_match_not_bol = (1 << 0);
let std_regex_constants_match_not_eol = (1 << 1);
let std_regex_constants_match_not_bow = (1 << 2);
let std_regex_constants_match_not_eow = (1 << 3);
let std_regex_constants_match_any = (1 << 4);
let std_regex_constants_match_not_null = (1 << 5);
let std_regex_constants_match_continuous = (1 << 6);
let std_regex_constants_match_prev_avail = (1 << 7);
let std_regex_constants_format_default = 0;
let std_regex_constants_format_sed = (1 << 8);
let std_regex_constants_format_no_copy = (1 << 9);
let std_regex_constants_format_first_only = (1 << 10);
let std_regex_constants_error_collate = 0;
let std_regex_constants_error_ctype = 1;
let std_regex_constants_error_escape = 2;
let std_regex_constants_error_backref = 3;
let std_regex_constants_error_brack = 4;
let std_regex_constants_error_paren = 5;
let std_regex_constants_error_brace = 6;
let std_regex_constants_error_badbrace = 7;
let std_regex_constants_error_range = 8;
let std_regex_constants_error_space = 9;
let std_regex_constants_error_badrepeat = 10;
let std_regex_constants_error_complexity = 11;
let std_regex_constants_error_stack = 12;
let std_detail_S_invalid_state_id = ((-(1)) | 0);
main();
