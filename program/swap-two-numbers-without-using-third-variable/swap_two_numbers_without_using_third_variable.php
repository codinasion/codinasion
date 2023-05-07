<?php	

function swapValue($a, $b){
 $a=$a+$b;
 $b=$a-$b;
 $a=$a-$b;
 echo("a :".$a." ; b : ".$b);
}
swapValue(10, 20);

?>
