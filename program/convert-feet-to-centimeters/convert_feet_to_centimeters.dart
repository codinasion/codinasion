import 'dart:io';
void main(){
  print("Enter the feet :");
  int feet = int.parse(stdin.readLineSync()!);
  double cm = feet * 30.48;
  print('Equivalent centimeter : $cm');
}
