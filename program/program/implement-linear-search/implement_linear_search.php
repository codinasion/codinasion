<?php
function linear_search($list, $value) {
    $length = count($list);
    for ($i = 0; $i < $length; $i++) {
        if ($list[$i] == $value) {
            return $i; // Found the value, return its location/index
        }
    }
    return -1; // Value not found in the list
}

// Prompt the user to enter a list of numbers separated by spaces
echo "Enter a list of numbers separated by spaces: ";
$input = trim(fgets(STDIN));
$list = explode(' ', $input);

// Prompt the user to enter the value to search for
echo "Enter the value to search for: ";
$searchValue = trim(fgets(STDIN));

$result = linear_search($list, $searchValue);

if ($result != -1) {
    echo "Value $searchValue found at index $result";
} else {
    echo "Value $searchValue not found in the list";
}
?>
