// Function to calculate the volume of a cylinder
function volumeOfCylinder(radius: number, height: number): number {
    // Calculate the volume using the formula:
    // V = π * r^2 * h
    const volume = Math.PI * radius * radius * height;
  
    // Return the calculated volume
    return volume;
  }
  
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  const cylinderRadius = 5;
  const cylinderHeight = 10;
  const cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);
  
  console.log(`Volume of cylinder = ${cylinderVolume}`);