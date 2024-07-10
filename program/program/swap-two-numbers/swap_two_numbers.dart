import 'dart:io';

void main() {
  print("Enter first number: ");
  double? a = double.parse(stdin.readLineSync()!);
  print("Enter second number: ");
  double? b = double.parse(stdin.readLineSync()!);
  print("Numbers before swapping: $a $b");
  var tmp;
  tmp = a;
  a = b;
  b = tmp;
  print("Numbers after swapping: $a $b");
}