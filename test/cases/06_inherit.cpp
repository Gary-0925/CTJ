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
  __ctj_js("console.log($1)", d.get());
  Base* p = new Derived();
  __ctj_js("console.log($1)", p->get());
  __ctj_js("console.log($1)", use(d));
  Base b;
  __ctj_js("console.log($1)", use(b));
  d.Base::get();
  __ctj_js("console.log($1)", d.Base::get());
  delete p;
  return 0;
}
