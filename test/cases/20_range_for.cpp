#include <iostream>
#include <vector>
#include <map>
#include <set>

int main() {
  int a[5] = {1, 2, 3, 4, 5};
  int s = 0;
  for (int x : a) s += x;
  for (int& y : a) y *= 2;
  for (const int& y : a) s += y;
  std::cout << (s) << " " << (a[4]) << "\n";

  std::vector<int> v;
  v.push_back(3);
  v.push_back(1);
  v.push_back(2);
  for (int& y : v) y += 10;
  int t = 0;
  for (auto x : v) t = t * 10 + x;
  std::cout << (t) << "\n";

  std::set<int> st;
  st.insert(4);
  st.insert(4);
  st.insert(6);
  int u = 0;
  for (int x : st) u = u * 10 + x;
  std::cout << (u) << "\n";

  std::map<int, int> m;
  m[1] = 10;
  m[2] = 20;
  int w = 0;
  for (const std::pair<int, int>& p : m) w += p.second;
  std::cout << (w) << "\n";
  return 0;
}
