# Function to calculate permutations
calculate_permutation <- function(n, r) {
  return(factorial(n) / factorial(n - r))
}

# Example usage
n <- 5
r <- 2
result <- calculate_permutation(n, r)

cat("The number of permutations of", n, "objects taken", r, "at a time is:", result, "\n")
