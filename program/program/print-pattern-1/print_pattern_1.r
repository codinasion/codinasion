printPattern <- function(n) {
  for (i in 1:n) {
    for (j in 1:i) {
      cat(j, " ")
    }
    cat("\n") # Move to the next line after each row
  }
}

# Test the function with input 5
printPattern(5)
