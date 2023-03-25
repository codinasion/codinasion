<?php

	function secondLargest(array $arr) {

		$arr = array_unique($arr); // remove duplicate, in case we have multiple same largest numbers
		sort($arr);
		return $arr[sizeof($arr)-2];
	}	

	echo secondLargest(array(1, 2, 3, 4, 5))."\n";
	echo secondLargest(array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10))."\n";
	echo secondLargest(array(1123, 244, 35, 466, 57, 6, 7, 823, 9, 12310, 10));
?>
