#include <cstdio>
#include <functional>
int add(int a, int b, int c) { return a + b + c; }
int main() {
  std::function<int(int, int, int)> f = add;
  printf("%d\n", f(1, 2, 3));
  return 0;
}
