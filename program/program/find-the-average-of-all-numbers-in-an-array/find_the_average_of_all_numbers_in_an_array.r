numbers <- c(1, 2, 3, 4, 5)

# Function to calculate the average
calculate_average <- function(numbers) {
    return(mean(numbers))
}

# Calculate the average and print the result
average <- calculate_average(numbers)
cat("The average is:", average, "\n")
