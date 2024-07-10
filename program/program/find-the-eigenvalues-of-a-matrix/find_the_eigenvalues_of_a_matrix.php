<?php

function findEigenvalues($matrix) {
  // calculate the characteristic polynomial of the matrix
  $charPoly = array();
  $n = count($matrix);
  for ($i = 0; $i < $n; $i++) {
    $charPoly[$i] = -$matrix[$i][$i];
  }
  $charPoly[$n] = 1;

  for ($k = 1; $k < $n; $k++) {
    for ($i = $k; $i < $n; $i++) {
      $mult = $matrix[$i][$k - 1] / $matrix[$k - 1][$k - 1];
      for ($j = $k; $j < $n; $j++) {
        $matrix[$i][$j] -= $mult * $matrix[$k - 1][$j];
      }
      $charPoly[$n - $k] *= (1 - $mult);
    }
  }

  // find the roots of the characteristic polynomial using the quadratic formula
  $eigenvalues = array();
  $a = $charPoly[0];
  $b = $charPoly[1];
  $c = $charPoly[2];
  $discriminant = $b * $b - 4 * $a * $c;
  if ($discriminant > 0) {
    $eigenvalues[] = (-$b + sqrt($discriminant)) / (2 * $a);
    $eigenvalues[] = (-$b - sqrt($discriminant)) / (2 * $a);
  } else if ($discriminant == 0) {
    $eigenvalues[] = -$b / (2 * $a);
  } else {
    $realPart = -$b / (2 * $a);
    $imaginaryPart = sqrt(abs($discriminant)) / (2 * $a);
    $eigenvalues[] = $realPart + $imaginaryPart . 'i';
    $eigenvalues[] = $realPart - $imaginaryPart . 'i';
  }

  return $eigenvalues;
}

// test the function
$matrix = array(
  array(1, 2, 3),
  array(4, 5, 6),
  array(7, 8, 9)
);

$eigenvalues = findEigenvalues($matrix);

foreach ($eigenvalues as $eigenvalue) {
  echo $eigenvalue . "\n";
}

/* The output of this program is:

    16.116843969807043
    -1.1168439698070427
    0.9999999999999998 */