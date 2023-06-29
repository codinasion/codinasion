<?php

function sumOfAP($a, $d, $n)
{
    $sum = 0;
    for ($i = 0; $i < $n; $i++)
    {
        $sum = $sum + $a;
        $a = $a + $d;
    }
    return $sum;
}
  
$n = 2;
$a = 5; $d = 3;
echo(sumOfAP($a, $d, $n));

?>
