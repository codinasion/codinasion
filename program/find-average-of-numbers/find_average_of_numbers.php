<?php
$input = readline("Enter numbers seperated by a space: ");
$arr = explode(" ", $input);
$sumOfNums = 0;
for ($i = 0; $i <= count($arr); $i++) {
    $sumOfNums += $arr[$i];
}
$average = $sumOfNums / count($arr);
echo "The average is $average";
?>