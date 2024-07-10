import 'dart:io';

void main() { 
  //Asks user to enter number of days
  stdout.write('Enter the number of days: ');
  //Reads user input and parses it as integer
  int days = int.parse(stdin.readLineSync()!);

  //Converts days to hours
  int hours = days * 24;
  //Prints the result
  print('$days days = $hours hours');
}