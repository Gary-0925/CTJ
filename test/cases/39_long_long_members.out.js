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
class A {
  m;
  u;
  constructor(...$a) {
    this.__init_A(...$a);
  }
  __init_A(...$a) {
    this.m = 9n;
    this.u = 7n;
  }
  __dtor() {
  }
  static S = BigInt.asIntN(64, (1n) << (50n));
  static cnt = 11n;
}
class P {
  x;
  y;
  constructor(...$a) {
    this.__init_P(...$a);
  }
  __init_P(...$a) {
    this.x = 4;
    this.y = BigInt(((-(1)) | 0));
  }
  __dtor() {
  }
}
class Q {
  p;
  constructor(...$a) {
    this.__init_Q(...$a);
  }
  __init_Q(...$a) {
    this.p = Array.from({length: 2}, () => new P());
  }
  __dtor() {
  }
}
class std_basic_ostream_char_std_char_traits_char extends std_ios_base {
  _M_fd$std_basic_ostream_char_std_char_traits_char;
  _M_tie$std_basic_ostream_char_std_char_traits_char;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    this._M_fd$std_basic_ostream_char_std_char_traits_char = ($a[0] === undefined ? (((1) | 0)) : $a[0]);
    this._M_tie$std_basic_ostream_char_std_char_traits_char = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  _M_put(__k, __v, __s, __n) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$std_basic_ostream_char_std_char_traits_char)));
    this._M_width = 0;
  }
  _M_putll(__k, __v) {
    ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10),j,g,nl=String.fromCharCode(10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(typeof process!=='undefined'&&process&&process.stdout){if(t)((fd===2&&process.stderr)?process.stderr:process.stdout).write(t);return;}g=globalThis;g.__ctjpend=(g.__ctjpend||'')+t;while((j=g.__ctjpend.indexOf(nl))>=0){console.log(g.__ctjpend.slice(0,j));g.__ctjpend=g.__ctjpend.slice(j+1);}})((__k),(__v),(0),(0),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$std_basic_ostream_char_std_char_traits_char)));
    this._M_width = 0;
  }
}
class std_basic_istream_char_std_char_traits_char extends std_ios_base {
  _M_tie$std_basic_istream_char_std_char_traits_char;
  _M_state$std_basic_istream_char_std_char_traits_char;
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_istream_char_std_char_traits_char(...$a) {
    this._M_tie$std_basic_istream_char_std_char_traits_char = null;
    this._M_state$std_basic_istream_char_std_char_traits_char = 0;
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
class T_value21 {
  constructor(...$a) {
    this.__init_T_value21(...$a);
  }
  __init_T_value21(...$a) {
  }
  __dtor() {
  }
  static v = BigInt(((Math.imul(21, 2)) | 0));
}
class gnu_cxx_new_allocator_long_long {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_long_long(...$a);
  }
  __init_gnu_cxx_new_allocator_long_long(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t0;
    if ((__n > gnu_cxx_new_allocator_long_long.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_long(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_long_long_construct_long_long(__p) {
    (__p.a[__p.i] = 0n);
  }
  destroy__gnu_cxx_new_allocator_long_long_destroy_long_long(__p) {
    void 0;
  }
}
class std_allocator_long_long extends gnu_cxx_new_allocator_long_long {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_long_long) ? [$a[0]] : []));
    this.__init_std_allocator_long_long(...$a);
  }
  __init_std_allocator_long_long(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_long_long)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_long_long) ? [$a[0]] : []));
    this.__init_std_Vector_base_long_long_std_allocator_long_long_Vector_impl(...$a);
  }
  __init_std_Vector_base_long_long_std_allocator_long_long_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_long_long)) {
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
    std_allocator_long_long.prototype.__dtor.call(this);
  }
}
class std_Vector_base_long_long_std_allocator_long_long {
  _M_impl$std_Vector_base_long_long_std_allocator_long_long;
  constructor(...$a) {
    this.__init_std_Vector_base_long_long_std_allocator_long_long(...$a);
  }
  __init_std_Vector_base_long_long_std_allocator_long_long(...$a) {
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long = new std_Vector_base_long_long_std_allocator_long_long_Vector_impl($a[1]);
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long.ctj_a = this; this._M_impl$std_Vector_base_long_long_std_allocator_long_long.ctj_i = "_M_impl$std_Vector_base_long_long_std_allocator_long_long";
    this._M_create_storage($a[0]);
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl$std_Vector_base_long_long_std_allocator_long_long"};
  }
  _M_allocate(__n) {
    let $t1;
    return ($t1 = ((__n !== ((0) >>> 0)) ? gnu_cxx_new_allocator_long_long.prototype.allocate.call(this._M_impl$std_Vector_base_long_long_std_allocator_long_long, __n, {a: [0], i: 0}) : 0), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  _M_create_storage(__n) {
    let $t2, $t3;
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start = ($t2 = std_Vector_base_long_long_std_allocator_long_long.prototype._M_allocate.call(this, __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_finish = (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? {a: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.a, i: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.i} : null);
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_end_of_storage = ($t3 = ({a: (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.a : null), i: (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.i : 0) + (__n)}), $t3 ? {a: $t3.a, i: $t3.i} : null);
  }
}
class std_vector_long_long_std_allocator_long_long extends std_Vector_base_long_long_std_allocator_long_long {
  constructor(...$a) {
    super(...[$a[0], ($a[1] === undefined ? ({a: [new std_allocator_long_long()], i: 0}) : $a[1])]);
    this.__init_std_vector_long_long_std_allocator_long_long(...$a);
  }
  __init_std_vector_long_long_std_allocator_long_long(...$a) {
    this._M_default_initialize($a[0]);
  }
  __dtor() {
    std_Vector_base_long_long_std_allocator_long_long.prototype.__dtor.call(this);
  }
  size__c() {
    return ((((this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_finish ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_finish.i : 0) - (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.i : 0))) >>> 0);
  }
  op_index(__n) {
    return ({a: (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.a : null), i: (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.i : 0) + (__n)});
  }
  _M_default_initialize(__n) {
    std_uninitialized_default_n_a_long_long_P_unsigned_long_std_allocator_long_long((this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start ? {a: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.a, i: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_start.i} : null), __n, this._M_get_Tp_allocator());
    this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_finish = (this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_end_of_storage ? {a: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_end_of_storage.a, i: this._M_impl$std_Vector_base_long_long_std_allocator_long_long._M_end_of_storage.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_long_long {
  __init_gnu_cxx_alloc_traits_std_allocator_long_long(...$a) { }
  __dtor() {
  }
  static construct(__a, __p) {
    gnu_cxx_new_allocator_long_long.prototype.construct__gnu_cxx_new_allocator_long_long_construct_long_long.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_long_long_destroy_long_long(__a, __p) {
    gnu_cxx_new_allocator_long_long.prototype.destroy__gnu_cxx_new_allocator_long_long_destroy_long_long.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
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
  _M_array$std_initializer_list_long_long;
  _M_len$std_initializer_list_long_long;
  constructor(...$a) {
    this.__init_std_initializer_list_long_long(...$a);
  }
  __init_std_initializer_list_long_long(...$a) {
    this._M_array$std_initializer_list_long_long = null;
    this._M_len$std_initializer_list_long_long = 0;
  }
  __dtor() {
  }
}
class std_binary_function_long_long_long_long_bool {
  constructor(...$a) {
    this.__init_std_binary_function_long_long_long_long_bool(...$a);
  }
  __init_std_binary_function_long_long_long_long_bool(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_binary_function_long_long_long_long_bool)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_less_long_long extends std_binary_function_long_long_long_long_bool {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_long_long) ? [$a[0]] : []));
    this.__init_std_less_long_long(...$a);
  }
  __init_std_less_long_long(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_long_long)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_binary_function_long_long_long_long_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return (__x.a[__x.i] < __y.a[__y.i]);
  }
}
class std_pair_long_long_unsigned_long_long {
  first$std_pair_long_long_unsigned_long_long;
  second$std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_pair_long_long_unsigned_long_long(...$a) {
    let $t4;
    if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_long_long_R && $a[2] instanceof std_tuple) {
      this.__init_std_pair_long_long_unsigned_long_long({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new std_Index_tuple_value0(), new std_Index_tuple());
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_long_long_R) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_long_long_R) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      this.first$std_pair_long_long_unsigned_long_long = ($t4 = std_forward_long_long_R(std_get_4_value0_long_long_R($a[0])), $t4.a[$t4.i]);
      this.second$std_pair_long_long_unsigned_long_long = 0n;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first$std_pair_long_long_unsigned_long_long = 0n;
      this.second$std_pair_long_long_unsigned_long_long = 0n;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_long_long_unsigned_long_long {
  __init_gnu_cxx_new_allocator_std_pair_long_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_long_long_unsigned_long_long extends gnu_cxx_new_allocator_std_pair_long_long_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_allocator_std_pair_long_long_unsigned_long_long(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_pair_long_long_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_binary_function_std_pair_long_long_unsigned_long_long_std_pair_long_long_unsigned_long_long_bool {
  __init_std_binary_function_std_pair_long_long_unsigned_long_long_std_pair_long_long_unsigned_long_long_bool(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_std_pair_long_long_unsigned_long_long {
  _M_array$std_initializer_list_std_pair_long_long_unsigned_long_long;
  _M_len$std_initializer_list_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_initializer_list_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_initializer_list_std_pair_long_long_unsigned_long_long(...$a) {
    this._M_array$std_initializer_list_std_pair_long_long_unsigned_long_long = null;
    this._M_len$std_initializer_list_std_pair_long_long_unsigned_long_long = 0;
  }
  __dtor() {
  }
}
class std_unary_function_std_pair_long_long_unsigned_long_long_long_long {
  constructor(...$a) {
    this.__init_std_unary_function_std_pair_long_long_unsigned_long_long_long_long(...$a);
  }
  __init_std_unary_function_std_pair_long_long_unsigned_long_long_long_long(...$a) {
  }
  __dtor() {
  }
}
class std_Select1st_std_pair_long_long_unsigned_long_long extends std_unary_function_std_pair_long_long_unsigned_long_long_long_long {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Select1st_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_Select1st_std_pair_long_long_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_unary_function_std_pair_long_long_unsigned_long_long_long_long.prototype.__dtor.call(this);
  }
  op_call__c(__x) {
    return {a: __x.a[__x.i], i: "first$std_pair_long_long_unsigned_long_long"};
  }
}
class std_allocator_std_pair_long_long_unsigned_long_long_rebind_std_pair_long_long_unsigned_long_long {
  __init_std_allocator_std_pair_long_long_unsigned_long_long_rebind_std_pair_long_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_Rb_tree_node_std_pair_long_long_unsigned_long_long extends std_Rb_tree_node_base {
  _M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a) {
    let $t5, $t6, $t7;
    this._M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long = new std_pair_long_long_unsigned_long_long(($t5 = std_forward_1_std_piecewise_construct_t($a[0]), $t5.a[$t5.i]), ($t6 = std_forward_1_std_tuple_long_long_R($a[1]), $t6.a[$t6.i]), ($t7 = std_forward_1_std_tuple($a[2]), $t7.a[$t7.i]));
    this._M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long.ctj_a = this; this._M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long.ctj_i = "_M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long";
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long {
  _M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long)) {
      this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return {a: this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a[this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i], i: "_M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long"};
  }
  op_inc() {
    let $t8;
    this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long = ($t8 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)), $t8 ? {a: $t8.a, i: $t8.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t9;
    this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long = ($t9 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)), $t9 ? {a: $t9.a, i: $t9.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long) || (this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long) && this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).a && this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).i));
  }
  op_assign(o) {
    this._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long = (((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long) ? {a: ((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).a, i: ((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).i} : null);
    return {a: [this], i: 0};
  }
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
class std_is_empty_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_long_long_R(...$a);
  }
  __init_std_is_empty_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_long_long_R extends std_is_empty_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_long_long_R(...$a);
  }
  __init_std_is_empty_non_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_is_empty_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_long_long_R {
  __init_std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value0_long_long_R_value0 {
  _M_head_impl$std_Head_base_value0_long_long_R_value0;
  constructor(...$a) {
    this.__init_std_Head_base_value0_long_long_R_value0(...$a);
  }
  __init_std_Head_base_value0_long_long_R_value0(...$a) {
    this._M_head_impl$std_Head_base_value0_long_long_R_value0 = $a[0];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return (__b.a[__b.i])._M_head_impl$std_Head_base_value0_long_long_R_value0;
  }
}
class std_Tuple_impl_value0_long_long_R extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_long_long_R(...$a);
  }
  __init_std_Tuple_impl_value0_long_long_R(...$a) {
    std_Head_base_value0_long_long_R_value0.prototype.__init_std_Head_base_value0_long_long_R_value0.call(this, $a[0]);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_long_long_R_value0.prototype.__dtor.call(this);
  }
  static _M_head(__t) {
    return std_Head_base_value0_long_long_R_value0._M_head(__t);
  }
}
for (let $b = std_Head_base_value0_long_long_R_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value0_long_long_R.prototype)) std_Tuple_impl_value0_long_long_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_long_long_R)) std_Tuple_impl_value0_long_long_R[$k] = $b[$k];
  }
}
class std_tuple_long_long_R extends std_Tuple_impl_value0_long_long_R {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_tuple_long_long_R(...$a);
  }
  __init_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_long_long_R.prototype.__dtor.call(this);
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
class std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long {
  _M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long)) {
      this._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long)) {
      this._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((this._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long ? {a: this._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long.a, i: this._M_node$std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long.i} : null));
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_piecewise_construct_t {
  __init_std_remove_reference_std_piecewise_construct_t(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_tuple_long_long_R {
  __init_std_remove_reference_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_tuple {
  __init_std_remove_reference_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
  second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    let $t10, $t11, $t12, $t13;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t10 = std_forward_1_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P($a[0]), $t11 = ($t10 ? $t10.a[$t10.i] : null), $t11 && $t11.a !== undefined ? {a: $t11.a, i: $t11.i} : $t11);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t12 = std_forward_1_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P($a[1]), $t13 = ($t12 ? $t12.a[$t12.i] : null), $t13 && $t13.a !== undefined ? {a: $t13.a, i: $t13.i} : $t13);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
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
class std_allocator_std_pair_long_long_unsigned_long_long_rebind_std_Rb_tree_node_std_pair_long_long_unsigned_long_long {
  __init_std_allocator_std_pair_long_long_unsigned_long_long_rebind_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long {
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t14;
    if ((__n > gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t14 = operatornew__unsigned_long(((Math.imul(__n, 32)) >>> 0)), $t14 ? {a: $t14.a, i: $t14.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (32))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__p, __args_0, __args_1, __args_2) {
    (__p.a[__p.i] = new std_Rb_tree_node_std_pair_long_long_unsigned_long_long(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_long_long_R(__args_1), std_forward_1_std_tuple(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_destroy_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(__p) {
    std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.__dtor.call(__p.a[__p.i]);
  }
}
class std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 extends std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long {
  _M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1;
  _M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1;
  _M_node_count$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1(...$a);
  }
  __init_std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1(...$a) {
    this._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 = new std_less_long_long();
    this._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1.ctj_i = "_M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1";
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 = new std_Rb_tree_node_base();
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1.ctj_a = this; this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1.ctj_i = "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1";
    this._M_node_count$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 = ((0) >>> 0);
    this._M_initialize();
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_color = 0;
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_parent = null;
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_left = (({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).i} : null);
    this._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_right = (({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).i} : null);
  }
}
class std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long {
  _M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long(...$a) {
    this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long = new std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1();
    this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.ctj_a = this; this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.ctj_i = "_M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long"};
  }
  _M_get_node() {
    let $t15;
    return ($t15 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.allocate.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, ((1) >>> 0), {a: [0], i: 0}), $t15 ? {a: $t15.a, i: $t15.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.deallocate.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_destroy_node(__p) {
    let $t16;
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.destroy__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_destroy_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.call(($t16 = this._M_get_Node_allocator(), $t16.a[$t16.i]), (__p ? {a: __p.a, i: __p.i} : null));
    this._M_put_node((__p ? {a: __p.a, i: __p.i} : null));
  }
  _M_leftmost() {
    return {a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, i: "_M_left"};
  }
  _M_rightmost() {
    return {a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, i: "_M_right"};
  }
  _M_begin() {
    return (this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_parent ? {a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_parent.a, i: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_std_pair_long_long_unsigned_long_long"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t17, $t18;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t17 = new std_Select1st_std_pair_long_long_unsigned_long_long(), $t17)).op_call__c(std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t18 = new std_Select1st_std_pair_long_long_unsigned_long_long(), $t18)).op_call__c(std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t19, $t20, $t21;
    let __x = ($t19 = this._M_begin(), $t19 ? {a: $t19.a, i: $t19.i} : null);
    let __y = ($t20 = this._M_end(), $t20 ? {a: $t20.a, i: $t20.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, __k, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t21 = (__comp ? std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t21 ? {a: $t21.a, i: $t21.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((__y ? {a: __y.a, i: __y.i} : null));
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
    if (std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__j._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: __j._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: __j._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"}, {a: [null], i: 0});
  }
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t22, $t23, $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33;
    let __pos = std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long.prototype._M_const_cast__c.call(__position);
    if (($t23 = ($t22 = this._M_end(), $t22), (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long === $t23 || (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long && $t23 && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a === $t23.a && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i === $t23.i)))) {
       {
        if (((this.size__c() > ((0) >>> 0)) && std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key(($t24 = this._M_rightmost(), $t25 = ($t24 ? $t24.a[$t24.i] : null), $t25 && $t25.a !== undefined ? {a: $t25.a, i: $t25.i} : $t25)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, __k, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long({a: [__pos], i: 0});
          if (($t27 = (($t26 = this._M_leftmost(), $t26) ? (($t26 = this._M_leftmost(), $t26)).a[(($t26 = this._M_leftmost(), $t26)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long === $t27 || (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long && $t27 && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a === $t27.a && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i === $t27.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key(($t29 = (($t28 = __before.op_dec(), $t28.a[$t28.i]))._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long, $t29 ? {a: $t29.a, i: $t29.i} : null)), __k)) {
               {
                if ((std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_right((__before._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: __before._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: __before._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __before, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"});
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"});
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
        if (std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long({a: [__pos], i: 0});
            if (($t31 = (($t30 = this._M_rightmost(), $t30) ? (($t30 = this._M_rightmost(), $t30)).a[(($t30 = this._M_rightmost(), $t30)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long === $t31 || (__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long && $t31 && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a === $t31.a && __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i === $t31.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, __k, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key(($t33 = (($t32 = __after.op_inc(), $t32.a[$t32.i]))._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long, $t33 ? {a: $t33.a, i: $t33.i} : null)))) {
                 {
                  if ((std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_right((__pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long.i} : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"});
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __after, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"}, {a: __after, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"});
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
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long"}, {a: [null], i: 0});
        }
      }
    }
  }
  _M_insert_node(__x, __p, __z) {
    let $t34, $t35;
    let __insert_left = (((__x !== null) || ($t35 = ($t34 = this._M_end(), $t34), (__p === $t35 || (__p && $t35 && __p.a === $t35.a && __p.i === $t35.i)))) || std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__z ? {a: __z.a, i: __z.i} : null)), std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"});
    (this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_node_count$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 = ((this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_node_count$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1 + 1) >>> 0));
    return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_lower_bound(__x, __y, __k) {
    let $t36, $t37;
    while ((__x !== null)) {
      if ((!(std_less_long_long.prototype.op_call__c.call(this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1, std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
        (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t36 = std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_left((__x ? {a: __x.a, i: __x.i} : null)), $t36 ? {a: $t36.a, i: $t36.i} : null));
      }
      else {
        __x = ($t37 = std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_right((__x ? {a: __x.a, i: __x.i} : null)), $t37 ? {a: $t37.a, i: $t37.i} : null);
      }
    }
    return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((__y ? {a: __y.a, i: __y.i} : null));
  }
  key_comp__c() {
    return new std_less_long_long({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_key_compare$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"});
  }
  begin() {
    return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_left ? {a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_left.a, i: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, i: "_M_header$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1"}).i} : null));
  }
  size__c() {
    return this._M_impl$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._M_node_count$std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_Rb_tree_impl_std_less_long_long_value1;
  }
  lower_bound(__k) {
    let $t38, $t39;
    return this._M_lower_bound(($t38 = this._M_begin(), $t38 ? {a: $t38.a, i: $t38.i} : null), ($t39 = this._M_end(), $t39 ? {a: $t39.a, i: $t39.i} : null), __k);
  }
  _M_emplace_hint_unique__std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_M_emplace_hint_unique_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__pos, __args_0, __args_1, __args_2) {
    let $t40;
    let __z = ($t40 = this._M_create_node__std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_M_create_node_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_long_long_R(__args_1), std_forward_1_std_tuple(__args_2)), $t40 ? {a: $t40.a, i: $t40.i} : null);
    if (true) {
       {
        let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long({a: [__pos], i: 0}), std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long._S_key((__z ? {a: __z.a, i: __z.i} : null)));
        if (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P) {
          return this._M_insert_node((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__z ? {a: __z.a, i: __z.i} : null));
        }
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
        return new std_Rb_tree_iterator_std_pair_long_long_unsigned_long_long((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null));
      }
    }
    if (false) {
       {
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
      }
    }
  }
  _M_create_node__std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_M_create_node_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__args_0, __args_1, __args_2) {
    let $t41;
    let __tmp = ($t41 = this._M_get_node(), $t41 ? {a: $t41.a, i: $t41.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_long_long_R(__args_1), std_forward_1_std_tuple(__args_2));
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
class std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long {
  _M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long;
  constructor(...$a) {
    this.__init_std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long(...$a);
  }
  __init_std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long(...$a) {
    this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long = new std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long();
    this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.ctj_a = this; this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.ctj_i = "_M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long";
  }
  __dtor() {
  }
  end() {
    return std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype.end.call(this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long);
  }
  size__c() {
    return std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype.size__c.call(this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long);
  }
  op_index(__k) {
    let $t42;
    let __i = {v: this.lower_bound(__k)};
    if ((__i.v.op_eq__c({a: [this.end()], i: 0}) || (($t42 = this.key_comp__c(), $t42)).op_call__c(__k, {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "first$std_pair_long_long_unsigned_long_long"}))) {
      __i.v.op_assign({a: [std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype._M_emplace_hint_unique__std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long_M_emplace_hint_unique_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv.call(this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, new std_Rb_tree_const_iterator_std_pair_long_long_unsigned_long_long({a: __i, i: "v"}), {a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_long_long_R(__k)], i: 0}, {a: [new std_tuple()], i: 0})], i: 0});
    }
    return {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "second$std_pair_long_long_unsigned_long_long"};
  }
  key_comp__c() {
    return std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype.key_comp__c.call(this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long);
  }
  lower_bound(__x) {
    return std_Rb_tree_long_long_std_pair_long_long_unsigned_long_long_std_Select1st_std_pair_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype.lower_bound.call(this._M_t$std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long, __x);
  }
}
class std_is_convertible_long_long_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_long_long_std_uses_alloc_base(...$a);
  }
  __init_std_is_convertible_long_long_std_uses_alloc_base(...$a) {
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
class std_or_std_is_void_long_long_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_long_long_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_or_std_is_void_long_long_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
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
class std_conditional_value0_std_is_void_long_long_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  __init_std_conditional_value0_std_is_void_long_long_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_long_long_std_uses_alloc_base_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_long_long_std_uses_alloc_base_value0(...$a);
  }
  __init_std_is_convertible_helper_long_long_std_uses_alloc_base_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
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
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
  static construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__a, __p, __args_0, __args_1, __args_2) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long._S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_S_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_long_long_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
  static _S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_S_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv(__a, __p, __args_0, __args_1, __args_2) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long.prototype.construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_long_long_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_const_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1.prototype.__dtor.call(this);
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
class std_is_reference_std_tuple_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_is_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_tuple_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_is_lvalue_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_tuple_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_is_rvalue_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_tuple_long_long_R_std_is_rvalue_reference_std_tuple_long_long_R extends std_is_rvalue_reference_std_tuple_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_tuple_long_long_R_std_is_rvalue_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_tuple_long_long_R_std_is_rvalue_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_tuple_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_long_long_R_std_is_rvalue_reference_std_tuple_long_long_R {
  __init_std_conditional_value0_std_is_lvalue_reference_std_tuple_long_long_R_std_is_rvalue_reference_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_not_std_is_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_tuple_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_tuple_long_long_R(...$a);
  }
  __init_std_is_void_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_tuple_long_long_R {
  __init_std_remove_cv_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_tuple_long_long_R {
  __init_std_remove_volatile_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_tuple_long_long_R {
  __init_std_remove_const_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_tuple_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_tuple_long_long_R(...$a);
  }
  __init_std_is_void_helper_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_tuple_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_tuple_long_long_R(...$a);
  }
  __init_std_not_std_is_void_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_tuple_long_long_R_std_not_std_is_void_std_tuple_long_long_R extends std_not_std_is_void_std_tuple_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_tuple_long_long_R_std_not_std_is_void_std_tuple_long_long_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_tuple_long_long_R_std_not_std_is_void_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_tuple_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_long_long_R_std_not_std_is_reference_std_tuple_long_long_R {
  __init_std_conditional_value1_std_not_std_is_void_std_tuple_long_long_R_std_not_std_is_reference_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_long_long_R_value1 {
  __init_std_add_rvalue_reference_helper_std_tuple_long_long_R_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_long_long_R extends std_add_rvalue_reference_helper_std_tuple_long_long_R_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_tuple_long_long_R(...$a);
  }
  __init_std_add_rvalue_reference_std_tuple_long_long_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_tuple_long_long_R_value1.prototype.__dtor.call(this);
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
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_const_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1 {
  __init_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_is_nary_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_is_nary_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_do_is_nary_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_do_is_nary_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_construct_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_std_piecewise_construct_t_std_tuple_long_long_R_std_tuple(...$a) { }
  __dtor() {
  }
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
class std_declval_protector_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
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
class std_declval_protector_std_tuple_long_long_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_tuple_long_long_R(...$a);
  }
  __init_std_declval_protector_std_tuple_long_long_R(...$a) {
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
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
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
class std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_or_std_is_function_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_array_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_piecewise_construct_t_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_piecewise_construct_t_long_long(...$a);
  }
  __init_std_is_convertible_std_piecewise_construct_t_long_long(...$a) {
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
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_long_long_std_is_array_long_long extends std_or_std_is_function_long_long_std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_long_long_std_is_array_long_long(...$a);
  }
  __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_long_long_std_is_array_long_long(...$a) {
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
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_long_long_std_is_array_long_long {
  __init_std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_long_long_std_is_array_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_piecewise_construct_t_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_std_piecewise_construct_t_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_long_long_R_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_long_long_R_unsigned_long_long(...$a);
  }
  __init_std_is_convertible_std_tuple_long_long_R_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_unsigned_long_long(...$a);
  }
  __init_std_is_function_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_is_array_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_is_array_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_array_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_void_std_tuple_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  __init_std_conditional_value0_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_long_long_R_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  __init_std_conditional_value0_std_is_void_std_tuple_long_long_R_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_long_long_R_unsigned_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_long_long_R_unsigned_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_long_long_R_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_and_std_is_convertible_std_piecewise_construct_t_long_long_std_is_convertible_std_tuple_long_long_R_unsigned_long_long extends std_is_convertible_std_piecewise_construct_t_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_piecewise_construct_t_long_long_std_is_convertible_std_tuple_long_long_R_unsigned_long_long(...$a);
  }
  __init_std_and_std_is_convertible_std_piecewise_construct_t_long_long_std_is_convertible_std_tuple_long_long_R_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_std_piecewise_construct_t_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_long_long_R_unsigned_long_long_std_is_convertible_std_piecewise_construct_t_long_long {
  __init_std_conditional_value0_std_is_convertible_std_tuple_long_long_R_unsigned_long_long_std_is_convertible_std_piecewise_construct_t_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(...$a) { }
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
class std_is_convertible_std_tuple_long_long_R_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_long_long_R_long_long(...$a);
  }
  __init_std_is_convertible_std_tuple_long_long_R_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_long_long_R_std_is_function_long_long_std_is_array_long_long extends std_or_std_is_function_long_long_std_is_array_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_long_long_R_std_is_function_long_long_std_is_array_long_long(...$a);
  }
  __init_std_or_std_is_void_std_tuple_long_long_R_std_is_function_long_long_std_is_array_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_long_long_std_is_array_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_long_long_R_std_or_std_is_function_long_long_std_is_array_long_long {
  __init_std_conditional_value0_std_is_void_std_tuple_long_long_R_std_or_std_is_function_long_long_std_is_array_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_long_long_R_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_long_long_R_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_long_long_R_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_unsigned_long_long(...$a);
  }
  __init_std_is_convertible_std_tuple_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_void_std_tuple_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  __init_std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_unsigned_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_unsigned_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_and_std_is_convertible_std_tuple_long_long_R_long_long_std_is_convertible_std_tuple_unsigned_long_long extends std_is_convertible_std_tuple_long_long_R_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_tuple_long_long_R_long_long_std_is_convertible_std_tuple_unsigned_long_long(...$a);
  }
  __init_std_and_std_is_convertible_std_tuple_long_long_R_long_long_std_is_convertible_std_tuple_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_std_tuple_long_long_R_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_unsigned_long_long_std_is_convertible_std_tuple_long_long_R_long_long {
  __init_std_conditional_value0_std_is_convertible_std_tuple_unsigned_long_long_std_is_convertible_std_tuple_long_long_R_long_long(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_long_long_R {
  __init_std_tuple_element_value0_std_tuple_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_ref_long_long_R {
  __init_std_add_ref_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_c_ref_long_long_R {
  __init_std_add_c_ref_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_r_ref_long_long_R {
  __init_std_add_r_ref_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_long_long_R {
  __init_std_remove_reference_long_long_R(...$a) { }
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 1, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_putll.call(__os.a[__os.i], 3, __n);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_putll.call(__os.a[__os.i], 2, BigInt.asIntN(64, __n));
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(__os, __s) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(__os, __m) {
  if (((__m.a[__m.i])._M_kind === 0)) {
    std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 8, 10, null, 0);
  }
  else {
    if (((__m.a[__m.i])._M_kind === 1)) {
      std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 8, 0, null, 0);
    }
    else {
      std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 9, 0, null, 0);
    }
  }
  return __os;
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function partial() {
  let ps = [new P(), ...Array.from({length: 2}, () => new P())];
  let q = new Q();
  let grid = [[1, ...new Array(2).fill(0)], ...Array.from({length: 1}, () => new Array(3).fill(0))];
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (ps[2]).x), {a: [32, 0], i: 0}), (ps[1]).y), {a: [32, 0], i: 0}), (q.p[1]).y), {a: [32, 0], i: 0}), (grid[1])[2]), {a: [32, 0], i: 0}), (grid[0])[0]), {a: [std_endl], i: 0});
  return 0;
}
function main() {
  let $t43, $t44, $t45, $t46, $t47, $t48, $t49, $t50;
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, K), {a: [32, 0], i: 0}), G), {a: [32, 0], i: 0}), MASK), {a: [32, 0], i: 0}), A.S), {a: [32, 0], i: 0}), A.cnt), {a: [std_endl], i: 0});
  let a = new A();
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, a.m), {a: [32, 0], i: 0}), a.u), {a: [32, 0], i: 0}), T_value21.v), {a: [std_endl], i: 0});
  let arr = [1n, 2n, ...new Array(1).fill(0n)];
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, arr[2]), {a: [32, 0], i: 0}), BigInt.asIntN(64, (arr[0]) + (arr[1]))), {a: [std_endl], i: 0});
  let v = new std_vector_long_long_std_allocator_long_long(((3) >>> 0), {a: [new std_allocator_long_long()], i: 0});
  ($t43 = v.op_index(((1) >>> 0)), $t43.a[$t43.i] = BigInt(((-(1)) | 0)));
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, ($t44 = v.op_index(((0) >>> 0)), $t44.a[$t44.i])), {a: [32, 0], i: 0}), ($t45 = v.op_index(((1) >>> 0)), $t45.a[$t45.i])), {a: [32, 0], i: 0}), std_vector_long_long_std_allocator_long_long.prototype.size__c.call(v)), {a: [std_endl], i: 0});
  let mp = new std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long();
  ($t46 = mp.op_index({a: [5n], i: 0}), $t46.a[$t46.i] = BigInt.asUintN(64, ($t46.a[$t46.i]) + (3n)));
  ($t47 = mp.op_index({a: [BigInt(((-(5)) | 0))], i: 0}), $t47.a[$t47.i] = 1n);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: std_cout, i: "v"}, ($t48 = mp.op_index({a: [5n], i: 0}), $t48.a[$t48.i])), {a: [32, 0], i: 0}), ($t49 = mp.op_index({a: [BigInt(((-(5)) | 0))], i: 0}), $t49.a[$t49.i])), {a: [32, 0], i: 0}), std_map_long_long_unsigned_long_long_std_less_long_long_std_allocator_std_pair_long_long_unsigned_long_long.prototype.size__c.call(mp)), {a: [std_endl], i: 0});
  let p = {v: 3n};
  let pp = (({a: p, i: "v"}) ? {a: ({a: p, i: "v"}).a, i: ({a: p, i: "v"}).i} : null);
  pp.a[pp.i] = BigInt.asIntN(64, (pp.a[pp.i]) + (4n));
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, p.v), {a: [32, 0], i: 0}), BigInt.asIntN(64, (pp.a[pp.i]) * (2n))), {a: [std_endl], i: 0});
  for (let i = 0n; (i < 3n); ($t50 = i, i = BigInt.asIntN(64, $t50 + 1n), $t50)) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_long_long({a: std_cout, i: "v"}, BigInt.asIntN(64, (i) * (K))), ((i < 2n) ? {a: [44, 0], i: 0} : {a: [10, 0], i: 0}));
  }
  partial();
  return 0;
}
function std_uninitialized_default_n_a_long_long_P_unsigned_long_std_allocator_long_long(__first, __n, __alloc) {
  let $t51;
  let __cur = (__first ? {a: __first.a, i: __first.i} : null);
  if (true) {
     {
      for (; (__n > ((0) >>> 0)); ((__n = ((__n - 1) >>> 0)), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_long_long.construct(__alloc, ($t51 = std_addressof_long_long(__cur), $t51 ? {a: $t51.a, i: $t51.i} : null));
      }
    }
  }
  if (false) {
     {
      std_Destroy_2_long_long_P_std_allocator_long_long((__first ? {a: __first.a, i: __first.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_forward_1_std_piecewise_construct_t(__t) {
  return __t;
}
function std_forward_1_std_tuple_long_long_R(__t) {
  return __t;
}
function std_forward_1_std_tuple(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P(__t) {
  return __t;
}
function std_forward_long_long_R(__t) {
  return __t;
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R.__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P.__delegate();
}
function std_declval_long_long() {
  return std_declval_protector_long_long.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t.__delegate();
}
function std_declval_std_tuple_long_long_R() {
  return std_declval_protector_std_tuple_long_long_R.__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_long_long_unsigned_long_long_P.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_addressof_long_long(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_Destroy_2_long_long_P_std_allocator_long_long(__first, __last, __alloc) {
  let $t52;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_long_long.destroy__gnu_cxx_alloc_traits_std_allocator_long_long_destroy_long_long(__alloc, ($t52 = std_addressof_long_long(__first), $t52 ? {a: $t52.a, i: $t52.i} : null));
  }
}
function std_get_4_value0_long_long_R(__t) {
  return std_get_helper_value0_long_long_R(__t);
}
function std_get_helper_value0_long_long_R(__t) {
  return std_Tuple_impl_value0_long_long_R._M_head(__t);
}
let std_piecewise_construct = {v: new std_piecewise_construct_t()};
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
let K = BigInt.asIntN(64, (1n) << (40n));
let G = BigInt(((-(3)) | 0));
let MASK = ((BigInt.asUintN(64, ~(0n))) >> (4n));
main();
