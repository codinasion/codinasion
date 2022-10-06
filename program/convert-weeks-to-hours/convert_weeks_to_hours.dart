import 'dart:io';
 
void main() {
  print('Enter Number of Weeks : ');
  int num_of_weeks = int.parse(stdin.readLineSync()!);
 
  int total_hrs = num_of_weeks * 168;
 
  print('Total hours : \n$total_hrs');
}