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
        _ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl(__k, __v, __s, __n) {
          ((function(k,v,s,n,f,w,p,c,fd){var t='',pad=false,base=((f&74)===8)?16:(((f&74)===64)?8:10);function str(q,m){if(q===null||q===undefined)return '';var a=(q.a!==undefined)?q.a:q,i=(q.a!==undefined)?(q.i|0):0,r='',e,x;if(typeof a==='string')return m<0?a:a.slice(0,m);for(e=0;m<0||e<m;e++){x=a[i+e];if(x===undefined||x===null||(m<0&&x===0))break;r+=(typeof x==='number')?String.fromCharCode(x&255):String(x);}return r;}function gfmt(x,q){if(x!==x)return 'nan';if(x===Infinity)return 'inf';if(x===-Infinity)return '-inf';q=q>0?q:1;var e=x.toExponential(q-1),ix=e.indexOf('e'),X=parseInt(e.slice(ix+1),10),r,m;if(X<-4||X>=q){m=e.slice(0,ix);if(m.indexOf('.')>=0){while(m.charAt(m.length-1)==='0')m=m.slice(0,-1);if(m.charAt(m.length-1)==='.')m=m.slice(0,-1);}r=m+'e'+(X<0?'-':'+')+(Math.abs(X)<10?'0':'')+Math.abs(X);}else{r=x.toFixed(q-1-X);if(r.indexOf('.')>=0){while(r.charAt(r.length-1)==='0')r=r.slice(0,-1);if(r.charAt(r.length-1)==='.')r=r.slice(0,-1);}}return r;}if(k===6){t=(f&1)?(v?'true':'false'):(v?'1':'0');pad=true;}else if(k===4){t=gfmt(v,p);pad=true;}else if(k===5){t=String.fromCharCode(v&255);pad=true;}else if(k===7){t=str(s,n);pad=true;}else if(k===8){t=String.fromCharCode(v&255);}else if(k===10){t=str(s,n);}else if(k<=3){if(k>=2){var b=(typeof v==='bigint')?v:BigInt(Math.trunc(v));if(k===2||base!==10)b=BigInt.asUintN(64,b);t=b.toString(base);}else{if(k===1)v=v>>>0;t=(base===10)?String(v):(v<0?(v>>>0):v).toString(base);}pad=true;}if(pad&&w>t.length){var fc=String.fromCharCode(c||32),pd=fc.repeat(w-t.length);t=(f&32)?t+pd:pd+t;}if(t)$io.write(fd,t);})((__k),(__v),(__s),(__n),(this._M_flags),(this._M_width),(this._M_precision),(this._M_fill),(this._M_fd$_ZSt13basic_ostreamIcSt11char_traitsIcEE)));
          this._M_width = 0;
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
      class _ZSt4pairIxxE {
        first$_ZSt4pairIxxE;
        second$_ZSt4pairIxxE;
        constructor(...$a) {
          this.__init__ZSt4pairIxxE(...$a);
        }
        __init__ZSt4pairIxxE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIxxE)) {
            this.first$_ZSt4pairIxxE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIxxE;
            this.second$_ZSt4pairIxxE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIxxE;
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIxxE)) {
            this.first$_ZSt4pairIxxE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIxxE;
            this.second$_ZSt4pairIxxE = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIxxE;
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this.first$_ZSt4pairIxxE = 0n;
            this.second$_ZSt4pairIxxE = 0n;
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIxxE = ($a[0]).a[($a[0]).i];
            this.second$_ZSt4pairIxxE = ($a[1]).a[($a[1]).i];
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNSt4pairIxxEaSERKS0_(__p) {
          this.first$_ZSt4pairIxxE = (__p.a[__p.i]).first$_ZSt4pairIxxE;
          this.second$_ZSt4pairIxxE = (__p.a[__p.i]).second$_ZSt4pairIxxE;
          return {a: [this], i: 0};
        }
        _ZNSt4pairIxxEaSEOS0_(__p) {
          let $t0, $t1;
          this.first$_ZSt4pairIxxE = ($t0 = _ZSt7forwardIxEOxRx({a: __p.a[__p.i], i: "first$_ZSt4pairIxxE"}), $t0.a[$t0.i]);
          this.second$_ZSt4pairIxxE = ($t1 = _ZSt7forwardIxEOxRx({a: __p.a[__p.i], i: "second$_ZSt4pairIxxE"}), $t1.a[$t1.i]);
          return {a: [this], i: 0};
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
      class _ZSt9remove_cvIRxE {
        __init__ZSt9remove_cvIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRxE {
        __init__ZSt15remove_volatileIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRxE {
        __init__ZSt12remove_constIRxE(...$a) { }
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
      class _ZSt7is_voidIRxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRxE(...$a);
        }
        __init__ZSt7is_voidIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16__is_void_helperIRxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRxE(...$a);
        }
        __init__ZSt16__is_void_helperIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIxE(...$a);
        }
        __init__ZSt11is_functionIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIxE(...$a);
        }
        __init__ZSt8is_arrayIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE extends _ZSt8is_arrayIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRxESt11is_functionIxESt8is_arrayIxEE extends _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRxESt11is_functionIxESt8is_arrayIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRxESt11is_functionIxESt8is_arrayIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIxESt8is_arrayIxEE {
        __init__ZSt11conditionalILi0ESt11is_functionIxESt8is_arrayIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRxESt5__or_ISt11is_functionIxESt8is_arrayIxEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRxESt5__or_ISt11is_functionIxESt8is_arrayIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRxxLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRxxLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRxxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
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
      class _ZSt14is_convertibleIRKxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRKxxE(...$a);
        }
        __init__ZSt14is_convertibleIRKxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIRxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRxE(...$a);
        }
        __init__ZSt12is_referenceIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRxE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRxE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRxESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRxESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRxEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRxEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRxEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRxEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRxEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRxEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRxEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRxEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRxLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRxLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRxE extends _ZSt29__add_rvalue_reference_helperIRxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRxE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRxE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRKxxES3_E extends _ZSt14is_convertibleIRKxxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRKxxES3_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRKxxES3_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRKxxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRKxxES3_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRKxxES3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIxxE(...$a);
        }
        __init__ZSt14is_convertibleIxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIxE(...$a);
        }
        __init__ZSt7is_voidIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIxE {
        __init__ZSt9remove_cvIxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIxE {
        __init__ZSt15remove_volatileIxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIxE {
        __init__ZSt12remove_constIxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIxE(...$a);
        }
        __init__ZSt16__is_void_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIxESt11is_functionIxESt8is_arrayIxEE extends _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIxESt11is_functionIxESt8is_arrayIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIxESt11is_functionIxESt8is_arrayIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt11is_functionIxESt8is_arrayIxEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt11is_functionIxESt8is_arrayIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIxxLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIxxLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIxxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIxE(...$a);
        }
        __init__ZSt12is_referenceIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIxE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIxE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIxESt19is_rvalue_referenceIxEE extends _ZSt19is_rvalue_referenceIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIxESt19is_rvalue_referenceIxEE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIxESt19is_rvalue_referenceIxEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIxESt19is_rvalue_referenceIxEE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIxESt19is_rvalue_referenceIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIxEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIxEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIxEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIxEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIxEEStS0_ISt7is_voidIxEEE extends _ZSt6__not_ISt7is_voidIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIxEEStS0_ISt7is_voidIxEEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIxEEStS0_ISt7is_voidIxEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIxEEStS0_ISt12is_referenceIxEEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIxEEStS0_ISt12is_referenceIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIxLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIxLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIxE extends _ZSt29__add_rvalue_reference_helperIxLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIxE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIxE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIxLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIxxES1_E extends _ZSt14is_convertibleIxxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIxxES1_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIxxES1_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIxxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIxxES1_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIxxES1_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5tuple {
        __init__ZSt5tuple(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7complexIPSt4pairIxxEE {
        _M_real$_ZSt7complexIPSt4pairIxxEE;
        _M_imag$_ZSt7complexIPSt4pairIxxEE;
        constructor(...$a) {
          this.__init__ZSt7complexIPSt4pairIxxEE(...$a);
        }
        __init__ZSt7complexIPSt4pairIxxEE(...$a) {
          this._M_real$_ZSt7complexIPSt4pairIxxEE = null;
          this._M_imag$_ZSt7complexIPSt4pairIxxEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt12__is_integerIxE {
        __init__ZSt12__is_integerIxE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx11__enable_ifILi1EdEE {
        __init__ZN9__gnu_cxx11__enable_ifILi1EdEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIRxE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRxE(...$a);
        }
        __init__ZSt19__declval_protectorIRxE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIxE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIxE(...$a);
        }
        __init__ZSt19__declval_protectorIxE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt16remove_referenceIxE {
        __init__ZSt16remove_referenceIxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPSt4pairIxxEE {
        __init__ZSt15iterator_traitsIPSt4pairIxxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt4pairIxxEE {
        __init__ZSt16remove_referenceISt4pairIxxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18__is_move_iteratorIPSt4pairIxxEE {
        __init__ZSt18__is_move_iteratorIPSt4pairIxxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIPSt4pairIxxELi0EE {
        __init__ZSt10_Iter_baseIPSt4pairIxxELi0EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIPSt4pairIxxELi0EE7_S_baseES0_(__it) {
          return (__it ? {a: __it.a, i: __it.i} : null);
        }
      }
      class _ZSt11_Miter_baseIPSt4pairIxxEE extends _ZSt10_Iter_baseIPSt4pairIxxELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Miter_baseIPSt4pairIxxEE(...$a);
        }
        __init__ZSt11_Miter_baseIPSt4pairIxxEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIPSt4pairIxxELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11_Niter_baseIPSt4pairIxxEE extends _ZSt10_Iter_baseIPSt4pairIxxELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Niter_baseIPSt4pairIxxEE(...$a);
        }
        __init__ZSt11_Niter_baseIPSt4pairIxxEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIPSt4pairIxxELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_normal_iteratorIPSt4pairIxxEE {
        __init__ZSt20__is_normal_iteratorIPSt4pairIxxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12__is_pointerIPSt4pairIxxEE {
        __init__ZSt12__is_pointerIPSt4pairIxxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10__are_sameISt4pairIxxES1_E {
        __init__ZSt10__are_sameISt4pairIxxES1_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20__copy_move_backwardILi1ELi0ESt26random_access_iterator_tagE {
        __init__ZSt20__copy_move_backwardILi1ELi0ESt26random_access_iterator_tagE(...$a) { }
        __dtor() {
        }
        static _ZNSt20__copy_move_backwardILi1ELi0ESt26random_access_iterator_tagE13__copy_move_bIPSt4pairIxxES2_EES2_S2_S2_S2_(__first, __last, __result) {
          let $t2;
          let __n = 0;
          __n = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
          for (; (__n > 0); (__n = ((__n - 1) | 0))) {
            (($t2 = __result.a[--__result.i], $t2))._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_((--__last.i, {a: __last.a, i: __last.i})));
          }
          return (__result ? {a: __result.a, i: __result.i} : null);
        }
      }
      function _ZSt3absx(__x) {
        return ((v) => BigInt.asIntN(64, v < 0n ? -v : v))(__x);
      }
      function _Z6memcpyPvPKvm(dst, src, n) {
        let $t3;
        let d = (dst ? {a: dst.a, i: dst.i} : null);
        let s = (src ? {a: src.a, i: src.i} : null);
        for (let i = ((0) >>> 0); (i < n); ($t3 = i, i = (($t3 + 1) >>> 0), $t3)) {
          d.a[d.i + (i)] = s.a[s.i + (i)];
        }
        return dst;
      }
      function _ZSt4__lgl(__n) {
        return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE8_M_putllEix.call(__os.a[__os.i], 3, __n);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(__os, __s) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 7, 0, (__s ? {a: __s.a, i: __s.i} : null), ((-(1)) | 0));
        return __os;
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi(__in, __v) {
        __v.a[__v.i] = Number(BigInt.asIntN(32, _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv.call(__in.a[__in.i])));
        return __in;
      }
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERx(__in, __v) {
        __v.a[__v.i] = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv.call(__in.a[__in.i]);
        return __in;
      }
      function _ZSt4swapIxEvRxS_(__a, __b) {
        let $t4, $t5, $t6;
        let __tmp = {v: ($t4 = _ZSt4moveIxEOxS_(__a), $t4.a[$t4.i])};
        __a.a[__a.i] = ($t5 = _ZSt4moveIxEOxS_(__b), $t5.a[$t5.i]);
        __b.a[__b.i] = ($t6 = _ZSt4moveIxEOxS_({a: __tmp, i: "v"}), $t6.a[$t6.i]);
      }
      function _ZSt4swapISt4pairIxxEEvRS0_S1_(__a, __b) {
        let __tmp = {v: new _ZSt4pairIxxE(_ZSt4moveISt4pairIxxEEOS0_S1_(__a))};
        (__a.a[__a.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(__b));
        (__b.a[__b.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_({a: __tmp, i: "v"}));
      }
      function _Z3cmpSt4pairIxxES0_(x, y) {
        return (BigInt.asIntN(64, (x.first$_ZSt4pairIxxE) * (y.second$_ZSt4pairIxxE)) < BigInt.asIntN(64, (y.first$_ZSt4pairIxxE) * (x.second$_ZSt4pairIxxE)));
      }
      function _Z4calcv() {
        let $t7, $t8, $t9, $t10, $t11, $t12, $t13, $t14;
        let hl = 0;
        let sm = 0n;
        for (let i = 1; (i <= _Z1n.v); ($t7 = i, i = (($t7 + 1) | 0), $t7)) {
          if (_Z1b.v[i]) {
             {
              let x = _Z1a.v[i];
              let y = _Z1b.v[i];
              if ((y < 0n)) {
                (x = BigInt.asIntN(64, -(x)), y = BigInt.asIntN(64, -(y)));
              }
              ((($t8 = _Z1h[(hl = ((hl + 1) | 0))], $t8))._ZNSt4pairIxxEaSERKS0_({a: [new _ZSt4pairIxxE({a: [x], i: 0}, {a: [y], i: 0})], i: 0}), sm = BigInt.asIntN(64, (sm) + (y)));
            }
          }
        }
        _ZSt4sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(($t9 = ({a: (({a: _Z1h, i: 0}) ? (({a: _Z1h, i: 0})).a : null), i: (({a: _Z1h, i: 0}) ? (({a: _Z1h, i: 0})).i : 0) + (1)}), $t9 ? {a: $t9.a, i: $t9.i} : null), ($t12 = ($t11 = ($t10 = ({a: (({a: _Z1h, i: 0}) ? (({a: _Z1h, i: 0})).a : null), i: (({a: _Z1h, i: 0}) ? (({a: _Z1h, i: 0})).i : 0) + (hl)}), $t10), ({a: ($t11 ? $t11.a : null), i: ($t11 ? $t11.i : 0) + (1)})), $t12 ? {a: $t12.a, i: $t12.i} : null), _Z3cmpSt4pairIxxES0_);
        let x = 0n;
        let y = 1n;
        let s = 0n;
        for (let i = 1; (i <= hl); ($t13 = i, i = (($t13 + 1) | 0), $t13)) {
           {
            s = BigInt.asIntN(64, (s) + ((_Z1h[i]).second$_ZSt4pairIxxE));
            if ((BigInt.asIntN(64, (s) * (2n)) >= sm)) {
               {
                (x = (_Z1h[i]).first$_ZSt4pairIxxE, y = (_Z1h[i]).second$_ZSt4pairIxxE);
                break;
              }
            }
          }
        }
        if ((x < BigInt.asIntN(64, -(y)))) {
          (x = BigInt(((-(1)) | 0)), y = 1n);
        }
        if ((x > y)) {
          (x = 1n, y = 1n);
        }
        let ans = 0n;
        for (let i = 1; (i <= _Z1n.v); ($t14 = i, i = (($t14 + 1) | 0), $t14)) {
          ans = BigInt.asIntN(64, (ans) + (_ZSt3absx(BigInt.asIntN(64, (BigInt.asIntN(64, (_Z1a.v[i]) * (y))) - (BigInt.asIntN(64, (_Z1b.v[i]) * (x)))))));
        }
        let g = _ZSt5__gcdIxExxx(ans, y);
        return new _ZSt4pairIxxE({a: [BigInt.asIntN(64, (ans) / (g))], i: 0}, {a: [BigInt.asIntN(64, (y) / (g))], i: 0});
      }
      function main() {
        let $t15, $t16, $t17;
        ((_ZSt8ios_base._ZNSt8ios_base15sync_with_stdioEb(0), _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE3tieEPSt13basic_ostreamIcS1_E.call(_ZSt3cin.v, null)), _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE3tieEPS2_.call(_ZSt4cout.v, null));
        _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERi({a: _ZSt3cin, i: "v"}, {a: _Z1n, i: "v"});
        for (let i = 1; (i <= _Z1n.v); ($t15 = i, i = (($t15 + 1) | 0), $t15)) {
          _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERx({a: _ZSt3cin, i: "v"}, {a: _Z1a.v, i: (i)});
        }
        for (let i = 1; (i <= _Z1n.v); ($t16 = i, i = (($t16 + 1) | 0), $t16)) {
          _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERx({a: _ZSt3cin, i: "v"}, {a: _Z1b.v, i: (i)});
        }
        let x = _Z4calcv();
        for (let i = 1; (i <= _Z1n.v); ($t17 = i, i = (($t17 + 1) | 0), $t17)) {
          _ZSt4swapIxEvRxS_({a: _Z1a.v, i: (i)}, {a: _Z1b.v, i: (i)});
        }
        let y = _Z4calcv();
        if ((BigInt.asIntN(64, (x.first$_ZSt4pairIxxE) * (y.second$_ZSt4pairIxxE)) > BigInt.asIntN(64, (y.first$_ZSt4pairIxxE) * (x.second$_ZSt4pairIxxE)))) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, y.first$_ZSt4pairIxxE), {a: [32, 0], i: 0}), y.second$_ZSt4pairIxxE);
        }
        else {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, x.first$_ZSt4pairIxxE), {a: [32, 0], i: 0}), x.second$_ZSt4pairIxxE);
        }
        return 0;
      }
      function _ZSt7declvalIRxES_v() {
        return _ZSt19__declval_protectorIRxE._ZNSt19__declval_protectorIRxE10__delegateEv();
      }
      function _ZSt7declvalIxEOxv() {
        return _ZSt19__declval_protectorIxE._ZNSt19__declval_protectorIxE10__delegateEv();
      }
      function _ZSt4sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
           {
            _ZSt16__introsort_loopIPSt4pairIxxElPFbS1_S1_EEvS_S_lS2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(_ZSt4__lgl(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0), __comp);
            _ZSt22__final_insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
      }
      function _ZSt5__gcdIxExxx(__m, __n) {
        while ((__n !== 0n)) {
           {
            let __t = BigInt.asIntN(64, (__m) % (__n));
            __m = __n;
            __n = __t;
          }
        }
        return __m;
      }
      function _ZSt4moveIxEOxS_(__t) {
        return __t;
      }
      function _ZSt4moveISt4pairIxxEEOS0_S1_(__t) {
        return __t;
      }
      function _ZSt16__introsort_loopIPSt4pairIxxElPFbS1_S1_EEvS_S_lS2_(__first, __last, __depth_limit, __comp) {
        let $t18;
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = ($t18 = _ZSt27__unguarded_partition_pivotIPSt4pairIxxEPFbS1_S1_EES_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp), $t18 ? {a: $t18.a, i: $t18.i} : null);
            _ZSt16__introsort_loopIPSt4pairIxxElPFbS1_S1_EEvS_S_lS2_((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit, __comp);
            __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
          }
        }
      }
      function _ZSt22__final_insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        let $t19, $t20;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_((__first ? {a: __first.a, i: __first.i} : null), ($t19 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t19 ? {a: $t19.a, i: $t19.i} : null), __comp);
            _ZSt26__unguarded_insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(($t20 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t20 ? {a: $t20.a, i: $t20.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
        else {
          _ZSt16__insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
        }
      }
      function _ZSt12partial_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_(__first, __middle, __last, __comp) {
        _ZSt13__heap_selectIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
        _ZSt9sort_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
      }
      function _ZSt27__unguarded_partition_pivotIPSt4pairIxxEPFbS1_S1_EES_S_S_S2_(__first, __last, __comp) {
        let $t21, $t22, $t23, $t24;
        let __mid = ($t21 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t21 ? {a: $t21.a, i: $t21.i} : null);
        _ZSt19__move_median_firstIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t22 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t22 ? {a: $t22.a, i: $t22.i} : null), __comp);
        return ($t24 = _ZSt21__unguarded_partitionIPSt4pairIxxES1_PFbS1_S1_EES_S_S_RKS1_S2_(($t23 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t23 ? {a: $t23.a, i: $t23.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first, __comp), $t24 ? {a: $t24.a, i: $t24.i} : null);
      }
      function _ZSt16__insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        let $t25, $t26;
        if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
          return;
        }
        for (let __i = ($t25 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t25 ? {a: $t25.a, i: $t25.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
           {
            if (__comp(new _ZSt4pairIxxE(__i), new _ZSt4pairIxxE(__first))) {
               {
                let __val = {v: new _ZSt4pairIxxE(_ZSt4moveISt4pairIxxEEOS0_S1_(__i))};
                _ZSt13move_backwardIPSt4pairIxxES_ES_S_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t26 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t26 ? {a: $t26.a, i: $t26.i} : null));
                (__first.a[__first.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_({a: __val, i: "v"}));
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIPSt4pairIxxEPFbS1_S1_EEvS_S2_((__i ? {a: __i.a, i: __i.i} : null), __comp);
            }
          }
        }
      }
      function _ZSt26__unguarded_insertion_sortIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
          _ZSt25__unguarded_linear_insertIPSt4pairIxxEPFbS1_S1_EEvS_S2_((__i ? {a: __i.a, i: __i.i} : null), __comp);
        }
      }
      function _ZSt13__heap_selectIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_(__first, __middle, __last, __comp) {
        _ZSt9make_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
        for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
          if (__comp(new _ZSt4pairIxxE(__i), new _ZSt4pairIxxE(__first))) {
            _ZSt10__pop_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null), __comp);
          }
        }
      }
      function _ZSt9sort_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
           {
            --__last.i;
            _ZSt10__pop_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
      }
      function _ZSt19__move_median_firstIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_(__a, __b, __c, __comp) {
        if (__comp(new _ZSt4pairIxxE(__a), new _ZSt4pairIxxE(__b))) {
           {
            if (__comp(new _ZSt4pairIxxE(__b), new _ZSt4pairIxxE(__c))) {
              _ZSt9iter_swapIPSt4pairIxxES_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
            else {
              if (__comp(new _ZSt4pairIxxE(__a), new _ZSt4pairIxxE(__c))) {
                _ZSt9iter_swapIPSt4pairIxxES_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
              }
            }
          }
        }
        else {
          if (__comp(new _ZSt4pairIxxE(__a), new _ZSt4pairIxxE(__c))) {
            return;
          }
          else {
            if (__comp(new _ZSt4pairIxxE(__b), new _ZSt4pairIxxE(__c))) {
              _ZSt9iter_swapIPSt4pairIxxES_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
            }
            else {
              _ZSt9iter_swapIPSt4pairIxxES_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
          }
        }
      }
      function _ZSt21__unguarded_partitionIPSt4pairIxxES1_PFbS1_S1_EES_S_S_RKS1_S2_(__first, __last, __pivot, __comp) {
        while (true) {
           {
            while (__comp(new _ZSt4pairIxxE(__first), __pivot.a[__pivot.i])) {
              ++__first.i;
            }
            --__last.i;
            while (__comp(__pivot.a[__pivot.i], new _ZSt4pairIxxE(__last))) {
              --__last.i;
            }
            if ((!(((__first ? __first.i : 0) < (__last ? __last.i : 0))))) {
              return (__first ? {a: __first.a, i: __first.i} : null);
            }
            _ZSt9iter_swapIPSt4pairIxxES_EvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
            ++__first.i;
          }
        }
      }
      function _ZSt13move_backwardIPSt4pairIxxES_ES_S_S_S_(__first, __last, __result) {
        let $t27, $t28, $t29;
        return ($t29 = _ZSt23__copy_move_backward_a2ILi1EPSt4pairIxxES_ES_S_S_S_(($t27 = _ZSt12__miter_baseIPSt4pairIxxEES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t27 ? {a: $t27.a, i: $t27.i} : null), ($t28 = _ZSt12__miter_baseIPSt4pairIxxEES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t28 ? {a: $t28.a, i: $t28.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t29 ? {a: $t29.a, i: $t29.i} : null);
      }
      function _ZSt25__unguarded_linear_insertIPSt4pairIxxEPFbS1_S1_EEvS_S2_(__last, __comp) {
        let __val = {v: new _ZSt4pairIxxE(_ZSt4moveISt4pairIxxEEOS0_S1_(__last))};
        let __next = (__last ? {a: __last.a, i: __last.i} : null);
        --__next.i;
        while (__comp(new _ZSt4pairIxxE({a: __val, i: "v"}), new _ZSt4pairIxxE(__next))) {
           {
            (__last.a[__last.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(__next));
            __last = (__next ? {a: __next.a, i: __next.i} : null);
            --__next.i;
          }
        }
        (__last.a[__last.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_({a: __val, i: "v"}));
      }
      function _ZSt9make_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S2_(__first, __last, __comp) {
        let $t30, $t31;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
          return;
        }
        let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: new _ZSt4pairIxxE(_ZSt4moveISt4pairIxxEEOS0_S1_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})))};
            _ZSt13__adjust_heapIPSt4pairIxxElS1_PFbS1_S1_EEvS_llS1_S2_((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t30 = _ZSt4moveISt4pairIxxEEOS0_S1_({a: __value, i: "v"}), $t30.a[$t30.i]), __comp);
            if ((__parent === 0)) {
              return;
            }
            ($t31 = __parent, __parent = (($t31 - 1) | 0), $t31);
          }
        }
      }
      function _ZSt10__pop_heapIPSt4pairIxxEPFbS1_S1_EEvS_S_S_S2_(__first, __last, __result, __comp) {
        let $t32;
        let __value = {v: new _ZSt4pairIxxE(_ZSt4moveISt4pairIxxEEOS0_S1_(__result))};
        (__result.a[__result.i])._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(__first));
        _ZSt13__adjust_heapIPSt4pairIxxElS1_PFbS1_S1_EEvS_llS1_S2_((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t32 = _ZSt4moveISt4pairIxxEEOS0_S1_({a: __value, i: "v"}), $t32.a[$t32.i]), __comp);
      }
      function _ZSt9iter_swapIPSt4pairIxxES_EvS_S_(__a, __b) {
        _ZSt4swapISt4pairIxxEEvRS0_S1_(__a, __b);
      }
      function _ZSt12__miter_baseIPSt4pairIxxEES_S_(__it) {
        let $t33;
        return ($t33 = _ZSt10_Iter_baseIPSt4pairIxxELi0EE._ZNSt10_Iter_baseIPSt4pairIxxELi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t33 ? {a: $t33.a, i: $t33.i} : null);
      }
      function _ZSt23__copy_move_backward_a2ILi1EPSt4pairIxxES_ES_S_S_S_(__first, __last, __result) {
        let $t34, $t35, $t36, $t37;
        return ($t37 = _ZSt22__copy_move_backward_aILi1EPSt4pairIxxES_ES_S_S_S_(($t34 = _ZSt12__niter_baseIPSt4pairIxxEES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t34 ? {a: $t34.a, i: $t34.i} : null), ($t35 = _ZSt12__niter_baseIPSt4pairIxxEES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t35 ? {a: $t35.a, i: $t35.i} : null), ($t36 = _ZSt12__niter_baseIPSt4pairIxxEES_S_((__result ? {a: __result.a, i: __result.i} : null)), $t36 ? {a: $t36.a, i: $t36.i} : null)), $t37 ? {a: $t37.a, i: $t37.i} : null);
      }
      function _ZSt7forwardIxEOxRx(__t) {
        return __t;
      }
      function _ZSt13__adjust_heapIPSt4pairIxxElS1_PFbS1_S1_EEvS_llS1_S2_(__first, __holeIndex, __len, __value, __comp) {
        let $t38, $t39, $t40, $t41, $t42, $t43;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if (__comp(new _ZSt4pairIxxE(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), new _ZSt4pairIxxE(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})))) {
              ($t38 = __secondChild, __secondChild = (($t38 - 1) | 0), $t38);
            }
            (($t40 = ($t39 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t39.a[$t39.i]), $t40))._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})));
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            (($t42 = ($t41 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t41.a[$t41.i]), $t42))._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})));
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIPSt4pairIxxElS1_PFbS1_S1_EEvS_llS1_S2_((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t43 = _ZSt4moveISt4pairIxxEEOS0_S1_({a: __value, i: "v"}), $t43.a[$t43.i]), __comp);
      }
      function _ZSt12__niter_baseIPSt4pairIxxEES_S_(__it) {
        let $t44;
        return ($t44 = _ZSt10_Iter_baseIPSt4pairIxxELi0EE._ZNSt10_Iter_baseIPSt4pairIxxELi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t44 ? {a: $t44.a, i: $t44.i} : null);
      }
      function _ZSt22__copy_move_backward_aILi1EPSt4pairIxxES_ES_S_S_S_(__first, __last, __result) {
        let $t45;
        let __simple = (((0 && 1) && 1) && 1);
        return ($t45 = _ZSt20__copy_move_backwardILi1ELi0ESt26random_access_iterator_tagE._ZNSt20__copy_move_backwardILi1ELi0ESt26random_access_iterator_tagE13__copy_move_bIPSt4pairIxxES2_EES2_S2_S2_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t45 ? {a: $t45.a, i: $t45.i} : null);
      }
      function _ZSt11__push_heapIPSt4pairIxxElS1_PFbS1_S1_EEvS_llS1_S2_(__first, __holeIndex, __topIndex, __value, __comp) {
        let $t46, $t47, $t48, $t49;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && __comp(new _ZSt4pairIxxE(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), new _ZSt4pairIxxE({a: __value, i: "v"})))) {
           {
            (($t47 = ($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t46.a[$t46.i]), $t47))._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})));
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        (($t49 = ($t48 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t48.a[$t48.i]), $t49))._ZNSt4pairIxxEaSEOS0_(_ZSt4moveISt4pairIxxEEOS0_S1_({a: __value, i: "v"}));
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
      let _Z1n = {v: 0};
      let _Z1a = {v: new Array(200005).fill(0n)};
      let _Z1b = {v: new Array(200005).fill(0n)};
      let _Z1h = Array.from({length: 200005}, () => new _ZSt4pairIxxE());
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
