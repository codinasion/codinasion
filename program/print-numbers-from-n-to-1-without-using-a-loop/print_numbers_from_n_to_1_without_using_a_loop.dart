void printNTo1recur(int n){
  if(n == 0){
    return;
  }
  print(n);
  printNTo1recur(n-1);
}

void main() {
  printNTo1recur(5);
}