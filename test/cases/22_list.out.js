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
      class _ZSt9nothrow_t {
        constructor(...$a) {
          this.__init__ZSt9nothrow_t(...$a);
        }
        __init__ZSt9nothrow_t(...$a) {
        }
        __dtor() {
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
        _ZNSt8__detail15_List_node_base11_M_transferEPS0_S1_(__first, __last) {
          let $t0;
          if (($t0 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!($t0 === __last || ($t0 && __last && $t0.a === __last.a && $t0.i === __last.i))))) {
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
          let $t1;
          let __tmp = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)};
          do {
             {
              _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_({a: __tmp.a[__tmp.i], i: "_M_next"}, {a: __tmp.a[__tmp.i], i: "_M_prev"});
              __tmp = (((__tmp.a[__tmp.i])._M_prev) ? {a: ((__tmp.a[__tmp.i])._M_prev).a, i: ((__tmp.a[__tmp.i])._M_prev).i} : null);
            }
          } while (($t1 = {a: (this.ctj_a || (this.ctj_a = [])), i: (this.ctj_i || 0)}, (!(__tmp === $t1 || (__tmp && $t1 && __tmp.a === $t1.a && __tmp.i === $t1.i)))));
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
      class _ZSt10_List_nodeIiE extends _ZNSt8__detail15_List_node_baseE {
        _M_data$_ZSt10_List_nodeIiE;
        constructor(...$a) {
          super(...[]);
          this.__init__ZSt10_List_nodeIiE(...$a);
        }
        __init__ZSt10_List_nodeIiE(...$a) {
          let $t2;
          this._M_data$_ZSt10_List_nodeIiE = ($t2 = _ZSt7forwardIiEOiS_($a[0]), $t2.a[$t2.i]);
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
          let $t3;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t3 = _Znwm(((Math.imul(__n, 12)) >>> 0)), $t3 ? {a: $t3.a, i: $t3.i} : null);
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
          let $t4;
          return ($t4 = _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, ((1) >>> 0), {a: [0], i: 0}), $t4 ? {a: $t4.a, i: $t4.i} : null);
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE(__p) {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE"};
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE8_M_clearEv() {
          let $t5;
          let __cur = (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next ? {a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a, i: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i} : null);
          while ((!(__cur === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (__cur && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && __cur.a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && __cur.i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i)))) {
             {
              let __tmp = (__cur ? {a: __cur.a, i: __cur.i} : null);
              __cur = (((__cur.a[__cur.i])._M_next) ? {a: ((__cur.a[__cur.i])._M_next).a, i: ((__cur.a[__cur.i])._M_next).i} : null);
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t5 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t5.a[$t5.i]), (__tmp ? {a: __tmp.a, i: __tmp.i} : null));
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
          let $t6;
          return (($t6 = this._ZNSt4listIiSt9allocatorIiEE5beginEv(), $t6))._ZNKSt14_List_iteratorIiEdeEv();
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
        _ZNSt4listIiSt9allocatorIiEE6removeERKi(__value) {
          let $t7, $t8, $t9, $t10;
          let __first = this._ZNSt4listIiSt9allocatorIiEE5beginEv();
          let __last = this._ZNSt4listIiSt9allocatorIiEE3endEv();
          let __extra = new _ZSt14_List_iteratorIiE({a: [__last], i: 0});
          while (__first._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last], i: 0})) {
             {
              let __next = new _ZSt14_List_iteratorIiE({a: [__first], i: 0});
              __next._ZNSt14_List_iteratorIiEppEv();
              if (((__first._ZNKSt14_List_iteratorIiEdeEv()).a[(__first._ZNKSt14_List_iteratorIiEdeEv()).i] === __value.a[__value.i])) {
                 {
                  if (($t9 = ($t7 = _ZSt11__addressofIiEPiRi(__first._ZNKSt14_List_iteratorIiEdeEv()), $t7), $t10 = ($t8 = _ZSt11__addressofIiEPiRi(__value), $t8), (!($t9 === $t10 || ($t9 && $t10 && $t9.a === $t10.a && $t9.i === $t10.i))))) {
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
        _ZNSt4listIiSt9allocatorIiEE7reverseEv() {
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base10_M_reverseEv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node);
        }
        _ZNSt4listIiSt9allocatorIiEE11_M_transferESt14_List_iteratorIiES4_S4_(__position, __first, __last) {
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base11_M_transferEPS0_S1_.call(__position._M_node$_ZSt14_List_iteratorIiE.a[__position._M_node$_ZSt14_List_iteratorIiE.i], (__first._M_node$_ZSt14_List_iteratorIiE ? {a: __first._M_node$_ZSt14_List_iteratorIiE.a, i: __first._M_node$_ZSt14_List_iteratorIiE.i} : null), (__last._M_node$_ZSt14_List_iteratorIiE ? {a: __last._M_node$_ZSt14_List_iteratorIiE.a, i: __last._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE8_M_eraseESt14_List_iteratorIiE(__position) {
          let $t11;
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base9_M_unhookEv.call(__position._M_node$_ZSt14_List_iteratorIiE.a[__position._M_node$_ZSt14_List_iteratorIiE.i]);
          let __n = (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null);
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t11 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t11.a[$t11.i]), (__n ? {a: __n.a, i: __n.i} : null));
          this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__n ? {a: __n.a, i: __n.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x) {
          if (_ZSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE._ZNSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERKS3_S5_(this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv.call(__x.a[__x.i]))) {
            _ZSt21__throw_runtime_errorPKc({a: [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], i: 0});
          }
        }
        _ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi(__position, __args_0) {
          let $t12;
          let __tmp = ($t12 = this._ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(_ZSt7forwardIiEOiS_(__args_0)), $t12 ? {a: $t12.a, i: $t12.i} : null);
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base7_M_hookEPS0_.call(__tmp.a[__tmp.i], (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(__args_0) {
          let $t13, $t14;
          let __p = ($t13 = _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv.call(this), $t13 ? {a: $t13.a, i: $t13.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi.call(($t14 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t14.a[$t14.i]), (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
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
        _ZNKSt14_List_iteratorIiEneERKS0_(__x) {
          return (!(this._M_node$_ZSt14_List_iteratorIiE === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) || (this._M_node$_ZSt14_List_iteratorIiE && ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE) && this._M_node$_ZSt14_List_iteratorIiE.a === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).a && this._M_node$_ZSt14_List_iteratorIiE.i === ((__x.a[__x.i])._M_node$_ZSt14_List_iteratorIiE).i)));
        }
        _ZNSt14_List_iteratorIiEaSERS0_(o) {
          this._M_node$_ZSt14_List_iteratorIiE = (((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE) ? {a: ((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE).a, i: ((o.a[o.i])._M_node$_ZSt14_List_iteratorIiE).i} : null);
          return {a: [this], i: 0};
        }
      }
      class _ZNSt9allocatorIiE6rebindIiEE {
        __init__ZNSt9allocatorIiE6rebindIiEE(...$a) { }
        __dtor() {
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
      function _Znwm(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
      function _ZdlPv(...$a) {  }
      function main() {
        let $t15, $t16;
        let a = {v: new _ZSt4listIiSt9allocatorIiEE()};
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(a.v, {a: [3], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(a.v, {a: [1], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE10push_frontERKi.call(a.v, {a: [9], i: 0});
        let s = 0;
        for (let $b0 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e0 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b0._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e0], i: 0}); $b0._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b0._ZNKSt14_List_iteratorIiEdeEv()).a[($b0._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        (console.log((s), (((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)) | 0))));
        for (let $b1 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e1 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b1._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e1], i: 0}); $b1._ZNSt14_List_iteratorIiEppEv()) {
          let y = $b1._ZNKSt14_List_iteratorIiEdeEv();
          y.a[y.i] = (((((y.a[y.i]) + (1)) | 0)) | 0);
        }
        for (let $b2 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e2 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b2._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e2], i: 0}); $b2._ZNSt14_List_iteratorIiEppEv()) {
          let y = $b2._ZNKSt14_List_iteratorIiEdeEv();
          s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
        }
        (console.log((s)));
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE7reverseEv.call(a.v);
        s = 0;
        for (let $b3 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e3 = new _ZSt14_List_iteratorIiE({a: [a.v._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b3._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e3], i: 0}); $b3._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b3._ZNKSt14_List_iteratorIiEdeEv()).a[($b3._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        (console.log((s)));
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE6removeERKi.call(a.v, {a: [10], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9pop_frontEv.call(a.v);
        (console.log((($t15 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5frontEv.call(a.v), $t15.a[$t15.i])), (($t16 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4backEv.call(a.v), $t16.a[$t16.i])), (((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)) | 0))));
        let b = new _ZSt4listIiSt9allocatorIiEE();
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE9push_backERKi.call(b, {a: [7], i: 0});
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE6spliceESt14_List_iteratorIiERS2_.call(b, _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE3endEv.call(b), {a: a, i: "v"});
        s = 0;
        for (let $b4 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE5beginEv()], i: 0}), $e4 = new _ZSt14_List_iteratorIiE({a: [b._ZNSt4listIiSt9allocatorIiEE3endEv()], i: 0}); $b4._ZNKSt14_List_iteratorIiEneERKS0_({a: [$e4], i: 0}); $b4._ZNSt14_List_iteratorIiEppEv()) {
          let x = ($b4._ZNKSt14_List_iteratorIiEdeEv()).a[($b4._ZNKSt14_List_iteratorIiEdeEv()).i];
          s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
        }
        (console.log((s), (((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)) | 0))));
        _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5clearEv.call(b);
        (console.log((((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(b)) | 0)), (((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE5emptyEv.call(b)) | 0))));
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
      function _ZSt4swapIPNSt8__detail15_List_node_baseEEvRS_S2_(__a, __b) {
        let $t17, $t18, $t19, $t20, $t21, $t22;
        let __tmp = {v: ($t17 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__a), $t18 = ($t17 ? $t17.a[$t17.i] : null), $t18 && $t18.a !== undefined ? {a: $t18.a, i: $t18.i} : $t18)};
        __a.a[__a.i] = ($t19 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_(__b), $t20 = ($t19 ? $t19.a[$t19.i] : null), $t20 && $t20.a !== undefined ? {a: $t20.a, i: $t20.i} : $t20);
        __b.a[__b.i] = ($t21 = _ZSt4moveIPNSt8__detail15_List_node_baseEEOS_S2_({a: __tmp, i: "v"}), $t22 = ($t21 ? $t21.a[$t21.i] : null), $t22 && $t22.a !== undefined ? {a: $t22.a, i: $t22.i} : $t22);
      }
      let _ZSt19piecewise_construct = new _ZSt21piecewise_construct_t();
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
