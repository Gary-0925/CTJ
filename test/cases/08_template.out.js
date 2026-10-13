"use strict";
class Stack_int_value8 {
  data$Stack_int_value8;
  top$Stack_int_value8;
  constructor(...$a) {
    this.__init_Stack_int_value8(...$a);
  }
  __init_Stack_int_value8(...$a) {
    this.data$Stack_int_value8 = new Array(8).fill(0);
    this.top$Stack_int_value8 = 0;
  }
  __dtor() {
  }
  push(v) {
    let $t0;
    this.data$Stack_int_value8[($t0 = this.top$Stack_int_value8, this.top$Stack_int_value8 = (($t0 + 1) | 0), $t0)] = v;
  }
  pop() {
    return this.data$Stack_int_value8[(this.top$Stack_int_value8 = ((this.top$Stack_int_value8 - 1) | 0))];
  }
  size__c() {
    return this.top$Stack_int_value8;
  }
}
class Pair_int {
  a$Pair_int;
  b$Pair_int;
  constructor(...$a) {
    this.__init_Pair_int(...$a);
  }
  __init_Pair_int(...$a) {
    this.a$Pair_int = $a[0];
    this.b$Pair_int = $a[1];
  }
  __dtor() {
  }
  sum() {
    return (((this.a$Pair_int) + (this.b$Pair_int)) | 0);
  }
}
function main() {
  (console.log((maxOf_int(3, 7))));
  (console.log((maxOf_double(2.5, 1.5))));
  let s = new Stack_int_value8();
  Stack_int_value8.prototype.push.call(s, 1);
  Stack_int_value8.prototype.push.call(s, 2);
  Stack_int_value8.prototype.push.call(s, 3);
  (console.log((Stack_int_value8.prototype.pop.call(s))));
  (console.log((Stack_int_value8.prototype.size__c.call(s))));
  let p = new Pair_int(4, 5);
  (console.log((Pair_int.prototype.sum.call(p))));
  return 0;
}
function maxOf_int(a, b) {
  return ((a > b) ? ((a) | 0) : ((b) | 0));
}
function maxOf_double(a, b) {
  return ((a > b) ? a : b);
}
main();
