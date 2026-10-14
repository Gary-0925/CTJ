#include <iostream>
#include <utility>
using namespace std;
void f(const int& x) { cout << x << "|"; }
void g(int x) { cout << x << "|"; }
void h(int* p) { cout << (p == 0) << "|"; }
int main() {
  f(0); g(0); f(7);
  h(0); h(NULL);
  cout << make_pair(0, 4).first << "|";
  pair<int, int> q(0, 4);
  cout << q.first << "|" << q.second << "\n";
  return 0;
}
