import 'dart:io';
void main(){
  print("Enter the miles :");
  double miles = double.parse(stdin.readLineSync()!);
  double km = miles * 1.609 ;
  print('Equivalent kilometer : $km');
}
