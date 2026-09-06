// String conversions -*- C++ -*-

// Copyright (C) 2008-2013 Free Software Foundation, Inc.
//
// This file is part of the GNU ISO C++ Library.  This library is free
// software; you can redistribute it and/or modify it under the
// terms of the GNU General Public License as published by the
// Free Software Foundation; either version 3, or (at your option)
// any later version.

/** @file ext/string_conversions.h
 *  This file is a GNU extension to the Standard C++ Library.
 */

#ifndef _GLIBCXX_STRING_CONVERSIONS
#define _GLIBCXX_STRING_CONVERSIONS 1

#include <bits/c++config.h>
#include <bits/functexcept.h>
#include <ext/numeric_traits.h>
#include <cstdlib>
#include <cwchar>
#include <cstdio>
#include <cerrno>

namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)
{
_GLIBCXX_BEGIN_NAMESPACE_VERSION

  // Helper for the numeric string conversions of C++11 [21.5].
  template<typename _TRet, typename _Ret = _TRet, typename _CharT, typename... _Base>
    _Ret
    __stoa(_TRet (*__convf) (const _CharT*, _CharT**, _Base...),
	   const char* __name, const _CharT* __str, std::size_t* __idx,
	   _Base... __base)
    {
      _Ret __ret;

      _CharT* __endptr;
      errno = 0;
      const _TRet __tmp = __convf(__str, &__endptr, __base...);

      if (__endptr == __str)
	std::__throw_invalid_argument(__name);
      else if (errno == ERANGE)
	std::__throw_out_of_range(__name);
      else
	__ret = _Ret(__tmp);

      if (__idx)
	*__idx = std::size_t(__endptr - __str);

      return __ret;
    }

  // Helper for the string conversions of C++11 [21.5].
  template<typename _String, typename _CharT = typename _String::value_type>
    _String
    __to_xstring(int (*__convf) (_CharT*, std::size_t, const _CharT*,
				 __builtin_va_list), std::size_t __n,
		 const _CharT* __fmt, ...)
    {
      _CharT* __s = static_cast<_CharT*>(__builtin_alloca(sizeof(_CharT)
							  * __n));

      __builtin_va_list __args;
      __builtin_va_start(__args, __fmt);

      const int __len = __convf(__s, __n, __fmt, __args);

      __builtin_va_end(__args);

      return _String(__s, __s + __len);
    }

_GLIBCXX_END_NAMESPACE_VERSION
} // namespace

#endif
