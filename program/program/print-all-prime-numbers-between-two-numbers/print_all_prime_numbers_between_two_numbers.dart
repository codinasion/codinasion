void primeNos(int start , int end){
  for(var i = start ; i <= end ; i++){
    int factors = 0;
    for(var j = 1 ; j <= i ; j++){
      if(i % j == 0){
        factors += 1;
      }
    }
    if(factors <= 2){
        print(i);
    }
  }
}

void main() {
  primeNos(10 , 20);
}