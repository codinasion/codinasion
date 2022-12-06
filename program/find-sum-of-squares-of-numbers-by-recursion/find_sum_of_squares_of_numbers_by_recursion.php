<?php

function recursiveSum($numbers)
{
    if (count($numbers) == 1) {
        return pow((int) $numbers[0], 2);
    } else {
        return pow($numbers[0], 2) + recursiveSum(array_slice($numbers, 1));
    }
}


$numbers = explode(" ", readline());

echo recursiveSum($numbers) . "\n";

?>