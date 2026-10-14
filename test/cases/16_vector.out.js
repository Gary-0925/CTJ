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
      class _Z12$24class_159 {
        __count;
        __value;
        constructor(...$a) {
          this.__init__Z12$24class_159(...$a);
        }
        __init__Z12$24class_159(...$a) {
          this.__count = 0;
          this.__value = 0;
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
        _ZN9__gnu_cxx13new_allocatorIiE9constructIiEEvPi(__p) {
          (__p.a[__p.i] = 0);
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
          if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt9allocatorIiE)) {
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE = new _ZNSt12_Vector_baseIiSt9allocatorIiEE12_Vector_implE($a[1]);
            this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE";
            this._ZNSt12_Vector_baseIiSt9allocatorIiEE17_M_create_storageEm($a[0]);
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
        _ZNSt12_Vector_baseIiSt9allocatorIiEE17_M_create_storageEm(__n) {
          let $t3, $t4;
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start = ($t3 = _ZSt12_Vector_baseIiSt9allocatorIiEE.prototype._ZNSt12_Vector_baseIiSt9allocatorIiEE11_M_allocateEm.call(this, __n), $t3 ? {a: $t3.a, i: $t3.i} : null);
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish = (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage = ($t4 = ({a: (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i : 0) + (__n)}), $t4 ? {a: $t4.a, i: $t4.i} : null);
        }
      }
      class _ZSt6vectorIiSt9allocatorIiEE extends _ZSt12_Vector_baseIiSt9allocatorIiEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt9allocatorIiE)) ? [$a[0], ($a[1] === undefined ? ({a: [new _ZSt9allocatorIiE()], i: 0}) : $a[1])] : []));
          this.__init__ZSt6vectorIiSt9allocatorIiEE(...$a);
        }
        __init__ZSt6vectorIiSt9allocatorIiEE(...$a) {
          if ($a.length >= 1 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && ($a.length <= 1 || ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt9allocatorIiE))) {
            this._ZNSt6vectorIiSt9allocatorIiEE21_M_default_initializeEm($a[0]);
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt12_Vector_baseIiSt9allocatorIiEE.prototype.__dtor.call(this);
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
        _ZNSt6vectorIiSt9allocatorIiEE5clearEv() {
          this._ZNSt6vectorIiSt9allocatorIiEE15_M_erase_at_endEPi((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null));
        }
        _ZNSt6vectorIiSt9allocatorIiEE21_M_default_initializeEm(__n) {
          _ZSt27__uninitialized_default_n_aIPimSt9allocatorIiEEvS_mRS1_((this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_start.i} : null), __n, this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv());
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish = (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_end_of_storage.i} : null);
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
        _ZNSt6vectorIiSt9allocatorIiEE15_M_erase_at_endEPi(__pos) {
          _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_((__pos ? {a: __pos.a, i: __pos.i} : null), (this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish ? {a: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.a, i: this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish.i} : null), this._ZNSt12_Vector_baseIiSt9allocatorIiEE19_M_get_Tp_allocatorEv());
          this._M_impl$_ZSt12_Vector_baseIiSt9allocatorIiEE._M_finish = (__pos ? {a: __pos.a, i: __pos.i} : null);
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
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructERS2_Pi(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorIiEE.prototype._ZN9__gnu_cxx13new_allocatorIiE9constructIiEEvPi.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
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
      }
      class _ZSt16remove_referenceIiE {
        __init__ZSt16remove_referenceIiE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15iterator_traitsIPiE {
        __init__ZSt15iterator_traitsIPiE(...$a) { }
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
          let $t11;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt13move_iteratorIPiE)) {
            this._M_current$_ZSt13move_iteratorIPiE = ($t11 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(($a[0]).a[($a[0]).i]), $t11 ? {a: $t11.a, i: $t11.i} : null);
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
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZSt20__throw_length_errorPKc(...$a) { throw new Error("unresolved external: std::__throw_length_error"); }
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function main() {
        let $t12, $t13, $t14, $t15, $t16;
        let v = new _ZSt6vectorIiSt9allocatorIiEE();
        for (let i = 1; (i <= 4); ($t12 = i, i = (($t12 + 1) | 0), $t12)) {
          _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE9push_backERKi.call(v, {a: [((Math.imul(i, 10)) | 0)], i: 0});
        }
        let sum = 0;
        for (let i = ((0) >>> 0); (i < _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(v)); ($t13 = i, i = (($t13 + 1) >>> 0), $t13)) {
          sum = (((((sum) + (($t14 = v._ZNSt6vectorIiSt9allocatorIiEEixEm(i), $t14.a[$t14.i]))) | 0)) | 0);
        }
        ($t15 = v._ZNSt6vectorIiSt9allocatorIiEEixEm(((1) >>> 0)), $t15.a[$t15.i] = 99);
        let second = ($t16 = v._ZNSt6vectorIiSt9allocatorIiEEixEm(((1) >>> 0)), $t16.a[$t16.i]);
        let n = ((_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(v)) | 0);
        _ZSt6vectorIiSt9allocatorIiEE.prototype._ZNSt6vectorIiSt9allocatorIiEE5clearEv.call(v);
        (console.log((sum), (second), (n), (((_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(v)) | 0))));
        let w = new _ZSt6vectorIiSt9allocatorIiEE(((3) >>> 0), {a: [new _ZSt9allocatorIiE()], i: 0});
        (console.log((((_ZSt6vectorIiSt9allocatorIiEE.prototype._ZNKSt6vectorIiSt9allocatorIiEE4sizeEv.call(w)) | 0))));
        return 0;
      }
      function _ZSt7forwardIiEOiS_(__t) {
        return __t;
      }
      function _ZSt34__uninitialized_move_if_noexcept_aIPiS_St9allocatorIiEES_S_S_S_RS1_(__first, __last, __result, __alloc) {
        let $t17;
        return ($t17 = _ZSt22__uninitialized_copy_aISt13move_iteratorIPiES0_St9allocatorIiEES0_S1_S1_S0_RS3_(_ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__first ? {a: __first.a, i: __first.i} : null)), _ZSt32__make_move_if_noexcept_iteratorIPiSt13move_iteratorIS_EES1_S_((__last ? {a: __last.a, i: __last.i} : null)), (__result ? {a: __result.a, i: __result.i} : null), __alloc), $t17 ? {a: $t17.a, i: $t17.i} : null);
      }
      function _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_(__first, __last, __alloc) {
        let $t18;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE7destroyIiEEvRS2_Pi(__alloc, ($t18 = _ZSt11__addressofIiEPiRi(__first), $t18 ? {a: $t18.a, i: $t18.i} : null));
        }
      }
      function _ZSt27__uninitialized_default_n_aIPimSt9allocatorIiEEvS_mRS1_(__first, __n, __alloc) {
        let $t19;
        let __cur = (__first ? {a: __first.a, i: __first.i} : null);
        if (true) {
           {
            for (; (__n > ((0) >>> 0)); ((__n = ((__n - 1) >>> 0)), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructERS2_Pi(__alloc, ($t19 = _ZSt11__addressofIiEPiRi(__cur), $t19 ? {a: $t19.a, i: $t19.i} : null));
            }
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIPiSt9allocatorIiEEvS_S_RS1_((__first ? {a: __first.a, i: __first.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
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
        let $t20;
        let __cur = (__result ? {a: __result.a, i: __result.i} : null);
        if (true) {
           {
            for (; _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_({a: [__first], i: 0}, {a: [__last], i: 0}); (__first._ZNSt13move_iteratorIPiEppEv(), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIiEE9constructIiEEvRS2_PiRKi(__alloc, ($t20 = _ZSt11__addressofIiEPiRi(__cur), $t20 ? {a: $t20.a, i: $t20.i} : null), __first._ZNKSt13move_iteratorIPiEdeEv());
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
      function _ZStneIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        return (!(_ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y)));
      }
      function _ZSteqIPiS_EbRKSt13move_iteratorIS_ES0_(__x, __y) {
        let $t21, $t22, $t23, $t24;
        return ($t23 = ($t21 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__x.a[__x.i]), $t21), $t24 = ($t22 = _ZSt13move_iteratorIPiE.prototype._ZNKSt13move_iteratorIPiE4baseEv.call(__y.a[__y.i]), $t22), ($t23 === $t24 || ($t23 && $t24 && $t23.a === $t24.a && $t23.i === $t24.i)));
      }
      function _ZSt4moveIiEOiS_(__t) {
        return __t;
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
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
