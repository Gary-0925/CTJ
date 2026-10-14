#include <iostream>
void inc(int& r) { r++; }
int& pick(bool b, int& a, int& c) { return b ? a : c; }
int main() {
  int x = 5;
  int& r = x;
  r = 6;
  std::cout << (x) << "\n";
  inc(x);
  std::cout << (x) << "\n";
  int y = 100;
  pick(true, x, y) = 50;
  std::cout << (x) << "\n";
  pick(false, x, y) = 60;
  std::cout << (y) << "\n";
  const int& cr = x;
  std::cout << (cr) << "\n";
  return 0;
}
