#include <iostream>
template <typename T> void swapv(T& a, T& b) {
  T t = a;
  a = b;
  b = t;
}

void scale(int& v, int k) { v = v * k; }

int geti(int& x) { return x; }

int main() {
  int x = 1, y = 2;
  swapv(x, y);
  std::cout << (x) << " " << (y) << "\n";
  scale(x, 10);
  std::cout << (x) << "\n";
  std::cout << (geti(y)) << "\n";
  return 0;
}
