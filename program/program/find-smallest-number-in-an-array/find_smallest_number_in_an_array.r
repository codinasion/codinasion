# Function to find the smallest number in an array
find_smallest_in_array <- function(arr) {
  min_value <- min(arr)
  return(min_value)
}

# Example array
arr <- c(9, 4, 7, 2, 5, 10, 8, 3, 6)
# Replace this example array with your own data

# Find the smallest number in the array
smallest_number <- find_smallest_in_array(arr)

# Display the smallest number
cat("The smallest number in the array is:", smallest_number, "\n")
