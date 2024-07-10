# Function to check if a string is a palindrome
isPalindrome <- function(s) {
  s <- tolower(s) 
  s <- gsub(" ", "", s)
  rev_s <- paste(rev(unlist(strsplit(s, ""))), collapse = "")
  return(s == rev_s)
}
 
#input
user_input <- "racecar"
 
# Check if the user input is a palindrome and print YES or NO
if (isPalindrome(user_input)) {
  cat("Palindrome String\n")
} else {
  cat("Not Palindrome String\n")
}
