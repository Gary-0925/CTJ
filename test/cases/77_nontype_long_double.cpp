#include <algorithm>
#include <cmath>
#include <iostream>

template <size_t N>
size_t clamp53() {
  return std::min(static_cast<size_t>(53), N);
}

int main() {
  const long double r = 4294967296.0L;
  const size_t log2r = std::log(r) / std::log(2.0L);
  std::cout << log2r << " " << clamp53<53>() << " " << clamp53<7>() << std::endl;
  std::cout << std::max<size_t>(1UL, (53 + log2r - 1UL) / log2r) << std::endl;
  return 0;
}
