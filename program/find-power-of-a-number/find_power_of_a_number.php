<?php

function powerOfNumber($num, $power) {
  if($num < 0 || $power < 0) {
    return "Invalid Input";
  } else if ($power == 0) {
    return 1;
  } else {
    return pow($num, $power);
  }
}

echo powerOfNumber(2, 3);
echo powerOfNumber(2, -3);
echo powerOfNumber(2, 0);

?>
