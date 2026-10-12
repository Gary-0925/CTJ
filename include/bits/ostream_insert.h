// <bits/ostream_insert.h> for CTJ: the string insertion helper used by
// operator<< for std::basic_string.  The output itself is done by
// basic_ostream::_M_put, see <ostream>.
#ifndef _CTJ_BITS_OSTREAM_INSERT_H
#define _CTJ_BITS_OSTREAM_INSERT_H 1

#include <bits/ios_base.h>

namespace std {

  template<typename _CharT, typename _Traits>
    class basic_ostream;

  template<typename _CharT, typename _Traits>
    inline basic_ostream<_CharT, _Traits>&
    __ostream_insert(basic_ostream<_CharT, _Traits>& __out, const _CharT* __s, long __n)
    {
      __out._M_put(7, 0, __s, __n);
      return __out;
    }

}

#endif /* _CTJ_BITS_OSTREAM_INSERT_H */
