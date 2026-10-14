#include <cstdio>
extern "C" {
unsigned long strlen(const char*); unsigned long strnlen(const char*, unsigned long);
char* strcpy(char*, const char*); char* strncpy(char*, const char*, unsigned long);
char* strcat(char*, const char*); char* strncat(char*, const char*, unsigned long);
int strcmp(const char*, const char*); int strncmp(const char*, const char*, unsigned long);
char* strchr(const char*, int); char* strrchr(const char*, int); char* strstr(const char*, const char*);
unsigned long strspn(const char*, const char*); unsigned long strcspn(const char*, const char*);
char* strpbrk(const char*, const char*); char* strtok(char*, const char*);
char* strdup(const char*); void* memcpy(void*, const void*, unsigned long);
void* memmove(void*, const void*, unsigned long); void* memset(void*, int, unsigned long);
int memcmp(const void*, const void*, unsigned long); void* memchr(const void*, int, unsigned long);
char* strerror(int); int strcasecmp(const char*, const char*); int strncasecmp(const char*, const char*, unsigned long);
char* stpcpy(char*, const char*); char* strndup(const char*, unsigned long);
char* strsep(char**, const char*); char* strchrnul(const char*, int); void* mempcpy(void*, const void*, unsigned long);
int ffs(int);
}
int main() {
  char buf[64];
  strcpy(buf, "hello, world");
  printf("%lu %lu %s\n", strlen(buf), strnlen(buf, 4), buf);
  strncpy(buf, "abc", 6);
  printf("[%s] %d\n", buf, buf[5]);
  strcpy(buf, "foo");
  strcat(buf, "bar");
  strncat(buf, "bazqux", 3);
  printf("%s\n", buf);
  printf("%d %d %d %d\n", strcmp("abc", "abd"), strcmp("b", "a"), strcmp("x", "x"), strncmp("abcd", "abef", 2));
  printf("%d %d\n", strcmp("ab", "abc"), strcmp("", "a"));
  const char* s = "the quick brown fox";
  printf("%ld %ld\n", (long)(strchr(s, 'q') - s), (long)(strrchr(s, 'o') - s));
  printf("%d %d\n", strchr(s, 'z') == 0, (int)(strchr(s, 0) - s));
  printf("%ld %s\n", (long)(strstr(s, "brown") - s), strstr(s, "cat") ? "y" : "n");
  printf("%lu %lu\n", strspn("aaabcd", "ab"), strcspn("aaabcd", "cd"));
  printf("%s\n", strpbrk(s, "xyz"));
  char tok[64] = "  a,b;;c d,";
  char* t = strtok(tok, " ,;");
  while (t) { printf("<%s>", t); t = strtok(0, " ,;"); }
  printf("\n");
  char* d = strdup("dup me");
  printf("%s %d\n", d, memcmp(d, "dup", 3));
  char m[16];
  memset(m, 'x', 8);
  memcpy(m + 2, "abc", 3);
  printf("%.8s\n", m);
  memmove(m + 1, m, 5);
  printf("%.8s %d\n", m, memcmp("abc", "abd", 3));
  printf("%d %d\n", (int)((char*)memchr("hello", 'l', 5) - "hello"), memchr("hello", 'z', 5) == 0);
  for (int e = 0; e <= 133; e++) printf("%s|", strerror(e));
  printf("\n");
  printf("%d %d %d\n", strcasecmp("HeLLo", "hello"), strncasecmp("ABCx", "abcy", 3), strcasecmp("a", "b") < 0);
  char c2[20];
  char* end = stpcpy(c2, "xyz");
  printf("%ld %s\n", (long)(end - c2), c2);
  char* nd = strndup("abcdef", 3);
  printf("%s %d %d\n", nd, ffs(0), ffs(40));
  char sp[32] = "a::b:c";
  char* cur = sp;
  while (cur) { char* f = strsep(&cur, ":"); printf("{%s}", f); }
  printf("\n");
  printf("%ld %s\n", (long)(strchrnul("abc", 'z') - "abc"), strcpy(buf, "q"));
  return 0;
}
