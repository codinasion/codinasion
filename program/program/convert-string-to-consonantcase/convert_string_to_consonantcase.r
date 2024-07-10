consonantCase <- function(a) {
  vowels <- c("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")
  new_str <- ""
  for (i in seq_len(nchar(a))) {
    letter <- substr(a, i, i)
    new_str <- paste0(new_str, ifelse(letter %in% vowels, tolower(letter), toupper(letter)))
  }
  return(new_str)
}
x <- "hello world"
result <- consonantCase(x)
cat("Consonant Case of '", x, "' is '", result, "'\n")
