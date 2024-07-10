import 'dart:io';
void main(){
  print("Enter the feet :");
  int feet = int.parse(stdin.readLineSync()!);
  int miles = feet~/5280;
  print('Equivalent miles : $miles');
}
