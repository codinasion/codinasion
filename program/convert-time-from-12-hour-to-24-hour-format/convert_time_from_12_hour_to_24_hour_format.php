<?php


function convert_time_from_12_hour_to_24_hour_format($hour){
	return date("H:i:s", strtotime($hour));
}

echo convert_time_from_12_hour_to_24_hour_format("11:05:45PM");