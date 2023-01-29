string <- "hello world"
words <- strsplit(string, " ")[[1]]
result <- paste(shQuote(words), collapse=", ")
cat(sprintf("[%s]", result))
