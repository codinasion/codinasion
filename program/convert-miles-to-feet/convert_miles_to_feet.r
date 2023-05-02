# Function to convert miles to feet
miles_to_feet <- function(miles) {
  feet <- miles * 5280
  return(feet)
}

# Example usage
miles <- 5
feet <- miles_to_feet(miles)
cat(paste(miles, "miles is equal to", feet, "feet"))
