#include <cstring>
#include <climits>
#include <limits>

int main() {
  char buf[16];
  std::strcpy(buf, "hello");
  __ctj_js("console.log($1)", (int)std::strlen(buf));
  __ctj_js("console.log($1)", std::strcmp(buf, "hello"));
  __ctj_js("console.log($1)", INT_MAX);
  __ctj_js("console.log($1)", std::numeric_limits<int>::max());
  return 0;
}
