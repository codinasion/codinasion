# Prompt the user for input
length <- as.numeric(readline("Length: "))
width <- as.numeric(readline("Width: "))

# Calculate perimeter
perimeter <- 2 * (length + width)

# Print the result
cat("Perimeter:", perimeter)
