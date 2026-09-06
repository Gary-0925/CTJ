/* Portable <sched.h> for CTJ. */
#ifndef _CTJ_SCHED_H
#define _CTJ_SCHED_H

#include <stddef.h>
#include <time.h>

#define SCHED_OTHER 0
#define SCHED_FIFO 1
#define SCHED_RR 2

struct sched_param {
  int sched_priority;
};

#ifdef __cplusplus
extern "C" {
#endif

int sched_yield(void);
int sched_get_priority_max(int policy);
int sched_get_priority_min(int policy);

#ifdef __cplusplus
}
#endif

#endif
