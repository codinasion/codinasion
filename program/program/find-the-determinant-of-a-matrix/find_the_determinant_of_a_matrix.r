# Function to find the determinant of a matrix
find_determinant <- function(matrix) {
  # Check if the matrix is square
  if (ncol(matrix) != nrow(matrix)) {
    stop("Matrix must be square to find determinant.")
  }
  
  # Use the determinant function in base R
  det_value <- det(matrix)
  
  # Return the determinant value
  return(det_value)
}

# Example usage
matrix_example <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)
result <- find_determinant(matrix_example)

# Print the result
cat("Determinant of the matrix:\n", result, "\n")
