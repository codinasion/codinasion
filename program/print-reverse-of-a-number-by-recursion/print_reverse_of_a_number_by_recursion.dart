String _reverseNum(String num, {String reversed = ''}) {
  // Base, will return in last sequence, when no more digits to reverse
  if (num.length == 1) return '${reversed.toString()}${num}';

  String last_digit = num.split("").last; // Get the last digit of the number
  String _reversed =
      "${reversed}${last_digit}"; // Add last digit to the beginning of the reversed
  List<String> a = num.split('');
  a.removeLast();

  String next = a.join();

  return _reverseNum(next,
      reversed:
          _reversed); // Recursively call the function with remaining digits
}

void main() {
  print(_reverseNum('123000')); // will print 000321
  print(_reverseNum('123456789')); // will print 987654321
  print(_reverseNum('0100100')); // will print 0010010
  print(_reverseNum('0023400567')); // will print 7650043200
}
