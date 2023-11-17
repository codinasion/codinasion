convert_to_alternating_case <- function(input_string) {
  result <- ""
  to_upper <- FALSE  # Start with converting the first character to lowercase

  for (char in strsplit(input_string, NULL)[[1]]) {
    if (char %in% letters) {
      if (to_upper) {
        result <- paste0(result, toupper(char))
      } else {
        result <- paste0(result, tolower(char))
      }
      to_upper <- !to_upper  # Switch the case for the next character
    } else {
      result <- paste0(result, char)
    }
  }
  return(result)
}

# Example usage
input_str <- "hello world"
output_str <- convert_to_alternating_case(input_str)

# Print the result
cat("Input String: ", input_str, "\n")
cat("Output String: ", output_str, "\n")
