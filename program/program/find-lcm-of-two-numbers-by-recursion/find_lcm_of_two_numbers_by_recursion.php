<?php 

function gcd($x, $y)
{
    return $x === 0 ? $y : gcd($y % $x, $x);
}

function lcm($x, $y)
{
    return ($x / gcd($x, $y)) * $y;
}

echo(lcm(12, 18));

?>
