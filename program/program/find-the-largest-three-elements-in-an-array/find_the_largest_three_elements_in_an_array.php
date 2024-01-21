<?php
$input = array(10, 4, 3, 50, 23, 90);

if(count($input) < 3 ) {
    echo "Array should have a minimum of 3 elements";
} else {
rsort($input);
$arrlength = count($input); 
echo $input[0].",".$input[1].",".$input[2];
}
?>
