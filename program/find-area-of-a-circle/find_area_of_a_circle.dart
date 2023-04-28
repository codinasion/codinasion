import 'dart:io';
void main(){
  print("Enter the radius :");
  double radius = double.parse(stdin.readLineSync()!);
  double area = 3.14 * radius * radius;
  print('Area of circle : $area');
}
