<?php

function getCofactor($matrix, $p, $q) {
    $temp = [];
    $n = count($matrix);
    $i = 0;
    $j = 0;

    for ($row = 0; $row < $n; $row++) {
        for ($col = 0; $col < $n; $col++) {
            if ($row != $p && $col != $q) {
                $temp[$i][$j++] = $matrix[$row][$col];
                if ($j == $n - 1) {
                    $j = 0;
                    $i++;
                }
            }
        }
    }
    return $temp;
}

function determinant($matrix, $n) {
    if ($n == 1) {
        return $matrix[0][0];
    }
    $temp = [];
    $sign = 1;
    $d = 0;

    for ($f = 0; $f < $n; $f++) {
        $temp = getCofactor($matrix, 0, $f);
        $d += $sign * $matrix[0][$f] * determinant($temp, $n - 1);
        $sign = -$sign;
    }
    return $d;
}

function cofactor($matrix) {
    $n = count($matrix);
    $cofactorMatrix = [];

    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j < $n; $j++) {
            $temp = getCofactor($matrix, $i, $j);
            $cofactorMatrix[$i][$j] = determinant($temp, $n - 1) * pow(-1, $i + $j);
        }
    }
    return $cofactorMatrix;
}

$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$cofactorMatrix = cofactor($matrix);
foreach ($cofactorMatrix as $row) {
    echo "[" . implode(", ", $row) . "]\n";
}

