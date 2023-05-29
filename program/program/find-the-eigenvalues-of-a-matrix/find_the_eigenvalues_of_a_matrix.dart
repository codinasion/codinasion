import 'dart:io';
import 'dart:math';

// A function to read a matrix from standard input
List<List<double>> readMatrix() {
  // Read the number of rows and columns
  print('Enter the number of rows:');
  int rows = int.parse(stdin.readLineSync()!);
  print('Enter the number of columns:');
  int cols = int.parse(stdin.readLineSync()!);

  // Create an empty matrix
  List<List<double>> matrix = [];

  // Read each row of the matrix
  for (int i = 0; i < rows; i++) {
    print('Enter row ${i + 1}:');
    List<double> row = stdin
        .readLineSync()!
        .split(' ')
        .map((e) => double.parse(e))
        .toList();
    // Check if the row has the correct length
    if (row.length != cols) {
      throw Exception('The row has an invalid length');
    }
    // Add the row to the matrix
    matrix.add(row);
  }

  // Return the matrix
  return matrix;
}

// A function to find the eigenvalues of a matrix
List<double> eigenvalues(List<List<double>> matrix) {
  // Check if the matrix is square
  int n = matrix.length;
  for (int i = 0; i < n; i++) {
    if (matrix[i].length != n) {
      throw Exception('The matrix is not square');
    }
  }

  // Find the trace and determinant of the matrix
  double trace = 0;
  double det = 0;
  for (int i = 0; i < n; i++) {
    trace += matrix[i][i];
    det += matrix[i][i] * matrix[(i + 1) % n][(i + 1) % n] -
        matrix[i][(i + 1) % n] * matrix[(i + 1) % n][i];
  }

  // Find the discriminant of the characteristic polynomial
  double d = trace * trace - 4 * det;

  // If the discriminant is negative, there are no real eigenvalues
  if (d < 0) {
    throw Exception('The matrix has no real eigenvalues');
  }

  // If the discriminant is zero, there is one repeated eigenvalue
  if (d == 0) {
    return [trace / 2];
  }

  // If the discriminant is positive, there are two distinct eigenvalues
  return [(trace + sqrt(d)) / 2, (trace - sqrt(d)) / 2];
}

// A sample main function to test the program
void main() {
  // Read a matrix from standard input
  print('Enter a square matrix:');
  List<List<double>> matrix = readMatrix();

  // Print the eigenvalues of the matrix
  print('The eigenvalues of the matrix are:');
  print(eigenvalues(matrix));
}