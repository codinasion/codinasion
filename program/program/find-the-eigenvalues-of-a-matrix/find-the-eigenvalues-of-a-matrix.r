# Create a 3x3 matrix 
A = matrix(c(1:9), 3, 3) 
    
# Calculating Eigenvalues
print(eigen(A)$values)
