<?php
function findSmallestTwo($arr) {
    // Sort the array in ascending order
    sort($arr);

    // Get the first two elements
    $smallestTwo = array_slice($arr, 0, 2);

    // Print the result
    echo "Smallest two elements: " . implode(' ', $smallestTwo) . "\n";
}

// Test cases
$arr1 = array(12, 13, 1, 10, 34, 1);
$arr2 = array(10, 5, 10);

echo "Input 1: " . implode(' ', $arr1) . "\n";
findSmallestTwo($arr1);

echo "\n";

echo "Input 2: " . implode(' ', $arr2) . "\n";
findSmallestTwo($arr2);
?>
