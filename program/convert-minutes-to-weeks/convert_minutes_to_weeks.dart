import 'dart:io';
void main(){
  print("Enter the minutes :");
  var minutes = int.parse(stdin.readLineSync()!);
  var weeks = minutes~/10080;
  print('Equivalent weeks : $weeks');
}
