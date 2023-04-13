def inchesToMiles(inches)
  inches / 63360
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the inches : '
  inches = gets.chomp.to_i

  puts "#{inches} inches is #{inchesToMiles(inches)} miles"
end
