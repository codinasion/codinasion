import 'dart:io';

void main() {
  int i, j, k, m = 1;
  print("Enter the number:");
  int? n = int.parse(stdin.readLineSync()!);
  print("$n");
  for ( i =1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
      stdout.write(" ");
    }
    for (k = 1; k <= ( 2 * i - 1); k++) {
      stdout.write("*");
    }
    stdout.writeln("");
  }
  for ( i = n-1; i >= 1; i--) {
    for ( j = 1; j <= m; j++) {
      stdout.write(" ");
    }
    for (k = 1; k <= ( 2 * i - 1); k++) {
      stdout.write("*");
    }
    m++;  
    stdout.writeln("");
  }
}


