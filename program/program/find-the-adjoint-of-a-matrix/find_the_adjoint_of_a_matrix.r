# Function to calculate the cofactor of an element in a matrix
cofactor <- function(mat, row, col) {
  sub_mat <- mat[-row, -col] # Remove the row and column
  return ((-1)^(row + col) * det(sub_mat))
}

# Function to calculate the cofactor matrix
cofactorMatrix <- function(mat) {
  n <- nrow(mat)
  cofactor_mat <- matrix(0, n, n)
  for (i in 1:n) {
    for (j in 1:n) {
      cofactor_mat[i, j] <- cofactor(mat, i, j)
    }
  }
  return (cofactor_mat)
}

# Function to find the adjoint of a matrix
findAdjoint <- function(mat) {
  return (t(cofactorMatrix(mat))) # Transpose of the cofactor matrix
}

# Test the function with the input matrix
input_matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)
adjoint_matrix <- findAdjoint(input_matrix)
print(adjoint_matrix)
