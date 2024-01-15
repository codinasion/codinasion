<?php

function ternary_search($arr, $value) {
    $left = 0;
    $right = count($arr) - 1;

    while ($left <= $right) {
        $partition_size = ($right - $left) / 3;
        $mid1 = $left + $partition_size;
        $mid2 = $right - $partition_size;

        if ($arr[$mid1] === $value) {
            return $mid1;
        }

        if ($arr[$mid2] === $value) {
            return $mid2;
        }

        if ($value < $arr[$mid1]) {
            $right = $mid1 - 1;
        } elseif ($value > $arr[$mid2]) {
            $left = $mid2 + 1;
        } else {
            $left = $mid1 + 1;
            $right = $mid2 - 1;
        }
    }

    return -1;
}

// Example usage
$list = [1, 2, 3, 4, 5];
$value = 4;
$result = ternary_search($list, $value);

if ($result !== -1) {
    echo "Element found at index: $result";
} else {
    echo "Element not found in the array";
}

?>
