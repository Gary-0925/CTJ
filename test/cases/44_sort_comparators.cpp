#include <algorithm>
#include <vector>
#include <utility>
#include <iostream>
using namespace std;
bool later(int a, int b);
struct Cmp { bool operator()(int a, int b) const { return a > b; } };
struct Holder { static bool sc(int a, int b) { return a < b; } };
template<class T> bool tcmp(T a, T b) { return a > b; }
bool pairCmp(const pair<int, int>& a, const pair<int, int>& b) { return a.second < b.second; }
int main() {
    vector<int> v = {5, 2, 8, 1};
    bool (*fp)(int, int) = later;
    sort(v.begin(), v.end(), fp);
    for (int x : v) cout << x << " ";
    cout << endl;
    auto lam = [](int a, int b) { return a < b; };
    sort(v.begin(), v.end(), lam);
    for (int x : v) cout << x << " ";
    cout << endl;
    sort(v.begin(), v.end(), Cmp());
    for (int x : v) cout << x << " ";
    cout << endl;
    sort(v.begin(), v.end(), Holder::sc);
    for (int x : v) cout << x << " ";
    cout << endl;
    sort(v.begin(), v.end(), tcmp<int>);
    for (int x : v) cout << x << " ";
    cout << endl;
    vector<pair<int, int>> ps = {{1, 9}, {2, 3}, {3, 5}};
    sort(ps.begin(), ps.end(), pairCmp);
    for (auto& p : ps) cout << p.first << " ";
    cout << endl;
    long long arr[3] = {30000000000LL, -5LL, 7LL};
    sort(arr, arr + 3, [](long long a, long long b) { return a > b; });
    cout << arr[0] << " " << arr[1] << " " << arr[2] << endl;
    return 0;
}
bool later(int a, int b) { return a > b; }
