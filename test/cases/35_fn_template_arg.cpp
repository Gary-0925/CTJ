#include <iostream>
using namespace std;

bool cmp(int a, int b) { return a > b; }

template <class C>
int apply(C c, int x, int y) { return c(x, y) ? 1 : 0; }

template <class It, class C>
void mysort(It a, It b, C c) {
  if (c(*a, *b)) cout << "first-before" << endl;
  else cout << "second-before" << endl;
}

int main() {
  cout << apply(cmp, 3, 2) << endl;
  int a[2] = {1, 2};
  mysort(a, a + 1, cmp);
  return 0;
}
