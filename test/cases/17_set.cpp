#include <iostream>
#include <set>

int main() {
  std::set<int> s;
  s.insert(1);
  s.insert(2);
  s.insert(2);
  std::cout << ((int)s.size()) << "\n";
  return 0;
}
