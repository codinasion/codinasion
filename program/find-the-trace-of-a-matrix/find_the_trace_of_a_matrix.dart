// Import dart:io library to use stdin and stdout
import 'dart:io';

// A function to find the trace of a matrix
int trace (List<List<int>> matrix) {
  // Declare a variable to store the sum of diagonal elements
  int sum = 0;

  // Loop through the rows of the matrix
  for (int i = 0; i < matrix.length; i++) {
    // Add the element at (i, i) position to the sum
    sum += matrix [i] [i];
  }

  // Return the sum
  return sum;
}

// A main function to test the trace function
void main () {
  // Declare a variable to store the order of the matrix
  int n;

  // Prompt the user to enter the order of the matrix
  stdout.write ("Enter the order of the matrix: ");

  // Read the input as a string and convert it to an integer
  n = int.parse (stdin.readLineSync ());

  // Declare a list of lists to store the matrix
  List<List<int>> matrix = List.generate (n, (i) => List.filled (n, 0));

  // Prompt the user to enter the elements of the matrix
  print ("Enter the elements of the matrix: ");

  // Loop through the rows of the matrix
  for (int i = 0; i < n; i++) {
    // Loop through the columns of the matrix
    for (int j = 0; j < n; j++) {
      // Read the input as a string and convert it to an integer
      matrix [i] [j] = int.parse (stdin.readLineSync ());
    }
  }

  // Print the trace of the matrix
  print ("Trace of the matrix is ${trace (matrix)}");
}

/* Enter the order of the matrix: 3
Enter the elements of the matrix: 
1
2
3
4
5
6
7
8
9
Trace of the matrix is 15 */
