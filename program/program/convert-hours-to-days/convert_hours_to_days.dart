import 'dart:io';
void main(){
  print("Enter the hours :");
  int hours = int.parse(stdin.readLineSync()!);
  int days = hours ~/ 24;
  print('Equivalent days : $days');
}
