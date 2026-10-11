#include <map>

int main() {
  std::map<int, int> m;
  m.insert(std::make_pair(1, 2));
  m.insert(std::make_pair(3, 4));
  m.insert(std::make_pair(1, 9));
  __ctj_js("console.log($1)", (int)m.size());
  return 0;
}
