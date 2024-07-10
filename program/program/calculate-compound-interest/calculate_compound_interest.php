<?php
function compoundInterest($principal, $interest, $time) {
   $compoundInterest =  $principal * pow((1+$interest), $time);
   return $compoundInterest;
}
echo compoundInterest(1000, 10, 5);
?>
