<?php

function reverseNumber($num)
{
 $n = strlen($num);
 if($n === 1)
   {
    return $num;
   }
 else
   {
   $n--;
   return reverseNumber(substr($num,1, $n)) . substr($num, 0, 1);
   }
}
print_r(reverseNumber(123)."\n");

?>
