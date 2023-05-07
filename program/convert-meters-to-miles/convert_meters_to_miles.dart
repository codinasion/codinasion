import 'dart:io';
void main(){
  print("Enter the meters :");
  var meter = double.parse(stdin.readLineSync());
  var miles = meter/1609;
  print('Equivalent miles : $miles');
}
