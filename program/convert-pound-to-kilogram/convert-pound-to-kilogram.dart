import 'dart:io';
void main(){
  print("enter the no. of pounds");
  double kilogram;
  double pounds = double.parse(stdin.readLineSync()!);
  kilogram=pounds*(0.453592);
  print("$kilogram");

}