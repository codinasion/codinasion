findMaxSubarraySum <- function(arr) {
  max_so_far <- arr[1]
  max_ending_here <- arr[1]
  
  for (i in 2:length(arr)) {
    max_ending_here <- max(arr[i], max_ending_here + arr[i])
    max_so_far <- max(max_so_far, max_ending_here)
  }
  
  return(max_so_far)
}

# Test the function with the provided input
input_array <- c(-2, -3, 4, -1, -2, 1, 5, -3)
max_sum <- findMaxSubarraySum(input_array)
print(max_sum)
