<?php

echo "Length: ";
fscanf(STDIN, "%f", $length);

echo "Width: ";
fscanf(STDIN, "%f", $width);

echo "Height: ";
fscanf(STDIN, "%f", $height);

echo "Volume: " . $length * $width * $height . "\n";

?>