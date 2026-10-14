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
        _flags;
        _IO_read_ptr;
        _IO_read_end;
        _IO_read_base;
        _IO_write_base;
        _IO_write_ptr;
        _IO_write_end;
        _IO_buf_base;
        _IO_buf_end;
        _IO_save_base;
        _IO_backup_base;
        _IO_save_end;
        _markers;
        _chain;
        _fileno;
        _flags2;
        _old_offset;
        _cur_column;
        _vtable_offset;
        _shortbuf;
        _lock;
        _offset;
        _codecvt;
        _wide_data;
        _freeres_list;
        _freeres_buf;
        __pad5;
        _mode;
        _unused2;
        constructor(...$a) {
          this.__init__Z8_IO_FILE(...$a);
        }
        __init__Z8_IO_FILE(...$a) {
          this._flags = 0;
          this._IO_read_ptr = null;
          this._IO_read_end = null;
          this._IO_read_base = null;
          this._IO_write_base = null;
          this._IO_write_ptr = null;
          this._IO_write_end = null;
          this._IO_buf_base = null;
          this._IO_buf_end = null;
          this._IO_save_base = null;
          this._IO_backup_base = null;
          this._IO_save_end = null;
          this._markers = null;
          this._chain = null;
          this._fileno = 0;
          this._flags2 = 0;
          this._old_offset = 0n;
          this._cur_column = 0;
          this._vtable_offset = 0;
          this._shortbuf = new Array(1).fill(0);
          this._lock = null;
          this._offset = 0n;
          this._codecvt = null;
          this._wide_data = null;
          this._freeres_list = null;
          this._freeres_buf = null;
          this.__pad5 = 0;
          this._mode = 0;
          this._unused2 = new Array(40).fill(0);
        }
        __dtor() {
        }
      }
      class _ZSt14__sfinae_types {
        __init__ZSt14__sfinae_types(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt14__sfinae_types11$24class_55E {
        __arr;
        constructor(...$a) {
          this.__init__ZNSt14__sfinae_types11$24class_55E(...$a);
        }
        __init__ZNSt14__sfinae_types11$24class_55E(...$a) {
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
          super();
          this.__init__ZSt26random_access_iterator_tag(...$a);
        }
        __init__ZSt26random_access_iterator_tag(...$a) {
        }
        __dtor() {
          _ZSt26bidirectional_iterator_tag.prototype.__dtor.call(this);
        }
      }
      class _Z12$24class_157 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_157(...$a);
        }
        __init__Z12$24class_157(...$a) {
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
      class _Z12$24class_164 {
        done;
        started;
        constructor(...$a) {
          this.__init__Z12$24class_164(...$a);
        }
        __init__Z12$24class_164(...$a) {
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
      class _ZNSt8__detail15_List_node_baseE {
        _M_next;
        _M_prev;
        constructor(...$a) {
          this.__init__ZNSt8__detail15_List_node_baseE(...$a);
        }
        __init__ZNSt8__detail15_List_node_baseE(...$a) {
          this._M_next = null;
          this._M_prev = null;
        }
        __dtor() {
        }
        static _ZNSt8__detail15_List_node_base4swapERS0_S1_(__x, __y) {
          let $t0, $t1, $t2, $t3, $t4, $t5;
          if ((!(((__x.a[__x.i])._M_next) === __x || (((__x.a[__x.i])._M_next) && __x && ((__x.a[__x.i])._M_next).a === __x.a && ((__x.a[__x.i])._M_next).i === __x.i)))) {
             {
              if ((!(((__y.a[__y.i])._M_next) === __y || (((__y.a[__y.i])._M_next) && __y && ((__y.a[__y.i])._M_next).a === __y.a && ((__y.a[__y.i])._M_next).i === __y.i)))) {
                 {
                  _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_({a: __x.a[__x.i], i: "_M_next"}, {a: __y.a[__y.i], i: "_M_next"});
                  _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_({a: __x.a[__x.i], i: "_M_prev"}, {a: __y.a[__y.i], i: "_M_prev"});
                  (((__x.a[__x.i])._M_next).a[((__x.a[__x.i])._M_next).i])._M_prev = ($t0 = (((__x.a[__x.i])._M_prev).a[((__x.a[__x.i])._M_prev).i])._M_next = (__x ? {a: __x.a, i: __x.i} : null), $t0 ? {a: $t0.a, i: $t0.i} : null);
                  (((__y.a[__y.i])._M_next).a[((__y.a[__y.i])._M_next).i])._M_prev = ($t1 = (((__y.a[__y.i])._M_prev).a[((__y.a[__y.i])._M_prev).i])._M_next = (__y ? {a: __y.a, i: __y.i} : null), $t1 ? {a: $t1.a, i: $t1.i} : null);
                }
              }
              else {
                 {
                  (__y.a[__y.i])._M_next = (((__x.a[__x.i])._M_next) ? {a: ((__x.a[__x.i])._M_next).a, i: ((__x.a[__x.i])._M_next).i} : null);
                  (__y.a[__y.i])._M_prev = (((__x.a[__x.i])._M_prev) ? {a: ((__x.a[__x.i])._M_prev).a, i: ((__x.a[__x.i])._M_prev).i} : null);
                  (((__y.a[__y.i])._M_next).a[((__y.a[__y.i])._M_next).i])._M_prev = ($t2 = (((__y.a[__y.i])._M_prev).a[((__y.a[__y.i])._M_prev).i])._M_next = (__y ? {a: __y.a, i: __y.i} : null), $t2 ? {a: $t2.a, i: $t2.i} : null);
                  (__x.a[__x.i])._M_next = ($t3 = (__x.a[__x.i])._M_prev = (__x ? {a: __x.a, i: __x.i} : null), $t3 ? {a: $t3.a, i: $t3.i} : null);
                }
              }
            }
          }
          else {
            if ((!(((__y.a[__y.i])._M_next) === __y || (((__y.a[__y.i])._M_next) && __y && ((__y.a[__y.i])._M_next).a === __y.a && ((__y.a[__y.i])._M_next).i === __y.i)))) {
               {
                (__x.a[__x.i])._M_next = (((__y.a[__y.i])._M_next) ? {a: ((__y.a[__y.i])._M_next).a, i: ((__y.a[__y.i])._M_next).i} : null);
                (__x.a[__x.i])._M_prev = (((__y.a[__y.i])._M_prev) ? {a: ((__y.a[__y.i])._M_prev).a, i: ((__y.a[__y.i])._M_prev).i} : null);
                (((__x.a[__x.i])._M_next).a[((__x.a[__x.i])._M_next).i])._M_prev = ($t4 = (((__x.a[__x.i])._M_prev).a[((__x.a[__x.i])._M_prev).i])._M_next = (__x ? {a: __x.a, i: __x.i} : null), $t4 ? {a: $t4.a, i: $t4.i} : null);
                (__y.a[__y.i])._M_next = ($t5 = (__y.a[__y.i])._M_prev = (__y ? {a: __y.a, i: __y.i} : null), $t5 ? {a: $t5.a, i: $t5.i} : null);
              }
            }
          }
        }
        _ZNSt8__detail15_List_node_base11_M_transferEPS0_S1_(__first, __last) {
          let $t6;
          if (($t6 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t6 === __last || ($t6 && __last && $t6.a === __last.a && $t6.i === __last.i))))) {
             {
              (((__last.a[__last.i])._M_prev).a[((__last.a[__last.i])._M_prev).i])._M_next = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
              (((__first.a[__first.i])._M_prev).a[((__first.a[__first.i])._M_prev).i])._M_next = (__last ? {a: __last.a, i: __last.i} : null);
              (this._M_prev.a[this._M_prev.i])._M_next = (__first ? {a: __first.a, i: __first.i} : null);
              let __tmp = (this._M_prev ? {a: this._M_prev.a, i: this._M_prev.i} : null);
              this._M_prev = (((__last.a[__last.i])._M_prev) ? {a: ((__last.a[__last.i])._M_prev).a, i: ((__last.a[__last.i])._M_prev).i} : null);
              (__last.a[__last.i])._M_prev = (((__first.a[__first.i])._M_prev) ? {a: ((__first.a[__first.i])._M_prev).a, i: ((__first.a[__first.i])._M_prev).i} : null);
              (__first.a[__first.i])._M_prev = (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
            }
          }
        }
        _ZNSt8__detail15_List_node_base10_M_reverseEv() {
          let $t7;
          let __tmp = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
          do {
             {
              _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_({a: __tmp.a[__tmp.i], i: "_M_next"}, {a: __tmp.a[__tmp.i], i: "_M_prev"});
              __tmp = (((__tmp.a[__tmp.i])._M_prev) ? {a: ((__tmp.a[__tmp.i])._M_prev).a, i: ((__tmp.a[__tmp.i])._M_prev).i} : null);
            }
          } while (($t7 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!(__tmp === $t7 || (__tmp && $t7 && __tmp.a === $t7.a && __tmp.i === $t7.i)))));
        }
        _ZNSt8__detail15_List_node_base7_M_hookEPS0_(__position) {
          this._M_next = (__position ? {a: __position.a, i: __position.i} : null);
          this._M_prev = (((__position.a[__position.i])._M_prev) ? {a: ((__position.a[__position.i])._M_prev).a, i: ((__position.a[__position.i])._M_prev).i} : null);
          (((__position.a[__position.i])._M_prev).a[((__position.a[__position.i])._M_prev).i])._M_next = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
          (__position.a[__position.i])._M_prev = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
        }
        _ZNSt8__detail15_List_node_base9_M_unhookEv() {
          let __next_node = (this._M_next ? {a: this._M_next.a, i: this._M_next.i} : null);
          let __prev_node = (this._M_prev ? {a: this._M_prev.a, i: this._M_prev.i} : null);
          (__prev_node.a[__prev_node.i])._M_next = (__next_node ? {a: __next_node.a, i: __next_node.i} : null);
          (__next_node.a[__next_node.i])._M_prev = (__prev_node ? {a: __prev_node.a, i: __prev_node.i} : null);
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
          (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__to), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__lo), ((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0)));
          return (__hi ? {a: __hi.a, i: __hi.i} : null);
        }
        _ZNKSt5ctypeIcE9do_narrowEcc(__c, __dfault) {
          return __c;
        }
        _ZNKSt5ctypeIcE9do_narrowEPKcS1_cPc(__lo, __hi, __dfault, __to) {
          (($d, $s, $n) => { for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $s.a[$s.i + $k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__to), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__lo), ((__hi ? __hi.i : 0) - (__lo ? __lo.i : 0)));
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
      class _ZSt10_List_nodeIiE extends _ZNSt8__detail15_List_node_baseE {
        _M_data$_ZSt10_List_nodeIiE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt10_List_nodeIiE(...$a);
        }
        __init__ZSt10_List_nodeIiE(...$a) {
          let $t8;
          this._M_data$_ZSt10_List_nodeIiE = ($t8 = _ZSt7forwardIiEOiS_($a[0]), $t8.a[$t8.i]);
        }
        __dtor() {
          _ZNSt8__detail15_List_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt9allocatorIiE6rebindISt10_List_nodeIiEEE {
        __init__ZNSt9allocatorIiE6rebindISt10_List_nodeIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t9;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t9 = _Znwm(((Math.imul(__n, 12)) >>> 0)), $t9 ? {a: $t9.a, i: $t9.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (12))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_(__p) {
          _ZSt10_List_nodeIiE.prototype.__dtor.call(__p.a[__p.i]);
        }
        _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi(__p, __args_0) {
          (__p.a[__p.i] = new _ZSt10_List_nodeIiE(_ZSt7forwardIiEOiS_(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
      }
      class _ZSt9allocatorISt10_List_nodeIiEE extends _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt10_List_nodeIiEE(...$a);
        }
        __init__ZSt9allocatorISt10_List_nodeIiEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE extends _ZSt9allocatorISt10_List_nodeIiEE {
        _M_node;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE(...$a);
        }
        __init__ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE(...$a) {
          this._M_node = new _ZNSt8__detail15_List_node_baseE();
          this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
        }
        __dtor() {
          _ZSt9allocatorISt10_List_nodeIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10_List_baseIiSt9allocatorIiEE {
        _M_impl$_ZSt10_List_baseIiSt9allocatorIiEE;
        constructor(...$a) {
          this.__init__ZSt10_List_baseIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt10_List_baseIiSt9allocatorIiEE(...$a) {
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE = new _ZNSt10_List_baseIiSt9allocatorIiEE10_List_implE();
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE";
          this._ZNSt10_List_baseIiSt9allocatorIiEE7_M_initEv();
        }
        __dtor() {
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv() {
          let $t10;
          return ($t10 = _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, ((1) >>> 0), {a: [0], i: 0}), $t10 ? {a: $t10.a, i: $t10.i} : null);
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE(__p) {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE"};
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE8_M_clearEv() {
          let $t11;
          let __cur = (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next ? {a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a, i: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i} : null);
          while ((!(__cur === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (__cur && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && __cur.a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && __cur.i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i)))) {
             {
              let __tmp = (__cur ? {a: __cur.a, i: __cur.i} : null);
              __cur = (((__cur.a[__cur.i])._M_next) ? {a: ((__cur.a[__cur.i])._M_next).a, i: ((__cur.a[__cur.i])._M_next).i} : null);
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t11 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t11.a[$t11.i]), (__tmp ? {a: __tmp.a, i: __tmp.i} : null));
              this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
            }
          }
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE7_M_initEv() {
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next = (({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null);
          this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_prev = (({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null);
        }
      }
      class _ZSt4listIiSt9allocatorIiEE extends _ZSt10_List_baseIiSt9allocatorIiEE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt4listIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt4listIiSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt10_List_baseIiSt9allocatorIiEE.prototype.__dtor.call(this);
        }
        _ZNSt4listIiSt9allocatorIiEE5beginEv() {
          return new _ZSt14_List_iteratorIiE((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next ? {a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a, i: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE3endEv() {
          return new _ZSt14_List_iteratorIiE((({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) ? {a: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a, i: ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i} : null));
        }
        _ZNKSt4listIiSt9allocatorIiEE5emptyEv() {
          return (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i));
        }
        _ZNKSt4listIiSt9allocatorIiEE4sizeEv() {
          return ((_ZSt8distanceISt14_List_iteratorIiEElS0_S0_(this._ZNSt4listIiSt9allocatorIiEE5beginEv(), this._ZNSt4listIiSt9allocatorIiEE3endEv())) >>> 0);
        }
        _ZNSt4listIiSt9allocatorIiEE5frontEv() {
          let $t12;
          return (($t12 = this._ZNSt4listIiSt9allocatorIiEE5beginEv(), $t12))._ZNKSt14_List_iteratorIiEdeEv();
        }
        _ZNSt4listIiSt9allocatorIiEE4backEv() {
          let __tmp = this._ZNSt4listIiSt9allocatorIiEE3endEv();
          __tmp._ZNSt14_List_iteratorIiEmmEv();
          return __tmp._ZNKSt14_List_iteratorIiEdeEv();
        }
        _ZNSt4listIiSt9allocatorIiEE10push_frontERKi(__x) {
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi.call(this, this._ZNSt4listIiSt9allocatorIiEE5beginEv(), __x);
        }
        _ZNSt4listIiSt9allocatorIiEE9pop_frontEv() {
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE8_M_eraseESt14_List_iteratorIiE.call(this, this._ZNSt4listIiSt9allocatorIiEE5beginEv());
        }
        _ZNSt4listIiSt9allocatorIiEE9push_backERKi(__x) {
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi.call(this, this._ZNSt4listIiSt9allocatorIiEE3endEv(), __x);
        }
        _ZNSt4listIiSt9allocatorIiEE4swapERS2_(__x) {
          _ZNSt8__detail15_List_node_baseE._ZNSt8__detail15_List_node_base4swapERS0_S1_({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}, {a: (__x.a[__x.i])._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"});
          _ZSt12__alloc_swapISt9allocatorISt10_List_nodeIiEELi1EE._ZNSt12__alloc_swapISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERS3_S5_(this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv.call(__x.a[__x.i]));
        }
        _ZNSt4listIiSt9allocatorIiEE5clearEv() {
          _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE8_M_clearEv.call(this);
          _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE7_M_initEv.call(this);
        }
        _ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiEOS2_(__position, __x) {
          if ((!(_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE5emptyEv.call(__x.a[__x.i])))) {
             {
              this._ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x);
              _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_.call(this, new _ZSt14_List_iteratorIiE({a: [__position], i: 0}), _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5beginEv.call(__x.a[__x.i]), _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE3endEv.call(__x.a[__x.i]));
            }
          }
        }
        _ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiERS2_(__position, __x) {
          this._ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiEOS2_(new _ZSt14_List_iteratorIiE({a: [__position], i: 0}), _ZSt4moveISt4listIiSt9allocatorIiEEEOS2_S3_(__x));
        }
        _ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiEOS2_S4_(__position, __x, __i) {
          let $t13;
          let __j = new _ZSt14_List_iteratorIiE({a: [__i], i: 0});
          __j._ZNSt14_List_iteratorIiEppEv();
          if ((__position._ZNKSt14_List_iteratorIiEeqERKS0_({a: [__i], i: 0}) || __position._ZNKSt14_List_iteratorIiEeqERKS0_({a: [__j], i: 0}))) {
            return;
          }
          if (($t13 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t13 === __x || ($t13 && __x && $t13.a === __x.a && $t13.i === __x.i))))) {
            this._ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x);
          }
          _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_.call(this, new _ZSt14_List_iteratorIiE({a: [__position], i: 0}), new _ZSt14_List_iteratorIiE({a: [__i], i: 0}), new _ZSt14_List_iteratorIiE({a: [__j], i: 0}));
        }
        _ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiERS2_S4_(__position, __x, __i) {
          this._ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiEOS2_S4_(new _ZSt14_List_iteratorIiE({a: [__position], i: 0}), _ZSt4moveISt4listIiSt9allocatorIiEEEOS2_S3_(__x), new _ZSt14_List_iteratorIiE({a: [__i], i: 0}));
        }
        _ZNSt4listIiSt9allocatorIiEE6removeERKi(__value) {
          let $t14, $t15, $t16, $t17;
          let __first = this._ZNSt4listIiSt9allocatorIiEE5beginEv();
          let __last = this._ZNSt4listIiSt9allocatorIiEE3endEv();
          let __extra = new _ZSt14_List_iteratorIiE({a: [__last], i: 0});
          while (__first._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last], i: 0})) {
             {
              let __next = new _ZSt14_List_iteratorIiE({a: [__first], i: 0});
              __next._ZNSt14_List_iteratorIiEppEv();
              if (((__first._ZNKSt14_List_iteratorIiEdeEv()).a[(__first._ZNKSt14_List_iteratorIiEdeEv()).i] === __value.a[__value.i])) {
                 {
                  if (($t16 = ($t14 = _ZSt11__addressofIiEPiRi(__first._ZNKSt14_List_iteratorIiEdeEv()), $t14), $t17 = ($t15 = _ZSt11__addressofIiEPiRi(__value), $t15), (!($t16 === $t17 || ($t16 && $t17 && $t16.a === $t17.a && $t16.i === $t17.i))))) {
                    this._ZNSt4listIiSt9allocatorIiEE8_M_eraseESt14_List_iteratorIiE(new _ZSt14_List_iteratorIiE({a: [__first], i: 0}));
                  }
                  else {
                    __extra._ZNSt14_List_iteratorIiEaSERS0_({a: [__first], i: 0});
                  }
                }
              }
              __first._ZNSt14_List_iteratorIiEaSERS0_({a: [__next], i: 0});
            }
          }
          if (__extra._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last], i: 0})) {
            this._ZNSt4listIiSt9allocatorIiEE8_M_eraseESt14_List_iteratorIiE(new _ZSt14_List_iteratorIiE({a: [__extra], i: 0}));
          }
        }
        _ZNSt4listIiSt9allocatorIiEE5mergeEOS2_(__x) {
          let $t18, $t19;
          if (($t18 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t18 === __x || ($t18 && __x && $t18.a === __x.a && $t18.i === __x.i))))) {
             {
              this._ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x);
              let __first1 = this._ZNSt4listIiSt9allocatorIiEE5beginEv();
              let __last1 = this._ZNSt4listIiSt9allocatorIiEE3endEv();
              let __first2 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5beginEv.call(__x.a[__x.i]);
              let __last2 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE3endEv.call(__x.a[__x.i]);
              while ((__first1._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last1], i: 0}) && __first2._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last2], i: 0}))) {
                if (((__first2._ZNKSt14_List_iteratorIiEdeEv()).a[(__first2._ZNKSt14_List_iteratorIiEdeEv()).i] < (__first1._ZNKSt14_List_iteratorIiEdeEv()).a[(__first1._ZNKSt14_List_iteratorIiEdeEv()).i])) {
                   {
                    let __next = new _ZSt14_List_iteratorIiE({a: [__first2], i: 0});
                    this._ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_(new _ZSt14_List_iteratorIiE({a: [__first1], i: 0}), new _ZSt14_List_iteratorIiE({a: [__first2], i: 0}), ($t19 = __next._ZNSt14_List_iteratorIiEppEv(), $t19.a[$t19.i]));
                    __first2._ZNSt14_List_iteratorIiEaSERS0_({a: [__next], i: 0});
                  }
                }
                else {
                  __first1._ZNSt14_List_iteratorIiEppEv();
                }
              }
              if (__first2._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last2], i: 0})) {
                this._ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_(new _ZSt14_List_iteratorIiE({a: [__last1], i: 0}), new _ZSt14_List_iteratorIiE({a: [__first2], i: 0}), new _ZSt14_List_iteratorIiE({a: [__last2], i: 0}));
              }
            }
          }
        }
        _ZNSt4listIiSt9allocatorIiEE5mergeERS2_(__x) {
          this._ZNSt4listIiSt9allocatorIiEE5mergeEOS2_(_ZSt4moveISt4listIiSt9allocatorIiEEEOS2_S3_(__x));
        }
        _ZNSt4listIiSt9allocatorIiEE7reverseEv() {
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base10_M_reverseEv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node);
        }
        _ZNSt4listIiSt9allocatorIiEE4sortEv() {
          if (((!(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i))) && (!(((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a[this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i])._M_next) === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a[this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i])._M_next) && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && ((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a[this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i])._M_next).a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && ((this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a[this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i])._M_next).i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i))))) {
             {
              let __carry = {v: new _ZSt4listIiSt9allocatorIiEE()};
              let __tmp = {v: Array.from({length: 64}, () => new _ZSt4listIiSt9allocatorIiEE())};
              let __fill = (({a: __tmp.v, i: (0)}) ? {a: ({a: __tmp.v, i: (0)}).a, i: ({a: __tmp.v, i: (0)}).i} : null);
              let __counter = null;
              do {
                 {
                  _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiERS2_S4_.call(__carry.v, _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5beginEv.call(__carry.v), {a: [this], i: 0}, this._ZNSt4listIiSt9allocatorIiEE5beginEv());
                  __counter = (({a: __tmp.v, i: (0)}) ? {a: ({a: __tmp.v, i: (0)}).a, i: ({a: __tmp.v, i: (0)}).i} : null);
                  for (; ((!(__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))) && (!(_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE5emptyEv.call(__counter.a[__counter.i])))); ++__counter.i) {
                     {
                      _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5mergeERS2_.call(__counter.a[__counter.i], {a: __carry, i: "v"});
                      _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4swapERS2_.call(__carry.v, __counter);
                    }
                  }
                  _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4swapERS2_.call(__carry.v, __counter);
                  if ((__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))) {
                    ++__fill.i;
                  }
                }
              } while ((!(this._ZNKSt4listIiSt9allocatorIiEE5emptyEv())));
              __counter = (({a: __tmp.v, i: (1)}) ? {a: ({a: __tmp.v, i: (1)}).a, i: ({a: __tmp.v, i: (1)}).i} : null);
              for (; (!(__counter === __fill || (__counter && __fill && __counter.a === __fill.a && __counter.i === __fill.i))); ++__counter.i) {
                _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5mergeERS2_.call(__counter.a[__counter.i], ({a: (__counter ? __counter.a : null), i: (__counter ? __counter.i : 0) - (1)}));
              }
              this._ZNSt4listIiSt9allocatorIiEE4swapERS2_(({a: (__fill ? __fill.a : null), i: (__fill ? __fill.i : 0) - (1)}));
            }
          }
        }
        _ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_(__position, __first, __last) {
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base11_M_transferEPS0_S1_.call(__position._M_node$_ZSt14_List_iteratorIiE.a[__position._M_node$_ZSt14_List_iteratorIiE.i], (__first._M_node$_ZSt14_List_iteratorIiE ? {a: __first._M_node$_ZSt14_List_iteratorIiE.a, i: __first._M_node$_ZSt14_List_iteratorIiE.i} : null), (__last._M_node$_ZSt14_List_iteratorIiE ? {a: __last._M_node$_ZSt14_List_iteratorIiE.a, i: __last._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE8_M_eraseESt14_List_iteratorIiE(__position) {
          let $t20;
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base9_M_unhookEv.call(__position._M_node$_ZSt14_List_iteratorIiE.a[__position._M_node$_ZSt14_List_iteratorIiE.i]);
          let __n = (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null);
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t20 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t20.a[$t20.i]), (__n ? {a: __n.a, i: __n.i} : null));
          this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__n ? {a: __n.a, i: __n.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x) {
          if (_ZSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE._ZNSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERKS3_S5_(this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv.call(__x.a[__x.i]))) {
            _ZSt21__throw_runtime_errorPKc({a: [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], i: 0});
          }
        }
        _ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi(__position, __args_0) {
          let $t21;
          let __tmp = ($t21 = this._ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(_ZSt7forwardIiEOiS_(__args_0)), $t21 ? {a: $t21.a, i: $t21.i} : null);
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base7_M_hookEPS0_.call(__tmp.a[__tmp.i], (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(__args_0) {
          let $t22, $t23;
          let __p = ($t22 = _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv.call(this), $t22 ? {a: $t22.a, i: $t22.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi.call(($t23 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t23.a[$t23.i]), (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
            }
          }
          if (false) {
             {
              this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__p ? {a: __p.a, i: __p.i} : null));
            }
          }
          return (__p ? {a: __p.a, i: __p.i} : null);
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
      }
      class _ZSt14_List_iteratorIiE {
        _M_node$_ZSt14_List_iteratorIiE;
        constructor(...$a) {
          this.__init__ZSt14_List_iteratorIiE(...$a);
        }
        __init__ZSt14_List_iteratorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt14_List_iteratorIiE)) {
            this._M_node$_ZSt14_List_iteratorIiE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt14_List_iteratorIiE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt14_List_iteratorIiE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt14_List_iteratorIiEdeEv() {
          return {a: this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i], i: "_M_data$_ZSt10_List_nodeIiE"};
        }
        _ZNSt14_List_iteratorIiEppEv() {
          this._M_node$_ZSt14_List_iteratorIiE = (((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_next) ? {a: ((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_next).a, i: ((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_next).i} : null);
          return {a: [this], i: 0};
        }
        _ZNSt14_List_iteratorIiEmmEv() {
          this._M_node$_ZSt14_List_iteratorIiE = (((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_prev) ? {a: ((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_prev).a, i: ((this._M_node$_ZSt14_List_iteratorIiE.a[this._M_node$_ZSt14_List_iteratorIiE.i])._M_prev).i} : null);
          return {a: [this], i: 0};
        }
        _ZNKSt14_List_iteratorIiEeqERKS0_(__x) {
          return (this._M_node$_ZSt14_List_iteratorIiE === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) || (this._M_node$_ZSt14_List_iteratorIiE && ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) && this._M_node$_ZSt14_List_iteratorIiE.a === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).a && this._M_node$_ZSt14_List_iteratorIiE.i === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).i));
        }
        _ZNKSt14_List_iteratorIiEneERKS0_(__x) {
          return (!(this._M_node$_ZSt14_List_iteratorIiE === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) || (this._M_node$_ZSt14_List_iteratorIiE && ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) && this._M_node$_ZSt14_List_iteratorIiE.a === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).a && this._M_node$_ZSt14_List_iteratorIiE.i === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).i)));
        }
        _ZNSt14_List_iteratorIiEaSERS0_(o) {
          this._M_node$_ZSt14_List_iteratorIiE = (((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE) ? {a: ((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE).a, i: ((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZSt9remove_cvISt14_List_iteratorIiEE {
        __init__ZSt9remove_cvISt14_List_iteratorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt14_List_iteratorIiEE {
        __init__ZSt15remove_volatileISt14_List_iteratorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt14_List_iteratorIiEE {
        __init__ZSt12remove_constISt14_List_iteratorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt30__has_iterator_category_helperISt14_List_iteratorIiEE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt30__has_iterator_category_helperISt14_List_iteratorIiEE(...$a);
        }
        __init__ZSt30__has_iterator_category_helperISt14_List_iteratorIiEE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZNSt30__has_iterator_category_helperISt14_List_iteratorIiEE10_Wrap_typeISt26bidirectional_iterator_tagEE {
        __init__ZNSt30__has_iterator_category_helperISt14_List_iteratorIiEE10_Wrap_typeISt26bidirectional_iterator_tagEE(...$a) { }
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
      class _ZSt23__has_iterator_categoryISt14_List_iteratorIiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__has_iterator_categoryISt14_List_iteratorIiEE(...$a);
        }
        __init__ZSt23__has_iterator_categoryISt14_List_iteratorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17__iterator_traitsISt14_List_iteratorIiELi1EE {
        __init__ZSt17__iterator_traitsISt14_List_iteratorIiELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsISt14_List_iteratorIiEE extends _ZSt17__iterator_traitsISt14_List_iteratorIiELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15iterator_traitsISt14_List_iteratorIiEE(...$a);
        }
        __init__ZSt15iterator_traitsISt14_List_iteratorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17__iterator_traitsISt14_List_iteratorIiELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7complexIPSt4listIiSt9allocatorIiEEE {
        _M_real$_ZSt7complexIPSt4listIiSt9allocatorIiEEE;
        _M_imag$_ZSt7complexIPSt4listIiSt9allocatorIiEEE;
        constructor(...$a) {
          this.__init__ZSt7complexIPSt4listIiSt9allocatorIiEEE(...$a);
        }
        __init__ZSt7complexIPSt4listIiSt9allocatorIiEEE(...$a) {
          this._M_real$_ZSt7complexIPSt4listIiSt9allocatorIiEEE = null;
          this._M_imag$_ZSt7complexIPSt4listIiSt9allocatorIiEEE = null;
        }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt4listIiSt9allocatorIiEEE {
        __init__ZSt16remove_referenceISt4listIiSt9allocatorIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12__alloc_swapISt9allocatorISt10_List_nodeIiEELi1EE {
        __init__ZSt12__alloc_swapISt9allocatorISt10_List_nodeIiEELi1EE(...$a) { }
        __dtor() {
        }
        static _ZNSt12__alloc_swapISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERS3_S5_($p0, $p1) {
        }
      }
      class _ZSt16remove_referenceIPNSt8__detail15_List_node_baseEE {
        __init__ZSt16remove_referenceIPNSt8__detail15_List_node_baseEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE {
        __init__ZSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE(...$a) { }
        __dtor() {
        }
        static _ZNSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERKS3_S5_($p0, $p1) {
          return false;
        }
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt21__throw_runtime_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_runtime_error"); }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 6, (__n ? ((1) | 0) : ((0) | 0)), null, 0);
        return __os;
      }
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
      function _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_(__a, __b) {
        let $t24, $t25, $t26, $t27, $t28, $t29;
        let __tmp = {v: ($t24 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__a), $t25 = ($t24 ? $t24.a[$t24.i] : null), $t25 && $t25.a !== undefined ? {a: $t25.a, i: $t25.i} : $t25)};
        __a.a[__a.i] = ($t26 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__b), $t27 = ($t26 ? $t26.a[$t26.i] : null), $t27 && $t27.a !== undefined ? {a: $t27.a, i: $t27.i} : $t27);
        __b.a[__b.i] = ($t28 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_({a: __tmp, i: "v"}), $t29 = ($t28 ? $t28.a[$t28.i] : null), $t29 && $t29.a !== undefined ? {a: $t29.a, i: $t29.i} : $t29);
      }
      function main() {
        let $t30, $t31;
        let a = {v: new _ZSt4listIiSt9allocatorIiEE()};
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(a.v, {a: [3], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(a.v, {a: [1], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(a.v, {a: [4], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE10push_frontERKi.call(a.v, {a: [9], i: 0});
        let s = 0;
        for (let $b0 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e0 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b0._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e0], i: 0}); $b0._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b0._ZNKSt14_List_iteratorIiEdeEv()).a[($b0._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [32, 0], i: 0}), _ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)), {a: [_ZSt4endl], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4sortEv.call(a.v);
        s = 0;
        for (let $b1 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e1 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b1._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e1], i: 0}); $b1._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b1._ZNKSt14_List_iteratorIiEdeEv()).a[($b1._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [_ZSt4endl], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE7reverseEv.call(a.v);
        s = 0;
        for (let $b2 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e2 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b2._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e2], i: 0}); $b2._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b2._ZNKSt14_List_iteratorIiEdeEv()).a[($b2._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [_ZSt4endl], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE6removeERKi.call(a.v, {a: [4], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9pop_frontEv.call(a.v);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ($t30 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5frontEv.call(a.v), $t30.a[$t30.i])), {a: [32, 0], i: 0}), ($t31 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4backEv.call(a.v), $t31.a[$t31.i])), {a: [32, 0], i: 0}), _ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)), {a: [_ZSt4endl], i: 0});
        let b = new _ZSt4listIiSt9allocatorIiEE();
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(b, {a: [7], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(b, {a: [8], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiERS2_.call(b, _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE3endEv.call(b), {a: a, i: "v"});
        s = 0;
        for (let $b3 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e3 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b3._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e3], i: 0}); $b3._ZNSt14_List_iteratorIiEppEv()) {
          let y = $b3._ZNKSt14_List_iteratorIiEdeEv();
          s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [32, 0], i: 0}), _ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)), {a: [_ZSt4endl], i: 0});
        let c = {v: new _ZSt4listIiSt9allocatorIiEE()};
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(c.v, {a: [5], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(c.v, {a: [6], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5mergeERS2_.call(b, {a: c, i: "v"});
        s = 0;
        for (let $b4 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e4 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b4._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e4], i: 0}); $b4._ZNSt14_List_iteratorIiEppEv()) {
          let y = $b4._ZNKSt14_List_iteratorIiEdeEv();
          s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, s), {a: [_ZSt4endl], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5clearEv.call(b);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm({a: _ZSt4cout, i: "v"}, _ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(b)), {a: [32, 0], i: 0}), _ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE5emptyEv.call(b)), {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function _ZSt8distanceISt14_List_iteratorIiEElS0_S0_(__first, __last) {
        __first = {v: __first};
        return _ZSt10__distanceISt14_List_iteratorIiEElS0_S0_St18input_iterator_tag(new _ZSt14_List_iteratorIiE({a: __first, i: "v"}), new _ZSt14_List_iteratorIiE({a: [__last], i: 0}), _ZSt19__iterator_categoryISt14_List_iteratorIiEESt26bidirectional_iterator_tagRKS0_({a: __first, i: "v"}));
      }
      function _ZSt11__addressofIiEPiRi(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt4moveISt4listIiSt9allocatorIiEEEOS2_S3_(__t) {
        return __t;
      }
      function _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__t) {
        return __t;
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt19__iterator_categoryISt14_List_iteratorIiEESt26bidirectional_iterator_tagRKS0_($p0) {
        return new _ZSt26bidirectional_iterator_tag();
      }
      function _ZSt10__distanceISt14_List_iteratorIiEElS0_S0_St18input_iterator_tag(__first, __last, $p2) {
        let __n = 0;
        while (__first._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last], i: 0})) {
           {
            __first._ZNSt14_List_iteratorIiEppEv();
            (__n = ((__n + 1) | 0));
          }
        }
        return __n;
      }
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
      let _ZNSt8__detail12__prime_listE = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 103, 109, 113, 127, 137, 139, 149, 157, 167, 179, 193, 199, 211, 227, 241, 257, 277, 293, 313, 337, 359, 383, 409, 439, 467, 503, 541, 577, 619, 661, 709, 761, 823, 887, 953, 1031, 1109, 1193, 1289, 1381, 1493, 1613, 1741, 1879, 2029, 2179, 2357, 2549, 2753, 2971, 3209, 3469, 3739, 4027, 4349, 4703, 5087, 5503, 5953, 6427, 6949, 7517, 8123, 8783, 9497, 10273, 11113, 12011, 12983, 14033, 15173, 16411, 17749, 19183, 20753, 22447, 24281, 26267, 28411, 30727, 33223, 35933, 38873, 42043, 45481, 49201, 53201, 57557, 62233, 67307, 72817, 78779, 85229, 92203, 99733, 107897, 116731, 126271, 136607, 147793, 159871, 172933, 187091, 202409, 218971, 236897, 256279, 277261, 299951, 324503, 351061, 379787, 410857, 444487, 480881, 520241, 562841, 608903, 658753, 712697, 771049, 834181, 902483, 976369, 1056323, 1142821, 1236397, 1337629, 1447153, 1565659, 1693859, 1832561, 1982627, 2144977, 2320627, 2510653, 2716249, 2938679, 3179303, 3439651, 3721303, 4026031, 4355707, 4712381, 5098259, 5515729, 5967347, 6456007, 6984629, 7556579, 8175383, 8844859, 9569143, 10352717, 11200489, 12117689, 13109983, 14183539, 15345007, 16601593, 17961079, 19431899, 21023161, 22744717, 24607243, 26622317, 28802401, 31160981, 33712729, 36473443, 39460231, 42691603, 46187573, 49969847, 54061849, 58488943, 63278561, 68460391, 74066549, 80131819, 86693767, 93793069, 101473717, 109783337, 118773397, 128499677, 139022417, 150406843, 162723577, 176048909, 190465427, 206062531, 222936881, 241193053, 260944219, 282312799, 305431229, 330442829, 357502601, 386778277, 418451333, 452718089, 489790921, 529899637, 573292817, 620239453, 671030513, 725980837, 785430967, 849749479, 919334987, 994618837, 1076067617, 1164186217, 1259520799, 1362662261, 1474249943, 1594975441, 1725587117, 1866894511, 2019773507, 2185171673, 2364114217, 2557710269, 2767159799, 2993761039, 3238918481, 3504151727, 3791104843, 4101556399, 4294967291, 4294967291];
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
