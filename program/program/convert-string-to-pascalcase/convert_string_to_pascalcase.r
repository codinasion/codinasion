convertToPascalCase <- function(str) {
  words <- unlist(strsplit(str, " "))  # Split the string into words
  words <- sapply(words, function(word) {
    if (nchar(word) > 0) {
      paste0(toupper(substr(word, 1, 1)), tolower(substr(word, 2, nchar(word))))
    } else {
      ""
    }
  })
  return(paste0(words, collapse = ""))
}

# Test the function with the input "hello world"
input_str <- "hello world"
output_str <- convertToPascalCase(input_str)
print(output_str)
