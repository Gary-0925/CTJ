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
    this.n++;
  }
  value__c() {
    return this.n;
  }
}
function twice(x) {
  return (x * 2);
}
function main() {
  (console.log((twice(21))));
  let c = new Counter();
  c.bump();
  c.bump();
  (console.log((c.value__c())));
  return 0;
}
main();
