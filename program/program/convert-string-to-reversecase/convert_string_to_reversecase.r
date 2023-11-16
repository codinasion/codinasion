convert_to_reverse_case <- function(input_string) {
  result <- ""
  
  for (char in strsplit(input_string, NULL)[[1]]) {
    if (char %in% letters) {
      result <- paste0(result, ifelse(char %in% toupper(letters), tolower(char), toupper(char)))
    } else {
      result <- paste0(result, char)
    }
  }
  
  return(result)
}

# Example usage
input_str <- "hello world"
output_str <- convert_to_reverse_case(input_str)

# Print the result
cat("Input String: ", input_str, "\n")
cat("Output String: ", output_str, "\n")
