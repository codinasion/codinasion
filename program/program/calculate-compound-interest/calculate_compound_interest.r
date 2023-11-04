# Function to calculate compound interest
calculate_compound_interest <- function(principal, rate, time) {
    compound_interest <- principal * (1 + rate*0.01)^time
    return(compound_interest)
}

# Take user input for principal amount, rate of interest, and time
principal <- as.numeric(readline("Principal: "))
rate <- as.numeric(readline("Rate : "))
time <- as.numeric(readline("Time : "))

# Validate input
if (!is.numeric(principal) || !is.numeric(rate) || !is.numeric(time)) {
    cat("Invalid input. Please enter valid numeric values.")
} else {
    # Calculate compound interest using the function
    compound_interest <- calculate_compound_interest(principal, rate, time)
    
    # Print the result
    cat("Compound Interest:", compound_interest, "\n")
}
