/* Portable <stddef.h> for CTJ. */
#ifndef _CTJ_STDDEF_H
#define _CTJ_STDDEF_H

typedef unsigned long size_t;
typedef long ptrdiff_t;

#ifndef __cplusplus
typedef int wchar_t;
#endif

#undef NULL
#define NULL 0

#define offsetof(type, member) __builtin_offsetof(type, member)

#endif
