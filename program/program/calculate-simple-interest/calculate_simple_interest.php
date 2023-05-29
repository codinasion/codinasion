<?php

function simpleInterest($principal, $interest, $time){
    return ($principal * $interest * $time)/100;
}

echo simpleInterest(1000, 10, 5);

?>
