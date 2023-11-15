# Function to perform cylindrical rotation
cylindrical_rotate <- function(matrix_input) {
  # Get the number of rows and columns in the matrix
  num_rows <- nrow(matrix_input)
  num_cols <- ncol(matrix_input)

  # Create an empty matrix to store the rotated result
  rotated_matrix <- matrix(0, nrow = num_cols, ncol = num_rows)

  # Perform the cylindrical rotation
  for (i in 1:num_rows) {
    rotated_matrix[, i] <- matrix_input[num_rows - i + 1, ]
  }

  return(rotated_matrix)
}

# Example usage
input_matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)

cat("Input Matrix:\n")
print(input_matrix)

rotated_matrix <- cylindrical_rotate(input_matrix)

cat("\nRotated Matrix:\n")
print(rotated_matrix)
