<?php
	// Convert feet to miles.
	// 1 mile = 5280 feet
	function convert_feet_to_miles($ft) {
		if (!is_numeric($ft)) {
			return null;
		}
		return $ft / 5280;
	}
	// Tests
	print_r(convert_feet_to_miles(5280));      // 1
	print_r(convert_feet_to_miles(15280));     // 2.89
	print_r(convert_feet_to_miles("5280"));    // 1
	print_r(convert_feet_to_miles("Hello"));   // null or empty
