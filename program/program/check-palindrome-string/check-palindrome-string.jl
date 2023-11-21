function is_palindrome(str)
    cleaned_str = lowercase(strip(str))
    return cleaned_str == reverse(cleaned_str)
end

# Example usage:
input_str = "abba"
if is_palindrome(input_str)
    println("$input_str is a palindrome.")
else
    println("$input_str is not a palindrome.")
end
