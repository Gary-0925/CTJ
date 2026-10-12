#include <bits/stdc++.h>
using namespace std;

int main() {
  vector<int> v;
  v.push_back(3);
  v.push_back(1);
  v.push_back(4);
  v.push_back(1);
  v.push_back(5);
  sort(v.begin(), v.end());
  int s = 0;
  for (int x : v) s = s * 10 + x;
  cout << s << endl;
  cout << *max_element(v.begin(), v.end()) << " " << *min_element(v.begin(), v.end()) << endl;
  cout << accumulate(v.begin(), v.end(), 0) << endl;
  cout << count(v.begin(), v.end(), 1) << " " << *lower_bound(v.begin(), v.end(), 4) << endl;
  cout << (binary_search(v.begin(), v.end(), 3) ? 1 : 0) << endl;
  reverse(v.begin(), v.end());
  int t = 0;
  for (int& y : v) t = t * 10 + y;
  cout << t << endl;
  vector<int> w{9, 8, 7};
  int u = 0;
  for (int x : w) u += x;
  cout << u << " " << (int)w.size() << endl;
  int a[3] = {7, 5, 9};
  sort(a, a + 3);
  cout << a[0] << a[1] << a[2] << endl;
  return 0;
}
