"use strict";
class Counter {
  n;
  constructor(...$a) {
    this.__init_Counter(...$a);
  }
  __init_Counter(...$a) {
    this.n = 0;
  }
  __dtor() {
  }
  bump() {
    let $t0;
    ($t0 = this.n, this.n = (($t0 + 1) | 0), $t0);
  }
  value__c() {
    return this.n;
  }
}
function twice(x) {
  return ((Math.imul(x, 2)) | 0);
}
function main() {
  (console.log((twice(21))));
  let c = new Counter();
  Counter.prototype.bump.call(c);
  Counter.prototype.bump.call(c);
  (console.log((Counter.prototype.value__c.call(c))));
  return 0;
}
main();
