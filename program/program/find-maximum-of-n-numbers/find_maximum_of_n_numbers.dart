import 'dart:io';

void main() {
  stdout.write('Enter the number of numbers you want to check: ');
  int? n = int.parse(stdin.readLineSync()!);
  List<int> a = [];

  for (int i = 0; i < n; i++) {
    stdout.write('Enter the number [${i + 1}]: ');
    int number = int.parse(stdin.readLineSync()!);
    a.add(number);
  }

  int max = a[0];
  for (int i = 0; i < n; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }

  print('The Max number is: $max');
}
