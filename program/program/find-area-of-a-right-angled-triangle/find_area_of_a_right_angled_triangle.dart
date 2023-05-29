import 'dart:io';
void main(){
  print("Enter the base :");
  var base = double.parse(stdin.readLineSync()!);
  print("Enter the height :");
  var height = double.parse(stdin.readLineSync()!);
  var area =  0.5 * base * height;
  print('Area of right angled triangle : $area');
}
