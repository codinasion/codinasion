import 'dart:io';
void main(){
  print("Enter the side :");
  int side = int.parse(stdin.readLineSync()!);
  int area = 6 * side * side;
  print('Area of cube : $area');
}
