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
class std_do_is_nary_constructible_impl {
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
class IO_FILE {
  public $__flags;
  public $__dummy;
  function __construct(...$a) {
    $this->__init_IO_FILE(...$a);
  }
  function __init_IO_FILE(...$a) {
    $this->__flags = 0;
    $this->__dummy = 0;
  }
  function __dtor() {
  }
}
class class_156 {
  public $__count;
  public $__value;
  function __construct(...$a) {
    $this->__init_class_156(...$a);
  }
  function __init_class_156(...$a) {
    $this->__count = 0;
    $this->__value = 0;
  }
  function __dtor() {
  }
}
class std_allocator_arg_t {
  function __construct(...$a) {
    $this->__init_std_allocator_arg_t(...$a);
  }
  function __init_std_allocator_arg_t(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_uses_alloc_base {
  function __dtor() {
  }
}
class std_uses_alloc0 extends std_uses_alloc_base {
  public $_M_a;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_uses_alloc0(...$a);
  }
  function __init_std_uses_alloc0(...$a) {
    $this->_M_a = new std_uses_alloc0_Anything();
  }
  function __dtor() {
    $this->__dtor_std_uses_alloc_base();
  }
}
class std_uses_alloc0_Anything {
  function __construct(...$a) {
    $this->__init_std_uses_alloc0_Anything(...$a);
  }
  function __init_std_uses_alloc0_Anything(...$a) {
  }
  function __dtor() {
  }
}
class lconv {
  public $decimal_point;
  public $thousands_sep;
  public $grouping;
  public $int_curr_symbol;
  public $currency_symbol;
  public $mon_decimal_point;
  public $mon_thousands_sep;
  public $mon_grouping;
  public $positive_sign;
  public $negative_sign;
  public $int_frac_digits;
  public $frac_digits;
  public $p_cs_precedes;
  public $p_sep_by_space;
  public $n_cs_precedes;
  public $n_sep_by_space;
  public $p_sign_posn;
  public $n_sign_posn;
  public $int_p_cs_precedes;
  public $int_n_cs_precedes;
  public $int_p_sep_by_space;
  public $int_n_sep_by_space;
  public $int_p_sign_posn;
  public $int_n_sign_posn;
  function __construct(...$a) {
    $this->__init_lconv(...$a);
  }
  function __init_lconv(...$a) {
    $this->decimal_point = null;
    $this->thousands_sep = null;
    $this->grouping = null;
    $this->int_curr_symbol = null;
    $this->currency_symbol = null;
    $this->mon_decimal_point = null;
    $this->mon_thousands_sep = null;
    $this->mon_grouping = null;
    $this->positive_sign = null;
    $this->negative_sign = null;
    $this->int_frac_digits = 0;
    $this->frac_digits = 0;
    $this->p_cs_precedes = 0;
    $this->p_sep_by_space = 0;
    $this->n_cs_precedes = 0;
    $this->n_sep_by_space = 0;
    $this->p_sign_posn = 0;
    $this->n_sign_posn = 0;
    $this->int_p_cs_precedes = 0;
    $this->int_n_cs_precedes = 0;
    $this->int_p_sep_by_space = 0;
    $this->int_n_sep_by_space = 0;
    $this->int_p_sign_posn = 0;
    $this->int_n_sign_posn = 0;
  }
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_long_long {
  function __dtor() {
  }
}
class std_hash_long_long extends std_hash_base_unsigned_long_long_long_long {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_long_long(...$a);
  }
  function __init_std_hash_long_long(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_long_long();
  }
}
class std_char_traits_char {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_char {
  function __dtor() {
  }
}
class std_allocator_char extends gnu_cxx_new_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char(...$a);
  }
  function __init_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char();
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
    $this->_M_dataplus = new std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider extends std_allocator_char {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char_std_char_traits_char_std_allocator_char_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_char();
  }
}
class std_allocator_char_rebind_char {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __dtor() {
  }
}
class std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char extends std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a);
  }
  function __init_std_hash_std_basic_string_char_std_char_traits_char_std_allocator_char(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char_std_char_traits_char_std_allocator_char();
  }
}
class std_char_traits_wchar_t {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_wchar_t {
  function __dtor() {
  }
}
class std_allocator_wchar_t extends gnu_cxx_new_allocator_wchar_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_wchar_t(...$a);
  }
  function __init_std_allocator_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_wchar_t();
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
    $this->_M_dataplus = new std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider extends std_allocator_wchar_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_wchar_t();
  }
}
class std_allocator_wchar_t_rebind_wchar_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t extends std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a);
  }
  function __init_std_hash_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t();
  }
}
class std_char_traits_char16_t {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_char16_t {
  function __dtor() {
  }
}
class std_allocator_char16_t extends gnu_cxx_new_allocator_char16_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char16_t(...$a);
  }
  function __init_std_allocator_char16_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char16_t();
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
    $this->_M_dataplus = new std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider extends std_allocator_char16_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_char16_t();
  }
}
class std_allocator_char16_t_rebind_char16_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t extends std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a);
  }
  function __init_std_hash_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t();
  }
}
class std_char_traits_char32_t {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_char32_t {
  function __dtor() {
  }
}
class std_allocator_char32_t extends gnu_cxx_new_allocator_char32_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_char32_t(...$a);
  }
  function __init_std_allocator_char32_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_char32_t();
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  public $_M_dataplus;
  function __construct(...$a) {
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
    $this->_M_dataplus = new std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider();
  }
  function __dtor() {
  }
  public static $npos;
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base {
  public $_M_length;
  public $_M_capacity;
  public $_M_refcount;
  function __construct(...$a) {
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Rep_base(...$a) {
    $this->_M_length = 0;
    $this->_M_capacity = 0;
    $this->_M_refcount = 0;
  }
  function __dtor() {
  }
}
class std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider extends std_allocator_char32_t {
  public $_M_p;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a);
  }
  function __init_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t_Alloc_hider(...$a) {
    $this->_M_p = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_char32_t();
  }
}
class std_allocator_char32_t_rebind_char32_t {
  function __dtor() {
  }
}
class std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  function __dtor() {
  }
}
class std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t extends std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a);
  }
  function __init_std_hash_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_hash_base_unsigned_long_long_std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t();
  }
}
class std_Swallow_assign {
  function __construct(...$a) {
    $this->__init_std_Swallow_assign(...$a);
  }
  function __init_std_Swallow_assign(...$a) {
  }
  function __dtor() {
  }
}
class std_Bit_reference {
  public $_M_p;
  public $_M_mask;
  function __construct(...$a) {
    $this->__init_std_Bit_reference(...$a);
  }
  function __init_std_Bit_reference(...$a) {
    $this->_M_p = null;
    $this->_M_mask = 0;
  }
  function __dtor() {
  }
}
class std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  function __dtor() {
  }
}
class std_Bit_iterator_base extends std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R {
  public $_M_p;
  public $_M_offset;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_iterator_base(...$a);
  }
  function __init_std_Bit_iterator_base(...$a) {
    $this->_M_p = null;
    $this->_M_offset = 0;
  }
  function __dtor() {
    $this->__dtor_std_iterator_std_random_access_iterator_tag_bool_long_bool_P_bool_R();
  }
}
class std_Bit_iterator extends std_Bit_iterator_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_iterator(...$a);
  }
  function __init_std_Bit_iterator(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Bit_iterator_base();
  }
}
class std_Bit_const_iterator extends std_Bit_iterator_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Bit_const_iterator(...$a);
  }
  function __init_std_Bit_const_iterator(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Bit_iterator_base();
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
class std_Placeholder_value1 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value1(...$a);
  }
  function __init_std_Placeholder_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value2 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value2(...$a);
  }
  function __init_std_Placeholder_value2(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value3 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value3(...$a);
  }
  function __init_std_Placeholder_value3(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value4 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value4(...$a);
  }
  function __init_std_Placeholder_value4(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value5 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value5(...$a);
  }
  function __init_std_Placeholder_value5(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value6 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value6(...$a);
  }
  function __init_std_Placeholder_value6(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value7 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value7(...$a);
  }
  function __init_std_Placeholder_value7(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value8 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value8(...$a);
  }
  function __init_std_Placeholder_value8(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value9 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value9(...$a);
  }
  function __init_std_Placeholder_value9(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value10 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value10(...$a);
  }
  function __init_std_Placeholder_value10(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value11 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value11(...$a);
  }
  function __init_std_Placeholder_value11(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value12 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value12(...$a);
  }
  function __init_std_Placeholder_value12(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value13 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value13(...$a);
  }
  function __init_std_Placeholder_value13(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value14 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value14(...$a);
  }
  function __init_std_Placeholder_value14(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value15 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value15(...$a);
  }
  function __init_std_Placeholder_value15(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value16 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value16(...$a);
  }
  function __init_std_Placeholder_value16(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value17 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value17(...$a);
  }
  function __init_std_Placeholder_value17(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value18 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value18(...$a);
  }
  function __init_std_Placeholder_value18(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value19 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value19(...$a);
  }
  function __init_std_Placeholder_value19(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value20 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value20(...$a);
  }
  function __init_std_Placeholder_value20(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value21 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value21(...$a);
  }
  function __init_std_Placeholder_value21(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value22 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value22(...$a);
  }
  function __init_std_Placeholder_value22(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value23 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value23(...$a);
  }
  function __init_std_Placeholder_value23(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value24 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value24(...$a);
  }
  function __init_std_Placeholder_value24(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value25 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value25(...$a);
  }
  function __init_std_Placeholder_value25(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value26 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value26(...$a);
  }
  function __init_std_Placeholder_value26(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value27 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value27(...$a);
  }
  function __init_std_Placeholder_value27(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value28 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value28(...$a);
  }
  function __init_std_Placeholder_value28(...$a) {
  }
  function __dtor() {
  }
}
class std_Placeholder_value29 {
  function __construct(...$a) {
    $this->__init_std_Placeholder_value29(...$a);
  }
  function __init_std_Placeholder_value29(...$a) {
  }
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t0 = operatornew__unsigned_long_long(($__n * 4)), $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 4);
  }
  function construct__rv($__p, $__args_0) {
    ($__p["a"][$__p["i"]] = ($t1 = std_forward_1_int($__args_0), $t1["a"][$t1["i"]]));
  }
  function destroy($__p) {
    null;
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
class std_Vector_base_int_std_allocator_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Vector_base_int_std_allocator_int(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int(...$a) {
    $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl();
  }
  function __dtor() {
  }
  function _M_get_Tp_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_allocate($__n) {
    return ($t2 = (($__n !== 0) ? $this->_M_impl->allocate($__n, ["a" => [0], "i" => 0]) : 0), $t2 ? ["a" => $t2["a"], "i" => $t2["i"]] : null);
  }
  function _M_deallocate($__p, $__n) {
    if ($__p) {
      $this->_M_impl->deallocate(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__n);
    }
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_vector_int_std_allocator_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_int_std_allocator_int();
  }
  function begin() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_start], "i" => 0]);
  }
  function end() {
    return new gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(["a" => [$this->_M_impl->_M_finish], "i" => 0]);
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int::max_size($this->_M_get_Tp_allocator());
  }
  function push_back($__x) {
    if ((!($this->_M_impl->_M_finish === $this->_M_impl->_M_end_of_storage || ($this->_M_impl->_M_finish && $this->_M_impl->_M_end_of_storage && $this->_M_impl->_M_finish["a"] === $this->_M_impl->_M_end_of_storage["a"] && $this->_M_impl->_M_finish["i"] === $this->_M_impl->_M_end_of_storage["i"])))) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $__x);
        ++$this->_M_impl->_M_finish["i"];
      }
    }
    else {
      $this->_M_emplace_back_aux__rv($__x);
    }
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t3 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t3["a"][$t3["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($t4 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t4 ? ["a" => $t4["a"], "i" => $t4["i"]] : null), std_forward_1_int($__args_0));
        $__new_finish = null;
        $__new_finish = ($t5 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t5 ? ["a" => $t5["a"], "i" => $t5["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int::destroy(["a" => $this, "i" => "_M_impl"], ($t6 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t6 ? ["a" => $t6["a"], "i" => $t6["i"]] : null));
        }
        else {
          std_Destroy_2_int_P_std_allocator_int(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null), $this->_M_get_Tp_allocator());
        }
        $this->_M_deallocate(($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $__len);
      }
    }
    std_Destroy_2_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->_M_deallocate(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), (($this->_M_impl->_M_end_of_storage ? $this->_M_impl->_M_end_of_storage["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0)));
    $this->_M_impl->_M_start = ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null);
    $this->_M_impl->_M_finish = ($__new_finish ? ["a" => $__new_finish["a"], "i" => $__new_finish["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t7 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t7 ? ["a" => $t7["a"], "i" => $t7["i"]] : null);
  }
}
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    $this->_M_start = null;
    $this->_M_finish = null;
    $this->_M_end_of_storage = null;
  }
  function __dtor() {
    $this->__dtor_std_allocator_int();
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  function __dtor() {
  }
  static function construct($__a, $__p, $__arg) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), $__arg);
  }
  static function max_size($__a) {
    return ($__a["a"][$__a["i"]])->max_size__c();
  }
  static function destroy($__a, $__p) {
    ($__a["a"][$__a["i"]])->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
}
class gnu_cxx_alloc_traits_std_allocator_int_rebind_int {
  function __dtor() {
  }
}
class std_allocator_int_rebind_int {
  function __dtor() {
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
class gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a);
  }
  function __init_gnu_cxx_normal_iterator_int_P_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]]) ? ["a" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["a"], "i" => (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t8 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t9 = ($t8 ? $t8["a"][$t8["i"]] : null), $t9 && is_array($t9) && array_key_exists("a", $t9) ? ["a" => $t9["a"], "i" => $t9["i"]] : $t9);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_mul__c() {
    return $this->_M_current;
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
  function base__c() {
    return ["a" => [$this->_M_current], "i" => 0];
  }
}
class std_iterator_traits_int_P {
  function __dtor() {
  }
}
class std_are_same_int_P_int_P {
  function __dtor() {
  }
}
class gnu_cxx_enable_if_value1_std_vector_int_std_allocator_int {
  function __dtor() {
  }
}
class std_binary_function_int_int_bool {
  function __construct(...$a) {
    $this->__init_std_binary_function_int_int_bool(...$a);
  }
  function __init_std_binary_function_int_int_bool(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class std_less_int extends std_binary_function_int_int_bool {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($o);
    }
    $this->__init_std_less_int(...$a);
  }
  function __init_std_less_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_binary_function_int_int_bool();
  }
  function op_call__c($__x, $__y) {
    return ($__x["a"][$__x["i"]] < $__y["a"][$__y["i"]]);
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
  function begin__c() {
    return new std_Rb_tree_const_iterator_int(["a" => [new std_Rb_tree_iterator_int($this->_M_t->begin())], "i" => 0]);
  }
  function end__c() {
    return new std_Rb_tree_const_iterator_int(["a" => [new std_Rb_tree_iterator_int($this->_M_t->end())], "i" => 0]);
  }
  function insert($__x) {
    $__p = new std_pair_std_Rb_tree_iterator_int_bool(["a" => [new std_pair_std_Rb_tree_iterator_int_bool($this->_M_t->_M_insert_unique__rv($__x))], "i" => 0]);
    return new std_pair_std_Rb_tree_const_iterator_int_bool(["a" => [[$__p->first, $__p->second]], "i" => 0]);
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
    return ($t10 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_int::class))(1, ["a" => [0], "i" => 0]), $t10 ? ["a" => $t10["a"], "i" => $t10["i"]] : null);
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
      return (($t11 = new std_Identity_int([]), $t11))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t12 = new std_Identity_int([]), $t12))->op_call__c(std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
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
    $__x = ($t13 = $this->_M_begin(), $t13 ? ["a" => $t13["a"], "i" => $t13["i"]] : null);
    $__y = ($t14 = $this->_M_end(), $t14 ? ["a" => $t14["a"], "i" => $t14["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t15 = ($__comp ? std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t15 ? ["a" => $t15["a"], "i" => $t15["i"]] : null);
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
  function end() {
    return new std_Rb_tree_iterator_int(((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null));
  }
  function _M_insert_unique__rv($__v) {
    $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos((($t16 = new std_Identity_int([]), $t16))->op_call__c($__v)))], "i" => 0]);
    if ($__res->second) {
      return new std_pair_std_Rb_tree_iterator_int_bool(["a" => [[new std_Rb_tree_iterator_int($this->_M_insert___rv(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), std_forward_1_int($__v))), true]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_iterator_int_bool(["a" => [[new std_Rb_tree_iterator_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null)), false]], "i" => 0]);
  }
  function _M_insert___rv($__x, $__p, $__v) {
    $__insert_left = ((($__x !== null) || ($__p === (($t17 = $this->_M_end(), $t17)) || ($__p && (($t17 = $this->_M_end(), $t17)) && $__p["a"] === (($t17 = $this->_M_end(), $t17))["a"] && $__p["i"] === (($t17 = $this->_M_end(), $t17))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c((($t18 = new std_Identity_int([]), $t18))->op_call__c($__v), std_Rb_tree_int_int_std_Identity_int_std_less_int_std_allocator_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    $__z = ($t19 = $this->_M_create_node__rv(std_forward_1_int($__v)), $t19 ? ["a" => $t19["a"], "i" => $t19["i"]] : null);
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_create_node__rv($__args_0) {
    $__tmp = ($t20 = $this->_M_get_node(), $t20 ? ["a" => $t20["a"], "i" => $t20["i"]] : null);
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
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function op_mul__c() {
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_value_field"];
  }
  function op_inc() {
    $this->_M_node = ($t21 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t21 ? ["a" => $t21["a"], "i" => $t21["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
}
class std_Rb_tree_node_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_node_int(...$a);
  }
  function __init_std_Rb_tree_node_int(...$a) {
    $this->_M_value_field = (($t23 = ($t22 = std_forward_1_int($a[0] ?? null), $t22["a"][$t22["i"]]), $t23))["a"][(($t23 = ($t22 = std_forward_1_int($a[0] ?? null), $t22["a"][$t22["i"]]), $t23))["i"]];
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
    $this->_M_node = ($t24 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t24 ? ["a" => $t24["a"], "i" => $t24["i"]] : null);
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
class std_pair_int_int {
  public $first;
  public $second;
  function __construct(...$a) {
    $this->__init_std_pair_int_int(...$a);
  }
  function __init_std_pair_int_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->first = 0;
      $this->second = 0;
    }
    else if (count($a) >= 3 && count($a) <= 3 && $a[0] instanceof std_piecewise_construct_t && $a[1] instanceof std_tuple_int_R && $a[2] instanceof std_tuple) {
      $this->__init_std_pair_int_int(["a" => [$a[1] ?? null], "i" => 0], ["a" => [$a[2] ?? null], "i" => 0], new std_Index_tuple_value0([]), new std_Index_tuple([]));
    }
    else if (count($a) >= 4 && count($a) <= 4 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && $a[2] instanceof std_Index_tuple_value0 && $a[3] instanceof std_Index_tuple) {
      $this->first = (($t26 = ($t25 = std_forward_int_R(std_get_4_value0_int_R($a[0] ?? null)), $t25["a"][$t25["i"]]), $t26))["a"][(($t26 = ($t25 = std_forward_int_R(std_get_4_value0_int_R($a[0] ?? null)), $t25["a"][$t25["i"]]), $t26))["i"]];
      $this->second = 0;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_pair_int_int {
  function __dtor() {
  }
}
class std_allocator_std_pair_int_int extends gnu_cxx_new_allocator_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_allocator_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_pair_int_int();
  }
}
class std_map_int_int_std_less_int_std_allocator_std_pair_int_int {
  public $_M_t;
  function __construct(...$a) {
    $this->__init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_map_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    $this->_M_t = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int();
  }
  function __dtor() {
  }
  function begin() {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->begin());
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->end());
  }
  function op_index($__k) {
    global $std_piecewise_construct;
    $__i = ["v" => new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->lower_bound($__k))], "i" => 0])];
    if ((($__i["v"])->op_eq__c(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->end())], "i" => 0]) || (($t27 = new std_less_int($this->key_comp__c()), $t27))->op_call__c($__k, ["a" => (($__i["v"])->op_mul__c())["a"][(($__i["v"])->op_mul__c())["i"]], "i" => "first"]))) {
      ($__i["v"])->op_assign(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->_M_emplace_hint_unique__rv(new std_Rb_tree_const_iterator_std_pair_int_int(["a" => $__i, "i" => "v"]), ["a" => $std_piecewise_construct, "i" => "v"], ["a" => [new std_tuple_int_R($__k)], "i" => 0], ["a" => [new std_tuple([])], "i" => 0]))], "i" => 0]);
    }
    return ["a" => (($__i["v"])->op_mul__c())["a"][(($__i["v"])->op_mul__c())["i"]], "i" => "second"];
  }
  function key_comp__c() {
    return new std_less_int($this->_M_t->key_comp__c());
  }
  function lower_bound($__x) {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_t->lower_bound($__x));
  }
}
class std_binary_function_std_pair_int_int_std_pair_int_int_bool {
  function __dtor() {
  }
}
class std_initializer_list_std_pair_int_int {
  public $_M_array;
  public $_M_len;
  function __construct(...$a) {
    $this->__init_std_initializer_list_std_pair_int_int(...$a);
  }
  function __init_std_initializer_list_std_pair_int_int(...$a) {
    $this->_M_array = null;
    $this->_M_len = 0;
  }
  function __dtor() {
  }
}
class std_unary_function_std_pair_int_int_int {
  function __construct(...$a) {
    $this->__init_std_unary_function_std_pair_int_int_int(...$a);
  }
  function __init_std_unary_function_std_pair_int_int_int(...$a) {
  }
  function __dtor() {
  }
}
class std_Select1st_std_pair_int_int extends std_unary_function_std_pair_int_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Select1st_std_pair_int_int(...$a);
  }
  function __init_std_Select1st_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_unary_function_std_pair_int_int_int();
  }
  function op_call__c($__x) {
    return ["a" => $__x["a"][$__x["i"]], "i" => "first"];
  }
}
class std_allocator_std_pair_int_int_rebind_std_pair_int_int {
  function __dtor() {
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int {
  public $_M_impl;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int(...$a) {
    $this->_M_impl = new std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1();
  }
  function __dtor() {
  }
  function _M_get_Node_allocator() {
    return ["a" => $this, "i" => "_M_impl"];
  }
  function _M_get_node() {
    return ($t28 = (Closure::bind(function (...$a) { return $this->allocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int::class))(1, ["a" => [0], "i" => 0]), $t28 ? ["a" => $t28["a"], "i" => $t28["i"]] : null);
  }
  function _M_put_node($__p) {
    (Closure::bind(function (...$a) { return $this->deallocate(...$a); }, $this->_M_impl, gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int::class))(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), 1);
  }
  function _M_destroy_node($__p) {
    (($t29 = $this->_M_get_Node_allocator(), $t29["a"][$t29["i"]]))->destroy(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
    $this->_M_put_node(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function _M_leftmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_left], "i" => 0];
  }
  function _M_rightmost() {
    return ["a" => [$this->_M_impl->_M_header->_M_right], "i" => 0];
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
      return (($t30 = new std_Select1st_std_pair_int_int([]), $t30))->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      return (($t31 = new std_Select1st_std_pair_int_int([]), $t31))->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_value((($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null)));
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
    $__x = ($t32 = $this->_M_begin(), $t32 ? ["a" => $t32["a"], "i" => $t32["i"]] : null);
    $__y = ($t33 = $this->_M_end(), $t33 ? ["a" => $t33["a"], "i" => $t33["i"]] : null);
    $__comp = true;
    while (($__x !== null)) {
       {
        $__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null);
        $__comp = $this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)));
        $__x = ($t34 = ($__comp ? std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)) : std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null))), $t34 ? ["a" => $t34["a"], "i" => $t34["i"]] : null);
      }
    }
    $__j = new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null))], "i" => 0]);
    if ($__comp) {
       {
        if ($__j->op_eq__c(["a" => [new std_Rb_tree_iterator_std_pair_int_int($this->begin())], "i" => 0])) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
        }
        else {
          $__j->op_dec();
        }
      }
    }
    if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__j->_M_node ? ["a" => $__j->_M_node["a"], "i" => $__j->_M_node["i"]] : null)), $__k)) {
      return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__x, $__y]], "i" => 0]);
    }
    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__j->_M_node, 0]], "i" => 0]);
  }
  function _M_get_insert_hint_unique_pos($__position, $__k) {
    $__pos = new std_Rb_tree_iterator_std_pair_int_int(["a" => [new std_Rb_tree_iterator_std_pair_int_int($__position->_M_const_cast__c())], "i" => 0]);
    if (($__pos->_M_node === (($t35 = $this->_M_end(), $t35)) || ($__pos->_M_node && (($t35 = $this->_M_end(), $t35)) && $__pos->_M_node["a"] === (($t35 = $this->_M_end(), $t35))["a"] && $__pos->_M_node["i"] === (($t35 = $this->_M_end(), $t35))["i"]))) {
       {
        if ((($this->size__c() > 0) && $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t36 = $this->_M_rightmost(), $t37 = ($t36 ? $t36["a"][$t36["i"]] : null), $t37 && is_array($t37) && array_key_exists("a", $t37) ? ["a" => $t37["a"], "i" => $t37["i"]] : $t37)), $__k))) {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
        }
      }
    }
    else {
      if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)))) {
         {
          $__before = new std_Rb_tree_iterator_std_pair_int_int(["a" => [$__pos], "i" => 0]);
          if (($__pos->_M_node === ((($t38 = $this->_M_leftmost(), $t38) ? (($t38 = $this->_M_leftmost(), $t38))["a"][(($t38 = $this->_M_leftmost(), $t38))["i"]] : null)) || ($__pos->_M_node && ((($t38 = $this->_M_leftmost(), $t38) ? (($t38 = $this->_M_leftmost(), $t38))["a"][(($t38 = $this->_M_leftmost(), $t38))["i"]] : null)) && $__pos->_M_node["a"] === ((($t38 = $this->_M_leftmost(), $t38) ? (($t38 = $this->_M_leftmost(), $t38))["a"][(($t38 = $this->_M_leftmost(), $t38))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t38 = $this->_M_leftmost(), $t38) ? (($t38 = $this->_M_leftmost(), $t38))["a"][(($t38 = $this->_M_leftmost(), $t38))["i"]] : null))["i"]))) {
            return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$this->_M_leftmost(), $this->_M_leftmost()]], "i" => 0]);
          }
          else {
            if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t40 = (($t39 = $__before->op_dec(), $t39["a"][$t39["i"]]))->_M_node, $t40 ? ["a" => $t40["a"], "i" => $t40["i"]] : null)), $__k)) {
               {
                if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__before->_M_node ? ["a" => $__before->_M_node["a"], "i" => $__before->_M_node["i"]] : null)) === null)) {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__before->_M_node]], "i" => 0]);
                }
                else {
                  return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, $__pos->_M_node]], "i" => 0]);
                }
              }
            }
            else {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
            }
          }
        }
      }
      else {
        if ($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)), $__k)) {
           {
            $__after = new std_Rb_tree_iterator_std_pair_int_int(["a" => [$__pos], "i" => 0]);
            if (($__pos->_M_node === ((($t41 = $this->_M_rightmost(), $t41) ? (($t41 = $this->_M_rightmost(), $t41))["a"][(($t41 = $this->_M_rightmost(), $t41))["i"]] : null)) || ($__pos->_M_node && ((($t41 = $this->_M_rightmost(), $t41) ? (($t41 = $this->_M_rightmost(), $t41))["a"][(($t41 = $this->_M_rightmost(), $t41))["i"]] : null)) && $__pos->_M_node["a"] === ((($t41 = $this->_M_rightmost(), $t41) ? (($t41 = $this->_M_rightmost(), $t41))["a"][(($t41 = $this->_M_rightmost(), $t41))["i"]] : null))["a"] && $__pos->_M_node["i"] === ((($t41 = $this->_M_rightmost(), $t41) ? (($t41 = $this->_M_rightmost(), $t41))["a"][(($t41 = $this->_M_rightmost(), $t41))["i"]] : null))["i"]))) {
              return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $this->_M_rightmost()]], "i" => 0]);
            }
            else {
              if ($this->_M_impl->_M_key_compare->op_call__c($__k, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($t43 = (($t42 = $__after->op_inc(), $t42["a"][$t42["i"]]))->_M_node, $t43 ? ["a" => $t43["a"], "i" => $t43["i"]] : null)))) {
                 {
                  if ((std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__pos->_M_node ? ["a" => $__pos->_M_node["a"], "i" => $__pos->_M_node["i"]] : null)) === null)) {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[0, $__pos->_M_node]], "i" => 0]);
                  }
                  else {
                    return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__after->_M_node, $__after->_M_node]], "i" => 0]);
                  }
                }
              }
              else {
                return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_unique_pos($__k));
              }
            }
          }
        }
        else {
          return new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [[$__pos->_M_node, 0]], "i" => 0]);
        }
      }
    }
  }
  function _M_insert_node($__x, $__p, $__z) {
    $__insert_left = ((($__x !== null) || ($__p === (($t44 = $this->_M_end(), $t44)) || ($__p && (($t44 = $this->_M_end(), $t44)) && $__p["a"] === (($t44 = $this->_M_end(), $t44))["a"] && $__p["i"] === (($t44 = $this->_M_end(), $t44))["i"]))) || $this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null)), std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null))));
    std_Rb_tree_insert_and_rebalance($__insert_left, ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null), ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), ["a" => $this->_M_impl, "i" => "_M_header"]);
    ++$this->_M_impl->_M_node_count;
    return new std_Rb_tree_iterator_std_pair_int_int(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
  }
  function _M_lower_bound($__x, $__y, $__k) {
    while (($__x !== null)) {
      if ((!($this->_M_impl->_M_key_compare->op_call__c(std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $__k)))) {
        ($__y = ($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null), $__x = ($t45 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_left(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $t45 ? ["a" => $t45["a"], "i" => $t45["i"]] : null));
      }
      else {
        $__x = ($t46 = std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_right(($__x ? ["a" => $__x["a"], "i" => $__x["i"]] : null)), $t46 ? ["a" => $t46["a"], "i" => $t46["i"]] : null);
      }
    }
    return new std_Rb_tree_iterator_std_pair_int_int(($__y ? ["a" => $__y["a"], "i" => $__y["i"]] : null));
  }
  function key_comp__c() {
    return $this->_M_impl->_M_key_compare;
  }
  function begin() {
    return new std_Rb_tree_iterator_std_pair_int_int(($this->_M_impl->_M_header->_M_left ? ["a" => $this->_M_impl->_M_header->_M_left["a"], "i" => $this->_M_impl->_M_header->_M_left["i"]] : null));
  }
  function end() {
    return new std_Rb_tree_iterator_std_pair_int_int(((["a" => $this->_M_impl, "i" => "_M_header"]) ? ["a" => (["a" => $this->_M_impl, "i" => "_M_header"])["a"], "i" => (["a" => $this->_M_impl, "i" => "_M_header"])["i"]] : null));
  }
  function size__c() {
    return $this->_M_impl->_M_node_count;
  }
  function lower_bound($__k) {
    return new std_Rb_tree_iterator_std_pair_int_int($this->_M_lower_bound(($t47 = $this->_M_begin(), $t47 ? ["a" => $t47["a"], "i" => $t47["i"]] : null), ($t48 = $this->_M_end(), $t48 ? ["a" => $t48["a"], "i" => $t48["i"]] : null), $__k));
  }
  function _M_emplace_hint_unique__rv($__pos, $__args_0, $__args_1, $__args_2) {
    $__z = ($t49 = $this->_M_create_node__rv(std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2)), $t49 ? ["a" => $t49["a"], "i" => $t49["i"]] : null);
    if (true) {
       {
        $__res = new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(["a" => [new std_pair_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P($this->_M_get_insert_hint_unique_pos($__pos, std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int::_S_key(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null))))], "i" => 0]);
        if ($__res->second) {
          return new std_Rb_tree_iterator_std_pair_int_int($this->_M_insert_node(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null), ($__res->second ? ["a" => $__res->second["a"], "i" => $__res->second["i"]] : null), ($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null)));
        }
        $this->_M_destroy_node(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
        return new std_Rb_tree_iterator_std_pair_int_int(($__res->first ? ["a" => $__res->first["a"], "i" => $__res->first["i"]] : null));
      }
    }
    if (false) {
       {
        $this->_M_destroy_node(($__z ? ["a" => $__z["a"], "i" => $__z["i"]] : null));
      }
    }
  }
  function _M_create_node__rv($__args_0, $__args_1, $__args_2) {
    $__tmp = ($t50 = $this->_M_get_node(), $t50 ? ["a" => $t50["a"], "i" => $t50["i"]] : null);
    if (true) {
       {
        std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::construct__rv($this->_M_get_Node_allocator(), ($__tmp ? ["a" => $__tmp["a"], "i" => $__tmp["i"]] : null), std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2));
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
class std_Rb_tree_iterator_std_pair_int_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_iterator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_iterator_std_pair_int_int(...$a) {
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
    return ["a" => $this->_M_node["a"][$this->_M_node["i"]], "i" => "_M_value_field"];
  }
  function op_inc() {
    $this->_M_node = ($t51 = std_Rb_tree_increment__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t51 ? ["a" => $t51["a"], "i" => $t51["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_dec() {
    $this->_M_node = ($t52 = std_Rb_tree_decrement__std_Rb_tree_node_baseP(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null)), $t52 ? ["a" => $t52["a"], "i" => $t52["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
  function op_eq__c($__x) {
    return ($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"]));
  }
  function op_ne__c($__x) {
    return (!($this->_M_node === (($__x["a"][$__x["i"]])->_M_node) || ($this->_M_node && (($__x["a"][$__x["i"]])->_M_node) && $this->_M_node["a"] === (($__x["a"][$__x["i"]])->_M_node)["a"] && $this->_M_node["i"] === (($__x["a"][$__x["i"]])->_M_node)["i"])));
  }
  function op_assign($o) {
    $this->_M_node = ((($o["a"][$o["i"]])->_M_node) ? ["a" => (($o["a"][$o["i"]])->_M_node)["a"], "i" => (($o["a"][$o["i"]])->_M_node)["i"]] : null);
    return ["a" => [$this], "i" => 0];
  }
}
class std_Rb_tree_node_std_pair_int_int extends std_Rb_tree_node_base {
  public $_M_value_field;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_node_std_pair_int_int(...$a) {
    $this->_M_value_field = new std_pair_int_int((($t53 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t53))["a"][(($t53 = std_forward_1_std_piecewise_construct_t($a[0] ?? null), $t53))["i"]], (($t54 = std_forward_1_std_tuple_int_R($a[1] ?? null), $t54))["a"][(($t54 = std_forward_1_std_tuple_int_R($a[1] ?? null), $t54))["i"]], (($t55 = std_forward_1_std_tuple($a[2] ?? null), $t55))["a"][(($t55 = std_forward_1_std_tuple($a[2] ?? null), $t55))["i"]]);
  }
  function __dtor() {
    $this->__dtor_std_Rb_tree_node_base();
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
class std_Tuple_impl_value1 {
  function __construct(...$a) {
    $this->__init_std_Tuple_impl_value1(...$a);
  }
  function __init_std_Tuple_impl_value1(...$a) {
  }
  function __dtor() {
  }
}
class std_is_empty_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_int_R(...$a);
  }
  function __init_std_is_empty_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_empty_non_tuple_int_R extends std_is_empty_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_empty_non_tuple_int_R(...$a);
  }
  function __init_std_is_empty_non_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_empty_int_R();
  }
}
class std_conditional_value0_std_integral_constant_bool_value0_std_is_empty_non_tuple_int_R {
  function __dtor() {
  }
}
class std_Head_base_value0_int_R_value0 {
  public $_M_head_impl;
  function __construct(...$a) {
    $this->__init_std_Head_base_value0_int_R_value0(...$a);
  }
  function __init_std_Head_base_value0_int_R_value0(...$a) {
    $this->_M_head_impl = $a[0] ?? null;
  }
  function __dtor() {
  }
  static function _M_head($__b) {
    return ($__b["a"][$__b["i"]])->_M_head_impl;
  }
}
class std_Tuple_impl_value0_int_R extends std_Tuple_impl_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Tuple_impl_value0_int_R(...$a);
  }
  function __init_std_Tuple_impl_value0_int_R(...$a) {
    $this->_M_head_impl = null;
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value1();
    $this->__dtor_std_Head_base_value0_int_R_value0();
  }
  static function _M_head($__t) {
    return std_Head_base_value0_int_R_value0::_M_head($__t);
  }
}
class std_tuple_int_R extends std_Tuple_impl_value0_int_R {
  function __construct(...$a) {
    parent::__construct($__elements_0);
    $this->__init_std_tuple_int_R(...$a);
  }
  function __init_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_Tuple_impl_value0_int_R();
  }
}
class std_tuple {
  function __construct(...$a) {
    $this->__init_std_tuple(...$a);
  }
  function __init_std_tuple(...$a) {
  }
  function __dtor() {
  }
}
class std_Rb_tree_const_iterator_std_pair_int_int {
  public $_M_node;
  function __construct(...$a) {
    $this->__init_std_Rb_tree_const_iterator_std_pair_int_int(...$a);
  }
  function __init_std_Rb_tree_const_iterator_std_pair_int_int(...$a) {
    $this->_M_node = (((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node) ? ["a" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["a"], "i" => ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->_M_node)["i"]] : null);
  }
  function __dtor() {
  }
  function _M_const_cast__c() {
    return new std_Rb_tree_iterator_std_pair_int_int(($this->_M_node ? ["a" => $this->_M_node["a"], "i" => $this->_M_node["i"]] : null));
  }
}
class std_remove_reference_int {
  function __dtor() {
  }
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
      $this->first = ($t56 = std_forward_1_std_Rb_tree_node_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t57 = ($t56 ? $t56["a"][$t56["i"]] : null), $t57 && is_array($t57) && array_key_exists("a", $t57) ? ["a" => $t57["a"], "i" => $t57["i"]] : $t57);
      $this->second = ($t58 = std_forward_1_std_Rb_tree_node_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t59 = ($t58 ? $t58["a"][$t58["i"]] : null), $t59 && is_array($t59) && array_key_exists("a", $t59) ? ["a" => $t59["a"], "i" => $t59["i"]] : $t59);
    }
    else if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->first = ($t60 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P(($a[0] ?? null)["a"][($a[0] ?? null)["i"]]), $t61 = ($t60 ? $t60["a"][$t60["i"]] : null), $t61 && is_array($t61) && array_key_exists("a", $t61) ? ["a" => $t61["a"], "i" => $t61["i"]] : $t61);
      $this->second = ($t62 = std_forward_1_std_Rb_tree_node_std_pair_int_int_P(($a[1] ?? null)["a"][($a[1] ?? null)["i"]]), $t63 = ($t62 ? $t62["a"][$t62["i"]] : null), $t63 && is_array($t63) && array_key_exists("a", $t63) ? ["a" => $t63["a"], "i" => $t63["i"]] : $t63);
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
    return ($t64 = operatornew__unsigned_long_long(($__n * 32)), $t64 ? ["a" => $t64["a"], "i" => $t64["i"]] : null);
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
class std_remove_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_reference_std_tuple {
  function __dtor() {
  }
}
class std_allocator_std_pair_int_int_rebind_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
}
class gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
  function allocate($__n, $p1 = null) {
    if (func_num_args() < 2) $p1 = ["a" => [0], "i" => 0];
    if (($__n > $this->max_size__c())) {
      std_throw_bad_alloc();
    }
    return ($t65 = operatornew__unsigned_long_long(($__n * 36)), $t65 ? ["a" => $t65["a"], "i" => $t65["i"]] : null);
  }
  function deallocate($__p, $p1) {
    operatordelete__voidP(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null));
  }
  function max_size__c() {
    return intdiv((((-(1))) & 0xFFFFFFFF), 36);
  }
  function construct__rv($__p, $__args_0, $__args_1, $__args_2) {
    (($__p["a"][$__p["i"]] = new std_Rb_tree_node_std_pair_int_int(std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2))) && (($__p["a"][$__p["i"]]->ctj_a = $__p["a"]) || true) && (($__p["a"][$__p["i"]]->ctj_i = $__p["i"]) || true) ? ["a" => $__p["a"], "i" => $__p["i"]] : null);
  }
  function destroy($__p) {
    ($__p["a"][$__p["i"]])->__dtor();
  }
}
class std_allocator_std_Rb_tree_node_std_pair_int_int extends gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a);
  }
  function __init_std_allocator_std_Rb_tree_node_std_pair_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_gnu_cxx_new_allocator_std_Rb_tree_node_std_pair_int_int();
  }
}
class std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1 extends std_allocator_std_Rb_tree_node_std_pair_int_int {
  public $_M_key_compare;
  public $_M_header;
  public $_M_node_count;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a);
  }
  function __init_std_Rb_tree_int_std_pair_int_int_std_Select1st_std_pair_int_int_std_less_int_std_allocator_std_pair_int_int_Rb_tree_impl_std_less_int_value1(...$a) {
    $this->_M_key_compare = new std_less_int();
    $this->_M_header = new std_Rb_tree_node_base();
    $this->_M_node_count = 0;
    $this->_M_initialize();
  }
  function __dtor() {
    $this->__dtor_std_allocator_std_Rb_tree_node_std_pair_int_int();
  }
  function _M_initialize() {
    $this->_M_header->_M_color = 0;
    $this->_M_header->_M_parent = null;
    $this->_M_header->_M_left = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
    $this->_M_header->_M_right = ((["a" => $this, "i" => "_M_header"]) ? ["a" => (["a" => $this, "i" => "_M_header"])["a"], "i" => (["a" => $this, "i" => "_M_header"])["i"]] : null);
  }
}
class std_move_if_noexcept_cond_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_move_if_noexcept_cond_int(...$a);
  }
  function __init_std_move_if_noexcept_cond_int(...$a) {
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
class std_is_nothrow_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_constructible_int_int_RR(...$a);
  }
  function __init_std_is_nothrow_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nothrow_move_constructible_impl_int_value0 extends std_is_nothrow_constructible_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_impl_int_value0(...$a);
  }
  function __init_std_is_nothrow_move_constructible_impl_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_constructible_int_int_RR();
  }
}
class std_is_nothrow_move_constructible_int extends std_is_nothrow_move_constructible_impl_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nothrow_move_constructible_int(...$a);
  }
  function __init_std_is_nothrow_move_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nothrow_move_constructible_impl_int_value0();
  }
}
class std_is_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_int_int_RR(...$a);
  }
  function __init_std_is_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_int_int_RR extends std_is_direct_constructible_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_int_int_RR();
  }
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
class std_is_direct_constructible_ref_cast_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_RR_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_RR_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_RR_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_RR_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_RR_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int_RR(...$a);
  }
  function __init_std_is_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int_RR(...$a);
  }
  function __init_std_is_lvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int_RR(...$a);
  }
  function __init_std_is_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR extends std_is_rvalue_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int_RR();
  }
}
class std_conditional_value0_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_reference_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int_RR(...$a);
  }
  function __init_std_not_std_is_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int_RR(...$a);
  }
  function __init_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int_RR {
  function __dtor() {
  }
}
class std_remove_volatile_int_RR {
  function __dtor() {
  }
}
class std_remove_const_int_RR {
  function __dtor() {
  }
}
class std_is_void_helper_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int_RR(...$a);
  }
  function __init_std_is_void_helper_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int_RR(...$a);
  }
  function __init_std_not_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR extends std_not_std_is_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_RR_std_not_std_is_void_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_int_RR();
  }
}
class std_conditional_value0_std_not_std_is_void_int_RR_std_not_std_is_reference_int_RR {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_RR_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int_RR extends std_add_rvalue_reference_helper_int_RR_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int_RR(...$a);
  }
  function __init_std_add_rvalue_reference_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_RR_value0();
  }
}
class std_is_function_int_RR extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_RR(...$a);
  }
  function __init_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_RR_std_is_function_int_RR extends std_is_function_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  function __init_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int_RR();
  }
}
class std_conditional_value0_std_is_void_int_RR_std_is_function_int_RR {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_RR_std_is_function_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_RR_std_is_function_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_RR_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_RR_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_RR_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int extends std_is_lvalue_reference_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_RR_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int_RR();
  }
}
class std_conditional_value0_std_is_rvalue_reference_int_std_is_lvalue_reference_int_RR {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_RR_int_value0();
  }
}
class std_remove_reference_int_RR {
  function __dtor() {
  }
}
class std_is_same_int_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_same_int_int(...$a);
  }
  function __init_std_is_same_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_not_std_is_same_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_same_int_int(...$a);
  }
  function __init_std_not_std_is_same_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_base_of_int_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_base_of_int_int(...$a);
  }
  function __init_std_is_base_of_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_and_std_not_std_is_same_int_int_std_is_base_of_int_int extends std_not_std_is_same_int_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a);
  }
  function __init_std_and_std_not_std_is_same_int_int_std_is_base_of_int_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_same_int_int();
  }
}
class std_conditional_value0_std_is_base_of_int_int_std_not_std_is_same_int_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_RR_int_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_RR_int_value1_std_is_lvalue_to_rvalue_ref_int_RR_int_value0_std_is_static_castable_int_RR_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_int_int_RR extends std_is_direct_constructible_new_safe_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_new_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_int_int_RR();
  }
}
class std_is_destructible_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_int(...$a);
  }
  function __init_std_is_destructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_array_unknown_bounds_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_unknown_bounds_int(...$a);
  }
  function __init_std_is_array_unknown_bounds_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_int(...$a);
  }
  function __init_std_is_array_int(...$a) {
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
class std_extent_int_value0 extends std_integral_constant_unsigned_long_long_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_extent_int_value0(...$a);
  }
  function __init_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_unsigned_long_long_value0();
  }
}
class std_not_std_extent_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_extent_int_value0(...$a);
  }
  function __init_std_not_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_array_int_std_not_std_extent_int_value0 extends std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a);
  }
  function __init_std_and_std_is_array_int_std_not_std_extent_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int();
  }
}
class std_conditional_value0_std_not_std_extent_int_value0_std_is_array_int {
  function __dtor() {
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
class std_or_std_is_array_unknown_bounds_int_std_is_function_int extends std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int();
  }
}
class std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int extends std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_array_unknown_bounds_int_std_is_function_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_array_unknown_bounds_int_std_is_function_int();
  }
}
class std_conditional_value0_std_is_array_unknown_bounds_int_std_is_function_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_array_unknown_bounds_int_std_is_function_int {
  function __dtor() {
  }
}
class std_is_scalar_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_scalar_int(...$a);
  }
  function __init_std_is_scalar_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_arithmetic_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_arithmetic_int(...$a);
  }
  function __init_std_is_arithmetic_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_integral_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_int(...$a);
  }
  function __init_std_is_integral_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_integral_helper_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_integral_helper_int(...$a);
  }
  function __init_std_is_integral_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_floating_point_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_int(...$a);
  }
  function __init_std_is_floating_point_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_floating_point_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_floating_point_helper_int(...$a);
  }
  function __init_std_is_floating_point_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_integral_int_std_is_floating_point_int extends std_is_integral_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_integral_int_std_is_floating_point_int(...$a);
  }
  function __init_std_or_std_is_integral_int_std_is_floating_point_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_integral_int();
  }
}
class std_conditional_value1_std_is_integral_int_std_is_floating_point_int {
  function __dtor() {
  }
}
class std_is_enum_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_enum_int(...$a);
  }
  function __init_std_is_enum_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_int(...$a);
  }
  function __init_std_is_pointer_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_pointer_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_pointer_helper_int(...$a);
  }
  function __init_std_is_pointer_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_int(...$a);
  }
  function __init_std_is_member_pointer_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_member_pointer_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_member_pointer_helper_int(...$a);
  }
  function __init_std_is_member_pointer_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_int(...$a);
  }
  function __init_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_nullptr_t_helper_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nullptr_t_helper_int(...$a);
  }
  function __init_std_is_nullptr_t_helper_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_arithmetic_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_arithmetic_int_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_arithmetic_int();
  }
}
class std_or_std_is_member_pointer_int_std_is_nullptr_t_int extends std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nullptr_t_int();
  }
}
class std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_member_pointer_int_std_is_nullptr_t_int();
  }
}
class std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int extends std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a);
  }
  function __init_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int();
  }
}
class std_conditional_value0_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_pointer_int_std_or_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_enum_int_std_or_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_conditional_value1_std_is_arithmetic_int_std_or_std_is_enum_int_std_is_pointer_int_std_is_member_pointer_int_std_is_nullptr_t_int {
  function __dtor() {
  }
}
class std_or_std_is_reference_int_std_is_scalar_int extends std_is_scalar_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_reference_int_std_is_scalar_int(...$a);
  }
  function __init_std_or_std_is_reference_int_std_is_scalar_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_scalar_int();
  }
}
class std_conditional_value0_std_is_reference_int_std_is_scalar_int {
  function __dtor() {
  }
}
class std_is_destructible_safe_int_value0_value1 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_destructible_safe_int_value0_value1(...$a);
  }
  function __init_std_is_destructible_safe_int_value0_value1(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_impl_int_int_RR extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR extends std_is_direct_constructible_impl_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_int_int_RR();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_RR_std_is_destructible_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_RR_std_is_direct_constructible_new_safe_int_int_RR {
  function __dtor() {
  }
}
class std_is_nt_constructible_impl_int_int_RR extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR extends std_is_nt_constructible_impl_int_int_RR {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a);
  }
  function __init_std_and_std_is_constructible_int_int_RR_std_is_nt_constructible_impl_int_int_RR(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nt_constructible_impl_int_int_RR();
  }
}
class std_conditional_value1_std_is_nt_constructible_impl_int_int_RR_std_is_constructible_int_int_RR {
  function __dtor() {
  }
}
class std_not_std_is_nothrow_move_constructible_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_nothrow_move_constructible_int(...$a);
  }
  function __init_std_not_std_is_nothrow_move_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_int_int_R(...$a);
  }
  function __init_std_is_constructible_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_copy_constructible_impl_int_value0 extends std_is_constructible_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_impl_int_value0(...$a);
  }
  function __init_std_is_copy_constructible_impl_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_constructible_int_int_R();
  }
}
class std_is_copy_constructible_int extends std_is_copy_constructible_impl_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_copy_constructible_int(...$a);
  }
  function __init_std_is_copy_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_copy_constructible_impl_int_value0();
  }
}
class std_is_direct_constructible_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_int_int_R extends std_is_direct_constructible_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_int_int_R(...$a);
  }
  function __init_std_is_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_int_int_R();
  }
}
class std_is_direct_constructible_ref_cast_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_ref_cast_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_ref_cast_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_int_R_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_int_R_int(...$a);
  }
  function __init_std_is_static_castable_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_safe_int_R_int extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_safe_int_R_int(...$a);
  }
  function __init_std_is_static_castable_safe_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_static_castable_impl_int_R_int extends std_do_is_static_castable_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_static_castable_impl_int_R_int(...$a);
  }
  function __init_std_is_static_castable_impl_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_static_castable_impl();
  }
}
class std_is_reference_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_int_R(...$a);
  }
  function __init_std_is_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_lvalue_reference_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_rvalue_reference_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R extends std_is_lvalue_reference_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_reference_int_R();
  }
}
class std_conditional_value1_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_int_R(...$a);
  }
  function __init_std_not_std_is_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_void_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_int_R(...$a);
  }
  function __init_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_int_R {
  function __dtor() {
  }
}
class std_remove_const_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_int_R(...$a);
  }
  function __init_std_is_void_helper_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_int_R(...$a);
  }
  function __init_std_not_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R extends std_not_std_is_reference_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_int_R_std_not_std_is_void_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_reference_int_R();
  }
}
class std_conditional_value0_std_not_std_is_void_int_R_std_not_std_is_reference_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_int_R_value0 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_int_R extends std_add_rvalue_reference_helper_int_R_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_int_R_value0();
  }
}
class std_is_function_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_int_R(...$a);
  }
  function __init_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_int_R_std_is_function_int_R extends std_is_function_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  function __init_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_function_int_R();
  }
}
class std_conditional_value0_std_is_void_int_R_std_is_function_int_R {
  function __dtor() {
  }
}
class std_not_std_or_std_is_void_int_R_std_is_function_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a);
  }
  function __init_std_not_std_or_std_is_void_int_R_std_is_function_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_base_to_derived_ref_int_R_int_value1 {
  function __construct(...$a) {
    $this->__init_std_is_base_to_derived_ref_int_R_int_value1(...$a);
  }
  function __init_std_is_base_to_derived_ref_int_R_int_value1(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int extends std_is_rvalue_reference_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a);
  }
  function __init_std_and_std_is_lvalue_reference_int_R_std_is_rvalue_reference_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_int();
  }
}
class std_conditional_value1_std_is_rvalue_reference_int_std_is_lvalue_reference_int_R {
  function __dtor() {
  }
}
class std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_lvalue_to_rvalue_ref_int_R_int_value0();
  }
}
class std_remove_reference_int_R {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __dtor() {
  }
}
class std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 extends std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a);
  }
  function __init_std_and_std_is_static_castable_int_R_int_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0();
  }
}
class std_conditional_value1_std_not_std_or_std_is_base_to_derived_ref_int_R_int_value1_std_is_lvalue_to_rvalue_ref_int_R_int_value0_std_is_static_castable_int_R_int {
  function __dtor() {
  }
}
class std_is_direct_constructible_new_safe_int_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_safe_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_safe_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_direct_constructible_new_int_int_R extends std_is_direct_constructible_new_safe_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_new_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_new_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_new_safe_int_int_R();
  }
}
class std_is_direct_constructible_impl_int_int_R extends std_do_is_direct_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  function __init_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_direct_constructible_impl();
  }
}
class std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R extends std_is_direct_constructible_impl_int_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a);
  }
  function __init_std_and_std_is_destructible_int_std_is_direct_constructible_impl_int_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_direct_constructible_impl_int_int_R();
  }
}
class std_conditional_value1_std_is_direct_constructible_impl_int_int_R_std_is_destructible_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_direct_constructible_ref_cast_int_int_R_std_is_direct_constructible_new_safe_int_int_R {
  function __dtor() {
  }
}
class std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int extends std_not_std_is_nothrow_move_constructible_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a);
  }
  function __init_std_and_std_not_std_is_nothrow_move_constructible_int_std_is_copy_constructible_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_nothrow_move_constructible_int();
  }
}
class std_conditional_value0_std_is_copy_constructible_int_std_not_std_is_nothrow_move_constructible_int {
  function __dtor() {
  }
}
class std_move_iterator_int_P {
  public $_M_current;
  function __construct(...$a) {
    $this->__init_std_move_iterator_int_P(...$a);
  }
  function __init_std_move_iterator_int_P(...$a) {
    if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = (($a[0] ?? null) ? ["a" => ($a[0] ?? null)["a"], "i" => ($a[0] ?? null)["i"]] : null);
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_current = ($t66 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t66 ? ["a" => $t66["a"], "i" => $t66["i"]] : null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function base__c() {
    return ($this->_M_current ? ["a" => $this->_M_current["a"], "i" => $this->_M_current["i"]] : null);
  }
  function op_mul__c() {
    return std_move_int($this->_M_current);
  }
  function op_inc() {
    ++$this->_M_current["i"];
    return ["a" => [$this], "i" => 0];
  }
}
class std_conditional_value0_int_P_std_move_iterator_int_P {
  function __dtor() {
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
class std_is_convertible_int_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_int_std_uses_alloc_base(...$a);
  }
  function __init_std_is_convertible_int_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_uses_alloc_base(...$a);
  }
  function __init_std_is_function_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_uses_alloc_base extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_is_array_std_uses_alloc_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_uses_alloc_base();
  }
}
class std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base extends std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a);
  }
  function __init_std_or_std_is_void_int_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base();
  }
}
class std_conditional_value0_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_int_std_or_std_is_function_std_uses_alloc_base_std_is_array_std_uses_alloc_base {
  function __dtor() {
  }
}
class std_is_convertible_helper_int_std_uses_alloc_base_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a);
  }
  function __init_std_is_convertible_helper_int_std_uses_alloc_base_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int {
  function __dtor() {
  }
  static function construct__rv($__a, $__p, $__args_0, $__args_1, $__args_2) {
    std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int::_S_construct__rv($__a, ($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2));
  }
  static function _S_construct__rv($__a, $__p, $__args_0, $__args_1, $__args_2) {
    ($__a["a"][$__a["i"]])->construct__rv(($__p ? ["a" => $__p["a"], "i" => $__p["i"]] : null), std_forward_1_std_piecewise_construct_t($__args_0), std_forward_1_std_tuple_int_R($__args_1), std_forward_1_std_tuple($__args_2));
  }
}
class std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    $this->__init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
  }
  public static $value;
}
class std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_helper_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_Rb_tree_node_std_pair_int_int_P_value1();
  }
}
class std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_lvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t extends std_is_rvalue_reference_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_piecewise_construct_t();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_piecewise_construct_t_std_is_rvalue_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_not_std_is_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_volatile_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_remove_const_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_is_void_helper_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_void_helper_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_piecewise_construct_t extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t extends std_not_std_is_void_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_piecewise_construct_t_std_not_std_is_void_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_piecewise_construct_t();
  }
}
class std_conditional_value1_std_not_std_is_void_std_piecewise_construct_t_std_not_std_is_reference_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_piecewise_construct_t extends std_add_rvalue_reference_helper_std_piecewise_construct_t_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_piecewise_construct_t(...$a);
  }
  function __init_std_add_rvalue_reference_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_piecewise_construct_t_value1();
  }
}
class std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_lvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R extends std_is_rvalue_reference_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_int_R_std_is_rvalue_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_tuple_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_tuple_int_R(...$a);
  }
  function __init_std_not_std_is_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_volatile_std_tuple_int_R {
  function __dtor() {
  }
}
class std_remove_const_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_void_helper_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_tuple_int_R(...$a);
  }
  function __init_std_is_void_helper_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_tuple_int_R extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R extends std_not_std_is_void_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_tuple_int_R_std_not_std_is_void_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_tuple_int_R();
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_int_R_std_not_std_is_reference_std_tuple_int_R {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple_int_R extends std_add_rvalue_reference_helper_std_tuple_int_R_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_tuple_int_R(...$a);
  }
  function __init_std_add_rvalue_reference_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_tuple_int_R_value1();
  }
}
class std_is_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_tuple(...$a);
  }
  function __init_std_is_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_tuple(...$a);
  }
  function __init_std_is_lvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_is_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple extends std_is_rvalue_reference_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_tuple();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_tuple_std_is_rvalue_reference_std_tuple {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_tuple(...$a);
  }
  function __init_std_not_std_is_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_tuple(...$a);
  }
  function __init_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_tuple {
  function __dtor() {
  }
}
class std_remove_volatile_std_tuple {
  function __dtor() {
  }
}
class std_remove_const_std_tuple {
  function __dtor() {
  }
}
class std_is_void_helper_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_tuple(...$a);
  }
  function __init_std_is_void_helper_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_tuple(...$a);
  }
  function __init_std_not_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple extends std_not_std_is_void_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_tuple_std_not_std_is_void_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_tuple();
  }
}
class std_conditional_value1_std_not_std_is_void_std_tuple_std_not_std_is_reference_std_tuple {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_tuple_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_tuple extends std_add_rvalue_reference_helper_std_tuple_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_tuple(...$a);
  }
  function __init_std_add_rvalue_reference_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_tuple_value1();
  }
}
class std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_lvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_is_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_remove_cv_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_volatile_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_remove_const_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_void_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_and_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value1_std_not_std_is_void_std_allocator_std_Rb_tree_node_std_pair_int_int_P_std_not_std_is_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __dtor() {
  }
}
class std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P extends std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_add_rvalue_reference_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_add_rvalue_reference_helper_std_allocator_std_Rb_tree_node_std_pair_int_int_P_value1();
  }
}
class std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_nary_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple();
  }
}
class std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_do_is_nary_constructible_impl {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_nary_constructible_impl_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_do_is_nary_constructible_impl();
  }
}
class std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple extends std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_and_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple();
  }
}
class std_conditional_value0_std_is_constructible_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple_std_not_std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple {
  function __dtor() {
  }
}
class std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P extends std_is_convertible_int_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_int_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_int_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_convertible_std_Rb_tree_node_base_P_std_Rb_tree_node_base_P_std_is_convertible_int_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_declval_protector_int_RR {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int_RR(...$a);
  }
  function __init_std_declval_protector_int_RR(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_int_R(...$a);
  }
  function __init_std_declval_protector_int_R(...$a) {
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
class std_declval_protector_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_declval_protector_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_piecewise_construct_t {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_piecewise_construct_t(...$a);
  }
  function __init_std_declval_protector_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_tuple_int_R {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_tuple_int_R(...$a);
  }
  function __init_std_declval_protector_std_tuple_int_R(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_tuple {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_tuple(...$a);
  }
  function __init_std_declval_protector_std_tuple(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    $this->__init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
  }
  public static $__stop;
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_is_function_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_function_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P extends std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P();
  }
}
class std_conditional_value0_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_std_pair_int_int_P_std_is_array_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_integral_constant_bool_value1 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value1();
  }
}
class std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P extends std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_or_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value0_std_is_void_std_Rb_tree_node_std_pair_int_int_P_std_or_std_is_function_std_Rb_tree_node_base_P_std_is_array_std_Rb_tree_node_base_P {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P extends std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a);
  }
  function __init_std_and_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P();
  }
}
class std_conditional_value1_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_std_is_convertible_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P {
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
class std_is_convertible_std_piecewise_construct_t_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a);
  }
  function __init_std_is_convertible_std_piecewise_construct_t_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_tuple_int_R(...$a);
  }
  function __init_std_is_function_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_tuple_int_R();
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int_R_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_function_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_piecewise_construct_t extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_is_array_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_piecewise_construct_t();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t extends std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t();
  }
}
class std_conditional_value0_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_piecewise_construct_t_std_is_array_std_piecewise_construct_t {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_piecewise_construct_t_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_piecewise_construct_t_int(...$a);
  }
  function __init_std_is_convertible_std_piecewise_construct_t_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_int_std_is_array_int extends std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_int();
  }
}
class std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_piecewise_construct_t_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_piecewise_construct_t_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_piecewise_construct_t_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_piecewise_construct_t_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int_R_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int extends std_is_convertible_std_piecewise_construct_t_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_piecewise_construct_t_int_std_is_convertible_std_tuple_int_R_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_piecewise_construct_t_int();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_piecewise_construct_t_int {
  function __dtor() {
  }
}
class std_remove_reference_std_Rb_tree_node_std_pair_int_int_P {
  function __dtor() {
  }
}
class std_Build_index_tuple_value1 {
  function __dtor() {
  }
}
class std_Build_index_tuple_value0 {
  function __dtor() {
  }
}
class std_Index_tuple {
  function __construct(...$a) {
    $this->__init_std_Index_tuple(...$a);
  }
  function __init_std_Index_tuple(...$a) {
  }
  function __dtor() {
  }
}
class std_Index_tuple_value0 {
  function __construct(...$a) {
    $this->__init_std_Index_tuple_value0(...$a);
  }
  function __init_std_Index_tuple_value0(...$a) {
  }
  function __dtor() {
  }
}
class std_is_convertible_std_tuple_int_R_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int_R_std_tuple(...$a);
  }
  function __init_std_is_convertible_std_tuple_int_R_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_function_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_function_std_tuple(...$a);
  }
  function __init_std_is_function_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_is_array_std_tuple extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_array_std_tuple(...$a);
  }
  function __init_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_function_std_tuple_std_is_array_std_tuple extends std_is_array_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  function __init_std_or_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_array_std_tuple();
  }
}
class std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple extends std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_int_R_std_is_function_std_tuple_std_is_array_std_tuple(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_std_is_array_std_tuple();
  }
}
class std_conditional_value0_std_is_function_std_tuple_std_is_array_std_tuple {
  function __dtor() {
  }
}
class std_conditional_value0_std_is_void_std_tuple_int_R_std_or_std_is_function_std_tuple_std_is_array_std_tuple {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_R_std_tuple_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_R_std_tuple_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_std_tuple_int_R extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_std_tuple_int_R(...$a);
  }
  function __init_std_is_convertible_std_tuple_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R extends std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_std_tuple_int_R_std_is_array_std_tuple_int_R {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_std_tuple_int_R_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_std_tuple_int_R_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_is_convertible_std_tuple_int extends std_integral_constant_bool_value0 {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_std_tuple_int(...$a);
  }
  function __init_std_is_convertible_std_tuple_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_integral_constant_bool_value0();
  }
}
class std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int extends std_or_std_is_function_int_std_is_array_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a);
  }
  function __init_std_or_std_is_void_std_tuple_std_is_function_int_std_is_array_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_or_std_is_function_int_std_is_array_int();
  }
}
class std_conditional_value0_std_is_void_std_tuple_std_or_std_is_function_int_std_is_array_int {
  function __dtor() {
  }
}
class std_is_convertible_helper_std_tuple_int_value0 extends std_sfinae_types {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_is_convertible_helper_std_tuple_int_value0(...$a);
  }
  function __init_std_is_convertible_helper_std_tuple_int_value0(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_sfinae_types();
  }
  public static $value;
}
class std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int extends std_is_convertible_std_tuple_int_R_int {
  function __construct(...$a) {
    parent::__construct();
    $this->__init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a);
  }
  function __init_std_and_std_is_convertible_std_tuple_int_R_int_std_is_convertible_std_tuple_int(...$a) {
  }
  function __dtor() {
    $this->__dtor_std_is_convertible_std_tuple_int_R_int();
  }
}
class std_conditional_value0_std_is_convertible_std_tuple_int_std_is_convertible_std_tuple_int_R_int {
  function __dtor() {
  }
}
class std_tuple_element_value0_std_tuple_int_R {
  function __dtor() {
  }
}
class std_add_ref_int_R {
  function __dtor() {
  }
}
class std_add_c_ref_int_R {
  function __dtor() {
  }
}
class std_add_r_ref_int_R {
  function __dtor() {
  }
}
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Exception("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function std_Rb_tree_increment__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_increment"); }
function std_Rb_tree_decrement__std_Rb_tree_node_baseP(...$a) { throw new Exception("unresolved external: std::_Rb_tree_decrement"); }
function std_Rb_tree_insert_and_rebalance(...$a) { throw new Exception("unresolved external: std::_Rb_tree_insert_and_rebalance"); }
function main() {
  $a = [1, 2, 3, 4, 5];
  $s = 0;
  for ($i0 = 0; $i0 < count($a); $i0++) {
    $x = $a[$i0];
    $s += $x;
  }
  for ($i1 = 0; $i1 < count($a); $i1++) {
    $y = ["a" => $a, "i" => $i1];
    $y["a"][$y["i"]] *= 2;
  }
  for ($i2 = 0; $i2 < count($a); $i2++) {
    $y = ["a" => $a, "i" => $i2];
    $s += $y["a"][$y["i"]];
  }
  null;
  $v = new std_vector_int_std_allocator_int();
  $v->push_back(["a" => [3], "i" => 0]);
  $v->push_back(["a" => [1], "i" => 0]);
  $v->push_back(["a" => [2], "i" => 0]);
  for ($b3 = $v->begin(), $e3 = $v->end(); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$b3], "i" => 0], ["a" => [$e3], "i" => 0]); $b3->op_inc()) {
    $y = $b3->op_mul__c();
    $y["a"][$y["i"]] += 10;
  }
  $t = 0;
  for ($b4 = $v->begin(), $e4 = $v->end(); gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int(["a" => [$b4], "i" => 0], ["a" => [$e4], "i" => 0]); $b4->op_inc()) {
    $x = ($b4->op_mul__c())["a"][($b4->op_mul__c())["i"]];
    $t = (($t * 10) + $x);
  }
  null;
  $st = new std_set_int_std_less_int_std_allocator_int();
  new std_pair_std_Rb_tree_const_iterator_int_bool($st->insert(["a" => [4], "i" => 0]));
  new std_pair_std_Rb_tree_const_iterator_int_bool($st->insert(["a" => [4], "i" => 0]));
  new std_pair_std_Rb_tree_const_iterator_int_bool($st->insert(["a" => [6], "i" => 0]));
  $u = 0;
  for ($b5 = $st->begin__c(), $e5 = $st->end__c(); $b5->op_ne__c(["a" => [$e5], "i" => 0]); $b5->op_inc()) {
    $x = ($b5->op_mul__c())["a"][($b5->op_mul__c())["i"]];
    $u = (($u * 10) + $x);
  }
  null;
  $m = new std_map_int_int_std_less_int_std_allocator_std_pair_int_int();
  ($t67 = $m->op_index(["a" => [1], "i" => 0]), $t67["a"][$t67["i"]] = 10);
  ($t68 = $m->op_index(["a" => [2], "i" => 0]), $t68["a"][$t68["i"]] = 20);
  $w = 0;
  for ($b6 = $m->begin(), $e6 = $m->end(); $b6->op_ne__c(["a" => [$e6], "i" => 0]); $b6->op_inc()) {
    $p = $b6->op_mul__c();
    $w += ($p["a"][$p["i"]])->second;
  }
  null;
  return 0;
}
function gnu_cxx_operator_int_P_int_P_std_vector_int_std_allocator_int($__lhs, $__rhs) {
  return (!(((($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71) ? (($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["a"][(($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["i"]] : null)) === ((($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72) ? (($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["i"]] : null)) || (((($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71) ? (($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["a"][(($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["i"]] : null)) && ((($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72) ? (($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["i"]] : null)) && ((($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71) ? (($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["a"][(($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["i"]] : null))["a"] === ((($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72) ? (($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["i"]] : null))["a"] && ((($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71) ? (($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["a"][(($t71 = ($__lhs["a"][$__lhs["i"]])->base__c(), $t71))["i"]] : null))["i"] === ((($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72) ? (($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["a"][(($t72 = ($__rhs["a"][$__rhs["i"]])->base__c(), $t72))["i"]] : null))["i"])));
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
function std_declval_int_RR() {
  return std_declval_protector_int_RR::__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_declval_std_Rb_tree_node_int_P() {
  return std_declval_protector_std_Rb_tree_node_int_P::__delegate();
}
function std_declval_int() {
  return std_declval_protector_int::__delegate();
}
function std_declval_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_Rb_tree_node_std_pair_int_int_P::__delegate();
}
function std_declval_std_piecewise_construct_t() {
  return std_declval_protector_std_piecewise_construct_t::__delegate();
}
function std_declval_std_tuple_int_R() {
  return std_declval_protector_std_tuple_int_R::__delegate();
}
function std_declval_std_tuple() {
  return std_declval_protector_std_tuple::__delegate();
}
function std_declval_std_allocator_std_Rb_tree_node_std_pair_int_int_P() {
  return std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P::__delegate();
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
function std_forward_1_std_piecewise_construct_t($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple_int_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_tuple($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_1_std_Rb_tree_node_std_pair_int_int_P($__t) {
  return $__t["a"][$__t["i"]];
}
function std_forward_int_R($__t) {
  return $__t["a"][$__t["i"]];
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  return ($t73 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t73 ? ["a" => $t73["a"], "i" => $t73["i"]] : null);
}
function std_Destroy_2_int_P_std_allocator_int($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_int::destroy($__alloc, ($t74 = std_addressof_int($__first), $t74 ? ["a" => $t74["a"], "i" => $t74["i"]] : null));
  }
}
function std_max_unsigned_long_long($__a, $__b) {
  if (($__a["a"][$__a["i"]] < $__b["a"][$__b["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P($__i) {
  return new std_move_iterator_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t75 = std_addressof_int($__cur), $t75 ? ["a" => $t75["a"], "i" => $t75["i"]] : null), $__first);
      }
      return ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null);
    }
  }
  if (false) {
     {
      std_Destroy_2_int_P_std_allocator_int(($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_addressof_int($__r) {
  return (($__r["a"][$__r["i"]]) ? ["a" => ($__r["a"][$__r["i"]])["a"], "i" => ($__r["a"][$__r["i"]])["i"]] : null);
}
function std_operator_3_int_P_int_P($__x, $__y) {
  return (!(std_operator_3_int_P_int_P_1030($__x, $__y)));
}
function std_operator_3_int_P_int_P_1030($__x, $__y) {
  return ((($t76 = ($__x["a"][$__x["i"]])->base__c(), $t76)) === (($t77 = ($__y["a"][$__y["i"]])->base__c(), $t77)) || ((($t76 = ($__x["a"][$__x["i"]])->base__c(), $t76)) && (($t77 = ($__y["a"][$__y["i"]])->base__c(), $t77)) && (($t76 = ($__x["a"][$__x["i"]])->base__c(), $t76))["a"] === (($t77 = ($__y["a"][$__y["i"]])->base__c(), $t77))["a"] && (($t76 = ($__x["a"][$__x["i"]])->base__c(), $t76))["i"] === (($t77 = ($__y["a"][$__y["i"]])->base__c(), $t77))["i"]));
}
function std_move_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_get_4_value0_int_R($__t) {
  return std_get_helper_value0_int_R($__t);
}
function std_get_helper_value0_int_R($__t) {
  return std_Tuple_impl_value0_int_R::_M_head($__t);
}
$std_piecewise_construct = ["v" => new std_piecewise_construct_t([])];
$std_allocator_arg = new std_allocator_arg_t([]);
$std_ignore = [];
$gnu_cxx_default_lock_policy = 0;
std_basic_string_char_std_char_traits_char_std_allocator_char::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t::$npos = (((-(1))) & 0xFFFFFFFF);
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
std_is_base_to_derived_ref_int_RR_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_base_to_derived_ref_int_R_int_value1::$value = std_integral_constant_bool_value0::$value;
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_base_P_int_P_value0::$value = (2 === 1);
std_is_convertible_helper_int_std_Rb_tree_node_base_P_value0::$value = (2 === 1);
std_declval_protector_std_Rb_tree_node_base_P_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_base_P::$__stop = false;
std_is_convertible_helper_int_std_uses_alloc_base_value0::$value = (2 === 1);
std_allocator_traits_std_allocator_std_Rb_tree_node_std_pair_int_int_construct_helper_std_Rb_tree_node_std_pair_int_int_std_piecewise_construct_t_std_tuple_int_R_std_tuple::$value = std_integral_constant_bool_value1::$value;
std_declval_protector_int_RR::$__stop = false;
std_declval_protector_int_R::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_int::$__stop = false;
std_allocator_traits_std_allocator_std_Rb_tree_node_int_construct_helper_std_Rb_tree_node_int_int::$value = std_integral_constant_bool_value1::$value;
std_is_base_to_derived_ref_int_std_Rb_tree_node_int_value1::$value = std_integral_constant_bool_value0::$value;
std_declval_protector_std_Rb_tree_node_std_pair_int_int_P::$__stop = false;
std_declval_protector_std_piecewise_construct_t::$__stop = false;
std_declval_protector_std_tuple_int_R::$__stop = false;
std_declval_protector_std_tuple::$__stop = false;
std_declval_protector_std_allocator_std_Rb_tree_node_std_pair_int_int_P::$__stop = false;
std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_std_pair_int_int_P_value0::$value = (1 === 1);
std_is_convertible_helper_std_Rb_tree_node_std_pair_int_int_P_std_Rb_tree_node_base_P_value0::$value = (1 === 1);
std_declval_protector_std_allocator_std_Rb_tree_node_int_P::$__stop = false;
std_declval_protector_std_Rb_tree_node_int_R::$__stop = false;
std_is_convertible_helper_std_piecewise_construct_t_std_tuple_int_R_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_std_piecewise_construct_t_value0::$value = (2 === 1);
std_is_convertible_helper_std_piecewise_construct_t_int_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_int_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_R_std_tuple_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_std_tuple_int_R_value0::$value = (2 === 1);
std_is_convertible_helper_std_tuple_int_value0::$value = (2 === 1);
main();
