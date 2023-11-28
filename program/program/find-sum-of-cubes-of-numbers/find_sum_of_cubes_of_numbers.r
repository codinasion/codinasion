# Function to find the sum of cubes of numbers
sumOfCubes <- function(numbers) {
  return(sum(numbers^3))
}

# Example usage
inputNumbers <- c(1, 2, 3, 4, 5)
outputSum <- sumOfCubes(inputNumbers)

cat("Input Numbers: ", inputNumbers, "\n")
cat("Sum of Cubes  : ", outputSum, "\n")
