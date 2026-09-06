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
  __ctj_js("console.log($1)", p.sum());
  Point q(3, 4);
  __ctj_js("console.log($1)", q.sum());
  Point r = q;
  __ctj_js("console.log($1)", r.sum());
  __ctj_js("console.log($1)", getSum(q));
  __ctj_js("console.log($1)", Point::getCount());
  q.addx(10);
  __ctj_js("console.log($1)", q.sum());
  Point* pp = new Point(1, 2);
  __ctj_js("console.log($1)", pp->sum());
  delete pp;
  return 0;
}
