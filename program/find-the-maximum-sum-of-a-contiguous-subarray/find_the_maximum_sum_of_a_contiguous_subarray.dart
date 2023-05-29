import 'dart:math';
void maxsumSubarray(List<int> arr){
  int sum = 0;
  int maxSum = 0;
  for(var i = 0 ; i < arr.length ; i++){
    sum = max(sum + arr[i] , arr[i]);
    maxSum = max(sum , maxSum);
  }
  print(maxSum);
}

void main() {
  maxsumSubarray([1 , -1 , -2 , 3 , 5 ,1]);
}