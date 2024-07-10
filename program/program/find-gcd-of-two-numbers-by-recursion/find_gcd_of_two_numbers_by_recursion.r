gcd <- function(a,b){
    if(b==0){
        return (a)
    }
    
    return (gcd(b,a%%b))
}

print("Input: ")
a=as.integer(readline())
b=as.integer(readline())
print(paste("Output: ",gcd(a,b)))