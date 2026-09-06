#include "helper.h"

int main() {
  __ctj_js("console.log($1)", twice(21));
  Counter c;
  c.bump();
  c.bump();
  __ctj_js("console.log($1)", c.value());
  return 0;
}
