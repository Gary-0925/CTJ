// <bits/basic_ios.h> for CTJ.  The libstdc++ version is built on locale and
// streambuf, which cannot be transpiled.  This one keeps only the part a
// stream needs: basic_ios<C, T> is ios_base, so std::ios (the typedef in
// <iosfwd>) names a class with the format state and the static members such as
// sync_with_stdio.  See <bits/ios_base.h>.
#ifndef _BASIC_IOS_H
#define _BASIC_IOS_H 1

#include <bits/char_traits.h>
#include <bits/ios_base.h>

namespace std {

  template<typename _CharT, typename _Traits = char_traits<_CharT> >
    class basic_ios : public ios_base
    {
    public:
      typedef _CharT char_type;
      typedef _Traits traits_type;

      basic_ios() : ios_base() { }
    };

  // The same typedef as <iosfwd>, now that the class is defined.
  typedef basic_ios<char> ios;

}

#endif /* _BASIC_IOS_H */
