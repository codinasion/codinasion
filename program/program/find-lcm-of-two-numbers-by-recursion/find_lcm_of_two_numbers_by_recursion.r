# Function to find the GCD (Greatest Common Divisor) using Euclid's algorithm
gcd <- function(a, b) {
  if (b == 0) {
    return(a)
  } else {
    return(gcd(b, a %% b))
  }
}

# Function to find the LCM (Least Common Multiple) using the GCD
lcm <- function(a, b) {
  return (abs(a * b) / gcd(a, b))
}

# Example usage
num1 <- 12
num2 <- 18

result <- lcm(num1, num2)
cat("The LCM of", num1, "and", num2, "is:", result, "\n")

