puts "Please enter a string: "
input_string = gets.chomp

def checkPalindromeString string
    if string == string.reverse
        "Palindrome String"
    else
        "Not Palindrome String"
    end
end

puts checkPalindromeString input_string