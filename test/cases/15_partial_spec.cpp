template <typename A, typename B> struct Same { enum { value = 0 }; };
template <typename A> struct Same<A, A> { enum { value = 1 }; };

struct Twice {
  int operator()(int x);
};

int Twice::operator()(int x) { return x * 2; }

template <typename T> struct Box {
  T v;
  Box(T x) : v(x) {}
  T get() { return v; }
};

int main() {
  Twice t;
  Box<char> c('A');
  __ctj_js("console.log($1, $2, $3, $4)", Same<int, int>::value, Same<int, char>::value, t(21), (int)c.get());
  return 0;
}
