String _reverseNum({required int num, int reversed = 0}) {
  // Base, will return in last sequence, when no more digits to reverse
  if (num == 0) return reversed.toString();

  int last_digit = num % 10; // Get the last digit of the number
  int _reversed = (reversed * 10 +
      last_digit); // Add last digit to the beginning of the reversed
  return _reverseNum(
      num: num ~/ 10,
      reversed:
          _reversed); // Recursively call the function with remaining digits
}

void main() {
  print(_reverseNum(num: 123)); // will print 321
  print(_reverseNum(num: 123456789)); // will print 987654321
}
