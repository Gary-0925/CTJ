"use strict";
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
    this.__arr = (($a[0]).a[($a[0]).i]).__arr;
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
class std_uses_alloc_base {
  __init_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_uses_alloc0_Anything {
  constructor(...$a) {
    this.__init_std_uses_alloc0_Anything(...$a);
  }
  __init_std_uses_alloc0_Anything(...$a) {
  }
  __dtor() {
  }
}
class std_uses_alloc0 extends std_uses_alloc_base {
  _M_a;
  constructor(...$a) {
    super();
    this.__init_std_uses_alloc0(...$a);
  }
  __init_std_uses_alloc0(...$a) {
    this._M_a = new std_uses_alloc0_Anything();
    this._M_a.ctj_a = this; this._M_a.ctj_i = "_M_a";
  }
  __dtor() {
    std_uses_alloc_base.prototype.__dtor.call(this);
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
class std_Tuple_impl_value2 {
  constructor(...$a) {
    this.__init_std_Tuple_impl_value2(...$a);
  }
  __init_std_Tuple_impl_value2(...$a) {
  }
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
class std_is_empty_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_double(...$a);
  }
  __init_std_is_empty_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_double extends std_is_empty_double {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_double(...$a);
  }
  __init_std_is_empty_non_tuple_double(...$a) {
  }
  __dtor() {
    std_is_empty_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_double {
  __init_std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_double(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value1_double_value0 {
  _M_head_impl$std_Head_base_value1_double_value0;
  constructor(...$a) {
    this.__init_std_Head_base_value1_double_value0(...$a);
  }
  __init_std_Head_base_value1_double_value0(...$a) {
    this._M_head_impl$std_Head_base_value1_double_value0 = ($a[0]).a[($a[0]).i];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return {a: __b.a[__b.i], i: "_M_head_impl$std_Head_base_value1_double_value0"};
  }
}
class std_Tuple_impl_value1_double extends std_Tuple_impl_value2 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value1_double(...$a);
  }
  __init_std_Tuple_impl_value1_double(...$a) {
    std_Head_base_value1_double_value0.prototype.__init_std_Head_base_value1_double_value0.call(this, $a[0]);
  }
  __dtor() {
    std_Tuple_impl_value2.prototype.__dtor.call(this);
    std_Head_base_value1_double_value0.prototype.__dtor.call(this);
  }
  static _M_head(__t) {
    return std_Head_base_value1_double_value0._M_head(__t);
  }
}
for (let $b = std_Head_base_value1_double_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value1_double.prototype)) std_Tuple_impl_value1_double.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value1_double)) std_Tuple_impl_value1_double[$k] = $b[$k];
  }
}
class std_is_empty_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_int(...$a);
  }
  __init_std_is_empty_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_int extends std_is_empty_int {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_int(...$a);
  }
  __init_std_is_empty_non_tuple_int(...$a) {
  }
  __dtor() {
    std_is_empty_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int {
  __init_std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value0_int_value0 {
  _M_head_impl$std_Head_base_value0_int_value0;
  constructor(...$a) {
    this.__init_std_Head_base_value0_int_value0(...$a);
  }
  __init_std_Head_base_value0_int_value0(...$a) {
    this._M_head_impl$std_Head_base_value0_int_value0 = ($a[0]).a[($a[0]).i];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return {a: __b.a[__b.i], i: "_M_head_impl$std_Head_base_value0_int_value0"};
  }
}
class std_Tuple_impl_value0_int_double extends std_Tuple_impl_value1_double {
  constructor(...$a) {
    super(...[$a[1]]);
    this.__init_std_Tuple_impl_value0_int_double(...$a);
  }
  __init_std_Tuple_impl_value0_int_double(...$a) {
    std_Head_base_value0_int_value0.prototype.__init_std_Head_base_value0_int_value0.call(this, $a[0]);
  }
  __dtor() {
    std_Tuple_impl_value1_double.prototype.__dtor.call(this);
    std_Head_base_value0_int_value0.prototype.__dtor.call(this);
  }
  static _M_head(__t) {
    return std_Head_base_value0_int_value0._M_head(__t);
  }
}
for (let $b = std_Head_base_value0_int_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_double.prototype)) std_Tuple_impl_value0_int_double.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_double)) std_Tuple_impl_value0_int_double[$k] = $b[$k];
  }
}
class std_tuple_int_double extends std_Tuple_impl_value0_int_double {
  constructor(...$a) {
    super(...($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") ? [$a[0], $a[1]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_int_double) ? [] : []));
    this.__init_std_tuple_int_double(...$a);
  }
  __init_std_tuple_int_double(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_int_double)) {
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Tuple_impl_value0_int_double.prototype.__dtor.call(this);
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
class std_conditional_value0_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
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
class std_is_convertible_double_R_double extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_double_R_double(...$a);
  }
  __init_std_is_convertible_double_R_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_double_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_double_R(...$a);
  }
  __init_std_is_void_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_double_R {
  __init_std_remove_cv_double_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_double_R {
  __init_std_remove_volatile_double_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_double_R {
  __init_std_remove_const_double_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_double_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_double_R(...$a);
  }
  __init_std_is_void_helper_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_double(...$a);
  }
  __init_std_is_function_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_double(...$a);
  }
  __init_std_is_array_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_double_std_is_array_double extends std_is_array_double {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_double_std_is_array_double(...$a);
  }
  __init_std_or_std_is_function_double_std_is_array_double(...$a) {
  }
  __dtor() {
    std_is_array_double.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_double_R_std_is_function_double_std_is_array_double extends std_or_std_is_function_double_std_is_array_double {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_double_R_std_is_function_double_std_is_array_double(...$a);
  }
  __init_std_or_std_is_void_double_R_std_is_function_double_std_is_array_double(...$a) {
  }
  __dtor() {
    std_or_std_is_function_double_std_is_array_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_double_std_is_array_double {
  __init_std_conditional_value0_std_is_function_double_std_is_array_double(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_double_R_std_or_std_is_function_double_std_is_array_double {
  __init_std_conditional_value0_std_is_void_double_R_std_or_std_is_function_double_std_is_array_double(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_double_R_double_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_double_R_double_value0(...$a);
  }
  __init_std_is_convertible_helper_double_R_double_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_double_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_double_R(...$a);
  }
  __init_std_is_reference_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_double_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_double_R(...$a);
  }
  __init_std_is_lvalue_reference_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_double_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_double_R(...$a);
  }
  __init_std_is_rvalue_reference_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_double_R_std_is_rvalue_reference_double_R extends std_is_lvalue_reference_double_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_double_R_std_is_rvalue_reference_double_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_double_R_std_is_rvalue_reference_double_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_double_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_double_R_std_is_rvalue_reference_double_R {
  __init_std_conditional_value1_std_is_lvalue_reference_double_R_std_is_rvalue_reference_double_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_double_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_double_R(...$a);
  }
  __init_std_not_std_is_reference_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_double_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_double_R(...$a);
  }
  __init_std_not_std_is_void_double_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_double_R_std_not_std_is_void_double_R extends std_not_std_is_reference_double_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_double_R_std_not_std_is_void_double_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_double_R_std_not_std_is_void_double_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_double_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_double_R_std_not_std_is_reference_double_R {
  __init_std_conditional_value0_std_not_std_is_void_double_R_std_not_std_is_reference_double_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_double_R_value0 {
  __init_std_add_rvalue_reference_helper_double_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_double_R extends std_add_rvalue_reference_helper_double_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_double_R(...$a);
  }
  __init_std_add_rvalue_reference_double_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_double_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_int_R_int_std_is_convertible_double_R_double extends std_is_convertible_double_R_double {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_int_R_int_std_is_convertible_double_R_double(...$a);
  }
  __init_std_and_std_is_convertible_int_R_int_std_is_convertible_double_R_double(...$a) {
  }
  __dtor() {
    std_is_convertible_double_R_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_double_R_double_std_is_convertible_int_R_int {
  __init_std_conditional_value1_std_is_convertible_double_R_double_std_is_convertible_int_R_int(...$a) { }
  __dtor() {
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
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
class std_is_convertible_double_double extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_double_double(...$a);
  }
  __init_std_is_convertible_double_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_double(...$a);
  }
  __init_std_is_void_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_double {
  __init_std_remove_cv_double(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_double {
  __init_std_remove_volatile_double(...$a) { }
  __dtor() {
  }
}
class std_remove_const_double {
  __init_std_remove_const_double(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_double(...$a);
  }
  __init_std_is_void_helper_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_double_std_is_function_double_std_is_array_double extends std_or_std_is_function_double_std_is_array_double {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_double_std_is_function_double_std_is_array_double(...$a);
  }
  __init_std_or_std_is_void_double_std_is_function_double_std_is_array_double(...$a) {
  }
  __dtor() {
    std_or_std_is_function_double_std_is_array_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_double_std_or_std_is_function_double_std_is_array_double {
  __init_std_conditional_value0_std_is_void_double_std_or_std_is_function_double_std_is_array_double(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_double_double_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_double_double_value0(...$a);
  }
  __init_std_is_convertible_helper_double_double_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_double(...$a);
  }
  __init_std_is_reference_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_double(...$a);
  }
  __init_std_is_lvalue_reference_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_double extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_double(...$a);
  }
  __init_std_is_rvalue_reference_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_double_std_is_rvalue_reference_double extends std_is_rvalue_reference_double {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_double_std_is_rvalue_reference_double(...$a);
  }
  __init_std_or_std_is_lvalue_reference_double_std_is_rvalue_reference_double(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_double_std_is_rvalue_reference_double {
  __init_std_conditional_value0_std_is_lvalue_reference_double_std_is_rvalue_reference_double(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_double extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_double(...$a);
  }
  __init_std_not_std_is_reference_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_double extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_double(...$a);
  }
  __init_std_not_std_is_void_double(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_double_std_not_std_is_void_double extends std_not_std_is_void_double {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_double_std_not_std_is_void_double(...$a);
  }
  __init_std_and_std_not_std_is_reference_double_std_not_std_is_void_double(...$a) {
  }
  __dtor() {
    std_not_std_is_void_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_double_std_not_std_is_reference_double {
  __init_std_conditional_value1_std_not_std_is_void_double_std_not_std_is_reference_double(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_double_value1 {
  __init_std_add_rvalue_reference_helper_double_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_double extends std_add_rvalue_reference_helper_double_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_double(...$a);
  }
  __init_std_add_rvalue_reference_double(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_double_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_int_int_std_is_convertible_double_double extends std_is_convertible_double_double {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_int_int_std_is_convertible_double_double(...$a);
  }
  __init_std_and_std_is_convertible_int_int_std_is_convertible_double_double(...$a) {
  }
  __dtor() {
    std_is_convertible_double_double.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_double_double_std_is_convertible_int_int {
  __init_std_conditional_value1_std_is_convertible_double_double_std_is_convertible_int_int(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_int_double {
  __init_std_tuple_element_value0_std_tuple_int_double(...$a) { }
  __dtor() {
  }
}
class std_add_ref_int {
  __init_std_add_ref_int(...$a) { }
  __dtor() {
  }
}
class std_add_c_ref_int {
  __init_std_add_c_ref_int(...$a) { }
  __dtor() {
  }
}
class std_add_r_ref_int {
  __init_std_add_r_ref_int(...$a) { }
  __dtor() {
  }
}
class std_Tuple_impl_value1 {
  __init_std_Tuple_impl_value1(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value0_double_value0 {
  _M_head_impl$std_Head_base_value0_double_value0;
  constructor(...$a) {
    this.__init_std_Head_base_value0_double_value0(...$a);
  }
  __init_std_Head_base_value0_double_value0(...$a) {
    this._M_head_impl$std_Head_base_value0_double_value0 = 0;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_double extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_double(...$a);
  }
  __init_std_Tuple_impl_value0_double(...$a) {
    std_Head_base_value0_double_value0.prototype.__init_std_Head_base_value0_double_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_double_value0.prototype.__dtor.call(this);
  }
}
for (let $b = std_Head_base_value0_double_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value0_double.prototype)) std_Tuple_impl_value0_double.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_double)) std_Tuple_impl_value0_double[$k] = $b[$k];
  }
}
class std_tuple_double extends std_Tuple_impl_value0_double {
  constructor(...$a) {
    super();
    this.__init_std_tuple_double(...$a);
  }
  __init_std_tuple_double(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_double.prototype.__dtor.call(this);
  }
}
class std_tuple_element_value0_std_tuple_double {
  __init_std_tuple_element_value0_std_tuple_double(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value1_std_tuple_int_double extends std_tuple_element_value0_std_tuple_double {
  constructor(...$a) {
    super();
    this.__init_std_tuple_element_value1_std_tuple_int_double(...$a);
  }
  __init_std_tuple_element_value1_std_tuple_int_double(...$a) {
  }
  __dtor() {
    std_tuple_element_value0_std_tuple_double.prototype.__dtor.call(this);
  }
}
class std_add_ref_double {
  __init_std_add_ref_double(...$a) { }
  __dtor() {
  }
}
class std_add_c_ref_double {
  __init_std_add_c_ref_double(...$a) { }
  __dtor() {
  }
}
class std_add_r_ref_double {
  __init_std_add_r_ref_double(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
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
class std_declval_protector_double_R {
  constructor(...$a) {
    this.__init_std_declval_protector_double_R(...$a);
  }
  __init_std_declval_protector_double_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
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
class std_declval_protector_double {
  constructor(...$a) {
    this.__init_std_declval_protector_double(...$a);
  }
  __init_std_declval_protector_double(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_is_convertible_int_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_int_std_uses_alloc_base(...$a);
  }
  __init_std_is_convertible_int_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_uses_alloc_base(...$a);
  }
  __init_std_is_function_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_is_array_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_is_array_std_uses_alloc_base {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_is_array_std_uses_alloc_base.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  __init_std_conditional_value0_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  __init_std_conditional_value0_std_is_void_int_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_int_std_uses_alloc_base_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a);
  }
  __init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_double_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_double_std_uses_alloc_base(...$a);
  }
  __init_std_is_convertible_double_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_double_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_double_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_or_std_is_void_double_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_double_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  __init_std_conditional_value0_std_is_void_double_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_double_std_uses_alloc_base_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_double_std_uses_alloc_base_value0(...$a);
  }
  __init_std_is_convertible_helper_double_std_uses_alloc_base_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
function vprintf(fmt, ap) {
  return ((globalThis.__ctjvf || (globalThis.__ctjvf = function (mode, dst, n, fmt, ap) { var NL = String.fromCharCode(10); function toStr(q) { if (q === null || q === undefined) return '(null)'; var a = q.a, i = q.i | 0, r = '', x; if (typeof a === 'string') return a.slice(i); for (; ; i++) { x = a[i]; if (x === undefined || x === null || x === 0) break; r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); } return r; } function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } function toBig(x) { if (typeof x === 'bigint') return x; if (typeof x === 'boolean') return x ? 1n : 0n; x = Number(x); return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; } function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } function numPad(sign, body, w, fl, zeroOK) { var len = sign.length + body.length; if (w <= len) return sign + body; if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; return spaces(w - len) + sign + body; } function fixedStr(a, p) { var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { d = String(fl0); while (d.length <= p) d = '0' + d; s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; } return s; } function fixExp(s) { var k = s.indexOf('e'), e = s.slice(k + 2); if (e.length < 2) e = '0' + e; return s.slice(0, k + 2) + e; } function stripZeros(t) { var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); if (m.indexOf('.') >= 0) { while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); } return m + ex; } function write(t, fd) { if (!t) return; if (typeof process !== 'undefined' && process && process.stdout) { (fd === 2 && process.stderr ? process.stderr : process.stdout).write(t); return; } var g = globalThis, j; g.__ctjpend = (g.__ctjpend || '') + t; while ((j = g.__ctjpend.indexOf(NL)) >= 0) { console.log(g.__ctjpend.slice(0, j)); g.__ctjpend = g.__ctjpend.slice(j + 1); } } function next() { return ap.a[ap.i++]; } var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; while (i < f.length) { c = f.charAt(i++); if (c !== '%') { out += c; continue; } fl = ''; while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); w = 0; if (f.charAt(i) === '*') { w = Number(toBig(next())); i++; if (w < 0) { fl += '-'; w = -w; } } else { while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; } pr = -1; if (f.charAt(i) === '.') { i++; pr = 0; if (f.charAt(i) === '*') { pr = Number(toBig(next())); i++; } else { while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; } } L = ''; while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); conv = f.charAt(i++); if (conv === '') { out += '%'; break; } if (conv === '%') { out += '%'; continue; } if ('diuoxX'.indexOf(conv) >= 0) { var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; var signed = conv === 'd' || conv === 'i'; var v = toBig(next()); v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); var neg = signed && v < 0n; var mag = neg ? -v : v; var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); if (pr >= 0) { if (pr === 0 && mag === 0n) ds = ''; while (ds.length < pr) ds = '0' + ds; } var pre = ''; if (neg) pre = '-'; else if (signed && fl.indexOf('+') >= 0) pre = '+'; else if (signed && fl.indexOf(' ') >= 0) pre = ' '; if (fl.indexOf('#') >= 0 && mag !== 0n) { if (conv === 'x') pre += '0x'; else if (conv === 'X') pre += '0X'; else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; } out += numPad(pre, ds, w, fl, pr < 0); } else if (conv === 'c') { out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); } else if (conv === 's') { var sv = toStr(next()); if (pr >= 0) sv = sv.slice(0, pr); out += numPad('', sv, w, fl, false); } else if (conv === 'p') { var pv = next(), ps; if (pv === null || pv === undefined) ps = '(nil)'; else { if (typeof pv === 'object' && pv.ctjAddr === undefined) { globalThis.__ctjaddr = (globalThis.__ctjaddr || 0) + 1; pv.ctjAddr = 4096 + 16 * globalThis.__ctjaddr; } ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); } out += numPad('', ps, w, fl, false); } else if ('fFeEgGaA'.indexOf(conv) >= 0) { var x = Number(next()); var p = pr < 0 ? 6 : pr; var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; var ax = Math.abs(x), t; if (x !== x) t = 'nan'; else if (ax === Infinity) t = 'inf'; else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); else { var P = p === 0 ? 1 : p; var es = ax.toExponential(P - 1); var X = parseInt(es.slice(es.indexOf('e') + 1), 10); t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); if (fl.indexOf('#') < 0) t = stripZeros(t); } if (conv === conv.toUpperCase()) t = t.toUpperCase(); out += numPad(sg, t, w, fl, isFinite(x)); } else if (conv === 'n') { var tg = next(); if (tg) tg.a[tg.i] = out.length; } else { out += '%' + conv; } } if (mode !== 0) { write(out, mode === 2 ? 2 : 1); return out.length; } if (dst && n > 0) { var m = Math.min(out.length, n - 1), k; for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; dst.a[dst.i + m] = 0; } return out.length; } ))((1), (0), (0), (fmt), (ap)));
}
function printf(fmt, ...$p1_rest) {
  let ap = null;
  (ap = {a: $p1_rest, i: 0}, undefined);
  let r = vprintf((fmt ? {a: fmt.a, i: fmt.i} : null), (ap ? {a: ap.a, i: ap.i} : null));
  (ap, undefined);
  return r;
}
function vsum(n, ap) {
  let $t0;
  let s = 0;
  for (let i = 0; (i < n); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
    s = (((((s) + (((p) => { const v = p.a[p.i++]; return ((Number(typeof v === "bigint" ? BigInt.asIntN(32, v) : v)) | 0); })(ap))) | 0)) | 0);
  }
  return s;
}
function sumcopy(n, ...$p1_rest) {
  let a = null;
  let b = null;
  (a = {a: $p1_rest, i: 0}, undefined);
  (b = ((s) => ({a: s.a, i: s.i}))(a), undefined);
  let s1 = vsum(n, (a ? {a: a.a, i: a.i} : null));
  let s2 = vsum(n, (b ? {a: b.a, i: b.i} : null));
  (a, undefined);
  (b, undefined);
  return (((((Math.imul(s1, 100)) | 0)) + (s2)) | 0);
}
function logf(fmt, ...$p1_rest) {
  let ap = null;
  (ap = {a: $p1_rest, i: 0}, undefined);
  vprintf((fmt ? {a: fmt.a, i: fmt.i} : null), (ap ? {a: ap.a, i: ap.i} : null));
  (ap, undefined);
}
function add3(a, b, c) {
  return ((((((a) + (b)) | 0)) + (c)) | 0);
}
function main() {
  let $t1, $t2;
  printf({a: [37, 100, 10, 0], i: 0}, sumcopy(3, 1, 2, 3));
  logf({a: [37, 115, 45, 37, 100, 10, 0], i: 0}, {a: [97, 98, 0], i: 0}, 42);
  printf({a: [37, 100, 10, 0], i: 0}, tw_int_int_int(1, 2, 3));
  printf({a: [37, 100, 10, 0], i: 0}, outer_int_int(1, 2));
  fwd_print_int_int_int({a: [1], i: 0}, {a: [2], i: 0}, {a: [3], i: 0});
  let t = {v: mk_int_double(3, 2.5)};
  printf({a: [37, 100, 32, 37, 103, 10, 0], i: 0}, ($t1 = std_get_4_value0_int_double({a: t, i: "v"}), $t1.a[$t1.i]), ($t2 = std_get_4_value1_int_double({a: t, i: "v"}), $t2.a[$t2.i]));
  logf({a: [91, 118, 61, 37, 100, 93, 10, 0], i: 0}, 7);
  logf({a: [91, 112, 108, 97, 105, 110, 93, 10, 0], i: 0});
  printf({a: [37, 100, 10, 0], i: 0}, add3(1, 2, 3));
  return 0;
}
function tw_int_int_int(xs_0, xs_1, xs_2) {
  let a = [twice_int(xs_0), twice_int(xs_1), twice_int(xs_2)];
  return (((a[0]) + (3)) | 0);
}
function outer_int_int(xs_0, xs_1) {
  return (((((Math.imul(nested_int_int(twice_int(xs_0), twice_int(xs_1)), 10)) | 0)) + (nested_int_int_int(xs_0, xs_1, 1))) | 0);
}
function fwd_print_int_int_int(xs_0, xs_1, xs_2) {
  let $t3, $t4, $t5;
  let a = [(printf({a: [60, 37, 100, 62, 0], i: 0}, ($t3 = std_forward_1_int(xs_0), $t3.a[$t3.i])), 0), (printf({a: [60, 37, 100, 62, 0], i: 0}, ($t4 = std_forward_1_int(xs_1), $t4.a[$t4.i])), 0), (printf({a: [60, 37, 100, 62, 0], i: 0}, ($t5 = std_forward_1_int(xs_2), $t5.a[$t5.i])), 0)];
  (void (a));
  printf({a: [10, 0], i: 0});
}
function mk_int_double(xs_0, xs_1) {
  return new std_tuple_int_double({a: [xs_0], i: 0}, {a: [xs_1], i: 0});
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_double_R() {
  return std_declval_protector_double_R.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_double() {
  return std_declval_protector_double.__delegate();
}
function std_get_4_value0_int_double(__t) {
  return std_get_helper_value0_int_double(__t);
}
function std_get_4_value1_int_double(__t) {
  return std_get_helper_value1_double(__t);
}
function twice_int(x) {
  return ((Math.imul(x, 2)) | 0);
}
function nested_int_int(xs_0, xs_1) {
  return 2;
}
function nested_int_int_int(xs_0, xs_1, xs_2) {
  return 3;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_get_helper_value0_int_double(__t) {
  return std_Tuple_impl_value0_int_double._M_head(__t);
}
function std_get_helper_value1_double(__t) {
  return std_Tuple_impl_value1_double._M_head(__t);
}
let ctj_stdin_file = {v: new IO_FILE(0, 0)};
let ctj_stdout_file = {v: new IO_FILE(1, 0)};
let ctj_stderr_file = {v: new IO_FILE(2, 0)};
let stdin = (({a: ctj_stdin_file, i: "v"}) ? {a: ({a: ctj_stdin_file, i: "v"}).a, i: ({a: ctj_stdin_file, i: "v"}).i} : null);
let stdout = (({a: ctj_stdout_file, i: "v"}) ? {a: ({a: ctj_stdout_file, i: "v"}).a, i: ({a: ctj_stdout_file, i: "v"}).i} : null);
let stderr = (({a: ctj_stderr_file, i: "v"}) ? {a: ({a: ctj_stderr_file, i: "v"}).a, i: ({a: ctj_stderr_file, i: "v"}).i} : null);
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = new std_Swallow_assign();
main();
