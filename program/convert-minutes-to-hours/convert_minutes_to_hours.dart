import 'dart:io';
void main(){
  print("Enter the minutes :");
  int minutes = int.parse(stdin.readLineSync()!);
  int hours = minutes~/60;
  print('Equivalent hours : $hours');
}
