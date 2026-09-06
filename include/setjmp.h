/* Portable <setjmp.h> for CTJ. */
#ifndef _CTJ_SETJMP_H
#define _CTJ_SETJMP_H

typedef long jmp_buf[8];
typedef long sigjmp_buf[9];

#ifdef __cplusplus
extern "C" {
#endif

int setjmp(jmp_buf env);
int sigsetjmp(sigjmp_buf env, int savemask);
void longjmp(jmp_buf env, int val);
void siglongjmp(sigjmp_buf env, int val);

#ifdef __cplusplus
}
#endif

#endif
