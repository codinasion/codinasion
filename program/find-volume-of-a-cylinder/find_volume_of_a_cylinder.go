package main

import "fmt"

// Function to calculate the volume of a cylinder
func volumeOfCylinder(radius float64, height float64) float64 {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  volume := math.Pi * math.Pow(radius, 2) * height

  // Return the calculated volume
  return volume
}

func main() {
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  cylinderRadius := 5.0
  cylinderHeight := 10.0
  cylinderVolume := volumeOfCylinder(cylinderRadius, cylinderHeight)

  fmt.Printf("Volume of cylinder = %f\n", cylinderVolume)
}