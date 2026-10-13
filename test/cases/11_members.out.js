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
  __init_Traits_char(...$a) { }
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
  buf$Str_char_Traits_char;
  rep$Str_char_Traits_char;
  constructor(...$a) {
    this.__init_Str_char_Traits_char(...$a);
  }
  __init_Str_char_Traits_char(...$a) {
    this.buf$Str_char_Traits_char = new Array(32).fill(0);
    this.rep$Str_char_Traits_char = new Str_char_Traits_char_Rep();
    this.rep$Str_char_Traits_char.ctj_a = this; this.rep$Str_char_Traits_char.ctj_i = "rep$Str_char_Traits_char";
  }
  __dtor() {
  }
  set(s) {
    let $t0;
    this.rep$Str_char_Traits_char.len = ((strlen((s ? {a: s.a, i: s.i} : null))) | 0);
    for (let i = 0; (i < this.rep$Str_char_Traits_char.len); ($t0 = i, i = (($t0 + 1) | 0), $t0)) {
      this.buf$Str_char_Traits_char[i] = s.a[s.i + (i)];
    }
  }
  size__c() {
    return this.rep$Str_char_Traits_char.len;
  }
  at__c(i) {
    return this.buf$Str_char_Traits_char[i];
  }
  static compare(a, b) {
    while ((a.a[a.i] && (a.a[a.i] === b.a[b.i]))) {
       {
        a.i++;
        b.i++;
      }
    }
    return (((a.a[a.i]) - (b.a[b.i])) | 0);
  }
  static npos = -1;
}
class Node_double {
  next$Node_double;
  constructor(...$a) {
    this.__init_Node_double(...$a);
  }
  __init_Node_double(...$a) {
    this.next$Node_double = null;
  }
  __dtor() {
  }
}
class Node_double_Rebind_int {
  __init_Node_double_Rebind_int(...$a) { }
  __dtor() {
  }
}
class Node_int {
  next$Node_int;
  constructor(...$a) {
    this.__init_Node_int(...$a);
  }
  __init_Node_int(...$a) {
    this.next$Node_int = null;
  }
  __dtor() {
  }
}
class Node_int_Rebind_int {
  __init_Node_int_Rebind_int(...$a) { }
  __dtor() {
  }
}
function strlen(s) {
  let $t1;
  let n = ((0) >>> 0);
  while ((s.a[s.i + (n)] !== 0)) {
    ($t1 = n, n = (($t1 + 1) >>> 0), $t1);
  }
  return n;
}
function main() {
  let s = new Str_char_Traits_char();
  Str_char_Traits_char.prototype.set.call(s, {a: [104, 101, 108, 108, 111, 0], i: 0});
  (console.log((Str_char_Traits_char.prototype.size__c.call(s))));
  let c = Str_char_Traits_char.compare({a: [97, 98, 99, 0], i: 0}, {a: [97, 98, 100, 0], i: 0});
  (console.log(((c < 0))));
  (console.log(((Str_char_Traits_char.npos === ((-(1)) | 0)))));
  (console.log((Str_char_Traits_char.prototype.at__c.call(s, 1))));
  let n = new Node_double();
  (console.log(((n.next$Node_double === null))));
  let b = new Buf();
  (console.log((Buf.prototype.front.call(b))));
  return 0;
}
main();
