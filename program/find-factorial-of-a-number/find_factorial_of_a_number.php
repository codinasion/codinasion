<?php

function factorial($n) {  
$factorial = 1;  
for ($x=$n; $x>=1; $x--)   
{  
  $factorial = $factorial * $x;  
}  
return "Factorial of $n is $factorial";  
}

echo factorial(5);

?>
