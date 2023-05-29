import 'dart:io';
void main(){
  print("Enter the Radius :");
  var radius=int.parse(stdin.readLineSync());
  print("Enter the Height :");
  var height=int.parse(stdin.readLineSync());
  var area = 2 * 3.14 * radius * (radius + height);
  print('Area of Cylinder: $area');
}
