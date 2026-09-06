"use strict";
class Buf {
  d;
  constructor(...$a) {
    this.__init_Buf(...$a);
  }
  __init_Buf(...$a) {
    this.d = new Array(4).fill(0);
    this.d[0] = 5;
  }
  __dtor() {
  }
  op_index(i) {
    return this.d[i];
  }
  front() {
    return this.op_index(0);
  }
}
class Traits_char {
  __dtor() {
  }
}
class Str_char_Traits_char_Rep extends Traits_char {
  len;
  constructor(...$a) {
    super();
    this.__init_Str_char_Traits_char_Rep(...$a);
  }
  __init_Str_char_Traits_char_Rep(...$a) {
    this.len = 0;
  }
  __dtor() {
    Traits_char.prototype.__dtor.call(this);
  }
}
class Str_char_Traits_char {
  buf;
  rep;
  constructor(...$a) {
    this.__init_Str_char_Traits_char(...$a);
  }
  __init_Str_char_Traits_char(...$a) {
    this.buf = new Array(32).fill(0);
    this.rep = new Str_char_Traits_char_Rep();
  }
  __dtor() {
  }
  set(s) {
    this.rep.len = strlen((s ? {a: s.a, i: s.i} : null));
    for (let i = 0; (i < this.rep.len); i++) {
      this.buf[i] = s.a[s.i + (i)];
    }
  }
  size__c() {
    return this.rep.len;
  }
  at__c(i) {
    return this.buf[i];
  }
  static compare(a, b) {
    while ((a.a[a.i] && (a.a[a.i] === b.a[b.i]))) {
       {
        a.i++;
        b.i++;
      }
    }
    return (a.a[a.i] - b.a[b.i]);
  }
  static npos = -1;
}
class Node_double_Rebind_int {
  __dtor() {
  }
}
class Node_int {
  next;
  constructor(...$a) {
    this.__init_Node_int(...$a);
  }
  __init_Node_int(...$a) {
    this.next = null;
  }
  __dtor() {
  }
}
class Node_double {
  next;
  constructor(...$a) {
    this.__init_Node_double(...$a);
  }
  __init_Node_double(...$a) {
    this.next = null;
  }
  __dtor() {
  }
}
class Node_int_Rebind_int {
  __dtor() {
  }
}
function strlen(s) {
  let n = 0;
  while ((s.a[s.i + (n)] !== 0)) {
    n++;
  }
  return n;
}
function main() {
  let s = new Str_char_Traits_char();
  s.set({a: [104, 101, 108, 108, 111, 0], i: 0});
  (console.log((s.size__c())));
  let c = Str_char_Traits_char.compare({a: [97, 98, 99, 0], i: 0}, {a: [97, 98, 100, 0], i: 0});
  (console.log(((c < 0))));
  (console.log(((Str_char_Traits_char.npos === (-(1))))));
  (console.log((s.at__c(1))));
  let n = new Node_double();
  (console.log(((n.next === null))));
  let b = new Buf();
  (console.log((b.front())));
  return 0;
}
main();
