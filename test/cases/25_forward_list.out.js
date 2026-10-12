"use strict";
var __ctj_obuf = "";
function __ctj_fmt(v) { for (var n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { var nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; } if (v != null && typeof v === "object" && v._M_dataplus !== undefined) { v = v._M_dataplus._M_p; if (v == null) return ""; } if (v == null) return "0"; if (typeof v === "boolean") return v ? "1" : "0"; if (typeof v === "number") return String(v); if (typeof v === "string") return v; var a = v && v.a, i = v && v.i; if (Array.isArray(v)) { a = v; i = 0; } if (Array.isArray(a)) { var s = ""; for (var k = i | 0; k < a.length && a[k]; k++) s += String.fromCharCode(a[k]); return s; } return String(v); }
function __ctj_write(s) { s = String(s); if (typeof process !== "undefined" && process.stdout && process.stdout.write) { process.stdout.write(s); return; } __ctj_obuf += s; for (;;) { var n = __ctj_obuf.indexOf("\n"); if (n < 0) break; console.log(__ctj_obuf.slice(0, n)); __ctj_obuf = __ctj_obuf.slice(n + 1); } }
function __ctj_flush() { if (__ctj_obuf) { console.log(__ctj_obuf); __ctj_obuf = ""; } }
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
class class_178 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_178(...$a);
  }
  __init_class_178(...$a) {
    this.__count = 0;
    this.__value = 0;
  }
  __dtor() {
  }
}
class class_179 {
  done;
  started;
  constructor(...$a) {
    this.__init_class_179(...$a);
  }
  __init_class_179(...$a) {
    this.done = 0;
    this.started = 0;
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
    return ($t8 = (((!(this._M_is_leaked__c())) && std_operator_5_char_char(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, 0)), $t8 ? {a: $t8.a, i: $t8.i} : null);
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
    let $t16, $t17, $t18, $t19, $t20;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t17 = (($t16 = (($a[0]).a[($a[0]).i])._M_rep__c(), $t16.a[$t16.i]))._M_grab({a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}, {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}), $t17 ? {a: $t17.a, i: $t17.i} : null), {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_char))) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t19 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t18 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_char.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_char_std_char_traits_char_std_allocator_char.npos)})), $t18 ? {a: $t18.a, i: $t18.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1])), $t19 ? {a: $t19.a, i: $t19.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[1]));
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t20 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct(0, 0, {a: [new std_allocator_char()], i: 0}), $t20 ? {a: $t20.a, i: $t20.i} : null), {a: [new std_allocator_char()], i: 0});
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
    let $t21;
    return ($t21 = this._M_dataplus._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t21 ? {a: $t21.a, i: $t21.i} : null);
  }
  _M_rep__c() {
    let $t22, $t23;
    return ($t23 = {a: (($t22 = this._M_data__c(), $t22)).a, i: (($t22 = this._M_data__c(), $t22)).i + ((-(1)))}, $t23 ? {a: $t23.a, i: $t23.i} : null);
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
  _M_mutate(__pos, __len1, __len2) {
    let $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38, $t39, $t40, $t41, $t42, $t43, $t44, $t45, $t46, $t47, $t48, $t49, $t50;
    let __old_size = this.size__c();
    let __new_size = ((__old_size + __len2) - __len1);
    let __how_much = ((__old_size - __pos) - __len1);
    if (((__new_size > this.capacity__c()) || (($t24 = this._M_rep__c(), $t24.a[$t24.i]))._M_is_shared__c())) {
       {
        let __a = {v: this.get_allocator__c()};
        let __r = ($t25 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__new_size, this.capacity__c(), {a: __a, i: "v"}), $t25 ? {a: $t25.a, i: $t25.i} : null);
        if (__pos) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t26 = (__r.a[__r.i])._M_refdata(), $t26 ? {a: $t26.a, i: $t26.i} : null), ($t27 = this._M_data__c(), $t27 ? {a: $t27.a, i: $t27.i} : null), __pos);
        }
        if (__how_much) {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t32 = ($t31 = ($t30 = ($t29 = ($t28 = (__r.a[__r.i])._M_refdata(), $t28), ({a: ($t29 ? $t29.a : null), i: ($t29 ? $t29.i : 0) + (__pos)})), $t30), ({a: ($t31 ? $t31.a : null), i: ($t31 ? $t31.i : 0) + (__len2)})), $t32 ? {a: $t32.a, i: $t32.i} : null), ($t37 = ($t36 = ($t35 = ($t34 = ($t33 = this._M_data__c(), $t33), ({a: ($t34 ? $t34.a : null), i: ($t34 ? $t34.i : 0) + (__pos)})), $t35), ({a: ($t36 ? $t36.a : null), i: ($t36 ? $t36.i : 0) + (__len1)})), $t37 ? {a: $t37.a, i: $t37.i} : null), __how_much);
        }
        (($t38 = this._M_rep__c(), $t38.a[$t38.i]))._M_dispose({a: __a, i: "v"});
        this._M_data(($t39 = (__r.a[__r.i])._M_refdata(), $t39 ? {a: $t39.a, i: $t39.i} : null));
      }
    }
    else {
      if ((__how_much && (__len1 !== __len2))) {
         {
          std_basic_string_char_std_char_traits_char_std_allocator_char._M_move(($t44 = ($t43 = ($t42 = ($t41 = ($t40 = this._M_data__c(), $t40), ({a: ($t41 ? $t41.a : null), i: ($t41 ? $t41.i : 0) + (__pos)})), $t42), ({a: ($t43 ? $t43.a : null), i: ($t43 ? $t43.i : 0) + (__len2)})), $t44 ? {a: $t44.a, i: $t44.i} : null), ($t49 = ($t48 = ($t47 = ($t46 = ($t45 = this._M_data__c(), $t45), ({a: ($t46 ? $t46.a : null), i: ($t46 ? $t46.i : 0) + (__pos)})), $t47), ({a: ($t48 ? $t48.a : null), i: ($t48 ? $t48.i : 0) + (__len1)})), $t49 ? {a: $t49.a, i: $t49.i} : null), __how_much);
        }
      }
    }
    (($t50 = this._M_rep__c(), $t50.a[$t50.i]))._M_set_length_and_sharable(__new_size);
  }
  size__c() {
    let $t51;
    return (($t51 = this._M_rep__c(), $t51.a[$t51.i]))._M_length;
  }
  capacity__c() {
    let $t52;
    return (($t52 = this._M_rep__c(), $t52.a[$t52.i]))._M_capacity;
  }
  reserve(__res = 0) {
    let $t53, $t54, $t55, $t56;
    if (((__res !== this.capacity__c()) || (($t53 = this._M_rep__c(), $t53.a[$t53.i]))._M_is_shared__c())) {
       {
        if ((__res < this.size__c())) {
          __res = this.size__c();
        }
        let __a = {v: this.get_allocator__c()};
        let __tmp = ($t55 = (($t54 = this._M_rep__c(), $t54.a[$t54.i]))._M_clone({a: __a, i: "v"}, (__res - this.size__c())), $t55 ? {a: $t55.a, i: $t55.i} : null);
        (($t56 = this._M_rep__c(), $t56.a[$t56.i]))._M_dispose({a: __a, i: "v"});
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
    let $t57, $t58, $t59;
    __c = {v: __c};
    let __len = (1 + this.size__c());
    if (((__len > this.capacity__c()) || (($t57 = this._M_rep__c(), $t57.a[$t57.i]))._M_is_shared__c())) {
      this.reserve(__len);
    }
    std_char_traits_char.assign({a: (($t58 = this._M_data__c(), $t58)).a, i: (($t58 = this._M_data__c(), $t58)).i + (this.size__c())}, {a: __c, i: "v"});
    (($t59 = this._M_rep__c(), $t59.a[$t59.i]))._M_set_length_and_sharable(__len);
  }
  static _S_construct(...$a) {
    let $t60, $t61, $t62, $t63, $t64, $t65, $t66, $t67, $t68, $t69, $t70;
    if ($a.length >= 3 && $a.length <= 3 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      let __r = ($t60 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create($a[0], (0 >>> 0), $a[2]), $t60 ? {a: $t60.a, i: $t60.i} : null);
      if ($a[0]) {
        std_basic_string_char_std_char_traits_char_std_allocator_char._M_assign(($t61 = (__r.a[__r.i])._M_refdata(), $t61 ? {a: $t61.a, i: $t61.i} : null), $a[0], $a[1]);
      }
      (__r.a[__r.i])._M_set_length_and_sharable($a[0]);
      return ($t62 = (__r.a[__r.i])._M_refdata(), $t62 ? {a: $t62.a, i: $t62.i} : null);
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char)) {
      return ($t63 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t63 ? {a: $t63.a, i: $t63.i} : null);
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
      let __r = ($t64 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, (0 >>> 0), $a[2]), $t64 ? {a: $t64.a, i: $t64.i} : null);
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t65 = (__r.a[__r.i])._M_refdata(), $t65 ? {a: $t65.a, i: $t65.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t66 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((__len + 1), __len, $a[2]), $t66 ? {a: $t66.a, i: $t66.i} : null);
                  std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t67 = (__another.a[__another.i])._M_refdata(), $t67 ? {a: $t67.a, i: $t67.i} : null), ($t68 = (__r.a[__r.i])._M_refdata(), $t68 ? {a: $t68.a, i: $t68.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t69 = (__r.a[__r.i])._M_refdata(), $t69)).a[(($t69 = (__r.a[__r.i])._M_refdata(), $t69)).i + (__len++)] = ($a[0]).a[($a[0]).i];
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
      return ($t70 = (__r.a[__r.i])._M_refdata(), $t70 ? {a: $t70.a, i: $t70.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  copy__c(__s, __n, __pos = 0) {
    let $t71, $t72, $t73;
    this._M_check__c(__pos, {a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 99, 111, 112, 121, 0], i: 0});
    __n = this._M_limit__c(__pos, __n);
    if (__n) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy((__s ? {a: __s.a, i: __s.i} : null), ($t73 = ($t72 = ($t71 = this._M_data__c(), $t71), ({a: ($t72 ? $t72.a : null), i: ($t72 ? $t72.i : 0) + (__pos)})), $t73 ? {a: $t73.a, i: $t73.i} : null), __n);
    }
    return __n;
  }
  c_str__c() {
    let $t74;
    return ($t74 = this._M_data__c(), $t74 ? {a: $t74.a, i: $t74.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus"});
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t75;
    return ($t75 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t75 ? {a: $t75.a, i: $t75.i} : null);
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
  static assign(...$a) {
    let $t76;
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      ($a[0]).a[($a[0]).i] = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return ($t76 = wmemset((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), $a[2], Math.trunc(($a[1]) / 4)), $t76 ? {a: $t76.a, i: $t76.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static length(__s) {
    return wcslen((__s ? {a: __s.a, i: __s.i} : null));
  }
  static find(__s, __n, __a) {
    let $t77;
    return ($t77 = std_wmemchr((__s ? {a: __s.a, i: __s.i} : null), __a.a[__a.i], Math.trunc((__n) / 4)), $t77 ? {a: $t77.a, i: $t77.i} : null);
  }
  static copy(__s1, __s2, __n) {
    let $t78;
    return ($t78 = wmemcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), Math.trunc((__n) / 4)), $t78 ? {a: $t78.a, i: $t78.i} : null);
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
    let $t79;
     {
      this._M_set_sharable();
      this._M_length = __n;
      std_char_traits_wchar_t.assign({a: (($t79 = this._M_refdata(), $t79)).a, i: (($t79 = this._M_refdata(), $t79)).i + (__n)}, {a: std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep, i: "_S_terminal"});
    }
  }
  _M_refdata() {
    let $t80, $t81;
    return ($t81 = ($t80 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t80 ? $t80.a : null), i: ($t80 ? $t80.i : 0) + (1)})), $t81 ? {a: $t81.a, i: $t81.i} : null);
  }
  _M_grab(__alloc1, __alloc2) {
    let $t82;
    return ($t82 = (((!(this._M_is_leaked__c())) && std_operator_5_wchar_t_wchar_t(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, 0)), $t82 ? {a: $t82.a, i: $t82.i} : null);
  }
  static _S_create(__capacity, __old_capacity, __alloc) {
    let $t83, $t84, $t85;
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
    let __place = ($t84 = (($t83 = new std_allocator_char(__alloc), $t83)).allocate(__size, {a: [0], i: 0}), $t84 ? {a: $t84.a, i: $t84.i} : null);
    let __p = ($t85 = (__place.a[__place.i] = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t85 ? {a: $t85.a, i: $t85.i} : null);
    (__p.a[__p.i])._M_capacity = __capacity;
    (__p.a[__p.i])._M_set_sharable();
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
  _M_destroy(__a) {
    let $t86;
    let __size = (20 + ((this._M_capacity + 1) * 4));
    (($t86 = new std_allocator_char(__a), $t86)).deallocate({a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
  }
  _M_refcopy() {
    let $t87;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t87 = this._M_refdata(), $t87 ? {a: $t87.a, i: $t87.i} : null);
  }
  _M_clone(__alloc, __res = 0) {
    let $t88, $t89, $t90, $t91;
    let __requested_cap = (this._M_length + __res);
    let __r = ($t88 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t88 ? {a: $t88.a, i: $t88.i} : null);
    if (this._M_length) {
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t89 = (__r.a[__r.i])._M_refdata(), $t89 ? {a: $t89.a, i: $t89.i} : null), ($t90 = this._M_refdata(), $t90 ? {a: $t90.a, i: $t90.i} : null), this._M_length);
    }
    (__r.a[__r.i])._M_set_length_and_sharable(this._M_length);
    return ($t91 = (__r.a[__r.i])._M_refdata(), $t91 ? {a: $t91.a, i: $t91.i} : null);
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
    let $t92, $t93, $t94, $t95;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t)) {
      this._M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(($t93 = (($t92 = (($a[0]).a[($a[0]).i])._M_rep__c(), $t92.a[$t92.i]))._M_grab({a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}, {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}), $t93 ? {a: $t93.a, i: $t93.i} : null), {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 1 && $a.length <= 2 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_wchar_t))) {
      this._M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(($t95 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._S_construct((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t94 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_char_traits_wchar_t.length((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t.npos)})), $t94 ? {a: $t94.a, i: $t94.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_wchar_t()], i: 0}) : $a[1])), $t95 ? {a: $t95.a, i: $t95.i} : null), ($a[1] === undefined ? ({a: [new std_allocator_wchar_t()], i: 0}) : $a[1]));
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
    let $t96, $t97;
    return ($t97 = {a: (($t96 = this._M_data__c(), $t96)).a, i: (($t96 = this._M_data__c(), $t96)).i + ((-(1)))}, $t97 ? {a: $t97.a, i: $t97.i} : null);
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
    let $t98;
    return (($t98 = this._M_rep__c(), $t98.a[$t98.i]))._M_length;
  }
  static _S_construct(...$a) {
    let $t99, $t100, $t101, $t102, $t103, $t104, $t105, $t106;
    if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_wchar_t)) {
      return ($t99 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._S_construct_aux((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), $a[2], new std_false_type()), $t99 ? {a: $t99.a, i: $t99.i} : null);
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
      let __r = ($t100 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create(__len, (0 >>> 0), $a[2]), $t100 ? {a: $t100.a, i: $t100.i} : null);
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t101 = (__r.a[__r.i])._M_refdata(), $t101 ? {a: $t101.a, i: $t101.i} : null), {a: __buf, i: 0}, __len);
      if (true) {
         {
          while ((!(($a[0]) === ($a[1]) || (($a[0]) && ($a[1]) && ($a[0]).a === ($a[1]).a && ($a[0]).i === ($a[1]).i)))) {
             {
              if ((__len === (__r.a[__r.i])._M_capacity)) {
                 {
                  let __another = ($t102 = std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep._S_create((__len + 1), __len, $a[2]), $t102 ? {a: $t102.a, i: $t102.i} : null);
                  std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy(($t103 = (__another.a[__another.i])._M_refdata(), $t103 ? {a: $t103.a, i: $t103.i} : null), ($t104 = (__r.a[__r.i])._M_refdata(), $t104 ? {a: $t104.a, i: $t104.i} : null), __len);
                  (__r.a[__r.i])._M_destroy($a[2]);
                  __r = (__another ? {a: __another.a, i: __another.i} : null);
                }
              }
              (($t105 = (__r.a[__r.i])._M_refdata(), $t105)).a[(($t105 = (__r.a[__r.i])._M_refdata(), $t105)).i + (__len++)] = ($a[0]).a[($a[0]).i];
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
      return ($t106 = (__r.a[__r.i])._M_refdata(), $t106 ? {a: $t106.a, i: $t106.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  copy__c(__s, __n, __pos = 0) {
    let $t107, $t108, $t109;
    this._M_check__c(__pos, {a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 99, 111, 112, 121, 0], i: 0});
    __n = this._M_limit__c(__pos, __n);
    if (__n) {
      std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t._M_copy((__s ? {a: __s.a, i: __s.i} : null), ($t109 = ($t108 = ($t107 = this._M_data__c(), $t107), ({a: ($t108 ? $t108.a : null), i: ($t108 ? $t108.i : 0) + (__pos)})), $t109 ? {a: $t109.a, i: $t109.i} : null), __n);
    }
    return __n;
  }
  get_allocator__c() {
    return new std_allocator_wchar_t({a: this, i: "_M_dataplus"});
  }
  static _S_construct_aux(__beg, __end, __a, $p3) {
    let $t110;
    return ($t110 = this._S_construct((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t110 ? {a: $t110.a, i: $t110.i} : null);
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
class std_Swallow_assign {
  constructor(...$a) {
    this.__init_std_Swallow_assign(...$a);
  }
  __init_std_Swallow_assign(...$a) {
  }
  __dtor() {
  }
}
class std_Fwd_list_node_base {
  _M_next;
  constructor(...$a) {
    this.__init_std_Fwd_list_node_base(...$a);
  }
  __init_std_Fwd_list_node_base(...$a) {
    this._M_next = null;
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
    let $t111;
    if ((this._M_widen_ok === 1)) {
       {
        (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__to), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__lo), ((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0)));
        return (__hi ? {a: __hi.a, i: __hi.i} : null);
      }
    }
    if ((!this._M_widen_ok)) {
      this._M_widen_init__c();
    }
    return ($t111 = this.do_widen__c((__lo ? {a: __lo.a, i: __lo.i} : null), (__hi ? {a: __hi.a, i: __hi.i} : null), (__to ? {a: __to.a, i: __to.i} : null)), $t111 ? {a: $t111.a, i: $t111.i} : null);
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
  sbumpc() {
    let $t112, $t113, $t114, $t115;
    let __ret = 0;
    if (($t114 = ($t112 = this.gptr__c(), $t112), $t115 = ($t113 = this.egptr__c(), $t113), (($t114 ? $t114.i : 0) < ($t115 ? $t115.i : 0)))) {
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
    let $t116, $t117, $t118, $t119;
    let __ret = 0;
    if (($t118 = ($t116 = this.gptr__c(), $t116), $t119 = ($t117 = this.egptr__c(), $t117), (($t118 ? $t118.i : 0) < ($t119 ? $t119.i : 0)))) {
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
    return new std_fpos_class_178((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_178((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t120, $t121, $t122, $t123, $t124, $t125;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t122 = ($t120 = this.egptr__c(), $t120), $t123 = ($t121 = this.gptr__c(), $t121), (($t122 ? $t122.i : 0) - ($t123 ? $t123.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t124 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t124.a[$t124.i]);
            std_char_traits_char.copy((__s ? {a: __s.a, i: __s.i} : null), ($t125 = this.gptr__c(), $t125 ? {a: $t125.a, i: $t125.i} : null), __len);
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
    let $t126, $t127, $t128, $t129, $t130, $t131;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t128 = ($t126 = this.epptr__c(), $t126), $t129 = ($t127 = this.pptr__c(), $t127), (($t128 ? $t128.i : 0) - ($t129 ? $t129.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t130 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t130.a[$t130.i]);
            std_char_traits_char.copy(($t131 = this.pptr__c(), $t131 ? {a: $t131.a, i: $t131.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
    let $t132, $t133, $t134, $t135;
    let __ret = 0;
    if (($t134 = ($t132 = this.gptr__c(), $t132), $t135 = ($t133 = this.egptr__c(), $t133), (($t134 ? $t134.i : 0) < ($t135 ? $t135.i : 0)))) {
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
    let $t136, $t137, $t138, $t139;
    let __ret = 0;
    if (($t138 = ($t136 = this.gptr__c(), $t136), $t139 = ($t137 = this.egptr__c(), $t137), (($t138 ? $t138.i : 0) < ($t139 ? $t139.i : 0)))) {
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
    return new std_fpos_class_178((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_178((-(1)));
  }
  sync() {
    return 0;
  }
  showmanyc() {
    return 0;
  }
  xsgetn(__s, __n) {
    let $t140, $t141, $t142, $t143, $t144, $t145;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t142 = ($t140 = this.egptr__c(), $t140), $t143 = ($t141 = this.gptr__c(), $t141), (($t142 ? $t142.i : 0) - ($t143 ? $t143.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t144 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t144.a[$t144.i]);
            std_char_traits_wchar_t.copy((__s ? {a: __s.a, i: __s.i} : null), ($t145 = this.gptr__c(), $t145 ? {a: $t145.a, i: $t145.i} : null), __len);
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
    let $t146, $t147, $t148, $t149, $t150, $t151;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t148 = ($t146 = this.epptr__c(), $t146), $t149 = ($t147 = this.pptr__c(), $t147), (($t148 ? $t148.i : 0) - ($t149 ? $t149.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t150 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t150.a[$t150.i]);
            std_char_traits_wchar_t.copy(($t151 = this.pptr__c(), $t151 ? {a: $t151.a, i: $t151.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
class std_fpos_class_178 {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_class_178(...$a);
  }
  __init_std_fpos_class_178(...$a) {
    this._M_off = $a[0];
    this._M_state = new class_178();
    this._M_state.ctj_a = this; this._M_state.ctj_i = "_M_state";
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_int {
  __init_gnu_cxx_new_allocator_int(...$a) { }
  __dtor() {
  }
  construct__rv(__p, __args_0) {
    let $t152;
    (__p.a[__p.i] = ($t152 = std_forward_1_int(__args_0), $t152.a[$t152.i]));
  }
  destroy(__p) {
    void 0;
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int) ? [] : []));
    this.__init_std_allocator_int(...$a);
  }
  __init_std_allocator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_int.prototype.__dtor.call(this);
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_std_Fwd_list_node_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int_rebind_std_Fwd_list_node_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int_rebind_std_Fwd_list_node_int {
  __init_std_allocator_int_rebind_std_Fwd_list_node_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Fwd_list_node_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_std_Fwd_list_node_int(...$a);
  }
  __init_gnu_cxx_new_allocator_std_Fwd_list_node_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t153;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t153 = operatornew__unsigned_long_long((__n * 12)), $t153 ? {a: $t153.a, i: $t153.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 12));
  }
}
class std_allocator_std_Fwd_list_node_int extends gnu_cxx_new_allocator_std_Fwd_list_node_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [] : []));
    this.__init_std_allocator_std_Fwd_list_node_int(...$a);
  }
  __init_std_allocator_std_Fwd_list_node_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int)) {
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Fwd_list_node_int.prototype.__dtor.call(this);
  }
}
class std_Fwd_list_base_int_std_allocator_int_Fwd_list_impl extends std_allocator_std_Fwd_list_node_int {
  _M_head;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int) ? [$a[0]] : []));
    this.__init_std_Fwd_list_base_int_std_allocator_int_Fwd_list_impl(...$a);
  }
  __init_std_Fwd_list_base_int_std_allocator_int_Fwd_list_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_std_Fwd_list_node_int)) {
      this._M_head = new std_Fwd_list_node_base();
      this._M_head.ctj_a = this; this._M_head.ctj_i = "_M_head";
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_head = new std_Fwd_list_node_base();
      this._M_head.ctj_a = this; this._M_head.ctj_i = "_M_head";
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_allocator_std_Fwd_list_node_int.prototype.__dtor.call(this);
  }
}
class std_Fwd_list_base_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Fwd_list_base_int_std_allocator_int(...$a);
  }
  __init_std_Fwd_list_base_int_std_allocator_int(...$a) {
    this._M_impl = new std_Fwd_list_base_int_std_allocator_int_Fwd_list_impl($a[0]);
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t154;
    return ($t154 = gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int.allocate(this._M_get_Node_allocator(), 1), $t154 ? {a: $t154.a, i: $t154.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int.deallocate(this._M_get_Node_allocator(), (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_erase_after(__pos) {
    let $t155;
    let __curr = (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
    (__pos.a[__pos.i])._M_next = (((__curr.a[__curr.i])._M_next) ? {a: ((__curr.a[__curr.i])._M_next).a, i: ((__curr.a[__curr.i])._M_next).i} : null);
    let __a = {v: new std_allocator_int(this._M_get_Node_allocator())};
    std_allocator_traits_std_allocator_int.destroy({a: __a, i: "v"}, ($t155 = (__curr.a[__curr.i])._M_valptr(), $t155 ? {a: $t155.a, i: $t155.i} : null));
    (__curr.a[__curr.i]).__dtor();
    this._M_put_node((__curr ? {a: __curr.a, i: __curr.i} : null));
    return (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
  }
  _M_insert_after__rv(__pos, __args_0) {
    let $t156;
    let __to = (__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null);
    let __thing = ($t156 = this._M_create_node__rv(std_forward_1_int(__args_0)), $t156 ? {a: $t156.a, i: $t156.i} : null);
    (__thing.a[__thing.i])._M_next = (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
    (__to.a[__to.i])._M_next = (__thing ? {a: __thing.a, i: __thing.i} : null);
    return (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
  }
  _M_create_node__rv(__args_0) {
    let $t157, $t158;
    let __node = ($t157 = this._M_get_node(), $t157 ? {a: $t157.a, i: $t157.i} : null);
    if (true) {
       {
        let __a = {v: new std_allocator_int(this._M_get_Node_allocator())};
        (__node.a[__node.i] = new std_Fwd_list_node_int(), __node.a[__node.i].ctj_a = __node.a, __node.a[__node.i].ctj_i = __node.i, {a: __node.a, i: __node.i});
        std_allocator_traits_std_allocator_int.construct__rv({a: __a, i: "v"}, ($t158 = (__node.a[__node.i])._M_valptr(), $t158 ? {a: $t158.a, i: $t158.i} : null), std_forward_1_int(__args_0));
      }
    }
    if (false) {
       {
        this._M_put_node((__node ? {a: __node.a, i: __node.i} : null));
      }
    }
    return (__node ? {a: __node.a, i: __node.i} : null);
  }
}
class std_forward_list_int_std_allocator_int extends std_Fwd_list_base_int_std_allocator_int {
  constructor(...$a) {
    super(...[{a: [new std_allocator_std_Fwd_list_node_int(($a[0] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[0]))], i: 0}]);
    this.__init_std_forward_list_int_std_allocator_int(...$a);
  }
  __init_std_forward_list_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Fwd_list_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new std_Fwd_list_iterator_int((this._M_impl._M_head._M_next ? {a: this._M_impl._M_head._M_next.a, i: this._M_impl._M_head._M_next.i} : null));
  }
  end() {
    return new std_Fwd_list_iterator_int(null);
  }
  cbefore_begin__c() {
    return new std_Fwd_list_const_iterator_int((({a: this._M_impl, i: "_M_head"}) ? {a: ({a: this._M_impl, i: "_M_head"}).a, i: ({a: this._M_impl, i: "_M_head"}).i} : null));
  }
  empty__c() {
    return (this._M_impl._M_head._M_next === null);
  }
  front() {
    let __front = (this._M_impl._M_head._M_next ? {a: this._M_impl._M_head._M_next.a, i: this._M_impl._M_head._M_next.i} : null);
    return (__front.a[__front.i])._M_valptr();
  }
  push_front(__val) {
    this._M_insert_after__rv(this.cbefore_begin__c(), __val);
  }
  pop_front() {
    this._M_erase_after((({a: this._M_impl, i: "_M_head"}) ? {a: ({a: this._M_impl, i: "_M_head"}).a, i: ({a: this._M_impl, i: "_M_head"}).i} : null));
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
class std_Fwd_list_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Fwd_list_iterator_int(...$a);
  }
  __init_std_Fwd_list_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Fwd_list_iterator_int)) {
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
    return (this._M_node.a[this._M_node.i])._M_valptr();
  }
  op_inc() {
    this._M_node = (((this._M_node.a[this._M_node.i])._M_next) ? {a: ((this._M_node.a[this._M_node.i])._M_next).a, i: ((this._M_node.a[this._M_node.i])._M_next).i} : null);
    return {a: [this], i: 0};
  }
  op_ne__c(__x) {
    return (!(this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i)));
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
class std_Fwd_list_const_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Fwd_list_const_iterator_int(...$a);
  }
  __init_std_Fwd_list_const_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_Fwd_list_const_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_integral_constant_unsigned_long_long_value4 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_long_long_value4(...$a);
  }
  __init_std_integral_constant_unsigned_long_long_value4(...$a) {
  }
  __dtor() {
  }
  static value = 4;
}
class std_alignment_of_int extends std_integral_constant_unsigned_long_long_value4 {
  constructor(...$a) {
    super();
    this.__init_std_alignment_of_int(...$a);
  }
  __init_std_alignment_of_int(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value4.prototype.__dtor.call(this);
  }
}
class std_aligned_storage_value4_value4 {
  __init_std_aligned_storage_value4_value4(...$a) { }
  __dtor() {
  }
}
class std_aligned_storage_value4_value4_type_class_119 {
  constructor(...$a) {
    this.__init_std_aligned_storage_value4_value4_type_class_119(...$a);
  }
  __init_std_aligned_storage_value4_value4_type_class_119(...$a) {
  }
  __dtor() {
  }
}
class std_aligned_storage_value4_value4_type {
  __data;
  __align;
  constructor(...$a) {
    this.__init_std_aligned_storage_value4_value4_type(...$a);
  }
  __init_std_aligned_storage_value4_value4_type(...$a) {
    this.__data = new Array(4).fill(0);
    this.__align = new std_aligned_storage_value4_value4_type_class_119();
    this.__align.ctj_a = this; this.__align.ctj_i = "__align";
  }
  __dtor() {
  }
}
class std_Fwd_list_node_int extends std_Fwd_list_node_base {
  _M_storage;
  constructor(...$a) {
    super();
    this.__init_std_Fwd_list_node_int(...$a);
  }
  __init_std_Fwd_list_node_int(...$a) {
    this._M_storage = new std_aligned_storage_value4_value4_type();
    this._M_storage.ctj_a = this; this._M_storage.ctj_i = "_M_storage";
  }
  __dtor() {
    std_Fwd_list_node_base.prototype.__dtor.call(this);
  }
  _M_valptr() {
    return (({a: this, i: "_M_storage"}) ? {a: ({a: this, i: "_M_storage"}).a, i: ({a: this, i: "_M_storage"}).i} : null);
  }
}
class std_allocator_traits_std_allocator_int {
  __init_std_allocator_traits_std_allocator_int(...$a) { }
  __dtor() {
  }
  static destroy(__a, __p) {
    std_allocator_traits_std_allocator_int._S_destroy(__a, (__p ? {a: __p.a, i: __p.i} : null));
  }
  static construct__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
  static _S_construct__rv(__a, __p, __args_0) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
  static _S_destroy(__a, __p) {
    (__a.a[__a.i]).destroy((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class std_allocator_traits_std_allocator_int_construct_helper_int_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_int_construct_helper_int_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_int_construct_helper_int_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
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
class std_is_reference_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_int_P(...$a);
  }
  __init_std_is_reference_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_int_P(...$a);
  }
  __init_std_is_lvalue_reference_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_int_P(...$a);
  }
  __init_std_is_rvalue_reference_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_int_P_std_is_rvalue_reference_int_P extends std_is_rvalue_reference_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_int_P_std_is_rvalue_reference_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_int_P_std_is_rvalue_reference_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_P_std_is_rvalue_reference_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_int_P_std_is_rvalue_reference_int_P(...$a) { }
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
class std_not_std_is_reference_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_int_P(...$a);
  }
  __init_std_not_std_is_reference_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_int_P(...$a);
  }
  __init_std_is_void_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_int_P {
  __init_std_remove_cv_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_int_P {
  __init_std_remove_volatile_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_int_P {
  __init_std_remove_const_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_int_P(...$a);
  }
  __init_std_is_void_helper_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_int_P(...$a);
  }
  __init_std_not_std_is_void_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_int_P_std_not_std_is_void_int_P extends std_not_std_is_void_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_int_P_std_not_std_is_void_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_int_P_std_not_std_is_void_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_int_P_std_not_std_is_reference_int_P {
  __init_std_conditional_value1_std_not_std_is_void_int_P_std_not_std_is_reference_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_P_value1 {
  __init_std_add_rvalue_reference_helper_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_int_P extends std_add_rvalue_reference_helper_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_int_P(...$a);
  }
  __init_std_add_rvalue_reference_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_int_P_value1.prototype.__dtor.call(this);
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
class std_is_reference_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_int_P(...$a);
  }
  __init_std_is_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_int_P_std_is_rvalue_reference_std_allocator_int_P extends std_is_rvalue_reference_std_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_int_P_std_is_rvalue_reference_std_allocator_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_int_P_std_is_rvalue_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_int_P_std_is_rvalue_reference_std_allocator_int_P {
  __init_std_conditional_value0_std_is_lvalue_reference_std_allocator_int_P_std_is_rvalue_reference_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_int_P(...$a);
  }
  __init_std_is_void_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_int_P {
  __init_std_remove_cv_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_int_P {
  __init_std_remove_volatile_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_allocator_int_P {
  __init_std_remove_const_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_int_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_int_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_int_P_std_not_std_is_void_std_allocator_int_P extends std_not_std_is_void_std_allocator_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_int_P_std_not_std_is_void_std_allocator_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_int_P_std_not_std_is_void_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_int_P_std_not_std_is_reference_std_allocator_int_P {
  __init_std_conditional_value1_std_not_std_is_void_std_allocator_int_P_std_not_std_is_reference_std_allocator_int_P(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_int_P_value1 {
  __init_std_add_rvalue_reference_helper_std_allocator_int_P_value1(...$a) { }
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_int_P extends std_add_rvalue_reference_helper_std_allocator_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_enable_if_value1_void {
  __init_std_enable_if_value1_void(...$a) { }
  __dtor() {
  }
}
class std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_int_int(...$a);
  }
  __init_std_is_constructible_int_int(...$a) {
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
class std_is_constructible_impl_int_int extends std_is_direct_constructible_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_int_int(...$a);
  }
  __init_std_is_constructible_impl_int_int(...$a) {
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
  __init_std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int(...$a) { }
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
  __init_std_conditional_value0_std_is_base_of_int_int_std_not_std_is_same_int_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0 {
  __init_std_conditional_value0_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0(...$a) { }
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
  __init_std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_int_value1_std_is_lvalue_to_rvalue_ref_int_int_value0_std_is_static_castable_int_int(...$a) { }
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
  __init_std_conditional_value1_std_is_direct_constructible_impl_int_int_std_is_destructible_int(...$a) { }
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_std_is_direct_constructible_new_safe_int_int {
  __init_std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_std_is_direct_constructible_new_safe_int_int(...$a) { }
  __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int_std_is_constructible_int_int extends std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int_std_is_constructible_int_int(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int_std_is_constructible_int_int(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_int_int_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int {
  __init_std_conditional_value0_std_is_constructible_int_int_std_not_std_allocator_traits_std_allocator_int_construct_helper_int_int(...$a) { }
  __dtor() {
  }
}
class std_enable_if_value0_void {
  __init_std_enable_if_value0_void(...$a) { }
  __dtor() {
  }
}
class std_allocator_traits_std_allocator_int_destroy_helper_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_int_destroy_helper_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_int_destroy_helper_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int {
  __init_gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int(...$a) { }
  __dtor() {
  }
  static allocate(__a, __n) {
    let $t159;
    return ($t159 = (__a.a[__a.i]).allocate(__n, {a: [0], i: 0}), $t159 ? {a: $t159.a, i: $t159.i} : null);
  }
  static deallocate(__a, __p, __n) {
    (__a.a[__a.i]).deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
  }
}
class std_declval_protector_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_int_P(...$a);
  }
  __init_std_declval_protector_int_P(...$a) {
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
class std_declval_protector_std_allocator_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_int_P(...$a);
  }
  __init_std_declval_protector_std_allocator_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
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
    let $t160, $t161, $t162;
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
          let __lc = ($t160 = __uc.op_call__c(__loc), $t160 ? {a: $t160.a, i: $t160.i} : null);
          let __name = ($t161 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t161 ? {a: $t161.a, i: $t161.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t162 = {a: new Array((1 * __plen)).fill(0), i: 0}, $t162 ? {a: $t162.a, i: $t162.i} : null);
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
    let $t163, $t164, $t165;
    let __uc = new std_use_cache_std_numpunct_cache_char();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t163 = __uc.op_call__c(__loc), $t163 ? {a: $t163.a, i: $t163.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_27_char_std_char_traits_char({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
              if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let __lit_zero = ($t164 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t164 ? {a: $t164.a, i: $t164.i} : null);
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
                  if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
                let __q = ($t165 = std_char_traits_char.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t165 ? {a: $t165.a, i: $t165.i} : null);
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
                      if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_26_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let $t166, $t167, $t168;
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
              if (std_operator_27_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
          let __lc = ($t166 = __uc.op_call__c(__loc), $t166 ? {a: $t166.a, i: $t166.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_27_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
      std_convert_to_v_float(($t167 = __xtrc.v.c_str__c(), $t167 ? {a: $t167.a, i: $t167.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_27_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t168 = __xtrc.v.c_str__c(), $t168 ? {a: $t168.a, i: $t168.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_27_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
    let $t169;
    return ($t169 = this.do_widen__c((__lo ? {a: __lo.a, i: __lo.i} : null), (__hi ? {a: __hi.a, i: __hi.i} : null), (__to ? {a: __to.a, i: __to.i} : null)), $t169 ? {a: $t169.a, i: $t169.i} : null);
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
    let $t170, $t171, $t172;
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
          let __lc = ($t170 = __uc.op_call__c(__loc), $t170 ? {a: $t170.a, i: $t170.i} : null);
          let __name = ($t171 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t171 ? {a: $t171.a, i: $t171.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t172 = {a: new Array((4 * __plen)).fill(0), i: 0}, $t172 ? {a: $t172.a, i: $t172.i} : null);
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
    let $t173, $t174, $t175;
    let __uc = new std_use_cache_std_numpunct_cache_wchar_t();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t173 = __uc.op_call__c(__loc), $t173 ? {a: $t173.a, i: $t173.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_27_wchar_t_std_char_traits_wchar_t({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
              if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let __lit_zero = ($t174 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t174 ? {a: $t174.a, i: $t174.i} : null);
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
                  if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
                let __q = ($t175 = std_char_traits_wchar_t.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t175 ? {a: $t175.a, i: $t175.i} : null);
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
                      if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_26_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let $t176, $t177, $t178;
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
              if (std_operator_27_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
          let __lc = ($t176 = __uc.op_call__c(__loc), $t176 ? {a: $t176.a, i: $t176.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_27_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
      std_convert_to_v_float(($t177 = __xtrc.v.c_str__c(), $t177 ? {a: $t177.a, i: $t177.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_27_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t178 = __xtrc.v.c_str__c(), $t178 ? {a: $t178.a, i: $t178.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_27_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
    let $t179, $t180, $t181, $t182, $t183, $t184, $t185, $t186, $t187, $t188, $t189;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_char(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t179 = (__np.a[__np.i]).grouping__c(), $t179)).size__c();
        __grouping = ($t180 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t180 ? {a: $t180.a, i: $t180.i} : null);
        (($t181 = (__np.a[__np.i]).grouping__c(), $t181)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t182 = (__np.a[__np.i]).truename__c(), $t182)).size__c();
        __truename = ($t183 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t183 ? {a: $t183.a, i: $t183.i} : null);
        (($t184 = (__np.a[__np.i]).truename__c(), $t184)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t185 = (__np.a[__np.i]).falsename__c(), $t185)).size__c();
        __falsename = ($t186 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t186 ? {a: $t186.a, i: $t186.i} : null);
        (($t187 = (__np.a[__np.i]).falsename__c(), $t187)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_char(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t188 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t188 ? {a: $t188.a, i: $t188.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t189 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t189 ? {a: $t189.a, i: $t189.i} : null), {a: this, i: "_M_atoms_in"});
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
    let $t190;
    let __i = std_numpunct_char.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t190 = {a: [new std_numpunct_cache_char(0)], i: 0}, $t190 ? {a: $t190.a, i: $t190.i} : null);
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
    let $t191, $t192, $t193, $t194, $t195, $t196, $t197, $t198, $t199, $t200, $t201;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_wchar_t(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t191 = (__np.a[__np.i]).grouping__c(), $t191)).size__c();
        __grouping = ($t192 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t192 ? {a: $t192.a, i: $t192.i} : null);
        (($t193 = (__np.a[__np.i]).grouping__c(), $t193)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t194 = (__np.a[__np.i]).truename__c(), $t194)).size__c();
        __truename = ($t195 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t195 ? {a: $t195.a, i: $t195.i} : null);
        (($t196 = (__np.a[__np.i]).truename__c(), $t196)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t197 = (__np.a[__np.i]).falsename__c(), $t197)).size__c();
        __falsename = ($t198 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t198 ? {a: $t198.a, i: $t198.i} : null);
        (($t199 = (__np.a[__np.i]).falsename__c(), $t199)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_wchar_t(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t200 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t200 ? {a: $t200.a, i: $t200.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t201 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t201 ? {a: $t201.a, i: $t201.i} : null), {a: this, i: "_M_atoms_in"});
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
    let $t202;
    let __i = std_numpunct_wchar_t.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t202 = {a: [new std_numpunct_cache_wchar_t(0)], i: 0}, $t202 ? {a: $t202.a, i: $t202.i} : null);
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
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_is_integer_wchar_t_P {
  __init_std_is_integer_wchar_t_P(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
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
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function wcslen(...$a) { throw new Error("unresolved external: wcslen"); }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function wmemset(...$a) { throw new Error("unresolved external: wmemset"); }
function std_wmemchr(__p, __c, __n) {
  let $t203;
  return ($t203 = std_wmemchr((__p ? {a: __p.a, i: __p.i} : null), __c, Math.trunc((__n) / 4)), $t203 ? {a: $t203.a, i: $t203.i} : null);
}
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
function std_verify_grouping(...$a) { throw new Error("unresolved external: std::__verify_grouping"); }
function main() {
  let $t204, $t205, $t206, $t207, $t208;
  let f = new std_forward_list_int_std_allocator_int({a: [new std_allocator_int()], i: 0});
  f.push_front({a: [1], i: 0});
  f.push_front({a: [2], i: 0});
  f.push_front({a: [3], i: 0});
  for (let $b0 = new std_Fwd_list_iterator_int({a: [f.begin()], i: 0}), $e0 = new std_Fwd_list_iterator_int({a: [f.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    ($t204 = (__ctj_write(__ctj_fmt(x)), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t204);
  }
  (__ctj_write("\n"), std_cout);
  f.pop_front();
  ($t208 = ($t207 = ($t206 = (__ctj_write(__ctj_fmt(($t205 = f.front(), $t205.a[$t205.i]))), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t206), __ctj_write(__ctj_fmt((f.empty__c() ? 1 : 0))), $t207), __ctj_write("\n"), $t208);
}
function std_min_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_declval_int_P() {
  return std_declval_protector_int_P.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_std_allocator_int_P() {
  return std_declval_protector_std_allocator_int_P.__delegate();
}
function std_write_char(__s, __ws, __len) {
  __s._M_put((__ws ? {a: __ws.a, i: __ws.i} : null), __len);
  return new std_ostreambuf_iterator_char_std_char_traits_char({a: [__s], i: 0});
}
function std_write_wchar_t(__s, __ws, __len) {
  __s._M_put((__ws ? {a: __ws.a, i: __ws.i} : null), __len);
  return new std_ostreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [__s], i: 0});
}
function std_operator_27_char_std_char_traits_char(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_27_wchar_t_std_char_traits_wchar_t(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_5_char_char($p0, $p1) {
  return true;
}
function std_operator_5_wchar_t_wchar_t($p0, $p1) {
  return true;
}
function std_convert_to_v_float(...$a) { throw new Error("unresolved external: std::__convert_to_v<float>"); }
function std_convert_to_v_double(...$a) { throw new Error("unresolved external: std::__convert_to_v<double>"); }
function std_operator_26_char_std_char_traits_char(__a, __b) {
  return (!((__a.a[__a.i]).equal__c(__b)));
}
function std_operator_26_wchar_t_std_char_traits_wchar_t(__a, __b) {
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
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
let std_cout = {};
main();
__ctj_flush();
