<?php

function sumofSquares($n)
{
    $sum = 0;
    for ($i = 1; $i <= count($n); $i++)
        $sum += ($i * $i);
 
    return $sum;
}
 

echo sumofSquares([1,2,3,4,5]);
     

?>
