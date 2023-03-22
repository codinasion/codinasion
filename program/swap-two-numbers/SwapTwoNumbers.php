<?php
	$a = 10;
	$b = 20;

	echo "Before a: ".$a.", b: ".$b."\n";

	$a = $a + $b;
	$b = $a - $b;
	$a = $a - $b;

	echo "After  a: ".$a.", b: ".$b;
?>
