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
      class _ZSt14__sfinae_types {
        __init__ZSt14__sfinae_types(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt14__sfinae_types11$24class_47E {
        __arr;
        constructor(...$a) {
          this.__init__ZNSt14__sfinae_types11$24class_47E(...$a);
        }
        __init__ZNSt14__sfinae_types11$24class_47E(...$a) {
          this.__arr = new Array(2).fill(0);
        }
        __dtor() {
        }
      }
      class _ZSt25__do_is_destructible_impl {
        __init__ZSt25__do_is_destructible_impl(...$a) { }
        __dtor() {
        }
      }
      class _ZSt28__do_is_static_castable_impl {
        __init__ZSt28__do_is_static_castable_impl(...$a) { }
        __dtor() {
        }
      }
      class _ZSt33__do_is_direct_constructible_impl {
        __init__ZSt33__do_is_direct_constructible_impl(...$a) { }
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
      }
      class _ZN9__gnu_cxx13new_allocatorIcEE {
        __init__ZN9__gnu_cxx13new_allocatorIcEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIcE extends _ZN9__gnu_cxx13new_allocatorIcEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIcE(...$a);
        }
        __init__ZSt9allocatorIcE(...$a) {
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
      class _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE extends _ZSt9allocatorIcE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
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
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE = new _ZNSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIcSt11char_traitsIcESt9allocatorIcEE";
        }
        __dtor() {
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
      class _ZN9__gnu_cxx7__mutexE {
        __init__ZN9__gnu_cxx7__mutexE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13__scoped_lockE {
        __device;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13__scoped_lockE(...$a);
        }
        __init__ZN9__gnu_cxx13__scoped_lockE(...$a) {
          this.__device = null;
        }
        __dtor() {
        }
      }
      class _ZSt15allocator_arg_t {
        constructor(...$a) {
          this.__init__ZSt15allocator_arg_t(...$a);
        }
        __init__ZSt15allocator_arg_t(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt15allocator_arg_t)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt15_Swallow_assign {
        constructor(...$a) {
          this.__init__ZSt15_Swallow_assign(...$a);
        }
        __init__ZSt15_Swallow_assign(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt8iteratorISt26random_access_iterator_tagblPbRbE {
        __init__ZSt8iteratorISt26random_access_iterator_tagblPbRbE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18_Bit_iterator_base extends _ZSt8iteratorISt26random_access_iterator_tagblPbRbE {
        _M_p;
        _M_offset;
        constructor(...$a) {
          super();
          this.__init__ZSt18_Bit_iterator_base(...$a);
        }
        __init__ZSt18_Bit_iterator_base(...$a) {
          this._M_p = null;
          this._M_offset = 0;
        }
        __dtor() {
          _ZSt8iteratorISt26random_access_iterator_tagblPbRbE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13_Bit_iterator extends _ZSt18_Bit_iterator_base {
        constructor(...$a) {
          super();
          this.__init__ZSt13_Bit_iterator(...$a);
        }
        __init__ZSt13_Bit_iterator(...$a) {
        }
        __dtor() {
          _ZSt18_Bit_iterator_base.prototype.__dtor.call(this);
        }
      }
      class _ZSt19_Bit_const_iterator extends _ZSt18_Bit_iterator_base {
        constructor(...$a) {
          super();
          this.__init__ZSt19_Bit_const_iterator(...$a);
        }
        __init__ZSt19_Bit_const_iterator(...$a) {
        }
        __dtor() {
          _ZSt18_Bit_iterator_base.prototype.__dtor.call(this);
        }
      }
      class _Z1P {
        a;
        b;
        constructor(...$a) {
          this.__init__Z1P(...$a);
        }
        __init__Z1P(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z1P)) {
            this.a = (($a[0]).a[($a[0]).i]).a;
            this.b = (($a[0]).a[($a[0]).i]).b;
          }
          else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
            this.a = $a[0];
            this.b = $a[1];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _Z2NB {
        v;
        constructor(...$a) {
          this.__init__Z2NB(...$a);
        }
        __init__Z2NB(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _Z2NB)) {
            this.v = (($a[0]).a[($a[0]).i]).v;
          }
          else if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
            this.v = $a[0];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
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
        _ZNSt13basic_ostreamIcSt11char_traitsIcEE3tieEPS2_(__tie) {
          let __old = (this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE ? {a: this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE.a, i: this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE.i} : null);
          this._M_tie$_ZSt13basic_ostreamIcSt11char_traitsIcEE = (__tie ? {a: __tie.a, i: __tie.i} : null);
          return (__old ? {a: __old.a, i: __old.i} : null);
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
      class _ZSt12_PlaceholderILi1EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi1EE(...$a);
        }
        __init__ZSt12_PlaceholderILi1EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi2EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi2EE(...$a);
        }
        __init__ZSt12_PlaceholderILi2EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi3EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi3EE(...$a);
        }
        __init__ZSt12_PlaceholderILi3EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi4EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi4EE(...$a);
        }
        __init__ZSt12_PlaceholderILi4EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi5EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi5EE(...$a);
        }
        __init__ZSt12_PlaceholderILi5EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi6EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi6EE(...$a);
        }
        __init__ZSt12_PlaceholderILi6EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi7EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi7EE(...$a);
        }
        __init__ZSt12_PlaceholderILi7EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi8EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi8EE(...$a);
        }
        __init__ZSt12_PlaceholderILi8EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi9EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi9EE(...$a);
        }
        __init__ZSt12_PlaceholderILi9EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi10EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi10EE(...$a);
        }
        __init__ZSt12_PlaceholderILi10EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi11EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi11EE(...$a);
        }
        __init__ZSt12_PlaceholderILi11EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi12EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi12EE(...$a);
        }
        __init__ZSt12_PlaceholderILi12EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi13EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi13EE(...$a);
        }
        __init__ZSt12_PlaceholderILi13EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi14EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi14EE(...$a);
        }
        __init__ZSt12_PlaceholderILi14EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi15EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi15EE(...$a);
        }
        __init__ZSt12_PlaceholderILi15EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi16EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi16EE(...$a);
        }
        __init__ZSt12_PlaceholderILi16EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi17EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi17EE(...$a);
        }
        __init__ZSt12_PlaceholderILi17EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi18EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi18EE(...$a);
        }
        __init__ZSt12_PlaceholderILi18EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi19EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi19EE(...$a);
        }
        __init__ZSt12_PlaceholderILi19EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi20EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi20EE(...$a);
        }
        __init__ZSt12_PlaceholderILi20EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi21EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi21EE(...$a);
        }
        __init__ZSt12_PlaceholderILi21EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi22EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi22EE(...$a);
        }
        __init__ZSt12_PlaceholderILi22EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi23EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi23EE(...$a);
        }
        __init__ZSt12_PlaceholderILi23EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi24EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi24EE(...$a);
        }
        __init__ZSt12_PlaceholderILi24EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi25EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi25EE(...$a);
        }
        __init__ZSt12_PlaceholderILi25EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi26EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi26EE(...$a);
        }
        __init__ZSt12_PlaceholderILi26EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi27EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi27EE(...$a);
        }
        __init__ZSt12_PlaceholderILi27EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi28EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi28EE(...$a);
        }
        __init__ZSt12_PlaceholderILi28EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_PlaceholderILi29EE {
        constructor(...$a) {
          this.__init__ZSt12_PlaceholderILi29EE(...$a);
        }
        __init__ZSt12_PlaceholderILi29EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorI1PEE {
        __init__ZN9__gnu_cxx13new_allocatorI1PEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorI1PE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t0;
          if ((__n > _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZNK9__gnu_cxx13new_allocatorI1PE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t0 = _Znwm(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorI1PE10deallocateEPS1_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorI1PE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorI1PE9constructIS1_S1_EEvPS1_OS1_(__p, __args_0) {
          (__p.a[__p.i] = new _Z1P(_ZSt7forwardI1PEOS_S0_(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
        _ZN9__gnu_cxx13new_allocatorI1PE7destroyIS1_EEvPS1_(__p) {
          _Z1P.prototype.__dtor.call(__p.a[__p.i]);
        }
      }
      class _ZSt9allocatorI1PE extends _ZN9__gnu_cxx13new_allocatorI1PEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorI1PE(...$a);
        }
        __init__ZSt9allocatorI1PE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorI1PEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12_Vector_baseI1PSt9allocatorIS0_EE12_Vector_implE extends _ZSt9allocatorI1PE {
        _M_start;
        _M_finish;
        _M_end_of_storage;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12_Vector_baseI1PSt9allocatorIS0_EE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseI1PSt9allocatorIS0_EE12_Vector_implE(...$a) {
          this._M_start = null;
          this._M_finish = null;
          this._M_end_of_storage = null;
        }
        __dtor() {
          _ZSt9allocatorI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseI1PSt9allocatorIS0_EE {
        _M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseI1PSt9allocatorIS0_EE(...$a);
        }
        __init__ZSt12_Vector_baseI1PSt9allocatorIS0_EE(...$a) {
          this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE = new _ZNSt12_Vector_baseI1PSt9allocatorIS0_EE12_Vector_implE();
          this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE.ctj_i = "_M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE";
        }
        __dtor() {
        }
        _ZNSt12_Vector_baseI1PSt9allocatorIS0_EE19_M_get_Tp_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE"};
        }
        _ZNSt12_Vector_baseI1PSt9allocatorIS0_EE11_M_allocateEm(__n) {
          let $t1;
          return ($t1 = ((__n !== ((0) >>> 0)) ? _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZN9__gnu_cxx13new_allocatorI1PE8allocateEmPKv.call(this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE, __n, {a: [0], i: 0}) : 0), $t1 ? {a: $t1.a, i: $t1.i} : null);
        }
        _ZNSt12_Vector_baseI1PSt9allocatorIS0_EE13_M_deallocateEPS0_m(__p, __n) {
          if (__p) {
            _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZN9__gnu_cxx13new_allocatorI1PE10deallocateEPS1_m.call(this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE, (__p ? {a: __p.a, i: __p.i} : null), __n);
          }
        }
      }
      class _ZSt6vectorI1PSt9allocatorIS0_EE extends _ZSt12_Vector_baseI1PSt9allocatorIS0_EE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt6vectorI1PSt9allocatorIS0_EE(...$a);
        }
        __init__ZSt6vectorI1PSt9allocatorIS0_EE(...$a) {
        }
        __dtor() {
          _ZSt12_Vector_baseI1PSt9allocatorIS0_EE.prototype.__dtor.call(this);
        }
        _ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv() {
          return ((((this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i : 0) - (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i : 0))) >>> 0);
        }
        _ZNKSt6vectorI1PSt9allocatorIS0_EE8max_sizeEv() {
          return _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE8max_sizeERKS3_(this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE19_M_get_Tp_allocatorEv());
        }
        _ZNSt6vectorI1PSt9allocatorIS0_EEixEm(__n) {
          return ({a: (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i : 0) + (__n)});
        }
        _ZNSt6vectorI1PSt9allocatorIS0_EE9push_backERKS0_(__x) {
          if ((!(this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish === this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage || (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish && this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage && this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.a === this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage.a && this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i === this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage.i)))) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE9constructIS2_EEvRS3_PS2_RKS2_({a: this, i: "_M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE"}, (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i} : null), __x);
              ++this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i;
            }
          }
          else {
            this._ZNSt6vectorI1PSt9allocatorIS0_EE19_M_emplace_back_auxIS0_EEvOS0_(__x);
          }
        }
        _ZNKSt6vectorI1PSt9allocatorIS0_EE12_M_check_lenEmPKc(__n, __s) {
          let $t2;
          __n = {v: __n};
          if (((((this._ZNKSt6vectorI1PSt9allocatorIS0_EE8max_sizeEv()) - (this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv())) >>> 0) < __n.v)) {
            _ZSt20__throw_length_errorPKc((__s ? {a: __s.a, i: __s.i} : null));
          }
          let __len = (((this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv()) + (($t2 = _ZSt3maxImERKmS_S_({a: [this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv()], i: 0}, {a: __n, i: "v"}), $t2.a[$t2.i]))) >>> 0);
          return (((__len < this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv()) || (__len > this._ZNKSt6vectorI1PSt9allocatorIS0_EE8max_sizeEv())) ? ((this._ZNKSt6vectorI1PSt9allocatorIS0_EE8max_sizeEv()) >>> 0) : ((__len) >>> 0));
        }
        _ZNSt6vectorI1PSt9allocatorIS0_EE19_M_emplace_back_auxIS0_EEvOS0_(__args_0) {
          let $t3, $t4, $t5, $t6, $t7;
          let __len = this._ZNKSt6vectorI1PSt9allocatorIS0_EE12_M_check_lenEmPKc(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
          let __new_start = ($t3 = _ZSt12_Vector_baseI1PSt9allocatorIS0_EE.prototype._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE11_M_allocateEm.call(this, __len), $t3 ? {a: $t3.a, i: $t3.i} : null);
          let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE9constructIS2_EEvRS3_PS2_RKS2_({a: this, i: "_M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE"}, ($t4 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv())}), $t4 ? {a: $t4.a, i: $t4.i} : null), _ZSt7forwardI1PEOS_S0_(__args_0));
              __new_finish = null;
              __new_finish = ($t5 = _ZSt34__uninitialized_move_if_noexcept_aIP1PS_St9allocatorIS0_EES_S_S_S_RS2_((this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE19_M_get_Tp_allocatorEv()), $t5 ? {a: $t5.a, i: $t5.i} : null);
              ++__new_finish.i;
            }
          }
          if (false) {
             {
              if ((!__new_finish)) {
                _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE7destroyIS2_EEvRS3_PS2_({a: this, i: "_M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE"}, ($t6 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv())}), $t6 ? {a: $t6.a, i: $t6.i} : null));
              }
              else {
                _ZSt8_DestroyIP1PSt9allocatorIS0_EEvS_S_RS2_((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE19_M_get_Tp_allocatorEv());
              }
              this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE13_M_deallocateEPS0_m((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
            }
          }
          _ZSt8_DestroyIP1PSt9allocatorIS0_EEvS_S_RS2_((this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish.i} : null), this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE19_M_get_Tp_allocatorEv());
          this._ZNSt12_Vector_baseI1PSt9allocatorIS0_EE13_M_deallocateEPS0_m((this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i} : null), ((((this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage.i : 0) - (this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start ? this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start.i : 0))) >>> 0));
          this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
          this._M_impl$_ZSt12_Vector_baseI1PSt9allocatorIS0_EE._M_end_of_storage = ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t7 ? {a: $t7.a, i: $t7.i} : null);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE9constructIS2_EEvRS3_PS2_RKS2_(__a, __p, __arg) {
          _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZN9__gnu_cxx13new_allocatorI1PE9constructIS1_S1_EEvPS1_OS1_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE8max_sizeERKS3_(__a) {
          return _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZNK9__gnu_cxx13new_allocatorI1PE8max_sizeEv.call(__a.a[__a.i]);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE7destroyIS2_EEvRS3_PS2_(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorI1PEE.prototype._ZN9__gnu_cxx13new_allocatorI1PE7destroyIS1_EEvPS1_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE6rebindIS2_EE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE6rebindIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorI1PE6rebindIS0_EE {
        __init__ZNSt9allocatorI1PE6rebindIS0_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listI1PE {
        _M_array$_ZSt16initializer_listI1PE;
        _M_len$_ZSt16initializer_listI1PE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listI1PE(...$a);
        }
        __init__ZSt16initializer_listI1PE(...$a) {
          this._M_array$_ZSt16initializer_listI1PE = null;
          this._M_len$_ZSt16initializer_listI1PE = 0;
        }
        __dtor() {
        }
      }
      class _ZSt4pairIiiE {
        first$_ZSt4pairIiiE;
        second$_ZSt4pairIiiE;
        constructor(...$a) {
          this.__init__ZSt4pairIiiE(...$a);
        }
        __init__ZSt4pairIiiE(...$a) {
          this.first$_ZSt4pairIiiE = ($a[0]).a[($a[0]).i];
          this.second$_ZSt4pairIiiE = ($a[1]).a[($a[1]).i];
        }
        __dtor() {
        }
      }
      class _ZSt9remove_cvIiE {
        __init__ZSt9remove_cvIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIiE {
        __init__ZSt15remove_volatileIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIiE {
        __init__ZSt12remove_constIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantIbLi0EE(...$a);
        }
        __init__ZSt17integral_constantIbLi0EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt7is_voidIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIiE(...$a);
        }
        __init__ZSt7is_voidIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16__is_void_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIiE(...$a);
        }
        __init__ZSt16__is_void_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIiE(...$a);
        }
        __init__ZSt11is_functionIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIiE(...$a);
        }
        __init__ZSt8is_arrayIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE extends _ZSt8is_arrayIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIiESt8is_arrayIiEE {
        __init__ZSt11conditionalILi0ESt11is_functionIiESt8is_arrayIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIiiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIiiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIiE(...$a);
        }
        __init__ZSt12is_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE extends _ZSt19is_rvalue_referenceIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantIbLi1EE(...$a);
        }
        __init__ZSt17integral_constantIbLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
      }
      class _ZSt14is_convertibleIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIiiE(...$a);
        }
        __init__ZSt14is_convertibleIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt12is_referenceIiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE extends _ZSt6__not_ISt7is_voidIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIiEEStS0_ISt7is_voidIiEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIiEEStS0_ISt12is_referenceIiEEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIiEEStS0_ISt12is_referenceIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIiLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIiLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIiE extends _ZSt29__add_rvalue_reference_helperIiLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIiLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt14is_convertibleIiiES1_E extends _ZSt14is_convertibleIiiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIiiES1_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIiiES1_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIiiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIiiES1_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIiiES1_E(...$a) { }
        __dtor() {
        }
      }
      class _Z2TrIiE {
        constructor(...$a) {
          this.__init__Z2TrIiE(...$a);
        }
        __init__Z2TrIiE(...$a) {
        }
        __dtor() {
        }
        _ZN2TrIiE4pickEP2NBS1_(x, y) {
          if ((x === null)) {
            return new _ZSt4pairIP2NBS0_E({a: [x], i: 0}, {a: [y], i: 0});
          }
          return new _ZSt4pairIP2NBS0_E({a: [y], i: 0}, {a: [x], i: 0});
        }
      }
      class _ZSt4pairIP2NBS0_E {
        first$_ZSt4pairIP2NBS0_E;
        second$_ZSt4pairIP2NBS0_E;
        constructor(...$a) {
          this.__init__ZSt4pairIP2NBS0_E(...$a);
        }
        __init__ZSt4pairIP2NBS0_E(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIP2NBS0_E)) {
            this.first$_ZSt4pairIP2NBS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIP2NBS0_E;
            this.second$_ZSt4pairIP2NBS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIP2NBS0_E;
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIP2NBS0_E = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
            this.second$_ZSt4pairIP2NBS0_E = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIRPK2NBPS3_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRPK2NBPS3_E(...$a);
        }
        __init__ZSt14is_convertibleIRPK2NBPS3_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRP2NBE(...$a);
        }
        __init__ZSt7is_voidIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRP2NBE {
        __init__ZSt9remove_cvIRP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRP2NBE {
        __init__ZSt15remove_volatileIRP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRP2NBE {
        __init__ZSt12remove_constIRP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRP2NBE(...$a);
        }
        __init__ZSt16__is_void_helperIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIP2NBE(...$a);
        }
        __init__ZSt11is_functionIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIP2NBE(...$a);
        }
        __init__ZSt8is_arrayIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE extends _ZSt8is_arrayIP2NBE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIP2NBE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRP2NBESt11is_functionIS2_ESt8is_arrayIS2_EE extends _ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRP2NBESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRP2NBESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIP2NBESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIP2NBESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRP2NBESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRP2NBESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRP2NBS1_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRP2NBS1_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRP2NBS1_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIRP2NBE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRP2NBE(...$a);
        }
        __init__ZSt12is_referenceIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRP2NBE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRP2NBE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRP2NBE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRP2NBESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRP2NBE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRP2NBESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRP2NBESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRP2NBE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRP2NBESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRP2NBESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRP2NBEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRP2NBEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRP2NBEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRP2NBEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRP2NBEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRP2NBEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRP2NBEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRP2NBEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRP2NBEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRP2NBEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRP2NBEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRP2NBEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRP2NBEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRP2NBLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRP2NBLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRP2NBE extends _ZSt29__add_rvalue_reference_helperIRP2NBLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRP2NBE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRP2NBE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRP2NBLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRPK2NBPS4_ES6_E extends _ZSt14is_convertibleIRPK2NBPS3_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRPK2NBPS4_ES6_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRPK2NBPS4_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRPK2NBPS3_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRPK2NBPS4_ES6_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRPK2NBPS4_ES6_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIP2NBS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIP2NBS0_E(...$a);
        }
        __init__ZSt14is_convertibleIP2NBS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIP2NBE(...$a);
        }
        __init__ZSt7is_voidIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIP2NBE {
        __init__ZSt9remove_cvIP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIP2NBE {
        __init__ZSt15remove_volatileIP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIP2NBE {
        __init__ZSt12remove_constIP2NBE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIP2NBE(...$a);
        }
        __init__ZSt16__is_void_helperIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIP2NBESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIP2NBESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIP2NBESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIP2NBESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIP2NBESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIP2NBESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIP2NBS0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIP2NBS0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIP2NBS0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIP2NBE(...$a);
        }
        __init__ZSt12is_referenceIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIP2NBE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIP2NBE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIP2NBE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIP2NBESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIP2NBE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIP2NBESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIP2NBESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIP2NBE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIP2NBESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIP2NBESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIP2NBEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIP2NBEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIP2NBEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIP2NBEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIP2NBEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIP2NBEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIP2NBEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIP2NBEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIP2NBEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIP2NBEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIP2NBEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIP2NBEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIP2NBEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIP2NBLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIP2NBLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIP2NBE extends _ZSt29__add_rvalue_reference_helperIP2NBLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIP2NBE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIP2NBE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIP2NBLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIP2NBS1_ES3_E extends _ZSt14is_convertibleIP2NBS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIP2NBS1_ES3_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIP2NBS1_ES3_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIP2NBS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIP2NBS1_ES3_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIP2NBS1_ES3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIiE(...$a);
        }
        __init__ZSt19__declval_protectorIiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIRP2NBE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRP2NBE(...$a);
        }
        __init__ZSt19__declval_protectorIRP2NBE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIP2NBE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIP2NBE(...$a);
        }
        __init__ZSt19__declval_protectorIP2NBE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt16remove_referenceI1PE {
        __init__ZSt16remove_referenceI1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIP1PE {
        __init__ZSt15iterator_traitsIP1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__move_if_noexcept_condI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__move_if_noexcept_condI1PE(...$a);
        }
        __init__ZSt23__move_if_noexcept_condI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidI1PE(...$a);
        }
        __init__ZSt7is_voidI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvI1PE {
        __init__ZSt9remove_cvI1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileI1PE {
        __init__ZSt15remove_volatileI1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constI1PE {
        __init__ZSt12remove_constI1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperI1PE(...$a);
        }
        __init__ZSt16__is_void_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24is_nothrow_constructibleI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt24is_nothrow_constructibleI1POS0_E(...$a);
        }
        __init__ZSt24is_nothrow_constructibleI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt36__is_nothrow_move_constructible_implI1PLi0EE extends _ZSt24is_nothrow_constructibleI1POS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt36__is_nothrow_move_constructible_implI1PLi0EE(...$a);
        }
        __init__ZSt36__is_nothrow_move_constructible_implI1PLi0EE(...$a) {
        }
        __dtor() {
          _ZSt24is_nothrow_constructibleI1POS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt29is_nothrow_move_constructibleI1PE extends _ZSt36__is_nothrow_move_constructible_implI1PLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt29is_nothrow_move_constructibleI1PE(...$a);
        }
        __init__ZSt29is_nothrow_move_constructibleI1PE(...$a) {
        }
        __dtor() {
          _ZSt36__is_nothrow_move_constructible_implI1PLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleI1POS0_E(...$a);
        }
        __init__ZSt16is_constructibleI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleI1POS0_E(...$a);
        }
        __init__ZSt25__is_direct_constructibleI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implI1POS0_E extends _ZSt25__is_direct_constructibleI1POS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implI1POS0_E(...$a);
        }
        __init__ZSt23__is_constructible_implI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleI1POS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceI1PE(...$a);
        }
        __init__ZSt12is_referenceI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceI1PE(...$a);
        }
        __init__ZSt19is_lvalue_referenceI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceI1PE(...$a);
        }
        __init__ZSt19is_rvalue_referenceI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceI1PESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceI1PESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceI1PESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceI1PESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceI1PESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_ref_castI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castI1POS0_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIO1PS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIO1PS1_E(...$a);
        }
        __init__ZSt20__is_static_castableIO1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIO1PS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIO1PS1_E(...$a);
        }
        __init__ZSt25__is_static_castable_safeIO1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIO1PS1_E extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIO1PS1_E(...$a);
        }
        __init__ZSt25__is_static_castable_implIO1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIO1PE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIO1PE(...$a);
        }
        __init__ZSt12is_referenceIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIO1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIO1PE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIO1PE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIO1PE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIO1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIO1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIO1PEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIO1PEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIO1PEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIO1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIO1PE(...$a);
        }
        __init__ZSt7is_voidIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIO1PE {
        __init__ZSt9remove_cvIO1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIO1PE {
        __init__ZSt15remove_volatileIO1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIO1PE {
        __init__ZSt12remove_constIO1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIO1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIO1PE(...$a);
        }
        __init__ZSt16__is_void_helperIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIO1PEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIO1PEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIO1PEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIO1PEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIO1PEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIO1PEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIO1PEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIO1PEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIO1PEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIO1PEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIO1PLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIO1PLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIO1PE extends _ZSt29__add_rvalue_reference_helperIO1PLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIO1PE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIO1PE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIO1PLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIO1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIO1PE(...$a);
        }
        __init__ZSt11is_functionIO1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIO1PESt11is_functionIS1_EE extends _ZSt11is_functionIO1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIO1PESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIO1PESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIO1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIO1PESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIO1PESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIO1PESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIO1PESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIO1PESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIO1PS1_Li1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIO1PS1_Li1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIO1PS1_Li1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS2_EE extends _ZSt19is_lvalue_referenceIO1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS2_EE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIO1PESt19is_rvalue_referenceIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIO1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_rvalue_referenceI1PESt19is_lvalue_referenceIOS1_EE {
        __init__ZSt11conditionalILi0ESt19is_rvalue_referenceI1PESt19is_lvalue_referenceIOS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIO1PS1_Li0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIO1PS1_Li0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIO1PS1_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIO1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE extends _ZSt25__is_lvalue_to_rvalue_refIO1PS1_Li0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIO1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIO1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIO1PS1_Li0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIO1PE {
        __init__ZSt16remove_referenceIO1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_sameI1PS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_sameI1PS0_E(...$a);
        }
        __init__ZSt7is_sameI1PS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_sameI1PS1_EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_sameI1PS1_EE(...$a);
        }
        __init__ZSt6__not_ISt7is_sameI1PS1_EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_base_ofI1PS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_base_ofI1PS0_E(...$a);
        }
        __init__ZSt10is_base_ofI1PS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt7is_sameI1PS2_EESt10is_base_ofIS2_S2_EE extends _ZSt6__not_ISt7is_sameI1PS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt7is_sameI1PS2_EESt10is_base_ofIS2_S2_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt7is_sameI1PS2_EESt10is_base_ofIS2_S2_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_sameI1PS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt10is_base_ofI1PS1_ESt6__not_ISt7is_sameIS1_S1_EEE {
        __init__ZSt11conditionalILi0ESt10is_base_ofI1PS1_ESt6__not_ISt7is_sameIS1_S1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIO1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIO1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIO1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIO1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIO1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS4_Li1EESt25__is_lvalue_to_rvalue_refIS3_S4_Li0EEEESt20__is_static_castableIS3_S4_EE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIO1PS4_Li1EESt25__is_lvalue_to_rvalue_refIS3_S4_Li0EEEESt20__is_static_castableIS3_S4_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeI1POS0_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newI1POS0_E extends _ZSt34__is_direct_constructible_new_safeI1POS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newI1POS0_E(...$a);
        }
        __init__ZSt29__is_direct_constructible_newI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeI1POS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt15is_destructibleI1PE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15is_destructibleI1PE(...$a);
        }
        __init__ZSt15is_destructibleI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_array_unknown_boundsI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_array_unknown_boundsI1PE(...$a);
        }
        __init__ZSt25__is_array_unknown_boundsI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayI1PE(...$a);
        }
        __init__ZSt8is_arrayI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17integral_constantImLi0EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantImLi0EE(...$a);
        }
        __init__ZSt17integral_constantImLi0EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6extentI1PLi0EE extends _ZSt17integral_constantImLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6extentI1PLi0EE(...$a);
        }
        __init__ZSt6extentI1PLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantImLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt6extentI1PLi0EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt6extentI1PLi0EEE(...$a);
        }
        __init__ZSt6__not_ISt6extentI1PLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt8is_arrayI1PESt6__not_ISt6extentIS1_Li0EEEE extends _ZSt8is_arrayI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt8is_arrayI1PESt6__not_ISt6extentIS1_Li0EEEE(...$a);
        }
        __init__ZSt6__and_ISt8is_arrayI1PESt6__not_ISt6extentIS1_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt6extentI1PLi0EEESt8is_arrayIS2_EE {
        __init__ZSt11conditionalILi0ESt6__not_ISt6extentI1PLi0EEESt8is_arrayIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11is_functionI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionI1PE(...$a);
        }
        __init__ZSt11is_functionI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE extends _ZSt11is_functionI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidI1PESt25__is_array_unknown_boundsIS1_ESt11is_functionIS1_EE extends _ZSt5__or_ISt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidI1PESt25__is_array_unknown_boundsIS1_ESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidI1PESt25__is_array_unknown_boundsIS1_ESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt25__is_array_unknown_boundsI1PESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidI1PESt5__or_ISt25__is_array_unknown_boundsIS1_ESt11is_functionIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidI1PESt5__or_ISt25__is_array_unknown_boundsIS1_ESt11is_functionIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9is_scalarI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt9is_scalarI1PE(...$a);
        }
        __init__ZSt9is_scalarI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13is_arithmeticI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt13is_arithmeticI1PE(...$a);
        }
        __init__ZSt13is_arithmeticI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_integralI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_integralI1PE(...$a);
        }
        __init__ZSt11is_integralI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_integral_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_integral_helperI1PE(...$a);
        }
        __init__ZSt20__is_integral_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_floating_pointI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_floating_pointI1PE(...$a);
        }
        __init__ZSt17is_floating_pointI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_floating_point_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_floating_point_helperI1PE(...$a);
        }
        __init__ZSt26__is_floating_point_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_integralI1PESt17is_floating_pointIS1_EE extends _ZSt17is_floating_pointI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_integralI1PESt17is_floating_pointIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_integralI1PESt17is_floating_pointIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt17is_floating_pointI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_integralI1PESt17is_floating_pointIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_integralI1PESt17is_floating_pointIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_enumI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_enumI1PE(...$a);
        }
        __init__ZSt7is_enumI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_pointerI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_pointerI1PE(...$a);
        }
        __init__ZSt10is_pointerI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__is_pointer_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19__is_pointer_helperI1PE(...$a);
        }
        __init__ZSt19__is_pointer_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_member_pointerI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_member_pointerI1PE(...$a);
        }
        __init__ZSt17is_member_pointerI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_member_pointer_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_member_pointer_helperI1PE(...$a);
        }
        __init__ZSt26__is_member_pointer_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14__is_nullptr_tI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14__is_nullptr_tI1PE(...$a);
        }
        __init__ZSt14__is_nullptr_tI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21__is_nullptr_t_helperI1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21__is_nullptr_t_helperI1PE(...$a);
        }
        __init__ZSt21__is_nullptr_t_helperI1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE extends _ZSt14__is_nullptr_tI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt14__is_nullptr_tI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt10is_pointerI1PESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE extends _ZSt5__or_ISt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt10is_pointerI1PESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt10is_pointerI1PESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_enumI1PESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE extends _ZSt5__or_ISt10is_pointerI1PESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_enumI1PESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_enumI1PESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt10is_pointerI1PESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt13is_arithmeticI1PESt7is_enumIS1_ESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE extends _ZSt5__or_ISt7is_enumI1PESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt13is_arithmeticI1PESt7is_enumIS1_ESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt13is_arithmeticI1PESt7is_enumIS1_ESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt7is_enumI1PESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE {
        __init__ZSt11conditionalILi0ESt17is_member_pointerI1PESt14__is_nullptr_tIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt10is_pointerI1PESt5__or_ISt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE {
        __init__ZSt11conditionalILi0ESt10is_pointerI1PESt5__or_ISt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_enumI1PESt5__or_ISt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_enumI1PESt5__or_ISt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt13is_arithmeticI1PESt5__or_ISt7is_enumIS1_ESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE {
        __init__ZSt11conditionalILi0ESt13is_arithmeticI1PESt5__or_ISt7is_enumIS1_ESt10is_pointerIS1_ESt17is_member_pointerIS1_ESt14__is_nullptr_tIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5__or_ISt12is_referenceI1PESt9is_scalarIS1_EE extends _ZSt9is_scalarI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt12is_referenceI1PESt9is_scalarIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt12is_referenceI1PESt9is_scalarIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt9is_scalarI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt12is_referenceI1PESt9is_scalarIS1_EE {
        __init__ZSt11conditionalILi0ESt12is_referenceI1PESt9is_scalarIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_safeI1PLi0ELi0EE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_safeI1PLi0ELi0EE(...$a);
        }
        __init__ZSt22__is_destructible_safeI1PLi0ELi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt18remove_all_extentsI1PE {
        __init__ZSt18remove_all_extentsI1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_implI1PE extends _ZSt25__do_is_destructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_implI1PE(...$a);
        }
        __init__ZSt22__is_destructible_implI1PE(...$a) {
        }
        __dtor() {
          _ZSt25__do_is_destructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIR1PE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIR1PE(...$a);
        }
        __init__ZSt12is_referenceIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIR1PE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIR1PE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIR1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIR1PE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIR1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIR1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIR1PEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIR1PEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIR1PEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIR1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIR1PE(...$a);
        }
        __init__ZSt7is_voidIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIR1PE {
        __init__ZSt9remove_cvIR1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIR1PE {
        __init__ZSt15remove_volatileIR1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIR1PE {
        __init__ZSt12remove_constIR1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIR1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIR1PE(...$a);
        }
        __init__ZSt16__is_void_helperIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIR1PEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIR1PEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIR1PEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIR1PEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIR1PEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIR1PEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIR1PEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIR1PEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIR1PEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIR1PEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIR1PLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIR1PLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIR1PE extends _ZSt29__add_rvalue_reference_helperIR1PLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIR1PE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIR1PE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIR1PLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implI1POS0_E extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implI1POS0_E(...$a);
        }
        __init__ZSt30__is_direct_constructible_implI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_OS1_EE extends _ZSt30__is_direct_constructible_implI1POS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_OS1_EE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_OS1_EE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implI1POS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implI1POS1_ESt15is_destructibleIS1_EE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implI1POS1_ESt15is_destructibleIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castI1POS1_ESt34__is_direct_constructible_new_safeIS1_S2_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castI1POS1_ESt34__is_direct_constructible_new_safeIS1_S2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt26__is_nt_constructible_implI1POS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_nt_constructible_implI1POS0_E(...$a);
        }
        __init__ZSt26__is_nt_constructible_implI1POS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt16is_constructibleI1POS1_ESt26__is_nt_constructible_implIS1_S2_EE extends _ZSt26__is_nt_constructible_implI1POS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt16is_constructibleI1POS1_ESt26__is_nt_constructible_implIS1_S2_EE(...$a);
        }
        __init__ZSt6__and_ISt16is_constructibleI1POS1_ESt26__is_nt_constructible_implIS1_S2_EE(...$a) {
        }
        __dtor() {
          _ZSt26__is_nt_constructible_implI1POS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt26__is_nt_constructible_implI1POS1_ESt16is_constructibleIS1_S2_EE {
        __init__ZSt11conditionalILi1ESt26__is_nt_constructible_implI1POS1_ESt16is_constructibleIS1_S2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt29is_nothrow_move_constructibleI1PEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt29is_nothrow_move_constructibleI1PEE(...$a);
        }
        __init__ZSt6__not_ISt29is_nothrow_move_constructibleI1PEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleI1PRKS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleI1PRKS0_E(...$a);
        }
        __init__ZSt16is_constructibleI1PRKS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_copy_constructible_implI1PLi0EE extends _ZSt16is_constructibleI1PRKS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_copy_constructible_implI1PLi0EE(...$a);
        }
        __init__ZSt28__is_copy_constructible_implI1PLi0EE(...$a) {
        }
        __dtor() {
          _ZSt16is_constructibleI1PRKS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt21is_copy_constructibleI1PE extends _ZSt28__is_copy_constructible_implI1PLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21is_copy_constructibleI1PE(...$a);
        }
        __init__ZSt21is_copy_constructibleI1PE(...$a) {
        }
        __dtor() {
          _ZSt28__is_copy_constructible_implI1PLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleI1PRS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleI1PRS0_E(...$a);
        }
        __init__ZSt25__is_direct_constructibleI1PRS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implI1PRKS0_E extends _ZSt25__is_direct_constructibleI1PRS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implI1PRKS0_E(...$a);
        }
        __init__ZSt23__is_constructible_implI1PRKS0_E(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleI1PRS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castI1PRS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castI1PRS0_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castI1PRS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIR1PS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIR1PS1_E(...$a);
        }
        __init__ZSt20__is_static_castableIR1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIR1PS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIR1PS1_E(...$a);
        }
        __init__ZSt25__is_static_castable_safeIR1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIR1PS1_E extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIR1PS1_E(...$a);
        }
        __init__ZSt25__is_static_castable_implIR1PS1_E(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIR1PE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIR1PE(...$a);
        }
        __init__ZSt11is_functionIR1PE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIR1PESt11is_functionIS1_EE extends _ZSt11is_functionIR1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIR1PESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIR1PESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIR1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIR1PESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIR1PESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIR1PESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIR1PESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIR1PESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIR1PS1_Li1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIR1PS1_Li1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIR1PS1_Li1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS2_EE extends _ZSt19is_rvalue_referenceI1PE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS2_EE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIR1PESt19is_rvalue_referenceIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceI1PE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_rvalue_referenceI1PESt19is_lvalue_referenceIRS1_EE {
        __init__ZSt11conditionalILi1ESt19is_rvalue_referenceI1PESt19is_lvalue_referenceIRS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIR1PS1_Li0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIR1PS1_Li0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIR1PS1_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIR1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE extends _ZSt25__is_lvalue_to_rvalue_refIR1PS1_Li0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIR1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIR1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIR1PS1_Li0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIR1PE {
        __init__ZSt16remove_referenceIR1PE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIR1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIR1PS2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIR1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIR1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIR1PS2_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S2_Li1EESt25__is_lvalue_to_rvalue_refIS1_S2_Li0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS3_Li1EESt25__is_lvalue_to_rvalue_refIS2_S3_Li0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS4_Li1EESt25__is_lvalue_to_rvalue_refIS3_S4_Li0EEEESt20__is_static_castableIS3_S4_EE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIR1PS4_Li1EESt25__is_lvalue_to_rvalue_refIS3_S4_Li0EEEESt20__is_static_castableIS3_S4_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeI1PRS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeI1PRS0_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeI1PRS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newI1PRS0_E extends _ZSt34__is_direct_constructible_new_safeI1PRS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newI1PRS0_E(...$a);
        }
        __init__ZSt29__is_direct_constructible_newI1PRS0_E(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeI1PRS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implI1PRS0_E extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implI1PRS0_E(...$a);
        }
        __init__ZSt30__is_direct_constructible_implI1PRS0_E(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_RS1_EE extends _ZSt30__is_direct_constructible_implI1PRS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_RS1_EE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleI1PESt30__is_direct_constructible_implIS1_RS1_EE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implI1PRS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implI1PRS1_ESt15is_destructibleIS1_EE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implI1PRS1_ESt15is_destructibleIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castI1PRS1_ESt34__is_direct_constructible_new_safeIS1_S2_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castI1PRS1_ESt34__is_direct_constructible_new_safeIS1_S2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleI1PEESt21is_copy_constructibleIS2_EE extends _ZSt6__not_ISt29is_nothrow_move_constructibleI1PEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleI1PEESt21is_copy_constructibleIS2_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleI1PEESt21is_copy_constructibleIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt29is_nothrow_move_constructibleI1PEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt21is_copy_constructibleI1PESt6__not_ISt29is_nothrow_move_constructibleIS1_EEE {
        __init__ZSt11conditionalILi0ESt21is_copy_constructibleI1PESt6__not_ISt29is_nothrow_move_constructibleIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13move_iteratorIP1PE {
        _M_current$_ZSt13move_iteratorIP1PE;
        constructor(...$a) {
          this.__init__ZSt13move_iteratorIP1PE(...$a);
        }
        __init__ZSt13move_iteratorIP1PE(...$a) {
          let $t8;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIP1PE)) {
            this._M_current$_ZSt13move_iteratorIP1PE = ($t8 = _ZSt13move_iteratorIP1PE.prototype._ZNKSt13move_iteratorIP1PE4baseEv.call(($a[0]).a[($a[0]).i]), $t8 ? {a: $t8.a, i: $t8.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZSt13move_iteratorIP1PE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt13move_iteratorIP1PE4baseEv() {
          return (this._M_current$_ZSt13move_iteratorIP1PE ? {a: this._M_current$_ZSt13move_iteratorIP1PE.a, i: this._M_current$_ZSt13move_iteratorIP1PE.i} : null);
        }
        _ZNKSt13move_iteratorIP1PEdeEv() {
          return _ZSt4moveI1PEOS_S0_(this._M_current$_ZSt13move_iteratorIP1PE);
        }
        _ZNSt13move_iteratorIP1PEppEv() {
          ++this._M_current$_ZSt13move_iteratorIP1PE.i;
          return {a: [this], i: 0};
        }
      }
      class _ZSt11conditionalILi0EP1PSt13move_iteratorIS0_EE {
        __init__ZSt11conditionalILi0EP1PSt13move_iteratorIS0_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIO1PE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIO1PE(...$a);
        }
        __init__ZSt19__declval_protectorIO1PE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIR1PE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIR1PE(...$a);
        }
        __init__ZSt19__declval_protectorIR1PE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 1, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(__os, __s) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
        return __os;
      }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _Z1fSt4pairIiiE(p) {
        return (((p.first$_ZSt4pairIiiE) + (p.second$_ZSt4pairIiiE)) | 0);
      }
      function _Z1g1P(p) {
        return (((((Math.imul(p.a, 10)) | 0)) + (p.b)) | 0);
      }
      function _Z5setitRi(x) {
        x.a[x.i] = 5;
      }
      function main() {
        let $t9, $t10;
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE3tieEPS2_.call(_ZSt4cout.v, null);
        let v = new _ZSt6vectorI1PSt9allocatorIS0_EE();
        let x = 3;
        _ZSt6vectorI1PSt9allocatorIS0_EE.prototype._ZNSt6vectorI1PSt9allocatorIS0_EE9push_backERKS0_.call(v, {a: [new _Z1P(x, 1)], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm({a: _ZSt4cout, i: "v"}, _ZSt6vectorI1PSt9allocatorIS0_EE.prototype._ZNKSt6vectorI1PSt9allocatorIS0_EE4sizeEv.call(v)), {a: [32, 0], i: 0}), (($t9 = v._ZNSt6vectorI1PSt9allocatorIS0_EEixEm(((0) >>> 0)), $t9.a[$t9.i])).a), {a: [32, 0], i: 0}), (($t10 = v._ZNSt6vectorI1PSt9allocatorIS0_EEixEm(((0) >>> 0)), $t10.a[$t10.i])).b), {a: [32, 0], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, (((_Z1fSt4pairIiiE(new _ZSt4pairIiiE({a: [x], i: 0}, {a: [4], i: 0}))) + (_Z1g1P(new _Z1P(2, 5)))) | 0)), {a: [10, 0], i: 0});
        let p1 = {v: new _Z2NB(1)};
        let p2 = {v: new _Z2NB(2)};
        let t = new _Z2TrIiE();
        let r = _Z2TrIiE.prototype._ZN2TrIiE4pickEP2NBS1_.call(t, (({a: p1, i: "v"}) ? {a: ({a: p1, i: "v"}).a, i: ({a: p1, i: "v"}).i} : null), (({a: p2, i: "v"}) ? {a: ({a: p2, i: "v"}).a, i: ({a: p2, i: "v"}).i} : null));
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, (r.first$_ZSt4pairIP2NBS0_E.a[r.first$_ZSt4pairIP2NBS0_E.i]).v), {a: [32, 0], i: 0}), (r.second$_ZSt4pairIP2NBS0_E.a[r.second$_ZSt4pairIP2NBS0_E.i]).v), {a: [10, 0], i: 0});
        _Z5setitRi({a: _Z1a.v, i: (1)});
        let q = {a: _Z1a.v, i: (2)};
        q.a[q.i] = 7;
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, _Z1a.v[1]), {a: [32, 0], i: 0}), _Z1a.v[2]), {a: [10, 0], i: 0});
        return 0;
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt7declvalIRP2NBES_v() {
        return _ZSt19__declval_protectorIRP2NBE._ZNSt19__declval_protectorIRP2NBE10__delegateEv();
      }
      function _ZSt7declvalIP2NBEOS_v() {
        return _ZSt19__declval_protectorIP2NBE._ZNSt19__declval_protectorIP2NBE10__delegateEv();
      }
      function _ZSt7declvalIO1PES_v() {
        return _ZSt19__declval_protectorIO1PE._ZNSt19__declval_protectorIO1PE10__delegateEv();
      }
      function _ZSt7declvalIR1PES_v() {
        return _ZSt19__declval_protectorIR1PE._ZNSt19__declval_protectorIR1PE10__delegateEv();
      }
      function _ZSt7forwardI1PEOS_S0_(__t) {
        return __t;
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIP1PS_St9allocatorIS0_EES_S_S_S_RS2_(__first, __last, __result, __alloc) {
        let $t11;
        return ($t11 = _ZSt22__uninitialized_copy_aISt13move_iteratorIP1PES0_St9allocatorIS1_EES0_S2_S2_S0_RS4_(_ZSt32__make_move_if_noexcept_iteratorIP1PSt13move_iteratorIS_EES2_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIP1PSt13move_iteratorIS_EES2_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t11 ? {a: $t11.a, i: $t11.i} : null);
      }
      function _ZSt8_DestroyIP1PSt9allocatorIS0_EEvS_S_RS2_(__first, __last, __alloc) {
        let $t12;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE7destroyIS2_EEvRS3_PS2_(__alloc, ($t12 = _ZSt11__addressofI1PEPS_RS_(__first), $t12 ? {a: $t12.a, i: $t12.i} : null));
        }
      }
      function _ZSt3maxImERKmS_S_(__a, __b) {
        if ((__a.a[__a.i] < __b.a[__b.i])) {
          return __b;
        }
        return __a;
      }
      function _ZSt32__make_move_if_noexcept_iteratorIP1PSt13move_iteratorIS_EES2_S_(__i) {
        return new _ZSt13move_iteratorIP1PE((__i ? {a: __i.a, i: __i.i} : null));
      }
      function _ZSt22__uninitialized_copy_aISt13move_iteratorIP1PES0_St9allocatorIS1_EES0_S2_S2_S0_RS4_(__first, __last, __result, __alloc) {
        let $t13;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIP1PS_EbRKSt13move_iteratorIS_ES1_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIP1PEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorI1PEE9constructIS2_EEvRS3_PS2_RKS2_(__alloc, ($t13 = _ZSt11__addressofI1PEPS_RS_(__cur), $t13 ? {a: $t13.a, i: $t13.i} : null), __first._ZNKSt13move_iteratorIP1PEdeEv());
            }
            return (__cur ? {a: __cur.a, i: __cur.i} : null);
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIP1PSt9allocatorIS0_EEvS_S_RS2_((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
      }
      function _ZSt11__addressofI1PEPS_RS_(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZStneIP1PS_EbRKSt13move_iteratorIS_ES1_(__x, __y) {
        return (!(_ZSteqIP1PS_EbRKSt13move_iteratorIS_ES1_(__x, __y)));
      }
      function _ZSteqIP1PS_EbRKSt13move_iteratorIS_ES1_(__x, __y) {
        let $t14, $t15, $t16, $t17;
        return ($t16 = ($t14 = _ZSt13move_iteratorIP1PE.prototype._ZNKSt13move_iteratorIP1PE4baseEv.call(__x.a[__x.i]), $t14), $t17 = ($t15 = _ZSt13move_iteratorIP1PE.prototype._ZNKSt13move_iteratorIP1PE4baseEv.call(__y.a[__y.i]), $t15), ($t16 === $t17 || ($t16 && $t17 && $t16.a === $t17.a && $t16.i === $t17.i)));
      }
      function _ZSt4moveI1PEOS_S0_(__t) {
        return __t;
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
      let _ZSt13allocator_arg = new _ZSt15allocator_arg_t();
      let _ZSt6ignore = new _ZSt15_Swallow_assign();
      let _ZN9__gnu_cxx21__default_lock_policyE = 0;
      let _Z1a = {v: new Array(10).fill(0)};
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
