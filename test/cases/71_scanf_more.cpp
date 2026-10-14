#include <cstdio>

int main() {
  void* p = 0;
  int r = sscanf("0xdeadbeef", "%p", &p);
  printf("r=%d p=%p\n", r, p);
  r = sscanf("0x0", "%p", &p);
  printf("r=%d null=%d\n", r, p == 0);

  double a, b, c, e;
  r = sscanf("0x1.8p3 -0x10 0x.8p1 1e-2", "%la %la %la %lg", &a, &b, &c, &e);
  printf("r=%d %g %g %g %g\n", r, a, b, c, e);

  float f1, f2, f3;
  r = sscanf("inf -Infinity nan", "%f %f %f", &f1, &f2, &f3);
  printf("r=%d %f %f %f\n", r, f1, f2, f3);

  r = sscanf("+inf nan(123)", "%lf %lf", &a, &b);
  printf("r=%d %g %g\n", r, a, b);
  return 0;
}
