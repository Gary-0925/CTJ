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
  __init_std_input_iterator_tag(...$a) { }
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
  static assign(__c1, __c2) {
    __c1.a[__c1.i] = __c2.a[__c2.i];
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
    let $t1;
    return ($t1 = wmemcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), Math.trunc((__n) / 4)), $t1 ? {a: $t1.a, i: $t1.i} : null);
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
    let $t2, $t3, $t4, $t5, $t6, $t7;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t4 = ($t2 = this.egptr__c(), $t2), $t5 = ($t3 = this.gptr__c(), $t3), (($t4 ? $t4.i : 0) - ($t5 ? $t5.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t6 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t6.a[$t6.i]);
            std_char_traits_char.copy((__s ? {a: __s.a, i: __s.i} : null), ($t7 = this.gptr__c(), $t7 ? {a: $t7.a, i: $t7.i} : null), __len);
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
    let $t8, $t9, $t10, $t11, $t12, $t13;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t10 = ($t8 = this.epptr__c(), $t8), $t11 = ($t9 = this.pptr__c(), $t9), (($t10 ? $t10.i : 0) - ($t11 ? $t11.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t12 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t12.a[$t12.i]);
            std_char_traits_char.copy(($t13 = this.pptr__c(), $t13 ? {a: $t13.a, i: $t13.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
    let $t14, $t15, $t16, $t17, $t18, $t19;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t16 = ($t14 = this.egptr__c(), $t14), $t17 = ($t15 = this.gptr__c(), $t15), (($t16 ? $t16.i : 0) - ($t17 ? $t17.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t18 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t18.a[$t18.i]);
            std_char_traits_wchar_t.copy((__s ? {a: __s.a, i: __s.i} : null), ($t19 = this.gptr__c(), $t19 ? {a: $t19.a, i: $t19.i} : null), __len);
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
    let $t20, $t21, $t22, $t23, $t24, $t25;
    let __ret = 0;
    while ((__ret < __n)) {
       {
        let __buf_len = {v: ($t22 = ($t20 = this.epptr__c(), $t20), $t23 = ($t21 = this.pptr__c(), $t21), (($t22 ? $t22.i : 0) - ($t23 ? $t23.i : 0)))};
        if (__buf_len.v) {
           {
            let __remaining = {v: (__n - __ret)};
            let __len = ($t24 = std_min_long({a: __buf_len, i: "v"}, {a: __remaining, i: "v"}), $t24.a[$t24.i]);
            std_char_traits_wchar_t.copy(($t25 = this.pptr__c(), $t25 ? {a: $t25.a, i: $t25.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __len);
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
    let $t26;
    (__p.a[__p.i] = ($t26 = std_forward_1_int(__args_0), $t26.a[$t26.i]));
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
    let $t27;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t27 = operatornew__unsigned_long_long((__n * 12)), $t27 ? {a: $t27.a, i: $t27.i} : null);
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
    let $t28;
    return ($t28 = gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int.allocate(this._M_get_Node_allocator(), 1), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_alloc_traits_std_allocator_std_Fwd_list_node_int.deallocate(this._M_get_Node_allocator(), (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_erase_after(__pos) {
    let $t29;
    let __curr = (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
    (__pos.a[__pos.i])._M_next = (((__curr.a[__curr.i])._M_next) ? {a: ((__curr.a[__curr.i])._M_next).a, i: ((__curr.a[__curr.i])._M_next).i} : null);
    let __a = {v: new std_allocator_int(this._M_get_Node_allocator())};
    std_allocator_traits_std_allocator_int.destroy({a: __a, i: "v"}, ($t29 = (__curr.a[__curr.i])._M_valptr(), $t29 ? {a: $t29.a, i: $t29.i} : null));
    (__curr.a[__curr.i]).__dtor();
    this._M_put_node((__curr ? {a: __curr.a, i: __curr.i} : null));
    return (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
  }
  _M_insert_after__rv(__pos, __args_0) {
    let $t30;
    let __to = (__pos._M_node ? {a: __pos._M_node.a, i: __pos._M_node.i} : null);
    let __thing = ($t30 = this._M_create_node__rv(std_forward_1_int(__args_0)), $t30 ? {a: $t30.a, i: $t30.i} : null);
    (__thing.a[__thing.i])._M_next = (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
    (__to.a[__to.i])._M_next = (__thing ? {a: __thing.a, i: __thing.i} : null);
    return (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
  }
  _M_create_node__rv(__args_0) {
    let $t31, $t32;
    let __node = ($t31 = this._M_get_node(), $t31 ? {a: $t31.a, i: $t31.i} : null);
    if (true) {
       {
        let __a = {v: new std_allocator_int(this._M_get_Node_allocator())};
        (__node.a[__node.i] = new std_Fwd_list_node_int(), __node.a[__node.i].ctj_a = __node.a, __node.a[__node.i].ctj_i = __node.i, {a: __node.a, i: __node.i});
        std_allocator_traits_std_allocator_int.construct__rv({a: __a, i: "v"}, ($t32 = (__node.a[__node.i])._M_valptr(), $t32 ? {a: $t32.a, i: $t32.i} : null), std_forward_1_int(__args_0));
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
    let $t33;
    return ($t33 = (__a.a[__a.i]).allocate(__n, {a: [0], i: 0}), $t33 ? {a: $t33.a, i: $t33.i} : null);
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
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function main() {
  let $t34, $t35, $t36, $t37, $t38;
  let f = new std_forward_list_int_std_allocator_int({a: [new std_allocator_int()], i: 0});
  f.push_front({a: [1], i: 0});
  f.push_front({a: [2], i: 0});
  f.push_front({a: [3], i: 0});
  for (let $b0 = new std_Fwd_list_iterator_int({a: [f.begin()], i: 0}), $e0 = new std_Fwd_list_iterator_int({a: [f.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    ($t34 = (__ctj_write(__ctj_fmt(x)), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t34);
  }
  (__ctj_write("\n"), std_cout);
  f.pop_front();
  ($t38 = ($t37 = ($t36 = (__ctj_write(__ctj_fmt(($t35 = f.front(), $t35.a[$t35.i]))), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t36), __ctj_write(__ctj_fmt((f.empty__c() ? 1 : 0))), $t37), __ctj_write("\n"), $t38);
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
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
let std_cout = {};
main();
__ctj_flush();
