<?php

	$str = "hello world";

	// method 1
	print_r(str_split($str));

	// method 2
	print_r(preg_split("//", $str , -1, PREG_SPLIT_NO_EMPTY));

?>
