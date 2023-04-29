fahrenheit_to_kelvin <- function(fahrenheit) {
  kelvin <- (fahrenheit - 32) * (5/9) + 273.15
  return(kelvin)
}

cat("Enter temperature in Fahrenheit: ")
fahrenheit <- as.numeric(readline())

if (is.na(fahrenheit)) {
  cat("Invalid input. Please enter a valid number.")
} else {
  kelvin <- fahrenheit_to_kelvin(fahrenheit)
  cat("Temperature in Kelvin:", kelvin)
}
