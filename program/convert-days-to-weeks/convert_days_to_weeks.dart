import 'dart:io';
void main(){
  print("Enter the days :");
  var days =int.parse(stdin.readLineSync());
  var weeks = days/7;
  print('Equivalent weeks : $weeks');
}
