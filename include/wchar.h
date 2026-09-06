/* Portable <wchar.h> for CTJ. */
#ifndef _CTJ_WCHAR_H
#define _CTJ_WCHAR_H

#include <stddef.h>
#include <stdarg.h>
#include <stdio.h>

#ifndef WCHAR_MIN
#define WCHAR_MIN (-2147483647 - 1)
#endif
#ifndef WCHAR_MAX
#define WCHAR_MAX 2147483647
#endif
#ifndef WEOF
#define WEOF ((wint_t)-1)
#endif

typedef int wint_t;
typedef struct { int __count; unsigned int __value; } mbstate_t;
typedef unsigned long wctype_t;
typedef const int* wctrans_t;
struct tm;

#ifdef __cplusplus
extern "C" {
#endif

wint_t btowc(int c);
int wctob(wint_t c);
size_t mbrlen(const char* s, size_t n, mbstate_t* ps);
size_t mbrtowc(wchar_t* pwc, const char* s, size_t n, mbstate_t* ps);
int mbsinit(const mbstate_t* ps);
size_t mbsrtowcs(wchar_t* dst, const char** src, size_t len, mbstate_t* ps);
size_t wcrtomb(char* s, wchar_t wc, mbstate_t* ps);
size_t wcsrtombs(char* dst, const wchar_t** src, size_t len, mbstate_t* ps);

size_t wcslen(const wchar_t* s);
wchar_t* wcscpy(wchar_t* dst, const wchar_t* src);
wchar_t* wcsncpy(wchar_t* dst, const wchar_t* src, size_t n);
wchar_t* wcscat(wchar_t* dst, const wchar_t* src);
wchar_t* wcsncat(wchar_t* dst, const wchar_t* src, size_t n);
int wcscmp(const wchar_t* a, const wchar_t* b);
int wcsncmp(const wchar_t* a, const wchar_t* b, size_t n);
int wcscoll(const wchar_t* a, const wchar_t* b);
size_t wcsxfrm(wchar_t* dst, const wchar_t* src, size_t n);
wchar_t* wcschr(const wchar_t* s, wchar_t c);
wchar_t* wcsrchr(const wchar_t* s, wchar_t c);
size_t wcsspn(const wchar_t* s, const wchar_t* accept);
size_t wcscspn(const wchar_t* s, const wchar_t* reject);
wchar_t* wcspbrk(const wchar_t* s, const wchar_t* accept);
wchar_t* wcsstr(const wchar_t* hay, const wchar_t* needle);
wchar_t* wcstok(wchar_t* s, const wchar_t* delim, wchar_t** ptr);
wint_t fgetwc(FILE* stream);
wint_t getwc(FILE* stream);
wint_t getwchar(void);
wchar_t* fgetws(wchar_t* s, int n, FILE* stream);
wint_t fputwc(wchar_t c, FILE* stream);
wint_t putwc(wchar_t c, FILE* stream);
wint_t putwchar(wchar_t c);
int fputws(const wchar_t* s, FILE* stream);
wint_t ungetwc(wint_t c, FILE* stream);
int fwide(FILE* stream, int mode);

double wcstod(const wchar_t* nptr, wchar_t** endptr);
float wcstof(const wchar_t* nptr, wchar_t** endptr);
long double wcstold(const wchar_t* nptr, wchar_t** endptr);
long wcstol(const wchar_t* nptr, wchar_t** endptr, int base);
long long wcstoll(const wchar_t* nptr, wchar_t** endptr, int base);
unsigned long wcstoul(const wchar_t* nptr, wchar_t** endptr, int base);
unsigned long long wcstoull(const wchar_t* nptr, wchar_t** endptr, int base);

wchar_t* wmemchr(const wchar_t* s, wchar_t c, size_t n);
int wmemcmp(const wchar_t* a, const wchar_t* b, size_t n);
wchar_t* wmemcpy(wchar_t* dst, const wchar_t* src, size_t n);
wchar_t* wmemmove(wchar_t* dst, const wchar_t* src, size_t n);
wchar_t* wmemset(wchar_t* s, wchar_t c, size_t n);

size_t wcsftime(wchar_t* s, size_t max, const wchar_t* fmt, const struct tm* tp);
int fwprintf(FILE* stream, const wchar_t* fmt, ...);
int wprintf(const wchar_t* fmt, ...);
int swprintf(wchar_t* s, size_t n, const wchar_t* fmt, ...);
int vfwprintf(FILE* stream, const wchar_t* fmt, va_list ap);
int vwprintf(const wchar_t* fmt, va_list ap);
int vswprintf(wchar_t* s, size_t n, const wchar_t* fmt, va_list ap);
int fwscanf(FILE* stream, const wchar_t* fmt, ...);
int wscanf(const wchar_t* fmt, ...);
int swscanf(const wchar_t* s, const wchar_t* fmt, ...);
int vfwscanf(FILE* stream, const wchar_t* fmt, va_list ap);
int vwscanf(const wchar_t* fmt, va_list ap);
int vswscanf(const wchar_t* s, const wchar_t* fmt, va_list ap);

#ifdef __cplusplus
}
#endif

#endif
