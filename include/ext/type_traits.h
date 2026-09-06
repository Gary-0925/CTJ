// Compile-time type properties -*- C++ -*-

// Copyright (C) 2005-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/type_traits.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _EXT_TYPE_TRAITS
#define _EXT_TYPE_TRAITS 1

#pragma GCC system_header

#include <bits/c++config.h>
#include <bits/cpp_type_traits.h>

extern "C++" {

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  // CTJ note: the upstream definition specializes this template partially,
  // which the transpiler does not implement. __type is therefore always
  // present; overload sets guarded by it fall back to their generic form.
  template<bool, typename _Tp>
    struct __enable_if
    { typedef _Tp __type; };

  template<bool _Cond, typename _Iftrue, typename _Iffalse>
    struct __conditional_type
    { typedef _Iftrue __type; };

  template<typename _Iftrue, typename _Iffalse>
    struct __conditional_type<false, _Iftrue, _Iffalse>
    { typedef _Iffalse __type; };

  template<typename _Tp>
    struct __add_unsigned
    { typedef _Tp __type; };

  template<> struct __add_unsigned<char> { typedef unsigned char __type; };
  template<> struct __add_unsigned<signed char> { typedef unsigned char __type; };
  template<> struct __add_unsigned<short> { typedef unsigned short __type; };
  template<> struct __add_unsigned<int> { typedef unsigned int __type; };
  template<> struct __add_unsigned<long> { typedef unsigned long __type; };
  template<> struct __add_unsigned<long long> { typedef unsigned long long __type; };

  template<typename _Tp>
    struct __remove_unsigned
    { typedef _Tp __type; };

  template<> struct __remove_unsigned<char> { typedef signed char __type; };
  template<> struct __remove_unsigned<unsigned char> { typedef signed char __type; };
  template<> struct __remove_unsigned<unsigned short> { typedef short __type; };
  template<> struct __remove_unsigned<unsigned int> { typedef int __type; };
  template<> struct __remove_unsigned<unsigned long> { typedef long __type; };
  template<> struct __remove_unsigned<unsigned long long> { typedef long long __type; };

  template<typename _Type>
    inline bool
    __is_null_pointer(_Type* __ptr)
    { return __ptr == 0; }

  template<typename _Type>
    inline bool
    __is_null_pointer(_Type)
    { return false; }

  // Arithmetic promotion used by <cmath>: integral arguments are computed
  // as double, floating point arguments keep their own type.
  template<typename _Tp>
    struct __promote
    { typedef double __type; };

  template<> struct __promote<float> { typedef float __type; };
  template<> struct __promote<double> { typedef double __type; };
  template<> struct __promote<long double> { typedef long double __type; };

  template<typename _Tp, typename _Up>
    struct __promote_2
    { typedef double __type; };

  template<> struct __promote_2<float, float> { typedef float __type; };
  template<> struct __promote_2<double, double> { typedef double __type; };
  template<> struct __promote_2<long double, long double> { typedef long double __type; };
  template<> struct __promote_2<float, double> { typedef double __type; };
  template<> struct __promote_2<double, float> { typedef double __type; };
  template<> struct __promote_2<float, long double> { typedef long double __type; };
  template<> struct __promote_2<long double, float> { typedef long double __type; };
  template<> struct __promote_2<double, long double> { typedef long double __type; };
  template<> struct __promote_2<long double, double> { typedef long double __type; };

  template<typename _Tp, typename _Up, typename _Vp>
    struct __promote_3
    { typedef double __type; };

  template<> struct __promote_3<float, float, float> { typedef float __type; };
  template<> struct __promote_3<double, double, double> { typedef double __type; };
  template<> struct __promote_3<long double, long double, long double>
  { typedef long double __type; };

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

} // extern "C++"

#endif
