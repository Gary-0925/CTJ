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
class tm {
  tm_sec;
  tm_min;
  tm_hour;
  tm_mday;
  tm_mon;
  tm_year;
  tm_wday;
  tm_yday;
  tm_isdst;
  constructor(...$a) {
    this.__init_tm(...$a);
  }
  __init_tm(...$a) {
    this.tm_sec = 0;
    this.tm_min = 0;
    this.tm_hour = 0;
    this.tm_mday = 0;
    this.tm_mon = 0;
    this.tm_year = 0;
    this.tm_wday = 0;
    this.tm_yday = 0;
    this.tm_isdst = 0;
  }
  __dtor() {
  }
}
class class_48 {
  __count;
  __value;
  constructor(...$a) {
    this.__init_class_48(...$a);
  }
  __init_class_48(...$a) {
    this.__count = 0;
    this.__value = 0;
  }
  __dtor() {
  }
}
class std_sfinae_types {
  __init_std_sfinae_types(...$a) { }
  __dtor() {
  }
}
class std_sfinae_types_class_54 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_54(...$a);
  }
  __init_std_sfinae_types_class_54(...$a) {
    this.__arr = new Array(2).fill(0);
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
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_input_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
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
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag) ? [$a[0]] : []));
    this.__init_std_forward_iterator_tag(...$a);
  }
  __init_std_forward_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_input_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag) ? [$a[0]] : []));
    this.__init_std_bidirectional_iterator_tag(...$a);
  }
  __init_std_bidirectional_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_forward_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_random_access_iterator_tag) ? [$a[0]] : []));
    this.__init_std_random_access_iterator_tag(...$a);
  }
  __init_std_random_access_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_random_access_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_bidirectional_iterator_tag.prototype.__dtor.call(this);
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
class std_nothrow_t {
  constructor(...$a) {
    this.__init_std_nothrow_t(...$a);
  }
  __init_std_nothrow_t(...$a) {
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
  static copy(__s1, __s2, __n) {
    let $t0;
    return ($t0 = memcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
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
      memcpy((($a[2]) ? {a: ($a[2]).a, i: ($a[2]).i} : null), (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
      return (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  do_narrow__c(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      return $a[0];
    }
    else if ($a.length >= 4 && $a.length <= 4 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && (typeof $a[2] === "number" || typeof $a[2] === "boolean") && ($a[3] === null || (typeof $a[3] === "object" && ($a[3].a === undefined || typeof $a[3].a[$a[3].i] !== "object")))) {
      memcpy((($a[3]) ? {a: ($a[3]).a, i: ($a[3]).i} : null), (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ((($a[1]) ? (($a[1])).i : 0) - (($a[0]) ? (($a[0])).i : 0)));
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
class std_complex_float {
  __init_std_complex_float(...$a) { }
  __dtor() {
  }
}
class std_complex_double {
  __init_std_complex_double(...$a) { }
  __dtor() {
  }
}
class std_type_info {
  __name;
  constructor(...$a) {
    this.__init_std_type_info(...$a);
  }
  __init_std_type_info(...$a) {
    this.__name = null;
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
    this._M_manager = 0;
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
class std_bernoulli_distribution_param_type {
  _M_p;
  constructor(...$a) {
    this.__init_std_bernoulli_distribution_param_type(...$a);
  }
  __init_std_bernoulli_distribution_param_type(...$a) {
    this._M_p = ($a[0] === undefined ? (0.5) : $a[0]);
  }
  __dtor() {
  }
}
class std_bernoulli_distribution {
  _M_param;
  constructor(...$a) {
    this.__init_std_bernoulli_distribution(...$a);
  }
  __init_std_bernoulli_distribution(...$a) {
    this._M_param = new std_bernoulli_distribution_param_type(0.5);
    this._M_param.ctj_a = this; this._M_param.ctj_i = "_M_param";
  }
  __dtor() {
  }
}
class std_Base_bitset_value0 {
  __init_std_Base_bitset_value0(...$a) { }
  __dtor() {
  }
}
class std_bitset_value0 extends std_Base_bitset_value0 {
  constructor(...$a) {
    super();
    this.__init_std_bitset_value0(...$a);
  }
  __init_std_bitset_value0(...$a) {
  }
  __dtor() {
    std_Base_bitset_value0.prototype.__dtor.call(this);
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
class std_atomic_flag_base {
  _M_i;
  constructor(...$a) {
    this.__init_std_atomic_flag_base(...$a);
  }
  __init_std_atomic_flag_base(...$a) {
    this._M_i = 0;
  }
  __dtor() {
  }
}
class std_atomic_flag extends std_atomic_flag_base {
  constructor(...$a) {
    super();
    this.__init_std_atomic_flag(...$a);
  }
  __init_std_atomic_flag(...$a) {
  }
  __dtor() {
    std_atomic_flag_base.prototype.__dtor.call(this);
  }
}
class std_error_code {
  _M_value;
  _M_cat;
  constructor(...$a) {
    this.__init_std_error_code(...$a);
  }
  __init_std_error_code(...$a) {
    this._M_value = 0;
    this._M_cat = null;
  }
  __dtor() {
  }
}
class std_error_condition {
  _M_value;
  _M_cat;
  constructor(...$a) {
    this.__init_std_error_condition(...$a);
  }
  __init_std_error_condition(...$a) {
    this._M_value = 0;
    this._M_cat = null;
  }
  __dtor() {
  }
}
class std_error_category {
  __init_std_error_category(...$a) { }
  __dtor() {
  }
  name__c() {
    throw new Error("pure virtual called");
  }
  message__c($p0) {
    throw new Error("pure virtual called");
  }
}
class std_defer_lock_t {
  constructor(...$a) {
    this.__init_std_defer_lock_t(...$a);
  }
  __init_std_defer_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_try_to_lock_t {
  constructor(...$a) {
    this.__init_std_try_to_lock_t(...$a);
  }
  __init_std_try_to_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_adopt_lock_t {
  constructor(...$a) {
    this.__init_std_adopt_lock_t(...$a);
  }
  __init_std_adopt_lock_t(...$a) {
  }
  __dtor() {
  }
}
class std_detail_PatternCursor {
  __init_std_detail_PatternCursor(...$a) { }
  __dtor() {
  }
  _M_next() {
    throw new Error("pure virtual called");
  }
  _M_at_end__c() {
    throw new Error("pure virtual called");
  }
}
class std_detail_Results {
  __init_std_detail_Results(...$a) { }
  __dtor() {
  }
  _M_set_pos(__i, __j, __p) {
    throw new Error("pure virtual called");
  }
  _M_set_matched(__i, __is_matched) {
    throw new Error("pure virtual called");
  }
}
class std_unary_function_std_detail_PatternCursor_R_bool {
  __init_std_unary_function_std_detail_PatternCursor_R_bool(...$a) { }
  __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R extends std_unary_function_std_detail_PatternCursor_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a);
  }
  __init_std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R(...$a) {
  }
  __dtor() {
    std_unary_function_std_detail_PatternCursor_R_bool.prototype.__dtor.call(this);
  }
}
class std_function_func_bool_std_detail_PatternCursor_R extends std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R {
  _M_invoker;
  constructor(...$a) {
    super();
    this.__init_std_function_func_bool_std_detail_PatternCursor_R(...$a);
  }
  __init_std_function_func_bool_std_detail_PatternCursor_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker = null;
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_bool_std_detail_PatternCursor_R.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (let $b = std_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_function_func_bool_std_detail_PatternCursor_R.prototype)) std_function_func_bool_std_detail_PatternCursor_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_bool_std_detail_PatternCursor_R)) std_function_func_bool_std_detail_PatternCursor_R[$k] = $b[$k];
  }
}
class std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  __init_std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void(...$a) { }
  __dtor() {
  }
}
class std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void {
  constructor(...$a) {
    super();
    this.__init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  __init_std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
  }
  __dtor() {
    std_binary_function_std_detail_PatternCursor_R_std_detail_Results_R_void.prototype.__dtor.call(this);
  }
}
class std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R extends std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R {
  _M_invoker;
  constructor(...$a) {
    super();
    this.__init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a);
  }
  __init_std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R(...$a) {
    std_Function_base.prototype.__init_std_Function_base.call(this);
    this._M_invoker = null;
  }
  __dtor() {
    std_Maybe_unary_or_binary_function_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype.__dtor.call(this);
    std_Function_base.prototype.__dtor.call(this);
  }
}
for (let $b = std_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
  for (const $k of Object.getOwnPropertyNames($b.prototype)) {
    if ($k !== "constructor" && !($k in std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype)) std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R.prototype[$k] = $b.prototype[$k];
  }
  for (const $k of Object.getOwnPropertyNames($b)) {
    if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R)) std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R[$k] = $b[$k];
  }
}
class std_detail_State {
  _M_opcode;
  _M_next;
  _M_alt;
  _M_subexpr;
  _M_tagger;
  _M_matches;
  constructor(...$a) {
    this.__init_std_detail_State(...$a);
  }
  __init_std_detail_State(...$a) {
    this._M_opcode = 0;
    this._M_next = 0;
    this._M_alt = 0;
    this._M_subexpr = 0;
    this._M_tagger = new std_function_func_void_std_detail_PatternCursor_R_std_detail_Results_R();
    this._M_tagger.ctj_a = this; this._M_tagger.ctj_i = "_M_tagger";
    this._M_matches = new std_function_func_bool_std_detail_PatternCursor_R();
    this._M_matches.ctj_a = this; this._M_matches.ctj_i = "_M_matches";
  }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_detail_State {
  __init_gnu_cxx_new_allocator_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_detail_State extends gnu_cxx_new_allocator_std_detail_State {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_detail_State(...$a);
  }
  __init_std_allocator_std_detail_State(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl extends std_allocator_std_detail_State {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a);
  }
  __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl(...$a) {
    this._M_start = null;
    this._M_finish = null;
    this._M_end_of_storage = null;
  }
  __dtor() {
    std_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  __init_std_Vector_base_std_detail_State_std_allocator_std_detail_State(...$a) {
    this._M_impl = new std_Vector_base_std_detail_State_std_allocator_std_detail_State_Vector_impl();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
}
class std_vector_std_detail_State_std_allocator_std_detail_State extends std_Vector_base_std_detail_State_std_allocator_std_detail_State {
  constructor(...$a) {
    super();
    this.__init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a);
  }
  __init_std_vector_std_detail_State_std_allocator_std_detail_State(...$a) {
  }
  __dtor() {
    std_Vector_base_std_detail_State_std_allocator_std_detail_State.prototype.__dtor.call(this);
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State {
  __init_gnu_cxx_alloc_traits_std_allocator_std_detail_State(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_alloc_traits_std_allocator_std_detail_State_rebind_std_detail_State {
  __init_gnu_cxx_alloc_traits_std_allocator_std_detail_State_rebind_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_allocator_std_detail_State_rebind_std_detail_State {
  __init_std_allocator_std_detail_State_rebind_std_detail_State(...$a) { }
  __dtor() {
  }
}
class std_type_index {
  _M_target;
  constructor(...$a) {
    this.__init_std_type_index(...$a);
  }
  __init_std_type_index(...$a) {
    this._M_target = null;
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
    return new std_fpos_class_48((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_48((-(1)));
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
    return new std_fpos_class_48((-(1)));
  }
  seekpos($p0, $p1 = (std_ios_base.in_ | std_ios_base.out)) {
    return new std_fpos_class_48((-(1)));
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
class std_Base_bitset_value1 {
  _M_w;
  constructor(...$a) {
    this.__init_std_Base_bitset_value1(...$a);
  }
  __init_std_Base_bitset_value1(...$a) {
    this._M_w = $a[0];
  }
  __dtor() {
  }
}
class std_bitset_value11 extends std_Base_bitset_value1 {
  constructor(...$a) {
    super(...[std_Sanitize_val_value11_value1._S_do_sanitize_val($a[0])]);
    this.__init_std_bitset_value11(...$a);
  }
  __init_std_bitset_value11(...$a) {
  }
  __dtor() {
    std_Base_bitset_value1.prototype.__dtor.call(this);
  }
}
class gnu_cxx_char_traits_int {
  __init_gnu_cxx_char_traits_int(...$a) { }
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
class gnu_cxx_new_allocator_int {
  constructor(...$a) {
    this.__init_gnu_cxx_new_allocator_int(...$a);
  }
  __init_gnu_cxx_new_allocator_int(...$a) {
  }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t26;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t26 = operatornew__unsigned_long_long((__n * 4)), $t26 ? {a: $t26.a, i: $t26.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t27;
    (__p.a[__p.i] = ($t27 = std_forward_1_int(__args_0), $t27.a[$t27.i]));
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
class std_allocator_int_rebind_int {
  __init_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class std_fpos_class_48 {
  _M_off;
  _M_state;
  constructor(...$a) {
    this.__init_std_fpos_class_48(...$a);
  }
  __init_std_fpos_class_48(...$a) {
    this._M_off = $a[0];
    this._M_state = new class_48();
    this._M_state.ctj_a = this; this._M_state.ctj_i = "_M_state";
  }
  __dtor() {
  }
}
class std_Sanitize_val_value11_value1 {
  __init_std_Sanitize_val_value11_value1(...$a) { }
  __dtor() {
  }
  static _S_do_sanitize_val(__val) {
    return (__val & (~(((~((0 >>> 0))) << 11))));
  }
}
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  _M_start;
  _M_finish;
  _M_end_of_storage;
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int) ? [$a[0]] : []));
    this.__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_allocator_int)) {
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
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl();
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
    let $t28;
    return ($t28 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  _M_deallocate(__p, __n) {
    if (__p) {
      this._M_impl.deallocate((__p ? {a: __p.a, i: __p.i} : null), __n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int)) ? [($a[1] === undefined ? ({a: [new std_allocator_int()], i: 0}) : $a[1])] : []));
    this.__init_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_vector_int_std_allocator_int(...$a) {
    let $t29, $t30;
    if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize(($t29 = ({a: $a[0], i: 0}), $t29 ? {a: $t29.a, i: $t29.i} : null), ($t30 = ({a: $a[0], i: ($a[0]).length}), $t30 ? {a: $t30.a, i: $t30.i} : null), new std_random_access_iterator_tag());
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_Vector_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_start"});
  }
  end() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: this._M_impl, i: "_M_finish"});
  }
  size__c() {
    return (((this._M_impl._M_finish ? this._M_impl._M_finish.i : 0) - (this._M_impl._M_start ? this._M_impl._M_start.i : 0)) >>> 0);
  }
  max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int.max_size(this._M_get_Tp_allocator());
  }
  push_back(__x) {
    if ((!(this._M_impl._M_finish === this._M_impl._M_end_of_storage || (this._M_impl._M_finish && this._M_impl._M_end_of_storage && this._M_impl._M_finish.a === this._M_impl._M_end_of_storage.a && this._M_impl._M_finish.i === this._M_impl._M_end_of_storage.i)))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), __x);
        ++this._M_impl._M_finish.i;
      }
    }
    else {
      this._M_emplace_back_aux__rv(__x);
    }
  }
  _M_check_len__c(__n, __s) {
    let $t31;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t31 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t31.a[$t31.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t32, $t33, $t34, $t35;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = this._M_allocate(__len);
    let __new_finish = __new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t32 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t32 ? {a: $t32.a, i: $t32.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t33 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t33 ? {a: $t33.a, i: $t33.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t34 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t34 ? {a: $t34.a, i: $t34.i} : null));
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
    this._M_impl._M_end_of_storage = ($t35 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t35 ? {a: $t35.a, i: $t35.i} : null);
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
  static destroy(__a, __p) {
    (__a.a[__a.i]).destroy((__p ? {a: __p.a, i: __p.i} : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  __init_gnu_cxx_alloc_traits_std_allocator_int_rebind_int(...$a) { }
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
    let $t36, $t37, $t38;
    return ($t38 = ($t37 = ($t36 = this.begin__c(), $t36), ({a: ($t37 ? $t37.a : null), i: ($t37 ? $t37.i : 0) + (this.size__c())})), $t38 ? {a: $t38.a, i: $t38.i} : null);
  }
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t39, $t40, $t41;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = (((($a[0]).a[($a[0]).i])._M_current) ? {a: ((($a[0]).a[($a[0]).i])._M_current).a, i: ((($a[0]).a[($a[0]).i])._M_current).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t39 = (($a[0]).a[($a[0]).i]).base__c(), $t40 = ($t39 ? $t39.a[$t39.i] : null), $t40 && $t40.a !== undefined ? {a: $t40.a, i: $t40.i} : $t40);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_current = ($t41 = 0, $t41 ? {a: $t41.a, i: $t41.i} : null);
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
  op_dec() {
    --this._M_current.i;
    return {a: [this], i: 0};
  }
  op_add_assign(__n) {
    this._M_current.i += (__n.a[__n.i]);
    return {a: [this], i: 0};
  }
  op_add__c(__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) + (__n.a[__n.i])})], i: 0});
  }
  op_sub__c(__n) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [({a: (this._M_current ? this._M_current.a : null), i: (this._M_current ? this._M_current.i : 0) - (__n.a[__n.i])})], i: 0});
  }
  base__c() {
    return {a: this, i: "_M_current"};
  }
  op_assign(o) {
    this._M_current = (((o.a[o.i])._M_current) ? {a: ((o.a[o.i])._M_current).a, i: ((o.a[o.i])._M_current).i} : null);
    return {a: [this], i: 0};
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
class std_iterator_traits_int_P {
  __init_std_iterator_traits_int_P(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_cv_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_volatile_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_remove_const_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Wrap_type_std_random_access_iterator_tag {
  __init_std_has_iterator_category_helper_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_Wrap_type_std_random_access_iterator_tag(...$a) { }
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
class std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_has_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  __init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1.prototype.__dtor.call(this);
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_complex_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    this._M_real = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
    this._M_real.ctj_a = this; this._M_real.ctj_i = "_M_real";
    this._M_imag = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int();
    this._M_imag.ctj_a = this; this._M_imag.ctj_i = "_M_imag";
  }
  __dtor() {
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
    let $t42;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t42 = (($a[0]).a[($a[0]).i]).base__c(), $t42 ? {a: $t42.a, i: $t42.i} : null);
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
class std_tuple {
  __init_std_tuple(...$a) { }
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
class std_is_move_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_is_move_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0});
  }
}
class std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0.prototype.__dtor.call(this);
  }
}
class std_is_move_iterator_int_P {
  __init_std_is_move_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_int_P_value0 {
  __init_std_Iter_base_int_P_value0(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    return (__it ? {a: __it.a, i: __it.i} : null);
  }
}
class std_Miter_base_int_P extends std_Iter_base_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Miter_base_int_P(...$a);
  }
  __init_std_Miter_base_int_P(...$a) {
  }
  __dtor() {
    std_Iter_base_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  __init_std_is_normal_iterator_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  __init_std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1(...$a) { }
  __dtor() {
  }
  static _S_base(__it) {
    let $t43, $t44;
    return ($t43 = __it.base__c(), $t44 = ($t43 ? $t43.a[$t43.i] : null), $t44 && $t44.a !== undefined ? {a: $t44.a, i: $t44.i} : $t44);
  }
}
class std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int extends std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_std_Niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1.prototype.__dtor.call(this);
  }
}
class std_Niter_base_int_P extends std_Iter_base_int_P_value0 {
  constructor(...$a) {
    super();
    this.__init_std_Niter_base_int_P(...$a);
  }
  __init_std_Niter_base_int_P(...$a) {
  }
  __dtor() {
    std_Iter_base_int_P_value0.prototype.__dtor.call(this);
  }
}
class std_is_normal_iterator_int_P {
  __init_std_is_normal_iterator_int_P(...$a) { }
  __dtor() {
  }
}
class std_is_pointer_int_P {
  __init_std_is_pointer_int_P(...$a) { }
  __dtor() {
  }
}
class std_are_same_int_int {
  __init_std_are_same_int_int(...$a) { }
  __dtor() {
  }
}
class std_copy_move_backward_value1_value1_std_random_access_iterator_tag {
  __init_std_copy_move_backward_value1_value1_std_random_access_iterator_tag(...$a) { }
  __dtor() {
  }
  static __copy_move_b(__first, __last, __result) {
    let $t45, $t46;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      memmove(($t45 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t45 ? {a: $t45.a, i: $t45.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc(((4 * _Num)) / 4));
    }
    return ($t46 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t46 ? {a: $t46.a, i: $t46.i} : null);
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
function memcpy(dst, src, n) {
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  for (let i = 0; (i < n); i++) {
    d.a[d.i + (i)] = s.a[s.i + (i)];
  }
  return dst;
}
function memmove(dst, src, n) {
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  let s = (src ? {a: src.a, i: src.i} : null);
  if (((d ? d.i : 0) < (s ? s.i : 0))) {
     {
      for (let i = 0; (i < n); i++) {
        d.a[d.i + (i)] = s.a[s.i + (i)];
      }
    }
  }
  else {
     {
      while ((n > 0)) {
         {
          n--;
          d.a[d.i + (n)] = s.a[s.i + (n)];
        }
      }
    }
  }
  return dst;
}
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_lg__long(__n) {
  return (((8 * 8) - 1) - Math.clz32(__n));
}
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_swap_int(__a, __b) {
  let $t47, $t48, $t49;
  let __tmp = {v: ($t47 = std_move_int(__a), $t47.a[$t47.i])};
  __a.a[__a.i] = ($t48 = std_move_int(__b), $t48.a[$t48.i]);
  __b.a[__b.i] = ($t49 = std_move_int({a: __tmp, i: "v"}), $t49.a[$t49.i]);
}
function std_operator_4_int_P_int_P(__x, __y) {
  return (!(std_operator_4_int_P_int_P_1030(__x, __y)));
}
function std_operator_4_int_P_int_P_1030(__x, __y) {
  let $t50, $t51, $t52, $t53;
  return ($t52 = ($t50 = (__x.a[__x.i]).base__c(), $t50), $t53 = ($t51 = (__y.a[__y.i]).base__c(), $t51), ($t52 === $t53 || ($t52 && $t53 && $t52.a === $t53.a && $t52.i === $t53.i)));
}
function main() {
  let $t54, $t55, $t56, $t57, $t58, $t59, $t60, $t61, $t62, $t63, $t64, $t65, $t66, $t67, $t68, $t69, $t70, $t71, $t72, $t73, $t74, $t75, $t76;
  let v = new std_vector_int_std_allocator_int();
  v.push_back({a: [3], i: 0});
  v.push_back({a: [1], i: 0});
  v.push_back({a: [4], i: 0});
  v.push_back({a: [1], i: 0});
  v.push_back({a: [5], i: 0});
  std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end());
  let s = 0;
  for (let $b0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e0 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    s = ((s * 10) + x);
  }
  ($t54 = (__ctj_write(__ctj_fmt(s)), std_cout), __ctj_write("\n"), $t54);
  ($t61 = ($t60 = ($t59 = (__ctj_write(__ctj_fmt(($t57 = (($t58 = std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end()), $t58)).op_mul__c(), $t57.a[$t57.i]))), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t59), __ctj_write(__ctj_fmt(($t55 = (($t56 = std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end()), $t56)).op_mul__c(), $t55.a[$t55.i]))), $t60), __ctj_write("\n"), $t61);
  ($t62 = (__ctj_write(__ctj_fmt(std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), 0))), std_cout), __ctj_write("\n"), $t62);
  ($t67 = ($t66 = ($t65 = (__ctj_write(__ctj_fmt(std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [1], i: 0}))), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t65), __ctj_write(__ctj_fmt(($t63 = (($t64 = std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [4], i: 0}), $t64)).op_mul__c(), $t63.a[$t63.i]))), $t66), __ctj_write("\n"), $t67);
  ($t68 = (__ctj_write(__ctj_fmt((std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [3], i: 0}) ? 1 : 0))), std_cout), __ctj_write("\n"), $t68);
  std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end());
  let t = 0;
  for (let $b1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let y = $b1.op_mul__c();
    t = ((t * 10) + y.a[y.i]);
  }
  ($t69 = (__ctj_write(__ctj_fmt(t)), std_cout), __ctj_write("\n"), $t69);
  let w = new std_vector_int_std_allocator_int([9, 8, 7], {a: [new std_allocator_int()], i: 0});
  let u = 0;
  for (let $b2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.begin()], i: 0}), $e2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let x = ($b2.op_mul__c()).a[($b2.op_mul__c()).i];
    u += x;
  }
  ($t72 = ($t71 = ($t70 = (__ctj_write(__ctj_fmt(u)), std_cout), __ctj_write(__ctj_fmt([32, 0])), $t70), __ctj_write(__ctj_fmt(w.size__c())), $t71), __ctj_write("\n"), $t72);
  let a = [7, 5, 9];
  std_sort_int_P({a: a, i: 0}, ($t73 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (3)}), $t73 ? {a: $t73.a, i: $t73.i} : null));
  ($t76 = ($t75 = ($t74 = (__ctj_write(__ctj_fmt(a[0])), std_cout), __ctj_write(__ctj_fmt(a[1])), $t74), __ctj_write(__ctj_fmt(a[2])), $t75), __ctj_write("\n"), $t76);
  return 0;
}
function std_min_long(__a, __b) {
  if ((__b.a[__b.i] < __a.a[__a.i])) {
    return __b;
  }
  return __a;
}
function std_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), (std_lg__long(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0})) * 2));
      std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
}
function std_sort_int_P(__first, __last) {
  if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
     {
      std_introsort_loop_int_P_long((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (std_lg__long(((__last ? __last.i : 0) - (__first ? __first.i : 0))) * 2));
      std_final_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__lhs, __rhs) {
  let $t77, $t78, $t79, $t80, $t81, $t82;
  return ($t81 = (($t79 = (__lhs.a[__lhs.i]).base__c(), $t79) ? (($t79 = (__lhs.a[__lhs.i]).base__c(), $t79)).a[(($t79 = (__lhs.a[__lhs.i]).base__c(), $t79)).i] : null), $t82 = (($t80 = (__rhs.a[__rhs.i]).base__c(), $t80) ? (($t80 = (__rhs.a[__rhs.i]).base__c(), $t80)).a[(($t80 = (__rhs.a[__rhs.i]).base__c(), $t80)).i] : null), (!($t81 === $t82 || ($t81 && $t82 && $t81.a === $t82.a && $t81.i === $t82.i))));
}
function std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  }
  let __result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__first.op_inc(), {a: [__last], i: 0})) {
    if (((__result.op_mul__c()).a[(__result.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      __result.op_assign({a: [__first], i: 0});
    }
  }
  return __result;
}
function std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  }
  let __result = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(__first.op_inc(), {a: [__last], i: 0})) {
    if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] < (__result.op_mul__c()).a[(__result.op_mul__c()).i])) {
      __result.op_assign({a: [__first], i: 0});
    }
  }
  return __result;
}
function std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __init) {
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); __first.op_inc()) {
    __init = (__init + (__first.op_mul__c()).a[(__first.op_mul__c()).i]);
  }
  return __init;
}
function std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __value) {
  let __n = 0;
  for (; gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}, {a: [__last], i: 0}); __first.op_inc()) {
    if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] === __value.a[__value.i])) {
      ++__n;
    }
  }
  return __n;
}
function std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __val) {
  let __len = std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  while ((__len > 0)) {
     {
      let __half = (__len >> 1);
      let __middle = {v: new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})};
      std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long({a: __middle, i: "v"}, __half);
      if (((__middle.v.op_mul__c()).a[(__middle.v.op_mul__c()).i] < __val.a[__val.i])) {
         {
          __first.op_assign({a: __middle, i: "v"});
          __first.op_inc();
          __len = ((__len - __half) - 1);
        }
      }
      else {
        __len = __half;
      }
    }
  }
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
}
function std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __val) {
  let __i = std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __val);
  return (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}) && (!((__val.a[__val.i] < (__i.op_mul__c()).a[(__i.op_mul__c()).i]))));
}
function std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  __first = {v: __first};
  std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}));
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883(__lhs, __rhs) {
  let $t83, $t84, $t85, $t86, $t87, $t88;
  return ($t87 = (($t85 = (__lhs.a[__lhs.i]).base__c(), $t85) ? (($t85 = (__lhs.a[__lhs.i]).base__c(), $t85)).a[(($t85 = (__lhs.a[__lhs.i]).base__c(), $t85)).i] : null), $t88 = (($t86 = (__rhs.a[__rhs.i]).base__c(), $t86) ? (($t86 = (__rhs.a[__rhs.i]).base__c(), $t86)).a[(($t86 = (__rhs.a[__rhs.i]).base__c(), $t86)).i] : null), (($t87 ? $t87.i : 0) - ($t88 ? $t88.i : 0)));
}
function std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__first, __last, __depth_limit) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) > 16)) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
          return;
        }
      }
      --__depth_limit;
      let __cut = std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      std_introsort_loop_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__cut], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __depth_limit);
      __last.op_assign({a: [__cut], i: 0});
    }
  }
}
function std_introsort_loop_int_P_long(__first, __last, __depth_limit) {
  let $t89;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 16)) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          return;
        }
      }
      --__depth_limit;
      let __cut = ($t89 = std_unguarded_partition_pivot_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t89 ? {a: $t89.a, i: $t89.i} : null);
      std_introsort_loop_int_P_long((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit);
      __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
    }
  }
}
function std_final_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) > 16)) {
     {
      std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __first.op_add__c({a: [16], i: 0}));
      std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first.op_add__c({a: [16], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
  else {
    std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  }
}
function std_final_insertion_sort_int_P(__first, __last) {
  let $t90, $t91;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 16)) {
     {
      std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), ($t90 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (16)}), $t90 ? {a: $t90.a, i: $t90.i} : null));
      std_unguarded_insertion_sort_int_P(($t91 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (16)}), $t91 ? {a: $t91.a, i: $t91.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
  else {
    std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(__lhs, __rhs) {
  let $t92, $t93, $t94, $t95, $t96, $t97;
  return ($t96 = (($t94 = (__lhs.a[__lhs.i]).base__c(), $t94) ? (($t94 = (__lhs.a[__lhs.i]).base__c(), $t94)).a[(($t94 = (__lhs.a[__lhs.i]).base__c(), $t94)).i] : null), $t97 = (($t95 = (__rhs.a[__rhs.i]).base__c(), $t95) ? (($t95 = (__rhs.a[__rhs.i]).base__c(), $t95)).a[(($t95 = (__rhs.a[__rhs.i]).base__c(), $t95)).i] : null), ($t96 === $t97 || ($t96 && $t97 && $t96.a === $t97.a && $t96.i === $t97.i)));
}
function std_distance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  __first = {v: __first};
  return std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: __first, i: "v"}));
}
function std_advance_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __n) {
  let __d = __n;
  std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __d, std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__i));
}
function std_iterator_category_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int($p0) {
  return new std_random_access_iterator_tag();
}
function std_reverse_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, $p2) {
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  __last.op_dec();
  while (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829({a: [__first], i: 0}, {a: [__last], i: 0})) {
     {
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      __first.op_inc();
      __last.op_dec();
    }
  }
}
function std_forward_1_int(__t) {
  return __t;
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t98;
  return ($t98 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t98 ? {a: $t98.a, i: $t98.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t99;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t99 = std_addressof_int(__first), $t99 ? {a: $t99.a, i: $t99.i} : null));
  }
}
function std_partial_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __middle, __last) {
  std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
  std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}));
}
function std_partial_sort_int_P(__first, __middle, __last) {
  std_heap_select_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  std_sort_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
}
function std_unguarded_partition_pivot_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let __mid = __first.op_add__c({a: [(Math.trunc(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) / 2))], i: 0});
  std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__mid], i: 0}), __last.op_sub__c({a: [1], i: 0}));
  return std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first.op_add__c({a: [1], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), __first.op_mul__c());
}
function std_unguarded_partition_pivot_int_P(__first, __last) {
  let $t100, $t101, $t102, $t103;
  let __mid = ($t100 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((Math.trunc(((__last ? __last.i : 0) - (__first ? __first.i : 0)) / 2)))}), $t100 ? {a: $t100.a, i: $t100.i} : null);
  std_move_median_first_int_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t101 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t101 ? {a: $t101.a, i: $t101.i} : null));
  return ($t103 = std_unguarded_partition_int_P_int(($t102 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t102 ? {a: $t102.a, i: $t102.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t103 ? {a: $t103.a, i: $t103.i} : null);
}
function std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t104, $t105, $t106;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (((__i.op_mul__c()).a[(__i.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t104 = std_move_int(__i.op_mul__c()), $t104.a[$t104.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t105 = __first.op_mul__c(), $t105.a[$t105.i] = ($t106 = std_move_int({a: __val, i: "v"}), $t106.a[$t106.i]));
        }
      }
      else {
        std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
      }
    }
  }
}
function std_insertion_sort_int_P(__first, __last) {
  let $t107, $t108, $t109, $t110;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t107 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t107 ? {a: $t107.a, i: $t107.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if ((__i.a[__i.i] < __first.a[__first.i])) {
         {
          let __val = {v: ($t108 = std_move_int(__i), $t108.a[$t108.i])};
          std_move_backward_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t109 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t109 ? {a: $t109.a, i: $t109.i} : null));
          __first.a[__first.i] = ($t110 = std_move_int({a: __val, i: "v"}), $t110.a[$t110.i]);
        }
      }
      else {
        std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
      }
    }
  }
}
function std_unguarded_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
  }
}
function std_unguarded_insertion_sort_int_P(__first, __last) {
  for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
    std_unguarded_linear_insert_int_P((__i ? {a: __i.a, i: __i.i} : null));
  }
}
function std_distance_1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, $p2) {
  return gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0});
}
function std_advance_2_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long(__i, __n, $p2) {
  (__i.a[__i.i]).op_add_assign({a: [__n], i: 0});
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829(__lhs, __rhs) {
  let $t111, $t112, $t113, $t114, $t115, $t116;
  return ($t115 = (($t113 = (__lhs.a[__lhs.i]).base__c(), $t113) ? (($t113 = (__lhs.a[__lhs.i]).base__c(), $t113)).a[(($t113 = (__lhs.a[__lhs.i]).base__c(), $t113)).i] : null), $t116 = (($t114 = (__rhs.a[__rhs.i]).base__c(), $t114) ? (($t114 = (__rhs.a[__rhs.i]).base__c(), $t114)).a[(($t114 = (__rhs.a[__rhs.i]).base__c(), $t114)).i] : null), (($t115 ? $t115.i : 0) < ($t116 ? $t116.i : 0)));
}
function std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b) {
  std_swap_int(__a.op_mul__c(), __b.op_mul__c());
}
function std_iter_swap_int_P_int_P(__a, __b) {
  std_swap_int(__a, __b);
}
function std_max_unsigned_long_long(__a, __b) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
    return __b;
  }
  return __a;
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR.__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R.__delegate();
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(__i) {
  return new std_move_iterator_int_P((__i ? {a: __i.a, i: __i.i} : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(__first, __last, __result, __alloc) {
  let $t117;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_4_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t117 = std_addressof_int(__cur), $t117 ? {a: $t117.a, i: $t117.i} : null), __first.op_mul__c());
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
function std_heap_select_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __middle, __last) {
  std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}));
  for (let __i = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
    if (((__i.op_mul__c()).a[(__i.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__middle], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
    }
  }
}
function std_heap_select_int_P(__first, __middle, __last) {
  std_make_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
  for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
    if ((__i.a[__i.i] < __first.a[__first.i])) {
      std_pop_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null));
    }
  }
}
function std_sort_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  while ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
     {
      __last.op_dec();
      std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
    }
  }
}
function std_sort_heap_int_P(__first, __last) {
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
     {
      --__last.i;
      std_pop_heap_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
}
function std_move_median_first_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__a, __b, __c) {
  if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__b.op_mul__c()).a[(__b.op_mul__c()).i])) {
     {
      if (((__b.op_mul__c()).a[(__b.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
      else {
        if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
          std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
        }
      }
    }
  }
  else {
    if (((__a.op_mul__c()).a[(__a.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
      return;
    }
    else {
      if (((__b.op_mul__c()).a[(__b.op_mul__c()).i] < (__c.op_mul__c()).a[(__c.op_mul__c()).i])) {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__c], i: 0}));
      }
      else {
        std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__a], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__b], i: 0}));
      }
    }
  }
}
function std_move_median_first_int_P(__a, __b, __c) {
  if ((__a.a[__a.i] < __b.a[__b.i])) {
     {
      if ((__b.a[__b.i] < __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
      else {
        if ((__a.a[__a.i] < __c.a[__c.i])) {
          std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
        }
      }
    }
  }
  else {
    if ((__a.a[__a.i] < __c.a[__c.i])) {
      return;
    }
    else {
      if ((__b.a[__b.i] < __c.a[__c.i])) {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
      }
      else {
        std_iter_swap_int_P_int_P((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
      }
    }
  }
}
function std_unguarded_partition_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(__first, __last, __pivot) {
  while (true) {
     {
      while (((__first.op_mul__c()).a[(__first.op_mul__c()).i] < __pivot.a[__pivot.i])) {
        __first.op_inc();
      }
      __last.op_dec();
      while ((__pivot.a[__pivot.i] < (__last.op_mul__c()).a[(__last.op_mul__c()).i])) {
        __last.op_dec();
      }
      if ((!(gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_829({a: [__first], i: 0}, {a: [__last], i: 0})))) {
        return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0});
      }
      std_iter_swap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0}));
      __first.op_inc();
    }
  }
}
function std_unguarded_partition_int_P_int(__first, __last, __pivot) {
  while (true) {
     {
      while ((__first.a[__first.i] < __pivot.a[__pivot.i])) {
        ++__first.i;
      }
      --__last.i;
      while ((__pivot.a[__pivot.i] < __last.a[__last.i])) {
        --__last.i;
      }
      if ((!(((__first ? __first.i : 0) < (__last ? __last.i : 0))))) {
        return (__first ? {a: __first.a, i: __first.i} : null);
      }
      std_iter_swap_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
      ++__first.i;
    }
  }
}
function std_move_int(__t) {
  return __t;
}
function std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  return std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0}));
}
function std_move_backward_int_P_int_P(__first, __last, __result) {
  let $t118, $t119, $t120;
  return ($t120 = std_copy_move_backward_a2_value1_int_P_int_P(($t118 = std_miter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t118 ? {a: $t118.a, i: $t118.i} : null), ($t119 = std_miter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t119 ? {a: $t119.a, i: $t119.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t120 ? {a: $t120.a, i: $t120.i} : null);
}
function std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__last) {
  let $t121, $t122, $t123, $t124, $t125;
  let __val = {v: ($t121 = std_move_int(__last.op_mul__c()), $t121.a[$t121.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while ((__val.v < (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t122 = __last.op_mul__c(), $t122.a[$t122.i] = ($t123 = std_move_int(__next.op_mul__c()), $t123.a[$t123.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t124 = __last.op_mul__c(), $t124.a[$t124.i] = ($t125 = std_move_int({a: __val, i: "v"}), $t125.a[$t125.i]));
}
function std_unguarded_linear_insert_int_P(__last) {
  let $t126, $t127, $t128;
  let __val = {v: ($t126 = std_move_int(__last), $t126.a[$t126.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while ((__val.v < __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t127 = std_move_int(__next), $t127.a[$t127.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t128 = std_move_int({a: __val, i: "v"}), $t128.a[$t128.i]);
}
function std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t129, $t130, $t131;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = (Math.trunc((__len - 2) / 2));
  while (true) {
     {
      let __value = {v: ($t129 = std_move_int((($t130 = __first.op_add__c({a: [__parent], i: 0}), $t130)).op_mul__c()), $t129.a[$t129.i])};
      std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t131 = std_move_int({a: __value, i: "v"}), $t131.a[$t131.i]));
      if ((__parent === 0)) {
        return;
      }
      __parent--;
    }
  }
}
function std_make_heap_int_P(__first, __last) {
  let $t132, $t133;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = (Math.trunc((__len - 2) / 2));
  while (true) {
     {
      let __value = {v: ($t132 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t132.a[$t132.i])};
      std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t133 = std_move_int({a: __value, i: "v"}), $t133.a[$t133.i]));
      if ((__parent === 0)) {
        return;
      }
      __parent--;
    }
  }
}
function std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t134, $t135, $t136, $t137;
  let __value = {v: ($t134 = std_move_int(__result.op_mul__c()), $t134.a[$t134.i])};
  ($t135 = __result.op_mul__c(), $t135.a[$t135.i] = ($t136 = std_move_int(__first.op_mul__c()), $t136.a[$t136.i]));
  std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}), ($t137 = std_move_int({a: __value, i: "v"}), $t137.a[$t137.i]));
}
function std_pop_heap_int_P(__first, __last, __result) {
  let $t138, $t139, $t140;
  let __value = {v: ($t138 = std_move_int(__result), $t138.a[$t138.i])};
  __result.a[__result.i] = ($t139 = std_move_int(__first), $t139.a[$t139.i]);
  std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t140 = std_move_int({a: __value, i: "v"}), $t140.a[$t140.i]));
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0}));
}
function std_miter_base_int_P(__it) {
  let $t141;
  return ($t141 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t141 ? {a: $t141.a, i: $t141.i} : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t142, $t143, $t144;
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [std_copy_move_backward_a_value1_int_P_int_P(($t142 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), $t142 ? {a: $t142.a, i: $t142.i} : null), ($t143 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), $t143 ? {a: $t143.a, i: $t143.i} : null), ($t144 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0})), $t144 ? {a: $t144.a, i: $t144.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_int_P_int_P(__first, __last, __result) {
  let $t145, $t146, $t147, $t148;
  return ($t148 = std_copy_move_backward_a_value1_int_P_int_P(($t145 = std_niter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t145 ? {a: $t145.a, i: $t145.i} : null), ($t146 = std_niter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t146 ? {a: $t146.a, i: $t146.i} : null), ($t147 = std_niter_base_int_P((__result ? {a: __result.a, i: __result.i} : null)), $t147 ? {a: $t147.a, i: $t147.i} : null)), $t148 ? {a: $t148.a, i: $t148.i} : null);
}
function std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __len, __value) {
  let $t149, $t150, $t151, $t152, $t153, $t154, $t155, $t156, $t157, $t158, $t159, $t160, $t161;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < (Math.trunc((__len - 1) / 2)))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      if ((($t149 = (($t150 = __first.op_add__c({a: [__secondChild], i: 0}), $t150)).op_mul__c(), $t149.a[$t149.i]) < ($t151 = (($t152 = __first.op_add__c({a: [(__secondChild - 1)], i: 0}), $t152)).op_mul__c(), $t151.a[$t151.i]))) {
        __secondChild--;
      }
      ($t153 = (($t156 = __first.op_add__c({a: [__holeIndex], i: 0}), $t156)).op_mul__c(), $t153.a[$t153.i] = ($t154 = std_move_int((($t155 = __first.op_add__c({a: [__secondChild], i: 0}), $t155)).op_mul__c()), $t154.a[$t154.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((__len & 1) === 0) && (__secondChild === (Math.trunc((__len - 2) / 2))))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      ($t157 = (($t160 = __first.op_add__c({a: [__holeIndex], i: 0}), $t160)).op_mul__c(), $t157.a[$t157.i] = ($t158 = std_move_int((($t159 = __first.op_add__c({a: [(__secondChild - 1)], i: 0}), $t159)).op_mul__c()), $t158.a[$t158.i]));
      __holeIndex = (__secondChild - 1);
    }
  }
  std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t161 = std_move_int({a: __value, i: "v"}), $t161.a[$t161.i]));
}
function std_adjust_heap_int_P_long_int(__first, __holeIndex, __len, __value) {
  let $t162, $t163, $t164, $t165, $t166, $t167, $t168;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < (Math.trunc((__len - 1) / 2)))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      if ((($t162 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t162.a[$t162.i]) < ($t163 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((__secondChild - 1))}), $t163.a[$t163.i]))) {
        __secondChild--;
      }
      (($t164 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t164)).a[(($t164 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t164)).i] = ($t165 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t165.a[$t165.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((__len & 1) === 0) && (__secondChild === (Math.trunc((__len - 2) / 2))))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      (($t166 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t166)).a[(($t166 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t166)).i] = ($t167 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((__secondChild - 1))})), $t167.a[$t167.i]);
      __holeIndex = (__secondChild - 1);
    }
  }
  std_push_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t168 = std_move_int({a: __value, i: "v"}), $t168.a[$t168.i]));
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  let $t169;
  return ($t169 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0})), $t169 ? {a: $t169.a, i: $t169.i} : null);
}
function std_niter_base_int_P(__it) {
  let $t170;
  return ($t170 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t170 ? {a: $t170.a, i: $t170.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t171;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t171 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t171 ? {a: $t171.a, i: $t171.i} : null);
}
function std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t172, $t173, $t174, $t175, $t176, $t177, $t178, $t179, $t180;
  __value = {v: __value};
  let __parent = (Math.trunc((__holeIndex - 1) / 2));
  while (((__holeIndex > __topIndex) && (($t172 = (($t173 = __first.op_add__c({a: [__parent], i: 0}), $t173)).op_mul__c(), $t172.a[$t172.i]) < __value.v))) {
     {
      ($t174 = (($t177 = __first.op_add__c({a: [__holeIndex], i: 0}), $t177)).op_mul__c(), $t174.a[$t174.i] = ($t175 = std_move_int((($t176 = __first.op_add__c({a: [__parent], i: 0}), $t176)).op_mul__c()), $t175.a[$t175.i]));
      __holeIndex = __parent;
      __parent = (Math.trunc((__holeIndex - 1) / 2));
    }
  }
  ($t178 = (($t180 = __first.op_add__c({a: [__holeIndex], i: 0}), $t180)).op_mul__c(), $t178.a[$t178.i] = ($t179 = std_move_int({a: __value, i: "v"}), $t179.a[$t179.i]));
}
function std_push_heap_int_P_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t181, $t182, $t183, $t184, $t185;
  __value = {v: __value};
  let __parent = (Math.trunc((__holeIndex - 1) / 2));
  while (((__holeIndex > __topIndex) && (($t181 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t181.a[$t181.i]) < __value.v))) {
     {
      (($t182 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t182)).a[(($t182 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t182)).i] = ($t183 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t183.a[$t183.i]);
      __holeIndex = __parent;
      __parent = (Math.trunc((__holeIndex - 1) / 2));
    }
  }
  (($t184 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t184)).a[(($t184 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t184)).i] = ($t185 = std_move_int({a: __value, i: "v"}), $t185.a[$t185.i]);
}
let std_piecewise_construct = new std_piecewise_construct_t();
let std_allocator_arg = new std_allocator_arg_t();
let std_ignore = [];
let gnu_cxx_default_lock_policy = 0;
let std_cout = {};
let std_defer_lock = [];
let std_try_to_lock = [];
let std_adopt_lock = [];
let std_regex_constants_icase = (1 << 0);
let std_regex_constants_nosubs = (1 << 1);
let std_regex_constants_optimize = (1 << 2);
let std_regex_constants_collate = (1 << 3);
let std_regex_constants_ECMAScript = (1 << 4);
let std_regex_constants_basic = (1 << 5);
let std_regex_constants_extended = (1 << 6);
let std_regex_constants_awk = (1 << 7);
let std_regex_constants_grep = (1 << 8);
let std_regex_constants_egrep = (1 << 9);
let std_regex_constants_match_default = 0;
let std_regex_constants_match_not_bol = (1 << 0);
let std_regex_constants_match_not_eol = (1 << 1);
let std_regex_constants_match_not_bow = (1 << 2);
let std_regex_constants_match_not_eow = (1 << 3);
let std_regex_constants_match_any = (1 << 4);
let std_regex_constants_match_not_null = (1 << 5);
let std_regex_constants_match_continuous = (1 << 6);
let std_regex_constants_match_prev_avail = (1 << 7);
let std_regex_constants_format_default = 0;
let std_regex_constants_format_sed = (1 << 8);
let std_regex_constants_format_no_copy = (1 << 9);
let std_regex_constants_format_first_only = (1 << 10);
let std_regex_constants_error_collate = 0;
let std_regex_constants_error_ctype = 1;
let std_regex_constants_error_escape = 2;
let std_regex_constants_error_backref = 3;
let std_regex_constants_error_brack = 4;
let std_regex_constants_error_paren = 5;
let std_regex_constants_error_brace = 6;
let std_regex_constants_error_badbrace = 7;
let std_regex_constants_error_range = 8;
let std_regex_constants_error_space = 9;
let std_regex_constants_error_badrepeat = 10;
let std_regex_constants_error_complexity = 11;
let std_regex_constants_error_stack = 12;
let std_detail_S_invalid_state_id = (-(1));
main();
__ctj_flush();
