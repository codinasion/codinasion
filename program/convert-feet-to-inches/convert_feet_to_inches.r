# Program to convert feet into inches
# April 22, 2023, Jackson Mcafee, @jacksonmcafee on GH
# Meant to be run in interactive mode, can be run as non-interactive w/ addition of CLI

# Define function feet_to_inches()
# Takes parameter of feet (as int), returns inches (as int)
feet_to_inches <- function(feet) {
    return (feet * 12)
}

# Example usage, get user input and cast as integer
feet <- readline(prompt="Input feet as an integer: ")
feet <- as.integer(feet)

# Convert user input to inches, then print result
inches <- feet_to_inches(feet)
print(paste(feet, "feet is equivalent to", inches, "inches."))