"use strict";
class Point {
  x;
  y;
  constructor(...$a) {
    this.__init_Point(...$a);
  }
  __init_Point(...$a) {
    if ($a.length >= 1 && $a.length <= 1 && ($a[0] !== null && typeof $a[0] === "object" && !Array.isArray($a[0]) && $a[0].a !== undefined && $a[0].i !== undefined && $a[0].a[$a[0].i] instanceof Point)) {
      this.x = ((Math.imul((($a[0]).a[($a[0]).i]).x, 10)) | 0);
      this.y = ((Math.imul((($a[0]).a[($a[0]).i]).y, 10)) | 0);
    }
    else if ($a.length >= 0 && $a.length <= 0) {
      this.x = 0;
      this.y = 0;
    }
    else if ($a.length >= 2 && $a.length <= 2 && (typeof $a[0] === "number" || typeof $a[0] === "boolean") && (typeof $a[1] === "number" || typeof $a[1] === "boolean")) {
      this.x = $a[0];
      this.y = $a[1];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  sum() {
    return (((this.x) + (this.y)) | 0);
  }
  sum__c() {
    return ((((((this.x) + (this.y)) | 0)) + (100)) | 0);
  }
  static getCount() {
    return Point.count;
  }
  addx(d) {
    this.x = (((((this.x) + (d)) | 0)) | 0);
    return {a: [this], i: 0};
  }
  static count = 5;
}
function getSum(p) {
  return Point.prototype.sum__c.call(p.a[p.i]);
}
function main() {
  let $t0;
  let p = new Point();
  (console.log((Point.prototype.sum.call(p))));
  let q = {v: new Point(3, 4)};
  (console.log((Point.prototype.sum.call(q.v))));
  let r = new Point({a: q, i: "v"});
  (console.log((Point.prototype.sum.call(r))));
  (console.log((getSum({a: q, i: "v"}))));
  (console.log((Point.getCount())));
  Point.prototype.addx.call(q.v, 10);
  (console.log((Point.prototype.sum.call(q.v))));
  let pp = ($t0 = {a: [new Point(1, 2)], i: 0}, $t0 ? {a: $t0.a, i: $t0.i} : null);
  (console.log((Point.prototype.sum.call(pp.a[pp.i]))));
  return 0;
}
main();
