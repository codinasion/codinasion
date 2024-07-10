<?php
	$num = readline('Enter a number: ');
	$x = 0;
  $n =$num;
   
  while(floor($num))
  {  
    $mod = $num%10;
    $x = $x * 10 + $mod;  
    $num = $num/10;
  }  
  echo "Reverse of $n is $x.";
?>
