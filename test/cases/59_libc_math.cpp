#include <cstdio>
extern "C" {
double sin(double); double cos(double); double tan(double); double atan2(double, double);
double exp(double); double log(double); double log10(double); double log2(double); double sqrt(double);
double cbrt(double); double pow(double, double); double fmod(double, double); double floor(double);
double ceil(double); double round(double); double rint(double); double trunc(double); double fabs(double);
double hypot(double, double); double copysign(double, double); double fmax(double, double);
double fmin(double, double); double fdim(double, double); double nextafter(double, double);
double remainder(double, double); double ldexp(double, int); double scalbn(double, int);
double logb(double); int ilogb(double); double frexp(double, int*); double modf(double, double*);
int lrint(double); long long llrint(double); int lround(double); long long llround(double);
int isinf(double); int isnan(double); double nan(const char*); float sqrtf(float); float sinf(float);
float nextafterf(float, float); float fmaf(float, float, float); float powf(float, float);
double exp2(double); double expm1(double); double log1p(double); double asinh(double); double atanh(double);
double remquo(double, double, int*); double significand(double);
}
int main() {
  double xs[18] = {0.0, -0.0, 0.5, -0.5, 1.5, 2.5, -2.5, 1.0, -1.0, 3.7, -3.7, 1e300, 1e-310, 4.9e-324, 1e10, 123.456, 0.1, -7.25};
  int n = sizeof(xs) / sizeof(xs[0]);
  for (int i = 0; i < n; i++) {
    double x = xs[i];
    printf("%g: %.10g %.10g %.10g %.10g %.10g\n", x, sin(x), cos(x), atan2(x, 2.0), exp(x / 100), log(fabs(x) + 1));
    printf("  %g %g %g %g %g %g\n", round(x), rint(x), trunc(x), floor(x), ceil(x), fabs(x));
    double xc = (x > 1e9 || x < -1e9) ? 0.0 : x;
    printf("  %d %lld %d %lld %d %d\n", lrint(xc), llrint(x), lround(xc), llround(x), isinf(x) != 0, isnan(x) != 0);
    int e1 = 0, e2 = 0;
    double f1 = frexp(x, &e1);
    double ip1, ip2;
    double fr1 = modf(x, &ip1);
    printf("  %.17g %d %.17g %.17g %.17g\n", f1, e1, fr1, ip1, nextafter(x, 1.0));
    printf("  %d %g %g\n", ilogb(x), logb(x), scalbn(x, 3));
    printf("  %.17g %.17g %g\n", ldexp(x, -2), remainder(x, 3.0), copysign(2.0, x));
    printf("  %g %g %g %g\n", fmax(x, 1.0), fmin(x, 1.0), fdim(x, 0.25), hypot(x, 4.0));
  }
  printf("%g %g %g %g\n", pow(2, 10), (pow(-8, 1.0 / 3) != pow(-8, 1.0 / 3)) ? 1.0 : 0.0, pow(1, 1e308), pow(0, -1));
  printf("%g %g %g\n", pow(-1, 1.0 / 0), pow(2.5, 2), pow(10, -3));
  printf("%g %g %g\n", fmod(7.5, 2), fmod(-7.5, 2), fmod(5, 0.0) != fmod(5, 0.0) ? 1.0 : 0.0);
  printf("%g %g %g %g\n", sqrt(2), cbrt(27), log10(1000), log2(1024));
  printf("%g %g %g %g\n", exp2(10), expm1(1e-5), log1p(1e-5), asinh(1));
  printf("%d %d %d\n", isinf(1.0 / 0) != 0, isinf(-1.0 / 0) != 0, isnan(nan("")) != 0);
  printf("%.9g %.9g %.9g\n", sqrtf(2.0f), sinf(1.0f), powf(2.0f, 0.5f));
  printf("%.9g %.9g\n", fmaf(2.0f, 3.0f, 1.0f), nextafterf(1.0f, 2.0f));
  printf("%.17g %.17g\n", nextafter(0.0, 1.0), nextafter(1.0, 0.0));
  int q = 0;
  double r = remquo(10.0, 3.0, &q);
  printf("%g %d %g\n", r, q, significand(40.0));
  return 0;
}
