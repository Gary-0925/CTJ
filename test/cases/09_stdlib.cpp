#include <iostream>
#include <cstring>
#include <climits>
#include <limits>

int main() {
  char buf[16];
  std::strcpy(buf, "hello");
  std::cout << ((int)std::strlen(buf)) << "\n";
  std::cout << (std::strcmp(buf, "hello")) << "\n";
  std::cout << (INT_MAX) << "\n";
  std::cout << (std::numeric_limits<int>::max()) << "\n";
  return 0;
}
