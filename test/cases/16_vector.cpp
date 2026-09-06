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
  __ctj_js("console.log($1, $2, $3, $4)", sum, second, n, (int)v.size());
  return 0;
}
