#include <cstdio>
template<typename S> struct Fn;
struct Holder { int v; };
template<typename F> struct BM {
  template<typename C, typename U> static bool has(U C::* const& m) { return m != 0; }
  static int after() { return 7; }
};
template<typename M> struct MF { static int v() { return 3; } };
template<typename T> struct Box {
  template<typename C, typename U> static MF<U C::*> wrap(U C::* const volatile& p) { return MF<U C::*>(); }
  template<typename S> static bool take(const Fn<S>&) { return true; }
  static int tag() { return 9; }
};
template<typename S> class Fwd;
struct User {
  template<typename S> static bool g(const Fwd<S>& f) { return true; }
  static int after() { return 11; }
};
int main() {
  printf("%d\n", BM<int>::after());
  printf("%d\n", MF<int>::v());
  printf("%d\n", Box<int>::tag());
  printf("%d\n", User::after());
  return 0;
}
