import 'dart:io';
void main(){
  print("Enter the length :");
  var length =int.parse(stdin.readLineSync());
  print("Enter the width :");
  var width =int.parse(stdin.readLineSync());
  print("Enter the height :");
  var height =int.parse(stdin.readLineSync());
  var surface_area = 2 * ((length * width) + (length * height) + (width * height));
  print('Surface area of cuboid : $surface_area');
}
