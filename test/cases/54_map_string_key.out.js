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
  static move(__s1, __s2, __n) {
    let $t1;
    return ($t1 = (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  static copy(__s1, __s2, __n) {
    let $t2;
    return ($t2 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
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
    let $t3;
    if ((__n > gnu_cxx_new_allocator_char.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t3 = operatornew__unsigned_long(((Math.imul(__n, 1)) >>> 0)), $t3 ? {a: $t3.a, i: $t3.i} : null);
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
  _M_is_shared__c() {
    return (this._M_refcount > 0);
  }
  _M_set_sharable() {
    this._M_refcount = 0;
  }
  _M_set_length_and_sharable(__n) {
    let $t4;
     {
      std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_sharable.call(this);
      this._M_length = __n;
      std_char_traits_char.assign({a: (($t4 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(this), $t4)).a, i: (($t4 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(this), $t4)).i + (__n)}, {a: std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t5, $t6;
    return ($t6 = ($t5 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t5 ? $t5.a : null), i: ($t5 ? $t5.i : 0) + (1)})), $t6 ? {a: $t6.a, i: $t6.i} : null);
  }
  _M_grab(__alloc1, __alloc2) {
    let $t7;
    return ($t7 = (((!(this._M_is_leaked__c())) && std_operator_6_char_char(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, ((0) >>> 0))), $t7 ? {a: $t7.a, i: $t7.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t8, $t9;
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
    let __place = ($t8 = gnu_cxx_new_allocator_char.prototype.allocate.call(__alloc.a[__alloc.i], __size, {a: [0], i: 0}), $t8 ? {a: $t8.a, i: $t8.i} : null);
    let __p = ($t9 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t9 ? {a: $t9.a, i: $t9.i} : null);
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
    let $t10;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t10 = this._M_refdata(), $t10 ? {a: $t10.a, i: $t10.i} : null);
  }
  _M_clone(__alloc, __res = ((0) >>> 0)) {
    let $t11, $t12, $t13, $t14;
    let __requested_cap = (((this._M_length) + (__res)) >>> 0);
    let __r = ($t11 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t11 ? {a: $t11.a, i: $t11.i} : null);
    if (this._M_length) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t12 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t12 ? {a: $t12.a, i: $t12.i} : null), ($t13 = this._M_refdata(), $t13 ? {a: $t13.a, i: $t13.i} : null), this._M_length);
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(__r.a[__r.i], this._M_length);
    return ($t14 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t14 ? {a: $t14.a, i: $t14.i} : null);
  }
  static _S_max_size = 1073741820;
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
  _M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t15, $t16, $t17, $t18, $t19;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t16 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_grab.call(($t15 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype._M_rep__c.call(($a[0]).a[($a[0]).i]), $t15.a[$t15.i]), {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0}, {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0}), $t16 ? {a: $t16.a, i: $t16.i} : null), {a: [std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.get_allocator__c.call(($a[0]).a[($a[0]).i])], i: 0});
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t18 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t17 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t17 ? {a: $t17.a, i: $t17.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t18 ? {a: $t18.a, i: $t18.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t19 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [new std_allocator_char()], i: 0}), $t19 ? {a: $t19.a, i: $t19.i} : null), {a: [new std_allocator_char()], i: 0});
      this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_a = this; this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char.ctj_i = "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_data__c() {
    return (this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p ? {a: this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p.a, i: this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p.i} : null);
  }
  _M_data(__p) {
    let $t20;
    return ($t20 = this._M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t20 ? {a: $t20.a, i: $t20.i} : null);
  }
  _M_rep__c() {
    let $t21, $t22;
    return ($t22 = {a: (($t21 = this._M_data__c(), $t21)).a, i: (($t21 = this._M_data__c(), $t21)).i + (((-(1)) | 0))}, $t22 ? {a: $t22.a, i: $t22.i} : null);
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === ((1) >>> 0))) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  static _M_move(__d, __s, __n) {
    if ((__n === ((1) >>> 0))) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.move((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
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
  _M_mutate(__pos, __len1, __len2) {
    let $t23, $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38, $t39, $t40, $t41, $t42, $t43, $t44, $t45, $t46, $t47, $t48, $t49;
    let __old_size = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this);
    let __new_size = ((((((__old_size) + (__len2)) >>> 0)) - (__len1)) >>> 0);
    let __how_much = ((((((__old_size) - (__pos)) >>> 0)) - (__len1)) >>> 0);
    if (((__new_size > std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.capacity__c.call(this)) || std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_is_shared__c.call(($t23 = this._M_rep__c(), $t23.a[$t23.i])))) {
       {
        let __a = {v: this.get_allocator__c()};
        let __r = ($t24 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__new_size, std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.capacity__c.call(this), {a: __a, i: "v"}), $t24 ? {a: $t24.a, i: $t24.i} : null);
        if (__pos) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t25 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t25 ? {a: $t25.a, i: $t25.i} : null), ($t26 = this._M_data__c(), $t26 ? {a: $t26.a, i: $t26.i} : null), __pos);
        }
        if (__how_much) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t31 = ($t30 = ($t29 = ($t28 = ($t27 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t27), ({a: ($t28 ? $t28.a : null), i: ($t28 ? $t28.i : 0) + (__pos)})), $t29), ({a: ($t30 ? $t30.a : null), i: ($t30 ? $t30.i : 0) + (__len2)})), $t31 ? {a: $t31.a, i: $t31.i} : null), ($t36 = ($t35 = ($t34 = ($t33 = ($t32 = this._M_data__c(), $t32), ({a: ($t33 ? $t33.a : null), i: ($t33 ? $t33.i : 0) + (__pos)})), $t34), ({a: ($t35 ? $t35.a : null), i: ($t35 ? $t35.i : 0) + (__len1)})), $t36 ? {a: $t36.a, i: $t36.i} : null), __how_much);
        }
        std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_dispose.call(($t37 = this._M_rep__c(), $t37.a[$t37.i]), {a: __a, i: "v"});
        this._M_data(($t38 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t38 ? {a: $t38.a, i: $t38.i} : null));
      }
    }
    else {
      if ((__how_much && (__len1 !== __len2))) {
         {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_move(($t43 = ($t42 = ($t41 = ($t40 = ($t39 = this._M_data__c(), $t39), ({a: ($t40 ? $t40.a : null), i: ($t40 ? $t40.i : 0) + (__pos)})), $t41), ({a: ($t42 ? $t42.a : null), i: ($t42 ? $t42.i : 0) + (__len2)})), $t43 ? {a: $t43.a, i: $t43.i} : null), ($t48 = ($t47 = ($t46 = ($t45 = ($t44 = this._M_data__c(), $t44), ({a: ($t45 ? $t45.a : null), i: ($t45 ? $t45.i : 0) + (__pos)})), $t46), ({a: ($t47 ? $t47.a : null), i: ($t47 ? $t47.i : 0) + (__len1)})), $t48 ? {a: $t48.a, i: $t48.i} : null), __how_much);
        }
      }
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(($t49 = this._M_rep__c(), $t49.a[$t49.i]), __new_size);
  }
  size__c() {
    let $t50;
    return (($t50 = this._M_rep__c(), $t50.a[$t50.i]))._M_length;
  }
  capacity__c() {
    let $t51;
    return (($t51 = this._M_rep__c(), $t51.a[$t51.i]))._M_capacity;
  }
  reserve(__res = ((0) >>> 0)) {
    let $t52, $t53, $t54, $t55;
    if (((__res !== std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.capacity__c.call(this)) || std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_is_shared__c.call(($t52 = this._M_rep__c(), $t52.a[$t52.i])))) {
       {
        if ((__res < std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this))) {
          __res = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this);
        }
        let __a = {v: this.get_allocator__c()};
        let __tmp = ($t54 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_clone.call(($t53 = this._M_rep__c(), $t53.a[$t53.i]), {a: __a, i: "v"}, (((__res) - (std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this))) >>> 0)), $t54 ? {a: $t54.a, i: $t54.i} : null);
        std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_dispose.call(($t55 = this._M_rep__c(), $t55.a[$t55.i]), {a: __a, i: "v"});
        this._M_data((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
  }
  clear() {
    this._M_mutate(((0) >>> 0), std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this), ((0) >>> 0));
  }
  push_back(__c) {
    let $t56, $t57, $t58;
    __c = {v: __c};
    let __len = (((((1) >>> 0)) + (std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this))) >>> 0);
    if (((__len > std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.capacity__c.call(this)) || std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_is_shared__c.call(($t56 = this._M_rep__c(), $t56.a[$t56.i])))) {
      std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.reserve.call(this, __len);
    }
    std_char_traits_char.assign({a: (($t57 = this._M_data__c(), $t57)).a, i: (($t57 = this._M_data__c(), $t57)).i + (std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this))}, {a: __c, i: "v"});
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(($t58 = this._M_rep__c(), $t58.a[$t58.i]), __len);
  }
  static _S_construct(__n, __c, __a) {
    let $t59, $t60, $t61;
    let __r = ($t59 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__n, ((0) >>> 0), __a), $t59 ? {a: $t59.a, i: $t59.i} : null);
    if (__n) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_assign(($t60 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t60 ? {a: $t60.a, i: $t60.i} : null), __n, __c);
    }
    std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_set_length_and_sharable.call(__r.a[__r.i], __n);
    return ($t61 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t61 ? {a: $t61.a, i: $t61.i} : null);
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P(__beg, __end, __a) {
    let $t62;
    return ($t62 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_false_type()), $t62 ? {a: $t62.a, i: $t62.i} : null);
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P(__beg, __end, __a, $p3) {
    let $t63, $t64, $t65, $t66, $t67, $t68, $t69, $t70, $t71;
    let __buf = new Array(128).fill(0);
    let __len = ((0) >>> 0);
    while (((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
       {
        __buf[($t63 = __len, __len = (($t63 + 1) >>> 0), $t63)] = __beg.a[__beg.i];
        ++__beg.i;
      }
    }
    let __r = ($t64 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, ((0) >>> 0), __a), $t64 ? {a: $t64.a, i: $t64.i} : null);
    std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t65 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t65 ? {a: $t65.a, i: $t65.i} : null), {a: __buf, i: 0}, __len);
    if (true) {
       {
        while ((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i)))) {
           {
            if ((__len === (__r.a[__r.i])._M_capacity)) {
               {
                let __another = ($t66 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((((__len) + (((1) >>> 0))) >>> 0), __len, __a), $t66 ? {a: $t66.a, i: $t66.i} : null);
                std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t67 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__another.a[__another.i]), $t67 ? {a: $t67.a, i: $t67.i} : null), ($t68 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t68 ? {a: $t68.a, i: $t68.i} : null), __len);
                std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_destroy.call(__r.a[__r.i], __a);
                __r = (__another ? {a: __another.a, i: __another.i} : null);
              }
            }
            (($t69 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t69)).a[(($t69 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t69)).i + (($t70 = __len, __len = (($t70 + 1) >>> 0), $t70))] = __beg.a[__beg.i];
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
    return ($t71 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep.prototype._M_refdata.call(__r.a[__r.i]), $t71 ? {a: $t71.a, i: $t71.i} : null);
  }
  data__c() {
    let $t72;
    return ($t72 = this._M_data__c(), $t72 ? {a: $t72.a, i: $t72.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus$std_basic_string_char_std_char_traits_char_std_allocator_char"});
  }
  compare__c(__str) {
    let $t73, $t74, $t75;
    let __size = {v: std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(this)};
    let __osize = {v: std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(__str.a[__str.i])};
    let __len = ($t73 = std_min_unsigned_long({a: __size, i: "v"}, {a: __osize, i: "v"}), $t73.a[$t73.i]);
    let __r = std_char_traits_char.compare(($t74 = this._M_data__c(), $t74 ? {a: $t74.a, i: $t74.i} : null), ($t75 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.data__c.call(__str.a[__str.i]), $t75 ? {a: $t75.a, i: $t75.i} : null), __len);
    if ((!__r)) {
      __r = std_basic_string_char_std_char_traits_char_std_allocator_char._S_compare(__size.v, __osize.v);
    }
    return __r;
  }
  static _S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P(__beg, __end, __a, $p3) {
    let $t76;
    return ($t76 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t76 ? {a: $t76.a, i: $t76.i} : null);
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
  setstate(__s) {
    this._M_state$std_basic_istream_char_std_char_traits_char = (((this._M_state$std_basic_istream_char_std_char_traits_char) | (__s)) | 0);
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
    if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R && $a[2] instanceof std_tuple) {
      this.__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new std_Index_tuple_value0(), new std_Index_tuple());
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R(std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[0])));
      this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this.first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
      this.second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = 0;
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
    let $t77, $t78, $t79;
    this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($t77 = std_forward_1_std_piecewise_construct_t($a[0]), $t77.a[$t77.i]), ($t78 = std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[1]), $t78.a[$t78.i]), ($t79 = std_forward_1_std_tuple($a[2]), $t79.a[$t79.i]));
    this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
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
class std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i} : null);
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
  op_arrow__c() {
    let $t80;
    return ($t80 = std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a[this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i], i: "_M_value_field$std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}), $t80 ? {a: $t80.a, i: $t80.i} : null);
  }
  op_inc() {
    let $t81;
    this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($t81 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), $t81 ? {a: $t81.a, i: $t81.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t82;
    this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = ($t82 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) || (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) || (this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a && this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === ((__x.a[__x.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i)));
  }
  op_assign(o) {
    this._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = (((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? {a: ((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).a, i: ((o.a[o.i])._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int).i} : null);
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
class std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_empty_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  _M_head_impl$std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0;
  constructor(...$a) {
    this.__init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a);
  }
  __init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a) {
    this._M_head_impl$std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 = $a[0];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return (__b.a[__b.i])._M_head_impl$std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0;
  }
}
class std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
    std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0.prototype.__init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0.call(this, $a[0]);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0.prototype.__dtor.call(this);
  }
  static _M_head(__t) {
    return std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0._M_head(__t);
  }
}
for (let $b = std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype)) std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R)) std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R[$k] = $b[$k];
  }
}
class std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
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
class std_remove_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
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
    let $t83, $t84, $t85, $t86;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t83 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[0]), $t84 = ($t83 ? $t83.a[$t83.i] : null), $t84 && $t84.a !== undefined ? {a: $t84.a, i: $t84.i} : $t84);
      this.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P = ($t85 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[1]), $t86 = ($t85 ? $t85.a[$t85.i] : null), $t86 && $t86.a !== undefined ? {a: $t86.a, i: $t86.i} : $t86);
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
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t87;
    if ((__n > gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t87 = operatornew__unsigned_long(((Math.imul(__n, 25)) >>> 0)), $t87 ? {a: $t87.a, i: $t87.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (25))) >>> 0);
  }
  construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__p, __args_0, __args_1, __args_2) {
    (__p.a[__p.i] = new std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_destroy_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__p) {
    std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(__p.a[__p.i]);
  }
}
class std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
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
    super(...[]);
    this.__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
    this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char();
    this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = new std_Rb_tree_node_base();
    this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_a = this; this._M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.ctj_i = "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1";
    this._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = ((0) >>> 0);
    this._M_initialize();
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
    this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
    this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
  }
  _M_get_node() {
    let $t88;
    return ($t88 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.allocate.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, ((1) >>> 0), {a: [0], i: 0}), $t88 ? {a: $t88.a, i: $t88.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.deallocate.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_destroy_node(__p) {
    let $t89;
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.destroy__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_destroy_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.call(($t89 = this._M_get_Node_allocator(), $t89.a[$t89.i]), (__p ? {a: __p.a, i: __p.i} : null));
    this._M_put_node((__p ? {a: __p.a, i: __p.i} : null));
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
    let $t90, $t91;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t90 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t90)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t91 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t91)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t92, $t93, $t94;
    let __x = ($t92 = this._M_begin(), $t92 ? {a: $t92.a, i: $t92.i} : null);
    let __y = ($t93 = this._M_end(), $t93 ? {a: $t93.a, i: $t93.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t94 = (__comp ? std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t94 ? {a: $t94.a, i: $t94.i} : null);
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
    let $t95, $t96, $t97, $t98, $t99, $t100, $t101, $t102, $t103, $t104, $t105, $t106;
    let __pos = std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype._M_const_cast__c.call(__position);
    if (($t96 = ($t95 = this._M_end(), $t95), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t96 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t96 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t96.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t96.i)))) {
       {
        if (((this.size__c() > ((0) >>> 0)) && std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t97 = this._M_rightmost(), $t98 = ($t97 ? $t97.a[$t97.i] : null), $t98 && $t98.a !== undefined ? {a: $t98.a, i: $t98.i} : $t98)), __k))) {
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
          if (($t100 = (($t99 = this._M_leftmost(), $t99) ? (($t99 = this._M_leftmost(), $t99)).a[(($t99 = this._M_leftmost(), $t99)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t100 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t100 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t100.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t100.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t102 = (($t101 = __before.op_dec(), $t101.a[$t101.i]))._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, $t102 ? {a: $t102.a, i: $t102.i} : null)), __k)) {
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
            if (($t104 = (($t103 = this._M_rightmost(), $t103) ? (($t103 = this._M_rightmost(), $t103)).a[(($t103 = this._M_rightmost(), $t103)).i] : null), (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int === $t104 || (__pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int && $t104 && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a === $t104.a && __pos._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i === $t104.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t106 = (($t105 = __after.op_inc(), $t105.a[$t105.i]))._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, $t106 ? {a: $t106.a, i: $t106.i} : null)))) {
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
  _M_insert_node(__x, __p, __z) {
    let $t107, $t108;
    let __insert_left = (((__x !== null) || ($t108 = ($t107 = this._M_end(), $t107), (__p === $t108 || (__p && $t108 && __p.a === $t108.a && __p.i === $t108.i)))) || std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__z ? {a: __z.a, i: __z.i} : null)), std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_header$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"});
    (this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 = ((this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_node_count$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 + 1) >>> 0));
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_lower_bound(__x, __y, __k) {
    let $t109, $t110;
    while ((__x !== null)) {
      if ((!(std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
        (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t109 = std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_left((__x ? {a: __x.a, i: __x.i} : null)), $t109 ? {a: $t109.a, i: $t109.i} : null));
      }
      else {
        __x = ($t110 = std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__x ? {a: __x.a, i: __x.i} : null)), $t110 ? {a: $t110.a, i: $t110.i} : null);
      }
    }
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__y ? {a: __y.a, i: __y.i} : null));
  }
  key_comp__c() {
    return new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char({a: this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, i: "_M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1"});
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
  find(__k) {
    let $t111, $t112;
    let __j = this._M_lower_bound(($t111 = this._M_begin(), $t111 ? {a: $t111.a, i: $t111.i} : null), ($t112 = this._M_end(), $t112 ? {a: $t112.a, i: $t112.i} : null), __k);
    return ((__j.op_eq__c({a: [this.end()], i: 0}) || std_less_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.op_call__c.call(this._M_impl$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._M_key_compare$std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1, __k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int ? {a: __j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.a, i: __j._M_node$std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.i} : null)))) ? this.end() : __j);
  }
  lower_bound(__k) {
    let $t113, $t114;
    return this._M_lower_bound(($t113 = this._M_begin(), $t113 ? {a: $t113.a, i: $t113.i} : null), ($t114 = this._M_end(), $t114 ? {a: $t114.a, i: $t114.i} : null), __k);
  }
  _M_emplace_hint_unique__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_emplace_hint_unique_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__pos, __args_0, __args_1, __args_2) {
    let $t115;
    let __z = ($t115 = this._M_create_node__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_create_node_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2)), $t115 ? {a: $t115.a, i: $t115.i} : null);
    if (true) {
       {
        let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__pos], i: 0}), std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__z ? {a: __z.a, i: __z.i} : null)));
        if (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P) {
          return this._M_insert_node((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.second$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null), (__z ? {a: __z.a, i: __z.i} : null));
        }
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
        return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P ? {a: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.a, i: __res.first$std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.i} : null));
      }
    }
    if (false) {
       {
        this._M_destroy_node((__z ? {a: __z.a, i: __z.i} : null));
      }
    }
  }
  _M_create_node__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_create_node_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__args_0, __args_1, __args_2) {
    let $t116;
    let __tmp = ($t116 = this._M_get_node(), $t116 ? {a: $t116.a, i: $t116.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2));
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
    this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
    this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_a = this; this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.ctj_i = "_M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int";
  }
  __dtor() {
  }
  begin() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.begin.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
  end() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.end.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
  size__c() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.size__c.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
  op_index(__k) {
    let $t117;
    let __i = {v: this.lower_bound(__k)};
    if ((__i.v.op_eq__c({a: [this.end()], i: 0}) || (($t117 = this.key_comp__c(), $t117)).op_call__c(__k, {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}))) {
      __i.v.op_assign({a: [std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype._M_emplace_hint_unique__std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_M_emplace_hint_unique_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: __i, i: "v"}), {a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__k)], i: 0}, {a: [new std_tuple()], i: 0})], i: 0});
    }
    return {a: (__i.v.op_mul__c()).a[(__i.v.op_mul__c()).i], i: "second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"};
  }
  key_comp__c() {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.key_comp__c.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int);
  }
  find(__x) {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.find.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, __x);
  }
  count__c(__x) {
    let $t118;
    return ((((($t118 = std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.find.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, __x), $t118)).op_eq__c({a: [std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.end.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)], i: 0}) ? ((0) | 0) : ((1) | 0))) >>> 0);
  }
  lower_bound(__x) {
    return std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.lower_bound.call(this._M_t$std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int, __x);
  }
}
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base(...$a);
  }
  __init_std_is_convertible_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
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
class std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  __init_std_or_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
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
class std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  __init_std_conditional_value0_std_is_void_std_basic_string_char_std_char_traits_char_std_allocator_char_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0(...$a);
  }
  __init_std_is_convertible_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_uses_alloc_base_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
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
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
  static construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__a, __p, __args_0, __args_1, __args_2) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_S_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
  static _S_construct__std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_S_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv(__a, __p, __args_0, __args_1, __args_2) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.construct__gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple__rv.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
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
class std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_is_lvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_cv_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_volatile_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_const_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value1_std_not_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1 {
  __init_std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_add_rvalue_reference_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value1.prototype.__dtor.call(this);
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
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_is_nary_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_is_nary_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_do_is_nary_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_do_is_nary_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple {
  __init_std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_construct_helper_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_piecewise_construct_t_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_tuple(...$a) { }
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
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
  __dtor() {
  }
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
class std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
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
class std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a);
  }
  __init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a) {
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
class std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int(...$a);
  }
  __init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_int_std_is_array_int(...$a) {
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
class std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_int_std_is_array_int {
  __init_std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_int_std_is_array_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int extends std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a);
  }
  __init_std_and_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int(...$a) {
  }
  __dtor() {
    std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_int_std_is_convertible_std_piecewise_construct_t_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_remove_reference_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
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
class std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
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
class std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int extends std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int(...$a);
  }
  __init_std_and_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_std_tuple_int(...$a) {
  }
  __dtor() {
    std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_tuple_element_value0_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_add_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_c_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_add_c_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_r_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_add_r_ref_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
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
function std_operator_char_std_char_traits_char_std_allocator_char_2(__os, __str) {
  let $t119;
  return std_ostream_insert_char_std_char_traits_char(__os, ($t119 = std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.data__c.call(__str.a[__str.i]), $t119 ? {a: $t119.a, i: $t119.i} : null), ((std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.size__c.call(__str.a[__str.i])) | 0));
}
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
function std_operator__std_basic_istream_char_std_char_traits_char_R_intR(__in, __v) {
  __v.a[__v.i] = Number(BigInt.asIntN(32, std_basic_istream_char_std_char_traits_char.prototype._M_read_int.call(__in.a[__in.i])));
  return __in;
}
function std_operator__std_basic_istream_char_std_char_traits_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__in, __s) {
  std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.clear.call(__s.a[__s.i]);
  std_basic_istream_char_std_char_traits_char.prototype._M_skip_space.call(__in.a[__in.i]);
  let __c = std_basic_istream_char_std_char_traits_char.prototype._M_peek_eof.call(__in.a[__in.i]);
  if ((__c < 0)) {
     {
      std_basic_istream_char_std_char_traits_char.prototype.setstate.call(__in.a[__in.i], std_ios_base.failbit);
      return __in;
    }
  }
  while (((__c >= 0) && (!(((__c === 32) || ((__c >= 9) && (__c <= 13))))))) {
     {
      std_basic_istream_char_std_char_traits_char.prototype._M_get.call(__in.a[__in.i]);
      std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.push_back.call(__s.a[__s.i], (((__c) << 24) >> 24));
      __c = std_basic_istream_char_std_char_traits_char.prototype._M_peek_eof.call(__in.a[__in.i]);
    }
  }
  return __in;
}
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function main() {
  let $t120, $t121, $t122, $t123, $t124, $t125;
  std_operator__std_basic_istream_char_std_char_traits_char_R_intR({a: std_cin, i: "v"}, {a: q, i: "v"});
  while (($t120 = q.v, q.v = (($t120 - 1) | 0), $t120)) {
     {
      let s = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      std_operator__std_basic_istream_char_std_char_traits_char_R_std_basic_string_char_std_char_traits_char_std_allocator_char_R({a: std_cin, i: "v"}, {a: s, i: "v"});
      ($t121 = mp.op_index({a: s, i: "v"}), $t121.a[$t121.i]++);
      std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, ($t122 = mp.op_index({a: s, i: "v"}), $t122.a[$t122.i])), {a: [10, 0], i: 0});
    }
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_long({a: std_cout, i: "v"}, std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.size__c.call(mp)), {a: [32, 0], i: 0}), std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.count__c.call(mp, {a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 98, 99, 0], i: 0})], i: 0})), {a: [32, 0], i: 0}), std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.count__c.call(mp, {a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [122, 122, 122, 0], i: 0})], i: 0})), {a: [10, 0], i: 0});
  let key = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [120, 0], i: 0}, {a: [new std_allocator_char()], i: 0})};
  let ref = mp.op_index({a: key, i: "v"});
  ref.a[ref.i] = (((((ref.a[ref.i]) + (10)) | 0)) | 0);
  let it = std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.find.call(mp, {a: key, i: "v"});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, (($t123 = it.op_arrow__c(), $t123.a[$t123.i])).second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int), {a: [10, 0], i: 0});
  for (let i = std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.begin.call(mp); i.op_ne__c({a: [std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.end.call(mp)], i: 0}); i.op_inc()) {
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char_2({a: std_cout, i: "v"}, {a: ($t124 = i.op_arrow__c(), $t124.a[$t124.i]), i: "first$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int"}), {a: [61, 0], i: 0}), (($t125 = i.op_arrow__c(), $t125.a[$t125.i])).second$std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int), {a: [10, 0], i: 0});
  }
  return 0;
}
function std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_ostream_insert_char_std_char_traits_char(__out, __s, __n) {
  std_basic_ostream_char_std_char_traits_char.prototype._M_put.call(__out.a[__out.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
  return __out;
}
function std_operator_5_char_std_char_traits_char_std_allocator_char(__lhs, __rhs) {
  return (std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.compare__c.call(__lhs.a[__lhs.i], __rhs) < 0);
}
function std_forward_1_std_piecewise_construct_t(__t) {
  return __t;
}
function std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return __t;
}
function std_forward_1_std_tuple(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(__t) {
  return __t;
}
function std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return __t;
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R.__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P.__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char.__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t.__delegate();
}
function std_declval_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R.__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_min_unsigned_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t);
}
function std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R._M_head(__t);
}
function std_operator_6_char_char($p0, $p1) {
  return true;
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
let std_cin = {v: new std_basic_istream_char_std_char_traits_char(0)};
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = new std_Swallow_assign();
let q = {v: 0};
let mp = new std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
main();
