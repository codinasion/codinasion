<?php

function maxSubArraySum($a, $size)
{
	$max_so_far = PHP_INT_MIN;
	$max_ending_here = 0;

	for ($i = 0; $i < $size; $i++)
	{
		$max_ending_here = $max_ending_here + $a[$i];
		if ($max_so_far < $max_ending_here)
			$max_so_far = $max_ending_here;

		if ($max_ending_here < 0)
			$max_ending_here = 0;
	}
	return $max_so_far;
}

$a = array(-2, -3, 4, -1, -2, 1, 5, -3);
$n = count($a);
$max_sum = maxSubArraySum($a, $n);
echo "Maximum sum of contiguous subarray : " ,$max_sum;

?>
