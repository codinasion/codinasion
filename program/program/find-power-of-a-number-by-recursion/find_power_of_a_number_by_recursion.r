power <- function(base, exponent) {
  # Base case: if exponent is 0, return 1
  if (exponent == 0) {
    return(1)
  }
  # Recursive case: compute power recursively
  else {
    return(base * power(base, exponent - 1))
  }
}

# Example usage:
base <- 2
exponent <- 3
result <- power(base, exponent)
cat("Result:", result)