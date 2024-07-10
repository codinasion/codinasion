def string_to_integer(str)

  result = 0
  sign = 1

  if str[0] == '-'
    sign = -1
    str = str[1..-1] # Remove the negative sign from the string
  end

  str.each_char do |char|
    if char >= '0' && char <= '9'
      digit = char.ord - '0'.ord # Convert the character to an integer
      result = result * 10 + digit # Add the digit to the result
    else
      raise ArgumentError, "Invalid character: #{char}"
    end
  end

  return result * sign
end

# Input string
print "Enter a string: "
input_str = gets.chomp

begin
  integer_result = string_to_integer(input_str)
  puts "Output: #{integer_result}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
