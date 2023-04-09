<?php
  function recursiveAdd($arg) {
    if ($arg>9) {
        return $arg%10 + recursiveAdd(floor($arg/10));
    } else {
        return $arg;
    }
  }
  
  $num = readLine("Enter Number: ");
  $numlength = strlen((string) $num);
  echo recursiveAdd($num)/$numlength;
?>
