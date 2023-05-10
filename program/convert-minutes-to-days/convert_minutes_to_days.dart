import 'dart:io';
void main(){
  print("Enter the minutes :");
  var minutes =int.parse(stdin.readLineSync());
  var days = minutes/1440;
  print('Equivalent days : $days');
}
