# Function to convert ASCII values to characters
ascii_to_char <- function(ascii_values) {
  characters <- sapply(ascii_values, function(x) rawToChar(as.raw(x)))
  return(paste(characters, collapse = ""))
}

# Input ASCII values as a string separated by space
input <- readline("Enter ASCII values separated by space: ")

# Convert input string to a numeric vector of ASCII values
ascii_values <- as.numeric(strsplit(input, " ")[[1]])

# Call the ascii_to_char function
output <- ascii_to_char(ascii_values)

# Print the output
cat("Output:", output, "\n")
