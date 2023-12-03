# Function to get ASCII value of a character
getAsciiValue <- function(char) {
  # Ensure that the input is a single character
  if (nchar(char) != 1) {
    stop("Please input a single character.")
  }

  # Convert the character to its ASCII value
  ascii_value <- as.integer(charToRaw(char))
  return(ascii_value)
}

# Test the function with the input 'A'
input_char <- "A"
ascii_value <- getAsciiValue(input_char)
print(ascii_value)
