import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int minutes = seconds~/60;
  print('Equivalent minutes : $minutes');
}
