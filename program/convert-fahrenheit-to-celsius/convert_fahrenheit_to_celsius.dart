import 'dart:io';
void main(){
  print("Enter the Fahrenheit :");
  var fahrenheit =int.parse(stdin.readLineSync());
  var celsius = (fahrenheit - 32) * 5/9;
  print('Equivalent Celsius : $celsius');
}
