#include <cstdio>
#define LOG(fmt, ...) printf("[log] " fmt "\n", ##__VA_ARGS__)
#define STR(...) #__VA_ARGS__
#define XSTR(...) STR(__VA_ARGS__)
#define APPLY(f, ...) f(__VA_ARGS__)
#define ADD(...) add_(__VA_ARGS__)
#define SUM(...) sum_(0, ##__VA_ARGS__)
#define GNU(fmt, args...) printf(fmt, args)
#define FIRST(a, ...) a
#define COUNT(...) count_(__VA_ARGS__, 3, 2, 1, 0)
static int add_(int a, int b) { return a + b; }
static int sum_(int acc) { return acc; }
static int sum_(int acc, int x) { return acc + x; }
static int sum_(int acc, int x, int y) { return acc + x + y; }
static int count_(int a, int b, int c, int d, int e, int f) { return a * 10 + f + e * 0; }
int main() {
    LOG("hello");
    LOG("%d-%s", 42, "x");
    printf("%s|%s\n", STR(a, b  +  c), XSTR(1 + 2));
    printf("%d\n", APPLY(add_, 3, 4));
    printf("%d\n", ADD(5, 6));
    printf("%d %d\n", SUM(), SUM(1, 2));
    GNU("%d %d\n", 7, 8);
    printf("%d\n", FIRST(9, 10, 11));
    printf("%d\n", COUNT(1, 2));
    return 0;
}
