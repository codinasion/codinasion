checkAnagram <- function(string1, string2) {
  if (nchar(string1) != nchar(string2)) {
    return("Not Anagram Strings")
  } else {
    if (all(sort(strsplit(string1, "")[[1]]) == sort(strsplit(string2, "")[[1]]))) {
      return("Anagram Strings")
    } else {
      return("Not Anagram Strings")
    }
  }
}

# Here's how to use the function:

string1 <- "pan"
string2 <- "nap"
result <- checkAnagram(string1, string2)
cat(result) # Output: Anagram Strings
