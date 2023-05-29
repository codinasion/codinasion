<?php

function daysToWeeks($days) {
  return floor($days / 7);
}

$days = 35;
echo daysToWeeks($days); // Output: 5

?>
