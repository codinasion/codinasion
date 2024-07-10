import 'dart:io';
void main(){
  print("Enter the inches :");
  var inches = double.parse(stdin.readLineSync()!);
  var cm = inches * 2.54 ;
  print('Equivalent Centimeter: $cm');
}
