<?php
class Base {
  public $v;
  function __construct(...$a) {
    $this->__init_Base(...$a);
  }
  function __init_Base(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->v = 1;
    }
    else if (count($a) >= 1 && count($a) <= 1 && (is_int($a[0]) || is_bool($a[0]))) {
      $this->v = $a[0] ?? null;
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function get() {
    return $this->v;
  }
}
class Derived extends Base {
  public $w;
  function __construct(...$a) {
    parent::__construct(10);
    $this->__init_Derived(...$a);
  }
  function __init_Derived(...$a) {
    $this->w = 20;
  }
  function __dtor() {
    $this->__dtor_Base();
  }
  function get() {
    return ($this->v + $this->w);
  }
}
function use_($b) {
  return ($b["a"][$b["i"]])->get();
}
function main() {
  $d = ["v" => new Derived()];
  null;
  $p = ($t0 = ["a" => [new Derived()], "i" => 0], $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  null;
  null;
  $b = ["v" => new Base()];
  null;
  (Closure::bind(function (...$a) { return $this->get(...$a); }, $d["v"], Base::class))();
  null;
  return 0;
}
main();
