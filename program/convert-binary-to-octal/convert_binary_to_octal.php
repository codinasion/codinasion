<?php

$binary = readline();
$possibleChars = ["0", "1"];

$decimal = 0;

foreach (str_split($binary) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(2, (int) (strlen($binary) - $key - 1));
    }
}

$octal = "";

while (true) {
    $quocient = floor($decimal / 8);
    if ($quocient < 1) {
        $octal .= $decimal;
        break;
    }
    $remainder = $decimal % 8;
    $decimal = $quocient;
    $octal .= $remainder;
}

echo strrev($octal) . "\n";

?>