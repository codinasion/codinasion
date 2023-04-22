import 'dart:io';

int gcd(int a, int b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

void main() {
  print("Enter two numbers to find their GCD:");
  int num1 = int.parse(stdin.readLineSync()!);
  int num2 = int.parse(stdin.readLineSync()!);

  int result = gcd(num1, num2);

  print("The GCD of $num1 and $num2 is $result");
}