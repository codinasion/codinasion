#include <iostream>
#include <cmath>

// Function to calculate the volume of a cylinder
double volumeOfCylinder(double radius, double height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  double volume = M_PI * pow(radius, 2) * height;

  // Return the calculated volume
  return volume;
}

int main() {
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  double cylinderRadius = 5;
  double cylinderHeight = 10;
  double cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

  std::cout << "Volume of cylinder = " << cylinderVolume << std::endl;

  return 0;
}