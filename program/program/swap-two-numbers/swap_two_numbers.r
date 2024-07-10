# Function to swap two numbers
swap_numbers <- function(a, b) {
  temp <- a
  a <- b
  b <- temp
  return(list(a = a, b = b))
}

# Accept input from the user
num1 <- as.numeric(readline("Enter the first number: "))
num2 <- as.numeric(readline("Enter the second number: "))

# Print the original numbers
cat("Original numbers: First number =", num1, ", Second number =", num2, "\n")

# Call the swap_numbers function
result <- swap_numbers(num1, num2)

# Print the swapped numbers
cat("Swapped numbers: First number =", result$a, ", Second number =", result$b, "\n")
