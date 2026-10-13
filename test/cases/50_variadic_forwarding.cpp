#include <cstdio>
#include <cstdarg>
#include <utility>
#include <tuple>
int vsum(int n, va_list ap) { int s = 0; for (int i = 0; i < n; i++) s += va_arg(ap, int); return s; }
int sumcopy(int n, ...) { va_list a, b; va_start(a, n); va_copy(b, a); int s1 = vsum(n, a), s2 = vsum(n, b); va_end(a); va_end(b); return s1 * 100 + s2; }
void logf(const char* fmt, ...) { va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap); }
template<typename T> T twice(T x) { return x * 2; }
template<typename... Ts> void fwd_print(Ts&&... xs) { int a[] = { (printf("<%d>", (int)std::forward<Ts>(xs)), 0)... }; (void)a; printf("\n"); }
template<typename... Ts> int tw(Ts... xs) { int a[] = { twice(xs)... }; return a[0] + (int)sizeof...(xs); }
template<typename... Ts> int nested(Ts... xs) { return (int)sizeof...(xs); }
template<typename... Ts> int outer(Ts... xs) { return nested(twice(xs)...) * 10 + nested(xs..., 1); }
template<typename... Ts> std::tuple<Ts...> mk(Ts... xs) { return std::tuple<Ts...>(xs...); }
#define LOG(fmt, ...) logf("[" fmt "]\n", ##__VA_ARGS__)
#define CALL(f, ...) f(__VA_ARGS__)
int add3(int a, int b, int c) { return a + b + c; }
int main() {
  printf("%d\n", sumcopy(3, 1, 2, 3));
  logf("%s-%d\n", "ab", 42);
  printf("%d\n", tw(1, 2, 3));
  printf("%d\n", outer(1, 2));
  fwd_print(1, 2, 3);
  std::tuple<int, double> t = mk(3, 2.5);
  printf("%d %g\n", std::get<0>(t), std::get<1>(t));
  LOG("v=%d", 7);
  LOG("plain");
  printf("%d\n", CALL(add3, 1, 2, 3));
  return 0;
}
