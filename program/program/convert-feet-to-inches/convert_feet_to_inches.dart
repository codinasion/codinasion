import 'dart:io';

void main() {
  print('Enter value in feets:');
  String? input = stdin.readLineSync()!;
  double result = (double.parse(input)) * 12;
  print(result.toStringAsFixed(2));
}
