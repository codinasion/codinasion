import 'dart:io';
void main(){
  print("Enter the seconds :");
  var seconds =int.parse(stdin.readLineSync());
  var minutes = seconds/60;
  print('Equivalent minutes : $minutes');
}
