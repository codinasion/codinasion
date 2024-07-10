binary_search <- function(A, x) {
  lowerBound <- 1
  upperBound <- length(A)
  
  while (upperBound >= lowerBound) {
    midPoint <- lowerBound + floor((upperBound - lowerBound) / 2)
    
    if (A[midPoint] == x) {
      return(midPoint)
    } else if (A[midPoint] < x) {
      lowerBound <- midPoint + 1
    } else {
      upperBound <- midPoint - 1
    }
  }
  
  return(-1)  # If not found
}

# Example usage:
list <- c(1, 2, 3, 4, 5)
value <- 4
result <- binary_search(list, value)
if (result != -1) {
  cat("Output:", result, "\n")
} else {
  cat("Value not found\n")
}
