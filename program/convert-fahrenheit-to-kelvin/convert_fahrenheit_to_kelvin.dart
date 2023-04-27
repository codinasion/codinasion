import 'dart:io';

void main() {
  stdout.write('Enter the temperature in Fahrenheit: ');
  double fahrenheit = double.parse(stdin.readLineSync()!);

  double kelvin = (fahrenheit + 459.67) * (5 / 9);

  print('$fahrenheit degrees Fahrenheit is equal to $kelvin Kelvin.');
}
