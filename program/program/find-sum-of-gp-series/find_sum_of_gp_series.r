# Function to calculate the sum of a GP series
sum_of_gp <- function(a1, r, n) {
  if (r == 1) {
    # If the common ratio is 1, use the simple formula for sum of n terms of an AP
    return(a1 * n)
  } else {
    # Calculate the sum using the GP sum formula
    return(a1 * (1 - r^n) / (1 - r))
  }
}

# Example usage with the given input
a1 <- 2   # First term
r <- 3    # Common ratio
n <- 3    # Number of terms

result <- sum_of_gp(a1, r, n)
cat("Sum of the GP series:", result, "\n")

