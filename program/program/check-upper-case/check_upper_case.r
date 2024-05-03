is_uppercase <- function(character) {
  if (grepl("^[A-Z]$", character)) {
    return(TRUE)
  } else {
    return(FALSE)
  }
}

# Example usage:
char <- "G"
result <- is_uppercase(char)
print(paste("Is the character", char, "uppercase?", result))
