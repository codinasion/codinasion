<?php

function secondSmallest($arr) {
   sort($arr);
   return $arr[1];
}

echo secondSmallest([1,2,3,4,5]);

?>
