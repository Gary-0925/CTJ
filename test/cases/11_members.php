<?php
class Buf {
  public $d;
  function __construct(...$a) {
    $this->__init_Buf(...$a);
  }
  function __init_Buf(...$a) {
    $this->d = array_fill(0, 4, 0);
    $this->d[0] = 5;
  }
  function __dtor() {
  }
  function op_index($i) {
    return $this->d[$i];
  }
  function front() {
    return $this->op_index(0);
  }
}
class Traits_char {
  function __dtor() {
  }
}
class Str_char_Traits_char {
  public $buf;
  public $rep;
  function __construct(...$a) {
    $this->__init_Str_char_Traits_char(...$a);
  }
  function __init_Str_char_Traits_char(...$a) {
    $this->buf = array_fill(0, 32, 0);
    $this->rep = new Str_char_Traits_char_Rep();
  }
  function __dtor() {
  }
  function set($s) {
    $this->rep->len = strlen(($s ? ["a" => $s["a"], "i" => $s["i"]] : null));
    for ($i = 0; ($i < $this->rep->len); $i++) {
      $this->buf[$i] = $s["a"][$s["i"] + ($i)];
    }
  }
  function size__c() {
    return $this->rep->len;
  }
  function at__c($i) {
    return $this->buf[$i];
  }
  static function compare($a, $b) {
    while (($a["a"][$a["i"]] && ($a["a"][$a["i"]] === $b["a"][$b["i"]]))) {
       {
        $a["i"]++;
        $b["i"]++;
      }
    }
    return ($a["a"][$a["i"]] - $b["a"][$b["i"]]);
  }
  public static $npos;
}
class Str_char_Traits_char_Rep extends Traits_char {
  public $len;
  function __construct(...$a) {
    parent::__construct();
    $this->__init_Str_char_Traits_char_Rep(...$a);
  }
  function __init_Str_char_Traits_char_Rep(...$a) {
    $this->len = 0;
  }
  function __dtor() {
    $this->__dtor_Traits_char();
  }
}
class Node_double {
  public $next;
  function __construct(...$a) {
    $this->__init_Node_double(...$a);
  }
  function __init_Node_double(...$a) {
    $this->next = null;
  }
  function __dtor() {
  }
}
class Node_double_Rebind_int {
  function __dtor() {
  }
}
class Node_int {
  public $next;
  function __construct(...$a) {
    $this->__init_Node_int(...$a);
  }
  function __init_Node_int(...$a) {
    $this->next = null;
  }
  function __dtor() {
  }
}
class Node_int_Rebind_int {
  function __dtor() {
  }
}
function strlen($s) {
  $n = 0;
  while (($s["a"][$s["i"] + ($n)] !== 0)) {
    $n++;
  }
  return $n;
}
function main() {
  $s = new Str_char_Traits_char();
  $s->set(["a" => [104, 101, 108, 108, 111, 0], "i" => 0]);
  null;
  $c = Str_char_Traits_char::compare(["a" => [97, 98, 99, 0], "i" => 0], ["a" => [97, 98, 100, 0], "i" => 0]);
  null;
  null;
  null;
  $n = new Node_double();
  null;
  $b = new Buf();
  null;
  return 0;
}
Str_char_Traits_char::$npos = (-(1));
main();
