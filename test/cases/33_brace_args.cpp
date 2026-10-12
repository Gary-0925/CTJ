// A braced list passed to a class parameter (push_back, a function, a
// functional cast in a template), a reference to an element of a global
// array, and cout.tie.
#include <iostream>
#include <utility>
#include <vector>
using namespace std;

struct P { int a, b; P(int x, int y) : a(x), b(y) {} };

int f(pair<int, int> p) { return p.first + p.second; }
int g(P p) { return p.a * 10 + p.b; }

struct NB { int v; };
template <class T>
struct Tr {
  typedef NB* Base_ptr;
  typedef pair<Base_ptr, Base_ptr> Res;
  Res pick(Base_ptr x, Base_ptr y) {
    if (x == 0) return Res(x, y);
    return Res(y, x);
  }
};

int a[10];
void setit(int& x) { x = 5; }

int main() {
  cout.tie(0);
  vector<P> v;
  int x = 3;
  v.push_back({ x, 1 });
  cout << v.size() << " " << v[0].a << " " << v[0].b << " ";
  cout << f({ x, 4 }) + g({ 2, 5 }) << "\n";

  NB p1{ 1 }, p2{ 2 };
  Tr<int> t;
  pair<NB*, NB*> r = t.pick(&p1, &p2);
  cout << r.first->v << " " << r.second->v << "\n";

  setit(a[1]);
  int& q = a[2];
  q = 7;
  cout << a[1] << " " << a[2] << "\n";
  return 0;
}
