/* Portable <stdlib.h> for CTJ. */
#ifndef _CTJ_STDLIB_H
#define _CTJ_STDLIB_H

#include <stddef.h>

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1
#define RAND_MAX 2147483647
#define MB_CUR_MAX 6

typedef struct { int quot; int rem; } div_t;
typedef struct { long quot; long rem; } ldiv_t;
typedef struct { long long quot; long long rem; } lldiv_t;

#ifdef __cplusplus
extern "C" {
#endif

static inline int abs(int x) { return x < 0 ? -x : x; }
static inline long labs(long x) { return x < 0 ? -x : x; }
static inline long long llabs(long long x) { return x < 0 ? -x : x; }
static inline div_t div(int n, int d) {
  div_t r;
  r.quot = n / d;
  r.rem = n % d;
  return r;
}
static inline ldiv_t ldiv(long n, long d) {
  ldiv_t r;
  r.quot = n / d;
  r.rem = n % d;
  return r;
}
static inline lldiv_t lldiv(long long n, long long d) {
  lldiv_t r;
  r.quot = n / d;
  r.rem = n % d;
  return r;
}

double atof(const char* nptr);
double strtod(const char* nptr, char** endptr);
float strtof(const char* nptr, char** endptr);
long double strtold(const char* nptr, char** endptr);
/* The integer conversions are written out here. Overflow is not clamped to the
   limits of the type, so an out-of-range value wraps. */
static inline unsigned long long __ctj_strtoull(const char* s, char** endptr, int base, int* neg) {
  const char* p = s;
  while (*p == ' ' || (*p >= 9 && *p <= 13)) p++;
  *neg = 0;
  if (*p == '+' || *p == '-') {
    *neg = *p == '-';
    p++;
  }
  if (base == 0 || base == 16) {
    if (p[0] == '0' && (p[1] == 'x' || p[1] == 'X')) {
      base = 16;
      p += 2;
    }
  }
  if (base == 0) base = p[0] == '0' ? 8 : 10;
  unsigned long long v = 0;
  const char* q = p;
  for (;; q++) {
    int d;
    if (*q >= '0' && *q <= '9') d = *q - '0';
    else if (*q >= 'a' && *q <= 'z') d = *q - 'a' + 10;
    else if (*q >= 'A' && *q <= 'Z') d = *q - 'A' + 10;
    else break;
    if (d >= base) break;
    v = v * base + d;
  }
  if (endptr) *endptr = (char*)(q == p ? s : q);
  return v;
}
static inline unsigned long long strtoull(const char* nptr, char** endptr, int base) {
  int neg;
  unsigned long long v = __ctj_strtoull(nptr, endptr, base, &neg);
  return neg ? -v : v;
}
static inline long long strtoll(const char* nptr, char** endptr, int base) {
  int neg;
  unsigned long long v = __ctj_strtoull(nptr, endptr, base, &neg);
  return (long long)(neg ? -v : v);
}
static inline unsigned long strtoul(const char* nptr, char** endptr, int base) {
  int neg;
  unsigned long long v = __ctj_strtoull(nptr, endptr, base, &neg);
  return (unsigned long)(neg ? -v : v);
}
static inline long strtol(const char* nptr, char** endptr, int base) {
  int neg;
  unsigned long long v = __ctj_strtoull(nptr, endptr, base, &neg);
  return (long)(neg ? -v : v);
}
static inline int atoi(const char* nptr) { return (int)strtol(nptr, 0, 10); }
static inline long atol(const char* nptr) { return strtol(nptr, 0, 10); }
static inline long long atoll(const char* nptr) { return strtoll(nptr, 0, 10); }

void* malloc(size_t size);
void* calloc(size_t nmemb, size_t size);
void* realloc(void* ptr, size_t size);
void free(void* ptr);
void* aligned_alloc(size_t alignment, size_t size);

/* exit and abort end the run: they throw, and run() turns the throw into the exit code. */
void abort(void) { __ctj_js("(function () { throw { $exit: 134 }; })()"); }
void exit(int status) { __ctj_js("(function (c) { throw { $exit: c }; })($1)", status); }
void _Exit(int status);
int atexit(void (*func)(void));
char* getenv(const char* name);
int system(const char* command);

void* bsearch(const void* key, const void* base, size_t nmemb, size_t size,
              int (*compar)(const void*, const void*));
void qsort(void* base, size_t nmemb, size_t size,
           int (*compar)(const void*, const void*));

int rand(void);
void srand(unsigned int seed);

int mblen(const char* s, size_t n);
int mbtowc(wchar_t* pwc, const char* s, size_t n);
int wctomb(char* s, wchar_t wc);
size_t mbstowcs(wchar_t* dst, const char* src, size_t n);
size_t wcstombs(char* dst, const wchar_t* src, size_t n);

#ifdef __cplusplus
}
#endif

#endif
