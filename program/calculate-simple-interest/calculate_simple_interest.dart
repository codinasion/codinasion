import 'dart:io';
void main(){
  print("Enter the principal amount :");
  var principal=int.parse(stdin.readLineSync());
  print("Enter the rate of interest :");
  var interest=int.parse(stdin.readLineSync());
  print("Enter the time :");
  var time =int.parse(stdin.readLineSync());
  var simple_interest = (principal * interest * time )/100;
  print(simple_interest);
}
