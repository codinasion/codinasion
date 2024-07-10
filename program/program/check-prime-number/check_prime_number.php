<?php
  $num = readline('Enter Number: ');
  
  if ($num <= 1) {
    echo "Not a Prime Number";
  } else {
    for ($i = 2; $i <= $num/2; $i++) {
      if ($num % $i == 0) {
        echo "Not a Prime Number";
        return;
      }
    }
  }
  
  echo "Prime Number";
?>
