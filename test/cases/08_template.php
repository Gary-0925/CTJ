<?php
class Stack_int_value8 {
  public $data;
  public $top;
  function __construct(...$a) {
    $this->__init_Stack_int_value8(...$a);
  }
  function __init_Stack_int_value8(...$a) {
    $this->data = array_fill(0, 8, 0);
    $this->top = 0;
  }
  function __dtor() {
  }
  function push($v) {
    $this->data[$this->top++] = $v;
  }
  function pop() {
    return $this->data[--$this->top];
  }
  function size__c() {
    return $this->top;
  }
}
class Pair_int {
  public $a;
  public $b;
  function __construct(...$a) {
    $this->__init_Pair_int(...$a);
  }
  function __init_Pair_int(...$a) {
    $this->a = $a[0] ?? null;
    $this->b = $a[1] ?? null;
  }
  function __dtor() {
  }
  function sum() {
    return ($this->a + $this->b);
  }
}
function main() {
  null;
  null;
  $s = new Stack_int_value8();
  $s->push(1);
  $s->push(2);
  $s->push(3);
  null;
  null;
  $p = new Pair_int(4, 5);
  null;
  return 0;
}
function maxOf_int($a, $b) {
  return (($a > $b) ? $a : $b);
}
function maxOf_double($a, $b) {
  return (($a > $b) ? $a : $b);
}
main();
