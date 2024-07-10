print_numbers_reverse <- function(n) {
  if (n >= 1) {
    return(c(n, print_numbers_reverse(n - 1)))
  } else {
    return(NULL)
  }
}

result <- print_numbers_reverse(10)
print(result)
