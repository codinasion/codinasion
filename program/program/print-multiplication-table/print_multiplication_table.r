# Take user input for the number
number <- as.numeric(readline("Input: "))

# Validate input
if (!is.numeric(number)) {
  cat("Invalid input. Please enter a valid number.")
} else {
  # Print multiplication table
  for (i in 1:10) {
    result <- number * i
    cat(number, "x", i, "=", result, "\n")
  }
}
