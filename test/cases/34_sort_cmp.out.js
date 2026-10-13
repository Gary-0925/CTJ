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
  constructor(...$a) {
    this.__init_std_input_iterator_tag(...$a);
  }
  __init_std_input_iterator_tag(...$a) {
  }
  __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  constructor(...$a) {
    super(...[]);
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
    super(...[]);
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
    super(...[]);
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
    if ((__n > this.max_size__c())) {
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
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int(...$a) {
    this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0]);
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
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])]);
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t3, $t4;
    this._M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(($t3 = ({a: $a[0], i: 0}), $t3 ? {a: $t3.a, i: $t3.i} : null), ($t4 = ({a: $a[0], i: ($a[0]).length}), $t4 ? {a: $t4.a, i: $t4.i} : null), new std_random_access_iterator_tag());
  }
  __dtor() {
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_start"});
  }
  end() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_finish"});
  }
  size__c() {
    return ((((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
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
  _M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__first);
    }
  }
  emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__args_0) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_int(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(std_forward_1_int(__args_0));
    }
  }
  _M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(__args_0) {
    let $t6, $t7, $t8, $t9, $t10;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t6 = this._M_allocate(__len), $t6 ? {a: $t6.a, i: $t6.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl"}, ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t7 ? {a: $t7.a, i: $t7.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t8 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t8 ? {a: $t8.a, i: $t8.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int({a: this, i: "_M_impl"}, ($t9 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t9 ? {a: $t9.a, i: $t9.i} : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0))) >>> 0));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t10 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t10 ? {a: $t10.a, i: $t10.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__a, __p, __arg) {
    (__a.a[__a.i]).construct__gnu_cxx_new_allocator_int_construct_int_int__rv((__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return (__a.a[__a.i]).max_size__c();
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__a, __p) {
    (__a.a[__a.i]).destroy__gnu_cxx_new_allocator_int_destroy_int((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int_rebind_int {
  __init_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
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
  size__c() {
    return this._M_len;
  }
  begin__c() {
    return (this._M_array ? {a: this._M_array.a, i: this._M_array.i} : null);
  }
  end__c() {
    let $t11, $t12, $t13;
    return ($t13 = ($t12 = ($t11 = this.begin__c(), $t11), ({a: ($t12 ? $t12.a : null), i: ($t12 ? $t12.i : 0) + (this.size__c())})), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t14, $t15;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = (((($a[0]).a[($a[0]).i])._M_current) ? {a: ((($a[0]).a[($a[0]).i])._M_current).a, i: ((($a[0]).a[($a[0]).i])._M_current).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t14 = (($a[0]).a[($a[0]).i]).base__c(), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
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
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) + (__n.a[__n.i])})], i: 0});
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current"};
  }
  op_assign(o) {
    this._M_current = (((o.a[o.i])._M_current) ? {a: ((o.a[o.i])._M_current).a, i: ((o.a[o.i])._M_current).i} : null);
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
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
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
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_int_P(...$a);
  }
  __init_std_move_iterator_int_P(...$a) {
    let $t16;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t16 = (($a[0]).a[($a[0]).i]).base__c(), $t16 ? {a: $t16.a, i: $t16.i} : null);
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
    return std_move_int(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
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
    let $t17, $t18;
    return ($t17 = __it.base__c(), $t18 = ($t17 ? $t17.a[$t17.i] : null), $t18 && $t18.a !== undefined ? {a: $t18.a, i: $t18.i} : $t18);
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
    let $t19;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
    }
    return ($t19 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t19 ? {a: $t19.a, i: $t19.i} : null);
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_lg__long(__n) {
  return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
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
function std_swap_int(__a, __b) {
  let $t20, $t21, $t22;
  let __tmp = {v: ($t20 = std_move_int(__a), $t20.a[$t20.i])};
  __a.a[__a.i] = ($t21 = std_move_int(__b), $t21.a[$t21.i]);
  __b.a[__b.i] = ($t22 = std_move_int({a: __tmp, i: "v"}), $t22.a[$t22.i]);
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_2(__x, __y)));
}
function cmp(a, b) {
  return (a > b);
}
function main() {
  let $t23, $t24, $t25, $t26, $t27, $t28;
  let v = new std_vector_int_std_allocator_int([3, 1, 4, 1, 5, 9, 2, 6], {a: [new std_allocator_int()], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(v.begin(), v.end(), cmp);
  for (let i = ((0) >>> 0); (i < v.size__c()); ($t23 = i, i = (($t23 + 1) >>> 0), $t23)) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, ($t24 = v.op_index(i), $t24.a[$t24.i])), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let a = [5, 2, 8, 1, 9];
  std_sort_1_int_P_func_bool_int_int_P({a: a, i: 0}, ($t25 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (5)}), $t25 ? {a: $t25.a, i: $t25.i} : null), cmp);
  for (let i = 0; (i < 5); ($t26 = i, i = (($t26 + 1) | 0), $t26)) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, a[i]), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(v.begin(), v.end(), {op_call__c: (x, y) => {
    return (x < y);
  }});
  for (let i = ((0) >>> 0); (i < v.size__c()); ($t27 = i, i = (($t27 + 1) >>> 0), $t27)) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, ($t28 = v.op_index(i), $t28.a[$t28.i])), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  return 0;
}
function std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_1_int_P_long_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0), __comp);
      std_final_insertion_sort_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
}
function std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t29, $t30, $t31, $t32, $t33, $t34;
  return ($t33 = (($t31 = (__lhs.a[__lhs.i]).base__c(), $t31) ? (($t31 = (__lhs.a[__lhs.i]).base__c(), $t31)).a[(($t31 = (__lhs.a[__lhs.i]).base__c(), $t31)).i] : null), $t34 = (($t32 = (__rhs.a[__rhs.i]).base__c(), $t32) ? (($t32 = (__rhs.a[__rhs.i]).base__c(), $t32)).a[(($t32 = (__rhs.a[__rhs.i]).base__c(), $t32)).i] : null), (!($t33 === $t34 || ($t33 && $t34 && $t33.a === $t34.a && $t33.i === $t34.i))));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2(__lhs, __rhs) {
  let $t35, $t36, $t37, $t38, $t39, $t40;
  return ($t39 = (($t37 = (__lhs.a[__lhs.i]).base__c(), $t37) ? (($t37 = (__lhs.a[__lhs.i]).base__c(), $t37)).a[(($t37 = (__lhs.a[__lhs.i]).base__c(), $t37)).i] : null), $t40 = (($t38 = (__rhs.a[__rhs.i]).base__c(), $t38) ? (($t38 = (__rhs.a[__rhs.i]).base__c(), $t38)).a[(($t38 = (__rhs.a[__rhs.i]).base__c(), $t38)).i] : null), (($t39 ? $t39.i : 0) - ($t40 ? $t40.i : 0)));
}
function std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_func_bool_int_int_P(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit, __comp);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_1_int_P_long_func_bool_int_int_P(__first, __last, __depth_limit, __comp) {
  let $t41;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = ($t41 = std_unguarded_partition_pivot_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp), $t41 ? {a: $t41.a, i: $t41.i} : null);
      std_introsort_loop_1_int_P_long_func_bool_int_int_P((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit, __comp);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
    }
  }
}
function std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_0(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit, __comp);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), __comp);
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  }
}
function std_final_insertion_sort_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  let $t42, $t43;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      std_insertion_sort_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), ($t42 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t42 ? {a: $t42.a, i: $t42.i} : null), __comp);
      std_unguarded_insertion_sort_1_int_P_func_bool_int_int_P(($t43 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t43 ? {a: $t43.a, i: $t43.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
  else {
    std_insertion_sort_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  }
}
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), __comp);
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  }
}
function std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
}
function std_partial_sort_1_int_P_func_bool_int_int_P(__first, __middle, __last, __comp) {
  std_heap_select_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  std_sort_heap_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
}
function std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_func_bool_int_int_P(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_unguarded_partition_pivot_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  let $t44, $t45, $t46, $t47;
  let __mid = ($t44 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t44 ? {a: $t44.a, i: $t44.i} : null);
  std_move_median_first_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t45 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t45 ? {a: $t45.a, i: $t45.i} : null), __comp);
  return ($t47 = std_unguarded_partition_1_int_P_int_func_bool_int_int_P(($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t46 ? {a: $t46.a, i: $t46.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first, __comp), $t47 ? {a: $t47.a, i: $t47.i} : null);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_lambda_0(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let $t48, $t49, $t50;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t48 = std_move_int(__i.op_mul__c()), $t48.a[$t48.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t49 = __first.op_mul__c(), $t49.a[$t49.i] = ($t50 = std_move_int({a: __val, i: "v"}), $t50.a[$t50.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_insertion_sort_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  let $t51, $t52, $t53, $t54;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t51 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t51 ? {a: $t51.a, i: $t51.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if (__comp(__i.a[__i.i], __first.a[__first.i])) {
         {
          let __val = {v: ($t52 = std_move_int(__i), $t52.a[$t52.i])};
          std_move_backward_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t53 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t53 ? {a: $t53.a, i: $t53.i} : null));
          __first.a[__first.i] = ($t54 = std_move_int({a: __val, i: "v"}), $t54.a[$t54.i]);
        }
      }
      else {
        std_unguarded_linear_insert_1_int_P_func_bool_int_int_P((__i ? {a: __i.a, i: __i.i} : null), __comp);
      }
    }
  }
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  let $t55, $t56, $t57;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t55 = std_move_int(__i.op_mul__c()), $t55.a[$t55.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t56 = __first.op_mul__c(), $t56.a[$t56.i] = ($t57 = std_move_int({a: __val, i: "v"}), $t57.a[$t57.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
  }
}
function std_unguarded_insertion_sort_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_1_int_P_func_bool_int_int_P((__i ? {a: __i.a, i: __i.i} : null), __comp);
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
  }
}
function std_forward_1_int(__t) {
  return __t;
}
function std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
    }
  }
}
function std_heap_select_1_int_P_func_bool_int_int_P(__first, __middle, __last, __comp) {
  std_make_heap_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
  for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
    if (__comp(__i.a[__i.i], __first.a[__first.i])) {
      std_pop_heap_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null), __comp);
    }
  }
}
function std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
    }
  }
}
function std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_heap_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_1_int_P_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
}
function std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__a, __b, __c, __comp) {
  if (__comp((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__b.op_mul__c()).a[(__b.op_mul__c()).i])) {
     {
      if (__comp((__b.op_mul__c()).a[(__b.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
      else {
        if (__comp((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
          std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
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
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
    }
  }
}
function std_move_median_first_1_int_P_func_bool_int_int_P(__a, __b, __c, __comp) {
  if (__comp(__a.a[__a.i], __b.a[__b.i])) {
     {
      if (__comp(__b.a[__b.i], __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
      else {
        if (__comp(__a.a[__a.i], __c.a[__c.i])) {
          std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
        }
      }
    }
  }
  else {
    if (__comp(__a.a[__a.i], __c.a[__c.i])) {
      return;
    }
    else {
      if (__comp(__b.a[__b.i], __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
      }
      else {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
    }
  }
}
function std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__a, __b, __c, __comp) {
  if (__comp.op_call__c((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__b.op_mul__c()).a[(__b.op_mul__c()).i])) {
     {
      if (__comp.op_call__c((__b.op_mul__c()).a[(__b.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
      else {
        if (__comp.op_call__c((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
          std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
        }
      }
    }
  }
  else {
    if (__comp.op_call__c((__a.op_mul__c()).a[(__a.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
      return;
    }
    else {
      if (__comp.op_call__c((__b.op_mul__c()).a[(__b.op_mul__c()).i], (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
    }
  }
}
function std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_func_bool_int_int_P(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp((__first.op_mul__c()).a[(__first.op_mul__c()).i], __pivot.a[__pivot.i])) {
        __first.op_inc();
      }
      __last.op_dec();
      while (__comp(__pivot.a[__pivot.i], (__last.op_mul__c()).a[(__last.op_mul__c()).i])) {
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
function std_unguarded_partition_1_int_P_int_func_bool_int_int_P(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp(__first.a[__first.i], __pivot.a[__pivot.i])) {
        ++__first.i;
      }
      --__last.i;
      while (__comp(__pivot.a[__pivot.i], __last.a[__last.i])) {
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
function std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_lambda_0(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp.op_call__c((__first.op_mul__c()).a[(__first.op_mul__c()).i], __pivot.a[__pivot.i])) {
        __first.op_inc();
      }
      __last.op_dec();
      while (__comp.op_call__c(__pivot.a[__pivot.i], (__last.op_mul__c()).a[(__last.op_mul__c()).i])) {
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
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3(__lhs, __rhs) {
  let $t58, $t59, $t60, $t61, $t62, $t63;
  return ($t62 = (($t60 = (__lhs.a[__lhs.i]).base__c(), $t60) ? (($t60 = (__lhs.a[__lhs.i]).base__c(), $t60)).a[(($t60 = (__lhs.a[__lhs.i]).base__c(), $t60)).i] : null), $t63 = (($t61 = (__rhs.a[__rhs.i]).base__c(), $t61) ? (($t61 = (__rhs.a[__rhs.i]).base__c(), $t61)).a[(($t61 = (__rhs.a[__rhs.i]).base__c(), $t61)).i] : null), ($t62 === $t63 || ($t62 && $t63 && $t62.a === $t63.a && $t62.i === $t63.i)));
}
function std_move_int(__t) {
  return __t;
}
function std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0}));
}
function std_move_backward_int_P_int_P(__first, __last, __result) {
  let $t64, $t65, $t66;
  return ($t66 = std_copy_move_backward_a2_value1_int_P_int_P(($t64 = std_miter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t64 ? {a: $t64.a, i: $t64.i} : null), ($t65 = std_miter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t65 ? {a: $t65.a, i: $t65.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t66 ? {a: $t66.a, i: $t66.i} : null);
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__last, __comp) {
  let $t67, $t68, $t69, $t70, $t71;
  let __val = {v: ($t67 = std_move_int(__last.op_mul__c()), $t67.a[$t67.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t68 = __last.op_mul__c(), $t68.a[$t68.i] = ($t69 = std_move_int(__next.op_mul__c()), $t69.a[$t69.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t70 = __last.op_mul__c(), $t70.a[$t70.i] = ($t71 = std_move_int({a: __val, i: "v"}), $t71.a[$t71.i]));
}
function std_unguarded_linear_insert_1_int_P_func_bool_int_int_P(__last, __comp) {
  let $t72, $t73, $t74;
  let __val = {v: ($t72 = std_move_int(__last), $t72.a[$t72.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while (__comp(__val.v, __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t73 = std_move_int(__next), $t73.a[$t73.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t74 = std_move_int({a: __val, i: "v"}), $t74.a[$t74.i]);
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__last, __comp) {
  let $t75, $t76, $t77, $t78, $t79;
  let __val = {v: ($t75 = std_move_int(__last.op_mul__c()), $t75.a[$t75.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp.op_call__c(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t76 = __last.op_mul__c(), $t76.a[$t76.i] = ($t77 = std_move_int(__next.op_mul__c()), $t77.a[$t77.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t78 = __last.op_mul__c(), $t78.a[$t78.i] = ($t79 = std_move_int({a: __val, i: "v"}), $t79.a[$t79.i]));
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t80;
  return ($t80 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t80 ? {a: $t80.a, i: $t80.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t81;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__alloc, ($t81 = std_addressof_int(__first), $t81 ? {a: $t81.a, i: $t81.i} : null));
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let $t82, $t83, $t84, $t85;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t82 = std_move_int((($t83 = __first.op_add__c({a: [__parent], i: 0}), $t83)).op_mul__c()), $t82.a[$t82.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t84 = std_move_int({a: __value, i: "v"}), $t84.a[$t84.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t85 = __parent, __parent = (($t85 - 1) | 0), $t85);
    }
  }
}
function std_make_heap_1_int_P_func_bool_int_int_P(__first, __last, __comp) {
  let $t86, $t87, $t88;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t86 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t86.a[$t86.i])};
      std_adjust_heap_1_int_P_long_int_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t87 = std_move_int({a: __value, i: "v"}), $t87.a[$t87.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t88 = __parent, __parent = (($t88 - 1) | 0), $t88);
    }
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __comp) {
  let $t89, $t90, $t91, $t92;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t89 = std_move_int((($t90 = __first.op_add__c({a: [__parent], i: 0}), $t90)).op_mul__c()), $t89.a[$t89.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t91 = std_move_int({a: __value, i: "v"}), $t91.a[$t91.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t92 = __parent, __parent = (($t92 - 1) | 0), $t92);
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4(__lhs, __rhs) {
  let $t93, $t94, $t95, $t96, $t97, $t98;
  return ($t97 = (($t95 = (__lhs.a[__lhs.i]).base__c(), $t95) ? (($t95 = (__lhs.a[__lhs.i]).base__c(), $t95)).a[(($t95 = (__lhs.a[__lhs.i]).base__c(), $t95)).i] : null), $t98 = (($t96 = (__rhs.a[__rhs.i]).base__c(), $t96) ? (($t96 = (__rhs.a[__rhs.i]).base__c(), $t96)).a[(($t96 = (__rhs.a[__rhs.i]).base__c(), $t96)).i] : null), (($t97 ? $t97.i : 0) < ($t98 ? $t98.i : 0)));
}
function std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __result, __comp) {
  let $t99, $t100, $t101, $t102;
  let __value = {v: ($t99 = std_move_int(__result.op_mul__c()), $t99.a[$t99.i])};
  ($t100 = __result.op_mul__c(), $t100.a[$t100.i] = ($t101 = std_move_int(__first.op_mul__c()), $t101.a[$t101.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t102 = std_move_int({a: __value, i: "v"}), $t102.a[$t102.i]), __comp);
}
function std_pop_heap_1_int_P_func_bool_int_int_P(__first, __last, __result, __comp) {
  let $t103, $t104, $t105;
  let __value = {v: ($t103 = std_move_int(__result), $t103.a[$t103.i])};
  __result.a[__result.i] = ($t104 = std_move_int(__first), $t104.a[$t104.i]);
  std_adjust_heap_1_int_P_long_int_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t105 = std_move_int({a: __value, i: "v"}), $t105.a[$t105.i]), __comp);
}
function std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_0(__first, __last, __result, __comp) {
  let $t106, $t107, $t108, $t109;
  let __value = {v: ($t106 = std_move_int(__result.op_mul__c()), $t106.a[$t106.i])};
  ($t107 = __result.op_mul__c(), $t107.a[$t107.i] = ($t108 = std_move_int(__first.op_mul__c()), $t108.a[$t108.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t109 = std_move_int({a: __value, i: "v"}), $t109.a[$t109.i]), __comp);
}
function std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b) {
  std_swap_int(__a.op_mul__c(), __b.op_mul__c());
}
function std_iter_swap_int_P_int_P(__a, __b) {
  std_swap_int(__a, __b);
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0}));
}
function std_miter_base_int_P(__it) {
  let $t110;
  return ($t110 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t110 ? {a: $t110.a, i: $t110.i} : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t111, $t112, $t113;
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [std_copy_move_backward_a_value1_int_P_int_P(($t111 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), $t111 ? {a: $t111.a, i: $t111.i} : null), ($t112 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), $t112 ? {a: $t112.a, i: $t112.i} : null), ($t113 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0})), $t113 ? {a: $t113.a, i: $t113.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_int_P_int_P(__first, __last, __result) {
  let $t114, $t115, $t116, $t117;
  return ($t117 = std_copy_move_backward_a_value1_int_P_int_P(($t114 = std_niter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t114 ? {a: $t114.a, i: $t114.i} : null), ($t115 = std_niter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t115 ? {a: $t115.a, i: $t115.i} : null), ($t116 = std_niter_base_int_P((__result ? {a: __result.a, i: __result.i} : null)), $t116 ? {a: $t116.a, i: $t116.i} : null)), $t117 ? {a: $t117.a, i: $t117.i} : null);
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
  let $t118;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__alloc, ($t118 = std_addressof_int(__cur), $t118 ? {a: $t118.a, i: $t118.i} : null), __first.op_mul__c());
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
function std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(__first, __holeIndex, __len, __value, __comp) {
  let $t119, $t120, $t121, $t122, $t123, $t124, $t125, $t126, $t127, $t128, $t129, $t130, $t131, $t132;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp(($t119 = (($t120 = __first.op_add__c({a: [__secondChild], i: 0}), $t120)).op_mul__c(), $t119.a[$t119.i]), ($t121 = (($t122 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t122)).op_mul__c(), $t121.a[$t121.i]))) {
        ($t123 = __secondChild, __secondChild = (($t123 - 1) | 0), $t123);
      }
      ($t124 = (($t127 = __first.op_add__c({a: [__holeIndex], i: 0}), $t127)).op_mul__c(), $t124.a[$t124.i] = ($t125 = std_move_int((($t126 = __first.op_add__c({a: [__secondChild], i: 0}), $t126)).op_mul__c()), $t125.a[$t125.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t128 = (($t131 = __first.op_add__c({a: [__holeIndex], i: 0}), $t131)).op_mul__c(), $t128.a[$t128.i] = ($t129 = std_move_int((($t130 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t130)).op_mul__c()), $t129.a[$t129.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t132 = std_move_int({a: __value, i: "v"}), $t132.a[$t132.i]), __comp);
}
function std_adjust_heap_1_int_P_long_int_func_bool_int_int_P(__first, __holeIndex, __len, __value, __comp) {
  let $t133, $t134, $t135, $t136, $t137, $t138, $t139, $t140;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp(($t133 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t133.a[$t133.i]), ($t134 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t134.a[$t134.i]))) {
        ($t135 = __secondChild, __secondChild = (($t135 - 1) | 0), $t135);
      }
      (($t136 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t136)).a[(($t136 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t136)).i] = ($t137 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t137.a[$t137.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t138 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t138)).a[(($t138 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t138)).i] = ($t139 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t139.a[$t139.i]);
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_int_P_long_int_func_bool_int_int_P((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t140 = std_move_int({a: __value, i: "v"}), $t140.a[$t140.i]), __comp);
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_0(__first, __holeIndex, __len, __value, __comp) {
  let $t141, $t142, $t143, $t144, $t145, $t146, $t147, $t148, $t149, $t150, $t151, $t152, $t153, $t154;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp.op_call__c(($t141 = (($t142 = __first.op_add__c({a: [__secondChild], i: 0}), $t142)).op_mul__c(), $t141.a[$t141.i]), ($t143 = (($t144 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t144)).op_mul__c(), $t143.a[$t143.i]))) {
        ($t145 = __secondChild, __secondChild = (($t145 - 1) | 0), $t145);
      }
      ($t146 = (($t149 = __first.op_add__c({a: [__holeIndex], i: 0}), $t149)).op_mul__c(), $t146.a[$t146.i] = ($t147 = std_move_int((($t148 = __first.op_add__c({a: [__secondChild], i: 0}), $t148)).op_mul__c()), $t147.a[$t147.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t150 = (($t153 = __first.op_add__c({a: [__holeIndex], i: 0}), $t153)).op_mul__c(), $t150.a[$t150.i] = ($t151 = std_move_int((($t152 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t152)).op_mul__c()), $t151.a[$t151.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_0(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t154 = std_move_int({a: __value, i: "v"}), $t154.a[$t154.i]), __comp);
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  let $t155;
  return ($t155 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0})), $t155 ? {a: $t155.a, i: $t155.i} : null);
}
function std_niter_base_int_P(__it) {
  let $t156;
  return ($t156 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t156 ? {a: $t156.a, i: $t156.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t157;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t157 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_int((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t157 ? {a: $t157.a, i: $t157.i} : null);
}
function std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t158, $t159, $t160, $t161, $t162, $t163, $t164, $t165, $t166;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp(($t158 = (($t159 = __first.op_add__c({a: [__parent], i: 0}), $t159)).op_mul__c(), $t158.a[$t158.i]), __value.v))) {
     {
      ($t160 = (($t163 = __first.op_add__c({a: [__holeIndex], i: 0}), $t163)).op_mul__c(), $t160.a[$t160.i] = ($t161 = std_move_int((($t162 = __first.op_add__c({a: [__parent], i: 0}), $t162)).op_mul__c()), $t161.a[$t161.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t164 = (($t166 = __first.op_add__c({a: [__holeIndex], i: 0}), $t166)).op_mul__c(), $t164.a[$t164.i] = ($t165 = std_move_int({a: __value, i: "v"}), $t165.a[$t165.i]));
}
function std_push_heap_1_int_P_long_int_func_bool_int_int_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t167, $t168, $t169, $t170, $t171;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp(($t167 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t167.a[$t167.i]), __value.v))) {
     {
      (($t168 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t168)).a[(($t168 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t168)).i] = ($t169 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t169.a[$t169.i]);
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t170 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t170)).a[(($t170 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t170)).i] = ($t171 = std_move_int({a: __value, i: "v"}), $t171.a[$t171.i]);
}
function std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_0(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t172, $t173, $t174, $t175, $t176, $t177, $t178, $t179, $t180;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp.op_call__c(($t172 = (($t173 = __first.op_add__c({a: [__parent], i: 0}), $t173)).op_mul__c(), $t172.a[$t172.i]), __value.v))) {
     {
      ($t174 = (($t177 = __first.op_add__c({a: [__holeIndex], i: 0}), $t177)).op_mul__c(), $t174.a[$t174.i] = ($t175 = std_move_int((($t176 = __first.op_add__c({a: [__parent], i: 0}), $t176)).op_mul__c()), $t175.a[$t175.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t178 = (($t180 = __first.op_add__c({a: [__holeIndex], i: 0}), $t180)).op_mul__c(), $t178.a[$t178.i] = ($t179 = std_move_int({a: __value, i: "v"}), $t179.a[$t179.i]));
}
function std_operator_3_int_P_int_P_2(__x, __y) {
  let $t181, $t182, $t183, $t184;
  return ($t183 = ($t181 = (__x.a[__x.i]).base__c(), $t181), $t184 = ($t182 = (__y.a[__y.i]).base__c(), $t182), ($t183 === $t184 || ($t183 && $t184 && $t183.a === $t184.a && $t183.i === $t184.i)));
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
main();
