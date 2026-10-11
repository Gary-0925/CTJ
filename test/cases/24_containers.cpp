#include <string>
#include <map>
#include <set>
#include <vector>
#include <list>
#include <utility>
#include <iostream>
using namespace std;
int main() {
  string s = "hi";
  string t("yo");
  char buf[4] = "abc";
  string u = buf;
  cout << s.size() + t.size() + u.size() << endl;
  map<int, int> m{{1, 10}, {2, 20}};
  for (auto& kv : m) cout << kv.first << ":" << kv.second << " ";
  cout << endl;
  vector<int> v{1, 2, 3};
  vector<int> w(std::move(v));
  cout << w.size() << " " << w[2] << endl;
  set<int> st{3, 1, 2};
  for (int x : st) cout << x;
  cout << endl;
  int a = 1, b = 2;
  int* p = &a;
  int* q = &b;
  swap(p, q);
  int*& r = p;
  r = &a;
  cout << *p << " " << *q << " " << *r << endl;
  vector<pair<int, int>> vp{{1, 2}, {3, 4}};
  for (auto& pr : vp) cout << pr.first << "-" << pr.second << " ";
  cout << endl;
  vector<vector<int>> vv{{1, 2}, {3}};
  cout << vv.size() << " " << vv[0].size() << " " << vv[1][0] << endl;
  return 0;
}
