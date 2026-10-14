#include <iostream>
int main() {
  int a[3] = {1, 2, 3};
  int sum = 0;
  for (int i = 0; i < 3; i++) sum += a[i];
  std::cout << (sum) << "\n";
  int b[2][3] = {{1, 2, 3}, {4, 5, 6}};
  std::cout << (b[1][2]) << "\n";
  const char* s = "hello";
  std::cout << (s[0]) << "\n";
  std::cout << (s[4]) << "\n";
  std::cout << (s[5]) << "\n";
  char buf[8] = "abc";
  buf[1] = 'X';
  std::cout << (buf[1]) << "\n";
  std::cout << (sizeof(int)) << "\n";
  std::cout << (sizeof(a)) << "\n";
  // CTJ is ILP32: a pointer is 4 bytes here (g++ on x86_64 prints 8).
  std::cout << (sizeof(s)) << "\n";
  std::cout << (sizeof(double)) << "\n";
  return 0;
}
