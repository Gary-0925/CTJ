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
    $this->__arr = array_fill(0, 2, 0);
  }
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
  function __construct(...$a) {
    $this->__init_std_input_iterator_tag(...$a);
  }
  function __init_std_input_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_forward_iterator_tag extends std_input_iterator_tag {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_forward_iterator_tag(...$a);
  }
  function __init_std_forward_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_input_iterator_tag();
  }
}
class std_bidirectional_iterator_tag extends std_forward_iterator_tag {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_bidirectional_iterator_tag(...$a);
  }
  function __init_std_bidirectional_iterator_tag(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
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
class std_detail_List_node_base {
  public $_M_next;
  public $_M_prev;
  function __construct(...$a) {
    $this->__init_std_detail_List_node_base(...$a);
  }
  function __init_std_detail_List_node_base(...$a) {
    $this->_M_next = null;
    $this->_M_prev = null;
  }
  function __dtor() {
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
class std_List_base_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_List_base_int_std_allocator_int(...$a);
  }
  function __init_std_List_base_int_std_allocator_int(...$a) {
    $this->_M_impl = new std_List_base_int_std_allocator_int_List_impl();
    $this->_M_init();
  }
  function __dtor() {
  }
  function _M_get_node() {
    return ($t0 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_List_node_int::class))(1, ["a" => [0], "i" => 0]), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_List_node_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_clear() {
    $__cur = ($this->_M_impl->_M_node->_M_next ? ["a" => $this->_M_impl->_M_node->_M_next["a"], "i" => $this->_M_impl->_M_node->_M_next["i"]] : null);
    while ((!($__cur === (["a" => $this->_M_impl, "i" => "_M_node"]) || ($__cur && (["a" => $this->_M_impl, "i" => "_M_node"]) && $__cur["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && $__cur["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"])))) {
       {
        $__tmp = ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
        $__cur = ((($__cur["a"][$__cur["i"]])->_M_next) ? ["a" => (($__cur["a"][$__cur["i"]])->_M_next)["a"], "i" => (($__cur["a"][$__cur["i"]])->_M_next)["i"]] : null);
        (($t1 = $this->_M_get_Node_allocator(), $t1["a"][$t1["i"]]))->destroy(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
        $this->_M_put_node(($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null));
      }
    }
  }
  function _M_init() {
    $this->_M_impl->_M_node->_M_next = ((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null);
    $this->_M_impl->_M_node->_M_prev = ((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null);
  }
}
class std_list_int_std_allocator_int extends std_List_base_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_list_int_std_allocator_int(...$a);
  }
  function __init_std_list_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_List_base_int_std_allocator_int();
  }
  function begin() {
    return new std_List_iterator_int(($this->_M_impl->_M_node->_M_next ? ["a" => $this->_M_impl->_M_node->_M_next["a"], "i" => $this->_M_impl->_M_node->_M_next["i"]] : null));
  }
  function end() {
    return new std_List_iterator_int(((["a" => $this->_M_impl, "i" => "_M_node"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_node"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_node"])["i"]] : null));
  }
  function empty__c() {
    return ($this->_M_impl->_M_node->_M_next === (["a" => $this->_M_impl, "i" => "_M_node"]) || ($this->_M_impl->_M_node->_M_next && (["a" => $this->_M_impl, "i" => "_M_node"]) && $this->_M_impl->_M_node->_M_next["a"] === (["a" => $this->_M_impl, "i" => "_M_node"])["a"] && $this->_M_impl->_M_node->_M_next["i"] === (["a" => $this->_M_impl, "i" => "_M_node"])["i"]));
  }
  function size__c() {
    return std_distance_std_List_iterator_int(new std_List_iterator_int($this->begin()), new std_List_iterator_int($this->end()));
  }
  function front() {
    return new std_List_iterator_int($this->begin());
  }
  function back() {
    $__tmp = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->end())], "i" => 0]);
    $__tmp->op_dec();
    return $__tmp;
  }
  function push_front($__x) {
    $this->_M_insert__rv(new std_List_iterator_int($this->begin()), $__x);
  }
  function pop_front() {
    $this->_M_erase(new std_List_iterator_int($this->begin()));
  }
  function push_back($__x) {
    $this->_M_insert__rv(new std_List_iterator_int($this->end()), $__x);
  }
  function clear() {
    $this->_M_clear();
    $this->_M_init();
  }
  function splice__rv($__position, $__x) {
    if ((!(($__x["a"][$__x["i"]])->empty__c()))) {
       {
        $this->_M_check_equal_allocators($__x);
        $this->_M_transfer($__position, new std_List_iterator_int(($__x["a"][$__x["i"]])->begin()), new std_List_iterator_int(($__x["a"][$__x["i"]])->end()));
      }
    }
  }
  function splice($__position, $__x) {
    $this->splice__rv($__position, std_move_std_list_int_std_allocator_int($__x));
  }
  function remove($__value) {
    $__first = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->begin())], "i" => 0]);
    $__last = new std_List_iterator_int(["a" => [new std_List_iterator_int($this->end())], "i" => 0]);
    $__extra = new std_List_iterator_int(["a" => [$__last], "i" => 0]);
    while ($__first->op_ne__c(["a" => [$__last], "i" => 0])) {
       {
        $__next = new std_List_iterator_int(["a" => [$__first], "i" => 0]);
        $__next->op_inc();
        if ((($__first->op_mul__c())["a"][($__first->op_mul__c())["i"]] === $__value["a"][$__value["i"]])) {
           {
            if ((!((($t2 = std_addressof_int($__first), $t2)) === (($t3 = std_addressof_int($__value), $t3)) || ((($t2 = std_addressof_int($__first), $t2)) && (($t3 = std_addressof_int($__value), $t3)) && (($t2 = std_addressof_int($__first), $t2))["a"] === (($t3 = std_addressof_int($__value), $t3))["a"] && (($t2 = std_addressof_int($__first), $t2))["i"] === (($t3 = std_addressof_int($__value), $t3))["i"])))) {
              $this->_M_erase($__first);
            }
            else {
              $__extra->op_assign(["a" => [$__first], "i" => 0]);
            }
          }
        }
        $__first->op_assign(["a" => [$__next], "i" => 0]);
      }
    }
    if ($__extra->op_ne__c(["a" => [$__last], "i" => 0])) {
      $this->_M_erase($__extra);
    }
  }
  function reverse() {
    $this->_M_impl->_M_node->_M_reverse();
  }
  function _M_transfer($__position, $__first, $__last) {
    ($__position->_M_node["a"][$__position->_M_node["i"]])->_M_transfer(($__first->_M_node ? ["a" => $__first->_M_node["a"], "i" => $__first->_M_node["i"]] : null), ($__last->_M_node ? ["a" => $__last->_M_node["a"], "i" => $__last->_M_node["i"]] : null));
  }
  function _M_erase($__position) {
    ($__position->_M_node["a"][$__position->_M_node["i"]])->_M_unhook();
    $__n = ($__position->_M_node ? ["a" => $__position->_M_node["a"], "i" => $__position->_M_node["i"]] : null);
    (($t4 = $this->_M_get_Node_allocator(), $t4["a"][$t4["i"]]))->destroy(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
    $this->_M_put_node(($__n ? ["a" => $__n["a"], "i" => $__n["i"]] : null));
  }
  function _M_check_equal_allocators($__x) {
    if (std_alloc_neq_std_allocator_std_List_node_int_value1::_S_do_it($this->_M_get_Node_allocator(), ($__x["a"][$__x["i"]])->_M_get_Node_allocator())) {
      std_throw_runtime_error(["a" => [108, 105, 115, 116, 58, 58, 95, 77, 95, 99, 104, 101, 99, 107, 95, 101, 113, 117, 97, 108, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0], "i" => 0]);
    }
  }
  function _M_insert__rv($__position, $__args_0) {
    $__tmp = ($t5 = $this->_M_create_node__rv(std_forward_1_int($__args_0)), $t5 ? ["a" => $t5["a"], "i" => $t5["i"]] : null);
    ($__tmp["a"][$__tmp["i"]])->_M_hook(($__position->_M_node ? ["a" => $__position->_M_node["a"], "i" => $__position->_M_node["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__p = ($t6 = $this->_M_get_node(), $t6 ? ["a" => $t6["a"], "i" => $t6["i"]] : null);
    if (true) {
       {
        (($t7 = $this->_M_get_Node_allocator(), $t7["a"][$t7["i"]]))->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_int($__args_0));
      }
    }
    if (false) {
       {
        $this->_M_put_node(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
      }
    }
    return ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_List_node_int extends std_detail_List_node_base {
  public $_M_data;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_List_node_int(...$a);
  }
  function __init_std_List_node_int(...$a) {
    $this->_M_data = (($t9 = ($t8 = std_forward_1_int($a[0] ?? null), $t8["a"][$t8["i"]]), $t9))["a"][(($t9 = ($t8 = std_forward_1_int($a[0] ?? null), $t8["a"][$t8["i"]]), $t9))["i"]];
  }
  function __dtor() {
    $this->__dtor_std_detail_List_node_base();
  }
}
class std_allocator_int_rebind_std_List_node_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_List_node_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t10 = operatornew__unsigned_long_long(($__n * 20)), $t10 ? ["a" => $t10["a"], "i" => $t10["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 20);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
  function construct__rv($__p, $__args_0) {
    (($__p["a"][$__p["i"]] = new std_List_node_int(std_forward_1_int($__args_0))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
}
class std_allocator_std_List_node_int extends gnu_cxx_new_allocator_std_List_node_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_List_node_int(...$a);
  }
  function __init_std_allocator_std_List_node_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_List_node_int();
  }
}
class std_List_base_int_std_allocator_int_List_impl extends std_allocator_std_List_node_int {
  public $_M_node;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_List_base_int_std_allocator_int_List_impl(...$a);
  }
  function __init_std_List_base_int_std_allocator_int_List_impl(...$a) {
    $this->_M_node = new std_detail_List_node_base();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_List_node_int();
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
class std_List_iterator_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_List_iterator_int(...$a);
  }
  function __init_std_List_iterator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_mul__c() {
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_data"];
  }
  function op_inc() {
    $this->_M_node = ((($this->_M_node["a"][$this->_M_node["i"]])->_M_next) ? ["a" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_next)["a"], "i" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_next)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ((($this->_M_node["a"][$this->_M_node["i"]])->_M_prev) ? ["a" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_prev)["a"], "i" => (($this->_M_node["a"][$this->_M_node["i"]])->_M_prev)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
  function op_assign($o) {
    $this->_M_node = ((($o["a"][$o["i"]])->_M_node) ? ["a" => (($o["a"][$o["i"]])->_M_node)["a"], "i" => (($o["a"][$o["i"]])->_M_node)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
}
class std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class std_remove_cv_std_List_iterator_int {
  function __dtor() {
  }
}
class std_remove_volatile_std_List_iterator_int {
  function __dtor() {
  }
}
class std_remove_const_std_List_iterator_int {
  function __dtor() {
  }
}
class std_has_iterator_category_helper_std_List_iterator_int extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_helper_std_List_iterator_int(...$a);
  }
  function __init_std_has_iterator_category_helper_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_has_iterator_category_helper_std_List_iterator_int_Wrap_type_std_bidirectional_iterator_tag {
  function __dtor() {
  }
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
class std_has_iterator_category_std_List_iterator_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_has_iterator_category_std_List_iterator_int(...$a);
  }
  function __init_std_has_iterator_category_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_iterator_traits_std_List_iterator_int_value1 {
  function __dtor() {
  }
}
class std_iterator_traits_std_List_iterator_int extends std_iterator_traits_std_List_iterator_int_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_iterator_traits_std_List_iterator_int(...$a);
  }
  function __init_std_iterator_traits_std_List_iterator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_iterator_traits_std_List_iterator_int_value1();
  }
}
class std_remove_reference_std_list_int_std_allocator_int {
  function __dtor() {
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_alloc_neq_std_allocator_std_List_node_int_value1 {
  function __dtor() {
  }
  static function _S_do_it($p0, $p1) {
    return false;
  }
}
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_runtime_error(...$a) { throw new Exception("unresolved external: std::__throw_runtime_error"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function main() {
  $a = ["v" => new std_list_int_std_allocator_int()];
  ($a["v"])->push_back(["a" => [3], "i" => 0]);
  ($a["v"])->push_back(["a" => [1], "i" => 0]);
  ($a["v"])->push_front(["a" => [9], "i" => 0]);
  $s = 0;
  for ($b0 = $a["v"]->begin(), $e0 = $a["v"]->end(); $b0->op_ne__c(["a" => [$e0], "i" => 0]); $b0->op_inc()) {
    $x = ($b0->op_mul__c())["a"][($b0->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  null;
  for ($b1 = $a["v"]->begin(), $e1 = $a["v"]->end(); $b1->op_ne__c(["a" => [$e1], "i" => 0]); $b1->op_inc()) {
    $y = $b1->op_mul__c();
    $y["a"][$y["i"]] += 1;
  }
  for ($b2 = $a["v"]->begin(), $e2 = $a["v"]->end(); $b2->op_ne__c(["a" => [$e2], "i" => 0]); $b2->op_inc()) {
    $y = $b2->op_mul__c();
    $s = (($s * 10) + $y["a"][$y["i"]]);
  }
  null;
  ($a["v"])->reverse();
  $s = 0;
  for ($b3 = $a["v"]->begin(), $e3 = $a["v"]->end(); $b3->op_ne__c(["a" => [$e3], "i" => 0]); $b3->op_inc()) {
    $x = ($b3->op_mul__c())["a"][($b3->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  null;
  ($a["v"])->remove(["a" => [10], "i" => 0]);
  ($a["v"])->pop_front();
  null;
  $b = new std_list_int_std_allocator_int();
  $b->push_back(["a" => [7], "i" => 0]);
  $b->splice(new std_List_iterator_int($b->end()), ["a" => $a, "i" => "v"]);
  $s = 0;
  for ($b4 = $b->begin(), $e4 = $b->end(); $b4->op_ne__c(["a" => [$e4], "i" => 0]); $b4->op_inc()) {
    $x = ($b4->op_mul__c())["a"][($b4->op_mul__c())["i"]];
    $s = (($s * 10) + $x);
  }
  null;
  $b->clear();
  null;
  return 0;
}
function std_distance_std_List_iterator_int($__first, $__last) {
  $__first = ["v" => $__first];
  return std_distance_std_List_iterator_int_72($__first["v"], $__last, new std_bidirectional_iterator_tag(std_iterator_category_std_List_iterator_int(["a" => $__first, "i" => "v"])));
}
function std_addressof_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_move_std_list_int_std_allocator_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_iterator_category_std_List_iterator_int($p0) {
  return new std_bidirectional_iterator_tag([]);
}
function std_distance_std_List_iterator_int_72($__first, $__last, $p2) {
  $__n = 0;
  while ($__first->op_ne__c(["a" => [$__last], "i" => 0])) {
     {
      $__first->op_inc();
      ++$__n;
    }
  }
  return $__n;
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
std_has_iterator_category_helper_std_List_iterator_int::$value = (1 === 1);
std_integral_constant_bool_value1::$value = 1;
main();
