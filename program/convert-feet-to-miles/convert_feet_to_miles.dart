import 'dart:io';
void main(){
  print("Enter the feet :");
  var feet =int.parse(stdin.readLineSync());
  var miles = feet/5280;
  print('Equivalent miles : $miles');
}
