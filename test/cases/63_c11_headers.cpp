#include <cstdio>
#include <cuchar>
#include <iso646.h>
#include <list>
#include <map>
int main() {
  bool a = true, b = false;
  printf("%d %d %d\n", (int)(a and not b), (int)(a or b), (int)(a not_eq b));
  std::mbstate_t st = std::mbstate_t();
  char16_t c16 = 0;
  char32_t c32 = 0;
  int n = (int)std::mbrtoc16(&c16, "A", 1, &st);
  int m = (int)std::mbrtoc32(&c32, "B", 1, &st);
  printf("%d %d %d %d\n", n, (int)c16, m, (int)c32);
  int bad = (int)std::mbrtoc16(&c16, "\xc3", 1, &st);
  printf("%d\n", bad);
  char out[4] = {0, 0, 0, 0};
  int w = (int)std::c16rtomb(out, u'z', &st);
  printf("%d %d\n", w, (int)out[0]);
  std::list<int> l;
  l.push_back(1);
  l.push_front(0);
  l.reverse();
  std::map<int, int> mp;
  for (int i = 0; i < 20; i++) mp[(i * 7) % 11] = i;
  mp.erase(3);
  printf("%d %d %d %d\n", l.front(), (int)mp.size(), mp.begin()->first, mp.rbegin()->first);
  return 0;
}
