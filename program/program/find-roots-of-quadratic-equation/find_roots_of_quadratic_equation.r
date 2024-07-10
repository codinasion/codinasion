# Function to find roots of a quadratic equation
findRoots <- function(a, b, c) {
  discriminant <- b^2 - 4 * a * c
  
  if (discriminant < 0) {
    return(NULL)  # No real roots
  } else {
    sqrtDiscriminant <- sqrt(discriminant)
    root1 <- (-b + sqrtDiscriminant) / (2 * a)
    root2 <- (-b - sqrtDiscriminant) / (2 * a)
    return(c(root1, root2))  # Return the roots as a vector
  }
}

# Example usage
a <- 1
b <- 2
c <- 1

roots <- findRoots(a, b, c)

if (is.null(roots)) {
  cat("No real roots\n")
} else {
  cat("Roots:", roots[1], roots[2], "\n")
}
