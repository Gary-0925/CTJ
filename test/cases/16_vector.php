<?php
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
  function __construct(...$a) {
    $this->__init_gnu_cxx_new_allocator_int(...$a);
  }
  function __init_gnu_cxx_new_allocator_int(...$a) {
  }
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
  function construct($__p) {
    ($__p["a"][$__p["i"]] = 0);
  }
  function destroy($__p) {
    null;
  }
}
class std_allocator_int extends gnu_cxx_new_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_allocator_int(...$a);
  }
  function __init_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
    }
    else { throw new Exception("no matching constructor"); }
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
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl();
    }
    else if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_impl = new std_Vector_base_int_std_allocator_int_Vector_impl($a[1] ?? null);
      $this->_M_create_storage($a[0] ?? null);
    }
    else { throw new Exception("no matching constructor"); }
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
  function _M_create_storage($__n) {
    $this->_M_impl->_M_start = ($t3 = $this->_M_allocate($__n), $t3 ? ["a" => $t3["a"], "i" => $t3["i"]] : null);
    $this->_M_impl->_M_finish = ($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null);
    $this->_M_impl->_M_end_of_storage = ($t4 = (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]), $t4 ? ["a" => $t4["a"], "i" => $t4["i"]] : null);
  }
}
class std_vector_int_std_allocator_int extends std_Vector_base_int_std_allocator_int {
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1]))) {
      parent::__construct($__n, $__a);
    }
    $this->__init_std_vector_int_std_allocator_int(...$a);
  }
  function __init_std_vector_int_std_allocator_int(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
    }
    else if (count($a) >= 1 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && ($a[1] === null || is_array($a[1]))) {
      $this->_M_default_initialize($a[0] ?? null);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_Vector_base_int_std_allocator_int();
  }
  function size__c() {
    return (((($this->_M_impl->_M_finish ? $this->_M_impl->_M_finish["i"] : 0) - ($this->_M_impl->_M_start ? $this->_M_impl->_M_start["i"] : 0))) & 0xFFFFFFFF);
  }
  function max_size__c() {
    return gnu_cxx_alloc_traits_std_allocator_int::max_size($this->_M_get_Tp_allocator());
  }
  function op_index($__n) {
    return (["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"] + ($__n)]);
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
  function clear() {
    $this->_M_erase_at_end(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null));
  }
  function _M_default_initialize($__n) {
    std_uninitialized_default_n_a_int_P_unsigned_long_long_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), $__n, $this->_M_get_Tp_allocator());
    $this->_M_impl->_M_finish = ($this->_M_impl->_M_end_of_storage ? ["a" => $this->_M_impl->_M_end_of_storage["a"], "i" => $this->_M_impl->_M_end_of_storage["i"]] : null);
  }
  function _M_check_len__c($__n, $__s) {
    $__n = ["v" => $__n];
    if ((($this->max_size__c() - $this->size__c()) < $__n["v"])) {
      std_throw_length_error(($__s ? ["a" => $__s["a"], "i" => $__s["i"]] : null));
    }
    $__len = ($this->size__c() + ($t5 = std_max_unsigned_long_long(["a" => [$this->size__c()], "i" => 0], ["a" => $__n, "i" => "v"]), $t5["a"][$t5["i"]]));
    return ((($__len < $this->size__c()) || ($__len > $this->max_size__c())) ? $this->max_size__c() : $__len);
  }
  function _M_erase_at_end($__pos) {
    std_Destroy_2_int_P_std_allocator_int(($__pos ? ["a" => $__pos["a"], "i" => $__pos["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), $this->_M_get_Tp_allocator());
    $this->_M_impl->_M_finish = ($__pos ? ["a" => $__pos["a"], "i" => $__pos["i"]] : null);
  }
  function _M_emplace_back_aux__rv($__args_0) {
    $__len = $this->_M_check_len__c(((1) & 0xFFFFFFFF), ["a" => [118, 101, 99, 116, 111, 114, 58, 58, 95, 77, 95, 101, 109, 112, 108, 97, 99, 101, 95, 98, 97, 99, 107, 95, 97, 117, 120, 0], "i" => 0]);
    $__new_start = $this->_M_allocate($__len);
    $__new_finish = $__new_start;
    if (true) {
       {
        gnu_cxx_alloc_traits_std_allocator_int::construct(["a" => $this, "i" => "_M_impl"], ($t6 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t6 ? ["a" => $t6["a"], "i" => $t6["i"]] : null), std_forward_1_int($__args_0));
        $__new_finish = null;
        $__new_finish = ($t7 = std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int(($this->_M_impl->_M_start ? ["a" => $this->_M_impl->_M_start["a"], "i" => $this->_M_impl->_M_start["i"]] : null), ($this->_M_impl->_M_finish ? ["a" => $this->_M_impl->_M_finish["a"], "i" => $this->_M_impl->_M_finish["i"]] : null), ($__new_start ? ["a" => $__new_start["a"], "i" => $__new_start["i"]] : null), $this->_M_get_Tp_allocator()), $t7 ? ["a" => $t7["a"], "i" => $t7["i"]] : null);
        ++$__new_finish["i"];
      }
    }
    if (false) {
       {
        if ((!$__new_finish)) {
          gnu_cxx_alloc_traits_std_allocator_int::destroy(["a" => $this, "i" => "_M_impl"], ($t8 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($this->size__c())]), $t8 ? ["a" => $t8["a"], "i" => $t8["i"]] : null));
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
    $this->_M_impl->_M_end_of_storage = ($t9 = (["a" => $__new_start["a"], "i" => $__new_start["i"] + ($__len)]), $t9 ? ["a" => $t9["a"], "i" => $t9["i"]] : null);
  }
}
class std_Vector_base_int_std_allocator_int_Vector_impl extends std_allocator_int {
  public $_M_start;
  public $_M_finish;
  public $_M_end_of_storage;
  function __construct(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      parent::__construct();
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      parent::__construct($__a);
    }
    $this->__init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a);
  }
  function __init_std_Vector_base_int_std_allocator_int_Vector_impl(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->_M_start = null;
      $this->_M_finish = null;
      $this->_M_end_of_storage = null;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
    $this->__dtor_std_allocator_int();
  }
}
class gnu_cxx_alloc_traits_std_allocator_int {
  function __dtor() {
  }
  static function construct(...$a) {
    if (count($a) >= 2 && count($a) <= 2 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1]))) {
      (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->construct((($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null));
    }
    else if (count($a) >= 3 && count($a) <= 3 && ($a[0] === null || is_array($a[0])) && ($a[1] === null || is_array($a[1])) && ($a[2] === null || is_array($a[2]))) {
      (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->construct__rv((($a[1] ?? null) ? ["a" => ($a[1] ?? null)["a"], "i" => ($a[1] ?? null)["i"]] : null), $a[2] ?? null);
    }
    else { throw new Exception("no matching overload"); }
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
class std_remove_reference_int {
  function __dtor() {
  }
}
class std_iterator_traits_int_P {
  function __dtor() {
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
      $this->_M_current = ($t10 = (($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->base__c(), $t10 ? ["a" => $t10["a"], "i" => $t10["i"]] : null);
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
function std_throw_bad_alloc(...$a) { throw new Exception("unresolved external: std::__throw_bad_alloc"); }
function std_throw_length_error(...$a) { throw new Exception("unresolved external: std::__throw_length_error"); }
function operatornew__unsigned_long_long(...$a) { return ["a" => array_fill(0, $a[0], 0), "i" => 0]; }
function operatordelete__voidP(...$a) {  }
function main() {
  $v = new std_vector_int_std_allocator_int();
  for ($i = 1; ($i <= 4); $i++) {
    $v->push_back(["a" => [($i * 10)], "i" => 0]);
  }
  $sum = 0;
  for ($i = 0; ($i < $v->size__c()); $i++) {
    $sum += $v->op_index($i);
  }
  ($t11 = $v->op_index(1), $t11["a"][$t11["i"]] = 99);
  $second = ($v->op_index(1))["a"][($v->op_index(1))["i"]];
  $n = $v->size__c();
  $v->clear();
  null;
  $w = new std_vector_int_std_allocator_int(3, ["a" => [new std_allocator_int([])], "i" => 0]);
  null;
  return 0;
}
function std_forward_1_int($__t) {
  return $__t["a"][$__t["i"]];
}
function std_uninitialized_move_if_noexcept_a_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  return ($t12 = std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int(new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null))), new std_move_iterator_int_P(std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P(($__last ? ["a" => $__last["a"], "i" => $__last["i"]] : null))), ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null), $__alloc), $t12 ? ["a" => $t12["a"], "i" => $t12["i"]] : null);
}
function std_Destroy_2_int_P_std_allocator_int($__first, $__last, $__alloc) {
  for (; (!($__first === $__last || ($__first && $__last && $__first["a"] === $__last["a"] && $__first["i"] === $__last["i"]))); ++$__first["i"]) {
    gnu_cxx_alloc_traits_std_allocator_int::destroy($__alloc, ($t13 = std_addressof_int($__first), $t13 ? ["a" => $t13["a"], "i" => $t13["i"]] : null));
  }
}
function std_uninitialized_default_n_a_int_P_unsigned_long_long_std_allocator_int($__first, $__n, $__alloc) {
  $__cur = ($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null);
  if (true) {
     {
      for (; ($__n > 0); (--$__n, ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t14 = std_addressof_int($__cur), $t14 ? ["a" => $t14["a"], "i" => $t14["i"]] : null));
      }
    }
  }
  if (false) {
     {
      std_Destroy_2_int_P_std_allocator_int(($__first ? ["a" => $__first["a"], "i" => $__first["i"]] : null), ($__cur ? ["a" => $__cur["a"], "i" => $__cur["i"]] : null), $__alloc);
    }
  }
}
function std_max_unsigned_long_long($__a, $__b) {
  if (($__a["a"][$__a["i"]] < $__b["a"][$__b["i"]])) {
    return $__b;
  }
  return $__a;
}
function std_declval_int_RR() {
  return std_declval_protector_int_RR::__delegate();
}
function std_declval_int_R() {
  return std_declval_protector_int_R::__delegate();
}
function std_make_move_if_noexcept_iterator_int_P_std_move_iterator_int_P($__i) {
  return new std_move_iterator_int_P(($__i ? ["a" => $__i["a"], "i" => $__i["i"]] : null));
}
function std_uninitialized_copy_a_std_move_iterator_int_P_int_P_std_allocator_int($__first, $__last, $__result, $__alloc) {
  $__cur = ($__result ? ["a" => $__result["a"], "i" => $__result["i"]] : null);
  if (true) {
     {
      for (; std_operator_3_int_P_int_P(["a" => [$__first], "i" => 0], ["a" => [$__last], "i" => 0]); ($__first->op_inc(), ++$__cur["i"])) {
        gnu_cxx_alloc_traits_std_allocator_int::construct($__alloc, ($t15 = std_addressof_int($__cur), $t15 ? ["a" => $t15["a"], "i" => $t15["i"]] : null), $__first);
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
  return ((($t16 = ($__x["a"][$__x["i"]])->base__c(), $t16)) === (($t17 = ($__y["a"][$__y["i"]])->base__c(), $t17)) || ((($t16 = ($__x["a"][$__x["i"]])->base__c(), $t16)) && (($t17 = ($__y["a"][$__y["i"]])->base__c(), $t17)) && (($t16 = ($__x["a"][$__x["i"]])->base__c(), $t16))["a"] === (($t17 = ($__y["a"][$__y["i"]])->base__c(), $t17))["a"] && (($t16 = ($__x["a"][$__x["i"]])->base__c(), $t16))["i"] === (($t17 = ($__y["a"][$__y["i"]])->base__c(), $t17))["i"]));
}
function std_move_int($__t) {
  return $__t["a"][$__t["i"]];
}
$std_piecewise_construct = new std_piecewise_construct_t([]);
$std_allocator_arg = new std_allocator_arg_t([]);
$std_ignore = [];
$gnu_cxx_default_lock_policy = 0;
std_basic_string_char_std_char_traits_char_std_allocator_char::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_wchar_t_std_char_traits_wchar_t_std_allocator_wchar_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char16_t_std_char_traits_char16_t_std_allocator_char16_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_basic_string_char32_t_std_char_traits_char32_t_std_allocator_char32_t::$npos = (((-(1))) & 0xFFFFFFFF);
std_integral_constant_bool_value0::$value = 0;
std_integral_constant_bool_value1::$value = 1;
std_is_base_to_derived_ref_int_RR_int_value1::$value = std_integral_constant_bool_value0::$value;
std_integral_constant_unsigned_long_long_value0::$value = 0;
std_is_base_to_derived_ref_int_R_int_value1::$value = std_integral_constant_bool_value0::$value;
std_declval_protector_int_RR::$__stop = false;
std_declval_protector_int_R::$__stop = false;
main();
