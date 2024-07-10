# Function to calculate the sum of digits recursively
sum_of_digits <- function(n) {
  if (n == 0) {
    return(0)
  } else {
    return(n %% 10 + sum_of_digits(n %/% 10))
  }
}

# Function to calculate the average of digits using the sum_of_digits function
average_of_digits <- function(n) {
  num_digits <- ifelse(n == 0, 1, floor(log10(n)) + 1)
  sum_digits <- sum_of_digits(n)
  return(sum_digits / num_digits)
}

# Example usage
input_number <- 12345
result <- average_of_digits(input_number)
cat("Average: ", result, "\n")
