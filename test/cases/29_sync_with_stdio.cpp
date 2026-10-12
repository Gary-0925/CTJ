#include <iostream>

using namespace std;

int main() {
  // The usual competitive-programming preamble.
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout << "a" << 1 << endl;

  std::ios_base::sync_with_stdio(true);
  std::ios::fmtflags f = std::ios::hex;
  cout.flags(f);
  cout << 255 << endl;

  ostream* old = cin.tie(&cout);
  cout << (old == nullptr) << " " << (cin.tie() == &cout) << endl;
  return 0;
}
