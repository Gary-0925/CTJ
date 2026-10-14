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
        _ZNSt8__detail15_List_node_base11_M_transferEPS0_S1_(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});if ($a[1].a[$a[1].i] === this) return;const $me = $ad(this), $fp = $a[0], $lp = $a[1];$lp.a[$lp.i]._M_prev.a[$lp.a[$lp.i]._M_prev.i]._M_next = $me;$fp.a[$fp.i]._M_prev.a[$fp.a[$fp.i]._M_prev.i]._M_next = $lp;this._M_prev.a[this._M_prev.i]._M_next = $fp;const $tmp = this._M_prev;this._M_prev = $lp.a[$lp.i]._M_prev;$lp.a[$lp.i]._M_prev = $fp.a[$fp.i]._M_prev;$fp.a[$fp.i]._M_prev = $tmp; }
        _ZNSt8__detail15_List_node_base10_M_reverseEv(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});let $p = $ad(this);do {const $t = $p.a[$p.i]._M_next;$p.a[$p.i]._M_next = $p.a[$p.i]._M_prev;$p.a[$p.i]._M_prev = $t;$p = $p.a[$p.i]._M_prev;} while ($p.a[$p.i] !== this); }
        _ZNSt8__detail15_List_node_base7_M_hookEPS0_(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});const $me = $ad(this), $pos = $a[0].a[$a[0].i], $prev = $pos._M_prev;this._M_next = $a[0];this._M_prev = $prev;$prev.a[$prev.i]._M_next = $me;$pos._M_prev = $me; }
        _ZNSt8__detail15_List_node_base9_M_unhookEv(...$a) { const $next = this._M_next, $prev = this._M_prev;$prev.a[$prev.i]._M_next = $next;$next.a[$next.i]._M_prev = $prev; }
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
          let $t0;
          this._M_data$_ZSt10_List_nodeIiE = ($t0 = _ZSt7forwardIiEOiS_($a[0]), $t0.a[$t0.i]);
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
          let $t1;
          if ((__n > _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZNK9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8max_sizeEv.call(this))) {
            _ZSt17__throw_bad_allocv();
          }
          return ($t1 = _Znwm(((Math.imul(__n, 12)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
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
          let $t2;
          return ($t2 = _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE8allocateEmPKv.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, ((1) >>> 0), {a: [0], i: 0}), $t2 ? {a: $t2.a, i: $t2.i} : null);
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE(__p) {
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE10deallocateEPS2_m.call(this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv() {
          return {a: this, i: "_M_impl$_ZSt10_List_baseIiSt9allocatorIiEE"};
        }
        _ZNSt10_List_baseIiSt9allocatorIiEE8_M_clearEv() {
          let $t3;
          let __cur = (this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next ? {a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.a, i: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE._M_node._M_next.i} : null);
          while ((!(__cur === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) || (__cur && ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}) && __cur.a === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).a && __cur.i === ({a: this._M_impl$_ZSt10_List_baseIiSt9allocatorIiEE, i: "_M_node"}).i)))) {
             {
              let __tmp = (__cur ? {a: __cur.a, i: __cur.i} : null);
              __cur = (((__cur.a[__cur.i])._M_next) ? {a: ((__cur.a[__cur.i])._M_next).a, i: ((__cur.a[__cur.i])._M_next).i} : null);
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t3 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t3.a[$t3.i]), (__tmp ? {a: __tmp.a, i: __tmp.i} : null));
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
          let $t4;
          return (($t4 = this._ZNSt4listIiSt9allocatorIiEE5beginEv(), $t4))._ZNKSt14_List_iteratorIiEdeEv();
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
          let $t5, $t6, $t7, $t8;
          let __first = this._ZNSt4listIiSt9allocatorIiEE5beginEv();
          let __last = this._ZNSt4listIiSt9allocatorIiEE3endEv();
          let __extra = new _ZSt14_List_iteratorIiE({a: [__last], i: 0});
          while (__first._ZNKSt14_List_iteratorIiEneERKS0_({a: [__last], i: 0})) {
             {
              let __next = new _ZSt14_List_iteratorIiE({a: [__first], i: 0});
              __next._ZNSt14_List_iteratorIiEppEv();
              if (((__first._ZNKSt14_List_iteratorIiEdeEv()).a[(__first._ZNKSt14_List_iteratorIiEdeEv()).i] === __value.a[__value.i])) {
                 {
                  if (($t7 = ($t5 = _ZSt11__addressofIiEPiRi(__first._ZNKSt14_List_iteratorIiEdeEv()), $t5), $t8 = ($t6 = _ZSt11__addressofIiEPiRi(__value), $t6), (!($t7 === $t8 || ($t7 && $t8 && $t7.a === $t8.a && $t7.i === $t8.i))))) {
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
          let $t9;
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base9_M_unhookEv.call(__position._M_node$_ZSt14_List_iteratorIiE.a[__position._M_node$_ZSt14_List_iteratorIiE.i]);
          let __n = (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null);
          _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE7destroyIS2_EEvPS2_.call(($t9 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t9.a[$t9.i]), (__n ? {a: __n.a, i: __n.i} : null));
          this._ZNSt10_List_baseIiSt9allocatorIiEE11_M_put_nodeEPSt10_List_nodeIiE((__n ? {a: __n.a, i: __n.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE25_M_check_equal_allocatorsERS2_(__x) {
          if (_ZSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE._ZNSt11__alloc_neqISt9allocatorISt10_List_nodeIiEELi1EE8_S_do_itERKS3_S5_(this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv.call(__x.a[__x.i]))) {
            _ZSt21__throw_runtime_errorPKc({a: [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], i: 0});
          }
        }
        _ZNSt4listIiSt9allocatorIiEE9_M_insertIiEEvSt14_List_iteratorIiEOi(__position, __args_0) {
          let $t10;
          let __tmp = ($t10 = this._ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(_ZSt7forwardIiEOiS_(__args_0)), $t10 ? {a: $t10.a, i: $t10.i} : null);
          _ZNSt8__detail15_List_node_baseE.prototype._ZNSt8__detail15_List_node_base7_M_hookEPS0_.call(__tmp.a[__tmp.i], (__position._M_node$_ZSt14_List_iteratorIiE ? {a: __position._M_node$_ZSt14_List_iteratorIiE.a, i: __position._M_node$_ZSt14_List_iteratorIiE.i} : null));
        }
        _ZNSt4listIiSt9allocatorIiEE14_M_create_nodeIiEEPSt10_List_nodeIiEOi(__args_0) {
          let $t11, $t12;
          let __p = ($t11 = _ZSt10_List_baseIiSt9allocatorIiEE.prototype._ZNSt10_List_baseIiSt9allocatorIiEE11_M_get_nodeEv.call(this), $t11 ? {a: $t11.a, i: $t11.i} : null);
          if (true) {
             {
              _ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEEE.prototype._ZN9__gnu_cxx13new_allocatorISt10_List_nodeIiEE9constructIS2_iEEvPS2_Oi.call(($t12 = this._ZNSt10_List_baseIiSt9allocatorIiEE21_M_get_Node_allocatorEv(), $t12.a[$t12.i]), (__p ? {a: __p.a, i: __p.i} : null), _ZSt7forwardIiEOiS_(__args_0));
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
        let $t13, $t14;
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
        (console.log((($t13 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE5frontEv.call(a.v), $t13.a[$t13.i])), (($t14 = _ZSt4listIiSt9allocatorIiEE.prototype._ZNSt4listIiSt9allocatorIiEE4backEv.call(a.v), $t14.a[$t14.i])), (((_ZSt4listIiSt9allocatorIiEE.prototype._ZNKSt4listIiSt9allocatorIiEE4sizeEv.call(a.v)) | 0))));
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
