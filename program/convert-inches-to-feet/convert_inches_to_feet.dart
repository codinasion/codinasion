import 'dart:io';

void main() {
  print('Enter value in inches:');
  String? input = stdin.readLineSync()!;
  double result = (double.parse(input)) / 12;
  print(result.toStringAsFixed(2));
}
