<?php

function averageRecursion($a, $i=0)
{
    if(!is_array($a)) $a = str_split($a);
    
    $n = sizeof($a);
    
    if ($i == $n - 1) return $a[$i];

    if ($i == 0) return (($a[$i] + averageRecursion($a, $i + 1)) / $n);
 
    return ($a[$i] + averageRecursion($a, $i + 1));
}

$num = 123;
echo averageRecursion($num);
 
 
?>
