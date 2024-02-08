calculate_average <- function(numbers, n) {
  if (n == 1) {
    return(numbers[1])
  } else {
    return((numbers[n] + (n - 1) * calculate_average(numbers, n - 1)) / n)
  }
}

numbers <- c(1, 2, 3, 4, 5)
result <- calculate_average(numbers, length(numbers))

cat("Average of numbers is:", result, "\n")
