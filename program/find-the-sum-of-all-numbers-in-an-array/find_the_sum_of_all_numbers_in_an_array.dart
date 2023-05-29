void sumOfArray(List<int> arr){
  int sum = 0;
  for(var i = 0 ; i < arr.length ; i++){
    sum += arr[i];
  }
  print(sum);
}

void main() {
  sumOfArray([1,3,4,5,10]);
}