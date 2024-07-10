<?php

function selectionSort(&$arr) {
    $n = count($arr);

    for ($i = 0; $i < $n - 1; $i++) {
        $min = $i;

        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$min]) {
                $min = $j;
            }
        }

        // Swap the minimum element with the current element
        if ($min != $i) {
            $temp = $arr[$min];
            $arr[$min] = $arr[$i];
            $arr[$i] = $temp;
        }
    }
}

// Example usage:
$inputArray = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

echo "Input Array: [" . implode(", ", $inputArray) . "]\n";

selectionSort($inputArray);

echo "Sorted Array: [" . implode(", ", $inputArray) . "]\n";

?>