reverse_number <- function(n) {
  # base case: if the number has only one digit, return it
  if (n < 10) {
    return(n)
  } else {
    # recursive case: extract the last digit of the number and append it to the
    # reversed version of the remaining digits
    last_digit <- n %% 10
    remaining_digits <- n %/% 10
    return(last_digit * 10^(nchar(as.character(remaining_digits))) + reverse_number(remaining_digits))
  }
}

# example usage
num <- 12345
cat("Original number:", num, "\n")
cat("Reversed number:", reverse_number(num), "\n")
