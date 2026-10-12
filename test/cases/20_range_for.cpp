#include <vector>
#include <map>
#include <set>

int main() {
  int a[5] = {1, 2, 3, 4, 5};
  int s = 0;
  for (int x : a) s += x;
  for (int& y : a) y *= 2;
  for (const int& y : a) s += y;
  __ctj_js("console.log($1, $2)", s, a[4]);

  std::vector<int> v;
  v.push_back(3);
  v.push_back(1);
  v.push_back(2);
  for (int& y : v) y += 10;
  int t = 0;
  for (auto x : v) t = t * 10 + x;
  __ctj_js("console.log($1)", t);

  std::set<int> st;
  st.insert(4);
  st.insert(4);
  st.insert(6);
  int u = 0;
  for (int x : st) u = u * 10 + x;
  __ctj_js("console.log($1)", u);

  std::map<int, int> m;
  m[1] = 10;
  m[2] = 20;
  int w = 0;
  for (const std::pair<int, int>& p : m) w += p.second;
  __ctj_js("console.log($1)", w);
  return 0;
}
