def ascii_to_string(ascii_values)
  characters = ascii_values.split.map { |ascii| ascii.to_i.chr }
  return characters.join
end

# Input ASCII values separated by spaces
print "Enter ASCII values separated by spaces: "
ascii_values = gets.chomp

begin
  result = ascii_to_string(ascii_values)
  puts "Output: #{result}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
