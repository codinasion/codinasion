<?php
// Give the input values for the formula
$inputA = 5;
$inputB = 10;
$inputC = 2;

// $sumD is the part of the equation that is inside of the square root
$sumD = pow($inputB, 2) - 4 * $inputA * $inputC;

// The rest of the equation. Everything is put in () so it is calculated in the right order.
$outputPositive = (-$inputB + pow($sumD, 0.5)) / (2 * $inputA);
$outputNegative = (-$inputB - pow($sumD, 0.5)) / (2 * $inputA);

echo "x = $outputPositive &nbsp; or &nbsp; x = $outputNegative";
