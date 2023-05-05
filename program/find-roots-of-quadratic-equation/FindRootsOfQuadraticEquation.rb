puts "Enter the coefficients of the quadratic equation (ax^2 + bx + c = 0):"
puts "Enter a:"
a = gets.chomp.to_i
puts "Enter b:"
b = gets.chomp.to_i
puts "Enter c:"
c = gets.chomp.to_i

discriminant = b**2 - 4*a*c     #calculate the discriminant

if discriminant < 0
  real_part = -b / (2*a)
  imag_part = Math.sqrt(-discriminant) / (2*a)
  puts "The roots are complex numbers: #{real_part} + #{imag_part}i and #{real_part} - #{imag_part}i"
elsif discriminant == 0
  root = -b / (2*a)
  puts "The root is #{root}."
else
  root1 = (-b + Math.sqrt(discriminant)) / (2*a)
  root2 = (-b - Math.sqrt(discriminant)) / (2*a)
  puts "The roots are real numbers: #{root1} and #{root2}."
end
