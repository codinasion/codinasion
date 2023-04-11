puts "Please enter a string: "
input_string = gets

def converStringToConstantCase string
    string.upcase.gsub(" ", "_")
end

puts converStringToConstantCase input_string