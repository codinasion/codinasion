void minInArray(List<int> arr){
  int min = arr[0];
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  print(min);
}

void main() {
  minInArray([1,0,-1,3,-4,9]);
}