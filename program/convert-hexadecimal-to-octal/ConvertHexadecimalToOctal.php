<?php

function convert_hexadecimal_to_octal($input)
{
	return decoct(hexdec($input));
}

echo convert_hexadecimal_to_octal('A');
