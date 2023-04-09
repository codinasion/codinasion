import 'dart:io';
void main(){
  print("Enter no of weeks :");
  var weeks=int.parse(stdin.readLineSync());
  var days = weeks*7;
  print(days);
}