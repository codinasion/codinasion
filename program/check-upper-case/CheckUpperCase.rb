puts "Please enter a letter to check if it's uppercase: "
input_letter = gets.chomp

def checkUpperCase letter
    if (letter == letter.upcase)
        "Upper Case"
    else
        "Not Upper Case"
    end
end

puts checkUpperCase input_letter