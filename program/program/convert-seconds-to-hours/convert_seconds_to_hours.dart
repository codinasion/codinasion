import 'dart:io';

void main() {
  print('Enter the value in seconds :');
  String? input = stdin.readLineSync()!;
  double result = (double.parse(input)) / 3600;
  print(result.toStringAsFixed(2));
}
