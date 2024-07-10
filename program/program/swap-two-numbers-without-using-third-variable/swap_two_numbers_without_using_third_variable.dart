import 'dart:io';

void main() {
  // Input two numbers
  stdout.write('Enter the first number: ');
  int num1 = int.parse(stdin.readLineSync()!);
  stdout.write('Enter the second number: ');
  int num2 = int.parse(stdin.readLineSync()!);

  // Swap the two numbers
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  // Output the swapped numbers
  print('After swapping:');
  print('First number = $num1');
  print('Second number = $num2');
}