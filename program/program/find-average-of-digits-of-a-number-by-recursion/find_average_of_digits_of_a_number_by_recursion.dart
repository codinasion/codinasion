double digitSumAvg(int number , int digits , int sum){
  if(number == 0){
    return sum / digits;
  }
  
  int no = number % 10;
  digits += 1;
  sum += no;
  number = number ~/ 10;
  
  return digitSumAvg(number , digits , sum);
  
}

void main(){
  print(digitSumAvg(12234 , 0 , 0));
}

 