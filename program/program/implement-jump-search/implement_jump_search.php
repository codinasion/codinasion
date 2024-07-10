<?php
function jumpSearch($arr, $x) {
    $n = count($arr);
    $blockSize = (int) sqrt($n);
    $prev = 0;

    while ($arr[min($blockSize, $n) - 1] < $x) {
        $prev = $blockSize;
        $blockSize += (int) sqrt($n);
        if ($prev >= $n) {
            return -1; // Element not found
        }
    }

    while ($arr[$prev] < $x) {
        $prev++;
        if ($prev == min($blockSize, $n)) {
            return -1;
        }
    }

    if ($arr[$prev] == $x) {
        return $prev;
    }

    return -1;
}

echo "Enter array elements separated by space: ";
$input = trim(fgets(STDIN));
$inputArray = explode(" ", $input);
$inputArray = array_map('intval', $inputArray);

echo "Enter the value to search for: ";
$searchValue = intval(trim(fgets(STDIN)));

$result = jumpSearch($inputArray, $searchValue);

if ($result == -1) {
    echo "Element not found in the array\n";
} else {
    echo "Element found at index " . $result . "\n";
}
?>
