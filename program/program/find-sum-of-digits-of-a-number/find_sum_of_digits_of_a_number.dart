int _sumOfDigits(int num) {
  String str = num.toString();
  int n = 0, sum = 0;
  while (n < str.length) {
    sum += int.parse(str[n]);
    n++;
  }
  return sum;
}

void main() {
  print(_sumOfDigits(123)); // must return 6
  print(_sumOfDigits(456)); // must return 15
  print(_sumOfDigits(0789012)); // must return 27
}
