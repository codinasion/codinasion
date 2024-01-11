findSmallestTwo <- function(arr) {
  n <- length(arr)
  
  if (n < 2) {
    print("Array should have at least two elements.")
    return(NULL)
  }
  
  # Sort the array in ascending order
  arr <- sort(arr)
  
  # Output the first two elements
  cat("Smallest two elements:", arr[1], arr[2], "\n")
}

# Example usage:
arr1 <- c(12, 13, 1, 10, 34, 1)
findSmallestTwo(arr1)

arr2 <- c(10, 5, 10)
findSmallestTwo(arr2)
