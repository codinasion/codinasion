# Function to find maximum sum of circular subarray
max_circular_sum <- function(arr) {
  n <- length(arr)
  
  # Case 1: Maximum sum of non-circular subarray
  max_non_circular_sum <- max_sum(arr)
  
  # Case 2: Maximum sum of circular subarray
  # In this case, we need to wrap around to the beginning of the array
  max_wrap_sum <- sum(arr) + max_sum(-arr)
  
  # Return the maximum of the two cases
  return(max(max_non_circular_sum, max_wrap_sum))
}

# Function to find maximum sum of non-circular subarray
max_sum <- function(arr) {
  n <- length(arr)
  max_so_far <- max_ending_here <- arr[1]
  
  for (i in 2:n) {
    max_ending_here <- max(arr[i], max_ending_here + arr[i])
    max_so_far <- max(max_so_far, max_ending_here)
  }
  
  return(max_so_far)
}

# Example usage
arr <- c(10, -3, -4, 7, 6, 5, -4, -1)
max_circular_sum(arr)
