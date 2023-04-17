pi = Math::PI

print "Enter radius : \n"
radius = gets.chomp.to_i

surfaceArea = 4 * pi * radius * radius
print "surface area : #{surfaceArea}"
