# Function to reverse an array
reverse_array <- function(arr) {
  return(rev(arr))
}

# Example usage
input_array <- c(1, 2, 3, 4, 5)
output_array <- reverse_array(input_array)

# Print the result
cat("Input array: ", input_array, "\n")
cat("Reversed array: ", output_array, "\n")
