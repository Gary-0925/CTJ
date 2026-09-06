int main() {
  int a[3] = {1, 2, 3};
  int sum = 0;
  for (int i = 0; i < 3; i++) sum += a[i];
  __ctj_js("console.log($1)", sum);
  int b[2][3] = {{1, 2, 3}, {4, 5, 6}};
  __ctj_js("console.log($1)", b[1][2]);
  const char* s = "hello";
  __ctj_js("console.log($1)", s[0]);
  __ctj_js("console.log($1)", s[4]);
  __ctj_js("console.log($1)", s[5]);
  char buf[8] = "abc";
  buf[1] = 'X';
  __ctj_js("console.log($1)", buf[1]);
  __ctj_js("console.log($1)", sizeof(int));
  __ctj_js("console.log($1)", sizeof(a));
  __ctj_js("console.log($1)", sizeof(s));
  __ctj_js("console.log($1)", sizeof(double));
  return 0;
}
