#include <cstdio>
#define OPT(a, ...) a __VA_OPT__(, ) __VA_ARGS__
#define OPT2(...) (0 __VA_OPT__(+ 10) + 100)
#define CAT(a, b) a##b
#define CAT3(a, b, c) a##b##c
#define XCAT(a, ...) CAT(a, __VA_ARGS__)
#define STR(...) #__VA_ARGS__
#define ECHO(...) __VA_ARGS__
#define NAMED(fmt, rest...) printf(fmt, ##rest)
#define DBG(...) printf("%s=%d\n", #__VA_ARGS__, (int)(__VA_ARGS__))
static int f(int a, int b, int c) { return a * 100 + b * 10 + c; }
static int g(int a) { return a; }
int x1 = 5;
int main() {
    printf("%d %d\n", OPT(1), OPT(1, 2));
    printf("%d %d\n", OPT2(), OPT2(1, 2));
    int CAT(ab, cd) = 9;
    printf("%d\n", abcd);
    int CAT3(q, 1, z) = 4;
    printf("%d\n", q1z);
    printf("%d\n", CAT(x, 1));
    printf("%s\n", STR("q\"s", 'c', a));
    printf("%s\n", STR( a  +   b ));
    printf("%d\n", ECHO(1, 2) + 0 * 0 == 1 ? 7 : 8);
    NAMED("%s %d\n", "n", 3);
    NAMED("plain\n");
    DBG(x1 * 2);
    printf("%d\n", g(ECHO(3)));
    return 0;
}
