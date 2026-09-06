/* Portable <inttypes.h> for CTJ. */
#ifndef _CTJ_INTTYPES_H
#define _CTJ_INTTYPES_H

#include <stdint.h>

#ifdef __cplusplus
namespace std {
extern "C" {
#endif

intmax_t imaxabs(intmax_t j);
intmax_t imaxdiv(intmax_t numer, intmax_t denom);
intmax_t strtoimax(const char* nptr, char** endptr, int base);
uintmax_t strtoumax(const char* nptr, char** endptr, int base);

#ifdef __cplusplus
}
}
#endif

#endif
