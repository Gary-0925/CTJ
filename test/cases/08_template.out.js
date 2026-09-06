"use strict";
class Stack_int_value8 {
  data;
  top;
  constructor(...$a) {
    this.__init_Stack_int_value8(...$a);
  }
  __init_Stack_int_value8(...$a) {
    this.data = new Array(8).fill(0);
    this.top = 0;
  }
  __dtor() {
  }
  push(v) {
    this.data[this.top++] = v;
  }
  pop() {
    return this.data[--this.top];
  }
  size__c() {
    return this.top;
  }
}
class Pair_int {
  a;
  b;
  constructor(...$a) {
    this.__init_Pair_int(...$a);
  }
  __init_Pair_int(...$a) {
    this.a = $a[0];
    this.b = $a[1];
  }
  __dtor() {
  }
  sum() {
    return (this.a + this.b);
  }
}
function main() {
  (console.log((maxOf_int(3, 7))));
  (console.log((maxOf_double(2.5, 1.5))));
  let s = new Stack_int_value8();
  s.push(1);
  s.push(2);
  s.push(3);
  (console.log((s.pop())));
  (console.log((s.size__c())));
  let p = new Pair_int(4, 5);
  (console.log((p.sum())));
  return 0;
}
function maxOf_int(a, b) {
  return ((a > b) ? a : b);
}
function maxOf_double(a, b) {
  return ((a > b) ? a : b);
}
main();
