kadane_algorithm <- function(arr) {
  max_ending_here <- max_so_far <- arr[1]
  
  for (i in 2:length(arr)) {
    max_ending_here <- max(arr[i], max_ending_here + arr[i])
    max_so_far <- max(max_so_far, max_ending_here)
  }
  
  return(max_so_far)
}

# Example usage:
input_array <- c(1, 2, 3, -2, 5)
result <- kadane_algorithm(input_array)
cat("Output:", result)
