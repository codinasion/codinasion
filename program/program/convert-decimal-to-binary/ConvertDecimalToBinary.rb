puts 'Write a number to convert: '
number = gets.chomp
result = number.to_i.to_s(2)
puts "Here's your converted number: #{result}"
