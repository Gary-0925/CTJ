"use strict";
var __ctj_obuf = "";
function __ctj_ios(os) {
  for (let n = 0; n < 4 && os && typeof os === "object" && os.a !== undefined; n++) { const x = os.a[os.i]; if (x === null || x === undefined) break; os = x; }
  return os;
}
function __ctj_fmt_g(x, p) {
  let s = x.toPrecision(Math.max(1, Math.min(21, p)));
  if (s.indexOf("e") >= 0) {
    const m = s.split("e");
    s = String(parseFloat(m[0])) + "e" + (m[1][0] === "-" ? "-" : "+") + String(Math.abs(parseInt(m[1], 10))).padStart(2, "0");
  } else if (s.indexOf(".") >= 0) s = s.replace(/\.?0+$/, "");
  return s;
}
function __ctj_cstr(p, n) {
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
function __ctj_fmt(v, os, u64) {
  os = __ctj_ios(os);
  const f = (os && typeof os._M_flags === "number") ? os._M_flags : 0;
  const base = (f & 74) === 8 ? 16 : ((f & 74) === 64 ? 8 : 10);
  for (let n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { const nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; }
  if (v !== null && typeof v === "object" && v._M_dataplus !== undefined) v = v._M_dataplus._M_p;
  let s;
  if (v === null || v === undefined) s = "0";
  else if (typeof v === "boolean") s = (f & 1) ? (v ? "true" : "false") : (v ? "1" : "0");
  else if (typeof v === "number") {
    if (u64 && Number.isInteger(v) && (v < 0 || v === 4294967295)) s = BigInt.asUintN(64, v === 4294967295 ? -1n : BigInt(v)).toString(base);
    else if (base !== 10 && Number.isInteger(v)) s = (v < 0 ? (v >>> 0) : v).toString(base);
    else if (Number.isInteger(v)) s = String(v);
    else s = Number.isFinite(v) ? __ctj_fmt_g(v, (os && os._M_precision) ? os._M_precision : 6) : String(v);
  }
  else if (typeof v === "string") s = v;
  else if (typeof v === "object") s = __ctj_cstr(v);
  else s = String(v);
  const w = (os && typeof os._M_width === "number") ? os._M_width : 0;
  if (w > s.length) {
    const c = (os && typeof os._M_fill === "number" && os._M_fill) ? String.fromCharCode(os._M_fill) : " ";
    s = c.repeat(w - s.length) + s;
  }
  if (os && typeof os._M_width === "number") os._M_width = 0;
  return s;
}
function __ctj_write(s) { s = String(s); if (typeof process !== "undefined" && process.stdout && process.stdout.write) { process.stdout.write(s); return; } __ctj_obuf += s; for (;;) { var n = __ctj_obuf.indexOf("\n"); if (n < 0) break; console.log(__ctj_obuf.slice(0, n)); __ctj_obuf = __ctj_obuf.slice(n + 1); } }
function __ctj_flush() { if (__ctj_obuf) { console.log(__ctj_obuf); __ctj_obuf = ""; } }
function _ctj_ios(os) {
  for (let n = 0; n < 4 && os && typeof os === "object" && os.a !== undefined; n++) { const x = os.a[os.i]; if (x === null || x === undefined) break; os = x; }
  return os;
}
function _ctj_fmt_g(x, p) {
  let s = x.toPrecision(Math.max(1, Math.min(21, p)));
  if (s.indexOf("e") >= 0) {
    const m = s.split("e");
    s = String(parseFloat(m[0])) + "e" + (m[1][0] === "-" ? "-" : "+") + String(Math.abs(parseInt(m[1], 10))).padStart(2, "0");
  } else if (s.indexOf(".") >= 0) s = s.replace(/\.?0+$/, "");
  return s;
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
function _ctj_fmt(v, os, u64) {
  os = _ctj_ios(os);
  const f = (os && typeof os._M_flags === "number") ? os._M_flags : 0;
  const base = (f & 74) === 8 ? 16 : ((f & 74) === 64 ? 8 : 10);
  for (let n = 0; n < 4 && v && typeof v === "object" && v.a !== undefined; n++) { const nv = v.a[v.i]; if (nv !== null && typeof nv === "object") { v = nv; continue; } if (!Array.isArray(v.a)) { v = nv; continue; } break; }
  if (v !== null && typeof v === "object" && v._M_dataplus !== undefined) v = v._M_dataplus._M_p;
  let s;
  if (v === null || v === undefined) s = "0";
  else if (typeof v === "boolean") s = (f & 1) ? (v ? "true" : "false") : (v ? "1" : "0");
  else if (typeof v === "number") {
    if (u64 && Number.isInteger(v) && (v < 0 || v === 4294967295)) s = BigInt.asUintN(64, v === 4294967295 ? -1n : BigInt(v)).toString(base);
    else if (base !== 10 && Number.isInteger(v)) s = (v < 0 ? (v >>> 0) : v).toString(base);
    else if (Number.isInteger(v)) s = String(v);
    else s = Number.isFinite(v) ? _ctj_fmt_g(v, (os && os._M_precision) ? os._M_precision : 6) : String(v);
  }
  else if (typeof v === "string") s = v;
  else if (typeof v === "object") s = _ctj_cstr(v);
  else s = String(v);
  const w = (os && typeof os._M_width === "number") ? os._M_width : 0;
  if (w > s.length) {
    const c = (os && typeof os._M_fill === "number" && os._M_fill) ? String.fromCharCode(os._M_fill) : " ";
    s = c.repeat(w - s.length) + s;
  }
  if (os && typeof os._M_width === "number") os._M_width = 0;
  return s;
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
  static assign(...$a) {
    let $t0;
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      ($a[0]).a[($a[0]).i] = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 3 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && (typeof $a[1] === "number" || typeof $a[1] === "boolean") && (typeof $a[2] === "number" || typeof $a[2] === "boolean")) {
      return ($t0 = memset((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), $a[2], $a[1]), $t0 ? {a: $t0.a, i: $t0.i} : null);
    }
    else { throw new Error("no matching overload"); }
  }
  static length(__s) {
    return strlen((__s ? {a: __s.a, i: __s.i} : null));
  }
  static find(__s, __n, __a) {
    let $t1;
    return ($t1 = std_memchr((__s ? {a: __s.a, i: __s.i} : null), __a.a[__a.i], __n), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  static move(__s1, __s2, __n) {
    let $t2;
    return ($t2 = memmove((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  static copy(__s1, __s2, __n) {
    let $t3;
    return ($t3 = memcpy((__s1 ? {a: __s1.a, i: __s1.i} : null), (__s2 ? {a: __s2.a, i: __s2.i} : null), __n), $t3 ? {a: $t3.a, i: $t3.i} : null);
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
    return ($t82 = (((!(this._M_is_leaked__c())) && std_operator_6_wchar_t_wchar_t(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, 0)), $t82 ? {a: $t82.a, i: $t82.i} : null);
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
        memcpy((__to ? {a: __to.a, i: __to.i} : null), (__lo ? {a: __lo.a, i: __lo.i} : null), ((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0)));
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
    let $t152;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t152 = operatornew__unsigned_long_long((__n * 4)), $t152 ? {a: $t152.a, i: $t152.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 4));
  }
  construct__rv(__p, __args_0) {
    let $t153;
    (__p.a[__p.i] = ($t153 = std_forward_1_int(__args_0), $t153.a[$t153.i]));
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
class gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_basic_string_int_std_char_traits_int_std_allocator_int(...$a) {
    this._M_current = null;
  }
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
    let $t154;
    return ($t154 = ((__n !== 0) ? this._M_impl.allocate(__n, {a: [0], i: 0}) : 0), $t154 ? {a: $t154.a, i: $t154.i} : null);
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
    let $t155, $t156;
    if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof std_allocator_int))) {
      this._M_range_initialize(($t155 = ({a: $a[0], i: 0}), $t155 ? {a: $t155.a, i: $t155.i} : null), ($t156 = ({a: $a[0], i: ($a[0]).length}), $t156 ? {a: $t156.a, i: $t156.i} : null), new std_random_access_iterator_tag());
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
    let $t157;
    __n = {v: __n};
    if (((this.max_size__c() - this.size__c()) < __n.v)) {
      std_throw_length_error((__s ? {a: __s.a, i: __s.i} : null));
    }
    let __len = (this.size__c() + ($t157 = std_max_unsigned_long_long({a: [this.size__c()], i: 0}, {a: __n, i: "v"}), $t157.a[$t157.i]));
    return (((__len < this.size__c()) || (__len > this.max_size__c())) ? this.max_size__c() : __len);
  }
  _M_emplace_back_aux__rv(__args_0) {
    let $t158, $t159, $t160, $t161, $t162;
    let __len = this._M_check_len__c((1 >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
    let __new_start = ($t158 = this._M_allocate(__len), $t158 ? {a: $t158.a, i: $t158.i} : null);
    let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int.construct({a: this, i: "_M_impl"}, ($t159 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t159 ? {a: $t159.a, i: $t159.i} : null), std_forward_1_int(__args_0));
        __new_finish = null;
        __new_finish = ($t160 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int((this._M_impl._M_start ? {a: this._M_impl._M_start.a, i: this._M_impl._M_start.i} : null), (this._M_impl._M_finish ? {a: this._M_impl._M_finish.a, i: this._M_impl._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._M_get_Tp_allocator()), $t160 ? {a: $t160.a, i: $t160.i} : null);
        ++__new_finish.i;
      }
    }
    if (false) {
       {
        if ((!__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int.destroy({a: this, i: "_M_impl"}, ($t161 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this.size__c())}), $t161 ? {a: $t161.a, i: $t161.i} : null));
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
    this._M_impl._M_end_of_storage = ($t162 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t162 ? {a: $t162.a, i: $t162.i} : null);
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
    let $t163, $t164, $t165;
    return ($t165 = ($t164 = ($t163 = this.begin__c(), $t163), ({a: ($t164 ? $t164.a : null), i: ($t164 ? $t164.i : 0) + (this.size__c())})), $t165 ? {a: $t165.a, i: $t165.i} : null);
  }
}
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  _M_current;
  constructor(...$a) {
    this.__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    let $t166, $t167, $t168;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = (((($a[0]).a[($a[0]).i])._M_current) ? {a: ((($a[0]).a[($a[0]).i])._M_current).a, i: ((($a[0]).a[($a[0]).i])._M_current).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int)) {
      this._M_current = ($t166 = (($a[0]).a[($a[0]).i]).base__c(), $t167 = ($t166 ? $t166.a[$t166.i] : null), $t167 && $t167.a !== undefined ? {a: $t167.a, i: $t167.i} : $t167);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_current = ($t168 = 0, $t168 ? {a: $t168.a, i: $t168.i} : null);
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
    let $t169;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_move_iterator_int_P)) {
      this._M_current = ($t169 = (($a[0]).a[($a[0]).i]).base__c(), $t169 ? {a: $t169.a, i: $t169.i} : null);
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
    let $t170, $t171;
    return ($t170 = __it.base__c(), $t171 = ($t170 ? $t170.a[$t170.i] : null), $t171 && $t171.a !== undefined ? {a: $t171.a, i: $t171.i} : $t171);
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
    let $t172, $t173;
    let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
    if (_Num) {
      memmove(($t172 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t172 ? {a: $t172.a, i: $t172.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc(((4 * _Num)) / 4));
    }
    return ($t173 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t173 ? {a: $t173.a, i: $t173.i} : null);
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
    let $t174, $t175, $t176;
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
          let __lc = ($t174 = __uc.op_call__c(__loc), $t174 ? {a: $t174.a, i: $t174.i} : null);
          let __name = ($t175 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t175 ? {a: $t175.a, i: $t175.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t176 = {a: new Array((1 * __plen)).fill(0), i: 0}, $t176 ? {a: $t176.a, i: $t176.i} : null);
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
    let $t177, $t178, $t179;
    let __uc = new std_use_cache_std_numpunct_cache_char();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t177 = __uc.op_call__c(__loc), $t177 ? {a: $t177.a, i: $t177.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_12_char_std_char_traits_char({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
              if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let __lit_zero = ($t178 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t178 ? {a: $t178.a, i: $t178.i} : null);
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
                  if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
                let __q = ($t179 = std_char_traits_char.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t179 ? {a: $t179.a, i: $t179.i} : null);
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
                      if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_11_char_std_char_traits_char(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let $t180, $t181, $t182;
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
              if (std_operator_12_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
          let __lc = ($t180 = __uc.op_call__c(__loc), $t180 ? {a: $t180.a, i: $t180.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_12_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
      std_convert_to_v_float(($t181 = __xtrc.v.c_str__c(), $t181 ? {a: $t181.a, i: $t181.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_12_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_char_std_char_traits_char && $a[1] instanceof std_istreambuf_iterator_char_std_char_traits_char && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[0]], i: 0}), new std_istreambuf_iterator_char_std_char_traits_char({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t182 = __xtrc.v.c_str__c(), $t182 ? {a: $t182.a, i: $t182.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_12_char_std_char_traits_char({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
    let $t183;
    return ($t183 = this.do_widen__c((__lo ? {a: __lo.a, i: __lo.i} : null), (__hi ? {a: __hi.a, i: __hi.i} : null), (__to ? {a: __to.a, i: __to.i} : null)), $t183 ? {a: $t183.a, i: $t183.i} : null);
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
    let $t184, $t185, $t186;
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
          let __lc = ($t184 = __uc.op_call__c(__loc), $t184 ? {a: $t184.a, i: $t184.i} : null);
          let __name = ($t185 = ($a[3] ? (__lc.a[__lc.i])._M_truename : (__lc.a[__lc.i])._M_falsename), $t185 ? {a: $t185.a, i: $t185.i} : null);
          let __len = ($a[3] ? (__lc.a[__lc.i])._M_truename_size : (__lc.a[__lc.i])._M_falsename_size);
          let __w = (($a[1]).a[($a[1]).i]).width__c();
          if ((__w > __len)) {
             {
              let __plen = (__w - __len);
              let __ps = ($t186 = {a: new Array((4 * __plen)).fill(0), i: 0}, $t186 ? {a: $t186.a, i: $t186.i} : null);
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
    let $t187, $t188, $t189;
    let __uc = new std_use_cache_std_numpunct_cache_wchar_t();
    let __loc = (__io.a[__io.i])._M_getloc__c();
    let __lc = ($t187 = __uc.op_call__c(__loc), $t187 ? {a: $t187.a, i: $t187.i} : null);
    let __lit = {a: __lc.a[__lc.i], i: "_M_atoms_in"};
    let __c = {v: 0};
    let __testeof = std_operator_12_wchar_t_std_char_traits_wchar_t({a: [__beg], i: 0}, {a: [__end], i: 0});
    if ((!__testeof)) {
       {
        __c.v = __beg.op_mul__c();
        let __plus = (__c.v === __lit.a[__lit.i + (1)]);
        if ((((__plus || (__c.v === __lit.a[__lit.i + (0)])) && (!(((__lc.a[__lc.i])._M_use_grouping && (__c.v === (__lc.a[__lc.i])._M_thousands_sep))))) && (!((__c.v === (__lc.a[__lc.i])._M_decimal_point))))) {
           {
            (__xtrc.a[__xtrc.i]).op_add_assign((__plus ? 43 : 45));
            if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
              if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let __lit_zero = ($t188 = ({a: (__lit ? __lit.a : null), i: (__lit ? __lit.i : 0) + (4)}), $t188 ? {a: $t188.a, i: $t188.i} : null);
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
                  if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
                let __q = ($t189 = std_char_traits_wchar_t.find((__lit_zero ? {a: __lit_zero.a, i: __lit_zero.i} : null), 10, {a: __c, i: "v"}), $t189 ? {a: $t189.a, i: $t189.i} : null);
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
                      if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
          if (std_operator_11_wchar_t_std_char_traits_wchar_t(__beg.op_inc(), {a: [__end], i: 0})) {
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
    let $t190, $t191, $t192;
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
              if (std_operator_12_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
          let __lc = ($t190 = __uc.op_call__c(__loc), $t190 ? {a: $t190.a, i: $t190.i} : null);
          let __testf = true;
          let __testt = true;
          let __donef = ((__lc.a[__lc.i])._M_falsename_size === 0);
          let __donet = ((__lc.a[__lc.i])._M_truename_size === 0);
          let __testeof = false;
          let __n = 0;
          while (((!__donef) || (!__donet))) {
             {
              if (std_operator_12_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
      std_convert_to_v_float(($t191 = __xtrc.v.c_str__c(), $t191 ? {a: $t191.a, i: $t191.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_12_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
        ($a[3]).a[($a[3]).i] |= std_ios_base.eofbit;
      }
      return new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0});
    }
    else if ($a.length >= 5 && $a.length <= 5 && $a[0] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && $a[1] instanceof std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t && ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_ios_base) && ($a[3] === null || typeof $a[3] === "object") && ($a[4] === null || typeof $a[4] === "object")) {
      let __xtrc = {v: new std_basic_string_char_std_char_traits_char_std_allocator_char()};
      __xtrc.v.reserve(32);
      ($a[0]).op_assign({a: [this._M_extract_float__c(new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}), new std_istreambuf_iterator_wchar_t_std_char_traits_wchar_t({a: [$a[1]], i: 0}), $a[2], $a[3], {a: __xtrc, i: "v"})], i: 0});
      std_convert_to_v_double(($t192 = __xtrc.v.c_str__c(), $t192 ? {a: $t192.a, i: $t192.i} : null), $a[4], $a[3], {a: [std_locale_facet._S_get_c_locale()], i: 0});
      if (std_operator_12_wchar_t_std_char_traits_wchar_t({a: [$a[0]], i: 0}, {a: [$a[1]], i: 0})) {
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
    let $t193, $t194, $t195, $t196, $t197, $t198, $t199, $t200, $t201, $t202, $t203;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_char(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t193 = (__np.a[__np.i]).grouping__c(), $t193)).size__c();
        __grouping = ($t194 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t194 ? {a: $t194.a, i: $t194.i} : null);
        (($t195 = (__np.a[__np.i]).grouping__c(), $t195)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t196 = (__np.a[__np.i]).truename__c(), $t196)).size__c();
        __truename = ($t197 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t197 ? {a: $t197.a, i: $t197.i} : null);
        (($t198 = (__np.a[__np.i]).truename__c(), $t198)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t199 = (__np.a[__np.i]).falsename__c(), $t199)).size__c();
        __falsename = ($t200 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t200 ? {a: $t200.a, i: $t200.i} : null);
        (($t201 = (__np.a[__np.i]).falsename__c(), $t201)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_char(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t202 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t202 ? {a: $t202.a, i: $t202.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t203 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t203 ? {a: $t203.a, i: $t203.i} : null), {a: this, i: "_M_atoms_in"});
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
    let $t204;
    let __i = std_numpunct_char.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t204 = {a: [new std_numpunct_cache_char(0)], i: 0}, $t204 ? {a: $t204.a, i: $t204.i} : null);
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
    let $t205, $t206, $t207, $t208, $t209, $t210, $t211, $t212, $t213, $t214, $t215;
    this._M_allocated = true;
    let __np = std_use_facet_std_numpunct_wchar_t(__loc);
    let __grouping = null;
    let __truename = null;
    let __falsename = null;
    if (true) {
       {
        this._M_grouping_size = (($t205 = (__np.a[__np.i]).grouping__c(), $t205)).size__c();
        __grouping = ($t206 = {a: new Array(this._M_grouping_size).fill(0), i: 0}, $t206 ? {a: $t206.a, i: $t206.i} : null);
        (($t207 = (__np.a[__np.i]).grouping__c(), $t207)).copy__c((__grouping ? {a: __grouping.a, i: __grouping.i} : null), this._M_grouping_size, 0);
        this._M_grouping = (__grouping ? {a: __grouping.a, i: __grouping.i} : null);
        this._M_use_grouping = ((this._M_grouping_size && (this._M_grouping.a[this._M_grouping.i] > 0)) && (this._M_grouping.a[this._M_grouping.i] !== gnu_cxx_numeric_traits_integer_char.__max));
        this._M_truename_size = (($t208 = (__np.a[__np.i]).truename__c(), $t208)).size__c();
        __truename = ($t209 = {a: new Array(this._M_truename_size).fill(0), i: 0}, $t209 ? {a: $t209.a, i: $t209.i} : null);
        (($t210 = (__np.a[__np.i]).truename__c(), $t210)).copy__c((__truename ? {a: __truename.a, i: __truename.i} : null), this._M_truename_size, 0);
        this._M_truename = (__truename ? {a: __truename.a, i: __truename.i} : null);
        this._M_falsename_size = (($t211 = (__np.a[__np.i]).falsename__c(), $t211)).size__c();
        __falsename = ($t212 = {a: new Array(this._M_falsename_size).fill(0), i: 0}, $t212 ? {a: $t212.a, i: $t212.i} : null);
        (($t213 = (__np.a[__np.i]).falsename__c(), $t213)).copy__c((__falsename ? {a: __falsename.a, i: __falsename.i} : null), this._M_falsename_size, 0);
        this._M_falsename = (__falsename ? {a: __falsename.a, i: __falsename.i} : null);
        this._M_decimal_point = (__np.a[__np.i]).decimal_point__c();
        this._M_thousands_sep = (__np.a[__np.i]).thousands_sep__c();
        let __ct = std_use_facet_std_ctype_wchar_t(__loc);
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_out ? {a: std_num_base._S_atoms_out.a, i: std_num_base._S_atoms_out.i} : null), ($t214 = ({a: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.a : null), i: (std_num_base._S_atoms_out ? std_num_base._S_atoms_out.i : 0) + (0)}), $t214 ? {a: $t214.a, i: $t214.i} : null), {a: this, i: "_M_atoms_out"});
        (__ct.a[__ct.i]).widen__c((std_num_base._S_atoms_in ? {a: std_num_base._S_atoms_in.a, i: std_num_base._S_atoms_in.i} : null), ($t215 = ({a: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.a : null), i: (std_num_base._S_atoms_in ? std_num_base._S_atoms_in.i : 0) + (26)}), $t215 ? {a: $t215.a, i: $t215.i} : null), {a: this, i: "_M_atoms_in"});
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
    let $t216;
    let __i = std_numpunct_wchar_t.id._M_id__c();
    let __caches = (((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches) ? {a: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).a, i: ((((__loc.a[__loc.i])._M_impl).a[((__loc.a[__loc.i])._M_impl).i])._M_caches).i} : null);
    if ((!(__caches.a[__caches.i + (__i)]))) {
       {
        let __tmp = null;
        if (true) {
           {
            __tmp = ($t216 = {a: [new std_numpunct_cache_wchar_t(0)], i: 0}, $t216 ? {a: $t216.a, i: $t216.i} : null);
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
class std_complex_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_P {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_P(...$a);
  }
  __init_std_complex_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_P(...$a) {
    this._M_real = null;
    this._M_imag = null;
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
class std_complex_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_P {
  _M_real;
  _M_imag;
  constructor(...$a) {
    this.__init_std_complex_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_P(...$a);
  }
  __init_std_complex_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_P(...$a) {
    this._M_real = null;
    this._M_imag = null;
  }
  __dtor() {
  }
}
class std_allocator_wchar_t_rebind_char {
  __init_std_allocator_wchar_t_rebind_char(...$a) { }
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
function memset(dst, c, n) {
  let d = (dst ? {a: dst.a, i: dst.i} : null);
  for (let i = 0; (i < n); i++) {
    d.a[d.i + (i)] = (c >>> 0);
  }
  return dst;
}
function strlen(s) {
  let n = 0;
  while ((s.a[s.i + (n)] !== 0)) {
    n++;
  }
  return n;
}
function std_memchr(__s, __c, __n) {
  return std_memchr((__s ? {a: __s.a, i: __s.i} : null), __c, __n);
}
function wcslen(...$a) { throw new Error("unresolved external: wcslen"); }
function wmemcpy(...$a) { throw new Error("unresolved external: wmemcpy"); }
function wmemset(...$a) { throw new Error("unresolved external: wmemset"); }
function std_wmemchr(__p, __c, __n) {
  let $t217;
  return ($t217 = std_wmemchr((__p ? {a: __p.a, i: __p.i} : null), __c, Math.trunc((__n) / 4)), $t217 ? {a: $t217.a, i: $t217.i} : null);
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_bad_cast(...$a) { throw new Error("unresolved external: std::__throw_bad_cast"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function std_throw_out_of_range(...$a) { throw new Error("unresolved external: std::__throw_out_of_range"); }
function std_lg__long(__n) {
  return (((8 * 8) - 1) - Math.clz32(__n));
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
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_verify_grouping(...$a) { throw new Error("unresolved external: std::__verify_grouping"); }
function std_swap_int(__a, __b) {
  let $t218, $t219, $t220;
  let __tmp = {v: ($t218 = std_move_int(__a), $t218.a[$t218.i])};
  __a.a[__a.i] = ($t219 = std_move_int(__b), $t219.a[$t219.i]);
  __b.a[__b.i] = ($t220 = std_move_int({a: __tmp, i: "v"}), $t220.a[$t220.i]);
}
function std_operator_4_int_P_int_P(__x, __y) {
  return (!(std_operator_4_int_P_int_P_1030(__x, __y)));
}
function std_operator_11_char_std_char_traits_char(__a, __b) {
  return (!((__a.a[__a.i]).equal__c(__b)));
}
function std_operator_11_wchar_t_std_char_traits_wchar_t(__a, __b) {
  return (!((__a.a[__a.i]).equal__c(__b)));
}
function std_operator_4_int_P_int_P_1030(__x, __y) {
  let $t221, $t222, $t223, $t224;
  return ($t223 = ($t221 = (__x.a[__x.i]).base__c(), $t221), $t224 = ($t222 = (__y.a[__y.i]).base__c(), $t222), ($t223 === $t224 || ($t223 && $t224 && $t223.a === $t224.a && $t223.i === $t224.i)));
}
function std_operator_12_char_std_char_traits_char(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_12_wchar_t_std_char_traits_wchar_t(__a, __b) {
  return (__a.a[__a.i]).equal__c(__b);
}
function std_operator_6_char_char($p0, $p1) {
  return true;
}
function std_operator_6_wchar_t_wchar_t($p0, $p1) {
  return true;
}
function main() {
  let $t225, $t226, $t227, $t228, $t229, $t230, $t231, $t232, $t233, $t234, $t235, $t236, $t237, $t238, $t239, $t240, $t241, $t242, $t243, $t244, $t245, $t246, $t247;
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
  ($t225 = (__ctj_write(__ctj_fmt(s, std_cout)), std_cout), __ctj_write("\n"), $t225);
  ($t232 = ($t229 = ($t228 = (__ctj_write(__ctj_fmt(($t226 = (($t227 = std_max_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end()), $t227)).op_mul__c(), $t226.a[$t226.i]), std_cout)), std_cout), __ctj_write(__ctj_fmt([32, 0], $t228)), $t228), __ctj_write(__ctj_fmt(($t230 = (($t231 = std_min_element_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end()), $t231)).op_mul__c(), $t230.a[$t230.i]), $t229)), $t229), __ctj_write("\n"), $t232);
  ($t233 = (__ctj_write(__ctj_fmt(std_accumulate_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), 0), std_cout)), std_cout), __ctj_write("\n"), $t233);
  ($t238 = ($t235 = ($t234 = (__ctj_write(__ctj_fmt(std_count_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [1], i: 0}), std_cout)), std_cout), __ctj_write(__ctj_fmt([32, 0], $t234)), $t234), __ctj_write(__ctj_fmt(($t236 = (($t237 = std_lower_bound_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [4], i: 0}), $t237)).op_mul__c(), $t236.a[$t236.i]), $t235)), $t235), __ctj_write("\n"), $t238);
  ($t239 = (__ctj_write(__ctj_fmt((std_binary_search_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_int(v.begin(), v.end(), {a: [3], i: 0}) ? 1 : 0), std_cout)), std_cout), __ctj_write("\n"), $t239);
  std_reverse_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(v.begin(), v.end());
  let t = 0;
  for (let $b1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.begin()], i: 0}), $e1 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [v.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1.op_inc()) {
    let y = $b1.op_mul__c();
    t = ((t * 10) + y.a[y.i]);
  }
  ($t240 = (__ctj_write(__ctj_fmt(t, std_cout)), std_cout), __ctj_write("\n"), $t240);
  let w = new std_vector_int_std_allocator_int([9, 8, 7], {a: [new std_allocator_int()], i: 0});
  let u = 0;
  for (let $b2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.begin()], i: 0}), $e2 = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [w.end()], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2.op_inc()) {
    let x = ($b2.op_mul__c()).a[($b2.op_mul__c()).i];
    u += x;
  }
  ($t243 = ($t242 = ($t241 = (__ctj_write(__ctj_fmt(u, std_cout)), std_cout), __ctj_write(__ctj_fmt([32, 0], $t241)), $t241), __ctj_write(__ctj_fmt(w.size__c(), $t242)), $t242), __ctj_write("\n"), $t243);
  let a = [7, 5, 9];
  std_sort_int_P({a: a, i: 0}, ($t244 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (3)}), $t244 ? {a: $t244.a, i: $t244.i} : null));
  ($t247 = ($t246 = ($t245 = (__ctj_write(__ctj_fmt(a[0], std_cout)), std_cout), __ctj_write(__ctj_fmt(a[1], $t245)), $t245), __ctj_write(__ctj_fmt(a[2], $t246)), $t246), __ctj_write("\n"), $t247);
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
  let $t248, $t249, $t250, $t251, $t252, $t253;
  return ($t252 = (($t250 = (__lhs.a[__lhs.i]).base__c(), $t250) ? (($t250 = (__lhs.a[__lhs.i]).base__c(), $t250)).a[(($t250 = (__lhs.a[__lhs.i]).base__c(), $t250)).i] : null), $t253 = (($t251 = (__rhs.a[__rhs.i]).base__c(), $t251) ? (($t251 = (__rhs.a[__rhs.i]).base__c(), $t251)).a[(($t251 = (__rhs.a[__rhs.i]).base__c(), $t251)).i] : null), (!($t252 === $t253 || ($t252 && $t253 && $t252.a === $t253.a && $t252.i === $t253.i))));
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
  let $t254, $t255, $t256, $t257, $t258, $t259;
  return ($t258 = (($t256 = (__lhs.a[__lhs.i]).base__c(), $t256) ? (($t256 = (__lhs.a[__lhs.i]).base__c(), $t256)).a[(($t256 = (__lhs.a[__lhs.i]).base__c(), $t256)).i] : null), $t259 = (($t257 = (__rhs.a[__rhs.i]).base__c(), $t257) ? (($t257 = (__rhs.a[__rhs.i]).base__c(), $t257)).a[(($t257 = (__rhs.a[__rhs.i]).base__c(), $t257)).i] : null), (($t258 ? $t258.i : 0) - ($t259 ? $t259.i : 0)));
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
  let $t260;
  while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 16)) {
     {
      if ((__depth_limit === 0)) {
         {
          std_partial_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          return;
        }
      }
      --__depth_limit;
      let __cut = ($t260 = std_unguarded_partition_pivot_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t260 ? {a: $t260.a, i: $t260.i} : null);
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
  let $t261, $t262;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 16)) {
     {
      std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), ($t261 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (16)}), $t261 ? {a: $t261.a, i: $t261.i} : null));
      std_unguarded_insertion_sort_int_P(($t262 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (16)}), $t262 ? {a: $t262.a, i: $t262.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
    }
  }
  else {
    std_insertion_sort_int_P((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
  }
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804(__lhs, __rhs) {
  let $t263, $t264, $t265, $t266, $t267, $t268;
  return ($t267 = (($t265 = (__lhs.a[__lhs.i]).base__c(), $t265) ? (($t265 = (__lhs.a[__lhs.i]).base__c(), $t265)).a[(($t265 = (__lhs.a[__lhs.i]).base__c(), $t265)).i] : null), $t268 = (($t266 = (__rhs.a[__rhs.i]).base__c(), $t266) ? (($t266 = (__rhs.a[__rhs.i]).base__c(), $t266)).a[(($t266 = (__rhs.a[__rhs.i]).base__c(), $t266)).i] : null), ($t267 === $t268 || ($t267 && $t268 && $t267.a === $t268.a && $t267.i === $t268.i)));
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
  let $t269;
  return ($t269 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__first ? {a: __first.a, i: __first.i} : null)), std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t269 ? {a: $t269.a, i: $t269.i} : null);
}
function std_Destroy_2_int_P_std_allocator_int(__first, __last, __alloc) {
  let $t270;
  for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
    gnu_cxx_alloc_traits_std_allocator_int.destroy(__alloc, ($t270 = std_addressof_int(__first), $t270 ? {a: $t270.a, i: $t270.i} : null));
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
  let $t271, $t272, $t273, $t274;
  let __mid = ($t271 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((Math.trunc(((__last ? __last.i : 0) - (__first ? __first.i : 0)) / 2)))}), $t271 ? {a: $t271.a, i: $t271.i} : null);
  std_move_median_first_int_P((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t272 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t272 ? {a: $t272.a, i: $t272.i} : null));
  return ($t274 = std_unguarded_partition_int_P_int(($t273 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t273 ? {a: $t273.a, i: $t273.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t274 ? {a: $t274.a, i: $t274.i} : null);
}
function std_insertion_sort_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t275, $t276, $t277;
  if (gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_804({a: [__first], i: 0}, {a: [__last], i: 0})) {
    return;
  }
  for (let __i = __first.op_add__c({a: [1], i: 0}); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}, {a: [__last], i: 0}); __i.op_inc()) {
     {
      if (((__i.op_mul__c()).a[(__i.op_mul__c()).i] < (__first.op_mul__c()).a[(__first.op_mul__c()).i])) {
         {
          let __val = {v: ($t275 = std_move_int(__i.op_mul__c()), $t275.a[$t275.i])};
          std_move_backward_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}), __i.op_add__c({a: [1], i: 0}));
          ($t276 = __first.op_mul__c(), $t276.a[$t276.i] = ($t277 = std_move_int({a: __val, i: "v"}), $t277.a[$t277.i]));
        }
      }
      else {
        std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__i], i: 0}));
      }
    }
  }
}
function std_insertion_sort_int_P(__first, __last) {
  let $t278, $t279, $t280, $t281;
  if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
    return;
  }
  for (let __i = ($t278 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t278 ? {a: $t278.a, i: $t278.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
     {
      if ((__i.a[__i.i] < __first.a[__first.i])) {
         {
          let __val = {v: ($t279 = std_move_int(__i), $t279.a[$t279.i])};
          std_move_backward_int_P_int_P((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t280 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t280 ? {a: $t280.a, i: $t280.i} : null));
          __first.a[__first.i] = ($t281 = std_move_int({a: __val, i: "v"}), $t281.a[$t281.i]);
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
  let $t282, $t283, $t284, $t285, $t286, $t287;
  return ($t286 = (($t284 = (__lhs.a[__lhs.i]).base__c(), $t284) ? (($t284 = (__lhs.a[__lhs.i]).base__c(), $t284)).a[(($t284 = (__lhs.a[__lhs.i]).base__c(), $t284)).i] : null), $t287 = (($t285 = (__rhs.a[__rhs.i]).base__c(), $t285) ? (($t285 = (__rhs.a[__rhs.i]).base__c(), $t285)).a[(($t285 = (__rhs.a[__rhs.i]).base__c(), $t285)).i] : null), (($t286 ? $t286.i : 0) < ($t287 ? $t287.i : 0)));
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
  let $t288;
  let __cur = (__result ? {a: __result.a, i: __result.i} : null);
  if (true) {
     {
      for (; std_operator_4_int_P_int_P({a: [__first], i: 0}, {a: [__last], i: 0}); (__first.op_inc(), ++__cur.i)) {
        gnu_cxx_alloc_traits_std_allocator_int.construct(__alloc, ($t288 = std_addressof_int(__cur), $t288 ? {a: $t288.a, i: $t288.i} : null), __first.op_mul__c());
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
  let $t289, $t290, $t291;
  return ($t291 = std_copy_move_backward_a2_value1_int_P_int_P(($t289 = std_miter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t289 ? {a: $t289.a, i: $t289.i} : null), ($t290 = std_miter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t290 ? {a: $t290.a, i: $t290.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t291 ? {a: $t291.a, i: $t291.i} : null);
}
function std_unguarded_linear_insert_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__last) {
  let $t292, $t293, $t294, $t295, $t296;
  let __val = {v: ($t292 = std_move_int(__last.op_mul__c()), $t292.a[$t292.i])};
  let __next = new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0});
  __next.op_dec();
  while ((__val.v < (__next.op_mul__c()).a[(__next.op_mul__c()).i])) {
     {
      ($t293 = __last.op_mul__c(), $t293.a[$t293.i] = ($t294 = std_move_int(__next.op_mul__c()), $t294.a[$t294.i]));
      __last.op_assign({a: [__next], i: 0});
      __next.op_dec();
    }
  }
  ($t295 = __last.op_mul__c(), $t295.a[$t295.i] = ($t296 = std_move_int({a: __val, i: "v"}), $t296.a[$t296.i]));
}
function std_unguarded_linear_insert_int_P(__last) {
  let $t297, $t298, $t299;
  let __val = {v: ($t297 = std_move_int(__last), $t297.a[$t297.i])};
  let __next = (__last ? {a: __last.a, i: __last.i} : null);
  --__next.i;
  while ((__val.v < __next.a[__next.i])) {
     {
      __last.a[__last.i] = ($t298 = std_move_int(__next), $t298.a[$t298.i]);
      __last = (__next ? {a: __next.a, i: __next.i} : null);
      --__next.i;
    }
  }
  __last.a[__last.i] = ($t299 = std_move_int({a: __val, i: "v"}), $t299.a[$t299.i]);
}
function std_make_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last) {
  let $t300, $t301, $t302;
  if ((gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
    return;
  }
  let __len = gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0});
  let __parent = (Math.trunc((__len - 2) / 2));
  while (true) {
     {
      let __value = {v: ($t300 = std_move_int((($t301 = __first.op_add__c({a: [__parent], i: 0}), $t301)).op_mul__c()), $t300.a[$t300.i])};
      std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __parent, __len, ($t302 = std_move_int({a: __value, i: "v"}), $t302.a[$t302.i]));
      if ((__parent === 0)) {
        return;
      }
      __parent--;
    }
  }
}
function std_make_heap_int_P(__first, __last) {
  let $t303, $t304;
  if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
    return;
  }
  let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
  let __parent = (Math.trunc((__len - 2) / 2));
  while (true) {
     {
      let __value = {v: ($t303 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t303.a[$t303.i])};
      std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t304 = std_move_int({a: __value, i: "v"}), $t304.a[$t304.i]));
      if ((__parent === 0)) {
        return;
      }
      __parent--;
    }
  }
}
function std_pop_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t305, $t306, $t307, $t308;
  let __value = {v: ($t305 = std_move_int(__result.op_mul__c()), $t305.a[$t305.i])};
  ($t306 = __result.op_mul__c(), $t306.a[$t306.i] = ($t307 = std_move_int(__first.op_mul__c()), $t307.a[$t307.i]));
  std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), 0, gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int_883({a: [__last], i: 0}, {a: [__first], i: 0}), ($t308 = std_move_int({a: __value, i: "v"}), $t308.a[$t308.i]));
}
function std_pop_heap_int_P(__first, __last, __result) {
  let $t309, $t310, $t311;
  let __value = {v: ($t309 = std_move_int(__result), $t309.a[$t309.i])};
  __result.a[__result.i] = ($t310 = std_move_int(__first), $t310.a[$t310.i]);
  std_adjust_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t311 = std_move_int({a: __value, i: "v"}), $t311.a[$t311.i]));
}
function std_miter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  return std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value0._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0}));
}
function std_miter_base_int_P(__it) {
  let $t312;
  return ($t312 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t312 ? {a: $t312.a, i: $t312.i} : null);
}
function std_copy_move_backward_a2_value1_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__first, __last, __result) {
  let $t313, $t314, $t315;
  return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [std_copy_move_backward_a_value1_int_P_int_P(($t313 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0})), $t313 ? {a: $t313.a, i: $t313.i} : null), ($t314 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__last], i: 0})), $t314 ? {a: $t314.a, i: $t314.i} : null), ($t315 = std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__result], i: 0})), $t315 ? {a: $t315.a, i: $t315.i} : null))], i: 0});
}
function std_copy_move_backward_a2_value1_int_P_int_P(__first, __last, __result) {
  let $t316, $t317, $t318, $t319;
  return ($t319 = std_copy_move_backward_a_value1_int_P_int_P(($t316 = std_niter_base_int_P((__first ? {a: __first.a, i: __first.i} : null)), $t316 ? {a: $t316.a, i: $t316.i} : null), ($t317 = std_niter_base_int_P((__last ? {a: __last.a, i: __last.i} : null)), $t317 ? {a: $t317.a, i: $t317.i} : null), ($t318 = std_niter_base_int_P((__result ? {a: __result.a, i: __result.i} : null)), $t318 ? {a: $t318.a, i: $t318.i} : null)), $t319 ? {a: $t319.a, i: $t319.i} : null);
}
function std_adjust_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __len, __value) {
  let $t320, $t321, $t322, $t323, $t324, $t325, $t326, $t327, $t328, $t329, $t330, $t331, $t332;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < (Math.trunc((__len - 1) / 2)))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      if ((($t320 = (($t321 = __first.op_add__c({a: [__secondChild], i: 0}), $t321)).op_mul__c(), $t320.a[$t320.i]) < ($t322 = (($t323 = __first.op_add__c({a: [(__secondChild - 1)], i: 0}), $t323)).op_mul__c(), $t322.a[$t322.i]))) {
        __secondChild--;
      }
      ($t324 = (($t327 = __first.op_add__c({a: [__holeIndex], i: 0}), $t327)).op_mul__c(), $t324.a[$t324.i] = ($t325 = std_move_int((($t326 = __first.op_add__c({a: [__secondChild], i: 0}), $t326)).op_mul__c()), $t325.a[$t325.i]));
      __holeIndex = __secondChild;
    }
  }
  if ((((__len & 1) === 0) && (__secondChild === (Math.trunc((__len - 2) / 2))))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      ($t328 = (($t331 = __first.op_add__c({a: [__holeIndex], i: 0}), $t331)).op_mul__c(), $t328.a[$t328.i] = ($t329 = std_move_int((($t330 = __first.op_add__c({a: [(__secondChild - 1)], i: 0}), $t330)).op_mul__c()), $t329.a[$t329.i]));
      __holeIndex = (__secondChild - 1);
    }
  }
  std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__first], i: 0}), __holeIndex, __topIndex, ($t332 = std_move_int({a: __value, i: "v"}), $t332.a[$t332.i]));
}
function std_adjust_heap_int_P_long_int(__first, __holeIndex, __len, __value) {
  let $t333, $t334, $t335, $t336, $t337, $t338, $t339;
  __value = {v: __value};
  let __topIndex = __holeIndex;
  let __secondChild = __holeIndex;
  while ((__secondChild < (Math.trunc((__len - 1) / 2)))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      if ((($t333 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t333.a[$t333.i]) < ($t334 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((__secondChild - 1))}), $t334.a[$t334.i]))) {
        __secondChild--;
      }
      (($t335 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t335)).a[(($t335 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t335)).i] = ($t336 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t336.a[$t336.i]);
      __holeIndex = __secondChild;
    }
  }
  if ((((__len & 1) === 0) && (__secondChild === (Math.trunc((__len - 2) / 2))))) {
     {
      __secondChild = (2 * (__secondChild + 1));
      (($t337 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t337)).a[(($t337 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t337)).i] = ($t338 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((__secondChild - 1))})), $t338.a[$t338.i]);
      __holeIndex = (__secondChild - 1);
    }
  }
  std_push_heap_int_P_long_int((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t339 = std_move_int({a: __value, i: "v"}), $t339.a[$t339.i]));
}
function std_niter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(__it) {
  let $t340;
  return ($t340 = std_Iter_base_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_value1._S_base(new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int({a: [__it], i: 0})), $t340 ? {a: $t340.a, i: $t340.i} : null);
}
function std_niter_base_int_P(__it) {
  let $t341;
  return ($t341 = std_Iter_base_int_P_value0._S_base((__it ? {a: __it.a, i: __it.i} : null)), $t341 ? {a: $t341.a, i: $t341.i} : null);
}
function std_copy_move_backward_a_value1_int_P_int_P(__first, __last, __result) {
  let $t342;
  let __simple = (((1 && 1) && 1) && 1);
  return ($t342 = std_copy_move_backward_value1_value1_std_random_access_iterator_tag.__copy_move_b((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t342 ? {a: $t342.a, i: $t342.i} : null);
}
function std_push_heap_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t343, $t344, $t345, $t346, $t347, $t348, $t349, $t350, $t351;
  __value = {v: __value};
  let __parent = (Math.trunc((__holeIndex - 1) / 2));
  while (((__holeIndex > __topIndex) && (($t343 = (($t344 = __first.op_add__c({a: [__parent], i: 0}), $t344)).op_mul__c(), $t343.a[$t343.i]) < __value.v))) {
     {
      ($t345 = (($t348 = __first.op_add__c({a: [__holeIndex], i: 0}), $t348)).op_mul__c(), $t345.a[$t345.i] = ($t346 = std_move_int((($t347 = __first.op_add__c({a: [__parent], i: 0}), $t347)).op_mul__c()), $t346.a[$t346.i]));
      __holeIndex = __parent;
      __parent = (Math.trunc((__holeIndex - 1) / 2));
    }
  }
  ($t349 = (($t351 = __first.op_add__c({a: [__holeIndex], i: 0}), $t351)).op_mul__c(), $t349.a[$t349.i] = ($t350 = std_move_int({a: __value, i: "v"}), $t350.a[$t350.i]));
}
function std_push_heap_int_P_long_int(__first, __holeIndex, __topIndex, __value) {
  let $t352, $t353, $t354, $t355, $t356;
  __value = {v: __value};
  let __parent = (Math.trunc((__holeIndex - 1) / 2));
  while (((__holeIndex > __topIndex) && (($t352 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t352.a[$t352.i]) < __value.v))) {
     {
      (($t353 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t353)).a[(($t353 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t353)).i] = ($t354 = std_move_int(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t354.a[$t354.i]);
      __holeIndex = __parent;
      __parent = (Math.trunc((__holeIndex - 1) / 2));
    }
  }
  (($t355 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t355)).a[(($t355 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t355)).i] = ($t356 = std_move_int({a: __value, i: "v"}), $t356.a[$t356.i]);
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
let std_cout = new std_basic_ostream_char_std_char_traits_char();
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
