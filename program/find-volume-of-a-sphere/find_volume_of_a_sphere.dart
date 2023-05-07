import 'dart:io';
void main(){
  print("Enter the radius :");
  var radius = double.parse(stdin.readLineSync());
  var volume =  4/3 * 3.14 * radius * radius * radius;
  print('Volume of sphere  : $volume');
}
