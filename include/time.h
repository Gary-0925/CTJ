/* Portable <time.h> for CTJ. */
#ifndef _CTJ_TIME_H
#define _CTJ_TIME_H

#include <stddef.h>

#define CLOCKS_PER_SEC 1000000L

typedef long time_t;
typedef long clock_t;

struct timespec {
  time_t tv_sec;
  long tv_nsec;
};

struct tm {
  int tm_sec;
  int tm_min;
  int tm_hour;
  int tm_mday;
  int tm_mon;
  int tm_year;
  int tm_wday;
  int tm_yday;
  int tm_isdst;
};

#ifdef __cplusplus
extern "C" {
#endif

clock_t clock(void);
double difftime(time_t end, time_t start);
time_t mktime(struct tm* tp);
time_t time(time_t* tp);
char* asctime(const struct tm* tp);
char* ctime(const time_t* tp);
struct tm* gmtime(const time_t* tp);
struct tm* localtime(const time_t* tp);
size_t strftime(char* s, size_t max, const char* fmt, const struct tm* tp);

#ifdef __cplusplus
}
#endif

#endif
