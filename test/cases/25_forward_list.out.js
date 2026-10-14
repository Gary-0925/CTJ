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
      class _ZSt9nothrow_t {
        constructor(...$a) {
          this.__init__ZSt9nothrow_t(...$a);
        }
        __init__ZSt9nothrow_t(...$a) {
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
      class _Z12$24class_181 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_181(...$a);
        }
        __init__Z12$24class_181(...$a) {
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
      class _ZSt15_Swallow_assign {
        constructor(...$a) {
          this.__init__ZSt15_Swallow_assign(...$a);
        }
        __init__ZSt15_Swallow_assign(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt19_Fwd_list_node_base {
        _M_next;
        constructor(...$a) {
          this.__init__ZSt19_Fwd_list_node_base(...$a);
        }
        __init__ZSt19_Fwd_list_node_base(...$a) {
          this._M_next = null;
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
      class _ZN9__gnu_cxx13new_allocatorIiEE {
        __init__ZN9__gnu_cxx13new_allocatorIiEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIiE9constructIiiEEvPiOi(__p, __args_0) {
          let $t0;
          (__p.a[__p.i] = ($t0 = _ZSt7forwardIiEOiS_(__args_0), $t0.a[$t0.i]));
        }
        _ZN9__gnu_cxx13new_allocatorIiE7destroyIiEEvPi(__p) {
          void 0;
        }
      }
      class _ZSt9allocatorIiE extends _ZN9__gnu_cxx13new_allocatorIiEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE) ? [] : []));
          this.__init__ZSt9allocatorIiE(...$a);
        }
        __init__ZSt9allocatorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindISt14_Fwd_list_nodeIiEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindISt14_Fwd_list_nodeIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorIiE6rebindISt14_Fwd_list_nodeIiEEE {
        __init__ZNSt9allocatorIiE6rebindISt14_Fwd_list_nodeIiEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE(...$a);
        }
        __init__ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE(...$a) {
        }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t1;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t1 = _Znwm(((Math.imul(__n, 8)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE10deallocateEPS2_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
        }
      }
      class _ZSt9allocatorISt14_Fwd_list_nodeIiEE extends _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE) ? [$a[0]] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE) ? [] : []));
          this.__init__ZSt9allocatorISt14_Fwd_list_nodeIiEE(...$a);
        }
        __init__ZSt9allocatorISt14_Fwd_list_nodeIiEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE)) {
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIiE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_Fwd_list_implE extends _ZSt9allocatorISt14_Fwd_list_nodeIiEE {
        _M_head;
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE) ? [$a[0]] : []));
          this.__init__ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_Fwd_list_implE(...$a);
        }
        __init__ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_Fwd_list_implE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorISt14_Fwd_list_nodeIiEE)) {
            this._M_head = new _ZSt19_Fwd_list_node_base();
            this._M_head.ctj_a = this; this._M_head.ctj_i = "_M_head";
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this._M_head = new _ZSt19_Fwd_list_node_base();
            this._M_head.ctj_a = this; this._M_head.ctj_i = "_M_head";
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt9allocatorISt14_Fwd_list_nodeIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14_Fwd_list_baseIiSt9allocatorIiEE {
        _M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE;
        constructor(...$a) {
          this.__init__ZSt14_Fwd_list_baseIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt14_Fwd_list_baseIiSt9allocatorIiEE(...$a) {
          this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE = new _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_Fwd_list_implE($a[0]);
          this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE";
        }
        __dtor() {
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE"};
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE11_M_get_nodeEv() {
          let $t2;
          return ($t2 = _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEE8allocateERS4_m(this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), ((1) >>> 0)), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE11_M_put_nodeEPSt14_Fwd_list_nodeIiE(__p) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEE10deallocateERS4_PS3_m(this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_M_erase_afterEPSt19_Fwd_list_node_base(__pos) {
          let $t3;
          let __curr = (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
          (__pos.a[__pos.i])._M_next = (((__curr.a[__curr.i])._M_next) ? {a: ((__curr.a[__curr.i])._M_next).a, i: ((__curr.a[__curr.i])._M_next).i} : null);
          let __a = {v: new _ZSt9allocatorIiE(this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv())};
          _ZSt16allocator_traitsISt9allocatorIiEE._ZNSt16allocator_traitsISt9allocatorIiEE7destroyIiEEvRS1_Pi({a: __a, i: "v"}, ($t3 = _ZSt14_Fwd_list_nodeIiE.prototype._ZNSt14_Fwd_list_nodeIiE9_M_valptrEv.call(__curr.a[__curr.i]), $t3 ? {a: $t3.a, i: $t3.i} : null));
          _ZSt14_Fwd_list_nodeIiE.prototype.__dtor.call(__curr.a[__curr.i]);
          this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE11_M_put_nodeEPSt14_Fwd_list_nodeIiE((__curr ? {a: __curr.a, i: __curr.i} : null));
          return (((__pos.a[__pos.i])._M_next) ? {a: ((__pos.a[__pos.i])._M_next).a, i: ((__pos.a[__pos.i])._M_next).i} : null);
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE15_M_insert_afterIiEEPSt19_Fwd_list_node_baseSt24_Fwd_list_const_iteratorIiEOi(__pos, __args_0) {
          let $t4;
          let __to = (__pos._M_node$_ZSt24_Fwd_list_const_iteratorIiE ? {a: __pos._M_node$_ZSt24_Fwd_list_const_iteratorIiE.a, i: __pos._M_node$_ZSt24_Fwd_list_const_iteratorIiE.i} : null);
          let __thing = ($t4 = this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_M_create_nodeIiEEPSt14_Fwd_list_nodeIiEOi(_ZSt7forwardIiEOiS_(__args_0)), $t4 ? {a: $t4.a, i: $t4.i} : null);
          (__thing.a[__thing.i])._M_next = (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
          (__to.a[__to.i])._M_next = (__thing ? {a: __thing.a, i: __thing.i} : null);
          return (((__to.a[__to.i])._M_next) ? {a: ((__to.a[__to.i])._M_next).a, i: ((__to.a[__to.i])._M_next).i} : null);
        }
        _ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_M_create_nodeIiEEPSt14_Fwd_list_nodeIiEOi(__args_0) {
          let $t5, $t6;
          let __node = ($t5 = _ZSt14_Fwd_list_baseIiSt9allocatorIiEE.prototype._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE11_M_get_nodeEv.call(this), $t5 ? {a: $t5.a, i: $t5.i} : null);
          if (true) {
             {
              let __a = {v: new _ZSt9allocatorIiE(this._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv())};
              (__node.a[__node.i] = new _ZSt14_Fwd_list_nodeIiE(), __node.a[__node.i].ctj_a = __node.a, __node.a[__node.i].ctj_i = __node.i, {a: __node.a, i: __node.i});
              _ZSt16allocator_traitsISt9allocatorIiEE._ZNSt16allocator_traitsISt9allocatorIiEE9constructIiiEEvRS1_PiOi({a: __a, i: "v"}, ($t6 = _ZSt14_Fwd_list_nodeIiE.prototype._ZNSt14_Fwd_list_nodeIiE9_M_valptrEv.call(__node.a[__node.i]), $t6 ? {a: $t6.a, i: $t6.i} : null), _ZSt7forwardIiEOiS_(__args_0));
            }
          }
          if (false) {
             {
              _ZSt14_Fwd_list_baseIiSt9allocatorIiEE.prototype._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE11_M_put_nodeEPSt14_Fwd_list_nodeIiE.call(this, (__node ? {a: __node.a, i: __node.i} : null));
            }
          }
          return (__node ? {a: __node.a, i: __node.i} : null);
        }
      }
      class _ZSt12forward_listIiSt9allocatorIiEE extends _ZSt14_Fwd_list_baseIiSt9allocatorIiEE {
        constructor(...$a) {
          super(...[{a: [new _ZSt9allocatorISt14_Fwd_list_nodeIiEE(($a[0] === undefined ? ({a: [new _ZSt9allocatorIiE()], i: 0}) : $a[0]))], i: 0}]);
          this.__init__ZSt12forward_listIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt12forward_listIiSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt14_Fwd_list_baseIiSt9allocatorIiEE.prototype.__dtor.call(this);
        }
        _ZNSt12forward_listIiSt9allocatorIiEE5beginEv() {
          return new _ZSt18_Fwd_list_iteratorIiE((this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next ? {a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next.a, i: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next.i} : null));
        }
        _ZNSt12forward_listIiSt9allocatorIiEE3endEv() {
          return new _ZSt18_Fwd_list_iteratorIiE(null);
        }
        _ZNKSt12forward_listIiSt9allocatorIiEE13cbefore_beginEv() {
          return new _ZSt24_Fwd_list_const_iteratorIiE((({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}) ? {a: ({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}).a, i: ({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}).i} : null));
        }
        _ZNKSt12forward_listIiSt9allocatorIiEE5emptyEv() {
          return (this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next === null);
        }
        _ZNSt12forward_listIiSt9allocatorIiEE5frontEv() {
          let __front = (this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next ? {a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next.a, i: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE._M_head._M_next.i} : null);
          return _ZSt14_Fwd_list_nodeIiE.prototype._ZNSt14_Fwd_list_nodeIiE9_M_valptrEv.call(__front.a[__front.i]);
        }
        _ZNSt12forward_listIiSt9allocatorIiEE10push_frontERKi(__val) {
          _ZSt14_Fwd_list_baseIiSt9allocatorIiEE.prototype._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE15_M_insert_afterIiEEPSt19_Fwd_list_node_baseSt24_Fwd_list_const_iteratorIiEOi.call(this, this._ZNKSt12forward_listIiSt9allocatorIiEE13cbefore_beginEv(), __val);
        }
        _ZNSt12forward_listIiSt9allocatorIiEE9pop_frontEv() {
          _ZSt14_Fwd_list_baseIiSt9allocatorIiEE.prototype._ZNSt14_Fwd_list_baseIiSt9allocatorIiEE14_M_erase_afterEPSt19_Fwd_list_node_base.call(this, (({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}) ? {a: ({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}).a, i: ({a: this._M_impl$_ZSt14_Fwd_list_baseIiSt9allocatorIiEE, i: "_M_head"}).i} : null));
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
      class _ZSt18_Fwd_list_iteratorIiE {
        _M_node$_ZSt18_Fwd_list_iteratorIiE;
        constructor(...$a) {
          this.__init__ZSt18_Fwd_list_iteratorIiE(...$a);
        }
        __init__ZSt18_Fwd_list_iteratorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt18_Fwd_list_iteratorIiE)) {
            this._M_node$_ZSt18_Fwd_list_iteratorIiE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt18_Fwd_list_iteratorIiE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt18_Fwd_list_iteratorIiE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt18_Fwd_list_iteratorIiE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt18_Fwd_list_iteratorIiE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt18_Fwd_list_iteratorIiEdeEv() {
          return _ZSt14_Fwd_list_nodeIiE.prototype._ZNSt14_Fwd_list_nodeIiE9_M_valptrEv.call(this._M_node$_ZSt18_Fwd_list_iteratorIiE.a[this._M_node$_ZSt18_Fwd_list_iteratorIiE.i]);
        }
        _ZNSt18_Fwd_list_iteratorIiEppEv() {
          this._M_node$_ZSt18_Fwd_list_iteratorIiE = (((this._M_node$_ZSt18_Fwd_list_iteratorIiE.a[this._M_node$_ZSt18_Fwd_list_iteratorIiE.i])._M_next) ? {a: ((this._M_node$_ZSt18_Fwd_list_iteratorIiE.a[this._M_node$_ZSt18_Fwd_list_iteratorIiE.i])._M_next).a, i: ((this._M_node$_ZSt18_Fwd_list_iteratorIiE.a[this._M_node$_ZSt18_Fwd_list_iteratorIiE.i])._M_next).i} : null);
          return {a: [this], i: 0};
        }
        _ZNKSt18_Fwd_list_iteratorIiEneERKS0_(__x) {
          return (!(this._M_node$_ZSt18_Fwd_list_iteratorIiE === ((__x.a[__x.i])._M_node$_ZSt18_Fwd_list_iteratorIiE) || (this._M_node$_ZSt18_Fwd_list_iteratorIiE && ((__x.a[__x.i])._M_node$_ZSt18_Fwd_list_iteratorIiE) && this._M_node$_ZSt18_Fwd_list_iteratorIiE.a === ((__x.a[__x.i])._M_node$_ZSt18_Fwd_list_iteratorIiE).a && this._M_node$_ZSt18_Fwd_list_iteratorIiE.i === ((__x.a[__x.i])._M_node$_ZSt18_Fwd_list_iteratorIiE).i)));
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindIiEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE6rebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorIiE6rebindIiEE {
        __init__ZNSt9allocatorIiE6rebindIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt24_Fwd_list_const_iteratorIiE {
        _M_node$_ZSt24_Fwd_list_const_iteratorIiE;
        constructor(...$a) {
          this.__init__ZSt24_Fwd_list_const_iteratorIiE(...$a);
        }
        __init__ZSt24_Fwd_list_const_iteratorIiE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt24_Fwd_list_const_iteratorIiE)) {
            this._M_node$_ZSt24_Fwd_list_const_iteratorIiE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt24_Fwd_list_const_iteratorIiE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt24_Fwd_list_const_iteratorIiE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt24_Fwd_list_const_iteratorIiE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt24_Fwd_list_const_iteratorIiE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt17integral_constantImLi4EE {
        constructor(...$a) {
          this.__init__ZSt17integral_constantImLi4EE(...$a);
        }
        __init__ZSt17integral_constantImLi4EE(...$a) {
        }
        __dtor() {
        }
        static value = 4;
      }
      class _ZSt12alignment_ofIiE extends _ZSt17integral_constantImLi4EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12alignment_ofIiE(...$a);
        }
        __init__ZSt12alignment_ofIiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantImLi4EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt15aligned_storageILi4ELi4EE {
        __init__ZSt15aligned_storageILi4ELi4EE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt15aligned_storageILi4ELi4EE4type12$24class_119E {
        constructor(...$a) {
          this.__init__ZNSt15aligned_storageILi4ELi4EE4type12$24class_119E(...$a);
        }
        __init__ZNSt15aligned_storageILi4ELi4EE4type12$24class_119E(...$a) {
        }
        __dtor() {
        }
      }
      class _ZNSt15aligned_storageILi4ELi4EE4typeE {
        __data;
        __align;
        constructor(...$a) {
          this.__init__ZNSt15aligned_storageILi4ELi4EE4typeE(...$a);
        }
        __init__ZNSt15aligned_storageILi4ELi4EE4typeE(...$a) {
          this.__data = new Array(4).fill(0);
          this.__align = new _ZNSt15aligned_storageILi4ELi4EE4type12$24class_119E();
          this.__align.ctj_a = this; this.__align.ctj_i = "__align";
        }
        __dtor() {
        }
      }
      class _ZSt14_Fwd_list_nodeIiE extends _ZSt19_Fwd_list_node_base {
        _M_storage$_ZSt14_Fwd_list_nodeIiE;
        constructor(...$a) {
          super();
          this.__init__ZSt14_Fwd_list_nodeIiE(...$a);
        }
        __init__ZSt14_Fwd_list_nodeIiE(...$a) {
          this._M_storage$_ZSt14_Fwd_list_nodeIiE = new _ZNSt15aligned_storageILi4ELi4EE4typeE();
          this._M_storage$_ZSt14_Fwd_list_nodeIiE.ctj_a = this; this._M_storage$_ZSt14_Fwd_list_nodeIiE.ctj_i = "_M_storage$_ZSt14_Fwd_list_nodeIiE";
        }
        __dtor() {
          _ZSt19_Fwd_list_node_base.prototype.__dtor.call(this);
        }
        _ZNSt14_Fwd_list_nodeIiE9_M_valptrEv() {
          return (({a: this, i: "_M_storage$_ZSt14_Fwd_list_nodeIiE"}) ? {a: ({a: this, i: "_M_storage$_ZSt14_Fwd_list_nodeIiE"}).a, i: ({a: this, i: "_M_storage$_ZSt14_Fwd_list_nodeIiE"}).i} : null);
        }
      }
      class _ZSt16allocator_traitsISt9allocatorIiEE {
        __init__ZSt16allocator_traitsISt9allocatorIiEE(...$a) { }
        __dtor() {
        }
        static _ZNSt16allocator_traitsISt9allocatorIiEE7destroyIiEEvRS1_Pi(__a, __p) {
          _ZSt16allocator_traitsISt9allocatorIiEE._ZNSt16allocator_traitsISt9allocatorIiEE10_S_destroyIiEEvRS1_Pi(__a, (__p ? {a: __p.a, i: __p.i} : null));
        }
        static _ZNSt16allocator_traitsISt9allocatorIiEE9constructIiiEEvRS1_PiOi(__a, __p, __args_0) {
          _ZSt16allocator_traitsISt9allocatorIiEE._ZNSt16allocator_traitsISt9allocatorIiEE12_S_constructIiiEEvRS1_PiOi(__a, (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
        }
        static _ZNSt16allocator_traitsISt9allocatorIiEE12_S_constructIiiEEvRS1_PiOi(__a, __p, __args_0) {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE9constructIiiEEvPiOi.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
        }
        static _ZNSt16allocator_traitsISt9allocatorIiEE10_S_destroyIiEEvRS1_Pi(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE7destroyIiEEvPi.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
        }
      }
      class _ZNSt16allocator_traitsISt9allocatorIiEE18__construct_helperIiiEE {
        constructor(...$a) {
          this.__init__ZNSt16allocator_traitsISt9allocatorIiEE18__construct_helperIiiEE(...$a);
        }
        __init__ZNSt16allocator_traitsISt9allocatorIiEE18__construct_helperIiiEE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
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
      class _ZSt12is_referenceIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPiE(...$a);
        }
        __init__ZSt12is_referenceIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPiE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPiE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPiESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPiESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPiESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPiESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPiESt19is_rvalue_referenceIS1_EE(...$a) { }
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
      class _ZSt6__not_ISt12is_referenceIPiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPiEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPiE(...$a);
        }
        __init__ZSt7is_voidIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPiE {
        __init__ZSt9remove_cvIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPiE {
        __init__ZSt15remove_volatileIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPiE {
        __init__ZSt12remove_constIPiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPiE(...$a);
        }
        __init__ZSt16__is_void_helperIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPiEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPiEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPiEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPiEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPiEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPiEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPiEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPiLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPiLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPiE extends _ZSt29__add_rvalue_reference_helperIPiLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPiE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPiE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPiLi1EE.prototype.__dtor.call(this);
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
      class _ZSt12is_referenceIPSt9allocatorIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt12is_referenceIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt9allocatorIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt9allocatorIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorIiEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt9allocatorIiEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorIiEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorIiEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt9allocatorIiEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorIiEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorIiEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt9allocatorIiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt9allocatorIiEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt9allocatorIiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt9allocatorIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt7is_voidIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt9allocatorIiEE {
        __init__ZSt9remove_cvIPSt9allocatorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt9allocatorIiEE {
        __init__ZSt15remove_volatileIPSt9allocatorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt9allocatorIiEE {
        __init__ZSt12remove_constIPSt9allocatorIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt9allocatorIiEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt9allocatorIiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt9allocatorIiEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt9allocatorIiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorIiEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt9allocatorIiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorIiEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorIiEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt9allocatorIiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorIiEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorIiEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt9allocatorIiELi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt9allocatorIiELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt9allocatorIiEE extends _ZSt29__add_rvalue_reference_helperIPSt9allocatorIiELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt9allocatorIiELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEE(...$a);
        }
        __init__ZSt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleIiiE(...$a);
        }
        __init__ZSt16is_constructibleIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleIiiE(...$a);
        }
        __init__ZSt25__is_direct_constructibleIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implIiiE extends _ZSt25__is_direct_constructibleIiiE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implIiiE(...$a);
        }
        __init__ZSt23__is_constructible_implIiiE(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleIiiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castIiiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIiiE(...$a);
        }
        __init__ZSt20__is_static_castableIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIiiE(...$a);
        }
        __init__ZSt25__is_static_castable_safeIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIiiE extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIiiE(...$a);
        }
        __init__ZSt25__is_static_castable_implIiiE(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
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
      class _ZSt5__or_ISt7is_voidIiESt11is_functionIiEE extends _ZSt11is_functionIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionIiEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionIiEE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt11is_functionIiEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt11is_functionIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIiESt11is_functionIiEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIiESt11is_functionIiEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIiESt11is_functionIiEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIiiLi1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIiiLi1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIiiLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE extends _ZSt19is_lvalue_referenceIiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIiESt19is_rvalue_referenceIiEE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIiEE {
        __init__ZSt11conditionalILi0ESt19is_rvalue_referenceIiESt19is_lvalue_referenceIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIiiLi0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIiiLi0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIiiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEE extends _ZSt25__is_lvalue_to_rvalue_refIiiLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIiiLi0EE.prototype.__dtor.call(this);
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
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIiiESt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEESt20__is_static_castableIiiEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIiiLi1EESt25__is_lvalue_to_rvalue_refIiiLi0EEEESt20__is_static_castableIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeIiiE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeIiiE(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeIiiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newIiiE extends _ZSt34__is_direct_constructible_new_safeIiiE {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newIiiE(...$a);
        }
        __init__ZSt29__is_direct_constructible_newIiiE(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeIiiE.prototype.__dtor.call(this);
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
      class _ZSt30__is_direct_constructible_implIiiE extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implIiiE(...$a);
        }
        __init__ZSt30__is_direct_constructible_implIiiE(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiiEE extends _ZSt30__is_direct_constructible_implIiiE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiiEE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleIiESt30__is_direct_constructible_implIiiEE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implIiiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implIiiESt15is_destructibleIiEE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implIiiESt15is_destructibleIiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiiESt34__is_direct_constructible_new_safeIiiEE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIiiESt34__is_direct_constructible_new_safeIiiEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEESt16is_constructibleIiiEE extends _ZSt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEESt16is_constructibleIiiEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEESt16is_constructibleIiiEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt16is_constructibleIiiESt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEEE {
        __init__ZSt11conditionalILi0ESt16is_constructibleIiiESt6__not_INSt22allocator_traits$3cstd21allocator$3cint$3e$3e18__construct_helperIiiEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi0EvE {
        __init__ZSt9enable_ifILi0EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt16allocator_traitsISt9allocatorIiEE16__destroy_helperIiEE {
        constructor(...$a) {
          this.__init__ZNSt16allocator_traitsISt9allocatorIiEE16__destroy_helperIiEE(...$a);
        }
        __init__ZNSt16allocator_traitsISt9allocatorIiEE16__destroy_helperIiEE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEE8allocateERS4_m(__a, __n) {
          let $t7;
          return ($t7 = _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE8allocateEmPKv.call(__a.a[__a.i], __n, {a: [0], i: 0}), $t7 ? {a: $t7.a, i: $t7.i} : null);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorISt14_Fwd_list_nodeIiEEE10deallocateERS4_PS3_m(__a, __p, __n) {
          _ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt14_Fwd_list_nodeIiEE10deallocateEPS2_m.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __n);
        }
      }
      class _ZSt19__declval_protectorIPiE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPiE(...$a);
        }
        __init__ZSt19__declval_protectorIPiE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
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
      class _ZSt19__declval_protectorIPSt9allocatorIiEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt9allocatorIiEE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt9allocatorIiEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(__os, __n) {
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
      function main() {
        let $t8;
        let f = new _ZSt12forward_listIiSt9allocatorIiEE({a: [new _ZSt9allocatorIiE()], i: 0});
        _ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNSt12forward_listIiSt9allocatorIiEE10push_frontERKi.call(f, {a: [1], i: 0});
        _ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNSt12forward_listIiSt9allocatorIiEE10push_frontERKi.call(f, {a: [2], i: 0});
        _ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNSt12forward_listIiSt9allocatorIiEE10push_frontERKi.call(f, {a: [3], i: 0});
        for (let $b0 = new _ZSt18_Fwd_list_iteratorIiE({a: [f._ZNSt12forward_listIiSt9allocatorIiEE5beginEv()], i: 0}), $e0 = new _ZSt18_Fwd_list_iteratorIiE({a: [f._ZNSt12forward_listIiSt9allocatorIiEE3endEv()], i: 0}); $b0._ZNKSt18_Fwd_list_iteratorIiEneERKS0_({a: [$e0], i: 0}); $b0._ZNSt18_Fwd_list_iteratorIiEppEv()) {
          let x = ($b0._ZNKSt18_Fwd_list_iteratorIiEdeEv()).a[($b0._ZNKSt18_Fwd_list_iteratorIiEdeEv()).i];
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, x), {a: [32, 0], i: 0});
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op({a: _ZSt4cout, i: "v"}, {a: [_ZSt4endl], i: 0});
        _ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNSt12forward_listIiSt9allocatorIiEE9pop_frontEv.call(f);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ($t8 = _ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNSt12forward_listIiSt9allocatorIiEE5frontEv.call(f), $t8.a[$t8.i])), {a: [32, 0], i: 0}), (_ZSt12forward_listIiSt9allocatorIiEE.prototype._ZNKSt12forward_listIiSt9allocatorIiEE5emptyEv.call(f) ? ((1) | 0) : ((0) | 0))), {a: [_ZSt4endl], i: 0});
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt7declvalIPiEOS_v() {
        return _ZSt19__declval_protectorIPiE._ZNSt19__declval_protectorIPiE10__delegateEv();
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt7declvalIPSt9allocatorIiEEOS_v() {
        return _ZSt19__declval_protectorIPSt9allocatorIiEE._ZNSt19__declval_protectorIPSt9allocatorIiEE10__delegateEv();
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
      let _ZSt13allocator_arg = new _ZSt15allocator_arg_t();
      let _ZSt6ignore = new _ZSt15_Swallow_assign();
      let _ZN9__gnu_cxx21__default_lock_policyE = 0;
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
