"use strict";
return {
  run($input = "") {
    const $io = {
      inp: { s: $input == null ? "" : String($input), p: 0 },
      out: "", err: "", log: "", vf: null, addr: 0,
      write(fd, t) {
        if (fd === 2) this.err += t;
        else if (fd === 3) this.log += t;
        else this.out += t;
      },
    };
    const console = {
      log: (...a) => $io.write(1, a.map(String).join(" ") + "\n"),
      error: (...a) => $io.write(2, a.map(String).join(" ") + "\n"),
    };
    let $rc = 0;
    try {
      class _ZSt21piecewise_construct_t {
        constructor(...$a) {
          this.__init__ZSt21piecewise_construct_t(...$a);
        }
        __init__ZSt21piecewise_construct_t(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt21piecewise_construct_t)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt18input_iterator_tag {
        __init__ZSt18input_iterator_tag(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20forward_iterator_tag extends _ZSt18input_iterator_tag {
        constructor(...$a) {
          super();
          this.__init__ZSt20forward_iterator_tag(...$a);
        }
        __init__ZSt20forward_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt18input_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26bidirectional_iterator_tag extends _ZSt20forward_iterator_tag {
        constructor(...$a) {
          super();
          this.__init__ZSt26bidirectional_iterator_tag(...$a);
        }
        __init__ZSt26bidirectional_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt20forward_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26random_access_iterator_tag extends _ZSt26bidirectional_iterator_tag {
        constructor(...$a) {
          super();
          this.__init__ZSt26random_access_iterator_tag(...$a);
        }
        __init__ZSt26random_access_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt26bidirectional_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _Z8_IO_FILE {
        __fd;
        __dummy;
        constructor(...$a) {
          this.__init__Z8_IO_FILE(...$a);
        }
        __init__Z8_IO_FILE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z8_IO_FILE)) {
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
      class _Z12$24class_149 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_149(...$a);
        }
        __init__Z12$24class_149(...$a) {
          this.__count = 0;
          this.__value = 0;
        }
        __dtor() {
        }
      }
      class _ZSt8ios_base {
        _M_flags;
        _M_width;
        _M_precision;
        _M_fill;
        constructor(...$a) {
          this.__init__ZSt8ios_base(...$a);
        }
        __init__ZSt8ios_base(...$a) {
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
      class _ZSt8_Ios_fmt {
        _M_mask;
        _M_value;
        constructor(...$a) {
          this.__init__ZSt8_Ios_fmt(...$a);
        }
        __init__ZSt8_Ios_fmt(...$a) {
          this._M_mask = $a[0];
          this._M_value = $a[1];
        }
        __dtor() {
        }
      }
      class _ZSt8_Ios_arg {
        _M_kind;
        _M_value;
        constructor(...$a) {
          this.__init__ZSt8_Ios_arg(...$a);
        }
        __init__ZSt8_Ios_arg(...$a) {
          this._M_kind = 0;
          this._M_value = 0;
        }
        __dtor() {
        }
      }
      class _ZSt7_Ios_op {
        _M_kind;
        constructor(...$a) {
          this.__init__ZSt7_Ios_op(...$a);
        }
        __init__ZSt7_Ios_op(...$a) {
          this._M_kind = $a[0];
        }
        __dtor() {
        }
      }
      class _ZSt9nothrow_t {
        constructor(...$a) {
          this.__init__ZSt9nothrow_t(...$a);
        }
        __init__ZSt9nothrow_t(...$a) {
        }
        __dtor() {
        }
      }
      class _Z5lconv {
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
          this.__init__Z5lconv(...$a);
        }
        __init__Z5lconv(...$a) {
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
      class _ZSt11__hash_baseImeE {
        __init__ZSt11__hash_baseImeE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashIeE extends _ZSt11__hash_baseImeE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashIeE(...$a);
        }
        __init__ZSt4hashIeE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImeE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIcE {
        __init__ZSt11char_traitsIcE(...$a) { }
        __dtor() {
        }
        static _ZNSt11char_traitsIcE6assignERcRKc(__c1, __c2) {
          __c1.a[__c1.i] = __c2.a[__c2.i];
        }
        static _ZNSt11char_traitsIcE6assignEPcmc(__s, __n, __a) {
          let $t0;
          return ($t0 = (($d, $c, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $c & 255; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s), __a, __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
        static _ZNSt11char_traitsIcE4moveEPcPKcm(__s1, __s2, __n) {
          let $t1;
          return ($t1 = (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t1 ? {a: $t1.a, i: $t1.i} : null);
        }
        static _ZNSt11char_traitsIcE4copyEPcPKcm(__s1, __s2, __n) {
          let $t2;
          return ($t2 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13new_allocatorIcEE(...$a);
        }
        __init__ZN9__gnu_cxx13new_allocatorIcEE(...$a) {
        }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIcE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t3;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZNK9__gnu_cxx13new_allocatorIcE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t3 = _Znwm(((Math.imul(__n, 1)) >>> 0)), $t3 ? {a: $t3.a, i: $t3.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorIcE10deallocateEPcm(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorIcE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (1))) >>> 0);
        }
      }
      class _ZSt9allocatorIcE extends _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIcE) ? [$a[0]] : []));
          this.__init__ZSt9allocatorIcE(...$a);
        }
        __init__ZSt9allocatorIcE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIcE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIcEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE extends _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(...$a) {
        }
        __dtor() {
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_Rep_baseE.prototype.__dtor.call(this);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_sharedEv() {
          return (this._M_refcount > 0);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv() {
          this._M_refcount = 0;
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm(__n) {
          let $t4;
           {
            _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(this);
            this._M_length = __n;
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc({a: (($t4 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t4)).a, i: (($t4 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t4)).i + (__n)}, {a: _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE, i: "_S_terminal"});
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv() {
          let $t5, $t6;
          return ($t6 = ($t5 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t5 ? $t5.a : null), i: ($t5 ? $t5.i : 0) + (1)})), $t6 ? {a: $t6.a, i: $t6.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__capacity, __old_capacity, __alloc) {
          let $t7, $t8;
          if ((__capacity > _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size)) {
            _ZSt20__throw_length_errorPKc({a: [98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 58, 58, 95, 83, 95, 99, 114, 101, 97, 116, 101, 0], i: 0});
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
              if ((__capacity > _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size)) {
                __capacity = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._S_max_size;
              }
              __size = (((((Math.imul((((__capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0)) + (12)) >>> 0);
            }
          }
          let __place = ($t7 = _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE8allocateEmPKv.call(__alloc.a[__alloc.i], __size, {a: [0], i: 0}), $t7 ? {a: $t7.a, i: $t7.i} : null);
          let __p = ($t8 = (__place.a[__place.i] = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t8 ? {a: $t8.a, i: $t8.i} : null);
          (__p.a[__p.i])._M_capacity = __capacity;
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(__p.a[__p.i]);
          return (__p ? {a: __p.a, i: __p.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_disposeERKS3_(__a) {
           {
            if ((_ZN9__gnu_cxx27__exchange_and_add_dispatchEPii((({a: this, i: "_M_refcount"}) ? {a: ({a: this, i: "_M_refcount"}).a, i: ({a: this, i: "_M_refcount"}).i} : null), ((-(1)) | 0)) <= 0)) {
               {
                this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_(__a);
              }
            }
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_(__a) {
          let __size = (((12) + (((Math.imul((((this._M_capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0))) >>> 0);
          _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE10deallocateEPcm.call(__a.a[__a.i], {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep8_M_cloneERKS3_m(__alloc, __res = ((0) >>> 0)) {
          let $t9, $t10, $t11, $t12;
          let __requested_cap = (((this._M_length) + (__res)) >>> 0);
          let __r = ($t9 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__requested_cap, this._M_capacity, __alloc), $t9 ? {a: $t9.a, i: $t9.i} : null);
          if (this._M_length) {
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t10 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t10 ? {a: $t10.a, i: $t10.i} : null), ($t11 = this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv(), $t11 ? {a: $t11.a, i: $t11.i} : null), this._M_length);
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(__r.a[__r.i], this._M_length);
          return ($t12 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t12 ? {a: $t12.a, i: $t12.i} : null);
        }
        static _S_max_size = 1073741820;
        static _S_terminal = 0;
        static _S_empty_rep_storage = null;
      }
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE extends _ZSt9allocatorIcE {
        _M_p;
        constructor(...$a) {
          super(...[$a[1]]);
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a) {
          this._M_p = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
        }
        __dtor() {
          _ZSt9allocatorIcE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE {
        _M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE(...$a);
        }
        __init__ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE(...$a) {
          let $t13;
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(($t13 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructEmcRKS3_(0, 0, {a: [new _ZSt9allocatorIcE()], i: 0}), $t13 ? {a: $t13.a, i: $t13.i} : null), {a: [new _ZSt9allocatorIcE()], i: 0});
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
        }
        __dtor() {
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv() {
          return (this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p ? {a: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.a, i: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEPc(__p) {
          let $t14;
          return ($t14 = this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p = (__p ? {a: __p.a, i: __p.i} : null), $t14 ? {a: $t14.a, i: $t14.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv() {
          let $t15, $t16;
          return ($t16 = {a: (($t15 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t15)).a, i: (($t15 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t15)).i + (((-(1)) | 0))}, $t16 ? {a: $t16.a, i: $t16.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(__d, __s, __n) {
          if ((__n === ((1) >>> 0))) {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc(__d, __s);
          }
          else {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE4copyEPcPKcm((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
          }
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_moveEPcPKcm(__d, __s, __n) {
          if ((__n === ((1) >>> 0))) {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc(__d, __s);
          }
          else {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE4moveEPcPKcm((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
          }
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_M_assignEPcmc(__d, __n, __c) {
          __c = {v: __c};
          if ((__n === ((1) >>> 0))) {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc(__d, {a: __c, i: "v"});
          }
          else {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignEPcmc((__d ? {a: __d.a, i: __d.i} : null), __n, __c.v);
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_M_mutateEmmm(__pos, __len1, __len2) {
          let $t17, $t18, $t19, $t20, $t21, $t22, $t23, $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38, $t39, $t40, $t41, $t42, $t43;
          let __old_size = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this);
          let __new_size = ((((((__old_size) + (__len2)) >>> 0)) - (__len1)) >>> 0);
          let __how_much = ((((((__old_size) - (__pos)) >>> 0)) - (__len1)) >>> 0);
          if (((__new_size > _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE8capacityEv.call(this)) || _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_sharedEv.call(($t17 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t17.a[$t17.i])))) {
             {
              let __a = {v: this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv()};
              let __r = ($t18 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__new_size, _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE8capacityEv.call(this), {a: __a, i: "v"}), $t18 ? {a: $t18.a, i: $t18.i} : null);
              if (__pos) {
                _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t19 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t19 ? {a: $t19.a, i: $t19.i} : null), ($t20 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t20 ? {a: $t20.a, i: $t20.i} : null), __pos);
              }
              if (__how_much) {
                _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t25 = ($t24 = ($t23 = ($t22 = ($t21 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t21), ({a: ($t22 ? $t22.a : null), i: ($t22 ? $t22.i : 0) + (__pos)})), $t23), ({a: ($t24 ? $t24.a : null), i: ($t24 ? $t24.i : 0) + (__len2)})), $t25 ? {a: $t25.a, i: $t25.i} : null), ($t30 = ($t29 = ($t28 = ($t27 = ($t26 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t26), ({a: ($t27 ? $t27.a : null), i: ($t27 ? $t27.i : 0) + (__pos)})), $t28), ({a: ($t29 ? $t29.a : null), i: ($t29 ? $t29.i : 0) + (__len1)})), $t30 ? {a: $t30.a, i: $t30.i} : null), __how_much);
              }
              _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_disposeERKS3_.call(($t31 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t31.a[$t31.i]), {a: __a, i: "v"});
              this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEPc(($t32 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t32 ? {a: $t32.a, i: $t32.i} : null));
            }
          }
          else {
            if ((__how_much && (__len1 !== __len2))) {
               {
                _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_moveEPcPKcm(($t37 = ($t36 = ($t35 = ($t34 = ($t33 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t33), ({a: ($t34 ? $t34.a : null), i: ($t34 ? $t34.i : 0) + (__pos)})), $t35), ({a: ($t36 ? $t36.a : null), i: ($t36 ? $t36.i : 0) + (__len2)})), $t37 ? {a: $t37.a, i: $t37.i} : null), ($t42 = ($t41 = ($t40 = ($t39 = ($t38 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t38), ({a: ($t39 ? $t39.a : null), i: ($t39 ? $t39.i : 0) + (__pos)})), $t40), ({a: ($t41 ? $t41.a : null), i: ($t41 ? $t41.i : 0) + (__len1)})), $t42 ? {a: $t42.a, i: $t42.i} : null), __how_much);
              }
            }
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(($t43 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t43.a[$t43.i]), __new_size);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv() {
          let $t44;
          return (($t44 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t44.a[$t44.i]))._M_length;
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE8capacityEv() {
          let $t45;
          return (($t45 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t45.a[$t45.i]))._M_capacity;
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7reserveEm(__res = ((0) >>> 0)) {
          let $t46, $t47, $t48, $t49;
          if (((__res !== _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE8capacityEv.call(this)) || _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_sharedEv.call(($t46 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t46.a[$t46.i])))) {
             {
              if ((__res < _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this))) {
                __res = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this);
              }
              let __a = {v: this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv()};
              let __tmp = ($t48 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep8_M_cloneERKS3_m.call(($t47 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t47.a[$t47.i]), {a: __a, i: "v"}, (((__res) - (_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this))) >>> 0)), $t48 ? {a: $t48.a, i: $t48.i} : null);
              _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_disposeERKS3_.call(($t49 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t49.a[$t49.i]), {a: __a, i: "v"});
              this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEPc((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
            }
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE5clearEv() {
          this._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_M_mutateEmmm(((0) >>> 0), _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this), ((0) >>> 0));
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9push_backEc(__c) {
          let $t50, $t51, $t52;
          __c = {v: __c};
          let __len = (((((1) >>> 0)) + (_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this))) >>> 0);
          if (((__len > _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE8capacityEv.call(this)) || _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep12_M_is_sharedEv.call(($t50 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t50.a[$t50.i])))) {
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7reserveEm.call(this, __len);
          }
          _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc({a: (($t51 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t51)).a, i: (($t51 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t51)).i + (_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(this))}, {a: __c, i: "v"});
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(($t52 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t52.a[$t52.i]), __len);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructEmcRKS3_(__n, __c, __a) {
          let $t53, $t54, $t55;
          let __r = ($t53 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__n, ((0) >>> 0), __a), $t53 ? {a: $t53.a, i: $t53.i} : null);
          if (__n) {
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9_M_assignEPcmc(($t54 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t54 ? {a: $t54.a, i: $t54.i} : null), __n, __c);
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(__r.a[__r.i], __n);
          return ($t55 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t55 ? {a: $t55.a, i: $t55.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv() {
          let $t56;
          return ($t56 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t56 ? {a: $t56.a, i: $t56.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE13get_allocatorEv() {
          return new _ZSt9allocatorIcE({a: this, i: "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE"});
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIcE6rebindIcEE {
        __init__ZNSt9allocatorIcE6rebindIcEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPcSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE extends _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIwE {
        __init__ZSt11char_traitsIwE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIwEE {
        __init__ZN9__gnu_cxx13new_allocatorIwEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIwE extends _ZN9__gnu_cxx13new_allocatorIwEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIwE(...$a);
        }
        __init__ZSt9allocatorIwE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIwEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE extends _ZSt9allocatorIwE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIwE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE {
        _M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE(...$a);
        }
        __init__ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE = new _ZNSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIwE6rebindIwEE {
        __init__ZNSt9allocatorIwE6rebindIwEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPwSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE extends _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIwSt11char_traitsIwESt9allocatorIwEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIDsE {
        __init__ZSt11char_traitsIDsE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIDsEE {
        __init__ZN9__gnu_cxx13new_allocatorIDsEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIDsE extends _ZN9__gnu_cxx13new_allocatorIDsEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIDsE(...$a);
        }
        __init__ZSt9allocatorIDsE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIDsEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE extends _ZSt9allocatorIDsE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIDsE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE {
        _M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE(...$a);
        }
        __init__ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE = new _ZNSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIDsE6rebindIDsEE {
        __init__ZNSt9allocatorIDsE6rebindIDsEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPDsSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE extends _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIDsSt11char_traitsIDsESt9allocatorIDsEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIDiE {
        __init__ZSt11char_traitsIDiE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIDiEE {
        __init__ZN9__gnu_cxx13new_allocatorIDiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIDiE extends _ZN9__gnu_cxx13new_allocatorIDiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIDiE(...$a);
        }
        __init__ZSt9allocatorIDiE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIDiEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE extends _ZSt9allocatorIDiE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIDiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE {
        _M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE(...$a);
        }
        __init__ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE = new _ZNSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIDiE6rebindIDiEE {
        __init__ZNSt9allocatorIDiE6rebindIDiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPDiSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE {
        __init__ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE extends _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a);
        }
        __init__ZSt4hashISt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE(...$a) {
        }
        __dtor() {
          _ZSt11__hash_baseImSt12basic_stringIDiSt11char_traitsIDiESt9allocatorIDiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13basic_ostreamIcSt11char_traitsIcEE extends _ZSt8ios_base {
        _M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE;
        _M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13basic_ostreamIcSt11char_traitsIcEE(...$a);
        }
        __init__ZSt13basic_ostreamIcSt11char_traitsIcEE(...$a) {
          this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE = ($a[0] === undefined ? (((1) | 0)) : $a[0]);
          this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE = null;
        }
        __dtor() {
          _ZSt8ios_base.prototype.__dtor.call(this);
        }
        _ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl(__k, __v, __s, __n) {
          ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(t)$io.write(fd,t);})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE)));
          this._M_width = 0;
        }
      }
      class _ZSt13basic_istreamIcSt11char_traitsIcEE extends _ZSt8ios_base {
        _M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE;
        _M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13basic_istreamIcSt11char_traitsIcEE(...$a);
        }
        __init__ZSt13basic_istreamIcSt11char_traitsIcEE(...$a) {
          this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE = null;
          this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE = 0;
        }
        __dtor() {
          _ZSt8ios_base.prototype.__dtor.call(this);
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(__s) {
          this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE = (((this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE) | (__s)) | 0);
        }
        _ZNKSt13basic_istreamIcSt11char_traitsIcEE3eofEv() {
          return ((((this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE) & (2)) | 0) !== 0);
        }
        _ZNKSt13basic_istreamIcSt11char_traitsIcEE4failEv() {
          return ((((this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE) & (5)) | 0) !== 0);
        }
        _ZNKSt13basic_istreamIcSt11char_traitsIcEEcvbEv() {
          return (!(this._ZNKSt13basic_istreamIcSt11char_traitsIcEE4failEv()));
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE7_M_peekEv() {
          return ((function(){var q=$io.inp;return q.p<q.s.length?q.s.charCodeAt(q.p):-1})());
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv() {
          let __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE7_M_peekEv();
          if ((__c < 0)) {
            this._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(_ZSt8ios_base.eofbit);
          }
          return __c;
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv() {
          return ((function(){var q=$io.inp;return q.p<q.s.length?q.s.charCodeAt(q.p++):-1})());
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE13_M_skip_spaceEv() {
          let __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv();
          while (((__c === 32) || ((__c >= 9) && (__c <= 13)))) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv();
              __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv();
            }
          }
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv() {
          let __v = 0n;
          this._ZNSt13basic_istreamIcSt11char_traitsIcEE13_M_skip_spaceEv();
          let __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv();
          if ((__c < 0)) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(_ZSt8ios_base.failbit);
              return 0n;
            }
          }
          let __neg = false;
          if (((__c === 43) || (__c === 45))) {
             {
              __neg = (__c === 45);
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv();
              __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv();
            }
          }
          if (((__c < 48) || (__c > 57))) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(_ZSt8ios_base.failbit);
              return 0n;
            }
          }
          while (((__c >= 48) && (__c <= 57))) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv();
              __v = BigInt.asIntN(64, (BigInt.asIntN(64, (__v) * (10n))) + (BigInt((((__c) - (48)) | 0))));
              __c = this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv();
            }
          }
          return (__neg ? BigInt.asIntN(64, -(__v)) : __v);
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE14_M_read_doubleEv() {
          this._ZNSt13basic_istreamIcSt11char_traitsIcEE13_M_skip_spaceEv();
          if ((this._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv() < 0)) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(_ZSt8ios_base.failbit);
              return 0;
            }
          }
          let __v = ((function(){var q=$io.inp,s=q.s,e,t;function w(c){return c===32||(c>=9&&c<=13)}while(q.p<s.length&&w(s.charCodeAt(q.p)))q.p++;e=q.p;while(e<s.length&&!w(s.charCodeAt(e)))e++;t=s.slice(q.p,e);if(!/^[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)([eE][+-]?[0-9]+)?$/.test(t))return NaN;q.p=e;return Number(t)})());
          if ((__v !== __v)) {
             {
              this._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(_ZSt8ios_base.failbit);
              return 0;
            }
          }
          return __v;
        }
      }
      class _ZSt16initializer_listIcE {
        _M_array$_ZSt16initializer_listIcE;
        _M_len$_ZSt16initializer_listIcE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listIcE(...$a);
        }
        __init__ZSt16initializer_listIcE(...$a) {
          this._M_array$_ZSt16initializer_listIcE = null;
          this._M_len$_ZSt16initializer_listIcE = 0;
        }
        __dtor() {
        }
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 6, (__n ? ((1) | 0) : ((0) | 0)), null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 4, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(__os, __c) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 5, __c, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(__os, __s) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(__os, __m) {
        if (((__m.a[__m.i])._M_kind === 0)) {
          _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 8, 10, null, 0);
        }
        else {
          if (((__m.a[__m.i])._M_kind === 1)) {
            _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 8, 0, null, 0);
          }
          else {
            _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 9, 0, null, 0);
          }
        }
        return __os;
      }
      function _ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(__os, __str) {
        let $t57;
        return _ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIcS0_ES1_PKcl(__os, ($t57 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv.call(__str.a[__str.i]), $t57 ? {a: $t57.a, i: $t57.i} : null), ((_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(__str.a[__str.i])) | 0));
      }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZN9__gnu_cxx25__exchange_and_add_singleEPii(__mem, __val) {
        let __result = __mem.a[__mem.i];
        __mem.a[__mem.i] = (((((__mem.a[__mem.i]) + (__val)) | 0)) | 0);
        return __result;
      }
      function _ZN9__gnu_cxx27__exchange_and_add_dispatchEPii(__mem, __val) {
        return _ZN9__gnu_cxx25__exchange_and_add_singleEPii((__mem ? {a: __mem.a, i: __mem.i} : null), __val);
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(__in, __v) {
        __v.a[__v.i] = Number(BigInt.asIntN(32, _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv.call(__in.a[__in.i])));
        return __in;
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERd(__in, __v) {
        __v.a[__v.i] = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE14_M_read_doubleEv.call(__in.a[__in.i]);
        return __in;
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERc(__in, __c) {
        _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE13_M_skip_spaceEv.call(__in.a[__in.i]);
        let __x = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv.call(__in.a[__in.i]);
        if ((__x < 0)) {
          _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi.call(__in.a[__in.i], _ZSt8ios_base.failbit);
        }
        else {
           {
            _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv.call(__in.a[__in.i]);
            __c.a[__c.i] = (((__x) << 24) >> 24);
          }
        }
        return __in;
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEE(__in, __s) {
        _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE5clearEv.call(__s.a[__s.i]);
        _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE13_M_skip_spaceEv.call(__in.a[__in.i]);
        let __c = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv.call(__in.a[__in.i]);
        if ((__c < 0)) {
           {
            _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi.call(__in.a[__in.i], _ZSt8ios_base.failbit);
            return __in;
          }
        }
        while (((__c >= 0) && (!(((__c === 32) || ((__c >= 9) && (__c <= 13))))))) {
           {
            _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv.call(__in.a[__in.i]);
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9push_backEc.call(__s.a[__s.i], (((__c) << 24) >> 24));
            __c = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv.call(__in.a[__in.i]);
          }
        }
        return __in;
      }
      function _ZSt7getlineRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEEc(__in, __s, __delim) {
        let $t58;
        _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE5clearEv.call(__s.a[__s.i]);
        let __got = 0;
        while (true) {
           {
            let __c = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_peek_eofEv.call(__in.a[__in.i]);
            if ((__c < 0)) {
              break;
            }
            _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE6_M_getEv.call(__in.a[__in.i]);
            ($t58 = __got, __got = (($t58 + 1) | 0), $t58);
            if ((__c === __delim)) {
              break;
            }
            _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE9push_backEc.call(__s.a[__s.i], (((__c) << 24) >> 24));
          }
        }
        if ((__got === 0)) {
          _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi.call(__in.a[__in.i], _ZSt8ios_base.failbit);
        }
        return __in;
      }
      function _ZSt7getlineRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEE(__in, __s) {
        return _ZSt7getlineRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEEc(__in, __s, (((10) << 24) >> 24));
      }
      function main() {
        let $t59;
        let a = {v: 0};
        let b = {v: 0};
        let d = {v: 0};
        let w = {v: new _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE()};
        let c = {v: 0};
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(_ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: a, i: "v"}), {a: b, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, (((a.v) + (b.v)) | 0)), {a: [_ZSt4endl], i: 0});
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERd({a: _ZSt3cin, i: "v"}, {a: d, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd({a: _ZSt4cout, i: "v"}, (d.v * 2)), {a: [_ZSt4endl], i: 0});
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEE({a: _ZSt3cin, i: "v"}, {a: w, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [91, 0], i: 0}), {a: w, i: "v"}), {a: [93, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERc({a: _ZSt3cin, i: "v"}, {a: c, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [99, 61, 0], i: 0}), c.v), {a: [_ZSt4endl], i: 0});
        let line = {v: new _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE()};
        _ZSt7getlineRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEE({a: _ZSt3cin, i: "v"}, {a: line, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [114, 101, 115, 116, 61, 91, 0], i: 0}), {a: line, i: "v"}), {a: [93, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZSt7getlineRSt13basic_istreamIcSt11char_traitsIcEERSt12basic_stringIcS2_St9allocatorIcEE({a: _ZSt3cin, i: "v"}, {a: line, i: "v"});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [108, 105, 110, 101, 50, 61, 91, 0], i: 0}), {a: line, i: "v"}), {a: [93, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        let z = {v: 0};
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ((($t59 = _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: z, i: "v"}), $t59.a[$t59.i]))._ZNKSt13basic_istreamIcSt11char_traitsIcEEcvbEv() ? ((1) | 0) : ((0) | 0))), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb({a: _ZSt4cout, i: "v"}, _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNKSt13basic_istreamIcSt11char_traitsIcEE3eofEv.call(_ZSt3cin.v)), {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function _ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIcS0_ES1_PKcl(__out, __s, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__out.a[__out.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), __n);
        return __out;
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
      let _Z16__ctj_stdin_file = {v: new _Z8_IO_FILE(0, 0)};
      let _Z17__ctj_stdout_file = {v: new _Z8_IO_FILE(1, 0)};
      let _Z17__ctj_stderr_file = {v: new _Z8_IO_FILE(2, 0)};
      let _Z5stdin = (({a: _Z16__ctj_stdin_file, i: "v"}) ? {a: ({a: _Z16__ctj_stdin_file, i: "v"}).a, i: ({a: _Z16__ctj_stdin_file, i: "v"}).i} : null);
      let _Z6stdout = (({a: _Z17__ctj_stdout_file, i: "v"}) ? {a: ({a: _Z17__ctj_stdout_file, i: "v"}).a, i: ({a: _Z17__ctj_stdout_file, i: "v"}).i} : null);
      let _Z6stderr = (({a: _Z17__ctj_stderr_file, i: "v"}) ? {a: ({a: _Z17__ctj_stderr_file, i: "v"}).a, i: ({a: _Z17__ctj_stderr_file, i: "v"}).i} : null);
      let _ZSt9boolalpha = new _ZSt8_Ios_fmt(1, 1);
      let _ZSt11noboolalpha = new _ZSt8_Ios_fmt(1, 0);
      let _ZSt3dec = new _ZSt8_Ios_fmt(74, 2);
      let _ZSt3hex = new _ZSt8_Ios_fmt(74, 8);
      let _ZSt3oct = new _ZSt8_Ios_fmt(74, 64);
      let _ZSt4left = new _ZSt8_Ios_fmt(176, 32);
      let _ZSt5right = new _ZSt8_Ios_fmt(176, 128);
      let _ZSt4endl = new _ZSt7_Ios_op(0);
      let _ZSt4ends = new _ZSt7_Ios_op(1);
      let _ZSt5flush = new _ZSt7_Ios_op(2);
      let _ZSt4cout = {v: new _ZSt13basic_ostreamIcSt11char_traitsIcEE(1)};
      let _ZSt4cerr = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(2);
      let _ZSt4clog = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(3);
      let _ZSt3cin = {v: new _ZSt13basic_istreamIcSt11char_traitsIcEE(0)};
      $rc = main() | 0;
    } catch (e) {
      if (typeof e === "object" && e !== null && "$exit" in e) $rc = e.$exit;
      else {
        $io.err += String(e && e.message !== undefined ? e.message : e) + "\n";
        $rc = 1;
      }
    }
    return { stdout: $io.out, stderr: $io.err, stdlog: $io.log, exitCode: $rc };
  },
};
