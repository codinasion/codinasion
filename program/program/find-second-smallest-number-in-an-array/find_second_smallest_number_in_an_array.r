numbers <- c(3, 1, 0, 1, 5, 9, 2, 6, 5, 3, 5)

# Function to find the second smallest number in an array
find_second_smallest <- function(numbers) {
    sorted_numbers <- sort(unique(numbers))
    if (length(sorted_numbers) >= 2) {
        return(sorted_numbers[2])
    } else {
        stop("Array must contain at least two distinct elements")
    }
}

# print the second smallest number
second_smallest <- find_second_smallest(numbers)
cat("The second smallest number in the array is:", second_smallest, "\n")
