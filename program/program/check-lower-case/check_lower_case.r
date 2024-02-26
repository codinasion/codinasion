check_lower_case <- function(char) {
  if (char %in% letters) {
    return("Lower Case")
  } else {
    return("Not Lower Case")
  }
}

# Example usage:
input_char <- 'A'
result <- check_lower_case(input_char)
cat("Output:", result)
