#include <list>

int main() {
  std::list<int> a;
  a.push_back(3);
  a.push_back(1);
  a.push_front(9);
  int s = 0;
  for (int x : a) s = s * 10 + x;
  __ctj_js("console.log($1, $2)", s, (int)a.size());

  for (int& y : a) y += 1;
  for (const int& y : a) s = s * 10 + y;
  __ctj_js("console.log($1)", s);

  a.reverse();
  s = 0;
  for (int x : a) s = s * 10 + x;
  __ctj_js("console.log($1)", s);

  a.remove(10);
  a.pop_front();
  __ctj_js("console.log($1, $2, $3)", a.front(), a.back(), (int)a.size());

  std::list<int> b;
  b.push_back(7);
  b.splice(b.end(), a);
  s = 0;
  for (int x : b) s = s * 10 + x;
  __ctj_js("console.log($1, $2)", s, (int)a.size());

  b.clear();
  __ctj_js("console.log($1, $2)", (int)b.size(), (int)b.empty());
  return 0;
}
