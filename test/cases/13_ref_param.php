<?php
function scale($v, $k) {
  $v["a"][$v["i"]] = ($v["a"][$v["i"]] * $k);
}
function geti($x) {
  return $x["a"][$x["i"]];
}
function main() {
  $x = ["v" => 1];
  $y = ["v" => 2];
  swapv_int(["a" => $x, "i" => "v"], ["a" => $y, "i" => "v"]);
  null;
  scale(["a" => $x, "i" => "v"], 10);
  null;
  null;
  return 0;
}
function swapv_int($a, $b) {
  $t = $a["a"][$a["i"]];
  $a["a"][$a["i"]] = $b["a"][$b["i"]];
  $b["a"][$b["i"]] = $t;
}
main();
