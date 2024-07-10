<?php
// ready to execute
function findSmallestThree($arr) {
// Sort the array in ascending order
sort($arr);

$smallestThree = array_slice($arr, 0, 3);

// Print the result
echo "Smallest three elements: " . implode(' ', $smallestThree);
}

// Test cases
$arr1 = array(10, 4, 3, 50, 23, 90);
$arr2 = array(12, 13, 1, 10, 34, 1);

echo "Input 1: " . implode(' ', $arr1) . "\n";
findSmallestThree($arr1);

echo "\n\n";

echo "Input 2: " . implode(' ', $arr2) . "\n";
findSmallestThree($arr2);
?>