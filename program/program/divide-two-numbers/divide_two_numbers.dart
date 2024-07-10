import 'dart:io';
void main(){
  print("Enter the number 1 :");
  var num1 = double.parse(stdin.readLineSync()!);
  print("Enter the number 2 :");
  var num2 = double.parse(stdin.readLineSync()!);
  var divide = num1/num2;
  print('Division of two given numbers : $divide');
}
