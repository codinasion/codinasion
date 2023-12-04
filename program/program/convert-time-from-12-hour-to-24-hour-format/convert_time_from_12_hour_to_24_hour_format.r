convert_to_24_hour_format <- function(time_12h) {
    # Split the time into components
    parts <- strsplit(time_12h, "[:APM]")[[1]]
    
    hour <- as.integer(parts[1])
    minute <- parts[2]
    second <- parts[3]
    am_pm <- substr(time_12h, nchar(time_12h)-1, nchar(time_12h))

    # Convert hour from 12-hour format to 24-hour format
    if (am_pm == "PM" && hour < 12) {
        hour <- hour + 12
    } else if (am_pm == "AM" && hour == 12) {
        hour <- 0
    }

    # Format and return the time in 24-hour format
    sprintf("%02d:%s:%s", hour, minute, second)
}

# Example usage
input_time <- "12:05:45PM"
output_time <- convert_to_24_hour_format(input_time)
print(output_time)
