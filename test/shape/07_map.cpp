#include <iostream>
#include <map>
#include <set>
int main() {
  // A map is shown as its size and its tree: parent and colour links are not drawn.
  std::map<int, int> m;
  int keys[] = {50, 30, 70, 20, 40};
  for (int i = 0; i < 5; i++) m[keys[i]] = i;
  __ctj_show("map", m);
  std::set<int> s;
  s.insert(3);
  s.insert(1);
  __ctj_show("set", s);
  std::map<int, int> empty;
  __ctj_show("empty", empty);
  std::cout << "done" << std::endl;
  return 0;
}
