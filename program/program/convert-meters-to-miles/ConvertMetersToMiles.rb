def convertMetersToMiles(meters)
  meters / 1609.344
end

def strip_trailing_zero(n)
  n.to_s.sub(/\.?0+$/, '')
end

print 'Input  : '
meters = gets.chomp.to_f
miles = convertMetersToMiles(meters)
puts "Output : #{strip_trailing_zero(miles)}"
