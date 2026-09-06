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
int atoi(const char* nptr);
long atol(const char* nptr);
long long atoll(const char* nptr);
double strtod(const char* nptr, char** endptr);
float strtof(const char* nptr, char** endptr);
long double strtold(const char* nptr, char** endptr);
long strtol(const char* nptr, char** endptr, int base);
long long strtoll(const char* nptr, char** endptr, int base);
unsigned long strtoul(const char* nptr, char** endptr, int base);
unsigned long long strtoull(const char* nptr, char** endptr, int base);

void* malloc(size_t size);
void* calloc(size_t nmemb, size_t size);
void* realloc(void* ptr, size_t size);
void free(void* ptr);
void* aligned_alloc(size_t alignment, size_t size);

void abort(void);
void exit(int status);
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
