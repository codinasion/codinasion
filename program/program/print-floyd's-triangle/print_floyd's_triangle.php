<?php

function floydsTriangle($n)
{
    $val = 1;
     
    for($i = 1; $i <= $n; $i++)
    {
        for($j = 1; $j <= $i; $j++)
        {
            print($val." ");
            $val++;
        }
        print("\n");
    }
}
 

floydsTriangle(5);

?>
