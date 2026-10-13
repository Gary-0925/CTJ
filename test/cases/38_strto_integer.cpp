#include <cstdlib>
#include <iostream>
using namespace std;
int main() {
  cout << strtoll("-9223372036854775808", 0, 10) << " " << strtoull("18446744073709551615", 0, 10) << endl;
  cout << strtoll("  0x1F zz", 0, 16) << " " << strtol("-077", 0, 0) << " " << strtoul("42", 0, 10) << endl;
  cout << atoi("123abc") << " " << atol("-7") << " " << atoll("9007199254740993") << endl;
  long long x = strtoll("12345678901234", 0, 10); cout << x + 1 << endl;
  return 0;
}
