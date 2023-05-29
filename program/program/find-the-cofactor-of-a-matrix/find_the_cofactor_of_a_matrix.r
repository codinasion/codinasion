# Clear the environment
rm(list = ls())

# Function that calculates the cofactors
calculate_cofactor <- function(original_matrix, matrix_order){
  print("Original matrix:")
  print(original_matrix)
  
  cofactor_matrix <- matrix(, nrow = matrix_order, ncol = matrix_order)
  
  for (column in 1:matrix_order) {
    matrix_minus_column <- your_matrix[,-column]
    for (row in 1:matrix_order) {
      if (matrix_order == 2) {
        matrix_minus_row <- matrix_minus_column[-row]
        cofactor_matrix[row, column] <- ((-1)^(row + column))*matrix_minus_row
      } else {
        matrix_minus_row <- matrix_minus_column[-row,]
        cofactor_matrix[row, column] <- ((-1)^(row + column))*det(matrix_minus_row)
      }
    }
  }
  
  return(cofactor_matrix)
}

# Request the matrix
matrix_ord <- as.integer(readline("What is the order of your matrix?: "))
message(cat("Enter the ", matrix_ord^2, " values of your matrix:"))
matrix_content <- c(scan(nmax = (matrix_ord^2)))
your_matrix <- matrix(data = matrix_content, nrow = matrix_ord, byrow = TRUE)

# Shows the calculated cofactors
cofactor <- calculate_cofactor(your_matrix, matrix_ord)
print("Matrix of cofactors:")
print(cofactor)
