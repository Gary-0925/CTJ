#include <iostream>
using namespace std;
int g[10];
void rev(int* lo, int* hi) {
  while (lo < hi) {
    int t = *lo;
    *lo++ = *--hi;
    *hi = t;
  }
}
struct S {
  int arr[4];
  void fill() {
    for (int i = 0; i < 4; i++) cin >> arr[i];
    rev(arr, arr + 4);
  }
};
int sum(int* p, int n) {
  int s = 0;
  for (int i = 0; i < n; i++) s += p[i];
  return s;
}
int main() {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) cin >> g[i];
  rev(g, g + n);
  cout << g[0] << g[1] << g[2] << g[3] << g[4] << "\n";
  int loc[5];
  for (int i = 0; i < n; i++) cin >> loc[i];
  int* p = loc;
  cout << *p << " " << *(p + 1) << " " << sum(loc, n) << "\n";
  p = loc + 2;
  cout << *p << "\n";
  S s;
  s.fill();
  cout << s.arr[0] << s.arr[1] << s.arr[2] << s.arr[3] << "\n";
  cout << sum(s.arr, 4) << "\n";
  return 0;
}
