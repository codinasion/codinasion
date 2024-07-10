import 'dart:io';

void main(){
  int number;
  print("Enter a number :");
  number = int.parse(stdin.readLineSync()!);
  if(number.isEven){
      print("$number is an even number");
  } else if(number.isOdd){
      print("$number is an odd number");
  }
}
