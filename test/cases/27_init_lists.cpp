#include <vector>
#include <map>
#include <set>
#include <string>
#include <iostream>
using namespace std;
int main(){
  vector<string> v{"a","bb"};
  cout << v.size() << " " << v[1] << endl;
  map<string,int> m{{"x",1},{"y",2}};
  for (auto& kv : m) cout << kv.first << ":" << kv.second << " ";
  cout << endl;
  set<int> s{5,6,5};
  for (int x : s) cout << x; cout << endl;
  vector<vector<int>> vv{{1,2},{3}};
  cout << vv.size() << " " << vv[0].size() << " " << vv[1][0] << endl;
}
