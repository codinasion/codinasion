<?php

function smallestElementInMatrix($matrix) {
  $small = $matrix[0][0];
  foreach($matrix as $arr) {
    if($small > min($arr))
        $small = min($arr);
 }
return $small;
}


echo smallestElementInMatrix([[1,2,3],[4,5,6],[7,8,9]])

?>
