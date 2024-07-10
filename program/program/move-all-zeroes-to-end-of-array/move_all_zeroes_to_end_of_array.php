
<?php
function moveZerosToEnd($arr) {
    $result = array();
    $zeroCount = 0;

    foreach ($arr as $value) {
        if ($value != 0) {
            $result[] = $value;
        } else {
            $zeroCount++;
        }
    }

    for ($i = 0; $i < $zeroCount; $i++) {
        $result[] = 0;
    }

    return $result;
}

echo "Enter array elements separated by space: ";
$input = trim(fgets(STDIN));
$inputArray = explode(" ", $input);

$inputArray = array_map('intval', $inputArray);

$resultArray = moveZerosToEnd($inputArray);
echo "Array after moving zeros to the end: ";
print_r($resultArray);
?>
