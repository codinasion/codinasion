import 'dart:io';
void main(){
  print("Enter the centimeter :");
  double cm = double.parse(stdin.readLineSync()!);
  double feet = cm/30.48;
  print('Equivalent feet : $feet');
}
