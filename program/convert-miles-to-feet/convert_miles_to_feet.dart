import 'dart:io';
void main(){
  print("Enter the miles :");
  var miles =int.parse(stdin.readLineSync()!);
  var feet = miles*5280;
  print('Equivalent feet : $feet');
}
