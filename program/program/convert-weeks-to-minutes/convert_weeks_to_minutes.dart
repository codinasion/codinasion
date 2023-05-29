import 'dart:io';
void main(){
  print("Enter the weeks :");
  int weeks = int.parse(stdin.readLineSync()!);
  int minutes = weeks * 10080 ;
  print('Equivalent minutes : $minutes');
}
