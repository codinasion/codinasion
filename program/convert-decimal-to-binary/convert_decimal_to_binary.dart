void decToBin(int n){
  String answer = "";
  
  while(n / 2 != 0){
    int rem = n % 2;
    answer = rem.toString() + answer;
    n = n ~/ 2;
  }
  print(int.parse(answer));
}

void main() {
  decToBin(11);
}