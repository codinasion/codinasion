<?php

function find_lcm_of_two_numbers($n1, $n2)
{
	if ($n1 > $n2) {
		$temp = $n1;
		$n1 = $n2;
		$n2 = $temp;
	}

	for ($i = 1; $i < ($n1 + 1); $i++) {
		if ($n1 % $i == 0 && $n2 % $i == 0)
			$gcd = $i;
	}

	$lcm = ($n1 * $n2) / $gcd;
	return $lcm;
}

echo find_lcm_of_two_numbers(12, 18);
