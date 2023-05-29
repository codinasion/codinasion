<?php

function convert_string_to_dotcase($string)
{
	return str_replace(" ", ".", strtolower($string));
}

echo convert_string_to_dotcase("hello world");
