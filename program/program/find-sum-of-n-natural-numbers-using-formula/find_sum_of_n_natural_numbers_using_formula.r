sum_natural <- function(n) {
  sum <- n*(n+1)/2
  return(sum)
}
n<-10
result<-sum_natural(n)
cat("Sum of the first",n,"natural numbers is:",result)
