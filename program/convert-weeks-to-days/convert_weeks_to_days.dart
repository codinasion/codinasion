import 'dart:io';
void main(){
  print("enter no of weeks:3");
  var weeks=int.parse(stdin.readLineSync()!);
  var days=weeks*7;
  print(days);

}