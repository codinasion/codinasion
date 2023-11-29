# Function to find the GCD (Greatest Common Divisor) of two numbers
gcd <- function(a, b) {
  while (b != 0) {
    remainder <- a %% b
    a <- b
    b <- remainder
  }
  return(a)
}

# Function to find the LCM (Least Common Multiple) of two numbers
lcm <- function(a, b) {
  return(abs(a * b) / gcd(a, b))
}

# Example usage
number1 <- 4
number2 <- 5
lcmResult <- lcm(number1, number2)

cat("LCM of", number1, "and", number2, "is", lcmResult, "\n")
