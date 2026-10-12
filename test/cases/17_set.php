<?php
class std_sfinae_types {
  function __dtor() {
  }
}
class std_sfinae_types_class_47 {
  public $__arr;
  function __construct(...$a) {
    $this->__init_std_sfinae_types_class_47(...$a);
  }
  function __init_std_sfinae_types_class_47(...$a) {
    $this->__arr = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->__arr;
  }
  function __dtor() {
  }
}
class std_do_is_destructible_impl {
  function __dtor() {
  }
}
class std_do_is_static_castable_impl {
  function __dtor() {
  }
}
class std_do_is_direct_constructible_impl {
  function __dtor() {
  }
}
class std_piecewise_construct_t {
  function __construct(...$a) {
    $this->__init_std_piecewise_construct_t(...$a);
  }
  function __init_std_piecewise_construct_t(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_input_iterator_tag {
  function __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_forward_iterator_tag(...$a);
  }
  function __init_std_forward_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_input_iterator_tag();
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_bidirectional_iterator_tag(...$a);
  }
  function __init_std_bidirectional_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_forward_iterator_tag();
  }
}
class std_random_access_iterator_tag extends std_bidirectional_iterator_tag {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_random_access_iterator_tag(...$a);
  }
  function __init_std_random_access_iterator_tag(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_bidirectional_iterator_tag();
  }
}
class std_nothrow_t {
  function __construct(...$a) {
    $this->__init_std_nothrow_t(...$a);
  }
  function __init_std_nothrow_t(...$a) {
  }
  function __dtor() {
  }
}
class std_Rb_tree_node_base {
  public $_M_color;
  public $_M_parent;
  public $_M_left;
  public $_M_right;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_node_base(...$a);
  }
  function __init_std_Rb_tree_node_base(...$a) {
    $this->_M_color = 0;
    $this->_M_parent = null;
    $this->_M_left = null;
    $this->_M_right = null;
  }
  function __dtor() {
  }
}
class std_binary_function_int_int_bool {
  function __construct(...$a) {
    $this->__init_std_binary_function_int_int_bool(...$a);
  }
  function __init_std_binary_function_int_int_bool(...$a) {
  }
  function __dtor() {
  }
}
class std_less_int extends std_binary_function_int_int_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_less_int(...$a);
  }
  function __init_std_less_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_binary_function_int_int_bool();
  }
  function op_call__c($__x, $__y) {
    return ($__x["a"][$__x["i"]] < $__y["a"][$__y["i"]]);
  }
}
class gnu_cxx_new_allocator_int {
  function __dtor() {
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_int(...$a);
  }
  function __init_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_int();
  }
}
class std_set_int_std_less_int_std_allocator_int {
  public $_M_t;
  function __construct(...$a) {
    $this->__init_std_set_int_std_less_int_std_allocator_int(...$a);
  }
  function __init_std_set_int_std_less_int_std_allocator_int(...$a) {
    $this->_M_t = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int();
  }
  function __dtor() {
  }
  function size__c() {
    return $this->_M_t->size__c();
  }
  function insert($__x) {
    $__p = new std_pair_std_Rb_tree_iterator_int_bool(["a" => [new std_pair_std_Rb_tree_iterator_int_bool($this->_M_t->_M_insert_unique__rv($__x))], "i" => 0]);
    return new std_pair_std_Rb_tree_const_iterator_int_bool(["a" => [[$__p->first, $__p->second]], "i" => 0]);
  }
}
class std_initializer_list_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_int(...$a);
  }
  function __init_std_initializer_list_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_unary_function_int_int {
  function __construct(...$a) {
    $this->__init_std_unary_function_int_int(...$a);
  }
  function __init_std_unary_function_int_int(...$a) {
  }
  function __dtor() {
  }
}
class std_Identity_int extends std_unary_function_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Identity_int(...$a);
  }
  function __init_std_Identity_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_int_int();
  }
  function op_call__c($__x) {
    return $__x;
  }
}
class std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a);
  }
  function __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int(...$a) {
    $this->_M_impl = new std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1();
  }
  function __dtor() {
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_node() {
    return ($t0 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_int::class))(1, ["a" => [0], "i" => 0]), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_begin() {
    return ($this->_M_impl->_M_header->_M_parent ? ["a" => $this->_M_impl->_M_header->_M_parent["a"], "i" => $this->_M_impl->_M_header->_M_parent["i"]] : null);
  }
  function _M_end() {
    return ((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null);
  }
  static function _S_value(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return ["a" => ($a[0] ?? null)["a"][($a[0] ?? null)["i"]], "i" => "_M_value_field"];
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_key(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t1 = new std_Identity_int([]), $t1))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t2 = new std_Identity_int([]), $t2))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else { throw new Exception("no matching overload"); }
  }
  static function _S_left($__x) {
    return ((($__x["a"][$__x["i"]])->_M_left) ? ["a" => (($__x["a"][$__x["i"]])->_M_left)["a"], "i" => (($__x["a"][$__x["i"]])->_M_left)["i"]] : null);
  }
  static function _S_right($__x) {
    return ((($__x["a"][$__x["i"]])->_M_right) ? ["a" => (($__x["a"][$__x["i"]])->_M_right)["a"], "i" => (($__x["a"][$__x["i"]])->_M_right)["i"]] : null);
  }
  function _M_get_insert_unique_pos($__k) {
    $__x = ($t3 = $this->_M_begin(), $t3 ? ["a" => $t3["a"], "i" => $t3["i"]] : null);
    $__y = ($t4 = $this->_M_end(), $t4 ? ["a" => $t4["a"], "i" => $t4["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t5 = ($__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t5 ? ["a" => $t5["a"], "i" => $t5["i"]] : null);
      }
    }
    $__j = new std_Rb_tree_iterator_int(["a" => [new std_Rb_tree_iterator_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null))], "i" => 0]);
    if ($__comp) {
       {
        if ($__j->op_eq__c(["a" => [new std_Rb_tree_iterator_int($this->begin())], "i" => 0])) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
        }
        else {
          $__j->op_dec();
        }
      }
    }
    if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__j->_M_node ? ["a" => $__j->_M_node["a"], "i" => $__j->_M_node["i"]] : null)), $__k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__j->_M_node, 0]], "i" => 0]);
  }
  function begin() {
    return new std_Rb_tree_iterator_int(($this->_M_impl->_M_header->_M_left ? ["a" => $this->_M_impl->_M_header->_M_left["a"], "i" => $this->_M_impl->_M_header->_M_left["i"]] : null));
  }
  function size__c() {
    return $this->_M_impl->_M_node_count;
  }
  function _M_insert_unique__rv($__v) {
    $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos((($t6 = new std_Identity_int([]), $t6))->op_call__c($__v)))], "i" => 0]);
    if ($__res->second) {
      return new std_pair_std_Rb_tree_iterator_int_bool(["a" => [[new std_Rb_tree_iterator_int($this->_M_insert___rv(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), std_forward_1_int($__v))), true]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_iterator_int_bool(["a" => [[new std_Rb_tree_iterator_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null)), false]], "i" => 0]);
  }
  function _M_insert___rv($__x, $__p, $__v) {
    $__insert_left = ((($__x !== null) || ($__p === (($t7 = $this->_M_end(), $t7)) || ($__p && (($t7 = $this->_M_end(), $t7)) && $__p["a"] === (($t7 = $this->_M_end(), $t7))["a"] && $__p["i"] === (($t7 = $this->_M_end(), $t7))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c((($t8 = new std_Identity_int([]), $t8))->op_call__c($__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    $__z = ($t9 = $this->_M_create_node__rv(std_forward_1_int($__v)), $t9 ? ["a" => $t9["a"], "i" => $t9["i"]] : null);
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__tmp = ($t10 = $this->_M_get_node(), $t10 ? ["a" => $t10["a"], "i" => $t10["i"]] : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_int($__args_0));
      }
    }
    if (false) {
       {
        $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
      }
    }
    return ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null);
  }
}
class std_Rb_tree_const_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_Rb_tree_const_iterator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_node = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_node_int(...$a);
  }
  function __init_std_Rb_tree_node_int(...$a) {
    $this->_M_value_field = (($t12 = ($t11 = std_forward_1_int($a[0] ?? null), $t11["a"][$t11["i"]]), $t12))["a"][(($t12 = ($t11 = std_forward_1_int($a[0] ?? null), $t11["a"][$t11["i"]]), $t12))["i"]];
  }
  function __dtor() {
    $this->__dtor_std_Rb_tree_node_base();
  }
}
class std_Rb_tree_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_Rb_tree_iterator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_node = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_dec() {
    $this->_M_node = ($t13 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t13 ? ["a" => $t13["a"], "i" => $t13["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
}
class std_pair_std_Rb_tree_const_iterator_int_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a);
  }
  function __init_std_pair_std_Rb_tree_const_iterator_int_bool(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = new std_Rb_tree_const_iterator_int();
      $this->second = false;
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = new std_Rb_tree_const_iterator_int(std_forward_1_std_Rb_tree_iterator_int($a[0] ?? null));
      $this->second = ($a[1] ?? null)["a"][($a[1] ?? null)["i"]];
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_const_iterator_int_R {
  function __dtor() {
  }
}
class std_integral_constant_bool_value0 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_bool_value0(...$a);
  }
  function __init_std_integral_constant_bool_value0(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_void_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_is_array_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_const_iterator_int();
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_R_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_R_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_integral_constant_bool_value1 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_bool_value1(...$a);
  }
  function __init_std_integral_constant_bool_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_const_iterator_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_const_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R extends std_not_std_is_reference_std_Rb_tree_const_iterator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R_std_not_std_is_void_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_const_iterator_int_R_std_not_std_is_reference_std_Rb_tree_const_iterator_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_R_value0();
  }
}
class std_is_convertible_bool_R_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_bool_R(...$a);
  }
  function __init_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_bool_R {
  function __dtor() {
  }
}
class std_remove_volatile_bool_R {
  function __dtor() {
  }
}
class std_remove_const_bool_R {
  function __dtor() {
  }
}
class std_is_void_helper_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_bool_R(...$a);
  }
  function __init_std_is_void_helper_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_bool(...$a);
  }
  function __init_std_is_function_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_bool(...$a);
  }
  function __init_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_bool_std_is_array_bool extends std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_bool();
  }
}
class std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_void_bool_R_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_bool_std_is_array_bool();
  }
}
class std_conditional_value0_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_bool_R_std_or_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_is_convertible_helper_bool_R_bool_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_bool_R_bool_value0(...$a);
  }
  function __init_std_is_convertible_helper_bool_R_bool_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_bool_R(...$a);
  }
  function __init_std_is_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_bool_R(...$a);
  }
  function __init_std_is_lvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_bool_R(...$a);
  }
  function __init_std_is_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R extends std_is_lvalue_reference_bool_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_bool_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_bool_R_std_is_rvalue_reference_bool_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_bool_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_bool_R(...$a);
  }
  function __init_std_not_std_is_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_bool_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_bool_R(...$a);
  }
  function __init_std_not_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R extends std_not_std_is_reference_bool_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_bool_R_std_not_std_is_void_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_bool_R();
  }
}
class std_conditional_value0_std_not_std_is_void_bool_R_std_not_std_is_reference_bool_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_bool_R extends std_add_rvalue_reference_helper_bool_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_bool_R(...$a);
  }
  function __init_std_add_rvalue_reference_bool_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_bool_R_value0();
  }
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_R_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_enable_if_value1_void {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_const_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_const_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int extends std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_const_iterator_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_const_iterator_int_std_is_rvalue_reference_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int extends std_not_std_is_void_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_const_iterator_int_std_not_std_is_void_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_const_iterator_int();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_const_iterator_int_std_not_std_is_reference_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_const_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_const_iterator_int_value1();
  }
}
class std_is_convertible_bool_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_bool(...$a);
  }
  function __init_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_bool {
  function __dtor() {
  }
}
class std_remove_volatile_bool {
  function __dtor() {
  }
}
class std_remove_const_bool {
  function __dtor() {
  }
}
class std_is_void_helper_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_bool(...$a);
  }
  function __init_std_is_void_helper_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool extends std_or_std_is_function_bool_std_is_array_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a);
  }
  function __init_std_or_std_is_void_bool_std_is_function_bool_std_is_array_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_bool_std_is_array_bool();
  }
}
class std_conditional_value0_std_is_void_bool_std_or_std_is_function_bool_std_is_array_bool {
  function __dtor() {
  }
}
class std_is_convertible_helper_bool_bool_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_bool_bool_value0(...$a);
  }
  function __init_std_is_convertible_helper_bool_bool_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_bool(...$a);
  }
  function __init_std_is_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_bool(...$a);
  }
  function __init_std_is_lvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_bool extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_bool(...$a);
  }
  function __init_std_is_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool extends std_is_rvalue_reference_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_bool();
  }
}
class std_conditional_value0_std_is_lvalue_reference_bool_std_is_rvalue_reference_bool {
  function __dtor() {
  }
}
class std_not_std_is_reference_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_bool(...$a);
  }
  function __init_std_not_std_is_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_bool extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_bool(...$a);
  }
  function __init_std_not_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool extends std_not_std_is_void_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a);
  }
  function __init_std_and_std_not_std_is_reference_bool_std_not_std_is_void_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_bool();
  }
}
class std_conditional_value1_std_not_std_is_void_bool_std_not_std_is_reference_bool {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_bool_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_bool extends std_add_rvalue_reference_helper_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_bool(...$a);
  }
  function __init_std_add_rvalue_reference_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_bool_value1();
  }
}
class std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_pair_std_Rb_tree_iterator_int_bool {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_iterator_int_bool(...$a);
  }
  function __init_std_pair_std_Rb_tree_iterator_int_bool(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = new std_Rb_tree_iterator_int($a[0] ?? null);
      $this->second = ($a[1] ?? null)["a"][($a[1] ?? null)["i"]];
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = new std_Rb_tree_iterator_int();
      $this->second = false;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_iterator_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_is_array_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_iterator_int();
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_iterator_int_R_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_R_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R extends std_is_lvalue_reference_std_Rb_tree_iterator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_iterator_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_iterator_int_R_std_is_rvalue_reference_std_Rb_tree_iterator_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R extends std_not_std_is_reference_std_Rb_tree_iterator_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_R_std_not_std_is_void_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_iterator_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_iterator_int_R_std_not_std_is_reference_std_Rb_tree_iterator_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_R_value0();
  }
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool extends std_is_convertible_bool_R_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_std_is_convertible_bool_R_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_R_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_R_bool_std_is_convertible_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int extends std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_iterator_int_std_is_array_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int extends std_is_rvalue_reference_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_iterator_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_iterator_int_std_is_rvalue_reference_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int extends std_not_std_is_void_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_iterator_int_std_not_std_is_void_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_iterator_int();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_iterator_int_std_not_std_is_reference_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_iterator_int extends std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_iterator_int_value1();
  }
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int extends std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_iterator_int_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_iterator_int_std_or_std_is_function_std_Rb_tree_const_iterator_int_std_is_array_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool extends std_is_convertible_bool_bool {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_std_is_convertible_bool_bool(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_bool_bool();
  }
}
class std_conditional_value1_std_is_convertible_bool_bool_std_is_convertible_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int {
  function __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_const_iterator_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_const_iterator_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_const_iterator_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_bool_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_bool_R(...$a);
  }
  function __init_std_declval_protector_bool_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_const_iterator_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_const_iterator_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_bool {
  function __construct(...$a) {
    $this->__init_std_declval_protector_bool(...$a);
  }
  function __init_std_declval_protector_bool(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]) ? ["a" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["a"], "i" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["i"]] : null);
      $this->second = ((($a[1] ?? null)["a"][($a[1] ?? null)["i"]]) ? ["a" => (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])["a"], "i" => (($a[1] ?? null)["a"][($a[1] ?? null)["i"]])["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->first = null;
      $this->second = null;
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ($t14 = std_forward_1_std_Rb_tree_node_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t15 = ($t14 ? $t14["a"][$t14["i"]] : null), $t15 && is_array($t15) && array_key_exists("a", $t15) ? ["a" => $t15["a"], "i" => $t15["i"]] : $t15);
      $this->second = ($t16 = std_forward_1_std_Rb_tree_node_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t17 = ($t16 ? $t16["a"][$t16["i"]] : null), $t17 && is_array($t17) && array_key_exists("a", $t17) ? ["a" => $t17["a"], "i" => $t17["i"]] : $t17);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_R_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_R_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R extends std_is_lvalue_reference_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_base_P_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_base_P_R_std_is_rvalue_reference_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R extends std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_R_std_not_std_is_void_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_base_P_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_base_P_R_std_not_std_is_reference_std_Rb_tree_node_base_P_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_R_value0();
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P extends std_is_rvalue_reference_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_base_P_std_is_rvalue_reference_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P extends std_not_std_is_void_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_base_P_std_not_std_is_void_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_base_P_std_not_std_is_reference_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_base_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_base_P_value1();
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_iterator_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_iterator_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_iterator_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_iterator_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_iterator_int(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_iterator_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_remove_reference_std_Rb_tree_iterator_int {
  function __dtor() {
  }
}
class std_allocator_int_rebind_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t18 = operatornew__unsigned_long_long(($__n * 32)), $t18 ? ["a" => $t18["a"], "i" => $t18["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 32);
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_Rb_tree_node_int(std_forward_1_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_allocator_std_Rb_tree_node_int extends gnu_cxx_new_allocator_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_Rb_tree_node_int(...$a);
  }
  function __init_std_allocator_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_Rb_tree_node_int();
  }
}
class std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_int {
  public $_M_key_compare;
  public $_M_header;
  public $_M_node_count;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  function __init_std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int_Rb_tree_impl_std_less_int_value1(...$a) {
    $this->_M_key_compare = new std_less_int();
    $this->_M_header = new std_Rb_tree_node_base();
    $this->_M_node_count = 0;
    $this->_M_initialize();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_Rb_tree_node_int();
  }
  function _M_initialize() {
    $this->_M_header->_M_color = 0;
    $this->_M_header->_M_parent = null;
    $this->_M_header->_M_left = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
    $this->_M_header->_M_right = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_is_array_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P extends std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_int_P_std_is_array_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P extends std_not_std_is_void_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_P_std_not_std_is_void_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_int_P_std_not_std_is_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_int_P_value1();
  }
}
class std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_std_Rb_tree_node_base_P_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_base_P_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_P(...$a);
  }
  function __init_std_is_function_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_int_P(...$a);
  }
  function __init_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_int_P_std_is_array_int_P extends std_is_array_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  function __init_std_or_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P extends std_or_std_is_function_int_P_std_is_array_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_base_P_std_is_function_int_P_std_is_array_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_P_std_is_array_int_P();
  }
}
class std_conditional_value0_std_is_function_int_P_std_is_array_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_base_P_std_or_std_is_function_int_P_std_is_array_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_enable_if_value0_void {
  function __dtor() {
  }
}
class std_is_convertible_int_std_Rb_tree_node_base_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int(...$a);
  }
  function __init_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int {
  function __dtor() {
  }
}
class std_remove_volatile_int {
  function __dtor() {
  }
}
class std_remove_const_int {
  function __dtor() {
  }
}
class std_is_void_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int(...$a);
  }
  function __init_std_is_void_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int(...$a);
  }
  function __init_std_is_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int(...$a);
  }
  function __init_std_is_lvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_std_is_rvalue_reference_int {
  function __dtor() {
  }
}
class std_not_std_is_reference_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int(...$a);
  }
  function __init_std_not_std_is_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_void_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int(...$a);
  }
  function __init_std_not_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_std_not_std_is_void_int extends std_not_std_is_void_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_std_not_std_is_void_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_int();
  }
}
class std_conditional_value1_std_not_std_is_void_int_std_not_std_is_reference_int {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int extends std_add_rvalue_reference_helper_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int(...$a);
  }
  function __init_std_add_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_value1();
  }
}
class std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_declval_protector_std_Rb_tree_node_base_P_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_base_P_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_remove_reference_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_declval_protector_int {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int(...$a);
  }
  function __init_std_declval_protector_int(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int {
  function __dtor() {
  }
  static function construct__rv($__a, $__p, $__args_0) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_int::_S_construct__rv($__a, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
  }
  static function _S_construct__rv($__a, $__p, $__args_0) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_is_void_helper_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_int_P_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_std_Rb_tree_node_int_int();
  }
}
class std_is_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_rvalue_reference_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_int_std_is_rvalue_reference_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_std_Rb_tree_node_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_function_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int(...$a);
  }
  function __init_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_std_is_function_int extends std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int();
  }
}
class std_conditional_value0_std_is_void_int_std_is_function_int {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_std_is_function_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_std_is_function_int(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int extends std_is_lvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_std_is_rvalue_reference_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int();
  }
}
class std_conditional_value0_std_is_rvalue_reference_std_Rb_tree_node_int_std_is_lvalue_reference_int {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0();
  }
}
class std_remove_reference_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_cv_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_same_int_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_not_std_is_same_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_of_int_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int extends std_is_base_of_int_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_int_std_Rb_tree_node_int_std_is_base_of_int_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_base_of_int_std_Rb_tree_node_int();
  }
}
class std_conditional_value1_std_is_base_of_int_std_Rb_tree_node_int_std_not_std_is_same_int_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_std_Rb_tree_node_int_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1_std_is_lvalue_to_rvalue_ref_int_std_Rb_tree_node_int_value0_std_is_static_castable_int_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_std_Rb_tree_node_int_int extends std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_new_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int();
  }
}
class std_is_destructible_std_Rb_tree_node_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_destructible_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_unknown_bounds_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    $this->__init_std_integral_constant_unsigned_long_long_value0(...$a);
  }
  function __init_std_integral_constant_unsigned_long_long_value0(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_std_Rb_tree_node_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0 extends std_is_array_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a);
  }
  function __init_std_and_std_is_array_std_Rb_tree_node_int_std_not_std_extent_std_Rb_tree_node_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_not_std_extent_std_Rb_tree_node_int_value0_std_is_array_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_function_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_is_function_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_std_Rb_tree_node_int();
  }
}
class std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int extends std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_int_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_int_std_or_std_is_array_unknown_bounds_std_Rb_tree_node_int_std_is_function_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_scalar_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_arithmetic_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_arithmetic_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_integral_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_integral_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_integral_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_floating_point_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int extends std_is_floating_point_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_floating_point_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_integral_std_Rb_tree_node_int_std_is_floating_point_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_enum_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_enum_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_pointer_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_member_pointer_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_member_pointer_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_std_Rb_tree_node_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int extends std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_std_Rb_tree_node_int_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_std_Rb_tree_node_int_std_or_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_std_Rb_tree_node_int_std_or_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_arithmetic_std_Rb_tree_node_int_std_or_std_is_enum_std_Rb_tree_node_int_std_is_pointer_std_Rb_tree_node_int_std_is_member_pointer_std_Rb_tree_node_int_std_is_nullptr_t_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int extends std_is_scalar_std_Rb_tree_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a);
  }
  function __init_std_or_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_std_Rb_tree_node_int();
  }
}
class std_conditional_value0_std_is_reference_std_Rb_tree_node_int_std_is_scalar_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_std_Rb_tree_node_int_value0_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a);
  }
  function __init_std_is_destructible_safe_std_Rb_tree_node_int_value0_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_remove_all_extents_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_is_destructible_impl_std_Rb_tree_node_int extends std_do_is_destructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_impl_std_Rb_tree_node_int(...$a);
  }
  function __init_std_is_destructible_impl_std_Rb_tree_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_destructible_impl();
  }
}
class std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R extends std_is_lvalue_reference_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_std_Rb_tree_node_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_std_Rb_tree_node_int_R_std_is_rvalue_reference_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R extends std_not_std_is_reference_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_int_R_std_not_std_is_void_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_std_Rb_tree_node_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_std_Rb_tree_node_int_R_std_not_std_is_reference_std_Rb_tree_node_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_int_R extends std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_int_R_value0();
  }
}
class std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int extends std_is_direct_constructible_impl_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_and_std_is_destructible_std_Rb_tree_node_int_std_is_direct_constructible_impl_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_std_Rb_tree_node_int_int();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_std_Rb_tree_node_int_int_std_is_destructible_std_Rb_tree_node_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_std_Rb_tree_node_int_int_std_is_direct_constructible_new_safe_std_Rb_tree_node_int_int {
  function __dtor() {
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int_std_is_constructible_std_Rb_tree_node_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_int_int_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int {
  function __dtor() {
  }
}
class std_declval_protector_std_allocator_std_Rb_tree_node_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a);
  }
  function __init_std_declval_protector_std_allocator_std_Rb_tree_node_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_Rb_tree_node_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_int_R(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_decrement"); }
function std_Rb_tree_insert_and_rebalance(...$a) { throw new Exception("unresolved external: std::_Rb_tree_insert_and_rebalance"); }
function main() {
  $s = new std_set_int_std_less_int_std_allocator_int();
  new std_pair_std_Rb_tree_const_iterator_int_bool($s->insert(["a" => [1], "i" => 0]));
  new std_pair_std_Rb_tree_const_iterator_int_bool($s->insert(["a" => [2], "i" => 0]));
  new std_pair_std_Rb_tree_const_iterator_int_bool($s->insert(["a" => [2], "i" => 0]));
  null;
  return 0;
}
function std_declval_std_Rb_tree_const_iterator_int_R() {
  return std_declval_protector_std_Rb_tree_const_iterator_int_R::__delegate();
}
function std_declval_bool_R() {
  return std_declval_protector_bool_R::__delegate();
}
function std_declval_std_Rb_tree_const_iterator_int() {
  return std_declval_protector_std_Rb_tree_const_iterator_int::__delegate();
}
function std_declval_bool() {
  return std_declval_protector_bool::__delegate();
}
function std_declval_std_Rb_tree_iterator_int_R() {
  return std_declval_protector_std_Rb_tree_iterator_int_R::__delegate();
}
function std_declval_std_Rb_tree_iterator_int() {
  return std_declval_protector_std_Rb_tree_iterator_int::__delegate();
}
function std_declval_std_Rb_tree_node_base_P_R() {
  return std_declval_protector_std_Rb_tree_node_base_P_R::__delegate();
}
function std_declval_std_Rb_tree_node_base_P() {
  return std_declval_protector_std_Rb_tree_node_base_P::__delegate();
}
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P::__delegate();
}
function std_declval_int() {
  return std_declval_protector_int::__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_int_P::__delegate();
}
function std_declval_std_Rb_tree_node_int_R() {
  return std_declval_protector_std_Rb_tree_node_int_R::__delegate();
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_iterator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
std_integral_constant_bool_value0::$value = 0;
std_is_convertible_helper_std_Rb_tree_const_iterator_int_R_std_Rb_tree_const_iterator_int_value0::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
std_is_convertible_helper_bool_R_bool_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_const_iterator_int_std_Rb_tree_const_iterator_int_value0::$value = (1 === 1);
std_is_convertible_helper_bool_bool_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_iterator_int_R_std_Rb_tree_iterator_int_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_iterator_int_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_iterator_int_std_Rb_tree_const_iterator_int_value0::$value = (1 === 1);
std_declval_protector_std_Rb_tree_const_iterator_int_R::$__stop = false;
std_declval_protector_bool_R::$__stop = false;
std_declval_protector_std_Rb_tree_const_iterator_int::$__stop = false;
std_declval_protector_bool::$__stop = false;
std_is_convertible_helper_std_Rb_tree_node_base_P_R_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_declval_protector_std_Rb_tree_iterator_int_R::$__stop = false;
std_declval_protector_std_Rb_tree_iterator_int::$__stop = false;
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0::$value = (2 === 1);
std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0::$value = (2 === 1);
std_declval_protector_std_Rb_tree_node_base_P_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_base_P::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_int::$__stop = false;
std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int::$value = std_integral_constant_bool_value1::$value;
std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_declval_protector_std_allocator_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_R::$__stop = false;
main();
