"use strict";
class Twice {
  constructor(...$a) {
    this.__init_Twice(...$a);
  }
  __init_Twice(...$a) {
  }
  __dtor() {
  }
  op_call(x) {
    return ((Math.imul(x, 2)) | 0);
  }
}
class Box_char {
  v;
  constructor(...$a) {
    this.__init_Box_char(...$a);
  }
  __init_Box_char(...$a) {
    this.v = $a[0];
  }
  __dtor() {
  }
  get() {
    return this.v;
  }
}
class Same_int_int {
  __init_Same_int_int(...$a) { }
  __dtor() {
  }
}
class Same_int_char {
  __init_Same_int_char(...$a) { }
  __dtor() {
  }
}
function main() {
  let t = new Twice();
  let c = new Box_char(65);
  (console.log((1), (0), (t.op_call(21)), (((c.get()) | 0))));
  return 0;
}
main();
