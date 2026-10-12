<?php
class Point {
  public $x;
  public $y;
  function __construct(...$a) {
    $this->__init_Point(...$a);
  }
  function __init_Point(...$a) {
    if (count($a) >= 0 && count($a) <= 0) {
      $this->x = 0;
      $this->y = 0;
    }
    else if (count($a) >= 2 && count($a) <= 2 && (is_int($a[0]) || is_bool($a[0])) && (is_int($a[1]) || is_bool($a[1]))) {
      $this->x = $a[0] ?? null;
      $this->y = $a[1] ?? null;
    }
    else if (count($a) >= 1 && count($a) <= 1 && ($a[0] === null || is_array($a[0]))) {
      $this->x = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->x * 10);
      $this->y = ((($a[0] ?? null)["a"][($a[0] ?? null)["i"]])->y * 10);
    }
    else { throw new Exception("no matching constructor"); }
  }
  function __dtor() {
  }
  function sum() {
    return ($this->x + $this->y);
  }
  function sum__c() {
    return (($this->x + $this->y) + 100);
  }
  static function getCount() {
    return Point::$count;
  }
  function addx($d) {
    $this->x += $d;
    return ["a" => [$this], "i" => 0];
  }
  public static $count;
}
function getSum($p) {
  return ($p["a"][$p["i"]])->sum__c();
}
function main() {
  $p = new Point();
  null;
  $q = ["v" => new Point(3, 4)];
  null;
  $r = new Point(["a" => $q, "i" => "v"]);
  null;
  null;
  null;
  ($q["v"])->addx(10);
  null;
  $pp = ($t0 = ["a" => [new Point(1, 2)], "i" => 0], $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  null;
  return 0;
}
Point::$count = 5;
main();
