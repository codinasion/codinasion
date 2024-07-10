swapNumbers <- function(a, b) {
  cat("Before swapping: a =", a, ", b =", b, "\n")
  
  # Swapping without a third variable
  a <- a + b
  b <- a - b
  a <- a - b
  
  cat("After swapping: a =", a, ", b =", b)
}

# Test the function with the input 10 and 20
swapNumbers(10, 20)
