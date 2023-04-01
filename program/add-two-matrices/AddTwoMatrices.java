// Java program for addition of two matrices

//  java util package is imported to use scanner class 
import java.util.Scanner;


public class AddTwoMatrices {

  public static void main(String[] args) {
    int size = 4;

    // Declare the object and initialize with predefined standard input object

    Scanner input = new Scanner(System.in);

    // Create matrix A
    System.out.println("Enter the values for matrix A:");
    int[][] A = new int[size][size];
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        //nextInt method of java scanner class is used 
        A[i][j] = input.nextInt(); 
      }
    }


    //int[][] A = {{1, 1, 1, 1},
    //   {2, 2, 2, 2},
    //    {3, 3, 3, 3},
    //    {4, 4, 4, 4}};


    // Print the matrices A
    System.out.println("\nMatrix A:");
    printMatrix(A, size, size);



    // Create matrix B
    System.out.println("\nEnter the values for matrix B:");
    int[][] B = new int[size][size];
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        B[i][j] = input.nextInt();
      }
    }

    //int[][] B = {{1, 1, 1, 1},
    //    {2, 2, 2, 2},
    //    {3, 3, 3, 3},
    //    {4, 4, 4, 4}};



    // Print the matrices B
    System.out.println("\nMatrix B:");
    printMatrix(B, size, size);

    // Add the two matrices
    int[][] C = add(A, B, size);

    // Print the result
    System.out.println("\nResultant Matrix:");
    printMatrix(C, size, size);
  }

  // Function to print Matrix
  static void printMatrix(int[][] M,
                          int rowSize,
                          int colSize) {
    for (int i = 0; i < rowSize; i++) {
      for (int j = 0; j < colSize; j++)
        System.out.print(M[i][j] + " ");

      System.out.println();
    }
  }

  // Function to add the two matrices
  static int[][] add(int[][] A, int[][] B,
                     int size) {
    int i, j;
    int[][] C = new int[size][size];

    for (i = 0; i < size; i++)
      for (j = 0; j < size; j++)
        C[i][j] = A[i][j] + B[i][j];

    return C;
  }
}
