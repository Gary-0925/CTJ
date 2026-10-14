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
        _ZNSt13basic_istreamIcSt11char_traitsIcEE8setstateEi(__s) {
          this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE = (((this._M_state$_ZSt13basic_istreamIcSt11char_traitsIcEE) | (__s)) | 0);
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
      class _ZN9__gnu_cxx13new_allocatorIxEE {
        __init__ZN9__gnu_cxx13new_allocatorIxEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIxE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t0;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZNK9__gnu_cxx13new_allocatorIxE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t0 = _Znwm(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorIxE10deallocateEPxm(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorIxE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorIxE9constructIxxEEvPxOx(__p, __args_0) {
          let $t1;
          (__p.a[__p.i] = ($t1 = _ZSt7forwardIxEOxS_(__args_0), $t1.a[$t1.i]));
        }
        _ZN9__gnu_cxx13new_allocatorIxE7destroyIxEEvPx(__p) {
          void 0;
        }
      }
      class _ZSt9allocatorIxE extends _ZN9__gnu_cxx13new_allocatorIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorIxE(...$a);
        }
        __init__ZSt9allocatorIxE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE extends _ZSt9allocatorIxE {
        _M_start;
        _M_finish;
        _M_end_of_storage;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE(...$a) {
          this._M_start = null;
          this._M_finish = null;
          this._M_end_of_storage = null;
        }
        __dtor() {
          _ZSt9allocatorIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseIxSt9allocatorIxEE {
        _M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseIxSt9allocatorIxEE(...$a);
        }
        __init__ZSt12_Vector_baseIxSt9allocatorIxEE(...$a) {
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE = new _ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE();
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE";
        }
        __dtor() {
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE"};
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE11_M_allocateEm(__n) {
          let $t2;
          return ($t2 = ((__n !== ((0) >>> 0)) ? _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE8allocateEmPKv.call(this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE, __n, {a: [0], i: 0}) : 0), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE13_M_deallocateEPxm(__p, __n) {
          if (__p) {
            _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE10deallocateEPxm.call(this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE, (__p ? {a: __p.a, i: __p.i} : null), __n);
          }
        }
      }
      class _ZSt6vectorIxSt9allocatorIxEE extends _ZSt12_Vector_baseIxSt9allocatorIxEE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt6vectorIxSt9allocatorIxEE(...$a);
        }
        __init__ZSt6vectorIxSt9allocatorIxEE(...$a) {
        }
        __dtor() {
          _ZSt12_Vector_baseIxSt9allocatorIxEE.prototype.__dtor.call(this);
        }
        _ZNSt6vectorIxSt9allocatorIxEE5beginEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE, i: "_M_start"});
        }
        _ZNSt6vectorIxSt9allocatorIxEE3endEv() {
          return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE, i: "_M_finish"});
        }
        _ZNKSt6vectorIxSt9allocatorIxEE4sizeEv() {
          return ((((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i : 0) - (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0))) >>> 0);
        }
        _ZNKSt6vectorIxSt9allocatorIxEE8max_sizeEv() {
          return _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE8max_sizeERKS2_(this._ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv());
        }
        _ZNSt6vectorIxSt9allocatorIxEEixEm(__n) {
          return ({a: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0) + (__n)});
        }
        _ZNSt6vectorIxSt9allocatorIxEE9push_backERKx(__x) {
          if ((!(this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish === this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage || (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish && this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage && this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.a === this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage.a && this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i === this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage.i)))) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructIxEEvRS2_PxRKx({a: this, i: "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE"}, (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i} : null), __x);
              ++this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i;
            }
          }
          else {
            this._ZNSt6vectorIxSt9allocatorIxEE19_M_emplace_back_auxIxEEvOx(__x);
          }
        }
        _ZNKSt6vectorIxSt9allocatorIxEE12_M_check_lenEmPKc(__n, __s) {
          let $t3;
          __n = {v: __n};
          if (((((this._ZNKSt6vectorIxSt9allocatorIxEE8max_sizeEv()) - (this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv())) >>> 0) < __n.v)) {
            _ZSt20__throw_length_errorPKc((__s ? {a: __s.a, i: __s.i} : null));
          }
          let __len = (((this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv()) + (($t3 = _ZSt3maxImERKmS_S_({a: [this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv()], i: 0}, {a: __n, i: "v"}), $t3.a[$t3.i]))) >>> 0);
          return (((__len < this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv()) || (__len > this._ZNKSt6vectorIxSt9allocatorIxEE8max_sizeEv())) ? ((this._ZNKSt6vectorIxSt9allocatorIxEE8max_sizeEv()) >>> 0) : ((__len) >>> 0));
        }
        _ZNSt6vectorIxSt9allocatorIxEE19_M_emplace_back_auxIxEEvOx(__args_0) {
          let $t4, $t5, $t6, $t7, $t8;
          let __len = this._ZNKSt6vectorIxSt9allocatorIxEE12_M_check_lenEmPKc(((1) >>> 0), {a: [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], i: 0});
          let __new_start = ($t4 = _ZSt12_Vector_baseIxSt9allocatorIxEE.prototype._ZNSt12_Vector_baseIxSt9allocatorIxEE11_M_allocateEm.call(this, __len), $t4 ? {a: $t4.a, i: $t4.i} : null);
          let __new_finish = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructIxEEvRS2_PxRKx({a: this, i: "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE"}, ($t5 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv())}), $t5 ? {a: $t5.a, i: $t5.i} : null), _ZSt7forwardIxEOxS_(__args_0));
              __new_finish = null;
              __new_finish = ($t6 = _ZSt34__uninitialized_move_if_noexcept_aIPxS_St9allocatorIxEES_S_S_S_RS1_((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i} : null), (__new_start ? {a: __new_start.a, i: __new_start.i} : null), this._ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv()), $t6 ? {a: $t6.a, i: $t6.i} : null);
              ++__new_finish.i;
            }
          }
          if (false) {
             {
              if ((!__new_finish)) {
                _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE7destroyIxEEvRS2_Px({a: this, i: "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE"}, ($t7 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (this._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv())}), $t7 ? {a: $t7.a, i: $t7.i} : null));
              }
              else {
                _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_((__new_start ? {a: __new_start.a, i: __new_start.i} : null), (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null), this._ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv());
              }
              this._ZNSt12_Vector_baseIxSt9allocatorIxEE13_M_deallocateEPxm((__new_start ? {a: __new_start.a, i: __new_start.i} : null), __len);
            }
          }
          _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i} : null), (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i} : null), this._ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv());
          this._ZNSt12_Vector_baseIxSt9allocatorIxEE13_M_deallocateEPxm((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i} : null), ((((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage.i : 0) - (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0))) >>> 0));
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start = (__new_start ? {a: __new_start.a, i: __new_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish = (__new_finish ? {a: __new_finish.a, i: __new_finish.i} : null);
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage = ($t8 = ({a: (__new_start ? __new_start.a : null), i: (__new_start ? __new_start.i : 0) + (__len)}), $t8 ? {a: $t8.a, i: $t8.i} : null);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructIxEEvRS2_PxRKx(__a, __p, __arg) {
          _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE9constructIxxEEvPxOx.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), __arg);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE8max_sizeERKS2_(__a) {
          return _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZNK9__gnu_cxx13new_allocatorIxE8max_sizeEv.call(__a.a[__a.i]);
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE7destroyIxEEvRS2_Px(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE7destroyIxEEvPx.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE6rebindIxEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE6rebindIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorIxE6rebindIxEE {
        __init__ZNSt9allocatorIxE6rebindIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listIxE {
        _M_array$_ZSt16initializer_listIxE;
        _M_len$_ZSt16initializer_listIxE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listIxE(...$a);
        }
        __init__ZSt16initializer_listIxE(...$a) {
          this._M_array$_ZSt16initializer_listIxE = null;
          this._M_len$_ZSt16initializer_listIxE = 0;
        }
        __dtor() {
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
      class _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE {
        _M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE;
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE(...$a);
        }
        __init__ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE(...$a) {
          let $t9, $t10;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE = (((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE) ? {a: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE).a, i: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE = ($t9 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(($a[0]).a[($a[0]).i]), $t10 = ($t9 ? $t9.a[$t9.i] : null), $t10 && $t10.a !== undefined ? {a: $t10.a, i: $t10.i} : $t10);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv() {
          return this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE;
        }
        _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv() {
          ++this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.i;
          return {a: [this], i: 0};
        }
        _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv() {
          --this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.i;
          return {a: [this], i: 0};
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl(__n) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [({a: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.a : null), i: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.i : 0) + (__n.a[__n.i])})], i: 0});
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmiERKl(__n) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [({a: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.a : null), i: (this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE ? this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.i : 0) - (__n.a[__n.i])})], i: 0});
        }
        _ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv() {
          return {a: this, i: "_M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE"};
        }
        _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEaSERS6_(o) {
          this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE = (((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE) ? {a: ((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE).a, i: ((o.a[o.i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZSt10__are_sameIPxS0_E {
        __init__ZSt10__are_sameIPxS0_E(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx11__enable_ifILi1ESt6vectorIxSt9allocatorIxEEEE {
        __init__ZN9__gnu_cxx11__enable_ifILi1ESt6vectorIxSt9allocatorIxEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPxE {
        __init__ZSt15iterator_traitsIPxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIxE {
        __init__ZSt16remove_referenceIxE(...$a) { }
        __dtor() {
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
      class _ZSt23__move_if_noexcept_condIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__move_if_noexcept_condIxE(...$a);
        }
        __init__ZSt23__move_if_noexcept_condIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
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
      class _ZSt25__is_static_castable_implIOxxE extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIOxxE(...$a);
        }
        __init__ZSt25__is_static_castable_implIOxxE(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIOxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIOxE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
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
      class _ZSt24is_nothrow_constructibleIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt24is_nothrow_constructibleIxOxE(...$a);
        }
        __init__ZSt24is_nothrow_constructibleIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt36__is_nothrow_move_constructible_implIxLi0EE extends _ZSt24is_nothrow_constructibleIxOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt36__is_nothrow_move_constructible_implIxLi0EE(...$a);
        }
        __init__ZSt36__is_nothrow_move_constructible_implIxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt24is_nothrow_constructibleIxOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29is_nothrow_move_constructibleIxE extends _ZSt36__is_nothrow_move_constructible_implIxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt29is_nothrow_move_constructibleIxE(...$a);
        }
        __init__ZSt29is_nothrow_move_constructibleIxE(...$a) {
        }
        __dtor() {
          _ZSt36__is_nothrow_move_constructible_implIxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleIxOxE(...$a);
        }
        __init__ZSt16is_constructibleIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleIxOxE(...$a);
        }
        __init__ZSt25__is_direct_constructibleIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implIxOxE extends _ZSt25__is_direct_constructibleIxOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implIxOxE(...$a);
        }
        __init__ZSt23__is_constructible_implIxOxE(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleIxOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castIxOxE(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIOxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIOxxE(...$a);
        }
        __init__ZSt20__is_static_castableIOxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIOxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIOxxE(...$a);
        }
        __init__ZSt25__is_static_castable_safeIOxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIOxE(...$a);
        }
        __init__ZSt12is_referenceIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIOxE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIOxESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIOxESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIOxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIOxEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIOxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIOxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIOxE(...$a);
        }
        __init__ZSt7is_voidIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIOxE {
        __init__ZSt9remove_cvIOxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIOxE {
        __init__ZSt15remove_volatileIOxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIOxE {
        __init__ZSt12remove_constIOxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIOxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIOxE(...$a);
        }
        __init__ZSt16__is_void_helperIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIOxEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIOxEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIOxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIOxEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIOxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIOxEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIOxEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIOxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIOxEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIOxEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIOxLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIOxLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIOxE extends _ZSt29__add_rvalue_reference_helperIOxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIOxE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIOxE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIOxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIOxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIOxE(...$a);
        }
        __init__ZSt11is_functionIOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIOxESt11is_functionIS1_EE extends _ZSt11is_functionIOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIOxESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIOxESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIOxESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIOxESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIOxESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIOxESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIOxESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIOxxLi1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIOxxLi1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIOxxLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIxEE extends _ZSt19is_lvalue_referenceIOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIxEE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIOxESt19is_rvalue_referenceIxEE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_rvalue_referenceIxESt19is_lvalue_referenceIOxEE {
        __init__ZSt11conditionalILi0ESt19is_rvalue_referenceIxESt19is_lvalue_referenceIOxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIOxxLi0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIOxxLi0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIOxxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE extends _ZSt25__is_lvalue_to_rvalue_refIOxxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIOxxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIOxE {
        __init__ZSt16remove_referenceIOxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_sameIxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_sameIxxE(...$a);
        }
        __init__ZSt7is_sameIxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_sameIxxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_sameIxxEE(...$a);
        }
        __init__ZSt6__not_ISt7is_sameIxxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_base_ofIxxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_base_ofIxxE(...$a);
        }
        __init__ZSt10is_base_ofIxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt7is_sameIxxEESt10is_base_ofIxxEE extends _ZSt6__not_ISt7is_sameIxxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt7is_sameIxxEESt10is_base_ofIxxEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt7is_sameIxxEESt10is_base_ofIxxEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_sameIxxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt10is_base_ofIxxESt6__not_ISt7is_sameIxxEEE {
        __init__ZSt11conditionalILi0ESt10is_base_ofIxxESt6__not_ISt7is_sameIxxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIOxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIOxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIOxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS3_xLi0EEEESt20__is_static_castableIS3_xEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIOxxLi1EESt25__is_lvalue_to_rvalue_refIS3_xLi0EEEESt20__is_static_castableIS3_xEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeIxOxE(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newIxOxE extends _ZSt34__is_direct_constructible_new_safeIxOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newIxOxE(...$a);
        }
        __init__ZSt29__is_direct_constructible_newIxOxE(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeIxOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt15is_destructibleIxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15is_destructibleIxE(...$a);
        }
        __init__ZSt15is_destructibleIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_array_unknown_boundsIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_array_unknown_boundsIxE(...$a);
        }
        __init__ZSt25__is_array_unknown_boundsIxE(...$a) {
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
      class _ZSt6extentIxLi0EE extends _ZSt17integral_constantImLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6extentIxLi0EE(...$a);
        }
        __init__ZSt6extentIxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantImLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt6extentIxLi0EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt6extentIxLi0EEE(...$a);
        }
        __init__ZSt6__not_ISt6extentIxLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt8is_arrayIxESt6__not_ISt6extentIxLi0EEEE extends _ZSt8is_arrayIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt8is_arrayIxESt6__not_ISt6extentIxLi0EEEE(...$a);
        }
        __init__ZSt6__and_ISt8is_arrayIxESt6__not_ISt6extentIxLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt6extentIxLi0EEESt8is_arrayIxEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt6extentIxLi0EEESt8is_arrayIxEE(...$a) { }
        __dtor() {
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
      class _ZSt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEE extends _ZSt11is_functionIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEE(...$a);
        }
        __init__ZSt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIxESt25__is_array_unknown_boundsIxESt11is_functionIxEE extends _ZSt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIxESt25__is_array_unknown_boundsIxESt11is_functionIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIxESt25__is_array_unknown_boundsIxESt11is_functionIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt25__is_array_unknown_boundsIxESt11is_functionIxEE {
        __init__ZSt11conditionalILi0ESt25__is_array_unknown_boundsIxESt11is_functionIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEEE {
        __init__ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt25__is_array_unknown_boundsIxESt11is_functionIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9is_scalarIxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt9is_scalarIxE(...$a);
        }
        __init__ZSt9is_scalarIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt13is_arithmeticIxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt13is_arithmeticIxE(...$a);
        }
        __init__ZSt13is_arithmeticIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_integralIxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_integralIxE(...$a);
        }
        __init__ZSt11is_integralIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_integral_helperIxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_integral_helperIxE(...$a);
        }
        __init__ZSt20__is_integral_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_floating_pointIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_floating_pointIxE(...$a);
        }
        __init__ZSt17is_floating_pointIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_floating_point_helperIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_floating_point_helperIxE(...$a);
        }
        __init__ZSt26__is_floating_point_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_integralIxESt17is_floating_pointIxEE extends _ZSt11is_integralIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_integralIxESt17is_floating_pointIxEE(...$a);
        }
        __init__ZSt5__or_ISt11is_integralIxESt17is_floating_pointIxEE(...$a) {
        }
        __dtor() {
          _ZSt11is_integralIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt11is_integralIxESt17is_floating_pointIxEE {
        __init__ZSt11conditionalILi1ESt11is_integralIxESt17is_floating_pointIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt7is_enumIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_enumIxE(...$a);
        }
        __init__ZSt7is_enumIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt10is_pointerIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt10is_pointerIxE(...$a);
        }
        __init__ZSt10is_pointerIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__is_pointer_helperIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19__is_pointer_helperIxE(...$a);
        }
        __init__ZSt19__is_pointer_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt17is_member_pointerIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt17is_member_pointerIxE(...$a);
        }
        __init__ZSt17is_member_pointerIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt26__is_member_pointer_helperIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_member_pointer_helperIxE(...$a);
        }
        __init__ZSt26__is_member_pointer_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt14__is_nullptr_tIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14__is_nullptr_tIxE(...$a);
        }
        __init__ZSt14__is_nullptr_tIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21__is_nullptr_t_helperIxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21__is_nullptr_t_helperIxE(...$a);
        }
        __init__ZSt21__is_nullptr_t_helperIxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt13is_arithmeticIxESt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE extends _ZSt13is_arithmeticIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt13is_arithmeticIxESt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a);
        }
        __init__ZSt5__or_ISt13is_arithmeticIxESt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a) {
        }
        __dtor() {
          _ZSt13is_arithmeticIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEE extends _ZSt14__is_nullptr_tIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a);
        }
        __init__ZSt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a) {
        }
        __dtor() {
          _ZSt14__is_nullptr_tIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE extends _ZSt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a);
        }
        __init__ZSt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE extends _ZSt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17is_member_pointerIxESt14__is_nullptr_tIxEE {
        __init__ZSt11conditionalILi0ESt17is_member_pointerIxESt14__is_nullptr_tIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt10is_pointerIxESt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEEE {
        __init__ZSt11conditionalILi0ESt10is_pointerIxESt5__or_ISt17is_member_pointerIxESt14__is_nullptr_tIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_enumIxESt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEEE {
        __init__ZSt11conditionalILi0ESt7is_enumIxESt5__or_ISt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi1ESt13is_arithmeticIxESt5__or_ISt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEEE {
        __init__ZSt11conditionalILi1ESt13is_arithmeticIxESt5__or_ISt7is_enumIxESt10is_pointerIxESt17is_member_pointerIxESt14__is_nullptr_tIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt5__or_ISt12is_referenceIxESt9is_scalarIxEE extends _ZSt9is_scalarIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt12is_referenceIxESt9is_scalarIxEE(...$a);
        }
        __init__ZSt5__or_ISt12is_referenceIxESt9is_scalarIxEE(...$a) {
        }
        __dtor() {
          _ZSt9is_scalarIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt12is_referenceIxESt9is_scalarIxEE {
        __init__ZSt11conditionalILi0ESt12is_referenceIxESt9is_scalarIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt22__is_destructible_safeIxLi0ELi1EE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt22__is_destructible_safeIxLi0ELi1EE(...$a);
        }
        __init__ZSt22__is_destructible_safeIxLi0ELi1EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implIxOxE extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implIxOxE(...$a);
        }
        __init__ZSt30__is_direct_constructible_implIxOxE(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxOxEE extends _ZSt30__is_direct_constructible_implIxOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxOxEE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxOxEE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implIxOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implIxOxESt15is_destructibleIxEE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implIxOxESt15is_destructibleIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIxOxESt34__is_direct_constructible_new_safeIxS1_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIxOxESt34__is_direct_constructible_new_safeIxS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt26__is_nt_constructible_implIxOxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt26__is_nt_constructible_implIxOxE(...$a);
        }
        __init__ZSt26__is_nt_constructible_implIxOxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt16is_constructibleIxOxESt26__is_nt_constructible_implIxS1_EE extends _ZSt26__is_nt_constructible_implIxOxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt16is_constructibleIxOxESt26__is_nt_constructible_implIxS1_EE(...$a);
        }
        __init__ZSt6__and_ISt16is_constructibleIxOxESt26__is_nt_constructible_implIxS1_EE(...$a) {
        }
        __dtor() {
          _ZSt26__is_nt_constructible_implIxOxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt26__is_nt_constructible_implIxOxESt16is_constructibleIxS1_EE {
        __init__ZSt11conditionalILi1ESt26__is_nt_constructible_implIxOxESt16is_constructibleIxS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt29is_nothrow_move_constructibleIxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt29is_nothrow_move_constructibleIxEE(...$a);
        }
        __init__ZSt6__not_ISt29is_nothrow_move_constructibleIxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleIxRKxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleIxRKxE(...$a);
        }
        __init__ZSt16is_constructibleIxRKxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_copy_constructible_implIxLi0EE extends _ZSt16is_constructibleIxRKxE {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_copy_constructible_implIxLi0EE(...$a);
        }
        __init__ZSt28__is_copy_constructible_implIxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt16is_constructibleIxRKxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt21is_copy_constructibleIxE extends _ZSt28__is_copy_constructible_implIxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt21is_copy_constructibleIxE(...$a);
        }
        __init__ZSt21is_copy_constructibleIxE(...$a) {
        }
        __dtor() {
          _ZSt28__is_copy_constructible_implIxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_direct_constructibleIxRxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_direct_constructibleIxRxE(...$a);
        }
        __init__ZSt25__is_direct_constructibleIxRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implIxRKxE extends _ZSt25__is_direct_constructibleIxRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implIxRKxE(...$a);
        }
        __init__ZSt23__is_constructible_implIxRKxE(...$a) {
        }
        __dtor() {
          _ZSt25__is_direct_constructibleIxRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt34__is_direct_constructible_ref_castIxRxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_ref_castIxRxE(...$a);
        }
        __init__ZSt34__is_direct_constructible_ref_castIxRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_static_castableIRxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_static_castableIRxxE(...$a);
        }
        __init__ZSt20__is_static_castableIRxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_safeIRxxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_safeIRxxE(...$a);
        }
        __init__ZSt25__is_static_castable_safeIRxxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt25__is_static_castable_implIRxxE extends _ZSt28__do_is_static_castable_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_static_castable_implIRxxE(...$a);
        }
        __init__ZSt25__is_static_castable_implIRxxE(...$a) {
        }
        __dtor() {
          _ZSt28__do_is_static_castable_impl.prototype.__dtor.call(this);
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
      class _ZSt11is_functionIRxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIRxE(...$a);
        }
        __init__ZSt11is_functionIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRxESt11is_functionIS1_EE extends _ZSt11is_functionIRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRxESt11is_functionIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRxESt11is_functionIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt11is_functionIRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRxESt11is_functionIS1_EE {
        __init__ZSt11conditionalILi0ESt7is_voidIRxESt11is_functionIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt7is_voidIRxESt11is_functionIS2_EEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt7is_voidIRxESt11is_functionIS2_EEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt7is_voidIRxESt11is_functionIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt24__is_base_to_derived_refIRxxLi1EE {
        constructor(...$a) {
          this.__init__ZSt24__is_base_to_derived_refIRxxLi1EE(...$a);
        }
        __init__ZSt24__is_base_to_derived_refIRxxLi1EE(...$a) {
        }
        __dtor() {
        }
        static value = 0;
      }
      class _ZSt6__and_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIxEE extends _ZSt19is_rvalue_referenceIxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIxEE(...$a);
        }
        __init__ZSt6__and_ISt19is_lvalue_referenceIRxESt19is_rvalue_referenceIxEE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_rvalue_referenceIxESt19is_lvalue_referenceIRxEE {
        __init__ZSt11conditionalILi1ESt19is_rvalue_referenceIxESt19is_lvalue_referenceIRxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt25__is_lvalue_to_rvalue_refIRxxLi0EE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt25__is_lvalue_to_rvalue_refIRxxLi0EE(...$a);
        }
        __init__ZSt25__is_lvalue_to_rvalue_refIRxxLi0EE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE extends _ZSt25__is_lvalue_to_rvalue_refIRxxLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a);
        }
        __init__ZSt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a) {
        }
        __dtor() {
          _ZSt25__is_lvalue_to_rvalue_refIRxxLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16remove_referenceIRxE {
        __init__ZSt16remove_referenceIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE {
        __init__ZSt11conditionalILi0ESt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE(...$a);
        }
        __init__ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt20__is_static_castableIRxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE extends _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt20__is_static_castableIRxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE(...$a);
        }
        __init__ZSt6__and_ISt20__is_static_castableIRxxESt6__not_ISt5__or_ISt24__is_base_to_derived_refIS1_xLi1EESt25__is_lvalue_to_rvalue_refIS1_xLi0EEEEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS2_xLi0EEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS3_xLi0EEEESt20__is_static_castableIS3_xEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt5__or_ISt24__is_base_to_derived_refIRxxLi1EESt25__is_lvalue_to_rvalue_refIS3_xLi0EEEESt20__is_static_castableIS3_xEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt34__is_direct_constructible_new_safeIxRxE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt34__is_direct_constructible_new_safeIxRxE(...$a);
        }
        __init__ZSt34__is_direct_constructible_new_safeIxRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt29__is_direct_constructible_newIxRxE extends _ZSt34__is_direct_constructible_new_safeIxRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt29__is_direct_constructible_newIxRxE(...$a);
        }
        __init__ZSt29__is_direct_constructible_newIxRxE(...$a) {
        }
        __dtor() {
          _ZSt34__is_direct_constructible_new_safeIxRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt30__is_direct_constructible_implIxRxE extends _ZSt33__do_is_direct_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt30__is_direct_constructible_implIxRxE(...$a);
        }
        __init__ZSt30__is_direct_constructible_implIxRxE(...$a) {
        }
        __dtor() {
          _ZSt33__do_is_direct_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxRxEE extends _ZSt30__is_direct_constructible_implIxRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxRxEE(...$a);
        }
        __init__ZSt6__and_ISt15is_destructibleIxESt30__is_direct_constructible_implIxRxEE(...$a) {
        }
        __dtor() {
          _ZSt30__is_direct_constructible_implIxRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt30__is_direct_constructible_implIxRxESt15is_destructibleIxEE {
        __init__ZSt11conditionalILi1ESt30__is_direct_constructible_implIxRxESt15is_destructibleIxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIxRxESt34__is_direct_constructible_new_safeIxS1_EE {
        __init__ZSt11conditionalILi0ESt34__is_direct_constructible_ref_castIxRxESt34__is_direct_constructible_new_safeIxS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIxEESt21is_copy_constructibleIxEE extends _ZSt6__not_ISt29is_nothrow_move_constructibleIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIxEESt21is_copy_constructibleIxEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt29is_nothrow_move_constructibleIxEESt21is_copy_constructibleIxEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt29is_nothrow_move_constructibleIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt21is_copy_constructibleIxESt6__not_ISt29is_nothrow_move_constructibleIxEEE {
        __init__ZSt11conditionalILi0ESt21is_copy_constructibleIxESt6__not_ISt29is_nothrow_move_constructibleIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13move_iteratorIPxE {
        _M_current$_ZSt13move_iteratorIPxE;
        constructor(...$a) {
          this.__init__ZSt13move_iteratorIPxE(...$a);
        }
        __init__ZSt13move_iteratorIPxE(...$a) {
          let $t11;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIPxE)) {
            this._M_current$_ZSt13move_iteratorIPxE = ($t11 = _ZSt13move_iteratorIPxE.prototype._ZNKSt13move_iteratorIPxE4baseEv.call(($a[0]).a[($a[0]).i]), $t11 ? {a: $t11.a, i: $t11.i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_current$_ZSt13move_iteratorIPxE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt13move_iteratorIPxE4baseEv() {
          return (this._M_current$_ZSt13move_iteratorIPxE ? {a: this._M_current$_ZSt13move_iteratorIPxE.a, i: this._M_current$_ZSt13move_iteratorIPxE.i} : null);
        }
        _ZNKSt13move_iteratorIPxEdeEv() {
          return _ZSt4moveIxEOxS_(this._M_current$_ZSt13move_iteratorIPxE);
        }
        _ZNSt13move_iteratorIPxEppEv() {
          ++this._M_current$_ZSt13move_iteratorIPxE.i;
          return {a: [this], i: 0};
        }
      }
      class _ZSt11conditionalILi0EPxSt13move_iteratorIS0_EE {
        __init__ZSt11conditionalILi0EPxSt13move_iteratorIS0_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a);
        }
        __init__ZSt23__has_iterator_categoryIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE {
        __init__ZSt9remove_cvIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE {
        __init__ZSt15remove_volatileIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE {
        __init__ZSt12remove_constIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a);
        }
        __init__ZSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZNSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE10_Wrap_typeISt26random_access_iterator_tagEE {
        __init__ZNSt30__has_iterator_category_helperIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE10_Wrap_typeISt26random_access_iterator_tagEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE {
        __init__ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE extends _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a);
        }
        __init__ZSt15iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17__iterator_traitsIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19__declval_protectorIOxE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIOxE(...$a);
        }
        __init__ZSt19__declval_protectorIOxE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
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
      class _ZSt18__is_move_iteratorIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE {
        __init__ZSt18__is_move_iteratorIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE {
        __init__ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE7_S_baseES7_(__it) {
          return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__it], i: 0});
        }
      }
      class _ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE extends _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a);
        }
        __init__ZSt11_Miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5tuple {
        __init__ZSt5tuple(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20__is_normal_iteratorIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE {
        __init__ZSt20__is_normal_iteratorIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE {
        __init__ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE(...$a) { }
        __dtor() {
        }
        static _ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE7_S_baseES7_(__it) {
          let $t12, $t13;
          return ($t12 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__it), $t13 = ($t12 ? $t12.a[$t12.i] : null), $t13 && $t13.a !== undefined ? {a: $t13.a, i: $t13.i} : $t13);
        }
      }
      class _ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE extends _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a);
        }
        __init__ZSt11_Niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEE(...$a) {
        }
        __dtor() {
          _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12__is_pointerIPxE {
        __init__ZSt12__is_pointerIPxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10__are_sameIxxE {
        __init__ZSt10__are_sameIxxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE {
        __init__ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE(...$a) { }
        __dtor() {
        }
        static _ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIxEEPxPKxS3_S2_(__first, __last, __result) {
          let $t14;
          let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
          if (_Num) {
            (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(8, ((_Num) >>> 0))) >>> 0)) / 8));
          }
          return ($t14 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t14 ? {a: $t14.a, i: $t14.i} : null);
        }
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _ZSt4__lgl(__n) {
        return ((((((((((Math.imul(4, ((8) >>> 0))) >>> 0)) - (((1) >>> 0))) >>> 0)) - (((Math.clz32(__n)) >>> 0))) >>> 0)) | 0);
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 6, (__n ? ((1) | 0) : ((0) | 0)), null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEj(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 1, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE8_M_putllEix.call(__os.a[__os.i], 3, __n);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE8_M_putllEix.call(__os.a[__os.i], 2, BigInt.asIntN(64, __n));
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
      function _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERx(__in, __v) {
        __v.a[__v.i] = _ZSt13basic_istreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_istreamIcSt11char_traitsIcEE11_M_read_intEv.call(__in.a[__in.i]);
        return __in;
      }
      function _ZSt4swapIxEvRxS_(__a, __b) {
        let $t15, $t16, $t17;
        let __tmp = {v: ($t15 = _ZSt4moveIxEOxS_(__a), $t15.a[$t15.i])};
        __a.a[__a.i] = ($t16 = _ZSt4moveIxEOxS_(__b), $t16.a[$t16.i]);
        __b.a[__b.i] = ($t17 = _ZSt4moveIxEOxS_({a: __tmp, i: "v"}), $t17.a[$t17.i]);
      }
      function _ZStneIPxS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        return (!(_ZSteqIPxS_EbRKSt13move_iteratorIS_ES0_(__x, __y)));
      }
      function _Z3cmpxx(a, b) {
        return (a > b);
      }
      function main() {
        let $t18, $t19, $t20, $t21, $t22, $t23;
        let mx = 9223372036854775807n;
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (mx) + (1n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (BigInt.asIntN(64, (BigInt.asIntN(64, -(9223372036854775807n))) - (1n))) - (1n))), {a: [_ZSt4endl], i: 0});
        let um = 18446744073709551615n;
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy({a: _ZSt4cout, i: "v"}, BigInt.asUintN(64, (um) + (1n))), {a: [32, 0], i: 0}), BigInt.asUintN(64, (um) * (3n))), {a: [32, 0], i: 0}), ((um) >> (1n))), {a: [_ZSt4endl], i: 0});
        let n = BigInt(((-(7)) | 0));
        let k = 2;
        let u = ((5) >>> 0);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (n) / (BigInt(k)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) % (BigInt(k)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) / (BigInt(((-(2)) | 0))))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) % (BigInt(((-(2)) | 0))))), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (n) + (BigInt(u)))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (BigInt.asIntN(64, (n) * (BigInt(k)))) - (1n))), {a: [32, 0], i: 0}), (n < BigInt(u))), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (n) << (40n))), {a: [32, 0], i: 0}), ((n) >> (1n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (1n) << (62n))), {a: [32, 0], i: 0}), BigInt.asUintN(64, (1n) << (63n))), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (n) & (255n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) | (3n))), {a: [32, 0], i: 0}), BigInt.asIntN(64, (n) ^ (BigInt(((-(1)) | 0))))), {a: [32, 0], i: 0}), BigInt.asIntN(64, ~(n))), {a: [_ZSt4endl], i: 0});
        let h = 14695981039346656037n;
        for (let i = 0; (i < 5); ($t18 = i, i = (($t18 + 1) | 0), $t18)) {
           {
            h = BigInt.asUintN(64, (h) ^ (BigInt.asUintN(64, BigInt((((i) + (1)) | 0)))));
            h = BigInt.asUintN(64, (h) * (1099511628211n));
          }
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy({a: _ZSt4cout, i: "v"}, h), {a: [_ZSt4endl], i: 0});
        let v = new _ZSt6vectorIxSt9allocatorIxEE();
        let x = {v: 0n};
        while ((($t19 = _ZStrsRSt13basic_istreamIcSt11char_traitsIcEERx({a: _ZSt3cin, i: "v"}, {a: x, i: "v"}), $t19.a[$t19.i]))._ZNKSt13basic_istreamIcSt11char_traitsIcEEcvbEv()) {
          _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNSt6vectorIxSt9allocatorIxEE9push_backERKx.call(v, {a: x, i: "v"});
        }
        _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(_ZSt6vectorIxSt9allocatorIxEE.prototype._ZNSt6vectorIxSt9allocatorIxEE5beginEv.call(v), _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNSt6vectorIxSt9allocatorIxEE3endEv.call(v), _Z3cmpxx);
        for (let i = ((0) >>> 0); (i < _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv.call(v)); ($t20 = i, i = (($t20 + 1) >>> 0), $t20)) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, ($t21 = v._ZNSt6vectorIxSt9allocatorIxEEixEm(i), $t21.a[$t21.i])), (((((i) + (((1) >>> 0))) >>> 0) < _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv.call(v)) ? {a: [32, 0], i: 0} : {a: [10, 0], i: 0}));
        }
        let s = 0n;
        for (let i = ((0) >>> 0); (i < _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv.call(v)); ($t22 = i, i = (($t22 + 1) >>> 0), $t22)) {
          s = BigInt.asIntN(64, (s) + (($t23 = v._ZNSt6vectorIxSt9allocatorIxEEixEm(i), $t23.a[$t23.i])));
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, s), {a: [_ZSt4endl], i: 0});
        let ci = ((-(1)) | 0);
        let cu = ((ci) >>> 0);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEj(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEj({a: _ZSt4cout, i: "v"}, cu), {a: [32, 0], i: 0}), (((cu) + (((1) >>> 0))) >>> 0)), {a: [32, 0], i: 0}), BigInt.asUintN(64, BigInt(ci))), {a: [_ZSt4endl], i: 0});
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEb(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (BigInt(cu)) * (2n))), {a: [32, 0], i: 0}), (BigInt(ci) < 0n)), {a: [_ZSt4endl], i: 0});
        switch (s) {
          case 0n:
            _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [122, 101, 114, 111, 0], i: 0}), {a: [_ZSt4endl], i: 0});
          break;
          default:
            _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc({a: _ZSt4cout, i: "v"}, {a: [110, 122, 0], i: 0}), {a: [_ZSt4endl], i: 0});
        }
        return 0;
      }
      function _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        if (_ZN9__gnu_cxxneIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
           {
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElPFbxxEEvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), ((Math.imul(_ZSt4__lgl(_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
            _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZN9__gnu_cxxneIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t24, $t25, $t26, $t27, $t28, $t29;
        return ($t28 = (($t26 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t26) ? (($t26 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t26)).a[(($t26 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t26)).i] : null), $t29 = (($t27 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t27) ? (($t27 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t27)).a[(($t27 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t27)).i] : null), (!($t28 === $t29 || ($t28 && $t29 && $t28.a === $t29.a && $t28.i === $t29.i))));
      }
      function _ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t30, $t31, $t32, $t33, $t34, $t35;
        return ($t34 = (($t32 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t32) ? (($t32 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t32)).a[(($t32 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t32)).i] : null), $t35 = (($t33 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t33) ? (($t33 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t33)).a[(($t33 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t33)).i] : null), (($t34 ? $t34.i : 0) - ($t35 ? $t35.i : 0)));
      }
      function _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElPFbxxEEvS6_S6_lS7_(__first, __last, __depth_limit, __comp) {
        while ((_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEES6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElPFbxxEEvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__cut], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __depth_limit, __comp);
            __last._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEaSERS6_({a: [__cut], i: 0});
          }
        }
      }
      function _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        if ((_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [((16) | 0)], i: 0}), __comp);
            _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [((16) | 0)], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
          }
        }
        else {
          _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
        }
      }
      function _ZSt7forwardIxEOxS_(__t) {
        return __t;
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIPxS_St9allocatorIxEES_S_S_S_RS1_(__first, __last, __result, __alloc) {
        let $t36;
        return ($t36 = _ZSt22__uninitialized_copy_aISt13move_iteratorIPxES0_St9allocatorIxEES0_S1_S1_S0_RS3_(_ZSt32__make_move_if_noexcept_iteratorIPxSt13move_iteratorIS_EES1_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIPxSt13move_iteratorIS_EES1_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t36 ? {a: $t36.a, i: $t36.i} : null);
      }
      function _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_(__first, __last, __alloc) {
        let $t37;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE7destroyIxEEvRS2_Px(__alloc, ($t37 = _ZSt11__addressofIxEPxRx(__first), $t37 ? {a: $t37.a, i: $t37.i} : null));
        }
      }
      function _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
        _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__middle], i: 0}), __comp);
      }
      function _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEES6_S6_S6_S7_(__first, __last, __comp) {
        let __mid = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [((Math.trunc((_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
        _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__mid], i: 0}), __last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmiERKl({a: [1], i: 0}), __comp);
        return _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEExPFbxxEES6_S6_S6_RKxS7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [1], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), __comp);
      }
      function _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        let $t38, $t39, $t40;
        if (_ZN9__gnu_cxxeqIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return;
        }
        for (let __i = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [1], i: 0}); _ZN9__gnu_cxxneIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv()) {
           {
            if (__comp((__i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
               {
                let __val = {v: ($t38 = _ZSt4moveIxEOxS_(__i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t38.a[$t38.i])};
                _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_ES6_S6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__i], i: 0}), __i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [1], i: 0}));
                ($t39 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t39.a[$t39.i] = ($t40 = _ZSt4moveIxEOxS_({a: __val, i: "v"}), $t40.a[$t40.i]));
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__i], i: 0}), __comp);
            }
          }
        }
      }
      function _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}); _ZN9__gnu_cxxneIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv()) {
          _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__i], i: 0}), __comp);
        }
      }
      function _ZSt3maxImERKmS_S_(__a, __b) {
        if ((__a.a[__a.i] < __b.a[__b.i])) {
          return __b;
        }
        return __a;
      }
      function _ZSt7declvalIOxES_v() {
        return _ZSt19__declval_protectorIOxE._ZNSt19__declval_protectorIOxE10__delegateEv();
      }
      function _ZSt7declvalIRxES_v() {
        return _ZSt19__declval_protectorIRxE._ZNSt19__declval_protectorIRxE10__delegateEv();
      }
      function _ZSt32__make_move_if_noexcept_iteratorIPxSt13move_iteratorIS_EES1_S_(__i) {
        return new _ZSt13move_iteratorIPxE((__i ? {a: __i.a, i: __i.i} : null));
      }
      function _ZSt22__uninitialized_copy_aISt13move_iteratorIPxES0_St9allocatorIxEES0_S1_S1_S0_RS3_(__first, __last, __result, __alloc) {
        let $t41;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIPxS_EbRKSt13move_iteratorIS_ES0_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIPxEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructIxEEvRS2_PxRKx(__alloc, ($t41 = _ZSt11__addressofIxEPxRx(__cur), $t41 ? {a: $t41.a, i: $t41.i} : null), __first._ZNKSt13move_iteratorIPxEdeEv());
            }
            return (__cur ? {a: __cur.a, i: __cur.i} : null);
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_((__result ? {a: __result.a, i: __result.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
      }
      function _ZSt11__addressofIxEPxRx(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__middle], i: 0}), __comp);
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__middle], i: 0}); _ZN9__gnu_cxxltIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv()) {
          if (__comp((__i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__i], i: 0}), __comp);
          }
        }
      }
      function _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        while ((_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
           {
            __last._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv();
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(__a, __b, __c, __comp) {
        if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
           {
            if (__comp((__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__b], i: 0}));
            }
            else {
              if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
                _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__c], i: 0}));
              }
            }
          }
        }
        else {
          if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
            return;
          }
          else {
            if (__comp((__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__c], i: 0}));
            }
            else {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__b], i: 0}));
            }
          }
        }
      }
      function _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEExPFbxxEES6_S6_S6_RKxS7_(__first, __last, __pivot, __comp) {
        while (true) {
           {
            while (__comp((__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i], __pivot.a[__pivot.i])) {
              __first._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv();
            }
            __last._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv();
            while (__comp(__pivot.a[__pivot.i], (__last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
              __last._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv();
            }
            if ((!(_ZN9__gnu_cxxltIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})))) {
              return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0});
            }
            _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0}));
            __first._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEppEv();
          }
        }
      }
      function _ZN9__gnu_cxxeqIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t42, $t43, $t44, $t45, $t46, $t47;
        return ($t46 = (($t44 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t44) ? (($t44 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t44)).a[(($t44 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t44)).i] : null), $t47 = (($t45 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t45) ? (($t45 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t45)).a[(($t45 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t45)).i] : null), ($t46 === $t47 || ($t46 && $t47 && $t46.a === $t47.a && $t46.i === $t47.i)));
      }
      function _ZSt4moveIxEOxS_(__t) {
        return __t;
      }
      function _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        return _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_ES6_S6_S6_S6_(_ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0})), _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0})), new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__result], i: 0}));
      }
      function _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S7_(__last, __comp) {
        let $t48, $t49, $t50, $t51, $t52;
        let __val = {v: ($t48 = _ZSt4moveIxEOxS_(__last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t48.a[$t48.i])};
        let __next = new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0});
        __next._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv();
        while (__comp(__val.v, (__next._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).a[(__next._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()).i])) {
           {
            ($t49 = __last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t49.a[$t49.i] = ($t50 = _ZSt4moveIxEOxS_(__next._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t50.a[$t50.i]));
            __last._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEaSERS6_({a: [__next], i: 0});
            __next._ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEmmEv();
          }
        }
        ($t51 = __last._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t51.a[$t51.i] = ($t52 = _ZSt4moveIxEOxS_({a: __val, i: "v"}), $t52.a[$t52.i]));
      }
      function _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S7_(__first, __last, __comp) {
        let $t53, $t54, $t55, $t56;
        if ((_ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
          return;
        }
        let __len = _ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0});
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t53 = _ZSt4moveIxEOxS_((($t54 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__parent], i: 0}), $t54))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t53.a[$t53.i])};
            _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElxPFbxxEEvS6_llxS7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), __parent, __len, ($t55 = _ZSt4moveIxEOxS_({a: __value, i: "v"}), $t55.a[$t55.i]), __comp);
            if ((__parent === 0)) {
              return;
            }
            ($t56 = __parent, __parent = (($t56 - 1) | 0), $t56);
          }
        }
      }
      function _ZN9__gnu_cxxltIPxS0_St6vectorIxSt9allocatorIxEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t57, $t58, $t59, $t60, $t61, $t62;
        return ($t61 = (($t59 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t59) ? (($t59 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t59)).a[(($t59 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__lhs.a[__lhs.i]), $t59)).i] : null), $t62 = (($t60 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t60) ? (($t60 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t60)).a[(($t60 = _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEE4baseEv.call(__rhs.a[__rhs.i]), $t60)).i] : null), (($t61 ? $t61.i : 0) < ($t62 ? $t62.i : 0)));
      }
      function _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEPFbxxEEvS6_S6_S6_S7_(__first, __last, __result, __comp) {
        let $t63, $t64, $t65, $t66;
        let __value = {v: ($t63 = _ZSt4moveIxEOxS_(__result._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t63.a[$t63.i])};
        ($t64 = __result._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t64.a[$t64.i] = ($t65 = _ZSt4moveIxEOxS_(__first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t65.a[$t65.i]));
        _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElxPFbxxEEvS6_llxS7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), 0, _ZN9__gnu_cxxmiIPxS0_St6vectorIxSt9allocatorIxEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}), ($t66 = _ZSt4moveIxEOxS_({a: __value, i: "v"}), $t66.a[$t66.i]), __comp);
      }
      function _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_EvS6_S6_(__a, __b) {
        _ZSt4swapIxEvRxS_(__a._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), __b._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv());
      }
      function _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES6_S6_(__it) {
        return _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi0EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__it], i: 0}));
      }
      function _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        let $t67, $t68, $t69;
        return new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [_ZSt22__copy_move_backward_aILi1EPxS_ES_S_S_S_(($t67 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0})), $t67 ? {a: $t67.a, i: $t67.i} : null), ($t68 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__last], i: 0})), $t68 ? {a: $t68.a, i: $t68.i} : null), ($t69 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__result], i: 0})), $t69 ? {a: $t69.a, i: $t69.i} : null))], i: 0});
      }
      function _ZSteqIPxS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        let $t70, $t71, $t72, $t73;
        return ($t72 = ($t70 = _ZSt13move_iteratorIPxE.prototype._ZNKSt13move_iteratorIPxE4baseEv.call(__x.a[__x.i]), $t70), $t73 = ($t71 = _ZSt13move_iteratorIPxE.prototype._ZNKSt13move_iteratorIPxE4baseEv.call(__y.a[__y.i]), $t71), ($t72 === $t73 || ($t72 && $t73 && $t72.a === $t73.a && $t72.i === $t73.i)));
      }
      function _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElxPFbxxEEvS6_llxS7_(__first, __holeIndex, __len, __value, __comp) {
        let $t74, $t75, $t76, $t77, $t78, $t79, $t80, $t81, $t82, $t83, $t84, $t85, $t86, $t87;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if (__comp(($t74 = (($t75 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__secondChild], i: 0}), $t75))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t74.a[$t74.i]), ($t76 = (($t77 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t77))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t76.a[$t76.i]))) {
              ($t78 = __secondChild, __secondChild = (($t78 - 1) | 0), $t78);
            }
            ($t79 = (($t82 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__holeIndex], i: 0}), $t82))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t79.a[$t79.i] = ($t80 = _ZSt4moveIxEOxS_((($t81 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__secondChild], i: 0}), $t81))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t80.a[$t80.i]));
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            ($t83 = (($t86 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__holeIndex], i: 0}), $t86))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t83.a[$t83.i] = ($t84 = _ZSt4moveIxEOxS_((($t85 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t85))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t84.a[$t84.i]));
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElxPFbxxEEvS6_llxS7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__first], i: 0}), __holeIndex, __topIndex, ($t87 = _ZSt4moveIxEOxS_({a: __value, i: "v"}), $t87.a[$t87.i]), __comp);
      }
      function _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEEES1_S6_(__it) {
        let $t88;
        return ($t88 = _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEELi1EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEE({a: [__it], i: 0})), $t88 ? {a: $t88.a, i: $t88.i} : null);
      }
      function _ZSt22__copy_move_backward_aILi1EPxS_ES_S_S_S_(__first, __last, __result) {
        let $t89;
        let __simple = (((1 && 1) && 1) && 1);
        return ($t89 = _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE._ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIxEEPxPKxS3_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t89 ? {a: $t89.a, i: $t89.i} : null);
      }
      function _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEElxPFbxxEEvS6_llxS7_(__first, __holeIndex, __topIndex, __value, __comp) {
        let $t90, $t91, $t92, $t93, $t94, $t95, $t96, $t97, $t98;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && __comp(($t90 = (($t91 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__parent], i: 0}), $t91))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t90.a[$t90.i]), __value.v))) {
           {
            ($t92 = (($t95 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__holeIndex], i: 0}), $t95))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t92.a[$t92.i] = ($t93 = _ZSt4moveIxEOxS_((($t94 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__parent], i: 0}), $t94))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv()), $t93.a[$t93.i]));
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        ($t96 = (($t98 = __first._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEplERKl({a: [__holeIndex], i: 0}), $t98))._ZNK9__gnu_cxx17__normal_iteratorIPxSt6vectorIxSt9allocatorIxEEEdeEv(), $t96.a[$t96.i] = ($t97 = _ZSt4moveIxEOxS_({a: __value, i: "v"}), $t97.a[$t97.i]));
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
      let _ZSt4cout = {v: new _ZSt13basic_ostreamIcSt11char_traitsIcEE(1)};
      let _ZSt4cerr = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(2);
      let _ZSt4clog = new _ZSt13basic_ostreamIcSt11char_traitsIcEE(3);
      let _ZSt3cin = {v: new _ZSt13basic_istreamIcSt11char_traitsIcEE(0)};
      let _ZSt13allocator_arg = new _ZSt15allocator_arg_t();
      let _ZSt6ignore = new _ZSt15_Swallow_assign();
      let _ZN9__gnu_cxx21__default_lock_policyE = 0;
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
