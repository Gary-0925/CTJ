/* Portable <wctype.h> for CTJ. */
#ifndef _CTJ_WCTYPE_H
#define _CTJ_WCTYPE_H

#include <stddef.h>

#ifndef WEOF
#define WEOF ((wint_t)-1)
#endif

typedef int wint_t;
typedef unsigned long wctype_t;
typedef const int* wctrans_t;

#ifdef __cplusplus
extern "C" {
#endif

int iswalnum(wint_t c);
int iswalpha(wint_t c);
int iswblank(wint_t c);
int iswcntrl(wint_t c);
int iswdigit(wint_t c);
int iswgraph(wint_t c);
int iswlower(wint_t c);
int iswprint(wint_t c);
int iswpunct(wint_t c);
int iswspace(wint_t c);
int iswupper(wint_t c);
int iswxdigit(wint_t c);
int iswctype(wint_t c, wctype_t desc);
wctype_t wctype(const char* name);
wint_t towlower(wint_t c);
wint_t towupper(wint_t c);
wint_t towctrans(wint_t c, wctrans_t desc);
wctrans_t wctrans(const char* name);

#ifdef __cplusplus
}
#endif

#endif
