<?php

function sumOfGP($a, $r, $n)
{
    $sum = 0; 
    for ($i = 0; $i < $n; $i++)
    {
        $sum = $sum + $a;
        $a = $a * $r;
    }
    return $sum;
}
  

echo(sumOfGP(2, 3, 3));
  

?>
