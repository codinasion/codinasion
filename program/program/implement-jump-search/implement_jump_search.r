jump_search <- function(arr, x) {
  n <- length(arr)
  block_size <- floor(sqrt(n))
  
  prev <- 0
  while (arr[min(block_size, n)] < x) {
    prev <- block_size
    block_size <- block_size + floor(sqrt(n))
    if (prev >= n) {
      return(-1)
    }
  }
  
  while (arr[prev] < x) {
    prev <- prev + 1
    if (prev == min(block_size, n)) {
      return(-1)
    }
  }
  
  if (arr[prev] == x) {
    return(prev)
  }
  
  return(-1)
}

# Example usage
arr <- c(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
x <- 7
result <- jump_search(arr, x)

if (result != -1) {
  cat("Element found at index", result, "\n")
} else {
  cat("Element not found in the array\n")
}
