"use strict";
var __ctj_obuf = "";
function __ctj_fmt(v) { for (var n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined && !Array.isArray(v) && !Array.isArray(v.a); n++) v = v.a[v.i]; if (v == null) return "0"; if (typeof v === "boolean") return v ? "1" : "0"; if (typeof v === "number") return String(v); if (typeof v === "string") return v; var a = v && v.a, i = v && v.i; if (Array.isArray(v)) { a = v; i = 0; } if (Array.isArray(a)) { var s = ""; for (var k = i | 0; k < a.length && a[k]; k++) s += String.fromCharCode(a[k]); return s; } return String(v); }
function __ctj_write(s) { s = String(s); if (typeof process !== "undefined" && process.stdout && process.stdout.write) { process.stdout.write(s); return; } __ctj_obuf += s; for (;;) { var n = __ctj_obuf.indexOf("\n"); if (n < 0) break; console.log(__ctj_obuf.slice(0, n)); __ctj_obuf = __ctj_obuf.slice(n + 1); } }
function __ctj_flush() { if (__ctj_obuf) { console.log(__ctj_obuf); __ctj_obuf = ""; } }
function _ctj_peq(a, b) { return a === b || (!!a && !!b && a.a === b.a && a.i === b.i); }
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
  for (let n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined && !Array.isArray(v) && !Array.isArray(v.a); n++) v = v.a[v.i];
  if (v === null || v === undefined) return "0";
  if (typeof v === "boolean") return v ? "1" : "0";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return v;
  if (typeof v === "object") return _ctj_cstr(v);
  return String(v);
}
class std_true_type {
  __dtor() {
  }
}
class std_false_type {
  constructor(...$a) {
    this.__init_std_false_type(...$a);
  }
  __init_std_false_type(...$a) {
  }
  __dtor() {
  }
}
class std_sfinae_types {
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
  __dtor() {
  }
}
class std_do_is_static_castable_impl {
  __dtor() {
  }
}
class std_do_is_direct_constructible_impl {
  __dtor() {
  }
}
class std_piecewise_construct_t {
  constructor(...$a) {
    this.__init_std_piecewise_construct_t(...$a);
  }
  __init_std_piecewise_construct_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t)) {
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
class std_hash_base_unsigned_long_long_long_long {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_char) ? [$a[0]] : []));
    this.__init_std_allocator_char(...$a);
  }
  __init_std_allocator_char(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_char)) {
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
    (__a.a[__a.i]).deallocate((this ? {a: this.a, i: this.i} : null), __size);
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
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      return ($t12 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t12 ? {a: $t12.a, i: $t12.i} : null);
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_allocator_char) && $a[3] instanceof std_input_iterator_tag) {
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
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
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
  __dtor() {
  }
  static assign(__c1, __c2) {
    __c1.a[__c1.i] = __c2.a[__c2.i];
  }
  static copy(__s1, __s2, __n) {
    let $t21;
    return ($t21 = wmemcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), Math.trunc((__n) / 4)), $t21 ? {a: $t21.a, i: $t21.i} : null);
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
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
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
  __dtor() {
  }
}
class gnu_cxx_new_allocator_char16_t {
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
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
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
  __dtor() {
  }
}
class gnu_cxx_new_allocator_char32_t {
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
  __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_arg_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_uses_alloc_base {
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
class std_Nocopy_types {
  _M_object;
  _M_const_object;
  constructor(...$a) {
    this.__init_std_Nocopy_types(...$a);
  }
  __init_std_Nocopy_types(...$a) {
    this._M_object = null;
    this._M_const_object = null;
  }
  __dtor() {
  }
}
class std_Any_data {
  _M_unused;
  _M_pod_data;
  constructor(...$a) {
    this.__init_std_Any_data(...$a);
  }
  __init_std_Any_data(...$a) {
    this._M_unused = new std_Nocopy_types();
    this._M_unused.ctj_a = this; this._M_unused.ctj_i = "_M_unused";
    this._M_pod_data = new Array(8).fill(0);
  }
  __dtor() {
  }
}
class std_Function_base {
  _M_functor;
  _M_manager;
  constructor(...$a) {
    this.__init_std_Function_base(...$a);
  }
  __init_std_Function_base(...$a) {
    this._M_functor = new std_Any_data();
    this._M_functor.ctj_a = this; this._M_functor.ctj_i = "_M_functor";
    this._M_manager = null;
  }
  __dtor() {
  }
  static _M_max_size = 8;
  static _M_max_align = 8;
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
class std_detail_List_node_base {
  _M_next;
  _M_prev;
  constructor(...$a) {
    this.__init_std_detail_List_node_base(...$a);
  }
  __init_std_detail_List_node_base(...$a) {
    this._M_next = null;
    this._M_prev = null;
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
    this._M_local_word = [];
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
    this._M_fn = new std_ios_base();
    this._M_fn.ctj_a = this; this._M_fn.ctj_i = "_M_fn";
    this._M_index = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
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
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && ($a[2] === null || typeof $a[2] === "object")) {
      (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[2]), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[0]), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
      (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[3]), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))($a[0]), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_ctype_char();
  static table_size = 256;
}
for (const $k of Object.getOwnPropertyNames(std_ctype_base.prototype)) {
  if ($k !== "constructor" && !($k in std_ctype_char.prototype)) std_ctype_char.prototype[$k] = std_ctype_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_ctype_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_ctype_char)) std_ctype_char[$k] = std_ctype_base[$k];
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
    return (this ? {a: this.a, i: this.i} : null);
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
    let $t22, $t23, $t24, $t25, $t26, $t27;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t24 = ($t22 = this.egptr__c(), $t22), $t25 = ($t23 = this.gptr__c(), $t23), (($t24 ? $t24.i : 0) - ($t25 ? $t25.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t26 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t26.a[$t26.i]);
            std_char_traits_char.copy((__s ? {a: __s.a, i: __s.i} : null), ($t27 = this.gptr__c(), $t27 ? {a: $t27.a, i: $t27.i} : null), __len);
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
    let $t28, $t29, $t30, $t31, $t32, $t33;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t30 = ($t28 = this.epptr__c(), $t28), $t31 = ($t29 = this.pptr__c(), $t29), (($t30 ? $t30.i : 0) - ($t31 ? $t31.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t32 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t32.a[$t32.i]);
            std_char_traits_char.copy(($t33 = this.pptr__c(), $t33 ? {a: $t33.a, i: $t33.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
    return (this ? {a: this.a, i: this.i} : null);
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
    let $t34, $t35, $t36, $t37, $t38, $t39;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t36 = ($t34 = this.egptr__c(), $t34), $t37 = ($t35 = this.gptr__c(), $t35), (($t36 ? $t36.i : 0) - ($t37 ? $t37.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t38 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t38.a[$t38.i]);
            std_char_traits_wchar_t.copy((__s ? {a: __s.a, i: __s.i} : null), ($t39 = this.gptr__c(), $t39 ? {a: $t39.a, i: $t39.i} : null), __len);
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
    let $t40, $t41, $t42, $t43, $t44, $t45;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t42 = ($t40 = this.epptr__c(), $t40), $t43 = ($t41 = this.pptr__c(), $t41), (($t42 ? $t42.i : 0) - ($t43 ? $t43.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t44 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t44.a[$t44.i]);
            std_char_traits_wchar_t.copy(($t45 = this.pptr__c(), $t45 ? {a: $t45.a, i: $t45.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_binary_function_int_int_bool)) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) ? [$a[0]] : []));
    this.__init_std_less_int(...$a);
  }
  __init_std_less_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int)) {
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_pair_int_int)) {
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
    let $t46;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t46 = operatornew__unsigned_long_long((__n * 8)), $t46 ? {a: $t46.a, i: $t46.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [$a[0]] : []));
    this.__init_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
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
    let $t47, $t48, $t49;
    return ($t49 = ($t48 = ($t47 = this.begin__c(), $t47), ({a: ($t48 ? $t48.a : null), i: ($t48 ? $t48.i : 0) + (this.size__c())})), $t49 ? {a: $t49.a, i: $t49.i} : null);
  }
}
class std_remove_cv_int {
  __dtor() {
  }
}
class std_remove_volatile_int {
  __dtor() {
  }
}
class std_remove_const_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_int_std_is_array_int {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_value1 {
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
  __dtor() {
  }
}
class std_Rb_tree_iterator_std_pair_int_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_std_pair_int_int)) {
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
    let $t50;
    this._M_node = ($t50 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t50 ? {a: $t50.a, i: $t50.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t51;
    this._M_node = ($t51 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t51 ? {a: $t51.a, i: $t51.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
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
class std_reverse_iterator_std_pair_int_int {
  __dtor() {
  }
}
class std_has_iterator_category_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_std_pair_int_int(...$a);
  }
  __init_std_has_iterator_category_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_pair_int_int {
  __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int {
  __dtor() {
  }
}
class std_remove_const_std_pair_int_int {
  __dtor() {
  }
}
class std_has_iterator_category_helper_std_pair_int_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_std_pair_int_int(...$a);
  }
  __init_std_has_iterator_category_helper_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_iterator_traits_std_pair_int_int_value0 {
  __dtor() {
  }
}
class std_iterator_traits_std_pair_int_int extends std_iterator_traits_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_std_pair_int_int(...$a);
  }
  __init_std_iterator_traits_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_move_iterator_std_pair_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_pair_int_int(...$a);
  }
  __init_std_move_iterator_std_pair_int_int(...$a) {
    this._M_current = new std_pair_int_int();
    this._M_current.ctj_a = this; this._M_current.ctj_i = "_M_current";
  }
  __dtor() {
  }
}
class std_fpos_std_pair_int_int {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_std_pair_int_int(...$a);
  }
  __init_std_fpos_std_pair_int_int(...$a) {
    this._M_off = 0;
    this._M_state = new std_pair_int_int();
    this._M_state.ctj_a = this; this._M_state.ctj_i = "_M_state";
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
class std_Tuple_impl_value1 {
  __dtor() {
  }
}
class std_is_empty_non_tuple_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_pair_int_int(...$a);
  }
  __init_std_is_empty_non_tuple_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_pair_int_int {
  __dtor() {
  }
}
class std_Head_base_value0_std_pair_int_int_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_std_pair_int_int_value0(...$a);
  }
  __init_std_Head_base_value0_std_pair_int_int_value0(...$a) {
    this._M_head_impl = new std_pair_int_int();
    this._M_head_impl.ctj_a = this; this._M_head_impl.ctj_i = "_M_head_impl";
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_std_pair_int_int extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_std_pair_int_int(...$a);
  }
  __init_std_Tuple_impl_value0_std_pair_int_int(...$a) {
    std_Head_base_value0_std_pair_int_int_value0.prototype.__init_std_Head_base_value0_std_pair_int_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_std_pair_int_int.prototype)) std_Tuple_impl_value0_std_pair_int_int.prototype[$k] = std_Head_base_value0_std_pair_int_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_std_pair_int_int)) std_Tuple_impl_value0_std_pair_int_int[$k] = std_Head_base_value0_std_pair_int_int_value0[$k];
}
class std_tuple_std_pair_int_int extends std_Tuple_impl_value0_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_tuple_std_pair_int_int(...$a);
  }
  __init_std_tuple_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_Maybe_unary_or_binary_function_std_pair_int_int {
  __dtor() {
  }
}
class std_function_func_std_pair_int_int extends std_Maybe_unary_or_binary_function_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_function_func_std_pair_int_int(...$a);
  }
  __init_std_function_func_std_pair_int_int(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_std_pair_int_int.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Function_base.prototype)) {
  if ($k !== "constructor" && !($k in std_function_func_std_pair_int_int.prototype)) std_function_func_std_pair_int_int.prototype[$k] = std_Function_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Function_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_std_pair_int_int)) std_function_func_std_pair_int_int[$k] = std_Function_base[$k];
}
class std_List_iterator_std_pair_int_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_std_pair_int_int(...$a);
  }
  __init_std_List_iterator_std_pair_int_int(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_List_const_iterator_std_pair_int_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_const_iterator_std_pair_int_int(...$a);
  }
  __init_std_List_const_iterator_std_pair_int_int(...$a) {
    this._M_node = null;
  }
  __dtor() {
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
    let $t52;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t52 = operatornew__unsigned_long_long((__n * 4)), $t52 ? {a: $t52.a, i: $t52.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t53;
    (__p.a[__p.i] = ($t53 = std_forward_1_int(__args_0), $t53.a[$t53.i]));
  }
  destroy(__p) {
    void 0;
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : []));
    this.__init_std_allocator_int(...$a);
  }
  __init_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [std_move_std_allocator_int($a[0])] : []));
    this.__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_start = null;
      this._M_finish = null;
      this._M_end_of_storage = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
      this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[0]);
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Vector_base_int_std_allocator_int)) {
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
  _M_allocate(__n) {
    let $t54;
    return ($t54 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t54 ? {a: $t54.a, i: $t54.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !($a[0] instanceof std_initializer_list_int) ? [std_move_std_vector_int_std_allocator_int($a[0])] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_int) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t55, $t56;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_vector_int_std_allocator_int) && !($a[0] instanceof std_initializer_list_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_int)) {
      this._M_range_initialize(($t55 = ({a: $a[0], i: 0}), $t55 ? {a: $t55.a, i: $t55.i} : null), ($t56 = ({a: $a[0], i: ($a[0]).length}), $t56 ? {a: $t56.a, i: $t56.i} : null), new std_random_access_iterator_tag());
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Destroy_2_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), this._M_get_Tp_allocator());
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
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
    let $t57;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t57 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t57.a[$t57.i]));
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
    let $t58, $t59, $t60, $t61;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = this._M_allocate(__len);
    let __new_finish = __new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t58 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t58 ? {a: $t58.a, i: $t58.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t59 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t59 ? {a: $t59.a, i: $t59.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t60 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t60 ? {a: $t60.a, i: $t60.i} : null));
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
    this._M_impl._M_end_of_storage = ($t61 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t61 ? {a: $t61.a, i: $t61.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
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
  __dtor() {
  }
}
class std_allocator_int_rebind_int {
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
    let $t62, $t63, $t64;
    return ($t64 = ($t63 = ($t62 = this.begin__c(), $t62), ({a: ($t63 ? $t63.a : null), i: ($t63 ? $t63.i : 0) + (this.size__c())})), $t64 ? {a: $t64.a, i: $t64.i} : null);
  }
}
class std_remove_reference_std_vector_int_std_allocator_int {
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
class std_Rb_tree_const_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_int(...$a) {
    this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
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
    let $t65;
    this._M_node = ($t65 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t65 ? {a: $t65.a, i: $t65.i} : null);
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
    let $t66;
    this._M_value_field = ($t66 = std_forward_1_int($a[0]), $t66.a[$t66.i]);
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
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
    let $t67;
    this._M_node = ($t67 = std_Rb_tree_increment__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t67 ? {a: $t67.a, i: $t67.i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    let $t68;
    this._M_node = ($t68 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t68 ? {a: $t68.a, i: $t68.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
}
class std_reverse_iterator_int {
  __dtor() {
  }
}
class std_has_iterator_category_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_int(...$a);
  }
  __init_std_has_iterator_category_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_has_iterator_category_helper_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_int(...$a);
  }
  __init_std_has_iterator_category_helper_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_iterator_traits_int_value0 {
  __dtor() {
  }
}
class std_iterator_traits_int extends std_iterator_traits_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_int(...$a);
  }
  __init_std_iterator_traits_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_int_value0.prototype.__dtor.call(this);
  }
}
class std_move_iterator_int {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_int(...$a);
  }
  __init_std_move_iterator_int(...$a) {
    this._M_current = 0;
  }
  __dtor() {
  }
}
class std_fpos_int {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_int(...$a);
  }
  __init_std_fpos_int(...$a) {
    this._M_off = 0;
    this._M_state = 0;
  }
  __dtor() {
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
  __dtor() {
  }
}
class std_Head_base_value0_int_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_int_value0(...$a);
  }
  __init_std_Head_base_value0_int_value0(...$a) {
    this._M_head_impl = 0;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_int extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_int(...$a);
  }
  __init_std_Tuple_impl_value0_int(...$a) {
    std_Head_base_value0_int_value0.prototype.__init_std_Head_base_value0_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int.prototype)) std_Tuple_impl_value0_int.prototype[$k] = std_Head_base_value0_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int)) std_Tuple_impl_value0_int[$k] = std_Head_base_value0_int_value0[$k];
}
class std_tuple_int extends std_Tuple_impl_value0_int {
  constructor(...$a) {
    super();
    this.__init_std_tuple_int(...$a);
  }
  __init_std_tuple_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int.prototype.__dtor.call(this);
  }
}
class std_Maybe_unary_or_binary_function_int {
  __dtor() {
  }
}
class std_function_func_int extends std_Maybe_unary_or_binary_function_int {
  constructor(...$a) {
    super();
    this.__init_std_function_func_int(...$a);
  }
  __init_std_function_func_int(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_int.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Function_base.prototype)) {
  if ($k !== "constructor" && !($k in std_function_func_int.prototype)) std_function_func_int.prototype[$k] = std_Function_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Function_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_int)) std_function_func_int[$k] = std_Function_base[$k];
}
class std_List_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_int(...$a);
  }
  __init_std_List_iterator_int(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_List_const_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_const_iterator_int(...$a);
  }
  __init_std_List_const_iterator_int(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_tuple {
  __dtor() {
  }
}
class std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl extends std_allocator_std_pair_int_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
      this._M_impl = new std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl($a[0]);
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl = new std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int_Vector_impl();
      this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  _M_get_Tp_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_allocate(__n) {
    let $t69;
    return ($t69 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t69 ? {a: $t69.a, i: $t69.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Vector_base_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_int_int) ? [($a[1] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    let $t70, $t71;
    if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_int_int)) {
      this._M_range_initialize(($t70 = ({a: $a[0], i: 0}), $t70 ? {a: $t70.a, i: $t70.i} : null), ($t71 = ({a: $a[0], i: ($a[0]).length}), $t71 ? {a: $t71.a, i: $t71.i} : null), new std_random_access_iterator_tag());
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    let $t72;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t72 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t72.a[$t72.i]));
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
    let $t73, $t74, $t75, $t76;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = this._M_allocate(__len);
    let __new_finish = __new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct({a: this, i: "_M_impl"}, ($t73 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t73 ? {a: $t73.a, i: $t73.i} : null), std_forward_1_std_pair_int_int(__args_0));
        __new_finish = null;
        __new_finish = ($t74 = std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t74 ? {a: $t74.a, i: $t74.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy({a: this, i: "_M_impl"}, ($t75 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t75 ? {a: $t75.a, i: $t75.i} : null));
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
    this._M_impl._M_end_of_storage = ($t76 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t76 ? {a: $t76.a, i: $t76.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_pair_int_int {
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
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_current = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
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
class std_pair_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_pair_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this.first = null;
    this.second = new std_vector_std_pair_int_int_std_allocator_std_pair_int_int();
    this.second.ctj_a = this; this.second.ctj_i = "second";
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
class std_is_empty_non_tuple_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_is_empty_non_tuple_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __dtor() {
  }
}
class std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0(...$a);
  }
  __init_std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0(...$a) {
    this._M_head_impl = new std_vector_std_pair_int_int_std_allocator_std_pair_int_int();
    this._M_head_impl.ctj_a = this; this._M_head_impl.ctj_i = "_M_head_impl";
  }
  __dtor() {
  }
}
class std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Tuple_impl_value2 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.prototype.__init_std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value2.prototype.__dtor.call(this);
    std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype)) std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype[$k] = std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int[$k] = std_Head_base_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_value0[$k];
}
class std_is_empty_non_tuple_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_pair_int_int_P(...$a);
  }
  __init_std_is_empty_non_tuple_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_pair_int_int_P {
  __dtor() {
  }
}
class std_Head_base_value0_std_pair_int_int_P_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_std_pair_int_int_P_value0(...$a);
  }
  __init_std_Head_base_value0_std_pair_int_int_P_value0(...$a) {
    this._M_head_impl = null;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    std_Head_base_value0_std_pair_int_int_P_value0.prototype.__init_std_Head_base_value0_std_pair_int_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype.__dtor.call(this);
    std_Head_base_value0_std_pair_int_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype)) std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype[$k] = std_Head_base_value0_std_pair_int_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int)) std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int[$k] = std_Head_base_value0_std_pair_int_int_P_value0[$k];
}
class std_tuple_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_tuple_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_tuple_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_unique_ptr_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_unique_ptr_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_unique_ptr_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_t = new std_tuple_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
}
class std_unique_ptr_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_Pointer {
  __dtor() {
  }
}
class std_remove_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __dtor() {
  }
}
class std_is_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_is_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int extends std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_is_rvalue_reference_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_R {
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_vector_std_pair_int_int_std_allocator_std_pair_int_int_rebind_std_pair_int_int_P {
  __dtor() {
  }
}
class std_iterator_traits_std_pair_int_int_P {
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
    let $t77;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t77 = operatornew__unsigned_long_long((__n * 25)), $t77 ? {a: $t77.a, i: $t77.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int) ? [$a[0]] : []));
    this.__init_std_allocator_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_allocator_std_vector_int_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int)) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_vector_int_std_allocator_int)) {
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
    let $t78;
    return ($t78 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t78 ? {a: $t78.a, i: $t78.i} : null);
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
    let $t79, $t80;
    this._M_range_initialize(($t79 = ({a: $a[0], i: 0}), $t79 ? {a: $t79.a, i: $t79.i} : null), ($t80 = ({a: $a[0], i: ($a[0]).length}), $t80 ? {a: $t80.a, i: $t80.i} : null), new std_random_access_iterator_tag());
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
    let $t81;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t81 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t81.a[$t81.i]));
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
    let $t82, $t83, $t84, $t85;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = this._M_allocate(__len);
    let __new_finish = __new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t82 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t82 ? {a: $t82.a, i: $t82.i} : null), std_forward_1_std_vector_int_std_allocator_int(__args_0));
        __new_finish = null;
        __new_finish = ($t83 = std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t83 ? {a: $t83.a, i: $t83.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t84 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t84 ? {a: $t84.a, i: $t84.i} : null));
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
    this._M_impl._M_end_of_storage = ($t85 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t85 ? {a: $t85.a, i: $t85.i} : null);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int {
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
  __dtor() {
  }
}
class std_allocator_std_vector_int_std_allocator_int_rebind_std_vector_int_std_allocator_int {
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
    let $t86, $t87, $t88;
    return ($t88 = ($t87 = ($t86 = this.begin__c(), $t86), ({a: ($t87 ? $t87.a : null), i: ($t87 ? $t87.i : 0) + (this.size__c())})), $t88 ? {a: $t88.a, i: $t88.i} : null);
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
  __dtor() {
  }
}
class std_are_same_int_std_pair_int_int_P {
  __dtor() {
  }
}
class gnu_cxx_enable_if_value0_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_int_std_vector_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_std_vector_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_current = 0;
  }
  __dtor() {
  }
}
class std_Head_base_value1_int_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value1_int_value0(...$a);
  }
  __init_std_Head_base_value1_int_value0(...$a) {
    this._M_head_impl = 0;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value1_int extends std_Tuple_impl_value2 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value1_int(...$a);
  }
  __init_std_Tuple_impl_value1_int(...$a) {
    std_Head_base_value1_int_value0.prototype.__init_std_Head_base_value1_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value2.prototype.__dtor.call(this);
    std_Head_base_value1_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value1_int.prototype)) std_Tuple_impl_value1_int.prototype[$k] = std_Head_base_value1_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value1_int)) std_Tuple_impl_value1_int[$k] = std_Head_base_value1_int_value0[$k];
}
class std_Tuple_impl_value0_int_int extends std_Tuple_impl_value1_int {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_int_int(...$a);
  }
  __init_std_Tuple_impl_value0_int_int(...$a) {
    std_Head_base_value0_int_value0.prototype.__init_std_Head_base_value0_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1_int.prototype.__dtor.call(this);
    std_Head_base_value0_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_int.prototype)) std_Tuple_impl_value0_int_int.prototype[$k] = std_Head_base_value0_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_int)) std_Tuple_impl_value0_int_int[$k] = std_Head_base_value0_int_value0[$k];
}
class std_tuple_int_int extends std_Tuple_impl_value0_int_int {
  constructor(...$a) {
    super();
    this.__init_std_tuple_int_int(...$a);
  }
  __init_std_tuple_int_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_int.prototype.__dtor.call(this);
  }
}
class std_unique_ptr_int_int_Pointer {
  __dtor() {
  }
}
class std_remove_reference_int {
  __dtor() {
  }
}
class std_conditional_value0_int_int_R {
  __dtor() {
  }
}
class std_vector_int_int {
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_int {
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_int_rebind_int {
  __dtor() {
  }
}
class std_list_int_int {
  __dtor() {
  }
}
class std_istreambuf_iterator_int_int {
  __dtor() {
  }
}
class gnu_cxx_normal_iterator_int_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_int(...$a) {
    this._M_current = 0;
  }
  __dtor() {
  }
}
class std_is_integer_char_P {
  __dtor() {
  }
}
class std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int {
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
    let $t89;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t89 = operatornew__unsigned_long_long((__n * 36)), $t89 ? {a: $t89.a, i: $t89.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int) ? [] : []));
    this.__init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_pair_int_int)) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_std_pair_int_int)) {
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
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_pair_int_int)) {
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
    let $t90;
    return ($t90 = gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t90 ? {a: $t90.a, i: $t90.i} : null);
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
    let $t91, $t92;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t91 = new std_Select1st_std_pair_int_int(), $t91)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t92 = new std_Select1st_std_pair_int_int(), $t92)).op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t93, $t94, $t95;
    let __x = ($t93 = this._M_begin(), $t93 ? {a: $t93.a, i: $t93.i} : null);
    let __y = ($t94 = this._M_end(), $t94 ? {a: $t94.a, i: $t94.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t95 = (__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t95 ? {a: $t95.a, i: $t95.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_std_pair_int_int({a: [new std_Rb_tree_iterator_std_pair_int_int((__y ? {a: __y.a, i: __y.i} : null))], i: 0});
    if (__comp) {
       {
        if (__j.op_eq__c({a: [new std_Rb_tree_iterator_std_pair_int_int({a: [this.begin()], i: 0})], i: 0})) {
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
    let $t96, $t97, $t98, $t99, $t100, $t101, $t102, $t103, $t104, $t105, $t106, $t107;
    let __pos = new std_Rb_tree_iterator_std_pair_int_int({a: [new std_Rb_tree_iterator_std_pair_int_int({a: [__position._M_const_cast__c()], i: 0})], i: 0});
    if (($t97 = ($t96 = this._M_end(), $t96), (__pos._M_node === $t97 || (__pos._M_node && $t97 && __pos._M_node.a === $t97.a && __pos._M_node.i === $t97.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t98 = this._M_rightmost(), $t99 = ($t98 ? $t98.a[$t98.i] : null), $t99 && $t99.a !== undefined ? {a: $t99.a, i: $t99.i} : $t99)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
        }
      }
    }
    else {
      if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_std_pair_int_int({a: [__pos], i: 0});
          if (($t101 = (($t100 = this._M_leftmost(), $t100) ? (($t100 = this._M_leftmost(), $t100)).a[(($t100 = this._M_leftmost(), $t100)).i] : null), (__pos._M_node === $t101 || (__pos._M_node && $t101 && __pos._M_node.a === $t101.a && __pos._M_node.i === $t101.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t103 = (($t102 = __before.op_dec(), $t102.a[$t102.i]))._M_node, $t103 ? {a: $t103.a, i: $t103.i} : null)), __k)) {
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
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
            }
          }
        }
      }
      else {
        if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_std_pair_int_int({a: [__pos], i: 0});
            if (($t105 = (($t104 = this._M_rightmost(), $t104) ? (($t104 = this._M_rightmost(), $t104)).a[(($t104 = this._M_rightmost(), $t104)).i] : null), (__pos._M_node === $t105 || (__pos._M_node && $t105 && __pos._M_node.a === $t105.a && __pos._M_node.i === $t105.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key(($t107 = (($t106 = __after.op_inc(), $t106.a[$t106.i]))._M_node, $t107 ? {a: $t107.a, i: $t107.i} : null)))) {
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
                return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
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
      new std_Rb_tree_iterator_std_pair_int_int({a: [this._M_insert_unique___rv(new std_Rb_tree_const_iterator_std_pair_int_int({a: [new std_Rb_tree_iterator_std_pair_int_int({a: [this.end()], i: 0})], i: 0}), __first)], i: 0});
    }
  }
  _M_insert_unique___rv(__position, __v) {
    let $t108;
    let __res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_hint_unique_pos(__position, (($t108 = new std_Select1st_std_pair_int_int(), $t108)).op_call__c(__v))], i: 0})], i: 0});
    if (__res.second) {
      return new std_Rb_tree_iterator_std_pair_int_int({a: [this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_std_pair_int_int(__v))], i: 0});
    }
    return new std_Rb_tree_iterator_std_pair_int_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t109, $t110, $t111, $t112;
    let __insert_left = (((__x !== null) || ($t110 = ($t109 = this._M_end(), $t109), (__p === $t110 || (__p && $t110 && __p.a === $t110.a && __p.i === $t110.i)))) || this._M_impl._M_key_compare.op_call__c((($t111 = new std_Select1st_std_pair_int_int(), $t111)).op_call__c(__v), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t112 = this._M_create_node__rv(std_forward_1_std_pair_int_int(__v)), $t112 ? {a: $t112.a, i: $t112.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t113;
    let __tmp = ($t113 = this._M_get_node(), $t113 ? {a: $t113.a, i: $t113.i} : null);
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
    let $t114, $t115;
    this._M_t = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_std_pair_int_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t114 = ({a: $a[0], i: 0}), $t114 ? {a: $t114.a, i: $t114.i} : null), ($t115 = ({a: $a[0], i: ($a[0]).length}), $t115 ? {a: $t115.a, i: $t115.i} : null));
  }
  __dtor() {
  }
  begin() {
    return new std_Rb_tree_iterator_std_pair_int_int({a: [this._M_t.begin()], i: 0});
  }
  end() {
    return new std_Rb_tree_iterator_std_pair_int_int({a: [this._M_t.end()], i: 0});
  }
}
class std_remove_reference_std_allocator_int {
  __dtor() {
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
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
    let $t116;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t116 = operatornew__unsigned_long_long((__n * 32)), $t116 ? {a: $t116.a, i: $t116.i} : null);
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [] : []));
    this.__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_std_Rb_tree_node_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int) ? [$a[1]] : []));
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_std_Rb_tree_node_int)) {
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
    if ($a.length >= 1 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_less_int) && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_allocator_int)) {
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
    let $t117;
    return ($t117 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t117 ? {a: $t117.a, i: $t117.i} : null);
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
    let $t118, $t119;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t118 = new std_Identity_int(), $t118)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t119 = new std_Identity_int(), $t119)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
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
    let $t120, $t121, $t122;
    let __x = ($t120 = this._M_begin(), $t120 ? {a: $t120.a, i: $t120.i} : null);
    let __y = ($t121 = this._M_end(), $t121 ? {a: $t121.a, i: $t121.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t122 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t122 ? {a: $t122.a, i: $t122.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_int({a: [new std_Rb_tree_iterator_int((__y ? {a: __y.a, i: __y.i} : null))], i: 0});
    if (__comp) {
       {
        if (__j.op_eq__c({a: [new std_Rb_tree_iterator_int({a: [this.begin()], i: 0})], i: 0})) {
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
    let $t123, $t124, $t125, $t126, $t127, $t128, $t129, $t130, $t131, $t132, $t133, $t134;
    let __pos = new std_Rb_tree_iterator_int({a: [new std_Rb_tree_iterator_int({a: [__position._M_const_cast__c()], i: 0})], i: 0});
    if (($t124 = ($t123 = this._M_end(), $t123), (__pos._M_node === $t124 || (__pos._M_node && $t124 && __pos._M_node.a === $t124.a && __pos._M_node.i === $t124.i)))) {
       {
        if (((this.size__c() > 0) && this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t125 = this._M_rightmost(), $t126 = ($t125 ? $t125.a[$t125.i] : null), $t126 && $t126.a !== undefined ? {a: $t126.a, i: $t126.i} : $t126)), __k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
        }
      }
    }
    else {
      if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)))) {
         {
          let __before = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
          if (($t128 = (($t127 = this._M_leftmost(), $t127) ? (($t127 = this._M_leftmost(), $t127)).a[(($t127 = this._M_leftmost(), $t127)).i] : null), (__pos._M_node === $t128 || (__pos._M_node && $t128 && __pos._M_node.a === $t128.a && __pos._M_node.i === $t128.i)))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(this._M_leftmost(), this._M_leftmost());
          }
          else {
            if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t130 = (($t129 = __before.op_dec(), $t129.a[$t129.i]))._M_node, $t130 ? {a: $t130.a, i: $t130.i} : null)), __k)) {
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
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
            }
          }
        }
      }
      else {
        if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null)), __k)) {
           {
            let __after = new std_Rb_tree_iterator_int({a: [__pos], i: 0});
            if (($t132 = (($t131 = this._M_rightmost(), $t131) ? (($t131 = this._M_rightmost(), $t131)).a[(($t131 = this._M_rightmost(), $t131)).i] : null), (__pos._M_node === $t132 || (__pos._M_node && $t132 && __pos._M_node.a === $t132.a && __pos._M_node.i === $t132.i)))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [null], i: 0}, this._M_rightmost());
            }
            else {
              if (this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key(($t134 = (($t133 = __after.op_inc(), $t133.a[$t133.i]))._M_node, $t134 ? {a: $t134.a, i: $t134.i} : null)))) {
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
                return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos(__k)], i: 0});
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
      new std_Rb_tree_iterator_int({a: [this._M_insert_unique___rv(new std_Rb_tree_const_iterator_int({a: [new std_Rb_tree_iterator_int({a: [this.end()], i: 0})], i: 0}), __first)], i: 0});
    }
  }
  _M_insert_unique___rv(__position, __v) {
    let $t135;
    let __res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_hint_unique_pos(__position, (($t135 = new std_Identity_int(), $t135)).op_call__c(__v))], i: 0})], i: 0});
    if (__res.second) {
      return new std_Rb_tree_iterator_int({a: [this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_int(__v))], i: 0});
    }
    return new std_Rb_tree_iterator_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null));
  }
  _M_insert___rv(__x, __p, __v) {
    let $t136, $t137, $t138, $t139;
    let __insert_left = (((__x !== null) || ($t137 = ($t136 = this._M_end(), $t136), (__p === $t137 || (__p && $t137 && __p.a === $t137.a && __p.i === $t137.i)))) || this._M_impl._M_key_compare.op_call__c((($t138 = new std_Identity_int(), $t138)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t139 = this._M_create_node__rv(std_forward_1_int(__v)), $t139 ? {a: $t139.a, i: $t139.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t140;
    let __tmp = ($t140 = this._M_get_node(), $t140 ? {a: $t140.a, i: $t140.i} : null);
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
    let $t141, $t142;
    this._M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(($a[1] === undefined ? ({a: [new std_less_int()], i: 0}) : $a[1]), {a: [(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).a[(($a[2] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[2])).i]], i: 0});
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
    this._M_t._M_insert_unique(($t141 = ({a: $a[0], i: 0}), $t141 ? {a: $t141.a, i: $t141.i} : null), ($t142 = ({a: $a[0], i: ($a[0]).length}), $t142 ? {a: $t142.a, i: $t142.i} : null));
  }
  __dtor() {
  }
  begin__c() {
    return new std_Rb_tree_const_iterator_int({a: [new std_Rb_tree_iterator_int({a: [this._M_t.begin()], i: 0})], i: 0});
  }
  end__c() {
    return new std_Rb_tree_const_iterator_int({a: [new std_Rb_tree_iterator_int({a: [this._M_t.end()], i: 0})], i: 0});
  }
}
class std_pair_int_std_allocator_int {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_int_std_allocator_int(...$a);
  }
  __init_std_pair_int_std_allocator_int(...$a) {
    this.first = 0;
    this.second = new std_allocator_int();
    this.second.ctj_a = this; this.second.ctj_i = "second";
  }
  __dtor() {
  }
}
class std_is_empty_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_std_allocator_int(...$a);
  }
  __init_std_is_empty_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_std_allocator_int extends std_is_empty_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_allocator_int(...$a);
  }
  __init_std_is_empty_non_tuple_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_empty_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_allocator_int {
  __dtor() {
  }
}
class std_Head_base_value1_std_allocator_int_value1 extends std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Head_base_value1_std_allocator_int_value1(...$a);
  }
  __init_std_Head_base_value1_std_allocator_int_value1(...$a) {
  }
  __dtor() {
    std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_Tuple_impl_value1_std_allocator_int extends std_Tuple_impl_value2 {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value1_std_allocator_int(...$a);
  }
  __init_std_Tuple_impl_value1_std_allocator_int(...$a) {
    std_Head_base_value1_std_allocator_int_value1.prototype.__init_std_Head_base_value1_std_allocator_int_value1.call(this);
  }
  __dtor() {
    std_Tuple_impl_value2.prototype.__dtor.call(this);
    std_Head_base_value1_std_allocator_int_value1.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_std_allocator_int_value1.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value1_std_allocator_int.prototype)) std_Tuple_impl_value1_std_allocator_int.prototype[$k] = std_Head_base_value1_std_allocator_int_value1.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value1_std_allocator_int_value1)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value1_std_allocator_int)) std_Tuple_impl_value1_std_allocator_int[$k] = std_Head_base_value1_std_allocator_int_value1[$k];
}
class std_Tuple_impl_value0_int_std_allocator_int extends std_Tuple_impl_value1_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_int_std_allocator_int(...$a);
  }
  __init_std_Tuple_impl_value0_int_std_allocator_int(...$a) {
    std_Head_base_value0_int_value0.prototype.__init_std_Head_base_value0_int_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1_std_allocator_int.prototype.__dtor.call(this);
    std_Head_base_value0_int_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_std_allocator_int.prototype)) std_Tuple_impl_value0_int_std_allocator_int.prototype[$k] = std_Head_base_value0_int_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_std_allocator_int)) std_Tuple_impl_value0_int_std_allocator_int[$k] = std_Head_base_value0_int_value0[$k];
}
class std_tuple_int_std_allocator_int extends std_Tuple_impl_value0_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_tuple_int_std_allocator_int(...$a);
  }
  __init_std_tuple_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_unique_ptr_int_std_allocator_int_Pointer {
  __dtor() {
  }
}
class std_is_reference_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_int(...$a);
  }
  __init_std_is_reference_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_int_std_is_rvalue_reference_std_allocator_int extends std_is_rvalue_reference_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_int_std_is_rvalue_reference_std_allocator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_int_std_is_rvalue_reference_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_int_std_is_rvalue_reference_std_allocator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_allocator_int_std_allocator_int_R {
  __dtor() {
  }
}
class std_List_node_int extends std_detail_List_node_base {
  _M_data;
  constructor(...$a) {
    super();
    this.__init_std_List_node_int(...$a);
  }
  __init_std_List_node_int(...$a) {
    this._M_data = 0;
  }
  __dtor() {
    std_detail_List_node_base.prototype.__dtor.call(this);
  }
}
class std_allocator_int_rebind_std_List_node_int {
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_List_node_int {
  __dtor() {
  }
}
class std_allocator_std_List_node_int extends gnu_cxx_new_allocator_std_List_node_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_List_node_int(...$a);
  }
  __init_std_allocator_std_List_node_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int_List_impl extends std_allocator_std_List_node_int {
  _M_node;
  constructor(...$a) {
    super(...[]);
    this.__init_std_List_base_int_std_allocator_int_List_impl(...$a);
  }
  __init_std_List_base_int_std_allocator_int_List_impl(...$a) {
    this._M_node = new std_detail_List_node_base();
    this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
  }
  __dtor() {
    std_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_List_base_int_std_allocator_int(...$a);
  }
  __init_std_List_base_int_std_allocator_int(...$a) {
    this._M_impl = new std_List_base_int_std_allocator_int_List_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
}
class std_list_int_std_allocator_int extends std_List_base_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_list_int_std_allocator_int(...$a);
  }
  __init_std_list_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_List_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_istreambuf_iterator_int_std_allocator_int {
  __dtor() {
  }
}
class std_iterator_traits_char_P {
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
    let $t143, $t144, $t145, $t146, $t147, $t148, $t149, $t150;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t143 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[0]), $t144 = ($t143 ? $t143.a[$t143.i] : null), $t144 && $t144.a !== undefined ? {a: $t144.a, i: $t144.i} : $t144);
      this.second = ($t145 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P($a[1]), $t146 = ($t145 ? $t145.a[$t145.i] : null), $t146 && $t146.a !== undefined ? {a: $t146.a, i: $t146.i} : $t146);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t147 = std_forward_1_std_Rb_tree_node_int_P($a[0]), $t148 = ($t147 ? $t147.a[$t147.i] : null), $t148 && $t148.a !== undefined ? {a: $t148.a, i: $t148.i} : $t148);
      this.second = ($t149 = std_forward_1_std_Rb_tree_node_int_P($a[1]), $t150 = ($t149 ? $t149.a[$t149.i] : null), $t150 && $t150.a !== undefined ? {a: $t150.a, i: $t150.i} : $t150);
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P_R {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P {
  __dtor() {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
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
  __dtor() {
  }
}
class std_remove_reference_std_pair_int_int {
  __dtor() {
  }
}
class gnu_cxx_char_traits_std_pair_int_int {
  __dtor() {
  }
}
class std_char_traits_std_pair_int_int extends gnu_cxx_char_traits_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_char_traits_std_pair_int_int(...$a);
  }
  __init_std_char_traits_std_pair_int_int(...$a) {
  }
  __dtor() {
    gnu_cxx_char_traits_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Rep_base(...$a);
  }
  __init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Alloc_hider extends std_allocator_std_pair_int_int {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Alloc_hider(...$a);
  }
  __init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int {
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int(...$a);
  }
  __init_std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int(...$a) {
    this._M_dataplus = new std_basic_string_std_pair_int_int_std_char_traits_std_pair_int_int_std_allocator_std_pair_int_int_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_is_char_std_pair_int_int {
  __dtor() {
  }
}
class gnu_cxx_enable_if_value0_bool {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P {
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
  __dtor() {
  }
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
class gnu_cxx_char_traits_int {
  __dtor() {
  }
}
class std_char_traits_int extends gnu_cxx_char_traits_int {
  constructor(...$a) {
    super();
    this.__init_std_char_traits_int(...$a);
  }
  __init_std_char_traits_int(...$a) {
  }
  __dtor() {
    gnu_cxx_char_traits_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider extends std_allocator_int {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_std_char_traits_int_std_allocator_int {
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_dataplus = new std_basic_string_int_std_char_traits_int_std_allocator_int_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_is_char_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_P {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_P {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
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
  __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_value1 {
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
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
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
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_Rb_tree_node_std_pair_int_int_value0 {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_std_pair_int_int_std_is_function_std_Rb_tree_node_std_pair_int_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_or_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_or_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_std_pair_int_int_std_or_std_is_enum_std_Rb_tree_node_std_pair_int_int_std_is_pointer_std_Rb_tree_node_std_pair_int_int_std_is_member_pointer_std_Rb_tree_node_std_pair_int_int_std_is_nullptr_t_std_Rb_tree_node_std_pair_int_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_R {
  __dtor() {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_R_value0 {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_std_pair_int_int_std_pair_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_std_pair_int_int_std_pair_int_int {
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
  __dtor() {
  }
}
class std_iterator_traits_int_P {
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
class std_is_direct_constructible_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_int_int(...$a);
  }
  __init_std_is_direct_constructible_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_int_int_RR extends std_is_direct_constructible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_int_int_RR(...$a);
  }
  __init_std_is_constructible_impl_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_int_int.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_int_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_int_int(...$a);
  }
  __init_std_is_static_castable_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_int_int(...$a);
  }
  __init_std_is_static_castable_safe_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_int_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_int_int(...$a);
  }
  __init_std_is_static_castable_impl_int_int(...$a) {
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
class std_is_base_to_derived_ref_int_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_int_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_int_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_int extends std_is_lvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int {
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 extends std_is_lvalue_to_rvalue_ref_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_int_int_value0.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 {
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_int_int_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_int_int_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_int_int_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0_std_is_static_castable_int_int {
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_int_int extends std_is_direct_constructible_new_safe_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_int_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_array_unknown_bounds_int_std_is_function_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_int_std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_int_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  __dtor() {
  }
}
class std_conditional_value1_std_is_arithmetic_int_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
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
class std_is_direct_constructible_impl_int_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_int_int(...$a);
  }
  __init_std_is_direct_constructible_impl_int_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int extends std_is_direct_constructible_impl_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int(...$a);
  }
  __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_std_is_destructible_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_std_is_direct_constructible_new_safe_int_int {
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
class std_is_constructible_impl_int_int_R extends std_is_direct_constructible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_int_int_R(...$a);
  }
  __init_std_is_constructible_impl_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_int_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_move_iterator_int_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_int_P(...$a);
  }
  __init_std_move_iterator_int_P(...$a) {
    let $t151;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t151 = (($a[0]).a[($a[0]).i]).base__c(), $t151 ? {a: $t151.a, i: $t151.i} : null);
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_P {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
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
  __dtor() {
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_int_P {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
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
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_R {
  __dtor() {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
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
  __dtor() {
  }
}
class std_remove_volatile_int_R {
  __dtor() {
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
class std_is_direct_constructible_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR extends std_is_direct_constructible_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a);
  }
  __init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_safe_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_pair_int_int_std_pair_int_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_static_castable_impl_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int extends std_is_lvalue_reference_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_pair_int_int_std_is_rvalue_reference_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_pair_int_int_std_is_lvalue_reference_std_pair_int_int {
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 extends std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 {
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_pair_int_int_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_pair_int_int_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_pair_int_int_std_pair_int_int_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_pair_int_int_std_pair_int_int_value1_std_is_lvalue_to_rvalue_ref_std_pair_int_int_std_pair_int_int_value0_std_is_static_castable_std_pair_int_int_std_pair_int_int {
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_pair_int_int_std_or_std_is_array_unknown_bounds_std_pair_int_int_std_is_function_std_pair_int_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_pair_int_int_std_or_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_pair_int_int_std_or_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_pair_int_int_std_or_std_is_enum_std_pair_int_int_std_is_pointer_std_pair_int_int_std_is_member_pointer_std_pair_int_int_std_is_nullptr_t_std_pair_int_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_pair_int_int_R {
  __dtor() {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_pair_int_int_R_value0 {
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
class std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int extends std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int(...$a);
  }
  __init_std_and_std_is_destructible_std_pair_int_int_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_pair_int_int_std_pair_int_int_std_is_destructible_std_pair_int_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_pair_int_int_std_pair_int_int_std_is_direct_constructible_new_safe_std_pair_int_int_std_pair_int_int {
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
class std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R extends std_is_direct_constructible_std_pair_int_int_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a);
  }
  __init_std_is_constructible_impl_std_pair_int_int_std_pair_int_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_pair_int_int_std_pair_int_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_move_iterator_std_pair_int_int_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_move_iterator_std_pair_int_int_P(...$a) {
    let $t152;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_move_iterator_std_pair_int_int_P)) {
      this._M_current = ($t152 = (($a[0]).a[($a[0]).i]).base__c(), $t152 ? {a: $t152.a, i: $t152.i} : null);
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
  __dtor() {
  }
}
class std_iterator_traits_std_vector_int_std_allocator_int_P {
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
  __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_remove_const_std_vector_int_std_allocator_int {
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
class std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a);
  }
  __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_RR(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_static_castable_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_not_std_is_reference_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_not_std_is_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_not_std_is_void_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_std_not_std_is_void_std_vector_int_std_allocator_int extends std_not_std_is_void_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_std_not_std_is_void_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_vector_int_std_allocator_int_std_not_std_is_void_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_vector_int_std_allocator_int_std_not_std_is_reference_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_vector_int_std_allocator_int extends std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_add_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_value1.prototype.__dtor.call(this);
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
class std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_is_function_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_function_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_not_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_not_std_or_std_is_void_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int extends std_is_lvalue_reference_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_std_vector_int_std_allocator_int_std_is_rvalue_reference_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_vector_int_std_allocator_int_std_is_lvalue_reference_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 extends std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 {
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value1_std_is_lvalue_to_rvalue_ref_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_value0_std_is_static_castable_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
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
  __dtor() {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_vector_int_std_allocator_int_std_or_std_is_array_unknown_bounds_std_vector_int_std_allocator_int_std_is_function_std_vector_int_std_allocator_int {
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
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_vector_int_std_allocator_int_std_or_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_vector_int_std_allocator_int_std_or_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_vector_int_std_allocator_int_std_or_std_is_enum_std_vector_int_std_allocator_int_std_is_pointer_std_vector_int_std_allocator_int_std_is_member_pointer_std_vector_int_std_allocator_int_std_is_nullptr_t_std_vector_int_std_allocator_int {
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
  __dtor() {
  }
}
class std_remove_volatile_std_vector_int_std_allocator_int_R {
  __dtor() {
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
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_vector_int_std_allocator_int_R_value0 {
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
class std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int extends std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_and_std_is_destructible_std_vector_int_std_allocator_int_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_destructible_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_std_is_direct_constructible_new_safe_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
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
class std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R extends std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a);
  }
  __init_std_is_constructible_impl_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int_R(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_vector_int_std_allocator_int_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
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
  __dtor() {
  }
}
class std_move_iterator_std_vector_int_std_allocator_int_P {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_move_iterator_std_vector_int_std_allocator_int_P(...$a) {
    let $t153;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_move_iterator_std_vector_int_std_allocator_int_P)) {
      this._M_current = ($t153 = (($a[0]).a[($a[0]).i]).base__c(), $t153 ? {a: $t153.a, i: $t153.i} : null);
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
class std_iterator_std_random_access_iterator_tag_int_long_int_P_int_R {
  __dtor() {
  }
}
class std_reverse_iterator_int_P extends std_iterator_std_random_access_iterator_tag_int_long_int_P_int_R {
  current;
  constructor(...$a) {
    super();
    this.__init_std_reverse_iterator_int_P(...$a);
  }
  __init_std_reverse_iterator_int_P(...$a) {
    this.current = null;
  }
  __dtor() {
    std_iterator_std_random_access_iterator_tag_int_long_int_P_int_R.prototype.__dtor.call(this);
  }
}
class std_fpos_int_P {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_int_P(...$a);
  }
  __init_std_fpos_int_P(...$a) {
    this._M_off = 0;
    this._M_state = null;
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_int_P {
  __dtor() {
  }
}
class std_allocator_int_P extends gnu_cxx_new_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_allocator_int_P(...$a);
  }
  __init_std_allocator_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_int_P(...$a);
  }
  __init_std_Rb_tree_iterator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_Rb_tree_node_int_P extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super();
    this.__init_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_Rb_tree_node_int_P(...$a) {
    this._M_value_field = null;
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_const_iterator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_int_P(...$a);
  }
  __init_std_Rb_tree_const_iterator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_is_empty_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_int_P(...$a);
  }
  __init_std_is_empty_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_empty_non_tuple_int_P extends std_is_empty_int_P {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_int_P(...$a);
  }
  __init_std_is_empty_non_tuple_int_P(...$a) {
  }
  __dtor() {
    std_is_empty_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int_P {
  __dtor() {
  }
}
class std_Head_base_value0_int_P_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_int_P_value0(...$a);
  }
  __init_std_Head_base_value0_int_P_value0(...$a) {
    this._M_head_impl = null;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_int_P extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_int_P(...$a);
  }
  __init_std_Tuple_impl_value0_int_P(...$a) {
    std_Head_base_value0_int_P_value0.prototype.__init_std_Head_base_value0_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_P.prototype)) std_Tuple_impl_value0_int_P.prototype[$k] = std_Head_base_value0_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_P)) std_Tuple_impl_value0_int_P[$k] = std_Head_base_value0_int_P_value0[$k];
}
class std_tuple_int_P extends std_Tuple_impl_value0_int_P {
  constructor(...$a) {
    super();
    this.__init_std_tuple_int_P(...$a);
  }
  __init_std_tuple_int_P(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_P.prototype.__dtor.call(this);
  }
}
class std_function_func_int_P extends std_Maybe_unary_or_binary_function_int {
  constructor(...$a) {
    super();
    this.__init_std_function_func_int_P(...$a);
  }
  __init_std_function_func_int_P(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_int.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Function_base.prototype)) {
  if ($k !== "constructor" && !($k in std_function_func_int_P.prototype)) std_function_func_int_P.prototype[$k] = std_Function_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Function_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_int_P)) std_function_func_int_P[$k] = std_Function_base[$k];
}
class std_List_iterator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_int_P(...$a);
  }
  __init_std_List_iterator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_List_const_iterator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_const_iterator_int_P(...$a);
  }
  __init_std_List_const_iterator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
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
class std_iterator_std_random_access_iterator_tag_std_pair_int_int_long_std_pair_int_int_P_std_pair_int_int_R {
  __dtor() {
  }
}
class std_reverse_iterator_std_pair_int_int_P extends std_iterator_std_random_access_iterator_tag_std_pair_int_int_long_std_pair_int_int_P_std_pair_int_int_R {
  current;
  constructor(...$a) {
    super();
    this.__init_std_reverse_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_reverse_iterator_std_pair_int_int_P(...$a) {
    this.current = null;
  }
  __dtor() {
    std_iterator_std_random_access_iterator_tag_std_pair_int_int_long_std_pair_int_int_P_std_pair_int_int_R.prototype.__dtor.call(this);
  }
}
class std_fpos_std_pair_int_int_P {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_std_pair_int_int_P(...$a);
  }
  __init_std_fpos_std_pair_int_int_P(...$a) {
    this._M_off = 0;
    this._M_state = null;
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_int_int_P {
  __dtor() {
  }
}
class std_allocator_std_pair_int_int_P extends gnu_cxx_new_allocator_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_pair_int_int_P(...$a);
  }
  __init_std_allocator_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_std_pair_int_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_Rb_tree_iterator_std_pair_int_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_Rb_tree_node_std_pair_int_int_P extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super();
    this.__init_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  __init_std_Rb_tree_node_std_pair_int_int_P(...$a) {
    this._M_value_field = null;
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_const_iterator_std_pair_int_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_pair_int_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_std_pair_int_int_P extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_std_pair_int_int_P(...$a);
  }
  __init_std_Tuple_impl_value0_std_pair_int_int_P(...$a) {
    std_Head_base_value0_std_pair_int_int_P_value0.prototype.__init_std_Head_base_value0_std_pair_int_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_std_pair_int_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_std_pair_int_int_P.prototype)) std_Tuple_impl_value0_std_pair_int_int_P.prototype[$k] = std_Head_base_value0_std_pair_int_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_pair_int_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_std_pair_int_int_P)) std_Tuple_impl_value0_std_pair_int_int_P[$k] = std_Head_base_value0_std_pair_int_int_P_value0[$k];
}
class std_tuple_std_pair_int_int_P extends std_Tuple_impl_value0_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_tuple_std_pair_int_int_P(...$a);
  }
  __init_std_tuple_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_function_func_std_pair_int_int_P extends std_Maybe_unary_or_binary_function_std_pair_int_int {
  constructor(...$a) {
    super();
    this.__init_std_function_func_std_pair_int_int_P(...$a);
  }
  __init_std_function_func_std_pair_int_int_P(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_std_pair_int_int.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Function_base.prototype)) {
  if ($k !== "constructor" && !($k in std_function_func_std_pair_int_int_P.prototype)) std_function_func_std_pair_int_int_P.prototype[$k] = std_Function_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Function_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_std_pair_int_int_P)) std_function_func_std_pair_int_int_P[$k] = std_Function_base[$k];
}
class std_List_iterator_std_pair_int_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_List_iterator_std_pair_int_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_List_const_iterator_std_pair_int_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_const_iterator_std_pair_int_int_P(...$a);
  }
  __init_std_List_const_iterator_std_pair_int_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_declval_protector_std_vector_int_std_allocator_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_declval_protector_std_vector_int_std_allocator_int(...$a) {
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
class std_iterator_std_random_access_iterator_tag_std_vector_int_std_allocator_int_long_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_R {
  __dtor() {
  }
}
class std_reverse_iterator_std_vector_int_std_allocator_int_P extends std_iterator_std_random_access_iterator_tag_std_vector_int_std_allocator_int_long_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_R {
  current;
  constructor(...$a) {
    super();
    this.__init_std_reverse_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_reverse_iterator_std_vector_int_std_allocator_int_P(...$a) {
    this.current = null;
  }
  __dtor() {
    std_iterator_std_random_access_iterator_tag_std_vector_int_std_allocator_int_long_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_R.prototype.__dtor.call(this);
  }
}
class std_fpos_std_vector_int_std_allocator_int_P {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_fpos_std_vector_int_std_allocator_int_P(...$a) {
    this._M_off = 0;
    this._M_state = null;
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_vector_int_std_allocator_int_P {
  __dtor() {
  }
}
class std_allocator_std_vector_int_std_allocator_int_P extends gnu_cxx_new_allocator_std_vector_int_std_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_allocator_std_vector_int_std_allocator_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_vector_int_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_std_vector_int_std_allocator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_Rb_tree_iterator_std_vector_int_std_allocator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_Rb_tree_node_std_vector_int_std_allocator_int_P extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super();
    this.__init_std_Rb_tree_node_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_Rb_tree_node_std_vector_int_std_allocator_int_P(...$a) {
    this._M_value_field = null;
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_const_iterator_std_vector_int_std_allocator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_Rb_tree_const_iterator_std_vector_int_std_allocator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_is_empty_non_tuple_std_vector_int_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_empty_non_tuple_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_is_empty_non_tuple_std_vector_int_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_std_vector_int_std_allocator_int_P {
  __dtor() {
  }
}
class std_Head_base_value0_std_vector_int_std_allocator_int_P_value0 {
  _M_head_impl;
  constructor(...$a) {
    this.__init_std_Head_base_value0_std_vector_int_std_allocator_int_P_value0(...$a);
  }
  __init_std_Head_base_value0_std_vector_int_std_allocator_int_P_value0(...$a) {
    this._M_head_impl = null;
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_std_vector_int_std_allocator_int_P extends std_Tuple_impl_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Tuple_impl_value0_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_Tuple_impl_value0_std_vector_int_std_allocator_int_P(...$a) {
    std_Head_base_value0_std_vector_int_std_allocator_int_P_value0.prototype.__init_std_Head_base_value0_std_vector_int_std_allocator_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1.prototype.__dtor.call(this);
    std_Head_base_value0_std_vector_int_std_allocator_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_vector_int_std_allocator_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_std_vector_int_std_allocator_int_P.prototype)) std_Tuple_impl_value0_std_vector_int_std_allocator_int_P.prototype[$k] = std_Head_base_value0_std_vector_int_std_allocator_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_std_vector_int_std_allocator_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_std_vector_int_std_allocator_int_P)) std_Tuple_impl_value0_std_vector_int_std_allocator_int_P[$k] = std_Head_base_value0_std_vector_int_std_allocator_int_P_value0[$k];
}
class std_tuple_std_vector_int_std_allocator_int_P extends std_Tuple_impl_value0_std_vector_int_std_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_tuple_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_tuple_std_vector_int_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_std_vector_int_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_Maybe_unary_or_binary_function_std_vector_int_std_allocator_int {
  __dtor() {
  }
}
class std_function_func_std_vector_int_std_allocator_int_P extends std_Maybe_unary_or_binary_function_std_vector_int_std_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_function_func_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_function_func_std_vector_int_std_allocator_int_P(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_std_vector_int_std_allocator_int.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Function_base.prototype)) {
  if ($k !== "constructor" && !($k in std_function_func_std_vector_int_std_allocator_int_P.prototype)) std_function_func_std_vector_int_std_allocator_int_P.prototype[$k] = std_Function_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Function_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_std_vector_int_std_allocator_int_P)) std_function_func_std_vector_int_std_allocator_int_P[$k] = std_Function_base[$k];
}
class std_List_iterator_std_vector_int_std_allocator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_List_iterator_std_vector_int_std_allocator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class std_List_const_iterator_std_vector_int_std_allocator_int_P {
  _M_node;
  constructor(...$a) {
    this.__init_std_List_const_iterator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_List_const_iterator_std_vector_int_std_allocator_int_P(...$a) {
    this._M_node = null;
  }
  __dtor() {
  }
}
class gnu_cxx_char_traits_int_P {
  __dtor() {
  }
}
class std_char_traits_int_P extends gnu_cxx_char_traits_int_P {
  constructor(...$a) {
    super();
    this.__init_std_char_traits_int_P(...$a);
  }
  __init_std_char_traits_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_char_traits_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Rep_base(...$a);
  }
  __init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Alloc_hider extends std_allocator_int_P {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Alloc_hider(...$a);
  }
  __init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P {
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P(...$a);
  }
  __init_std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P(...$a) {
    this._M_dataplus = new std_basic_string_int_P_std_char_traits_int_P_std_allocator_int_P_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_int_P_rebind_int_P {
  __dtor() {
  }
}
class std_is_char_int_P {
  __dtor() {
  }
}
class gnu_cxx_char_traits_std_pair_int_int_P {
  __dtor() {
  }
}
class std_char_traits_std_pair_int_int_P extends gnu_cxx_char_traits_std_pair_int_int_P {
  constructor(...$a) {
    super();
    this.__init_std_char_traits_std_pair_int_int_P(...$a);
  }
  __init_std_char_traits_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_char_traits_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Rep_base(...$a);
  }
  __init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Alloc_hider extends std_allocator_std_pair_int_int_P {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Alloc_hider(...$a);
  }
  __init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_std_pair_int_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P {
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P(...$a);
  }
  __init_std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P(...$a) {
    this._M_dataplus = new std_basic_string_std_pair_int_int_P_std_char_traits_std_pair_int_int_P_std_allocator_std_pair_int_int_P_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_std_pair_int_int_P_rebind_std_pair_int_int_P {
  __dtor() {
  }
}
class std_is_char_std_pair_int_int_P {
  __dtor() {
  }
}
class gnu_cxx_char_traits_std_vector_int_std_allocator_int_P {
  __dtor() {
  }
}
class std_char_traits_std_vector_int_std_allocator_int_P extends gnu_cxx_char_traits_std_vector_int_std_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_char_traits_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_char_traits_std_vector_int_std_allocator_int_P(...$a) {
  }
  __dtor() {
    gnu_cxx_char_traits_std_vector_int_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Rep_base {
  _M_length;
  _M_capacity;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Rep_base(...$a);
  }
  __init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Rep_base(...$a) {
    this._M_length = 0;
    this._M_capacity = 0;
    this._M_refcount = 0;
  }
  __dtor() {
  }
}
class std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Alloc_hider extends std_allocator_std_vector_int_std_allocator_int_P {
  _M_p;
  constructor(...$a) {
    super();
    this.__init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Alloc_hider(...$a);
  }
  __init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Alloc_hider(...$a) {
    this._M_p = null;
  }
  __dtor() {
    std_allocator_std_vector_int_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P {
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P(...$a) {
    this._M_dataplus = new std_basic_string_std_vector_int_std_allocator_int_P_std_char_traits_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int_P_Alloc_hider();
    this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
  }
  __dtor() {
  }
  static npos = 4294967295;
}
class std_allocator_std_vector_int_std_allocator_int_P_rebind_std_vector_int_std_allocator_int_P {
  __dtor() {
  }
}
class std_is_char_std_vector_int_std_allocator_int_P {
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
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_char_std_char_traits_char({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_char_std_char_traits_char && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      let __fmt = (~((std_ios_base.basefield | std_ios_base.uppercase)));
      (($a[1]).a[($a[1]).i]).flags(((__flags & __fmt) | (std_ios_base.hex | std_ios_base.showbase)));
      ($a[0]).op_assign({a: [new std_ostreambuf_iterator_char_std_char_traits_char({a: [this._M_insert_int__c($a[0], $a[1], $a[2], ($a[3] >>> 0))], i: 0})], i: 0});
      (($a[1]).a[($a[1]).i]).flags(__flags);
      return $a[0];
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
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __fmt = (($a[2]).a[($a[2]).i]).flags__c();
      (($a[2]).a[($a[2]).i]).flags(((__fmt & (~std_ios_base.basefield)) | std_ios_base.hex));
      let __ul = {v: 0};
      ($a[0]).op_assign({a: [new std_istreambuf_iterator_char_std_char_traits_char({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], {a: __ul, i: "v"})], i: 0})], i: 0});
      (($a[2]).a[($a[2]).i]).flags(__fmt);
      ($a[4]).a[($a[4]).i] = (__ul.v ? {a: __ul.v.a, i: __ul.v.i} : null);
      return $a[0];
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
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && ($a[2] === null || typeof $a[2] === "object")) {
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
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_tolower__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_widen__c(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && ($a[2] === null || typeof $a[2] === "object")) {
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object") && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
    }
    else { throw new Error("no matching overload"); }
  }
}
for (const $k of Object.getOwnPropertyNames(std_ctype_base.prototype)) {
  if ($k !== "constructor" && !($k in std_ctype_abstract_base_wchar_t.prototype)) std_ctype_abstract_base_wchar_t.prototype[$k] = std_ctype_base.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_ctype_base)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_ctype_abstract_base_wchar_t)) std_ctype_abstract_base_wchar_t[$k] = std_ctype_base[$k];
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
    if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && (typeof $a[3] === "number" || typeof $a[3] === "boolean")) {
      return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_insert_int__c($a[0], $a[1], $a[2], $a[3])], i: 0});
    }
    else if ($a.length >= 4 && $a.length <= 4 && $a[0] instanceof std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[1] !== null && typeof $a[1] === "object" && $a[1].a[$a[1].i] instanceof std_ios_base) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || typeof $a[3] === "object")) {
      let __flags = (($a[1]).a[($a[1]).i]).flags__c();
      let __fmt = (~((std_ios_base.basefield | std_ios_base.uppercase)));
      (($a[1]).a[($a[1]).i]).flags(((__flags & __fmt) | (std_ios_base.hex | std_ios_base.showbase)));
      ($a[0]).op_assign({a: [new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_insert_int__c($a[0], $a[1], $a[2], ($a[3] >>> 0))], i: 0})], i: 0});
      (($a[1]).a[($a[1]).i]).flags(__flags);
      return $a[0];
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
    if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], $a[4])], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __fmt = (($a[2]).a[($a[2]).i]).flags__c();
      (($a[2]).a[($a[2]).i]).flags(((__fmt & (~std_ios_base.basefield)) | std_ios_base.hex));
      let __ul = {v: 0};
      ($a[0]).op_assign({a: [new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [this._M_extract_int__c($a[0], $a[1], $a[2], $a[3], {a: __ul, i: "v"})], i: 0})], i: 0});
      (($a[2]).a[($a[2]).i]).flags(__fmt);
      ($a[4]).a[($a[4]).i] = (__ul.v ? {a: __ul.v.a, i: __ul.v.i} : null);
      return $a[0];
    }
    else { throw new Error("no matching overload"); }
  }
  static id = new std_num_get_wchar_t_std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t();
}
class std_shared_count_value0 {
  _M_pi;
  constructor(...$a) {
    this.__init_std_shared_count_value0(...$a);
  }
  __init_std_shared_count_value0(...$a) {
    this._M_pi = null;
  }
  __dtor() {
  }
}
class std_shared_ptr_std_pair_int_int_value0 {
  _M_ptr;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_shared_ptr_std_pair_int_int_value0(...$a);
  }
  __init_std_shared_ptr_std_pair_int_int_value0(...$a) {
    this._M_ptr = null;
    this._M_refcount = new std_shared_count_value0();
    this._M_refcount.ctj_a = this; this._M_refcount.ctj_i = "_M_refcount";
  }
  __dtor() {
  }
}
class std_shared_ptr_std_pair_int_int extends std_shared_ptr_std_pair_int_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_shared_ptr_std_pair_int_int(...$a);
  }
  __init_std_shared_ptr_std_pair_int_int(...$a) {
  }
  __dtor() {
    std_shared_ptr_std_pair_int_int_value0.prototype.__dtor.call(this);
  }
}
class std_shared_ptr_int_value0 {
  _M_ptr;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_shared_ptr_int_value0(...$a);
  }
  __init_std_shared_ptr_int_value0(...$a) {
    this._M_ptr = null;
    this._M_refcount = new std_shared_count_value0();
    this._M_refcount.ctj_a = this; this._M_refcount.ctj_i = "_M_refcount";
  }
  __dtor() {
  }
}
class std_shared_ptr_int extends std_shared_ptr_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_shared_ptr_int(...$a);
  }
  __init_std_shared_ptr_int(...$a) {
  }
  __dtor() {
    std_shared_ptr_int_value0.prototype.__dtor.call(this);
  }
}
class std_shared_ptr_int_P_value0 {
  _M_ptr;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_shared_ptr_int_P_value0(...$a);
  }
  __init_std_shared_ptr_int_P_value0(...$a) {
    this._M_ptr = null;
    this._M_refcount = new std_shared_count_value0();
    this._M_refcount.ctj_a = this; this._M_refcount.ctj_i = "_M_refcount";
  }
  __dtor() {
  }
}
class std_shared_ptr_int_P extends std_shared_ptr_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_shared_ptr_int_P(...$a);
  }
  __init_std_shared_ptr_int_P(...$a) {
  }
  __dtor() {
    std_shared_ptr_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_shared_ptr_std_pair_int_int_P_value0 {
  _M_ptr;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_shared_ptr_std_pair_int_int_P_value0(...$a);
  }
  __init_std_shared_ptr_std_pair_int_int_P_value0(...$a) {
    this._M_ptr = null;
    this._M_refcount = new std_shared_count_value0();
    this._M_refcount.ctj_a = this; this._M_refcount.ctj_i = "_M_refcount";
  }
  __dtor() {
  }
}
class std_shared_ptr_std_pair_int_int_P extends std_shared_ptr_std_pair_int_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_shared_ptr_std_pair_int_int_P(...$a);
  }
  __init_std_shared_ptr_std_pair_int_int_P(...$a) {
  }
  __dtor() {
    std_shared_ptr_std_pair_int_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_shared_ptr_std_vector_int_std_allocator_int_P_value0 {
  _M_ptr;
  _M_refcount;
  constructor(...$a) {
    this.__init_std_shared_ptr_std_vector_int_std_allocator_int_P_value0(...$a);
  }
  __init_std_shared_ptr_std_vector_int_std_allocator_int_P_value0(...$a) {
    this._M_ptr = null;
    this._M_refcount = new std_shared_count_value0();
    this._M_refcount.ctj_a = this; this._M_refcount.ctj_i = "_M_refcount";
  }
  __dtor() {
  }
}
class std_shared_ptr_std_vector_int_std_allocator_int_P extends std_shared_ptr_std_vector_int_std_allocator_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_shared_ptr_std_vector_int_std_allocator_int_P(...$a);
  }
  __init_std_shared_ptr_std_vector_int_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_shared_ptr_std_vector_int_std_allocator_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_Tuple_impl_value0_int_P_int extends std_Tuple_impl_value1_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_int_P_int(...$a);
  }
  __init_std_Tuple_impl_value0_int_P_int(...$a) {
    std_Head_base_value0_int_P_value0.prototype.__init_std_Head_base_value0_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1_int.prototype.__dtor.call(this);
    std_Head_base_value0_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_P_int.prototype)) std_Tuple_impl_value0_int_P_int.prototype[$k] = std_Head_base_value0_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_P_int)) std_Tuple_impl_value0_int_P_int[$k] = std_Head_base_value0_int_P_value0[$k];
}
class std_tuple_int_P_int extends std_Tuple_impl_value0_int_P_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_tuple_int_P_int(...$a);
  }
  __init_std_tuple_int_P_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_P_int.prototype.__dtor.call(this);
  }
}
class std_unique_ptr_int_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_unique_ptr_int_int(...$a);
  }
  __init_std_unique_ptr_int_int(...$a) {
    this._M_t = new std_tuple_int_P_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
}
class std_Tuple_impl_value0_int_P_std_allocator_int extends std_Tuple_impl_value1_std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Tuple_impl_value0_int_P_std_allocator_int(...$a);
  }
  __init_std_Tuple_impl_value0_int_P_std_allocator_int(...$a) {
    std_Head_base_value0_int_P_value0.prototype.__init_std_Head_base_value0_int_P_value0.call(this);
  }
  __dtor() {
    std_Tuple_impl_value1_std_allocator_int.prototype.__dtor.call(this);
    std_Head_base_value0_int_P_value0.prototype.__dtor.call(this);
  }
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0.prototype)) {
  if ($k !== "constructor" && !($k in std_Tuple_impl_value0_int_P_std_allocator_int.prototype)) std_Tuple_impl_value0_int_P_std_allocator_int.prototype[$k] = std_Head_base_value0_int_P_value0.prototype[$k];
}
for (const $k of Object.getOwnPropertyNames(std_Head_base_value0_int_P_value0)) {
  if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_Tuple_impl_value0_int_P_std_allocator_int)) std_Tuple_impl_value0_int_P_std_allocator_int[$k] = std_Head_base_value0_int_P_value0[$k];
}
class std_tuple_int_P_std_allocator_int extends std_Tuple_impl_value0_int_P_std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_tuple_int_P_std_allocator_int(...$a);
  }
  __init_std_tuple_int_P_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Tuple_impl_value0_int_P_std_allocator_int.prototype.__dtor.call(this);
  }
}
class std_unique_ptr_int_std_allocator_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_unique_ptr_int_std_allocator_int(...$a);
  }
  __init_std_unique_ptr_int_std_allocator_int(...$a) {
    this._M_t = new std_tuple_int_P_std_allocator_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
}
class std_Mutex_base_value0 {
  __dtor() {
  }
}
class std_Sp_counted_base_value0 extends std_Mutex_base_value0 {
  _M_use_count;
  _M_weak_count;
  constructor(...$a) {
    super();
    this.__init_std_Sp_counted_base_value0(...$a);
  }
  __init_std_Sp_counted_base_value0(...$a) {
    this._M_use_count = 0;
    this._M_weak_count = 0;
  }
  __dtor() {
    std_Mutex_base_value0.prototype.__dtor.call(this);
  }
  _M_dispose() {
    throw new Error("pure virtual called");
  }
  _M_destroy() {
  }
  _M_get_deleter($p0) {
    throw new Error("pure virtual called");
  }
}
class gnu_cxx_conditional_type_value1_unsigned_long_unsigned_long_long {
  __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function std_swap_int_P(__a, __b) {
  let $t154, $t155, $t156, $t157, $t158, $t159;
  let __tmp = {v: ($t154 = std_move_int_P(__a), $t155 = ($t154 ? $t154.a[$t154.i] : null), $t155 && $t155.a !== undefined ? {a: $t155.a, i: $t155.i} : $t155)};
  __a.a[__a.i] = ($t156 = std_move_int_P(__b), $t157 = ($t156 ? $t156.a[$t156.i] : null), $t157 && $t157.a !== undefined ? {a: $t157.a, i: $t157.i} : $t157);
  __b.a[__b.i] = ($t158 = std_move_int_P({a: __tmp, i: "v"}), $t159 = ($t158 ? $t158.a[$t158.i] : null), $t159 && $t159.a !== undefined ? {a: $t159.a, i: $t159.i} : $t159);
}
function main() {
  let $t160, $t161, $t162, $t163, $t164, $t165, $t166, $t167, $t168, $t169, $t170, $t171, $t172, $t173, $t174, $t175, $t176, $t177, $t178, $t179, $t180, $t181, $t182, $t183;
  let s = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [104, 105, 0], i: 0}, {a: [new std_allocator_char()], i: 0});
  let t = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: [121, 111, 0], i: 0}, {a: [new std_allocator_char()], i: 0});
  let buf = [97, 98, 99, 0];
  let u = new std_basic_string_char_std_char_traits_char_std_allocator_char({a: buf, i: 0}, {a: [new std_allocator_char()], i: 0});
  ($t160 = (__ctj_write(__ctj_fmt(((s.size__c() + t.size__c()) + u.size__c()))), std_cout), __ctj_write("\n"), $t160);
  let m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int([new std_pair_int_int({a: [1], i: 0}, {a: [10], i: 0}), new std_pair_int_int({a: [2], i: 0}, {a: [20], i: 0})], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_std_pair_int_int()], i: 0});
  for (let $b0 = m.begin(), $e0 = m.end(); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let kv = $b0.op_mul__c();
    ($t163 = ($t162 = ($t161 = (__ctj_write(__ctj_fmt((kv.a[kv.i]).first)), std_cout), __ctj_write(__ctj_fmt([58, 0])), $t161), __ctj_write(__ctj_fmt((kv.a[kv.i]).second)), $t162), __ctj_write(__ctj_fmt([32, 0])), $t163);
  }
  (__ctj_write("\n"), std_cout);
  let v = {v: new std_vector_int_std_allocator_int([1, 2, 3], {a: [new std_allocator_int()], i: 0})};
  let w = new std_vector_int_std_allocator_int(std_move_std_vector_int_std_allocator_int({a: v, i: "v"}));
  ($t167 = ($t166 = ($t165 = (__ctj_write(__ctj_fmt(w.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t165), __ctj_write(__ctj_fmt(($t164 = w.op_index(2), $t164.a[$t164.i]))), $t166), __ctj_write("\n"), $t167);
  let st = new std_set_int_std_less_int_std_allocator_int([3, 1, 2], {a: [new std_less_int()], i: 0}, {a: [new std_allocator_int()], i: 0});
  for (let $b1 = st.begin__c(), $e1 = st.end__c(); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let x = ($b1.op_mul__c()).a[($b1.op_mul__c()).i];
    (__ctj_write(__ctj_fmt(x)), std_cout);
  }
  (__ctj_write("\n"), std_cout);
  let a = {v: 1};
  let b = {v: 2};
  let p = {v: (({a: a, i: "v"}) ? {a: ({a: a, i: "v"}).a, i: ({a: a, i: "v"}).i} : null)};
  let q = {v: (({a: b, i: "v"}) ? {a: ({a: b, i: "v"}).a, i: ({a: b, i: "v"}).i} : null)};
  std_swap_int_P({a: p, i: "v"}, {a: q, i: "v"});
  let r = {a: p, i: "v"};
  r.a[r.i] = (({a: a, i: "v"}) ? {a: ({a: a, i: "v"}).a, i: ({a: a, i: "v"}).i} : null);
  ($t172 = ($t171 = ($t170 = ($t169 = ($t168 = (__ctj_write(__ctj_fmt(p.v.a[p.v.i])), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t168), __ctj_write(__ctj_fmt(q.v.a[q.v.i])), $t169), __ctj_write(__ctj_fmt([32, 0])), $t170), __ctj_write(__ctj_fmt((r.a[r.i]).a[(r.a[r.i]).i])), $t171), __ctj_write("\n"), $t172);
  let vp = new std_vector_std_pair_int_int_std_allocator_std_pair_int_int([new std_pair_int_int({a: [1], i: 0}, {a: [2], i: 0}), new std_pair_int_int({a: [3], i: 0}, {a: [4], i: 0})], {a: [new std_allocator_std_pair_int_int()], i: 0});
  for (let $b2 = vp.begin(), $e2 = vp.end(); gnu_cxx_operator_std_pair_int_int_P_std_pair_int_int_P_std_vector_std_pair_int_int_std_allocator_std_pair_int_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let pr = $b2.op_mul__c();
    ($t175 = ($t174 = ($t173 = (__ctj_write(__ctj_fmt((pr.a[pr.i]).first)), std_cout), __ctj_write(__ctj_fmt([45, 0])), $t173), __ctj_write(__ctj_fmt((pr.a[pr.i]).second)), $t174), __ctj_write(__ctj_fmt([32, 0])), $t175);
  }
  (__ctj_write("\n"), std_cout);
  let vv = new std_vector_std_vector_int_std_allocator_int_std_allocator_std_vector_int_std_allocator_int([new std_vector_int_std_allocator_int([1, 2], {a: [new std_allocator_int()], i: 0}), new std_vector_int_std_allocator_int([3], {a: [new std_allocator_int()], i: 0})], {a: [new std_allocator_std_vector_int_std_allocator_int()], i: 0});
  ($t183 = ($t182 = ($t181 = ($t180 = ($t179 = (__ctj_write(__ctj_fmt(vv.size__c())), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t179), __ctj_write(__ctj_fmt((($t178 = vv.op_index(0), $t178.a[$t178.i])).size__c())), $t180), __ctj_write(__ctj_fmt([32, 0])), $t181), __ctj_write(__ctj_fmt(($t176 = (($t177 = vv.op_index(1), $t177.a[$t177.i])).op_index(0), $t176.a[$t176.i]))), $t182), __ctj_write("\n"), $t183);
  return 0;
}
function std_min_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
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
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R.__delegate();
}
function std_declval_std_pair_int_int_R() {
  return std_declval_protector_std_pair_int_int_R.__delegate();
}
function std_declval_std_vector_int_std_allocator_int() {
  return std_declval_protector_std_vector_int_std_allocator_int.__delegate();
}
function std_declval_std_vector_int_std_allocator_int_R() {
  return std_declval_protector_std_vector_int_std_allocator_int_R.__delegate();
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
  let $t184, $t185, $t186, $t187;
  return ($t186 = (($t184 = (__lhs.a[__lhs.i]).base__c(), $t184) ? (($t184 = (__lhs.a[__lhs.i]).base__c(), $t184)).a[(($t184 = (__lhs.a[__lhs.i]).base__c(), $t184)).i] : null), $t187 = (($t185 = (__rhs.a[__rhs.i]).base__c(), $t185) ? (($t185 = (__rhs.a[__rhs.i]).base__c(), $t185)).a[(($t185 = (__rhs.a[__rhs.i]).base__c(), $t185)).i] : null), (!($t186 === $t187 || ($t186 && $t187 && $t186.a === $t187.a && $t186.i === $t187.i))));
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
function std_operator_3_int_P_int_P_1030(__x, __y) {
  let $t188, $t189, $t190, $t191;
  return ($t190 = ($t188 = (__x.a[__x.i]).base__c(), $t188), $t191 = ($t189 = (__y.a[__y.i]).base__c(), $t189), ($t190 === $t191 || ($t190 && $t191 && $t190.a === $t191.a && $t190.i === $t191.i)));
}
function std_operator_3_std_pair_int_int_P_std_pair_int_int_P_1030(__x, __y) {
  let $t192, $t193, $t194, $t195;
  return ($t194 = ($t192 = (__x.a[__x.i]).base__c(), $t192), $t195 = ($t193 = (__y.a[__y.i]).base__c(), $t193), ($t194 === $t195 || ($t194 && $t195 && $t194.a === $t195.a && $t194.i === $t195.i)));
}
function std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_1030(__x, __y) {
  let $t196, $t197, $t198, $t199;
  return ($t198 = ($t196 = (__x.a[__x.i]).base__c(), $t196), $t199 = ($t197 = (__y.a[__y.i]).base__c(), $t197), ($t198 === $t199 || ($t198 && $t199 && $t198.a === $t199.a && $t198.i === $t199.i)));
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t200;
  return ($t200 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(new std_move_iterator_int_P({a: [std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null))], i: 0}), new std_move_iterator_int_P({a: [std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null))], i: 0}), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t200 ? {a: $t200.a, i: $t200.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t201;
  return ($t201 = std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(new std_move_iterator_std_pair_int_int_P({a: [std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__first ? {a: __first.a, i: __first.i} : null))], i: 0}), new std_move_iterator_std_pair_int_int_P({a: [std_make_move_if_noexcept_iterator_std_pair_int_int_P_std_move_iterator_std_pair_int_int_P((__last ? {a: __last.a, i: __last.i} : null))], i: 0}), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t201 ? {a: $t201.a, i: $t201.i} : null);
}
function std_uninitialized_move_if_noexcept_a_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __result, __alloc) {
  let $t202;
  return ($t202 = std_uninitialized_copy_a_std_move_iterator_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(new std_move_iterator_std_vector_int_std_allocator_int_P({a: [std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__first ? {a: __first.a, i: __first.i} : null))], i: 0}), new std_move_iterator_std_vector_int_std_allocator_int_P({a: [std_make_move_if_noexcept_iterator_std_vector_int_std_allocator_int_P_std_move_iterator_std_vector_int_std_allocator_int_P((__last ? {a: __last.a, i: __last.i} : null))], i: 0}), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t202 ? {a: $t202.a, i: $t202.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t203;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t203 = std_addressof_int(__first), $t203 ? {a: $t203.a, i: $t203.i} : null));
  }
}
function std_Destroy_2_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __alloc) {
  let $t204;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.destroy(__alloc, ($t204 = std_addressof_std_pair_int_int(__first), $t204 ? {a: $t204.a, i: $t204.i} : null));
  }
}
function std_Destroy_2_std_vector_int_std_allocator_int_P_std_allocator_std_vector_int_std_allocator_int(__first, __last, __alloc) {
  let $t205;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.destroy(__alloc, ($t205 = std_addressof_std_vector_int_std_allocator_int(__first), $t205 ? {a: $t205.a, i: $t205.i} : null));
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
function std_uninitialized_copy_a_std_move_iterator_std_pair_int_int_P_std_pair_int_int_P_std_allocator_std_pair_int_int(__first, __last, __result, __alloc) {
  let $t207;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_pair_int_int_P_std_pair_int_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_pair_int_int.construct(__alloc, ($t207 = std_addressof_std_pair_int_int(__cur), $t207 ? {a: $t207.a, i: $t207.i} : null), __first.op_mul__c());
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
  let $t208;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_3_std_vector_int_std_allocator_int_P_std_vector_int_std_allocator_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_std_vector_int_std_allocator_int.construct(__alloc, ($t208 = std_addressof_std_vector_int_std_allocator_int(__cur), $t208 ? {a: $t208.a, i: $t208.i} : null), __first.op_mul__c());
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
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_std_pair_int_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_addressof_std_vector_int_std_allocator_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
let std_cout = {};
main();
__ctj_flush();
