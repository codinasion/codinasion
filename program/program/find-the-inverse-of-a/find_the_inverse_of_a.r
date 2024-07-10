determinant <- function(matrix) {
  a <- matrix[1, 1]
  b <- matrix[1, 2]
  c <- matrix[1, 3]
  d <- matrix[2, 1]
  e <- matrix[2, 2]
  f <- matrix[2, 3]
  g <- matrix[3, 1]
  h <- matrix[3, 2]
  i <- matrix[3, 3]

  det <- a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
  return(det)
}
matrixInverse <- function(matrix) {
  det <- determinant(matrix)

  if (det == 0) {
    stop("The matrix is singular, it does not have an inverse.")
  }

  inverse <- matrix(0, nrow = 3, ncol = 3)

  inverse[1, 1] <- (matrix[2, 2] * matrix[3, 3] - matrix[2, 3] * matrix[3, 2]) / det
  inverse[1, 2] <- (matrix[1, 3] * matrix[3, 2] - matrix[1, 2] * matrix[3, 3]) / det
  inverse[1, 3] <- (matrix[1, 2] * matrix[2, 3] - matrix[1, 3] * matrix[2, 2]) / det
  inverse[2, 1] <- (matrix[2, 3] * matrix[3, 1] - matrix[2, 1] * matrix[3, 3]) / det
  inverse[2, 2] <- (matrix[1, 1] * matrix[3, 3] - matrix[1, 3] * matrix[3, 1]) / det
  inverse[2, 3] <- (matrix[1, 3] * matrix[2, 1] - matrix[1, 1] * matrix[2, 3]) / det
  inverse[3, 1] <- (matrix[2, 1] * matrix[3, 2] - matrix[2, 2] * matrix[3, 1]) / det
  inverse[3, 2] <- (matrix[1, 2] * matrix[3, 1] - matrix[1, 1] * matrix[3, 2]) / det
  inverse[3, 3] <- (matrix[1, 1] * matrix[2, 2] - matrix[1, 2] * matrix[2, 1]) / det

  return(inverse)
}

input_matrix <- matrix(c(4, 5, 1, 3, 4, 12, 10, 2, 1), nrow = 3, byrow = TRUE)
inverse_matrix <- matrixInverse(input_matrix)
print(inverse_matrix)