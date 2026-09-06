"use strict";
class Point {
  x;
  y;
  constructor(...$a) {
    this.__init_Point(...$a);
  }
  __init_Point(...$a) {
    if ($a.length >= 0 && $a.length <= 0) {
      this.x = 0;
      this.y = 0;
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      this.x = $a[0];
      this.y = $a[1];
    }
    else if ($a.length >= 1 && $a.length <= 1 && ($a[0] === null || typeof $a[0] === "object")) {
      this.x = ((($a[0]).a[($a[0]).i]).x * 10);
      this.y = ((($a[0]).a[($a[0]).i]).y * 10);
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  sum() {
    return (this.x + this.y);
  }
  sum__c() {
    return ((this.x + this.y) + 100);
  }
  static getCount() {
    return Point.count;
  }
  addx(d) {
    this.x += d;
    return this;
  }
  static count = 5;
}
function getSum(p) {
  return (p.a[p.i]).sum__c();
}
function main() {
  let p = new Point();
  (console.log((p.sum())));
  let q = {v: new Point(3, 4)};
  (console.log((q.v.sum())));
  let r = new Point({a: q, i: "v"});
  (console.log((r.sum())));
  (console.log((getSum({a: q, i: "v"}))));
  (console.log((Point.getCount())));
  q.v.addx(10);
  (console.log((q.v.sum())));
  let pp = {a: [new Point(1, 2)], i: 0};
  (console.log((((pp.a[pp.i])).sum())));
  return 0;
}
main();
