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
class std_do_is_destructible_impl {
  __init_std_do_is_destructible_impl(...$a) { }
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
  __init_std_input_iterator_tag(...$a) { }
  __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_forward_iterator_tag(...$a);
  }
  __init_std_forward_iterator_tag(...$a) {
  }
  __dtor() {
    std_input_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_bidirectional_iterator_tag(...$a);
  }
  __init_std_bidirectional_iterator_tag(...$a) {
  }
  __dtor() {
    std_forward_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_random_access_iterator_tag(...$a);
  }
  __init_std_random_access_iterator_tag(...$a) {
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
  static sync_with_stdio(__sync = true) {
    return true;
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_gnu_cxx_normal_iterator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_current = null;
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    this._M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_wchar_t_P_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    this._M_current = null;
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    this._M_dataplus = new std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_char16_t_P_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    this._M_current = null;
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    this._M_dataplus = new std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_gnu_cxx_normal_iterator_char32_t_P_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    this._M_current = null;
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
  _M_c_locale_ctype;
  _M_del;
  _M_toupper;
  _M_tolower;
  _M_table;
  _M_widen_ok;
  _M_widen;
  _M_narrow;
  _M_narrow_ok;
  constructor(...$a) {
    super();
    this.__init_std_ctype_char(...$a);
  }
  __init_std_ctype_char(...$a) {
    std_ctype_base.prototype.__init_std_ctype_base.call(this);
    this._M_c_locale_ctype = null;
    this._M_del = false;
    this._M_toupper = null;
    this._M_tolower = null;
    this._M_table = null;
    this._M_widen_ok = 0;
    this._M_widen = new Array(256).fill(0);
    this._M_narrow = new Array(256).fill(0);
    this._M_narrow_ok = 0;
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
  _M_invoker;
  constructor(...$a) {
    super();
    this.__init_std_function_func_bool_std_detail_PatternCursor_R(...$a);
  }
  __init_std_function_func_bool_std_detail_PatternCursor_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker = null;
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
  _M_invoker;
  constructor(...$a) {
    super();
    this.__init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  __init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker = null;
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
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a) {
    this._M_impl = new std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
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
class ft_node {
  x;
  c;
  sz;
  ct;
  l;
  r;
  constructor(...$a) {
    this.__init_ft_node(...$a);
  }
  __init_ft_node(...$a) {
    this.x = 0;
    this.c = 0;
    this.sz = 0;
    this.ct = 0;
    this.l = 0;
    this.r = 0;
  }
  __dtor() {
  }
}
class ft {
  tl;
  rt;
  p;
  constructor(...$a) {
    this.__init_ft(...$a);
  }
  __init_ft(...$a) {
    this.tl = 0;
    this.rt = 0;
    this.p = Array.from({length: 1100006}, () => new ft_node());
  }
  __dtor() {
  }
  pushup(u) {
    (this.p[u]).sz = (((((((this.p[u]).c) + ((this.p[(this.p[u]).l]).sz)) | 0)) + ((this.p[(this.p[u]).r]).sz)) | 0);
    (this.p[u]).ct = ((((((1) + ((this.p[(this.p[u]).l]).ct)) | 0)) + ((this.p[(this.p[u]).r]).ct)) | 0);
  }
  setnode(x, c) {
    let u = (this.tl = ((this.tl + 1) | 0));
    (((this.p[u]).x = x, (this.p[u]).c = (this.p[u]).sz = c), (this.p[u]).ct = 1);
    return u;
  }
  buildat(x, l, r) {
    let $t0, $t1;
    if ((l >= r)) {
      return 0;
    }
    let u = this.setnode((($t0 = (x.a[x.i]).op_index(((l) >>> 0)), $t0.a[$t0.i])).first, (($t1 = (x.a[x.i]).op_index(((l) >>> 0)), $t1.a[$t1.i])).second);
    if (((((l) + (1)) | 0) < r)) {
       {
        (this.p[u]).l = this.buildat(x, (((l) + (1)) | 0), (((((l) + (r)) | 0)) >> (1)));
        (this.p[u]).r = this.buildat(x, (((((l) + (r)) | 0)) >> (1)), r);
        this.pushup(u);
      }
    }
    return u;
  }
  insertnd(u, v) {
    if ((!v)) {
      return;
    }
    if ((!(u.a[u.i]))) {
       {
        u.a[u.i] = v;
        return;
      }
    }
    if ((!((this.p[u.a[u.i]]).r))) {
      (this.p[u.a[u.i]]).r = v;
    }
    else {
      this.insertnd({a: this.p[u.a[u.i]], i: "r"}, v);
    }
    (this.pushup(u.a[u.i]), this.fold(u));
  }
  erasend(u) {
    if ((!((this.p[u.a[u.i]]).l))) {
       {
        u.a[u.i] = (this.p[u.a[u.i]]).r;
        return;
      }
    }
    if ((!((this.p[u.a[u.i]]).r))) {
       {
        u.a[u.i] = (this.p[u.a[u.i]]).l;
        return;
      }
    }
    (((this.p[u.a[u.i]]).x = (this.p[(this.p[u.a[u.i]]).l]).x, (this.p[u.a[u.i]]).c = (this.p[(this.p[u.a[u.i]]).l]).c), this.erasend({a: this.p[u.a[u.i]], i: "l"}));
    (this.pushup(u.a[u.i]), this.fold(u));
  }
  insertat(u, x, c) {
    x = {v: x};
    c = {v: c};
    if ((!(u.a[u.i]))) {
       {
        u.a[u.i] = this.setnode(x.v, c.v);
        return;
      }
    }
    if ((x.v === (this.p[u.a[u.i]]).x)) {
       {
        ((this.p[u.a[u.i]]).c = ((((((this.p[u.a[u.i]]).c) + (c.v)) | 0)) | 0), (this.p[u.a[u.i]]).sz = ((((((this.p[u.a[u.i]]).sz) + (c.v)) | 0)) | 0));
        return;
      }
    }
    if ((x.v < (this.p[u.a[u.i]]).x)) {
      (std_swap_int({a: x, i: "v"}, {a: this.p[u.a[u.i]], i: "x"}), std_swap_int({a: c, i: "v"}, {a: this.p[u.a[u.i]], i: "c"}));
    }
    if (((this.p[u.a[u.i]]).r && (x.v >= (this.p[(this.p[u.a[u.i]]).r]).x))) {
      this.insertat({a: this.p[u.a[u.i]], i: "r"}, x.v, c.v);
    }
    else {
      this.insertat({a: this.p[u.a[u.i]], i: "l"}, x.v, c.v);
    }
    (this.pushup(u.a[u.i]), this.fold(u));
  }
  eraseat(u, x) {
    let $t2, $t3;
    if ((!(u.a[u.i]))) {
      return;
    }
    if (((x === (this.p[u.a[u.i]]).x) && ((this.p[u.a[u.i]]).c > 1))) {
       {
        (($t2 = (this.p[u.a[u.i]]).c, (this.p[u.a[u.i]]).c = (($t2 - 1) | 0), $t2), ($t3 = (this.p[u.a[u.i]]).sz, (this.p[u.a[u.i]]).sz = (($t3 - 1) | 0), $t3));
        return;
      }
    }
    if ((x === (this.p[u.a[u.i]]).x)) {
       {
        this.erasend(u);
        return;
      }
    }
    if (((this.p[u.a[u.i]]).r && (x >= (this.p[(this.p[u.a[u.i]]).r]).x))) {
      this.eraseat({a: this.p[u.a[u.i]], i: "r"}, x);
    }
    else {
      this.eraseat({a: this.p[u.a[u.i]], i: "l"}, x);
    }
    (this.pushup(u.a[u.i]), this.fold(u));
  }
  countlat(u, x) {
    let c = 0;
    while (u) {
      if ((x > (this.p[u]).x)) {
         {
          c = (((((c) + ((this.p[u]).c)) | 0)) | 0);
          if (((!((this.p[u]).r)) || (x < (this.p[(this.p[u]).r]).x))) {
            u = (this.p[u]).l;
          }
          else {
            (c = (((((c) + ((this.p[(this.p[u]).l]).sz)) | 0)) | 0), u = (this.p[u]).r);
          }
        }
      }
      else {
        return c;
      }
    }
    return c;
  }
  getkthat(u, k) {
    while (u) {
      if ((k > (this.p[u]).c)) {
         {
          k = (((((k) - ((this.p[u]).c)) | 0)) | 0);
          if ((k <= (this.p[(this.p[u]).l]).sz)) {
            u = (this.p[u]).l;
          }
          else {
            (k = (((((k) - ((this.p[(this.p[u]).l]).sz)) | 0)) | 0), u = (this.p[u]).r);
          }
        }
      }
      else {
        return (this.p[u]).x;
      }
    }
    return ((-(1)) | 0);
  }
  fold(u) {
    if ((!(u.a[u.i]))) {
      return;
    }
    if ((((this.p[(this.p[u.a[u.i]]).r]).ct > (((((((this.p[(this.p[u.a[u.i]]).l]).ct) << (1)) | 0)) + (1)) | 0)) && ((this.p[(this.p[u.a[u.i]]).r]).l || (this.p[(this.p[u.a[u.i]]).r]).r))) {
       {
        let v = (this.p[u.a[u.i]]).r;
        if (((this.p[v]).l && (!((this.p[v]).r)))) {
          std_swap_int({a: this.p[v], i: "l"}, {a: this.p[v], i: "r"});
        }
        let w = (this.p[v]).r;
        if (((this.p[(this.p[v]).l]).ct >= 2)) {
           {
            let vl = (this.p[v]).l;
            if (((this.p[vl]).l && (!((this.p[vl]).r)))) {
              std_swap_int({a: this.p[vl], i: "l"}, {a: this.p[vl], i: "r"});
            }
            let tp = (this.p[vl]).r;
            (this.p[vl]).r = 0;
            (this.pushup(vl), (this.p[v]).r = tp);
            this.pushup(v);
          }
        }
        else {
          (this.p[v]).r = 0;
        }
        this.pushup(v);
        (this.insertnd({a: this.p[u.a[u.i]], i: "l"}, v), (this.p[u.a[u.i]]).r = w);
        this.pushup(u.a[u.i]);
        return;
      }
    }
    if ((((this.p[(this.p[u.a[u.i]]).l]).ct > (((((((this.p[(this.p[u.a[u.i]]).r]).ct) << (1)) | 0)) + (1)) | 0)) && ((this.p[(this.p[u.a[u.i]]).l]).l || (this.p[(this.p[u.a[u.i]]).l]).r))) {
       {
        let v = (this.p[u.a[u.i]]).l;
        if (((this.p[v]).l && (!((this.p[v]).r)))) {
          std_swap_int({a: this.p[v], i: "l"}, {a: this.p[v], i: "r"});
        }
        let w = {v: (this.p[v]).r};
        if (((this.p[(this.p[v]).l]).ct >= 2)) {
           {
            let vl = (this.p[v]).l;
            if (((this.p[vl]).l && (!((this.p[vl]).r)))) {
              std_swap_int({a: this.p[vl], i: "l"}, {a: this.p[vl], i: "r"});
            }
            let tp = (this.p[vl]).r;
            (this.p[vl]).r = 0;
            (this.pushup(vl), (this.p[v]).r = tp);
            this.pushup(v);
          }
        }
        else {
          ((this.p[v]).r = 0, this.pushup(v));
        }
        (this.insertnd({a: w, i: "v"}, (this.p[u.a[u.i]]).r), (this.p[u.a[u.i]]).r = w.v);
        this.pushup(u.a[u.i]);
        return;
      }
    }
  }
  build(x) {
    this.rt = this.buildat(x, 0, (((x.a[x.i]).size__c()) | 0));
  }
  insert(x) {
    this.insertat({a: this, i: "rt"}, x, 1);
  }
  erase(x) {
    this.eraseat({a: this, i: "rt"}, x);
  }
  kth(k) {
    return this.getkthat(this.rt, k);
  }
  rnk(x) {
    return (((this.countlat(this.rt, x)) + (1)) | 0);
  }
  prv(x) {
    return this.getkthat(this.rt, this.countlat(this.rt, x));
  }
  nxt(x) {
    return this.getkthat(this.rt, (((this.countlat(this.rt, (((x) + (1)) | 0))) + (1)) | 0));
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
  _M_fd;
  _M_tie;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    this._M_fd = ($a[0] === undefined ? (((1) | 0)) : $a[0]);
    this._M_tie = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  tie(__tie) {
    let __old = (this._M_tie ? {a: this._M_tie.a, i: this._M_tie.i} : null);
    this._M_tie = (__tie ? {a: __tie.a, i: __tie.i} : null);
    return (__old ? {a: __old.a, i: __old.i} : null);
  }
  _M_putll(__k, __v) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(0),(0),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd)));
    this._M_width = 0;
  }
}
class std_basic_istream_char_std_char_traits_char extends std_ios_base {
  _M_tie;
  _M_state;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_istream_char_std_char_traits_char(...$a) {
    this._M_tie = null;
    this._M_state = 0;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  tie(__tie) {
    let __old = (this._M_tie ? {a: this._M_tie.a, i: this._M_tie.i} : null);
    this._M_tie = (__tie ? {a: __tie.a, i: __tie.i} : null);
    return (__old ? {a: __old.a, i: __old.i} : null);
  }
  setstate(__s) {
    this._M_state = (((this._M_state) | (__s)) | 0);
  }
  _M_peek() {
    return ((function(){var q=(globalThis.__ctjin||(globalThis.__ctjin={s:(typeof require==='function'?require('fs').readFileSync(0,'utf8'):''),p:0}));return q.p<q.s.length?q.s.charCodeAt(q.p):-1})());
  }
  _M_peek_eof() {
    let __c = this._M_peek();
    if ((__c < 0)) {
      this.setstate(std_ios_base.eofbit);
    }
    return __c;
  }
  _M_get() {
    return ((function(){var q=(globalThis.__ctjin||(globalThis.__ctjin={s:(typeof require==='function'?require('fs').readFileSync(0,'utf8'):''),p:0}));return q.p<q.s.length?q.s.charCodeAt(q.p++):-1})());
  }
  _M_skip_space() {
    let __c = this._M_peek_eof();
    while (((__c === 32) || ((__c >= 9) && (__c <= 13)))) {
       {
        this._M_get();
        __c = this._M_peek_eof();
      }
    }
  }
  _M_read_int() {
    let __v = 0n;
    this._M_skip_space();
    let __c = this._M_peek_eof();
    if ((__c < 0)) {
       {
        this.setstate(std_ios_base.failbit);
        return 0n;
      }
    }
    let __neg = false;
    if (((__c === 43) || (__c === 45))) {
       {
        __neg = (__c === 45);
        this._M_get();
        __c = this._M_peek_eof();
      }
    }
    if (((__c < 48) || (__c > 57))) {
       {
        this.setstate(std_ios_base.failbit);
        return 0n;
      }
    }
    while (((__c >= 48) && (__c <= 57))) {
       {
        this._M_get();
        __v = BigInt.asIntN(64, (BigInt.asIntN(64, (__v) * (10n))) + (BigInt((((__c) - (48)) | 0))));
        __c = this._M_peek_eof();
      }
    }
    return (__neg ? BigInt.asIntN(64, -(__v)) : __v);
  }
}
class std_Base_bitset_value1 {
  _M_w;
  constructor(...$a) {
    this.__init_std_Base_bitset_value1(...$a);
  }
  __init_std_Base_bitset_value1(...$a) {
    this._M_w = Number(BigInt.asUintN(32, $a[0]));
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
  __init_gnu_cxx_new_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_int(...$a);
  }
  __init_std_allocator_int(...$a) {
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_dataplus = new std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_current = null;
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
class std_basic_ios_char_std_char_traits_char extends std_ios_base {
  constructor(...$a) {
    super();
    this.__init_std_basic_ios_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ios_char_std_char_traits_char(...$a) {
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
}
class std_initializer_list_char {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_char(...$a);
  }
  __init_std_initializer_list_char(...$a) {
    this._M_array = null;
    this._M_len = 0;
  }
  __dtor() {
  }
}
class std_pair_int_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_int_int(...$a);
  }
  __init_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($a[0]).a[($a[0]).i];
      this.second = ($a[1]).a[($a[1]).i];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_int_int {
  __init_gnu_cxx_new_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t4;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t4 = operatornew__unsigned_long(((Math.imul(__n, 8)) >>> 0)), $t4 ? {a: $t4.a, i: $t4.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_pair_int_int_construct_std_pair_int_int_std_pair_int_int__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_pair_int_int(std_forward_1_std_pair_int_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_std_pair_int_int_destroy_std_pair_int_int(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_std_pair_int_int extends gnu_cxx_new_allocator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl extends std_allocator_std_pair_int_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
  }
  __dtor() {
    std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_impl = new std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t5;
    return ($t5 = ((__n !== ((0) >>> 0)) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t5 ? {a: $t5.a, i: $t5.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
  begin() {
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: this._M_impl, i: "_M_start"});
  }
  end() {
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: this._M_impl, i: "_M_finish"});
  }
  size__c() {
    return ((((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.max_size(this._M_get_Tp_allocator());
  }
  empty__c() {
    return gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [this.begin()], i: 0}, {a: [this.end()], i: 0});
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  back() {
    let $t6, $t7;
    return (($t7 = (($t6 = this.end(), $t6)).op_sub__c({a: [1], i: 0}), $t7)).op_mul__c();
  }
  push_back(__x) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), __x);
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_emplace_back_aux_std_pair_int_int__rv(__x);
    }
  }
  _M_check_len__c(__n, __s) {
    let $t8;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t8 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t8.a[$t8.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_emplace_back_aux__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_emplace_back_aux_std_pair_int_int__rv(__args_0) {
    let $t9, $t10, $t11, $t12, $t13;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t9 = this._M_allocate(__len), $t9 ? {a: $t9.a, i: $t9.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int({a: this, i: "_M_impl"}, ($t10 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t10 ? {a: $t10.a, i: $t10.i} : null), std_forward_1_std_pair_int_int(__args_0));
        __new_finish = null;
        __new_finish = ($t11 = std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t11 ? {a: $t11.a, i: $t11.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_destroy_std_pair_int_int({a: this, i: "_M_impl"}, ($t12 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t12 ? {a: $t12.a, i: $t12.i} : null));
        }
        else {
          std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t13 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_pair_int_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int(__a, __p, __arg) {
    (__a.a[__a.i]).construct__gnu_cxx_new_allocator_std_pair_int_int_construct_std_pair_int_int_std_pair_int_int__rv((__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return (__a.a[__a.i]).max_size__c();
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_destroy_std_pair_int_int(__a, __p) {
    (__a.a[__a.i]).destroy__gnu_cxx_new_allocator_std_pair_int_int_destroy_std_pair_int_int((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_rebind_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  __init_std_allocator_std_pair_int_int_rebind_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_std_pair_int_int {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_std_pair_int_int(...$a);
  }
  __init_std_initializer_list_std_pair_int_int(...$a) {
    this._M_array = null;
    this._M_len = 0;
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
class std_or_std_is_function_int_std_is_array_int extends std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_function_int_std_is_array_int(...$a) {
  }
  __dtor() {
    std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_int_std_is_array_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_int_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_int_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_int_int_value0(...$a);
  }
  __init_std_is_convertible_helper_int_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
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
class std_is_convertible_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_int_int(...$a);
  }
  __init_std_is_convertible_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_reference_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_int(...$a);
  }
  __init_std_not_std_is_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_int(...$a);
  }
  __init_std_not_std_is_void_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_int_std_not_std_is_void_int extends std_not_std_is_void_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_int_std_not_std_is_reference_int {
  __init_std_conditional_value1_std_not_std_is_void_int_std_not_std_is_reference_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_value1 {
  __init_std_add_rvalue_reference_helper_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_int extends std_add_rvalue_reference_helper_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_int(...$a);
  }
  __init_std_add_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_int_value1.prototype.__dtor.call(this);
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
}
class std_and_std_is_convertible_int_int_std_is_convertible_int_int extends std_is_convertible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_int_int_std_is_convertible_int_int(...$a);
  }
  __init_std_and_std_is_convertible_int_int_std_is_convertible_int_int(...$a) {
  }
  __dtor() {
    std_is_convertible_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_int_int {
  __init_std_conditional_value1_std_is_convertible_int_int_std_is_convertible_int_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    let $t14, $t15, $t16;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) {
      this._M_current = ($t14 = (($a[0]).a[($a[0]).i]).base__c(), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_current = ($t16 = 0, $t16 ? {a: $t16.a, i: $t16.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return this._M_current;
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current"};
  }
}
class std_are_same_std_pair_int_int_P_std_pair_int_int_P {
  __init_std_are_same_std_pair_int_int_P_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_gnu_cxx_enable_if_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_std_pair_int_int_P {
  __init_std_iterator_traits_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_complex_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_complex_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_real = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int();
    this._M_real.ctj_a = this; this._M_real.ctj_i = "_M_real";
    this._M_imag = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int();
    this._M_imag.ctj_a = this; this._M_imag.ctj_i = "_M_imag";
  }
  __dtor() {
  }
}
class std_declval_protector_int {
  constructor(...$a) {
    this.__init_std_declval_protector_int(...$a);
  }
  __init_std_declval_protector_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_complex_std_pair_int_int_P {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_std_pair_int_int_P(...$a);
  }
  __init_std_complex_std_pair_int_int_P(...$a) {
    this._M_real = null;
    this._M_imag = null;
  }
  __dtor() {
  }
}
class std_remove_reference_std_pair_int_int {
  __init_std_remove_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_int_P {
  __init_std_iterator_traits_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_int_R_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_int_R_int(...$a);
  }
  __init_std_is_convertible_int_R_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
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
class std_or_std_is_void_int_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_R_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_int_R_std_is_function_int_std_is_array_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_R_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_int_R_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_int_R_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_int_R_int_value0(...$a);
  }
  __init_std_is_convertible_helper_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
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
class std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int extends std_is_convertible_int_R_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int(...$a);
  }
  __init_std_and_std_is_convertible_int_R_int_std_is_convertible_int_R_int(...$a) {
  }
  __dtor() {
    std_is_convertible_int_R_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_int_R_int {
  __init_std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_int_R_int(...$a) { }
  __dtor() {
  }
}
class std_move_if_noexcept_cond_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_std_pair_int_int(...$a);
  }
  __init_std_move_if_noexcept_cond_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_pair_int_int(...$a);
  }
  __init_std_is_void_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_int_int {
  __init_std_remove_cv_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int {
  __init_std_remove_volatile_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_pair_int_int {
  __init_std_remove_const_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_pair_int_int(...$a);
  }
  __init_std_is_void_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_constructible_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_nothrow_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_std_pair_int_int_value0 extends std_is_nothrow_constructible_std_pair_int_int_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_std_pair_int_int_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_std_pair_int_int_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_std_pair_int_int extends std_is_nothrow_move_constructible_impl_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_std_pair_int_int(...$a);
  }
  __init_std_is_nothrow_move_constructible_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_pair_int_int_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_pair_int_int(...$a);
  }
  __init_std_is_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_is_lvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int extends std_is_rvalue_reference_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_int_int_RR_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_int_int_RR_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_is_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_is_lvalue_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_is_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR extends std_is_rvalue_reference_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_not_std_is_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_pair_int_int_RR(...$a);
  }
  __init_std_is_void_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_int_int_RR {
  __init_std_remove_cv_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int_RR {
  __init_std_remove_volatile_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_pair_int_int_RR {
  __init_std_remove_const_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_pair_int_int_RR(...$a);
  }
  __init_std_is_void_helper_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_pair_int_int_RR(...$a);
  }
  __init_std_not_std_is_void_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR extends std_not_std_is_reference_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_pair_int_int_RR_std_not_std_is_void_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_int_int_RR_std_not_std_is_reference_std_pair_int_int_RR {
  __init_std_conditional_value0_std_not_std_is_void_std_pair_int_int_RR_std_not_std_is_reference_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_RR_value0 {
  __init_std_add_rvalue_reference_helper_std_pair_int_int_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int_RR extends std_add_rvalue_reference_helper_std_pair_int_int_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_pair_int_int_RR(...$a);
  }
  __init_std_add_rvalue_reference_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_pair_int_int_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_pair_int_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_pair_int_int_RR(...$a);
  }
  __init_std_is_function_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR extends std_is_function_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a);
  }
  __init_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR {
  __init_std_conditional_value0_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_std_pair_int_int_RR_std_is_function_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int extends std_is_lvalue_reference_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_int_int_RR_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_pair_int_int_RR {
  __init_std_remove_reference_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_same_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_same_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int extends std_not_std_is_same_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_is_same_std_pair_int_int_std_pair_int_int_std_is_base_of_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_not_std_is_same_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_std_pair_int_int_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_pair_int_int {
  __init_std_conditional_value0_std_is_base_of_std_pair_int_int_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_RR_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_RR_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_RR_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_pair_int_int(...$a);
  }
  __init_std_is_destructible_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_pair_int_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_pair_int_int(...$a);
  }
  __init_std_is_array_std_pair_int_int(...$a) {
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
class std_extent_std_pair_int_int_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_pair_int_int_value0(...$a);
  }
  __init_std_extent_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_extent_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0 extends std_is_array_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_pair_int_int_std_not_std_extent_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_pair_int_int_value0_std_is_array_std_pair_int_int {
  __init_std_conditional_value0_std_not_std_extent_std_pair_int_int_value0_std_is_array_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_pair_int_int(...$a);
  }
  __init_std_is_function_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int extends std_is_function_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int extends std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_void_std_pair_int_int_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
  __init_std_conditional_value0_std_is_void_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_pair_int_int(...$a);
  }
  __init_std_is_scalar_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_pair_int_int(...$a);
  }
  __init_std_is_arithmetic_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_pair_int_int(...$a);
  }
  __init_std_is_integral_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_pair_int_int(...$a);
  }
  __init_std_is_integral_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_pair_int_int(...$a);
  }
  __init_std_is_floating_point_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_pair_int_int(...$a);
  }
  __init_std_is_floating_point_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int extends std_is_floating_point_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int {
  __init_std_conditional_value0_std_is_integral_std_pair_int_int_std_is_floating_point_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_pair_int_int(...$a);
  }
  __init_std_is_enum_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_pair_int_int(...$a);
  }
  __init_std_is_pointer_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_pair_int_int(...$a);
  }
  __init_std_is_pointer_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_pair_int_int(...$a);
  }
  __init_std_is_member_pointer_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_pair_int_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  __init_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_pair_int_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_is_nullptr_t_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int extends std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_pair_int_int_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __init_std_conditional_value0_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_pair_int_int_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __init_std_conditional_value0_std_is_pointer_std_pair_int_int_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_pair_int_int_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __init_std_conditional_value0_std_is_enum_std_pair_int_int_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_pair_int_int_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __init_std_conditional_value0_std_is_arithmetic_std_pair_int_int_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int extends std_is_scalar_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int {
  __init_std_conditional_value0_std_is_reference_std_pair_int_int_std_is_scalar_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_pair_int_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_pair_int_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_pair_int_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_pair_int_int {
  __init_std_remove_all_extents_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_pair_int_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_pair_int_int(...$a);
  }
  __init_std_is_destructible_impl_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_pair_int_int_R(...$a);
  }
  __init_std_is_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_pair_int_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_pair_int_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R extends std_is_lvalue_reference_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_int_int_R {
  __init_std_remove_cv_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int_R {
  __init_std_remove_volatile_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_pair_int_int_R {
  __init_std_remove_const_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_helper_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_void_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R extends std_not_std_is_reference_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_pair_int_int_R_std_not_std_is_void_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_int_int_R_std_not_std_is_reference_std_pair_int_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_pair_int_int_R_std_not_std_is_reference_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_pair_int_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_pair_int_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_pair_int_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_pair_int_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR_std_is_destructible_std_pair_int_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_RR_std_is_destructible_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_RR_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_std_pair_int_int_std_pair_int_int_RR_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_std_pair_int_int_std_pair_int_int_RR_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_and_std_is_constructible_std_pair_int_int_std_pair_int_int_RR_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR_std_is_constructible_std_pair_int_int_std_pair_int_int_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_std_pair_int_int_std_pair_int_int_RR_std_is_constructible_std_pair_int_int_std_pair_int_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_pair_int_int_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_constructible_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_std_pair_int_int_value0 extends std_is_constructible_std_pair_int_int_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_std_pair_int_int_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_std_pair_int_int_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_std_pair_int_int extends std_is_copy_constructible_impl_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_std_pair_int_int(...$a);
  }
  __init_std_is_copy_constructible_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_pair_int_int_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R extends std_is_direct_constructible_std_pair_int_int_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_pair_int_int_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_int_int_R_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_int_int_R_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_std_pair_int_int_R_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_int_int_R_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_int_int_R_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_int_int_R_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_pair_int_int_R_std_pair_int_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_int_int_R_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_int_int_R_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_pair_int_int_R(...$a);
  }
  __init_std_is_function_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R extends std_is_function_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R(...$a);
  }
  __init_std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R {
  __init_std_conditional_value0_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_or_std_is_void_std_pair_int_int_R_std_is_function_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int extends std_is_rvalue_reference_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_int_int_R_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int_R {
  __init_std_conditional_value1_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_pair_int_int_R {
  __init_std_remove_reference_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_int_int_R_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_int_int_R_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_int_int_R_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_R_std_pair_int_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_R_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_R_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_R_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_R extends std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R extends std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R_std_is_destructible_std_pair_int_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_R_std_is_destructible_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_R_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_R_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_std_pair_int_int_std_is_copy_constructible_std_pair_int_int extends std_not_std_is_nothrow_move_constructible_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_std_pair_int_int_std_is_copy_constructible_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_std_pair_int_int_std_is_copy_constructible_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_std_pair_int_int_std_not_std_is_nothrow_move_constructible_std_pair_int_int {
  __init_std_conditional_value0_std_is_copy_constructible_std_pair_int_int_std_not_std_is_nothrow_move_constructible_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_std_pair_int_int_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_move_iterator_std_pair_int_int_P(...$a) {
    let $t17;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_pair_int_int_P)) {
      this._M_current = ($t17 = (($a[0]).a[($a[0]).i]).base__c(), $t17 ? {a: $t17.a, i: $t17.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  base__c() {
    return (this._M_current ? {a: this._M_current.a, i: this._M_current.i} : null);
  }
  op_mul__c() {
    return std_move_std_pair_int_int(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P {
  __init_std_conditional_value0_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P(...$a) { }
  __dtor() {
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
class std_declval_protector_std_pair_int_int_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_std_pair_int_int_RR(...$a);
  }
  __init_std_declval_protector_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_pair_int_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_pair_int_int_R(...$a);
  }
  __init_std_declval_protector_std_pair_int_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
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
    let $t18, $t19;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      memmove(($t18 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t18 ? {a: $t18.a, i: $t18.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
    }
    return ($t19 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t19 ? {a: $t19.a, i: $t19.i} : null);
  }
}
function memcpy(dst, src, n) {
  let $t20;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  for (let i = ((0) >>> 0); (i < n); ($t20 = i, i = (($t20 + 1) >>> 0), $t20)) {
    d.a[d.i + (i)] = s.a[s.i + (i)];
  }
  return dst;
}
function memmove(dst, src, n) {
  let $t21, $t22;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  if (((d ? d.i : 0) < (s ? s.i : 0))) {
     {
      for (let i = ((0) >>> 0); (i < n); ($t21 = i, i = (($t21 + 1) >>> 0), $t21)) {
        d.a[d.i + (i)] = s.a[s.i + (i)];
      }
    }
  }
  else {
     {
      while ((n > ((0) >>> 0))) {
         {
          ($t22 = n, n = (($t22 - 1) >>> 0), $t22);
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
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(__os, __n) {
  (__os.a[__os.i])._M_putll(3, __n);
  return __os;
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_operator__std_basic_istream_char_std_char_traits_char_R_intR(__in, __v) {
  __v.a[__v.i] = Number(BigInt.asIntN(32, (__in.a[__in.i])._M_read_int()));
  return __in;
}
function std_swap_int(__a, __b) {
  let $t23, $t24, $t25;
  let __tmp = {v: ($t23 = std_move_int(__a), $t23.a[$t23.i])};
  __a.a[__a.i] = ($t24 = std_move_int(__b), $t24.a[$t24.i]);
  __b.a[__b.i] = ($t25 = std_move_int({a: __tmp, i: "v"}), $t25.a[$t25.i]);
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P(__x, __y) {
  return (!(std_operator_3_std_pair_int_int_P_std_pair_int_int_P_2(__x, __y)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P_2(__x, __y) {
  let $t26, $t27, $t28, $t29;
  return ($t28 = ($t26 = (__x.a[__x.i]).base__c(), $t26), $t29 = ($t27 = (__y.a[__y.i]).base__c(), $t27), ($t28 === $t29 || ($t28 && $t29 && $t28.a === $t29.a && $t28.i === $t29.i)));
}
function main() {
  let $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38;
  ((std_ios_base.sync_with_stdio(0), std_cin.v.tie(null)), std_cout.v.tie(null));
  std_operator__std_basic_istream_char_std_char_traits_char_R_intR(std_operator__std_basic_istream_char_std_char_traits_char_R_intR({a: std_cin, i: "v"}, {a: n, i: "v"}), {a: m, i: "v"});
  for (let i = 1; (i <= n.v); ($t30 = i, i = (($t30 + 1) | 0), $t30)) {
    std_operator__std_basic_istream_char_std_char_traits_char_R_intR({a: std_cin, i: "v"}, {a: a.v, i: (i)});
  }
  std_sort_int_P(($t31 = ({a: (({a: a.v, i: 0}) ? (({a: a.v, i: 0})).a : null), i: (({a: a.v, i: 0}) ? (({a: a.v, i: 0})).i : 0) + (1)}), $t31 ? {a: $t31.a, i: $t31.i} : null), ($t34 = ($t33 = ($t32 = ({a: (({a: a.v, i: 0}) ? (({a: a.v, i: 0})).a : null), i: (({a: a.v, i: 0}) ? (({a: a.v, i: 0})).i : 0) + (n.v)}), $t32), ({a: ($t33 ? $t33.a : null), i: ($t33 ? $t33.i : 0) + (1)})), $t34 ? {a: $t34.a, i: $t34.i} : null));
  let b = {v: new std_vector_std_pair_int_int_std_allocator_std_pair_int_int()};
  for (let i = 1; (i <= n.v); ($t35 = i, i = (($t35 + 1) | 0), $t35)) {
    if (((!(b.v.empty__c())) && (a.v[i] === (($t36 = b.v.back(), $t36.a[$t36.i])).first))) {
      (($t37 = b.v.back(), $t37.a[$t37.i])).second++;
    }
    else {
      b.v.push_back({a: [new std_pair_int_int({a: a.v, i: (i)}, {a: [1], i: 0})], i: 0});
    }
  }
  tr.build({a: b, i: "v"});
  let lst = 0;
  let ans = 0n;
  while (($t38 = m.v, m.v = (($t38 - 1) | 0), $t38)) {
     {
      let op = {v: 0};
      let x = {v: 0};
      (std_operator__std_basic_istream_char_std_char_traits_char_R_intR(std_operator__std_basic_istream_char_std_char_traits_char_R_intR({a: std_cin, i: "v"}, {a: op, i: "v"}), {a: x, i: "v"}), x.v = (((((x.v) ^ (lst)) | 0)) | 0));
      if ((op.v === 1)) {
        tr.insert(x.v);
      }
      if ((op.v === 2)) {
        tr.erase(x.v);
      }
      if ((op.v === 3)) {
        (lst = tr.rnk(x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
      }
      if ((op.v === 4)) {
        (lst = tr.kth(x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
      }
      if ((op.v === 5)) {
        (lst = tr.prv(x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
      }
      if ((op.v === 6)) {
        (lst = tr.nxt(x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
      }
    }
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, ans);
  return 0;
}
function std_sort_int_P(__first, __last) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_int_P_long((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0));
      std_final_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_std_pair_int_int_RR() {
  return std_declval_protector_std_pair_int_int_RR.__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R.__delegate();
}
function std_introsort_loop_int_P_long(__first, __last, __depth_limit) {
  let $t39;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = ($t39 = std_unguarded_partition_pivot_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t39 ? {a: $t39.a, i: $t39.i} : null);
      std_introsort_loop_int_P_long((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
    }
  }
}
function std_final_insertion_sort_int_P(__first, __last) {
  let $t40, $t41;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), ($t40 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t40 ? {a: $t40.a, i: $t40.i} : null));
      std_unguarded_insertion_sort_int_P(($t41 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t41 ? {a: $t41.a, i: $t41.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
  else {
    std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  }
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__lhs, __rhs) {
  let $t42, $t43, $t44, $t45;
  return ($t44 = (($t42 = (__lhs.a[__lhs.i]).base__c(), $t42) ? (($t42 = (__lhs.a[__lhs.i]).base__c(), $t42)).a[(($t42 = (__lhs.a[__lhs.i]).base__c(), $t42)).i] : null), $t45 = (($t43 = (__rhs.a[__rhs.i]).base__c(), $t43) ? (($t43 = (__rhs.a[__rhs.i]).base__c(), $t43)).a[(($t43 = (__rhs.a[__rhs.i]).base__c(), $t43)).i] : null), ($t44 === $t45 || ($t44 && $t45 && $t44.a === $t45.a && $t44.i === $t45.i)));
}
function std_partial_sort_int_P(__first, __middle, __last) {
  std_heap_select_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  std_sort_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
}
function std_unguarded_partition_pivot_int_P(__first, __last) {
  let $t46, $t47, $t48, $t49;
  let __mid = ($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t46 ? {a: $t46.a, i: $t46.i} : null);
  std_move_median_first_int_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t47 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t47 ? {a: $t47.a, i: $t47.i} : null));
  return ($t49 = std_unguarded_partition_int_P_int(($t48 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t48 ? {a: $t48.a, i: $t48.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t49 ? {a: $t49.a, i: $t49.i} : null);
}
function std_insertion_sort_int_P(__first, __last) {
  let $t50, $t51, $t52, $t53;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t50 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t50 ? {a: $t50.a, i: $t50.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if ((__i.a[__i.i] < __first.a[__first.i])) {
         {
          let __val = {v: ($t51 = std_move_int(__i), $t51.a[$t51.i])};
          std_move_backward_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t52 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t52 ? {a: $t52.a, i: $t52.i} : null));
          __first.a[__first.i] = ($t53 = std_move_int({a: __val, i: "v"}), $t53.a[$t53.i]);
        }
      }
      else {
        std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
      }
    }
  }
}
function std_unguarded_insertion_sort_int_P(__first, __last) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
  }
}
function std_forward_1_std_pair_int_int(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t54;
  return ($t54 = std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t54 ? {a: $t54.a, i: $t54.i} : null);
}
function std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __alloc) {
  let $t55;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_destroy_std_pair_int_int(__alloc, ($t55 = std_addressof_std_pair_int_int(__first), $t55 ? {a: $t55.a, i: $t55.i} : null));
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
function std_sort_heap_int_P(__first, __last) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
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
function std_move_std_pair_int_int(__t) {
  return __t;
}
function std_move_backward_int_P_int_P(__first, __last, __result) {
  let $t56, $t57, $t58;
  return ($t58 = std_copy_move_backward_a2_value1_int_P_int_P(($t56 = std_miter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t56 ? {a: $t56.a, i: $t56.i} : null), ($t57 = std_miter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t57 ? {a: $t57.a, i: $t57.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t58 ? {a: $t58.a, i: $t58.i} : null);
}
function std_unguarded_linear_insert_int_P(__last) {
  let $t59, $t60, $t61;
  let __val = {v: ($t59 = std_move_int(__last), $t59.a[$t59.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while ((__val.v < __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t60 = std_move_int(__next), $t60.a[$t60.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t61 = std_move_int({a: __val, i: "v"}), $t61.a[$t61.i]);
}
function std_max_unsigned_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P(__i) {
  return new std_move_iterator_std_pair_int_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t62;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_pair_int_int_P_std_pair_int_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int(__alloc, ($t62 = std_addressof_std_pair_int_int(__cur), $t62 ? {a: $t62.a, i: $t62.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_addressof_std_pair_int_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_make_heap_int_P(__first, __last) {
  let $t63, $t64, $t65;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t63 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t63.a[$t63.i])};
      std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t64 = std_move_int({a: __value, i: "v"}), $t64.a[$t64.i]));
      if ((__parent === 0)) {
        return;
      }
      ($t65 = __parent, __parent = (($t65 - 1) | 0), $t65);
    }
  }
}
function std_pop_heap_int_P(__first, __last, __result) {
  let $t66, $t67, $t68;
  let __value = {v: ($t66 = std_move_int(__result), $t66.a[$t66.i])};
  __result.a[__result.i] = ($t67 = std_move_int(__first), $t67.a[$t67.i]);
  std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t68 = std_move_int({a: __value, i: "v"}), $t68.a[$t68.i]));
}
function std_iter_swap_int_P_int_P(__a, __b) {
  std_swap_int(__a, __b);
}
function std_miter_base_int_P(__it) {
  let $t69;
  return ($t69 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t69 ? {a: $t69.a, i: $t69.i} : null);
}
function std_copy_move_backward_a2_value1_int_P_int_P(__first, __last, __result) {
  let $t70, $t71, $t72, $t73;
  return ($t73 = std_copy_move_backward_a_value1_int_P_int_P(($t70 = std_niter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t70 ? {a: $t70.a, i: $t70.i} : null), ($t71 = std_niter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t71 ? {a: $t71.a, i: $t71.i} : null), ($t72 = std_niter_base_int_P((__result ? {a: __result.a, i: __result.i} : null)), $t72 ? {a: $t72.a, i: $t72.i} : null)), $t73 ? {a: $t73.a, i: $t73.i} : null);
}
function std_adjust_heap_int_P_long_int(__first, __holeIndex, __len, __value) {
  let $t74, $t75, $t76, $t77, $t78, $t79, $t80, $t81;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if ((($t74 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t74.a[$t74.i]) < ($t75 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t75.a[$t75.i]))) {
        ($t76 = __secondChild, __secondChild = (($t76 - 1) | 0), $t76);
      }
      (($t77 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t77)).a[(($t77 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t77)).i] = ($t78 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t78.a[$t78.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t79 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t79)).a[(($t79 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t79)).i] = ($t80 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t80.a[$t80.i]);
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t81 = std_move_int({a: __value, i: "v"}), $t81.a[$t81.i]));
}
function std_niter_base_int_P(__it) {
  let $t82;
  return ($t82 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t83;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t83 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_int((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t83 ? {a: $t83.a, i: $t83.i} : null);
}
function std_push_heap_int_P_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t84, $t85, $t86, $t87, $t88;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && (($t84 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t84.a[$t84.i]) < __value.v))) {
     {
      (($t85 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t85)).a[(($t85 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t85)).i] = ($t86 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t86.a[$t86.i]);
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t87 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t87)).a[(($t87 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t87)).i] = ($t88 = std_move_int({a: __value, i: "v"}), $t88.a[$t88.i]);
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
let std_cin = {v: new std_basic_istream_char_std_char_traits_char(0)};
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
let tr = new ft();
let n = {v: 0};
let m = {v: 0};
let a = {v: new Array(100005).fill(0)};
main();
