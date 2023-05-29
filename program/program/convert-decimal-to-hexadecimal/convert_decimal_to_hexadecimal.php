<?php

$decimal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$hexaCharsMapping = ["10" => "A", "11" => "B", "12" => "C", "13" => "D", "14" => "E", "15" => "F"];
$hexadecimal = "";

function map($num)
{
    global $hexaCharsMapping;
    if (in_array($num, [10, 11, 12, 13, 14, 15])) {
        return $hexaCharsMapping[$num];
    } else {
        return $num;
    }
}

foreach (str_split($decimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    }
}

while (true) {
    $quocient = floor($decimal / 16);
    if ($quocient < 1) {
        $hexadecimal .= map($decimal);
        break;
    }
    $remainder = $decimal % 16;
    $decimal = $quocient;
    $hexadecimal .= map($remainder);
}

echo strrev($hexadecimal) . "\n";

?>