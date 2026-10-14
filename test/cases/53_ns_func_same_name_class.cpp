// A function in a namespace may share its name with a class in the global
// namespace; "ns::Name(...)" calls the function, while "Name(...)" and
// "ns::Other(...)" still name the class.
#include <iostream>

class MyClass {
public:
  int v;
  MyClass() : v(7) {}
};

namespace my_namespace {
  int calls = 0;
  void MyClass() { calls++; }
  int MyClass(int x) { return x * 2; }
  class Inner { public: int k; Inner(int a) : k(a) {} };
  Inner Make(int a) { return Inner(a); }
  void Twice() { MyClass(); MyClass(); }
}

int main() {
  my_namespace::MyClass();
  my_namespace::MyClass();
  my_namespace::Twice();
  std::cout << my_namespace::calls << "\n";
  std::cout << my_namespace::MyClass(21) << "\n";
  MyClass m;
  std::cout << m.v << "\n";
  my_namespace::Inner in = my_namespace::Make(5);
  std::cout << in.k << "\n";
  std::cout << my_namespace::Inner(9).k << "\n";
  return 0;
}
