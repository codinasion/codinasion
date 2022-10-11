import 'dart:io';

// Write a Dart program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000
 
void main() {
  print('Enter Number of Weeks : ');
  int num_of_weeks = int.parse(stdin.readLineSync()!);
 
  int total_seconds = num_of_weeks * 604800;
 
  print('Total Seconds : \n$total_seconds');
}

// Contributed by Technical Amanjeet.
