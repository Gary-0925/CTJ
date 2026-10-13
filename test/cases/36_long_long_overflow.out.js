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
  __flags;
  __dummy;
  constructor(...$a) {
    this.__init_IO_FILE(...$a);
  }
  __init_IO_FILE(...$a) {
    this.__flags = 0;
    this.__dummy = 0;
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
class std_hash_base_unsigned_int_long_long {
  __init_std_hash_base_unsigned_int_long_long(...$a) { }
  __dtor() {
  }
}
class std_hash_long_long extends std_hash_base_unsigned_int_long_long {
  constructor(...$a) {
    super();
    this.__init_std_hash_long_long(...$a);
  }
  __init_std_hash_long_long(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_long_long.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  __init_std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  __init_std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  __init_std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.prototype.__dtor.call(this);
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
class std_iterator_std_random_access_iterator_tag_bool_int_bool_P_bool_R {
  __init_std_iterator_std_random_access_iterator_tag_bool_int_bool_P_bool_R(...$a) { }
  __dtor() {
  }
}
class std_Bit_iterator_base extends std_iterator_std_random_access_iterator_tag_bool_int_bool_P_bool_R {
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
    std_iterator_std_random_access_iterator_tag_bool_int_bool_P_bool_R.prototype.__dtor.call(this);
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
  setstate(__s) {
    this._M_state = (((this._M_state) | (__s)) | 0);
  }
  fail__c() {
    return ((((this._M_state) & (5)) | 0) !== 0);
  }
  _conv__c() {
    return (!(this.fail__c()));
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
class gnu_cxx_new_allocator_long_long {
  __init_gnu_cxx_new_allocator_long_long(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t0;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_int(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
  }
  construct__rv(__p, __args_0) {
    let $t1;
    (__p.a[__p.i] = ($t1 = std_forward_1_long_long(__args_0), $t1.a[$t1.i]));
  }
  destroy(__p) {
    void 0;
  }
}
class std_allocator_long_long extends gnu_cxx_new_allocator_long_long {
  constructor(...$a) {
    super();
    this.__init_std_allocator_long_long(...$a);
  }
  __init_std_allocator_long_long(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_long_long.prototype.__dtor.call(this);
  }
}
class std_Vector_base_long_long_std_allocator_long_long_Vector_impl extends std_allocator_long_long {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_long_long_std_allocator_long_long_Vector_impl(...$a);
  }
  __init_std_Vector_base_long_long_std_allocator_long_long_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
  }
  __dtor() {
    std_allocator_long_long.prototype.__dtor.call(this);
  }
}
class std_Vector_base_long_long_std_allocator_long_long {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_long_long_std_allocator_long_long(...$a);
  }
  __init_std_Vector_base_long_long_std_allocator_long_long(...$a) {
    this._M_impl = new std_Vector_base_long_long_std_allocator_long_long_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t2;
    return ($t2 = ((__n !== ((0) >>> 0)) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_long_long_std_allocator_long_long extends std_Vector_base_long_long_std_allocator_long_long {
  constructor(...$a) {
    super(...[]);
    this.__init_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_Vector_base_long_long_std_allocator_long_long.prototype.__dtor.call(this);
  }
  begin() {
    return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: this._M_impl, i: "_M_start"});
  }
  end() {
    return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: this._M_impl, i: "_M_finish"});
  }
  size__c() {
    return ((((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_long_long.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  push_back(__x) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_long_long.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), __x);
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(__x);
    }
  }
  _M_check_len__c(__n, __s) {
    let $t3;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t3 = std_max_unsigned_int({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t3.a[$t3.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t4, $t5, $t6, $t7, $t8;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t4 = this._M_allocate(__len), $t4 ? {a: $t4.a, i: $t4.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_long_long.construct({a: this, i: "_M_impl"}, ($t5 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t5 ? {a: $t5.a, i: $t5.i} : null), std_forward_1_long_long(__args_0));
        __new_finish = null;
        __new_finish = ($t6 = std_uninitialized_move_if_noexcept_a_long_long_P_long_long_P_std_allocator_long_long((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t6 ? {a: $t6.a, i: $t6.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_long_long.destroy({a: this, i: "_M_impl"}, ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t7 ? {a: $t7.a, i: $t7.i} : null));
        }
        else {
          std_Destroy_2_long_long_P_std_allocator_long_long((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_long_long_P_std_allocator_long_long((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t8 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t8 ? {a: $t8.a, i: $t8.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_long_long {
  __init_gnu_cxx_alloc_traits_std_allocator_long_long(...$a) { }
  __dtor() {
  }
  static construct(__a, __p, __arg) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return (__a.a[__a.i]).max_size__c();
  }
  static destroy(__a, __p) {
    (__a.a[__a.i]).destroy((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_long_long_rebind_long_long {
  __init_gnu_cxx_alloc_traits_std_allocator_long_long_rebind_long_long(...$a) { }
  __dtor() {
  }
}
class std_allocator_long_long_rebind_long_long {
  __init_std_allocator_long_long_rebind_long_long(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_long_long {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_long_long(...$a);
  }
  __init_std_initializer_list_long_long(...$a) {
    this._M_array = null;
    this._M_len = 0;
  }
  __dtor() {
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
class gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
    let $t9, $t10;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long)) {
      this._M_current = (((($a[0]).a[($a[0]).i])._M_current) ? {a: ((($a[0]).a[($a[0]).i])._M_current).a, i: ((($a[0]).a[($a[0]).i])._M_current).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long)) {
      this._M_current = ($t9 = (($a[0]).a[($a[0]).i]).base__c(), $t10 = ($t9 ? $t9.a[$t9.i] : null), $t10 && $t10.a !== undefined ? {a: $t10.a, i: $t10.i} : $t10);
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
  op_inc() {
    ++this._M_current.i;
    return {a: [this], i: 0};
  }
  op_dec() {
    --this._M_current.i;
    return {a: [this], i: 0};
  }
  op_add__c(__n) {
    return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) + (__n.a[__n.i])})], i: 0});
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current"};
  }
  op_assign(o) {
    this._M_current = (((o.a[o.i])._M_current) ? {a: ((o.a[o.i])._M_current).a, i: ((o.a[o.i])._M_current).i} : null);
    return {a: [this], i: 0};
  }
}
class std_are_same_long_long_P_long_long_P {
  __init_std_are_same_long_long_P_long_long_P(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value1_std_vector_long_long_std_allocator_long_long {
  __init_gnu_cxx_enable_if_value1_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_long_long_P {
  __init_std_iterator_traits_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_long_long {
  __init_std_remove_reference_long_long(...$a) { }
  __dtor() {
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
class std_move_if_noexcept_cond_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_long_long(...$a);
  }
  __init_std_move_if_noexcept_cond_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
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
class std_is_static_castable_impl_long_long_RR_long_long extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_long_long_RR_long_long(...$a);
  }
  __init_std_is_static_castable_impl_long_long_RR_long_long(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_long_long_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_long_long_RR(...$a);
  }
  __init_std_is_lvalue_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
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
class std_is_nothrow_constructible_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_long_long_long_long_RR(...$a);
  }
  __init_std_is_nothrow_constructible_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_long_long_value0 extends std_is_nothrow_constructible_long_long_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_long_long_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_long_long_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_long_long_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_long_long extends std_is_nothrow_move_constructible_impl_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_long_long(...$a);
  }
  __init_std_is_nothrow_move_constructible_long_long(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_long_long_long_long_RR(...$a);
  }
  __init_std_is_constructible_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_long_long_long_long_RR(...$a);
  }
  __init_std_is_direct_constructible_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_long_long_long_long_RR extends std_is_direct_constructible_long_long_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_long_long_long_long_RR(...$a);
  }
  __init_std_is_constructible_impl_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_long_long_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_long_long_long_long_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_long_long_RR_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_long_long_RR_long_long(...$a);
  }
  __init_std_is_static_castable_long_long_RR_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_long_long_RR_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_long_long_RR_long_long(...$a);
  }
  __init_std_is_static_castable_safe_long_long_RR_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_long_long_RR(...$a);
  }
  __init_std_is_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_long_long_RR(...$a);
  }
  __init_std_is_rvalue_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long_RR extends std_is_rvalue_reference_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_long_long_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_long_long_RR(...$a);
  }
  __init_std_not_std_is_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_long_long_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_long_long_RR(...$a);
  }
  __init_std_is_void_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_long_long_RR {
  __init_std_remove_cv_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_long_long_RR {
  __init_std_remove_volatile_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_long_long_RR {
  __init_std_remove_const_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_long_long_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_long_long_RR(...$a);
  }
  __init_std_is_void_helper_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_long_long_RR(...$a);
  }
  __init_std_not_std_is_void_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_long_long_RR_std_not_std_is_void_long_long_RR extends std_not_std_is_reference_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_long_long_RR_std_not_std_is_void_long_long_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_long_long_RR_std_not_std_is_void_long_long_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_long_long_RR_std_not_std_is_reference_long_long_RR {
  __init_std_conditional_value0_std_not_std_is_void_long_long_RR_std_not_std_is_reference_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_long_long_RR_value0 {
  __init_std_add_rvalue_reference_helper_long_long_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_long_long_RR extends std_add_rvalue_reference_helper_long_long_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_long_long_RR(...$a);
  }
  __init_std_add_rvalue_reference_long_long_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_long_long_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_long_long_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_long_long_RR(...$a);
  }
  __init_std_is_function_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_long_long_RR_std_is_function_long_long_RR extends std_is_function_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_RR_std_is_function_long_long_RR(...$a);
  }
  __init_std_or_std_is_void_long_long_RR_std_is_function_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_function_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_long_long_RR_std_is_function_long_long_RR {
  __init_std_conditional_value0_std_is_void_long_long_RR_std_is_function_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_long_long_RR_std_is_function_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_long_long_RR_std_is_function_long_long_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_long_long_RR_std_is_function_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_long_long_RR_long_long_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_long_long_RR_long_long_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_long_long_RR_long_long_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long extends std_is_lvalue_reference_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long(...$a);
  }
  __init_std_and_std_is_lvalue_reference_long_long_RR_std_is_rvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_long_long_std_is_lvalue_reference_long_long_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_long_long_std_is_lvalue_reference_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 extends std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_long_long_RR {
  __init_std_remove_reference_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_long_long_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_long_long_long_long(...$a);
  }
  __init_std_is_same_long_long_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_long_long_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_long_long_long_long(...$a);
  }
  __init_std_not_std_is_same_long_long_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_long_long_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_long_long_long_long(...$a);
  }
  __init_std_is_base_of_long_long_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_long_long_long_long_std_is_base_of_long_long_long_long extends std_not_std_is_same_long_long_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_long_long_long_long_std_is_base_of_long_long_long_long(...$a);
  }
  __init_std_and_std_not_std_is_same_long_long_long_long_std_is_base_of_long_long_long_long(...$a) {
  }
  __dtor() {
    std_not_std_is_same_long_long_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_long_long_long_long_std_not_std_is_same_long_long_long_long {
  __init_std_conditional_value0_std_is_base_of_long_long_long_long_std_not_std_is_same_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_long_long_RR_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 extends std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_long_long_RR_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a);
  }
  __init_std_and_std_is_static_castable_long_long_RR_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0_std_is_static_castable_long_long_RR_long_long {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_long_long_RR_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_RR_long_long_value0_std_is_static_castable_long_long_RR_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_long_long_long_long_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_long_long_long_long_RR extends std_is_direct_constructible_new_safe_long_long_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_long_long_long_long_RR(...$a);
  }
  __init_std_is_direct_constructible_new_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_long_long_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_long_long(...$a);
  }
  __init_std_is_destructible_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_long_long(...$a);
  }
  __init_std_is_array_unknown_bounds_long_long(...$a) {
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
class std_integral_constant_unsigned_int_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_int_value0(...$a);
  }
  __init_std_integral_constant_unsigned_int_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_extent_long_long_value0 extends std_integral_constant_unsigned_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_long_long_value0(...$a);
  }
  __init_std_extent_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_int_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_long_long_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_long_long_value0(...$a);
  }
  __init_std_not_std_extent_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_long_long_std_not_std_extent_long_long_value0 extends std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_long_long_std_not_std_extent_long_long_value0(...$a);
  }
  __init_std_and_std_is_array_long_long_std_not_std_extent_long_long_value0(...$a) {
  }
  __dtor() {
    std_is_array_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_long_long_value0_std_is_array_long_long {
  __init_std_conditional_value0_std_not_std_extent_long_long_value0_std_is_array_long_long(...$a) { }
  __dtor() {
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
class std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long extends std_is_function_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a) {
  }
  __dtor() {
    std_is_function_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_long_long_std_is_array_unknown_bounds_long_long_std_is_function_long_long extends std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a);
  }
  __init_std_or_std_is_void_long_long_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_long_long_std_is_function_long_long {
  __init_std_conditional_value0_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_long_long_std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long {
  __init_std_conditional_value0_std_is_void_long_long_std_or_std_is_array_unknown_bounds_long_long_std_is_function_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_long_long(...$a);
  }
  __init_std_is_scalar_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_long_long(...$a);
  }
  __init_std_is_arithmetic_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_integral_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_long_long(...$a);
  }
  __init_std_is_integral_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_long_long(...$a);
  }
  __init_std_is_integral_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_long_long(...$a);
  }
  __init_std_is_floating_point_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_long_long(...$a);
  }
  __init_std_is_floating_point_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_long_long_std_is_floating_point_long_long extends std_is_integral_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_long_long_std_is_floating_point_long_long(...$a);
  }
  __init_std_or_std_is_integral_long_long_std_is_floating_point_long_long(...$a) {
  }
  __dtor() {
    std_is_integral_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_integral_long_long_std_is_floating_point_long_long {
  __init_std_conditional_value1_std_is_integral_long_long_std_is_floating_point_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_enum_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_long_long(...$a);
  }
  __init_std_is_enum_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_long_long(...$a);
  }
  __init_std_is_pointer_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_long_long(...$a);
  }
  __init_std_is_pointer_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_long_long(...$a);
  }
  __init_std_is_member_pointer_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_long_long(...$a);
  }
  __init_std_is_member_pointer_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_long_long(...$a);
  }
  __init_std_is_nullptr_t_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_long_long(...$a);
  }
  __init_std_is_nullptr_t_helper_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_long_long_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long extends std_is_arithmetic_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_long_long_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a);
  }
  __init_std_or_std_is_arithmetic_long_long_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) {
  }
  __dtor() {
    std_is_arithmetic_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long extends std_is_nullptr_t_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a);
  }
  __init_std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long extends std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a);
  }
  __init_std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long extends std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a);
  }
  __init_std_or_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  __init_std_conditional_value0_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_long_long_std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  __init_std_conditional_value0_std_is_pointer_long_long_std_or_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_long_long_std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  __init_std_conditional_value0_std_is_enum_long_long_std_or_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_is_arithmetic_long_long_std_or_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long {
  __init_std_conditional_value1_std_is_arithmetic_long_long_std_or_std_is_enum_long_long_std_is_pointer_long_long_std_is_member_pointer_long_long_std_is_nullptr_t_long_long(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_long_long_std_is_scalar_long_long extends std_is_scalar_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_long_long_std_is_scalar_long_long(...$a);
  }
  __init_std_or_std_is_reference_long_long_std_is_scalar_long_long(...$a) {
  }
  __dtor() {
    std_is_scalar_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_long_long_std_is_scalar_long_long {
  __init_std_conditional_value0_std_is_reference_long_long_std_is_scalar_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_long_long_value0_value1 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_long_long_value0_value1(...$a);
  }
  __init_std_is_destructible_safe_long_long_value0_value1(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_long_long_long_long_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_long_long_long_long_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_RR extends std_is_direct_constructible_impl_long_long_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_RR(...$a);
  }
  __init_std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_long_long_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_long_long_long_long_RR_std_is_destructible_long_long {
  __init_std_conditional_value1_std_is_direct_constructible_impl_long_long_long_long_RR_std_is_destructible_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_long_long_long_long_RR_std_is_direct_constructible_new_safe_long_long_long_long_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_long_long_long_long_RR_std_is_direct_constructible_new_safe_long_long_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_long_long_long_long_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_long_long_long_long_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_long_long_long_long_RR_std_is_nt_constructible_impl_long_long_long_long_RR extends std_is_nt_constructible_impl_long_long_long_long_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_long_long_long_long_RR_std_is_nt_constructible_impl_long_long_long_long_RR(...$a);
  }
  __init_std_and_std_is_constructible_long_long_long_long_RR_std_is_nt_constructible_impl_long_long_long_long_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_long_long_long_long_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_long_long_long_long_RR_std_is_constructible_long_long_long_long_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_long_long_long_long_RR_std_is_constructible_long_long_long_long_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_long_long(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_long_long_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_long_long_long_long_R(...$a);
  }
  __init_std_is_constructible_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_long_long_value0 extends std_is_constructible_long_long_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_long_long_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_long_long_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_long_long_long_long_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_long_long extends std_is_copy_constructible_impl_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_long_long(...$a);
  }
  __init_std_is_copy_constructible_long_long(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_long_long_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_long_long_long_long_R(...$a);
  }
  __init_std_is_direct_constructible_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_long_long_long_long_R extends std_is_direct_constructible_long_long_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_long_long_long_long_R(...$a);
  }
  __init_std_is_constructible_impl_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_long_long_long_long_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_long_long_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_long_long_long_long_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_long_long_R_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_long_long_R_long_long(...$a);
  }
  __init_std_is_static_castable_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_long_long_R_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_long_long_R_long_long(...$a);
  }
  __init_std_is_static_castable_safe_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_long_long_R_long_long extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_long_long_R_long_long(...$a);
  }
  __init_std_is_static_castable_impl_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
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
class std_is_function_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_long_long_R(...$a);
  }
  __init_std_is_function_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_long_long_R_std_is_function_long_long_R extends std_is_function_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_R_std_is_function_long_long_R(...$a);
  }
  __init_std_or_std_is_void_long_long_R_std_is_function_long_long_R(...$a) {
  }
  __dtor() {
    std_is_function_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_long_long_R_std_is_function_long_long_R {
  __init_std_conditional_value0_std_is_void_long_long_R_std_is_function_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_long_long_R_std_is_function_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_long_long_R_std_is_function_long_long_R(...$a);
  }
  __init_std_not_std_or_std_is_void_long_long_R_std_is_function_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_long_long_R_long_long_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_long_long_R_long_long_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_long_long_R_long_long_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long extends std_is_rvalue_reference_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long(...$a);
  }
  __init_std_and_std_is_lvalue_reference_long_long_R_std_is_rvalue_reference_long_long(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_long_long_std_is_lvalue_reference_long_long_R {
  __init_std_conditional_value1_std_is_rvalue_reference_long_long_std_is_lvalue_reference_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 extends std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_long_long_R {
  __init_std_remove_reference_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_long_long_R_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 extends std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_long_long_R_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a);
  }
  __init_std_and_std_is_static_castable_long_long_R_long_long_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0_std_is_static_castable_long_long_R_long_long {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_long_long_R_long_long_value1_std_is_lvalue_to_rvalue_ref_long_long_R_long_long_value0_std_is_static_castable_long_long_R_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_long_long_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_long_long_long_long_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_long_long_long_long_R extends std_is_direct_constructible_new_safe_long_long_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_long_long_long_long_R(...$a);
  }
  __init_std_is_direct_constructible_new_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_long_long_long_long_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_long_long_long_long_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_long_long_long_long_R(...$a);
  }
  __init_std_is_direct_constructible_impl_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_R extends std_is_direct_constructible_impl_long_long_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_R(...$a);
  }
  __init_std_and_std_is_destructible_long_long_std_is_direct_constructible_impl_long_long_long_long_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_long_long_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_long_long_long_long_R_std_is_destructible_long_long {
  __init_std_conditional_value1_std_is_direct_constructible_impl_long_long_long_long_R_std_is_destructible_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_long_long_long_long_R_std_is_direct_constructible_new_safe_long_long_long_long_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_long_long_long_long_R_std_is_direct_constructible_new_safe_long_long_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_long_long_std_is_copy_constructible_long_long extends std_not_std_is_nothrow_move_constructible_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_long_long_std_is_copy_constructible_long_long(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_long_long_std_is_copy_constructible_long_long(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_long_long_std_not_std_is_nothrow_move_constructible_long_long {
  __init_std_conditional_value0_std_is_copy_constructible_long_long_std_not_std_is_nothrow_move_constructible_long_long(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_long_long_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_long_long_P(...$a);
  }
  __init_std_move_iterator_long_long_P(...$a) {
    let $t11;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_long_long_P)) {
      this._M_current = ($t11 = (($a[0]).a[($a[0]).i]).base__c(), $t11 ? {a: $t11.a, i: $t11.i} : null);
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
    return std_move_long_long(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_long_long_P_std_move_iterator_long_long_P {
  __init_std_conditional_value0_long_long_P_std_move_iterator_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_has_iterator_category_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_cv_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  __init_std_remove_cv_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  __init_std_remove_volatile_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_const_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  __init_std_remove_const_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_Wrap_type_std_random_access_iterator_tag {
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_Wrap_type_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1 {
  __init_std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long extends std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_iterator_traits_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1.prototype.__dtor.call(this);
  }
}
class std_declval_protector_long_long_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_long_long_RR(...$a);
  }
  __init_std_declval_protector_long_long_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
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
class std_is_move_iterator_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  __init_std_is_move_iterator_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value0 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__it], i: 0});
  }
}
class std_Miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long extends std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_Miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_is_normal_iterator_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long {
  __init_std_is_normal_iterator_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    let $t12, $t13;
    return ($t12 = __it.base__c(), $t13 = ($t12 ? $t12.a[$t12.i] : null), $t13 && $t13.a !== undefined ? {a: $t13.a, i: $t13.i} : $t13);
  }
}
class std_Niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long extends std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_Niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1.prototype.__dtor.call(this);
  }
}
class std_is_pointer_long_long_P {
  __init_std_is_pointer_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_are_same_long_long_long_long {
  __init_std_are_same_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_copy_move_backward_value1_value1_std_random_access_iterator_tag {
  __init_std_copy_move_backward_value1_value1_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
  static __copy_move_b(__first, __last, __result) {
    let $t14;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(8, ((_Num) >>> 0))) >>> 0)) / 8));
    }
    return ($t14 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t14 ? {a: $t14.a, i: $t14.i} : null);
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_lg__long(__n) {
  return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_bool(__os, __n) {
  (__os.a[__os.i])._M_put(6, (__n ? ((1) | 0) : ((0) | 0)), null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int(__os, __n) {
  (__os.a[__os.i])._M_put(1, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(__os, __n) {
  (__os.a[__os.i])._M_putll(3, __n);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(__os, __n) {
  (__os.a[__os.i])._M_putll(2, BigInt.asIntN(64, __n));
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
function operatornew__unsigned_int(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_operator__std_basic_istream_char_std_char_traits_char_R_long_longR(__in, __v) {
  __v.a[__v.i] = (__in.a[__in.i])._M_read_int();
  return __in;
}
function std_swap_long_long(__a, __b) {
  let $t15, $t16, $t17;
  let __tmp = {v: ($t15 = std_move_long_long(__a), $t15.a[$t15.i])};
  __a.a[__a.i] = ($t16 = std_move_long_long(__b), $t16.a[$t16.i]);
  __b.a[__b.i] = ($t17 = std_move_long_long({a: __tmp, i: "v"}), $t17.a[$t17.i]);
}
function std_operator_3_long_long_P_long_long_P(__x, __y) {
  return (!(std_operator_3_long_long_P_long_long_P_1030(__x, __y)));
}
function cmp(a, b) {
  return (a > b);
}
function main() {
  let $t18, $t19, $t20, $t21, $t22, $t23;
  let mx = 9223372036854775807n;
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (mx) + (1n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (BigInt.asIntN(64, (BigInt.asIntN(64, -(9223372036854775807n))) - (1n))) - (1n))), {a: [std_endl], i: 0});
  let um = 18446744073709551615n;
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: std_cout, i: "v"}, BigInt.asUintN(64, (um) + (1n))), {a: [32, 0], i: 0}), BigInt.asUintN(64, (um) * (3n))), {a: [32, 0], i: 0}), ((um) >> (1n))), {a: [std_endl], i: 0});
  let n = BigInt(((-(7)) | 0));
  let k = 2;
  let u = ((5) >>> 0);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (n) / (BigInt(k)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) % (BigInt(k)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) / (BigInt(((-(2)) | 0))))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) % (BigInt(((-(2)) | 0))))), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_bool(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (n) + (BigInt(u)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (BigInt.asIntN(64, (n) * (BigInt(k)))) - (1n))), {a: [32, 0], i: 0}), (n < BigInt(u))), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (n) << (40n))), {a: [32, 0], i: 0}), ((n) >> (1n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (1n) << (62n))), {a: [32, 0], i: 0}), BigInt.asUintN(64, (1n) << (63n))), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (n) & (255n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) | (3n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) ^ (BigInt(((-(1)) | 0))))), {a: [32, 0], i: 0}), BigInt.asIntN(64, ~(n))), {a: [std_endl], i: 0});
  let h = 14695981039346656037n;
  for (let i = 0; (i < 5); ($t18 = i, i = (($t18 + 1) | 0), $t18)) {
     {
      h = BigInt.asUintN(64, (h) ^ (BigInt.asUintN(64, BigInt((((i) + (1)) | 0)))));
      h = BigInt.asUintN(64, (h) * (1099511628211n));
    }
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: std_cout, i: "v"}, h), {a: [std_endl], i: 0});
  let v = new std_vector_long_long_std_allocator_long_long();
  let x = {v: 0n};
  while ((($t19 = std_operator__std_basic_istream_char_std_char_traits_char_R_long_longR({a: std_cin, i: "v"}, {a: x, i: "v"}), $t19.a[$t19.i]))._conv__c()) {
    v.push_back({a: x, i: "v"});
  }
  std_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(v.begin(), v.end(), cmp);
  for (let i = ((0) >>> 0); (i < v.size__c()); ($t20 = i, i = (($t20 + 1) >>> 0), $t20)) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, ($t21 = v.op_index(i), $t21.a[$t21.i])), (((((i) + (((1) >>> 0))) >>> 0) < v.size__c()) ? {a: [32, 0], i: 0} : {a: [10, 0], i: 0}));
  }
  let s = 0n;
  for (let i = ((0) >>> 0); (i < v.size__c()); ($t22 = i, i = (($t22 + 1) >>> 0), $t22)) {
    s = BigInt.asIntN(64, (s) + (($t23 = v.op_index(i), $t23.a[$t23.i])));
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, s), {a: [std_endl], i: 0});
  let ci = ((-(1)) | 0);
  let cu = ((ci) >>> 0);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int({a: std_cout, i: "v"}, cu), {a: [32, 0], i: 0}), (((cu) + (((1) >>> 0))) >>> 0)), {a: [32, 0], i: 0}), BigInt.asUintN(64, BigInt(ci))), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_bool(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (BigInt(cu)) * (2n))), {a: [32, 0], i: 0}), (BigInt(ci) < 0n)), {a: [std_endl], i: 0});
  switch (s) {
    case 0n:
      std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP({a: std_cout, i: "v"}, {a: [122, 101, 114, 111, 0], i: 0}), {a: [std_endl], i: 0});
    break;
    default:
      std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP({a: std_cout, i: "v"}, {a: [110, 122, 0], i: 0}), {a: [std_endl], i: 0});
  }
  return 0;
}
function std_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  if (gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
    }
  }
}
function gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long(__lhs, __rhs) {
  let $t24, $t25, $t26, $t27, $t28, $t29;
  return ($t28 = (($t26 = (__lhs.a[__lhs.i]).base__c(), $t26) ? (($t26 = (__lhs.a[__lhs.i]).base__c(), $t26)).a[(($t26 = (__lhs.a[__lhs.i]).base__c(), $t26)).i] : null), $t29 = (($t27 = (__rhs.a[__rhs.i]).base__c(), $t27) ? (($t27 = (__rhs.a[__rhs.i]).base__c(), $t27)).a[(($t27 = (__rhs.a[__rhs.i]).base__c(), $t27)).i] : null), (!($t28 === $t29 || ($t28 && $t29 && $t28.a === $t29.a && $t28.i === $t29.i))));
}
function gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883(__lhs, __rhs) {
  let $t30, $t31, $t32, $t33, $t34, $t35;
  return ($t34 = (($t32 = (__lhs.a[__lhs.i]).base__c(), $t32) ? (($t32 = (__lhs.a[__lhs.i]).base__c(), $t32)).a[(($t32 = (__lhs.a[__lhs.i]).base__c(), $t32)).i] : null), $t35 = (($t33 = (__rhs.a[__rhs.i]).base__c(), $t33) ? (($t33 = (__rhs.a[__rhs.i]).base__c(), $t33)).a[(($t33 = (__rhs.a[__rhs.i]).base__c(), $t33)).i] : null), (($t34 ? $t34.i : 0) - ($t35 ? $t35.i : 0)));
}
function std_introsort_loop_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_long_func_bool_long_long_long_long_P(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
      std_introsort_loop_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __depth_limit, __comp);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  if ((gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), __comp);
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
  }
}
function std_forward_1_long_long(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_long_long_P_long_long_P_std_allocator_long_long(__first, __last, __result, __alloc) {
  let $t36;
  return ($t36 = std_uninitialized_copy_a_std_move_iterator_long_long_P_long_long_P_std_allocator_long_long(std_make_move_if_noexcept_iterator_long_long_P_std_move_iterator_long_long_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_long_long_P_std_move_iterator_long_long_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t36 ? {a: $t36.a, i: $t36.i} : null);
}
function std_Destroy_2_long_long_P_std_allocator_long_long(__first, __last, __alloc) {
  let $t37;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_long_long.destroy(__alloc, ($t37 = std_addressof_long_long(__first), $t37 ? {a: $t37.a, i: $t37.i} : null));
  }
}
function std_partial_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__middle], i: 0}), __comp);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_long_long_func_bool_long_long_long_long_P(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  let $t38, $t39, $t40;
  if (gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t38 = std_move_long_long(__i.op_mul__c()), $t38.a[$t38.i])};
          std_move_backward_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t39 = __first.op_mul__c(), $t39.a[$t39.i] = ($t40 = std_move_long_long({a: __val, i: "v"}), $t40.a[$t40.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}); gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}), __comp);
  }
}
function std_max_unsigned_int(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_declval_long_long_RR() {
  return std_declval_protector_long_long_RR.__delegate();
}
function std_declval_long_long_R() {
  return std_declval_protector_long_long_R.__delegate();
}
function std_make_move_if_noexcept_iterator_long_long_P_std_move_iterator_long_long_P(__i) {
  return new std_move_iterator_long_long_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_long_long_P_long_long_P_std_allocator_long_long(__first, __last, __result, __alloc) {
  let $t41;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_long_long_P_long_long_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_long_long.construct(__alloc, ($t41 = std_addressof_long_long(__cur), $t41 ? {a: $t41.a, i: $t41.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_long_long_P_std_allocator_long_long((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_addressof_long_long(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_heap_select_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__middle], i: 0}), __comp);
  for (let __i = new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__middle], i: 0}); gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_829({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__i], i: 0}), __comp);
    }
  }
}
function std_sort_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  while ((gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}), __comp);
    }
  }
}
function std_move_median_first_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__a, __b, __c, __comp) {
  if (__comp((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__b.op_mul__c()).a[(__b.op_mul__c()).i])) {
     {
      if (__comp((__b.op_mul__c()).a[(__b.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__a], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__b], i: 0}));
      }
      else {
        if (__comp((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
          std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__a], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__c], i: 0}));
        }
      }
    }
  }
  else {
    if (__comp((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
      return;
    }
    else {
      if (__comp((__b.op_mul__c()).a[(__b.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__a], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__a], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__b], i: 0}));
      }
    }
  }
}
function std_unguarded_partition_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_long_long_func_bool_long_long_long_long_P(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp((__first.op_mul__c()).a[(__first.op_mul__c()).i], __pivot.a[__pivot.i])) {
        __first.op_inc();
      }
      __last.op_dec();
      while (__comp(__pivot.a[__pivot.i], (__last.op_mul__c()).a[(__last.op_mul__c()).i])) {
        __last.op_dec();
      }
      if ((!(gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_829({a: [__first], i: 0}, {a: [__last], i: 0})))) {
        return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0});
      }
      std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0}));
      __first.op_inc();
    }
  }
}
function gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_804(__lhs, __rhs) {
  let $t42, $t43, $t44, $t45, $t46, $t47;
  return ($t46 = (($t44 = (__lhs.a[__lhs.i]).base__c(), $t44) ? (($t44 = (__lhs.a[__lhs.i]).base__c(), $t44)).a[(($t44 = (__lhs.a[__lhs.i]).base__c(), $t44)).i] : null), $t47 = (($t45 = (__rhs.a[__rhs.i]).base__c(), $t45) ? (($t45 = (__rhs.a[__rhs.i]).base__c(), $t45)).a[(($t45 = (__rhs.a[__rhs.i]).base__c(), $t45)).i] : null), ($t46 === $t47 || ($t46 && $t47 && $t46.a === $t47.a && $t46.i === $t47.i)));
}
function std_move_long_long(__t) {
  return __t;
}
function std_move_backward_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(std_miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0})), new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__result], i: 0}));
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__last, __comp) {
  let $t48, $t49, $t50, $t51, $t52;
  let __val = {v: ($t48 = std_move_long_long(__last.op_mul__c()), $t48.a[$t48.i])};
  let __next = new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0});
  __next.op_dec();
  while (__comp(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t49 = __last.op_mul__c(), $t49.a[$t49.i] = ($t50 = std_move_long_long(__next.op_mul__c()), $t50.a[$t50.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t51 = __last.op_mul__c(), $t51.a[$t51.i] = ($t52 = std_move_long_long({a: __val, i: "v"}), $t52.a[$t52.i]));
}
function std_make_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __comp) {
  let $t53, $t54, $t55, $t56;
  if ((gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t53 = std_move_long_long((($t54 = __first.op_add__c({a: [__parent], i: 0}), $t54)).op_mul__c()), $t53.a[$t53.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_int_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), __parent, __len, ($t55 = std_move_long_long({a: __value, i: "v"}), $t55.a[$t55.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t56 = __parent, __parent = (($t56 - 1) | 0), $t56);
    }
  }
}
function gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_829(__lhs, __rhs) {
  let $t57, $t58, $t59, $t60, $t61, $t62;
  return ($t61 = (($t59 = (__lhs.a[__lhs.i]).base__c(), $t59) ? (($t59 = (__lhs.a[__lhs.i]).base__c(), $t59)).a[(($t59 = (__lhs.a[__lhs.i]).base__c(), $t59)).i] : null), $t62 = (($t60 = (__rhs.a[__rhs.i]).base__c(), $t60) ? (($t60 = (__rhs.a[__rhs.i]).base__c(), $t60)).a[(($t60 = (__rhs.a[__rhs.i]).base__c(), $t60)).i] : null), (($t61 ? $t61.i : 0) < ($t62 ? $t62.i : 0)));
}
function std_pop_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_func_bool_long_long_long_long_P(__first, __last, __result, __comp) {
  let $t63, $t64, $t65, $t66;
  let __value = {v: ($t63 = std_move_long_long(__result.op_mul__c()), $t63.a[$t63.i])};
  ($t64 = __result.op_mul__c(), $t64.a[$t64.i] = ($t65 = std_move_long_long(__first.op_mul__c()), $t65.a[$t65.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_int_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), 0, gnu_cxx_operator_long_long_P_long_long_P_std_vector_long_long_std_allocator_long_long_883({a: [__last], i: 0}, {a: [__first], i: 0}), ($t66 = std_move_long_long({a: __value, i: "v"}), $t66.a[$t66.i]), __comp);
}
function std_iter_swap_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(__a, __b) {
  std_swap_long_long(__a.op_mul__c(), __b.op_mul__c());
}
function std_miter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value0._S_base(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__it], i: 0}));
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(__first, __last, __result) {
  let $t67, $t68, $t69;
  return new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [std_copy_move_backward_a_value1_long_long_P_long_long_P(($t67 = std_niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0})), $t67 ? {a: $t67.a, i: $t67.i} : null), ($t68 = std_niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__last], i: 0})), $t68 ? {a: $t68.a, i: $t68.i} : null), ($t69 = std_niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__result], i: 0})), $t69 ? {a: $t69.a, i: $t69.i} : null))], i: 0});
}
function std_operator_3_long_long_P_long_long_P_1030(__x, __y) {
  let $t70, $t71, $t72, $t73;
  return ($t72 = ($t70 = (__x.a[__x.i]).base__c(), $t70), $t73 = ($t71 = (__y.a[__y.i]).base__c(), $t71), ($t72 === $t73 || ($t72 && $t73 && $t72.a === $t73.a && $t72.i === $t73.i)));
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_int_long_long_func_bool_long_long_long_long_P(__first, __holeIndex, __len, __value, __comp) {
  let $t74, $t75, $t76, $t77, $t78, $t79, $t80, $t81, $t82, $t83, $t84, $t85, $t86, $t87;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp(($t74 = (($t75 = __first.op_add__c({a: [__secondChild], i: 0}), $t75)).op_mul__c(), $t74.a[$t74.i]), ($t76 = (($t77 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t77)).op_mul__c(), $t76.a[$t76.i]))) {
        ($t78 = __secondChild, __secondChild = (($t78 - 1) | 0), $t78);
      }
      ($t79 = (($t82 = __first.op_add__c({a: [__holeIndex], i: 0}), $t82)).op_mul__c(), $t79.a[$t79.i] = ($t80 = std_move_long_long((($t81 = __first.op_add__c({a: [__secondChild], i: 0}), $t81)).op_mul__c()), $t80.a[$t80.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t83 = (($t86 = __first.op_add__c({a: [__holeIndex], i: 0}), $t86)).op_mul__c(), $t83.a[$t83.i] = ($t84 = std_move_long_long((($t85 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t85)).op_mul__c()), $t84.a[$t84.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_int_long_long_func_bool_long_long_long_long_P(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__first], i: 0}), __holeIndex, __topIndex, ($t87 = std_move_long_long({a: __value, i: "v"}), $t87.a[$t87.i]), __comp);
}
function std_niter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long(__it) {
  let $t88;
  return ($t88 = std_Iter_base_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_value1._S_base(new gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long({a: [__it], i: 0})), $t88 ? {a: $t88.a, i: $t88.i} : null);
}
function std_copy_move_backward_a_value1_long_long_P_long_long_P(__first, __last, __result) {
  let $t89;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t89 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t89 ? {a: $t89.a, i: $t89.i} : null);
}
function std_push_heap_1_gnu_cxx_normal_iterator_long_long_P_std_vector_long_long_std_allocator_long_long_int_long_long_func_bool_long_long_long_long_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t90, $t91, $t92, $t93, $t94, $t95, $t96, $t97, $t98;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp(($t90 = (($t91 = __first.op_add__c({a: [__parent], i: 0}), $t91)).op_mul__c(), $t90.a[$t90.i]), __value.v))) {
     {
      ($t92 = (($t95 = __first.op_add__c({a: [__holeIndex], i: 0}), $t95)).op_mul__c(), $t92.a[$t92.i] = ($t93 = std_move_long_long((($t94 = __first.op_add__c({a: [__parent], i: 0}), $t94)).op_mul__c()), $t93.a[$t93.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t96 = (($t98 = __first.op_add__c({a: [__holeIndex], i: 0}), $t98)).op_mul__c(), $t96.a[$t96.i] = ($t97 = std_move_long_long({a: __value, i: "v"}), $t97.a[$t97.i]));
}
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
let std_cout = {v: new std_basic_ostream_char_std_char_traits_char(1)};
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = {v: new std_basic_istream_char_std_char_traits_char(0)};
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
main();
