"use strict";
class std_sfinae_types {
  __init_std_sfinae_types(...$a) { }
  __dtor() {
  }
}
class std_sfinae_types_class_47 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_47(...$a);
  }
  __init_std_sfinae_types_class_47(...$a) {
    this.__arr = new Array(2).fill(0);
  }
  __dtor() {
  }
}
class std_piecewise_construct_t {
  constructor(...$a) {
    this.__init_std_piecewise_construct_t(...$a);
  }
  __init_std_piecewise_construct_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_input_iterator_tag {
  constructor(...$a) {
    this.__init_std_input_iterator_tag(...$a);
  }
  __init_std_input_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_input_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag) ? [$a[0]] : []));
    this.__init_std_forward_iterator_tag(...$a);
  }
  __init_std_forward_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_forward_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_input_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  constructor(...$a) {
    super(...($a.length >= 0 && $a.length <= 0 ? [] : $a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag) ? [$a[0]] : []));
    this.__init_std_bidirectional_iterator_tag(...$a);
  }
  __init_std_bidirectional_iterator_tag(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_bidirectional_iterator_tag)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
    std_forward_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_random_access_iterator_tag(...$a);
  }
  __init_std_random_access_iterator_tag(...$a) {
  }
  __dtor() {
    std_bidirectional_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_nothrow_t {
  constructor(...$a) {
    this.__init_std_nothrow_t(...$a);
  }
  __init_std_nothrow_t(...$a) {
  }
  __dtor() {
  }
}
class std_detail_List_node_base {
  _M_next;
  _M_prev;
  constructor(...$a) {
    this.__init_std_detail_List_node_base(...$a);
  }
  __init_std_detail_List_node_base(...$a) {
    this._M_next = null;
    this._M_prev = null;
  }
  __dtor() {
  }
  _M_transfer(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});if ($a[1].a[$a[1].i] === this) return;const $me = $ad(this), $fp = $a[0], $lp = $a[1];$lp.a[$lp.i]._M_prev.a[$lp.a[$lp.i]._M_prev.i]._M_next = $me;$fp.a[$fp.i]._M_prev.a[$fp.a[$fp.i]._M_prev.i]._M_next = $lp;this._M_prev.a[this._M_prev.i]._M_next = $fp;const $tmp = this._M_prev;this._M_prev = $lp.a[$lp.i]._M_prev;$lp.a[$lp.i]._M_prev = $fp.a[$fp.i]._M_prev;$fp.a[$fp.i]._M_prev = $tmp; }
  _M_reverse(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});let $p = $ad(this);do {const $t = $p.a[$p.i]._M_next;$p.a[$p.i]._M_next = $p.a[$p.i]._M_prev;$p.a[$p.i]._M_prev = $t;$p = $p.a[$p.i]._M_prev;} while ($p.a[$p.i] !== this); }
  _M_hook(...$a) { const $ad = (o) => (o.ctj_a ? {a: o.ctj_a, i: o.ctj_i} : {a: (o.ctj_a = []), i: (o.ctj_i = 0)});const $me = $ad(this), $pos = $a[0].a[$a[0].i], $prev = $pos._M_prev;this._M_next = $a[0];this._M_prev = $prev;$prev.a[$prev.i]._M_next = $me;$pos._M_prev = $me; }
  _M_unhook(...$a) { const $next = this._M_next, $prev = this._M_prev;$prev.a[$prev.i]._M_next = $next;$next.a[$next.i]._M_prev = $prev; }
}
class gnu_cxx_new_allocator_int {
  __init_gnu_cxx_new_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_int(...$a);
  }
  __init_std_allocator_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_int.prototype.__dtor.call(this);
  }
}
class std_List_node_int extends std_detail_List_node_base {
  _M_data$std_List_node_int;
  constructor(...$a) {
    super(...[]);
    this.__init_std_List_node_int(...$a);
  }
  __init_std_List_node_int(...$a) {
    let $t0;
    this._M_data$std_List_node_int = ($t0 = std_forward_1_int($a[0]), $t0.a[$t0.i]);
  }
  __dtor() {
    std_detail_List_node_base.prototype.__dtor.call(this);
  }
}
class std_allocator_int_rebind_std_List_node_int {
  __init_std_allocator_int_rebind_std_List_node_int(...$a) { }
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_List_node_int {
  __init_gnu_cxx_new_allocator_std_List_node_int(...$a) { }
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t1;
    if ((__n > gnu_cxx_new_allocator_std_List_node_int.prototype.max_size__c.call(this))) {
      std_throw_bad_alloc();
    }
    return ($t1 = operatornew__unsigned_long(((Math.imul(__n, 12)) >>> 0)), $t1 ? {a: $t1.a, i: $t1.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return ((Math.trunc((((((-(1)) | 0)) >>> 0)) / (12))) >>> 0);
  }
  destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int(__p) {
    std_List_node_int.prototype.__dtor.call(__p.a[__p.i]);
  }
  construct__gnu_cxx_new_allocator_std_List_node_int_construct_std_List_node_int_int__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_List_node_int(std_forward_1_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_List_node_int extends gnu_cxx_new_allocator_std_List_node_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_List_node_int(...$a);
  }
  __init_std_allocator_std_List_node_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int_List_impl extends std_allocator_std_List_node_int {
  _M_node;
  constructor(...$a) {
    super(...[]);
    this.__init_std_List_base_int_std_allocator_int_List_impl(...$a);
  }
  __init_std_List_base_int_std_allocator_int_List_impl(...$a) {
    this._M_node = new std_detail_List_node_base();
    this._M_node.ctj_a = this; this._M_node.ctj_i = "_M_node";
  }
  __dtor() {
    std_allocator_std_List_node_int.prototype.__dtor.call(this);
  }
}
class std_List_base_int_std_allocator_int {
  _M_impl$std_List_base_int_std_allocator_int;
  constructor(...$a) {
    this.__init_std_List_base_int_std_allocator_int(...$a);
  }
  __init_std_List_base_int_std_allocator_int(...$a) {
    this._M_impl$std_List_base_int_std_allocator_int = new std_List_base_int_std_allocator_int_List_impl();
    this._M_impl$std_List_base_int_std_allocator_int.ctj_a = this; this._M_impl$std_List_base_int_std_allocator_int.ctj_i = "_M_impl$std_List_base_int_std_allocator_int";
    this._M_init();
  }
  __dtor() {
  }
  _M_get_node() {
    let $t2;
    return ($t2 = gnu_cxx_new_allocator_std_List_node_int.prototype.allocate.call(this._M_impl$std_List_base_int_std_allocator_int, ((1) >>> 0), {a: [0], i: 0}), $t2 ? {a: $t2.a, i: $t2.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_List_node_int.prototype.deallocate.call(this._M_impl$std_List_base_int_std_allocator_int, (__p ? {a: __p.a, i: __p.i} : null), ((1) >>> 0));
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl$std_List_base_int_std_allocator_int"};
  }
  _M_clear() {
    let $t3;
    let __cur = (this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next ? {a: this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.a, i: this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.i} : null);
    while ((!(__cur === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) || (__cur && ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) && __cur.a === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).a && __cur.i === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).i)))) {
       {
        let __tmp = (__cur ? {a: __cur.a, i: __cur.i} : null);
        __cur = (((__cur.a[__cur.i])._M_next) ? {a: ((__cur.a[__cur.i])._M_next).a, i: ((__cur.a[__cur.i])._M_next).i} : null);
        gnu_cxx_new_allocator_std_List_node_int.prototype.destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int.call(($t3 = this._M_get_Node_allocator(), $t3.a[$t3.i]), (__tmp ? {a: __tmp.a, i: __tmp.i} : null));
        this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
  }
  _M_init() {
    this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next = (({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) ? {a: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).a, i: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).i} : null);
    this._M_impl$std_List_base_int_std_allocator_int._M_node._M_prev = (({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) ? {a: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).a, i: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).i} : null);
  }
}
class std_list_int_std_allocator_int extends std_List_base_int_std_allocator_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_list_int_std_allocator_int(...$a);
  }
  __init_std_list_int_std_allocator_int(...$a) {
  }
  __dtor() {
    std_List_base_int_std_allocator_int.prototype.__dtor.call(this);
  }
  begin() {
    return new std_List_iterator_int((this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next ? {a: this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.a, i: this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.i} : null));
  }
  end() {
    return new std_List_iterator_int((({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) ? {a: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).a, i: ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).i} : null));
  }
  empty__c() {
    return (this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) || (this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next && ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}) && this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.a === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).a && this._M_impl$std_List_base_int_std_allocator_int._M_node._M_next.i === ({a: this._M_impl$std_List_base_int_std_allocator_int, i: "_M_node"}).i));
  }
  size__c() {
    return ((std_distance_std_List_iterator_int(this.begin(), this.end())) >>> 0);
  }
  front() {
    let $t4;
    return (($t4 = this.begin(), $t4)).op_mul__c();
  }
  back() {
    let __tmp = this.end();
    __tmp.op_dec();
    return __tmp.op_mul__c();
  }
  push_front(__x) {
    std_list_int_std_allocator_int.prototype._M_insert__std_list_int_std_allocator_int_M_insert_int__rv.call(this, this.begin(), __x);
  }
  pop_front() {
    std_list_int_std_allocator_int.prototype._M_erase.call(this, this.begin());
  }
  push_back(__x) {
    std_list_int_std_allocator_int.prototype._M_insert__std_list_int_std_allocator_int_M_insert_int__rv.call(this, this.end(), __x);
  }
  clear() {
    std_List_base_int_std_allocator_int.prototype._M_clear.call(this);
    std_List_base_int_std_allocator_int.prototype._M_init.call(this);
  }
  splice__rv(__position, __x) {
    if ((!(std_list_int_std_allocator_int.prototype.empty__c.call(__x.a[__x.i])))) {
       {
        this._M_check_equal_allocators(__x);
        std_list_int_std_allocator_int.prototype._M_transfer.call(this, new std_List_iterator_int({a: [__position], i: 0}), std_list_int_std_allocator_int.prototype.begin.call(__x.a[__x.i]), std_list_int_std_allocator_int.prototype.end.call(__x.a[__x.i]));
      }
    }
  }
  splice(__position, __x) {
    this.splice__rv(new std_List_iterator_int({a: [__position], i: 0}), std_move_std_list_int_std_allocator_int(__x));
  }
  remove(__value) {
    let $t5, $t6, $t7, $t8;
    let __first = this.begin();
    let __last = this.end();
    let __extra = new std_List_iterator_int({a: [__last], i: 0});
    while (__first.op_ne__c({a: [__last], i: 0})) {
       {
        let __next = new std_List_iterator_int({a: [__first], i: 0});
        __next.op_inc();
        if (((__first.op_mul__c()).a[(__first.op_mul__c()).i] === __value.a[__value.i])) {
           {
            if (($t7 = ($t5 = std_addressof_int(__first.op_mul__c()), $t5), $t8 = ($t6 = std_addressof_int(__value), $t6), (!($t7 === $t8 || ($t7 && $t8 && $t7.a === $t8.a && $t7.i === $t8.i))))) {
              this._M_erase(new std_List_iterator_int({a: [__first], i: 0}));
            }
            else {
              __extra.op_assign({a: [__first], i: 0});
            }
          }
        }
        __first.op_assign({a: [__next], i: 0});
      }
    }
    if (__extra.op_ne__c({a: [__last], i: 0})) {
      this._M_erase(new std_List_iterator_int({a: [__extra], i: 0}));
    }
  }
  reverse() {
    std_detail_List_node_base.prototype._M_reverse.call(this._M_impl$std_List_base_int_std_allocator_int._M_node);
  }
  _M_transfer(__position, __first, __last) {
    std_detail_List_node_base.prototype._M_transfer.call(__position._M_node$std_List_iterator_int.a[__position._M_node$std_List_iterator_int.i], (__first._M_node$std_List_iterator_int ? {a: __first._M_node$std_List_iterator_int.a, i: __first._M_node$std_List_iterator_int.i} : null), (__last._M_node$std_List_iterator_int ? {a: __last._M_node$std_List_iterator_int.a, i: __last._M_node$std_List_iterator_int.i} : null));
  }
  _M_erase(__position) {
    let $t9;
    std_detail_List_node_base.prototype._M_unhook.call(__position._M_node$std_List_iterator_int.a[__position._M_node$std_List_iterator_int.i]);
    let __n = (__position._M_node$std_List_iterator_int ? {a: __position._M_node$std_List_iterator_int.a, i: __position._M_node$std_List_iterator_int.i} : null);
    gnu_cxx_new_allocator_std_List_node_int.prototype.destroy__gnu_cxx_new_allocator_std_List_node_int_destroy_std_List_node_int.call(($t9 = this._M_get_Node_allocator(), $t9.a[$t9.i]), (__n ? {a: __n.a, i: __n.i} : null));
    this._M_put_node((__n ? {a: __n.a, i: __n.i} : null));
  }
  _M_check_equal_allocators(__x) {
    if (std_alloc_neq_std_allocator_std_List_node_int_value1._S_do_it(this._M_get_Node_allocator(), std_List_base_int_std_allocator_int.prototype._M_get_Node_allocator.call(__x.a[__x.i]))) {
      std_throw_runtime_error({a: [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], i: 0});
    }
  }
  _M_insert__std_list_int_std_allocator_int_M_insert_int__rv(__position, __args_0) {
    let $t10;
    let __tmp = ($t10 = this._M_create_node__std_list_int_std_allocator_int_M_create_node_int__rv(std_forward_1_int(__args_0)), $t10 ? {a: $t10.a, i: $t10.i} : null);
    std_detail_List_node_base.prototype._M_hook.call(__tmp.a[__tmp.i], (__position._M_node$std_List_iterator_int ? {a: __position._M_node$std_List_iterator_int.a, i: __position._M_node$std_List_iterator_int.i} : null));
  }
  _M_create_node__std_list_int_std_allocator_int_M_create_node_int__rv(__args_0) {
    let $t11, $t12;
    let __p = ($t11 = std_List_base_int_std_allocator_int.prototype._M_get_node.call(this), $t11 ? {a: $t11.a, i: $t11.i} : null);
    if (true) {
       {
        gnu_cxx_new_allocator_std_List_node_int.prototype.construct__gnu_cxx_new_allocator_std_List_node_int_construct_std_List_node_int_int__rv.call(($t12 = this._M_get_Node_allocator(), $t12.a[$t12.i]), (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
      }
    }
    if (false) {
       {
        this._M_put_node((__p ? {a: __p.a, i: __p.i} : null));
      }
    }
    return (__p ? {a: __p.a, i: __p.i} : null);
  }
}
class std_initializer_list_int {
  _M_array$std_initializer_list_int;
  _M_len$std_initializer_list_int;
  constructor(...$a) {
    this.__init_std_initializer_list_int(...$a);
  }
  __init_std_initializer_list_int(...$a) {
    this._M_array$std_initializer_list_int = null;
    this._M_len$std_initializer_list_int = 0;
  }
  __dtor() {
  }
}
class std_List_iterator_int {
  _M_node$std_List_iterator_int;
  constructor(...$a) {
    this.__init_std_List_iterator_int(...$a);
  }
  __init_std_List_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof std_List_iterator_int)) {
      this._M_node$std_List_iterator_int = (((($a[0]).a[($a[0]).i])._M_node$std_List_iterator_int) ? {a: ((($a[0]).a[($a[0]).i])._M_node$std_List_iterator_int).a, i: ((($a[0]).a[($a[0]).i])._M_node$std_List_iterator_int).i} : null);
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node$std_List_iterator_int = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_mul__c() {
    return {a: this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i], i: "_M_data$std_List_node_int"};
  }
  op_inc() {
    this._M_node$std_List_iterator_int = (((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_next) ? {a: ((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_next).a, i: ((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_next).i} : null);
    return {a: [this], i: 0};
  }
  op_dec() {
    this._M_node$std_List_iterator_int = (((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_prev) ? {a: ((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_prev).a, i: ((this._M_node$std_List_iterator_int.a[this._M_node$std_List_iterator_int.i])._M_prev).i} : null);
    return {a: [this], i: 0};
  }
  op_ne__c(__x) {
    return (!(this._M_node$std_List_iterator_int === ((__x.a[__x.i])._M_node$std_List_iterator_int) || (this._M_node$std_List_iterator_int && ((__x.a[__x.i])._M_node$std_List_iterator_int) && this._M_node$std_List_iterator_int.a === ((__x.a[__x.i])._M_node$std_List_iterator_int).a && this._M_node$std_List_iterator_int.i === ((__x.a[__x.i])._M_node$std_List_iterator_int).i)));
  }
  op_assign(o) {
    this._M_node$std_List_iterator_int = (((o.a[o.i])._M_node$std_List_iterator_int) ? {a: ((o.a[o.i])._M_node$std_List_iterator_int).a, i: ((o.a[o.i])._M_node$std_List_iterator_int).i} : null);
    return {a: [this], i: 0};
  }
}
class std_allocator_int_rebind_int {
  __init_std_allocator_int_rebind_int(...$a) { }
  __dtor() {
  }
}
class std_remove_cv_std_List_iterator_int {
  __init_std_remove_cv_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_volatile_std_List_iterator_int {
  __init_std_remove_volatile_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_const_std_List_iterator_int {
  __init_std_remove_const_std_List_iterator_int(...$a) { }
  __dtor() {
  }
}
class std_has_iterator_category_helper_std_List_iterator_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_std_List_iterator_int(...$a);
  }
  __init_std_has_iterator_category_helper_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag {
  __init_std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag(...$a) { }
  __dtor() {
  }
}
class std_integral_constant_bool_value1 {
  constructor(...$a) {
    this.__init_std_integral_constant_bool_value1(...$a);
  }
  __init_std_integral_constant_bool_value1(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_has_iterator_category_std_List_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_std_List_iterator_int(...$a);
  }
  __init_std_has_iterator_category_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_iterator_traits_std_List_iterator_int_value1 {
  __init_std_iterator_traits_std_List_iterator_int_value1(...$a) { }
  __dtor() {
  }
}
class std_iterator_traits_std_List_iterator_int extends std_iterator_traits_std_List_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_std_List_iterator_int(...$a);
  }
  __init_std_iterator_traits_std_List_iterator_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_std_List_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_list_int_std_allocator_int {
  __init_std_remove_reference_std_list_int_std_allocator_int(...$a) { }
  __dtor() {
  }
}
class std_remove_reference_int {
  __init_std_remove_reference_int(...$a) { }
  __dtor() {
  }
}
class std_alloc_neq_std_allocator_std_List_node_int_value1 {
  __init_std_alloc_neq_std_allocator_std_List_node_int_value1(...$a) { }
  __dtor() {
  }
  static _S_do_it($p0, $p1) {
    return false;
  }
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function std_throw_runtime_error(...$a) { throw new Error("unresolved external: std::__throw_runtime_error"); }
function operatornew__unsigned_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function main() {
  let $t13, $t14;
  let a = {v: new std_list_int_std_allocator_int()};
  std_list_int_std_allocator_int.prototype.push_back.call(a.v, {a: [3], i: 0});
  std_list_int_std_allocator_int.prototype.push_back.call(a.v, {a: [1], i: 0});
  std_list_int_std_allocator_int.prototype.push_front.call(a.v, {a: [9], i: 0});
  let s = 0;
  for (let $b0 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e0 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b0.op_ne__c({a: [$e0], i: 0}); $b0.op_inc()) {
    let x = ($b0.op_mul__c()).a[($b0.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  (console.log((s), (((std_list_int_std_allocator_int.prototype.size__c.call(a.v)) | 0))));
  for (let $b1 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e1 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b1.op_ne__c({a: [$e1], i: 0}); $b1.op_inc()) {
    let y = $b1.op_mul__c();
    y.a[y.i] = (((((y.a[y.i]) + (1)) | 0)) | 0);
  }
  for (let $b2 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e2 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b2.op_ne__c({a: [$e2], i: 0}); $b2.op_inc()) {
    let y = $b2.op_mul__c();
    s = (((((Math.imul(s, 10)) | 0)) + (y.a[y.i])) | 0);
  }
  (console.log((s)));
  std_list_int_std_allocator_int.prototype.reverse.call(a.v);
  s = 0;
  for (let $b3 = new std_List_iterator_int({a: [a.v.begin()], i: 0}), $e3 = new std_List_iterator_int({a: [a.v.end()], i: 0}); $b3.op_ne__c({a: [$e3], i: 0}); $b3.op_inc()) {
    let x = ($b3.op_mul__c()).a[($b3.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  (console.log((s)));
  std_list_int_std_allocator_int.prototype.remove.call(a.v, {a: [10], i: 0});
  std_list_int_std_allocator_int.prototype.pop_front.call(a.v);
  (console.log((($t13 = std_list_int_std_allocator_int.prototype.front.call(a.v), $t13.a[$t13.i])), (($t14 = std_list_int_std_allocator_int.prototype.back.call(a.v), $t14.a[$t14.i])), (((std_list_int_std_allocator_int.prototype.size__c.call(a.v)) | 0))));
  let b = new std_list_int_std_allocator_int();
  std_list_int_std_allocator_int.prototype.push_back.call(b, {a: [7], i: 0});
  std_list_int_std_allocator_int.prototype.splice.call(b, std_list_int_std_allocator_int.prototype.end.call(b), {a: a, i: "v"});
  s = 0;
  for (let $b4 = new std_List_iterator_int({a: [b.begin()], i: 0}), $e4 = new std_List_iterator_int({a: [b.end()], i: 0}); $b4.op_ne__c({a: [$e4], i: 0}); $b4.op_inc()) {
    let x = ($b4.op_mul__c()).a[($b4.op_mul__c()).i];
    s = (((((Math.imul(s, 10)) | 0)) + (x)) | 0);
  }
  (console.log((s), (((std_list_int_std_allocator_int.prototype.size__c.call(a.v)) | 0))));
  std_list_int_std_allocator_int.prototype.clear.call(b);
  (console.log((((std_list_int_std_allocator_int.prototype.size__c.call(b)) | 0)), (((std_list_int_std_allocator_int.prototype.empty__c.call(b)) | 0))));
  return 0;
}
function std_distance_std_List_iterator_int(__first, __last) {
  __first = {v: __first};
  return std_distance_std_List_iterator_int_2(new std_List_iterator_int({a: __first, i: "v"}), new std_List_iterator_int({a: [__last], i: 0}), std_iterator_category_std_List_iterator_int({a: __first, i: "v"}));
}
function std_addressof_int(__r) {
  return (__r ? {a: __r.a, i: __r.i} : null);
}
function std_move_std_list_int_std_allocator_int(__t) {
  return __t;
}
function std_forward_1_int(__t) {
  return __t;
}
function std_iterator_category_std_List_iterator_int($p0) {
  return new std_bidirectional_iterator_tag();
}
function std_distance_std_List_iterator_int_2(__first, __last, $p2) {
  let __n = 0;
  while (__first.op_ne__c({a: [__last], i: 0})) {
     {
      __first.op_inc();
      (__n = ((__n + 1) | 0));
    }
  }
  return __n;
}
let std_piecewise_construct = new std_piecewise_construct_t();
main();
