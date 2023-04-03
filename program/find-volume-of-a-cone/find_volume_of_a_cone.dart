import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the radius :");
  var radius = double.parse(stdin.readLineSync());
  print("Enter the height :");
  var height = double.parse(stdin.readLineSync());
  var volume = 1/3 * 3.14 * radius * radius * height;
  print('Volume of cone  : $volume');
}
