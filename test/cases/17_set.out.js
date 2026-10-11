"use strict";
function _ctj_peq(a, b) { return a === b || (!!a && !!b && a.a === b.a && a.i === b.i); }
class std_sfinae_types {
  __dtor() {
  }
}
class std_sfinae_types_class_47 {
  __arr;
  constructor(...$a) {
    this.__init_std_sfinae_types_class_47(...$a);
  }
  __init_std_sfinae_types_class_47(...$a) {
    this.__arr = (($a[0]).a[($a[0]).i]).__arr;
  }
  __dtor() {
  }
}
class std_do_is_destructible_impl {
  __dtor() {
  }
}
class std_do_is_static_castable_impl {
  __dtor() {
  }
}
class std_do_is_direct_constructible_impl {
  __dtor() {
  }
}
class std_piecewise_construct_t {
  constructor(...$a) {
    this.__init_std_piecewise_construct_t(...$a);
  }
  __init_std_piecewise_construct_t(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_piecewise_construct_t)) {
    }
    else if ($a.length >= 0 && $a.length <= 0) {
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_input_iterator_tag {
  __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_forward_iterator_tag(...$a);
  }
  __init_std_forward_iterator_tag(...$a) {
  }
  __dtor() {
    std_input_iterator_tag.prototype.__dtor.call(this);
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  constructor(...$a) {
    super();
    this.__init_std_bidirectional_iterator_tag(...$a);
  }
  __init_std_bidirectional_iterator_tag(...$a) {
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
class std_Rb_tree_node_base {
  _M_color;
  _M_parent;
  _M_left;
  _M_right;
  constructor(...$a) {
    this.__init_std_Rb_tree_node_base(...$a);
  }
  __init_std_Rb_tree_node_base(...$a) {
    this._M_color = 0;
    this._M_parent = null;
    this._M_left = null;
    this._M_right = null;
  }
  __dtor() {
  }
}
class std_binary_function_int_int_bool {
  constructor(...$a) {
    this.__init_std_binary_function_int_int_bool(...$a);
  }
  __init_std_binary_function_int_int_bool(...$a) {
  }
  __dtor() {
  }
}
class std_less_int extends std_binary_function_int_int_bool {
  constructor(...$a) {
    super(...[]);
    this.__init_std_less_int(...$a);
  }
  __init_std_less_int(...$a) {
  }
  __dtor() {
    std_binary_function_int_int_bool.prototype.__dtor.call(this);
  }
  op_call__c(__x, __y) {
    return (__x.a[__x.i] < __y.a[__y.i]);
  }
}
class gnu_cxx_new_allocator_int {
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
class std_initializer_list_int {
  _M_array;
  _M_len;
  constructor(...$a) {
    this.__init_std_initializer_list_int(...$a);
  }
  __init_std_initializer_list_int(...$a) {
    this._M_array = null;
    this._M_len = 0;
  }
  __dtor() {
  }
}
class std_unary_function_int_int {
  constructor(...$a) {
    this.__init_std_unary_function_int_int(...$a);
  }
  __init_std_unary_function_int_int(...$a) {
  }
  __dtor() {
  }
}
class std_Identity_int extends std_unary_function_int_int {
  constructor(...$a) {
    super(...[]);
    this.__init_std_Identity_int(...$a);
  }
  __init_std_Identity_int(...$a) {
  }
  __dtor() {
    std_unary_function_int_int.prototype.__dtor.call(this);
  }
  op_call__c(__x) {
    return __x;
  }
}
class std_allocator_int_rebind_int {
  __dtor() {
  }
}
class std_Rb_tree_const_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_Rb_tree_const_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node = null;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  _M_value_field;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_node_int(...$a);
  }
  __init_std_Rb_tree_node_int(...$a) {
    let $t0;
    this._M_value_field = ($t0 = std_forward_1_int($a[0]), $t0.a[$t0.i]);
  }
  __dtor() {
    std_Rb_tree_node_base.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_iterator_int {
  _M_node;
  constructor(...$a) {
    this.__init_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_Rb_tree_iterator_int(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int)) {
      this._M_node = (((($a[0]).a[($a[0]).i])._M_node) ? {a: ((($a[0]).a[($a[0]).i])._M_node).a, i: ((($a[0]).a[($a[0]).i])._M_node).i} : null);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this._M_node = null;
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this._M_node = (($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  op_dec() {
    let $t1;
    this._M_node = ($t1 = std_Rb_tree_decrement__std_Rb_tree_node_baseP((this._M_node ? {a: this._M_node.a, i: this._M_node.i} : null)), $t1 ? {a: $t1.a, i: $t1.i} : null);
    return {a: [this], i: 0};
  }
  op_eq__c(__x) {
    return (this._M_node === ((__x.a[__x.i])._M_node) || (this._M_node && ((__x.a[__x.i])._M_node) && this._M_node.a === ((__x.a[__x.i])._M_node).a && this._M_node.i === ((__x.a[__x.i])._M_node).i));
  }
}
class std_pair_std_Rb_tree_const_iterator_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_const_iterator_int_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_Rb_tree_const_iterator_int(std_forward_1_std_Rb_tree_iterator_int($a[0]));
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int_R {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int_R {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_integral_constant_bool_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_bool_value0(...$a);
  }
  __init_std_integral_constant_bool_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_is_void_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_R_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
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
class std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_not_std_is_void_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_const_iterator_int_std_not_std_is_reference_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_const_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_is_convertible_bool_R_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_bool_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_bool_R(...$a);
  }
  __init_std_is_void_bool_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_bool_R {
  __dtor() {
  }
}
class std_remove_volatile_bool_R {
  __dtor() {
  }
}
class std_remove_const_bool {
  __dtor() {
  }
}
class std_is_void_helper_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_bool(...$a);
  }
  __init_std_is_void_helper_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_bool(...$a);
  }
  __init_std_is_function_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_bool(...$a);
  }
  __init_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_bool_std_is_array_bool extends std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_or_std_is_function_bool_std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_bool_std_is_array_bool {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_bool_R_std_or_std_is_function_bool_std_is_array_bool {
  __dtor() {
  }
}
class std_is_convertible_helper_bool_R_bool_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_bool_R_bool_value0(...$a);
  }
  __init_std_is_convertible_helper_bool_R_bool_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_bool(...$a);
  }
  __init_std_is_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_bool(...$a);
  }
  __init_std_is_lvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_bool(...$a);
  }
  __init_std_is_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool extends std_is_rvalue_reference_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a);
  }
  __init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool {
  __dtor() {
  }
}
class std_not_std_is_reference_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_bool(...$a);
  }
  __init_std_not_std_is_reference_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_bool extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_bool(...$a);
  }
  __init_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_bool {
  __dtor() {
  }
}
class std_remove_volatile_bool {
  __dtor() {
  }
}
class std_not_std_is_void_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_bool(...$a);
  }
  __init_std_not_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool extends std_not_std_is_void_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a);
  }
  __init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a) {
  }
  __dtor() {
    std_not_std_is_void_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_bool_std_not_std_is_reference_bool {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_bool extends std_add_rvalue_reference_helper_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_bool(...$a);
  }
  __init_std_add_rvalue_reference_bool(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_enable_if_value1_void {
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_convertible_bool_bool extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_bool_bool(...$a);
  }
  __init_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a);
  }
  __init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a) {
  }
  __dtor() {
    std_or_std_is_function_bool_std_is_array_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_bool_std_or_std_is_function_bool_std_is_array_bool {
  __dtor() {
  }
}
class std_is_convertible_helper_bool_bool_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_bool_bool_value0(...$a);
  }
  __init_std_is_convertible_helper_bool_bool_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_pair_std_Rb_tree_iterator_int_bool {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    if ($a.length >= 2 && $a.length <= 2 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_Rb_tree_iterator_int) && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = new std_Rb_tree_iterator_int($a[0]);
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[1]).a[($a[1]).i];
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_iterator_int_bool)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.first.ctj_a = this; this.first.ctj_i = "first";
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_int_R {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int_R {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_R_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_is_rvalue_reference_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int extends std_not_std_is_void_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_int_std_not_std_is_reference_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_R_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  __dtor() {
    std_is_convertible_bool_bool.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int {
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_const_iterator_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_bool {
  constructor(...$a) {
    this.__init_std_declval_protector_bool(...$a);
  }
  __init_std_declval_protector_bool(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  first;
  second;
  constructor(...$a) {
    this.__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    let $t2, $t3, $t4, $t5;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && $a[0].a[$a[0].i] instanceof std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P)) {
      this.first = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).first;
      this.second = ($a[0] && $a[0].a ? $a[0].a[$a[0].i] : $a[0]).second;
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ((($a[0]).a[($a[0]).i]) ? {a: (($a[0]).a[($a[0]).i]).a, i: (($a[0]).a[($a[0]).i]).i} : null);
      this.second = ((($a[1]).a[($a[1]).i]) ? {a: (($a[1]).a[($a[1]).i]).a, i: (($a[1]).a[($a[1]).i]).i} : null);
    }
    else if ($a.length >= 2 && $a.length <= 2 && ($a[0] === null || typeof $a[0] === "object") && ($a[1] === null || typeof $a[1] === "object")) {
      this.first = ($t2 = std_forward_1_std_Rb_tree_node_int_P(($a[0]).a[($a[0]).i]), $t3 = ($t2 ? $t2.a[$t2.i] : null), $t3 && $t3.a !== undefined ? {a: $t3.a, i: $t3.i} : $t3);
      this.second = ($t4 = std_forward_1_std_Rb_tree_node_int_P(($a[1]).a[($a[1]).i]), $t5 = ($t4 ? $t4.a[$t4.i] : null), $t5 && $t5.a !== undefined ? {a: $t5.a, i: $t5.i} : $t5);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_base_P_R {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P_R {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_is_rvalue_reference_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P extends std_not_std_is_void_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_base_P_std_not_std_is_reference_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_remove_reference_int {
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_iterator_int {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_iterator_int(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_iterator_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_Rb_tree_iterator_int {
  __dtor() {
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
  __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_int {
  __dtor() {
  }
  allocate(__n, $p1 = {a: [0], i: 0}) {
    let $t6;
    if ((__n > this.max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t6 = operatornew__unsigned_long_long((__n * 32)), $t6 ? {a: $t6.a, i: $t6.i} : null);
  }
  deallocate(__p, $p1) {
    operatordelete__voidP((__p ? {a: __p.a, i: __p.i} : null));
  }
  max_size__c() {
    return (Math.trunc(((-(1)) >>> 0) / 32));
  }
  construct__rv(__p, __args_0) {
    (__p.a[__p.i] = new std_Rb_tree_node_int(std_forward_1_int(__args_0)), __p.a[__p.i].ctj_a = __p.a, __p.a[__p.i].ctj_i = __p.i, {a: __p.a, i: __p.i});
  }
}
class std_allocator_std_Rb_tree_node_int extends gnu_cxx_new_allocator_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  __init_std_allocator_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_int {
  _M_key_compare;
  _M_header;
  _M_node_count;
  constructor(...$a) {
    super(...[]);
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    this._M_key_compare = new std_less_int();
    this._M_key_compare.ctj_a = this; this._M_key_compare.ctj_i = "_M_key_compare";
    this._M_header = new std_Rb_tree_node_base();
    this._M_header.ctj_a = this; this._M_header.ctj_i = "_M_header";
    this._M_node_count = 0;
    this._M_initialize();
  }
  __dtor() {
    std_allocator_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
  _M_initialize() {
    this._M_header._M_color = 0;
    this._M_header._M_parent = null;
    this._M_header._M_left = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
    this._M_header._M_right = (({a: this, i: "_M_header"}) ? {a: ({a: this, i: "_M_header"}).a, i: ({a: this, i: "_M_header"}).i} : null);
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int {
  _M_impl;
  constructor(...$a) {
    this.__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a) {
    this._M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
    this._M_impl.ctj_a = this; this._M_impl.ctj_i = "_M_impl";
  }
  __dtor() {
  }
  _M_get_Node_allocator() {
    return {a: this, i: "_M_impl"};
  }
  _M_get_node() {
    let $t7;
    return ($t7 = gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.allocate.call(this._M_impl, 1, {a: [0], i: 0}), $t7 ? {a: $t7.a, i: $t7.i} : null);
  }
  _M_put_node(__p) {
    gnu_cxx_new_allocator_std_Rb_tree_node_int.prototype.deallocate.call(this._M_impl, (__p ? {a: __p.a, i: __p.i} : null), 1);
  }
  _M_begin() {
    return (this._M_impl._M_header._M_parent ? {a: this._M_impl._M_header._M_parent.a, i: this._M_impl._M_header._M_parent.i} : null);
  }
  _M_end() {
    return (({a: this._M_impl, i: "_M_header"}) ? {a: ({a: this._M_impl, i: "_M_header"}).a, i: ({a: this._M_impl, i: "_M_header"}).i} : null);
  }
  static _S_value(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return {a: ($a[0]).a[($a[0]).i], i: "_M_value_field"};
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_key(...$a) {
    let $t8, $t9;
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t8 = new std_Identity_int(), $t8)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      return (($t9 = new std_Identity_int(), $t9)).op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_value((($a[0]) ? {a: ($a[0]).a, i: ($a[0]).i} : null)));
    }
    else { throw new Error("no matching overload"); }
  }
  static _S_left(__x) {
    return (((__x.a[__x.i])._M_left) ? {a: ((__x.a[__x.i])._M_left).a, i: ((__x.a[__x.i])._M_left).i} : null);
  }
  static _S_right(__x) {
    return (((__x.a[__x.i])._M_right) ? {a: ((__x.a[__x.i])._M_right).a, i: ((__x.a[__x.i])._M_right).i} : null);
  }
  _M_get_insert_unique_pos(__k) {
    let $t10, $t11, $t12;
    let __x = ($t10 = this._M_begin(), $t10 ? {a: $t10.a, i: $t10.i} : null);
    let __y = ($t11 = this._M_end(), $t11 ? {a: $t11.a, i: $t11.i} : null);
    let __comp = true;
    while ((__x !== null)) {
       {
        __y = (__x ? {a: __x.a, i: __x.i} : null);
        __comp = this._M_impl._M_key_compare.op_call__c(__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__x ? {a: __x.a, i: __x.i} : null)));
        __x = ($t12 = (__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_left((__x ? {a: __x.a, i: __x.i} : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_right((__x ? {a: __x.a, i: __x.i} : null))), $t12 ? {a: $t12.a, i: $t12.i} : null);
      }
    }
    let __j = new std_Rb_tree_iterator_int({a: [new std_Rb_tree_iterator_int((__y ? {a: __y.a, i: __y.i} : null))], i: 0});
    if (__comp) {
       {
        if (__j.op_eq__c({a: [new std_Rb_tree_iterator_int({a: [this.begin()], i: 0})], i: 0})) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
        }
        else {
          __j.op_dec();
        }
      }
    }
    if (this._M_impl._M_key_compare.op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__j._M_node ? {a: __j._M_node.a, i: __j._M_node.i} : null)), __k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__x], i: 0}, {a: [__y], i: 0});
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [__j._M_node], i: 0}, {a: [null], i: 0});
  }
  begin() {
    return new std_Rb_tree_iterator_int((this._M_impl._M_header._M_left ? {a: this._M_impl._M_header._M_left.a, i: this._M_impl._M_header._M_left.i} : null));
  }
  size__c() {
    return this._M_impl._M_node_count;
  }
  _M_insert_unique__rv(__v) {
    let $t13;
    let __res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P({a: [this._M_get_insert_unique_pos((($t13 = new std_Identity_int(), $t13)).op_call__c(__v))], i: 0})], i: 0});
    if (__res.second) {
      return new std_pair_std_Rb_tree_iterator_int_bool({a: [new std_Rb_tree_iterator_int({a: [this._M_insert___rv((__res.first ? {a: __res.first.a, i: __res.first.i} : null), (__res.second ? {a: __res.second.a, i: __res.second.i} : null), std_forward_1_int(__v))], i: 0})], i: 0}, {a: [true], i: 0});
    }
    return new std_pair_std_Rb_tree_iterator_int_bool({a: [new std_Rb_tree_iterator_int((__res.first ? {a: __res.first.a, i: __res.first.i} : null))], i: 0}, {a: [false], i: 0});
  }
  _M_insert___rv(__x, __p, __v) {
    let $t14, $t15, $t16, $t17;
    let __insert_left = (((__x !== null) || ($t15 = ($t14 = this._M_end(), $t14), (__p === $t15 || (__p && $t15 && __p.a === $t15.a && __p.i === $t15.i)))) || this._M_impl._M_key_compare.op_call__c((($t16 = new std_Identity_int(), $t16)).op_call__c(__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int._S_key((__p ? {a: __p.a, i: __p.i} : null))));
    let __z = ($t17 = this._M_create_node__rv(std_forward_1_int(__v)), $t17 ? {a: $t17.a, i: $t17.i} : null);
    std_Rb_tree_insert_and_rebalance(__insert_left, (__z ? {a: __z.a, i: __z.i} : null), (__p ? {a: __p.a, i: __p.i} : null), {a: this._M_impl, i: "_M_header"});
    ++this._M_impl._M_node_count;
    return new std_Rb_tree_iterator_int((__z ? {a: __z.a, i: __z.i} : null));
  }
  _M_create_node__rv(__args_0) {
    let $t18;
    let __tmp = ($t18 = this._M_get_node(), $t18 ? {a: $t18.a, i: $t18.i} : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_int.construct__rv(this._M_get_Node_allocator(), (__tmp ? {a: __tmp.a, i: __tmp.i} : null), std_forward_1_int(__args_0));
      }
    }
    if (false) {
       {
        this._M_put_node((__tmp ? {a: __tmp.a, i: __tmp.i} : null));
      }
    }
    return (__tmp ? {a: __tmp.a, i: __tmp.i} : null);
  }
}
class std_set_int_std_less_int_std_allocator_int {
  _M_t;
  constructor(...$a) {
    this.__init_std_set_int_std_less_int_std_allocator_int(...$a);
  }
  __init_std_set_int_std_less_int_std_allocator_int(...$a) {
    this._M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int();
    this._M_t.ctj_a = this; this._M_t.ctj_i = "_M_t";
  }
  __dtor() {
  }
  size__c() {
    return this._M_t.size__c();
  }
  insert(__x) {
    let __p = new std_pair_std_Rb_tree_iterator_int_bool({a: [new std_pair_std_Rb_tree_iterator_int_bool({a: [this._M_t._M_insert_unique__rv(__x)], i: 0})], i: 0});
    return new std_pair_std_Rb_tree_const_iterator_int_bool({a: __p, i: "first"}, {a: __p, i: "second"});
  }
}
class std_reverse_iterator_int {
  __dtor() {
  }
}
class std_has_iterator_category_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_int(...$a);
  }
  __init_std_has_iterator_category_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_int {
  __dtor() {
  }
}
class std_remove_volatile_int {
  __dtor() {
  }
}
class std_remove_const_int {
  __dtor() {
  }
}
class std_has_iterator_category_helper_int extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_has_iterator_category_helper_int(...$a);
  }
  __init_std_has_iterator_category_helper_int(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_iterator_traits_int_value0 {
  __dtor() {
  }
}
class std_iterator_traits_int extends std_iterator_traits_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_iterator_traits_int(...$a);
  }
  __init_std_iterator_traits_int(...$a) {
  }
  __dtor() {
    std_iterator_traits_int_value0.prototype.__dtor.call(this);
  }
}
class std_move_iterator_int {
  _M_current;
  constructor(...$a) {
    this.__init_std_move_iterator_int(...$a);
  }
  __init_std_move_iterator_int(...$a) {
    this._M_current = 0;
  }
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_is_array_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P extends std_not_std_is_void_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_int_P_std_not_std_is_reference_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 1;
}
class std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a);
  }
  __init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_function_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int_P(...$a);
  }
  __init_std_is_function_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_int_P(...$a);
  }
  __init_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_function_int_P_std_is_array_int_P extends std_is_array_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  __init_std_or_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_is_array_int_P.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P extends std_or_std_is_function_int_P_std_is_array_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_int_P_std_is_array_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_function_int_P_std_is_array_int_P {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P {
  __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a);
  }
  __init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_enable_if_value0_void {
  __dtor() {
  }
}
class std_is_convertible_int_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_int(...$a);
  }
  __init_std_is_void_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_int(...$a);
  }
  __init_std_is_void_helper_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  constructor(...$a) {
    super();
    this.__init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a);
  }
  __init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a) {
  }
  __dtor() {
    std_sfinae_types.prototype.__dtor.call(this);
  }
  static value = 0;
}
class std_is_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_int(...$a);
  }
  __init_std_is_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_int(...$a);
  }
  __init_std_is_lvalue_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_int(...$a);
  }
  __init_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_std_is_rvalue_reference_int {
  __dtor() {
  }
}
class std_not_std_is_reference_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_int(...$a);
  }
  __init_std_not_std_is_reference_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_int(...$a);
  }
  __init_std_not_std_is_void_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_int_std_not_std_is_void_int extends std_not_std_is_void_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a);
  }
  __init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a) {
  }
  __dtor() {
    std_not_std_is_void_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_int_std_not_std_is_reference_int {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_int extends std_add_rvalue_reference_helper_int_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_int(...$a);
  }
  __init_std_add_rvalue_reference_int(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_int_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
    std_is_convertible_int_std_Rb_tree_node_base_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_base_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_base_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_base_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_remove_reference_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_declval_protector_int {
  constructor(...$a) {
    this.__init_std_declval_protector_int(...$a);
  }
  __init_std_declval_protector_int(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int {
  __dtor() {
  }
  static construct__rv(__a, __p, __args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_int._S_construct__rv(__a, (__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
  static _S_construct__rv(__a, __p, __args_0) {
    (__a.a[__a.i]).construct__rv((__p ? {a: __p.a, i: __p.i} : null), std_forward_1_int(__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  constructor(...$a) {
    this.__init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
  }
  static value = 1;
}
class std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1.prototype.__dtor.call(this);
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_rvalue_reference_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_rvalue_reference_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_safe_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_static_castable_impl_int_std_Rb_tree_node_int extends std_do_is_static_castable_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_do_is_static_castable_impl.prototype.__dtor.call(this);
  }
}
class std_is_function_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_int(...$a);
  }
  __init_std_is_function_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_int_std_is_function_int extends std_is_function_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  __init_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_is_function_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_void_int_std_is_function_int {
  __dtor() {
  }
}
class std_not_std_or_std_is_void_int_std_is_function_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  __init_std_not_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1 {
  constructor(...$a) {
    this.__init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a);
  }
  __init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_lvalue_reference_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  __init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_int_std_is_lvalue_reference_int {
  __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_remove_reference_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_base_of_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int extends std_is_base_of_int_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  __init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_base_of_int_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_base_of_int_std_Rb_tree_node_int_std_not_std_is_same_int_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0_std_is_static_castable_int_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_is_destructible_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_destructible_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_void_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_array_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_array_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_array_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    this.__init_std_integral_constant_unsigned_long_long_value0(...$a);
  }
  __init_std_integral_constant_unsigned_long_long_value0(...$a) {
  }
  __dtor() {
  }
  static value = 0;
}
class std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  constructor(...$a) {
    super();
    this.__init_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_unsigned_long_long_value0.prototype.__dtor.call(this);
  }
}
class std_not_std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0 extends std_is_array_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  __init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  __dtor() {
    std_is_array_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_int_value0_std_is_array_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_is_function_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_function_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_arithmetic_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_arithmetic_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_arithmetic_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_integral_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_integral_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_integral_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_integral_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int extends std_is_floating_point_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_floating_point_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_enum_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_enum_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_pointer_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_member_pointer_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int extends std_is_scalar_std_Rb_tree_node_int {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  __init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_is_scalar_std_Rb_tree_node_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_int_value0_value0 extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a);
  }
  __init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_remove_all_extents_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_int extends std_do_is_destructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_destructible_impl_std_Rb_tree_node_int(...$a);
  }
  __init_std_is_destructible_impl_std_Rb_tree_node_int(...$a) {
  }
  __dtor() {
    std_do_is_destructible_impl.prototype.__dtor.call(this);
  }
}
class std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_is_lvalue_reference_std_Rb_tree_node_int_R {
  constructor(...$a) {
    super();
    this.__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_is_lvalue_reference_std_Rb_tree_node_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R {
  __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  constructor(...$a) {
    super();
    this.__init_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value0.prototype.__dtor.call(this);
  }
}
class std_remove_cv_std_Rb_tree_node_int_R {
  __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_R {
  __dtor() {
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  constructor(...$a) {
    super();
    this.__init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_integral_constant_bool_value1.prototype.__dtor.call(this);
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R extends std_not_std_is_reference_std_Rb_tree_node_int_R {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_not_std_is_reference_std_Rb_tree_node_int_R.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_int_R_std_not_std_is_reference_std_Rb_tree_node_int_R {
  __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  constructor(...$a) {
    super();
    this.__init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
    std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0.prototype.__dtor.call(this);
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_do_is_direct_constructible_impl {
  constructor(...$a) {
    super();
    this.__init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_do_is_direct_constructible_impl.prototype.__dtor.call(this);
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_is_direct_constructible_impl_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_int_int_std_is_destructible_std_Rb_tree_node_int {
  __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  constructor(...$a) {
    super();
    this.__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  __dtor() {
    std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int.prototype.__dtor.call(this);
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  __dtor() {
  }
}
class std_declval_protector_std_allocator_std_Rb_tree_node_int_P {
  constructor(...$a) {
    this.__init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  __init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
class std_declval_protector_std_Rb_tree_node_int_R {
  constructor(...$a) {
    this.__init_std_declval_protector_std_Rb_tree_node_int_R(...$a);
  }
  __init_std_declval_protector_std_Rb_tree_node_int_R(...$a) {
  }
  __dtor() {
  }
  static __stop = 0;
}
function std_throw_bad_alloc(...$a) { throw new Error("unresolved external: std::__throw_bad_alloc"); }
function operatornew__unsigned_long_long(...$a) { return {a: new Array($a[0]).fill(0), i: 0}; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { var x=$a[0]; if(!x) return null; var n=x.a[x.i]; var yp=n._M_parent&&n._M_parent.a[n._M_parent.i]; if(n._M_color===0&&yp&&yp._M_parent&&_ctj_peq(yp._M_parent,x)){ x=n._M_right; return x?{a:x.a,i:x.i}:null; } if(n._M_left){ x=n._M_left; n=x.a[x.i]; while(n._M_right){ x=n._M_right; n=x.a[x.i]; } return {a:x.a,i:x.i}; } var y=n._M_parent; while(y){ var p=y.a[y.i]; if(!_ctj_peq(x,p._M_left)) break; x=y; n=p; y=n._M_parent; } return y?{a:y.a,i:y.i}:null; }
function std_Rb_tree_insert_and_rebalance(...$a) { var left=$a[0],x=$a[1],p=$a[2],h=$a[3];var xn=x.a[x.i],pn=p.a[p.i],hn=h.a[h.i];xn._M_parent={a:p.a,i:p.i};xn._M_left=null;xn._M_right=null;xn._M_color=0;if(left){pn._M_left={a:x.a,i:x.i};if(_ctj_peq(p,h)){hn._M_parent={a:x.a,i:x.i};hn._M_right={a:x.a,i:x.i};}else if(_ctj_peq(p,hn._M_left)) hn._M_left={a:x.a,i:x.i};}else{pn._M_right={a:x.a,i:x.i};if(_ctj_peq(p,hn._M_right)) hn._M_right={a:x.a,i:x.i};}if(hn._M_parent){var r=hn._M_parent.a[hn._M_parent.i];if(r) r._M_color=1;} }
function main() {
  let s = new std_set_int_std_less_int_std_allocator_int();
  new std_pair_std_Rb_tree_const_iterator_int_bool({a: [s.insert({a: [1], i: 0})], i: 0});
  new std_pair_std_Rb_tree_const_iterator_int_bool({a: [s.insert({a: [2], i: 0})], i: 0});
  new std_pair_std_Rb_tree_const_iterator_int_bool({a: [s.insert({a: [2], i: 0})], i: 0});
  (console.log((s.size__c())));
  return 0;
}
function std_declval_std_Rb_tree_const_iterator_int() {
  return std_declval_protector_std_Rb_tree_const_iterator_int.__delegate();
}
function std_declval_bool() {
  let $t19;
  return (($t19 = std_declval_protector_bool.__delegate(), $t19.a[$t19.i]) != null);
}
function std_declval_std_Rb_tree_iterator_int() {
  return std_declval_protector_std_Rb_tree_iterator_int.__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P.__delegate();
}
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_int() {
  return std_declval_protector_int.__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P.__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R.__delegate();
}
function std_forward_1_int(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_iterator_int(__t) {
  return __t;
}
function std_forward_1_std_Rb_tree_node_int_P(__t) {
  return __t.a[__t.i];
}
let std_piecewise_construct = new std_piecewise_construct_t();
main();
