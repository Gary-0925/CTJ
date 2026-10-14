#include <iostream>
using namespace std;

// Overloads of one name, virtual overrides, and a class that shares a name with a
// function in a namespace: each of them needs a name of its own.
namespace ns_a {
int MyClass() { return 3; }
}
struct MyClass {
	int v = 1;
};
namespace my_namespace {
void MyClass() {}
}

struct Plain {
	int m(int x) { return x * 10; }
	int m(char c) { return c; }
	int m(double d) { return (int)(d * 100); }
};

struct Base {
	virtual ~Base() {}
	virtual int f(int x) { return x + 1; }
	virtual int f(char c) { return c + 2; }
	virtual int g(int x) const { return x * 3; }
	int h(int x) { return x * 4; }
	int h(double d) { return (int)(d * 4); }
	static int s(int x) { return x - 1; }
	Base operator+(const Base&) const { return Base(); }
};

struct Derived : Base {
	int f(int x) override { return x + 100; }
	int g(int x) const override { return x * 300; }
	int h(int x) { return x * 5; }
	int f(double d) { return (int)(d * 9); }
};

struct Deeper : Derived {
	int f(int x) override { return x + 1000; }
};

template <typename T>
struct Box {
	T val;
	T get(int k) const { return val * k; }
	void set(T v) { val = v; }
	void set(const char* s) { val = (T)s[0]; }
};

int main()
{
	Plain p;
	cout << p.m(2) << " " << p.m('a') << " " << p.m(1.5) << "\n";
	Base b;
	Derived d;
	Deeper e;
	Base* pb = &d;
	Base* pe = &e;
	Base* pbb = &b;
	cout << pb->f(1) << " " << pe->f(1) << " " << pbb->f(1) << " " << pb->f('a') << "\n";
	cout << pb->g(2) << " " << pe->g(2) << " " << b.g(2) << "\n";
	cout << d.h(2) << " " << d.h(1.5) << " " << b.h(2) << " " << b.h(0.5) << "\n";
	cout << d.f(1.5) << " " << Base::s(10) << " " << Derived::s(3) << "\n";
	Box<int> bx;
	bx.val = 4;
	bx.set(9);
	cout << bx.get(2) << " ";
	bx.set("A");
	cout << bx.val << "\n";
	MyClass c;
	cout << c.v << " " << ns_a::MyClass() << "\n";
	my_namespace::MyClass();
	return 0;
}
