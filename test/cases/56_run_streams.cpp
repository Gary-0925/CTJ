#include <cstdio>
#include <iostream>

int counter = 0;

int main() {
  int n = 0;
  std::cin >> n;
  for (int i = 1; i <= n; i++) {
    counter += i;
    std::cout << "sum " << counter << "\n";
    std::cerr << "warn " << i << "\n";
    std::clog << "log " << i << "\n";
  }
  printf("done %d\n", counter);
  return 0;
}
