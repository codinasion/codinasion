<?php

function averageRecursion($a, $i, $n)
{
    if ($i == $n - 1)
        return $a[$i];

    if ($i == 0)
        return (($a[$i] + averageRecursion($a, $i + 1, $n)) / $n);
 
    return ($a[$i] + averageRecursion($a, $i + 1, $n));
}

 
$arr = [1,2,3,4,5];
$n = sizeof($arr);
 
echo averageRecursion($arr, 0, $n);

?>
 
