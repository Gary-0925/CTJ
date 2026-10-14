#include <iostream>
#include "helper.h"

int main() {
  std::cout << (twice(21)) << "\n";
  Counter c;
  c.bump();
  c.bump();
  std::cout << (c.value()) << "\n";
  return 0;
}
