"use strict";
var __ctj_obuf = "";
function __ctj_fmt(v) { for (var n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { var nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; } if (v != null && typeof v === "object" && v._M_dataplus !== undefined) { v = v._M_dataplus._M_p; if (v == null) return ""; } if (v == null) return "0"; if (typeof v === "boolean") return v ? "1" : "0"; if (typeof v === "number") return String(v); if (typeof v === "string") return v; var a = v && v.a, i = v && v.i; if (Array.isArray(v)) { a = v; i = 0; } if (Array.isArray(a)) { var s = ""; for (var k = i | 0; k < a.length && a[k]; k++) s += String.fromCharCode(a[k]); return s; } return String(v); }
function __ctj_write(s) { s = String(s); if (typeof process !== "undefined" && process.stdout && process.stdout.write) { process.stdout.write(s); return; } __ctj_obuf += s; for (;;) { var n = __ctj_obuf.indexOf("\n"); if (n < 0) break; console.log(__ctj_obuf.slice(0, n)); __ctj_obuf = __ctj_obuf.slice(n + 1); } }
function __ctj_flush() { if (__ctj_obuf) { console.log(__ctj_obuf); __ctj_obuf = ""; } }
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
function _ctj_cstr(p, n) {
  if (p == null) return "";
  const a = (p && p.a !== undefined) ? p.a : p;
  const i = (p && p.i !== undefined) ? (p.i | 0) : 0;
  const lim = (n == null) ? 1e9 : (n | 0);
  let s = "";
  for (let k = 0; k < lim; k++) {
    const c = a[i + k];
    if (c === 0 || c === undefined || c === null) break;
    s += typeof c === "number" ? String.fromCharCode(c & 255) : String(c);
  }
  return s;
}
function _ctj_fmt(v) {
  for (let n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { var nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; }
  if (v !== null && typeof v === "object" && v._M_dataplus !== undefined) v = v._M_dataplus._M_p;
  if (v === null || v === undefined) return "0";
  if (typeof v === "boolean") return v ? "1" : "0";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return v;
  if (typeof v === "object") return _ctj_cstr(v);
  return String(v);
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
class std_output_iterator_tag {
  __init_std_output_iterator_tag(...$a) { }
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
class class_157 {
  done;
  started;
  constructor(...$a) {
    this.__init_class_157(...$a);
  }
  __init_class_157(...$a) {
    this.done = 0;
    this.started = 0;
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
class std_locale {
  _M_impl;
  constructor(...$a) {
    this.__init_std_locale(...$a);
  }
  __init_std_locale(...$a) {
    this._M_impl = null;
  }
  __dtor() {
  }
  static none = 0;
  static ctype = 1;
  static numeric = 2;
  static collate = 4;
  static time = 8;
  static monetary = 16;
  static messages = 32;
  static all = 63;
  static _S_classic = null;
  static _S_global = null;
  static _S_categories = null;
  static _S_once = new std_locale();
}
class std_ctype_base {
  constructor(...$a) {
    this.__init_std_ctype_base(...$a);
  }
  __init_std_ctype_base(...$a) {
  }
  __dtor() {
  }
  static upper = 1;
  static lower = 2;
  static alpha = 4;
  static digit = 8;
  static xdigit = 16;
  static space = 32;
  static print = 64;
  static graph = 524;
  static cntrl = 256;
  static punct = 512;
  static alnum = 12;
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
  static to_char_type(__c) {
    return __c.a[__c.i];
  }
  static to_int_type(__c) {
    return (__c.a[__c.i] >>> 0);
  }
  static eq_int_type(__c1, __c2) {
    return (__c1.a[__c1.i] === __c2.a[__c2.i]);
  }
  static eof() {
    return (-(1));
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
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t2 = operatornew__unsigned_long_long((__n * 1)), $t2 ? {a: $t2.a, i: $t2.i} : null);
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
    let $t3;
     {
      this._M_set_sharable();
      this._M_length = __n;
      std_char_traits_char.assign({a: (($t3 = this._M_refdata(), $t3)).a, i: (($t3 = this._M_refdata(), $t3)).i + (__n)}, {a: std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t4, $t5;
    return ($t5 = ($t4 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t4 ? $t4.a : null), i: ($t4 ? $t4.i : 0) + (1)})), $t5 ? {a: $t5.a, i: $t5.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t6, $t7;
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
    let __place = ($t6 = (__alloc.a[__alloc.i]).allocate(__size, {a: [0], i: 0}), $t6 ? {a: $t6.a, i: $t6.i} : null);
    let __p = ($t7 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t7 ? {a: $t7.a, i: $t7.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    (__p.a[__p.i])._M_set_sharable();
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_dispose(__a) {
     {
      if ((gnu_cxx_exchange_and_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), (-(1))) <= 0)) {
         {
          this._M_destroy(__a);
        }
      }
    }
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t8, $t9, $t10, $t11;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0])._M_dataplus;
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t9 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t8 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t8 ? {a: $t8.a, i: $t8.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t9 ? {a: $t9.a, i: $t9.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider({a: ($a[0]).a[($a[0]).i], i: "_M_dataplus"});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
      (($a[0]).a[($a[0]).i])._M_data(($t10 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [this.get_allocator__c()], i: 0}), $t10 ? {a: $t10.a, i: $t10.i} : null));
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t11 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [new std_allocator_char()], i: 0}), $t11 ? {a: $t11.a, i: $t11.i} : null), {a: [new std_allocator_char()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    let $t12;
    (($t12 = this._M_rep__c(), $t12.a[$t12.i]))._M_dispose({a: [this.get_allocator__c()], i: 0});
  }
  _M_data__c() {
    return (this._M_dataplus._M_p ? {a: this._M_dataplus._M_p.a, i: this._M_dataplus._M_p.i} : null);
  }
  _M_data(__p) {
    let $t13;
    return ($t13 = this._M_dataplus._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t13 ? {a: $t13.a, i: $t13.i} : null);
  }
  _M_rep__c() {
    let $t14, $t15;
    return ($t15 = {a: (($t14 = this._M_data__c(), $t14)).a, i: (($t14 = this._M_data__c(), $t14)).i + ((-(1)))}, $t15 ? {a: $t15.a, i: $t15.i} : null);
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === 1)) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  static _M_assign(__d, __n, __c) {
    __c = {v: __c};
    if ((__n === 1)) {
      std_char_traits_char.assign(__d, {a: __c, i: "v"});
    }
    else {
      std_char_traits_char.assign((__d ? {a: __d.a, i: __d.i} : null), __n, __c.v);
    }
  }
  static _S_compare(__n1, __n2) {
    let __d = (__n1 - __n2);
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
    let $t16;
    return (($t16 = this._M_rep__c(), $t16.a[$t16.i]))._M_length;
  }
  static _S_construct(...$a) {
    let $t17, $t18, $t19, $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27;
    if ($a.length >= 3 && $a.length <= 3 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      let __r = ($t17 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create($a[0], (0 >>> 0), $a[2]), $t17 ? {a: $t17.a, i: $t17.i} : null);
      if ($a[0]) {
        std_basic_string_char_std_char_traits_char_std_allocator_char._M_assign(($t18 = (__r.a[__r.i])._M_refdata(), $t18 ? {a: $t18.a, i: $t18.i} : null), $a[0], $a[1]);
      }
      (__r.a[__r.i])._M_set_length_and_sharable($a[0]);
      return ($t19 = (__r.a[__r.i])._M_refdata(), $t19 ? {a: $t19.a, i: $t19.i} : null);
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      return ($t20 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t20 ? {a: $t20.a, i: $t20.i} : null);
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
      let __r = ($t21 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, (0 >>> 0), $a[2]), $t21 ? {a: $t21.a, i: $t21.i} : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t22 = (__r.a[__r.i])._M_refdata(), $t22 ? {a: $t22.a, i: $t22.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t23 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((__len + 1), __len, $a[2]), $t23 ? {a: $t23.a, i: $t23.i} : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t24 = (__another.a[__another.i])._M_refdata(), $t24 ? {a: $t24.a, i: $t24.i} : null), ($t25 = (__r.a[__r.i])._M_refdata(), $t25 ? {a: $t25.a, i: $t25.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t26 = (__r.a[__r.i])._M_refdata(), $t26)).a[(($t26 = (__r.a[__r.i])._M_refdata(), $t26)).i + (__len++)] = ($a[0]).a[($a[0]).i];
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
      return ($t27 = (__r.a[__r.i])._M_refdata(), $t27 ? {a: $t27.a, i: $t27.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  data__c() {
    let $t28;
    return ($t28 = this._M_data__c(), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus"});
  }
  compare__c(__str) {
    let $t29, $t30, $t31;
    let __size = {v: this.size__c()};
    let __osize = {v: (__str.a[__str.i]).size__c()};
    let __len = ($t29 = std_min_unsigned_long_long({a: __size, i: "v"}, {a: __osize, i: "v"}), $t29.a[$t29.i]);
    let __r = std_char_traits_char.compare(($t30 = this._M_data__c(), $t30 ? {a: $t30.a, i: $t30.i} : null), ($t31 = (__str.a[__str.i]).data__c(), $t31 ? {a: $t31.a, i: $t31.i} : null), __len);
    if ((!__r)) {
      __r = std_basic_string_char_std_char_traits_char_std_allocator_char._S_compare(__size.v, __osize.v);
    }
    return __r;
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t32;
    return ($t32 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t32 ? {a: $t32.a, i: $t32.i} : null);
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
  static assign(__c1, __c2) {
    __c1.a[__c1.i] = __c2.a[__c2.i];
  }
  static copy(__s1, __s2, __n) {
    let $t33;
    return ($t33 = wmemcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), Math.trunc((__n) / 4)), $t33 ? {a: $t33.a, i: $t33.i} : null);
  }
  static to_char_type(__c) {
    return __c.a[__c.i];
  }
  static to_int_type(__c) {
    return __c.a[__c.i];
  }
  static eq_int_type(__c1, __c2) {
    return (__c1.a[__c1.i] === __c2.a[__c2.i]);
  }
  static eof() {
    return (-(1));
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
class std_locale_facet {
  _M_refcount;
  constructor(...$a) {
    this.__init_std_locale_facet(...$a);
  }
  __init_std_locale_facet(...$a) {
    this._M_refcount = 0;
  }
  __dtor() {
  }
  static _S_c_locale = null;
  static _S_c_name = null;
  static _S_once = new std_locale_facet();
}
class std_locale_id {
  _M_index;
  constructor(...$a) {
    this.__init_std_locale_id(...$a);
  }
  __init_std_locale_id(...$a) {
    this._M_index = 0;
  }
  __dtor() {
  }
  static _S_refcount = 0;
}
class std_locale_Impl {
  _M_refcount;
  _M_facets;
  _M_facets_size;
  _M_caches;
  _M_names;
  constructor(...$a) {
    this.__init_std_locale_Impl(...$a);
  }
  __init_std_locale_Impl(...$a) {
    this._M_refcount = 0;
    this._M_facets = null;
    this._M_facets_size = 0;
    this._M_caches = null;
    this._M_names = null;
  }
  __dtor() {
  }
  static _S_id_ctype = null;
  static _S_id_numeric = null;
  static _S_id_collate = null;
  static _S_id_time = null;
  static _S_id_monetary = null;
  static _S_id_messages = null;
  static _S_facet_categories = null;
}
class std_ios_base_Callback_list {
  _M_next;
  _M_fn;
  _M_index;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_ios_base_Callback_list(...$a);
  }
  __init_std_ios_base_Callback_list(...$a) {
    this._M_next = null;
    this._M_fn = null;
    this._M_index = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_ios_base_Words {
  _M_pword;
  _M_iword;
  constructor(...$a) {
    this.__init_std_ios_base_Words(...$a);
  }
  __init_std_ios_base_Words(...$a) {
    this._M_pword = null;
    this._M_iword = 0;
  }
  __dtor() {
  }
}
class std_ios_base {
  _M_precision;
  _M_width;
  _M_flags;
  _M_exception;
  _M_streambuf_state;
  _M_callbacks;
  _M_word_zero;
  _M_local_word;
  _M_word_size;
  _M_word;
  _M_ios_locale;
  constructor(...$a) {
    this.__init_std_ios_base(...$a);
  }
  __init_std_ios_base(...$a) {
    this._M_precision = 0;
    this._M_width = 0;
    this._M_flags = 0;
    this._M_exception = 0;
    this._M_streambuf_state = 0;
    this._M_callbacks = null;
    this._M_word_zero = new std_ios_base_Words();
    this._M_word_zero.ctj_a = this; this._M_word_zero.ctj_i = "_M_word_zero";
    this._M_local_word = Array.from({length: 8}, () => new std_ios_base_Words());
    this._M_word_size = 0;
    this._M_word = null;
    this._M_ios_locale = new std_locale();
    this._M_ios_locale.ctj_a = this; this._M_ios_locale.ctj_i = "_M_ios_locale";
  }
  __dtor() {
  }
  flags__c() {
    return this._M_flags;
  }
  flags(__fmtfl) {
    let __old = this._M_flags;
    this._M_flags = __fmtfl;
    return __old;
  }
  static boolalpha = 1;
  static dec = 2;
  static fixed = 4;
  static hex = 8;
  static internal = 16;
  static left = 32;
  static oct = 64;
  static right = 128;
  static scientific = 256;
  static showbase = 512;
  static showpoint = 1024;
  static showpos = 2048;
  static skipws = 4096;
  static unitbuf = 8192;
  static uppercase = 16384;
  static adjustfield = 176;
  static basefield = 74;
  static floatfield = 260;
  static badbit = 1;
  static eofbit = 2;
  static failbit = 4;
  static goodbit = 0;
  static app = 1;
  static ate = 2;
  static binary = 4;
  static in_ = 8;
  static out = 16;
  static trunc = 32;
  static beg = 0;
  static cur = 1;
  static end = 2;
}
class std_ios_base_Init {
  constructor(...$a) {
    this.__init_std_ios_base_Init(...$a);
  }
  __init_std_ios_base_Init(...$a) {
  }
  __dtor() {
  }
  static _S_refcount = 0;
  static _S_synced_with_stdio = false;
}
class std_ctype_char extends std_locale_facet {
  _M_c_locale_ctype;
  _M_del;
  _M_toupper;
  _M_tolower;
  _M_table;
  _M_widen_ok;
  _M_widen;
  _M_narrow;
  _M_narrow_ok;
  constructor(...$a) {
    super();
    this.__init_std_ctype_char(...$a);
  }
  __init_std_ctype_char(...$a) {
    std_ctype_base.prototype.__init_std_ctype_base.call(this);
    this._M_c_locale_ctype = null;
    this._M_del = false;
    this._M_toupper = null;
    this._M_tolower = null;
    this._M_table = null;
    this._M_widen_ok = 0;
    this._M_widen = new Array(256).fill(0);
    this._M_narrow = new Array(256).fill(0);
    this._M_narrow_ok = 0;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
    std_ctype_base.prototype.__dtor.call(this);
  }
  do_widen__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] === null || (typeof $a[2] === "object" && ($a[2].a === undefined || typeof $a[2].a[$a[2].i] !== "object")))) {
      (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[2]), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[0]), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || (typeof $a[3] === "object" && ($a[3].a === undefined || typeof $a[3].a[$a[3].i] !== "object")))) {
      (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[3]), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[0]), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_ctype_char();
  static table_size = 256;
}
for (let $b = std_ctype_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_ctype_char.prototype)) std_ctype_char.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_ctype_char)) std_ctype_char[$k] = $b[$k];
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
class std_basic_ios_char_std_char_traits_char extends std_ios_base {
  _M_tie;
  _M_fill;
  _M_fill_init;
  _M_streambuf;
  _M_ctype;
  _M_num_put;
  _M_num_get;
  constructor(...$a) {
    super();
    this.__init_std_basic_ios_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ios_char_std_char_traits_char(...$a) {
    this._M_tie = null;
    this._M_fill = 0;
    this._M_fill_init = false;
    this._M_streambuf = null;
    this._M_ctype = null;
    this._M_num_put = null;
    this._M_num_get = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  init(...$a) {  }
}
class std_basic_istream_char_std_char_traits_char extends std_basic_ios_char_std_char_traits_char {
  _M_gcount;
  constructor(...$a) {
    super();
    this.__init_std_basic_istream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_istream_char_std_char_traits_char(...$a) {
    this._M_gcount = 0;
    this.init(null);
  }
  __dtor() {
    this._M_gcount = 0;
    std_basic_ios_char_std_char_traits_char.prototype.__dtor.call(this);
  }
}
class std_basic_streambuf_char_std_char_traits_char {
  _M_in_beg;
  _M_in_cur;
  _M_in_end;
  _M_out_beg;
  _M_out_cur;
  _M_out_end;
  _M_buf_locale;
  constructor(...$a) {
    this.__init_std_basic_streambuf_char_std_char_traits_char(...$a);
  }
  __init_std_basic_streambuf_char_std_char_traits_char(...$a) {
    this._M_in_beg = null;
    this._M_in_cur = null;
    this._M_in_end = null;
    this._M_out_beg = null;
    this._M_out_cur = null;
    this._M_out_end = null;
    this._M_buf_locale = new std_locale();
    this._M_buf_locale.ctj_a = this; this._M_buf_locale.ctj_i = "_M_buf_locale";
  }
  __dtor() {
  }
  gptr__c() {
    return (this._M_in_cur ? {a: this._M_in_cur.a, i: this._M_in_cur.i} : null);
  }
  egptr__c() {
    return (this._M_in_end ? {a: this._M_in_end.a, i: this._M_in_end.i} : null);
  }
  gbump(__n) {
    this._M_in_cur.i += (__n);
  }
  pptr__c() {
    return (this._M_out_cur ? {a: this._M_out_cur.a, i: this._M_out_cur.i} : null);
  }
  epptr__c() {
    return (this._M_out_end ? {a: this._M_out_end.a, i: this._M_out_end.i} : null);
  }
  imbue(__loc) {
  }
  setbuf($p0, $p1) {
    return {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
  }
  seekoff($p0, $p1, $p2 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_156((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_156((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t34, $t35, $t36, $t37, $t38, $t39;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t36 = ($t34 = this.egptr__c(), $t34), $t37 = ($t35 = this.gptr__c(), $t35), (($t36 ? $t36.i : 0) - ($t37 ? $t37.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t38 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t38.a[$t38.i]);
            std_char_traits_char.copy((__s ? {a: __s.a, i: __s.i} : null), ($t39 = this.gptr__c(), $t39 ? {a: $t39.a, i: $t39.i} : null), __len);
            __ret += __len;
            __s.i += (__len);
            this.__safe_gbump(__len);
          }
        }
        if ((__ret < __n)) {
           {
            let __c = {v: this.uflow()};
            if ((!(std_char_traits_char.eq_int_type({a: __c, i: "v"}, {a: [std_char_traits_char.eof()], i: 0})))) {
               {
                std_char_traits_char.assign(__s.i++, {a: [std_char_traits_char.to_char_type({a: __c, i: "v"})], i: 0});
                ++__ret;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return __ret;
  }
  underflow() {
    return std_char_traits_char.eof();
  }
  uflow() {
    let __ret = {v: std_char_traits_char.eof()};
    let __testeof = std_char_traits_char.eq_int_type({a: [this.underflow()], i: 0}, {a: __ret, i: "v"});
    if ((!__testeof)) {
       {
        __ret.v = std_char_traits_char.to_int_type(this.gptr__c());
        this.gbump(1);
      }
    }
    return __ret.v;
  }
  pbackfail(__c = std_char_traits_char.eof()) {
    return std_char_traits_char.eof();
  }
  xsputn(__s, __n) {
    let $t40, $t41, $t42, $t43, $t44, $t45;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t42 = ($t40 = this.epptr__c(), $t40), $t43 = ($t41 = this.pptr__c(), $t41), (($t42 ? $t42.i : 0) - ($t43 ? $t43.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t44 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t44.a[$t44.i]);
            std_char_traits_char.copy(($t45 = this.pptr__c(), $t45 ? {a: $t45.a, i: $t45.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
            __ret += __len;
            __s.i += (__len);
            this.__safe_pbump(__len);
          }
        }
        if ((__ret < __n)) {
           {
            let __c = {v: this.overflow(std_char_traits_char.to_int_type(__s))};
            if ((!(std_char_traits_char.eq_int_type({a: __c, i: "v"}, {a: [std_char_traits_char.eof()], i: 0})))) {
               {
                ++__ret;
                ++__s.i;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return __ret;
  }
  overflow(__c = std_char_traits_char.eof()) {
    return std_char_traits_char.eof();
  }
  __safe_gbump(__n) {
    this._M_in_cur.i += (__n);
  }
  __safe_pbump(__n) {
    this._M_out_cur.i += (__n);
  }
}
class std_basic_ostream_char_std_char_traits_char extends std_basic_ios_char_std_char_traits_char {
  constructor(...$a) {
    super();
    this.__init_std_basic_ostream_char_std_char_traits_char(...$a);
  }
  __init_std_basic_ostream_char_std_char_traits_char(...$a) {
    this.init(null);
  }
  __dtor() {
    std_basic_ios_char_std_char_traits_char.prototype.__dtor.call(this);
  }
}
class std_basic_ios_wchar_t_std_char_traits_wchar_t extends std_ios_base {
  _M_tie;
  _M_fill;
  _M_fill_init;
  _M_streambuf;
  _M_ctype;
  _M_num_put;
  _M_num_get;
  constructor(...$a) {
    super();
    this.__init_std_basic_ios_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_basic_ios_wchar_t_std_char_traits_wchar_t(...$a) {
    this._M_tie = null;
    this._M_fill = 0;
    this._M_fill_init = false;
    this._M_streambuf = null;
    this._M_ctype = null;
    this._M_num_put = null;
    this._M_num_get = null;
  }
  __dtor() {
    std_ios_base.prototype.__dtor.call(this);
  }
  init(...$a) {  }
}
class std_basic_istream_wchar_t_std_char_traits_wchar_t extends std_basic_ios_wchar_t_std_char_traits_wchar_t {
  _M_gcount;
  constructor(...$a) {
    super();
    this.__init_std_basic_istream_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_basic_istream_wchar_t_std_char_traits_wchar_t(...$a) {
    this._M_gcount = 0;
    this.init(null);
  }
  __dtor() {
    this._M_gcount = 0;
    std_basic_ios_wchar_t_std_char_traits_wchar_t.prototype.__dtor.call(this);
  }
}
class std_basic_streambuf_wchar_t_std_char_traits_wchar_t {
  _M_in_beg;
  _M_in_cur;
  _M_in_end;
  _M_out_beg;
  _M_out_cur;
  _M_out_end;
  _M_buf_locale;
  constructor(...$a) {
    this.__init_std_basic_streambuf_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_basic_streambuf_wchar_t_std_char_traits_wchar_t(...$a) {
    this._M_in_beg = null;
    this._M_in_cur = null;
    this._M_in_end = null;
    this._M_out_beg = null;
    this._M_out_cur = null;
    this._M_out_end = null;
    this._M_buf_locale = new std_locale();
    this._M_buf_locale.ctj_a = this; this._M_buf_locale.ctj_i = "_M_buf_locale";
  }
  __dtor() {
  }
  gptr__c() {
    return (this._M_in_cur ? {a: this._M_in_cur.a, i: this._M_in_cur.i} : null);
  }
  egptr__c() {
    return (this._M_in_end ? {a: this._M_in_end.a, i: this._M_in_end.i} : null);
  }
  gbump(__n) {
    this._M_in_cur.i += (__n);
  }
  pptr__c() {
    return (this._M_out_cur ? {a: this._M_out_cur.a, i: this._M_out_cur.i} : null);
  }
  epptr__c() {
    return (this._M_out_end ? {a: this._M_out_end.a, i: this._M_out_end.i} : null);
  }
  imbue(__loc) {
  }
  setbuf($p0, $p1) {
    return {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
  }
  seekoff($p0, $p1, $p2 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_156((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_156((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t46, $t47, $t48, $t49, $t50, $t51;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t48 = ($t46 = this.egptr__c(), $t46), $t49 = ($t47 = this.gptr__c(), $t47), (($t48 ? $t48.i : 0) - ($t49 ? $t49.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t50 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t50.a[$t50.i]);
            std_char_traits_wchar_t.copy((__s ? {a: __s.a, i: __s.i} : null), ($t51 = this.gptr__c(), $t51 ? {a: $t51.a, i: $t51.i} : null), __len);
            __ret += __len;
            __s.i += (__len);
            this.__safe_gbump(__len);
          }
        }
        if ((__ret < __n)) {
           {
            let __c = {v: this.uflow()};
            if ((!(std_char_traits_wchar_t.eq_int_type({a: __c, i: "v"}, {a: [std_char_traits_wchar_t.eof()], i: 0})))) {
               {
                std_char_traits_wchar_t.assign(__s.i++, {a: [std_char_traits_wchar_t.to_char_type({a: __c, i: "v"})], i: 0});
                ++__ret;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return __ret;
  }
  underflow() {
    return std_char_traits_wchar_t.eof();
  }
  uflow() {
    let __ret = {v: std_char_traits_wchar_t.eof()};
    let __testeof = std_char_traits_wchar_t.eq_int_type({a: [this.underflow()], i: 0}, {a: __ret, i: "v"});
    if ((!__testeof)) {
       {
        __ret.v = std_char_traits_wchar_t.to_int_type(this.gptr__c());
        this.gbump(1);
      }
    }
    return __ret.v;
  }
  pbackfail(__c = std_char_traits_wchar_t.eof()) {
    return std_char_traits_wchar_t.eof();
  }
  xsputn(__s, __n) {
    let $t52, $t53, $t54, $t55, $t56, $t57;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t54 = ($t52 = this.epptr__c(), $t52), $t55 = ($t53 = this.pptr__c(), $t53), (($t54 ? $t54.i : 0) - ($t55 ? $t55.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t56 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t56.a[$t56.i]);
            std_char_traits_wchar_t.copy(($t57 = this.pptr__c(), $t57 ? {a: $t57.a, i: $t57.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
            __ret += __len;
            __s.i += (__len);
            this.__safe_pbump(__len);
          }
        }
        if ((__ret < __n)) {
           {
            let __c = {v: this.overflow(std_char_traits_wchar_t.to_int_type(__s))};
            if ((!(std_char_traits_wchar_t.eq_int_type({a: __c, i: "v"}, {a: [std_char_traits_wchar_t.eof()], i: 0})))) {
               {
                ++__ret;
                ++__s.i;
              }
            }
            else {
              break;
            }
          }
        }
      }
    }
    return __ret;
  }
  overflow(__c = std_char_traits_wchar_t.eof()) {
    return std_char_traits_wchar_t.eof();
  }
  __safe_gbump(__n) {
    this._M_in_cur.i += (__n);
  }
  __safe_pbump(__n) {
    this._M_out_cur.i += (__n);
  }
}
class std_basic_ostream_wchar_t_std_char_traits_wchar_t extends std_basic_ios_wchar_t_std_char_traits_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_basic_ostream_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_basic_ostream_wchar_t_std_char_traits_wchar_t(...$a) {
    this.init(null);
  }
  __dtor() {
    std_basic_ios_wchar_t_std_char_traits_wchar_t.prototype.__dtor.call(this);
  }
}
class std_fpos_class_156 {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_class_156(...$a);
  }
  __init_std_fpos_class_156(...$a) {
    this._M_off = $a[0];
    this._M_state = new class_156();
    this._M_state.ctj_a = this; this._M_state.ctj_i = "_M_state";
  }
  __dtor() {
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
    let $t58;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t58 = operatornew__unsigned_long_long((__n * 9)), $t58 ? {a: $t58.a, i: $t58.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 9));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
    (__p.a[__p.i]).__dtor();
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
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    this._M_impl = new std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char_Vector_impl($a[0]);
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t59;
    return ($t59 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t59 ? {a: $t59.a, i: $t59.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...[($a[1] === undefined ? ({a: [new std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1])]);
    this.__init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t60, $t61;
    this._M_range_initialize(($t60 = ({a: $a[0], i: 0}), $t60 ? {a: $t60.a, i: $t60.i} : null), ($t61 = ({a: $a[0], i: ($a[0]).length}), $t61 ? {a: $t61.a, i: $t61.i} : null), new std_random_access_iterator_tag());
  }
  __dtor() {
    std_Vector_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  size__c() {
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.max_size(this._M_get_Tp_allocator());
  }
  op_index(__n) {
    return ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)});
  }
  _M_check_len__c(__n, __s) {
    let $t62;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t62 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t62.a[$t62.i]));
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
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
    }
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t63, $t64, $t65, $t66, $t67;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t63 = this._M_allocate(__len), $t63 ? {a: $t63.a, i: $t63.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct({a: this, i: "_M_impl"}, ($t64 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t64 ? {a: $t64.a, i: $t64.i} : null), std_forward_1_std_basic_string_char_std_char_traits_char_std_allocator_char(__args_0));
        __new_finish = null;
        __new_finish = ($t65 = std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t65 ? {a: $t65.a, i: $t65.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.destroy({a: this, i: "_M_impl"}, ($t66 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t66 ? {a: $t66.a, i: $t66.i} : null));
        }
        else {
          std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._M_get_Tp_allocator());
        }
        this._M_deallocate((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
      }
    }
    std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    this._M_deallocate((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), ((this._M_impl._M_end_of_storage ? this._M_impl._M_end_of_storage.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)));
    this._M_impl._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    this._M_impl._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
    this._M_impl._M_end_of_storage = ($t67 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t67 ? {a: $t67.a, i: $t67.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
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
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_initializer_list_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
    let $t68, $t69, $t70;
    return ($t70 = ($t69 = ($t68 = this.begin__c(), $t68), ({a: ($t69 ? $t69.a : null), i: ($t69 ? $t69.i : 0) + (this.size__c())})), $t70 ? {a: $t70.a, i: $t70.i} : null);
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
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    let $t71;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = new std_basic_string_char_std_char_traits_char_std_allocator_char();
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = 0;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_basic_string_char_std_char_traits_char_std_allocator_char(($t71 = std_forward_1_char_P($a[0]), $t71 ? {a: $t71.a, i: $t71.i} : null), {a: [new std_allocator_char()], i: 0});
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
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
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_initializer_list_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
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
    let $t72, $t73, $t74;
    return ($t74 = ($t73 = ($t72 = this.begin__c(), $t72), ({a: ($t73 ? $t73.a : null), i: ($t73 ? $t73.i : 0) + (this.size__c())})), $t74 ? {a: $t74.a, i: $t74.i} : null);
  }
}
class std_remove_cv_char_P {
  __init_std_remove_cv_char_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_char_P {
  __init_std_remove_volatile_char_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_char_P {
  __init_std_remove_const_char_P(...$a) { }
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
class std_is_void_char_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_char_P(...$a);
  }
  __init_std_is_void_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_char_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_char_P(...$a);
  }
  __init_std_is_void_helper_char_P(...$a) {
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
class std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_or_std_is_void_char_P_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
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
class std_conditional_value0_std_is_void_char_P_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_void_char_P_std_or_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_convertible_helper_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_char_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_char_P(...$a);
  }
  __init_std_is_reference_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_char_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_char_P(...$a);
  }
  __init_std_is_lvalue_reference_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_char_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_char_P(...$a);
  }
  __init_std_is_rvalue_reference_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P extends std_is_rvalue_reference_char_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_char_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P {
  __init_std_conditional_value0_std_is_lvalue_reference_char_P_std_is_rvalue_reference_char_P(...$a) { }
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
class std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_reference_char_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_char_P(...$a);
  }
  __init_std_not_std_is_reference_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_char_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_char_P(...$a);
  }
  __init_std_not_std_is_void_char_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P extends std_not_std_is_void_char_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_char_P_std_not_std_is_void_char_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_char_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_char_P_std_not_std_is_reference_char_P {
  __init_std_conditional_value1_std_not_std_is_void_char_P_std_not_std_is_reference_char_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_char_P_value1 {
  __init_std_add_rvalue_reference_helper_char_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_char_P extends std_add_rvalue_reference_helper_char_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_char_P(...$a);
  }
  __init_std_add_rvalue_reference_char_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_char_P_value1.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int extends std_is_convertible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a);
  }
  __init_std_and_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_convertible_int_int(...$a) {
  }
  __dtor() {
    std_is_convertible_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_int_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_convertible_int_int_std_is_convertible_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
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
    return {a: __x.a[__x.i], i: "first"};
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
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
    let $t75;
    this._M_node = ($t75 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t75 ? {a: $t75.a, i: $t75.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t76;
    this._M_node = ($t76 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t76 ? {a: $t76.a, i: $t76.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
  }
}
class std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    this._M_value_field = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($a[0]));
    this._M_value_field.ctj_a = this; this._M_value_field.ctj_i = "_M_value_field";
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
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
    let $t77;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t77 = operatornew__unsigned_long_long((__n * 4)), $t77 ? {a: $t77.a, i: $t77.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t78;
    (__p.a[__p.i] = ($t78 = std_forward_1_int(__args_0), $t78.a[$t78.i]));
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
    let $t79, $t80, $t81;
    return ($t81 = ($t80 = ($t79 = this.begin__c(), $t79), ({a: ($t80 ? $t80.a : null), i: ($t80 ? $t80.i : 0) + (this.size__c())})), $t81 ? {a: $t81.a, i: $t81.i} : null);
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
    let $t82;
    this._M_node = ($t82 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
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
    let $t83;
    this._M_value_field = ($t83 = std_forward_1_int($a[0]), $t83.a[$t83.i]);
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
  op_inc() {
    let $t84;
    this._M_node = ($t84 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t84 ? {a: $t84.a, i: $t84.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t85;
    this._M_node = ($t85 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t85 ? {a: $t85.a, i: $t85.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
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
    let $t86;
    return ($t86 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t86 ? {a: $t86.a, i: $t86.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
  _M_create_storage(__n) {
    let $t87, $t88;
    this._M_impl._M_start = ($t87 = this._M_allocate(__n), $t87 ? {a: $t87.a, i: $t87.i} : null);
    this._M_impl._M_finish = (this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null);
    this._M_impl._M_end_of_storage = ($t88 = ({a: (this._M_impl._M_start ? this._M_impl._M_start.a : null), i: (this._M_impl._M_start ? this._M_impl._M_start.i : 0) + (__n)}), $t88 ? {a: $t88.a, i: $t88.i} : null);
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [(($a[0]).a[($a[0]).i]).size__c(), {a: [gnu_cxx_alloc_traits_std_allocator_int._S_select_on_copy((($a[0]).a[($a[0]).i])._M_get_Tp_allocator__c())], i: 0}] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int) ? [std_move_std_vector_int_std_allocator_int($a[0])] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t89, $t90, $t91;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
      this._M_impl._M_finish = ($t89 = std_uninitialized_copy_a_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int_P_std_allocator_int((($a[0]).a[($a[0]).i]).begin__c(), (($a[0]).a[($a[0]).i]).end__c(), (this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), this._M_get_Tp_allocator()), $t89 ? {a: $t89.a, i: $t89.i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_initializer_list_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize(($t90 = ({a: $a[0], i: 0}), $t90 ? {a: $t90.a, i: $t90.i} : null), ($t91 = ({a: $a[0], i: ($a[0]).length}), $t91 ? {a: $t91.a, i: $t91.i} : null), new std_random_access_iterator_tag());
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
    let $t92;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t92 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t92.a[$t92.i]));
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
    let $t93, $t94, $t95, $t96, $t97;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t93 = this._M_allocate(__len), $t93 ? {a: $t93.a, i: $t93.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t94 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t94 ? {a: $t94.a, i: $t94.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t95 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t95 ? {a: $t95.a, i: $t95.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t96 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t96 ? {a: $t96.a, i: $t96.i} : null));
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
    this._M_impl._M_end_of_storage = ($t97 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t97 ? {a: $t97.a, i: $t97.i} : null);
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
class gnu_cxx_new_allocator_std_vector_int_std_allocator_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t98;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t98 = operatornew__unsigned_long_long((__n * 25)), $t98 ? {a: $t98.a, i: $t98.i} : null);
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
    let $t99;
    return ($t99 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t99 ? {a: $t99.a, i: $t99.i} : null);
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
    let $t100, $t101;
    this._M_range_initialize(($t100 = ({a: $a[0], i: 0}), $t100 ? {a: $t100.a, i: $t100.i} : null), ($t101 = ({a: $a[0], i: ($a[0]).length}), $t101 ? {a: $t101.a, i: $t101.i} : null), new std_random_access_iterator_tag());
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
    let $t102;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t102 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t102.a[$t102.i]));
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
    let $t103, $t104, $t105, $t106, $t107;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t103 = this._M_allocate(__len), $t103 ? {a: $t103.a, i: $t103.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t104 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t104 ? {a: $t104.a, i: $t104.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        __new_finish = null;
        __new_finish = ($t105 = std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t105 ? {a: $t105.a, i: $t105.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t106 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t106 ? {a: $t106.a, i: $t106.i} : null));
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
    this._M_impl._M_end_of_storage = ($t107 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t107 ? {a: $t107.a, i: $t107.i} : null);
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
    let $t108, $t109, $t110;
    return ($t110 = ($t109 = ($t108 = this.begin__c(), $t108), ({a: ($t109 ? $t109.a : null), i: ($t109 ? $t109.i : 0) + (this.size__c())})), $t110 ? {a: $t110.a, i: $t110.i} : null);
  }
}
class std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_bool(...$a) {
    this.first = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int();
    this.first.ctj_a = this; this.first.ctj_i = "first";
    this.second = false;
  }
  __dtor() {
  }
}
class std_declval_protector_char_P {
  constructor(...$a) {
    this.__init_std_declval_protector_char_P(...$a);
  }
  __init_std_declval_protector_char_P(...$a) {
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
class std_remove_reference_char_P {
  __init_std_remove_reference_char_P(...$a) { }
  __dtor() {
  }
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
    let $t111;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t111 = operatornew__unsigned_long_long((__n * 41)), $t111 ? {a: $t111.a, i: $t111.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 41));
  }
  construct__rv(__p, __args_0) {
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
  _M_key_compare;
  _M_header;
  _M_node_count;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_key_compare = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char($a[0]);
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_key_compare = new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char();
      this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
      this._M_header = new std_Rb_tree_node_base();
      this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
      this._M_node_count = 0;
      this._M_initialize();
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header._M_color = 0;
    this._M_header._M_parent = null;
    this._M_header._M_left = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
    this._M_header._M_right = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
  }
}
class std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_less_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int))) {
      this._M_impl = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1($a[0], {a: [new std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($a[1] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[1]))], i: 0});
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_Rb_tree_impl_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_value1();
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
    let $t112;
    return ($t112 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t112 ? {a: $t112.a, i: $t112.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
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
    let $t113, $t114;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t113 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t113)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t114 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t114)).op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t115, $t116, $t117;
    let __x = ($t115 = this._M_begin(), $t115 ? {a: $t115.a, i: $t115.i} : null);
    let __y = ($t116 = this._M_end(), $t116 ? {a: $t116.a, i: $t116.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t117 = (__comp ? std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t117 ? {a: $t117.a, i: $t117.i} : null);
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
    if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__j._M_node ? {a: __j._M_node.a, i: __j._M_node.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: __j, i: "_M_node"}, {a: [null], i: 0});
  }
  _M_get_insert_hint_unique_pos(__position, __k) {
    let $t118, $t119, $t120, $t121, $t122, $t123, $t124, $t125, $t126, $t127, $t128, $t129;
    let __pos = __position._M_const_cast__c();
    if (($t119 = ($t118 = this._M_end(), $t118), (__pos._M_node === $t119 || (__pos._M_node && $t119 && __pos._M_node.a === $t119.a && __pos._M_node.i === $t119.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t120 = this._M_rightmost(), $t121 = ($t120 ? $t120.a[$t120.i] : null), $t121 && $t121.a !== undefined ? {a: $t121.a, i: $t121.i} : $t121)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return this._M_get_insert_unique_pos(__k);
        }
      }
    }
    else {
      if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__pos], i: 0});
          if (($t123 = (($t122 = this._M_leftmost(), $t122) ? (($t122 = this._M_leftmost(), $t122)).a[(($t122 = this._M_leftmost(), $t122)).i] : null), (__pos._M_node === $t123 || (__pos._M_node && $t123 && __pos._M_node.a === $t123.a && __pos._M_node.i === $t123.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t125 = (($t124 = __before.op_dec(), $t124.a[$t124.i]))._M_node, $t125 ? {a: $t125.a, i: $t125.i} : null)), __k)) {
               {
                if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__before._M_node ? {a: __before._M_node.a, i: __before._M_node.i} : null)) === null)) {
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
        if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__pos], i: 0});
            if (($t127 = (($t126 = this._M_rightmost(), $t126) ? (($t126 = this._M_rightmost(), $t126)).a[(($t126 = this._M_rightmost(), $t126)).i] : null), (__pos._M_node === $t127 || (__pos._M_node && $t127 && __pos._M_node.a === $t127.a && __pos._M_node.i === $t127.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key(($t129 = (($t128 = __after.op_inc(), $t128.a[$t128.i]))._M_node, $t129 ? {a: $t129.a, i: $t129.i} : null)))) {
                 {
                  if ((std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_right((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)) === null)) {
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
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null));
  }
  size__c() {
    return this._M_impl._M_node_count;
  }
  _M_insert_unique(__first, __last) {
    for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
      this._M_insert_unique___rv(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [this.end()], i: 0}), __first);
    }
  }
  _M_insert_unique___rv(__position, __v) {
    let $t130;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [__position], i: 0}), (($t130 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t130)).op_call__c(__v));
    if (__res.second) {
      return this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__v));
    }
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t131, $t132, $t133, $t134;
    let __insert_left = (((__x !== null) || ($t132 = ($t131 = this._M_end(), $t131), (__p === $t132 || (__p && $t132 && __p.a === $t132.a && __p.i === $t132.i)))) || this._M_impl._M_key_compare.op_call__c((($t133 = new std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(), $t133)).op_call__c(__v), std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t134 = this._M_create_node__rv(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__v)), $t134 ? {a: $t134.a, i: $t134.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t135;
    let __tmp = ($t135 = this._M_get_node(), $t135 ? {a: $t135.a, i: $t135.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
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
  _M_t;
  constructor(...$a) {
    this.__init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    let $t136, $t137;
    this._M_t = new std_Rb_tree_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_Select1st_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($a[1] === undefined ? ({a: [new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t136 = ({a: $a[0], i: 0}), $t136 ? {a: $t136.a, i: $t136.i} : null), ($t137 = ({a: $a[0], i: ($a[0]).length}), $t137 ? {a: $t137.a, i: $t137.i} : null));
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
class std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Rb_tree_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null));
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
    let $t138;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t138 = operatornew__unsigned_long_long((__n * 32)), $t138 ? {a: $t138.a, i: $t138.i} : null);
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
    let $t139;
    return ($t139 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t139 ? {a: $t139.a, i: $t139.i} : null);
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
    let $t140, $t141;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t140 = new std_Identity_int(), $t140)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t141 = new std_Identity_int(), $t141)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t142, $t143, $t144;
    let __x = ($t142 = this._M_begin(), $t142 ? {a: $t142.a, i: $t142.i} : null);
    let __y = ($t143 = this._M_end(), $t143 ? {a: $t143.a, i: $t143.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t144 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t144 ? {a: $t144.a, i: $t144.i} : null);
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
    let $t145, $t146, $t147, $t148, $t149, $t150, $t151, $t152, $t153, $t154, $t155, $t156;
    let __pos = __position._M_const_cast__c();
    if (($t146 = ($t145 = this._M_end(), $t145), (__pos._M_node === $t146 || (__pos._M_node && $t146 && __pos._M_node.a === $t146.a && __pos._M_node.i === $t146.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t147 = this._M_rightmost(), $t148 = ($t147 ? $t147.a[$t147.i] : null), $t148 && $t148.a !== undefined ? {a: $t148.a, i: $t148.i} : $t148)), __k))) {
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
          if (($t150 = (($t149 = this._M_leftmost(), $t149) ? (($t149 = this._M_leftmost(), $t149)).a[(($t149 = this._M_leftmost(), $t149)).i] : null), (__pos._M_node === $t150 || (__pos._M_node && $t150 && __pos._M_node.a === $t150.a && __pos._M_node.i === $t150.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t152 = (($t151 = __before.op_dec(), $t151.a[$t151.i]))._M_node, $t152 ? {a: $t152.a, i: $t152.i} : null)), __k)) {
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
            if (($t154 = (($t153 = this._M_rightmost(), $t153) ? (($t153 = this._M_rightmost(), $t153)).a[(($t153 = this._M_rightmost(), $t153)).i] : null), (__pos._M_node === $t154 || (__pos._M_node && $t154 && __pos._M_node.a === $t154.a && __pos._M_node.i === $t154.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t156 = (($t155 = __after.op_inc(), $t155.a[$t155.i]))._M_node, $t156 ? {a: $t156.a, i: $t156.i} : null)))) {
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
    let $t157;
    let __res = this._M_get_insert_hint_unique_pos(new std_Rb_tree_const_iterator_int({a: [__position], i: 0}), (($t157 = new std_Identity_int(), $t157)).op_call__c(__v));
    if (__res.second) {
      return this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_int(__v));
    }
    return new std_Rb_tree_iterator_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t158, $t159, $t160, $t161;
    let __insert_left = (((__x !== null) || ($t159 = ($t158 = this._M_end(), $t158), (__p === $t159 || (__p && $t159 && __p.a === $t159.a && __p.i === $t159.i)))) || this._M_impl._M_key_compare.op_call__c((($t160 = new std_Identity_int(), $t160)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t161 = this._M_create_node__rv(std_forward_1_int(__v)), $t161 ? {a: $t161.a, i: $t161.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t162;
    let __tmp = ($t162 = this._M_get_node(), $t162 ? {a: $t162.a, i: $t162.i} : null);
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
    let $t163, $t164;
    this._M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t163 = ({a: $a[0], i: 0}), $t163 ? {a: $t163.a, i: $t163.i} : null), ($t164 = ({a: $a[0], i: ($a[0]).length}), $t164 ? {a: $t164.a, i: $t164.i} : null));
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
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    let $t165, $t166, $t167, $t168, $t169, $t170, $t171, $t172;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t165 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[0]), $t166 = ($t165 ? $t165.a[$t165.i] : null), $t166 && $t166.a !== undefined ? {a: $t166.a, i: $t166.i} : $t166);
      this.second = ($t167 = std_forward_1_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P($a[1]), $t168 = ($t167 ? $t167.a[$t167.i] : null), $t168 && $t168.a !== undefined ? {a: $t168.a, i: $t168.i} : $t168);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t169 = std_forward_1_std_Rb_tree_node_int_P($a[0]), $t170 = ($t169 ? $t169.a[$t169.i] : null), $t170 && $t170.a !== undefined ? {a: $t170.a, i: $t170.i} : $t170);
      this.second = ($t171 = std_forward_1_std_Rb_tree_node_int_P($a[1]), $t172 = ($t171 ? $t171.a[$t171.i] : null), $t172 && $t172.a !== undefined ? {a: $t172.a, i: $t172.i} : $t172);
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
class std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_extent_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
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
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a);
  }
  __init_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P(...$a) {
    let $t173;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P)) {
      this._M_current = ($t173 = (($a[0]).a[($a[0]).i]).base__c(), $t173 ? {a: $t173.a, i: $t173.i} : null);
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
    return std_move_std_basic_string_char_std_char_traits_char_std_allocator_char(this._M_current);
  }
  op_inc() {
    ++this._M_current.i;
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
  static construct__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
  }
  static _S_construct__rv(__a, __p, __args_0) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__args_0));
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
class std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
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
    let $t174;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_std_vector_int_std_allocator_int_P)) {
      this._M_current = ($t174 = (($a[0]).a[($a[0]).i]).base__c(), $t174 ? {a: $t174.a, i: $t174.i} : null);
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
    let $t175;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t175 = (($a[0]).a[($a[0]).i]).base__c(), $t175 ? {a: $t175.a, i: $t175.i} : null);
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
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t176, $t177;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t176 = (($a[0]).a[($a[0]).i]).base__c(), $t177 = ($t176 ? $t176.a[$t176.i] : null), $t177 && $t177.a !== undefined ? {a: $t177.a, i: $t177.i} : $t177);
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
class std_iterator_std_output_iterator_tag_void_void_void_void {
  constructor(...$a) {
    this.__init_std_iterator_std_output_iterator_tag_void_void_void_void(...$a);
  }
  __init_std_iterator_std_output_iterator_tag_void_void_void_void(...$a) {
  }
  __dtor() {
  }
}
class std_ostreambuf_iterator_char_std_char_traits_char extends std_iterator_std_output_iterator_tag_void_void_void_void {
  _M_sbuf;
  _M_failed;
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_ostreambuf_iterator_char_std_char_traits_char(...$a);
  }
  __init_std_ostreambuf_iterator_char_std_char_traits_char(...$a) {
    this._M_sbuf = (((($a[0]).a[($a[0]).i])._M_sbuf) ? {a: ((($a[0]).a[($a[0]).i])._M_sbuf).a, i: ((($a[0]).a[($a[0]).i])._M_sbuf).i} : null);
    this._M_failed = (($a[0]).a[($a[0]).i])._M_failed;
  }
  __dtor() {
    std_iterator_std_output_iterator_tag_void_void_void_void.prototype.__dtor.call(this);
  }
  op_assign(o) {
    this.__assign_std_iterator_std_output_iterator_tag_void_void_void_void.call(this, $p0);
    this._M_sbuf = (((o.a[o.i])._M_sbuf) ? {a: ((o.a[o.i])._M_sbuf).a, i: ((o.a[o.i])._M_sbuf).i} : null);
    this._M_failed = (o.a[o.i])._M_failed;
    return {a: [this], i: 0};
  }
}
class std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char extends std_locale_facet {
  constructor(...$a) {
    super();
    this.__init_std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char(...$a);
  }
  __init_std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char(...$a) {
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  do_put__c(...$a) {
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      let __fmt = (~((std_ios_base.basefield | std_ios_base.uppercase)));
      (($a[1]).a[($a[1]).i]).flags(((__flags & __fmt) | (std_ios_base.hex | std_ios_base.showbase)));
      ($a[0]).op_assign({a: [this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], ($a[3] >>> 0))], i: 0});
      (($a[1]).a[($a[1]).i]).flags(__flags);
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_num_put_char_std_ostreambuf_iterator_char_std_char_traits_char();
}
class std_iterator_std_input_iterator_tag_char_long_long_char_P_char {
  constructor(...$a) {
    this.__init_std_iterator_std_input_iterator_tag_char_long_long_char_P_char(...$a);
  }
  __init_std_iterator_std_input_iterator_tag_char_long_long_char_P_char(...$a) {
  }
  __dtor() {
  }
}
class std_istreambuf_iterator_char_std_char_traits_char extends std_iterator_std_input_iterator_tag_char_long_long_char_P_char {
  _M_sbuf;
  _M_c;
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_istreambuf_iterator_char_std_char_traits_char(...$a);
  }
  __init_std_istreambuf_iterator_char_std_char_traits_char(...$a) {
    this._M_sbuf = (((($a[0]).a[($a[0]).i])._M_sbuf) ? {a: ((($a[0]).a[($a[0]).i])._M_sbuf).a, i: ((($a[0]).a[($a[0]).i])._M_sbuf).i} : null);
    this._M_c = (($a[0]).a[($a[0]).i])._M_c;
  }
  __dtor() {
    std_iterator_std_input_iterator_tag_char_long_long_char_P_char.prototype.__dtor.call(this);
  }
  op_assign(o) {
    this.__assign_std_iterator_std_input_iterator_tag_char_long_long_char_P_char.call(this, $p0);
    this._M_sbuf = (((o.a[o.i])._M_sbuf) ? {a: ((o.a[o.i])._M_sbuf).a, i: ((o.a[o.i])._M_sbuf).i} : null);
    this._M_c = (o.a[o.i])._M_c;
    return {a: [this], i: 0};
  }
}
class std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char extends std_locale_facet {
  constructor(...$a) {
    super();
    this.__init_std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char(...$a);
  }
  __init_std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char(...$a) {
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  do_get__c(...$a) {
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __fmt = (($a[2]).a[($a[2]).i]).flags__c();
      (($a[2]).a[($a[2]).i]).flags(((__fmt & (~std_ios_base.basefield)) | std_ios_base.hex));
      let __ul = {v: 0};
      ($a[0]).op_assign({a: [this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __ul, i: "v"})], i: 0});
      (($a[2]).a[($a[2]).i]).flags(__fmt);
      ($a[4]).a[($a[4]).i] = (__ul.v ? {a: __ul.v.a, i: __ul.v.i} : null);
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_num_get_char_std_istreambuf_iterator_char_std_char_traits_char();
}
class std_ctype_abstract_base_wchar_t extends std_locale_facet {
  constructor(...$a) {
    super();
    this.__init_std_ctype_abstract_base_wchar_t(...$a);
  }
  __init_std_ctype_abstract_base_wchar_t(...$a) {
    std_ctype_base.prototype.__init_std_ctype_base.call(this);
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
    std_ctype_base.prototype.__dtor.call(this);
  }
  do_is__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] === null || typeof $a[2] === "object")) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_scan_is__c(__m, __lo, __hi) {
    throw new Error("pure virtual called");
  }
  do_scan_not__c(__m, __lo, __hi) {
    throw new Error("pure virtual called");
  }
  do_toupper__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object")))) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_tolower__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object")))) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_widen__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] === null || (typeof $a[2] === "object" && ($a[2].a === undefined || typeof $a[2].a[$a[2].i] !== "object")))) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || (typeof $a[3] === "object" && ($a[3].a === undefined || typeof $a[3].a[$a[3].i] !== "object")))) {
    }
    else { throw new Error("no matching overload"); }
  }
}
for (let $b = std_ctype_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_ctype_abstract_base_wchar_t.prototype)) std_ctype_abstract_base_wchar_t.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_ctype_abstract_base_wchar_t)) std_ctype_abstract_base_wchar_t[$k] = $b[$k];
  }
}
class std_ctype_wchar_t extends std_ctype_abstract_base_wchar_t {
  _M_c_locale_ctype;
  _M_narrow_ok;
  _M_narrow;
  _M_widen;
  _M_bit;
  _M_wmask;
  constructor(...$a) {
    super();
    this.__init_std_ctype_wchar_t(...$a);
  }
  __init_std_ctype_wchar_t(...$a) {
    this._M_c_locale_ctype = null;
    this._M_narrow_ok = false;
    this._M_narrow = new Array(128).fill(0);
    this._M_widen = new Array(256).fill(0);
    this._M_bit = new Array(16).fill(0);
    this._M_wmask = new Array(16).fill(0);
  }
  __dtor() {
    std_ctype_abstract_base_wchar_t.prototype.__dtor.call(this);
  }
  static id = new std_ctype_wchar_t();
}
class std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_iterator_std_output_iterator_tag_void_void_void_void {
  _M_sbuf;
  _M_failed;
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
    this._M_sbuf = (((($a[0]).a[($a[0]).i])._M_sbuf) ? {a: ((($a[0]).a[($a[0]).i])._M_sbuf).a, i: ((($a[0]).a[($a[0]).i])._M_sbuf).i} : null);
    this._M_failed = (($a[0]).a[($a[0]).i])._M_failed;
  }
  __dtor() {
    std_iterator_std_output_iterator_tag_void_void_void_void.prototype.__dtor.call(this);
  }
  op_assign(o) {
    this.__assign_std_iterator_std_output_iterator_tag_void_void_void_void.call(this, $p0);
    this._M_sbuf = (((o.a[o.i])._M_sbuf) ? {a: ((o.a[o.i])._M_sbuf).a, i: ((o.a[o.i])._M_sbuf).i} : null);
    this._M_failed = (o.a[o.i])._M_failed;
    return {a: [this], i: 0};
  }
}
class std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_locale_facet {
  constructor(...$a) {
    super();
    this.__init_std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  do_put__c(...$a) {
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      let __fmt = (~((std_ios_base.basefield | std_ios_base.uppercase)));
      (($a[1]).a[($a[1]).i]).flags(((__flags & __fmt) | (std_ios_base.hex | std_ios_base.showbase)));
      ($a[0]).op_assign({a: [this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], ($a[3] >>> 0))], i: 0});
      (($a[1]).a[($a[1]).i]).flags(__flags);
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_num_put_wchar_t_std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t();
}
class std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t {
  constructor(...$a) {
    this.__init_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t(...$a);
  }
  __init_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t(...$a) {
  }
  __dtor() {
  }
}
class std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t {
  _M_sbuf;
  _M_c;
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
    this._M_sbuf = (((($a[0]).a[($a[0]).i])._M_sbuf) ? {a: ((($a[0]).a[($a[0]).i])._M_sbuf).a, i: ((($a[0]).a[($a[0]).i])._M_sbuf).i} : null);
    this._M_c = (($a[0]).a[($a[0]).i])._M_c;
  }
  __dtor() {
    std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t.prototype.__dtor.call(this);
  }
  op_assign(o) {
    this.__assign_std_iterator_std_input_iterator_tag_wchar_t_long_long_wchar_t_P_wchar_t.call(this, $p0);
    this._M_sbuf = (((o.a[o.i])._M_sbuf) ? {a: ((o.a[o.i])._M_sbuf).a, i: ((o.a[o.i])._M_sbuf).i} : null);
    this._M_c = (o.a[o.i])._M_c;
    return {a: [this], i: 0};
  }
}
class std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t extends std_locale_facet {
  constructor(...$a) {
    super();
    this.__init_std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a);
  }
  __init_std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t(...$a) {
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  do_get__c(...$a) {
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __fmt = (($a[2]).a[($a[2]).i]).flags__c();
      (($a[2]).a[($a[2]).i]).flags(((__fmt & (~std_ios_base.basefield)) | std_ios_base.hex));
      let __ul = {v: 0};
      ($a[0]).op_assign({a: [this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __ul, i: "v"})], i: 0});
      (($a[2]).a[($a[2]).i]).flags(__fmt);
      ($a[4]).a[($a[4]).i] = (__ul.v ? {a: __ul.v.a, i: __ul.v.i} : null);
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t();
}
class gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long {
  __init_gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function gnu_cxx_exchange_and_add_single(__mem, __val) {
  let __result = __mem.a[__mem.i];
  __mem.a[__mem.i] += __val;
  return __result;
}
function gnu_cxx_exchange_and_add_dispatch(__mem, __val) {
  return gnu_cxx_exchange_and_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function std_swap_int_P(__a, __b) {
  let $t178, $t179, $t180, $t181, $t182, $t183;
  let __tmp = {v: ($t178 = std_move_int_P(__a), $t179 = ($t178 ? $t178.a[$t178.i] : null), $t179 && $t179.a !== undefined ? {a: $t179.a, i: $t179.i} : $t179)};
  __a.a[__a.i] = ($t180 = std_move_int_P(__b), $t181 = ($t180 ? $t180.a[$t180.i] : null), $t181 && $t181.a !== undefined ? {a: $t181.a, i: $t181.i} : $t181);
  __b.a[__b.i] = ($t182 = std_move_int_P({a: __tmp, i: "v"}), $t183 = ($t182 ? $t182.a[$t182.i] : null), $t183 && $t183.a !== undefined ? {a: $t183.a, i: $t183.i} : $t183);
}
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function main() {
  let $t184, $t185, $t186, $t187, $t188, $t189, $t190, $t191, $t192, $t193, $t194, $t195, $t196, $t197;
  let v = new std_vector_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char([new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 0], i: 0}), new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], {a: [new std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0});
  ($t186 = ($t185 = ($t184 = (__ctj_write(__ctj_fmt(v.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t184), __ctj_write(__ctj_fmt(v.op_index(1))), $t185), __ctj_write("\n"), $t186);
  let m = new std_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_less_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int([new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [120, 0], i: 0}, {a: [1], i: 0}), new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [121, 0], i: 0}, {a: [2], i: 0})], {a: [new std_less_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0});
  for (let $b0 = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [m.begin()], i: 0}), $e0 = new std_Rb_tree_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [m.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    ($t189 = ($t188 = ($t187 = (__ctj_write(__ctj_fmt((kv.a[kv.i]).first)), std_cout), __ctj_write(__ctj_fmt([58, 0])), $t187), __ctj_write(__ctj_fmt((kv.a[kv.i]).second)), $t188), __ctj_write(__ctj_fmt([32, 0])), $t189);
  }
  (__ctj_write("\n"), std_cout);
  let s = new std_set_int_std_less_int_std_allocator_int([5, 6, 5], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  for (let $b1 = new std_Rb_tree_const_iterator_int({a: [s.begin__c()], i: 0}), $e1 = new std_Rb_tree_const_iterator_int({a: [s.end__c()], i: 0}); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    (__ctj_write(__ctj_fmt(x)), std_cout);
  }
  (__ctj_write("\n"), std_cout);
  let vv = new std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int([new std_vector_int_std_allocator_int([1, 2], {a: [new std_allocator_int()], i: 0}), new std_vector_int_std_allocator_int([3], {a: [new std_allocator_int()], i: 0})], {a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0});
  ($t197 = ($t196 = ($t195 = ($t194 = ($t193 = (__ctj_write(__ctj_fmt(vv.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t193), __ctj_write(__ctj_fmt((($t192 = vv.op_index(0), $t192.a[$t192.i])).size__c())), $t194), __ctj_write(__ctj_fmt([32, 0])), $t195), __ctj_write(__ctj_fmt(($t190 = (($t191 = vv.op_index(1), $t191.a[$t191.i])).op_index(0), $t190.a[$t190.i]))), $t196), __ctj_write("\n"), $t197);
}
function std_min_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_min_unsigned_long_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_declval_char_P() {
  return std_declval_protector_char_P.__delegate();
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
function std_forward_1_char_P(__t) {
  return __t;
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
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P(__x, __y) {
  return (!(std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_1030(__x, __y)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P(__x, __y) {
  return (!(std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030(__x, __y)));
}
function std_operator_3_int_P_int_P(__x, __y) {
  return (!(std_operator_3_int_P_int_P_1030(__x, __y)));
}
function std_uninitialized_move_if_noexcept_a_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(__first, __last, __result, __alloc) {
  let $t198;
  return ($t198 = std_uninitialized_copy_a_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_move_iterator_std_basic_string_char_std_char_traits_char_std_allocator_char_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t198 ? {a: $t198.a, i: $t198.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t199;
  return ($t199 = std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t199 ? {a: $t199.a, i: $t199.i} : null);
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t200;
  return ($t200 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t200 ? {a: $t200.a, i: $t200.i} : null);
}
function std_Destroy_2_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char(__first, __last, __alloc) {
  let $t201;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.destroy(__alloc, ($t201 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char(__first), $t201 ? {a: $t201.a, i: $t201.i} : null));
  }
}
function std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __alloc) {
  let $t202;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy(__alloc, ($t202 = std_addressof_std_vector_int_std_allocator_int(__first), $t202 ? {a: $t202.a, i: $t202.i} : null));
  }
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t203;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t203 = std_addressof_int(__first), $t203 ? {a: $t203.a, i: $t203.i} : null));
  }
}
function std_max_unsigned_long_long(__a, __b) {
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
  let $t204;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_basic_string_char_std_char_traits_char_std_allocator_char.construct(__alloc, ($t204 = std_addressof_std_basic_string_char_std_char_traits_char_std_allocator_char(__cur), $t204 ? {a: $t204.a, i: $t204.i} : null), __first.op_mul__c());
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
  let $t205;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct(__alloc, ($t205 = std_addressof_std_vector_int_std_allocator_int(__cur), $t205 ? {a: $t205.a, i: $t205.i} : null), __first.op_mul__c());
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
  let $t206;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t206 = std_addressof_int(__cur), $t206 ? {a: $t206.a, i: $t206.i} : null), __first.op_mul__c());
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
  let $t207;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t207 = std_addressof_int(__cur), $t207 ? {a: $t207.a, i: $t207.i} : null), __first.op_mul__c());
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
  return ((__lhs.a[__lhs.i]).compare__c(__rhs) < 0);
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
function std_operator_3_std_basic_string_char_std_char_traits_char_std_allocator_char_P_std_basic_string_char_std_char_traits_char_std_allocator_char_P_1030(__x, __y) {
  let $t208, $t209, $t210, $t211;
  return ($t210 = ($t208 = (__x.a[__x.i]).base__c(), $t208), $t211 = ($t209 = (__y.a[__y.i]).base__c(), $t209), ($t210 === $t211 || ($t210 && $t211 && $t210.a === $t211.a && $t210.i === $t211.i)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030(__x, __y) {
  let $t212, $t213, $t214, $t215;
  return ($t214 = ($t212 = (__x.a[__x.i]).base__c(), $t212), $t215 = ($t213 = (__y.a[__y.i]).base__c(), $t213), ($t214 === $t215 || ($t214 && $t215 && $t214.a === $t215.a && $t214.i === $t215.i)));
}
function std_operator_3_int_P_int_P_1030(__x, __y) {
  let $t216, $t217, $t218, $t219;
  return ($t218 = ($t216 = (__x.a[__x.i]).base__c(), $t216), $t219 = ($t217 = (__y.a[__y.i]).base__c(), $t217), ($t218 === $t219 || ($t218 && $t219 && $t218.a === $t219.a && $t218.i === $t219.i)));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t220, $t221, $t222, $t223, $t224, $t225;
  return ($t224 = (($t222 = (__lhs.a[__lhs.i]).base__c(), $t222) ? (($t222 = (__lhs.a[__lhs.i]).base__c(), $t222)).a[(($t222 = (__lhs.a[__lhs.i]).base__c(), $t222)).i] : null), $t225 = (($t223 = (__rhs.a[__rhs.i]).base__c(), $t223) ? (($t223 = (__rhs.a[__rhs.i]).base__c(), $t223)).a[(($t223 = (__rhs.a[__rhs.i]).base__c(), $t223)).i] : null), (!($t224 === $t225 || ($t224 && $t225 && $t224.a === $t225.a && $t224.i === $t225.i))));
}
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
let std_cout = {};
main();
__ctj_flush();
