#include <iostream>
struct E { int s; };
void bump(E& x) { x.s += 5; }
void setv(int& x) { x = 3; }
struct R {
  int& r;
  E& e;
  R(int& x, E& y) : r(x), e(y) {}
  void go() { bump(e); setv(r); }
  int look() { return r + e.s; }
};
void run(int& x, E& y) {
  R a(x, y);
  a.go();
}
int main() {
  int v = 4;
  E o; o.s = 1;
  run(v, o);
  std::cout << v << " " << o.s << std::endl;
  return 0;
}
