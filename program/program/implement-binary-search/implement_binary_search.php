<?php

function binary_search($arr, $x) {
    $lowerBound = 0;
    $upperBound = count($arr) - 1;

    while ($upperBound >= $lowerBound) {
        $midPoint = floor(($upperBound + $lowerBound) / 2);

        if ($arr[$midPoint] < $x) {
            $lowerBound = $midPoint + 1;
        } elseif ($arr[$midPoint] > $x) {
            $upperBound = $midPoint - 1;
        } else {
            return $midPoint;
        }
    }

    return -1; // Not found
}

// Example usage:
$list = [1, 2, 3, 4, 5];
$value = 4;
$result = binary_search($list, $value);

if ($result != -1) {
    echo "Value $value found at index $result";
} else {
    echo "Value $value not found in the list";
}
?>
