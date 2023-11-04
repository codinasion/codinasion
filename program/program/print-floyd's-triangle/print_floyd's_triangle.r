print_floyds_triangle <- function(n) {
  num <- 1
  for(i in 1:n) {
    for(j in 1:i) {
      cat(num, " ")
      num <- num + 1
    }
    cat("\n")
  }
}

# Example usage
n <- 5
print_floyds_triangle(n)
