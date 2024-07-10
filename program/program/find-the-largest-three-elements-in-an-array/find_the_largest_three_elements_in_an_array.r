TheBigThree <- function(ARay) 
  {
  if (length(ARay) < 3) 
    {
    stop("ERROR! Input Array Size < 3")
  }
  
  sorted_arr <- sort(ARay, decreasing = TRUE)
  
  largest_three <- sorted_arr[1:3]
  
  cat("Output: ", paste(largest_three, collapse = ", "), "\n")
}

ARay <- c(10, 4, 3, 50, 23, 90)
TheBigThree(ARay)

ARay2 <- c(10, 4, 3, 50, 23, 90, 1, 100, 49)
TheBigThree(ARay2)

# Cautiously Crafted By Redzwinger #