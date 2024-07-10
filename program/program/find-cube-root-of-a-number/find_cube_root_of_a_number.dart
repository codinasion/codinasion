import 'dart:io';
import 'dart:math';
void main(){
  print("Enter a number :");
  var number =int.parse(stdin.readLineSync());
  var cube_root = pow(number,1/3).round();
  print('Cube root of the given number : $cube_root');
}
