"use strict";
function _ctj_peq(a, b) { return a === b || (!!a && !!b && a.a === b.a && a.i === b.i); }
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
    this.__arr = (($a[0]).a[($a[0]).i]).__arr;
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
class std_do_is_nary_constructible_impl {
  __init_std_do_is_nary_constructible_impl(...$a) { }
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
class class_156 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_156(...$a);
  }
  __init_class_156(...$a) {
    this.__count = 0;
    this.__value = 0;
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
class std_hash_base_unsigned_long_long_long_long {
  __init_std_hash_base_unsigned_long_long_long_long(...$a) { }
  __dtor() {
  }
}
class std_hash_long_long extends std_hash_base_unsigned_long_long_long_long {
  constructor(...$a) {
    super();
    this.__init_std_hash_long_long(...$a);
  }
  __init_std_hash_long_long(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_long_long.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  __init_std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  __init_std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  __init_std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.prototype.__dtor.call(this);
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
  __init_gnu_cxx_new_allocator_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t0;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_long_long((__n * 4)), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t1;
    (__p.a[__p.i] = ($t1 = std_forward_1_int(__args_0), $t1.a[$t1.i]));
  }
  destroy(__p) {
    void 0;
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
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
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
    this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t2;
    return ($t2 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
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
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  push_back(__x) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), __x);
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
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t3 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t3.a[$t3.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t4, $t5, $t6, $t7;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = this._M_allocate(__len);
    let __new_finish = __new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t4 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t4 ? {a: $t4.a, i: $t4.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t5 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t5 ? {a: $t5.a, i: $t5.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t6 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t6 ? {a: $t6.a, i: $t6.i} : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t7 ? {a: $t7.a, i: $t7.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int(...$a) { }
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
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t8, $t9;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t8 = (($a[0]).a[($a[0]).i]).base__c(), $t9 = ($t8 ? $t8.a[$t8.i] : null), $t9 && $t9.a !== undefined ? {a: $t9.a, i: $t9.i} : $t9);
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
  base__c() {
    return {a: this, i: "_M_current"};
  }
}
class std_iterator_traits_int_P {
  __init_std_iterator_traits_int_P(...$a) { }
  __dtor() {
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
class std_binary_function_int_int_bool {
  constructor(...$a) {
    this.__init_std_binary_function_int_int_bool(...$a);
  }
  __init_std_binary_function_int_int_bool(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_binary_function_int_int_bool)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_less_int extends std_binary_function_int_int_bool {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) ? [$a[0]] : []));
    this.__init_std_less_int(...$a);
  }
  __init_std_less_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_binary_function_int_int_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return (__x.a[__x.i] < __y.a[__y.i]);
  }
}
class std_unary_function_int_int {
  constructor(...$a) {
    this.__init_std_unary_function_int_int(...$a);
  }
  __init_std_unary_function_int_int(...$a) {
  }
  __dtor() {
  }
}
class std_Identity_int extends std_unary_function_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Identity_int(...$a);
  }
  __init_std_Identity_int(...$a) {
  }
  __dtor() {
    std_unary_function_int_int.prototype.__dtor.call(this);
  }
  op_call__c(__x) {
    return __x;
  }
}
class std_Rb_tree_const_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node = null;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return {a: this._M_node.a[this._M_node.i], i: "_M_value_field"};
  }
  op_inc() {
    let $t10;
    this._M_node = ($t10 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t10 ? {a: $t10.a, i: $t10.i} : null);
    return {a: [this], i: 0};
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_int(...$a);
  }
  __init_std_Rb_tree_node_int(...$a) {
    let $t11;
    this._M_value_field = ($t11 = std_forward_1_int($a[0]), $t11.a[$t11.i]);
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_Rb_tree_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_dec() {
    let $t12;
    this._M_node = ($t12 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t12 ? {a: $t12.a, i: $t12.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
}
class std_pair_std_Rb_tree_const_iterator_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_const_iterator_int_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_Rb_tree_const_iterator_int(std_forward_1_std_Rb_tree_iterator_int($a[0]));
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int_R {
  __init_std_remove_cv_std_Rb_tree_const_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int_R {
  __init_std_remove_volatile_std_Rb_tree_const_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_const_iterator_int_R {
  __init_std_remove_const_std_Rb_tree_const_iterator_int_R(...$a) { }
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
class std_is_void_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_R_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_R_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a) {
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
class std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R extends std_not_std_is_reference_std_Rb_tree_const_iterator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_const_iterator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_const_iterator_int_R_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_const_iterator_int_R_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_convertible_bool_R_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_bool_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_bool_R(...$a);
  }
  __init_std_is_void_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_bool_R {
  __init_std_remove_cv_bool_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_bool_R {
  __init_std_remove_volatile_bool_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_bool_R {
  __init_std_remove_const_bool_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_bool_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_bool_R(...$a);
  }
  __init_std_is_void_helper_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_bool(...$a);
  }
  __init_std_is_function_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_bool(...$a);
  }
  __init_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_bool_std_is_array_bool extends std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_or_std_is_function_bool_std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_bool_std_is_array_bool {
  __init_std_conditional_value0_std_is_function_bool_std_is_array_bool(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_bool_R_std_or_std_is_function_bool_std_is_array_bool {
  __init_std_conditional_value0_std_is_void_bool_R_std_or_std_is_function_bool_std_is_array_bool(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_bool_R_bool_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_bool_R_bool_value0(...$a);
  }
  __init_std_is_convertible_helper_bool_R_bool_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_bool_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_bool_R(...$a);
  }
  __init_std_is_reference_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_bool_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_bool_R(...$a);
  }
  __init_std_is_lvalue_reference_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_bool_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_bool_R(...$a);
  }
  __init_std_is_rvalue_reference_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R extends std_is_lvalue_reference_bool_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_bool_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R {
  __init_std_conditional_value1_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_bool_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_bool_R(...$a);
  }
  __init_std_not_std_is_reference_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_bool_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_bool_R(...$a);
  }
  __init_std_not_std_is_void_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R extends std_not_std_is_reference_bool_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_bool_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_bool_R_std_not_std_is_reference_bool_R {
  __init_std_conditional_value0_std_not_std_is_void_bool_R_std_not_std_is_reference_bool_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_R_value0 {
  __init_std_add_rvalue_reference_helper_bool_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_bool_R extends std_add_rvalue_reference_helper_bool_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_bool_R(...$a);
  }
  __init_std_add_rvalue_reference_bool_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_bool_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int {
  __init_std_remove_cv_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int {
  __init_std_remove_volatile_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_const_iterator_int {
  __init_std_remove_const_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_not_std_is_void_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_const_iterator_int_std_not_std_is_reference_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_const_iterator_int_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_const_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_is_convertible_bool_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_bool_bool(...$a);
  }
  __init_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_bool(...$a);
  }
  __init_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_bool {
  __init_std_remove_cv_bool(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_bool {
  __init_std_remove_volatile_bool(...$a) { }
  __dtor() {
  }
}
class std_remove_const_bool {
  __init_std_remove_const_bool(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_bool(...$a);
  }
  __init_std_is_void_helper_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_or_std_is_function_bool_std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_bool_std_or_std_is_function_bool_std_is_array_bool {
  __init_std_conditional_value0_std_is_void_bool_std_or_std_is_function_bool_std_is_array_bool(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_bool_bool_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_bool_bool_value0(...$a);
  }
  __init_std_is_convertible_helper_bool_bool_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_bool(...$a);
  }
  __init_std_is_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_bool(...$a);
  }
  __init_std_is_lvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_bool(...$a);
  }
  __init_std_is_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool extends std_is_rvalue_reference_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a);
  }
  __init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool {
  __init_std_conditional_value0_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_bool(...$a);
  }
  __init_std_not_std_is_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_bool(...$a);
  }
  __init_std_not_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool extends std_not_std_is_void_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a);
  }
  __init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_not_std_is_void_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_bool_std_not_std_is_reference_bool {
  __init_std_conditional_value1_std_not_std_is_void_bool_std_not_std_is_reference_bool(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_value1 {
  __init_std_add_rvalue_reference_helper_bool_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_bool extends std_add_rvalue_reference_helper_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_bool(...$a);
  }
  __init_std_add_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a) { }
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
    let $t13;
    if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_int_R && $a[2] instanceof std_tuple) {
      this.__init_std_pair_int_int({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new std_Index_tuple_value0(), new std_Index_tuple());
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_int_R) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_int_R) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      this.first = ($t13 = std_forward_int_R(std_get_4_value0_int_R($a[0])), $t13.a[$t13.i]);
      this.second = 0;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = 0;
      this.second = 0;
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
class std_binary_function_std_pair_int_int_std_pair_int_int_bool {
  __init_std_binary_function_std_pair_int_int_std_pair_int_int_bool(...$a) { }
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
class std_unary_function_std_pair_int_int_int {
  constructor(...$a) {
    this.__init_std_unary_function_std_pair_int_int_int(...$a);
  }
  __init_std_unary_function_std_pair_int_int_int(...$a) {
  }
  __dtor() {
  }
}
class std_Select1st_std_pair_int_int extends std_unary_function_std_pair_int_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Select1st_std_pair_int_int(...$a);
  }
  __init_std_Select1st_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_unary_function_std_pair_int_int_int.prototype.__dtor.call(this);
  }
  op_call__c(__x) {
    return {a: __x.a[__x.i], i: "first"};
  }
}
class std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  __init_std_allocator_std_pair_int_int_rebind_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_Rb_tree_iterator_std_pair_int_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_int_int)) {
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
    return {a: this._M_node.a[this._M_node.i], i: "_M_value_field"};
  }
  op_inc() {
    let $t14;
    this._M_node = ($t14 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t14 ? {a: $t14.a, i: $t14.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t15;
    this._M_node = ($t15 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t15 ? {a: $t15.a, i: $t15.i} : null);
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
class std_Rb_tree_node_std_pair_int_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_node_std_pair_int_int(...$a) {
    let $t16, $t17, $t18;
    this._M_value_field = new std_pair_int_int(($t16 = std_forward_1_std_piecewise_construct_t($a[0]), $t16.a[$t16.i]), ($t17 = std_forward_1_std_tuple_int_R($a[1]), $t17.a[$t17.i]), ($t18 = std_forward_1_std_tuple($a[2]), $t18.a[$t18.i]));
    this._M_value_field.ctj_a = this; this._M_value_field.ctj_i = "_M_value_field";
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_pair_std_Rb_tree_iterator_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_Rb_tree_iterator_int($a[0]);
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_iterator_int_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_int_R {
  __init_std_remove_cv_std_Rb_tree_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int_R {
  __init_std_remove_volatile_std_Rb_tree_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_int_R {
  __init_std_remove_const_std_Rb_tree_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_R_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_R_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R extends std_is_lvalue_reference_std_Rb_tree_iterator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_iterator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R extends std_not_std_is_reference_std_Rb_tree_iterator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_iterator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_int_R_std_not_std_is_reference_std_Rb_tree_iterator_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_int_R_std_not_std_is_reference_std_Rb_tree_iterator_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int {
  __init_std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_int {
  __init_std_remove_cv_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int {
  __init_std_remove_volatile_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_int {
  __init_std_remove_const_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_is_rvalue_reference_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int extends std_not_std_is_void_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_int_std_not_std_is_reference_std_Rb_tree_iterator_int {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_int_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int {
  __init_std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int {
  __init_std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_const_iterator_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_bool_R {
  constructor(...$a) {
    this.__init_std_declval_protector_bool_R(...$a);
  }
  __init_std_declval_protector_bool_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_bool {
  constructor(...$a) {
    this.__init_std_declval_protector_bool(...$a);
  }
  __init_std_declval_protector_bool(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_Tuple_impl_value1 {
  constructor(...$a) {
    this.__init_std_Tuple_impl_value1(...$a);
  }
  __init_std_Tuple_impl_value1(...$a) {
  }
  __dtor() {
  }
}
class std_is_empty_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_int_R(...$a);
  }
  __init_std_is_empty_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_int_R extends std_is_empty_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_int_R(...$a);
  }
  __init_std_is_empty_non_tuple_int_R(...$a) {
  }
  __dtor() {
    std_is_empty_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int_R {
  __init_std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value0_int_R_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_int_R_value0(...$a);
  }
  __init_std_Head_base_value0_int_R_value0(...$a) {
    this._M_head_impl = $a[0];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return (__b.a[__b.i])._M_head_impl;
  }
}
class std_Tuple_impl_value0_int_R extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_int_R(...$a);
  }
  __init_std_Tuple_impl_value0_int_R(...$a) {
    std_Head_base_value0_int_R_value0.prototype.__init_std_Head_base_value0_int_R_value0.call(this, $a[0]);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_int_R_value0.prototype.__dtor.call(this);
  }
  static _M_head(__t) {
    return std_Head_base_value0_int_R_value0._M_head(__t);
  }
}
for (let $b = std_Head_base_value0_int_R_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_R.prototype)) std_Tuple_impl_value0_int_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_R)) std_Tuple_impl_value0_int_R[$k] = $b[$k];
  }
}
class std_tuple_int_R extends std_Tuple_impl_value0_int_R {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_tuple_int_R(...$a);
  }
  __init_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_R.prototype.__dtor.call(this);
  }
}
class std_tuple {
  constructor(...$a) {
    this.__init_std_tuple(...$a);
  }
  __init_std_tuple(...$a) {
  }
  __dtor() {
  }
}
class std_Rb_tree_const_iterator_std_pair_int_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_pair_int_int(...$a) {
    this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_int_int((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null));
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    let $t19, $t20, $t21, $t22, $t23, $t24, $t25, $t26;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t19 = std_forward_1_std_Rb_tree_node_int_P($a[0]), $t20 = ($t19 ? $t19.a[$t19.i] : null), $t20 && $t20.a !== undefined ? {a: $t20.a, i: $t20.i} : $t20);
      this.second = ($t21 = std_forward_1_std_Rb_tree_node_int_P($a[1]), $t22 = ($t21 ? $t21.a[$t21.i] : null), $t22 && $t22.a !== undefined ? {a: $t22.a, i: $t22.i} : $t22);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t23 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[0]), $t24 = ($t23 ? $t23.a[$t23.i] : null), $t24 && $t24.a !== undefined ? {a: $t24.a, i: $t24.i} : $t24);
      this.second = ($t25 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[1]), $t26 = ($t25 ? $t25.a[$t25.i] : null), $t26 && $t26.a !== undefined ? {a: $t26.a, i: $t26.i} : $t26);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_base_P_R {
  __init_std_remove_cv_std_Rb_tree_node_base_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P_R {
  __init_std_remove_volatile_std_Rb_tree_node_base_P_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P_R {
  __init_std_remove_const_std_Rb_tree_node_base_P_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_is_lvalue_reference_std_Rb_tree_node_base_P_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_node_base_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_node_base_P_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_base_P_R_std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_base_P_R_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_base_P {
  __init_std_remove_cv_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P {
  __init_std_remove_volatile_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P {
  __init_std_remove_const_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_is_rvalue_reference_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P extends std_not_std_is_void_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_base_P_std_not_std_is_reference_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_base_P_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_iterator_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_iterator_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_Rb_tree_iterator_int {
  __init_std_remove_reference_std_Rb_tree_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
  __init_std_allocator_int_rebind_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_int {
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t27;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t27 = operatornew__unsigned_long_long((__n * 32)), $t27 ? {a: $t27.a, i: $t27.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 32));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_Rb_tree_node_int(std_forward_1_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_Rb_tree_node_int extends gnu_cxx_new_allocator_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_int {
  _M_key_compare;
  _M_header;
  _M_node_count;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    this._M_key_compare = new std_less_int();
    this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
    this._M_header = new std_Rb_tree_node_base();
    this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
    this._M_node_count = 0;
    this._M_initialize();
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header._M_color = 0;
    this._M_header._M_parent = null;
    this._M_header._M_left = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
    this._M_header._M_right = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a) {
    this._M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t28;
    return ($t28 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_begin() {
    return (this._M_impl._M_header._M_parent ? {a: this._M_impl._M_header._M_parent.a, i: this._M_impl._M_header._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t29, $t30;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t29 = new std_Identity_int(), $t29)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t30 = new std_Identity_int(), $t30)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_left(__x) {
    return (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
  }
  static _S_right(__x) {
    return (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
  }
  _M_get_insert_unique_pos(__k) {
    let $t31, $t32, $t33;
    let __x = ($t31 = this._M_begin(), $t31 ? {a: $t31.a, i: $t31.i} : null);
    let __y = ($t32 = this._M_end(), $t32 ? {a: $t32.a, i: $t32.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t33 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t33 ? {a: $t33.a, i: $t33.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_int((__y ? {a: __y.a, i: __y.i} : null));
    if (__comp) {
       {
        if (__j.op_eq__c({a: [this.begin()], i: 0})) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
        }
        else {
          __j.op_dec();
        }
      }
    }
    if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__j._M_node ? {a: __j._M_node.a, i: __j._M_node.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node"}, {a: [null], i: 0});
  }
  begin() {
    return new std_Rb_tree_iterator_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_int((({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null));
  }
  _M_insert_unique__rv(__v) {
    let $t34;
    let __res = this._M_get_insert_unique_pos((($t34 = new std_Identity_int(), $t34)).op_call__c(__v));
    if (__res.second) {
      return new std_pair_std_Rb_tree_iterator_int_bool({a: [this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_int(__v))], i: 0}, {a: [true], i: 0});
    }
    return new std_pair_std_Rb_tree_iterator_int_bool({a: [new std_Rb_tree_iterator_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null))], i: 0}, {a: [false], i: 0});
  }
  _M_insert___rv(__x, __p, __v) {
    let $t35, $t36, $t37, $t38;
    let __insert_left = (((__x !== null) || ($t36 = ($t35 = this._M_end(), $t35), (__p === $t36 || (__p && $t36 && __p.a === $t36.a && __p.i === $t36.i)))) || this._M_impl._M_key_compare.op_call__c((($t37 = new std_Identity_int(), $t37)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t38 = this._M_create_node__rv(std_forward_1_int(__v)), $t38 ? {a: $t38.a, i: $t38.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t39;
    let __tmp = ($t39 = this._M_get_node(), $t39 ? {a: $t39.a, i: $t39.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_int(__args_0));
      }
    }
    if (false) {
       {
        this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
    return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
  }
}
class std_set_int_std_less_int_std_allocator_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_set_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_set_int_std_less_int_std_allocator_int(...$a) {
    this._M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
  begin__c() {
    return new std_Rb_tree_const_iterator_int({a: [this._M_t.begin()], i: 0});
  }
  end__c() {
    return new std_Rb_tree_const_iterator_int({a: [this._M_t.end()], i: 0});
  }
  insert(__x) {
    let __p = this._M_t._M_insert_unique__rv(__x);
    return new std_pair_std_Rb_tree_const_iterator_int_bool({a: __p, i: "first"}, {a: __p, i: "second"});
  }
}
class std_remove_reference_std_piecewise_construct_t {
  __init_std_remove_reference_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_tuple_int_R {
  __init_std_remove_reference_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_tuple {
  __init_std_remove_reference_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int {
  __init_std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t40;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t40 = operatornew__unsigned_long_long((__n * 36)), $t40 ? {a: $t40.a, i: $t40.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 36));
  }
  construct__rv(__p, __args_0, __args_1, __args_2) {
    (__p.a[__p.i] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_std_Rb_tree_node_std_pair_int_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_std_pair_int_int {
  _M_key_compare;
  _M_header;
  _M_node_count;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a) {
    this._M_key_compare = new std_less_int();
    this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
    this._M_header = new std_Rb_tree_node_base();
    this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
    this._M_node_count = 0;
    this._M_initialize();
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header._M_color = 0;
    this._M_header._M_parent = null;
    this._M_header._M_left = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
    this._M_header._M_right = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    this._M_impl = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t41;
    return ($t41 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t41 ? {a: $t41.a, i: $t41.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_destroy_node(__p) {
    let $t42;
    (($t42 = this._M_get_Node_allocator(), $t42.a[$t42.i])).destroy((__p ? {a: __p.a, i: __p.i} : null));
    this._M_put_node((__p ? {a: __p.a, i: __p.i} : null));
  }
  _M_leftmost() {
    return {a: this._M_impl._M_header, i: "_M_left"};
  }
  _M_rightmost() {
    return {a: this._M_impl._M_header, i: "_M_right"};
  }
  _M_begin() {
    return (this._M_impl._M_header._M_parent ? {a: this._M_impl._M_header._M_parent.a, i: this._M_impl._M_header._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t43, $t44;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t43 = new std_Select1st_std_pair_int_int(), $t43)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t44 = new std_Select1st_std_pair_int_int(), $t44)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_left(__x) {
    return (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
  }
  static _S_right(__x) {
    return (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
  }
  _M_get_insert_unique_pos(__k) {
    let $t45, $t46, $t47;
    let __x = ($t45 = this._M_begin(), $t45 ? {a: $t45.a, i: $t45.i} : null);
    let __y = ($t46 = this._M_end(), $t46 ? {a: $t46.a, i: $t46.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t47 = (__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t47 ? {a: $t47.a, i: $t47.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_std_pair_int_int((__y ? {a: __y.a, i: __y.i} : null));
    if (__comp) {
       {
        if (__j.op_eq__c({a: [this.begin()], i: 0})) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
        }
        else {
          __j.op_dec();
        }
      }
    }
    if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__j._M_node ? {a: __j._M_node.a, i: __j._M_node.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node"}, {a: [null], i: 0});
  }
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t48, $t49, $t50, $t51, $t52, $t53, $t54, $t55, $t56, $t57, $t58, $t59;
    let __pos = __position._M_const_cast__c();
    if (($t49 = ($t48 = this._M_end(), $t48), (__pos._M_node === $t49 || (__pos._M_node && $t49 && __pos._M_node.a === $t49.a && __pos._M_node.i === $t49.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t50 = this._M_rightmost(), $t51 = ($t50 ? $t50.a[$t50.i] : null), $t51 && $t51.a !== undefined ? {a: $t51.a, i: $t51.i} : $t51)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_std_pair_int_int({a: [__pos], i: 0});
          if (($t53 = (($t52 = this._M_leftmost(), $t52) ? (($t52 = this._M_leftmost(), $t52)).a[(($t52 = this._M_leftmost(), $t52)).i] : null), (__pos._M_node === $t53 || (__pos._M_node && $t53 && __pos._M_node.a === $t53.a && __pos._M_node.i === $t53.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t55 = (($t54 = __before.op_dec(), $t54.a[$t54.i]))._M_node, $t55 ? {a: $t55.a, i: $t55.i} : null)), __k)) {
               {
                if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__before._M_node ? {a: __before._M_node.a, i: __before._M_node.i} : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __before, i: "_M_node"});
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node"}, {a: __pos, i: "_M_node"});
                }
              }
            }
            else {
              return this._M_get_insert_unique_pos(__k);
            }
          }
        }
      }
      else {
        if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_std_pair_int_int({a: [__pos], i: 0});
            if (($t57 = (($t56 = this._M_rightmost(), $t56) ? (($t56 = this._M_rightmost(), $t56)).a[(($t56 = this._M_rightmost(), $t56)).i] : null), (__pos._M_node === $t57 || (__pos._M_node && $t57 && __pos._M_node.a === $t57.a && __pos._M_node.i === $t57.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t59 = (($t58 = __after.op_inc(), $t58.a[$t58.i]))._M_node, $t59 ? {a: $t59.a, i: $t59.i} : null)))) {
                 {
                  if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __pos, i: "_M_node"});
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __after, i: "_M_node"}, {a: __after, i: "_M_node"});
                  }
                }
              }
              else {
                return this._M_get_insert_unique_pos(__k);
              }
            }
          }
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node"}, {a: [null], i: 0});
        }
      }
    }
  }
  _M_insert_node(__x, __p, __z) {
    let $t60, $t61;
    let __insert_left = (((__x !== null) || ($t61 = ($t60 = this._M_end(), $t60), (__p === $t61 || (__p && $t61 && __p.a === $t61.a && __p.i === $t61.i)))) || this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__z ? {a: __z.a, i: __z.i} : null)), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_lower_bound(__x, __y, __k) {
    let $t62, $t63;
    while ((__x !== null)) {
      if ((!(this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
        (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t62 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)), $t62 ? {a: $t62.a, i: $t62.i} : null));
      }
      else {
        __x = ($t63 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null)), $t63 ? {a: $t63.a, i: $t63.i} : null);
      }
    }
    return new std_Rb_tree_iterator_std_pair_int_int((__y ? {a: __y.a, i: __y.i} : null));
  }
  key_comp__c() {
    return new std_less_int({a: this._M_impl, i: "_M_key_compare"});
  }
  begin() {
    return new std_Rb_tree_iterator_std_pair_int_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_int_int((({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null));
  }
  size__c() {
    return this._M_impl._M_node_count;
  }
  lower_bound(__k) {
    let $t64, $t65;
    return this._M_lower_bound(($t64 = this._M_begin(), $t64 ? {a: $t64.a, i: $t64.i} : null), ($t65 = this._M_end(), $t65 ? {a: $t65.a, i: $t65.i} : null), __k);
  }
  _M_emplace_hint_unique__rv(__pos, __args_0, __args_1, __args_2) {
    let $t66;
    let __z = ($t66 = this._M_create_node__rv(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2)), $t66 ? {a: $t66.a, i: $t66.i} : null);
    if (true) {
       {
        let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_int_int({a: [__pos], i: 0}), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__z ? {a: __z.a, i: __z.i} : null)));
        if (__res.second) {
          return this._M_insert_node((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), (__z ? {a: __z.a, i: __z.i} : null));
        }
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
        return new std_Rb_tree_iterator_std_pair_int_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
      }
    }
    if (false) {
       {
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
      }
    }
  }
  _M_create_node__rv(__args_0, __args_1, __args_2) {
    let $t67;
    let __tmp = ($t67 = this._M_get_node(), $t67 ? {a: $t67.a, i: $t67.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2));
      }
    }
    if (false) {
       {
        this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
    return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
  }
}
class std_map_int_int_std_less_int_std_allocator_std_pair_int_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    this._M_t = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
  begin() {
    return this._M_t.begin();
  }
  end() {
    return this._M_t.end();
  }
  op_index(__k) {
    let $t68;
    let __i = {v: this.lower_bound(__k)};
    if ((__i.v.op_eq__c({a: [this.end()], i: 0}) || (($t68 = this.key_comp__c(), $t68)).op_call__c(__k, {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "first"}))) {
      __i.v.op_assign({a: [this._M_t._M_emplace_hint_unique__rv(new std_Rb_tree_const_iterator_std_pair_int_int({a: __i, i: "v"}), {a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_int_R(__k)], i: 0}, {a: [new std_tuple()], i: 0})], i: 0});
    }
    return {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "second"};
  }
  key_comp__c() {
    return this._M_t.key_comp__c();
  }
  lower_bound(__x) {
    return this._M_t.lower_bound(__x);
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
class std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_long_long_value0(...$a);
  }
  __init_std_integral_constant_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_extent_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_int_value0(...$a);
  }
  __init_std_extent_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
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
    let $t69;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t69 = (($a[0]).a[($a[0]).i]).base__c(), $t69 ? {a: $t69.a, i: $t69.i} : null);
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
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_int_P {
  __init_std_remove_cv_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_P {
  __init_std_remove_volatile_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_P {
  __init_std_remove_const_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_is_array_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P extends std_not_std_is_void_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_int_P_std_not_std_is_reference_std_Rb_tree_node_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_int_P_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int_P(...$a);
  }
  __init_std_is_function_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_int_P(...$a);
  }
  __init_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_int_P_std_is_array_int_P extends std_is_array_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  __init_std_or_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_is_array_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P extends std_or_std_is_function_int_P_std_is_array_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_P_std_is_array_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_int_P_std_is_array_int_P {
  __init_std_conditional_value0_std_is_function_int_P_std_is_array_int_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_enable_if_value0_void {
  __init_std_enable_if_value0_void(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_int_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_int_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
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
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_int_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_base_P_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_base_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_base_P(...$a) {
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
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
  static construct__rv(__a, __p, __args_0, __args_1, __args_2) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
  static _S_construct__rv(__a, __p, __args_0, __args_1, __args_2) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_const_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_is_lvalue_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t extends std_is_rvalue_reference_std_piecewise_construct_t {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_piecewise_construct_t.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t {
  __init_std_conditional_value0_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_not_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_piecewise_construct_t(...$a);
  }
  __init_std_is_void_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_piecewise_construct_t {
  __init_std_remove_cv_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_piecewise_construct_t {
  __init_std_remove_volatile_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_piecewise_construct_t {
  __init_std_remove_const_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_piecewise_construct_t(...$a);
  }
  __init_std_is_void_helper_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  __init_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t extends std_not_std_is_void_std_piecewise_construct_t {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_piecewise_construct_t.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_piecewise_construct_t_std_not_std_is_reference_std_piecewise_construct_t {
  __init_std_conditional_value1_std_not_std_is_void_std_piecewise_construct_t_std_not_std_is_reference_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  __init_std_add_rvalue_reference_helper_std_piecewise_construct_t_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_piecewise_construct_t extends std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  __init_std_add_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_piecewise_construct_t_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_tuple_int_R(...$a);
  }
  __init_std_is_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_tuple_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R extends std_is_rvalue_reference_std_tuple_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_tuple_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R {
  __init_std_conditional_value0_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_tuple_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_tuple_int_R(...$a);
  }
  __init_std_is_void_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_tuple_int_R {
  __init_std_remove_cv_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_tuple_int_R {
  __init_std_remove_volatile_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_tuple_int_R {
  __init_std_remove_const_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_tuple_int_R(...$a);
  }
  __init_std_is_void_helper_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_tuple_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  __init_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R extends std_not_std_is_void_std_tuple_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_tuple_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_int_R_std_not_std_is_reference_std_tuple_int_R {
  __init_std_conditional_value1_std_not_std_is_void_std_tuple_int_R_std_not_std_is_reference_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  __init_std_add_rvalue_reference_helper_std_tuple_int_R_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_int_R extends std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_tuple_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_tuple_int_R_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_tuple(...$a);
  }
  __init_std_is_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_tuple(...$a);
  }
  __init_std_is_lvalue_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_tuple(...$a);
  }
  __init_std_is_rvalue_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple extends std_is_rvalue_reference_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple {
  __init_std_conditional_value0_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_tuple(...$a);
  }
  __init_std_not_std_is_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_tuple(...$a);
  }
  __init_std_is_void_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_tuple {
  __init_std_remove_cv_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_tuple {
  __init_std_remove_volatile_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_tuple {
  __init_std_remove_const_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_tuple(...$a);
  }
  __init_std_is_void_helper_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_tuple(...$a);
  }
  __init_std_not_std_is_void_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple extends std_not_std_is_void_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_std_not_std_is_reference_std_tuple {
  __init_std_conditional_value1_std_not_std_is_void_std_tuple_std_not_std_is_reference_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_value1 {
  __init_std_add_rvalue_reference_helper_std_tuple_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple extends std_add_rvalue_reference_helper_std_tuple_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_tuple(...$a);
  }
  __init_std_add_rvalue_reference_std_tuple(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_tuple_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_const_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_do_is_nary_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_do_is_nary_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_int_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) { }
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
class std_declval_protector_std_Rb_tree_node_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_Rb_tree_node_int_P {
  __init_std_remove_reference_std_Rb_tree_node_int_P(...$a) { }
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
class std_allocator_traits_std_allocator_std_Rb_tree_node_int {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
  static construct__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
  static _S_construct__rv(__a, __p, __args_0) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_int_P {
  __init_std_remove_cv_std_allocator_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_int_P {
  __init_std_remove_volatile_std_allocator_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_int_P {
  __init_std_remove_const_std_allocator_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_rvalue_reference_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_int_std_Rb_tree_node_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_int extends std_is_function_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_is_function_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_std_is_function_int {
  __init_std_conditional_value0_std_is_void_int_std_is_function_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_int_std_is_function_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  __init_std_not_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_lvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_int_std_is_lvalue_reference_int {
  __init_std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_int_std_is_lvalue_reference_int(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_Rb_tree_node_int {
  __init_std_remove_reference_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_int {
  __init_std_remove_cv_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int {
  __init_std_remove_volatile_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int {
  __init_std_remove_const_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_of_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int extends std_is_base_of_int_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_base_of_int_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_base_of_int_std_Rb_tree_node_int_std_not_std_is_same_int_std_Rb_tree_node_int {
  __init_std_conditional_value1_std_is_base_of_int_std_Rb_tree_node_int_std_not_std_is_same_int_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0_std_is_static_castable_int_std_Rb_tree_node_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0_std_is_static_castable_int_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_destructible_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0 extends std_is_array_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_int_value0_std_is_array_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_not_std_extent_std_Rb_tree_node_int_value0_std_is_array_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_is_function_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_function_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_arithmetic_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_integral_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_integral_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int extends std_is_floating_point_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_enum_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_pointer_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_member_pointer_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int extends std_is_scalar_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int {
  __init_std_conditional_value0_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_Rb_tree_node_int {
  __init_std_remove_all_extents_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_destructible_impl_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_is_lvalue_reference_std_Rb_tree_node_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_node_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_int_R {
  __init_std_remove_cv_std_Rb_tree_node_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_R {
  __init_std_remove_volatile_std_Rb_tree_node_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_R {
  __init_std_remove_const_std_Rb_tree_node_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R extends std_not_std_is_reference_std_Rb_tree_node_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_node_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_int_R_std_not_std_is_reference_std_Rb_tree_node_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_int_R_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_int_int_std_is_destructible_std_Rb_tree_node_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_int_int_std_is_destructible_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_piecewise_construct_t {
  constructor(...$a) {
    this.__init_std_declval_protector_std_piecewise_construct_t(...$a);
  }
  __init_std_declval_protector_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_tuple_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_tuple_int_R(...$a);
  }
  __init_std_declval_protector_std_tuple_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_tuple {
  constructor(...$a) {
    this.__init_std_declval_protector_std_tuple(...$a);
  }
  __init_std_declval_protector_std_tuple(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_is_convertible_std_piecewise_construct_t_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a);
  }
  __init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_tuple_int_R(...$a);
  }
  __init_std_is_function_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_tuple_int_R(...$a);
  }
  __init_std_is_array_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_is_array_std_tuple_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  __init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_is_array_std_tuple_int_R.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  __init_std_conditional_value0_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  __init_std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a);
  }
  __init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_int_R_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a);
  }
  __init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_piecewise_construct_t(...$a);
  }
  __init_std_is_function_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_piecewise_construct_t(...$a);
  }
  __init_std_is_array_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_is_array_std_piecewise_construct_t {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  __init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_is_array_std_piecewise_construct_t.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  __init_std_conditional_value0_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  __init_std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_piecewise_construct_t_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_piecewise_construct_t_int(...$a);
  }
  __init_std_is_convertible_std_piecewise_construct_t_int(...$a) {
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
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a) {
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
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_int_R_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  __init_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int extends std_is_convertible_std_piecewise_construct_t_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  __init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  __dtor() {
    std_is_convertible_std_piecewise_construct_t_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_piecewise_construct_t_int {
  __init_std_conditional_value0_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_piecewise_construct_t_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_Build_index_tuple_value1 {
  __init_std_Build_index_tuple_value1(...$a) { }
  __dtor() {
  }
}
class std_Build_index_tuple_value0 {
  __init_std_Build_index_tuple_value0(...$a) { }
  __dtor() {
  }
}
class std_Index_tuple {
  constructor(...$a) {
    this.__init_std_Index_tuple(...$a);
  }
  __init_std_Index_tuple(...$a) {
  }
  __dtor() {
  }
}
class std_Index_tuple_value0 {
  constructor(...$a) {
    this.__init_std_Index_tuple_value0(...$a);
  }
  __init_std_Index_tuple_value0(...$a) {
  }
  __dtor() {
  }
}
class std_is_convertible_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_int_R_std_tuple(...$a);
  }
  __init_std_is_convertible_std_tuple_int_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_tuple(...$a);
  }
  __init_std_is_function_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_tuple(...$a);
  }
  __init_std_is_array_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_tuple_std_is_array_std_tuple extends std_is_array_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  __init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  __dtor() {
    std_is_array_std_tuple.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple extends std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_tuple_std_is_array_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_tuple_std_is_array_std_tuple {
  __init_std_conditional_value0_std_is_function_std_tuple_std_is_array_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  __init_std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_tuple_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_std_tuple_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_std_tuple_int_R(...$a);
  }
  __init_std_is_convertible_std_tuple_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  __init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  __init_std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_tuple_int_R_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_int(...$a);
  }
  __init_std_is_convertible_std_tuple_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_std_is_array_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int extends std_is_convertible_std_tuple_int_R_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a);
  }
  __init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a) {
  }
  __dtor() {
    std_is_convertible_std_tuple_int_R_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_int_R_int {
  __init_std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_int_R_int(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_int_R {
  __init_std_tuple_element_value0_std_tuple_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_ref_int_R {
  __init_std_add_ref_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_c_ref_int_R {
  __init_std_add_c_ref_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_r_ref_int_R {
  __init_std_add_r_ref_int_R(...$a) { }
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function main() {
  let $t70, $t71;
  let a = [1, 2, 3, 4, 5];
  let s = 0;
  for (let $i0 = 0; $i0 < a.length; $i0++) {
    let x = a[$i0];
    s += x;
  }
  for (let $i1 = 0; $i1 < a.length; $i1++) {
    let y = {a: a, i: $i1};
    y.a[y.i] *= 2;
  }
  for (let $i2 = 0; $i2 < a.length; $i2++) {
    let y = {a: a, i: $i2};
    s += y.a[y.i];
  }
  (console.log((s), (a[4])));
  let v = new std_vector_int_std_allocator_int();
  v.push_back({a: [3], i: 0});
  v.push_back({a: [1], i: 0});
  v.push_back({a: [2], i: 0});
  for (let $b3 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e3 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b3], i: 0}, {a: [$e3], i: 0}); $b3.op_inc()) {
    let y = $b3.op_mul__c();
    y.a[y.i] += 10;
  }
  let t = 0;
  for (let $b4 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e4 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b4], i: 0}, {a: [$e4], i: 0}); $b4.op_inc()) {
    let x = ($b4.op_mul__c()).a[($b4.op_mul__c()).i];
    t = ((t * 10) + x);
  }
  (console.log((t)));
  let st = new std_set_int_std_less_int_std_allocator_int();
  st.insert({a: [4], i: 0});
  st.insert({a: [4], i: 0});
  st.insert({a: [6], i: 0});
  let u = 0;
  for (let $b5 = new std_Rb_tree_const_iterator_int({a: [st.begin__c()], i: 0}), $e5 = new std_Rb_tree_const_iterator_int({a: [st.end__c()], i: 0}); $b5.op_ne__c({a: [$e5], i: 0}); $b5.op_inc()) {
    let x = ($b5.op_mul__c()).a[($b5.op_mul__c()).i];
    u = ((u * 10) + x);
  }
  (console.log((u)));
  let m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  ($t70 = m.op_index({a: [1], i: 0}), $t70.a[$t70.i] = 10);
  ($t71 = m.op_index({a: [2], i: 0}), $t71.a[$t71.i] = 20);
  let w = 0;
  for (let $b6 = new std_Rb_tree_iterator_std_pair_int_int({a: [m.begin()], i: 0}), $e6 = new std_Rb_tree_iterator_std_pair_int_int({a: [m.end()], i: 0}); $b6.op_ne__c({a: [$e6], i: 0}); $b6.op_inc()) {
    let p = $b6.op_mul__c();
    w += (p.a[p.i]).second;
  }
  (console.log((w)));
  return 0;
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t72, $t73, $t74, $t75, $t76, $t77;
  return ($t76 = (($t74 = (__lhs.a[__lhs.i]).base__c(), $t74) ? (($t74 = (__lhs.a[__lhs.i]).base__c(), $t74)).a[(($t74 = (__lhs.a[__lhs.i]).base__c(), $t74)).i] : null), $t77 = (($t75 = (__rhs.a[__rhs.i]).base__c(), $t75) ? (($t75 = (__rhs.a[__rhs.i]).base__c(), $t75)).a[(($t75 = (__rhs.a[__rhs.i]).base__c(), $t75)).i] : null), (!($t76 === $t77 || ($t76 && $t77 && $t76.a === $t77.a && $t76.i === $t77.i))));
}
function std_declval_std_Rb_tree_const_iterator_int_R() {
  return std_declval_protector_std_Rb_tree_const_iterator_int_R.__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R.__delegate();
}
function std_declval_std_Rb_tree_const_iterator_int() {
  return std_declval_protector_std_Rb_tree_const_iterator_int.__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool.__delegate();
}
function std_declval_std_Rb_tree_iterator_int_R() {
  return std_declval_protector_std_Rb_tree_iterator_int_R.__delegate();
}
function std_declval_std_Rb_tree_iterator_int() {
  return std_declval_protector_std_Rb_tree_iterator_int.__delegate();
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R.__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P.__delegate();
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_P.__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t.__delegate();
}
function std_declval_std_tuple_int_R() {
  return std_declval_protector_std_tuple_int_R.__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R.__delegate();
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_iterator_int(__t) {
  return __t;
}
function std_forward_1_std_piecewise_construct_t(__t) {
  return __t;
}
function std_forward_1_std_tuple_int_R(__t) {
  return __t;
}
function std_forward_1_std_tuple(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_int_P(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_std_pair_int_int_P(__t) {
  return __t;
}
function std_forward_int_R(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t78;
  return ($t78 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t78 ? {a: $t78.a, i: $t78.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t79;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t79 = std_addressof_int(__first), $t79 ? {a: $t79.a, i: $t79.i} : null));
  }
}
function std_max_unsigned_long_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(__i) {
  return new std_move_iterator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t80;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t80 = std_addressof_int(__cur), $t80 ? {a: $t80.a, i: $t80.i} : null), __first.op_mul__c());
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
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_1030(__x, __y)));
}
function std_operator_3_int_P_int_P_1030(__x, __y) {
  let $t81, $t82, $t83, $t84;
  return ($t83 = ($t81 = (__x.a[__x.i]).base__c(), $t81), $t84 = ($t82 = (__y.a[__y.i]).base__c(), $t82), ($t83 === $t84 || ($t83 && $t84 && $t83.a === $t84.a && $t83.i === $t84.i)));
}
function std_move_int(__t) {
  return __t;
}
function std_get_4_value0_int_R(__t) {
  return std_get_helper_value0_int_R(__t);
}
function std_get_helper_value0_int_R(__t) {
  return std_Tuple_impl_value0_int_R._M_head(__t);
}
let std_piecewise_construct = {v: new std_piecewise_construct_t()};
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
main();
