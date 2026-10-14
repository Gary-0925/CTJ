#include <iostream>
#include <vector>

int main() {
  std::vector<int> v;
  for (int i = 1; i <= 4; i++) v.push_back(i * 10);
  int sum = 0;
  for (unsigned i = 0; i < v.size(); i++) sum += v[i];
  v[1] = 99;
  int second = v[1];
  int n = (int)v.size();
  v.clear();
  std::cout << (sum) << " " << (second) << " " << (n) << " " << ((int)v.size()) << "\n";
  std::vector<int> w(3);
  std::cout << ((int)w.size()) << "\n";
  return 0;
}
