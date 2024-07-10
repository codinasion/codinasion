convertOctalToDecimal <- function(octalNumber) {
  decimalNumber <- 0
  octalDigits <- as.numeric(strsplit(as.character(octalNumber), '')[[1]])

  # Reverse the octal digits to start from the rightmost digit
  octalDigits <- rev(octalDigits)

  # Convert octal to decimal using the provided algorithm
  for (i in 1:length(octalDigits)) {
    decimalNumber <- decimalNumber + octalDigits[i] * 8^(i - 1)
  }

  return(decimalNumber)
}

# Example usage
octalNumber <- 12
decimalNumber <- convertOctalToDecimal(octalNumber)

cat("Octal   : ", octalNumber, "\n")
cat("Decimal : ", decimalNumber, "\n")
