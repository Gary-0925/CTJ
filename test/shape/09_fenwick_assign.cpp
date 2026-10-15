#include <iostream>
int main() {
  // A Fenwick tree over 8 values, the step written as an assignment: i = i + (i & -i).
  int f[9];
  for (int i = 0; i <= 8; i++) f[i] = 0;
  for (int k = 1; k <= 8; k++)
    for (int i = k; i <= 8; i = i + (i & -i)) f[i] += k;
  int s = 0;
  for (int i = 7; i > 0; i = i - (i & -i)) s += f[i];
  std::cout << s << std::endl;
  __ctj_show("fenwick", f);
  return 0;
}
