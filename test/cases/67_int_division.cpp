#include <iostream>
using namespace std;
int main() {
  int a = -7, b = 2;
  cout << a / b << " " << a % b << " " << 7 / -2 << " " << 7 % -2 << "\n";
  unsigned int u = 7, v = 2;
  cout << u / v << " " << u % v << "\n";
  long long x = -9000000000LL, y = 7;
  cout << x / y << " " << x % y << "\n";
  int c = 17; c /= 5; cout << c << " ";
  c %= 2; cout << c << "\n";
  long long w = 100; w /= 3; cout << w << "\n";
  return 0;
}
