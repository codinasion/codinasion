<?php

function convert_hours_to_weeks($hours)
{
	return $hours / 24 / 7;
}

echo convert_hours_to_weeks(840);
