# Function to convert feet to miles
convert_feet_to_miles <- function(feet) {
  miles <- feet / 5280
  return(miles)
}

# Example usage
feet <- as.numeric(readline(prompt = "Enter the number of feet: "))
miles <- convert_feet_to_miles(feet)
cat(feet, "feet is equal to", miles, "miles\n")
