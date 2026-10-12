<?php
function main() {
  $x = ["v" => 10];
  $p = ["v" => ((["a" => $x, "i" => "v"]) ? ["a" => (["a" => $x, "i" => "v"])["a"], "i" => (["a" => $x, "i" => "v"])["i"]] : null)];
  ($p["v"])["a"][($p["v"])["i"]] = 20;
  null;
  null;
  $a = [1, 2, 3, 4];
  $q = ["a" => $a, "i" => 0];
  null;
  $q["i"]++;
  null;
  $q["i"] += (2);
  null;
  null;
  null;
  null;
  null;
  $n = null;
  null;
  null;
  $h = ($t0 = ["a" => [99], "i" => 0], $t0 ? ["a" => $t0["a"], "i" => $t0["i"]] : null);
  null;
  $arr = ($t1 = ["a" => array_fill(0, (3), 0), "i" => 0], $t1 ? ["a" => $t1["a"], "i" => $t1["i"]] : null);
  $arr["a"][$arr["i"]] = 7;
  $arr["a"][$arr["i"] + (2)] = 9;
  null;
  $pp = ((["a" => $p, "i" => "v"]) ? ["a" => (["a" => $p, "i" => "v"])["a"], "i" => (["a" => $p, "i" => "v"])["i"]] : null);
  ($pp["a"][$pp["i"]])["a"][($pp["a"][$pp["i"]])["i"]] = 30;
  null;
  return 0;
}
main();
