void main() {
  print(isNumberPalindrome(223));
}

bool isNumberPalindrome(int num) {
  String originalNumber = num.toString();
  String reversed = originalNumber.split('').reversed.join('');
  if (originalNumber == reversed)
    return true;
  else
    return false;
}
