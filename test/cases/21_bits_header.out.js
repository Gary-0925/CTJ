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
        constructor(...$a) {
          this.__init__ZSt18input_iterator_tag(...$a);
        }
        __init__ZSt18input_iterator_tag(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt18input_iterator_tag)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt20forward_iterator_tag extends _ZSt18input_iterator_tag {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt20forward_iterator_tag) ? [$a[0]] : []));
          this.__init__ZSt20forward_iterator_tag(...$a);
        }
        __init__ZSt20forward_iterator_tag(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt20forward_iterator_tag)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt18input_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26bidirectional_iterator_tag extends _ZSt20forward_iterator_tag {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt26bidirectional_iterator_tag) ? [$a[0]] : []));
          this.__init__ZSt26bidirectional_iterator_tag(...$a);
        }
        __init__ZSt26bidirectional_iterator_tag(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt26bidirectional_iterator_tag)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt20forward_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _ZSt26random_access_iterator_tag extends _ZSt26bidirectional_iterator_tag {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt26random_access_iterator_tag) ? [$a[0]] : []));
          this.__init__ZSt26random_access_iterator_tag(...$a);
        }
        __init__ZSt26random_access_iterator_tag(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt26random_access_iterator_tag)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
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
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13new_allocatorIiEE(...$a);
        }
        __init__ZN9__gnu_cxx13new_allocatorIiEE(...$a) {
        }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIiE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t0;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZNK9__gnu_cxx13new_allocatorIiE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t0 = _Znwm(((Math.imul(__n, 4)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorIiE10deallocateEPim(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorIiE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (4))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorIiE9constructIiiEEvPiOi(__p, __args_0) {
          let $t1;
          (__p.a[__p.i] = ($t1 = _ZSt7forwardIiEOiS_(__args_0), $t1.a[$t1.i]));
        }
        _ZN9__gnu_cxx13new_allocatorIiE7destroyIiEEvPi(__p) {
          void 0;
        }
      }
      class _ZSt9allocatorIiE extends _ZN9__gnu_cxx13new_allocatorIiEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE) ? [$a[0]] : []));
          this.__init__ZSt9allocatorIiE(...$a);
        }
        __init__ZSt9allocatorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
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
      class _ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE extends _ZSt9allocatorIiE {
        _M_start;
        _M_finish;
        _M_end_of_storage;
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE) ? [$a[0]] : []));
          this.__init__ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE)) {
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
          _ZSt9allocatorIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseIiSt9allocatorIiEE {
        _M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt12_Vector_baseIiSt9allocatorIiEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE)) {
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE = new _ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE($a[0]);
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE";
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE = new _ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE();
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE";
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE"};
        }
        _ZNSt12_Vector_baseIiSt9allocatorIiEE11_M_allocateEm(__n) {
          let $t2;
          return ($t2 = ((__n !== ((0) >>> 0)) ? _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE8allocateEmPKv.call(this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE, __n, {a: [0], i: 0}) : 0), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
        _ZNSt12_Vector_baseIiSt9allocatorIiEE13_M_deallocateEPim(__p, __n) {
          if (__p) {
            _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE10deallocateEPim.call(this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE, (__p ? {a: __p.a, i: __p.i} : null), __n);
          }
        }
      }
      class _ZSt6vectorIiSt9allocatorIiEE extends _ZSt12_Vector_baseIiSt9allocatorIiEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt9allocatorIiE)) ? [($a[1] === undefined ? ({a: [new _ZSt9allocatorIiE()], i: 0}) : $a[1])] : []));
          this.__init__ZSt6vectorIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt6vectorIiSt9allocatorIiEE(...$a) {
          let $t3, $t4;
          if ($a.length >= 1 && $a.length <= 2 && Array.isArray($a[0]) && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt9allocatorIiE))) {
            this._ZNSt6vectorIiSt9allocatorIiEE19_M_range_initializeIPiEEvS3_S3_St18input_iterator_tag(($t3 = ({a: $a[0], i: 0}), $t3 ? {a: $t3.a, i: $t3.i} : null), ($t4 = ({a: $a[0], i: ($a[0]).length}), $t4 ? {a: $t4.a, i: $t4.i} : null), new _ZSt26random_access_iterator_tag());
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt12_Vector_baseIiSt9allocatorIiEE.prototype.__dtor.call(this);
        }
        _ZNSt6vectorIiSt9allocatorIiEE5beginEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE, i: "_M_start"});
        }
        _ZNSt6vectorIiSt9allocatorIiEE3endEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE, i: "_M_finish"});
        }
        _ZNKSt6vectorIiSt9allocatorIiEE4sizeEv() {
          return ((((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i : 0) - (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i : 0))) >>> 0);
        }
        _ZNKSt6vectorIiSt9allocatorIiEE8max_sizeEv() {
          return _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE8max_sizeERKS2_(this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv());
        }
        _ZNSt6vectorIiSt9allocatorIiEE9push_backERKi(__x) {
          if ((!(this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage || (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.a && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.i)))) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi({a: this, i: "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE"}, (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i} : null), __x);
              ++this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i;
            }
          }
          else {
            this._ZNSt6vectorIiSt9allocatorIiEE19_M_emplace_back_auxIiEEvOi(__x);
          }
        }
        _ZNKSt6vectorIiSt9allocatorIiEE12_M_check_lenEmPKc(__n, __s) {
          let $t5;
          __n = {v: __n};
          if (((((this._ZNKSt6vectorIiSt9allocatorIiEE8max_sizeEv()) - (this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv())) >>> 0) < __n.v)) {
            _ZSt20__throw_length_errorPKc((__s ? {a: __s.a, i: __s.i} : null));
          }
          let __len = (((this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv()) + (($t5 = _ZSt3maxImERKmS_S_({a: [this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv()], i: 0}, {a: __n, i: "v"}), $t5.a[$t5.i]))) >>> 0);
          return (((__len < this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv()) || (__len > this._ZNKSt6vectorIiSt9allocatorIiEE8max_sizeEv())) ? ((this._ZNKSt6vectorIiSt9allocatorIiEE8max_sizeEv()) >>> 0) : ((__len) >>> 0));
        }
        _ZNSt6vectorIiSt9allocatorIiEE19_M_emplace_back_auxIiEEvOi(__args_0) {
          let $t6, $t7, $t8, $t9, $t10;
          let __len = this._ZNKSt6vectorIiSt9allocatorIiEE12_M_check_lenEmPKc(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
          let __new_start = ($t6 = _ZSt12_Vector_baseIiSt9allocatorIiEE.prototype._ZNSt12_Vector_baseIiSt9allocatorIiEE11_M_allocateEm.call(this, __len), $t6 ? {a: $t6.a, i: $t6.i} : null);
          let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi({a: this, i: "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE"}, ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv())}), $t7 ? {a: $t7.a, i: $t7.i} : null), _ZSt7forwardIiEOiS_(__args_0));
              __new_finish = null;
              __new_finish = ($t8 = _ZSt34__uninitialized_move_if_noexcept_aIPiS_St9allocatorIiEES_S_S_S_RS1_((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv()), $t8 ? {a: $t8.a, i: $t8.i} : null);
              ++__new_finish.i;
            }
          }
          if (false) {
             {
              if ((!__new_finish)) {
                _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE7destroyIiEEvRS2_Pi({a: this, i: "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE"}, ($t9 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv())}), $t9 ? {a: $t9.a, i: $t9.i} : null));
              }
              else {
                _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv());
              }
              this._ZNSt12_Vector_baseIiSt9allocatorIiEE13_M_deallocateEPim((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
            }
          }
          _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i} : null), this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv());
          this._ZNSt12_Vector_baseIiSt9allocatorIiEE13_M_deallocateEPim((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null), ((((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.i : 0) - (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i : 0))) >>> 0));
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage = ($t10 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t10 ? {a: $t10.a, i: $t10.i} : null);
        }
        _ZNSt6vectorIiSt9allocatorIiEE19_M_range_initializeIPiEEvS3_S3_St18input_iterator_tag(__first, __last, $p2) {
          for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
            this._ZNSt6vectorIiSt9allocatorIiEE12emplace_backIiEEvOi(__first);
          }
        }
        _ZNSt6vectorIiSt9allocatorIiEE12emplace_backIiEEvOi(__args_0) {
          if ((!(this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage || (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.a && this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i === this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.i)))) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi({a: this, i: "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE"}, (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i} : null), _ZSt7forwardIiEOiS_(__args_0));
              ++this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i;
            }
          }
          else {
            this._ZNSt6vectorIiSt9allocatorIiEE19_M_emplace_back_auxIiEEvOi(_ZSt7forwardIiEOiS_(__args_0));
          }
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi(__a, __p, __arg) {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE9constructIiiEEvPiOi.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE8max_sizeERKS2_(__a) {
          return _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZNK9__gnu_cxx13new_allocatorIiE8max_sizeEv.call(__a.a[__a.i]);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE7destroyIiEEvRS2_Pi(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE7destroyIiEEvPi.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindIiEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listIiE {
        _M_array$_ZSt16initializer_listIiE;
        _M_len$_ZSt16initializer_listIiE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listIiE(...$a);
        }
        __init__ZSt16initializer_listIiE(...$a) {
          this._M_array$_ZSt16initializer_listIiE = null;
          this._M_len$_ZSt16initializer_listIiE = 0;
        }
        __dtor() {
        }
        _ZNKSt16initializer_listIiE4sizeEv() {
          return this._M_len$_ZSt16initializer_listIiE;
        }
        _ZNKSt16initializer_listIiE5beginEv() {
          return (this._M_array$_ZSt16initializer_listIiE ? {a: this._M_array$_ZSt16initializer_listIiE.a, i: this._M_array$_ZSt16initializer_listIiE.i} : null);
        }
        _ZNKSt16initializer_listIiE3endEv() {
          let $t11, $t12, $t13;
          return ($t13 = ($t12 = ($t11 = this._ZNKSt16initializer_listIiE5beginEv(), $t11), ({a: ($t12 ? $t12.a : null), i: ($t12 ? $t12.i : 0) + (this._ZNKSt16initializer_listIiE4sizeEv())})), $t13 ? {a: $t13.a, i: $t13.i} : null);
        }
      }
      class _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE(...$a) {
          let $t14, $t15, $t16;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = (((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE) ? {a: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).a, i: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = ($t14 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(($a[0]).a[($a[0]).i]), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = ($t16 = 0, $t16 ? {a: $t16.a, i: $t16.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv() {
          return this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE;
        }
        _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv() {
          ++this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.i;
          return {a: [this], i: 0};
        }
        _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv() {
          --this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.i;
          return {a: [this], i: 0};
        }
        _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEpLERKl(__n) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.i += (__n.a[__n.i]);
          return {a: [this], i: 0};
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl(__n) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [({a: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.a : null), i: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.i : 0) + (__n.a[__n.i])})], i: 0});
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmiERKl(__n) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [({a: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.a : null), i: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.i : 0) - (__n.a[__n.i])})], i: 0});
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv() {
          return {a: this, i: "_M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE"};
        }
        _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_(o) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = (((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE) ? {a: ((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).a, i: ((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZSt10__are_sameIPiS0_E {
        __init__ZSt10__are_sameIPiS0_E(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx11__enable_ifILi1ESt6vectorIiSt9allocatorIiEEEE {
        __init__ZN9__gnu_cxx11__enable_ifILi1ESt6vectorIiSt9allocatorIiEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPiE {
        __init__ZSt15iterator_traitsIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9remove_cvIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        __init__ZSt9remove_cvIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        __init__ZSt15remove_volatileIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        __init__ZSt12remove_constIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZNSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE10_Wrap_typeISt26random_access_iterator_tagEE {
        __init__ZNSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE10_Wrap_typeISt26random_access_iterator_tagEE(...$a) { }
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
      class _ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE {
        __init__ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE extends _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        _M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE;
        _M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE;
        constructor(...$a) {
          this.__init__ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
          this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE();
          this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE.ctj_a = this; this._M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE.ctj_i = "_M_real$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE";
          this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE();
          this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE.ctj_a = this; this._M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE.ctj_i = "_M_imag$_ZSt7complexIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE";
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
      class _ZSt23__move_if_noexcept_condIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__move_if_noexcept_condIiE(...$a);
        }
        __init__ZSt23__move_if_noexcept_condIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
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
      class _ZSt24is_nothrow_constructibleIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt24is_nothrow_constructibleIiOiE(...$a);
        }
        __init__ZSt24is_nothrow_constructibleIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt36__is_nothrow_move_constructible_implIiLi0EE extends _ZSt24is_nothrow_constructibleIiOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt36__is_nothrow_move_constructible_implIiLi0EE(...$a);
        }
        __init__ZSt36__is_nothrow_move_constructible_implIiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt24is_nothrow_constructibleIiOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29is_nothrow_move_constructibleIiE extends _ZSt36__is_nothrow_move_constructible_implIiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt29is_nothrow_move_constructibleIiE(...$a);
        }
        __init__ZSt29is_nothrow_move_constructibleIiE(...$a) {
        }
        __dtor() {
          _ZSt36__is_nothrow_move_constructible_implIiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleIiOiE(...$a);
        }
        __init__ZSt16is_constructibleIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleIiOiE(...$a);
        }
        __init__ZSt25__is_direct_constructibleIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implIiOiE extends _ZSt25__is_direct_constructibleIiOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implIiOiE(...$a);
        }
        __init__ZSt23__is_constructible_implIiOiE(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleIiOiE.prototype.__dtor.call(this);
        }
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
      class _ZSt34__is_direct_constructible_ref_castIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castIiOiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIOiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIOiiE(...$a);
        }
        __init__ZSt20__is_static_castableIOiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIOiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIOiiE(...$a);
        }
        __init__ZSt25__is_static_castable_safeIOiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIOiiE extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIOiiE(...$a);
        }
        __init__ZSt25__is_static_castable_implIOiiE(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIOiE(...$a);
        }
        __init__ZSt12is_referenceIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIOiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIOiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIOiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIOiESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIOiESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIOiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIOiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIOiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIOiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIOiE(...$a);
        }
        __init__ZSt7is_voidIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIOiE {
        __init__ZSt9remove_cvIOiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIOiE {
        __init__ZSt15remove_volatileIOiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIOiE {
        __init__ZSt12remove_constIOiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIOiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIOiE(...$a);
        }
        __init__ZSt16__is_void_helperIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIOiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIOiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIOiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIOiEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIOiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIOiEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIOiEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIOiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIOiEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIOiEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIOiLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIOiLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIOiE extends _ZSt29__add_rvalue_reference_helperIOiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIOiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIOiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIOiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIOiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIOiE(...$a);
        }
        __init__ZSt11is_functionIOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIOiESt11is_functionIS1_EE extends _ZSt11is_functionIOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIOiESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIOiESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIOiESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIOiESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIOiESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIOiESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIOiESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIOiiLi1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIOiiLi1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIOiiLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIiEE extends _ZSt19is_lvalue_referenceIOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIiEE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIOiESt19is_rvalue_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIOiEE {
        __init__ZSt11conditionalILi0ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIOiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIOiiLi0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIOiiLi0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIOiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE extends _ZSt25__is_lvalue_to_rvalue_refIOiiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIOiiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIOiE {
        __init__ZSt16remove_referenceIOiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_sameIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_sameIiiE(...$a);
        }
        __init__ZSt7is_sameIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_sameIiiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_sameIiiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_sameIiiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_base_ofIiiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_base_ofIiiE(...$a);
        }
        __init__ZSt10is_base_ofIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt7is_sameIiiEESt10is_base_ofIiiEE extends _ZSt6__not_ISt7is_sameIiiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt7is_sameIiiEESt10is_base_ofIiiEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt7is_sameIiiEESt10is_base_ofIiiEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_sameIiiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt10is_base_ofIiiESt6__not_ISt7is_sameIiiEEE {
        __init__ZSt11conditionalILi0ESt10is_base_ofIiiESt6__not_ISt7is_sameIiiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIOiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIOiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIOiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS3_iLi0EEEESt20__is_static_castableIS3_iEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOiiLi1EESt25__is_lvalue_to_rvalue_refIS3_iLi0EEEESt20__is_static_castableIS3_iEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeIiOiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newIiOiE extends _ZSt34__is_direct_constructible_new_safeIiOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newIiOiE(...$a);
        }
        __init__ZSt29__is_direct_constructible_newIiOiE(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeIiOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt15is_destructibleIiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15is_destructibleIiE(...$a);
        }
        __init__ZSt15is_destructibleIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_array_unknown_boundsIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_array_unknown_boundsIiE(...$a);
        }
        __init__ZSt25__is_array_unknown_boundsIiE(...$a) {
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
      class _ZSt6extentIiLi0EE extends _ZSt17integral_constantImLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6extentIiLi0EE(...$a);
        }
        __init__ZSt6extentIiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantImLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt6extentIiLi0EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt6extentIiLi0EEE(...$a);
        }
        __init__ZSt6__not_ISt6extentIiLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt8is_arrayIiESt6__not_ISt6extentIiLi0EEEE extends _ZSt8is_arrayIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt8is_arrayIiESt6__not_ISt6extentIiLi0EEEE(...$a);
        }
        __init__ZSt6__and_ISt8is_arrayIiESt6__not_ISt6extentIiLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt6extentIiLi0EEESt8is_arrayIiEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt6extentIiLi0EEESt8is_arrayIiEE(...$a) { }
        __dtor() {
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
      class _ZSt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEE extends _ZSt11is_functionIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEE(...$a);
        }
        __init__ZSt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIiESt25__is_array_unknown_boundsIiESt11is_functionIiEE extends _ZSt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt25__is_array_unknown_boundsIiESt11is_functionIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt25__is_array_unknown_boundsIiESt11is_functionIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt25__is_array_unknown_boundsIiESt11is_functionIiEE {
        __init__ZSt11conditionalILi0ESt25__is_array_unknown_boundsIiESt11is_functionIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt25__is_array_unknown_boundsIiESt11is_functionIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9is_scalarIiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt9is_scalarIiE(...$a);
        }
        __init__ZSt9is_scalarIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13is_arithmeticIiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt13is_arithmeticIiE(...$a);
        }
        __init__ZSt13is_arithmeticIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_integralIiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_integralIiE(...$a);
        }
        __init__ZSt11is_integralIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_integral_helperIiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_integral_helperIiE(...$a);
        }
        __init__ZSt20__is_integral_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_floating_pointIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_floating_pointIiE(...$a);
        }
        __init__ZSt17is_floating_pointIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_floating_point_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_floating_point_helperIiE(...$a);
        }
        __init__ZSt26__is_floating_point_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_integralIiESt17is_floating_pointIiEE extends _ZSt11is_integralIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_integralIiESt17is_floating_pointIiEE(...$a);
        }
        __init__ZSt5__or_ISt11is_integralIiESt17is_floating_pointIiEE(...$a) {
        }
        __dtor() {
          _ZSt11is_integralIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt11is_integralIiESt17is_floating_pointIiEE {
        __init__ZSt11conditionalILi1ESt11is_integralIiESt17is_floating_pointIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_enumIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_enumIiE(...$a);
        }
        __init__ZSt7is_enumIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_pointerIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_pointerIiE(...$a);
        }
        __init__ZSt10is_pointerIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__is_pointer_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19__is_pointer_helperIiE(...$a);
        }
        __init__ZSt19__is_pointer_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_member_pointerIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_member_pointerIiE(...$a);
        }
        __init__ZSt17is_member_pointerIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_member_pointer_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_member_pointer_helperIiE(...$a);
        }
        __init__ZSt26__is_member_pointer_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14__is_nullptr_tIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14__is_nullptr_tIiE(...$a);
        }
        __init__ZSt14__is_nullptr_tIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21__is_nullptr_t_helperIiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21__is_nullptr_t_helperIiE(...$a);
        }
        __init__ZSt21__is_nullptr_t_helperIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt13is_arithmeticIiESt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE extends _ZSt13is_arithmeticIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt13is_arithmeticIiESt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a);
        }
        __init__ZSt5__or_ISt13is_arithmeticIiESt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a) {
        }
        __dtor() {
          _ZSt13is_arithmeticIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEE extends _ZSt14__is_nullptr_tIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a);
        }
        __init__ZSt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a) {
        }
        __dtor() {
          _ZSt14__is_nullptr_tIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE extends _ZSt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a);
        }
        __init__ZSt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE extends _ZSt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17is_member_pointerIiESt14__is_nullptr_tIiEE {
        __init__ZSt11conditionalILi0ESt17is_member_pointerIiESt14__is_nullptr_tIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt10is_pointerIiESt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEEE {
        __init__ZSt11conditionalILi0ESt10is_pointerIiESt5__or_ISt17is_member_pointerIiESt14__is_nullptr_tIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_enumIiESt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEEE {
        __init__ZSt11conditionalILi0ESt7is_enumIiESt5__or_ISt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi1ESt13is_arithmeticIiESt5__or_ISt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEEE {
        __init__ZSt11conditionalILi1ESt13is_arithmeticIiESt5__or_ISt7is_enumIiESt10is_pointerIiESt17is_member_pointerIiESt14__is_nullptr_tIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5__or_ISt12is_referenceIiESt9is_scalarIiEE extends _ZSt9is_scalarIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt12is_referenceIiESt9is_scalarIiEE(...$a);
        }
        __init__ZSt5__or_ISt12is_referenceIiESt9is_scalarIiEE(...$a) {
        }
        __dtor() {
          _ZSt9is_scalarIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt12is_referenceIiESt9is_scalarIiEE {
        __init__ZSt11conditionalILi0ESt12is_referenceIiESt9is_scalarIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_safeIiLi0ELi1EE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_safeIiLi0ELi1EE(...$a);
        }
        __init__ZSt22__is_destructible_safeIiLi0ELi1EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implIiOiE extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implIiOiE(...$a);
        }
        __init__ZSt30__is_direct_constructible_implIiOiE(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiOiEE extends _ZSt30__is_direct_constructible_implIiOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiOiEE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiOiEE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implIiOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implIiOiESt15is_destructibleIiEE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implIiOiESt15is_destructibleIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiOiESt34__is_direct_constructible_new_safeIiS1_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiOiESt34__is_direct_constructible_new_safeIiS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt26__is_nt_constructible_implIiOiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_nt_constructible_implIiOiE(...$a);
        }
        __init__ZSt26__is_nt_constructible_implIiOiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt16is_constructibleIiOiESt26__is_nt_constructible_implIiS1_EE extends _ZSt26__is_nt_constructible_implIiOiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt16is_constructibleIiOiESt26__is_nt_constructible_implIiS1_EE(...$a);
        }
        __init__ZSt6__and_ISt16is_constructibleIiOiESt26__is_nt_constructible_implIiS1_EE(...$a) {
        }
        __dtor() {
          _ZSt26__is_nt_constructible_implIiOiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt26__is_nt_constructible_implIiOiESt16is_constructibleIiS1_EE {
        __init__ZSt11conditionalILi1ESt26__is_nt_constructible_implIiOiESt16is_constructibleIiS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt29is_nothrow_move_constructibleIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt29is_nothrow_move_constructibleIiEE(...$a);
        }
        __init__ZSt6__not_ISt29is_nothrow_move_constructibleIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleIiRKiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleIiRKiE(...$a);
        }
        __init__ZSt16is_constructibleIiRKiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_copy_constructible_implIiLi0EE extends _ZSt16is_constructibleIiRKiE {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_copy_constructible_implIiLi0EE(...$a);
        }
        __init__ZSt28__is_copy_constructible_implIiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt16is_constructibleIiRKiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21is_copy_constructibleIiE extends _ZSt28__is_copy_constructible_implIiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21is_copy_constructibleIiE(...$a);
        }
        __init__ZSt21is_copy_constructibleIiE(...$a) {
        }
        __dtor() {
          _ZSt28__is_copy_constructible_implIiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleIiRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleIiRiE(...$a);
        }
        __init__ZSt25__is_direct_constructibleIiRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implIiRKiE extends _ZSt25__is_direct_constructibleIiRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implIiRKiE(...$a);
        }
        __init__ZSt23__is_constructible_implIiRKiE(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleIiRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castIiRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castIiRiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castIiRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIRiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIRiiE(...$a);
        }
        __init__ZSt20__is_static_castableIRiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIRiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIRiiE(...$a);
        }
        __init__ZSt25__is_static_castable_safeIRiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIRiiE extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIRiiE(...$a);
        }
        __init__ZSt25__is_static_castable_implIRiiE(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
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
      class _ZSt11is_functionIRiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIRiE(...$a);
        }
        __init__ZSt11is_functionIRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRiESt11is_functionIS1_EE extends _ZSt11is_functionIRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRiESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRiESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRiESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIRiESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIRiESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIRiESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIRiESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIRiiLi1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIRiiLi1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIRiiLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIiEE extends _ZSt19is_rvalue_referenceIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIiEE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIRiESt19is_rvalue_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIRiEE {
        __init__ZSt11conditionalILi1ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIRiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIRiiLi0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIRiiLi0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIRiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE extends _ZSt25__is_lvalue_to_rvalue_refIRiiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIRiiLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIRiE {
        __init__ZSt16remove_referenceIRiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIRiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIRiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIRiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_iLi1EESt25__is_lvalue_to_rvalue_refIS1_iLi0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS2_iLi0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS3_iLi0EEEESt20__is_static_castableIS3_iEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRiiLi1EESt25__is_lvalue_to_rvalue_refIS3_iLi0EEEESt20__is_static_castableIS3_iEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeIiRiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeIiRiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeIiRiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newIiRiE extends _ZSt34__is_direct_constructible_new_safeIiRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newIiRiE(...$a);
        }
        __init__ZSt29__is_direct_constructible_newIiRiE(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeIiRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implIiRiE extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implIiRiE(...$a);
        }
        __init__ZSt30__is_direct_constructible_implIiRiE(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiRiEE extends _ZSt30__is_direct_constructible_implIiRiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiRiEE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiRiEE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implIiRiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implIiRiESt15is_destructibleIiEE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implIiRiESt15is_destructibleIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiRiESt34__is_direct_constructible_new_safeIiS1_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiRiESt34__is_direct_constructible_new_safeIiS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIiEESt21is_copy_constructibleIiEE extends _ZSt6__not_ISt29is_nothrow_move_constructibleIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIiEESt21is_copy_constructibleIiEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIiEESt21is_copy_constructibleIiEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt29is_nothrow_move_constructibleIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt21is_copy_constructibleIiESt6__not_ISt29is_nothrow_move_constructibleIiEEE {
        __init__ZSt11conditionalILi0ESt21is_copy_constructibleIiESt6__not_ISt29is_nothrow_move_constructibleIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13move_iteratorIPiE {
        _M_current$_ZSt13move_iteratorIPiE;
        constructor(...$a) {
          this.__init__ZSt13move_iteratorIPiE(...$a);
        }
        __init__ZSt13move_iteratorIPiE(...$a) {
          let $t17;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIPiE)) {
            this._M_current$_ZSt13move_iteratorIPiE = ($t17 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(($a[0]).a[($a[0]).i]), $t17 ? {a: $t17.a, i: $t17.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZSt13move_iteratorIPiE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt13move_iteratorIPiE4baseEv() {
          return (this._M_current$_ZSt13move_iteratorIPiE ? {a: this._M_current$_ZSt13move_iteratorIPiE.a, i: this._M_current$_ZSt13move_iteratorIPiE.i} : null);
        }
        _ZNKSt13move_iteratorIPiEdeEv() {
          return _ZSt4moveIiEOiS_(this._M_current$_ZSt13move_iteratorIPiE);
        }
        _ZNSt13move_iteratorIPiEppEv() {
          ++this._M_current$_ZSt13move_iteratorIPiE.i;
          return {a: [this], i: 0};
        }
      }
      class _ZSt11conditionalILi0EPiSt13move_iteratorIS0_EE {
        __init__ZSt11conditionalILi0EPiSt13move_iteratorIS0_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5tuple {
        __init__ZSt5tuple(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIOiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIOiE(...$a);
        }
        __init__ZSt19__declval_protectorIOiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
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
      class _ZSt18__is_move_iteratorIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        __init__ZSt18__is_move_iteratorIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE {
        __init__ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE7_S_baseES7_(__it) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__it], i: 0});
        }
      }
      class _ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE extends _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE.prototype.__dtor.call(this);
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
      class _ZSt20__is_normal_iteratorIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE {
        __init__ZSt20__is_normal_iteratorIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE {
        __init__ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE7_S_baseES7_(__it) {
          let $t18, $t19;
          return ($t18 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__it), $t19 = ($t18 ? $t18.a[$t18.i] : null), $t19 && $t19.a !== undefined ? {a: $t19.a, i: $t19.i} : $t19);
        }
      }
      class _ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE extends _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a);
        }
        __init__ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE.prototype.__dtor.call(this);
        }
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
          let $t20, $t21;
          let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
          if (_Num) {
            _Z7memmovePvPKvm(($t20 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t20 ? {a: $t20.a, i: $t20.i} : null), (__first ? {a: __first.a, i: __first.i} : null), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
          }
          return ($t21 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t21 ? {a: $t21.a, i: $t21.i} : null);
        }
      }
      function _Z6memcpyPvPKvm(dst, src, n) {
        let $t22;
        let d = (dst ? {a: dst.a, i: dst.i} : null);
        let s = (src ? {a: src.a, i: src.i} : null);
        for (let i = ((0) >>> 0); (i < n); ($t22 = i, i = (($t22 + 1) >>> 0), $t22)) {
          d.a[d.i + (i)] = s.a[s.i + (i)];
        }
        return dst;
      }
      function _Z7memmovePvPKvm(dst, src, n) {
        let $t23, $t24;
        let d = (dst ? {a: dst.a, i: dst.i} : null);
        let s = (src ? {a: src.a, i: src.i} : null);
        if (((d ? d.i : 0) < (s ? s.i : 0))) {
           {
            for (let i = ((0) >>> 0); (i < n); ($t23 = i, i = (($t23 + 1) >>> 0), $t23)) {
              d.a[d.i + (i)] = s.a[s.i + (i)];
            }
          }
        }
        else {
           {
            while ((n > ((0) >>> 0))) {
               {
                ($t24 = n, n = (($t24 - 1) >>> 0), $t24);
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
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEl(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
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
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZSt4swapIiEvRiS_(__a, __b) {
        let $t25, $t26, $t27;
        let __tmp = {v: ($t25 = _ZSt4moveIiEOiS_(__a), $t25.a[$t25.i])};
        __a.a[__a.i] = ($t26 = _ZSt4moveIiEOiS_(__b), $t26.a[$t26.i]);
        __b.a[__b.i] = ($t27 = _ZSt4moveIiEOiS_({a: __tmp, i: "v"}), $t27.a[$t27.i]);
      }
      function _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        return (!(_ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y)));
      }
      function _ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        let $t28, $t29, $t30, $t31;
        return ($t30 = ($t28 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__x.a[__x.i]), $t28), $t31 = ($t29 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__y.a[__y.i]), $t29), ($t30 === $t31 || ($t30 && $t31 && $t30.a === $t31.a && $t30.i === $t31.i)));
      }
      function main() {
        let $t32, $t33, $t34, $t35, $t36, $t37, $t38;
        let v = new _ZSt6vectorIiSt9allocatorIiEE();
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [3], i: 0});
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [1], i: 0});
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [4], i: 0});
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [1], i: 0});
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [5], i: 0});
        _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v));
        let s = 0;
        for (let $b0 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [v._ZNSt6vectorIiSt9allocatorIiEE5beginEv()], i: 0}), $e0 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [v._ZNSt6vectorIiSt9allocatorIiEE3endEv()], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [$b0], i: 0}, {a: [$e0], i: 0}); $b0._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          let x = ($b0._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[($b0._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ($t32 = (($t33 = _ZSt11max_elementIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v)), $t33))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t32.a[$t32.i])), {a: [32, 0], i: 0}), ($t34 = (($t35 = _ZSt11min_elementIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v)), $t35))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t34.a[$t34.i])), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, _ZSt10accumulateIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiEiS6_S6_i(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), 0)), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEl({a: _ZSt4cout, i: "v"}, _ZSt5countIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiElS6_S6_RKi(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), {a: [1], i: 0})), {a: [32, 0], i: 0}), ($t36 = (($t37 = _ZSt11lower_boundIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiES6_S6_S6_RKi(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), {a: [4], i: 0}), $t37))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t36.a[$t36.i])), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, (_ZSt13binary_searchIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiEbS6_S6_RKi(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), {a: [3], i: 0}) ? ((1) | 0) : ((0) | 0))), {a: [_ZSt4endl], i: 0});
        _ZSt7reverseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v));
        let t = 0;
        for (let $b1 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [v._ZNSt6vectorIiSt9allocatorIiEE5beginEv()], i: 0}), $e1 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [v._ZNSt6vectorIiSt9allocatorIiEE3endEv()], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [$b1], i: 0}, {a: [$e1], i: 0}); $b1._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          let y = $b1._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv();
          t = (((((Math.imul(t, 10)) | 0)) + (y.a[y.i])) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, t), {a: [_ZSt4endl], i: 0});
        let w = new _ZSt6vectorIiSt9allocatorIiEE([9, 8, 7], {a: [new _ZSt9allocatorIiE()], i: 0});
        let u = 0;
        for (let $b2 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [w._ZNSt6vectorIiSt9allocatorIiEE5beginEv()], i: 0}), $e2 = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [w._ZNSt6vectorIiSt9allocatorIiEE3endEv()], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [$b2], i: 0}, {a: [$e2], i: 0}); $b2._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          let x = ($b2._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[($b2._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i];
          u = (((((u) + (x)) | 0)) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, u), {a: [32, 0], i: 0}), ((_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(w)) | 0)), {a: [_ZSt4endl], i: 0});
        let a = [7, 5, 9];
        _ZSt4sortIPiEvS_S_({a: a, i: 0}, ($t38 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (3)}), $t38 ? {a: $t38.a, i: $t38.i} : null));
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, a[0]), a[1]), a[2]), {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        if (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
           {
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvS6_S6_l(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), ((Math.imul(_ZSt4__lgl(_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0));
            _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
          }
        }
      }
      function _ZSt4sortIPiEvS_S_(__first, __last) {
        if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
           {
            _ZSt16__introsort_loopIPilEvS_S_l((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(_ZSt4__lgl(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0));
            _ZSt22__final_insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          }
        }
      }
      function _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t39, $t40, $t41, $t42, $t43, $t44;
        return ($t43 = (($t41 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t41) ? (($t41 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t41)).a[(($t41 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t41)).i] : null), $t44 = (($t42 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t42) ? (($t42 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t42)).a[(($t42 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t42)).i] : null), (!($t43 === $t44 || ($t43 && $t44 && $t43.a === $t44.a && $t43.i === $t44.i))));
      }
      function _ZSt11max_elementIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(__first, __last) {
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
        }
        let __result = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
        while (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv(), {a: [__last], i: 0})) {
          if (((__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            __result._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__first], i: 0});
          }
        }
        return __result;
      }
      function _ZSt11min_elementIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(__first, __last) {
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
        }
        let __result = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
        while (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv(), {a: [__last], i: 0})) {
          if (((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            __result._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__first], i: 0});
          }
        }
        return __result;
      }
      function _ZSt10accumulateIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiEiS6_S6_i(__first, __last, __init) {
        for (; _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0}); __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          __init = (((__init) + ((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) | 0);
        }
        return __init;
      }
      function _ZSt5countIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiElS6_S6_RKi(__first, __last, __value) {
        let __n = 0;
        for (; _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0}); __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          if (((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] === __value.a[__value.i])) {
            (__n = ((__n + 1) | 0));
          }
        }
        return __n;
      }
      function _ZSt11lower_boundIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiES6_S6_S6_RKi(__first, __last, __val) {
        let __len = _ZSt8distanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEElS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
        while ((__len > 0)) {
           {
            let __half = ((__len) >> (1));
            let __middle = {v: new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0})};
            _ZSt7advanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvRS6_l({a: __middle, i: "v"}, __half);
            if (((__middle.v._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__middle.v._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < __val.a[__val.i])) {
               {
                __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: __middle, i: "v"});
                __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
                __len = ((((((__len) - (__half)) | 0)) - (1)) | 0);
              }
            }
            else {
              __len = __half;
            }
          }
        }
        return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
      }
      function _ZSt13binary_searchIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiEbS6_S6_RKi(__first, __last, __val) {
        let __i = _ZSt11lower_boundIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiES6_S6_S6_RKi(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __val);
        return (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}) && (!((__val.a[__val.i] < (__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i]))));
      }
      function _ZSt7reverseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        __first = {v: __first};
        _ZSt9__reverseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_St26random_access_iterator_tag(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: __first, i: "v"}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), _ZSt19__iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEESt26random_access_iterator_tagRKS6_({a: __first, i: "v"}));
      }
      function _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t45, $t46, $t47, $t48, $t49, $t50;
        return ($t49 = (($t47 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t47) ? (($t47 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t47)).a[(($t47 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t47)).i] : null), $t50 = (($t48 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t48) ? (($t48 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t48)).a[(($t48 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t48)).i] : null), (($t49 ? $t49.i : 0) - ($t50 ? $t50.i : 0)));
      }
      function _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvS6_S6_l(__first, __last, __depth_limit) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvS6_S6_l(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__cut], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __depth_limit);
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__cut], i: 0});
          }
        }
      }
      function _ZSt16__introsort_loopIPilEvS_S_l(__first, __last, __depth_limit) {
        let $t51;
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = ($t51 = _ZSt27__unguarded_partition_pivotIPiES_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null)), $t51 ? {a: $t51.a, i: $t51.i} : null);
            _ZSt16__introsort_loopIPilEvS_S_l((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit);
            __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
          }
        }
      }
      function _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}));
            _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
          }
        }
        else {
          _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
        }
      }
      function _ZSt22__final_insertion_sortIPiEvS_S_(__first, __last) {
        let $t52, $t53;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), ($t52 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t52 ? {a: $t52.a, i: $t52.i} : null));
            _ZSt26__unguarded_insertion_sortIPiEvS_S_(($t53 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t53 ? {a: $t53.a, i: $t53.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
          }
        }
        else {
          _ZSt16__insertion_sortIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
        }
      }
      function _ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t54, $t55, $t56, $t57, $t58, $t59;
        return ($t58 = (($t56 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t56) ? (($t56 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t56)).a[(($t56 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t56)).i] : null), $t59 = (($t57 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t57) ? (($t57 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t57)).a[(($t57 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t57)).i] : null), ($t58 === $t59 || ($t58 && $t59 && $t58.a === $t59.a && $t58.i === $t59.i)));
      }
      function _ZSt8distanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEElS6_S6_(__first, __last) {
        __first = {v: __first};
        return _ZSt10__distanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEElS6_S6_St26random_access_iterator_tag(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: __first, i: "v"}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), _ZSt19__iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEESt26random_access_iterator_tagRKS6_({a: __first, i: "v"}));
      }
      function _ZSt7advanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvRS6_l(__i, __n) {
        let __d = __n;
        _ZSt9__advanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvRS6_lSt26random_access_iterator_tag(__i, __d, _ZSt19__iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEESt26random_access_iterator_tagRKS6_(__i));
      }
      function _ZSt19__iterator_categoryIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEESt26random_access_iterator_tagRKS6_($p0) {
        return new _ZSt26random_access_iterator_tag();
      }
      function _ZSt9__reverseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_St26random_access_iterator_tag(__first, __last, $p2) {
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return;
        }
        __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
        while (_ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
           {
            _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
            __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
          }
        }
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIPiS_St9allocatorIiEES_S_S_S_RS1_(__first, __last, __result, __alloc) {
        let $t60;
        return ($t60 = _ZSt22__uninitialized_copy_aISt13move_iteratorIPiES0_St9allocatorIiEES0_S1_S1_S0_RS3_(_ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t60 ? {a: $t60.a, i: $t60.i} : null);
      }
      function _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_(__first, __last, __alloc) {
        let $t61;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE7destroyIiEEvRS2_Pi(__alloc, ($t61 = _ZSt11__addressofIiEPiRi(__first), $t61 ? {a: $t61.a, i: $t61.i} : null));
        }
      }
      function _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(__first, __middle, __last) {
        _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
        _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}));
      }
      function _ZSt12partial_sortIPiEvS_S_S_(__first, __middle, __last) {
        _ZSt13__heap_selectIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null));
        _ZSt9sort_heapIPiEvS_S_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null));
      }
      function _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_S6_(__first, __last) {
        let __mid = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((Math.trunc((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
        _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__mid], i: 0}), __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmiERKl({a: [1], i: 0}));
        return _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiES6_S6_S6_RKi(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv());
      }
      function _ZSt27__unguarded_partition_pivotIPiES_S_S_(__first, __last) {
        let $t62, $t63, $t64, $t65;
        let __mid = ($t62 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t62 ? {a: $t62.a, i: $t62.i} : null);
        _ZSt19__move_median_firstIPiEvS_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t63 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t63 ? {a: $t63.a, i: $t63.i} : null));
        return ($t65 = _ZSt21__unguarded_partitionIPiiES_S_S_RKi(($t64 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t64 ? {a: $t64.a, i: $t64.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first), $t65 ? {a: $t65.a, i: $t65.i} : null);
      }
      function _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        let $t66, $t67, $t68;
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return;
        }
        for (let __i = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
           {
            if (((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
               {
                let __val = {v: ($t66 = _ZSt4moveIiEOiS_(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t66.a[$t66.i])};
                _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}));
                ($t67 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t67.a[$t67.i] = ($t68 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t68.a[$t68.i]));
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}));
            }
          }
        }
      }
      function _ZSt16__insertion_sortIPiEvS_S_(__first, __last) {
        let $t69, $t70, $t71, $t72;
        if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
          return;
        }
        for (let __i = ($t69 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t69 ? {a: $t69.a, i: $t69.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
           {
            if ((__i.a[__i.i] < __first.a[__first.i])) {
               {
                let __val = {v: ($t70 = _ZSt4moveIiEOiS_(__i), $t70.a[$t70.i])};
                _ZSt13move_backwardIPiS_ES_S_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t71 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t71 ? {a: $t71.a, i: $t71.i} : null));
                __first.a[__first.i] = ($t72 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t72.a[$t72.i]);
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIPiEvS_((__i ? {a: __i.a, i: __i.i} : null));
            }
          }
        }
      }
      function _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}));
        }
      }
      function _ZSt26__unguarded_insertion_sortIPiEvS_S_(__first, __last) {
        for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
          _ZSt25__unguarded_linear_insertIPiEvS_((__i ? {a: __i.a, i: __i.i} : null));
        }
      }
      function _ZSt10__distanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEElS6_S6_St26random_access_iterator_tag(__first, __last, $p2) {
        return _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0});
      }
      function _ZSt9__advanceIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElEvRS6_lSt26random_access_iterator_tag(__i, __n, $p2) {
        (__i.a[__i.i])._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEpLERKl({a: [__n], i: 0});
      }
      function _ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t73, $t74, $t75, $t76, $t77, $t78;
        return ($t77 = (($t75 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t75) ? (($t75 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t75)).a[(($t75 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t75)).i] : null), $t78 = (($t76 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t76) ? (($t76 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t76)).a[(($t76 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t76)).i] : null), (($t77 ? $t77.i : 0) < ($t78 ? $t78.i : 0)));
      }
      function _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(__a, __b) {
        _ZSt4swapIiEvRiS_(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), __b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv());
      }
      function _ZSt9iter_swapIPiS_EvS_S_(__a, __b) {
        _ZSt4swapIiEvRiS_(__a, __b);
      }
      function _ZSt3maxImERKmS_S_(__a, __b) {
        if ((__a.a[__a.i] < __b.a[__b.i])) {
          return __b;
        }
        return __a;
      }
      function _ZSt7declvalIOiES_v() {
        return _ZSt19__declval_protectorIOiE._ZNSt19__declval_protectorIOiE10__delegateEv();
      }
      function _ZSt7declvalIRiES_v() {
        return _ZSt19__declval_protectorIRiE._ZNSt19__declval_protectorIRiE10__delegateEv();
      }
      function _ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_(__i) {
        return new _ZSt13move_iteratorIPiE((__i ? {a: __i.a, i: __i.i} : null));
      }
      function _ZSt22__uninitialized_copy_aISt13move_iteratorIPiES0_St9allocatorIiEES0_S1_S1_S0_RS3_(__first, __last, __result, __alloc) {
        let $t79;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIPiEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi(__alloc, ($t79 = _ZSt11__addressofIiEPiRi(__cur), $t79 ? {a: $t79.a, i: $t79.i} : null), __first._ZNKSt13move_iteratorIPiEdeEv());
            }
            return (__cur ? {a: __cur.a, i: __cur.i} : null);
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
      }
      function _ZSt11__addressofIiEPiRi(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(__first, __middle, __last) {
        _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}));
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}); _ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          if (((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}));
          }
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
      function _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
           {
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
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
      function _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(__a, __b, __c) {
        if (((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            if (((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
            else {
              if (((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
                _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
              }
            }
          }
        }
        else {
          if (((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            return;
          }
          else {
            if (((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
            }
            else {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
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
      function _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiES6_S6_S6_RKi(__first, __last, __pivot) {
        while (true) {
           {
            while (((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i] < __pivot.a[__pivot.i])) {
              __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
            }
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            while ((__pivot.a[__pivot.i] < (__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            }
            if ((!(_ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})))) {
              return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0});
            }
            _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}));
            __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
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
      function _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        return _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(_ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0})), _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0})), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__result], i: 0}));
      }
      function _ZSt13move_backwardIPiS_ES_S_S_S_(__first, __last, __result) {
        let $t80, $t81, $t82;
        return ($t82 = _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(($t80 = _ZSt12__miter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t80 ? {a: $t80.a, i: $t80.i} : null), ($t81 = _ZSt12__miter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t81 ? {a: $t81.a, i: $t81.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t82 ? {a: $t82.a, i: $t82.i} : null);
      }
      function _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_(__last) {
        let $t83, $t84, $t85, $t86, $t87;
        let __val = {v: ($t83 = _ZSt4moveIiEOiS_(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t83.a[$t83.i])};
        let __next = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0});
        __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
        while ((__val.v < (__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            ($t84 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t84.a[$t84.i] = ($t85 = _ZSt4moveIiEOiS_(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t85.a[$t85.i]));
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__next], i: 0});
            __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
          }
        }
        ($t86 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t86.a[$t86.i] = ($t87 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t87.a[$t87.i]));
      }
      function _ZSt25__unguarded_linear_insertIPiEvS_(__last) {
        let $t88, $t89, $t90;
        let __val = {v: ($t88 = _ZSt4moveIiEOiS_(__last), $t88.a[$t88.i])};
        let __next = (__last ? {a: __last.a, i: __last.i} : null);
        --__next.i;
        while ((__val.v < __next.a[__next.i])) {
           {
            __last.a[__last.i] = ($t89 = _ZSt4moveIiEOiS_(__next), $t89.a[$t89.i]);
            __last = (__next ? {a: __next.a, i: __next.i} : null);
            --__next.i;
          }
        }
        __last.a[__last.i] = ($t90 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t90.a[$t90.i]);
      }
      function _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_(__first, __last) {
        let $t91, $t92, $t93, $t94;
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
          return;
        }
        let __len = _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0});
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t91 = _ZSt4moveIiEOiS_((($t92 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t92))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t91.a[$t91.i])};
            _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliEvS6_lli(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __parent, __len, ($t93 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t93.a[$t93.i]));
            if ((__parent === 0)) {
              return;
            }
            ($t94 = __parent, __parent = (($t94 - 1) | 0), $t94);
          }
        }
      }
      function _ZSt9make_heapIPiEvS_S_(__first, __last) {
        let $t95, $t96, $t97;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
          return;
        }
        let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t95 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t95.a[$t95.i])};
            _ZSt13__adjust_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t96 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t96.a[$t96.i]));
            if ((__parent === 0)) {
              return;
            }
            ($t97 = __parent, __parent = (($t97 - 1) | 0), $t97);
          }
        }
      }
      function _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEEvS6_S6_S6_(__first, __last, __result) {
        let $t98, $t99, $t100, $t101;
        let __value = {v: ($t98 = _ZSt4moveIiEOiS_(__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t98.a[$t98.i])};
        ($t99 = __result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t99.a[$t99.i] = ($t100 = _ZSt4moveIiEOiS_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t100.a[$t100.i]));
        _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliEvS6_lli(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), 0, _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}), ($t101 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t101.a[$t101.i]));
      }
      function _ZSt10__pop_heapIPiEvS_S_S_(__first, __last, __result) {
        let $t102, $t103, $t104;
        let __value = {v: ($t102 = _ZSt4moveIiEOiS_(__result), $t102.a[$t102.i])};
        __result.a[__result.i] = ($t103 = _ZSt4moveIiEOiS_(__first), $t103.a[$t103.i]);
        _ZSt13__adjust_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t104 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t104.a[$t104.i]));
      }
      function _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(__it) {
        return _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__it], i: 0}));
      }
      function _ZSt12__miter_baseIPiES_S_(__it) {
        let $t105;
        return ($t105 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t105 ? {a: $t105.a, i: $t105.i} : null);
      }
      function _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        let $t106, $t107, $t108;
        return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [_ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(($t106 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0})), $t106 ? {a: $t106.a, i: $t106.i} : null), ($t107 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0})), $t107 ? {a: $t107.a, i: $t107.i} : null), ($t108 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__result], i: 0})), $t108 ? {a: $t108.a, i: $t108.i} : null))], i: 0});
      }
      function _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t109, $t110, $t111, $t112;
        return ($t112 = _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(($t109 = _ZSt12__niter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t109 ? {a: $t109.a, i: $t109.i} : null), ($t110 = _ZSt12__niter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t110 ? {a: $t110.a, i: $t110.i} : null), ($t111 = _ZSt12__niter_baseIPiES_S_((__result ? {a: __result.a, i: __result.i} : null)), $t111 ? {a: $t111.a, i: $t111.i} : null)), $t112 ? {a: $t112.a, i: $t112.i} : null);
      }
      function _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliEvS6_lli(__first, __holeIndex, __len, __value) {
        let $t113, $t114, $t115, $t116, $t117, $t118, $t119, $t120, $t121, $t122, $t123, $t124, $t125, $t126;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if ((($t113 = (($t114 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t114))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t113.a[$t113.i]) < ($t115 = (($t116 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t116))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t115.a[$t115.i]))) {
              ($t117 = __secondChild, __secondChild = (($t117 - 1) | 0), $t117);
            }
            ($t118 = (($t121 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t121))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t118.a[$t118.i] = ($t119 = _ZSt4moveIiEOiS_((($t120 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t120))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t119.a[$t119.i]));
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            ($t122 = (($t125 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t125))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t122.a[$t122.i] = ($t123 = _ZSt4moveIiEOiS_((($t124 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t124))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t123.a[$t123.i]));
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliEvS6_lli(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __holeIndex, __topIndex, ($t126 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t126.a[$t126.i]));
      }
      function _ZSt13__adjust_heapIPiliEvS_lli(__first, __holeIndex, __len, __value) {
        let $t127, $t128, $t129, $t130, $t131, $t132, $t133, $t134;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if ((($t127 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t127.a[$t127.i]) < ($t128 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t128.a[$t128.i]))) {
              ($t129 = __secondChild, __secondChild = (($t129 - 1) | 0), $t129);
            }
            (($t130 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t130)).a[(($t130 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t130)).i] = ($t131 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t131.a[$t131.i]);
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            (($t132 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t132)).a[(($t132 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t132)).i] = ($t133 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t133.a[$t133.i]);
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIPiliEvS_lli((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t134 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t134.a[$t134.i]));
      }
      function _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(__it) {
        let $t135;
        return ($t135 = _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__it], i: 0})), $t135 ? {a: $t135.a, i: $t135.i} : null);
      }
      function _ZSt12__niter_baseIPiES_S_(__it) {
        let $t136;
        return ($t136 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t136 ? {a: $t136.a, i: $t136.i} : null);
      }
      function _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t137;
        let __simple = (((1 && 1) && 1) && 1);
        return ($t137 = _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE._ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIiEEPiPKiS3_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t137 ? {a: $t137.a, i: $t137.i} : null);
      }
      function _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliEvS6_lli(__first, __holeIndex, __topIndex, __value) {
        let $t138, $t139, $t140, $t141, $t142, $t143, $t144, $t145, $t146;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && (($t138 = (($t139 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t139))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t138.a[$t138.i]) < __value.v))) {
           {
            ($t140 = (($t143 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t143))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t140.a[$t140.i] = ($t141 = _ZSt4moveIiEOiS_((($t142 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t142))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t141.a[$t141.i]));
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        ($t144 = (($t146 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t146))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t144.a[$t144.i] = ($t145 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t145.a[$t145.i]));
      }
      function _ZSt11__push_heapIPiliEvS_lli(__first, __holeIndex, __topIndex, __value) {
        let $t147, $t148, $t149, $t150, $t151;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && (($t147 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t147.a[$t147.i]) < __value.v))) {
           {
            (($t148 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t148)).a[(($t148 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t148)).i] = ($t149 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t149.a[$t149.i]);
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        (($t150 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t150)).a[(($t150 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t150)).i] = ($t151 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t151.a[$t151.i]);
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
      let _ZSt3cin = new _ZSt13basic_istreamIcSt11char_traitsIcEE(0);
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
