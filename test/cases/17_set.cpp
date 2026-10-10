#include <set>

int main() {
  std::set<int> s;
  s.insert(1);
  s.insert(2);
  s.insert(2);
  __ctj_js("console.log($1)", (int)s.size());
  return 0;
}
