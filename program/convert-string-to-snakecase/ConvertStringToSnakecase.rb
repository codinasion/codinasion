def convert_string_to_snakecase(user_string)
  user_string.split(' ').join('_').downcase
end

puts convert_string_to_snakecase('Time tO chaNgE')
