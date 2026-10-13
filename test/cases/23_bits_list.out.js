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
class std_detail_List_node_base {
  _M_next;
  _M_prev;
  constructor(...$a) {
    this.__init_std_detail_List_node_base(...$a);
  }
  __init_std_detail_List_node_base(...$a) {
    this._M_next = null;
    this._M_prev = null;
  }
  __dtor() {
  }
  static swap(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});const $x = $a[0].a[$a[0].i], $y = $a[1].a[$a[1].i];if ($x === $y) return;const $xa = $ad($x), $ya = $ad($y);const $xe = $x._M_next && $x._M_next.a === $xa.a && $x._M_next.i === $xa.i;const $ye = $y._M_next && $y._M_next.a === $ya.a && $y._M_next.i === $ya.i;if (!$xe && !$ye) {let $t = $x._M_next; $x._M_next = $y._M_next; $y._M_next = $t;$t = $x._M_prev; $x._M_prev = $y._M_prev; $y._M_prev = $t;$x._M_next.a[$x._M_next.i]._M_prev = $xa; $x._M_prev.a[$x._M_prev.i]._M_next = $xa;$y._M_next.a[$y._M_next.i]._M_prev = $ya; $y._M_prev.a[$y._M_prev.i]._M_next = $ya;} else if (!$xe) {$y._M_next = $x._M_next; $y._M_prev = $x._M_prev;$y._M_next.a[$y._M_next.i]._M_prev = $ya; $y._M_prev.a[$y._M_prev.i]._M_next = $ya;$x._M_next = $xa; $x._M_prev = $xa;} else if (!$ye) {$x._M_next = $y._M_next; $x._M_prev = $y._M_prev;$x._M_next.a[$x._M_next.i]._M_prev = $xa; $x._M_prev.a[$x._M_prev.i]._M_next = $xa;$y._M_next = $ya; $y._M_prev = $ya;} }
  _M_transfer(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});if ($a[1].a[$a[1].i] === this) return;const $me = $ad(this), $fp = $a[0], $lp = $a[1];$lp.a[$lp.i]._M_prev.a[$lp.a[$lp.i]._M_prev.i]._M_next = $me;$fp.a[$fp.i]._M_prev.a[$fp.a[$fp.i]._M_prev.i]._M_next = $lp;this._M_prev.a[this._M_prev.i]._M_next = $fp;const $tmp = this._M_prev;this._M_prev = $lp.a[$lp.i]._M_prev;$lp.a[$lp.i]._M_prev = $fp.a[$fp.i]._M_prev;$fp.a[$fp.i]._M_prev = $tmp; }
  _M_reverse(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});let $p = $ad(this);do {const $t = $p.a[$p.i]._M_next;$p.a[$p.i]._M_next = $p.a[$p.i]._M_prev;$p.a[$p.i]._M_prev = $t;$p = $p.a[$p.i]._M_prev;} while ($p.a[$p.i] !== this); }
  _M_hook(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});const $me = $ad(this), $pos = $a[0].a[$a[0].i], $prev = $pos._M_prev;this._M_next = $a[0];this._M_prev = $prev;$prev.a[$prev.i]._M_next = $me;$pos._M_prev = $me; }
  _M_unhook(...$a) { const $next = this._M_next, $prev = this._M_prev;$prev.a[$prev.i]._M_next = $next;$next.a[$next.i]._M_prev = $prev; }
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
  _M_put(__k, __v, __s, __n) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd)));
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
class std_List_node_int extends std_detail_List_node_base {
  _M_data;
  constructor(...$a) {
    super(...[]);
    this.__init_std_List_node_int(...$a);
  }
  __init_std_List_node_int(...$a) {
    let $t0;
    this._M_data = ($t0 = std_forward_1_int($a[0]), $t0.a[$t0.i]);
  }
  __dtor() {
    std_detail_List_node_base.prototype.__dtor.call(this);
  }
}
class std_allocator_int_rebind_std_List_node_int {
  __init_std_allocator_int_rebind_std_List_node_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_List_node_int {
  __init_gnu_cxx_new_allocator_std_List_node_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t1;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t1 = operatornew__unsigned_long(((Math.imul(__n, 12)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (12))) >>> 0);
  }
  destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int(__p) {
    (__p.a[__p.i]).__dtor();
  }
  construct__gnu_cxx_new_allocator_std_List_node_int_construct_std_List_node_int_int__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_List_node_int(std_forward_1_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_List_node_int extends gnu_cxx_new_allocator_std_List_node_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_List_node_int(...$a);
  }
  __init_std_allocator_std_List_node_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int_List_impl extends std_allocator_std_List_node_int {
  _M_node;
  constructor(...$a) {
    super(...[]);
    this.__init_std_List_base_int_std_allocator_int_List_impl(...$a);
  }
  __init_std_List_base_int_std_allocator_int_List_impl(...$a) {
    this._M_node = new std_detail_List_node_base();
    this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
  }
  __dtor() {
    std_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_List_base_int_std_allocator_int(...$a);
  }
  __init_std_List_base_int_std_allocator_int(...$a) {
    this._M_impl = new std_List_base_int_std_allocator_int_List_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    this._M_init();
  }
  __dtor() {
  }
  _M_get_node() {
    let $t2;
    return ($t2 = gnu_cxx_new_allocator_std_List_node_int.prototype.allocate.call(this._M_impl, ((1) >>> 0), {a: [0], i: 0}), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_List_node_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_clear() {
    let $t3;
    let __cur = (this._M_impl._M_node._M_next ? {a: this._M_impl._M_node._M_next.a, i: this._M_impl._M_node._M_next.i} : null);
    while ((!(__cur === ({a: this._M_impl, i: "_M_node"}) || (__cur && ({a: this._M_impl, i: "_M_node"}) && __cur.a === ({a: this._M_impl, i: "_M_node"}).a && __cur.i === ({a: this._M_impl, i: "_M_node"}).i)))) {
       {
        let __tmp = (__cur ? {a: __cur.a, i: __cur.i} : null);
        __cur = (((__cur.a[__cur.i])._M_next) ? {a: ((__cur.a[__cur.i])._M_next).a, i: ((__cur.a[__cur.i])._M_next).i} : null);
        (($t3 = this._M_get_Node_allocator(), $t3.a[$t3.i])).destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
        this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
  }
  _M_init() {
    this._M_impl._M_node._M_next = (({a: this._M_impl, i: "_M_node"}) ? {a: ({a: this._M_impl, i: "_M_node"}).a, i: ({a: this._M_impl, i: "_M_node"}).i} : null);
    this._M_impl._M_node._M_prev = (({a: this._M_impl, i: "_M_node"}) ? {a: ({a: this._M_impl, i: "_M_node"}).a, i: ({a: this._M_impl, i: "_M_node"}).i} : null);
  }
}
class std_list_int_std_allocator_int extends std_List_base_int_std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_list_int_std_allocator_int(...$a);
  }
  __init_std_list_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_List_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new std_List_iterator_int((this._M_impl._M_node._M_next ? {a: this._M_impl._M_node._M_next.a, i: this._M_impl._M_node._M_next.i} : null));
  }
  end() {
    return new std_List_iterator_int((({a: this._M_impl, i: "_M_node"}) ? {a: ({a: this._M_impl, i: "_M_node"}).a, i: ({a: this._M_impl, i: "_M_node"}).i} : null));
  }
  empty__c() {
    return (this._M_impl._M_node._M_next === ({a: this._M_impl, i: "_M_node"}) || (this._M_impl._M_node._M_next && ({a: this._M_impl, i: "_M_node"}) && this._M_impl._M_node._M_next.a === ({a: this._M_impl, i: "_M_node"}).a && this._M_impl._M_node._M_next.i === ({a: this._M_impl, i: "_M_node"}).i));
  }
  size__c() {
    return ((std_distance_std_List_iterator_int(this.begin(), this.end())) >>> 0);
  }
  front() {
    let $t4;
    return (($t4 = this.begin(), $t4)).op_mul__c();
  }
  back() {
    let __tmp = this.end();
    __tmp.op_dec();
    return __tmp.op_mul__c();
  }
  push_front(__x) {
    this._M_insert__std_list_int_std_allocator_int_M_insert_int__rv(this.begin(), __x);
  }
  pop_front() {
    this._M_erase(this.begin());
  }
  push_back(__x) {
    this._M_insert__std_list_int_std_allocator_int_M_insert_int__rv(this.end(), __x);
  }
  swap(__x) {
    std_detail_List_node_base.swap({a: this._M_impl, i: "_M_node"}, {a: (__x.a[__x.i])._M_impl, i: "_M_node"});
    std_alloc_swap_std_allocator_std_List_node_int_value1._S_do_it(this._M_get_Node_allocator(), (__x.a[__x.i])._M_get_Node_allocator());
  }
  clear() {
    std_List_base_int_std_allocator_int.prototype._M_clear.call(this);
    std_List_base_int_std_allocator_int.prototype._M_init.call(this);
  }
  splice__rv(...$a) {
    let $t5;
    if ($a.length >= 2 && $a.length <= 2 && $a[0] instanceof std_List_iterator_int && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_list_int_std_allocator_int)) {
      if ((!((($a[1]).a[($a[1]).i]).empty__c()))) {
         {
          this._M_check_equal_allocators($a[1]);
          this._M_transfer(new std_List_iterator_int({a: [$a[0]], i: 0}), (($a[1]).a[($a[1]).i]).begin(), (($a[1]).a[($a[1]).i]).end());
        }
      }
    }
    else if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_List_iterator_int && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_list_int_std_allocator_int) && $a[2] instanceof std_List_iterator_int) {
      let __j = new std_List_iterator_int({a: [$a[2]], i: 0});
      __j.op_inc();
      if ((($a[0]).op_eq__c({a: [$a[2]], i: 0}) || ($a[0]).op_eq__c({a: [__j], i: 0}))) {
        return;
      }
      if (($t5 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t5 === ($a[1]) || ($t5 && ($a[1]) && $t5.a === ($a[1]).a && $t5.i === ($a[1]).i))))) {
        this._M_check_equal_allocators($a[1]);
      }
      this._M_transfer(new std_List_iterator_int({a: [$a[0]], i: 0}), new std_List_iterator_int({a: [$a[2]], i: 0}), new std_List_iterator_int({a: [__j], i: 0}));
    }
    else { throw new Error("no matching overload"); }
  }
  splice(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && $a[0] instanceof std_List_iterator_int && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_list_int_std_allocator_int)) {
      this.splice__rv(new std_List_iterator_int({a: [$a[0]], i: 0}), std_move_std_list_int_std_allocator_int($a[1]));
    }
    else if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_List_iterator_int && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_list_int_std_allocator_int) && $a[2] instanceof std_List_iterator_int) {
      this.splice__rv(new std_List_iterator_int({a: [$a[0]], i: 0}), std_move_std_list_int_std_allocator_int($a[1]), new std_List_iterator_int({a: [$a[2]], i: 0}));
    }
    else { throw new Error("no matching overload"); }
  }
  remove(__value) {
    let $t6, $t7, $t8, $t9;
    let __first = this.begin();
    let __last = this.end();
    let __extra = new std_List_iterator_int({a: [__last], i: 0});
    while (__first.op_ne__c({a: [__last], i: 0})) {
       {
        let __next = new std_List_iterator_int({a: [__first], i: 0});
        __next.op_inc();
        if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] === __value.a[__value.i])) {
           {
            if (($t8 = ($t6 = std_addressof_int(__first.op_mul__c()), $t6), $t9 = ($t7 = std_addressof_int(__value), $t7), (!($t8 === $t9 || ($t8 && $t9 && $t8.a === $t9.a && $t8.i === $t9.i))))) {
              this._M_erase(new std_List_iterator_int({a: [__first], i: 0}));
            }
            else {
              __extra.op_assign({a: [__first], i: 0});
            }
          }
        }
        __first.op_assign({a: [__next], i: 0});
      }
    }
    if (__extra.op_ne__c({a: [__last], i: 0})) {
      this._M_erase(new std_List_iterator_int({a: [__extra], i: 0}));
    }
  }
  merge__rv(__x) {
    let $t10, $t11;
    if (($t10 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t10 === __x || ($t10 && __x && $t10.a === __x.a && $t10.i === __x.i))))) {
       {
        this._M_check_equal_allocators(__x);
        let __first1 = this.begin();
        let __last1 = this.end();
        let __first2 = (__x.a[__x.i]).begin();
        let __last2 = (__x.a[__x.i]).end();
        while ((__first1.op_ne__c({a: [__last1], i: 0}) && __first2.op_ne__c({a: [__last2], i: 0}))) {
          if (((__first2.op_mul__c()).a[(__first2.op_mul__c()).i] < (__first1.op_mul__c()).a[(__first1.op_mul__c()).i])) {
             {
              let __next = new std_List_iterator_int({a: [__first2], i: 0});
              this._M_transfer(new std_List_iterator_int({a: [__first1], i: 0}), new std_List_iterator_int({a: [__first2], i: 0}), ($t11 = __next.op_inc(), $t11.a[$t11.i]));
              __first2.op_assign({a: [__next], i: 0});
            }
          }
          else {
            __first1.op_inc();
          }
        }
        if (__first2.op_ne__c({a: [__last2], i: 0})) {
          this._M_transfer(new std_List_iterator_int({a: [__last1], i: 0}), new std_List_iterator_int({a: [__first2], i: 0}), new std_List_iterator_int({a: [__last2], i: 0}));
        }
      }
    }
  }
  merge(__x) {
    this.merge__rv(std_move_std_list_int_std_allocator_int(__x));
  }
  reverse() {
    this._M_impl._M_node._M_reverse();
  }
  sort() {
    if (((!(this._M_impl._M_node._M_next === ({a: this._M_impl, i: "_M_node"}) || (this._M_impl._M_node._M_next && ({a: this._M_impl, i: "_M_node"}) && this._M_impl._M_node._M_next.a === ({a: this._M_impl, i: "_M_node"}).a && this._M_impl._M_node._M_next.i === ({a: this._M_impl, i: "_M_node"}).i))) && (!(((this._M_impl._M_node._M_next.a[this._M_impl._M_node._M_next.i])._M_next) === ({a: this._M_impl, i: "_M_node"}) || (((this._M_impl._M_node._M_next.a[this._M_impl._M_node._M_next.i])._M_next) && ({a: this._M_impl, i: "_M_node"}) && ((this._M_impl._M_node._M_next.a[this._M_impl._M_node._M_next.i])._M_next).a === ({a: this._M_impl, i: "_M_node"}).a && ((this._M_impl._M_node._M_next.a[this._M_impl._M_node._M_next.i])._M_next).i === ({a: this._M_impl, i: "_M_node"}).i))))) {
       {
        let __carry = {v: new std_list_int_std_allocator_int()};
        let __tmp = {v: Array.from({length: 64}, () => new std_list_int_std_allocator_int())};
        let __fill = (({a: __tmp.v, i: (0)}) ? {a: ({a: __tmp.v, i: (0)}).a, i: ({a: __tmp.v, i: (0)}).i} : null);
        let __counter = null;
        do {
           {
            __carry.v.splice(__carry.v.begin(), {a: [this], i: 0}, this.begin());
            __counter = (({a: __tmp.v, i: (0)}) ? {a: ({a: __tmp.v, i: (0)}).a, i: ({a: __tmp.v, i: (0)}).i} : null);
            for (; ((!(__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))) && (!((__counter.a[__counter.i]).empty__c()))); ++__counter.i) {
               {
                (__counter.a[__counter.i]).merge({a: __carry, i: "v"});
                __carry.v.swap(__counter);
              }
            }
            __carry.v.swap(__counter);
            if ((__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))) {
              ++__fill.i;
            }
          }
        } while ((!(this.empty__c())));
        __counter = (({a: __tmp.v, i: (1)}) ? {a: ({a: __tmp.v, i: (1)}).a, i: ({a: __tmp.v, i: (1)}).i} : null);
        for (; (!(__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))); ++__counter.i) {
          (__counter.a[__counter.i]).merge(({a: (__counter ? __counter.a : null), i: (__counter ? __counter.i : 0) - (1)}));
        }
        this.swap(({a: (__fill ? __fill.a : null), i: (__fill ? __fill.i : 0) - (1)}));
      }
    }
  }
  _M_transfer(__position, __first, __last) {
    (__position._M_node.a[__position._M_node.i])._M_transfer((__first._M_node ? {a: __first._M_node.a, i: __first._M_node.i} : null), (__last._M_node ? {a: __last._M_node.a, i: __last._M_node.i} : null));
  }
  _M_erase(__position) {
    let $t12;
    (__position._M_node.a[__position._M_node.i])._M_unhook();
    let __n = (__position._M_node ? {a: __position._M_node.a, i: __position._M_node.i} : null);
    (($t12 = this._M_get_Node_allocator(), $t12.a[$t12.i])).destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int((__n ? {a: __n.a, i: __n.i} : null));
    this._M_put_node((__n ? {a: __n.a, i: __n.i} : null));
  }
  _M_check_equal_allocators(__x) {
    if (std_alloc_neq_std_allocator_std_List_node_int_value1._S_do_it(this._M_get_Node_allocator(), (__x.a[__x.i])._M_get_Node_allocator())) {
      std_throw_runtime_error({a: [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], i: 0});
    }
  }
  _M_insert__std_list_int_std_allocator_int_M_insert_int__rv(__position, __args_0) {
    let $t13;
    let __tmp = ($t13 = this._M_create_node__std_list_int_std_allocator_int_M_create_node_int__rv(std_forward_1_int(__args_0)), $t13 ? {a: $t13.a, i: $t13.i} : null);
    (__tmp.a[__tmp.i])._M_hook((__position._M_node ? {a: __position._M_node.a, i: __position._M_node.i} : null));
  }
  _M_create_node__std_list_int_std_allocator_int_M_create_node_int__rv(__args_0) {
    let $t14, $t15;
    let __p = ($t14 = this._M_get_node(), $t14 ? {a: $t14.a, i: $t14.i} : null);
    if (true) {
       {
        (($t15 = this._M_get_Node_allocator(), $t15.a[$t15.i])).construct__gnu_cxx_new_allocator_std_List_node_int_construct_std_List_node_int_int__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
      }
    }
    if (false) {
       {
        this._M_put_node((__p ? {a: __p.a, i: __p.i} : null));
      }
    }
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
}
class std_initializer_list_int {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_int(...$a);
  }
  __init_std_initializer_list_int(...$a) {
    this._M_array = null;
    this._M_len = 0;
  }
  __dtor() {
  }
}
class std_List_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_int(...$a);
  }
  __init_std_List_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_List_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return {a: this._M_node.a[this._M_node.i], i: "_M_data"};
  }
  op_inc() {
    this._M_node = (((this._M_node.a[this._M_node.i])._M_next) ? {a: ((this._M_node.a[this._M_node.i])._M_next).a, i: ((this._M_node.a[this._M_node.i])._M_next).i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    this._M_node = (((this._M_node.a[this._M_node.i])._M_prev) ? {a: ((this._M_node.a[this._M_node.i])._M_prev).a, i: ((this._M_node.a[this._M_node.i])._M_prev).i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
  }
  op_assign(o) {
    this._M_node = (((o.a[o.i])._M_node) ? {a: ((o.a[o.i])._M_node).a, i: ((o.a[o.i])._M_node).i} : null);
    return {a: [this], i: 0};
  }
}
class std_remove_cv_std_List_iterator_int {
  __init_std_remove_cv_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_List_iterator_int {
  __init_std_remove_volatile_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_List_iterator_int {
  __init_std_remove_const_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_std_List_iterator_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_std_List_iterator_int(...$a);
  }
  __init_std_has_iterator_category_helper_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag {
  __init_std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag(...$a) { }
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
class std_has_iterator_category_std_List_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_std_List_iterator_int(...$a);
  }
  __init_std_has_iterator_category_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_iterator_traits_std_List_iterator_int_value1 {
  __init_std_iterator_traits_std_List_iterator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_std_List_iterator_int extends std_iterator_traits_std_List_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_std_List_iterator_int(...$a);
  }
  __init_std_iterator_traits_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_std_List_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_complex_std_list_int_std_allocator_int_P {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_std_list_int_std_allocator_int_P(...$a);
  }
  __init_std_complex_std_list_int_std_allocator_int_P(...$a) {
    this._M_real = null;
    this._M_imag = null;
  }
  __dtor() {
  }
}
class std_remove_reference_std_list_int_std_allocator_int {
  __init_std_remove_reference_std_list_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_alloc_swap_std_allocator_std_List_node_int_value1 {
  __init_std_alloc_swap_std_allocator_std_List_node_int_value1(...$a) { }
  __dtor() {
  }
  static _S_do_it($p0, $p1) {
  }
}
class std_alloc_neq_std_allocator_std_List_node_int_value1 {
  __init_std_alloc_neq_std_allocator_std_List_node_int_value1(...$a) { }
  __dtor() {
  }
  static _S_do_it($p0, $p1) {
    return false;
  }
}
function memcpy(dst, src, n) {
  let $t16;
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  for (let i = ((0) >>> 0); (i < n); ($t16 = i, i = (($t16 + 1) >>> 0), $t16)) {
    d.a[d.i + (i)] = s.a[s.i + (i)];
  }
  return dst;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_runtime_error(...$a) { throw new Error("unresolved external: std::__throw_runtime_error"); }
function std_operator__std_basic_ostream_char_std_char_traits_char_R_bool(__os, __n) {
  (__os.a[__os.i])._M_put(6, (__n ? ((1) | 0) : ((0) | 0)), null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(__os, __n) {
  (__os.a[__os.i])._M_put(1, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(__os, __s) {
  (__os.a[__os.i])._M_put(7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(__os, __m) {
  if (((__m.a[__m.i])._M_kind === 0)) {
    (__os.a[__os.i])._M_put(8, 10, null, 0);
  }
  else {
    if (((__m.a[__m.i])._M_kind === 1)) {
      (__os.a[__os.i])._M_put(8, 0, null, 0);
    }
    else {
      (__os.a[__os.i])._M_put(9, 0, null, 0);
    }
  }
  return __os;
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function main() {
  let $t17, $t18;
  let a = {v: new std_list_int_std_allocator_int()};
  a.v.push_back({a: [3], i: 0});
  a.v.push_back({a: [1], i: 0});
  a.v.push_back({a: [4], i: 0});
  a.v.push_front({a: [9], i: 0});
  let s = 0;
  for (let $b0 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e0 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [32, 0], i: 0}), a.v.size__c()), {a: [std_endl], i: 0});
  a.v.sort();
  s = 0;
  for (let $b1 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e1 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [std_endl], i: 0});
  a.v.reverse();
  s = 0;
  for (let $b2 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e2 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b2.op_ne__c({a: [$e2], i: 0}); $b2.op_inc()) {
    let x = ($b2.op_mul__c()).a[($b2.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [std_endl], i: 0});
  a.v.remove({a: [4], i: 0});
  a.v.pop_front();
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, ($t17 = a.v.front(), $t17.a[$t17.i])), {a: [32, 0], i: 0}), ($t18 = a.v.back(), $t18.a[$t18.i])), {a: [32, 0], i: 0}), a.v.size__c()), {a: [std_endl], i: 0});
  let b = new std_list_int_std_allocator_int();
  b.push_back({a: [7], i: 0});
  b.push_back({a: [8], i: 0});
  b.splice(b.end(), {a: a, i: "v"});
  s = 0;
  for (let $b3 = new std_List_iterator_int({a: [b.begin()], i: 0}), $e3 = new std_List_iterator_int({a: [b.end()], i: 0}); $b3.op_ne__c({a: [$e3], i: 0}); $b3.op_inc()) {
    let y = $b3.op_mul__c();
    s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [32, 0], i: 0}), a.v.size__c()), {a: [std_endl], i: 0});
  let c = {v: new std_list_int_std_allocator_int()};
  c.v.push_back({a: [5], i: 0});
  c.v.push_back({a: [6], i: 0});
  b.merge({a: c, i: "v"});
  s = 0;
  for (let $b4 = new std_List_iterator_int({a: [b.begin()], i: 0}), $e4 = new std_List_iterator_int({a: [b.end()], i: 0}); $b4.op_ne__c({a: [$e4], i: 0}); $b4.op_inc()) {
    let y = $b4.op_mul__c();
    s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, s), {a: [std_endl], i: 0});
  b.clear();
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_bool(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long({a: std_cout, i: "v"}, b.size__c()), {a: [32, 0], i: 0}), b.empty__c()), {a: [std_endl], i: 0});
  return 0;
}
function std_distance_std_List_iterator_int(__first, __last) {
  __first = {v: __first};
  return std_distance_std_List_iterator_int_2(new std_List_iterator_int({a: __first, i: "v"}), new std_List_iterator_int({a: [__last], i: 0}), std_iterator_category_std_List_iterator_int({a: __first, i: "v"}));
}
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_move_std_list_int_std_allocator_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_iterator_category_std_List_iterator_int($p0) {
  return new std_bidirectional_iterator_tag();
}
function std_distance_std_List_iterator_int_2(__first, __last, $p2) {
  let __n = 0;
  while (__first.op_ne__c({a: [__last], i: 0})) {
     {
      __first.op_inc();
      (__n = ((__n + 1) | 0));
    }
  }
  return __n;
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
