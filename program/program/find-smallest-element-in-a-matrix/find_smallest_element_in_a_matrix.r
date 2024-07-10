# Function to find the smallest element in a matrix
find_smallest_element <- function(matrix_data) {
  min_value <- min(matrix_data)
  return(min_value)
}

# User input for matrix dimensions
rows <- as.integer(readline(prompt = "Enter the number of rows: "))
cols <- as.integer(readline(prompt = "Enter the number of columns: "))

# Create an empty matrix to store user input
matrix_input <- matrix(0, nrow = rows, ncol = cols)

# Input matrix elements
for (i in 1:rows) {
  for (j in 1:cols) {
    matrix_input[i, j] <- as.integer(readline(prompt = paste("Enter element at [", i, ",", j, "]: ")))
  }
}

# Display input matrix
cat("Entered matrix:\n")
print(matrix_input)

# Find the smallest element in the matrix
smallest_element <- find_smallest_element(matrix_input)

# Display the smallest element
cat("\nThe smallest element in the matrix is:", smallest_element, "\n")
