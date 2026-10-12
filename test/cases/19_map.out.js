"use strict";
function _ctj_peq(a, b) { return a === b || (!!a && !!b && a.a === b.a && a.i === b.i); }
// _Rb_tree_rebalance_for_erase from libstdc++'s tree.cc: it takes the node
// out of the tree and rebalances, and hands back the node to destroy.
function _ctj_rb_erase(z, hb) {
  var hn = hb.a[hb.i], root = hn._M_parent;
  var D = function (p) { return p ? p.a[p.i] : null; };
  var rotL = function (x) {
    var nx = D(x), y = nx._M_right, ny = D(y);
    nx._M_right = ny._M_left;
    if (ny._M_left) D(ny._M_left)._M_parent = x;
    ny._M_parent = nx._M_parent;
    if (_ctj_peq(x, root)) { root = y; hn._M_parent = root; }
    else if (_ctj_peq(D(nx._M_parent)._M_left, x)) D(nx._M_parent)._M_left = y;
    else D(nx._M_parent)._M_right = y;
    ny._M_left = x; nx._M_parent = y;
  };
  var rotR = function (x) {
    var nx = D(x), y = nx._M_left, ny = D(y);
    nx._M_left = ny._M_right;
    if (ny._M_right) D(ny._M_right)._M_parent = x;
    ny._M_parent = nx._M_parent;
    if (_ctj_peq(x, root)) { root = y; hn._M_parent = root; }
    else if (_ctj_peq(D(nx._M_parent)._M_right, x)) D(nx._M_parent)._M_right = y;
    else D(nx._M_parent)._M_left = y;
    ny._M_right = x; nx._M_parent = y;
  };
  var pz = z, nz = D(pz), py = pz, px = null, pxp = null;
  if (!nz._M_left) px = nz._M_right;
  else if (!nz._M_right) px = nz._M_left;
  else { py = nz._M_right; while (D(py)._M_left) py = D(py)._M_left; px = D(py)._M_right; }
  if (!_ctj_peq(py, pz)) {
    var ny = D(py);
    D(nz._M_left)._M_parent = py;
    ny._M_left = nz._M_left;
    if (!_ctj_peq(py, nz._M_right)) {
      pxp = ny._M_parent;
      if (px) D(px)._M_parent = ny._M_parent;
      D(ny._M_parent)._M_left = px;
      ny._M_right = nz._M_right;
      D(nz._M_right)._M_parent = py;
    } else pxp = py;
    if (_ctj_peq(root, pz)) { root = py; hn._M_parent = root; }
    else if (_ctj_peq(D(nz._M_parent)._M_left, pz)) D(nz._M_parent)._M_left = py;
    else D(nz._M_parent)._M_right = py;
    ny._M_parent = nz._M_parent;
    var cl = ny._M_color; ny._M_color = nz._M_color; nz._M_color = cl;
    py = pz;
  } else {
    pxp = nz._M_parent;
    if (px) D(px)._M_parent = nz._M_parent;
    if (_ctj_peq(root, pz)) { root = px; hn._M_parent = root; }
    else if (_ctj_peq(D(nz._M_parent)._M_left, pz)) D(nz._M_parent)._M_left = px;
    else D(nz._M_parent)._M_right = px;
    if (_ctj_peq(hn._M_left, pz)) {
      if (!nz._M_right) hn._M_left = nz._M_parent;
      else { var a = px; while (D(a)._M_left) a = D(a)._M_left; hn._M_left = a; }
    }
    if (_ctj_peq(hn._M_right, pz)) {
      if (!nz._M_left) hn._M_right = nz._M_parent;
      else { var b = px; while (D(b)._M_right) b = D(b)._M_right; hn._M_right = b; }
    }
  }
  if (D(py)._M_color !== 0) {
    while (!_ctj_peq(px, root) && (!px || D(px)._M_color !== 0)) {
      var nxp = D(pxp);
      if (_ctj_peq(px, nxp._M_left)) {
        var w = nxp._M_right, nw = D(w);
        if (nw._M_color === 0) { nw._M_color = 1; nxp._M_color = 0; rotL(pxp); w = nxp._M_right; nw = D(w); }
        if ((!nw._M_left || D(nw._M_left)._M_color !== 0) && (!nw._M_right || D(nw._M_right)._M_color !== 0)) {
          nw._M_color = 0; px = pxp; pxp = nxp._M_parent;
        } else {
          if (!nw._M_right || D(nw._M_right)._M_color !== 0) {
            D(nw._M_left)._M_color = 1; nw._M_color = 0; rotR(w); w = nxp._M_right; nw = D(w);
          }
          nw._M_color = nxp._M_color; nxp._M_color = 1;
          if (nw._M_right) D(nw._M_right)._M_color = 1;
          rotL(pxp); break;
        }
      } else {
        var w2 = nxp._M_left, nw2 = D(w2);
        if (nw2._M_color === 0) { nw2._M_color = 1; nxp._M_color = 0; rotR(pxp); w2 = nxp._M_left; nw2 = D(w2); }
        if ((!nw2._M_right || D(nw2._M_right)._M_color !== 0) && (!nw2._M_left || D(nw2._M_left)._M_color !== 0)) {
          nw2._M_color = 0; px = pxp; pxp = nxp._M_parent;
        } else {
          if (!nw2._M_left || D(nw2._M_left)._M_color !== 0) {
            D(nw2._M_right)._M_color = 1; nw2._M_color = 0; rotL(w2); w2 = nxp._M_left; nw2 = D(w2);
          }
          nw2._M_color = nxp._M_color; nxp._M_color = 1;
          if (nw2._M_left) D(nw2._M_left)._M_color = 1;
          rotR(pxp); break;
        }
      }
    }
    if (px) D(px)._M_color = 1;
  }
  return py;
}
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
class class_176 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_176(...$a);
  }
  __init_class_176(...$a) {
    this.__count = 0;
    this.__value = 0;
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
class std_basic_ostream_char_std_char_traits_char extends std_ios_base {
  _M_fd;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    this._M_fd = ($a[0] === undefined ? (1) : $a[0]);
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  _M_put(__k, __v, __s, __n) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){if(base===10)t=(k===2&&v<0)?BigInt.asUintN(64,BigInt(Math.trunc(v))).toString():String(v);else t=BigInt.asUintN(64,BigInt(Math.trunc(v))).toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd)));
    undefined;
    this._M_width = 0;
  }
}
class std_basic_istream_char_std_char_traits_char extends std_ios_base {
  _M_tie;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_istream_char_std_char_traits_char(...$a) {
    this._M_tie = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
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
class std_pair_int_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_int_int(...$a);
  }
  __init_std_pair_int_int(...$a) {
    let $t0, $t1, $t2;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_int_R && $a[2] instanceof std_tuple) {
      this.__init_std_pair_int_int({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new std_Index_tuple_value0(), new std_Index_tuple());
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_int_R) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_int_R) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      this.first = ($t0 = std_forward_int_R(std_get_4_value0_int_R($a[0])), $t0.a[$t0.i]);
      this.second = 0;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = 0;
      this.second = 0;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] === null || typeof $a[1] === "object") && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_int_R)) {
      this.first = ($t1 = std_forward_1_int($a[0]), $t1.a[$t1.i]);
      this.second = ($t2 = std_forward_1_int($a[1]), $t2.a[$t2.i]);
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
class std_decay_and_strip_int {
  __init_std_decay_and_strip_int(...$a) { }
  __dtor() {
  }
}
class std_decay_int {
  __init_std_decay_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
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
class std_decay_selector_int_value0_value0 {
  __init_std_decay_selector_int_value0_value0(...$a) { }
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
class std_strip_reference_wrapper_int {
  __init_std_strip_reference_wrapper_int(...$a) { }
  __dtor() {
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
class std_remove_reference_std_pair_int_int {
  __init_std_remove_reference_std_pair_int_int(...$a) { }
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
class std_extent_std_pair_int_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_pair_int_int_value0(...$a);
  }
  __init_std_extent_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
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
class std_Rb_tree_node_std_pair_int_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int) ? [] : $a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple_int_R) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_tuple) ? [] : []));
    this.__init_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_node_std_pair_int_int(...$a) {
    let $t3, $t4, $t5;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      this._M_value_field = new std_pair_int_int(std_forward_1_std_pair_int_int($a[0]));
      this._M_value_field.ctj_a = this; this._M_value_field.ctj_i = "_M_value_field";
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple_int_R) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_tuple)) {
      this._M_value_field = new std_pair_int_int(($t3 = std_forward_1_std_piecewise_construct_t($a[0]), $t3.a[$t3.i]), ($t4 = std_forward_1_std_tuple_int_R($a[1]), $t4.a[$t4.i]), ($t5 = std_forward_1_std_tuple($a[2]), $t5.a[$t5.i]));
      this._M_value_field.ctj_a = this; this._M_value_field.ctj_i = "_M_value_field";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
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
  op_mul__c() {
    return {a: this._M_node.a[this._M_node.i], i: "_M_value_field"};
  }
  op_inc() {
    let $t6;
    this._M_node = ($t6 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t6 ? {a: $t6.a, i: $t6.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t7;
    this._M_node = ($t7 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t7 ? {a: $t7.a, i: $t7.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
  op_assign(o) {
    this._M_node = (((o.a[o.i])._M_node) ? {a: ((o.a[o.i])._M_node).a, i: ((o.a[o.i])._M_node).i} : null);
    return {a: [this], i: 0};
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_int_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_int_int) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_Rb_tree_iterator_std_pair_int_int($a[0]);
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_iterator_std_pair_int_int_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else { throw new Error("no matching constructor"); }
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_int_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_std_pair_int_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_int_int((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null));
  }
}
class std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_std_pair_int_int_R {
  __init_std_remove_cv_std_Rb_tree_iterator_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int_R {
  __init_std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_std_pair_int_int_R {
  __init_std_remove_const_std_Rb_tree_iterator_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_iterator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R extends std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_R_value0.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_R_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_remove_cv_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_remove_volatile_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_remove_const_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int extends std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_or_std_is_function_std_Rb_tree_iterator_std_pair_int_int_std_is_array_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int extends std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_std_pair_int_int_std_not_std_is_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_iterator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_iterator_std_pair_int_int_value1.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int {
  __init_std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_std_pair_int_int_std_Rb_tree_iterator_std_pair_int_int(...$a) { }
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
class std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R(...$a) {
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
class std_declval_protector_std_Rb_tree_iterator_std_pair_int_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_iterator_std_pair_int_int(...$a) {
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
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    let $t8, $t9, $t10, $t11;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t8 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[0]), $t9 = ($t8 ? $t8.a[$t8.i] : null), $t9 && $t9.a !== undefined ? {a: $t9.a, i: $t9.i} : $t9);
      this.second = ($t10 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[1]), $t11 = ($t10 ? $t10.a[$t10.i] : null), $t11 && $t11.a !== undefined ? {a: $t11.a, i: $t11.i} : $t11);
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
    let $t12;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t12 = operatornew__unsigned_long_long((__n * 36)), $t12 ? {a: $t12.a, i: $t12.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 36));
  }
  construct__rv(...$a) {
    if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_piecewise_construct_t) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_tuple_int_R) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_tuple)) {
      (($a[0]).a[($a[0]).i] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_piecewise_construct_t($a[1]), std_forward_1_std_tuple_int_R($a[2]), std_forward_1_std_tuple($a[3])), ($a[0]).a[($a[0]).i].ctj_a = ($a[0]).a, ($a[0]).a[($a[0]).i].ctj_i = ($a[0]).i, {a: ($a[0]).a, i: ($a[0]).i});
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_pair_int_int)) {
      (($a[0]).a[($a[0]).i] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_pair_int_int($a[1])), ($a[0]).a[($a[0]).i].ctj_a = ($a[0]).a, ($a[0]).a[($a[0]).i].ctj_i = ($a[0]).i, {a: ($a[0]).a, i: ($a[0]).i});
    }
    else { throw new Error("no matching overload"); }
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
    let $t13;
    return ($t13 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_destroy_node(__p) {
    let $t14;
    (($t14 = this._M_get_Node_allocator(), $t14.a[$t14.i])).destroy((__p ? {a: __p.a, i: __p.i} : null));
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
    let $t15, $t16;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t15 = new std_Select1st_std_pair_int_int(), $t15)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t16 = new std_Select1st_std_pair_int_int(), $t16)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t17, $t18, $t19;
    let __x = ($t17 = this._M_begin(), $t17 ? {a: $t17.a, i: $t17.i} : null);
    let __y = ($t18 = this._M_end(), $t18 ? {a: $t18.a, i: $t18.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t19 = (__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t19 ? {a: $t19.a, i: $t19.i} : null);
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
    let $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31;
    let __pos = __position._M_const_cast__c();
    if (($t21 = ($t20 = this._M_end(), $t20), (__pos._M_node === $t21 || (__pos._M_node && $t21 && __pos._M_node.a === $t21.a && __pos._M_node.i === $t21.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t22 = this._M_rightmost(), $t23 = ($t22 ? $t22.a[$t22.i] : null), $t23 && $t23.a !== undefined ? {a: $t23.a, i: $t23.i} : $t23)), __k))) {
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
          if (($t25 = (($t24 = this._M_leftmost(), $t24) ? (($t24 = this._M_leftmost(), $t24)).a[(($t24 = this._M_leftmost(), $t24)).i] : null), (__pos._M_node === $t25 || (__pos._M_node && $t25 && __pos._M_node.a === $t25.a && __pos._M_node.i === $t25.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t27 = (($t26 = __before.op_dec(), $t26.a[$t26.i]))._M_node, $t27 ? {a: $t27.a, i: $t27.i} : null)), __k)) {
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
            if (($t29 = (($t28 = this._M_rightmost(), $t28) ? (($t28 = this._M_rightmost(), $t28)).a[(($t28 = this._M_rightmost(), $t28)).i] : null), (__pos._M_node === $t29 || (__pos._M_node && $t29 && __pos._M_node.a === $t29.a && __pos._M_node.i === $t29.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t31 = (($t30 = __after.op_inc(), $t30.a[$t30.i]))._M_node, $t31 ? {a: $t31.a, i: $t31.i} : null)))) {
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
    let $t32, $t33;
    let __insert_left = (((__x !== null) || ($t33 = ($t32 = this._M_end(), $t32), (__p === $t33 || (__p && $t33 && __p.a === $t33.a && __p.i === $t33.i)))) || this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__z ? {a: __z.a, i: __z.i} : null)), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_lower_bound(__x, __y, __k) {
    let $t34, $t35;
    while ((__x !== null)) {
      if ((!(this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
        (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t34 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)), $t34 ? {a: $t34.a, i: $t34.i} : null));
      }
      else {
        __x = ($t35 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null)), $t35 ? {a: $t35.a, i: $t35.i} : null);
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
    let $t36, $t37;
    return this._M_lower_bound(($t36 = this._M_begin(), $t36 ? {a: $t36.a, i: $t36.i} : null), ($t37 = this._M_end(), $t37 ? {a: $t37.a, i: $t37.i} : null), __k);
  }
  _M_insert_unique__rv(__v) {
    let $t38;
    let __res = this._M_get_insert_unique_pos((($t38 = new std_Select1st_std_pair_int_int(), $t38)).op_call__c(__v));
    if (__res.second) {
      return new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool({a: [this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_std_pair_int_int(__v))], i: 0}, {a: [true], i: 0});
    }
    return new std_pair_std_Rb_tree_iterator_std_pair_int_int_bool({a: [new std_Rb_tree_iterator_std_pair_int_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null))], i: 0}, {a: [false], i: 0});
  }
  _M_emplace_hint_unique__rv(__pos, __args_0, __args_1, __args_2) {
    let $t39;
    let __z = ($t39 = this._M_create_node__rv(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_int_R(__args_1), std_forward_1_std_tuple(__args_2)), $t39 ? {a: $t39.a, i: $t39.i} : null);
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
  _M_insert___rv(__x, __p, __v) {
    let $t40, $t41, $t42, $t43;
    let __insert_left = (((__x !== null) || ($t41 = ($t40 = this._M_end(), $t40), (__p === $t41 || (__p && $t41 && __p.a === $t41.a && __p.i === $t41.i)))) || this._M_impl._M_key_compare.op_call__c((($t42 = new std_Select1st_std_pair_int_int(), $t42)).op_call__c(__v), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t43 = this._M_create_node__rv(std_forward_1_std_pair_int_int(__v)), $t43 ? {a: $t43.a, i: $t43.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(...$a) {
    let $t44, $t45;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple_int_R) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_tuple)) {
      let __tmp = ($t44 = this._M_get_node(), $t44 ? {a: $t44.a, i: $t44.i} : null);
      if (true) {
         {
          std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_piecewise_construct_t($a[0]), std_forward_1_std_tuple_int_R($a[1]), std_forward_1_std_tuple($a[2]));
        }
      }
      if (false) {
         {
          this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
        }
      }
      return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      let __tmp = ($t45 = this._M_get_node(), $t45 ? {a: $t45.a, i: $t45.i} : null);
      if (true) {
         {
          std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_pair_int_int($a[0]));
        }
      }
      if (false) {
         {
          this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
        }
      }
      return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
    }
    else { throw new Error("no matching overload"); }
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
  end() {
    return this._M_t.end();
  }
  size__c() {
    return this._M_t.size__c();
  }
  op_index(__k) {
    let $t46;
    let __i = {v: this.lower_bound(__k)};
    if ((__i.v.op_eq__c({a: [this.end()], i: 0}) || (($t46 = this.key_comp__c(), $t46)).op_call__c(__k, {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "first"}))) {
      __i.v.op_assign({a: [this._M_t._M_emplace_hint_unique__rv(new std_Rb_tree_const_iterator_std_pair_int_int({a: __i, i: "v"}), {a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_int_R(__k)], i: 0}, {a: [new std_tuple()], i: 0})], i: 0});
    }
    return {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "second"};
  }
  insert(__x) {
    return this._M_t._M_insert_unique__rv(__x);
  }
  key_comp__c() {
    return this._M_t.key_comp__c();
  }
  lower_bound(__x) {
    return this._M_t.lower_bound(__x);
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
  static construct__rv(...$a) {
    if ($a.length >= 5 && $a.length <= 5 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_piecewise_construct_t) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_tuple_int_R) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_tuple)) {
      std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int._S_construct__rv($a[0], (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), std_forward_1_std_piecewise_construct_t($a[2]), std_forward_1_std_tuple_int_R($a[3]), std_forward_1_std_tuple($a[4]));
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_pair_int_int)) {
      std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int._S_construct__rv($a[0], (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), std_forward_1_std_pair_int_int($a[2]));
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_construct__rv(...$a) {
    if ($a.length >= 5 && $a.length <= 5 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_piecewise_construct_t) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_tuple_int_R) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_tuple)) {
      (($a[0]).a[($a[0]).i]).construct__rv((($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), std_forward_1_std_piecewise_construct_t($a[2]), std_forward_1_std_tuple_int_R($a[3]), std_forward_1_std_tuple($a[4]));
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_pair_int_int)) {
      (($a[0]).a[($a[0]).i]).construct__rv((($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), std_forward_1_std_pair_int_int($a[2]));
    }
    else { throw new Error("no matching overload"); }
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
class std_remove_reference_std_Rb_tree_node_std_pair_int_int_P {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_not_std_is_reference_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_void_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int extends std_not_std_is_void_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_pair_int_int_std_not_std_is_void_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_pair_int_int_std_not_std_is_reference_std_pair_int_int {
  __init_std_conditional_value1_std_not_std_is_void_std_pair_int_int_std_not_std_is_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_value1 {
  __init_std_add_rvalue_reference_helper_std_pair_int_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_int_int extends std_add_rvalue_reference_helper_std_pair_int_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_add_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_pair_int_int_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int extends std_is_function_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int {
  __init_std_conditional_value0_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a);
  }
  __init_std_not_std_or_std_is_void_std_pair_int_int_std_is_function_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int extends std_is_lvalue_reference_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int {
  __init_std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_int_int {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int {
  __init_std_remove_const_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int extends std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value1_std_is_base_of_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_is_same_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_destructible_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0 extends std_is_array_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_Rb_tree_node_std_pair_int_int_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0_std_is_array_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_int_int_value0_std_is_array_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int extends std_is_function_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_function_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_integral_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_integral_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int extends std_is_floating_point_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_int_int_std_is_floating_point_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_enum_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_pointer_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int extends std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int extends std_is_scalar_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_Rb_tree_node_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_int_int_std_is_scalar_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_Rb_tree_node_std_pair_int_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_Rb_tree_node_std_pair_int_int {
  __init_std_remove_all_extents_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_is_destructible_impl_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int_R {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_R {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_R {
  __init_std_remove_const_std_Rb_tree_node_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R extends std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_int_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_destructible_std_Rb_tree_node_std_pair_int_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_destructible_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_pair_int_int(...$a) { }
  __dtor() {
  }
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
class std_declval_protector_std_pair_int_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_pair_int_int(...$a);
  }
  __init_std_declval_protector_std_pair_int_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_std_pair_int_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_R(...$a) {
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
class std_remove_reference_int_R {
  __init_std_remove_reference_int_R(...$a) { }
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(__os, __s) {
  (__os.a[__os.i])._M_put(7, 0, (__s ? {a: __s.a, i: __s.i} : null), (-(1)));
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
function main() {
  let $t47, $t48, $t49, $t50, $t51, $t52, $t53, $t54, $t55;
  let m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  m.insert({a: [std_make_pair_int_int({a: [1], i: 0}, {a: [2], i: 0})], i: 0});
  m.insert({a: [std_make_pair_int_int({a: [3], i: 0}, {a: [4], i: 0})], i: 0});
  m.insert({a: [std_make_pair_int_int({a: [1], i: 0}, {a: [9], i: 0})], i: 0});
  (console.log((m.size__c())));
  let n = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  ($t47 = n.op_index({a: [1], i: 0}), $t47.a[$t47.i] = 2);
  ($t48 = n.op_index({a: [2], i: 0}), $t48.a[$t48.i] = 3);
  ($t49 = n.op_index({a: [5], i: 0}), $t49.a[$t49.i] = 50);
  ($t50 = n.op_index({a: [3], i: 0}), $t50.a[$t50.i] = 30);
  ($t51 = n.op_index({a: [1], i: 0}), $t51.a[$t51.i] = 11);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, ($t52 = n.op_index({a: [1], i: 0}), $t52.a[$t52.i])), {a: [32, 0], i: 0}), ($t53 = n.op_index({a: [2], i: 0}), $t53.a[$t53.i])), {a: [32, 0], i: 0}), ($t54 = n.op_index({a: [3], i: 0}), $t54.a[$t54.i])), {a: [32, 0], i: 0}), ($t55 = n.op_index({a: [5], i: 0}), $t55.a[$t55.i])), {a: [std_endl], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, n.size__c()), {a: [std_endl], i: 0});
  return 0;
}
function std_make_pair_int_int(__x, __y) {
  return new std_pair_int_int(std_forward_1_int(__x), std_forward_1_int(__y));
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_std_pair_int_int_RR() {
  return std_declval_protector_std_pair_int_int_RR.__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R.__delegate();
}
function std_declval_std_Rb_tree_iterator_std_pair_int_int_R() {
  return std_declval_protector_std_Rb_tree_iterator_std_pair_int_int_R.__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R.__delegate();
}
function std_declval_std_Rb_tree_iterator_std_pair_int_int() {
  return std_declval_protector_std_Rb_tree_iterator_std_pair_int_int.__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool.__delegate();
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R.__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P.__delegate();
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
function std_declval_std_pair_int_int() {
  return std_declval_protector_std_pair_int_int.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_R() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_R.__delegate();
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_pair_int_int(__t) {
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
function std_forward_1_std_Rb_tree_node_std_pair_int_int_P(__t) {
  return __t;
}
function std_forward_int_R(__t) {
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
let std_cout = new std_basic_ostream_char_std_char_traits_char(1);
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
main();
