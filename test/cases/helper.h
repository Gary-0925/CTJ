#ifndef HELPER_H
#define HELPER_H

int twice(int x) { return x * 2; }

struct Counter {
  int n;
  Counter() : n(0) {}
  void bump() { n++; }
  int value() const { return n; }
};

#endif
