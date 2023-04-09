<?php

function poundsToKilogram($pounds){
    return $pounds * 0.453592;
}

// Example usage:
$weightInPounds = 10;
$weightInKilograms = poundsToKilogram($weightInPounds);

echo $weightInPounds . ' pounds is equal to ' . $weightInKilograms . ' kilograms.';

?>
