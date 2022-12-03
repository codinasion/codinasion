<?php

fscanf(STDIN, "%f", $meters);
$miles = $meters / 1609;

echo round($miles, 2) . "\n";

?>