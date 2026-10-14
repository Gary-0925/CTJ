#include <iostream>

struct P {
  int a;
  P(int x) : a(x) {}
};

struct D {
  template <class U>
  int operator()(U& u) {
    return u.next();
  }
  template <class U>
  int operator()(U& u, const P& p) {
    return u.next() + p.a;
  }
};

struct G {
  int v;
  int next() { return ++v; }
};

template <class T>
int call(T&& g) {
  D d;
  return d(g, P(10)) + d(g);
}

int main() {
  G a;
  a.v = 1;
  std::cout << call(a) << " " << a.v << std::endl;
  return 0;
}
