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
  static assign(...$a) {
    let $t0;
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      ($a[0]).a[($a[0]).i] = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return ($t0 = (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[0]), $a[2], $a[1]), $t0 ? {a: $t0.a, i: $t0.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static compare(__s1, __s2, __n) {
    return (($x, $y, $n) => { for (let $k = 0; $k < $n; $k++) { const $d = ($x.a[$x.i + $k] || 0) - ($y.a[$y.i + $k] || 0); if ($d) return $d; } return 0; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n);
  }
  static length(__s) {
    return (($s) => { let $i = $s.i; while ($s.a[$i]) $i++; return $i - $s.i; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s));
  }
  static copy(__s1, __s2, __n) {
    let $t1;
    return ($t1 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t1 ? {a: $t1.a, i: $t1.i} : null);
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
    let $t2;
    if ((__n > gnu_cxx_new_allocator_char.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t2 = operatornew__unsigned_long(((Math.imul(__n, 1)) >>> 0)), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (1))) >>> 0);
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
  _M_is_leaked__c() {
    return (this._M_refcount < 0);
  }
  _M_set_sharable() {
    this._M_refcount = 0;
  }
  _M_set_length_and_sharable(__n) {
    let $t3;
     {
      std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_sharable.call(this);
      this._M_length = __n;
      std_char_traits_char.assign({a: (($t3 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(this), $t3)).a, i: (($t3 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(this), $t3)).i + (__n)}, {a: std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t4, $t5;
    return ($t5 = ($t4 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t4 ? $t4.a : null), i: ($t4 ? $t4.i : 0) + (1)})), $t5 ? {a: $t5.a, i: $t5.i} : null);
  }
  _M_grab(__alloc1, __alloc2) {
    let $t6;
    return ($t6 = (((!(this._M_is_leaked__c())) && std_operator_5_char_char(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, ((0) >>> 0))), $t6 ? {a: $t6.a, i: $t6.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t7, $t8;
    if ((__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size)) {
      std_throw_length_error({a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], i: 0});
    }
    let __pagesize = ((4096) >>> 0);
    let __malloc_header_size = ((Math.imul(((4) >>> 0), 4)) >>> 0);
    if (((__capacity > __old_capacity) && (__capacity < ((Math.imul(((2) >>> 0), __old_capacity)) >>> 0)))) {
      __capacity = ((Math.imul(((2) >>> 0), __old_capacity)) >>> 0);
    }
    let __size = (((((Math.imul((((__capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0)) + (12)) >>> 0);
    let __adj_size = (((__size) + (__malloc_header_size)) >>> 0);
    if (((__adj_size > __pagesize) && (__capacity > __old_capacity))) {
       {
        let __extra = (((__pagesize) - ((((__adj_size) % (__pagesize)) >>> 0))) >>> 0);
        __capacity = (((((__capacity) + (((Math.trunc((__extra) / (1))) >>> 0))) >>> 0)) >>> 0);
        if ((__capacity > std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size)) {
          __capacity = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_max_size;
        }
        __size = (((((Math.imul((((__capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0)) + (12)) >>> 0);
      }
    }
    let __place = ($t7 = gnu_cxx_new_allocator_char.prototype.allocate.call(__alloc.a[__alloc.i], __size, {a: [0], i: 0}), $t7 ? {a: $t7.a, i: $t7.i} : null);
    let __p = ($t8 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t8 ? {a: $t8.a, i: $t8.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_sharable.call(__p.a[__p.i]);
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_dispose(__a) {
     {
      if ((gnu_cxx_exchange_and_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), ((-(1)) | 0)) <= 0)) {
         {
          this._M_destroy(__a);
        }
      }
    }
  }
  _M_destroy(__a) {
    let __size = (((12) + (((Math.imul((((this._M_capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0))) >>> 0);
    gnu_cxx_new_allocator_char.prototype.deallocate.call(__a.a[__a.i], {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
  }
  _M_refcopy() {
    let $t9;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t9 = this._M_refdata(), $t9 ? {a: $t9.a, i: $t9.i} : null);
  }
  _M_clone(__alloc, __res = ((0) >>> 0)) {
    let $t10, $t11, $t12, $t13;
    let __requested_cap = (((this._M_length) + (__res)) >>> 0);
    let __r = ($t10 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t10 ? {a: $t10.a, i: $t10.i} : null);
    if (this._M_length) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t11 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t11 ? {a: $t11.a, i: $t11.i} : null), ($t12 = this._M_refdata(), $t12 ? {a: $t12.a, i: $t12.i} : null), this._M_length);
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(__r.a[__r.i], this._M_length);
    return ($t13 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
  static _S_max_size = 1073741820;
  static _S_terminal = 0;
  static _S_empty_rep_storage = null;
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  _M_p;
  constructor(...$a) {
    super(...($a.length >= 2 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char) ? [$a[1]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider) ? [$a[0]] : []));
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char)) {
      this._M_p = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider)) {
      this._M_p = (((($a[0]).a[($a[0]).i])._M_p) ? {a: ((($a[0]).a[($a[0]).i])._M_p).a, i: ((($a[0]).a[($a[0]).i])._M_p).i} : null);
    }
    else { throw new Error("no matching constructor"); }
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
    let $t14, $t15, $t16, $t17, $t18, $t19;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t15 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_grab.call(($t14 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype._M_rep__c.call(($a[0]).a[($a[0]).i]), $t14.a[$t14.i]), {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0}, {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0}), $t15 ? {a: $t15.a, i: $t15.i} : null), {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0});
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t17 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t16 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t16 ? {a: $t16.a, i: $t16.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t17 ? {a: $t17.a, i: $t17.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider({a: ($a[0]).a[($a[0]).i], i: "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char"});
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
      std_basic_string_char_std_char_traits_char_std_allocator_char.prototype._M_data.call(($a[0]).a[($a[0]).i], ($t18 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [this.get_allocator__c()], i: 0}), $t18 ? {a: $t18.a, i: $t18.i} : null));
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t19 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [new std_allocator_char()], i: 0}), $t19 ? {a: $t19.a, i: $t19.i} : null), {a: [new std_allocator_char()], i: 0});
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    let $t20;
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_dispose.call(($t20 = this._M_rep__c(), $t20.a[$t20.i]), {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(this)], i: 0});
  }
  _M_data__c() {
    return (this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p ? {a: this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p.a, i: this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p.i} : null);
  }
  _M_data(__p) {
    let $t21;
    return ($t21 = this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t21 ? {a: $t21.a, i: $t21.i} : null);
  }
  _M_rep__c() {
    let $t22, $t23;
    return ($t23 = {a: (($t22 = this._M_data__c(), $t22)).a, i: (($t22 = this._M_data__c(), $t22)).i + (((-(1)) | 0))}, $t23 ? {a: $t23.a, i: $t23.i} : null);
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === ((1) >>> 0))) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  static _M_assign(__d, __n, __c) {
    __c = {v: __c};
    if ((__n === ((1) >>> 0))) {
      std_char_traits_char.assign(__d, {a: __c, i: "v"});
    }
    else {
      std_char_traits_char.assign((__d ? {a: __d.a, i: __d.i} : null), __n, __c.v);
    }
  }
  static _S_compare(__n1, __n2) {
    let __d = (((((__n1) - (__n2)) >>> 0)) | 0);
    if ((__d > gnu_cxx_numeric_traits_integer_int.__max)) {
      return gnu_cxx_numeric_traits_integer_int.__max;
    }
    else {
      if ((__d < gnu_cxx_numeric_traits_integer_int.__min)) {
        return gnu_cxx_numeric_traits_integer_int.__min;
      }
      else {
        return __d;
      }
    }
  }
  size__c() {
    let $t24;
    return (($t24 = this._M_rep__c(), $t24.a[$t24.i]))._M_length;
  }
  static _S_construct(__n, __c, __a) {
    let $t25, $t26, $t27;
    let __r = ($t25 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__n, ((0) >>> 0), __a), $t25 ? {a: $t25.a, i: $t25.i} : null);
    if (__n) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_assign(($t26 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t26 ? {a: $t26.a, i: $t26.i} : null), __n, __c);
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(__r.a[__r.i], __n);
    return ($t27 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t27 ? {a: $t27.a, i: $t27.i} : null);
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P(__beg, __end, __a) {
    let $t28;
    return ($t28 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_false_type()), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P(__beg, __end, __a, $p3) {
    let $t29, $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37;
    let __buf = new Array(128).fill(0);
    let __len = ((0) >>> 0);
    while (((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
       {
        __buf[($t29 = __len, __len = (($t29 + 1) >>> 0), $t29)] = __beg.a[__beg.i];
        ++__beg.i;
      }
    }
    let __r = ($t30 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, ((0) >>> 0), __a), $t30 ? {a: $t30.a, i: $t30.i} : null);
    std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t31 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t31 ? {a: $t31.a, i: $t31.i} : null), {a: __buf, i: 0}, __len);
    if (true) {
       {
        while ((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i)))) {
           {
            if ((__len === (__r.a[__r.i])._M_capacity)) {
               {
                let __another = ($t32 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((((__len) + (((1) >>> 0))) >>> 0), __len, __a), $t32 ? {a: $t32.a, i: $t32.i} : null);
                std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t33 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__another.a[__another.i]), $t33 ? {a: $t33.a, i: $t33.i} : null), ($t34 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t34 ? {a: $t34.a, i: $t34.i} : null), __len);
                std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_destroy.call(__r.a[__r.i], __a);
                __r = (__another ? {a: __another.a, i: __another.i} : null);
              }
            }
            (($t35 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t35)).a[(($t35 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t35)).i + (($t36 = __len, __len = (($t36 + 1) >>> 0), $t36))] = __beg.a[__beg.i];
            ++__beg.i;
          }
        }
      }
    }
    if (false) {
       {
        std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_destroy.call(__r.a[__r.i], __a);
      }
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(__r.a[__r.i], __len);
    return ($t37 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t37 ? {a: $t37.a, i: $t37.i} : null);
  }
  data__c() {
    let $t38;
    return ($t38 = this._M_data__c(), $t38 ? {a: $t38.a, i: $t38.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char"});
  }
  compare__c(__str) {
    let $t39, $t40, $t41;
    let __size = {v: std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this)};
    let __osize = {v: std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(__str.a[__str.i])};
    let __len = ($t39 = std_min_unsigned_long({a: __size, i: "v"}, {a: __osize, i: "v"}), $t39.a[$t39.i]);
    let __r = std_char_traits_char.compare(($t40 = this._M_data__c(), $t40 ? {a: $t40.a, i: $t40.i} : null), ($t41 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.data__c.call(__str.a[__str.i]), $t41 ? {a: $t41.a, i: $t41.i} : null), __len);
    if ((!__r)) {
      __r = std_basic_string_char_std_char_traits_char_std_allocator_char._S_compare(__size.v, __osize.v);
    }
    return __r;
  }
  static _S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P(__beg, __end, __a, $p3) {
    let $t42;
    return ($t42 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t42 ? {a: $t42.a, i: $t42.i} : null);
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
class gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t43;
    if ((__n > gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t43 = operatornew__unsigned_long(((Math.imul(__n, 5)) >>> 0)), $t43 ? {a: $t43.a, i: $t43.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (5))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_destroy_std_basic_string_char_std_char_traits_char_std_allocator_char(__p) {
    std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(__p.a[__p.i]);
  }
}
class std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char extends gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char) ? [$a[0]] : []));
    this.__init_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl extends std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char) ? [$a[0]] : []));
    this.__init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
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
    std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  _M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char;
  constructor(...$a) {
    this.__init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char = new std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl($a[0]);
    this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char"};
  }
  _M_allocate(__n) {
    let $t44;
    return ($t44 = ((__n !== ((0) >>> 0)) ? gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.allocate.call(this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char, __n, {a: [0], i: 0}) : 0), $t44 ? {a: $t44.a, i: $t44.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.deallocate.call(this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char, (__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1])]);
    this.__init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t45, $t46;
    this._M_range_initialize__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_M_range_initialize_std_basic_string_char_std_char_traits_char_std_allocator_char_P(($t45 = ({a: $a[0], i: 0}), $t45 ? {a: $t45.a, i: $t45.i} : null), ($t46 = ({a: $a[0], i: ($a[0]).length}), $t46 ? {a: $t46.a, i: $t46.i} : null), new std_random_access_iterator_tag());
  }
  __dtor() {
    std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  size__c() {
    return ((((this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i : 0) - (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.a : null), i: (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t47;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t47 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t47.a[$t47.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_range_initialize__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_M_range_initialize_std_basic_string_char_std_char_traits_char_std_allocator_char_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_emplace_back_std_basic_string_char_std_char_traits_char_std_allocator_char__rv(__first);
    }
  }
  emplace_back__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_emplace_back_std_basic_string_char_std_char_traits_char_std_allocator_char__rv(__args_0) {
    if ((!(this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish === this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage || (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish && this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage && this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.a === this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage.a && this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i === this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char({a: this, i: "_M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char"}, (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i} : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
        ++this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_M_emplace_back_aux_std_basic_string_char_std_char_traits_char_std_allocator_char__rv(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
    }
  }
  _M_emplace_back_aux__std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_M_emplace_back_aux_std_basic_string_char_std_char_traits_char_std_allocator_char__rv(__args_0) {
    let $t48, $t49, $t50, $t51, $t52;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t48 = std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype._M_allocate.call(this, __len), $t48 ? {a: $t48.a, i: $t48.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char({a: this, i: "_M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char"}, ($t49 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t49 ? {a: $t49.a, i: $t49.i} : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
        __new_finish = null;
        __new_finish = ($t50 = std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i} : null), (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t50 ? {a: $t50.a, i: $t50.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.destroy__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_destroy_std_basic_string_char_std_char_traits_char_std_allocator_char({a: this, i: "_M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char"}, ($t51 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t51 ? {a: $t51.a, i: $t51.i} : null));
        }
        else {
          std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i} : null), (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? {a: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.a, i: this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i} : null), ((((this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage.i : 0) - (this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start ? this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start.i : 0))) >>> 0));
    this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl$std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char._M_end_of_storage = ($t52 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t52 ? {a: $t52.a, i: $t52.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char(__a, __p, __arg) {
    gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.construct__gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.max_size__c.call(__a.a[__a.i]);
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_destroy_std_basic_string_char_std_char_traits_char_std_allocator_char(__a, __p) {
    gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.destroy__gnu_cxx_new_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_destroy_std_basic_string_char_std_char_traits_char_std_allocator_char.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_rebind_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char {
  _M_array$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char;
  _M_len$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char;
  constructor(...$a) {
    this.__init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_array$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char = null;
    this._M_len$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char = 0;
  }
  __dtor() {
  }
  size__c() {
    return this._M_len$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char;
  }
  begin__c() {
    return (this._M_array$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char ? {a: this._M_array$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char.a, i: this._M_array$std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char.i} : null);
  }
  end__c() {
    let $t53, $t54, $t55;
    return ($t55 = ($t54 = ($t53 = this.begin__c(), $t53), ({a: ($t54 ? $t54.a : null), i: ($t54 ? $t54.i : 0) + (this.size__c())})), $t55 ? {a: $t55.a, i: $t55.i} : null);
  }
}
class std_initializer_list_char {
  _M_array$std_initializer_list_char;
  _M_len$std_initializer_list_char;
  constructor(...$a) {
    this.__init_std_initializer_list_char(...$a);
  }
  __init_std_initializer_list_char(...$a) {
    this._M_array$std_initializer_list_char = null;
    this._M_len$std_initializer_list_char = 0;
  }
  __dtor() {
  }
}
class std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  constructor(...$a) {
    this.__init_std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool(...$a);
  }
  __init_std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_less_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) ? [$a[0]] : []));
    this.__init_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return std_operator_5_char_std_char_traits_char_std_allocator_char(__x, __y);
  }
}
class std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_basic_string_char_std_char_traits_char_std_allocator_char($a[0]);
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
      this.second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
      this.second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_basic_string_char_std_char_traits_char_std_allocator_char();
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
      this.second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = 0;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_binary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool {
  __init_std_binary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a) { }
  __dtor() {
  }
}
class std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_array$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  _M_len$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    this._M_array$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = null;
    this._M_len$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = 0;
  }
  __dtor() {
  }
  size__c() {
    return this._M_len$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  }
  begin__c() {
    return (this._M_array$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_array$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_array$std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null);
  }
  end__c() {
    let $t56, $t57, $t58;
    return ($t58 = ($t57 = ($t56 = this.begin__c(), $t56), ({a: ($t57 ? $t57.a : null), i: ($t57 ? $t57.i : 0) + (this.size__c())})), $t58 ? {a: $t58.a, i: $t58.i} : null);
  }
}
class std_remove_cv_char_2 {
  __init_std_remove_cv_char_2(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_char_2 {
  __init_std_remove_volatile_char_2(...$a) { }
  __dtor() {
  }
}
class std_remove_const_char_2 {
  __init_std_remove_const_char_2(...$a) { }
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
class std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_char_2 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_char_2(...$a);
  }
  __init_std_is_void_char_2(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_char_2 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_char_2(...$a);
  }
  __init_std_is_void_helper_char_2(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_char_2_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_char_2_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_char_2_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_char_2_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_char_2_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    this.__init_std_is_convertible_helper_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_enable_if_value0_void {
  __init_std_enable_if_value0_void(...$a) { }
  __dtor() {
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
class std_and_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int extends std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a);
  }
  __init_std_and_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a) {
  }
  __dtor() {
    std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_int_int_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_convertible_int_int_std_is_convertible_char_2_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    this.__init_std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
  }
}
class std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_unary_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  op_call__c(__x) {
    return {a: __x.a[__x.i], i: "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_Rb_tree_node_base {
  _M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($a[0]));
    this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return {a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a[this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i], i: "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
  }
  op_inc() {
    let $t59;
    this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($t59 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), $t59 ? {a: $t59.a, i: $t59.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t60;
    this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($t60 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), $t60 ? {a: $t60.a, i: $t60.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) || (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) || (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i)));
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
class gnu_cxx_new_allocator_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_int(...$a);
  }
  __init_gnu_cxx_new_allocator_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t61;
    if ((__n > gnu_cxx_new_allocator_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t61 = operatornew__unsigned_long(((Math.imul(__n, 4)) >>> 0)), $t61 ? {a: $t61.a, i: $t61.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (4))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_int_construct_int_int__rv(__p, __args_0) {
    let $t62;
    (__p.a[__p.i] = ($t62 = std_forward_1_int(__args_0), $t62.a[$t62.i]));
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
class std_initializer_list_int {
  _M_array$std_initializer_list_int;
  _M_len$std_initializer_list_int;
  constructor(...$a) {
    this.__init_std_initializer_list_int(...$a);
  }
  __init_std_initializer_list_int(...$a) {
    this._M_array$std_initializer_list_int = null;
    this._M_len$std_initializer_list_int = 0;
  }
  __dtor() {
  }
  size__c() {
    return this._M_len$std_initializer_list_int;
  }
  begin__c() {
    return (this._M_array$std_initializer_list_int ? {a: this._M_array$std_initializer_list_int.a, i: this._M_array$std_initializer_list_int.i} : null);
  }
  end__c() {
    let $t63, $t64, $t65;
    return ($t65 = ($t64 = ($t63 = this.begin__c(), $t63), ({a: ($t64 ? $t64.a : null), i: ($t64 ? $t64.i : 0) + (this.size__c())})), $t65 ? {a: $t65.a, i: $t65.i} : null);
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
class std_allocator_int_rebind_int {
  __init_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  _M_value_field$std_Rb_tree_node_int;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_int(...$a);
  }
  __init_std_Rb_tree_node_int(...$a) {
    let $t66;
    this._M_value_field$std_Rb_tree_node_int = ($t66 = std_forward_1_int($a[0]), $t66.a[$t66.i]);
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_const_iterator_int {
  _M_node$std_Rb_tree_const_iterator_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node$std_Rb_tree_const_iterator_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_int)) {
      this._M_node$std_Rb_tree_const_iterator_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_int).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_int((this._M_node$std_Rb_tree_const_iterator_int ? {a: this._M_node$std_Rb_tree_const_iterator_int.a, i: this._M_node$std_Rb_tree_const_iterator_int.i} : null));
  }
  op_mul__c() {
    return {a: this._M_node$std_Rb_tree_const_iterator_int.a[this._M_node$std_Rb_tree_const_iterator_int.i], i: "_M_value_field$std_Rb_tree_node_int"};
  }
  op_inc() {
    let $t67;
    this._M_node$std_Rb_tree_const_iterator_int = ($t67 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_const_iterator_int ? {a: this._M_node$std_Rb_tree_const_iterator_int.a, i: this._M_node$std_Rb_tree_const_iterator_int.i} : null)), $t67 ? {a: $t67.a, i: $t67.i} : null);
    return {a: [this], i: 0};
  }
  op_ne__c(__x) {
    return (!(this._M_node$std_Rb_tree_const_iterator_int === ((__x.a[__x.i])._M_node$std_Rb_tree_const_iterator_int) || (this._M_node$std_Rb_tree_const_iterator_int && ((__x.a[__x.i])._M_node$std_Rb_tree_const_iterator_int) && this._M_node$std_Rb_tree_const_iterator_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_const_iterator_int).a && this._M_node$std_Rb_tree_const_iterator_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_const_iterator_int).i)));
  }
}
class std_Rb_tree_iterator_int {
  _M_node$std_Rb_tree_iterator_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_Rb_tree_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node$std_Rb_tree_iterator_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_int).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node$std_Rb_tree_iterator_int = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node$std_Rb_tree_iterator_int = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_inc() {
    let $t68;
    this._M_node$std_Rb_tree_iterator_int = ($t68 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_int ? {a: this._M_node$std_Rb_tree_iterator_int.a, i: this._M_node$std_Rb_tree_iterator_int.i} : null)), $t68 ? {a: $t68.a, i: $t68.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t69;
    this._M_node$std_Rb_tree_iterator_int = ($t69 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_int ? {a: this._M_node$std_Rb_tree_iterator_int.a, i: this._M_node$std_Rb_tree_iterator_int.i} : null)), $t69 ? {a: $t69.a, i: $t69.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node$std_Rb_tree_iterator_int === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_int) || (this._M_node$std_Rb_tree_iterator_int && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_int) && this._M_node$std_Rb_tree_iterator_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_int).a && this._M_node$std_Rb_tree_iterator_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_int).i));
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
  _M_impl$std_Vector_base_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_impl$std_Vector_base_int_std_allocator_int = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0]);
      this._M_impl$std_Vector_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_int_std_allocator_int";
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) {
      this._M_impl$std_Vector_base_int_std_allocator_int = new std_Vector_base_int_std_allocator_int_Vector_impl($a[1]);
      this._M_impl$std_Vector_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_int_std_allocator_int";
      this._M_create_storage($a[0]);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Vector_base_int_std_allocator_int)) {
      this._M_impl$std_Vector_base_int_std_allocator_int = new std_Vector_base_int_std_allocator_int_Vector_impl(std_move_std_allocator_int(std_Vector_base_int_std_allocator_int.prototype._M_get_Tp_allocator.call(($a[0]).a[($a[0]).i])));
      this._M_impl$std_Vector_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_int_std_allocator_int";
      std_Vector_base_int_std_allocator_int_Vector_impl.prototype._M_swap_data.call(this._M_impl$std_Vector_base_int_std_allocator_int, {a: ($a[0]).a[($a[0]).i], i: "_M_impl$std_Vector_base_int_std_allocator_int"});
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"};
  }
  _M_get_Tp_allocator__c() {
    return {a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"};
  }
  _M_allocate(__n) {
    let $t70;
    return ($t70 = ((__n !== ((0) >>> 0)) ? gnu_cxx_new_allocator_int.prototype.allocate.call(this._M_impl$std_Vector_base_int_std_allocator_int, __n, {a: [0], i: 0}) : 0), $t70 ? {a: $t70.a, i: $t70.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      gnu_cxx_new_allocator_int.prototype.deallocate.call(this._M_impl$std_Vector_base_int_std_allocator_int, (__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
  _M_create_storage(__n) {
    let $t71, $t72;
    this._M_impl$std_Vector_base_int_std_allocator_int._M_start = ($t71 = std_Vector_base_int_std_allocator_int.prototype._M_allocate.call(this, __n), $t71 ? {a: $t71.a, i: $t71.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_finish = (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage = ($t72 = ({a: (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a : null), i: (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0) + (__n)}), $t72 ? {a: $t72.a, i: $t72.i} : null);
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [std_vector_int_std_allocator_int.prototype.size__c.call(($a[0]).a[($a[0]).i]), {a: [gnu_cxx_alloc_traits_std_allocator_int._S_select_on_copy(std_Vector_base_int_std_allocator_int.prototype._M_get_Tp_allocator__c.call(($a[0]).a[($a[0]).i]))], i: 0}] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [std_move_std_vector_int_std_allocator_int($a[0])] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t73, $t74, $t75;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
      this._M_impl$std_Vector_base_int_std_allocator_int._M_finish = ($t73 = std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int(std_vector_int_std_allocator_int.prototype.begin__c.call(($a[0]).a[($a[0]).i]), std_vector_int_std_allocator_int.prototype.end__c.call(($a[0]).a[($a[0]).i]), (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), this._M_get_Tp_allocator()), $t73 ? {a: $t73.a, i: $t73.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(($t74 = ({a: $a[0], i: 0}), $t74 ? {a: $t74.a, i: $t74.i} : null), ($t75 = ({a: $a[0], i: ($a[0]).length}), $t75 ? {a: $t75.a, i: $t75.i} : null), new std_random_access_iterator_tag());
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Destroy_2_int_P_std_allocator_int((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), this._M_get_Tp_allocator());
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl$std_Vector_base_int_std_allocator_int, i: "_M_start"});
  }
  end__c() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl$std_Vector_base_int_std_allocator_int, i: "_M_finish"});
  }
  size__c() {
    return ((((this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i : 0) - (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a : null), i: (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t76;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t76 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t76.a[$t76.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_range_initialize__std_vector_int_std_allocator_int_M_range_initialize_int_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__first);
    }
  }
  emplace_back__std_vector_int_std_allocator_int_emplace_back_int__rv(__args_0) {
    if ((!(this._M_impl$std_Vector_base_int_std_allocator_int._M_finish === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage || (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish && this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.a && this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i === this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), std_forward_1_int(__args_0));
        ++this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(std_forward_1_int(__args_0));
    }
  }
  _M_emplace_back_aux__std_vector_int_std_allocator_int_M_emplace_back_aux_int__rv(__args_0) {
    let $t77, $t78, $t79, $t80, $t81;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t77 = std_Vector_base_int_std_allocator_int.prototype._M_allocate.call(this, __len), $t77 ? {a: $t77.a, i: $t77.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, ($t78 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t78 ? {a: $t78.a, i: $t78.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t79 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t79 ? {a: $t79.a, i: $t79.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int({a: this, i: "_M_impl$std_Vector_base_int_std_allocator_int"}, ($t80 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t80 ? {a: $t80.a, i: $t80.i} : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i} : null), ((((this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage ? this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage.i : 0) - (this._M_impl$std_Vector_base_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_int_std_allocator_int._M_start.i : 0))) >>> 0));
    this._M_impl$std_Vector_base_int_std_allocator_int._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl$std_Vector_base_int_std_allocator_int._M_end_of_storage = ($t81 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t81 ? {a: $t81.a, i: $t81.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__a, __p, __arg) {
    gnu_cxx_new_allocator_int.prototype.construct__gnu_cxx_new_allocator_int_construct_int_int__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return gnu_cxx_new_allocator_int.prototype.max_size__c.call(__a.a[__a.i]);
  }
  static _S_select_on_copy(__a) {
    return __a.a[__a.i];
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__a, __p) {
    gnu_cxx_new_allocator_int.prototype.destroy__gnu_cxx_new_allocator_int_destroy_int.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int_rebind_int(...$a) { }
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
    let $t82;
    if ((__n > gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t82 = operatornew__unsigned_long(((Math.imul(__n, 13)) >>> 0)), $t82 ? {a: $t82.a, i: $t82.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (13))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_vector_int_std_allocator_int(std_forward_1_std_vector_int_std_allocator_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_std_vector_int_std_allocator_int_destroy_std_vector_int_std_allocator_int(__p) {
    std_vector_int_std_allocator_int.prototype.__dtor.call(__p.a[__p.i]);
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
  _M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int = new std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl($a[0]);
    this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.ctj_a = this; this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.ctj_i = "_M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int"};
  }
  _M_allocate(__n) {
    let $t83;
    return ($t83 = ((__n !== ((0) >>> 0)) ? gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.allocate.call(this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int, __n, {a: [0], i: 0}) : 0), $t83 ? {a: $t83.a, i: $t83.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.deallocate.call(this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int, (__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int extends std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0}) : $a[1])]);
    this.__init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int(...$a) {
    let $t84, $t85;
    this._M_range_initialize__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_M_range_initialize_std_vector_int_std_allocator_int_P(($t84 = ({a: $a[0], i: 0}), $t84 ? {a: $t84.a, i: $t84.i} : null), ($t85 = ({a: $a[0], i: ($a[0]).length}), $t85 ? {a: $t85.a, i: $t85.i} : null), new std_random_access_iterator_tag());
  }
  __dtor() {
    std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
  size__c() {
    return ((((this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i : 0) - (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i : 0))) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.a : null), i: (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t86;
    __n = {v: __n};
    if (((((this.max_size__c()) - (this.size__c())) >>> 0) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (((this.size__c()) + (($t86 = std_max_unsigned_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t86.a[$t86.i]))) >>> 0);
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? ((this.max_size__c()) >>> 0) : ((__len) >>> 0));
  }
  _M_range_initialize__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_M_range_initialize_std_vector_int_std_allocator_int_P(__first, __last, $p2) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this.emplace_back__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_emplace_back_std_vector_int_std_allocator_int__rv(__first);
    }
  }
  emplace_back__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_emplace_back_std_vector_int_std_allocator_int__rv(__args_0) {
    if ((!(this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish === this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage || (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish && this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage && this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.a === this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage.a && this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i === this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int({a: this, i: "_M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int"}, (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        ++this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_M_emplace_back_aux_std_vector_int_std_allocator_int__rv(std_forward_1_std_vector_int_std_allocator_int(__args_0));
    }
  }
  _M_emplace_back_aux__std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_M_emplace_back_aux_std_vector_int_std_allocator_int__rv(__args_0) {
    let $t87, $t88, $t89, $t90, $t91;
    let __len = this._M_check_len__c(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t87 = std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.prototype._M_allocate.call(this, __len), $t87 ? {a: $t87.a, i: $t87.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int({a: this, i: "_M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int"}, ($t88 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t88 ? {a: $t88.a, i: $t88.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        __new_finish = null;
        __new_finish = ($t89 = std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t89 ? {a: $t89.a, i: $t89.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_destroy_std_vector_int_std_allocator_int({a: this, i: "_M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int"}, ($t90 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t90 ? {a: $t90.a, i: $t90.i} : null));
        }
        else {
          std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i} : null), (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? {a: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.a, i: this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i} : null), ((((this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage.i : 0) - (this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start ? this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start.i : 0))) >>> 0));
    this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl$std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int._M_end_of_storage = ($t91 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t91 ? {a: $t91.a, i: $t91.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
  static construct__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int(__a, __p, __arg) {
    gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.construct__gnu_cxx_new_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
  }
  static max_size(__a) {
    return gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.max_size__c.call(__a.a[__a.i]);
  }
  static destroy__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_destroy_std_vector_int_std_allocator_int(__a, __p) {
    gnu_cxx_new_allocator_std_vector_int_std_allocator_int.prototype.destroy__gnu_cxx_new_allocator_std_vector_int_std_allocator_int_destroy_std_vector_int_std_allocator_int.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
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
  _M_array$std_initializer_list_std_vector_int_std_allocator_int;
  _M_len$std_initializer_list_std_vector_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_initializer_list_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_initializer_list_std_vector_int_std_allocator_int(...$a) {
    this._M_array$std_initializer_list_std_vector_int_std_allocator_int = null;
    this._M_len$std_initializer_list_std_vector_int_std_allocator_int = 0;
  }
  __dtor() {
  }
  size__c() {
    return this._M_len$std_initializer_list_std_vector_int_std_allocator_int;
  }
  begin__c() {
    return (this._M_array$std_initializer_list_std_vector_int_std_allocator_int ? {a: this._M_array$std_initializer_list_std_vector_int_std_allocator_int.a, i: this._M_array$std_initializer_list_std_vector_int_std_allocator_int.i} : null);
  }
  end__c() {
    let $t92, $t93, $t94;
    return ($t94 = ($t93 = ($t92 = this.begin__c(), $t92), ({a: ($t93 ? $t93.a : null), i: ($t93 ? $t93.i : 0) + (this.size__c())})), $t94 ? {a: $t94.a, i: $t94.i} : null);
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool {
  first$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool;
  second$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a) {
    this.first$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
    this.first$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool.ctj_a = this; this.first$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool.ctj_i = "first$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool";
    this.second$std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool = false;
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
  first$std_pair_std_Rb_tree_iterator_int_bool;
  second$std_pair_std_Rb_tree_iterator_int_bool;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    this.first$std_pair_std_Rb_tree_iterator_int_bool = new std_Rb_tree_iterator_int();
    this.first$std_pair_std_Rb_tree_iterator_int_bool.ctj_a = this; this.first$std_pair_std_Rb_tree_iterator_int_bool.ctj_i = "first$std_pair_std_Rb_tree_iterator_int_bool";
    this.second$std_pair_std_Rb_tree_iterator_int_bool = false;
  }
  __dtor() {
  }
}
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t95;
    if ((__n > gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t95 = operatornew__unsigned_long(((Math.imul(__n, 25)) >>> 0)), $t95 ? {a: $t95.a, i: $t95.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (25))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? [] : []));
    this.__init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1;
  _M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1;
  _M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char($a[0]);
      this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
      this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_Rb_tree_node_base();
      this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
      this._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = ((0) >>> 0);
      this._M_initialize();
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char();
      this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
      this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_Rb_tree_node_base();
      this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
      this._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = ((0) >>> 0);
      this._M_initialize();
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_color = 0;
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_parent = null;
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_left = (({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).i} : null);
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_right = (({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).i} : null);
  }
}
class std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int))) {
      this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1($a[0], {a: [new std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($a[1] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[1]))], i: 0});
      this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
      this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
  }
  _M_get_node() {
    let $t96;
    return ($t96 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.allocate.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, ((1) >>> 0), {a: [0], i: 0}), $t96 ? {a: $t96.a, i: $t96.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.deallocate.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_leftmost() {
    return {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, i: "_M_left"};
  }
  _M_rightmost() {
    return {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, i: "_M_right"};
  }
  _M_begin() {
    return (this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_parent ? {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_parent.a, i: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t97, $t98;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t97 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t97)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t98 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t98)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t99, $t100, $t101;
    let __x = ($t99 = this._M_begin(), $t99 ? {a: $t99.a, i: $t99.i} : null);
    let __y = ($t100 = this._M_end(), $t100 ? {a: $t100.a, i: $t100.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t101 = (__comp ? std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t101 ? {a: $t101.a, i: $t101.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__y ? {a: __y.a, i: __y.i} : null));
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
    if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}, {a: [null], i: 0});
  }
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t102, $t103, $t104, $t105, $t106, $t107, $t108, $t109, $t110, $t111, $t112, $t113;
    let __pos = std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype._M_const_cast__c.call(__position);
    if (($t103 = ($t102 = this._M_end(), $t102), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t103 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t103 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t103.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t103.i)))) {
       {
        if (((this.size__c() > ((0) >>> 0)) && std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t104 = this._M_rightmost(), $t105 = ($t104 ? $t104.a[$t104.i] : null), $t105 && $t105.a !== undefined ? {a: $t105.a, i: $t105.i} : $t105)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__pos], i: 0});
          if (($t107 = (($t106 = this._M_leftmost(), $t106) ? (($t106 = this._M_leftmost(), $t106)).a[(($t106 = this._M_leftmost(), $t106)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t107 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t107 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t107.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t107.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t109 = (($t108 = __before.op_dec(), $t108.a[$t108.i]))._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, $t109 ? {a: $t109.a, i: $t109.i} : null)), __k)) {
               {
                if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__before._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __before._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __before._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __before, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"});
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"});
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
        if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__pos], i: 0});
            if (($t111 = (($t110 = this._M_rightmost(), $t110) ? (($t110 = this._M_rightmost(), $t110)).a[(($t110 = this._M_rightmost(), $t110)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t111 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t111 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t111.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t111.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t113 = (($t112 = __after.op_inc(), $t112.a[$t112.i]))._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, $t113 ? {a: $t113.a, i: $t113.i} : null)))) {
                 {
                  if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"});
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __after, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}, {a: __after, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"});
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
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}, {a: [null], i: 0});
        }
      }
    }
  }
  begin() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_left ? {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_left.a, i: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"}).i} : null));
  }
  size__c() {
    return this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1;
  }
  _M_insert_unique__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_unique_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(__first, __last) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this._M_insert_unique___std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_unique_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [this.end()], i: 0}), __first);
    }
  }
  _M_insert_unique___std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_unique_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__position, __v) {
    let $t114;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__position], i: 0}), (($t114 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t114)).op_call__c(__v));
    if (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P) {
      return this._M_insert___std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__v));
    }
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null));
  }
  _M_insert___std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__x, __p, __v) {
    let $t115, $t116, $t117, $t118;
    let __insert_left = (((__x !== null) || ($t116 = ($t115 = this._M_end(), $t115), (__p === $t116 || (__p && $t116 && __p.a === $t116.a && __p.i === $t116.i)))) || std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, (($t117 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t117)).op_call__c(__v), std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t118 = this._M_create_node__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_create_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__v)), $t118 ? {a: $t118.a, i: $t118.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"});
    (this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = ((this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 + 1) >>> 0));
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_create_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__args_0) {
    let $t119;
    let __tmp = ($t119 = this._M_get_node(), $t119 ? {a: $t119.a, i: $t119.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
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
class std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    let $t120, $t121;
    this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($a[1] === undefined ? ({a: [new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
    std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype._M_insert_unique__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_insert_unique_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, ($t120 = ({a: $a[0], i: 0}), $t120 ? {a: $t120.a, i: $t120.i} : null), ($t121 = ({a: $a[0], i: ($a[0]).length}), $t121 ? {a: $t121.a, i: $t121.i} : null));
  }
  __dtor() {
  }
  begin() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.begin.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
  end() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.end.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
}
class std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((this._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_node$std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null));
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
    let $t122;
    if ((__n > gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t122 = operatornew__unsigned_long(((Math.imul(__n, 20)) >>> 0)), $t122 ? {a: $t122.a, i: $t122.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (20))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_Rb_tree_node_int_construct_std_Rb_tree_node_int_int__rv(__p, __args_0) {
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
  _M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1;
  _M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1;
  _M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int)) {
      this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = new std_less_int($a[0]);
      this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_i = "_M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1";
      this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = new std_Rb_tree_node_base();
      this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_a = this; this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_i = "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1";
      this._M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = ((0) >>> 0);
      this._M_initialize();
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = new std_less_int();
      this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_i = "_M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1";
      this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = new std_Rb_tree_node_base();
      this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_a = this; this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1.ctj_i = "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1";
      this._M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = ((0) >>> 0);
      this._M_initialize();
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_color = 0;
    this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_parent = null;
    this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_left = (({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).i} : null);
    this._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_right = (({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}) ? {a: ({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).a, i: ({a: this, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).i} : null);
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int {
  _M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_int) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1($a[0], {a: [new std_allocator_std_Rb_tree_node_int(($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1]))], i: 0});
      this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.ctj_a = this; this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.ctj_i = "_M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
      this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.ctj_a = this; this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.ctj_i = "_M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int"};
  }
  _M_get_node() {
    let $t123;
    return ($t123 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, ((1) >>> 0), {a: [0], i: 0}), $t123 ? {a: $t123.a, i: $t123.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.deallocate.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_leftmost() {
    return {a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, i: "_M_left"};
  }
  _M_rightmost() {
    return {a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, i: "_M_right"};
  }
  _M_begin() {
    return (this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_parent ? {a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_parent.a, i: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_int"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field$std_Rb_tree_node_int"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t124, $t125;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t124 = new std_Identity_int(), $t124)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t125 = new std_Identity_int(), $t125)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t126, $t127, $t128;
    let __x = ($t126 = this._M_begin(), $t126 ? {a: $t126.a, i: $t126.i} : null);
    let __y = ($t127 = this._M_end(), $t127 ? {a: $t127.a, i: $t127.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, __k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t128 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t128 ? {a: $t128.a, i: $t128.i} : null);
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
    if (std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__j._M_node$std_Rb_tree_iterator_int ? {a: __j._M_node$std_Rb_tree_iterator_int.a, i: __j._M_node$std_Rb_tree_iterator_int.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node$std_Rb_tree_iterator_int"}, {a: [null], i: 0});
  }
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t129, $t130, $t131, $t132, $t133, $t134, $t135, $t136, $t137, $t138, $t139, $t140;
    let __pos = std_Rb_tree_const_iterator_int.prototype._M_const_cast__c.call(__position);
    if (($t130 = ($t129 = this._M_end(), $t129), (__pos._M_node$std_Rb_tree_iterator_int === $t130 || (__pos._M_node$std_Rb_tree_iterator_int && $t130 && __pos._M_node$std_Rb_tree_iterator_int.a === $t130.a && __pos._M_node$std_Rb_tree_iterator_int.i === $t130.i)))) {
       {
        if (((this.size__c() > ((0) >>> 0)) && std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t131 = this._M_rightmost(), $t132 = ($t131 ? $t131.a[$t131.i] : null), $t132 && $t132.a !== undefined ? {a: $t132.a, i: $t132.i} : $t132)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, __k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node$std_Rb_tree_iterator_int ? {a: __pos._M_node$std_Rb_tree_iterator_int.a, i: __pos._M_node$std_Rb_tree_iterator_int.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
          if (($t134 = (($t133 = this._M_leftmost(), $t133) ? (($t133 = this._M_leftmost(), $t133)).a[(($t133 = this._M_leftmost(), $t133)).i] : null), (__pos._M_node$std_Rb_tree_iterator_int === $t134 || (__pos._M_node$std_Rb_tree_iterator_int && $t134 && __pos._M_node$std_Rb_tree_iterator_int.a === $t134.a && __pos._M_node$std_Rb_tree_iterator_int.i === $t134.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t136 = (($t135 = __before.op_dec(), $t135.a[$t135.i]))._M_node$std_Rb_tree_iterator_int, $t136 ? {a: $t136.a, i: $t136.i} : null)), __k)) {
               {
                if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__before._M_node$std_Rb_tree_iterator_int ? {a: __before._M_node$std_Rb_tree_iterator_int.a, i: __before._M_node$std_Rb_tree_iterator_int.i} : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __before, i: "_M_node$std_Rb_tree_iterator_int"});
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_int"}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_int"});
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
        if (std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node$std_Rb_tree_iterator_int ? {a: __pos._M_node$std_Rb_tree_iterator_int.a, i: __pos._M_node$std_Rb_tree_iterator_int.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
            if (($t138 = (($t137 = this._M_rightmost(), $t137) ? (($t137 = this._M_rightmost(), $t137)).a[(($t137 = this._M_rightmost(), $t137)).i] : null), (__pos._M_node$std_Rb_tree_iterator_int === $t138 || (__pos._M_node$std_Rb_tree_iterator_int && $t138 && __pos._M_node$std_Rb_tree_iterator_int.a === $t138.a && __pos._M_node$std_Rb_tree_iterator_int.i === $t138.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, __k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t140 = (($t139 = __after.op_inc(), $t139.a[$t139.i]))._M_node$std_Rb_tree_iterator_int, $t140 ? {a: $t140.a, i: $t140.i} : null)))) {
                 {
                  if ((std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__pos._M_node$std_Rb_tree_iterator_int ? {a: __pos._M_node$std_Rb_tree_iterator_int.a, i: __pos._M_node$std_Rb_tree_iterator_int.i} : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, {a: __pos, i: "_M_node$std_Rb_tree_iterator_int"});
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __after, i: "_M_node$std_Rb_tree_iterator_int"}, {a: __after, i: "_M_node$std_Rb_tree_iterator_int"});
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
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __pos, i: "_M_node$std_Rb_tree_iterator_int"}, {a: [null], i: 0});
        }
      }
    }
  }
  begin() {
    return new std_Rb_tree_iterator_int((this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_left ? {a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_left.a, i: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_int((({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}) ? {a: ({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).a, i: ({a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"}).i} : null));
  }
  size__c() {
    return this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1;
  }
  _M_insert_unique__std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_unique_1_int_P(__first, __last) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this._M_insert_unique___std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_unique_int__rv(new std_Rb_tree_const_iterator_int({a: [this.end()], i: 0}), __first);
    }
  }
  _M_insert_unique___std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_unique_int__rv(__position, __v) {
    let $t141;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_int({a: [__position], i: 0}), (($t141 = new std_Identity_int(), $t141)).op_call__c(__v));
    if (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P) {
      return this._M_insert___std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_int__rv((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), std_forward_1_int(__v));
    }
    return new std_Rb_tree_iterator_int((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null));
  }
  _M_insert___std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_int__rv(__x, __p, __v) {
    let $t142, $t143, $t144, $t145;
    let __insert_left = (((__x !== null) || ($t143 = ($t142 = this._M_end(), $t142), (__p === $t143 || (__p && $t143 && __p.a === $t143.a && __p.i === $t143.i)))) || std_less_int.prototype.op_call__c.call(this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_key_compare$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1, (($t144 = new std_Identity_int(), $t144)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t145 = this._M_create_node__std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_create_node_int__rv(std_forward_1_int(__v)), $t145 ? {a: $t145.a, i: $t145.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int, i: "_M_header$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1"});
    (this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 = ((this._M_impl$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._M_node_count$std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 + 1) >>> 0));
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_create_node_int__rv(__args_0) {
    let $t146;
    let __tmp = ($t146 = this._M_get_node(), $t146 ? {a: $t146.a, i: $t146.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_int.construct__std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_std_Rb_tree_node_int_int__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_int(__args_0));
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
  _M_t$std_set_int_std_less_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_set_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_set_int_std_less_int_std_allocator_int(...$a) {
    let $t147, $t148;
    this._M_t$std_set_int_std_less_int_std_allocator_int = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t$std_set_int_std_less_int_std_allocator_int.ctj_a = this; this._M_t$std_set_int_std_less_int_std_allocator_int.ctj_i = "_M_t$std_set_int_std_less_int_std_allocator_int";
    std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.prototype._M_insert_unique__std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_M_insert_unique_1_int_P.call(this._M_t$std_set_int_std_less_int_std_allocator_int, ($t147 = ({a: $a[0], i: 0}), $t147 ? {a: $t147.a, i: $t147.i} : null), ($t148 = ({a: $a[0], i: ($a[0]).length}), $t148 ? {a: $t148.a, i: $t148.i} : null));
  }
  __dtor() {
  }
  begin__c() {
    return new std_Rb_tree_const_iterator_int({a: [std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.prototype.begin.call(this._M_t$std_set_int_std_less_int_std_allocator_int)], i: 0});
  }
  end__c() {
    return new std_Rb_tree_const_iterator_int({a: [std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int.prototype.end.call(this._M_t$std_set_int_std_less_int_std_allocator_int)], i: 0});
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
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
    let $t149, $t150, $t151, $t152, $t153, $t154, $t155, $t156;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t149 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[0]), $t150 = ($t149 ? $t149.a[$t149.i] : null), $t150 && $t150.a !== undefined ? {a: $t150.a, i: $t150.i} : $t150);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t151 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[1]), $t152 = ($t151 ? $t151.a[$t151.i] : null), $t152 && $t152.a !== undefined ? {a: $t152.a, i: $t152.i} : $t152);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t153 = std_forward_1_std_Rb_tree_node_int_P($a[0]), $t154 = ($t153 ? $t153.a[$t153.i] : null), $t154 && $t154.a !== undefined ? {a: $t154.a, i: $t154.i} : $t154);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t155 = std_forward_1_std_Rb_tree_node_int_P($a[1]), $t156 = ($t155 ? $t155.a[$t155.i] : null), $t156 && $t156.a !== undefined ? {a: $t156.a, i: $t156.i} : $t156);
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
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_vector_int_std_allocator_int {
  __init_std_remove_reference_std_vector_int_std_allocator_int(...$a) { }
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
class std_iterator_traits_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  __init_std_iterator_traits_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a) { }
  __dtor() {
  }
}
class std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_move_if_noexcept_cond_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_nothrow_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_nothrow_move_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value0_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0 {
  __init_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value0_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_base_of_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_same_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
class std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_and_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_not_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_array_unknown_bounds_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_integral_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_floating_point_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_integral_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_floating_point_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_member_pointer_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_nullptr_t_helper_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_arithmetic_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_enum_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_member_pointer_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_nullptr_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_scalar_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_all_extents_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_destructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_cv_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_volatile_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_const_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  __init_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR extends std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_and_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
    std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  __init_std_conditional_value1_std_is_nt_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_static_castable_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value1_std_is_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_lvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value1_std_is_lvalue_to_rvalue_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0_std_is_static_castable_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_direct_constructible_new_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_and_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_destructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_direct_constructible_new_safe_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_copy_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_nothrow_move_constructible_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  _M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P;
  constructor(...$a) {
    this.__init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a);
  }
  __init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a) {
    let $t157;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P)) {
      this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P = ($t157 = std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t157 ? {a: $t157.a, i: $t157.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  base__c() {
    return (this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P ? {a: this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.a, i: this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.i} : null);
  }
  op_mul__c() {
    return std_move_std_basic_string_char_std_char_traits_char_std_allocator_char(this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P);
  }
  op_inc() {
    ++this._M_current$std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P {
  __init_std_conditional_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P {
  __init_std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_Rb_tree_node_base_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
  static construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_S_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
  }
  static _S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_S_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv(__a, __p, __args_0) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  __init_std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_const_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_not_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_integral_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_floating_point_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_integral_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_all_extents_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_destructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_cv_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_volatile_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_const_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_destructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
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
  static construct__std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_std_Rb_tree_node_int_int__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_int._S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_int_S_construct_std_Rb_tree_node_int_int__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
  static _S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_int_S_construct_std_Rb_tree_node_int_int__rv(__a, __p, __args_0) {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.construct__gnu_cxx_new_allocator_std_Rb_tree_node_int_construct_std_Rb_tree_node_int_int__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
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
class std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
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
class std_extent_std_vector_int_std_allocator_int_value0 extends std_integral_constant_unsigned_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_extent_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_value0.prototype.__dtor.call(this);
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
  _M_current$std_move_iterator_std_vector_int_std_allocator_int_P;
  constructor(...$a) {
    this.__init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) {
    let $t158;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_vector_int_std_allocator_int_P)) {
      this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P = ($t158 = std_move_iterator_std_vector_int_std_allocator_int_P.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t158 ? {a: $t158.a, i: $t158.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  base__c() {
    return (this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P ? {a: this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P.a, i: this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P.i} : null);
  }
  op_mul__c() {
    return std_move_std_vector_int_std_allocator_int(this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P);
  }
  op_inc() {
    ++this._M_current$std_move_iterator_std_vector_int_std_allocator_int_P.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P {
  __init_std_conditional_value0_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) { }
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
  _M_current$std_move_iterator_int_P;
  constructor(...$a) {
    this.__init_std_move_iterator_int_P(...$a);
  }
  __init_std_move_iterator_int_P(...$a) {
    let $t159;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current$std_move_iterator_int_P = ($t159 = std_move_iterator_int_P.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t159 ? {a: $t159.a, i: $t159.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$std_move_iterator_int_P = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  base__c() {
    return (this._M_current$std_move_iterator_int_P ? {a: this._M_current$std_move_iterator_int_P.a, i: this._M_current$std_move_iterator_int_P.i} : null);
  }
  op_mul__c() {
    return std_move_int(this._M_current$std_move_iterator_int_P);
  }
  op_inc() {
    ++this._M_current$std_move_iterator_int_P.i;
    return {a: [this], i: 0};
  }
}
class std_conditional_value0_int_P_std_move_iterator_int_P {
  __init_std_conditional_value0_int_P_std_move_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR {
  constructor(...$a) {
    this.__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a);
  }
  __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a);
  }
  __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int extends std_is_convertible_int_R_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int(...$a);
  }
  __init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_R_int(...$a) {
  }
  __dtor() {
    std_is_convertible_int_R_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_convertible_int_R_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_not_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  __init_std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_add_rvalue_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int extends std_is_convertible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a);
  }
  __init_std_and_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a) {
  }
  __dtor() {
    std_is_convertible_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_convertible_int_int_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
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
  _M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t160, $t161;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = ($t160 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(($a[0]).a[($a[0]).i]), $t161 = ($t160 ? $t160.a[$t160.i] : null), $t161 && $t161.a !== undefined ? {a: $t161.a, i: $t161.i} : $t161);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int;
  }
  op_inc() {
    ++this._M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.i;
    return {a: [this], i: 0};
  }
  base__c() {
    return {a: this, i: "_M_current$gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int"};
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
class std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    this.__init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_allocator_int {
  __init_std_remove_reference_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_numeric_traits_integer_int {
  constructor(...$a) {
    this.__init_gnu_cxx_numeric_traits_integer_int(...$a);
  }
  __init_gnu_cxx_numeric_traits_integer_int(...$a) {
  }
  __dtor() {
  }
  static __min = -2147483648;
  static __max = 2147483647;
  static __is_signed = 1;
  static __digits = 31;
}
class gnu_cxx_numeric_traits_int extends gnu_cxx_numeric_traits_integer_int {
  constructor(...$a) {
    super();
    this.__init_gnu_cxx_numeric_traits_int(...$a);
  }
  __init_gnu_cxx_numeric_traits_int(...$a) {
  }
  __dtor() {
    gnu_cxx_numeric_traits_integer_int.prototype.__dtor.call(this);
  }
}
class std_tuple {
  __init_std_tuple(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int_P {
  __init_std_remove_reference_int_P(...$a) { }
  __dtor() {
  }
}
class std_numeric_limits_int {
  constructor(...$a) {
    this.__init_std_numeric_limits_int(...$a);
  }
  __init_std_numeric_limits_int(...$a) {
  }
  __dtor() {
  }
  static is_specialized = 1;
  static digits = 31;
  static digits10 = 9;
  static max_digits10 = 0;
  static is_signed = 1;
  static is_integer = 1;
  static is_exact = 1;
  static radix = 2;
  static min_exponent = 0;
  static min_exponent10 = 0;
  static max_exponent = 0;
  static max_exponent10 = 0;
  static has_infinity = 0;
  static has_quiet_NaN = 0;
  static has_signaling_NaN = 0;
  static has_denorm = 0;
  static has_denorm_loss = 0;
  static is_iec559 = 0;
  static is_bounded = 1;
  static is_modulo = 0;
  static traps = 1;
  static tinyness_before = 0;
  static round_style = 0;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function gnu_cxx_exchange_and_add_single(__mem, __val) {
  let __result = __mem.a[__mem.i];
  __mem.a[__mem.i] = (((((__mem.a[__mem.i]) + (__val)) | 0)) | 0);
  return __result;
}
function gnu_cxx_atomic_add_single(__mem, __val) {
  __mem.a[__mem.i] = (((((__mem.a[__mem.i]) + (__val)) | 0)) | 0);
}
function gnu_cxx_exchange_and_add_dispatch(__mem, __val) {
  return gnu_cxx_exchange_and_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function gnu_cxx_atomic_add_dispatch(__mem, __val) {
  gnu_cxx_atomic_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function std_swap_int_P(__a, __b) {
  let $t162, $t163, $t164, $t165, $t166, $t167;
  let __tmp = {v: ($t162 = std_move_int_P(__a), $t163 = ($t162 ? $t162.a[$t162.i] : null), $t163 && $t163.a !== undefined ? {a: $t163.a, i: $t163.i} : $t163)};
  __a.a[__a.i] = ($t164 = std_move_int_P(__b), $t165 = ($t164 ? $t164.a[$t164.i] : null), $t165 && $t165.a !== undefined ? {a: $t165.a, i: $t165.i} : $t165);
  __b.a[__b.i] = ($t166 = std_move_int_P({a: __tmp, i: "v"}), $t167 = ($t166 ? $t166.a[$t166.i] : null), $t167 && $t167.a !== undefined ? {a: $t167.a, i: $t167.i} : $t167);
}
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(__os, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__os.a[__os.i], 1, __n, null, 0);
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
function std_operator_char_std_char_traits_char_std_allocator_char(__os, __str) {
  let $t168;
  return std_ostream_insert_char_std_char_traits_char(__os, ($t168 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.data__c.call(__str.a[__str.i]), $t168 ? {a: $t168.a, i: $t168.i} : null), ((std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(__str.a[__str.i])) | 0));
}
function main() {
  let $t169, $t170, $t171;
  let v = new std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char([new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 0], i: 0}), new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], {a: [new std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator_char_std_char_traits_char_std_allocator_char(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long({a: std_cout, i: "v"}, std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(v)), {a: [32, 0], i: 0}), v.op_index(((1) >>> 0))), {a: [std_endl], i: 0});
  let m = new std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [120, 0], i: 0})], i: 0}, {a: [1], i: 0}), new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [121, 0], i: 0})], i: 0}, {a: [2], i: 0})], {a: [new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0});
  for (let $b0 = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [m.begin()], i: 0}), $e0 = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [m.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char({a: std_cout, i: "v"}, {a: kv.a[kv.i], i: "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}), {a: [58, 0], i: 0}), (kv.a[kv.i]).second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let s = new std_set_int_std_less_int_std_allocator_int([5, 6, 5], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  for (let $b1 = new std_Rb_tree_const_iterator_int({a: [s.begin__c()], i: 0}), $e1 = new std_Rb_tree_const_iterator_int({a: [s.end__c()], i: 0}); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let vv = new std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int([new std_vector_int_std_allocator_int([1, 2], {a: [new std_allocator_int()], i: 0}), new std_vector_int_std_allocator_int([3], {a: [new std_allocator_int()], i: 0})], {a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long({a: std_cout, i: "v"}, std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int.prototype.size__c.call(vv)), {a: [32, 0], i: 0}), std_vector_int_std_allocator_int.prototype.size__c.call(($t169 = vv.op_index(((0) >>> 0)), $t169.a[$t169.i]))), {a: [32, 0], i: 0}), ($t170 = (($t171 = vv.op_index(((1) >>> 0)), $t171.a[$t171.i])).op_index(((0) >>> 0)), $t170.a[$t170.i])), {a: [std_endl], i: 0});
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
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_RR() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_RR.__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.__delegate();
}
function std_declval_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int() {
  return std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R() {
  return std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.__delegate();
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
function std_declval_std_vector_int_std_allocator_int_RR() {
  return std_declval_protector_std_vector_int_std_allocator_int_RR.__delegate();
}
function std_declval_std_vector_int_std_allocator_int_R() {
  return std_declval_protector_std_vector_int_std_allocator_int_R.__delegate();
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char.__delegate();
}
function std_ostream_insert_char_std_char_traits_char(__out, __s, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__out.a[__out.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
  return __out;
}
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P(__x, __y) {
  return (!(std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_2(__x, __y)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P(__x, __y) {
  return (!(std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_2(__x, __y)));
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_2(__x, __y)));
}
function std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__t) {
  return __t;
}
function std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_vector_int_std_allocator_int(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_int_P(__t) {
  return __t;
}
function std_operator_5_char_char($p0, $p1) {
  return true;
}
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_2(__x, __y) {
  let $t172, $t173, $t174, $t175;
  return ($t174 = ($t172 = std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.prototype.base__c.call(__x.a[__x.i]), $t172), $t175 = ($t173 = std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P.prototype.base__c.call(__y.a[__y.i]), $t173), ($t174 === $t175 || ($t174 && $t175 && $t174.a === $t175.a && $t174.i === $t175.i)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_2(__x, __y) {
  let $t176, $t177, $t178, $t179;
  return ($t178 = ($t176 = std_move_iterator_std_vector_int_std_allocator_int_P.prototype.base__c.call(__x.a[__x.i]), $t176), $t179 = ($t177 = std_move_iterator_std_vector_int_std_allocator_int_P.prototype.base__c.call(__y.a[__y.i]), $t177), ($t178 === $t179 || ($t178 && $t179 && $t178.a === $t179.a && $t178.i === $t179.i)));
}
function std_operator_3_int_P_int_P_2(__x, __y) {
  let $t180, $t181, $t182, $t183;
  return ($t182 = ($t180 = std_move_iterator_int_P.prototype.base__c.call(__x.a[__x.i]), $t180), $t183 = ($t181 = std_move_iterator_int_P.prototype.base__c.call(__y.a[__y.i]), $t181), ($t182 === $t183 || ($t182 && $t183 && $t182.a === $t183.a && $t182.i === $t183.i)));
}
function std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(__first, __last, __result, __alloc) {
  let $t184;
  return ($t184 = std_uninitialized_copy_a_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t184 ? {a: $t184.a, i: $t184.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t185;
  return ($t185 = std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t185 ? {a: $t185.a, i: $t185.i} : null);
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t186;
  return ($t186 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t186 ? {a: $t186.a, i: $t186.i} : null);
}
function std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(__first, __last, __alloc) {
  let $t187;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.destroy__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_destroy_std_basic_string_char_std_char_traits_char_std_allocator_char(__alloc, ($t187 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char(__first), $t187 ? {a: $t187.a, i: $t187.i} : null));
  }
}
function std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __alloc) {
  let $t188;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_destroy_std_vector_int_std_allocator_int(__alloc, ($t188 = std_addressof_std_vector_int_std_allocator_int(__first), $t188 ? {a: $t188.a, i: $t188.i} : null));
  }
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t189;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy__gnu_cxx_alloc_traits_std_allocator_int_destroy_int(__alloc, ($t189 = std_addressof_int(__first), $t189 ? {a: $t189.a, i: $t189.i} : null));
  }
}
function std_max_unsigned_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(__i) {
  return new std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P(__i) {
  return new std_move_iterator_std_vector_int_std_allocator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(__i) {
  return new std_move_iterator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(__first, __last, __result, __alloc) {
  let $t190;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct__gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_construct_std_basic_string_char_std_char_traits_char_std_allocator_char(__alloc, ($t190 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char(__cur), $t190 ? {a: $t190.a, i: $t190.i} : null), __first.op_mul__c());
      }
      return (__cur ? {a: __cur.a, i: __cur.i} : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
    }
  }
}
function std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t191;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int_construct_std_vector_int_std_allocator_int(__alloc, ($t191 = std_addressof_std_vector_int_std_allocator_int(__cur), $t191 ? {a: $t191.a, i: $t191.i} : null), __first.op_mul__c());
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
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t192;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__alloc, ($t192 = std_addressof_int(__cur), $t192 ? {a: $t192.a, i: $t192.i} : null), __first.op_mul__c());
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
function std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t193;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct__gnu_cxx_alloc_traits_std_allocator_int_construct_int(__alloc, ($t193 = std_addressof_int(__cur), $t193 ? {a: $t193.a, i: $t193.i} : null), __first.op_mul__c());
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
function std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_std_vector_int_std_allocator_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_operator_5_char_std_char_traits_char_std_allocator_char(__lhs, __rhs) {
  return (std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.compare__c.call(__lhs.a[__lhs.i], __rhs) < 0);
}
function std_move_std_vector_int_std_allocator_int(__t) {
  return __t;
}
function std_move_std_basic_string_char_std_char_traits_char_std_allocator_char(__t) {
  return __t;
}
function std_move_std_allocator_int(__t) {
  return __t;
}
function std_move_int(__t) {
  return __t;
}
function std_move_int_P(__t) {
  return __t;
}
function std_min_unsigned_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t194, $t195, $t196, $t197, $t198, $t199;
  return ($t198 = (($t196 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t196) ? (($t196 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t196)).a[(($t196 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__lhs.a[__lhs.i]), $t196)).i] : null), $t199 = (($t197 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t197) ? (($t197 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t197)).a[(($t197 = gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int.prototype.base__c.call(__rhs.a[__rhs.i]), $t197)).i] : null), (!($t198 === $t199 || ($t198 && $t199 && $t198.a === $t199.a && $t198.i === $t199.i))));
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
