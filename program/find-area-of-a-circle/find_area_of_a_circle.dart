import 'dart:io';
void main(){
  print("Enter the radius :");
  var radius = double.parse(stdin.readLineSync());
  var area = 3.14 * radius * radius;
  print('Area of circle : $area');
}
