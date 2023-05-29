def checkPalindromeString(str):
    return str == str[::-1]


print("Palindrome String" if checkPalindromeString("abba") else "Not Palindrome String")
