<?php

function checkIntegerOrFloat($num) {
	echo strpos($num,'.') !== false ? 'Float' : 'Integer';
}

echo checkIntegerOrFloat(1);

?>
