#include <cstdio>
int twice(int a) { return a * 2; }
int (*gfp)(int) = twice;
int main() {
    int (*fp)(int) = twice;
    printf("%d %d\n", fp(3), gfp(4));
    int (*fq)(int);
    fq = &twice;
    printf("%d\n", fq(5));
    return 0;
}
