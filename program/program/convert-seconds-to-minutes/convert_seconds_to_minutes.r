# Function to convert seconds to minutes
convert_seconds_to_minutes <- function(seconds) {
  # Check if the input is numeric
  if (!is.numeric(seconds)) {
    stop("Input must be a numeric value representing seconds.")
  }

  # Perform the conversion
  minutes <- seconds / 60

  # Return the result
  return(minutes)
}

# Example usage
seconds_input <- as.numeric(readline("Enter seconds: "))
result <- convert_seconds_to_minutes(seconds_input)

# Print the result
cat("Converted minutes:", result, "\n")