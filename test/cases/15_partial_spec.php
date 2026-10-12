<?php
class Twice {
  function __construct(...$a) {
    $this->__init_Twice(...$a);
  }
  function __init_Twice(...$a) {
  }
  function __dtor() {
  }
  function op_call($x) {
    return ($x * 2);
  }
}
class Box_char {
  public $v;
  function __construct(...$a) {
    $this->__init_Box_char(...$a);
  }
  function __init_Box_char(...$a) {
    $this->v = $a[0] ?? null;
  }
  function __dtor() {
  }
  function get() {
    return $this->v;
  }
}
class Same_int_int {
  function __dtor() {
  }
}
class Same_int_char {
  function __dtor() {
  }
}
function main() {
  $t = new Twice();
  $c = new Box_char(65);
  null;
  return 0;
}
main();
