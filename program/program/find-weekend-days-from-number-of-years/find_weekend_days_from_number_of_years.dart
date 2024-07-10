import 'dart:io';
void main(){
  print("Enter no of years : ");
  var years=int.parse(stdin.readLineSync());
  var weekenddays = years*104;
  print(weekenddays);
}
