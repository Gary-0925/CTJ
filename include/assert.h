/* Portable <assert.h> for CTJ. */
#ifndef _CTJ_ASSERT_H
#define _CTJ_ASSERT_H

#ifdef NDEBUG
#define assert(e) ((void)0)
#else
#define assert(e) ((e) ? (void)0 : __ctj_assert_fail(#e, __FILE__, __LINE__))
#endif

#ifdef __cplusplus
extern "C" void __ctj_assert_fail(const char* expr, const char* file, int line);
#endif

#endif
