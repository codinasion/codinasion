<?php
function factorial($num) {
  if($num == 0 || $num == 1) return 1;
  else return $num * factorial($num-1);
}

$n = (int)readline("Enter total objects(n) : ");
$r = (int)readline("Enter objects to be selected(r) : ");
$p = factorial($n)/factorial($n-$r);
echo "The permutation is : " . $p;
?>
