template <typename T> void swapv(T& a, T& b) {
  T t = a;
  a = b;
  b = t;
}

void scale(int& v, int k) { v = v * k; }

int geti(int& x) { return x; }

int main() {
  int x = 1, y = 2;
  swapv(x, y);
  __ctj_js("console.log($1, $2)", x, y);
  scale(x, 10);
  __ctj_js("console.log($1)", x);
  __ctj_js("console.log($1)", geti(y));
  return 0;
}
