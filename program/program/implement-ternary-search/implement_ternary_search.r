ternary_search <- function(A, value) 
  {
  l <- 1
  r <- length(A)
  
  while (l <= r) {
    partition_size <- (r - l) / 3
    mid1 <- floor(l + partition_size)
    mid2 <- ceiling(r - partition_size)
    
    if (A[mid1] == value) 
      {
      return(mid1 - 1)
    }
    
    if (A[mid2] == value) 
      {
      return(mid2 - 1)
    }
    
    if (value < A[mid1]) 
      {
      r <- mid1 - 1
    } else if (value > A[mid2]) 
      {
      l <- mid2 + 1
    } else 
      {
      l <- mid1 + 1
      r <- mid2 - 1
    }
  }
  
  return(-1)
}

sorted_array <- c(1, 2, 3, 4, 5)
search_value <- 4
result <- ternary_search(sorted_array, search_value)

if (result == -1) 
  {
  cat("ERROR! The given element does not exist in the current array :(\n")
} else 
  {
  cat("Element found! It is located at index", result, "\n")
}

# Cautiously Crafted By Redzwinger #
