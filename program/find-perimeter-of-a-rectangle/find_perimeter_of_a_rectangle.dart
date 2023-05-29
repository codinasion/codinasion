import 'dart:io';
void main(){
  print("Enter the length :");
  var length = int.parse(stdin.readLineSync());
  print("Enter the width :");
  var width = int.parse(stdin.readLineSync());
  var perimeter =  2 * (length + width);
  print('Perimeter of rectangle  : $perimeter');
}
