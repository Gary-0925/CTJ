#include <math.h>

int main() {
  double a = -2.5;
  __ctj_js("console.log($1)", fabs(a));
  __ctj_js("console.log($1)", (int)sqrt(16.0));
  __ctj_js("console.log($1)", (int)floor(3.7));
  __ctj_js("console.log($1)", (int)fmod(7.5, 2.0));
  return 0;
}
