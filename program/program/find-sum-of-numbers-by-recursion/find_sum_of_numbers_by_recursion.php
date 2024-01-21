<?php

function calculateSum($numbers, $index, $currentSum) {

     if ($index == count($numbers)) {
        return $currentSum;
    } else {
        
        return calculateSum($numbers, $index + 1, $currentSum + $numbers[$index]);
    }
}
// Taking input from the user
echo "Enter space-separated numbers: ";
$input = readline();
$numbers = explode(' ', $input);
$numbers = array_map('intval', $numbers);
$result = calculateSum($numbers, 0, 0);
echo "Sum of the numbers is: $result\n";
?>
