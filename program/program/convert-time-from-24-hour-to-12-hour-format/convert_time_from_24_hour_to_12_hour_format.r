# Function to convert 24-hour format to 12-hour format
convert_time <- function(time) {
    time_24hr <- strptime(time, format = "%H:%M:%S")
    time_12hr <- format(time_24hr, format = "%I:%M:%S%p")
    return(time_12hr)
}

# Taking input from the user
cat("Enter time in 24-hour format (HH:MM:SS): ")
input_time <- readline()

# Converting and displaying the output
output_time <- convert_time(input_time)
cat("Time in 12-hour format: ", output_time, "\n")
