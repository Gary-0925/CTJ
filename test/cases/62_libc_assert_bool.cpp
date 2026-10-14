#include <assert.h>
#include <stdio.h>
void show(bool b) { printf("show %d\n", (int)b); }
int main() {
  int x = 3;
  printf("%d %d\n", static_cast<bool>(x == 4) ? 1 : 0, static_cast<bool>(x == 3) ? 1 : 0);
  bool a = (x == 4), c = (x == 3);
  printf("%d %d %d\n", (int)a, (int)c, (int)static_cast<bool>(x));
  show(x == 4);
  show(x == 3);
  if (static_cast<bool>(x == 4)) printf("BAD\n");
  assert(x == 3);
  assert(x == 3 && "x is three");
  printf("__LINE__ %d\n", __LINE__);
  return 0;
}
