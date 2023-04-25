def volumeOfSphere(radius)
  4/3 * 3.14 * radius * radius * radius
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the radius : '
  radius = gets.chomp.to_i

  puts "Volume of Sphere :  #{volumeOfSphere(radius)}"
end
