<?php

function check_palindrome_number($num)
{
	return strrev($num) == $num;
}

echo check_palindrome_number(121) ? 'Palindrome String' : 'Not Palindrome String';
