<?php
// Function to calculate the determinant of a matrix
function determinant(array $matrix, $size) {
    $det = 0;
    if ($size == 1) {
        return $matrix[0][0];
    }

    $temp = array_fill(0, $size, array_fill(0, $size, 0));
    $sign = 1;

    for ($f = 0; $f < $size; $f++) {
        getCofactor($matrix, $temp, 0, $f, $size);
        $det += $sign * $matrix[0][$f] * determinant($temp, $size - 1);
        $sign = -$sign;
    }

    return $det;
}

// Function to get cofactor of a matrix
function getCofactor(array $matrix, array &$temp, $p, $q, $n) {
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
}

// Function to calculate adjoint of a matrix
function adjoint(array &$matrix) {
    $size = count($matrix);
    if ($size == 1) {
        $matrix[0][0] = 1;
        return;
    }

    $sign = 1;
    $temp = array_fill(0, $size, array_fill(0, $size, 0));

    $adj = array_fill(0, $size, array_fill(0, $size, 0));
    for ($i = 0; $i < $size; $i++) {
        for ($j = 0; $j < $size; $j++) {
            getCofactor($matrix, $temp, $i, $j, $size);
            $sign = (($i + $j) % 2 == 0) ? 1 : -1;
            $adj[$j][$i] = ($sign) * (determinant($temp, $size - 1));
        }
    }
    $matrix = $adj;
}

// Taking input from the user
echo "Enter the size of the matrix (n for n*n matrix): ";
$size = trim(fgets(STDIN));

$matrix = array();
echo "Enter the elements of the matrix row by row:\n";
for ($i = 0; $i < $size; $i++) {
    $matrix[$i] = explode(" ", trim(fgets(STDIN)));
}

adjoint($matrix);

echo "Adjoint of the matrix is:\n";
foreach ($matrix as $row) {
    echo "[" . implode(", ", $row) . "]\n";
}
?>
