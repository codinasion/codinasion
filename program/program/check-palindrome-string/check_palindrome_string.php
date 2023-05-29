<?php

function check_palindrome_string($str)
{
	return strrev($str) == $str;
}

echo check_palindrome_string('abba') ? 'Palindrome String' : 'Not Palindrome String';
