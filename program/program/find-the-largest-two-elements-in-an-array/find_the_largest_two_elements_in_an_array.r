findLargestTwo <- function(arr) {
  # Check if the length of the array is less than 2
  if (length(arr) < 2) {
    cat("Array should have at least two elements.\n")
    return()
  }

  largest1 <- arr[1]
  largest2 <- arr[2]

  for (i in 3:length(arr)) {
    if (arr[i] > largest1) {
      largest2 <- largest1
      largest1 <- arr[i]
    } else if (arr[i] > largest2 && arr[i] != largest1) {
      largest2 <- arr[i]
    }
  }

  cat("The largest two elements are", largest1, "and", largest2, "\n")
}


arr1 <- c(12, 13, 1, 10, 34, 1)
findLargestTwo(arr1)

arr2 <- c(10, 5, 10)
findLargestTwo(arr2)

arr3 <- c(10, 10, 10)
findLargestTwo(arr3)
