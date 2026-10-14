#include <iostream>
template <typename T>
T maxOf(T a, T b) { return a > b ? a : b; }

template <typename T, int N>
struct Stack {
  T data[N];
  int top;
  Stack() : top(0) {}
  void push(T v) { data[top++] = v; }
  T pop() { return data[--top]; }
  int size() const { return top; }
};

template <typename T>
struct Pair {
  T a, b;
  Pair(T x, T y) : a(x), b(y) {}
  T sum() { return a + b; }
};

int main() {
  std::cout << (maxOf(3, 7)) << "\n";
  std::cout << (maxOf(2.5, 1.5)) << "\n";
  Stack<int, 8> s;
  s.push(1);
  s.push(2);
  s.push(3);
  std::cout << (s.pop()) << "\n";
  std::cout << (s.size()) << "\n";
  Pair<int> p(4, 5);
  std::cout << (p.sum()) << "\n";
  return 0;
}
