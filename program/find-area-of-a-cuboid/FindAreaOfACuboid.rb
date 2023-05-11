pi = Math::PI

print "Enter length : \n"
length = gets.chomp.to_i
print "Enter width : \n"
width = gets.chomp.to_i
print "Enter height : \n"
height = gets.chomp.to_i

area = 2 * (length * width + length * height + width * height)
print "area : #{area}"
