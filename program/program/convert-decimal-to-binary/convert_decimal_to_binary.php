<?php

$decimal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$binary = "";

foreach (str_split($decimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    }
}

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