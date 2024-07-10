# Function to print elements in an array
printArrayElements <- function(arr) {
  n <- length(arr)
  
  for (i in 1:n) {
    cat(" ", arr[i])
  }
}

# Function call
myArray <- c(1, 2, 3, 4, 5)
printArrayElements(myArray)
