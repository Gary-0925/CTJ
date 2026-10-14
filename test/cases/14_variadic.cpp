#include <iostream>
template <typename... A> struct Count {
  static const int n = sizeof...(A);
};

template <typename T, typename... R> struct Head1 {
  static const int n = 1 + sizeof...(R);
};

int main() {
  std::cout << (Count<int, double, char>::n) << " " << (Head1<long>::n) << "\n";
  return 0;
}
