/* Portable <stdio.h> for CTJ. */
#ifndef _CTJ_STDIO_H
#define _CTJ_STDIO_H

#include <stddef.h>
#include <stdarg.h>

#define EOF (-1)
#define SEEK_SET 0
#define SEEK_CUR 1
#define SEEK_END 2
#define BUFSIZ 8192
#define FILENAME_MAX 4096
#define L_tmpnam 20
#define TMP_MAX 238328
#define FOPEN_MAX 16
#define _IOFBF 0
#define _IOLBF 1
#define _IONBF 2

struct _IO_FILE { int __flags; int __dummy; };

typedef struct _IO_FILE FILE;
typedef unsigned long fpos_t;

extern FILE* stdin;
extern FILE* stdout;
extern FILE* stderr;

#ifdef __cplusplus
extern "C" {
#endif

int printf(const char* fmt, ...);
int fprintf(FILE* stream, const char* fmt, ...);
int sprintf(char* s, const char* fmt, ...);
int snprintf(char* s, size_t n, const char* fmt, ...);
int vprintf(const char* fmt, va_list ap);
int vfprintf(FILE* stream, const char* fmt, va_list ap);
int vsprintf(char* s, const char* fmt, va_list ap);
int vsnprintf(char* s, size_t n, const char* fmt, va_list ap);
int scanf(const char* fmt, ...);
int fscanf(FILE* stream, const char* fmt, ...);
int sscanf(const char* s, const char* fmt, ...);
int vscanf(const char* fmt, va_list ap);
int vfscanf(FILE* stream, const char* fmt, va_list ap);
int vsscanf(const char* s, const char* fmt, va_list ap);

int fgetc(FILE* stream);
char* fgets(char* s, int n, FILE* stream);
int fputc(int c, FILE* stream);
int fputs(const char* s, FILE* stream);
int getc(FILE* stream);
int getchar(void);
char* gets(char* s);
int putc(int c, FILE* stream);
int putchar(int c);
int puts(const char* s);
int ungetc(int c, FILE* stream);

size_t fread(void* ptr, size_t size, size_t nmemb, FILE* stream);
size_t fwrite(const void* ptr, size_t size, size_t nmemb, FILE* stream);
int fseek(FILE* stream, long offset, int whence);
long ftell(FILE* stream);
void rewind(FILE* stream);
int fgetpos(FILE* stream, fpos_t* pos);
int fsetpos(FILE* stream, const fpos_t* pos);
void clearerr(FILE* stream);
int feof(FILE* stream);
int ferror(FILE* stream);
void perror(const char* s);

FILE* fopen(const char* path, const char* mode);
FILE* freopen(const char* path, const char* mode, FILE* stream);
int fclose(FILE* stream);
int fflush(FILE* stream);
int remove(const char* path);
int rename(const char* oldp, const char* newp);
FILE* tmpfile(void);
char* tmpnam(char* s);
int setvbuf(FILE* stream, char* buf, int mode, size_t size);
void setbuf(FILE* stream, char* buf);
int fwide(FILE* stream, int mode);

#ifdef __cplusplus
}
#endif

#endif
