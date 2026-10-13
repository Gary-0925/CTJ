#include <cstdio>
template<int... Is> struct IntList { static const int n = sizeof...(Is); };
template<int... Is> struct Sum;
template<> struct Sum<> { static const int value = 0; };
template<int H, int... T> struct Sum<H, T...> { static const int value = H + Sum<T...>::value; };
template<typename... Ts> struct Pack { static const int n = sizeof...(Ts); };
template<typename T, typename... Ts> struct Head { typedef T type; };
template<typename... Ts> void show(Ts... xs) { int a[] = { (int)xs... }; for (int i = 0; i < (int)sizeof...(Ts); i++) printf("%d ", a[i]); printf("\n"); }
template<typename... Ts> int countArgs(Ts... xs) { return sizeof...(xs); }
template<typename T> T inc(T x) { return x + 1; }
template<typename... Ts> void incAll(Ts... xs) { int a[] = { (int)(xs + 1)... }; for (int i = 0; i < (int)sizeof...(xs); i++) printf("[%d]", a[i]); printf("\n"); }
template<typename... Ts> void incAll2(Ts... xs) { show(inc(xs)...); }
template<typename F, typename... Ts> void apply(F f, Ts... xs) { f(xs...); }
void pr(int a, double b, char c) { printf("%d %g %c\n", a, b, c); }
template<typename... Ts> struct Tup;
template<> struct Tup<> { int tag() { return 0; } };
template<typename H, typename... T> struct Tup<H, T...> : Tup<T...> { H h; Tup(H x, T... r) : Tup<T...>(r...), h(x) {} int tag() { return 1 + Tup<T...>::tag(); } };
int main() {
  printf("%d %d\n", (int)IntList<1, 2, 3>::n, Sum<1, 2, 3, 4>::value);
  printf("%d\n", (int)sizeof(Head<char, int, long>::type));
  show(1, 2, 3);
  printf("%d %d\n", countArgs(), countArgs(1, 'a', 2.0));
  incAll(1, 2, 3);
  incAll2(4, 5);
  apply(pr, 7, 2.5, 'z');
  Tup<int, double, char> t(1, 2.0, 'c');
  printf("%d %d\n", t.tag(), t.h);
  printf("%d\n", (int)Pack<int, int, int>::n);
  return 0;
}
