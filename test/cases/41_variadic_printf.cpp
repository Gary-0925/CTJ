#include <cstdio>
int main() {
    printf("[%5d|%-5d|%05d|%x|%X|%#o|%+d]\n", 42, -7, 3, 255, 255, 8, 5);
    printf("%.3f %e %g %g %g %10.2f|%-8s|%c|%%\n", 3.14159, 12345.678, 0.0001, 1e20, 100.0, 2.5, "ab", 65);
    printf("%lld %llu %llx %hhd %hd %u\n", -5000000000LL, 18446744073709551615ULL, 255LL, 300, 70000, -1);
    char buf[64];
    int n = snprintf(buf, sizeof(buf), "%s-%d", "x", 12);
    printf("%d [%s]\n", n, buf);
    puts("hello");
    putchar('!');
    putchar('\n');
    return 0;
}
