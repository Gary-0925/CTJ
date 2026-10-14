#include <iostream>
int main() {
  int a[4] = {10, 20, 30, 40};
  int i = 0;
  std::cout << (a[i++]) << "\n";
  std::cout << (a[i]) << "\n";
  std::cout << (a[++i]) << "\n";
  int x = 5;
  std::cout << (x++) << "\n";
  std::cout << (x) << "\n";
  std::cout << (x--) << "\n";
  std::cout << (x) << "\n";
  int* p = a;
  std::cout << (*p++) << "\n";
  std::cout << (*p) << "\n";
  return 0;
}
