selection_sort <- function(arr) {
  n <- length(arr)
  
  for (i in 1:(n - 1)) {
    # Set current element as minimum
    min_index <- i
    
    # Find the minimum element in the unsorted portion
    for (j in (i + 1):n) {
      if (arr[j] < arr[min_index]) {
        min_index <- j
      }
    }
    
    # Swap the found minimum element with the current element
    if (min_index != i) {
      temp <- arr[i]
      arr[i] <- arr[min_index]
      arr[min_index] <- temp
    }
  }
  
  return(arr)
}

# Example usage
input <- c(8, 5, 2, 6, 9, 3, 1, 4, 0, 7)
output <- selection_sort(input)
print(output)
