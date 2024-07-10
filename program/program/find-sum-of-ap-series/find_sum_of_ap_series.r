sum_of_ap_series <- function(a, n, d) {
  an <- a + (n - 1) * d
  
  # Formula for the sum of n terms of AP
  sum_ap <- n * (a + an) / 2
  
  return(sum_ap)
}

a <- 2
n <- 5
d <- 3

result <- sum_of_ap_series(a, n, d)
cat("Output:", result, "\n")
