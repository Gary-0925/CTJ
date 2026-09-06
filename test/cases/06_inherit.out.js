"use strict";
class Base {
  v;
  constructor(...$a) {
    this.__init_Base(...$a);
  }
  __init_Base(...$a) {
    if ($a.length >= 0 && $a.length <= 0) {
      this.v = 1;
    }
    else if ($a.length >= 1 && $a.length <= 1 && (typeof $a[0] === "number" || typeof $a[0] === "boolean")) {
      this.v = $a[0];
    }
    else { throw new Error("no matching constructor"); }
  }
  __dtor() {
  }
  get() {
    return this.v;
  }
}
class Derived extends Base {
  w;
  constructor(...$a) {
    super(...[10]);
    this.__init_Derived(...$a);
  }
  __init_Derived(...$a) {
    this.w = 20;
  }
  __dtor() {
    Base.prototype.__dtor.call(this);
  }
  get() {
    return (this.v + this.w);
  }
}
function use(b) {
  return (b.a[b.i]).get();
}
function main() {
  let d = {v: new Derived()};
  (console.log((d.v.get())));
  let p = {a: [new Derived()], i: 0};
  (console.log((((p.a[p.i])).get())));
  (console.log((use({a: d, i: "v"}))));
  let b = {v: new Base()};
  (console.log((use({a: b, i: "v"}))));
  Base.prototype.get.call(d.v);
  (console.log((Base.prototype.get.call(d.v))));
  return 0;
}
main();
