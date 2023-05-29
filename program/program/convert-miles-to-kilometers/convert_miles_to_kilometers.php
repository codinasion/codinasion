<?php

function convert_miles_to_kilometers($miles)
{
	return $miles * 1.60934;
}

echo convert_miles_to_kilometers(5);
