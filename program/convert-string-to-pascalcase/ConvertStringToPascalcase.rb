puts "Please, insert your string: "
user_input = gets.chomp
result = user_input.split(' ').map { |word| word.capitalize }.join
puts result
