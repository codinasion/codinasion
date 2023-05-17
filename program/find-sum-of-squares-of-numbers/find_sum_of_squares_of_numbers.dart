int sumOfSq(List<int> arr){
  int sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += (arr[i] * arr[i]);
  }
  return sum;
}
void main(){
  List<int> arr = [1 ,2 ,3 ,4 ,5];
  print(sumOfSq(arr));
}

 