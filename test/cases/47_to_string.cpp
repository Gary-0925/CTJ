#include <string>
#include <iostream>
#include <cstdio>
using namespace std;
int main() {
    string a = to_string(42);
    string b = to_string(-7LL);
    string c = to_string(3.5);
    string d = to_string(1234567890123LL);
    cout << a << " " << b << " " << c << " " << d << " " << to_string(0u) << endl;
    string e = to_string(2.5f);
    cout << e << endl;
    return 0;
}
