#include <iostream>
class Base {
public:
  int v;
  Base() : v(1) {}
  Base(int x) : v(x) {}
  virtual int get() { return v; }
  virtual ~Base() {}
};
class Derived : public Base {
public:
  int w;
  Derived() : Base(10), w(20) {}
  int get() override { return v + w; }
};
int use(Base& b) { return b.get(); }
int main() {
  Derived d;
  std::cout << (d.get()) << "\n";
  Base* p = new Derived();
  std::cout << (p->get()) << "\n";
  std::cout << (use(d)) << "\n";
  Base b;
  std::cout << (use(b)) << "\n";
  d.Base::get();
  std::cout << (d.Base::get()) << "\n";
  delete p;
  return 0;
}
