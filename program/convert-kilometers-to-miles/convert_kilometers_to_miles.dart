import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the kilometer :");
  var kilometer =double.parse(stdin.readLineSync());
  var miles = (kilometer / 1.60).round();
  print('Equivalent miles : $miles');
}
