<?php

$octal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7"];

$decimal = 0;

foreach (str_split($octal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(8, (int) (strlen($octal) - $key - 1));
    }
}

$binary = "";

while (true) {
    $quocient = floor($decimal / 2);
    if ($quocient < 1) {
        $binary .= $decimal;
        break;
    }
    $remainder = $decimal % 2;
    $decimal = $quocient;
    $binary .= $remainder;
}

echo strrev($binary) . "\n";

?>