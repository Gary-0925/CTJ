#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

bool cmp(int a, int b) { return a > b; }

int main() {
  vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};
  sort(v.begin(), v.end(), cmp);
  for (size_t i = 0; i < v.size(); i++) cout << v[i] << " ";
  cout << endl;
  int a[5] = {5, 2, 8, 1, 9};
  sort(a, a + 5, cmp);
  for (int i = 0; i < 5; i++) cout << a[i] << " ";
  cout << endl;
  sort(v.begin(), v.end(), [](int x, int y) { return x < y; });
  for (size_t i = 0; i < v.size(); i++) cout << v[i] << " ";
  cout << endl;
  return 0;
}
