<?php

function smallestNumber($array) {
  sort($array);
  return $array[0];
}

echo smallestNumber([1,2,3,4,5]);

?>
