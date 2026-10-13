#include <iostream>
#include <climits>
using namespace std;
long long twice(const long long& r) { return r + r; }
void bump(long long& r, int by = 5) { r += by; }
long long dflt(long long x = 7) { return x * 2; }
struct S {
    long long v;
    long long arr[3];
    S(int x) : v(x) {}
};
int main() {
    cout << twice(21) << " " << twice(LLONG_MAX / 2) << endl;
    long long a = 10;
    bump(a);
    bump(a, 100);
    cout << a << endl;
    cout << dflt() << " " << dflt(3) << endl;
    bool c = a > 5;
    long long t = c ? a : 5;
    long long u = !c ? a : 5;
    cout << t + 1 << " " << u + 1 << endl;
    S s(42);
    cout << s.v * 2 << " " << s.arr[1] << " " << (s.arr[0] - 1) << endl;
    long long z[4];
    z[2] = z[0] - 1;
    cout << z[2] << " " << z[3] << endl;
    switch (a) {
        case 115: cout << "matched" << endl; break;
        default: cout << "default" << endl;
    }
    long long q = 1;
    while (q < 1000000000000LL) q *= 7;
    cout << q << " " << (q > 2147483647) << endl;
    int i = 3;
    long long m = i > 2 ? 2LL * i : -1;
    cout << m << endl;
    unsigned long long big = 0;
    big = big - 1;
    cout << big << " " << (big == 18446744073709551615ULL) << endl;
    long long neg = -5;
    unsigned long long conv = neg;
    cout << conv << " " << (neg < 0) << endl;
    cout << (char)(65LL + 1) << " " << (short)(70000LL) << " " << (double)(a) / 4 << endl;
    return 0;
}
