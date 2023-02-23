# function to convert inches to feet
inches_to_feet <- function(inches) {
  feet <- inches / 12
  return(feet)
}

result <- inches_to_feet(24)
print(result)
