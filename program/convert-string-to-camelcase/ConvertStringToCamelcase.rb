puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:capitalize).join
result[0] = result[0].downcase
puts result
