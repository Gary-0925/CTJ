/* Portable <pthread.h> for CTJ: declarations only, threads are not supported. */
#ifndef _CTJ_PTHREAD_H
#define _CTJ_PTHREAD_H

#include <stddef.h>
#include <sched.h>

#define PTHREAD_ONCE_INIT 0
#define PTHREAD_MUTEX_INITIALIZER { 0 }
#define PTHREAD_COND_INITIALIZER { 0 }
#define PTHREAD_RWLOCK_INITIALIZER { 0 }
#define PTHREAD_PROCESS_PRIVATE 0
#define PTHREAD_PROCESS_SHARED 1
#define PTHREAD_CREATE_JOINABLE 0
#define PTHREAD_CREATE_DETACHED 1
#define PTHREAD_CANCEL_ENABLE 0
#define PTHREAD_CANCEL_DISABLE 1
#define PTHREAD_CANCEL_DEFERRED 0
#define PTHREAD_CANCEL_ASYNCHRONOUS 1
#define PTHREAD_CANCELED ((void*)-1)
#define PTHREAD_ONCE_INIT 0
#define PTHREAD_EXPLICIT_SCHED 0
#define PTHREAD_INHERIT_SCHED 1

typedef unsigned long pthread_t;
typedef union { char __size[56]; long __align; } pthread_attr_t;
typedef union { char __size[40]; long __align; } pthread_mutex_t;
typedef union { char __size[4]; int __align; } pthread_mutexattr_t;
typedef union { char __size[48]; long __align; } pthread_cond_t;
typedef union { char __size[4]; int __align; } pthread_condattr_t;
typedef union { char __size[56]; long __align; } pthread_rwlock_t;
typedef union { char __size[8]; long __align; } pthread_rwlockattr_t;
typedef int pthread_once_t;
typedef unsigned int pthread_key_t;
typedef int pid_t;

#ifdef __cplusplus
extern "C" {
#endif

int pthread_create(pthread_t* thread, const pthread_attr_t* attr,
                   void* (*start)(void*), void* arg);
int pthread_join(pthread_t thread, void** retval);
int pthread_detach(pthread_t thread);
void pthread_exit(void* retval);
pthread_t pthread_self(void);
int pthread_equal(pthread_t a, pthread_t b);
int pthread_cancel(pthread_t thread);
int pthread_attr_init(pthread_attr_t* attr);
int pthread_attr_destroy(pthread_attr_t* attr);
int pthread_attr_setdetachstate(pthread_attr_t* attr, int state);
int pthread_attr_getdetachstate(const pthread_attr_t* attr, int* state);
int pthread_attr_setstacksize(pthread_attr_t* attr, size_t size);
int pthread_attr_getstacksize(const pthread_attr_t* attr, size_t* size);
int pthread_mutex_init(pthread_mutex_t* m, const pthread_mutexattr_t* attr);
int pthread_mutex_destroy(pthread_mutex_t* m);
int pthread_mutex_lock(pthread_mutex_t* m);
int pthread_mutex_trylock(pthread_mutex_t* m);
int pthread_mutex_unlock(pthread_mutex_t* m);
int pthread_mutexattr_init(pthread_mutexattr_t* attr);
int pthread_mutexattr_destroy(pthread_mutexattr_t* attr);
int pthread_cond_init(pthread_cond_t* c, const pthread_condattr_t* attr);
int pthread_cond_destroy(pthread_cond_t* c);
int pthread_cond_signal(pthread_cond_t* c);
int pthread_cond_broadcast(pthread_cond_t* c);
int pthread_cond_wait(pthread_cond_t* c, pthread_mutex_t* m);
int pthread_condattr_init(pthread_condattr_t* attr);
int pthread_condattr_destroy(pthread_condattr_t* attr);
int pthread_rwlock_init(pthread_rwlock_t* l, const pthread_rwlockattr_t* attr);
int pthread_rwlock_destroy(pthread_rwlock_t* l);
int pthread_rwlock_rdlock(pthread_rwlock_t* l);
int pthread_rwlock_wrlock(pthread_rwlock_t* l);
int pthread_rwlock_unlock(pthread_rwlock_t* l);
int pthread_rwlockattr_init(pthread_rwlockattr_t* attr);
int pthread_rwlockattr_destroy(pthread_rwlockattr_t* attr);
int pthread_once(pthread_once_t* once, void (*routine)(void));
int pthread_key_create(pthread_key_t* key, void (*destructor)(void*));
int pthread_key_delete(pthread_key_t key);
void* pthread_getspecific(pthread_key_t key);
int pthread_setspecific(pthread_key_t key, const void* value);

#ifdef __cplusplus
}
#endif

#endif
