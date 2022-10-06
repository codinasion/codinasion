<?php

function convert_minutes_to_weeks($minutes)
{
	return $minutes / 60 / 24 / 7;
}

echo convert_minutes_to_weeks(50400);
