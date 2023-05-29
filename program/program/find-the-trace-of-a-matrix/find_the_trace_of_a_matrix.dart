import 'dart:io';

void main() {
  int n;
  print("Enter the number of rows and columns of matrix:");
  n = int.parse(stdin.readLineSync()!);
  List<List<int>> matrix = List.generate(n, (_) => List.filled(n, 0));
  print("Enter the elements of matrix:");
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      matrix[i][j] = int.parse(stdin.readLineSync()!);
    }
  }
  int trace = 0;
  for (int i = 0; i < n; i++) {
    trace += matrix[i][i];
  }
  print("Trace of matrix is $trace");
}
 /* Output :
Enter the number of rows and columns of matrix:
3
Enter the elements of matrix:
1
2
3
4
5
6
7
8
9
Trace of matrix is 15. 
*/