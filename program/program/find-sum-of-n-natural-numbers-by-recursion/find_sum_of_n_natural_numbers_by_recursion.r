
sum<-function(n){
    if (n<=1){
        return(n)
        }else{
        return(n+sum(n-1))
    }
}
sum(5)