#include <iostream>
int add(int a, int b) { return a + b; }
int main() {
  int x = 40;
  int y = add(x, 2);
  std::cout << (y) << "\n";
  std::cout << (7 / 2) << "\n";
  std::cout << (7 % 3) << "\n";
  std::cout << (7.0 / 2) << "\n";
  std::cout << ((3 < 4 && 5 > 6) ? 1 : 0) << "\n";
  int t = 1 > 2 ? 10 : 20;
  std::cout << (t) << "\n";
  int c = (1, 2, 3);
  std::cout << (c) << "\n";
  unsigned int u = 4000000000u;
  std::cout << ((u >> 1)) << "\n";
  std::cout << (!0) << "\n";
  std::cout << (~0) << "\n";
  int p = 7, q = 8;
  std::cout << (p + q) << "\n";
  int r, s;
  r = 1;
  s = 2;
  std::cout << (r + s) << "\n";
  return 0;
}
