// Numeric traits -*- C++ -*-

// Copyright (C) 2007-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/numeric_traits.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _EXT_NUMERIC_TRAITS
#define _EXT_NUMERIC_TRAITS 1

#pragma GCC system_header

#include <bits/c++config.h>
#include <bits/cpp_type_traits.h>
#include <ext/type_traits.h>
#include <limits>

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  template<typename _Value>
    struct __numeric_traits_floating
    {
      static const int __max_digits10 = __glibcxx_max_digits10(_Value);
      static const bool __is_signed = true;
      static const int __digits10 = __glibcxx_digits10(_Value);
      static const bool __is_integer = false;
      static const int __digits = __glibcxx_digits(_Value);
      static const int __max_exponent10 = std::numeric_limits<_Value>::max_exponent10;
    };

  template<typename _Value> const int __numeric_traits_floating<_Value>::__max_digits10;
  template<typename _Value> const bool __numeric_traits_floating<_Value>::__is_signed;
  template<typename _Value> const int __numeric_traits_floating<_Value>::__digits10;
  template<typename _Value> const bool __numeric_traits_floating<_Value>::__is_integer;
  template<typename _Value> const int __numeric_traits_floating<_Value>::__digits;
  template<typename _Value> const int __numeric_traits_floating<_Value>::__max_exponent10;

  template<typename _Value>
    struct __numeric_traits_integer
    {
      static const _Value __min = __glibcxx_min(_Value);
      static const _Value __max = __glibcxx_max(_Value);
      static const bool __is_signed = __glibcxx_signed(_Value);
      static const int __digits = __glibcxx_digits(_Value);
    };

  template<typename _Value> const _Value __numeric_traits_integer<_Value>::__min;
  template<typename _Value> const _Value __numeric_traits_integer<_Value>::__max;
  template<typename _Value> const bool __numeric_traits_integer<_Value>::__is_signed;
  template<typename _Value> const int __numeric_traits_integer<_Value>::__digits;

  template<typename _Value>
    struct __numeric_traits
    : public __numeric_traits_integer<_Value>
    { };

  template<>
    struct __numeric_traits<float>
    : public __numeric_traits_floating<float>
    { };

  template<>
    struct __numeric_traits<double>
    : public __numeric_traits_floating<double>
    { };

  template<>
    struct __numeric_traits<long double>
    : public __numeric_traits_floating<long double>
    { };

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif
