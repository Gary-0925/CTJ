<?php
function inc($r) {
  $r["a"][$r["i"]]++;
}
function pick($b, $a, $c) {
  return ($b ? $a : $c);
}
function main() {
  $x = ["v" => 5];
  $r = ["a" => $x, "i" => "v"];
  $r["a"][$r["i"]] = 6;
  null;
  inc(["a" => $x, "i" => "v"]);
  null;
  $y = ["v" => 100];
  ($t0 = pick(true, ["a" => $x, "i" => "v"], ["a" => $y, "i" => "v"]), $t0["a"][$t0["i"]] = 50);
  null;
  ($t1 = pick(false, ["a" => $x, "i" => "v"], ["a" => $y, "i" => "v"]), $t1["a"][$t1["i"]] = 60);
  null;
  $cr = ["a" => $x, "i" => "v"];
  null;
  return 0;
}
main();
