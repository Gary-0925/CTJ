// Allocator traits -*- C++ -*-

// Copyright (C) 2011-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/alloc_traits.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _EXT_ALLOC_TRAITS_H
#define _EXT_ALLOC_TRAITS_H 1

#include <bits/c++config.h>
#include <bits/move.h>
#include <memory>

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

/**
 *  @brief  Uniform interface to C++98 and C++0x allocators.
 *  @ingroup allocators
 *
 *  CTJ note: the upstream definition builds on std::allocator_traits, which
 *  relies on partial template specialization. The members the containers use
 *  are provided directly instead.
*/
template<typename _Alloc>
  struct __alloc_traits
  {
    typedef _Alloc allocator_type;
    typedef typename _Alloc::value_type value_type;
    typedef typename _Alloc::pointer pointer;
    typedef typename _Alloc::const_pointer const_pointer;
    typedef typename _Alloc::reference reference;
    typedef typename _Alloc::const_reference const_reference;
    typedef typename _Alloc::size_type size_type;
    typedef typename _Alloc::difference_type difference_type;

    template<typename _Tp>
      struct rebind
      { typedef typename _Alloc::template rebind<_Tp>::other other; };

    static pointer
    allocate(_Alloc& __a, size_type __n)
    { return __a.allocate(__n); }

    static void
    deallocate(_Alloc& __a, pointer __p, size_type __n)
    { __a.deallocate(__p, __n); }

    static void
    construct(_Alloc& __a, pointer __p)
    { __a.construct(__p); }

    template<typename _Tp>
      static void
      construct(_Alloc& __a, pointer __p, const _Tp& __arg)
      { __a.construct(__p, __arg); }

    template<typename _Tp, typename _Up>
      static void
      construct(_Alloc& __a, pointer __p, const _Tp& __x, const _Up& __y)
      { __a.construct(__p, __x, __y); }

    template<typename _Tp>
      static void
      destroy(_Alloc& __a, _Tp* __p)
      { __a.destroy(__p); }

    static size_type
    max_size(const _Alloc& __a)
    { return __a.max_size(); }

    static _Alloc
    _S_select_on_copy(const _Alloc& __a)
    { return _Alloc(__a); }

    static void
    _S_on_swap(_Alloc& __a, _Alloc& __b)
    {
      _Alloc __tmp(__a);
      __a = __b;
      __b = __tmp;
    }

    static bool _S_propagate_on_copy_assign() { return false; }
    static bool _S_propagate_on_move_assign() { return false; }
    static bool _S_propagate_on_swap() { return false; }
    static bool _S_always_equal() { return true; }
    static bool _S_nothrow_swap() { return true; }
    static bool _S_nothrow_move() { return true; }
  };

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif
