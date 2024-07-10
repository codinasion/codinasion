<?php

function findLargestTwo($arr, $size) {
    if ($size < 2) {
        echo "Array size should be at least 2.\n";
        return;
    }

    $firstLargest = PHP_INT_MIN;
    $secondLargest = PHP_INT_MIN;

    for ($i = 0; $i < $size; ++$i) {
        if ($arr[$i] > $firstLargest) {
            
            $secondLargest = $firstLargest;
            $firstLargest = $arr[$i];
        } elseif ($arr[$i] > $secondLargest && $arr[$i] != $firstLargest) {
          
            $secondLargest = $arr[$i];
        }
    }

    if ($secondLargest == PHP_INT_MIN) {
        echo "There are not enough distinct elements in the array.\n";
    } else {
        echo "The largest two elements are $firstLargest and $secondLargest\n";
    }
}


echo "Enter the size of the array: ";
$size = intval(readline());

if ($size <= 0) {
    echo "Invalid array size.\n";
    exit(1);
}

echo "Enter the elements of the array (space-separated): ";
$input = trim(readline());
$arr = array_map('intval', explode(' ', $input));

findLargestTwo($arr, $size);

?>
