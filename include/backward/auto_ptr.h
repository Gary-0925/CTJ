// auto_ptr -*- C++ -*-

// Copyright (C) 2007-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file backward/auto_ptr.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _BACKWARD_AUTO_PTR_H
#define _BACKWARD_AUTO_PTR_H 1

#include <bits/c++config.h>
#include <debug/debug.h>

namespace std _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  template<typename _Tp1>
    struct auto_ptr_ref
    {
      _Tp1* _M_ptr;

      explicit
      auto_ptr_ref(_Tp1* __p): _M_ptr(__p) { }
    } _GLIBCXX_DEPRECATED;

  template<typename _Tp>
    class auto_ptr
    {
    private:
      _Tp* _M_ptr;

    public:
      typedef _Tp element_type;

      explicit
      auto_ptr(element_type* __p = 0) throw() : _M_ptr(__p) { }

      auto_ptr(auto_ptr& __a) throw() : _M_ptr(__a.release()) { }

      template<typename _Tp1>
        auto_ptr(auto_ptr<_Tp1>& __a) throw() : _M_ptr(__a.release()) { }

      auto_ptr&
      operator=(auto_ptr& __a) throw()
      {
	reset(__a.release());
	return *this;
      }

      template<typename _Tp1>
        auto_ptr&
        operator=(auto_ptr<_Tp1>& __a) throw()
        {
	  reset(__a.release());
	  return *this;
	}

      ~auto_ptr() { delete _M_ptr; }

      element_type&
      operator*() const throw()
      {
	__glibcxx_assert(_M_ptr != 0);
	return *_M_ptr;
      }

      element_type*
      operator->() const throw()
      {
	__glibcxx_assert(_M_ptr != 0);
	return _M_ptr;
      }

      element_type*
      get() const throw() { return _M_ptr; }

      element_type*
      release() throw()
      {
	element_type* __tmp = _M_ptr;
	_M_ptr = 0;
	return __tmp;
      }

      void
      reset(element_type* __p = 0) throw()
      {
	if (__p != _M_ptr)
	  {
	    delete _M_ptr;
	    _M_ptr = __p;
	  }
      }

      auto_ptr(auto_ptr_ref<element_type> __ref) throw()
      : _M_ptr(__ref._M_ptr) { }

      auto_ptr&
      operator=(auto_ptr_ref<element_type> __ref) throw()
      {
	if (__ref._M_ptr != this->_M_ptr)
	  {
	    delete _M_ptr;
	    _M_ptr = __ref._M_ptr;
	  }
	return *this;
      }

      template<typename _Tp1>
        operator auto_ptr_ref<_Tp1>() throw()
        { return auto_ptr_ref<_Tp1>(this->release()); }

      template<typename _Tp1>
        operator auto_ptr<_Tp1>() throw()
        { return auto_ptr<_Tp1>(this->release()); }
    } _GLIBCXX_DEPRECATED;

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif /* _BACKWARD_AUTO_PTR_H */
