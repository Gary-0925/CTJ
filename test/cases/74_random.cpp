#include <iostream>
#include <random>

int main() {
  std::mt19937 g(42);
  std::uniform_int_distribution<int> d(1, 6);
  for (int i = 0; i < 5; i++) std::cout << d(g) << " ";
  std::cout << std::endl;
  std::uniform_real_distribution<double> u(0.0, 1.0);
  std::cout << u(g) << std::endl;
  std::normal_distribution<double> n(0.0, 1.0);
  std::cout << n(g) << std::endl;
  std::bernoulli_distribution b(0.5);
  std::cout << b(g) << b(g) << b(g) << std::endl;
  return 0;
}
