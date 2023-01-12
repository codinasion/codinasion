puts "Enter a letter to check if it's lowercase: "
user_input = gets

def checkLowerCase letter
    puts letter == letter.downcase ? "Lowercase" : "Not Lowercase"
end

checkLowerCase user_input