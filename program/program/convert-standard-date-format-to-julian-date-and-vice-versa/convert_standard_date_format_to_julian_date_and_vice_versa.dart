import 'dart:io';

// Function to convert standard date format to Julian date
String standardToJulianDate(int year, int month, int day) {
  int daysInMonth = 0;
  List<int> daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    daysInMonths[1] = 29; // Leap year
  }
  for (int i = 0; i < month - 1; i++) {
    daysInMonth += daysInMonths[i];
  }
  daysInMonth += day;
  return '$year${daysInMonth.toString().padLeft(3, '0')}';
}

// Function to convert Julian date to standard date format
List<int> julianToStandardDate(String julianDate) {
  int year = int.parse(julianDate.substring(0, 2));
  int dayOfYear = int.parse(julianDate.substring(2));
  List<int> daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    daysInMonths[1] = 29; // Leap year
  }
  int month = 1;
  while (dayOfYear > daysInMonths[month - 1]) {
    dayOfYear -= daysInMonths[month - 1];
    month++;
  }
  return [year, month, dayOfYear];
}

void main() {
  stdout.write('Enter the standard date (YYYY-MM-DD): ');
  String inputDate = stdin.readLineSync()!;
  List<String> parts = inputDate.split('-');
  int year = int.parse(parts[0]);
  int month = int.parse(parts[1]);
  int day = int.parse(parts[2]);

  String julianDate = standardToJulianDate(year, month, day);
  print('Julian Date: $julianDate');

  stdout.write('Enter the Julian date (YYDDD): ');
  String inputJulianDate = stdin.readLineSync()!;
  List<int> standardDate = julianToStandardDate(inputJulianDate);
  print('Standard Date: ${standardDate[0]}-${standardDate[1].toString().padLeft(2, '0')}-${standardDate[2].toString().padLeft(2, '0')}');
}
