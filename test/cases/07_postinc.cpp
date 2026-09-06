int main() {
  int a[4] = {10, 20, 30, 40};
  int i = 0;
  __ctj_js("console.log($1)", a[i++]);
  __ctj_js("console.log($1)", a[i]);
  __ctj_js("console.log($1)", a[++i]);
  int x = 5;
  __ctj_js("console.log($1)", x++);
  __ctj_js("console.log($1)", x);
  __ctj_js("console.log($1)", x--);
  __ctj_js("console.log($1)", x);
  int* p = a;
  __ctj_js("console.log($1)", *p++);
  __ctj_js("console.log($1)", *p);
  return 0;
}
