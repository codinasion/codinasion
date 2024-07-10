void avgOfArray(List<int> arr){
  double avg = 0;
  for(var i = 0 ; i < arr.length ; i++){
    avg += arr[i];
  }
  avg = avg / arr.length;
  print(avg);
}

void main() {
  avgOfArray([1,2,3,6,7]);
}