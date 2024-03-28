import 'dart:io';
 
double celsiusToKelvin(double celsius) {
  return celsius + 273.15;
}

void main() {
  double celsius = -40;
  double kelvin = celsiusToKelvin(celsius);

  print('Input (C): $celsius');
  print('Output (K): $kelvin');
}
