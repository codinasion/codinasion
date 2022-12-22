<?php

echo "Length: ";
fscanf(STDIN, "%f", $length);

echo "Width: ";
fscanf(STDIN, "%f", $width);

echo "Height: ";
fscanf(STDIN, "%f", $height);

$surfaceArea = 2 * (($length * $width) + ($length * $height) + ($width * $height));

echo "Surface Area of Cuboid: " .round($surfaceArea, 2). "\n";

?>