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
  _M_put(__k, __v, __s, __n) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd)));
    this._M_width = 0;
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
class std_pair_long_long_long_long {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_long_long_long_long(...$a);
  }
  __init_std_pair_long_long_long_long(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_long_long_long_long)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_long_long_long_long)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = 0n;
      this.second = 0n;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($a[0]).a[($a[0]).i];
      this.second = ($a[1]).a[($a[1]).i];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_assign(__p) {
    this.first = (__p.a[__p.i]).first;
    this.second = (__p.a[__p.i]).second;
    return {a: [this], i: 0};
  }
  op_assign__rv(__p) {
    let $t0, $t1;
    this.first = ($t0 = std_forward_long_long({a: __p.a[__p.i], i: "first"}), $t0.a[$t0.i]);
    this.second = ($t1 = std_forward_long_long({a: __p.a[__p.i], i: "second"}), $t1.a[$t1.i]);
    return {a: [this], i: 0};
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
class std_remove_cv_long_long_R {
  __init_std_remove_cv_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_long_long_R {
  __init_std_remove_volatile_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_long_long_R {
  __init_std_remove_const_long_long_R(...$a) { }
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
class std_is_void_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_long_long_R(...$a);
  }
  __init_std_is_void_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_long_long_R(...$a);
  }
  __init_std_is_void_helper_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_long_long(...$a);
  }
  __init_std_is_function_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_long_long(...$a);
  }
  __init_std_is_array_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_long_long_std_is_array_long_long extends std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_long_long_std_is_array_long_long(...$a);
  }
  __init_std_or_std_is_function_long_long_std_is_array_long_long(...$a) {
  }
  __dtor() {
    std_is_array_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_long_long_R_std_is_function_long_long_std_is_array_long_long extends std_or_std_is_function_long_long_std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_R_std_is_function_long_long_std_is_array_long_long(...$a);
  }
  __init_std_or_std_is_void_long_long_R_std_is_function_long_long_std_is_array_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_long_long_std_is_array_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_long_long_std_is_array_long_long {
  __init_std_conditional_value0_std_is_function_long_long_std_is_array_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_long_long_R_std_or_std_is_function_long_long_std_is_array_long_long {
  __init_std_conditional_value0_std_is_void_long_long_R_std_or_std_is_function_long_long_std_is_array_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_long_long_R_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_long_long_R_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
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
class std_is_convertible_long_long_R_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_long_long_R_long_long(...$a);
  }
  __init_std_is_convertible_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_long_long_R(...$a);
  }
  __init_std_is_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_long_long_R(...$a);
  }
  __init_std_is_lvalue_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_long_long_R(...$a);
  }
  __init_std_is_rvalue_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long_R extends std_is_lvalue_reference_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long_R {
  __init_std_conditional_value1_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_long_long_R(...$a);
  }
  __init_std_not_std_is_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_long_long_R(...$a);
  }
  __init_std_not_std_is_void_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_long_long_R_std_not_std_is_void_long_long_R extends std_not_std_is_reference_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_long_long_R_std_not_std_is_void_long_long_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_long_long_R_std_not_std_is_void_long_long_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_long_long_R_std_not_std_is_reference_long_long_R {
  __init_std_conditional_value0_std_not_std_is_void_long_long_R_std_not_std_is_reference_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_long_long_R_value0 {
  __init_std_add_rvalue_reference_helper_long_long_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_long_long_R extends std_add_rvalue_reference_helper_long_long_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_long_long_R(...$a);
  }
  __init_std_add_rvalue_reference_long_long_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_long_long_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_long_long_R_long_long_std_is_convertible_long_long_R_long_long extends std_is_convertible_long_long_R_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_long_long_R_long_long_std_is_convertible_long_long_R_long_long(...$a);
  }
  __init_std_and_std_is_convertible_long_long_R_long_long_std_is_convertible_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_long_long_R_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_long_long_R_long_long_std_is_convertible_long_long_R_long_long {
  __init_std_conditional_value1_std_is_convertible_long_long_R_long_long_std_is_convertible_long_long_R_long_long(...$a) { }
  __dtor() {
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_long_long_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_long_long_long_long(...$a);
  }
  __init_std_is_convertible_long_long_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_long_long(...$a);
  }
  __init_std_is_void_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_long_long {
  __init_std_remove_cv_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_long_long {
  __init_std_remove_volatile_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_const_long_long {
  __init_std_remove_const_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_long_long(...$a);
  }
  __init_std_is_void_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_long_long_std_is_function_long_long_std_is_array_long_long extends std_or_std_is_function_long_long_std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_std_is_function_long_long_std_is_array_long_long(...$a);
  }
  __init_std_or_std_is_void_long_long_std_is_function_long_long_std_is_array_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_long_long_std_is_array_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_long_long_std_or_std_is_function_long_long_std_is_array_long_long {
  __init_std_conditional_value0_std_is_void_long_long_std_or_std_is_function_long_long_std_is_array_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_long_long_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_long_long_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_long_long_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_long_long(...$a);
  }
  __init_std_is_reference_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_long_long(...$a);
  }
  __init_std_is_lvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_long_long(...$a);
  }
  __init_std_is_rvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_long_long_std_is_rvalue_reference_long_long extends std_is_rvalue_reference_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_long_long_std_is_rvalue_reference_long_long(...$a);
  }
  __init_std_or_std_is_lvalue_reference_long_long_std_is_rvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_long_long_std_is_rvalue_reference_long_long {
  __init_std_conditional_value0_std_is_lvalue_reference_long_long_std_is_rvalue_reference_long_long(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_long_long(...$a);
  }
  __init_std_not_std_is_reference_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_long_long(...$a);
  }
  __init_std_not_std_is_void_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_long_long_std_not_std_is_void_long_long extends std_not_std_is_void_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_long_long_std_not_std_is_void_long_long(...$a);
  }
  __init_std_and_std_not_std_is_reference_long_long_std_not_std_is_void_long_long(...$a) {
  }
  __dtor() {
    std_not_std_is_void_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_long_long_std_not_std_is_reference_long_long {
  __init_std_conditional_value1_std_not_std_is_void_long_long_std_not_std_is_reference_long_long(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_long_long_value1 {
  __init_std_add_rvalue_reference_helper_long_long_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_long_long extends std_add_rvalue_reference_helper_long_long_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_long_long(...$a);
  }
  __init_std_add_rvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_long_long_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_long_long_long_long_std_is_convertible_long_long_long_long extends std_is_convertible_long_long_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_long_long_long_long_std_is_convertible_long_long_long_long(...$a);
  }
  __init_std_and_std_is_convertible_long_long_long_long_std_is_convertible_long_long_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_long_long_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_long_long_long_long_std_is_convertible_long_long_long_long {
  __init_std_conditional_value1_std_is_convertible_long_long_long_long_std_is_convertible_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_complex_std_pair_long_long_long_long_P {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_std_pair_long_long_long_long_P(...$a);
  }
  __init_std_complex_std_pair_long_long_long_long_P(...$a) {
    this._M_real = null;
    this._M_imag = null;
  }
  __dtor() {
  }
}
class std_is_integer_long_long {
  __init_std_is_integer_long_long(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value1_double {
  __init_gnu_cxx_enable_if_value1_double(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_long_long_R {
  constructor(...$a) {
    this.__init_std_declval_protector_long_long_R(...$a);
  }
  __init_std_declval_protector_long_long_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_long_long {
  constructor(...$a) {
    this.__init_std_declval_protector_long_long(...$a);
  }
  __init_std_declval_protector_long_long(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_long_long {
  __init_std_remove_reference_long_long(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_std_pair_long_long_long_long_P {
  __init_std_iterator_traits_std_pair_long_long_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_pair_long_long_long_long {
  __init_std_remove_reference_std_pair_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_move_iterator_std_pair_long_long_long_long_P {
  __init_std_is_move_iterator_std_pair_long_long_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_std_pair_long_long_long_long_P_value0 {
  __init_std_Iter_base_std_pair_long_long_long_long_P_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return (__it ? {a: __it.a, i: __it.i} : null);
  }
}
class std_Miter_base_std_pair_long_long_long_long_P extends std_Iter_base_std_pair_long_long_long_long_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_std_pair_long_long_long_long_P(...$a);
  }
  __init_std_Miter_base_std_pair_long_long_long_long_P(...$a) {
  }
  __dtor() {
    std_Iter_base_std_pair_long_long_long_long_P_value0.prototype.__dtor.call(this);
  }
}
class std_Niter_base_std_pair_long_long_long_long_P extends std_Iter_base_std_pair_long_long_long_long_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_std_pair_long_long_long_long_P(...$a);
  }
  __init_std_Niter_base_std_pair_long_long_long_long_P(...$a) {
  }
  __dtor() {
    std_Iter_base_std_pair_long_long_long_long_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_std_pair_long_long_long_long_P {
  __init_std_is_normal_iterator_std_pair_long_long_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_is_pointer_std_pair_long_long_long_long_P {
  __init_std_is_pointer_std_pair_long_long_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_are_same_std_pair_long_long_long_long_std_pair_long_long_long_long {
  __init_std_are_same_std_pair_long_long_long_long_std_pair_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_copy_move_backward_value1_value0_std_random_access_iterator_tag {
  __init_std_copy_move_backward_value1_value0_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
  static __copy_move_b__std_copy_move_backward_value1_value0_std_random_access_iterator_tag_copy_move_b_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(__first, __last, __result) {
    let $t2;
    let __n = 0;
    __n = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    for (; (__n > 0); (__n = ((__n - 1) | 0))) {
      (($t2 = __result.a[--__result.i], $t2)).op_assign__rv(std_move_std_pair_long_long_long_long((--__last.i, {a: __last.a, i: __last.i})));
    }
    return (__result ? {a: __result.a, i: __result.i} : null);
  }
}
function std_abs__long_long(__x) {
  return ((v) => BigInt.asIntN(64, v < 0n ? -v : v))(__x);
}
function memcpy(dst, src, n) {
  let $t3;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  for (let i = ((0) >>> 0); (i < n); ($t3 = i, i = (($t3 + 1) >>> 0), $t3)) {
    d.a[d.i + (i)] = s.a[s.i + (i)];
  }
  return dst;
}
function std_lg__long(__n) {
  return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(__os, __n) {
  (__os.a[__os.i])._M_putll(3, __n);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(__os, __s) {
  (__os.a[__os.i])._M_put(7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
  return __os;
}
function std_operator__std_basic_istream_char_std_char_traits_char_R_intR(__in, __v) {
  __v.a[__v.i] = Number(BigInt.asIntN(32, (__in.a[__in.i])._M_read_int()));
  return __in;
}
function std_operator__std_basic_istream_char_std_char_traits_char_R_long_longR(__in, __v) {
  __v.a[__v.i] = (__in.a[__in.i])._M_read_int();
  return __in;
}
function std_swap_long_long(__a, __b) {
  let $t4, $t5, $t6;
  let __tmp = {v: ($t4 = std_move_long_long(__a), $t4.a[$t4.i])};
  __a.a[__a.i] = ($t5 = std_move_long_long(__b), $t5.a[$t5.i]);
  __b.a[__b.i] = ($t6 = std_move_long_long({a: __tmp, i: "v"}), $t6.a[$t6.i]);
}
function std_swap_std_pair_long_long_long_long(__a, __b) {
  let __tmp = {v: new std_pair_long_long_long_long(std_move_std_pair_long_long_long_long(__a))};
  (__a.a[__a.i]).op_assign__rv(std_move_std_pair_long_long_long_long(__b));
  (__b.a[__b.i]).op_assign__rv(std_move_std_pair_long_long_long_long({a: __tmp, i: "v"}));
}
function cmp(x, y) {
  return (BigInt.asIntN(64, (x.first) * (y.second)) < BigInt.asIntN(64, (y.first) * (x.second)));
}
function calc() {
  let $t7, $t8, $t9, $t10, $t11, $t12, $t13, $t14;
  let hl = 0;
  let sm = 0n;
  for (let i = 1; (i <= n.v); ($t7 = i, i = (($t7 + 1) | 0), $t7)) {
    if (b.v[i]) {
       {
        let x = a.v[i];
        let y = b.v[i];
        if ((y < 0n)) {
          (x = BigInt.asIntN(64, -(x)), y = BigInt.asIntN(64, -(y)));
        }
        ((($t8 = h[(hl = ((hl + 1) | 0))], $t8)).op_assign({a: [new std_pair_long_long_long_long({a: [x], i: 0}, {a: [y], i: 0})], i: 0}), sm = BigInt.asIntN(64, (sm) + (y)));
      }
    }
  }
  std_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(($t9 = ({a: (({a: h, i: 0}) ? (({a: h, i: 0})).a : null), i: (({a: h, i: 0}) ? (({a: h, i: 0})).i : 0) + (1)}), $t9 ? {a: $t9.a, i: $t9.i} : null), ($t12 = ($t11 = ($t10 = ({a: (({a: h, i: 0}) ? (({a: h, i: 0})).a : null), i: (({a: h, i: 0}) ? (({a: h, i: 0})).i : 0) + (hl)}), $t10), ({a: ($t11 ? $t11.a : null), i: ($t11 ? $t11.i : 0) + (1)})), $t12 ? {a: $t12.a, i: $t12.i} : null), cmp);
  let x = 0n;
  let y = 1n;
  let s = 0n;
  for (let i = 1; (i <= hl); ($t13 = i, i = (($t13 + 1) | 0), $t13)) {
     {
      s = BigInt.asIntN(64, (s) + ((h[i]).second));
      if ((BigInt.asIntN(64, (s) * (2n)) >= sm)) {
         {
          (x = (h[i]).first, y = (h[i]).second);
          break;
        }
      }
    }
  }
  if ((x < BigInt.asIntN(64, -(y)))) {
    (x = BigInt(((-(1)) | 0)), y = 1n);
  }
  if ((x > y)) {
    (x = 1n, y = 1n);
  }
  let ans = 0n;
  for (let i = 1; (i <= n.v); ($t14 = i, i = (($t14 + 1) | 0), $t14)) {
    ans = BigInt.asIntN(64, (ans) + (std_abs__long_long(BigInt.asIntN(64, (BigInt.asIntN(64, (a.v[i]) * (y))) - (BigInt.asIntN(64, (b.v[i]) * (x)))))));
  }
  let g = std_gcd_long_long(ans, y);
  return new std_pair_long_long_long_long({a: [BigInt.asIntN(64, (ans) / (g))], i: 0}, {a: [BigInt.asIntN(64, (y) / (g))], i: 0});
}
function main() {
  let $t15, $t16, $t17;
  ((std_ios_base.sync_with_stdio(0), std_cin.v.tie(null)), std_cout.v.tie(null));
  std_operator__std_basic_istream_char_std_char_traits_char_R_intR({a: std_cin, i: "v"}, {a: n, i: "v"});
  for (let i = 1; (i <= n.v); ($t15 = i, i = (($t15 + 1) | 0), $t15)) {
    std_operator__std_basic_istream_char_std_char_traits_char_R_long_longR({a: std_cin, i: "v"}, {a: a.v, i: (i)});
  }
  for (let i = 1; (i <= n.v); ($t16 = i, i = (($t16 + 1) | 0), $t16)) {
    std_operator__std_basic_istream_char_std_char_traits_char_R_long_longR({a: std_cin, i: "v"}, {a: b.v, i: (i)});
  }
  let x = calc();
  for (let i = 1; (i <= n.v); ($t17 = i, i = (($t17 + 1) | 0), $t17)) {
    std_swap_long_long({a: a.v, i: (i)}, {a: b.v, i: (i)});
  }
  let y = calc();
  if ((BigInt.asIntN(64, (x.first) * (y.second)) > BigInt.asIntN(64, (y.first) * (x.second)))) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, y.first), {a: [32, 0], i: 0}), y.second);
  }
  else {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, x.first), {a: [32, 0], i: 0}), x.second);
  }
  return 0;
}
function std_declval_long_long_R() {
  return std_declval_protector_long_long_R.__delegate();
}
function std_declval_long_long() {
  return std_declval_protector_long_long.__delegate();
}
function std_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_1_std_pair_long_long_long_long_P_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0), __comp);
      std_final_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
}
function std_gcd_long_long(__m, __n) {
  while ((__n !== 0n)) {
     {
      let __t = BigInt.asIntN(64, (__m) % (__n));
      __m = __n;
      __n = __t;
    }
  }
  return __m;
}
function std_move_long_long(__t) {
  return __t;
}
function std_move_std_pair_long_long_long_long(__t) {
  return __t;
}
function std_introsort_loop_1_std_pair_long_long_long_long_P_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __depth_limit, __comp) {
  let $t18;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = ($t18 = std_unguarded_partition_pivot_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp), $t18 ? {a: $t18.a, i: $t18.i} : null);
      std_introsort_loop_1_std_pair_long_long_long_long_P_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit, __comp);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
    }
  }
}
function std_final_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  let $t19, $t20;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      std_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), ($t19 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t19 ? {a: $t19.a, i: $t19.i} : null), __comp);
      std_unguarded_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(($t20 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t20 ? {a: $t20.a, i: $t20.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
  else {
    std_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  }
}
function std_partial_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __middle, __last, __comp) {
  std_heap_select_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  std_sort_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
}
function std_unguarded_partition_pivot_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  let $t21, $t22, $t23, $t24;
  let __mid = ($t21 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t21 ? {a: $t21.a, i: $t21.i} : null);
  std_move_median_first_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t22 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t22 ? {a: $t22.a, i: $t22.i} : null), __comp);
  return ($t24 = std_unguarded_partition_1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(($t23 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t23 ? {a: $t23.a, i: $t23.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first, __comp), $t24 ? {a: $t24.a, i: $t24.i} : null);
}
function std_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  let $t25, $t26;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t25 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t25 ? {a: $t25.a, i: $t25.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if (__comp(new std_pair_long_long_long_long(__i), new std_pair_long_long_long_long(__first))) {
         {
          let __val = {v: new std_pair_long_long_long_long(std_move_std_pair_long_long_long_long(__i))};
          std_move_backward_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t26 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t26 ? {a: $t26.a, i: $t26.i} : null));
          (__first.a[__first.i]).op_assign__rv(std_move_std_pair_long_long_long_long({a: __val, i: "v"}));
        }
      }
      else {
        std_unguarded_linear_insert_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__i ? {a: __i.a, i: __i.i} : null), __comp);
      }
    }
  }
}
function std_unguarded_insertion_sort_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__i ? {a: __i.a, i: __i.i} : null), __comp);
  }
}
function std_heap_select_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __middle, __last, __comp) {
  std_make_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
  for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
    if (__comp(new std_pair_long_long_long_long(__i), new std_pair_long_long_long_long(__first))) {
      std_pop_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null), __comp);
    }
  }
}
function std_sort_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
}
function std_move_median_first_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__a, __b, __c, __comp) {
  if (__comp(new std_pair_long_long_long_long(__a), new std_pair_long_long_long_long(__b))) {
     {
      if (__comp(new std_pair_long_long_long_long(__b), new std_pair_long_long_long_long(__c))) {
        std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
      else {
        if (__comp(new std_pair_long_long_long_long(__a), new std_pair_long_long_long_long(__c))) {
          std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
        }
      }
    }
  }
  else {
    if (__comp(new std_pair_long_long_long_long(__a), new std_pair_long_long_long_long(__c))) {
      return;
    }
    else {
      if (__comp(new std_pair_long_long_long_long(__b), new std_pair_long_long_long_long(__c))) {
        std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
      }
      else {
        std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
    }
  }
}
function std_unguarded_partition_1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp(new std_pair_long_long_long_long(__first), __pivot.a[__pivot.i])) {
        ++__first.i;
      }
      --__last.i;
      while (__comp(__pivot.a[__pivot.i], new std_pair_long_long_long_long(__last))) {
        --__last.i;
      }
      if ((!(((__first ? __first.i : 0) < (__last ? __last.i : 0))))) {
        return (__first ? {a: __first.a, i: __first.i} : null);
      }
      std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
      ++__first.i;
    }
  }
}
function std_move_backward_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(__first, __last, __result) {
  let $t27, $t28, $t29;
  return ($t29 = std_copy_move_backward_a2_value1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(($t27 = std_miter_base_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null)), $t27 ? {a: $t27.a, i: $t27.i} : null), ($t28 = std_miter_base_std_pair_long_long_long_long_P((__last ? {a: __last.a, i: __last.i} : null)), $t28 ? {a: $t28.a, i: $t28.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t29 ? {a: $t29.a, i: $t29.i} : null);
}
function std_unguarded_linear_insert_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__last, __comp) {
  let __val = {v: new std_pair_long_long_long_long(std_move_std_pair_long_long_long_long(__last))};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while (__comp(new std_pair_long_long_long_long({a: __val, i: "v"}), new std_pair_long_long_long_long(__next))) {
     {
      (__last.a[__last.i]).op_assign__rv(std_move_std_pair_long_long_long_long(__next));
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  (__last.a[__last.i]).op_assign__rv(std_move_std_pair_long_long_long_long({a: __val, i: "v"}));
}
function std_make_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __comp) {
  let $t30, $t31;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: new std_pair_long_long_long_long(std_move_std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})))};
      std_adjust_heap_1_std_pair_long_long_long_long_P_long_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t30 = std_move_std_pair_long_long_long_long({a: __value, i: "v"}), $t30.a[$t30.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t31 = __parent, __parent = (($t31 - 1) | 0), $t31);
    }
  }
}
function std_pop_heap_1_std_pair_long_long_long_long_P_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __last, __result, __comp) {
  let $t32;
  let __value = {v: new std_pair_long_long_long_long(std_move_std_pair_long_long_long_long(__result))};
  (__result.a[__result.i]).op_assign__rv(std_move_std_pair_long_long_long_long(__first));
  std_adjust_heap_1_std_pair_long_long_long_long_P_long_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t32 = std_move_std_pair_long_long_long_long({a: __value, i: "v"}), $t32.a[$t32.i]), __comp);
}
function std_iter_swap_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(__a, __b) {
  std_swap_std_pair_long_long_long_long(__a, __b);
}
function std_miter_base_std_pair_long_long_long_long_P(__it) {
  let $t33;
  return ($t33 = std_Iter_base_std_pair_long_long_long_long_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t33 ? {a: $t33.a, i: $t33.i} : null);
}
function std_copy_move_backward_a2_value1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(__first, __last, __result) {
  let $t34, $t35, $t36, $t37;
  return ($t37 = std_copy_move_backward_a_value1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(($t34 = std_niter_base_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null)), $t34 ? {a: $t34.a, i: $t34.i} : null), ($t35 = std_niter_base_std_pair_long_long_long_long_P((__last ? {a: __last.a, i: __last.i} : null)), $t35 ? {a: $t35.a, i: $t35.i} : null), ($t36 = std_niter_base_std_pair_long_long_long_long_P((__result ? {a: __result.a, i: __result.i} : null)), $t36 ? {a: $t36.a, i: $t36.i} : null)), $t37 ? {a: $t37.a, i: $t37.i} : null);
}
function std_forward_long_long(__t) {
  return __t;
}
function std_adjust_heap_1_std_pair_long_long_long_long_P_long_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __holeIndex, __len, __value, __comp) {
  let $t38, $t39, $t40, $t41, $t42, $t43;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp(new std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), new std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})))) {
        ($t38 = __secondChild, __secondChild = (($t38 - 1) | 0), $t38);
      }
      (($t40 = ($t39 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t39.a[$t39.i]), $t40)).op_assign__rv(std_move_std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t42 = ($t41 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t41.a[$t41.i]), $t42)).op_assign__rv(std_move_std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_std_pair_long_long_long_long_P_long_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t43 = std_move_std_pair_long_long_long_long({a: __value, i: "v"}), $t43.a[$t43.i]), __comp);
}
function std_niter_base_std_pair_long_long_long_long_P(__it) {
  let $t44;
  return ($t44 = std_Iter_base_std_pair_long_long_long_long_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t44 ? {a: $t44.a, i: $t44.i} : null);
}
function std_copy_move_backward_a_value1_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P(__first, __last, __result) {
  let $t45;
  let __simple = (((0 && 1) && 1) && 1);
  return ($t45 = std_copy_move_backward_value1_value0_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value0_std_random_access_iterator_tag_copy_move_b_std_pair_long_long_long_long_P_std_pair_long_long_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t45 ? {a: $t45.a, i: $t45.i} : null);
}
function std_push_heap_1_std_pair_long_long_long_long_P_long_std_pair_long_long_long_long_func_bool_std_pair_long_long_long_long_std_pair_long_long_long_long_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t46, $t47, $t48, $t49;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp(new std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), new std_pair_long_long_long_long({a: __value, i: "v"})))) {
     {
      (($t47 = ($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t46.a[$t46.i]), $t47)).op_assign__rv(std_move_std_pair_long_long_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t49 = ($t48 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t48.a[$t48.i]), $t49)).op_assign__rv(std_move_std_pair_long_long_long_long({a: __value, i: "v"}));
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
let n = {v: 0};
let a = {v: new Array(200005).fill(0n)};
let b = {v: new Array(200005).fill(0n)};
let h = Array.from({length: 200005}, () => new std_pair_long_long_long_long());
main();
