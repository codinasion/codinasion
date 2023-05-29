<?php

$octal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7"];
$hexaCharsMapping = ["10" => "A", "11" => "B", "12" => "C", "13" => "D", "14" => "E", "15" => "F"];

$decimal = 0;

foreach (str_split($octal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(8, (int) (strlen($octal) - $key - 1));
    }
}

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