trace_matrix <- function(input)
{
  dim_input = dim(input)
  
  #Check that input is a square matrix
  if(dim_input[1] != dim_input[2]){
    stop("Input is not a square matrix")
    return()
  }
  
  output = 0
  for (i in c(1:dim_input[1])) {
    output <- output + input[i,i]
  }
  
  return(output)
}

a = matrix(data = c(1,2,3,4,5,6,7,8,9),nrow = 3, ncol = 3)
b = trace_matrix(a)
print(b)

a1 = matrix(data = c(1,2,3,4,5,6),nrow = 3, ncol = 2)
b1 = trace_matrix(a1)#Should return an error
