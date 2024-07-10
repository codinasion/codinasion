def sum_of_ap_series(a1, d, n)
  sum = (n * (2 * a1 + (n - 1) * d)) / 2
  return sum
end

puts "Enter the first term (a1) of the AP series:"
a1 = gets.chomp.to_i

puts "Enter the common difference (d) of the AP series:"
d = gets.chomp.to_i

puts "Enter the number of terms (n) in the AP series:"
n = gets.chomp.to_i

sum = sum_of_ap_series(a1, d, n)
puts "The sum of the arithmetic progression series is: #{sum}"
