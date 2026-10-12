#include <iostream>
int main() {
  int x, sum = 0, n = 0;
  while (std::cin >> x) { sum += x; n++; }
  std::cout << sum << " " << n << std::endl;
  if (std::cin) std::cout << "good" << std::endl; else std::cout << "bad" << std::endl;
  std::cout << !std::cin << " " << std::cin.eof() << std::endl;
  return 0;
}
