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
      class _Z2tm {
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
          this.__init__Z2tm(...$a);
        }
        __init__Z2tm(...$a) {
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
      class _ZSt14__sfinae_types {
        __init__ZSt14__sfinae_types(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt14__sfinae_types11$24class_50E {
        __arr;
        constructor(...$a) {
          this.__init__ZNSt14__sfinae_types11$24class_50E(...$a);
        }
        __init__ZNSt14__sfinae_types11$24class_50E(...$a) {
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
      class _Z12$24class_152 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_152(...$a);
        }
        __init__Z12$24class_152(...$a) {
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
        static _ZNSt8ios_base15sync_with_stdioEb(__sync = true) {
          return true;
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
      class _ZSt10ctype_base {
        constructor(...$a) {
          this.__init__ZSt10ctype_base(...$a);
        }
        __init__ZSt10ctype_base(...$a) {
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
      class _Z12$24class_159 {
        done;
        started;
        constructor(...$a) {
          this.__init__Z12$24class_159(...$a);
        }
        __init__Z12$24class_159(...$a) {
          this.done = 0;
          this.started = 0;
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
      class _ZSt7complexIfE {
        __init__ZSt7complexIfE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7complexIdE {
        __init__ZSt7complexIdE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9type_info {
        __name;
        constructor(...$a) {
          this.__init__ZSt9type_info(...$a);
        }
        __init__ZSt9type_info(...$a) {
          this.__name = null;
        }
        __dtor() {
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
      class _ZSt13_Nocopy_types {
        _M_object;
        _M_const_object;
        _M_function_pointer;
        _M_member_pointer;
        constructor(...$a) {
          this.__init__ZSt13_Nocopy_types(...$a);
        }
        __init__ZSt13_Nocopy_types(...$a) {
          this._M_object = null;
          this._M_const_object = null;
          this._M_function_pointer = null;
          this._M_member_pointer = null;
        }
        __dtor() {
        }
      }
      class _ZSt9_Any_data {
        _M_unused;
        _M_pod_data;
        constructor(...$a) {
          this.__init__ZSt9_Any_data(...$a);
        }
        __init__ZSt9_Any_data(...$a) {
          this._M_unused = new _ZSt13_Nocopy_types();
          this._M_unused.ctj_a = this; this._M_unused.ctj_i = "_M_unused";
          this._M_pod_data = new Array(4).fill(0);
        }
        __dtor() {
        }
      }
      class _ZSt14_Function_base {
        _M_functor;
        _M_manager;
        constructor(...$a) {
          this.__init__ZSt14_Function_base(...$a);
        }
        __init__ZSt14_Function_base(...$a) {
          this._M_functor = new _ZSt9_Any_data();
          this._M_functor.ctj_a = this; this._M_functor.ctj_i = "_M_functor";
          this._M_manager = 0;
        }
        __dtor() {
        }
        static _M_max_size = 4;
        static _M_max_align = 4;
      }
      class _ZSt14_Bit_reference {
        _M_p;
        _M_mask;
        constructor(...$a) {
          this.__init__ZSt14_Bit_reference(...$a);
        }
        __init__ZSt14_Bit_reference(...$a) {
          this._M_p = null;
          this._M_mask = 0;
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
      class _ZNSt22bernoulli_distribution10param_typeE {
        _M_p;
        constructor(...$a) {
          this.__init__ZNSt22bernoulli_distribution10param_typeE(...$a);
        }
        __init__ZNSt22bernoulli_distribution10param_typeE(...$a) {
          this._M_p = ($a[0] === undefined ? (0.5) : $a[0]);
        }
        __dtor() {
        }
      }
      class _ZSt22bernoulli_distribution {
        _M_param;
        constructor(...$a) {
          this.__init__ZSt22bernoulli_distribution(...$a);
        }
        __init__ZSt22bernoulli_distribution(...$a) {
          this._M_param = new _ZNSt22bernoulli_distribution10param_typeE(0.5);
          this._M_param.ctj_a = this; this._M_param.ctj_i = "_M_param";
        }
        __dtor() {
        }
      }
      class _ZSt12_Base_bitsetILi0EE {
        __init__ZSt12_Base_bitsetILi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6bitsetILi0EE extends _ZSt12_Base_bitsetILi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6bitsetILi0EE(...$a);
        }
        __init__ZSt6bitsetILi0EE(...$a) {
        }
        __dtor() {
          _ZSt12_Base_bitsetILi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt6locale5facetE {
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt6locale5facetE(...$a);
        }
        __init__ZNSt6locale5facetE(...$a) {
          this._M_refcount = 0;
        }
        __dtor() {
        }
        static _S_c_locale = null;
        static _S_c_name = null;
        static _S_once = new _ZNSt6locale5facetE();
      }
      class _ZNSt6locale2idE {
        _M_index;
        constructor(...$a) {
          this.__init__ZNSt6locale2idE(...$a);
        }
        __init__ZNSt6locale2idE(...$a) {
          this._M_index = 0;
        }
        __dtor() {
        }
        static _S_refcount = 0;
      }
      class _ZSt5ctypeIcE extends _ZNSt6locale5facetE {
        _M_c_locale_ctype$_ZSt5ctypeIcE;
        _M_del$_ZSt5ctypeIcE;
        _M_toupper$_ZSt5ctypeIcE;
        _M_tolower$_ZSt5ctypeIcE;
        _M_table$_ZSt5ctypeIcE;
        _M_widen_ok$_ZSt5ctypeIcE;
        _M_widen$_ZSt5ctypeIcE;
        _M_narrow$_ZSt5ctypeIcE;
        _M_narrow_ok$_ZSt5ctypeIcE;
        constructor(...$a) {
          super();
          this.__init__ZSt5ctypeIcE(...$a);
        }
        __init__ZSt5ctypeIcE(...$a) {
          _ZSt10ctype_base.prototype.__init__ZSt10ctype_base.call(this);
          this._M_c_locale_ctype$_ZSt5ctypeIcE = null;
          this._M_del$_ZSt5ctypeIcE = false;
          this._M_toupper$_ZSt5ctypeIcE = null;
          this._M_tolower$_ZSt5ctypeIcE = null;
          this._M_table$_ZSt5ctypeIcE = null;
          this._M_widen_ok$_ZSt5ctypeIcE = 0;
          this._M_widen$_ZSt5ctypeIcE = new Array(256).fill(0);
          this._M_narrow$_ZSt5ctypeIcE = new Array(256).fill(0);
          this._M_narrow_ok$_ZSt5ctypeIcE = 0;
        }
        __dtor() {
          _ZNSt6locale5facetE.prototype.__dtor.call(this);
          _ZSt10ctype_base.prototype.__dtor.call(this);
        }
        _ZNKSt5ctypeIcE8do_widenEc(__c) {
          return __c;
        }
        _ZNKSt5ctypeIcE8do_widenEPKcS1_Pc(__lo, __hi, __to) {
          _Z6memcpyPvPKvm((__to ? {a: __to.a, i: __to.i} : null), (__lo ? {a: __lo.a, i: __lo.i} : null), ((((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0))) >>> 0));
          return (__hi ? {a: __hi.a, i: __hi.i} : null);
        }
        _ZNKSt5ctypeIcE9do_narrowEcc(__c, __dfault) {
          return __c;
        }
        _ZNKSt5ctypeIcE9do_narrowEPKcS1_cPc(__lo, __hi, __dfault, __to) {
          _Z6memcpyPvPKvm((__to ? {a: __to.a, i: __to.i} : null), (__lo ? {a: __lo.a, i: __lo.i} : null), ((((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0))) >>> 0));
          return (__hi ? {a: __hi.a, i: __hi.i} : null);
        }
        static id = new _ZSt5ctypeIcE();
        static table_size = 256;
      }
      for (let $b = _ZSt10ctype_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt5ctypeIcE.prototype)) _ZSt5ctypeIcE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt5ctypeIcE)) _ZSt5ctypeIcE[$k] = $b[$k];
        }
      }
      class _ZSt10error_code {
        _M_value;
        _M_cat;
        constructor(...$a) {
          this.__init__ZSt10error_code(...$a);
        }
        __init__ZSt10error_code(...$a) {
          this._M_value = 0;
          this._M_cat = null;
        }
        __dtor() {
        }
      }
      class _ZSt15error_condition {
        _M_value;
        _M_cat;
        constructor(...$a) {
          this.__init__ZSt15error_condition(...$a);
        }
        __init__ZSt15error_condition(...$a) {
          this._M_value = 0;
          this._M_cat = null;
        }
        __dtor() {
        }
      }
      class _ZSt14error_category {
        __init__ZSt14error_category(...$a) { }
        __dtor() {
        }
        _ZNKSt14error_category4nameEv() {
          throw new Error("pure virtual called");
        }
        _ZNKSt14error_category7messageEi($p0) {
          throw new Error("pure virtual called");
        }
      }
      class _ZSt12defer_lock_t {
        constructor(...$a) {
          this.__init__ZSt12defer_lock_t(...$a);
        }
        __init__ZSt12defer_lock_t(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt13try_to_lock_t {
        constructor(...$a) {
          this.__init__ZSt13try_to_lock_t(...$a);
        }
        __init__ZSt13try_to_lock_t(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12adopt_lock_t {
        constructor(...$a) {
          this.__init__ZSt12adopt_lock_t(...$a);
        }
        __init__ZSt12adopt_lock_t(...$a) {
        }
        __dtor() {
        }
      }
      class _ZNSt8__detail14_PatternCursorE {
        __init__ZNSt8__detail14_PatternCursorE(...$a) { }
        __dtor() {
        }
        _ZNSt8__detail14_PatternCursor7_M_nextEv() {
          throw new Error("pure virtual called");
        }
        _ZNKSt8__detail14_PatternCursor9_M_at_endEv() {
          throw new Error("pure virtual called");
        }
      }
      class _ZNSt8__detail8_ResultsE {
        __init__ZNSt8__detail8_ResultsE(...$a) { }
        __dtor() {
        }
        _ZNSt8__detail8_Results10_M_set_posEiiRKNS_14_PatternCursorE(__i, __j, __p) {
          throw new Error("pure virtual called");
        }
        _ZNSt8__detail8_Results14_M_set_matchedEib(__i, __is_matched) {
          throw new Error("pure virtual called");
        }
      }
      class _ZSt14unary_functionIRNSt8__detail14_PatternCursorEbE {
        __init__ZSt14unary_functionIRNSt8__detail14_PatternCursorEbE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt31_Maybe_unary_or_binary_functionIbRKNSt8__detail14_PatternCursorEE extends _ZSt14unary_functionIRNSt8__detail14_PatternCursorEbE {
        constructor(...$a) {
          super();
          this.__init__ZSt31_Maybe_unary_or_binary_functionIbRKNSt8__detail14_PatternCursorEE(...$a);
        }
        __init__ZSt31_Maybe_unary_or_binary_functionIbRKNSt8__detail14_PatternCursorEE(...$a) {
        }
        __dtor() {
          _ZSt14unary_functionIRNSt8__detail14_PatternCursorEbE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE extends _ZSt31_Maybe_unary_or_binary_functionIbRKNSt8__detail14_PatternCursorEE {
        _M_invoker$_ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE;
        constructor(...$a) {
          super();
          this.__init__ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE(...$a);
        }
        __init__ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE(...$a) {
          _ZSt14_Function_base.prototype.__init__ZSt14_Function_base.call(this);
          this._M_invoker$_ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE = null;
        }
        __dtor() {
          _ZSt31_Maybe_unary_or_binary_functionIbRKNSt8__detail14_PatternCursorEE.prototype.__dtor.call(this);
          _ZSt14_Function_base.prototype.__dtor.call(this);
        }
      }
      for (let $b = _ZSt14_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE.prototype)) _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE)) _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE[$k] = $b[$k];
        }
      }
      class _ZSt15binary_functionIRNSt8__detail14_PatternCursorERNS1_8_ResultsEvE {
        __init__ZSt15binary_functionIRNSt8__detail14_PatternCursorERNS1_8_ResultsEvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt31_Maybe_unary_or_binary_functionIvRKNSt8__detail14_PatternCursorERNS2_8_ResultsEE extends _ZSt15binary_functionIRNSt8__detail14_PatternCursorERNS1_8_ResultsEvE {
        constructor(...$a) {
          super();
          this.__init__ZSt31_Maybe_unary_or_binary_functionIvRKNSt8__detail14_PatternCursorERNS2_8_ResultsEE(...$a);
        }
        __init__ZSt31_Maybe_unary_or_binary_functionIvRKNSt8__detail14_PatternCursorERNS2_8_ResultsEE(...$a) {
        }
        __dtor() {
          _ZSt15binary_functionIRNSt8__detail14_PatternCursorERNS1_8_ResultsEvE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE extends _ZSt31_Maybe_unary_or_binary_functionIvRKNSt8__detail14_PatternCursorERNS2_8_ResultsEE {
        _M_invoker$_ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE;
        constructor(...$a) {
          super();
          this.__init__ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE(...$a);
        }
        __init__ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE(...$a) {
          _ZSt14_Function_base.prototype.__init__ZSt14_Function_base.call(this);
          this._M_invoker$_ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE = null;
        }
        __dtor() {
          _ZSt31_Maybe_unary_or_binary_functionIvRKNSt8__detail14_PatternCursorERNS2_8_ResultsEE.prototype.__dtor.call(this);
          _ZSt14_Function_base.prototype.__dtor.call(this);
        }
      }
      for (let $b = _ZSt14_Function_base; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE.prototype)) _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE)) _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE[$k] = $b[$k];
        }
      }
      class _ZNSt8__detail6_StateE {
        _M_opcode;
        _M_next;
        _M_alt;
        _M_subexpr;
        _M_tagger;
        _M_matches;
        constructor(...$a) {
          this.__init__ZNSt8__detail6_StateE(...$a);
        }
        __init__ZNSt8__detail6_StateE(...$a) {
          this._M_opcode = 0;
          this._M_next = 0;
          this._M_alt = 0;
          this._M_subexpr = 0;
          this._M_tagger = new _ZSt8functionIFvRKNSt8__detail14_PatternCursorERNS3_8_ResultsEEE();
          this._M_tagger.ctj_a = this; this._M_tagger.ctj_i = "_M_tagger";
          this._M_matches = new _ZSt8functionIFbRKNSt8__detail14_PatternCursorEEE();
          this._M_matches.ctj_a = this; this._M_matches.ctj_i = "_M_matches";
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorINSt8__detail6_StateEEE {
        __init__ZN9__gnu_cxx13new_allocatorINSt8__detail6_StateEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorINSt8__detail6_StateEE extends _ZN9__gnu_cxx13new_allocatorINSt8__detail6_StateEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorINSt8__detail6_StateEE(...$a);
        }
        __init__ZSt9allocatorINSt8__detail6_StateEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorINSt8__detail6_StateEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE12_Vector_implE extends _ZSt9allocatorINSt8__detail6_StateEE {
        _M_start;
        _M_finish;
        _M_end_of_storage;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE12_Vector_implE(...$a) {
          this._M_start = null;
          this._M_finish = null;
          this._M_end_of_storage = null;
        }
        __dtor() {
          _ZSt9allocatorINSt8__detail6_StateEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE {
        _M_impl$_ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE(...$a);
        }
        __init__ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE(...$a) {
          this._M_impl$_ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE = new _ZNSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE12_Vector_implE();
          this._M_impl$_ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE.ctj_i = "_M_impl$_ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE";
        }
        __dtor() {
        }
      }
      class _ZSt6vectorINSt8__detail6_StateESt9allocatorIS1_EE extends _ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6vectorINSt8__detail6_StateESt9allocatorIS1_EE(...$a);
        }
        __init__ZSt6vectorINSt8__detail6_StateESt9allocatorIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt12_Vector_baseINSt8__detail6_StateESt9allocatorIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorINSt8__detail6_StateEEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorINSt8__detail6_StateEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorINSt8__detail6_StateEEE6rebindIS3_EE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorINSt8__detail6_StateEEE6rebindIS3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorINSt8__detail6_StateEE6rebindIS1_EE {
        __init__ZNSt9allocatorINSt8__detail6_StateEE6rebindIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10type_index {
        _M_target;
        constructor(...$a) {
          this.__init__ZSt10type_index(...$a);
        }
        __init__ZSt10type_index(...$a) {
          this._M_target = null;
        }
        __dtor() {
        }
      }
      class _ZN2ft4nodeE {
        x;
        c;
        sz;
        ct;
        l;
        r;
        constructor(...$a) {
          this.__init__ZN2ft4nodeE(...$a);
        }
        __init__ZN2ft4nodeE(...$a) {
          this.x = 0;
          this.c = 0;
          this.sz = 0;
          this.ct = 0;
          this.l = 0;
          this.r = 0;
        }
        __dtor() {
        }
      }
      class _Z2ft {
        tl;
        rt;
        p;
        constructor(...$a) {
          this.__init__Z2ft(...$a);
        }
        __init__Z2ft(...$a) {
          this.tl = 0;
          this.rt = 0;
          this.p = Array.from({length: 1100006}, () => new _ZN2ft4nodeE());
        }
        __dtor() {
        }
        _ZN2ft6pushupEi(u) {
          (this.p[u]).sz = (((((((this.p[u]).c) + ((this.p[(this.p[u]).l]).sz)) | 0)) + ((this.p[(this.p[u]).r]).sz)) | 0);
          (this.p[u]).ct = ((((((1) + ((this.p[(this.p[u]).l]).ct)) | 0)) + ((this.p[(this.p[u]).r]).ct)) | 0);
        }
        _ZN2ft7setnodeEii(x, c) {
          let u = (this.tl = ((this.tl + 1) | 0));
          (((this.p[u]).x = x, (this.p[u]).c = (this.p[u]).sz = c), (this.p[u]).ct = 1);
          return u;
        }
        _ZN2ft7buildatERKSt6vectorISt4pairIiiESt9allocatorIS4_EEii(x, l, r) {
          let $t0, $t1;
          if ((l >= r)) {
            return 0;
          }
          let u = this._ZN2ft7setnodeEii((($t0 = (x.a[x.i])._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EEixEm(((l) >>> 0)), $t0.a[$t0.i])).first$_ZSt4pairIiiE, (($t1 = (x.a[x.i])._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EEixEm(((l) >>> 0)), $t1.a[$t1.i])).second$_ZSt4pairIiiE);
          if (((((l) + (1)) | 0) < r)) {
             {
              (this.p[u]).l = this._ZN2ft7buildatERKSt6vectorISt4pairIiiESt9allocatorIS4_EEii(x, (((l) + (1)) | 0), (((((l) + (r)) | 0)) >> (1)));
              (this.p[u]).r = this._ZN2ft7buildatERKSt6vectorISt4pairIiiESt9allocatorIS4_EEii(x, (((((l) + (r)) | 0)) >> (1)), r);
              this._ZN2ft6pushupEi(u);
            }
          }
          return u;
        }
        _ZN2ft8insertndERii(u, v) {
          if ((!v)) {
            return;
          }
          if ((!(u.a[u.i]))) {
             {
              u.a[u.i] = v;
              return;
            }
          }
          if ((!((this.p[u.a[u.i]]).r))) {
            (this.p[u.a[u.i]]).r = v;
          }
          else {
            this._ZN2ft8insertndERii({a: this.p[u.a[u.i]], i: "r"}, v);
          }
          (this._ZN2ft6pushupEi(u.a[u.i]), this._ZN2ft4foldERi(u));
        }
        _ZN2ft7erasendERi(u) {
          if ((!((this.p[u.a[u.i]]).l))) {
             {
              u.a[u.i] = (this.p[u.a[u.i]]).r;
              return;
            }
          }
          if ((!((this.p[u.a[u.i]]).r))) {
             {
              u.a[u.i] = (this.p[u.a[u.i]]).l;
              return;
            }
          }
          (((this.p[u.a[u.i]]).x = (this.p[(this.p[u.a[u.i]]).l]).x, (this.p[u.a[u.i]]).c = (this.p[(this.p[u.a[u.i]]).l]).c), this._ZN2ft7erasendERi({a: this.p[u.a[u.i]], i: "l"}));
          (this._ZN2ft6pushupEi(u.a[u.i]), this._ZN2ft4foldERi(u));
        }
        _ZN2ft8insertatERiii(u, x, c) {
          x = {v: x};
          c = {v: c};
          if ((!(u.a[u.i]))) {
             {
              u.a[u.i] = this._ZN2ft7setnodeEii(x.v, c.v);
              return;
            }
          }
          if ((x.v === (this.p[u.a[u.i]]).x)) {
             {
              ((this.p[u.a[u.i]]).c = ((((((this.p[u.a[u.i]]).c) + (c.v)) | 0)) | 0), (this.p[u.a[u.i]]).sz = ((((((this.p[u.a[u.i]]).sz) + (c.v)) | 0)) | 0));
              return;
            }
          }
          if ((x.v < (this.p[u.a[u.i]]).x)) {
            (_ZSt4swapIiEvRiS_({a: x, i: "v"}, {a: this.p[u.a[u.i]], i: "x"}), _ZSt4swapIiEvRiS_({a: c, i: "v"}, {a: this.p[u.a[u.i]], i: "c"}));
          }
          if (((this.p[u.a[u.i]]).r && (x.v >= (this.p[(this.p[u.a[u.i]]).r]).x))) {
            this._ZN2ft8insertatERiii({a: this.p[u.a[u.i]], i: "r"}, x.v, c.v);
          }
          else {
            this._ZN2ft8insertatERiii({a: this.p[u.a[u.i]], i: "l"}, x.v, c.v);
          }
          (this._ZN2ft6pushupEi(u.a[u.i]), this._ZN2ft4foldERi(u));
        }
        _ZN2ft7eraseatERii(u, x) {
          let $t2, $t3;
          if ((!(u.a[u.i]))) {
            return;
          }
          if (((x === (this.p[u.a[u.i]]).x) && ((this.p[u.a[u.i]]).c > 1))) {
             {
              (($t2 = (this.p[u.a[u.i]]).c, (this.p[u.a[u.i]]).c = (($t2 - 1) | 0), $t2), ($t3 = (this.p[u.a[u.i]]).sz, (this.p[u.a[u.i]]).sz = (($t3 - 1) | 0), $t3));
              return;
            }
          }
          if ((x === (this.p[u.a[u.i]]).x)) {
             {
              this._ZN2ft7erasendERi(u);
              return;
            }
          }
          if (((this.p[u.a[u.i]]).r && (x >= (this.p[(this.p[u.a[u.i]]).r]).x))) {
            this._ZN2ft7eraseatERii({a: this.p[u.a[u.i]], i: "r"}, x);
          }
          else {
            this._ZN2ft7eraseatERii({a: this.p[u.a[u.i]], i: "l"}, x);
          }
          (this._ZN2ft6pushupEi(u.a[u.i]), this._ZN2ft4foldERi(u));
        }
        _ZN2ft8countlatEii(u, x) {
          let c = 0;
          while (u) {
            if ((x > (this.p[u]).x)) {
               {
                c = (((((c) + ((this.p[u]).c)) | 0)) | 0);
                if (((!((this.p[u]).r)) || (x < (this.p[(this.p[u]).r]).x))) {
                  u = (this.p[u]).l;
                }
                else {
                  (c = (((((c) + ((this.p[(this.p[u]).l]).sz)) | 0)) | 0), u = (this.p[u]).r);
                }
              }
            }
            else {
              return c;
            }
          }
          return c;
        }
        _ZN2ft8getkthatEii(u, k) {
          while (u) {
            if ((k > (this.p[u]).c)) {
               {
                k = (((((k) - ((this.p[u]).c)) | 0)) | 0);
                if ((k <= (this.p[(this.p[u]).l]).sz)) {
                  u = (this.p[u]).l;
                }
                else {
                  (k = (((((k) - ((this.p[(this.p[u]).l]).sz)) | 0)) | 0), u = (this.p[u]).r);
                }
              }
            }
            else {
              return (this.p[u]).x;
            }
          }
          return ((-(1)) | 0);
        }
        _ZN2ft4foldERi(u) {
          if ((!(u.a[u.i]))) {
            return;
          }
          if ((((this.p[(this.p[u.a[u.i]]).r]).ct > (((((((this.p[(this.p[u.a[u.i]]).l]).ct) << (1)) | 0)) + (1)) | 0)) && ((this.p[(this.p[u.a[u.i]]).r]).l || (this.p[(this.p[u.a[u.i]]).r]).r))) {
             {
              let v = (this.p[u.a[u.i]]).r;
              if (((this.p[v]).l && (!((this.p[v]).r)))) {
                _ZSt4swapIiEvRiS_({a: this.p[v], i: "l"}, {a: this.p[v], i: "r"});
              }
              let w = (this.p[v]).r;
              if (((this.p[(this.p[v]).l]).ct >= 2)) {
                 {
                  let vl = (this.p[v]).l;
                  if (((this.p[vl]).l && (!((this.p[vl]).r)))) {
                    _ZSt4swapIiEvRiS_({a: this.p[vl], i: "l"}, {a: this.p[vl], i: "r"});
                  }
                  let tp = (this.p[vl]).r;
                  (this.p[vl]).r = 0;
                  (this._ZN2ft6pushupEi(vl), (this.p[v]).r = tp);
                  this._ZN2ft6pushupEi(v);
                }
              }
              else {
                (this.p[v]).r = 0;
              }
              this._ZN2ft6pushupEi(v);
              (this._ZN2ft8insertndERii({a: this.p[u.a[u.i]], i: "l"}, v), (this.p[u.a[u.i]]).r = w);
              this._ZN2ft6pushupEi(u.a[u.i]);
              return;
            }
          }
          if ((((this.p[(this.p[u.a[u.i]]).l]).ct > (((((((this.p[(this.p[u.a[u.i]]).r]).ct) << (1)) | 0)) + (1)) | 0)) && ((this.p[(this.p[u.a[u.i]]).l]).l || (this.p[(this.p[u.a[u.i]]).l]).r))) {
             {
              let v = (this.p[u.a[u.i]]).l;
              if (((this.p[v]).l && (!((this.p[v]).r)))) {
                _ZSt4swapIiEvRiS_({a: this.p[v], i: "l"}, {a: this.p[v], i: "r"});
              }
              let w = {v: (this.p[v]).r};
              if (((this.p[(this.p[v]).l]).ct >= 2)) {
                 {
                  let vl = (this.p[v]).l;
                  if (((this.p[vl]).l && (!((this.p[vl]).r)))) {
                    _ZSt4swapIiEvRiS_({a: this.p[vl], i: "l"}, {a: this.p[vl], i: "r"});
                  }
                  let tp = (this.p[vl]).r;
                  (this.p[vl]).r = 0;
                  (this._ZN2ft6pushupEi(vl), (this.p[v]).r = tp);
                  this._ZN2ft6pushupEi(v);
                }
              }
              else {
                ((this.p[v]).r = 0, this._ZN2ft6pushupEi(v));
              }
              (this._ZN2ft8insertndERii({a: w, i: "v"}, (this.p[u.a[u.i]]).r), (this.p[u.a[u.i]]).r = w.v);
              this._ZN2ft6pushupEi(u.a[u.i]);
              return;
            }
          }
        }
        _ZN2ft5buildERKSt6vectorISt4pairIiiESt9allocatorIS4_EE(x) {
          this.rt = this._ZN2ft7buildatERKSt6vectorISt4pairIiiESt9allocatorIS4_EEii(x, 0, ((_ZSt6vectorISt4pairIiiESt9allocatorIS1_EE.prototype._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv.call(x.a[x.i])) | 0));
        }
        _ZN2ft6insertEi(x) {
          this._ZN2ft8insertatERiii({a: this, i: "rt"}, x, 1);
        }
        _ZN2ft5eraseEi(x) {
          this._ZN2ft7eraseatERii({a: this, i: "rt"}, x);
        }
        _ZN2ft3kthEi(k) {
          return this._ZN2ft8getkthatEii(this.rt, k);
        }
        _ZN2ft3rnkEi(x) {
          return (((this._ZN2ft8countlatEii(this.rt, x)) + (1)) | 0);
        }
        _ZN2ft3prvEi(x) {
          return this._ZN2ft8getkthatEii(this.rt, this._ZN2ft8countlatEii(this.rt, x));
        }
        _ZN2ft3nxtEi(x) {
          return this._ZN2ft8getkthatEii(this.rt, (((this._ZN2ft8countlatEii(this.rt, (((x) + (1)) | 0))) + (1)) | 0));
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
        _ZNSt13basic_ostreamIcSt11char_traitsIcEE8_M_putllEix(__k, __v) {
          ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(t)$io.write(fd,t);})((__k),(__v),(0),(0),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE)));
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
        _ZNSt13basic_istreamIcSt11char_traitsIcEE3tieEPSt13basic_ostreamIcS1_E(__tie) {
          let __old = (this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE ? {a: this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE.a, i: this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE.i} : null);
          this._M_tie$_ZSt13basic_istreamIcSt11char_traitsIcEE = (__tie ? {a: __tie.a, i: __tie.i} : null);
          return (__old ? {a: __old.a, i: __old.i} : null);
        }
        _ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(__s) {
          this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE = (((this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE) | (__s)) | 0);
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
      }
      class _ZSt12_Base_bitsetILi1EE {
        _M_w$_ZSt12_Base_bitsetILi1EE;
        constructor(...$a) {
          this.__init__ZSt12_Base_bitsetILi1EE(...$a);
        }
        __init__ZSt12_Base_bitsetILi1EE(...$a) {
          this._M_w$_ZSt12_Base_bitsetILi1EE = Number(BigInt.asUintN(32, $a[0]));
        }
        __dtor() {
        }
      }
      class _ZSt6bitsetILi11EE extends _ZSt12_Base_bitsetILi1EE {
        constructor(...$a) {
          super(...[_ZSt13_Sanitize_valILi11ELi1EE._ZNSt13_Sanitize_valILi11ELi1EE18_S_do_sanitize_valEy($a[0])]);
          this.__init__ZSt6bitsetILi11EE(...$a);
        }
        __init__ZSt6bitsetILi11EE(...$a) {
        }
        __dtor() {
          _ZSt12_Base_bitsetILi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11char_traitsIiE {
        __init__ZSt11char_traitsIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorIiEE {
        __init__ZN9__gnu_cxx13new_allocatorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorIiE extends _ZN9__gnu_cxx13new_allocatorIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIiE(...$a);
        }
        __init__ZSt9allocatorIiE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE9_Rep_baseE {
        _M_length;
        _M_capacity;
        _M_refcount;
        constructor(...$a) {
          this.__init__ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE9_Rep_baseE(...$a);
        }
        __init__ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE9_Rep_baseE(...$a) {
          this._M_length = 0;
          this._M_capacity = 0;
          this._M_refcount = 0;
        }
        __dtor() {
        }
      }
      class _ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE12_Alloc_hiderE extends _ZSt9allocatorIiE {
        _M_p;
        constructor(...$a) {
          super();
          this.__init__ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE12_Alloc_hiderE(...$a);
        }
        __init__ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE12_Alloc_hiderE(...$a) {
          this._M_p = null;
        }
        __dtor() {
          _ZSt9allocatorIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE {
        _M_dataplus$_ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE;
        constructor(...$a) {
          this.__init__ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE(...$a);
        }
        __init__ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE(...$a) {
          this._M_dataplus$_ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE = new _ZNSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE12_Alloc_hiderE();
          this._M_dataplus$_ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE.ctj_a = this; this._M_dataplus$_ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE.ctj_i = "_M_dataplus$_ZSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEE";
        }
        __dtor() {
        }
        static npos = 4294967295;
      }
      class _ZNSt9allocatorIiE6rebindIiEE {
        __init__ZNSt9allocatorIiE6rebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPiSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPiSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPiSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEEEE(...$a) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt12basic_stringIiSt11char_traitsIiESt9allocatorIiEEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt13_Sanitize_valILi11ELi1EE {
        __init__ZSt13_Sanitize_valILi11ELi1EE(...$a) { }
        __dtor() {
        }
        static _ZNSt13_Sanitize_valILi11ELi1EE18_S_do_sanitize_valEy(__val) {
          return BigInt.asUintN(64, (__val) & (BigInt.asUintN(64, ~(BigInt.asUintN(64, (BigInt.asUintN(64, ~(0n))) << (11n))))));
        }
      }
      class _ZSt9basic_iosIcSt11char_traitsIcEE extends _ZSt8ios_base {
        constructor(...$a) {
          super();
          this.__init__ZSt9basic_iosIcSt11char_traitsIcEE(...$a);
        }
        __init__ZSt9basic_iosIcSt11char_traitsIcEE(...$a) {
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
      class _ZSt4pairIiiE {
        first$_ZSt4pairIiiE;
        second$_ZSt4pairIiiE;
        constructor(...$a) {
          this.__init__ZSt4pairIiiE(...$a);
        }
        __init__ZSt4pairIiiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIiiE)) {
            this.first$_ZSt4pairIiiE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIiiE;
            this.second$_ZSt4pairIiiE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIiiE;
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIiiE)) {
            this.first$_ZSt4pairIiiE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIiiE;
            this.second$_ZSt4pairIiiE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIiiE;
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIiiE = ($a[0]).a[($a[0]).i];
            this.second$_ZSt4pairIiiE = ($a[1]).a[($a[1]).i];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt4pairIiiEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t4;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt4pairIiiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t4 = _Znwm(((Math.imul(__n, 8)) >>> 0)), $t4 ? {a: $t4.a, i: $t4.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt4pairIiiEE10deallocateEPS2_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt4pairIiiEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorISt4pairIiiEE9constructIS2_S2_EEvPS2_OS2_(__p, __args_0) {
          (__p.a[__p.i] = new _ZSt4pairIiiE(_ZSt7forwardISt4pairIiiEEOS0_S1_(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
        _ZN9__gnu_cxx13new_allocatorISt4pairIiiEE7destroyIS2_EEvPS2_(__p) {
          _ZSt4pairIiiE.prototype.__dtor.call(__p.a[__p.i]);
        }
      }
      class _ZSt9allocatorISt4pairIiiEE extends _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt4pairIiiEE(...$a);
        }
        __init__ZSt9allocatorISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE12_Vector_implE extends _ZSt9allocatorISt4pairIiiEE {
        _M_start;
        _M_finish;
        _M_end_of_storage;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE12_Vector_implE(...$a) {
          this._M_start = null;
          this._M_finish = null;
          this._M_end_of_storage = null;
        }
        __dtor() {
          _ZSt9allocatorISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE {
        _M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE(...$a);
        }
        __init__ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE(...$a) {
          this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE = new _ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE12_Vector_implE();
          this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE.ctj_i = "_M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE";
        }
        __dtor() {
        }
        _ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE19_M_get_Tp_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE"};
        }
        _ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE11_M_allocateEm(__n) {
          let $t5;
          return ($t5 = ((__n !== ((0) >>> 0)) ? _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt4pairIiiEE8allocateEmPKv.call(this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE, __n, {a: [0], i: 0}) : 0), $t5 ? {a: $t5.a, i: $t5.i} : null);
        }
        _ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE13_M_deallocateEPS1_m(__p, __n) {
          if (__p) {
            _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt4pairIiiEE10deallocateEPS2_m.call(this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE, (__p ? {a: __p.a, i: __p.i} : null), __n);
          }
        }
      }
      class _ZSt6vectorISt4pairIiiESt9allocatorIS1_EE extends _ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt6vectorISt4pairIiiESt9allocatorIS1_EE(...$a);
        }
        __init__ZSt6vectorISt4pairIiiESt9allocatorIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE.prototype.__dtor.call(this);
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE5beginEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE({a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE, i: "_M_start"});
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE3endEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE({a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE, i: "_M_finish"});
        }
        _ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv() {
          return ((((this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i : 0) - (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i : 0))) >>> 0);
        }
        _ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE8max_sizeEv() {
          return _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE8max_sizeERKS4_(this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE19_M_get_Tp_allocatorEv());
        }
        _ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE5emptyEv() {
          return _ZN9__gnu_cxxeqIPSt4pairIiiES0_St6vectorIS2_St9allocatorIS2_EEEEbRKNS_17__normal_iteratorIS0_S6_EES7_({a: [this._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE5beginEv()], i: 0}, {a: [this._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE3endEv()], i: 0});
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EEixEm(__n) {
          return ({a: (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i : 0) + (__n)});
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE4backEv() {
          let $t6, $t7;
          return (($t7 = (($t6 = this._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE3endEv(), $t6))._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEmiERKl({a: [1], i: 0}), $t7))._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEdeEv();
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE9push_backERKS1_(__x) {
          if ((!(this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish === this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage || (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish && this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage && this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.a === this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage.a && this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i === this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage.i)))) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE9constructIS3_EEvRS4_PS3_RKS3_({a: this, i: "_M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE"}, (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i} : null), __x);
              ++this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i;
            }
          }
          else {
            this._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE19_M_emplace_back_auxIS1_EEvOS1_(__x);
          }
        }
        _ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE12_M_check_lenEmPKc(__n, __s) {
          let $t8;
          __n = {v: __n};
          if (((((this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE8max_sizeEv()) - (this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv())) >>> 0) < __n.v)) {
            _ZSt20__throw_length_errorPKc((__s ? {a: __s.a, i: __s.i} : null));
          }
          let __len = (((this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv()) + (($t8 = _ZSt3maxImERKmS_S_({a: [this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv()], i: 0}, {a: __n, i: "v"}), $t8.a[$t8.i]))) >>> 0);
          return (((__len < this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv()) || (__len > this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE8max_sizeEv())) ? ((this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE8max_sizeEv()) >>> 0) : ((__len) >>> 0));
        }
        _ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE19_M_emplace_back_auxIS1_EEvOS1_(__args_0) {
          let $t9, $t10, $t11, $t12, $t13;
          let __len = this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE12_M_check_lenEmPKc(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
          let __new_start = ($t9 = _ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE.prototype._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE11_M_allocateEm.call(this, __len), $t9 ? {a: $t9.a, i: $t9.i} : null);
          let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE9constructIS3_EEvRS4_PS3_RKS3_({a: this, i: "_M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE"}, ($t10 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv())}), $t10 ? {a: $t10.a, i: $t10.i} : null), _ZSt7forwardISt4pairIiiEEOS0_S1_(__args_0));
              __new_finish = null;
              __new_finish = ($t11 = _ZSt34__uninitialized_move_if_noexcept_aIPSt4pairIiiES_St9allocatorIS1_EES_S_S_S_RS3_((this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE19_M_get_Tp_allocatorEv()), $t11 ? {a: $t11.a, i: $t11.i} : null);
              ++__new_finish.i;
            }
          }
          if (false) {
             {
              if ((!__new_finish)) {
                _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE7destroyIS3_EEvRS4_PS3_({a: this, i: "_M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE"}, ($t12 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE4sizeEv())}), $t12 ? {a: $t12.a, i: $t12.i} : null));
              }
              else {
                _ZSt8_DestroyIPSt4pairIiiESt9allocatorIS1_EEvS_S_RS3_((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE19_M_get_Tp_allocatorEv());
              }
              this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE13_M_deallocateEPS1_m((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
            }
          }
          _ZSt8_DestroyIPSt4pairIiiESt9allocatorIS1_EEvS_S_RS3_((this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish.i} : null), this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE19_M_get_Tp_allocatorEv());
          this._ZNSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE13_M_deallocateEPS1_m((this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i} : null), ((((this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage.i : 0) - (this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start ? this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start.i : 0))) >>> 0));
          this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
          this._M_impl$_ZSt12_Vector_baseISt4pairIiiESt9allocatorIS1_EE._M_end_of_storage = ($t13 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t13 ? {a: $t13.a, i: $t13.i} : null);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE9constructIS3_EEvRS4_PS3_RKS3_(__a, __p, __arg) {
          _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt4pairIiiEE9constructIS2_S2_EEvPS2_OS2_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE8max_sizeERKS4_(__a) {
          return _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt4pairIiiEE8max_sizeEv.call(__a.a[__a.i]);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE7destroyIS3_EEvRS4_PS3_(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorISt4pairIiiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt4pairIiiEE7destroyIS2_EEvPS2_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE6rebindIS3_EE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE6rebindIS3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorISt4pairIiiEE6rebindIS1_EE {
        __init__ZNSt9allocatorISt4pairIiiEE6rebindIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listISt4pairIiiEE {
        _M_array$_ZSt16initializer_listISt4pairIiiEE;
        _M_len$_ZSt16initializer_listISt4pairIiiEE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listISt4pairIiiEE(...$a);
        }
        __init__ZSt16initializer_listISt4pairIiiEE(...$a) {
          this._M_array$_ZSt16initializer_listISt4pairIiiEE = null;
          this._M_len$_ZSt16initializer_listISt4pairIiiEE = 0;
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
      class _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE(...$a) {
          let $t14, $t15, $t16;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE = ($t14 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(($a[0]).a[($a[0]).i]), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE = ($t16 = 0, $t16 ? {a: $t16.a, i: $t16.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEdeEv() {
          return this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE;
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEmiERKl(__n) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE({a: [({a: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.a : null), i: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.i : 0) - (__n.a[__n.i])})], i: 0});
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv() {
          return {a: this, i: "_M_current$_ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE"};
        }
      }
      class _ZSt10__are_sameIPSt4pairIiiES0_E {
        __init__ZSt10__are_sameIPSt4pairIiiES0_E(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx11__enable_ifILi1ESt6vectorISt4pairIiiESt9allocatorIS3_EEEE {
        __init__ZN9__gnu_cxx11__enable_ifILi1ESt6vectorISt4pairIiiESt9allocatorIS3_EEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPSt4pairIiiEE {
        __init__ZSt15iterator_traitsIPSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE {
        _M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE;
        _M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE;
        constructor(...$a) {
          this.__init__ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE(...$a);
        }
        __init__ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE(...$a) {
          this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE = new _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE();
          this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE.ctj_a = this; this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE.ctj_i = "_M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE";
          this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE = new _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE();
          this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE.ctj_a = this; this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE.ctj_i = "_M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS4_St9allocatorIS4_EEEEE";
        }
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
      class _ZSt7complexIPSt4pairIiiEE {
        _M_real$_ZSt7complexIPSt4pairIiiEE;
        _M_imag$_ZSt7complexIPSt4pairIiiEE;
        constructor(...$a) {
          this.__init__ZSt7complexIPSt4pairIiiEE(...$a);
        }
        __init__ZSt7complexIPSt4pairIiiEE(...$a) {
          this._M_real$_ZSt7complexIPSt4pairIiiEE = null;
          this._M_imag$_ZSt7complexIPSt4pairIiiEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt4pairIiiEE {
        __init__ZSt16remove_referenceISt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5tuple {
        __init__ZSt5tuple(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPiE {
        __init__ZSt15iterator_traitsIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIRKiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRKiiE(...$a);
        }
        __init__ZSt14is_convertibleIRKiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRiE(...$a);
        }
        __init__ZSt7is_voidIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRiE {
        __init__ZSt9remove_cvIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRiE {
        __init__ZSt15remove_volatileIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRiE {
        __init__ZSt12remove_constIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRiE(...$a);
        }
        __init__ZSt16__is_void_helperIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE extends _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRiESt11is_functionIiESt8is_arrayIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIiESt8is_arrayIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRiESt5__or_ISt11is_functionIiESt8is_arrayIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRiiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRiiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRiE(...$a);
        }
        __init__ZSt12is_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRiESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRiEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRiEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRiEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRiLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRiLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRiE extends _ZSt29__add_rvalue_reference_helperIRiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRKiiES3_E extends _ZSt14is_convertibleIRKiiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRKiiES3_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRKiiES3_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRKiiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRKiiES3_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRKiiES3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__move_if_noexcept_condISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__move_if_noexcept_condISt4pairIiiEE(...$a);
        }
        __init__ZSt23__move_if_noexcept_condISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt4pairIiiEE(...$a);
        }
        __init__ZSt7is_voidISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt4pairIiiEE {
        __init__ZSt9remove_cvISt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt4pairIiiEE {
        __init__ZSt15remove_volatileISt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt4pairIiiEE {
        __init__ZSt12remove_constISt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt16__is_void_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24is_nothrow_constructibleISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt24is_nothrow_constructibleISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt24is_nothrow_constructibleISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt36__is_nothrow_move_constructible_implISt4pairIiiELi0EE extends _ZSt24is_nothrow_constructibleISt4pairIiiEOS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt36__is_nothrow_move_constructible_implISt4pairIiiELi0EE(...$a);
        }
        __init__ZSt36__is_nothrow_move_constructible_implISt4pairIiiELi0EE(...$a) {
        }
        __dtor() {
          _ZSt24is_nothrow_constructibleISt4pairIiiEOS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt29is_nothrow_move_constructibleISt4pairIiiEE extends _ZSt36__is_nothrow_move_constructible_implISt4pairIiiELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt29is_nothrow_move_constructibleISt4pairIiiEE(...$a);
        }
        __init__ZSt29is_nothrow_move_constructibleISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt36__is_nothrow_move_constructible_implISt4pairIiiELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt16is_constructibleISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt25__is_direct_constructibleISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implISt4pairIiiEOS1_E extends _ZSt25__is_direct_constructibleISt4pairIiiEOS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt23__is_constructible_implISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleISt4pairIiiEOS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt4pairIiiEE(...$a);
        }
        __init__ZSt12is_referenceISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt4pairIiiEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt4pairIiiEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt4pairIiiEESt19is_rvalue_referenceIS2_EE extends _ZSt19is_rvalue_referenceISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt4pairIiiEESt19is_rvalue_referenceIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt4pairIiiEESt19is_rvalue_referenceIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt4pairIiiEESt19is_rvalue_referenceIS2_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt4pairIiiEESt19is_rvalue_referenceIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_ref_castISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIOSt4pairIiiES2_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIOSt4pairIiiES2_E(...$a);
        }
        __init__ZSt20__is_static_castableIOSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIOSt4pairIiiES2_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIOSt4pairIiiES2_E(...$a);
        }
        __init__ZSt25__is_static_castable_safeIOSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIOSt4pairIiiES2_E extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIOSt4pairIiiES2_E(...$a);
        }
        __init__ZSt25__is_static_castable_implIOSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIOSt4pairIiiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIOSt4pairIiiEE(...$a);
        }
        __init__ZSt12is_referenceIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIOSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIOSt4pairIiiEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIOSt4pairIiiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIOSt4pairIiiEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIOSt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIOSt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIOSt4pairIiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIOSt4pairIiiEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIOSt4pairIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIOSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIOSt4pairIiiEE(...$a);
        }
        __init__ZSt7is_voidIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIOSt4pairIiiEE {
        __init__ZSt9remove_cvIOSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIOSt4pairIiiEE {
        __init__ZSt15remove_volatileIOSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIOSt4pairIiiEE {
        __init__ZSt12remove_constIOSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIOSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIOSt4pairIiiEE(...$a);
        }
        __init__ZSt16__is_void_helperIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIOSt4pairIiiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIOSt4pairIiiEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIOSt4pairIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIOSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIOSt4pairIiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIOSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIOSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIOSt4pairIiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIOSt4pairIiiEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIOSt4pairIiiEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIOSt4pairIiiELi0EE {
        __init__ZSt29__add_rvalue_reference_helperIOSt4pairIiiELi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIOSt4pairIiiEE extends _ZSt29__add_rvalue_reference_helperIOSt4pairIiiELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIOSt4pairIiiEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIOSt4pairIiiELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIOSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIOSt4pairIiiEE(...$a);
        }
        __init__ZSt11is_functionIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS1_EE extends _ZSt11is_functionIOSt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIOSt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIOSt4pairIiiEESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIOSt4pairIiiEESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIOSt4pairIiiEESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIOSt4pairIiiES2_Li1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIOSt4pairIiiES2_Li1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIOSt4pairIiiES2_Li1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS3_EE extends _ZSt19is_lvalue_referenceIOSt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS3_EE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIOSt4pairIiiEESt19is_rvalue_referenceIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIOSt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_rvalue_referenceISt4pairIiiEESt19is_lvalue_referenceIOS2_EE {
        __init__ZSt11conditionalILi0ESt19is_rvalue_referenceISt4pairIiiEESt19is_lvalue_referenceIOS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIOSt4pairIiiES2_Li0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIOSt4pairIiiES2_Li0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIOSt4pairIiiES2_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE extends _ZSt25__is_lvalue_to_rvalue_refIOSt4pairIiiES2_Li0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIOSt4pairIiiES2_Li0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIOSt4pairIiiEE {
        __init__ZSt16remove_referenceIOSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_sameISt4pairIiiES1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_sameISt4pairIiiES1_E(...$a);
        }
        __init__ZSt7is_sameISt4pairIiiES1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_sameISt4pairIiiES2_EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_sameISt4pairIiiES2_EE(...$a);
        }
        __init__ZSt6__not_ISt7is_sameISt4pairIiiES2_EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_base_ofISt4pairIiiES1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_base_ofISt4pairIiiES1_E(...$a);
        }
        __init__ZSt10is_base_ofISt4pairIiiES1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt7is_sameISt4pairIiiES3_EESt10is_base_ofIS3_S3_EE extends _ZSt6__not_ISt7is_sameISt4pairIiiES2_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt7is_sameISt4pairIiiES3_EESt10is_base_ofIS3_S3_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt7is_sameISt4pairIiiES3_EESt10is_base_ofIS3_S3_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_sameISt4pairIiiES2_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt10is_base_ofISt4pairIiiES2_ESt6__not_ISt7is_sameIS2_S2_EEE {
        __init__ZSt11conditionalILi0ESt10is_base_ofISt4pairIiiES2_ESt6__not_ISt7is_sameIS2_S2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIOSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIOSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIOSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIOSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIOSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES5_Li1EESt25__is_lvalue_to_rvalue_refIS3_S5_Li0EEEESt20__is_static_castableIS3_S5_EE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOSt4pairIiiES5_Li1EESt25__is_lvalue_to_rvalue_refIS3_S5_Li0EEEESt20__is_static_castableIS3_S5_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newISt4pairIiiEOS1_E extends _ZSt34__is_direct_constructible_new_safeISt4pairIiiEOS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt29__is_direct_constructible_newISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeISt4pairIiiEOS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt15is_destructibleISt4pairIiiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15is_destructibleISt4pairIiiEE(...$a);
        }
        __init__ZSt15is_destructibleISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_array_unknown_boundsISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_array_unknown_boundsISt4pairIiiEE(...$a);
        }
        __init__ZSt25__is_array_unknown_boundsISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt4pairIiiEE(...$a);
        }
        __init__ZSt8is_arrayISt4pairIiiEE(...$a) {
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
      class _ZSt6extentISt4pairIiiELi0EE extends _ZSt17integral_constantImLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6extentISt4pairIiiELi0EE(...$a);
        }
        __init__ZSt6extentISt4pairIiiELi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantImLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt6extentISt4pairIiiELi0EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt6extentISt4pairIiiELi0EEE(...$a);
        }
        __init__ZSt6__not_ISt6extentISt4pairIiiELi0EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt8is_arrayISt4pairIiiEESt6__not_ISt6extentIS2_Li0EEEE extends _ZSt8is_arrayISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt8is_arrayISt4pairIiiEESt6__not_ISt6extentIS2_Li0EEEE(...$a);
        }
        __init__ZSt6__and_ISt8is_arrayISt4pairIiiEESt6__not_ISt6extentIS2_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt6extentISt4pairIiiELi0EEESt8is_arrayIS3_EE {
        __init__ZSt11conditionalILi0ESt6__not_ISt6extentISt4pairIiiELi0EEESt8is_arrayIS3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11is_functionISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt4pairIiiEE(...$a);
        }
        __init__ZSt11is_functionISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE extends _ZSt11is_functionISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt4pairIiiEESt25__is_array_unknown_boundsIS2_ESt11is_functionIS2_EE extends _ZSt5__or_ISt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt4pairIiiEESt25__is_array_unknown_boundsIS2_ESt11is_functionIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt4pairIiiEESt25__is_array_unknown_boundsIS2_ESt11is_functionIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE {
        __init__ZSt11conditionalILi0ESt25__is_array_unknown_boundsISt4pairIiiEESt11is_functionIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt4pairIiiEESt5__or_ISt25__is_array_unknown_boundsIS2_ESt11is_functionIS2_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt4pairIiiEESt5__or_ISt25__is_array_unknown_boundsIS2_ESt11is_functionIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9is_scalarISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt9is_scalarISt4pairIiiEE(...$a);
        }
        __init__ZSt9is_scalarISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13is_arithmeticISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt13is_arithmeticISt4pairIiiEE(...$a);
        }
        __init__ZSt13is_arithmeticISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_integralISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_integralISt4pairIiiEE(...$a);
        }
        __init__ZSt11is_integralISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_integral_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_integral_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt20__is_integral_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_floating_pointISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_floating_pointISt4pairIiiEE(...$a);
        }
        __init__ZSt17is_floating_pointISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_floating_point_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_floating_point_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt26__is_floating_point_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_integralISt4pairIiiEESt17is_floating_pointIS2_EE extends _ZSt17is_floating_pointISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_integralISt4pairIiiEESt17is_floating_pointIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_integralISt4pairIiiEESt17is_floating_pointIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt17is_floating_pointISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_integralISt4pairIiiEESt17is_floating_pointIS2_EE {
        __init__ZSt11conditionalILi0ESt11is_integralISt4pairIiiEESt17is_floating_pointIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_enumISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_enumISt4pairIiiEE(...$a);
        }
        __init__ZSt7is_enumISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_pointerISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_pointerISt4pairIiiEE(...$a);
        }
        __init__ZSt10is_pointerISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__is_pointer_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19__is_pointer_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt19__is_pointer_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_member_pointerISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_member_pointerISt4pairIiiEE(...$a);
        }
        __init__ZSt17is_member_pointerISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_member_pointer_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_member_pointer_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt26__is_member_pointer_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14__is_nullptr_tISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14__is_nullptr_tISt4pairIiiEE(...$a);
        }
        __init__ZSt14__is_nullptr_tISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21__is_nullptr_t_helperISt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21__is_nullptr_t_helperISt4pairIiiEE(...$a);
        }
        __init__ZSt21__is_nullptr_t_helperISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE extends _ZSt14__is_nullptr_tISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt14__is_nullptr_tISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt10is_pointerISt4pairIiiEESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE extends _ZSt5__or_ISt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt10is_pointerISt4pairIiiEESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt10is_pointerISt4pairIiiEESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_enumISt4pairIiiEESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE extends _ZSt5__or_ISt10is_pointerISt4pairIiiEESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_enumISt4pairIiiEESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_enumISt4pairIiiEESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt10is_pointerISt4pairIiiEESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt13is_arithmeticISt4pairIiiEESt7is_enumIS2_ESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE extends _ZSt5__or_ISt7is_enumISt4pairIiiEESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt13is_arithmeticISt4pairIiiEESt7is_enumIS2_ESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt13is_arithmeticISt4pairIiiEESt7is_enumIS2_ESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt7is_enumISt4pairIiiEESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE {
        __init__ZSt11conditionalILi0ESt17is_member_pointerISt4pairIiiEESt14__is_nullptr_tIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt10is_pointerISt4pairIiiEESt5__or_ISt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE {
        __init__ZSt11conditionalILi0ESt10is_pointerISt4pairIiiEESt5__or_ISt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_enumISt4pairIiiEESt5__or_ISt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE {
        __init__ZSt11conditionalILi0ESt7is_enumISt4pairIiiEESt5__or_ISt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt13is_arithmeticISt4pairIiiEESt5__or_ISt7is_enumIS2_ESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE {
        __init__ZSt11conditionalILi0ESt13is_arithmeticISt4pairIiiEESt5__or_ISt7is_enumIS2_ESt10is_pointerIS2_ESt17is_member_pointerIS2_ESt14__is_nullptr_tIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5__or_ISt12is_referenceISt4pairIiiEESt9is_scalarIS2_EE extends _ZSt9is_scalarISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt12is_referenceISt4pairIiiEESt9is_scalarIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt12is_referenceISt4pairIiiEESt9is_scalarIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt9is_scalarISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt12is_referenceISt4pairIiiEESt9is_scalarIS2_EE {
        __init__ZSt11conditionalILi0ESt12is_referenceISt4pairIiiEESt9is_scalarIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_safeISt4pairIiiELi0ELi0EE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_safeISt4pairIiiELi0ELi0EE(...$a);
        }
        __init__ZSt22__is_destructible_safeISt4pairIiiELi0ELi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt18remove_all_extentsISt4pairIiiEE {
        __init__ZSt18remove_all_extentsISt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_implISt4pairIiiEE extends _ZSt25__do_is_destructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_implISt4pairIiiEE(...$a);
        }
        __init__ZSt22__is_destructible_implISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt25__do_is_destructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIRSt4pairIiiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRSt4pairIiiEE(...$a);
        }
        __init__ZSt12is_referenceIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRSt4pairIiiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRSt4pairIiiEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRSt4pairIiiEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRSt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRSt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRSt4pairIiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRSt4pairIiiEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRSt4pairIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIRSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRSt4pairIiiEE(...$a);
        }
        __init__ZSt7is_voidIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRSt4pairIiiEE {
        __init__ZSt9remove_cvIRSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRSt4pairIiiEE {
        __init__ZSt15remove_volatileIRSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRSt4pairIiiEE {
        __init__ZSt12remove_constIRSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRSt4pairIiiEE(...$a);
        }
        __init__ZSt16__is_void_helperIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRSt4pairIiiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRSt4pairIiiEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRSt4pairIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRSt4pairIiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRSt4pairIiiEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRSt4pairIiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRSt4pairIiiEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRSt4pairIiiEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRSt4pairIiiELi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRSt4pairIiiELi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRSt4pairIiiEE extends _ZSt29__add_rvalue_reference_helperIRSt4pairIiiELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRSt4pairIiiEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRSt4pairIiiELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implISt4pairIiiEOS1_E extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt30__is_direct_constructible_implISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_OS2_EE extends _ZSt30__is_direct_constructible_implISt4pairIiiEOS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_OS2_EE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_OS2_EE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implISt4pairIiiEOS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implISt4pairIiiEOS2_ESt15is_destructibleIS2_EE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implISt4pairIiiEOS2_ESt15is_destructibleIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castISt4pairIiiEOS2_ESt34__is_direct_constructible_new_safeIS2_S3_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castISt4pairIiiEOS2_ESt34__is_direct_constructible_new_safeIS2_S3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt26__is_nt_constructible_implISt4pairIiiEOS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_nt_constructible_implISt4pairIiiEOS1_E(...$a);
        }
        __init__ZSt26__is_nt_constructible_implISt4pairIiiEOS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt16is_constructibleISt4pairIiiEOS2_ESt26__is_nt_constructible_implIS2_S3_EE extends _ZSt26__is_nt_constructible_implISt4pairIiiEOS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt16is_constructibleISt4pairIiiEOS2_ESt26__is_nt_constructible_implIS2_S3_EE(...$a);
        }
        __init__ZSt6__and_ISt16is_constructibleISt4pairIiiEOS2_ESt26__is_nt_constructible_implIS2_S3_EE(...$a) {
        }
        __dtor() {
          _ZSt26__is_nt_constructible_implISt4pairIiiEOS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt26__is_nt_constructible_implISt4pairIiiEOS2_ESt16is_constructibleIS2_S3_EE {
        __init__ZSt11conditionalILi1ESt26__is_nt_constructible_implISt4pairIiiEOS2_ESt16is_constructibleIS2_S3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEE(...$a);
        }
        __init__ZSt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleISt4pairIiiERKS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleISt4pairIiiERKS1_E(...$a);
        }
        __init__ZSt16is_constructibleISt4pairIiiERKS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_copy_constructible_implISt4pairIiiELi0EE extends _ZSt16is_constructibleISt4pairIiiERKS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_copy_constructible_implISt4pairIiiELi0EE(...$a);
        }
        __init__ZSt28__is_copy_constructible_implISt4pairIiiELi0EE(...$a) {
        }
        __dtor() {
          _ZSt16is_constructibleISt4pairIiiERKS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt21is_copy_constructibleISt4pairIiiEE extends _ZSt28__is_copy_constructible_implISt4pairIiiELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21is_copy_constructibleISt4pairIiiEE(...$a);
        }
        __init__ZSt21is_copy_constructibleISt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt28__is_copy_constructible_implISt4pairIiiELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleISt4pairIiiERS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleISt4pairIiiERS1_E(...$a);
        }
        __init__ZSt25__is_direct_constructibleISt4pairIiiERS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implISt4pairIiiERKS1_E extends _ZSt25__is_direct_constructibleISt4pairIiiERS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implISt4pairIiiERKS1_E(...$a);
        }
        __init__ZSt23__is_constructible_implISt4pairIiiERKS1_E(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleISt4pairIiiERS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castISt4pairIiiERS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castISt4pairIiiERS1_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castISt4pairIiiERS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIRSt4pairIiiES2_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIRSt4pairIiiES2_E(...$a);
        }
        __init__ZSt20__is_static_castableIRSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIRSt4pairIiiES2_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIRSt4pairIiiES2_E(...$a);
        }
        __init__ZSt25__is_static_castable_safeIRSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIRSt4pairIiiES2_E extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIRSt4pairIiiES2_E(...$a);
        }
        __init__ZSt25__is_static_castable_implIRSt4pairIiiES2_E(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIRSt4pairIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIRSt4pairIiiEE(...$a);
        }
        __init__ZSt11is_functionIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS1_EE extends _ZSt11is_functionIRSt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIRSt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRSt4pairIiiEESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIRSt4pairIiiEESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIRSt4pairIiiEESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIRSt4pairIiiES2_Li1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIRSt4pairIiiES2_Li1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIRSt4pairIiiES2_Li1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS3_EE extends _ZSt19is_rvalue_referenceISt4pairIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS3_EE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIRSt4pairIiiEESt19is_rvalue_referenceIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt4pairIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_rvalue_referenceISt4pairIiiEESt19is_lvalue_referenceIRS2_EE {
        __init__ZSt11conditionalILi1ESt19is_rvalue_referenceISt4pairIiiEESt19is_lvalue_referenceIRS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIRSt4pairIiiES2_Li0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIRSt4pairIiiES2_Li0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIRSt4pairIiiES2_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE extends _ZSt25__is_lvalue_to_rvalue_refIRSt4pairIiiES2_Li0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIRSt4pairIiiES2_Li0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIRSt4pairIiiEE {
        __init__ZSt16remove_referenceIRSt4pairIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIRSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIRSt4pairIiiES3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIRSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIRSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIRSt4pairIiiES3_ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_S3_Li1EESt25__is_lvalue_to_rvalue_refIS1_S3_Li0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES4_Li1EESt25__is_lvalue_to_rvalue_refIS2_S4_Li0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES5_Li1EESt25__is_lvalue_to_rvalue_refIS3_S5_Li0EEEESt20__is_static_castableIS3_S5_EE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRSt4pairIiiES5_Li1EESt25__is_lvalue_to_rvalue_refIS3_S5_Li0EEEESt20__is_static_castableIS3_S5_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeISt4pairIiiERS1_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeISt4pairIiiERS1_E(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeISt4pairIiiERS1_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newISt4pairIiiERS1_E extends _ZSt34__is_direct_constructible_new_safeISt4pairIiiERS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newISt4pairIiiERS1_E(...$a);
        }
        __init__ZSt29__is_direct_constructible_newISt4pairIiiERS1_E(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeISt4pairIiiERS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implISt4pairIiiERS1_E extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implISt4pairIiiERS1_E(...$a);
        }
        __init__ZSt30__is_direct_constructible_implISt4pairIiiERS1_E(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_RS2_EE extends _ZSt30__is_direct_constructible_implISt4pairIiiERS1_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_RS2_EE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleISt4pairIiiEESt30__is_direct_constructible_implIS2_RS2_EE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implISt4pairIiiERS1_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implISt4pairIiiERS2_ESt15is_destructibleIS2_EE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implISt4pairIiiERS2_ESt15is_destructibleIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castISt4pairIiiERS2_ESt34__is_direct_constructible_new_safeIS2_S3_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castISt4pairIiiERS2_ESt34__is_direct_constructible_new_safeIS2_S3_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEESt21is_copy_constructibleIS3_EE extends _ZSt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEESt21is_copy_constructibleIS3_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEESt21is_copy_constructibleIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt29is_nothrow_move_constructibleISt4pairIiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt21is_copy_constructibleISt4pairIiiEESt6__not_ISt29is_nothrow_move_constructibleIS2_EEE {
        __init__ZSt11conditionalILi0ESt21is_copy_constructibleISt4pairIiiEESt6__not_ISt29is_nothrow_move_constructibleIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13move_iteratorIPSt4pairIiiEE {
        _M_current$_ZSt13move_iteratorIPSt4pairIiiEE;
        constructor(...$a) {
          this.__init__ZSt13move_iteratorIPSt4pairIiiEE(...$a);
        }
        __init__ZSt13move_iteratorIPSt4pairIiiEE(...$a) {
          let $t17;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIPSt4pairIiiEE)) {
            this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE = ($t17 = _ZSt13move_iteratorIPSt4pairIiiEE.prototype._ZNKSt13move_iteratorIPSt4pairIiiEE4baseEv.call(($a[0]).a[($a[0]).i]), $t17 ? {a: $t17.a, i: $t17.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt13move_iteratorIPSt4pairIiiEE4baseEv() {
          return (this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE ? {a: this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE.a, i: this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE.i} : null);
        }
        _ZNKSt13move_iteratorIPSt4pairIiiEEdeEv() {
          return _ZSt4moveISt4pairIiiEEOS0_S1_(this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE);
        }
        _ZNSt13move_iteratorIPSt4pairIiiEEppEv() {
          ++this._M_current$_ZSt13move_iteratorIPSt4pairIiiEE.i;
          return {a: [this], i: 0};
        }
      }
      class _ZSt11conditionalILi0EPSt4pairIiiESt13move_iteratorIS0_EE {
        __init__ZSt11conditionalILi0EPSt4pairIiiESt13move_iteratorIS0_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18__is_move_iteratorIPiE {
        __init__ZSt18__is_move_iteratorIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIPiLi0EE {
        __init__ZSt10_Iter_baseIPiLi0EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_(__it) {
          return (__it ? {a: __it.a, i: __it.i} : null);
        }
      }
      class _ZSt11_Miter_baseIPiE extends _ZSt10_Iter_baseIPiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Miter_baseIPiE(...$a);
        }
        __init__ZSt11_Miter_baseIPiE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIPiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__declval_protectorIRiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRiE(...$a);
        }
        __init__ZSt19__declval_protectorIRiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIOSt4pairIiiEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIOSt4pairIiiEE(...$a);
        }
        __init__ZSt19__declval_protectorIOSt4pairIiiEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIRSt4pairIiiEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRSt4pairIiiEE(...$a);
        }
        __init__ZSt19__declval_protectorIRSt4pairIiiEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt11_Niter_baseIPiE extends _ZSt10_Iter_baseIPiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Niter_baseIPiE(...$a);
        }
        __init__ZSt11_Niter_baseIPiE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIPiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_normal_iteratorIPiE {
        __init__ZSt20__is_normal_iteratorIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12__is_pointerIPiE {
        __init__ZSt12__is_pointerIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10__are_sameIiiE {
        __init__ZSt10__are_sameIiiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE {
        __init__ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE(...$a) { }
        __dtor() {
        }
        static _ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIiEEPiPKiS3_S2_(__first, __last, __result) {
          let $t18, $t19;
          let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
          if (_Num) {
            _Z7memmovePvPKvm(($t18 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t18 ? {a: $t18.a, i: $t18.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
          }
          return ($t19 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t19 ? {a: $t19.a, i: $t19.i} : null);
        }
      }
      function _Z6memcpyPvPKvm(dst, src, n) {
        let $t20;
        let d = (dst ? {a: dst.a, i: dst.i} : null);
        let s = (src ? {a: src.a, i: src.i} : null);
        for (let i = ((0) >>> 0); (i < n); ($t20 = i, i = (($t20 + 1) >>> 0), $t20)) {
          d.a[d.i + (i)] = s.a[s.i + (i)];
        }
        return dst;
      }
      function _Z7memmovePvPKvm(dst, src, n) {
        let $t21, $t22;
        let d = (dst ? {a: dst.a, i: dst.i} : null);
        let s = (src ? {a: src.a, i: src.i} : null);
        if (((d ? d.i : 0) < (s ? s.i : 0))) {
           {
            for (let i = ((0) >>> 0); (i < n); ($t21 = i, i = (($t21 + 1) >>> 0), $t21)) {
              d.a[d.i + (i)] = s.a[s.i + (i)];
            }
          }
        }
        else {
           {
            while ((n > ((0) >>> 0))) {
               {
                ($t22 = n, n = (($t22 - 1) >>> 0), $t22);
                d.a[d.i + (n)] = s.a[s.i + (n)];
              }
            }
          }
        }
        return dst;
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _ZSt4__lgl(__n) {
        return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE8_M_putllEix.call(__os.a[__os.i], 3, __n);
        return __os;
      }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(__in, __v) {
        __v.a[__v.i] = Number(BigInt.asIntN(32, _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv.call(__in.a[__in.i])));
        return __in;
      }
      function _ZSt4swapIiEvRiS_(__a, __b) {
        let $t23, $t24, $t25;
        let __tmp = {v: ($t23 = _ZSt4moveIiEOiS_(__a), $t23.a[$t23.i])};
        __a.a[__a.i] = ($t24 = _ZSt4moveIiEOiS_(__b), $t24.a[$t24.i]);
        __b.a[__b.i] = ($t25 = _ZSt4moveIiEOiS_({a: __tmp, i: "v"}), $t25.a[$t25.i]);
      }
      function _ZStneIPSt4pairIiiES_EbRKSt13move_iteratorIS_ES2_(__x, __y) {
        return (!(_ZSteqIPSt4pairIiiES_EbRKSt13move_iteratorIS_ES2_(__x, __y)));
      }
      function _ZSteqIPSt4pairIiiES_EbRKSt13move_iteratorIS_ES2_(__x, __y) {
        let $t26, $t27, $t28, $t29;
        return ($t28 = ($t26 = _ZSt13move_iteratorIPSt4pairIiiEE.prototype._ZNKSt13move_iteratorIPSt4pairIiiEE4baseEv.call(__x.a[__x.i]), $t26), $t29 = ($t27 = _ZSt13move_iteratorIPSt4pairIiiEE.prototype._ZNKSt13move_iteratorIPSt4pairIiiEE4baseEv.call(__y.a[__y.i]), $t27), ($t28 === $t29 || ($t28 && $t29 && $t28.a === $t29.a && $t28.i === $t29.i)));
      }
      function main() {
        let $t30, $t31, $t32, $t33, $t34, $t35, $t36, $t37, $t38;
        ((_ZSt8ios_base._ZNSt8ios_base15sync_with_stdioEb(0), _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE3tieEPSt13basic_ostreamIcS1_E.call(_ZSt3cin.v, null)), _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE3tieEPS2_.call(_ZSt4cout.v, null));
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(_ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: _Z1n, i: "v"}), {a: _Z1m, i: "v"});
        for (let i = 1; (i <= _Z1n.v); ($t30 = i, i = (($t30 + 1) | 0), $t30)) {
          _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: _Z1a.v, i: (i)});
        }
        _ZSt4sortIPiEvS_S_(($t31 = ({a: (({a: _Z1a.v, i: 0}) ? (({a: _Z1a.v, i: 0})).a : null), i: (({a: _Z1a.v, i: 0}) ? (({a: _Z1a.v, i: 0})).i : 0) + (1)}), $t31 ? {a: $t31.a, i: $t31.i} : null), ($t34 = ($t33 = ($t32 = ({a: (({a: _Z1a.v, i: 0}) ? (({a: _Z1a.v, i: 0})).a : null), i: (({a: _Z1a.v, i: 0}) ? (({a: _Z1a.v, i: 0})).i : 0) + (_Z1n.v)}), $t32), ({a: ($t33 ? $t33.a : null), i: ($t33 ? $t33.i : 0) + (1)})), $t34 ? {a: $t34.a, i: $t34.i} : null));
        let b = {v: new _ZSt6vectorISt4pairIiiESt9allocatorIS1_EE()};
        for (let i = 1; (i <= _Z1n.v); ($t35 = i, i = (($t35 + 1) | 0), $t35)) {
          if (((!(_ZSt6vectorISt4pairIiiESt9allocatorIS1_EE.prototype._ZNKSt6vectorISt4pairIiiESt9allocatorIS1_EE5emptyEv.call(b.v))) && (_Z1a.v[i] === (($t36 = _ZSt6vectorISt4pairIiiESt9allocatorIS1_EE.prototype._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE4backEv.call(b.v), $t36.a[$t36.i])).first$_ZSt4pairIiiE))) {
            (($t37 = _ZSt6vectorISt4pairIiiESt9allocatorIS1_EE.prototype._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE4backEv.call(b.v), $t37.a[$t37.i])).second$_ZSt4pairIiiE++;
          }
          else {
            _ZSt6vectorISt4pairIiiESt9allocatorIS1_EE.prototype._ZNSt6vectorISt4pairIiiESt9allocatorIS1_EE9push_backERKS1_.call(b.v, {a: [new _ZSt4pairIiiE({a: _Z1a.v, i: (i)}, {a: [1], i: 0})], i: 0});
          }
        }
        _Z2ft.prototype._ZN2ft5buildERKSt6vectorISt4pairIiiESt9allocatorIS4_EE.call(_Z2tr, {a: b, i: "v"});
        let lst = 0;
        let ans = 0n;
        while (($t38 = _Z1m.v, _Z1m.v = (($t38 - 1) | 0), $t38)) {
           {
            let op = {v: 0};
            let x = {v: 0};
            (_ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(_ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: op, i: "v"}), {a: x, i: "v"}), x.v = (((((x.v) ^ (lst)) | 0)) | 0));
            if ((op.v === 1)) {
              _Z2ft.prototype._ZN2ft6insertEi.call(_Z2tr, x.v);
            }
            if ((op.v === 2)) {
              _Z2ft.prototype._ZN2ft5eraseEi.call(_Z2tr, x.v);
            }
            if ((op.v === 3)) {
              (lst = _Z2ft.prototype._ZN2ft3rnkEi.call(_Z2tr, x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
            }
            if ((op.v === 4)) {
              (lst = _Z2ft.prototype._ZN2ft3kthEi.call(_Z2tr, x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
            }
            if ((op.v === 5)) {
              (lst = _Z2ft.prototype._ZN2ft3prvEi.call(_Z2tr, x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
            }
            if ((op.v === 6)) {
              (lst = _Z2ft.prototype._ZN2ft3nxtEi.call(_Z2tr, x.v), ans = BigInt.asIntN(64, (ans) ^ (BigInt(lst))));
            }
          }
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, ans);
        return 0;
      }
      function _ZSt4sortIPiEvS_S_(__first, __last) {
        if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
           {
            _ZSt16__introsort_loopIPilEvS_S_l((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(_ZSt4__lgl(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0));
            _ZSt22__final_insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          }
        }
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt7declvalIRiES_v() {
        return _ZSt19__declval_protectorIRiE._ZNSt19__declval_protectorIRiE10__delegateEv();
      }
      function _ZSt7declvalIOSt4pairIiiEES_v() {
        return _ZSt19__declval_protectorIOSt4pairIiiEE._ZNSt19__declval_protectorIOSt4pairIiiEE10__delegateEv();
      }
      function _ZSt7declvalIRSt4pairIiiEES_v() {
        return _ZSt19__declval_protectorIRSt4pairIiiEE._ZNSt19__declval_protectorIRSt4pairIiiEE10__delegateEv();
      }
      function _ZSt16__introsort_loopIPilEvS_S_l(__first, __last, __depth_limit) {
        let $t39;
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = ($t39 = _ZSt27__unguarded_partition_pivotIPiES_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t39 ? {a: $t39.a, i: $t39.i} : null);
            _ZSt16__introsort_loopIPilEvS_S_l((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit);
            __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
          }
        }
      }
      function _ZSt22__final_insertion_sortIPiEvS_S_(__first, __last) {
        let $t40, $t41;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), ($t40 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t40 ? {a: $t40.a, i: $t40.i} : null));
            _ZSt26__unguarded_insertion_sortIPiEvS_S_(($t41 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t41 ? {a: $t41.a, i: $t41.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          }
        }
        else {
          _ZSt16__insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
        }
      }
      function _ZN9__gnu_cxxeqIPSt4pairIiiES0_St6vectorIS2_St9allocatorIS2_EEEEbRKNS_17__normal_iteratorIS0_S6_EES7_(__lhs, __rhs) {
        let $t42, $t43, $t44, $t45;
        return ($t44 = (($t42 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__lhs.a[__lhs.i]), $t42) ? (($t42 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__lhs.a[__lhs.i]), $t42)).a[(($t42 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__lhs.a[__lhs.i]), $t42)).i] : null), $t45 = (($t43 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__rhs.a[__rhs.i]), $t43) ? (($t43 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__rhs.a[__rhs.i]), $t43)).a[(($t43 = _ZN9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPSt4pairIiiESt6vectorIS3_St9allocatorIS3_EEE4baseEv.call(__rhs.a[__rhs.i]), $t43)).i] : null), ($t44 === $t45 || ($t44 && $t45 && $t44.a === $t45.a && $t44.i === $t45.i)));
      }
      function _ZSt12partial_sortIPiEvS_S_S_(__first, __middle, __last) {
        _ZSt13__heap_selectIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
        _ZSt9sort_heapIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
      }
      function _ZSt27__unguarded_partition_pivotIPiES_S_S_(__first, __last) {
        let $t46, $t47, $t48, $t49;
        let __mid = ($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t46 ? {a: $t46.a, i: $t46.i} : null);
        _ZSt19__move_median_firstIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t47 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t47 ? {a: $t47.a, i: $t47.i} : null));
        return ($t49 = _ZSt21__unguarded_partitionIPiiES_S_S_RKi(($t48 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t48 ? {a: $t48.a, i: $t48.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t49 ? {a: $t49.a, i: $t49.i} : null);
      }
      function _ZSt16__insertion_sortIPiEvS_S_(__first, __last) {
        let $t50, $t51, $t52, $t53;
        if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
          return;
        }
        for (let __i = ($t50 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t50 ? {a: $t50.a, i: $t50.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
           {
            if ((__i.a[__i.i] < __first.a[__first.i])) {
               {
                let __val = {v: ($t51 = _ZSt4moveIiEOiS_(__i), $t51.a[$t51.i])};
                _ZSt13move_backwardIPiS_ES_S_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t52 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t52 ? {a: $t52.a, i: $t52.i} : null));
                __first.a[__first.i] = ($t53 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t53.a[$t53.i]);
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIPiEvS_((__i ? {a: __i.a, i: __i.i} : null));
            }
          }
        }
      }
      function _ZSt26__unguarded_insertion_sortIPiEvS_S_(__first, __last) {
        for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
          _ZSt25__unguarded_linear_insertIPiEvS_((__i ? {a: __i.a, i: __i.i} : null));
        }
      }
      function _ZSt7forwardISt4pairIiiEEOS0_S1_(__t) {
        return __t;
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIPSt4pairIiiES_St9allocatorIS1_EES_S_S_S_RS3_(__first, __last, __result, __alloc) {
        let $t54;
        return ($t54 = _ZSt22__uninitialized_copy_aISt13move_iteratorIPSt4pairIiiEES0_St9allocatorIS2_EES0_S3_S3_S0_RS5_(_ZSt32__make_move_if_noexcept_iteratorIPSt4pairIiiESt13move_iteratorIS_EES3_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIPSt4pairIiiESt13move_iteratorIS_EES3_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t54 ? {a: $t54.a, i: $t54.i} : null);
      }
      function _ZSt8_DestroyIPSt4pairIiiESt9allocatorIS1_EEvS_S_RS3_(__first, __last, __alloc) {
        let $t55;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE7destroyIS3_EEvRS4_PS3_(__alloc, ($t55 = _ZSt11__addressofISt4pairIiiEEPS0_RS0_(__first), $t55 ? {a: $t55.a, i: $t55.i} : null));
        }
      }
      function _ZSt13__heap_selectIPiEvS_S_S_(__first, __middle, __last) {
        _ZSt9make_heapIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
        for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
          if ((__i.a[__i.i] < __first.a[__first.i])) {
            _ZSt10__pop_heapIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null));
          }
        }
      }
      function _ZSt9sort_heapIPiEvS_S_(__first, __last) {
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
           {
            --__last.i;
            _ZSt10__pop_heapIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          }
        }
      }
      function _ZSt19__move_median_firstIPiEvS_S_S_(__a, __b, __c) {
        if ((__a.a[__a.i] < __b.a[__b.i])) {
           {
            if ((__b.a[__b.i] < __c.a[__c.i])) {
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
            else {
              if ((__a.a[__a.i] < __c.a[__c.i])) {
                _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
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
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
            }
            else {
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
          }
        }
      }
      function _ZSt21__unguarded_partitionIPiiES_S_S_RKi(__first, __last, __pivot) {
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
            _ZSt9iter_swapIPiS_EvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
            ++__first.i;
          }
        }
      }
      function _ZSt4moveIiEOiS_(__t) {
        return __t;
      }
      function _ZSt4moveISt4pairIiiEEOS0_S1_(__t) {
        return __t;
      }
      function _ZSt13move_backwardIPiS_ES_S_S_S_(__first, __last, __result) {
        let $t56, $t57, $t58;
        return ($t58 = _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(($t56 = _ZSt12__miter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t56 ? {a: $t56.a, i: $t56.i} : null), ($t57 = _ZSt12__miter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t57 ? {a: $t57.a, i: $t57.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t58 ? {a: $t58.a, i: $t58.i} : null);
      }
      function _ZSt25__unguarded_linear_insertIPiEvS_(__last) {
        let $t59, $t60, $t61;
        let __val = {v: ($t59 = _ZSt4moveIiEOiS_(__last), $t59.a[$t59.i])};
        let __next = (__last ? {a: __last.a, i: __last.i} : null);
        --__next.i;
        while ((__val.v < __next.a[__next.i])) {
           {
            __last.a[__last.i] = ($t60 = _ZSt4moveIiEOiS_(__next), $t60.a[$t60.i]);
            __last = (__next ? {a: __next.a, i: __next.i} : null);
            --__next.i;
          }
        }
        __last.a[__last.i] = ($t61 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t61.a[$t61.i]);
      }
      function _ZSt3maxImERKmS_S_(__a, __b) {
        if ((__a.a[__a.i] < __b.a[__b.i])) {
          return __b;
        }
        return __a;
      }
      function _ZSt32__make_move_if_noexcept_iteratorIPSt4pairIiiESt13move_iteratorIS_EES3_S_(__i) {
        return new _ZSt13move_iteratorIPSt4pairIiiEE((__i ? {a: __i.a, i: __i.i} : null));
      }
      function _ZSt22__uninitialized_copy_aISt13move_iteratorIPSt4pairIiiEES0_St9allocatorIS2_EES0_S3_S3_S0_RS5_(__first, __last, __result, __alloc) {
        let $t62;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIPSt4pairIiiES_EbRKSt13move_iteratorIS_ES2_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIPSt4pairIiiEEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt4pairIiiEEE9constructIS3_EEvRS4_PS3_RKS3_(__alloc, ($t62 = _ZSt11__addressofISt4pairIiiEEPS0_RS0_(__cur), $t62 ? {a: $t62.a, i: $t62.i} : null), __first._ZNKSt13move_iteratorIPSt4pairIiiEEdeEv());
            }
            return (__cur ? {a: __cur.a, i: __cur.i} : null);
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIPSt4pairIiiESt9allocatorIS1_EEvS_S_RS3_((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
      }
      function _ZSt11__addressofISt4pairIiiEEPS0_RS0_(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt9make_heapIPiEvS_S_(__first, __last) {
        let $t63, $t64, $t65;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
          return;
        }
        let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t63 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t63.a[$t63.i])};
            _ZSt13__adjust_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t64 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t64.a[$t64.i]));
            if ((__parent === 0)) {
              return;
            }
            ($t65 = __parent, __parent = (($t65 - 1) | 0), $t65);
          }
        }
      }
      function _ZSt10__pop_heapIPiEvS_S_S_(__first, __last, __result) {
        let $t66, $t67, $t68;
        let __value = {v: ($t66 = _ZSt4moveIiEOiS_(__result), $t66.a[$t66.i])};
        __result.a[__result.i] = ($t67 = _ZSt4moveIiEOiS_(__first), $t67.a[$t67.i]);
        _ZSt13__adjust_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t68 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t68.a[$t68.i]));
      }
      function _ZSt9iter_swapIPiS_EvS_S_(__a, __b) {
        _ZSt4swapIiEvRiS_(__a, __b);
      }
      function _ZSt12__miter_baseIPiES_S_(__it) {
        let $t69;
        return ($t69 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t69 ? {a: $t69.a, i: $t69.i} : null);
      }
      function _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t70, $t71, $t72, $t73;
        return ($t73 = _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(($t70 = _ZSt12__niter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t70 ? {a: $t70.a, i: $t70.i} : null), ($t71 = _ZSt12__niter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t71 ? {a: $t71.a, i: $t71.i} : null), ($t72 = _ZSt12__niter_baseIPiES_S_((__result ? {a: __result.a, i: __result.i} : null)), $t72 ? {a: $t72.a, i: $t72.i} : null)), $t73 ? {a: $t73.a, i: $t73.i} : null);
      }
      function _ZSt13__adjust_heapIPiliEvS_lli(__first, __holeIndex, __len, __value) {
        let $t74, $t75, $t76, $t77, $t78, $t79, $t80, $t81;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if ((($t74 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t74.a[$t74.i]) < ($t75 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t75.a[$t75.i]))) {
              ($t76 = __secondChild, __secondChild = (($t76 - 1) | 0), $t76);
            }
            (($t77 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t77)).a[(($t77 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t77)).i] = ($t78 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t78.a[$t78.i]);
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            (($t79 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t79)).a[(($t79 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t79)).i] = ($t80 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t80.a[$t80.i]);
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t81 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t81.a[$t81.i]));
      }
      function _ZSt12__niter_baseIPiES_S_(__it) {
        let $t82;
        return ($t82 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
      }
      function _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t83;
        let __simple = (((1 && 1) && 1) && 1);
        return ($t83 = _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE._ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIiEEPiPKiS3_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t83 ? {a: $t83.a, i: $t83.i} : null);
      }
      function _ZSt11__push_heapIPiliEvS_lli(__first, __holeIndex, __topIndex, __value) {
        let $t84, $t85, $t86, $t87, $t88;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && (($t84 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t84.a[$t84.i]) < __value.v))) {
           {
            (($t85 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t85)).a[(($t85 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t85)).i] = ($t86 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t86.a[$t86.i]);
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        (($t87 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t87)).a[(($t87 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t87)).i] = ($t88 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t88.a[$t88.i]);
      }
      let _Z16__ctj_stdin_file = {v: new _Z8_IO_FILE(0, 0)};
      let _Z17__ctj_stdout_file = {v: new _Z8_IO_FILE(1, 0)};
      let _Z17__ctj_stderr_file = {v: new _Z8_IO_FILE(2, 0)};
      let _Z5stdin = (({a: _Z16__ctj_stdin_file, i: "v"}) ? {a: ({a: _Z16__ctj_stdin_file, i: "v"}).a, i: ({a: _Z16__ctj_stdin_file, i: "v"}).i} : null);
      let _Z6stdout = (({a: _Z17__ctj_stdout_file, i: "v"}) ? {a: ({a: _Z17__ctj_stdout_file, i: "v"}).a, i: ({a: _Z17__ctj_stdout_file, i: "v"}).i} : null);
      let _Z6stderr = (({a: _Z17__ctj_stderr_file, i: "v"}) ? {a: ({a: _Z17__ctj_stderr_file, i: "v"}).a, i: ({a: _Z17__ctj_stderr_file, i: "v"}).i} : null);
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
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
      let _ZSt13allocator_arg = new _ZSt15allocator_arg_t();
      let _ZSt6ignore = new _ZSt15_Swallow_assign();
      let _ZN9__gnu_cxx21__default_lock_policyE = 0;
      let _ZSt4cout = {v: new _ZSt13basic_ostreamIcSt11char_traitsIcEE(1)};
      let _ZSt4cerr = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(2);
      let _ZSt4clog = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(3);
      let _ZSt3cin = {v: new _ZSt13basic_istreamIcSt11char_traitsIcEE(0)};
      let _ZSt10defer_lock = new _ZSt12defer_lock_t();
      let _ZSt11try_to_lock = new _ZSt13try_to_lock_t();
      let _ZSt10adopt_lock = new _ZSt12adopt_lock_t();
      let _ZNSt15regex_constants5icaseE = (((1 << 0)) >>> 0);
      let _ZNSt15regex_constants6nosubsE = (((1 << 1)) >>> 0);
      let _ZNSt15regex_constants8optimizeE = (((1 << 2)) >>> 0);
      let _ZNSt15regex_constants7collateE = (((1 << 3)) >>> 0);
      let _ZNSt15regex_constants10ECMAScriptE = (((1 << 4)) >>> 0);
      let _ZNSt15regex_constants5basicE = (((1 << 5)) >>> 0);
      let _ZNSt15regex_constants8extendedE = (((1 << 6)) >>> 0);
      let _ZNSt15regex_constants3awkE = (((1 << 7)) >>> 0);
      let _ZNSt15regex_constants4grepE = (((1 << 8)) >>> 0);
      let _ZNSt15regex_constants5egrepE = (((1 << 9)) >>> 0);
      let _ZNSt15regex_constants13match_defaultE = 0;
      let _ZNSt15regex_constants13match_not_bolE = (1 << 0);
      let _ZNSt15regex_constants13match_not_eolE = (1 << 1);
      let _ZNSt15regex_constants13match_not_bowE = (1 << 2);
      let _ZNSt15regex_constants13match_not_eowE = (1 << 3);
      let _ZNSt15regex_constants9match_anyE = (1 << 4);
      let _ZNSt15regex_constants14match_not_nullE = (1 << 5);
      let _ZNSt15regex_constants16match_continuousE = (1 << 6);
      let _ZNSt15regex_constants16match_prev_availE = (1 << 7);
      let _ZNSt15regex_constants14format_defaultE = 0;
      let _ZNSt15regex_constants10format_sedE = (1 << 8);
      let _ZNSt15regex_constants14format_no_copyE = (1 << 9);
      let _ZNSt15regex_constants17format_first_onlyE = (1 << 10);
      let _ZNSt15regex_constants13error_collateE = 0;
      let _ZNSt15regex_constants11error_ctypeE = 1;
      let _ZNSt15regex_constants12error_escapeE = 2;
      let _ZNSt15regex_constants13error_backrefE = 3;
      let _ZNSt15regex_constants11error_brackE = 4;
      let _ZNSt15regex_constants11error_parenE = 5;
      let _ZNSt15regex_constants11error_braceE = 6;
      let _ZNSt15regex_constants14error_badbraceE = 7;
      let _ZNSt15regex_constants11error_rangeE = 8;
      let _ZNSt15regex_constants11error_spaceE = 9;
      let _ZNSt15regex_constants15error_badrepeatE = 10;
      let _ZNSt15regex_constants16error_complexityE = 11;
      let _ZNSt15regex_constants11error_stackE = 12;
      let _ZNSt8__detail19_S_invalid_state_idE = ((-(1)) | 0);
      let _Z2tr = new _Z2ft();
      let _Z1n = {v: 0};
      let _Z1m = {v: 0};
      let _Z1a = {v: new Array(100005).fill(0)};
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
