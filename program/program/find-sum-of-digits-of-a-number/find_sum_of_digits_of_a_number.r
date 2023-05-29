sum_of_digits <- function(x) {
    string_x <- format(x)
    split_x <- strsplit(string_x, "")[[1]]
    sum_output <- 0
    for (char in split_x) {
        sum_output <- sum_output + as.integer(char)
    }
    return(sum_output)
}

## Test cases
print(sum_of_digits(123)) ## Correct Answer: 6
print(sum_of_digits(456)) ## Correct Answer: 15
print(sum_of_digits(179)) ## Correct Answer: 17