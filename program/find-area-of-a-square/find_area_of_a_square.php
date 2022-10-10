<?php
	// Find Area of a Square.
	function find_area_of_a_square($side) {
		if (!is_numeric($side)) {
			return null;
		}
		return $side * $side;
	}
	// Tests
	print_r(find_area_of_a_square(5));      // 25
