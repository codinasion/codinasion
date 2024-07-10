<?php

function find_largest_and_smallest_numbers_in_an_array($numbers)
{
	sort($numbers);
	$largestNumber = $numbers[count($numbers) - 1];
	$smallestNumber = $numbers[0];
	return "$largestNumber, $smallestNumber";
}

$inputs = [1, 2, 3, 4, 5];
echo find_largest_and_smallest_numbers_in_an_array($inputs);
