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
      class _ZSt11__true_type {
        __init__ZSt11__true_type(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12__false_type {
        constructor(...$a) {
          this.__init__ZSt12__false_type(...$a);
        }
        __init__ZSt12__false_type(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt12__false_type)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
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
        constructor(...$a) {
          this.__init__ZSt18input_iterator_tag(...$a);
        }
        __init__ZSt18input_iterator_tag(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt20forward_iterator_tag extends _ZSt18input_iterator_tag {
        constructor(...$a) {
          super(...[]);
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
          super(...[]);
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
          super(...[]);
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
        _ZNSt8ios_base5widthEi(__w) {
          let __old = this._M_width;
          this._M_width = __w;
          return __old;
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
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt8_Ios_fmt)) {
            this._M_mask = (($a[0]).a[($a[0]).i])._M_mask;
            this._M_value = (($a[0]).a[($a[0]).i])._M_value;
          }
          else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
            this._M_mask = $a[0];
            this._M_value = $a[1];
          }
          else { throw new Error("no matching constructor"); }
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
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt8_Ios_arg)) {
            this._M_kind = (($a[0]).a[($a[0]).i])._M_kind;
            this._M_value = (($a[0]).a[($a[0]).i])._M_value;
          }
          else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
            this._M_kind = $a[0];
            this._M_value = $a[1];
          }
          else { throw new Error("no matching constructor"); }
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
        static _ZNSt11char_traitsIcE6lengthEPKc(__s) {
          return (($s) => { let $i = $s.i; while ($s.a[$i]) $i++; return $i - $s.i; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s));
        }
        static _ZNSt11char_traitsIcE4copyEPcPKcm(__s1, __s2, __n) {
          let $t0;
          return ($t0 = (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s1), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__s2), __n), $t0 ? {a: $t0.a, i: $t0.i} : null);
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
          let $t1;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZNK9__gnu_cxx13new_allocatorIcE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t1 = _Znwm(((Math.imul(__n, 1)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
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
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv() {
          this._M_refcount = 0;
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm(__n) {
          let $t2;
           {
            _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(this);
            this._M_length = __n;
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc({a: (($t2 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t2)).a, i: (($t2 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(this), $t2)).i + (__n)}, {a: _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE, i: "_S_terminal"});
          }
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv() {
          let $t3, $t4;
          return ($t4 = ($t3 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, ({a: ($t3 ? $t3.a : null), i: ($t3 ? $t3.i : 0) + (1)})), $t4 ? {a: $t4.a, i: $t4.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__capacity, __old_capacity, __alloc) {
          let $t5, $t6;
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
          let __place = ($t5 = _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE8allocateEmPKv.call(__alloc.a[__alloc.i], __size, {a: [0], i: 0}), $t5 ? {a: $t5.a, i: $t5.i} : null);
          let __p = ($t6 = (__place.a[__place.i] = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE(), __place.a[__place.i].ctj_a = __place.a, __place.a[__place.i].ctj_i = __place.i, {a: __place.a, i: __place.i}), $t6 ? {a: $t6.a, i: $t6.i} : null);
          (__p.a[__p.i])._M_capacity = __capacity;
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep15_M_set_sharableEv.call(__p.a[__p.i]);
          return (__p ? {a: __p.a, i: __p.i} : null);
        }
        _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_(__a) {
          let __size = (((12) + (((Math.imul((((this._M_capacity) + (((1) >>> 0))) >>> 0), 1)) >>> 0))) >>> 0);
          _ZN9__gnu_cxx13new_allocatorIcEE.prototype._ZN9__gnu_cxx13new_allocatorIcE10deallocateEPcm.call(__a.a[__a.i], {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, __size);
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
          let $t7, $t8;
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(($t8 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null), ($t7 = ($a[0] ? ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (_ZSt11char_traitsIcE._ZNSt11char_traitsIcE6lengthEPKc((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)))}) : ({a: (($a[0]) ? (($a[0])).a : null), i: (($a[0]) ? (($a[0])).i : 0) + (_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.npos)})), $t7 ? {a: $t7.a, i: $t7.i} : null), ($a[1] === undefined ? ({a: [new _ZSt9allocatorIcE()], i: 0}) : $a[1])), $t8 ? {a: $t8.a, i: $t8.i} : null), ($a[1] === undefined ? ({a: [new _ZSt9allocatorIcE()], i: 0}) : $a[1]));
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
        }
        __dtor() {
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv() {
          return (this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p ? {a: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.a, i: this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._M_p.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv() {
          let $t9, $t10;
          return ($t10 = {a: (($t9 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t9)).a, i: (($t9 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t9)).i + (((-(1)) | 0))}, $t10 ? {a: $t10.a, i: $t10.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(__d, __s, __n) {
          if ((__n === ((1) >>> 0))) {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE6assignERcRKc(__d, __s);
          }
          else {
            _ZSt11char_traitsIcE._ZNSt11char_traitsIcE4copyEPcPKcm((__d ? {a: __d.a, i: __d.i} : null), (__s ? {a: __s.a, i: __s.i} : null), __n);
          }
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv() {
          let $t11;
          return (($t11 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE6_M_repEv(), $t11.a[$t11.i]))._M_length;
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_(__beg, __end, __a) {
          let $t12;
          return ($t12 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE16_S_construct_auxIPcEES5_S5_S5_RKS3_St12__false_type((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new _ZSt12__false_type()), $t12 ? {a: $t12.a, i: $t12.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_St18input_iterator_tag(__beg, __end, __a, $p3) {
          let $t13, $t14, $t15, $t16, $t17, $t18, $t19, $t20, $t21;
          let __buf = new Array(128).fill(0);
          let __len = ((0) >>> 0);
          while (((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i))) && (__len < ((Math.trunc((128) / (1))) >>> 0)))) {
             {
              __buf[($t13 = __len, __len = (($t13 + 1) >>> 0), $t13)] = __beg.a[__beg.i];
              ++__beg.i;
            }
          }
          let __r = ($t14 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_(__len, ((0) >>> 0), __a), $t14 ? {a: $t14.a, i: $t14.i} : null);
          _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t15 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t15 ? {a: $t15.a, i: $t15.i} : null), {a: __buf, i: 0}, __len);
          if (true) {
             {
              while ((!(__beg === __end || (__beg && __end && __beg.a === __end.a && __beg.i === __end.i)))) {
                 {
                  if ((__len === (__r.a[__r.i])._M_capacity)) {
                     {
                      let __another = ($t16 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep9_S_createEmmRKS3_((((__len) + (((1) >>> 0))) >>> 0), __len, __a), $t16 ? {a: $t16.a, i: $t16.i} : null);
                      _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_copyEPcPKcm(($t17 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__another.a[__another.i]), $t17 ? {a: $t17.a, i: $t17.i} : null), ($t18 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t18 ? {a: $t18.a, i: $t18.i} : null), __len);
                      _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_.call(__r.a[__r.i], __a);
                      __r = (__another ? {a: __another.a, i: __another.i} : null);
                    }
                  }
                  (($t19 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t19)).a[(($t19 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t19)).i + (($t20 = __len, __len = (($t20 + 1) >>> 0), $t20))] = __beg.a[__beg.i];
                  ++__beg.i;
                }
              }
            }
          }
          if (false) {
             {
              _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_destroyERKS3_.call(__r.a[__r.i], __a);
            }
          }
          _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep26_M_set_length_and_sharableEm.call(__r.a[__r.i], __len);
          return ($t21 = _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_RepE.prototype._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4_Rep10_M_refdataEv.call(__r.a[__r.i]), $t21 ? {a: $t21.a, i: $t21.i} : null);
        }
        _ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv() {
          let $t22;
          return ($t22 = this._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE7_M_dataEv(), $t22 ? {a: $t22.a, i: $t22.i} : null);
        }
        static _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE16_S_construct_auxIPcEES5_S5_S5_RKS3_St12__false_type(__beg, __end, __a, $p3) {
          let $t23;
          return ($t23 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE._ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_S_constructIPcEES5_S5_S5_RKS3_St18input_iterator_tag((__beg ? {a: __beg.a, i: __beg.i} : null), (__end ? {a: __end.a, i: __end.i} : null), __a, new _ZSt26random_access_iterator_tag()), $t23 ? {a: $t23.a, i: $t23.i} : null);
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
      class _ZSt12__is_integerIPcE {
        __init__ZSt12__is_integerIPcE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPcE {
        __init__ZSt15iterator_traitsIPcE(...$a) { }
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
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEj(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 1, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEl(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEf(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 4, __n, null, 0);
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
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEh(__os, __c) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 5, __c, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(__os, __s) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(__os, __m) {
        (__os.a[__os.i])._M_flags = (((((((__os.a[__os.i])._M_flags) & (((~((__m.a[__m.i])._M_mask)) | 0))) | 0)) | ((__m.a[__m.i])._M_value)) | 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(__os, __a) {
        if (((__a.a[__a.i])._M_kind === 1)) {
          (__os.a[__os.i])._M_width = (__a.a[__a.i])._M_value;
        }
        else {
          if (((__a.a[__a.i])._M_kind === 2)) {
            (__os.a[__os.i])._M_precision = (__a.a[__a.i])._M_value;
          }
          else {
            if (((__a.a[__a.i])._M_kind === 3)) {
              (__os.a[__os.i])._M_fill = (__a.a[__a.i])._M_value;
            }
          }
        }
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
        let $t24;
        return _ZSt16__ostream_insertIcSt11char_traitsIcEERSt13basic_ostreamIcS0_ES1_PKcl(__os, ($t24 = _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4dataEv.call(__str.a[__str.i]), $t24 ? {a: $t24.a, i: $t24.i} : null), ((_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.prototype._ZNKSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE4sizeEv.call(__str.a[__str.i])) | 0));
      }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZSt4setwi(__n) {
        return new _ZSt8_Ios_arg(1, __n);
      }
      function _ZSt12setprecisioni(__n) {
        return new _ZSt8_Ios_arg(2, __n);
      }
      function _ZSt7setfillc(__c) {
        return new _ZSt8_Ios_arg(3, ((__c) | 0));
      }
      function _ZSt7setbasei(__b) {
        return new _ZSt8_Ios_fmt(74, ((__b === 16) ? ((8) | 0) : ((((__b === 8) ? ((64) | 0) : ((((__b === 10) ? ((2) | 0) : ((74) | 0))) | 0))) | 0)));
      }
      function main() {
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, 42), 32), ((-(17)) | 0)), 32), true), 32), false), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd({a: _ZSt4cout, i: "v"}, 3.25), {a: [32, 0], i: 0}), 1), {a: [32, 0], i: 0}), 100000000000000000000), {a: [32, 0], i: 0}), 0.0001), {a: [32, 0], i: 0}), (-(2.5))), {a: [32, 0], i: 0}), 123456789), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEf({a: _ZSt4cout, i: "v"}, (1 / 3)), {a: [32, 0], i: 0}), (2 / 3)), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt({a: _ZSt4cout, i: "v"}, {a: [_ZSt3hex], i: 0}), 255), {a: [32, 0], i: 0}), ((-(1)) | 0)), {a: [32, 0], i: 0}), {a: [_ZSt3dec], i: 0}), 255), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt({a: _ZSt4cout, i: "v"}, {a: [_ZSt3oct], i: 0}), 8), {a: [_ZSt3dec], i: 0}), {a: [32, 0], i: 0}), 9), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg({a: _ZSt4cout, i: "v"}, {a: [_ZSt4setwi(6)], i: 0}), 42), {a: [124, 0], i: 0}), {a: [_ZSt4setwi(4)], i: 0}), {a: [97, 98, 0], i: 0}), {a: [124, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg({a: _ZSt4cout, i: "v"}, {a: [_ZSt7setfillc(42)], i: 0}), {a: [_ZSt4setwi(5)], i: 0}), 7), {a: [_ZSt7setfillc(32)], i: 0}), {a: [124, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEd(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg({a: _ZSt4cout, i: "v"}, {a: [_ZSt12setprecisioni(3)], i: 0}), 3.14159), {a: [32, 0], i: 0}), {a: [_ZSt12setprecisioni(10)], i: 0}), 3.14159), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt({a: _ZSt4cout, i: "v"}, {a: [_ZSt9boolalpha], i: 0}), true), {a: [32, 0], i: 0}), false), {a: [_ZSt11noboolalpha], i: 0}), {a: [32, 0], i: 0}), true), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt({a: _ZSt4cout, i: "v"}, {a: [_ZSt4left], i: 0}), {a: [_ZSt4setwi(5)], i: 0}), 1), {a: [124, 0], i: 0}), {a: [_ZSt5right], i: 0}), {a: [_ZSt4setwi(5)], i: 0}), 2), {a: [124, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        let u = 4294967295;
        let ul = Number(BigInt.asUintN(32, 18446744073709551615n));
        let l = ((-(5)) | 0);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEl(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEl(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEj({a: _ZSt4cout, i: "v"}, u), {a: [32, 0], i: 0}), l), {a: [32, 0], i: 0}), {a: [_ZSt3hex], i: 0}), l), {a: [_ZSt3dec], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEh(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEc({a: _ZSt4cout, i: "v"}, 65), (((66) << 24) >> 24)), ((67) & 255)), {a: [_ZSt4endl], i: 0});
        let s = new _ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE({a: [115, 116, 114, 0], i: 0}, {a: [new _ZSt9allocatorIcE()], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_arg(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsIcSt11char_traitsIcESt9allocatorIcEERSt13basic_ostreamIcS0_ES3_RKSt12basic_stringIcS0_S2_E({a: _ZSt4cout, i: "v"}, {a: [s], i: 0}), {a: [32, 0], i: 0}), {a: [_ZSt4setwi(5)], i: 0}), {a: [s], i: 0}), {a: [124, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [97, 0], i: 0}), {a: [_ZSt5flush], i: 0}), {a: [98, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt8_Ios_fmt({a: _ZSt4cout, i: "v"}, {a: [_ZSt7setbasei(16)], i: 0}), 4096), {a: [_ZSt4endl], i: 0});
        _ZSt8ios_base.prototype._ZNSt8ios_base5widthEi.call(_ZSt4cout.v, 4);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, 5), {a: [_ZSt4endl], i: 0});
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
      let _ZSt3cin = new _ZSt13basic_istreamIcSt11char_traitsIcEE(0);
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
