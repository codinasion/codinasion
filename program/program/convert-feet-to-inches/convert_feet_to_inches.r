# Program to convert feet into inches
# April 22, 2023, Jackson Mcafee, @jacksonmcafee on GH
# Meant to be run in interactive mode, can be run as non-interactive w/ addition of CLI

# Define function feet_to_inches()
# Takes parameter of feet (as double), returns inches (as int)
# as.integer() will round result down
feet_to_inches <- function(feet) {
    return (as.integer(feet * 12))
}

# Example usage, get user input as numeric and cast as double
feet <- readline(prompt="Input: ")
feet <- as.double(feet)

# Convert user input to inches, then use cat() to print result
inches <- feet_to_inches(feet)
cat("Output:", inches, "\n")