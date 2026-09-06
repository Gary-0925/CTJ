/* Portable <unistd.h> for CTJ. */
#ifndef _CTJ_UNISTD_H
#define _CTJ_UNISTD_H

#include <stddef.h>

#define STDIN_FILENO 0
#define STDOUT_FILENO 1
#define STDERR_FILENO 2
#define F_OK 0
#define R_OK 4
#define W_OK 2
#define X_OK 1

typedef long ssize_t;
typedef long off_t;
typedef unsigned int useconds_t;
typedef long pid_t;

#ifdef __cplusplus
extern "C" {
#endif

ssize_t read(int fd, void* buf, size_t count);
ssize_t write(int fd, const void* buf, size_t count);
int close(int fd);
off_t lseek(int fd, off_t offset, int whence);
int access(const char* path, int mode);
unsigned int sleep(unsigned int seconds);
int usleep(useconds_t usec);
pid_t getpid(void);
pid_t getppid(void);
char* getcwd(char* buf, size_t size);
int isatty(int fd);

#ifdef __cplusplus
}
#endif

#endif
