# Function to calculate the volume of a cylinder
def volume_of_cylinder(radius, height)
    # Calculate the volume using the formula:
    # V = π * r^2 * h
    volume = Math::PI * radius * radius * height
  
    # Return the calculated volume
    volume
  end
  
  # Example:
  # Calculate the volume of a cylinder with radius 5 and height 10
  cylinder_radius = 5
  cylinder_height = 10
  cylinder_volume = volume_of_cylinder(cylinder_radius, cylinder_height)
  
  puts "Volume of cylinder = #{cylinder_volume}"