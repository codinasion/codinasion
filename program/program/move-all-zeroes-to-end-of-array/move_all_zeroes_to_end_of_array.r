moveZeroesToEnd <- function(arr) {
  nonZeroIndex <- 1

  for (i in 1:length(arr)) {
    if (arr[i] != 0) {
      arr[nonZeroIndex] <- arr[i]
      nonZeroIndex <- nonZeroIndex + 1
    }
  }

  for (i in nonZeroIndex:length(arr)) {
    arr[i] <- 0
  }

  return(arr)
}


arr1 <- c(1, 2, 0, 4, 3, 0, 5, 0)
result1 <- moveZeroesToEnd(arr1)
cat("Input  : arr[] =", arr1, "\n")
cat("Output : arr[] =", result1, "\n")

arr2 <- c(1, 2, 0, 0, 0, 3, 6)
result2 <- moveZeroesToEnd(arr2)
cat("Input  : arr[] =", arr2, "\n")
cat("Output : arr[] =", result2, "\n")
