# Define two matrices
matrix1 <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3, ncol = 3)
matrix2 <- matrix(c(5, 6, 7, 8, 1, 2), nrow = 3, ncol = 3)

# Function to add matrices
add_matrices <- function(m1, m2) {
    if (nrow(m1) != nrow(m2) || ncol(m1) != ncol(m2)) {
        stop("Matrices must have the same dimensions")
    }
    return(m1 + m2)
}

# print the result
result_matrix <- add_matrices(matrix1, matrix2)
print("The sum of the two matrices is:")
print(result_matrix)
