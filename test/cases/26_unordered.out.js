"use strict";
var __ctj_obuf = "";
function __ctj_fmt(v) { for (var n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { var nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; } if (v != null && typeof v === "object" && v._M_dataplus !== undefined) { v = v._M_dataplus._M_p; if (v == null) return ""; } if (v == null) return "0"; if (typeof v === "boolean") return v ? "1" : "0"; if (typeof v === "number") return String(v); if (typeof v === "string") return v; var a = v && v.a, i = v && v.i; if (Array.isArray(v)) { a = v; i = 0; } if (Array.isArray(a)) { var s = ""; for (var k = i | 0; k < a.length && a[k]; k++) s += String.fromCharCode(a[k]); return s; } return String(v); }
function __ctj_write(s) { s = String(s); if (typeof process !== "undefined" && process.stdout && process.stdout.write) { process.stdout.write(s); return; } __ctj_obuf += s; for (;;) { var n = __ctj_obuf.indexOf("\n"); if (n < 0) break; console.log(__ctj_obuf.slice(0, n)); __ctj_obuf = __ctj_obuf.slice(n + 1); } }
function __ctj_flush() { if (__ctj_obuf) { console.log(__ctj_obuf); __ctj_obuf = ""; } }
const PRIME_BUCKETS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 103, 109, 113, 127, 137, 139, 149, 157, 167, 179, 193, 199, 211, 227, 241, 257, 277, 293, 313, 337, 359, 383, 409, 439, 467, 503, 541, 577, 619, 661, 709, 761, 823, 887, 953, 1031, 1109, 1193, 1289, 1381, 1493, 1613, 1741, 1879, 2029, 2179, 2357, 2549, 2753, 2971, 3209, 3469, 3739, 4027, 4349, 4703, 5087, 5503, 5953, 6427, 6949, 7517, 8123, 8783, 9497, 10273, 11113, 12011, 12983, 14033, 15173, 16411, 17749, 19183, 20753, 22447, 24281, 26267, 28411, 30727, 33223, 35933, 38873, 42043, 45481, 49201, 53201, 57557, 62233, 67307, 72817, 78779, 85229, 92203, 99733, 107897, 116731, 126271, 136607, 147793, 159871, 172933, 187091, 202409, 218971, 236897, 256279, 277261, 299951, 324503, 351061, 379787, 410857, 444487, 480881, 520241, 562841, 608903, 658753, 712697, 771049, 834181, 902483, 976369, 1056323, 1142821, 1236397, 1337629, 1447153, 1565659, 1693859, 1832561, 1982627, 2144977, 2320627, 2510653, 2716249, 2938679, 3179303, 3439651, 3721303, 4026031, 4355707, 4712381, 5098259, 5515729, 5967347, 6456007, 6984629, 7556579, 8175383, 8844859, 9569143, 10352717, 11200489, 12117689, 13109983, 14183539, 15345007, 16601593, 17961079, 19431899, 21023161, 22744717, 24607243, 26622317, 28802401, 31160981, 33712729, 36473443, 39460231, 42691603, 46187573, 49969847, 54061849, 58488943, 63278561, 68460391, 74066549, 80131819, 86693767, 93793069, 101473717, 109783337, 118773397, 128499677, 139022417, 150406843, 162723577, 176048909, 190465427, 206062531, 222936881, 241193053, 260944219, 282312799, 305431229, 330442829, 357502601, 386778277, 418451333, 452718089, 489790921, 529899637, 573292817, 620239453, 671030513, 725980837, 785430967, 849749479, 919334987, 994618837, 1076067617, 1164186217, 1259520799, 1362662261, 1474249943, 1594975441, 1725587117, 1866894511, 2019773507, 2185171673, 2364114217, 2557710269, 2767159799, 2993761039, 3238918481, 3504151727, 3791104843, 4101556399, 4294967291, 6442450933, 8589934583, 12884901857, 17179869143, 25769803693, 34359738337, 51539607367, 68719476731, 103079215087, 137438953447, 206158430123, 274877906899, 412316860387, 549755813881, 824633720731, 1099511627689, 1649267441579, 2199023255531, 3298534883309, 4398046511093, 6597069766607, 8796093022151, 13194139533241, 17592186044399, 26388279066581, 35184372088777, 52776558133177, 70368744177643, 105553116266399, 140737488355213, 211106232532861, 281474976710597, 562949953421231, 1125899906842597, 2251799813685119, 4503599627370449, 9007199254740881, 18014398509481952, 36028797018963910, 72057594037927930, 144115188075855860, 288230376151711700, 576460752303423400, 1152921504606846800, 2305843009213694000, 4611686018427388000, 9223372036854776000, 18446744073709552000];
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
class std_do_is_destructible_impl {
  __init_std_do_is_destructible_impl(...$a) { }
  __dtor() {
  }
}
class std_do_is_default_constructible_impl {
  __init_std_do_is_default_constructible_impl(...$a) { }
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
class class_156 {
  done;
  started;
  constructor(...$a) {
    this.__init_class_156(...$a);
  }
  __init_class_156(...$a) {
    this.done = 0;
    this.started = 0;
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
class std_Hash_impl {
  __init_std_Hash_impl(...$a) { }
  __dtor() {
  }
  static hash(__ptr, __clength, __seed = (3339675911 >>> 0)) {
    return std_Hash_bytes((__ptr ? {a: __ptr.a, i: __ptr.i} : null), __clength, __seed);
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
  static find(__s, __n, __a) {
    let $t1;
    return ($t1 = (() => { throw new Error("unresolved __builtin_memchr"); })(), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  static move(__s1, __s2, __n) {
    let $t2;
    return ($t2 = (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  static copy(__s1, __s2, __n) {
    let $t3;
    return ($t3 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t3 ? {a: $t3.a, i: $t3.i} : null);
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
    let $t4;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t4 = operatornew__unsigned_long_long((__n * 1)), $t4 ? {a: $t4.a, i: $t4.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_char) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_wchar_t) ? [] : []));
    this.__init_std_allocator_char(...$a);
  }
  __init_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_char)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_wchar_t)) {
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
    let $t5;
     {
      this._M_set_sharable();
      this._M_length = __n;
      std_char_traits_char.assign({a: (($t5 = this._M_refdata(), $t5)).a, i: (($t5 = this._M_refdata(), $t5)).i + (__n)}, {a: std_basic_string_char_std_char_traits_char_std_allocator_char_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t6, $t7;
    return ($t7 = ($t6 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t6 ? $t6.a : null), i: ($t6 ? $t6.i : 0) + (1)})), $t7 ? {a: $t7.a, i: $t7.i} : null);
  }
  _M_grab(__alloc1, __alloc2) {
    let $t8;
    return ($t8 = (((!(this._M_is_leaked__c())) && std_operator_6_char_char(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, 0)), $t8 ? {a: $t8.a, i: $t8.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t9, $t10;
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
    let __place = ($t9 = (__alloc.a[__alloc.i]).allocate(__size, {a: [0], i: 0}), $t9 ? {a: $t9.a, i: $t9.i} : null);
    let __p = ($t10 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t10 ? {a: $t10.a, i: $t10.i} : null);
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
  _M_refcopy() {
    let $t11;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t11 = this._M_refdata(), $t11 ? {a: $t11.a, i: $t11.i} : null);
  }
  _M_clone(__alloc, __res = 0) {
    let $t12, $t13, $t14, $t15;
    let __requested_cap = (this._M_length + __res);
    let __r = ($t12 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t12 ? {a: $t12.a, i: $t12.i} : null);
    if (this._M_length) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t13 = (__r.a[__r.i])._M_refdata(), $t13 ? {a: $t13.a, i: $t13.i} : null), ($t14 = this._M_refdata(), $t14 ? {a: $t14.a, i: $t14.i} : null), this._M_length);
    }
    (__r.a[__r.i])._M_set_length_and_sharable(this._M_length);
    return ($t15 = (__r.a[__r.i])._M_refdata(), $t15 ? {a: $t15.a, i: $t15.i} : null);
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
    let $t16, $t17, $t18, $t19, $t20, $t21;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t17 = (($t16 = (($a[0]).a[($a[0]).i])._M_rep__c(), $t16.a[$t16.i]))._M_grab({a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}, {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}), $t17 ? {a: $t17.a, i: $t17.i} : null), {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t19 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t18 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t18 ? {a: $t18.a, i: $t18.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t19 ? {a: $t19.a, i: $t19.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider({a: ($a[0]).a[($a[0]).i], i: "_M_dataplus"});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
      (($a[0]).a[($a[0]).i])._M_data(($t20 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [this.get_allocator__c()], i: 0}), $t20 ? {a: $t20.a, i: $t20.i} : null));
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t21 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [new std_allocator_char()], i: 0}), $t21 ? {a: $t21.a, i: $t21.i} : null), {a: [new std_allocator_char()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_data__c() {
    return (this._M_dataplus._M_p ? {a: this._M_dataplus._M_p.a, i: this._M_dataplus._M_p.i} : null);
  }
  _M_data(__p) {
    let $t22;
    return ($t22 = this._M_dataplus._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t22 ? {a: $t22.a, i: $t22.i} : null);
  }
  _M_rep__c() {
    let $t23, $t24;
    return ($t24 = {a: (($t23 = this._M_data__c(), $t23)).a, i: (($t23 = this._M_data__c(), $t23)).i + ((-(1)))}, $t24 ? {a: $t24.a, i: $t24.i} : null);
  }
  _M_check__c(__pos, __s) {
    if ((__pos > this.size__c())) {
      std_throw_out_of_range((__s ? {a: __s.a, i: __s.i} : null));
    }
    return __pos;
  }
  _M_limit__c(__pos, __off) {
    let __testoff = (__off < (this.size__c() - __pos));
    return (__testoff ? __off : (this.size__c() - __pos));
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === 1)) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  static _M_move(__d, __s, __n) {
    if ((__n === 1)) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.move((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
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
  _M_mutate(__pos, __len1, __len2) {
    let $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38, $t39, $t40, $t41, $t42, $t43, $t44, $t45, $t46, $t47, $t48, $t49, $t50, $t51;
    let __old_size = this.size__c();
    let __new_size = ((__old_size + __len2) - __len1);
    let __how_much = ((__old_size - __pos) - __len1);
    if (((__new_size > this.capacity__c()) || (($t25 = this._M_rep__c(), $t25.a[$t25.i]))._M_is_shared__c())) {
       {
        let __a = {v: this.get_allocator__c()};
        let __r = ($t26 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__new_size, this.capacity__c(), {a: __a, i: "v"}), $t26 ? {a: $t26.a, i: $t26.i} : null);
        if (__pos) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t27 = (__r.a[__r.i])._M_refdata(), $t27 ? {a: $t27.a, i: $t27.i} : null), ($t28 = this._M_data__c(), $t28 ? {a: $t28.a, i: $t28.i} : null), __pos);
        }
        if (__how_much) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t33 = ($t32 = ($t31 = ($t30 = ($t29 = (__r.a[__r.i])._M_refdata(), $t29), ({a: ($t30 ? $t30.a : null), i: ($t30 ? $t30.i : 0) + (__pos)})), $t31), ({a: ($t32 ? $t32.a : null), i: ($t32 ? $t32.i : 0) + (__len2)})), $t33 ? {a: $t33.a, i: $t33.i} : null), ($t38 = ($t37 = ($t36 = ($t35 = ($t34 = this._M_data__c(), $t34), ({a: ($t35 ? $t35.a : null), i: ($t35 ? $t35.i : 0) + (__pos)})), $t36), ({a: ($t37 ? $t37.a : null), i: ($t37 ? $t37.i : 0) + (__len1)})), $t38 ? {a: $t38.a, i: $t38.i} : null), __how_much);
        }
        (($t39 = this._M_rep__c(), $t39.a[$t39.i]))._M_dispose({a: __a, i: "v"});
        this._M_data(($t40 = (__r.a[__r.i])._M_refdata(), $t40 ? {a: $t40.a, i: $t40.i} : null));
      }
    }
    else {
      if ((__how_much && (__len1 !== __len2))) {
         {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_move(($t45 = ($t44 = ($t43 = ($t42 = ($t41 = this._M_data__c(), $t41), ({a: ($t42 ? $t42.a : null), i: ($t42 ? $t42.i : 0) + (__pos)})), $t43), ({a: ($t44 ? $t44.a : null), i: ($t44 ? $t44.i : 0) + (__len2)})), $t45 ? {a: $t45.a, i: $t45.i} : null), ($t50 = ($t49 = ($t48 = ($t47 = ($t46 = this._M_data__c(), $t46), ({a: ($t47 ? $t47.a : null), i: ($t47 ? $t47.i : 0) + (__pos)})), $t48), ({a: ($t49 ? $t49.a : null), i: ($t49 ? $t49.i : 0) + (__len1)})), $t50 ? {a: $t50.a, i: $t50.i} : null), __how_much);
        }
      }
    }
    (($t51 = this._M_rep__c(), $t51.a[$t51.i]))._M_set_length_and_sharable(__new_size);
  }
  size__c() {
    let $t52;
    return (($t52 = this._M_rep__c(), $t52.a[$t52.i]))._M_length;
  }
  length__c() {
    let $t53;
    return (($t53 = this._M_rep__c(), $t53.a[$t53.i]))._M_length;
  }
  capacity__c() {
    let $t54;
    return (($t54 = this._M_rep__c(), $t54.a[$t54.i]))._M_capacity;
  }
  reserve(__res = 0) {
    let $t55, $t56, $t57, $t58;
    if (((__res !== this.capacity__c()) || (($t55 = this._M_rep__c(), $t55.a[$t55.i]))._M_is_shared__c())) {
       {
        if ((__res < this.size__c())) {
          __res = this.size__c();
        }
        let __a = {v: this.get_allocator__c()};
        let __tmp = ($t57 = (($t56 = this._M_rep__c(), $t56.a[$t56.i]))._M_clone({a: __a, i: "v"}, (__res - this.size__c())), $t57 ? {a: $t57.a, i: $t57.i} : null);
        (($t58 = this._M_rep__c(), $t58.a[$t58.i]))._M_dispose({a: __a, i: "v"});
        this._M_data((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
  }
  clear() {
    this._M_mutate(0, this.size__c(), 0);
  }
  op_add_assign(__c) {
    this.push_back(__c);
    return {a: [this], i: 0};
  }
  push_back(__c) {
    let $t59, $t60, $t61;
    __c = {v: __c};
    let __len = (1 + this.size__c());
    if (((__len > this.capacity__c()) || (($t59 = this._M_rep__c(), $t59.a[$t59.i]))._M_is_shared__c())) {
      this.reserve(__len);
    }
    std_char_traits_char.assign({a: (($t60 = this._M_data__c(), $t60)).a, i: (($t60 = this._M_data__c(), $t60)).i + (this.size__c())}, {a: __c, i: "v"});
    (($t61 = this._M_rep__c(), $t61.a[$t61.i]))._M_set_length_and_sharable(__len);
  }
  static _S_construct(...$a) {
    let $t62, $t63, $t64, $t65, $t66, $t67, $t68, $t69, $t70, $t71, $t72;
    if ($a.length >= 3 && $a.length <= 3 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      let __r = ($t62 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create($a[0], (0 >>> 0), $a[2]), $t62 ? {a: $t62.a, i: $t62.i} : null);
      if ($a[0]) {
        std_basic_string_char_std_char_traits_char_std_allocator_char._M_assign(($t63 = (__r.a[__r.i])._M_refdata(), $t63 ? {a: $t63.a, i: $t63.i} : null), $a[0], $a[1]);
      }
      (__r.a[__r.i])._M_set_length_and_sharable($a[0]);
      return ($t64 = (__r.a[__r.i])._M_refdata(), $t64 ? {a: $t64.a, i: $t64.i} : null);
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      return ($t65 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t65 ? {a: $t65.a, i: $t65.i} : null);
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
      let __r = ($t66 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, (0 >>> 0), $a[2]), $t66 ? {a: $t66.a, i: $t66.i} : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t67 = (__r.a[__r.i])._M_refdata(), $t67 ? {a: $t67.a, i: $t67.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t68 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((__len + 1), __len, $a[2]), $t68 ? {a: $t68.a, i: $t68.i} : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t69 = (__another.a[__another.i])._M_refdata(), $t69 ? {a: $t69.a, i: $t69.i} : null), ($t70 = (__r.a[__r.i])._M_refdata(), $t70 ? {a: $t70.a, i: $t70.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t71 = (__r.a[__r.i])._M_refdata(), $t71)).a[(($t71 = (__r.a[__r.i])._M_refdata(), $t71)).i + (__len++)] = ($a[0]).a[($a[0]).i];
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
      return ($t72 = (__r.a[__r.i])._M_refdata(), $t72 ? {a: $t72.a, i: $t72.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  copy__c(__s, __n, __pos = 0) {
    let $t73, $t74, $t75;
    this._M_check__c(__pos, {a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 99, 111, 112, 121, 0], i: 0});
    __n = this._M_limit__c(__pos, __n);
    if (__n) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy((__s ? {a: __s.a, i: __s.i} : null), ($t75 = ($t74 = ($t73 = this._M_data__c(), $t73), ({a: ($t74 ? $t74.a : null), i: ($t74 ? $t74.i : 0) + (__pos)})), $t75 ? {a: $t75.a, i: $t75.i} : null), __n);
    }
    return __n;
  }
  c_str__c() {
    let $t76;
    return ($t76 = this._M_data__c(), $t76 ? {a: $t76.a, i: $t76.i} : null);
  }
  data__c() {
    let $t77;
    return ($t77 = this._M_data__c(), $t77 ? {a: $t77.a, i: $t77.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus"});
  }
  compare__c(__str) {
    let $t78, $t79, $t80;
    let __size = {v: this.size__c()};
    let __osize = {v: (__str.a[__str.i]).size__c()};
    let __len = ($t78 = std_min_unsigned_long_long({a: __size, i: "v"}, {a: __osize, i: "v"}), $t78.a[$t78.i]);
    let __r = std_char_traits_char.compare(($t79 = this._M_data__c(), $t79 ? {a: $t79.a, i: $t79.i} : null), ($t80 = (__str.a[__str.i]).data__c(), $t80 ? {a: $t80.a, i: $t80.i} : null), __len);
    if ((!__r)) {
      __r = std_basic_string_char_std_char_traits_char_std_allocator_char._S_compare(__size.v, __osize.v);
    }
    return __r;
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t81;
    return ($t81 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t81 ? {a: $t81.a, i: $t81.i} : null);
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
  constructor(...$a) {
    this.__init_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_assign(o) {
    return {a: [this], i: 0};
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char) ? [$a[0]] : []));
    this.__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  op_call__c(__s) {
    let $t82;
    return std_Hash_impl.hash(($t82 = (__s.a[__s.i]).data__c(), $t82 ? {a: $t82.a, i: $t82.i} : null), (__s.a[__s.i]).length__c(), (3339675911 >>> 0));
  }
  op_assign(o) {
    this.__assign_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char.call(this, $p0);
    return {a: [this], i: 0};
  }
}
class std_char_traits_wchar_t {
  __init_std_char_traits_wchar_t(...$a) { }
  __dtor() {
  }
  static assign(...$a) {
    let $t83;
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      ($a[0]).a[($a[0]).i] = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return ($t83 = wmemset((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), $a[2], Math.trunc(($a[1]) / 4)), $t83 ? {a: $t83.a, i: $t83.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static length(__s) {
    return wcslen((__s ? {a: __s.a, i: __s.i} : null));
  }
  static find(__s, __n, __a) {
    let $t84;
    return ($t84 = std_wmemchr((__s ? {a: __s.a, i: __s.i} : null), __a.a[__a.i], Math.trunc((__n) / 4)), $t84 ? {a: $t84.a, i: $t84.i} : null);
  }
  static copy(__s1, __s2, __n) {
    let $t85;
    return ($t85 = wmemcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), Math.trunc((__n) / 4)), $t85 ? {a: $t85.a, i: $t85.i} : null);
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
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_wchar_t(...$a);
  }
  __init_gnu_cxx_new_allocator_wchar_t(...$a) {
  }
  __dtor() {
  }
}
class std_allocator_wchar_t extends gnu_cxx_new_allocator_wchar_t {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_wchar_t) ? [$a[0]] : []));
    this.__init_std_allocator_wchar_t(...$a);
  }
  __init_std_allocator_wchar_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_wchar_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep extends std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base {
  constructor(...$a) {
    super(...[]);
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep(...$a) {
  }
  __dtor() {
    std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base.prototype.__dtor.call(this);
  }
  _M_is_leaked__c() {
    return (this._M_refcount < 0);
  }
  _M_set_sharable() {
    this._M_refcount = 0;
  }
  _M_set_length_and_sharable(__n) {
    let $t86;
     {
      this._M_set_sharable();
      this._M_length = __n;
      std_char_traits_wchar_t.assign({a: (($t86 = this._M_refdata(), $t86)).a, i: (($t86 = this._M_refdata(), $t86)).i + (__n)}, {a: std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t87, $t88;
    return ($t88 = ($t87 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t87 ? $t87.a : null), i: ($t87 ? $t87.i : 0) + (1)})), $t88 ? {a: $t88.a, i: $t88.i} : null);
  }
  _M_grab(__alloc1, __alloc2) {
    let $t89;
    return ($t89 = (((!(this._M_is_leaked__c())) && std_operator_6_wchar_t_wchar_t(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, 0)), $t89 ? {a: $t89.a, i: $t89.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t90, $t91, $t92;
    if ((__capacity > std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_max_size)) {
      std_throw_length_error({a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], i: 0});
    }
    let __pagesize = 4096;
    let __malloc_header_size = (4 * 8);
    if (((__capacity > __old_capacity) && (__capacity < (2 * __old_capacity)))) {
      __capacity = (2 * __old_capacity);
    }
    let __size = (((__capacity + 1) * 4) + 20);
    let __adj_size = (__size + __malloc_header_size);
    if (((__adj_size > __pagesize) && (__capacity > __old_capacity))) {
       {
        let __extra = (__pagesize - (__adj_size % __pagesize));
        __capacity += (Math.trunc(__extra / 4));
        if ((__capacity > std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_max_size)) {
          __capacity = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_max_size;
        }
        __size = (((__capacity + 1) * 4) + 20);
      }
    }
    let __place = ($t91 = (($t90 = new std_allocator_char(__alloc), $t90)).allocate(__size, {a: [0], i: 0}), $t91 ? {a: $t91.a, i: $t91.i} : null);
    let __p = ($t92 = (__place.a[__place.i] = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t92 ? {a: $t92.a, i: $t92.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    (__p.a[__p.i])._M_set_sharable();
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_destroy(__a) {
    let $t93;
    let __size = (20 + ((this._M_capacity + 1) * 4));
    (($t93 = new std_allocator_char(__a), $t93)).deallocate({a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
  }
  _M_refcopy() {
    let $t94;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t94 = this._M_refdata(), $t94 ? {a: $t94.a, i: $t94.i} : null);
  }
  _M_clone(__alloc, __res = 0) {
    let $t95, $t96, $t97, $t98;
    let __requested_cap = (this._M_length + __res);
    let __r = ($t95 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t95 ? {a: $t95.a, i: $t95.i} : null);
    if (this._M_length) {
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t96 = (__r.a[__r.i])._M_refdata(), $t96 ? {a: $t96.a, i: $t96.i} : null), ($t97 = this._M_refdata(), $t97 ? {a: $t97.a, i: $t97.i} : null), this._M_length);
    }
    (__r.a[__r.i])._M_set_length_and_sharable(this._M_length);
    return ($t98 = (__r.a[__r.i])._M_refdata(), $t98 ? {a: $t98.a, i: $t98.i} : null);
  }
  static _S_max_size = 268435454;
  static _S_terminal = 0;
  static _S_empty_rep_storage = null;
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider extends std_allocator_wchar_t {
  _M_p;
  constructor(...$a) {
    super(...[$a[1]]);
    this.__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a);
  }
  __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a) {
    this._M_p = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
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
    let $t99, $t100, $t101, $t102;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t)) {
      this._M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(($t100 = (($t99 = (($a[0]).a[($a[0]).i])._M_rep__c(), $t99.a[$t99.i]))._M_grab({a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}, {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}), $t100 ? {a: $t100.a, i: $t100.i} : null), {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_wchar_t))) {
      this._M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(($t102 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t101 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_wchar_t.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.npos)})), $t101 ? {a: $t101.a, i: $t101.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_wchar_t()], i: 0}) : $a[1])), $t102 ? {a: $t102.a, i: $t102.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_wchar_t()], i: 0}) : $a[1]));
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_data__c() {
    return (this._M_dataplus._M_p ? {a: this._M_dataplus._M_p.a, i: this._M_dataplus._M_p.i} : null);
  }
  _M_rep__c() {
    let $t103, $t104;
    return ($t104 = {a: (($t103 = this._M_data__c(), $t103)).a, i: (($t103 = this._M_data__c(), $t103)).i + ((-(1)))}, $t104 ? {a: $t104.a, i: $t104.i} : null);
  }
  _M_check__c(__pos, __s) {
    if ((__pos > this.size__c())) {
      std_throw_out_of_range((__s ? {a: __s.a, i: __s.i} : null));
    }
    return __pos;
  }
  _M_limit__c(__pos, __off) {
    let __testoff = (__off < (this.size__c() - __pos));
    return (__testoff ? __off : (this.size__c() - __pos));
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === 1)) {
      std_char_traits_wchar_t.assign(__d, __s);
    }
    else {
      std_char_traits_wchar_t.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  size__c() {
    let $t105;
    return (($t105 = this._M_rep__c(), $t105.a[$t105.i]))._M_length;
  }
  static _S_construct(...$a) {
    let $t106, $t107, $t108, $t109, $t110, $t111, $t112, $t113;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_wchar_t)) {
      return ($t106 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t106 ? {a: $t106.a, i: $t106.i} : null);
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_wchar_t) && $a[3] instanceof std_input_iterator_tag) {
      let __buf = new Array(128).fill(0);
      let __len = 0;
      while (((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i))) && (__len < (Math.trunc(512 / 4))))) {
         {
          __buf[__len++] = ($a[0]).a[($a[0]).i];
          ++($a[0]).i;
        }
      }
      let __r = ($t107 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create(__len, (0 >>> 0), $a[2]), $t107 ? {a: $t107.a, i: $t107.i} : null);
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t108 = (__r.a[__r.i])._M_refdata(), $t108 ? {a: $t108.a, i: $t108.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t109 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create((__len + 1), __len, $a[2]), $t109 ? {a: $t109.a, i: $t109.i} : null);
                  std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t110 = (__another.a[__another.i])._M_refdata(), $t110 ? {a: $t110.a, i: $t110.i} : null), ($t111 = (__r.a[__r.i])._M_refdata(), $t111 ? {a: $t111.a, i: $t111.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t112 = (__r.a[__r.i])._M_refdata(), $t112)).a[(($t112 = (__r.a[__r.i])._M_refdata(), $t112)).i + (__len++)] = ($a[0]).a[($a[0]).i];
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
      return ($t113 = (__r.a[__r.i])._M_refdata(), $t113 ? {a: $t113.a, i: $t113.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  copy__c(__s, __n, __pos = 0) {
    let $t114, $t115, $t116;
    this._M_check__c(__pos, {a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 99, 111, 112, 121, 0], i: 0});
    __n = this._M_limit__c(__pos, __n);
    if (__n) {
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy((__s ? {a: __s.a, i: __s.i} : null), ($t116 = ($t115 = ($t114 = this._M_data__c(), $t114), ({a: ($t115 ? $t115.a : null), i: ($t115 ? $t115.i : 0) + (__pos)})), $t116 ? {a: $t116.a, i: $t116.i} : null), __n);
    }
    return __n;
  }
  get_allocator__c() {
    return new std_allocator_wchar_t({a: this, i: "_M_dataplus"});
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t117;
    return ($t117 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t117 ? {a: $t117.a, i: $t117.i} : null);
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
class std_detail_Identity {
  constructor(...$a) {
    this.__init_std_detail_Identity(...$a);
  }
  __init_std_detail_Identity(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Identity)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_call__c__rv(__x) {
    return std_forward_1_int(__x);
  }
}
class std_detail_Select1st {
  constructor(...$a) {
    this.__init_std_detail_Select1st(...$a);
  }
  __init_std_detail_Select1st(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Select1st)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_call__c__rv(__x) {
    return std_get_1_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_int(std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__x));
  }
}
class std_detail_Hash_node_base {
  _M_nxt;
  constructor(...$a) {
    this.__init_std_detail_Hash_node_base(...$a);
  }
  __init_std_detail_Hash_node_base(...$a) {
    this._M_nxt = null;
  }
  __dtor() {
  }
}
class std_detail_Mod_range_hashing {
  constructor(...$a) {
    this.__init_std_detail_Mod_range_hashing(...$a);
  }
  __init_std_detail_Mod_range_hashing(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Mod_range_hashing)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_call__c(__num, __den) {
    return (__num % __den);
  }
}
class std_detail_Default_ranged_hash {
  constructor(...$a) {
    this.__init_std_detail_Default_ranged_hash(...$a);
  }
  __init_std_detail_Default_ranged_hash(...$a) {
  }
  __dtor() {
  }
}
class std_detail_Prime_rehash_policy {
  _M_max_load_factor;
  _M_next_resize;
  constructor(...$a) {
    this.__init_std_detail_Prime_rehash_policy(...$a);
  }
  __init_std_detail_Prime_rehash_policy(...$a) {
    this._M_max_load_factor = ($a[0] === undefined ? (1) : $a[0]);
    this._M_next_resize = 0;
  }
  __dtor() {
  }
  _M_next_bkt__c(...$a) { const $fast = [2,2,2,3,5,5,7,7,11,11,11,11,13,13]; const $n = $a[0]; if ($n < $fast.length) { if ($n === 0) return 1;   this._M_next_resize = Math.floor($fast[$n] * this._M_max_load_factor); return $fast[$n]; } const $P = PRIME_BUCKETS, $last = $P.length - 1; let $i = 6; while ($i < $last && $P[$i] < $n) $i++; if ($i === $last) { this._M_next_resize = 18446744073709551615; return $P[$i]; } this._M_next_resize = Math.floor($P[$i] * this._M_max_load_factor); return $P[$i]; }
  _M_need_rehash__c(...$a) { const $nbkt = $a[0], $nelt = $a[1], $nins = $a[2]; const $mk = (b, s) => { const o = Object.create(std_pair_bool_unsigned_long_long.prototype); o.first = b; o.second = s; return o; }; if ($nelt + $nins > this._M_next_resize) {   const $mb = Math.max($nelt + $nins, this._M_next_resize ? 0 : 11) / this._M_max_load_factor;   if ($mb >= $nbkt) return $mk(true, this._M_next_bkt__c(Math.max(Math.floor($mb) + 1, $nbkt * 2)));   this._M_next_resize = Math.floor($nbkt * this._M_max_load_factor); } return $mk(false, 0); }
  _M_state__c() {
    return this._M_next_resize;
  }
  _M_reset(__state) {
    this._M_next_resize = __state;
  }
  static _S_growth_factor = 2;
}
class std_locale_facet {
  _M_refcount;
  constructor(...$a) {
    this.__init_std_locale_facet(...$a);
  }
  __init_std_locale_facet(...$a) {
    this._M_refcount = (($a[0] === undefined ? (0) : $a[0]) ? 1 : 0);
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
  width__c() {
    return this._M_width;
  }
  width(__wide) {
    let __old = this._M_width;
    this._M_width = __wide;
    return __old;
  }
  _M_getloc__c() {
    return {a: this, i: "_M_ios_locale"};
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
  widen__c(__lo, __hi, __to) {
    let $t118;
    if ((this._M_widen_ok === 1)) {
       {
        (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__to), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__lo), ((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0)));
        return (__hi ? {a: __hi.a, i: __hi.i} : null);
      }
    }
    if ((!this._M_widen_ok)) {
      this._M_widen_init__c();
    }
    return ($t118 = this.do_widen__c((__lo ? {a: __lo.a, i: __lo.i} : null), (__hi ? {a: __hi.a, i: __hi.i} : null), (__to ? {a: __to.a, i: __to.i} : null)), $t118 ? {a: $t118.a, i: $t118.i} : null);
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
  sbumpc() {
    let $t119, $t120, $t121, $t122;
    let __ret = 0;
    if (($t121 = ($t119 = this.gptr__c(), $t119), $t122 = ($t120 = this.egptr__c(), $t120), (($t121 ? $t121.i : 0) < ($t122 ? $t122.i : 0)))) {
       {
        __ret = std_char_traits_char.to_int_type(this.gptr__c());
        this.gbump(1);
      }
    }
    else {
      __ret = this.uflow();
    }
    return __ret;
  }
  sgetc() {
    let $t123, $t124, $t125, $t126;
    let __ret = 0;
    if (($t125 = ($t123 = this.gptr__c(), $t123), $t126 = ($t124 = this.egptr__c(), $t124), (($t125 ? $t125.i : 0) < ($t126 ? $t126.i : 0)))) {
      __ret = std_char_traits_char.to_int_type(this.gptr__c());
    }
    else {
      __ret = this.underflow();
    }
    return __ret;
  }
  sputn(__s, __n) {
    return this.xsputn((__s ? {a: __s.a, i: __s.i} : null), __n);
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
    return new std_fpos_class_152((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_152((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t127, $t128, $t129, $t130, $t131, $t132;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t129 = ($t127 = this.egptr__c(), $t127), $t130 = ($t128 = this.gptr__c(), $t128), (($t129 ? $t129.i : 0) - ($t130 ? $t130.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t131 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t131.a[$t131.i]);
            std_char_traits_char.copy((__s ? {a: __s.a, i: __s.i} : null), ($t132 = this.gptr__c(), $t132 ? {a: $t132.a, i: $t132.i} : null), __len);
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
    let $t133, $t134, $t135, $t136, $t137, $t138;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t135 = ($t133 = this.epptr__c(), $t133), $t136 = ($t134 = this.pptr__c(), $t134), (($t135 ? $t135.i : 0) - ($t136 ? $t136.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t137 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t137.a[$t137.i]);
            std_char_traits_char.copy(($t138 = this.pptr__c(), $t138 ? {a: $t138.a, i: $t138.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
  sbumpc() {
    let $t139, $t140, $t141, $t142;
    let __ret = 0;
    if (($t141 = ($t139 = this.gptr__c(), $t139), $t142 = ($t140 = this.egptr__c(), $t140), (($t141 ? $t141.i : 0) < ($t142 ? $t142.i : 0)))) {
       {
        __ret = std_char_traits_wchar_t.to_int_type(this.gptr__c());
        this.gbump(1);
      }
    }
    else {
      __ret = this.uflow();
    }
    return __ret;
  }
  sgetc() {
    let $t143, $t144, $t145, $t146;
    let __ret = 0;
    if (($t145 = ($t143 = this.gptr__c(), $t143), $t146 = ($t144 = this.egptr__c(), $t144), (($t145 ? $t145.i : 0) < ($t146 ? $t146.i : 0)))) {
      __ret = std_char_traits_wchar_t.to_int_type(this.gptr__c());
    }
    else {
      __ret = this.underflow();
    }
    return __ret;
  }
  sputn(__s, __n) {
    return this.xsputn((__s ? {a: __s.a, i: __s.i} : null), __n);
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
    return new std_fpos_class_152((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_152((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t147, $t148, $t149, $t150, $t151, $t152;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t149 = ($t147 = this.egptr__c(), $t147), $t150 = ($t148 = this.gptr__c(), $t148), (($t149 ? $t149.i : 0) - ($t150 ? $t150.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t151 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t151.a[$t151.i]);
            std_char_traits_wchar_t.copy((__s ? {a: __s.a, i: __s.i} : null), ($t152 = this.gptr__c(), $t152 ? {a: $t152.a, i: $t152.i} : null), __len);
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
    let $t153, $t154, $t155, $t156, $t157, $t158;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t155 = ($t153 = this.epptr__c(), $t153), $t156 = ($t154 = this.pptr__c(), $t154), (($t155 ? $t155.i : 0) - ($t156 ? $t156.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t157 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t157.a[$t157.i]);
            std_char_traits_wchar_t.copy(($t158 = this.pptr__c(), $t158 ? {a: $t158.a, i: $t158.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
class std_fpos_class_152 {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_class_152(...$a);
  }
  __init_std_fpos_class_152(...$a) {
    this._M_off = $a[0];
    this._M_state = new class_152();
    this._M_state.ctj_a = this; this._M_state.ctj_i = "_M_state";
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
class std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char) ? [$a[0]] : []));
    this.__init_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_binary_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_basic_string_char_std_char_traits_char_std_allocator_char_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return std_operator_8_char_std_char_traits_char_std_allocator_char(__x, __y);
  }
}
class std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R && $a[2] instanceof std_tuple) {
      this.__init_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new std_Index_tuple_value0(), new std_Index_tuple());
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof std_piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      this.first = new std_basic_string_char_std_char_traits_char_std_allocator_char(std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R(std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[0])));
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = 0;
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.first = new std_basic_string_char_std_char_traits_char_std_allocator_char();
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = 0;
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
class std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_integral_constant_bool_value1 {
  constructor(...$a) {
    this.__init_std_integral_constant_bool_value1(...$a);
  }
  __init_std_integral_constant_bool_value1(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_integral_constant_bool_value1)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_is_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_copy_insertable_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_cv_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_volatile_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_const_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_void_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_not_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_not_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value1_std_is_rvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_lvalue_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_and_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_base_of_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_is_same_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_static_castable_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_direct_constructible_new_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
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
class std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_not_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_std_is_array_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
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
class std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_void_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_array_unknown_bounds_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_function_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_integral_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_floating_point_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_integral_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_floating_point_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_arithmetic_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_or_std_is_enum_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_member_pointer_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_nullptr_t_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_or_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value0_std_is_reference_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_scalar_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_all_extents_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_is_destructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R extends std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_and_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_conditional_value1_std_is_direct_constructible_impl_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_destructible_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
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
class std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_is_function_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_array_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
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
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
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
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_is_direct_constructible_new_safe_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_allow_copy_cons_value1 {
  __init_std_allow_copy_cons_value1(...$a) { }
  __dtor() {
  }
}
class std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_array_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_default_constructible_safe_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_default_constructible_atom_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_do_is_default_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_do_is_default_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_is_default_constructible_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 extends std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a);
  }
  __init_std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0(...$a) {
  }
  __dtor() {
    std_is_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_copy_assignable_impl_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value0.prototype.__dtor.call(this);
  }
}
class std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_assignable_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_is_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_cv_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_volatile_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_remove_const_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_is_void_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  __init_std_conditional_value0_std_not_std_is_void_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_std_not_std_is_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  __init_std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R extends std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_add_rvalue_reference_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0.prototype.__dtor.call(this);
  }
}
class std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value1_std_and_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_conditional_value0_std_and_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
  __dtor() {
  }
}
class std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_not_std_and_std_is_fast_hash_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_default_constructible_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_is_copy_assignable_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_is_noexcept_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_detail_Hashtable_traits_value1_value0_value1 {
  __init_std_detail_Hashtable_traits_value1_value0_value1(...$a) { }
  __dtor() {
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1 extends std_detail_Select1st {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1(...$a) {
  }
  __dtor() {
    std_detail_Select1st.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_detail_Select1st.prototype)], i: 0};
  }
}
class std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  __dtor() {
    std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype)], i: 0};
  }
}
class std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1 extends std_detail_Mod_range_hashing {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1(...$a) {
  }
  __dtor() {
    std_detail_Mod_range_hashing.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_detail_Mod_range_hashing.prototype)], i: 0};
  }
}
class std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1 extends std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1 {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1(...$a);
  }
  __init_std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1(...$a) {
    std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.call(this, $a[1]);
    std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.call(this, $a[2]);
  }
  __dtor() {
    std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.prototype.__dtor.call(this);
  }
  _M_hash_code__c(__k) {
    let $t159;
    return (($t159 = this._M_h1(), $t159.a[$t159.i])).op_call__c(__k);
  }
  _M_bucket_index__c(...$a) {
    let $t160, $t161;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return (($t160 = this._M_h2(), $t160.a[$t160.i])).op_call__c($a[1], $a[2]);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return (($t161 = this._M_h2(), $t161.a[$t161.i])).op_call__c((($a[0]).a[($a[0]).i])._M_hash_code, $a[1]);
    }
    else { throw new Error("no matching overload"); }
  }
  _M_store_code__c(__n, __c) {
    (__n.a[__n.i])._M_hash_code = __c;
  }
  _M_extract() {
    return std_detail_Hashtable_ebo_helper_value0_std_detail_Select1st_value1._S_get({a: [this], i: 0});
  }
  _M_h1() {
    return std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._S_get({a: [this], i: 0});
  }
  _M_h2() {
    return std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1._S_get({a: [this], i: 0});
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value1_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype)) std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1)) std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype)) std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1)) std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1[$k] = $b[$k];
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1 extends std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1(...$a) {
  }
  __dtor() {
    std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype)], i: 0};
  }
}
class std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1 extends std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1 {
  constructor(...$a) {
    super(...[$a[0], $a[1], $a[2], $a[3]]);
    this.__init_std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  __init_std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
    std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.call(this, $a[4]);
  }
  __dtor() {
    std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1.prototype.__dtor.call(this);
  }
  _M_equals__c(__k, __c, __n) {
    return std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_long_long_value1._S_equals(this._M_eq(), this._M_extract(), __k, __c, (__n ? {a: __n.a, i: __n.i} : null));
  }
  _M_eq() {
    return std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1._S_get({a: [this], i: 0});
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value0_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1.prototype)) std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1)) std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1[$k] = $b[$k];
  }
}
class std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1 {
  constructor(...$a) {
    this.__init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1(...$a);
  }
  __init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1(...$a) {
  }
  __dtor() {
  }
  op_index(__k) {
    let $t162, $t163, $t164, $t165;
    let __h = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
    let __code = (__h.a[__h.i])._M_hash_code__c(__k);
    let __n = (__h.a[__h.i])._M_bucket_index__c(__k, __code);
    let __p = ($t162 = (__h.a[__h.i])._M_find_node__c(__n, __k, __code), $t162 ? {a: $t162.a, i: $t162.i} : null);
    if ((!__p)) {
       {
        __p = ($t163 = (__h.a[__h.i])._M_allocate_node__rv({a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__k)], i: 0}, {a: [new std_tuple()], i: 0}), $t163 ? {a: $t163.a, i: $t163.i} : null);
        return {a: ($t165 = (($t164 = (__h.a[__h.i])._M_insert_unique_node(__n, __code, (__p ? {a: __p.a, i: __p.i} : null)), $t164)).op_arrow__c(), $t165.a[$t165.i]), i: "second"};
      }
    }
    return {a: (__p.a[__p.i])._M_v, i: "second"};
  }
}
class std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  __init_std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a) { }
  __dtor() {
  }
}
class std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1 extends std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  constructor(...$a) {
    super();
    this.__init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1(...$a);
  }
  __init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1(...$a) {
  }
  __dtor() {
    std_detail_Insert_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype.__dtor.call(this);
  }
}
class std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 {
  constructor(...$a) {
    this.__init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  __init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
  }
  __dtor() {
  }
}
class std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1 {
  __init_std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1(...$a) { }
  __dtor() {
  }
}
class std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  _M_cur;
  constructor(...$a) {
    this.__init_std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1)) {
      this._M_cur = (((($a[0]).a[($a[0]).i])._M_cur) ? {a: ((($a[0]).a[($a[0]).i])._M_cur).a, i: ((($a[0]).a[($a[0]).i])._M_cur).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_cur = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_incr() {
    let $t166;
    this._M_cur = ($t166 = (this._M_cur.a[this._M_cur.i])._M_next__c(), $t166 ? {a: $t166.a, i: $t166.i} : null);
  }
}
class std_detail_Node_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1 extends std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_detail_Node_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a);
  }
  __init_std_detail_Node_const_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a) {
  }
  __dtor() {
    std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1.prototype.__dtor.call(this);
  }
}
class std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends std_detail_Hash_node_base {
  _M_v;
  _M_hash_code;
  constructor(...$a) {
    super();
    this.__init_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    let $t167, $t168, $t169;
    this._M_v = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($t167 = std_forward_1_std_piecewise_construct_t($a[0]), $t167.a[$t167.i]), ($t168 = std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[1]), $t168.a[$t168.i]), ($t169 = std_forward_1_std_tuple($a[2]), $t169.a[$t169.i]));
    this._M_v.ctj_a = this; this._M_v.ctj_i = "_M_v";
    this._M_hash_code = 0;
  }
  __dtor() {
    std_detail_Hash_node_base.prototype.__dtor.call(this);
  }
  _M_next__c() {
    return (this._M_nxt ? {a: this._M_nxt.a, i: this._M_nxt.i} : null);
  }
}
class std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1 extends std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object") ? [(($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1) ? [$a[0]] : []));
    this.__init_std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a);
  }
  __init_std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_detail_Node_iterator_base_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1.prototype.__dtor.call(this);
  }
  op_mul__c() {
    return {a: this._M_cur.a[this._M_cur.i], i: "_M_v"};
  }
  op_arrow__c() {
    let $t170;
    return ($t170 = std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: this._M_cur.a[this._M_cur.i], i: "_M_v"}), $t170 ? {a: $t170.a, i: $t170.i} : null);
  }
  op_inc() {
    this._M_incr();
    return {a: [this], i: 0};
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
}
class std_tuple_element_value1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_tuple_element_value1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  __init_std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) { }
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_int {
  constructor(...$a) {
    this.__init_std_hash_base_unsigned_long_long_int(...$a);
  }
  __init_std_hash_base_unsigned_long_long_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_base_unsigned_long_long_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_assign(o) {
    return {a: [this], i: 0};
  }
}
class std_hash_int extends std_hash_base_unsigned_long_long_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_int) ? [$a[0]] : []));
    this.__init_std_hash_int(...$a);
  }
  __init_std_hash_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_hash_base_unsigned_long_long_int.prototype.__dtor.call(this);
  }
  op_call__c(__val) {
    return (__val >>> 0);
  }
  op_assign(o) {
    this.__assign_std_hash_base_unsigned_long_long_int.call(this, $p0);
    return {a: [this], i: 0};
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
class std_equal_to_int extends std_binary_function_int_int_bool {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_equal_to_int) ? [$a[0]] : []));
    this.__init_std_equal_to_int(...$a);
  }
  __init_std_equal_to_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_equal_to_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_binary_function_int_int_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return (__x.a[__x.i] === __y.a[__y.i]);
  }
}
class gnu_cxx_new_allocator_int {
  __init_gnu_cxx_new_allocator_int(...$a) { }
  __dtor() {
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
class std_is_copy_insertable_std_allocator_int extends std_is_copy_constructible_int {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_insertable_std_allocator_int(...$a);
  }
  __init_std_is_copy_insertable_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_copy_constructible_int.prototype.__dtor.call(this);
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
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
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
class std_is_fast_hash_std_hash_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_fast_hash_std_hash_int(...$a);
  }
  __init_std_is_fast_hash_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_std_hash_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_std_hash_int(...$a);
  }
  __init_std_is_default_constructible_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_array_std_hash_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_hash_int(...$a);
  }
  __init_std_is_array_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_safe_std_hash_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_safe_std_hash_int_value0(...$a);
  }
  __init_std_is_default_constructible_safe_std_hash_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_atom_std_hash_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_atom_std_hash_int(...$a);
  }
  __init_std_is_default_constructible_atom_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_hash_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_hash_int(...$a);
  }
  __init_std_is_void_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_hash_int {
  __init_std_remove_cv_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_hash_int {
  __init_std_remove_volatile_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_hash_int {
  __init_std_remove_const_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_hash_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_hash_int(...$a);
  }
  __init_std_is_void_helper_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_hash_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_hash_int(...$a);
  }
  __init_std_not_std_is_void_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_default_constructible_impl_std_hash_int extends std_do_is_default_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_default_constructible_impl_std_hash_int(...$a);
  }
  __init_std_is_default_constructible_impl_std_hash_int(...$a) {
  }
  __dtor() {
    std_do_is_default_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int extends std_is_default_constructible_impl_std_hash_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int(...$a);
  }
  __init_std_and_std_not_std_is_void_std_hash_int_std_is_default_constructible_impl_std_hash_int(...$a) {
  }
  __dtor() {
    std_is_default_constructible_impl_std_hash_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_default_constructible_impl_std_hash_int_std_not_std_is_void_std_hash_int {
  __init_std_conditional_value1_std_is_default_constructible_impl_std_hash_int_std_not_std_is_void_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_is_assignable_std_hash_int_R_std_hash_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_assignable_std_hash_int_R_std_hash_int_R(...$a);
  }
  __init_std_is_assignable_std_hash_int_R_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_copy_assignable_impl_std_hash_int_value0 extends std_is_assignable_std_hash_int_R_std_hash_int_R {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_assignable_impl_std_hash_int_value0(...$a);
  }
  __init_std_is_copy_assignable_impl_std_hash_int_value0(...$a) {
  }
  __dtor() {
    std_is_assignable_std_hash_int_R_std_hash_int_R.prototype.__dtor.call(this);
  }
}
class std_is_copy_assignable_std_hash_int extends std_is_copy_assignable_impl_std_hash_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_copy_assignable_std_hash_int(...$a);
  }
  __init_std_is_copy_assignable_std_hash_int(...$a) {
  }
  __dtor() {
    std_is_copy_assignable_impl_std_hash_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_assignable_helper_std_hash_int_R_std_hash_int_R extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_assignable_helper_std_hash_int_R_std_hash_int_R(...$a);
  }
  __init_std_is_assignable_helper_std_hash_int_R_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_hash_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_hash_int_R(...$a);
  }
  __init_std_is_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_hash_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_hash_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_hash_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_hash_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R extends std_is_lvalue_reference_std_hash_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_hash_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_hash_int_R_std_is_rvalue_reference_std_hash_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_hash_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_hash_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_hash_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_hash_int_R(...$a);
  }
  __init_std_is_void_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_hash_int_R {
  __init_std_remove_cv_std_hash_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_hash_int_R {
  __init_std_remove_volatile_std_hash_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_hash_int_R {
  __init_std_remove_const_std_hash_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_hash_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_hash_int_R(...$a);
  }
  __init_std_is_void_helper_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_hash_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_hash_int_R(...$a);
  }
  __init_std_not_std_is_void_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R extends std_not_std_is_reference_std_hash_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_hash_int_R_std_not_std_is_void_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_hash_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_hash_int_R_std_not_std_is_reference_std_hash_int_R {
  __init_std_conditional_value0_std_not_std_is_void_std_hash_int_R_std_not_std_is_reference_std_hash_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_hash_int_R_value0 {
  __init_std_add_rvalue_reference_helper_std_hash_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_hash_int_R extends std_add_rvalue_reference_helper_std_hash_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_hash_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_hash_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_hash_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_detail_is_noexcept_hash_int_std_hash_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  __init_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_detail_is_noexcept_hash_int_std_hash_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  __init_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  __dtor() {
    std_detail_is_noexcept_hash_int_std_hash_int.prototype.__dtor.call(this);
  }
}
class std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  __init_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  __dtor() {
    std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int.prototype.__dtor.call(this);
  }
}
class std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  __init_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  __dtor() {
    std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_detail_is_noexcept_hash_int_std_hash_int_std_is_copy_assignable_std_hash_int {
  __init_std_conditional_value1_std_detail_is_noexcept_hash_int_std_hash_int_std_is_copy_assignable_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_default_constructible_std_hash_int {
  __init_std_conditional_value1_std_and_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_default_constructible_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_fast_hash_std_hash_int {
  __init_std_conditional_value1_std_and_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int_std_is_fast_hash_std_hash_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a);
  }
  __init_std_not_std_and_std_is_fast_hash_std_hash_int_std_is_default_constructible_std_hash_int_std_is_copy_assignable_std_hash_int_std_detail_is_noexcept_hash_int_std_hash_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_detail_Hashtable_traits_value0_value1_value1 {
  __init_std_detail_Hashtable_traits_value0_value1_value1(...$a) { }
  __dtor() {
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1 extends std_detail_Identity {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1(...$a) {
  }
  __dtor() {
    std_detail_Identity.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_detail_Identity.prototype)], i: 0};
  }
}
class std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1 extends std_hash_int {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1(...$a) {
  }
  __dtor() {
    std_hash_int.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_hash_int.prototype)], i: 0};
  }
}
class std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0 extends std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1 {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0(...$a);
  }
  __init_std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0(...$a) {
    std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1.call(this, $a[1]);
    std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.call(this, $a[2]);
  }
  __dtor() {
    std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1.prototype.__dtor.call(this);
  }
  _M_hash_code__c(__k) {
    let $t171;
    return (($t171 = this._M_h1(), $t171.a[$t171.i])).op_call__c(__k.a[__k.i]);
  }
  _M_bucket_index__c(...$a) {
    let $t172, $t173, $t174, $t175, $t176;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return (($t172 = this._M_h2(), $t172.a[$t172.i])).op_call__c($a[1], $a[2]);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return (($t176 = this._M_h2(), $t176.a[$t176.i])).op_call__c((($t175 = this._M_h1(), $t175.a[$t175.i])).op_call__c(($t173 = (($t174 = this._M_extract(), $t174.a[$t174.i])).op_call__c__rv({a: ($a[0]).a[($a[0]).i], i: "_M_v"}), $t173.a[$t173.i])), $a[1]);
    }
    else { throw new Error("no matching overload"); }
  }
  _M_store_code__c($p0, $p1) {
  }
  _M_extract() {
    return std_detail_Hashtable_ebo_helper_value0_std_detail_Identity_value1._S_get({a: [this], i: 0});
  }
  _M_h1() {
    return std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1._S_get({a: [this], i: 0});
  }
  _M_h2() {
    return std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1._S_get({a: [this], i: 0});
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value1_std_hash_int_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype)) std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0)) std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0[$k] = $b[$k];
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value2_std_detail_Mod_range_hashing_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype)) std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0)) std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0[$k] = $b[$k];
  }
}
class std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1 extends std_equal_to_int {
  constructor(...$a) {
    super(...[$a[0]]);
    this.__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1(...$a);
  }
  __init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1(...$a) {
  }
  __dtor() {
    std_equal_to_int.prototype.__dtor.call(this);
  }
  static _S_get(__eboh) {
    return {a: [Object.create(std_equal_to_int.prototype)], i: 0};
  }
}
class std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1 extends std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0 {
  constructor(...$a) {
    super(...[$a[0], $a[1], $a[2], $a[3]]);
    this.__init_std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  __init_std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
    std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1.prototype.__init_std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1.call(this, $a[4]);
  }
  __dtor() {
    std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype.__dtor.call(this);
    std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1.prototype.__dtor.call(this);
  }
  _M_equals__c(__k, __c, __n) {
    return std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_long_long_value0._S_equals(this._M_eq(), this._M_extract(), __k, __c, (__n ? {a: __n.a, i: __n.i} : null));
  }
  _M_eq() {
    return std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1._S_get({a: [this], i: 0});
  }
}
for (let $b = std_detail_Hashtable_ebo_helper_value0_std_equal_to_int_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1.prototype)) std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1)) std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1[$k] = $b[$k];
  }
}
class std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1 {
  constructor(...$a) {
    this.__init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1(...$a);
  }
  __init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1(...$a) {
  }
  __dtor() {
  }
}
class std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  __init_std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a) { }
  __dtor() {
  }
  _M_conjure_hashtable() {
    return {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
  }
  insert(__v) {
    let __h = this._M_conjure_hashtable();
    return (__h.a[__h.i])._M_insert__rv(__v, new std_integral_constant_bool_value1());
  }
}
class std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1 extends std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  constructor(...$a) {
    super();
    this.__init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1(...$a);
  }
  __init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1(...$a) {
  }
  __dtor() {
    std_detail_Insert_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype.__dtor.call(this);
  }
}
class std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 {
  constructor(...$a) {
    this.__init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  __init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
  }
  __dtor() {
  }
}
class std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1 {
  __init_std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1(...$a) { }
  __dtor() {
  }
}
class std_detail_Node_iterator_base_int_value0 {
  _M_cur;
  constructor(...$a) {
    this.__init_std_detail_Node_iterator_base_int_value0(...$a);
  }
  __init_std_detail_Node_iterator_base_int_value0(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_base_int_value0)) {
      this._M_cur = (((($a[0]).a[($a[0]).i])._M_cur) ? {a: ((($a[0]).a[($a[0]).i])._M_cur).a, i: ((($a[0]).a[($a[0]).i])._M_cur).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_cur = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_incr() {
    let $t177;
    this._M_cur = ($t177 = (this._M_cur.a[this._M_cur.i])._M_next__c(), $t177 ? {a: $t177.a, i: $t177.i} : null);
  }
}
class std_detail_Node_const_iterator_int_value1_value0 extends std_detail_Node_iterator_base_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_detail_Node_const_iterator_int_value1_value0(...$a);
  }
  __init_std_detail_Node_const_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_detail_Node_iterator_base_int_value0.prototype.__dtor.call(this);
  }
}
class std_detail_Hash_node_int_value0 extends std_detail_Hash_node_base {
  _M_v;
  constructor(...$a) {
    super();
    this.__init_std_detail_Hash_node_int_value0(...$a);
  }
  __init_std_detail_Hash_node_int_value0(...$a) {
    let $t178;
    this._M_v = ($t178 = std_forward_1_int($a[0]), $t178.a[$t178.i]);
  }
  __dtor() {
    std_detail_Hash_node_base.prototype.__dtor.call(this);
  }
  _M_next__c() {
    return (this._M_nxt ? {a: this._M_nxt.a, i: this._M_nxt.i} : null);
  }
}
class std_detail_Node_iterator_int_value1_value0 extends std_detail_Node_iterator_base_int_value0 {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [null] : $a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object") ? [(($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_int_value1_value0) ? [$a[0]] : []));
    this.__init_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_detail_Node_iterator_int_value1_value0(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_int_value1_value0)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_detail_Node_iterator_base_int_value0.prototype.__dtor.call(this);
  }
  op_mul__c() {
    return {a: this._M_cur.a[this._M_cur.i], i: "_M_v"};
  }
  op_inc() {
    this._M_incr();
    return {a: [this], i: 0};
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
class std_pair_std_detail_Node_iterator_int_value1_value0_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_detail_Node_iterator_int_value1_value0_bool(...$a);
  }
  __init_std_pair_std_detail_Node_iterator_int_value1_value0_bool(...$a) {
    let $t179;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_detail_Node_iterator_int_value1_value0_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_int_value1_value0) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_detail_Node_iterator_int_value1_value0(std_forward_1_std_detail_Node_iterator_int_value1_value0($a[0]));
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($t179 = std_forward_1_bool($a[1]), $t179.a[$t179.i]);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_detail_Node_iterator_int_value1_value0_R {
  __init_std_remove_cv_std_detail_Node_iterator_int_value1_value0_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_detail_Node_iterator_int_value1_value0_R {
  __init_std_remove_volatile_std_detail_Node_iterator_int_value1_value0_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_detail_Node_iterator_int_value1_value0_R {
  __init_std_remove_const_std_detail_Node_iterator_int_value1_value0_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_function_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_is_array_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_detail_Node_iterator_int_value1_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0(...$a);
  }
  __init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R {
  __init_std_conditional_value1_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_R_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R extends std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R {
  __init_std_conditional_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_R_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0 {
  __init_std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R extends std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_R_value0.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_R_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_detail_Node_iterator_int_value1_value0 {
  __init_std_remove_cv_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_detail_Node_iterator_int_value1_value0 {
  __init_std_remove_volatile_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_detail_Node_iterator_int_value1_value0 {
  __init_std_remove_const_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_void_helper_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 extends std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_or_std_is_void_std_detail_Node_iterator_int_value1_value0_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value0_std_is_void_std_detail_Node_iterator_int_value1_value0_std_or_std_is_function_std_detail_Node_iterator_int_value1_value0_std_is_array_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0(...$a);
  }
  __init_std_is_convertible_helper_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value0_std_is_lvalue_reference_std_detail_Node_iterator_int_value1_value0_std_is_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 extends std_not_std_is_void_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_detail_Node_iterator_int_value1_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value1_std_not_std_is_void_std_detail_Node_iterator_int_value1_value0_std_not_std_is_reference_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1 {
  __init_std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0 extends std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_add_rvalue_reference_std_detail_Node_iterator_int_value1_value0(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_detail_Node_iterator_int_value1_value0_value1.prototype.__dtor.call(this);
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
class std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_detail_Node_iterator_int_value1_value0_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_int_R_int_R {
  __init_std_conditional_value1_int_R_int_R(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a);
  }
  __init_std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R(...$a) {
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
class std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a);
  }
  __init_std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_hash_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_hash_int_R(...$a);
  }
  __init_std_declval_protector_std_hash_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_conditional_value1_std_pair_std_detail_Node_iterator_int_value1_value0_bool_std_detail_Node_iterator_int_value1_value0 {
  __init_std_conditional_value1_std_pair_std_detail_Node_iterator_int_value1_value0_bool_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_declval_protector_std_detail_Node_iterator_int_value1_value0_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_detail_Node_iterator_int_value1_value0_R(...$a);
  }
  __init_std_declval_protector_std_detail_Node_iterator_int_value1_value0_R(...$a) {
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
class std_declval_protector_std_detail_Node_iterator_int_value1_value0 {
  constructor(...$a) {
    this.__init_std_declval_protector_std_detail_Node_iterator_int_value1_value0(...$a);
  }
  __init_std_declval_protector_std_detail_Node_iterator_int_value1_value0(...$a) {
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
class std_conditional_value0_std_detail_Identity_std_detail_Select1st {
  __init_std_conditional_value0_std_detail_Identity_std_detail_Select1st(...$a) { }
  __dtor() {
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
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a);
  }
  __init_std_Head_base_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R_value0(...$a) {
    this._M_head_impl = $a[0];
  }
  __dtor() {
  }
  static _M_head(__b) {
    return (__b.a[__b.i])._M_head_impl;
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
class std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P {
  __init_std_conditional_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_conditional_value1_std_detail_Identity_std_detail_Select1st {
  __init_std_conditional_value1_std_detail_Identity_std_detail_Select1st(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  __init_gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t180;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t180 = operatornew__unsigned_long_long((__n * 29)), $t180 ? {a: $t180.a, i: $t180.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 29));
  }
  construct__rv(__p, __args_0, __args_1, __args_2) {
    (__p.a[__p.i] = new std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1.prototype.__dtor.call(this);
  }
}
class std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 extends std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1 {
  _M_node;
  constructor(...$a) {
    super(...[std_forward_1_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int($a[0])]);
    this.__init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a);
  }
  __init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(...$a) {
    this._M_node = new std_detail_Hash_node_base();
    this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
  }
  __dtor() {
    std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1.prototype.__dtor.call(this);
  }
}
class std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1 extends std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1 {
  _M_buckets;
  _M_bucket_count;
  _M_bbegin;
  _M_element_count;
  _M_rehash_policy;
  constructor(...$a) {
    super(...($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Select1st) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int) ? [$a[5], $a[1], $a[2], $a[3], $a[4]] : $a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) ? [{a: [new std_detail_Select1st()], i: 0}, ($a[1] === undefined ? ({a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[2])] : []));
    this.__init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a);
  }
  __init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(...$a) {
    let $t181;
    if ($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Select1st) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.call(this);
      std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1.prototype.__init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1.call(this);
      std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype.__init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.call(this);
      std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__init_std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.call(this);
      this._M_buckets = null;
      this._M_bucket_count = 0;
      this._M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1($a[6]);
      this._M_bbegin.ctj_a = this; this._M_bbegin.ctj_i = "_M_bbegin";
      this._M_element_count = 0;
      this._M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      this._M_rehash_policy.ctj_a = this; this._M_rehash_policy.ctj_i = "_M_rehash_policy";
      this._M_bucket_count = this._M_rehash_policy._M_next_bkt__c($a[0]);
      this._M_buckets = ($t181 = this._M_allocate_buckets(this._M_bucket_count), $t181 ? {a: $t181.a, i: $t181.i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int))) {
      this.__init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(($a[0] === undefined ? (10) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[2]), {a: [new std_detail_Select1st()], i: 0}, ($a[3] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[3]));
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_detail_Hashtable_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value1_value0_value1.prototype.__dtor.call(this);
    std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__dtor.call(this);
    std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1.prototype.__dtor.call(this);
    std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype.__dtor.call(this);
    std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__dtor.call(this);
  }
  _M_node_allocator() {
    return {a: this, i: "_M_bbegin"};
  }
  _M_before_begin() {
    return {a: this._M_bbegin, i: "_M_node"};
  }
  _M_deallocate_node(__n) {
    let $t182, $t183;
    (($t182 = this._M_node_allocator(), $t182.a[$t182.i])).destroy((__n ? {a: __n.a, i: __n.i} : null));
    (($t183 = this._M_node_allocator(), $t183.a[$t183.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), 1);
  }
  _M_allocate_buckets(__n) {
    let $t184;
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    let __p = ($t184 = __alloc.allocate(__n, {a: [0], i: 0}), $t184 ? {a: $t184.a, i: $t184.i} : null);
    (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__p), 0, Math.trunc(((__n * 8)) / 8));
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_deallocate_buckets(__p, __n) {
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    __alloc.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
  }
  _M_bucket_begin__c(__bkt) {
    let $t185;
    let __n = ((this._M_buckets.a[this._M_buckets.i + (__bkt)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).i} : null);
    return ($t185 = (__n ? (__n.a[__n.i])._M_nxt : null), $t185 ? {a: $t185.a, i: $t185.i} : null);
  }
  _M_begin__c() {
    let $t186, $t187;
    return ($t187 = (($t186 = this._M_before_begin(), $t186.a[$t186.i]))._M_nxt, $t187 ? {a: $t187.a, i: $t187.i} : null);
  }
  begin() {
    let $t188;
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($t188 = this._M_begin__c(), $t188 ? {a: $t188.a, i: $t188.i} : null));
  }
  end() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(null);
  }
  size__c() {
    return this._M_element_count;
  }
  count__c(__k) {
    let $t189, $t190, $t191;
    let __code = this._M_hash_code__c(__k);
    let __n = this._M_bucket_index__c(__k, __code);
    let __p = ($t189 = this._M_bucket_begin__c(__n), $t189 ? {a: $t189.a, i: $t189.i} : null);
    if ((!__p)) {
      return 0;
    }
    let __result = 0;
    for (; ; __p = ($t190 = (__p.a[__p.i])._M_next__c(), $t190 ? {a: $t190.a, i: $t190.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          ++__result;
        }
        else {
          if (__result) {
            break;
          }
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t191 = (__p.a[__p.i])._M_next__c(), $t191 ? {a: $t191.a, i: $t191.i} : null)) !== __n))) {
          break;
        }
      }
    }
    return __result;
  }
  _M_bucket_index__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype._M_bucket_index__c.call(this, (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), this._M_bucket_count);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char) && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype._M_bucket_index__c.call(this, $a[0], $a[1], this._M_bucket_count);
    }
    else { throw new Error("no matching overload"); }
  }
  _M_find_before_node__c(__n, __k, __code) {
    let $t192, $t193;
    let __prev_p = ((this._M_buckets.a[this._M_buckets.i + (__n)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__n)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__n)]).i} : null);
    if ((!__prev_p)) {
      return null;
    }
    let __p = (((__prev_p.a[__prev_p.i])._M_nxt) ? {a: ((__prev_p.a[__prev_p.i])._M_nxt).a, i: ((__prev_p.a[__prev_p.i])._M_nxt).i} : null);
    for (; ; __p = ($t192 = (__p.a[__p.i])._M_next__c(), $t192 ? {a: $t192.a, i: $t192.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          return (__prev_p ? {a: __prev_p.a, i: __prev_p.i} : null);
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t193 = (__p.a[__p.i])._M_next__c(), $t193 ? {a: $t193.a, i: $t193.i} : null)) !== __n))) {
          break;
        }
        __prev_p = (__p ? {a: __p.a, i: __p.i} : null);
      }
    }
    return null;
  }
  _M_find_node__c(__bkt, __key, __c) {
    let $t194;
    let __before_n = ($t194 = this._M_find_before_node__c(__bkt, __key, __c), $t194 ? {a: $t194.a, i: $t194.i} : null);
    if (__before_n) {
      return (((__before_n.a[__before_n.i])._M_nxt) ? {a: ((__before_n.a[__before_n.i])._M_nxt).a, i: ((__before_n.a[__before_n.i])._M_nxt).i} : null);
    }
    return null;
  }
  _M_insert_bucket_begin(__bkt, __node) {
    let $t195, $t196, $t197, $t198, $t199;
    if (this._M_buckets.a[this._M_buckets.i + (__bkt)]) {
       {
        (__node.a[__node.i])._M_nxt = ((((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
        ((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
      }
    }
    else {
       {
        (__node.a[__node.i])._M_nxt = ($t196 = (($t195 = this._M_before_begin(), $t195.a[$t195.i]))._M_nxt, $t196 ? {a: $t196.a, i: $t196.i} : null);
        (($t197 = this._M_before_begin(), $t197.a[$t197.i]))._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
        if ((__node.a[__node.i])._M_nxt) {
          this._M_buckets.a[this._M_buckets.i + (this._M_bucket_index__c(($t198 = (__node.a[__node.i])._M_next__c(), $t198 ? {a: $t198.a, i: $t198.i} : null)))] = (__node ? {a: __node.a, i: __node.i} : null);
        }
        this._M_buckets.a[this._M_buckets.i + (__bkt)] = ($t199 = this._M_before_begin(), $t199 ? {a: $t199.a, i: $t199.i} : null);
      }
    }
  }
  _M_insert_unique_node(__bkt, __code, __node) {
    let $t200;
    let __saved_state = {a: [this._M_rehash_policy._M_state__c()], i: 0};
    let __do_rehash = this._M_rehash_policy._M_need_rehash__c(this._M_bucket_count, this._M_element_count, 1);
    if (true) {
       {
        if (__do_rehash.first) {
           {
            this._M_rehash(__do_rehash.second, __saved_state);
            __bkt = this._M_bucket_index__c((($t200 = this._M_extract(), $t200.a[$t200.i])).op_call__c__rv({a: __node.a[__node.i], i: "_M_v"}), __code);
          }
        }
        this._M_store_code__c((__node ? {a: __node.a, i: __node.i} : null), __code);
        this._M_insert_bucket_begin(__bkt, (__node ? {a: __node.a, i: __node.i} : null));
        ++this._M_element_count;
        return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1((__node ? {a: __node.a, i: __node.i} : null));
      }
    }
    if (false) {
       {
        this._M_deallocate_node((__node ? {a: __node.a, i: __node.i} : null));
      }
    }
  }
  _M_rehash_aux(__n, $p1) {
    let $t201, $t202, $t203, $t204, $t205, $t206, $t207, $t208;
    let __new_buckets = ($t201 = this._M_allocate_buckets(__n), $t201 ? {a: $t201.a, i: $t201.i} : null);
    let __p = ($t202 = this._M_begin__c(), $t202 ? {a: $t202.a, i: $t202.i} : null);
    (($t203 = this._M_before_begin(), $t203.a[$t203.i]))._M_nxt = null;
    let __bbegin_bkt = 0;
    while (__p) {
       {
        let __next = ($t204 = (__p.a[__p.i])._M_next__c(), $t204 ? {a: $t204.a, i: $t204.i} : null);
        let __bkt = std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype._M_bucket_index__c.call(this, (__p ? {a: __p.a, i: __p.i} : null), __n);
        if ((!(__new_buckets.a[__new_buckets.i + (__bkt)]))) {
           {
            (__p.a[__p.i])._M_nxt = ($t206 = (($t205 = this._M_before_begin(), $t205.a[$t205.i]))._M_nxt, $t206 ? {a: $t206.a, i: $t206.i} : null);
            (($t207 = this._M_before_begin(), $t207.a[$t207.i]))._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
            __new_buckets.a[__new_buckets.i + (__bkt)] = ($t208 = this._M_before_begin(), $t208 ? {a: $t208.a, i: $t208.i} : null);
            if ((__p.a[__p.i])._M_nxt) {
              __new_buckets.a[__new_buckets.i + (__bbegin_bkt)] = (__p ? {a: __p.a, i: __p.i} : null);
            }
            __bbegin_bkt = __bkt;
          }
        }
        else {
           {
            (__p.a[__p.i])._M_nxt = ((((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
            ((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
          }
        }
        __p = (__next ? {a: __next.a, i: __next.i} : null);
      }
    }
    this._M_deallocate_buckets((this._M_buckets ? {a: this._M_buckets.a, i: this._M_buckets.i} : null), this._M_bucket_count);
    this._M_bucket_count = __n;
    this._M_buckets = (__new_buckets ? {a: __new_buckets.a, i: __new_buckets.i} : null);
  }
  _M_rehash(__n, __state) {
    if (true) {
       {
        this._M_rehash_aux(__n, new std_integral_constant_bool_value1());
      }
    }
    if (false) {
       {
        this._M_rehash_policy._M_reset(__state.a[__state.i]);
      }
    }
  }
  _M_allocate_node__rv(__args_0, __args_1, __args_2) {
    let $t209, $t210, $t211, $t212;
    let __n = ($t210 = (($t209 = this._M_node_allocator(), $t209.a[$t209.i])).allocate(1, {a: [0], i: 0}), $t210 ? {a: $t210.a, i: $t210.i} : null);
    if (true) {
       {
        (($t211 = this._M_node_allocator(), $t211.a[$t211.i])).construct__rv((__n ? {a: __n.a, i: __n.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2));
        return (__n ? {a: __n.a, i: __n.i} : null);
      }
    }
    if (false) {
       {
        (($t212 = this._M_node_allocator(), $t212.a[$t212.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), 1);
      }
    }
  }
}
for (let $b = std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1)) std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1[$k] = $b[$k];
  }
}
class std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int extends std_allow_copy_cons_value1 {
  _M_h;
  constructor(...$a) {
    super();
    this.__init_std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a);
  }
  __init_std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) {
    this._M_h = new std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(($a[0] === undefined ? (10) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), ($a[2] === undefined ? ({a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[2]), ($a[3] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[3]));
    this._M_h.ctj_a = this; this._M_h.ctj_i = "_M_h";
  }
  __dtor() {
    std_allow_copy_cons_value1.prototype.__dtor.call(this);
  }
  size__c() {
    return this._M_h.size__c();
  }
  begin() {
    return this._M_h.begin();
  }
  end() {
    return this._M_h.end();
  }
  count__c(__x) {
    return this._M_h.count__c(__x);
  }
  op_index(__k) {
    return this._M_h.op_index(__k);
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
class std_pair_bool_unsigned_long_long {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_bool_unsigned_long_long(...$a);
  }
  __init_std_pair_bool_unsigned_long_long(...$a) {
    this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
    this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
  }
  __dtor() {
  }
}
class std_is_convertible_unsigned_long_long_R_unsigned_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a);
  }
  __init_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_unsigned_long_long_R(...$a);
  }
  __init_std_is_void_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_unsigned_long_long_R {
  __init_std_remove_cv_unsigned_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_unsigned_long_long_R {
  __init_std_remove_volatile_unsigned_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_unsigned_long_long_R {
  __init_std_remove_const_unsigned_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_unsigned_long_long_R(...$a);
  }
  __init_std_is_void_helper_unsigned_long_long_R(...$a) {
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
class std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_void_unsigned_long_long_R_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
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
class std_conditional_value0_std_is_void_unsigned_long_long_R_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  __init_std_conditional_value0_std_is_void_unsigned_long_long_R_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_unsigned_long_long_R_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_unsigned_long_long_R(...$a);
  }
  __init_std_is_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_unsigned_long_long_R(...$a);
  }
  __init_std_is_lvalue_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_unsigned_long_long_R(...$a);
  }
  __init_std_is_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R extends std_is_lvalue_reference_unsigned_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_unsigned_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R {
  __init_std_conditional_value1_std_is_lvalue_reference_unsigned_long_long_R_std_is_rvalue_reference_unsigned_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_unsigned_long_long_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_unsigned_long_long_R(...$a);
  }
  __init_std_not_std_is_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_unsigned_long_long_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_unsigned_long_long_R(...$a);
  }
  __init_std_not_std_is_void_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R extends std_not_std_is_reference_unsigned_long_long_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_unsigned_long_long_R_std_not_std_is_void_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_unsigned_long_long_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_unsigned_long_long_R_std_not_std_is_reference_unsigned_long_long_R {
  __init_std_conditional_value0_std_not_std_is_void_unsigned_long_long_R_std_not_std_is_reference_unsigned_long_long_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_long_long_R_value0 {
  __init_std_add_rvalue_reference_helper_unsigned_long_long_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_long_long_R extends std_add_rvalue_reference_helper_unsigned_long_long_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_unsigned_long_long_R(...$a);
  }
  __init_std_add_rvalue_reference_unsigned_long_long_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_unsigned_long_long_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long extends std_is_convertible_unsigned_long_long_R_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a);
  }
  __init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_long_long_R_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_unsigned_long_long_R_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_unsigned_long_long_R_unsigned_long_long_std_is_convertible_bool_R_bool {
  __init_std_conditional_value1_std_is_convertible_unsigned_long_long_R_unsigned_long_long_std_is_convertible_bool_R_bool(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_unsigned_long_long_unsigned_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a);
  }
  __init_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_unsigned_long_long(...$a);
  }
  __init_std_is_void_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_unsigned_long_long {
  __init_std_remove_cv_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_unsigned_long_long {
  __init_std_remove_volatile_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_remove_const_unsigned_long_long {
  __init_std_remove_const_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_unsigned_long_long(...$a);
  }
  __init_std_is_void_helper_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long extends std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_void_unsigned_long_long_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_unsigned_long_long_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long {
  __init_std_conditional_value0_std_is_void_unsigned_long_long_std_or_std_is_function_unsigned_long_long_std_is_array_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0(...$a);
  }
  __init_std_is_convertible_helper_unsigned_long_long_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_unsigned_long_long(...$a);
  }
  __init_std_is_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_unsigned_long_long(...$a);
  }
  __init_std_is_lvalue_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_unsigned_long_long extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_unsigned_long_long(...$a);
  }
  __init_std_is_rvalue_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long extends std_is_rvalue_reference_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long(...$a);
  }
  __init_std_or_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long {
  __init_std_conditional_value0_std_is_lvalue_reference_unsigned_long_long_std_is_rvalue_reference_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_unsigned_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_unsigned_long_long(...$a);
  }
  __init_std_not_std_is_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_unsigned_long_long extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_unsigned_long_long(...$a);
  }
  __init_std_not_std_is_void_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long extends std_not_std_is_void_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long(...$a);
  }
  __init_std_and_std_not_std_is_reference_unsigned_long_long_std_not_std_is_void_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_not_std_is_void_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_unsigned_long_long_std_not_std_is_reference_unsigned_long_long {
  __init_std_conditional_value1_std_not_std_is_void_unsigned_long_long_std_not_std_is_reference_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_long_long_value1 {
  __init_std_add_rvalue_reference_helper_unsigned_long_long_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_long_long extends std_add_rvalue_reference_helper_unsigned_long_long_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_unsigned_long_long(...$a);
  }
  __init_std_add_rvalue_reference_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_unsigned_long_long_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long extends std_is_convertible_unsigned_long_long_unsigned_long_long {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a);
  }
  __init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_long_long_unsigned_long_long(...$a) {
  }
  __dtor() {
    std_is_convertible_unsigned_long_long_unsigned_long_long.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_unsigned_long_long_unsigned_long_long_std_is_convertible_bool_bool {
  __init_std_conditional_value1_std_is_convertible_unsigned_long_long_unsigned_long_long_std_is_convertible_bool_bool(...$a) { }
  __dtor() {
  }
}
class std_tuple_element_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_tuple_element_value0_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
  __dtor() {
  }
}
class std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_long_long_value1 {
  __init_std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_long_long_value1(...$a) { }
  __dtor() {
  }
  static _S_equals(__eq, __extract, __k, __c, __n) {
    return ((__c === (__n.a[__n.i])._M_hash_code) && (__eq.a[__eq.i]).op_call__c(__k, (__extract.a[__extract.i]).op_call__c__rv({a: __n.a[__n.i], i: "_M_v"})));
  }
}
class std_allocator_int_rebind_std_detail_Hash_node_int_value0 {
  __init_std_allocator_int_rebind_std_detail_Hash_node_int_value0(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_int_value0 {
  __init_gnu_cxx_new_allocator_std_detail_Hash_node_int_value0(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t213;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t213 = operatornew__unsigned_long_long((__n * 12)), $t213 ? {a: $t213.a, i: $t213.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 12));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_detail_Hash_node_int_value0(std_forward_1_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
  destroy(__p) {
    (__p.a[__p.i]).__dtor();
  }
}
class std_allocator_std_detail_Hash_node_int_value0 extends gnu_cxx_new_allocator_std_detail_Hash_node_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_detail_Hash_node_int_value0(...$a);
  }
  __init_std_allocator_std_detail_Hash_node_int_value0(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_detail_Hash_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0 extends std_allocator_std_detail_Hash_node_int_value0 {
  _M_node;
  constructor(...$a) {
    super(...[std_forward_1_std_allocator_int($a[0])]);
    this.__init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0(...$a);
  }
  __init_std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0(...$a) {
    this._M_node = new std_detail_Hash_node_base();
    this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
  }
  __dtor() {
    std_allocator_std_detail_Hash_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1 extends std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1 {
  _M_buckets;
  _M_bucket_count;
  _M_bbegin;
  _M_element_count;
  _M_rehash_policy;
  constructor(...$a) {
    super(...($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_int) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Identity) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_int) ? [$a[5], $a[1], $a[2], $a[3], $a[4]] : $a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_int)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_int)) ? [{a: [new std_detail_Identity()], i: 0}, ($a[1] === undefined ? ({a: [new std_hash_int()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_int()], i: 0}) : $a[2])] : []));
    this.__init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a);
  }
  __init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(...$a) {
    let $t214;
    if ($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_int) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Identity) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_int)) {
      std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.call(this);
      std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1.prototype.__init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1.call(this);
      std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype.__init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.call(this);
      std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__init_std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.call(this);
      this._M_buckets = null;
      this._M_bucket_count = 0;
      this._M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0($a[6]);
      this._M_bbegin.ctj_a = this; this._M_bbegin.ctj_i = "_M_bbegin";
      this._M_element_count = 0;
      this._M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      this._M_rehash_policy.ctj_a = this; this._M_rehash_policy.ctj_i = "_M_rehash_policy";
      this._M_bucket_count = this._M_rehash_policy._M_next_bkt__c($a[0]);
      this._M_buckets = ($t214 = this._M_allocate_buckets(this._M_bucket_count), $t214 ? {a: $t214.a, i: $t214.i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_int)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_int))) {
      this.__init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(($a[0] === undefined ? (10) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_int()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_int()], i: 0}) : $a[2]), {a: [new std_detail_Identity()], i: 0}, ($a[3] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[3]));
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_detail_Hashtable_base_int_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Hashtable_traits_value0_value1_value1.prototype.__dtor.call(this);
    std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__dtor.call(this);
    std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1.prototype.__dtor.call(this);
    std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype.__dtor.call(this);
    std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__dtor.call(this);
  }
  _M_node_allocator() {
    return {a: this, i: "_M_bbegin"};
  }
  _M_before_begin() {
    return {a: this._M_bbegin, i: "_M_node"};
  }
  _M_deallocate_node(__n) {
    let $t215, $t216;
    (($t215 = this._M_node_allocator(), $t215.a[$t215.i])).destroy((__n ? {a: __n.a, i: __n.i} : null));
    (($t216 = this._M_node_allocator(), $t216.a[$t216.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), 1);
  }
  _M_allocate_buckets(__n) {
    let $t217;
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    let __p = ($t217 = __alloc.allocate(__n, {a: [0], i: 0}), $t217 ? {a: $t217.a, i: $t217.i} : null);
    (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__p), 0, Math.trunc(((__n * 8)) / 8));
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_deallocate_buckets(__p, __n) {
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    __alloc.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
  }
  _M_bucket_begin__c(__bkt) {
    let $t218;
    let __n = ((this._M_buckets.a[this._M_buckets.i + (__bkt)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).i} : null);
    return ($t218 = (__n ? (__n.a[__n.i])._M_nxt : null), $t218 ? {a: $t218.a, i: $t218.i} : null);
  }
  _M_begin__c() {
    let $t219, $t220;
    return ($t220 = (($t219 = this._M_before_begin(), $t219.a[$t219.i]))._M_nxt, $t220 ? {a: $t220.a, i: $t220.i} : null);
  }
  begin() {
    let $t221;
    return new std_detail_Node_iterator_int_value1_value0(($t221 = this._M_begin__c(), $t221 ? {a: $t221.a, i: $t221.i} : null));
  }
  end() {
    return new std_detail_Node_iterator_int_value1_value0(null);
  }
  size__c() {
    return this._M_element_count;
  }
  count__c(__k) {
    let $t222, $t223, $t224;
    let __code = this._M_hash_code__c(__k);
    let __n = this._M_bucket_index__c(__k, __code);
    let __p = ($t222 = this._M_bucket_begin__c(__n), $t222 ? {a: $t222.a, i: $t222.i} : null);
    if ((!__p)) {
      return 0;
    }
    let __result = 0;
    for (; ; __p = ($t223 = (__p.a[__p.i])._M_next__c(), $t223 ? {a: $t223.a, i: $t223.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          ++__result;
        }
        else {
          if (__result) {
            break;
          }
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t224 = (__p.a[__p.i])._M_next__c(), $t224 ? {a: $t224.a, i: $t224.i} : null)) !== __n))) {
          break;
        }
      }
    }
    return __result;
  }
  _M_bucket_index__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype._M_bucket_index__c.call(this, (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), this._M_bucket_count);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype._M_bucket_index__c.call(this, $a[0], $a[1], this._M_bucket_count);
    }
    else { throw new Error("no matching overload"); }
  }
  _M_find_before_node__c(__n, __k, __code) {
    let $t225, $t226;
    let __prev_p = ((this._M_buckets.a[this._M_buckets.i + (__n)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__n)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__n)]).i} : null);
    if ((!__prev_p)) {
      return null;
    }
    let __p = (((__prev_p.a[__prev_p.i])._M_nxt) ? {a: ((__prev_p.a[__prev_p.i])._M_nxt).a, i: ((__prev_p.a[__prev_p.i])._M_nxt).i} : null);
    for (; ; __p = ($t225 = (__p.a[__p.i])._M_next__c(), $t225 ? {a: $t225.a, i: $t225.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          return (__prev_p ? {a: __prev_p.a, i: __prev_p.i} : null);
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t226 = (__p.a[__p.i])._M_next__c(), $t226 ? {a: $t226.a, i: $t226.i} : null)) !== __n))) {
          break;
        }
        __prev_p = (__p ? {a: __p.a, i: __p.i} : null);
      }
    }
    return null;
  }
  _M_find_node__c(__bkt, __key, __c) {
    let $t227;
    let __before_n = ($t227 = this._M_find_before_node__c(__bkt, __key, __c), $t227 ? {a: $t227.a, i: $t227.i} : null);
    if (__before_n) {
      return (((__before_n.a[__before_n.i])._M_nxt) ? {a: ((__before_n.a[__before_n.i])._M_nxt).a, i: ((__before_n.a[__before_n.i])._M_nxt).i} : null);
    }
    return null;
  }
  _M_insert_bucket_begin(__bkt, __node) {
    let $t228, $t229, $t230, $t231, $t232;
    if (this._M_buckets.a[this._M_buckets.i + (__bkt)]) {
       {
        (__node.a[__node.i])._M_nxt = ((((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
        ((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
      }
    }
    else {
       {
        (__node.a[__node.i])._M_nxt = ($t229 = (($t228 = this._M_before_begin(), $t228.a[$t228.i]))._M_nxt, $t229 ? {a: $t229.a, i: $t229.i} : null);
        (($t230 = this._M_before_begin(), $t230.a[$t230.i]))._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
        if ((__node.a[__node.i])._M_nxt) {
          this._M_buckets.a[this._M_buckets.i + (this._M_bucket_index__c(($t231 = (__node.a[__node.i])._M_next__c(), $t231 ? {a: $t231.a, i: $t231.i} : null)))] = (__node ? {a: __node.a, i: __node.i} : null);
        }
        this._M_buckets.a[this._M_buckets.i + (__bkt)] = ($t232 = this._M_before_begin(), $t232 ? {a: $t232.a, i: $t232.i} : null);
      }
    }
  }
  _M_insert_unique_node(__bkt, __code, __node) {
    let $t233;
    let __saved_state = {a: [this._M_rehash_policy._M_state__c()], i: 0};
    let __do_rehash = this._M_rehash_policy._M_need_rehash__c(this._M_bucket_count, this._M_element_count, 1);
    if (true) {
       {
        if (__do_rehash.first) {
           {
            this._M_rehash(__do_rehash.second, __saved_state);
            __bkt = this._M_bucket_index__c((($t233 = this._M_extract(), $t233.a[$t233.i])).op_call__c__rv({a: __node.a[__node.i], i: "_M_v"}), __code);
          }
        }
        this._M_store_code__c((__node ? {a: __node.a, i: __node.i} : null), __code);
        this._M_insert_bucket_begin(__bkt, (__node ? {a: __node.a, i: __node.i} : null));
        ++this._M_element_count;
        return new std_detail_Node_iterator_int_value1_value0((__node ? {a: __node.a, i: __node.i} : null));
      }
    }
    if (false) {
       {
        this._M_deallocate_node((__node ? {a: __node.a, i: __node.i} : null));
      }
    }
  }
  _M_rehash_aux(__n, $p1) {
    let $t234, $t235, $t236, $t237, $t238, $t239, $t240, $t241;
    let __new_buckets = ($t234 = this._M_allocate_buckets(__n), $t234 ? {a: $t234.a, i: $t234.i} : null);
    let __p = ($t235 = this._M_begin__c(), $t235 ? {a: $t235.a, i: $t235.i} : null);
    (($t236 = this._M_before_begin(), $t236.a[$t236.i]))._M_nxt = null;
    let __bbegin_bkt = 0;
    while (__p) {
       {
        let __next = ($t237 = (__p.a[__p.i])._M_next__c(), $t237 ? {a: $t237.a, i: $t237.i} : null);
        let __bkt = std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype._M_bucket_index__c.call(this, (__p ? {a: __p.a, i: __p.i} : null), __n);
        if ((!(__new_buckets.a[__new_buckets.i + (__bkt)]))) {
           {
            (__p.a[__p.i])._M_nxt = ($t239 = (($t238 = this._M_before_begin(), $t238.a[$t238.i]))._M_nxt, $t239 ? {a: $t239.a, i: $t239.i} : null);
            (($t240 = this._M_before_begin(), $t240.a[$t240.i]))._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
            __new_buckets.a[__new_buckets.i + (__bkt)] = ($t241 = this._M_before_begin(), $t241 ? {a: $t241.a, i: $t241.i} : null);
            if ((__p.a[__p.i])._M_nxt) {
              __new_buckets.a[__new_buckets.i + (__bbegin_bkt)] = (__p ? {a: __p.a, i: __p.i} : null);
            }
            __bbegin_bkt = __bkt;
          }
        }
        else {
           {
            (__p.a[__p.i])._M_nxt = ((((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
            ((__new_buckets.a[__new_buckets.i + (__bkt)]).a[(__new_buckets.a[__new_buckets.i + (__bkt)]).i])._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
          }
        }
        __p = (__next ? {a: __next.a, i: __next.i} : null);
      }
    }
    this._M_deallocate_buckets((this._M_buckets ? {a: this._M_buckets.a, i: this._M_buckets.i} : null), this._M_bucket_count);
    this._M_bucket_count = __n;
    this._M_buckets = (__new_buckets ? {a: __new_buckets.a, i: __new_buckets.i} : null);
  }
  _M_rehash(__n, __state) {
    if (true) {
       {
        this._M_rehash_aux(__n, new std_integral_constant_bool_value1());
      }
    }
    if (false) {
       {
        this._M_rehash_policy._M_reset(__state.a[__state.i]);
      }
    }
  }
  _M_insert__rv(__v, $p1) {
    let $t242, $t243, $t244;
    let __k = (($t242 = this._M_extract(), $t242.a[$t242.i])).op_call__c__rv(__v);
    let __code = this._M_hash_code__c(__k);
    let __bkt = this._M_bucket_index__c(__k, __code);
    let __n = {v: ($t243 = this._M_find_node__c(__bkt, __k, __code), $t243 ? {a: $t243.a, i: $t243.i} : null)};
    if (__n.v) {
      return std_make_pair_std_detail_Node_iterator_int_value1_value0_bool({a: [new std_detail_Node_iterator_int_value1_value0((__n.v ? {a: __n.v.a, i: __n.v.i} : null))], i: 0}, {a: [false], i: 0});
    }
    __n.v = ($t244 = this._M_allocate_node__rv(std_forward_1_int(__v)), $t244 ? {a: $t244.a, i: $t244.i} : null);
    return std_make_pair_std_detail_Node_iterator_int_value1_value0_bool({a: [this._M_insert_unique_node(__bkt, __code, (__n.v ? {a: __n.v.a, i: __n.v.i} : null))], i: 0}, {a: [true], i: 0});
  }
  _M_allocate_node__rv(__args_0) {
    let $t245, $t246, $t247, $t248;
    let __n = ($t246 = (($t245 = this._M_node_allocator(), $t245.a[$t245.i])).allocate(1, {a: [0], i: 0}), $t246 ? {a: $t246.a, i: $t246.i} : null);
    if (true) {
       {
        (($t247 = this._M_node_allocator(), $t247.a[$t247.i])).construct__rv((__n ? {a: __n.a, i: __n.i} : null), std_forward_1_int(__args_0));
        return (__n ? {a: __n.a, i: __n.i} : null);
      }
    }
    if (false) {
       {
        (($t248 = this._M_node_allocator(), $t248.a[$t248.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), 1);
      }
    }
  }
}
for (let $b = std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1[$k] = $b[$k];
  }
}
for (let $b = std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1)) std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1[$k] = $b[$k];
  }
}
class std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int extends std_allow_copy_cons_value1 {
  _M_h;
  constructor(...$a) {
    super();
    this.__init_std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(...$a);
  }
  __init_std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(...$a) {
    this._M_h = new std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(($a[0] === undefined ? (10) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_int()], i: 0}) : $a[1]), ($a[2] === undefined ? ({a: [new std_equal_to_int()], i: 0}) : $a[2]), ($a[3] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[3]));
    this._M_h.ctj_a = this; this._M_h.ctj_i = "_M_h";
  }
  __dtor() {
    std_allow_copy_cons_value1.prototype.__dtor.call(this);
  }
  size__c() {
    return this._M_h.size__c();
  }
  begin() {
    return this._M_h.begin();
  }
  end() {
    return this._M_h.end();
  }
  insert(__x) {
    return this._M_h.insert(__x);
  }
  count__c(__x) {
    return this._M_h.count__c(__x);
  }
}
class std_decay_and_strip_std_detail_Node_iterator_int_value1_value0 {
  __init_std_decay_and_strip_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_decay_std_detail_Node_iterator_int_value1_value0 {
  __init_std_decay_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_std_detail_Node_iterator_int_value1_value0 {
  __init_std_remove_reference_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_decay_selector_std_detail_Node_iterator_int_value1_value0_value0_value0 {
  __init_std_decay_selector_std_detail_Node_iterator_int_value1_value0_value0_value0(...$a) { }
  __dtor() {
  }
}
class std_strip_reference_wrapper_std_detail_Node_iterator_int_value1_value0 {
  __init_std_strip_reference_wrapper_std_detail_Node_iterator_int_value1_value0(...$a) { }
  __dtor() {
  }
}
class std_decay_and_strip_bool {
  __init_std_decay_and_strip_bool(...$a) { }
  __dtor() {
  }
}
class std_decay_bool {
  __init_std_decay_bool(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_bool {
  __init_std_remove_reference_bool(...$a) { }
  __dtor() {
  }
}
class std_decay_selector_bool_value0_value0 {
  __init_std_decay_selector_bool_value0_value0(...$a) { }
  __dtor() {
  }
}
class std_strip_reference_wrapper_bool {
  __init_std_strip_reference_wrapper_bool(...$a) { }
  __dtor() {
  }
}
class std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_long_long_value0 {
  __init_std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_long_long_value0(...$a) { }
  __dtor() {
  }
  static _S_equals(__eq, __extract, __k, $p3, __n) {
    return (__eq.a[__eq.i]).op_call__c(__k, (__extract.a[__extract.i]).op_call__c__rv({a: __n.a[__n.i], i: "_M_v"}));
  }
}
class std_remove_reference_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int {
  __init_std_remove_reference_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_base_P {
  __init_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_rebind_std_detail_Hash_node_base_P(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_Hash_node_base_P {
  __init_gnu_cxx_new_allocator_std_detail_Hash_node_base_P(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t249;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t249 = operatornew__unsigned_long_long((__n * 8)), $t249 ? {a: $t249.a, i: $t249.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 8));
  }
}
class std_allocator_std_detail_Hash_node_base_P extends gnu_cxx_new_allocator_std_detail_Hash_node_base_P {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1) ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_detail_Hash_node_int_value0) ? [] : []));
    this.__init_std_allocator_std_detail_Hash_node_base_P(...$a);
  }
  __init_std_allocator_std_detail_Hash_node_base_P(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_detail_Hash_node_int_value0)) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_std_detail_Hash_node_base_P.prototype.__dtor.call(this);
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
class std_declval_protector_unsigned_long_long_R {
  constructor(...$a) {
    this.__init_std_declval_protector_unsigned_long_long_R(...$a);
  }
  __init_std_declval_protector_unsigned_long_long_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_unsigned_long_long {
  constructor(...$a) {
    this.__init_std_declval_protector_unsigned_long_long(...$a);
  }
  __init_std_declval_protector_unsigned_long_long(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_pair_get_value0 {
  __init_std_pair_get_value0(...$a) { }
  __dtor() {
  }
  static __move_get__rv(__pair) {
    return std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char({a: __pair.a[__pair.i], i: "first"});
  }
}
class std_remove_reference_std_allocator_int {
  __init_std_remove_reference_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int_rebind_std_detail_Hash_node_base_P {
  __init_std_allocator_int_rebind_std_detail_Hash_node_base_P(...$a) { }
  __dtor() {
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
class std_enable_if_value0_void {
  __init_std_enable_if_value0_void(...$a) { }
  __dtor() {
  }
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
class std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char {
  __init_std_remove_reference_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) { }
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
  _M_put(__ws, __len) {
    if (((!this._M_failed) && ((this._M_sbuf.a[this._M_sbuf.i]).sputn((__ws ? {a: __ws.a, i: __ws.i} : null), __len) !== __len))) {
      this._M_failed = true;
    }
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
    let $t250, $t251, $t252;
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && typeof $a[3] === "boolean") {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      if (((__flags & std_ios_base.boolalpha) === 0)) {
         {
          let __l = $a[3];
          ($a[0]).op_assign({a: [this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], __l)], i: 0});
        }
      }
      else {
         {
          let __uc = new std_use_cache_std_numpunct_cache_char();
          let __loc = (($a[1]).a[($a[1]).i])._M_getloc__c();
          let __lc = ($t250 = __uc.op_call__c(__loc), $t250 ? {a: $t250.a, i: $t250.i} : null);
          let __name = ($t251 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t251 ? {a: $t251.a, i: $t251.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t252 = {a: new Array((1 * __plen)).fill(0), i: 0}, $t252 ? {a: $t252.a, i: $t252.i} : null);
              std_char_traits_char.assign((__ps ? {a: __ps.a, i: __ps.i} : null), __plen, $a[2]);
              (($a[1]).a[($a[1]).i]).width(0);
              if (((__flags & std_ios_base.adjustfield) === std_ios_base.left)) {
                 {
                  ($a[0]).op_assign({a: [std_write_char(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
                  ($a[0]).op_assign({a: [std_write_char(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), (__ps ? {a: __ps.a, i: __ps.i} : null), __plen)], i: 0});
                }
              }
              else {
                 {
                  ($a[0]).op_assign({a: [std_write_char(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), (__ps ? {a: __ps.a, i: __ps.i} : null), __plen)], i: 0});
                  ($a[0]).op_assign({a: [std_write_char(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
                }
              }
              return new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
            }
          }
          (($a[1]).a[($a[1]).i]).width(0);
          ($a[0]).op_assign({a: [std_write_char(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
        }
      }
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
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
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_float__c(new std_ostreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), $a[1], $a[2], 0, $a[3]);
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
  op_mul__c() {
    return std_char_traits_char.to_char_type({a: [this._M_get__c()], i: 0});
  }
  op_inc() {
    if (this._M_sbuf) {
       {
        (this._M_sbuf.a[this._M_sbuf.i]).sbumpc();
        this._M_c = std_char_traits_char.eof();
      }
    }
    return {a: [this], i: 0};
  }
  equal__c(__b) {
    return (this._M_at_eof__c() === (__b.a[__b.i])._M_at_eof__c());
  }
  _M_get__c() {
    let __eof = {v: std_char_traits_char.eof()};
    let __ret = __eof.v;
    if (this._M_sbuf) {
       {
        if ((!(std_char_traits_char.eq_int_type({a: this, i: "_M_c"}, {a: __eof, i: "v"})))) {
          __ret = this._M_c;
        }
        else {
          if ((!(std_char_traits_char.eq_int_type({a: [__ret = (this._M_sbuf.a[this._M_sbuf.i]).sgetc()], i: 0}, {a: __eof, i: "v"})))) {
            this._M_c = __ret;
          }
          else {
            this._M_sbuf = null;
          }
        }
      }
    }
    return __ret;
  }
  _M_at_eof__c() {
    let __eof = {v: std_char_traits_char.eof()};
    return std_char_traits_char.eq_int_type({a: [this._M_get__c()], i: 0}, {a: __eof, i: "v"});
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
  _M_extract_float__c(__beg, __end, __io, __err, __xtrc) {
    let $t253, $t254, $t255;
    let __uc = new std_use_cache_std_numpunct_cache_char();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t253 = __uc.op_call__c(__loc), $t253 ? {a: $t253.a, i: $t253.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_18_char_std_char_traits_char({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
              __c.v = __beg.op_mul__c();
            }
            else {
              __testeof = true;
            }
          }
        }
      }
    }
    let __found_mantissa = false;
    let __sep_pos = 0;
    while ((!__testeof)) {
       {
        if ((((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep)) || (__c.v === (__lc.a[__lc.i])._M_decimal_point))) {
          break;
        }
        else {
          if ((__c.v === __lit.a[__lit.i + (4)])) {
             {
              if ((!__found_mantissa)) {
                 {
                  (__xtrc.a[__xtrc.i]).op_add_assign(48);
                  __found_mantissa = true;
                }
              }
              ++__sep_pos;
              if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
                __c.v = __beg.op_mul__c();
              }
              else {
                __testeof = true;
              }
            }
          }
          else {
            break;
          }
        }
      }
    }
    let __found_dec = false;
    let __found_sci = false;
    let __found_grouping = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
    if ((__lc.a[__lc.i])._M_use_grouping) {
      __found_grouping.v.reserve(32);
    }
    let __lit_zero = ($t254 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t254 ? {a: $t254.a, i: $t254.i} : null);
    if ((!((__lc.a[__lc.i])._M_allocated))) {
      while ((!__testeof)) {
         {
          let __digit = this._M_find__c((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, __c.v);
          if ((__digit !== (-(1)))) {
             {
              (__xtrc.a[__xtrc.i]).op_add_assign((48 + __digit));
              __found_mantissa = true;
            }
          }
          else {
            if ((((__c.v === (__lc.a[__lc.i])._M_decimal_point) && (!__found_dec)) && (!__found_sci))) {
               {
                (__xtrc.a[__xtrc.i]).op_add_assign(46);
                __found_dec = true;
              }
            }
            else {
              if (((((__c.v === __lit.a[__lit.i + (0)]) || (__c.v === __lit.a[__lit.i + (0)])) && (!__found_sci)) && __found_mantissa)) {
                 {
                  (__xtrc.a[__xtrc.i]).op_add_assign(101);
                  __found_sci = true;
                  if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
                     {
                      __c.v = __beg.op_mul__c();
                      let __plus = (__c.v === __lit.a[__lit.i + (1)]);
                      if ((__plus || (__c.v === __lit.a[__lit.i + (0)]))) {
                        (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
                      }
                      else {
                        continue;
                      }
                    }
                  }
                  else {
                     {
                      __testeof = true;
                      break;
                    }
                  }
                }
              }
              else {
                break;
              }
            }
          }
          if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
            __c.v = __beg.op_mul__c();
          }
          else {
            __testeof = true;
          }
        }
      }
    }
    else {
      while ((!__testeof)) {
         {
          if (((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))) {
             {
              if (((!__found_dec) && (!__found_sci))) {
                 {
                  if (__sep_pos) {
                     {
                      __found_grouping.v.op_add_assign(__sep_pos);
                      __sep_pos = 0;
                    }
                  }
                  else {
                     {
                      (__xtrc.a[__xtrc.i]).clear();
                      break;
                    }
                  }
                }
              }
              else {
                break;
              }
            }
          }
          else {
            if ((__c.v === (__lc.a[__lc.i])._M_decimal_point)) {
               {
                if (((!__found_dec) && (!__found_sci))) {
                   {
                    if (__found_grouping.v.size__c()) {
                      __found_grouping.v.op_add_assign(__sep_pos);
                    }
                    (__xtrc.a[__xtrc.i]).op_add_assign(46);
                    __found_dec = true;
                  }
                }
                else {
                  break;
                }
              }
            }
            else {
               {
                let __q = ($t255 = std_char_traits_char.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t255 ? {a: $t255.a, i: $t255.i} : null);
                if (__q) {
                   {
                    (__xtrc.a[__xtrc.i]).op_add_assign((48 + ((__q ? __q.i : 0) - (__lit_zero ? __lit_zero.i : 0))));
                    __found_mantissa = true;
                    ++__sep_pos;
                  }
                }
                else {
                  if (((((__c.v === __lit.a[__lit.i + (0)]) || (__c.v === __lit.a[__lit.i + (0)])) && (!__found_sci)) && __found_mantissa)) {
                     {
                      if ((__found_grouping.v.size__c() && (!__found_dec))) {
                        __found_grouping.v.op_add_assign(__sep_pos);
                      }
                      (__xtrc.a[__xtrc.i]).op_add_assign(101);
                      __found_sci = true;
                      if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
                         {
                          __c.v = __beg.op_mul__c();
                          let __plus = (__c.v === __lit.a[__lit.i + (1)]);
                          if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
                            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
                          }
                          else {
                            continue;
                          }
                        }
                      }
                      else {
                         {
                          __testeof = true;
                          break;
                        }
                      }
                    }
                  }
                  else {
                    break;
                  }
                }
              }
            }
          }
          if (std_operator_17_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
            __c.v = __beg.op_mul__c();
          }
          else {
            __testeof = true;
          }
        }
      }
    }
    if (__found_grouping.v.size__c()) {
       {
        if (((!__found_dec) && (!__found_sci))) {
          __found_grouping.v.op_add_assign(__sep_pos);
        }
        if ((!(std_verify_grouping((((__lc.a[__lc.i])._M_grouping) ? {a: ((__lc.a[__lc.i])._M_grouping).a, i: ((__lc.a[__lc.i])._M_grouping).i} : null), (__lc.a[__lc.i])._M_grouping_size, {a: __found_grouping, i: "v"})))) {
          __err.a[__err.i] = std_ios_base.failbit;
        }
      }
    }
    return new std_istreambuf_iterator_char_std_char_traits_char({a: [__beg], i: 0});
  }
  do_get__c(...$a) {
    let $t256, $t257, $t258;
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      if ((!(((($a[2]).a[($a[2]).i]).flags__c() & std_ios_base.boolalpha)))) {
         {
          let __l = {v: (-(1))};
          ($a[0]).op_assign({a: [this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __l, i: "v"})], i: 0});
          if (((__l.v === 0) || (__l.v === 1))) {
            ($a[4]).a[($a[4]).i] = (__l.v !== 0);
          }
          else {
             {
              ($a[4]).a[($a[4]).i] = true;
              ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
              if (std_operator_18_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
                ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
              }
            }
          }
        }
      }
      else {
         {
          let __uc = new std_use_cache_std_numpunct_cache_char();
          let __loc = (($a[2]).a[($a[2]).i])._M_getloc__c();
          let __lc = ($t256 = __uc.op_call__c(__loc), $t256 ? {a: $t256.a, i: $t256.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_18_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
                 {
                  __testeof = true;
                  break;
                }
              }
              let __c = ($a[0]).op_mul__c();
              if ((!__donef)) {
                __testf = (__c === ((__lc.a[__lc.i])._M_falsename).a[((__lc.a[__lc.i])._M_falsename).i + (__n)]);
              }
              if (((!__testf) && __donet)) {
                break;
              }
              if ((!__donet)) {
                __testt = (__c === ((__lc.a[__lc.i])._M_truename).a[((__lc.a[__lc.i])._M_truename).i + (__n)]);
              }
              if (((!__testt) && __donef)) {
                break;
              }
              if (((!__testt) && (!__testf))) {
                break;
              }
              ++__n;
              ($a[0]).op_inc();
              __donef = ((!__testf) || (__n >= (__lc.a[__lc.i])._M_falsename_size));
              __donet = ((!__testt) || (__n >= (__lc.a[__lc.i])._M_truename_size));
            }
          }
          if (((__testf && (__n === (__lc.a[__lc.i])._M_falsename_size)) && __n)) {
             {
              ($a[4]).a[($a[4]).i] = false;
              if ((__testt && (__n === (__lc.a[__lc.i])._M_truename_size))) {
                ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
              }
              else {
                ($a[3]).a[($a[3]).i] = (__testeof ? std_ios_base.eofbit : std_ios_base.goodbit);
              }
            }
          }
          else {
            if (((__testt && (__n === (__lc.a[__lc.i])._M_truename_size)) && __n)) {
               {
                ($a[4]).a[($a[4]).i] = true;
                ($a[3]).a[($a[3]).i] = (__testeof ? std_ios_base.eofbit : std_ios_base.goodbit);
              }
            }
            else {
               {
                ($a[4]).a[($a[4]).i] = false;
                ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
                if (__testeof) {
                  ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
                }
              }
            }
          }
        }
      }
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
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
      return this._M_extract_int__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_float(($t257 = __xtrc.v.c_str__c(), $t257 ? {a: $t257.a, i: $t257.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_18_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t258 = __xtrc.v.c_str__c(), $t258 ? {a: $t258.a, i: $t258.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_18_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
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
  _M_find__c($p0, __len, __c) {
    let __ret = (-(1));
    if ((__len <= 10)) {
       {
        if (((__c >= 48) && (__c < (48 + __len)))) {
          __ret = (__c - 48);
        }
      }
    }
    else {
       {
        if (((__c >= 48) && (__c <= 57))) {
          __ret = (__c - 48);
        }
        else {
          if (((__c >= 97) && (__c <= 102))) {
            __ret = (10 + (__c - 97));
          }
          else {
            if (((__c >= 65) && (__c <= 70))) {
              __ret = (10 + (__c - 65));
            }
          }
        }
      }
    }
    return __ret;
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
  widen__c(__lo, __hi, __to) {
    let $t259;
    return ($t259 = this.do_widen__c((__lo ? {a: __lo.a, i: __lo.i} : null), (__hi ? {a: __hi.a, i: __hi.i} : null), (__to ? {a: __to.a, i: __to.i} : null)), $t259 ? {a: $t259.a, i: $t259.i} : null);
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
  _M_put(__ws, __len) {
    if (((!this._M_failed) && ((this._M_sbuf.a[this._M_sbuf.i]).sputn((__ws ? {a: __ws.a, i: __ws.i} : null), __len) !== __len))) {
      this._M_failed = true;
    }
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
    let $t260, $t261, $t262;
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && typeof $a[3] === "boolean") {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      if (((__flags & std_ios_base.boolalpha) === 0)) {
         {
          let __l = $a[3];
          ($a[0]).op_assign({a: [this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], __l)], i: 0});
        }
      }
      else {
         {
          let __uc = new std_use_cache_std_numpunct_cache_wchar_t();
          let __loc = (($a[1]).a[($a[1]).i])._M_getloc__c();
          let __lc = ($t260 = __uc.op_call__c(__loc), $t260 ? {a: $t260.a, i: $t260.i} : null);
          let __name = ($t261 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t261 ? {a: $t261.a, i: $t261.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t262 = {a: new Array((4 * __plen)).fill(0), i: 0}, $t262 ? {a: $t262.a, i: $t262.i} : null);
              std_char_traits_wchar_t.assign((__ps ? {a: __ps.a, i: __ps.i} : null), __plen, $a[2]);
              (($a[1]).a[($a[1]).i]).width(0);
              if (((__flags & std_ios_base.adjustfield) === std_ios_base.left)) {
                 {
                  ($a[0]).op_assign({a: [std_write_wchar_t(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
                  ($a[0]).op_assign({a: [std_write_wchar_t(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), (__ps ? {a: __ps.a, i: __ps.i} : null), __plen)], i: 0});
                }
              }
              else {
                 {
                  ($a[0]).op_assign({a: [std_write_wchar_t(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), (__ps ? {a: __ps.a, i: __ps.i} : null), __plen)], i: 0});
                  ($a[0]).op_assign({a: [std_write_wchar_t(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
                }
              }
              return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
            }
          }
          (($a[1]).a[($a[1]).i]).width(0);
          ($a[0]).op_assign({a: [std_write_wchar_t(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), (__name ? {a: __name.a, i: __name.i} : null), __len)], i: 0});
        }
      }
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
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
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_int__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], $a[3]);
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return this._M_insert_float__c(new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), $a[1], $a[2], 0, $a[3]);
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
  op_mul__c() {
    return std_char_traits_wchar_t.to_char_type({a: [this._M_get__c()], i: 0});
  }
  op_inc() {
    if (this._M_sbuf) {
       {
        (this._M_sbuf.a[this._M_sbuf.i]).sbumpc();
        this._M_c = std_char_traits_wchar_t.eof();
      }
    }
    return {a: [this], i: 0};
  }
  equal__c(__b) {
    return (this._M_at_eof__c() === (__b.a[__b.i])._M_at_eof__c());
  }
  _M_get__c() {
    let __eof = {v: std_char_traits_wchar_t.eof()};
    let __ret = __eof.v;
    if (this._M_sbuf) {
       {
        if ((!(std_char_traits_wchar_t.eq_int_type({a: this, i: "_M_c"}, {a: __eof, i: "v"})))) {
          __ret = this._M_c;
        }
        else {
          if ((!(std_char_traits_wchar_t.eq_int_type({a: [__ret = (this._M_sbuf.a[this._M_sbuf.i]).sgetc()], i: 0}, {a: __eof, i: "v"})))) {
            this._M_c = __ret;
          }
          else {
            this._M_sbuf = null;
          }
        }
      }
    }
    return __ret;
  }
  _M_at_eof__c() {
    let __eof = {v: std_char_traits_wchar_t.eof()};
    return std_char_traits_wchar_t.eq_int_type({a: [this._M_get__c()], i: 0}, {a: __eof, i: "v"});
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
  _M_extract_float__c(__beg, __end, __io, __err, __xtrc) {
    let $t263, $t264, $t265;
    let __uc = new std_use_cache_std_numpunct_cache_wchar_t();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t263 = __uc.op_call__c(__loc), $t263 ? {a: $t263.a, i: $t263.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_18_wchar_t_std_char_traits_wchar_t({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
              __c.v = __beg.op_mul__c();
            }
            else {
              __testeof = true;
            }
          }
        }
      }
    }
    let __found_mantissa = false;
    let __sep_pos = 0;
    while ((!__testeof)) {
       {
        if ((((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep)) || (__c.v === (__lc.a[__lc.i])._M_decimal_point))) {
          break;
        }
        else {
          if ((__c.v === __lit.a[__lit.i + (4)])) {
             {
              if ((!__found_mantissa)) {
                 {
                  (__xtrc.a[__xtrc.i]).op_add_assign(48);
                  __found_mantissa = true;
                }
              }
              ++__sep_pos;
              if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
                __c.v = __beg.op_mul__c();
              }
              else {
                __testeof = true;
              }
            }
          }
          else {
            break;
          }
        }
      }
    }
    let __found_dec = false;
    let __found_sci = false;
    let __found_grouping = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
    if ((__lc.a[__lc.i])._M_use_grouping) {
      __found_grouping.v.reserve(32);
    }
    let __lit_zero = ($t264 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t264 ? {a: $t264.a, i: $t264.i} : null);
    if ((!((__lc.a[__lc.i])._M_allocated))) {
      while ((!__testeof)) {
         {
          let __digit = this._M_find__c((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, __c.v);
          if ((__digit !== (-(1)))) {
             {
              (__xtrc.a[__xtrc.i]).op_add_assign((48 + __digit));
              __found_mantissa = true;
            }
          }
          else {
            if ((((__c.v === (__lc.a[__lc.i])._M_decimal_point) && (!__found_dec)) && (!__found_sci))) {
               {
                (__xtrc.a[__xtrc.i]).op_add_assign(46);
                __found_dec = true;
              }
            }
            else {
              if (((((__c.v === __lit.a[__lit.i + (0)]) || (__c.v === __lit.a[__lit.i + (0)])) && (!__found_sci)) && __found_mantissa)) {
                 {
                  (__xtrc.a[__xtrc.i]).op_add_assign(101);
                  __found_sci = true;
                  if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
                     {
                      __c.v = __beg.op_mul__c();
                      let __plus = (__c.v === __lit.a[__lit.i + (1)]);
                      if ((__plus || (__c.v === __lit.a[__lit.i + (0)]))) {
                        (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
                      }
                      else {
                        continue;
                      }
                    }
                  }
                  else {
                     {
                      __testeof = true;
                      break;
                    }
                  }
                }
              }
              else {
                break;
              }
            }
          }
          if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
            __c.v = __beg.op_mul__c();
          }
          else {
            __testeof = true;
          }
        }
      }
    }
    else {
      while ((!__testeof)) {
         {
          if (((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))) {
             {
              if (((!__found_dec) && (!__found_sci))) {
                 {
                  if (__sep_pos) {
                     {
                      __found_grouping.v.op_add_assign(__sep_pos);
                      __sep_pos = 0;
                    }
                  }
                  else {
                     {
                      (__xtrc.a[__xtrc.i]).clear();
                      break;
                    }
                  }
                }
              }
              else {
                break;
              }
            }
          }
          else {
            if ((__c.v === (__lc.a[__lc.i])._M_decimal_point)) {
               {
                if (((!__found_dec) && (!__found_sci))) {
                   {
                    if (__found_grouping.v.size__c()) {
                      __found_grouping.v.op_add_assign(__sep_pos);
                    }
                    (__xtrc.a[__xtrc.i]).op_add_assign(46);
                    __found_dec = true;
                  }
                }
                else {
                  break;
                }
              }
            }
            else {
               {
                let __q = ($t265 = std_char_traits_wchar_t.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t265 ? {a: $t265.a, i: $t265.i} : null);
                if (__q) {
                   {
                    (__xtrc.a[__xtrc.i]).op_add_assign((48 + ((__q ? __q.i : 0) - (__lit_zero ? __lit_zero.i : 0))));
                    __found_mantissa = true;
                    ++__sep_pos;
                  }
                }
                else {
                  if (((((__c.v === __lit.a[__lit.i + (0)]) || (__c.v === __lit.a[__lit.i + (0)])) && (!__found_sci)) && __found_mantissa)) {
                     {
                      if ((__found_grouping.v.size__c() && (!__found_dec))) {
                        __found_grouping.v.op_add_assign(__sep_pos);
                      }
                      (__xtrc.a[__xtrc.i]).op_add_assign(101);
                      __found_sci = true;
                      if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
                         {
                          __c.v = __beg.op_mul__c();
                          let __plus = (__c.v === __lit.a[__lit.i + (1)]);
                          if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
                            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
                          }
                          else {
                            continue;
                          }
                        }
                      }
                      else {
                         {
                          __testeof = true;
                          break;
                        }
                      }
                    }
                  }
                  else {
                    break;
                  }
                }
              }
            }
          }
          if (std_operator_17_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
            __c.v = __beg.op_mul__c();
          }
          else {
            __testeof = true;
          }
        }
      }
    }
    if (__found_grouping.v.size__c()) {
       {
        if (((!__found_dec) && (!__found_sci))) {
          __found_grouping.v.op_add_assign(__sep_pos);
        }
        if ((!(std_verify_grouping((((__lc.a[__lc.i])._M_grouping) ? {a: ((__lc.a[__lc.i])._M_grouping).a, i: ((__lc.a[__lc.i])._M_grouping).i} : null), (__lc.a[__lc.i])._M_grouping_size, {a: __found_grouping, i: "v"})))) {
          __err.a[__err.i] = std_ios_base.failbit;
        }
      }
    }
    return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [__beg], i: 0});
  }
  do_get__c(...$a) {
    let $t266, $t267, $t268;
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      if ((!(((($a[2]).a[($a[2]).i]).flags__c() & std_ios_base.boolalpha)))) {
         {
          let __l = {v: (-(1))};
          ($a[0]).op_assign({a: [this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __l, i: "v"})], i: 0});
          if (((__l.v === 0) || (__l.v === 1))) {
            ($a[4]).a[($a[4]).i] = (__l.v !== 0);
          }
          else {
             {
              ($a[4]).a[($a[4]).i] = true;
              ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
              if (std_operator_18_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
                ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
              }
            }
          }
        }
      }
      else {
         {
          let __uc = new std_use_cache_std_numpunct_cache_wchar_t();
          let __loc = (($a[2]).a[($a[2]).i])._M_getloc__c();
          let __lc = ($t266 = __uc.op_call__c(__loc), $t266 ? {a: $t266.a, i: $t266.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_18_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
                 {
                  __testeof = true;
                  break;
                }
              }
              let __c = ($a[0]).op_mul__c();
              if ((!__donef)) {
                __testf = (__c === ((__lc.a[__lc.i])._M_falsename).a[((__lc.a[__lc.i])._M_falsename).i + (__n)]);
              }
              if (((!__testf) && __donet)) {
                break;
              }
              if ((!__donet)) {
                __testt = (__c === ((__lc.a[__lc.i])._M_truename).a[((__lc.a[__lc.i])._M_truename).i + (__n)]);
              }
              if (((!__testt) && __donef)) {
                break;
              }
              if (((!__testt) && (!__testf))) {
                break;
              }
              ++__n;
              ($a[0]).op_inc();
              __donef = ((!__testf) || (__n >= (__lc.a[__lc.i])._M_falsename_size));
              __donet = ((!__testt) || (__n >= (__lc.a[__lc.i])._M_truename_size));
            }
          }
          if (((__testf && (__n === (__lc.a[__lc.i])._M_falsename_size)) && __n)) {
             {
              ($a[4]).a[($a[4]).i] = false;
              if ((__testt && (__n === (__lc.a[__lc.i])._M_truename_size))) {
                ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
              }
              else {
                ($a[3]).a[($a[3]).i] = (__testeof ? std_ios_base.eofbit : std_ios_base.goodbit);
              }
            }
          }
          else {
            if (((__testt && (__n === (__lc.a[__lc.i])._M_truename_size)) && __n)) {
               {
                ($a[4]).a[($a[4]).i] = true;
                ($a[3]).a[($a[3]).i] = (__testeof ? std_ios_base.eofbit : std_ios_base.goodbit);
              }
            }
            else {
               {
                ($a[4]).a[($a[4]).i] = false;
                ($a[3]).a[($a[3]).i] = std_ios_base.failbit;
                if (__testeof) {
                  ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
                }
              }
            }
          }
        }
      }
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
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
      return this._M_extract_int__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], $a[4]);
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_float(($t267 = __xtrc.v.c_str__c(), $t267 ? {a: $t267.a, i: $t267.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_18_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t268 = __xtrc.v.c_str__c(), $t268 ? {a: $t268.a, i: $t268.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_18_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
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
  _M_find__c($p0, __len, __c) {
    let __ret = (-(1));
    if ((__len <= 10)) {
       {
        if (((__c >= 48) && (__c < (48 + __len)))) {
          __ret = (__c - 48);
        }
      }
    }
    else {
       {
        if (((__c >= 48) && (__c <= 57))) {
          __ret = (__c - 48);
        }
        else {
          if (((__c >= 97) && (__c <= 102))) {
            __ret = (10 + (__c - 97));
          }
          else {
            if (((__c >= 65) && (__c <= 70))) {
              __ret = (10 + (__c - 65));
            }
          }
        }
      }
    }
    return __ret;
  }
  static id = new std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t();
}
class std_numpunct_cache_char extends std_locale_facet {
  _M_grouping;
  _M_grouping_size;
  _M_use_grouping;
  _M_truename;
  _M_truename_size;
  _M_falsename;
  _M_falsename_size;
  _M_decimal_point;
  _M_thousands_sep;
  _M_atoms_out;
  _M_atoms_in;
  _M_allocated;
  constructor(...$a) {
    super(...[($a[0] === undefined ? (0) : $a[0])]);
    this.__init_std_numpunct_cache_char(...$a);
  }
  __init_std_numpunct_cache_char(...$a) {
    this._M_grouping = null;
    this._M_grouping_size = 0;
    this._M_use_grouping = false;
    this._M_truename = null;
    this._M_truename_size = 0;
    this._M_falsename = null;
    this._M_falsename_size = 0;
    this._M_decimal_point = 0;
    this._M_thousands_sep = 0;
    this._M_atoms_out = new Array(0).fill(0);
    this._M_atoms_in = new Array(26).fill(0);
    this._M_allocated = false;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  _M_cache(__loc) {
    let $t269, $t270, $t271, $t272, $t273, $t274, $t275, $t276, $t277, $t278, $t279;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_char(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t269 = (__np.a[__np.i]).grouping__c(), $t269)).size__c();
        __grouping = ($t270 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t270 ? {a: $t270.a, i: $t270.i} : null);
        (($t271 = (__np.a[__np.i]).grouping__c(), $t271)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t272 = (__np.a[__np.i]).truename__c(), $t272)).size__c();
        __truename = ($t273 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t273 ? {a: $t273.a, i: $t273.i} : null);
        (($t274 = (__np.a[__np.i]).truename__c(), $t274)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t275 = (__np.a[__np.i]).falsename__c(), $t275)).size__c();
        __falsename = ($t276 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t276 ? {a: $t276.a, i: $t276.i} : null);
        (($t277 = (__np.a[__np.i]).falsename__c(), $t277)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_char(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t278 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t278 ? {a: $t278.a, i: $t278.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t279 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t279 ? {a: $t279.a, i: $t279.i} : null), {a: this, i: "_M_atoms_in"});
      }
    }
    if (false) {
       {
      }
    }
  }
}
class std_use_cache_std_numpunct_cache_char {
  constructor(...$a) {
    this.__init_std_use_cache_std_numpunct_cache_char(...$a);
  }
  __init_std_use_cache_std_numpunct_cache_char(...$a) {
  }
  __dtor() {
  }
  op_call__c(__loc) {
    let $t280;
    let __i = std_numpunct_char.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t280 = {a: [new std_numpunct_cache_char(0)], i: 0}, $t280 ? {a: $t280.a, i: $t280.i} : null);
            (__tmp.a[__tmp.i])._M_cache(__loc);
          }
        }
        if (false) {
           {
          }
        }
        (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_install_cache((__tmp ? {a: __tmp.a, i: __tmp.i} : null), __i);
      }
    }
    return ((__caches.a[__caches.i + (__i)]) ? {a: (__caches.a[__caches.i + (__i)]).a, i: (__caches.a[__caches.i + (__i)]).i} : null);
  }
}
class gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long {
  __init_gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long(...$a) { }
  __dtor() {
  }
}
class std_numpunct_cache_wchar_t extends std_locale_facet {
  _M_grouping;
  _M_grouping_size;
  _M_use_grouping;
  _M_truename;
  _M_truename_size;
  _M_falsename;
  _M_falsename_size;
  _M_decimal_point;
  _M_thousands_sep;
  _M_atoms_out;
  _M_atoms_in;
  _M_allocated;
  constructor(...$a) {
    super(...[($a[0] === undefined ? (0) : $a[0])]);
    this.__init_std_numpunct_cache_wchar_t(...$a);
  }
  __init_std_numpunct_cache_wchar_t(...$a) {
    this._M_grouping = null;
    this._M_grouping_size = 0;
    this._M_use_grouping = false;
    this._M_truename = null;
    this._M_truename_size = 0;
    this._M_falsename = null;
    this._M_falsename_size = 0;
    this._M_decimal_point = 0;
    this._M_thousands_sep = 0;
    this._M_atoms_out = new Array(0).fill(0);
    this._M_atoms_in = new Array(26).fill(0);
    this._M_allocated = false;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  _M_cache(__loc) {
    let $t281, $t282, $t283, $t284, $t285, $t286, $t287, $t288, $t289, $t290, $t291;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_wchar_t(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t281 = (__np.a[__np.i]).grouping__c(), $t281)).size__c();
        __grouping = ($t282 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t282 ? {a: $t282.a, i: $t282.i} : null);
        (($t283 = (__np.a[__np.i]).grouping__c(), $t283)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t284 = (__np.a[__np.i]).truename__c(), $t284)).size__c();
        __truename = ($t285 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t285 ? {a: $t285.a, i: $t285.i} : null);
        (($t286 = (__np.a[__np.i]).truename__c(), $t286)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t287 = (__np.a[__np.i]).falsename__c(), $t287)).size__c();
        __falsename = ($t288 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t288 ? {a: $t288.a, i: $t288.i} : null);
        (($t289 = (__np.a[__np.i]).falsename__c(), $t289)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_wchar_t(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t290 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t290 ? {a: $t290.a, i: $t290.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t291 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t291 ? {a: $t291.a, i: $t291.i} : null), {a: this, i: "_M_atoms_in"});
      }
    }
    if (false) {
       {
      }
    }
  }
}
class std_use_cache_std_numpunct_cache_wchar_t {
  constructor(...$a) {
    this.__init_std_use_cache_std_numpunct_cache_wchar_t(...$a);
  }
  __init_std_use_cache_std_numpunct_cache_wchar_t(...$a) {
  }
  __dtor() {
  }
  op_call__c(__loc) {
    let $t292;
    let __i = std_numpunct_wchar_t.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t292 = {a: [new std_numpunct_cache_wchar_t(0)], i: 0}, $t292 ? {a: $t292.a, i: $t292.i} : null);
            (__tmp.a[__tmp.i])._M_cache(__loc);
          }
        }
        if (false) {
           {
          }
        }
        (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_install_cache((__tmp ? {a: __tmp.a, i: __tmp.i} : null), __i);
      }
    }
    return ((__caches.a[__caches.i + (__i)]) ? {a: (__caches.a[__caches.i + (__i)]).a, i: (__caches.a[__caches.i + (__i)]).i} : null);
  }
}
class std_numpunct_char extends std_locale_facet {
  _M_data;
  constructor(...$a) {
    super();
    this.__init_std_numpunct_char(...$a);
  }
  __init_std_numpunct_char(...$a) {
    this._M_data = null;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  decimal_point__c() {
    return this.do_decimal_point__c();
  }
  thousands_sep__c() {
    return this.do_thousands_sep__c();
  }
  grouping__c() {
    return this.do_grouping__c();
  }
  truename__c() {
    return this.do_truename__c();
  }
  falsename__c() {
    return this.do_falsename__c();
  }
  do_decimal_point__c() {
    return (this._M_data.a[this._M_data.i])._M_decimal_point;
  }
  do_thousands_sep__c() {
    return (this._M_data.a[this._M_data.i])._M_thousands_sep;
  }
  do_grouping__c() {
    return new std_basic_string_char_std_char_traits_char_std_allocator_char((((this._M_data.a[this._M_data.i])._M_grouping) ? {a: ((this._M_data.a[this._M_data.i])._M_grouping).a, i: ((this._M_data.a[this._M_data.i])._M_grouping).i} : null), {a: [new std_allocator_char()], i: 0});
  }
  do_truename__c() {
    return new std_basic_string_char_std_char_traits_char_std_allocator_char((((this._M_data.a[this._M_data.i])._M_truename) ? {a: ((this._M_data.a[this._M_data.i])._M_truename).a, i: ((this._M_data.a[this._M_data.i])._M_truename).i} : null), {a: [new std_allocator_char()], i: 0});
  }
  do_falsename__c() {
    return new std_basic_string_char_std_char_traits_char_std_allocator_char((((this._M_data.a[this._M_data.i])._M_falsename) ? {a: ((this._M_data.a[this._M_data.i])._M_falsename).a, i: ((this._M_data.a[this._M_data.i])._M_falsename).i} : null), {a: [new std_allocator_char()], i: 0});
  }
  static id = new std_numpunct_char();
}
class std_is_char_char {
  __init_std_is_char_char(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value1_int {
  __init_gnu_cxx_enable_if_value1_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_enable_if_value0_int {
  __init_gnu_cxx_enable_if_value0_int(...$a) { }
  __dtor() {
  }
}
class std_numpunct_wchar_t extends std_locale_facet {
  _M_data;
  constructor(...$a) {
    super();
    this.__init_std_numpunct_wchar_t(...$a);
  }
  __init_std_numpunct_wchar_t(...$a) {
    this._M_data = null;
  }
  __dtor() {
    std_locale_facet.prototype.__dtor.call(this);
  }
  decimal_point__c() {
    return this.do_decimal_point__c();
  }
  thousands_sep__c() {
    return this.do_thousands_sep__c();
  }
  grouping__c() {
    return this.do_grouping__c();
  }
  truename__c() {
    return this.do_truename__c();
  }
  falsename__c() {
    return this.do_falsename__c();
  }
  do_decimal_point__c() {
    return (this._M_data.a[this._M_data.i])._M_decimal_point;
  }
  do_thousands_sep__c() {
    return (this._M_data.a[this._M_data.i])._M_thousands_sep;
  }
  do_grouping__c() {
    return new std_basic_string_char_std_char_traits_char_std_allocator_char((((this._M_data.a[this._M_data.i])._M_grouping) ? {a: ((this._M_data.a[this._M_data.i])._M_grouping).a, i: ((this._M_data.a[this._M_data.i])._M_grouping).i} : null), {a: [new std_allocator_char()], i: 0});
  }
  do_truename__c() {
    return new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t((((this._M_data.a[this._M_data.i])._M_truename) ? {a: ((this._M_data.a[this._M_data.i])._M_truename).a, i: ((this._M_data.a[this._M_data.i])._M_truename).i} : null), {a: [new std_allocator_wchar_t()], i: 0});
  }
  do_falsename__c() {
    return new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t((((this._M_data.a[this._M_data.i])._M_falsename) ? {a: ((this._M_data.a[this._M_data.i])._M_falsename).a, i: ((this._M_data.a[this._M_data.i])._M_falsename).i} : null), {a: [new std_allocator_wchar_t()], i: 0});
  }
  static id = new std_numpunct_wchar_t();
}
class std_is_char_wchar_t {
  __init_std_is_char_wchar_t(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_numeric_traits_integer_char {
  constructor(...$a) {
    this.__init_gnu_cxx_numeric_traits_integer_char(...$a);
  }
  __init_gnu_cxx_numeric_traits_integer_char(...$a) {
  }
  __dtor() {
  }
  static __min = -128;
  static __max = 127;
  static __is_signed = 1;
  static __digits = 7;
}
class gnu_cxx_numeric_traits_char extends gnu_cxx_numeric_traits_integer_char {
  constructor(...$a) {
    super();
    this.__init_gnu_cxx_numeric_traits_char(...$a);
  }
  __init_gnu_cxx_numeric_traits_char(...$a) {
  }
  __dtor() {
    gnu_cxx_numeric_traits_integer_char.prototype.__dtor.call(this);
  }
}
class std_initializer_list_wchar_t {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_wchar_t(...$a);
  }
  __init_std_initializer_list_wchar_t(...$a) {
    this._M_array = null;
    this._M_len = 0;
  }
  __dtor() {
  }
}
class std_is_integer_wchar_t_P {
  __init_std_is_integer_wchar_t_P(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_wchar_t_P {
  __init_std_iterator_traits_wchar_t_P(...$a) { }
  __dtor() {
  }
}
class std_allocator_wchar_t_rebind_char {
  __init_std_allocator_wchar_t_rebind_char(...$a) { }
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_bad_cast(...$a) { throw new Error("unresolved external: std::__throw_bad_cast"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_throw_out_of_range(...$a) { throw new Error("unresolved external: std::__throw_out_of_range"); }
function wcslen(...$a) { throw new Error("unresolved external: wcslen"); }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function wmemset(...$a) { throw new Error("unresolved external: wmemset"); }
function std_wmemchr(__p, __c, __n) {
  let $t293;
  return ($t293 = std_wmemchr((__p ? {a: __p.a, i: __p.i} : null), __c, Math.trunc((__n) / 4)), $t293 ? {a: $t293.a, i: $t293.i} : null);
}
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function gnu_cxx_exchange_and_add_single(__mem, __val) {
  let __result = __mem.a[__mem.i];
  __mem.a[__mem.i] += __val;
  return __result;
}
function gnu_cxx_atomic_add_single(__mem, __val) {
  __mem.a[__mem.i] += __val;
}
function gnu_cxx_exchange_and_add_dispatch(__mem, __val) {
  return gnu_cxx_exchange_and_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function gnu_cxx_atomic_add_dispatch(__mem, __val) {
  gnu_cxx_atomic_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function std_Hash_bytes(...$a) { const $M = (1n << 64n) - 1n; const $mul = (0xc6a4a793n << 32n) + 0x5bd1e995n; const $mix = (v) => (v ^ (v >> 47n)) & $M; const $ptr = $a[0]; if ($ptr === null || $ptr === undefined) return 0; const $arr = Array.isArray($ptr) ? $ptr : $ptr.a, $base = Array.isArray($ptr) ? 0 : $ptr.i; const $byte = (k) => BigInt($arr[$base + k] & 255); const $len = $a[1] === undefined ? 0 : $a[1]; const $seed = $a[2] === undefined ? 0xc70f6907 : $a[2]; const $aligned = $len & ~7; let $h = (BigInt($seed) ^ (BigInt($len) * $mul)) & $M; for (let $p = 0; $p < $aligned; $p += 8) {   let $w = 0n; for (let $k = 0; $k < 8; $k++) $w |= $byte($p + $k) << BigInt(8 * $k);   $w = ($mix(($w * $mul) & $M) * $mul) & $M;   $h = (($h ^ $w) * $mul) & $M; } const $rem = $len & 7; if ($rem) {   let $w = 0n; for (let $k = $rem - 1; $k >= 0; $k--) $w = (($w << 8n) + $byte($aligned + $k)) & $M;   $h = (($h ^ $w) * $mul) & $M; } $h = ($mix($h) * $mul) & $M; return Number($mix($h)); }
function std_verify_grouping(...$a) { throw new Error("unresolved external: std::__verify_grouping"); }
function main() {
  let $t294, $t295, $t296, $t297, $t298, $t299, $t300, $t301, $t302, $t303, $t304, $t305, $t306, $t307, $t308;
  let m = new std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(10, {a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0});
  ($t294 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 97, 0], i: 0})], i: 0}), $t294.a[$t294.i] = 1);
  ($t295 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], i: 0}), $t295.a[$t295.i] = 2);
  ($t302 = ($t301 = ($t300 = ($t299 = ($t298 = (__ctj_write(__ctj_fmt(m.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t298), __ctj_write(__ctj_fmt((($t296 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 97, 0], i: 0})], i: 0}), $t296.a[$t296.i]) + ($t297 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], i: 0}), $t297.a[$t297.i])))), $t299), __ctj_write(__ctj_fmt([32, 0])), $t300), __ctj_write(__ctj_fmt(m.count__c({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [99, 99, 0], i: 0})], i: 0}))), $t301), __ctj_write("\n"), $t302);
  for (let $b0 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1({a: [m.begin()], i: 0}), $e0 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1({a: [m.end()], i: 0}); std_detail_operator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    ($t305 = ($t304 = ($t303 = (__ctj_write(__ctj_fmt((kv.a[kv.i]).first)), std_cout), __ctj_write(__ctj_fmt([61, 0])), $t303), __ctj_write(__ctj_fmt((kv.a[kv.i]).second)), $t304), __ctj_write(__ctj_fmt([32, 0])), $t305);
  }
  (__ctj_write("\n"), std_cout);
  let s = new std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(10, {a: [new std_hash_int()], i: 0}, {a: [new std_equal_to_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  s.insert({a: [5], i: 0});
  s.insert({a: [6], i: 0});
  s.insert({a: [5], i: 0});
  ($t308 = ($t307 = ($t306 = (__ctj_write(__ctj_fmt(s.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t306), __ctj_write(__ctj_fmt(s.count__c({a: [6], i: 0}))), $t307), __ctj_write("\n"), $t308);
  for (let $b1 = new std_detail_Node_iterator_int_value1_value0({a: [s.begin()], i: 0}), $e1 = new std_detail_Node_iterator_int_value1_value0({a: [s.end()], i: 0}); std_detail_operator_int_value0({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    (__ctj_write(__ctj_fmt(x)), std_cout);
  }
  (__ctj_write("\n"), std_cout);
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
function std_declval_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R() {
  return std_declval_protector_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_R.__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char_R.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_declval_std_basic_string_char_std_char_traits_char_std_allocator_char() {
  return std_declval_protector_std_basic_string_char_std_char_traits_char_std_allocator_char.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R() {
  return std_declval_protector_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_R.__delegate();
}
function std_declval_std_hash_int_R() {
  return std_declval_protector_std_hash_int_R.__delegate();
}
function std_declval_std_detail_Node_iterator_int_value1_value0_R() {
  return std_declval_protector_std_detail_Node_iterator_int_value1_value0_R.__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R.__delegate();
}
function std_declval_std_detail_Node_iterator_int_value1_value0() {
  return std_declval_protector_std_detail_Node_iterator_int_value1_value0.__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool.__delegate();
}
function std_declval_unsigned_long_long_R() {
  return std_declval_protector_unsigned_long_long_R.__delegate();
}
function std_declval_unsigned_long_long() {
  return std_declval_protector_unsigned_long_long.__delegate();
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
function std_detail_operator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1(__x, __y) {
  return (!(((__x.a[__x.i])._M_cur) === ((__y.a[__y.i])._M_cur) || (((__x.a[__x.i])._M_cur) && ((__y.a[__y.i])._M_cur) && ((__x.a[__x.i])._M_cur).a === ((__y.a[__y.i])._M_cur).a && ((__x.a[__x.i])._M_cur).i === ((__y.a[__y.i])._M_cur).i)));
}
function std_detail_operator_int_value0(__x, __y) {
  return (!(((__x.a[__x.i])._M_cur) === ((__y.a[__y.i])._M_cur) || (((__x.a[__x.i])._M_cur) && ((__y.a[__y.i])._M_cur) && ((__x.a[__x.i])._M_cur).a === ((__y.a[__y.i])._M_cur).a && ((__x.a[__x.i])._M_cur).i === ((__y.a[__y.i])._M_cur).i)));
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
function std_forward_1_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__t) {
  return __t;
}
function std_forward_1_std_allocator_int(__t) {
  return __t;
}
function std_forward_1_std_detail_Node_iterator_int_value1_value0(__t) {
  return __t;
}
function std_forward_1_bool(__t) {
  return __t;
}
function std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char(__t) {
  return __t;
}
function std_forward_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return __t;
}
function std_get_1_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__in) {
  return std_pair_get_value0.__move_get__rv(std_move_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__in));
}
function std_get_4_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t);
}
function std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_make_pair_std_detail_Node_iterator_int_value1_value0_bool(__x, __y) {
  return new std_pair_std_detail_Node_iterator_int_value1_value0_bool(std_forward_1_std_detail_Node_iterator_int_value1_value0(__x), std_forward_1_bool(__y));
}
function std_move_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(__t) {
  return __t;
}
function std_operator_8_char_std_char_traits_char_std_allocator_char(__lhs, __rhs) {
  return ((__lhs.a[__lhs.i]).compare__c(__rhs) === 0);
}
function std_operator_18_char_std_char_traits_char(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_18_wchar_t_std_char_traits_wchar_t(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_6_char_char($p0, $p1) {
  return true;
}
function std_operator_6_wchar_t_wchar_t($p0, $p1) {
  return true;
}
function std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R._M_head(__t);
}
function std_write_char(__s, __ws, __len) {
  __s._M_put((__ws ? {a: __ws.a, i: __ws.i} : null), __len);
  return new std_ostreambuf_iterator_char_std_char_traits_char({a: [__s], i: 0});
}
function std_write_wchar_t(__s, __ws, __len) {
  __s._M_put((__ws ? {a: __ws.a, i: __ws.i} : null), __len);
  return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [__s], i: 0});
}
function std_convert_to_v_float(...$a) { throw new Error("unresolved external: std::__convert_to_v<float>"); }
function std_convert_to_v_double(...$a) { throw new Error("unresolved external: std::__convert_to_v<double>"); }
function std_operator_17_char_std_char_traits_char(__a, __b) {
  return (!((__a.a[__a.i]).equal__c(__b)));
}
function std_operator_17_wchar_t_std_char_traits_wchar_t(__a, __b) {
  return (!((__a.a[__a.i]).equal__c(__b)));
}
function std_use_facet_std_numpunct_char(__loc) {
  let __i = std_numpunct_char.id._M_id__c();
  let __facets = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).i} : null);
  if (((__i >= (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets_size) || (!(__facets.a[__facets.i + (__i)])))) {
    std_throw_bad_cast();
  }
  return __facets.a[__facets.i + (__i)];
}
function std_use_facet_std_ctype_char(__loc) {
  let __i = std_ctype_char.id._M_id__c();
  let __facets = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).i} : null);
  if (((__i >= (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets_size) || (!(__facets.a[__facets.i + (__i)])))) {
    std_throw_bad_cast();
  }
  return __facets.a[__facets.i + (__i)];
}
function std_use_facet_std_numpunct_wchar_t(__loc) {
  let __i = std_numpunct_wchar_t.id._M_id__c();
  let __facets = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).i} : null);
  if (((__i >= (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets_size) || (!(__facets.a[__facets.i + (__i)])))) {
    std_throw_bad_cast();
  }
  return __facets.a[__facets.i + (__i)];
}
function std_use_facet_std_ctype_wchar_t(__loc) {
  let __i = std_ctype_wchar_t.id._M_id__c();
  let __facets = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets).i} : null);
  if (((__i >= (((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_facets_size) || (!(__facets.a[__facets.i + (__i)])))) {
    std_throw_bad_cast();
  }
  return __facets.a[__facets.i + (__i)];
}
let std_piecewise_construct = {v: new std_piecewise_construct_t()};
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let std_cout = {};
main();
__ctj_flush();
