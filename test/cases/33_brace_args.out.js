"use strict";
class std_sfinae_types {
  __init_std_sfinae_types(...$a) { }
  __dtor() {
  }
}
class std_sfinae_types_class_47 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_47(...$a);
  }
  __init_std_sfinae_types_class_47(...$a) {
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
class class_149 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_149(...$a);
  }
  __init_class_149(...$a) {
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
class P {
  a;
  b;
  constructor(...$a) {
    this.__init_P(...$a);
  }
  __init_P(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof P)) {
      this.a = (($a[0]).a[($a[0]).i]).a;
      this.b = (($a[0]).a[($a[0]).i]).b;
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      this.a = $a[0];
      this.b = $a[1];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class NB {
  v;
  constructor(...$a) {
    this.__init_NB(...$a);
  }
  __init_NB(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof NB)) {
      this.v = (($a[0]).a[($a[0]).i]).v;
    }
    else if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
      this.v = $a[0];
    }
    else { throw new Error("no matching constructor"); }
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
class gnu_cxx_new_allocator_P {
  __init_gnu_cxx_new_allocator_P(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t0;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_long(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_P_construct_P_P__rv(__p, __args_0) {
    (__p.a[__p.i] = new P(std_forward_1_P(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_P_destroy_P(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_P extends gnu_cxx_new_allocator_P {
  constructor(...$a) {
    super();
    this.__init_std_allocator_P(...$a);
  }
  __init_std_allocator_P(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_P.prototype.__dtor.call(this);
  }
}
class std_Vector_base_P_std_allocator_P_Vector_impl extends std_allocator_P {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_P_std_allocator_P_Vector_impl(...$a);
  }
  __init_std_Vector_base_P_std_allocator_P_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
  }
  __dtor() {
    std_allocator_P.prototype.__dtor.call(this);
  }
}
class std_Vector_base_P_std_allocator_P {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_P_std_allocator_P(...$a);
  }
  __init_std_Vector_base_P_std_allocator_P(...$a) {
    this._M_impl = new std_Vector_base_P_std_allocator_P_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t1;
    return ($t1 = ((__n !== ((0) >>> 0)) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_P_std_allocator_P extends std_Vector_base_P_std_allocator_P {
  constructor(...$a) {
    super(...[]);
    this.__init_std_vector_P_std_allocator_P(...$a);
  }
  __init_std_vector_P_std_allocator_P(...$a) {
  }
  __dtor() {
    std_Vector_base_P_std_allocator_P.prototype.__dtor.call(this);
  }
  size__c() {
    return ((((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_P.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  push_back(__x) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_P.construct__gnu_cxx_alloc_traits_std_allocator_P_construct_P({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), __x);
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_P_std_allocator_P_M_emplace_back_aux_P__rv(__x);
    }
  }
  _M_check_len__c(__n, __s) {
    let $t2;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t2 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t2.a[$t2.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_emplace_back_aux__std_vector_P_std_allocator_P_M_emplace_back_aux_P__rv(__args_0) {
    let $t3, $t4, $t5, $t6, $t7;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t3 = this._M_allocate(__len), $t3 ? {a: $t3.a, i: $t3.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_P.construct__gnu_cxx_alloc_traits_std_allocator_P_construct_P({a: this, i: "_M_impl"}, ($t4 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t4 ? {a: $t4.a, i: $t4.i} : null), std_forward_1_P(__args_0));
        __new_finish = null;
        __new_finish = ($t5 = std_uninitialized_move_if_noexcept_a_P_P_P_P_std_allocator_P((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t5 ? {a: $t5.a, i: $t5.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_P.destroy__gnu_cxx_alloc_traits_std_allocator_P_destroy_P({a: this, i: "_M_impl"}, ($t6 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t6 ? {a: $t6.a, i: $t6.i} : null));
        }
        else {
          std_Destroy_2_P_P_std_allocator_P((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_P_P_std_allocator_P((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t7 ? {a: $t7.a, i: $t7.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_P {
  __init_gnu_cxx_alloc_traits_std_allocator_P(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_P_construct_P(__a, __p, __arg) {
    (__a.a[__a.i]).construct__gnu_cxx_new_allocator_P_construct_P_P__rv((__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return (__a.a[__a.i]).max_size__c();
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_P_destroy_P(__a, __p) {
    (__a.a[__a.i]).destroy__gnu_cxx_new_allocator_P_destroy_P((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_P_rebind_P {
  __init_gnu_cxx_alloc_traits_std_allocator_P_rebind_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_P_rebind_P {
  __init_std_allocator_P_rebind_P(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_P {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_P(...$a);
  }
  __init_std_initializer_list_P(...$a) {
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
    this.first = ($a[0]).a[($a[0]).i];
    this.second = ($a[1]).a[($a[1]).i];
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
class Tr_int {
  constructor(...$a) {
    this.__init_Tr_int(...$a);
  }
  __init_Tr_int(...$a) {
  }
  __dtor() {
  }
  pick(x, y) {
    if ((x === null)) {
      return new std_pair_NB_P_NB_P({a: [x], i: 0}, {a: [y], i: 0});
    }
    return new std_pair_NB_P_NB_P({a: [y], i: 0}, {a: [x], i: 0});
  }
}
class std_pair_NB_P_NB_P {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_NB_P_NB_P(...$a);
  }
  __init_std_pair_NB_P_NB_P(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_NB_P_NB_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_NB_P_R_NB_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_NB_P_R_NB_P(...$a);
  }
  __init_std_is_convertible_NB_P_R_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_NB_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_NB_P_R(...$a);
  }
  __init_std_is_void_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_NB_P_R {
  __init_std_remove_cv_NB_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_NB_P_R {
  __init_std_remove_volatile_NB_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_NB_P_R {
  __init_std_remove_const_NB_P_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_NB_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_NB_P_R(...$a);
  }
  __init_std_is_void_helper_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_NB_P(...$a);
  }
  __init_std_is_function_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_NB_P(...$a);
  }
  __init_std_is_array_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_NB_P_std_is_array_NB_P extends std_is_array_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_NB_P_std_is_array_NB_P(...$a);
  }
  __init_std_or_std_is_function_NB_P_std_is_array_NB_P(...$a) {
  }
  __dtor() {
    std_is_array_NB_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_NB_P_R_std_is_function_NB_P_std_is_array_NB_P extends std_or_std_is_function_NB_P_std_is_array_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_NB_P_R_std_is_function_NB_P_std_is_array_NB_P(...$a);
  }
  __init_std_or_std_is_void_NB_P_R_std_is_function_NB_P_std_is_array_NB_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_NB_P_std_is_array_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_NB_P_std_is_array_NB_P {
  __init_std_conditional_value0_std_is_function_NB_P_std_is_array_NB_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_NB_P_R_std_or_std_is_function_NB_P_std_is_array_NB_P {
  __init_std_conditional_value0_std_is_void_NB_P_R_std_or_std_is_function_NB_P_std_is_array_NB_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_NB_P_R_NB_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_NB_P_R_NB_P_value0(...$a);
  }
  __init_std_is_convertible_helper_NB_P_R_NB_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_NB_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_NB_P_R(...$a);
  }
  __init_std_is_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_NB_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_NB_P_R(...$a);
  }
  __init_std_is_lvalue_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_NB_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_NB_P_R(...$a);
  }
  __init_std_is_rvalue_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_NB_P_R_std_is_rvalue_reference_NB_P_R extends std_is_lvalue_reference_NB_P_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_NB_P_R_std_is_rvalue_reference_NB_P_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_NB_P_R_std_is_rvalue_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_NB_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_NB_P_R_std_is_rvalue_reference_NB_P_R {
  __init_std_conditional_value1_std_is_lvalue_reference_NB_P_R_std_is_rvalue_reference_NB_P_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_NB_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_NB_P_R(...$a);
  }
  __init_std_not_std_is_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_NB_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_NB_P_R(...$a);
  }
  __init_std_not_std_is_void_NB_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_NB_P_R_std_not_std_is_void_NB_P_R extends std_not_std_is_reference_NB_P_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_NB_P_R_std_not_std_is_void_NB_P_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_NB_P_R_std_not_std_is_void_NB_P_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_NB_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_NB_P_R_std_not_std_is_reference_NB_P_R {
  __init_std_conditional_value0_std_not_std_is_void_NB_P_R_std_not_std_is_reference_NB_P_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_NB_P_R_value0 {
  __init_std_add_rvalue_reference_helper_NB_P_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_NB_P_R extends std_add_rvalue_reference_helper_NB_P_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_NB_P_R(...$a);
  }
  __init_std_add_rvalue_reference_NB_P_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_NB_P_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_NB_P_R_NB_P_std_is_convertible_NB_P_R_NB_P extends std_is_convertible_NB_P_R_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_NB_P_R_NB_P_std_is_convertible_NB_P_R_NB_P(...$a);
  }
  __init_std_and_std_is_convertible_NB_P_R_NB_P_std_is_convertible_NB_P_R_NB_P(...$a) {
  }
  __dtor() {
    std_is_convertible_NB_P_R_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_NB_P_R_NB_P_std_is_convertible_NB_P_R_NB_P {
  __init_std_conditional_value1_std_is_convertible_NB_P_R_NB_P_std_is_convertible_NB_P_R_NB_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_NB_P_NB_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_NB_P_NB_P(...$a);
  }
  __init_std_is_convertible_NB_P_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_NB_P(...$a);
  }
  __init_std_is_void_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_NB_P {
  __init_std_remove_cv_NB_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_NB_P {
  __init_std_remove_volatile_NB_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_NB_P {
  __init_std_remove_const_NB_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_NB_P(...$a);
  }
  __init_std_is_void_helper_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_NB_P_std_is_function_NB_P_std_is_array_NB_P extends std_or_std_is_function_NB_P_std_is_array_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_NB_P_std_is_function_NB_P_std_is_array_NB_P(...$a);
  }
  __init_std_or_std_is_void_NB_P_std_is_function_NB_P_std_is_array_NB_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_NB_P_std_is_array_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_NB_P_std_or_std_is_function_NB_P_std_is_array_NB_P {
  __init_std_conditional_value0_std_is_void_NB_P_std_or_std_is_function_NB_P_std_is_array_NB_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_NB_P_NB_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_NB_P_NB_P_value0(...$a);
  }
  __init_std_is_convertible_helper_NB_P_NB_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_NB_P(...$a);
  }
  __init_std_is_reference_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_NB_P(...$a);
  }
  __init_std_is_lvalue_reference_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_NB_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_NB_P(...$a);
  }
  __init_std_is_rvalue_reference_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_NB_P_std_is_rvalue_reference_NB_P extends std_is_rvalue_reference_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_NB_P_std_is_rvalue_reference_NB_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_NB_P_std_is_rvalue_reference_NB_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_NB_P_std_is_rvalue_reference_NB_P {
  __init_std_conditional_value0_std_is_lvalue_reference_NB_P_std_is_rvalue_reference_NB_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_NB_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_NB_P(...$a);
  }
  __init_std_not_std_is_reference_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_NB_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_NB_P(...$a);
  }
  __init_std_not_std_is_void_NB_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_NB_P_std_not_std_is_void_NB_P extends std_not_std_is_void_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_NB_P_std_not_std_is_void_NB_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_NB_P_std_not_std_is_void_NB_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_NB_P_std_not_std_is_reference_NB_P {
  __init_std_conditional_value1_std_not_std_is_void_NB_P_std_not_std_is_reference_NB_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_NB_P_value1 {
  __init_std_add_rvalue_reference_helper_NB_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_NB_P extends std_add_rvalue_reference_helper_NB_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_NB_P(...$a);
  }
  __init_std_add_rvalue_reference_NB_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_NB_P_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_NB_P_NB_P_std_is_convertible_NB_P_NB_P extends std_is_convertible_NB_P_NB_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_NB_P_NB_P_std_is_convertible_NB_P_NB_P(...$a);
  }
  __init_std_and_std_is_convertible_NB_P_NB_P_std_is_convertible_NB_P_NB_P(...$a) {
  }
  __dtor() {
    std_is_convertible_NB_P_NB_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_NB_P_NB_P_std_is_convertible_NB_P_NB_P {
  __init_std_conditional_value1_std_is_convertible_NB_P_NB_P_std_is_convertible_NB_P_NB_P(...$a) { }
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
class std_declval_protector_NB_P_R {
  constructor(...$a) {
    this.__init_std_declval_protector_NB_P_R(...$a);
  }
  __init_std_declval_protector_NB_P_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_NB_P {
  constructor(...$a) {
    this.__init_std_declval_protector_NB_P(...$a);
  }
  __init_std_declval_protector_NB_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_P {
  __init_std_remove_reference_P(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_P_P {
  __init_std_iterator_traits_P_P(...$a) { }
  __dtor() {
  }
}
class std_move_if_noexcept_cond_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_P(...$a);
  }
  __init_std_move_if_noexcept_cond_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_P(...$a);
  }
  __init_std_is_void_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_P {
  __init_std_remove_cv_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_P {
  __init_std_remove_volatile_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_P {
  __init_std_remove_const_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_P(...$a);
  }
  __init_std_is_void_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_constructible_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_P_P_RR(...$a);
  }
  __init_std_is_nothrow_constructible_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_P_value0 extends std_is_nothrow_constructible_P_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_P_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_P_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_P_P_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_P extends std_is_nothrow_move_constructible_impl_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_P(...$a);
  }
  __init_std_is_nothrow_move_constructible_P(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_P_P_RR(...$a);
  }
  __init_std_is_constructible_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_P_P_RR(...$a);
  }
  __init_std_is_direct_constructible_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_P_P_RR extends std_is_direct_constructible_P_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_P_P_RR(...$a);
  }
  __init_std_is_constructible_impl_P_P_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_P_P_RR.prototype.__dtor.call(this);
  }
}
class std_is_reference_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_P(...$a);
  }
  __init_std_is_reference_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_P(...$a);
  }
  __init_std_is_lvalue_reference_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_P(...$a);
  }
  __init_std_is_rvalue_reference_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_P_std_is_rvalue_reference_P extends std_is_rvalue_reference_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_P_std_is_rvalue_reference_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_P_std_is_rvalue_reference_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_P_std_is_rvalue_reference_P {
  __init_std_conditional_value0_std_is_lvalue_reference_P_std_is_rvalue_reference_P(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_P_P_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_P_RR_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_P_RR_P(...$a);
  }
  __init_std_is_static_castable_P_RR_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_P_RR_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_P_RR_P(...$a);
  }
  __init_std_is_static_castable_safe_P_RR_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_P_RR_P extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_P_RR_P(...$a);
  }
  __init_std_is_static_castable_impl_P_RR_P(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_P_RR(...$a);
  }
  __init_std_is_reference_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_P_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_P_RR(...$a);
  }
  __init_std_is_lvalue_reference_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_P_RR(...$a);
  }
  __init_std_is_rvalue_reference_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P_RR extends std_is_rvalue_reference_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_P_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_P_RR(...$a);
  }
  __init_std_not_std_is_reference_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_P_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_P_RR(...$a);
  }
  __init_std_is_void_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_P_RR {
  __init_std_remove_cv_P_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_P_RR {
  __init_std_remove_volatile_P_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_P_RR {
  __init_std_remove_const_P_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_P_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_P_RR(...$a);
  }
  __init_std_is_void_helper_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_P_RR(...$a);
  }
  __init_std_not_std_is_void_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_P_RR_std_not_std_is_void_P_RR extends std_not_std_is_reference_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_P_RR_std_not_std_is_void_P_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_P_RR_std_not_std_is_void_P_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_P_RR_std_not_std_is_reference_P_RR {
  __init_std_conditional_value0_std_not_std_is_void_P_RR_std_not_std_is_reference_P_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_P_RR_value0 {
  __init_std_add_rvalue_reference_helper_P_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_P_RR extends std_add_rvalue_reference_helper_P_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_P_RR(...$a);
  }
  __init_std_add_rvalue_reference_P_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_P_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_P_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_P_RR(...$a);
  }
  __init_std_is_function_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_P_RR_std_is_function_P_RR extends std_is_function_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_P_RR_std_is_function_P_RR(...$a);
  }
  __init_std_or_std_is_void_P_RR_std_is_function_P_RR(...$a) {
  }
  __dtor() {
    std_is_function_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_P_RR_std_is_function_P_RR {
  __init_std_conditional_value0_std_is_void_P_RR_std_is_function_P_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_P_RR_std_is_function_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_P_RR_std_is_function_P_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_P_RR_std_is_function_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_P_RR_P_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_P_RR_P_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_P_RR_P_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P extends std_is_lvalue_reference_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P(...$a);
  }
  __init_std_and_std_is_lvalue_reference_P_RR_std_is_rvalue_reference_P(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_P_std_is_lvalue_reference_P_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_P_std_is_lvalue_reference_P_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_P_RR_P_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0 extends std_is_lvalue_to_rvalue_ref_P_RR_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_P_RR_P_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_P_RR {
  __init_std_remove_reference_P_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_P_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_P_P(...$a);
  }
  __init_std_is_same_P_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_P_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_P_P(...$a);
  }
  __init_std_not_std_is_same_P_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_P_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_P_P(...$a);
  }
  __init_std_is_base_of_P_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_P_P_std_is_base_of_P_P extends std_not_std_is_same_P_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_P_P_std_is_base_of_P_P(...$a);
  }
  __init_std_and_std_not_std_is_same_P_P_std_is_base_of_P_P(...$a) {
  }
  __dtor() {
    std_not_std_is_same_P_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_P_P_std_not_std_is_same_P_P {
  __init_std_conditional_value0_std_is_base_of_P_P_std_not_std_is_same_P_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_P_RR_P_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0 extends std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_P_RR_P_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a);
  }
  __init_std_and_std_is_static_castable_P_RR_P_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0_std_is_static_castable_P_RR_P {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_P_RR_P_value1_std_is_lvalue_to_rvalue_ref_P_RR_P_value0_std_is_static_castable_P_RR_P(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_P_P_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_P_P_RR extends std_is_direct_constructible_new_safe_P_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_P_P_RR(...$a);
  }
  __init_std_is_direct_constructible_new_P_P_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_P_P_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_P(...$a);
  }
  __init_std_is_destructible_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_P(...$a);
  }
  __init_std_is_array_unknown_bounds_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_P(...$a);
  }
  __init_std_is_array_P(...$a) {
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
class std_extent_P_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_P_value0(...$a);
  }
  __init_std_extent_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_P_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_P_value0(...$a);
  }
  __init_std_not_std_extent_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_P_std_not_std_extent_P_value0 extends std_is_array_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_P_std_not_std_extent_P_value0(...$a);
  }
  __init_std_and_std_is_array_P_std_not_std_extent_P_value0(...$a) {
  }
  __dtor() {
    std_is_array_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_P_value0_std_is_array_P {
  __init_std_conditional_value0_std_not_std_extent_P_value0_std_is_array_P(...$a) { }
  __dtor() {
  }
}
class std_is_function_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_P(...$a);
  }
  __init_std_is_function_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_P_std_is_function_P extends std_is_function_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_P_std_is_function_P(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_P_std_is_function_P(...$a) {
  }
  __dtor() {
    std_is_function_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_P_std_is_array_unknown_bounds_P_std_is_function_P extends std_or_std_is_array_unknown_bounds_P_std_is_function_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_P_std_is_array_unknown_bounds_P_std_is_function_P(...$a);
  }
  __init_std_or_std_is_void_P_std_is_array_unknown_bounds_P_std_is_function_P(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_P_std_is_function_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_P_std_is_function_P {
  __init_std_conditional_value0_std_is_array_unknown_bounds_P_std_is_function_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_P_std_or_std_is_array_unknown_bounds_P_std_is_function_P {
  __init_std_conditional_value0_std_is_void_P_std_or_std_is_array_unknown_bounds_P_std_is_function_P(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_P(...$a);
  }
  __init_std_is_scalar_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_P(...$a);
  }
  __init_std_is_arithmetic_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_P(...$a);
  }
  __init_std_is_integral_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_P(...$a);
  }
  __init_std_is_integral_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_P(...$a);
  }
  __init_std_is_floating_point_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_P(...$a);
  }
  __init_std_is_floating_point_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_P_std_is_floating_point_P extends std_is_floating_point_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_P_std_is_floating_point_P(...$a);
  }
  __init_std_or_std_is_integral_P_std_is_floating_point_P(...$a) {
  }
  __dtor() {
    std_is_floating_point_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_P_std_is_floating_point_P {
  __init_std_conditional_value0_std_is_integral_P_std_is_floating_point_P(...$a) { }
  __dtor() {
  }
}
class std_is_enum_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_P(...$a);
  }
  __init_std_is_enum_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_P(...$a);
  }
  __init_std_is_pointer_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_P(...$a);
  }
  __init_std_is_pointer_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_P(...$a);
  }
  __init_std_is_member_pointer_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_P(...$a);
  }
  __init_std_is_member_pointer_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_P(...$a);
  }
  __init_std_is_nullptr_t_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_P(...$a);
  }
  __init_std_is_nullptr_t_helper_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_P_std_is_nullptr_t_P extends std_is_nullptr_t_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_P_std_is_nullptr_t_P(...$a);
  }
  __init_std_or_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P extends std_or_std_is_member_pointer_P_std_is_nullptr_t_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a);
  }
  __init_std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_P_std_is_nullptr_t_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P extends std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a);
  }
  __init_std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_P_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P extends std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_P_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a);
  }
  __init_std_or_std_is_arithmetic_P_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_P_std_is_nullptr_t_P {
  __init_std_conditional_value0_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_P_std_or_std_is_member_pointer_P_std_is_nullptr_t_P {
  __init_std_conditional_value0_std_is_pointer_P_std_or_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_P_std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P {
  __init_std_conditional_value0_std_is_enum_P_std_or_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_P_std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P {
  __init_std_conditional_value0_std_is_arithmetic_P_std_or_std_is_enum_P_std_is_pointer_P_std_is_member_pointer_P_std_is_nullptr_t_P(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_P_std_is_scalar_P extends std_is_scalar_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_P_std_is_scalar_P(...$a);
  }
  __init_std_or_std_is_reference_P_std_is_scalar_P(...$a) {
  }
  __dtor() {
    std_is_scalar_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_P_std_is_scalar_P {
  __init_std_conditional_value0_std_is_reference_P_std_is_scalar_P(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_P_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_P_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_P_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_P {
  __init_std_remove_all_extents_P(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_P extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_P(...$a);
  }
  __init_std_is_destructible_impl_P(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_P_R(...$a);
  }
  __init_std_is_reference_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_P_R(...$a);
  }
  __init_std_is_lvalue_reference_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_P_R(...$a);
  }
  __init_std_is_rvalue_reference_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P_R extends std_is_lvalue_reference_P_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P_R {
  __init_std_conditional_value1_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_P_R(...$a);
  }
  __init_std_not_std_is_reference_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_P_R(...$a);
  }
  __init_std_is_void_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_P_R {
  __init_std_remove_cv_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_P_R {
  __init_std_remove_volatile_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_P_R {
  __init_std_remove_const_P_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_P_R(...$a);
  }
  __init_std_is_void_helper_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_P_R(...$a);
  }
  __init_std_not_std_is_void_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_P_R_std_not_std_is_void_P_R extends std_not_std_is_reference_P_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_P_R_std_not_std_is_void_P_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_P_R_std_not_std_is_void_P_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_P_R_std_not_std_is_reference_P_R {
  __init_std_conditional_value0_std_not_std_is_void_P_R_std_not_std_is_reference_P_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_P_R_value0 {
  __init_std_add_rvalue_reference_helper_P_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_P_R extends std_add_rvalue_reference_helper_P_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_P_R(...$a);
  }
  __init_std_add_rvalue_reference_P_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_P_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_P_P_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_P_P_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_P_P_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_RR extends std_is_direct_constructible_impl_P_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_RR(...$a);
  }
  __init_std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_P_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_P_P_RR_std_is_destructible_P {
  __init_std_conditional_value1_std_is_direct_constructible_impl_P_P_RR_std_is_destructible_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_P_P_RR_std_is_direct_constructible_new_safe_P_P_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_P_P_RR_std_is_direct_constructible_new_safe_P_P_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_P_P_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_P_P_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_P_P_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_P_P_RR_std_is_nt_constructible_impl_P_P_RR extends std_is_nt_constructible_impl_P_P_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_P_P_RR_std_is_nt_constructible_impl_P_P_RR(...$a);
  }
  __init_std_and_std_is_constructible_P_P_RR_std_is_nt_constructible_impl_P_P_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_P_P_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_P_P_RR_std_is_constructible_P_P_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_P_P_RR_std_is_constructible_P_P_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_P(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_P_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_P_P_R(...$a);
  }
  __init_std_is_constructible_P_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_P_value0 extends std_is_constructible_P_P_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_P_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_P_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_P_P_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_P extends std_is_copy_constructible_impl_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_P(...$a);
  }
  __init_std_is_copy_constructible_P(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_P_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_P_P_R(...$a);
  }
  __init_std_is_direct_constructible_P_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_P_P_R extends std_is_direct_constructible_P_P_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_P_P_R(...$a);
  }
  __init_std_is_constructible_impl_P_P_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_P_P_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_P_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_P_P_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_P_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_P_R_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_P_R_P(...$a);
  }
  __init_std_is_static_castable_P_R_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_P_R_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_P_R_P(...$a);
  }
  __init_std_is_static_castable_safe_P_R_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_P_R_P extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_P_R_P(...$a);
  }
  __init_std_is_static_castable_impl_P_R_P(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_P_R(...$a);
  }
  __init_std_is_function_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_P_R_std_is_function_P_R extends std_is_function_P_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_P_R_std_is_function_P_R(...$a);
  }
  __init_std_or_std_is_void_P_R_std_is_function_P_R(...$a) {
  }
  __dtor() {
    std_is_function_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_P_R_std_is_function_P_R {
  __init_std_conditional_value0_std_is_void_P_R_std_is_function_P_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_P_R_std_is_function_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_P_R_std_is_function_P_R(...$a);
  }
  __init_std_not_std_or_std_is_void_P_R_std_is_function_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_P_R_P_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_P_R_P_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_P_R_P_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P extends std_is_rvalue_reference_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P(...$a);
  }
  __init_std_and_std_is_lvalue_reference_P_R_std_is_rvalue_reference_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_P_std_is_lvalue_reference_P_R {
  __init_std_conditional_value1_std_is_rvalue_reference_P_std_is_lvalue_reference_P_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_P_R_P_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0 extends std_is_lvalue_to_rvalue_ref_P_R_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_P_R_P_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_P_R {
  __init_std_remove_reference_P_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_P_R_P_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0 extends std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_P_R_P_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a);
  }
  __init_std_and_std_is_static_castable_P_R_P_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0_std_is_static_castable_P_R_P {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_P_R_P_value1_std_is_lvalue_to_rvalue_ref_P_R_P_value0_std_is_static_castable_P_R_P(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_P_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_P_P_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_P_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_P_P_R extends std_is_direct_constructible_new_safe_P_P_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_P_P_R(...$a);
  }
  __init_std_is_direct_constructible_new_P_P_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_P_P_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_P_P_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_P_P_R(...$a);
  }
  __init_std_is_direct_constructible_impl_P_P_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_R extends std_is_direct_constructible_impl_P_P_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_R(...$a);
  }
  __init_std_and_std_is_destructible_P_std_is_direct_constructible_impl_P_P_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_P_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_P_P_R_std_is_destructible_P {
  __init_std_conditional_value1_std_is_direct_constructible_impl_P_P_R_std_is_destructible_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_P_P_R_std_is_direct_constructible_new_safe_P_P_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_P_P_R_std_is_direct_constructible_new_safe_P_P_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_P_std_is_copy_constructible_P extends std_not_std_is_nothrow_move_constructible_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_P_std_is_copy_constructible_P(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_P_std_is_copy_constructible_P(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_P_std_not_std_is_nothrow_move_constructible_P {
  __init_std_conditional_value0_std_is_copy_constructible_P_std_not_std_is_nothrow_move_constructible_P(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_P_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_P_P(...$a);
  }
  __init_std_move_iterator_P_P(...$a) {
    let $t8;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_P_P)) {
      this._M_current = ($t8 = (($a[0]).a[($a[0]).i]).base__c(), $t8 ? {a: $t8.a, i: $t8.i} : null);
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
    return std_move_P(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_P_P_std_move_iterator_P_P {
  __init_std_conditional_value0_P_P_std_move_iterator_P_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_P_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_P_RR(...$a);
  }
  __init_std_declval_protector_P_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_P_R {
  constructor(...$a) {
    this.__init_std_declval_protector_P_R(...$a);
  }
  __init_std_declval_protector_P_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
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
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function f(p) {
  return (((p.first) + (p.second)) | 0);
}
function g(p) {
  return (((((Math.imul(p.a, 10)) | 0)) + (p.b)) | 0);
}
function setit(x) {
  x.a[x.i] = 5;
}
function main() {
  let $t9, $t10;
  std_cout.v.tie(null);
  let v = new std_vector_P_std_allocator_P();
  let x = 3;
  v.push_back({a: [new P(x, 1)], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long({a: std_cout, i: "v"}, v.size__c()), {a: [32, 0], i: 0}), (($t9 = v.op_index(((0) >>> 0)), $t9.a[$t9.i])).a), {a: [32, 0], i: 0}), (($t10 = v.op_index(((0) >>> 0)), $t10.a[$t10.i])).b), {a: [32, 0], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (((f(new std_pair_int_int({a: [x], i: 0}, {a: [4], i: 0}))) + (g(new P(2, 5)))) | 0)), {a: [10, 0], i: 0});
  let p1 = {v: new NB(1)};
  let p2 = {v: new NB(2)};
  let t = new Tr_int();
  let r = t.pick((({a: p1, i: "v"}) ? {a: ({a: p1, i: "v"}).a, i: ({a: p1, i: "v"}).i} : null), (({a: p2, i: "v"}) ? {a: ({a: p2, i: "v"}).a, i: ({a: p2, i: "v"}).i} : null));
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (r.first.a[r.first.i]).v), {a: [32, 0], i: 0}), (r.second.a[r.second.i]).v), {a: [10, 0], i: 0});
  setit({a: a.v, i: (1)});
  let q = {a: a.v, i: (2)};
  q.a[q.i] = 7;
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, a.v[1]), {a: [32, 0], i: 0}), a.v[2]), {a: [10, 0], i: 0});
  return 0;
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_NB_P_R() {
  return std_declval_protector_NB_P_R.__delegate();
}
function std_declval_NB_P() {
  return std_declval_protector_NB_P.__delegate();
}
function std_declval_P_RR() {
  return std_declval_protector_P_RR.__delegate();
}
function std_declval_P_R() {
  return std_declval_protector_P_R.__delegate();
}
function std_forward_1_P(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_P_P_P_P_std_allocator_P(__first, __last, __result, __alloc) {
  let $t11;
  return ($t11 = std_uninitialized_copy_a_std_move_iterator_P_P_P_P_std_allocator_P(std_make_move_if_noexcept_iterator_P_P_std_move_iterator_P_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_P_P_std_move_iterator_P_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t11 ? {a: $t11.a, i: $t11.i} : null);
}
function std_Destroy_2_P_P_std_allocator_P(__first, __last, __alloc) {
  let $t12;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_P.destroy__gnu_cxx_alloc_traits_std_allocator_P_destroy_P(__alloc, ($t12 = std_addressof_P(__first), $t12 ? {a: $t12.a, i: $t12.i} : null));
  }
}
function std_max_unsigned_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_make_move_if_noexcept_iterator_P_P_std_move_iterator_P_P(__i) {
  return new std_move_iterator_P_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_P_P_P_P_std_allocator_P(__first, __last, __result, __alloc) {
  let $t13;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_P_P_P_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_P.construct__gnu_cxx_alloc_traits_std_allocator_P_construct_P(__alloc, ($t13 = std_addressof_P(__cur), $t13 ? {a: $t13.a, i: $t13.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_P_P_std_allocator_P((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_addressof_P(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_operator_3_P_P_P_P(__x, __y) {
  return (!(std_operator_3_P_P_P_P_2(__x, __y)));
}
function std_operator_3_P_P_P_P_2(__x, __y) {
  let $t14, $t15, $t16, $t17;
  return ($t16 = ($t14 = (__x.a[__x.i]).base__c(), $t14), $t17 = ($t15 = (__y.a[__y.i]).base__c(), $t15), ($t16 === $t17 || ($t16 && $t17 && $t16.a === $t17.a && $t16.i === $t17.i)));
}
function std_move_P(__t) {
  return __t;
}
let std_piecewise_construct = new std_piecewise_construct_t();
let ctj_stdin_file = {v: new IO_FILE(0, 0)};
let ctj_stdout_file = {v: new IO_FILE(1, 0)};
let ctj_stderr_file = {v: new IO_FILE(2, 0)};
let stdin = (({a: ctj_stdin_file, i: "v"}) ? {a: ({a: ctj_stdin_file, i: "v"}).a, i: ({a: ctj_stdin_file, i: "v"}).i} : null);
let stdout = (({a: ctj_stdout_file, i: "v"}) ? {a: ({a: ctj_stdout_file, i: "v"}).a, i: ({a: ctj_stdout_file, i: "v"}).i} : null);
let stderr = (({a: ctj_stderr_file, i: "v"}) ? {a: ({a: ctj_stderr_file, i: "v"}).a, i: ({a: ctj_stderr_file, i: "v"}).i} : null);
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
let std_cout = {v: new std_basic_ostream_char_std_char_traits_char(1)};
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = new std_Swallow_assign();
let gnu_cxx_default_lock_policy = 0;
let a = {v: new Array(10).fill(0)};
main();
