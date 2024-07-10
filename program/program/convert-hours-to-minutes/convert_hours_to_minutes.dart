import 'dart:io';
void main(){
  print("Enter the hours :");
  var hours =int.parse(stdin.readLineSync());
  var minutes = hours * 60;
  print('Equivalent minutes : $minutes');
}
