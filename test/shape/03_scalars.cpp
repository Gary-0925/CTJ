#include <iostream>
struct Base { int id; };
struct Derived : Base { double w; };
int main() {
  int arr[3] = {7, 8, 9};
  __ctj_show("arr", arr);
  const char* lit = "xy";
  __ctj_show("lit", lit);
  int n = 42;
  int* pn = &n;
  __ctj_show("pn", pn);
  Derived d;
  d.id = 4;
  d.w = 2.5;
  __ctj_show("derived", d);
  bool flag = true;
  __ctj_show("flag", flag);
  std::cout << "done" << std::endl;
  return 0;
}
