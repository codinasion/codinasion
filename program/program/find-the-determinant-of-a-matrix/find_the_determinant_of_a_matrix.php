<?php

function determinant2x2($a, $b, $c, $d) {
    return $a * $d - $b * $c;
}

function determinant3x3($mat) {
    $det = 0;
    for ($i = 0; $i < 3; $i++) {
        $det += $mat[0][$i] * determinant2x2(
            $mat[1][($i + 1) % 3], $mat[1][($i + 2) % 3],
            $mat[2][($i + 1) % 3], $mat[2][($i + 2) % 3]
        );
    }
    return $det;
}

$mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 
$det = determinant3x3($mat);
 
echo "Determinant of the given matrix is: ".$det;
?>
