<?php
class Counter {
  public $n;
  function __construct(...$a) {
    $this->__init_Counter(...$a);
  }
  function __init_Counter(...$a) {
    $this->n = 0;
  }
  function __dtor() {
  }
  function bump() {
    $this->n++;
  }
  function value__c() {
    return $this->n;
  }
}
function twice($x) {
  return ($x * 2);
}
function main() {
  null;
  $c = new Counter();
  $c->bump();
  $c->bump();
  null;
  return 0;
}
main();
