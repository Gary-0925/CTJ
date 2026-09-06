// Support for concurrent program -*- C++ -*-

// Copyright (C) 2003-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/concurrence.h
 *  This file is a GNU extension to the Standard C++ Library.
 *
 *  CTJ note: generated programs are single threaded, so every primitive here
 *  is a no-op that keeps the library's locking code valid.
 */

#ifndef _CONCURRENCE_H
#define _CONCURRENCE_H 1

#pragma GCC system_header

#include <exception>
#include <bits/functexcept.h>
#include <bits/cpp_type_traits.h>
#include <ext/type_traits.h>

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  class __concurrence_lock_error : public std::exception
  {
  public:
    virtual ~__concurrence_lock_error() throw();
    virtual const char* what() const throw();
  };

  class __concurrence_unlock_error : public std::exception
  {
  public:
    virtual ~__concurrence_unlock_error() throw();
    virtual const char* what() const throw();
  };

  class __concurrence_broadcast_error : public std::exception
  {
  public:
    virtual ~__concurrence_broadcast_error() throw();
    virtual const char* what() const throw();
  };

  class __concurrence_wait_error : public std::exception
  {
  public:
    virtual ~__concurrence_wait_error() throw();
    virtual const char* what() const throw();
  };

  inline const char*
  __concurrence_lock_error::what() const throw()
  { return "__gnu_cxx::__concurrence_lock_error"; }

  inline const char*
  __concurrence_unlock_error::what() const throw()
  { return "__gnu_cxx::__concurrence_unlock_error"; }

  inline const char*
  __concurrence_broadcast_error::what() const throw()
  { return "__gnu_cxx::__concurrence_broadcast_error"; }

  inline const char*
  __concurrence_wait_error::what() const throw()
  { return "__gnu_cxx::__concurrence_wait_error"; }

  class __mutex
  {
  private:
    __mutex(const __mutex&);
    __mutex& operator=(const __mutex&);

  public:
    __mutex() { }
    ~__mutex() { }
    void lock() { }
    void unlock() { }
  };

  class __recursive_mutex
  {
  private:
    __recursive_mutex(const __recursive_mutex&);
    __recursive_mutex& operator=(const __recursive_mutex&);

  public:
    __recursive_mutex() { }
    ~__recursive_mutex() { }
    void lock() { }
    void unlock() { }
  };

  class __cond
  {
  private:
    __cond(const __cond&);
    __cond& operator=(const __cond&);

  public:
    __cond() { }
    ~__cond() { }
    void broadcast() { }
    void wait(__mutex& __mutex) { }
  };

  class __scoped_lock
  {
  public:
    typedef __mutex __mutex_type;

  private:
    __mutex_type& __device;
    __scoped_lock(const __scoped_lock&);
    __scoped_lock& operator=(const __scoped_lock&);

  public:
    explicit __scoped_lock(__mutex_type& __name) : __device(__name)
    { __device.lock(); }

    ~__scoped_lock()
    { __device.unlock(); }
  };

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif
