#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;
bool cmp(long long a, long long b) { return a > b; }
int main() {
    long long mx = LLONG_MAX;
    cout << mx + 1 << " " << (LLONG_MIN - 1) << endl;
    unsigned long long um = ULLONG_MAX;
    cout << um + 1 << " " << um * 3 << " " << (um >> 1) << endl;
    long long n = -7; int k = 2; unsigned int u = 5;
    cout << n / k << " " << n % k << " " << n / -2 << " " << n % -2 << endl;
    cout << n + u << " " << (n * k - 1) << " " << (n < u) << endl;
    cout << (n << 40) << " " << (n >> 1) << " " << (1LL << 62) << " " << (1ULL << 63) << endl;
    cout << (n & 0xFF) << " " << (n | 3) << " " << (n ^ -1) << " " << (~n) << endl;
    unsigned long long h = 14695981039346656037ULL;
    for (int i = 0; i < 5; i++) { h ^= (unsigned long long)(i + 1); h *= 1099511628211ULL; }
    cout << h << endl;
    vector<long long> v;
    long long x;
    while (cin >> x) v.push_back(x);
    sort(v.begin(), v.end(), cmp);
    for (size_t i = 0; i < v.size(); i++) cout << v[i] << (i + 1 < v.size() ? " " : "\n");
    long long s = 0;
    for (size_t i = 0; i < v.size(); i++) s += v[i];
    cout << s << endl;
    int ci = -1;
    unsigned int cu = ci;
    cout << cu << " " << (cu + 1) << " " << (unsigned long long)ci << endl;
    cout << (long long)cu * 2 << " " << (ci < 0LL) << endl;
    switch (s) { case 0: cout << "zero" << endl; break; default: cout << "nz" << endl; }
    return 0;
}
