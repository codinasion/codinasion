# Define the matrix
A <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, ncol = 3, byrow = TRUE)

# Find the eigenvalues
eigenvalues <- eigen(A)$values

# Print the eigenvalues
print(eigenvalues)
