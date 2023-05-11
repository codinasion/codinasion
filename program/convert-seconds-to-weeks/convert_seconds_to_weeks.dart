import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int weeks = seconds~/604800;
  print('Equivalent weeks : $weeks');
}
