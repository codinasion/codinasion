void main() {
  printFibonacciSeries(5);
}

void printFibonacciSeries(int n) {
  int p1 = 0, p2 = 1, p3;
  print('$p1');
  print('$p2');
  for (int i = 2; i < n; i++) {
    p3 = p1 + p2;
    print('$p3');
    p1 = p2;
    p2 = p3;
  }
}
