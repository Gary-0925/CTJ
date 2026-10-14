#include <iostream>
class Point {
public:
  int x;
  int y;
  Point() : x(0), y(0) {}
  Point(int a, int b) : x(a), y(b) {}
  Point(const Point& o) : x(o.x * 10), y(o.y * 10) {}
  int sum() { return x + y; }
  int sum() const { return x + y + 100; }
  static int count;
  static int getCount() { return count; }
  Point& addx(int d) { x += d; return *this; }
};
int Point::count = 5;

int getSum(const Point& p) { return p.sum(); }

int main() {
  Point p;
  std::cout << (p.sum()) << "\n";
  Point q(3, 4);
  std::cout << (q.sum()) << "\n";
  Point r = q;
  std::cout << (r.sum()) << "\n";
  std::cout << (getSum(q)) << "\n";
  std::cout << (Point::getCount()) << "\n";
  q.addx(10);
  std::cout << (q.sum()) << "\n";
  Point* pp = new Point(1, 2);
  std::cout << (pp->sum()) << "\n";
  delete pp;
  return 0;
}
