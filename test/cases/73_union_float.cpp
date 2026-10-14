#include <iostream>
using namespace std;

union U {
  float f;
  unsigned u;
};

int main() {
  U x;
  x.f = 1.1f;
  for (int i = 0; i < 32; i++) cout << (x.u >> i & 1);
  cout << "\n";
  x.u = 0x40490fdbu;
  cout << x.f << "\n";
  return 0;
}
