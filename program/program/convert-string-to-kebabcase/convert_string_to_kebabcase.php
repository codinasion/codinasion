<?php

function convert_string_to_kebabcase($string)
{
	return str_replace(" ", "-", strtolower($string));
}

echo convert_string_to_kebabcase("hello world");
