#include <iostream>
#include <list>

int main() {
  std::list<int> a;
  a.push_back(3);
  a.push_back(1);
  a.push_front(9);
  int s = 0;
  for (int x : a) s = s * 10 + x;
  std::cout << (s) << " " << ((int)a.size()) << "\n";

  for (int& y : a) y += 1;
  for (const int& y : a) s = s * 10 + y;
  std::cout << (s) << "\n";

  a.reverse();
  s = 0;
  for (int x : a) s = s * 10 + x;
  std::cout << (s) << "\n";

  a.remove(10);
  a.pop_front();
  std::cout << (a.front()) << " " << (a.back()) << " " << ((int)a.size()) << "\n";

  std::list<int> b;
  b.push_back(7);
  b.splice(b.end(), a);
  s = 0;
  for (int x : b) s = s * 10 + x;
  std::cout << (s) << " " << ((int)a.size()) << "\n";

  b.clear();
  std::cout << ((int)b.size()) << " " << ((int)b.empty()) << "\n";
  return 0;
}
