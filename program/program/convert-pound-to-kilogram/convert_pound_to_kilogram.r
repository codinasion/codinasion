# Prompt the user to enter a weight in pounds
cat("Enter a weight in pounds: ")
pounds <- as.numeric(readline())

# Convert the weight from pounds to kilograms
kilograms <- pounds / 2.20462

# Display the result
cat(paste(pounds, "pounds is", round(kilograms, 2), "kilograms\n"))
