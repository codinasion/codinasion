import 'dart:io';
void main(){
  print("Enter the radius :");
  var radius =int.parse(stdin.readLineSync());
  print("Enter the height :");
  var height =int.parse(stdin.readLineSync());
  var surface_area = 3.14 * radius * (radius + height);
  print('Surface area of cone : $surface_area');
}
