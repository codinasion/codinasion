def palindrome(str)
  str == str.reverse ? 'Palindrome String' : 'Not Palindrome String'
end

palindrome('abba') # PalindromeString

palindrome('abc') # Not Palindrome String
