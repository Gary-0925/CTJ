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
class std_true_type {
  __init_std_true_type(...$a) { }
  __dtor() {
  }
}
class std_false_type {
  constructor(...$a) {
    this.__init_std_false_type(...$a);
  }
  __init_std_false_type(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_false_type)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
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
class std_sfinae_types_class_50 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_50(...$a);
  }
  __init_std_sfinae_types_class_50(...$a) {
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
  static assign(__c1, __c2) {
    __c1.a[__c1.i] = __c2.a[__c2.i];
  }
  static length(__s) {
    return (($s) => { let $i = $s.i; while ($s.a[$i]) $i++; return $i - $s.i; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s));
  }
  static copy(__s1, __s2, __n) {
    let $t0;
    return ($t0 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
  }
}
class gnu_cxx_new_allocator_char {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_char(...$a);
  }
  __init_gnu_cxx_new_allocator_char(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t1;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t1 = operatornew__unsigned_long_long((__n * 1)), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 1));
  }
}
class std_allocator_char extends gnu_cxx_new_allocator_char {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_char) ? [$a[0]] : []));
    this.__init_std_allocator_char(...$a);
  }
  __init_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
class std_basic_string_char_std_char_traits_char_std_allocator_char_Rep extends std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base {
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(...$a) {
  }
  __dtor() {
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base.prototype.__dtor.call(this);
  }
  _M_set_sharable() {
    this._M_refcount = 0;
  }
  _M_set_length_and_sharable(__n) {
    let $t2;
     {
      this._M_set_sharable();
      this._M_length = __n;
      std_char_traits_char.assign({a: (($t2 = this._M_refdata(), $t2)).a, i: (($t2 = this._M_refdata(), $t2)).i + (__n)}, {a: std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t3, $t4;
    return ($t4 = ($t3 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t3 ? $t3.a : null), i: ($t3 ? $t3.i : 0) + (1)})), $t4 ? {a: $t4.a, i: $t4.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t5, $t6;
    if ((__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size)) {
      std_throw_length_error({a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], i: 0});
    }
    let __pagesize = 4096;
    let __malloc_header_size = (4 * 8);
    if (((__capacity > __old_capacity) && (__capacity < (2 * __old_capacity)))) {
      __capacity = (2 * __old_capacity);
    }
    let __size = (((__capacity + 1) * 1) + 20);
    let __adj_size = (__size + __malloc_header_size);
    if (((__adj_size > __pagesize) && (__capacity > __old_capacity))) {
       {
        let __extra = (__pagesize - (__adj_size % __pagesize));
        __capacity += (Math.trunc(__extra / 1));
        if ((__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size)) {
          __capacity = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size;
        }
        __size = (((__capacity + 1) * 1) + 20);
      }
    }
    let __place = ($t5 = (__alloc.a[__alloc.i]).allocate(__size, {a: [0], i: 0}), $t5 ? {a: $t5.a, i: $t5.i} : null);
    let __p = ($t6 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t6 ? {a: $t6.a, i: $t6.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    (__p.a[__p.i])._M_set_sharable();
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_destroy(__a) {
    let __size = (20 + ((this._M_capacity + 1) * 1));
    (__a.a[__a.i]).deallocate({a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
  }
  static _S_max_size = 1073741818;
  static _S_terminal = 0;
  static _S_empty_rep_storage = null;
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  _M_p;
  constructor(...$a) {
    super(...[$a[1]]);
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    this._M_p = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
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
    let $t7, $t8;
    this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t8 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t7 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t7 ? {a: $t7.a, i: $t7.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t8 ? {a: $t8.a, i: $t8.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  _M_data__c() {
    return (this._M_dataplus._M_p ? {a: this._M_dataplus._M_p.a, i: this._M_dataplus._M_p.i} : null);
  }
  _M_rep__c() {
    let $t9, $t10;
    return ($t10 = {a: (($t9 = this._M_data__c(), $t9)).a, i: (($t9 = this._M_data__c(), $t9)).i + ((-(1)))}, $t10 ? {a: $t10.a, i: $t10.i} : null);
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === 1)) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  size__c() {
    let $t11;
    return (($t11 = this._M_rep__c(), $t11.a[$t11.i]))._M_length;
  }
  static _S_construct(...$a) {
    let $t12, $t13, $t14, $t15, $t16, $t17, $t18, $t19;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      return ($t12 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t12 ? {a: $t12.a, i: $t12.i} : null);
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char) && $a[3] instanceof std_input_iterator_tag) {
      let __buf = new Array(128).fill(0);
      let __len = 0;
      while (((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i))) && (__len < (Math.trunc(128 / 1))))) {
         {
          __buf[__len++] = ($a[0]).a[($a[0]).i];
          ++($a[0]).i;
        }
      }
      let __r = ($t13 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, (0 >>> 0), $a[2]), $t13 ? {a: $t13.a, i: $t13.i} : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t14 = (__r.a[__r.i])._M_refdata(), $t14 ? {a: $t14.a, i: $t14.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t15 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((__len + 1), __len, $a[2]), $t15 ? {a: $t15.a, i: $t15.i} : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t16 = (__another.a[__another.i])._M_refdata(), $t16 ? {a: $t16.a, i: $t16.i} : null), ($t17 = (__r.a[__r.i])._M_refdata(), $t17 ? {a: $t17.a, i: $t17.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t18 = (__r.a[__r.i])._M_refdata(), $t18)).a[(($t18 = (__r.a[__r.i])._M_refdata(), $t18)).i + (__len++)] = ($a[0]).a[($a[0]).i];
              ++($a[0]).i;
            }
          }
        }
      }
      if (false) {
         {
          (__r.a[__r.i])._M_destroy($a[2]);
        }
      }
      (__r.a[__r.i])._M_set_length_and_sharable(__len);
      return ($t19 = (__r.a[__r.i])._M_refdata(), $t19 ? {a: $t19.a, i: $t19.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t20;
    return ($t20 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t20 ? {a: $t20.a, i: $t20.i} : null);
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = 0;
      this.second = 0;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($a[0]).a[($a[0]).i];
      this.second = ($a[1]).a[($a[1]).i];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
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
    let $t21;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t21 = operatornew__unsigned_long_long((__n * 8)), $t21 ? {a: $t21.a, i: $t21.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 8));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_pair_int_int(std_forward_1_std_pair_int_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
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
  size__c() {
    return this._M_len;
  }
  begin__c() {
    return (this._M_array ? {a: this._M_array.a, i: this._M_array.i} : null);
  }
  end__c() {
    let $t22, $t23, $t24;
    return ($t24 = ($t23 = ($t22 = this.begin__c(), $t22), ({a: ($t23 ? $t23.a : null), i: ($t23 ? $t23.i : 0) + (this.size__c())})), $t24 ? {a: $t24.a, i: $t24.i} : null);
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
    super(...[]);
    this.__init_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_node_std_pair_int_int(...$a) {
    this._M_value_field = new std_pair_int_int(std_forward_1_std_pair_int_int($a[0]));
    this._M_value_field.ctj_a = this; this._M_value_field.ctj_i = "_M_value_field";
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
    let $t25;
    this._M_node = ($t25 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t25 ? {a: $t25.a, i: $t25.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t26;
    this._M_node = ($t26 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t26 ? {a: $t26.a, i: $t26.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
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
    let $t27;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t27 = operatornew__unsigned_long_long((__n * 4)), $t27 ? {a: $t27.a, i: $t27.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t28;
    (__p.a[__p.i] = ($t28 = std_forward_1_int(__args_0), $t28.a[$t28.i]));
  }
  destroy(__p) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [std_move_std_allocator_int($a[0])] : []));
    this.__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_start = null;
      this._M_finish = null;
      this._M_end_of_storage = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
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
  _M_swap_data(__x) {
    std_swap_int_P({a: this, i: "_M_start"}, {a: __x.a[__x.i], i: "_M_start"});
    std_swap_int_P({a: this, i: "_M_finish"}, {a: __x.a[__x.i], i: "_M_finish"});
    std_swap_int_P({a: this, i: "_M_end_of_storage"}, {a: __x.a[__x.i], i: "_M_end_of_storage"});
  }
}
class std_Vector_base_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0]);
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) {
      this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[1]);
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
      this._M_create_storage($a[0]);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Vector_base_int_std_allocator_int)) {
      this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl(std_move_std_allocator_int((($a[0]).a[($a[0]).i])._M_get_Tp_allocator()));
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
      this._M_impl._M_swap_data({a: ($a[0]).a[($a[0]).i], i: "_M_impl"});
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_Tp_allocator__c() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t29;
    return ($t29 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t29 ? {a: $t29.a, i: $t29.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
  _M_create_storage(__n) {
    let $t30, $t31;
    this._M_impl._M_start = ($t30 = this._M_allocate(__n), $t30 ? {a: $t30.a, i: $t30.i} : null);
    this._M_impl._M_finish = (this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null);
    this._M_impl._M_end_of_storage = ($t31 = ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)}), $t31 ? {a: $t31.a, i: $t31.i} : null);
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [(($a[0]).a[($a[0]).i]).size__c(), {a: [gnu_cxx_alloc_traits_std_allocator_int._S_select_on_copy((($a[0]).a[($a[0]).i])._M_get_Tp_allocator__c())], i: 0}] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [std_move_std_vector_int_std_allocator_int($a[0])] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t32, $t33, $t34;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
      this._M_impl._M_finish = ($t32 = std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int((($a[0]).a[($a[0]).i]).begin__c(), (($a[0]).a[($a[0]).i]).end__c(), (this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), this._M_get_Tp_allocator()), $t32 ? {a: $t32.a, i: $t32.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize(($t33 = ({a: $a[0], i: 0}), $t33 ? {a: $t33.a, i: $t33.i} : null), ($t34 = ({a: $a[0], i: ($a[0]).length}), $t34 ? {a: $t34.a, i: $t34.i} : null), new std_random_access_iterator_tag());
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Destroy_2_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_start"});
  }
  end__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_finish"});
  }
  size__c() {
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t35;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t35 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t35.a[$t35.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_range_initialize(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__rv(__first);
    }
  }
  emplace_back__rv(__args_0) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_int(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(std_forward_1_int(__args_0));
    }
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t36, $t37, $t38, $t39, $t40;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t36 = this._M_allocate(__len), $t36 ? {a: $t36.a, i: $t36.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t37 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t37 ? {a: $t37.a, i: $t37.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t38 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t38 ? {a: $t38.a, i: $t38.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t39 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t39 ? {a: $t39.a, i: $t39.i} : null));
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
    this._M_impl._M_end_of_storage = ($t40 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t40 ? {a: $t40.a, i: $t40.i} : null);
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
  static _S_select_on_copy(__a) {
    return __a.a[__a.i];
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
  size__c() {
    return this._M_len;
  }
  begin__c() {
    return (this._M_array ? {a: this._M_array.a, i: this._M_array.i} : null);
  }
  end__c() {
    let $t41, $t42, $t43;
    return ($t43 = ($t42 = ($t41 = this.begin__c(), $t41), ({a: ($t42 ? $t42.a : null), i: ($t42 ? $t42.i : 0) + (this.size__c())})), $t43 ? {a: $t43.a, i: $t43.i} : null);
  }
}
class std_remove_reference_std_vector_int_std_allocator_int {
  __init_std_remove_reference_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
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
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_int(...$a);
  }
  __init_std_Rb_tree_node_int(...$a) {
    let $t44;
    this._M_value_field = ($t44 = std_forward_1_int($a[0]), $t44.a[$t44.i]);
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
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
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_int((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null));
  }
  op_mul__c() {
    return {a: this._M_node.a[this._M_node.i], i: "_M_value_field"};
  }
  op_inc() {
    let $t45;
    this._M_node = ($t45 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t45 ? {a: $t45.a, i: $t45.i} : null);
    return {a: [this], i: 0};
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
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
  op_inc() {
    let $t46;
    this._M_node = ($t46 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t46 ? {a: $t46.a, i: $t46.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t47;
    this._M_node = ($t47 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t47 ? {a: $t47.a, i: $t47.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
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
    let $t48;
    return ($t48 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t48 ? {a: $t48.a, i: $t48.i} : null);
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
    let $t49, $t50;
    this._M_range_initialize(($t49 = ({a: $a[0], i: 0}), $t49 ? {a: $t49.a, i: $t49.i} : null), ($t50 = ({a: $a[0], i: ($a[0]).length}), $t50 ? {a: $t50.a, i: $t50.i} : null), new std_random_access_iterator_tag());
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
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.max_size(this._M_get_Tp_allocator());
  }
  _M_check_len__c(__n, __s) {
    let $t51;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t51 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t51.a[$t51.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_range_initialize(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__rv(__first);
    }
  }
  emplace_back__rv(__args_0) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_std_pair_int_int(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(std_forward_1_std_pair_int_int(__args_0));
    }
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t52, $t53, $t54, $t55, $t56;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t52 = this._M_allocate(__len), $t52 ? {a: $t52.a, i: $t52.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct({a: this, i: "_M_impl"}, ($t53 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t53 ? {a: $t53.a, i: $t53.i} : null), std_forward_1_std_pair_int_int(__args_0));
        __new_finish = null;
        __new_finish = ($t54 = std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t54 ? {a: $t54.a, i: $t54.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy({a: this, i: "_M_impl"}, ($t55 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t55 ? {a: $t55.a, i: $t55.i} : null));
        }
        else {
          std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t56 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t56 ? {a: $t56.a, i: $t56.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_pair_int_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_pair_int_int(...$a) { }
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
class gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_pair_int_int_rebind_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    let $t57, $t58;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) {
      this._M_current = ($t57 = (($a[0]).a[($a[0]).i]).base__c(), $t58 = ($t57 ? $t57.a[$t57.i] : null), $t58 && $t58.a !== undefined ? {a: $t58.a, i: $t58.i} : $t58);
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
class std_iterator_traits_std_pair_int_int_P {
  __init_std_iterator_traits_std_pair_int_int_P(...$a) { }
  __dtor() {
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
class gnu_cxx_new_allocator_std_vector_int_std_allocator_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t59;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t59 = operatornew__unsigned_long_long((__n * 25)), $t59 ? {a: $t59.a, i: $t59.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 25));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_vector_int_std_allocator_int(std_forward_1_std_vector_int_std_allocator_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_std_vector_int_std_allocator_int extends gnu_cxx_new_allocator_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int) ? [$a[0]] : []));
    this.__init_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_allocator_std_vector_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl extends std_allocator_std_vector_int_std_allocator_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int)) {
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
    std_allocator_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    this._M_impl = new std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl($a[0]);
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t60;
    return ($t60 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t60 ? {a: $t60.a, i: $t60.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int extends std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0}) : $a[1])]);
    this.__init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    let $t61, $t62;
    this._M_range_initialize(($t61 = ({a: $a[0], i: 0}), $t61 ? {a: $t61.a, i: $t61.i} : null), ($t62 = ({a: $a[0], i: ($a[0]).length}), $t62 ? {a: $t62.a, i: $t62.i} : null), new std_random_access_iterator_tag());
  }
  __dtor() {
    std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
  size__c() {
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t63;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t63 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t63.a[$t63.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_range_initialize(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__rv(__first);
    }
  }
  emplace_back__rv(__args_0) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(std_forward_1_std_vector_int_std_allocator_int(__args_0));
    }
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t64, $t65, $t66, $t67, $t68;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t64 = this._M_allocate(__len), $t64 ? {a: $t64.a, i: $t64.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t65 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t65 ? {a: $t65.a, i: $t65.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        __new_finish = null;
        __new_finish = ($t66 = std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t66 ? {a: $t66.a, i: $t66.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t67 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t67 ? {a: $t67.a, i: $t67.i} : null));
        }
        else {
          std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t68 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t68 ? {a: $t68.a, i: $t68.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int(...$a) { }
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
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int {
  __init_std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_std_vector_int_std_allocator_int {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_initializer_list_std_vector_int_std_allocator_int(...$a) {
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
    let $t69, $t70, $t71;
    return ($t71 = ($t70 = ($t69 = this.begin__c(), $t69), ({a: ($t70 ? $t70.a : null), i: ($t70 ? $t70.i : 0) + (this.size__c())})), $t71 ? {a: $t71.a, i: $t71.i} : null);
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_int_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_std_pair_int_int_bool(...$a) {
    this.first = new std_Rb_tree_iterator_std_pair_int_int();
    this.first.ctj_a = this; this.first.ctj_i = "first";
    this.second = false;
  }
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
class std_pair_std_Rb_tree_iterator_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    this.first = new std_Rb_tree_iterator_int();
    this.first.ctj_a = this; this.first.ctj_i = "first";
    this.second = false;
  }
  __dtor() {
  }
}
class std_remove_reference_int_P {
  __init_std_remove_reference_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int {
  __init_std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t72;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t72 = operatornew__unsigned_long_long((__n * 36)), $t72 ? {a: $t72.a, i: $t72.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 36));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_pair_int_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_Rb_tree_node_std_pair_int_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [] : []));
    this.__init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int)) {
      this._M_key_compare = new std_less_int($a[0]);
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_key_compare = new std_less_int();
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else { throw new Error("no matching constructor"); }
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
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_int_int))) {
      this._M_impl = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1($a[0], {a: [new std_allocator_std_Rb_tree_node_std_pair_int_int(($a[1] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[1]))], i: 0});
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1();
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t73;
    return ($t73 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t73 ? {a: $t73.a, i: $t73.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
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
    let $t74, $t75;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t74 = new std_Select1st_std_pair_int_int(), $t74)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t75 = new std_Select1st_std_pair_int_int(), $t75)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t76, $t77, $t78;
    let __x = ($t76 = this._M_begin(), $t76 ? {a: $t76.a, i: $t76.i} : null);
    let __y = ($t77 = this._M_end(), $t77 ? {a: $t77.a, i: $t77.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t78 = (__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t78 ? {a: $t78.a, i: $t78.i} : null);
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
    let $t79, $t80, $t81, $t82, $t83, $t84, $t85, $t86, $t87, $t88, $t89, $t90;
    let __pos = __position._M_const_cast__c();
    if (($t80 = ($t79 = this._M_end(), $t79), (__pos._M_node === $t80 || (__pos._M_node && $t80 && __pos._M_node.a === $t80.a && __pos._M_node.i === $t80.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t81 = this._M_rightmost(), $t82 = ($t81 ? $t81.a[$t81.i] : null), $t82 && $t82.a !== undefined ? {a: $t82.a, i: $t82.i} : $t82)), __k))) {
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
          if (($t84 = (($t83 = this._M_leftmost(), $t83) ? (($t83 = this._M_leftmost(), $t83)).a[(($t83 = this._M_leftmost(), $t83)).i] : null), (__pos._M_node === $t84 || (__pos._M_node && $t84 && __pos._M_node.a === $t84.a && __pos._M_node.i === $t84.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t86 = (($t85 = __before.op_dec(), $t85.a[$t85.i]))._M_node, $t86 ? {a: $t86.a, i: $t86.i} : null)), __k)) {
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
            if (($t88 = (($t87 = this._M_rightmost(), $t87) ? (($t87 = this._M_rightmost(), $t87)).a[(($t87 = this._M_rightmost(), $t87)).i] : null), (__pos._M_node === $t88 || (__pos._M_node && $t88 && __pos._M_node.a === $t88.a && __pos._M_node.i === $t88.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t90 = (($t89 = __after.op_inc(), $t89.a[$t89.i]))._M_node, $t90 ? {a: $t90.a, i: $t90.i} : null)))) {
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
  begin() {
    return new std_Rb_tree_iterator_std_pair_int_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_int_int((({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null));
  }
  size__c() {
    return this._M_impl._M_node_count;
  }
  _M_insert_unique(__first, __last) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this._M_insert_unique___rv(new std_Rb_tree_const_iterator_std_pair_int_int({a: [this.end()], i: 0}), __first);
    }
  }
  _M_insert_unique___rv(__position, __v) {
    let $t91;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_int_int({a: [__position], i: 0}), (($t91 = new std_Select1st_std_pair_int_int(), $t91)).op_call__c(__v));
    if (__res.second) {
      return this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_std_pair_int_int(__v));
    }
    return new std_Rb_tree_iterator_std_pair_int_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t92, $t93, $t94, $t95;
    let __insert_left = (((__x !== null) || ($t93 = ($t92 = this._M_end(), $t92), (__p === $t93 || (__p && $t93 && __p.a === $t93.a && __p.i === $t93.i)))) || this._M_impl._M_key_compare.op_call__c((($t94 = new std_Select1st_std_pair_int_int(), $t94)).op_call__c(__v), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t95 = this._M_create_node__rv(std_forward_1_std_pair_int_int(__v)), $t95 ? {a: $t95.a, i: $t95.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t96;
    let __tmp = ($t96 = this._M_get_node(), $t96 ? {a: $t96.a, i: $t96.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_pair_int_int(__args_0));
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
    let $t97, $t98;
    this._M_t = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t97 = ({a: $a[0], i: 0}), $t97 ? {a: $t97.a, i: $t97.i} : null), ($t98 = ({a: $a[0], i: ($a[0]).length}), $t98 ? {a: $t98.a, i: $t98.i} : null));
  }
  __dtor() {
  }
  begin() {
    return this._M_t.begin();
  }
  end() {
    return this._M_t.end();
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
class std_remove_reference_std_allocator_int {
  __init_std_remove_reference_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
  __init_std_allocator_int_rebind_std_Rb_tree_node_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_Rb_tree_node_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t99;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t99 = operatornew__unsigned_long_long((__n * 32)), $t99 ? {a: $t99.a, i: $t99.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [] : []));
    this.__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int)) {
      this._M_key_compare = new std_less_int($a[0]);
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_key_compare = new std_less_int();
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else { throw new Error("no matching constructor"); }
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
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1($a[0], {a: [new std_allocator_std_Rb_tree_node_int(($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1]))], i: 0});
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t100;
    return ($t100 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t100 ? {a: $t100.a, i: $t100.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
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
    let $t101, $t102;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t101 = new std_Identity_int(), $t101)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t102 = new std_Identity_int(), $t102)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t103, $t104, $t105;
    let __x = ($t103 = this._M_begin(), $t103 ? {a: $t103.a, i: $t103.i} : null);
    let __y = ($t104 = this._M_end(), $t104 ? {a: $t104.a, i: $t104.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t105 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t105 ? {a: $t105.a, i: $t105.i} : null);
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
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t106, $t107, $t108, $t109, $t110, $t111, $t112, $t113, $t114, $t115, $t116, $t117;
    let __pos = __position._M_const_cast__c();
    if (($t107 = ($t106 = this._M_end(), $t106), (__pos._M_node === $t107 || (__pos._M_node && $t107 && __pos._M_node.a === $t107.a && __pos._M_node.i === $t107.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t108 = this._M_rightmost(), $t109 = ($t108 ? $t108.a[$t108.i] : null), $t109 && $t109.a !== undefined ? {a: $t109.a, i: $t109.i} : $t109)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
          if (($t111 = (($t110 = this._M_leftmost(), $t110) ? (($t110 = this._M_leftmost(), $t110)).a[(($t110 = this._M_leftmost(), $t110)).i] : null), (__pos._M_node === $t111 || (__pos._M_node && $t111 && __pos._M_node.a === $t111.a && __pos._M_node.i === $t111.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t113 = (($t112 = __before.op_dec(), $t112.a[$t112.i]))._M_node, $t113 ? {a: $t113.a, i: $t113.i} : null)), __k)) {
               {
                if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__before._M_node ? {a: __before._M_node.a, i: __before._M_node.i} : null)) === null)) {
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
        if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
            if (($t115 = (($t114 = this._M_rightmost(), $t114) ? (($t114 = this._M_rightmost(), $t114)).a[(($t114 = this._M_rightmost(), $t114)).i] : null), (__pos._M_node === $t115 || (__pos._M_node && $t115 && __pos._M_node.a === $t115.a && __pos._M_node.i === $t115.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t117 = (($t116 = __after.op_inc(), $t116.a[$t116.i]))._M_node, $t117 ? {a: $t117.a, i: $t117.i} : null)))) {
                 {
                  if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)) === null)) {
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
  begin() {
    return new std_Rb_tree_iterator_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_int((({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null));
  }
  size__c() {
    return this._M_impl._M_node_count;
  }
  _M_insert_unique(__first, __last) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this._M_insert_unique___rv(new std_Rb_tree_const_iterator_int({a: [this.end()], i: 0}), __first);
    }
  }
  _M_insert_unique___rv(__position, __v) {
    let $t118;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_int({a: [__position], i: 0}), (($t118 = new std_Identity_int(), $t118)).op_call__c(__v));
    if (__res.second) {
      return this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_int(__v));
    }
    return new std_Rb_tree_iterator_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t119, $t120, $t121, $t122;
    let __insert_left = (((__x !== null) || ($t120 = ($t119 = this._M_end(), $t119), (__p === $t120 || (__p && $t120 && __p.a === $t120.a && __p.i === $t120.i)))) || this._M_impl._M_key_compare.op_call__c((($t121 = new std_Identity_int(), $t121)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t122 = this._M_create_node__rv(std_forward_1_int(__v)), $t122 ? {a: $t122.a, i: $t122.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t123;
    let __tmp = ($t123 = this._M_get_node(), $t123 ? {a: $t123.a, i: $t123.i} : null);
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
    let $t124, $t125;
    this._M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t124 = ({a: $a[0], i: 0}), $t124 ? {a: $t124.a, i: $t124.i} : null), ($t125 = ({a: $a[0], i: ($a[0]).length}), $t125 ? {a: $t125.a, i: $t125.i} : null));
  }
  __dtor() {
  }
  begin__c() {
    return new std_Rb_tree_const_iterator_int({a: [this._M_t.begin()], i: 0});
  }
  end__c() {
    return new std_Rb_tree_const_iterator_int({a: [this._M_t.end()], i: 0});
  }
}
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
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
    let $t126, $t127, $t128, $t129, $t130, $t131, $t132, $t133;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t126 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[0]), $t127 = ($t126 ? $t126.a[$t126.i] : null), $t127 && $t127.a !== undefined ? {a: $t127.a, i: $t127.i} : $t127);
      this.second = ($t128 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[1]), $t129 = ($t128 ? $t128.a[$t128.i] : null), $t129 && $t129.a !== undefined ? {a: $t129.a, i: $t129.i} : $t129);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t130 = std_forward_1_std_Rb_tree_node_int_P($a[0]), $t131 = ($t130 ? $t130.a[$t130.i] : null), $t131 && $t131.a !== undefined ? {a: $t131.a, i: $t131.i} : $t131);
      this.second = ($t132 = std_forward_1_std_Rb_tree_node_int_P($a[1]), $t133 = ($t132 ? $t132.a[$t132.i] : null), $t133 && $t133.a !== undefined ? {a: $t133.a, i: $t133.i} : $t133);
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
class std_remove_reference_std_pair_int_int {
  __init_std_remove_reference_std_pair_int_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
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
class std_enable_if_value0_void {
  __init_std_enable_if_value0_void(...$a) { }
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
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) { }
  __dtor() {
  }
  static construct__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_int_int(__args_0));
  }
  static _S_construct__rv(__a, __p, __args_0) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_int_int(__args_0));
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
class std_iterator_traits_int_P {
  __init_std_iterator_traits_int_P(...$a) { }
  __dtor() {
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
    let $t134;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t134 = (($a[0]).a[($a[0]).i]).base__c(), $t134 ? {a: $t134.a, i: $t134.i} : null);
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
    let $t135;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_pair_int_int_P)) {
      this._M_current = ($t135 = (($a[0]).a[($a[0]).i]).base__c(), $t135 ? {a: $t135.a, i: $t135.i} : null);
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
class std_iterator_traits_std_vector_int_std_allocator_int_P {
  __init_std_iterator_traits_std_vector_int_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_move_if_noexcept_cond_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_move_if_noexcept_cond_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_void_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_vector_int_std_allocator_int {
  __init_std_remove_cv_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int {
  __init_std_remove_volatile_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int {
  __init_std_remove_const_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_void_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0 extends std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_std_vector_int_std_allocator_int extends std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_rvalue_reference_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_safe_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_impl_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_is_rvalue_reference_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_not_std_is_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_vector_int_std_allocator_int_RR {
  __init_std_remove_cv_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int_RR {
  __init_std_remove_volatile_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int_RR {
  __init_std_remove_const_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_void_helper_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR extends std_not_std_is_reference_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_RR_std_not_std_is_void_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_RR_std_not_std_is_reference_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_RR_std_not_std_is_reference_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0 {
  __init_std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_vector_int_std_allocator_int_RR extends std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_add_rvalue_reference_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR extends std_is_function_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_function_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_RR_std_is_function_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_lvalue_reference_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_vector_int_std_allocator_int_RR {
  __init_std_remove_reference_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_base_of_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_is_same_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_RR_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_destructible_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_array_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_extent_std_vector_int_std_allocator_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0 extends std_is_array_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_vector_int_std_allocator_int_std_not_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_vector_int_std_allocator_int_value0_std_is_array_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_not_std_extent_std_vector_int_std_allocator_int_value0_std_is_array_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_is_function_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_function_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_scalar_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_arithmetic_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_integral_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_integral_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_floating_point_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_floating_point_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int extends std_is_floating_point_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_integral_std_vector_int_std_allocator_int_std_is_floating_point_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_enum_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_pointer_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_pointer_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_member_pointer_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_is_nullptr_t_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int extends std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_vector_int_std_allocator_int_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_vector_int_std_allocator_int_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_pointer_std_vector_int_std_allocator_int_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_vector_int_std_allocator_int_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_enum_std_vector_int_std_allocator_int_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_vector_int_std_allocator_int_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_arithmetic_std_vector_int_std_allocator_int_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int extends std_is_scalar_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_reference_std_vector_int_std_allocator_int_std_is_scalar_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_vector_int_std_allocator_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_vector_int_std_allocator_int {
  __init_std_remove_all_extents_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_vector_int_std_allocator_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_destructible_impl_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R extends std_is_lvalue_reference_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_vector_int_std_allocator_int_R {
  __init_std_remove_cv_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int_R {
  __init_std_remove_volatile_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int_R {
  __init_std_remove_const_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_void_helper_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R extends std_not_std_is_reference_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_R_std_not_std_is_void_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_R_std_not_std_is_reference_std_vector_int_std_allocator_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_vector_int_std_allocator_int_R_std_not_std_is_reference_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_vector_int_std_allocator_int_R extends std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_destructible_std_vector_int_std_allocator_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_destructible_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_and_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0 extends std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_std_vector_int_std_allocator_int extends std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_safe_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_impl_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R extends std_is_function_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_function_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R {
  __init_std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_R_std_is_function_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_rvalue_reference_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_R_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_R {
  __init_std_conditional_value1_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_vector_int_std_allocator_int_R {
  __init_std_remove_reference_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_R_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_destructible_std_vector_int_std_allocator_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_destructible_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int extends std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int_std_is_copy_constructible_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_std_vector_int_std_allocator_int_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int {
  __init_std_conditional_value0_std_is_copy_constructible_std_vector_int_std_allocator_int_std_not_std_is_nothrow_move_constructible_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_std_vector_int_std_allocator_int_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) {
    let $t136;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_vector_int_std_allocator_int_P)) {
      this._M_current = ($t136 = (($a[0]).a[($a[0]).i]).base__c(), $t136 ? {a: $t136.a, i: $t136.i} : null);
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
    return std_move_std_vector_int_std_allocator_int(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P {
  __init_std_conditional_value0_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) { }
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
class std_declval_protector_std_vector_int_std_allocator_int_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_declval_protector_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_vector_int_std_allocator_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_declval_protector_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t137, $t138;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t137 = (($a[0]).a[($a[0]).i]).base__c(), $t138 = ($t137 ? $t137.a[$t137.i] : null), $t138 && $t138.a !== undefined ? {a: $t138.a, i: $t138.i} : $t138);
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
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function std_swap_int_P(__a, __b) {
  let $t139, $t140, $t141, $t142, $t143, $t144;
  let __tmp = {v: ($t139 = std_move_int_P(__a), $t140 = ($t139 ? $t139.a[$t139.i] : null), $t140 && $t140.a !== undefined ? {a: $t140.a, i: $t140.i} : $t140)};
  __a.a[__a.i] = ($t141 = std_move_int_P(__b), $t142 = ($t141 ? $t141.a[$t141.i] : null), $t142 && $t142.a !== undefined ? {a: $t142.a, i: $t142.i} : $t142);
  __b.a[__b.i] = ($t143 = std_move_int_P({a: __tmp, i: "v"}), $t144 = ($t143 ? $t143.a[$t143.i] : null), $t144 && $t144.a !== undefined ? {a: $t144.a, i: $t144.i} : $t144);
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(__os, __n) {
  (__os.a[__os.i])._M_put(2, __n, null, 0);
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
  let $t145, $t146, $t147, $t148;
  let s = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [104, 105, 0], i: 0}, {a: [new std_allocator_char()], i: 0});
  let t = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [121, 111, 0], i: 0}, {a: [new std_allocator_char()], i: 0});
  let buf = [97, 98, 99, 0];
  let u = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: buf, i: 0}, {a: [new std_allocator_char()], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: [std_cout], i: 0}, ((s.size__c() + t.size__c()) + u.size__c())), {a: [std_endl], i: 0});
  let m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int([new std_pair_int_int({a: [1], i: 0}, {a: [10], i: 0}), new std_pair_int_int({a: [2], i: 0}, {a: [20], i: 0})], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_std_pair_int_int()], i: 0});
  for (let $b0 = new std_Rb_tree_iterator_std_pair_int_int({a: [m.begin()], i: 0}), $e0 = new std_Rb_tree_iterator_std_pair_int_int({a: [m.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, (kv.a[kv.i]).first), {a: [58, 0], i: 0}), (kv.a[kv.i]).second), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: [std_cout], i: 0}, {a: [std_endl], i: 0});
  let v = {v: new std_vector_int_std_allocator_int([1, 2, 3], {a: [new std_allocator_int()], i: 0})};
  let w = new std_vector_int_std_allocator_int(std_move_std_vector_int_std_allocator_int({a: v, i: "v"}));
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: [std_cout], i: 0}, w.size__c()), {a: [32, 0], i: 0}), ($t145 = w.op_index(2), $t145.a[$t145.i])), {a: [std_endl], i: 0});
  let st = new std_set_int_std_less_int_std_allocator_int([3, 1, 2], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  for (let $b1 = new std_Rb_tree_const_iterator_int({a: [st.begin__c()], i: 0}), $e1 = new std_Rb_tree_const_iterator_int({a: [st.end__c()], i: 0}); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, x);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: [std_cout], i: 0}, {a: [std_endl], i: 0});
  let a = {v: 1};
  let b = {v: 2};
  let p = {v: (({a: a, i: "v"}) ? {a: ({a: a, i: "v"}).a, i: ({a: a, i: "v"}).i} : null)};
  let q = {v: (({a: b, i: "v"}) ? {a: ({a: b, i: "v"}).a, i: ({a: b, i: "v"}).i} : null)};
  std_swap_int_P({a: p, i: "v"}, {a: q, i: "v"});
  let r = {a: p, i: "v"};
  r.a[r.i] = (({a: a, i: "v"}) ? {a: ({a: a, i: "v"}).a, i: ({a: a, i: "v"}).i} : null);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, p.v.a[p.v.i]), {a: [32, 0], i: 0}), q.v.a[q.v.i]), {a: [32, 0], i: 0}), (r.a[r.i]).a[(r.a[r.i]).i]), {a: [std_endl], i: 0});
  let vp = new std_vector_std_pair_int_int_std_allocator_std_pair_int_int([new std_pair_int_int({a: [1], i: 0}, {a: [2], i: 0}), new std_pair_int_int({a: [3], i: 0}, {a: [4], i: 0})], {a: [new std_allocator_std_pair_int_int()], i: 0});
  for (let $b2 = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [vp.begin()], i: 0}), $e2 = new gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [vp.end()], i: 0}); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let pr = $b2.op_mul__c();
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: [std_cout], i: 0}, (pr.a[pr.i]).first), {a: [45, 0], i: 0}), (pr.a[pr.i]).second), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: [std_cout], i: 0}, {a: [std_endl], i: 0});
  let vv = new std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int([new std_vector_int_std_allocator_int([1, 2], {a: [new std_allocator_int()], i: 0}), new std_vector_int_std_allocator_int([3], {a: [new std_allocator_int()], i: 0})], {a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long_long({a: [std_cout], i: 0}, vv.size__c()), {a: [32, 0], i: 0}), (($t146 = vv.op_index(0), $t146.a[$t146.i])).size__c()), {a: [32, 0], i: 0}), ($t147 = (($t148 = vv.op_index(1), $t148.a[$t148.i])).op_index(0), $t147.a[$t147.i])), {a: [std_endl], i: 0});
  return 0;
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
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
function std_declval_std_pair_int_int() {
  return std_declval_protector_std_pair_int_int.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_R() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_R.__delegate();
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
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R.__delegate();
}
function std_declval_std_pair_int_int_RR() {
  return std_declval_protector_std_pair_int_int_RR.__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R.__delegate();
}
function std_declval_std_vector_int_std_allocator_int_RR() {
  return std_declval_protector_std_vector_int_std_allocator_int_RR.__delegate();
}
function std_declval_std_vector_int_std_allocator_int_R() {
  return std_declval_protector_std_vector_int_std_allocator_int_R.__delegate();
}
function std_move_std_vector_int_std_allocator_int(__t) {
  return __t;
}
function std_move_int_P(__t) {
  return __t;
}
function std_move_std_allocator_int(__t) {
  return __t;
}
function std_move_int(__t) {
  return __t;
}
function std_move_std_pair_int_int(__t) {
  return __t;
}
function gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(__lhs, __rhs) {
  let $t149, $t150, $t151, $t152;
  return ($t151 = (($t149 = (__lhs.a[__lhs.i]).base__c(), $t149) ? (($t149 = (__lhs.a[__lhs.i]).base__c(), $t149)).a[(($t149 = (__lhs.a[__lhs.i]).base__c(), $t149)).i] : null), $t152 = (($t150 = (__rhs.a[__rhs.i]).base__c(), $t150) ? (($t150 = (__rhs.a[__rhs.i]).base__c(), $t150)).a[(($t150 = (__rhs.a[__rhs.i]).base__c(), $t150)).i] : null), (!($t151 === $t152 || ($t151 && $t152 && $t151.a === $t152.a && $t151.i === $t152.i))));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t153, $t154, $t155, $t156, $t157, $t158;
  return ($t157 = (($t155 = (__lhs.a[__lhs.i]).base__c(), $t155) ? (($t155 = (__lhs.a[__lhs.i]).base__c(), $t155)).a[(($t155 = (__lhs.a[__lhs.i]).base__c(), $t155)).i] : null), $t158 = (($t156 = (__rhs.a[__rhs.i]).base__c(), $t156) ? (($t156 = (__rhs.a[__rhs.i]).base__c(), $t156)).a[(($t156 = (__rhs.a[__rhs.i]).base__c(), $t156)).i] : null), (!($t157 === $t158 || ($t157 && $t158 && $t157.a === $t158.a && $t157.i === $t158.i))));
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_1030(__x, __y)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P(__x, __y) {
  return (!(std_operator_3_std_pair_int_int_P_std_pair_int_int_P_1030(__x, __y)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P(__x, __y) {
  return (!(std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030(__x, __y)));
}
function std_forward_1_std_pair_int_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_vector_int_std_allocator_int(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_std_pair_int_int_P(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_int_P(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t159;
  return ($t159 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t159 ? {a: $t159.a, i: $t159.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t160;
  return ($t160 = std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t160 ? {a: $t160.a, i: $t160.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t161;
  return ($t161 = std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t161 ? {a: $t161.a, i: $t161.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t162;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t162 = std_addressof_int(__first), $t162 ? {a: $t162.a, i: $t162.i} : null));
  }
}
function std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __alloc) {
  let $t163;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy(__alloc, ($t163 = std_addressof_std_pair_int_int(__first), $t163 ? {a: $t163.a, i: $t163.i} : null));
  }
}
function std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __alloc) {
  let $t164;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy(__alloc, ($t164 = std_addressof_std_vector_int_std_allocator_int(__first), $t164 ? {a: $t164.a, i: $t164.i} : null));
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
function std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P(__i) {
  return new std_move_iterator_std_pair_int_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(__i) {
  return new std_move_iterator_std_vector_int_std_allocator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t165;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t165 = std_addressof_int(__cur), $t165 ? {a: $t165.a, i: $t165.i} : null), __first.op_mul__c());
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
  let $t166;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_pair_int_int_P_std_pair_int_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct(__alloc, ($t166 = std_addressof_std_pair_int_int(__cur), $t166 ? {a: $t166.a, i: $t166.i} : null), __first.op_mul__c());
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
function std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t167;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct(__alloc, ($t167 = std_addressof_std_vector_int_std_allocator_int(__cur), $t167 ? {a: $t167.a, i: $t167.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t168;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t168 = std_addressof_int(__cur), $t168 ? {a: $t168.a, i: $t168.i} : null), __first.op_mul__c());
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
function std_addressof_std_pair_int_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_std_vector_int_std_allocator_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_operator_3_int_P_int_P_1030(__x, __y) {
  let $t169, $t170, $t171, $t172;
  return ($t171 = ($t169 = (__x.a[__x.i]).base__c(), $t169), $t172 = ($t170 = (__y.a[__y.i]).base__c(), $t170), ($t171 === $t172 || ($t171 && $t172 && $t171.a === $t172.a && $t171.i === $t172.i)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P_1030(__x, __y) {
  let $t173, $t174, $t175, $t176;
  return ($t175 = ($t173 = (__x.a[__x.i]).base__c(), $t173), $t176 = ($t174 = (__y.a[__y.i]).base__c(), $t174), ($t175 === $t176 || ($t175 && $t176 && $t175.a === $t176.a && $t175.i === $t176.i)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030(__x, __y) {
  let $t177, $t178, $t179, $t180;
  return ($t179 = ($t177 = (__x.a[__x.i]).base__c(), $t177), $t180 = ($t178 = (__y.a[__y.i]).base__c(), $t178), ($t179 === $t180 || ($t179 && $t180 && $t179.a === $t180.a && $t179.i === $t180.i)));
}
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
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
let std_cout = new std_basic_ostream_char_std_char_traits_char(1);
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
main();
