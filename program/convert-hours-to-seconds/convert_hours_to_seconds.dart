import 'dart:io';
void main(){
  print("Enter the hours :");
  var hours = int.parse(stdin.readLineSync()!);
  var seconds =  hours * 3600;
  print('Equivalent seconds  : $seconds');
}
