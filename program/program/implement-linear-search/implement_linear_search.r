# Linear search function
linear_search <- function(list, value) {
  for (i in 1:length(list)) {
    if (list[i] == value) {
      return(i)  # Return the index of the value if found
    }
  }
  return(-1) # Return -1 if value is not found in the list
}

# Example usage
list <- c(1, 2, 3, 4, 5)
value <- 4
result <- linear_search(list, value)
if (result != -1) {
  cat("Value found at index:", result)
} else {
  cat("Value not found in the list.")
}
