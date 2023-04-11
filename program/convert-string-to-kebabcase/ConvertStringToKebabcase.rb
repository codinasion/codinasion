puts "Please enter a string: "
input_string = gets

def convertStringToKebabCase(string)
    string.downcase.gsub(" ", "-")
end

puts convertStringToKebabCase(input_string)