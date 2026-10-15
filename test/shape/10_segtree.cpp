#include <iostream>
using namespace std;

// A segment tree for range sums: node p covers [l, r], its children are 2p and 2p+1.
const int N = 8;
int a[N + 1];
int t[4 * N];

void build(int p, int l, int r) {
  if (l == r) {
    t[p] = a[l];
    return;
  }
  int m = (l + r) / 2;
  build(2 * p, l, m);
  build(2 * p + 1, m + 1, r);
  t[p] = t[2 * p] + t[2 * p + 1];
}

void update(int p, int l, int r, int pos, int v) {
  if (l == r) {
    t[p] = v;
    return;
  }
  int m = (l + r) / 2;
  if (pos <= m) update(2 * p, l, m, pos, v);
  else update(2 * p + 1, m + 1, r, pos, v);
  t[p] = t[2 * p] + t[2 * p + 1];
}

int query(int p, int l, int r, int ql, int qr) {
  if (qr < l || r < ql) return 0;
  if (ql <= l && r <= qr) return t[p];
  int m = (l + r) / 2;
  return query(2 * p, l, m, ql, qr) + query(2 * p + 1, m + 1, r, ql, qr);
}

int main() {
  for (int i = 1; i <= N; i++) a[i] = i;
  build(1, 1, N);
  __ctj_show("built", t);
  cout << query(1, 1, N, 2, 5) << endl;
  update(1, 1, N, 3, 10);
  __ctj_show("updated", t);
  cout << query(1, 1, N, 1, N) << endl;
  return 0;
}
