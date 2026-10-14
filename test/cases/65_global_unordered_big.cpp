#include <cstdio>
#include <unordered_set>
std::unordered_set<int> g(1000);
int main() {
  for (int i = 0; i < 50; i++) g.insert(i * 7);
  int s = 0; for (std::unordered_set<int>::iterator it = g.begin(); it != g.end(); ++it) s += *it;
  printf("%d %d\n", (int)g.size(), s);
  return 0;
}
