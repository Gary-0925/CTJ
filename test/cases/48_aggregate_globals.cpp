#include <cstdio>
struct P { int a; int b; };
P gp = {3, 4};
P* gq = &gp;
int main() {
  printf("%d %d %d %d\n", gp.a, gp.b, gq->a, gq->b);
  P loc = {5, 6};
  P* lq = &loc;
  printf("%d %d\n", lq->a, lq->b);
  return 0;
}
