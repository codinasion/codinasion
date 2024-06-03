<?php

function transpose($matrix) {
    $result = [];
    foreach ($matrix as $rowIndex => $row) {
        foreach ($row as $colIndex => $value) {
            $result[$colIndex][$rowIndex] = $value;
        }
    }
    return $result;
}

$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$transposedMatrix = transpose($matrix);
foreach ($transposedMatrix as $row) {
    echo implode(' ', $row) . "\n";
}
