<?php

// Function to calculate the volume of a cylinder
function volumeOfCylinder($radius, $height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  $volume = M_PI * pow($radius, 2) * $height;

  // Return the calculated volume
  return $volume;
}

// Example:
// Calculate the volume of a cylinder with radius 5 and height 10
$cylinderRadius = 5;
$cylinderHeight = 10;
$cylinderVolume = volumeOfCylinder($cylinderRadius, $cylinderHeight);

echo "Volume of cylinder = " . $cylinderVolume . "\n";