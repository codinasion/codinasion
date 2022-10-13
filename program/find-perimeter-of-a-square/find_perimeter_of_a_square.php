<?php
function Circumference($a)
{
	return 4 * $a;
}

$a = (int)readline('Enter side of square: ');
echo "Circumference of square is ",
		Circumference($a);

?>
