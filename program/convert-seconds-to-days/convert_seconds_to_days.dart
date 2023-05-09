import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int days = seconds~/86400;
  print('Equivalent days : $days');
}
