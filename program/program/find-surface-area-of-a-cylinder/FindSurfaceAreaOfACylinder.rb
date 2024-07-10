def surfaceAreaOfCylinder(radius, height)
  2 * 3.14 * radius * ( radius + height )
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the radius : '
  radius = gets.chomp.to_i
  
  print 'Please enter the height : '
  height = gets.chomp.to_i

  puts "Surface Area of Cylinder :  #{surfaceAreaOfCylinder(radius, height)} "
end
