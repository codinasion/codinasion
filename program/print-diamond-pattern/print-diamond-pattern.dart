import 'dart:io';

void main() {
  int i, j, k, n = 10;
  for (i = n - 1; i >= 0; i-=2) {
    for (j = 0; j < i; j++) {
      stdout.write(" ");
    }
    for (k = i; k <= n - 1; k++) {
      stdout.write("*" + " ");
    }
    stdout.writeln("");
  }
  for (i = 3; i <= n - 1; i+=2) {
    for (j = 0; j < i; j++) {
      stdout.write(" ");
    }
    for (k = i; k <= n - 1 ; k++) {
      stdout.write("*" + " ");
    }
    stdout.writeln("");
  }
}
