"use strict";
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
  static assign(__c1, __c2) {
    __c1.a[__c1.i] = __c2.a[__c2.i];
  }
  static copy(__s1, __s2, __n) {
    let $t0;
    return ($t0 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
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
    return ($t1 = operatornew__unsigned_long(((Math.imul(__n, 1)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
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
  _M_grab(__alloc1, __alloc2) {
    let $t5;
    return ($t5 = (((!(this._M_is_leaked__c())) && std_operator_6_char_char(__alloc1, __alloc2)) ? this._M_refcopy() : this._M_clone(__alloc1, ((0) >>> 0))), $t5 ? {a: $t5.a, i: $t5.i} : null);
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
  _M_refcopy() {
    let $t8;
    gnu_cxx_atomic_add_dispatch((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), 1);
    return ($t8 = this._M_refdata(), $t8 ? {a: $t8.a, i: $t8.i} : null);
  }
  _M_clone(__alloc, __res = ((0) >>> 0)) {
    let $t9, $t10, $t11, $t12;
    let __requested_cap = (((this._M_length) + (__res)) >>> 0);
    let __r = ($t9 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__requested_cap, this._M_capacity, __alloc), $t9 ? {a: $t9.a, i: $t9.i} : null);
    if (this._M_length) {
      std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t10 = (__r.a[__r.i])._M_refdata(), $t10 ? {a: $t10.a, i: $t10.i} : null), ($t11 = this._M_refdata(), $t11 ? {a: $t11.a, i: $t11.i} : null), this._M_length);
    }
    (__r.a[__r.i])._M_set_length_and_sharable(this._M_length);
    return ($t12 = (__r.a[__r.i])._M_refdata(), $t12 ? {a: $t12.a, i: $t12.i} : null);
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
  _M_dataplus;
  constructor(...$a) {
    this.__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    let $t13, $t14, $t15;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_basic_string_char_std_char_traits_char_std_allocator_char)) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t14 = (($t13 = (($a[0]).a[($a[0]).i])._M_rep__c(), $t13.a[$t13.i]))._M_grab({a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}, {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0}), $t14 ? {a: $t14.a, i: $t14.i} : null), {a: [(($a[0]).a[($a[0]).i]).get_allocator__c()], i: 0});
      this._M_dataplus.ctj_a = this; this._M_dataplus.ctj_i = "_M_dataplus";
    }
    else if ($a.length >= 2 && $a.length <= 3 && ($a[0] === null || (typeof $a[0] === "object" && ($a[0].a === undefined || typeof $a[0].a[$a[0].i] !== "object"))) && ($a[1] === null || (typeof $a[1] === "object" && ($a[1].a === undefined || typeof $a[1].a[$a[1].i] !== "object"))) && ($a.length <= 2 || ($a[2] !== null && typeof $a[2] === "object" && !Array.isArray($a[2]) && $a[2].a !== undefined && $a[2].i !== undefined && $a[2].a[$a[2].i] instanceof std_allocator_char))) {
      this._M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(($t15 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), (($a[1]) ? {a: ($a[1]).a, i: ($a[1]).i} : null), ($a[2] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[2])), $t15 ? {a: $t15.a, i: $t15.i} : null), ($a[2] === undefined ? ({a: [new std_allocator_char()], i: 0}) : $a[2]));
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
    let $t16, $t17;
    return ($t17 = {a: (($t16 = this._M_data__c(), $t16)).a, i: (($t16 = this._M_data__c(), $t16)).i + (((-(1)) | 0))}, $t17 ? {a: $t17.a, i: $t17.i} : null);
  }
  static _M_copy(__d, __s, __n) {
    if ((__n === ((1) >>> 0))) {
      std_char_traits_char.assign(__d, __s);
    }
    else {
      std_char_traits_char.copy((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
    }
  }
  size__c() {
    let $t18;
    return (($t18 = this._M_rep__c(), $t18.a[$t18.i]))._M_length;
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_char_P(__beg, __end, __a) {
    let $t19;
    return ($t19 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_false_type()), $t19 ? {a: $t19.a, i: $t19.i} : null);
  }
  static _S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P(__beg, __end, __a, $p3) {
    let $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27, $t28;
    let __buf = new Array(128).fill(0);
    let __len = ((0) >>> 0);
    while (((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
       {
        __buf[($t20 = __len, __len = (($t20 + 1) >>> 0), $t20)] = __beg.a[__beg.i];
        ++__beg.i;
      }
    }
    let __r = ($t21 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create(__len, ((0) >>> 0), __a), $t21 ? {a: $t21.a, i: $t21.i} : null);
    std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t22 = (__r.a[__r.i])._M_refdata(), $t22 ? {a: $t22.a, i: $t22.i} : null), {a: __buf, i: 0}, __len);
    if (true) {
       {
        while ((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i)))) {
           {
            if ((__len === (__r.a[__r.i])._M_capacity)) {
               {
                let __another = ($t23 = std_basic_string_char_std_char_traits_char_std_allocator_char_Rep._S_create((((__len) + (((1) >>> 0))) >>> 0), __len, __a), $t23 ? {a: $t23.a, i: $t23.i} : null);
                std_basic_string_char_std_char_traits_char_std_allocator_char._M_copy(($t24 = (__another.a[__another.i])._M_refdata(), $t24 ? {a: $t24.a, i: $t24.i} : null), ($t25 = (__r.a[__r.i])._M_refdata(), $t25 ? {a: $t25.a, i: $t25.i} : null), __len);
                (__r.a[__r.i])._M_destroy(__a);
                __r = (__another ? {a: __another.a, i: __another.i} : null);
              }
            }
            (($t26 = (__r.a[__r.i])._M_refdata(), $t26)).a[(($t26 = (__r.a[__r.i])._M_refdata(), $t26)).i + (($t27 = __len, __len = (($t27 + 1) >>> 0), $t27))] = __beg.a[__beg.i];
            ++__beg.i;
          }
        }
      }
    }
    if (false) {
       {
        (__r.a[__r.i])._M_destroy(__a);
      }
    }
    (__r.a[__r.i])._M_set_length_and_sharable(__len);
    return ($t28 = (__r.a[__r.i])._M_refdata(), $t28 ? {a: $t28.a, i: $t28.i} : null);
  }
  data__c() {
    let $t29;
    return ($t29 = this._M_data__c(), $t29 ? {a: $t29.a, i: $t29.i} : null);
  }
  get_allocator__c() {
    return new std_allocator_char({a: this, i: "_M_dataplus"});
  }
  static _S_construct_aux__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_aux_char_P(__beg, __end, __a, $p3) {
    let $t30;
    return ($t30 = std_basic_string_char_std_char_traits_char_std_allocator_char._S_construct__std_basic_string_char_std_char_traits_char_std_allocator_char_S_construct_1_char_P((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new std_random_access_iterator_tag()), $t30 ? {a: $t30.a, i: $t30.i} : null);
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
class gnu_cxx_numeric_traits_floating_double {
  constructor(...$a) {
    this.__init_gnu_cxx_numeric_traits_floating_double(...$a);
  }
  __init_gnu_cxx_numeric_traits_floating_double(...$a) {
  }
  __dtor() {
  }
  static __max_digits10 = 17;
  static __is_signed = 1;
  static __digits10 = 15;
  static __is_integer = 0;
  static __digits = 53;
  static __max_exponent10 = 308;
}
class gnu_cxx_numeric_traits_double extends gnu_cxx_numeric_traits_floating_double {
  constructor(...$a) {
    super();
    this.__init_gnu_cxx_numeric_traits_double(...$a);
  }
  __init_gnu_cxx_numeric_traits_double(...$a) {
  }
  __dtor() {
    gnu_cxx_numeric_traits_floating_double.prototype.__dtor.call(this);
  }
}
class gnu_cxx_numeric_traits_floating_float {
  constructor(...$a) {
    this.__init_gnu_cxx_numeric_traits_floating_float(...$a);
  }
  __init_gnu_cxx_numeric_traits_floating_float(...$a) {
  }
  __dtor() {
  }
  static __max_digits10 = 9;
  static __is_signed = 1;
  static __digits10 = 6;
  static __is_integer = 0;
  static __digits = 24;
  static __max_exponent10 = 38;
}
class gnu_cxx_numeric_traits_float extends gnu_cxx_numeric_traits_floating_float {
  constructor(...$a) {
    super();
    this.__init_gnu_cxx_numeric_traits_float(...$a);
  }
  __init_gnu_cxx_numeric_traits_float(...$a) {
  }
  __dtor() {
    gnu_cxx_numeric_traits_floating_float.prototype.__dtor.call(this);
  }
}
class std_is_integer_char_P {
  __init_std_is_integer_char_P(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_char_P {
  __init_std_iterator_traits_char_P(...$a) { }
  __dtor() {
  }
}
class std_numeric_limits_double {
  constructor(...$a) {
    this.__init_std_numeric_limits_double(...$a);
  }
  __init_std_numeric_limits_double(...$a) {
  }
  __dtor() {
  }
  static is_specialized = 1;
  static digits = 53;
  static digits10 = 15;
  static max_digits10 = 17;
  static is_signed = 1;
  static is_integer = 0;
  static is_exact = 0;
  static radix = 2;
  static min_exponent = -1021;
  static min_exponent10 = -307;
  static max_exponent = 1024;
  static max_exponent10 = 308;
  static has_infinity = 1;
  static has_quiet_NaN = 1;
  static has_signaling_NaN = 1;
  static has_denorm = 1;
  static has_denorm_loss = 0;
  static is_iec559 = 1;
  static is_bounded = 1;
  static is_modulo = 0;
  static traps = 0;
  static tinyness_before = 0;
  static round_style = 1;
}
class std_numeric_limits_float {
  constructor(...$a) {
    this.__init_std_numeric_limits_float(...$a);
  }
  __init_std_numeric_limits_float(...$a) {
  }
  __dtor() {
  }
  static is_specialized = 1;
  static digits = 24;
  static digits10 = 6;
  static max_digits10 = 9;
  static is_signed = 1;
  static is_integer = 0;
  static is_exact = 0;
  static radix = 2;
  static min_exponent = -125;
  static min_exponent10 = -37;
  static max_exponent = 128;
  static max_exponent10 = 38;
  static has_infinity = 1;
  static has_quiet_NaN = 1;
  static has_signaling_NaN = 1;
  static has_denorm = 1;
  static has_denorm_loss = 0;
  static is_iec559 = 1;
  static is_bounded = 1;
  static is_modulo = 0;
  static traps = 0;
  static tinyness_before = 0;
  static round_style = 1;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
function vsnprintf(s, n, fmt, ap) {
  return ((globalThis.__ctjvf || (globalThis.__ctjvf = function (mode, dst, n, fmt, ap) { var NL = String.fromCharCode(10); function toStr(q) { if (q === null || q === undefined) return '(null)'; var a = q.a, i = q.i | 0, r = '', x; if (typeof a === 'string') return a.slice(i); for (; ; i++) { x = a[i]; if (x === undefined || x === null || x === 0) break; r += typeof x === 'number' ? String.fromCharCode(x & 255) : String(x); } return r; } function isDigit(c) { return c.length === 1 && c >= '0' && c <= '9'; } function toBig(x) { if (typeof x === 'bigint') return x; if (typeof x === 'boolean') return x ? 1n : 0n; x = Number(x); return isFinite(x) ? BigInt(Math.trunc(x)) : 0n; } function spaces(k) { return k > 0 ? new Array(k + 1).join(' ') : ''; } function zeros(k) { return k > 0 ? new Array(k + 1).join('0') : ''; } function numPad(sign, body, w, fl, zeroOK) { var len = sign.length + body.length; if (w <= len) return sign + body; if (fl.indexOf('-') >= 0) return sign + body + spaces(w - len); if (zeroOK && fl.indexOf('0') >= 0) return sign + zeros(w - len) + body; return spaces(w - len) + sign + body; } function fixedStr(a, p) { var s = a.toFixed(p), y = a * Math.pow(10, p), fl0 = Math.floor(y), d; if (p <= 40 && y < 9007199254740992 && y - fl0 === 0.5 && fl0 % 2 === 0) { d = String(fl0); while (d.length <= p) d = '0' + d; s = p > 0 ? d.slice(0, d.length - p) + '.' + d.slice(d.length - p) : d; } return s; } function fixExp(s) { var k = s.indexOf('e'), e = s.slice(k + 2); if (e.length < 2) e = '0' + e; return s.slice(0, k + 2) + e; } function stripZeros(t) { var k = t.indexOf('e'), m = k < 0 ? t : t.slice(0, k), ex = k < 0 ? '' : t.slice(k); if (m.indexOf('.') >= 0) { while (m.charAt(m.length - 1) === '0') m = m.slice(0, -1); if (m.charAt(m.length - 1) === '.') m = m.slice(0, -1); } return m + ex; } function write(t, fd) { if (!t) return; if (typeof process !== 'undefined' && process && process.stdout) { (fd === 2 && process.stderr ? process.stderr : process.stdout).write(t); return; } var g = globalThis, j; g.__ctjpend = (g.__ctjpend || '') + t; while ((j = g.__ctjpend.indexOf(NL)) >= 0) { console.log(g.__ctjpend.slice(0, j)); g.__ctjpend = g.__ctjpend.slice(j + 1); } } function next() { return ap.a[ap.i++]; } var f = toStr(fmt), out = '', i = 0, c, fl, w, pr, L, conv; while (i < f.length) { c = f.charAt(i++); if (c !== '%') { out += c; continue; } fl = ''; while (i < f.length && '-+ #0'.indexOf(f.charAt(i)) >= 0) fl += f.charAt(i++); w = 0; if (f.charAt(i) === '*') { w = Number(toBig(next())); i++; if (w < 0) { fl += '-'; w = -w; } } else { while (isDigit(f.charAt(i))) w = w * 10 + f.charCodeAt(i++) - 48; } pr = -1; if (f.charAt(i) === '.') { i++; pr = 0; if (f.charAt(i) === '*') { pr = Number(toBig(next())); i++; } else { while (isDigit(f.charAt(i))) pr = pr * 10 + f.charCodeAt(i++) - 48; } } L = ''; while (i < f.length && 'hlLqjzt'.indexOf(f.charAt(i)) >= 0) L += f.charAt(i++); conv = f.charAt(i++); if (conv === '') { out += '%'; break; } if (conv === '%') { out += '%'; continue; } if ('diuoxX'.indexOf(conv) >= 0) { var wide = L === 'll' || L === 'q' || L === 'j' || L === 'L'; var bits = wide ? 64 : L === 'hh' ? 8 : L === 'h' ? 16 : 32; var signed = conv === 'd' || conv === 'i'; var v = toBig(next()); v = signed ? BigInt.asIntN(bits, v) : BigInt.asUintN(bits, v); var neg = signed && v < 0n; var mag = neg ? -v : v; var ds = conv === 'o' ? mag.toString(8) : conv === 'x' ? mag.toString(16) : conv === 'X' ? mag.toString(16).toUpperCase() : mag.toString(10); if (pr >= 0) { if (pr === 0 && mag === 0n) ds = ''; while (ds.length < pr) ds = '0' + ds; } var pre = ''; if (neg) pre = '-'; else if (signed && fl.indexOf('+') >= 0) pre = '+'; else if (signed && fl.indexOf(' ') >= 0) pre = ' '; if (fl.indexOf('#') >= 0 && mag !== 0n) { if (conv === 'x') pre += '0x'; else if (conv === 'X') pre += '0X'; else if (conv === 'o' && ds.charAt(0) !== '0') ds = '0' + ds; } out += numPad(pre, ds, w, fl, pr < 0); } else if (conv === 'c') { out += numPad('', String.fromCharCode(Number(toBig(next()) & 255n)), w, fl, false); } else if (conv === 's') { var sv = toStr(next()); if (pr >= 0) sv = sv.slice(0, pr); out += numPad('', sv, w, fl, false); } else if (conv === 'p') { var pv = next(), ps; if (pv === null || pv === undefined) ps = '(nil)'; else { if (typeof pv === 'object' && pv.ctjAddr === undefined) { globalThis.__ctjaddr = (globalThis.__ctjaddr || 0) + 1; pv.ctjAddr = 4096 + 16 * globalThis.__ctjaddr; } ps = '0x' + (typeof pv === 'object' ? pv.ctjAddr : 0).toString(16); } out += numPad('', ps, w, fl, false); } else if ('fFeEgGaA'.indexOf(conv) >= 0) { var x = Number(next()); var p = pr < 0 ? 6 : pr; var sg = (x < 0 || (x === 0 && 1 / x < 0)) ? '-' : fl.indexOf('+') >= 0 ? '+' : fl.indexOf(' ') >= 0 ? ' ' : ''; var ax = Math.abs(x), t; if (x !== x) t = 'nan'; else if (ax === Infinity) t = 'inf'; else if (conv === 'f' || conv === 'F') t = fixedStr(ax, p); else if (conv === 'e' || conv === 'E') t = fixExp(ax.toExponential(p)); else { var P = p === 0 ? 1 : p; var es = ax.toExponential(P - 1); var X = parseInt(es.slice(es.indexOf('e') + 1), 10); t = X < -4 || X >= P ? fixExp(es) : fixedStr(ax, P - 1 - X); if (fl.indexOf('#') < 0) t = stripZeros(t); } if (conv === conv.toUpperCase()) t = t.toUpperCase(); out += numPad(sg, t, w, fl, isFinite(x)); } else if (conv === 'n') { var tg = next(); if (tg) tg.a[tg.i] = out.length; } else { out += '%' + conv; } } if (mode !== 0) { write(out, mode === 2 ? 2 : 1); return out.length; } if (dst && n > 0) { var m = Math.min(out.length, n - 1), k; for (k = 0; k < m; k++) dst.a[dst.i + k] = out.charCodeAt(k) & 255; dst.a[dst.i + m] = 0; } return out.length; } ))((0), (s), (n), (fmt), (ap)));
}
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function gnu_cxx_atomic_add_single(__mem, __val) {
  __mem.a[__mem.i] = (((((__mem.a[__mem.i]) + (__val)) | 0)) | 0);
}
function gnu_cxx_atomic_add_dispatch(__mem, __val) {
  gnu_cxx_atomic_add_single((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
}
function std_to_string__int(__val) {
  return gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(vsnprintf, ((Math.imul(((4) >>> 0), 4)) >>> 0), {a: [37, 100, 0], i: 0}, __val);
}
function std_to_string__unsigned_int(__val) {
  return gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(vsnprintf, ((Math.imul(((4) >>> 0), 4)) >>> 0), {a: [37, 117, 0], i: 0}, __val);
}
function std_to_string__long_long(__val) {
  return gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(vsnprintf, ((Math.imul(((4) >>> 0), 8)) >>> 0), {a: [37, 108, 108, 100, 0], i: 0}, __val);
}
function std_to_string__float(__val) {
  let __n = (((gnu_cxx_numeric_traits_floating_float.__max_exponent10) + (20)) | 0);
  return gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(vsnprintf, ((__n) >>> 0), {a: [37, 102, 0], i: 0}, __val);
}
function std_to_string__double(__val) {
  let __n = (((gnu_cxx_numeric_traits_floating_double.__max_exponent10) + (20)) | 0);
  return gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(vsnprintf, ((__n) >>> 0), {a: [37, 102, 0], i: 0}, __val);
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
  let $t31;
  return std_ostream_insert_char_std_char_traits_char(__os, ($t31 = (__str.a[__str.i]).data__c(), $t31 ? {a: $t31.a, i: $t31.i} : null), (((__str.a[__str.i]).size__c()) | 0));
}
function main() {
  let a = std_to_string__int(42);
  let b = std_to_string__long_long(BigInt.asIntN(64, -(7n)));
  let c = std_to_string__double(3.5);
  let d = std_to_string__long_long(1234567890123n);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator_char_std_char_traits_char_std_allocator_char(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char(std_operator__std_basic_ostream_char_std_char_traits_char_R_charP(std_operator_char_std_char_traits_char_std_allocator_char({a: std_cout, i: "v"}, {a: [a], i: 0}), {a: [32, 0], i: 0}), {a: [b], i: 0}), {a: [32, 0], i: 0}), {a: [c], i: 0}), {a: [32, 0], i: 0}), {a: [d], i: 0}), {a: [32, 0], i: 0}), {a: [std_to_string__unsigned_int(0)], i: 0}), {a: [std_endl], i: 0});
  let e = std_to_string__float(2.5);
  std_operator__std_basic_ostream_char_std_char_traits_char_R_std_Ios_opR(std_operator_char_std_char_traits_char_std_allocator_char({a: std_cout, i: "v"}, {a: [e], i: 0}), {a: [std_endl], i: 0});
  return 0;
}
function gnu_cxx_to_xstring_std_basic_string_char_std_char_traits_char_std_allocator_char_char(__convf, __n, __fmt, ...$p3_rest) {
  let $t32, $t33;
  let __s = ($t32 = {a: new Array(((Math.imul(1, __n)) >>> 0)).fill(0), i: 0}, $t32 ? {a: $t32.a, i: $t32.i} : null);
  let __args = null;
  (__args = {a: $p3_rest, i: 0}, undefined);
  let __len = __convf((__s ? {a: __s.a, i: __s.i} : null), __n, (__fmt ? {a: __fmt.a, i: __fmt.i} : null), (__args ? {a: __args.a, i: __args.i} : null));
  (__args, undefined);
  return new std_basic_string_char_std_char_traits_char_std_allocator_char((__s ? {a: __s.a, i: __s.i} : null), ($t33 = ({a: (__s ? __s.a : null), i: (__s ? __s.i : 0) + (__len)}), $t33 ? {a: $t33.a, i: $t33.i} : null), {a: [new std_allocator_char()], i: 0});
}
function std_ostream_insert_char_std_char_traits_char(__out, __s, __n) {
  (__out.a[__out.i])._M_put(7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
  return __out;
}
function std_operator_6_char_char($p0, $p1) {
  return true;
}
let std_piecewise_construct = new std_piecewise_construct_t();
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
let std_cin = new std_basic_istream_char_std_char_traits_char(0);
main();
