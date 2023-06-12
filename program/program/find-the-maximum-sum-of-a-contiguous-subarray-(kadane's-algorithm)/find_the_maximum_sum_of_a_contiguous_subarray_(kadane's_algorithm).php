<?php
function kadaneAlgorithm($array, $size) {
  $max = 0;
  $current = 0;
  for($i=0; $i<$size; $i++) {
    $current = $current + $array[$i];
    
    if ($current < 0)
      $current = 0; 
    
    if($max < $current)
      $max = $current; 
  }
  return $max;
}

//test
$array = array(1, 2, 3, -2, 5);
$size = sizeof($array);
$result = kadaneAlgorithm($array, $size);
echo "Maximum SubArray is: ".$result."\n";
?>