void largestInArray(List<int> arr){
  int max = arr[0];
  for(var i = 0  ; i < arr.length ; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  print(max);
}

void main() {
  largestInArray([1,2,3,100,5,66]);
}