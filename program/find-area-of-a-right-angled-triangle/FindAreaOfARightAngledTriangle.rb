def areaOfTriangle(base, height)
  0.5 * base * height
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the base : '
  base = gets.chomp.to_i
  print 'Please enter the height : '
  height = gets.chomp.to_i

  puts "Area of right angled triangle : #{areaOfTriangle(base, height)}"
end
