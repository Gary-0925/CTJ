"use strict";
class std_sfinae_types {
  __init_std_sfinae_types(...$a) { }
  __dtor() {
  }
}
class std_sfinae_types_class_5 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_5(...$a);
  }
  __init_std_sfinae_types_class_5(...$a) {
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
class std_nothrow_t {
  constructor(...$a) {
    this.__init_std_nothrow_t(...$a);
  }
  __init_std_nothrow_t(...$a) {
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
class class_158 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_158(...$a);
  }
  __init_class_158(...$a) {
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
class Cmp {
  constructor(...$a) {
    this.__init_Cmp(...$a);
  }
  __init_Cmp(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof Cmp)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_call__c(a, b) {
    return (a > b);
  }
}
class Holder {
  __init_Holder(...$a) { }
  __dtor() {
  }
  static sc(a, b) {
    return (a < b);
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
  op_assign__rv(__p) {
    let $t16, $t17;
    this.first = ($t16 = std_forward_int({a: __p.a[__p.i], i: "first"}), $t16.a[$t16.i]);
    this.second = ($t17 = std_forward_int({a: __p.a[__p.i], i: "second"}), $t17.a[$t17.i]);
    return {a: [this], i: 0};
  }
}
class gnu_cxx_new_allocator_std_pair_int_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t18;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t18 = operatornew__unsigned_long(((Math.imul(__n, 8)) >>> 0)), $t18 ? {a: $t18.a, i: $t18.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [$a[0]] : []));
    this.__init_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
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
    std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_impl = new std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl($a[0]);
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t19;
    return ($t19 = ((__n !== ((0) >>> 0)) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t19 ? {a: $t19.a, i: $t19.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[1])]);
    this.__init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    let $t20, $t21;
    this._M_range_initialize__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_range_initialize_std_pair_int_int_P(($t20 = ({a: $a[0], i: 0}), $t20 ? {a: $t20.a, i: $t20.i} : null), ($t21 = ({a: $a[0], i: ($a[0]).length}), $t21 ? {a: $t21.a, i: $t21.i} : null), new std_random_access_iterator_tag());
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
  _M_check_len__c(__n, __s) {
    let $t22;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t22 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t22.a[$t22.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_range_initialize__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_range_initialize_std_pair_int_int_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_emplace_back_std_pair_int_int__rv(__first);
    }
  }
  emplace_back__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_emplace_back_std_pair_int_int__rv(__args_0) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_std_pair_int_int(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_emplace_back_aux_std_pair_int_int__rv(std_forward_1_std_pair_int_int(__args_0));
    }
  }
  _M_emplace_back_aux__std_vector_std_pair_int_int_std_allocator_std_pair_int_int_M_emplace_back_aux_std_pair_int_int__rv(__args_0) {
    let $t23, $t24, $t25, $t26, $t27;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t23 = this._M_allocate(__len), $t23 ? {a: $t23.a, i: $t23.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int({a: this, i: "_M_impl"}, ($t24 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t24 ? {a: $t24.a, i: $t24.i} : null), std_forward_1_std_pair_int_int(__args_0));
        __new_finish = null;
        __new_finish = ($t25 = std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t25 ? {a: $t25.a, i: $t25.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_destroy_std_pair_int_int({a: this, i: "_M_impl"}, ($t26 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t26 ? {a: $t26.a, i: $t26.i} : null));
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
    this._M_impl._M_end_of_storage = ($t27 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t27 ? {a: $t27.a, i: $t27.i} : null);
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
  size__c() {
    return this._M_len;
  }
  begin__c() {
    return (this._M_array ? {a: this._M_array.a, i: this._M_array.i} : null);
  }
  end__c() {
    let $t28, $t29, $t30;
    return ($t30 = ($t29 = ($t28 = this.begin__c(), $t28), ({a: ($t29 ? $t29.a : null), i: ($t29 ? $t29.i : 0) + (this.size__c())})), $t30 ? {a: $t30.a, i: $t30.i} : null);
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
    let $t31, $t32;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) {
      this._M_current = (((($a[0]).a[($a[0]).i])._M_current) ? {a: ((($a[0]).a[($a[0]).i])._M_current).a, i: ((($a[0]).a[($a[0]).i])._M_current).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) {
      this._M_current = ($t31 = (($a[0]).a[($a[0]).i]).base__c(), $t32 = ($t31 ? $t31.a[$t31.i] : null), $t32 && $t32.a !== undefined ? {a: $t32.a, i: $t32.i} : $t32);
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
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) + (__n.a[__n.i])})], i: 0});
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current"};
  }
  op_assign(o) {
    this._M_current = (((o.a[o.i])._M_current) ? {a: ((o.a[o.i])._M_current).a, i: ((o.a[o.i])._M_current).i} : null);
    return {a: [this], i: 0};
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
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
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
class std_remove_reference_std_pair_int_int {
  __init_std_remove_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_has_iterator_category_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_cv_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_std_remove_cv_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_std_remove_volatile_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_std_remove_const_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_Wrap_type_std_random_access_iterator_tag {
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_Wrap_type_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1 {
  __init_std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1.prototype.__dtor.call(this);
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
class std_is_move_iterator_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_std_is_move_iterator_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__it], i: 0});
  }
}
class std_Miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_move_iterator_long_long_P {
  __init_std_is_move_iterator_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_long_long_P_value0 {
  __init_std_Iter_base_long_long_P_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return (__it ? {a: __it.a, i: __it.i} : null);
  }
}
class std_Miter_base_long_long_P extends std_Iter_base_long_long_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_long_long_P(...$a);
  }
  __init_std_Miter_base_long_long_P(...$a) {
  }
  __dtor() {
    std_Iter_base_long_long_P_value0.prototype.__dtor.call(this);
  }
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
    let $t33;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t33 = (($a[0]).a[($a[0]).i]).base__c(), $t33 ? {a: $t33.a, i: $t33.i} : null);
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
    let $t34, $t35;
    return ($t34 = __it.base__c(), $t35 = ($t34 ? $t34.a[$t34.i] : null), $t35 && $t35.a !== undefined ? {a: $t35.a, i: $t35.i} : $t35);
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
    let $t36;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_pair_int_int_P)) {
      this._M_current = ($t36 = (($a[0]).a[($a[0]).i]).base__c(), $t36 ? {a: $t36.a, i: $t36.i} : null);
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
class std_is_normal_iterator_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __init_std_is_normal_iterator_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    let $t37, $t38;
    return ($t37 = __it.base__c(), $t38 = ($t37 ? $t37.a[$t37.i] : null), $t38 && $t38.a !== undefined ? {a: $t38.a, i: $t38.i} : $t38);
  }
}
class std_Niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1.prototype.__dtor.call(this);
  }
}
class std_Niter_base_long_long_P extends std_Iter_base_long_long_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_long_long_P(...$a);
  }
  __init_std_Niter_base_long_long_P(...$a) {
  }
  __dtor() {
    std_Iter_base_long_long_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_long_long_P {
  __init_std_is_normal_iterator_long_long_P(...$a) { }
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
    let $t39;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
    }
    return ($t39 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t39 ? {a: $t39.a, i: $t39.i} : null);
  }
  static __copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_long_long(__first, __last, __result) {
    let $t40;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(8, ((_Num) >>> 0))) >>> 0)) / 8));
    }
    return ($t40 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t40 ? {a: $t40.a, i: $t40.i} : null);
  }
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
class std_is_pointer_std_pair_int_int_P {
  __init_std_is_pointer_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_are_same_std_pair_int_int_std_pair_int_int {
  __init_std_are_same_std_pair_int_int_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_copy_move_backward_value1_value0_std_random_access_iterator_tag {
  __init_std_copy_move_backward_value1_value0_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
  static __copy_move_b__std_copy_move_backward_value1_value0_std_random_access_iterator_tag_copy_move_b_std_pair_int_int_P_std_pair_int_int_P(__first, __last, __result) {
    let $t41;
    let __n = 0;
    __n = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    for (; (__n > 0); (__n = ((__n - 1) | 0))) {
      (($t41 = __result.a[--__result.i], $t41)).op_assign__rv(std_move_std_pair_int_int((--__last.i, {a: __last.a, i: __last.i})));
    }
    return (__result ? {a: __result.a, i: __result.i} : null);
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
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_lg__long(__n) {
  return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_swap_int(__a, __b) {
  let $t42, $t43, $t44;
  let __tmp = {v: ($t42 = std_move_int(__a), $t42.a[$t42.i])};
  __a.a[__a.i] = ($t43 = std_move_int(__b), $t43.a[$t43.i]);
  __b.a[__b.i] = ($t44 = std_move_int({a: __tmp, i: "v"}), $t44.a[$t44.i]);
}
function std_swap_std_pair_int_int(__a, __b) {
  let __tmp = {v: new std_pair_int_int(std_move_std_pair_int_int(__a))};
  (__a.a[__a.i]).op_assign__rv(std_move_std_pair_int_int(__b));
  (__b.a[__b.i]).op_assign__rv(std_move_std_pair_int_int({a: __tmp, i: "v"}));
}
function std_swap_long_long(__a, __b) {
  let $t45, $t46, $t47;
  let __tmp = {v: ($t45 = std_move_long_long(__a), $t45.a[$t45.i])};
  __a.a[__a.i] = ($t46 = std_move_long_long(__b), $t46.a[$t46.i]);
  __b.a[__b.i] = ($t47 = std_move_long_long({a: __tmp, i: "v"}), $t47.a[$t47.i]);
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_2(__x, __y)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P(__x, __y) {
  return (!(std_operator_3_std_pair_int_int_P_std_pair_int_int_P_2(__x, __y)));
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(__os, __n) {
  (__os.a[__os.i])._M_putll(3, __n);
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
function later(a, b) {
  return (a > b);
}
function pairCmp(a, b) {
  return ((a.a[a.i]).second < (b.a[b.i]).second);
}
function main() {
  let $t48;
  let v = new std_vector_int_std_allocator_int([5, 2, 8, 1], {a: [new std_allocator_int()], i: 0});
  let fp = later;
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(v.begin(), v.end(), fp);
  for (let $b0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let lam = {op_call__c: (a, b) => {
    return (a < b);
  }};
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(v.begin(), v.end(), lam);
  for (let $b1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(v.begin(), v.end(), new Cmp());
  for (let $b2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let x = ($b2.op_mul__c()).a[($b2.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(v.begin(), v.end(), Holder.sc);
  for (let $b3 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e3 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b3], i: 0}, {a: [$e3], i: 0}); $b3.op_inc()) {
    let x = ($b3.op_mul__c()).a[($b3.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(v.begin(), v.end(), tcmp_int);
  for (let $b4 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e4 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b4], i: 0}, {a: [$e4], i: 0}); $b4.op_inc()) {
    let x = ($b4.op_mul__c()).a[($b4.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let ps = new std_vector_std_pair_int_int_std_allocator_std_pair_int_int([new std_pair_int_int({a: [1], i: 0}, {a: [9], i: 0}), new std_pair_int_int({a: [2], i: 0}, {a: [3], i: 0}), new std_pair_int_int({a: [3], i: 0}, {a: [5], i: 0})], {a: [new std_allocator_std_pair_int_int()], i: 0});
  std_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(ps.begin(), ps.end(), pairCmp);
  for (let $b5 = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [ps.begin()], i: 0}), $e5 = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [ps.end()], i: 0}); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [$b5], i: 0}, {a: [$e5], i: 0}); $b5.op_inc()) {
    let p = $b5.op_mul__c();
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (p.a[p.i]).first), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let arr = [30000000000n, BigInt.asIntN(64, -(5n)), 7n];
  std_sort_1_long_long_P_lambda_2({a: arr, i: 0}, ($t48 = ({a: (({a: arr, i: 0}) ? (({a: arr, i: 0})).a : null), i: (({a: arr, i: 0}) ? (({a: arr, i: 0})).i : 0) + (3)}), $t48 ? {a: $t48.a, i: $t48.i} : null), {op_call__c: (a, b) => {
    return (a > b);
  }});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, arr[0]), {a: [32, 0], i: 0}), arr[1]), {a: [32, 0], i: 0}), arr[2]), {a: [std_endl], i: 0});
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
function std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), new Cmp({a: [__comp], i: 0}));
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
    }
  }
}
function std_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  if (gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), ((Math.imul(std_lg__long(gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
      std_final_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_1_long_long_P_lambda_2(__first, __last, __comp) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_1_long_long_P_long_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0), __comp);
      std_final_insertion_sort_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t49, $t50, $t51, $t52, $t53, $t54;
  return ($t53 = (($t51 = (__lhs.a[__lhs.i]).base__c(), $t51) ? (($t51 = (__lhs.a[__lhs.i]).base__c(), $t51)).a[(($t51 = (__lhs.a[__lhs.i]).base__c(), $t51)).i] : null), $t54 = (($t52 = (__rhs.a[__rhs.i]).base__c(), $t52) ? (($t52 = (__rhs.a[__rhs.i]).base__c(), $t52)).a[(($t52 = (__rhs.a[__rhs.i]).base__c(), $t52)).i] : null), (!($t53 === $t54 || ($t53 && $t54 && $t53.a === $t54.a && $t53.i === $t54.i))));
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__lhs, __rhs) {
  let $t55, $t56, $t57, $t58;
  return ($t57 = (($t55 = (__lhs.a[__lhs.i]).base__c(), $t55) ? (($t55 = (__lhs.a[__lhs.i]).base__c(), $t55)).a[(($t55 = (__lhs.a[__lhs.i]).base__c(), $t55)).i] : null), $t58 = (($t56 = (__rhs.a[__rhs.i]).base__c(), $t56) ? (($t56 = (__rhs.a[__rhs.i]).base__c(), $t56)).a[(($t56 = (__rhs.a[__rhs.i]).base__c(), $t56)).i] : null), (!($t57 === $t58 || ($t57 && $t58 && $t57.a === $t58.a && $t57.i === $t58.i))));
}
function tcmp_int(a, b) {
  return (a > b);
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR.__delegate();
}
function std_declval_std_pair_int_int_RR() {
  return std_declval_protector_std_pair_int_int_RR.__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R.__delegate();
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2(__lhs, __rhs) {
  let $t59, $t60, $t61, $t62, $t63, $t64;
  return ($t63 = (($t61 = (__lhs.a[__lhs.i]).base__c(), $t61) ? (($t61 = (__lhs.a[__lhs.i]).base__c(), $t61)).a[(($t61 = (__lhs.a[__lhs.i]).base__c(), $t61)).i] : null), $t64 = (($t62 = (__rhs.a[__rhs.i]).base__c(), $t62) ? (($t62 = (__rhs.a[__rhs.i]).base__c(), $t62)).a[(($t62 = (__rhs.a[__rhs.i]).base__c(), $t62)).i] : null), (($t63 ? $t63.i : 0) - ($t64 ? $t64.i : 0)));
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2(__lhs, __rhs) {
  let $t65, $t66, $t67, $t68;
  return ($t67 = (($t65 = (__lhs.a[__lhs.i]).base__c(), $t65) ? (($t65 = (__lhs.a[__lhs.i]).base__c(), $t65)).a[(($t65 = (__lhs.a[__lhs.i]).base__c(), $t65)).i] : null), $t68 = (($t66 = (__rhs.a[__rhs.i]).base__c(), $t66) ? (($t66 = (__rhs.a[__rhs.i]).base__c(), $t66)).a[(($t66 = (__rhs.a[__rhs.i]).base__c(), $t66)).i] : null), (($t67 ? $t67.i : 0) - ($t68 ? $t68.i : 0)));
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
function std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_1(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit, __comp);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_Cmp(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
      std_introsort_loop_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit, new Cmp({a: [__comp], i: 0}));
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __depth_limit, __comp) {
  while ((gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
      std_introsort_loop_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __depth_limit, __comp);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_1_long_long_P_long_lambda_2(__first, __last, __depth_limit, __comp) {
  let $t69;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          return;
        }
      }
      (__depth_limit = ((__depth_limit - 1) | 0));
      let __cut = ($t69 = std_unguarded_partition_pivot_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp), $t69 ? {a: $t69.a, i: $t69.i} : null);
      std_introsort_loop_1_long_long_P_long_lambda_2((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit, __comp);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
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
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), __comp);
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  }
}
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), new Cmp({a: [__comp], i: 0}));
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
  }
}
function std_final_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  if ((gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
     {
      std_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), __first.op_add__c({a: [((16) | 0)], i: 0}), __comp);
      std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first.op_add__c({a: [((16) | 0)], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
    }
  }
  else {
    std_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
  }
}
function std_final_insertion_sort_1_long_long_P_lambda_2(__first, __last, __comp) {
  let $t70, $t71;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
     {
      std_insertion_sort_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), ($t70 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t70 ? {a: $t70.a, i: $t70.i} : null), __comp);
      std_unguarded_insertion_sort_1_long_long_P_lambda_2(($t71 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t71 ? {a: $t71.a, i: $t71.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
    }
  }
  else {
    std_insertion_sort_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  }
}
function std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
}
function std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
}
function std_partial_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
  std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new Cmp({a: [__comp], i: 0}));
}
function std_partial_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __middle, __last, __comp) {
  std_heap_select_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
  std_sort_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__middle], i: 0}), __comp);
}
function std_partial_sort_1_long_long_P_lambda_2(__first, __middle, __last, __comp) {
  std_heap_select_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
  std_sort_heap_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_func_bool_int_int_P(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_lambda_1(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), new Cmp({a: [__comp], i: 0}));
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_Cmp(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c(), new Cmp({a: [__comp], i: 0}));
}
function std_unguarded_partition_pivot_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  let __mid = __first.op_add__c({a: [((Math.trunc((gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
  std_move_median_first_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}), __comp);
  return std_unguarded_partition_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __first.op_mul__c(), __comp);
}
function std_unguarded_partition_pivot_1_long_long_P_lambda_2(__first, __last, __comp) {
  let $t72, $t73, $t74, $t75;
  let __mid = ($t72 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t72 ? {a: $t72.a, i: $t72.i} : null);
  std_move_median_first_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t73 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t73 ? {a: $t73.a, i: $t73.i} : null), __comp);
  return ($t75 = std_unguarded_partition_1_long_long_P_long_long_lambda_2(($t74 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t74 ? {a: $t74.a, i: $t74.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first, __comp), $t75 ? {a: $t75.a, i: $t75.i} : null);
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let $t76, $t77, $t78;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t76 = std_move_int(__i.op_mul__c()), $t76.a[$t76.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t77 = __first.op_mul__c(), $t77.a[$t77.i] = ($t78 = std_move_int({a: __val, i: "v"}), $t78.a[$t78.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  let $t79, $t80, $t81;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t79 = std_move_int(__i.op_mul__c()), $t79.a[$t79.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t80 = __first.op_mul__c(), $t80.a[$t80.i] = ($t81 = std_move_int({a: __val, i: "v"}), $t81.a[$t81.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  let $t82, $t83, $t84;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t82 = std_move_int(__i.op_mul__c()), $t82.a[$t82.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t83 = __first.op_mul__c(), $t83.a[$t83.i] = ($t84 = std_move_int({a: __val, i: "v"}), $t84.a[$t84.i]));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), new Cmp({a: [__comp], i: 0}));
      }
    }
  }
}
function std_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  if (gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_3({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (__comp(__i.op_mul__c(), __first.op_mul__c())) {
         {
          let __val = {v: new std_pair_int_int(std_move_std_pair_int_int(__i.op_mul__c()))};
          std_move_backward_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ((__first.op_mul__c()).a[(__first.op_mul__c()).i]).op_assign__rv(std_move_std_pair_int_int({a: __val, i: "v"}));
        }
      }
      else {
        std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}), __comp);
      }
    }
  }
}
function std_insertion_sort_1_long_long_P_lambda_2(__first, __last, __comp) {
  let $t85, $t86, $t87, $t88;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t85 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t85 ? {a: $t85.a, i: $t85.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if (__comp.op_call__c(__i.a[__i.i], __first.a[__first.i])) {
         {
          let __val = {v: ($t86 = std_move_long_long(__i), $t86.a[$t86.i])};
          std_move_backward_long_long_P_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t87 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t87 ? {a: $t87.a, i: $t87.i} : null));
          __first.a[__first.i] = ($t88 = std_move_long_long({a: __val, i: "v"}), $t88.a[$t88.i]);
        }
      }
      else {
        std_unguarded_linear_insert_1_long_long_P_lambda_2((__i ? {a: __i.a, i: __i.i} : null), __comp);
      }
    }
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), new Cmp({a: [__comp], i: 0}));
  }
}
function std_unguarded_insertion_sort_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  for (let __i = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}), __comp);
  }
}
function std_unguarded_insertion_sort_1_long_long_P_lambda_2(__first, __last, __comp) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_1_long_long_P_lambda_2((__i ? {a: __i.a, i: __i.i} : null), __comp);
  }
}
function std_forward_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_pair_int_int(__t) {
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
function std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), __comp);
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __comp);
    }
  }
}
function std_heap_select_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new Cmp({a: [__comp], i: 0}));
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp.op_call__c((__i.op_mul__c()).a[(__i.op_mul__c()).i], (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), new Cmp({a: [__comp], i: 0}));
    }
  }
}
function std_heap_select_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __middle, __last, __comp) {
  std_make_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__middle], i: 0}), __comp);
  for (let __i = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__middle], i: 0}); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_4({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (__comp(__i.op_mul__c(), __first.op_mul__c())) {
      std_pop_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__i], i: 0}), __comp);
    }
  }
}
function std_heap_select_1_long_long_P_lambda_2(__first, __middle, __last, __comp) {
  std_make_heap_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
  for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
    if (__comp.op_call__c(__i.a[__i.i], __first.a[__first.i])) {
      std_pop_heap_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null), __comp);
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
function std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new Cmp({a: [__comp], i: 0}));
    }
  }
}
function std_sort_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  while ((gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}), __comp);
    }
  }
}
function std_sort_heap_1_long_long_P_lambda_2(__first, __last, __comp) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_1_long_long_P_lambda_2((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
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
function std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__a, __b, __c, __comp) {
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
function std_move_median_first_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__a, __b, __c, __comp) {
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
function std_move_median_first_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__a, __b, __c, __comp) {
  if (__comp(__a.op_mul__c(), __b.op_mul__c())) {
     {
      if (__comp(__b.op_mul__c(), __c.op_mul__c())) {
        std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__b], i: 0}));
      }
      else {
        if (__comp(__a.op_mul__c(), __c.op_mul__c())) {
          std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__c], i: 0}));
        }
      }
    }
  }
  else {
    if (__comp(__a.op_mul__c(), __c.op_mul__c())) {
      return;
    }
    else {
      if (__comp(__b.op_mul__c(), __c.op_mul__c())) {
        std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__b], i: 0}));
      }
    }
  }
}
function std_move_median_first_1_long_long_P_lambda_2(__a, __b, __c, __comp) {
  if (__comp.op_call__c(__a.a[__a.i], __b.a[__b.i])) {
     {
      if (__comp.op_call__c(__b.a[__b.i], __c.a[__c.i])) {
        std_iter_swap_long_long_P_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
      else {
        if (__comp.op_call__c(__a.a[__a.i], __c.a[__c.i])) {
          std_iter_swap_long_long_P_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
        }
      }
    }
  }
  else {
    if (__comp.op_call__c(__a.a[__a.i], __c.a[__c.i])) {
      return;
    }
    else {
      if (__comp.op_call__c(__b.a[__b.i], __c.a[__c.i])) {
        std_iter_swap_long_long_P_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
      }
      else {
        std_iter_swap_long_long_P_long_long_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
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
function std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_lambda_1(__first, __last, __pivot, __comp) {
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
function std_unguarded_partition_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_Cmp(__first, __last, __pivot, __comp) {
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
function std_unguarded_partition_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp(__first.op_mul__c(), __pivot)) {
        __first.op_inc();
      }
      __last.op_dec();
      while (__comp(__pivot, __last.op_mul__c())) {
        __last.op_dec();
      }
      if ((!(gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_4({a: [__first], i: 0}, {a: [__last], i: 0})))) {
        return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0});
      }
      std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0}));
      __first.op_inc();
    }
  }
}
function std_unguarded_partition_1_long_long_P_long_long_lambda_2(__first, __last, __pivot, __comp) {
  while (true) {
     {
      while (__comp.op_call__c(__first.a[__first.i], __pivot.a[__pivot.i])) {
        ++__first.i;
      }
      --__last.i;
      while (__comp.op_call__c(__pivot.a[__pivot.i], __last.a[__last.i])) {
        --__last.i;
      }
      if ((!(((__first ? __first.i : 0) < (__last ? __last.i : 0))))) {
        return (__first ? {a: __first.a, i: __first.i} : null);
      }
      std_iter_swap_long_long_P_long_long_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
      ++__first.i;
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_3(__lhs, __rhs) {
  let $t89, $t90, $t91, $t92, $t93, $t94;
  return ($t93 = (($t91 = (__lhs.a[__lhs.i]).base__c(), $t91) ? (($t91 = (__lhs.a[__lhs.i]).base__c(), $t91)).a[(($t91 = (__lhs.a[__lhs.i]).base__c(), $t91)).i] : null), $t94 = (($t92 = (__rhs.a[__rhs.i]).base__c(), $t92) ? (($t92 = (__rhs.a[__rhs.i]).base__c(), $t92)).a[(($t92 = (__rhs.a[__rhs.i]).base__c(), $t92)).i] : null), ($t93 === $t94 || ($t93 && $t94 && $t93.a === $t94.a && $t93.i === $t94.i)));
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_3(__lhs, __rhs) {
  let $t95, $t96, $t97, $t98;
  return ($t97 = (($t95 = (__lhs.a[__lhs.i]).base__c(), $t95) ? (($t95 = (__lhs.a[__lhs.i]).base__c(), $t95)).a[(($t95 = (__lhs.a[__lhs.i]).base__c(), $t95)).i] : null), $t98 = (($t96 = (__rhs.a[__rhs.i]).base__c(), $t96) ? (($t96 = (__rhs.a[__rhs.i]).base__c(), $t96)).a[(($t96 = (__rhs.a[__rhs.i]).base__c(), $t96)).i] : null), ($t97 === $t98 || ($t97 && $t98 && $t97.a === $t98.a && $t97.i === $t98.i)));
}
function std_move_int(__t) {
  return __t;
}
function std_move_std_pair_int_int(__t) {
  return __t;
}
function std_move_long_long(__t) {
  return __t;
}
function std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0}));
}
function std_move_backward_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(std_miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0})), new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__result], i: 0}));
}
function std_move_backward_long_long_P_long_long_P(__first, __last, __result) {
  let $t99, $t100, $t101;
  return ($t101 = std_copy_move_backward_a2_value1_long_long_P_long_long_P(($t99 = std_miter_base_long_long_P((__first ? {a: __first.a, i: __first.i} : null)), $t99 ? {a: $t99.a, i: $t99.i} : null), ($t100 = std_miter_base_long_long_P((__last ? {a: __last.a, i: __last.i} : null)), $t100 ? {a: $t100.a, i: $t100.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t101 ? {a: $t101.a, i: $t101.i} : null);
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__last, __comp) {
  let $t102, $t103, $t104, $t105, $t106;
  let __val = {v: ($t102 = std_move_int(__last.op_mul__c()), $t102.a[$t102.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t103 = __last.op_mul__c(), $t103.a[$t103.i] = ($t104 = std_move_int(__next.op_mul__c()), $t104.a[$t104.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t105 = __last.op_mul__c(), $t105.a[$t105.i] = ($t106 = std_move_int({a: __val, i: "v"}), $t106.a[$t106.i]));
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__last, __comp) {
  let $t107, $t108, $t109, $t110, $t111;
  let __val = {v: ($t107 = std_move_int(__last.op_mul__c()), $t107.a[$t107.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp.op_call__c(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t108 = __last.op_mul__c(), $t108.a[$t108.i] = ($t109 = std_move_int(__next.op_mul__c()), $t109.a[$t109.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t110 = __last.op_mul__c(), $t110.a[$t110.i] = ($t111 = std_move_int({a: __val, i: "v"}), $t111.a[$t111.i]));
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__last, __comp) {
  let $t112, $t113, $t114, $t115, $t116;
  let __val = {v: ($t112 = std_move_int(__last.op_mul__c()), $t112.a[$t112.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp.op_call__c(__val.v, (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t113 = __last.op_mul__c(), $t113.a[$t113.i] = ($t114 = std_move_int(__next.op_mul__c()), $t114.a[$t114.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t115 = __last.op_mul__c(), $t115.a[$t115.i] = ($t116 = std_move_int({a: __val, i: "v"}), $t116.a[$t116.i]));
}
function std_unguarded_linear_insert_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__last, __comp) {
  let __val = {v: new std_pair_int_int(std_move_std_pair_int_int(__last.op_mul__c()))};
  let __next = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0});
  __next.op_dec();
  while (__comp({a: __val, i: "v"}, __next.op_mul__c())) {
     {
      ((__last.op_mul__c()).a[(__last.op_mul__c()).i]).op_assign__rv(std_move_std_pair_int_int(__next.op_mul__c()));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ((__last.op_mul__c()).a[(__last.op_mul__c()).i]).op_assign__rv(std_move_std_pair_int_int({a: __val, i: "v"}));
}
function std_unguarded_linear_insert_1_long_long_P_lambda_2(__last, __comp) {
  let $t117, $t118, $t119;
  let __val = {v: ($t117 = std_move_long_long(__last), $t117.a[$t117.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while (__comp.op_call__c(__val.v, __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t118 = std_move_long_long(__next), $t118.a[$t118.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t119 = std_move_long_long({a: __val, i: "v"}), $t119.a[$t119.i]);
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t120;
  return ($t120 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t120 ? {a: $t120.a, i: $t120.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t121;
  return ($t121 = std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t121 ? {a: $t121.a, i: $t121.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t122;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__alloc, ($t122 = std_addressof_int(__first), $t122 ? {a: $t122.a, i: $t122.i} : null));
  }
}
function std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __alloc) {
  let $t123;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_destroy_std_pair_int_int(__alloc, ($t123 = std_addressof_std_pair_int_int(__first), $t123 ? {a: $t123.a, i: $t123.i} : null));
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __comp) {
  let $t124, $t125, $t126, $t127;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t124 = std_move_int((($t125 = __first.op_add__c({a: [__parent], i: 0}), $t125)).op_mul__c()), $t124.a[$t124.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t126 = std_move_int({a: __value, i: "v"}), $t126.a[$t126.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t127 = __parent, __parent = (($t127 - 1) | 0), $t127);
    }
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __comp) {
  let $t128, $t129, $t130, $t131;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t128 = std_move_int((($t129 = __first.op_add__c({a: [__parent], i: 0}), $t129)).op_mul__c()), $t128.a[$t128.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t130 = std_move_int({a: __value, i: "v"}), $t130.a[$t130.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t131 = __parent, __parent = (($t131 - 1) | 0), $t131);
    }
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __comp) {
  let $t132, $t133, $t134, $t135;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t132 = std_move_int((($t133 = __first.op_add__c({a: [__parent], i: 0}), $t133)).op_mul__c()), $t132.a[$t132.i])};
      std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t134 = std_move_int({a: __value, i: "v"}), $t134.a[$t134.i]), new Cmp({a: [__comp], i: 0}));
      if ((__parent === 0)) {
        return;
      }
      ($t135 = __parent, __parent = (($t135 - 1) | 0), $t135);
    }
  }
}
function std_make_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __comp) {
  let $t136, $t137, $t138;
  if ((gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: new std_pair_int_int(std_move_std_pair_int_int((($t136 = __first.op_add__c({a: [__parent], i: 0}), $t136)).op_mul__c()))};
      std_adjust_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), __parent, __len, ($t137 = std_move_std_pair_int_int({a: __value, i: "v"}), $t137.a[$t137.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t138 = __parent, __parent = (($t138 - 1) | 0), $t138);
    }
  }
}
function std_make_heap_1_long_long_P_lambda_2(__first, __last, __comp) {
  let $t139, $t140, $t141;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
  while (true) {
     {
      let __value = {v: ($t139 = std_move_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t139.a[$t139.i])};
      std_adjust_heap_1_long_long_P_long_long_long_lambda_2((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t140 = std_move_long_long({a: __value, i: "v"}), $t140.a[$t140.i]), __comp);
      if ((__parent === 0)) {
        return;
      }
      ($t141 = __parent, __parent = (($t141 - 1) | 0), $t141);
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_4(__lhs, __rhs) {
  let $t142, $t143, $t144, $t145, $t146, $t147;
  return ($t146 = (($t144 = (__lhs.a[__lhs.i]).base__c(), $t144) ? (($t144 = (__lhs.a[__lhs.i]).base__c(), $t144)).a[(($t144 = (__lhs.a[__lhs.i]).base__c(), $t144)).i] : null), $t147 = (($t145 = (__rhs.a[__rhs.i]).base__c(), $t145) ? (($t145 = (__rhs.a[__rhs.i]).base__c(), $t145)).a[(($t145 = (__rhs.a[__rhs.i]).base__c(), $t145)).i] : null), (($t146 ? $t146.i : 0) < ($t147 ? $t147.i : 0)));
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_4(__lhs, __rhs) {
  let $t148, $t149, $t150, $t151;
  return ($t150 = (($t148 = (__lhs.a[__lhs.i]).base__c(), $t148) ? (($t148 = (__lhs.a[__lhs.i]).base__c(), $t148)).a[(($t148 = (__lhs.a[__lhs.i]).base__c(), $t148)).i] : null), $t151 = (($t149 = (__rhs.a[__rhs.i]).base__c(), $t149) ? (($t149 = (__rhs.a[__rhs.i]).base__c(), $t149)).a[(($t149 = (__rhs.a[__rhs.i]).base__c(), $t149)).i] : null), (($t150 ? $t150.i : 0) < ($t151 ? $t151.i : 0)));
}
function std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_func_bool_int_int_P(__first, __last, __result, __comp) {
  let $t152, $t153, $t154, $t155;
  let __value = {v: ($t152 = std_move_int(__result.op_mul__c()), $t152.a[$t152.i])};
  ($t153 = __result.op_mul__c(), $t153.a[$t153.i] = ($t154 = std_move_int(__first.op_mul__c()), $t154.a[$t154.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t155 = std_move_int({a: __value, i: "v"}), $t155.a[$t155.i]), __comp);
}
function std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_lambda_1(__first, __last, __result, __comp) {
  let $t156, $t157, $t158, $t159;
  let __value = {v: ($t156 = std_move_int(__result.op_mul__c()), $t156.a[$t156.i])};
  ($t157 = __result.op_mul__c(), $t157.a[$t157.i] = ($t158 = std_move_int(__first.op_mul__c()), $t158.a[$t158.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t159 = std_move_int({a: __value, i: "v"}), $t159.a[$t159.i]), __comp);
}
function std_pop_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Cmp(__first, __last, __result, __comp) {
  let $t160, $t161, $t162, $t163;
  let __value = {v: ($t160 = std_move_int(__result.op_mul__c()), $t160.a[$t160.i])};
  ($t161 = __result.op_mul__c(), $t161.a[$t161.i] = ($t162 = std_move_int(__first.op_mul__c()), $t162.a[$t162.i]));
  std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t163 = std_move_int({a: __value, i: "v"}), $t163.a[$t163.i]), new Cmp({a: [__comp], i: 0}));
}
function std_pop_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __last, __result, __comp) {
  let $t164;
  let __value = {v: new std_pair_int_int(std_move_std_pair_int_int(__result.op_mul__c()))};
  ((__result.op_mul__c()).a[(__result.op_mul__c()).i]).op_assign__rv(std_move_std_pair_int_int(__first.op_mul__c()));
  std_adjust_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), 0, gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_2({a: [__last], i: 0}, {a: [__first], i: 0}), ($t164 = std_move_std_pair_int_int({a: __value, i: "v"}), $t164.a[$t164.i]), __comp);
}
function std_pop_heap_1_long_long_P_lambda_2(__first, __last, __result, __comp) {
  let $t165, $t166, $t167;
  let __value = {v: ($t165 = std_move_long_long(__result), $t165.a[$t165.i])};
  __result.a[__result.i] = ($t166 = std_move_long_long(__first), $t166.a[$t166.i]);
  std_adjust_heap_1_long_long_P_long_long_long_lambda_2((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t167 = std_move_long_long({a: __value, i: "v"}), $t167.a[$t167.i]), __comp);
}
function std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b) {
  std_swap_int(__a.op_mul__c(), __b.op_mul__c());
}
function std_iter_swap_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__a, __b) {
  std_swap_std_pair_int_int(__a.op_mul__c(), __b.op_mul__c());
}
function std_iter_swap_long_long_P_long_long_P(__a, __b) {
  std_swap_long_long(__a, __b);
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0}));
}
function std_miter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0._S_base(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__it], i: 0}));
}
function std_miter_base_long_long_P(__it) {
  let $t168;
  return ($t168 = std_Iter_base_long_long_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t168 ? {a: $t168.a, i: $t168.i} : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t169, $t170, $t171;
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [std_copy_move_backward_a_value1_int_P_int_P(($t169 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), $t169 ? {a: $t169.a, i: $t169.i} : null), ($t170 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), $t170 ? {a: $t170.a, i: $t170.i} : null), ($t171 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0})), $t171 ? {a: $t171.a, i: $t171.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__first, __last, __result) {
  let $t172, $t173, $t174;
  return new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [std_copy_move_backward_a_value1_std_pair_int_int_P_std_pair_int_int_P(($t172 = std_niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0})), $t172 ? {a: $t172.a, i: $t172.i} : null), ($t173 = std_niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__last], i: 0})), $t173 ? {a: $t173.a, i: $t173.i} : null), ($t174 = std_niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__result], i: 0})), $t174 ? {a: $t174.a, i: $t174.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_long_long_P_long_long_P(__first, __last, __result) {
  let $t175, $t176, $t177, $t178;
  return ($t178 = std_copy_move_backward_a_value1_long_long_P_long_long_P(($t175 = std_niter_base_long_long_P((__first ? {a: __first.a, i: __first.i} : null)), $t175 ? {a: $t175.a, i: $t175.i} : null), ($t176 = std_niter_base_long_long_P((__last ? {a: __last.a, i: __last.i} : null)), $t176 ? {a: $t176.a, i: $t176.i} : null), ($t177 = std_niter_base_long_long_P((__result ? {a: __result.a, i: __result.i} : null)), $t177 ? {a: $t177.a, i: $t177.i} : null)), $t178 ? {a: $t178.a, i: $t178.i} : null);
}
function std_operator_3_int_P_int_P_2(__x, __y) {
  let $t179, $t180, $t181, $t182;
  return ($t181 = ($t179 = (__x.a[__x.i]).base__c(), $t179), $t182 = ($t180 = (__y.a[__y.i]).base__c(), $t180), ($t181 === $t182 || ($t181 && $t182 && $t181.a === $t182.a && $t181.i === $t182.i)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P_2(__x, __y) {
  let $t183, $t184, $t185, $t186;
  return ($t185 = ($t183 = (__x.a[__x.i]).base__c(), $t183), $t186 = ($t184 = (__y.a[__y.i]).base__c(), $t184), ($t185 === $t186 || ($t185 && $t186 && $t185.a === $t186.a && $t185.i === $t186.i)));
}
function std_max_unsigned_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(__i) {
  return new std_move_iterator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P(__i) {
  return new std_move_iterator_std_pair_int_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t187;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__alloc, ($t187 = std_addressof_int(__cur), $t187 ? {a: $t187.a, i: $t187.i} : null), __first.op_mul__c());
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
function std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t188;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_pair_int_int_P_std_pair_int_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct__gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_construct_std_pair_int_int(__alloc, ($t188 = std_addressof_std_pair_int_int(__cur), $t188 ? {a: $t188.a, i: $t188.i} : null), __first.op_mul__c());
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
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_std_pair_int_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(__first, __holeIndex, __len, __value, __comp) {
  let $t189, $t190, $t191, $t192, $t193, $t194, $t195, $t196, $t197, $t198, $t199, $t200, $t201, $t202;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp(($t189 = (($t190 = __first.op_add__c({a: [__secondChild], i: 0}), $t190)).op_mul__c(), $t189.a[$t189.i]), ($t191 = (($t192 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t192)).op_mul__c(), $t191.a[$t191.i]))) {
        ($t193 = __secondChild, __secondChild = (($t193 - 1) | 0), $t193);
      }
      ($t194 = (($t197 = __first.op_add__c({a: [__holeIndex], i: 0}), $t197)).op_mul__c(), $t194.a[$t194.i] = ($t195 = std_move_int((($t196 = __first.op_add__c({a: [__secondChild], i: 0}), $t196)).op_mul__c()), $t195.a[$t195.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t198 = (($t201 = __first.op_add__c({a: [__holeIndex], i: 0}), $t201)).op_mul__c(), $t198.a[$t198.i] = ($t199 = std_move_int((($t200 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t200)).op_mul__c()), $t199.a[$t199.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t202 = std_move_int({a: __value, i: "v"}), $t202.a[$t202.i]), __comp);
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_1(__first, __holeIndex, __len, __value, __comp) {
  let $t203, $t204, $t205, $t206, $t207, $t208, $t209, $t210, $t211, $t212, $t213, $t214, $t215, $t216;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp.op_call__c(($t203 = (($t204 = __first.op_add__c({a: [__secondChild], i: 0}), $t204)).op_mul__c(), $t203.a[$t203.i]), ($t205 = (($t206 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t206)).op_mul__c(), $t205.a[$t205.i]))) {
        ($t207 = __secondChild, __secondChild = (($t207 - 1) | 0), $t207);
      }
      ($t208 = (($t211 = __first.op_add__c({a: [__holeIndex], i: 0}), $t211)).op_mul__c(), $t208.a[$t208.i] = ($t209 = std_move_int((($t210 = __first.op_add__c({a: [__secondChild], i: 0}), $t210)).op_mul__c()), $t209.a[$t209.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t212 = (($t215 = __first.op_add__c({a: [__holeIndex], i: 0}), $t215)).op_mul__c(), $t212.a[$t212.i] = ($t213 = std_move_int((($t214 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t214)).op_mul__c()), $t213.a[$t213.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_1(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t216 = std_move_int({a: __value, i: "v"}), $t216.a[$t216.i]), __comp);
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_Cmp(__first, __holeIndex, __len, __value, __comp) {
  let $t217, $t218, $t219, $t220, $t221, $t222, $t223, $t224, $t225, $t226, $t227, $t228, $t229, $t230;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp.op_call__c(($t217 = (($t218 = __first.op_add__c({a: [__secondChild], i: 0}), $t218)).op_mul__c(), $t217.a[$t217.i]), ($t219 = (($t220 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t220)).op_mul__c(), $t219.a[$t219.i]))) {
        ($t221 = __secondChild, __secondChild = (($t221 - 1) | 0), $t221);
      }
      ($t222 = (($t225 = __first.op_add__c({a: [__holeIndex], i: 0}), $t225)).op_mul__c(), $t222.a[$t222.i] = ($t223 = std_move_int((($t224 = __first.op_add__c({a: [__secondChild], i: 0}), $t224)).op_mul__c()), $t223.a[$t223.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      ($t226 = (($t229 = __first.op_add__c({a: [__holeIndex], i: 0}), $t229)).op_mul__c(), $t226.a[$t226.i] = ($t227 = std_move_int((($t228 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t228)).op_mul__c()), $t227.a[$t227.i]));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_Cmp(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t230 = std_move_int({a: __value, i: "v"}), $t230.a[$t230.i]), new Cmp({a: [__comp], i: 0}));
}
function std_adjust_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __holeIndex, __len, __value, __comp) {
  let $t231, $t232, $t233, $t234, $t235, $t236, $t237, $t238, $t239, $t240;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp((($t231 = __first.op_add__c({a: [__secondChild], i: 0}), $t231)).op_mul__c(), (($t232 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t232)).op_mul__c())) {
        ($t233 = __secondChild, __secondChild = (($t233 - 1) | 0), $t233);
      }
      (($t235 = (($t236 = __first.op_add__c({a: [__holeIndex], i: 0}), $t236)).op_mul__c(), $t235.a[$t235.i])).op_assign__rv(std_move_std_pair_int_int((($t234 = __first.op_add__c({a: [__secondChild], i: 0}), $t234)).op_mul__c()));
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t238 = (($t239 = __first.op_add__c({a: [__holeIndex], i: 0}), $t239)).op_mul__c(), $t238.a[$t238.i])).op_assign__rv(std_move_std_pair_int_int((($t237 = __first.op_add__c({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t237)).op_mul__c()));
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t240 = std_move_std_pair_int_int({a: __value, i: "v"}), $t240.a[$t240.i]), __comp);
}
function std_adjust_heap_1_long_long_P_long_long_long_lambda_2(__first, __holeIndex, __len, __value, __comp) {
  let $t241, $t242, $t243, $t244, $t245, $t246, $t247, $t248;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      if (__comp.op_call__c(($t241 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t241.a[$t241.i]), ($t242 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t242.a[$t242.i]))) {
        ($t243 = __secondChild, __secondChild = (($t243 - 1) | 0), $t243);
      }
      (($t244 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t244)).a[(($t244 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t244)).i] = ($t245 = std_move_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t245.a[$t245.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
     {
      __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
      (($t246 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t246)).a[(($t246 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t246)).i] = ($t247 = std_move_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t247.a[$t247.i]);
      __holeIndex = (((__secondChild) - (1)) | 0);
    }
  }
  std_push_heap_1_long_long_P_long_long_long_lambda_2((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t248 = std_move_long_long({a: __value, i: "v"}), $t248.a[$t248.i]), __comp);
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  let $t249;
  return ($t249 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0})), $t249 ? {a: $t249.a, i: $t249.i} : null);
}
function std_niter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__it) {
  let $t250;
  return ($t250 = std_Iter_base_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value1._S_base(new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [__it], i: 0})), $t250 ? {a: $t250.a, i: $t250.i} : null);
}
function std_niter_base_long_long_P(__it) {
  let $t251;
  return ($t251 = std_Iter_base_long_long_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t251 ? {a: $t251.a, i: $t251.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t252;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t252 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_int((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t252 ? {a: $t252.a, i: $t252.i} : null);
}
function std_copy_move_backward_a_value1_std_pair_int_int_P_std_pair_int_int_P(__first, __last, __result) {
  let $t253;
  let __simple = (((0 && 1) && 1) && 1);
  return ($t253 = std_copy_move_backward_value1_value0_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value0_std_random_access_iterator_tag_copy_move_b_std_pair_int_int_P_std_pair_int_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t253 ? {a: $t253.a, i: $t253.i} : null);
}
function std_copy_move_backward_a_value1_long_long_P_long_long_P(__first, __last, __result) {
  let $t254;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t254 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b__std_copy_move_backward_value1_value1_std_random_access_iterator_tag_copy_move_b_long_long((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t254 ? {a: $t254.a, i: $t254.i} : null);
}
function std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_func_bool_int_int_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t255, $t256, $t257, $t258, $t259, $t260, $t261, $t262, $t263;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp(($t255 = (($t256 = __first.op_add__c({a: [__parent], i: 0}), $t256)).op_mul__c(), $t255.a[$t255.i]), __value.v))) {
     {
      ($t257 = (($t260 = __first.op_add__c({a: [__holeIndex], i: 0}), $t260)).op_mul__c(), $t257.a[$t257.i] = ($t258 = std_move_int((($t259 = __first.op_add__c({a: [__parent], i: 0}), $t259)).op_mul__c()), $t258.a[$t258.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t261 = (($t263 = __first.op_add__c({a: [__holeIndex], i: 0}), $t263)).op_mul__c(), $t261.a[$t261.i] = ($t262 = std_move_int({a: __value, i: "v"}), $t262.a[$t262.i]));
}
function std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_lambda_1(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t264, $t265, $t266, $t267, $t268, $t269, $t270, $t271, $t272;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp.op_call__c(($t264 = (($t265 = __first.op_add__c({a: [__parent], i: 0}), $t265)).op_mul__c(), $t264.a[$t264.i]), __value.v))) {
     {
      ($t266 = (($t269 = __first.op_add__c({a: [__holeIndex], i: 0}), $t269)).op_mul__c(), $t266.a[$t266.i] = ($t267 = std_move_int((($t268 = __first.op_add__c({a: [__parent], i: 0}), $t268)).op_mul__c()), $t267.a[$t267.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t270 = (($t272 = __first.op_add__c({a: [__holeIndex], i: 0}), $t272)).op_mul__c(), $t270.a[$t270.i] = ($t271 = std_move_int({a: __value, i: "v"}), $t271.a[$t271.i]));
}
function std_push_heap_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int_Cmp(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t273, $t274, $t275, $t276, $t277, $t278, $t279, $t280, $t281;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp.op_call__c(($t273 = (($t274 = __first.op_add__c({a: [__parent], i: 0}), $t274)).op_mul__c(), $t273.a[$t273.i]), __value.v))) {
     {
      ($t275 = (($t278 = __first.op_add__c({a: [__holeIndex], i: 0}), $t278)).op_mul__c(), $t275.a[$t275.i] = ($t276 = std_move_int((($t277 = __first.op_add__c({a: [__parent], i: 0}), $t277)).op_mul__c()), $t276.a[$t276.i]));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  ($t279 = (($t281 = __first.op_add__c({a: [__holeIndex], i: 0}), $t281)).op_mul__c(), $t279.a[$t279.i] = ($t280 = std_move_int({a: __value, i: "v"}), $t280.a[$t280.i]));
}
function std_push_heap_1_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_long_std_pair_int_int_func_bool_std_pair_int_int_R_std_pair_int_int_R_P(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t282, $t283, $t284, $t285, $t286, $t287;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp((($t282 = __first.op_add__c({a: [__parent], i: 0}), $t282)).op_mul__c(), {a: __value, i: "v"}))) {
     {
      (($t284 = (($t285 = __first.op_add__c({a: [__holeIndex], i: 0}), $t285)).op_mul__c(), $t284.a[$t284.i])).op_assign__rv(std_move_std_pair_int_int((($t283 = __first.op_add__c({a: [__parent], i: 0}), $t283)).op_mul__c()));
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t286 = (($t287 = __first.op_add__c({a: [__holeIndex], i: 0}), $t287)).op_mul__c(), $t286.a[$t286.i])).op_assign__rv(std_move_std_pair_int_int({a: __value, i: "v"}));
}
function std_push_heap_1_long_long_P_long_long_long_lambda_2(__first, __holeIndex, __topIndex, __value, __comp) {
  let $t288, $t289, $t290, $t291, $t292;
  __value = {v: __value};
  let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
  while (((__holeIndex > __topIndex) && __comp.op_call__c(($t288 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t288.a[$t288.i]), __value.v))) {
     {
      (($t289 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t289)).a[(($t289 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t289)).i] = ($t290 = std_move_long_long(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t290.a[$t290.i]);
      __holeIndex = __parent;
      __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
    }
  }
  (($t291 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t291)).a[(($t291 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t291)).i] = ($t292 = std_move_long_long({a: __value, i: "v"}), $t292.a[$t292.i]);
}
let std_piecewise_construct = new std_piecewise_construct_t();
let ctj_stdin_file = {v: new IO_FILE(0, 0)};
let ctj_stdout_file = {v: new IO_FILE(1, 0)};
let ctj_stderr_file = {v: new IO_FILE(2, 0)};
let stdin = (({a: ctj_stdin_file, i: "v"}) ? {a: ({a: ctj_stdin_file, i: "v"}).a, i: ({a: ctj_stdin_file, i: "v"}).i} : null);
let stdout = (({a: ctj_stdout_file, i: "v"}) ? {a: ({a: ctj_stdout_file, i: "v"}).a, i: ({a: ctj_stdout_file, i: "v"}).i} : null);
let stderr = (({a: ctj_stderr_file, i: "v"}) ? {a: ({a: ctj_stderr_file, i: "v"}).a, i: ({a: ctj_stderr_file, i: "v"}).i} : null);
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = new std_Swallow_assign();
let gnu_cxx_default_lock_policy = 0;
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
main();
