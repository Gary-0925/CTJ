#include <iostream>
enum Color { RED, GREEN };
struct Counter {
  int hits;
  unsigned long long big;
  Color c;
  char tag;
  float ratio;
  void mark() { hits++; __ctj_show("self", *this); }
};
int main() {
  Counter k;
  k.hits = 0;
  k.big = 1234567890123ULL;
  k.c = GREEN;
  k.tag = 'Q';
  k.ratio = 0.5f;
  k.mark();
  int* none = 0;
  __ctj_show("none", none);
  __ctj_show("tag", k.tag);
  std::cout << "ok" << std::endl;
  return 0;
}
