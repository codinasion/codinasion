<?php
	$x = readline('Enter cuboid length: ');
	$y = readline('Enter cuboid width: ');
	$z = readline('Enter cuboid height: ');
	

  $x1 = 2 * (($x*$y) + ($y*$z) + ($z*$x));
  echo "Area of cuboid: $x1 \n";
?>
