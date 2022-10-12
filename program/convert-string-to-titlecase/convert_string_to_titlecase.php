<?php

function convert_string_to_titlecase($string)
{
	$arrString = explode(" ", $string);
	$arrString = array_map(function ($value) {
		$result = strtoupper($value[0]) . substr($value, 1);
		return $result;
	}, $arrString);

	return implode(" ", $arrString);
}

echo convert_string_to_titlecase("hello world");
