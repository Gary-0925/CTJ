#include <iostream>
using namespace std;

enum Kind { A = 1, B = 2 };

union Bits {
  double d;
  unsigned long long bits;
  long long sbits;
};

union Mixed {
  unsigned char c;
  short s;
  int i;
  bool flag;
  Kind k;
  unsigned short us;
  float f;
};

union Holder {
  int a;
  float b;
};

union Pair {
  int lo;
  int hi;
  Pair() : lo(7) {}
  int get() const { return lo; }
  void set(int v) { hi = v; }
};

int main() {
  Bits x;
  x.d = -2.5;
  cout << (x.bits >> 63) << " " << (x.bits >> 52 & 2047) << "\n";
  x.bits = 0x3FF0000000000000ULL;
  cout << x.d << " " << x.sbits << "\n";

  Mixed m;
  m.i = 0x12345678;
  cout << (int)m.c << " " << m.s << " " << m.us << "\n";
  m.c = 0xFF;
  cout << m.i << "\n";
  m.flag = false;
  cout << m.i << "\n";
  m.k = B;
  cout << m.i << " " << (m.k == B) << "\n";

  Holder h;
  h.a = 0x3F800000;
  cout << h.b << "\n";
  h.b = 2.0f;
  cout << h.a << "\n";

  Pair p;
  cout << p.get() << "\n";
  p.set(99);
  cout << p.lo << "\n";

  Bits y = x;
  cout << (y.bits == x.bits) << "\n";

  int& ri = m.i;
  ri = 5;
  cout << m.i << " " << sizeof(Bits) << " " << sizeof(Mixed) << " " << sizeof(Holder) << "\n";
  int* pi = &m.i;
  *pi += 1;
  cout << m.i << "\n";
  return 0;
}
