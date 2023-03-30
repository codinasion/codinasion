puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:downcase).join('.')
puts result
