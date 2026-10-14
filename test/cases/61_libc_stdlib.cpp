#include <cstdio>
extern "C" {
int atoi(const char*); long atol(const char*); long long atoll(const char*); double atof(const char*);
long strtol(const char*, char**, int); unsigned long strtoul(const char*, char**, int);
long long strtoll(const char*, char**, int); unsigned long long strtoull(const char*, char**, int);
double strtod(const char*, char**); float strtof(const char*, char**);
int abs(int); long labs(long); long long llabs(long long);
void* malloc(unsigned long); void* calloc(unsigned long, unsigned long); void free(void*);
int rand(void); void srand(unsigned int);
void qsort(void*, unsigned long, unsigned long, int (*)(const void*, const void*));
void* bsearch(const void*, const void*, unsigned long, unsigned long, int (*)(const void*, const void*));
int* __errno_location(void);
}
#define errno (*__errno_location())
#define ERANGE 34
struct P { int k; int id; };
int cmpP(const void* a, const void* b) {
  const P* x = (const P*)a;
  const P* y = (const P*)b;
  return x->k - y->k;
}
int cmpI(const void* a, const void* b) { return *(const int*)a - *(const int*)b; }
int main() {
  { int ai = atoi("  -123abc"); long al = atol("77"); long long all = atoll("-9000000000"); double af = atof("3.25e2xyz"); double ag = atof("-.5"); printf("%d %ld %lld %g %g\n", ai, al, all, af, ag); }
  char* end = 0;
  long v = strtol("0x1fZ", &end, 0);
  printf("%ld [%s]\n", v, end);
  printf("%ld %ld %ld\n", strtol("0777", 0, 0), strtol("101", 0, 2), strtol("zz", 0, 36));
  { long nv = strtol("nope", &end, 10); printf("%ld %d\n", nv, end != 0); }
  errno = 0;
  { long long v = strtoll("9999999999", 0, 10); printf("%lld %d\n", v, errno == ERANGE); }
  printf("%llu %lu\n", strtoull("-1", 0, 10), strtoul("4000000000", 0, 10));
  printf("%lld %llu\n", strtoll("-9223372036854775808", 0, 10), strtoull("18446744073709551615", 0, 10));
  errno = 0;
  { long long v = strtoll("9223372036854775808", 0, 10); printf("%lld %d\n", v, errno == ERANGE); }
  { double p1 = strtod("1e-3 rest", &end); double p2 = strtod("inf", 0); double p3 = strtod("  2.5", 0); printf("%g %g %f\n", p1, p2, p3); }
  { double n1 = strtod("nan", 0), n2 = strtod("nan", 0); int z = (int)strtod("xyz", &end); printf("%d %d\n", n1 != n2, z); }
  printf("%.7g\n", strtof("0.1", 0));
  printf("%d %ld %lld\n", abs(-5), labs(-70000), llabs(-5000000000LL));
  srand(42);
  for (int i = 0; i < 5; i++) printf("%d ", rand());
  printf("\n");
  srand(1);
  { int r1 = rand(); int r2 = rand(); printf("%d %d\n", r1, r2); }
  srand(0);
  printf("%d\n", rand());
  srand(4000000000u);
  printf("%d\n", rand());
  P ps[6];
  int ks[6] = {5, 1, 5, 3, 1, 5};
  for (int i = 0; i < 6; i++) { ps[i].k = ks[i]; ps[i].id = i; }
  qsort(ps, 6, sizeof(P), cmpP);
  for (int i = 0; i < 6; i++) printf("%d/%d ", ps[i].k, ps[i].id);
  printf("\n");
  int arr[12];
  for (int i = 0; i < 12; i++) arr[i] = (i * 7919) % 13;
  qsort(arr, 12, sizeof(int), cmpI);
  for (int i = 0; i < 12; i++) printf("%d ", arr[i]);
  printf("\n");
  int key = 9;
  int* hit = (int*)bsearch(&key, arr, 12, sizeof(int), cmpI);
  int key2 = 100;
  printf("%d %d\n", hit ? (int)(hit - arr) : -1, bsearch(&key2, arr, 12, sizeof(int), cmpI) == 0);
  int* heap = (int*)malloc(sizeof(int) * 4);
  for (int i = 0; i < 4; i++) heap[i] = i * i;
  printf("%d %d\n", heap[3], calloc(2, 4) != 0);
  free(heap);
  return 0;
}
