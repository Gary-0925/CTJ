#include <iostream>
struct Tree {
  int root;
  struct Node {
    int key;
    int l, r;
  } p[8];
};
struct Pair {
  int l, r;
};
int main() {
  // Links are indices into p: 0 means none, 9 is past the end and gives no edge.
  Tree t;
  t.root = 1;
  for (int i = 0; i < 8; i++) {
    t.p[i].key = i * 10;
    t.p[i].l = 0;
    t.p[i].r = 0;
  }
  t.p[1].l = 2;
  t.p[1].r = 3;
  t.p[2].l = 4;
  t.p[5].r = 9;
  // Walking the tree by subscripts is what makes l and r links: the run uses them as indices.
  int sum = t.p[t.p[t.root].l].key;
  sum += t.p[t.p[1].r].key;
  sum += t.p[t.p[2].l].key;
  std::cout << sum << std::endl;
  __ctj_show("tree", t);
  // Plain fields named l and r, outside any array: not links.
  Pair pr;
  pr.l = 1;
  pr.r = 2;
  __ctj_show("pair", pr);
  std::cout << "done" << std::endl;
  return 0;
}
