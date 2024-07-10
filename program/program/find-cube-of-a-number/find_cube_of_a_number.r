# Function to calculate cube of a number
calculate_cube <- function(x) {
  return(x^3)
}


number <- as.numeric(readline(prompt = "Enter a number: "))

result <- calculate_cube(number)
cat("Cube of", number, "is:", result, "\n")
