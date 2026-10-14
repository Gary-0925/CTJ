#include <iostream>
#include <unordered_set>
using namespace std;

int q;
unordered_set<int> mp;

int main() {
  cin >> q;
  while (q--)
  {
    int x;
    cin >> x;
    mp.insert(x);
  }
  for (auto i : mp) cout << i << " ";
  return 0;
}
