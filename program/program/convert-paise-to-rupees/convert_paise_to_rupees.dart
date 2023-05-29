import 'dart:io';
void main(){
  print("Enter the paise :");
  int paisa = int.parse(stdin.readLineSync()!);
  int rupees = paisa ~/ 100 ;
  print('Equivalent rupees : $rupees');
}
