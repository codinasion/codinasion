# Function to convert standard date format to Julian date
standard_to_julian <- function(date) {
  parts <- unlist(strsplit(date, "-"))
  year <- as.numeric(parts[1])
  month <- as.numeric(parts[2])
  day <- as.numeric(parts[3])
  
  julian_day <- as.numeric(format(as.Date(date), "%j"))
  julian_year <- as.numeric(format(as.Date(date), "%y"))
  
  return(paste(julian_year, sprintf("%03d", julian_day), sep = "-"))
}

# Function to convert Julian date format to standard date format
julian_to_standard <- function(julian_date) {
  parts <- unlist(strsplit(julian_date, "-"))
  julian_year <- as.numeric(parts[1])
  julian_day <- as.numeric(parts[2])
  
  standard_date <- as.Date(paste0("20", julian_year, "-01-01")) + julian_day - 1
  
  return(as.character(standard_date))
}

# Example usage:
standard_date <- "2022-02-22"
julian_date <- "22-053"

cat("Standard to Julian:", standard_to_julian(standard_date), "\n")
cat("Julian to Standard:", julian_to_standard(julian_date), "\n")
