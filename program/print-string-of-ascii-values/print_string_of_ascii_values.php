<?php

function asciiToString($ascii, $length)
{
    $num = 0;
    for($i = 0; $i < $length; $i++)
    {

        $num = $num * 10 + (ord($ascii[$i]) - ord('0'));

        if ($num >= 32 && $num <= 122)
        {

            $ch = chr($num);
            print($ch);
 
            $num = 0;
            }
        }
}
 
    $ascii = "656667";
    $length = strlen($ascii);
     
    asciiToString($ascii, $length);
 
?>
