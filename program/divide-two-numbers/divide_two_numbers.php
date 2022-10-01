<?php
	// Program to divide two numbers.
	function divide_two_numbers($num1, $num2 = 1) {
		if (!is_numeric($num1) || !is_numeric($num2) || $num2 == 0) {
			return null;
		}
		return $num1 / $num2;
	}
	// Tests
	print_r(divide_two_numbers(2, 4));        // 0.5
	print_r(divide_two_numbers(15, "5"));     // 3
	print_r(divide_two_numbers("600", 0));    // null or empty
	print_r(divide_two_numbers("Hello"));     // null or empty
