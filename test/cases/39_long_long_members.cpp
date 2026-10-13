#include <iostream>
#include <vector>
#include <map>
using namespace std;
const long long K = 1LL << 40;
long long G = -3;
constexpr unsigned long long MASK = ~0ULL >> 4;
struct A {
    static const long long S = 1LL << 50;
    static long long cnt;
    long long m = 9;
    unsigned long long u;
    A() : u(7) {}
};
long long A::cnt = 11;
template <long long N> struct T { static const long long v = N * 2; };
int partial();
int main() {
    cout << K << " " << G << " " << MASK << " " << A::S << " " << A::cnt << endl;
    A a;
    cout << a.m << " " << a.u << " " << T<21>::v << endl;
    long long arr[3] = {1, 2};
    cout << arr[2] << " " << arr[0] + arr[1] << endl;
    vector<long long> v(3);
    v[1] = -1;
    cout << v[0] << " " << v[1] << " " << v.size() << endl;
    map<long long, unsigned long long> mp;
    mp[5] += 3;
    mp[-5] = 1;
    cout << mp[5] << " " << mp[-5] << " " << mp.size() << endl;
    long long p = 3;
    long long* pp = &p;
    pp[0] += 4;
    cout << p << " " << *pp * 2 << endl;
    for (long long i = 0; i < 3; i++) cout << i * K << (i < 2 ? "," : "\n");
    partial();
    return 0;
}
struct P { int x = 4; long long y = -1; };
struct Q { P p[2]; };
int partial() {
    P ps[3] = {P()};
    Q q = {};
    int grid[2][3] = {{1}};
    cout << ps[2].x << " " << ps[1].y << " " << q.p[1].y << " " << grid[1][2] << " " << grid[0][0] << endl;
    return 0;
}
