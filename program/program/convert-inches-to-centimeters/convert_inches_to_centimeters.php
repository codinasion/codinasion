<?php
	// Convert inches to centimeters.
	// 1 inch = 2.54 centimeters
	function convert_inches_to_centimeters($in) {
		if (!is_numeric($in)) {
			return null;
		}
		return $in * 2.54;
	}
	// Tests
	print_r(convert_inches_to_centimeters(5));          // 12.7
	print_r(convert_inches_to_centimeters(10));         // 25,4
	print_r(convert_inches_to_centimeters("5"));        // 12.7
	print_r(convert_inches_to_centimeters("Hello"));    // null
