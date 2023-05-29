<?php

$hexadecimal = readline();
$possibleChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];
$hexaCharsMapping = [
    "A" => "10",
    "a" => "10",
    "B" => "11",
    "b" => "11",
    "C" => "12",
    "c" => "12",
    "D" => "13",
    "d" => "13",
    "E" => "14",
    "e" => "14",
    "F" => "15",
    "f" => "15",
];
$decimal = 0;

function map($num)
{
    global $hexaCharsMapping;
    if (in_array($num, ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f"])) {
        return $hexaCharsMapping[$num];
    } else {
        return $num;
    }
}

foreach (str_split($hexadecimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += map($value) * pow(16, (int) (strlen($hexadecimal) - $key - 1));
    }
}

echo $decimal . "\n";

?>