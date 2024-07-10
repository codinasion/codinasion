<?php
	// Convert seconds to minutes.
	// 1 min = 60 secs.
	function convert_seconds_to_minutes($sec) {
		if (!is_numeric($sec)) {
			return null;
		}
		return $sec / 60;
	}
	// Tests
	print_r(convert_seconds_to_minutes(60));        // 1
	print_r(convert_seconds_to_minutes(160));       // 2.66
	print_r(convert_seconds_to_minutes("600"));     // 10
	print_r(convert_seconds_to_minutes("Hello"));   // null or empty
