# Function to check if a number is an Armstrong number
isArmstrong <- function(number) {
  originalNumber <- number
  numDigits <- nchar(number)
  sumOfCubes <- 0

  while (number > 0) {
    digit <- number %% 10
    sumOfCubes <- sumOfCubes + digit^numDigits
    number <- number %/% 10
  }

  return(originalNumber == sumOfCubes)
}

# Example usage
inputNumber <- 407  
result <- isArmstrong(inputNumber)

if (result) {
  cat(inputNumber, "is an Armstrong number.\n")
} else {
  cat(inputNumber, "is not an Armstrong number.\n")
}
