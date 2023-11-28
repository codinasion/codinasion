# Function to check if a number is an integer or a float
checkNumberType <- function(number) {
  if (is.integer(number)) {
    return("Integer")
  } else if (is.numeric(number)) {
    return("Float")
  } else {
    return("Not a valid number")
  }
}

# Example usage 
inputNumber <- 3.14 
result <- checkNumberType(inputNumber)
cat("Input:", inputNumber, "\nOutput:", result, "\n")
