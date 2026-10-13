"use strict";
const PRIME_BUCKETS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 103, 109, 113, 127, 137, 139, 149, 157, 167, 179, 193, 199, 211, 227, 241, 257, 277, 293, 313, 337, 359, 383, 409, 439, 467, 503, 541, 577, 619, 661, 709, 761, 823, 887, 953, 1031, 1109, 1193, 1289, 1381, 1493, 1613, 1741, 1879, 2029, 2179, 2357, 2549, 2753, 2971, 3209, 3469, 3739, 4027, 4349, 4703, 5087, 5503, 5953, 6427, 6949, 7517, 8123, 8783, 9497, 10273, 11113, 12011, 12983, 14033, 15173, 16411, 17749, 19183, 20753, 22447, 24281, 26267, 28411, 30727, 33223, 35933, 38873, 42043, 45481, 49201, 53201, 57557, 62233, 67307, 72817, 78779, 85229, 92203, 99733, 107897, 116731, 126271, 136607, 147793, 159871, 172933, 187091, 202409, 218971, 236897, 256279, 277261, 299951, 324503, 351061, 379787, 410857, 444487, 480881, 520241, 562841, 608903, 658753, 712697, 771049, 834181, 902483, 976369, 1056323, 1142821, 1236397, 1337629, 1447153, 1565659, 1693859, 1832561, 1982627, 2144977, 2320627, 2510653, 2716249, 2938679, 3179303, 3439651, 3721303, 4026031, 4355707, 4712381, 5098259, 5515729, 5967347, 6456007, 6984629, 7556579, 8175383, 8844859, 9569143, 10352717, 11200489, 12117689, 13109983, 14183539, 15345007, 16601593, 17961079, 19431899, 21023161, 22744717, 24607243, 26622317, 28802401, 31160981, 33712729, 36473443, 39460231, 42691603, 46187573, 49969847, 54061849, 58488943, 63278561, 68460391, 74066549, 80131819, 86693767, 93793069, 101473717, 109783337, 118773397, 128499677, 139022417, 150406843, 162723577, 176048909, 190465427, 206062531, 222936881, 241193053, 260944219, 282312799, 305431229, 330442829, 357502601, 386778277, 418451333, 452718089, 489790921, 529899637, 573292817, 620239453, 671030513, 725980837, 785430967, 849749479, 919334987, 994618837, 1076067617, 1164186217, 1259520799, 1362662261, 1474249943, 1594975441, 1725587117, 1866894511, 2019773507, 2185171673, 2364114217, 2557710269, 2767159799, 2993761039, 3238918481, 3504151727, 3791104843, 4101556399, 4294967291, 6442450933, 8589934583, 12884901857, 17179869143, 25769803693, 34359738337, 51539607367, 68719476731, 103079215087, 137438953447, 206158430123, 274877906899, 412316860387, 549755813881, 824633720731, 1099511627689, 1649267441579, 2199023255531, 3298534883309, 4398046511093, 6597069766607, 8796093022151, 13194139533241, 17592186044399, 26388279066581, 35184372088777, 52776558133177, 70368744177643, 105553116266399, 140737488355213, 211106232532861, 281474976710597, 562949953421231, 1125899906842597, 2251799813685119, 4503599627370449, 9007199254740881, 18014398509481952, 36028797018963910, 72057594037927930, 144115188075855860, 288230376151711700, 576460752303423400, 1152921504606846800, 2305843009213694000, 4611686018427388000, 9223372036854776000, 18446744073709552000];
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
class std_Hash_impl {
  __init_std_Hash_impl(...$a) { }
  __dtor() {
  }
  static hash(__ptr, __clength, __seed = ((3339675911) >>> 0)) {
    return std_Hash_bytes((__ptr ? {a: __ptr.a, i: __ptr.i} : null), __clength, __seed);
  }
}
class std_hash_base_unsigned_int_long_long {
  __init_std_hash_base_unsigned_int_long_long(...$a) { }
  __dtor() {
  }
}
class std_hash_long_long extends std_hash_base_unsigned_int_long_long {
  constructor(...$a) {
    super();
    this.__init_std_hash_long_long(...$a);
  }
  __init_std_hash_long_long(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_long_long.prototype.__dtor.call(this);
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
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t2 = operatornew__unsigned_int(((Math.imul(__n, 1)) >>> 0)), $t2 ? {a: $t2.a, i: $t2.i} : null);
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
    let __place = ($t6 = (__alloc.a[__alloc.i]).allocate(__size, {a: [0], i: 0}), $t6 ? {a: $t6.a, i: $t6.i} : null);
    let __p = ($t7 = (__place.a[__place.i] = new std_basic_string_char_std_char_traits_char_std_allocator_char_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t7 ? {a: $t7.a, i: $t7.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    (__p.a[__p.i])._M_set_sharable();
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_destroy(__a) {
    let __size = (((12) + (((Math.imul((((this._M_capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0))) >>> 0);
    (__a.a[__a.i]).deallocate({a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t8, $t9, $t10, $t11;
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
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
  }
  _M_data__c() {
    return (this._M_dataplus._M_p ? {a: this._M_dataplus._M_p.a, i: this._M_dataplus._M_p.i} : null);
  }
  _M_data(__p) {
    let $t12;
    return ($t12 = this._M_dataplus._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t12 ? {a: $t12.a, i: $t12.i} : null);
  }
  _M_rep__c() {
    let $t13, $t14;
    return ($t14 = {a: (($t13 = this._M_data__c(), $t13)).a, i: (($t13 = this._M_data__c(), $t13)).i + (((-(1)) | 0))}, $t14 ? {a: $t14.a, i: $t14.i} : null);
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
    let $t15;
    return (($t15 = this._M_rep__c(), $t15.a[$t15.i]))._M_length;
  }
  length__c() {
    let $t16;
    return (($t16 = this._M_rep__c(), $t16.a[$t16.i]))._M_length;
  }
  static _S_construct(...$a) {
    let $t17, $t18, $t19, $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27, $t28, $t29;
    if ($a.length >= 3 && $a.length <= 3 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      let __r = ($t17 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create($a[0], ((0) >>> 0), $a[2]), $t17 ? {a: $t17.a, i: $t17.i} : null);
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
      let __len = ((0) >>> 0);
      while (((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
         {
          __buf[($t21 = __len, __len = (($t21 + 1) >>> 0), $t21)] = ($a[0]).a[($a[0]).i];
          ++($a[0]).i;
        }
      }
      let __r = ($t22 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, ((0) >>> 0), $a[2]), $t22 ? {a: $t22.a, i: $t22.i} : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t23 = (__r.a[__r.i])._M_refdata(), $t23 ? {a: $t23.a, i: $t23.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t24 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((((__len) + (((1) >>> 0))) >>> 0), __len, $a[2]), $t24 ? {a: $t24.a, i: $t24.i} : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t25 = (__another.a[__another.i])._M_refdata(), $t25 ? {a: $t25.a, i: $t25.i} : null), ($t26 = (__r.a[__r.i])._M_refdata(), $t26 ? {a: $t26.a, i: $t26.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t27 = (__r.a[__r.i])._M_refdata(), $t27)).a[(($t27 = (__r.a[__r.i])._M_refdata(), $t27)).i + (($t28 = __len, __len = (($t28 + 1) >>> 0), $t28))] = ($a[0]).a[($a[0]).i];
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
      return ($t29 = (__r.a[__r.i])._M_refdata(), $t29 ? {a: $t29.a, i: $t29.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  data__c() {
    let $t30;
    return ($t30 = this._M_data__c(), $t30 ? {a: $t30.a, i: $t30.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus"});
  }
  compare__c(__str) {
    let $t31, $t32, $t33;
    let __size = {v: this.size__c()};
    let __osize = {v: (__str.a[__str.i]).size__c()};
    let __len = ($t31 = std_min_unsigned_int({a: __size, i: "v"}, {a: __osize, i: "v"}), $t31.a[$t31.i]);
    let __r = std_char_traits_char.compare(($t32 = this._M_data__c(), $t32 ? {a: $t32.a, i: $t32.i} : null), ($t33 = (__str.a[__str.i]).data__c(), $t33 ? {a: $t33.a, i: $t33.i} : null), __len);
    if ((!__r)) {
      __r = std_basic_string_char_std_char_traits_char_std_allocator_char._S_compare(__size.v, __osize.v);
    }
    return __r;
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t34;
    return ($t34 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t34 ? {a: $t34.a, i: $t34.i} : null);
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
class std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
  constructor(...$a) {
    this.__init_std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char)) {
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
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char {
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
    std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char.prototype.__dtor.call(this);
  }
  op_call__c(__s) {
    let $t35;
    return std_Hash_impl.hash(($t35 = (__s.a[__s.i]).data__c(), $t35 ? {a: $t35.a, i: $t35.i} : null), (__s.a[__s.i]).length__c(), ((3339675911) >>> 0));
  }
  op_assign(o) {
    this.__assign_std_hash_base_unsigned_int_std_basic_string_char_std_char_traits_char_std_allocator_char.call(this, $p0);
    return {a: [this], i: 0};
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
class std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  __init_std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  __init_std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t.prototype.__dtor.call(this);
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
class std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  __init_std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) { }
  __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  constructor(...$a) {
    super();
    this.__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  __dtor() {
    std_hash_base_unsigned_int_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t.prototype.__dtor.call(this);
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
    return (((__num) % (__den)) >>> 0);
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
    this._M_next_resize = ((0) >>> 0);
  }
  __dtor() {
  }
  _M_next_bkt__c(...$a) { const $fast = [2,2,2,3,5,5,7,7,11,11,11,11,13,13]; const $n = $a[0]; if ($n < $fast.length) { if ($n === 0) return 1;   this._M_next_resize = Math.floor($fast[$n] * this._M_max_load_factor); return $fast[$n]; } const $P = PRIME_BUCKETS, $last = $P.length - 1; let $i = 6; while ($i < $last && $P[$i] < $n) $i++; if ($i === $last) { this._M_next_resize = 18446744073709551615; return $P[$i]; } this._M_next_resize = Math.floor($P[$i] * this._M_max_load_factor); return $P[$i]; }
  _M_need_rehash__c(...$a) { const $nbkt = $a[0], $nelt = $a[1], $nins = $a[2]; const $mk = (b, s) => { const o = Object.create(std_pair_bool_unsigned_int.prototype); o.first = b; o.second = s; return o; }; if ($nelt + $nins > this._M_next_resize) {   const $mb = Math.max($nelt + $nins, this._M_next_resize ? 0 : 11) / this._M_max_load_factor;   if ($mb >= $nbkt) return $mk(true, this._M_next_bkt__c(Math.max(Math.floor($mb) + 1, $nbkt * 2)));   this._M_next_resize = Math.floor($nbkt * this._M_max_load_factor); } return $mk(false, 0); }
  _M_state__c() {
    return this._M_next_resize;
  }
  _M_reset(__state) {
    this._M_next_resize = __state;
  }
  static _S_growth_factor = 2;
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
class std_integral_constant_unsigned_int_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_int_value0(...$a);
  }
  __init_std_integral_constant_unsigned_int_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0 extends std_integral_constant_unsigned_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a);
  }
  __init_std_extent_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_int_value0.prototype.__dtor.call(this);
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
    let $t36;
    return (($t36 = this._M_h1(), $t36.a[$t36.i])).op_call__c(__k);
  }
  _M_bucket_index__c(...$a) {
    let $t37, $t38;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return (($t37 = this._M_h2(), $t37.a[$t37.i])).op_call__c($a[1], $a[2]);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return (($t38 = this._M_h2(), $t38.a[$t38.i])).op_call__c((($a[0]).a[($a[0]).i])._M_hash_code, $a[1]);
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
    return std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_int_value1._S_equals(this._M_eq(), this._M_extract(), __k, __c, (__n ? {a: __n.a, i: __n.i} : null));
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
    let $t39, $t40, $t41, $t42;
    let __h = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
    let __code = (__h.a[__h.i])._M_hash_code__c(__k);
    let __n = (__h.a[__h.i])._M_bucket_index__c(__k, __code);
    let __p = ($t39 = (__h.a[__h.i])._M_find_node__c(__n, __k, __code), $t39 ? {a: $t39.a, i: $t39.i} : null);
    if ((!__p)) {
       {
        __p = ($t40 = (__h.a[__h.i])._M_allocate_node__rv({a: std_piecewise_construct, i: "v"}, {a: [new std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__k)], i: 0}, {a: [new std_tuple()], i: 0}), $t40 ? {a: $t40.a, i: $t40.i} : null);
        return {a: ($t42 = (($t41 = (__h.a[__h.i])._M_insert_unique_node(__n, __code, (__p ? {a: __p.a, i: __p.i} : null)), $t41)).op_arrow__c(), $t42.a[$t42.i]), i: "second"};
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
    let $t43;
    this._M_cur = ($t43 = (this._M_cur.a[this._M_cur.i])._M_next__c(), $t43 ? {a: $t43.a, i: $t43.i} : null);
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
    let $t44, $t45, $t46;
    this._M_v = new std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(($t44 = std_forward_1_std_piecewise_construct_t($a[0]), $t44.a[$t44.i]), ($t45 = std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R($a[1]), $t45.a[$t45.i]), ($t46 = std_forward_1_std_tuple($a[2]), $t46.a[$t46.i]));
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
    let $t47;
    return ($t47 = std_addressof_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int({a: this._M_cur.a[this._M_cur.i], i: "_M_v"}), $t47 ? {a: $t47.a, i: $t47.i} : null);
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
class std_hash_base_unsigned_int_int {
  constructor(...$a) {
    this.__init_std_hash_base_unsigned_int_int(...$a);
  }
  __init_std_hash_base_unsigned_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_hash_base_unsigned_int_int)) {
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
class std_hash_int extends std_hash_base_unsigned_int_int {
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
    std_hash_base_unsigned_int_int.prototype.__dtor.call(this);
  }
  op_call__c(__val) {
    return ((__val) >>> 0);
  }
  op_assign(o) {
    this.__assign_std_hash_base_unsigned_int_int.call(this, $p0);
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
class std_extent_int_value0 extends std_integral_constant_unsigned_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_int_value0(...$a);
  }
  __init_std_extent_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_int_value0.prototype.__dtor.call(this);
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
    let $t48;
    return (($t48 = this._M_h1(), $t48.a[$t48.i])).op_call__c(__k.a[__k.i]);
  }
  _M_bucket_index__c(...$a) {
    let $t49, $t50, $t51, $t52, $t53;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return (($t49 = this._M_h2(), $t49.a[$t49.i])).op_call__c($a[1], $a[2]);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return (($t53 = this._M_h2(), $t53.a[$t53.i])).op_call__c((($t52 = this._M_h1(), $t52.a[$t52.i])).op_call__c(($t50 = (($t51 = this._M_extract(), $t51.a[$t51.i])).op_call__c__rv({a: ($a[0]).a[($a[0]).i], i: "_M_v"}), $t50.a[$t50.i])), $a[1]);
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
    return std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_int_value0._S_equals(this._M_eq(), this._M_extract(), __k, __c, (__n ? {a: __n.a, i: __n.i} : null));
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
    let $t54;
    this._M_cur = ($t54 = (this._M_cur.a[this._M_cur.i])._M_next__c(), $t54 ? {a: $t54.a, i: $t54.i} : null);
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
    let $t55;
    this._M_v = ($t55 = std_forward_1_int($a[0]), $t55.a[$t55.i]);
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
    let $t56;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_pair_std_detail_Node_iterator_int_value1_value0_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_detail_Node_iterator_int_value1_value0) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_detail_Node_iterator_int_value1_value0(std_forward_1_std_detail_Node_iterator_int_value1_value0($a[0]));
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($t56 = std_forward_1_bool($a[1]), $t56.a[$t56.i]);
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
    let $t57;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t57 = operatornew__unsigned_int(((Math.imul(__n, 17)) >>> 0)), $t57 ? {a: $t57.a, i: $t57.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (17))) >>> 0);
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
    let $t58;
    if ($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Select1st) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int)) {
      std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__init_std_detail_Map_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.call(this);
      std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1.prototype.__init_std_detail_Insert_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value0_value1.call(this);
      std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.prototype.__init_std_detail_Rehash_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1.call(this);
      std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.prototype.__init_std_detail_Equality_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1_value1.call(this);
      this._M_buckets = null;
      this._M_bucket_count = ((0) >>> 0);
      this._M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1($a[6]);
      this._M_bbegin.ctj_a = this; this._M_bbegin.ctj_i = "_M_bbegin";
      this._M_element_count = ((0) >>> 0);
      this._M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      this._M_rehash_policy.ctj_a = this; this._M_rehash_policy.ctj_i = "_M_rehash_policy";
      this._M_bucket_count = this._M_rehash_policy._M_next_bkt__c($a[0]);
      this._M_buckets = ($t58 = this._M_allocate_buckets(this._M_bucket_count), $t58 ? {a: $t58.a, i: $t58.i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int))) {
      this.__init_std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(($a[0] === undefined ? (((10) >>> 0)) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[2]), {a: [new std_detail_Select1st()], i: 0}, ($a[3] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[3]));
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
    let $t59, $t60;
    (($t59 = this._M_node_allocator(), $t59.a[$t59.i])).destroy((__n ? {a: __n.a, i: __n.i} : null));
    (($t60 = this._M_node_allocator(), $t60.a[$t60.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), ((1) >>> 0));
  }
  _M_allocate_buckets(__n) {
    let $t61;
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    let __p = ($t61 = __alloc.allocate(__n, {a: [0], i: 0}), $t61 ? {a: $t61.a, i: $t61.i} : null);
    (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__p), 0, Math.trunc((((Math.imul(__n, 4)) >>> 0)) / 4));
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_deallocate_buckets(__p, __n) {
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    __alloc.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
  }
  _M_bucket_begin__c(__bkt) {
    let $t62;
    let __n = ((this._M_buckets.a[this._M_buckets.i + (__bkt)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).i} : null);
    return ($t62 = (__n ? (__n.a[__n.i])._M_nxt : null), $t62 ? {a: $t62.a, i: $t62.i} : null);
  }
  _M_begin__c() {
    let $t63, $t64;
    return ($t64 = (($t63 = this._M_before_begin(), $t63.a[$t63.i]))._M_nxt, $t64 ? {a: $t64.a, i: $t64.i} : null);
  }
  begin() {
    let $t65;
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(($t65 = this._M_begin__c(), $t65 ? {a: $t65.a, i: $t65.i} : null));
  }
  end() {
    return new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1(null);
  }
  size__c() {
    return this._M_element_count;
  }
  count__c(__k) {
    let $t66, $t67, $t68;
    let __code = this._M_hash_code__c(__k);
    let __n = this._M_bucket_index__c(__k, __code);
    let __p = ($t66 = this._M_bucket_begin__c(__n), $t66 ? {a: $t66.a, i: $t66.i} : null);
    if ((!__p)) {
      return ((0) >>> 0);
    }
    let __result = ((0) >>> 0);
    for (; ; __p = ($t67 = (__p.a[__p.i])._M_next__c(), $t67 ? {a: $t67.a, i: $t67.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          (__result = ((__result + 1) >>> 0));
        }
        else {
          if (__result) {
            break;
          }
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t68 = (__p.a[__p.i])._M_next__c(), $t68 ? {a: $t68.a, i: $t68.i} : null)) !== __n))) {
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
    let $t69, $t70;
    let __prev_p = ((this._M_buckets.a[this._M_buckets.i + (__n)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__n)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__n)]).i} : null);
    if ((!__prev_p)) {
      return null;
    }
    let __p = (((__prev_p.a[__prev_p.i])._M_nxt) ? {a: ((__prev_p.a[__prev_p.i])._M_nxt).a, i: ((__prev_p.a[__prev_p.i])._M_nxt).i} : null);
    for (; ; __p = ($t69 = (__p.a[__p.i])._M_next__c(), $t69 ? {a: $t69.a, i: $t69.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          return (__prev_p ? {a: __prev_p.a, i: __prev_p.i} : null);
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t70 = (__p.a[__p.i])._M_next__c(), $t70 ? {a: $t70.a, i: $t70.i} : null)) !== __n))) {
          break;
        }
        __prev_p = (__p ? {a: __p.a, i: __p.i} : null);
      }
    }
    return null;
  }
  _M_find_node__c(__bkt, __key, __c) {
    let $t71;
    let __before_n = ($t71 = this._M_find_before_node__c(__bkt, __key, __c), $t71 ? {a: $t71.a, i: $t71.i} : null);
    if (__before_n) {
      return (((__before_n.a[__before_n.i])._M_nxt) ? {a: ((__before_n.a[__before_n.i])._M_nxt).a, i: ((__before_n.a[__before_n.i])._M_nxt).i} : null);
    }
    return null;
  }
  _M_insert_bucket_begin(__bkt, __node) {
    let $t72, $t73, $t74, $t75, $t76;
    if (this._M_buckets.a[this._M_buckets.i + (__bkt)]) {
       {
        (__node.a[__node.i])._M_nxt = ((((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
        ((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
      }
    }
    else {
       {
        (__node.a[__node.i])._M_nxt = ($t73 = (($t72 = this._M_before_begin(), $t72.a[$t72.i]))._M_nxt, $t73 ? {a: $t73.a, i: $t73.i} : null);
        (($t74 = this._M_before_begin(), $t74.a[$t74.i]))._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
        if ((__node.a[__node.i])._M_nxt) {
          this._M_buckets.a[this._M_buckets.i + (this._M_bucket_index__c(($t75 = (__node.a[__node.i])._M_next__c(), $t75 ? {a: $t75.a, i: $t75.i} : null)))] = (__node ? {a: __node.a, i: __node.i} : null);
        }
        this._M_buckets.a[this._M_buckets.i + (__bkt)] = ($t76 = this._M_before_begin(), $t76 ? {a: $t76.a, i: $t76.i} : null);
      }
    }
  }
  _M_insert_unique_node(__bkt, __code, __node) {
    let $t77;
    let __saved_state = {a: [this._M_rehash_policy._M_state__c()], i: 0};
    let __do_rehash = this._M_rehash_policy._M_need_rehash__c(this._M_bucket_count, this._M_element_count, ((1) >>> 0));
    if (true) {
       {
        if (__do_rehash.first) {
           {
            this._M_rehash(__do_rehash.second, __saved_state);
            __bkt = this._M_bucket_index__c((($t77 = this._M_extract(), $t77.a[$t77.i])).op_call__c__rv({a: __node.a[__node.i], i: "_M_v"}), __code);
          }
        }
        this._M_store_code__c((__node ? {a: __node.a, i: __node.i} : null), __code);
        this._M_insert_bucket_begin(__bkt, (__node ? {a: __node.a, i: __node.i} : null));
        (this._M_element_count = ((this._M_element_count + 1) >>> 0));
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
    let $t78, $t79, $t80, $t81, $t82, $t83, $t84, $t85;
    let __new_buckets = ($t78 = this._M_allocate_buckets(__n), $t78 ? {a: $t78.a, i: $t78.i} : null);
    let __p = ($t79 = this._M_begin__c(), $t79 ? {a: $t79.a, i: $t79.i} : null);
    (($t80 = this._M_before_begin(), $t80.a[$t80.i]))._M_nxt = null;
    let __bbegin_bkt = ((0) >>> 0);
    while (__p) {
       {
        let __next = ($t81 = (__p.a[__p.i])._M_next__c(), $t81 ? {a: $t81.a, i: $t81.i} : null);
        let __bkt = std_detail_Hash_code_base_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value1.prototype._M_bucket_index__c.call(this, (__p ? {a: __p.a, i: __p.i} : null), __n);
        if ((!(__new_buckets.a[__new_buckets.i + (__bkt)]))) {
           {
            (__p.a[__p.i])._M_nxt = ($t83 = (($t82 = this._M_before_begin(), $t82.a[$t82.i]))._M_nxt, $t83 ? {a: $t83.a, i: $t83.i} : null);
            (($t84 = this._M_before_begin(), $t84.a[$t84.i]))._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
            __new_buckets.a[__new_buckets.i + (__bkt)] = ($t85 = this._M_before_begin(), $t85 ? {a: $t85.a, i: $t85.i} : null);
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
    let $t86, $t87, $t88, $t89;
    let __n = ($t87 = (($t86 = this._M_node_allocator(), $t86.a[$t86.i])).allocate(((1) >>> 0), {a: [0], i: 0}), $t87 ? {a: $t87.a, i: $t87.i} : null);
    if (true) {
       {
        (($t88 = this._M_node_allocator(), $t88.a[$t88.i])).construct__rv((__n ? {a: __n.a, i: __n.i} : null), std_forward_1_std_piecewise_construct_t(__args_0), std_forward_1_std_tuple_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__args_1), std_forward_1_std_tuple(__args_2));
        return (__n ? {a: __n.a, i: __n.i} : null);
      }
    }
    if (false) {
       {
        (($t89 = this._M_node_allocator(), $t89.a[$t89.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), ((1) >>> 0));
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
    this._M_h = new std_Hashtable_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value1_value0_value1(($a[0] === undefined ? (((10) >>> 0)) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[1]), ($a[2] === undefined ? ({a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}) : $a[2]), ($a[3] === undefined ? ({a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0}) : $a[3]));
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
class std_pair_bool_unsigned_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_bool_unsigned_int(...$a);
  }
  __init_std_pair_bool_unsigned_int(...$a) {
    this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
    this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
  }
  __dtor() {
  }
}
class std_is_convertible_unsigned_int_R_unsigned_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_unsigned_int_R_unsigned_int(...$a);
  }
  __init_std_is_convertible_unsigned_int_R_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_unsigned_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_unsigned_int_R(...$a);
  }
  __init_std_is_void_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_unsigned_int_R {
  __init_std_remove_cv_unsigned_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_unsigned_int_R {
  __init_std_remove_volatile_unsigned_int_R(...$a) { }
  __dtor() {
  }
}
class std_remove_const_unsigned_int_R {
  __init_std_remove_const_unsigned_int_R(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_unsigned_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_unsigned_int_R(...$a);
  }
  __init_std_is_void_helper_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_unsigned_int(...$a);
  }
  __init_std_is_function_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unsigned_int(...$a);
  }
  __init_std_is_array_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_unsigned_int_std_is_array_unsigned_int extends std_is_array_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a);
  }
  __init_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) {
  }
  __dtor() {
    std_is_array_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_unsigned_int_R_std_is_function_unsigned_int_std_is_array_unsigned_int extends std_or_std_is_function_unsigned_int_std_is_array_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_unsigned_int_R_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a);
  }
  __init_std_or_std_is_void_unsigned_int_R_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_unsigned_int_std_is_array_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_unsigned_int_std_is_array_unsigned_int {
  __init_std_conditional_value0_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_unsigned_int_R_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int {
  __init_std_conditional_value0_std_is_void_unsigned_int_R_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_unsigned_int_R_unsigned_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_unsigned_int_R_unsigned_int_value0(...$a);
  }
  __init_std_is_convertible_helper_unsigned_int_R_unsigned_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_unsigned_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_unsigned_int_R(...$a);
  }
  __init_std_is_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_unsigned_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_unsigned_int_R(...$a);
  }
  __init_std_is_lvalue_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_unsigned_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_unsigned_int_R(...$a);
  }
  __init_std_is_rvalue_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_unsigned_int_R_std_is_rvalue_reference_unsigned_int_R extends std_is_lvalue_reference_unsigned_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_unsigned_int_R_std_is_rvalue_reference_unsigned_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_unsigned_int_R_std_is_rvalue_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_unsigned_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_unsigned_int_R_std_is_rvalue_reference_unsigned_int_R {
  __init_std_conditional_value1_std_is_lvalue_reference_unsigned_int_R_std_is_rvalue_reference_unsigned_int_R(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_unsigned_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_unsigned_int_R(...$a);
  }
  __init_std_not_std_is_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_unsigned_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_unsigned_int_R(...$a);
  }
  __init_std_not_std_is_void_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_unsigned_int_R_std_not_std_is_void_unsigned_int_R extends std_not_std_is_reference_unsigned_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_unsigned_int_R_std_not_std_is_void_unsigned_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_unsigned_int_R_std_not_std_is_void_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_unsigned_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_unsigned_int_R_std_not_std_is_reference_unsigned_int_R {
  __init_std_conditional_value0_std_not_std_is_void_unsigned_int_R_std_not_std_is_reference_unsigned_int_R(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_int_R_value0 {
  __init_std_add_rvalue_reference_helper_unsigned_int_R_value0(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_int_R extends std_add_rvalue_reference_helper_unsigned_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_unsigned_int_R(...$a);
  }
  __init_std_add_rvalue_reference_unsigned_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_unsigned_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_int_R_unsigned_int extends std_is_convertible_unsigned_int_R_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_int_R_unsigned_int(...$a);
  }
  __init_std_and_std_is_convertible_bool_R_bool_std_is_convertible_unsigned_int_R_unsigned_int(...$a) {
  }
  __dtor() {
    std_is_convertible_unsigned_int_R_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_unsigned_int_R_unsigned_int_std_is_convertible_bool_R_bool {
  __init_std_conditional_value1_std_is_convertible_unsigned_int_R_unsigned_int_std_is_convertible_bool_R_bool(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_unsigned_int_unsigned_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_unsigned_int_unsigned_int(...$a);
  }
  __init_std_is_convertible_unsigned_int_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_unsigned_int(...$a);
  }
  __init_std_is_void_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_unsigned_int {
  __init_std_remove_cv_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_unsigned_int {
  __init_std_remove_volatile_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_unsigned_int {
  __init_std_remove_const_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_unsigned_int(...$a);
  }
  __init_std_is_void_helper_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_unsigned_int_std_is_function_unsigned_int_std_is_array_unsigned_int extends std_or_std_is_function_unsigned_int_std_is_array_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_unsigned_int_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a);
  }
  __init_std_or_std_is_void_unsigned_int_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_unsigned_int_std_is_array_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_unsigned_int_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int {
  __init_std_conditional_value0_std_is_void_unsigned_int_std_or_std_is_function_unsigned_int_std_is_array_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_is_convertible_helper_unsigned_int_unsigned_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_unsigned_int_unsigned_int_value0(...$a);
  }
  __init_std_is_convertible_helper_unsigned_int_unsigned_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_unsigned_int(...$a);
  }
  __init_std_is_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_unsigned_int(...$a);
  }
  __init_std_is_lvalue_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_unsigned_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_unsigned_int(...$a);
  }
  __init_std_is_rvalue_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_unsigned_int_std_is_rvalue_reference_unsigned_int extends std_is_rvalue_reference_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_unsigned_int_std_is_rvalue_reference_unsigned_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_unsigned_int_std_is_rvalue_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_unsigned_int_std_is_rvalue_reference_unsigned_int {
  __init_std_conditional_value0_std_is_lvalue_reference_unsigned_int_std_is_rvalue_reference_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_unsigned_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_unsigned_int(...$a);
  }
  __init_std_not_std_is_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_unsigned_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_unsigned_int(...$a);
  }
  __init_std_not_std_is_void_unsigned_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_unsigned_int_std_not_std_is_void_unsigned_int extends std_not_std_is_void_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_unsigned_int_std_not_std_is_void_unsigned_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_unsigned_int_std_not_std_is_void_unsigned_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_unsigned_int_std_not_std_is_reference_unsigned_int {
  __init_std_conditional_value1_std_not_std_is_void_unsigned_int_std_not_std_is_reference_unsigned_int(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_unsigned_int_value1 {
  __init_std_add_rvalue_reference_helper_unsigned_int_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_unsigned_int extends std_add_rvalue_reference_helper_unsigned_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_unsigned_int(...$a);
  }
  __init_std_add_rvalue_reference_unsigned_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_unsigned_int_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_int_unsigned_int extends std_is_convertible_unsigned_int_unsigned_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_int_unsigned_int(...$a);
  }
  __init_std_and_std_is_convertible_bool_bool_std_is_convertible_unsigned_int_unsigned_int(...$a) {
  }
  __dtor() {
    std_is_convertible_unsigned_int_unsigned_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_unsigned_int_unsigned_int_std_is_convertible_bool_bool {
  __init_std_conditional_value1_std_is_convertible_unsigned_int_unsigned_int_std_is_convertible_bool_bool(...$a) { }
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
class std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_int_value1 {
  __init_std_detail_Equal_helper_std_basic_string_char_std_char_traits_char_std_allocator_char_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_detail_Select1st_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_unsigned_int_value1(...$a) { }
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
    let $t90;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t90 = operatornew__unsigned_int(((Math.imul(__n, 8)) >>> 0)), $t90 ? {a: $t90.a, i: $t90.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
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
    let $t91;
    if ($a.length >= 7 && $a.length <= 7 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_detail_Mod_range_hashing) && ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_detail_Default_ranged_hash) && ($a[4] !== null && typeof $a[4] === "object" && !Array.isArray($a[4]) && $a[4].a !== undefined && $a[4].i !== undefined && $a[4].a[$a[4].i] instanceof std_equal_to_int) && ($a[5] !== null && typeof $a[5] === "object" && !Array.isArray($a[5]) && $a[5].a !== undefined && $a[5].i !== undefined && $a[5].a[$a[5].i] instanceof std_detail_Identity) && ($a[6] !== null && typeof $a[6] === "object" && !Array.isArray($a[6]) && $a[6].a !== undefined && $a[6].i !== undefined && $a[6].a[$a[6].i] instanceof std_allocator_int)) {
      std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__init_std_detail_Map_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.call(this);
      std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1.prototype.__init_std_detail_Insert_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1_value1.call(this);
      std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.prototype.__init_std_detail_Rehash_base_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1.call(this);
      std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.prototype.__init_std_detail_Equality_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1_value1.call(this);
      this._M_buckets = null;
      this._M_bucket_count = ((0) >>> 0);
      this._M_bbegin = new std_detail_Before_begin_std_allocator_std_detail_Hash_node_int_value0($a[6]);
      this._M_bbegin.ctj_a = this; this._M_bbegin.ctj_i = "_M_bbegin";
      this._M_element_count = ((0) >>> 0);
      this._M_rehash_policy = new std_detail_Prime_rehash_policy(1);
      this._M_rehash_policy.ctj_a = this; this._M_rehash_policy.ctj_i = "_M_rehash_policy";
      this._M_bucket_count = this._M_rehash_policy._M_next_bkt__c($a[0]);
      this._M_buckets = ($t91 = this._M_allocate_buckets(this._M_bucket_count), $t91 ? {a: $t91.a, i: $t91.i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 4 && ($a.length <= 0 || (typeof $a[0] === "number" || typeof $a[0] === "boolean")) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_hash_int)) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_equal_to_int)) && ($a.length <= 3 || ($a[3] !== null && typeof $a[3] === "object" && !Array.isArray($a[3]) && $a[3].a !== undefined && $a[3].i !== undefined && $a[3].a[$a[3].i] instanceof std_allocator_int))) {
      this.__init_std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(($a[0] === undefined ? (((10) >>> 0)) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_int()], i: 0}) : $a[1]), {a: [new std_detail_Mod_range_hashing()], i: 0}, {a: [new std_detail_Default_ranged_hash()], i: 0}, ($a[2] === undefined ? ({a: [new std_equal_to_int()], i: 0}) : $a[2]), {a: [new std_detail_Identity()], i: 0}, ($a[3] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[3]));
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
    let $t92, $t93;
    (($t92 = this._M_node_allocator(), $t92.a[$t92.i])).destroy((__n ? {a: __n.a, i: __n.i} : null));
    (($t93 = this._M_node_allocator(), $t93.a[$t93.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), ((1) >>> 0));
  }
  _M_allocate_buckets(__n) {
    let $t94;
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    let __p = ($t94 = __alloc.allocate(__n, {a: [0], i: 0}), $t94 ? {a: $t94.a, i: $t94.i} : null);
    (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__p), 0, Math.trunc((((Math.imul(__n, 4)) >>> 0)) / 4));
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_deallocate_buckets(__p, __n) {
    let __alloc = new std_allocator_std_detail_Hash_node_base_P(this._M_node_allocator());
    __alloc.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
  }
  _M_bucket_begin__c(__bkt) {
    let $t95;
    let __n = ((this._M_buckets.a[this._M_buckets.i + (__bkt)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__bkt)]).i} : null);
    return ($t95 = (__n ? (__n.a[__n.i])._M_nxt : null), $t95 ? {a: $t95.a, i: $t95.i} : null);
  }
  _M_begin__c() {
    let $t96, $t97;
    return ($t97 = (($t96 = this._M_before_begin(), $t96.a[$t96.i]))._M_nxt, $t97 ? {a: $t97.a, i: $t97.i} : null);
  }
  begin() {
    let $t98;
    return new std_detail_Node_iterator_int_value1_value0(($t98 = this._M_begin__c(), $t98 ? {a: $t98.a, i: $t98.i} : null));
  }
  end() {
    return new std_detail_Node_iterator_int_value1_value0(null);
  }
  size__c() {
    return this._M_element_count;
  }
  count__c(__k) {
    let $t99, $t100, $t101;
    let __code = this._M_hash_code__c(__k);
    let __n = this._M_bucket_index__c(__k, __code);
    let __p = ($t99 = this._M_bucket_begin__c(__n), $t99 ? {a: $t99.a, i: $t99.i} : null);
    if ((!__p)) {
      return ((0) >>> 0);
    }
    let __result = ((0) >>> 0);
    for (; ; __p = ($t100 = (__p.a[__p.i])._M_next__c(), $t100 ? {a: $t100.a, i: $t100.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          (__result = ((__result + 1) >>> 0));
        }
        else {
          if (__result) {
            break;
          }
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t101 = (__p.a[__p.i])._M_next__c(), $t101 ? {a: $t101.a, i: $t101.i} : null)) !== __n))) {
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
    let $t102, $t103;
    let __prev_p = ((this._M_buckets.a[this._M_buckets.i + (__n)]) ? {a: (this._M_buckets.a[this._M_buckets.i + (__n)]).a, i: (this._M_buckets.a[this._M_buckets.i + (__n)]).i} : null);
    if ((!__prev_p)) {
      return null;
    }
    let __p = (((__prev_p.a[__prev_p.i])._M_nxt) ? {a: ((__prev_p.a[__prev_p.i])._M_nxt).a, i: ((__prev_p.a[__prev_p.i])._M_nxt).i} : null);
    for (; ; __p = ($t102 = (__p.a[__p.i])._M_next__c(), $t102 ? {a: $t102.a, i: $t102.i} : null)) {
       {
        if (this._M_equals__c(__k, __code, (__p ? {a: __p.a, i: __p.i} : null))) {
          return (__prev_p ? {a: __prev_p.a, i: __prev_p.i} : null);
        }
        if (((!((__p.a[__p.i])._M_nxt)) || (this._M_bucket_index__c(($t103 = (__p.a[__p.i])._M_next__c(), $t103 ? {a: $t103.a, i: $t103.i} : null)) !== __n))) {
          break;
        }
        __prev_p = (__p ? {a: __p.a, i: __p.i} : null);
      }
    }
    return null;
  }
  _M_find_node__c(__bkt, __key, __c) {
    let $t104;
    let __before_n = ($t104 = this._M_find_before_node__c(__bkt, __key, __c), $t104 ? {a: $t104.a, i: $t104.i} : null);
    if (__before_n) {
      return (((__before_n.a[__before_n.i])._M_nxt) ? {a: ((__before_n.a[__before_n.i])._M_nxt).a, i: ((__before_n.a[__before_n.i])._M_nxt).i} : null);
    }
    return null;
  }
  _M_insert_bucket_begin(__bkt, __node) {
    let $t105, $t106, $t107, $t108, $t109;
    if (this._M_buckets.a[this._M_buckets.i + (__bkt)]) {
       {
        (__node.a[__node.i])._M_nxt = ((((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt) ? {a: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).a, i: (((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt).i} : null);
        ((this._M_buckets.a[this._M_buckets.i + (__bkt)]).a[(this._M_buckets.a[this._M_buckets.i + (__bkt)]).i])._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
      }
    }
    else {
       {
        (__node.a[__node.i])._M_nxt = ($t106 = (($t105 = this._M_before_begin(), $t105.a[$t105.i]))._M_nxt, $t106 ? {a: $t106.a, i: $t106.i} : null);
        (($t107 = this._M_before_begin(), $t107.a[$t107.i]))._M_nxt = (__node ? {a: __node.a, i: __node.i} : null);
        if ((__node.a[__node.i])._M_nxt) {
          this._M_buckets.a[this._M_buckets.i + (this._M_bucket_index__c(($t108 = (__node.a[__node.i])._M_next__c(), $t108 ? {a: $t108.a, i: $t108.i} : null)))] = (__node ? {a: __node.a, i: __node.i} : null);
        }
        this._M_buckets.a[this._M_buckets.i + (__bkt)] = ($t109 = this._M_before_begin(), $t109 ? {a: $t109.a, i: $t109.i} : null);
      }
    }
  }
  _M_insert_unique_node(__bkt, __code, __node) {
    let $t110;
    let __saved_state = {a: [this._M_rehash_policy._M_state__c()], i: 0};
    let __do_rehash = this._M_rehash_policy._M_need_rehash__c(this._M_bucket_count, this._M_element_count, ((1) >>> 0));
    if (true) {
       {
        if (__do_rehash.first) {
           {
            this._M_rehash(__do_rehash.second, __saved_state);
            __bkt = this._M_bucket_index__c((($t110 = this._M_extract(), $t110.a[$t110.i])).op_call__c__rv({a: __node.a[__node.i], i: "_M_v"}), __code);
          }
        }
        this._M_store_code__c((__node ? {a: __node.a, i: __node.i} : null), __code);
        this._M_insert_bucket_begin(__bkt, (__node ? {a: __node.a, i: __node.i} : null));
        (this._M_element_count = ((this._M_element_count + 1) >>> 0));
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
    let $t111, $t112, $t113, $t114, $t115, $t116, $t117, $t118;
    let __new_buckets = ($t111 = this._M_allocate_buckets(__n), $t111 ? {a: $t111.a, i: $t111.i} : null);
    let __p = ($t112 = this._M_begin__c(), $t112 ? {a: $t112.a, i: $t112.i} : null);
    (($t113 = this._M_before_begin(), $t113.a[$t113.i]))._M_nxt = null;
    let __bbegin_bkt = ((0) >>> 0);
    while (__p) {
       {
        let __next = ($t114 = (__p.a[__p.i])._M_next__c(), $t114 ? {a: $t114.a, i: $t114.i} : null);
        let __bkt = std_detail_Hash_code_base_int_int_std_detail_Identity_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_value0.prototype._M_bucket_index__c.call(this, (__p ? {a: __p.a, i: __p.i} : null), __n);
        if ((!(__new_buckets.a[__new_buckets.i + (__bkt)]))) {
           {
            (__p.a[__p.i])._M_nxt = ($t116 = (($t115 = this._M_before_begin(), $t115.a[$t115.i]))._M_nxt, $t116 ? {a: $t116.a, i: $t116.i} : null);
            (($t117 = this._M_before_begin(), $t117.a[$t117.i]))._M_nxt = (__p ? {a: __p.a, i: __p.i} : null);
            __new_buckets.a[__new_buckets.i + (__bkt)] = ($t118 = this._M_before_begin(), $t118 ? {a: $t118.a, i: $t118.i} : null);
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
    let $t119, $t120, $t121;
    let __k = (($t119 = this._M_extract(), $t119.a[$t119.i])).op_call__c__rv(__v);
    let __code = this._M_hash_code__c(__k);
    let __bkt = this._M_bucket_index__c(__k, __code);
    let __n = {v: ($t120 = this._M_find_node__c(__bkt, __k, __code), $t120 ? {a: $t120.a, i: $t120.i} : null)};
    if (__n.v) {
      return std_make_pair_std_detail_Node_iterator_int_value1_value0_bool({a: [new std_detail_Node_iterator_int_value1_value0((__n.v ? {a: __n.v.a, i: __n.v.i} : null))], i: 0}, {a: [false], i: 0});
    }
    __n.v = ($t121 = this._M_allocate_node__rv(std_forward_1_int(__v)), $t121 ? {a: $t121.a, i: $t121.i} : null);
    return std_make_pair_std_detail_Node_iterator_int_value1_value0_bool({a: [this._M_insert_unique_node(__bkt, __code, (__n.v ? {a: __n.v.a, i: __n.v.i} : null))], i: 0}, {a: [true], i: 0});
  }
  _M_allocate_node__rv(__args_0) {
    let $t122, $t123, $t124, $t125;
    let __n = ($t123 = (($t122 = this._M_node_allocator(), $t122.a[$t122.i])).allocate(((1) >>> 0), {a: [0], i: 0}), $t123 ? {a: $t123.a, i: $t123.i} : null);
    if (true) {
       {
        (($t124 = this._M_node_allocator(), $t124.a[$t124.i])).construct__rv((__n ? {a: __n.a, i: __n.i} : null), std_forward_1_int(__args_0));
        return (__n ? {a: __n.a, i: __n.i} : null);
      }
    }
    if (false) {
       {
        (($t125 = this._M_node_allocator(), $t125.a[$t125.i])).deallocate((__n ? {a: __n.a, i: __n.i} : null), ((1) >>> 0));
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
    this._M_h = new std_Hashtable_int_int_std_allocator_int_std_detail_Identity_std_equal_to_int_std_hash_int_std_detail_Mod_range_hashing_std_detail_Default_ranged_hash_std_detail_Prime_rehash_policy_std_detail_Hashtable_traits_value0_value1_value1(($a[0] === undefined ? (((10) >>> 0)) : $a[0]), ($a[1] === undefined ? ({a: [new std_hash_int()], i: 0}) : $a[1]), ($a[2] === undefined ? ({a: [new std_equal_to_int()], i: 0}) : $a[2]), ($a[3] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[3]));
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
class std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_int_value0 {
  __init_std_detail_Equal_helper_int_int_std_detail_Identity_std_equal_to_int_unsigned_int_value0(...$a) { }
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
    let $t126;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t126 = operatornew__unsigned_int(((Math.imul(__n, 4)) >>> 0)), $t126 ? {a: $t126.a, i: $t126.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (4))) >>> 0);
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
class std_declval_protector_unsigned_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_unsigned_int_R(...$a);
  }
  __init_std_declval_protector_unsigned_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_unsigned_int {
  constructor(...$a) {
    this.__init_std_declval_protector_unsigned_int(...$a);
  }
  __init_std_declval_protector_unsigned_int(...$a) {
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
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_int(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Hash_bytes(...$a) { const $M = (1n << 64n) - 1n; const $mul = (0xc6a4a793n << 32n) + 0x5bd1e995n; const $mix = (v) => (v ^ (v >> 47n)) & $M; const $ptr = $a[0]; if ($ptr === null || $ptr === undefined) return 0; const $arr = Array.isArray($ptr) ? $ptr : $ptr.a, $base = Array.isArray($ptr) ? 0 : $ptr.i; const $byte = (k) => BigInt($arr[$base + k] & 255); const $len = $a[1] === undefined ? 0 : $a[1]; const $seed = $a[2] === undefined ? 0xc70f6907 : $a[2]; const $aligned = $len & ~7; let $h = (BigInt($seed) ^ (BigInt($len) * $mul)) & $M; for (let $p = 0; $p < $aligned; $p += 8) {   let $w = 0n; for (let $k = 0; $k < 8; $k++) $w |= $byte($p + $k) << BigInt(8 * $k);   $w = ($mix(($w * $mul) & $M) * $mul) & $M;   $h = (($h ^ $w) * $mul) & $M; } const $rem = $len & 7; if ($rem) {   let $w = 0n; for (let $k = $rem - 1; $k >= 0; $k--) $w = (($w << 8n) + $byte($aligned + $k)) & $M;   $h = (($h ^ $w) * $mul) & $M; } $h = ($mix($h) * $mul) & $M; return Number($mix($h) & 0xffffffffn); }
function std_operator__std_basic_ostream_char_std_char_traits_char_R_int(__os, __n) {
  (__os.a[__os.i])._M_put(0, __n, null, 0);
  return __os;
}
function std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int(__os, __n) {
  (__os.a[__os.i])._M_put(1, __n, null, 0);
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
function std_operator_char_std_char_traits_char_std_allocator_char(__os, __str) {
  let $t127;
  return std_ostream_insert_char_std_char_traits_char(__os, ($t127 = (__str.a[__str.i]).data__c(), $t127 ? {a: $t127.a, i: $t127.i} : null), (((__str.a[__str.i]).size__c()) | 0));
}
function main() {
  let $t128, $t129, $t130, $t131;
  let m = new std_unordered_map_std_basic_string_char_std_char_traits_char_std_allocator_char_int_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char_std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char_std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int(((10) >>> 0), {a: [new std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_equal_to_std_basic_string_char_std_char_traits_char_std_allocator_char()], i: 0}, {a: [new std_allocator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int()], i: 0});
  ($t128 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 97, 0], i: 0})], i: 0}), $t128.a[$t128.i] = 1);
  ($t129 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], i: 0}), $t129.a[$t129.i] = 2);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int({a: std_cout, i: "v"}, m.size__c()), {a: [32, 0], i: 0}), (((($t130 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [97, 97, 0], i: 0})], i: 0}), $t130.a[$t130.i])) + (($t131 = m.op_index({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [98, 98, 0], i: 0})], i: 0}), $t131.a[$t131.i]))) | 0)), {a: [32, 0], i: 0}), m.count__c({a: [new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [99, 99, 0], i: 0})], i: 0})), {a: [std_endl], i: 0});
  for (let $b0 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1({a: [m.begin()], i: 0}), $e0 = new std_detail_Node_iterator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value0_value1({a: [m.end()], i: 0}); std_detail_operator_std_pair_std_basic_string_char_std_char_traits_char_std_allocator_char_int_value1({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char({a: std_cout, i: "v"}, {a: kv.a[kv.i], i: "first"}), {a: [61, 0], i: 0}), (kv.a[kv.i]).second), {a: [32, 0], i: 0});
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
  let s = new std_unordered_set_int_std_hash_int_std_equal_to_int_std_allocator_int(((10) >>> 0), {a: [new std_hash_int()], i: 0}, {a: [new std_equal_to_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  s.insert({a: [5], i: 0});
  s.insert({a: [6], i: 0});
  s.insert({a: [5], i: 0});
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator__std_basic_ostream_char_std_char_traits_char_R_unsigned_int({a: std_cout, i: "v"}, s.size__c()), {a: [32, 0], i: 0}), s.count__c({a: [6], i: 0})), {a: [std_endl], i: 0});
  for (let $b1 = new std_detail_Node_iterator_int_value1_value0({a: [s.begin()], i: 0}), $e1 = new std_detail_Node_iterator_int_value1_value0({a: [s.end()], i: 0}); std_detail_operator_int_value0({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    std_operator__std_basic_ostream_char_std_char_traits_char_R_int({a: std_cout, i: "v"}, x);
  }
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR({a: std_cout, i: "v"}, {a: [std_endl], i: 0});
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
function std_declval_unsigned_int_R() {
  return std_declval_protector_unsigned_int_R.__delegate();
}
function std_declval_unsigned_int() {
  return std_declval_protector_unsigned_int.__delegate();
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
function std_ostream_insert_char_std_char_traits_char(__out, __s, __n) {
  (__out.a[__out.i])._M_put(7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
  return __out;
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
function std_min_unsigned_int(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_get_helper_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R(__t) {
  return std_Tuple_impl_value0_std_basic_string_char_std_char_traits_char_std_allocator_char_R._M_head(__t);
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
let std_cout = {v: new std_basic_ostream_char_std_char_traits_char(1)};
let std_cerr = new std_basic_ostream_char_std_char_traits_char(2);
let std_clog = new std_basic_ostream_char_std_char_traits_char(2);
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
main();
