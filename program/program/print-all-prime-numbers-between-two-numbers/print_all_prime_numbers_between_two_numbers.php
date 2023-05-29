<?php

function print_all_prime_numbers_between_two_numbers($n1, $n2)
{
	$primeNumbers = [];
	while ($n1 < $n2) {
		$count = 0;
		for ($i = 2; $i <= $n1; $i++) {
			if (($n1 % $i) == 0) {
				$count++;
			}
		}
		if ($count == 1) {
			$primeNumbers[] = $n1;
		}
		$n1++;
	}
	return implode(' ', $primeNumbers);
}

echo print_all_prime_numbers_between_two_numbers(10, 20);
