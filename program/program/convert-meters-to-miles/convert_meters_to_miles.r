convertMetersToMiles <- function(meters) {
  miles <- meters / 1609
  return(miles)
}

# Example usage
inputMeters <- 8046.72
outputMiles <- convertMetersToMiles(inputMeters)

cat("Input:", inputMeters, "meters\n")
cat("Output:", outputMiles, "miles\n")

