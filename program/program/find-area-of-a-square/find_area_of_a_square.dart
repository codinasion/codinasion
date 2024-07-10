import 'dart:io';
void main(){
  print("Enter the side :");
  var side = double.parse(stdin.readLineSync());
  var area = side * side;
  print('Area of square: $area');
}
