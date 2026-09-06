void inc(int& r) { r++; }
int& pick(bool b, int& a, int& c) { return b ? a : c; }
int main() {
  int x = 5;
  int& r = x;
  r = 6;
  __ctj_js("console.log($1)", x);
  inc(x);
  __ctj_js("console.log($1)", x);
  int y = 100;
  pick(true, x, y) = 50;
  __ctj_js("console.log($1)", x);
  pick(false, x, y) = 60;
  __ctj_js("console.log($1)", y);
  const int& cr = x;
  __ctj_js("console.log($1)", cr);
  return 0;
}
