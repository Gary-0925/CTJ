// Allocator that wraps operator new -*- C++ -*-

// Copyright (C) 2001-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/new_allocator.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _NEW_ALLOCATOR_H
#define _NEW_ALLOCATOR_H 1

#include <bits/c++config.h>
#include <new>
#include <bits/functexcept.h>
#include <bits/move.h>
#include <type_traits>

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  using std::size_t;
  using std::ptrdiff_t;

  /**
   *  @brief  An allocator that uses global new, as per [20.4].
   */
  template<typename _Tp>
    class new_allocator
    {
    public:
      typedef size_t     size_type;
      typedef ptrdiff_t  difference_type;
      typedef _Tp*       pointer;
      typedef const _Tp* const_pointer;
      typedef _Tp&       reference;
      typedef const _Tp& const_reference;
      typedef _Tp        value_type;

      template<typename _Tp1>
        struct rebind
        { typedef new_allocator<_Tp1> other; };

      typedef std::true_type propagate_on_container_move_assignment;

      new_allocator() _GLIBCXX_USE_NOEXCEPT { }

      new_allocator(const new_allocator&) _GLIBCXX_USE_NOEXCEPT { }

      template<typename _Tp1>
        new_allocator(const new_allocator<_Tp1>&) _GLIBCXX_USE_NOEXCEPT { }

      ~new_allocator() _GLIBCXX_USE_NOEXCEPT { }

      pointer
      address(reference __x) const _GLIBCXX_NOEXCEPT
      { return std::__addressof(__x); }

      const_pointer
      address(const_reference __x) const _GLIBCXX_NOEXCEPT
      { return std::__addressof(__x); }

      pointer
      allocate(size_type __n, const void* = 0)
      {
	if (__n > this->max_size())
	  std::__throw_bad_alloc();

	// Transpiled storage is an array of objects, not raw bytes.
	return new _Tp[__n];
      }

      void
      deallocate(pointer __p, size_type)
      { (void)__p; }  // the target language reclaims the storage itself

      // Transpiled storage is an array in the target language, so the limit is
      // the largest count such an array can hold rather than an address space.
      size_type
      max_size() const _GLIBCXX_USE_NOEXCEPT
      { return 1073741823 / sizeof(_Tp); }

      // Placement new needs raw storage, which transpiled code does not have,
      // so constructing into an existing object is spelled as an assignment.
      template<typename _Up>
        void
        construct(_Up* __p)
	{ *__p = _Up(); }

      template<typename _Up, typename _Vp>
        void
        construct(_Up* __p, const _Vp& __val)
	{ *__p = __val; }

      // Transpiled objects are garbage collected, so there is nothing to
      // release when an element goes away.
      template<typename _Up>
        void
        destroy(_Up*) { }
    };

  template<typename _Tp>
    inline bool
    operator==(const new_allocator<_Tp>&, const new_allocator<_Tp>&)
    { return true; }

  template<typename _Tp>
    inline bool
    operator!=(const new_allocator<_Tp>&, const new_allocator<_Tp>&)
    { return false; }

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif
