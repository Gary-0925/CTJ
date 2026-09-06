/* Portable <string.h> for CTJ. Functions are defined here so that programs
   using them transpile to self-contained code. */
#ifndef _CTJ_STRING_H
#define _CTJ_STRING_H

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

static inline void* memcpy(void* dst, const void* src, size_t n) {
  unsigned char* d = (unsigned char*)dst;
  const unsigned char* s = (const unsigned char*)src;
  for (size_t i = 0; i < n; i++) d[i] = s[i];
  return dst;
}

static inline void* memmove(void* dst, const void* src, size_t n) {
  unsigned char* d = (unsigned char*)dst;
  const unsigned char* s = (const unsigned char*)src;
  if (d < s) {
    for (size_t i = 0; i < n; i++) d[i] = s[i];
  } else {
    while (n > 0) { n--; d[n] = s[n]; }
  }
  return dst;
}

static inline void* memset(void* dst, int c, size_t n) {
  unsigned char* d = (unsigned char*)dst;
  for (size_t i = 0; i < n; i++) d[i] = (unsigned char)c;
  return dst;
}

static inline int memcmp(const void* a, const void* b, size_t n) {
  const unsigned char* p = (const unsigned char*)a;
  const unsigned char* q = (const unsigned char*)b;
  for (size_t i = 0; i < n; i++) {
    if (p[i] != q[i]) return p[i] < q[i] ? -1 : 1;
  }
  return 0;
}

static inline void* memchr(const void* s, int c, size_t n) {
  const unsigned char* p = (const unsigned char*)s;
  for (size_t i = 0; i < n; i++) {
    if (p[i] == (unsigned char)c) return (void*)(p + i);
  }
  return NULL;
}

static inline size_t strlen(const char* s) {
  size_t n = 0;
  while (s[n] != '\0') n++;
  return n;
}

static inline int strcmp(const char* a, const char* b) {
  size_t i = 0;
  while (a[i] != '\0' && a[i] == b[i]) i++;
  if (a[i] == b[i]) return 0;
  return (unsigned char)a[i] < (unsigned char)b[i] ? -1 : 1;
}

static inline int strncmp(const char* a, const char* b, size_t n) {
  size_t i = 0;
  while (i < n && a[i] != '\0' && a[i] == b[i]) i++;
  if (i == n || a[i] == b[i]) return 0;
  return (unsigned char)a[i] < (unsigned char)b[i] ? -1 : 1;
}

static inline char* strcpy(char* dst, const char* src) {
  size_t i = 0;
  while (src[i] != '\0') { dst[i] = src[i]; i++; }
  dst[i] = '\0';
  return dst;
}

static inline char* strncpy(char* dst, const char* src, size_t n) {
  size_t i = 0;
  while (i < n && src[i] != '\0') { dst[i] = src[i]; i++; }
  while (i < n) { dst[i] = '\0'; i++; }
  return dst;
}

static inline char* strcat(char* dst, const char* src) {
  size_t n = strlen(dst);
  size_t i = 0;
  while (src[i] != '\0') { dst[n + i] = src[i]; i++; }
  dst[n + i] = '\0';
  return dst;
}

static inline char* strncat(char* dst, const char* src, size_t n) {
  size_t len = strlen(dst);
  size_t i = 0;
  while (i < n && src[i] != '\0') { dst[len + i] = src[i]; i++; }
  dst[len + i] = '\0';
  return dst;
}

static inline char* strchr(const char* s, int c) {
  for (size_t i = 0;; i++) {
    if (s[i] == (char)c) return (char*)(s + i);
    if (s[i] == '\0') return NULL;
  }
}

static inline char* strrchr(const char* s, int c) {
  const char* found = NULL;
  for (size_t i = 0;; i++) {
    if (s[i] == (char)c) found = s + i;
    if (s[i] == '\0') return (char*)found;
  }
}

static inline char* strstr(const char* hay, const char* needle) {
  if (needle[0] == '\0') return (char*)hay;
  for (size_t i = 0; hay[i] != '\0'; i++) {
    size_t j = 0;
    while (hay[i + j] == needle[j]) {
      j++;
      if (needle[j] == '\0') return (char*)(hay + i);
    }
  }
  return NULL;
}

static inline size_t strspn(const char* s, const char* accept) {
  size_t n = 0;
  while (s[n] != '\0' && strchr(accept, s[n]) != NULL) n++;
  return n;
}

static inline size_t strcspn(const char* s, const char* reject) {
  size_t n = 0;
  while (s[n] != '\0' && strchr(reject, s[n]) == NULL) n++;
  return n;
}

static inline char* strtok(char* s, const char* delim) {
  static char* saved = NULL;
  if (s != NULL) saved = s;
  if (saved == NULL) return NULL;
  while (*saved != '\0' && strchr(delim, *saved) != NULL) saved++;
  if (*saved == '\0') { saved = NULL; return NULL; }
  char* start = saved;
  while (*saved != '\0' && strchr(delim, *saved) == NULL) saved++;
  if (*saved != '\0') { *saved = '\0'; saved++; } else { saved = NULL; }
  return start;
}

extern char* strerror(int errnum);

#ifdef __cplusplus
}
#endif

/* libstdc++ uses the compiler builtins; route them to the definitions above. */
#define __builtin_memcpy memcpy
#define __builtin_memmove memmove
#define __builtin_memset memset
#define __builtin_memcmp memcmp
#define __builtin_memchr memchr
#define __builtin_strlen strlen
#define __builtin_strcmp strcmp
#define __builtin_strncmp strncmp
#define __builtin_strchr strchr
#define __builtin_strstr strstr

#endif
