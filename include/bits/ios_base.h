// <bits/ios_base.h> for CTJ.
//
// The libstdc++ version depends on locale and streambuf, which cannot be
// transpiled.  This replacement keeps only the format state of a stream (the
// flags, the width, the precision and the fill character), with the same flag
// values as libstdc++.  Output itself is written by <ostream>, through
// __ctj_js / __ctj_php, so that no compiler code has to know about streams.
#ifndef _CTJ_BITS_IOS_BASE_H
#define _CTJ_BITS_IOS_BASE_H 1

namespace std {

  class ios_base {
  public:
    typedef int fmtflags;

    static const int boolalpha = 0x01;
    static const int dec = 0x02;
    static const int hex = 0x08;
    static const int oct = 0x40;
    static const int basefield = 0x4a;
    static const int internal = 0x10;
    static const int left = 0x20;
    static const int right = 0x80;
    static const int adjustfield = 0xb0;

    // Format state.  _M_fill is a character code.
    int _M_flags;
    int _M_width;
    int _M_precision;
    int _M_fill;

    ios_base() : _M_flags(0x02), _M_width(0), _M_precision(6), _M_fill(32) { }

    int flags() const { return _M_flags; }
    int flags(int __f) { int __old = _M_flags; _M_flags = __f; return __old; }
    int setf(int __f) { int __old = _M_flags; _M_flags = _M_flags | __f; return __old; }
    void unsetf(int __f) { _M_flags = _M_flags & ~__f; }

    int width() const { return _M_width; }
    int width(int __w) { int __old = _M_width; _M_width = __w; return __old; }

    int precision() const { return _M_precision; }
    int precision(int __p) { int __old = _M_precision; _M_precision = __p; return __old; }

    int fill() const { return _M_fill; }
    int fill(int __c) { int __old = _M_fill; _M_fill = __c; return __old; }
  };

  // A flag manipulator such as std::hex or std::setiosflags: the bits in
  // _M_mask are replaced by _M_value.
  struct _Ios_fmt {
    int _M_mask;
    int _M_value;
    _Ios_fmt(int __m, int __v) : _M_mask(__m), _M_value(__v) { }
  };

  // An argument manipulator such as std::setw.  _M_kind is 1 for the width,
  // 2 for the precision and 3 for the fill character.
  struct _Ios_arg {
    int _M_kind;
    int _M_value;
    _Ios_arg(int __k, int __v) : _M_kind(__k), _M_value(__v) { }
  };

}

#endif /* _CTJ_BITS_IOS_BASE_H */
