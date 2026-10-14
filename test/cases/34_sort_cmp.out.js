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
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE = new _ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE($a[0]);
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE";
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
          super(...[($a[1] === undefined ? ({a: [new _ZSt9allocatorIiE()], i: 0}) : $a[1])]);
          this.__init__ZSt6vectorIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt6vectorIiSt9allocatorIiEE(...$a) {
          let $t3, $t4;
          this._ZNSt6vectorIiSt9allocatorIiEE19_M_range_initializeIPiEEvS3_S3_St18input_iterator_tag(($t3 = ({a: $a[0], i: 0}), $t3 ? {a: $t3.a, i: $t3.i} : null), ($t4 = ({a: $a[0], i: ($a[0]).length}), $t4 ? {a: $t4.a, i: $t4.i} : null), new _ZSt26random_access_iterator_tag());
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
        _ZNSt6vectorIiSt9allocatorIiEEixEm(__n) {
          return ({a: (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i : 0) + (__n)});
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
      class _ZNSt9allocatorIiE6rebindIiEE {
        __init__ZNSt9allocatorIiE6rebindIiEE(...$a) { }
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
          let $t14, $t15;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = (((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE) ? {a: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).a, i: ((($a[0]).a[($a[0]).i])._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE)) {
            this._M_current$_ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE = ($t14 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(($a[0]).a[($a[0]).i]), $t15 = ($t14 ? $t14.a[$t14.i] : null), $t15 && $t15.a !== undefined ? {a: $t15.a, i: $t15.i} : $t15);
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
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
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
          let $t16;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIPiE)) {
            this._M_current$_ZSt13move_iteratorIPiE = ($t16 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(($a[0]).a[($a[0]).i]), $t16 ? {a: $t16.a, i: $t16.i} : null);
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
          let $t17, $t18;
          return ($t17 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__it), $t18 = ($t17 ? $t17.a[$t17.i] : null), $t18 && $t18.a !== undefined ? {a: $t18.a, i: $t18.i} : $t18);
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
          let $t19;
          let _Num = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
          if (_Num) {
            (($d, $s, $n) => { const $t = $s.a.slice($s.i, $s.i + $n); for (let $k = 0; $k < $n; $k++) $d.a[$d.i + $k] = $t[$k]; return $d; })((($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)})), (($q) => ($q && $q.a !== undefined ? $q : { a: $q, i: 0 }))(__first), Math.trunc((((Math.imul(4, ((_Num) >>> 0))) >>> 0)) / 4));
          }
          return ($t19 = ({a: (__result ? __result.a : null), i: (__result ? __result.i : 0) - (_Num)}), $t19 ? {a: $t19.a, i: $t19.i} : null);
        }
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
        let $t20, $t21, $t22;
        let __tmp = {v: ($t20 = _ZSt4moveIiEOiS_(__a), $t20.a[$t20.i])};
        __a.a[__a.i] = ($t21 = _ZSt4moveIiEOiS_(__b), $t21.a[$t21.i]);
        __b.a[__b.i] = ($t22 = _ZSt4moveIiEOiS_({a: __tmp, i: "v"}), $t22.a[$t22.i]);
      }
      function _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        return (!(_ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y)));
      }
      function _Z3cmpii(a, b) {
        return (a > b);
      }
      function main() {
        let $t23, $t24, $t25, $t26, $t27, $t28;
        let v = new _ZSt6vectorIiSt9allocatorIiEE([3, 1, 4, 1, 5, 9, 2, 6], {a: [new _ZSt9allocatorIiE()], i: 0});
        _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), _Z3cmpii);
        for (let i = ((0) >>> 0); (i < _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(v)); ($t23 = i, i = (($t23 + 1) >>> 0), $t23)) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ($t24 = v._ZNSt6vectorIiSt9allocatorIiEEixEm(i), $t24.a[$t24.i])), {a: [32, 0], i: 0});
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op({a: _ZSt4cout, i: "v"}, {a: [_ZSt4endl], i: 0});
        let a = [5, 2, 8, 1, 9];
        _ZSt4sortIPiPFbiiEEvS_S_S0_({a: a, i: 0}, ($t25 = ({a: (({a: a, i: 0}) ? (({a: a, i: 0})).a : null), i: (({a: a, i: 0}) ? (({a: a, i: 0})).i : 0) + (5)}), $t25 ? {a: $t25.a, i: $t25.i} : null), _Z3cmpii);
        for (let i = 0; (i < 5); ($t26 = i, i = (($t26 + 1) | 0), $t26)) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, a[i]), {a: [32, 0], i: 0});
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op({a: _ZSt4cout, i: "v"}, {a: [_ZSt4endl], i: 0});
        _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5beginEv.call(v), _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE3endEv.call(v), {_ZNK11$24lambda_0clEii: (x, y) => {
    return (x < y);
  }});
        for (let i = ((0) >>> 0); (i < _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(v)); ($t27 = i, i = (($t27 + 1) >>> 0), $t27)) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, ($t28 = v._ZNSt6vectorIiSt9allocatorIiEEixEm(i), $t28.a[$t28.i])), {a: [32, 0], i: 0});
        }
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op({a: _ZSt4cout, i: "v"}, {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        if (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
           {
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElPFbiiEEvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), ((Math.imul(_ZSt4__lgl(_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
            _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZSt4sortIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        if ((!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i)))) {
           {
            _ZSt16__introsort_loopIPilPFbiiEEvS_S_lS0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), ((Math.imul(_ZSt4__lgl(((__last ? __last.i : 0) - (__first ? __first.i : 0))), 2)) | 0), __comp);
            _ZSt22__final_insertion_sortIPiPFbiiEEvS_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
      }
      function _ZSt4sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        if (_ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
           {
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEl11$24lambda_0EvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), ((Math.imul(_ZSt4__lgl(_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})), 2)) | 0), __comp);
            _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t29, $t30, $t31, $t32, $t33, $t34;
        return ($t33 = (($t31 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t31) ? (($t31 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t31)).a[(($t31 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t31)).i] : null), $t34 = (($t32 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t32) ? (($t32 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t32)).a[(($t32 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t32)).i] : null), (!($t33 === $t34 || ($t33 && $t34 && $t33.a === $t34.a && $t33.i === $t34.i))));
      }
      function _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t35, $t36, $t37, $t38, $t39, $t40;
        return ($t39 = (($t37 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t37) ? (($t37 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t37)).a[(($t37 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t37)).i] : null), $t40 = (($t38 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t38) ? (($t38 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t38)).a[(($t38 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t38)).i] : null), (($t39 ? $t39.i : 0) - ($t40 ? $t40.i : 0)));
      }
      function _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElPFbiiEEvS6_S6_lS7_(__first, __last, __depth_limit, __comp) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEES6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEElPFbiiEEvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__cut], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __depth_limit, __comp);
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__cut], i: 0});
          }
        }
      }
      function _ZSt16__introsort_loopIPilPFbiiEEvS_S_lS0_(__first, __last, __depth_limit, __comp) {
        let $t41;
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIPiPFbiiEEvS_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = ($t41 = _ZSt27__unguarded_partition_pivotIPiPFbiiEES_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp), $t41 ? {a: $t41.a, i: $t41.i} : null);
            _ZSt16__introsort_loopIPilPFbiiEEvS_S_lS0_((__cut ? {a: __cut.a, i: __cut.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __depth_limit, __comp);
            __last = (__cut ? {a: __cut.a, i: __cut.i} : null);
          }
        }
      }
      function _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEl11$24lambda_0EvS6_S6_lS7_(__first, __last, __depth_limit, __comp) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            if ((__depth_limit === 0)) {
               {
                _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
                return;
              }
            }
            (__depth_limit = ((__depth_limit - 1) | 0));
            let __cut = _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0ES6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
            _ZSt16__introsort_loopIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEl11$24lambda_0EvS6_S6_lS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__cut], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __depth_limit, __comp);
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__cut], i: 0});
          }
        }
      }
      function _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}), __comp);
            _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
        else {
          _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
        }
      }
      function _ZSt22__final_insertion_sortIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        let $t42, $t43;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIPiPFbiiEEvS_S_S0_((__first ? {a: __first.a, i: __first.i} : null), ($t42 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t42 ? {a: $t42.a, i: $t42.i} : null), __comp);
            _ZSt26__unguarded_insertion_sortIPiPFbiiEEvS_S_S0_(($t43 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((16) | 0))}), $t43 ? {a: $t43.a, i: $t43.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
        else {
          _ZSt16__insertion_sortIPiPFbiiEEvS_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
        }
      }
      function _ZSt22__final_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > ((16) | 0))) {
           {
            _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}), __comp);
            _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((16) | 0)], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
        else {
          _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
        }
      }
      function _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
        _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), __comp);
      }
      function _ZSt12partial_sortIPiPFbiiEEvS_S_S_S0_(__first, __middle, __last, __comp) {
        _ZSt13__heap_selectIPiPFbiiEEvS_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
        _ZSt9sort_heapIPiPFbiiEEvS_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
      }
      function _ZSt12partial_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
        _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), __comp);
      }
      function _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEES6_S6_S6_S7_(__first, __last, __comp) {
        let __mid = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((Math.trunc((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
        _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__mid], i: 0}), __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmiERKl({a: [1], i: 0}), __comp);
        return _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiPFbiiEES6_S6_S6_RKiS7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), __comp);
      }
      function _ZSt27__unguarded_partition_pivotIPiPFbiiEES_S_S_S0_(__first, __last, __comp) {
        let $t44, $t45, $t46, $t47;
        let __mid = ($t44 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (((Math.trunc((((__last ? __last.i : 0) - (__first ? __first.i : 0))) / (2))) | 0))}), $t44 ? {a: $t44.a, i: $t44.i} : null);
        _ZSt19__move_median_firstIPiPFbiiEEvS_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__mid ? {a: __mid.a, i: __mid.i} : null), ($t45 = ({a: (__last ? __last.a : null), i: (__last ? __last.i : 0) - (1)}), $t45 ? {a: $t45.a, i: $t45.i} : null), __comp);
        return ($t47 = _ZSt21__unguarded_partitionIPiiPFbiiEES_S_S_RKiS0_(($t46 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t46 ? {a: $t46.a, i: $t46.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __first, __comp), $t47 ? {a: $t47.a, i: $t47.i} : null);
      }
      function _ZSt27__unguarded_partition_pivotIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0ES6_S6_S6_S7_(__first, __last, __comp) {
        let __mid = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [((Math.trunc((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0})) / (2))) | 0)], i: 0});
        _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__mid], i: 0}), __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmiERKl({a: [1], i: 0}), __comp);
        return _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEi11$24lambda_0ES6_S6_S6_RKiS7_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), __comp);
      }
      function _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        let $t48, $t49, $t50;
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return;
        }
        for (let __i = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
           {
            if (__comp((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
               {
                let __val = {v: ($t48 = _ZSt4moveIiEOiS_(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t48.a[$t48.i])};
                _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}));
                ($t49 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t49.a[$t49.i] = ($t50 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t50.a[$t50.i]));
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
            }
          }
        }
      }
      function _ZSt16__insertion_sortIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        let $t51, $t52, $t53, $t54;
        if ((__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))) {
          return;
        }
        for (let __i = ($t51 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (1)}), $t51 ? {a: $t51.a, i: $t51.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
           {
            if (__comp(__i.a[__i.i], __first.a[__first.i])) {
               {
                let __val = {v: ($t52 = _ZSt4moveIiEOiS_(__i), $t52.a[$t52.i])};
                _ZSt13move_backwardIPiS_ES_S_S_S_((__first ? {a: __first.a, i: __first.i} : null), (__i ? {a: __i.a, i: __i.i} : null), ($t53 = ({a: (__i ? __i.a : null), i: (__i ? __i.i : 0) + (1)}), $t53 ? {a: $t53.a, i: $t53.i} : null));
                __first.a[__first.i] = ($t54 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t54.a[$t54.i]);
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIPiPFbiiEEvS_S0_((__i ? {a: __i.a, i: __i.i} : null), __comp);
            }
          }
        }
      }
      function _ZSt16__insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        let $t55, $t56, $t57;
        if (_ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__first], i: 0}, {a: [__last], i: 0})) {
          return;
        }
        for (let __i = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
           {
            if (__comp._ZNK11$24lambda_0clEii((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
               {
                let __val = {v: ($t55 = _ZSt4moveIiEOiS_(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t55.a[$t55.i])};
                _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [1], i: 0}));
                ($t56 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t56.a[$t56.i] = ($t57 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t57.a[$t57.i]));
              }
            }
            else {
              _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
            }
          }
        }
      }
      function _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
        }
      }
      function _ZSt26__unguarded_insertion_sortIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        for (let __i = (__first ? {a: __first.a, i: __first.i} : null); (!(__i === __last || (__i && __last && __i.a === __last.a && __i.i === __last.i))); ++__i.i) {
          _ZSt25__unguarded_linear_insertIPiPFbiiEEvS_S0_((__i ? {a: __i.a, i: __i.i} : null), __comp);
        }
      }
      function _ZSt26__unguarded_insertion_sortIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}); _ZN9__gnu_cxxneIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
        }
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), __comp);
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}); _ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          if (__comp((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
          }
        }
      }
      function _ZSt13__heap_selectIPiPFbiiEEvS_S_S_S0_(__first, __middle, __last, __comp) {
        _ZSt9make_heapIPiPFbiiEEvS_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), __comp);
        for (let __i = (__middle ? {a: __middle.a, i: __middle.i} : null); ((__i ? __i.i : 0) < (__last ? __last.i : 0)); ++__i.i) {
          if (__comp(__i.a[__i.i], __first.a[__first.i])) {
            _ZSt10__pop_heapIPiPFbiiEEvS_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__middle ? {a: __middle.a, i: __middle.i} : null), (__i ? {a: __i.a, i: __i.i} : null), __comp);
          }
        }
      }
      function _ZSt13__heap_selectIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(__first, __middle, __last, __comp) {
        _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), __comp);
        for (let __i = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}); _ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__i], i: 0}, {a: [__last], i: 0}); __i._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv()) {
          if (__comp._ZNK11$24lambda_0clEii((__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__i._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__middle], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__i], i: 0}), __comp);
          }
        }
      }
      function _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
           {
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZSt9sort_heapIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        while ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) > 1)) {
           {
            --__last.i;
            _ZSt10__pop_heapIPiPFbiiEEvS_S_S_S0_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__last ? {a: __last.a, i: __last.i} : null), __comp);
          }
        }
      }
      function _ZSt9sort_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        while ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) > 1)) {
           {
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0}), __comp);
          }
        }
      }
      function _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(__a, __b, __c, __comp) {
        if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            if (__comp((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
            else {
              if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
                _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
              }
            }
          }
        }
        else {
          if (__comp((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            return;
          }
          else {
            if (__comp((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
            }
            else {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
          }
        }
      }
      function _ZSt19__move_median_firstIPiPFbiiEEvS_S_S_S0_(__a, __b, __c, __comp) {
        if (__comp(__a.a[__a.i], __b.a[__b.i])) {
           {
            if (__comp(__b.a[__b.i], __c.a[__c.i])) {
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
            else {
              if (__comp(__a.a[__a.i], __c.a[__c.i])) {
                _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
              }
            }
          }
        }
        else {
          if (__comp(__a.a[__a.i], __c.a[__c.i])) {
            return;
          }
          else {
            if (__comp(__b.a[__b.i], __c.a[__c.i])) {
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__c ? {a: __c.a, i: __c.i} : null));
            }
            else {
              _ZSt9iter_swapIPiS_EvS_S_((__a ? {a: __a.a, i: __a.i} : null), (__b ? {a: __b.a, i: __b.i} : null));
            }
          }
        }
      }
      function _ZSt19__move_median_firstIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(__a, __b, __c, __comp) {
        if (__comp._ZNK11$24lambda_0clEii((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            if (__comp._ZNK11$24lambda_0clEii((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
            else {
              if (__comp._ZNK11$24lambda_0clEii((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
                _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
              }
            }
          }
        }
        else {
          if (__comp._ZNK11$24lambda_0clEii((__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
            return;
          }
          else {
            if (__comp._ZNK11$24lambda_0clEii((__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], (__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__c._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__c], i: 0}));
            }
            else {
              _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__a], i: 0}), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__b], i: 0}));
            }
          }
        }
      }
      function _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEiPFbiiEES6_S6_S6_RKiS7_(__first, __last, __pivot, __comp) {
        while (true) {
           {
            while (__comp((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], __pivot.a[__pivot.i])) {
              __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
            }
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            while (__comp(__pivot.a[__pivot.i], (__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
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
      function _ZSt21__unguarded_partitionIPiiPFbiiEES_S_S_RKiS0_(__first, __last, __pivot, __comp) {
        while (true) {
           {
            while (__comp(__first.a[__first.i], __pivot.a[__pivot.i])) {
              ++__first.i;
            }
            --__last.i;
            while (__comp(__pivot.a[__pivot.i], __last.a[__last.i])) {
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
      function _ZSt21__unguarded_partitionIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEi11$24lambda_0ES6_S6_S6_RKiS7_(__first, __last, __pivot, __comp) {
        while (true) {
           {
            while (__comp._ZNK11$24lambda_0clEii((__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i], __pivot.a[__pivot.i])) {
              __first._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEppEv();
            }
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
            while (__comp._ZNK11$24lambda_0clEii(__pivot.a[__pivot.i], (__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
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
      function _ZN9__gnu_cxxeqIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t58, $t59, $t60, $t61, $t62, $t63;
        return ($t62 = (($t60 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t60) ? (($t60 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t60)).a[(($t60 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t60)).i] : null), $t63 = (($t61 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t61) ? (($t61 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t61)).a[(($t61 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t61)).i] : null), ($t62 === $t63 || ($t62 && $t63 && $t62.a === $t63.a && $t62.i === $t63.i)));
      }
      function _ZSt4moveIiEOiS_(__t) {
        return __t;
      }
      function _ZSt13move_backwardIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        return _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(_ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0})), _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0})), new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__result], i: 0}));
      }
      function _ZSt13move_backwardIPiS_ES_S_S_S_(__first, __last, __result) {
        let $t64, $t65, $t66;
        return ($t66 = _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(($t64 = _ZSt12__miter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t64 ? {a: $t64.a, i: $t64.i} : null), ($t65 = _ZSt12__miter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t65 ? {a: $t65.a, i: $t65.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t66 ? {a: $t66.a, i: $t66.i} : null);
      }
      function _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S7_(__last, __comp) {
        let $t67, $t68, $t69, $t70, $t71;
        let __val = {v: ($t67 = _ZSt4moveIiEOiS_(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t67.a[$t67.i])};
        let __next = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0});
        __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
        while (__comp(__val.v, (__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            ($t68 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t68.a[$t68.i] = ($t69 = _ZSt4moveIiEOiS_(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t69.a[$t69.i]));
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__next], i: 0});
            __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
          }
        }
        ($t70 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t70.a[$t70.i] = ($t71 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t71.a[$t71.i]));
      }
      function _ZSt25__unguarded_linear_insertIPiPFbiiEEvS_S0_(__last, __comp) {
        let $t72, $t73, $t74;
        let __val = {v: ($t72 = _ZSt4moveIiEOiS_(__last), $t72.a[$t72.i])};
        let __next = (__last ? {a: __last.a, i: __last.i} : null);
        --__next.i;
        while (__comp(__val.v, __next.a[__next.i])) {
           {
            __last.a[__last.i] = ($t73 = _ZSt4moveIiEOiS_(__next), $t73.a[$t73.i]);
            __last = (__next ? {a: __next.a, i: __next.i} : null);
            --__next.i;
          }
        }
        __last.a[__last.i] = ($t74 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t74.a[$t74.i]);
      }
      function _ZSt25__unguarded_linear_insertIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S7_(__last, __comp) {
        let $t75, $t76, $t77, $t78, $t79;
        let __val = {v: ($t75 = _ZSt4moveIiEOiS_(__last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t75.a[$t75.i])};
        let __next = new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0});
        __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
        while (__comp._ZNK11$24lambda_0clEii(__val.v, (__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).a[(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()).i])) {
           {
            ($t76 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t76.a[$t76.i] = ($t77 = _ZSt4moveIiEOiS_(__next._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t77.a[$t77.i]));
            __last._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEaSERS6_({a: [__next], i: 0});
            __next._ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEmmEv();
          }
        }
        ($t78 = __last._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t78.a[$t78.i] = ($t79 = _ZSt4moveIiEOiS_({a: __val, i: "v"}), $t79.a[$t79.i]));
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIPiS_St9allocatorIiEES_S_S_S_RS1_(__first, __last, __result, __alloc) {
        let $t80;
        return ($t80 = _ZSt22__uninitialized_copy_aISt13move_iteratorIPiES0_St9allocatorIiEES0_S1_S1_S0_RS3_(_ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t80 ? {a: $t80.a, i: $t80.i} : null);
      }
      function _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_(__first, __last, __alloc) {
        let $t81;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE7destroyIiEEvRS2_Pi(__alloc, ($t81 = _ZSt11__addressofIiEPiRi(__first), $t81 ? {a: $t81.a, i: $t81.i} : null));
        }
      }
      function _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S7_(__first, __last, __comp) {
        let $t82, $t83, $t84, $t85;
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
          return;
        }
        let __len = _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0});
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t82 = _ZSt4moveIiEOiS_((($t83 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t83))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t82.a[$t82.i])};
            _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliPFbiiEEvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __parent, __len, ($t84 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t84.a[$t84.i]), __comp);
            if ((__parent === 0)) {
              return;
            }
            ($t85 = __parent, __parent = (($t85 - 1) | 0), $t85);
          }
        }
      }
      function _ZSt9make_heapIPiPFbiiEEvS_S_S0_(__first, __last, __comp) {
        let $t86, $t87, $t88;
        if ((((__last ? __last.i : 0) - (__first ? __first.i : 0)) < 2)) {
          return;
        }
        let __len = ((__last ? __last.i : 0) - (__first ? __first.i : 0));
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t86 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t86.a[$t86.i])};
            _ZSt13__adjust_heapIPiliPFbiiEEvS_lliS0_((__first ? {a: __first.a, i: __first.i} : null), __parent, __len, ($t87 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t87.a[$t87.i]), __comp);
            if ((__parent === 0)) {
              return;
            }
            ($t88 = __parent, __parent = (($t88 - 1) | 0), $t88);
          }
        }
      }
      function _ZSt9make_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S7_(__first, __last, __comp) {
        let $t89, $t90, $t91, $t92;
        if ((_ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}) < 2)) {
          return;
        }
        let __len = _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0});
        let __parent = ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0);
        while (true) {
           {
            let __value = {v: ($t89 = _ZSt4moveIiEOiS_((($t90 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t90))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t89.a[$t89.i])};
            _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEli11$24lambda_0EvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __parent, __len, ($t91 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t91.a[$t91.i]), __comp);
            if ((__parent === 0)) {
              return;
            }
            ($t92 = __parent, __parent = (($t92 - 1) | 0), $t92);
          }
        }
      }
      function _ZN9__gnu_cxxltIPiS0_St6vectorIiSt9allocatorIiEEEEbRKNS_17__normal_iteratorIS0_S4_EES5_(__lhs, __rhs) {
        let $t93, $t94, $t95, $t96, $t97, $t98;
        return ($t97 = (($t95 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t95) ? (($t95 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t95)).a[(($t95 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__lhs.a[__lhs.i]), $t95)).i] : null), $t98 = (($t96 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t96) ? (($t96 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t96)).a[(($t96 = _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE.prototype._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEE4baseEv.call(__rhs.a[__rhs.i]), $t96)).i] : null), (($t97 ? $t97.i : 0) < ($t98 ? $t98.i : 0)));
      }
      function _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEPFbiiEEvS6_S6_S6_S7_(__first, __last, __result, __comp) {
        let $t99, $t100, $t101, $t102;
        let __value = {v: ($t99 = _ZSt4moveIiEOiS_(__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t99.a[$t99.i])};
        ($t100 = __result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t100.a[$t100.i] = ($t101 = _ZSt4moveIiEOiS_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t101.a[$t101.i]));
        _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliPFbiiEEvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), 0, _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}), ($t102 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t102.a[$t102.i]), __comp);
      }
      function _ZSt10__pop_heapIPiPFbiiEEvS_S_S_S0_(__first, __last, __result, __comp) {
        let $t103, $t104, $t105;
        let __value = {v: ($t103 = _ZSt4moveIiEOiS_(__result), $t103.a[$t103.i])};
        __result.a[__result.i] = ($t104 = _ZSt4moveIiEOiS_(__first), $t104.a[$t104.i]);
        _ZSt13__adjust_heapIPiliPFbiiEEvS_lliS0_((__first ? {a: __first.a, i: __first.i} : null), 0, ((__last ? __last.i : 0) - (__first ? __first.i : 0)), ($t105 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t105.a[$t105.i]), __comp);
      }
      function _ZSt10__pop_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE11$24lambda_0EvS6_S6_S6_S7_(__first, __last, __result, __comp) {
        let $t106, $t107, $t108, $t109;
        let __value = {v: ($t106 = _ZSt4moveIiEOiS_(__result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t106.a[$t106.i])};
        ($t107 = __result._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t107.a[$t107.i] = ($t108 = _ZSt4moveIiEOiS_(__first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t108.a[$t108.i]));
        _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEli11$24lambda_0EvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), 0, _ZN9__gnu_cxxmiIPiS0_St6vectorIiSt9allocatorIiEEEElRKNS_17__normal_iteratorIS0_S4_EES5_({a: [__last], i: 0}, {a: [__first], i: 0}), ($t109 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t109.a[$t109.i]), __comp);
      }
      function _ZSt9iter_swapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_EvS6_S6_(__a, __b) {
        _ZSt4swapIiEvRiS_(__a._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), __b._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv());
      }
      function _ZSt9iter_swapIPiS_EvS_S_(__a, __b) {
        _ZSt4swapIiEvRiS_(__a, __b);
      }
      function _ZSt12__miter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES6_S6_(__it) {
        return _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi0EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__it], i: 0}));
      }
      function _ZSt12__miter_baseIPiES_S_(__it) {
        let $t110;
        return ($t110 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t110 ? {a: $t110.a, i: $t110.i} : null);
      }
      function _ZSt23__copy_move_backward_a2ILi1EN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEES6_ES6_S6_S6_S6_(__first, __last, __result) {
        let $t111, $t112, $t113;
        return new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [_ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(($t111 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0})), $t111 ? {a: $t111.a, i: $t111.i} : null), ($t112 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__last], i: 0})), $t112 ? {a: $t112.a, i: $t112.i} : null), ($t113 = _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__result], i: 0})), $t113 ? {a: $t113.a, i: $t113.i} : null))], i: 0});
      }
      function _ZSt23__copy_move_backward_a2ILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t114, $t115, $t116, $t117;
        return ($t117 = _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(($t114 = _ZSt12__niter_baseIPiES_S_((__first ? {a: __first.a, i: __first.i} : null)), $t114 ? {a: $t114.a, i: $t114.i} : null), ($t115 = _ZSt12__niter_baseIPiES_S_((__last ? {a: __last.a, i: __last.i} : null)), $t115 ? {a: $t115.a, i: $t115.i} : null), ($t116 = _ZSt12__niter_baseIPiES_S_((__result ? {a: __result.a, i: __result.i} : null)), $t116 ? {a: $t116.a, i: $t116.i} : null)), $t117 ? {a: $t117.a, i: $t117.i} : null);
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
        let $t118;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIPiEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi(__alloc, ($t118 = _ZSt11__addressofIiEPiRi(__cur), $t118 ? {a: $t118.a, i: $t118.i} : null), __first._ZNKSt13move_iteratorIPiEdeEv());
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
      function _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliPFbiiEEvS6_lliS7_(__first, __holeIndex, __len, __value, __comp) {
        let $t119, $t120, $t121, $t122, $t123, $t124, $t125, $t126, $t127, $t128, $t129, $t130, $t131, $t132;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if (__comp(($t119 = (($t120 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t120))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t119.a[$t119.i]), ($t121 = (($t122 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t122))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t121.a[$t121.i]))) {
              ($t123 = __secondChild, __secondChild = (($t123 - 1) | 0), $t123);
            }
            ($t124 = (($t127 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t127))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t124.a[$t124.i] = ($t125 = _ZSt4moveIiEOiS_((($t126 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t126))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t125.a[$t125.i]));
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            ($t128 = (($t131 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t131))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t128.a[$t128.i] = ($t129 = _ZSt4moveIiEOiS_((($t130 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t130))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t129.a[$t129.i]));
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliPFbiiEEvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __holeIndex, __topIndex, ($t132 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t132.a[$t132.i]), __comp);
      }
      function _ZSt13__adjust_heapIPiliPFbiiEEvS_lliS0_(__first, __holeIndex, __len, __value, __comp) {
        let $t133, $t134, $t135, $t136, $t137, $t138, $t139, $t140;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if (__comp(($t133 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)}), $t133.a[$t133.i]), ($t134 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))}), $t134.a[$t134.i]))) {
              ($t135 = __secondChild, __secondChild = (($t135 - 1) | 0), $t135);
            }
            (($t136 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t136)).a[(($t136 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t136)).i] = ($t137 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__secondChild)})), $t137.a[$t137.i]);
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            (($t138 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t138)).a[(($t138 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t138)).i] = ($t139 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + ((((__secondChild) - (1)) | 0))})), $t139.a[$t139.i]);
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIPiliPFbiiEEvS_lliS0_((__first ? {a: __first.a, i: __first.i} : null), __holeIndex, __topIndex, ($t140 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t140.a[$t140.i]), __comp);
      }
      function _ZSt13__adjust_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEli11$24lambda_0EvS6_lliS7_(__first, __holeIndex, __len, __value, __comp) {
        let $t141, $t142, $t143, $t144, $t145, $t146, $t147, $t148, $t149, $t150, $t151, $t152, $t153, $t154;
        __value = {v: __value};
        let __topIndex = __holeIndex;
        let __secondChild = __holeIndex;
        while ((__secondChild < ((Math.trunc(((((__len) - (1)) | 0)) / (2))) | 0))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            if (__comp._ZNK11$24lambda_0clEii(($t141 = (($t142 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t142))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t141.a[$t141.i]), ($t143 = (($t144 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t144))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t143.a[$t143.i]))) {
              ($t145 = __secondChild, __secondChild = (($t145 - 1) | 0), $t145);
            }
            ($t146 = (($t149 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t149))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t146.a[$t146.i] = ($t147 = _ZSt4moveIiEOiS_((($t148 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__secondChild], i: 0}), $t148))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t147.a[$t147.i]));
            __holeIndex = __secondChild;
          }
        }
        if ((((((__len) & (1)) | 0) === 0) && (__secondChild === ((Math.trunc(((((__len) - (2)) | 0)) / (2))) | 0)))) {
           {
            __secondChild = ((Math.imul(2, (((__secondChild) + (1)) | 0))) | 0);
            ($t150 = (($t153 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t153))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t150.a[$t150.i] = ($t151 = _ZSt4moveIiEOiS_((($t152 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [(((__secondChild) - (1)) | 0)], i: 0}), $t152))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t151.a[$t151.i]));
            __holeIndex = (((__secondChild) - (1)) | 0);
          }
        }
        _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEli11$24lambda_0EvS6_lliS7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__first], i: 0}), __holeIndex, __topIndex, ($t154 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t154.a[$t154.i]), __comp);
      }
      function _ZSt12__niter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEES1_S6_(__it) {
        let $t155;
        return ($t155 = _ZSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE._ZNSt10_Iter_baseIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEELi1EE7_S_baseES7_(new _ZN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEE({a: [__it], i: 0})), $t155 ? {a: $t155.a, i: $t155.i} : null);
      }
      function _ZSt12__niter_baseIPiES_S_(__it) {
        let $t156;
        return ($t156 = _ZSt10_Iter_baseIPiLi0EE._ZNSt10_Iter_baseIPiLi0EE7_S_baseES0_((__it ? {a: __it.a, i: __it.i} : null)), $t156 ? {a: $t156.a, i: $t156.i} : null);
      }
      function _ZSt22__copy_move_backward_aILi1EPiS_ES_S_S_S_(__first, __last, __result) {
        let $t157;
        let __simple = (((1 && 1) && 1) && 1);
        return ($t157 = _ZSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE._ZNSt20__copy_move_backwardILi1ELi1ESt26random_access_iterator_tagE13__copy_move_bIiEEPiPKiS3_S2_((__first ? {a: __first.a, i: __first.i} : null), (__last ? {a: __last.a, i: __last.i} : null), (__result ? {a: __result.a, i: __result.i} : null)), $t157 ? {a: $t157.a, i: $t157.i} : null);
      }
      function _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEliPFbiiEEvS6_lliS7_(__first, __holeIndex, __topIndex, __value, __comp) {
        let $t158, $t159, $t160, $t161, $t162, $t163, $t164, $t165, $t166;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && __comp(($t158 = (($t159 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t159))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t158.a[$t158.i]), __value.v))) {
           {
            ($t160 = (($t163 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t163))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t160.a[$t160.i] = ($t161 = _ZSt4moveIiEOiS_((($t162 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t162))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t161.a[$t161.i]));
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        ($t164 = (($t166 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t166))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t164.a[$t164.i] = ($t165 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t165.a[$t165.i]));
      }
      function _ZSt11__push_heapIPiliPFbiiEEvS_lliS0_(__first, __holeIndex, __topIndex, __value, __comp) {
        let $t167, $t168, $t169, $t170, $t171;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && __comp(($t167 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)}), $t167.a[$t167.i]), __value.v))) {
           {
            (($t168 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t168)).a[(($t168 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t168)).i] = ($t169 = _ZSt4moveIiEOiS_(({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__parent)})), $t169.a[$t169.i]);
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        (($t170 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t170)).a[(($t170 = ({a: (__first ? __first.a : null), i: (__first ? __first.i : 0) + (__holeIndex)}), $t170)).i] = ($t171 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t171.a[$t171.i]);
      }
      function _ZSt11__push_heapIN9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEEli11$24lambda_0EvS6_lliS7_(__first, __holeIndex, __topIndex, __value, __comp) {
        let $t172, $t173, $t174, $t175, $t176, $t177, $t178, $t179, $t180;
        __value = {v: __value};
        let __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
        while (((__holeIndex > __topIndex) && __comp._ZNK11$24lambda_0clEii(($t172 = (($t173 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t173))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t172.a[$t172.i]), __value.v))) {
           {
            ($t174 = (($t177 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t177))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t174.a[$t174.i] = ($t175 = _ZSt4moveIiEOiS_((($t176 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__parent], i: 0}), $t176))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv()), $t175.a[$t175.i]));
            __holeIndex = __parent;
            __parent = ((Math.trunc(((((__holeIndex) - (1)) | 0)) / (2))) | 0);
          }
        }
        ($t178 = (($t180 = __first._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEplERKl({a: [__holeIndex], i: 0}), $t180))._ZNK9__gnu_cxx17__normal_iteratorIPiSt6vectorIiSt9allocatorIiEEEdeEv(), $t178.a[$t178.i] = ($t179 = _ZSt4moveIiEOiS_({a: __value, i: "v"}), $t179.a[$t179.i]));
      }
      function _ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        let $t181, $t182, $t183, $t184;
        return ($t183 = ($t181 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__x.a[__x.i]), $t181), $t184 = ($t182 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__y.a[__y.i]), $t182), ($t183 === $t184 || ($t183 && $t184 && $t183.a === $t184.a && $t183.i === $t184.i)));
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
      let _ZSt3cin = new _ZSt13basic_istreamIcSt11char_traitsIcEE(0);
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
