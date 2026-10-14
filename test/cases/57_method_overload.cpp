#include <cstdio>

struct Acc {
  int v = 0;
  int add(int x) { v += x; return v; }
  int add(double x) { v += (int)(x * 2); return v; }
  int add(int a, int b) { v += a * b; return v; }
};

struct B {
  int f(int x) { return x + 1; }
  int f(int x, int y) { return x * y; }
};

struct D : B {
  int f(int x) { return x + 100; }
};

namespace ns {
int g(int x) { return x * 3; }
double g(double x) { return x / 2; }
}

int main() {
  Acc a;
  printf("%d\n", a.add(10));
  printf("%d\n", a.add(2.5));
  printf("%d\n", a.add(3, 4));
  D d;
  B* p = &d;
  printf("%d %d %d\n", p->f(1), d.f(2), d.B::f(3, 4));
  printf("%d %g\n", ns::g(2), ns::g(3.0));
  return 0;
}
