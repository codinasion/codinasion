<?php
$n = readline('Enter Number: ');
$i = 1;
$sum = 0;

while($i <= $n) {
  $sum += $i**3;
  $i++;
}

echo "Sum of cubes is: $sum";
?>
