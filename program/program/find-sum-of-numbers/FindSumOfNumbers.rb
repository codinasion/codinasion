puts "write the numbers you want to add"
input = gets.chomp
sum_of_numbers = 0
input.split(" ").each do |number|
  sum_of_numbers += number.to_i
end
puts "the sum of the numbers is #{sum_of_numbers}"
