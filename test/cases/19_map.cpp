#include <map>
#include <iostream>

int main() {
  std::map<int, int> m;
  m.insert(std::make_pair(1, 2));
  m.insert(std::make_pair(3, 4));
  m.insert(std::make_pair(1, 9));
  __ctj_js("console.log($1)", (int)m.size());
  std::map<int, int> n;
  n[1] = 2;
  n[2] = 3;
  n[5] = 50;
  n[3] = 30;
  n[1] = 11;
  std::cout << n[1] << " " << n[2] << " " << n[3] << " " << n[5] << std::endl;
  std::cout << (int)n.size() << std::endl;
  return 0;
}
