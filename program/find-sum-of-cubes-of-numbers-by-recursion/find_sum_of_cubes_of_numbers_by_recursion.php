<?php
  $n = readline('Enter Number: ');
  echo "Sum of cubes: ".Sum($n);
  
  function Sum($n) { 
    if($n == 1)
      return 1;
    else
      return ($n**3 + Sum($n-1));
  }
?>
