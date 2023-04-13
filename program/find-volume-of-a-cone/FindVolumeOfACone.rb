pi = Math::PI

print "Enter radius : \n"
radius = gets.chomp.to_i
print "Enter height : \n"
height = gets.chomp.to_i

volume = 1.0/3.0 * pi * radius * radius * height
print "volume : #{volume}"
