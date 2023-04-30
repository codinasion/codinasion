<?php
  function recursiveAdd($arg) {
    if ($arg>9) {
        return $arg%10 + recursiveAdd(floor($arg/10));
    } else {
        return $arg;
    }
  }
  
  echo recursiveAdd(123456789);
?>
