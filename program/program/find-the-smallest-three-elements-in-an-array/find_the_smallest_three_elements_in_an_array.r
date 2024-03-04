findSmallestThree <- function(arr) {
  count <- length(arr)
  
  if (count < 3) {
    print("Array should have at least three elements.")
    return(NULL)
  }
  arr <- sort(arr)
  cat("Smallest three elements:", arr[1], arr[2], arr[3],"\n")
}

arr <- c(10, 4, 3, 50, 23, 90)
findSmallestThree(arr)
