#include <unordered_map>
#include <unordered_set>
#include <string>
#include <iostream>
using namespace std;
int main(){
  unordered_map<string,int> m;
  m["aa"] = 1; m["bb"] = 2;
  cout << m.size() << " " << m["aa"] + m["bb"] << " " << m.count("cc") << endl;
  for (auto& kv : m) cout << kv.first << "=" << kv.second << " ";
  cout << endl;
  unordered_set<int> s;
  s.insert(5); s.insert(6); s.insert(5);
  cout << s.size() << " " << s.count(6) << endl;
  for (int x : s) cout << x; cout << endl;
}
