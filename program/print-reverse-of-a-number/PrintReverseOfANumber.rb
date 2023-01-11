# reverse of a number
puts "Write a number to reverse: "
number_input = gets.chomp
result = number_input.to_s.reverse.to_i

puts "Here's your reversed number: #{result}"
