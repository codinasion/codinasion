print "Please enter a string: "
input_string = gets.chomp

def checkPalindromeString string
    if string.downcase == string.reverse.downcase
        "Palindrome String"
    else
        "Not Palindrome String"
    end
end

print checkPalindromeString input_string
