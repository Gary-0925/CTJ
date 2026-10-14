#include <iostream>
int main() {
  // A segment tree over 8 leaves in heap order: node p has children 2p and 2p+1.
  int t[16];
  for (int i = 0; i < 8; i++) t[8 + i] = i + 1;
  for (int p = 7; p >= 1; p--) t[p] = t[2 * p] + t[2 * p + 1];
  std::cout << t[1] << std::endl;
  __ctj_show("segtree", t);
  // A Fenwick tree over 8 values: an update walks up by i += i & -i, a query walks down.
  int f[9];
  for (int i = 0; i <= 8; i++) f[i] = 0;
  for (int k = 1; k <= 8; k++)
    for (int i = k; i <= 8; i += i & -i) f[i] += k;
  int s = 0;
  for (int i = 7; i > 0; i -= i & -i) s += f[i];
  std::cout << s << std::endl;
  __ctj_show("fenwick", f);
  // The same parent, written as a subscript: g[i + (i & -i)] is the node one level up.
  int g[9];
  for (int i = 0; i <= 8; i++) g[i] = 0;
  for (int i = 1; i <= 8; i++) {
    g[i] += i;
    if (i + (i & -i) <= 8) g[i + (i & -i)] += g[i];
  }
  __ctj_show("parent", g);
  // A plain shift by one is not a tree: no links here.
  int a[9];
  for (int i = 0; i < 8; i++) a[i + 1] = i;
  __ctj_show("chain", a);
  std::cout << "done" << std::endl;
  return 0;
}
