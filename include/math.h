/* Portable <math.h> for CTJ. Every function is defined in terms of the compiler
   builtins that the transpiler maps onto the target's math library. */
#ifndef _CTJ_MATH_H
#define _CTJ_MATH_H

#define __ctj_isnan(x) ((x) != (x))
#define __ctj_isinf(x) ((x) != 0.0 && (x) * 0.5 == (x))

#define HUGE_VAL __builtin_huge_val()
#define HUGE_VALF __builtin_inff()
#define HUGE_VALL __builtin_inff()
#define INFINITY __builtin_inff()
#define NAN __builtin_nanf("")

#define FP_NAN 0
#define FP_INFINITE 1
#define FP_ZERO 2
#define FP_SUBNORMAL 3
#define FP_NORMAL 4

#define FP_ILOGB0 (-2147483647 - 1)
#define FP_ILOGBNAN 2147483647

#define M_E 2.7182818284590452354
#define M_LOG2E 1.4426950408889634074
#define M_LOG10E 0.43429448190325182765
#define M_LN2 0.69314718055994530942
#define M_LN10 2.30258509299404568402
#define M_PI 3.14159265358979323846
#define M_PI_2 1.57079632679489661923
#define M_PI_4 0.78539816339744830962
#define M_1_PI 0.31830988618379067154
#define M_2_PI 0.63661977236758134308
#define M_2_SQRTPI 1.12837916709551257390
#define M_SQRT2 1.41421356237309504880
#define M_SQRT1_2 0.70710678118654752440

typedef float float_t;
typedef double double_t;

#ifdef __cplusplus
extern "C" {
#endif

static inline double acos(double x) { return __builtin_acos(x); }

static inline float acosf(float x) { return (float)__builtin_acos(x); }

static inline long double acosl(long double x) { return __builtin_acos(x); }

static inline double asin(double x) { return __builtin_asin(x); }

static inline float asinf(float x) { return (float)__builtin_asin(x); }

static inline long double asinl(long double x) { return __builtin_asin(x); }

static inline double atan(double x) { return __builtin_atan(x); }

static inline float atanf(float x) { return (float)__builtin_atan(x); }

static inline long double atanl(long double x) { return __builtin_atan(x); }

static inline double atan2(double x, double y) { return __builtin_atan2(x, y); }

static inline float atan2f(float x, float y) { return (float)__builtin_atan2(x, y); }

static inline long double atan2l(long double x, long double y) { return __builtin_atan2(x, y); }

static inline double cbrt(double x) { return __builtin_cbrt(x); }

static inline float cbrtf(float x) { return (float)__builtin_cbrt(x); }

static inline long double cbrtl(long double x) { return __builtin_cbrt(x); }

static inline double ceil(double x) { return __builtin_ceil(x); }

static inline float ceilf(float x) { return (float)__builtin_ceil(x); }

static inline long double ceill(long double x) { return __builtin_ceil(x); }

static inline double cos(double x) { return __builtin_cos(x); }

static inline float cosf(float x) { return (float)__builtin_cos(x); }

static inline long double cosl(long double x) { return __builtin_cos(x); }

static inline double cosh(double x) { return __builtin_cosh(x); }

static inline float coshf(float x) { return (float)__builtin_cosh(x); }

static inline long double coshl(long double x) { return __builtin_cosh(x); }

static inline double exp(double x) { return __builtin_exp(x); }

static inline float expf(float x) { return (float)__builtin_exp(x); }

static inline long double expl(long double x) { return __builtin_exp(x); }

static inline double exp2(double x) { return __builtin_exp2(x); }

static inline float exp2f(float x) { return (float)__builtin_exp2(x); }

static inline long double exp2l(long double x) { return __builtin_exp2(x); }

static inline double fabs(double x) { return __builtin_fabs(x); }

static inline float fabsf(float x) { return (float)__builtin_fabs(x); }

static inline long double fabsl(long double x) { return __builtin_fabs(x); }

static inline double floor(double x) { return __builtin_floor(x); }

static inline float floorf(float x) { return (float)__builtin_floor(x); }

static inline long double floorl(long double x) { return __builtin_floor(x); }

static inline double fmax(double x, double y) { return __builtin_fmax(x, y); }

static inline float fmaxf(float x, float y) { return (float)__builtin_fmax(x, y); }

static inline long double fmaxl(long double x, long double y) { return __builtin_fmax(x, y); }

static inline double fmin(double x, double y) { return __builtin_fmin(x, y); }

static inline float fminf(float x, float y) { return (float)__builtin_fmin(x, y); }

static inline long double fminl(long double x, long double y) { return __builtin_fmin(x, y); }

static inline double fmod(double x, double y) { return __builtin_fmod(x, y); }

static inline float fmodf(float x, float y) { return (float)__builtin_fmod(x, y); }

static inline long double fmodl(long double x, long double y) { return __builtin_fmod(x, y); }

static inline double hypot(double x, double y) { return __builtin_hypot(x, y); }

static inline float hypotf(float x, float y) { return (float)__builtin_hypot(x, y); }

static inline long double hypotl(long double x, long double y) { return __builtin_hypot(x, y); }

static inline double log(double x) { return __builtin_log(x); }

static inline float logf(float x) { return (float)__builtin_log(x); }

static inline long double logl(long double x) { return __builtin_log(x); }

static inline double log2(double x) { return __builtin_log2(x); }

static inline float log2f(float x) { return (float)__builtin_log2(x); }

static inline long double log2l(long double x) { return __builtin_log2(x); }

static inline double pow(double x, double y) { return __builtin_pow(x, y); }

static inline float powf(float x, float y) { return (float)__builtin_pow(x, y); }

static inline long double powl(long double x, long double y) { return __builtin_pow(x, y); }

static inline double round(double x) { return __builtin_round(x); }

static inline float roundf(float x) { return (float)__builtin_round(x); }

static inline long double roundl(long double x) { return __builtin_round(x); }

static inline double sin(double x) { return __builtin_sin(x); }

static inline float sinf(float x) { return (float)__builtin_sin(x); }

static inline long double sinl(long double x) { return __builtin_sin(x); }

static inline double sinh(double x) { return __builtin_sinh(x); }

static inline float sinhf(float x) { return (float)__builtin_sinh(x); }

static inline long double sinhl(long double x) { return __builtin_sinh(x); }

static inline double sqrt(double x) { return __builtin_sqrt(x); }

static inline float sqrtf(float x) { return (float)__builtin_sqrt(x); }

static inline long double sqrtl(long double x) { return __builtin_sqrt(x); }

static inline double tan(double x) { return __builtin_tan(x); }

static inline float tanf(float x) { return (float)__builtin_tan(x); }

static inline long double tanl(long double x) { return __builtin_tan(x); }

static inline double tanh(double x) { return __builtin_tanh(x); }

static inline float tanhf(float x) { return (float)__builtin_tanh(x); }

static inline long double tanhl(long double x) { return __builtin_tanh(x); }

static inline double trunc(double x) { return __builtin_trunc(x); }

static inline float truncf(float x) { return (float)__builtin_trunc(x); }

static inline long double truncl(long double x) { return __builtin_trunc(x); }

static inline double log10(double x) { return __builtin_log10(x); }
static inline float log10f(float x) { return (float)__builtin_log10(x); }
static inline long double log10l(long double x) { return __builtin_log10(x); }

static inline double log1p(double x) { return __builtin_log1p(x); }
static inline float log1pf(float x) { return (float)__builtin_log1p(x); }
static inline long double log1pl(long double x) { return __builtin_log1p(x); }

static inline double expm1(double x) { return __builtin_expm1(x); }
static inline float expm1f(float x) { return (float)__builtin_expm1(x); }
static inline long double expm1l(long double x) { return __builtin_expm1(x); }

static inline double asinh(double x) { return __builtin_asinh(x); }
static inline float asinhf(float x) { return (float)__builtin_asinh(x); }
static inline long double asinhl(long double x) { return __builtin_asinh(x); }

static inline double acosh(double x) { return __builtin_acosh(x); }
static inline float acoshf(float x) { return (float)__builtin_acosh(x); }
static inline long double acoshl(long double x) { return __builtin_acosh(x); }

static inline double atanh(double x) { return __builtin_atanh(x); }
static inline float atanhf(float x) { return (float)__builtin_atanh(x); }
static inline long double atanhl(long double x) { return __builtin_atanh(x); }

static inline double nearbyint(double x) { return __builtin_round(x); }
static inline float nearbyintf(float x) { return (float)__builtin_round(x); }
static inline long double nearbyintl(long double x) { return __builtin_round(x); }

static inline double rint(double x) { return __builtin_round(x); }
static inline float rintf(float x) { return (float)__builtin_round(x); }
static inline long double rintl(long double x) { return __builtin_round(x); }

static inline double copysign(double x, double y) {
  return __builtin_fabs(x) * (1.0 / y < 0.0 ? -1.0 : 1.0);
}
static inline float copysignf(float x, float y) { return (float)copysign(x, y); }
static inline long double copysignl(long double x, long double y) { return copysign(x, y); }

static inline double fdim(double x, double y) { return x > y ? x - y : 0.0; }
static inline float fdimf(float x, float y) { return (float)fdim(x, y); }
static inline long double fdiml(long double x, long double y) { return fdim(x, y); }

static inline double fma(double x, double y, double z) { return x * y + z; }
static inline float fmaf(float x, float y, float z) { return (float)fma(x, y, z); }
static inline long double fmal(long double x, long double y, long double z) { return fma(x, y, z); }

static inline double scalbn(double x, int n) { return x * __builtin_pow(2.0, (double)n); }
static inline float scalbnf(float x, int n) { return (float)scalbn(x, n); }
static inline long double scalbnl(long double x, int n) { return scalbn(x, n); }
static inline double scalbln(double x, long n) { return x * __builtin_pow(2.0, (double)n); }
static inline float scalblnf(float x, long n) { return (float)scalbln(x, n); }
static inline long double scalblnl(long double x, long n) { return scalbln(x, n); }

static inline double logb(double x) {
  return __builtin_floor(__builtin_log(__builtin_fabs(x)) / __builtin_log(2.0));
}
static inline float logbf(float x) { return (float)logb(x); }
static inline long double logbl(long double x) { return logb(x); }

static inline int ilogb(double x) { return (int)logb(x); }
static inline int ilogbf(float x) { return (int)logb(x); }
static inline int ilogbl(long double x) { return (int)logb(x); }

static inline long lrint(double x) { return (long)__builtin_round(x); }
static inline long lrintf(float x) { return (long)__builtin_round(x); }
static inline long lrintl(long double x) { return (long)__builtin_round(x); }
static inline long long llrint(double x) { return (long long)__builtin_round(x); }
static inline long long llrintf(float x) { return (long long)__builtin_round(x); }
static inline long long llrintl(long double x) { return (long long)__builtin_round(x); }

static inline long lround(double x) { return (long)__builtin_round(x); }
static inline long lroundf(float x) { return (long)__builtin_round(x); }
static inline long lroundl(long double x) { return (long)__builtin_round(x); }
static inline long long llround(double x) { return (long long)__builtin_round(x); }
static inline long long llroundf(float x) { return (long long)__builtin_round(x); }
static inline long long llroundl(long double x) { return (long long)__builtin_round(x); }

static inline double nextafter(double x, double y) { return y > x ? x + 2.2250738585072014e-308 : x - 2.2250738585072014e-308; }
static inline float nextafterf(float x, float y) { return (float)nextafter(x, y); }
static inline long double nextafterl(long double x, long double y) { return nextafter(x, y); }
static inline double nexttoward(double x, long double y) { return nextafter(x, (double)y); }
static inline float nexttowardf(float x, long double y) { return (float)nextafter(x, (double)y); }
static inline long double nexttowardl(long double x, long double y) { return nextafter(x, (double)y); }

static inline double remainder(double x, double y) { return x - y * __builtin_round(x / y); }
static inline float remainderf(float x, float y) { return (float)remainder(x, y); }
static inline long double remainderl(long double x, long double y) { return remainder(x, y); }

static inline double remquo(double x, double y, int* quo) {
  *quo = (int)__builtin_round(x / y);
  return x - y * *quo;
}
static inline float remquof(float x, float y, int* quo) { return (float)remquo(x, y, quo); }
static inline long double remquol(long double x, long double y, int* quo) { return remquo(x, y, quo); }

static inline double frexp(double x, int* exp) {
  if (x == 0.0 || __ctj_isnan(x) || __ctj_isinf(x)) { *exp = 0; return x; }
  int e = 0;
  double m = x;
  while (__builtin_fabs(m) >= 1.0) { m *= 0.5; e++; }
  while (__builtin_fabs(m) < 0.5) { m *= 2.0; e--; }
  *exp = e;
  return m;
}
static inline float frexpf(float x, int* exp) { return (float)frexp(x, exp); }
static inline long double frexpl(long double x, int* exp) { return frexp(x, exp); }

static inline double ldexp(double x, int exp) {
  double r = x;
  while (exp > 0) { r *= 2.0; exp--; }
  while (exp < 0) { r *= 0.5; exp++; }
  return r;
}
static inline float ldexpf(float x, int exp) { return (float)ldexp(x, exp); }
static inline long double ldexpl(long double x, int exp) { return ldexp(x, exp); }

static inline double modf(double x, double* iptr) {
  double i = __builtin_trunc(x);
  *iptr = i;
  return x - i;
}
static inline float modff(float x, float* iptr) {
  double i;
  double f = modf(x, &i);
  *iptr = (float)i;
  return (float)f;
}
static inline long double modfl(long double x, long double* iptr) {
  double i;
  double f = modf(x, &i);
  *iptr = i;
  return f;
}

static inline int isnan(double x) { return __ctj_isnan(x); }
static inline int isinf(double x) { return __ctj_isinf(x); }
static inline int isfinite(double x) { return !__ctj_isnan(x) && !__ctj_isinf(x); }
static inline int isnormal(double x) {
  return __ctj_isfinite(x) && x != 0.0 && __builtin_fabs(x) >= 2.2250738585072014e-308;
}
static inline int signbit(double x) { return 1.0 / x < 0.0; }
static inline int fpclassify(double x) {
  if (__ctj_isnan(x)) return FP_NAN;
  if (__ctj_isinf(x)) return FP_INFINITE;
  if (x == 0.0) return FP_ZERO;
  if (__builtin_fabs(x) < 2.2250738585072014e-308) return FP_SUBNORMAL;
  return FP_NORMAL;
}

static inline int isgreater(double x, double y) { return x > y; }
static inline int isgreaterequal(double x, double y) { return x >= y; }
static inline int isless(double x, double y) { return x < y; }
static inline int islessequal(double x, double y) { return x <= y; }
static inline int islessgreater(double x, double y) { return x < y || x > y; }
static inline int isunordered(double x, double y) { return __ctj_isnan(x) || __ctj_isnan(y); }

double erf(double x);
double erfc(double x);
float erff(float x);
float erfcf(float x);
long double erfl(long double x);
long double erfcl(long double x);
double tgamma(double x);
double lgamma(double x);
float tgammaf(float x);
float lgammaf(float x);
long double tgammal(long double x);
long double lgammal(long double x);
double nan(const char* tag);
float nanf(const char* tag);
long double nanl(const char* tag);
#ifdef __cplusplus
}
#endif

/* libstdc++ reaches for the compiler builtins; route them to the code above. */
#define __builtin_isnan(x) __ctj_isnan(x)
#define __builtin_isinf(x) __ctj_isinf(x)
#define __builtin_isfinite(x) (!__ctj_isnan(x) && !__ctj_isinf(x))
#define __builtin_isnormal(x) (!__ctj_isnan(x) && !__ctj_isinf(x) && (x) != 0.0)
#define __builtin_signbit(x) (1.0 / (x) < 0.0)
#define __builtin_fpclassify(z, s, n, sn, i, ...) __ctj_isnan(__VA_ARGS__) ? (z) : (__ctj_isinf(__VA_ARGS__) ? (i) : (n))
#define __builtin_isgreater(x, y) ((x) > (y))
#define __builtin_isgreaterequal(x, y) ((x) >= (y))
#define __builtin_isless(x, y) ((x) < (y))
#define __builtin_islessequal(x, y) ((x) <= (y))
#define __builtin_islessgreater(x, y) ((x) < (y) || (x) > (y))
#define __builtin_isunordered(x, y) (__ctj_isnan(x) || __ctj_isnan(y))

#endif
