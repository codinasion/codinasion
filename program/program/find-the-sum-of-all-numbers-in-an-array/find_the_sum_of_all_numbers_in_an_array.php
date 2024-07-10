<?php

$array = readline("Enter the array elements separated by space: ");

$array = explode(" ", $array);
$result = 0;
foreach ($array as $v) {
    $result += $v;
}
echo "Sum of all elements of the array: " ,$result . "\n";