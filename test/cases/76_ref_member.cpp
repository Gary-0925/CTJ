#include <iostream>

struct E {
  int s;
  int operator()() {
    s = s * 3 + 1;
    return s;
  }
  int get() { return s; }
};

struct Holder {
  E& g;
  Holder(E& x) : g(x) {}
  int pull() { return g() + g(); }
  int value() { return g.get(); }
};

template <class G>
struct Adaptor {
  G& g;
  Adaptor(G& x) : g(x) {}
  int pull() { return gen(g); }
  template <class U>
  static int gen(U& u) {
    return u() + u();
  }
};

int main() {
  E e;
  e.s = 1;
  Holder h(e);
  std::cout << h.pull() << " " << h.value() << " " << e.s << std::endl;
  Adaptor<E> a(e);
  std::cout << a.pull() << " " << e.s << std::endl;
  return 0;
}
