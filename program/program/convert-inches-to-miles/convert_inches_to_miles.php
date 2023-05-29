<?php

function convert_inches_to_miles($inch)
{
	return $inch / 63360;
}

echo convert_inches_to_miles(316800);
