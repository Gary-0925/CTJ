int add(int a, int b) { return a + b; }
int main() {
  int x = 40;
  int y = add(x, 2);
  __ctj_js("console.log($1)", y);
  __ctj_js("console.log($1)", 7 / 2);
  __ctj_js("console.log($1)", 7 % 3);
  __ctj_js("console.log($1)", 7.0 / 2);
  __ctj_js("console.log($1)", (3 < 4 && 5 > 6) ? 1 : 0);
  int t = 1 > 2 ? 10 : 20;
  __ctj_js("console.log($1)", t);
  int c = (1, 2, 3);
  __ctj_js("console.log($1)", c);
  unsigned int u = 4000000000u;
  __ctj_js("console.log($1)", (u >> 1));
  __ctj_js("console.log($1)", !0);
  __ctj_js("console.log($1)", ~0);
  int p = 7, q = 8;
  __ctj_js("console.log($1)", p + q);
  int r, s;
  r = 1;
  s = 2;
  __ctj_js("console.log($1)", r + s);
  return 0;
}
