<?php

function check_alphabet($text)
{
	return ctype_alpha($text);
}

echo check_alphabet('a') ? 'Alphabet' : 'Non Alphabet';
