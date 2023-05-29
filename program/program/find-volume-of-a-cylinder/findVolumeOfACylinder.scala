// Function to calculate the volume of a cylinder
def volumeOfCylinder(radius: Double, height: Double): Double = {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  val volume = math.Pi * radius * radius * height

  // Return the calculated volume
  volume
}

// Example:
// Calculate the volume of a cylinder with radius 5 and height 10
val cylinderRadius = 5.0
val cylinderHeight = 10.0
val cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight)

println(s"Volume of cylinder = $cylinderVolume")