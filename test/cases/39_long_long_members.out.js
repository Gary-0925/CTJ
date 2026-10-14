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
      function _ctj_peq(a, b) { return a === b || (!!a && !!b && a.a === b.a && a.i === b.i); }
      // _Rb_tree_rebalance_for_erase from libstdc++'s tree.cc: it takes the node
      // out of the tree and rebalances, and hands back the node to destroy.
      function _ctj_rb_erase(z, hb) {
        var hn = hb.a[hb.i], root = hn._M_parent;
        var D = function (p) { return p ? p.a[p.i] : null; };
        var rotL = function (x) {
          var nx = D(x), y = nx._M_right, ny = D(y);
          nx._M_right = ny._M_left;
          if (ny._M_left) D(ny._M_left)._M_parent = x;
          ny._M_parent = nx._M_parent;
          if (_ctj_peq(x, root)) { root = y; hn._M_parent = root; }
          else if (_ctj_peq(D(nx._M_parent)._M_left, x)) D(nx._M_parent)._M_left = y;
          else D(nx._M_parent)._M_right = y;
          ny._M_left = x; nx._M_parent = y;
        };
        var rotR = function (x) {
          var nx = D(x), y = nx._M_left, ny = D(y);
          nx._M_left = ny._M_right;
          if (ny._M_right) D(ny._M_right)._M_parent = x;
          ny._M_parent = nx._M_parent;
          if (_ctj_peq(x, root)) { root = y; hn._M_parent = root; }
          else if (_ctj_peq(D(nx._M_parent)._M_right, x)) D(nx._M_parent)._M_right = y;
          else D(nx._M_parent)._M_left = y;
          ny._M_right = x; nx._M_parent = y;
        };
        var pz = z, nz = D(pz), py = pz, px = null, pxp = null;
        if (!nz._M_left) px = nz._M_right;
        else if (!nz._M_right) px = nz._M_left;
        else { py = nz._M_right; while (D(py)._M_left) py = D(py)._M_left; px = D(py)._M_right; }
        if (!_ctj_peq(py, pz)) {
          var ny = D(py);
          D(nz._M_left)._M_parent = py;
          ny._M_left = nz._M_left;
          if (!_ctj_peq(py, nz._M_right)) {
            pxp = ny._M_parent;
            if (px) D(px)._M_parent = ny._M_parent;
            D(ny._M_parent)._M_left = px;
            ny._M_right = nz._M_right;
            D(nz._M_right)._M_parent = py;
          } else pxp = py;
          if (_ctj_peq(root, pz)) { root = py; hn._M_parent = root; }
          else if (_ctj_peq(D(nz._M_parent)._M_left, pz)) D(nz._M_parent)._M_left = py;
          else D(nz._M_parent)._M_right = py;
          ny._M_parent = nz._M_parent;
          var cl = ny._M_color; ny._M_color = nz._M_color; nz._M_color = cl;
          py = pz;
        } else {
          pxp = nz._M_parent;
          if (px) D(px)._M_parent = nz._M_parent;
          if (_ctj_peq(root, pz)) { root = px; hn._M_parent = root; }
          else if (_ctj_peq(D(nz._M_parent)._M_left, pz)) D(nz._M_parent)._M_left = px;
          else D(nz._M_parent)._M_right = px;
          if (_ctj_peq(hn._M_left, pz)) {
            if (!nz._M_right) hn._M_left = nz._M_parent;
            else { var a = px; while (D(a)._M_left) a = D(a)._M_left; hn._M_left = a; }
          }
          if (_ctj_peq(hn._M_right, pz)) {
            if (!nz._M_left) hn._M_right = nz._M_parent;
            else { var b = px; while (D(b)._M_right) b = D(b)._M_right; hn._M_right = b; }
          }
        }
        if (D(py)._M_color !== 0) {
          while (!_ctj_peq(px, root) && (!px || D(px)._M_color !== 0)) {
            var nxp = D(pxp);
            if (_ctj_peq(px, nxp._M_left)) {
              var w = nxp._M_right, nw = D(w);
              if (nw._M_color === 0) { nw._M_color = 1; nxp._M_color = 0; rotL(pxp); w = nxp._M_right; nw = D(w); }
              if ((!nw._M_left || D(nw._M_left)._M_color !== 0) && (!nw._M_right || D(nw._M_right)._M_color !== 0)) {
                nw._M_color = 0; px = pxp; pxp = nxp._M_parent;
              } else {
                if (!nw._M_right || D(nw._M_right)._M_color !== 0) {
                  D(nw._M_left)._M_color = 1; nw._M_color = 0; rotR(w); w = nxp._M_right; nw = D(w);
                }
                nw._M_color = nxp._M_color; nxp._M_color = 1;
                if (nw._M_right) D(nw._M_right)._M_color = 1;
                rotL(pxp); break;
              }
            } else {
              var w2 = nxp._M_left, nw2 = D(w2);
              if (nw2._M_color === 0) { nw2._M_color = 1; nxp._M_color = 0; rotR(pxp); w2 = nxp._M_left; nw2 = D(w2); }
              if ((!nw2._M_right || D(nw2._M_right)._M_color !== 0) && (!nw2._M_left || D(nw2._M_left)._M_color !== 0)) {
                nw2._M_color = 0; px = pxp; pxp = nxp._M_parent;
              } else {
                if (!nw2._M_left || D(nw2._M_left)._M_color !== 0) {
                  D(nw2._M_right)._M_color = 1; nw2._M_color = 0; rotL(w2); w2 = nxp._M_left; nw2 = D(w2);
                }
                nw2._M_color = nxp._M_color; nxp._M_color = 1;
                if (nw2._M_left) D(nw2._M_left)._M_color = 1;
                rotR(pxp); break;
              }
            }
          }
          if (px) D(px)._M_color = 1;
        }
        return py;
      }
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
          this.__arr = (($a[0]).a[($a[0]).i]).__arr;
        }
        __dtor() {
        }
      }
      class _ZSt31__do_is_nary_constructible_impl {
        __init__ZSt31__do_is_nary_constructible_impl(...$a) { }
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
      class _ZSt17__uses_alloc_base {
        __init__ZSt17__uses_alloc_base(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt13__uses_alloc09_AnythingE {
        constructor(...$a) {
          this.__init__ZNSt13__uses_alloc09_AnythingE(...$a);
        }
        __init__ZNSt13__uses_alloc09_AnythingE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt13__uses_alloc0 extends _ZSt17__uses_alloc_base {
        _M_a;
        constructor(...$a) {
          super();
          this.__init__ZSt13__uses_alloc0(...$a);
        }
        __init__ZSt13__uses_alloc0(...$a) {
          this._M_a = new _ZNSt13__uses_alloc09_AnythingE();
          this._M_a.ctj_a = this; this._M_a.ctj_i = "_M_a";
        }
        __dtor() {
          _ZSt17__uses_alloc_base.prototype.__dtor.call(this);
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
      class _ZSt18_Rb_tree_node_base {
        _M_color;
        _M_parent;
        _M_left;
        _M_right;
        constructor(...$a) {
          this.__init__ZSt18_Rb_tree_node_base(...$a);
        }
        __init__ZSt18_Rb_tree_node_base(...$a) {
          this._M_color = 0;
          this._M_parent = null;
          this._M_left = null;
          this._M_right = null;
        }
        __dtor() {
        }
      }
      class _Z1A {
        m;
        u;
        constructor(...$a) {
          this.__init__Z1A(...$a);
        }
        __init__Z1A(...$a) {
          this.m = 9n;
          this.u = 7n;
        }
        __dtor() {
        }
        static S = BigInt.asIntN(64, (1n) << (50n));
        static cnt = 11n;
      }
      class _Z1P {
        x;
        y;
        constructor(...$a) {
          this.__init__Z1P(...$a);
        }
        __init__Z1P(...$a) {
          this.x = 4;
          this.y = BigInt(((-(1)) | 0));
        }
        __dtor() {
        }
      }
      class _Z1Q {
        p;
        constructor(...$a) {
          this.__init__Z1Q(...$a);
        }
        __init__Z1Q(...$a) {
          this.p = Array.from({length: 2}, () => new _Z1P());
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
      class _Z1TILi21EE {
        constructor(...$a) {
          this.__init__Z1TILi21EE(...$a);
        }
        __init__Z1TILi21EE(...$a) {
        }
        __dtor() {
        }
        static v = BigInt(((Math.imul(21, 2)) | 0));
      }
      class _ZN9__gnu_cxx13new_allocatorIxEE {
        constructor(...$a) {
          this.__init__ZN9__gnu_cxx13new_allocatorIxEE(...$a);
        }
        __init__ZN9__gnu_cxx13new_allocatorIxEE(...$a) {
        }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorIxE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t0;
          if ((__n > _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZNK9__gnu_cxx13new_allocatorIxE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t0 = _Znwm(((Math.imul(__n, 8)) >>> 0)), $t0 ? {a: $t0.a, i: $t0.i} : null);
        }
        _ZNK9__gnu_cxx13new_allocatorIxE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (8))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorIxE9constructIxEEvPx(__p) {
          (__p.a[__p.i] = 0n);
        }
        _ZN9__gnu_cxx13new_allocatorIxE7destroyIxEEvPx(__p) {
          void 0;
        }
      }
      class _ZSt9allocatorIxE extends _ZN9__gnu_cxx13new_allocatorIxEE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIxE) ? [$a[0]] : []));
          this.__init__ZSt9allocatorIxE(...$a);
        }
        __init__ZSt9allocatorIxE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIxE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
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
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIxE) ? [$a[0]] : []));
          this.__init__ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE(...$a);
        }
        __init__ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt9allocatorIxE)) {
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
          _ZSt9allocatorIxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12_Vector_baseIxSt9allocatorIxEE {
        _M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE;
        constructor(...$a) {
          this.__init__ZSt12_Vector_baseIxSt9allocatorIxEE(...$a);
        }
        __init__ZSt12_Vector_baseIxSt9allocatorIxEE(...$a) {
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE = new _ZNSt12_Vector_baseIxSt9allocatorIxEE12_Vector_implE($a[1]);
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE.ctj_a = this; this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE.ctj_i = "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE";
          this._ZNSt12_Vector_baseIxSt9allocatorIxEE17_M_create_storageEm($a[0]);
        }
        __dtor() {
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE"};
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE11_M_allocateEm(__n) {
          let $t1;
          return ($t1 = ((__n !== ((0) >>> 0)) ? _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE8allocateEmPKv.call(this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE, __n, {a: [0], i: 0}) : 0), $t1 ? {a: $t1.a, i: $t1.i} : null);
        }
        _ZNSt12_Vector_baseIxSt9allocatorIxEE17_M_create_storageEm(__n) {
          let $t2, $t3;
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start = ($t2 = _ZSt12_Vector_baseIxSt9allocatorIxEE.prototype._ZNSt12_Vector_baseIxSt9allocatorIxEE11_M_allocateEm.call(this, __n), $t2 ? {a: $t2.a, i: $t2.i} : null);
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish = (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i} : null);
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage = ($t3 = ({a: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0) + (__n)}), $t3 ? {a: $t3.a, i: $t3.i} : null);
        }
      }
      class _ZSt6vectorIxSt9allocatorIxEE extends _ZSt12_Vector_baseIxSt9allocatorIxEE {
        constructor(...$a) {
          super(...[$a[0], ($a[1] === undefined ? ({a: [new _ZSt9allocatorIxE()], i: 0}) : $a[1])]);
          this.__init__ZSt6vectorIxSt9allocatorIxEE(...$a);
        }
        __init__ZSt6vectorIxSt9allocatorIxEE(...$a) {
          this._ZNSt6vectorIxSt9allocatorIxEE21_M_default_initializeEm($a[0]);
        }
        __dtor() {
          _ZSt12_Vector_baseIxSt9allocatorIxEE.prototype.__dtor.call(this);
        }
        _ZNKSt6vectorIxSt9allocatorIxEE4sizeEv() {
          return ((((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish.i : 0) - (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0))) >>> 0);
        }
        _ZNSt6vectorIxSt9allocatorIxEEixEm(__n) {
          return ({a: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a : null), i: (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i : 0) + (__n)});
        }
        _ZNSt6vectorIxSt9allocatorIxEE21_M_default_initializeEm(__n) {
          _ZSt27__uninitialized_default_n_aIPxmSt9allocatorIxEEvS_mRS1_((this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_start.i} : null), __n, this._ZNSt12_Vector_baseIxSt9allocatorIxEE19_M_get_Tp_allocatorEv());
          this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_finish = (this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage ? {a: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage.a, i: this._M_impl$_ZSt12_Vector_baseIxSt9allocatorIxEE._M_end_of_storage.i} : null);
        }
      }
      class _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE {
        __init__ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE(...$a) { }
        __dtor() {
        }
        static _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructERS2_Px(__a, __p) {
          _ZN9__gnu_cxx13new_allocatorIxEE.prototype._ZN9__gnu_cxx13new_allocatorIxE9constructIxEEvPx.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null));
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
      class _ZSt15binary_functionIxxbE {
        constructor(...$a) {
          this.__init__ZSt15binary_functionIxxbE(...$a);
        }
        __init__ZSt15binary_functionIxxbE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt15binary_functionIxxbE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt4lessIxE extends _ZSt15binary_functionIxxbE {
        constructor(...$a) {
          super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4lessIxE) ? [$a[0]] : []));
          this.__init__ZSt4lessIxE(...$a);
        }
        __init__ZSt4lessIxE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4lessIxE)) {
          }
          else if ($a.length >= 0 && $a.length <= 0) {
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
          _ZSt15binary_functionIxxbE.prototype.__dtor.call(this);
        }
        _ZNKSt4lessIxEclERKxS1_(__x, __y) {
          return (__x.a[__x.i] < __y.a[__y.i]);
        }
      }
      class _ZSt4pairIKxyE {
        first$_ZSt4pairIKxyE;
        second$_ZSt4pairIKxyE;
        constructor(...$a) {
          this.__init__ZSt4pairIKxyE(...$a);
        }
        __init__ZSt4pairIKxyE(...$a) {
          let $t4;
          if ($a.length >= 3 && $a.length <= 3 && $a[0] instanceof _ZSt21piecewise_construct_t && $a[1] instanceof _ZSt5tupleIRKxE && $a[2] instanceof _ZSt5tuple) {
            this.__init__ZSt4pairIKxyE({a: [$a[1]], i: 0}, {a: [$a[2]], i: 0}, new _ZSt12_Index_tupleILi0EE(), new _ZSt12_Index_tuple());
          }
          else if ($a.length >= 4 && $a.length <= 4 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt5tupleIRKxE) && !((($a[0] && $a[0].a !== undefined && $a[0].i !== undefined && !Array.isArray($a[0].a)) ? $a[0].a[$a[0].i] : $a[0]) instanceof _ZSt21piecewise_construct_t) && ($a[1] !== null && typeof $a[1] === "object" && !Array.isArray($a[1]) && $a[1].a !== undefined && $a[1].i !== undefined && $a[1].a[$a[1].i] instanceof _ZSt5tuple) && !((($a[1] && $a[1].a !== undefined && $a[1].i !== undefined && !Array.isArray($a[1].a)) ? $a[1].a[$a[1].i] : $a[1]) instanceof _ZSt5tupleIRKxE) && $a[2] instanceof _ZSt12_Index_tupleILi0EE && $a[3] instanceof _ZSt12_Index_tuple) {
            this.first$_ZSt4pairIKxyE = ($t4 = _ZSt7forwardIRxES_S_(_ZSt3getILi0ERKxERxRSt5tupleIS_E($a[0])), $t4.a[$t4.i]);
            this.second$_ZSt4pairIKxyE = 0n;
          }
          else if ($a.length >= 0 && $a.length <= 0) {
            this.first$_ZSt4pairIKxyE = 0n;
            this.second$_ZSt4pairIKxyE = 0n;
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt4pairIKxyEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt4pairIKxyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9allocatorISt4pairIKxyEE extends _ZN9__gnu_cxx13new_allocatorISt4pairIKxyEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt4pairIKxyEE(...$a);
        }
        __init__ZSt9allocatorISt4pairIKxyEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt4pairIKxyEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt15binary_functionISt4pairIKxyES2_bE {
        __init__ZSt15binary_functionISt4pairIKxyES2_bE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16initializer_listISt4pairIKxyEE {
        _M_array$_ZSt16initializer_listISt4pairIKxyEE;
        _M_len$_ZSt16initializer_listISt4pairIKxyEE;
        constructor(...$a) {
          this.__init__ZSt16initializer_listISt4pairIKxyEE(...$a);
        }
        __init__ZSt16initializer_listISt4pairIKxyEE(...$a) {
          this._M_array$_ZSt16initializer_listISt4pairIKxyEE = null;
          this._M_len$_ZSt16initializer_listISt4pairIKxyEE = 0;
        }
        __dtor() {
        }
      }
      class _ZSt14unary_functionISt4pairIKxyExE {
        constructor(...$a) {
          this.__init__ZSt14unary_functionISt4pairIKxyExE(...$a);
        }
        __init__ZSt14unary_functionISt4pairIKxyExE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt10_Select1stISt4pairIKxyEE extends _ZSt14unary_functionISt4pairIKxyExE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt10_Select1stISt4pairIKxyEE(...$a);
        }
        __init__ZSt10_Select1stISt4pairIKxyEE(...$a) {
        }
        __dtor() {
          _ZSt14unary_functionISt4pairIKxyExE.prototype.__dtor.call(this);
        }
        _ZNKSt10_Select1stISt4pairIKxyEEclERS2_(__x) {
          return {a: __x.a[__x.i], i: "first$_ZSt4pairIKxyE"};
        }
      }
      class _ZNSt9allocatorISt4pairIKxyEE6rebindIS2_EE {
        __init__ZNSt9allocatorISt4pairIKxyEE6rebindIS2_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13_Rb_tree_nodeISt4pairIKxyEE extends _ZSt18_Rb_tree_node_base {
        _M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt13_Rb_tree_nodeISt4pairIKxyEE(...$a);
        }
        __init__ZSt13_Rb_tree_nodeISt4pairIKxyEE(...$a) {
          let $t5, $t6, $t7;
          this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE = new _ZSt4pairIKxyE(($t5 = _ZSt7forwardISt21piecewise_construct_tEOS_S0_($a[0]), $t5.a[$t5.i]), ($t6 = _ZSt7forwardISt5tupleIRKxEEOS2_S3_($a[1]), $t6.a[$t6.i]), ($t7 = _ZSt7forwardISt5tupleEOS_S0_($a[2]), $t7.a[$t7.i]));
          this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE.ctj_a = this; this._M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE.ctj_i = "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE";
        }
        __dtor() {
          _ZSt18_Rb_tree_node_base.prototype.__dtor.call(this);
        }
      }
      class _ZSt17_Rb_tree_iteratorISt4pairIKxyEE {
        _M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE;
        constructor(...$a) {
          this.__init__ZSt17_Rb_tree_iteratorISt4pairIKxyEE(...$a);
        }
        __init__ZSt17_Rb_tree_iteratorISt4pairIKxyEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKxyEE)) {
            this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
            this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEdeEv() {
          return {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a[this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE"};
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKxyEEppEv() {
          let $t8;
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE = ($t8 = _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base((this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)), $t8 ? {a: $t8.a, i: $t8.i} : null);
          return {a: [this], i: 0};
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKxyEEmmEv() {
          let $t9;
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE = ($t9 = _ZSt18_Rb_tree_decrementPSt18_Rb_tree_node_base((this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)), $t9 ? {a: $t9.a, i: $t9.i} : null);
          return {a: [this], i: 0};
        }
        _ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEeqERKS3_(__x) {
          return (this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE) || (this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE && ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE) && this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).a && this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i === ((__x.a[__x.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).i));
        }
        _ZNSt17_Rb_tree_iteratorISt4pairIKxyEEaSERS3_(o) {
          this._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE = (((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE) ? {a: ((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).a, i: ((o.a[o.i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZSt11_Tuple_implILi1EE {
        constructor(...$a) {
          this.__init__ZSt11_Tuple_implILi1EE(...$a);
        }
        __init__ZSt11_Tuple_implILi1EE(...$a) {
        }
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
      class _ZSt8is_emptyIRxE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_emptyIRxE(...$a);
        }
        __init__ZSt8is_emptyIRxE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt20__is_empty_non_tupleIRxE extends _ZSt8is_emptyIRxE {
        constructor(...$a) {
          super();
          this.__init__ZSt20__is_empty_non_tupleIRxE(...$a);
        }
        __init__ZSt20__is_empty_non_tupleIRxE(...$a) {
        }
        __dtor() {
          _ZSt8is_emptyIRxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIRxEE {
        __init__ZSt11conditionalILi0ESt17integral_constantIbLi0EESt20__is_empty_non_tupleIRxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt10_Head_baseILi0ERxLi0EE {
        _M_head_impl$_ZSt10_Head_baseILi0ERxLi0EE;
        constructor(...$a) {
          this.__init__ZSt10_Head_baseILi0ERxLi0EE(...$a);
        }
        __init__ZSt10_Head_baseILi0ERxLi0EE(...$a) {
          this._M_head_impl$_ZSt10_Head_baseILi0ERxLi0EE = $a[0];
        }
        __dtor() {
        }
        static _ZNSt10_Head_baseILi0ERxLi0EE7_M_headERS1_(__b) {
          return (__b.a[__b.i])._M_head_impl$_ZSt10_Head_baseILi0ERxLi0EE;
        }
      }
      class _ZSt11_Tuple_implILi0ERKxE extends _ZSt11_Tuple_implILi1EE {
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt11_Tuple_implILi0ERKxE(...$a);
        }
        __init__ZSt11_Tuple_implILi0ERKxE(...$a) {
          _ZSt10_Head_baseILi0ERxLi0EE.prototype.__init__ZSt10_Head_baseILi0ERxLi0EE.call(this, $a[0]);
        }
        __dtor() {
          _ZSt11_Tuple_implILi1EE.prototype.__dtor.call(this);
          _ZSt10_Head_baseILi0ERxLi0EE.prototype.__dtor.call(this);
        }
        static _ZNSt11_Tuple_implILi0ERKxE7_M_headERS2_(__t) {
          return _ZSt10_Head_baseILi0ERxLi0EE._ZNSt10_Head_baseILi0ERxLi0EE7_M_headERS1_(__t);
        }
      }
      for (let $b = _ZSt10_Head_baseILi0ERxLi0EE; $b && $b.prototype; $b = Object.getPrototypeOf($b)) {
        for (const $k of Object.getOwnPropertyNames($b.prototype)) {
          if ($k !== "constructor" && !($k in _ZSt11_Tuple_implILi0ERKxE.prototype)) _ZSt11_Tuple_implILi0ERKxE.prototype[$k] = $b.prototype[$k];
        }
        for (const $k of Object.getOwnPropertyNames($b)) {
          if ($k !== "prototype" && $k !== "name" && $k !== "length" && !($k in _ZSt11_Tuple_implILi0ERKxE)) _ZSt11_Tuple_implILi0ERKxE[$k] = $b[$k];
        }
      }
      class _ZSt5tupleIRKxE extends _ZSt11_Tuple_implILi0ERKxE {
        constructor(...$a) {
          super(...[$a[0]]);
          this.__init__ZSt5tupleIRKxE(...$a);
        }
        __init__ZSt5tupleIRKxE(...$a) {
        }
        __dtor() {
          _ZSt11_Tuple_implILi0ERKxE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5tuple {
        constructor(...$a) {
          this.__init__ZSt5tuple(...$a);
        }
        __init__ZSt5tuple(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE {
        _M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE;
        constructor(...$a) {
          this.__init__ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE(...$a);
        }
        __init__ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE(...$a) {
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt17_Rb_tree_iteratorISt4pairIKxyEE)) {
            this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE).i} : null);
          }
          else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE)) {
            this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE = (((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE) ? {a: ((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE).a, i: ((($a[0]).a[($a[0]).i])._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE).i} : null);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
        _ZNKSt23_Rb_tree_const_iteratorISt4pairIKxyEE13_M_const_castEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE ? {a: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE.a, i: this._M_node$_ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE.i} : null));
        }
      }
      class _ZSt9enable_ifILi1EvE {
        __init__ZSt9enable_ifILi1EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt21piecewise_construct_tE {
        __init__ZSt16remove_referenceISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt5tupleIRKxEE {
        __init__ZSt16remove_referenceISt5tupleIRKxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceISt5tupleE {
        __init__ZSt16remove_referenceISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt4pairIPSt18_Rb_tree_node_baseS0_E {
        first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
        second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
        constructor(...$a) {
          this.__init__ZSt4pairIPSt18_Rb_tree_node_baseS0_E(...$a);
        }
        __init__ZSt4pairIPSt18_Rb_tree_node_baseS0_E(...$a) {
          let $t10, $t11, $t12, $t13;
          if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof _ZSt4pairIPSt18_Rb_tree_node_baseS0_E)) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E;
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
          }
          else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
            this.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($t10 = _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKxyEEEOS_S5_($a[0]), $t11 = ($t10 ? $t10.a[$t10.i] : null), $t11 && $t11.a !== undefined ? {a: $t11.a, i: $t11.i} : $t11);
            this.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E = ($t12 = _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKxyEEEOS_S5_($a[1]), $t13 = ($t12 ? $t12.a[$t12.i] : null), $t13 && $t13.a !== undefined ? {a: $t13.a, i: $t13.i} : $t13);
          }
          else { throw new Error("no matching constructor"); }
        }
        __dtor() {
        }
      }
      class _ZSt7is_voidIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt7is_voidIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIRPSt18_Rb_tree_node_baseE {
        __init__ZSt9remove_cvIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIRPSt18_Rb_tree_node_baseE {
        __init__ZSt15remove_volatileIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIRPSt18_Rb_tree_node_baseE {
        __init__ZSt12remove_constIRPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt16__is_void_helperIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt11is_functionIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt8is_arrayIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE extends _ZSt8is_arrayIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIRPSt18_Rb_tree_node_baseESt11is_functionIS2_ESt8is_arrayIS2_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIRPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIRPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS2_ESt8is_arrayIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIRPSt18_Rb_tree_node_baseS1_Li0EE(...$a) {
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
      class _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E(...$a);
        }
        __init__ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt12is_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE extends _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi1ESt19is_lvalue_referenceIRPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt12is_referenceIRPSt18_Rb_tree_node_baseEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi0ESt6__not_ISt7is_voidIRPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE {
        __init__ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE extends _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIRPSt18_Rb_tree_node_baseLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E extends _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIRPKSt18_Rb_tree_node_basePS3_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIRPKSt18_Rb_tree_node_basePS4_ES6_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E(...$a);
        }
        __init__ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt7is_voidIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt18_Rb_tree_node_baseE {
        __init__ZSt9remove_cvIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt18_Rb_tree_node_baseE {
        __init__ZSt15remove_volatileIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt18_Rb_tree_node_baseE {
        __init__ZSt12remove_constIPSt18_Rb_tree_node_baseE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_baseS0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt12is_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt12is_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt18_Rb_tree_node_baseESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt18_Rb_tree_node_baseEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt18_Rb_tree_node_baseEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE extends _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt18_Rb_tree_node_baseLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E extends _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIPSt18_Rb_tree_node_baseS0_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_ES3_E(...$a) { }
        __dtor() {
        }
      }
      class _ZNSt9allocatorISt4pairIKxyEE6rebindISt13_Rb_tree_nodeIS2_EEE {
        __init__ZNSt9allocatorISt4pairIKxyEE6rebindISt13_Rb_tree_nodeIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        __init__ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) { }
        __dtor() {
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE8allocateEmPKv(__n, $p1 = {a: [0], i: 0}) {
          let $t14;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t14 = _Znwm(((Math.imul(__n, 32)) >>> 0)), $t14 ? {a: $t14.a, i: $t14.i} : null);
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE10deallocateEPS5_m(__p, $p1) {
          _ZdlPv((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNK9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE8max_sizeEv() {
          return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (32))) >>> 0);
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES8_EEvPS5_OS7_OSA_OS8_(__p, __args_0, __args_1, __args_2) {
          (__p.a[__p.i] = new _ZSt13_Rb_tree_nodeISt4pairIKxyEE(_ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
        }
        _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE7destroyIS5_EEvPS5_(__p) {
          _ZSt13_Rb_tree_nodeISt4pairIKxyEE.prototype.__dtor.call(__p.a[__p.i]);
        }
      }
      class _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE extends _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE {
        _M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        _M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        _M_node_count$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE(...$a);
        }
        __init__ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE(...$a) {
          this._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = new _ZSt4lessIxE();
          this._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_a = this; this._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_i = "_M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE";
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = new _ZSt18_Rb_tree_node_base();
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_a = this; this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE.ctj_i = "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE";
          this._M_node_count$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((0) >>> 0);
          this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EE13_M_initializeEv();
        }
        __dtor() {
          _ZSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE.prototype.__dtor.call(this);
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EE13_M_initializeEv() {
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_color = 0;
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent = null;
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left = (({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
          this._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_right = (({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
        }
      }
      class _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE {
        _M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE;
        constructor(...$a) {
          this.__init__ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE(...$a);
        }
        __init__ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE(...$a) {
          this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE = new _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE();
          this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.ctj_a = this; this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.ctj_i = "_M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE";
        }
        __dtor() {
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE"};
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_get_nodeEv() {
          let $t15;
          return ($t15 = _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE8allocateEmPKv.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, ((1) >>> 0), {a: [0], i: 0}), $t15 ? {a: $t15.a, i: $t15.i} : null);
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E(__p) {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE10deallocateEPS5_m.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E(__p) {
          let $t16;
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE7destroyIS5_EEvPS5_.call(($t16 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE21_M_get_Node_allocatorEv(), $t16.a[$t16.i]), (__p ? {a: __p.a, i: __p.i} : null));
          this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E((__p ? {a: __p.a, i: __p.i} : null));
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv() {
          return {a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, i: "_M_left"};
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv() {
          return {a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, i: "_M_right"};
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_M_beginEv() {
          return (this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent ? {a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent.a, i: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_parent.i} : null);
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_M_endEv() {
          return (({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null);
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_valueEPKSt13_Rb_tree_nodeIS2_E(__x) {
          return {a: __x.a[__x.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE"};
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_valueEPKSt18_Rb_tree_node_base(__x) {
          return {a: __x.a[__x.i], i: "_M_value_field$_ZSt13_Rb_tree_nodeISt4pairIKxyEE"};
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E(__x) {
          let $t17;
          return (($t17 = new _ZSt10_Select1stISt4pairIKxyEE(), $t17))._ZNKSt10_Select1stISt4pairIKxyEEclERS2_(_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_valueEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)));
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(__x) {
          let $t18;
          return (($t18 = new _ZSt10_Select1stISt4pairIKxyEE(), $t18))._ZNKSt10_Select1stISt4pairIKxyEEclERS2_(_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_valueEPKSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)));
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base(__x) {
          return (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
        }
        static _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base(__x) {
          return (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k) {
          let $t19, $t20, $t21;
          let __x = ($t19 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_M_beginEv(), $t19 ? {a: $t19.a, i: $t19.i} : null);
          let __y = ($t20 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_M_endEv(), $t20 ? {a: $t20.a, i: $t20.i} : null);
          let __comp = true;
          while ((__x !== null)) {
             {
              __y = (__x ? {a: __x.a, i: __x.i} : null);
              __comp = _ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)));
              __x = ($t21 = (__comp ? _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)) : _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null))), $t21 ? {a: $t21.a, i: $t21.i} : null);
            }
          }
          let __j = new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((__y ? {a: __y.a, i: __y.i} : null));
          if (__comp) {
             {
              if (__j._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEeqERKS3_({a: [this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE5beginEv()], i: 0})) {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [__x], i: 0}, {a: [__y], i: 0});
              }
              else {
                __j._ZNSt17_Rb_tree_iteratorISt4pairIKxyEEmmEv();
              }
            }
          }
          if (_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: __j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: __j._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)), __k)) {
            return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [__x], i: 0}, {a: [__y], i: 0});
          }
          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __j, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"}, {a: [null], i: 0});
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE29_M_get_insert_hint_unique_posESt23_Rb_tree_const_iteratorIS2_ERS1_(__position, __k) {
          let $t22, $t23, $t24, $t25, $t26, $t27, $t28, $t29, $t30, $t31, $t32, $t33;
          let __pos = _ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE.prototype._ZNKSt23_Rb_tree_const_iteratorISt4pairIKxyEE13_M_const_castEv.call(__position);
          if (($t23 = ($t22 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_M_endEv(), $t22), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE === $t23 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE && $t23 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a === $t23.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i === $t23.i)))) {
             {
              if (((this._ZNKSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE4sizeEv() > ((0) >>> 0)) && _ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t24 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv(), $t25 = ($t24 ? $t24.a[$t24.i] : null), $t25 && $t25.a !== undefined ? {a: $t25.a, i: $t25.i} : $t25)), __k))) {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv());
              }
              else {
                return this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
              }
            }
          }
          else {
            if (_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)))) {
               {
                let __before = new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE({a: [__pos], i: 0});
                if (($t27 = (($t26 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv(), $t26) ? (($t26 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv(), $t26)).a[(($t26 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv(), $t26)).i] : null), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE === $t27 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE && $t27 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a === $t27.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i === $t27.i)))) {
                  return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E(this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv(), this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_leftmostEv());
                }
                else {
                  if (_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t29 = (($t28 = __before._ZNSt17_Rb_tree_iteratorISt4pairIKxyEEmmEv(), $t28.a[$t28.i]))._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE, $t29 ? {a: $t29.a, i: $t29.i} : null)), __k)) {
                     {
                      if ((_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: __before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: __before._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)) === null)) {
                        return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, {a: __before, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"});
                      }
                      else {
                        return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"}, {a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"});
                      }
                    }
                  }
                  else {
                    return this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
                  }
                }
              }
            }
            else {
              if (_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)), __k)) {
                 {
                  let __after = new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE({a: [__pos], i: 0});
                  if (($t31 = (($t30 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv(), $t30) ? (($t30 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv(), $t30)).a[(($t30 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv(), $t30)).i] : null), (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE === $t31 || (__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE && $t31 && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a === $t31.a && __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i === $t31.i)))) {
                    return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE12_M_rightmostEv());
                  }
                  else {
                    if (_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, __k, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base(($t33 = (($t32 = __after._ZNSt17_Rb_tree_iteratorISt4pairIKxyEEppEv(), $t32.a[$t32.i]))._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE, $t33 ? {a: $t33.a, i: $t33.i} : null)))) {
                       {
                        if ((_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE ? {a: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.a, i: __pos._M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE.i} : null)) === null)) {
                          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: [null], i: 0}, {a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"});
                        }
                        else {
                          return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __after, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"}, {a: __after, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"});
                        }
                      }
                    }
                    else {
                      return this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE24_M_get_insert_unique_posERS1_(__k);
                    }
                  }
                }
              }
              else {
                return new _ZSt4pairIPSt18_Rb_tree_node_baseS0_E({a: __pos, i: "_M_node$_ZSt17_Rb_tree_iteratorISt4pairIKxyEE"}, {a: [null], i: 0});
              }
            }
          }
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_insert_nodeEPSt18_Rb_tree_node_baseSA_PSt13_Rb_tree_nodeIS2_E(__x, __p, __z) {
          let $t34, $t35;
          let __insert_left = (((__x !== null) || ($t35 = ($t34 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_M_endEv(), $t34), (__p === $t35 || (__p && $t35 && __p.a === $t35.a && __p.i === $t35.i)))) || _ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null)), _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt18_Rb_tree_node_base((__p ? {a: __p.a, i: __p.i} : null))));
          _ZSt29_Rb_tree_insert_and_rebalanceKbPSt18_Rb_tree_node_baseS0_RS1_(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"});
          (this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE = ((this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE + 1) >>> 0));
          return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((__z ? {a: __z.a, i: __z.i} : null));
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_lower_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_(__x, __y, __k) {
          let $t36, $t37;
          while ((__x !== null)) {
            if ((!(_ZSt4lessIxE.prototype._ZNKSt4lessIxEclERKxS1_.call(this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE, _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__x ? {a: __x.a, i: __x.i} : null)), __k)))) {
              (__y = (__x ? {a: __x.a, i: __x.i} : null), __x = ($t36 = _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE7_S_leftEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t36 ? {a: $t36.a, i: $t36.i} : null));
            }
            else {
              __x = ($t37 = _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_S_rightEPSt18_Rb_tree_node_base((__x ? {a: __x.a, i: __x.i} : null)), $t37 ? {a: $t37.a, i: $t37.i} : null);
            }
          }
          return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((__y ? {a: __y.a, i: __y.i} : null));
        }
        _ZNKSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8key_compEv() {
          return new _ZSt4lessIxE({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_key_compare$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"});
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE5beginEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left ? {a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left.a, i: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE._M_left.i} : null));
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE3endEv() {
          return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}) ? {a: ({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).a, i: ({a: this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE, i: "_M_header$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE"}).i} : null));
        }
        _ZNKSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE4sizeEv() {
          return this._M_impl$_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._M_node_count$_ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE13_Rb_tree_implIS6_Li1EEE;
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11lower_boundERS1_(__k) {
          let $t38, $t39;
          return this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_lower_boundEPSt13_Rb_tree_nodeIS2_ESA_RS1_(($t38 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8_M_beginEv(), $t38 ? {a: $t38.a, i: $t38.i} : null), ($t39 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_M_endEv(), $t39 ? {a: $t39.a, i: $t39.i} : null), __k);
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE22_M_emplace_hint_uniqueISt21piecewise_construct_tSt5tupleIRS1_ESB_EESt17_Rb_tree_iteratorIS2_ESt23_Rb_tree_const_iteratorIS2_EOSA_OSD_OSB_(__pos, __args_0, __args_1, __args_2) {
          let $t40;
          let __z = ($t40 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_create_nodeISt21piecewise_construct_tSt5tupleIRS1_ESB_EEPSt13_Rb_tree_nodeIS2_EOSA_OSD_OSB_(_ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2)), $t40 ? {a: $t40.a, i: $t40.i} : null);
          if (true) {
             {
              let __res = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE29_M_get_insert_hint_unique_posESt23_Rb_tree_const_iteratorIS2_ERS1_(new _ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE({a: [__pos], i: 0}), _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE6_S_keyEPKSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null)));
              if (__res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E) {
                return this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_insert_nodeEPSt18_Rb_tree_node_baseSA_PSt13_Rb_tree_nodeIS2_E((__res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null), (__res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.second$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null), (__z ? {a: __z.a, i: __z.i} : null));
              }
              this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null));
              return new _ZSt17_Rb_tree_iteratorISt4pairIKxyEE((__res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E ? {a: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.a, i: __res.first$_ZSt4pairIPSt18_Rb_tree_node_baseS0_E.i} : null));
            }
          }
          if (false) {
             {
              this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE15_M_destroy_nodeEPSt13_Rb_tree_nodeIS2_E((__z ? {a: __z.a, i: __z.i} : null));
            }
          }
        }
        _ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE14_M_create_nodeISt21piecewise_construct_tSt5tupleIRS1_ESB_EEPSt13_Rb_tree_nodeIS2_EOSA_OSD_OSB_(__args_0, __args_1, __args_2) {
          let $t41;
          let __tmp = ($t41 = this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_get_nodeEv(), $t41 ? {a: $t41.a, i: $t41.i} : null);
          if (true) {
             {
              _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE._ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE21_M_get_Node_allocatorEv(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
            }
          }
          if (false) {
             {
              this._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11_M_put_nodeEPSt13_Rb_tree_nodeIS2_E((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
            }
          }
          return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
        }
      }
      class _ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE {
        _M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE;
        constructor(...$a) {
          this.__init__ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE(...$a);
        }
        __init__ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE(...$a) {
          this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE = new _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE();
          this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE.ctj_a = this; this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE.ctj_i = "_M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE";
        }
        __dtor() {
        }
        _ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE3endEv() {
          return _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE3endEv.call(this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE);
        }
        _ZNKSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE4sizeEv() {
          return _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.prototype._ZNKSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE4sizeEv.call(this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE);
        }
        _ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEEixERS4_(__k) {
          let $t42;
          let __i = {v: this._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE11lower_boundERS4_(__k)};
          if ((__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEeqERKS3_({a: [this._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE3endEv()], i: 0}) || (($t42 = this._ZNKSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE8key_compEv(), $t42))._ZNKSt4lessIxEclERKxS1_(__k, {a: (__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEdeEv()).a[(__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEdeEv()).i], i: "first$_ZSt4pairIKxyE"}))) {
            __i.v._ZNSt17_Rb_tree_iteratorISt4pairIKxyEEaSERS3_({a: [_ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE22_M_emplace_hint_uniqueISt21piecewise_construct_tSt5tupleIRS1_ESB_EESt17_Rb_tree_iteratorIS2_ESt23_Rb_tree_const_iteratorIS2_EOSA_OSD_OSB_.call(this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE, new _ZSt23_Rb_tree_const_iteratorISt4pairIKxyEE({a: __i, i: "v"}), {a: _ZSt19piecewise_construct, i: "v"}, {a: [new _ZSt5tupleIRKxE(__k)], i: 0}, {a: [new _ZSt5tuple()], i: 0})], i: 0});
          }
          return {a: (__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEdeEv()).a[(__i.v._ZNKSt17_Rb_tree_iteratorISt4pairIKxyEEdeEv()).i], i: "second$_ZSt4pairIKxyE"};
        }
        _ZNKSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE8key_compEv() {
          return _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.prototype._ZNKSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE8key_compEv.call(this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE);
        }
        _ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE11lower_boundERS4_(__x) {
          return _ZSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE.prototype._ZNSt8_Rb_treeIxSt4pairIKxyESt10_Select1stIS2_ESt4lessIxESt9allocatorIS2_EE11lower_boundERS1_.call(this._M_t$_ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE, __x);
        }
      }
      class _ZSt14is_convertibleIxSt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIxSt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt14is_convertibleIxSt17__uses_alloc_baseE(...$a) {
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
      class _ZSt11is_functionISt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionISt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt11is_functionISt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayISt17__uses_alloc_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayISt17__uses_alloc_baseE(...$a);
        }
        __init__ZSt8is_arrayISt17__uses_alloc_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE extends _ZSt8is_arrayISt17__uses_alloc_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayISt17__uses_alloc_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIxESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE extends _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIxESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIxESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionISt17__uses_alloc_baseESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIxESt5__or_ISt11is_functionISt17__uses_alloc_baseESt8is_arrayIS4_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIxSt17__uses_alloc_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIxSt17__uses_alloc_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIxSt17__uses_alloc_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
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
      class _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        __init__ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) { }
        __dtor() {
        }
        static _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, __p, __args_0, __args_1, __args_2) {
          _ZSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE._ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE12_S_constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
        }
        static _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE12_S_constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES9_EEvRS6_PS5_OS8_OSB_OS9_(__a, __p, __args_0, __args_1, __args_2) {
          _ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype._ZN9__gnu_cxx13new_allocatorISt13_Rb_tree_nodeISt4pairIKxyEEE9constructIS5_St21piecewise_construct_tSt5tupleIRS3_ES8_EEvPS5_OS7_OSA_OS8_.call(__a.a[__a.i], (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__args_0), _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__args_1), _ZSt7forwardISt5tupleEOS_S0_(__args_2));
        }
      }
      class _ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE {
        constructor(...$a) {
          this.__init__ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE(...$a);
        }
        __init__ZNSt16allocator_traitsISt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE18__construct_helperIS5_St21piecewise_construct_tSt5tupleIRS3_ESA_EE(...$a) {
        }
        __dtor() {
        }
        static value = 1;
      }
      class _ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        __init__ZSt9remove_cvIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        __init__ZSt15remove_volatileIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        __init__ZSt12remove_constIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKxyEELi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKxyEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKxyEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt13_Rb_tree_nodeISt4pairIKxyEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt12is_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceISt21piecewise_construct_tE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt21piecewise_construct_tE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt21piecewise_construct_tESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt21piecewise_construct_tEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt7is_voidISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt21piecewise_construct_tE {
        __init__ZSt9remove_cvISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt21piecewise_construct_tE {
        __init__ZSt15remove_volatileISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt21piecewise_construct_tE {
        __init__ZSt12remove_constISt21piecewise_construct_tE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt21piecewise_construct_tE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt16__is_void_helperISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt21piecewise_construct_tEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt21piecewise_construct_tEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt21piecewise_construct_tEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt21piecewise_construct_tEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt21piecewise_construct_tE extends _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt21piecewise_construct_tLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt5tupleIRKxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt5tupleIRKxEE(...$a);
        }
        __init__ZSt12is_referenceISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt5tupleIRKxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt5tupleIRKxEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt5tupleIRKxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt5tupleIRKxEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKxEESt19is_rvalue_referenceIS4_EE extends _ZSt19is_rvalue_referenceISt5tupleIRKxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKxEESt19is_rvalue_referenceIS4_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleIRKxEESt19is_rvalue_referenceIS4_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt5tupleIRKxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleIRKxEESt19is_rvalue_referenceIS4_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleIRKxEESt19is_rvalue_referenceIS4_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt5tupleIRKxEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt5tupleIRKxEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt5tupleIRKxEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt5tupleIRKxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt5tupleIRKxEE(...$a);
        }
        __init__ZSt7is_voidISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt5tupleIRKxEE {
        __init__ZSt9remove_cvISt5tupleIRKxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt5tupleIRKxEE {
        __init__ZSt15remove_volatileISt5tupleIRKxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt5tupleIRKxEE {
        __init__ZSt12remove_constISt5tupleIRKxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt5tupleIRKxEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt5tupleIRKxEE(...$a);
        }
        __init__ZSt16__is_void_helperISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt5tupleIRKxEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt5tupleIRKxEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt5tupleIRKxEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKxEEEStS0_ISt7is_voidIS5_EEE extends _ZSt6__not_ISt7is_voidISt5tupleIRKxEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKxEEEStS0_ISt7is_voidIS5_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleIRKxEEEStS0_ISt7is_voidIS5_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt5tupleIRKxEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleIRKxEEEStS0_ISt12is_referenceIS5_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleIRKxEEEStS0_ISt12is_referenceIS5_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt5tupleIRKxELi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt5tupleIRKxELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt5tupleIRKxEE extends _ZSt29__add_rvalue_reference_helperISt5tupleIRKxELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt5tupleIRKxEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt5tupleIRKxELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceISt5tupleE(...$a);
        }
        __init__ZSt12is_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt19is_lvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt19is_rvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceISt5tupleE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceISt5tupleE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceISt5tupleESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceISt5tupleEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceISt5tupleEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceISt5tupleEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidISt5tupleE(...$a);
        }
        __init__ZSt7is_voidISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvISt5tupleE {
        __init__ZSt9remove_cvISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileISt5tupleE {
        __init__ZSt15remove_volatileISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constISt5tupleE {
        __init__ZSt12remove_constISt5tupleE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperISt5tupleE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperISt5tupleE(...$a);
        }
        __init__ZSt16__is_void_helperISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidISt5tupleEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidISt5tupleEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidISt5tupleEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidISt5tupleEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceISt5tupleEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidISt5tupleEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidISt5tupleEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE {
        __init__ZSt29__add_rvalue_reference_helperISt5tupleLi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceISt5tupleE extends _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceISt5tupleE(...$a);
        }
        __init__ZSt20add_rvalue_referenceISt5tupleE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperISt5tupleLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEESt19is_rvalue_referenceIS1_EE extends _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEESt19is_rvalue_referenceIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEESt19is_rvalue_referenceIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt19is_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEESt19is_rvalue_referenceIS1_EE {
        __init__ZSt11conditionalILi0ESt19is_lvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEESt19is_rvalue_referenceIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE(...$a);
        }
        __init__ZSt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt9remove_cvIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        __init__ZSt9remove_cvIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt15remove_volatileIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        __init__ZSt15remove_volatileIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12remove_constIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        __init__ZSt12remove_constIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt16__is_void_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE(...$a);
        }
        __init__ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEEStS0_ISt7is_voidIS2_EEE extends _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEEStS0_ISt7is_voidIS2_EEE(...$a);
        }
        __init__ZSt6__and_ISt6__not_ISt12is_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEEStS0_ISt7is_voidIS2_EEE(...$a) {
        }
        __dtor() {
          _ZSt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEEStS0_ISt12is_referenceIS2_EEE {
        __init__ZSt11conditionalILi1ESt6__not_ISt7is_voidIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEEStS0_ISt12is_referenceIS2_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEELi1EE {
        __init__ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEELi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE extends _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEELi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt20add_rvalue_referenceIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
        }
        __dtor() {
          _ZSt29__add_rvalue_reference_helperIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEELi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE(...$a);
        }
        __init__ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt16is_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt23__is_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt23__is_nary_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E.prototype.__dtor.call(this);
        }
      }
      class _ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E extends _ZSt31__do_is_nary_constructible_impl {
        constructor(...$a) {
          super();
          this.__init__ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a);
        }
        __init__ZSt28__is_nary_constructible_implISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS2_ES6_E(...$a) {
        }
        __dtor() {
          _ZSt31__do_is_nary_constructible_impl.prototype.__dtor.call(this);
        }
      }
      class _ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE extends _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE(...$a);
        }
        __init__ZSt6__and_ISt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS8_ESC_EEESt16is_constructibleISA_SB_SE_SC_EE(...$a) {
        }
        __dtor() {
          _ZSt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS7_ESB_EEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt16is_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS3_ES7_ESt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperIS5_S6_S9_S7_EEEE {
        __init__ZSt11conditionalILi0ESt16is_constructibleISt13_Rb_tree_nodeISt4pairIKxyEESt21piecewise_construct_tSt5tupleIRS3_ES7_ESt6__not_INSt22allocator_traits$3cstd15allocator$3cstd19_Rb_tree_node$3cstd55pair$3clong$20long$2cunsigned$20long$20long$3e$3e$3e$3e18__construct_helperIS5_S6_S9_S7_EEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9enable_ifILi0EvE {
        __init__ZSt9enable_ifILi0EvE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE(...$a) {
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
      class _ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIiESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS3_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS4_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIiESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS4_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIiPSt18_Rb_tree_node_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
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
      class _ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE(...$a);
        }
        __init__ZSt14is_convertibleIPSt18_Rb_tree_node_basePiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPiE(...$a);
        }
        __init__ZSt11is_functionIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPiE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPiE(...$a);
        }
        __init__ZSt8is_arrayIPiE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE extends _ZSt8is_arrayIPiE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPiE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE extends _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt18_Rb_tree_node_baseESt11is_functionIPiESt8is_arrayIS5_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPiESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPiESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPiESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIPiESt8is_arrayIS6_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt18_Rb_tree_node_baseESt5__or_ISt11is_functionIPiESt8is_arrayIS6_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt18_Rb_tree_node_basePiLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE extends _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE {
        __init__ZSt11conditionalILi0ESt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE extends _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt18_Rb_tree_node_baseS1_EStS0_IiS1_EE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIiPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE {
        __init__ZSt11conditionalILi1ESt14is_convertibleIiPSt18_Rb_tree_node_baseEStS0_IS1_S1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE(...$a) {
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
      class _ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt21piecewise_construct_tE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt21piecewise_construct_tE(...$a);
        }
        __init__ZSt19__declval_protectorISt21piecewise_construct_tE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt5tupleIRKxEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt5tupleIRKxEE(...$a);
        }
        __init__ZSt19__declval_protectorISt5tupleIRKxEE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorISt5tupleE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorISt5tupleE(...$a);
        }
        __init__ZSt19__declval_protectorISt5tupleE(...$a) {
        }
        __dtor() {
        }
        static __stop = 0;
      }
      class _ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE {
        constructor(...$a) {
          this.__init__ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a);
        }
        __init__ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE(...$a) {
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
      class _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEES0_E extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEES0_E(...$a);
        }
        __init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEES0_E(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKxyEEE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a);
        }
        __init__ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE extends _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIPSt13_Rb_tree_nodeISt4pairIKxyEEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIS1_ESt8is_arrayIS1_EE extends _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIS1_ESt8is_arrayIS1_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE {
        __init__ZSt11conditionalILi0ESt11is_functionIPSt13_Rb_tree_nodeISt4pairIKxyEEESt8is_arrayIS1_EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt5__or_ISt11is_functionIS1_ESt8is_arrayIS1_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEES0_Li0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEES0_Li0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEES0_Li0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseE extends _ZSt17integral_constantIbLi1EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseE(...$a);
        }
        __init__ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi1EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE extends _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS9_EE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayIS1_EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayISA_EEE {
        __init__ZSt11conditionalILi0ESt7is_voidIPSt13_Rb_tree_nodeISt4pairIKxyEEESt5__or_ISt11is_functionIPSt18_Rb_tree_node_baseESt8is_arrayISA_EEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 1;
      }
      class _ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseES9_E extends _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseES9_E(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseES9_E(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi1ESt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseES9_E {
        __init__ZSt11conditionalILi1ESt14is_convertibleIPSt13_Rb_tree_nodeISt4pairIKxyEEPSt18_Rb_tree_node_baseES9_E(...$a) { }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleISt21piecewise_construct_txE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt21piecewise_construct_txE(...$a);
        }
        __init__ZSt14is_convertibleISt21piecewise_construct_txE(...$a) {
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
      class _ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIxESt8is_arrayIxEE extends _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIxESt8is_arrayIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt21piecewise_construct_tESt11is_functionIxESt8is_arrayIxEE(...$a) {
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
      class _ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionIxESt8is_arrayIxEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt21piecewise_construct_tESt5__or_ISt11is_functionIxESt8is_arrayIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt21piecewise_construct_txLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt21piecewise_construct_txLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt21piecewise_construct_txLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleIRKxEyE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleIRKxEyE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleIRKxEyE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11is_functionIyE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt11is_functionIyE(...$a);
        }
        __init__ZSt11is_functionIyE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt8is_arrayIyE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt8is_arrayIyE(...$a);
        }
        __init__ZSt8is_arrayIyE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE extends _ZSt8is_arrayIyE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE(...$a);
        }
        __init__ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE(...$a) {
        }
        __dtor() {
          _ZSt8is_arrayIyE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIyESt8is_arrayIyEE extends _ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIyESt8is_arrayIyEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIyESt8is_arrayIyEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt11is_functionIyESt8is_arrayIyEE {
        __init__ZSt11conditionalILi0ESt11is_functionIyESt8is_arrayIyEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleIRKxEESt5__or_ISt11is_functionIyESt8is_arrayIyEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleIRKxEESt5__or_ISt11is_functionIyESt8is_arrayIyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleIRKxEyLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleIRKxEyLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleIRKxEyLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleISt21piecewise_construct_txEStS0_ISt5tupleIRKxEyEE extends _ZSt14is_convertibleISt21piecewise_construct_txE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleISt21piecewise_construct_txEStS0_ISt5tupleIRKxEyEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleISt21piecewise_construct_txEStS0_ISt5tupleIRKxEyEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleISt21piecewise_construct_txE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleISt5tupleIRKxEyEStS0_ISt21piecewise_construct_txEE {
        __init__ZSt11conditionalILi0ESt14is_convertibleISt5tupleIRKxEyEStS0_ISt21piecewise_construct_txEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE {
        __init__ZSt16remove_referenceIPSt13_Rb_tree_nodeISt4pairIKxyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18_Build_index_tupleILi1EE {
        __init__ZSt18_Build_index_tupleILi1EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt18_Build_index_tupleILi0EE {
        __init__ZSt18_Build_index_tupleILi0EE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt12_Index_tuple {
        constructor(...$a) {
          this.__init__ZSt12_Index_tuple(...$a);
        }
        __init__ZSt12_Index_tuple(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt12_Index_tupleILi0EE {
        constructor(...$a) {
          this.__init__ZSt12_Index_tupleILi0EE(...$a);
        }
        __init__ZSt12_Index_tupleILi0EE(...$a) {
        }
        __dtor() {
        }
      }
      class _ZSt14is_convertibleISt5tupleIRKxExE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleIRKxExE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleIRKxExE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIxESt8is_arrayIxEE extends _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIxESt8is_arrayIxEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleIRKxEESt11is_functionIxESt8is_arrayIxEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIxESt8is_arrayIxEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleIRKxEESt5__or_ISt11is_functionIxESt8is_arrayIxEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleIRKxEESt5__or_ISt11is_functionIxESt8is_arrayIxEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleIRKxExLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleIRKxExLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleIRKxExLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt14is_convertibleISt5tupleyE extends _ZSt17integral_constantIbLi0EE {
        constructor(...$a) {
          super();
          this.__init__ZSt14is_convertibleISt5tupleyE(...$a);
        }
        __init__ZSt14is_convertibleISt5tupleyE(...$a) {
        }
        __dtor() {
          _ZSt17integral_constantIbLi0EE.prototype.__dtor.call(this);
        }
      }
      class _ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIyESt8is_arrayIyEE extends _ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE {
        constructor(...$a) {
          super();
          this.__init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIyESt8is_arrayIyEE(...$a);
        }
        __init__ZSt5__or_ISt7is_voidISt5tupleESt11is_functionIyESt8is_arrayIyEE(...$a) {
        }
        __dtor() {
          _ZSt5__or_ISt11is_functionIyESt8is_arrayIyEE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIyESt8is_arrayIyEEE {
        __init__ZSt11conditionalILi0ESt7is_voidISt5tupleESt5__or_ISt11is_functionIyESt8is_arrayIyEEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt23__is_convertible_helperISt5tupleyLi0EE extends _ZSt14__sfinae_types {
        constructor(...$a) {
          super();
          this.__init__ZSt23__is_convertible_helperISt5tupleyLi0EE(...$a);
        }
        __init__ZSt23__is_convertible_helperISt5tupleyLi0EE(...$a) {
        }
        __dtor() {
          _ZSt14__sfinae_types.prototype.__dtor.call(this);
        }
        static value = 0;
      }
      class _ZSt6__and_ISt14is_convertibleISt5tupleIRKxExEStS0_IS1_yEE extends _ZSt14is_convertibleISt5tupleIRKxExE {
        constructor(...$a) {
          super();
          this.__init__ZSt6__and_ISt14is_convertibleISt5tupleIRKxExEStS0_IS1_yEE(...$a);
        }
        __init__ZSt6__and_ISt14is_convertibleISt5tupleIRKxExEStS0_IS1_yEE(...$a) {
        }
        __dtor() {
          _ZSt14is_convertibleISt5tupleIRKxExE.prototype.__dtor.call(this);
        }
      }
      class _ZSt11conditionalILi0ESt14is_convertibleISt5tupleyEStS0_IStS1_IRKxExEE {
        __init__ZSt11conditionalILi0ESt14is_convertibleISt5tupleyEStS0_IStS1_IRKxExEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt13tuple_elementILi0ESt5tupleIRKxEE {
        __init__ZSt13tuple_elementILi0ESt5tupleIRKxEE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt9__add_refIRxE {
        __init__ZSt9__add_refIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_c_refIRxE {
        __init__ZSt11__add_c_refIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt11__add_r_refIRxE {
        __init__ZSt11__add_r_refIRxE(...$a) { }
        __dtor() {
        }
      }
      class _ZSt16remove_referenceIRxE {
        __init__ZSt16remove_referenceIRxE(...$a) { }
        __dtor() {
        }
      }
      function _ZSt17__throw_bad_allocv(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(__os, __n) {
        _ZSt13basic_ostreamIcSt11char_traitsIcEE.prototype._ZNSt13basic_ostreamIcSt11char_traitsIcEE6_M_putEidPKcl.call(__os.a[__os.i], 0, __n, null, 0);
        return __os;
      }
      function _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(__os, __n) {
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
      function _ZSt18_Rb_tree_incrementPSt18_Rb_tree_node_base(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; if(n._M_right){ x=n._M_right; n=x.a[x.i]; while(n._M_left){ x=n._M_left; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_right)) break; x=y; n=p; y=n._M_parent; } n=x.a[x.i]; if(!n._M_right||!_ctj_peq(n._M_right,y)) x=y; return x?{a:x.a,i:x.i}:null; }
      function _ZSt18_Rb_tree_decrementPSt18_Rb_tree_node_base(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
      function _ZSt29_Rb_tree_insert_and_rebalanceKbPSt18_Rb_tree_node_baseS0_RS1_(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
      function _Z7partialv() {
        let ps = [new _Z1P(), ...Array.from({length: 2}, () => new _Z1P())];
        let q = new _Z1Q();
        let grid = [[1, ...new Array(2).fill(0)], ...Array.from({length: 1}, () => new Array(3).fill(0))];
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEi({a: _ZSt4cout, i: "v"}, (ps[2]).x), {a: [32, 0], i: 0}), (ps[1]).y), {a: [32, 0], i: 0}), (q.p[1]).y), {a: [32, 0], i: 0}), (grid[1])[2]), {a: [32, 0], i: 0}), (grid[0])[0]), {a: [_ZSt4endl], i: 0});
        return 0;
      }
      function main() {
        let $t43, $t44, $t45, $t46, $t47, $t48, $t49, $t50;
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, _Z1K), {a: [32, 0], i: 0}), _Z1G), {a: [32, 0], i: 0}), _Z4MASK), {a: [32, 0], i: 0}), _Z1A.S), {a: [32, 0], i: 0}), _Z1A.cnt), {a: [_ZSt4endl], i: 0});
        let a = new _Z1A();
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, a.m), {a: [32, 0], i: 0}), a.u), {a: [32, 0], i: 0}), _Z1TILi21EE.v), {a: [_ZSt4endl], i: 0});
        let arr = [1n, 2n, ...new Array(1).fill(0n)];
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, arr[2]), {a: [32, 0], i: 0}), BigInt.asIntN(64, (arr[0]) + (arr[1]))), {a: [_ZSt4endl], i: 0});
        let v = new _ZSt6vectorIxSt9allocatorIxEE(((3) >>> 0), {a: [new _ZSt9allocatorIxE()], i: 0});
        ($t43 = v._ZNSt6vectorIxSt9allocatorIxEEixEm(((1) >>> 0)), $t43.a[$t43.i] = BigInt(((-(1)) | 0)));
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, ($t44 = v._ZNSt6vectorIxSt9allocatorIxEEixEm(((0) >>> 0)), $t44.a[$t44.i])), {a: [32, 0], i: 0}), ($t45 = v._ZNSt6vectorIxSt9allocatorIxEEixEm(((1) >>> 0)), $t45.a[$t45.i])), {a: [32, 0], i: 0}), _ZSt6vectorIxSt9allocatorIxEE.prototype._ZNKSt6vectorIxSt9allocatorIxEE4sizeEv.call(v)), {a: [_ZSt4endl], i: 0});
        let mp = new _ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE();
        ($t46 = mp._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEEixERS4_({a: [5n], i: 0}), $t46.a[$t46.i] = BigInt.asUintN(64, ($t46.a[$t46.i]) + (3n)));
        ($t47 = mp._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEEixERS4_({a: [BigInt(((-(5)) | 0))], i: 0}), $t47.a[$t47.i] = 1n);
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEm(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEy({a: _ZSt4cout, i: "v"}, ($t48 = mp._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEEixERS4_({a: [5n], i: 0}), $t48.a[$t48.i])), {a: [32, 0], i: 0}), ($t49 = mp._ZNSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEEixERS4_({a: [BigInt(((-(5)) | 0))], i: 0}), $t49.a[$t49.i])), {a: [32, 0], i: 0}), _ZSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE.prototype._ZNKSt3mapIxySt4lessIxESt9allocatorISt4pairIKxyEEE4sizeEv.call(mp)), {a: [_ZSt4endl], i: 0});
        let p = {v: 3n};
        let pp = (({a: p, i: "v"}) ? {a: ({a: p, i: "v"}).a, i: ({a: p, i: "v"}).i} : null);
        pp.a[pp.i] = BigInt.asIntN(64, (pp.a[pp.i]) + (4n));
        _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEERKSt7_Ios_op(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, p.v), {a: [32, 0], i: 0}), BigInt.asIntN(64, (pp.a[pp.i]) * (2n))), {a: [_ZSt4endl], i: 0});
        for (let i = 0n; (i < 3n); ($t50 = i, i = BigInt.asIntN(64, $t50 + 1n), $t50)) {
          _ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEPKc(_ZStlsRSt13basic_ostreamIcSt11char_traitsIcEEx({a: _ZSt4cout, i: "v"}, BigInt.asIntN(64, (i) * (_Z1K))), ((i < 2n) ? {a: [44, 0], i: 0} : {a: [10, 0], i: 0}));
        }
        _Z7partialv();
        return 0;
      }
      function _ZSt27__uninitialized_default_n_aIPxmSt9allocatorIxEEvS_mRS1_(__first, __n, __alloc) {
        let $t51;
        let __cur = (__first ? {a: __first.a, i: __first.i} : null);
        if (true) {
           {
            for (; (__n > ((0) >>> 0)); ((__n = ((__n - 1) >>> 0)), ++__cur.i)) {
              _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE9constructERS2_Px(__alloc, ($t51 = _ZSt11__addressofIxEPxRx(__cur), $t51 ? {a: $t51.a, i: $t51.i} : null));
            }
          }
        }
        if (false) {
           {
            _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_((__first ? {a: __first.a, i: __first.i} : null), (__cur ? {a: __cur.a, i: __cur.i} : null), __alloc);
          }
        }
      }
      function _ZSt7forwardISt21piecewise_construct_tEOS_S0_(__t) {
        return __t;
      }
      function _ZSt7forwardISt5tupleIRKxEEOS2_S3_(__t) {
        return __t;
      }
      function _ZSt7forwardISt5tupleEOS_S0_(__t) {
        return __t;
      }
      function _ZSt7forwardIPSt13_Rb_tree_nodeISt4pairIKxyEEEOS_S5_(__t) {
        return __t;
      }
      function _ZSt7forwardIRxES_S_(__t) {
        return __t;
      }
      function _ZSt7declvalIRPSt18_Rb_tree_node_baseES_v() {
        return _ZSt19__declval_protectorIRPSt18_Rb_tree_node_baseE._ZNSt19__declval_protectorIRPSt18_Rb_tree_node_baseE10__delegateEv();
      }
      function _ZSt7declvalIPSt18_Rb_tree_node_baseEOS_v() {
        return _ZSt19__declval_protectorIPSt18_Rb_tree_node_baseE._ZNSt19__declval_protectorIPSt18_Rb_tree_node_baseE10__delegateEv();
      }
      function _ZSt7declvalIxEOxv() {
        return _ZSt19__declval_protectorIxE._ZNSt19__declval_protectorIxE10__delegateEv();
      }
      function _ZSt7declvalIPSt13_Rb_tree_nodeISt4pairIKxyEEEOS_v() {
        return _ZSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKxyEEE._ZNSt19__declval_protectorIPSt13_Rb_tree_nodeISt4pairIKxyEEE10__delegateEv();
      }
      function _ZSt7declvalISt21piecewise_construct_tEOS_v() {
        return _ZSt19__declval_protectorISt21piecewise_construct_tE._ZNSt19__declval_protectorISt21piecewise_construct_tE10__delegateEv();
      }
      function _ZSt7declvalISt5tupleIRKxEEOS2_v() {
        return _ZSt19__declval_protectorISt5tupleIRKxEE._ZNSt19__declval_protectorISt5tupleIRKxEE10__delegateEv();
      }
      function _ZSt7declvalISt5tupleEOS_v() {
        return _ZSt19__declval_protectorISt5tupleE._ZNSt19__declval_protectorISt5tupleE10__delegateEv();
      }
      function _ZSt7declvalIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEEOS_v() {
        return _ZSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE._ZNSt19__declval_protectorIPSt9allocatorISt13_Rb_tree_nodeISt4pairIKxyEEEE10__delegateEv();
      }
      function _ZSt7declvalIiEOiv() {
        return _ZSt19__declval_protectorIiE._ZNSt19__declval_protectorIiE10__delegateEv();
      }
      function _ZSt11__addressofIxEPxRx(__r) {
        return (__r ? {a: __r.a, i: __r.i} : null);
      }
      function _ZSt8_DestroyIPxSt9allocatorIxEEvS_S_RS1_(__first, __last, __alloc) {
        let $t52;
        for (; (!(__first === __last || (__first && __last && __first.a === __last.a && __first.i === __last.i))); ++__first.i) {
          _ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEEE._ZN9__gnu_cxx14__alloc_traitsISt9allocatorIxEE7destroyIxEEvRS2_Px(__alloc, ($t52 = _ZSt11__addressofIxEPxRx(__first), $t52 ? {a: $t52.a, i: $t52.i} : null));
        }
      }
      function _ZSt3getILi0ERKxERxRSt5tupleIS_E(__t) {
        return _ZSt12__get_helperILi0ERKxERxRSt11_Tuple_implILi0ES_E(__t);
      }
      function _ZSt12__get_helperILi0ERKxERxRSt11_Tuple_implILi0ES_E(__t) {
        return _ZSt11_Tuple_implILi0ERKxE._ZNSt11_Tuple_implILi0ERKxE7_M_headERS2_(__t);
      }
      let _ZSt19piecewise_construct = {v: new _ZSt21piecewise_construct_t()};
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
      let _Z1K = BigInt.asIntN(64, (1n) << (40n));
      let _Z1G = BigInt(((-(3)) | 0));
      let _Z4MASK = ((BigInt.asUintN(64, ~(0n))) >> (4n));
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
